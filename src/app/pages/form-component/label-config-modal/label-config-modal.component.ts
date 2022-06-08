import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { BtnConfig } from '../field.interface';


@Component({
  selector: 'app-label-config-modal',
  templateUrl: './label-config-modal.component.html',
  styleUrls: ['./label-config-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class LabelConfigModalComponent implements OnInit, OnDestroy {
  id: number
  name: string
  nameMM:string
  label: string
  coreName: string
  endLabel: string // size type
  endLabelMM: string // font weight
  labelSize: string
  placeholder: string // label id
  multi: boolean // border style top
  inlineStyle: boolean // border style right
  readonly: boolean // border style bottom
  disabled: boolean // border style left
  isLoading$;
  formGroup: FormGroup;
  sizeOpt: string[] = ["pt", "px", "rem"]
  fontOpt: string[] = ["bold", "normal"]
  private subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal, private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      name: [this.name, Validators.compose([Validators.required, Validators.nullValidator])],
      nameMM:[this.nameMM],
      label: [this.label, Validators.compose([Validators.required, Validators.nullValidator])],
      coreName: [this.coreName, Validators.compose([Validators.required, Validators.nullValidator])],
      endLabel: [this.endLabel || this.sizeOpt[2], Validators.compose([Validators.required, Validators.nullValidator])],
      endLabelMM: [this.endLabelMM || this.fontOpt[1], Validators.compose([Validators.required, Validators.nullValidator])],
      labelSize: [this.labelSize, Validators.compose([Validators.required, Validators.nullValidator])],
      placeholder: [this.placeholder, Validators.compose([Validators.required, Validators.nullValidator])],
      multi: [this.multi || false,],
      inlineStyle: [this.inlineStyle || false,],
      readonly: [this.readonly || false,],
      disabled: [this.disabled || false,],
    });
  }

  save() {
    if (this.formGroup.valid) {
      this.modal.dismiss({ data: this.formGroup.value, type: 'save' })
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

  deleteEditModal() {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.modal.dismiss({ type: 'delete' });
      }
    });
  }
}
