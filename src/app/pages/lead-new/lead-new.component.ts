import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from "@angular/common";
import { forkJoin, map, catchError, of } from 'rxjs';
import { defaultAccessObj } from 'src/app/core/menu-data.service';
import { UserModel, AuthService } from 'src/app/modules/auth';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { MasterDataService } from 'src/app/modules/master-data/master-data.service';
import { CustomerService } from '../customer-detail/customer.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { IdentityType } from '../customer-list/customer-list.const';
import { NrcPopupPage } from '../form-component/nrc-popup/nrc-popup.page';
import { CampaignListComponent } from '../lead-detail/campaign-list/campaign-list.component';
import { LeadDetailService } from '../lead-detail/lead-detail.service';
import { ProductDataService } from '../products/services/products-data.service';
import { validateAllFields } from 'src/app/core/valid-all-feild';

@Component({
  selector: 'app-lead-new',
  templateUrl: './lead-new.component.html',
  styleUrls: ['./lead-new.component.scss']
})
export class LeadNewComponent implements OnInit {

  leadForm: FormGroup;
  isPopup: boolean = false;
  disabled = true
  pageStatus: any;
  description: string = ""
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
    private location: Location,
    private masterDataService: MasterDataService,
    private LeadDetailService: LeadDetailService,
    private cdf: ChangeDetectorRef,
    private modalService: NgbModal,
    private router: Router,
    private alertService: AlertService,
    private productService: ProductDataService,
    private authService: AuthService,
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  ngAfterViewInit() {
    this.user = this.authService.currentUserValue;
    this.getMaster()
    this.getProduct()

    this.leadForm.controls.openedDate.setValue(new Date());
    this.leadForm.controls.statusCode.setValue("A");
    this.leadForm.controls.assignTo.setValue(this.user.username)
  }

  loadForm() {
    this.leadForm = new FormGroup({
      leadId: new FormControl({ value: null, disabled: true }),
      phoneNo: new FormControl(null),
      subject: new FormControl(null),
      openedDate: new FormControl(null),
      companyCode: new FormControl(null, Validators.required),
      PCsms: new FormControl(null),
      PCemail: new FormControl(null),
      PCphone: new FormControl(null),
      contactName: new FormControl(null, Validators.required),
      activationDate: new FormControl(null, Validators.required),
      channelCode: new FormControl(null),
      occupationCode: new FormControl(null),
      closedDate: new FormControl({ value: null, disabled: true }),
      typeCode: new FormControl(null),
      stateCode: new FormControl(null),
      expirationDate: new FormControl(null),
      statusCode: new FormControl({ value: null, disabled: true }, Validators.required),
      districtCode: new FormControl(null),
      validityPeriod: new FormControl({ value: null, disabled: true }),
      reason: new FormControl(null),
      townshipCode: new FormControl(null),
      assignTo: new FormControl({ value: null, disabled: true }),
      productId: new FormControl(null),
      email: new FormControl(null),
      campaignName: new FormControl(null),
      identityType: new FormControl(null),
      sourceCode: new FormControl(null, Validators.required),
      campaignNo: new FormControl(null),
      identityNumber: new FormControl(null),
      existingCustomerName: new FormControl({ value: null, disabled: true }),
      existingCustomerId: new FormControl(null),
      referralCustomerName: new FormControl(null),
      referralCustomerId: new FormControl(null),
      estimatedMonthlyIncome: new FormControl(null),
      facebookAcc: new FormControl(null),
      maritalStatus: new FormControl(null),
      financialPlan: new FormControl(null),
      noOfChildren: new FormControl(null),
      existingInsuranceCoverage: new FormControl(null),
      existingInsurancePlan: new FormControl(null),
      score: new FormControl({ value: null, disabled: true }),
      assets: new FormControl(null),
      prospectCustomer: new FormControl({ value: null, disabled: true }),
      prospectCustomerId: new FormControl(null),
      lostReason: new FormControl(null),
    });

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
    return this.masterDataService.getDataByType("COMPANY_TYPE")
      .pipe(map(x => this.getFormatOpt(x)), catchError(e => {
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
    this.productService.getAll('all').toPromise()
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
      this.LeadDetailService.getLeadQuality(channel).toPromise()
        .then((res: any) => {
          if (res) {
            this.leadQuality = res
            this.calculateLeadQuality()
            this.getValidityPeriod()
          }
        })
    }
  }

  clearLeadQuality() {
    this.leadQuality = []
    this.leadForm.controls.score.setValue(0)
  }

  getDistrict(parentId: string) {
    this.masterDataService
      .getAddressDataByType("PT_DISTRICT", parentId).toPromise()
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
        .getAddressDataByType("PT_TOWNSHIP", parentId).toPromise()
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
      this.router.navigate(["/activity/activity-management-detail"],
        { queryParams: { pageStatus: 'edit', pageId: event.data.activityNo } })
    }
  }

  calculateScore(code?, data?) {
    if (code) {
      let sourceCode;
      if (data) {
        sourceCode = data
      } else {
        let source = this.sourceOption.find((p) => p.code == code);
        sourceCode = source.code ? source.code : null
      }
      let channel = this.leadForm.getRawValue().channelCode
      if (sourceCode && channel) {
        this.LeadDetailService.getLeadScore(sourceCode, channel).toPromise().then((res: any) => {
          this.sourceScore = res
          this.calculateLeadQuality()
          this.getValidityPeriod()
        })
      }
    }
  }

  clear(type?: string) {
    if (type == 'source' || type == 'product') {
      this.leadForm.controls.validityPeriod.setValue(0)
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
    } else {
      this.ngZone.run(() => {
        this.location.back()
      })
    }
  }

  viewCampaignList() {
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
        }
      }
    })
  }

  checkExisting(type?: string) {
    if (this.leadForm.controls.phoneNo.value == null
      && this.leadForm.controls.email.value == null
      && this.leadForm.controls.identityType.value == null) {
      this.alertService.activate('Did not find any existing customer profile related to Identity type, email and phone number.', 'No found existing customer profile');
      return true;
    }
    console.log("checkExisting", type)

    let postData = {
      phoneNo: this.leadForm.controls.phoneNo.value ? this.leadForm.controls.phoneNo.value : "",
      email: this.leadForm.controls.email.value ? this.leadForm.controls.email.value : "",
      identityType: this.leadForm.controls.identityType.value ? this.leadForm.controls.identityType.value : "",
      identityNumber: this.leadForm.controls.identityNumber.value ? this.leadForm.controls.identityNumber.value : "",
    }
    console.log("postData; ", postData)
    if (type == "customer") {
      this.LeadDetailService.checkExistingCustomer(postData).toPromise().then((res: any) => {
        console.log(res)
        if (res.customerId) {
          let fullName = (res.firstName ? res.firstName : "") + " " + (res.middleName ? res.middleName : "") + " " + (res.lastName ? res.lastName : "")
          this.leadForm.controls.existingCustomerName.setValue(fullName)
          this.leadForm.controls.existingCustomerId.setValue(res.customerId)
          console.log(this.leadForm.controls.existingCustomerName, this.leadForm.controls.existingCustomerId)
        } else {
          this.alertService.activate(res.title, "Warning Message");
        }
      })
    } else {
      this.LeadDetailService.checkExistingProspect(postData).toPromise().then((res: any) => {
        console.log(res)
        if (res.customerId) {
          this.leadForm.controls.prospectCustomer.setValue(res.firstName + " " + res.middleName + " " + res.lastName)
          this.leadForm.controls.prospectCustomerId.setValue(res.customerId)
        } else {
          this.alertService.activate(res.title, "Warning Message");
        }

      })
    }
  }

  viewExisting(type?: string) {
    if (type == 'referral') {
      let modalRef;
      modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.componentInstance.party = true
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == "save") {
            let customer = res.data

            if (type == "referral") {
              let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
              this.leadForm.controls.referralCustomerName.setValue(name)
              this.leadForm.controls.referralCustomerId.setValue(customer.customerId)
            }
          }
        }
      })
    }
    else if (!this.isExisting && !this.isAddProspect) {
      let modalRef;
      modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.componentInstance.party = type == "prospect" ? false : true
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == "save") {
            let customer = res.data
            if (type == "referral") {
              let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
              this.leadForm.controls.referralCustomerName.setValue(name)
              this.leadForm.controls.referralCustomerId.setValue(customer.customerId)

            } else if (type == "prospect") {
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

  openNRCModal() {
    let modalRef;
    modalRef = this.modalService.open(NrcPopupPage, { size: 'xl', backdrop: false });
    modalRef.componentInstance.config = this.config
    modalRef.componentInstance.group = this.leadForm
  }

  backLocation() {
    this.loadForm();
  }

  clearDate(key) {
    if (!this.isExisting) {
      if (key == 'existingCustomerName') {
        this.leadForm.controls[key].setValue(null)
        this.leadForm.controls['existingCustomerId'].setValue(null)
      }
    } else {
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
    console.log("Create Opportunity", this.leadForm)

    if (this.leadForm.invalid) {
      validateAllFields(this.leadForm);
      return true;
    }
    if (this.leadForm.controls.existingCustomerId.value == null) {
      this.alertService.activate('Please check Existing Customer before you save.', 'Message');
      return true;
    }

    let postData = this.leadForm.getRawValue();
    postData.contact = []
    if (postData.PCsms) {
      postData.contact.push("sms")
    }
    if (postData.PCemail) {
      postData.contact.push("email")
    }
    if (postData.PCphone) {
      postData.contact.push("phone")
    }
    postData.contact = postData.contact.join(",")
    console.log("PostData: ", postData)
    this.LeadDetailService.createLead(postData).toPromise()
      .then((res) => {
        if (res) {
          this.alertService.activate('This record was created', 'Success Message');
          this.location.back();
        }
      });
  }

  getProductOption() {
    let array: any[] = this.productOption || []

    let type = array.filter(x => x.type == this.leadType[this.leadForm.getRawValue().typeCode])
    let index = type.findIndex(x => x.code == this.leadForm.controls["productId"].value)

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
      return {
        'code': x.codeId,
        'value': x.codeName || x.codeValue
      }
    })
  }

  getCampaignId() {
    let campaignName = this.leadForm.controls.campaignName.value
    let campaignNumber
    if (campaignName) {
      this.LeadDetailService.getCampaignId(campaignName).toPromise().then((res: any) => {
        if (res.length > 0) {
          campaignNumber = res[0].cpmNumber
        } else {
          campaignNumber = ''
        }
        this.leadForm.controls.campaignNo.setValue(campaignNumber)
      })
    }
  }

}
