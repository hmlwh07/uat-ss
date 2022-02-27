import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { forkJoin, Observable, of } from 'rxjs';
import { map, retry, switchMap } from 'rxjs/operators';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { IsJsonString } from '../../../core/is-json';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product, ProductPages } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { EduPremRateService, EduSurrRateService } from '../../static-pages/education-life/models&services/education-life-rate.service';
import { EduPaymentService } from '../../static-pages/education-life/models&services/education-life.service';
import { EndoService } from '../../static-pages/endo/models&services/endo.service';
import { StaticPageAction } from '../../static-pages/static-field.interface';

@Component({
  selector: 'app-endo-print',
  templateUrl: './endo-print.component.html',
  styleUrls: ['./endo-print.component.scss']
})
export class EndoPrintComponent implements OnInit {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  parentData: any
  premimuRate = {
    "9opt": 5,
    "11opt": 7,
    "14opt": 10,
  }
  frequency = {
    monthly: 1,
    quatarly: 4,
    semi_annually: 6,
    annually: 12,
  }
  lists: number[] = []
  currentAge: number
  premimuRateNum: number
  sumInsured: number
  frequencyValue: number
  plan: string
  policyTermCode: string
  premiumRate: any[] = []
  surrendRate: any[] = []
  showDatas: any[] = []
  constructor(
    private eduPayment: EndoService,
    private cdf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.createListData()
  }

  createListData() {
    this.eduPayment.getMany(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.showDatas = res
        this.cdf.detectChanges()
      }
    })
  }


}
