import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialTableViewComponent } from '../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { ActivityStatus } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto';
import { ActivityCol, ActivityDisplayCol } from './activity-manage.const';
import { ActivityManageService } from './activity-manage.service';

@Component({
  selector: 'app-activity-management-list',
  templateUrl: './activity-management-list.component.html',
  styleUrls: ['./activity-management-list.component.scss']
})
export class ActivityManagementListComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  ELEMENT_COL = ActivityCol
  displayedColumns = ActivityDisplayCol
  activityList = [];
  actForm: FormGroup;
  activityStatus = ActivityStatus
  activityType: string[] = [
    "Face to Face",
    "Online",
    "Phone Call"
  ]
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

  loadForm() {
    this.actForm = new FormGroup({
      "type": new FormControl(""),
      "title": new FormControl(null),
      "status": new FormControl(""),
    })
  }


  getList() {
    this.activityService.getActivityList(this.actForm.value).toPromise().then((res: any) => {
      if (res) {
        
        this.activityList = res
        this.cdf.detectChanges()
        this.matTable.reChangeData()
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
