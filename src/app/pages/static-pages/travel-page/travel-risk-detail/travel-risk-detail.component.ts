import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, of, switchMap } from 'rxjs';
import { GlobalFunctionService } from '../../../../core/global-fun.service';
import { AuthService } from '../../../../modules/auth';
import { MasterDataService } from '../../../../modules/master-data/master-data.service';
import { CustomerService } from '../../../customer-detail/customer.service';
import { DynamicFormComponent } from '../../../form-component/dynamic-form.component';
import { FromGroupData } from '../../../form-component/field.interface';
import { FormViewModalComponent } from '../../../form-component/form-view-modal/form-view-modal.component';
import { PageDataService } from '../../../product-form/page-data.service';
import { PageUI, Product } from '../../../products/models/product.dto';
import { ProductDataService } from '../../../products/services/products-data.service';
import { TravelRiskDTO } from '../models&services/travel-risk.dto';
import { TravelRiskService } from '../models&services/travel-risk.service';

@Component({
  selector: 'app-travel-risk-detail',
  templateUrl: './travel-risk-detail.component.html',
  styleUrls: ['./travel-risk-detail.component.scss']
})
export class TravelRiskDetailComponent implements OnInit {
  @Input() list: any[] = []
  @Input() product: Product
  @Input() editData: any = {}
  @Input() oldData: any = {}
  @Input() resourceId?: string
  @Input() referenceID?: string
  @Input() premiumAmt: string
  @Input() prodDetailForm: PageUI
  @Input() travelerForm: PageUI
  @Input() benefiForm: PageUI
  @Input() riskId: number
  @Input() sumInsured: number
  @ViewChild(DynamicFormComponent) dynForm: DynamicFormComponent
  @ViewChild(DynamicFormComponent) dynFormTraveler: DynamicFormComponent
  @Input() tempData: any = {
    travelDetail: null,
    traveler: null,
    benefi: [],
    cover: []
  }
  stepData = {
    step1: false,
    step2: false,
    step3: false,
    step4: false
  }
  tableReform: any[] = []
  premium: number = 0
  activeBox: string = 'DETAIL'
  constructor(
    private globalFun: GlobalFunctionService,
    private numberPipe: DecimalPipe,
    private pageDataService: PageDataService,
    private prodService: ProductDataService,
    private datePipe: DatePipe,
    private masterServer: MasterDataService,
    private auth: AuthService,
    private cdRef: ChangeDetectorRef,
    private travelRikService: TravelRiskService,
    private modalService: NgbModal,
    private ngModal: NgbActiveModal
  ) { }

  get validCancel() {
    let tep = this.stepData.step1 || this.stepData.step2 || this.stepData.step3 || this.stepData.step4 ? true : false
    let tep2 = this.stepData.step1 && this.stepData.step2 && this.stepData.step3 && this.stepData.step4 ? false : true
    return tep && tep2
  }
  ngOnInit(): void {
    this.globalFun.travelPremiumResult.subscribe(res => {
      this.premium = res
    })

  }

  calPremimun() {
    if (this.oldData.id) {
      this.updateTravelRisk()
    } else {
      this.saveTravelRisk()
    }
  }

  nextCover() {
    this.stepData.step3 = true
    this.activeBox = "COVER"
  }

  coverDone() {
    this.stepData.step4 = true
    this.activeBox = "COVER"
  }

  toggleAccordion(type: string) {
    this.activeBox = type == this.activeBox ? "" : type
  }

  deleteData(index, item) {

  }

  download(col, item) {

  }
  //   travelDetail
  // traveler
  // benefi

  newData(editData?: any, index?: number) {
    const activeForm = this.benefiForm;
    const modalRef = this.modalService.open(FormViewModalComponent, { size: 'xl' });
    modalRef.componentInstance.controls = activeForm.controls
    modalRef.componentInstance.pageName = activeForm.pageTitle
    modalRef.componentInstance.activateForm = activeForm
    modalRef.componentInstance.oldData = index >= 0 ? editData : {}
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.data && res.type == 'save') {
          if (index >= 0) {
            this.updateDataAPI(activeForm, res.data, this.tempData['benefi'][index].refId, index, "benefi")
          } else {
            this.saveDataAPI(activeForm, res.data, "benefi")
          }
        }
      }
    })
  }

  saveTravelerTemp(event) {
    if (this.travelerForm.pageType == "form" && this.tempData['traveler']) {
      if (this.tempData['traveler'].refId)
        this.updateDataAPI(this.travelerForm, event, this.tempData['traveler'].refId, -1, "traveler")
      else
        this.saveDataAPI(this.travelerForm, event, 'traveler')
    } else
      this.saveDataAPI(this.travelerForm, event, 'traveler')
  }

  saveDetailTemp(event) {
    if (this.prodDetailForm.pageType == "form" && this.tempData['travelDetail']) {
      if (this.tempData['travelDetail'].refId)
        this.updateDataAPI(this.prodDetailForm, event, this.tempData['travelDetail'].refId)
      else
        this.saveDataAPI(this.prodDetailForm, event)
    } else
      this.saveDataAPI(this.prodDetailForm, event)
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

  async saveData(formGp, activeForm) {
    if (activeForm.function) {
      let fun = await this.globalFun[activeForm.function]("", formGp.form.getRawValue(), [], true);
      if (!fun) {
        return false
      }
    }
    let submited = formGp.handleSubmit()
    if (!submited) return false
  }

  saveDataAPI(page: FromGroupData, formData: any, type: string = "travelDetail") {
    this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0"
    let postData = {
      productId: this.product.id,
      type: this.prodService.viewType,
      tableName: page.tableName,
      resourceId: this.resourceId,
      agentId: this.auth.currentUserValue.id || 1,
      quotationId: this.referenceID,
      pageId: page.id,
      customerId: this.prodService.creatingCustomer.customerId,
      leadId: this.prodService.creatingLeadId || null,
      premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
      premiumView: this.premiumAmt,
      policyNumber: null,
      party: page.party || false,
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
    if (type != "travelDetail") {
      postData.pageData[0].data.push({
        "column": 'risk_id',
        "value": this.riskId,
        "party": false
      })
    }
    this.pageDataService.save(postData).pipe(switchMap((data: any) => {
      if (page.pageType == 'table') {
        return this.checkMasterValue(formData, page.controls, data)
      }
      return of(data)
    })).toPromise().then((res) => {

      if (res) {

        if (!this.resourceId)
          this.resourceId = res[0].resourceId;
        if (page.pageType == 'table') {
          formData = res[0].formData
          if (this.tempData[type]) {
            (this.tempData[type] as any[]).push({ ...formData, refId: res[0].refId, pageId: page.id });
          } else {
            this.tempData[type] = [{ ...formData, refId: res[0].refId }]
          }
          this.globalFun.tempFormData = this.tempData
          this.cdRef.detectChanges()
        } else {
          this.tempData[type] = { ...formData, refId: res[0].refId, pageId: page.id }
          if (type == "travelDetail") {
            this.riskId = res[0].refId
            this.stepData.step1 = true
            this.activeBox = "TRAVELER"
          }
          if (type == "traveler") {
            this.stepData.step2 = true
            this.activeBox = "BENEFI"
          }
          // if (this.pageOrder.length > this.activePage + 1) {
          //   if (this.formData[this.activePage + 1].controls) {

          //     this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls, this.tempData[this.formData[this.activePage + 1].tableName + this.formData[this.activePage + 1].id])
          //   }
          //   this.globalFun.tempFormData = this.tempData
          //   this.activePage += 1
          //   this.cdRef.detectChanges();
          //   if (this.formData[this.activePage].pageType == 'table') {
          //     this.reFormatTable(this.formData[this.activePage].controls)
          //   }
          // } else {
          //   this.globalFun.tempFormData = this.tempData
          //   this.goReusltPage()
          // }
        }

      }

    })

  }

  updateDataAPI(page: FromGroupData, formData: any, refId: number, isTable: number = -1, type: string = "travelDetail") {
    this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0"
    let postData = {
      productId: this.prodService.createingProd.id,
      type: this.prodService.viewType,
      tableName: page.tableName,
      resourceId: this.resourceId,
      refId: refId,
      customerId: this.prodService.creatingCustomer.customerId,
      quotationId: this.referenceID,
      agentId: this.auth.currentUserValue.id || 1,
      premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
      premiumView: this.premiumAmt,
      policyNumber: null,
      pageId: page.id,
      leadId: this.prodService.creatingLeadId || null,
      party: page.party || false,
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
    this.pageDataService.updateNoID(postData).pipe(switchMap((data: any) => {
      if (page.pageType == 'table') {
        return this.checkMasterValue(formData, page.controls, data)
      }
      return of(data)
    })).toPromise().then((res) => {

      if (res) {
        if (isTable < 0) {
          this.tempData[type] = { ...formData, refId: res.refId }
          if (type == "travelDetail") {
            this.stepData.step1 = true
            this.activeBox = "TRAVELER"
          }
          if (type == "traveler") {
            this.stepData.step2 = true
            this.activeBox = "BENEFI"
          }
        } else {
          formData = res.formData
          this.tempData[type][isTable] = { ...formData, refId: res.refId }
          this.globalFun.tempFormData = this.tempData
          this.cdRef.detectChanges();
        }
      }
    })

  }

  getCoverData() {

  }



  saveTravelRisk() {
    let postData: TravelRiskDTO = {
      insuredUnit: this.tempData['travelDetail'].insured_unit,
      noOfTraveller: this.tempData['travelDetail'].no_of_traveler,
      premium: this.premium,
      resourceId: this.resourceId,
      totalUnit: parseInt(this.tempData['travelDetail'].travel_unit),
      travelDuration: this.tempData['travelDetail'].travel_duration,
      travelPlan: this.tempData['travelDetail'].travel_plan,
      travellerName: this.tempData['traveler'].traveler_name,
      sumInsured: 0,
      riskId: this.tempData['travelDetail'].refId,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId,
        policyNumber: null,
        premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
        premiumView: this.premiumAmt,
        productId: this.prodService.createingProd.id,
        quotationId: this.prodService.referenceID,
        leadId: this.prodService.creatingLeadId || null,
        type: this.prodService.type
      },
    }
    this.travelRikService.save(postData).toPromise().then((result: any) => {
      if (result) {
        this.ngModal.dismiss({
          type: "save", data: { ...postData, id: result.id },
          detail: this.tempData['travelDetail'], traveler: this.tempData['traveler'],
          benefi: this.tempData['benefi'],
          // coverage: this.tempData['coverage']
        })
      }
    })
  }

  updateTravelRisk() {
    let postData: TravelRiskDTO = {
      id: this.oldData.id,
      insuredUnit: this.tempData['travelDetail'].insured_unit,
      noOfTraveller: this.tempData['travelDetail'].no_of_traveler,
      premium: this.premium,
      resourceId: this.resourceId,
      totalUnit: parseInt(this.tempData['travelDetail'].travel_unit),
      travelDuration: this.tempData['travelDetail'].travel_duration,
      travelPlan: this.tempData['travelDetail'].travel_plan,
      travellerName: this.tempData['traveler'].traveler_name,
      sumInsured: 0,
      riskId: this.tempData['travelDetail'].refId,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId,
        policyNumber: null,
        premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
        premiumView: this.premiumAmt,
        productId: this.prodService.createingProd.id,
        quotationId: this.prodService.referenceID,
        leadId: this.prodService.creatingLeadId || null,
        type: this.prodService.type
      },
    }
    this.travelRikService.updateNoID(postData).toPromise().then((result: any) => {
      if (result) {
        this.ngModal.dismiss({
          type: "save", data: { ...postData, id: result.id },
          detail: this.tempData['travelDetail'], traveler: this.tempData['traveler'],
          benefi: this.tempData['benefi'],
          // coverage: this.tempData['coverage']
        })
      }
    })
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


}
