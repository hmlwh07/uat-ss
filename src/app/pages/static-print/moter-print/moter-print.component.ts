import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { MotorPrintService } from '../../products/services/motor-print.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { FireProductService } from '../../static-pages/fire-simple-page/models&services/fire-product.service';
import { FireRiskAddressService } from '../../static-pages/fire-simple-page/models&services/fire-risk-address';

@Component({
  selector: 'app-moter-print',
  templateUrl: './moter-print.component.html',
  styleUrls: ['./moter-print.component.scss']
})
export class MoterPrintComponent implements OnInit {

  @Input() resourcesId?: string
  listData: any[] = []
  motorDetail: any = {}
  motorDriver: any = {}
  policyHolder: any = {}
  address: any = {}
  vehicleDetail: any = {}
  policyTerm = {
    "T-004":"3 Months",
    "T-003": "6 Months",
    "T-002": "8 Months",
    "T-001": "1 year",
  }
  @Input() signId?: string
  product: any
  optionId:any  
  addOnData: any = []
  addon: any
  additionalData: any = []
  coverageData: any = []
  coverage: any
  coverageData2: any = []
  
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  constructor(private motorService: MotorPrintService,private coverageService:CoverageQuoService ,private addonQuo:AddOnQuoService ,private productSerice:ProductDataService ,private policyHolderService: PolicyHolderService, private fireRiskAddressService: FireRiskAddressService) { }

  ngOnInit() {
    this.getPolicyHolder()
    this.getDetail()
    this.getAddonCover()
    this.getCoverage()
   }
  getPolicyHolder() {
    this.policyHolderService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.policyHolder = res
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

  getDetail() {
    this.motorService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res.motorDetail)
        this.motorDetail = res.motorDetail
      if (res.motorDriver)
        this.listData = res.motorDriver
      if (res.vehicleDetail)
        this.vehicleDetail = res.vehicleDetail
    })
  }

  async getAddonCover() {
    this.product = this.productSerice.createingProd || this.productSerice.selectedProd
    console.log(this.product, this.listData);

   
      let obj = {
        description: 'MOTOR',
        premium: 0
      }
      for (const item of this.product.addOns) {
        this.optionId =this.resourcesId

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
      
      console.log("ADDON", obj);

    
    }
    this.addOnData.push(obj)
    console.log("ADDONDATA", this.addOnData);

  }
  async getCoverage() {
    this.product = this.productSerice.createingProd || this.productSerice.selectedProd
    console.log(this.product, this.listData);

   
      let obj = {
        description: 'MOTOR',
        premium: 0
      }
      for (const item of this.product.coverages) {
        this.optionId =this.resourcesId

        try {
          if (this.resourcesId) {
            this.coverageData2 = await this.coverageService.getOne(item.id, this.resourcesId, this.optionId).toPromise()
            // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
            //   console.log("response",response);
            console.log("response", this.coverageData2);

            if (this.coverageData2) {
              obj[item.code] = this.coverageData2.premium || 0
              obj.premium += parseInt(this.coverageData2.premium)
            } else {
              obj[item.code] = 0
            }
            // })
          }
        } catch (error) {
        }
      
      console.log("ADDON", obj);

    
    }
    this.coverageData.push(obj)
    console.log("coverageData", this.coverageData);

  }

}
