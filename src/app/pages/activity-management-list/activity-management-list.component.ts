import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { DateAdapter } from 'angular-calendar';
import { MY_FORMATS } from '../../core/is-json';
import { MaterialTableViewComponent } from '../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { ActivityStatus } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto';
import { CommonList2Component } from '../share-components/common-list/common-list.component';
import { ActivityCol, ActivityDisplayCol } from './activity-manage.const';
import { ActivityManageService } from './activity-manage.service';

@Component({
  selector: 'app-activity-management-list',
  templateUrl: './activity-management-list.component.html',
  styleUrls: ['./activity-management-list.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class ActivityManagementListComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  @ViewChild(CommonList2Component) commonList: CommonList2Component;
  ELEMENT_COL = ActivityCol
  displayedColumns = ActivityDisplayCol
  activityList = [];
  actForm: FormGroup;
  activityStatus = ActivityStatus
  totalElements: number = 0
  totalPages: number = 0
  selectedPageBtn: number = 0
  currentPage: number = 1
  activityType: string[] = [
    "Face to Face",
    "Online",
    "Phone Call"
  ]
  postedData: any = {}
  activityTypeOption = [
    {
      code: "",
      value: "All"
    },
    {
      code: "Face to Face",
      value: "Face to Face"
    },
    {
      code: "Online",
      value: "Online"
    },
    {
      code: "Phone Call",
      value: "Phone Call"
    }
  ]
  statusOption = [
    {
      code: "",
      value: "All"
    },
    {
      code: "Open",
      value: "Open"
    },
    {
      code: "Complete",
      value: "Complete"
    },
    {
      code: "Cancel",
      value: "Cancel"
    }
  ]
  constructor(private fb: FormBuilder, private router: Router, private activityService: ActivityManageService, private cdf: ChangeDetectorRef) {
    this.loadForm();
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.getList()
  }
  cancel() {
    this.actForm.reset()
    this.getList()
  }

  loadForm() {
    this.actForm = new FormGroup({
      "type": new FormControl(""),
      "title": new FormControl(null),
      "status": new FormControl(""),
      startDate: new FormControl(null),
      endDate: new FormControl(null)
    })
  }


  // getList() {
  //   this.activityService.getActivityList(this.actForm.value).toPromise().then((res: any) => {
  //     if (res) {
  //       console.log('getActivityList', res);

  //       this.activityList = res
  //       this.cdf.detectChanges()
  //      // this.matTable.reChangeData()
  //     }
  //   })
  // }

  reponseFromPager(event) {
    // console.log("LEADEVENT", event);
    this.currentPage = event
    this.getDatabyPage(this.currentPage)
  }

  getList(limit: number = 5, offset: number = 1) {
    let postData = { ...this.actForm.getRawValue(), limit: 5, offset: offset }
    this.postedData = postData

    this.activityService.getActivityList( this.postedData ).toPromise().then((res: any) => {
      if (res) {
        // console.log('getActivityList', res);
        this.activityList = res.content
        this.totalElements = res.totalElements
        this.totalPages = res.totalPages
        this.selectedPageBtn = this.currentPage
        this.cdf.detectChanges();
        this.commonList.detchChangePagination()
        // this.activityList = res
        this.cdf.detectChanges()
        // this.matTable.reChangeData()
      }
    })
  }

  async getDatabyPage(page) {
    this.currentPage = page
    let postData = { ...this.actForm.getRawValue(), limit: 5, offset: page }
    this.totalPages = 0
    this.postedData = postData
    await this.activityService.getActivityList(this.postedData).toPromise().then((res: any) => {
      if (res) {
        this.activityList = res.content
        // this.activityList = res
        this.totalElements = res.totalElements
        this.totalPages = res.totalPages
        this.selectedPageBtn = this.currentPage
        this.cdf.detectChanges();
      }
    })
  }

  actionBtn(event) {
    if (event.cmd == 'edit') {
      this.navigateToDetail('edit', event.data.activityNo)
    }
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.actForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.actForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.actForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.actForm.controls[controlName];
    return control.dirty || control.touched;
  }

  navigateToDetail(data, id?: string) {
    this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: data, pageId: id } })
  }
}
