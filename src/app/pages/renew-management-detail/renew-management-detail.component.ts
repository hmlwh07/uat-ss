import { DecimalPipe, Location } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MY_FORMATS } from '../../core/is-json';
import { MenuDataService } from '../../core/menu-data.service';
import { validateAllFields } from '../../core/valid-all-feild';
import { RenewManageService } from '../renew-management-list/renew-manage.service';
import { Subscription } from 'rxjs';
import { timeStamp } from 'console';
@Component({
  selector: 'app-renew-management-detail',
  templateUrl: './renew-management-detail.component.html',
  styleUrls: ['./renew-management-detail.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class RenewManagementDetailComponent implements OnInit {
  actForm: FormGroup;
  pageStatus: any;
  isLead: boolean = false
  oldId: any
  // activityStatus = {
  //   "01": "Open",
  //   "02": "Complete",
  //   "03": "Cancel",
  // }
  // activityType: string[] = [
  //   "Face to Face",
  //   "Online",
  //   "Phone Call"
  // ]
  relatedType: string
  oldData: any
  leadId: any
  grossCurrency: string = ""
  netCurrency: string = ""
  dataAccess = {
    view: true,
    create: true,
    edit: true,
    delete: true
  }
  unsub: Subscription[] = []
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cdf: ChangeDetectorRef,
    private alertService: AlertService,
    private menuService: MenuDataService,
    private ngZone: NgZone,
    private renewService: RenewManageService,
    private numberPipe: DecimalPipe
  ) {

  }

  ngOnInit(): void {
    this.loadForm();
    this.checkPremission()
    this.unsub[0] = this.route.queryParams
      .subscribe(params => {
        let data = JSON.parse(params.data)
        console.log(data);

        if (!data) this.location.back()
        this.loadForm(data);
      }
      );
  }

  checkPremission() {
    this.menuService.dataAccess.subscribe((res) => {
      if (res) {
        this.dataAccess = res['activity']
        if (!this.dataAccess.view) {
          this.location.back()
        }
      }
    })
  }

  ngAfterViewInit() {

  }
  clearDate(key) {
    this.actForm.controls[key].setValue(null)
  }

  loadForm(oldData?) {
    // if(oldData)
    // console.log(moment(oldData.dueDate).format('DD/MM/YYYY'));
    if (oldData && oldData.grossPremium) {
      this.grossCurrency = oldData.currency
    }
    if (oldData && oldData.netPremium) {
      this.netCurrency = oldData.currency
    }
    
    this.actForm = new FormGroup({
      "policyNumber": new FormControl({ value: oldData ? oldData.policyNumber : null, disabled: true }),
      "productName": new FormControl({ value: oldData ? oldData.productName : null, disabled: true }),
      // "renewalPolicyNumber": new FormControl({ value: oldData ? oldData.renewalPolicyNumber : null, disabled: true }),
      "policyInceptionDate": new FormControl({ value: oldData ? moment(oldData.policyInceptionDate, "DD/MM/YYYY") : null, disabled: true }),
      "status": new FormControl({ value: oldData ? oldData.policyStatus : null, disabled: true }),
      "policyExpiryDate": new FormControl({ value: oldData ? moment(oldData.policyExpiryDate, "DD/MM/YYYY") : null, disabled: true }),
      "quoteNumber": new FormControl({ value: oldData ? oldData.quoteNumber : null, disabled: true }),
      "grossPremium": new FormControl({ value: this.grossCurrency ? this.numberPipe.transform(oldData.grossPremium, "1.2-2") + " " + this.grossCurrency : null, disabled: true }),
      "policyHolderCode": new FormControl({ value: oldData ? oldData.policyHolderCode : null, disabled: true }),
      "netPremium": new FormControl({ value: oldData ? this.numberPipe.transform(oldData.netPremium, "1.2-2") + " " + this.netCurrency : null, disabled: true }),
      "policyHolder": new FormControl({ value: oldData ? oldData.policyHolder : null, disabled: true }),
    })
    this.cdf.detectChanges()
  }


  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.actForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.actForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.actForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.actForm.controls[controlName];
    return control.dirty || control.touched;
  }


  backLocation() {
    this.ngZone.run(() => {
      this.location.back()
    })
  }

  confirmRenew() {
    if (this.actForm.value.status != 'confirm') {
      this.alertService
        .activate('Are you sure want to confirm?', 'Warning Message')
        .then(async (result) => {
          if (result) {
            this.actForm.value.status = 'confirm';
            this.renewService
              .confirmRenew(this.actForm.value.policyNumber)
              .toPromise()
              .then((res) => {
                if (res) {
                  this.alertService.activate(
                    'This record was updated',
                    'Success Message'
                  );
                }
              });
          }
        });
    }
  }


}
