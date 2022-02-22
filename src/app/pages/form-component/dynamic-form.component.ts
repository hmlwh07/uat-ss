import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { GlobalFunctionService } from '../../core/global-fun.service';
import { AlertService } from '../../modules/loading-toast/alert-model/alert.service';
import { ConfigInput, InputBoxType, InputType, ValidationType } from './field.interface';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  template: `
    <form
      class="dynamic-form row" style="align-items: center"
      [formGroup]="form">
      <ng-container *ngFor="let field of internalConfig;let i = index">
      <ng-container
        *ngIf="field.input !== 'underline';"
        dynamicField
        [config]="field"
        [internalConfig]="internalConfig"
        [index]="i"
        [group]="form"
        (onEdit)="Edited($event)"
        [editStage]="editStage"
        [divBreaked]="getBreaked()"
        >
      </ng-container>
      <ng-container *ngIf="field.input == 'underline';">
        <div class="w-100"></div>
        <div class='col-12' (click)="Edited(i)">
        <hr >
        </div>
      </ng-container>
      </ng-container>
    </form>
  `
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: any[] = [];

  @Input()
  tempData: any = {};

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onEdit: EventEmitter<number> = new EventEmitter<number>();

  @Input() editStage: boolean

  form: FormGroup;
  internalConfig: any = []
  get controls() { return this.internalConfig.filter(({ type }) => type !== 'button'); }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder, private globalFun: GlobalFunctionService) { }

  ngOnInit() {
    this.internalConfig = JSON.parse(JSON.stringify(this.config))
    this.form = this.createGroup();
  }


  createGroup(reCreate: boolean = false) {
    const group = this.fb.group({});
    let i = 0
    this.controls.forEach(control => {
      i += 1
      if (control.input != 'label' && control.input != 'underline') {
        group.addControl(control.name, this.createControl(control))
        if (control.input == 'date' && control.type == 'policy') {
          group.addControl(control.endName, this.createControl(control, 'policy'))
        }
      }

    });
    return group;
  }

  createControl(config: ConfigInput, type?: string) {
    let { disabled, value, name, validation, endName } = config;
    let valid = []
    if (this.editStage || config.input == InputBoxType.DIALOG || (config.input == InputBoxType.INPUT && config.type == "nrc")) {
      disabled = true
    }
    if (validation && config.show) {
      for (let val of validation) {
        if (val.type == ValidationType.REQUIRED) {
          valid.push(Validators.required)
        } else if (val.type == ValidationType.MAX && config.type != 'date') {
          let validat = config.type == 'number' || config.type == 'currency' ? Validators.max(val.value) : Validators.maxLength(val.value)
          valid.push(validat)
        } else if (val.type == ValidationType.MIN && config.type != 'date') {
          let validat = config.type == 'number' || config.type == 'currency' ? Validators.min(val.value) : Validators.minLength(val.value)
          valid.push(validat)
        }
      }
    }
    if (config.input == 'input' && config.type == 'email' && config.show) {
      valid.push(Validators.email)
    }
    let keyName = type ? endName : name
    if (config.input == 'file') {
      let defVal = this.tempData[name] ? this.tempData[name] || null : null;
      return this.fb.control({ disabled: true, value: defVal }, [...valid]);
    }
    let defVal = this.tempData[keyName] ? this.tempData[keyName] : value;
    config.value = defVal
    if (config.input == 'date')
      defVal = defVal ? moment(defVal) : defVal
    return this.fb.control({ disabled: disabled, value: defVal || null }, [...valid]);
  }

  handleSubmit() {
    if (this.form.invalid) return false
    this.submit.emit(this.form.getRawValue());
    return true
  }

  reCreateFrom() {
    this.internalConfig = JSON.parse(JSON.stringify(this.config))
    this.form = this.createGroup(true);
    // if (i == this.controls.length && reCreate) {
    // console.log("trgi");
    this.globalFun.optionResultChange.next(true)
    // }
  }

  newFormCreate(controls, temp?: any) {
    let tempControls = JSON.parse(JSON.stringify(controls))
    // console.log(controls);
    this.internalConfig = tempControls
    const group = this.fb.group({});
    if (temp) this.tempData = temp
    tempControls.forEach(control => {
      if (control.input != 'label' && control.input != 'underline') {
        group.addControl(control.name, this.createControl(control))
        if (control.input == 'date' && control.type == 'policy') {
          group.addControl(control.endName, this.createControl(control, 'policy'))
        }
      }
    });
    this.form = group
  }

  Edited(event) {
    this.onEdit.emit(event)
  }

  getBreaked() {
    return this.config.filter(x => x.break === 'true')
  }


}
