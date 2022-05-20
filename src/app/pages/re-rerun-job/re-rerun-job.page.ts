import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
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
    { code: 'CRM', value: 'CRM' },
    { code: 'Sale', value: 'Sale Portal' },
  ]
  listFromCRM: any = [
    {
      jobType: 'JOB-CRM',
      errorDescription: 'Description',
      date: '20220512'
    }
  ]
  listFromSale: any = [
    {
      jobType: 'JOB-Sale',
      errorDescription: 'Description',
      date: '20220512'
    }
  ]
  isCRM: boolean = false
  @ViewChild(MaterialTableViewComponent) matTableCRM: MaterialTableViewComponent;
  @ViewChild(MaterialTableViewComponent) matTableSale: MaterialTableViewComponent;

  ELEMENT_COL = JSON.parse(JSON.stringify(CRM_COL));
  displayedColumns = JSON.parse(JSON.stringify(CRM_DISPLAYCOL));
  ELEMENT_COL_SALE = JSON.parse(JSON.stringify(SALE_COL));
  displayedColumnsSale = JSON.parse(JSON.stringify(SALE_DISPLAY_COL));
  constructor(private reRunService: ReRunService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loadForm()

  }
  ngAfterViewInit() {
    this.matTableCRM.reChangeData()
    this.matTableSale.reChangeData()
  }

  loadForm() {
    this.reRunForm = new FormGroup({
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      typeCode: new FormControl('Sale')
    });
  }

  getList() {
    // this.reRunService.getReRunList(this.reRunForm.getRawValue())
    //   .toPromise()
    //   .then((res: any) => {
    //     console.log(res);
    // if(res)
    if (this.reRunForm.controls.typeCode.value == 'CRM') {
      this.listFromCRM = this.listFromCRM
      this.matTableCRM.reChangeData()
      this.isCRM = true

    }
    else {
      this.listFromSale = this.listFromSale
      this.matTableSale.reChangeData()
      this.isCRM = false
    }
    // });
  }

  actionBtn(event) {
    console.log(event);

    if (event.cmd == "view") {
      this.viewErrorDetail(event.data)
    }
    if (event.cmd == "rerun") {
      this.reRunRenewal(event.data)
    }
  }

  reRunRenewal(data) {
    this.reRunService.reRunRenewal(data).toPromise().then((res: any) => {
      console.log(res);
      if (res) {

      }

    })
  }
  reRunPolicyStatus(data) {
    this.reRunService.reRunPolicyStatus(data).toPromise().then((res: any) => {
      console.log(res);
      if (res) {

      }

    })
  }
  viewErrorDetail(data) {
    let modalRef;
    modalRef = this.modalService.open(ErrorDetailsComponent, { size: 'xl',backdrop: true ,centered:true,scrollable:true });
    modalRef.componentInstance.data = data
    modalRef.result.then(() => { }, (res) => {
      if (res) {

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
