"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_customer-list_customer-list_share_module_ts"],{

/***/ 41275:
/*!****************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListComponent": () => (/* binding */ CustomerListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./customer-list.component.html */ 20450);
/* harmony import */ var _customer_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list.component.scss */ 29193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _customer_list_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-list.const */ 62311);
/* harmony import */ var _customer_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list.service */ 14362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_metronic/core */ 39123);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/is-json */ 47975);














let CustomerListComponent = class CustomerListComponent {
    constructor(router, cdf, customerListService, modalService) {
        this.router = router;
        this.cdf = cdf;
        this.customerListService = customerListService;
        this.modalService = modalService;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_customer_list_const__WEBPACK_IMPORTED_MODULE_3__.CustomerCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_customer_list_const__WEBPACK_IMPORTED_MODULE_3__.CustomerDisplayCol));
        this.customerList = [];
        this.statusOption = _customer_list_const__WEBPACK_IMPORTED_MODULE_3__.Status;
        this.identityTypeOption = _customer_list_const__WEBPACK_IMPORTED_MODULE_3__.IdentityType;
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
        this.show = true;
        this.getList();
    }
    loadForm() {
        this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            "name": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "identityType": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "identityNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "statusCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "partyCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null)
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
CustomerListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _customer_list_service__WEBPACK_IMPORTED_MODULE_4__.CustomerListService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal }
];
CustomerListComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }],
    selectedUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    isPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    party: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isDynamic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
CustomerListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer-list',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.CustomDateParserFormatter },
            // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_6__.MY_FORMATS },
        ],
        styles: [_customer_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerListComponent);



/***/ }),

/***/ 62311:
/*!************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.const.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCol": () => (/* binding */ CustomerCol),
/* harmony export */   "CustomerDisplayCol": () => (/* binding */ CustomerDisplayCol),
/* harmony export */   "Status": () => (/* binding */ Status),
/* harmony export */   "IdentityType": () => (/* binding */ IdentityType)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const CustomerCol = [
    {
        title: "First Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "firstName"
    },
    {
        title: "Middle Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "middleName"
    },
    {
        title: "Last Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "lastName"
    },
    {
        title: "Party Code",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "partyCode"
    },
    {
        title: "ID Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "identityType",
    },
    {
        title: "ID No.",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "identityNumber",
    },
    {
        title: "Date of Birth",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "dateOfBirth",
        isFromatDate: true
    },
    {
        title: "Father Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "fatherName"
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "statusCode",
        isCustomerStatus: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true
        }
    },
];
const CustomerDisplayCol = [
    "firstName",
    "middleName",
    "lastName",
    "partyCode",
    "identityType",
    "identityNumber",
    "dateOfBirth",
    "fatherName",
    "statusCode",
    "actions",
];
const Status = [
    {
        code: "A",
        value: "Active"
    }, {
        code: "I",
        value: "Inactive"
    }
];
const IdentityType = [
    {
        code: "NRC",
        value: "NRC"
    }, {
        code: "FRC",
        value: "FRC"
    }, {
        code: "PASSPORT",
        value: "Passport"
    }, {
        code: "OTHER",
        value: "Other"
    }
];


/***/ }),

/***/ 14362:
/*!**************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListService": () => (/* binding */ CustomerListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);




const API_CUSTOMER_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/customer`;
let CustomerListService = class CustomerListService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCustomerList(search = {}, party, popup) {
        let url = API_CUSTOMER_URL + "?";
        if (search.name) {
            url = url + "name=" + search.name + "&";
        }
        if (search.partyCode) {
            url = url + "partyCode=" + search.partyCode + "&";
        }
        if (search.statusCode) {
            url = url + "statusCode=" + search.statusCode + "&";
        }
        if (search.identityType) {
            url = url + "identityType=" + search.identityType + "&";
        }
        if (search.identityNumber) {
            url = url + "identityNumber=" + search.identityNumber + "&";
        }
        if (popup) {
            url = url + "isPartyCode=" + party;
        }
        console.log(url);
        return this.httpClient.get(url);
    }
};
CustomerListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CustomerListService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CustomerListService);



/***/ }),

/***/ 90860:
/*!*******************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.share.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListShareModule": () => (/* binding */ CustomerListShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _customer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-list.component */ 41275);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);








let CustomerListShareModule = class CustomerListShareModule {
};
CustomerListShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_customer_list_component__WEBPACK_IMPORTED_MODULE_2__.CustomerListComponent],
        exports: [_customer_list_component__WEBPACK_IMPORTED_MODULE_2__.CustomerListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ]
    })
], CustomerListShareModule);



/***/ }),

/***/ 20450:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/customer-list/customer-list.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\" [class.remove-p]=\"isPopup\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">Customer List</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <button *ngIf=\"!isPopup\" type=\"button\" class=\"btn btn-primary btn-circle\"\n                        (click)=\"navigateToDetail('create')\">\n                        <span class=\"flaticon2-plus\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getList()\">\n                        <span class=\"flaticon2-magnifier-tool\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n                        <span class=\"\">Cancel</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"customerForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Name</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"name\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('name')\"\n                                        [class.is-valid]=\"isControlValid('name')\" formControlName=\"name\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Party Code</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"partyCode\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('partyCode')\"\n                                        [class.is-valid]=\"isControlValid('partyCode')\" formControlName=\"partyCode\" />\n                                </div>\n                            </div>\n                        </div>\n                       \n                    </div>\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">ID Type</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                                        [class.is-invalid]=\"isControlInvalid('identityType')\"\n                                        [class.is-valid]=\"isControlValid('identityType')\" [items]=\"identityTypeOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"identityType\">\n                                    </ng-select>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">ID No.</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"identityNumber\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('identityNumber')\"\n                                        [class.is-valid]=\"isControlValid('identityNumber')\"\n                                        formControlName=\"identityNumber\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Status</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                                        [class.is-invalid]=\"isControlInvalid('statusCode')\"\n                                        [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\" [class.remove-p]=\"isPopup\">\n            <div class=\"card-body customer-card-body\" *ngIf=\"show\">\n                <app-material-table-view [data]=\"customerList\" [colum]=\"ELEMENT_COL\"\n                    [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\"\n                    (rowselect)=\"rowSelected($event)\" [selectable]=\"isPopup\">\n                </app-material-table-view>\n            </div>\n            <ng-container *ngIf=\"isPopup && !isDynamic\">\n                <div class=\"card-footer\">\n                    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\"\n                        [disabled]=\"!selected.customerId\">Next</button>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 29193:
/*!******************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.component.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".remove-p {\n  margin-bottom: 0px;\n}\n\n.col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-group.row {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRiIsImZpbGUiOiJjdXN0b21lci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbW92ZS1we1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uY29sLWZvcm0tbGFiZWwge1xuICBwYWRkaW5nLXRvcCAgIDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmZvcm0tZ3JvdXAucm93e1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_customer-list_customer-list_share_module_ts.js.map