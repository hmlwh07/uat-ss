import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { defaultAccessObj, MenuDataService } from '../../../core/menu-data.service';
import { MaterialTableViewComponent } from '../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CustomerService } from '../../customer-detail/customer.service';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { ProductsComponent } from '../../products/products.component';
import { ProductDataService } from '../../products/services/products-data.service';
import { PolicyDTO } from '../policy.dto';
import { PolicyService } from '../policy.service';
import { PolicyDisplayCol, PolicyCol } from './policy.const';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent implements OnInit, OnDestroy {
  quoList: PolicyDTO[] = []
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  policyAccess = defaultAccessObj;
  Default_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader`;
  
  constructor(private modalService: NgbModal, private prodctService: ProductDataService, private router: Router, private policyService: PolicyService, private cdRef: ChangeDetectorRef, private customerService: CustomerService,private menuService: MenuDataService) {
  }


  ELEMENT_COL = JSON.parse(JSON.stringify(PolicyCol))
  displayedColumns = PolicyDisplayCol
  ngOnInit(): void {
    this.checkPremission()
    this.getPolicyList()

    // })
  }
  ngOnDestroy() {
    // this.rerender()
  }

  checkPremission() {
    this.menuService.dataAccess.subscribe((res) => {
      if (res) {
        this.policyAccess = res['application']
        if (!this.policyAccess.edit) {
          this.ELEMENT_COL[8].btn.edit = false
        }
      }
    })
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
          this.prodctService.creatingCustomer = res.data
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
        console.log('getPolicyList', res);

        this.quoList = res
        for (var i = 0; i < this.quoList.length; i++) {
          if (this.quoList[i].icon) {
            this.quoList[i].productImage = this.Default_DOWNLOAD_URL + '/' + this.quoList[i].icon
          }
        }
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
