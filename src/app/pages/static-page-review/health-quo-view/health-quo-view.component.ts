import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { HealthPaymentService } from '../../static-pages/health-quo/models&services/health-payment.service';
import { StaticActionType, StaticPageAction } from '../../static-pages/static-field.interface';

@Component({
  selector: 'app-health-quo-view',
  templateUrl: './health-quo-view.component.html',
  styleUrls: ['./health-quo-view.component.scss']
})
export class HealthQuoViewComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  refID: string = ""
  showData: any[] = []
  schedule: any = []
  parentData: any
  totalP: number = 0
  totalL: number = 0
  tempResourcesId: string = ""
  tempSchedule: any[] = []
  constructor(private globalFun: GlobalFunctionService, private alertService: AlertService, private addOnQuoService: AddOnQuoService, private coverageQuoService: CoverageQuoService, private healthPayService: HealthPaymentService, private cdf: ChangeDetectorRef, private prodService: ProductDataService) { }

  ngOnInit(): void {
    this.refID = this.prodService.referenceID
    this.tempResourcesId = this.resourcesId
    // if(this.prodService.type == 'policy'){
    //   this.tempResourcesId = this.refID
    // }else{
    //   this.tempResourcesId = this.resourcesId
    // }
    // for (let addon of this.product.addOns) {
    // }
    // if (this.parentData.coverages) {
    this.getCoverage()
    // }
    // if (this.parentData.addOns) {
    this.getAddon()
    // }
    this.getSchedule()
  }

  getAddon() {
    this.product.addOns.forEach(async (addon) => {
      let response: any = {};
      try {
        response = await this.addOnQuoService.getOne(addon.id, this.tempResourcesId).toPromise()
        if (response) {
          this.showData.push({ keyName: addon.description, value: response.sumInsured })
        }
      } catch (error) {
      }

    })
  }

  getCoverage() {
    this.product.coverages.forEach(async (coverage) => {
      let response: any = {};
      try {
        response = await this.coverageQuoService.getOne(coverage.id, this.tempResourcesId).toPromise()
        if (response) {
          this.showData.unshift({ keyName: coverage.description, value: response.sumInsured })
        }
      } catch (error) {
      }

    })
  }

  // nextPage() {
  //   this.actionEvent.emit({ type: StaticActionType.NEXT })
  // }

  getSchedule() {
    this.healthPayService.getMany(this.tempResourcesId).toPromise().then((res: any) => {
      if (res) {
        this.totalP = 0
        this.totalL = 0
        res.map(x => {
          this.totalP += x.premium
          this.totalL += x.levy
        })
        this.schedule = res
        if (res[0].paymentTerm == "lump") {
          this.tempSchedule = [
            { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
          ]
        } else {
          let tempTotal= this.totalP/2
          this.tempSchedule = [
            { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
            { premium: tempTotal, levy: 0, total: tempTotal },
          ]
        }
        this.cdf.detectChanges()
      }
    })
  }

  // backPage() {
  //   this.actionEvent.emit({ type: StaticActionType.PREV })
  // }


}
