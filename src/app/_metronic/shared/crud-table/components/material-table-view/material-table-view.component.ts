import { Component, OnInit, Input, OnChanges, ElementRef, Output, EventEmitter, AfterViewInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivityStatus, TableCol } from './table-dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import moment from 'moment';
import { SelectionModel } from '@angular/cdk/collections';
import { StylePaginatorDirective } from './custom-paginator.directive';
import { PRODUCT_STATUS } from '../../../../../pages/products/models/product.dto';
import { environment } from '../../../../../../environments/environment';
import { EncryptService } from 'src/app/_metronic/core/services/encrypt.service';

@Component({
  selector: 'app-material-table-view',
  templateUrl: './material-table-view.component.html',
  styleUrls: ['./material-table-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialTableViewComponent implements OnInit, AfterViewInit {

  @Output() emitter = new EventEmitter();
  dataSource = new MatTableDataSource<any>([]);
  @Input() displayedColumns: string[] = []
  @Input() data: any[] = [];
  @Input() colum: TableCol[] = [];
  // @Input() pageSizeOptions: number[] = [5, 10, 20]
  @Input() pageSizeOptions: number[] = [5]
  @Input() selectable: boolean = false
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(StylePaginatorDirective) customPaginator: StylePaginatorDirective
  @ViewChild(MatSort) sort: MatSort;
  @Output('rowselect') rowSelected = new EventEmitter()
  Default_DOWNLOAD_URL = `${environment.apiUrl}/image-downloader`;
  totalAmount: any = {}
  @Input() calTotal: boolean = false
  @Input() calField: string[] = []
  activityStatusColor = {
    // "success": "success"
    "01": "secondary",
    "02": "primary",
    "03": "danger",
  }

  prodStatus = PRODUCT_STATUS
  prodStatusColor = {
    "01": "secondary",
    "02": "primary",
  }
  statusColor = {
    "in_progress": "secondary",
    "complete": "primary",
    "approved": "primary",
    "cancel": "danger",
    "submitted": "success",
    "success": "success",
    "sending": "info",
    "fail": "danger",
    "draft_application":"secondary",
    'DRAFT APPLICATION':"secondary",
    "Draft Application":"secondary",
    "FAIL": "danger",
    "APPROVED APPLICATION":"primary",
    "ACTIVE POLICY":"success",
    "REJECT APPLICATION":"danger",
    "REJECTED APPLICATION":"danger",
    "CANCEL":"danger",
    "Cancel":"danger",
  }
  customerStatusColor = {
    "A": "secondary",
    "I": "danger",
  }
  customerStatus = {
    "A": "Active",
    "I": "Inactive",
  }
  leadStatus = {
    "01": "Open",
    "02": "Assigned",
    "03": "Folllow Up",
    "04": "Reject",
    "05": "Win",
    "06": "Lost",
  }
  leadStatusColor = {
    "01": "default",
    "04": "default",
    "05": "success",
    "03": "secondary",
    "02": "primary",
    "06": "danger",
  }
  renewStatus = {
    "DRAFT": "Draft",
    "ACTIVE": "Active",
    "CONFIRM": "Confirmed",
  }
  renewStatusColor = {
    "DRAFT": "primary",
    "ACTIVE": "success",
    "CONFIRM": "secondary",
  }
  selection = new SelectionModel<any>(false, []);
  activityStatus = ActivityStatus
  constructor(private cdf: ChangeDetectorRef,private encryption:EncryptService) { 
    
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log("material page -   " ,this.displayedColumns)
    this.cdf.detectChanges();
  }
  encryptData(attid){
    this.encryption.encryptData(attid)
  }

  reChangeData() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    let totalPage = Math.ceil(this.data.length / 5)
    if (this.calTotal)
      this.calTotalData()
    if (this.customPaginator)
      this.customPaginator.viewInit(totalPage)
  }

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }

  actionBtn(event) {
    this.emitter.emit(event)
  }
  FormatedDate(date) {
    return moment(date, "YYYYMMDD").format('DD/MM/YYYY');
  }
 
  getFreq(data: string) {
    let val = ""
    let ary = data.split(", ")
    for (const item of ary) {
      if (item == "lump") {
        val = val.length > 2 ? val + ", Lump Sum" : "Lump Sum"
      } else if (item == "annually") {
        val = val.length > 2 ? val + ", Semi Annually" : "Semi Annually"
      }
    }
    return val
  }

  createPolicyBtn(data) {
    this.emitter.emit({
      cmd: "create",
      data: data,
    })
  }

  getStatusColor(status: string) {

  }

  selectRow(row) {
    this.selection.toggle(row)
    if (this.selection.isSelected(row)) {
      this.rowSelected.emit(row)
    } else {
      this.rowSelected.emit(null)
    }
  }

  calTotalData() {
    this.totalAmount = [];
    this.data.forEach((data) => {
      this.calField.map(field => {
        if (data[field])
          this.totalAmount[field] = this.totalAmount[field] ? this.totalAmount[field] + parseFloat(data[field].toString().split(',').join('')) : parseFloat(data[field].toString().split(',').join(''))
      })
    })
    // this.calField.includes()
  }

}
