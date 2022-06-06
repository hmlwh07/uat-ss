"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_lead-detail_lead-detail_module_ts"],{

/***/ 71865:
/*!****************************************************************************!*\
  !*** ./src/app/pages/lead-detail/campaign-list/campaign-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignListComponent": () => (/* binding */ CampaignListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _campaign_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-list.component.html?ngResource */ 37562);
/* harmony import */ var _campaign_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-list.component.scss?ngResource */ 63333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _FNA_list_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FNA-list.const */ 3777);
/* harmony import */ var _lead_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lead-detail.service */ 64190);









let CampaignListComponent = class CampaignListComponent {
    constructor(LeadDetailService, cdf, modalService) {
        this.LeadDetailService = LeadDetailService;
        this.cdf = cdf;
        this.modalService = modalService;
        this.campaignList = [];
        this.isPopup = false;
        this.selectedCampaign = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_FNA_list_const__WEBPACK_IMPORTED_MODULE_3__.CampaignCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_FNA_list_const__WEBPACK_IMPORTED_MODULE_3__.CampaignDisplayCol));
    }
    ngOnInit() {
        this.loadForm();
        this.getList();
    }
    getList() {
        this.LeadDetailService.getCampaignList(this.campaignForm.value).toPromise().then((res) => {
            if (res) {
                this.campaignList = res;
                this.cdf.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    cancel() {
        this.modalService.dismissAll();
    }
    loadForm() {
        this.campaignForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            "cpmNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null),
            "cpmName": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null),
        });
    }
    rowSelected(event) {
        this.selectedCampaign.emit(event);
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    nextProd() {
        if (this.selected.cpmNumber) {
            this.modalService.dismissAll({ data: this.selected, type: "save" });
        }
    }
    get selected() {
        let campaign;
        if (this.matTable) {
            campaign = this.matTable.selection.selected[0];
        }
        return campaign ? campaign : { cpmNumber: 0 };
    }
    //for view
    isControlValid(controlName) {
        const control = this.campaignForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.campaignForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.campaignForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
};
CampaignListComponent.ctorParameters = () => [
    { type: _lead_detail_service__WEBPACK_IMPORTED_MODULE_4__.LeadDetailService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal }
];
CampaignListComponent.propDecorators = {
    isPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    selectedCampaign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }]
};
CampaignListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-campaign-list',
        template: _campaign_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_campaign_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CampaignListComponent);



/***/ }),

/***/ 98908:
/*!************************************************************!*\
  !*** ./src/app/pages/lead-detail/lead-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadDetailComponent": () => (/* binding */ LeadDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lead_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lead-detail.component.html?ngResource */ 20275);
/* harmony import */ var _lead_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lead-detail.component.scss?ngResource */ 17256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/master-data/master-data.service */ 27670);
/* harmony import */ var _lead_list_lead_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lead-list/lead-list.service */ 55849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _lead_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lead-detail.service */ 64190);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-list/customer-list.const */ 86270);
/* harmony import */ var _form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-component/nrc-popup/nrc-popup.page */ 42675);
/* harmony import */ var _form_component_custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-component/custom-input-alert/custom-input-alert.component */ 52921);
/* harmony import */ var _FNA_list_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FNA-list.const */ 3777);
/* harmony import */ var _activity_management_list_activity_manage_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../activity-management-list/activity-manage.const */ 12591);
/* harmony import */ var _policy_list_policy_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../policy/list/policy.const */ 39641);
/* harmony import */ var _quotations_list_quotation_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../quotations/list/quotation.const */ 16537);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customer-list/customer-list.component */ 17585);
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../customer-detail/customer-detail.component */ 63712);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../products/products.component */ 97539);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../products/services/products-data.service */ 78680);
/* harmony import */ var _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../customer-detail/customer.service */ 56581);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 56289);
/* harmony import */ var _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./campaign-list/campaign-list.component */ 71865);
/* harmony import */ var _fna_list_fna_type_fna_type_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../fna-list/fna-type/fna-type.component */ 76285);
/* harmony import */ var _fna_list_fna_list_manage_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../fna-list/fna-list-manage.service */ 19219);
/* harmony import */ var _app_modules_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../app/modules/auth */ 90089);
/* harmony import */ var _fna_detail_fna_manage_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../fna-detail/fna-manage.service */ 93882);
/* harmony import */ var _app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _fna_bram_product_product_dto__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../fna-bram/product/product.dto */ 41318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _fna_detail_income_income_manage_dto__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../fna-detail/income/income-manage.dto */ 84015);
/* harmony import */ var _fna_detail_retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../fna-detail/retirement/retirement-manage.dto */ 54681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../core/menu-data.service */ 17606);









































let LeadDetailComponent = class LeadDetailComponent {
    constructor(fb, location, masterDataService, route, LeadDetailService, cdf, LeadListService, modalService, router, prodctService, customerService, productService, AttachmentUploadService, LeadAttachmentService, AttachmentDownloadService, fnaListService, authService, fnaService, alertService, ngZone, menuService) {
        this.fb = fb;
        this.location = location;
        this.masterDataService = masterDataService;
        this.route = route;
        this.LeadDetailService = LeadDetailService;
        this.cdf = cdf;
        this.LeadListService = LeadListService;
        this.modalService = modalService;
        this.router = router;
        this.prodctService = prodctService;
        this.customerService = customerService;
        this.productService = productService;
        this.AttachmentUploadService = AttachmentUploadService;
        this.LeadAttachmentService = LeadAttachmentService;
        this.AttachmentDownloadService = AttachmentDownloadService;
        this.fnaListService = fnaListService;
        this.authService = authService;
        this.fnaService = fnaService;
        this.alertService = alertService;
        this.ngZone = ngZone;
        this.menuService = menuService;
        // FNAELEMENT_COL = FNAListCol;
        // FNAdisplayedColumns = FNADisplayCol;
        this.FNAELEMENT_COL = JSON.parse(JSON.stringify(_FNA_list_const__WEBPACK_IMPORTED_MODULE_8__.FNACol));
        this.FNAdisplayedColumns = JSON.parse(JSON.stringify(_FNA_list_const__WEBPACK_IMPORTED_MODULE_8__.FNADisplayCol));
        this.ACTIVITY_ELEMENT_COL = JSON.parse(JSON.stringify(_activity_management_list_activity_manage_const__WEBPACK_IMPORTED_MODULE_9__.ActivityCol));
        this.ACTIVITYdisplayedColumns = JSON.parse(JSON.stringify(_activity_management_list_activity_manage_const__WEBPACK_IMPORTED_MODULE_9__.ActivityDisplayCol));
        this.QUOTATION_ELEMENT_COL = JSON.parse(JSON.stringify(_quotations_list_quotation_const__WEBPACK_IMPORTED_MODULE_11__.QuotationCol));
        this.QuotationdisplayedColumns = JSON.parse(JSON.stringify(_quotations_list_quotation_const__WEBPACK_IMPORTED_MODULE_11__.QuoDisplayCol));
        this.APPLICATION_ELEMENT_COL = JSON.parse(JSON.stringify(_policy_list_policy_const__WEBPACK_IMPORTED_MODULE_10__.PolicyCol));
        this.ApplicationdisplayedColumns = JSON.parse(JSON.stringify(_policy_list_policy_const__WEBPACK_IMPORTED_MODULE_10__.PolicyDisplayCol));
        this.ATTACHMENT_ELEMENT_COL = JSON.parse(JSON.stringify(_FNA_list_const__WEBPACK_IMPORTED_MODULE_8__.AttachmentCol));
        this.AttachmentdisplayedColumns = JSON.parse(JSON.stringify(_FNA_list_const__WEBPACK_IMPORTED_MODULE_8__.AttachmentDisplayCol));
        // ATTACHMENT_ELEMENT_COL = JSON.parse(JSON.stringify(FNAListCol));
        // AttachmentdisplayedColumns = JSON.parse(JSON.stringify(FNADisplayCol));
        this.fnaList = [];
        this.activityList = [];
        this.quatationList = [];
        this.applicationList = [];
        this.attachmentList = [];
        this.isPopup = false;
        this.disabled = true;
        this.description = "";
        this.channelOption = [];
        this.typeOption = [];
        this.stateOption = [];
        this.statusOption = [];
        this.distinctOption = [];
        this.townshipOption = [];
        this.assignToOption = [];
        this.productOption = [];
        this.productOption2 = [];
        this.campaignNameOption = [];
        this.companyOption = [];
        this.sourceOption = [];
        this.existingOption = [];
        this.martialOption = [];
        this.occupationOption = [];
        this.isExisting = false;
        this.isProspectCustomer = false;
        this.isAddProspect = false;
        this.disabledForm = false;
        this.statusCode = 0;
        this.maritialOption = [
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
        ];
        this.identityTypeOption = _customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_5__.IdentityType;
        this.reason = "";
        this.status = "";
        this.config = {
            type: "user",
            name: "identityNumber"
        };
        this.sourceScore = 0;
        this.qualityScore = 0;
        this.score = 0;
        this.isFNA = false;
        this.isApplication = false;
        this.isAttachment = false;
        this.isQuotation = false;
        this.isActivity = false;
        this.isMenuOpen = false;
        this.isMore = false;
        this.isDetail = true;
        this.isValidWin = false;
        this.leadQuality = [];
        this.Quality = {
            "Q10": "campaignName",
            "Q06": "channelCode",
            "Q03": "phoneNo",
            "Q07": "typeCode",
            "Q04": "stateCode",
            "Q13": "districtCode",
            "Q05": "townshipCode",
            "Q08": "productId",
        };
        this.leadType = {
            "01": "GENERAL",
            "02": "LIFE"
        };
        this.user = new _app_modules_auth__WEBPACK_IMPORTED_MODULE_23__.UserModel();
        this.leadAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_29__.defaultAccessObj;
        this.activityAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_29__.defaultAccessObj;
        this.policyAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_29__.defaultAccessObj;
        this.quoAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_29__.defaultAccessObj;
        this.attachAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_29__.defaultAccessObj;
        this.fnaAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_29__.defaultAccessObj;
    }
    ngOnInit() {
        this.checkPremission();
        this.loadForm();
        this.route.queryParams.subscribe((params) => {
            if (params) {
                this.pageStatus = params.pageStatus;
                if (this.pageStatus != "create") {
                    // console.log("<==========>", params);
                    this.oldId = params.leadId;
                    this.oldSecondaryId = params.pageSecondaryId;
                    this.getOld();
                }
                else {
                    this.loadForm();
                }
            }
            else {
                this.location.back();
            }
        });
    }
    checkPremission() {
        this.menuService.dataAccess.subscribe((res) => {
            if (res) {
                this.leadAccess = res['leads'];
                this.activityAccess = res['activity'];
                this.policyAccess = res['application'];
                this.quoAccess = res['quotation'];
                this.fnaAccess = res['fna'];
                if (!this.fnaAccess.delete) {
                    this.FNAELEMENT_COL[3].btn.delete = false;
                }
                if (!this.quoAccess.edit) {
                    this.QUOTATION_ELEMENT_COL[8].btn.edit = false;
                }
                if (!this.policyAccess.edit) {
                    this.APPLICATION_ELEMENT_COL[8].btn.edit = false;
                }
                // this.attachAccess= 
                if (!this.leadAccess.view) {
                    this.location.back();
                }
                this.cdf.detectChanges();
            }
        });
    }
    ngAfterViewInit() {
        this.user = this.authService.currentUserValue;
        this.getMaster();
        this.getProduct();
        // this.getLeadQuality()
        // if (FNAConstant.LEAD_ID) {
        //   this.oldId = FNAConstant.LEAD_ID;
        //   this.getOld();
        //   this.loadForm();
        // }
    }
    getMaster() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.forkJoin)([
            this.getChannel(),
            this.getType(),
            this.getOccupation(),
            this.getStatus(),
            this.getState(),
            this.getSource(),
            this.getCompany(),
        ]).toPromise().then((res) => {
            if (res) {
                this.channelOption = res[0];
                this.typeOption = res[1];
                this.occupationOption = res[2];
                this.statusOption = res[3];
                this.stateOption = res[4];
                this.sourceOption = res[5];
                this.companyOption = res[6];
                this.cdf.detectChanges();
            }
        });
    }
    onInitAddress(oldData) {
        // this.getState();
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
        }
        else {
            this.getTownship(this.leadForm.controls["districtCode"].value);
        }
        this.cdf.detectChanges();
    }
    ngOnDestroy() {
        this.score = 0;
        this.sourceScore = 0;
    }
    getCompany() {
        return this.masterDataService.getDataByType("COMPANY_TYPE").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(x => this.getFormatOpt(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)([]);
        }));
        // .toPromise().then((res: any) => {
        //   console.log("COMPANY_TYPE", res);
        //   if (res) {
        //     this.companyOption = res.map((x) => {
        //       return { code: x.codeId, value: x.codeName };
        //     });
        //     console.log(this.companyOption);
        //     this.cdf.detectChanges();
        //   }
        // });
    }
    getState() {
        return this.masterDataService
            .getDataByType("PT_STATE", true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(x => this.getFormatOpt(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)([]);
        }));
        // .toPromise()
        // .then((res: any) => {
        //   console.log(res);
        //   if (res) {
        //     this.stateOption = res.map((x) => {
        //       return { code: x.codeId, value: x.codeValue };
        //     });
        //     console.log(this.stateOption);
        //     this.cdf.detectChanges();
        //   }
        // });
    }
    getChannel() {
        return this.masterDataService
            .getDataByType("LEAD_DISTRIBUTION_CHANNEL").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(x => this.getFormatOpt(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)([]);
        }));
        // .toPromise()
        // .then((res: any) => {
        //   console.log(res);
        //   if (res) {
        //     this.channelOption = res.map((x) => {
        //       return { code: x.codeId, value: x.codeName };
        //     });
        //     console.log(this.channelOption);
        //     this.cdf.detectChanges();
        //   }
        // });
    }
    getType() {
        return this.masterDataService
            .getDataByType("LEAD_TYPE").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(x => this.getFormatOpt(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)([]);
        }));
        // .toPromise()
        // .then((res: any) => {
        //   console.log(res);
        //   if (res) {
        //     this.typeOption = res.map((x) => {
        //       return { code: x.codeId, value: x.codeName };
        //     });
        //     console.log(this.typeOption);
        //     this.cdf.detectChanges();
        //   }
        // });
    }
    getStatus() {
        return this.masterDataService
            .getDataByType("LEAD_STATUS").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(x => this.getFormatOpt(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)([]);
        }));
        // .toPromise()
        // .then((res: any) => {
        //   console.log(res);
        //   if (res) {
        //     this.statusOption = res.map((x) => {
        //       return { code: x.codeId, value: x.codeName };
        //     });
        //     console.log(this.statusOption);
        //     this.cdf.detectChanges();
        //   }
        // });
    }
    getSource() {
        return this.masterDataService
            .getDataByType("LEAD_SOURCE").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(x => this.getFormatOpt(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)([]);
        }));
        // .toPromise()
        // .then((res: any) => {
        //   console.log(res);
        //   if (res) {
        //     this.sourceOption = res.map((x) => {
        //       return { code: x.codeId, value: x.codeName };
        //     });
        //     console.log(this.sourceOption);
        //     this.cdf.detectChanges();
        //   }
        // });
    }
    getOccupation() {
        return this.masterDataService
            .getDataByType("OCCUPATION").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(x => this.getFormatOpt(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)([]);
        }));
        // .toPromise()
        // .then((res: any) => {
        //   console.log(res);
        //   if (res) {
        //     this.occupationOption = res.map((x) => {
        //       return { code: x.codeId, value: x.codeName };
        //     });
        //     console.log(this.occupationOption);
        //     this.cdf.detectChanges();
        //   }
        // });
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
            .getAll('all')
            .toPromise()
            .then((res) => {
            if (res) {
                this.productOption = res.map((x) => {
                    return { code: x.id, value: x.name, type: x.type };
                });
                this.cdf.detectChanges();
                this.getProductOption();
            }
        });
    }
    getLeadQuality() {
        let channel = this.leadForm.getRawValue().channelCode;
        if (channel) {
            this.LeadDetailService.getLeadQuality(channel)
                .toPromise()
                .then((res) => {
                if (res) {
                    this.leadQuality = res;
                    console.log("test3");
                    this.calculateLeadQuality();
                    this.getValidityPeriod();
                }
            });
        }
    }
    getDistrict(parentId) {
        this.masterDataService
            .getAddressDataByType("PT_DISTRICT", parentId)
            .toPromise()
            .then((res) => {
            if (res) {
                this.distinctOption = res.map((x) => {
                    return { code: x.codeId, value: x.codeValue };
                });
                this.cdf.detectChanges();
            }
        });
    }
    getTownship(parentId) {
        if (parentId) {
            this.masterDataService
                .getAddressDataByType("PT_TOWNSHIP", parentId)
                .toPromise()
                .then((res) => {
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
        let source = this.leadForm.getRawValue().sourceCode;
        let product = this.leadForm.getRawValue().productId;
        if (source && product) {
            this.LeadDetailService.getValidityPeriod(source, product).toPromise()
                .then((res) => {
                if (res.period != null) {
                    this.leadForm.controls.validityPeriod.setValue(res.period);
                }
                else {
                    this.leadForm.controls.validityPeriod.setValue(0);
                }
            });
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
            this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: 'edit', pageId: event.data.activityNo } });
        }
    }
    calculateScore(code, data) {
        let sourceCode;
        if (data) {
            sourceCode = data;
        }
        else {
            let source = this.sourceOption.find((p) => p.code == code);
            sourceCode = source.code;
        }
        let channel = this.leadForm.getRawValue().channelCode;
        if (sourceCode && channel) {
            this.LeadDetailService.getLeadScore(sourceCode, channel).toPromise().then((res) => {
                // this.leadForm.controls.score.setValue(res)
                this.sourceScore = res;
                console.log("test1", this.score);
                this.calculateLeadQuality();
                this.getValidityPeriod();
            });
        }
    }
    calculateLeadQuality(type) {
        this.score = 0;
        console.log("Test");
        if (type == "typeCode") {
            this.getProductOption();
        }
        if (type == "product") {
            this.getValidityPeriod();
        }
        if (type == "state") {
            this.onChangeState();
        }
        if (type == "district") {
            this.onChangeDistrict();
        }
        console.log('LOEADQuALITY', this.leadQuality);
        this.leadQuality.forEach(element => {
            let ele = element.qualityValue.toLowerCase();
            if (ele == 'type' || ele == 'township' || ele == 'channel' || ele == 'district' || ele == 'state') {
                element.qualityValue = ele + "Code";
            }
            else if (ele == 'product') {
                element.qualityValue = ele + "Id";
            }
            else if (ele == 'phone no.') {
                element.qualityValue = 'phoneNo';
            }
            else if (ele == 'campaign name') {
                element.qualityValue = 'campaignName';
            }
            else {
                element.qualityValue = element.qualityValue;
            }
            console.log('element', element);
            let value = this.leadForm.getRawValue()[this.Quality[element.qualityCode]];
            this.score += value ? element.score : 0;
            console.log("this.score", this.score);
        });
        if (this.sourceScore != 0) {
            this.score += this.sourceScore;
        }
        console.log('score', this.score);
        this.leadForm.controls.score.setValue(this.score);
    }
    getOld() {
        this.LeadDetailService.findOne(this.oldId)
            .toPromise()
            .then((res) => {
            // console.log('lead detail =====> ', res);
            if (res) {
                this.oldData = res;
                if (res.existingCustomerId != 0) {
                    this.customer = {
                        customerId: res.existingCustomerId,
                        customerName: res.existingCustomerName,
                        customerDob: res.existingCustomerDateOfBirth
                    };
                }
                else {
                    this.customer = {
                        customerId: res.prospectCustomerId,
                        customerName: res.prospectCustomerName,
                        customerDob: res.prospectCustomerDateOfBirth,
                    };
                }
                this.statusCode = parseInt(this.oldData.statusCode);
                if (this.oldData) {
                    if (this.oldData.prospectCustomerId == 0) {
                        this.isProspectCustomer = false;
                    }
                    else {
                        this.isProspectCustomer = true;
                    }
                }
                this.loadForm(res);
                this.fnaList = this.oldData.fnas != null ? this.oldData.fnas : [];
                this.activityList = this.oldData.activities != null ? this.oldData.activities : [];
                this.quatationList = this.oldData.resourceQuotations != null ? this.oldData.resourceQuotations : [];
                // this.oldData.resourcePolicies[0].apiStatus='draft_application'
                this.applicationList = this.oldData.resourcePolicies != null ? this.oldData.resourcePolicies : [];
                this.attachmentList = this.oldData.attachments != null ? this.oldData.attachments : [];
                if (this.activityList.length > 0 || this.quatationList.length > 0 || this.applicationList.length > 0 || this.attachmentList.length > 0 || this.fnaList.length > 0) {
                    this.isAddProspect = true;
                    this.cdf.detectChanges();
                }
                // getDistrictis 
                // getTownship
                this.onInitAddress(this.oldData);
                this.getProductOption();
                if (res.fnas.length) {
                    this.fnaList = res.fnas;
                    // for (var i = 0; i < this.fnaList.length; i++) {
                    //   //this.fnaList[i].createdAt = this.convertDateFormatMMDDYYY(this.fnaList[i].createdAt);
                    //  //this.fnaList[i].conductedBy = this.user.username;
                    // }
                }
                if (this.applicationList.length > 0) {
                    // this.applicationList.find((x)=>x.status=='')
                    this.isValidWin = true;
                }
                this.cdf.detectChanges();
                if (this.statusCode > 2) {
                    this.activitymatTable.reChangeData();
                    this.fnamatTable.reChangeData();
                    this.attachmentmatTable.reChangeData();
                    this.quotationmatTable.reChangeData();
                    this.applicationmatTable.reChangeData();
                }
            }
        });
    }
    updateLeadStatus(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__awaiter)(this, void 0, void 0, function* () {
            if (status == "save") {
                this.createLead();
            }
            else if (status == "cancel") {
                this.ngZone.run(() => {
                    this.location.back();
                });
            }
            else {
                if (status == "04" || status == "06") {
                    let modalRef;
                    modalRef = this.modalService.open(_form_component_custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_7__.CustomInputAlertComponent, { size: 'md', backdrop: false });
                    modalRef.componentInstance.type = 'reason';
                    modalRef.componentInstance.status = status;
                    modalRef.result.then(() => { }, (data) => {
                        if (data) {
                            // this.leadForm.controls.lostReason.setValue(data)
                            this.updateStatus(status, data);
                        }
                    });
                }
                else {
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
                            };
                            this.LeadDetailService.checkLead(data).toPromise().then((res) => {
                                if (res) {
                                    this.alertService.activate('You must reject to this opportunity.', 'Warning Message').then(result => {
                                    });
                                }
                                else {
                                    this.updateStatus(status);
                                    this.alertService.activate('This record was approved', 'Success Message').then(result => {
                                    });
                                }
                            });
                        }
                    });
                }
            }
            if (this.prospCustomer) {
                this.customer.customerId = this.prospCustomer.customerId;
                this.customer.customerName = this.prospCustomer.customerName;
                this.customer.customerDob = this.prospCustomer.customerDob;
            }
            if (this.existingCustomer) {
                this.customer.customerId = this.existingCustomer.customerId;
                this.customer.customerName = this.existingCustomer.customerName;
                this.customer.customerDob = this.existingCustomer.customerDob;
            }
        });
    }
    updateStatus(status, reason) {
        let postData = {
            leadId: this.oldId,
            statusCode: status,
            reason: reason || ""
        };
        let data = Object.assign(Object.assign({}, postData), { leadId: this.oldId });
        this.LeadDetailService.updateLeadStatus(data, this.oldId)
            .toPromise()
            .then((res) => {
            if (res) {
                this.getOld();
            }
        });
    }
    viewCampaignList() {
        if (!this.disabledForm) {
            let modalRef;
            modalRef = this.modalService.open(_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_20__.CampaignListComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.isPopup = true;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == "save") {
                        let campaign = res.data;
                        this.leadForm.controls.campaignName.setValue(campaign.cpmName);
                        this.leadForm.controls.campaignNo.setValue(campaign.cpmNumber);
                        this.calculateLeadQuality();
                        console.log("test2");
                    }
                }
            });
        }
    }
    viewExistingCustomer(type) {
        if (type == 'ref' && !this.disabledForm) {
            let modalRef;
            modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_12__.CustomerListComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.isPopup = true;
            modalRef.componentInstance.party = true;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == "save") {
                        let customer = res.data;
                        if (type == "ref") {
                            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                            this.leadForm.controls.referralCustomerName.setValue(name);
                            this.leadForm.controls.referralCustomerId.setValue(customer.customerId);
                        }
                    }
                }
            });
        }
        else if (!this.isExisting && !this.disabledForm && !this.isAddProspect) {
            let modalRef;
            modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_12__.CustomerListComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.isPopup = true;
            modalRef.componentInstance.party = type == "prosp" ? false : true;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == "save") {
                        let customer = res.data;
                        if (type == "ref") {
                            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                            this.leadForm.controls.referralCustomerName.setValue(name);
                            this.leadForm.controls.referralCustomerId.setValue(customer.customerId);
                        }
                        else if (type == "prosp") {
                            this.leadForm.controls.existingCustomerName.setValue("");
                            this.leadForm.controls.existingCustomerId.setValue("");
                            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                            this.leadForm.controls.prospectCustomer.setValue(name);
                            this.leadForm.controls.prospectCustomerId.setValue(customer.customerId);
                            this.prospCustomer = {
                                customerId: customer.customerId,
                                customerName: customer.firstName + ' ' + customer.middleName + ' ' + customer.lastName,
                                customerDob: customer.dateOfBirth
                            };
                        }
                        else {
                            this.existingCustomer = {
                                customerId: customer.customerId,
                                customerName: customer.firstName + ' ' + customer.middleName + ' ' + customer.lastName,
                                customerDob: customer.dateOfBirth
                            };
                            this.leadForm.controls.prospectCustomer.setValue("");
                            this.leadForm.controls.prospectCustomerId.setValue("");
                            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                            this.leadForm.controls.existingCustomerName.setValue(name);
                            this.leadForm.controls.existingCustomerId.setValue(customer.customerId);
                        }
                    }
                }
            });
        }
    }
    viewProspectCustomer() {
        if (!this.disabledForm) {
            let modalRef;
            modalRef = this.modalService.open(_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_13__.CustomerDetailComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.isPopup = true;
            modalRef.componentInstance.pageStatus = 'create';
            modalRef.componentInstance.isLead = true;
            let oldData = {
                identityType: this.leadForm.getRawValue().identityType,
                identityNumber: this.leadForm.getRawValue().identityNumber,
                phone: this.leadForm.getRawValue().phoneNo,
                email: this.leadForm.getRawValue().email,
                occupationCode: this.leadForm.getRawValue().occupationCode,
                townshipCode: this.leadForm.getRawValue().townshipCode,
                districtCode: this.leadForm.getRawValue().districtCode,
                stateCode: this.leadForm.getRawValue().stateCode,
            };
            modalRef.componentInstance.oldData = oldData;
            modalRef.componentInstance.onInitAddress(oldData);
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == "save") {
                        let customer = res.data;
                        this.leadForm.controls.existingCustomerName.setValue("");
                        this.leadForm.controls.existingCustomerId.setValue("");
                        // let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "")
                        this.leadForm.controls.prospectCustomer.setValue(customer.name);
                        this.leadForm.controls.prospectCustomerId.setValue(customer.customerId);
                        this.isProspectCustomer = true;
                    }
                }
            });
        }
    }
    openNRCModal() {
        let modalRef;
        modalRef = this.modalService.open(_form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_6__.NrcPopupPage, { size: 'xl', backdrop: false });
        modalRef.componentInstance.config = this.config;
        modalRef.componentInstance.group = this.leadForm;
    }
    loadForm(oldData) {
        this.disabledForm = oldData ? oldData.statusCode == '03' ? false : true : false;
        this.isExisting = oldData ? oldData.existingCustomerId == 0 ? false : true : false;
        this.leadForm = null;
        this.cdf.detectChanges();
        this.leadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormGroup({
            leadId: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.leadId : '', disabled: true }),
            phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.phoneNo : '', disabled: this.disabledForm }),
            openedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? moment__WEBPACK_IMPORTED_MODULE_17__(oldData.openedDate) : '', disabled: true }),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.subject : '', disabled: this.disabledForm }),
            companyCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.companyCode : '', disabled: true }),
            // contact: new FormControl(oldData ? oldData.contact : ""),
            sms: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? (oldData.contact + "").includes('sms') : false, disabled: this.disabledForm }),
            pemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? (oldData.contact + "").includes('email') : false, disabled: this.disabledForm }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? (oldData.contact + "").includes('phone') : false, disabled: this.disabledForm }),
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.contactName : '', disabled: this.disabledForm }),
            activationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? moment__WEBPACK_IMPORTED_MODULE_17__(oldData.activationDate) : '', disabled: true }),
            channelCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.channelCode : '', disabled: true }),
            occupationCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.occupationCode : '', disabled: this.disabledForm }),
            closedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? moment__WEBPACK_IMPORTED_MODULE_17__(oldData.closedDate) : '', disabled: this.disabledForm }),
            typeCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.typeCode : '', disabled: true }),
            stateCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.stateCode : '', disabled: this.disabledForm }),
            expirationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? moment__WEBPACK_IMPORTED_MODULE_17__(oldData.expirationDate) : '', disabled: this.disabledForm }),
            statusCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.statusCode : '', disabled: true }),
            // oldData ? oldData.statusCode : ''
            districtCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.districtCode : '', disabled: this.disabledForm }),
            validityPeriod: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.validityPeriod : '', disabled: true }),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.reason : '', disabled: true }),
            townshipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.townshipCode : '', disabled: this.disabledForm }),
            assignTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.ownerId : '', disabled: this.disabledForm }),
            assignToName: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.ownerName : '', disabled: this.disabledForm }),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.productId : '', disabled: true }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.email : '', disabled: this.disabledForm }),
            campaignName: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.campaignName : '', disabled: this.disabledForm }),
            identityType: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.identityType == 'OTHER' ? "OTHERS" : oldData.identityType : 'NRC', disabled: true }),
            sourceCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.sourceCode : '', disabled: this.disabledForm }),
            campaignNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.campaignNo : '', disabled: this.disabledForm }),
            identityNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.nrcValue || oldData.identityNumber : '', disabled: true }),
            existingCustomerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.existingCustomerName.trim() : "", disabled: true }),
            existingCustomerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.existingCustomerId : "", disabled: true }),
            referralCustomerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.referralCustomerName.trim() : "", disabled: this.disabledForm }),
            referralCustomerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.referralCustomerId : "", disabled: this.disabledForm }),
            monthlyIncome: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.monthlyIncome : '', disabled: this.disabledForm }),
            facebookAcc: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.facebookAcc : '', disabled: this.disabledForm }),
            maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.maritalStatus : '', disabled: this.disabledForm }),
            financialPlan: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.financialPlan : '', disabled: this.disabledForm }),
            numberOfChildren: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.numberOfChildren : '', disabled: this.disabledForm }),
            existingInsuranceCoverage: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.existingInsuranceCoverage : '', disabled: this.disabledForm }),
            existingInsurancePlan: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.existingInsurancePlan : '', disabled: this.disabledForm }),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.score : '', disabled: this.disabledForm }),
            asset: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.asset : '', disabled: this.disabledForm }),
            prospectCustomer: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.prospectCustomerName.trim() : "", disabled: this.disabledForm }),
            prospectCustomerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.prospectCustomerId : "", disabled: this.disabledForm }),
            lostReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormControl({ value: oldData ? oldData.lostReason : '', disabled: true }),
        });
        this.cdf.detectChanges();
        if (this.oldData) {
            this.getLeadQuality();
            this.calculateScore(null, this.oldData.sourceCode);
        }
    }
    backLocation() {
        this.loadForm(this.oldData);
    }
    clearDate(key) {
        if (key == 'referralCustomerName') {
            this.leadForm.controls[key].setValue(null);
            this.leadForm.controls['referralCustomerId'].setValue(null);
        }
        if (key == 'existingCustomerName') {
            this.leadForm.controls[key].setValue(null);
            this.leadForm.controls['existingCustomerId'].setValue(null);
        }
        if (key == 'campaignName' || key == 'campaignNo') {
            this.leadForm.controls['campaignName'].setValue(null);
            this.leadForm.controls['campaignNo'].setValue(null);
        }
        if (key == 'prospectCustomer') {
            this.leadForm.controls['prospectCustomer'].setValue(null);
            this.leadForm.controls['prospectCustomerId'].setValue(null);
            this.isAddProspect = false;
        }
    }
    createLead() {
        // if (this.leadForm.invalid) {
        //   validateAllFields(this.leadForm);
        //   return true;
        // } else {
        let postData = this.leadForm.getRawValue();
        postData.contact = [];
        if (postData.sms) {
            postData.contact.push("sms");
        }
        if (postData.pemail) {
            postData.contact.push("email");
        }
        if (postData.phone) {
            postData.contact.push("phone");
        }
        postData.contact = postData.contact.join(",");
        if (this.pageStatus == "create") {
            this.create(postData);
        }
        else {
            this.edit(postData);
        }
        // }
    }
    create(postData) {
        let data = Object.assign(Object.assign({}, postData), { leadId: this.oldId });
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
        let data = Object.assign(Object.assign({}, postData), { leadId: this.oldId, ownerId: postData.assignTo });
        this.LeadDetailService.updateNoID(data)
            .toPromise()
            .then((res) => {
            if (res) {
                this.getOld();
                this.alertService.activate('This record was updated', 'Success Message');
                // this.location.back();
            }
        });
    }
    toggleAccordion(type) {
        if (type == 'FNA') {
            this.isFNA = !this.isFNA;
            if (this.isFNA) {
                //this.getAllFNA();
                _FNA_list_const__WEBPACK_IMPORTED_MODULE_8__.FNAConstant.LEAD_ID = this.oldId;
            }
        }
        if (type == 'Application') {
            this.isApplication = !this.isApplication;
        }
        if (type == 'Quotation') {
            this.isQuotation = !this.isQuotation;
        }
        if (type == 'Attachment') {
            this.isAttachment = !this.isAttachment;
            if (this.isAttachment) {
                this.getLeadAttachment();
            }
        }
        if (type == 'Activity') {
            this.isActivity = !this.isActivity;
        }
        if (type == 'More') {
            this.isMore = !this.isMore;
        }
        if (type == 'Detail') {
            this.isDetail = !this.isDetail;
        }
    }
    add(type) {
        if (type == 'Application') {
            const modalRef = this.modalService.open(_products_products_component__WEBPACK_IMPORTED_MODULE_14__.ProductsComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = 'modal';
            modalRef.componentInstance.isShowList = 'yes';
            modalRef.result.then(() => { }, (prod) => {
                if (prod) {
                    if (prod.type == 'save') {
                        let customerId = this.oldData.existingCustomerId ? this.oldData.existingCustomerId : this.oldData.prospectCustomerId;
                        this.customerService.findOne(customerId).toPromise().then((res) => {
                            this.prodctService.creatingCustomer = res;
                            this.prodctService.createingProd = prod.data;
                            this.prodctService.creatingLeadId = this.oldId;
                            this.prodctService.editData = null;
                            this.prodctService.referenceID = null;
                            this.prodctService.viewType = 'policy';
                            this.prodctService.type = 'policy';
                            this.router.navigateByUrl("/product-form");
                        });
                    }
                }
            });
        }
        if (type == 'Quotation') {
            const modalRef = this.modalService.open(_products_products_component__WEBPACK_IMPORTED_MODULE_14__.ProductsComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = 'modal';
            modalRef.result.then(() => { }, (prod) => {
                if (prod) {
                    if (prod.type == 'save') {
                        let customerId = this.oldData.existingCustomerId ? this.oldData.existingCustomerId : this.oldData.prospectCustomerId;
                        this.customerService.findOne(customerId).toPromise().then((res) => {
                            this.prodctService.creatingCustomer = res;
                            this.prodctService.createingProd = prod.data;
                            this.prodctService.creatingLeadId = this.oldId;
                            this.prodctService.editData = null;
                            this.prodctService.referenceID = null;
                            this.prodctService.viewType = 'quotation';
                            this.prodctService.type = 'quotation';
                            this.router.navigateByUrl("/product-form");
                        });
                    }
                }
            });
        }
        if (type == 'Activity') {
            let customerId = this.oldData.existingCustomerId ? this.oldData.existingCustomerId : this.oldData.prospectCustomerId;
            let customerName = this.oldData.existingCustomerName.trim() ? this.oldData.existingCustomerName.trim() : this.oldData.prospectCustomerName.trim();
            let assignTo = this.oldData.ownerId ? this.oldData.ownerId : 0;
            let assignToName = this.oldData.ownerName ? this.oldData.ownerName.trim() : "";
            this.router.navigate(["/activity/activity-management-detail"], { queryParams: { customerId: customerId, name: customerName, leadId: this.oldId, assignTo: assignTo, assignToName: assignToName, isLead: true, pageStatus: 'create' } });
        }
        if (type == 'FNA') {
            this.displayFNAType();
        }
    }
    actionBtn(event, type) {
        this.fnaService.fnaUpdateProducts = [];
        if (type == 'FNA') {
            if (event.cmd == 'edit') {
                this.createOrEdit(event.data);
            }
            else {
                this.deleteFNA(event.data.id);
            }
        }
        else if (type == 'QUO') {
            if (event.cmd == 'edit') {
                this.editQuo(event.data);
            }
            else if (event.cmd == 'view') {
                this.goQuoViewDetail(event.data);
            }
            else if (event.cmd == 'create') {
                this.createPolicy(event.data);
            }
        }
        else if (type == 'APP') {
            if (event.cmd == 'edit') {
                this.editApp(event.data);
            }
            else if (event.cmd == 'view') {
                this.goAppViewDetail(event.data);
            }
        }
        else if (type == 'ATT') {
            if (event.cmd == 'download') {
                this.AttachmentDownloadService.getDownload(event.data.id, event.data.fileName);
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
                        });
                    }
                });
            }
        }
    }
    createPolicy(item) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)(undefined); }))]).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProdRef = res[0];
                this.prodctService.creatingCustomer = res[1];
                this.prodctService.viewType = 'policy';
                this.prodctService.type = 'policy';
                this.prodctService.referenceID = item.id;
                this.prodctService.editData = null;
                this.prodctService.creatingLeadId = item.leadId;
                this.prodctService.referenceStatus = item.status;
                this.router.navigateByUrl("/product-form");
            }
        });
    }
    goAppViewDetail(item) {
        this.prodctService.findOne(item.productId).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProd = res;
                this.prodctService.previewType = 'policy';
                this.prodctService.editData = item;
                this.router.navigateByUrl("/resourse-detail");
            }
        });
    }
    goQuoViewDetail(item) {
        this.prodctService.findOne(item.productId).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProd = res;
                this.prodctService.editData = item;
                this.prodctService.previewType = 'quotation';
                this.router.navigateByUrl("/resourse-detail");
            }
        });
    }
    editQuo(item) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)(undefined); }))]).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProd = res[0];
                this.prodctService.creatingCustomer = res[1];
                this.prodctService.type = 'quotation';
                this.prodctService.viewType = 'quotation';
                this.prodctService.editData = item;
                this.prodctService.referenceID = null;
                this.prodctService.creatingLeadId = item.leadId;
                this.router.navigateByUrl("/product-form");
            }
        });
    }
    editApp(item) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_33__.of)(undefined); }))]).toPromise().then((res) => {
            if (res[0]) {
                this.prodctService.createingProd = res[0];
                this.prodctService.creatingCustomer = res[1];
                this.prodctService.type = 'policy';
                this.prodctService.viewType = 'policy';
                this.prodctService.editData = item;
                this.prodctService.referenceID = item.quotationId;
                this.prodctService.creatingLeadId = item.leadId;
                this.router.navigateByUrl("/product-form");
            }
        });
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
    addAttachment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__awaiter)(this, void 0, void 0, function* () {
            let modalRef;
            modalRef = this.modalService.open(_form_component_custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_7__.CustomInputAlertComponent, { size: 'lg', backdrop: false });
            modalRef.componentInstance.type = 'description';
            modalRef.componentInstance.oldId = this.oldId;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res) {
                        this.description = res.description;
                        this.AttachmentUploadService.save(res.data).toPromise().then((res) => {
                            if (res) {
                                let postData = {
                                    attachmentId: res,
                                    description: this.description,
                                    refDocNo: this.oldId,
                                    refDocType: 'LEAD'
                                };
                                this.LeadAttachmentService.save(postData).toPromise().then((res) => {
                                    if (res) {
                                        this.getLeadAttachment();
                                        // this.getOld()
                                    }
                                });
                            }
                        }).catch(e => {
                        });
                    }
                }
            });
            //   }
            // })
        });
    }
    getLeadAttachment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__awaiter)(this, void 0, void 0, function* () {
            this.LeadAttachmentService.getAttachmentListRef(this.oldId, 'LEAD').toPromise().then((res) => {
                if (res) {
                    this.attachmentList = res;
                    this.cdf.detectChanges();
                    this.attachmentmatTable.reChangeData();
                    this.getOld();
                }
            });
        });
    }
    getProductOption() {
        let array = this.productOption || [];
        console.log("this.leadForm.getRawValue().typeCode", this.leadForm.getRawValue().typeCode);
        let type = array.filter(x => x.type == this.leadType[this.leadForm.getRawValue().typeCode]);
        let index = type.findIndex(x => x.code == this.leadForm.controls["productId"].value);
        console.log(type, index);
        if (index < 0 && this.leadForm.controls["productId"].value && type.length > 0)
            this.leadForm.controls["productId"].setValue("");
        this.productOption2 = type || [];
    }
    //for View
    isControlValid(controlName) {
        const control = this.leadForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.leadForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.leadForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
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
        this.fnaService.fnaUpdateProducts = [];
        this.fnaService.fnaIncome = new _fna_detail_income_income_manage_dto__WEBPACK_IMPORTED_MODULE_27__.IncomeDto();
        this.fnaService.fnaRetirementSaving = new _fna_detail_retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_28__.RetirementDto();
        this.fnaService.fnaHealths = new Array();
        this.fnaService.fnaEducations = new Array();
        this.fnaService.fnaAssect = new Array();
        this.fnaService.fnaProduct = new Array();
        this.fnaService.percentage = '';
        this.fnaService.totalPercentageText = '';
        this.fnaService.bgColor = '';
        this.fnaService.fnaUpdateProducts = new Array();
        this.fnaService.fnaTextColor = null;
        if (this.oldId != null && this.oldId != '' && this.oldId != undefined &&
            this.customer.customerId != null && this.customer.customerId != '') {
            const modalRef = this.modalService.open(_fna_list_fna_type_fna_type_component__WEBPACK_IMPORTED_MODULE_21__.FnaTypeComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = 'modal';
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
                        });
                    }
                    if (res.fnaType == "LPP") {
                        this.router.navigate(["/fna/fna-detail"], {
                            queryParams: { passValue: JSON.stringify(res) }
                        });
                    }
                }
            });
        }
    }
    createOrEdit(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__awaiter)(this, void 0, void 0, function* () {
            this.fnaService.fnaUpdateProducts = [];
            this.fnaService.fnaIncome = new _fna_detail_income_income_manage_dto__WEBPACK_IMPORTED_MODULE_27__.IncomeDto();
            this.fnaService.fnaRetirementSaving = new _fna_detail_retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_28__.RetirementDto();
            this.fnaService.fnaHealths = new Array();
            this.fnaService.fnaEducations = new Array();
            this.fnaService.fnaAssect = new Array();
            this.fnaService.fnaProduct = new Array();
            this.fnaService.percentage = '';
            this.fnaService.totalPercentageText = '';
            this.fnaService.bgColor = '';
            this.fnaService.fnaUpdateProducts = new Array();
            this.fnaService.fnaTextColor = null;
            let passValue;
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
                };
                // console.log('passValue', passValue);
                if (this.oldId != null && this.oldId != '' && this.oldId != undefined &&
                    this.customer.customerId != null && this.customer.customerId != '') {
                    if (data.fnaType == 'LPP') {
                        this.router.navigate(["/fna/fna-detail"], {
                            queryParams: { passValue: JSON.stringify(passValue) },
                        });
                    }
                    else {
                        passValue.grandDiscount = data.grandDiscount;
                        passValue.highDiscount = data.highDiscount;
                        _fna_bram_product_product_dto__WEBPACK_IMPORTED_MODULE_26__.FNABRAMDiscount.GRAND_DISCOUNT = 0;
                        _fna_bram_product_product_dto__WEBPACK_IMPORTED_MODULE_26__.FNABRAMDiscount.HIGH_DISCOUNT = 0;
                        this.router.navigate(["/fna/fna-bram"], {
                            queryParams: { passValue: JSON.stringify(passValue) },
                        });
                    }
                }
            }
        });
    }
    getAllFNA() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fnaListService.getAll().toPromise().then((res) => {
                this.fnaList = [];
                if (res) {
                    this.fnaList = res;
                    for (var i = 0; i < this.fnaList.length; i++) {
                        this.fnaList[i].createdAt = this.convertDateFormatMMDDYYY(this.fnaList[i].createdAt);
                        this.fnaList[i].conductedBy = this.user.username;
                    }
                    this.cdf.detectChanges();
                    this.fnamatTable.reChangeData();
                }
            });
        });
    }
    deleteFNA(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__awaiter)(this, void 0, void 0, function* () {
            this.alertService.activate('Are you sure want to delete?', 'Warning Message').then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    yield this.fnaListService.delete(id).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__awaiter)(this, void 0, void 0, function* () {
                        this.fnaList = this.fnaList.filter(data => data.id !== id);
                        this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                            // console.log('deleteFNA', result);
                        });
                        this.cdf.detectChanges();
                        this.fnamatTable.reChangeData();
                    }));
                }
            }));
            this.fnaService.fnaUpdateProducts = [];
            this.fnaService.fnaIncome = new _fna_detail_income_income_manage_dto__WEBPACK_IMPORTED_MODULE_27__.IncomeDto();
            this.fnaService.fnaRetirementSaving = new _fna_detail_retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_28__.RetirementDto();
            this.fnaService.fnaHealths = new Array();
            this.fnaService.fnaEducations = new Array();
            this.fnaService.fnaAssect = new Array();
            this.fnaService.fnaProduct = new Array();
            this.fnaService.percentage = '';
            this.fnaService.totalPercentageText = '';
            this.fnaService.bgColor = '';
            this.fnaService.fnaUpdateProducts = new Array();
            this.fnaService.fnaTextColor = null;
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
    getFormatOpt(res) {
        return res.map(x => {
            return { 'code': x.codeId, 'value': x.codeName || x.codeValue };
        });
    }
};
LeadDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_36__.Location },
    { type: src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_2__.MasterDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_37__.ActivatedRoute },
    { type: _lead_detail_service__WEBPACK_IMPORTED_MODULE_4__.LeadDetailService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_38__.ChangeDetectorRef },
    { type: _lead_list_lead_list_service__WEBPACK_IMPORTED_MODULE_3__.LeadListService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__.NgbModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_37__.Router },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_15__.ProductDataService },
    { type: _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_16__.CustomerService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_15__.ProductDataService },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_19__.AttachmentUploadService },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_19__.AttachmentServiceRef },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_19__.AttachmentDownloadService },
    { type: _fna_list_fna_list_manage_service__WEBPACK_IMPORTED_MODULE_22__.FANListService },
    { type: _app_modules_auth__WEBPACK_IMPORTED_MODULE_23__.AuthService },
    { type: _fna_detail_fna_manage_service__WEBPACK_IMPORTED_MODULE_24__.FANService },
    { type: _app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_25__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_38__.NgZone },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_29__.MenuDataService }
];
LeadDetailComponent.propDecorators = {
    fnamatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_38__.ViewChild, args: ['fna',] }],
    activitymatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_38__.ViewChild, args: ['activity',] }],
    applicationmatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_38__.ViewChild, args: ['application',] }],
    attachmentmatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_38__.ViewChild, args: ['attachment',] }],
    quotationmatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_38__.ViewChild, args: ['quotation',] }]
};
LeadDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_34__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_38__.Component)({
        selector: "app-lead-detail",
        template: _lead_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_40__.DateAdapter,
                useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_41__.MomentDateAdapter,
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_40__.MAT_DATE_LOCALE],
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_40__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_18__.MY_FORMATS },
        ],
        styles: [_lead_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeadDetailComponent);



/***/ }),

/***/ 27771:
/*!*********************************************************!*\
  !*** ./src/app/pages/lead-detail/lead-detail.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadDetailModule": () => (/* binding */ LeadDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 8425);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _lead_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lead-detail.component */ 98908);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _lead_detail_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead-detail.share.module */ 50886);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share-components/share-component.module */ 94142);

















let LeadDetailModule = class LeadDetailModule {
};
LeadDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            // FormComponentModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDatepickerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
            _lead_detail_share_module__WEBPACK_IMPORTED_MODULE_3__.LeadDetailShareModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__.LanguageModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_5__.ShareComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild([
                {
                    path: '',
                    component: _lead_detail_component__WEBPACK_IMPORTED_MODULE_2__.LeadDetailComponent,
                },
            ]),
        ]
    })
], LeadDetailModule);



/***/ }),

/***/ 64190:
/*!**********************************************************!*\
  !*** ./src/app/pages/lead-detail/lead-detail.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadDetailService": () => (/* binding */ LeadDetailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 38313);





const API_LEAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/lead`;
const API_CAMPAIGN_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/campaigns`;
const API_LEAD_SOURCE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/leadSource`;
const API_LEAD_SCORE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/leadSource/score`;
const API_LEAD_QUALITY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/leadQuality`;
const API_VALIDITY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/validity-period/filter`;
let LeadDetailService = class LeadDetailService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_LEAD_URL);
        this.httpClient = httpClient;
    }
    updateLeadStatus(postData, oldId) {
        return this.httpClient.put(API_LEAD_URL + "/" + oldId + "/status", postData);
    }
    getCampaignList(search) {
        let url = API_CAMPAIGN_URL + "?";
        if (search.cpmNumber) {
            url = url + "cpmNumber=" + search.cpmNumber + "&";
        }
        if (search.cpmName) {
            url = url + "cpmName=" + search.cpmName + "&";
        }
        // console.log(url);
        return this.httpClient.get(url);
    }
    getLeadSource() {
        return this.httpClient.get(API_LEAD_SOURCE_URL);
    }
    getLeadQuality(channel) {
        return this.httpClient.get(API_LEAD_QUALITY_URL + "?distributionChannelCode=" + channel);
    }
    getLeadScore(sourceCode, channel) {
        return this.httpClient.get(API_LEAD_SCORE_URL + "?sourceCode=" + sourceCode + "&distributionChannelCode=" + channel);
    }
    getValidityPeriod(leadSource, productId) {
        return this.httpClient.get(API_VALIDITY_URL + "?leadSource=" + leadSource + "&" + "productId=" + productId);
    }
    checkLead(postData) {
        console.log(postData);
        return this.httpClient.post(API_LEAD_URL + "/check", postData);
    }
};
LeadDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
LeadDetailService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LeadDetailService);



/***/ }),

/***/ 50886:
/*!***************************************************************!*\
  !*** ./src/app/pages/lead-detail/lead-detail.share.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadDetailShareModule": () => (/* binding */ LeadDetailShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _lead_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lead-detail.component */ 98908);
/* harmony import */ var _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign-list/campaign-list.component */ 71865);
/* harmony import */ var _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-list/customer-list.share.module */ 36277);
/* harmony import */ var _products_products_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products/products-share.module */ 34459);
/* harmony import */ var _customer_detail_customer_detail_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-detail/customer-detail.share.module */ 23903);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
















let LeadDetailShareModule = class LeadDetailShareModule {
};
LeadDetailShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_lead_detail_component__WEBPACK_IMPORTED_MODULE_2__.LeadDetailComponent, _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_3__.CampaignListComponent],
        exports: [_lead_detail_component__WEBPACK_IMPORTED_MODULE_2__.LeadDetailComponent, _campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_3__.CampaignListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
            _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_4__.CustomerListShareModule,
            _products_products_share_module__WEBPACK_IMPORTED_MODULE_5__.ProductShareModule,
            _customer_detail_customer_detail_share_module__WEBPACK_IMPORTED_MODULE_6__.CustomerDetailShareModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_7__.LanguageModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        ]
    })
], LeadDetailShareModule);



/***/ }),

/***/ 43177:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_TABS_CONFIG": () => (/* binding */ MAT_TABS_CONFIG),
/* harmony export */   "MAT_TAB_GROUP": () => (/* binding */ MAT_TAB_GROUP),
/* harmony export */   "MatInkBar": () => (/* binding */ MatInkBar),
/* harmony export */   "MatTab": () => (/* binding */ MatTab),
/* harmony export */   "MatTabBody": () => (/* binding */ MatTabBody),
/* harmony export */   "MatTabBodyPortal": () => (/* binding */ MatTabBodyPortal),
/* harmony export */   "MatTabChangeEvent": () => (/* binding */ MatTabChangeEvent),
/* harmony export */   "MatTabContent": () => (/* binding */ MatTabContent),
/* harmony export */   "MatTabGroup": () => (/* binding */ MatTabGroup),
/* harmony export */   "MatTabHeader": () => (/* binding */ MatTabHeader),
/* harmony export */   "MatTabLabel": () => (/* binding */ MatTabLabel),
/* harmony export */   "MatTabLabelWrapper": () => (/* binding */ MatTabLabelWrapper),
/* harmony export */   "MatTabLink": () => (/* binding */ MatTabLink),
/* harmony export */   "MatTabNav": () => (/* binding */ MatTabNav),
/* harmony export */   "MatTabsModule": () => (/* binding */ MatTabsModule),
/* harmony export */   "_MAT_INK_BAR_POSITIONER": () => (/* binding */ _MAT_INK_BAR_POSITIONER),
/* harmony export */   "_MatTabBodyBase": () => (/* binding */ _MatTabBodyBase),
/* harmony export */   "_MatTabGroupBase": () => (/* binding */ _MatTabGroupBase),
/* harmony export */   "_MatTabHeaderBase": () => (/* binding */ _MatTabHeaderBase),
/* harmony export */   "_MatTabLinkBase": () => (/* binding */ _MatTabLinkBase),
/* harmony export */   "_MatTabNavBase": () => (/* binding */ _MatTabNavBase),
/* harmony export */   "matTabsAnimations": () => (/* binding */ matTabsAnimations),
/* harmony export */   "ɵangular_material_src_material_tabs_tabs_a": () => (/* binding */ _MAT_INK_BAR_POSITIONER_FACTORY),
/* harmony export */   "ɵangular_material_src_material_tabs_tabs_b": () => (/* binding */ MAT_TAB_LABEL),
/* harmony export */   "ɵangular_material_src_material_tabs_tabs_c": () => (/* binding */ MAT_TAB_CONTENT),
/* harmony export */   "ɵangular_material_src_material_tabs_tabs_d": () => (/* binding */ MatPaginatedTabHeader)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/observers */ 35837);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 24476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/keycodes */ 75939);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token for the MatInkBar's Positioner. */










function MatTab_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
function MatTabBody_ng_template_2_Template(rf, ctx) { }
const _c1 = function (a0) { return { animationDuration: a0 }; };
const _c2 = function (a0, a1) { return { value: a0, params: a1 }; };
const _c3 = ["tabBodyWrapper"];
const _c4 = ["tabHeader"];
function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) { }
function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
} }
function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.textLabel);
} }
function MatTabGroup_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const tab_r4 = restoredCtx.$implicit; const i_r5 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx_r11._handleClick(tab_r4, _r0, i_r5); })("cdkFocusChange", function MatTabGroup_div_2_Template_div_cdkFocusChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r5 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13._tabFocusChanged($event, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
} }
function MatTabGroup_mat_tab_body_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-body", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16._removeTabBodyWrapperHeight(); })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18._setTabBodyWrapperHeight($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r15))("content", tab_r14.content)("position", tab_r14.position)("origin", tab_r14.origin)("animationDuration", ctx_r3.animationDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r15));
} }
const _c5 = ["tabListContainer"];
const _c6 = ["tabList"];
const _c7 = ["nextPaginator"];
const _c8 = ["previousPaginator"];
const _c9 = ["mat-tab-nav-bar", ""];
const _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatInkBarPositioner', {
    providedIn: 'root',
    factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */
function _MAT_INK_BAR_POSITIONER_FACTORY() {
    const method = (element) => ({
        left: element ? (element.offsetLeft || 0) + 'px' : '0',
        width: element ? (element.offsetWidth || 0) + 'px' : '0',
    });
    return method;
}
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */
class MatInkBar {
    constructor(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._inkBarPositioner = _inkBarPositioner;
        this._animationMode = _animationMode;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */
    alignToElement(element) {
        this.show();
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => this._setStyles(element));
            });
        }
        else {
            this._setStyles(element);
        }
    }
    /** Shows the ink bar. */
    show() {
        this._elementRef.nativeElement.style.visibility = 'visible';
    }
    /** Hides the ink bar. */
    hide() {
        this._elementRef.nativeElement.style.visibility = 'hidden';
    }
    /**
     * Sets the proper styles to the ink bar element.
     * @param element
     */
    _setStyles(element) {
        const positions = this._inkBarPositioner(element);
        const inkBar = this._elementRef.nativeElement;
        inkBar.style.left = positions.left;
        inkBar.style.width = positions.width;
    }
}
MatInkBar.ɵfac = function MatInkBar_Factory(t) { return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
MatInkBar.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatInkBar, selectors: [["mat-ink-bar"]], hostAttrs: [1, "mat-ink-bar"], hostVars: 2, hostBindings: function MatInkBar_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } } });
MatInkBar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_MAT_INK_BAR_POSITIONER,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatInkBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-ink-bar',
                host: {
                    'class': 'mat-ink-bar',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_MAT_INK_BAR_POSITIONER]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */
class MatTabContent {
    constructor(
    /** Content for the tab. */ template) {
        this.template = template;
    }
}
MatTabContent.ɵfac = function MatTabContent_Factory(t) { return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
MatTabContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatTabContent, selectors: [["", "matTabContent", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_TAB_CONTENT, useExisting: MatTabContent }])] });
MatTabContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matTabContent]',
                providers: [{ provide: MAT_TAB_CONTENT, useExisting: MatTabContent }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabLabel');
/** Used to flag tab labels for use with the portal directive */
class MatTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortal {
}
MatTabLabel.ɵfac = /*@__PURE__*/ function () { let ɵMatTabLabel_BaseFactory; return function MatTabLabel_Factory(t) { return (ɵMatTabLabel_BaseFactory || (ɵMatTabLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTabLabel)))(t || MatTabLabel); }; }();
MatTabLabel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatTabLabel, selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_TAB_LABEL, useExisting: MatTabLabel }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-tab-label], [matTabLabel]',
                providers: [{ provide: MAT_TAB_LABEL, useExisting: MatTabLabel }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTab.
/** @docs-private */
class MatTabBase {
}
const _MatTabMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)(MatTabBase);
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB_GROUP');
class MatTab extends _MatTabMixinBase {
    constructor(_viewContainerRef, _closestTabGroup) {
        super();
        this._viewContainerRef = _viewContainerRef;
        this._closestTabGroup = _closestTabGroup;
        /** Plain text label for the tab, used when there is no template label. */
        this.textLabel = '';
        /** Portal that will be the hosted content of the tab */
        this._contentPortal = null;
        /** Emits whenever the internal state of the tab changes. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */
        this.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */
        this.origin = null;
        /**
         * Whether the tab is currently active.
         */
        this.isActive = false;
    }
    /** Content for the tab label given by `<ng-template mat-tab-label>`. */
    get templateLabel() { return this._templateLabel; }
    set templateLabel(value) { this._setTemplateLabelInput(value); }
    /** @docs-private */
    get content() {
        return this._contentPortal;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
            this._stateChanges.next();
        }
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    ngOnInit() {
        this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setTemplateLabelInput(value) {
        // Only update the templateLabel via query if there is actually
        // a MatTabLabel found. This works around an issue where a user may have
        // manually set `templateLabel` during creation mode, which would then get clobbered
        // by `undefined` when this query resolves.
        if (value) {
            this._templateLabel = value;
        }
    }
}
MatTab.ɵfac = function MatTab_Factory(t) { return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB_GROUP)); };
MatTab.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTab, selectors: [["mat-tab"]], contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_TAB_CONTENT, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
    } }, viewQuery: function MatTab_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
    } }, inputs: { disabled: "disabled", textLabel: ["label", "textLabel"], ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"] }, exportAs: ["matTab"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatTab_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
MatTab.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_TAB_GROUP,] }] }
];
MatTab.propDecorators = {
    templateLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MAT_TAB_LABEL,] }],
    _explicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MAT_TAB_CONTENT, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true },] }],
    _implicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true },] }],
    textLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['label',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTab, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-tab',
                template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
                inputs: ['disabled'],
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                exportAs: 'matTab'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_TAB_GROUP]
            }] }]; }, { textLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['label']
        }], templateLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_TAB_LABEL]
        }], _explicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_TAB_CONTENT, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true }]
        }], _implicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true }]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material tabs.
 * @docs-private
 */
const matTabsAnimations = {
    /** Animation translates a tab along the X axis. */
    translateTab: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('translateTab', [
        // Note: transitions to `none` instead of 0, because some browsers might blur the content.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('center, void, left-origin-center, right-origin-center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'none' })),
        // If the tab is either on the left or right, we additionally add a `min-height` of 1px
        // in order to ensure that the element has a height before its state changes. This is
        // necessary because Chrome does seem to skip the transition in RTL mode if the element does
        // not have a static height and is not rendered. See related issue: #9465
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('left', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translate3d(-100%, 0, 0)', minHeight: '1px' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('right', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translate3d(100%, 0, 0)', minHeight: '1px' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('* => left, * => right, left => center, right => center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => left-origin-center', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translate3d(-100%, 0, 0)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => right-origin-center', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translate3d(100%, 0, 0)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
        ])
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */
class MatTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet {
    constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
        super(componentFactoryResolver, viewContainerRef, _document);
        this._host = _host;
        /** Subscription to events for when the tab body begins centering. */
        this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
        /** Subscription to events for when the tab body finishes leaving from center position. */
        this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    }
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit() {
        super.ngOnInit();
        this._centeringSub = this._host._beforeCentering
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._host._isCenterPosition(this._host._position)))
            .subscribe((isCentering) => {
            if (isCentering && !this.hasAttached()) {
                this.attach(this._host._content);
            }
        });
        this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
            this.detach();
        });
    }
    /** Clean up centering subscription. */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._centeringSub.unsubscribe();
        this._leavingSub.unsubscribe();
    }
}
MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) { return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT)); };
MatTabBodyPortal.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatTabBodyPortal, selectors: [["", "matTabBodyHost", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatTabBodyPortal.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: MatTabBody, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody),] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabBodyPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matTabBodyHost]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: MatTabBody, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }] }]; }, null); })();
/**
 * Base class with all of the `MatTabBody` functionality.
 * @docs-private
 */
class _MatTabBodyBase {
    constructor(_elementRef, _dir, changeDetectorRef) {
        this._elementRef = _elementRef;
        this._dir = _dir;
        /** Subscription to the directionality change observable. */
        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
        /** Emits when an animation on the tab is complete. */
        this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        /** Event emitted when the tab begins to animate towards the center as the active tab. */
        this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted before the centering of the tab begins. */
        this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted before the centering of the tab begins. */
        this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted when the tab completes its animation towards the center. */
        this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
        // Note that the default value will always be overwritten by `MatTabBody`, but we need one
        // anyway to prevent the animations module from throwing an error if the body is used on its own.
        /** Duration for the tab's animation. */
        this.animationDuration = '500ms';
        if (_dir) {
            this._dirChangeSubscription = _dir.change.subscribe((dir) => {
                this._computePositionAnimationState(dir);
                changeDetectorRef.markForCheck();
            });
        }
        // Ensure that we get unique animation events, because the `.done` callback can get
        // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
        this._translateTabComplete.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(event => {
            // If the transition to the center is complete, emit an event.
            if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
                this._onCentered.emit();
            }
            if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
                this._afterLeavingCenter.emit();
            }
        });
    }
    /** The shifted index position of the tab body, where zero represents the active center tab. */
    set position(position) {
        this._positionIndex = position;
        this._computePositionAnimationState();
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */
    ngOnInit() {
        if (this._position == 'center' && this.origin != null) {
            this._position = this._computePositionFromOrigin(this.origin);
        }
    }
    ngOnDestroy() {
        this._dirChangeSubscription.unsubscribe();
        this._translateTabComplete.complete();
    }
    _onTranslateTabStarted(event) {
        const isCentering = this._isCenterPosition(event.toState);
        this._beforeCentering.emit(isCentering);
        if (isCentering) {
            this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
        }
    }
    /** The text direction of the containing app. */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the provided position state is considered center, regardless of origin. */
    _isCenterPosition(position) {
        return position == 'center' ||
            position == 'left-origin-center' ||
            position == 'right-origin-center';
    }
    /** Computes the position state that will be used for the tab-body animation trigger. */
    _computePositionAnimationState(dir = this._getLayoutDirection()) {
        if (this._positionIndex < 0) {
            this._position = dir == 'ltr' ? 'left' : 'right';
        }
        else if (this._positionIndex > 0) {
            this._position = dir == 'ltr' ? 'right' : 'left';
        }
        else {
            this._position = 'center';
        }
    }
    /**
     * Computes the position state based on the specified origin position. This is used if the
     * tab is becoming visible immediately after creation.
     */
    _computePositionFromOrigin(origin) {
        const dir = this._getLayoutDirection();
        if ((dir == 'ltr' && origin <= 0) || (dir == 'rtl' && origin > 0)) {
            return 'left-origin-center';
        }
        return 'right-origin-center';
    }
}
_MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) { return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
_MatTabBodyBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatTabBodyBase, inputs: { animationDuration: "animationDuration", position: "position", _content: ["content", "_content"], origin: "origin" }, outputs: { _onCentering: "_onCentering", _beforeCentering: "_beforeCentering", _afterLeavingCenter: "_afterLeavingCenter", _onCentered: "_onCentered" } });
_MatTabBodyBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
_MatTabBodyBase.propDecorators = {
    _onCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _beforeCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _afterLeavingCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _onCentered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['content',] }],
    origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabBodyBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { _onCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _beforeCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _afterLeavingCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _onCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['content']
        }], origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
class MatTabBody extends _MatTabBodyBase {
    constructor(elementRef, dir, changeDetectorRef) {
        super(elementRef, dir, changeDetectorRef);
    }
}
MatTabBody.ɵfac = function MatTabBody_Factory(t) { return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatTabBody.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTabBody, selectors: [["mat-tab-body"]], viewQuery: function MatTabBody_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
    } }, hostAttrs: [1, "mat-tab-body"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 6, consts: [["cdkScrollable", "", 1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]], template: function MatTabBody_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) { return ctx._onTranslateTabStarted($event); })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) { return ctx._translateTabComplete.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
    } }, directives: [MatTabBodyPortal], styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"], encapsulation: 2, data: { animation: [matTabsAnimations.translateTab] } });
MatTabBody.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
MatTabBody.propDecorators = {
    _portalHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-tab-body',
                template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
                animations: [matTabsAnimations.translateTab],
                host: {
                    'class': 'mat-tab-body'
                },
                styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { _portalHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to provide the default options the tabs module. */
const MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TABS_CONFIG');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID's for each tab component */
let nextId = 0;
/** A simple change event emitted on focus or selection changes. */
class MatTabChangeEvent {
}
// Boilerplate for applying mixins to MatTabGroup.
/** @docs-private */
class MatTabGroupMixinBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatTabGroupMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)(MatTabGroupMixinBase), 'primary');
/**
 * Base class with all of the `MatTabGroupBase` functionality.
 * @docs-private
 */
class _MatTabGroupBase extends _MatTabGroupMixinBase {
    constructor(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /** All of the tabs that belong to the group. */
        this._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
        /** The tab index that should be selected after the content has been checked. */
        this._indexToSelect = 0;
        /** Snapshot of the height of the tab body wrapper before another tab is activated. */
        this._tabBodyWrapperHeight = 0;
        /** Subscription to tabs being added/removed. */
        this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
        /** Subscription to changes in the tab labels. */
        this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
        this._selectedIndex = null;
        /** Position of the tab header. */
        this.headerPosition = 'above';
        /** Output to enable support for two-way binding on `[(selectedIndex)]` */
        this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted when focus has changed within a tab group. */
        this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted when the body animation has completed */
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted when the tab selection has changed. */
        this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
        this._groupId = nextId++;
        this.animationDuration = defaultConfig && defaultConfig.animationDuration ?
            defaultConfig.animationDuration : '500ms';
        this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ?
            defaultConfig.disablePagination : false;
        this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ?
            defaultConfig.dynamicHeight : false;
    }
    /** Whether the tab group should grow to the size of the active tab. */
    get dynamicHeight() { return this._dynamicHeight; }
    set dynamicHeight(value) { this._dynamicHeight = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value); }
    /** The index of the active tab. */
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        this._indexToSelect = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value, null);
    }
    /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
    get animationDuration() { return this._animationDuration; }
    set animationDuration(value) {
        this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
    }
    /** Background color of the tab group. */
    get backgroundColor() { return this._backgroundColor; }
    set backgroundColor(value) {
        const nativeElement = this._elementRef.nativeElement;
        nativeElement.classList.remove(`mat-background-${this.backgroundColor}`);
        if (value) {
            nativeElement.classList.add(`mat-background-${value}`);
        }
        this._backgroundColor = value;
    }
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    ngAfterContentChecked() {
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex != indexToSelect) {
            const isFirstRun = this._selectedIndex == null;
            if (!isFirstRun) {
                this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
                // Preserve the height so page doesn't scroll up during tab change.
                // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change
                const wrapper = this._tabBodyWrapper.nativeElement;
                wrapper.style.minHeight = wrapper.clientHeight + 'px';
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(() => {
                this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
                if (!isFirstRun) {
                    this.selectedIndexChange.emit(indexToSelect);
                    // Clear the min-height, this was needed during tab change to avoid
                    // unnecessary scrolling.
                    this._tabBodyWrapper.nativeElement.style.minHeight = '';
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this._tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = indexToSelect - this._selectedIndex;
            }
        });
        if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;
            this._changeDetectorRef.markForCheck();
        }
    }
    ngAfterContentInit() {
        this._subscribeToAllTabChanges();
        this._subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this._tabsSubscription = this._tabs.changes.subscribe(() => {
            const indexToSelect = this._clampTabIndex(this._indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this._selectedIndex) {
                const tabs = this._tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        this._indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Listens to changes in all of the tabs. */
    _subscribeToAllTabChanges() {
        // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
        // some that are inside of nested tab groups. We filter them out manually by checking that
        // the closest group to the tab is the current one.
        this._allTabs.changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._allTabs))
            .subscribe((tabs) => {
            this._tabs.reset(tabs.filter(tab => tab._closestTabGroup === this));
            this._tabs.notifyOnChanges();
        });
    }
    ngOnDestroy() {
        this._tabs.destroy();
        this._tabsSubscription.unsubscribe();
        this._tabLabelSubscription.unsubscribe();
    }
    /** Re-aligns the ink bar to the selected tab element. */
    realignInkBar() {
        if (this._tabHeader) {
            this._tabHeader._alignInkBarToSelectedTab();
        }
    }
    _focusChanged(index) {
        this.focusChange.emit(this._createChangeEvent(index));
    }
    _createChangeEvent(index) {
        const event = new MatTabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    }
    /**
     * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
     * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
     * binding to be updated, we need to subscribe to changes in it and trigger change detection
     * manually.
     */
    _subscribeToTabLabels() {
        if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
        }
        this._tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(...this._tabs.map(tab => tab._stateChanges))
            .subscribe(() => this._changeDetectorRef.markForCheck());
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    _clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    }
    /** Returns a unique id for each tab label element */
    _getTabLabelId(i) {
        return `mat-tab-label-${this._groupId}-${i}`;
    }
    /** Returns a unique id for each tab content element */
    _getTabContentId(i) {
        return `mat-tab-content-${this._groupId}-${i}`;
    }
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */
    _setTabBodyWrapperHeight(tabHeight) {
        if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
        }
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.height = this._tabBodyWrapperHeight + 'px';
        // This conditional forces the browser to paint the height so that
        // the animation to the new height can have an origin.
        if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            wrapper.style.height = tabHeight + 'px';
        }
    }
    /** Removes the height of the tab body wrapper. */
    _removeTabBodyWrapperHeight() {
        const wrapper = this._tabBodyWrapper.nativeElement;
        this._tabBodyWrapperHeight = wrapper.clientHeight;
        wrapper.style.height = '';
        this.animationDone.emit();
    }
    /** Handle click events, setting new selected index if appropriate. */
    _handleClick(tab, tabHeader, index) {
        if (!tab.disabled) {
            this.selectedIndex = tabHeader.focusIndex = index;
        }
    }
    /** Retrieves the tabindex for the tab. */
    _getTabIndex(tab, idx) {
        if (tab.disabled) {
            return null;
        }
        return this.selectedIndex === idx ? 0 : -1;
    }
    /** Callback for when the focused state of a tab has changed. */
    _tabFocusChanged(focusOrigin, index) {
        if (focusOrigin) {
            this._tabHeader.focusIndex = index;
        }
    }
}
_MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) { return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
_MatTabGroupBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatTabGroupBase, inputs: { headerPosition: "headerPosition", animationDuration: "animationDuration", disablePagination: "disablePagination", dynamicHeight: "dynamicHeight", selectedIndex: "selectedIndex", backgroundColor: "backgroundColor" }, outputs: { selectedIndexChange: "selectedIndexChange", focusChange: "focusChange", animationDone: "animationDone", selectedTabChange: "selectedTabChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatTabGroupBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_TABS_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
_MatTabGroupBase.propDecorators = {
    dynamicHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    headerPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disablePagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    selectedTabChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_TABS_CONFIG]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, { headerPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], selectedTabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dynamicHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
class MatTabGroup extends _MatTabGroupBase {
    constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        super(elementRef, changeDetectorRef, defaultConfig, animationMode);
    }
}
MatTabGroup.ɵfac = function MatTabGroup_Factory(t) { return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
MatTabGroup.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTabGroup, selectors: [["mat-tab-group"]], contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTab, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
    } }, viewQuery: function MatTabGroup_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
    } }, hostAttrs: [1, "mat-tab-group"], hostVars: 4, hostBindings: function MatTabGroup_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
    } }, inputs: { color: "color", disableRipple: "disableRipple" }, exportAs: ["matTabGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: MAT_TAB_GROUP,
                useExisting: MatTabGroup
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 7, consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", "cdkFocusChange", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click", "cdkFocusChange"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]], template: function MatTabGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) { return ctx._focusChanged($event); })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) { return ctx.selectedIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._tabs);
    } }, directives: function () { return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.CdkMonitorFocus, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, MatTabBody]; }, styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"], encapsulation: 2 });
MatTabGroup.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_TABS_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
MatTabGroup.propDecorators = {
    _allTabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatTab, { descendants: true },] }],
    _tabBodyWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['tabBodyWrapper',] }],
    _tabHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['tabHeader',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-tab-group',
                exportAs: 'matTabGroup',
                template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\"\n       (cdkFocusChange)=\"_tabFocusChanged($event, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
                inputs: ['color', 'disableRipple'],
                providers: [{
                        provide: MAT_TAB_GROUP,
                        useExisting: MatTabGroup
                    }],
                host: {
                    'class': 'mat-tab-group',
                    '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
                    '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
                },
                styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_TABS_CONFIG]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, { _allTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatTab, { descendants: true }]
        }], _tabBodyWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabBodyWrapper']
        }], _tabHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabHeader']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTabLabelWrapper.
/** @docs-private */
class MatTabLabelWrapperBase {
}
const _MatTabLabelWrapperMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)(MatTabLabelWrapperBase);
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
class MatTabLabelWrapper extends _MatTabLabelWrapperMixinBase {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
    /** Sets focus on the wrapper element */
    focus() {
        this.elementRef.nativeElement.focus();
    }
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
}
MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) { return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
MatTabLabelWrapper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatTabLabelWrapper, selectors: [["", "matTabLabelWrapper", ""]], hostVars: 3, hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatTabLabelWrapper.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matTabLabelWrapper]',
                inputs: ['disabled'],
                host: {
                    '[class.mat-tab-disabled]': 'disabled',
                    '[attr.aria-disabled]': '!!disabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Config used to bind passive event listeners */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.normalizePassiveListenerOptions)({ passive: true });
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */
const EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */
const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */
const HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */
class MatPaginatedTabHeader {
    constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._animationMode = _animationMode;
        /** The distance in pixels that the tab labels should be translated to the left. */
        this._scrollDistance = 0;
        /** Whether the header should scroll to the selected index after the view has been checked. */
        this._selectedIndexChanged = false;
        /** Emits when the component is destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        /** Whether the controls for pagination should be displayed */
        this._showPaginationControls = false;
        /** Whether the tab list can be scrolled more towards the end of the tab label list. */
        this._disableScrollAfter = true;
        /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
        this._disableScrollBefore = true;
        /** Stream that will stop the automated scrolling. */
        this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        /**
         * Whether pagination should be disabled. This can be used to avoid unnecessary
         * layout recalculations if it's known that pagination won't be required.
         */
        this.disablePagination = false;
        this._selectedIndex = 0;
        /** Event emitted when the option is selected. */
        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted when a label is focused. */
        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
        _ngZone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(_elementRef.nativeElement, 'mouseleave')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed))
                .subscribe(() => {
                this._stopInterval();
            });
        });
    }
    /** The index of the active tab. */
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value);
        if (this._selectedIndex != value) {
            this._selectedIndexChanged = true;
            this._selectedIndex = value;
            if (this._keyManager) {
                this._keyManager.updateActiveItem(value);
            }
        }
    }
    ngAfterViewInit() {
        // We need to handle these events manually, because we want to bind passive event listeners.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed))
            .subscribe(() => {
            this._handlePaginatorPress('before');
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed))
            .subscribe(() => {
            this._handlePaginatorPress('after');
        });
    }
    ngAfterContentInit() {
        const dirChange = this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(null);
        const resize = this._viewportRuler.change(150);
        const realign = () => {
            this.updatePagination();
            this._alignInkBarToSelectedTab();
        };
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusKeyManager(this._items)
            .withHorizontalOrientation(this._getLayoutDirection())
            .withHomeAndEnd()
            .withWrap();
        this._keyManager.updateActiveItem(this._selectedIndex);
        // Defer the first call in order to allow for slower browsers to lay out the elements.
        // This helps in cases where the user lands directly on a page with paginated tabs.
        typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign();
        // On dir change or window resize, realign the ink bar and update the orientation of
        // the key manager if the direction has changed.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(dirChange, resize, this._items.changes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed)).subscribe(() => {
            // We need to defer this to give the browser some time to recalculate
            // the element dimensions. The call has to be wrapped in `NgZone.run`,
            // because the viewport change handler runs outside of Angular.
            this._ngZone.run(() => Promise.resolve().then(realign));
            this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
        });
        // If there is a change in the focus key manager we need to emit the `indexFocused`
        // event in order to provide a public event that notifies about focus changes. Also we realign
        // the tabs container by scrolling the new focused tab into the visible section.
        this._keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this._setTabFocus(newFocusIndex);
        });
    }
    ngAfterContentChecked() {
        // If the number of tab labels have changed, check if scrolling should be enabled
        if (this._tabLabelCount != this._items.length) {
            this.updatePagination();
            this._tabLabelCount = this._items.length;
            this._changeDetectorRef.markForCheck();
        }
        // If the selected index has changed, scroll to the label and check if the scrolling controls
        // should be disabled.
        if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);
            this._checkScrollingControls();
            this._alignInkBarToSelectedTab();
            this._selectedIndexChanged = false;
            this._changeDetectorRef.markForCheck();
        }
        // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
        // then translate the header to reflect this.
        if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();
            this._scrollDistanceChanged = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this._stopScrolling.complete();
    }
    /** Handles keyboard events on the header. */
    _handleKeydown(event) {
        // We don't handle any key bindings with a modifier key.
        if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event)) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ENTER:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.SPACE:
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                    this._itemSelected(event);
                }
                break;
            default:
                this._keyManager.onKeydown(event);
        }
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */
    _onContentChanges() {
        const textContent = this._elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this._currentTextContent) {
            this._currentTextContent = textContent || '';
            // The content observer runs outside the `NgZone` by default, which
            // means that we need to bring the callback back in ourselves.
            this._ngZone.run(() => {
                this.updatePagination();
                this._alignInkBarToSelectedTab();
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */
    updatePagination() {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateTabScrollPosition();
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
            return;
        }
        this._keyManager.setActiveItem(value);
    }
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    _isValidIndex(index) {
        if (!this._items) {
            return true;
        }
        const tab = this._items ? this._items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */
    _setTabFocus(tabIndex) {
        if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
        }
        if (this._items && this._items.length) {
            this._items.toArray()[tabIndex].focus();
            // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.
            const containerEl = this._tabListContainer.nativeElement;
            const dir = this._getLayoutDirection();
            if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
            }
            else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
        }
    }
    /** The layout direction of the containing app. */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
    _updateTabScrollPosition() {
        if (this.disablePagination) {
            return;
        }
        const scrollDistance = this.scrollDistance;
        const translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
        // Don't use `translate3d` here because we don't want to create a new layer. A new layer
        // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
        // and ripples will exceed the boundaries of the visible tab bar.
        // See: https://github.com/angular/components/issues/10276
        // We round the `transform` here, because transforms with sub-pixel precision cause some
        // browsers to blur the content of the element.
        this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
        // Setting the `transform` on IE will change the scroll offset of the parent, causing the
        // position to be thrown off in some cases. We have to reset it ourselves to ensure that
        // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
        // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
        if (this._platform.TRIDENT || this._platform.EDGE) {
            this._tabListContainer.nativeElement.scrollLeft = 0;
        }
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    get scrollDistance() { return this._scrollDistance; }
    set scrollDistance(value) {
        this._scrollTo(value);
    }
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollHeader(direction) {
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        // Move the scroll distance one-third the length of the tab list's viewport.
        const scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
        return this._scrollTo(this._scrollDistance + scrollAmount);
    }
    /** Handles click events on the pagination arrows. */
    _handlePaginatorClick(direction) {
        this._stopInterval();
        this._scrollHeader(direction);
    }
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollToLabel(labelIndex) {
        if (this.disablePagination) {
            return;
        }
        const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
        if (!selectedLabel) {
            return;
        }
        // The view length is the visible width of the tab labels.
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        const { offsetLeft, offsetWidth } = selectedLabel.elementRef.nativeElement;
        let labelBeforePos, labelAfterPos;
        if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = offsetLeft;
            labelAfterPos = labelBeforePos + offsetWidth;
        }
        else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
            labelBeforePos = labelAfterPos - offsetWidth;
        }
        const beforeVisiblePos = this.scrollDistance;
        const afterVisiblePos = this.scrollDistance + viewLength;
        if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkPaginationEnabled() {
        if (this.disablePagination) {
            this._showPaginationControls = false;
        }
        else {
            const isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
            if (!isEnabled) {
                this.scrollDistance = 0;
            }
            if (isEnabled !== this._showPaginationControls) {
                this._changeDetectorRef.markForCheck();
            }
            this._showPaginationControls = isEnabled;
        }
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkScrollingControls() {
        if (this.disablePagination) {
            this._disableScrollAfter = this._disableScrollBefore = true;
        }
        else {
            // Check if the pagination arrows should be activated.
            this._disableScrollBefore = this.scrollDistance == 0;
            this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _getMaxScrollDistance() {
        const lengthOfTabList = this._tabList.nativeElement.scrollWidth;
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        return (lengthOfTabList - viewLength) || 0;
    }
    /** Tells the ink-bar to align itself to the current label wrapper */
    _alignInkBarToSelectedTab() {
        const selectedItem = this._items && this._items.length ?
            this._items.toArray()[this.selectedIndex] : null;
        const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedLabelWrapper) {
            this._inkBar.alignToElement(selectedLabelWrapper);
        }
        else {
            this._inkBar.hide();
        }
    }
    /** Stops the currently-running paginator interval.  */
    _stopInterval() {
        this._stopScrolling.next();
    }
    /**
     * Handles the user pressing down on one of the paginators.
     * Starts scrolling the header after a certain amount of time.
     * @param direction In which direction the paginator should be scrolled.
     */
    _handlePaginatorPress(direction, mouseEvent) {
        // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
        // null check the `button`, but we do it so we don't break tests that use fake events.
        if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
            return;
        }
        // Avoid overlapping timers.
        this._stopInterval();
        // Start a timer after the delay and keep firing based on the interval.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
            // Keep the timer going until something tells it to stop or the component is destroyed.
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this._stopScrolling, this._destroyed)))
            .subscribe(() => {
            const { maxScrollDistance, distance } = this._scrollHeader(direction);
            // Stop the timer if we've reached the start or the end.
            if (distance === 0 || distance >= maxScrollDistance) {
                this._stopInterval();
            }
        });
    }
    /**
     * Scrolls the header to a given position.
     * @param position Position to which to scroll.
     * @returns Information on the current scroll distance and the maximum.
     */
    _scrollTo(position) {
        if (this.disablePagination) {
            return { maxScrollDistance: 0, distance: 0 };
        }
        const maxScrollDistance = this._getMaxScrollDistance();
        this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this._scrollDistanceChanged = true;
        this._checkScrollingControls();
        return { maxScrollDistance, distance: this._scrollDistance };
    }
}
MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) { return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
MatPaginatedTabHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatPaginatedTabHeader, inputs: { disablePagination: "disablePagination" } });
MatPaginatedTabHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
MatPaginatedTabHeader.propDecorators = {
    disablePagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, { disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class with all of the `MatTabHeader` functionality.
 * @docs-private
 */
class _MatTabHeaderBase extends MatPaginatedTabHeader {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        this._disableRipple = false;
    }
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value); }
    _itemSelected(event) {
        event.preventDefault();
    }
}
_MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) { return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
_MatTabHeaderBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatTabHeaderBase, inputs: { disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatTabHeaderBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
_MatTabHeaderBase.propDecorators = {
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, { disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
class MatTabHeader extends _MatTabHeaderBase {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    }
}
MatTabHeader.ɵfac = function MatTabHeader_Factory(t) { return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
MatTabHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTabHeader, selectors: [["mat-tab-header"]], contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, viewQuery: function MatTabHeader_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatInkBar, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    } }, hostAttrs: [1, "mat-tab-header"], hostVars: 4, hostBindings: function MatTabHeader_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    } }, inputs: { selectedIndex: "selectedIndex" }, outputs: { selectFocusedIndex: "selectFocusedIndex", indexFocused: "indexFocused" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 13, vars: 8, consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]], template: function MatTabHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() { return ctx._handlePaginatorClick("before"); })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) { return ctx._handlePaginatorPress("before", $event); })("touchend", function MatTabHeader_Template_div_touchend_0_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) { return ctx._handleKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) { return ctx._handlePaginatorPress("after", $event); })("click", function MatTabHeader_Template_div_click_10_listener() { return ctx._handlePaginatorClick("after"); })("touchend", function MatTabHeader_Template_div_touchend_10_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.CdkObserveContent, MatInkBar], styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"], encapsulation: 2 });
MatTabHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
MatTabHeader.propDecorators = {
    _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatTabLabelWrapper, { descendants: false },] }],
    _inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatInkBar, { static: true },] }],
    _tabListContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['tabListContainer', { static: true },] }],
    _tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['tabList', { static: true },] }],
    _nextPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['nextPaginator',] }],
    _previousPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['previousPaginator',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-tab-header',
                template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
                inputs: ['selectedIndex'],
                outputs: ['selectFocusedIndex', 'indexFocused'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
                host: {
                    'class': 'mat-tab-header',
                    '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
                },
                styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, { _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatTabLabelWrapper, { descendants: false }]
        }], _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatInkBar, { static: true }]
        }], _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabListContainer', { static: true }]
        }], _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabList', { static: true }]
        }], _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['nextPaginator']
        }], _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['previousPaginator']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class with all of the `MatTabNav` functionality.
 * @docs-private
 */
class _MatTabNavBase extends MatPaginatedTabHeader {
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        this._disableRipple = false;
        /** Theme color of the nav bar. */
        this.color = 'primary';
    }
    /** Background color of the tab nav. */
    get backgroundColor() { return this._backgroundColor; }
    set backgroundColor(value) {
        const classList = this._elementRef.nativeElement.classList;
        classList.remove(`mat-background-${this.backgroundColor}`);
        if (value) {
            classList.add(`mat-background-${value}`);
        }
        this._backgroundColor = value;
    }
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value); }
    _itemSelected() {
        // noop
    }
    ngAfterContentInit() {
        // We need this to run before the `changes` subscription in parent to ensure that the
        // selectedIndex is up-to-date by the time the super class starts looking for it.
        this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroyed)).subscribe(() => {
            this.updateActiveLink();
        });
        super.ngAfterContentInit();
    }
    /** Notifies the component that the active link has been changed. */
    updateActiveLink() {
        if (!this._items) {
            return;
        }
        const items = this._items.toArray();
        for (let i = 0; i < items.length; i++) {
            if (items[i].active) {
                this.selectedIndex = i;
                this._changeDetectorRef.markForCheck();
                return;
            }
        }
        // The ink bar should hide itself if no items are active.
        this.selectedIndex = -1;
        this._inkBar.hide();
    }
}
_MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) { return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
_MatTabNavBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatTabNavBase, inputs: { color: "color", backgroundColor: "backgroundColor", disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatTabNavBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
_MatTabNavBase.propDecorators = {
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabNavBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
class MatTabNav extends _MatTabNavBase {
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
        super(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
    }
}
MatTabNav.ɵfac = function MatTabNav_Factory(t) { return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
MatTabNav.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTabNav, selectors: [["", "mat-tab-nav-bar", ""]], contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLink, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, viewQuery: function MatTabNav_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatInkBar, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    } }, hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"], hostVars: 10, hostBindings: function MatTabNav_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    } }, inputs: { color: "color" }, exportAs: ["matTabNavBar", "matTabNav"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c9, ngContentSelectors: _c0, decls: 13, vars: 8, consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]], template: function MatTabNav_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() { return ctx._handlePaginatorClick("before"); })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) { return ctx._handlePaginatorPress("before", $event); })("touchend", function MatTabNav_Template_div_touchend_0_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) { return ctx._handleKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) { return ctx._handlePaginatorPress("after", $event); })("click", function MatTabNav_Template_div_click_10_listener() { return ctx._handlePaginatorClick("after"); })("touchend", function MatTabNav_Template_div_touchend_10_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.CdkObserveContent, MatInkBar], styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"], encapsulation: 2 });
MatTabNav.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
MatTabNav.propDecorators = {
    _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabLink), { descendants: true },] }],
    _inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatInkBar, { static: true },] }],
    _tabListContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['tabListContainer', { static: true },] }],
    _tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['tabList', { static: true },] }],
    _nextPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['nextPaginator',] }],
    _previousPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['previousPaginator',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabNav, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[mat-tab-nav-bar]',
                exportAs: 'matTabNavBar, matTabNav',
                inputs: ['color'],
                template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
                host: {
                    'class': 'mat-tab-nav-bar mat-tab-header',
                    '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                    '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
                    '[class.mat-accent]': 'color === "accent"',
                    '[class.mat-warn]': 'color === "warn"'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
                styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, { _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabLink), { descendants: true }]
        }], _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatInkBar, { static: true }]
        }], _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabListContainer', { static: true }]
        }], _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tabList', { static: true }]
        }], _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['nextPaginator']
        }], _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['previousPaginator']
        }] }); })();
// Boilerplate for applying mixins to MatTabLink.
class MatTabLinkMixinBase {
}
const _MatTabLinkMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)(MatTabLinkMixinBase)));
/** Base class with all of the `MatTabLink` functionality. */
class _MatTabLinkBase extends _MatTabLinkMixinBase {
    constructor(_tabNavBar, 
    /** @docs-private */ elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
        super();
        this._tabNavBar = _tabNavBar;
        this.elementRef = elementRef;
        this._focusMonitor = _focusMonitor;
        /** Whether the tab link is active or not. */
        this._isActive = false;
        this.rippleConfig = globalRippleOptions || {};
        this.tabIndex = parseInt(tabIndex) || 0;
        if (animationMode === 'NoopAnimations') {
            this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 };
        }
    }
    /** Whether the link is active. */
    get active() { return this._isActive; }
    set active(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
        if (newValue !== this._isActive) {
            this._isActive = value;
            this._tabNavBar.updateActiveLink();
        }
    }
    /**
     * Whether ripples are disabled on interaction.
     * @docs-private
     */
    get rippleDisabled() {
        return this.disabled || this.disableRipple || this._tabNavBar.disableRipple ||
            !!this.rippleConfig.disabled;
    }
    /** Focuses the tab link. */
    focus() {
        this.elementRef.nativeElement.focus();
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.elementRef);
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.elementRef);
    }
}
_MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) { return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
_MatTabLinkBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatTabLinkBase, inputs: { active: "active" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatTabLinkBase.ctorParameters = () => [
    { type: _MatTabNavBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
_MatTabLinkBase.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTabLinkBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _MatTabNavBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Link inside of a `mat-tab-nav-bar`.
 */
class MatTabLink extends _MatTabLinkBase {
    constructor(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
        super(tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
        this._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.RippleRenderer(this, ngZone, elementRef, platform);
        this._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._tabLinkRipple._removeTriggerEvents();
    }
}
MatTabLink.ɵfac = function MatTabLink_Factory(t) { return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
MatTabLink.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatTabLink, selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]], hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"], hostVars: 7, hostBindings: function MatTabLink_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matTabLink"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatTabLink.ctorParameters = () => [
    { type: MatTabNav },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLink, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-tab-link], [matTabLink]',
                exportAs: 'matTabLink',
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                host: {
                    'class': 'mat-tab-link mat-focus-indicator',
                    '[attr.aria-current]': 'active ? "page" : null',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.tabIndex]': 'tabIndex',
                    '[class.mat-tab-disabled]': 'disabled',
                    '[class.mat-tab-label-active]': 'active'
                }
            }]
    }], function () { return [{ type: MatTabNav }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatTabsModule {
}
MatTabsModule.ɵfac = function MatTabsModule_Factory(t) { return new (t || MatTabsModule)(); };
MatTabsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatTabsModule });
MatTabsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule,
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.ObserversModule,
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.A11yModule,
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule,
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.ObserversModule,
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.A11yModule,
                ],
                // Don't export all components because some are only to be used internally.
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                    MatTabGroup,
                    MatTabLabel,
                    MatTab,
                    MatTabNav,
                    MatTabLink,
                    MatTabContent,
                ],
                declarations: [
                    MatTabGroup,
                    MatTabLabel,
                    MatTab,
                    MatInkBar,
                    MatTabLabelWrapper,
                    MatTabNav,
                    MatTabLink,
                    MatTabBody,
                    MatTabBodyPortal,
                    MatTabHeader,
                    MatTabContent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTabsModule, { declarations: function () { return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__.ObserversModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.A11yModule]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 63333:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/lead-detail/campaign-list/campaign-list.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wYWlnbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 17256:
/*!*************************************************************************!*\
  !*** ./src/app/pages/lead-detail/lead-detail.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n  top: -2px;\n}\n.readonly {\n  background-color: #9c9999 !important;\n  color: #ffffff;\n}\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n}\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #ccc;\n}\n/* Style the tab content */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.icon {\n  position: relative;\n  border: none;\n  margin: 0;\n  font-size: 1.5rem;\n  background-color: transparent;\n}\n.add {\n  top: -11px;\n  position: relative;\n  border: none;\n  background: #f2f2f2;\n  margin: 0;\n}\n.add button {\n  position: absolute;\n  top: -52px;\n  right: 78px;\n  width: 110px;\n}\nh2 {\n  font-size: 13px;\n  color: #005ca2;\n  background: #F2F2F2;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  margin-top: 24px;\n  padding: 12px 24px 1px 24px;\n}\nh2 span {\n  position: absolute;\n  right: 14px;\n  top: 5px;\n}\nh2 img {\n  width: 6px;\n  height: 12px;\n  float: left;\n}\nh2 p {\n  font-size: 12px;\n  padding-left: 18px;\n}\n.btn-box {\n  text-align: end;\n}\n.btn-box input {\n  position: absolute;\n  width: 127%;\n  height: 100%;\n  opacity: 0;\n}\n.checkgroup,\n.check-input {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.ng-clear-wrapper .ng-clear {\n  cursor: pointer;\n  position: absolute;\n  right: 2rem;\n  top: 0.3rem;\n  font-size: 1.2rem;\n  color: #999;\n}\n.ng-clear-wrapper .ng-clear:hover {\n  color: #D0021B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFSO0FBSUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFLQSw0REFBQTtBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBT0EsZ0RBQUE7QUFFQTtFQUNJLHNCQUFBO0FBTEo7QUFTQSwyQ0FBQTtBQUVBO0VBQ0ksc0JBQUE7QUFQSjtBQVdBLDBCQUFBO0FBV0E7RUFDSSxjQUFBO0FBbEJKO0FBcUJBO0VBQ0ksYUFBQTtBQWxCSjtBQXFCQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBbkJKO0FBc0JBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQW5CSjtBQW9CSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbEJSO0FBc0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBbkJKO0FBb0JJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQWxCUjtBQW9CSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWxCUjtBQW9CSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQWxCUjtBQXNCQTtFQUNJLGVBQUE7QUFuQko7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQWxCUjtBQWtDQTs7RUFFSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBL0JKO0FBa0NBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUEvQko7QUFrQ0E7RUFDSSxjQUFBO0FBL0JKIiwiZmlsZSI6ImxlYWQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwIHtcclxuICAgIC5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNkVGO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xyXG4gICAgfVxyXG4gICAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVhZG9ubHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50YWIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5cclxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIHRoZSB0YWIgY29udGVudCAqL1xyXG5cclxuLnRhYiBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcblxyXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXHJcblxyXG4udGFiIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG5cclxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuXHJcbi50YWIgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG5cclxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXHJcblxyXG4vLyAudGFiLWJveCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luOiAxNnB4O1xyXG4vLyAgICAgcGFkZGluZzogMTZweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuLy8gICAgIGhlaWdodDogMzAwcHg7XHJcbi8vIH1cclxuLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmluYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIC8vIHRvcDogLTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICAgdG9wOiAtMTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC01MnB4O1xyXG4gICAgICAgIHJpZ2h0OiA3OHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMwMDVjYTI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweCAxcHggMjRweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTRweDtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWJveCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjclO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAudGFiLWRpdiB7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAvLyBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2QxZDdlMjtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4vLyAgICAgLy8gbWFyZ2luOiAtMTBweCAwIDAgMDtcclxuLy8gICAgIGJ1dHRvbiB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIGJvdHRvbTogMjBweDtcclxuLy8gICAgICAgICByaWdodDogMjBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4uY2hlY2tncm91cCxcclxuLmNoZWNrLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmctY2xlYXItd3JhcHBlciAubmctY2xlYXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbiAgICB0b3A6IDAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5uZy1jbGVhci13cmFwcGVyIC5uZy1jbGVhcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI0QwMDIxQjtcclxufSJdfQ== */";

/***/ }),

/***/ 37562:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/lead-detail/campaign-list/campaign-list.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"modal-content\" [class.remove-p]=\"isPopup\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n                    Campaign List\r\n                </div>\r\n                <div class=\"card-toolbar\">\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getList()\">\r\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\r\n                    </button> -->\r\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\r\n                        <span class=\"\">Cancel</span>\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"overlay overlay-block cursor-default modal-body\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"campaignForm\">\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Campaign Number</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"cpmNumber\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('cpmNumber')\" [class.is-valid]=\"isControlValid('cpmNumber')\" formControlName=\"cpmNumber\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Campaign Name</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"cpmName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('cpmName')\" [class.is-valid]=\"isControlValid('cpmName')\" formControlName=\"cpmName\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"modal-content\" [class.remove-p]=\"isPopup\">\r\n                        <div class=\"overlay overlay-block cursor-default modal-body\">\r\n                            <app-material-table-view [data]=\"campaignList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\" (rowselect)=\"rowSelected($event)\" [selectable]=\"isPopup\">\r\n                            </app-material-table-view>\r\n                        </div>\r\n                        <ng-container *ngIf=\"isPopup\">\r\n                            <div class=\"card-footer\">\r\n                                <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">{{\"FORM.btn_cancel\" | translate }}</button>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\" [disabled]=\"!selected.cpmNumber\">{{\"FORM.btn_next\" | translate }}</button>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>";

/***/ }),

/***/ 20275:
/*!*************************************************************************!*\
  !*** ./src/app/pages/lead-detail/lead-detail.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\" *ngIf=\"leadForm\">\r\n    <div class=\"col-12\">\r\n\r\n        <form action=\"#\" class=\"form\" [formGroup]=\"leadForm\" (ngSubmit)=\"createLead()\">\r\n            <div class=\"card card-custom gutter-b\">\r\n                <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n                    <div class=\"card-title\">\r\n                        <h3 class=\"card-label left-border-image\">{{\"FORM.lead_detail\" | translate}}</h3>\r\n                    </div>\r\n                    <div class=\"card-toolbar\">\r\n                        <button type=\"button\" *ngIf=\"isDetail\" class=\"icon\" (click)=\"toggleAccordion('Detail')\">\r\n                            <span class=\"flaticon2-back\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"!isDetail\" class=\"icon ml-2\" (click)=\"toggleAccordion('Detail')\">\r\n                            <span class=\"flaticon2-down\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body px-10 py-3\" [ngClass]=\"isDetail ? 'active' : 'inactive'\">\r\n                    <div>\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.lead_id\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm \" name=\"leadId\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('leadId')\" [class.is-valid]=\"isControlValid('leadId')\" formControlName=\"leadId\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.phone_number\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" (change)=\"calculateLeadQuality()\" name=\"phoneNo\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('phoneNo')\" [class.is-valid]=\"isControlValid('phoneNo')\" formControlName=\"phoneNo\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.subject\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"subject\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('subject')\" [class.is-valid]=\"isControlValid('subject')\" formControlName=\"subject\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">  {{\"FORM.open_date\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <div class=\"input-group \">\r\n                                            <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" formControlName=\"openedDate\" [matDatepicker]=\"openDate\" readonly>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"openDate\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #openDate disabled=\"true\"></mat-datepicker>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.name\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"contactName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('contactName')\" [class.is-valid]=\"isControlValid('contactName')\" formControlName=\"contactName\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.act_date\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <div class=\"input-group \">\r\n                                            <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" formControlName=\"activationDate\" [matDatepicker]=\"activitionDate\" readonly>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"activitionDate\">\r\n                                            </mat-datepicker-toggle>\r\n                                            <mat-datepicker #activitionDate disabled=\"true\"></mat-datepicker>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-2 col-form-label\">{{\"FORM.precontact\" | translate}}</label>\r\n                                    <div class=\"col-sm-10 checkgroup\">\r\n                                        <div class=\"check-input\">\r\n                                            <label class=\"col-form-label\">SMS</label>\r\n                                            <input type=\"checkbox\" formControlName=\"sms\">\r\n                                        </div>\r\n                                        <div class=\"check-input\">\r\n                                            <label class=\"col-form-label\">Email</label>\r\n                                            <input type=\"checkbox\" formControlName=\"pemail\">\r\n                                        </div>\r\n                                        <div class=\"check-input\">\r\n                                            <label class=\"col-form-label\">Phone</label>\r\n                                            <input type=\"checkbox\" formControlName=\"phone\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.type\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality('typeCode')\" [class.is-invalid]=\"isControlInvalid('typeCode')\" [class.is-valid]=\"isControlValid('typeCode')\" [items]=\"typeOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"typeCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">  {{\"FORM.close_date\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <div class=\"input-group \">\r\n                                            <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" formControlName=\"closedDate\" [matDatepicker]=\"closeDate\" readonly>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"closeDate\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #closeDate disabled=\"true\"></mat-datepicker>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" [readonly]=\"true\" [class.is-invalid]=\"isControlInvalid('statusCode')\" [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.exp_date\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <div class=\"input-group \">\r\n                                            <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" formControlName=\"expirationDate\" [matDatepicker]=\"expDate\">\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"expDate\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #expDate></mat-datepicker>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.occupation\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('occupationCode')\" [class.is-valid]=\"isControlValid('occupationCode')\" [items]=\"occupationOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"occupationCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.company\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('companyCode')\" [class.is-valid]=\"isControlValid('companyCode')\" [items]=\"companyOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"companyCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.state\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality('state')\" [class.is-invalid]=\"isControlInvalid('stateCode')\" [class.is-valid]=\"isControlValid('stateCode')\" [items]=\"stateOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"stateCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.district\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality('district')\" [class.is-invalid]=\"isControlInvalid('districtCode')\" [class.is-valid]=\"isControlValid('districtCode')\" [items]=\"distinctOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"districtCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.township\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality()\" [class.is-invalid]=\"isControlInvalid('townshipCode')\" [class.is-valid]=\"isControlValid('townshipCode')\" [items]=\"townshipOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"townshipCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.validity_period\" | translate}}</label>\r\n\r\n                                    <div class=\"col-sm-8\">\r\n                                        <div class=\"input-group \">\r\n                                            <input type=\"text\" readonly class=\"form-control form-control-sm\" name=\"validityPeriod\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('validityPeriod')\" [class.is-valid]=\"isControlValid('validityPeriod')\" formControlName=\"validityPeriod\" />\r\n                                            <!-- <label class=\"col-sm-4 col-form-label\">Days</label> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.distribution_channel\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality()\" [class.is-invalid]=\"isControlInvalid('channelCode')\" [class.is-valid]=\"isControlValid('channelCode')\" [items]=\"channelOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"channelCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.assign_to\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <!-- <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('assignTo')\" [class.is-valid]=\"isControlValid('assignTo')\" [items]=\"assignToOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"assignTo\">\r\n                                        </ng-select> -->\r\n                                        <input type=\"text\" readonly class=\"form-control form-control-sm\" name=\"assignToName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('assignToName')\" [class.is-valid]=\"isControlValid('assignToName')\" formControlName=\"assignToName\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.product\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality('product')\" [class.is-invalid]=\"isControlInvalid('productId')\" [class.is-valid]=\"isControlValid('productId')\" [items]=\"productOption2\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"productId\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.email\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"email\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('email')\" [class.is-valid]=\"isControlValid('email')\" formControlName=\"email\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.campaign_name\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\" (click)=\"viewCampaignList()\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm \" (change)=\"calculateLeadQuality()\" name=\"campaignName\" readonly autocomplete=\"off\" formControlName=\"campaignName\" />\r\n                                        <span class=\"ng-clear-wrapper\" (click)=\"clearDate('campaignName');$event.stopPropagation()\" title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.identity_type\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('identityType')\" [class.is-valid]=\"isControlValid('identityType')\" [items]=\"identityTypeOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"identityType\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.campaign_id\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"campaignNo\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('campaignNo')\" [class.is-valid]=\"isControlValid('campaignNo')\" formControlName=\"campaignNo\" />\r\n                                        <span class=\"ng-clear-wrapper\" (click)=\"clearDate('campaignNo');$event.stopPropagation()\" title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.nrc_frc_passport\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" *ngIf=\"leadForm.get('identityType').value == 'NRC'\" class=\"form-control form-control-sm \" name=\"identityNumber\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('identityNumber')\" (click)=\"openNRCModal()\" [class.is-valid]=\"isControlValid('identityNumber')\"\r\n                                            formControlName=\"identityNumber\" readonly />\r\n                                        <input type=\"text\" *ngIf=\"leadForm.get('identityType').value != 'NRC'\" class=\"form-control form-control-sm \" name=\"identityNumber\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('identityNumber')\" [class.is-valid]=\"isControlValid('identityNumber')\"\r\n                                            formControlName=\"identityNumber\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.source\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <ng-select class=\"ng-custom-select\" (change)=\"calculateScore(leadForm.value.sourceCode,null)\" [class.is-invalid]=\"isControlInvalid('sourceCode')\" [class.is-valid]=\"isControlValid('sourceCode')\" [items]=\"sourceOption\" bindLabel=\"value\" bindValue=\"code\"\r\n                                            formControlName=\"sourceCode\">\r\n                                        </ng-select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.existing_customer\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <!-- <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('existingCustomerName')\"  [class.is-valid]=\"isControlValid('existingCustomerName')\" [items]=\"existingOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"existingCustomerName\">\r\n                                            </ng-select>  (click)=\"viewExistingCustomer()\"  -->\r\n                                        <input type=\"text\" class=\"form-control form-control-sm \" name=\"existingCustomerName\" autocomplete=\"off\" readonly formControlName=\"existingCustomerName\" />\r\n                                        <span class=\"ng-clear-wrapper\" (click)=\"clearDate('existingCustomerName');$event.stopPropagation()\" title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\" style=\"align-items: center\">\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-4 col-form-label\">{{\"FORM.referral_customer\" | translate}}</label>\r\n                                    <div class=\"col-sm-8\" (click)=\"viewExistingCustomer('ref')\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" name=\"referralCustomerName\" readonly autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('referralCustomerName')\" [class.is-valid]=\"isControlValid('referralCustomerName')\" readonly formControlName=\"referralCustomerName\"\r\n                                        />\r\n                                        <span class=\"ng-clear-wrapper\" (click)=\"clearDate('referralCustomerName');$event.stopPropagation()\" title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <h3 class=\"card-label left-border-image\">{{\"FORM.more_detail\" | translate}}</h3>\r\n\r\n                    <div class=\"row\" style=\"align-items: center\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"row\" style=\"align-items: center\">\r\n\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5 col-form-label\">{{\"FORM.estimate_m_income\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <input type=\"text\" class=\"form-control form-control-sm\" name=\"monthlyIncome\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('monthlyIncome')\" [class.is-valid]=\"isControlValid('monthlyIncome')\" formControlName=\"monthlyIncome\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5 col-form-label\">{{\"FORM.facebook_acc\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <input type=\"text\" class=\"form-control form-control-sm\" name=\"facebookAcc\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('facebookAcc')\" [class.is-valid]=\"isControlValid('facebookAcc')\" formControlName=\"facebookAcc\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"align-items: center\">\r\n\r\n\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5 col-form-label\">{{\"FORM.martial_status\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('maritalStatus')\" [class.is-valid]=\"isControlValid('maritalStatus')\" [items]=\"maritialOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"maritalStatus\">\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5  col-form-label\">{{\"FORM.financial_plan\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <input type=\"text\" class=\"form-control form-control-sm\" name=\"financialPlan\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('financialPlan')\" [class.is-valid]=\"isControlValid('financialPlan')\" formControlName=\"financialPlan\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"align-items: center\">\r\n\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5  col-form-label\">{{\"FORM.no_childern\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <input type=\"number\" class=\"form-control form-control-sm\" name=\"numberOfChildren\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('numberOfChildren')\" [class.is-valid]=\"isControlValid('numberOfChildren')\" formControlName=\"numberOfChildren\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5  col-form-label\">{{\"FORM.existing_insurance_coverage\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <input type=\"text\" class=\"form-control form-control-sm\" name=\"existingInsuranceCoverage\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('existingInsuranceCoverage')\" [class.is-valid]=\"isControlValid('existingInsuranceCoverage')\" formControlName=\"existingInsuranceCoverage\"\r\n                                            />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"align-items: center\">\r\n\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5  col-form-label\">{{\"FORM.existing_insurance_plan\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <input type=\"text\" class=\"form-control form-control-sm\" name=\"existingInsurancePlan\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('existingInsurancePlan')\" [class.is-valid]=\"isControlValid('existingInsurancePlan')\" formControlName=\"existingInsurancePlan\"\r\n                                            />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5  col-form-label\">{{\"FORM.score\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <input type=\"text\" class=\"form-control form-control-sm\" name=\"score\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('score')\" [class.is-valid]=\"isControlValid('score')\" formControlName=\"score\" readonly />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"align-items: center\">\r\n\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5  col-form-label\">{{\"FORM.asset\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <input type=\"text\" class=\"form-control form-control-sm\" name=\"asset\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('asset')\" [class.is-valid]=\"isControlValid('asset')\" formControlName=\"asset\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5  col-form-label\">{{\"FORM.prospect_customer\" | translate}}</label>\r\n                                        <!--  (click)=\"viewExistingCustomer('prosp')\" -->\r\n                                        <div class=\"col-sm-5\"  (click)=\"viewExistingCustomer('prosp')\">\r\n                                            <input type=\"text\" readonly class=\"form-control form-control-sm \" name=\"prospectCustomer\" autocomplete=\"off\" formControlName=\"prospectCustomer\" />\r\n                                            <span class=\"ng-clear-wrapper\" *ngIf=\"!isAddProspect\" (click)=\"clearDate('prospectCustomer');$event.stopPropagation()\" title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\r\n\r\n                                        </div>\r\n                                        <div class=\"col-sm-2\" *ngIf=\"!isAddProspect\">\r\n                                            <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"viewProspectCustomer()\">\r\n                                                <span class=\"flaticon2-plus\"></span>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"align-items: center\">\r\n\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5  col-form-label\">{{\"FORM.lost_reason\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <textarea type=\"text\" readonly class=\"form-control form-control-sm\" name=\"lostReason\" autocomplete=\"off\" formControlName=\"lostReason\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-sm-5 col-form-label\">{{\"FORM.reject_reaosn\" | translate}}</label>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <textarea type=\"text\" readonly class=\"form-control form-control-sm\" name=\"reason\" autocomplete=\"off\" formControlName=\"reason\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <hr>\r\n\r\n                    </div>\r\n                    <div class=\"mt-2\">\r\n                        <div class=\"row\" style=\"align-items: center;  justify-content: flex-end;\">\r\n                            <!-- <div class=\"col-sm-8\" *ngIf=\"leadForm.value.statusCode=='02'  \">\r\n                            </div> -->\r\n                            <div class=\"col-sm-2\" *ngIf=\"leadForm.getRawValue().statusCode=='02'\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-primary ml-2\" style=\"width: 100%;\" (click)=\"updateLeadStatus('03')\">\r\n                                    <span class=\"\">{{\"FORM.btn_approve\" | translate}}</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"col-sm-2\" *ngIf=\"leadForm.getRawValue().statusCode=='02' \">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-primary ml-2\" style=\"width: 100%;\" (click)=\"updateLeadStatus('04')\">\r\n                                    <span class=\"\">{{\"FORM.btn_reject\" | translate}}</span>\r\n                                </button>\r\n                            </div>\r\n                            <!-- <div class=\"col-sm-8\" *ngIf=\"leadForm.value.statusCode=='03'\">isValidWin\r\n                            </div> -->\r\n                            <!-- <div class=\"col-sm-2\" *ngIf=\"leadForm.getRawValue().statusCode=='03' && applicationList.length > 0\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-primary ml-2\" style=\"width: 100%;\" (click)=\"updateLeadStatus('05')\">\r\n                                    <span class=\"\">{{\"FORM.btn_win\" | translate}}</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"col-sm-2\" *ngIf=\"leadForm.getRawValue().statusCode=='03'\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-primary ml-2\" style=\"width: 100%;\" (click)=\"updateLeadStatus('06')\">\r\n                                    <span class=\"\">{{\"FORM.btn_lost\" | translate}}</span>\r\n                                </button>\r\n                            </div> -->\r\n                            <div class=\"col-sm-2\" *ngIf=\"leadForm.getRawValue().statusCode =='03'\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-primary ml-2\" style=\"width: 100%;\" (click)=\"updateLeadStatus('save')\">\r\n                                    <span class=\"\">{{\"FORM.btn_save\" | translate}}</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"col-sm-2\" *ngIf=\"leadForm.getRawValue().statusCode =='03'\">\r\n                                <button type=\"button\" class=\"btn btn-sm btn-secondary ml-2\" style=\"width: 100%;\" (click)=\"updateLeadStatus('cancel')\">\r\n                                    <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <ng-container *ngIf=\"!isPopup && statusCode>2\">\r\n            <div class=\"card card-custom gutter-b\" *ngIf=\"fnaAccess.view\">\r\n                <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n                    <div class=\"card-title\">\r\n                        <h3 class=\"card-label left-border-image\">FNA</h3>\r\n                    </div>\r\n                    <div class=\"card-toolbar\">\r\n                        <button type=\"button\" *ngIf=\"statusCode==3 && (isExisting || isProspectCustomer) && fnaAccess.create\" class=\"btn btn-primary btn-circle\" (click)=\"add('FNA')\">\r\n                            <span class=\"flaticon2-plus\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"isFNA\" class=\"icon\" (click)=\"toggleAccordion('FNA')\">\r\n                            <span class=\"flaticon2-back\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"!isFNA\" class=\"icon ml-2\" (click)=\"toggleAccordion('FNA')\">\r\n                            <span class=\"flaticon2-down\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body px-10 py-3\" [ngClass]=\"isFNA ? 'active' : 'inactive'\">\r\n\r\n\r\n                    <section>\r\n\r\n                        <app-material-table-view #fna [data]=\"fnaList\" [colum]=\"FNAELEMENT_COL\" [displayedColumns]=\"FNAdisplayedColumns\" [selectable]=\"isPopup\" (emitter)=\"actionBtn($event, 'FNA')\">\r\n                        </app-material-table-view>\r\n\r\n                    </section>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"card card-custom gutter-b\" *ngIf=\"activityAccess.view\">\r\n                <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n                    <div class=\"card-title\">\r\n                        <h3 class=\"card-label left-border-image\">Activity</h3>\r\n                    </div>\r\n                    <div class=\"card-toolbar\">\r\n                        <button type=\"button\" *ngIf=\"statusCode==3 && (isExisting || isProspectCustomer) && activityAccess.create\" class=\"btn btn-primary btn-circle\" (click)=\"add('Activity')\">\r\n                            <span class=\"flaticon2-plus\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"isActivity\" class=\"icon\" (click)=\"toggleAccordion('Activity')\">\r\n                            <span class=\"flaticon2-back icon\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"!isActivity\" class=\"icon ml-2\" (click)=\"toggleAccordion('Activity')\">\r\n                            <span class=\"flaticon2-down icon\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body px-10 py-3\" [ngClass]=\"isActivity ? 'active' : 'inactive'\">\r\n\r\n                    <section>\r\n\r\n                        <app-material-table-view #activity [data]=\"activityList\" [colum]=\"ACTIVITY_ELEMENT_COL\" [displayedColumns]=\"ACTIVITYdisplayedColumns\" [selectable]=\"isPopup\" (emitter)=\"actActionBtn($event)\">\r\n                        </app-material-table-view>\r\n\r\n                    </section>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"card card-custom gutter-b\" *ngIf=\"quoAccess.view\">\r\n                <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n                    <div class=\"card-title\">\r\n                        <h3 class=\"card-label left-border-image\">Quotation</h3>\r\n                    </div>\r\n                    <div class=\"card-toolbar\">\r\n                        <button type=\"button\" *ngIf=\"statusCode==3 && (isExisting || isProspectCustomer) && quoAccess.create\" class=\"btn btn-primary btn-circle\" (click)=\"add('Quotation')\">\r\n                            <span class=\"flaticon2-plus\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"isQuotation\" class=\"icon\" (click)=\"toggleAccordion('Quotation')\">\r\n                            <span class=\"flaticon2-back icon\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"!isQuotation\" class=\"icon ml-2\" (click)=\"toggleAccordion('Quotation')\">\r\n                            <span class=\"flaticon2-down icon\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body px-10 py-3\" [ngClass]=\"isQuotation ? 'active' : 'inactive'\">\r\n\r\n\r\n                    <section>\r\n\r\n                        <app-material-table-view #quotation [data]=\"quatationList\" [colum]=\"QUOTATION_ELEMENT_COL\" [displayedColumns]=\"QuotationdisplayedColumns\" (emitter)=\"actionBtn($event, 'QUO')\" [selectable]=\"isPopup\">\r\n                        </app-material-table-view>\r\n\r\n                    </section>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"card card-custom gutter-b\" *ngIf=\"policyAccess.view\">\r\n                <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n                    <div class=\"card-title\">\r\n                        <h3 class=\"card-label left-border-image\">Application</h3>\r\n                    </div>\r\n                    <div class=\"card-toolbar\">\r\n                        <button type=\"button\" *ngIf=\"statusCode==3 && (isExisting || isProspectCustomer) && policyAccess.create\" class=\"btn btn-primary btn-circle\" (click)=\"add('Application')\">\r\n                            <span class=\"flaticon2-plus\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"isApplication\" class=\"icon\" (click)=\"toggleAccordion('Application')\">\r\n                            <span class=\"flaticon2-back icon\"></span>\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"!isApplication\" class=\"icon ml-2\" (click)=\"toggleAccordion('Application')\">\r\n                            <span class=\"flaticon2-down icon\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body px-10 py-3\">\r\n\r\n                    <section [ngClass]=\"isApplication ? 'active' : 'inactive'\">\r\n\r\n                        <app-material-table-view #application [data]=\"applicationList\" [colum]=\"APPLICATION_ELEMENT_COL\" [displayedColumns]=\"ApplicationdisplayedColumns\" (emitter)=\"actionBtn($event, 'APP')\" [selectable]=\"isPopup\">\r\n                        </app-material-table-view>\r\n\r\n                    </section>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"card card-custom gutter-b\">\r\n                <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n                    <div class=\"card-title\">\r\n                        <h3 class=\"card-label left-border-image\">Attachment</h3>\r\n                    </div>\r\n                    <div class=\"card-toolbar\">\r\n                        <div>\r\n                            <!-- <button class=\"btn btn-primary ml-2 btn-circle\">\r\n                            <input #fileInput type=\"file\" id=\"file1\" (click)=\"fileInput.value = null\" value=\"\"\r\n                                (change)=\"importHCPDocument($event)\"><span class=\"flaticon2-plus\"></span>\r\n                            </button> -->\r\n                            <button type=\"button\" *ngIf=\"statusCode==3 && (isExisting || isProspectCustomer)\" class=\"btn btn-primary btn-circle\" (click)=\"addAttachment()\">\r\n                                <span class=\"flaticon2-plus\"></span>\r\n                            </button>\r\n                        </div>\r\n\r\n                        <button type=\"button\" *ngIf=\"isAttachment\" class=\"icon\" (click)=\"toggleAccordion('Attachment')\">\r\n                            <span class=\"flaticon2-back icon\"></span>\r\n\r\n                        </button>\r\n                        <button type=\"button\" *ngIf=\"!isAttachment\" class=\"icon ml-2\" (click)=\"toggleAccordion('Attachment')\">\r\n                            <span class=\"flaticon2-down icon\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body px-10 py-3\">\r\n\r\n\r\n                    <section [ngClass]=\"isAttachment ? 'active' : 'inactive'\">\r\n\r\n                        <app-material-table-view #attachment [data]=\"attachmentList\" [colum]=\"ATTACHMENT_ELEMENT_COL\" [displayedColumns]=\"AttachmentdisplayedColumns\" (emitter)=\"actionBtn($event,'ATT')\" [selectable]=\"isPopup\">\r\n                        </app-material-table-view>\r\n\r\n                    </section>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_lead-detail_lead-detail_module_ts.js.map