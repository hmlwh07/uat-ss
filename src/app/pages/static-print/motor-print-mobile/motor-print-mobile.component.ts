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
  selector: 'app-motor-print-mobile',
  templateUrl: './motor-print-mobile.component.html',
})
export class MotorPrintMobileComponent implements OnInit {

  @Input() resourcesId?: string
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
  mExcessType = {
    "T-NILEX": "+50,000.00",
    "TU-NILEX": "+25.00",
    "TU-STNDEX": "+100.00",
    "T-STNDEX": "+100,000.00",
    "T-EXD1": "-50,000.00",
    "T-EXD2": "-70,000.00",
    "T-EXD3": "-100,000.00"
  }
  @Input() signId?: string
  signatureDate?: string
  product: any
  optionId: any
  addOnData: any = []
  addon: any
  additionalData: any = []
  coverageData: any = []
  coverage: any
  coverageData2: any = []

  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  constructor(private motorService: MotorPrintService, private productService: ProductDataService, private coverageService: CoverageQuoService, private addonQuo: AddOnQuoService, private productSerice: ProductDataService, private policyHolderService: PolicyHolderService, private fireRiskAddressService: FireRiskAddressService) { }

  ngOnInit() {
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
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
        this.getMasterValue(this.policyHolder.partyAddress[0].district, this.policyHolder.partyAddress[0].state, this.policyHolder.partyAddress[0].city).toPromise().then((res: any) => {

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
      if (res.motorDetail.mExcessDiscount == "" || res.motorDetail.mExcessDiscount == null) {
        this.motorDetail.mExcessDiscount = res.motorDetail.mExcess
      }

      if (res.motorDetail.mTypeOfVehicleValue == 'Motor Commercial' && res.motorDetail.mTypeOfCoverageValue == 'Commercial Car (Goods Carrying Vehicle)' && res.motorDetail.mCurrency == 'USD') {
        this.isTonnage = true
      }
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
      premium: 0,
      num: 0
    }
    console.log("this.product.addOns", this.product.addOns);

    for (const item of this.product.addOns) {
      this.optionId = this.resourcesId

      try {
        if (this.resourcesId) {
          this.additionalData = await this.addonQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise()
          // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
          //   console.log("response",response);
          console.log("response", this.additionalData);

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
      this.optionId = this.resourcesId

      try {
        if (this.resourcesId) {
          this.coverageData2 = await this.coverageService.getOne(item.id, this.resourcesId, this.optionId).toPromise()
          // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
          //   console.log("response",response);
          console.log("response", this.coverageData2);

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

      console.log("ADDON", obj);


    }
    this.coverageData.push(obj)
    console.log("coverageData", this.coverageData);

  }

}
