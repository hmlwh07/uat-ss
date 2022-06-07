"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_currency-exchange_currency-exchange_module_ts"],{

/***/ 86582:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/add-form/currency-add-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyAddFormComponent": () => (/* binding */ CurrencyAddFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _currency_add_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-add-form.component.html?ngResource */ 63283);
/* harmony import */ var _currency_add_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-add-form.component.scss?ngResource */ 80818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/is-json */ 88757);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/valid-all-feild */ 41018);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/master-data/master-data.service */ 27670);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);













let CurrencyAddFormComponent = class CurrencyAddFormComponent {
    constructor(masterDataService, modal, cdf) {
        this.masterDataService = masterDataService;
        this.modal = modal;
        this.cdf = cdf;
        this.currencyType = [];
        this.isModal = false;
        this.isEdit = false;
        this.oldData = {};
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    ngOnInit() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.oldData.type || "usd", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.oldData.amount || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.oldData.date ? moment__WEBPACK_IMPORTED_MODULE_5__(this.oldData.date) : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
        });
    }
    ngAfterViewInit() {
        this.getType();
    }
    // type
    // amount
    getType() {
        this.masterDataService.getDataByType("CURRENCY_TYPE").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((res) => {
            return res.map(x => x.codeId);
        })).toPromise().then((res) => {
            if (res) {
                this.currencyType = res;
                this.cdf.detectChanges();
            }
        });
    }
    isControlValid(controlName, type) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName, type) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName, type) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName, type) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
    saveData() {
        if (this.formGroup.valid) {
            if (this.isModal) {
                let date = this.convertDateFormatDDMMYYY(this.formGroup.value.date);
                console.log("date", date);
                this.formGroup.controls['date'].setValue(date);
                this.modal.dismissAll({ data: Object.assign(Object.assign({}, this.formGroup.value), { id: this.id }), cmd: 'save' });
            }
            else {
                this.formSubmit.emit(Object.assign({}, this.formGroup.value));
            }
        }
        else {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.formGroup);
        }
    }
    convertDateFormatDDMMYYY(date) {
        var today = new Date(date);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    }
};
CurrencyAddFormComponent.ctorParameters = () => [
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_4__.MasterDataService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef }
];
CurrencyAddFormComponent.propDecorators = {
    isModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    formSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
CurrencyAddFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-currency-add-form',
        template: _currency_add_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__.MY_FORMATS },
        ],
        styles: [_currency_add_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyAddFormComponent);



/***/ }),

/***/ 16121:
/*!************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency-exchange.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyExChangeComponent": () => (/* binding */ CurrencyExChangeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _currency_exchange_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-exchange.component.html?ngResource */ 57509);
/* harmony import */ var _currency_exchange_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-exchange.component.scss?ngResource */ 88962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/is-json */ 88757);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _add_form_currency_add_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-form/currency-add-form.component */ 86582);
/* harmony import */ var _currency_exchange_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currency-exchange.service */ 70695);
/* harmony import */ var _currency_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency.const */ 66774);














let CurrencyExChangeComponent = class CurrencyExChangeComponent {
    constructor(currencyService, cdf, modalCrl, alertService) {
        this.currencyService = currencyService;
        this.cdf = cdf;
        this.modalCrl = modalCrl;
        this.alertService = alertService;
        this.currencyList = [];
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_currency_const__WEBPACK_IMPORTED_MODULE_7__.CurrencyCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_currency_const__WEBPACK_IMPORTED_MODULE_7__.CurrencyDisplayCol));
    }
    ngOnInit() {
        this.loadForm();
    }
    ngAfterViewInit() {
        this.getData();
    }
    loadForm() {
        this.exchangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('usd'),
        });
    }
    cancel() {
        this.exchangeForm.reset();
        this.getData();
    }
    getData() {
        // console.log(this.matTable);
        // this.currencyService.findAll().toPromise().then((res: any) => {
        //   if (res) {
        //     this.currencyList = res
        //     this.cdf.detectChanges()
        //     this.matTable.reChangeData()
        //   }
        // })
        this.currencyService.getList(this.exchangeForm.value).toPromise().then((res) => {
            if (res) {
                this.currencyList = res;
                this.cdf.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    addData() {
        const modalRef = this.modalCrl.open(_add_form_currency_add_form_component__WEBPACK_IMPORTED_MODULE_5__.CurrencyAddFormComponent, { size: 'md', backdrop: false });
        modalRef.componentInstance.isModal = true;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.cmd == 'save') {
                    this.saveData(res.data);
                }
            }
        });
    }
    saveData(event) {
        let postData = event;
        // console.log(postData);
        this.currencyService.save(postData).toPromise().then((res) => {
            if (res) {
                this.getData();
                this.alertService.activate('This record was created', 'Success Message');
            }
        });
    }
    updateData(postData) {
        // console.log('UPDATE', postData);
        this.currencyService.update(postData.id, postData).toPromise().then((res) => {
            if (res) {
                this.getData();
                this.alertService.activate('This record was updated', 'Success Message');
            }
        });
    }
    editData(data) {
        const modalRef = this.modalCrl.open(_add_form_currency_add_form_component__WEBPACK_IMPORTED_MODULE_5__.CurrencyAddFormComponent, { size: 'md', backdrop: false });
        modalRef.componentInstance.oldData = data;
        modalRef.componentInstance.id = data.id;
        modalRef.componentInstance.isModal = true;
        modalRef.componentInstance.isEdit = true;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.cmd == 'save') {
                    this.updateData(res.data);
                }
            }
        });
    }
    actionBtn(event) {
        if (event.cmd == 'edit') {
            this.editData(event.data);
        }
        else if (event.cmd == 'delete') {
            this.deleleData(event.data.id);
        }
    }
    deleleData(id) {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.currencyService.delete(id).toPromise().then((res) => {
                    if (res) {
                        let index = this.currencyList.findIndex(x => x.id == id);
                        if (index >= 0) {
                            this.currencyList.splice(index, 1);
                            this.matTable.reChangeData();
                            this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                            });
                        }
                    }
                });
            }
        });
    }
};
CurrencyExChangeComponent.ctorParameters = () => [
    { type: _currency_exchange_service__WEBPACK_IMPORTED_MODULE_6__.CurrencyExchangeService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
CurrencyExChangeComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableViewComponent,] }]
};
CurrencyExChangeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-currency-exchange',
        template: _currency_exchange_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__.MY_FORMATS },
        ],
        styles: [_currency_exchange_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyExChangeComponent);



/***/ }),

/***/ 93751:
/*!*********************************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency-exchange.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyExChangeModule": () => (/* binding */ CurrencyExChangeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _currency_exchange_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-exchange.component */ 16121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/form-component.module */ 78798);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_form_currency_add_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-form/currency-add-form.component */ 86582);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);












let CurrencyExChangeModule = class CurrencyExChangeModule {
};
CurrencyExChangeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_currency_exchange_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyExChangeComponent, _add_form_currency_add_form_component__WEBPACK_IMPORTED_MODULE_2__.CurrencyAddFormComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__.CRUDTableModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__.LanguageModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                {
                    path: '',
                    component: _currency_exchange_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyExChangeComponent,
                },
            ]),
        ]
    })
], CurrencyExChangeModule);



/***/ }),

/***/ 66774:
/*!***********************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency.const.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyCol": () => (/* binding */ CurrencyCol),
/* harmony export */   "CurrencyDisplayCol": () => (/* binding */ CurrencyDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const CurrencyCol = [
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "date",
        isFromatDate: true
    },
    {
        title: "Currency",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "type",
        isUpper: true
    },
    {
        title: "Rate",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "amount",
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
const CurrencyDisplayCol = [
    // "id",
    "date",
    "type",
    "amount",
    "actions",
];


/***/ }),

/***/ 80818:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/add-form/currency-add-form.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW5jeS1hZGQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 88962:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency-exchange.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW5jeS1leGNoYW5nZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 63283:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/add-form/currency-add-form.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card card-custom gutter-b\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\" *ngIf=\"isEdit\">\r\n            <h3 class=\"card-label\">{{\"FORM.edit_currency_exchange\" | translate}}</h3>\r\n        </div>\r\n        <div class=\"card-title\" *ngIf=\"!isEdit\">\r\n            <h3 class=\"card-label\">{{\"FORM.create_currency_exchange\" | translate}}</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\" (ngSubmit)=\"saveData()\">\r\n            <!-- type -->\r\n            <div class=\"form-group \">\r\n                <label class=\"form-label\">{{\"FORM.date\" | translate}}</label>\r\n                <div class=\"input-group \">\r\n                    <input matInput class=\"form-control form-control-sm date-input\" placeholder=\"Date\" formControlName=\"date\" [matDatepicker]=\"picker\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\" style=\"z-index: 99999;\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\" style=\"z-index: 99999;\"></mat-datepicker>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group \">\r\n                <label class=\"form-label\">{{\"FORM.currency\" | translate}}</label>\r\n                <select class=\"form-control form-control-sm \" name=\"title\" placeholder=\"Currency Type\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('type')\" [class.is-valid]=\"isControlValid('type')\" formControlName=\"type\">\r\n          <option value=\"usd\">USD</option>\r\n          <!-- <option *ngFor=\"let item of currencyType\" value=\"{{item}}\">{{item | uppercase}}</option> -->\r\n        </select>\r\n\r\n            </div>\r\n            <!-- type -->\r\n\r\n            <!-- Amount -->\r\n            <div class=\"form-group \">\r\n                <label class=\"form-label\">{{\"FORM.rate\" | translate}}</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm \" name=\"amount\" placeholder=\"Rate\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('amount')\" [class.is-valid]=\"isControlValid('amount')\" formControlName=\"amount\">\r\n\r\n            </div>\r\n            <!-- Amount -->\r\n            <div class=\"form-group \">\r\n                <button type=\"button\" *ngIf=\"isModal\" class=\"btn btn-default\" (click)=\"modal.dismissAll()\">{{\"FORM.btn_close\" | translate}}</button>\r\n                <button type=\"submit\" class=\"btn btn-primary mx-2\">{{\"FORM.btn_save\" | translate}}</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 57509:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency-exchange.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom\" style=\"margin-bottom: 15px;\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\">{{\"FORM.exchange_rate\" | translate}}</h3>\r\n                </div>\r\n                <div class=\"card-toolbar\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-circle\" style=\"margin-right: 1rem;\" (click)=\"addData()\">\r\n                        <span class=\"flaticon2-plus\"></span>\r\n                    </button>\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getData()\">\r\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\r\n                    </button> -->\r\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getData()\"></span>\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\r\n                        <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\r\n                        </button>\r\n                </div>\r\n                <!-- <app-currency-add-form (formSubmit)=\"saveData($event)\" [isModal]=\"false\"></app-currency-add-form> -->\r\n            </div>\r\n\r\n            <div class=\"card-body \">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"exchangeForm\">\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <app-start-end-date [formInput]=\"exchangeForm\" remove-host [colClass]=\"'col-sm-4'\"></app-start-end-date>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.currency\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <select class=\"form-control form-control-sm\" name=\"title\" placeholder=\"Currency Type\" autocomplete=\"off\" formControlName=\"currency\">\r\n                                        <option value=\"usd\">USD</option>\r\n\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-sm-4\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.date\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"input-group \">\r\n                                        <input matInput class=\"form-control form-control-sm date-input\" formControlName=\"date\" [matDatepicker]=\"picker\" readonly>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-body customer-card-body\">\r\n                <app-material-table-view [data]=\"currencyList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\">\r\n                </app-material-table-view>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_currency-exchange_currency-exchange_module_ts.js.map