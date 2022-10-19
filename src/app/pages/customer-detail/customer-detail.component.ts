import { Location } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { forkJoin, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MasterDataService } from 'src/app/modules/master-data/master-data.service';
import { AttachmentDownloadService, AttachmentServiceRef, AttachmentUploadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { MY_FORMATS } from '../../core/is-json';
import { defaultAccessObj, MenuDataService } from '../../core/menu-data.service';
import { ActivityCol, ActivityDisplayCol } from '../activity-management-list/activity-manage.const';
import { FNAListCol } from '../fna-list/fna.list.const';
import { CustomInputAlertComponent } from '../form-component/custom-input-alert/custom-input-alert.component';
import { NrcPopupPage } from '../form-component/nrc-popup/nrc-popup.page';
import { AttachmentCol, AttachmentDisplayCol, FNACol, FNADisplayCol } from '../lead-detail/FNA-list.const';
import { PolicyCol, PolicyDisplayCol } from '../policy/list/policy.const';
import { ProductsComponent } from '../products/products.component';
import { ProductDataService } from '../products/services/products-data.service';
import { QuoDisplayCol, QuotationCol } from '../quotations/list/quotation.const';
import { District, Nationality, Occupation, State, Status, Township } from './custmer.dto';
import { GenderOption, TitleOption } from './customer.const';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})

export class CustomerDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('fna') fnamatTable: MaterialTableViewComponent;
  @ViewChild('activity') activitymatTable: MaterialTableViewComponent;
  @ViewChild('application') applicationmatTable: MaterialTableViewComponent;
  @ViewChild('attachment') attachmentmatTable: MaterialTableViewComponent;
  @ViewChild('quotation') quotationmatTable: MaterialTableViewComponent;
  FNAELEMENT_COL: any[] = JSON.parse(JSON.stringify(FNAListCol));
  FNAdisplayedColumns: any[] = JSON.parse(JSON.stringify(FNADisplayCol));
  ACTIVITY_ELEMENT_COL: any[] = JSON.parse(JSON.stringify(ActivityCol));
  ACTIVITYdisplayedColumns: any[] = JSON.parse(JSON.stringify(ActivityDisplayCol));
  QUOTATION_ELEMENT_COL: any[] = JSON.parse(JSON.stringify(QuotationCol));
  QuotationdisplayedColumns: any[] = JSON.parse(JSON.stringify(QuoDisplayCol));
  APPLICATION_ELEMENT_COL: any[] = JSON.parse(JSON.stringify(PolicyCol));
  ApplicationdisplayedColumns: any[] = JSON.parse(JSON.stringify(PolicyDisplayCol));
  ATTACHMENT_ELEMENT_COL: any[] = JSON.parse(JSON.stringify(AttachmentCol))
  AttachmentdisplayedColumns: any[] = JSON.parse(JSON.stringify(AttachmentDisplayCol))
  // ATTACHMENT_ELEMENT_COL = JSON.parse(JSON.stringify(FNAListCol));
  // AttachmentdisplayedColumns = JSON.parse(JSON.stringify(FNADisplayCol));

  fnaList: any[] = [];
  activityList: any[] = [];
  quatationList: any[] = [];
  applicationList: any[] = [];
  attachmentList: any[] = [];
  config: any = {
    name: "identityNumber"
  }
  group: FormGroup;
  toMinDate = null
  fromMinDate = null
  toMaxDate = null
  fromMaxDate = null
  @Input() isPopup: boolean = false
  @Input() pageStatus: any;
  @Input() isLead: boolean = false
  customerForm: FormGroup;

  nationalityOption: Nationality[] = [];
  occupationOption: Occupation[] = [];
  statusOption: Status[] = [];
  stateOption: State[] = [];
  districtOption: District[] = [];
  townshipOption: Township[] = [];
  township: any = []
  district: any = []
  state: any = []
  genderOption = [];
  titleOption = [];

  oldId: any;
  oldSecondaryId: any;
  oldData: any;
  public tabs: Array<
    {
      name: string,
      active: boolean
    }> = [
      {
        name: 'FNA',
        active: false
      },
      {
        name: 'Activity',
        active: false
      },
      {
        name: 'Quotation',
        active: false
      },
      {
        name: 'Application',
        active: false
      },
      {
        name: 'Attachment',
        active: false
      }
    ]
  isFNA: boolean = false
  isApplication: boolean = false
  isAttachment: boolean = false
  isQuotation: boolean = false
  isActivity: boolean = false
  isMenuOpen: boolean = false
  isMore: boolean = false
  isDetail: boolean = true
  pageName: string = ""
  description: string = ""
  cusAccess = defaultAccessObj
  activityAccess = defaultAccessObj
  policyAccess = defaultAccessObj
  quoAccess = defaultAccessObj
  attachAccess = defaultAccessObj
  fnaAccess = defaultAccessObj
  constructor(private fb: FormBuilder,
    private location: Location,
    private masterDataService: MasterDataService,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private modalService: NgbModal,
    private cdf: ChangeDetectorRef,
    private prodctService: ProductDataService,
    private router: Router,
    private AttachmentUploadService: AttachmentUploadService,
    private CustomerAttachmentService: AttachmentServiceRef,
    private AttachmentDownloadService: AttachmentDownloadService,
    private alertService: AlertService,
    private menuService: MenuDataService,
    private ngbModal: NgbActiveModal
  ) {
    this.ACTIVITYdisplayedColumns.splice(8, 1)
    this.QuotationdisplayedColumns.splice(7, 2)
    this.ApplicationdisplayedColumns.splice(7, 1)
  }

  ngOnInit(): void {


    this.loadForm();
    this.route.queryParams
      .subscribe(params => {
        this.pageStatus = params.pageStatus;
        this.pageName = params.page
        if (this.pageStatus != 'create' && !this.isPopup) {
          this.oldId = params.pageId;
          this.oldSecondaryId = params.pageSecondaryId;

          this.getOld()


        } else {

          this.loadForm(this.oldData);
          if (this.isLead) {
            this.customerForm.controls['statusCode'].setValue('A')
          }
        }
      }
      );
  }
  checkPremission() {
    this.menuService.dataAccess.subscribe((res) => {
      if (res) {
        this.cusAccess = res['customer']
        this.activityAccess = res['activity']
        this.policyAccess = res['application']
        this.quoAccess = res['quotation']
        this.fnaAccess = res['fna']
        // this.attachAccess= 
        if (!this.cusAccess.view) {
          this.location.back()
        }
        this.cdf.detectChanges()
      }
    })
  }


  ngAfterViewInit() {
    this.getMaster()
    this.getAllMaster()
  }

  getNationality() {
    return this.masterDataService.getDataByType("NATIONALITY").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))

    // .toPromise().then((res: any) => {
    //   if (res) {
    //     this.nationalityOption = res
    //     this.cdf.detectChanges()
    //   }
    // });
  }

  getMaster() {
    forkJoin([
      this.getTitle(),
      this.getGender(),
      this.getOccupation(),
      this.getStatus(),
      this.getState(),
      this.getTownship(),
      this.getDistrict(),
      this.getNationality(),
    ]).toPromise().then((res: any) => {
      if (res) {
        this.titleOption = res[0]
        this.genderOption = res[1]
        this.occupationOption = res[2]
        this.statusOption = res[3]
        this.stateOption = res[4]
        this.townshipOption = res[5]
        this.districtOption = res[6]
        this.nationalityOption = res[7]
        this.cdf.detectChanges()
      }
    })
  }
  getAllMaster() {
    forkJoin([
      this.getAllState(),
      this.getAllTownship(),
      this.getAllDistrict(),
    ]).toPromise().then((res: any) => {
      if (res) {
        this.stateOption = res[0]
        this.townshipOption = res[1]
        this.districtOption = res[2]
        this.cdf.detectChanges()
      }
    })
  }

  getTitle() {
    return this.masterDataService.getDataByType("TITLE").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
    // .toPromise().then((res: any) => {
    //   if (res) {
    //     this.titleOption = res
    //     this.cdf.detectChanges()
    //   }
    // })
  }

  getGender() {
    return this.masterDataService.getDataByType("TB_GENDER").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))

    //  .toPromise().then((res: any) => {
    //     if (res) {
    //       this.genderOption = res
    //       this.cdf.detectChanges()
    //     }
    //   })
  }

  getOccupation() {
    return this.masterDataService.getDataByType("OCCUPATION").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))

    // .toPromise().then((res: any) => {
    //   if (res) {
    //     this.occupationOption = res
    //     this.cdf.detectChanges()
    //   }
    // })
  }

  getStatus() {
    return this.masterDataService.getDataByType("CUST_STATUS").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))

    // .toPromise().then((res: any) => {
    //   if (res) {
    //     this.statusOption = res
    //     console.log("  this.statusOption ", this.statusOption)
    //     this.cdf.detectChanges()
    //   }
    // })
  }

  getFormatOpt(res) {
    return res.map(x => {
      return { 'code': x.codeId, 'value': x.codeName || x.codeValue }
    })
  }
  getFormatParentOpt(res) {
    console.log(res);
    let value;
    res.forEach(element => {
      value = this.districtOption.find(x => x.code == element.parentCode)
      console.log("VALUE", value);

    });
    return res.map(x => {
      return { 'code': x.parentCode, 'value': x.value }
    })
  }

  getState() {
    return this.masterDataService.getDataByType("PT_STATE", true).pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
  }
  getTownship() {
    return this.masterDataService.getDataByType("PT_TOWNSHIP", true).pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
  }
  getDistrict() {
    return this.masterDataService.getDataByType("PT_DISTRICT", true).pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
  }

  getAllState() {
    this.masterDataService.getDataByType("PT_STATE", true).toPromise().then((res: any) => {
      if (res) {
        this.state = res
      }
    })
  }
  getAllTownship() {
    this.masterDataService.getDataByType("PT_TOWNSHIP", true).toPromise().then((res: any) => {
      if (res) {
        this.township = res
      }
    })
  }
  getAllDistrict() {
    this.masterDataService.getDataByType("PT_DISTRICT", true).toPromise().then((res: any) => {
      if (res) {
        this.district = res
      }
    })
  }


  getDistrictByParent(parentId: string) {
    this.masterDataService.getAddressDataByType("PT_DISTRICT", parentId).pipe(map(x => this.getFormatOpt(x)))
      .toPromise().then((res: any) => {
        if (res) {
          this.districtOption = res
          this.cdf.detectChanges()
        }
      });
  }
  getTownshipByParent(parentId: string) {
    this.masterDataService.getAddressDataByType("PT_TOWNSHIP", parentId).pipe(map(x => this.getFormatOpt(x)))
      .toPromise().then((res: any) => {
        if (res) {
          this.townshipOption = res
          this.cdf.detectChanges()
        }
      });
  }



  onInitAddress(oldData) {
    this.getState();
    this.getAllDistrict();
    this.getAllTownship()
    this.cdf.detectChanges();
  }

  onChangeTownship() {
    this.customerForm.controls['districtCode'].setValue('');
    this.customerForm.controls['stateCode'].setValue('');
    let townshipCode = this.customerForm.controls['townshipCode'].value
    this.getParentDataByTownship(townshipCode)
    // this.getParentData(townshipCode)
  }
  getParentData(townshipCode) {
    this.masterDataService.getParentDataByTownship('PT_TOWNSHIP', townshipCode).toPromise().then((res: any) => {
      console.log(res);

    })
  }
  getParentDataByTownship(townshipCode) {
    let district;
    let districtCode;
    let state;
    let stateCode;

    if (townshipCode) {
      district = this.township.find(x => x.codeId == townshipCode)
      districtCode = district.parentCode
      this.customerForm.controls['districtCode'].setValue(districtCode)
    }
    if (districtCode) {
      state = this.district.find(x => x.codeId == districtCode)
      stateCode = state.parentCode
      this.customerForm.controls['stateCode'].setValue(stateCode)
    }
  }
  onChangeDistrict() {
    // this.customerForm.controls['townshipCode'].setValue('');
    // if (this.customerForm.controls['stateCode'].value == '') {
    //   this.townshipOption = [];
    // } else {
    //   this.getTownship(this.customerForm.controls['districtCode'].value);
    // }
    // this.cdf.detectChanges()
  }


  onChangeState() {
    // this.districtOption = [];
    // this.townshipOption = [];

    // this.customerForm.controls['districtCode'].setValue('');
    // this.customerForm.controls['townshipCode'].setValue('');
    // this.getDistrict(this.customerForm.controls['stateCode'].value);
    // this.cdf.detectChanges();

  }


  getOld() {
    this.customerService.findOne(this.oldId).toPromise().then((res) => {
      if (res) {
        // console.log("RESSSS", res)
        this.oldData = res
        // this.fnaList= this.oldData.fna
        this.activityList = this.oldData.activities != null ? this.oldData.activities : []
        this.quatationList = this.oldData.resourceQuotations != null ? this.oldData.resourceQuotations : []
        this.applicationList = this.oldData.resourcePolicies != null ? this.oldData.resourcePolicies : []
        this.attachmentList = this.oldData.attachments != null ? this.oldData.attachments : []
        this.loadForm(res)
        this.onInitAddress(this.oldData)
        this.cdf.detectChanges()
        this.activitymatTable.reChangeData()
        this.fnamatTable.reChangeData()
        this.attachmentmatTable.reChangeData()
        this.quotationmatTable.reChangeData()
        this.applicationmatTable.reChangeData()
      }
    })
  }

  loadForm(oldData?) {
    let disabledForm = oldData ? oldData.partyCode ? true : false : false
    this.customerForm = null
    this.cdf.detectChanges()
    this.customerForm = new FormGroup({
      "titleCode": new FormControl({ value: oldData ? oldData.titleCode : '', disabled: disabledForm }, Validators.required),
      "firstName": new FormControl({ value: oldData ? oldData.firstName : '', disabled: disabledForm }, Validators.required),
      "lastName": new FormControl({ value: oldData ? oldData.lastName : '', disabled: disabledForm }, Validators.required),
      "middleName": new FormControl({ value: oldData ? oldData.middleName : '', disabled: disabledForm },),
      "genderCode": new FormControl({ value: oldData ? oldData.genderCode : '', disabled: disabledForm }, Validators.required),
      "nationalityCode": new FormControl({ value: oldData ? oldData.nationalityCode : '', disabled: disabledForm }, Validators.required),
      "identityType": new FormControl({ value: oldData ? oldData.identityType == 'OTHER' ? "OTHERS" : oldData.identityType : 'NRC', disabled: disabledForm }, Validators.required),
      "identityNumber": new FormControl({ value: oldData ? oldData.identityNumber : '', disabled: disabledForm }, Validators.required),
      "statusCode": new FormControl({ value: oldData ? oldData.statusCode : 'A', disabled: disabledForm || this.isLead }, Validators.required),
      "partyCode": new FormControl({ value: oldData ? oldData.partyCode : '', disabled: disabledForm }),
      "fatherName": new FormControl({ value: oldData ? oldData.fatherName : '', disabled: disabledForm }, [Validators.required]),
      "phone": new FormControl({ value: oldData ? oldData.phone : '', disabled: disabledForm }, [Validators.required, Validators.maxLength(11), Validators.minLength(9)]),
      "email": new FormControl({ value: oldData ? oldData.email : '', disabled: disabledForm },),
      "dateOfBirth": new FormControl({ value: !oldData ? null : oldData.dateOfBirth ? moment(oldData.dateOfBirth) : null, disabled: disabledForm, }, Validators.required),
      "occupationCode": new FormControl({ value: oldData ? oldData.occupationCode : '', disabled: disabledForm }),
      "houseNumber": new FormControl({ value: oldData ? oldData.houseNumber : '', disabled: disabledForm }, Validators.required),
      "road": new FormControl({ value: oldData ? oldData.road : '', disabled: disabledForm }, Validators.required),
      "blockArea": new FormControl({ value: oldData ? oldData.blockArea : '', disabled: disabledForm }, Validators.required),
      "townshipCode": new FormControl({ value: oldData ? oldData.townshipCode : '', disabled: disabledForm }, Validators.required),
      "districtCode": new FormControl({ value: oldData ? oldData.districtCode : '', disabled: disabledForm }, Validators.required),
      "stateCode": new FormControl({ value: oldData ? oldData.stateCode : '', disabled: disabledForm }, Validators.required),
      "companyName": new FormControl({ value: oldData ? oldData.companyName || "KBZMS" : 'KBZMS', disabled: true })
    });

  }
  clearDOB(type) {
    if (type == 'dateOfBirth') {
      this.customerForm.controls['dateOfBirth'].setValue(null);
    }
  }


  isIdentitiyType() {
    this.customerForm.controls["identityNumber"].setValue('');
  }
  backLocation() {
    if (this.isPopup) {
      this.modalService.dismissAll()
    }
    else {
      this.loadForm(this.oldData)
      this.onInitAddress(this.oldData);
    }
  }

  doCustomer() {
    // console.log(this.customerForm.invalid);
    console.log("POPUP", this.isPopup);

    if (this.customerForm.invalid) {
      validateAllFields(this.customerForm)
      return true
    } else {
      let postData = this.customerForm.getRawValue()
      if (this.isPopup) {
        this.create(postData)
      }
      else {
        if (this.pageStatus == 'create') {
          this.create(postData)
        } else {
          this.edit(postData)
        }
      }


    }
  }

  create(postData) {
    let name = postData.firstName + ' ' + ((postData.middleName ? postData.middleName + ' ' : '') + postData.lastName || null)

    let data = { ...postData, customerId: null, individualId: null };
    this.customerService.save(data).toPromise().then((res) => {
      // console.log("RESSS", res)
      if (res) {
        if (this.isPopup) {
          this.ngbModal.dismiss({ data: { ...postData, name: name, customerId: res, }, type: "save" })
        } else {
          this.alertService.activate('This record was created', 'Success Message');
          this.location.back()
        }
      }
    })
  }

  edit(postData) {
    let data = { ...postData, customerId: this.oldId, individualId: this.oldSecondaryId };
    this.customerService.updateNoID(data).toPromise().then((res) => {
      if (res) {
        this.alertService.activate('This record was updated', 'Success Message');
        this.location.back()
      }
    })
  }

  toggleAccordion(type) {

    if (type == 'FNA') {
      this.isFNA = !this.isFNA
    }
    if (type == 'Application') {
      this.isApplication = !this.isApplication
    }
    if (type == 'Quotation') {
      this.isQuotation = !this.isQuotation
    }
    if (type == 'Attachment') {
      this.isAttachment = !this.isAttachment
      if (this.isAttachment) {
        this.getCustomerAttachment()
      }
    }
    if (type == 'Activity') {
      this.isActivity = !this.isActivity
    }
    if (type == 'More') {
      this.isMore = !this.isMore
    }
    if (type == 'Detail') {
      this.isDetail = !this.isDetail
    }
  }


  add(type) {
    if (type == 'Application') {
      const modalRef = this.modalService.open(ProductsComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.type = 'modal'
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == 'save') {
            this.prodctService.creatingCustomer = this.oldData
            this.prodctService.createingProd = res.data
            this.prodctService.editData = null
            this.prodctService.referenceID = null
            this.prodctService.viewType = 'policy'
            this.prodctService.type = 'policy'
            this.router.navigateByUrl("/product-form")
          }
        }
      })
    }
    if (type == 'Quotation') {
      const modalRef = this.modalService.open(ProductsComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.type = 'modal'
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == 'save') {
            this.prodctService.createingProd = res.data
            this.prodctService.creatingCustomer = this.oldData
            this.prodctService.viewType = 'quotation'
            this.prodctService.editData = null
            this.prodctService.referenceID = null
            this.prodctService.type = 'quotation'
            this.router.navigateByUrl("/product-form")
          }
        }
      })
    }
    if (type == 'Activity') {
      this.router.navigate(["/activity/activity-management-detail"], { queryParams: { customerId: this.oldData.customerId, name: this.oldData.firstName, pageStatus: 'create' } })

    }
  }


  openModal() {
    let modalRef;
    modalRef = this.modalService.open(NrcPopupPage, { size: 'xl', backdrop: false });

    modalRef.componentInstance.config = this.config
    modalRef.componentInstance.group = this.customerForm
  }

  actionBtn(event) {
    if (event.cmd == 'download') {
      this.AttachmentDownloadService.getDownload(event.data.id, event.data.fileName)
    }
    if (event.cmd == 'delete') {
      this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
        if (result) {
          this.CustomerAttachmentService.delete(event.data.id).toPromise().then(res => {
            if (res) {
              this.getCustomerAttachment();
              this.alertService.activate('This record was deleted', 'Success Message').then(result => {

              });
            }
          })
        }
      });
    }

  }

  async addAttachment() {
    let modalRef;
    modalRef = this.modalService.open(CustomInputAlertComponent, { size: 'lg', backdrop: false });
    modalRef.componentInstance.type = 'description'
    modalRef.componentInstance.oldId = this.oldId
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        // console.log("RESSS", res)
        this.description = res.description

        this.AttachmentUploadService.save(res.data).toPromise().then((res) => {
          if (res) {
            // console.log("RESFILE", res)
            let postData = {
              attachmentId: res,
              description: this.description,
              refDocNo: this.oldId,
              refDocType: 'CUST'
            }
            this.CustomerAttachmentService.save(postData).toPromise().then((res) => {
              if (res) {
                // console.log("RESFILE", res)
                this.getCustomerAttachment()
              }

            })
          }
        }).catch(e => {
        })

      }

    })

    //   }
    // })


  }


  async getCustomerAttachment() {
    this.CustomerAttachmentService.getAttachmentListRef(this.oldId, 'CUST').toPromise().then((res: any) => {
      if (res) {
        // console.log("RESFILE", res)
        this.attachmentList = res
        this.attachmentmatTable.reChangeData()
        this.cdf.detectChanges()
      }

    })
  }

  //for View
  isControlValid(controlName: string): boolean {
    const control = this.customerForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.customerForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.customerForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.customerForm.controls[controlName];
    return control.dirty || control.touched;
  }
}
