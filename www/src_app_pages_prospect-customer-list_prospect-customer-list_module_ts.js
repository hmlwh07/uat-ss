"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_prospect-customer-list_prospect-customer-list_module_ts"],{

/***/ 59435:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/prospect-customer-list/prospect-customer-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProspectCustomerListComponent": () => (/* binding */ ProspectCustomerListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_prospect_customer_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./prospect-customer-list.component.html */ 29464);
/* harmony import */ var _customer_list_customer_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../customer-list/customer-list.component.scss */ 29193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../customer-list/customer-list.const */ 62311);
/* harmony import */ var _customer_list_customer_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../customer-list/customer-list.service */ 14362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/core */ 39123);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/is-json */ 47975);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);














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
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_prospect_customer_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_4__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_4__.CustomDateParserFormatter },
            // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_5__.MY_FORMATS },
        ],
        styles: [_customer_list_customer_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProspectCustomerListComponent);



/***/ }),

/***/ 41887:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/prospect-customer-list/prospect-customer-list.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProspectCustomerListModule": () => (/* binding */ ProspectCustomerListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _prospect_customer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prospect-customer-list.component */ 59435);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share-components/share-component.module */ 92275);
/* harmony import */ var src_app_modules_loading_toast_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/module-import-guard */ 12747);











let ProspectCustomerListModule = class ProspectCustomerListModule {
    constructor(parentModule) {
        (0,src_app_modules_loading_toast_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, 'ProspectCustomerListModule');
    }
};
ProspectCustomerListModule.ctorParameters = () => [
    { type: ProspectCustomerListModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.SkipSelf }] }
];
ProspectCustomerListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_prospect_customer_list_component__WEBPACK_IMPORTED_MODULE_2__.ProspectCustomerListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_3__.ShareComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                {
                    path: '',
                    component: _prospect_customer_list_component__WEBPACK_IMPORTED_MODULE_2__.ProspectCustomerListComponent,
                },
            ]),
        ]
    })
], ProspectCustomerListModule);



/***/ }),

/***/ 29464:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/prospect-customer-list/prospect-customer-list.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\" [class.remove-p]=\"isPopup\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">Prospect Customer List</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <button *ngIf=\"!isPopup\" type=\"button\" class=\"btn btn-primary btn-circle\" style=\"margin-right: 1rem;\n                    \" (click)=\"navigateToDetail('create')\">\n                        <span class=\"flaticon2-plus\"></span>\n                    </button>\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getList()\">\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\n                    </button> -->\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n                        <span class=\"\">Cancel</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"customerForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <app-start-end-date [formInput]=\"customerForm\" remove-host [colClass]=\"'col-md-6'\">\n                        </app-start-end-date>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Name</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"name\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('name')\"\n                                        [class.is-valid]=\"isControlValid('name')\" formControlName=\"name\" />\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Party Code</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"partyCode\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('partyCode')\"\n                                        [class.is-valid]=\"isControlValid('partyCode')\" formControlName=\"partyCode\" />\n                                </div>\n                            </div>\n\n                        </div> -->\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Status</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                                        [class.is-invalid]=\"isControlInvalid('statusCode')\"\n                                        [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">ID Type</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                                        [class.is-invalid]=\"isControlInvalid('identityType')\"\n                                        [class.is-valid]=\"isControlValid('identityType')\" [items]=\"identityTypeOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"identityType\">\n                                    </ng-select>\n\n                                </div>\n                            </div>\n                        </div>\n                        <!-- </div> -->\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">ID No.</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"identityNumber\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('identityNumber')\"\n                                        [class.is-valid]=\"isControlValid('identityNumber')\"\n                                        formControlName=\"identityNumber\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Status</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                                        [class.is-invalid]=\"isControlInvalid('statusCode')\"\n                                        [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\" [class.remove-p]=\"isPopup\">\n            <div class=\"card-body customer-card-body\" *ngIf=\"show\">\n                <div *ngIf=\"isPopup;else no_popup\">\n                    <app-material-table-view [data]=\"customerList\" [colum]=\"ELEMENT_COL\"\n                    [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\"\n                    (rowselect)=\"rowSelected($event)\" [selectable]=\"isPopup\">\n                </app-material-table-view>\n                </div>\n                \n                <ng-template #no_popup>\n                    <app-common-list-2 *ngIf=\"customerList.length > 0\"  class=\"data-list\" #commonList [data]=\"customerList\" [type]=\"'customer'\" (btnEvent)=\"actionBtn($event)\"></app-common-list-2>\n                </ng-template>\n            </div>\n            <!-- <ng-container *ngIf=\"isPopup && !isDynamic\">\n                <div class=\"card-footer\">\n                    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\"\n                        [disabled]=\"!selected.customerId\">Next</button>\n                </div>\n            </ng-container> -->\n            <ng-container *ngIf=\"isPopup && !isDynamic\">\n                <div class=\"card-footer\">\n                    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\"\n                        [disabled]=\"!selected.customerId\">Next</button>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n<!-- </div> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prospect-customer-list_prospect-customer-list_module_ts.js.map