import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { environment } from '../../../../environments/environment';
import { ProductDataService } from '../../products/services/products-data.service';
import { Product } from '../../products/models/product.dto';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { HealthPaymentService } from '../../static-pages/health-quo/models&services/health-payment.service';
import { HealthPrintService } from '../../products/services/health-print.service';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';
import { AttachmentDownloadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { Platform } from '@ionic/angular';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { PRINT } from '../static-print-const';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-health-ci-print',
  templateUrl: './health-ci-print.component.html',
  styleUrls: ['./health-ci-print.component.scss'],
})
export class HealthCiPrintComponent implements OnInit {
  @Input() resourcesId?: string;
  @Input() signId?: string
  @Input() premiumAmt: any
  @Input() product: Product
  @Input() agentData?: any
  @Input() branch?: string
  signatureDate?: string
  coverage = {
    sumInsured: false,
    unit: false,
    premium: false,
  }
  coverageData: any = {}
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader?id=`;

  policyHolder: any = {};
  policyInfo: any = {};
  fileId: string = ''
  riskDetails: any = [];
  beneficiaries: any = [];
  coverages: any = [];
  AddonData: any = []
  paymentSchedule: any = []
  tempPaymentSchedule: any = []
  refID: any;
  tempResourcesId: any;
  totalP: number = 0
  totalL: number = 0
  coveragesTotalValue: number = 0
  isMobile: boolean = false
  constructor(
    private policyHolderService: PolicyHolderService,
    private coverageQuo: CoverageQuoService,
    private addOnQuoService: AddOnQuoService,
    private prodService: ProductDataService,
    private coverageQuoService: CoverageQuoService,
    private healthPayService: HealthPaymentService,
    private cdf: ChangeDetectorRef,
    private productService: ProductDataService,
    private healthPrintService: HealthPrintService,
    private encryption: EncryptService,
    private platform: Platform,
    private attachmentDownloadService: AttachmentDownloadService,
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      console.log("Android")
      PRINT.IS_MOBILE = true
    } else {
      PRINT.IS_MOBILE = false
    }
    this.isMobile = PRINT.IS_MOBILE
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
    if (this.signId) {
      this.fileId = this.encryption.encryptData(this.signId)
    }
    this.signatureDate = this.productService.editData ? this.productService.editData.signatureDate : ""
    this.refID = this.prodService.referenceID
    this.tempResourcesId = this.resourcesId
    this.getPolicyHolder()
    this.getDetail()
    this.getCoverage()
    this.getAddon()
    this.getSchedule()
  }

  getDetail() {
    this.healthPrintService.getOne(this.resourcesId).toPromise().then((res: any) => {
      // console.log(res);
      if (res) {
        this.policyInfo = res.policyInfo
        this.riskDetails = res.riskDetails
        this.beneficiaries = res.beneficiaries
      }
    })
  }

  getAddon() {
    this.product.addOns.forEach(async (addon) => {
      // console.log('ADDON', addon);
      let response: any = {};
      try {
        response = await this.addOnQuoService.getOne(addon.id, this.tempResourcesId, this.tempResourcesId).toPromise()
        if (response) {
          // if(addon.description=='HEALTH'){
          //   addon.description='Health Insurance'
          // }else{
          //   addon.description='Critical Illness Insurance'
          // }
          this.AddonData.push({ keyName: addon.description, value: response.sumInsured })
          this.coveragesTotalValue += Number(response.sumInsured)
        }
      } catch (error) {
      }
    })
  }

  getCoverage() {
    this.product.coverages.forEach(async (coverage) => {
      // console.log('coverage', coverage);
      let response: any = {};
      try {
        response = await this.coverageQuo.getOne(coverage.id, this.tempResourcesId, this.tempResourcesId).toPromise()
        if (response) {
          // if(coverage.description=='HEALTH'){
          //   coverage.description='Health Insurance'
          // }else{
          //   coverage.description='Critical Illness Insurance'
          // }
          this.AddonData.unshift({ keyName: coverage.description, value: response.sumInsured })
          this.coveragesTotalValue += Number(response.sumInsured)
        }
      } catch (error) {
      }
    })
  }

  getSchedule() {
    this.healthPayService.getMany(this.tempResourcesId).toPromise().then((res: any) => {
      if (res) {
        if (res.length > 0) {
          this.totalP = 0
          this.totalL = 0
          res.map(x => {
            this.totalP += x.premium
            this.totalL += x.levy
          })
          this.paymentSchedule = res
          if (res[0].paymentTerm == "L") {
            this.tempPaymentSchedule = [
              { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
            ]
          } else {
            let tempTotal = this.totalP / 2
            this.tempPaymentSchedule = [
              { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
              { premium: tempTotal, levy: 0, total: tempTotal },
            ]
          }
          this.cdf.detectChanges()
        }
      }
    })
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

  createPdf() {

    // Agent Information Details
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

    // Policy Holder Information Details
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

    // Policy Information Details
    let policyInfoDetailData = [
      [
        { content: 'Policy Effective Date', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.insuranceStartDate), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Expiry Date', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.formatDateDDMMYYY(this.policyInfo.insuranceEndDate), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Duration', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.policyInfo.sumInsuredMainCover + 'Units', styles: { halign: 'center', valign: 'middle' } },
      ],
      [
        { content: 'Policy Plan', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.policyInfo.basicCoverId == 'HEALTH' ? 'Health Insurance' : 'Critical Illness Insurance', colSpan: 2, styles: { halign: 'center', valign: 'middle' } },
        { content: 'Payment Frequency', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.policyInfo.paymentFrequency == 'S' ? 'Semi-Annually' : 'Lump Sum', colSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      ]
    ]

    // Risk Information Details
    let riskInfoDetailList = [];
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
    for (var i = 0; i < this.riskDetails.length; i++) {
      let riskData = this.riskDetails[i];
      let riskInfoDetailData = [
        { content: riskData.firstName + " " + (riskData.middleName ? riskData.middleName : "") + " " + riskData.lastName, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.occupationCdValue || '', styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.genderCdValue, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.identityType + " - " + (riskData.identityNrc || riskData.identityNumber), styles: { halign: 'center', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(riskData.dateOfBirth), styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.fatherName || '', styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.phone, styles: { halign: 'center', valign: 'middle' } },
      ]
      riskInfoDetailList.push(riskInfoDetailData);
    }

    // Beneficiaries Information Details
    let beneficiariesInfoDetailList = [];
    let beneficiariesInfoDetailHeader = [
      [
        { content: 'No.', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Name', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Relationship', styles: { halign: 'center', valign: 'middle' } },
        { content: 'ID', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Date of Birth.', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Share %', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    for (var i = 0; i < this.beneficiaries.length; i++) {
      let beneData = this.beneficiaries[i];
      let beneficiariesInfoDetailData = [
        { content: i + 1, styles: { halign: 'center', valign: 'middle' } },
        { content: beneData.beneficiaryName, styles: { halign: 'center', valign: 'middle' } },
        { content: beneData.relationshipValue, styles: { halign: 'center', valign: 'middle' } },
        { content: beneData.idType + " - " + (beneData.nrc || beneData.idNumber), styles: { halign: 'center', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(beneData.dateOfBirth), styles: { halign: 'center', valign: 'middle' } },
        { content: beneData.share + "%", styles: { halign: 'center', valign: 'middle' } },
      ]
      beneficiariesInfoDetailList.push(beneficiariesInfoDetailData);
    }

    // Coverage Information Details
    let coverageInfoDetailData = []
    let coverageInfoDetailList = [];
    let coverageInfoDetailHeader = [
      [
        { content: 'No.', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Coverage Name', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Units', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    for (var i = 0; i < this.AddonData.length; i++) {
      let data = this.AddonData[i];
      coverageInfoDetailData = [
        { content: i + 1, styles: { halign: 'center', valign: 'middle' } },
        { content: data.keyName == 'Health Insurance' ? 'Death & Hospitalization' : data.keyName == 'Critical illness' ? 'Death & Critical Illness' : data.keyName, styles: { halign: 'center', valign: 'middle' } },
        { content: data.value + (data.value == '1' ? " Unit" : " Units"), styles: { halign: 'center', valign: 'middle' } },
      ]
      coverageInfoDetailList.push(coverageInfoDetailData);
    }
    coverageInfoDetailData = [
      { content: 'Total', colSpan: '2', styles: { halign: 'center', valign: 'middle' } },
      { content: this.coveragesTotalValue + (this.coveragesTotalValue == 1 ? " Unit" : " Units"), styles: { halign: 'center', valign: 'middle' } },
    ]
    coverageInfoDetailList.push(coverageInfoDetailData);

    // Payment Schedule Information Details
    let paymentScheduleInfoDetailData = []
    let paymentScheduleInfoDetailList = []
    let paymentScheduleInfoDetailHeader = [
      [
        { content: 'No. of Installment', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Installment Premium', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Stamp Duty', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Total Premium', styles: { halign: 'center', valign: 'middle' } },
      ]
    ];
    for (var i = 0; i < this.tempPaymentSchedule.length; i++) {
      let paymentData = this.tempPaymentSchedule[i];
      paymentScheduleInfoDetailData = [
        { content: i + 1, styles: { halign: 'center', valign: 'middle' } },
        { content: this.currencyFormat(paymentData.premium), styles: { halign: 'center', valign: 'middle' } },
        { content: this.currencyFormat(paymentData.levy), styles: { halign: 'center', valign: 'middle' } },
        { content: this.currencyFormat(paymentData.premium + paymentData.levy), styles: { halign: 'center', valign: 'middle' } },
      ];
      paymentScheduleInfoDetailList.push(paymentScheduleInfoDetailData);
    }
    paymentScheduleInfoDetailData = [
      { content: 'Annual Premium', styles: { halign: 'center', valign: 'middle' } },
      { content: this.currencyFormat(this.totalP), styles: { halign: 'center', valign: 'middle' } },
      { content: 'Total payable premium', styles: { halign: 'center', valign: 'middle' } },
      { content: this.currencyFormat(this.totalP + this.totalL), styles: { halign: 'center', valign: 'middle' } },
    ];
    paymentScheduleInfoDetailList.push(paymentScheduleInfoDetailData);

    // Start creating jsPDF
    var doc: any = new jsPDF('p', 'pt', 'a4');
    let pageSize = doc.internal.pageSize;
    let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    let width = pageSize.width ? pageSize.width : pageSize.getWidth();
    let height = 0;

    var img = new Image()
    img.src = './assets/images/header-kbzms.png'
    doc.addImage(img, 'PNG', 200, height, 180, 80);

    // Agent Information Details
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
        fontSize: 8,
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
        fontSize: 8,
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
        fontSize: 8,
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
      body: riskInfoDetailList,
      theme: 'grid',
      startY: height + 35,
      margin: { left: 10, right: 10 },
      styles: {
        fontSize: 8,
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
      head: beneficiariesInfoDetailHeader,
      body: beneficiariesInfoDetailList,
      theme: 'grid',
      startY: height + 35,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 8,
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

    // Coverage Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F');
    doc.text("Coverage Information Details", width / 2, height + 23, { align: 'center' });
    doc.autoTable({
      head: coverageInfoDetailHeader,
      body: coverageInfoDetailList,
      theme: 'grid',
      startY: height + 35,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 8,
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

    //new page
    doc.addPage();
    height = 0;

    // Payment Schedule Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F');
    doc.text("Payment Schedule Information Details", width / 2, height + 23, { align: 'center' });
    doc.autoTable({
      head: paymentScheduleInfoDetailHeader,
      body: paymentScheduleInfoDetailList,
      theme: 'grid',
      startY: height + 35,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 8,
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

    // Declaration By Proposer
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("Declaration By Proposer", 10, height + 20);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text("I hereby declare that I am in good health which I submitting the proposal.I certify that the above-mentioned statements are true and correct to the best of my knowledge. I am fully aware that these are basic principles of the agreement between KBZMS General Insurance Co., Ltd. and me. I also know that if any information, declarations and supplements are inaccurate, the agreement will be voided and the benefits will be forfeited.", 10, height + 40, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text("Remark: The benefits will be issued to beneficiary’s parents or guardians if he/she is under 18.", 10, height + 80, { maxWidth: width - 20, align: 'justify' });

    // Proposer's name and signature
    doc.setFontSize(8).setFont('helvetica', 'normal', 'bold');
    doc.text("PROPOSER'S NAME AND SIGNATURE", width - 180, height + 100);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text("Date", 10, height + 110);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text(this.policyHolder.titleValue + " " + this.policyHolder.firstName + " " + this.policyHolder.middleName + " " + this.policyHolder.lastName, width - 180, height + 110);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", 10, height + 180);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", width - 180, height + 180);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text(this.signatureDate ? this.formatDateDDMMYYY(this.signatureDate) : '', 10, height + 170);
    // if (this.fileId) {
    //   var img = new Image()
    //   img.src = this.DEFAULT_DOWNLOAD_URL + '?id=' + this.fileId
    //   doc.addImage(img, 'PNG', width - 180, height + 100, 140, 80);
    // }

    // Add Footer Image
    var pageCount = doc.internal.getNumberOfPages();//Total Page Number
    for (i = 0; i < pageCount; i++) {
      doc.setPage(i);
      var img = new Image()
      img.src = './assets/images/footer-kbzms.png'
      doc.addImage(img, 'PNG', 10, pageHeight - 70, width - 20, 60);

      var img1 = new Image()
      img1.src = './assets/images/watermark-kbzms.png'
      doc.addImage(img1, 'PNG', 100, 200, width - 200, pageHeight - 300);
    }

    if (this.platform.is('android') || this.platform.is('ios')) {
      console.log("Android")
      let blobFile = doc.output('blob')
      // var blobPDF = new Blob([doc.output()], { type: 'application/pdf' });
      this.attachmentDownloadService.mobileDownload(this.product.name + '(' + this.product.code + ')' + '.pdf', blobFile);
    } else {
      console.log("Web")
      // Open PDF document in new tab
      doc.output('dataurlnewwindow', { filename: this.product.name + '(' + this.product.code + ')' + '.pdf' })

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
