import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth';
import { LoadingService } from '../../../modules/loading-toast/loading/loading.service';
import { PrintCol, PrintFormat } from '../../products/models/print-config.interface';
import { PageUIType, Product } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
import { BtnConfig, Field, FromGroupData } from '../field.interface';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
declare var require: any;
const htmlToPdfmake = require("html-to-pdfmake");
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
// import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import { environment } from 'src/environments/environment';
import { HealthPrintService } from '../../products/services/health-print.service';
import * as moment from 'moment';

@Component({
  selector: 'app-print-view-box',
  templateUrl: './print-view-box.component.html',
  styleUrls: ['./print-view-box.component.scss']
})
export class PrintViewBoxComponent implements OnInit {
  @Input() config: PrintFormat[] = [];
  @Input() configOrder: FromGroupData[] = []
  @Input() product: Product = {}
  @Input() tempData: any = {}
  @Input() resourcesId: string = ""
  @Input() isPrint: any
  @Input() emailInfo: any
  @Input() agentId: any
  @Input() isApplication: boolean
  @Input() creatingProd: any
  @Input() resourceDetail: any
  @Input() branch: any
  @Input() premiumView: any
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  temConfig: PrintFormat[] = [];
  premimunAmt: string = ""
  sourceOfBusiness: string = ''
  sourceOfBusinessCode:string=''
  today = new Date()
  agentName = ""
  agentData: any = {}
  formatedData: boolean = false
  qrLocation: string
  updateData:any;
  policyInfo: any = {}
  logo = `${environment.apiUrl}/attach/logo/kbzms-header-logo.png`;
  constructor(private el: ElementRef, private auth: AuthService, private loadingService: LoadingService, private numberPipe: DecimalPipe, private datePipe: DatePipe, private productService: ProductDataService, private healthPrintService: HealthPrintService) {

  }

  //wait for the component to render completely
  async ngOnInit() {
    if (this.resourcesId)
      this.qrLocation = location.origin + "/qr-source-link?resourceId=" + this.resourcesId + "&productId=" + this.productService.createingProd.id
    await this.loadingService.activate()
    if (this.config) {

      let temp: PrintFormat[] = JSON.parse(JSON.stringify(this.config))
      for (let formObj of this.configOrder) {
        if (formObj.type == PageUIType.DYN) {
          let printForm = temp.find(data => data.id == formObj.id)
          if (printForm) {
            printForm.tables.forEach(printTable => {
              printTable.row = printTable.row.map((row) => {
                let formatedCol: PrintCol[] = []
                let parentArray: string[] = []
                row.column.forEach((col, index) => {
                  let skip = false
                  if (col.data) {
                    let index = parentArray.findIndex(data => data == col.title)
                    if (index < 0) {
                      parentArray.push(col.title)
                    } else {
                      skip = true
                    }
                  }

                  if (!skip) {
                    if (col.data) {
                      formatedCol.push({ ...col, otherOption: [col.data] })
                    } else {
                      formatedCol.push(col)

                    }
                  } else {
                    let indexCol = formatedCol.findIndex(x => {
                      if (x.data) {
                        if (x.data.input != 'label' && x.title == col.title) return true
                      }
                      return false
                    })
                    formatedCol[indexCol].otherOption.push(col.data)
                  }
                })
                row.column = formatedCol
                return row
              })
            })
            this.temConfig.push(printForm)
          }
        } else {
          this.temConfig.push(formObj as PrintFormat)
          // return formObj as PrintFormat
        }

      }
      console.log("this.productService.editData.updateAt",this.productService.editData.updatedAt);
      
      if (this.productService.editData) {
        this.updateData = this.productService.editData.submittedAt ? moment(this.productService.editData.submittedAt).format('DD/MM/YYYY') : moment(new Date())
        console.log("update Date = ", this.updateData)
        this.premimunAmt = this.productService.editData.premiumView
        this.branch = this.productService.editData.branch
        this.sourceOfBusiness = this.productService.editData.sourceOfBusiness
        this.sourceOfBusinessCode=this.productService.editData.sourceOfBusinessCode
        this.getAgentData()
        if (this.product.code == 'PCHL01') {
          this.getDetail()
        }
        // this.today = this.creatingProd.createdAt
        this.agentName = this.productService.editData.agentFirstName + this.productService.editData.agentLastName
      }
      this.formatedData = true
    }
    if (this.productService.editData) {
      this.updateData = this.productService.editData.submittedAt ? moment(this.productService.editData.submittedAt).format('DD/MM/YYYY') : moment(new Date())
      this.branch = this.productService.editData.branch
      this.sourceOfBusiness = this.productService.editData.sourceOfBusiness
      this.sourceOfBusinessCode=this.productService.editData.sourceOfBusinessCode
      this.premimunAmt = this.productService.editData.premiumView
      this.getAgentData()
      if (this.product.code == 'PCHL01') {
        this.getDetail()
      }
      // this.today = this.createingProd.createdAt
      this.agentName = this.productService.editData.agentFirstName + this.productService.editData.agentLastName
    }
    this.formatedData = true
    await this.loadingService.deactivate()
    // this.temConfig = this.configOrder.map(x => {
    //   if (x.type == PageUIType.DYN) {
    //     let printForm = this.config.find(data => data.id == x.id)
    //     return printForm || (x as PrintFormat)
    //   } else {
    //     return x as PrintFormat
    //   }
    // })
  }
  getViewData(page) {
    let data = this.tempData[page.tableName + page.id]
    if (page.pageType == 'table' && !Array.isArray(data)) {
      return [data]
    }
    return data
  }


  getValue(cols: PrintCol, tempData) {
    let value = ""
    if (tempData) {
      for (let col of cols.otherOption) {
        if (tempData[col.name]) {
          if ((tempData[col.name] + "").length > 0) {
            if (col.input == "input" && col.type == "currency") {
              value += this.numberPipe.transform(tempData[col.name])
            }
            else if (col.input == "date") {
              value += this.datePipe.transform(tempData[col.name], "dd/MM/yyyy")
              if (col.type == "policy") {
                value += " - " + this.datePipe.transform(tempData[col.endName], "dd/MM/yyyy")
              }
            } else {
              value += tempData[col.name]
            }
          }
        }
      }
    }
    return value
  }

  getAgentData() {
    this.productService.getAgentInfo(this.agentId || 1).toPromise().then((res: any) => {
      if (res) {
        // console.log("RES",res);

        this.agentData = res.agentInfo;
        // console.log("this.agentData", this.agentData);

      }
    });
  }
  getDetail() {
    this.healthPrintService.getOne(this.resourcesId).toPromise().then((res: any) => {
      // console.log(res);
      if (res) {
        this.policyInfo = res.policyInfo
      }
    })
  }

  getStatic(key: string) {
    if (key == 'premimun')
      return this.premimunAmt
    if (key == "insurer_name")
      return this.agentName
    return ""
  }


  public async downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    console.log(html);

    const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).getBase64((res) => {
    //   console.log(res);

    // })
    pdfMake.createPdf(documentDefinition).download()
  }



}
