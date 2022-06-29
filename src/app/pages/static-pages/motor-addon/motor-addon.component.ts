import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateAdapter } from 'angular-calendar';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from 'src/app/core/global-fun.service';
import { IsJsonString, MY_FORMATS } from 'src/app/core/is-json';
import { PolicyDTO } from '../../policy/policy.dto';
import { PageDataService } from '../../product-form/page-data.service';
import { Product, ProductPages } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { AddOnID } from '../static-pages.data';

@Component({
  selector: 'app-motor-addon',
  templateUrl: './motor-addon.component.html',
  styleUrls: ['./motor-addon.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class MotorAddonComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  @Input() optionId: string
  @Input() premiumAmt: string = ''
  @Input() sumInsured:string=''
  @Output() changeCheck = new EventEmitter<any>();
  primary = 'primary'
  isMedical: boolean = false
  isCross: boolean = false
  planOption: any = 'basic';
  unsubscribe: Subscription[] = []
  planOptionOption: any = [
    {
      code: 'basic', value: 'Basic Plan'
    },
    {
      code: 'special', value: 'Special Plan'
    },
  ]
  premium: any
  startDate: any
  endDate: any
  option1: string = "Digital Source Place"
  option2: string = "Digital Destination Place"
  parentData: any = {}
  addOnsData: any = {}
  medPremium: any
  crossPremium: any
  crossPercent = {
    "T-004": 0.35,
    "T-003": 0.60,
    "T-002": 0.85,
    "T-001": 1,
  }
  constructor(private globalFun: GlobalFunctionService, private productService: ProductDataService, private prodService: ProductDataService, private numberPipe: DecimalPipe, private addOnQuoService: AddOnQuoService, private pageDataService: PageDataService, private cdf: ChangeDetectorRef) {
  }

  async ngOnInit() {
    this.optionId = this.optionId ? this.optionId : this.resourcesId
    this.parentData = this.getParnet()
    console.log("PARENDT",this.parentData);
    
    let medID = this.product.addOns.find(x => x.code == "MED EXP")
    let crossID = this.product.addOns.find(x => x.code == "CROSSBRDR")
    let postData = {
      quotationNo: this.resourcesId,
      addOnIds: [],
      optionalKey: this.optionId
    }
    if (medID) {
      postData.addOnIds.push(medID.id)
    }
    if (crossID) {
      postData.addOnIds.push(crossID.id)
    }
    let results: any = await this.addOnQuoService.getAllById(postData).toPromise()
    if (medID) {
      let response = results.find(x => x.addonId == medID.id)
      if (response) {
        this.isMedical = true
        this.planOption = response.option
        this.toggleChange('medical')
      }
    }
    if (crossID) {
      let response2 = results.find(x => x.addonId == crossID.id)
      if (response2) {
        this.isCross = true
        this.startDate = response2.startDate
        this.endDate = response2.endDate
        this.option1 = response2.option1
        this.option2 = response2.option2
        this.toggleChange('cross')
      }
    }
    // here detect change
    this.cdf.detectChanges()
  }

  getParnet(tableName: string = 'm_detail') {
    if (IsJsonString(this.product.config)) {
      let pageUI: ProductPages = JSON.parse(this.product.config);
      let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || []
      let parent = pageOrder.find(page => page.tableName == tableName)
      if (parent) {
        return this.globalFun.tempFormData[parent.tableName + parent.id] || null
      }
      return null
    }
    return null
  }

  toggleChange(type) {
    // console.log(type);

    if (type == 'medical') {
      this.isMedical = !this.isMedical
      if (!this.isMedical) {
        this.medPremium = 0
        this.caluMotorPremimun()
      }
      this.changePlan()
      // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
      // console.log(this.premium);
      this.cdf.detectChanges()
    }
    if (type == 'cross') {
      this.isCross = !this.isCross
      if (!this.isCross) {
        this.crossPremium = 0
        this.caluMotorPremimun()
      }
      // this.crossPremium = this.isCross ? this.calcuCross() : 0
      this.calcuCross()
      this.cdf.detectChanges()
    }
  }
  changePlan() {
    if (this.planOption == 'basic') {
      // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
      this.medPremium = this.calcumotorMedical()
      this.premiumAmt
    } else {
      // this.premium =  this.globalFun.motorMedicalExpense(this.parentData)
      this.medPremium = this.calcumotorMedical()
    }

  }
  calcumotorMedical() {
    let fix = 0
    if (this.planOption == 'basic') {
      fix = 20
    } else {
      fix = 30
    }
    return fix
  }

  calcuCross() {
    let tempPre = 0
    let addOnsData = this.globalFun.tempFormData['addon_1634010770155']
    for (let addon of addOnsData) {
      // if (this.addOnsData[addon.id].checked) {
      tempPre += this.globalFun.calculateDecimal(addon.premium || 0)
      // }
    }

    if (this.isMedical) {
      console.log("isMedical", this.isMedical);

      tempPre += this.medPremium
    }
    let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : []
    for (let cov of coverageData) {
      console.log("COV", cov);

      tempPre += this.globalFun.calculateDecimal(cov.premium || 0)
    }
    // let crossPre = tempPre * 0.15
    let currency: string = this.parentData ? this.parentData.m_currency : 'MMK'
    let excessAmt = 0
    if (this.parentData) {
      let excess = this.parentData['m_excess']
      let vehicle=this.parentData['m_type_of_vehicle']
      let purpose=this.parentData['m_purpose_of_use']
      console.log("EXCESS", excess);

      if (excess == "T-NILEX" && currency == "MMK") {
        if(vehicle='T-MCC'&& purpose=='T-PRI'){
          excessAmt=5000
        }else if (vehicle='T-MCC'&& purpose=='T-COM'){
          excessAmt=10000
        }
        else{
          excessAmt = 50000
        }
      }
      // else if (excess == 'T-STNDEX' && currency == "MMK") {
      //   excessAmt = 100000
      // }
      else if (excess == "TU-NILEX" && currency == "USD") {
        excessAmt = 25
      }
      // else if (excess == "TU-STNDEX" && currency == "USD") {
      //   excessAmt = 100
      // }
    }

    let term = this.parentData['m_policy_term']
    let percent = this.crossPercent[term] || 1
    // * percent
    let cross = ((tempPre + excessAmt) * 0.15)
    this.crossPremium = this.globalFun.calculateDecimal(cross || 0)
  }
  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }
  async nextPage() {
    const quoService = this.addOnQuoService
    let medID = this.product.addOns.find(x => x.code == "MED EXP")
    if (medID)
      await quoService.deleteOne(medID, this.resourcesId, this.resourcesId)
    if (this.isMedical) {
      this.medPremium = typeof this.medPremium != "string" ? this.medPremium + "" : this.medPremium
      if (medID) {
        let postData = {
          addonId: medID.id,
          quotationNo: this.resourcesId,
          optionalKey: this.resourcesId,
          premium: this.medPremium.replace(',', '').replace('MMK', '').replace('USD', ''),
          option: this.planOption,
        }
        let res = await quoService.save(postData).toPromise()
        if (this.globalFun.tempFormData['addon_1634010770155']) {
          this.globalFun.tempFormData['addon_1634010770155'].push(postData)
        } else {
          this.globalFun.tempFormData['addon_1634010770155'] = [postData]
        }
      }

    }
    let crossID = this.product.addOns.find(x => x.code == "CROSSBRDR")
    if (crossID)
      await quoService.deleteOne(crossID, this.resourcesId, this.resourcesId)

    if (this.isCross) {
      this.crossPremium = typeof this.crossPremium != "string" ? this.crossPremium + "" : this.crossPremium
      if (crossID) {
        let postData = {
          addonId: crossID.id,
          quotationNo: this.resourcesId,
          optionalKey: this.resourcesId,
          premium: this.crossPremium.replace(',', '').replace('MMK', '').replace('USD', ''),
          startDate: this.startDate,
          endDate: this.endDate,
          option: this.option1,
          option2: this.option2
        }
        let res = await quoService.save(postData).toPromise()
        // if (this.globalFun.tempFormData['addon_1634010770155']) {
        //   this.globalFun.tempFormData['addon_1634010770155'].push(postData)
        // } else {
        //   this.globalFun.tempFormData['addon_1634010770155'] = [postData]
        // }
      }

    }
    await this.savePremimun()
    // this.globalFun.tempFormData[AddOnID] = pageData

  }

  async savePremimun() {
    let currency: string = this.parentData ? this.parentData.m_currency : 'MMK'
    let premiumAmt = await this.caluMotorPremimun()
    let premiumAmtView = await this.numberPipe.transform(premiumAmt || 0, "1.2-2") + " " + currency.toUpperCase()
    let inception:string=''
    let postData = {
      "premium": Number(premiumAmt || 0) + "",
      "premiumView": premiumAmtView,
      "resourceId": this.resourcesId,
      "type": this.prodService.viewType,
      "sumInsured":(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
      "sumInsuredView":this.sumInsured,
    }
  
    this.pageDataService.updatePremimun(postData).toPromise().then((res) => {
      if (res) {
        this.actionEvent.emit({ type: StaticActionType.NEXT })
      }
    })
  }

  async caluMotorPremimun() {
    let tempPre = 0
    let tempPre2 = 0
    let tempArray = this.globalFun.tempFormData['addon_1634010770155'] || []
    for (let addon of tempArray) {
      // if (this.addOnsData[addon.id].checked) {
      console.log("addonPremium", this.globalFun.calculateDecimal(addon.premium));

      tempPre += this.globalFun.calculateDecimal(addon.premium || 0)
      // }
    }
    let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : []
    for (let cov of coverageData) {
      console.log("covPremium", this.globalFun.calculateDecimal(cov.premium));
      tempPre += this.globalFun.calculateDecimal(cov.premium || 0)
    }
    if (this.isMedical) {
      console.log("isMedical", this.isMedical);

      tempPre += this.globalFun.calculateDecimal(this.medPremium || 0)
    }
    console.log("TEMPPRE", tempPre);

    let currency: string = this.parentData ? this.parentData.m_currency : 'MMK'
    let discount = 0
    let discount2 = 0
    console.log("PARENT", this.parentData);

    if (this.parentData) {
      let excess = this.parentData['m_excess']
      let excess_discount = this.parentData['m_excess_discount']
      let vehicle=this.parentData['m_type_of_vehicle']
      let purpose=this.parentData['m_purpose_of_use']
      console.log(excess, excess_discount);

      if (excess == "T-NILEX" && currency == "MMK") {
        if(vehicle='T-MCC'&& purpose=='T-PRI'){
          discount = -5000
          discount2 = -5000
        }else if (vehicle='T-MCC'&& purpose=='T-COM'){
          discount = -10000
          discount2 = -10000
        }
        else{
          discount = -50000
          discount2 = -50000
        }
      } else if (excess == "TU-NILEX" && currency == "USD") {
        discount = -25
        discount2 = -25
      }
      // else if (excess == "TU-STNDEX" && currency == "USD") {
      //   discount = -100
      // }
      // else if (excess == 'T-STNDEX' && currency == "MMK") {
      //   discount = -100000
      // }
      else if (excess == "T-ED" && currency == "MMK") {
        if (excess_discount == "T-EXD1") {

          discount = 50000
        } else if (excess_discount == "T-EXD2") {
          discount = 70000
        } else if (excess_discount == "T-EXD3") {
          discount = 100000
        }
      }
    }
    console.log("discount", discount);

    let stumd = currency == "MMK" ? 100 : 0.05
    console.log("TOTAL+CROSS", (tempPre + Number(this.crossPremium || 0)));

    let preAMT = ((tempPre + Number(this.crossPremium || 0)) - discount)
    let preAMT2 = ((tempPre + Number(this.crossPremium || 0)) - discount2)
    console.log("Premium-Cross-Discount/New Amount", preAMT, preAMT2);

    let term = this.parentData['m_policy_term']
    console.log("Policy-TERM", term);

    let percent = this.crossPercent[term] || 1
    console.log("TERM-Percent", percent);

    // preAMT = (preAMT * percent) + stumd
    preAMT = (preAMT) + stumd
    preAMT2 = (preAMT2)
    console.log("TOTAL-Premium-Result/New Amount", preAMT, preAMT2);


    this.premiumAmt = this.numberPipe.transform(preAMT, "1.2-2") + " " + currency.toUpperCase()
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    return preAMT
  }
}
