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
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';

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
  // @ViewChild('componentID')
  // componentID!: ElementRef;
  content: string;
  base64data: string;

  constructor(
    public modal: NgbActiveModal,
    private cdRef: ChangeDetectorRef,
    private pdfGenerator: PDFGenerator,
  ) { }

  ngOnInit() {

  }

  ngOnDestroy() { }

  printPDf() {

    window.scrollTo(0, 0)
    setTimeout(() => {
      window.print();
      // this.downloadAsPDF()
    }, 1000)
    // const printContent = document.getElementById("componentID").cloneNode(true);;
    // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    // WindowPrt.document.body.append(printContent);
    // WindowPrt.document.close();
    // WindowPrt.focus();
    // WindowPrt.print();
    // WindowPrt.close();
  }


  public downloadAsPDF() {
    const pdfTable = document.getElementById("componentID").innerHTML
    var html = htmlToPdfmake(pdfTable);
    console.log(html);
    
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

  }

  // public downloadAsPDF() {
  //   let div = this.pdfTable.nativeElement;

  //   var img:any;
  //   var filename;
  //   var newImage:any;


  //   domtoimage.toPng(div, { bgcolor: '#fff' })

  //     .then(function(dataUrl) {

  //       img = new Image();
  //       img.src = dataUrl;
  //       newImage = img.src;

  //       img.onload = function(){

  //       var pdfWidth = img.width;
  //       var pdfHeight = img.height;

  //         // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

  //         var doc;

  //         if(pdfWidth > pdfHeight)
  //         {
  //           doc = new jsPDF('l', 'px', [pdfWidth , pdfHeight]);
  //         }
  //         else
  //         {
  //           doc = new jsPDF('p', 'px', [pdfWidth , pdfHeight]);
  //         }


  //         var width = doc.internal.pageSize.getWidth();
  //         var height = doc.internal.pageSize.getHeight();


  //         doc.addImage(newImage, 'PNG',  10, 10, width, height);
  //         filename = 'mypdf_' + '.pdf';
  //         doc.save(filename);

  //       };


  //     })
  //     .catch(function(error) {

  //      // Error Handling

  //     });

  // }


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
      }).catch((error) => {
        console.log('error', error);
      });

  }

}

