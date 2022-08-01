"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_quotations_quotations_module_ts"],{

/***/ 54403:
/*!***************************************************************!*\
  !*** ./src/app/pages/quotations/list/quotations.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationsComponent": () => (/* binding */ QuotationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _quotations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotations.component.html?ngResource */ 77103);
/* harmony import */ var _quotations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotations.component.scss?ngResource */ 57262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-calendar */ 65610);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/is-json */ 88757);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/menu-data.service */ 17606);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../customer-detail/customer.service */ 56581);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../customer-list/customer-list.component */ 17585);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../products/products.component */ 97539);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../share-components/common-list/common-list.component */ 99140);
/* harmony import */ var _quotation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../quotation.service */ 75943);
/* harmony import */ var _quotation_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quotation.const */ 16537);
























let QuotationsComponent = class QuotationsComponent {
    constructor(modalService, cdf, prodctService, router, quoService, cdRef, customerService, menuService) {
        this.modalService = modalService;
        this.cdf = cdf;
        this.prodctService = prodctService;
        this.router = router;
        this.quoService = quoService;
        this.cdRef = cdRef;
        this.customerService = customerService;
        this.menuService = menuService;
        this.quoList = [];
        this.quoAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__.defaultAccessObj;
        this.policyAccess = _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__.defaultAccessObj;
        this.isTeam = false;
        this.product = [];
        this.productOption = [];
        this.Default_DOWNLOAD_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/attachment-downloader`;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_quotation_const__WEBPACK_IMPORTED_MODULE_13__.QuotationCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_quotation_const__WEBPACK_IMPORTED_MODULE_13__.QuoDisplayCol));
        this.loadForm();
    }
    ngOnInit() {
        this.checkPremission();
        this.getQuoList();
        this.getProduct();
        // })
    }
    loadForm() {
        let date = new Date();
        let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1));
        let monthDay = new Date(date.setMonth(date.getMonth() + 1));
        this.quotationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(lastMonthDay),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(monthDay),
            isTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(this.isTeam),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null),
            policyholderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null),
            applicationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null),
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
    getProduct() {
        this.prodctService
            .getAll('yes')
            .toPromise()
            .then((res) => {
            if (res) {
                this.product = res;
                this.productOption = res.map((x) => {
                    return { code: x.id, value: x.name, type: x.type };
                });
                this.cdf.detectChanges();
                // this.getProductOption()
            }
        });
    }
    clear(key) {
        if (key == 'productId') {
            this.quotationForm.controls[key].setValue(null);
        }
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(undefined); }))]).toPromise().then((res) => {
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.prodctService.findOne(item.productId), this.customerService.findOne(item.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(undefined); }))]).toPromise().then((res) => {
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
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_10__.ProductDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router },
    { type: _quotation_service__WEBPACK_IMPORTED_MODULE_12__.QuotationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef },
    { type: _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_7__.CustomerService },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_5__.MenuDataService }
];
QuotationsComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableViewComponent,] }],
    commonList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: [_share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_11__.CommonList2Component,] }]
};
QuotationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-quotations',
        template: _quotations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: angular_calendar__WEBPACK_IMPORTED_MODULE_22__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_3__.MY_FORMATS },
        ],
        styles: [_quotations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuotationsComponent);



/***/ }),

/***/ 73320:
/*!**************************************************************!*\
  !*** ./src/app/pages/quotations/quotation-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationPageComponent": () => (/* binding */ QuotationPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


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

/***/ 40061:
/*!*******************************************************!*\
  !*** ./src/app/pages/quotations/quotations.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationsModule": () => (/* binding */ QuotationsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _list_quotations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/quotations.component */ 54403);
/* harmony import */ var _quotation_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotation-page.component */ 73320);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/products.module */ 95712);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-list/customer-list.share.module */ 36277);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-components/share-component.module */ 94142);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);















let QuotationsModule = class QuotationsModule {
};
QuotationsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_quotation_page_component__WEBPACK_IMPORTED_MODULE_1__.QuotationPageComponent, _list_quotations_component__WEBPACK_IMPORTED_MODULE_0__.QuotationsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModalModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__.CRUDTableModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_6__.LanguageModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_7__.ShareComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
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

/***/ 57262:
/*!****************************************************************************!*\
  !*** ./src/app/pages/quotations/list/quotations.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".activated {\n  background-color: #ff8100 !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoicXVvdGF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmF0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgxMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 77103:
/*!****************************************************************************!*\
  !*** ./src/app/pages/quotations/list/quotations.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 text-right pb-5\">\n        <button class=\"btn btn-light-dark new-btn-dark-gray mr-2 btn-round\" [ngClass]=\"{'activated' : !isTeam}\"\n            (click)=\"changeView('myview')\">{{\"FORM.my_view\" | translate}}</button>\n        <button class=\"btn btn-light-dark new-btn-dark-gray btn-round\" [ngClass]=\"{'activated' : isTeam}\"\n            (click)=\"changeView('team')\">{{\"FORM.team_veiw\" | translate}}</button>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">{{\"FORM.quotation_list\" | translate}}</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"navigateToDetail('create')\">\n                    <span class=\"flaticon2-plus\"></span>\n                    </button> -->\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 75px;\" (click)=\"getQuoList()\">\n                    <span class=\"flaticon2-magnifier-tool search-tool\"></span>\n                    </button> -->\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getQuoList()\"></span>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n                        <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"quotationForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <app-start-end-date [formInput]=\"quotationForm\" remove-host [colClass]=\"'col-xl-4 col-sm-6'\">\n                        </app-start-end-date>\n\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\"> Product Name</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\" (clear)=\"clear('productId')\"\n                                        [items]=\"productOption\" bindLabel=\"value\" bindValue=\"code\"\n                                        formControlName=\"productId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\"> Policy Holder Name</label>\n                                <div class=\"col-sm-8\">\n                                    <input class=\"form-control form-control-sm\" formControlName=\"policyholderName\"\n                                        autocomplete=\"off\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\"> Application ID</label>\n                                <div class=\"col-sm-8\">\n                                    <input class=\"form-control form-control-sm\" formControlName=\"applicationId\"\n                                        autocomplete=\"off\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\">\n            <!-- <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">Quotation List</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    </div>\n            </div> -->\n            <div class=\"card-body customer-card-body\">\n                <app-common-list-2 *ngIf=\"quoList.length > 0\" class=\"data-list\" #commonList [data]=\"quoList\"\n                    [type]=\"'quotat'\" (btnEvent)=\"actionBtn($event)\">\n                </app-common-list-2>\n\n                <!-- <app-quotation-data-list [quoList]=\"quoList\"></app-quotation-data-list> -->\n                <!-- begin:Table -->\n                <!-- <app-material-table-view [data]=\"quoList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n                    (emitter)=\"actionBtn($event)\">\n                </app-material-table-view> -->\n                <!-- end: Table -->\n            </div>\n        </div>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_quotations_quotations_module_ts.js.map