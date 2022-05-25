"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_qr-source-link_qr-source-link_module_ts"],{

/***/ 92908:
/*!******************************************************************!*\
  !*** ./src/app/pages/qr-source-link/qr-source-link.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrSourceLinkComponent": () => (/* binding */ QrSourceLinkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_qr_source_link_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./qr-source-link.component.html */ 33638);
/* harmony import */ var _qr_source_link_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-source-link.component.scss */ 95886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 62489);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var _policy_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../policy/policy.service */ 46045);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/services/products-data.service */ 35618);








let QrSourceLinkComponent = class QrSourceLinkComponent {
    constructor(activatedRoute, prodctService, router, policyService) {
        this.activatedRoute = activatedRoute;
        this.prodctService = prodctService;
        this.router = router;
        this.policyService = policyService;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            let resourceId = params['resourceId'];
            let productId = params['productId'];
            this.goViewDetail(productId, resourceId);
        });
    }
    goViewDetail(productId, resourceId) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([this.prodctService.findOne(productId), this.policyService.findOne(resourceId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(undefined); }))]).toPromise().then((res) => {
            if (res[0] && res[1]) {
                this.prodctService.createingProd = res[0];
                this.prodctService.previewType = 'policy';
                this.prodctService.editData = res[1];
                this.router.navigateByUrl("/resourse-detail");
            }
        });
    }
};
QrSourceLinkComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _policy_policy_service__WEBPACK_IMPORTED_MODULE_2__.PolicyService }
];
QrSourceLinkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-qr-source-link',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_qr_source_link_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_qr_source_link_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QrSourceLinkComponent);



/***/ }),

/***/ 81961:
/*!***************************************************************!*\
  !*** ./src/app/pages/qr-source-link/qr-source-link.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrModule": () => (/* binding */ QrModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _qr_source_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-source-link.component */ 92908);









let QrModule = class QrModule {
};
QrModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_qr_source_link_component__WEBPACK_IMPORTED_MODULE_2__.QrSourceLinkComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _qr_source_link_component__WEBPACK_IMPORTED_MODULE_2__.QrSourceLinkComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe]
    })
], QrModule);



/***/ }),

/***/ 33638:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/qr-source-link/qr-source-link.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("");

/***/ }),

/***/ 95886:
/*!********************************************************************!*\
  !*** ./src/app/pages/qr-source-link/qr-source-link.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1zb3VyY2UtbGluay5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_qr-source-link_qr-source-link_module_ts.js.map