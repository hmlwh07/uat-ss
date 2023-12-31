import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { MaterialTableViewComponent } from "src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component";
import { LeadCol, LeadDisplayCol } from "./lead-list.const";
import { LeadListService } from "./lead-list.service";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { MasterDataService } from "../../modules/master-data/master-data.service";
import { ProductDataService } from "../products/services/products-data.service";
import { MY_FORMATS } from "../../core/is-json";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerListComponent } from "../customer-list/customer-list.component";
import { catchError, map } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { LanguagesService } from "src/app/modules/languages/languages.service";
import { CommonList2Component } from "../share-components/common-list/common-list.component";
import { AlertService } from "src/app/modules/loading-toast/alert-model/alert.service";
import { LeadNewComponent } from "../lead-new/lead-new.component";
@Component({
  selector: "app-lead-list",
  templateUrl: "./lead-list.component.html",
  styleUrls: ["./lead-list.component.scss"],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})

export class LeadListComponent implements OnInit {
  @ViewChild(CommonList2Component) commonList: CommonList2Component;
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;

  ELEMENT_COL = JSON.parse(JSON.stringify(LeadCol));
  displayedColumns = JSON.parse(JSON.stringify(LeadDisplayCol));

  LeadList: any[] = [];
  totalElements: number = 0
  totalPages: number = 0
  selectedPageBtn: number = 1
  LeadForm: FormGroup;
  isTableView: boolean = true
  @Output() selectedUser = new EventEmitter();
  @Input() isPopup: boolean = false;
  show: boolean = false
  statusOption: any[] = []
  sourceOption: any[] = []
  productOption: any[] = []
  postedData: any
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader`;
  currentPage: number = 0
  constructor(
    private router: Router,
    private cdf: ChangeDetectorRef,
    private LeadListService: LeadListService,
    private masterDataService: MasterDataService,
    private productService: ProductDataService,
    private modalService: NgbModal,
    private translate: LanguagesService,
    private alertService: AlertService
  ) {
    this.loadForm();
  }
  ngOnInit(): void {
    this.show = true
  }
  ngAfterViewInit() {
    this.getMaster()
    this.getList();
  }
  getMaster() {
    forkJoin([
      this.getStatus(),
      this.getSource(),
      this.getProduct(),
    ]).toPromise().then((res: any) => {
      if (res) {
        this.statusOption = res[0]
        this.sourceOption = res[1]
        this.productOption = res[2]
        this.cdf.detectChanges()
      }
    })
  }
  loadForm() {
    this.LeadForm = new FormGroup({
      campaignName: new FormControl(null),
      existingCustomerId: new FormControl(null),
      existingCustomerName: new FormControl({ value: null, disabled: true }),
      contactName: new FormControl(null),
      leadId: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      expiredStart: new FormControl(null),
      expiredEnd: new FormControl(null),
      productId: new FormControl(null),
      sourceCode: new FormControl(null),
      statusCode: new FormControl(null),
    });
  }

  navigateToDetail(data, id?: string, secondaryId?: string) {

    this.router.navigate(["/lead/lead-detail"], {
      queryParams: {
        pageStatus: data,
        pageId: id,
        pageSecondaryId: secondaryId,
        leadId: id,
      },
      // skipLocationChange: true, replaceUrl: true
    });
  }

  navigateToNew() {
    this.router.navigate(["/lead/lead-new"])
  }

  getStatus() {
    return this.masterDataService
      .getDataByType("LEAD_STATUS").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
        return of([])
      }))
    // this.masterDataService
    //   .getDataByType("LEAD_STATUS")
    //   .toPromise()
    //   .then((res: any) => {
    //     console.log(res);
    //     if (res) {
    //       this.statusOption = res.map((x) => {
    //         return { code: x.codeId, value: x.codeName };
    //       });
    //       console.log(this.statusOption);
    //       this.cdf.detectChanges();
    //     }
    //   });


  }

  updateURL(event: any) {
    if (event) {
      event.target.src = "assets/icon/general_product.svg"
    }
  }
  getSource() {

    return this.masterDataService
      .getDataByType("LEAD_SOURCE").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
        return of([])
      }))
    // this.masterDataService
    //   .getDataByType("LEAD_SOURCE")
    //   .toPromise()
    //   .then((res: any) => {
    //     console.log(res);
    //     if (res) {
    //       this.sourceOption = res.map((x) => {
    //         return { code: x.codeId, value: x.codeName };
    //       });
    //       console.log(this.sourceOption);
    //       this.cdf.detectChanges();
    //     }
    //   });
  }
  getProduct() {
    return this.productService.getAll('yes').pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
    // this.productService
    //   .getAll()
    //   .toPromise()
    //   .then((res: any) => {
    //     console.log(res);
    //     if (res) {
    //       this.productOption = res.map((x) => {
    //         return { code: x.id, value: x.name };
    //       });
    //       console.log(this.productOption);
    //       this.cdf.detectChanges();
    //     }
    //   });
  }
  reponseFromPager(event) {
    // console.log("LEADEVENT", event);
    this.currentPage = event
    this.getDatabyPage(this.currentPage)
  }

  getList(limit: number = 5, offset: number = 1) {
    let postData = { ...this.LeadForm.getRawValue(), limit: 5, offset: offset }
    this.postedData = postData
    this.LeadListService.getLeadList(this.postedData)
      .toPromise()
      .then((res: any) => {
        if (res) {
          // console.log("RES", res)
          this.LeadList = res.content
          this.totalElements = res.totalElements
          this.totalPages = res.totalPages
          this.selectedPageBtn = this.currentPage
          this.cdf.detectChanges();
          this.commonList.detchChangePagination()
        }
      });
  }

  async getDatabyPage(page) {
    this.currentPage = page
    let postData = { ...this.LeadForm.getRawValue(), limit: 5, offset: page }
    this.totalPages = 0
    this.postedData = postData
    await this.LeadListService.getLeadList(this.postedData).toPromise().then((res: any) => {
      if(res){
        this.LeadList = res.content
        this.totalElements = res.totalElements
        this.totalPages = res.totalPages
        this.selectedPageBtn = this.currentPage
        this.cdf.detectChanges();
      }
    })
  }
  getFormatOpt(res) {
    return res.map(x => {
      return { 'code': x.codeId || x.id, 'value': (x.codeName || x.codeValue) || x.name }
    })
  }
  get selected() {
    let user;
    if (this.matTable) {
      user = this.matTable.selection.selected[0];
    }
    return user ? user : { id: 0 };
  }

  rowSelected(event) {
    this.selectedUser.emit(event);
  }

  cancel() {
    this.LeadForm.reset();
    this.getList();
  }

  actionBtn(event) {
    if (event.cmd == "edit") {
      this.navigateToDetail("edit", event.data.leadId, event.data.individualId);
    }
    if (event.cmd == "view") {
      this.navigateToDetail("view", event.data.leadId, event.data.individualId);
    }
  }
  onActionEdit() {

  }
  clearDate(key) {
    this.LeadForm.controls[key].setValue(null)
    if (key == 'existingCustomerName') {
      this.LeadForm.controls[key].setValue(null)
      this.LeadForm.controls['existingCustomerId'].setValue(null)

    }
  }

  viewExistingCustomer() {
    let modalRef;
    modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.isPopup = true
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == "save") {
          let customer = res.data
          // console.log('onDidDismiss =====> ', customer);
          this.LeadForm.controls.existingCustomerId.setValue(customer.customerId)
          this.LeadForm.controls.existingCustomerName.setValue(customer.name)
        }
      }
    })
  }

  addData() {
    // console.log("addData")
    const modalRef = this.modalService.open(LeadNewComponent, { size: 'lg', backdrop: false });
    modalRef.componentInstance.isModal = true
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.cmd == 'save') {
          this.saveData(res.data)
        }
      }
    })
  }

  saveData(event: any) {
    let postData = event
    // this.LeadListService.save(postData).toPromise().then((res: any) => {
    //   if (res) {
    //     this.getList()
    //     this.alertService.activate('This record was created', 'Success Message');
    //   }
    // })
  }

  //for view
  isControlValid(controlName: string): boolean {
    const control = this.LeadForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.LeadForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.LeadForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.LeadForm.controls[controlName];
    return control.dirty || control.touched;
  }

  reponseFromListing(event) {
    // console.log('event', event)
  }
}
