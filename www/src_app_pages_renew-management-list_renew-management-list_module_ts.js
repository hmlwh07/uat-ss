"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_renew-management-list_renew-management-list_module_ts"],{

/***/ 89476:
/*!*******************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-manage.const.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityDisplayCol": () => (/* binding */ ActivityDisplayCol),
/* harmony export */   "RenewCol": () => (/* binding */ RenewCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const RenewCol = [
    {
        title: "Policy Number",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "policyNumber",
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
    // {
    //   title: "Related Type",
    //   type: COLTYPE.FEILD,
    //   field: "relatedType",
    //   // amtFormat?: boolean,
    //   isTitle: true
    //   // isDate?: boolen
    // },
    {
        title: "Agent Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "agentName",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Premium",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "premium",
        // isTitle?: boolean
        amtFormat: true
        // isDate?: boolen
    },
    {
        title: "Currency",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "currency",
    },
    {
        title: "Policy Inception Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "policyInceptionDate",
    },
    {
        title: "Policy Expiry Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "policyExpiryDate",
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "status",
        isRenewStatus: true,
        // amtFormat?: boolean,
        // isTitle?: boolean
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            // edit: true,
            confirm: true,
            view: true,
            download: true
        }
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const ActivityDisplayCol = [
    "policyNumber",
    // "renewalPolicyNumber",
    "productCode",
    "agentName",
    "premium",
    "currency",
    "policyInceptionDate",
    "policyExpiryDate",
    "status",
    "actions",
];


/***/ }),

/***/ 9639:
/*!********************************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-management-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewManagementListComponent": () => (/* binding */ RenewManagementListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _renew_management_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renew-management-list.component.html?ngResource */ 66163);
/* harmony import */ var _renew_management_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renew-management-list.component.scss?ngResource */ 30052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/loading/loading.service */ 16164);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 56289);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/services/products-data.service */ 78680);
/* harmony import */ var _renew_manage_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renew-manage.const */ 89476);
/* harmony import */ var _renew_manage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./renew-manage.service */ 84161);


















let RenewManagementListComponent = class RenewManagementListComponent {
    // private fileNameURL = "attachment-downloader/tcs.htm?fileName="
    constructor(fb, router, cdf, renewService, alertService, loadingService, attachmentDownloadService, prodctService) {
        this.fb = fb;
        this.router = router;
        this.cdf = cdf;
        this.renewService = renewService;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.attachmentDownloadService = attachmentDownloadService;
        this.prodctService = prodctService;
        this.ELEMENT_COL = _renew_manage_const__WEBPACK_IMPORTED_MODULE_10__.RenewCol;
        this.displayedColumns = _renew_manage_const__WEBPACK_IMPORTED_MODULE_10__.ActivityDisplayCol;
        this.renewList = [];
        this.isTeam = false;
        this.activityStatus = _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_8__.ActivityStatus;
        this.productOption = [];
        this.statusOption = [
            { code: 'ACTIVE', value: 'ACTIVE' },
            { code: 'CONFIRM', value: 'CONFIRM' }
        ];
        this.downED = "/attachment-downloader/tcs/fileName=";
        this.loadForm();
    }
    ngOnInit() {
        this.getProduct();
    }
    ngAfterViewInit() {
        this.getList();
    }
    cancel() {
        this.actForm.reset();
        this.getOneMonthAndRefresh();
        this.getList();
    }
    loadForm() {
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
            "policyNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(""),
            "policyHolder": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(""),
            "productCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(""),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(""),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(""),
            isTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.isTeam)
        });
    }
    getOneMonthAndRefresh() {
        let date = new Date();
        let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1));
        let monthDay = new Date(date.setMonth(date.getMonth() + 1));
        this.actForm.controls['startDate'].setValue(lastMonthDay.toISOString());
        this.actForm.controls['endDate'].setValue(monthDay.toISOString());
        this.actForm.controls.policyNumber.setValue("");
        this.actForm.controls.policyHolder.setValue("");
        this.actForm.controls.productCode.setValue("");
        this.actForm.controls.isTeam.setValue(this.isTeam);
    }
    getList() {
        let searchValues = {
            policyNumber: this.actForm.controls.policyNumber.value || "",
            policyHolder: this.actForm.controls.policyHolder.value || "",
            productCode: this.actForm.controls.productCode.value || "",
            fromDate: this.actForm.controls.startDate.value != null ? moment__WEBPACK_IMPORTED_MODULE_3__(this.actForm.controls.startDate.value).format("YYYY-MM-DD") : "",
            toDate: this.actForm.controls.endDate.value != null ? moment__WEBPACK_IMPORTED_MODULE_3__(this.actForm.controls.endDate.value).format("YYYY-MM-DD") : "",
            isTeam: this.isTeam
        };
        this.renewService.getRenewList(searchValues).toPromise().then((res) => {
            if (res) {
                this.renewList = res;
                this.cdf.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    actionBtn(event) {
        if (event.cmd == 'edit') {
            this.navigateToDetail(event.data);
        }
        else if (event.cmd == 'view') {
            this.navigateToDetail(event.data);
        }
        else if (event.cmd == "confirm") {
            this.confirmRenew(event.data);
        }
        else if (event.cmd == 'download') {
            this.download(event.data.documentName);
        }
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.actForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.actForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.actForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.actForm.controls[controlName];
        return control.dirty || control.touched;
    }
    navigateToDetail(data) {
        this.router.navigate(["sales/renew-policy/detail"], { queryParams: { data: JSON.stringify(data) } });
    }
    confirmRenew(data) {
        if (data.status != 'confirm') {
            this.alertService
                .activate('Are you sure want to confirm?', 'Warning Message')
                .then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.renewService
                        .confirmRenew(data.policyNumber)
                        .toPromise()
                        .then((res) => {
                        if (res) {
                            console.log(res);
                            this.alertService.activate('This record was updated', 'Success Message');
                            this.navigateToDetail(res);
                        }
                    });
                }
            }));
        }
    }
    download(fileName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingService.activate();
            this.getFileExt(fileName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)((x) => {
                let ext = x ? x.docExtension : "pdf";
                return this.attachmentDownloadService.getFile(this.downED + fileName + "." + ext).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((x) => {
                    return { data: x, ext: ext };
                }));
            })).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                if (res) {
                    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isNativePlatform()) {
                        this.attachmentDownloadService.mobileTCSDownload(fileName + "." + res.ext, res.data);
                    }
                    else {
                        yield this.loadingService.deactivate();
                        this.attachmentDownloadService.downloadTCSFile(res.data, fileName + "." + res.ext);
                    }
                }
                yield this.loadingService.deactivate();
            })).catch((err) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                yield this.loadingService.deactivate();
            }));
        });
    }
    getFileExt(fileName) {
        return this.attachmentDownloadService.get(this.downED + fileName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(() => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(null); }));
    }
    getProduct() {
        this.prodctService
            .getAll('yes')
            .toPromise()
            .then((res) => {
            if (res) {
                this.product = res;
                this.productOption = res.map((x) => {
                    return { code: x.code, value: x.name, type: x.type };
                });
                this.cdf.detectChanges();
                // this.getProductOption()
            }
        });
    }
    clear(key) {
        if (key == 'productCode') {
            this.actForm.controls[key].setValue(null);
        }
    }
    changeView(type) {
        if (type == 'team') {
            this.isTeam = true;
        }
        else {
            this.isTeam = false;
        }
        this.actForm.controls.isTeam.setValue(this.isTeam);
        this.cdf.detectChanges();
        this.getList();
    }
};
RenewManagementListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef },
    { type: _renew_manage_service__WEBPACK_IMPORTED_MODULE_11__.RenewManageService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentDownloadService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_9__.ProductDataService }
];
RenewManagementListComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableViewComponent,] }]
};
RenewManagementListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-renew-management-list',
        template: _renew_management_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_renew_management_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RenewManagementListComponent);



/***/ }),

/***/ 65190:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-management-list.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewManagementListModule": () => (/* binding */ RenewManagementListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _renew_management_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renew-management-list.component */ 9639);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);










let RenewManagementListModule = class RenewManagementListModule {
};
RenewManagementListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_renew_management_list_component__WEBPACK_IMPORTED_MODULE_0__.RenewManagementListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__.LanguageModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                {
                    path: '',
                    component: _renew_management_list_component__WEBPACK_IMPORTED_MODULE_0__.RenewManagementListComponent,
                },
            ]),
        ]
    })
], RenewManagementListModule);



/***/ }),

/***/ 30052:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-management-list.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-group.row {\n  align-items: center;\n}\n\n.activated {\n  background-color: #ff8100 !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3LW1hbmFnZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBR0YiLCJmaWxlIjoicmVuZXctbWFuYWdlbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1mb3JtLWxhYmVsIHtcbiAgcGFkZGluZy10b3AgICA6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5mb3JtLWdyb3VwLnJvd3tcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hY3RpdmF0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 66163:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-management-list.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 text-right pb-5\">\n    <button class=\"btn btn-light-dark new-btn-dark-gray mr-2 btn-round\" [ngClass]=\"{'activated' : !isTeam}\"\n      (click)=\"changeView('myview')\">{{\"FORM.my_view\" | translate}}</button>\n    <button class=\"btn btn-light-dark new-btn-dark-gray btn-round\" [ngClass]=\"{'activated' : isTeam}\"\n      (click)=\"changeView('team')\">{{\"FORM.team_veiw\" | translate}}</button>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b data\">\n      <div class=\"card-header\">\n        <div class=\"card-title\">\n          <h3 class=\"card-label left-border-image\">{{\"FORM.renewal_list\" | translate}}</h3>\n        </div>\n        <div class=\"card-toolbar\">\n          <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\n          <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n            <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"card-body px-10 py-3\">\n        <form action=\"#\" class=\"form\" [formGroup]=\"actForm\">\n\n          <div class=\"row\" style=\"align-items: center;\">\n            <app-start-end-date [formInput]=\"actForm\" remove-host [colClass]=\"'col-md-6'\">\n            </app-start-end-date>\n          </div>\n\n          <div class=\"row\" style=\"align-items: center;\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.policy_no\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"text\" class=\"form-control form-control-sm \" name=\"policyNumber\" autocomplete=\"off\"\n                    [class.is-invalid]=\"isControlInvalid('policyNumber')\"\n                    [class.is-valid]=\"isControlValid('policyNumber')\" formControlName=\"policyNumber\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.policy_holder\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"text\" class=\"form-control form-control-sm \" name=\"policyHolder\" autocomplete=\"off\"\n                    [class.is-invalid]=\"isControlInvalid('policyHolder')\"\n                    [class.is-valid]=\"isControlValid('policyHolder')\" formControlName=\"policyHolder\" />\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"align-items: center;\">\n            <!-- <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.product_code\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"text\" class=\"form-control form-control-sm \" name=\"productCode\" autocomplete=\"off\"\n                    [class.is-invalid]=\"isControlInvalid('productCode')\"\n                    [class.is-valid]=\"isControlValid('productCode')\" formControlName=\"productCode\" />\n                </div>\n              </div>\n            </div> -->\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\"> {{\"FORM.product_name\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                  <ng-select class=\"ng-custom-select\" (clear)=\"clear('productCode')\" [items]=\"productOption\"\n                    bindLabel=\"value\" bindValue=\"code\" formControlName=\"productCode\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\"> {{\"FORM.status\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                  <ng-select class=\"ng-custom-select\" (clear)=\"clear('statusCode')\" [items]=\"statusOption\"\n                    bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\n                  </ng-select>\n                </div>\n              </div>\n            </div> -->\n            \n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b\">\n\n      <div class=\"card-body customer-card-body\">\n        <app-material-table-view [data]=\"renewList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n          (emitter)=\"actionBtn($event)\">\n        </app-material-table-view>\n\n      </div>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_renew-management-list_renew-management-list_module_ts.js.map