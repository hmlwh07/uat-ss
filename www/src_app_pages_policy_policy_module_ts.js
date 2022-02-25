"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_policy_policy_module_ts"],{

/***/ 27738:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer-detail/customer.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





const API_CUSTOMER_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/customer`;
let CustomerService = class CustomerService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_CUSTOMER_URL);
        this.httpClient = httpClient;
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CustomerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ 12220:
/*!*******************************************************!*\
  !*** ./src/app/pages/policy/list/policy.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyComponent": () => (/* binding */ PolicyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_policy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./policy.component.html */ 94882);
/* harmony import */ var _policy_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policy.component.scss */ 70045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../customer-detail/customer.service */ 27738);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../customer-list/customer-list.component */ 41275);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/products.component */ 55099);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../policy.service */ 46045);
/* harmony import */ var _policy_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./policy.const */ 76175);
















let PolicyComponent = class PolicyComponent {
    constructor(modalService, prodctService, router, policyService, cdRef, customerService) {
        this.modalService = modalService;
        this.prodctService = prodctService;
        this.router = router;
        this.policyService = policyService;
        this.cdRef = cdRef;
        this.customerService = customerService;
        this.quoList = [];
        this.ELEMENT_COL = _policy_const__WEBPACK_IMPORTED_MODULE_9__.PolicyCol;
        this.displayedColumns = _policy_const__WEBPACK_IMPORTED_MODULE_9__.PolicyDisplayCol;
    }
    ngOnInit() {
        this.getPolicyList();
        // })
    }
    ngOnDestroy() {
        // this.rerender()
    }
    createOrEdit() {
        const modalRef = this.modalService.open(_products_products_component__WEBPACK_IMPORTED_MODULE_6__.ProductsComponent, { size: 'xl', backdrop: false });
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
        const modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__.CustomerListComponent, { size: 'xl', backdrop: false });
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
        this.policyService.findAll().toPromise().then((res) => {
            if (res) {
                this.quoList = res;
                this.cdRef.detectChanges();
                this.matTable.reChangeData();
                // })
            }
        });
    }
    editLayout(item) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(undefined); }))]).toPromise().then((res) => {
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
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _policy_service__WEBPACK_IMPORTED_MODULE_8__.PolicyService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_4__.CustomerService }
];
PolicyComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableViewComponent,] }]
};
PolicyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-policy',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_policy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PolicyComponent);



/***/ }),

/***/ 76175:
/*!***************************************************!*\
  !*** ./src/app/pages/policy/list/policy.const.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyCol": () => (/* binding */ PolicyCol),
/* harmony export */   "PolicyDisplayCol": () => (/* binding */ PolicyDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const PolicyCol = [
    {
        title: "Application ID",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "id",
    },
    {
        title: "Product Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productName",
    },
    {
        title: "Product Code",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productCode",
    },
    {
        title: "Quotation ID",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "quotationId",
    },
    {
        title: "Agent Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "agentFirstName",
    },
    {
        title: "Premium",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "premium",
        amtFormat: true,
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "status",
        isStatus: true
    },
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "createdAt",
        isDate: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            view: true,
            edit: true
        }
    },
];
const PolicyDisplayCol = [
    "id",
    "productName",
    "productCode",
    "agentFirstName",
    "premium",
    "status",
    "createdAt",
    "actions",
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _list_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/policy.component */ 12220);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/products.module */ 47827);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _policy_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy-page.component */ 75535);











let PolicyModule = class PolicyModule {
};
PolicyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_policy_page_component__WEBPACK_IMPORTED_MODULE_4__.PolicyPageComponent, _list_policy_component__WEBPACK_IMPORTED_MODULE_0__.PolicyComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
            _products_products_module__WEBPACK_IMPORTED_MODULE_2__.ProductsModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__.CRUDTableModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\r\n    <div class=\"col-12 text-right pb-5\">\r\n        <button class=\"btn btn-warning mr-2 btn-round\">My View</button>\r\n        <button class=\"btn btn-light-dark btn-round\">Team View</button>\r\n    </div>\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\">Application List</h3>\r\n                </div>\r\n                <div class=\"card-toolbar\">\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"createOrEdit()\">\r\n            <span class=\"flaticon2-plus\"></span>\r\n          </button> -->\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"createOrEdit()\">Create New Policy</button> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body customer-card-body\">\r\n                <!-- begin:Table -->\r\n                <app-material-table-view [data]=\"quoList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\">\r\n                </app-material-table-view>\r\n                <!-- end: Table -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 70045:
/*!*********************************************************!*\
  !*** ./src/app/pages/policy/list/policy.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY3kuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_policy_policy_module_ts.js.map