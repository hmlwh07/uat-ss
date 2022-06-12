import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
@Component({
  selector: 'app-policy-holder-print',
  templateUrl: './policy-holder-print.component.html',
  styleUrls: ['./policy-holder-print.component.scss'],
})
export class HolderPrintComponent implements OnInit {

  @Input() resourcesId?: string
  listData: any[] = []
  detail: any = {}
  policyHolder: any = {
    partyAddress: []
  }
  constructor(private policyHolderService: PolicyHolderService, private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    this.getPolicyHolder()
  }

  getPolicyHolder() {
    this.policyHolderService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.policyHolder = res
        console.log("policy", this.policyHolder);
        this.cdf.detectChanges()
        this.getMasterValue(this.policyHolder.partyAddress[0].district,this.policyHolder.partyAddress[0].state,this.policyHolder.partyAddress[0].city).toPromise().then((res: any) => {
                
          this.policyHolder = {
            ...this.policyHolder,
            // phone: "0943044813",
            townshipName: res['PT_TOWNSHIP'],
            districtName: res['PT_DISTRICT'],
            stateName: res['PT_STATE'],
            cityName:res['CITY']
          }
        })
      }
      })
  }
  

  getMasterValue(districtCd: string, stateCd: string, townshipCd: string) {
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

}