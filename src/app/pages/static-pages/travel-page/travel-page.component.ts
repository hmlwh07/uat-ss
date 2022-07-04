import { DecimalPipe } from "@angular/common";
import { ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { GlobalFunctionService } from "../../../core/global-fun.service";
import { AlertService } from "../../../modules/loading-toast/alert-model/alert.service";
import { ConfigInput } from "../../form-component/field.interface";
import { PolicyDTO } from "../../policy/policy.dto";
import { PageDataService } from "../../product-form/page-data.service";
import { PageUI, PageUIType, Product } from "../../products/models/product.dto";
import { ProductDataService } from "../../products/services/products-data.service";
import { QuotationDTO } from "../../quotations/quotation.dto";
import { StaticActionType, StaticPageAction } from "../static-field.interface";
import { TRAVELID } from "../static-pages.data";
import { TravelRiskService } from "./models&services/travel-risk.service";
import { TravelRiskDetailComponent } from "./travel-risk-detail/travel-risk-detail.component";

@Component({
  selector: 'app-travel-risk',
  templateUrl: "./travel-page.component.html",
})
export class TravelComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId?: string
  @Input() referenceID?: string
  @Input() premiumAmt: string
  @Input() travelForm: PageUI[] = []
  totalSiAmt:string
  totalSiAmtView:string
  listData: any[] = []
  tempData: any = {}
  tableReform: any[] = []
  requiredForm = {
    detail: null,
    traveler: null,
    benefi: null
  }
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  constructor(
    private globalFun: GlobalFunctionService,
    private travelRikService: TravelRiskService,
    private modalService: NgbModal,
    private cdf: ChangeDetectorRef,
    private numberPipe: DecimalPipe,
    private pageDataService: PageDataService,
    private prodService: ProductDataService,
    private alertService: AlertService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    if (this.travelForm.length < 3) {
      this.alertService.activate("This page cann't to process because there is not match with requirement configuration. Please check travel product config in prodcut configuration", "Warning")
    } else {
      this.requiredForm.detail = this.travelForm.find(x => x.unitCode == "travel_detail_0001")
      this.requiredForm.traveler = this.travelForm.find(x => x.unitCode == "traveler_0002")
      this.requiredForm.benefi = this.travelForm.find(x => x.unitCode == "trave_benefi_0003")
      this.getRiskList()
      this.callback()
    }
  }

  callback(ref?) {
    if (ref) {
      console.log("ref",ref);
      
      this.resourcesId = ref
      this.getOldData({ id:ref })
    }
    if (this.prodService.editData) {
      this.resourcesId = this.prodService.editData.id
      this.getOldData(this.prodService.editData)
    }
    // else if (this.referenceID) {
    //   this.getOldData({ id: this.referenceID }, true)
    // }
    // if (this.formData[this.activePage].pageType == 'table') {
    if (this.requiredForm.benefi)
      this.reFormatTable(this.requiredForm.benefi.controls)
    // }
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
    // this.cdRef.detectChanges()
  }

  getRiskList() {
    this.travelRikService.getMany(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        console.log("RES", res);

        this.globalFun.tempFormData[TRAVELID] = res
        this.listData = res || []
        for(let data of this.listData){
          this.totalSiAmt+=parseInt(data.sumInsured)
        }
        this.totalSiAmtView=this.numberPipe.transform(this.totalSiAmt || 0,'1.2-2')+" MMK"
        console.log("this.totalSiAmtView",this.totalSiAmtView);
        
        this.cdf.detectChanges()
      }
    })
  }

  newData(type, detail?: any) {
    console.log("DETAIL", detail);
    console.log("this.tempData['benefi']", this.tempData['benefi']);
    console.log("this.tempData['travelDetail']", this.tempData['travelDetail']);
    console.log("this.tempData['traveler']", this.tempData['traveler']);

    let modalRef = this.modalService.open(TravelRiskDetailComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.type = type
    modalRef.componentInstance.riskId = detail ? detail.riskId : ""
    modalRef.componentInstance.oldData = detail ? detail : {}
    modalRef.componentInstance.resourceId = this.resourcesId
    modalRef.componentInstance.product = this.product
    modalRef.componentInstance.editData = this.editData
    modalRef.componentInstance.premiumAmt = this.premiumAmt
    modalRef.componentInstance.prodDetailForm = this.requiredForm.detail
    modalRef.componentInstance.travelerForm = this.requiredForm.traveler
    modalRef.componentInstance.benefiForm = this.requiredForm.benefi
    modalRef.componentInstance.tableReform = this.tableReform
    if (detail) {
      let travel = this.tempData['travelDetail'].find(x => x.risk_id == detail.riskId)
      let traveler = this.tempData['traveler'].find(x => x.risk_id == detail.riskId)
      let benefi = []
      if (this.tempData['benefi']) {
        benefi = this.tempData['benefi'].filter(x => x.risk_id == detail.riskId)
        this.globalFun.tempFormData[this.requiredForm.benefi.tableName + this.requiredForm.benefi.id] = benefi
      }
      modalRef.componentInstance.tempData = {
        travelDetail: travel || {},
        traveler: traveler || {},
        benefi: benefi || [],
      }

    }

    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == "save") {
          // this.surrounding=res.data
          // this.ngZone.run(() => {
          if (detail) {
            let index = this.listData.findIndex(x => x.id == detail.id)
            this.listData[index] = res.data
          } else {
            let index = this.listData.findIndex(x => x.id == res.data.id)
            if (index >= 0)
              this.listData[index] = res.data
            else
              this.listData.push(res.data)
          }
          // })
          this.cdf.detectChanges()
          console.log("DISMISS", res);

          this.changeTravelDetail(res.detail)
          this.changeTraveler(res.traveler)
          this.changeBenefi(res.benefi, res.detail.refId)
          this.getRiskList()
          this.callback(res.data.resourceId)
          this.savePremimunFire().toPromise().then(res => {

          })
        }
      }
    })
  }

  changeTravelDetail(data) {
    let index = -1
    if (this.tempData['travelDetail']) {
      index = this.tempData['travelDetail'].findIndex(x => x.risk_id == data.refId)
      console.log("INDXEDX", index);

      if (index < 0) {
        this.tempData['travelDetail'].push(data)
      } else {
        this.tempData['travelDetail'][index] = data
      }
    }

  }
  changeTraveler(data) {
    if (this.tempData['traveler']) {
      let index = this.tempData['traveler'].findIndex(x => x.risk_id == data.refId)

      if (index < 0) {
        this.tempData['traveler'].push(data)
      } else {
        this.tempData['traveler'][index] = data
      }
    }
  }
  changeBenefi(data, refId) {
    let filtered = []
    if (this.tempData['benefi']) {
      filtered = this.tempData['benefi'].filter(x => x.risk_id != refId)
    }
    this.tempData['benefi'] = [...filtered, ...data]
  }

  delete(index) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.travelRikService.delete(this.listData[index].id).toPromise()
          .then((res) => {
            if (res) {
              this.listData.splice(index, 1)
              this.cdf.detectChanges()
              this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                this.getRiskList()
                this.callback()
              });
            }
          });
      }
    });
  }

  nextPage() {
    if (this.listData.length > 0) {
      this.globalFun.tempFormData[TRAVELID] = this.listData
      this.savePremimunFire().toPromise().then(res => {
        this.actionEvent.emit({ type: StaticActionType.NEXT })
      })
    }
  }

  savePremimunFire() {
    let premiumAmt = this.caluPremimun()
    let postData = {
      "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
      "premiumView": this.premiumAmt,
      "resourceId": this.resourcesId,
      "type": 'policy',
      "sunInsured":(Number(this.totalSiAmtView.split(" ")[0].split(',').join("")) || 0) + "",
      "sunInsuredView":this.totalSiAmtView
    }
    return this.pageDataService.updatePremimun(postData)
  }

  caluPremimun() {
    let amt = this.listData.reduce(function (sum, current) {
      return sum + parseInt(current.premium);
    }, 0)
    let amount = (amt * 1.00).toFixed(2)
    console.log("AMOUNT", amount);

    // let premium=this.globalFun.calculateDecimal(amount)  
    this.premiumAmt = this.numberPipe.transform(amount, "1.2-2") + " MMK"
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    return this.premiumAmt
  }

  replaceT(stringVal: string) {
    return stringVal.replace("T-", "").replace("TU-", "")
  }
  replaceTInsured(stringVal: string) {
    let insure = stringVal.replace("T-", "").replace("TU-", "")
    return parseInt(insure)
  }

  backPage() {
    if (this.listData.length > 0) {
      this.globalFun.tempFormData[TRAVELID] = this.listData
      this.savePremimunFire()
    }
    this.actionEvent.emit({ type: StaticActionType.PREV })

  }

  getOldData(oldData: QuotationDTO, isRef?: boolean) {
    let counter = 0

    this.travelForm.forEach((element) => {

      counter += 1
      if (element.type == PageUIType.DYN) {

        let view = element.pageType == 'table'
        this.pageDataService.getDetail(element.tableName, oldData.id, element.id, view, element.controls, true).toPromise().then(async (res: any) => {

          if (res && res.length > 0) {
            let temp = []
            let skipId = isRef
            for (const data of res) {
              let tmpObj = {}
              // tmpObj['risk_id'] = ""
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
              }
            };
            let valKey = "travelDetail"
            if (element.unitCode == "traveler_0002")
              valKey = 'traveler'
            if (element.unitCode == "trave_benefi_0003")
              valKey = 'benefi'
            this.tempData[valKey] = temp
            // this.globalFun.tempFormData = this.tempData
            if (element.function && element.pageType == 'form') {
              this.globalFun[element.function]("", this.tempData[element.tableName + element.id])
            }
          }

        }).catch(e => {

        })
      }
    });
  }

}