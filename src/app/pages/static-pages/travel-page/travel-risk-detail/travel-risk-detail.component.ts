import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, of, Subscription, switchMap } from 'rxjs';
import { GlobalFunctionService } from '../../../../core/global-fun.service';
import { AuthService } from '../../../../modules/auth';
import { AlertService } from '../../../../modules/loading-toast/alert-model/alert.service';
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
export class TravelRiskDetailComponent implements OnInit, OnDestroy {
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
  @Input() sumInsured: any
  @ViewChild(DynamicFormComponent) dynForm: DynamicFormComponent
  @ViewChild(DynamicFormComponent) dynFormTraveler: DynamicFormComponent
  isApplication: boolean = true
  tempRefTravel: any = []
  tempRefTraveler: any = []
  tempRefBeni: any = []
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

  currencyType: string = "MMK"
  unsub: Subscription[] = []
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
    private modal: NgbActiveModal,
    private alert: AlertService,
    private ngModal: NgbActiveModal
  ) { }

  get validCancel() {
    let tep = this.stepData.step1 || this.stepData.step2 || this.stepData.step3 || this.stepData.step4 ? true : false
    let tep2 = this.stepData.step1 && this.stepData.step2 && this.stepData.step3 && this.stepData.step4 ? false : true
    return tep && tep2
  }
  ngOnDestroy(): void {
    this.unsub.forEach(x => x.unsubscribe())
  }
  ngOnInit(): void {
    console.log("datempData",this.tempData);
    
    // console.log("tableReform", this.tableReform);
    if (this.prodService.viewType == "policy") {
      this.isApplication = true

    } else {
      this.isApplication = false
    }

    this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
      if (this.currencyType != res) {
        this.currencyType = res
      }
    })
    this.unsub[1] = this.globalFun.travelPremiumResult.subscribe(res => {
      this.premium = res
    })

  }

  calPremimun() {
    if (this.oldData.id) {
      this.updateTravelRisk(this.oldData.id)
    } else {
      console.log("HERE");

      this.saveTravelRisk()
    }
  }
  closeModal() {
    this.modal.close()
  }

  nextCover() {
    if (this.tempData['benefi'].length > 0) {


      let check = this.globalFun.checkPercent(this.tempData['benefi'])
      if (check) {
        this.stepData.step3 = true
        this.activeBox = "COVER"
      } else {
        this.alert.activate('Beneficiary percent need to be 100%!', 'Warning Message')
      }
    }
    else {
      this.stepData.step3 = true
      this.activeBox = "COVER"
    }
  }

  coverDone() {
    this.stepData.step4 = true
    this.activeBox = "COVER"
  }

  toggleAccordion(type: string) {
    this.activeBox = type == this.activeBox ? "" : type
  }

  deleteData(index, data) {
    this.alert.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        // let activeForm = this.formData[this.activePage]
        this.pageDataService.deleteData(this.benefiForm.tableName, data.refId, this.benefiForm.id).toPromise().then((res) => {
          if (res) {
            this.tempData['benefi'].splice(index, 1)
            this.cdRef.detectChanges();
            this.alert.activate('This record was deleted', 'Success Message').then(result => {

            });
          }
        })
      }
    });
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
    modalRef.componentInstance.benefiArray = this.tempData['benefi']
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
      productCode: this.product.code,
      type: this.prodService.viewType,
      tableName: page.tableName,
      resourceId: this.resourceId,
      agentId: this.auth.currentUserValue.id || 1,
      quotationId: this.referenceID,
      pageId: page.id,
      customerId: this.prodService.creatingCustomer.customerId,
      leadId: this.prodService.creatingLeadId || null,
      currency: this.currencyType,
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
    // if (type != "travelDetail") {
    //   postData.pageData[0].data.push({
    //     "column": 'risk_id',
    //     "value": this.riskId,
    //     "party": false
    //   })
    // }
    this.pageDataService.save(postData).pipe(switchMap((data: any) => {

      // console.log("DATA", data,"TTYPE",type);
      // console.log("TYPE",type);

      if (type == "travelDetail") {
        for (let travel of data) {
          this.tempRefTravel.push(travel.refId)
        }
      }
      if (type == "traveler") {
        for (let travel of data) {
          this.tempRefTraveler.push(travel.refId)
        }
      }
      if (type == 'benefi') {
        for (let travel of data) {
          this.tempRefBeni.push(travel.refId)
        }
      }

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
          this.tempData[type] = { ...formData, refId: res[0].refId, pageId: page.id, risk_id: this.riskId }
          if (type == "travelDetail") {
            // this.riskId = res[0].refId
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
      productCode: this.prodService.createingProd.code,
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
      currency: this.currencyType,
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
    if (type != "travelDetail") {
      postData.data.push({
        "column": 'risk_id',
        "value": this.riskId,
        "party": false
      })
    }
    this.pageDataService.updateNoID(postData).pipe(switchMap((data: any) => {
      // console.log("TYPE",type,"Data",data);

      if (type == "travelDetail") {
        // for(let travel of data){
        this.tempRefTravel.push(data.refId)
        // }
      }
      if (type == "traveler") {
        // for(let travel of data){
        this.tempRefTraveler.push(data.refId)
        // }
      }
      if (type == 'benefi') {
        // for(let travel of data){
        this.tempRefBeni.push(data.refId)
        // }
      }

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
    let totalUnit = this.tempData['travelDetail'].travel_unit
    this.sumInsured = this.numberPipe.transform(totalUnit * 500000, '1.2-2') + " MMK"
    let postData: TravelRiskDTO = {
      insuredUnit: this.tempData['travelDetail'].insured_unit,
      noOfTraveller: this.tempData['travelDetail'].no_of_traveler,
      premium: this.premium,
      resourceId: this.resourceId,
      totalUnit: parseInt(this.tempData['travelDetail'].travel_unit),
      travelDuration: this.tempData['travelDetail'].travel_duration ? this.tempData['travelDetail'].travel_duration : null,
      travelPlan: this.tempData['travelDetail'].travel_plan ? this.tempData['travelDetail'].travel_plan : null,
      travellerName: null,
      sumInsured: (Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
      sumInsuredView: this.sumInsured,
      riskId: this.tempData['travelDetail'].refId,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId,
        policyNumber: null,
        premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
        premiumView: this.premiumAmt,
        sumInsured: (Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
        sumInsuredView: this.sumInsured,
        productId: this.prodService.createingProd.id,
        productCode: this.prodService.createingProd.code,
        quotationId: this.prodService.referenceID,
        leadId: this.prodService.creatingLeadId || null,
        currency: this.currencyType,
        type: this.prodService.type
      },
    }
    if (this.prodService.viewType == 'policy') {
      // postData.travelDuration = this.tempData['travelDetail'].travel_duration ? this.tempData['travelDetail'].travel_duration : null
      // postData.travelPlan = this.tempData['travelDetail'].travel_plan ? this.tempData['travelDetail'].travel_plan : null
      postData.travellerName = this.tempData['traveler'].traveler_name ? this.tempData['traveler'].traveler_name : null
    }
    console.log(postData);

    this.travelRikService.save(postData).toPromise().then((result: any) => {
      if (result) {

        this.updateTravelRisk(result)
        // this.ngModal.dismiss()
        this.ngModal.dismiss({
          type: "save", data: { ...postData, id: result },
          detail: this.tempData['travelDetail'], traveler: this.tempData['traveler'],
          benefi: this.tempData['benefi'],
          // coverage: this.tempData['coverage']
        })
      }
    })
  }

  updateTravelRisk(oldId?) {
    let totalUnit = this.tempData['travelDetail'].travel_unit
    this.sumInsured = this.numberPipe.transform(totalUnit * 500000, '1.2-2') + " MMK"
    let postData: TravelRiskDTO = {
      id: oldId ? oldId : this.oldData.id,
      insuredUnit: this.tempData['travelDetail'].insured_unit,
      noOfTraveller: this.tempData['travelDetail'].no_of_traveler,
      premium: this.premium,
      resourceId: this.resourceId,
      totalUnit: parseInt(this.tempData['travelDetail'].travel_unit),
      travelDuration: this.tempData['travelDetail'].travel_duration ? this.tempData['travelDetail'].travel_duration : null,
      travelPlan: this.tempData['travelDetail'].travel_plan ? this.tempData['travelDetail'].travel_plan : null,
      travellerName: null,
      sumInsured: (Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
      sumInsuredView: this.sumInsured,
      riskId: oldId ? oldId : this.tempData['travelDetail'].refId,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId,
        policyNumber: null,
        premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
        premiumView: this.premiumAmt,
        sumInsured: (Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
        sumInsuredView: this.sumInsured,
        productId: this.prodService.createingProd.id,
        productCode: this.prodService.createingProd.code,
        quotationId: this.prodService.referenceID,
        currency: this.currencyType,
        leadId: this.prodService.creatingLeadId || null,
        type: this.prodService.type
      },
    }
    if (this.prodService.viewType == 'policy') {
      // postData.travelDuration = this.tempData['travelDetail'].travel_duration ? this.tempData['travelDetail'].travel_duration : null
      // postData.travelPlan = this.tempData['travelDetail'].travel_plan ? this.tempData['travelDetail'].travel_plan : null
      postData.travellerName = this.tempData['traveler'].traveler_name ? this.tempData['traveler'].traveler_name : null
    }
    console.log("POST",postData);
    
    this.travelRikService.updateNoID(postData).toPromise().then((result: any) => {
      if (result) {
        this.updateRiskId(this.tempRefTravel, result, 'travel_detail')
        this.updateRiskId(this.tempRefTraveler, result, 'traveler_detail')
        this.updateRiskId(this.tempRefBeni, result, 'trave_beneficiary')
        this.ngModal.dismiss({
          type: "save", data: { ...postData, id: result },
          detail: this.tempData['travelDetail'], traveler: this.tempData['traveler'],
          benefi: this.tempData['benefi'] || [],
          // coverage: this.tempData['coverage']
        })
      }
    })
    // this.ngModal.dismiss()
  }

  updateRiskId(refId, riskId, table) {
    if (refId) {
      let postValue = {
        refId: refId,
        riskId: riskId,
        tableName: table
      }

      this.pageDataService.updateRiskId(postValue).toPromise().then(res => {
        if (res) {
        }
      })
    }
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
