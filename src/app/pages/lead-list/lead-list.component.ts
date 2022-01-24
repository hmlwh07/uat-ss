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

@Component({
  selector: "app-lead-list",
  templateUrl: "./lead-list.component.html",
  styleUrls: ["./lead-list.component.scss"],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})

export class LeadListComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;

  ELEMENT_COL = JSON.parse(JSON.stringify(LeadCol));
  displayedColumns = JSON.parse(JSON.stringify(LeadDisplayCol));

  LeadList: any[] = [];
  LeadForm: FormGroup;

  @Output() selectedUser = new EventEmitter();
  @Input() isPopup: boolean = false;
  show: boolean = false
  statusOption: any[] = []
  sourceOption: any[] = []
  productOption: any[] = []
  constructor(
    private router: Router,
    private cdf: ChangeDetectorRef,
    private LeadListService: LeadListService,
    private masterDataService: MasterDataService,
    private productService: ProductDataService,
    private modalService:NgbModal
  ) {
    this.loadForm();
  }
  ngOnInit(): void {
    this.show = true
    this.getList();
    this.getStatus();
    this.getSource();
    this.getProduct()

  }
  loadForm() {
    this.LeadForm = new FormGroup({
      campaignName: new FormControl(null),
      existingCustomerId: new FormControl(null),
      existingCustomerName: new FormControl(null),
      contactName: new FormControl(null),
      leadId: new FormControl(null),
      openDateStr: new FormControl(null),
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
    });
  }
  getStatus() {
    this.masterDataService
      .getDataByType("LEAD_STATUS")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.statusOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.statusOption);
          this.cdf.detectChanges();
        }
      });
  }
  getSource() {
    this.masterDataService
      .getDataByType("LEAD_SOURCE")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.sourceOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.sourceOption);
          this.cdf.detectChanges();
        }
      });
  }
  getProduct() {
    this.productService
      .getAll()
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.productOption = res.map((x) => {
            return { code: x.code, value: x.name };
          });
          console.log(this.productOption);
          this.cdf.detectChanges();
        }
      });
  }

  getList() {
    this.LeadListService.getLeadList(this.LeadForm.value)
      .toPromise()
      .then((res: any) => {
        if (res) {
          console.log("RES", res)
          this.LeadList = res
          this.cdf.detectChanges();
          this.matTable.reChangeData();
        }
      });
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

  viewExistingCustomer() {
    let modalRef;
    modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.isPopup = true
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == "save") {
          let customer = res.data
          console.log('onDidDismiss =====> ', customer);
          this.LeadForm.controls.existingCustomerId.setValue(customer.customerId)
          this.LeadForm.controls.existingCustomerName.setValue(customer.name)
        }
      }
    })


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
}
