import { DatePipe, DecimalPipe, Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttachmentDownloadService } from '../../_metronic/core/services/attachment-data.service';
import { checkVaidDep } from '../check-parent';
import { ConfigInput, ConfigPage, FromGroupData, OptionValue } from '../form-component/field.interface';
import { PageDataService } from '../product-form/page-data.service';
import { PrintConfig } from '../products/models/print-config.interface';
import { PageUIType, ProductPages } from '../products/models/product.dto';
import { PrintPreviewModalComponent } from '../products/print-preview-modal/print-preview-modal.component';
import { AddOnQuoService } from '../products/services/add-on-quo.service';
import { CoverageQuoService } from '../products/services/coverage-quo.service';
import { ProductDataService } from '../products/services/products-data.service';

@Component({
  selector: 'app-senior-lp-dashboard',
  templateUrl: './senior-lp-dashboard.component.html',
  styleUrls: ['./senior-lp-dashboard.component.scss']
})
export class SeniorLpDashboardComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductDataService, private location: Location, private pageDataService: PageDataService, private addonQuo: AddOnQuoService, private coverageQuo: CoverageQuoService, private router: Router, private cdf: ChangeDetectorRef, private downloadService: AttachmentDownloadService, private numberPipe: DecimalPipe, private datePipe: DatePipe, private modalService: NgbModal) { }

  async ngOnInit() {
  }

  ngOnDestroy() {
  }
}
