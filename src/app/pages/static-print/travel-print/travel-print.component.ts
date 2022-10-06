import { DecimalPipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProductDataService } from '../../products/services/products-data.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { TravelRiskService } from '../../static-pages/travel-page/models&services/travel-risk.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
declare var require: any;
const htmlToPdfmake = require("html-to-pdfmake");
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
// import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';
import { AttachmentDownloadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-travel-print',
  templateUrl: './travel-print.component.html',
  styleUrls: ['./travel-print.component.scss'],
})
export class TravelPrintComponent implements OnInit {

  @Input() resourcesId?: string
  @Input() premiumAmt: any
  @Input() agentData?: any
  @Input() branch?: string
  product: any
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  tempArray: any[] = []
  listData: any[] = []
  policyInfo: any = {}
  riskInfo: any = []
  beneficiaries: any = []
  policyHolder: any = {
    partyAddress: []
  }
  totalPremium: number = 0
  totalSI: string = '0'
  numberOfTraveller: number = 0
  @Input() signId?: string
  signatureDate?: string
  travelArea: string = ''
  fileId: string = ''
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader?id=`;

  constructor(
    private policyHolderService: PolicyHolderService,
    private travelService: TravelRiskService,
    private productService: ProductDataService,
    private numberPipe: DecimalPipe,
    private encryption: EncryptService,
    private attachmentDownloadService: AttachmentDownloadService,
    private platform: Platform
  ) { }

  ngOnInit() {
    // console.log("Signature", this.productService.editData)
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
    if (this.signId) {
      this.fileId = this.encryption.encryptData(this.signId)
    }
    this.signatureDate = this.productService.editData ? this.productService.editData.signatureDate : ""
    this.getPolicyHolder()
    this.getTravelPrintData()
  }

  getPolicyHolder() {
    this.policyHolderService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.policyHolder = res
        this.getMasterValue(
          this.policyHolder.partyAddress[0].city,
          this.policyHolder.partyAddress[0].district,
          this.policyHolder.partyAddress[0].state,
          this.policyHolder.title
        ).toPromise().then((res: any) => {
          this.policyHolder = {
            ...this.policyHolder,
            townshipName: res['PT_TOWNSHIP'],
            districtName: res['PT_DISTRICT'],
            stateName: res['PT_STATE'],
            titleValue: res['TITLE'],
          }
        })
      }
    })
  }

  getMasterValue(townshipCd: string, districtCd: string, stateCd: string, titleCd: string) {
    let data = {
      "codeBookRequest": [
        {
          "codeId": "TA-" + townshipCd,
          "codeType": "PT_TOWNSHIP",
          "langCd": "EN"
        },
        {
          "codeId": "TA-" + districtCd,
          "codeType": "PT_DISTRICT",
          "langCd": "EN"
        },
        {
          "codeId": "TA-" + stateCd,
          "codeType": "PT_STATE",
          "langCd": "EN"
        },
        {
          "codeId": "T-" + titleCd,
          "codeType": "TITLE",
          "langCd": "EN"
        },
      ]
    }
    return this.policyHolderService.getMasterDataSale(data)
  }

  getTravelPrintData() {
    this.product = this.productService.createingProd || this.productService.selectedProd
    this.travelService.getData(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        console.log(res);

        this.policyInfo = res.policyInfo.travelBasic
        this.numberOfTraveller = res.policyInfo.numberOfTraveller
        this.riskInfo = res.riskDetails
        let totalUnit = 0

        for (let data of res.riskDetails) {
          totalUnit += parseInt(data.travelRisk.totalUnit)
          if (data.travelBeneficiaries.length > 0) {
            this.tempArray.push(data.travelBeneficiaries)
            console.log(this.tempArray);

          }
        }
        for (let data of this.tempArray) {
          if (data.length > 0) {
            for (let bene of data) {
              this.beneficiaries.push(bene)
            }
          } else {
            this.beneficiaries.push(data)
          }
        }
        // this.beneficiaries = this.tempArray || []
        let SI = totalUnit * 500000
        this.totalSI = this.numberPipe.transform(SI || 0, '1.2-2')
      }
    })
  }
  createPdf() {

    //Agent Information Details
    let agentInfoDetailData = [
      [
        { content: 'Branch', styles: { halign: 'left', valign: 'middle' } },
        { content: this.branch, styles: { halign: 'left', valign: 'middle' } },
        { content: 'Sale Channel', styles: { halign: 'left', valign: 'middle' } },
        { content: this.agentData.sourceOfBusiness ? this.agentData.sourceOfBusiness : '', styles: { halign: 'left', valign: 'middle' } },
      ],
      [
        { content: 'Agent Name/ ID', styles: { halign: 'left', valign: 'middle' } },
        { content: this.agentData.employeeName + '/' + this.agentData.agentCode, styles: { halign: 'left', valign: 'middle' } },
        { content: 'Date', styles: { halign: 'left', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(new Date()), styles: { halign: 'left', valign: 'middle' } },
      ],
      [
        { content: 'Agent Phone No.', styles: { halign: 'left', valign: 'middle' } },
        { content: this.agentData.mobileNo, styles: { halign: 'left', valign: 'middle' } },
        { content: 'Quotation No.', styles: { halign: 'left', valign: 'middle' } },
        { content: this.resourcesId, styles: { halign: 'left', valign: 'middle' } },
      ]
    ]

    //Policy Holder Information Details
    let policyHolderInfoDetailData = [
      [
        { content: 'Name', styles: { halign: 'left', valign: 'middle' } },
        { content: this.policyHolder.title + " " + this.policyHolder.firstName + " " + this.policyHolder.middleName + " " + this.policyHolder.lastName, styles: { halign: 'left', valign: 'middle' } },
      ],
      [
        { content: 'ID', styles: { halign: 'left', valign: 'middle' } },
        { content: this.policyHolder.cprNumber, styles: { halign: 'left', valign: 'middle' } },
      ],
      [
        { content: 'Date of Birth', styles: { halign: 'left', valign: 'middle' } },
        { content: this.policyHolder.dateOfBirth, styles: { halign: 'left', valign: 'middle' } },
      ],
      [
        { content: 'Mobile', styles: { halign: 'left', valign: 'middle' } },
        { content: this.policyHolder.partyAddress[0].mobileNo, styles: { halign: 'left', valign: 'middle' } },
      ],
      [
        { content: 'Email', styles: { halign: 'left', valign: 'middle' } },
        { content: this.policyHolder.partyAddress[0].eMailId, styles: { halign: 'left', valign: 'middle' } },
      ],
      [
        { content: 'Address', styles: { halign: 'left', valign: 'middle' } },
        {
          content: this.policyHolder.partyAddress[0].address1 + ", " + this.policyHolder.partyAddress[0].address2 + ", " + this.policyHolder.partyAddress[0].address3 + ", " +
            this.policyHolder.townshipName + ", " + this.policyHolder.districtName + ", " + this.policyHolder.stateName, styles: { halign: 'left', valign: 'middle' }
        },
      ]
    ]

    //Policy Information Details
    // let policyInfoDetailHeader = [
    //   [
    //     { content: 'Policy Effective Date', styles: { halign: 'center', valign: 'middle' } },
    //     { content: 'Policy Expiry Date', styles: { halign: 'center', valign: 'middle' } },
    //     { content: 'Policy Duration', styles: { halign: 'center', valign: 'middle' } },
    //     { content: 'Currency', styles: { halign: 'center', valign: 'middle' } },
    //   ]
    // ]
    let policyInfoDetailData = [
      [
        { content: 'Policy Effective Date', styles: { halign: 'left', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.formdate), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Expiry Date', styles: { halign: 'middle', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.todate), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Duration', styles: { halign: 'center', valign: 'middle' } },
        { content: this.policyInfo.paPolicyTermValue, styles: { halign: 'center', valign: 'middle' } },
      ],
      [
        { content: 'Travel Plan', styles: { halign: 'left', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.formdate), colSpan: 2, styles: { halign: 'center', valign: 'middle' } },
        { content: 'Currency', styles: { halign: 'middle', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.todate), colSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      ],
      [
        { content: 'No of Traveler', styles: { halign: 'middle', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.todate), colSpan: 5, styles: { halign: 'center', valign: 'middle' } },
      ],
      [
        { content: 'Vehicle Information', styles: { halign: 'middle', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.todate), colSpan: 5, styles: { halign: 'center', valign: 'middle' } },
      ],
      [
        { content: 'Travel Area', styles: { halign: 'middle', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.todate), colSpan: 5, styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    // Start creating jsPDF
    var doc: any = new jsPDF('p', 'pt', 'a4');
    let pageSize = doc.internal.pageSize;
    let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    let width = pageSize.width ? pageSize.width : pageSize.getWidth();
    let height = 0;

    // var img = new Image()
    // img.src = './assets/images/header-logo.png'
    // doc.addImage(img, 'PNG', 0, height, width, 100);

    //Agent Information Details
    let title = this.product.name + ' Insurance Quotation'
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal');
    doc.text(title, 200, height + 40);
    doc.autoTable({
      body: agentInfoDetailData,
      theme: 'grid',
      startY: height + 60,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 10,
        font: 'helvetica',
        cellPadding: 5,
        minCellHeight: 5,
        lineColor: '#fff',
        cellWidth: 'auto',
      },
    });
    height = doc.lastAutoTable.finalY;

    // Policy Holder Information Details
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    doc.text('Policy Holder Information Details', 200, height + 40);
    doc.autoTable({
      body: policyHolderInfoDetailData,
      theme: 'grid',
      startY: height + 60,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 10,
        font: 'helvetica',
        cellPadding: 5,
        minCellHeight: 5,
        lineColor: '#fff',
        cellWidth: 'auto',
      },
    });
    height = doc.lastAutoTable.finalY;

    //Policy Information Details
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    doc.text("Policy Information Details", 200, height + 40);
    doc.autoTable({
      // head: policyInfoDetailHeader,
      body: policyInfoDetailData,
      theme: 'grid',
      startY: height + 60,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 10,
        font: 'helvetica',
        cellPadding: 5,
        lineColor: '#005f99',
        lineWidth: 0.5,
        cellWidth: 'auto'
      },
      headStyles: {
        fillColor: '#e9f8fe',
        textColor: '#000',
        fontStyle: 'normal',
      }
    });
    height = doc.lastAutoTable.finalY;

    //Risk Information Details
    // doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    // doc.text("Risk Information Details", 200, height + 40);
    // doc.autoTable({
    //   head: riskInfoDetailHeader,
    //   body: riskInfoDetailData,
    //   theme: 'grid',
    //   startY: height + 60,
    //   margin: { left: 10, right: 10 },
    //   styles: {
    //     fontSize: 10,
    //     font: 'helvetica',
    //     lineColor: '#005f99',
    //     lineWidth: 0.5,
    //     cellWidth: 'auto',
    //     cellPadding: 5,
    //   },
    //   headStyles: {
    //     fillColor: '#e9f8fe',
    //     textColor: '#000',
    //     fontStyle: 'normal',
    //   },
    // });
    // height = doc.lastAutoTable.finalY;

    // //Beneficiaries Information Details
    // doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    // doc.text("Beneficiaries Information Details", 200, height + 40);
    // doc.autoTable({
    //   head: beneficiariesInformationDetailHeader,
    //   body: beneficiariesInfoDetailList,
    //   theme: 'grid',
    //   startY: height + 60,
    //   margin: { left: 10, right: 10 },
    //   showHead: 'firstPage',
    //   styles: {
    //     fontSize: 10,
    //     font: 'helvetica',
    //     lineColor: '#005f99',
    //     lineWidth: 0.5,
    //     cellWidth: 'auto',
    //     cellPadding: 5,
    //   },
    //   headStyles: {
    //     fillColor: '#e9f8fe',
    //     textColor: '#000',
    //     fontStyle: 'normal',
    //   },
    // });
    // height = doc.lastAutoTable.finalY;

    //new page
    doc.addPage();
    height = 0;

    // Insurance Information Details
    // doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    // doc.text("Insurance Information Details", 200, height + 40);
    // doc.autoTable({
    //   body: insuranceInfoDetailData,
    //   theme: 'grid',
    //   startY: height + 60,
    //   margin: { left: 10, right: 10 },
    //   showHead: 'firstPage',
    //   styles: {
    //     fontSize: 10,
    //     font: 'helvetica',
    //     cellPadding: 5,
    //     lineColor: '#005f99',
    //     lineWidth: 0.5,
    //     cellWidth: 'auto'
    //   },
    //   headStyles: {
    //     fillColor: '#e9f8fe',
    //     textColor: '#000',
    //     fontStyle: 'normal',
    //   }
    // });
    // height = doc.lastAutoTable.finalY + 20;


    // Declaration By Proposer
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal');
    doc.text("Declaration By Proposer", 10, height + 20);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("I hereby declare that I am in good health and free from any physical injuries the day which I am submitting the proposal. I certify that the above-mentioned statements are true and correct to the best of my knowledge. I am fully aware that these are basic principles of the agreement between KBZMS General Insurance Co., Ltd. and me. I also know that if any information, declarations and supplements are inaccurate, the agreement will be voided and the benefits will be forfeited.", 10, height + 40, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("Remarks: If beneficiary is under 18,the benefit shall be paid to his parents (or) lawful guardian. In case where the beneficiary dies before the insured, and the death of the insured occurred before the insured has not re-transferred the title of benefits, shall pay the death claim in the followings order:", 10, height + 100, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("1.The insured’s husband or wife", 10, height + 140, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("2.The insured’s son or daughter", 10, height + 150, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("3.The insured’s grandchildren", 10, height + 160, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("4.The insured’s siblings", 10, height + 170, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("5.The insured’s parents", 10, height + 180, { maxWidth: width - 20, align: 'justify' });

    // Proposer's name and signature
    doc.setFontSize(10).setFont('helvetica', 'normal', 'bold');
    doc.text("PROPOSER'S NAME AND SIGNATURE", width - 200, height + 220);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("Date", 10, height + 220);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text(this.policyHolder.title + " " + this.policyHolder.firstName + " " + this.policyHolder.middleName + " " + this.policyHolder.lastName, width - 200, height + 240);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", 10, height + 280);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", width - 200, height + 280);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text(this.formatDateDDMMYYY(this.signatureDate), 10, height + 260);
    // if (this.fileId) {
    //   var img = new Image()
    //   img.src = this.DEFAULT_DOWNLOAD_URL + '?id=' + this.fileId
    //   doc.addImage(img, 'PNG', width - 200, height + 190, 140, 80);
    // }

    // Add Footer Image
    var pageCount = doc.internal.getNumberOfPages(); //Total Page Number
    for (let i = 0; i < pageCount; i++) {
      doc.setPage(i);
      var img = new Image()
      img.src = './assets/images/kbz_footer_bg_white.png'
      doc.addImage(img, 'PNG', 0, pageHeight - 50, width, 50);
    }

    if (this.platform.is('android') || this.platform.is('ios')) {
      console.log("Android")
      var blobPDF = new Blob([doc.output()], { type: 'application/pdf' });
      this.attachmentDownloadService.mobileDownload('downloadMobile.pdf', blobPDF);
    } else {
      console.log("Web")
      // Open PDF document in new tab
      doc.output('dataurlnewwindow', { filename: 'downloadWeb.pdf' })

      // Download PDF document  
      // doc.save('downloadWeb.pdf');

      // Base64 output
      // let data = doc.output('datauri')
      // console.log("Base64 Data: ", data)
    }
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

  currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }
}

