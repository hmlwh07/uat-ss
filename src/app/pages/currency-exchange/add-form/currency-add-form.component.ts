import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { MY_FORMATS } from 'src/app/core/is-json';
import { validateAllFields } from '../../../core/valid-all-feild';
import { MasterDataService } from '../../../modules/master-data/master-data.service';
import * as moment from "moment";
@Component({
  selector: 'app-currency-add-form',
  templateUrl: './currency-add-form.component.html',
  styleUrls: ['./currency-add-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class CurrencyAddFormComponent implements OnInit, AfterViewInit {

  formGroup: FormGroup
  currencyType: string[] = []
  id: number
  @Input() isModal: boolean = false
  @Input() isEdit: boolean = false
  oldData: any = {}
  @Output() formSubmit = new EventEmitter();
  constructor(private masterDataService: MasterDataService, public modal: NgbModal, private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      type: new FormControl(this.oldData.type || "usd", [Validators.required]),
      amount: new FormControl(this.oldData.amount || null, [Validators.required]),
      date: new FormControl(this.oldData.date ? moment(this.oldData.date) : null,[Validators.required]),
    })
  }

  ngAfterViewInit() {
    this.getType()
  }
  // type
  // amount

  getType() {
    this.masterDataService.getDataByType("CURRENCY_TYPE").pipe(map((res: any) => {
      return res.map(x => x.codeId)
    })).toPromise().then((res: any) => {
      if (res) {
        this.currencyType = res
        this.cdf.detectChanges()
      }
    })
  }

  isControlValid(controlName: string, type?: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string, type?: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName, type?: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName, type?: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  saveData() {
    
    if (this.formGroup.valid) {
      if (this.isModal) {
        let date=this.convertDateFormatDDMMYYY(this.formGroup.value.date)
        // console.log("date",date);
        
        this.formGroup.controls['date'].setValue(date)  
        this.modal.dismissAll({ data: { ...this.formGroup.value, id: this.id }, cmd: 'save' })
      } else {
        this.formSubmit.emit({ ...this.formGroup.value })
      }
    } else {
      validateAllFields(this.formGroup)
    }
  }

  convertDateFormatDDMMYYY(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

}
