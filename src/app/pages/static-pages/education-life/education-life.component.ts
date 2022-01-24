import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { forkJoin, Observable, of } from 'rxjs';
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
import { EducationLifeID } from '../static-pages.data';
import { EduPremRateService, EduSurrRateService } from './models&services/education-life-rate.service';
import { EduPaymentService } from './models&services/education-life.service';

@Component({
  selector: 'app-education-life',
  templateUrl: './education-life.component.html',
  styleUrls: ['./education-life.component.scss']
})
export class EducationLifeComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  parentData: any
  premimuRate = {
    "9opt": 5,
    "11opt": 7,
    "14opt": 10,
  }
  frequency = {
    monthly: 1,
    quarterly: 4,
    semi_annually: 6,
    annually: 12,
  }
  lists: number[] = []
  currentAge: number
  premimuRateNum: number
  sumInsured: number
  frequencyValue: number
  plan: string
  policyTermCode: string
  premiumRate: any[] = []
  surrendRate: any[] = []
  showDatas: any[] = []
  premiumAmt
  constructor(
    private globalFun: GlobalFunctionService,
    private alertService: AlertService,
    private prodService: ProductDataService,
    private eduPreService: EduPremRateService,
    private eduSurrService: EduSurrRateService,
    private eduPayment: EduPaymentService,
    private cdf: ChangeDetectorRef,
    private auth: AuthService,
    private numberPipe: DecimalPipe,
  ) { }

  ngOnInit(): void {
    this.parentData = this.getParnet()
    if (!this.parentData) {
      this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration", "Warning")
    } else {

      this.getRateValue().pipe(switchMap((res) => {
        if (!res[0] || !res[1]) throw res
        return of({ premium: res[0], surrend: res[1] })
      })).toPromise().then((res) => {

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
    let doub = this.plan == "001" ? 1 : 2
    this.lists.forEach((x, i) => {
      let objData = {
        resourceId: this.resourcesId,
        endOfPolicyYear: x,
        age: this.currentAge + i,
        benefitPlan: this.plan,
        premiumPaid: this.premimuRateNum >= x ? this.calculatePre(this.currentAge + i, x) : 0,
        deathBenefit: this.sumInsured * doub,
        surrenderValue: this.calculateSur(x),
        maturityBenefit: this.calculateSur(x) * 0.9
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
    this.premimuRateNum = this.premimuRate[policyTermValue + "opt"]
    this.policyTermCode = this.parentData['policy_term']
    this.sumInsured = this.parentData['sum_insured']
    this.plan = this.parentData['insured_plan']
    let dob = this.parentData['date_of_birth']
    this.currentAge = Math.ceil(moment().diff(dob, 'years', true));
    let paymentFrequency = this.parentData['payment_frequency']
    this.frequencyValue = this.frequency[paymentFrequency]
    this.lists = Array.from({ length: policyTermValue }, (_, i) => i + 1)
    return true
  }

  getParnet() {
    if (IsJsonString(this.product.config)) {
      let pageUI: ProductPages = JSON.parse(this.product.config);
      let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || []
      let parent = pageOrder.find(page => page.tableName == 'el_detail')
      if (parent) {
        return this.globalFun.tempFormData[parent.tableName + parent.id] || null
      }
      return null
    }
    return null
  }

  calculatePre(age: number, year: number): number {
    // console.log();
    let tempRate = 15.5
    let rate = this.premiumRate.find(x => x.age == age)
    if (rate) {
      tempRate = rate.rate
    }
    // this.frequencyValue
    let monthly = ((tempRate / 1000) * this.sumInsured)
    if (year == 1) {
      console.log(this.frequencyValue);
      let tempPre = (this.globalFun.calculateDecimal(monthly * this.frequencyValue) + 1500)
      this.premiumAmt = this.numberPipe.transform(tempPre) + " MMK / " + this.parentData['payment_frequency']
      this.globalFun.paPremiumResult.next(this.premiumAmt)
    }
    return this.globalFun.calculateDecimal(monthly * 12) * year
  }

  calculateSur(year: number): number {
    let tempRate = 10
    let rate = this.surrendRate.find(x => x.year == year)
    if (rate) {
      tempRate = rate.rate
      let surrend = (tempRate / 100) * this.sumInsured
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
    return this.eduPreService.getMany(this.parentData['insured_plan'], this.parentData['policy_term'])
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
            "policyNumber": null,
            "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            "premiumView": this.premiumAmt,
            "productId": this.product.id,
            "quotationId": this.prodService.referenceID,
            "type": this.prodService.type
          },
          "resourceId": this.resourcesId
        }
        return this.eduPayment.saveMany(postData)
      })).toPromise().then((res) => {
        if (res) {
          this.globalFun.tempFormData[EducationLifeID] = this.showDatas
          this.actionEvent.emit({ type: StaticActionType.NEXT })
        }
      })
    }

  }
  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }

}
