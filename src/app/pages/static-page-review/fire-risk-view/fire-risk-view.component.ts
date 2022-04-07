import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product, ProductPages } from '../../products/models/product.dto';
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
  constructor(
    private fireRiskService: FireRiskService,
  ) { }

  ngOnInit(): void {
    this.getRiskList()
  }


  getRiskList() {
    this.fireRiskService.getMany(this.resourcesId).toPromise().then((res: any) => {
      // console.log(res);
      
      if (res) {
        this.listData = res
      }
    })
  }



}
