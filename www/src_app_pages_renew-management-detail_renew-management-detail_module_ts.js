"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_renew-management-detail_renew-management-detail_module_ts"],{

/***/ 29597:
/*!************************************************************************************!*\
  !*** ./src/app/pages/renew-management-detail/renew-management-detail.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewManagementDetailComponent": () => (/* binding */ RenewManagementDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _renew_management_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renew-management-detail.component.html?ngResource */ 32408);
/* harmony import */ var _renew_management_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renew-management-detail.component.scss?ngResource */ 95946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/menu-data.service */ 17606);
/* harmony import */ var _renew_management_list_renew_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renew-management-list/renew-manage.service */ 84161);














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
    confirmRenew() {
        if (this.actForm.value.status != 'confirm') {
            this.alertService
                .activate('Are you sure want to confirm?', 'Warning Message')
                .then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.actForm.value.status = 'confirm';
                    this.renewService
                        .confirmRenew(this.actForm.value.policyNumber)
                        .toPromise()
                        .then((res) => {
                        if (res) {
                            this.alertService.activate('This record was updated', 'Success Message');
                        }
                    });
                }
            }));
        }
    }
};
RenewManagementDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__.MenuDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone },
    { type: _renew_management_list_renew_manage_service__WEBPACK_IMPORTED_MODULE_6__.RenewManageService }
];
RenewManagementDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-renew-management-detail',
        template: _renew_management_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_4__.MY_FORMATS },
        ],
        styles: [_renew_management_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RenewManagementDetailComponent);



/***/ }),

/***/ 73874:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/renew-management-detail/renew-management-detail.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewManagementDetailModule": () => (/* binding */ RenewManagementDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _renew_management_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renew-management-detail.component */ 29597);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-currency */ 74172);














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

/***/ 95946:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/renew-management-detail/renew-management-detail.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n.ng-clear-wrapper .ng-clear {\n  cursor: pointer;\n  position: absolute;\n  right: 2rem;\n  top: 2.3rem;\n  font-size: 1.2rem;\n  color: #999;\n}\n.ng-clear-wrapper .ng-clear:hover {\n  color: #D0021B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3LW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESiIsImZpbGUiOiJyZW5ldy1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XHJcbiAgICAuZm9ybS1jb250cm9sLXNtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U0RTZFRjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMC43NXJlbTtcclxuICAgIH1cclxuICAgIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmctY2xlYXItd3JhcHBlciAubmctY2xlYXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbiAgICB0b3A6IDIuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5uZy1jbGVhci13cmFwcGVyIC5uZy1jbGVhcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI0QwMDIxQjtcclxufSJdfQ== */";

/***/ }),

/***/ 32408:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/renew-management-detail/renew-management-detail.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\" *ngIf=\"actForm\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-body\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"actForm\" (ngSubmit)=\"backLocation()\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.policy_no\" | translate}}</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"policyNumber\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('policyNumber')\"\r\n                                    [class.is-valid]=\"isControlValid('policyNumber')\" formControlName=\"policyNumber\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.renew_policy_no\" | translate}}</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"renewalPolicyNumber\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('renewalPolicyNumber')\"\r\n                                    [class.is-valid]=\"isControlValid('renewalPolicyNumber')\" formControlName=\"renewalPolicyNumber\" />\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.policy_date\" | translate}}</label>\r\n                                <div class=\"input-group \">\r\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\r\n                                        formControlName=\"policyInceptionDate\" [matDatepicker]=\"policyInceptionDate\"\r\n                                        readonly>\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"policyInceptionDate\">\r\n                                    </mat-datepicker-toggle>\r\n                                    <mat-datepicker #policyInceptionDate disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--  -->\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.policy_status\" | translate}}</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"actTitle\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('status')\"\r\n                                    [class.is-valid]=\"isControlValid('status')\" formControlName=\"status\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.policy_edate\" | translate}}</label>\r\n                                <div class=\"input-group \">\r\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\r\n                                        formControlName=\"policyExpiryDate\" [matDatepicker]=\"policyExpiryDate\" readonly>\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"policyExpiryDate\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #policyExpiryDate disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--  -->\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group \">\r\n                                <label class=\"form-label\">{{\"FORM.qoute_no\" | translate}} </label>\r\n                                <div class=\"input-group \">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"quoteNumber\"\r\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('quoteNumber')\"\r\n                                        [class.is-valid]=\"isControlValid('quoteNumber')\"\r\n                                        formControlName=\"quoteNumber\" />\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.gross_premium\" | translate}}</label>\r\n                                <input type=\"tel\" currencyMask\r\n                                    [options]=\"{ prefix: '', thousands: ',',allowNegative:false,align:'left' }\"\r\n                                    class=\"form-control form-control-sm currency-input-tag\" name=\"grossPremium\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('grossPremium')\"\r\n                                    [class.is-valid]=\"isControlValid('grossPremium')\" formControlName=\"grossPremium\" />\r\n                            </div>\r\n                        </div>\r\n                        <!--  -->\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.policy_holder_code\" | translate}}</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"policyHolderCode\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('policyHolderCode')\"\r\n                                    [class.is-valid]=\"isControlValid('policyHolderCode')\"\r\n                                    formControlName=\"policyHolderCode\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.net_premium\" | translate}}</label>\r\n                                <input type=\"tel\" currencyMask\r\n                                    [options]=\"{ prefix: '', thousands: ',',allowNegative:false,align:'left' }\"\r\n                                    class=\"form-control form-control-sm currency-input-tag\" name=\"netPremium\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('netPremium')\"\r\n                                    [class.is-valid]=\"isControlValid('netPremium')\" formControlName=\"netPremium\" />\r\n                            </div>\r\n                        </div>\r\n                        <!--  -->\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\"FORM.policy_holder\" | translate}}</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"policyHolder\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('policyHolder')\"\r\n                                    [class.is-valid]=\"isControlValid('policyHolder')\" formControlName=\"policyHolder\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-default btn-elevate mt-2\" (click)=\"backLocation()\">{{\"FORM.btn_back\" |\r\n                        translate}}</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-elevate mt-2\" (click)=\"confirmRenew()\">{{\"FORM.btn_confirm\" |\r\n                        translate}}</button>\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                        (click)=\"backLocation()\">{{\"FORM.btn_save\" | translate}}</button> -->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_renew-management-detail_renew-management-detail_module_ts.js.map