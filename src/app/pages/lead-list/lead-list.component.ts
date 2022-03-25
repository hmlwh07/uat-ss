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
import { map } from 'rxjs/operators';
import { forkJoin, catchError, of } from 'rxjs';
import { environment } from "../../../environments/environment";
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
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;

  ELEMENT_COL = JSON.parse(JSON.stringify(LeadCol));
  displayedColumns = JSON.parse(JSON.stringify(LeadDisplayCol));

  LeadList: any[] = [];
  LeadForm: FormGroup;
  isTableView: boolean = true
  @Output() selectedUser = new EventEmitter();
  @Input() isPopup: boolean = false;
  show: boolean = false
  statusOption: any[] = []
  sourceOption: any[] = []
  productOption: any[] = []
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;

  constructor(
    private router: Router,
    private cdf: ChangeDetectorRef,
    private LeadListService: LeadListService,
    private masterDataService: MasterDataService,
    private productService: ProductDataService,
    private modalService: NgbModal
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

  updateURL(event: any){
    if(event){
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
    return this.productService.getAll().pipe(map(x => this.getFormatOpt(x)), catchError(e => {
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

  getList() {
    console.log(this.LeadForm.getRawValue());
    
    this.LeadListService.getLeadList(this.LeadForm.getRawValue())
      .toPromise()
      .then((res: any) => {
        if (res) {
          console.log("RES", res)
          this.LeadList = res
          this.cdf.detectChanges();
          if (this.matTable)
            this.matTable.reChangeData();
        }
      });
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
  onActionEdit(){
    
  }
  clearDate(key){
    this.LeadForm.controls[key].setValue(null)
    if(key=='existingCustomerName'){
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
