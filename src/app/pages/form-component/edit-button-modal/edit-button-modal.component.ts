import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { BtnConfig } from '../field.interface';


@Component({
  selector: 'app-edit-button-modal',
  templateUrl: './edit-button-modal.component.html',
  styleUrls: ['./edit-button-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class EditButtonModalComponent implements OnInit, OnDestroy {
  @Input() id: number;
  // @Input() activePage: number;
  @Input() config: BtnConfig;
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
      label: [this.config.label, Validators.compose([Validators.required, Validators.nullValidator])],
      labelMM: [this.config.labelMM],
      type: [this.config.type, Validators.compose([Validators.required, Validators.nullValidator])],
      size: [this.config.size, Validators.compose([Validators.required, Validators.nullValidator,Validators.max(12),Validators.min(2)])],
      position: [this.config.position],
      fill: [this.config.fill+'', Validators.compose([Validators.required,Validators.nullValidator])],
      color: [this.config.color, Validators.compose([Validators.required,Validators.nullValidator])],
    });
  }

  save() {
    if(this.formGroup.valid){
      this.config = {...this.formGroup.value,fill: this.formGroup.value.fill == 'true' ? true : false }
      this.modal.dismiss({data:this.config,type:'save'})
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
