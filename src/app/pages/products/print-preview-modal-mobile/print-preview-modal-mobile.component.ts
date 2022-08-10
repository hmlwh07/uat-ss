import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FromGroupData } from '../../form-component/field.interface';
import { PrintFormat } from '../models/print-config.interface';
import { Product } from '../models/product.dto';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
declare var require: any;
const htmlToPdfmake = require("html-to-pdfmake");
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-print-preview-modal-mobile',
  templateUrl: './print-preview-modal-mobile.component.html',
  styleUrls: ['./print-preview-modal-mobile.component.scss'],
})
export class PrintPreviewModalMobileComponent implements OnInit, OnDestroy {
  @Input() configData: PrintFormat[] = []
  @Input() product: Product = {}
  @Input() configOrder: FromGroupData[] = []
  @Input() tempData: any = {}
  @Input() resourcesId: string = ""
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  content: string;
  base64data: string;

  constructor(
    public modal: NgbActiveModal,
    private pdfGenerator: PDFGenerator,
  ) { }

  ngOnInit() { }

  ngOnDestroy() { }

  printPDf() {

    window.scrollTo(0, 0)
    setTimeout(() => {
      // window.print();
      this.downloadFile();
    }, 1000)
  }

  downloadFile() {
    let fileName = this.product.code + '-' + this.resourcesId
    console.log("download file.")
    this.content = document.getElementById('componentID').innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'base64',
      // landscape: 'landscape',
      fileName: fileName,
    };
    this.pdfGenerator.fromData(this.content, options)
      .then(async (data) => {
        this.base64data = data;
        console.log("Base64 Data: ", this.base64data);
      }).catch((error) => {
        console.log('error', error);
      });

  }

}

