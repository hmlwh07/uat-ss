"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_lead-list_lead-list_module_ts-src_app_pages_static-pages_static-pages_data_ts"],{

/***/ 71089:
/*!*****************************************************!*\
  !*** ./src/app/pages/lead-list/lead-list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadListModule": () => (/* binding */ LeadListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _lead_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lead-list.component */ 39310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 8425);
/* harmony import */ var _lead_list_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead-list.share.module */ 48416);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _static_pages_static_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../static-pages/static-pages.module */ 83992);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share-components/share-component.module */ 94142);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);















let LeadListModule = class LeadListModule {
};
LeadListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _static_pages_static_pages_module__WEBPACK_IMPORTED_MODULE_4__.StaticPagesModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDatepickerModule,
            _lead_list_share_module__WEBPACK_IMPORTED_MODULE_3__.LeadListShareModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_5__.ShareComponentModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_6__.LanguageModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                {
                    path: '',
                    component: _lead_list_component__WEBPACK_IMPORTED_MODULE_0__.LeadListComponent,
                },
            ]),
        ]
    })
], LeadListModule);



/***/ }),

/***/ 93900:
/*!*********************************************************!*\
  !*** ./src/app/pages/static-pages/static-pages.data.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOnID": () => (/* binding */ AddOnID),
/* harmony export */   "AddonpageID": () => (/* binding */ AddonpageID),
/* harmony export */   "CoveragePageID": () => (/* binding */ CoveragePageID),
/* harmony export */   "EducationLifeGRAPID": () => (/* binding */ EducationLifeGRAPID),
/* harmony export */   "EducationLifeID": () => (/* binding */ EducationLifeID),
/* harmony export */   "EndowmentGRAPID": () => (/* binding */ EndowmentGRAPID),
/* harmony export */   "EndowmentID": () => (/* binding */ EndowmentID),
/* harmony export */   "FirePageID": () => (/* binding */ FirePageID),
/* harmony export */   "FireRiskID": () => (/* binding */ FireRiskID),
/* harmony export */   "HealthPageID": () => (/* binding */ HealthPageID),
/* harmony export */   "HealthPagePolicyID": () => (/* binding */ HealthPagePolicyID),
/* harmony export */   "HealthQuoPageID": () => (/* binding */ HealthQuoPageID),
/* harmony export */   "PaymentFrequency": () => (/* binding */ PaymentFrequency),
/* harmony export */   "STATIC_PAGES": () => (/* binding */ STATIC_PAGES),
/* harmony export */   "STATIC_PRINTS": () => (/* binding */ STATIC_PRINTS),
/* harmony export */   "TRAVELID": () => (/* binding */ TRAVELID)
/* harmony export */ });
/* harmony import */ var _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/models/product.dto */ 79611);

const STATIC_PAGES = [
    {
        id: 'addon_1634010770155',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "AddOn",
        showLabel: "AddOn",
        pageType: 'form',
        tableName: 'addon',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'coverage_1634010995936',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Coverage",
        showLabel: "Coverage",
        pageType: 'form',
        tableName: 'coverage',
        pageIcon: "fa-clipboard-check",
    },
    {
        id: 'static_1634018514043',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Product Detail",
        showLabel: "Motor Product Detail",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1635747288508',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Product Detail",
        showLabel: "Motor Product Detail (Application)",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1635218894755',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Payment Schedules",
        showLabel: "Payment Schedules",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1635309151504',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Education Life Benefit",
        showLabel: "Education Life Benefit",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1641364737069',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Product Detail",
        showLabel: "Fire Product Detail",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1643116155828',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Risk Detail",
        showLabel: "Fire Risk Detail",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1644896661652',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Benefit Illustration",
        showLabel: "Endowment Benefit Illustration",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    }, {
        id: 'static_1648784270432',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Optional Coverages",
        showLabel: "Motor Addons",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    }, {
        id: 'static_1648784270356',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Travel Risk",
        showLabel: "Travel Risk",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    }
];
const STATIC_PRINTS = [
    {
        id: 'static_1635309151504',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Education Life Declare",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
];
const HealthPageID = "static_1634018514043";
const FirePageID = "static_1641364737069";
const FireRiskID = "static_1643116155828";
const HealthPagePolicyID = "static_1635747288508";
const HealthQuoPageID = "static_1635218894755";
const CoveragePageID = "coverage_1634010995936";
const AddonpageID = "addon_1634010770155";
const EducationLifeID = "static_1635309151504";
const EducationLifeGRAPID = "static_1635392848894";
const EndowmentID = "static_1644896661652";
const EndowmentGRAPID = "static_1644896804675";
const AddOnID = "static_1648784270432";
const TRAVELID = "static_1648784270356";
var PaymentFrequency;
(function (PaymentFrequency) {
    PaymentFrequency["Monthly"] = "monthly";
    PaymentFrequency["Quatarly"] = "quatarly";
    PaymentFrequency["SemiAnnually"] = "semi_annually";
    PaymentFrequency["Annually"] = "annually";
})(PaymentFrequency || (PaymentFrequency = {}));


/***/ })

}]);
//# sourceMappingURL=src_app_pages_lead-list_lead-list_module_ts-src_app_pages_static-pages_static-pages_data_ts.js.map