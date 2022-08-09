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

@Component({
  selector: 'app-travel-print',
  templateUrl: './travel-print.component.html',
  styleUrls: ['./travel-print.component.scss'],
})
export class TravelPrintComponent implements OnInit {

  @Input() resourcesId?: string
  @Input() premiumAmt: any

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  listData: any[] = []
  policyInfo: any = {}
  riskInfo: any = []
  beneficiaries:any=[]
  policyHolder: any = {
    partyAddress: []
  }
  totalPremium: number = 0
  totalSI: string = '0'
  numberOfTraveller: number = 0
  @Input() signId?: string
  signatureDate?: string
  travelArea: string = ''
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;

  constructor(
    private policyHolderService: PolicyHolderService,
    private travelService: TravelRiskService,
    private productService: ProductDataService,
    private numberPipe: DecimalPipe
  ) { }

  ngOnInit() {
    console.log("Signature", this.productService.editData)
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
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
          this.policyHolder.partyAddress[0].state
        ).toPromise().then((res: any) => {
          this.policyHolder = {
            ...this.policyHolder,
            townshipName: res['PT_TOWNSHIP'],
            districtName: res['PT_DISTRICT'],
            stateName: res['PT_STATE'],
          }
        })
      }
    })
  }

  getMasterValue(townshipCd: string, districtCd: string, stateCd: string) {
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
      ]
    }
    return this.policyHolderService.getMasterDataSale(data)
  }

  getTravelPrintData() {
    this.travelService.getData(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.policyInfo = res.policyInfo.travelBasic
        this.numberOfTraveller = res.policyInfo.numberOfTraveller
        this.riskInfo = res.riskDetails
        let totalUnit = 0
        for (let data of res.riskDetails) {
          totalUnit += parseInt(data.travelRisk.totalUnit)
        }
        if (res.beneficiaries)
        this.beneficiaries = res.beneficiaries
        let SI = totalUnit * 500000
        this.totalSI = this.numberPipe.transform(SI || 0, '1.2-2')
      }
    })
  }
}
