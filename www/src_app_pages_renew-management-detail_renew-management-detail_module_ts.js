"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_renew-management-detail_renew-management-detail_module_ts"],{

/***/ 1057:
/*!************************************************************************************!*\
  !*** ./src/app/pages/renew-management-detail/renew-management-detail.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewManagementDetailComponent": () => (/* binding */ RenewManagementDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_renew_management_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./renew-management-detail.component.html */ 70958);
/* harmony import */ var _renew_management_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renew-management-detail.component.scss */ 81300);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/is-json */ 47975);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/menu-data.service */ 37632);
/* harmony import */ var _renew_management_list_renew_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renew-management-list/renew-manage.service */ 52902);














let RenewManagementDetailComponent = class RenewManagementDetailComponent {
    constructor(route, location, cdf, alertService, menuService, ngZone, renewService) {
        this.route = route;
        this.location = location;
        this.cdf = cdf;
        this.alertService = alertService;
        this.menuService = menuService;
        this.ngZone = ngZone;
        this.renewService = renewService;
        this.isLead = false;
        this.dataAccess = {
            view: true,
            create: true,
            edit: true,
            delete: true
        };
        this.unsub = [];
    }
    ngOnInit() {
        this.loadForm();
        this.checkPremission();
        this.unsub[0] = this.route.queryParams
            .subscribe(params => {
            let data = JSON.parse(params.data);
            console.log(data);
            if (!data)
                this.location.back();
            this.loadForm(data);
        });
    }
    checkPremission() {
        this.menuService.dataAccess.subscribe((res) => {
            if (res) {
                this.dataAccess = res['activity'];
                if (!this.dataAccess.view) {
                    this.location.back();
                }
            }
        });
    }
    ngAfterViewInit() {
    }
    clearDate(key) {
        this.actForm.controls[key].setValue(null);
    }
    loadForm(oldData) {
        // if(oldData)
        // console.log(moment(oldData.dueDate).format('DD/MM/YYYY'));
        console.log(oldData);
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            "policyNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? oldData.policyNumber : null, disabled: true }),
            // "renewalPolicyNumber": new FormControl({ value: oldData ? oldData.renewalPolicyNumber : null, disabled: true }),
            "policyInceptionDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? moment__WEBPACK_IMPORTED_MODULE_2__(oldData.policyInceptionDate, "DD/MM/YYYY") : null, disabled: true }),
            "status": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? oldData.policyStatus : null, disabled: true }),
            "policyExpiryDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? moment__WEBPACK_IMPORTED_MODULE_2__(oldData.policyExpiryDate, "DD/MM/YYYY") : null, disabled: true }),
            "quoteNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? oldData.quoteNumber : null, disabled: true }),
            "grossPremium": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? oldData.grossPremium : null, disabled: true }),
            "policyHolderCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? oldData.policyHolderCode : null, disabled: true }),
            "netPremium": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? oldData.netPremium : null, disabled: true }),
            "policyHolder": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: oldData ? oldData.policyHolder : null, disabled: true }),
        });
        this.cdf.detectChanges();
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
    backLocation() {
        this.ngZone.run(() => {
            this.location.back();
        });
    }
};
RenewManagementDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__.MenuDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone },
    { type: _renew_management_list_renew_manage_service__WEBPACK_IMPORTED_MODULE_6__.RenewManageService }
];
RenewManagementDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-renew-management-detail',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_renew_management_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_4__.MY_FORMATS },
        ],
        styles: [_renew_management_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RenewManagementDetailComponent);



/***/ }),

/***/ 72604:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/renew-management-detail/renew-management-detail.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewManagementDetailModule": () => (/* binding */ RenewManagementDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _renew_management_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renew-management-detail.component */ 1057);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 57574);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-currency */ 40287);














let RenewManagementDetailModule = class RenewManagementDetailModule {
};
RenewManagementDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_renew_management_detail_component__WEBPACK_IMPORTED_MODULE_0__.RenewManagementDetailComponent,],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalModule,
            ngx_currency__WEBPACK_IMPORTED_MODULE_12__.NgxCurrencyModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_1__.LanguageModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([
                {
                    path: '',
                    component: _renew_management_detail_component__WEBPACK_IMPORTED_MODULE_0__.RenewManagementDetailComponent,
                },
            ]),
        ],
    })
], RenewManagementDetailModule);



/***/ }),

/***/ 70958:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/renew-management-detail/renew-management-detail.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" *ngIf=\"actForm\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-body\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"actForm\" (ngSubmit)=\"backLocation()\">\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.policy_no\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"policyNumber\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('policyNumber')\"\n                                    [class.is-valid]=\"isControlValid('policyNumber')\" formControlName=\"policyNumber\" />\n                            </div>\n                        </div>\n\n                        <!-- <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.renew_policy_no\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"renewalPolicyNumber\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('renewalPolicyNumber')\"\n                                    [class.is-valid]=\"isControlValid('renewalPolicyNumber')\" formControlName=\"renewalPolicyNumber\" />\n                            </div>\n                        </div> -->\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.policy_date\" | translate}}</label>\n                                <div class=\"input-group \">\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                                        formControlName=\"policyInceptionDate\" [matDatepicker]=\"policyInceptionDate\"\n                                        readonly>\n                                    <mat-datepicker-toggle matSuffix [for]=\"policyInceptionDate\">\n                                    </mat-datepicker-toggle>\n                                    <mat-datepicker #policyInceptionDate disabled=\"false\"></mat-datepicker>\n                                </div>\n                            </div>\n                        </div>\n                        <!--  -->\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.policy_status\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"actTitle\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('status')\"\n                                    [class.is-valid]=\"isControlValid('status')\" formControlName=\"status\" />\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.policy_edate\" | translate}}</label>\n                                <div class=\"input-group \">\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                                        formControlName=\"policyExpiryDate\" [matDatepicker]=\"policyExpiryDate\" readonly>\n                                    <mat-datepicker-toggle matSuffix [for]=\"policyExpiryDate\"></mat-datepicker-toggle>\n                                    <mat-datepicker #policyExpiryDate disabled=\"false\"></mat-datepicker>\n                                </div>\n                            </div>\n                        </div>\n                        <!--  -->\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group \">\n                                <label class=\"form-label\">{{\"FORM.qoute_no\" | translate}} </label>\n                                <div class=\"input-group \">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"quoteNumber\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('quoteNumber')\"\n                                        [class.is-valid]=\"isControlValid('quoteNumber')\"\n                                        formControlName=\"quoteNumber\" />\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.gross_premium\" | translate}}</label>\n                                <input type=\"tel\" currencyMask\n                                    [options]=\"{ prefix: '', thousands: ',',allowNegative:false,align:'left' }\"\n                                    class=\"form-control form-control-sm currency-input-tag\" name=\"grossPremium\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('grossPremium')\"\n                                    [class.is-valid]=\"isControlValid('grossPremium')\" formControlName=\"grossPremium\" />\n                            </div>\n                        </div>\n                        <!--  -->\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.policy_holder_code\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"policyHolderCode\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('policyHolderCode')\"\n                                    [class.is-valid]=\"isControlValid('policyHolderCode')\"\n                                    formControlName=\"policyHolderCode\" />\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.net_premium\" | translate}}</label>\n                                <input type=\"tel\" currencyMask\n                                    [options]=\"{ prefix: '', thousands: ',',allowNegative:false,align:'left' }\"\n                                    class=\"form-control form-control-sm currency-input-tag\" name=\"netPremium\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('netPremium')\"\n                                    [class.is-valid]=\"isControlValid('netPremium')\" formControlName=\"netPremium\" />\n                            </div>\n                        </div>\n                        <!--  -->\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.policy_holder\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"policyHolder\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('policyHolder')\"\n                                    [class.is-valid]=\"isControlValid('policyHolder')\" formControlName=\"policyHolder\" />\n                            </div>\n                        </div>\n\n                    </div>\n                    <button type=\"button\" class=\"btn btn-default btn-elevate mt-2\"\n                        (click)=\"backLocation()\">{{\"FORM.btn_back\" | translate}}</button>\n                    <!-- <button type=\"button\" class=\"btn btn-primary btn-elevate mx-2\"\n                        (click)=\"backLocation()\">{{\"FORM.btn_save\" | translate}}</button> -->\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 81300:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/renew-management-detail/renew-management-detail.component.scss ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n.ng-clear-wrapper .ng-clear {\n  cursor: pointer;\n  position: absolute;\n  right: 2rem;\n  top: 2.3rem;\n  font-size: 1.2rem;\n  color: #999;\n}\n.ng-clear-wrapper .ng-clear:hover {\n  color: #D0021B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3LW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESiIsImZpbGUiOiJyZW5ldy1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XG4gICAgLmZvcm0tY29udHJvbC1zbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNEU2RUY7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xuICAgIH1cbiAgICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbn1cblxuLm5nLWNsZWFyLXdyYXBwZXIgLm5nLWNsZWFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAycmVtO1xuICAgIHRvcDogMi4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjOTk5O1xufVxuXG4ubmctY2xlYXItd3JhcHBlciAubmctY2xlYXI6aG92ZXIge1xuICAgIGNvbG9yOiAjRDAwMjFCO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_renew-management-detail_renew-management-detail_module_ts.js.map