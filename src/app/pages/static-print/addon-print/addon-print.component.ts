import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';

@Component({
  selector: 'app-addon-print',
  templateUrl: './addon-print.component.html',
  styleUrls: ['./addon-print.component.scss']
})
export class AddonPrintComponent implements OnInit {
  @Input() resourcesId?: string
  addOnData = {}
  addon = {
    sumInsured: false,
    unit: false,
    premium: false,
  }
  product: Product = {}
  constructor(
    private addonQuo: AddOnQuoService,
    private productSerice: ProductDataService,
  ) { }

  ngOnInit() {
    this.product = this.productSerice.createingProd || this.productSerice.selectedProd
    if (this.product.addOns && this.product.addOns.length > 0) {
      this.addon = {
        sumInsured: this.product.addOns[0].sumInsured,
        unit: this.product.addOns[0].unit,
        premium: this.product.addOns[0].premium,
      }
      for (const item of this.product.addOns) {
        // let response: any = {};
        try {
          if (this.resourcesId) {
            this.addonQuo.getOne(item.id, this.resourcesId).toPromise().then((response: any) => {
              if (response) {
                this.addOnData[item.id] = {
                  sum: response ? response.sumInsured || 0 : 0,
                  unit: response ? response.unit || 0 : 0,
                  premium: response ? response.premium || 0 : 0
                }
              }
            })
          }
        } catch (error) {

        }

      }

    }
  }

}
