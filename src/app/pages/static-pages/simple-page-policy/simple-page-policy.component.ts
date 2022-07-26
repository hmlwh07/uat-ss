import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { AuthService } from '../../../modules/auth';
import { CustomAdapter, CustomDateParserFormatter } from '../../../_metronic/core';
import { PolicyDTO } from '../../policy/policy.dto';
import { Product, ProductPages } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { QuotationDTO } from '../../quotations/quotation.dto';
import { StaticActionType, StaticPageAction } from '../static-field.interface';
import { CoverageQuoService } from '../../products/services/coverage-quo.service';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { HealthProductService } from '../simple-page/models&services/health-product.service';
import { HealthPaymentService } from '../health-quo/models&services/health-payment.service';
import { HealthPageID } from '../static-pages.data';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { IsJsonString, MY_FORMATS } from '../../../core/is-json';
@Component({
  selector: 'app-simple-page-policy',
  templateUrl: './simple-page-policy.component.html',
  styleUrls: ['./simple-page-policy.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class SimplePagePolicyComponent implements OnInit, OnDestroy {

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
  options: any[] = []
  options2: any[] = []
  addOns: any = {}
  options3: any[] = []
  oldData: any
  options4: any[] = []
  private editId: number
  refID: string
  optionArray: any[] = []
  tempArray: any[] = []
  totalResult = {
    unit: 0,
    premium: 0,
  }
  policyTerm = {
    "lump": "Lump Sum",
    "semi_annually": "Semi-Annually"
  }

  totalP: number = 0
  parentData: any
  currentAge = 0
  dob: string = ""
  totalL: number = 0
  currencyType: string = "MMK"
  unsub: Subscription[] = []
  constructor(
    private fb: FormBuilder,
    private prodService: ProductDataService,
    private healthService: HealthProductService,
    private alertService: AlertService,
    private healthPayService: HealthPaymentService,
    private auth: AuthService,
    private globalFun: GlobalFunctionService,
    private coverageQuoService: CoverageQuoService,
    private addOnQuoService: AddOnQuoService,
    private numberPipe: DecimalPipe,
    private cdf: ChangeDetectorRef
  ) {
    this.staticForm = this.fb.group({
      insuranceStartDate: [{ value: null, disabled: true }, Validators.compose([Validators.required])],
      insuranceEndDate: [{ value: null, disabled: true }, Validators.compose([Validators.required])],
      dateOfBirth: [{ value: null, disabled: true },],
      basicCoverId: [{ value: 'Health Insurance', disabled: true }, Validators.compose([Validators.required])],
      paymentFrequency: [{ value: null, disabled: true }, Validators.compose([Validators.required])],
      sumInsuredMainCover: [{ value: null, disabled: true }, Validators.compose([Validators.required])],
      medicalCardNo: [{ value: null, disabled: true }],
    })
    this.options3 = Array.from({ length: 10 }, (_, i) => i + 1)
  }

  ngOnDestroy(): void {
    this.unsub.forEach(x => x.unsubscribe())
  }

  async ngOnInit() {
    this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
      if (this.currencyType != res) {
        this.currencyType = res
      }
    })
    this.refID = this.prodService.referenceID
    if (!this.refID) {
      this.alertService.activate("This page cann't to show because there is no health product detail quotation data.", "Warning")
    }
    this.options = this.product.coverages
    this.options2 = this.product.addOns
    let toDate = moment().subtract(5, `days`)
    this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
    this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
    // let dobMaxDate = moment().subtract(6, `years`)
    // this.dobMaxDate = { year: parseInt(dobMaxDate.format('YYYY')), month: parseInt(dobMaxDate.format('M')), day: parseInt(dobMaxDate.format('D')) };
    // let dobMinDate = moment().subtract(75, `years`)
    // this.dobMinDate = { year: parseInt(dobMinDate.format('YYYY')), month: parseInt(dobMinDate.format('M')), day: parseInt(dobMinDate.format('D')) };
    this.parentData = this.getParent()
    this.dob = this.parentData['date_of_birth']
    this.currentAge = Math.ceil(moment().diff(this.dob, 'years', true));
    this.getOldData()

  }

  getParent() {
    if (IsJsonString(this.product.config)) {
      let pageUI: ProductPages = JSON.parse(this.product.config);
      // console.log("pageUI",pageUI);
      let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || []

      let parent = pageOrder.find(page => page.tableName == "life_insured_health")

      if (parent) {
        return this.globalFun.tempFormData[parent.tableName + parent.id] || null
      }
      return null
    }
    return null
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
    if (this.editId) {
      this.saveData(this.editId)
    } else {
      this.saveData()
    }
    // this.actionEvent.emit({ type: StaticActionType.NEXT })
  }

  backPage() {
    this.actionEvent.emit({ type: StaticActionType.PREV })
  }

  getOldData() {
    // let dataget = false
    if (this.refID) {
      let resId = this.refID
      if (!resId) return false
      if (this.editData.id) {
        // console.log(this.editData);

        let resId = this.resourcesId
        this.healthService.getOne(resId).pipe(switchMap((res: any) => {
          if (!res) {
            return this.healthService.getOne(this.refID)
          } else return of(res)
        })).toPromise().then((res: any) => {
          if (res) {
            this.oldData = { ...res, id: null }
            this.editId = res.resourceId == this.resourcesId ? res.id : null
            this.getQuoData(res.resourceId != this.resourcesId)
            this.getAddOn(true)
            this.reloadOldValueForm()
          }
        })
      } else {
        this.healthService.getOne(resId).toPromise().then((res: any) => {
          if (res) {
            this.oldData = { ...res, id: null }
            this.editId = resId == this.resourcesId ? res.id : null
            this.getQuoData(true)
            this.getAddOn(true)
            this.reloadOldValueForm()
          }
        })
      }

    }
  }

  saveData(id?) {
    const formValue = this.staticForm.getRawValue()
    let coverd = this.product.coverages.find(x => x.code == formValue.basicCoverId)
    if (!coverd) {
      this.alertService.activate("This page cann't to save because there is not match coverage in product detail. Please configuration the product detail", "Warning")
      return false
    }
    let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL
    this.premiumAmt = this.numberPipe.transform(tempPre,"1.2-2") + " MMK / month"
    this.globalFun.paPremiumResult.next(this.premiumAmt)
    let postData = {
      basicCoverId: formValue.basicCoverId,
      id: id || null,
      insuranceEndDate: formValue.insuranceEndDate,
      insuranceStartDate: formValue.insuranceStartDate,
      medicalCardNo: formValue.medicalCardNo,
      paymentFrequency: formValue.paymentFrequency,
      dateOfBirth: this.dob,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId || 1,
        policyNumber: null,
        premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
        premiumView: this.premiumAmt,
        // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
        // sumInsuredView:this.sumInsured,
        productId: this.prodService.createingProd.id,
        productCode:this.prodService.createingProd.code,
        quotationId: this.prodService.referenceID,
        leadId: this.prodService.creatingLeadId || null,
        // status: ,
        currency: this.currencyType,
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
          // this.globalFun.tempFormData[HealthpageID] = 
          this.saveSchdule().toPromise().then(res => { }).catch(e => e)
          this.globalFun.tempFormData[HealthPageID] = { id: res.id, ...postData, addOns: this.addOns }
          this.actionEvent.emit({ type: StaticActionType.NEXT, data: { res } })
        }
      }).catch((e) => e)
    } else {
      this.healthService.updateNoID(postData).toPromise().then((res: any) => {
        if (res) {
          // this.globalFun.tempFormData[HealthPageID] = { id: res.id, ...postData }

          this.editId = res.id
          this.saveCoverAddon()
          this.globalFun.tempFormData[HealthPageID] = { id: res.id, ...postData, addOns: this.addOns }
          //.toPromise().then((result) => result)
          this.actionEvent.emit({ type: StaticActionType.NEXT, data: { ...res } })
        }
      }).catch((e) => e)
    }

  }

  getQuoData(isRef: boolean = false) {
    let callId = isRef ? this.refID : this.resourcesId
    this.healthPayService.getMany(callId).toPromise().then((res: any) => {
      if (res) {
        this.optionArray = res
        this.totalResult = {
          unit: 0,
          premium: 0,
        }

        this.totalP = 0
        this.totalL = 0
        this.optionArray.forEach(x => {
          this.totalP += x.premium
          this.totalL += x.levy
          this.totalResult.unit += x.sumInsured
          this.totalResult.premium += x.premium
        })
        // console.log(this.totalResult, "Total");
        this.optionArray = this.optionArray.sort((a, b) => (a.coverage > b.coverage ? 1 : -1))
        this.tempArray = this.optionArray.filter((thing, index, self) =>
          index === self.findIndex((t) => (
            t.coverage === thing.coverage
          ))
        )
        this.cdf.detectChanges()
      }
    })
  }

  reloadOldValueForm() {
    this.staticForm.patchValue({
      insuranceStartDate: this.oldData.insuranceStartDate,
      insuranceEndDate: this.oldData.insuranceEndDate,
      dateOfBirth: this.oldData.dateOfBirth,
      basicCoverId: this.oldData.basicCoverId,
      paymentFrequency: this.oldData.paymentFrequency,
      sumInsuredMainCover: this.oldData.sumInsuredMainCover,
      medicalCardNo: this.oldData.medicalCardNo,
    })
  }

  saveCoverage(): Observable<any> {
    let basicCoverId = this.staticForm.controls.basicCoverId.value
    let value = this.staticForm.controls.sumInsuredMainCover.value
    let coverd = this.product.coverages.find(x => x.code == basicCoverId)
    if (coverd) {
      let postData = {
        coverageId: coverd.id,
        quotationNo: this.resourcesId,
        optionalKey: this.resourcesId,
        sumInsured: value,
        unit: null,
        premium: null,
      }
      return this.coverageQuoService.deleteAll(this.resourcesId, this.resourcesId).pipe(switchMap((x: any) => {
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
          response = await this.addOnQuoService.getOne(item.id, resId, resId).toPromise()
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
      // this.cdf.detectChanges()
      // }
    }
  }

  async saveCoverAddon() {
    await this.saveCoverage().toPromise()
    await this.saveAddOn().toPromise()
    // return forkJoin(this.saveCoverage(), this.saveAddOn())
  }

  saveSchdule() {
    return forkJoin(this.optionArray.map((x) => {
      let postData = {
        "paymentTerm": x.paymentTerm,
        "plan": x.plan,
        "premium": x.premium,
        "levy": x.levy,
        "coverage": x.coverage,
        "sumInsured": x.sumInsured,
        "resourceId": this.resourcesId,
        "total": x.total,
        "resourceData": {
          "agentId": this.auth.currentUserValue.id || 1,
          "customerId": this.prodService.creatingCustomer.customerId || 1,
          "policyNumber": null,
          "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
          "premiumView": this.premiumAmt,
          // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
          // sumInsuredView:this.sumInsured,
          "productId": this.product.id,
          "productCode":this.product.code,
          "quotationId": this.prodService.referenceID,
          "type": this.prodService.type,
          leadId: this.prodService.creatingLeadId,
          currency: this.currencyType,
        },
      }
      return this.healthPayService.save(postData)
    }))
  }

  saveAddOn() {

    return this.addOnQuoService.deleteAll(this.resourcesId, this.resourcesId).pipe(mergeMap((x: any) => {
      // return this.coverageQuoService.save(postData)
      return forkJoin(this.options2.map(option => {
        if (this.addOns[option.id + 'opt']) {
          let postData = {
            addonId: option.id,
            optionalKey: this.resourcesId,
            quotationNo: this.resourcesId,
            sumInsured: this.addOns[option.id + 'value'],
            unit: null,
            premium: null,
          }
          return this.addOnQuoService.save(postData)
        } else {
          return of(null)
        }
      }))
    }))
  }

}