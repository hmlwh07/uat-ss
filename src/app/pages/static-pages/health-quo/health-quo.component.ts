import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import moment from 'moment';
import { forkJoin, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { AuthService } from '../../../modules/auth';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { HealthPageID } from '../static-pages.data';
import { HealthPaymentService } from './models&services/health-payment.service';
import { HealthRateService } from './models&services/health-rate.service';

@Component({
  selector: 'app-health-quo',
  templateUrl: './health-quo.component.html',
  styleUrls: ['./health-quo.component.scss']
})
export class HealthQuoComponent implements OnInit, OnDestroy {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  @Input() premiumAmt: string
  @Input() sumInsured: any
  showData: any = []
  schedule: any = []
  tempSchedule: any = []
  parentData: any
  totalP: number = 0
  totalL: number = 0
  preLump: number = 0
  preSemi: number = 0
  totalSemi: number = 0
  preAddon: number = 0
  currencyType: string = "MMK"
  unsub: Subscription[] = []
  constructor(private globalFun: GlobalFunctionService, private alertService: AlertService,
    private healthRateService: HealthRateService, private healthPayService: HealthPaymentService,
    private cdf: ChangeDetectorRef, private auth: AuthService, private prodService: ProductDataService,
    private numberPipe: DecimalPipe) { }
  ngOnDestroy(): void {
    this.unsub.forEach(x => x.unsubscribe())
  }

  ngOnInit(): void {
    this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
      if (this.currencyType != res) {
        this.currencyType = res
      }
    })
    this.parentData = this.globalFun.tempFormData[HealthPageID]
    // console.log("PARTENT", this.parentData);

    if (!this.parentData) {
      this.alertService.activate("This page cann't to show because there is no health product detail data. Please add health product detail in prodcut configuration", "Warning")
    } else {
      this.showData.push({ keyName: this.parentData.basicCoverId, value: this.parentData.sumInsuredMainCover })
      // for (let addon of this.product.addOns) {
      // }
      if (this.parentData.addOns && this.parentData.basicCoverId != "CRTILLNESS") {

        this.product.addOns.forEach(addon => {

          if (this.parentData.addOns[addon.id + "opt"]) {
            this.showData.push({ keyName: addon.description, value: this.parentData.addOns[addon.id + "value"] })
          }
        })
      }
      // console.log('SHOWDATA', this.showData)
      this.calculateSchedule()
    }
  }

  calculateSchedule() {
    //lump
    // annually
    // if (this.parentData.paymentFrequency)
    this.totalP = 0
    this.totalL = 0
    let firstTimeValue = 300
    let doCount = this.parentData.paymentFrequency == 'L' ? 1 : 2
    let age;
    console.log("PARENT",this.parentData);
    
    if (this.parentData.age) {
      age = this.parentData.age
    } else {
      age = Math.ceil(moment().diff(this.parentData.dateOfBirth, 'years', true));
    }
    console.log("AGE",age);
    
    this.healthRateService.getOne(age, this.parentData.basicCoverId).toPromise().then((res: any) => {
      // console.log("healthRateService", res);

      if (res) {
        if (this.parentData.paymentFrequency == 'L') {
          this.preLump = res.lumpSum * this.parentData.sumInsuredMainCover
          let pre = res.lumpSum * this.parentData.sumInsuredMainCover
          let levy = firstTimeValue * this.parentData.sumInsuredMainCover
          this.totalP = this.totalP + pre
          this.totalL = levy
          this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: levy })
          firstTimeValue = 0
        } else {
          this.preSemi = res.semiAnnual * this.parentData.sumInsuredMainCover
          let pre = res.semiAnnual * this.parentData.sumInsuredMainCover
          let levy = firstTimeValue * this.parentData.sumInsuredMainCover
          this.totalP = this.totalP + pre
          // console.log("TOTALP", this.totalP);

          this.totalL = levy
          this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: levy })
          firstTimeValue = 0
          this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: 0 })
        }

        // let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL
        if (this.schedule.length > 0) {
          if (this.parentData.paymentFrequency == "L") {
            this.tempSchedule = [
              { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
            ]
          } else {
            // let tempTotal = this.totalP / 2

            let tempTotal = this.totalP
            this.tempSchedule = [
              { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
              { premium: tempTotal, levy: 0, total: tempTotal },
            ]
            this.totalSemi = this.tempSchedule[0].premium + this.tempSchedule[1].premium

          }
        }
        let total = this.parentData.paymentFrequency == 'L' ? this.totalP : this.totalSemi
        let tempPre = this.globalFun.calculateDecimal(total) + this.totalL
        this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK"
        // console.log("THIS>PREMIUM", this.premiumAmt);

        this.globalFun.paPremiumResult.next(this.premiumAmt)
        if (this.parentData.basicCoverId == "CRTILLNESS") {
          this.cdf.detectChanges()
        }
        else
          this.calculateScheduleAddOn(age)
      }

    })

  }

  calculateScheduleAddOn(age: number) {
    console.log("calculateScheduleAddOn",age);
    
    let i = 0
    let pre
    let doCount = this.parentData.paymentFrequency == 'L' ? 1 : 2
    this.product.addOns.forEach(addon => {
      if (this.parentData.addOns[addon.id + "opt"]) {
        let value = this.parentData.addOns[addon.id + "value"]
        // console.log("VALUEE", value);

        i += 1
        this.healthRateService.getOne(age, addon.code).toPromise().then(async (res: any) => {
          // console.log("healthRateService", res);

          if (res) {
            if (this.parentData.paymentFrequency == 'L') {
              pre = res.lumpSum * value
              this.preAddon += pre
              this.totalP = this.preLump + this.preAddon
            } else {

              pre = res.semiAnnual * value
              this.preAddon += pre
              // console.log("PREPRE", this.preAddon);
              this.totalP = this.preSemi + this.preAddon
            }
          }
          if (this.parentData.paymentFrequency == "L") {
            this.tempSchedule = [
              { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
            ]
          } else {
            let tempTotal = this.totalP
            this.tempSchedule = [
              { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
              { premium: tempTotal, levy: 0, total: tempTotal },
            ]
            this.totalSemi = this.tempSchedule[0].premium + this.tempSchedule[1].premium
          }
          let total = this.parentData.paymentFrequency == 'L' ? this.totalP : this.totalSemi
          let tempPre = this.globalFun.calculateDecimal(total) + this.totalL
          this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK "
          // console.log("THIS>PREMIUM", this.premiumAmt);

          this.globalFun.paPremiumResult.next(this.premiumAmt)
          this.cdf.detectChanges()
          // }
        }).catch(e => {
          if (i == this.product.addOns.length) this.cdf.detectChanges()
        })
      }
    })
  }

  async nextPage() {
    // let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL
    // this.premiumAmt = this.numberPipe.transform(tempPre,"1.2-2") + " MMK / month"
    let total = this.parentData.paymentFrequency == 'L' ? this.totalP : this.totalSemi
    let tempPre = this.globalFun.calculateDecimal(total) + this.totalL
    this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK"
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    this.healthPayService.deleteMany(this.resourcesId).pipe(mergeMap((data) => {
      let postData = {
        "resourceData": {
          "agentId": this.auth.currentUserValue.id || 1,
          "customerId": this.prodService.creatingCustomer.customerId || 1,
          "policyNumber": null,
          "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
          "premiumView": this.premiumAmt,
          // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
          // sumInsuredView:this.sumInsured,
          "productId": this.product.id,
          "productCode": this.product.code,
          "quotationId": this.prodService.referenceID,
          "type": this.prodService.type,
          "leadId": this.prodService.creatingLeadId,
          currency: this.currencyType,
        },
        "resourceId": this.resourcesId,
        "requests": []
      }
      postData.requests = this.tempSchedule.map((x) => {
        return {
          "paymentTerm": this.parentData.paymentFrequency,
          "plan": this.parentData.basicCoverId,
          "premium": x.premium,
          "levy": x.levy,
          "coverage": x.coverage,
          "sumInsured": x.sumInsured,
          "resourceId": this.resourcesId,
          "total": x.levy + x.premium,
        }
      })
      return this.healthPayService.saveAll(postData)
    })).toPromise().then((res) => {
      if (res) {
        this.actionEvent.emit({ type: StaticActionType.NEXT })

      }
    })
  }

  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }


}
