import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MasterDataService } from "src/app/modules/master-data/master-data.service";
import { Location } from "@angular/common";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import {
  MomentDateAdapter,
} from "@angular/material-moment-adapter";
import { MaterialTableViewComponent } from "src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component";
import { LeadDetailService } from "./lead-detail.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IdentityType } from "../customer-list/customer-list.const";
import { NrcPopupPage } from "../form-component/nrc-popup/nrc-popup.page";
import { CustomInputAlertComponent } from "../form-component/custom-input-alert/custom-input-alert.component";
import { AttachmentCol, AttachmentDisplayCol, FNACol, FNAConstant, FNADisplayCol } from "./FNA-list.const";
import { ActivityCol, ActivityDisplayCol } from "../activity-management-list/activity-manage.const";
import { PolicyCol, PolicyDisplayCol } from "../policy/list/policy.const";
import { QuoDisplayCol, QuotationCol } from "../quotations/list/quotation.const";
import { CustomerListComponent } from "../customer-list/customer-list.component";
import { CustomerDetailComponent } from "../customer-detail/customer-detail.component";
import { ProductsComponent } from "../products/products.component";
import { ProductDataService } from "../products/services/products-data.service";
import { CustomerDetailService, CustomerService } from "../customer-detail/customer.service";
import * as moment from "moment";
import { MY_FORMATS } from "../../core/is-json";
import { AttachmentDownloadService, AttachmentServiceRef, AttachmentUploadService } from "src/app/_metronic/core/services/attachment-data.service";
import { CampaignListComponent } from "./campaign-list/campaign-list.component";
import { FnaTypeComponent } from "../fna-list/fna-type/fna-type.component";
import { FANListService } from "../fna-list/fna-list-manage.service";
import { AuthService, UserModel } from "../../../app/modules/auth";
import { FANService } from "../fna-detail/fna-manage.service";
import { AlertService } from "../../../app/modules/loading-toast/alert-model/alert.service";
import { FNABRAMDiscount } from "../fna-bram/product/product.dto";
import { forkJoin, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { IncomeDto } from "../fna-detail/income/income-manage.dto";
import { RetirementDto } from "../fna-detail/retirement/retirement-manage.dto";
import { HealthDto } from "../fna-detail/health/health-manage.dto";
import { EducationDto } from "../fna-detail/education/education-manage.dto";
import { AssectDto } from "../fna-detail/asset/asset-manage.dto";
import { ProductDto } from "../fna-detail/chart-analysis/product-analysis/product-manage.dto";
import { map } from 'rxjs/operators';
import { defaultAccessObj, MenuDataService } from "../../core/menu-data.service";
import { validateAllFields } from "src/app/core/valid-all-feild";
import { ProspectCustomerListComponent } from "../prospect-customer-list/prospect-customer-list.component";

@Component({
  selector: "app-lead-detail",
  templateUrl: "./lead-detail.component.html",
  styleUrls: ["./lead-detail.component.scss"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class LeadDetailComponent implements OnInit {
  @ViewChild('fna') fnamatTable: MaterialTableViewComponent;
  @ViewChild('activity') activitymatTable: MaterialTableViewComponent;
  @ViewChild('application') applicationmatTable: MaterialTableViewComponent;
  @ViewChild('attachment') attachmentmatTable: MaterialTableViewComponent;
  @ViewChild('quotation') quotationmatTable: MaterialTableViewComponent;

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

  fnaList: any[] = [];
  activityList: any[] = [];
  quotationList: any[] = [];
  applicationList: any[] = [];
  attachmentList: any[] = [];
  leadForm: FormGroup;
  isPopup: boolean = false;
  disabled = true
  pageStatus: any;
  description: string = ""
  product: any = []
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
  maritalOption: any = [];
  occupationOption: any = [];
  state:any=[]
  township:any=[]
  district:any=[]
  isExisting: boolean = false
  isProspectCustomer: boolean = false
  isAddProspect: boolean = false
  isExisted: boolean = false;
  disabledForm: boolean = false
  statusCode: number = 0
  newLeadId: string
  maritialOption: any = [
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
    nrcRegionCode: "nrcRegionCode",
    nrcTownshipCode: "nrcTownshipCode",
    nrcTypeCode: "nrcTypeCode",
    nrcNumber: "nrcNumber",
    identityNRC: "identityNRC"
  }
  sourceScore: number = 0
  qualityScore: number = 0
  score: number = 0
  isFNA: boolean = false
  isApplication: boolean = false
  isAttachment: boolean = false
  isQuotation: boolean = false
  isActivity: boolean = false
  isMenuOpen: boolean = false
  isMore: boolean = false
  isDetail: boolean = true
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
    "Q11": "identityType",
    "Q01": "based"
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
  switchObj: {};
  isUpdateNew: boolean = false;
  isReleasedDisabled: boolean = false;
  customerClass1
  prospectClass1
  customerClass2
  prospectClass2
  prospectClass3
  isCustomerCheck: boolean = false;
  isProspectCheck: boolean = false;
  toMinDate = null
  toMaxDate = null
  constructor(
    private location: Location,
    private masterDataService: MasterDataService,
    private route: ActivatedRoute,
    private LeadDetailService: LeadDetailService,
    private cdf: ChangeDetectorRef,
    private modalService: NgbModal,
    private router: Router,
    private prodctService: ProductDataService,
    private customerService: CustomerDetailService,
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
    this.checkPremission()
    this.loadForm();
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.pageStatus = params.pageStatus;
        if (this.pageStatus != "create") {
          this.oldId = params.leadId;
          this.oldSecondaryId = params.pageSecondaryId;
          this.getOld();
        } else {
          this.loadForm();
        }
      } else {
        this.location.back()
      }
    });
  }

  checkPremission() {
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
    this.getAllMaster()
    this.getProduct()

    this.customerClass1 = document.getElementById('customerClass1')
    this.customerClass2 = document.getElementById('customerClass2')
    this.prospectClass1 = document.getElementById('prospectClass1')
    this.prospectClass2 = document.getElementById('prospectClass2')
    this.prospectClass3 = document.getElementById('prospectClass3')

    if (this.oldData == null) {
      this.leadForm.controls.assignTo.setValue(this.user.id)
      this.leadForm.controls.assignToName.setValue(this.user.empName)
      this.leadForm.controls.openedDate.setValue(new Date())
      this.leadForm.controls.statusCode.setValue("01")
    }
    let toDate = moment().subtract(0, `days`)
    this.toMinDate = toDate.format('YYYY-MM-DD')
  }

  getMaster() {
    forkJoin([
      this.getChannel(),
      this.getType(),
      this.getOccupation(),
      this.getStatus(),
      this.getState(),
      this.getTownship(),
      this.getDistrict(),
      this.getSource(),
      this.getCompany(),
    ]).toPromise().then((res: any) => {
      if (res) {
        this.channelOption = res[0]
        this.typeOption = res[1]
        this.occupationOption = res[2]
        this.statusOption = res[3]
        this.stateOption = res[4]
        this.townshipOption = res[5]
        this.distinctOption = res[6]
        this.sourceOption = res[7]
        this.companyOption = res[8]
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
        this.distinctOption = res[2]
        this.cdf.detectChanges()
      }
    })
  }


  onInitAddress(oldData) {
    this.getState()
    this.getDistrict();
    this.getTownship();
    this.cdf.detectChanges();
  }

  onChangeState() {
    // this.distinctOption = [];
    // this.townshipOption = [];
    // this.leadForm.controls["districtCode"].setValue("");
    // this.leadForm.controls["townshipCode"].setValue("");
    // this.getDistrict(this.leadForm.controls["stateCode"].value);
    // this.cdf.detectChanges();
  }

  onChangeDistrict() {
    // this.leadForm.controls["townshipCode"].setValue("");
    // if (this.leadForm.controls["stateCode"].value == "") {
    //   this.townshipOption = [];
    // } else {
    //   this.getTownship(this.leadForm.controls["districtCode"].value);
    // }
    // this.cdf.detectChanges();
  }
  onChangeTownship() {
    this.leadForm.controls['districtCode'].setValue('');
    this.leadForm.controls['stateCode'].setValue('');
    let townshipCode = this.leadForm.controls['townshipCode'].value
    this.getParentDataByTownship(townshipCode)
  }
  getParentDataByTownship(townshipCode) {
    let district;
    let districtCode;
    let state;
    let stateCode;

    if (townshipCode) {
      district = this.township.find(x => x.codeId == townshipCode)
      districtCode = district.parentCode
      this.leadForm.controls['districtCode'].setValue(districtCode)
    }
    if (districtCode) {
      state = this.district.find(x => x.codeId == districtCode)
      stateCode = state.parentCode
      this.leadForm.controls['stateCode'].setValue(stateCode)
    }
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
  
  getFormatOpt(res) {
    return res.map(x => {
      return { 'code': x.codeId, 'value': x.codeName || x.codeValue }
    })
  }

  getProduct() {
    this.productService
      .getAll('yes')
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.product = res;
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
            this.calculateLeadQuality()
            this.getValidityPeriod()
          }
        })
    }
  }

  getDistrictByParent(parentId: string) {
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

  getTownshipByParent(parentId: string) {
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
    console.log("SOURCE",code);
    
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
        this.calculateLeadQuality()
        this.getValidityPeriod()
      })
    }
  }

  calculateLeadQuality(type?: string) {
    this.score = 0
    if (type == 'channel') {
      let source=this.leadForm.getRawValue().sourceCode
      this.getLeadQuality()
      this.calculateScore(source,null)
    }
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
      else if (ele == 'identity type') {
        element.qualityValue = 'identityType'
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
    if (this.score != 0 && this.leadForm.getRawValue().channelCode != null) {
      this.leadForm.controls.score.setValue(this.score)
    } else {
      this.leadForm.controls.score.setValue(0)
    }
  }

  getOld() {
    this.LeadDetailService.findOne(this.oldId)
      .toPromise()
      .then((res) => {
        if (res) {
          // console.log("getOld => response", res)
          this.oldData = res;
          if (res.existingCustomerId != 0) {
            this.isAddProspect = true
            this.isExisted = this.oldData.statusCode == '03' ? true : false;
            this.customer = {
              customerId: res.existingCustomerId,
              customerName: res.existingCustomerName,
              customerDob: res.existingCustomerDateOfBirth
            }
          } else {
            this.isExisted = this.oldData.statusCode == '03' ? true : false;
            this.customer = {
              customerId: res.prospectCustomerId,
              customerName: res.prospectCustomerName,
              customerDob: res.prospectCustomerDateOfBirth,
            }
          }
          this.statusCode = parseInt(this.oldData.statusCode)
          if (this.oldData) {
            if (this.oldData.prospectCustomerId == 0) {
              this.isProspectCustomer = false
            } else {
              this.isProspectCustomer = true
            }
          }
          this.loadForm(res);
          this.fnaList = this.oldData.fnas != null ? this.oldData.fnas : []
          this.activityList = this.oldData.activities != null ? this.oldData.activities : []
          this.quotationList = this.oldData.resourceQuotations != null ? this.oldData.resourceQuotations : []
          this.applicationList = this.oldData.resourcePolicies != null ? this.oldData.resourcePolicies : []
          this.applicationList.forEach((value, index) => {
            this.applicationList[index].agentFirstName = value.agentFirstName + " " + (value.agentMiddleName != null ? value.agentMiddleName : "") + " " + value.agentLastName
            this.cdf.detectChanges()
          })
          let appList = this.applicationList.filter(list => list.status == 'submitted')
          if (appList.length > 0) {
            this.isReleasedDisabled = true;
          } else if (this.oldData.statusCode == '07') {
            this.APPLICATION_ELEMENT_COL[9].btn.edit = false
          }
          else {
            this.isReleasedDisabled = false;
          }

          this.quotationList.forEach((value, index) => {
            this.quotationList[index].agentFirstName = value.agentFirstName + " " + (value.agentMiddleName != null ? value.agentMiddleName : "") + " " + value.agentLastName
            this.cdf.detectChanges()
          })

          this.attachmentList = this.oldData.attachments != null ? this.oldData.attachments : []
          if (this.activityList.length > 0 || this.quotationList.length > 0 || this.applicationList.length > 0 || this.attachmentList.length > 0 || this.fnaList.length > 0) {
            this.isAddProspect = true
            this.cdf.detectChanges()
          }
          this.onInitAddress(this.oldData);
          this.getProductOption()

          if (res.fnas.length) {
            this.fnaList = res.fnas;
          }
          if (this.applicationList.length > 0) {
            this.isValidWin = true
          }

          this.cdf.detectChanges();
          if (this.statusCode > 2) {
            this.activitymatTable.reChangeData()
            this.fnamatTable.reChangeData()
            this.attachmentmatTable.reChangeData()
            this.quotationmatTable.reChangeData()
            this.applicationmatTable.reChangeData()
          }

        }
      });
  }

  async updateLeadStatus(status) {
    if (status == "save") {
      this.createLead();
    } else if (status == "cancel") {
      this.ngZone.run(() => {
        this.location.back()
      })
    } else if (status == "07") {
      this.updateStatus(status)
    } else if (status == "04") {
      let modalRef;
      modalRef = this.modalService.open(CustomInputAlertComponent, { size: 'md', backdrop: false });
      modalRef.componentInstance.type = 'reason'
      modalRef.componentInstance.status = status
      modalRef.result.then(() => { }, (data) => {
        if (data) {
          this.updateStatus(status, data)
        }
      })
    } else {
      if (this.leadForm.getRawValue().assignTo != 0) {
        if (this.leadForm.controls.existingCustomerId.value == 0 && this.leadForm.controls.prospectCustomerId.value == 0) {
          this.alertService.activate('Please add Existing Customer/Prospect before you accept.', 'Message');
        }
        else {
          this.alertService.activate('Are you sure you want to accept?', 'Warning Message').then(result => {
            if (result) {
              let data = {
                leadId: this.newLeadId ? this.newLeadId : this.leadForm.controls.leadId.value || "",
                agentId: this.leadForm.controls.ownerId ? this.leadForm.controls.ownerId.value : "",
                phone: this.leadForm.controls.phoneNo ? this.leadForm.controls.phoneNo.value : "",
                email: this.leadForm.controls.email ? this.leadForm.controls.email.value : "",
                identityType: this.leadForm.controls.identityType ? this.leadForm.controls.identityType.value : null,
                nrcRegionCd: this.leadForm.controls.identityType ? this.leadForm.controls.identityType.value == 'NRC' ? this.leadForm.controls.nrcRegionCode.value : "" : "",
                nrcTownshipCd: this.leadForm.controls.identityType ? this.leadForm.controls.identityType.value == 'NRC' ? this.leadForm.controls.nrcTownshipCode.value : "" : "",
                nrcTypeCd: this.leadForm.controls.identityType ? this.leadForm.controls.identityType.value == 'NRC' ? this.leadForm.controls.nrcTypeCode.value : "" : "",
                identityNumber: this.leadForm.controls.identityType ? this.leadForm.controls.identityType.value == 'NRC' ? this.leadForm.controls.nrcNumber.value : this.leadForm.controls.identityNumber.value : "",
              }
              this.LeadDetailService.checkLead(data).toPromise().then(async (res) => {
                if (res) {
                  this.alertService.activate('This Opportunity has been assigned to another producer. Please reject it.', 'Warning Message').then(result => {
                  });
                } else {
                  this.updateStatus(status, 'approve');
                  this.alertService.activate('This record was accepted', 'Success Message').then(result => {
                  });
                }
              });
            }
          })
        }
      } else {
        this.alertService.activate('Please assign producer/agent', 'Warning')
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
    if (reason == 'approve' || status == "07") {
      let postValue = { ...this.leadForm.getRawValue(), statusCode: status }
      this.edit(postValue)
    } else {
      let postData = {
        leadId: this.oldId,
        statusCode: status,
        reason: reason || ""
      }
      let data = { ...postData, leadId: this.oldId, };
      this.LeadDetailService.updateLeadStatus(data, this.oldId)
        .toPromise().then((res) => {
          if (res) {
            this.getOld()
          }
        });
    }
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
          }
        }
      })
    }
  }

  checkExisting(type?: string) {
    if (type == "customer") {
      this.isCustomerCheck = true;
      if (this.leadForm.controls.phoneNo.value == null
        && this.leadForm.controls.email.value == null
        && this.leadForm.controls.identityType.value == null) {
        this.alertService.activate('Did not find any existing customer profile related to Identity type, email and phone number.', 'No found existing customer profile');
        return true;
      }
    } else {
      this.isProspectCheck = true;
      if (this.leadForm.controls.phoneNo.value == null
        && this.leadForm.controls.email.value == null
        && this.leadForm.controls.identityType.value == null) {
        this.alertService.activate('Did not find any existing prospect profile related to Identity type, email and phone number.', 'No found existing prospect profile');
        return true
      }
    }

    let postData = {
      phoneNo: this.leadForm.controls.phoneNo.value ? this.leadForm.controls.phoneNo.value : "",
      email: this.leadForm.controls.email.value ? this.leadForm.controls.email.value : "",
      identityType: this.leadForm.controls.identityType.value ? this.leadForm.controls.identityType.value : null,
      identityNumber: this.leadForm.controls.identityNumber.value ? this.leadForm.controls.identityNumber.value : "",
    }
    // console.log("checkExisting: ", postData)
    if (type == "customer") {
      this.LeadDetailService.checkExistingCustomer(postData).toPromise().then((res: any) => {
        if (res.customerId) {
          this.leadForm.controls.prospectCustomer.setValue("")
          this.leadForm.controls.prospectCustomerId.setValue(0)
          let fullName = (res.firstName ? res.firstName : "") + " " + (res.middleName ? res.middleName : "") + " " + (res.lastName ? res.lastName : "")
          this.leadForm.controls.existingCustomerName.setValue(fullName)
          this.leadForm.controls.existingCustomerId.setValue(res.customerId)
          this.customerClass1.classList.remove('disabled');
          this.customerClass2.classList.remove('disabled');
          this.prospectClass1.classList.add('disabled');
          this.prospectClass2.classList.add('disabled');
          this.prospectClass3.classList.add('disabled');
          this.isProspectCheck = true;
          this.isCustomerCheck = true;
        } else {
          this.alertService.activate(res.title, "Warning Message");
        }
      })
    } else {
      this.LeadDetailService.checkExistingProspect(postData).toPromise().then((res: any) => {
        if (res.customerId) {
          this.leadForm.controls.existingCustomerName.setValue("")
          this.leadForm.controls.existingCustomerId.setValue(0)
          let fullName = (res.firstName ? res.firstName : "") + " " + (res.middleName ? res.middleName : "") + " " + (res.lastName ? res.lastName : "")
          this.leadForm.controls.prospectCustomer.setValue(fullName)
          this.leadForm.controls.prospectCustomerId.setValue(res.customerId)
          this.customerClass1.classList.add('disabled');
          this.customerClass2.classList.add('disabled');
          this.prospectClass1.classList.remove('disabled');
          this.prospectClass2.classList.remove('disabled');
          this.prospectClass3.classList.remove('disabled');
          this.isProspectCheck = true;
          this.isCustomerCheck = true;
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
    // else if (!this.isExisting && !this.isAddProspect) {
    else {
      let modalRef;
      if (type == "prospect") {
        modalRef = this.modalService.open(ProspectCustomerListComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.isPopup = true
        modalRef.componentInstance.party = false
        modalRef.result.then(() => { }, (res) => {
          if (res) {
            if (res.type == "save") {
              let customer = res.data
              this.prospCustomer = {
                customerId: customer.customerId,
                customerName: customer.firstName + ' ' + customer.middleName + ' ' + customer.lastName,
                customerDob: customer.dateOfBirth
              }
              this.leadForm.controls.existingCustomerName.setValue("")
              this.leadForm.controls.existingCustomerId.setValue("")
              let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
              this.leadForm.controls.prospectCustomer.setValue(name)
              this.leadForm.controls.prospectCustomerId.setValue(customer.customerId)
              this.customerClass1.classList.add('disabled');
              this.customerClass2.classList.add('disabled');
              this.prospectClass1.classList.remove('disabled');
              this.prospectClass2.classList.remove('disabled');
              this.prospectClass3.classList.remove('disabled');
              this.isProspectCheck = true;
              this.isCustomerCheck = true;
            }
          }
        })
      } else {
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

              } else {
                this.existingCustomer = {
                  customerId: customer.customerId,
                  customerName: customer.firstName + ' ' + customer.middleName + ' ' + customer.lastName,
                  customerDob: customer.dateOfBirth
                }
                this.leadForm.controls.prospectCustomer.setValue("")
                this.leadForm.controls.prospectCustomerId.setValue(0)
                let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
                this.leadForm.controls.existingCustomerName.setValue(name)
                this.leadForm.controls.existingCustomerId.setValue(customer.customerId)
                this.customerClass1.classList.remove('disabled');
                this.customerClass2.classList.remove('disabled');
                this.prospectClass1.classList.add('disabled');
                this.prospectClass2.classList.add('disabled');
                this.prospectClass3.classList.add('disabled');
                this.isCustomerCheck = true;
                this.isProspectCheck = true;
              }
            }
          }
        })
      }
    }
  }

  viewProspectCustomer() {
    if (this.leadForm.getRawValue().stateCode != '03') {
      let modalRef;
      modalRef = this.modalService.open(CustomerDetailComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.componentInstance.pageStatus = 'create'
      modalRef.componentInstance.isLead = true
      let oldData = {
        identityType: this.leadForm.getRawValue().identityType,
        identityNumber: this.leadForm.getRawValue().identityType != 'NRC' ? this.leadForm.getRawValue().identityNumber : this.leadForm.getRawValue().identityNRC,
        phone: this.leadForm.getRawValue().phoneNo,
        email: this.leadForm.getRawValue().email,
        occupationCd: this.leadForm.getRawValue().occupationCd,
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

  loadForm(oldData?) {
    // console.log("LoadForm => OldData? ", oldData)
    if (oldData != null) {
      this.disabledForm = oldData ? oldData.statusCode == '03' ? false : true : false
      this.isExisting = oldData ? oldData.existingCustomerId == 0 ? false : true : false
      this.leadForm = null
      this.cdf.detectChanges()
      this.leadForm = new FormGroup({
        leadId: new FormControl({ value: oldData ? oldData.leadId : '', disabled: true }),
        openedDate: new FormControl(
          { value: oldData ? moment(oldData.openedDate) : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : true }),
        activationDate: new FormControl(
          { value: oldData ? moment(oldData.activationDate) : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        closedDate: new FormControl(
          { value: oldData ? moment(oldData.closedDate) : '', disabled: true }),
        expirationDate: new FormControl(
          { value: oldData ? moment(oldData.expirationDate) : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        subject: new FormControl(
          { value: oldData ? oldData.subject : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        companyCode: new FormControl(
          { value: oldData ? oldData.companyCode : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        sms: new FormControl(
          { value: oldData ? (oldData.contact + "").includes('sms') : false, disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        pemail: new FormControl(
          { value: oldData ? (oldData.contact + "").includes('email') : false, disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        phone: new FormControl(
          { value: oldData ? (oldData.contact + "").includes('phone') : false, disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        contactName: new FormControl(
          { value: oldData ? oldData.contactName : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        channelCode: new FormControl(
          { value: oldData ? oldData.channelCode : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        occupationCd: new FormControl(
          { value: oldData ? oldData.occupationCode : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        typeCode: new FormControl(
          { value: oldData ? oldData.typeCode : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        statusCode: new FormControl(
          { value: oldData ? oldData.statusCode : '', disabled: true }),
        stateCode: new FormControl(
          { value: oldData ? oldData.stateCode : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        districtCode: new FormControl(
          { value: oldData ? oldData.districtCode : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        townshipCode: new FormControl(
          { value: oldData ? oldData.townshipCode : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        assignTo: new FormControl(
          { value: oldData ? oldData.ownerId : '', disabled: oldData.statusCode == '01' ? false : true }),
        assignToName: new FormControl(
          { value: oldData ? oldData.ownerName : '', disabled: oldData.statusCode == '01' ? false : true }),
        productId: new FormControl(
          { value: oldData ? oldData.productId : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        phoneNo: new FormControl(
          { value: oldData ? oldData.phoneNo : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        email: new FormControl(
          { value: oldData ? oldData.email : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        identityType: new FormControl(
          { value: oldData ? oldData.identityType : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        identityNumber: new FormControl(
          { value: oldData ? oldData.identityType != 'NRC' ? oldData.identityNumber : "" : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        nrcRegionCode: new FormControl(
          { value: oldData ? oldData.nrcRegionCode : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        nrcTownshipCode: new FormControl(
          { value: oldData ? oldData.nrcTownshipCode : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        nrcTypeCode: new FormControl(
          { value: oldData ? oldData.nrcTypeCode : '', disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        nrcNumber: new FormControl(
          { value: oldData ? oldData.identityNumber : '', disabled: oldData.nrcNumber == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true }),
        identityNRC: new FormControl(
          {
            value: oldData ? oldData.identityType == 'NRC' ? oldData.nrcRegionValue + "/" + oldData.nrcTownshipValue + "(" + oldData.nrcTypeValue + ")" + oldData.identityNumber : "" : '',
            disabled: oldData.statusCode == '01' ? false : oldData.statusCode == '02' ? false : oldData.statusCode == '04' ? false : true
          }),
        sourceCode: new FormControl(
          { value: oldData ? oldData.sourceCode : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        campaignNo: new FormControl(
          { value: oldData ? oldData.campaignNo : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        campaignName: new FormControl(
          { value: oldData ? oldData.campaignName : '', disabled: true }),
        estimatedMonthlyIncome: new FormControl(
          { value: oldData ? oldData.monthlyIncome : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        facebookAcc: new FormControl(
          { value: oldData ? oldData.facebookAcc : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        maritalStatus: new FormControl(
          { value: oldData ? oldData.maritalStatus : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        financialPlan: new FormControl(
          { value: oldData ? oldData.financialPlan : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        noOfChildren: new FormControl(
          { value: oldData ? oldData.numberOfChildren : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        existingInsuranceCoverage: new FormControl(
          { value: oldData ? oldData.existingInsuranceCoverage : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        existingInsurancePlan: new FormControl(
          { value: oldData ? oldData.existingInsurancePlan : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        score: new FormControl(
          { value: oldData ? oldData.score : '', disabled: true }),
        validityPeriod: new FormControl(
          { value: oldData ? oldData.validityPeriod : '', disabled: true }),
        assets: new FormControl(
          { value: oldData ? oldData.assets : '', disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        lostReason: new FormControl(
          { value: oldData ? oldData.lostReason : '', disabled: true }),
        reason: new FormControl(
          { value: oldData ? oldData.reason : '', disabled: true }),
        existingCustomerName: new FormControl(
          { value: oldData ? oldData.existingCustomerName.trim() : "", disabled: true }),
        existingCustomerId: new FormControl(
          { value: oldData ? oldData.existingCustomerId : 0, disabled: true }),
        referralCustomerName: new FormControl(
          { value: oldData ? oldData.referralCustomerName.trim() : "", disabled: true }),
        referralCustomerId: new FormControl(
          { value: oldData ? oldData.referralCustomerId : 0, disabled: oldData.statusCode == '05' ? true : oldData.statusCode == '06' ? true : oldData.statusCode == '07' ? true : false }),
        prospectCustomer: new FormControl(
          { value: oldData ? oldData.prospectCustomerName.trim() : "", disabled: true }),
        prospectCustomerId: new FormControl(
          { value: oldData ? oldData.prospectCustomerId : 0, disabled: true }),
        ownerId: new FormControl(
          { value: oldData ? oldData.ownerId : 0, disabled: true }),
      });

      this.cdf.detectChanges()
      if (this.oldData) {
        this.getLeadQuality()
        this.calculateScore(null, this.oldData.sourceCode)
      }
    } else {
      this.createNewLeadForm();
    }
  }

  createNewLeadForm() {
    this.leadForm = new FormGroup({
      leadId: new FormControl({ value: null, disabled: true }),
      phoneNo: new FormControl(null),
      subject: new FormControl(null),
      openedDate: new FormControl({ value: new Date() }, Validators.required),
      openedDateStr: new FormControl(null),
      companyCode: new FormControl(null, Validators.required),
      PCsms: new FormControl(null),
      PCemail: new FormControl(null),
      PCphone: new FormControl(null),
      contactName: new FormControl(null, Validators.required),
      activationDate: new FormControl(null, Validators.required),
      activationDateStr: new FormControl(null),
      channelCode: new FormControl(null, Validators.required),
      occupationCd: new FormControl(null),
      closedDate: new FormControl({ value: null, disabled: true }),
      closedDateStr: new FormControl(null),
      typeCode: new FormControl(null),
      stateCode: new FormControl(null),
      expirationDate: new FormControl(null),
      expirationDateStr: new FormControl(null),
      statusCode: new FormControl({ value: null, disabled: true }, Validators.required),
      districtCode: new FormControl(null),
      validityPeriod: new FormControl({ value: null, disabled: true }),
      reason: new FormControl({ value: null, disabled: true }),
      townshipCode: new FormControl(null),
      assignTo: new FormControl({ value: this.user.id }),
      assignToName: new FormControl({ value: null, disabled: true }),
      productId: new FormControl(null),
      email: new FormControl(null),
      sourceCode: new FormControl(null, Validators.required),
      campaignNo: new FormControl(null),
      campaignName: new FormControl({ value: null, disabled: true }),
      identityType: new FormControl(null),
      identityNumber: new FormControl(null),
      nrcRegionCode: new FormControl(null),
      nrcTownshipCode: new FormControl(null),
      nrcTypeCode: new FormControl(null),
      nrcNumber: new FormControl(null),
      identityNRC: new FormControl(null),
      existingCustomerName: new FormControl({ value: null, disabled: true }),
      existingCustomerId: new FormControl(0),
      referralCustomerName: new FormControl({ value: null, disabled: true }),
      referralCustomerId: new FormControl(0),
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
      prospectCustomerId: new FormControl(0),
    });
  }

  backLocation() {
    this.loadForm(this.oldData);
  }

  clearData(key) {
    if (key == 'existingCustomerName') {
      this.leadForm.controls[key].setValue(null)
      this.leadForm.controls['existingCustomerId'].setValue(0)
      this.prospectClass1.classList.remove('disabled');
      this.prospectClass2.classList.remove('disabled');
      this.prospectClass3.classList.remove('disabled');
    }

    if (key == 'prospectCustomer') {
      this.leadForm.controls[key].setValue(null)
      this.leadForm.controls['prospectCustomerId'].setValue(0)
      this.isAddProspect = false
      this.customerClass1.classList.remove('disabled');
      this.customerClass2.classList.remove('disabled');
    }

    if (key == 'referralCustomerName') {
      this.leadForm.controls[key].setValue(null)
      this.leadForm.controls['referralCustomerId'].setValue(0)
    }

    if (key == 'campaignName' || key == 'campaignNo') {
      this.leadForm.controls['campaignName'].setValue(null)
      this.leadForm.controls['campaignNo'].setValue(null)
    }
  }

  clearLeadQuality() {
    this.leadQuality = []
    this.leadForm.controls.score.setValue(0)
  }

  clear(type?: string) {
    if (type == 'source' || type == 'product') {
      this.leadForm.controls.validityPeriod.setValue(0)
    }
  }

  getCampaignName() {
    let campaignNo = this.leadForm.controls.campaignNo.value
    let campaignName = ""
    if (campaignNo) {
      this.LeadDetailService.getCampaignNameById(campaignNo).toPromise().then((res: any) => {
        if (res) {
          campaignName = res.cpmName
        }
        this.leadForm.controls.campaignName.setValue(campaignName)
      })
    }
  }

  createLead() {
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
    if (postData.statusCode == "01") {
      postData.statusCode = "02"
    }
    if (this.pageStatus == "create") {
      this.create(postData);
    } else {
      this.edit(postData);
    }
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
    if (this.isUpdateNew) {
      postData.activationDate = moment(this.leadForm.controls.activationDate.value)
      postData.closedDate = moment(this.leadForm.controls.closedDate.value)
      postData.openedDate = moment(this.leadForm.controls.openedDate.value)
      postData.expirationDate = moment(this.leadForm.controls.expirationDate.value)
    }
    if (postData.statusCode == '04') {
      postData.statusCode = '01'
    }
    let requestData: any = {
      "activationDate": "",
      "activationDateStr": postData.activationDate.toDate() != 'Invalid Date' ? this.convertDateFormatDDMMYYY(postData.activationDate) || this.convertDateFormatDDMMYYY(postData.activationDate) : "",
      "assets": postData.assets ? postData.assets : "",
      "assignTo": postData.assignTo ? postData.assignTo : this.user.id,
      "campaignName": postData.campaignName ? postData.campaignName : "",
      "campaignNo": postData.campaignNo ? postData.campaignNo : "",
      "channelCode": postData.channelCode ? postData.channelCode : "",
      "closedDate": "",
      "closedDateStr": postData.closedDate.toDate() != 'Invalid Date' ? this.convertDateFormatDDMMYYY(postData.closedDate) : "",
      "companyCode": postData.companyCode ? postData.companyCode : "",
      "contact": postData.contact,
      "contactName": postData.contactName ? postData.contactName : "",
      "customerPlan": "",
      "description": "",
      "districtCode": postData.districtCode ? postData.districtCode : "",
      "dueDate": "",
      "dueDateStr": "",
      "email": postData.email ? postData.email : "",
      "existingInsuranceCoverage": postData.existingInsuranceCoverage ? postData.existingInsuranceCoverage : "",
      "existingInsurancePlan": postData.existingInsurancePlan ? postData.existingInsurancePlan : "",
      "expirationDate": "",
      "expirationDateStr": postData.expirationDate.toDate() != 'Invalid Date' ? this.convertDateFormatDDMMYYY(postData.expirationDate) : "",
      "facebookAcc": postData.facebookAcc ? postData.facebookAcc : "",
      "financialPlan": postData.financialPlan ? postData.financialPlan : "",
      "frc": "",
      "leadId": postData.leadId ? postData.leadId : "",
      "lostReason": postData.lostReason ? postData.lostReason : "",
      "maritalStatus": postData.maritalStatus ? postData.maritalStatus : null,
      "estimatedMonthlyIncome": postData.estimatedMonthlyIncome ? postData.estimatedMonthlyIncome : "",
      "name": "",
      "identityType": postData.identityType ? postData.identityType : null,
      "identityNumber": postData.identityType == "NRC" ? postData.nrcNumber : postData.identityType != "NRC" ? postData.identityNumber : "",
      "nrcRegionCode": postData.identityType == "NRC" ? postData.nrcRegionCode : "",
      "nrcTownshipCode": postData.identityType == "NRC" ? postData.nrcTownshipCode : "",
      "nrcTypeCode": postData.identityType == "NRC" ? postData.nrcTypeCode : "",
      "noOfChildren": "" + (postData.noOfChildren ? postData.noOfChildren : "") + "",
      "occupationCd": postData.occupationCd ? postData.occupationCd : "",
      "openedDate": "",
      "openedDateStr": postData.openedDate.toDate() != 'Invalid Date' ? this.convertDateFormatDDMMYYY(postData.openedDate) : "",
      "operationDate": "",
      "operationDateStr": "",
      "others": "",
      "ownerId": postData.assignTo ? postData.assignTo : 0,
      "passport": "",
      "phoneNo": postData.phoneNo ? postData.phoneNo : "",
      "productCode": postData.productCode ? postData.productCode : "",
      "productId": postData.productId ? postData.productId : "",
      "productName": "",
      "reason": postData.reason ? postData.reason : "",
      "referralCustomerId": postData.referralCustomerId ? postData.referralCustomerId : 0,
      "remark": "",
      "score": postData.score ? postData.score : 0,
      "sourceCode": postData.sourceCode ? postData.sourceCode : "",
      "startDate": "",
      "startDateStr": "",
      "stateCode": postData.stateCode ? postData.stateCode : "",
      "statusCode": postData.statusCode ? postData.statusCode : "",
      "subTypeCode": "",
      "subject": postData.subject ? postData.subject : "",
      "townshipCode": postData.townshipCode ? postData.townshipCode : "",
      "typeCode": postData.typeCode ? postData.typeCode : "",
      "validityPeriod": postData.validityPeriod ? postData.validityPeriod : 0,
    }
    if (postData.existingCustomerId) {
      requestData["existingCustomerId"] = postData.existingCustomerId
      requestData["existingCustomerName"] = postData.existingCustomerName
    }
    if (postData.prospectCustomerId) {
      requestData["prospectCustomerId"] = postData.prospectCustomerId
      requestData["prospectCustomer"] = postData.prospectCustomer
    }
    this.LeadDetailService.updateNoID(requestData).toPromise()
      .then((res) => {
        if (res) {
          this.getOld()
          this.alertService.activate('This record was updated', 'Success Message');
        }
      });
  }

  async createNewLeadStatus(status) {
    if (status == "save") {
      if (this.leadForm.controls.leadId.value) {
        this.isUpdateNew = true
        this.edit(this.leadForm.getRawValue())
      } else {
        this.createNewLead();
      }
    } else {
      this.ngZone.run(() => {
        this.location.back()
      })
    }
  }

  createNewLead() {
    if (this.leadForm.invalid) {
      validateAllFields(this.leadForm);
      return true;
    }
    if (!this.isCustomerCheck && this.leadForm.controls.prospectCustomerId.value == 0) {
      this.alertService.activate('Please check Existing Customer before you save.', 'Message');
    }
    else if (!this.isProspectCheck && this.leadForm.controls.existingCustomerId.value == 0) {
      this.alertService.activate('Please check Prospect Customer before you save.', 'Message');
    }
    else {
      let postData = this.leadForm.getRawValue();
      //contact
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
      //product code
      let productCode = ""
      if (postData.productId) {
        let product = this.product.find(p => p.id == postData.productId)
        productCode = product.code;
      }

      let data = {
        "activationDate": "",
        "activationDateStr": postData.activationDate ? this.convertDateFormatDDMMYYY(postData.activationDate) : "",
        "assets": postData.assets ? postData.assets : "",
        "assignTo": this.user.id,
        "campaignName": postData.campaignName ? postData.campaignName : "",
        "campaignNo": postData.campaignNo ? postData.campaignNo : "",
        "channelCode": postData.channelCode ? postData.channelCode : "",
        "closedDate": "",
        "closedDateStr": postData.closedDate ? this.convertDateFormatDDMMYYY(postData.closedDate) : "",
        "companyCode": postData.companyCode ? postData.companyCode : "",
        "contact": postData.contact,
        "contactName": postData.contactName ? postData.contactName : "",
        "customerPlan": "",
        "description": "",
        "districtCode": postData.districtCode ? postData.districtCode : "",
        "dueDate": "",
        "dueDateStr": "",
        "email": postData.email ? postData.email : "",
        "existingInsuranceCoverage": postData.existingInsuranceCoverage ? postData.existingInsuranceCoverage : "",
        "existingInsurancePlan": postData.existingInsurancePlan ? postData.existingInsurancePlan : "",
        "expirationDate": "",
        "expirationDateStr": postData.expirationDate ? this.convertDateFormatDDMMYYY(postData.expirationDate) : "",
        "facebookAcc": postData.facebookAcc ? postData.facebookAcc : "",
        "financialPlan": postData.financialPlan ? postData.financialPlan : "",
        "frc": "",
        "leadId": "",
        "lostReason": "",
        "maritalStatus": postData.maritalStatus ? postData.maritalStatus : null,
        "estimatedMonthlyIncome": postData.estimatedMonthlyIncome ? postData.estimatedMonthlyIncome : "",
        "name": "",
        "identityType": postData.identityType ? postData.identityType : null,
        "identityNumber": postData.identityType == 'NRC' ? postData.nrcNumber : postData.identityType != 'NRC' ? postData.identityNumber : "",
        "nrcRegionCode": postData.identityType == "NRC" ? postData.nrcRegionCode : "",
        "nrcTownshipCode": postData.identityType == "NRC" ? postData.nrcTownshipCode : "",
        "nrcTypeCode": postData.identityType == "NRC" ? postData.nrcTypeCode : "",
        "noOfChildren": "" + (postData.noOfChildren ? postData.noOfChildren : "") + "",
        "occupationCd": postData.occupationCd ? postData.occupationCd : "",
        "openedDate": "",
        "openedDateStr": postData.openedDate ? this.convertDateFormatDDMMYYY(postData.openedDate) : "",
        "operationDate": "",
        "operationDateStr": "",
        "others": "",
        "ownerId": this.user.id,
        "passport": "",
        "phoneNo": postData.phoneNo ? postData.phoneNo : "",
        "productCode": productCode,
        "productId": postData.productId ? postData.productId : "",
        "productName": "",
        "reason": postData.reason ? postData.reason : "",
        "referralCustomerId": postData.referralCustomerId ? postData.referralCustomerId : 0,
        "remark": "",
        "score": postData.score ? postData.score : 0,
        "sourceCode": postData.sourceCode ? postData.sourceCode : "",
        "startDate": "",
        "startDateStr": "",
        "stateCode": postData.stateCode ? postData.stateCode : "",
        "statusCode": "02",
        "subTypeCode": "",
        "subject": postData.subject ? postData.subject : "",
        "townshipCode": postData.townshipCode ? postData.townshipCode : "",
        "typeCode": postData.typeCode ? postData.typeCode : "",
        "validityPeriod": postData.validityPeriod ? postData.validityPeriod : 0,
      }
      if (postData.existingCustomerId) {
        data["existingCustomerId"] = postData.existingCustomerId
      }
      if (postData.prospectCustomerId) {
        data["prospectCustomerId"] = postData.prospectCustomerId
      }
      // console.log("Request to API => Data: ", data)
      this.LeadDetailService.createLead(data).toPromise()
        .then((res: any) => {
          if (res) {
            this.newLeadId = res
            this.leadForm.controls.leadId.setValue(res)
            this.leadForm.controls.statusCode.setValue("02")
            this.alertService.activate('This record was created', 'Success Message').then(result => {
              if (result) {
                this.router.navigate([], {
                  queryParams: {
                    pageStatus: data,
                    pageId: this.newLeadId,
                    leadId: this.newLeadId,
                  },
                });
              }
            });
          }
        });
    }
  }

  toggleAccordion(type) {
    if (type == 'FNA') {
      this.isFNA = !this.isFNA;
      if (this.isFNA) {
        FNAConstant.LEAD_ID = this.oldId;
      }
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
        this.getLeadAttachment()
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
      modalRef.componentInstance.isShowList = 'yes'
      modalRef.result.then(() => { }, (prod) => {
        if (prod) {
          if (prod.type == 'save') {
            let customerId = this.oldData.existingCustomerId ? this.oldData.existingCustomerId : this.oldData.prospectCustomerId
            this.customerService.findOne(customerId).toPromise().then((res) => {

              this.prodctService.creatingCustomer = res
              this.prodctService.createingProd = prod.data
              this.prodctService.creatingLeadId = this.oldId
              this.prodctService.editData = null
              this.prodctService.referenceID = null
              this.prodctService.viewType = 'policy'
              this.prodctService.type = 'policy'
              this.router.navigateByUrl("/product-form")
            })
          }
        }
      })
    }
    if (type == 'Quotation') {
      const modalRef = this.modalService.open(ProductsComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.type = 'modal'
      modalRef.componentInstance.isShowList = 'yes'
      modalRef.result.then(() => { }, (prod) => {
        if (prod) {
          if (prod.type == 'save') {
            let customerId = this.oldData.existingCustomerId ? this.oldData.existingCustomerId : this.oldData.prospectCustomerId
            this.customerService.findOne(customerId).toPromise().then((res) => {
              this.prodctService.creatingCustomer = res
              this.prodctService.createingProd = prod.data
              this.prodctService.creatingLeadId = this.oldId
              this.prodctService.editData = null
              this.prodctService.referenceID = null
              this.prodctService.viewType = 'quotation'
              this.prodctService.type = 'quotation'
              this.router.navigateByUrl("/product-form")
            })

          }
        }
      })
    }
    if (type == 'Activity') {
      let customerId = this.oldData.existingCustomerId ? this.oldData.existingCustomerId : this.oldData.prospectCustomerId
      let customerName = this.oldData.existingCustomerName.trim() ? this.oldData.existingCustomerName.trim() : this.oldData.prospectCustomerName.trim()
      let assignTo = this.oldData.ownerId ? this.oldData.ownerId : 0
      let assignToName = this.oldData.ownerName ? this.oldData.ownerName.trim() : ""

      this.router.navigate(["/activity/activity-management-detail"], { queryParams: { customerId: customerId, name: customerName, leadId: this.oldId, assignTo: assignTo, assignToName: assignToName, isLead: true, pageStatus: 'create' } })

    }

    if (type == 'FNA') {
      this.displayFNAType();
    }

  }

  actionBtn(event, type?) {
    this.fnaService.fnaUpdateProducts = [];
    if (type == 'FNA') {
      if (event.cmd == 'edit') {
        this.createOrEdit(event.data);
      } else {
        this.deleteFNA(event.data.id)
      }
    } else if (type == 'QUO') {
      if (event.cmd == 'edit') {
        this.editQuo(event.data);
      }
      else if (event.cmd == 'view') {
        this.goQuoViewDetail(event.data);
      } else if (event.cmd == 'create') {
        this.createPolicy(event.data);
      }
    } else if (type == 'APP') {
      if (event.cmd == 'edit') {
        this.editApp(event.data);
      }
      else if (event.cmd == 'view') {
        this.goAppViewDetail(event.data);
      }
    } else if (type == 'ATT') {
      if (event.cmd == 'download') {
        this.AttachmentDownloadService.getDownload(event.data.id, event.data.fileName)
      }
      if (event.cmd == 'delete') {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
          if (result) {
            this.LeadAttachmentService.delete(event.data.id).toPromise().then((res) => {
              // if (res) {
              this.getLeadAttachment();
              this.alertService.activate('This record was deleted', 'Success Message').then(result => {

              });
              // }
            })
          }
        });
      }
    }
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

  goQuoViewDetail(item) {
    this.prodctService.findOne(item.productId).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProd = res
        this.prodctService.editData = item
        this.prodctService.previewType = 'quotation'
        this.router.navigateByUrl("/resourse-detail")
      }
    })
  }

  editQuo(item) {
    forkJoin([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProd = res[0]
        this.prodctService.creatingCustomer = res[1]
        this.prodctService.type = 'quotation'
        this.prodctService.viewType = 'quotation'
        this.prodctService.editData = item
        this.prodctService.referenceID = null
        this.prodctService.creatingLeadId = item.leadId
        this.router.navigateByUrl("/product-form")
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

  async addAttachment() {
    let modalRef;
    modalRef = this.modalService.open(CustomInputAlertComponent, { size: 'lg', backdrop: false });
    modalRef.componentInstance.type = 'description'
    modalRef.componentInstance.oldId = this.oldId
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res) {
          this.description = res.description
          this.AttachmentUploadService.save(res.data).toPromise().then((res) => {
            if (res) {
              let postData = {
                attachmentId: res,
                description: this.description,
                refDocNo: this.oldId,
                refDocType: 'LEAD'
              }
              this.LeadAttachmentService.save(postData).toPromise().then((res) => {
                if (res) {
                  this.getLeadAttachment()
                }
              })
            }
          }).catch(e => { })
        }
      }
    })
  }

  async getLeadAttachment() {
    this.LeadAttachmentService.getAttachmentListRef(this.oldId, 'LEAD').toPromise().then((res: any) => {
      if (res) {
        this.attachmentList = res
        this.cdf.detectChanges()
        this.attachmentmatTable.reChangeData()
        this.getOld()
      }
    })
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
            // console.log('BPM ==========> ', res);
            this.router.navigate(["/fna/fna-bram"], {
              queryParams: { passValue: JSON.stringify({ res }) }
            })
          }

          if (res.fnaType == "LPP") {
            // console.log("LPP ==========> ", res);
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

  async getAllFNA() {

    await this.fnaListService.getAll().toPromise().then((res: any) => {
      this.fnaList = [];
      if (res) {
        this.fnaList = res
        for (var i = 0; i < this.fnaList.length; i++) {
          this.fnaList[i].createdAt = this.convertDateFormatMMDDYYY(this.fnaList[i].createdAt);
          this.fnaList[i].conductedBy = this.user.empName;
        }
        this.cdf.detectChanges();
        this.fnamatTable.reChangeData();
      }
    })
  }

  async deleteFNA(id) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(async result => {
      if (result) {
        await this.fnaListService.delete(id).toPromise().then(async (res: any) => {
          this.fnaList = this.fnaList.filter(data =>
            data.id !== id);
          this.alertService.activate('This record was deleted', 'Success Message').then(result => {
          });
          this.cdf.detectChanges();
          this.fnamatTable.reChangeData();
        });
      }
    });

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

}
