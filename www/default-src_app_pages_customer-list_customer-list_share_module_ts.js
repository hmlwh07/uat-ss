"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_customer-list_customer-list_share_module_ts"],{

/***/ 17585:
/*!****************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListComponent": () => (/* binding */ CustomerListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customer_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-list.component.html?ngResource */ 97138);
/* harmony import */ var _customer_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list.component.scss?ngResource */ 35937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _customer_list_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-list.const */ 86270);
/* harmony import */ var _customer_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list.service */ 87999);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var _share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share-components/common-list/common-list.component */ 99140);














let CustomerListComponent = class CustomerListComponent {
    constructor(router, cdf, customerListService, modalService) {
        this.router = router;
        this.cdf = cdf;
        this.customerListService = customerListService;
        this.modalService = modalService;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_customer_list_const__WEBPACK_IMPORTED_MODULE_3__.CustomerCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_customer_list_const__WEBPACK_IMPORTED_MODULE_3__.CustomerDisplayCol));
        this.customerList = [];
        this.totalElements = 0;
        this.totalPages = 0;
        this.selectedPageBtn = 1;
        this.currentPage = 1;
        this.postedData = {};
        this.statusOption = _customer_list_const__WEBPACK_IMPORTED_MODULE_3__.Status;
        this.statusCustomOption = [{
                code: "A",
                value: "Active"
            }];
        this.identityTypeOption = _customer_list_const__WEBPACK_IMPORTED_MODULE_3__.IdentityType;
        this.selectedUser = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.isPopup = false;
        this.party = true;
        this.isDynamic = false;
        this.isCustom = false;
        this.show = false;
        this.loadForm();
    }
    ngOnInit() {
        if (this.isPopup) {
            this.ELEMENT_COL.splice(9, 1);
            this.displayedColumns.splice(9, 1);
        }
        this.show = true;
    }
    ngAfterViewInit() {
        this.cancel();
    }
    loadForm() {
        this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            "name": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "phoneNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "identityType": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "identityNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "statusCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "partyCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "startDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            "endDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
        });
    }
    navigateToDetail(data, id, secondaryId) {
        this.router.navigate(["/customer/customer-detail"], {
            queryParams: {
                pageStatus: data,
                pageId: id,
                pageSecondaryId: secondaryId,
                page: 'Customer'
            }
        });
    }
    searchCustomer() {
        if (this.customerForm.controls.startDate.value != null ||
            this.customerForm.controls.endDate.value != null ||
            this.customerForm.controls.name.value != null ||
            this.customerForm.controls.phoneNo.value != null ||
            this.customerForm.controls.partyCode.value != null ||
            this.customerForm.controls.statusCode.value != null ||
            this.customerForm.controls.identityType.value != null ||
            this.customerForm.controls.identityNumber.value != null) {
            this.getList();
        }
        else {
            this.cancel();
        }
    }
    reponseFromPager(event) {
        // console.log("LEADEVENT", event);
        this.currentPage = event;
        this.getDatabyPage(this.currentPage);
    }
    getList(limit = 5, offset = 1) {
        let check = this.isPopup && !this.isDynamic ? true : false;
        let postData = Object.assign(Object.assign({}, this.customerForm.getRawValue()), { limit: 5, offset: offset });
        this.postedData = postData;
        this.customerListService.getCustomerList(this.postedData, check, this.isCustom)
            .toPromise()
            .then((res) => {
            if (res) {
                // console.log("RES", res)
                // this.customerList = res.content
                this.customerList = res;
                this.totalElements = res.totalElements;
                this.totalPages = res.totalPages;
                this.selectedPageBtn = this.currentPage;
                this.cdf.detectChanges();
                if (this.commonList)
                    this.commonList.detchChange();
                if (this.matTable)
                    this.matTable.reChangeData();
                // this.matTable.reChangeData();
            }
        });
    }
    getDatabyPage(page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.currentPage = page;
            let check = this.isPopup && !this.isDynamic ? true : false;
            let postData = Object.assign(Object.assign({}, this.customerForm.getRawValue()), { limit: 5, offset: page });
            this.totalPages = 0;
            this.postedData = postData;
            yield this.customerListService.getCustomerList(this.postedData, check, this.isCustom).toPromise().then((res) => {
                if (res) {
                    // this.customerList = res.content
                    this.customerList = res;
                    this.totalElements = res.totalElements;
                    this.totalPages = res.totalPages;
                    this.selectedPageBtn = this.currentPage;
                    this.cdf.detectChanges();
                    if (this.commonList)
                        this.commonList.detchChange();
                    if (this.matTable)
                        this.matTable.reChangeData();
                }
            });
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
        this.customerList = [];
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _customer_list_service__WEBPACK_IMPORTED_MODULE_4__.CustomerListService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal }
];
CustomerListComponent.propDecorators = {
    commonList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_6__.CommonList2Component,] }],
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }],
    selectedUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    isPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    party: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isDynamic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isCustom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
CustomerListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer-list',
        template: _customer_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_5__.MY_FORMATS },
        ],
        styles: [_customer_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerListComponent);



/***/ }),

/***/ 86270:
/*!************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.const.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCol": () => (/* binding */ CustomerCol),
/* harmony export */   "CustomerDisplayCol": () => (/* binding */ CustomerDisplayCol),
/* harmony export */   "IdentityType": () => (/* binding */ IdentityType),
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

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
    }, {
        code: "T",
        value: "Terminated"
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
        code: "OTHERS",
        value: "Others"
    }
];


/***/ }),

/***/ 87999:
/*!**************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListService": () => (/* binding */ CustomerListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);





const API_CUSTOMER_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/customer`;
let CustomerListService = class CustomerListService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCustomerList(search = {}, party, popup, isCustom) {
        let url = API_CUSTOMER_URL + "?";
        if (search.name) {
            url = url + "name=" + search.name + "&";
        }
        if (search.phoneNo) {
            url = url + "phoneNo=" + search.phoneNo + "&";
        }
        if (search.partyCode) {
            url = url + "partyCode=" + search.partyCode + "&";
        }
        if (search.startDate) {
            url = url + "startDate=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.startDate).format("YYYY-MM-DD") + "&";
        }
        if (search.endDate) {
            url = url + "endDate=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.endDate).format("YYYY-MM-DD") + "&";
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
        if (search.limit) {
            url = url + "limit=" + search.limit + "&";
        }
        if (search.offset) {
            url = url + "offset=" + search.offset + "&";
        }
        if (!isCustom) {
            url = url + "isPartyCode=" + party;
        }
        return this.httpClient.get(url);
    }
};
CustomerListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CustomerListService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CustomerListService);



/***/ }),

/***/ 36277:
/*!*******************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.share.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListShareModule": () => (/* binding */ CustomerListShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _customer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-list.component */ 17585);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share-components/share-component.module */ 94142);
/* harmony import */ var src_app_modules_loading_toast_module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/loading-toast/module-import-guard */ 62992);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);












let CustomerListShareModule = class CustomerListShareModule {
    constructor(parentModule) {
        (0,src_app_modules_loading_toast_module_import_guard__WEBPACK_IMPORTED_MODULE_5__.throwIfAlreadyLoaded)(parentModule, 'CustomerListShareModule');
    }
};
CustomerListShareModule.ctorParameters = () => [
    { type: CustomerListShareModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.SkipSelf }] }
];
CustomerListShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_customer_list_component__WEBPACK_IMPORTED_MODULE_2__.CustomerListComponent],
        exports: [_customer_list_component__WEBPACK_IMPORTED_MODULE_2__.CustomerListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__.LanguageModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_4__.ShareComponentModule
        ],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal]
    })
], CustomerListShareModule);



/***/ }),

/***/ 35937:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".remove-p {\n  margin-bottom: 0px;\n}\n\n.col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-group.row {\n  align-items: center;\n}\n\n.draggable {\n  color: white;\n  border-radius: 50%;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n  position: absolute;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFBQTtFQUlFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6ImN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVtb3ZlLXAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uY29sLWZvcm0tbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmZvcm0tZ3JvdXAucm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRyYWdnYWJsZSB7XG4gIC8vd2lkdGg6IDQwcHg7XG4gIC8vaGVpZ2h0OiA0MHB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6ICMyOWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuXG5cbiJdfQ== */";

/***/ }),

/***/ 97138:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\" [class.remove-p]=\"isPopup\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">{{\"FORM.customer_list\" | translate}}</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <!-- <button *ngIf=\"!isPopup\" type=\"button\" class=\"btn btn-primary btn-circle\" style=\"margin-right: 1rem;\n                    \" (click)=\"navigateToDetail('create')\">\n                        <span class=\"flaticon2-plus\"></span>\n                    </button> -->\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getList()\">\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\n                    </button> -->\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"searchCustomer()\"></span>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n                        <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\n                    </button>\n                </div>\n            </div>\n\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"customerForm\">\n                    <!-- <div class=\"row\" style=\"align-items: center;\">\n                        <app-start-end-date [formInput]=\"customerForm\" remove-host [colClass]=\"'col-md-6'\">\n                        </app-start-end-date>\n                    </div> -->\n\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.identity_type\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                                        [class.is-invalid]=\"isControlInvalid('identityType')\"\n                                        [class.is-valid]=\"isControlValid('identityType')\" [items]=\"identityTypeOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"identityType\">\n                                    </ng-select>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.name\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"name\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('name')\"\n                                        [class.is-valid]=\"isControlValid('name')\" formControlName=\"name\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.nrc_frc_passport\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"identityNumber\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('identityNumber')\"\n                                        [class.is-valid]=\"isControlValid('identityNumber')\"\n                                        formControlName=\"identityNumber\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.phone_number\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"phoneNo\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('phoneNo')\"\n                                        [class.is-valid]=\"isControlValid('phoneNo')\" formControlName=\"phoneNo\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <!-- <div class=\"col-md-6\" *ngIf=\"isCustom\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                                        [class.is-invalid]=\"isControlInvalid('statusCode')\"\n                                        [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusCustomOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\"*ngIf=\"!isCustom\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                                        [class.is-invalid]=\"isControlInvalid('statusCode')\"\n                                        [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div> -->\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.party_code\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"partyCode\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('partyCode')\"\n                                        [class.is-valid]=\"isControlValid('partyCode')\" formControlName=\"partyCode\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\" [class.remove-p]=\"isPopup\">\n            <div class=\"card-body customer-card-body\" *ngIf=\"show\">\n                <div *ngIf=\"isPopup;else no_popup\">\n                    <app-material-table-view [data]=\"customerList\" [colum]=\"ELEMENT_COL\"\n                        [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\"\n                        (rowselect)=\"rowSelected($event)\" [selectable]=\"isPopup\">\n                    </app-material-table-view>\n                </div>\n                <ng-template #no_popup>\n                    <app-common-list-2 *ngIf=\"customerList.length > 0\" class=\"data-list\" #commonList\n                        [data]=\"customerList\" [type]=\"'customer'\" (btnEvent)=\"actionBtn($event)\"></app-common-list-2>\n                </ng-template>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <ng-container *ngIf=\"isPopup && !isDynamic\">\n                            <div class=\"card-footer\">\n                                <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\"\n                                    (click)=\"closeModal()\">{{\"FORM.btn_cancel\" | translate}}</button>\n                                <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\"\n                                    [disabled]=\"!selected.customerId\">{{\"FORM.btn_next\" | translate}}</button>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_customer-list_customer-list_share_module_ts.js.map