import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product, ProductPages } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';

@Component({
  selector: 'app-fire-risk-view',
  templateUrl: './fire-risk-view.component.html',
  styleUrls: ['./fire-risk-view.component.scss']
})
export class FireRiskViewComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  premiumAmt: string = ""
  listData: any[] = []
  totalPremium: number = 0
  totalSi: number = 0
  riskData: any[] = []
  optionId: any
  additionalData: any
  addOnData: any = [] = []
  constructor(
    private fireRiskService: FireRiskService, private fireRsikService: FireRiskService, private productSerice: ProductDataService, private addonQuo: AddOnQuoService, private cdf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getRiskList()
    this.getRiskDetail()
  }


  getRiskList() {
    this.fireRiskService.getMany(this.resourcesId).toPromise().then((res: any) => {
      // console.log(res);

      if (res) {
        this.listData = res
      }
    })
  }
  getRiskDetail() {
    this.fireRsikService.getMany(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.riskData = res
        console.log("riskDetail", this.listData);
        for (let data of this.listData) {
          this.totalPremium += parseInt(data.premium)
          this.totalSi += parseInt(data.riskSi)
        }
        console.log(this.totalPremium, this.totalSi);

        this.getAddonCover()

      }
    })
  }

  async getAddonCover() {
    this.product = this.productSerice.createingProd || this.productSerice.selectedProd
    console.log(this.product, this.listData);
    let count = 0
    for (let riskID of this.listData) {
      count += 1
      let obj = {
        description: riskID.buildingDescription,
        premium: 0
      }
      for (const item of this.product.addOns) {
        this.optionId = riskID.id

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
      }
      console.log("ADDON", obj);

      this.addOnData.push(obj)
      console.log("ADDONDATA", this.addOnData);
      if (count == this.listData.length)
        this.cdf.detectChanges()
    }
  }



}
