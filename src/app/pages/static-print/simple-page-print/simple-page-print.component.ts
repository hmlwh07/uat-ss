import { Component, Input, OnInit } from '@angular/core';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { Product } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
import { HealthProductDetailDTO } from '../../static-pages/simple-page/models&services/health-product.dto';
import { HealthProductService } from '../../static-pages/simple-page/models&services/health-product.service';

const HealthpageViewID = "static_1634018514043"

@Component({
  selector: 'app-simple-page-print',
  templateUrl: './simple-page-print.component.html',
  styleUrls: ['./simple-page-print.component.scss']
})
export class SimplePagePrintComponent implements OnInit {

  @Input() product: Product
  @Input() resourcesId?: string
  showData: HealthProductDetailDTO = {}
  refID: string
  tempResourcesId: string
  constructor(
    private healthService: HealthProductService,
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
    if (this.globalFun.tempFormData[HealthpageViewID]) {
      this.showData = this.globalFun.tempFormData[HealthpageViewID]
    } else {
      this.getDataAPI()
    }
  }

  getDataAPI() {
    this.healthService.getOne(this.tempResourcesId).toPromise().then((res: any) => {
      if (res) {
        this.showData = res
      }
    })
  }

}
