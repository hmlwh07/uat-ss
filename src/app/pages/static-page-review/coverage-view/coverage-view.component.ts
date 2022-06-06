import { Component, Input, OnInit } from '@angular/core';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { Product } from '../../products/models/product.dto';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
const CoverageViewID = "coverage_1634010995936"

@Component({
  selector: 'app-coverage-view',
  templateUrl: './coverage-view.component.html',
  styleUrls: ['./coverage-view.component.scss']
})
export class CoverageViewComponent implements OnInit {
  @Input() product: Product
  @Input() resourcesId?: string
  @Input()  optionId?: string
  coverage = {
    sumInsured: false,
    unit: false,
    premium: false,
  }
  coverageData: any = {}
  constructor(
    private coverageQuo: CoverageQuoService,
    private globalFun: GlobalFunctionService,
  ) { }

  ngOnInit() {
    this.optionId = this.optionId ? this.optionId : this.resourcesId
    if (this.product.coverages && this.product.coverages.length > 0) {
      
      this.coverage = {
        sumInsured: this.product.coverages[0].sumInsured,
        unit: this.product.coverages[0].unit,
        premium: this.product.coverages[0].premium,
      }
      for (const item of this.product.coverages) {
        let response: any = {};
        if (this.resourcesId) {
          this.coverageQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
            if (response) {
              
              this.coverageData[item.id] = {
                sum: response ? Number(response.sumInsured.replace(',', '')) || 0 : 0,
                unit: response ? response.unit || 0 : 0,
                premium: response ?  Number(response.premium.replace(',', '')) || 0 : 0
              }
            }
          })
        }

      }
    }
  }

  async getDetail() {
    if (this.product.coverages && this.product.coverages.length > 0) {
      this.coverage = {
        sumInsured: this.product.coverages[0].sumInsured,
        unit: this.product.coverages[0].unit,
        premium: this.product.coverages[0].premium,
      }
      for (const item of this.product.coverages) {
        let response: any = {};
        try {
          if (this.resourcesId) {
            response = await this.coverageQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().catch(e=>e)
          }
        } catch (error) {

        }
        this.coverageData[item.id] = {
          sum: response ? Number(response.sumInsured.replace(',', '')) || 0 : 0,
          unit: response ? response.unit || 0 : 0,
          premium: response ?  Number(response.premium.replace(',', '')) || 0 : 0
        }

      }

    }
  }

}
