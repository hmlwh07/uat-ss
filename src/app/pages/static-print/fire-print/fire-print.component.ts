import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { FireProductService } from '../../static-pages/fire-simple-page/models&services/fire-product.service';
import { FireRiskAddressService } from '../../static-pages/fire-simple-page/models&services/fire-risk-address';

@Component({
  selector: 'app-fire-print',
  templateUrl: './fire-print.component.html',
  styleUrls: ['./fire-print.component.scss'],
})
export class FirePrintComponent implements OnInit {

  @Input() resourcesId?: string
  @Input() premiumAmt?: any
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
  signatureDate?: string
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;

  constructor(private fireService: FireProductService, private productService: ProductDataService, private fireRsikService: FireRiskService, private policyHolderService: PolicyHolderService, private fireRiskAddressService: FireRiskAddressService, private addonQuo: AddOnQuoService, private productSerice: ProductDataService) { }

  ngOnInit() {
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
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
      console.log("Detail", this.detail);
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
        console.log("riskDetail", this.listData);
        for (let data of this.listData) {
          this.totalPremium += parseInt(data.premium)
          this.totalSi += parseInt(data.riskSi)
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
      console.log("Policy", res)
      if (res) {
        this.policyHolder = res
        this.getMasterValue(
          this.policyHolder.partyAddress[0].district,
          this.policyHolder.partyAddress[0].state,
          this.policyHolder.partyAddress[0].city).toPromise().then((res: any) => {
            this.policyHolder = {
              ...this.policyHolder,
              // phone: "0943044813",
              townshipName: res['PT_TOWNSHIP'],
              districtName: res['PT_DISTRICT'],
              stateName: res['PT_STATE'],
            }
          })
      }
    })
    console.log("getPolicyHolder:", this.policyHolder)
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

  getRiskAddress() {
    this.fireRiskAddressService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.address = res
        console.log("address", this.address);
      }
    })
  }

  async getAddonCover() {
    this.product = this.productSerice.createingProd || this.productSerice.selectedProd
    console.log(this.product, this.listData);

    for (let riskID of this.listData) {
      let obj = {
        description: riskID.buildingDescription,
        premium: this.totalPremium || 0,
        firepremium: this.totalPremium
      }
      for (const item of this.product.addOns) {
        this.optionId = riskID.id

        try {
          if (this.resourcesId) {
            this.additionalData = await this.addonQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise()
            // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
            //   console.log("response",response);
            console.log("response", this.additionalData);

            if (this.additionalData) {
              obj[item.code] = this.additionalData.premium || 0
              obj.premium += parseInt(this.additionalData.premium)
            } else {
              obj[item.code] = 0
            }
            // })
          }
        } catch (error) {
        }
      }
      console.log("ADDON", obj);

      this.addOnData.push(obj)
      console.log("ADDONDATA", this.addOnData);

    }
  }
  // }
  print() {
    window.print()
  }
}
