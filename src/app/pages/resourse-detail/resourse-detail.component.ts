import { DatePipe, DecimalPipe, Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, of } from 'rxjs';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MasterDataService } from 'src/app/modules/master-data/master-data.service';
import { AttachmentDownloadService } from '../../_metronic/core/services/attachment-data.service';
import { checkVaidDep } from '../check-parent';
import { ConfigInput, ConfigPage, FromGroupData, OptionValue } from '../form-component/field.interface';
import { LeadDetailService } from '../lead-detail/lead-detail.service';
import { PolicyService } from '../policy/policy.service';
import { PageDataService } from '../product-form/page-data.service';
import { PrintConfig } from '../products/models/print-config.interface';
import { PageUIType, ProductPages } from '../products/models/product.dto';
import { PrintPreviewModalMobileComponent } from '../products/print-preview-modal-mobile/print-preview-modal-mobile.component';
import { PrintPreviewModalComponent } from '../products/print-preview-modal/print-preview-modal.component';
import { ProductDataService } from '../products/services/products-data.service';
import { MotorCheckListPage } from '../static-print/motor-check-list/motor-check-list.page';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-resourse-detail',
  templateUrl: './resourse-detail.component.html',
  styleUrls: ['./resourse-detail.component.scss']
})
export class ResourseDetailComponent implements OnInit, OnDestroy {
  premiumAmt: string
  submittedCode: string;
  policyNumber: string;
  branch: string;
  item: any
  resultObj: any = {}
  type: string
  Object = Object;
  Array = Array;
  pageOrder: any[]
  coverage = {
    sumInsured: false,
    unit: false,
    premium: false,
  }
  addon = {
    sumInsured: false,
    unit: false,
    premium: false,
  }
  coverageData: any = {}
  addOnData: any = {}
  resourceDetail: any = {}
  isApplication: boolean = true;
  detailInput: any = {}
  private formatedData = {}
  printConfig: PrintConfig = {}
  signFileId: any = null;
  branchOption = [];
  sourceOfBusiness: string;
  sourceOfBusinessOption = []
  selectedBranchCode: string = null;
  selectedSourceOfBusiness: string = null
  statusCode:any=''
  emailInfo: any
  quoResult: boolean = true
  isFromLead: boolean
  constructor(
    private productService: ProductDataService,
    private location: Location,
    private pageDataService: PageDataService,
    private router: Router,
    private cdf: ChangeDetectorRef,
    private downloadService: AttachmentDownloadService,
    private numberPipe: DecimalPipe,
    private datePipe: DatePipe,
    private modalService: NgbModal,
    private policyService: PolicyService,
    private alertService: AlertService,
    private masterDataService: MasterDataService,
    private leadDetailService: LeadDetailService,
  ) { }
  async ngOnInit() {
    if (!this.productService.createingProd || !this.productService.createingProd.id) {
      this.location.back()
    } else {
      this.item = this.productService.createingProd || this.productService.selectedProd
      console.log("ITEM", this.item);

      this.type = this.productService.previewType
      this.resourceDetail = this.productService.editData
      this.isApplication = this.productService.isApplication
      this.isFromLead = this.productService.isFromLead
      console.log(' this.isFromLead ', this.isFromLead);

      this.resourceDetail.status = this.resourceDetail.status ? this.resourceDetail.status : 'in_progress'
      this.signFileId = this.resourceDetail.attachmentId
      this.branch = this.resourceDetail.branchCode
      this.sourceOfBusiness = this.resourceDetail.sourceOfBusiness ? (this.item.code + '-' + this.resourceDetail.sourceOfBusiness) : null
      console.log("this.sourceOfBusiness", this.sourceOfBusiness);
      console.log("RESOURCE", this.resourceDetail)
      if (this.isApplication) {
        this.leadDetailService.getStatusById(this.resourceDetail.leadId).toPromise().then(res => {
          if (res) {
            this.statusCode = res;
          }
        })
      }

      if (!this.resourceDetail) {
        this.location.back()
        return
      }
      if (this.resourceDetail.updateAt) {
        this.resourceDetail.updateAt = this.formatDateDDMMYYY(this.resourceDetail.updateAt)
      }
      else if(this.resourceDetail.updatedAt){
        this.resourceDetail.updateAt=this.formatDateDDMMYYY(this.resourceDetail.updatedAt)
      }
      let pageUI: ProductPages = JSON.parse(this.item.config);
      if (this.productService.previewType == 'quotation') {
        this.pageOrder = pageUI.quotation || []
        this.detailInput = pageUI.quotation_input || {}
      } else {
        this.pageOrder = pageUI.application || []
        this.detailInput = pageUI.application_input || {}
      }
      let dumType = this.type == 'policy' ? 'application' : this.type
      let tempFormData = this.item.productUIs.map(x => {
        if (x.type == dumType)
          return JSON.parse(x.dynamicProduct.config)
      })
      // if (this.productService.resultData) {
      //   this.resultObj = this.productService.resultData
      //   this.rechangePageData(tempFormData)
      // } else {
      this.printConfig = JSON.parse(this.item.pdfConfig)
      this.item = this.productService.createingProd
      this.getDetail(tempFormData)
      // }
      let checkTravel = this.pageOrder.findIndex(x => x.id == 'static_1648784270356')
      // console.log(checkTravel);
      if (checkTravel >= 0) {
        let checkProd = this.pageOrder.findIndex(x => x.tableName == "travel_detail")
        if (checkProd >= 0) {
          this.pageOrder.splice(checkProd, 1)
        }
        let checkTraveler = this.pageOrder.findIndex(x => x.tableName == "traveler_detail")
        if (checkTraveler >= 0) {
          this.pageOrder.splice(checkTraveler, 1)
        }
        let checkBeneficiary = this.pageOrder.findIndex(x => x.tableName == "trave_beneficiary")
        if (checkBeneficiary >= 0) {
          this.pageOrder.splice(checkBeneficiary, 1)
        }
        let checkCoverage = this.pageOrder.findIndex(x => x.id == 'coverage_1634010995936')
        if (checkCoverage >= 0) {
          this.pageOrder.splice(checkCoverage, 1)
        }
      }
      // console.log(this.pageOrder);
      // if (this.item.coverages && this.item.coverages.length > 0) {
      //   this.coverage = {
      //     sumInsured: this.item.coverages[0].sumInsured,
      //     unit: this.item.coverages[0].unit,
      //     premium: this.item.coverages[0].premium,
      //   }
      //   for (const item of this.item.coverages) {
      //     let response: any = {};
      //     try {
      //       if (this.resourceDetail) {
      //         response = await this.coverageQuo.getOne(item.id, this.resourceDetail.id).toPromise()
      //       }
      //     } catch (error) {
      //     }
      //     this.coverageData[item.id] = {
      //       sum: response ? response.sumInsured || 0 : 0,
      //       unit: response ? response.unit || 0 : 0,
      //       premium: response ? response.premium || 0 : 0
      //     }
      //   }
      // }
      // if (this.item.addOns && this.item.addOns.length > 0) {
      //   this.addon = {
      //     sumInsured: this.item.addOns[0].sumInsured,
      //     unit: this.item.addOns[0].unit,
      //     premium: this.item.addOns[0].premium,
      //   }
      //   for (const item of this.item.addOns) {
      //     let response: any = {};
      //     try {
      //       if (this.resourceDetail) {
      //         response = await this.addonQuo.getOne(item.id, this.resourceDetail.id).toPromise()
      //       }
      //     } catch (error) {
      //     }
      //     this.addOnData[item.id] = {
      //       sum: response ? response.sumInsured || 0 : 0,
      //       unit: response ? response.unit || 0 : 0,
      //       premium: response ? response.premium || 0 : 0
      //     }
      //   }
      // }
      forkJoin([
        this.getBranch(),
        this.getSourceOfBusiness()
      ]).toPromise().then((res: any) => {
        if (res) {
          console.log("SOC", res[1]);
          this.branchOption = res[0]
          this.sourceOfBusinessOption = res[1]
          this.cdf.detectChanges()
          if (this.branch) {
            this.selectedBranchCode = this.branch
            let branch = this.branchOption.find((p) => p.code == this.branch)
            // console.log(branch);
            this.productService.editData.branch = branch.value
          }
          if (this.sourceOfBusiness) {
            this.selectedSourceOfBusiness = this.sourceOfBusiness
            let ss = this.sourceOfBusiness.split('-')
            let soc = ss[1]
            let sob = this.sourceOfBusinessOption.find((p) => p.code == this.sourceOfBusiness)
            this.productService.editData.sourceOfBusiness = sob.value
            this.productService.editData.sourceOfBusinessCode = soc
          }
        }
      })
    }
  }
  ngOnDestroy() {
    this.productService.createingProd = null
    this.productService.editData = null;
  }
  getDetail(tempFormData) {
    this.getOldData(this.resourceDetail, tempFormData)
  }
  getQuoResult(event) {
    if (this.item.code == 'PLMO01' || this.item.code == 'PLMO02') {
      console.log("EVE", event);
      this.quoResult = event
    }
  }
  checkDisabled() {
    let isDisabled = true
    if (this.resourceDetail.apiStatus != null) {
      let status = this.resourceDetail.apiStatus.toLowerCase()
      if (status != 'fail') {
        isDisabled = true
        // console.log(status, isDisabled);
      } else {
        isDisabled = false
        // console.log(status, isDisabled);
      }
    } else {
      if (this.statusCode == '07') {
        isDisabled = true
      } else {
        isDisabled = false
      }
    }
    return isDisabled
  }
  getOldData(oldData: any, tempFormData) {
    let index = 0
    // this.pageOrder.forEach((element) => {
    // let lengthData = this.pageOrder.filter(x => x.type == PageUIType.DYN).length
    let lengthData = this.pageOrder.length
    for (let element of this.pageOrder) {
      if (element.type == PageUIType.DYN) {
        let page = this.findPageValue(tempFormData, element.id)
        this.pageOrder[index].tableName = page.tableName
        this.pageOrder[index].id = page.id
        this.pageOrder[index].controls = page.controls
        // console.log("this.pageOrder[index].controls ", this.pageOrder[index].controls);
        this.pageDataService.getDetail(page.tableName, oldData.id, page.id, true, page.controls).toPromise().then((res: any[]) => {
          if (res) {
            let temp = page.pageType == 'form' ? {} : []
            for (const data of res) {
              let tmpObj = {}
              for (const item of data.data) {
                if (item.column != 'id' && item.column != 'created_at' && item.column != 'updated_at')
                  tmpObj[item.column] = item.value
                if (item.valueCode) {
                  tmpObj[item.column + "Code"] = item.valueCode
                }
              }
              if (Array.isArray(temp)) {
                temp.push(tmpObj)
              } else {
                temp = tmpObj
              }
            };
            this.resultObj[page.tableName + page.id] = temp
            this.formatedData = JSON.parse(JSON.stringify(this.resultObj))
            if (lengthData == index) {
              this.cdf.detectChanges()
            }
          }
        })
      }
      index += 1
    }
    this.cdf.detectChanges()
    // });
  }
  download(cols: string[], data: any) {
    let value = this.getOtherDataID(cols, data)
    let fileName = this.getOtherData(cols, data)
    if (value) {
      let valueId = value.split("].")[0].replace("[", "")
      this.downloadService.getDownload(valueId, fileName)
    }
  }
  downloadFile(data: any) {
    let test = data.split("].")
    let file = test[0].split("[")
    this.downloadService.getDownload(file[1], test[1])
  }
  getFileName(data: any) {
    if (data) {
      if (data.includes('[')) {
        let test = data.split("].")
        return test[1]
      }
    }
    return data
  }
  getFormatTable(controls: ConfigInput[]) {
    // let tableReform = []
    // let parentArray: string[] = []
    // let tempControls: ConfigInput[] = JSON.parse(JSON.stringify(controls))
    // for (let x of tempControls) {
    //   let skip = false
    //   if (!x.isHideView) {
    //     if (x.dependency) {
    //       let index = parentArray.findIndex(data => data == x.dependency.parentName)
    //       if (index < 0) {
    //         parentArray.push(x.dependency.parentName)
    //       } else {
    //         skip = true
    //       }
    //       // parentArray.push()
    //     }
    //     if (!skip) {
    //       let tempObj = {
    //         title: x.label || x.name,
    //         cols: [x.name],
    //         parent: x.dependency ? x.dependency.parentName : ""
    //       }
    //       tableReform.push(tempObj)
    //     } else {
    //       let index = tableReform.findIndex(data => data.parent == x.dependency.parentName)
    //       if (index >= 0)
    //         tableReform[index].cols.push(x.name)
    //     }
    //     // return x
    //   }
    // }
    // return tableReform
    let tableReform = []
    let parentArray: string[] = []
    let tempControls: ConfigInput[] = JSON.parse(JSON.stringify(controls))
    for (let x of tempControls) {
      x.options = x.options ? x.options : []
      let skip = false
      if (!x.isHideView) {
        if (x.tableTitle) {
          let index = parentArray.findIndex(data => data == x.tableTitle)
          if (index < 0) {
            parentArray.push(x.tableTitle)
          } else {
            skip = true
          }
          // parentArray.push()
          // x.master == 'true' ? x.name + "Value" :
        }
        if (!skip) {
          let tempName = x.name
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
          tableReform.push(tempObj)
        } else {
          let index = tableReform.findIndex(data => data.parent == x.dependency.parentName)
          if (index >= 0) {
            let tempName = x.name
            let otherNameObj = {
              name: tempName,
              type: x.input,
              subType: x.type,
              options: (x.master == "false" || x.master == false) && x.options.length > 0 ? x.options : []
            }
            tableReform[index].cols.push(otherNameObj)
          }
        }
        // return x
      }
    }
    // console.log("TABLE",tableReform);
    return tableReform
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
    console.log( "cols -----  " , cols ,"data -------- " , data )
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
            let test = data[col.name].split("].")
            let file = test[0].split("[")
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
  findPageValue(array: ConfigPage[], value: string) {
    let data: FromGroupData
    for (let index = 0; index < array.length; index++) {
      if (!array[index]) continue
      data = array[index].fromGroup.find(x => x.id == value);
      if (data) {
        data.controls.map(x => {
          if (this.detailInput[value] && x.input != "underline" && x.input != "label") {
            x.show = this.detailInput[value][x.name] >= 0 ? (this.detailInput[value][x.name] > 0 ? true : false) : x.show
            x.disabled = this.detailInput[value][x.name] >= 0 ? (this.detailInput[value][x.name] == 2 ? true : x.disabled) : x.disabled
          } else if (this.detailInput[value] && x.input == "label") {
            x.show = this.detailInput[value][x.placeholder] >= 0 ? (this.detailInput[value][x.placeholder] > 0 ? true : false) : x.show
          }
          return x
        })
        break
      }
      // break
    }
    return data
  }
  rechangePageData(tempFormData) {
    for (let index = 0; index < this.pageOrder.length; index++) {
      const element = this.pageOrder[index];
      if (element.id != 'coverage' && element.id != 'addon') {
        let page = this.findPageValue(tempFormData, element.id)
        this.pageOrder[index].tableName = page.tableName
        this.pageOrder[index].id = page.id
        this.pageOrder[index].controls = page.controls
      }
    }
    // this.pageOrder.forEach((element) => {
    //   if (element.id != 'coverage' && element.id != 'addon') {
    //   }
    // })
  }
  saveBranch() {
    if (!this.branch) {
      this.alertService.activate("Please select Branch and Save first.", 'Warning Message')
    }
    else if (!this.sourceOfBusiness) {
      this.alertService.activate("Please select Source of Business and Save first.", 'Warning Message')
    }
    if (this.branch && this.sourceOfBusiness) {
      this.selectedBranchCode = this.branch
      let branch = this.branchOption.find((p) => p.code == this.branch);
      let ss = this.sourceOfBusiness.split('-')
      let soc = ss[1]
      this.selectedSourceOfBusiness = this.sourceOfBusiness
      let sourceOfBusiness = this.sourceOfBusinessOption.find((p) => p.code == this.sourceOfBusiness);
      this.policyService.submitBranch(this.resourceDetail.id, this.selectedBranchCode, soc).toPromise().then(res => {
        if (res) {
          this.alertService.activate("This record was created", "Success Message")
          this.productService.editData.branch = branch.value
          this.productService.editData.branchCode = this.selectedBranchCode
          this.productService.editData.sourceOfBusiness = sourceOfBusiness.value
          this.productService.editData.sourceOfBusinessCode = soc
        }
      })
    } else {
      this.selectedBranchCode = null
      this.selectedSourceOfBusiness = null
    }
  }
  saveSourceOfBusiness() {
    if (this.sourceOfBusiness) {
      let ss = this.sourceOfBusiness.split('-')
      let soc = ss[1]
      this.selectedSourceOfBusiness = this.sourceOfBusiness
      let sourceOfBusiness = this.sourceOfBusinessOption.find((p) => p.code == this.sourceOfBusiness);
      this.policyService.submitSourceOfBusiness(this.resourceDetail.id, soc).toPromise().then(res => {
        if (res) {
          this.alertService.activate("This record was created", "Success Message")
          this.productService.editData.sourceOfBusiness = sourceOfBusiness.value
          this.productService.editData.sourceOfBusinessCode = soc
        }
      })
    } else {
      this.selectedSourceOfBusiness = null
    }
  }
  goToList() {
    // if (this.type == 'quotation') {
    //   this.productService.createingProd = null;
    //   this.productService.editData = null;
    //   this.router.navigateByUrl("/sales/quotation/list")
    // } else
    //   this.router.navigateByUrl("/sales/application/list")
    this.location.back()
  }
  createPolicy() {
    this.productService.createingProdRef = this.item
    this.productService.viewType = 'policy'
    this.productService.type = 'policy'
    this.productService.referenceID = this.resourceDetail.id
    this.productService.referenceStatus = this.resourceDetail.status
    this.productService.creatingLeadId = this.resourceDetail.leadId
    this.productService.isApplication = true
    this.productService.editData = null
    this.router.navigateByUrl("/product-form")
  }
  checkDep(dependency, checkData) {
    if (dependency)
      return checkVaidDep(dependency, { value: checkData })
    return true
  }
  getOptionValue(value, options: OptionValue[], id: string, name: string) {
    let valueData = options.find(x => x.value == value)
    if (valueData) {
      if (this.formatedData)
        this.formatedData[id][name] = valueData.text
      return valueData.text
    }
    return value
  }
  viewCheckListPrint() {
    const modalRef = this.modalService.open(MotorCheckListPage, { size: 'xl2', backdrop: false });
    modalRef.componentInstance.configOrder = this.printConfig.prinitUI
    modalRef.componentInstance.product = this.item
    modalRef.componentInstance.tempData = this.formatedData
    modalRef.componentInstance.resourcesId = this.resourceDetail.id
    modalRef.componentInstance.resourceDetail = this.resourceDetail
    modalRef.componentInstance.previewType = this.type
    modalRef.componentInstance.createingProd = this.item
    modalRef.componentInstance.isCheckList = true
    modalRef.componentInstance.agentId = this.resourceDetail.agentId
    modalRef.componentInstance.signId = this.signFileId || null
    modalRef.result.then(() => { }, (res) => {
    })
    // const modalRef = this.modalService.open(PrintPreviewModalComponent, { size: 'xl2', backdrop: false }); modalRef.componentInstance.configData = this.printConfig.printFormat
    // modalRef.componentInstance.configOrder = this.printConfig.prinitUI
    // modalRef.componentInstance.product = this.item
    // modalRef.componentInstance.tempData = this.formatedData
    // modalRef.componentInstance.resourcesId = this.resourceDetail.id
    // modalRef.componentInstance.agentId = this.resourceDetail.agentId
    // //FOR_QUOTATION
    // modalRef.componentInstance.isApplication = this.isApplication
    // //FOR_AUTO_ATTACHMENT
    // modalRef.componentInstance.isPrint = true
    // //FOR_MOTOR_CHECK_LIST
    // modalRef.componentInstance.isCheckList = true
    // modalRef.result.then(() => { }, (res) => {
    // })
  }

  viewPrint() {
    if (!this.selectedBranchCode && this.type == 'policy') {
      this.alertService.activate("Please select Branch and Save first.", 'Warning Message')
    } else {
      // if (this.platform.is('android') || this.platform.is('ios')) {
      //   const modalRef = this.modalService.open(PrintPreviewModalMobileComponent, { size: 'xl2', backdrop: false });
      //   modalRef.componentInstance.configData = this.printConfig.printFormat
      //   modalRef.componentInstance.configOrder = this.printConfig.prinitUI
      //   modalRef.componentInstance.product = this.item
      //   modalRef.componentInstance.tempData = this.formatedData
      //   modalRef.componentInstance.resourcesId = this.resourceDetail.id
      //   modalRef.result.then(() => { }, (res) => {
      //   })
      // } else {
      const modalRef = this.modalService.open(PrintPreviewModalComponent, { size: 'xl2', backdrop: false }); modalRef.componentInstance.configData = this.printConfig.printFormat
      modalRef.componentInstance.configOrder = this.printConfig.prinitUI
      modalRef.componentInstance.product = this.item
      modalRef.componentInstance.tempData = this.formatedData
      modalRef.componentInstance.resourcesId = this.resourceDetail.id
      modalRef.componentInstance.agentId = this.resourceDetail.agentId
      modalRef.componentInstance.premiumView = this.resourceDetail.premiumView
      modalRef.componentInstance.branch = this.branch
      modalRef.componentInstance.creatingProd = this.item
      this.productService.createingProd=this.item
      this.productService.editData=this.resourceDetail
      //FOR_QUOTATION
      modalRef.componentInstance.isApplication = this.isApplication
      //FOR_AUTO_ATTACHMENT
      modalRef.componentInstance.isPrint = true
      //FOR_MOTOR_CHECK_LIST
      modalRef.componentInstance.isCheckList = false
      modalRef.result.then(() => { }, (res) => {
      })
    }
    // }
  }
  // attachProposal() {
  //   agentId: 1
  //   currency: "MMK"
  //   customerId: 565
  //   leadId: "LD-20221003-0005381"
  //   pageData: []
  //   pageId: "e99a294e-de9a-4692-b8ec-3debdf6f354b"
  //   party: false
  //   policyExpireDate: null
  //   policyInceptionDate: null
  //   policyNumber: null
  //   premium: "10800"
  //   premiumView: "10,800.00 MMK"
  //   productCode: "PLTR01"
  //   productId: 25
  //   quotationId: null
  //   resourceId: "GIPLTR0120221001084"
  //   sumInsure: 0
  //   sumInsureView:null
  //   tableName:"attachment"
  //   type:"policy"
  // }
  Test() {
    if (!this.quoResult) {
      this.alertService.activate("Please check the basic coverage value after edit on application and try to submit again.", 'Warning Message')
    }
  }

  async submitPolicyWithProposal() {
    if (!this.quoResult) {
      this.alertService.activate("Please check the basic coverage value after edit on application and try to submit again.", 'Warning')
    }
    else if (!this.selectedBranchCode) {
      this.alertService.activate("Please select Branch and Save first.", 'Warning Message')
    }
    else if (!this.selectedSourceOfBusiness) {
      this.alertService.activate("Please select Source of Business and Save first.", 'Warning Message')
    }
    else if (this.signFileId == null) {
      this.alertService.activate("Please add Signature first", 'Warning Message')
    } else {
      this.getEmailInfo()
    }
  }
  getEmailInfo() {
    this.policyService.getEmailInfo(this.branch, this.item.code).toPromise().then((res) => {
      // console.log(res);
      if (res) {
        this.emailInfo = res
        if (this.emailInfo) {
          const modalRef = this.modalService.open(PrintPreviewModalComponent, {
            size:
              'xl2', backdrop: false
          }); modalRef.componentInstance.configData = this.printConfig.printFormat
          modalRef.componentInstance.configOrder = this.printConfig.prinitUI
          modalRef.componentInstance.product = this.item
          modalRef.componentInstance.tempData = this.formatedData
          modalRef.componentInstance.resourcesId = this.resourceDetail.id
          modalRef.componentInstance.agentId = this.resourceDetail.agentId
          modalRef.componentInstance.emailInfo = this.emailInfo
          //FOR_AUTO_ATTACHMENT
          modalRef.componentInstance.isPrint = false
          modalRef.result.then(() => { }, (res) => {
            // console.log("submitPolicyWithProposal", res);
            if (res.data) {
              this.alertService.activate('This record was submitted', 'Success Message');
              this.resourceDetail.apiStatus = 'sending'
              this.resourceDetail.status = 'submitted'
              this.cdf.detectChanges()
            }
          })
        }
      } else {
        this.alertService.activate('There is not setup emails for branch from application', 'Warning')
      }
    })
  }
  createSign() {
    const modalRef = this.modalService.open(SignaturePadComponent, { size: 'md', backdrop: false });
    modalRef.result.then(() => { }, (res) => {
      console.log("DD", res);

      if (res) {
        if (res.type == "save") {
          this.policyService.updateAttachment(this.resourceDetail.id, res.data.signId, res.data.signDate).toPromise().then((response) => {
            if (response) {
              this.alertService.activate('This record was created', 'Success Message');
              this.signFileId = res.data.signId
              this.productService.editData['attachmentId'] = this.signFileId
              this.productService.editData['signatureDate'] = res.data.signDate
            }
          })
        }
      }
    })
  }

  formatDateDDMMYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }
  submitPolicy() {
    if (!this.selectedBranchCode) {
      this.alertService.activate("Please select Branch and Save first.", 'Warning Message')
    } else if (this.signFileId == null) {
      this.alertService.activate("Please add Signature", 'Warning Message')
    } else {
      this.policyService.submitPolicy(this.resourceDetail.id, this.selectedBranchCode).toPromise().then((res) => {
        if (res) {
          this.alertService.activate('This record was submitted', 'Success Message');
          this.resourceDetail.apiStatus = 'sending'
          this.resourceDetail.status = 'submitted'
          this.cdf.detectChanges()
        }
      })
    }
  }
  getBranch() {
    return this.masterDataService.getDataByType("CORE_BRANCH").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
  }
  getSourceOfBusiness() {
    // return this.masterDataService.getDataByType("SOURCE_OF_BUSINESS").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
    //   return of([])
    // }))
    return this.masterDataService.getDataByParent("PRODUCT_SOB", this.item.code, 'PRODUCT').pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
  }
  getFormatOpt(res) {
    return res.map(x => {
      return { 'code': x.codeId, 'value': x.codeName || x.codeValue }
    })
  }
  changeBranch(event: any) {
    // if (event) {
    //   this.selectedBranchCode = event.code
    //   this.productService.editData.branchCode=this.selectedBranchCode
    // } else {
    //   this.selectedBranchCode = null
    // }
  }
}
