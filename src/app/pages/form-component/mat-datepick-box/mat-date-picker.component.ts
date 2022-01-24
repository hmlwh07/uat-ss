import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MY_FORMATS } from "../../../core/is-json";

@Component({
  selector: 'app-mat-date-picker',
  templateUrl: './mat-date-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CusMatDatePicker), //Name of our component
      multi: true
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class CusMatDatePicker implements ControlValueAccessor {
  @Input() _dateValue: string = null;
  @Input() public placeholder: string = null;
  @Input() private format = 'YYYY-MM-DD';
  @Output() dateChange = new EventEmitter()
  get dateValue() {
    return moment(this._dateValue, this.format);
  }

  set dateValue(val) {
    this._dateValue = moment(val).format(this.format);
    this.propagateChange(this._dateValue);
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dateValue = moment(event.value, this.format);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.dateValue = moment(value, this.format);
      this.dateChange.next(this.dateValue)
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }
}