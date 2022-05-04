"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_quotations_quotations_module_ts"],{

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

/***/ 17318:
/*!**********************************************************!*\
  !*** ./src/app/pages/quotations/list/quotation.const.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationCol": () => (/* binding */ QuotationCol),
/* harmony export */   "QuoDisplayCol": () => (/* binding */ QuoDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const QuotationCol = [
    {
        title: "Quotation ID",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "id",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Product Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productName",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Product Code",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productCode",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Agent Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "agentFirstName",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Premium",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "premium",
        amtFormat: true,
        // isTitle?: boolean
        // isDate?: boolen
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
        // amtFormat?: boolean,
        // isTitle?: boolean
        isDate: true
    },
    {
        title: "Application",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.TEXT,
        field: "create application",
        // amtFormat?: boolean,
        // isTitle?: boolean
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
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const QuoDisplayCol = [
    "id",
    "productName",
    "productCode",
    "agentFirstName",
    "premium",
    "status",
    "createdAt",
    "create application",
    "actions",
];


/***/ }),

/***/ 27213:
/*!***************************************************************!*\
  !*** ./src/app/pages/quotations/list/quotations.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationsComponent": () => (/* binding */ QuotationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quotations_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quotations.component.html */ 83002);
/* harmony import */ var _quotations_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotations.component.scss */ 67548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/menu-data.service */ 37632);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../customer-detail/customer.service */ 27738);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../customer-list/customer-list.component */ 41275);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../products/products.component */ 55099);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../share-components/common-list/common-list.component */ 62914);
/* harmony import */ var _quotation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../quotation.service */ 80842);
/* harmony import */ var _quotation_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quotation.const */ 17318);




















let QuotationsComponent = class QuotationsComponent {
    constructor(modalService, prodctService, router, quoService, cdRef, customerService, menuService) {
        this.modalService = modalService;
        this.prodctService = prodctService;
        this.router = router;
        this.quoService = quoService;
        this.cdRef = cdRef;
        this.customerService = customerService;
        this.menuService = menuService;
        this.quoList = [];
        this.quoAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_4__.defaultAccessObj;
        this.policyAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_4__.defaultAccessObj;
        this.isTeam = false;
        this.Default_DOWNLOAD_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/attachment-downloader`;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_quotation_const__WEBPACK_IMPORTED_MODULE_12__.QuotationCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_quotation_const__WEBPACK_IMPORTED_MODULE_12__.QuoDisplayCol));
        this.loadForm();
    }
    ngOnInit() {
        this.checkPremission();
        this.getQuoList();
        // })
    }
    loadForm() {
        let date = new Date();
        let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1));
        let monthDay = new Date(date.setMonth(date.getMonth() + 1));
        this.quotationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(lastMonthDay),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(monthDay),
            isTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.isTeam)
        });
    }
    checkPremission() {
        this.menuService.dataAccess.subscribe((res) => {
            if (res) {
                this.quoAccess = res['quotation'];
                this.policyAccess = res['application'];
                if (!this.quoAccess.edit) {
                    this.ELEMENT_COL[8].btn.edit = false;
                }
                if (!this.policyAccess.create) {
                    this.ELEMENT_COL.splice(7, 1);
                    this.displayedColumns.splice(7, 1);
                }
            }
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
        this.quotationForm.controls.isTeam.setValue(this.isTeam);
        this.cdRef.detectChanges();
        this.getQuoList();
    }
    createOrEdit() {
        const modalRef = this.modalService.open(_products_products_component__WEBPACK_IMPORTED_MODULE_8__.ProductsComponent, { size: 'xl', backdrop: false });
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
        const modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_7__.CustomerListComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.isPopup = true;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.prodctService.createingProd = prod.data;
                    this.prodctService.creatingCustomer = res.data;
                    this.prodctService.viewType = 'quotation';
                    this.prodctService.editData = null;
                    this.prodctService.referenceID = null;
                    this.prodctService.type = 'quotation';
                    this.router.navigateByUrl("/product-form");
                }
            }
        });
    }
    getQuoList() {
        this.quoService.getQuoList(this.quotationForm.getRawValue()).toPromise().then((res) => {
            if (res) {
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(undefined); }))]).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProd = res[0];
                this.prodctService.creatingCustomer = res[1];
                this.prodctService.type = 'quotation';
                this.prodctService.viewType = 'quotation';
                this.prodctService.editData = item;
                this.prodctService.referenceID = null;
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
        else if (event.cmd == 'create') {
            this.createPolicy(event.data);
        }
    }
    goViewDetail(item) {
        this.prodctService.findOne(item.productId).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProd = res;
                this.prodctService.editData = item;
                this.prodctService.previewType = 'quotation';
                this.router.navigateByUrl("/resourse-detail");
            }
        });
    }
    createPolicy(item) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(undefined); }))]).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProdRef = res[0];
                this.prodctService.creatingCustomer = res[1];
                this.prodctService.viewType = 'policy';
                this.prodctService.type = 'policy';
                this.prodctService.referenceID = item.id;
                this.prodctService.editData = null;
                this.prodctService.creatingLeadId = item.leadId;
                this.router.navigateByUrl("/product-form");
            }
        });
    }
};
QuotationsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_9__.ProductDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: _quotation_service__WEBPACK_IMPORTED_MODULE_11__.QuotationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef },
    { type: _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_6__.CustomerService },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_4__.MenuDataService }
];
QuotationsComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableViewComponent,] }],
    commonList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: [_share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_10__.CommonList2Component,] }]
};
QuotationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-quotations',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quotations_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_quotations_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuotationsComponent);



/***/ }),

/***/ 44084:
/*!**************************************************************!*\
  !*** ./src/app/pages/quotations/quotation-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationPageComponent": () => (/* binding */ QuotationPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let QuotationPageComponent = class QuotationPageComponent {
    ngOnInit() {
    }
};
QuotationPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-quotation-page',
        template: `<router-outlet></router-outlet>`,
    })
], QuotationPageComponent);



/***/ }),

/***/ 96058:
/*!*******************************************************!*\
  !*** ./src/app/pages/quotations/quotations.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationsModule": () => (/* binding */ QuotationsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _list_quotations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/quotations.component */ 27213);
/* harmony import */ var _quotation_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotation-page.component */ 44084);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/products.module */ 47827);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-list/customer-list.share.module */ 90860);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share-components/share-component.module */ 92275);













let QuotationsModule = class QuotationsModule {
};
QuotationsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_quotation_page_component__WEBPACK_IMPORTED_MODULE_1__.QuotationPageComponent, _list_quotations_component__WEBPACK_IMPORTED_MODULE_0__.QuotationsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModalModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__.CRUDTableModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_6__.ShareComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
                {
                    path: 'quotation',
                    component: _quotation_page_component__WEBPACK_IMPORTED_MODULE_1__.QuotationPageComponent,
                    children: [
                        {
                            path: 'list',
                            component: _list_quotations_component__WEBPACK_IMPORTED_MODULE_0__.QuotationsComponent,
                        },
                    ]
                }
            ]),
            _products_products_module__WEBPACK_IMPORTED_MODULE_3__.ProductsModule,
            _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_5__.CustomerListShareModule
        ]
    })
], QuotationsModule);



/***/ }),

/***/ 83002:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/quotations/list/quotations.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12 text-right pb-5\">\n        <button class=\"btn btn-light-dark new-btn-dark-gray mr-2 btn-round\" [ngClass]=\"{'activated' : !isTeam}\"\n            (click)=\"changeView('myview')\">My View</button>\n        <button class=\"btn btn-light-dark new-btn-dark-gray btn-round\" [ngClass]=\"{'activated' : isTeam}\"\n            (click)=\"changeView('team')\">Team View</button>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">Quotation List</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"navigateToDetail('create')\">\n            <span class=\"flaticon2-plus\"></span>\n          </button> -->\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 75px;\" (click)=\"getQuoList()\">\n            <span class=\"flaticon2-magnifier-tool search-tool\"></span>\n          </button> -->\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getQuoList()\"></span>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n                        <span class=\"\">Cancel</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"quotationForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <app-start-end-date [formInput]=\"quotationForm\" remove-host [colClass]=\"'col-md-6'\">\n                        </app-start-end-date>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\">\n            <!-- <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">Quotation List</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    </div>\n            </div> -->\n            <div class=\"card-body customer-card-body\">\n                <app-common-list-2 *ngIf=\"quoList.length > 0\" class=\"data-list\" #commonList\n                    [data]=\"quoList\" [type]=\"'quotat'\" (btnEvent)=\"actionBtn($event)\">\n                </app-common-list-2>\n\n                <!-- <app-quotation-data-list [quoList]=\"quoList\"></app-quotation-data-list> -->\n                <!-- begin:Table -->\n                <!-- <app-material-table-view [data]=\"quoList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n                    (emitter)=\"actionBtn($event)\">\n                </app-material-table-view> -->\n                <!-- end: Table -->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 67548:
/*!*****************************************************************!*\
  !*** ./src/app/pages/quotations/list/quotations.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".activated {\n  background-color: #ff8100 !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoicXVvdGF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmF0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgxMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_quotations_quotations_module_ts.js.map