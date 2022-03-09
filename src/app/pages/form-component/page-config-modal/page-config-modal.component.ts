import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { TableAPIService } from '../../page-config/table.service';

@Component({
  selector: 'app-page-config-modal',
  templateUrl: './page-config-modal.component.html',
  styleUrls: ['./page-config-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class PageConfigModalComponent implements OnInit, OnDestroy {

  title: string
  icon: string
  type: string
  function: string
  tableName: string
  unitCode: string
  party: boolean = false
  isLoading$;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  alertOpend: boolean = false
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal,
    private alertService: AlertService,
    private tableService: TableAPIService
  ) { }

  ngOnInit(): void {
    this.alertOpend = false
    this.loadConfig();
  }

  loadConfig() {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      title: [this.title, Validators.compose([Validators.required, Validators.nullValidator])],
      icon: [this.icon, Validators.compose([Validators.required, Validators.nullValidator])],
      type: [this.type, Validators.compose([Validators.required, Validators.nullValidator])],
      tableName: [{ value: this.tableName, disabled: this.tableName ? true : false }, Validators.compose([Validators.required, Validators.nullValidator, Validators.pattern("^[a-z_]*$")])],
      function: [this.function],
      unitCode: [this.unitCode],
      party: [this.party || false]
    });
  }

  save() {
    if (this.formGroup.valid) {
      let formValue = this.formGroup.getRawValue()
      if (!this.tableName && !this.alertOpend) {
        // if (!this.alertOpend)
        this.alertAndSave(formValue)
      } else if (this.tableName != formValue.tableName && !this.alertOpend) {
        this.alertAndSave(formValue)
      } else {
        this.modal.dismiss({ data: this.formGroup.getRawValue(), type: 'save' })
      }
    }
  }

  alertAndSave(formValue) {
    this.alertOpend = true
    this.tableService.validate(formValue.tableName).toPromise().then((res: any) => {
      // console.log(res);
      if (!res[formValue.tableName]) {
        this.alertService.activate("Table Name already used. Do you want to reuse this table name " + formValue.tableName + " ?", "Warning")
      } else {
        this.modal.dismiss({ data: this.formGroup.getRawValue(), type: 'save' })
      }
    })
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  deleteEditModal() {
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.modal.dismiss({ type: 'delete' });
      }
    });
  }
  
}
