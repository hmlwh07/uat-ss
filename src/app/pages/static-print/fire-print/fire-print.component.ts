import { Component, Input, OnInit } from '@angular/core';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';
import { environment } from '../../../../environments/environment';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { FireProductService } from '../../static-pages/fire-simple-page/models&services/fire-product.service';
import { FireRiskAddressService } from '../../static-pages/fire-simple-page/models&services/fire-risk-address';
import { AttachmentDownloadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { Platform } from '@ionic/angular';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-fire-print',
  templateUrl: './fire-print.component.html',
  styleUrls: ['./fire-print.component.scss'],
})
export class FirePrintComponent implements OnInit {

  @Input() resourcesId?: string
  @Input() premiumAmt?: any
  @Input() agentData?: any
  @Input() branch?: string
  listData: any[] = []
  detail: any = {}
  policyHolder: any = {
    partyAddress: []
  }
  address: any = {}
  additionalcoverinfo: any = {}
  optionId: any
  product: any
  addOnData: any = []
  addon: any
  additionalData: any = []
  totalPremium: number = 0
  totalSi: number = 0
  totalbuildingSi: number = 0
  totalproposedFurniture: number = 0
  totalproposedMachinerySI: number = 0
  totalproposeStockValue: number = 0
  totalriskSi: number = 0
  policyUnit = {
    "F": "Months",
    "G": "Years",
    "D": "Days"
  }
  @Input() signId?: string
  fileId: string = ''
  signatureDate?: string
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader?id=`;

  constructor(
    private fireService: FireProductService,
    private productService: ProductDataService,
    private fireRsikService: FireRiskService,
    private policyHolderService: PolicyHolderService,
    private fireRiskAddressService: FireRiskAddressService,
    private addonQuo: AddOnQuoService,
    private productSerice: ProductDataService,
    private encryption: EncryptService,
    private platform: Platform,
    private attachmentDownloadService: AttachmentDownloadService
  ) { }

  ngOnInit() {
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
    if (this.signId) {
      this.fileId = this.encryption.encryptData(this.signId)
    }
    this.signatureDate = this.productService.editData ? this.productService.editData.signatureDate : ""
    this.getPolicyHolder()
    this.getDetail()
    this.getRiskDetail()
    this.getRiskAddress()
  }

  getDetail() {
    this.fireService.getOne(this.resourcesId).toPromise().then(res => {
      if (res)
        this.detail = res
      // console.log("Detail", this.detail);
    })
  }

  getRiskDetail() {
    this.totalPremium = 0;
    this.totalSi = 0;
    this.totalbuildingSi = 0;
    this.totalproposedFurniture = 0;
    this.totalproposedMachinerySI = 0;
    this.totalproposeStockValue = 0;
    this.totalriskSi = 0;
    this.fireRsikService.getMany(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.listData = res
        // console.log("riskDetail", this.listData);
        for (let data of this.listData) {
          this.totalPremium += Number(data.premium)
          this.totalSi += Number(data.riskSi)
          this.totalbuildingSi += data.buildingSi || 0
          this.totalproposedFurniture += data.proposedFurniture || 0
          this.totalproposedMachinerySI += data.proposedMachinerySI || 0
          this.totalproposeStockValue += data.proposeStockValue || 0
          this.totalriskSi += data.riskSi || 0
        }
        this.getAddonCover()
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

  getRiskAddress() {
    this.fireRiskAddressService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.address = res
        // console.log("address", this.address);
      }
    })
  }

  async getAddonCover() {
    this.product = this.productSerice.createingProd || this.productSerice.selectedProd
    // console.log(this.product, this.listData);
    for (let riskID of this.listData) {
      let obj = {
        description: riskID.buildingDescription,
        premium: 0,
        firepremium: this.totalPremium
      }
      for (const item of this.product.addOns) {
        this.optionId = riskID.id

        try {
          if (this.resourcesId) {
            this.additionalData = await this.addonQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise()
            // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
            if (this.additionalData) {
              obj[item.code] = this.additionalData.premium || 0
              obj.premium += Number(this.additionalData.premium)
            } else {
              obj[item.code] = 0
            }
            // })
          }
        } catch (error) {
        }
      }
      this.addOnData.push(obj)
    }
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
        { content: this.formatDateDDMMYYY(this.detail.startDate), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Expiry Date', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.formatDateDDMMYYY(this.detail.endDate), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Duration', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.detail.policyDuration + " - " + this.policyUnit[this.detail.policyUnit], styles: { halign: 'center', valign: 'middle' } },
      ],
      [
        { content: 'Policy Type', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.detail.policyType == "T-NM" ? "Normal" : "Declaration", colSpan: 2, styles: { halign: 'center', valign: 'middle' } },
        { content: 'Currency', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.detail.currency, colSpan: 2, styles: { halign: 'center', valign: 'middle' } },
      ],
    ]

    // Risk Information Details
    let riskInfoDetailData = [];
    let riskInfoDetailList = [];
    let riskInfoDetailHeader = [
      [
        { content: 'Building Description', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Type of Building', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Occupation of Building', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Building Class', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Total Square Feet', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Build Year', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Proposed Building SI', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Proposed Furniture', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Proposed Machinery SI', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Proposed Stock SI', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Total SI', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    for (var i = 0; i < this.listData.length; i++) {
      let riskData = this.listData[i];
      riskInfoDetailData = [
        { content: riskData.buildingDescription, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.typeOfBuildingValue, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.occupationOfBuildingValue, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.buildingClassValue, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.totalSquareFoot, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.yearOfConstruction, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.buildingSi, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.proposedFurniture, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.proposedMachinerySI, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.proposeStockValue, styles: { halign: 'center', valign: 'middle' } },
        { content: riskData.riskSi, styles: { halign: 'center', valign: 'middle' } },
      ]
      riskInfoDetailList.push(riskInfoDetailData);
    }
    riskInfoDetailData = [
      { content: 'Total SI', colSpan: 6, styles: { halign: 'center', valign: 'middle' } },
      { content: this.totalbuildingSi, styles: { halign: 'center', valign: 'middle' } },
      { content: this.totalproposedFurniture, styles: { halign: 'center', valign: 'middle' } },
      { content: this.totalproposedMachinerySI, styles: { halign: 'center', valign: 'middle' } },
      { content: this.totalproposeStockValue, styles: { halign: 'center', valign: 'middle' } },
      { content: this.totalriskSi, styles: { halign: 'center', valign: 'middle' } },
    ]
    riskInfoDetailList.push(riskInfoDetailData);

    // Insurance Information Details
    let insuranceInfoDetailData = [
      [
        { content: "Approximate Total SI", styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.totalSi, styles: { halign: 'center', valign: 'middle' } },
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
    doc.addImage(img, 'PNG', 180, height, 240, 120);

    //Agent Information Details
    let title = this.product.name + ' Insurance Quotation'
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal');
    doc.text(title, width / 2, height + 140, { align: 'center' });
    doc.autoTable({
      body: agentInfoDetailData,
      theme: 'grid',
      startY: height + 160,
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
    doc.text('Policy Holder Information Details', width / 2, height + 40, { align: 'center' });
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
    doc.text("Policy Information Details", width / 2, height + 40, { align: 'center' });
    doc.autoTable({
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

    // Risk Information Details
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    doc.text("Risk Information Details", width / 2, height + 40, { align: 'center' });
    doc.autoTable({
      head: riskInfoDetailHeader,
      body: riskInfoDetailList,
      theme: 'grid',
      startY: height + 60,
      margin: { left: 10, right: 10 },
      styles: {
        fontSize: 10,
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

    // Insurance Information Details
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    doc.text("Insurance Information Details", width / 2, height + 40, { align: 'center' });
    doc.autoTable({
      body: insuranceInfoDetailData,
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
    height = doc.lastAutoTable.finalY + 20;

    // Declaration By Proposer
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal');
    doc.text("Declaration By Proposer", 10, height + 20);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("I hereby declare that the statements made by me in this Proposal are true to the best of my knowledge and belief and I hereby agree that this declaration shall from the basic of the contract between me and KBZMS General Insurance Co.,Ltd. in the event of the Proposal being accepted.", 10, height + 40, { maxWidth: width - 20, align: 'justify' });

    // Proposer's name and signature
    doc.setFontSize(10).setFont('helvetica', 'normal', 'bold');
    doc.text("PROPOSER'S NAME AND SIGNATURE", width - 200, height + 80);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("Date", 10, height + 100);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text(this.policyHolder.title + " " + this.policyHolder.firstName + " " + this.policyHolder.middleName + " " + this.policyHolder.lastName, width - 200, height + 100);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", 10, height + 200);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", width - 200, height + 200);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text(this.signatureDate ? this.formatDateDDMMYYY(this.signatureDate) : '', 10, height + 180);
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
      img.src = './assets/images/footer-kbzms.png'
      doc.addImage(img, 'PNG', 0, pageHeight - 70, width, 70);
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
