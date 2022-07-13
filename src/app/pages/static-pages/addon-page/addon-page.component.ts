import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { AddOn, Product, ProductPages } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { PageDataService } from "../../product-form/page-data.service"
import { IsJsonString } from '../../../core/is-json';
import { LoadingService } from '../../../modules/loading-toast/loading/loading.service';
import { FirePageID, FireRiskID } from '../static-pages.data';
import { MotorAddonComponent } from '../motor-addon/motor-addon.component';
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
  @Input() optionId: string
  @Input() fireAdd: boolean = false
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
  fireAddonRate = {
    "FLOOD": 0.1,
    "SUBLSLD": 0.1,
    "BURGLARY-T-CL1": 0.25,
    "BURGLARY-T-CL2": 0.5,
    "BURGLARY-T-CL3": 0.75,
    "BURGLARY-T-CL4": 1,
    "STHTC-T-BFMGS": 0.2,
    "STHTC-T-002": 0.2,
    "STHTC-T-003": 0.2,
    "STHTC-T-004": 0.2,
    "STHTC-T-WDGS": 0.25,
    "WARRISK": 0.1,
    "ACD": 0.1,
    "EXPLOSION": 0.1,
    "IMPD": 0.1,
    "RSMD": 0.06,
    "SPONTCOMB": 0.08,
    "EQ": 0.1,
    "Fire": 0.1,
  }
  crossPercent = {
    "T-004": 0.35,
    "T-003": 0.60,
    "T-002": 0.85,
    "T-001": 1,
  }
  //   RSMD
  // ACD
  // IMPD
  // SUBLSLD
  // EQ
  // EXPLOSION
  // SPONTCOMB
  // STHTC
  // FLOOD
  // BURGLARY
  // WARRISK
  addOnList: any[] = []
  crossAddons: string[] = []
  fireOptionData = {
    "STHTC": [
      { "code": "T-BFMGS", "value": "Building,Furniture,Machine,Goods/Stocks" },
      { "code": "T-WDGS", "value": "Water Damage for Goods/Stocks" },
    ],
    "BURGLARY": [
      { "code": "T-CL1", "value": "Class 1" },
      { "code": "T-CL2", "value": "Class 2" },
      { "code": "T-CL3", "value": "Class 3" },
      { "code": "T-CL4", "value": "Class 4" },
    ]
  }
  constructor(private addOnQuoService: AddOnQuoService, private globalFun: GlobalFunctionService,
    private cdRef: ChangeDetectorRef, private prodService: ProductDataService, private numberPipe: DecimalPipe,
    private pageDataService: PageDataService, private loadingService: LoadingService) { }

  async ngOnInit() {
    this.refID = this.prodService.referenceID
    this.optionId = this.optionId ? this.optionId : this.resourcesId
    if (this.product.code == "PLMO02" || this.product.code == "PLMO01") {
      this.parentData = this.getParnet()
    }
    this.addOnList = this.product.addOns.filter(x => (x.code != "MED EXP") || (x.code != "CROSSBRDR"))
    this.crossAddons = this.product.addOns.filter(x => x.code == "MED EXP" && (this.product.code != "PLMO01") || (x.code == "CROSSBRDR" && this.product.code != "PLMO01")).map(x => x.id)
    console.log("ADDON", this.addOnList);
    console.log("PRODUCTLIST", this.product);


    if (this.addOnList && this.addOnList.length > 0) {
      await this.loadingService.activate()
      this.addOns = {
        isSum: this.addOnList[0].sumInsured,
        isUnit: this.addOnList[0].unit,
        isPremium: this.addOnList[0].premium,
      }
      let callAddon = true
      let postData = {
        quotationNo: this.resourcesId,
        addOnIds: this.addOnList.map(x => { return x.id }),
        optionalKey: this.optionId
      }
      let results: any = await this.addOnQuoService.getAllById(postData).toPromise()
      console.log("RESULT", results);

      if (results.length == 0) {
        postData.quotationNo = this.refID
        postData.optionalKey = this.refID
        results = await this.addOnQuoService.getAllById(postData).toPromise()
        console.log("RESULT", results);

      }
      console.log("ITEM", this.addOnList);

      for (const item of this.addOnList) {
        item['show'] = true
        if (item.validationFun) {
          item['show'] = this.globalFun[item.validationFun] ? this.globalFun[item.validationFun](this.parentData) : true
        }
        // if (this.product.code == "CLFR01") {
        //   item["sumInsuredStr"] = "0"
        //   item["unitStr"] = "0"
        //   item["premiumStr"] = "0"
        // }

        let response = results.find(x => x.addonId == item.id)

        // if (item['show']) {
        this.addOnsData[item.id] = {
          checked: response && item['show'] ? true : false,
          sum: response ? response.sumInsured || 0 : 0,
          unit: response ? response.unit || 0 : 0,
          premium: response ? response.premium || 0 : 0,
          option: response ? response.option || "" : "",
          startDate: response ? response.startDate || "" : "",
          endDate: response ? response.endDate || "" : "",
        }
        if (item.code == "STHTC" && this.addOnsData[item.id].option == "") {
          this.addOnsData[item.id].option = "T-BFMGS"
        } else if (item.code == "BURGLARY" && this.addOnsData[item.id].option == "") {
          this.addOnsData[item.id].option = "T-CL1"
          let unsub = this.globalFun.fireBurgeryResult.subscribe((value) => this.addOnsData[item.id].option = value)
          // this.addOnsData[addOn.id].premium = this.rateByValue(addOn)
          this.unsubscribe.push(unsub)
        }

        if (item.sumInsured) {
          this.getGlobalFun(item.sumInsuredStr, 'addOnsData', item.id, 'sum', item)
        }
        if (item.unit) {
          this.getGlobalFun(item.unitStr, 'addOnsData', item.id, 'unit', item)
        }
        if (item.premium) {
          if (item.code == "CROSSBRDR" && this.addOnsData[item.id].checked) {

          } else {
            this.getGlobalFun(item.premiumStr, 'addOnsData', item.id, 'premium', item)
          }
        }
        // }
      }
      // if (callAddon && this.editData && this.refID) {
      //   for (const item of this.addOnList) {
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

    if ((this.product.code == "PLMO02" || this.product.code == "PLMO01") && subKey == "premium") {
      if (this.globalFun[funName]) {
        let parentValueObj = addon.code == "PAIDDRIVER" ? this.getParnet('motor_driver') : this.parentData
        parentValueObj = { ...parentValueObj, productCode: this.product.code }
        let unsub = this.globalFun[funName](parentValueObj).subscribe((res) => {
          this[mainObj][mainKey][subKey] = res
          this.cdRef.detectChanges();
        })
        this.unsubscribe.push(unsub)
      } else {
        if (funName) {
          // if (addon.code == "CROSSBRDR" && this.product.code == "PLMO02" && subKey == "premium") {
          //   this[mainObj][mainKey][subKey] = this.calcuCross() * 0.15
          // }else{
          this[mainObj][mainKey][subKey] = funName
          // }
        }
      }
    } else if (this.product.code == "CLFR01" && subKey == "premium") {
      console.log("addondDa", addon);

      this[mainObj][mainKey][subKey] = this.rateByValue(addon)
    }
    else {
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
    this.prodService.totalPremium = 0;
    const quoService = this.addOnQuoService
    const posDataArray = this.addOnsData
    await quoService.deleteAll(this.resourcesId, this.optionId, this.crossAddons.join(",")).toPromise()
    if (this.product.code == "CLFR01") {
      this.globalFun.tempFormData['addon_1634010770155' + this.optionId] = []
    } else {
      this.globalFun.tempFormData['addon_1634010770155'] = []
    }
    for (let addon of this.addOnList) {
      if (posDataArray[addon.id].checked) {
        console.log("posDataArray[addon.id", posDataArray[addon.id]);

        let sum = posDataArray[addon.id].sum ? posDataArray[addon.id].sum + "" : ""
        let unit = posDataArray[addon.id].unit ? posDataArray[addon.id].unit + "" : ""
        let premium = posDataArray[addon.id].premium ? posDataArray[addon.id].premium + "" : ""
        let option = posDataArray[addon.id].option ? posDataArray[addon.id].option + "" : ""
        let startDate = posDataArray[addon.id].startDate ? posDataArray[addon.id].startDate + "" : ""
        let endDate = posDataArray[addon.id].endDate ? posDataArray[addon.id].endDate + "" : ""
        console.log('addon save ', premium);

        this.prodService.totalPremium += parseFloat(premium);

        try {
          let postData = {
            addonId: addon.id,
            quotationNo: this.resourcesId,
            option: option,
            optionalKey: this.optionId,
            startDate: startDate,
            endDate: endDate,
            sumInsured: (sum).replace(',', '').replace('MMK', '').replace('USD', ''),
            unit: (unit).replace(',', '').replace('MMK', '').replace('USD', ''),
            premium: (premium).replace(',', '').replace('MMK', '').replace('USD', ''),
          }
          if (this.product.code == "CLFR01") {
            this.globalFun.tempFormData['addon_1634010770155' + this.optionId].push(postData)
          } else {
            this.globalFun.tempFormData['addon_1634010770155'].push(postData)
          }
          quoService.save(postData).toPromise().then((res) => {

          })
        } catch (error) {
          // console.log(error);

        }
      }

    }
    if (this.product.code == "PLMO02" || this.product.code == "PLMO01") {
      await this.savePremimun().toPromise()
    }
    if (this.product.code == "CLFR01") {
      // await this.savePremimunFire().toPromise()
    }
    // console.log("end");

    this.actionEvent.emit({ type: StaticActionType.NEXT })
  }

  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }

  onCheckAddon() {

  }

  changeOption(addon: AddOn) {
    if (addon.code != "CROSSBRDR" && this.product.code == "PLMO01") {
      let cross = this.addOnList.find(x => x.code == "CROSSBRDR")
      if (this.addOnsData[cross.id].checked) {
        let tempPre = this.calcuCross()
        this.addOnsData[cross.id]['premium'] = tempPre * 0.15
      }
    } else if (this.addOnsData[addon.id].checked && addon.code == "CROSSBRDR") {
      let tempPre = this.calcuCross()
      this.addOnsData[addon.id]['premium'] = tempPre
    }
    else if (!this.addOnsData[addon.id].checked && addon.code == "CROSSBRDR") {
      this.addOnsData[addon.id]['premium'] = 0
    }
  }

  rechangeOption(addOn) {

    this.addOnsData[addOn.id].premium = this.rateByValue(addOn)
  }

  calcuCross() {
    let tempPre = 0
    for (let addon of this.addOnList) {
      if (this.addOnsData[addon.id].checked && addon.code != "CROSSBRDR") {
        console.log(this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0));

        tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0)
      }
    }
    let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : []
    for (let cov of coverageData) {
      console.log(this.globalFun.calculateDecimal(cov.premium || 0));
      tempPre += this.globalFun.calculateDecimal(cov.premium || 0)
    }
    // let crossPre = tempPre * 0.15
    let currency: string = this.parentData ? this.parentData.m_currency : 'MMK'
    let excessAmt = 0
    let discount = 0

    if (this.parentData) {
      let term = this.parentData['m_policy_term']
      let percent = this.crossPercent[term] || 1
      let excess = this.parentData['m_excess']
      let vehicle = this.parentData['m_type_of_vehicle']
      let purpose = this.parentData['m_purpose_of_use']
      console.log("EXCESS", excess, "vehicle", vehicle, "purpose", purpose);

      if (excess == "T-NILEX" && currency == "MMK") {
        if (vehicle == 'T-MCC' && purpose == 'T-PRI') {
          excessAmt = (5000 * percent)
        } else if (vehicle == 'T-MCC' && purpose == 'T-COM') {
          excessAmt = (10000 * percent)
        }
        else {
          excessAmt = (50000 * percent)
        }
      }
      // else if (excess == 'T-STNDEX' && currency == "MMK") {
      //   excessAmt = 100000
      // }
      else if (excess == "TU-NILEX" && currency == "USD") {
        excessAmt = (25 * percent)
      }
      // else if (excess == "TU-STNDEX" && currency == "USD") {
      //   excessAmt = 100
      // }
    }

    // * percent
    console.log("TEMP", tempPre, "excessAmt", excessAmt);

    let cross = ((tempPre + excessAmt) * 0.15)
    return (cross || 0)
  }

  caluMotorPremimun() {
    let tempPre = 0
    for (let addon of this.addOnList) {
      console.log(this.addOnsData[addon.id]);

      if (this.addOnsData[addon.id].checked) {
        tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0)

      }
    }
    let cross = this.addOnList.find(x => x.code == "CROSSBRDR")
    let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : []
    for (let cov of coverageData) {
      tempPre += this.globalFun.calculateDecimal(cov.premium || 0)
    }
    console.log("tempPre", tempPre);
    let currency: string = this.parentData ? this.parentData.m_currency : 'MMK'
    let discount = 0
    let discount2 = 0
    if (this.parentData) {
      let excess = this.parentData['m_excess']
      let excess_discount = this.parentData['m_excess_discount']
      let vehicle = this.parentData['m_type_of_vehicle']
      let purpose = this.parentData['m_purpose_of_use']
      let term = this.parentData['m_policy_term']
      console.log("Policy-TERM", term);
      let percent = this.crossPercent[term] || 1
      console.log("TERM-Percent", percent);
      console.log(excess, excess_discount, vehicle, purpose);
      if (this.product.code == 'PLMO02') {
        if (excess == "T-NILEX" && currency == "MMK") {
          if (vehicle == 'T-MCC' && purpose == 'T-PRI') {
            discount = -(5000 * percent)
            discount2 = -(5000 * percent)
          } else if (vehicle == 'T-MCC' && purpose == 'T-COM') {
            discount = -(10000 * percent)
            discount2 = -(10000 * percent)
          }
          else {
            discount = -(50000 * percent)
            discount2 = -(50000 * percent)
          }
        } else if (excess == "TU-NILEX" && currency == "USD") {
          discount = -(25 * percent)
          discount2 = -(25 * percent)
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
            discount2 = 50000
          } else if (excess_discount == "T-EXD2") {
            discount = 70000
            discount2 = 70000
          } else if (excess_discount == "T-EXD3") {
            discount = 100000
            discount2 = 100000
          }
        }
      }
      else {
        if (excess == "T-NILEX" && currency == "MMK") {
          if (purpose == 'T-PRI') {
            discount = -(5000 * percent)
            discount2 = -(5000 * percent)
          }
          if (purpose == 'T-COM') {
            discount = -(10000 * percent)
            discount2 = -(10000 * percent)
          }
        }
        if (excess == "T-STNDEX" && currency == "MMK") {
          if (purpose == 'T-PRI') {
            discount = -50000
            discount2 = -50000
          }
          if (purpose == 'T-COM') {
            discount = -100000
            discount2 = -100000
          }
        }

      }
    }
    console.log("discount", discount);
    let crossPremium = 0
    if (cross) {
      crossPremium = this.addOnsData[cross.id]['premium']
    }
    let stumd = currency == "MMK" ? 100 : 0.05
    console.log("TOTAL+CROSS", (tempPre + Number(crossPremium || 0)));

    let preAMT = ((tempPre + Number(crossPremium || 0)) - discount)
    let preAMT2 = ((tempPre + Number(crossPremium || 0)) - discount2)
    console.log("Premium-Cross-Discount/New Amount", preAMT, preAMT2);



    // preAMT = (preAMT * percent) + stumd
    preAMT = (preAMT) + stumd
    preAMT2 = (preAMT2)
    console.log("TOTAL-Premium-Result/New Amount", preAMT, preAMT2);


    this.premiumAmt = this.numberPipe.transform(preAMT, "1.2-2") + " " + currency.toUpperCase()
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    return preAMT
  }

  caluFirePremimun() {
    let parentData1 = this.globalFun.tempFormData[FireRiskID]
    let parentData2 = this.globalFun.tempFormData[FirePageID]
    let precent = parentData2.policyType == "T-NM" ? 1 : 0.75
    let premiumTotal = 0
    for (let element of parentData1) {
      premiumTotal += this.globalFun.calculateDecimal(element.premium)

    }
    // parentData2.forEach(element => {
    //   premiumTotal += parseFloat(element.premium)
    // });
    const posDataArray = this.addOnsData
    let addOnPre = 0
    for (let addon of this.addOnList) {
      if (posDataArray[addon.id].checked) {
        addOnPre += this.globalFun.calculateDecimal(posDataArray[addon.id]['premium'])
      }
    }
    let finalPre = (premiumTotal + addOnPre) * precent
    this.premiumAmt = this.numberPipe.transform(finalPre, "1.2-2") + " MMK"
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    return finalPre
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

  savePremimunFire() {
    let premiumAmt = this.caluFirePremimun()
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

  rateByValue(addon: any) {
    console.log("ADDON==>", addon);

    let rate = 0
    if (addon.code == "BURGLARY" || addon.code == "STHTC") {
      let keyId = addon.code + "-" + this.addOnsData[addon.id].option
      rate = this.fireAddonRate[keyId] || 0

      if (addon.code == "BURGLARY") {
        console.log(' BURGLARY rate', rate = this.fireAddonRate[keyId] || 0);
      }

      if (addon.code == "STHTC") {
        console.log(' STHTC rate', rate = this.fireAddonRate[keyId] || 0);
      }


    }
    else {
      console.log("rete_EKSE", this.fireAddonRate[addon.code])
      rate = this.fireAddonRate[addon.code] || 0
    }
    console.log("RATE", rate);

    let parentData = this.globalFun.tempFormData[FireRiskID]
    console.log("parentData", parentData);

    let totalRisk = 0
    if (parentData) {
      // parentData.forEach(element => {
      //   totalRisk += parseFloat(element.riskSi)
      // });
      let parent = parentData.find(x => x.id == this.optionId)
      console.log("parentparent", parent);

      totalRisk += parent ? parent.riskSi : 0

    }

    let parentData2 = this.globalFun.tempFormData[FirePageID];
    let dateRate = 1;
    switch (true) {
      case parentData2.policyUnit == 'G' && parentData2.policyDuration == 1:
        dateRate = 1;
        break;
      case parentData2.policyUnit == 'D' && parentData2.policyDuration <= 10:
        dateRate = 1 / 8;
        break;
      case parentData2.policyUnit == 'D' && parentData2.policyDuration <= 15:
        dateRate = 1 / 6;
        break;
      case parentData2.policyUnit == 'D' && parentData2.policyDuration > 15:
        dateRate = this.calculateDaysToMonth(parentData2.policyDuration);
        console.log('calculateDaysToMonth', dateRate);
        // dateRate = 2 / 8;
        break;
      case parentData2.policyUnit == 'F' && parentData2.policyDuration == 1:
        dateRate = 2 / 8;
        break;
      case parentData2.policyUnit == 'F' && parentData2.policyDuration == 2:
        dateRate = 3 / 8;
        break;
      case parentData2.policyUnit == 'F' && parentData2.policyDuration == 3:
        dateRate = 4 / 8;
        break;
      case parentData2.policyUnit == 'F' && parentData2.policyDuration == 4:
        dateRate = 5 / 8;
        break;
      case parentData2.policyUnit == 'F' && parentData2.policyDuration == 5:
        dateRate = 6 / 8;
        break;
      case parentData2.policyUnit == 'F' && parentData2.policyDuration == 6:
        dateRate = 6 / 8;
        break;
      case parentData2.policyUnit == 'F' && parentData2.policyDuration > 6:
        dateRate = 1;
        break;
    }
    // }
    let currency = parentData2.currency;
    let stampDuty = 0;
    if (currency == 'MMK') {
      stampDuty = 100;
    } else {
      stampDuty = 0.05;
    }



    if (rate > 0 && totalRisk > 0) {
      console.log("totalRisk", totalRisk);

      console.log("addon.code =====> ", addon.code + ', rate' + rate + 'date rate' + dateRate);
      let amt = totalRisk * (rate / 100) * dateRate;
      if (addon.code == "BURGLARY") {
        amt = amt * 0.9
      }
      // let amt = totalRisk * (rate / 100)
      // NEED_TO_CONFIRM
      // if (addon.code == "BURGLARY") {
      //   let dis = amt * 0.1
      //   amt = amt - dis
      // }
      console.log('amt =====> ', amt);
      return amt;
      //return this.globalFun.calculateDecimal(amt)
    }
    return 0
  }




  calculateDaysToMonth(days) {
    let rate: any;
    let divided = days / 31;
    if (divided > 0 && divided <= 1) {
      rate = 2 / 8;
    } else if (divided > 1 && divided <= 2) {
      rate = 3 / 8;
    } else if (divided > 2 && divided <= 3) {
      rate = 4 / 8;
    } else if (divided > 3 && divided <= 4) {
      rate = 5 / 8;
    } else if (divided > 3 && divided <= 5) {
      rate = 6 / 8;
    } else if (divided > 5 && divided <= 6) {
      rate = 6 / 8;
    } else {
      rate = 1;
    }
    return rate;
  }

}
