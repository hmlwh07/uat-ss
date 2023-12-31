import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateAdapter } from 'angular-calendar';
import moment from 'moment';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MY_FORMATS } from '../../../core/is-json';
import { environment } from 'src/environments/environment';
import { defaultAccessObj, MenuDataService } from '../../../core/menu-data.service';
import { MaterialTableViewComponent } from '../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CustomerDetailService, CustomerService } from '../../customer-detail/customer.service';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { ProductsComponent } from '../../products/products.component';
import { ProductDataService } from '../../products/services/products-data.service';
import { CommonList2Component } from '../../share-components/common-list/common-list.component';
import { QuotationDTO } from '../quotation.dto';
import { QuotationService } from '../quotation.service';
import { QuoDisplayCol, QuotationCol } from './quotation.const';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';
import { AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class QuotationsComponent implements OnInit, OnDestroy {
  quoList: QuotationDTO[] = []
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  @ViewChild(CommonList2Component) commonList: CommonList2Component;

  quoAccess = defaultAccessObj
  policyAccess = defaultAccessObj
  quotationForm: FormGroup
  isTeam: boolean = false
  product: any = []
  productOption: any = []
  user: any;
  Default_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader`;
  constructor(private modalService: NgbModal, private authService: AuthService, private cdf: ChangeDetectorRef, private prodctService: ProductDataService, private router: Router, private quoService: QuotationService, private cdRef: ChangeDetectorRef, private customerService: CustomerDetailService, private menuService: MenuDataService, private encryption: EncryptService) {
    this.loadForm()
  }


  ELEMENT_COL = JSON.parse(JSON.stringify(QuotationCol))
  displayedColumns = JSON.parse(JSON.stringify(QuoDisplayCol))
  ngOnInit(): void {
    this.checkPremission()
    this.getQuoList()
    this.getProduct()
    // })
  }
  ngAfterViewInit() {
    this.user = this.authService.currentUserValue;
  }
  loadForm() {
    let date = new Date();
    let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1))
    let monthDay = new Date(date.setMonth(date.getMonth() + 1))
    this.quotationForm = new FormGroup({
      startDate: new FormControl(lastMonthDay),
      endDate: new FormControl(monthDay),
      isTeam: new FormControl(this.isTeam),
      productId: new FormControl(null),
      policyholderName: new FormControl(null),
      applicationId: new FormControl(null),
    })
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
  cancel() {
    this.quotationForm.reset()
    this.getQuoList()
  }
  getProduct() {
    this.prodctService
      .getAll('yes')
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.product = res;
          this.productOption = res.map((x) => {
            return { code: x.id, value: x.name, type: x.type };
          });
          this.cdf.detectChanges();
          // this.getProductOption()
        }
      });
  }

  clear(key) {
    if (key == 'productId') {
      this.quotationForm.controls[key].setValue(null)
    }
  }
  changeView(type) {
    if (type == 'team') {
      this.isTeam = true
    }
    else {
      this.isTeam = false

    }
    this.quotationForm.controls.isTeam.setValue(this.isTeam)
    this.cdRef.detectChanges()
    this.getQuoList()
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
    this.quoService.getQuoList(this.quotationForm.getRawValue()).toPromise().then((res: any) => {
      if (res) {
        this.quoList = res
        for (var i = 0; i < this.quoList.length; i++) {
          if (this.quoList[i].icon) {
            this.quoList[i].icon = this.encryption.encryptData(this.quoList[i].icon)
            this.quoList[i].productImage = this.Default_DOWNLOAD_URL + '?id=' + this.quoList[i].icon
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
      if (res) {
        this.prodctService.createingProd = res[0]
        this.prodctService.creatingCustomer = res[1]
        this.prodctService.type = 'quotation'
        this.prodctService.viewType = 'quotation'
        this.prodctService.editData = item
        this.prodctService.referenceID = null
        this.prodctService.creatingLeadId = item.leadId
        this.prodctService.isApplication = false
        this.router.navigateByUrl("/product-form")
      }
    })

  }

  FormatedDate(date) {
    return moment(date, "YYYYMMDD").format('MM/DD/YYYY');
  }

  actionBtn(event: any) {
    console.log(event);

    if (event.cmd == 'view') {
      this.goViewDetail(event.data)
    } else if (event.cmd == 'edit') {
      this.editLayout(event.data)
    } else if (event.cmd == 'goApp') {
      this.goToApp(event.data)
    }
    else if (event.cmd == 'create') {
      this.createPolicy(event.data)
    }
  }

  goViewDetail(item) {
    this.prodctService.findOne(item.productId).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProd = res
        this.prodctService.editData = item
        this.prodctService.isApplication = false
        this.prodctService.previewType = 'quotation'
        this.prodctService.isFromLead = false
        this.router.navigateByUrl("/resourse-detail")
      }
    })
  }

  createPolicy(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProdRef = res[0]
        this.prodctService.creatingCustomer = res[1]
        this.prodctService.viewType = 'policy'
        this.prodctService.type = 'policy'
        this.prodctService.referenceID = item.id
        this.prodctService.editData = null
        this.prodctService.creatingLeadId = item.leadId
        this.prodctService.isApplication = false
        this.router.navigateByUrl("/product-form")
      }
    })
    console.log("this.prodctService.referenceID:", this.prodctService.referenceID);


  }
  createQuo() {
    const modalRef = this.modalService.open(ProductsComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.type = 'modal'
    modalRef.componentInstance.isShowList = 'yes'
    modalRef.result.then(() => { }, (prod) => {
      if (prod) {
        if (prod.type == 'save') {
          // let customerId = this.user.id
          // this.customerService.findOne(customerId).toPromise().then((res) => {
          this.prodctService.creatingCustomer = null
          this.prodctService.createingProd = prod.data
          this.prodctService.creatingLeadId = ""
          this.prodctService.editData = null
          this.prodctService.referenceID = null
          this.prodctService.isApplication = false
          this.prodctService.isFromLead = false
          this.prodctService.viewType = 'quotation'
          this.prodctService.type = 'quotation'
          this.router.navigateByUrl("/product-form")
          // })

        }
      }
    })
  }
  goToApp(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProdRef = res[0]
        this.prodctService.creatingCustomer = res[1]
        this.prodctService.viewType = 'policy'
        this.prodctService.type = 'policy'
        this.prodctService.referenceID = item.id
        this.prodctService.referenceStatus = item.status
        this.prodctService.creatingLeadId = item.leadId
        this.prodctService.editData = null
        this.prodctService.isApplication = true
            this.prodctService.isFromLead = false
        this.router.navigateByUrl("/product-form")
      }
    })
  }


}
