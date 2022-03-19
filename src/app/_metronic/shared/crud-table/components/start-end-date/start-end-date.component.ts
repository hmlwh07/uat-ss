import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MY_FORMATS } from 'src/app/core/is-json';

@Component({
  selector: 'app-start-end-date',
  templateUrl: './start-end-date.component.html',
  styleUrls: ['./start-end-date.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class StartEndDateComponent implements OnInit {
@Input() formInput:FormGroup
@Input() colClass:any;
  constructor() { }

  ngOnInit() {
    console.log("data--> ", this.formInput);
    this.getoneMonth()
  }
  clearDate(type){
    this.formInput.controls[type].setValue(null)
  }
  getoneMonth(){
    let date = new Date();
    let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1))
    let monthDay = new Date(date.setMonth(date.getMonth() + 1))
    this.formInput.controls['startDate'].setValue(lastMonthDay.toISOString());
    this.formInput.controls['endDate'].setValue(monthDay.toISOString());
  }
}
