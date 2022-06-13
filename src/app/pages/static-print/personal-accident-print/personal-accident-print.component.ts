import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PaPrintService } from '../../products/services/pa.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { TravelRiskService } from '../../static-pages/travel-page/models&services/travel-risk.service';

@Component({
  selector: 'app-personal-accident-print',
  templateUrl: './personal-accident-print.component.html',
  styleUrls: ['./personal-accident-print.component.scss'],
})
export class PersonalAccidentPrintComponent implements OnInit {

  @Input() resourcesId?: string
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
    private paService: PaPrintService,
    private productService:ProductDataService
  ) { }

  ngOnInit() {
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
    this.getPolicyHolder()
    this.getPolicyInformationDetail()
    this.getRiskDetail()
  }

  getPolicyHolder() {
    this.policyHolderService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.policyHolder = res
        this.getMasterValue(
          this.policyHolder.partyAddress[0].township,
          this.policyHolder.partyAddress[0].district,
          this.policyHolder.partyAddress[0].state
        ).toPromise().then((res: any) => {
          this.policyHolder = {
            ...this.policyHolder,
            townshipName: res['PT_TOWNSHIP'],
            districtName: res['PT_DISTRICT'],
            stateName: res['PT_STATE'],
            cityName: res['CITY']
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
    this.paService.getOne(this.policyHolder.customerId).toPromise().then((res: any) => {
      if (res)
        this.policyInfo = res;
      console.log("getPolicyInformationDetail: ", this.policyInfo);
    })
  }

  getRiskDetail() {
    this.paService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.listData = res
        console.log("getRiskDetail: ", this.listData);
        for (let data of this.listData) {
          this.totalPremium += parseInt(data.premium)
          this.totalSI += parseInt(data.riskSi)
        }
      }
    })
  }
}
