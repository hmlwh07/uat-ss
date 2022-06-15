import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { FireProductService } from '../../static-pages/fire-simple-page/models&services/fire-product.service';
import { FireRiskAddressService } from '../../static-pages/fire-simple-page/models&services/fire-risk-address';
import { TravelRiskService } from '../../static-pages/travel-page/models&services/travel-risk.service';
import { TravelRiskDetailComponent } from '../../static-pages/travel-page/travel-risk-detail/travel-risk-detail.component';

@Component({
  selector: 'app-travel-print',
  templateUrl: './travel-print.component.html',
  styleUrls: ['./travel-print.component.scss'],
})
export class TravelPrintComponent implements OnInit {

  @Input() resourcesId?: string
  @Input() premiumAmt:any
  listData: any[] = []
  policyInfo: any = {}
  policyHolder: any = {
    partyAddress: []
  }
  totalPremium: number = 0
  totalSI: number = 0
  @Input() signId?: string
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;

  constructor(
    private policyHolderService: PolicyHolderService,
    private travelService: TravelRiskService,
  ) { }

  ngOnInit() {
    this.getPolicyHolder()
    this.getPolicyInformationDetail()
    this.getRiskDetailAndInsuranceDetail()
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

  getPolicyInformationDetail() {
    // this.travelService.getOne(this.policyHolder.customerId).toPromise().then((res: any) => {
    //   if (res)
    //     this.policyInfo = res;
    //   console.log("getPolicyInformationDetail: ", this.policyInfo);
    // })
  }

  getRiskDetailAndInsuranceDetail() {
    this.travelService.getMany(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.listData = res
        console.log("getRiskDetailAndInsuranceDetail: ", this.listData);
        for (let data of this.listData) {
          this.totalPremium += parseInt(data.premium)
          this.totalSI += parseInt(data.riskSi)
        }
      }
    })
  }
}
