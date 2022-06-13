import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateAdapter } from 'angular-calendar';
import * as moment from 'moment';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MY_FORMATS } from '../../../core/is-json';
import { environment } from 'src/environments/environment';
import { defaultAccessObj, MenuDataService } from '../../../core/menu-data.service';
import { MaterialTableViewComponent } from '../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CustomerService } from '../../customer-detail/customer.service';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { ProductsComponent } from '../../products/products.component';
import { ProductDataService } from '../../products/services/products-data.service';
import { CommonList2Component } from '../../share-components/common-list/common-list.component';
import { PolicyDTO } from '../policy.dto';
import { PolicyService } from '../policy.service';
import { PolicyDisplayCol, PolicyCol } from './policy.const';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class PolicyComponent implements OnInit, OnDestroy {
  quoList: PolicyDTO[] = []
  policyForm: FormGroup
  isTeam: boolean = false
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  @ViewChild(CommonList2Component) commonList: CommonList2Component;
  policyAccess = defaultAccessObj;
  Default_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader`;

  constructor(private modalService: NgbModal, private prodctService: ProductDataService, private router: Router, private policyService: PolicyService, private cdRef: ChangeDetectorRef, private customerService: CustomerService, private menuService: MenuDataService) {
    this.loadForm()
  }


  ELEMENT_COL = JSON.parse(JSON.stringify(PolicyCol))
  displayedColumns = PolicyDisplayCol
  ngOnInit(): void {
    this.checkPremission()
    this.getPolicyList()

    // })
  }
  loadForm() {
    let date = new Date();
    let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1))
    let monthDay = new Date(date.setMonth(date.getMonth() + 1))
    this.policyForm = new FormGroup({
      startDate: new FormControl(lastMonthDay),
      endDate: new FormControl(monthDay),
      isTeam: new FormControl(this.isTeam)
    })
  }
  ngOnDestroy() {
    // this.rerender()
  }
  cancel() {

  }
  changeView(type) {
    if (type == 'team') {
      this.isTeam = true
    }
    else {
      this.isTeam = false

    }
    this.policyForm.controls.isTeam.setValue(this.isTeam)
    this.cdRef.detectChanges()
    this.getPolicyList()
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
    this.policyService.getPolicyList(this.policyForm.getRawValue()).toPromise().then((res: any) => {
      if (res) {
        console.log(res);
        
        this.quoList = res
        for (var i = 0; i < this.quoList.length; i++) {
          if (this.quoList[i].icon) {
            this.quoList[i].productImage = this.Default_DOWNLOAD_URL + '/' + this.quoList[i].icon
          }
        }
        this.cdRef.detectChanges()
        if (this.commonList) {
          this.commonList.detchChange()
        }
        //this.matTable.reChangeData()
        // })
      }
    })
  }

  editLayout(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
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
