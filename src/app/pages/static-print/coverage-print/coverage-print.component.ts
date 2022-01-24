import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../products/models/product.dto';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';

@Component({
  selector: 'app-coverage-print',
  templateUrl: './coverage-print.component.html',
  styleUrls: ['./coverage-print.component.scss']
})
export class CoveragePrintComponent implements OnInit {

  @Input() resourcesId?: string
  coverage = {
    sumInsured: false,
    unit: false,
    premium: false,
  }
  coverageData: any = {}
  product: Product = {}
  constructor(
    private coverageQuo: CoverageQuoService,
    private productSerice: ProductDataService,
  ) { }

  ngOnInit() {
    this.product = this.productSerice.createingProd || this.productSerice.selectedProd
    console.log(this.product);
    
    if (this.product.coverages && this.product.coverages.length > 0) {
      this.coverage = {
        sumInsured: this.product.coverages[0].sumInsured,
        unit: this.product.coverages[0].unit,
        premium: this.product.coverages[0].premium,
      }
      for (const item of this.product.coverages) {
        let response: any = {};
        if (this.resourcesId) {
          this.coverageQuo.getOne(item.id, this.resourcesId).toPromise().then((response: any) => {
            if (response) {
              this.coverageData[item.id] = {
                sum: response ? response.sumInsured || 0 : 0,
                unit: response ? response.unit || 0 : 0,
                premium: response ? response.premium || 0 : 0
              }
            }
          })
        }

      }
    }
  }

}
