import { DecimalPipe } from "@angular/common";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { GlobalFunctionService } from "../../../core/global-fun.service";
import { AlertService } from "../../../modules/loading-toast/alert-model/alert.service";
import { ConfigInput } from "../../form-component/field.interface";
import { PolicyDTO } from "../../policy/policy.dto";
import { PageDataService } from "../../product-form/page-data.service";
import { PageUI, PageUIType, Product } from "../../products/models/product.dto";
import { ProductDataService } from "../../products/services/products-data.service";
import { QuotationDTO } from "../../quotations/quotation.dto";
import { TRAVELID } from "../../static-pages/static-pages.data";
import { TravelRiskService } from "../../static-pages/travel-page/models&services/travel-risk.service";
@Component({
  selector: 'app-travel-risk-view',
  templateUrl: "./travel-page-view.component.html",
})
export class TravelViewComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId?: string
  @Input() referenceID?: string
  @Input() premiumAmt: string
  @Input() travelForm: PageUI[] = []
  listData: any[] = []
  constructor(
    private travelRikService: TravelRiskService,
    private cdf: ChangeDetectorRef,
    private globalFun: GlobalFunctionService
  ) { }

  ngOnInit(): void {
      this.getRiskList()
  }

  getRiskList() {
    this.travelRikService.getMany(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.globalFun.tempFormData[TRAVELID] = res
        this.listData = res || []
        this.cdf.detectChanges()
      }
    })
  }
  replaceT(stringVal: string){
    return stringVal.replace("T-","").replace("TU-","")
  }


}