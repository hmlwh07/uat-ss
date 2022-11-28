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
import { DecimalPipe } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PRINT } from '../static-print-const';
import { PolicyService } from '../../policy/policy.service';

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
  @Input() isPrint: any
  base64Proposal:any
  listData: any[] = []
  detail: any = {}
  policyHolder: any = {
    partyAddress: []
  }
  isExistData = false;
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
  isMobile: boolean = false
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader`
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
    private attachmentDownloadService: AttachmentDownloadService,
    private numberPipe: DecimalPipe,
    public modal: NgbActiveModal,
    private policyService:PolicyService
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

  async submitPolicy() {
    this.createPdf()
    let res = true
    this.policyService.submitPolicyWithProposal(this.resourcesId, this.branch, this.base64Proposal).toPromise().then((res) => {
      if (res) {
        this.modal.dismiss({ data: res })
      }
    })
  }


  createPdf() {

    // Agent Information Details
    let agentInfoDetailData = [
      [
        { content: 'Sale Channel', styles: { halign: 'left', valign: 'middle' } },
        { content: this.agentData.sourceOfBusiness ? this.agentData.sourceOfBusiness : '', styles: { halign: 'left', valign: 'middle' } },
        { content: 'Branch', styles: { halign: 'left', valign: 'middle' } },
        { content: this.branch, styles: { halign: 'left', valign: 'middle' } },
      ],
      [
        { content: 'Agent Name/ ID', styles: { halign: 'left', valign: 'middle' } },
        { content: this.agentData.employeeName + '/' + (this.agentData.agentCode || " "), styles: { halign: 'left', valign: 'middle' } },
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
        { content: this.policyHolder.titleValue + " " + this.policyHolder.firstName + " " + this.policyHolder.middleName + " " + this.policyHolder.lastName, styles: { halign: 'left', valign: 'middle' } },
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
        { content: this.currencyFormat(riskData.buildingSi || 0), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(riskData.proposedFurniture || 0), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(riskData.proposedMachinerySI || 0), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(riskData.proposeStockValue || 0), styles: { halign: 'right', valign: 'middle' } },
        { content: this.currencyFormat(riskData.riskSi || 0), styles: { halign: 'right', valign: 'middle' } },
      ]
      riskInfoDetailList.push(riskInfoDetailData);
    }
    riskInfoDetailData = [
      { content: 'Total SI', colSpan: 6, styles: { halign: 'center', valign: 'middle' } },
      { content: this.currencyFormat(this.totalbuildingSi || 0), styles: { halign: 'right', valign: 'middle' } },
      { content: this.currencyFormat(this.totalproposedFurniture || 0), styles: { halign: 'right', valign: 'middle' } },
      { content: this.currencyFormat(this.totalproposedMachinerySI || 0), styles: { halign: 'right', valign: 'middle' } },
      { content: this.currencyFormat(this.totalproposeStockValue || 0), styles: { halign: 'right', valign: 'middle' } },
      { content: this.currencyFormat(this.totalriskSi || 0), styles: { halign: 'right', valign: 'middle' } },
    ]
    riskInfoDetailList.push(riskInfoDetailData);

    // Cover Information Details
    let coverInfoDetailData = [];
    let coverInfoDetailList = [];
    let coverInfoDetailHeader = [
      [
        { content: 'Building Description', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Additional Cover Name', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Additional Cover Premium', styles: { halign: 'center', valign: 'middle' } },
      ]
    ]
    for (var i = 0; i < this.addOnData.length; i++) {
      let data = this.addOnData[i]
      let count = 0;
      let isFirstData = false;
      if (data) {
        if (data.STHTC != 0)
          count++
        if (data.IMPD != 0)
          count++
        if (data.RSMD != 0)
          count++
        if (data.BURGLARY != 0)
          count++
        if (data.ACD != 0)
          count++
        if (data.EQ != 0)
          count++
        if (data.SPONTCOMB != 0)
          count++
        if (data.SUBLSLD != 0)
          count++
        if (data.WARRISK != 0)
          count++
        if (data.EXPLOSION != 0)
          count++
        if (data.FLOOD != 0)
          count++
      }
      if (data) {
        // STHTC
        if (data.STHTC != 0) {
          this.isExistData = true
          coverInfoDetailData = [
            { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
            { content: 'STHTC', styles: { halign: 'center', valign: 'middle' } },
            { content: this.numberPipe.transform(data.STHTC, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
          ]
          isFirstData = true
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // Impact Damage
        if (data.IMPD != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'Impact Damage', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.IMPD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'Impact Damage', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.IMPD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // RSMD
        if (data.RSMD != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'RSMD', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.RSMD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'RSMD', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.RSMD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // Burglary
        if (data.BURGLARY != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'Burglary', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.BURGLARY, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'Burglary', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.BURGLARY, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // Air Craft Damage
        if (data.ACD != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'Air Craft Damage', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.ACD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'Air Craft Damage', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.ACD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // EQ
        if (data.EQ != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'EQ', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.EQ, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'EQ', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.EQ, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // Spontaneous Combus
        if (data.SPONTCOMB != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'Spontaneous Combus', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.SPONTCOMB, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'Spontaneous Combus', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.SPONTCOMB, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // Subsidence and Landslid
        if (data.SUBLSLD != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'Subsidence and Landslid', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.SUBLSLD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'Subsidence and Landslid', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.SUBLSLD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // War Risk
        if (data.WARRISK != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'War Risk', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.WARRISK, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'War Risk', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.WARRISK, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // Explosion
        if (data.EXPLOSION != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'Explosion', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.EXPLOSION, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'Explosion', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.EXPLOSION, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // Flood and Inundate
        if (data.FLOOD != 0) {
          this.isExistData = true
          if (isFirstData) {
            coverInfoDetailData = [
              { content: 'Flood and Inundate', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.FLOOD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
          } else {
            coverInfoDetailData = [
              { content: data.description, rowSpan: count, styles: { halign: 'center', valign: 'middle' } },
              { content: 'Flood and Inundate', styles: { halign: 'center', valign: 'middle' } },
              { content: this.numberPipe.transform(data.FLOOD, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
            ]
            isFirstData = true;
          }
          coverInfoDetailList.push(coverInfoDetailData)
        }
        // Sub Total Premium
        if (data.premium != 0) {
          this.isExistData = true
          coverInfoDetailData = [
            { content: 'Sub Total Premium', colSpan: 2, styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
            { content: this.numberPipe.transform(data.premium, "1.2-2"), styles: { halign: 'right', valign: 'middle' } },
          ]
          coverInfoDetailList.push(coverInfoDetailData)
        }
        if (!this.isExistData) {
          coverInfoDetailData = [
            { content: data.description, styles: { halign: 'center', valign: 'middle' } },
            { content: '-', styles: { halign: 'center', valign: 'middle' } },
            { content: '-', styles: { halign: 'center', valign: 'middle' } },
          ]
          coverInfoDetailList.push(coverInfoDetailData)
        }
      }
    }

    // Insurance Information Details
    let insuranceInfoDetailData = [
      [
        { content: "Approximate Total SI", styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.currencyFormat(this.totalSi), styles: { halign: 'right', valign: 'middle' } },
        { content: "Approximate Total Premium", styles: { halign: 'center', valign: 'middle', fillColor: '#e9f8fe' } },
        { content: this.premiumAmt, styles: { halign: 'right', valign: 'middle' } },
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
      columnStyles: {
        0: {
          fontSize: 8,
          fontStyle: 'bold'
        },
        2: {
          fontSize: 8,
          fontStyle: 'bold'
        },
      }
    });
    height = doc.lastAutoTable.finalY;

    // Policy Holder Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F')
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
      columnStyles: {
        0: {
          fontSize: 8,
          fontStyle: 'bold'
        },
      }
    });
    height = doc.lastAutoTable.finalY;

    // Policy Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F')
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

    // new page
    if (this.addOnData.length > 1) {
      doc.addPage();
      height = 0;
    }

    // Cover Information Details
    doc.setFontSize(10).setFont('helvetica', 'normal', 'normal').setFillColor(217, 234, 250).rect(10, height + 10, width - 20, 20, 'F');
    doc.text("Cover Information Details", width / 2, height + 23, { align: 'center' });
    doc.autoTable({
      head: coverInfoDetailHeader,
      body: coverInfoDetailList,
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

    // new page
    if (this.addOnData.length > 2 || this.listData.length == 1) {
      doc.addPage();
      height = 0;
    }

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
    doc.text("I hereby declare that the statements made by me in this Proposal are true to the best of my knowledge and belief and I hereby agree that this declaration shall from the basic of the contract between me and KBZMS General Insurance Co.,Ltd. in the event of the Proposal being accepted.", 10, height + 40, { maxWidth: width - 20, align: 'justify' });

    // Proposer's name and signature
    doc.setFontSize(8).setFont('helvetica', 'normal', 'bold');
    doc.text("PROPOSER'S NAME AND SIGNATURE", width - 180, height + 70);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text("Date", 10, height + 80);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text(this.policyHolder.titleValue + " " + this.policyHolder.firstName + " " + this.policyHolder.middleName + " " + this.policyHolder.lastName, width - 180, height + 80);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", 10, height + 150);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text("-----------------------------", width - 180, height + 150);
    doc.setFontSize(8).setFont('helvetica', 'normal', 'normal');
    doc.text(this.signatureDate ? this.formatDateDDMMYYY(this.signatureDate) : '', 10, height + 130);
    if (this.fileId) {
      var img = new Image()
      img.src = this.DEFAULT_DOWNLOAD_URL + '?id=' + this.fileId
      doc.addImage(img, 'PNG', width - 180, height + 90, 70, 50);
    }

    // Add Footer Image
    var pageCount = doc.internal.getNumberOfPages(); //Total Page Number
    for (let i = 0; i < pageCount; i++) {
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
      if (this.isPrint) {
        let blobFile = doc.output('blob')
        // var blobPDF = new Blob([doc.output()], { type: 'application/pdf' });
        this.attachmentDownloadService.mobileDownload(this.product.name + '(' + this.product.code + ')' + '.pdf', blobFile);
      } else {
        let data = doc.output('datauristring')
        this.base64Proposal = data
        console.log("this.base64Proposal: ", this.base64Proposal)
      }
    } else {
      console.log("Web")
      // Open PDF document in new tab
      // doc.output('dataurlnewwindow', { filename: this.product.name + '(' + this.product.code + ')' + '.pdf' })
      if (this.isPrint) {
        console.log("HERE1==>");

        // Download PDF document  
        doc.save(this.product.name + '(' + this.product.code + ')' + '.pdf');
      } else {
        console.log("HERE2==>");

        let data = doc.output('datauristring')
        let test=data.split('base64,')
        this.base64Proposal = test[1]
        console.log("this.base64Proposal: ", this.base64Proposal)
      }
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
