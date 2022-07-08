import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CustomerCol, CustomerDisplayCol, IdentityType, Status } from './customer-list.const';
import { CustomerListService } from './customer-list.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../core/is-json';
import { CommonList2Component } from '../share-components/common-list/common-list.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class CustomerListComponent implements OnInit {
  @ViewChild(CommonList2Component) commonList: CommonList2Component;
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent

  ELEMENT_COL = JSON.parse(JSON.stringify(CustomerCol))
  displayedColumns = JSON.parse(JSON.stringify(CustomerDisplayCol))

  customerList: any[] = [];
  totalElements: number = 0
  totalPages: number = 0
  selectedPageBtn: number = 1
  currentPage: number = 1
  postedData: any = {}
  statusOption = Status;
  statusCustomOption = [{
    code: "A",
    value: "Active"
  }]
  identityTypeOption = IdentityType;

  customerForm: FormGroup;
  @Output() selectedUser = new EventEmitter();
  @Input() isPopup: boolean = false
  @Input() party: boolean = true
  @Input() isDynamic: boolean = false
  @Input() isCustom: boolean = false
  show: boolean = false
  constructor(
    private router: Router,
    private cdf: ChangeDetectorRef,
    private customerListService: CustomerListService,
    private modalService: NgbModal
  ) {
    this.loadForm();
  }

  ngOnInit(): void {
    if (this.isPopup) {
      this.ELEMENT_COL.splice(9, 1)
      this.displayedColumns.splice(9, 1)
    }
    this.show = true
  }

  ngAfterViewInit() {

    this.cancel()
  }

  loadForm() {
    this.customerForm = new FormGroup({
      "name": new FormControl(null),
      "phoneNo": new FormControl(null),
      "identityType": new FormControl(null),
      "identityNumber": new FormControl(null),
      "statusCode": new FormControl(null),
      "partyCode": new FormControl(null),
      "startDate": new FormControl(null),
      "endDate": new FormControl(null),
    });
  }

  navigateToDetail(data, id?: string, secondaryId?: string) {
    this.router.navigate(["/customer/customer-detail"], {
      queryParams: {
        pageStatus: data,
        pageId: id,
        pageSecondaryId: secondaryId,
        page: 'Customer'
      }
    })
  }

  searchCustomer() {
    if (this.customerForm.controls.startDate.value != null ||
      this.customerForm.controls.endDate.value != null ||
      this.customerForm.controls.name.value != null ||
      this.customerForm.controls.phoneNo.value != null ||
      this.customerForm.controls.partyCode.value != null ||
      this.customerForm.controls.statusCode.value != null ||
      this.customerForm.controls.identityType.value != null ||
      this.customerForm.controls.identityNumber.value != null) {
      this.getList()
    } else {
      this.cancel()
    }
  }
  reponseFromPager(event) {
    console.log("LEADEVENT", event);
    this.currentPage = event
    this.getDatabyPage(this.currentPage)
  }

  getList(limit: number = 5, offset: number = 1) {
    let check = this.isPopup && !this.isDynamic ? true : false
    let postData = { ...this.customerForm.getRawValue(), limit: 5, offset: offset }
    this.postedData = postData
    this.customerListService.getCustomerList(this.postedData, check, this.isCustom)
      .toPromise()
      .then((res: any) => {
        if (res) {
          // console.log("RES", res)
          this.customerList = res.content
          this.totalElements = res.totalElements
          this.totalPages = res.totalPages
          this.selectedPageBtn = this.currentPage
          this.cdf.detectChanges()
          if (this.commonList)
            this.commonList.detchChange()
          if (this.matTable)
            this.matTable.reChangeData()
          // this.matTable.reChangeData();
        }
      });
  }

  async getDatabyPage(page) {
    this.currentPage = page
    let check = this.isPopup && !this.isDynamic ? true : false
    let postData = { ...this.customerForm.getRawValue(), limit: 5, offset: page }
    this.totalPages = 0
    this.postedData = postData
    await this.customerListService.getCustomerList(this.postedData, check, this.isCustom).toPromise().then((res: any) => {
      if (res) {
        this.customerList = res.content
        this.totalElements = res.totalElements
        this.totalPages = res.totalPages
        this.selectedPageBtn = this.currentPage
        this.cdf.detectChanges()
        if (this.commonList)
          this.commonList.detchChange()
        if (this.matTable)
          this.matTable.reChangeData()
      }
    })
  }

  get selected() {
    let user
    if (this.matTable) {
      user = this.matTable.selection.selected[0]
    }
    return user ? user : { customerId: 0 }
  }

  rowSelected(event) {
    this.selectedUser.emit(event)
  }

  cancel() {
    this.customerForm.reset();
    this.customerList = []
  }

  actionBtn(event) {
    if (event.cmd == 'edit') {
      this.navigateToDetail('edit', event.data.customerId, event.data.individualId)
    }
  }

  //for view
  isControlValid(controlName: string): boolean {
    const control = this.customerForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.customerForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.customerForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.customerForm.controls[controlName];
    return control.dirty || control.touched;
  }

  nextProd() {
    if (this.selected.customerId) {
      this.modalService.dismissAll({ data: this.selected, type: "save" })
    }
  }
  closeModal() {
    this.modalService.dismissAll()
  }

}
