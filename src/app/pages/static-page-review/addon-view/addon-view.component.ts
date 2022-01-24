import { Component, Input, OnInit } from '@angular/core';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { Product } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
const AddonViewID = "addon_1634010770155"

@Component({
  selector: 'app-addon-view',
  templateUrl: './addon-view.component.html',
  styleUrls: ['./addon-view.component.scss']
})
export class AddonViewComponent implements OnInit {
  @Input() product: Product
  @Input() resourcesId?: string
  addOnData = {}
  addon = {
    sumInsured: false,
    unit: false,
    premium: false,
  }
  constructor(
    private addonQuo: AddOnQuoService,
    private globalFun: GlobalFunctionService,
  ) { }

  ngOnInit() {
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
            this.addonQuo.getOne(item.id, this.resourcesId).toPromise().then((response:any) => {
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
  async getDetail() {
    if (this.product.addOns && this.product.addOns.length > 0) {
      this.addon = {
        sumInsured: this.product.addOns[0].sumInsured,
        unit: this.product.addOns[0].unit,
        premium: this.product.addOns[0].premium,
      }
      for (const item of this.product.addOns) {
        let response: any = {};
        try {
          if (this.resourcesId) {
            response = await this.addonQuo.getOne(item.id, this.resourcesId).toPromise()
          }
        } catch (error) {

        }
        this.addOnData[item.id] = {
          sum: response ? response.sumInsured || 0 : 0,
          unit: response ? response.unit || 0 : 0,
          premium: response ? response.premium || 0 : 0
        }
      }
    }
  }

}
