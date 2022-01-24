import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MaterialTableViewComponent } from '../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CustomerService } from '../../customer-detail/customer.service';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { ProductsComponent } from '../../products/products.component';
import { ProductDataService } from '../../products/services/products-data.service';
import { PolicyService } from '../../quotations/policy.service';
import { PolicyDTO } from '../policy.dto';
import { PolicyDisplayCol, PolicyCol } from './policy.const';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent implements OnInit, OnDestroy {
  quoList: PolicyDTO[] = []
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  constructor(private modalService: NgbModal, private prodctService: ProductDataService, private router: Router, private policyService: PolicyService, private cdRef: ChangeDetectorRef, private customerService: CustomerService) {
  }


  ELEMENT_COL = PolicyCol
  displayedColumns = PolicyDisplayCol
  ngOnInit(): void {

    this.getPolicyList()

    // })
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
          this.prodctService.creatingCustomer = res
          this.prodctService.createingProd = prod.data
          this.prodctService.editData = null
          this.prodctService.referenceID = null
          this.prodctService.viewType = 'policy'
          this.prodctService.type = 'policy'
          this.router.navigateByUrl("/product-form")
        }
      }
    })
  }


  getPolicyList() {
    this.policyService.findAll().toPromise().then((res) => {
      if (res) {
        this.quoList = res
        this.cdRef.detectChanges()
        this.matTable.reChangeData()
        // })
      }
    })
  }

  editLayout(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe(catchError(e => { return of(undefined)}))]).toPromise().then((res) => {
      if (res[0]) {
        this.prodctService.createingProd = res[0]
        this.prodctService.creatingCustomer = res[1]
        this.prodctService.type = 'policy'
        this.prodctService.viewType = 'policy'
        this.prodctService.editData = item
        this.prodctService.referenceID = item.quotationId
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
    }
  }

  goViewDetail(item) {
    this.prodctService.findOne(item.productId).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProd = res
        this.prodctService.previewType = 'policy'
        this.prodctService.editData = item
        this.router.navigateByUrl("/resourse-detail")
      }
    })
  }


}
