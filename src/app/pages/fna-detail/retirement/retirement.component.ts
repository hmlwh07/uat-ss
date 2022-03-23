import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { FNAConstant } from '../fna-constant';
import { FANService } from '../fna-manage.service';
import { RetirementDto } from './retirement-manage.dto';
import { FANRetirementService } from './retirement-manage.service';

@Component({
  selector: 'app-retirement',
  templateUrl: './retirement.component.html',
  styleUrls: ['./retirement.component.scss']
})
export class RetirementComponent implements OnInit {
  @Input() retirement: any = null;
  @Input() fnaId: any = null;
  @Input() customerDob: any = null;
  @Input() customerId: any = null;

  @Output() changeAnalysis: EventEmitter<string> = new EventEmitter<string>();
  formGroup: FormGroup;
  retirementDto: RetirementDto = new RetirementDto();
  currentIncome: any = null;
  isCalculate: boolean = false;
  toMaxDate: { year: number; month: number; day: number; };
  fromMinDate = null
  fromMaxDate = new Date();

  constructor(private fb: FormBuilder, private cdf: ChangeDetectorRef, private alertService: AlertService,
    private fnaRetirementService: FANRetirementService, public fnaService: FANService) { }

  ngOnInit(): void {
    this.loadForm();
    console.log('customerDob', this.customerDob);

    if (this.fnaService.fnaIncome) {
      this.currentIncome = this.fnaService.fnaIncome.estimatedMonthlyIncome;
    }

    if (this.fnaService.fnaRetirementSaving) {
      this.isCalculate = true;
      FNAConstant.FNA_DETAIL_OBJ = this.fnaService.fnaRetirementSaving;
      this.setRetirement(this.fnaService.fnaRetirementSaving);
    } else {
      if (this.customerDob) {
       
        //console.log('formatDateDDMMYYY ', this.doValid('dateOfBirth'));
        this.formGroup.controls['dateOfBirth'].setValue(this.customerDob)
        this.doValid('dateOfBirth')

       // this.formGroup.controls['dateOfBirth'].setValue(this.formatDateDDMMYYY(new Date(this.customerDob)));
      }
    }
  }

  backAction() {
    this.changeAnalysis.emit('aboutLLP');
  }

  loadForm() {
    this.formGroup = new FormGroup({
      dateOfBirth: new FormControl(this.retirementDto.dateOfBirth),
      fnaId: new FormControl(this.retirementDto.fnaId || null),
      id: new FormControl(this.retirementDto.id || 0),
      retirementAge: new FormControl(this.retirementDto.retirementAge || '', [Validators.required, Validators.nullValidator]),
      retirementIncome: new FormControl(this.retirementDto.retirementIncome || ''),
      retirementSaving: new FormControl(this.retirementDto.retirementSaving || ''),
      retirementSavingSpouse: new FormControl(this.retirementDto.retirementSavingSpouse || ''),
      retirementIncomeText: new FormControl(this.retirementDto.retirementIncomeText || ''),
      retirementSavingText: new FormControl(this.retirementDto.retirementSavingText || ''),
      retirementSavingSpouseText: new FormControl(this.retirementDto.retirementSavingSpouseText || ''),
      createdAt: new FormControl(this.retirementDto.createdAt || ''),
      updatedAt: new FormControl(this.retirementDto.updatedAt || '')
    });
    this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
  }

  getRetirement() {
    let dateOfBirth: string = '';
    if (this.formGroup.value.dateOfBirth) {
      dateOfBirth = this.formatDateYYYYMMDD(this.formGroup.value.dateOfBirth);
    }
    let retirement = {
      dateOfBirth: dateOfBirth,
      fnaId: this.formGroup.value.fnaId,
      id: this.formGroup.value.id,
      retirementAge: this.formGroup.value.retirementAge,
      retirementIncome: this.formGroup.value.retirementIncome,
      retirementSaving: this.formGroup.value.retirementSaving,
      retirementSavingSpouse: this.formGroup.value.retirementSavingSpouse,
      createdAt: this.formGroup.value.createdAt,
      updatedAt: this.formGroup.value.updatedAt
    }
    return retirement;
  }

  setRetirement(data) {
    if (data.dateOfBirth) {
      data.dateOfBirth = data.dateOfBirth
    }
    this.formGroup.controls['dateOfBirth'].setValue(data.dateOfBirth);
    this.formGroup.controls['fnaId'].setValue(data.fnaId);
    this.formGroup.controls['id'].setValue(data.id);
    this.formGroup.controls['fnaId'].setValue(data.fnaId);
    this.formGroup.controls['retirementAge'].setValue(60);
    this.formGroup.controls['retirementIncome'].setValue(data.retirementIncome);
    this.formGroup.controls['retirementSaving'].setValue(data.retirementSaving);
    this.formGroup.controls['retirementSavingSpouse'].setValue(data.retirementSavingSpouse);
    this.formGroup.controls['retirementIncomeText'].setValue(this.fnaService.mathRoundTo(data.retirementIncome, 2));
    this.formGroup.controls['retirementSavingText'].setValue(this.fnaService.mathRoundTo(data.retirementSaving, 2));
    this.formGroup.controls['retirementSavingSpouseText'].setValue(this.fnaService.mathRoundTo(data.retirementSavingSpouse, 2));
    this.formGroup.controls['createdAt'].setValue(data.createdAt);
    this.formGroup.controls['updatedAt'].setValue(data.updatedAt);
  }



  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  async saveRetirement() {
    if (this.formGroup.invalid) {
      validateAllFields(this.formGroup);
    } else {
      await this.calculate();
      if (this.formGroup.value.id) {
        await this.fnaRetirementService.updateRetirement(this.getRetirement()).toPromise().then((res: any) => {
          if (res) {
            this.alertService.activate('This record was updated', 'Success Message').then(result => {
              this.backAction()
            });
          }
        });
      } else {
        await this.fnaRetirementService.saveRetirement(this.getRetirement()).toPromise().then((res: any) => {
          if (res) {
            this.formGroup.controls['id'].setValue(res);
            this.alertService.activate('This record was created', 'Success Message').then(result => {
              this.backAction()
            });
          }
        });
      }
    }
  }





  calculate() {
    console.log('calculate', this.formGroup.value.dateOfBirth);

    this.isCalculate = true;
    let diffAge = (this.formGroup.value.retirementAge - this.calculate_age(new Date(this.formGroup.value.dateOfBirth.split("-").reverse().join("-"))));
    let percent = 1 + (5 / 100);
    let double: any = Number(this.fnaService.mathRoundTo(this.currentIncome, 2).replace(/,/g, ''))
    let retirementIncome = double * percent ^ diffAge;
    let retirementSaving = (80 / 100) * retirementIncome;
    let retirementSavingSpouse = retirementSaving * 1.35;

    let calcRetirementIncome = this.fnaService.mathRoundTo(retirementIncome, 2);
    let calcRetirementSaving = this.fnaService.mathRoundTo(retirementSaving, 2);
    let calcRetirementSavingSpouse = this.fnaService.mathRoundTo(retirementSavingSpouse, 2);

    this.formGroup.controls['retirementIncome'].setValue(retirementIncome);
    this.formGroup.controls['retirementSaving'].setValue(retirementSaving);
    this.formGroup.controls['retirementSavingSpouse'].setValue(retirementSavingSpouse);

    this.formGroup.controls['retirementIncomeText'].setValue(calcRetirementIncome);
    this.formGroup.controls['retirementSavingText'].setValue(calcRetirementSaving);
    this.formGroup.controls['retirementSavingSpouseText'].setValue(calcRetirementSavingSpouse);

  }

  calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  formatDateYYYYMMDD(date) {
    var d = new Date(date.split("/").reverse().join("/")),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  formatDateDDMMYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }

  viewAll() {
    console.log('fnaRetirementSaving', this.fnaService.fnaRetirementSaving);
    if (this.fnaService.fnaRetirementSaving) {
      this.fnaService.openModal('RetirementSaving');
    }
  }

  doValid(type) { 
    console.log('doValid', type);

    if (type == 'dateOfBirth') {
      let value = this.formGroup.controls['dateOfBirth'].value;
      if (value) {
        let toDate = moment(this.formGroup.controls['dateOfBirth'].value).add(0, 'years')
        this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
        this.formGroup.controls['dateOfBirth'].setValue(toDate.format('YYYY-MM-DD'))
      }
    }
  }

}
