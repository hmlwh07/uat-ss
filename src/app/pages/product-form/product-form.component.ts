import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, NgZone } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { DatePipe, DecimalPipe, Location } from '@angular/common';
// import { uuid } from 'uuid';
import { Router } from '@angular/router';

import { v4 } from 'uuid';
import { DynamicFormComponent } from '../form-component/dynamic-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDataService } from '../products/services/products-data.service';
import { FormViewModalComponent } from '../form-component/form-view-modal/form-view-modal.component';
import { ConfigInput, ConfigPage, FromGroupData } from '../form-component/field.interface';
import { PageUI, PageUIType, Product, ProductPages } from '../products/models/product.dto';
import { IsJsonString } from '../../core/is-json';
import { AuthService } from '../../modules/auth';
import { PageDataService } from './page-data.service';
import { QuotationDTO } from '../quotations/quotation.dto';
import { AddOnQuoService } from '../products/services/add-on-quo.service';
import { CoverageQuoService } from '../products/services/coverage-quo.service';
import { AlertService } from '../../modules/loading-toast/alert-model/alert.service';
import { checkVaidDep } from '../check-parent';
import { AttachmentDownloadService } from '../../_metronic/core/services/attachment-data.service';
import { StaticActionType, StaticPageAction } from '../static-pages/static-field.interface';
import { StaticPageDirective } from '../static-pages/static-pages.directive';
import { MasterDataService } from '../../modules/master-data/master-data.service';
import { map, switchMap } from 'rxjs/operators';
import { GlobalFunctionService } from '../../core/global-fun.service';
import { Customer } from '../customer-detail/custmer.dto';
import * as moment from 'moment';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  formData: FromGroupData[] = []
  pageOrder: PageUI[] = []
  viewUI: string
  @ViewChild(DynamicFormComponent) dynForm: DynamicFormComponent
  @ViewChild(StaticPageDirective) staticPage: StaticPageDirective
  item: Product
  tempData: any = {}
  activePage: number = 0

  premiumAmt: string = '0'
  sumInsured: string = '0'
  private unsubscribe: Subscription[] = []
  coverage = {
    isSum: false,
    isUnit: false,
    isPremium: false,
  }
  addon = {
    isSum: false,
    isUnit: false,
    isPremium: false,
  }
  coverageData: any = {}
  addOnData: any = {}
  viewType: string = 'view'
  resourceId: string = null
  type: string = ""
  referenceID: string = ""
  referenceStatus: string = ""
  tableReform: any[] = []
  detailInput: any = {}
  editData: any
  creatingCustomer: Customer = {}
  creatingLeadId: string = ""
  travelFormss: PageUI[] = []
  currencyType = "MMK"
  constructor(private router: Router, private location: Location, private cdRef: ChangeDetectorRef, private modalService: NgbModal, private prodService: ProductDataService, private globalFun: GlobalFunctionService, private auth: AuthService, private pageDataService: PageDataService, private addonQuo: AddOnQuoService, private coverageQuo: CoverageQuoService, private alert: AlertService, private downloadService: AttachmentDownloadService, private masterServer: MasterDataService, private numberPipe: DecimalPipe, private datePipe: DatePipe, private ngZone: NgZone) { }

  async ngOnInit() {
    if ((this.prodService.type == 'policy' && this.prodService.createingProdRef)) {
      this.prodService.createingProd = this.prodService.createingProdRef
      this.prodService.createingProdRef = null
    }
    this.unsubscribe[0] = this.globalFun.currenyValueObs.subscribe((res) => {
      if (this.currencyType != res) {
        this.currencyType = res
      }
    })
    if (!this.prodService.createingProd) {
      this.location.back()
    } else {
      this.item = this.prodService.createingProd
      this.viewType = this.prodService.viewType
      this.referenceID = this.prodService.referenceID
      this.referenceStatus = this.prodService.referenceStatus
      this.creatingLeadId = this.prodService.creatingLeadId
      this.type = this.prodService.type
      this.editData = this.prodService.editData || {}
      this.creatingCustomer = this.prodService.creatingCustomer
      this.premiumAmt = this.editData.premiumView || this.editData.premium || "0";
      this.sumInsured = this.editData.sumInsuredView || this.editData.sumInsured || "0";

      let unsub = this.globalFun.paPremiumResult.subscribe((res: any) => {
        this.premiumAmt = res || "0"
        this.cdRef.detectChanges()
      })
      this.unsubscribe.push(unsub)
      let unsubSum = this.globalFun.sumInsuredResult.subscribe((res: any) => {
        this.sumInsured = res || "0"
        this.cdRef.detectChanges()
      })
      this.unsubscribe.push(unsubSum)
      this.initProductConfig()

    }
  }

  ngOnDestroy(): void {
    this.prodService.creatingLeadId = "0"
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
    // this.prodService.editData = null
  }

  changePage(i: number) {
    if (this.activePage > i) {
      this.activePage = i
      if (this.formData[this.activePage].type == PageUIType.STATIC) {
        this.cdRef.detectChanges()
        this.staticPage.reCreate()
      }
      if (this.dynForm && this.formData[this.activePage].controls) {
        this.dynForm.newFormCreate(this.formData[this.activePage].controls, this.tempData[this.formData[this.activePage].tableName + this.formData[this.activePage].id])
      }
    }
  }

  findPageValue(array: ConfigPage[], value: string) {

    let data: FromGroupData
    let isRef = this.referenceID ? true : false
    for (let index = 0; index < array.length; index++) {
      if (!array[index]) continue
      data = array[index].fromGroup.find(x => x.id == value);
      if (data) {
        data.controls.map(x => {
          if (this.detailInput[value] && x.input != "underline" && x.input != "label") {
            x.show = this.detailInput[value][x.name] >= 0 ? (this.detailInput[value][x.name] > 0 ? true : false) : x.show
            if (this.detailInput[value][x.name] >= 2) {
              x.disabled = this.detailInput[value][x.name] > 2 ? isRef : true
            }
          } else if (this.detailInput[value] && x.input == "label") {
            x.show = this.detailInput[value][x.placeholder] >= 0 ? (this.detailInput[value][x.placeholder] > 0 ? true : false) : x.show
          }
          return x
        })

        break
      }
    }
    return data
  }

  initProductConfig() {
    if (IsJsonString(this.item.config)) {
      let pageUI: ProductPages = JSON.parse(this.item.config);
      if (!pageUI) {
        this.alert.activate("please setup page group in product configuration.", "Creation Error")
        this.location.back()
        return false
      }
      let tempFormData: ConfigPage[] = []
      if (this.prodService.type == 'quotation') {
        if (!this.item.quotation) {
          this.alert.activate("please setup page group in product configuration.", "Creation Error")
          this.location.back()
          return false
        }
        this.pageOrder = pageUI.quotation || []
        this.detailInput = pageUI.quotation_input || {}
        this.viewUI = pageUI.quotation_view || 'ui1'
      } else {
        if (!this.item.application) {
          this.alert.activate("please setup page group in product configuration.", "Creation Error")
          this.location.back()
          return false
        }
        this.pageOrder = pageUI.application || []
        this.detailInput = pageUI.application_input || {}
        this.viewUI = pageUI.application_view || 'ui1'
      }
      if (this.pageOrder.length == 0) {
        this.alert.activate("Please Create UI Configuration", "Creation Error")
        this.location.back()
        return false
      }
      let dumType = this.prodService.type == 'policy' ? 'application' : this.prodService.type
      tempFormData = this.item.productUIs.map(x => {
        if (x.type == dumType)
          return JSON.parse(x.dynamicProduct.config)
      })
      let counter = 0
      let checkTravel = this.pageOrder.findIndex(x => x.id == 'static_1648784270356')


      this.pageOrder.forEach((page, index) => {
        counter += 1
        if (page.id == 'addon' && this.item.addOns.length < 1) {
          this.pageOrder.splice(index, 1)
        } else if (page.id == 'coverage' && this.item.coverages.length < 1) {
          this.pageOrder.splice(index, 1)
        }
        if ((page.type == PageUIType.STATIC)) {
          this.formData.push(
            {
              pageTitle: "",
              id: v4(),
              pageIcon: "",
              pageType: "form",
              tableName: "",
              controls: [],
              buttons: [],
              type: page.type
            }
          )
        } else {
          let pageData = this.findPageValue(tempFormData, page.id)
          pageData.type = page.type
          if (pageData) {
            this.pageOrder[index].pageTitle = pageData.pageTitle
            this.pageOrder[index].pageType = pageData.pageType
            this.pageOrder[index].pageIcon = pageData.pageIcon
            this.pageOrder[index].tableName = pageData.tableName
            this.pageOrder[index].unitCode = pageData.unitCode
            if (!this.prodService.editData && !this.referenceID && pageData.unitCode == "policyholder_1641795142279") {
              this.mapPartyCustomer(pageData)
            }
            if (pageData.unitCode == "policyholder_1641795142279") {
              pageData.controls = pageData.controls.map(cont => {
                cont.disabled = true
                return cont
              })
            }
            this.formData.push(pageData)
          }

        }

        if (counter == this.pageOrder.length) {
          this.callback(tempFormData)
        }

      })
      if (checkTravel >= 0) {
        this.travelFormss = []
        let checkProd = this.pageOrder.findIndex(x => x.unitCode == 'travel_detail_0001')
        if (checkProd >= 0) {
          let prodDetail = this.findPageValue(tempFormData, this.pageOrder[checkProd].id)
          let data: PageUI = { ...this.pageOrder[checkProd], function: prodDetail.function, controls: prodDetail.controls, buttons: prodDetail.buttons }
          this.pageOrder.splice(checkProd, 1)
          this.formData.splice(checkProd, 1)
          this.travelFormss.push(data)
        }
        let checkTraveler = this.pageOrder.findIndex(x => x.unitCode == 'traveler_0002')
        if (checkTraveler >= 0) {
          let traveler = this.findPageValue(tempFormData, this.pageOrder[checkTraveler].id)
          let data: PageUI = { ...this.pageOrder[checkTraveler], function: traveler.function, controls: traveler.controls, buttons: traveler.buttons }
          this.pageOrder.splice(checkTraveler, 1)
          this.formData.splice(checkTraveler, 1)
          this.travelFormss.push(data)
        }
        let checkBeneficiary = this.pageOrder.findIndex(x => x.unitCode == "trave_benefi_0003")
        if (checkBeneficiary >= 0) {
          let benefi = this.findPageValue(tempFormData, this.pageOrder[checkBeneficiary].id)
          let data: PageUI = { ...this.pageOrder[checkBeneficiary], function: benefi.function, controls: benefi.controls, buttons: benefi.buttons }
          this.pageOrder.splice(checkBeneficiary, 1)
          this.formData.splice(checkBeneficiary, 1)
          this.travelFormss.push(data)
        }
        let checkCoverage = this.pageOrder.findIndex(x => x.id == 'coverage_1634010995936')
        if (checkCoverage >= 0) {
          this.travelFormss.push(this.pageOrder[checkCoverage])
          this.pageOrder.splice(checkCoverage, 1)
          this.formData.splice(checkCoverage, 1)
        }
      }

    }
    // console.log('=============> ',this.formData)
  }

  callback(tempFormData) {
    if (this.prodService.editData) {
      this.resourceId = this.prodService.editData.id
      this.getOldData(this.prodService.editData, tempFormData)
    } else if (this.referenceID) {
      this.getOldData({ id: this.referenceID }, tempFormData, true)
    }
    if (this.formData[this.activePage].pageType == 'table') {
      this.reFormatTable(this.formData[this.activePage].controls)
    }
  }

  staticEvent(event: StaticPageAction) {
    if (event.type == StaticActionType.NEXT) {
      if (event.data) {
        if (event.data.resourceId)
          this.resourceId = event.data.resourceId
      }
      this.nextPage(this.activePage)
    } else if (event.type == StaticActionType.PREV) {
      this.backPage(this.activePage)
    }
  }

  clickBtn(event: any) {
    this[event]();
  }

  saveTemp(data: any) {
    let activeForm = this.formData[this.activePage]
    if (this.viewType != 'view') {
      if (activeForm.pageType == "form" && this.tempData[activeForm.tableName + activeForm.id]) {
        if (this.tempData[activeForm.tableName + activeForm.id].refId)
          this.updateDataAPI(activeForm, data, this.tempData[activeForm.tableName + activeForm.id].refId)
        else
          this.saveDataAPI(activeForm, data)
      } else
        this.saveDataAPI(activeForm, data)
    } else {
      if (activeForm.pageType == 'table') {
        if (this.tempData[activeForm.tableName + activeForm.id]) {
          (this.tempData[activeForm.tableName + activeForm.id] as any[]).push(data);
        } else {
          this.tempData[activeForm.tableName + activeForm.id] = [data]
        }
        this.globalFun.tempFormData = this.tempData
        this.cdRef.detectChanges()
      } else {
        this.tempData[activeForm.tableName + activeForm.id] = data
        this.globalFun.tempFormData = this.tempData
        this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls, this.tempData[this.formData[this.activePage + 1].tableName + this.formData[this.activePage + 1].id])
        this.activePage += 1
        if (this.formData[this.activePage].pageType == 'table') {
          this.reFormatTable(this.formData[this.activePage].controls)
        }
        this.cdRef.detectChanges();
      }
    }
  }

  download(cols: string[], data: any) {
    console.log(cols,data);
    
    let value = this.getOtherDataID(cols, data)
    if (value) {
      let valueId = value.split("].")[0].replace("[", "")
      this.downloadService.getDownload(valueId, value)
    }
  }

  reFormatTable(controls: ConfigInput[]) {
    this.tableReform = []
    let parentArray: string[] = []
    let tempControls: ConfigInput[] = JSON.parse(JSON.stringify(controls))
    for (let x of tempControls) {
      let skip = false
      x.options = x.options ? x.options : []
      if (!x.isHideView) {
        if (x.tableTitle) {
          let index = parentArray.findIndex(data => data == x.tableTitle)
          if (index < 0) {
            parentArray.push(x.tableTitle)
          } else {
            skip = true
          }
          // parentArray.push()
        }
        if (!skip) {
          let tempName = x.master == 'true' ? x.name + "Value" : x.name
          let otherNameObj = {
            name: tempName,
            type: x.input,
            subType: x.type,
            options: (x.master == "false" || x.master == false) && x.options.length > 0 ? x.options : []
          }
          let tempObj = {
            title: x.tableTitle || x.label || x.name,
            cols: [otherNameObj],
            type: x.input,
            subType: x.type,
            parent: x.dependency ? x.dependency.parentName : "",
            options: (x.master == "false" || x.master == false) && x.options.length > 0 ? x.options : []
          }
          this.tableReform.push(tempObj)
        } else {
          let index = this.tableReform.findIndex(data => data.parent == x.dependency.parentName)
          if (index >= 0) {
            let tempName = x.master == 'true' ? x.name + "Value" : x.name
            let otherNameObj = {
              name: tempName,
              type: x.input,
              subType: x.type,
              options: (x.master == "false" || x.master == false) && x.options.length > 0 ? x.options : []
            }
            this.tableReform[index].cols.push(otherNameObj)
          }
        }
        // return x
      }
    }
    this.cdRef.detectChanges()
  }

  getOtherData(cols: any[], data: any) {

    for (let col of cols) {
      if (data[col.name]) {
        if ((data[col.name] + "").length > 0) {
          let value = ""
          if (col.type == "input" && col.subType == "currency") {
            return this.numberPipe.transform(data[col.name])
          }
          if (col.type == "date") {
            return this.datePipe.transform(data[col.name], "dd/MM/yyyy")
          }
          if (col.type == "file") {
            return data[col.name].split("].")[1]
          }
          if (col.options.length > 0) {
            let valueData = col.options.find(x => x.value == data[col.name])
            if (valueData) {
              return valueData.text
            }
          }
          return data[col.name]
        }
      }
    }
  }
  
  getOtherDataID(cols: any[], data: any) {

    for (let col of cols) {
      if (data[col.name]) {
        if ((data[col.name] + "").length > 0) {
          let value = ""
          if (col.type == "input" && col.subType == "currency") {
            return this.numberPipe.transform(data[col.name])
          }
          if (col.type == "date") {
            return this.datePipe.transform(data[col.name], "dd/MM/yyyy")
          }
          if (col.type == "file") {
            let test=data[col.name].split("].")
            let file=test[0].split("[") 
            return file[1]
          }
          if (col.options.length > 0) {
            let valueData = col.options.find(x => x.value == data[col.name])
            if (valueData) {
              return valueData.text
            }
          }
          return data[col.name]
        }
      }
    }
  }

  updateDataAPI(page: FromGroupData, formData: any, refId: number, isTable: number = -1) {
    this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0"
    let postData = {
      productId: this.prodService.createingProd.id,
      productCode: this.prodService.createingProd.code,
      type: this.viewType,
      tableName: page.tableName,
      resourceId: this.resourceId,
      refId: refId,
      customerId: this.creatingCustomer.customerId,
      quotationId: this.referenceID,
      agentId: this.auth.currentUserValue.id || 1,
      premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
      premiumView: this.premiumAmt,
      sumInsureView: null,
      sumInsure: 0,
      policyNumber: null,
      pageId: page.id,
      leadId: this.creatingLeadId || null,
      currency: this.currencyType,
      party: page.party || false,
      policyInceptionDate: null,
      policyExpireDate:null,
      data: [

      ]
    }
    for (const [key, value] of Object.entries(formData)) {
      let input = page.controls.find(x => x.name == key)
      let valueData = value
      if (input) {
        valueData = input.input == "input" && input.type == 'number' ? Number(value) : value
        if (Array.isArray(valueData)) {
          valueData = valueData.join("#-#");
          if (!(valueData as string).includes("#-#")) {
            valueData += "#+#"
          }
        }
      }
      // if (input) {
      //   postData.data.push({
      //     "column": key,
      //     "value": input.input == "input" && input.type == 'number' ? Number(value) : value
      //   })
      // } else {
      postData.data.push({
        "column": key,
        "value": valueData,
        "party": input ? input.party || false : false
      })
      // }
    }
    // console.log("page.tableName", page.tableName);
    if (page.tableName == 'm_detail') {
      let inceptionDate = postData.data.find(x => x.column == "m_period_of_insurance_from")
      let expireDate = postData.data.find(x => x.column == "m_period_of_insurance_to")
      let sum = postData.data.find(x => x.column == "m_total_risk_si")
      let currency = postData.data.find(x => x.column == "m_currency")
      let sumInsuredView = this.numberPipe.transform(sum.value || 0, "1.2-2") + " " + currency.value.toUpperCase()
      postData.policyInceptionDate = moment(inceptionDate.value).format("YYYY-MM-DD")
      postData.policyExpireDate= moment(expireDate.value).format("YYYY-MM-DD")
      postData.sumInsureView = sumInsuredView
      postData.sumInsure = sum.value
    }
    if(page.tableName=='travel_basic'){
      let inceptionDate = postData.data.find(x => x.column == "policy_inception_date")
      let expireDate = postData.data.find(x => x.column == "policy_expiry_date")
      postData.policyInceptionDate= moment(inceptionDate.value).format("YYYY-MM-DD")
      postData.policyExpireDate= moment(expireDate.value).format("YYYY-MM-DD")
    }
    if(page.tableName=='pa_product_detail'){
      let inceptionDate = postData.data.find(x => x.column == "formdate")
      let expireDate = postData.data.find(x => x.column == "todate")
      let sum = postData.data.find(x => x.column == "sum_insured")
      let currency = postData.data.find(x => x.column == "currency")
      let sumInsuredView = this.numberPipe.transform(sum.value || 0, "1.2-2") + " " + currency.value.toUpperCase()
      postData.policyInceptionDate= moment(inceptionDate.value).format("YYYY-MM-DD")
      postData.policyExpireDate= moment(expireDate.value).format("YYYY-MM-DD")
      postData.sumInsureView = sumInsuredView
      postData.sumInsure = sum.value
    }
    this.pageDataService.updateNoID(postData).pipe(switchMap((data: any) => {
      if (page.pageType == 'table') {
        return this.checkMasterValue(formData, page.controls, data)
      }
      return of(data)
    })).toPromise().then((res) => {

      if (res) {
        // this.resourceId = res.resourceId
        this.updateDataStatus()
        if (isTable < 0) {

          this.tempData[page.tableName + page.id] = { ...formData, refId: res.refId }
          if (page.unitCode == "policyholder_1641795142279")
            this.tempData['policyholder_1641795142279'] = { ...formData, refId: res.refId }
          if (this.pageOrder.length > this.activePage + 1) {
            this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls, this.tempData[this.formData[this.activePage + 1].tableName + this.formData[this.activePage + 1].id])
            this.globalFun.tempFormData = this.tempData
            this.activePage += 1
            this.cdRef.detectChanges();
            if (this.formData[this.activePage].pageType == 'table') {
              this.reFormatTable(this.formData[this.activePage].controls)
            }

          } else {
            this.globalFun.tempFormData = this.tempData
            this.goReusltPage()
          }
        } else {
          formData = res.formData
          this.tempData[page.tableName + page.id][isTable] = { ...formData, refId: res.refId }
          this.globalFun.tempFormData = this.tempData
          this.cdRef.detectChanges();
        }
      }
    })

  }



  goReusltPage() {
    this.prodService.previewType = this.type
    this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0"

    this.prodService.editData = { id: this.resourceId, premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "", premiumView: this.premiumAmt, agentFirstName: this.auth.currentUserValue.firstName, agentLastName: this.auth.currentUserValue.lastName, leadId: this.creatingLeadId }
    this.router.navigateByUrl("/resourse-detail")
  }

  saveDataAPI(page: FromGroupData, formData: any) {
    this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0"

    let postData = {
      productId: this.prodService.createingProd.id,
      productCode: this.prodService.createingProd.code,
      type: this.viewType,
      tableName: page.tableName,
      resourceId: this.resourceId,
      agentId: this.auth.currentUserValue.id || 1,
      quotationId: this.referenceID,
      pageId: page.id,
      customerId: this.creatingCustomer.customerId,
      leadId: this.creatingLeadId || null,
      currency: this.currencyType,
      premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
      premiumView: this.premiumAmt,
      sumInsureView: null,
      sumInsure: 0,
      policyNumber: null,
      party: page.party || false,
      policyInceptionDate: null,
      policyExpireDate:null,
      pageData: [
        {
          data: []
        }
      ]
    }
    for (const [key, value] of Object.entries(formData)) {
      let input = page.controls.find(x => x.name == key)
      let valueData = value
      if (input) {
        valueData = input.input == "input" && input.type == 'number' ? Number(value) : value
        if (Array.isArray(valueData)) {
          valueData = valueData.join("#-#")
          if (!(valueData as string).includes("#-#")) {
            valueData += "#+#"
          }
        }
      }
      postData.pageData[0].data.push({
        "column": key,
        "value": valueData,
        "party": input ? input.party || false : false
      })

    }
    // console.log("page.tableName", page.tableName);

    if (page.tableName == 'motor_driver') {
      postData.pageData[0].data.push({
        column: "resource_id",
        party: false,
        value: this.resourceId
      })
    }
    if (page.tableName == 'm_detail') {
      let inceptionDate = postData.pageData[0].data.find(x => x.column == "m_period_of_insurance_from")
      let expireDate = postData.pageData[0].data.find(x => x.column == "m_period_of_insurance_to")
      let sum = postData.pageData[0].data.find(x => x.column == "m_total_risk_si")
      let currency = postData.pageData[0].data.find(x => x.column == "m_currency")
      let sumInsuredView = this.numberPipe.transform(sum.value || 0, "1.2-2") + " " + currency.value.toUpperCase()
      postData.policyInceptionDate = moment(inceptionDate.value).format("YYYY-MM-DD")
      postData.policyExpireDate= moment(expireDate.value).format("YYYY-MM-DD")
      postData.sumInsureView = sumInsuredView
      postData.sumInsure = sum.value
    }
    if(page.tableName=='travel_basic'){
      let inceptionDate = postData.pageData[0].data.find(x => x.column == "policy_inception_date")
      let expireDate = postData.pageData[0].data.find(x => x.column == "policy_expiry_date")
      postData.policyInceptionDate= moment(inceptionDate.value).format("YYYY-MM-DD")
      postData.policyExpireDate= moment(expireDate.value).format("YYYY-MM-DD")
    }
    if(page.tableName=='pa_product_detail'){
      let inceptionDate = postData.pageData[0].data.find(x => x.column == "formdate")
      let expireDate = postData.pageData[0].data.find(x => x.column == "todate")
      let sum = postData.pageData[0].data.find(x => x.column == "sum_insured")
      let currency = postData.pageData[0].data.find(x => x.column == "currency")
      let sumInsuredView = this.numberPipe.transform(sum.value || 0, "1.2-2") + " " + currency.value.toUpperCase()
      postData.policyInceptionDate= moment(inceptionDate.value).format("YYYY-MM-DD")
      postData.policyExpireDate= moment(expireDate.value).format("YYYY-MM-DD")
      postData.sumInsureView = sumInsuredView
      postData.sumInsure = sum.value
    }
    this.pageDataService.save(postData).pipe(switchMap((data: any) => {
      if (page.pageType == 'table') {
        return this.checkMasterValue(formData, page.controls, data)
      }
      return of(data)
    })).toPromise().then((res) => {

      if (res) {
        this.updateDataStatus()
        if (!this.resourceId)
          this.resourceId = res[0].resourceId;
        if (page.pageType == 'table') {
          formData = res[0].formData
          if (this.tempData[page.tableName + page.id]) {
            (this.tempData[page.tableName + page.id] as any[]).push({ ...formData, refId: res[0].refId, pageId: page.id });
          } else {
            this.tempData[page.tableName + page.id] = [{ ...formData, refId: res[0].refId }]
          }
          this.globalFun.tempFormData = this.tempData
          this.cdRef.detectChanges()
        } else {
          this.tempData[page.tableName + page.id] = { ...formData, refId: res[0].refId, pageId: page.id }
          if (page.unitCode == "policyholder_1641795142279")
            this.tempData['policyholder_1641795142279'] = { ...formData, refId: res[0].refId, pageId: page.id }
          if (this.pageOrder.length > this.activePage + 1) {
            if (this.formData[this.activePage + 1].controls) {
              // console.log(this.tempData, this.formData);

              this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls, this.tempData[this.formData[this.activePage + 1].tableName + this.formData[this.activePage + 1].id])
            }
            this.globalFun.tempFormData = this.tempData
            this.activePage += 1
            this.cdRef.detectChanges();
            if (this.formData[this.activePage].pageType == 'table') {
              this.reFormatTable(this.formData[this.activePage].controls)
            }
          } else {
            this.globalFun.tempFormData = this.tempData
            this.goReusltPage()
          }
        }

      }

    })

  }

  newData(editData?: any, index?: number) {
    const activeForm = this.formData[this.activePage];
    const modalRef = this.modalService.open(FormViewModalComponent, { size: 'xl' });
    modalRef.componentInstance.controls = activeForm.controls
    modalRef.componentInstance.pageName = activeForm.pageTitle
    modalRef.componentInstance.activateForm = activeForm
    modalRef.componentInstance.oldData = index >= 0 ? editData : {}
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.data && res.type == 'save') {
          if (index >= 0) {
            this.updateDataAPI(activeForm, res.data, this.tempData[activeForm.tableName + activeForm.id][index].refId, index)
          } else {
            this.saveTemp(res.data)
          }
        }
      }
    })
  }

  async create() {
    let activeForm = this.formData[this.activePage]
    if (activeForm.function) {
      let fun = await this.globalFun[activeForm.function]("", this.dynForm.form.getRawValue(), [], true)
      if (!fun) {
        return false
      }
    }
    let submited = this.dynForm.handleSubmit()
    if (!submited) return false
    this.dynForm.reCreateFrom()
  }

  backPage(index) {
    if (this.activePage > 0) {
      this.activePage -= 1
      this.cdRef.detectChanges();
      if (this.formData[this.activePage].type == PageUIType.STATIC && this.formData[this.activePage + 1].type == PageUIType.STATIC) {
        this.staticPage.reCreate()
      }
      else if (this.formData[this.activePage].type == PageUIType.DYN && this.formData[this.activePage].pageType == 'table') {
        this.reFormatTable(this.formData[this.activePage].controls)
      }
    } else {
      this.location.back()
    }
  }
  async nextPage(index, status?: string) {
    // if (status == 'addOns' || status == 'coverages') {
    //   const quoService = status == "addOns" ? this.addonQuo : this.coverageQuo
    //   const posDataArray = status == "addOns" ? this.addOnData : this.coverageData
    //   for (let add of this.item[status]) {
    //     try {
    //       let postData = {
    //         addonId: add.id,
    //         coverageId: add.id,
    //         quotationNo: this.resourceId,
    //         sumInsured: (posDataArray[add.id].sum || "").replace(',', '').replace('MMK', '').replace('USD', ''),
    //         unit: (posDataArray[add.id].unit || "").replace(',', '').replace('MMK', '').replace('USD', ''),
    //         premium: (posDataArray[add.id].premium || "").replace(',', '').replace('MMK', '').replace('USD', ''),
    //       }
    //       let res = await quoService.save(postData).toPromise()

    //     } catch (error) {
    //       console.log(error);

    //     }

    //   }
    // }
    let activeValue = this.formData[this.activePage]
    if (activeValue.pageType == 'table' && activeValue.unitCode != "attachment_form") {
      if (!this.tempData[activeValue.tableName + activeValue.id]) {
        return false
      } else if (this.tempData[activeValue.tableName + activeValue.id].length == 0) {
        return false
      }

      if (activeValue.unitCode == "beneficiaries_page" || activeValue.unitCode == "trave_benefi_0003") {
        let check = this.globalFun.checkPercent(this.tempData[activeValue.tableName + activeValue.id])
        if (!check) {
          this.alert.activate('Beneficiary percent need to be 100%!', 'Warning Message')
          return false
        }
      }

    }
    if (this.pageOrder.length > index + 1) {
      this.updateDataStatus()
      this.activePage += 1
      // if(this.pageOrder[this.activePage + 1].id != 'addon' && this.pageOrder[this.activePage + 1].id != 'coverage')
      // this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls)
      this.cdRef.detectChanges();
      if (this.formData[this.activePage].type == PageUIType.STATIC && this.formData[this.activePage - 1].type == PageUIType.STATIC) {
        this.staticPage.reCreate()
      }
      else if (this.formData[this.activePage].type == PageUIType.DYN && this.formData[this.activePage].pageType == 'table') {
        this.reFormatTable(this.formData[this.activePage].controls)
      }
    } else {
      // this.location.back()
      this.goReusltPage()
    }
  }

  async next() {

    // if (this.pageOrder.length > this.activePage + 1) {
    let activeForm = this.formData[this.activePage]
    if (activeForm.function) {
      let fun = await this.globalFun[activeForm.function]("", this.dynForm.form.getRawValue(), [], true);
      if (!fun) {
        return false
      }
    }
    let submited = this.dynForm.handleSubmit()
    if (!submited) return false

    // } else {
    //   this.location.back()
    // }
  }

  getGlobalFun(funName: string, mainObj: string, mainKey, subKey: string) {

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

  previous() {
    if (this.activePage > 0) {
      this.dynForm.newFormCreate(this.formData[this.activePage - 1].controls, this.tempData[this.formData[this.activePage - 1].tableName + this.formData[this.activePage - 1].id])
      this.activePage -= 1
      this.cdRef.detectChanges();
    } else {
      this.ngZone.run(() => {
        this.location.back()
      })
      // this.location.back()
    }
  }

  submit() {
    this.next()
  }

  reset() {
    this.dynForm.reCreateFrom()
    this.cdRef.detectChanges();
  }

  deleteData(index, data) {
    this.alert.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        let activeForm = this.formData[this.activePage]
        this.pageDataService.deleteData(activeForm.tableName, data.refId, activeForm.id).toPromise().then((res) => {
          if (res) {
            this.tempData[activeForm.tableName + activeForm.id].splice(index, 1)
            this.cdRef.detectChanges();
            this.alert.activate('This record was deleted', 'Success Message').then(result => {

            });
          }
        })
      }
    });
  }



  getOldData(oldData: QuotationDTO, tempFormData, isRef?: boolean) {
    let counter = 0
    this.pageOrder.forEach((element) => {

      counter += 1
      if (element.type == PageUIType.DYN) {

        let page = this.findPageValue(tempFormData, element.id)
        let view = page.pageType == 'table'
        this.pageDataService.getDetail(page.tableName, oldData.id, page.id, view, page.controls, true).toPromise().then(async (res: any) => {

          if (res && res.length > 0) {
            let temp = page.pageType == 'form' ? {} : []
            let skipId = isRef
            let trgi = false
            if (res.length == 0 && this.type == 'policy' && oldData.quotationId) {
              res = await this.pageDataService.getDetail(page.tableName, oldData.quotationId, page.id, view, page.controls, true).toPromise()
              skipId = true
            }
            for (const data of res) {
              let tmpObj = {}
              for (const item of data.data) {
                if (item.column == 'id' && !skipId) {
                  tmpObj['refId'] = item.value
                }
                if ((item.value + "" as string).includes("#-#")) {
                  // trgi = true
                  tmpObj[item.column] = (item.value + "" as string).split("#-#")
                } else if ((item.value + "" as string).includes("#+#")) {
                  tmpObj[item.column] = [item.value.replace('#+#', "")]
                } else {
                  tmpObj[item.column] = item.value
                }

              }
              if (Array.isArray(temp)) {
                temp.push(tmpObj)
              } else {
                temp = tmpObj
              }
            };
            if ((page.unitCode == "policyholder_1641795142279")) {
              temp["customer_id"] = this.creatingCustomer['customerId']
              this.tempData["policyholder_1641795142279"] = temp
            }
            this.tempData[page.tableName + page.id] = temp
            this.globalFun.tempFormData = this.tempData
            if (page.function && page.pageType == 'form') {
              this.globalFun[page.function]("", this.tempData[page.tableName + page.id])
            }
            if (element.id == this.formData[this.activePage].id) {
              if (this.formData[this.activePage].pageType == "form" && this.formData[this.activePage].type != PageUIType.STATIC) {
                this.cdRef.detectChanges();
                this.dynForm.reCreateFrom()
                this.cdRef.detectChanges();
                // if (trgi) {
                //   this.globalFun.optionResultChange.next(true)
                // }
              }
            }

          } else {

            if (page.unitCode == "policyholder_1641795142279")
              this.mapPartyCustomer(page)
          }

        }).catch(e => {
          if (page.unitCode == "policyholder_1641795142279")
            this.mapPartyCustomer(page)
        })
      }


    });
  }

  mapPartyCustomer(page: FromGroupData) {
    let temp = {}
    let config = page.controls.find(x => x.name == "customer_id")

    if (config) {
      for (let afield of config.autoFields) {
        temp[afield.value] = this.creatingCustomer[afield.field]
      }
      this.tempData[page.tableName + page.id] = temp
      this.tempData[page.tableName + page.id]['customer_id'] = this.creatingCustomer["customerId"]
      this.globalFun.tempFormData = this.tempData
      this.cdRef.detectChanges();
      if (page.type == PageUIType.DYN && this.dynForm) {
        this.dynForm.reCreateFrom()
        this.cdRef.detectChanges();
      }
    }
  }



  checkDep(dependency, checkData) {
    return checkVaidDep(dependency, { value: checkData })
  }

  checkMasterValue(res: any, column, otherResponse: any) {
    // otherResponse =  ? otherResponse[0]['formData'] = res : 
    if (Array.isArray(otherResponse)) {
      otherResponse[0]['formData'] = res
    } else {
      otherResponse['formData'] = res
    }
    let tempMasterObj = Object.keys(res).filter(x => (res[x] + "").includes("T-"))
    if (tempMasterObj.length > 0) {
      let masterObj = tempMasterObj.map(x => {
        let columnName = column.find(col => col.name == x)
        if (columnName.masterData) {
          return {
            "codeId": res[x],
            "codeType": columnName.masterData,
            "langCd": "EN"
          }
        }
      })
      let postData = {
        "codeBookRequest": masterObj
      }
      let returnObj = res
      return this.masterServer.getMasterValue(postData).pipe(map((masterValues: any) => {
        tempMasterObj.forEach(x => {
          let colName = column.find(col => col.name == x)
          let index = masterValues.findIndex(master => master.codeId == returnObj[x] && colName.masterData == master.codeType)
          if (index >= 0) {
            returnObj[x + "Value"] = masterValues[index].codeName
          }
        })
        if (Array.isArray(otherResponse)) {
          otherResponse[0]['formData'] = returnObj
        } else {
          otherResponse['formData'] = returnObj
        }
        return otherResponse
      }))
    }
    return of(otherResponse)
  }

  updateDataStatus() {
    if (this.referenceID) {
      if (this.referenceStatus == "in_progress") {
        let postData = {
          "resourceId": this.referenceID,
          "type": 'quotation',
          "status": "complete"
        }
        this.pageDataService.updatePremimun(postData).toPromise().then((res) => {
          if (res) {
            this.referenceStatus = "complete"
            this.prodService.referenceStatus = "complete"
          }
        })
      }
    }
  }
}
