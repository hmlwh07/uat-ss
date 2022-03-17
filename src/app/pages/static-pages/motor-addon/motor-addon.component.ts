import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateAdapter } from 'angular-calendar';
import { GlobalFunctionService } from 'src/app/core/global-fun.service';
import { IsJsonString, MY_FORMATS } from 'src/app/core/is-json';
import { Product, ProductPages } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
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
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
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
  constructor(private globalFun: GlobalFunctionService, private prodService: ProductDataService) {
  }

  ngOnInit() {
    this.parentData = this.getParnet()

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
    if (type == 'medical') {
      this.isMedical = this.isMedical
      this.changePlan()
      // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
      // console.log(this.premium);

    }
    if (type == 'cross') {
      this.isCross = this.isCross
      this.premium = this.calcuCross()
    }
  }
  changePlan() {
    if (this.planOption == 'basic') {
      // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
      this.premium=this.calcumotorMedical()
    } else {
      // this.premium =  this.globalFun.motorMedicalExpense(this.parentData)
      this.premium=this.calcumotorMedical()
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
    for (let addon of this.product.addOns) {
      if (this.addOnsData[addon.id].checked && addon.code != "CROSSBRDR") {
        tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0)
      }
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

    return tempPre + excessAmt
  }
  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }
  nextPage() {
    let pageData={
      planOption:this.planOption,
      premium:this.premium,
      startDate:this.startDate,
      endDate:this.endDate,
      option1:this.option1,
      option2:this.option2
    }
    this.globalFun.tempFormData[AddOnID] = pageData
    this.actionEvent.emit({ type: StaticActionType.NEXT })
  }
}
