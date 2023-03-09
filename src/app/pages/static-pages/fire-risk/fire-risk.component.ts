import { DecimalPipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { PageDataService } from '../../product-form/page-data.service';
import { Product } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { FirePageID, FireRiskID } from '../static-pages.data';
import { FireRiskService } from './models&services/fire-risk.service';
import { RiskDetailComponent } from './risk-detail/risk-detail.component';

@Component({
  selector: 'app-fire-risk',
  templateUrl: './fire-risk.component.html',
  styleUrls: ['./fire-risk.component.scss'],
})
export class FireRiskComponent implements OnInit {
  @Input() product: Product;
  @Input() editData: QuotationDTO | PolicyDTO;
  @Input() resourcesId: string;
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  premiumAmt: string = '';
  totalSI: string = ''
  listData: any[] = [];
  riskData: any[] = []
  isNew: boolean;
  fireRiskData: any;
  totalAddOnPremium: any = 0;
  totalPremium: any = 0;
  totalSi: number = 0
  optionId: any;
  additionalData: any;
  addOnData: any = [] = []
  isApplication: boolean = true
  constructor(
    private globalFun: GlobalFunctionService,
    private fireRiskService: FireRiskService,
    private modalService: NgbModal,
    private cdf: ChangeDetectorRef,
    private numberPipe: DecimalPipe,
    private pageDataService: PageDataService,
    private alertService: AlertService,
    private prodService: ProductDataService,
    private addOnQuoService: AddOnQuoService,
    private addonQuo: AddOnQuoService,
  ) { }

  ngOnInit(): void {
    console.log('this.prodService', this.prodService);
    this.isApplication = this.prodService.isApplication
    this.getRiskList();
  }
  nextPage() {
    if (this.listData.length > 0) {
      this.globalFun.tempFormData[FireRiskID] = this.listData;
      this.savePremimunFire();
      this.actionEvent.emit({ type: StaticActionType.NEXT });
    }
  }
  backPage() {
    if (this.listData.length > 0) {
      this.globalFun.tempFormData[FireRiskID] = this.listData;
      this.savePremimunFire();
    }
    this.actionEvent.emit({ type: StaticActionType.PREV });
  }

  getRiskList() {
    this.fireRiskService
      .getMany(this.resourcesId)
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.globalFun.tempFormData[FireRiskID] = res;
          this.listData = res || [];
          this.calculateFireTotalPremiumAmount();
          this.cdf.detectChanges();
        }
      });
  }

  newData(type: string, detail?: any) {
    let modalRef;
    modalRef = this.modalService.open(RiskDetailComponent, {
      size: 'xl',
      backdrop: false,
    });
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.riskId = detail ? detail.riskId : '';
    modalRef.componentInstance.oldData = detail ? detail : {};
    modalRef.componentInstance.resourcesId = this.resourcesId;
    modalRef.componentInstance.product = this.product;
    modalRef.componentInstance.editData = this.editData;
    modalRef.componentInstance.premiumAmt = this.premiumAmt;
    modalRef.componentInstance.isApplication = this.prodService.isApplication
    modalRef.result.then(
      () => { },
      (res) => {
        if (res) {
          console.log('RESSSS', res);
          this.isNew = true;
          this.fireRiskData = res;
          if (res.type == 'save') {
            // this.surrounding=res.data
            if (detail) {
              let index = this.listData.findIndex((x) => x.id == detail.id);
              this.listData[index] = res.data;
            } else {
              let index = this.listData.findIndex((x) => x.id == res.data.id);
              if (index >= 0) this.listData[index] = res.data;
              else this.listData.push(res.data);
            }
            this.savePremimunFire();
            this.cdf.detectChanges();
          }
        }
      }
    );
  }

  delete(data) {
    this.alertService
      .activate('Are you sure want to delete?', 'Warning Message')
      .then((result) => {
        if (result) {
          this.fireRiskService
            .delete(data.id)
            .toPromise()
            .then((res) => {
              if (res) {
                let index = this.listData.findIndex((x) => x.id == data.id);
                if (index >= 0) {
                  this.listData.splice(index, 1);
                  this.savePremimunFire();
                  this.cdf.detectChanges();
                  this.alertService
                    .activate('This record was deleted', 'Success Message')
                    .then((result) => { });
                }
              }
            });
        }
      });
  }

  caluFirePremimun() {
    if (this.isNew) {
      let parentData1 = this.globalFun.tempFormData[FireRiskID];
      let parentData2 = this.globalFun.tempFormData[FirePageID];
      let precent = parentData2.policyType == 'T-NM' ? 1 : 0.75;


      let premiumTotal = 0;
      let addOnPre = 0;
      console.log('parentData1 =====> ', parentData1);
      for (let element of parentData1) {
        premiumTotal += this.globalFun.calculateDecimal(element.premium);
        const posDataArray =
          this.globalFun.tempFormData['addon_1634010770155' + element.id];
        if (posDataArray)
          for (let addon of posDataArray) {
            addOnPre += this.globalFun.calculateDecimal(addon['premium']);
          }


      }
      // parentData2.forEach(element => {
      //   premiumTotal += parseFloat(element.premium)
      // });this.addOnsData

      console.log('premiumTotal =====> ', premiumTotal);
      console.log('addOnPre =====> ', addOnPre);
      console.log('precent =====> ', precent);

      let finalPre = (premiumTotal + addOnPre);

      let currency = parentData2.currency;
      // let stampDuty = 0;
      // if (currency == 'MMK') {
      //   stampDuty = 100 * parentData1.length;
      // } else {
      //   stampDuty = 0.05 * parentData1.length;
      // }

      finalPre = this.globalFun.calculateDecimal(finalPre);
      this.premiumAmt =
        this.numberPipe.transform(finalPre, '1.2-2') + ' ' + currency;

      // if(this.prodService.totalPremium){
      //   this.premiumAmt =
      //   this.numberPipe.transform(this.prodService.totalPremium, '1.2-2') + ' ' + currency;
      // }

      this.globalFun.paPremiumResult.next(this.premiumAmt);
      console.log('precent =====> ', precent);

      return finalPre;
    }


  }

  calculateDaysToMonth(days) {
    let rate: any;
    let divided = days / 31;
    if (divided > 0 && divided <= 1) {
      rate = 2 / 8;
    } else if (divided > 1 && divided <= 2) {
      rate = 3 / 8;
    } else if (divided > 2 && divided <= 3) {
      rate = 4 / 8;
    } else if (divided > 3 && divided <= 4) {
      rate = 5 / 8;
    } else if (divided > 3 && divided <= 5) {
      rate = 6 / 8;
    } else if (divided > 5 && divided <= 6) {
      rate = 6 / 8;
    } else {
      rate = 1;
    }
    return rate;
  }

  async savePremimunFire() {
    await this.calculateFireTotalPremiumAmount();

    let postData = {
      premium: (Number(this.premiumAmt.split(' ')[0].split(',').join('')) || 0) + '',
      premiumView: this.premiumAmt,
      sumInsureView: this.totalSI,
      sumInsure: (Number(this.totalSI.split(' ')[0].split(',').join('')) || 0) + '',
      resourceId: this.resourcesId,
      type: 'policy',
    };
    console.log('updatePremimun', postData);
    this.pageDataService.updatePremimun(postData).toPromise().then((res) => {

    });
  }

  async calculateFireTotalPremiumAmount() {
    let totalPremium: any = 0;
    let totalSI: any = 0
    let totalAddOnPremium: any = 0
    let parentData1 = this.globalFun.tempFormData[FireRiskID];
    let parentData2 = this.globalFun.tempFormData[FirePageID];
    for (var i = 0; i < parentData1.length; i++) {
      
      let totalPremiumNotStampDuty: any = 0;
      totalPremium += parseFloat(parentData1[i].premium);
      if (parentData1[i].riskSi) {
        totalSI += parseFloat(parentData1[i].riskSi);
        
      }
      else if (parentData1[i].sumInsure) {
        totalSI += parseFloat(parentData1[i].sumInsure);
       }
      let reqBody = {
        addOnIds: this.product.addOns.map(x => { return x.id }),
        optionalKey: parentData1[i].id || '',
        quotationNo: parentData1[i].resourceId || ''
      }
      let results: any = await this.addOnQuoService.getAllById(reqBody).toPromise()
      if (results.length > 0) {
        for (var j = 0; j < results.length; j++) {
          totalAddOnPremium += parseFloat(results[j].premium);
          totalPremiumNotStampDuty += parseFloat(results[j].premium);
        }
      }
      parentData1[i].totalPremiumNotStampDuty = parseFloat(parentData1[i].premium) + totalPremiumNotStampDuty;
    }

    let currency = parentData2.currency;
    let stampDuty = 0;
    if (currency == 'MMK') {
      stampDuty = 100 * parentData1.length;
    } else {
      stampDuty = 0.05 * parentData1.length;
    }
    this.listData = parentData1;

    let finalPre = this.globalFun.calculateDecimal(totalPremium + totalAddOnPremium) + stampDuty;
    let finalSi = totalSI
    this.totalSI = this.numberPipe.transform(finalSi, '1.2-2') + ' ' + currency;
    this.premiumAmt = this.numberPipe.transform(finalPre, '1.2-2') + ' ' + currency;
    this.globalFun.paPremiumResult.next(this.premiumAmt || "0")
  }



}
