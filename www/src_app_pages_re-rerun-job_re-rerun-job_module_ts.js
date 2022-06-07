"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_re-rerun-job_re-rerun-job_module_ts"],{

/***/ 16731:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/error-details/error-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDetailsComponent": () => (/* binding */ ErrorDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _error_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-details.component.html?ngResource */ 84079);
/* harmony import */ var _error_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-details.component.scss?ngResource */ 93235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);





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
        template: _error_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorDetailsComponent);



/***/ }),

/***/ 18297:
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
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

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
        field: "jobDateTime",
        // isDateTime: true
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
    "jobDateTime",
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

/***/ 70784:
/*!*******************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReRerunJobPageRoutingModule": () => (/* binding */ ReRerunJobPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _re_rerun_job_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./re-rerun-job.page */ 43361);




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

/***/ 4739:
/*!***********************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReRerunJobPageModule": () => (/* binding */ ReRerunJobPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _re_rerun_job_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./re-rerun-job-routing.module */ 70784);
/* harmony import */ var _re_rerun_job_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./re-rerun-job.page */ 43361);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 8425);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-details/error-details.component */ 16731);











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

/***/ 43361:
/*!*********************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReRerunJobPage": () => (/* binding */ ReRerunJobPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _re_rerun_job_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./re-rerun-job.page.html?ngResource */ 69317);
/* harmony import */ var _re_rerun_job_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./re-rerun-job.page.scss?ngResource */ 80859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-details/error-details.component */ 16731);
/* harmony import */ var _list_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.const */ 18297);
/* harmony import */ var _re_run_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./re-run.service */ 47926);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 50635);












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
        this.reRunService.getReRunListByType(this.reRunForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((x) => {
            return x.map((data) => {
                data.statusValue = data.status == "FAIL" ? "FAILED" : data.status;
                data.jobNameValue = data.jobName == "RunTCSAPIByScheduler" ? "Create / Update Party" : data.jobName;
                if (data.date && data.time) {
                    data.jobDateTime = data.date + "-" + data.time;
                }
                else {
                    data.jobDateTime = data.runDate;
                }
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
        template: _re_rerun_job_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_re_rerun_job_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReRerunJobPage);



/***/ }),

/***/ 47926:
/*!******************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-run.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReRunService": () => (/* binding */ ReRunService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);





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

/***/ 93235:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/error-details/error-details.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".form-group.row {\n  align-items: flex-start;\n}\n\n.error-list {\n  padding: 5px;\n}\n\n.form-control-sm {\n  padding: 0.55rem 0.75rem;\n  font-size: 0.925rem;\n  line-height: 1.8;\n  border-radius: 0.28rem;\n  background-color: #E4E6EF;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBRUUsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJlcnJvci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAucm93IHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmVycm9yLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1zbSB7XHJcblxyXG4gIHBhZGRpbmc6IDAuNTVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDAuOTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yOHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNkVGO1xyXG4gIGhlaWdodDogYXV0bztcclxufSJdfQ== */";

/***/ }),

/***/ 80859:
/*!**********************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZS1yZXJ1bi1qb2IucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 84079:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/error-details/error-details.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      {{data.jobType=='CRM' ? \"Management Portal \" : data.jobType}}\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n   \r\n    <div class=\"row\" style=\"align-items: center;\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">{{\"FORM.job_type\" | translate }}</label>\r\n          <div class=\"col-sm-8\">\r\n            <div type=\"text\" class=\"form-control form-control-sm \" name=\"name\" autocomplete=\"off\">{{data.jobType=='CRM'\r\n              ? \"Management Portal \" : data.jobType}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"align-items: center;\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">{{\"FORM.job_name\" | translate }}</label>\r\n          <div class=\"col-sm-8\">\r\n            <div type=\"text\" class=\"form-control form-control-sm \" name=\"name\" autocomplete=\"off\">{{data.jobName == 'RunTCSAPIByScheduler' ? \"Create / Update Party\" : data.jobName}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"align-items: center;\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-4 col-form-label\">{{\"FORM.description\" | translate }}</label>\r\n          <div class=\"col-sm-8\">\r\n            <div type=\"text\" class=\"form-control form-control-sm\"  name=\"name\" autocomplete=\"off\">\r\n              <ul class=\"error-list\">\r\n                <li *ngFor=\"let item of data.errorDescription\">{{item}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">{{\"FORM.btn_close\" | translate }}</button>\r\n    <button type=\"button\" *ngIf=\"data.status == 'FAIL'\" class=\"btn btn-primary btn-elevate mr-2\"\r\n      (click)=\"reRun()\">{{\"FORM.rerun_list\" | translate }}</button>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 69317:
/*!**********************************************************************!*\
  !*** ./src/app/pages/re-rerun-job/re-rerun-job.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\"> {{\"FORM.rerun_list\" | translate}}</h3>\r\n                </div>\r\n                <div class=\"card-toolbar\">\r\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\r\n                        <span class=\"\">{{\"CARD.cancel\" | translate}}</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body px-10 py-3\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"reRunForm\">\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <app-start-end-date [formInput]=\"reRunForm\" remove-host [colClass]=\"'col-xl-4 col-sm-6'\">\r\n                        </app-start-end-date>\r\n                        <div class=\"col-xl-4 col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.type\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select\"\r\n                                        [class.is-invalid]=\"isControlInvalid('typeCode')\"\r\n                                        [class.is-valid]=\"isControlValid('typeCode')\" [items]=\"typeOption\"\r\n                                        bindLabel=\"value\" [clearable]=\"false\" bindValue=\"code\"\r\n                                        formControlName=\"typeCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-xl-4 col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.name\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select\"\r\n                                        [class.is-invalid]=\"isControlInvalid('name')\"\r\n                                        [class.is-valid]=\"isControlValid('name')\" [items]=\"nameOption\"\r\n                                        bindLabel=\"value\" [clearable]=\"false\" bindValue=\"code\"\r\n                                        formControlName=\"name\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-sm-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select\"\r\n                                        [class.is-invalid]=\"isControlInvalid('status')\"\r\n                                        [class.is-valid]=\"isControlValid('status')\" [items]=\"statusOption\"\r\n                                        bindLabel=\"value\" [clearable]=\"false\" bindValue=\"code\"\r\n                                        formControlName=\"status\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b data\">\r\n            <div class=\"card-body customer-card-body\">\r\n                <div style=\"float:right ; margin-top:15px\" *ngIf=\"!isCRM && listFromSale.length > 0\">\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\"\r\n                        (click)=\"reRunRenewal()\">\r\n                        <span class=\"\">{{\"CARD.renewalRerun\" | translate}}</span>\r\n                    </button>\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"reRunPolicyStatus(listFromCRM)\">\r\n                    <span class=\"\">{{\"CARD.renewalPolicyStatus\" | translate}}</span>\r\n                </button> -->\r\n                </div>\r\n                <app-material-table-view #matTableCRM [data]=\"listFromCRM\" [colum]=\"ELEMENT_COL\"\r\n                    [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\">\r\n                </app-material-table-view>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_re-rerun-job_re-rerun-job_module_ts.js.map