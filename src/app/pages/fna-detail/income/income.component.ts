import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { FNAConstant } from '../fna-constant';
import { FANService } from '../fna-manage.service';
import { FANIncomeManageService } from './income-manage.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  @Input() fnaIncome: any = {};
  @Input() fnaId: any = {};
  @Input() customerId: any = null;

  @Output() changeAnalysis: EventEmitter<string> = new EventEmitter<string>();
  formGroup: FormGroup;
  income = {
    estimatedMonthlyIncome: null,
    estimatedMonthlyIncomeText: null,
    familyMonthlySpending: 0,
    familyMonthlySpendingText: null,
    fnaId: null,
    id: null,
    sourceOfIncome: null,
    createdAt: null,
    updatedAt: null
  }

  constructor(private fb: FormBuilder, private cdf: ChangeDetectorRef, private alertService: AlertService,
    private fnaIncomeManageService: FANIncomeManageService, public fnaService: FANService) { }

  ngOnInit(): void {
    this.loadForm();
    if (this.fnaService.fnaIncome) {
      FNAConstant.FNA_DETAIL_OBJ = this.fnaService.fnaIncome;
      this.setIncome(this.fnaService.fnaIncome);
    }
  }



  loadForm() {
    this.formGroup = this.fb.group({
      estimatedMonthlyIncome: [this.income.estimatedMonthlyIncome, Validators.compose([])],
      estimatedMonthlyIncomeText: [this.income.estimatedMonthlyIncomeText, Validators.compose([Validators.required, Validators.nullValidator])],
      familyMonthlySpending: [this.income.familyMonthlySpending || null, Validators.compose([Validators.required, Validators.nullValidator])],
      familyMonthlySpendingText: [this.income.familyMonthlySpendingText, Validators.compose([Validators.required, Validators.nullValidator])],
      fnaId: [this.income.fnaId, Validators.compose([])],
      id: [this.income.id, Validators.compose([])],
      sourceOfIncome: [this.income.sourceOfIncome, Validators.compose([])],
      createdAt: [this.income.createdAt, Validators.compose([])],
      updatedAt: [this.income.updatedAt, Validators.compose([])]
    });
    this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
    this.cdf.detectChanges()
  }

  setIncome(data) {
    this.formGroup.controls['estimatedMonthlyIncome'].setValue(data.estimatedMonthlyIncome);
    this.formGroup.controls['estimatedMonthlyIncomeText'].setValue(this.fnaService.mathRoundTo(data.estimatedMonthlyIncome, 2));
    this.formGroup.controls['familyMonthlySpending'].setValue(data.familyMonthlySpending);
    this.formGroup.controls['familyMonthlySpendingText'].setValue(this.fnaService.mathRoundTo(data.familyMonthlySpending, 2));
    this.formGroup.controls['fnaId'].setValue(data.fnaId);
    this.formGroup.controls['id'].setValue(data.id);
    this.formGroup.controls['sourceOfIncome'].setValue(data.sourceOfIncome);
    this.formGroup.controls['createdAt'].setValue(data.createdAt);
    this.formGroup.controls['updatedAt'].setValue(data.updatedAt);
    this.cdf.detectChanges();
  }



  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  async getFNAIncome() {
    await this.fnaIncomeManageService.getFNAIncome(this.fnaId).toPromise().then((res) => {
      if (res) {
        this.setIncome(res);
      }
    })
  }

  backAction() {
    this.changeAnalysis.emit('aboutLLP');
  }

  async saveFNAIncome() {
    if (this.formGroup.invalid) {
      validateAllFields(this.formGroup);
    } else {
      if (this.formGroup.value.id) {
        await this.fnaIncomeManageService.updateFNAIncome(this.formGroup.value).toPromise().then((res) => {
          if (res) {
            this.alertService.activate('This record was updated', 'Success Message').then(result => {
              this.backAction();
            });
          }
        })
      } else {
        await this.fnaIncomeManageService.saveFNAIncome(this.formGroup.value).toPromise().then((res) => {
          if (res) {
            this.alertService.activate('This record was created', 'Success Message').then(result => {
              this.backAction();
            });
          }
        })
      }    
    }
  }

  calculateMonthlyIncome(ev) {
    let familyMonthlySpending = Number(ev.replace(/,/g, ''));
    let estimatedMonthlyIncome = familyMonthlySpending / 0.9;
    if (ev) {
      var num = this.fnaService.getNumber(ev);
      if (num != 0) {
        if (this.formGroup.value.familyMonthlySpending != 0) {
          let estimatedMonthlyIncome = Number(ev.replace(/,/g, '')) / 0.9;
          this.formGroup.controls['estimatedMonthlyIncomeText'].setValue(this.fnaService.mathRoundTo(estimatedMonthlyIncome, 2));
        }
      }
    }
    this.formGroup.controls['familyMonthlySpending'].setValue(familyMonthlySpending);
    this.formGroup.controls['estimatedMonthlyIncome'].setValue(estimatedMonthlyIncome);
  }

  updateCommaInput(ev) {
    var num = this.fnaService.getNumber(ev.target.value);
    if (num == 0) {
      this.formGroup.controls['familyMonthlySpendingText'].setValue('');
      this.formGroup.controls['estimatedMonthlyIncomeText'].setValue('');
    } else {
      this.formGroup.controls['familyMonthlySpendingText'].setValue(num.toLocaleString());
    }
  }

  viewAll() {
    if (this.fnaService.fnaIncome) {
      this.fnaService.openModal('Income');
    }
  }

}
