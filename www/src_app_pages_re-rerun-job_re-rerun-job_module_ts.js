"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_re-rerun-job_re-rerun-job_module_ts"],{

/***/ 95016:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/error-details/error-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDetailsComponent": () => (/* binding */ ErrorDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_error_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./error-details.component.html */ 53075);
/* harmony import */ var _error_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-details.component.scss */ 17104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);





let ErrorDetailsComponent = class ErrorDetailsComponent {
    constructor(ngModal) {
        this.ngModal = ngModal;
    }
    ngOnInit() {
        // console.log(this.data);
        this.data.errorDescription = (this.data.logMsg + "").split(',');
    }
    closeModal() {
        this.ngModal.dismiss();
    }
    reRun() {
        this.ngModal.dismiss({ type: 'rerun' });
    }
};
ErrorDetailsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
ErrorDetailsComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ErrorDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-error-details',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_error_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_details_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorDetailsComponent);



/***/ }),

/***/ 80129:
/*!**************************************************!*\
  !*** ./src/app/pages/re-rerun-job/list.const.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CRM_COL": () => (/* binding */ CRM_COL),
/* harmony export */   "CRM_DISPLAYCOL": () => (/* binding */ CRM_DISPLAYCOL),
/* harmony export */   "SALE_COL": () => (/* binding */ SALE_COL),
/* harmony export */   "SALE_DISPLAY_COL": () => (/* binding */ SALE_DISPLAY_COL)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const CRM_COL = [
    {
        title: "Job Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "jobType"
    },
    {
        title: "Job Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "jobNameValue"
    },
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "runDate",
        isDateTime: true
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "statusValue",
        isTitle: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            view: true,
            rerun: true,
        }
    },
];
const CRM_DISPLAYCOL = [
    "jobType",
    "jobNameValue",
    "runDate",
    'statusValue',
    "actions",
];
const SALE_COL = [
    {
        title: "Job Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "jobType"
    },
    {
        title: "Job Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "jobName"
    },
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "runDate",
        isFromatDate: true
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "status",
        isTitle: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            view: true,
            rerun: true,
        }
    },
];
const SALE_DISPLAY_COL = [
    "jobType",
    "jobName",
    "runDate",
    'status',
    "actions",
];


/***/ }),

/***/ 38239:
/*!*******************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReRerunJobPageRoutingModule": () => (/* binding */ ReRerunJobPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _re_rerun_job_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./re-rerun-job.page */ 27915);




const routes = [
    {
        path: '',
        component: _re_rerun_job_page__WEBPACK_IMPORTED_MODULE_0__.ReRerunJobPage
    }
];
let ReRerunJobPageRoutingModule = class ReRerunJobPageRoutingModule {
};
ReRerunJobPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReRerunJobPageRoutingModule);



/***/ }),

/***/ 15261:
/*!***********************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReRerunJobPageModule": () => (/* binding */ ReRerunJobPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _re_rerun_job_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./re-rerun-job-routing.module */ 38239);
/* harmony import */ var _re_rerun_job_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./re-rerun-job.page */ 27915);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 70380);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);
/* harmony import */ var _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-details/error-details.component */ 95016);











let ReRerunJobPageModule = class ReRerunJobPageModule {
};
ReRerunJobPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__.LanguageModule,
            _re_rerun_job_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReRerunJobPageRoutingModule
        ],
        declarations: [_re_rerun_job_page__WEBPACK_IMPORTED_MODULE_1__.ReRerunJobPage, _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_4__.ErrorDetailsComponent],
        providers: []
    })
], ReRerunJobPageModule);



/***/ }),

/***/ 27915:
/*!*********************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReRerunJobPage": () => (/* binding */ ReRerunJobPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_re_rerun_job_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./re-rerun-job.page.html */ 72093);
/* harmony import */ var _re_rerun_job_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./re-rerun-job.page.scss */ 72370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-details/error-details.component */ 95016);
/* harmony import */ var _list_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.const */ 80129);
/* harmony import */ var _re_run_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./re-run.service */ 64751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2014);












let ReRerunJobPage = class ReRerunJobPage {
    constructor(reRunService, modalService, cdf, alertService) {
        this.reRunService = reRunService;
        this.modalService = modalService;
        this.cdf = cdf;
        this.alertService = alertService;
        this.typeOption = [
            { code: '', value: 'All' },
            { code: 'CRM', value: 'Management Portal' },
            { code: 'SALE', value: 'Sale Portal' },
        ];
        this.nameOption = [
            { code: '', value: 'All' },
            { code: 'Create Update Party', value: 'Create / Update Party' },
            { code: 'Renewal Policy', value: 'Renewal Policy' },
            { code: 'Update Policy Status', value: 'Update Policy Status' }
        ];
        this.statusOption = [
            { code: '', value: 'All' },
            { code: 'FAIL', value: 'Failed' },
            { code: 'SUCCESS', value: 'Success' },
        ];
        this.listFromCRM = [];
        this.listFromSale = [];
        this.isCRM = false;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_list_const__WEBPACK_IMPORTED_MODULE_5__.CRM_COL));
        this.displayedColumns = JSON.parse(JSON.stringify(_list_const__WEBPACK_IMPORTED_MODULE_5__.CRM_DISPLAYCOL));
        this.ELEMENT_COL_SALE = JSON.parse(JSON.stringify(_list_const__WEBPACK_IMPORTED_MODULE_5__.SALE_COL));
        this.displayedColumnsSale = JSON.parse(JSON.stringify(_list_const__WEBPACK_IMPORTED_MODULE_5__.SALE_DISPLAY_COL));
    }
    ngOnInit() {
        this.loadForm();
        // this.getList()
    }
    ngAfterViewInit() {
        this.getList();
    }
    loadForm() {
        this.reRunForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
            typeCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
        });
    }
    getList() {
        // this.reRunService.getReRunList(this.reRunForm.getRawValue())
        //   .toPromise()
        //   .then((res: any) => {
        //     console.log(res);
        // if(res)
        this.reRunService.getReRunListByType(this.reRunForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((x) => {
            return x.map((data) => {
                data.statusValue = data.status == "FAIL" ? "FAILED" : data.status;
                data.jobNameValue = data.jobName == "RunTCSAPIByScheduler" ? "Create / Update Party" : data.jobName;
                return data;
            });
        })).toPromise().then((res) => {
            if (res) {
                console.log("res", res);
                this.listFromCRM = res;
                this.cdf.detectChanges();
                this.matTableCRM.reChangeData();
                if (this.reRunForm.controls.typeCode.value == 'CRM') {
                    this.isCRM = true;
                }
                else {
                    this.isCRM = false;
                }
            }
        });
        // });
    }
    actionBtn(event) {
        console.log(event);
        if (event.cmd == "view") {
            this.viewErrorDetail(event.data);
        }
        if (event.cmd == "rerun") {
            if (event.data.status != "FAIL") {
                this.alertService.activate('This job was already successful!', 'Warning Message');
                return false;
            }
            this.alertService.activate('Are you sure want to re-run?', 'Warning Message').then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    if (event.data.jobType == "CRM")
                        this.reRunCRM(event.data);
                    else {
                        if (event.data.jobName == "Renewal Policy") {
                            this.reRunRenewal();
                        }
                        else
                            this.reRunPolicyStatus(event.data);
                    }
                }
            }));
        }
    }
    reRunRenewal() {
        this.reRunService.reRunRenewal().toPromise().then((res) => {
            console.log(res);
            if (res) {
                this.alertService.activate('This job was re-run successful', 'Success Message');
                this.getList();
            }
        });
    }
    reRunPolicyStatus(data) {
        this.reRunService.reRunPolicyStatus(data.runDate).toPromise().then((res) => {
            if (res) {
                this.alertService.activate('This job was re-run successful', 'Success Message');
                this.getList();
            }
        });
    }
    reRunCRM(data) {
        this.reRunService.reRunCRM(data.runDate).toPromise().then((res) => {
            if (res) {
                this.alertService.activate('This job was re-run successful', 'Success Message');
                this.getList();
            }
        });
    }
    viewErrorDetail(data) {
        let modalRef;
        modalRef = this.modalService.open(_error_details_error_details_component__WEBPACK_IMPORTED_MODULE_4__.ErrorDetailsComponent, { size: 'lg', backdrop: true, centered: true, scrollable: true });
        modalRef.componentInstance.data = data;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (data.status != "FAIL") {
                    this.alertService.activate('This job was already successful!', 'Warning Message');
                    return false;
                }
                this.alertService.activate('Are you sure want to re-run?', 'Warning Message').then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    if (result) {
                        if (data.jobType == "CRM")
                            this.reRunCRM(data);
                        else {
                            if (data.jobName == "Renewal Policy") {
                                this.reRunRenewal();
                            }
                            else
                                this.reRunPolicyStatus(data);
                        }
                    }
                }));
            }
        });
    }
    //for view
    isControlValid(controlName) {
        const control = this.reRunForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.reRunForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.reRunForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.reRunForm.controls[controlName];
        return control.dirty || control.touched;
    }
    cancel() {
        this.reRunForm.reset();
        this.getList();
    }
};
ReRerunJobPage.ctorParameters = () => [
    { type: _re_run_service__WEBPACK_IMPORTED_MODULE_6__.ReRunService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
ReRerunJobPage.propDecorators = {
    matTableCRM: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }],
    matTableSale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }]
};
ReRerunJobPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-re-rerun-job',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_re_rerun_job_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_re_rerun_job_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReRerunJobPage);



/***/ }),

/***/ 64751:
/*!******************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-run.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReRunService": () => (/* binding */ ReRunService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 18260);





const API_RE_RUN_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/scheduler-log/search`;
const API_RE_RUN_URL_TYPE = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/scheduler-log/type/`;
const API_RE_RUN_POLICY_STATUS_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/scheduler/status/run`;
const API_RE_RUN_RENEWAL_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/scheduler/renewal/run`;
const API_RE_RUN_CRM_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/scheduler/crm/customer/run`;
let ReRunService = class ReRunService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getReRunListByType(search = {}) {
        let url = API_RE_RUN_URL;
        let postData = {
            "endDate": "",
            "startDate": "",
            "jobName": "",
            "jobType": "",
            "status": ""
        };
        if (search.startDate) {
            postData.startDate = moment__WEBPACK_IMPORTED_MODULE_0__(search.startDate).format("YYYY-MM-DD");
        }
        if (search.endDate) {
            postData.endDate = moment__WEBPACK_IMPORTED_MODULE_0__(search.endDate).format("YYYY-MM-DD");
        }
        if (search.name) {
            postData.jobName = search.name;
        }
        if (search.typeCode) {
            postData.jobType = search.typeCode;
        }
        if (search.status) {
            postData.status = search.status;
        }
        return this.httpClient.post(url, postData);
    }
    reRunRenewal() {
        return this.httpClient.post(API_RE_RUN_RENEWAL_URL, {});
    }
    reRunPolicyStatus(date) {
        let formatDate = moment__WEBPACK_IMPORTED_MODULE_0__(date).format("YYYY-MM-DD");
        let url = API_RE_RUN_POLICY_STATUS_URL + "?date=" + formatDate;
        return this.httpClient.post(url, {});
    }
    reRunCRM(date) {
        let formatDate = moment__WEBPACK_IMPORTED_MODULE_0__(date).format("YYYY-MM-DD");
        let url = API_RE_RUN_CRM_URL + "?date=" + formatDate;
        return this.httpClient.post(url, {});
    }
};
ReRunService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ReRunService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ReRunService);



/***/ }),

/***/ 53075:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/re-rerun-job/error-details/error-details.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n      {{data.jobType=='CRM' ? \"Management Portal \" : data.jobType}}\n    </div>\n  </div>\n\n\n  <div class=\"overlay overlay-block cursor-default modal-body\">\n   \n    <div class=\"row\" style=\"align-items: center;\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Job Type</label>\n          <div class=\"col-sm-8\">\n            <div type=\"text\" class=\"form-control form-control-sm \" name=\"name\" autocomplete=\"off\">{{data.jobType=='CRM'\n              ? \"Management Portal \" : data.jobType}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"align-items: center;\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Job Name</label>\n          <div class=\"col-sm-8\">\n            <div type=\"text\" class=\"form-control form-control-sm \" name=\"name\" autocomplete=\"off\">{{data.jobName == 'RunTCSAPIByScheduler' ? \"Create / Update Party\" : data.jobName}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"align-items: center;\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-4 col-form-label\">Description</label>\n          <div class=\"col-sm-8\">\n            <div type=\"text\" class=\"form-control form-control-sm\"  name=\"name\" autocomplete=\"off\">\n              <ul class=\"error-list\">\n                <li *ngFor=\"let item of data.errorDescription\">{{item}}</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">Close</button>\n    <button type=\"button\" *ngIf=\"data.status == 'FAIL'\" class=\"btn btn-primary btn-elevate mr-2\"\n      (click)=\"reRun()\">Re-Run</button>\n  </div>\n</div>");

/***/ }),

/***/ 72093:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/re-rerun-job/re-rerun-job.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\"> {{\"FORM.rerun_list\" | translate}}</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n                        <span class=\"\">{{\"CARD.cancel\" | translate}}</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"reRunForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <app-start-end-date [formInput]=\"reRunForm\" remove-host [colClass]=\"'col-xl-4 col-sm-6'\">\n                        </app-start-end-date>\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.type\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('typeCode')\"\n                                        [class.is-valid]=\"isControlValid('typeCode')\" [items]=\"typeOption\"\n                                        bindLabel=\"value\" [clearable]=\"false\" bindValue=\"code\"\n                                        formControlName=\"typeCode\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Name</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('name')\"\n                                        [class.is-valid]=\"isControlValid('name')\" [items]=\"nameOption\"\n                                        bindLabel=\"value\" [clearable]=\"false\" bindValue=\"code\"\n                                        formControlName=\"name\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Status</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('status')\"\n                                        [class.is-valid]=\"isControlValid('status')\" [items]=\"statusOption\"\n                                        bindLabel=\"value\" [clearable]=\"false\" bindValue=\"code\"\n                                        formControlName=\"status\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\">\n            <div class=\"card-body customer-card-body\">\n                <div style=\"float:right ; margin-top:15px\" *ngIf=\"!isCRM && listFromSale.length > 0\">\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\"\n                        (click)=\"reRunRenewal()\">\n                        <span class=\"\">{{\"CARD.renewalRerun\" | translate}}</span>\n                    </button>\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"reRunPolicyStatus(listFromCRM)\">\n                    <span class=\"\">{{\"CARD.renewalPolicyStatus\" | translate}}</span>\n                </button> -->\n                </div>\n                <app-material-table-view #matTableCRM [data]=\"listFromCRM\" [colum]=\"ELEMENT_COL\"\n                    [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\">\n                </app-material-table-view>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 17104:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/error-details/error-details.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".form-group.row {\n  align-items: flex-start;\n}\n\n.error-list {\n  padding: 5px;\n}\n\n.form-control-sm {\n  padding: 0.55rem 0.75rem;\n  font-size: 0.925rem;\n  line-height: 1.8;\n  border-radius: 0.28rem;\n  background-color: #E4E6EF;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBRUUsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJlcnJvci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAucm93IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5lcnJvci1saXN0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZm9ybS1jb250cm9sLXNtIHtcblxuICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC45MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEU2RUY7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";

/***/ }),

/***/ 72370:
/*!***********************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZS1yZXJ1bi1qb2IucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_re-rerun-job_re-rerun-job_module_ts.js.map