import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateAdapter } from 'angular-calendar';
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
  @Output() changeCheck = new EventEmitter<any>();
  primary = 'primary'
  isMedical: boolean = false
  isCross: boolean = false
  planOption: any = 'basic';
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
  constructor(private globalFun: GlobalFunctionService, private prodService: ProductDataService, private numberPipe: DecimalPipe, private addOnQuoService: AddOnQuoService, private pageDataService: PageDataService, private cdf: ChangeDetectorRef) {
  }

  async ngOnInit() {
    this.optionId = this.optionId ? this.optionId : this.resourcesId
    this.parentData = this.getParnet()
    let medID = this.product.addOns.find(x => x.code == "MED EXP")
    let crossID = this.product.addOns.find(x => x.code == "CROSSBRDR")
    let postData = {
      quotationNo: this.resourcesId,
      addOnIds: [],
      optionalKey: this.optionId
    }
    if (medID) {
      postData.addOnIds.push(medID)
    }
    if (crossID) {
      postData.addOnIds.push(crossID)
    }
    let results: any = await this.addOnQuoService.getAllById(postData).toPromise()
    let response = results.find(x => x.addonId == medID)
    if (response) {
      this.isMedical = true
      this.planOption = response.option
      this.toggleChange('medical')
    }
    let response2 = results.find(x => x.addonId == crossID)
    if (response2) {
      this.isCross = true
      this.startDate = response.startDate
      this.endDate = response.endDate
      this.option1 = response.option1
      this.option2 = response.option2
      this.toggleChange('cross')
    }
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
      this.changePlan()
      // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
      // console.log(this.premium);
      this.cdf.detectChanges()
    }
    if (type == 'cross') {
      this.isCross = !this.isCross
      // this.crossPremium = this.isCross ? this.calcuCross() : 0
      this.cdf.detectChanges()
    }
  }
  changePlan() {
    if (this.planOption == 'basic') {
      // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
      this.medPremium = this.calcumotorMedical()
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

  calcuCross(addOnsData) {
    let tempPre = 0
    // let addOnsData = this.globalFun.tempFormData['addon_1634010770155']
    for (let addon of addOnsData) {
      // if (this.addOnsData[addon.id].checked && addon.code != "CROSSBRDR") {
      if (this.addOnsData[addon.id])
        tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0)
      // }
    }
    if (this.isMedical) {
      tempPre += this.globalFun.calculateDecimal(this.medPremium)
    }
    let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : []
    for (let cov of coverageData) {
      tempPre += this.globalFun.calculateDecimal(cov.premium || 0)
    }
    // let crossPre = tempPre * 0.15
    let currency: string = this.parentData ? this.parentData.m_currency : 'MMK'
    let excessAmt = 0
    if (this.parentData) {
      let excess = this.parentData['m_excess']
      if (excess == "T-NILEX" && currency == "MMK") {
        excessAmt = 50000
      } else if (excess == "TU-NILEX") {
        excessAmt = 25
      }
    }
    let term = this.parentData['m_policy_term']
    let percent = this.crossPercent[term] || 1
    this.crossPremium = ((tempPre + excessAmt) * 0.15) * percent
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
    this.actionEvent.emit({ type: StaticActionType.NEXT })
  }

  savePremimun() {
    let premiumAmt = this.caluMotorPremimun()
    let postData = {
      "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
      "premiumView": this.premiumAmt,
      "resourceId": this.resourcesId,
      "type": this.prodService.viewType
    }
    return this.pageDataService.updatePremimun(postData)
  }

  caluMotorPremimun() {
    let tempPre = 0
    let tempArray = this.globalFun.tempFormData['addon_1634010770155'] || []
    for (let addon of tempArray) {
      // if (this.addOnsData[addon.id].checked) {
      tempPre += this.globalFun.calculateDecimal(addon.premium || 0)
      // }
    }
    let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : []
    for (let cov of coverageData) {
      tempPre += this.globalFun.calculateDecimal(cov.premium || 0)
    }
    let currency: string = this.parentData ? this.parentData.m_currency : 'MMK'
    let discount = 0
    if (this.parentData) {
      let excess = this.parentData['m_excess']
      let excess_discount = this.parentData['excess_discount']
      if (excess == "T-NILEX" && currency == "MMK") {
        discount = -50000
      } else if (excess == "TU-NILEX") {
        discount = -25
      } else if (excess == "T-ED" && currency == "MMK") {
        if (excess_discount == "T-EXD1") {
          discount = 50000
        } else if (excess_discount == "T-EXD2") {
          discount = 70000
        } else if (excess_discount == "T-EXD3") {
          discount = 100000
        }
      }
    }
    let stumd = currency == "MMK" ? 100 : 1
    let preAMT = (tempPre - discount)
    let term = this.parentData['m_policy_term']
    let percent = this.crossPercent[term] || 1
    preAMT = (term * percent) + stumd
    this.premiumAmt = this.numberPipe.transform(preAMT) + " " + currency.toUpperCase()
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    return preAMT
  }
}
