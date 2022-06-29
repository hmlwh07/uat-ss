import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { map, mergeMap, retry, switchMap } from 'rxjs/operators';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { IsJsonString } from '../../../core/is-json';
import { AuthService } from '../../../modules/auth';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product, ProductPages } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { EndowmentID } from '../static-pages.data';
import { EndoRateService, EndoSurrRateService } from './models&services/endo-rate.service';
import { EndoService } from './models&services/endo.service';

@Component({
  selector: 'app-endo',
  templateUrl: './endo.component.html',
  styleUrls: ['./endo.component.scss']
})
export class EndoComponent implements OnInit,OnDestroy {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  parentData: any
  parentData2: any
  premimuRate = {
    "5opt": 5,
    "7opt": 7,
    "10opt": 10,
  }
  frequency = {
    monthly: 12,
    quarterly: 4,
    semi_annually: 6,
    annually: 1,
  }
  lists: number[] = []
  currentAge: number
  premimuRateNum: number
  sumInsured: any
  frequencyValue: number
  policyTermCode: string
  premiumRate: any[] = []
  surrendRate: any[] = []
  showDatas: any[] = []
  premiumAmt: any

  currencyType: string = "MMK"
  unsub: Subscription[] = []
  constructor(
    private globalFun: GlobalFunctionService,
    private alertService: AlertService,
    private prodService: ProductDataService,
    private eduPreService: EndoRateService,
    private eduSurrService: EndoSurrRateService,
    private eduPayment: EndoService,
    private cdf: ChangeDetectorRef,
    private auth: AuthService,
    private numberPipe: DecimalPipe,
  ) { }
  ngOnDestroy(): void {
    this.unsub.forEach(x => x.unsubscribe())
  }

  ngOnInit(): void {
    this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
      if (this.currencyType != res) {
        this.currencyType = res
      }
    })
    this.parentData = this.getParnet()
    this.parentData2 = this.getParnet(true)
    if (!this.parentData) {
      this.alertService.activate("This page cann't to show because there is no endowment product detail data. Please add endowment product detail in prodcut configuration", "Warning")
    } else {

      this.getRateValue().pipe(switchMap((res) => {
        if (!res[0] || !res[1]) throw res
        return of({ premium: res[0], surrend: res[1] })
      })).toPromise().then((res) => {
        console.log(res);

        if (res) {
          this.premiumRate = res.premium
          this.surrendRate = res.surrend
          this.createListData()
        }
      }).catch(e => {
        console.log(e);
      })
      // rate age benifitPlan policyTerm year
      // this.parentData['sum_insured'] this.parentData['sum_insured']
      // paPolicyValidationResult
    }
  }

  createListData() {

    this.getcalculateData()
    this.showDatas = []
    // console.log(this.premimuRate[policyTermValue + "opt"]);
    this.lists.forEach((x, i) => {
      let objData = {
        resourceId: this.resourcesId,
        endOfPolicyYear: x,
        age: this.currentAge + i,
        premiumPaid: this.premimuRateNum >= x ? this.calculatePre(this.currentAge, x) : 0,
        benefit: this.sumInsured,
        surrenderValue: this.calculateSur(x),
        policyLoan: this.calculateSur(x) * 0.9
      }
      // {
      //   "age": 0,
      //   "benefitPlan": "string",
      //   "deathBenefit": 0,
      //   "id": 0,
      //   "maturityBenefit": 0,
      //   "premiumPaid": 0,
      //   "resourceId": "string",
      //   "surrenderValue": 0
      // }
      this.showDatas.push(objData)
      if (i + 1 == this.lists.length) {
        this.cdf.detectChanges()
      }
    })

  }

  getcalculateData() {
    let policyTerm: any = this.globalFun.paPolicyValidationResult.value
    let policyTermValue = policyTerm.validationValue
    console.log(policyTermValue, policyTerm);

    this.premimuRateNum = this.premimuRate[policyTermValue + "opt"]
    this.policyTermCode = this.parentData['policy_term']
    this.sumInsured = this.parentData['sum_insured']
    let dob = this.parentData2['date_of_birth']
    this.currentAge = Math.ceil(moment().diff(dob, 'years', true));
    let paymentFrequency = this.parentData['payment_frequency']
    this.frequencyValue = this.frequency[paymentFrequency]
    this.lists = Array.from({ length: policyTermValue }, (_, i) => i + 1)
    return true
  }

  getParnet(life?: boolean) {
    if (IsJsonString(this.product.config)) {
      let pageUI: ProductPages = JSON.parse(this.product.config);
      // console.log("pageUI",pageUI);
      let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || []
      let parent: any = {}
      if (life)
        parent = pageOrder.find(page => page.tableName == "life_insured_endow")
      else
        parent = pageOrder.find(page => page.tableName == "endo_detail")

      if (parent) {
        return this.globalFun.tempFormData[parent.tableName + parent.id] || null
      }
      return null
    }
    return null
  }

  calculatePre(age: number, year: number): number {
    // console.log();
    let tempRate = 0
    let rate = this.premiumRate.find(x => x.formAge <= age && x.toAge >= age)
    if (rate) {
      tempRate = rate.rate
    }
    // this.frequencyValue
    let monthly = ((tempRate / 1000) * this.sumInsured)
    if (year == 1) {
      let tempPre = (this.globalFun.calculateDecimal(monthly / this.frequencyValue))
      tempPre = this.globalFun.calculateDecimal(tempPre + ((monthly) * 0.0003))
      this.premiumAmt = this.numberPipe.transform(tempPre,"1.2-2") + " MMK / " + this.parentData['payment_frequency']
      this.globalFun.paPremiumResult.next(this.premiumAmt)
    }
    return this.globalFun.calculateDecimal(monthly) * year
  }

  calculateSur(year: number): number {
    let tempRate = 10
    let rate = this.surrendRate.find(x => x.premiumPaidYear == year)
    if (rate) {
      tempRate = rate.rate
      let surrend = (tempRate / 1000) * this.sumInsured
      return surrend
    }
    return 0
  }

  getRateValue(): Observable<any> {
    return forkJoin([this.getPRate(), this.getSurRate()]).pipe(map((res) => {
      return res
    }))
  }

  getPRate() {
    return this.eduPreService.getMany(this.parentData['policy_term'])
  }

  getSurRate() {
    return this.eduSurrService.getMany(this.parentData['policy_term'])
  }
  nextPage() {
    if (this.showDatas.length > 0) {
      this.eduPayment.deleteMany(this.resourcesId).pipe(mergeMap((res: any) => {
        let postData = {
          "request": this.showDatas,
          "resourceDataDTO": {
            "agentId": this.auth.currentUserValue.id || 1,
            "customerId": this.prodService.creatingCustomer.customerId || 1,
            "leadId": this.prodService.creatingLeadId || 1,
            currency: this.currencyType,
            "policyNumber": null,
            "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            "premiumView": this.premiumAmt,
            "sumInsured":(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
            "sumInsuredView":this.sumInsured,
            "productId": this.product.id,
            "productCode":this.product.code,
            "quotationId": this.prodService.referenceID,
            "type": this.prodService.type
          },
          "resourceId": this.resourcesId
        }
        return this.eduPayment.saveMany(postData)
      })).toPromise().then((res) => {
        if (res) {
          this.globalFun.tempFormData[EndowmentID] = this.showDatas
          this.actionEvent.emit({ type: StaticActionType.NEXT })
        }
      })
    }

  }
  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }

}
