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
import html2canvas from 'html2canvas';
// import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import { environment } from 'src/environments/environment';
import { ProductDataService } from '../services/products-data.service';
import { Platform } from '@ionic/angular';
import { PRINT } from '../../static-print/static-print-const';

@Component({
  selector: 'app-print-preview-modal',
  templateUrl: './print-preview-modal.component.html',
  styleUrls: ['./print-preview-modal.component.scss'],
})
export class PrintPreviewModalComponent implements OnInit, OnDestroy {
  @Input() configData: PrintFormat[] = []
  @Input() product: Product = {}
  @Input() configOrder: FromGroupData[] = []
  @Input() tempData: any = {}
  @Input() resourcesId: string = ""
  @Input() agentId: any
  @Input() isPrint: any
  @Input() emailInfo:any
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  content: string;
  base64data: string;
  qrLocation: string
  isMobile: boolean = false
  logo = `${environment.apiUrl}/attach/logo/kbzms-header-logo.png`;
  constructor(
    public modal: NgbActiveModal,
    private cdRef: ChangeDetectorRef,
    private pdfGenerator: PDFGenerator,
    private productService: ProductDataService,
    private platform: Platform
  ) { }

  ngOnInit() {
    console.log("this.agentId", this.agentId);
    if (this.platform.is('android') || this.platform.is('ios')) {
      console.log("Android")
      PRINT.IS_MOBILE = true
    } else {
      PRINT.IS_MOBILE = false
    }
    this.isMobile = PRINT.IS_MOBILE
    if (this.resourcesId)
      this.qrLocation = location.origin + "/qr-source-link?resourceId=" + this.resourcesId + "&productId=" + this.productService.createingProd.id
    
      console.log("EMAIL_TEST",this.emailInfo);
      
  }

  ngOnDestroy() { }

  printPDf() {

    window.scrollTo(0, 0)
    setTimeout(() => {
      window.print();
      // this.downloadFile();
      // this.downloadAsPDF()
      // this.downloadAsPDFWithCanvas()
    }, 1000)
    // const printContent = document.getElementById("componentID").cloneNode(true);;
    // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    // WindowPrt.document.body.append(printContent);
    // WindowPrt.document.close();
    // WindowPrt.focus();
    // WindowPrt.print();
    // WindowPrt.close();
  }


  public async downloadAsPDF() {
    const printContent = document.getElementById("pdfTable")
    var html = htmlToPdfmake(printContent.innerHTML);
    const documentDefinition = {
      content: html,
      margin: [0.5, 0.5, 0.5, 0.5],
    };
    console.log(html);

    // pdfMake.createPdf(documentDefinition).getBase64((res) => {
    //   console.log(res);

    // })
    pdfMake.createPdf(documentDefinition).download()
  }

  public async downloadAsPDFWithCanvas() {
    const printContent = document.getElementById("componentID")
    html2canvas(printContent).then(canvas => {
      let docWidth = 208;
      let docHeight = canvas.height * docWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let doc = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
      doc.save('exportedPdf.pdf');
    });

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

