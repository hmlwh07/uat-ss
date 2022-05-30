"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_prospect-customer-list_prospect-customer-list_module_ts"],{

/***/ 7559:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/prospect-customer-list/prospect-customer-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProspectCustomerListComponent": () => (/* binding */ ProspectCustomerListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _prospect_customer_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prospect-customer-list.component.html?ngResource */ 8329);
/* harmony import */ var _customer_list_customer_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../customer-list/customer-list.component.scss?ngResource */ 35937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../customer-list/customer-list.const */ 86270);
/* harmony import */ var _customer_list_customer_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../customer-list/customer-list.service */ 87999);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/core */ 15818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);














let ProspectCustomerListComponent = class ProspectCustomerListComponent {
    constructor(router, cdf, customerListService, modalService) {
        this.router = router;
        this.cdf = cdf;
        this.customerListService = customerListService;
        this.modalService = modalService;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_2__.CustomerCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_2__.CustomerDisplayCol));
        this.customerList = [];
        this.statusOption = _customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_2__.Status;
        this.identityTypeOption = _customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_2__.IdentityType;
        this.selectedUser = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.isPopup = false;
        this.party = false;
        this.isDynamic = false;
        this.show = false;
        this.loadForm();
    }
    ngOnInit() {
        if (this.isPopup) {
            this.ELEMENT_COL.splice(9, 1);
            this.displayedColumns.splice(9, 1);
        }
        this.ELEMENT_COL.splice(3, 1);
        this.displayedColumns.splice(3, 1);
        this.show = true;
    }
    ngAfterViewInit() {
        this.getList();
    }
    loadForm() {
        this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            "name": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "identityType": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "identityNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "statusCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "partyCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "startDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "endDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
        });
    }
    navigateToDetail(data, id, secondaryId) {
        this.router.navigate(["/customer/customer-detail"], { queryParams: { pageStatus: data, pageId: id, pageSecondaryId: secondaryId } });
    }
    getList() {
        let check = this.isPopup && !this.isDynamic ? true : false;
        this.customerListService.getCustomerList(this.customerForm.value, this.party, check).toPromise().then((res) => {
            if (res) {
                this.customerList = res;
                this.cdf.detectChanges();
                if (this.matTable)
                    this.matTable.reChangeData();
            }
        });
    }
    get selected() {
        let user;
        if (this.matTable) {
            user = this.matTable.selection.selected[0];
        }
        return user ? user : { customerId: 0 };
    }
    rowSelected(event) {
        this.selectedUser.emit(event);
    }
    cancel() {
        this.customerForm.reset();
        this.getList();
    }
    actionBtn(event) {
        if (event.cmd == 'edit') {
            this.navigateToDetail('edit', event.data.customerId, event.data.individualId);
        }
    }
    //for view
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
    nextProd() {
        if (this.selected.customerId) {
            this.modalService.dismissAll({ data: this.selected, type: "save" });
        }
    }
    closeModal() {
        this.modalService.dismissAll();
    }
};
ProspectCustomerListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _customer_list_customer_list_service__WEBPACK_IMPORTED_MODULE_3__.CustomerListService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal }
];
ProspectCustomerListComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableViewComponent,] }],
    selectedUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    isPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    party: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isDynamic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ProspectCustomerListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-prospect-customer-list',
        template: _prospect_customer_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_4__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_4__.CustomDateParserFormatter },
            // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_5__.MY_FORMATS },
        ],
        styles: [_customer_list_customer_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProspectCustomerListComponent);



/***/ }),

/***/ 62912:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/prospect-customer-list/prospect-customer-list.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProspectCustomerListModule": () => (/* binding */ ProspectCustomerListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _prospect_customer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prospect-customer-list.component */ 7559);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share-components/share-component.module */ 94142);
/* harmony import */ var src_app_modules_loading_toast_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/module-import-guard */ 62992);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);












let ProspectCustomerListModule = class ProspectCustomerListModule {
    constructor(parentModule) {
        (0,src_app_modules_loading_toast_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, 'ProspectCustomerListModule');
    }
};
ProspectCustomerListModule.ctorParameters = () => [
    { type: ProspectCustomerListModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.SkipSelf }] }
];
ProspectCustomerListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_prospect_customer_list_component__WEBPACK_IMPORTED_MODULE_2__.ProspectCustomerListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_5__.LanguageModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                {
                    path: '',
                    component: _prospect_customer_list_component__WEBPACK_IMPORTED_MODULE_2__.ProspectCustomerListComponent,
                },
            ]),
        ]
    })
], ProspectCustomerListModule);



/***/ }),

/***/ 8329:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/prospect-customer-list/prospect-customer-list.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b\" [class.remove-p]=\"isPopup\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\">Prospect Customer List</h3>\r\n                </div>\r\n                <div class=\"card-toolbar\">\r\n                    <button *ngIf=\"!isPopup\" type=\"button\" class=\"btn btn-primary btn-circle\" style=\"margin-right: 1rem;\r\n                    \" (click)=\"navigateToDetail('create')\">\r\n                        <span class=\"flaticon2-plus\"></span>\r\n                    </button>\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getList()\">\r\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\r\n                    </button> -->\r\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\r\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\r\n                        <span class=\"\">Cancel</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body px-10 py-3\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"customerForm\">\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <app-start-end-date [formInput]=\"customerForm\" remove-host [colClass]=\"'col-md-6'\">\r\n                        </app-start-end-date>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.name\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"name\"\r\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('name')\"\r\n                                        [class.is-valid]=\"isControlValid('name')\" formControlName=\"name\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Party Code</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"partyCode\"\r\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('partyCode')\"\r\n                                        [class.is-valid]=\"isControlValid('partyCode')\" formControlName=\"partyCode\" />\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div> -->\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\r\n                                        [class.is-invalid]=\"isControlInvalid('statusCode')\"\r\n                                        [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\"\r\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.id_type\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\r\n                                        [class.is-invalid]=\"isControlInvalid('identityType')\"\r\n                                        [class.is-valid]=\"isControlValid('identityType')\" [items]=\"identityTypeOption\"\r\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"identityType\">\r\n                                    </ng-select>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- </div> -->\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.id_no\" | translate}}</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"identityNumber\"\r\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('identityNumber')\"\r\n                                        [class.is-valid]=\"isControlValid('identityNumber')\"\r\n                                        formControlName=\"identityNumber\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-4 col-form-label\">Status</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\r\n                                        [class.is-invalid]=\"isControlInvalid('statusCode')\"\r\n                                        [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\"\r\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\r\n                                    </ng-select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b data\" [class.remove-p]=\"isPopup\">\r\n            <div class=\"card-body customer-card-body\" *ngIf=\"show\">\r\n                <div *ngIf=\"isPopup;else no_popup\">\r\n                    <app-material-table-view [data]=\"customerList\" [colum]=\"ELEMENT_COL\"\r\n                    [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\"\r\n                    (rowselect)=\"rowSelected($event)\" [selectable]=\"isPopup\">\r\n                </app-material-table-view>\r\n                </div>\r\n                \r\n                <ng-template #no_popup>\r\n                    <app-common-list-2 *ngIf=\"customerList.length > 0\"  class=\"data-list\" #commonList [data]=\"customerList\" [type]=\"'customer'\" (btnEvent)=\"actionBtn($event)\"></app-common-list-2>\r\n                </ng-template>\r\n            </div>\r\n            <!-- <ng-container *ngIf=\"isPopup && !isDynamic\">\r\n                <div class=\"card-footer\">\r\n                    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\"\r\n                        [disabled]=\"!selected.customerId\">Next</button>\r\n                </div>\r\n            </ng-container> -->\r\n            <ng-container *ngIf=\"isPopup && !isDynamic\">\r\n                <div class=\"card-footer\">\r\n                    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">{{\"FORM.btn_cancel\" | translate }}</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\"\r\n                        [disabled]=\"!selected.customerId\">{{\"FORM.btn_next\" | translate }}</button>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- </div> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prospect-customer-list_prospect-customer-list_module_ts.js.map