import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { mergeMap, switchMap } from 'rxjs/operators';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { validateAllFields } from '../../../core/valid-all-feild';
import { AuthService } from '../../../modules/auth';
import { CustomAdapter, CustomDateParserFormatter } from '../../../_metronic/core';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { FireProductService } from './models&services/fire-product.service';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { FirePageID } from '../static-pages.data';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../../core/is-json';
@Component({
  selector: 'app-fire-simple-page',
  templateUrl: './fire-simple-page.component.html',
  styleUrls: ['./fire-simple-page.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class FirePageComponent implements OnInit, OnDestroy {

  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId?: string
  @Input() premiumAmt: string
  @Input() sumInsured:any
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  staticForm: FormGroup
  toMinDate = null
  fromMinDate = null
  toMaxDate = null
  fromMaxDate = null
  dobMinDate = null
  dobMaxDate = null
  validValue: number = 365
  options: any[] = []
  options2: any[] = []
  addOns: any = {}
  options3: any[] = []
  oldData: any
  options4: any[] = []
  durtaionOption: any = [
    {
      code: 'D', value: 'Days'
    },
    {
      code: 'F', value: 'Months'
    },
    {
      code: 'G', value: 'Years'
    },
  ]
  private editId: number
  refID: string
  currencyType: string = "MMK"
  unsub: Subscription[] = []
  constructor(
    private fb: FormBuilder,
    private prodService: ProductDataService,
    private auth: AuthService,
    private fireService: FireProductService,
    private globalFun: GlobalFunctionService,
    private addOnQuoService: AddOnQuoService,
    private coverageQuoService: CoverageQuoService,
    private alertService: AlertService,
    private cdf: ChangeDetectorRef,
    private alert:AlertService
  ) {
    this.staticForm = this.fb.group({
      startDate: [null, Validators.compose([Validators.required])],
      endDate: [null, Validators.compose([Validators.required])],
      policyType: ['T-NM', Validators.compose([Validators.required])],
      policyDuration: [null, Validators.compose([Validators.required, Validators.max(365)])],
      currency: ['MMK', Validators.compose([Validators.required])],
      policyUnit: ['D', Validators.compose([Validators.required])]
    })
    this.options3 = Array.from({ length: 10 }, (_, i) => i + 1);
  }

  updateValidation(oldDataType?) {
    let type;
    if (oldDataType) {
      type = oldDataType
    }
    type = this.staticForm.value.policyUnit

    if (type == 'D') {
      this.staticForm.controls.policyDuration.clearValidators()
      this.staticForm.controls.policyDuration.setValidators([Validators.required, Validators.max(365)])
      this.staticForm.controls.policyDuration.updateValueAndValidity()
      this.validValue = 365
      this.doValid()
    }
    else if (type == 'F') {
      this.staticForm.controls.policyDuration.clearValidators()
      this.staticForm.controls.policyDuration.setValidators([Validators.required, Validators.max(12)])
      this.staticForm.controls.policyDuration.updateValueAndValidity()
      this.validValue = 12
      this.doValid()
    } else {
      this.staticForm.controls.policyDuration.clearValidators()
      this.staticForm.controls.policyDuration.setValidators([Validators.required, Validators.max(1)])
      this.staticForm.controls.policyDuration.updateValueAndValidity()
      this.validValue = 1
      this.doValid()
    }
  }
  ngOnDestroy(): void {
    this.unsub.forEach(x => x.unsubscribe())
  }
  async ngOnInit() {
   
    this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
      if (this.currencyType != res) {
        this.currencyType = res
      }
    });

   

    this.options = this.product.coverages
    this.options2 = this.product.addOns
    this.refID = this.prodService.referenceID
    let toDate = moment().subtract(5, `days`)
    this.fromMinDate = toDate.format('YYYY-MM-DD')
    // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
    this.toMinDate = toDate.format('YYYY-MM-DD')
    // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
    let dobMaxDate = moment().subtract(6, `years`)
    this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD')
    // this.dobMaxDate = { year: parseInt(dobMaxDate.format('YYYY')), month: parseInt(dobMaxDate.format('M')), day: parseInt(dobMaxDate.format('D')) };
    let dobMinDate = moment().subtract(75, `years`)
    this.dobMinDate = dobMinDate.format('YYYY-MM-DD')
    // this.dobMinDate = { year: parseInt(dobMinDate.format('YYYY')), month: parseInt(dobMinDate.format('M')), day: parseInt(dobMinDate.format('D')) };
    // if (this.prodService.editData || this.refID)
    this.getOldData()
    this.updateValidation()
    // this.getAddOn()
    // for (const item of this.product.addOns) {
    //   let response: any = null;
    //   try {
    //     if (this.editData) {
    //       response = await this.addOnQuoService.getOne(item.id, this.editData.id).toPromise()
    //     }
    //   } catch (error) {
    //     response = null
    //   }
    //   this.addOns[item.id + 'opt'] = response ? response.sumInsured || 0 : 0
    // }

    this.staticForm.controls.policyType.setValue('T-NM');
    this.staticForm.controls.currency.setValue('MMK');
  }


  doValid() {
    let value = this.staticForm.controls['startDate'].value
    let duration = this.staticForm.controls['policyDuration'].value
    let type = this.staticForm.controls['policyUnit'].value
    if (value && duration && type == 'D') {
      let toDate = moment(this.staticForm.controls['startDate'].value).add(duration, 'days').subtract(1, 'days')
      // this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
      this.staticForm.controls['endDate'].setValue(toDate)
    } else if (value && duration && type == 'F') {
      let toDate = moment(this.staticForm.controls['startDate'].value).add(duration, 'month').subtract(1, 'days')
      this.staticForm.controls['endDate'].setValue(toDate)
    }
    else {
      let toDate = moment(this.staticForm.controls['startDate'].value).add(duration, 'year').subtract(1, 'days')
      this.staticForm.controls['endDate'].setValue(toDate)
    }
  }

  calcuteDay() {
    let startDate = moment(this.staticForm.controls['startDate'].value)
    let endDate = moment(this.staticForm.controls['endDate'].value)
    let diffDays = startDate.diff(endDate, "days") + 1
    this.staticForm.controls['policyDuration'].setValue(diffDays)
  }

  get controls() {
    return this.staticForm.controls
  }

  // helpers for View
  isControlValid(controlName: string, group: FormGroup): boolean {
    const control = group.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string, group: FormGroup): boolean {
    const control = group.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName, group: FormGroup): boolean {
    const control = group.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName, group: FormGroup): boolean {
    const control = group.controls[controlName];
    return control.dirty || control.touched;
  }
  nextPage() {
    if (this.staticForm.invalid) {
        if(this.staticForm.controls['startDate'].errors){
          this.alert.activate('Back Date Not Allowed', 'Error')
        }else{
          validateAllFields(this.staticForm)
          return true
        }
      
    } else {
      if (this.editId) {
        this.saveData(this.editId)
      } else {
        this.saveData()
      }
    }
  }

  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }

  saveData(id?) {
    const formValue = this.staticForm.value
    let postData = {
      id: id || null,
      endDate: moment(formValue.endDate).format("YYYY-MM-DD"),
      startDate: moment(formValue.startDate).format("YYYY-MM-DD"),
      policyType: formValue.policyType,
      policyDuration: formValue.policyDuration,
      currency: formValue.currency,
      policyUnit: formValue.policyUnit,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId || 1,
        policyNumber: null,
        premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
        premiumView: this.premiumAmt,
        // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
        // sumInsuredView:this.sumInsured,
        policyInceptionDate: moment(this.staticForm.controls['startDate'].value).format("YYYY-MM-DD"),
        policyExpireDate: moment(this.staticForm.controls['endDate'].value).format("YYYY-MM-DD"),
        productId: this.prodService.createingProd.id,
        productCode: this.prodService.createingProd.code,
        quotationId: this.prodService.referenceID,
        leadId: this.prodService.creatingLeadId || null,
        currency: this.currencyType,
        // status: ,
        type: this.prodService.type
      },
      resourceId: this.resourcesId,
    }
    this.globalFun.currenyValueObs.next(formValue.currency)
    // console.log(postData);
    if (!id) {
      this.fireService.save(postData).toPromise().then((res: any) => {
        if (res) {
          this.editId = res.id
          this.resourcesId = res.resourceId
          this.globalFun.tempFormData[FirePageID] = { id: res.id, ...postData }
          this.actionEvent.emit({ type: StaticActionType.NEXT, data: { ...res } })
        }
      }).catch((e) => e)
    } else {
      this.fireService.updateNoID(postData).toPromise().then((res: any) => {
        if (res) {
          this.editId = res.id
          this.globalFun.tempFormData[FirePageID] = { id: res.id, ...postData }
          this.actionEvent.emit({ type: StaticActionType.NEXT, data: { ...res } })
        }
      }).catch((e) => e)
    }

  }

  // .pipe(mergeMap(resources => {
  //   return resources
  // }))
  getOldData(dataget: boolean = false) {
    // let dataget = false
    console.log(this.resourcesId);

    if (this.resourcesId || this.refID) {
      let resId = dataget ? this.refID : (this.resourcesId || this.refID)
      if (!resId) return false
      this.fireService.getOne(resId).toPromise().then((res: any) => {
        // dataget = true
        if (res) {
          this.oldData = { ...res, id: null }
          this.editId = resId == this.resourcesId ? res.id : null
          this.reloadOldValueForm()
        } else {
          if (!dataget && resId != this.refID) {
            this.getOldData(true)
          }
        }
      })
    }
  }

  reloadOldValueForm() {
    this.staticForm.patchValue({
      startDate: moment(this.oldData.startDate),
      endDate: moment(this.oldData.endDate),
      policyType: this.oldData.policyType,
      policyDuration: this.oldData.policyDuration,
      currency: this.oldData.currency,
      policyUnit: this.oldData.policyUnit,
    })
    this.updateValidation(this.oldData.policyUnit)
    this.cdf.detectChanges()
  }

}