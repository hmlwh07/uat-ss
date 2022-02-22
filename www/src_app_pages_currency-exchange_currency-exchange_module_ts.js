"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_currency-exchange_currency-exchange_module_ts"],{

/***/ 68279:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/add-form/currency-add-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyAddFormComponent": () => (/* binding */ CurrencyAddFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_currency_add_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./currency-add-form.component.html */ 55381);
/* harmony import */ var _currency_add_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-add-form.component.scss */ 9364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/is-json */ 47975);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/valid-all-feild */ 53489);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/master-data/master-data.service */ 26697);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 29243);
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
                let date = moment__WEBPACK_IMPORTED_MODULE_5__(this.formGroup.value.date);
                this.formGroup.controls['date'].setValue(date);
                console.log((this.formGroup.value));
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
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_currency_add_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__.MY_FORMATS },
        ],
        styles: [_currency_add_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyAddFormComponent);



/***/ }),

/***/ 18782:
/*!************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency-exchange.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyExChangeComponent": () => (/* binding */ CurrencyExChangeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_currency_exchange_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./currency-exchange.component.html */ 6473);
/* harmony import */ var _currency_exchange_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-exchange.component.scss */ 61996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/is-json */ 47975);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _add_form_currency_add_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-form/currency-add-form.component */ 68279);
/* harmony import */ var _currency_exchange_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currency-exchange.service */ 19113);
/* harmony import */ var _currency_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency.const */ 27498);














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
        this.getData();
    }
    // ngAfterViewInit(){
    //   this.getData()
    // }
    loadForm() {
        this.exchangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
        });
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
        console.log(postData);
        this.currencyService.save(postData).toPromise().then((res) => {
            if (res) {
                this.getData();
                this.alertService.activate('This record was created', 'Success Message');
            }
        });
    }
    updateData(postData) {
        console.log('UPDATE', postData);
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
        this.currencyService.delete(id).toPromise().then((res) => {
            if (res) {
                let index = this.currencyList.findIndex(x => x.id == id);
                if (index >= 0) {
                    this.currencyList.splice(index, 1);
                    this.matTable.reChangeData();
                }
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
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_currency_exchange_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__.MY_FORMATS },
        ],
        styles: [_currency_exchange_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyExChangeComponent);



/***/ }),

/***/ 92271:
/*!*********************************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency-exchange.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyExChangeModule": () => (/* binding */ CurrencyExChangeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _currency_exchange_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-exchange.component */ 18782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_form_currency_add_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-form/currency-add-form.component */ 68279);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);











let CurrencyExChangeModule = class CurrencyExChangeModule {
};
CurrencyExChangeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_currency_exchange_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyExChangeComponent, _add_form_currency_add_form_component__WEBPACK_IMPORTED_MODULE_2__.CurrencyAddFormComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__.CRUDTableModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                {
                    path: '',
                    component: _currency_exchange_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyExChangeComponent,
                },
            ]),
        ]
    })
], CurrencyExChangeModule);



/***/ }),

/***/ 27498:
/*!***********************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency.const.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyCol": () => (/* binding */ CurrencyCol),
/* harmony export */   "CurrencyDisplayCol": () => (/* binding */ CurrencyDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

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

/***/ 55381:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/currency-exchange/add-form/currency-add-form.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h3 class=\"card-label\">{{ isEdit ? 'Edit' : 'Create' }} Currency Exchange</h3>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\" (ngSubmit)=\"saveData()\">\n            <!-- type -->\n            <div class=\"form-group \">\n                <label class=\"form-label\">Date</label>\n                <div class=\"input-group \">\n                    <input matInput class=\"form-control form-control-sm date-input\" placeholder=\"Date\" formControlName=\"date\" [matDatepicker]=\"picker\" readonly>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\" style=\"z-index: 99999;\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker disabled=\"false\" style=\"z-index: 99999;\"></mat-datepicker>\n\n                </div>\n            </div>\n\n            <div class=\"form-group \">\n                <label class=\"form-label\">Currency</label>\n                <select class=\"form-control form-control-sm \" name=\"title\" placeholder=\"Currency Type\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('type')\" [class.is-valid]=\"isControlValid('type')\" formControlName=\"type\">\n          <option value=\"usd\">USD</option>\n          <!-- <option *ngFor=\"let item of currencyType\" value=\"{{item}}\">{{item | uppercase}}</option> -->\n        </select>\n\n            </div>\n            <!-- type -->\n\n            <!-- Amount -->\n            <div class=\"form-group \">\n                <label class=\"form-label\">Rate</label>\n                <input type=\"number\" class=\"form-control form-control-sm \" name=\"amount\" placeholder=\"Rate\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('amount')\" [class.is-valid]=\"isControlValid('amount')\" formControlName=\"amount\">\n\n            </div>\n            <!-- Amount -->\n            <div class=\"form-group \">\n                <button type=\"button\" *ngIf=\"isModal\" class=\"btn btn-default\" (click)=\"modal.dismissAll()\">Close</button>\n                <button type=\"submit\" class=\"btn btn-primary mx-2\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ 6473:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/currency-exchange/currency-exchange.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom\" style=\"margin-bottom: 15px;\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">Exchange Rate</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"addData()\">\n                        <span class=\"flaticon2-plus\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getData()\">\n                        <span class=\"flaticon2-magnifier-tool\"></span>\n                    </button>\n                </div>\n                <!-- <app-currency-add-form (formSubmit)=\"saveData($event)\" [isModal]=\"false\"></app-currency-add-form> -->\n            </div>\n\n            <div class=\"card-body \">\n                <form action=\"#\" class=\"form\" [formGroup]=\"exchangeForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Currency</label>\n                                <div class=\"col-sm-8\">\n                                    <select class=\"form-control form-control-sm\" name=\"title\"\n                                        placeholder=\"Currency Type\" autocomplete=\"off\" formControlName=\"currency\">\n                                        <option value=\"usd\">USD</option>\n\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Date</label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"input-group \">\n                                        <input matInput class=\"form-control form-control-sm date-input\"\n                                            formControlName=\"date\" [matDatepicker]=\"picker\" readonly>\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"card card-custom px-10 py-3\">\n            <div class=\"card-body\">\n                <app-material-table-view [data]=\"currencyList\" [colum]=\"ELEMENT_COL\"\n                    [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\">\n                </app-material-table-view>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 9364:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/add-form/currency-add-form.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW5jeS1hZGQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 61996:
/*!**************************************************************************!*\
  !*** ./src/app/pages/currency-exchange/currency-exchange.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW5jeS1leGNoYW5nZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_currency-exchange_currency-exchange_module_ts.js.map