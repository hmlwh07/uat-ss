import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { AddOn, Product, ProductPages } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { PageDataService } from "../../product-form/page-data.service"
import { IsJsonString } from '../../../core/is-json';
import { LoadingService } from '../../../modules/loading-toast/loading/loading.service';
@Component({
  selector: 'app-addon-page',
  templateUrl: './addon-page.component.html',
  styleUrls: ['./addon-page.component.scss']
})
export class AddonPageComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  addOns = {
    isSum: false,
    isUnit: false,
    isPremium: false,
  }
  refID: any
  addOnsData: any = {}
  unsubscribe: Subscription[] = []
  @Input() premiumAmt: string = ''
  premiun
  parentData: any = {}
  isLoading = true
  constructor(private addOnQuoService: AddOnQuoService, private globalFun: GlobalFunctionService, private cdRef: ChangeDetectorRef, private prodService: ProductDataService, private numberPipe: DecimalPipe, private pageDataService: PageDataService, private loadingService: LoadingService) { }

  async ngOnInit() {
    this.refID = this.prodService.referenceID
    if (this.product.code == "PLMO02") {
      this.parentData = this.getParnet()
    }
    if (this.product.addOns && this.product.addOns.length > 0) {
      await this.loadingService.activate()
      this.addOns = {
        isSum: this.product.addOns[0].sumInsured,
        isUnit: this.product.addOns[0].unit,
        isPremium: this.product.addOns[0].premium,
      }
      let callAddon = true
      let postData = {
        quotationNo: this.resourcesId,
        addOnIds: this.product.addOns.map(x => { return x.id })
      }
      let results: any = await this.addOnQuoService.getAllById(postData).toPromise()
      if (results.length == 0) {
        postData.quotationNo = this.refID
        results = await this.addOnQuoService.getAllById(postData).toPromise()
      }
      for (const item of this.product.addOns) {
        item['show'] = true
        if (item.validationFun) {
          item['show'] = this.globalFun[item.validationFun] ? this.globalFun[item.validationFun](this.parentData) : true
        }
        let response = results.find(x => x.addonId == item.id)
        // if (item['show']) {
        this.addOnsData[item.id] = {
          checked: response && item['show'] ? true : false,
          sum: response ? response.sumInsured || 0 : 0,
          unit: response ? response.unit || 0 : 0,
          premium: response ? response.premium || 0 : 0
        }

        if (item.sumInsured) {
          this.getGlobalFun(item.sumInsuredStr, 'addOnsData', item.id, 'sum', item)
        }
        if (item.unit) {
          this.getGlobalFun(item.unitStr, 'addOnsData', item.id, 'unit', item)
        }
        if (item.premium) {
          if (item.code == "cross_addon" && this.addOnsData[item.id].checked) {

          } else {
            this.getGlobalFun(item.premiumStr, 'addOnsData', item.id, 'premium', item)
          }
        }
        // }
      }
      // if (callAddon && this.editData && this.refID) {
      //   for (const item of this.product.addOns) {
      //     let response: any = null;
      //     try {
      //       response = await this.addOnQuoService.getOne(item.id, this.refID).toPromise()
      //     } catch (error) {
      //       response = null
      //     }
      //     this.addOnsData[item.id] = {
      //       checked: response ? true : false,
      //       sum: response ? response.sumInsured || 0 : 0,
      //       unit: response ? response.unit || 0 : 0,
      //       premium: response ? response.premium || 0 : 0
      //     }
      //   }
      // }
      this.isLoading = false
      await this.loadingService.deactivate()
      this.cdRef.detectChanges();

    } else {
      this.isLoading = false
    }
  }

  getGlobalFun(funName: string, mainObj: string, mainKey, subKey: string, addon: any) {

    if (this.product.code == "PLMO02" && subKey == "premium") {
      if (this.globalFun[funName]) {
        let parentValueObj = addon.code == "uid_md_007" ? this.getParnet('motor_driver') : this.parentData
        let unsub = this.globalFun[funName](parentValueObj).subscribe((res) => {
          this[mainObj][mainKey][subKey] = res
          this.cdRef.detectChanges();
        })
        this.unsubscribe.push(unsub)
      } else {
        if (funName) {
          // if (addon.code == "cross_addon" && this.product.code == "PLMO02" && subKey == "premium") {
          //   this[mainObj][mainKey][subKey] = this.calcuCross() * 0.15
          // }else{
          this[mainObj][mainKey][subKey] = funName
          // }
        }
      }
    } else {
      if (this.globalFun[funName + "Result"]) {
        let unsub = this.globalFun[funName + "Result"].subscribe((res) => {
          this[mainObj][mainKey][subKey] = res
          this.cdRef.detectChanges();
        })
        this.unsubscribe.push(unsub)
      } else {
        if (funName)
          this[mainObj][mainKey][subKey] = funName
      }
    }
  }

  async nextPage() {
    const quoService = this.addOnQuoService
    const posDataArray = this.addOnsData
    await quoService.deleteAll(this.resourcesId).toPromise()
    for (let addon of this.product.addOns) {
      if (posDataArray[addon.id].checked) {
        let sum = posDataArray[addon.id].sum ? posDataArray[addon.id].sum + "" : ""
        let unit = posDataArray[addon.id].unit ? posDataArray[addon.id].unit + "" : ""
        let premium = posDataArray[addon.id].premium ? posDataArray[addon.id].premium + "" : ""
        try {
          let postData = {
            addonId: addon.id,
            quotationNo: this.resourcesId,
            sumInsured: (sum).replace(',', '').replace('MMK', '').replace('USD', ''),
            unit: (unit).replace(',', '').replace('MMK', '').replace('USD', ''),
            premium: (premium).replace(',', '').replace('MMK', '').replace('USD', ''),
          }
          let res = await quoService.save(postData).toPromise()
        } catch (error) {
          // console.log(error);

        }
      }

    }
    if (this.product.code == "PLMO02") {
      await this.savePremimun().toPromise()
    }
    console.log("end");

    this.actionEvent.emit({ type: StaticActionType.NEXT })
  }

  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }

  onCheckAddon() {

  }

  changeOption(addon: AddOn) {
    if (addon.code != "cross_addon" && this.product.code == "PLMO02") {
      let cross = this.product.addOns.find(x => x.code == "cross_addon")
      if (this.addOnsData[cross.id].checked) {
        let tempPre = this.calcuCross()
        this.addOnsData[cross.id]['premium'] = tempPre * 0.15
      }
    } else if (this.addOnsData[addon.id].checked && addon.code == "cross_addon") {
      let tempPre = this.calcuCross()
      this.addOnsData[addon.id]['premium'] = tempPre * 0.15
    }
    else if (!this.addOnsData[addon.id].checked && addon.code == "cross_addon") {
      this.addOnsData[addon.id]['premium'] = 0
    }
  }

  calcuCross() {
    let tempPre = 0
    for (let addon of this.product.addOns) {
      if (this.addOnsData[addon.id].checked && addon.code != "cross_addon") {
        tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0)
      }
    }
    let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : []
    for (let cov of coverageData) {
      tempPre += this.globalFun.calculateDecimal(cov.premium || 0)
    }
    // let crossPre = tempPre * 0.15
    let currency: string = this.parentData ? this.parentData.currency : 'mmk'
    let excessAmt = 0
    if (this.parentData) {
      let excess = this.parentData['excess']
      if (excess == "T-002" && currency == "mmk") {
        excessAmt = 50000
      } else if (excess == "T-005") {
        excessAmt = 25
      }
    }

    return tempPre + excessAmt
  }

  caluMotorPremimun() {
    let tempPre = 0
    for (let addon of this.product.addOns) {
      if (this.addOnsData[addon.id].checked) {
        tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0)
      }
    }
    let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : []
    for (let cov of coverageData) {
      tempPre += this.globalFun.calculateDecimal(cov.premium || 0)
    }
    let currency: string = this.parentData ? this.parentData.currency : 'mmk'
    let discount = 0
    if (this.parentData) {
      let excess = this.parentData['excess']
      let excess_discount = this.parentData['excess_discount']
      if (excess == "T-002" && currency == "mmk") {
        discount = -50000
      } else if (excess == "T-005") {
        discount = -25
      } else if (excess == "T-003" && currency == "mmk") {
        if (excess_discount == "T-001") {
          discount = 50000
        } else if (excess_discount == "T-002") {
          discount = 70000
        } else if (excess_discount == "T-003") {
          discount = 100000
        }
      }
    }
    let stumd = currency == "mmk" ? 100 : 1
    let preAMT = (tempPre - discount) + stumd
    this.premiumAmt = this.numberPipe.transform(preAMT) + " " + currency.toUpperCase()
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    return preAMT
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

}
