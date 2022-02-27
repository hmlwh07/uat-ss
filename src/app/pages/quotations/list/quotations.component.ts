import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { defaultAccessObj, MenuDataService } from '../../../core/menu-data.service';
import { MaterialTableViewComponent } from '../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CustomerService } from '../../customer-detail/customer.service';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { ProductsComponent } from '../../products/products.component';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../quotation.dto';
import { QuotationService } from '../quotation.service';
import { QuoDisplayCol, QuotationCol } from './quotation.const';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss'],
})
export class QuotationsComponent implements OnInit, OnDestroy {
  quoList: QuotationDTO[] = []
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  quoAccess = defaultAccessObj
  policyAccess = defaultAccessObj
  constructor(private modalService: NgbModal, private prodctService: ProductDataService, private router: Router, private quoService: QuotationService, private cdRef: ChangeDetectorRef, private customerService: CustomerService, private menuService: MenuDataService) {
  }


  ELEMENT_COL = JSON.parse(JSON.stringify(QuotationCol))
  displayedColumns = JSON.parse(JSON.stringify(QuoDisplayCol))
  ngOnInit(): void {
    this.checkPremission()
    this.getQuoList()

    // })
  }
  checkPremission() {
    this.menuService.dataAccess.subscribe((res) => {
      if (res) {
        this.quoAccess = res['quotation']
        this.policyAccess = res['application']
        if (!this.quoAccess.edit) {
          this.ELEMENT_COL[8].btn.edit = false
        }
        if (!this.policyAccess.create) {
          this.ELEMENT_COL.splice(7, 1)
          this.displayedColumns.splice(7, 1)
        }
      }
    })
  }
  ngOnDestroy() {
    // this.rerender()
  }

  createOrEdit() {
    const modalRef = this.modalService.open(ProductsComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.type = 'modal'
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.chooseCustomer(res)
        }
      }
    })
  }

  chooseCustomer(prod: any) {
    const modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.isPopup = true
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.prodctService.createingProd = prod.data
          this.prodctService.creatingCustomer = res.data
          this.prodctService.viewType = 'quotation'
          this.prodctService.editData = null
          this.prodctService.referenceID = null
          this.prodctService.type = 'quotation'
          this.router.navigateByUrl("/product-form")
        }
      }
    })
  }


  getQuoList() {
    this.quoService.findAll().toPromise().then((res) => {
      if (res) {
        this.quoList = res
        this.cdRef.detectChanges()
        this.matTable.reChangeData()
        // })
      }
    })
  }

  editLayout(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProd = res[0]
        this.prodctService.creatingCustomer = res[1]
        this.prodctService.type = 'quotation'
        this.prodctService.viewType = 'quotation'
        this.prodctService.editData = item
        this.prodctService.referenceID = null
        this.prodctService.creatingLeadId = item.leadId
        this.router.navigateByUrl("/product-form")
      }
    })
  }

  FormatedDate(date) {
    return moment(date, "YYYYMMDD").format('MM/DD/YYYY');
  }

  actionBtn(event: any) {

    if (event.cmd == 'view') {
      this.goViewDetail(event.data)
    } else if (event.cmd == 'edit') {
      this.editLayout(event.data)
    } else if (event.cmd == 'create') {
      this.createPolicy(event.data)
    }
  }

  goViewDetail(item) {
    this.prodctService.findOne(item.productId).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProd = res
        this.prodctService.editData = item
        this.prodctService.previewType = 'quotation'
        this.router.navigateByUrl("/resourse-detail")
      }
    })
  }

  createPolicy(item) {
    this.prodctService.findOne(item.productId).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProdRef = res
        this.prodctService.viewType = 'policy'
        this.prodctService.type = 'policy'
        this.prodctService.referenceID = item.id
        this.prodctService.editData = null
        this.router.navigateByUrl("/product-form")
      }
    })
  }


}
