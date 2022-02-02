import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { HealthProductService } from './models&services/health-product.service';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { forkJoin, Observable, of } from 'rxjs';
import { HealthPageID } from '../static-pages.data';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatRadioChange } from '@angular/material/radio';
import { MY_FORMATS } from '../../../core/is-json';
@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class SimplePageComponent implements OnInit {

  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() resourcesId?: string
  @Input() premiumAmt: string
  @Output() actionEvent = new EventEmitter<StaticPageAction>();
  staticForm: FormGroup
  toMinDate = null
  fromMinDate = null
  toMaxDate = null
  fromMaxDate = null
  dobMinDate = null
  dobMaxDate = null
  options: any[] = []
  options2: any[] = []
  addOns: any = {}
  options3: any[] = []
  oldData: any
  options4: any[] = []
  private editId: number
  refID: string
  constructor(
    private fb: FormBuilder,
    private prodService: ProductDataService,
    private auth: AuthService,
    private healthService: HealthProductService,
    private globalFun: GlobalFunctionService,
    private addOnQuoService: AddOnQuoService,
    private coverageQuoService: CoverageQuoService,
    private alertService: AlertService,
    private cdf: ChangeDetectorRef
  ) {
    this.staticForm = this.fb.group({
      insuranceStartDate: [null, Validators.compose([Validators.required])],
      insuranceEndDate: [null, Validators.compose([Validators.required])],
      dateOfBirth: [null, Validators.compose([Validators.required])],
      basicCoverId: ['Health Insurance', Validators.compose([Validators.required])],
      paymentFrequency: [null, Validators.compose([Validators.required])],
      sumInsuredMainCover: [null, Validators.compose([Validators.required])],
      medicalCardNo: [null],
    })
    this.options3 = Array.from({ length: 10 }, (_, i) => i + 1)
  }

  async ngOnInit() {

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
  }

  radioChange($event: MatRadioChange) {

    if ($event.value === 'Health Insurance') {
      let dobMaxDate = moment().subtract(6, `years`)
      this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD')
      let dobMinDate = moment().subtract(75, `years`)
      this.dobMinDate = dobMinDate.format('YYYY-MM-DD')
    } else {
      let dobMaxDate = moment().subtract(6, `years`)
      this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD')
      let dobMinDate = moment().subtract(60, `years`)
      this.dobMinDate = dobMinDate.format('YYYY-MM-DD')
    }
    this.cdf.detectChanges()
  }

  doValid() {
    let value = this.staticForm.controls['insuranceStartDate'].value
    if (value) {
      let toDate = moment(this.staticForm.controls['insuranceStartDate'].value).add(1, 'years')
      this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
      this.staticForm.controls['insuranceEndDate'].setValue(toDate.format('YYYY-MM-DD'))
    }
  }

  getUnitOption() {
    let leng = this.controls.sumInsuredMainCover.value
    if (leng != this.options4.length) {
      this.options4 = Array.from({ length: leng }, (_, i) => i + 1)
      for (let addon of this.options2) {
        this.addOns[addon.id + 'value'] = leng
      }
    }

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
      validateAllFields(this.staticForm)
      return true
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
    let coverd = this.product.coverages.find(x => x.description == formValue.basicCoverId)
    if (!coverd) {
      this.alertService.activate("This page cann't to save because there is not match coverage in product detail. Please configuration the product detail", "Warning")
      return false
    }
    let postData = {
      basicCoverId: formValue.basicCoverId,
      id: id || null,
      insuranceEndDate: formValue.insuranceEndDate,
      insuranceStartDate: formValue.insuranceStartDate,
      medicalCardNo: formValue.medicalCardNo,
      paymentFrequency: formValue.paymentFrequency,
      dateOfBirth: formValue.dateOfBirth,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId || 1,
        policyNumber: null,
        premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
        premiumView: this.premiumAmt,
        productId: this.prodService.createingProd.id,
        quotationId: this.prodService.referenceID,
        leadId: this.prodService.creatingLeadId || null,
        // status: ,
        type: this.prodService.type
      },
      resourceId: this.resourcesId,
      sumInsuredMainCover: formValue.sumInsuredMainCover,
    }
    // console.log(postData);
    if (!id) {
      this.healthService.save(postData).toPromise().then((res: any) => {
        if (res) {
          this.editId = res.id
          this.resourcesId = res.resourceId
          this.saveCoverAddon()
          this.globalFun.tempFormData[HealthPageID] = { id: res.id, ...postData, addOns: this.addOns }
          this.actionEvent.emit({ type: StaticActionType.NEXT, data: { ...res } })
        }
      }).catch((e) => e)
    } else {
      this.healthService.updateNoID(postData).toPromise().then((res: any) => {
        if (res) {
          this.editId = res.id
          this.saveCoverAddon()
          this.globalFun.tempFormData[HealthPageID] = { id: res.id, ...postData, addOns: this.addOns }
          this.actionEvent.emit({ type: StaticActionType.NEXT, data: { ...res } })
        }
      }).catch((e) => e)
    }

  }

  async saveCoverAddon() {
    await this.saveCoverage().toPromise()
    await this.saveAddOn().toPromise()
    // return forkJoin(this.saveCoverage(), this.saveAddOn())
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
      this.healthService.getOne(resId).toPromise().then((res: any) => {
        // dataget = true
        if (res) {
          this.oldData = { ...res, id: null }
          this.editId = resId == this.resourcesId ? res.id : null
          this.getAddOn()
          this.reloadOldValueForm()
        } else {
          if (!dataget && resId != this.refID) {
            this.getAddOn(true)
            this.getOldData(true)
          }
        }
      })
    }
  }

  reloadOldValueForm() {
    this.staticForm.patchValue({
      insuranceStartDate: moment(this.oldData.insuranceStartDate),
      insuranceEndDate: moment(this.oldData.insuranceEndDate),
      dateOfBirth: moment(this.oldData.dateOfBirth),
      basicCoverId: this.oldData.basicCoverId,
      paymentFrequency: this.oldData.paymentFrequency,
      sumInsuredMainCover: this.oldData.sumInsuredMainCover,
      medicalCardNo: this.oldData.medicalCardNo,
    })
    this.getUnitOption()
  }

  saveCoverage(): Observable<any> {
    let basicCoverId = this.staticForm.controls.basicCoverId.value
    let value = this.staticForm.controls.sumInsuredMainCover.value
    let coverd = this.product.coverages.find(x => x.description == basicCoverId)
    if (coverd) {
      let postData = {
        coverageId: coverd.id,
        quotationNo: this.resourcesId,
        sumInsured: value,
        unit: null,
        premium: null,
      }
      return this.coverageQuoService.deleteAll(this.resourcesId).pipe(switchMap((x: any) => {
        // console.log(x, "cov");
        return this.coverageQuoService.save(postData)
      }))
      // .toPromise().then(res => {
      //   if (res) {

      //   }
      // })
    }
    return of([])
  }

  async getAddOn(dataget: boolean = false) {
    if (this.resourcesId || this.refID) {
      let callAgain = true
      let resId = dataget ? this.refID : (this.resourcesId || this.refID)
      if (!resId) return false
      for (const item of this.product.addOns) {
        let response: any = {};
        try {
          response = await this.addOnQuoService.getOne(item.id, resId).toPromise()
        } catch (error) {
        }
        if (response) {
          callAgain = false
          this.addOns[item.id + 'opt'] = response.sumInsured ? true : false
          this.addOns[item.id + 'value'] = response.sumInsured
        } else {
          this.addOns[item.id + 'opt'] = false
          this.addOns[item.id + 'value'] = null
        }

      }
      // if (callAgain && resId != this.refID && !dataget) {
      //   this.getAddOn(true)
      // } else {
      this.cdf.detectChanges()
      // }
    }
  }


  saveAddOn() {
    const formValue = this.staticForm.value
    return this.addOnQuoService.deleteAll(this.resourcesId).pipe(mergeMap((x: any) => {
      // return this.coverageQuoService.save(postData)
      return forkJoin(this.options2.map(option => {
        if (formValue.basicCoverId == "Health Insurance") {
          if (this.addOns[option.id + 'opt']) {
            let postData = {
              addonId: option.id,
              quotationNo: this.resourcesId,
              sumInsured: this.addOns[option.id + 'value'],
              unit: null,
              premium: null,
            }
            return this.addOnQuoService.save(postData)
          } else {
            this.addOns[option.id + 'opt'] = false
            this.addOns[option.id + 'value'] = 0
            return of(null)
          }
        } else {
          return of(null)
        }
      }))
    }))
  }
}