"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_policy_policy_module_ts"],{

/***/ 12220:
/*!*******************************************************!*\
  !*** ./src/app/pages/policy/list/policy.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyComponent": () => (/* binding */ PolicyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_policy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./policy.component.html */ 94882);
/* harmony import */ var _policy_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policy.component.scss */ 70045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-calendar */ 29621);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/is-json */ 47975);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/menu-data.service */ 37632);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../customer-detail/customer.service */ 27738);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../customer-list/customer-list.component */ 41275);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../products/products.component */ 55099);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../share-components/common-list/common-list.component */ 62914);
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../policy.service */ 46045);
/* harmony import */ var _policy_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./policy.const */ 76175);
























let PolicyComponent = class PolicyComponent {
    constructor(modalService, prodctService, router, policyService, cdRef, customerService, menuService) {
        this.modalService = modalService;
        this.prodctService = prodctService;
        this.router = router;
        this.policyService = policyService;
        this.cdRef = cdRef;
        this.customerService = customerService;
        this.menuService = menuService;
        this.quoList = [];
        this.isTeam = false;
        this.policyAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__.defaultAccessObj;
        this.Default_DOWNLOAD_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/attachment-downloader`;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_policy_const__WEBPACK_IMPORTED_MODULE_13__.PolicyCol));
        this.displayedColumns = _policy_const__WEBPACK_IMPORTED_MODULE_13__.PolicyDisplayCol;
        this.loadForm();
    }
    ngOnInit() {
        this.checkPremission();
        this.getPolicyList();
        // })
    }
    loadForm() {
        let date = new Date();
        let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1));
        let monthDay = new Date(date.setMonth(date.getMonth() + 1));
        this.policyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(lastMonthDay),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(monthDay),
            isTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(this.isTeam)
        });
    }
    ngOnDestroy() {
        // this.rerender()
    }
    cancel() {
    }
    changeView(type) {
        if (type == 'team') {
            this.isTeam = true;
        }
        else {
            this.isTeam = false;
        }
        this.policyForm.controls.isTeam.setValue(this.isTeam);
        this.cdRef.detectChanges();
        this.getPolicyList();
    }
    checkPremission() {
        this.menuService.dataAccess.subscribe((res) => {
            if (res) {
                this.policyAccess = res['application'];
                if (!this.policyAccess.edit) {
                    this.ELEMENT_COL[8].btn.edit = false;
                }
            }
        });
    }
    createOrEdit() {
        const modalRef = this.modalService.open(_products_products_component__WEBPACK_IMPORTED_MODULE_9__.ProductsComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.type = 'modal';
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.chooseCustomer(res);
                }
            }
        });
    }
    chooseCustomer(prod) {
        const modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__.CustomerListComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.isPopup = true;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.prodctService.creatingCustomer = res.data;
                    this.prodctService.createingProd = prod.data;
                    this.prodctService.editData = null;
                    this.prodctService.referenceID = null;
                    this.prodctService.viewType = 'policy';
                    this.prodctService.type = 'policy';
                    this.router.navigateByUrl("/product-form");
                }
            }
        });
    }
    getPolicyList() {
        this.policyService.getPolicyList(this.policyForm.getRawValue()).toPromise().then((res) => {
            if (res) {
                // console.log(res);
                this.quoList = res;
                for (var i = 0; i < this.quoList.length; i++) {
                    if (this.quoList[i].icon) {
                        this.quoList[i].productImage = this.Default_DOWNLOAD_URL + '/' + this.quoList[i].icon;
                    }
                }
                this.cdRef.detectChanges();
                if (this.commonList) {
                    this.commonList.detchChange();
                }
                //this.matTable.reChangeData()
                // })
            }
        });
    }
    editLayout(item) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(undefined); }))]).toPromise().then((res) => {
            if (res[0]) {
                this.prodctService.createingProd = res[0];
                this.prodctService.creatingCustomer = res[1];
                this.prodctService.type = 'policy';
                this.prodctService.viewType = 'policy';
                this.prodctService.editData = item;
                this.prodctService.referenceID = item.quotationId;
                this.prodctService.creatingLeadId = item.leadId;
                this.router.navigateByUrl("/product-form");
            }
        });
    }
    FormatedDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(date, "YYYYMMDD").format('MM/DD/YYYY');
    }
    actionBtn(event) {
        if (event.cmd == 'view') {
            this.goViewDetail(event.data);
        }
        else if (event.cmd == 'edit') {
            this.editLayout(event.data);
        }
    }
    goViewDetail(item) {
        this.prodctService.findOne(item.productId).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProd = res;
                this.prodctService.previewType = 'policy';
                this.prodctService.editData = item;
                this.router.navigateByUrl("/resourse-detail");
            }
        });
    }
};
PolicyComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_10__.ProductDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
    { type: _policy_service__WEBPACK_IMPORTED_MODULE_12__.PolicyService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef },
    { type: _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_7__.CustomerService },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__.MenuDataService }
];
PolicyComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableViewComponent,] }],
    commonList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: [_share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_11__.CommonList2Component,] }]
};
PolicyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-policy',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_policy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: angular_calendar__WEBPACK_IMPORTED_MODULE_22__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_3__.MY_FORMATS },
        ],
        styles: [_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PolicyComponent);



/***/ }),

/***/ 75535:
/*!*******************************************************!*\
  !*** ./src/app/pages/policy/policy-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyPageComponent": () => (/* binding */ PolicyPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let PolicyPageComponent = class PolicyPageComponent {
    ngOnInit() {
    }
};
PolicyPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-policy-page',
        template: `<router-outlet></router-outlet>`,
    })
], PolicyPageComponent);



/***/ }),

/***/ 20097:
/*!***********************************************!*\
  !*** ./src/app/pages/policy/policy.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyModule": () => (/* binding */ PolicyModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _list_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/policy.component */ 12220);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/products.module */ 47827);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _policy_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy-page.component */ 75535);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share-components/share-component.module */ 92275);













let PolicyModule = class PolicyModule {
};
PolicyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_policy_page_component__WEBPACK_IMPORTED_MODULE_4__.PolicyPageComponent, _list_policy_component__WEBPACK_IMPORTED_MODULE_0__.PolicyComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModalModule,
            _products_products_module__WEBPACK_IMPORTED_MODULE_2__.ProductsModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_5__.LanguageModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__.CRUDTableModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_6__.ShareComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
                {
                    path: 'application',
                    component: _policy_page_component__WEBPACK_IMPORTED_MODULE_4__.PolicyPageComponent,
                    children: [
                        {
                            path: 'list',
                            component: _list_policy_component__WEBPACK_IMPORTED_MODULE_0__.PolicyComponent,
                        },
                    ]
                }
            ]),
        ]
    })
], PolicyModule);



/***/ }),

/***/ 94882:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/policy/list/policy.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12 text-right pb-5\">\n        <button class=\"btn btn-light-dark new-btn-dark-gray mr-2 btn-round\" [ngClass]=\"{'activated' : !isTeam}\" (click)=\"changeView('myview')\">{{\"FORM.my_view\" | translate}}</button>\n        <button class=\"btn btn-light-dark new-btn-dark-gray btn-round\" [ngClass]=\"{'activated' : isTeam}\" (click)=\"changeView('team')\">{{\"FORM.team_veiw\" | translate}}</button>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">{{\"FORM.application_list\" | translate}}</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"navigateToDetail('create')\">\n            <span class=\"flaticon2-plus\"></span>\n          </button> -->\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 75px;\" (click)=\"getPolicyList()\">\n          \n          </button> -->\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getPolicyList()\"></span>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n            <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\n        </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"policyForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <app-start-end-date [formInput]=\"policyForm\" remove-host [colClass]=\"'col-md-6'\"></app-start-end-date>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\">\n            <div class=\"card-body customer-card-body\">\n                <app-common-list-2 *ngIf=\"quoList.length > 0\"  class=\"data-list\" #commonList [data]=\"quoList\" [type]=\"'policy'\" (btnEvent)=\"actionBtn($event)\"></app-common-list-2>\n\n                <!-- <app-application-data-list [applications]=\"quoList\"></app-application-data-list> -->\n\n                <!-- begin:Table -->\n                <!-- <app-material-table-view [data]=\"quoList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n                    (emitter)=\"actionBtn($event)\">\n                </app-material-table-view> -->\n                <!-- end: Table -->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 70045:
/*!*********************************************************!*\
  !*** ./src/app/pages/policy/list/policy.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".activated {\n  background-color: #ff8100 !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJwb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZhdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MTAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_policy_policy_module_ts.js.map