import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of, OperatorFunction, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MasterDataService } from '../../../modules/master-data/master-data.service';
import { AddOnDataService } from '../services/add-on-data.service';
import { CoverageDataService } from '../services/coverage-data.service';


@Component({
  selector: 'app-coverage-modal',
  templateUrl: './coverage-modal.component.html',
  styleUrls: ['./coverage-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class CoverageModalComponent implements OnInit, OnDestroy {
  prodId: string = ""
  prodCode:string=""
  prodName: string = ""
  isLoading$;
  formGroup: FormGroup;
  lump: boolean = false
  annually: boolean = false
  type: string = 'coverage'
  id: string
  oldData: any = {}
  functionName: any[] = []
  formatter = (result: any) => result;
  private subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder,
    public modal: NgbActiveModal,
    private cdr: ChangeDetectorRef,
    private coverageService: CoverageDataService,
    private addOnService: AddOnDataService,
    private masterData: MasterDataService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.loadForm();
    this.masterData.getDataByType('INPUT_FUN').pipe(map((res: any) => {
      return res.map(x => x.codeName)
    })).toPromise().then((res: any) => {
      // console.log(res);

      this.functionName = res
    })
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.functionName.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  loadForm() {
    this.formGroup = this.fb.group({
      description: [this.oldData.description || null, Validators.compose([Validators.required, Validators.nullValidator])],
      isSum: [{ value: this.oldData.sumInsured || false, disabled: true }, Validators.compose([Validators.required, Validators.nullValidator])],
      isUnit: [{ value: this.oldData.unit || false, disabled: true }, Validators.compose([Validators.required, Validators.nullValidator])],
      isPremium: [{ value: this.oldData.premium || false, disabled: true }, Validators.compose([Validators.required, Validators.nullValidator])],
      code: [this.oldData.code || null],
      validationFun: [this.oldData.validationFun || null],
      sumInsuredFun: [this.oldData.sumInsuredStr || null],
      unitFun: [this.oldData.unitStr || null],
      premiumFun: [this.oldData.premiumStr || null],
    });
  }

  save() {
    if (this.formGroup.valid) {
      let value = this.formGroup.getRawValue()
      let postData = {
        "description": value.description,
        "premium": value.isPremium,
        "premiumStr": value.premiumFun,
        "productId": this.prodId,
        "productCode":this.prodCode,
        "sumInsured": value.isSum,
        "sumInsuredStr": value.sumInsuredFun,
        "unit": value.isUnit,
        "unitStr": value.unitFun,
        "code": value.code,
        "validationFun": value.validationFun,
      }
      const optionService = this.type == 'coverage' ? this.coverageService : this.addOnService

      if (this.oldData.id) {
        optionService.updateNoID({ ...postData, id: this.id }).toPromise().then((res: any) => {
          if (res) {
            this.modal.dismiss({ data: postData, type: 'save' })
          }
        })
      } else {
        optionService.save(postData).toPromise().then((res: any) => {
          if (res) {
            this.modal.dismiss({ data: postData, type: 'save' })
          }
        })
      }

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

  changeCheck(event: any, type) {
    let value = event.target.checked
    if (type == 'sum') {
      if (value) {
        this.formGroup.controls.sumInsuredFun.setValidators([Validators.required, Validators.nullValidator]);
      } else {
        this.formGroup.controls.sumInsuredFun.setValidators(null);
      }
    } else if (type == 'unit') {
      if (value) {
        this.formGroup.controls.unitFun.setValidators([Validators.required, Validators.nullValidator]);
      } else {
        this.formGroup.controls.unitFun.setValidators(null);
      }
    } else if (type == 'premium') {
      if (value) {
        this.formGroup.controls.premiumFun.setValidators([Validators.required, Validators.nullValidator]);
      } else {
        this.formGroup.controls.premiumFun.setValidators(null);
      }
    }
    this.cdr.detectChanges()
    this.formGroup.updateValueAndValidity();
  }

  deleteEditModal() {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.modal.dismiss({ type: 'delete' });
      }
    });
  }
}
