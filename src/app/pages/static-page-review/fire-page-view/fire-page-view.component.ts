import { Component, Input, OnInit } from '@angular/core';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { Product } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';
import { FireProductService } from '../../static-pages/fire-simple-page/models&services/fire-product.service';
import { HealthProductDetailDTO } from '../../static-pages/simple-page/models&services/health-product.dto';
import { HealthProductService } from '../../static-pages/simple-page/models&services/health-product.service';

const FirepageViewID = "static_1642920843499"

@Component({
  selector: 'app-fire-page-view',
  templateUrl: './fire-page-view.component.html',
  styleUrls: ['./fire-page-view.component.scss']
})
export class FirePageViewComponent implements OnInit {

  @Input() product: Product
  @Input() resourcesId?: string
  showData: HealthProductDetailDTO = {}
  refID: string
  tempResourcesId: string
  constructor(
    private fireService: FireProductService,
    private globalFun: GlobalFunctionService,
    private prodService: ProductDataService
  ) { }

  ngOnInit(): void {
    this.refID = this.prodService.referenceID
    this.tempResourcesId = this.resourcesId
    // if(this.prodService.type == 'policy'){
    // }else{
    //   this.tempResourcesId = this.resourcesId
    // }
    if (this.globalFun.tempFormData[FirepageViewID]) {
      this.showData = this.globalFun.tempFormData[FirepageViewID]
    } else {
      this.getDataAPI()
    }
  }

  getDataAPI() {
    this.fireService.getOne(this.tempResourcesId).toPromise().then((res: any) => {
      if (res) {
        this.showData = res
      }
    })
  }

}
