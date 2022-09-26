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
  tempArray:any[]=[]
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
  fileId:string=''
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader?id=`;

  constructor(
    private policyHolderService: PolicyHolderService,
    private travelService: TravelRiskService,
    private productService: ProductDataService,
    private numberPipe: DecimalPipe,
    private encryption:EncryptService
  ) { }

  ngOnInit() {
    // console.log("Signature", this.productService.editData)
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
    if(this.signId){
      this.fileId=this.encryption.encryptData(this.signId)
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

  getMasterValue(townshipCd: string, districtCd: string, stateCd: string,titleCd:string) {
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
        for (let data of this.tempArray){
            if(data.length>0){
              for (let bene of data){
                this.beneficiaries.push(bene)
              }
            }else{
              this.beneficiaries.push(data)
            }
        }
        // this.beneficiaries = this.tempArray || []
        let SI = totalUnit * 500000
        this.totalSI = this.numberPipe.transform(SI || 0, '1.2-2')
      }
    })
  }
}
