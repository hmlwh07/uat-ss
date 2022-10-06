import { Component, Input, OnInit } from '@angular/core';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';
import { environment } from '../../../../environments/environment';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { MotorPrintService } from '../../products/services/motor-print.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { Platform } from '@ionic/angular';
import { AttachmentDownloadService } from 'src/app/_metronic/core/services/attachment-data.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-moter-print',
  templateUrl: './moter-print.component.html',
  styleUrls: ['./moter-print.component.scss']
})
export class MoterPrintComponent implements OnInit {

  @Input() resourcesId?: string
  @Input() agentData?: any
  @Input() branch?: string
  @Input() premiumAmt?: any
  listData: any[] = []
  motorDetail: any = {}
  motorDriver: any = []
  policyHolder: any = {}
  address: any = {}
  isTonnage: boolean = false
  vehicleDetail: any = {}
  policyTerm = {
    "T-004": "3 Months",
    "T-003": "6 Months",
    "T-002": "9 Months",
    "T-001": "1 year",
  }
  mExcessTypeMO02 = {
    "T-NILEX": "+50,000.00",
    "TU-NILEX": "+25.00",
    "TU-STNDEX": "+100.00",
    "T-STNDEX": "+100,000.00",
    "T-EXD1": "-50,000.00",
    "T-EXD2": "-70,000.00",
    "T-EXD3": "-100,000.00"
  }
  mExcessTypeMO01 = {
    "T-NILEX": "+5,000.00",
    "TU-NILEX": "+25.00",
  }
  @Input() signId?: string
  fileId: string = ''
  signatureDate?: string
  product: any
  optionId: any
  addOnData: any = []
  addon: any
  additionalData: any = []
  coverageData: any = []
  coverage: any
  coverageData2: any = []

  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader`;

  constructor(
    private motorService: MotorPrintService,
    private productService: ProductDataService,
    private coverageService: CoverageQuoService,
    private addonQuo: AddOnQuoService,
    private policyHolderService: PolicyHolderService,
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
    this.getAddonCover()
    this.getCoverage()
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
    this.motorService.getOne(this.resourcesId).toPromise().then((res: any) => {
      let vehicle = ""
      let purpose = ""
      let currency = ""
      let excess = ""
      if (res.motorDetail) {
        vehicle = res.motorDetail.mTypeOfVehicle
        purpose = res.motorDetail.mPurposeOfUse
        excess = res.motorDetail.mExcessValue
        currency = res.motorDetail.mCurrency

        this.motorDetail = res.motorDetail
        if (res.motorDetail.mExcessDiscount == "" || res.motorDetail.mExcessDiscount == null) {
          this.motorDetail.mExcessDiscount = res.motorDetail.mExcess
        }
        if (excess == "T-NILEX" && currency == "MMK") {
          if (vehicle == 'T-MCC' && purpose == 'T-PRI') {
            this.mExcessTypeMO01['T-NILEX'] = "+ 5,000"
          } else if (vehicle == 'T-MCC' && purpose == 'T-COM') {
            this.mExcessTypeMO01['T-NILEX'] = "+ 10,000"
          } else {
            this.mExcessTypeMO01['T-NILEX'] = "+ 50,000"
          }
        } else if (excess == "TU-NILEX" && currency == "USD") {
          this.mExcessTypeMO01['TU-NILEX'] = "+ 25"
        }
      }
      // if (res.mTypeOfVehicle && res.mPurposeOfUse){
      //   if (res.motorDetail.mTypeOfVehicleValue == 'Motor Commercial' && res.motorDetail.mTypeOfCoverageValue == 'Commercial Car (Goods Carrying Vehicle)' && res.motorDetail.mCurrency == 'USD') {
      //    
      //     this.isTonnage = true
      //   }else{
      //     
      //   }
      // }
      // else{
      //   

      // }
      if (res.motorDriver)
        this.listData = res.motorDriver
      if (res.vehicleDetail)
        this.vehicleDetail = res.vehicleDetail
    })
  }

  async getAddonCover() {
    this.product = this.productService.createingProd || this.productService.selectedProd
    // console.log(this.product, this.listData);
    let obj = {
      description: 'MOTOR',
      premium: 0,
      num: 0
    }
    // console.log("this.product.addOns", this.product.addOns);
    for (const item of this.product.addOns) {
      this.optionId = this.resourcesId

      try {
        if (this.resourcesId) {
          this.additionalData = await this.addonQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise()
          // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
          //   console.log("response",response);
          // console.log("response", this.additionalData);

          if (this.additionalData) {
            obj[item.code] = this.additionalData.premium || 0
            obj.premium += Number(this.additionalData.premium || 0)
          } else {
            obj[item.code] = 0
          }
          // })
        }
      } catch (error) {
      }
      // console.log("ADDON", obj);
    }
    this.addOnData.push(obj)
    // console.log("ADDONDATA", this.addOnData);
  }
  async getCoverage() {
    this.product = this.productService.createingProd || this.productService.selectedProd
    // console.log(this.product, this.listData);

    let obj = {
      description: 'MOTOR',
      premium: 0
    }
    for (const item of this.product.coverages) {
      this.optionId = this.resourcesId

      try {
        if (this.resourcesId) {
          this.coverageData2 = await this.coverageService.getOne(item.id, this.resourcesId, this.optionId).toPromise()
          // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
          // console.log("response",response);
          // console.log("response", this.coverageData2);

          if (this.coverageData2) {
            obj[item.code] = this.coverageData2.premium || 0
            obj.premium += Number(this.coverageData2.premium || 0)
          } else {
            obj[item.code] = 0
          }
          // })
        }
      } catch (error) {
      }
      // console.log("ADDON", obj);
    }
    this.coverageData.push(obj)
    // console.log("coverageData", this.coverageData);
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
        { content: this.formatDateDDMMYYY(this.motorDetail.mPeriodOfInsuranceFrom), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Expiry Date', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.formatDateDDMMYYY(this.motorDetail.mPeriodOfInsuranceTo), styles: { halign: 'center', valign: 'middle' } },
        { content: 'Policy Duration', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.policyTerm[this.motorDetail.mPolicyTerm], styles: { halign: 'center', valign: 'middle' } },
      ],
      [
        { content: 'Currency', styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.motorDetail.mCurrency, colSpan: 5, styles: { halign: 'center', valign: 'middle' } },
      ]
    ]

    //Risk Information Details
    let riskInfoDetailHeader = [
      [
        { content: 'Vehicle No.', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Make/ Model', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Tonnage/ CC', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Year of Manufacture', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Type of Vehicle', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Type of Coverage', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Excess', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Windscreen SI', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Total SI', styles: { halign: 'center', valign: 'middle' } }
      ]
    ]
    let riskInfoDetailData = [
      [
        { content: this.vehicleDetail.mEngineNo, styles: { halign: 'center', valign: 'middle' } },
        { content: this.motorDetail.mModelValue, styles: { halign: 'center', valign: 'middle' } },
        { content: this.isTonnage ? this.motorDetail.mTonnage : this.motorDetail.mCapacity, styles: { halign: 'center', valign: 'middle' } },
        { content: this.vehicleDetail.mManufactureYearValue, styles: { halign: 'center', valign: 'middle' } },
        { content: this.motorDetail.mTypeOfVehicleValue, styles: { halign: 'center', valign: 'middle' } },
        { content: this.motorDetail.mTypeOfCoverageValue, styles: { halign: 'center', valign: 'middle' } },
        { content: this.motorDetail.mExcessValue, styles: { halign: 'center', valign: 'middle' } },
        { content: this.currencyFormat(Number(this.motorDetail.mWindscreenValue)), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(Number(this.motorDetail.mTotalRiskSi)), styles: { halign: 'right', valign: 'middle' } },
      ]
    ]

    //Driver Information Details
    let driverInfoDetailList = [];
    let driverInfoDetailHeader = [
      [
        { content: 'No.', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Driver', styles: { halign: 'center', valign: 'middle' } },
        { content: 'ID', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Date of Birth', styles: { halign: 'center', valign: 'middle' } },
        { content: 'License No.', styles: { halign: 'center', valign: 'middle' } },
        { content: 'His/Her Relationship to you', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    for (var i = 0; i < this.listData.length; i++) {
      let driverInfoDetailData = [
        { content: i + 1, styles: { halign: 'center', valign: 'middle' } },
        { content: this.listData[i].firstName + " " + this.listData[i].middleName + " " + this.listData[i].lastName, styles: { halign: 'center', valign: 'middle' } },
        { content: this.listData[i].identityType == 'NRC' ? this.listData[i].identityNrc : this.listData[i].identityNumber, styles: { halign: 'center', valign: 'middle' } },
        { content: this.formatDateDDMMYYY(this.listData[i].dateOfBirth), styles: { halign: 'center', valign: 'middle' } },
        { content: this.listData[i].licenseNo, styles: { halign: 'center', valign: 'middle' } },
        { content: this.listData[i].mRelationshipToPolicyholderValue, styles: { halign: 'center', valign: 'middle' } },
      ]
      driverInfoDetailList.push(driverInfoDetailData);
    }

    // Basic Cover Information Details
    let basicCoverInfoDetailList = [];
    let basicCoverInfoDetailHeader = [
      [
        { content: 'Own Damage', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Third Party', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Strikes Riots and Civil Commotion', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Wind Screen', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Total Premium of Basic Cover', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    for (var i = 0; i < this.coverageData.length; i++) {
      let basicCoverInfoDetailData = [
        { content: this.currencyFormat(Number(this.coverageData[i].OD)), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(Number(this.coverageData[i].TP)), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(Number(this.coverageData[i].SRCC)), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(Number(this.coverageData[i].WSC)), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(Number(this.coverageData[i].premium)), styles: { halign: 'right', valign: 'middle' } },
      ]
      basicCoverInfoDetailList.push(basicCoverInfoDetailData);
    }

    // Additional Cover Information Details (PLMO01)
    let additionalCoverInfoDetailData01;
    let additionalCoverInfoDetailHeader01 = [
      [
        { content: 'War Risk', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Act of God', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Theft', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Excess', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Total Premium of Additional Cover', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    if (this.addOnData[0]) {
      let data = this.addOnData[0]
      console.log("PLMO01 Data: ", data)
      additionalCoverInfoDetailData01 = [
        [
          { content: this.currencyFormat(Number(data.WR)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.AOG)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.THEFT)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.mExcessTypeMO01[this.motorDetail.mExcessDiscount] || 0, styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.premium)), styles: { halign: 'center', valign: 'middle' } },
        ]
      ];
    }

    // Additional Cover Information Details (PLMO02)
    let additionalCoverInfoDetailData02 = [];
    let additionalCoverInfoDetailHeader02 = [
      [
        { content: 'War Risk', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Act of God', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Theft', styles: { halign: 'center', valign: 'middle' } },
        { content: 'No Betterment Endorsement', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Cross Border', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Loss of Luggage', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Medical Expense', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Passenger Liability', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Paid Driver', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Excess', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Total Premium of Additional Cover', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    if (this.addOnData[0]) {
      let data = this.addOnData[0]
      console.log("PLMO02 Data: ", data)
      additionalCoverInfoDetailData02 = [
        [
          { content: this.currencyFormat(Number(data.WR)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.AOG)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.THEFT)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.NOBTTRMNT)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data['CROSSBRDR'])), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.LOSSOFLUGG)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data['MED EXP'])), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.PASSRLBTY)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.PAIDDRIVER)), styles: { halign: 'center', valign: 'middle' } },
          { content: this.mExcessTypeMO02[this.motorDetail.mExcessDiscount] || 0, styles: { halign: 'center', valign: 'middle' } },
          { content: this.currencyFormat(Number(data.premium)), styles: { halign: 'center', valign: 'middle' } },
        ]
      ];
    }

    // Insurance Information Details
    let insuranceInfoDetailData = [
      [
        { content: "Approximate Total SI", styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.motorDetail.mTotalRiskSi, styles: { halign: 'center', valign: 'middle' } },
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
    doc.addImage(img, 'PNG', 180, height, 200, 100);

    // Agent Information Details
    let title = this.product.name + ' Insurance Quotation'
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal');
    doc.text(title, width / 2, height + 120, { align: 'center' });
    doc.autoTable({
      body: agentInfoDetailData,
      theme: 'grid',
      startY: height + 140,
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

    // Policy Information Details
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
      body: riskInfoDetailData,
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

    if (this.product.code == 'PLMO01') {
      // Driver Information Details
      doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
      doc.text("Driver Information Details", width / 2, height + 40, { align: 'center' });
      doc.autoTable({
        head: driverInfoDetailHeader,
        body: driverInfoDetailList,
        theme: 'grid',
        startY: height + 60,
        margin: { left: 10, right: 10 },
        showHead: 'firstPage',
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
    }

    // Basic Cover Information Details
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    doc.text("Basic Cover Information Details", width / 2, height + 40, { align: 'center' });
    doc.autoTable({
      head: basicCoverInfoDetailHeader,
      body: basicCoverInfoDetailList,
      theme: 'grid',
      startY: height + 60,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
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

    // Additional Cover Information Details
    doc.setFontSize(16).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 20, width - 20, 30, 'F');
    doc.text("Additional Cover Information Details", width / 2, height + 40, { align: 'center' });
    doc.autoTable({
      head: this.product.code == 'PLMO01' ? additionalCoverInfoDetailHeader01 : additionalCoverInfoDetailHeader02,
      body: this.product.code == 'PLMO01' ? additionalCoverInfoDetailData01 : additionalCoverInfoDetailData02,
      theme: 'grid',
      startY: height + 60,
      margin: { left: 10, right: 10 },
      showHead: 'firstPage',
      styles: {
        fontSize: 9,
        font: 'helvetica',
        lineColor: '#005f99',
        lineWidth: 0.5,
        cellWidth: 'auto',
        cellPadding: 5,
      },
      headStyles: {
        fontSize: 10,
        fillColor: '#e9f8fe',
        textColor: '#000',
        fontStyle: 'normal',
      },
    });
    height = doc.lastAutoTable.finalY;

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
    doc.text("I/ We agree that this proposal and declaration shall be the basis of the contract between me/us and KBZMS General Insurance Co., Ltd. and shall be deemed to be incorporated in such contract. I/We undertake that the vehicle to be insured shall not be driven by any person who to my/our knowledge has been refused any motor vehicle insurance or continuance thereof.", 10, height + 40, { maxWidth: width - 20, align: 'justify' });
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("Important Notice: You are to disclose in this proposal form fully and faithfully all the facts which you know or ought to know, otherwise the policy issued hereunder may be void. No cover attaches until the premium has been paid. Payment of the premium must to KBZMS General Insurance Co., Ltd.", 10, height + 100, { maxWidth: width - 20, align: 'justify' });

    // Proposer's name and signature
    doc.setFontSize(10).setFont('helvetica', 'normal', 'bold');
    doc.text("PROPOSER'S NAME AND SIGNATURE", width - 200, height + 160);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text("Date", 10, height + 180);
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal');
    doc.text(this.policyHolder.title + " " + this.policyHolder.firstName + " " + this.policyHolder.middleName + " " + this.policyHolder.lastName, width - 200, height + 180);
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
    var pageCount = doc.internal.getNumberOfPages();//Total Page Number
    for (i = 0; i < pageCount; i++) {
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
