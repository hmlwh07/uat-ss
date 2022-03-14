import { AfterContentChecked, AfterViewChecked, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { DateType, Field, FUNCTION_TYPE, InputValidation, ValidationType } from '../field.interface';
import * as moment from 'moment'
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from '../../../_metronic/core';
import { ProductDataService } from '../../products/services/products-data.service';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../../core/is-json';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';

@Component({
  selector: 'app-date-box',
  templateUrl: './date-box.component.html',
  styleUrls: ['./date-box.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class DateBoxComponent implements Field, OnInit, OnDestroy {

  group: FormGroup;
  config: any
  unSub: Subscription[] = []
  toMinDate = null
  fromMinDate = null
  toMaxDate = null
  fromMaxDate = null
  valid: any = {
    value: "",
    type: ""
  }
  constructor(
    private globalFun: GlobalFunctionService,
    private prodService: ProductDataService,
    private alert: AlertService,
  ) { }
  isDisabled: boolean = false
  ngOnInit() {
    this.isDisabled = this.config.disabled
    this.listenFunData();
    let valid: InputValidation[] = this.config.validation
    if (this.config.type != 'policy') {
      for (const iterator of valid) {
        if (iterator.type == ValidationType.DATE) {
          let dateType;
          if (iterator.dateType == DateType.DAY) {
            dateType = 'days'
          } else if (iterator.dateType == DateType.MONTH) {
            dateType = 'months'
          } else {
            dateType = 'years'
          }
          if (iterator.from) {
            let minDate = moment().subtract(iterator.from, dateType)
            this.fromMinDate = minDate.format('YYYY-MM-DD')
            // this.fromMinDate = { year: parseInt(minDate.format('YYYY')), month: parseInt(minDate.format('M')), day: parseInt(minDate.format('D')) };
          } else {
            this.fromMinDate = null
          }
          if (iterator.to) {
            let toDate = moment().add(iterator.to, dateType)
            this.fromMaxDate = toDate.format('YYYY-MM-DD')
            // this.fromMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
          } else {
            this.fromMaxDate = null
          }
        }
        else if ((iterator.type == ValidationType.MAX) && iterator.isAge) {
          let toDate = moment().subtract(iterator.value, `years`)
          this.fromMinDate = toDate.format('YYYY-MM-DD')
          let defVal = this.group.controls[this.config.name].value
          // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
          // if (moment(defVal) < moment(this.fromMinDate)) {
          //   this.alert.activate(iterator.message, "Validation")
          //   this.group.controls[this.config.name].setValue(null)
          // }
        }
        else if (iterator.type == ValidationType.MIN && iterator.isAge) {
          let toDate = moment().subtract(iterator.value, `years`)
          this.fromMaxDate = toDate.format('YYYY-MM-DD')
          let defVal = this.group.controls[this.config.name].value
          // if (moment(defVal) > moment(this.fromMaxDate)) {
            // this.alert.activate(iterator.message, "Validation")
            // this.group.controls[this.config.name].setValue(null)
          // }
          // this.fromMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
        }
      }
    } else {
      let prod = this.prodService.createingProd
      if (prod) {
        if (prod.isAllowBackDate == 'no') {
          let toDate = moment();
          this.fromMinDate = toDate.format('YYYY-MM-DD')
          this.toMinDate = toDate.format('YYYY-MM-DD')
          // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
          // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
        } else if (prod.isAllowBackDate == 'yes') {
          if (prod.allowDays > 0) {
            let toDate = moment().subtract(prod.allowDays, `days`)
            this.fromMinDate = toDate.format('YYYY-MM-DD')
            // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.toMinDate = toDate.format('YYYY-MM-DD')
            // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
          }
        }
        this.listenValid()
      }

    }
    // console.log(this.toMinDate,this.fromMinDate,this.fromMaxDate,this.toMaxDate);


  }



  ngOnDestroy() {
    this.unSub.forEach((sb) => sb.unsubscribe());
  }

  doFunction() {
    if (this.config.isFun) {
      if (this.config.inpFunction.type == FUNCTION_TYPE.TRIGGER) {
        this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue())
      }
    }
  }

  listenFunData() {
    if (this.config.isFun) {
      if (this.config.inpFunction.type == FUNCTION_TYPE.GETDATA) {
        this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
          this.group.controls[this.config.name].setValue(res)
        })
      }
    }
  }

  listenValid() {

    this.unSub[1] = this.globalFun.paPolicyValidationResult.subscribe((res: any) => {
      if (res) {
        let dateType;
        this.valid.value = res.validationValue
        if (res.validationType == 'DAY') {
          dateType = 'days'
        } else if (res.validationType == 'MONTH') {
          dateType = 'months'
        } else {
          dateType = 'years'
        }
        this.valid.type = dateType;
        let toDate;
        if (this.group.controls[this.config.name].value) {
          toDate = moment(this.group.controls[this.config.name].value).add(res.validationValue, dateType)
        } else {
          toDate = moment().add(res.validationValue, dateType)
          this.group.controls[this.config.name].setValue(moment())
        }
        this.toMaxDate = toDate.format('YYYY-MM-DD')
        this.group.controls[this.config.endName].setValue(toDate)
      }
    })
  }

  doValid() {
    let value = this.group.controls[this.config.name].value
    if (value && this.valid.value) {
      let toDate = moment(this.group.controls[this.config.name].value).add(this.valid.value, this.valid.type)
      this.toMaxDate = toDate.format('YYYY-MM-DD')
      this.group.controls[this.config.endName].setValue(toDate)
    }
  }

}
