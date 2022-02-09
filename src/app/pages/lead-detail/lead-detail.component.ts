import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MasterDataService } from "src/app/modules/master-data/master-data.service";
import { LeadListService } from "../lead-list/lead-list.service";
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
import { CustomerService } from "../customer-detail/customer.service";
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

  // FNAELEMENT_COL = FNAListCol;
  // FNAdisplayedColumns = FNADisplayCol;

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
  // ATTACHMENT_ELEMENT_COL = JSON.parse(JSON.stringify(FNAListCol));

  // AttachmentdisplayedColumns = JSON.parse(JSON.stringify(FNADisplayCol));
  fnaList: any[] = [];
  activityList: any[] = [];
  quatationList: any[] = [];
  applicationList: any[] = [];
  attachmentList: any[] = [];
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
    name: "identityNumber"
  }
  sourceScore: number = 0
  qualityScore: number = 0
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
    "Q10": "campaignNo",
    "Q06": "channelCode",
    "Q03": "phoneNo",
    "Q07": "typeCode",
    "Q12": "stateCode",
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

  constructor(
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
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    console.log('FNAConstant.LEAD_ID', FNAConstant.LEAD_ID)
    this.user = this.authService.currentUserValue;
    this.loadForm();
    this.getState();
    this.getChannel();
    this.getType();
    this.getStatus();
    this.getState();
    this.getSource();
    this.getOccupation();
    this.getCompany()
    this.getProduct()
    this.getLeadQuality()
    // this.getLeadSource()
    // this.getCampaign()

    // this.getmaritialOption();
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

    if (FNAConstant.LEAD_ID) {
      this.oldId = FNAConstant.LEAD_ID;
      this.getOld();
      this.loadForm();
    }

  }

  onInitAddress(oldData) {
    this.getState();
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

  ngAfterViewInit() { }


  getCompany() {
    this.masterDataService.getDataByType("COMPANY_TYPE").toPromise().then((res: any) => {
      console.log("COMPANY_TYPE", res);
      if (res) {
        this.companyOption = res.map((x) => {
          return { code: x.codeId, value: x.codeName };
        });
        console.log(this.companyOption);
        this.cdf.detectChanges();
      }
    });
  }
  getState() {
    this.masterDataService
      .getDataByType("STATE", true)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.stateOption = res.map((x) => {
            return { code: x.codeId, value: x.codeValue };
          });
          console.log(this.stateOption);
          this.cdf.detectChanges();
        }
      });
  }
  getChannel() {
    this.masterDataService
      .getDataByType("LEAD_DISTRIBUTION_CHANNEL")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.channelOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.channelOption);
          this.cdf.detectChanges();
        }
      });
  }
  getType() {
    this.masterDataService
      .getDataByType("LEAD_TYPE")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.typeOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.typeOption);
          this.cdf.detectChanges();
        }
      });
  }
  getStatus() {
    this.masterDataService
      .getDataByType("LEAD_STATUS")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.statusOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.statusOption);
          this.cdf.detectChanges();
        }
      });
  }
  getSource() {
    this.masterDataService
      .getDataByType("LEAD_SOURCE")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.sourceOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.sourceOption);
          this.cdf.detectChanges();
        }
      });
  }

  getOccupation() {
    this.masterDataService
      .getDataByType("OCCUPATION")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.occupationOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.occupationOption);
          this.cdf.detectChanges();
        }
      });

  }
  // getmaritialOption() {
  //   this.masterDataService
  //     .getDataByType("MARITAL_STATUS")
  //     .toPromise()
  //     .then((res: any) => {
  //       console.log(res);
  //       if (res) {
  //         this.maritialOption = res.map((x) => {
  //           return { code: x.codeId, value: x.codeName };
  //         });
  //         console.log(this.maritialOption);
  //         this.cdf.detectChanges();
  //       }
  //     });
  // }

  // getCampaign() {
  //   this.LeadDetailService.getCampaignList().toPromise()
  //     .then((res: any) => {
  //       console.log("getCampaign", res)
  //       if (res) {
  //         this.campaignNameOption = res.map((x) => {
  //           return { code: x.campaiginCode, value: x.name };
  //         });
  //         console.log(this.campaignNameOption);
  //         this.cdf.detectChanges();
  //       }

  //     })
  // }

  getProduct() {
    this.productService
      .getAll()
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.productOption = res.map((x) => {
            return { code: x.id, value: x.name, type: x.type };
          });
          this.cdf.detectChanges();
          this.getProductOption()
          console.log("PRODUCT=>", this.productOption)
        }
      });
  }

  getLeadQuality() {
    this.LeadDetailService.getLeadQuality().toPromise()
      .then((res: any) => {
        console.log("getLeadQuality", res)
        if (res) {
          this.leadQuality = res
        }

      })
  }


  getDistrict(parentId: string) {
    this.masterDataService
      .getAddressDataByType("DISTRICT", parentId)
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
        .getAddressDataByType("TOWNSHIP", parentId)
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
    console.log("getValidityPeriod  product  source", source, product)
    if (source && product) {
      this.LeadDetailService.getValidityPeriod(source, product).toPromise()
        .then((res: any) => {
          console.log("getValidityPeriod", res)
          if (res.period != null) {
            this.leadForm.controls.validityPeriod.setValue(res.period)

          } else {
            this.leadForm.controls.validityPeriod.setValue(0)
          }
        })
    }

  }
  // getLeadSource(){
  //   this.LeadDetailService.getLeadSource().toPromise()
  //   .then((res: any) => {
  //     console.log("getLeadSource", res)
  //     if (res) {
  //       this.sourceOption = res.map((x) => {
  //         return { code: x.sourceCode, value: x.sourceValue, score:x.score };
  //       });
  //       console.log(this.sourceOption);
  //       this.cdf.detectChanges();
  //     }

  //   })
  // }
  actActionBtn(event) {
    if (event.cmd == 'edit') {
      // this.navigateToDetail('edit', event.data.activityNo)
      this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: 'edit', pageId: event.data.activityNo } })
    }
  }
  calculateScore(code) {
    let source = this.sourceOption.find((p) => p.code == code);
    if (source) {
      this.LeadDetailService.getLeadScore(source.code).toPromise().then((res: any) => {
        console.log("Score==>", res)
        // this.leadForm.controls.score.setValue(res)
        this.sourceScore = res
        this.calculateLeadQuality()
        this.getValidityPeriod()
      })

    }


  }

  calculateLeadQuality(type?: string) {
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
    let score = this.sourceScore
    this.leadQuality.forEach(element => {
      let value = this.leadForm.getRawValue()[this.Quality[element.qualityCode]]
      score += value ? element.score : 0
      console.log("score==>", score)
    });
    this.leadForm.controls.score.setValue(score)
  }


  getOld() {
    this.LeadDetailService.findOne(this.oldId)
      .toPromise()
      .then((res) => {
        console.log("RESSS", res);
        if (res) {
          this.oldData = res;
          if (res.existingCustomerId != 0) {
            this.customer = {
              customerId: res.existingCustomerId,
              customerName: res.existingCustomerName,
              customerDob: res.existingCustomerDateOfBirth
            }
          } else {
            this.customer = {
              customerId: res.prospectCustomerId,
              customerName: res.prospectCustomerName,
              customerDob: res.prospectCustomerDateOfBirth,
            }
          }
          this.statusCode = parseInt(this.oldData.statusCode)
          console.log("statusCode", this.statusCode)
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
          this.quatationList = this.oldData.resourceQuotations != null ? this.oldData.resourceQuotations : []
          this.applicationList = this.oldData.resourcePolicies != null ? this.oldData.resourcePolicies : []
          this.attachmentList = this.oldData.attachments != null ? this.oldData.attachments : []
          if (this.activityList.length > 0 || this.quatationList.length > 0 || this.applicationList.length > 0 || this.attachmentList.length > 0 || this.fnaList.length > 0) {
            this.isAddProspect = true
            this.cdf.detectChanges()
          }
          // getDistrictis 
          // getTownship
          this.onInitAddress(this.oldData);
          this.getProductOption()

          if (res.fnas.length) {
            this.fnaList = res.fnas;
            // for (var i = 0; i < this.fnaList.length; i++) {
            //   //this.fnaList[i].createdAt = this.convertDateFormatMMDDYYY(this.fnaList[i].createdAt);
            //  //this.fnaList[i].conductedBy = this.user.username;
            // }
          }
          if (this.applicationList.length > 0) {
            // this.applicationList.find((x)=>x.status=='')
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
      this.location.back()
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
        this.updateStatus(status)
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
    console.log(data);

    this.LeadDetailService.updateLeadStatus(data, this.oldId)
      .toPromise()
      .then((res) => {
        if (res) {
          this.getOld()
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
            console.log('onDidDismiss =====> ', campaign);
            this.leadForm.controls.campaignName.setValue(campaign.cpmName)
            this.leadForm.controls.campaignNo.setValue(campaign.cpmNumber)
            this.calculateLeadQuality()
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

            console.log('onDidDismiss =====> ', customer);
            if (type == "ref") {
              let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
              this.leadForm.controls.referralCustomerName.setValue(name)
              this.leadForm.controls.referralCustomerId.setValue(customer.customerId)

            }
          }
        }
      })
    }
    else if (!this.isExisting && !this.disabledForm) {
      let modalRef;
      modalRef = this.modalService.open(CustomerListComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.isPopup = true
      modalRef.componentInstance.party = type == "prosp" ? false : true
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          if (res.type == "save") {
            let customer = res.data
            console.log('onDidDismiss =====> ', customer);
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
            console.log('onDidDismiss =====> ', customer);
            this.leadForm.controls.existingCustomerName.setValue("")
            this.leadForm.controls.existingCustomerId.setValue("")
            // let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
            this.leadForm.controls.prospectCustomer.setValue(customer.name)
            this.leadForm.controls.prospectCustomerId.setValue(customer.customerId)
            this.isProspectCustomer = true
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
    this.disabledForm = oldData ? oldData.statusCode == '03' ? false : true : false
    this.isExisting = oldData ? oldData.existingCustomerId == 0 ? false : true : false
    console.log("isExisting==>", this.isExisting)
    console.log("disabledForm", this.disabledForm)
    this.leadForm = null
    this.cdf.detectChanges()
    console.log("EXISTING", this.isExisting, "PORSPECT", this.isProspectCustomer)
    this.leadForm = new FormGroup({
      leadId: new FormControl({ value: oldData ? oldData.leadId : '', disabled: true }),
      phoneNo: new FormControl({ value: oldData ? oldData.phoneNo : '', disabled: this.disabledForm }),
      openedDate: new FormControl({ value: oldData ? moment(oldData.openedDate) : '', disabled: true }),
      subject: new FormControl({ value: oldData ? oldData.subject : '', disabled: this.disabledForm }),
      companyCode: new FormControl({ value: oldData ? oldData.companyCode : '', disabled: true }),
      // contact: new FormControl(oldData ? oldData.contact : ""),
      sms: new FormControl({ value: oldData ? (oldData.contact + "").includes('sms') : false, disabled: this.disabledForm }),
      pemail: new FormControl({ value: oldData ? (oldData.contact + "").includes('email') : false, disabled: this.disabledForm }),
      phone: new FormControl({ value: oldData ? (oldData.contact + "").includes('phone') : false, disabled: this.disabledForm }),
      contactName: new FormControl({ value: oldData ? oldData.contactName : '', disabled: this.disabledForm }),
      activationDate: new FormControl({ value: oldData ? moment(oldData.activationDate) : '', disabled: true }),
      channelCode: new FormControl({ value: oldData ? oldData.channelCode : '', disabled: true }),
      occupationCode: new FormControl({ value: oldData ? oldData.occupationCode : '', disabled: this.disabledForm }),
      closedDate: new FormControl({ value: oldData ? moment(oldData.closedDate) : '', disabled: this.disabledForm }),
      typeCode: new FormControl({ value: oldData ? oldData.typeCode : '', disabled: true }),
      stateCode: new FormControl({ value: oldData ? oldData.stateCode : '', disabled: this.disabledForm }),
      expirationDate: new FormControl({ value: oldData ? moment(oldData.expirationDate) : '', disabled: this.disabledForm }),
      statusCode: new FormControl({ value: oldData ? oldData.statusCode : '', disabled: true }),
      // oldData ? oldData.statusCode : ''
      districtCode: new FormControl({ value: oldData ? oldData.districtCode : '', disabled: this.disabledForm }),
      validityPeriod: new FormControl({ value: oldData ? oldData.validityPeriod : '', disabled: true }),
      reason: new FormControl({ value: oldData ? oldData.reason : '', disabled: true }),
      townshipCode: new FormControl({ value: oldData ? oldData.townshipCode : '', disabled: this.disabledForm }),
      assignTo: new FormControl({ value: oldData ? oldData.ownerId : '', disabled: this.disabledForm }),
      assignToName: new FormControl({ value: oldData ? oldData.ownerName : '', disabled: this.disabledForm }),
      productId: new FormControl({ value: oldData ? oldData.productId : '', disabled: true }),
      email: new FormControl({ value: oldData ? oldData.email : '', disabled: this.disabledForm }),
      campaignName: new FormControl({ value: oldData ? oldData.campaignName : '', disabled: this.disabledForm }),
      identityType: new FormControl({ value: oldData ? oldData.identityType : '', disabled: true }),
      sourceCode: new FormControl({ value: oldData ? oldData.sourceCode : '', disabled: this.disabledForm }),
      campaignNo: new FormControl({ value: oldData ? oldData.campaignNo : '', disabled: this.disabledForm }),
      identityNumber: new FormControl({ value: oldData ? oldData.identityNumber : '', disabled: true }),
      existingCustomerName: new FormControl(
        { value: oldData ? oldData.existingCustomerName.trim() : "", disabled: true }
      ),
      existingCustomerId: new FormControl(
        { value: oldData ? oldData.existingCustomerId : "", disabled: true }
      ),
      referralCustomerName: new FormControl(
        { value: oldData ? oldData.referralCustomerName.trim() : "", disabled: this.disabledForm }
      ),
      referralCustomerId: new FormControl(
        { value: oldData ? oldData.referralCustomerId : "", disabled: this.disabledForm }
      ),
      monthlyIncome: new FormControl({ value: oldData ? oldData.monthlyIncome : '', disabled: this.disabledForm }),
      facebookAcc: new FormControl({ value: oldData ? oldData.facebookAcc : '', disabled: this.disabledForm }),
      maritalStatus: new FormControl({ value: oldData ? oldData.maritalStatus : '', disabled: this.disabledForm }),
      financialPlan: new FormControl({ value: oldData ? oldData.financialPlan : '', disabled: this.disabledForm }),
      numberOfChildren: new FormControl(
        { value: oldData ? oldData.numberOfChildren : '', disabled: this.disabledForm }
      ),
      existingInsuranceCoverage: new FormControl(
        { value: oldData ? oldData.existingInsuranceCoverage : '', disabled: this.disabledForm }
      ),
      existingInsurancePlan: new FormControl(
        { value: oldData ? oldData.existingInsurancePlan : '', disabled: this.disabledForm }
      ),
      score: new FormControl({ value: oldData ? oldData.score : '', disabled: this.disabledForm }),
      asset: new FormControl({ value: oldData ? oldData.asset : '', disabled: this.disabledForm }),
      prospectCustomer: new FormControl(
        { value: oldData ? oldData.prospectCustomerName.trim() : "", disabled: this.disabledForm }
      ),
      prospectCustomerId: new FormControl(
        { value: oldData ? oldData.prospectCustomerId : "", disabled: this.disabledForm }
      ),
      lostReason: new FormControl({ value: oldData ? oldData.lostReason : '', disabled: true }),
    });
    console.log("FORM", this.leadForm)
    this.cdf.detectChanges()

    if (this.oldData)
      this.calculateScore(this.oldData.sourceCode)

  }

  backLocation() {
    this.loadForm(this.oldData);
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
          this.getOld()
          // this.location.back();
        }
      });
  }
  toggleAccordion(type) {

    if (type == 'FNA') {
      this.isFNA = !this.isFNA;
      console.log('this.isFNA', this.isFNA);
      if (this.isFNA) {
        //this.getAllFNA();
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
      modalRef.result.then(() => { }, (prod) => {
        if (prod) {
          if (prod.type == 'save') {
            let customerId = this.oldData.existingCustomerId ? this.oldData.existingCustomerId : this.oldData.prospectCustomerId
            this.customerService.findOne(customerId).toPromise().then((res) => {
              console.log(res);

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
    console.log('actionBtn', event);
    console.log('actionBtn type', type);
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
      }
      else if (event.cmd == 'view') {
        this.goQuoViewDetail(event.data);
      }
    } else if (type == 'APP') {
      if (event.cmd == 'edit') {
        this.editApp(event.data);
      } else if (event.cmd == 'create') {
        this.createPolicy(event.data);
      }
    } else if (type == 'ATT') {
      if (event.cmd == 'download') {
        this.AttachmentDownloadService.getDownload(event.data.id, event.data.fileName)
      }
      if (event.cmd == 'delete') {
        this.LeadAttachmentService.delete(event.data.id).toPromise().then((res) => {

        })
      }
    }
  }
  
  createPolicy(item) {
    this.prodctService.findOne(item.productId).toPromise().then((res) => {
      if (res) {
        this.prodctService.createingProdRef = res
        this.prodctService.viewType = 'policy'
        this.prodctService.type = 'policy'
        this.prodctService.referenceID = item.id
        this.prodctService.editData = null
        this.prodctService.creatingLeadId = item.leadId
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
  // async actionBtn(event) {
  //   // console.log('actionBtn', event)
  //   this.fnaService.fnaUpdateProducts = [];
  //   if (event.cmd == 'edit') {
  //     this.indexObj = event.data;
  //     this.createOrEdit('edit', event.data.id)
  //   } else {
  //     this.indexObj = null;
  //     await this.delete(event.data.id)
  //   }
  // }

  async addAttachment() {
    let modalRef;
    modalRef = this.modalService.open(CustomInputAlertComponent, { size: 'lg', backdrop: false });
    modalRef.componentInstance.type = 'description'
    modalRef.componentInstance.oldId = this.oldId
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        console.log("RESSS", res)
        this.description = res.description

        this.AttachmentUploadService.save(res.data).toPromise().then((res) => {
          if (res) {
            console.log("RESFILE", res)
            let postData = {
              attachmentId: res,
              description: this.description,
              refDocNo: this.oldId,
              refDocType: 'LEAD'
            }
            this.LeadAttachmentService.save(postData).toPromise().then((res) => {
              if (res) {
                console.log("RESFILE", res)
                // this.getLeadAttachment()
                this.getOld()
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

  async getLeadAttachment() {
    this.LeadAttachmentService.getAttachmentListRef(this.oldId, 'LEAD').toPromise().then((res: any) => {
      if (res) {
        console.log("RESFILE", res)
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
    console.log("TYPE=>", type, array)
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


  // async actionBtn(event) {
  //   // console.log('actionBtn', event)
  //   this.fnaService.fnaUpdateProducts = [];
  //   if (event.cmd == 'edit') {
  //     this.indexObj = event.data;
  //     this.createOrEdit('edit', event.data.id)
  //   } else {
  //     this.indexObj = null;
  //     await this.delete(event.data.id)
  //   }
  // }

  displayFNAType() {
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
          if (res.fnaType == "BRAM") {
            console.log('BRAM ==========> ', res);
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
    console.log('customer', this.customer);
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
        fnaId: data.id,
        type: data.type,
        pageStatus: 'edit'
      }
      if (this.oldId != null && this.oldId != '' && this.oldId != undefined &&
        this.customer.customerId != null && this.customer.customerId != '') {
        if (data.fnaType == 'LPP') {
          this.router.navigate(["/fna/fna-detail"], {
            queryParams: { passValue: JSON.stringify(passValue) },
            skipLocationChange: true, replaceUrl: true
          })
        } else {
          passValue.grandDiscount = data.grandDiscount
          passValue.highDiscount = data.highDiscount
          FNABRAMDiscount.GRAND_DISCOUNT = 0;
          FNABRAMDiscount.HIGH_DISCOUNT = 0;
          this.router.navigate(["/fna/fna-bram"], {
            queryParams: { passValue: JSON.stringify(passValue) },
            skipLocationChange: true, replaceUrl: true
          })
        }
      }
    }
  }

  async getAllFNA() {
    console.log('getAllFNA', this.oldId);

    await this.fnaListService.getAll().toPromise().then((res: any) => {
      console.log('getAllFNA', res);
      this.fnaList = [];
      if (res) {
        this.fnaList = res
        for (var i = 0; i < this.fnaList.length; i++) {
          this.fnaList[i].createdAt = this.convertDateFormatMMDDYYY(this.fnaList[i].createdAt);
          this.fnaList[i].conductedBy = this.user.username;
        }
        this.cdf.detectChanges();
        this.fnamatTable.reChangeData();
      }
    })
  }

  async deleteFNA(id) {
    await this.fnaListService.delete(id).toPromise().then(async (res: any) => {
      this.fnaList = this.fnaList.filter(data =>
        data.id !== id);
      this.alertService.activate('This record was deleted', 'Success Message').then(result => {
        // this.fnaList = [];
        // this.getAllFNA();
      });
      this.cdf.detectChanges();
      this.fnamatTable.reChangeData();
    });
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
