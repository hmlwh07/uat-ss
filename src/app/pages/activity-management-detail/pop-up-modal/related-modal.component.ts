import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { map } from "rxjs/operators";
import { AlertService } from "src/app/modules/loading-toast/alert-model/alert.service";
import { MaterialTableViewComponent } from "../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component";
import { PolicyManageService, PolicyService } from "../../policy/policy.service";
import { QuotationService } from "../../quotations/quotation.service";
import { CustomerListService } from "../customer-list.service";
import { EmployeeListService } from "../employee-list.service";
import { TableColData } from "./col-data.const"
interface TableKey {
  col: string,
  key: string,
  prefix?: string
}

@Component({
  selector: "app-related-to",
  templateUrl: "./related-modal.component.html"
})
export class RelatedModalCompoent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent

  selecteditem: any
  tableData = TableColData
  types: string[] = [
    "quotation", "policy"
  ]
  // "customer"agent
  type: string = "customer"
  dataList: any[] = []
  selectedName: string
  constructor(public modal: NgbActiveModal, private quotService: QuotationService, 
    private policyService: PolicyManageService, private customerService: CustomerListService, 
    private employeeService: EmployeeListService,private cdf: ChangeDetectorRef, private alertService: AlertService) {
  }

  ngOnInit() {
    if (this.selected && this.type == 'quotation') {
      this.type = (this.selected + "").includes("QUO") ? 'quotation' : 'policy'
    }
    this.getDatalist()
  }

  selectedProd(id, index) {
    if (this.selecteditem == id) this.selecteditem = null
    this.selecteditem = id
    this.selectedName = this.type == "customer" ? this.dataList[index].name : this.dataList[index].firstName || ""
  }

  getDatalist() {
    if (this.type == 'customer') {
      this.getCustomerList()
    } else {
      let service: any;
      if (this.type == 'quotation')
        service = this.quotService
      else if (this.type == 'policy')
        service = this.policyService
      else
        service = this.employeeService

      service.findAll().toPromise().then((res: any) => {
        // console.log(res);
        
        if (res){
          this.dataList = res
          this.cdf.detectChanges()
          this.matTable.reChangeData()
        }
      })
    }
  }

  getCustomerList() {
    this.customerService.findAll().pipe(map(x => {
      return x.map(x => x.individualCustomer)
    })).toPromise().then((res: any) => {
      if (res)
        this.dataList = res
        // console.log("customer",  this.dataList)
        this.cdf.detectChanges()
        this.matTable.reChangeData()
      })
  }
  get selected() {
    let item
    if(this.matTable){
      item = this.matTable.selection.selected[0]
    }
    return item ? item : { id: 0 }
  }
  save() {
    this.selectedName = this.type == "customer" ? this.selected.name : this.selected.firstName || ""
    let name = (this.selected.firstName || "") + " " + (this.selected.middleName || "") + " " + (this.selected.lastName || "")
    this.selectedName = this.type == "agent" ? name :  ""
   
    this.modal.dismiss({ data: this.selected.id || this.selected.empId, type: 'save', dataName: this.selectedName })
  }

  actionBtn(event){

  }

  deleteEditModal() {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.modal.dismiss({ type: 'delete' });
      }
    });
  }



}