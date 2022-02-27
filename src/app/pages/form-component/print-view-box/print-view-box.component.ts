import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoadingService } from '../../../modules/loading-toast/loading/loading.service';
import { PrintCol, PrintFormat } from '../../products/models/print-config.interface';
import { PageUIType, Product } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
import { BtnConfig, Field, FromGroupData } from '../field.interface';

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
  temConfig: PrintFormat[] = [];
  premimunAmt: string = ""
  today = new Date()
  agentName = ""
  formatedData: boolean = false
  qrLocation: string
  constructor(private el: ElementRef, private loadingService: LoadingService, private numberPipe: DecimalPipe, private datePipe: DatePipe, private productService: ProductDataService) {

  }

  //wait for the component to render completely
  async ngOnInit() {
    this.qrLocation = location.origin + "/qr-source-link?resourceId=" + this.resourcesId + "&productID=" + this.productService.editData.id
    await this.loadingService.activate()
    if (this.config) {
      let temp: PrintFormat[] = JSON.parse(JSON.stringify(this.config))
      for (let formObj of this.configOrder) {
        if (formObj.type == PageUIType.DYN) {
          let printForm = temp.find(data => data.id == formObj.id)
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
        } else {
          this.temConfig.push(formObj as PrintFormat)
          // return formObj as PrintFormat
        }

      }
      if (this.productService.editData) {
        this.premimunAmt = this.productService.editData.premiumView
        // this.today = this.productService.editData.createdAt
        this.agentName = this.productService.editData.agentFirstName + this.productService.editData.agentLastName
      }
      this.formatedData = true
    }
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

  getStatic(key: string) {
    if (key == 'premimun')
      return this.premimunAmt
    if (key == "insurer_name")
      return this.agentName
    return ""
  }

}
