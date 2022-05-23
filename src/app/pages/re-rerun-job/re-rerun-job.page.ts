import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { AlertService } from '../../modules/loading-toast/alert-model/alert.service';
import { ErrorDetailsComponent } from './error-details/error-details.component';
import { CRM_COL, CRM_DISPLAYCOL, SALE_COL, SALE_DISPLAY_COL } from './list.const';
import { ReRunService } from './re-run.service';

@Component({
  selector: 'app-re-rerun-job',
  templateUrl: './re-rerun-job.page.html',
  styleUrls: ['./re-rerun-job.page.scss'],
})
export class ReRerunJobPage implements OnInit {
  reRunForm: FormGroup
  typeOption: any = [
    { code: '', value: 'All' },
    { code: 'CRM', value: 'Management Portal' },
    { code: 'SALE', value: 'Sale Portal' },
  ]
  nameOption: any = [
    { code: '', value: 'All' },
    { code: 'RunTCSAPIByScheduler', value: 'Management Portal' },
    { code: 'Renewal Policy', value: 'Renewal Policy' },
    { code: 'Update Policy Status', value: 'Update Policy Status' }
  ]
  statusOption: any = [
    { code: '', value: 'All' },
    { code: 'FAIL', value: 'Fail' },
    { code: 'SUCCESS', value: 'Success' },
  ]
  listFromCRM: any = [
  ]
  listFromSale: any = [
  ]
  isCRM: boolean = false
  @ViewChild(MaterialTableViewComponent) matTableCRM: MaterialTableViewComponent;
  @ViewChild(MaterialTableViewComponent) matTableSale: MaterialTableViewComponent;

  ELEMENT_COL = JSON.parse(JSON.stringify(CRM_COL));
  displayedColumns = JSON.parse(JSON.stringify(CRM_DISPLAYCOL));
  ELEMENT_COL_SALE = JSON.parse(JSON.stringify(SALE_COL));
  displayedColumnsSale = JSON.parse(JSON.stringify(SALE_DISPLAY_COL));
  constructor(private reRunService: ReRunService, private modalService: NgbModal, private cdf: ChangeDetectorRef, private alertService: AlertService) { }

  ngOnInit() {
    this.loadForm()
    // this.getList()
  }
  ngAfterViewInit() {
    this.getList()
  }

  loadForm() {
    this.reRunForm = new FormGroup({
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      typeCode: new FormControl(''),
      name: new FormControl(''),
      status: new FormControl('')
    });
  }

  getList() {
    // this.reRunService.getReRunList(this.reRunForm.getRawValue())
    //   .toPromise()
    //   .then((res: any) => {
    //     console.log(res);
    // if(res)
    this.reRunService.getReRunListByType(this.reRunForm.value).toPromise().then((res) => {
      if (res) {
        console.log("res", res);
        this.listFromCRM = res
        this.cdf.detectChanges()
        this.matTableCRM.reChangeData()
        if (this.reRunForm.controls.typeCode.value == 'CRM') {
          this.isCRM = true
        }
        else {
          this.isCRM = false
        }
      }
    })

    // });
  }

  actionBtn(event) {
    console.log(event);

    if (event.cmd == "view") {
      this.viewErrorDetail(event.data)
    }
    if (event.cmd == "rerun") {
      if (event.data.status != "FAIL") {
        this.alertService.activate('This job was already successful!', 'Warining Message');
        return false
      }
      this.alertService.activate('Are you sure want to re-run?', 'Warining Message').then(async result => {
        if (result) {
          if (event.data.jobType == "CRM")
            this.reRunCRM(event.data)
          else {
            if (event.data.jobName == "Renewal Policy") {
              this.reRunRenewal()
            } else
              this.reRunPolicyStatus(event.data)
          }
        }
      })
    }
  }

  reRunRenewal() {
    this.reRunService.reRunRenewal().toPromise().then((res: any) => {
      console.log(res);
      if (res) {
        this.alertService.activate('This job was re-run successful', 'Success Message');
        this.getList()

      }
    })
  }
  reRunPolicyStatus(data) {
    this.reRunService.reRunPolicyStatus(data.runDate).toPromise().then((res: any) => {
      if (res) {
        this.alertService.activate('This job was re-run successful', 'Success Message');
        this.getList()

      }
    })
  }
  reRunCRM(data) {
    this.reRunService.reRunCRM(data.runDate).toPromise().then((res: any) => {
      if (res) {
        this.alertService.activate('This job was re-run successful', 'Success Message');
        this.getList()
      }
    })
  }
  viewErrorDetail(data) {
    let modalRef;
    modalRef = this.modalService.open(ErrorDetailsComponent, { size: 'lg', backdrop: true, centered: true, scrollable: true });
    modalRef.componentInstance.data = data
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (data.status != "FAIL") {
          this.alertService.activate('This job was already successful!', 'Warining Message');
          return false
        }
        this.alertService.activate('Are you sure want to re-run?', 'Alert Message').then(async result => {
          if (result) {
            if (data.jobType == "CRM")
              this.reRunCRM(data)
            else {
              if (data.jobName == "Renewal Policy") {
                this.reRunRenewal()
              } else
                this.reRunPolicyStatus(data)
            }
          }
        })
      }
    })
  }

  //for view
  isControlValid(controlName: string): boolean {
    const control = this.reRunForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.reRunForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.reRunForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.reRunForm.controls[controlName];
    return control.dirty || control.touched;
  }
  cancel() {
    this.reRunForm.reset();
    this.getList();
  }


}
