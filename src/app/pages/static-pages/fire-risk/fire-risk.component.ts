import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { PageDataService } from '../../product-form/page-data.service';
import { Product } from '../../products/models/product.dto';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { FirePageID, FireRiskID } from '../static-pages.data';
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
    private cdf: ChangeDetectorRef,
    private numberPipe: DecimalPipe,
    private pageDataService: PageDataService
  ) { }

  ngOnInit(): void {
    this.getRiskList()
  }
  nextPage() {
    if (this.listData.length > 0) {
      this.globalFun.tempFormData[FireRiskID] = this.listData
      this.savePremimunFire()
      this.actionEvent.emit({ type: StaticActionType.NEXT })
    }
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
    modalRef.componentInstance.product = this.product
    modalRef.componentInstance.editData = this.editData
    modalRef.componentInstance.premiumAmt = this.premiumAmt
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        console.log("RESSSS", res)
        if (res.type == "save") {
          // this.surrounding=res.data
          if (detail) {
            let index = this.listData.findIndex(x => x.id == detail.id)
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

  caluFirePremimun() {
    let parentData1 = this.globalFun.tempFormData[FireRiskID]
    let parentData2 = this.globalFun.tempFormData[FirePageID]
    let precent = parentData2.policyType == "T-NM" ? 1 : 0.75
    let premiumTotal = 0
    let addOnPre = 0
    for (let element of parentData1) {
      premiumTotal += this.globalFun.calculateDecimal(element.premium)
      const posDataArray = this.globalFun.tempFormData['addon_1634010770155' + element.id]
      for (let addon of posDataArray) {
        addOnPre += this.globalFun.calculateDecimal(addon['premium'])
      }
    }
    // parentData2.forEach(element => {
    //   premiumTotal += parseFloat(element.premium)
    // });this.addOnsData

    let finalPre = (premiumTotal + addOnPre) * precent
    // if (parentData2.durationType == "D") {
    let rate = 1
    switch (true) {
      case (parentData2.durationType == "G" && parentData2.policyDuration == 1):
        rate = 1
        break;
      case (parentData2.durationType == "D" && parentData2.policyDuration <= 10):
        rate = 1 / 8
        break;
      case (parentData2.durationType == "D" && parentData2.policyDuration <= 15):
        rate = 1 / 6
        break;
      case (parentData2.durationType == "D" && parentData2.policyDuration > 15):
        rate = 2 / 8
        break;
      case (parentData2.durationType == "F" && parentData2.policyDuration == 1):
        rate = 2 / 8
        break;
      case (parentData2.durationType == "F" && parentData2.policyDuration == 2):
        rate = 3 / 8
        break;
      case (parentData2.durationType == "F" && parentData2.policyDuration == 3):
        rate = 4 / 8
        break;
      case (parentData2.durationType == "F" && parentData2.policyDuration == 4):
        rate = 5 / 8
        break;
      case (parentData2.durationType == "F" && parentData2.policyDuration == 5):
        rate = 6 / 8
        break;
      case (parentData2.durationType == "F" && parentData2.policyDuration == 6):
        rate = 6 / 8
        break;
      case (parentData2.durationType == "F" && parentData2.policyDuration > 6):
        rate = 1
        break;
    }
    // }
    finalPre = this.globalFun.calculateDecimal(finalPre * rate)
    this.premiumAmt = this.numberPipe.transform(finalPre) + " MMK"
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    return finalPre
  }

  savePremimunFire() {
    let premiumAmt = this.caluFirePremimun()
    let postData = {
      "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
      "premiumView": this.premiumAmt,
      "resourceId": this.resourcesId,
      "type": 'policy'
    }
    return this.pageDataService.updatePremimun(postData)
  }


}
