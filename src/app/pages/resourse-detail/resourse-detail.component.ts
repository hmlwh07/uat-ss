import { DatePipe, DecimalPipe, Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { AttachmentDownloadService } from '../../_metronic/core/services/attachment-data.service';
import { checkVaidDep } from '../check-parent';
import { ConfigInput, ConfigPage, FromGroupData, OptionValue } from '../form-component/field.interface';
import { PolicyService } from '../policy/policy.service';
import { PageDataService } from '../product-form/page-data.service';
import { PrintConfig } from '../products/models/print-config.interface';
import { PageUIType, ProductPages } from '../products/models/product.dto';
import { PrintPreviewModalComponent } from '../products/print-preview-modal/print-preview-modal.component';
import { AddOnQuoService } from '../products/services/add-on-quo.service';
import { CoverageQuoService } from '../products/services/coverage-quo.service';
import { ProductDataService } from '../products/services/products-data.service';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';

@Component({
  selector: 'app-resourse-detail',
  templateUrl: './resourse-detail.component.html',
  styleUrls: ['./resourse-detail.component.scss']
})
export class ResourseDetailComponent implements OnInit, OnDestroy {
  premiumAmt: string
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
  detailInput: any = {}
  private formatedData = {}
  printConfig: PrintConfig = {}
  signFileId: any = "";
  constructor(private productService: ProductDataService, private location: Location, private pageDataService: PageDataService, private addonQuo: AddOnQuoService, private coverageQuo: CoverageQuoService, private router: Router, private cdf: ChangeDetectorRef, private downloadService: AttachmentDownloadService, private numberPipe: DecimalPipe, private datePipe: DatePipe, private modalService: NgbModal, private policyService: PolicyService,private alertService:AlertService) { }

  async ngOnInit() {
    if (!this.productService.createingProd || !this.productService.createingProd.id) {
      this.location.back()
    } else {
      this.item = this.productService.createingProd
      this.type = this.productService.previewType
      this.resourceDetail = this.productService.editData
      this.signFileId = this.resourceDetail.attachmentId
      if (!this.resourceDetail) {
        this.location.back()
        return
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
      this.cdf.detectChanges()
    }
  }
  ngOnDestroy() {
    this.productService.createingProd = null
    this.productService.editData = null;
  }

  getDetail(tempFormData) {
    this.getOldData(this.resourceDetail, tempFormData)
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

        this.pageDataService.getDetail(page.tableName, oldData.id, page.id, true, page.controls).toPromise().then((res: any[]) => {

          if (res) {
            let temp = page.pageType == 'form' ? {} : []
            for (const data of res) {
              let tmpObj = {}
              for (const item of data.data) {
                if (item.column != 'id' && item.column != 'created_at' && item.column != 'updated_at')
                  tmpObj[item.column] = item.value
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
    let value = this.getOtherData(cols, data)
    if (value) {
      let valueId = value.split("].")[0].replace("[", "")
      this.downloadService.getDownload(valueId, value)
    }
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

  goToList() {
    // if (this.type == 'quotation') {
    //   this.productService.createingProd = null;
    //   this.productService.editData = null;
    //   this.router.navigateByUrl("/sale/quotation/list")
    // } else
    //   this.router.navigateByUrl("/sale/application/list")
    this.location.back()
  }

  createPolicy() {
    this.productService.createingProdRef = this.item
    this.productService.viewType = 'policy'
    this.productService.type = 'policy'
    this.productService.referenceID = this.resourceDetail.id
    this.productService.referenceStatus = this.resourceDetail.status
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

  viewPrint() {
    const modalRef = this.modalService.open(PrintPreviewModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.configData = this.printConfig.printFormat
    modalRef.componentInstance.configOrder = this.printConfig.prinitUI
    modalRef.componentInstance.product = this.item
    modalRef.componentInstance.tempData = this.formatedData
    modalRef.componentInstance.resourcesId = this.resourceDetail.id
    modalRef.result.then(() => { }, (res) => {

    })
  }

  createSign() {
    const modalRef = this.modalService.open(SignaturePadComponent, { size: 'md', backdrop: false });
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == "save") {
          this.policyService.updateAttachment(this.resourceDetail.id, res.data).toPromise().then((response) => {
            if (response) {
              this.alertService.activate('This record was created', 'Success Message');
              this.signFileId = res.data
              this.productService.editData['attachmentId'] = res.data
            
            }
          })
        }
      }
    })
  }

}
