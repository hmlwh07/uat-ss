import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomAdapter2, CustomDateParserFormatter } from '../../_metronic/core';
import { ActivityManageService, ActivityService } from '../activity-management-list/activity-manage.service';
import { RelatedModalCompoent } from './pop-up-modal/related-modal.component';
import * as moment from 'moment'
import { validateAllFields } from '../../core/valid-all-feild';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../core/is-json';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MenuDataService } from '../../core/menu-data.service';
@Component({
  selector: 'app-activity-management-detail',
  templateUrl: './activity-management-detail.component.html',
  styleUrls: ['./activity-management-detail.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class ActivityManagementDetailComponent implements OnInit {
  actForm: FormGroup;
  pageStatus: any;
  isLead: boolean = false
  oldId: any
  activityStatus = {
    "01": "Open",
    "02": "Complete",
    "03": "Cancel",
  }
  activityType: string[] = [
    "Face to Face",
    "Online",
    "Phone Call"
  ]
  relatedType: string
  oldData: any
  leadId: any
  dataAccess = {
    view: true,
    create: true,
    edit: true,
    delete: true
  }
  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private activityManageService: ActivityService,
    private location: Location,
    private cdf: ChangeDetectorRef,
    private alertService: AlertService,
    private menuService: MenuDataService,
    private ngZone:NgZone
  ) {

  }

  ngOnInit(): void {
    // this.loadForm();
    this.checkPremission()
    this.route.queryParams
      .subscribe(params => {
        this.pageStatus = params.pageStatus;
        if (this.pageStatus != 'create') {
          this.oldId = params.pageId;
          this.getOld()
        } else {
          this.loadForm();
          // console.log("PARMA", params)
          this.actForm.controls.assignTo.setValue(params.assignTo)
          this.actForm.controls.assignName.setValue(params.assignToName)
          this.actForm.controls.customerId.setValue(params.customerId)
          this.actForm.controls.customerName.setValue(params.name)
          if (params.leadId) {
            //  this.actForm.controls.relatedTo.setValue(params.leadId)
            //  this.relatedType ='lead'
            this.leadId = params.leadId
            this.isLead = params.isLead
          }
        }
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
  clearDate(key){
    this.actForm.controls[key].setValue(null)
  }

  getOld() {
    this.activityManageService.findOne(this.oldId).toPromise().then((res) => {
      if (res) {
        this.oldData = res
        this.leadId = res.leadId
        this.isLead = res.leadId ? true : false
        this.loadForm(res)
        this.cdf.detectChanges()
      }
    })
  }

  loadForm(oldData?) {
    // if(oldData)
    // console.log(moment(oldData.dueDate).format('DD/MM/YYYY'));
    // console.log(oldData);
    this.actForm = new FormGroup({
      "activityNo": new FormControl({ value: oldData ? oldData.activityNo : null, disabled: true }),
      "activityType": new FormControl(oldData ? oldData.activityType : '', Validators.required),
      "activityTitle": new FormControl(oldData ? oldData.activityTitle : null, Validators.required),
      "activityDescription": new FormControl(oldData ? oldData.activityDescription : null, Validators.required),
      "planDateStr": new FormControl(oldData && oldData.planDate ? moment(oldData.planDate) : null),
      "actualDateStr": new FormControl(oldData && oldData.actualDate ? moment(oldData.actualDate) : null),
      "dueDateStr": new FormControl(oldData && oldData.dueDate ? moment(oldData.dueDate) : null),
      "relatedTo": new FormControl({ value: oldData ? oldData.relatedTo : null, disabled: true }),
      "customerId": new FormControl(oldData ? oldData.customerId : null, Validators.required),
      "customerName": new FormControl({ value: oldData ? oldData.customerName : null, disabled: true }),
      "assignTo": new FormControl(oldData ? oldData.assignTo : null, Validators.required),
      "assignName": new FormControl({ value: oldData ? oldData.assignName : null, disabled: true }),
      "status": new FormControl({ value: oldData ? oldData.status : "01", disabled: oldData ? false : true }),
    })
    this.relatedType = oldData ? oldData.relatedType : ""

    this.cdf.detectChanges()

  }

  openModal(type) {
    let controlInp;
    if (type == "quotation") controlInp = this.actForm.controls['relatedTo']
    // if(!this.isLead){
    const modalRef = this.modalService.open(RelatedModalCompoent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.type = type
    modalRef.componentInstance.selecteditem = controlInp.value
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.relatedType = (res.data + "").includes("QUO") ? 'quotation' : 'policy'
          // console.log(' this.relatedType', this.relatedType)
          controlInp.setValue(res.data)

        }
      }
    })
    // }
  }
  viewAgent(type) {
    if (!this.isLead) {
      let controlInp;
      if (type == "agent") controlInp = this.actForm.controls['assignTo']
      // console.log(type, this.isLead)

      const modalRef = this.modalService.open(RelatedModalCompoent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.type = type
      modalRef.componentInstance.selecteditem = controlInp.value
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == 'save') {
            if (type == "agent") {
              // console.log('onDidDismiss =====> ', res);
              this.actForm.controls['assignTo'].setValue(res.data)
              this.actForm.controls['assignName'].setValue(res.dataName)
            }
          }
        }
      })
    }
  }

  viewCustomer() {
    if (!this.isLead) {
      let modalRef;
      modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == "save") {
            let customer = res.data
            // console.log('onDidDismiss =====> ', customer);
            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
            this.actForm.controls.customerId.setValue(customer.customerId)
            this.actForm.controls.customerName.setValue(name)
          }
        }
      })
    }

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

  doActivity() {
    if (this.actForm.invalid) {
      validateAllFields(this.actForm)
      return true
    } else {
      let postData = this.actForm.getRawValue()
      postData['dueDate'] = postData['dueDateStr']
      postData['actualDate'] = postData['actualDateStr']
      postData['planDate'] = postData['planDateStr']
      postData['dueDateStr'] = moment(postData['dueDate']).format("YYYY-MM-DD")
      postData['actualDateStr'] = moment(postData['actualDate']).format("YYYY-MM-DD")
      postData['planDateStr'] = moment(postData['planDate']).format("YYYY-MM-DD")
      if (this.pageStatus == 'create') {
        this.create(postData)
      } else {
        this.edit(postData)
      }
    }
  }

  create(postData) {
    let data = { ...postData, relatedType: this.relatedType || null, status: '01' }
    if (this.isLead) {
      data = { ...postData, relatedType: this.relatedType || null, status: '01', leadId: this.leadId }
    }
    this.activityManageService.save(data).toPromise().then((res) => {
      if (res) {
        this.alertService.activate('This record was created', 'Success Message');
        this.location.back()
      }
    })
  }

  edit(postData) {
    let data = { ...postData, activityNo: this.oldId, relatedType: this.relatedType || null }
    if (this.isLead) {
      data = { ...postData, relatedType: this.relatedType || null, leadId: this.leadId }
    }
    this.activityManageService.updateNoID(data).toPromise().then((res) => {
      if (res) {
        this.alertService.activate('This record was updated', 'Success Message');
        this.location.back()
      }
    })
  }

  backLocation() {
    if (this.isLead) {
      this.ngZone.run(() => {
        this.location.back()
      })
    } else {
      this.loadForm(this.oldData)
    }
  }
}
