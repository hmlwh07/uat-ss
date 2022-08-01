"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customer-list_customer-list_const_ts-src_app_pages_customer-list_customer-list_-6e8582"],{

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
/* harmony import */ var src_app_modules_loading_toast_module_import_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/module-import-guard */ 62992);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _prospect_customer_list_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prospect-customer-list.share.module */ 51347);












let ProspectCustomerListModule = class ProspectCustomerListModule {
    constructor(parentModule) {
        (0,src_app_modules_loading_toast_module_import_guard__WEBPACK_IMPORTED_MODULE_3__.throwIfAlreadyLoaded)(parentModule, 'ProspectCustomerListModule');
    }
};
ProspectCustomerListModule.ctorParameters = () => [
    { type: ProspectCustomerListModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.SkipSelf }] }
];
ProspectCustomerListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__.LanguageModule,
            _prospect_customer_list_share_module__WEBPACK_IMPORTED_MODULE_5__.ProspectCustomerListShareModule,
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

/***/ 35937:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".remove-p {\n  margin-bottom: 0px;\n}\n\n.col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-group.row {\n  align-items: center;\n}\n\n.draggable {\n  color: white;\n  border-radius: 50%;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n  position: absolute;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFBQTtFQUlFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6ImN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVtb3ZlLXAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uY29sLWZvcm0tbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmZvcm0tZ3JvdXAucm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRyYWdnYWJsZSB7XG4gIC8vd2lkdGg6IDQwcHg7XG4gIC8vaGVpZ2h0OiA0MHB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6ICMyOWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuXG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer-list_customer-list_const_ts-src_app_pages_customer-list_customer-list_-6e8582.js.map