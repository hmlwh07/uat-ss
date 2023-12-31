import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from 'src/app/core/global-fun.service';
import { environment } from '../../../../environments/environment';
import { PaPrintService } from '../../products/services/pa.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { TravelRiskService } from '../../static-pages/travel-page/models&services/travel-risk.service';

@Component({
  selector: 'app-personal-accident-print-mobile',
  templateUrl: './personal-accident-print-mobile.component.html',
})
export class PersonalAccidentPrintMobileComponent implements OnInit {

  @Input() resourcesId?: string
  @Input() premiumAmt: any
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
  signatureDate?: string
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  unsubscribe: Subscription[] = []
  constructor(
    private policyHolderService: PolicyHolderService,
    private paService: PaPrintService,
    private productService: ProductDataService,
    private globalFun: GlobalFunctionService,
  ) { }

  ngOnInit() {
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
    this.signatureDate = this.productService.editData ? this.productService.editData.signatureDate : ""
    this.getPolicyHolder()
    this.getDetail()
    let unsub = this.globalFun.paCoverageResult.subscribe((value) => {
      console.log("VALUE", value);

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
      console.log("getPolicyHolder: ", this.policyHolder)
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
  getDetail() {
    this.paService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res.productDetail)
        this.productDetail = res.productDetail
      if (res.beneficiaries)
        this.beneficiaries = res.beneficiaries
      if (res.lifeInsuredPolicy)
        this.lifeInsuredPolicy = res.lifeInsuredPolicy
    })
  }

}
