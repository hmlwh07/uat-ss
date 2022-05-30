"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_customer-detail_customer-detail_share_module_ts"],{

/***/ 55213:
/*!*****************************************!*\
  !*** ./src/app/core/get-file-reader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFileReader": () => (/* binding */ getFileReader)
/* harmony export */ });
function getFileReader() {
    const fileReader = new FileReader();
    const zoneOriginalInstance = fileReader["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
}


/***/ }),

/***/ 12591:
/*!*************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-manage.const.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityCol": () => (/* binding */ ActivityCol),
/* harmony export */   "ActivityDisplayCol": () => (/* binding */ ActivityDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const ActivityCol = [
    {
        title: "Activity No.",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "activityNo",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Activity Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "activityType",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Activity Title",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "activityTitle",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    // {
    //   title: "Related Type",
    //   type: COLTYPE.FEILD,
    //   field: "relatedType",
    //   // amtFormat?: boolean,
    //   isTitle: true
    //   // isDate?: boolen
    // },
    {
        title: "Related To",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "relatedTo",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Assigned To",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "assignName",
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Due Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "dueDate",
        isFromatDate: true
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "status",
        isActivityStatus: true,
        // amtFormat?: boolean,
        // isTitle?: boolean
    },
    {
        title: "Customer",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "customerName",
        // amtFormat?: boolean,
        // isTitle?: boolean
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true
        }
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const ActivityDisplayCol = [
    "activityNo",
    "activityType",
    "activityTitle",
    // "relatedType",
    "relatedTo",
    "assignName",
    "dueDate",
    "status",
    "customerName",
    "actions",
];


/***/ }),

/***/ 63712:
/*!********************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailComponent": () => (/* binding */ CustomerDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customer_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-detail.component.html?ngResource */ 17595);
/* harmony import */ var _customer_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-detail.component.scss?ngResource */ 91708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 41018);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/master-data/master-data.service */ 27670);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 56289);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/menu-data.service */ 17606);
/* harmony import */ var _activity_management_list_activity_manage_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../activity-management-list/activity-manage.const */ 12591);
/* harmony import */ var _fna_list_fna_list_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fna-list/fna.list.const */ 17525);
/* harmony import */ var _form_component_custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form-component/custom-input-alert/custom-input-alert.component */ 52921);
/* harmony import */ var _form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form-component/nrc-popup/nrc-popup.page */ 42675);
/* harmony import */ var _lead_detail_FNA_list_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lead-detail/FNA-list.const */ 3777);
/* harmony import */ var _policy_list_policy_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../policy/list/policy.const */ 39641);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../products/products.component */ 97539);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../products/services/products-data.service */ 78680);
/* harmony import */ var _quotations_list_quotation_const__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../quotations/list/quotation.const */ 16537);
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer.service */ 56581);





























let CustomerDetailComponent = class CustomerDetailComponent {
    constructor(fb, location, masterDataService, route, customerService, modalService, cdf, prodctService, router, AttachmentUploadService, CustomerAttachmentService, AttachmentDownloadService, alertService, menuService) {
        this.fb = fb;
        this.location = location;
        this.masterDataService = masterDataService;
        this.route = route;
        this.customerService = customerService;
        this.modalService = modalService;
        this.cdf = cdf;
        this.prodctService = prodctService;
        this.router = router;
        this.AttachmentUploadService = AttachmentUploadService;
        this.CustomerAttachmentService = CustomerAttachmentService;
        this.AttachmentDownloadService = AttachmentDownloadService;
        this.alertService = alertService;
        this.menuService = menuService;
        this.FNAELEMENT_COL = JSON.parse(JSON.stringify(_fna_list_fna_list_const__WEBPACK_IMPORTED_MODULE_10__.FNAListCol));
        this.FNAdisplayedColumns = JSON.parse(JSON.stringify(_lead_detail_FNA_list_const__WEBPACK_IMPORTED_MODULE_13__.FNADisplayCol));
        this.ACTIVITY_ELEMENT_COL = JSON.parse(JSON.stringify(_activity_management_list_activity_manage_const__WEBPACK_IMPORTED_MODULE_9__.ActivityCol));
        this.ACTIVITYdisplayedColumns = JSON.parse(JSON.stringify(_activity_management_list_activity_manage_const__WEBPACK_IMPORTED_MODULE_9__.ActivityDisplayCol));
        this.QUOTATION_ELEMENT_COL = JSON.parse(JSON.stringify(_quotations_list_quotation_const__WEBPACK_IMPORTED_MODULE_17__.QuotationCol));
        this.QuotationdisplayedColumns = JSON.parse(JSON.stringify(_quotations_list_quotation_const__WEBPACK_IMPORTED_MODULE_17__.QuoDisplayCol));
        this.APPLICATION_ELEMENT_COL = JSON.parse(JSON.stringify(_policy_list_policy_const__WEBPACK_IMPORTED_MODULE_14__.PolicyCol));
        this.ApplicationdisplayedColumns = JSON.parse(JSON.stringify(_policy_list_policy_const__WEBPACK_IMPORTED_MODULE_14__.PolicyDisplayCol));
        this.ATTACHMENT_ELEMENT_COL = JSON.parse(JSON.stringify(_lead_detail_FNA_list_const__WEBPACK_IMPORTED_MODULE_13__.AttachmentCol));
        this.AttachmentdisplayedColumns = JSON.parse(JSON.stringify(_lead_detail_FNA_list_const__WEBPACK_IMPORTED_MODULE_13__.AttachmentDisplayCol));
        // ATTACHMENT_ELEMENT_COL = JSON.parse(JSON.stringify(FNAListCol));
        // AttachmentdisplayedColumns = JSON.parse(JSON.stringify(FNADisplayCol));
        this.fnaList = [];
        this.activityList = [];
        this.quatationList = [];
        this.applicationList = [];
        this.attachmentList = [];
        this.config = {
            name: "identityNumber"
        };
        this.toMinDate = null;
        this.fromMinDate = null;
        this.toMaxDate = null;
        this.fromMaxDate = null;
        this.isPopup = false;
        this.isLead = false;
        this.nationalityOption = [];
        this.occupationOption = [];
        this.statusOption = [];
        this.stateOption = [];
        this.districtOption = [];
        this.townshipOption = [];
        this.genderOption = [];
        this.titleOption = [];
        this.tabs = [
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
        ];
        this.isFNA = false;
        this.isApplication = false;
        this.isAttachment = false;
        this.isQuotation = false;
        this.isActivity = false;
        this.isMenuOpen = false;
        this.isMore = false;
        this.isDetail = true;
        this.description = "";
        this.cusAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_8__.defaultAccessObj;
        this.activityAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_8__.defaultAccessObj;
        this.policyAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_8__.defaultAccessObj;
        this.quoAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_8__.defaultAccessObj;
        this.attachAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_8__.defaultAccessObj;
        this.fnaAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_8__.defaultAccessObj;
        this.ACTIVITYdisplayedColumns.splice(8, 1);
        this.QuotationdisplayedColumns.splice(7, 2);
        this.ApplicationdisplayedColumns.splice(7, 1);
    }
    ngOnInit() {
        this.loadForm();
        this.route.queryParams
            .subscribe(params => {
            this.pageStatus = params.pageStatus;
            if (this.pageStatus != 'create' && !this.isPopup) {
                this.oldId = params.pageId;
                this.oldSecondaryId = params.pageSecondaryId;
                this.getOld();
            }
            else {
                this.loadForm(this.oldData);
                if (this.isLead) {
                    this.customerForm.controls['statusCode'].setValue('A');
                }
            }
        });
    }
    checkPremission() {
        this.menuService.dataAccess.subscribe((res) => {
            if (res) {
                this.cusAccess = res['customer'];
                this.activityAccess = res['activity'];
                this.policyAccess = res['application'];
                this.quoAccess = res['quotation'];
                this.fnaAccess = res['fna'];
                // this.attachAccess= 
                if (!this.cusAccess.view) {
                    this.location.back();
                }
                this.cdf.detectChanges();
            }
        });
    }
    ngAfterViewInit() {
        this.getMaster();
    }
    getNationality() {
        return this.masterDataService.getDataByType("NATIONALITY").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)([]);
        }));
        // .toPromise().then((res: any) => {
        //   if (res) {
        //     this.nationalityOption = res
        //     this.cdf.detectChanges()
        //   }
        // });
    }
    getMaster() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.forkJoin)([
            this.getTitle(),
            this.getGender(),
            this.getOccupation(),
            this.getStatus(),
            this.getState(),
            this.getNationality(),
        ]).toPromise().then((res) => {
            if (res) {
                this.titleOption = res[0];
                this.genderOption = res[1];
                this.occupationOption = res[2];
                this.statusOption = res[3];
                this.stateOption = res[4];
                this.nationalityOption = res[5];
                this.cdf.detectChanges();
            }
        });
    }
    getTitle() {
        return this.masterDataService.getDataByType("TITLE").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)([]);
        }));
        // .toPromise().then((res: any) => {
        //   if (res) {
        //     this.titleOption = res
        //     this.cdf.detectChanges()
        //   }
        // })
    }
    getGender() {
        return this.masterDataService.getDataByType("TB_GENDER").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)([]);
        }));
        //  .toPromise().then((res: any) => {
        //     if (res) {
        //       this.genderOption = res
        //       this.cdf.detectChanges()
        //     }
        //   })
    }
    getOccupation() {
        return this.masterDataService.getDataByType("OCCUPATION").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)([]);
        }));
        // .toPromise().then((res: any) => {
        //   if (res) {
        //     this.occupationOption = res
        //     this.cdf.detectChanges()
        //   }
        // })
    }
    getStatus() {
        return this.masterDataService.getDataByType("CUST_STATUS").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)([]);
        }));
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
            return { 'code': x.codeId, 'value': x.codeName || x.codeValue };
        });
    }
    getState() {
        return this.masterDataService.getDataByType("PT_STATE", true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)([]);
        }));
        // .toPromise().then((res: any) => {
        //   if (res) {
        //     this.stateOption = res
        //     this.cdf.detectChanges()
        //   }
        // });
    }
    getDistrict(parentId) {
        this.masterDataService.getAddressDataByType("PT_DISTRICT", parentId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(x => this.getFormatOpt(x)))
            .toPromise().then((res) => {
            if (res) {
                this.districtOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getTownship(parentId) {
        this.masterDataService.getAddressDataByType("PT_TOWNSHIP", parentId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(x => this.getFormatOpt(x)))
            .toPromise().then((res) => {
            if (res) {
                this.townshipOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getOld() {
        this.customerService.findOne(this.oldId).toPromise().then((res) => {
            if (res) {
                // console.log("RESSSS", res)
                this.oldData = res;
                // this.fnaList= this.oldData.fna
                this.activityList = this.oldData.activities != null ? this.oldData.activities : [];
                this.quatationList = this.oldData.resourceQuotations != null ? this.oldData.resourceQuotations : [];
                this.applicationList = this.oldData.resourcePolicies != null ? this.oldData.resourcePolicies : [];
                this.attachmentList = this.oldData.attachments != null ? this.oldData.attachments : [];
                this.loadForm(res);
                this.onInitAddress(this.oldData);
                this.cdf.detectChanges();
                this.activitymatTable.reChangeData();
                this.fnamatTable.reChangeData();
                this.attachmentmatTable.reChangeData();
                this.quotationmatTable.reChangeData();
                this.applicationmatTable.reChangeData();
            }
        });
    }
    loadForm(oldData) {
        let disabledForm = oldData ? oldData.partyCode ? true : false : false;
        this.customerForm = null;
        this.cdf.detectChanges();
        this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
            "titleCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.titleCode : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "firstName": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.firstName : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "lastName": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.lastName : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "middleName": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.middleName : '', disabled: disabledForm }),
            "genderCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.genderCode : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "nationalityCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.nationalityCode : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "identityType": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.identityType == 'OTHER' ? "OTHERS" : oldData.identityType : 'NRC', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "identityNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.identityNumber : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "statusCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.statusCode : 'A', disabled: disabledForm || this.isLead }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "partyCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.partyCode : '', disabled: disabledForm }),
            "fatherName": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.fatherName : '', disabled: disabledForm }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]),
            "phone": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.phone : '', disabled: disabledForm }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(9)]),
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.email : '', disabled: disabledForm }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]),
            "dateOfBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: !oldData ? null : oldData.dateOfBirth ? moment__WEBPACK_IMPORTED_MODULE_2__(oldData.dateOfBirth) : null, disabled: disabledForm, }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "occupationCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.occupationCode : '', disabled: disabledForm }),
            "houseNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.houseNumber : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "road": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.road : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "blockArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.blockArea : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "townshipCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.townshipCode : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "districtCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.districtCode : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "stateCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.stateCode : '', disabled: disabledForm }, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
            "companyName": new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({ value: oldData ? oldData.companyName || "KBZMS" : 'KBZMS', disabled: true })
        });
    }
    clearDOB(type) {
        if (type == 'dateOfBirth') {
            this.customerForm.controls['dateOfBirth'].setValue(null);
        }
    }
    onInitAddress(oldData) {
        // this.getState();
        this.getDistrict(oldData.stateCode);
        this.getTownship(oldData.districtCode);
        this.cdf.detectChanges();
    }
    onChangeState() {
        this.districtOption = [];
        this.townshipOption = [];
        this.customerForm.controls['districtCode'].setValue('');
        this.customerForm.controls['townshipCode'].setValue('');
        this.getDistrict(this.customerForm.controls['stateCode'].value);
        this.cdf.detectChanges();
    }
    onChangeDistrict() {
        this.customerForm.controls['townshipCode'].setValue('');
        if (this.customerForm.controls['stateCode'].value == '') {
            this.townshipOption = [];
        }
        else {
            this.getTownship(this.customerForm.controls['districtCode'].value);
        }
        this.cdf.detectChanges();
    }
    isIdentitiyType() {
        this.customerForm.controls["identityNumber"].setValue('');
    }
    backLocation() {
        if (this.isPopup) {
            this.modalService.dismissAll();
        }
        else {
            this.loadForm(this.oldData);
            this.onInitAddress(this.oldData);
        }
    }
    doCustomer() {
        // console.log(this.customerForm.invalid);
        if (this.customerForm.invalid) {
            (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.customerForm);
            return true;
        }
        else {
            let postData = this.customerForm.getRawValue();
            if (this.isPopup) {
                this.create(postData);
            }
            else {
                if (this.pageStatus == 'create') {
                    this.create(postData);
                }
                else {
                    this.edit(postData);
                }
            }
        }
    }
    create(postData) {
        let data = Object.assign(Object.assign({}, postData), { customerId: null, individualId: null });
        this.customerService.save(data).toPromise().then((res) => {
            // console.log("RESSS", res)
            if (res) {
                if (this.isPopup) {
                    let name = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
                    this.modalService.dismissAll({ data: { name: name, customerId: res }, type: "save" });
                }
                else {
                    this.alertService.activate('This record was created', 'Success Message');
                    this.location.back();
                }
            }
        });
    }
    edit(postData) {
        let data = Object.assign(Object.assign({}, postData), { customerId: this.oldId, individualId: this.oldSecondaryId });
        this.customerService.updateNoID(data).toPromise().then((res) => {
            if (res) {
                this.alertService.activate('This record was updated', 'Success Message');
                this.location.back();
            }
        });
    }
    toggleAccordion(type) {
        if (type == 'FNA') {
            this.isFNA = !this.isFNA;
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
                this.getCustomerAttachment();
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
            const modalRef = this.modalService.open(_products_products_component__WEBPACK_IMPORTED_MODULE_15__.ProductsComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = 'modal';
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == 'save') {
                        this.prodctService.creatingCustomer = this.oldData;
                        this.prodctService.createingProd = res.data;
                        this.prodctService.editData = null;
                        this.prodctService.referenceID = null;
                        this.prodctService.viewType = 'policy';
                        this.prodctService.type = 'policy';
                        this.router.navigateByUrl("/product-form");
                    }
                }
            });
        }
        if (type == 'Quotation') {
            const modalRef = this.modalService.open(_products_products_component__WEBPACK_IMPORTED_MODULE_15__.ProductsComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = 'modal';
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == 'save') {
                        this.prodctService.createingProd = res.data;
                        this.prodctService.creatingCustomer = this.oldData;
                        this.prodctService.viewType = 'quotation';
                        this.prodctService.editData = null;
                        this.prodctService.referenceID = null;
                        this.prodctService.type = 'quotation';
                        this.router.navigateByUrl("/product-form");
                    }
                }
            });
        }
        if (type == 'Activity') {
            this.router.navigate(["/activity/activity-management-detail"], { queryParams: { customerId: this.oldData.customerId, name: this.oldData.firstName, pageStatus: 'create' } });
        }
    }
    openModal() {
        let modalRef;
        modalRef = this.modalService.open(_form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_12__.NrcPopupPage, { size: 'xl', backdrop: false });
        modalRef.componentInstance.config = this.config;
        modalRef.componentInstance.group = this.customerForm;
    }
    actionBtn(event) {
        if (event.cmd == 'download') {
            this.AttachmentDownloadService.getDownload(event.data.id, event.data.fileName);
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
                    });
                }
            });
        }
    }
    addAttachment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__awaiter)(this, void 0, void 0, function* () {
            let modalRef;
            modalRef = this.modalService.open(_form_component_custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_11__.CustomInputAlertComponent, { size: 'lg', backdrop: false });
            modalRef.componentInstance.type = 'description';
            modalRef.componentInstance.oldId = this.oldId;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    // console.log("RESSS", res)
                    this.description = res.description;
                    this.AttachmentUploadService.save(res.data).toPromise().then((res) => {
                        if (res) {
                            // console.log("RESFILE", res)
                            let postData = {
                                attachmentId: res,
                                description: this.description,
                                refDocNo: this.oldId,
                                refDocType: 'CUST'
                            };
                            this.CustomerAttachmentService.save(postData).toPromise().then((res) => {
                                if (res) {
                                    // console.log("RESFILE", res)
                                    this.getCustomerAttachment();
                                }
                            });
                        }
                    }).catch(e => {
                    });
                }
            });
            //   }
            // })
        });
    }
    getCustomerAttachment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__awaiter)(this, void 0, void 0, function* () {
            this.CustomerAttachmentService.getAttachmentListRef(this.oldId, 'CUST').toPromise().then((res) => {
                if (res) {
                    // console.log("RESFILE", res)
                    this.attachmentList = res;
                    this.attachmentmatTable.reChangeData();
                    this.cdf.detectChanges();
                }
            });
        });
    }
    //for View
    isControlValid(controlName) {
        const control = this.customerForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.customerForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.customerForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.customerForm.controls[controlName];
        return control.dirty || control.touched;
    }
};
CustomerDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_25__.Location },
    { type: src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_5__.MasterDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute },
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_18__.CustomerService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ChangeDetectorRef },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_16__.ProductDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_26__.Router },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__.AttachmentUploadService },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__.AttachmentServiceRef },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__.AttachmentDownloadService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_8__.MenuDataService }
];
CustomerDetailComponent.propDecorators = {
    fnamatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ViewChild, args: ['fna',] }],
    activitymatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ViewChild, args: ['activity',] }],
    applicationmatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ViewChild, args: ['application',] }],
    attachmentmatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ViewChild, args: ['attachment',] }],
    quotationmatTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ViewChild, args: ['quotation',] }],
    isPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.Input }],
    pageStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.Input }],
    isLead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.Input }]
};
CustomerDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.Component)({
        selector: 'app-customer-detail',
        template: _customer_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_30__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_7__.MY_FORMATS },
        ],
        styles: [_customer_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerDetailComponent);



/***/ }),

/***/ 23903:
/*!***********************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.share.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailShareModule": () => (/* binding */ CustomerDetailShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _customer_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-detail.component */ 63712);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);












let CustomerDetailShareModule = class CustomerDetailShareModule {
};
CustomerDetailShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_customer_detail_component__WEBPACK_IMPORTED_MODULE_2__.CustomerDetailComponent],
        exports: [_customer_detail_component__WEBPACK_IMPORTED_MODULE_2__.CustomerDetailComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__.LanguageModule,
            // FormComponentModule
        ]
    })
], CustomerDetailShareModule);



/***/ }),

/***/ 17525:
/*!**************************************************!*\
  !*** ./src/app/pages/fna-list/fna.list.const.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FNAListCol": () => (/* binding */ FNAListCol),
/* harmony export */   "FNAListDisplayCol": () => (/* binding */ FNAListDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const FNAListCol = [
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "createdAt",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "FNA Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "fnaType",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Conducted By",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "conductedBy",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true,
            delete: true
        }
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const FNAListDisplayCol = [
    "createdAt",
    "fnaType",
    "conductedBy",
    "actions",
];


/***/ }),

/***/ 52921:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-component/custom-input-alert/custom-input-alert.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomInputAlertComponent": () => (/* binding */ CustomInputAlertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _custom_input_alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-input-alert.component.html?ngResource */ 26914);
/* harmony import */ var _custom_input_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-input-alert.component.scss?ngResource */ 75657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 56289);
/* harmony import */ var _core_get_file_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/get-file-reader */ 55213);








let CustomInputAlertComponent = class CustomInputAlertComponent {
    constructor(fb, modal, AttachmentUploadService, cdf) {
        this.fb = fb;
        this.modal = modal;
        this.AttachmentUploadService = AttachmentUploadService;
        this.cdf = cdf;
        this.oldId = "";
        this.fileName = "";
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    save() {
        if (this.type == 'reason') {
            this.modal.dismiss(this.lostReason);
        }
        if (this.type == 'description') {
            this.modal.dismiss({ data: this.fileData, description: this.description });
        }
    }
    importDocument(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (event) {
                const file = event.target.files[0];
                // console.log(file);
                const reader = (0,_core_get_file_reader__WEBPACK_IMPORTED_MODULE_3__.getFileReader)();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    // console.log(reader);
                    if (reader.result) {
                        let base64 = reader.result.toString().split(",")[1];
                        let data = {
                            fileStr: base64,
                            fileName: file.name,
                            fileType: file.type,
                            fileSize: file.size,
                            contentType: file.type,
                            fileExtension: file.name.split('.').pop(),
                        };
                        this.fileName = file.name;
                        this.fileData = data;
                        this.cdf.detectChanges();
                    }
                    ;
                };
            }
        });
    }
    openFile() {
        this.selectedFileEl.nativeElement.click();
    }
};
CustomInputAlertComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__.AttachmentUploadService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef }
];
CustomInputAlertComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    oldId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    selectedFileEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['selectedFile',] }]
};
CustomInputAlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-custom-input-alert',
        template: _custom_input_alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_custom_input_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomInputAlertComponent);



/***/ }),

/***/ 3777:
/*!*****************************************************!*\
  !*** ./src/app/pages/lead-detail/FNA-list.const.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentCol": () => (/* binding */ AttachmentCol),
/* harmony export */   "AttachmentDisplayCol": () => (/* binding */ AttachmentDisplayCol),
/* harmony export */   "CampaignCol": () => (/* binding */ CampaignCol),
/* harmony export */   "CampaignDisplayCol": () => (/* binding */ CampaignDisplayCol),
/* harmony export */   "FNACol": () => (/* binding */ FNACol),
/* harmony export */   "FNAConstant": () => (/* binding */ FNAConstant),
/* harmony export */   "FNADisplayCol": () => (/* binding */ FNADisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const FNACol = [
    {
        title: "FNA ID",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "id"
    },
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "createdAt",
        isFromatDate: true
    },
    {
        title: "Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "fnaType"
    },
    {
        title: "Conducted By",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "createdByName"
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true,
            delete: true
        }
    },
];
const FNADisplayCol = [
    "id",
    "createdAt",
    "fnaType",
    "createdByName",
    "actions"
];
const AttachmentCol = [
    {
        title: "Description",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "description",
    },
    {
        title: "Document",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "fileName"
    },
    {
        title: "Action",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "action",
        btn: {
            download: true,
            delete: true,
        }
    },
];
const AttachmentDisplayCol = [
    "description",
    "fileName",
    "action"
];
const CampaignCol = [
    {
        title: "Campaign Number",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "cpmNumber",
    },
    {
        title: "Campaign Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "cpmName"
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "cpmStatus",
    },
    {
        title: "Owner",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "cpmOwnerName",
    },
];
const CampaignDisplayCol = [
    "cpmNumber",
    "cpmName",
    "cpmStatus",
    "cpmOwnerName",
];
class FNAConstant {
}
FNAConstant.LEAD_ID = '';


/***/ }),

/***/ 39641:
/*!***************************************************!*\
  !*** ./src/app/pages/policy/list/policy.const.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyCol": () => (/* binding */ PolicyCol),
/* harmony export */   "PolicyDisplayCol": () => (/* binding */ PolicyDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const PolicyCol = [
    {
        title: "Application ID",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "id",
    },
    {
        title: "Product Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productName",
    },
    {
        title: "Product Code",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productCode",
    },
    {
        title: "Quotation ID",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "quotationId",
    },
    {
        title: "Agent Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "agentFirstName",
    },
    {
        title: "Premium",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "premium",
        amtFormat: true,
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "status",
        isStatus: true
    },
    {
        title: "Submission Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "apiStatus",
        isApiStatus: true
    },
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "createdAt",
        isDate: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            view: true,
            edit: true,
            editOnState: true
        }
    },
];
const PolicyDisplayCol = [
    "id",
    "productName",
    "productCode",
    "agentFirstName",
    "premium",
    "status",
    "apiStatus",
    "createdAt",
    "actions",
];


/***/ }),

/***/ 59430:
/*!***************************************************************************!*\
  !*** ./src/app/pages/products/products-modal/products-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModalComponent": () => (/* binding */ ProductsModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _products_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-modal.component.html?ngResource */ 1833);
/* harmony import */ var _products_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-modal.component.scss?ngResource */ 39619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _core_get_file_reader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/get-file-reader */ 55213);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 16164);
/* harmony import */ var _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_metronic/core/services/attachment-data.service */ 56289);
/* harmony import */ var _services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/products-data.service */ 78680);












let ProductsModalComponent = class ProductsModalComponent {
    constructor(fb, modal, productService, fileUpload, loading, alertService, cdf) {
        this.fb = fb;
        this.modal = modal;
        this.productService = productService;
        this.fileUpload = fileUpload;
        this.loading = loading;
        this.alertService = alertService;
        this.cdf = cdf;
        this.prodId = "";
        this.prodName = "";
        this.lump = false;
        this.annually = false;
        this.subscriptions = [];
        this.oldData = {};
        this.Default_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/attachment-downloader`;
        this.statusCdOption = [
            {
                code: "01",
                value: "Draft"
            },
            {
                code: "02",
                value: "Active"
            },
        ];
    }
    ngOnInit() {
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            productName: [this.oldData.name || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            productCode: [this.oldData.code || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            coverName: [this.oldData.coverName || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            type: [this.oldData.type || 'GENERAL', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            stamDuty: [this.oldData.stamDuty || false, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            isAllowBackDate: [this.oldData.isAllowBackDate || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            showInList: [this.oldData.showInList || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            allowDays: [this.oldData.allowDays || null],
            ruleDate: [this.oldData.quotationDay || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            ruleType: [this.oldData.quotationRule || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            policyDay: [this.oldData.policyDay || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            policyRule: [this.oldData.policyRule || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            statusCd: [this.oldData.statusCd || "02", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            paymentFrequency: [this.oldData.paymentFrequencyType ? this.oldData.paymentFrequencyType.split(',') : null],
            icon: [this.oldData.icon ? this.oldData.icon : null],
            smallIcon: [this.oldData.smallIcon ? this.oldData.smallIcon : null],
            coverIcon: [this.oldData.coverIcon ? this.oldData.coverIcon : null],
        });
    }
    save() {
        if (this.formGroup.valid) {
            let formData = this.formGroup.value;
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
            };
            this.productService.save(data).toPromise().then(res => {
                if (res) {
                    this.modal.dismiss({ data: this.formGroup.value, type: 'save' });
                }
            });
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
    changePayment(type) {
        let value = this[type];
        let data = this.formGroup.value['paymentFrequency'] || [];
        if (value) {
            data.push(type);
        }
        else {
            let index = data.findIndex(x => x == type);
            data.splice(index, 1);
        }
        this.formGroup.controls['paymentFrequency'].setValue(data);
    }
    openFile(type) {
        if (type == "cover")
            this.selectedFileEl3.nativeElement.click();
        else if (type == "small")
            this.selectedFileEl2.nativeElement.click();
        else
            this.selectedFileEl1.nativeElement.click();
    }
    handleUpload(event, type) {
        if (event) {
            const file = event.target.files[0];
            // console.log(file);
            const reader = (0,_core_get_file_reader__WEBPACK_IMPORTED_MODULE_4__.getFileReader)();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // console.log(reader);
                if (reader.result) {
                    let base64 = reader.result.toString().split(",")[1];
                    let data = {
                        fileStr: base64,
                        fileName: file.name,
                        fileType: file.type,
                        fileSize: file.size,
                        contentType: file.type,
                        fileExtension: file.name.split('.').pop(),
                    };
                    this.loading.activate();
                    this.fileUpload.save(data).toPromise().then((res) => {
                        if (res) {
                            if (type == "cover") {
                                this.formGroup.controls['coverIcon'].setValue(res);
                            }
                            else if (type == "small") {
                                this.formGroup.controls['smallIcon'].setValue(res);
                            }
                            else {
                                this.formGroup.controls['icon'].setValue(res);
                            }
                        }
                        this.cdf.detectChanges();
                        this.loading.deactivate();
                    }).catch(e => {
                        this.loading.deactivate();
                    });
                }
                ;
            };
        }
    }
    deleteEditModal() {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.modal.dismiss({ type: 'delete' });
            }
        });
    }
};
ProductsModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal },
    { type: _services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__.AttachmentUploadService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
ProductsModalComponent.propDecorators = {
    selectedFileEl1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['selectedFile1',] }],
    selectedFileEl2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['selectedFile2',] }],
    selectedFileEl3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['selectedFile3',] }]
};
ProductsModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-products-modal',
        template: _products_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_products_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsModalComponent);



/***/ }),

/***/ 39691:
/*!********************************************************!*\
  !*** ./src/app/pages/products/products-table.const.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCol": () => (/* binding */ ProductCol),
/* harmony export */   "ProductDisplayCol": () => (/* binding */ ProductDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const ProductCol = [
    // {
    //   title: "Logo",
    //   type: COLTYPE.FEILD,
    //   field: "icon",
    //   isImg: true,
    // },
    {
        title: "Small Icon",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "smallIcon",
        isImg: true,
    },
    {
        title: "Product Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "name",
    },
    {
        title: "Product Code",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "code",
    },
    {
        title: "Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "type",
        isTitle: true,
    },
    // {
    //   title: "Stamp Duty",
    //   type: COLTYPE.FEILD,
    //   field: "stamDuty",
    //   isTitle: true,
    // },
    {
        title: "Allow Back Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "isAllowBackDate",
        isAllowBackDate: true
    },
    {
        title: "Quotation Auto Lapse Rule",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "quotationDay",
        isQuotationDay: true
    },
    {
        title: "Application Auto Lapse Rule",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "policyDay",
        isPolicyDay: true
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "statusCd",
        isProdStatus: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            // view: true,
            edit: true
        }
    },
];
const ProductDisplayCol = [
    // "id",
    // "icon",
    "smallIcon",
    "name",
    "code",
    "type",
    // "stamDuty",
    "isAllowBackDate",
    "quotationDay",
    'policyDay',
    "statusCd",
    "actions",
];


/***/ }),

/***/ 97539:
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component.html?ngResource */ 10279);
/* harmony import */ var _products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component.scss?ngResource */ 64476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _products_modal_products_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-modal/products-modal.component */ 59430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/products-data.service */ 78680);
/* harmony import */ var _products_table_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-table.const */ 39691);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/menu-data.service */ 17606);











let ProductsComponent = class ProductsComponent {
    constructor(modalService, itemService, router, cdRef, menuService) {
        this.modalService = modalService;
        this.itemService = itemService;
        this.router = router;
        this.cdRef = cdRef;
        this.menuService = menuService;
        this.type = 'page';
        this.products = [];
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_products_table_const__WEBPACK_IMPORTED_MODULE_4__.ProductCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_products_table_const__WEBPACK_IMPORTED_MODULE_4__.ProductDisplayCol));
        // selected: number = -1
        this.unsubscribe = [];
        this.show = false;
        this.prodAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_6__.defaultAccessObj;
    }
    ngOnInit() {
        if (this.type != 'page') {
            this.ELEMENT_COL.splice(8, 1);
            this.displayedColumns.splice(8, 1);
        }
        // else {
        //   this.checkPremission()
        // }
        this.show = true;
        this.getProducts();
        // const itemScb = this.itemService.items$.subscribe(data => {
        //   this.products = data.products
        // })
        // this.unsubscribe.push(itemScb);
    }
    checkPremission() {
        this.menuService.dataAccess.subscribe((res) => {
            if (res) {
                this.prodAccess = res['product_definition'];
                if (this.prodAccess.edit) {
                    this.ELEMENT_COL[8].btn.edit = false;
                }
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
    editLayout(prod) {
        this.itemService.findOne(prod.id).toPromise().then((res) => {
            if (res) {
                this.itemService.createingProd = res;
                this.itemService.type = prod.application ? 'application' : 'quotation';
                this.router.navigateByUrl("/product-form");
            }
        });
    }
    get selected() {
        let prod;
        if (this.matTable) {
            prod = this.matTable.selection.selected[0];
        }
        return prod ? prod : { id: 0 };
    }
    createOrEdit(data, id) {
        const modalRef = this.modalService.open(_products_modal_products_modal_component__WEBPACK_IMPORTED_MODULE_2__.ProductsModalComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.prodId = id;
        modalRef.componentInstance.oldData = data || {};
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.getProducts();
                    this.cdRef.detectChanges();
                }
            }
        });
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    nextProd() {
        if (this.selected.id) {
            this.itemService.findOne(this.selected.id).toPromise().then((res) => {
                // console.log(res);
                if (res) {
                    this.modalService.dismissAll({ data: res, type: "save" });
                }
            });
        }
    }
    getProducts() {
        this.itemService.getAll().toPromise().then((res) => {
            //console.log(res);
            if (res) {
                this.products = res;
                this.cdRef.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    viewDetail(item) {
        this.itemService.selectedProd = item;
        // this.itemService.type = 'quotation'
        this.itemService.viewType = 'view';
        this.router.navigateByUrl("/product/products-config/detail");
    }
    getFreq(data) {
        let val = "";
        let ary = data.split(", ");
        for (const item of ary) {
            if (item == "lump") {
                val = val.length > 2 ? val + ", Lump Sum" : "Lump Sum";
            }
            else if (item == "annually") {
                val = val.length > 2 ? val + ", Semi Annually" : "Semi Annually";
            }
        }
        return val;
    }
    actionBtn(event) {
        if (event.cmd == 'edit') {
            this.viewDetail(event.data);
        }
        else if (event.cmd == 'view') {
            this.editLayout(event.data);
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal },
    { type: _services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_6__.MenuDataService }
];
ProductsComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableViewComponent,] }]
};
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-products',
        template: _products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsComponent);



/***/ }),

/***/ 16537:
/*!**********************************************************!*\
  !*** ./src/app/pages/quotations/list/quotation.const.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoDisplayCol": () => (/* binding */ QuoDisplayCol),
/* harmony export */   "QuotationCol": () => (/* binding */ QuotationCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const QuotationCol = [
    {
        title: "Quotation ID",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "id",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Product Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productName",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Product Code",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productCode",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Agent Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "agentFirstName",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Premium",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "premium",
        amtFormat: true,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "status",
        isStatus: true
    },
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "createdAt",
        // amtFormat?: boolean,
        // isTitle?: boolean
        isDate: true
    },
    {
        title: "Application",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.TEXT,
        field: "create application",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            view: true,
            edit: true
        }
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const QuoDisplayCol = [
    "id",
    "productName",
    "productCode",
    "agentFirstName",
    "premium",
    "status",
    "createdAt",
    "create application",
    "actions",
];


/***/ }),

/***/ 91708:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.icon {\n  position: relative;\n  border: none;\n  margin: 0;\n  font-size: 1.5rem;\n  background-color: transparent;\n}\n.add {\n  top: -11px;\n  position: relative;\n  border: none;\n  background: #f2f2f2;\n  margin: 0;\n}\n.add button {\n  position: absolute;\n  top: -52px;\n  right: 78px;\n  width: 110px;\n}\n.btn-box {\n  text-align: end;\n}\n.btn-box input {\n  position: absolute;\n  width: 127%;\n  height: 100%;\n  opacity: 0;\n}\nh2 {\n  font-size: 13px;\n  color: #005ca2;\n  background: #F2F2F2;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  margin-top: 24px;\n  padding: 12px 24px 1px 24px;\n}\nh2 span {\n  position: absolute;\n  right: 14px;\n  top: 5px;\n}\nh2 img {\n  width: 6px;\n  height: 12px;\n  float: left;\n}\nh2 p {\n  font-size: 12px;\n  padding-left: 18px;\n}\n.tab-div {\n  position: relative;\n  padding: 20px 0 0 0;\n  background: #d1d7e2;\n  border-bottom: 1px solid #d2d2d2;\n  margin: -10px 0 0 0;\n}\n.tab-div button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUFSO0FBSUE7RUFDSSxjQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7QUFESjtBQUlBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFGSjtBQUtBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUZKO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURSO0FBS0E7RUFDSSxlQUFBO0FBRko7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRFI7QUFLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQUZKO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBRFI7QUFHSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURSO0FBR0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUZKO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRFIiLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwIHtcclxuICAgIC5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNkVGO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xyXG4gICAgfVxyXG4gICAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICAvLyB0b3A6IC04cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYWRkIHtcclxuICAgIHRvcDogLTExcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtNTJweDtcclxuICAgICAgICByaWdodDogNzhweDtcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tYm94IHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEyNyU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDA1Y2EyO1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMXB4IDI0cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE0cHg7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYi1kaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcclxuICAgIGJhY2tncm91bmQ6ICNkMWQ3ZTI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgIG1hcmdpbjogLTEwcHggMCAwIDA7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 75657:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/form-component/custom-input-alert/custom-input-alert.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = ".active {\n  background-color: #3699FF !important;\n  color: white;\n}\n\n.btn-box {\n  text-align: end;\n}\n\n.btn-box input {\n  position: absolute;\n  width: 127%;\n  height: 100%;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1pbnB1dC1hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFUiIsImZpbGUiOiJjdXN0b20taW5wdXQtYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjk5RkYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1ib3gge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTI3JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 39619:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/products/products-modal/products-modal.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".upload-icon-group {\n  display: flex;\n  gap: 10px;\n}\n\n.upload-icon {\n  display: flex;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  border: 1px dashed #333;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.upload-icon img {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBR0oiLCJmaWxlIjoicHJvZHVjdHMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWljb24tZ3JvdXB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLnVwbG9hZC1pY29ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgIzMzMztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 64476:
/*!*******************************************************************!*\
  !*** ./src/app/pages/products/products.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 17595:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\" *ngIf=\"customerForm\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom\" [class.gutter-b]=\"!isPopup\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\">{{pageStatus == \"create\" ? \"Create Prospect Customer\" : \"Customer Detail\"}}</h3>\r\n                </div>\r\n                <div class=\"card-toolbar\" *ngIf=\"!isPopup\">\r\n                    <button type=\"button\" *ngIf=\"isDetail\" class=\"icon\" (click)=\"toggleAccordion('Detail')\">\r\n                        <span class=\"flaticon2-back\"></span>\r\n                    </button>\r\n                    <button type=\"button\" *ngIf=\"!isDetail\" class=\"icon ml-2\" (click)=\"toggleAccordion('Detail')\">\r\n                        <span class=\"flaticon2-down\"></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body px-10 py-3\" [ngClass]=\"isDetail ? 'active' : 'inactive'\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"customerForm\" (ngSubmit)=\"doCustomer()\">\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.cs_title\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('titleCode')\" [class.is-valid]=\"isControlValid('titleCode')\" [items]=\"titleOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"titleCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.father_name\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"fatherName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('fatherName')\" [class.is-valid]=\"isControlValid('fatherName')\" formControlName=\"fatherName\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.first_name\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"firstName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('firstName')\" [class.is-valid]=\"isControlValid('firstName')\" formControlName=\"firstName\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.mobile\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"phone\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('phone')\" [class.is-valid]=\"isControlValid('phone')\" formControlName=\"phone\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.middle_name\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"middleName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('middleName')\" [class.is-valid]=\"isControlValid('middleName')\" formControlName=\"middleName\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.email\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"email\" class=\"form-control form-control-sm \" name=\"email\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('email')\" [class.is-valid]=\"isControlValid('email')\" formControlName=\"email\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.last_name\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"lastName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('lastName')\" [class.is-valid]=\"isControlValid('lastName')\" formControlName=\"lastName\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.date_of_birth\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"input-group input-group-sm \">\r\n                                        <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" formControlName=\"dateOfBirth\" [class.is-invalid]=\"isControlInvalid('dateOfBirth')\" [class.is-valid]=\"isControlValid('dateOfBirth')\" [matDatepicker]=\"picker\" readonly>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-1\">\r\n                            <button type=\"button\" style=\"width: auto;\r\n                            float: right;\r\n                            margin: 0 !important;\" (click)=\"clearDOB('dateOfBirth')\" class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.natoinality\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('nationalityCode')\" [class.is-valid]=\"isControlValid('nationalityCode')\" [items]=\"nationalityOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"nationalityCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.occupation\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('occupationCode')\" [class.is-valid]=\"isControlValid('occupationCode')\" [items]=\"occupationOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"occupationCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 col-form-label\">{{\"FORM.id_type\" | translate}}</label>\r\n                                <div class=\"col-sm-10\">\r\n                                    <div class=\"\">\r\n                                        <mat-radio-group name=\"identityType\" formControlName=\"identityType\" (click)=\"isIdentitiyType()\">\r\n                                            <mat-radio-button class=\"example-margin\" value=\"NRC\">NRC</mat-radio-button>\r\n                                            <mat-radio-button class=\"example-margin\" value=\"FRC\">FRC</mat-radio-button>\r\n                                            <mat-radio-button class=\"example-margin\" value=\"PASSPORT\">Passport\r\n                                            </mat-radio-button>\r\n                                            <mat-radio-button class=\"example-margin\" value=\"OTHERS\">Others\r\n                                            </mat-radio-button>\r\n                                        </mat-radio-group>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.id_no\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" *ngIf=\"customerForm.get('identityType').value == 'NRC'\" class=\"form-control form-control-sm \" name=\"identityNumber\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('identityNumber')\" (click)=\"openModal()\" [class.is-valid]=\"isControlValid('identityNumber')\"\r\n                                        formControlName=\"identityNumber\" readonly />\r\n                                    <input type=\"text\" *ngIf=\"customerForm.get('identityType').value != 'NRC'\" class=\"form-control form-control-sm \" name=\"identityNumber\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('identityNumber')\" [class.is-valid]=\"isControlValid('identityNumber')\"\r\n                                        formControlName=\"identityNumber\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.gender\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('genderCode')\" [class.is-valid]=\"isControlValid('genderCode')\" [items]=\"genderOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"genderCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('statusCode')\" [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.state\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('stateCode')\" (change)=\"onChangeState()\" [class.is-valid]=\"isControlValid('stateCode')\" [items]=\"stateOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"stateCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.district\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('districtCode')\" (change)=\"onChangeDistrict()\" [class.is-valid]=\"isControlValid('districtCode')\" [items]=\"districtOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"districtCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.party_code\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" readonly=\"true\" name=\"partyCode\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('partyCode')\" [class.is-valid]=\"isControlValid('partyCode')\" formControlName=\"partyCode\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.house\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"houseNumber\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('houseNumber')\" [class.is-valid]=\"isControlValid('houseNumber')\" formControlName=\"houseNumber\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.road\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"road\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('road')\" [class.is-valid]=\"isControlValid('road')\" formControlName=\"road\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.block_area\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"blockArea\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('blockArea')\" [class.is-valid]=\"isControlValid('blockArea')\" formControlName=\"blockArea\" />\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.township\" | translate}} </label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('townshipCode')\" [class.is-valid]=\"isControlValid('townshipCode')\" [items]=\"townshipOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"townshipCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.company_name\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"companyName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('companyName')\" [class.is-valid]=\"isControlValid('companyName')\" formControlName=\"companyName\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" style=\"text-align: right;\">\r\n                        <button type=\"button\" class=\"btn btn-light btn-elevate\" (click)=\"backLocation()\">{{\"FORM.btn_cancel\" | translate}}</button>\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-elevate mx-2\" *ngIf=\"cusAccess.edit\">{{\"FORM.btn_save\" | translate}}</button>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-container *ngIf=\"!isPopup && oldId\">\r\n    <div class=\"card card-custom gutter-b\" *ngIf=\"fnaAccess.view\">\r\n        <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n            <div class=\"card-title\">\r\n                <h3 class=\"card-label left-border-image\">FNA</h3>\r\n            </div>\r\n            <div class=\"card-toolbar\">\r\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"add('FNA')\">\r\n                    <span class=\"flaticon2-plus\"></span>\r\n                </button> -->\r\n                <button type=\"button\" *ngIf=\"isFNA\" class=\"icon\" (click)=\"toggleAccordion('FNA')\">\r\n                    <span class=\"flaticon2-back\"></span>\r\n                </button>\r\n                <button type=\"button\" *ngIf=\"!isFNA\" class=\"icon ml-2\" (click)=\"toggleAccordion('FNA')\">\r\n                    <span class=\"flaticon2-down\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body px-10 py-3\" [ngClass]=\"isFNA ? 'active' : 'inactive'\">\r\n\r\n\r\n            <section>\r\n\r\n                <app-material-table-view #fna [data]=\"fnaList\" [colum]=\"FNAELEMENT_COL\" [displayedColumns]=\"FNAdisplayedColumns\" [selectable]=\"isPopup\">\r\n                </app-material-table-view>\r\n\r\n            </section>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"card card-custom gutter-b\" *ngIf=\"activityAccess.view\">\r\n        <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n            <div class=\"card-title\">\r\n                <h3 class=\"card-label left-border-image\">Activity</h3>\r\n            </div>\r\n            <div class=\"card-toolbar\">\r\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"add('Activity')\">\r\n                    <span class=\"flaticon2-plus\"></span>\r\n                </button> -->\r\n                <button type=\"button\" *ngIf=\"isActivity\" class=\"icon\" (click)=\"toggleAccordion('Activity')\">\r\n                    <span class=\"flaticon2-back icon\"></span>\r\n                </button>\r\n                <button type=\"button\" *ngIf=\"!isActivity\" class=\"icon ml-2\" (click)=\"toggleAccordion('Activity')\">\r\n                    <span class=\"flaticon2-down icon\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body px-10 py-3\" [ngClass]=\"isActivity ? 'active' : 'inactive'\">\r\n\r\n            <section>\r\n\r\n                <app-material-table-view #activity [data]=\"activityList\" [colum]=\"ACTIVITY_ELEMENT_COL\" [displayedColumns]=\"ACTIVITYdisplayedColumns\" [selectable]=\"isPopup\">\r\n                </app-material-table-view>\r\n\r\n            </section>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card card-custom gutter-b\" *ngIf=\"quoAccess.view\">\r\n        <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n            <div class=\"card-title\">\r\n                <h3 class=\"card-label left-border-image\">Quotation</h3>\r\n            </div>\r\n            <div class=\"card-toolbar\">\r\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"add('Quotation')\">\r\n                    <span class=\"flaticon2-plus\"></span>\r\n                </button> -->\r\n                <button type=\"button\" *ngIf=\"isQuotation\" class=\"icon\" (click)=\"toggleAccordion('Quotation')\">\r\n                    <span class=\"flaticon2-back icon\"></span>\r\n                </button>\r\n                <button type=\"button\" *ngIf=\"!isQuotation\" class=\"icon ml-2\" (click)=\"toggleAccordion('Quotation')\">\r\n                    <span class=\"flaticon2-down icon\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body px-10 py-3\" [ngClass]=\"isQuotation ? 'active' : 'inactive'\">\r\n\r\n\r\n            <section>\r\n\r\n                <app-material-table-view #quotation [data]=\"quatationList\" [colum]=\"QUOTATION_ELEMENT_COL\" [displayedColumns]=\"QuotationdisplayedColumns\" [selectable]=\"isPopup\">\r\n                </app-material-table-view>\r\n\r\n            </section>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"card card-custom gutter-b\" *ngIf=\"policyAccess.view\">\r\n        <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n            <div class=\"card-title\">\r\n                <h3 class=\"card-label left-border-image\">Application</h3>\r\n            </div>\r\n            <div class=\"card-toolbar\">\r\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"add('Application')\">\r\n                    <span class=\"flaticon2-plus\"></span>\r\n                </button> -->\r\n                <button type=\"button\" *ngIf=\"isApplication\" class=\"icon\" (click)=\"toggleAccordion('Application')\">\r\n                    <span class=\"flaticon2-back icon\"></span>\r\n                </button>\r\n                <button type=\"button\" *ngIf=\"!isApplication\" class=\"icon ml-2\" (click)=\"toggleAccordion('Application')\">\r\n                    <span class=\"flaticon2-down icon\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body px-10 py-3\">\r\n\r\n            <section [ngClass]=\"isApplication ? 'active' : 'inactive'\">\r\n\r\n                <app-material-table-view #application [data]=\"applicationList\" [colum]=\"APPLICATION_ELEMENT_COL\" [displayedColumns]=\"ApplicationdisplayedColumns\" [selectable]=\"isPopup\">\r\n                </app-material-table-view>\r\n\r\n            </section>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"card card-custom gutter-b\">\r\n        <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n            <div class=\"card-title\">\r\n                <h3 class=\"card-label left-border-image\">Attachment</h3>\r\n            </div>\r\n            <div class=\"card-toolbar\">\r\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"addAttachment()\">\r\n                    <span class=\"flaticon2-plus\"></span>\r\n                </button> -->\r\n                <button type=\"button\" *ngIf=\"isAttachment\" class=\"icon\" (click)=\"toggleAccordion('Attachment')\">\r\n                    <span class=\"flaticon2-back icon\"></span>\r\n\r\n                </button>\r\n                <button type=\"button\" *ngIf=\"!isAttachment\" class=\"icon ml-2\" (click)=\"toggleAccordion('Attachment')\">\r\n                    <span class=\"flaticon2-down icon\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body px-10 py-3\">\r\n\r\n\r\n            <section [ngClass]=\"isAttachment ? 'active' : 'inactive'\">\r\n\r\n                <app-material-table-view #attachment [data]=\"attachmentList\" [colum]=\"ATTACHMENT_ELEMENT_COL\" [displayedColumns]=\"AttachmentdisplayedColumns\" (emitter)=\"actionBtn($event)\" [selectable]=\"isPopup\">\r\n                </app-material-table-view>\r\n            </section>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</ng-container>";

/***/ }),

/***/ 26914:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/form-component/custom-input-alert/custom-input-alert.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='reason'&& status=='04'\">\r\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Reject Reason</span>\r\n        </div>\r\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='reason'&& status=='06'\">\r\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Lost Reason</span>\r\n        </div>\r\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='description'\">\r\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Attachment Description</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"overlay overlay-block cursor-default modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\" *ngIf=\"type=='reason'\">\r\n                <textarea type=\"text\" class=\" form-control form-control-sm\" name=\"lostReason\" placeholder=\"Reason\" autocomplete=\"off\" [(ngModel)]=\"lostReason\"></textarea>\r\n            </div>\r\n            <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\r\n                <input type=\"text\" class=\" form-control form-control-sm\" name=\"description\" placeholder=\"{{'FORM.description' | translate}}\" autocomplete=\"off\" [(ngModel)]=\"description\">\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top: 25px;\">\r\n            <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\r\n                <input style=\"display: none;\" type=\"file\" class=\"form-control form-control-sm\" name=\"phone\" #selectedFile (change)=\"importDocument($event)\" />\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"fileName\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openFile()\">{{\"FORM.btn_browse\" | translate}}</button>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\r\n                    <input type=\"file\" #selectedFile (change)=\"importHCPDocument($event)\" />\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" *ngIf=\"type=='description'\" class=\"btn btn-light btn-elevate mr-2\" [disabled]=\"!description\" (click)=\"save()\">{{\"FORM.btn_save\" | translate}}</button>\r\n                <button type=\"button\" *ngIf=\"type=='reason'\" class=\"btn btn-light btn-elevate mr-2\" [disabled]=\"!lostReason\" (click)=\"save()\">{{\"FORM.btn_save\" | translate}}</button>\r\n                <button class=\"btn btn-primary btn-elevate\" (click)=\"modal.dismiss()\">{{\"FORM.btn_cancel\" | translate}}</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>";

/***/ }),

/***/ 1833:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/products/products-modal/products-modal.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      {{prodId ? \"Edit\" : \"Create a new product\"}} {{prodName}}\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <!-- Product name -->\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">{{\"TABLE.Product Name\"|translate}}</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"productName\" placeholder=\"{{'TABLE.Product Name'|translate}}\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('productName')\"\r\n              [class.is-valid]=\"isControlValid('productName')\" formControlName=\"productName\" />\r\n            <!-- <div class=\"feedback\">Enter Your <b>Product Name</b> </div> -->\r\n          </div>\r\n          <!-- Product name -->\r\n          <!-- Product code -->\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">{{\"TABLE.Product Code\"|translate}}</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"productCode\" placeholder=\"{{'TABLE.Product Code'|translate}}\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('productCode')\"\r\n              [class.is-valid]=\"isControlValid('productCode')\" formControlName=\"productCode\" />\r\n            <!-- <div class=\"feedback\">Enter Your <b>Product Code</b></div> -->\r\n          </div>\r\n          <!-- Product code -->\r\n          <!-- Cover name -->\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Cover Name</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"coverName\" placeholder=\"Cover Name\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('coverName')\"\r\n              [class.is-valid]=\"isControlValid('coverName')\" formControlName=\"coverName\" />\r\n            <!-- <div class=\"feedback\">Enter Your <b>Product Code</b></div> -->\r\n          </div>\r\n          <!-- Cover name -->\r\n          <!-- Product Type -->\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Product Type</label>\r\n            <select class=\"form-control form-control-sm\" name=\"type\" placeholder=\"Product code\" autocomplete=\"off\"\r\n              [class.is-invalid]=\"isControlInvalid('type')\" [class.is-valid]=\"isControlValid('type')\"\r\n              formControlName=\"type\">\r\n              <option value=\"GENERAL\">General Insurance</option>\r\n              <option value=\"LIFE\">Life Insurance</option>\r\n            </select>\r\n            <!-- <div class=\"feedback\">Select Your <b>Product type</b></div> -->\r\n          </div>\r\n          <!-- Product Type -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"example-margin form-label\">{{\"TABLE.Allow Back Date\"|translate}}</label>\r\n            <mat-radio-group formControlName=\"isAllowBackDate\">\r\n              <mat-radio-button class=\"example-margin\" value=\"no\">No</mat-radio-button>\r\n              <mat-radio-button class=\"example-margin\" value=\"yes\">Yes</mat-radio-button>\r\n              <!-- <mat-radio-button class=\"example-margin\" value=\"30days\">Yes and max 30 days</mat-radio-button> -->\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-6 col-form-label text-md-right\">Stamp Duty</label>\r\n            <div class=\"col-md-6 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input type=\"checkbox\" name=\"stamDuty\" formControlName=\"stamDuty\" />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"example-margin form-label\">{{\"TABLE.Show In List\"|translate}}</label>\r\n            <mat-radio-group formControlName=\"showInList\">\r\n              <mat-radio-button class=\"example-margin\" value=\"no\">No</mat-radio-button>\r\n              <mat-radio-button class=\"example-margin\" value=\"yes\">Yes</mat-radio-button>\r\n              <!-- <mat-radio-button class=\"example-margin\" value=\"30days\">Yes and max 30 days</mat-radio-button> -->\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"formGroup.value.isAllowBackDate == 'yes'\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Rule Days</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm\" name=\"allowDays\" placeholder=\"Days\"\r\n              autocomplete=\"off\" formControlName=\"allowDays\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">{{\"TABLE.Quotation Auto Lapse Rule\"|translate}}</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm\" name=\"ruleDate\" placeholder=\"Dates\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('ruleDate')\"\r\n              [class.is-valid]=\"isControlValid('ruleDate')\" formControlName=\"ruleDate\" />\r\n            <div class=\"feedback\">Enter Rule<b> Period</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Period Type</label>\r\n            <!-- <input type=\"text\" class=\"form-control form-control-sm\" name=\"ruleType\"\r\n              placeholder=\"Date Type\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('ruleType')\"\r\n              [class.is-valid]=\"isControlValid('ruleType')\" formControlName=\"ruleType\" /> -->\r\n            <select class=\"form-control form-control-sm\" name=\"ruleType\"\r\n              [class.is-invalid]=\"isControlInvalid('ruleType')\" [class.is-valid]=\"isControlValid('ruleType')\"\r\n              formControlName=\"ruleType\">\r\n              <option value=\"\">Please Select</option>\r\n              <option value=\"DAY\">Days</option>\r\n              <option value=\"MONTH\">Months</option>\r\n            </select>\r\n            <div class=\"feedback\">Select Rule <b>Period Type</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> &nbsp;</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"ruleDate\" autocomplete=\"off\"\r\n              value=\"after creation dates\" readonly />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">{{\"TABLE.Application Auto Lapse Rule\"|translate}}</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm\" name=\"policyDay\" placeholder=\"Dates\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('policyDay')\"\r\n              [class.is-valid]=\"isControlValid('policyDay')\" formControlName=\"policyDay\" />\r\n            <div class=\"feedback\">Enter Rule<b> Period</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Period Type</label>\r\n            <!-- <input type=\"text\" class=\"form-control form-control-sm\" name=\"ruleType\"\r\n              placeholder=\"Date Type\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('ruleType')\"\r\n              [class.is-valid]=\"isControlValid('ruleType')\" formControlName=\"ruleType\" /> -->\r\n            <select class=\"form-control form-control-sm\" name=\"policyRule\"\r\n              [class.is-invalid]=\"isControlInvalid('policyRule')\" [class.is-valid]=\"isControlValid('policyRule')\"\r\n              formControlName=\"policyRule\">\r\n              <option value=\"\">Please Select</option>\r\n              <option value=\"DAY\">Days</option>\r\n              <option value=\"MONTH\">Months</option>\r\n            </select>\r\n            <div class=\"feedback\">Select Rule <b>Period Type</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> &nbsp;</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"ruleDate\" autocomplete=\"off\"\r\n              value=\"after creation dates\" readonly />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Product Status</label>\r\n            <!-- <select class=\"form-control form-control-sm\" name=\"status\" placeholder=\"Product Status\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('statusCd')\"\r\n              [class.is-valid]=\"isControlValid('statusCd')\" formControlName=\"statusCd\">\r\n              <option value=\"01\">Draft</option>\r\n              <option value=\"02\">Active</option>\r\n            </select> -->\r\n            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('statusCd')\"\r\n              [class.is-valid]=\"isControlValid('statusCd')\" [items]=\"statusCdOption\" bindLabel=\"value\" bindValue=\"code\"\r\n              formControlName=\"statusCd\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Upload Product Icon</label>\r\n            <div class=\"upload-icon-group\">\r\n              <div class=\"upload-icon\" (click)=\"openFile('icon')\">\r\n                <img *ngIf=\"formGroup.value.icon\" [src]=\"Default_DOWNLOAD_URL+'/'+formGroup.value.icon\" alt=\"\" >\r\n                <ng-container *ngIf=\"!formGroup.value.icon\">\r\n                  <i class=\"flaticon-upload-1 icon-lg\"></i>\r\n                  <label>Icon</label>\r\n                </ng-container>\r\n                <input style=\"display: none;\" type=\"file\" #selectedFile1 (change)=\"handleUpload($event,'icon')\" />\r\n              </div>\r\n              <div class=\"upload-icon\" (click)=\"openFile('small')\">\r\n                <img *ngIf=\"formGroup.value.smallIcon\" [src]=\"Default_DOWNLOAD_URL+'/'+formGroup.value.smallIcon\" alt=\"\">\r\n                <ng-container *ngIf=\"!formGroup.value.smallIcon\">\r\n                  <i class=\"flaticon-upload-1 icon-lg\"></i>\r\n                  <label>Small Icon</label>\r\n                </ng-container>\r\n                <input style=\"display: none;\" type=\"file\" #selectedFile2 (change)=\"handleUpload($event,'small')\" />\r\n              </div>\r\n              <div class=\"upload-icon\" (click)=\"openFile('cover')\">\r\n                <img *ngIf=\"formGroup.value.coverIcon\" [src]=\"Default_DOWNLOAD_URL+'/'+formGroup.value.coverIcon\" alt=\"\">\r\n                <ng-container *ngIf=\"!formGroup.value.coverIcon\">\r\n                  <i class=\"flaticon-upload-1 icon-lg\"></i>\r\n                  <label>Cover Icon</label>\r\n                </ng-container>\r\n                <input style=\"display: none;\" type=\"file\" #selectedFile3 (change)=\"handleUpload($event,'cover')\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <!-- <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"deleteEditModal()\">Delete</button> -->\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">{{\"FORM.btn_cancel\" | translate }}</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\"\r\n      [disabled]=\"formGroup.invalid\">{{\"FORM.btn_save\" | translate }}</button>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 10279:
/*!*******************************************************************!*\
  !*** ./src/app/pages/products/products.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom \">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n          <h3 class=\"card-label left-border-image\">List of Products</h3>\r\n        </div>\r\n        <div class=\"card-toolbar\" *ngIf=\"type == 'page'\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"createOrEdit()\">\r\n            <span class=\"flaticon2-plus\"></span>\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"createOrEdit()\">Create New Product</button> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body customer-card-body\">\r\n        <!-- begin:Table -->\r\n        <ng-container *ngIf=\"show\">\r\n          <app-material-table-view [selectable]=\"type != 'page'\" [data]=\"products\" [colum]=\"ELEMENT_COL\"\r\n            [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\">\r\n          </app-material-table-view>\r\n        </ng-container>\r\n      </div>\r\n      <ng-container *ngIf=\"type != 'page'\">\r\n        <div class=\"card-footer\">\r\n          <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">{{\"FORM.btn_cancel\" | translate }}</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\"\r\n            [disabled]=\"!selected.id\">{{\"FORM.btn_next\" | translate }}</button>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_customer-detail_customer-detail_share_module_ts.js.map