import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../modules/loading-toast/alert-model/alert.service';
import { MaterialTableViewComponent } from '../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { ActivityStatus } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto';
import { RenewCol, ActivityDisplayCol } from './renew-manage.const';
import { RenewManageService } from './renew-manage.service';

@Component({
  selector: 'app-renew-management-list',
  templateUrl: './renew-management-list.component.html',
  styleUrls: ['./renew-management-list.component.scss']
})
export class RenewManagementListComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  ELEMENT_COL = RenewCol
  displayedColumns = ActivityDisplayCol
  renewList = [];
  actForm: FormGroup;
  activityStatus = ActivityStatus

  constructor(private fb: FormBuilder, private router: Router, private cdf: ChangeDetectorRef, private renewService: RenewManageService, private alertService: AlertService) {
    this.loadForm();
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.getList()
  }
  cancel() {

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


  getList() {
    this.renewService.getRenewList(this.actForm.value).toPromise().then((res: any) => {
      if (res) {

        this.renewList = res
        this.cdf.detectChanges()
        this.matTable.reChangeData()
      }
    })
  }

  actionBtn(event) {
    if (event.cmd == 'edit') {
      this.navigateToDetail(event.data)
    }
    else if (event.cmd == 'view') {
      this.navigateToDetail(event.data)
    }
    else if (event.cmd == "confirm") {
      this.confirmRenew(event.data)
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

  navigateToDetail(data) {
    this.router.navigate(["sale/renew-policy/detail"], { queryParams: { data: JSON.stringify(data) } })
  }

  confirmRenew(data) {
    if (data.status != "confirm") {
      this.renewService.confirmRenew(data.policyNumber).toPromise().then((res) => {
        if (res) {
          console.log(res);
          
          this.alertService.activate('This record was updated', 'Success Message');
          this.navigateToDetail(res)
        }
      })
    }
  }
}
