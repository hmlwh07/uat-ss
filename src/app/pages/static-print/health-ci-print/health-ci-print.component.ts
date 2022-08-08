import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { environment } from '../../../../environments/environment';
import { ProductDataService } from '../../products/services/products-data.service';
import { Product } from '../../products/models/product.dto';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { HealthPaymentService } from '../../static-pages/health-quo/models&services/health-payment.service';
import { HealthPrintService } from '../../products/services/health-print.service';

@Component({
  selector: 'app-health-ci-print',
  templateUrl: './health-ci-print-new.component.html',
  styleUrls: ['./health-ci-print.component.scss'],
})
export class HealthCiPrintComponent implements OnInit {
  @Input() resourcesId?: string;
  @Input() signId?: string
  @Input() premiumAmt: any
  @Input() product: Product
  signatureDate?: string
  coverage = {
    sumInsured: false,
    unit: false,
    premium: false,
  }
  coverageData: any = {}
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;

  policyHolder: any = {};
  policyInfo: any = {};

  riskDetails: any = [];
  beneficiaries: any = [];
  coverages: any = [];
  AddonData: any = []
  paymentSchedule: any = []
  tempPaymentSchedule: any = []
  refID: any;
  tempResourcesId: any;
  totalP: number = 0
  totalL: number = 0
  coveragesTotalValue: number = 0
  constructor(
    private policyHolderService: PolicyHolderService, 
    private coverageQuo: CoverageQuoService, 
    private addOnQuoService: AddOnQuoService, 
    private prodService: ProductDataService, 
    private coverageQuoService: CoverageQuoService, 
    private healthPayService: HealthPaymentService, 
    private cdf: ChangeDetectorRef, 
    private productService: ProductDataService, 
    private healthPrintService: HealthPrintService) { }

  ngOnInit() {
    this.signId = this.productService.editData ? this.productService.editData.attachmentId : ""
    this.signatureDate = this.productService.editData ? this.productService.editData.signatureDate : ""
    this.refID = this.prodService.referenceID
    this.tempResourcesId = this.resourcesId
    this.getPolicyHolder()
    this.getDetail()
    this.getCoverage()
    this.getAddon()
    this.getSchedule()
  }

  getDetail() {
    this.healthPrintService.getOne(this.resourcesId).toPromise().then((res: any) => {
      console.log(res);
      if (res) {
        this.policyInfo = res.policyInfo
        this.riskDetails = res.riskDetails
        this.beneficiaries = res.beneficiaries
      }
    })
  }

  getAddon() {
    this.product.addOns.forEach(async (addon) => {
      let response: any = {};
      try {
        response = await this.addOnQuoService.getOne(addon.id, this.tempResourcesId, this.tempResourcesId).toPromise()
        if (response) {
          this.AddonData.push({ keyName: addon.description, value: response.sumInsured })
          this.coveragesTotalValue +=Number(response.sumInsured )
        }
      } catch (error) {
      }

    })
  }

  getCoverage() {
    this.product.coverages.forEach(async (coverage) => {
      let response: any = {};
      try {
        response = await this.coverageQuo.getOne(coverage.id, this.tempResourcesId, this.tempResourcesId).toPromise()
        if (response) {
          this.AddonData.unshift({ keyName: coverage.description, value: response.sumInsured })
         this.coveragesTotalValue +=Number(response.sumInsured )
        }
      } catch (error) {
      }

    })
  }

  getSchedule() {
    this.healthPayService.getMany(this.tempResourcesId).toPromise().then((res: any) => {
      if (res) {
        if (res.length > 0) {
          this.totalP = 0
          this.totalL = 0
          res.map(x => {
            this.totalP += x.premium
            this.totalL += x.levy
          })
          this.paymentSchedule = res
          if (res[0].paymentTerm == "L") {
            this.tempPaymentSchedule = [
              { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
            ]
          } else {
            let tempTotal = this.totalP
            this.tempPaymentSchedule = [
              { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
              { premium: tempTotal, levy: 0, total: tempTotal },
            ]
          }
          this.cdf.detectChanges()
        }
      }
    })
  }

  getPolicyHolder() {
    this.policyHolderService
      .getOne(this.resourcesId)
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.policyHolder = res;
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
          console.log("getPolicyHolder: ", this.policyHolder)
        }
      });
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

}
