import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product } from '../../products/models/product.dto';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { FireRiskID } from '../static-pages.data';
import { FireRiskService } from './models&services/fire-risk.service';
import { RiskDetailComponent } from './risk-detail/risk-detail.component';

@Component({
  selector: 'app-fire-risk',
  templateUrl: './fire-risk.component.html',
  styleUrls: ['./fire-risk.component.scss']
})
export class FireRiskComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  premiumAmt: string = ""
  listData: any[] = []
  constructor(
    private globalFun: GlobalFunctionService,
    private fireRiskService: FireRiskService,
    private modalService: NgbModal,
    private cdf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getRiskList()
  }
  nextPage() {
    this.globalFun.tempFormData[FireRiskID] = this.listData
    this.actionEvent.emit({ type: StaticActionType.NEXT })
  }
  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }

  getRiskList() {
    this.fireRiskService.getMany(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.globalFun.tempFormData[FireRiskID] = res
        this.listData = res || []
        this.cdf.detectChanges()
      }
    })
  }

  newData(type: string, detail?: any) {
    let modalRef;
    modalRef = this.modalService.open(RiskDetailComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.type = type
    modalRef.componentInstance.riskId = detail ? detail.riskId : ""
    modalRef.componentInstance.oldData = detail ? detail : {}
    modalRef.componentInstance.resourcesId = this.resourcesId
    modalRef.componentInstance.premiumAmt = this.premiumAmt
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        console.log("RESSSS", res)
        if (res.type == "save") {
          // this.surrounding=res.data
          if (detail) {
            let index = this.listData.findIndex(x=> x.id == detail.id)
            this.listData[index] = res.data
          } else {
            this.listData.push(res.data)
          }
          this.cdf.detectChanges()
        }
      }
    })
  }

  delete(data) {
    this.fireRiskService.delete(data.id).toPromise()
      .then((res) => {
        if (res) {
          let index = this.listData.findIndex(x => x.id == data.id)
          if (index >= 0) {
            this.listData.splice(index, 1)
            this.cdf.detectChanges()
          }
        }
      });
  }

}
