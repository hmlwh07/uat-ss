import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateAdapter } from 'angular-calendar';
import moment from 'moment';
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MY_FORMATS } from '../../../core/is-json';
import { environment } from 'src/environments/environment';
import { defaultAccessObj, MenuDataService } from '../../../core/menu-data.service';
import { MaterialTableViewComponent } from '../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CustomerDetailService, CustomerService } from '../../customer-detail/customer.service';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { ProductsComponent } from '../../products/products.component';
import { ProductDataService } from '../../products/services/products-data.service';
import { CommonList2Component } from '../../share-components/common-list/common-list.component';
import { PolicyDTO } from '../policy.dto';
import { PolicyService } from '../policy.service';
import { PolicyDisplayCol, PolicyCol, ApplicationStatus } from './policy.const';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';

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
  product: any = []
  productOption: any = []
  applicationStatusOption: any = ApplicationStatus
  Default_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader`;
  currentPage: number = 0
  totalPages: number = 0
  totalElements: number = 0
  postedData: any
  isTcs: boolean = false
  selectedPageBtn: number = 1
  constructor(private modalService: NgbModal, private policyHolderService: PolicyHolderService, private alert: AlertService, private prodctService: ProductDataService, private router: Router, private policyService: PolicyService, private cdRef: ChangeDetectorRef, private customerService: CustomerDetailService, private menuService: MenuDataService, private cdf: ChangeDetectorRef, private encryption: EncryptService) {
    this.loadForm()
  }


  ELEMENT_COL = JSON.parse(JSON.stringify(PolicyCol))
  displayedColumns = PolicyDisplayCol
  ngOnInit(): void {
    this.checkPremission()
    this.getPolicyList()
    this.getProduct()
    // })
  }
  loadForm() {
    let date = new Date();
    let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1))
    let monthDay = new Date(date.setMonth(date.getMonth() + 1))
    this.policyForm = new FormGroup({
      startDate: new FormControl(lastMonthDay),
      endDate: new FormControl(monthDay),
      isTeam: new FormControl(null),
      productId: new FormControl(null),
      policyholderName: new FormControl(null),
      applicationId: new FormControl(null),
      quotationId: new FormControl(null),
      applicationStatus: new FormControl(null),
      //productName: new FormControl(this.productName)
    })
  }
  ngOnDestroy() {
    // this.rerender()
  }
  cancel() {
    this.policyForm.reset()
    this.getPolicyList()
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
  reponseFromPager(event) {
    // console.log("POLICYEVENT", event);
    this.currentPage = event
    this.getDatabyPage(this.currentPage)
  }

  async getPolicyList(offset: number = 1) {
    let postData = { ...this.policyForm.getRawValue(), limit: 5, offset: offset }
    this.postedData = postData


    this.policyService.getPolicyList(this.postedData).toPromise().then((res: any) => {
      if (res) {
        // console.log(res);

        this.quoList = res.content
        this.totalElements = res.totalElements
        this.totalPages = res.totalPages
        this.selectedPageBtn = this.currentPage
        for (var i = 0; i < this.quoList.length; i++) {
          if (this.quoList[i].icon) {
            this.quoList[i].icon = this.encryption.encryptData(this.quoList[i].icon)
            this.quoList[i].productImage = this.Default_DOWNLOAD_URL + '?id=' + this.quoList[i].icon
          }
          // if (this.quoList[i].submittedCode != null) {
          //   this.quoList[i].tcsStatus =  this.getTCSStatus(this.quoList[i].submittedCode)
          // }
        }

      }

      this.cdRef.detectChanges()
      this.commonList.detchChangePagination()

    })
  }
  async getTCSStatus(quoNumber) {
    if (quoNumber != null) {
      await this.policyService.getPolicyList(quoNumber).toPromise().then((res: any) => {
        if (res) {
          console.log(res);
          return res.datum.policyStatusDesc
        }
      })
    } else {

    }
  }


  async getDatabyPage(page) {
    this.currentPage = page
    let postData = { ...this.policyForm.getRawValue(), limit: 5, offset: page }
    this.totalPages = 0
    this.postedData = postData
    await this.policyService.getPolicyList(this.postedData).toPromise().then((res: any) => {
      if (res) {
        // console.log(res);
        this.quoList = res.content
        this.totalElements = res.totalElements
        this.totalPages = res.totalPages
        this.selectedPageBtn = this.currentPage
        for (var i = 0; i < this.quoList.length; i++) {
          if (this.quoList[i].icon) {
            this.quoList[i].icon = this.encryption.encryptData(this.quoList[i].icon)
            this.quoList[i].productImage = this.Default_DOWNLOAD_URL + '?id=' + this.quoList[i].icon
          }
          // if (this.quoList[i].submittedCode != null) {
          //   this.quoList[i].tcsStatus =  this.getTCSStatus(this.quoList[i].submittedCode)
          // }
        }
        this.cdf.detectChanges();
        this.commonList.detechStartEnd();
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
        this.prodctService.isApplication = true
        this.prodctService.referenceID = item.quotationId
        this.prodctService.creatingLeadId = item.leadId
        this.router.navigateByUrl("/product-form")
      }
    })
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
      this.policyForm.controls[key].setValue(null)
    }
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
    else if (event.cmd == 'resend') {
      this.policyService.getEmailInfo(event.data.branchCode, event.data.productCode).toPromise().then((emailRes: any) => {
        console.log(emailRes);
        if (emailRes) {
          this.getMasterValue(
            event.data.branchCode, event.data.sourceOfBusiness, event.data.productCode
          ).toPromise().then((res: any) => {
            console.log("RES", res);
            event.data.branchCode = res['CORE_BRANCH']
            event.data.sourceOfBusiness = res['PRODUCT_SOB']
            let reqValue = {
              quotationNo: event.data.submittedCode,
              productName: event.data.productName,
              branchCode: event.data.branchCode,
              resourceId: event.data.id,
              emailTo: emailRes.emailTo,
              emailCC: emailRes.emailCC,
              sourceOfBusiness: event.data.sourceOfBusiness,
            }
            this.policyService.resendEmail(reqValue).toPromise().then((res) => {
              console.log(res);
              if (res) {
                this.getPolicyList()
              }
            })
          })
        } else {
          this.alert.activate('There is no Email to Send', 'Warning')
        }

      })

    }
  }

  getMasterValue(codeId: string, sourceOfBusiness, productCode?) {
    let data = {
      "codeBookRequest": [
        {
          "codeId": codeId,
          "codeType": "CORE_BRANCH",
          "langCd": "EN"
        },
        {
          "codeId": productCode + ('-') + sourceOfBusiness,
          "codeType": "PRODUCT_SOB",
          "langCd": "EN"
        },
      ]
    }
    return this.policyHolderService.getMasterDataSale(data)
  }
  goViewDetail(item) {
    this.prodctService.findOne(item.productId).toPromise().then((res) => {
      console.log("ITEM", item);

      if (res) {
        this.prodctService.createingProd = res
        this.prodctService.previewType = 'policy'
        this.prodctService.editData = item
        this.prodctService.isApplication = true
        this.router.navigateByUrl("/resourse-detail")
      }
    })
  }


}
