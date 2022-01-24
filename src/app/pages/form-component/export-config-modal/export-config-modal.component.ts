import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { BtnConfig, FromGroupData } from '../field.interface';


@Component({
  selector: 'app-export-config-modal',
  templateUrl: './export-config-modal.component.html',
  styleUrls: ['./export-config-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class ExportConfigModalComponent implements OnInit, OnDestroy {

  @Input() config: FromGroupData;
  isLoading$;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      label: [null, Validators.compose([Validators.required, Validators.nullValidator])],
      simple: [{ value: null, disabled: true }, Validators.compose([Validators.required, Validators.nullValidator])],
    });
    let valueString = ""
    if (this.config.controls.length > 0) {
      let tempArr = JSON.parse(JSON.stringify(this.config.controls))
      valueString = tempArr.map(e => e.name).join(", ");
    }
    if (this.config.buttons.length > 0) {
      let tempArr = JSON.parse(JSON.stringify(this.config.buttons))
      let conString = tempArr.map(e => e.label).join(", ");
      valueString = valueString ? valueString + ', ' + conString : conString
    }
    this.formGroup.controls['simple'].setValue(valueString);
  }

  save() {
    if (this.formGroup.valid) {
      const data = { ...this.config, ...this.formGroup.getRawValue(), }
      this.modal.dismiss({ data: { ...data }, type: 'save' })
    }
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
}
