import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { CustomerCol, CustomerDisplayCol, IdentityType, Status } from './customer-list.const';
import { CustomerListService } from './customer-list.service';

import { NgbDateAdapter, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from '../../_metronic/core';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../core/is-json';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class CustomerListComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent

  ELEMENT_COL = JSON.parse(JSON.stringify(CustomerCol))
  displayedColumns = JSON.parse(JSON.stringify(CustomerDisplayCol))

  customerList: any[] = [];

  statusOption = Status;
  identityTypeOption = IdentityType;

  customerForm: FormGroup;
  @Output() selectedUser = new EventEmitter();
  @Input() isPopup: boolean = false
  @Input() party: boolean = false
  @Input() isDynamic: boolean = false
  show: boolean = false
  constructor(private router: Router, private cdf: ChangeDetectorRef, private customerListService: CustomerListService, private modalService: NgbModal) {
    this.loadForm();
  }

  ngOnInit(): void {
    if (this.isPopup) {
      this.ELEMENT_COL.splice(9, 1)
      this.displayedColumns.splice(9, 1)
    }
    this.show = true
    const position = { x: 0, y: 0 }
    const interact = require('interactjs')
    interact('.draggable').draggable({
      listeners: {
        start(event) {
          console.log(event.type, event.target)
        },
        move(event) {
          position.x += event.dx
          position.y += event.dy

          event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`
        },
      }
    })

  }
  ngAfterViewInit() {
    this.getList();
  }
  loadForm() {
    this.customerForm = new FormGroup({
      "name": new FormControl(null),
      "identityType": new FormControl(null),
      "identityNumber": new FormControl(null),
      "statusCode": new FormControl(null),
      "partyCode": new FormControl(null)
    });
  }

  navigateToDetail(data, id?: string, secondaryId?: string) {
    this.router.navigate(["/customer/customer-detail"], { queryParams: { pageStatus: data, pageId: id, pageSecondaryId: secondaryId } })
  }

  getList() {
    let check = this.isPopup && !this.isDynamic ? true : false
    this.customerListService.getCustomerList(this.customerForm.value, this.party, check).toPromise().then((res: any) => {
      if (res) {
        this.customerList = res
        this.cdf.detectChanges()
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
    this.getList();
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
