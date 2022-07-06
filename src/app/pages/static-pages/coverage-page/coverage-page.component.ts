import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { IsJsonString } from '../../../core/is-json';
import { LoadingService } from '../../../modules/loading-toast/loading/loading.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product, ProductPages } from '../../products/models/product.dto';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';

@Component({
  selector: 'app-coverage-page',
  templateUrl: './coverage-page.component.html',
  styleUrls: ['./coverage-page.component.scss']
})
export class CoveragePageComponent implements OnInit {

  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Input() optionId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  coverage = {
    isSum: false,
    isUnit: false,
    isPremium: false,
  }
  refID: any
  coverageData: any = {}
  unsubscribe: Subscription[] = []
  parentData: any = {}
  isLoading = true
  @Input() isPopup: boolean = false
  crossPercent = {
    "T-004": 0.35,
    "T-003": 0.60,
    "T-002": 0.85,
    "T-001": 1,
  }
  termPercent = 1
  constructor(private coverageQuoService: CoverageQuoService, private globalFun: GlobalFunctionService, private cdRef: ChangeDetectorRef, private prodService: ProductDataService, private loadingService: LoadingService) { }

  async ngOnInit() {
    this.refID = this.prodService.referenceID
    this.optionId = this.optionId ? this.optionId : this.resourcesId
    if (this.product.code == "PLMO02" || this.product.code == "PLMO01") {
      this.parentData = this.getParnet()
      let term = this.parentData['m_policy_term']
      console.log("Policy-TERM", term);
      this.termPercent = this.crossPercent[term] || 1
      console.log("TERM-Percent", this.termPercent);
    }
    if (this.product.coverages && this.product.coverages.length > 0) {
      await this.loadingService.activate()
      this.coverage = {
        isSum: this.product.coverages[0].sumInsured,
        isUnit: this.product.coverages[0].unit,
        isPremium: this.product.coverages[0].premium,
      }
      let postData = {
        quotationNo: this.editData.id,
        coverageIds: this.product.coverages.map(x => { return x.id }),
        optionalKey: this.optionId
      }
      let results: any = await this.coverageQuoService.getAllById(postData).toPromise()
      if (results.length == 0) {
        postData.quotationNo = this.refID
        postData.optionalKey = this.refID
        results = await this.coverageQuoService.getAllById(postData).toPromise()
      }
      for (const item of this.product.coverages) {
        item['show'] = true
        if (item.validationFun) {
          item['show'] = this.globalFun[item.validationFun] ? this.globalFun[item.validationFun](this.parentData) : true
        }
        let response = results.find(x => x.coverageId == item.id)
        this.coverageData[item.id] = {
          sum: response ? response.sumInsured || 0 : 0,
          unit: response ? response.unit || 0 : 0,
          premium: response ? (response.premium || 0) : 0
        }

        if (item.sumInsured) {
          this.getGlobalFun(item.sumInsuredStr, 'coverageData', item.id, 'sum')
        }
        if (item.unit) {
          this.getGlobalFun(item.unitStr, 'coverageData', item.id, 'unit')
        }
        if (item.premium) {
          this.getGlobalFun(item.premiumStr, 'coverageData', item.id, 'premium')
        }
        // }
      }
      this.isLoading = false
      await this.loadingService.deactivate()
      this.cdRef.detectChanges();

    } else {
      this.isLoading = false

    }
  }

  getGlobalFun(funName: string, mainObj: string, mainKey, subKey: string) {
    if ((this.product.code == "PLMO02" || this.product.code == "PLMO01") && subKey == "premium") {
      if (this.globalFun[funName]) {
        this.parentData = { ...this.parentData, productCode: this.product.code }
        let unsub = this.globalFun[funName](this.parentData).subscribe((res) => {
          this[mainObj][mainKey][subKey] = res
          this.cdRef.detectChanges();
        })
        this.unsubscribe.push(unsub)
      } else {
        if (funName)
          this[mainObj][mainKey][subKey] = funName
      }
    } else {

      if (this.globalFun[funName + "Result"]) {
        let unsub = this.globalFun[funName + "Result"].subscribe((res) => {
          this[mainObj][mainKey][subKey] = res
          this.cdRef.detectChanges();
        })
        this.unsubscribe.push(unsub)
      } else {
        if (funName)
          this[mainObj][mainKey][subKey] = funName
      }
    }
  }

  async nextPage() {
    const quoService = this.coverageQuoService
    const posDataArray = this.coverageData
    // console.log(this.product.coverages);
    // for await (const iterator of object) {

    // }
    this.globalFun.tempFormData['coverage_1634010995936'] = []
    if (this.resourcesId && this.optionId)
      await this.coverageQuoService.deleteAll(this.resourcesId, this.optionId)
    for (let cov of this.product.coverages) {
      try {
        let postData = {
          coverageId: cov.id,
          quotationNo: this.resourcesId,
          optionalKey: this.optionId,
          sumInsured: ((posDataArray[cov.id].sum || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
          unit: ((posDataArray[cov.id].unit || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
          premium: ((posDataArray[cov.id].premium || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
        }
        this.globalFun.tempFormData['coverage_1634010995936'].push(postData)
        let res = await this.coverageQuoService.save(postData).toPromise().catch(e => e)
      } catch (error) {
        // console.log(error);

      }

    }
    this.actionEvent.emit({ type: StaticActionType.NEXT })
  }

  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }

  getParnet() {
    if (IsJsonString(this.product.config)) {
      let pageUI: ProductPages = JSON.parse(this.product.config);
      let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || []
      let parent = pageOrder.find(page => page.tableName == 'm_detail')
      if (parent) {
        return this.globalFun.tempFormData[parent.tableName + parent.id] || null
      }
      return null
    }
    return null
  }

}
