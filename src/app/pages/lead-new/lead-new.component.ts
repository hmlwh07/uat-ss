import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from "@angular/common";
import * as moment from 'moment';
import { forkJoin, map, catchError, of } from 'rxjs';
import { defaultAccessObj, MenuDataService } from 'src/app/core/menu-data.service';
import { UserModel, AuthService } from 'src/app/modules/auth';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MasterDataService } from 'src/app/modules/master-data/master-data.service';
import { AttachmentDownloadService, AttachmentServiceRef, AttachmentUploadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { ActivityCol, ActivityDisplayCol } from '../activity-management-list/activity-manage.const';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { CustomerService } from '../customer-detail/customer.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { IdentityType } from '../customer-list/customer-list.const';
import { FNABRAMDiscount } from '../fna-bram/product/product.dto';
import { AssectDto } from '../fna-detail/asset/asset-manage.dto';
import { ProductDto } from '../fna-detail/chart-analysis/product-analysis/product-manage.dto';
import { EducationDto } from '../fna-detail/education/education-manage.dto';
import { FANService } from '../fna-detail/fna-manage.service';
import { HealthDto } from '../fna-detail/health/health-manage.dto';
import { IncomeDto } from '../fna-detail/income/income-manage.dto';
import { RetirementDto } from '../fna-detail/retirement/retirement-manage.dto';
import { FANListService } from '../fna-list/fna-list-manage.service';
import { FnaTypeComponent } from '../fna-list/fna-type/fna-type.component';
import { CustomInputAlertComponent } from '../form-component/custom-input-alert/custom-input-alert.component';
import { NrcPopupPage } from '../form-component/nrc-popup/nrc-popup.page';
import { CampaignListComponent } from '../lead-detail/campaign-list/campaign-list.component';
import { FNACol, FNADisplayCol, AttachmentCol, AttachmentDisplayCol } from '../lead-detail/FNA-list.const';
import { LeadDetailService } from '../lead-detail/lead-detail.service';
import { LeadListService } from '../lead-list/lead-list.service';
import { PolicyCol, PolicyDisplayCol } from '../policy/list/policy.const';
import { ProductDataService } from '../products/services/products-data.service';
import { QuotationCol, QuoDisplayCol } from '../quotations/list/quotation.const';

@Component({
  selector: 'app-lead-new',
  templateUrl: './lead-new.component.html',
  styleUrls: ['./lead-new.component.scss']
})
export class LeadNewComponent implements OnInit {

  FNAELEMENT_COL = JSON.parse(JSON.stringify(FNACol));
  FNAdisplayedColumns = JSON.parse(JSON.stringify(FNADisplayCol));
  ACTIVITY_ELEMENT_COL = JSON.parse(JSON.stringify(ActivityCol));
  ACTIVITYdisplayedColumns = JSON.parse(JSON.stringify(ActivityDisplayCol));
  QUOTATION_ELEMENT_COL = JSON.parse(JSON.stringify(QuotationCol));
  QuotationdisplayedColumns = JSON.parse(JSON.stringify(QuoDisplayCol));
  APPLICATION_ELEMENT_COL = JSON.parse(JSON.stringify(PolicyCol));
  ApplicationdisplayedColumns = JSON.parse(JSON.stringify(PolicyDisplayCol));
  ATTACHMENT_ELEMENT_COL = JSON.parse(JSON.stringify(AttachmentCol));
  AttachmentdisplayedColumns = JSON.parse(JSON.stringify(AttachmentDisplayCol));
  // fnaList: any[] = [];
  // activityList: any[] = [];
  // quatationList: any[] = [];
  // applicationList: any[] = [];
  // attachmentList: any[] = [];
  leadForm: FormGroup;
  isPopup: boolean = false;
  disabled = true
  pageStatus: any;
  description: string = ""
  oldId: any;
  oldData: any;
  oldSecondaryId: any;
  channelOption: any = [];
  typeOption: any = [];
  stateOption: any = [];
  statusOption: any = [];
  distinctOption: any = [];
  townshipOption: any = [];
  assignToOption: any = [];
  productOption: any = [];
  productOption2: any = [];
  campaignNameOption: any = [];
  companyOption: any = []
  sourceOption: any = [];
  existingOption: any = [];
  martialOption: any = [];
  occupationOption: any = [];
  isExisting: boolean = false
  isProspectCustomer: boolean = false
  isAddProspect: boolean = false
  disabledForm: boolean = false
  statusCode: number = 0
  maritalOption: any = [
    // SINGLE, MARRIED, WIDOWER, DIVORCED
    {
      code: "SINGLE",
      value: "Single"
    },
    {
      code: "MARRIED",
      value: "Married"
    },
    {
      code: "WIDOWER",
      value: "Widower"
    },
    {
      code: "DIVORCED",
      value: "Divorced"
    },
  ]
  identityTypeOption: any = IdentityType
  reason: string = ""
  status: any = "";
  config: any = {
    type: "user",
    name: "identityNumber"
  }
  sourceScore: number = 0
  qualityScore: number = 0
  score: number = 0
  isValidWin: boolean = false
  leadQuality: any = []
  Quality = {
    "Q10": "campaignName",
    "Q06": "channelCode",
    "Q03": "phoneNo",
    "Q07": "typeCode",
    "Q04": "stateCode",
    "Q13": "districtCode",
    "Q05": "townshipCode",
    "Q08": "productId",
  }
  leadType = {
    "01": "GENERAL",
    "02": "LIFE"
  }
  user: UserModel = new UserModel();
  customer: { customerId: string; customerName: string; customerDob: string; };
  existingCustomer: { customerId: any; customerName: any; customerDob: any; };
  prospCustomer: { customerId: any; customerName: any; customerDob: any; };
  created: any;
  leadAccess = defaultAccessObj
  activityAccess = defaultAccessObj
  policyAccess = defaultAccessObj
  quoAccess = defaultAccessObj
  attachAccess = defaultAccessObj
  fnaAccess = defaultAccessObj
  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder,
    private location: Location,
    private masterDataService: MasterDataService,
    private route: ActivatedRoute,
    private LeadDetailService: LeadDetailService,
    private cdf: ChangeDetectorRef,
    private LeadListService: LeadListService,
    private modalService: NgbModal,
    private router: Router,
    private prodctService: ProductDataService,
    private customerService: CustomerService,
    private productService: ProductDataService,
    private AttachmentUploadService: AttachmentUploadService,
    private LeadAttachmentService: AttachmentServiceRef,
    private AttachmentDownloadService: AttachmentDownloadService,
    private fnaListService: FANListService,
    private authService: AuthService,
    private fnaService: FANService,
    private alertService: AlertService,
    private ngZone: NgZone,

    private menuService: MenuDataService
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.checkPermission()
    this.loadForm();
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.pageStatus = params.pageStatus;
        if (this.pageStatus != "create") {
          this.oldId = params.leadId;
          this.oldSecondaryId = params.pageSecondaryId;
        } else {
          this.loadForm();
        }
      } else {
        this.location.back()
      }

    });

  }

  checkPermission() {
    this.menuService.dataAccess.subscribe((res) => {
      if (res) {
        this.leadAccess = res['leads']
        this.activityAccess = res['activity']
        this.policyAccess = res['application']
        this.quoAccess = res['quotation']
        this.fnaAccess = res['fna']
        if (!this.fnaAccess.delete) {
          this.FNAELEMENT_COL[3].btn.delete = false
        }
        if (!this.quoAccess.edit) {
          this.QUOTATION_ELEMENT_COL[8].btn.edit = false
        }
        if (!this.policyAccess.edit) {
          this.APPLICATION_ELEMENT_COL[8].btn.edit = false
        }

        // this.attachAccess= 
        if (!this.leadAccess.view) {
          this.location.back()
        }
        this.cdf.detectChanges()
      }
    })
  }

  ngAfterViewInit() {
    this.user = this.authService.currentUserValue;
    this.getMaster()
    this.getProduct()
  }

  getMaster() {
    forkJoin([
      this.getChannel(),
      this.getType(),
      this.getOccupation(),
      this.getStatus(),
      this.getState(),
      this.getSource(),
      this.getCompany(),
    ]).toPromise().then((res: any) => {
      if (res) {
        this.channelOption = res[0]
        this.typeOption = res[1]
        this.occupationOption = res[2]
        this.statusOption = res[3]
        this.stateOption = res[4]
        this.sourceOption = res[5]
        this.companyOption = res[6]
        this.cdf.detectChanges()
      }
    })
  }

  onInitAddress(oldData) {
    this.getDistrict(oldData.stateCode);
    this.getTownship(oldData.districtCode);
    this.cdf.detectChanges();
  }

  onChangeState() {
    this.distinctOption = [];
    this.townshipOption = [];

    this.leadForm.controls["districtCode"].setValue("");
    this.leadForm.controls["townshipCode"].setValue("");
    this.getDistrict(this.leadForm.controls["stateCode"].value);
    this.cdf.detectChanges();
  }

  onChangeDistrict() {
    this.leadForm.controls["townshipCode"].setValue("");
    if (this.leadForm.controls["stateCode"].value == "") {
      this.townshipOption = [];
    } else {
      this.getTownship(this.leadForm.controls["districtCode"].value);
    }
    this.cdf.detectChanges();
  }

  ngOnDestroy() {
    this.score = 0
    this.sourceScore = 0
  }

  getCompany() {
    return this.masterDataService.getDataByType("COMPANY_TYPE").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
  }

  getState() {
    return this.masterDataService
      .getDataByType("PT_STATE", true).pipe(map(x => this.getFormatOpt(x)), catchError(e => {
        return of([])
      }))
  }

  getChannel() {
    return this.masterDataService
      .getDataByType("LEAD_DISTRIBUTION_CHANNEL").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
        return of([])
      }))
  }

  getType() {
    return this.masterDataService
      .getDataByType("LEAD_TYPE").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
        return of([])
      }))
  }

  getStatus() {
    return this.masterDataService
      .getDataByType("LEAD_STATUS").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
        return of([])
      }))
  }

  getSource() {
    return this.masterDataService
      .getDataByType("LEAD_SOURCE").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
        return of([])
      }))
  }

  getOccupation() {
    return this.masterDataService
      .getDataByType("OCCUPATION").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
        return of([])
      }))
  }

  getProduct() {
    this.productService
      .getAll('all')
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.productOption = res.map((x) => {
            return { code: x.id, value: x.name, type: x.type };
          });
          this.cdf.detectChanges();

          this.getProductOption()
        }
      });
  }

  getLeadQuality() {
    let channel = this.leadForm.getRawValue().channelCode
    if (channel) {
      this.LeadDetailService.getLeadQuality(channel)
        .toPromise()
        .then((res: any) => {
          if (res) {
            this.leadQuality = res
            console.log("test3");
            this.calculateLeadQuality()
            this.getValidityPeriod()
          }

        })
    }
  }

  getDistrict(parentId: string) {
    this.masterDataService
      .getAddressDataByType("PT_DISTRICT", parentId)
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.distinctOption = res.map((x) => {
            return { code: x.codeId, value: x.codeValue };
          });
          this.cdf.detectChanges();
        }
      });
  }

  getTownship(parentId: string) {
    if (parentId) {
      this.masterDataService
        .getAddressDataByType("PT_TOWNSHIP", parentId)
        .toPromise()
        .then((res: any) => {
          if (res) {
            this.townshipOption = res.map((x) => {
              return { code: x.codeId, value: x.codeValue };
            });
            this.cdf.detectChanges();
          }
        });
    }
  }

  getValidityPeriod() {
    let source = this.leadForm.getRawValue().sourceCode
    let product = this.leadForm.getRawValue().productId
    if (source && product) {
      this.LeadDetailService.getValidityPeriod(source, product).toPromise()
        .then((res: any) => {
          if (res.period != null) {
            this.leadForm.controls.validityPeriod.setValue(res.period)

          } else {
            this.leadForm.controls.validityPeriod.setValue(0)
          }
        })
    }
  }

  actActionBtn(event) {
    if (event.cmd == 'edit') {
      this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: 'edit', pageId: event.data.activityNo } })
    }
  }

  calculateScore(code?, data?) {
    let sourceCode;
    if (data) {
      sourceCode = data
    } else {
      let source = this.sourceOption.find((p) => p.code == code);
      sourceCode = source.code
    }
    let channel = this.leadForm.getRawValue().channelCode
    if (sourceCode && channel) {
      this.LeadDetailService.getLeadScore(sourceCode, channel).toPromise().then((res: any) => {
        this.sourceScore = res
        console.log("test1", this.score);
        this.calculateLeadQuality()
        this.getValidityPeriod()
      })
    }
  }

  calculateLeadQuality(type?: string) {
    this.score = 0
    if (type == "typeCode") {
      this.getProductOption()
    }
    if (type == "product") {
      this.getValidityPeriod()
    }
    if (type == "state") {
      this.onChangeState()
    }
    if (type == "district") {
      this.onChangeDistrict()
    }
    this.leadQuality.forEach(element => {
      let ele = element.qualityValue.toLowerCase()
      if (ele == 'type' || ele == 'township' || ele == 'channel' || ele == 'district' || ele == 'state') {
        element.qualityValue = ele + "Code"
      }
      else if (ele == 'product') {
        element.qualityValue = ele + "Id"
      }
      else if (ele == 'phone no.') {
        element.qualityValue = 'phoneNo'
      }
      else if (ele == 'campaign name') {
        element.qualityValue = 'campaignName'
      }
      else {
        element.qualityValue = element.qualityValue
      }

      let value = this.leadForm.getRawValue()[this.Quality[element.qualityCode]]

      this.score += value ? element.score : 0

    });
    if (this.sourceScore != 0) {
      this.score += this.sourceScore
    }
    this.leadForm.controls.score.setValue(this.score)
  }

  async updateLeadStatus(status) {
    if (status == "save") {
      this.createLead();
    } else if (status == "cancel") {
      this.ngZone.run(() => {
        this.location.back()
      })
    }
    else {
      if (status == "04" || status == "06") {
        let modalRef;
        modalRef = this.modalService.open(CustomInputAlertComponent, { size: 'md', backdrop: false });
        modalRef.componentInstance.type = 'reason'
        modalRef.componentInstance.status = status
        modalRef.result.then(() => { }, (data) => {

          if (data) {
            // this.leadForm.controls.lostReason.setValue(data)
            this.updateStatus(status, data)
          }
        })
      } else {
        this.alertService.activate('Are you sure you want to approve?', 'Warning Message').then(result => {
          if (result) {
            let data = {
              email: this.oldData.email,
              identityNumber: this.oldData.identityNumber,
              identityType: this.oldData.identityType,
              nrcRegionCd: this.oldData.nrcRegionCode,
              nrcTownshipCd: this.oldData.nrcTownshipCode,
              nrcTypeCd: this.oldData.nrcTypeCode,
              phone: this.oldData.phoneNo
            }
            this.LeadDetailService.checkLead(data).toPromise().then((res) => {
              if (res) {
                this.alertService.activate('This Opportunity has been assigned to another producer. Please reject it.', 'Warning Message').then(result => {
                });
              } else {
                this.updateStatus(status);
                this.alertService.activate('This record was approved', 'Success Message').then(result => {
                });
              }

            });
          }
        })
      }
    }

    if (this.prospCustomer) {
      this.customer.customerId = this.prospCustomer.customerId
      this.customer.customerName = this.prospCustomer.customerName
      this.customer.customerDob = this.prospCustomer.customerDob
    }

    if (this.existingCustomer) {
      this.customer.customerId = this.existingCustomer.customerId
      this.customer.customerName = this.existingCustomer.customerName
      this.customer.customerDob = this.existingCustomer.customerDob
    }

  }

  updateStatus(status, reason?) {
    let postData = {
      leadId: this.oldId,
      statusCode: status,
      reason: reason || ""
    }
    let data = { ...postData, leadId: this.oldId, };

    this.LeadDetailService.updateLeadStatus(data, this.oldId)
      .toPromise()
      .then((res) => {
        if (res) {
          // this.getOld()
        }
      });
  }

  viewCampaignList() {
    if (!this.disabledForm) {
      let modalRef;
      modalRef = this.modalService.open(CampaignListComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == "save") {
            let campaign = res.data
            this.leadForm.controls.campaignName.setValue(campaign.cpmName)
            this.leadForm.controls.campaignNo.setValue(campaign.cpmNumber)
            this.calculateLeadQuality()
            console.log("test2");
          }
        }
      })
    }

  }

  viewExistingCustomer(type?: string) {
    if (type == 'ref' && !this.disabledForm) {
      let modalRef;
      modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.componentInstance.party = true
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == "save") {
            let customer = res.data

            if (type == "ref") {
              let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
              this.leadForm.controls.referralCustomerName.setValue(name)
              this.leadForm.controls.referralCustomerId.setValue(customer.customerId)

            }
          }
        }
      })
    }
    else if (!this.isExisting && !this.disabledForm && !this.isAddProspect) {
      let modalRef;
      modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.componentInstance.party = type == "prosp" ? false : true
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == "save") {
            let customer = res.data
            if (type == "ref") {
              let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
              this.leadForm.controls.referralCustomerName.setValue(name)
              this.leadForm.controls.referralCustomerId.setValue(customer.customerId)

            } else if (type == "prosp") {
              this.leadForm.controls.existingCustomerName.setValue("")
              this.leadForm.controls.existingCustomerId.setValue("")
              let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
              this.leadForm.controls.prospectCustomer.setValue(name)
              this.leadForm.controls.prospectCustomerId.setValue(customer.customerId)
              this.prospCustomer = {
                customerId: customer.customerId,
                customerName: customer.firstName + ' ' + customer.middleName + ' ' + customer.lastName,
                customerDob: customer.dateOfBirth
              }
            } else {
              this.existingCustomer = {
                customerId: customer.customerId,
                customerName: customer.firstName + ' ' + customer.middleName + ' ' + customer.lastName,
                customerDob: customer.dateOfBirth
              }
              this.leadForm.controls.prospectCustomer.setValue("")
              this.leadForm.controls.prospectCustomerId.setValue("")
              let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
              this.leadForm.controls.existingCustomerName.setValue(name)
              this.leadForm.controls.existingCustomerId.setValue(customer.customerId)
            }
          }
        }
      })
    }
  }

  viewProspectCustomer() {
    if (!this.disabledForm) {
      let modalRef;
      modalRef = this.modalService.open(CustomerDetailComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.componentInstance.pageStatus = 'create'
      modalRef.componentInstance.isLead = true
      let oldData = {
        identityType: this.leadForm.getRawValue().identityType,
        identityNumber: this.leadForm.getRawValue().identityNumber,
        phone: this.leadForm.getRawValue().phoneNo,
        email: this.leadForm.getRawValue().email,
        occupationCode: this.leadForm.getRawValue().occupationCode,
        townshipCode: this.leadForm.getRawValue().townshipCode,
        districtCode: this.leadForm.getRawValue().districtCode,
        stateCode: this.leadForm.getRawValue().stateCode,
      }
      modalRef.componentInstance.oldData = oldData
      modalRef.componentInstance.onInitAddress(oldData)
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == "save") {
            let customer = res.data
            this.leadForm.controls.existingCustomerName.setValue("")
            this.leadForm.controls.existingCustomerId.setValue("")
            this.leadForm.controls.prospectCustomer.setValue(customer.name)
            this.leadForm.controls.prospectCustomerId.setValue(customer.customerId)

          }
        }
      })
    }
  }

  openNRCModal() {
    let modalRef;
    modalRef = this.modalService.open(NrcPopupPage, { size: 'xl', backdrop: false });
    modalRef.componentInstance.config = this.config
    modalRef.componentInstance.group = this.leadForm
  }

  loadForm() {
    this.leadForm = new FormGroup({
      leadId: new FormControl(null),
      phoneNo: new FormControl(null),
      subject: new FormControl(null),
      openedDate: new FormControl(null),
      companyCode: new FormControl(null),
      PCsms: new FormControl(null),
      PCemail: new FormControl(null),
      PCphone: new FormControl(null),
      contactName: new FormControl(null),
      activationDate: new FormControl(null),
      channelCode: new FormControl(null),
      occupationCode: new FormControl(null),
      closedDate: new FormControl(null),
      typeCode: new FormControl(null),
      stateCode: new FormControl(null),
      expirationDate: new FormControl(null),
      statusCode: new FormControl(null),
      districtCode: new FormControl(null),
      validityPeriod: new FormControl(null),
      reason: new FormControl(null),
      townshipCode: new FormControl(null),
      assignTo: new FormControl(null),
      assignToName: new FormControl(null),
      productId: new FormControl(null),
      email: new FormControl(null),
      campaignName: new FormControl(null),
      identityType: new FormControl(null),
      sourceCode: new FormControl(null),
      campaignNo: new FormControl(null),
      identityNumber: new FormControl(null),
      existingCustomerName: new FormControl(null),
      existingCustomerId: new FormControl(null),
      referralCustomerName: new FormControl(null),
      referralCustomerId: new FormControl(null),
      monthlyIncome: new FormControl(null),
      facebookAcc: new FormControl(null),
      maritalStatus: new FormControl(null),
      financialPlan: new FormControl(null),
      numberOfChildren: new FormControl(null),
      existingInsuranceCoverage: new FormControl(null),
      existingInsurancePlan: new FormControl(null),
      score: new FormControl(null),
      asset: new FormControl(null),
      prospectCustomer: new FormControl(null),
      prospectCustomerId: new FormControl(null),
      lostReason: new FormControl(null),
    });
  }

  backLocation() {
    this.loadForm();
  }

  clearDate(key) {
    if (!this.disabledForm && !this.isExisting) {
      if (key == 'existingCustomerName') {
        this.leadForm.controls[key].setValue(null)
        this.leadForm.controls['existingCustomerId'].setValue(null)
        console.log("TESTexistingCustomerName");

      }
    } else {
      console.log("TEST");

      return false
    }
    if (key == 'referralCustomerName') {
      this.leadForm.controls[key].setValue(null)
      this.leadForm.controls['referralCustomerId'].setValue(null)

    }

    if (key == 'campaignName' || key == 'campaignNo') {
      this.leadForm.controls['campaignName'].setValue(null)
      this.leadForm.controls['campaignNo'].setValue(null)

    }
    if (key == 'prospectCustomer') {
      this.leadForm.controls['prospectCustomer'].setValue(null)
      this.leadForm.controls['prospectCustomerId'].setValue(null)
      this.isAddProspect = false
    }
  }

  createLead() {
    // if (this.leadForm.invalid) {
    //   validateAllFields(this.leadForm);
    //   return true;
    // } else {
    let postData = this.leadForm.getRawValue();
    postData.contact = []
    if (postData.sms) {
      postData.contact.push("sms")
    }
    if (postData.pemail) {
      postData.contact.push("email")
    }
    if (postData.phone) {
      postData.contact.push("phone")
    }
    postData.contact = postData.contact.join(",")
    if (this.pageStatus == "create") {
      this.create(postData);
    } else {
      this.edit(postData);
    }
    // }
  }

  create(postData) {
    let data = { ...postData, leadId: this.oldId, };
    this.LeadDetailService.updateNoID(data)
      .toPromise()
      .then((res) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message');
          // this.location.back();
        }
      });
  }

  edit(postData) {
    let data = { ...postData, leadId: this.oldId, ownerId: postData.assignTo };
    this.LeadDetailService.updateNoID(data)
      .toPromise()
      .then((res) => {
        if (res) {
          // this.getOld()
          this.alertService.activate('This record was updated', 'Success Message');
          // this.location.back();
        }
      });
  }

  createPolicy(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProdRef = res[0]
        this.prodctService.creatingCustomer = res[1]
        this.prodctService.viewType = 'policy'
        this.prodctService.type = 'policy'
        this.prodctService.referenceID = item.id
        this.prodctService.editData = null
        this.prodctService.creatingLeadId = item.leadId
        this.prodctService.referenceStatus = item.status
        this.router.navigateByUrl("/product-form")
      }
    })
  }

  goAppViewDetail(item) {
    this.prodctService.findOne(item.productId).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProd = res
        this.prodctService.previewType = 'policy'
        this.prodctService.editData = item
        this.router.navigateByUrl("/resourse-detail")
      }
    })
  }


  editApp(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
      if (res[0]) {
        this.prodctService.createingProd = res[0]
        this.prodctService.creatingCustomer = res[1]
        this.prodctService.type = 'policy'
        this.prodctService.viewType = 'policy'
        this.prodctService.editData = item
        this.prodctService.referenceID = item.quotationId
        this.prodctService.creatingLeadId = item.leadId
        this.router.navigateByUrl("/product-form")
      }
    })
  }

  getProductOption() {
    let array: any[] = this.productOption || []
    console.log("this.leadForm.getRawValue().typeCode", this.leadForm.getRawValue().typeCode);

    let type = array.filter(x => x.type == this.leadType[this.leadForm.getRawValue().typeCode])
    let index = type.findIndex(x => x.code == this.leadForm.controls["productId"].value)
    console.log(type, index);

    if (index < 0 && this.leadForm.controls["productId"].value && type.length > 0)
      this.leadForm.controls["productId"].setValue("");
    this.productOption2 = type || []
  }

  //for View
  isControlValid(controlName: string): boolean {
    const control = this.leadForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.leadForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.leadForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.leadForm.controls[controlName];
    return control.dirty || control.touched;
  }

  displayFNAType() {
    this.fnaService.fnaUpdateProducts = [];
    this.fnaService.fnaIncome = new IncomeDto();
    this.fnaService.fnaRetirementSaving = new RetirementDto();
    this.fnaService.fnaHealths = new Array<HealthDto>();
    this.fnaService.fnaEducations = new Array<EducationDto>();
    this.fnaService.fnaAssect = new Array<AssectDto>();
    this.fnaService.fnaProduct = new Array<ProductDto>();
    this.fnaService.percentage = '';
    this.fnaService.totalPercentageText = '';
    this.fnaService.bgColor = '';
    this.fnaService.fnaUpdateProducts = new Array<any>();
    this.fnaService.fnaTextColor = null;
    if (this.oldId != null && this.oldId != '' && this.oldId != undefined &&
      this.customer.customerId != null && this.customer.customerId != '') {
      const modalRef = this.modalService.open(FnaTypeComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.type = 'modal'
      modalRef.componentInstance.leadId = this.oldId;
      modalRef.componentInstance.customer = this.customer;
      modalRef.componentInstance.conductedBy = this.oldData.createdBy;
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          res.customerDob = this.customer.customerDob;
          if (res.fnaType == "BPM") {
            console.log('BPM ==========> ', res);
            this.router.navigate(["/fna/fna-bram"], {
              queryParams: { passValue: JSON.stringify({ res }) }
            })
          }

          if (res.fnaType == "LPP") {
            this.router.navigate(["/fna/fna-detail"], {
              queryParams: { passValue: JSON.stringify(res) }
            })
          }
        }
      });
    }
  }

  async createOrEdit(data) {
    this.fnaService.fnaUpdateProducts = [];
    this.fnaService.fnaIncome = new IncomeDto();
    this.fnaService.fnaRetirementSaving = new RetirementDto();
    this.fnaService.fnaHealths = new Array<HealthDto>();
    this.fnaService.fnaEducations = new Array<EducationDto>();
    this.fnaService.fnaAssect = new Array<AssectDto>();
    this.fnaService.fnaProduct = new Array<ProductDto>();
    this.fnaService.percentage = '';
    this.fnaService.totalPercentageText = '';
    this.fnaService.bgColor = '';
    this.fnaService.fnaUpdateProducts = new Array<any>();
    this.fnaService.fnaTextColor = null;
    let passValue: any;
    if (data) {
      passValue = {
        conductedBy: this.oldData.conductedBy,
        conductedByName: this.oldData.conductedByName,
        createdAt: this.convertDateFormatDDMMYYY(data.createdAt),
        createdBy: data.createdBy,
        createdByName: data.createdByName,
        customerId: this.customer.customerId,
        customerName: this.customer.customerName,
        customerDob: this.customer.customerDob,
        updatedAt: data.updatedAt,
        leadId: this.oldId,
        fnaId: data.id,
        type: data.type,
        pageStatus: 'edit'
      }

      // console.log('passValue', passValue);

      if (this.oldId != null && this.oldId != '' && this.oldId != undefined &&
        this.customer.customerId != null && this.customer.customerId != '') {
        if (data.fnaType == 'LPP') {
          this.router.navigate(["/fna/fna-detail"], {
            queryParams: { passValue: JSON.stringify(passValue) },
          })
        } else {
          passValue.grandDiscount = data.grandDiscount
          passValue.highDiscount = data.highDiscount
          FNABRAMDiscount.GRAND_DISCOUNT = 0;
          FNABRAMDiscount.HIGH_DISCOUNT = 0;
          this.router.navigate(["/fna/fna-bram"], {
            queryParams: { passValue: JSON.stringify(passValue) },
          })
        }
      }
    }
  }

  convertDateFormatMMDDYYY(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }

  convertDateFormatDDMMYYY(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }
  getFormatOpt(res) {
    return res.map(x => {
      return { 'code': x.codeId, 'value': x.codeName || x.codeValue }
    })
  }

  save() {
    if (this.leadForm.valid) {
      let formData = this.leadForm.value
      let data = {
        name: formData.productName,
        code: formData.productCode,
        coverName: formData.coverName,
        type: formData.type,
        quotationDay: formData.ruleDate,
        quotationRule: formData.ruleType,
        policyDay: formData.policyDay,
        policyRule: formData.policyRule,
        paymentFrequencyType: "",
        application: false,
        quotation: false,
        isAllowBackDate: formData.isAllowBackDate,
        showInList: formData.showInList,
        allowDays: formData.isAllowDays,
        stamDuty: formData.stamDuty,
        statusCd: formData.statusCd
      }
      this.productService.save(data).toPromise().then(res => {
        if (res) {
          this.modal.dismiss({ data: this.leadForm.value, type: 'save' })
        }
      })
    }
  }

}
