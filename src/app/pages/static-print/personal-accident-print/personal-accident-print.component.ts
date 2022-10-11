import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from 'src/app/core/global-fun.service';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';
import { environment } from '../../../../environments/environment';
import { PaPrintService } from '../../products/services/pa.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { TravelRiskService } from '../../static-pages/travel-page/models&services/travel-risk.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Platform } from '@ionic/angular';
import { AttachmentDownloadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { PRINT } from '../static-print-const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personal-accident-print',
  templateUrl: './personal-accident-print.component.html',
  styleUrls: ['./personal-accident-print.component.scss'],
})
export class PersonalAccidentPrintComponent implements OnInit {

  @Input() resourcesId?: string
  @Input() premiumAmt: any
  @Input() agentData?: any
  @Input() branch?: string
  product: any
  sumInsuredAmt: any
  listData: any[] = []
  policyInfo: any = {}
  policyHolder: any = {
    partyAddress: []
  }
  productDetail: any = {}
  beneficiaries: any[] = []
  lifeInsuredPolicy: any = {}
  totalPremium: number = 0
  totalSI: number = 0
  @Input() signId?: string
  fileId: string = ''
  signatureDate?: string
  isMobile: boolean = false
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader?id=`;
  unsubscribe: Subscription[] = []
  constructor(
    private policyHolderService: PolicyHolderService,
    private paService: PaPrintService,
    private productService: ProductDataService,
    private globalFun: GlobalFunctionService,
    private encryption: EncryptService,
    private platform: Platform,
    public  modal:NgbActiveModal,
    private attachmentDownloadService: AttachmentDownloadService
  ) { }

  ngOnInit() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      console.log("Android")
      PRINT.IS_MOBILE = true
    } else {
      PRINT.IS_MOBILE = false
    }
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
    // if(this.signId){
    //   this.fileId=this.encryption.encryptData(this.signId)
    // }
    this.signatureDate = this.productService.editData ? this.productService.editData.signatureDate : ""
    this.getPolicyHolder()
    this.getDetail()
    let unsub = this.globalFun.paCoverageResult.subscribe((value) => {
      // console.log("VALUE", value);

      this.sumInsuredAmt = value
    })
    this.unsubscribe.push(unsub)
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

  getDetail() {
    this.product = this.productService.createingProd || this.productService.selectedProd
    this.paService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res.productDetail)
        this.productDetail = res.productDetail
      if (res.beneficiaries)
        this.beneficiaries = res.beneficiaries
      if (res.lifeInsuredPolicy)
        this.lifeInsuredPolicy = res.lifeInsuredPolicy
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
    let policyInfoDetailData = [
      [
        { content: 'Policy Effective Date', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.formatDateDDMMYYY(this.productDetail.formdate), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Expiry Date', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.formatDateDDMMYYY(this.productDetail.todate), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Duration', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.productDetail.paPolicyTermValue, styles: { halign: 'center', valign: 'middle' } },
      ],
      [
        { content: 'Currency', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.productDetail.currency, colSpan: 5, styles: { halign: 'center', valign: 'middle' } },
      ]
    ]

    //Risk Information Details
    let riskInfoDetailHeader = [
      [
        { content: 'Name', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Occupation', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Gender', styles: { halign: 'center', valign: 'middle' } },
        { content: 'ID', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Date of Birth', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Father Name', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Phone Number', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    let riskInfoDetailData = [
      [
        { content: this.lifeInsuredPolicy.paNameOfInsured, styles: { halign: 'center', valign: 'middle' } },
        { content: this.lifeInsuredPolicy.occupationCd, styles: { halign: 'center', valign: 'middle' } },
        { content: this.lifeInsuredPolicy.genderCdValue, styles: { halign: 'center', valign: 'middle' } },
        { content: this.lifeInsuredPolicy.identityType + ' - ' + (this.lifeInsuredPolicy.identityNumber || this.lifeInsuredPolicy.identityNrc), styles: { halign: 'center', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.lifeInsuredPolicy.dateOfBirth), styles: { halign: 'center', valign: 'middle' } },
        { content: this.lifeInsuredPolicy.fatherName, styles: { halign: 'center', valign: 'middle' } },
        { content: this.lifeInsuredPolicy.phone, styles: { halign: 'center', valign: 'middle' } },
      ]
    ]

    //Beneficiaries Information Details
    let beneficiariesInfoDetailList = [];
    let beneficiariesInformationDetailHeader = [
      [
        { content: 'No.', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Name', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Relationship', styles: { halign: 'center', valign: 'middle' } },
        { content: 'ID', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Date of Birth', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Share %', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    for (var i = 0; i < this.beneficiaries.length; i++) {
      var beneficiary = this.beneficiaries[i];
      let beneficiariesInformationDetailData = [
        { content: i + 1, styles: { halign: 'center', valign: 'middle' } },
        { content: beneficiary.beneficiaryName, styles: { halign: 'center', valign: 'middle' } },
        { content: beneficiary.relationshipValue, styles: { halign: 'center', valign: 'middle' } },
        { content: beneficiary.idType + ' - ' + (beneficiary.idNumber || beneficiary.nrc), styles: { halign: 'center', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(beneficiary.dateOfBirth), styles: { halign: 'center', valign: 'middle' } },
        { content: beneficiary.share + ' %', styles: { halign: 'center', valign: 'middle' } },
      ]
      beneficiariesInfoDetailList.push(beneficiariesInformationDetailData);
    }

    // Insurance Information Details
    let insuranceInfoDetailData = [
      [
        { content: "Total SI", styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.productDetail.sumInsured, styles: { halign: 'center', valign: 'middle' } },
        { content: "Approximate Total Premium", styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.premiumAmt, styles: { halign: 'center', valign: 'middle' } },
      ]
    ];

    // Start creating jsPDF
    var doc: any = new jsPDF('p', 'pt', 'a4');
    let pageSize = doc.internal.pageSize;
    let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    let width = pageSize.width ? pageSize.width : pageSize.getWidth();
    let height = 0;

    var img = new Image()
    img.src = './assets/images/header-kbzms.png'
    doc.addImage(img, 'PNG', 200, height, 180, 80);

    //Agent Information Details
    let title = this.product.name + ' Insurance Quotation'
    doc.setFontSize(12).setFont('helvetica', 'normal', 'normal');
    doc.text(title, width / 2, height + 100, { align: 'center' });
    doc.autoTable({
      body: agentInfoDetailData,
      theme: 'grid',
      startY: height + 110,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 6,
        font: 'helvetica',
        cellPadding: 5,
        minCellHeight: 5,
        lineColor: '#fff',
        cellWidth: 'auto',
      },
    });
    height = doc.lastAutoTable.finalY;

    // Policy Holder Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F');
    doc.text('Policy Holder Information Details', width / 2, height + 23, { align: 'center' });
    doc.autoTable({
      body: policyHolderInfoDetailData,
      theme: 'grid',
      startY: height + 30,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 6,
        font: 'helvetica',
        cellPadding: 5,
        minCellHeight: 5,
        lineColor: '#fff',
        cellWidth: 'auto',
      },
    });
    height = doc.lastAutoTable.finalY;

    // Policy Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F');
    doc.text("Policy Information Details", width / 2, height + 23, { align: 'center' });
    doc.autoTable({
      body: policyInfoDetailData,
      theme: 'grid',
      startY: height + 35,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 6,
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

    // Risk Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F');
    doc.text("Risk Information Details", width / 2, height + 23, { align: 'center' });
    doc.autoTable({
      head: riskInfoDetailHeader,
      body: riskInfoDetailData,
      theme: 'grid',
      startY: height + 35,
      margin: { left: 10, right: 10 },
      styles: {
        fontSize: 6,
        font: 'helvetica',
        lineColor: '#005f99',
        lineWidth: 0.5,
        cellWidth: 'auto',
        cellPadding: 5,
      },
      headStyles: {
        fillColor: '#e9f8fe',
        textColor: '#000',
        fontStyle: 'normal',
      },
    });
    height = doc.lastAutoTable.finalY;

    // Beneficiaries Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F');
    doc.text("Beneficiaries Information Details", width / 2, height + 23, { align: 'center' });
    doc.autoTable({
      head: beneficiariesInformationDetailHeader,
      body: beneficiariesInfoDetailList,
      theme: 'grid',
      startY: height + 35,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 6,
        font: 'helvetica',
        lineColor: '#005f99',
        lineWidth: 0.5,
        cellWidth: 'auto',
        cellPadding: 5,
      },
      headStyles: {
        fillColor: '#e9f8fe',
        textColor: '#000',
        fontStyle: 'normal',
      },
    });
    height = doc.lastAutoTable.finalY;

    // Insurance Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F');
    doc.text("Insurance Information Details", width / 2, height + 23, { align: 'center' });
    doc.autoTable({
      body: insuranceInfoDetailData,
      theme: 'grid',
      startY: height + 35,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 6,
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

    //new page
    if (this.beneficiaries.length > 3) {
      doc.addPage();
      height = 0;
    }

    // Declaration By Proposer
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("Declaration By Proposer", 10, height + 20);
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("I hereby declare that I am in good health and free from any physical injuries the day which I am submitting the proposal. I certify that the above-mentioned statements are true and correct to the best of my knowledge. I am fully aware that these are basic principles of the agreement between KBZMS General Insurance Co., Ltd. and me. I also know that if any information, declarations and supplements are inaccurate, the agreement will be voided and the benefits will be forfeited.", 10, height + 30, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("Remarks: If beneficiary is under 18,the benefit shall be paid to his parents (or) lawful guardian. In case where the beneficiary dies before the insured, and the death of the insured occurred before the insured has not re-transferred the title of benefits, shall pay the death claim in the followings order:", 10, height + 55, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("1.The insured’s husband or wife", 10, height + 70, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("2.The insured’s son or daughter", 10, height + 80, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("3.The insured’s grandchildren", 10, height + 90, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("4.The insured’s siblings", 10, height + 100, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("5.The insured’s parents", 10, height + 110, { maxWidth: width - 20, align: 'justify' });

    // Proposer's name and signature
    doc.setFontSize(6).setFont('helvetica', 'normal', 'bold');
    doc.text("PROPOSER'S NAME AND SIGNATURE", width - 150, height + 120);
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("Date", 10, height + 130);
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text(this.policyHolder.title + " " + this.policyHolder.firstName + " " + this.policyHolder.middleName + " " + this.policyHolder.lastName, width - 150, height + 130);
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", 10, height + 200);
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", width - 150, height + 200);
    doc.setFontSize(6).setFont('helvetica', 'normal', 'normal');
    doc.text(this.signatureDate ? this.formatDateDDMMYYY(this.signatureDate) : '', 10, height + 190);
    // if (this.fileId) {
    //   var img = new Image()
    //   img.src = this.DEFAULT_DOWNLOAD_URL + '?id=' + this.fileId
    //   doc.addImage(img, 'PNG', width - 150, height + 190, 140, 80);
    // }

    // Add Footer Image
    var pageCount = doc.internal.getNumberOfPages(); //Total Page Number
    for (i = 0; i < pageCount; i++) {
      doc.setPage(i);
      var img = new Image()
      img.src = './assets/images/footer-kbzms.png'
      doc.addImage(img, 'PNG', 0, pageHeight - 60, width, 60);
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
