(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 40906:
/*!*************************************************************!*\
  !*** ./src/app/_metronic/core/services/products.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58824);



const productData = {
    forms: [],
    products: [],
    formObjs: [],
    configPage: []
};
let ProductsService = class ProductsService {
    constructor() {
        this.prodSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(productData);
        this.items$ = this.prodSubject.asObservable();
    }
    // Here you able to load your menu from server/data-base/localStorage
    // Default => from DynamicAsideMenuConfig
    loadItems(data) {
        this.setProduct(data);
    }
    setProduct(data) {
        this.prodSubject.next(data);
    }
};
ProductsService.ctorParameters = () => [];
ProductsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ 56526:
/*!************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenComponent": () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_splash_screen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./splash-screen.component.html */ 67648);
/* harmony import */ var _splash_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen.component.scss */ 70706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _splash_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.service */ 36052);





let SplashScreenComponent = class SplashScreenComponent {
    constructor(el, splashScreenService) {
        this.el = el;
        this.splashScreenService = splashScreenService;
    }
    ngOnInit() {
        this.splashScreenService.init(this.splashScreen);
    }
};
SplashScreenComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef },
    { type: _splash_screen_service__WEBPACK_IMPORTED_MODULE_2__.SplashScreenService }
];
SplashScreenComponent.propDecorators = {
    splashScreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['splashScreen', { static: true },] }]
};
SplashScreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-splash-screen',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_splash_screen_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_splash_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashScreenComponent);



/***/ }),

/***/ 95312:
/*!*********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenModule": () => (/* binding */ SplashScreenModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _splash_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-screen.component */ 56526);




let SplashScreenModule = class SplashScreenModule {
};
SplashScreenModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_0__.SplashScreenComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_0__.SplashScreenComponent],
    })
], SplashScreenModule);



/***/ }),

/***/ 36052:
/*!**********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenService": () => (/* binding */ SplashScreenService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);



let SplashScreenService = class SplashScreenService {
    /**
     * Service constructor
     *
     * @param animationBuilder: AnimationBuilder
     */
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
    }
    /**
     * Init
     *
     * @param element: ElementRef
     */
    init(element) {
        this.el = element;
    }
    /**
     * Hide
     */
    hide() {
        if (this.stopped || !this.el) {
            return;
        }
        const player = this.animationBuilder
            .build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '1' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '0' }))])
            .create(this.el.nativeElement);
        player.onDone(() => {
            if (typeof this.el.nativeElement.remove === 'function') {
                this.el.nativeElement.remove();
            }
            else {
                this.el.nativeElement.style.display = 'none !important';
            }
            this.stopped = true;
        });
        setTimeout(() => player.play(), 100);
    }
};
SplashScreenService.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AnimationBuilder }
];
SplashScreenService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], SplashScreenService);



/***/ }),

/***/ 51265:
/*!*************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/action-button/action-button.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionButtonComponent": () => (/* binding */ ActionButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_action_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./action-button.component.html */ 60942);
/* harmony import */ var _action_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-button.component.scss */ 78560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let ActionButtonComponent = class ActionButtonComponent {
    constructor() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.data = {};
        this.viewBtn = {};
    }
    ngOnInit() { }
    onActionEdit() {
        this.emitter.emit({
            cmd: "edit",
            data: this.data,
        });
    }
    onActionView() {
        this.emitter.emit({
            cmd: "view",
            data: this.data,
        });
    }
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
    onActionDelete() {
        this.emitter.emit({
            cmd: "delete",
            data: this.data,
        });
    }
    onActionDownload() {
        this.emitter.emit({
            cmd: "download",
            data: this.data,
        });
    }
    onActionRerun() {
        this.emitter.emit({
            cmd: "rerun",
            data: this.data,
        });
    }
    onActionConfirm() {
        this.emitter.emit({
            cmd: "confirm",
            data: this.data,
        });
    }
};
ActionButtonComponent.ctorParameters = () => [];
ActionButtonComponent.propDecorators = {
    emitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    viewBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ActionButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-action-button',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_action_button_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_action_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActionButtonComponent);



/***/ }),

/***/ 11336:
/*!**********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/material-table-view/custom-paginator.directive.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylePaginatorDirective": () => (/* binding */ StylePaginatorDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 4578);



let StylePaginatorDirective = class StylePaginatorDirective {
    constructor(matPag, vr, ren) {
        this.matPag = matPag;
        this.vr = vr;
        this.ren = ren;
        this._currentPage = 1;
        this._pageGapTxt = "...";
        this.directiveLoaded = false;
        this._buttons = [];
        // set showTotalPages(value: number) {
        //   this._showTotalPages = value % 2 == 0 ? value + 1 : value;
        // }
        this._showTotalPages = 3;
        //Sub to rerender buttons when next page and last page is used
        // this.matPag.page.subscribe((v) => {
        //   this.switchPage(v.pageIndex);
        // })
    }
    get showTotalPages() { return this._showTotalPages; }
    buildPageNumbers(pageCount, pageRange) {
        let dots = false;
        let dots2 = false;
        let paglast = pageCount;
        let pagcurrent = this.matPag.pageIndex;
        let rangeStart = pagcurrent - this._showTotalPages / 2;
        let rangeEnd = pagcurrent + this._showTotalPages / 2;
        for (let i = 0; i < paglast; i = i + 1) {
            if ((i < this._showTotalPages && pagcurrent < this._showTotalPages && i > rangeStart) ||
                (i >= rangeStart && i <= rangeEnd)) {
                this.ren.insertBefore(pageRange, this.createPage(i, this.matPag.pageIndex), null);
            }
            else {
                if (i < rangeStart && !dots2) {
                    this.ren.insertBefore(pageRange, this.createPage(this._pageGapTxt, this.matPag.pageIndex), null);
                    dots2 = true;
                }
                if (i > rangeEnd && !dots) {
                    this.ren.insertBefore(pageRange, this.createPage(this._pageGapTxt, this.matPag.pageIndex), null);
                    dots = true;
                }
            }
        }
    }
    createPage(i, pageIndex) {
        const linkBtn = this.ren.createElement('mat-button');
        this.ren.addClass(linkBtn, 'mat-icon-button');
        // this.ren.addClass(linkBtn, "mat-mini-fab");
        // this.ren.setStyle(linkBtn, "margin", "1%");
        const pagingTxt = isNaN(i) ? this._pageGapTxt : +(i + 1);
        const text = this.ren.createText(pagingTxt + '');
        this.ren.addClass(linkBtn, 'mat-custom-page');
        switch (i) {
            case pageIndex:
                this.ren.setAttribute(linkBtn, 'disabled', 'disabled');
                break;
            case this._pageGapTxt:
                this.ren.setAttribute(linkBtn, 'disabled', 'disabled');
                this.ren.addClass(linkBtn, 'cus-disabled');
                break;
            default:
                this.ren.listen(linkBtn, 'click', () => {
                    this._currentPage = i;
                    this.switchPage(i);
                });
                break;
        }
        this.ren.appendChild(linkBtn, text);
        return linkBtn;
    }
    initPageRange() {
        const pagingContainerMain = this.vr.element.nativeElement.querySelector('.mat-paginator-range-actions');
        if (this.vr.element.nativeElement.querySelector('div.mat-paginator-range-actions div.btn_custom-paging-container')) {
            this.ren.removeChild(pagingContainerMain, this.vr.element.nativeElement.querySelector('div.mat-paginator-range-actions div.btn_custom-paging-container'));
        }
        const pagingContainerBtns = this.ren.createElement('div');
        const refNode = this.vr.element.nativeElement.childNodes[0].childNodes[0].childNodes[2].childNodes[5];
        this.ren.addClass(pagingContainerBtns, 'btn_custom-paging-container');
        this.ren.insertBefore(pagingContainerMain, pagingContainerBtns, refNode);
        const pageRange = this.vr.element.nativeElement.querySelector('div.mat-paginator-range-actions div.btn_custom-paging-container');
        pageRange.innerHtml = '';
        let totalPageSize = this.matPag.getNumberOfPages() > 0 ? this.matPag.getNumberOfPages() : this._dumPageTotal;
        const pageCount = totalPageSize;
        this.buildPageNumbers(pageCount, pageRange);
    }
    // private pageCount(length: number, pageSize: number): number {
    //   return Math.floor(length / pageSize) + 1;
    // }
    switchPage(i) {
        this.matPag.pageIndex = i;
        this.matPag._changePageSize(this.matPag.pageSize);
    }
    ngAfterViewInit() {
    }
    ngDoCheck() {
        if (this.directiveLoaded) {
            this.initPageRange();
        }
    }
    viewInit(pageTotal) {
        // console.log("data");
        this._dumPageTotal = pageTotal;
        this.initPageRange();
        setTimeout(() => {
            this.directiveLoaded = true;
        }, 500);
    }
};
StylePaginatorDirective.ctorParameters = () => [
    { type: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginator, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 }
];
StylePaginatorDirective.propDecorators = {
    showTotalPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
StylePaginatorDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: "[style-paginator]"
    })
], StylePaginatorDirective);



/***/ }),

/***/ 51946:
/*!*************************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialTableViewComponent": () => (/* binding */ MaterialTableViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_material_table_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./material-table-view.component.html */ 92321);
/* harmony import */ var _material_table_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-table-view.component.scss */ 57443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _table_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-dto */ 18510);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 4578);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 98536);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 68859);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 28288);
/* harmony import */ var _custom_paginator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-paginator.directive */ 11336);
/* harmony import */ var _pages_products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../pages/products/models/product.dto */ 1402);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ 18260);













let MaterialTableViewComponent = class MaterialTableViewComponent {
    constructor(cdf) {
        this.cdf = cdf;
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
        this.displayedColumns = [];
        this.data = [];
        this.colum = [];
        this.pageSizeOptions = [5, 10, 20];
        this.selectable = false;
        this.rowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.Default_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl}/attachment-downloader`;
        this.totalAmount = {};
        this.calTotal = false;
        this.calField = [];
        this.activityStatusColor = {
            // "success": "success"
            "01": "secondary",
            "02": "primary",
            "03": "danger",
        };
        this.prodStatus = _pages_products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PRODUCT_STATUS;
        this.prodStatusColor = {
            "01": "secondary",
            "02": "primary",
        };
        this.statusColor = {
            "in_progress": "secondary",
            "complete": "primary",
            "approved": "primary",
            "cancel": "danger",
            "submitted": "success",
            "success": "success",
            "sending": "info",
            "fail": "danger",
        };
        this.customerStatusColor = {
            "A": "secondary",
            "I": "danger",
        };
        this.customerStatus = {
            "A": "Active",
            "I": "Inactive",
        };
        this.leadStatus = {
            "01": "Open",
            "02": "Assigned",
            "03": "Folllow Up",
            "04": "Reject",
            "05": "Win",
            "06": "Lost",
        };
        this.leadStatusColor = {
            "01": "default",
            "04": "default",
            "05": "success",
            "03": "secondary",
            "02": "primary",
            "06": "danger",
        };
        this.renewStatus = {
            "DRAFT": "Draft",
            "ACTIVE": "Active",
            "CONFIRM": "Confirmed",
        };
        this.renewStatusColor = {
            "DRAFT": "primary",
            "ACTIVE": "success",
            "CONFIRM": "secondary",
        };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(false, []);
        this.activityStatus = _table_dto__WEBPACK_IMPORTED_MODULE_2__.ActivityStatus;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.cdf.detectChanges();
    }
    reChangeData() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        let totalPage = Math.ceil(this.data.length / 5);
        if (this.calTotal)
            this.calTotalData();
        if (this.customPaginator)
            this.customPaginator.viewInit(totalPage);
    }
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
    actionBtn(event) {
        this.emitter.emit(event);
    }
    FormatedDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date, "YYYYMMDD").format('DD/MM/YYYY');
    }
    getFreq(data) {
        let val = "";
        let ary = data.split(", ");
        for (const item of ary) {
            if (item == "lump") {
                val = val.length > 2 ? val + ", Lump Sum" : "Lump Sum";
            }
            else if (item == "annually") {
                val = val.length > 2 ? val + ", Semi Annually" : "Semi Annually";
            }
        }
        return val;
    }
    createPolicyBtn(data) {
        this.emitter.emit({
            cmd: "create",
            data: data,
        });
    }
    getStatusColor(status) {
    }
    selectRow(row) {
        this.selection.toggle(row);
        if (this.selection.isSelected(row)) {
            this.rowSelected.emit(row);
        }
        else {
            this.rowSelected.emit(null);
        }
    }
    calTotalData() {
        this.totalAmount = [];
        this.data.forEach((data) => {
            this.calField.map(field => {
                if (data[field])
                    this.totalAmount[field] = this.totalAmount[field] ? this.totalAmount[field] + parseFloat(data[field].toString().split(',').join('')) : parseFloat(data[field].toString().split(',').join(''));
            });
        });
        // this.calField.includes()
    }
};
MaterialTableViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef }
];
MaterialTableViewComponent.propDecorators = {
    emitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    displayedColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    colum: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator,] }],
    customPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_custom_paginator_directive__WEBPACK_IMPORTED_MODULE_4__.StylePaginatorDirective,] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort,] }],
    rowSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output, args: ['rowselect',] }],
    calTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    calField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
MaterialTableViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-material-table-view',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_material_table_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectionStrategy.OnPush,
        styles: [_material_table_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MaterialTableViewComponent);



/***/ }),

/***/ 18510:
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/material-table-view/table-dto.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLTYPE": () => (/* binding */ COLTYPE),
/* harmony export */   "ActivityStatus": () => (/* binding */ ActivityStatus)
/* harmony export */ });
var COLTYPE;
(function (COLTYPE) {
    COLTYPE["FEILD"] = "field";
    COLTYPE["TEXT"] = "text";
    COLTYPE["RENEW"] = "renew";
    COLTYPE["ACTION"] = "action";
})(COLTYPE || (COLTYPE = {}));
const ActivityStatus = {
    "01": "Open",
    "02": "Complete",
    "03": "Cancel",
};


/***/ }),

/***/ 65370:
/*!***********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgPaginationEllipsis": () => (/* binding */ NgPaginationEllipsis),
/* harmony export */   "NgPaginationFirst": () => (/* binding */ NgPaginationFirst),
/* harmony export */   "NgPaginationLast": () => (/* binding */ NgPaginationLast),
/* harmony export */   "NgPaginationNext": () => (/* binding */ NgPaginationNext),
/* harmony export */   "NgPaginationNumber": () => (/* binding */ NgPaginationNumber),
/* harmony export */   "NgPaginationPrevious": () => (/* binding */ NgPaginationPrevious),
/* harmony export */   "NgPagination": () => (/* binding */ NgPagination)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ng_pagination_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ng-pagination.component.html */ 37651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-pagination.config */ 97483);


// tslint:disable:max-line-length component-class-suffix directive-selector directive-class-suffix component-selector no-host-metadata-property object-literal-key-quotes prefer-const
// fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts


function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
let NgPaginationEllipsis = class NgPaginationEllipsis {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationEllipsis.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationEllipsis = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationEllipsis]' })
], NgPaginationEllipsis);

/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
let NgPaginationFirst = class NgPaginationFirst {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationFirst.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationFirst = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationFirst]' })
], NgPaginationFirst);

/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
let NgPaginationLast = class NgPaginationLast {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationLast.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationLast = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationLast]' })
], NgPaginationLast);

/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
let NgPaginationNext = class NgPaginationNext {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationNext.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationNext = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationNext]' })
], NgPaginationNext);

/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
let NgPaginationNumber = class NgPaginationNumber {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationNumber.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationNumber = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationNumber]' })
], NgPaginationNumber);

/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
let NgPaginationPrevious = class NgPaginationPrevious {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationPrevious.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationPrevious = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationPrevious]' })
], NgPaginationPrevious);

/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
let NgPagination = class NgPagination {
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    hasPrevious() { return this.page > 1; }
    hasNext() { return this.page < this.pageCount; }
    nextDisabled() { return !this.hasNext() || this.disabled; }
    previousDisabled() { return !this.hasPrevious() || this.disabled; }
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    ngOnChanges(changes) { this._updatePages(this.page); }
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    _applyRotation() {
        let start = 0;
        let end = this.pageCount;
        let leftOffset = Math.floor(this.maxSize / 2);
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    _applyPagination() {
        let page = Math.ceil(this.page / this.maxSize) - 1;
        let start = page * this.maxSize;
        let end = start + this.maxSize;
        return [start, end];
    }
    _setPageInRange(newPageNo) {
        const prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    }
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let start = 0;
            let end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
};
NgPagination.ctorParameters = () => [
    { type: _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__.NgPaginationConfig }
];
NgPagination.propDecorators = {
    tplEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationEllipsis, { static: false },] }],
    tplFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationFirst, { static: false },] }],
    tplLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationLast, { static: false },] }],
    tplNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationNext, { static: false },] }],
    tplNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationNumber, { static: false },] }],
    tplPrevious: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationPrevious, { static: false },] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ellipses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    collectionSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
NgPagination = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ng-pagination',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        host: { 'role': 'navigation' },
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ng_pagination_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], NgPagination);



/***/ }),

/***/ 97483:
/*!********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.config.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgPaginationConfig": () => (/* binding */ NgPaginationConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/paginator.model */ 84618);

// Fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination-config.ts


/**
 * A configuration service for the [`NgPagination`](#/components/paginator/api#NgPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
let NgPaginationConfig = class NgPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__.PageSizes[2];
        this.rotate = false;
    }
};
NgPaginationConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], NgPaginationConfig);



/***/ }),

/***/ 72430:
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatorComponent": () => (/* binding */ PaginatorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./paginator.component.html */ 29880);
/* harmony import */ var _paginator_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator.component.scss */ 45777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/paginator.model */ 84618);





let PaginatorComponent = class PaginatorComponent {
    constructor() {
        this.paginate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.pageSizes = _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__.PageSizes;
    }
    ngOnInit() {
    }
    pageChange(num) {
        this.paginator.page = num;
        this.paginate.emit(this.paginator);
    }
    sizeChange() {
        this.paginator.pageSize = +this.paginator.pageSize;
        this.paginator.page = 1;
        this.paginate.emit(this.paginator);
    }
};
PaginatorComponent.ctorParameters = () => [];
PaginatorComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    paginate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
PaginatorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-paginator',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_paginator_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaginatorComponent);



/***/ }),

/***/ 94115:
/*!*********************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/print-error/print-error.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintError": () => (/* binding */ PrintError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


let PrintError = class PrintError {
    constructor() {
        this.valid = [];
    }
    getMsg(type) {
        if (type == 'max') {
            return `"Max ${this.validValue} is allowed"`;
        }
        if (this.valid.length > 0)
            return this.valid.find(x => x.type == type).message;
        else {
            return "This input box is required!";
        }
    }
};
PrintError.ctorParameters = () => [];
PrintError.propDecorators = {
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ["control",] }],
    valid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    validValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
PrintError = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-print-error',
        template: `<div class="text-danger error-message help-text-message" *ngIf="control && control.errors && (control.invalid)">
  <div *ngIf="control.errors.required"><small>{{getMsg('required')}}</small></div>
  <div *ngIf="control.errors.minlength"><small>{{getMsg('min')}}</small></div>
  <div *ngIf="control.errors.maxlength"><small>{{getMsg('max')}}</small></div>
  <div *ngIf="control.errors.min"><small>{{getMsg('min')}}</small></div>
  <div *ngIf="control.errors.max"><small>{{getMsg('max')}}</small></div>
  <div *ngIf="control.errors.email"><small>Email format is invalid</small></div>
</div>`,
        providers: []
    })
], PrintError);



/***/ }),

/***/ 97542:
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortIconComponent": () => (/* binding */ SortIconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sort_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sort-icon.component.html */ 76141);
/* harmony import */ var _sort_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-icon.component.scss */ 72087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let SortIconComponent = class SortIconComponent {
    constructor(el) {
        this.el = el;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isActive = false;
    }
    ngOnChanges() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        // Load css classes
        parent.classList.add('sortable');
        parent.classList.remove('sortable-active');
        if (this.column === this.activeColumn) {
            parent.classList.add('sortable-active');
        }
        // load icons
        this.isActive = this.column === this.activeColumn;
    }
    ngOnInit() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        parent.addEventListener('click', () => {
            this.sort.emit(this.column);
        });
    }
};
SortIconComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
SortIconComponent.propDecorators = {
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    activeColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    activeDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SortIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-sort-icon',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sort_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sort_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SortIconComponent);



/***/ }),

/***/ 85472:
/*!************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/start-end-date/remove-host.directive.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveHost": () => (/* binding */ RemoveHost)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


let RemoveHost = class RemoveHost {
    constructor(el) {
        this.el = el;
    }
    //wait for the component to render completely
    ngOnInit() {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    }
};
RemoveHost.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
RemoveHost = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[remove-host]'
    })
], RemoveHost);



/***/ }),

/***/ 15470:
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/start-end-date/start-end-date.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartEndDateComponent": () => (/* binding */ StartEndDateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_start_end_date_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./start-end-date.component.html */ 26277);
/* harmony import */ var _start_end_date_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-end-date.component.scss */ 94950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/is-json */ 47975);







let StartEndDateComponent = class StartEndDateComponent {
    constructor() { }
    ngOnInit() {
        // console.log("data--> ", this.formInput);
        this.getoneMonth();
    }
    clearDate(type) {
        this.formInput.controls[type].setValue(null);
    }
    getoneMonth() {
        let date = new Date();
        let lastMonthDay = new Date(date.setMonth(date.getMonth() - 1));
        let monthDay = new Date(date.setMonth(date.getMonth() + 1));
        this.formInput.controls['startDate'].setValue(lastMonthDay.toISOString());
        this.formInput.controls['endDate'].setValue(monthDay.toISOString());
    }
};
StartEndDateComponent.ctorParameters = () => [];
StartEndDateComponent.propDecorators = {
    formInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    colClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
StartEndDateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-start-end-date',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_start_end_date_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_2__.MY_FORMATS },
        ],
        styles: [_start_end_date_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartEndDateComponent);



/***/ }),

/***/ 91970:
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/crud-table.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CRUDTableModule": () => (/* binding */ CRUDTableModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/paginator/paginator.component */ 72430);
/* harmony import */ var _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/paginator/ng-pagination/ng-pagination.component */ 65370);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _pages_form_component_sort_config_modal_sort_config_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pages/form-component/sort-config-modal/sort-config-modal.component */ 54199);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 64744);
/* harmony import */ var _components_print_error_print_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/print-error/print-error.component */ 94115);
/* harmony import */ var _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sort-icon/sort-icon.component */ 97542);
/* harmony import */ var _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/action-button/action-button.component */ 51265);
/* harmony import */ var _components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 98536);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 4578);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 68859);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _components_material_table_view_custom_paginator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/material-table-view/custom-paginator.directive */ 11336);
/* harmony import */ var _components_start_end_date_start_end_date_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/start-end-date/start-end-date.component */ 15470);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _components_start_end_date_remove_host_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/start-end-date/remove-host.directive */ 85472);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);






















let CRUDTableModule = class CRUDTableModule {
};
CRUDTableModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_0__.PaginatorComponent, _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_1__.NgPagination, _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__.SortIconComponent, _pages_form_component_sort_config_modal_sort_config_modal_component__WEBPACK_IMPORTED_MODULE_3__.SortConfigModalComponent, _components_print_error_print_error_component__WEBPACK_IMPORTED_MODULE_4__.PrintError, _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_6__.ActionButtonComponent, _components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableViewComponent, _components_material_table_view_custom_paginator_directive__WEBPACK_IMPORTED_MODULE_8__.StylePaginatorDirective, _components_start_end_date_start_end_date_component__WEBPACK_IMPORTED_MODULE_9__.StartEndDateComponent, _components_start_end_date_remove_host_directive__WEBPACK_IMPORTED_MODULE_10__.RemoveHost],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__.OverlayModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_11__.LanguageModule],
        exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_0__.PaginatorComponent, _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_1__.NgPagination, _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__.SortIconComponent, _pages_form_component_sort_config_modal_sort_config_modal_component__WEBPACK_IMPORTED_MODULE_3__.SortConfigModalComponent, _components_print_error_print_error_component__WEBPACK_IMPORTED_MODULE_4__.PrintError, _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_6__.ActionButtonComponent, _components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableViewComponent, _components_material_table_view_custom_paginator_directive__WEBPACK_IMPORTED_MODULE_8__.StylePaginatorDirective, _components_start_end_date_start_end_date_component__WEBPACK_IMPORTED_MODULE_9__.StartEndDateComponent, _components_start_end_date_remove_host_directive__WEBPACK_IMPORTED_MODULE_10__.RemoveHost],
        entryComponents: [_pages_form_component_sort_config_modal_sort_config_modal_component__WEBPACK_IMPORTED_MODULE_3__.SortConfigModalComponent]
    })
], CRUDTableModule);



/***/ }),

/***/ 70380:
/*!******************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortState": () => (/* reexport safe */ _models_sort_model__WEBPACK_IMPORTED_MODULE_1__.SortState),
/* harmony export */   "PageSizes": () => (/* reexport safe */ _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__.PageSizes),
/* harmony export */   "PaginatorState": () => (/* reexport safe */ _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__.PaginatorState),
/* harmony export */   "GroupingState": () => (/* reexport safe */ _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__.GroupingState),
/* harmony export */   "TableService": () => (/* reexport safe */ _services_table_service__WEBPACK_IMPORTED_MODULE_6__.TableService),
/* harmony export */   "TableExtendedService": () => (/* reexport safe */ _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__.TableExtendedService),
/* harmony export */   "CRUDTableModule": () => (/* reexport safe */ _crud_table_module__WEBPACK_IMPORTED_MODULE_8__.CRUDTableModule)
/* harmony export */ });
/* harmony import */ var _models_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/table.model */ 75596);
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sort.model */ 12790);
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/paginator.model */ 84618);
/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/grouping.model */ 85315);
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/search.model */ 57777);
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/filter.model */ 18873);
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/table.service */ 79828);
/* harmony import */ var _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/table.extended.service */ 79373);
/* harmony import */ var _crud_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-table.module */ 91970);
// Models






// Directives
// Services


// Module



/***/ }),

/***/ 18873:
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/filter.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 85315:
/*!**********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/grouping.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupingState": () => (/* binding */ GroupingState)
/* harmony export */ });
class GroupingState {
    constructor() {
        this.selectedRowIds = new Set();
        this.itemIds = [];
    }
    checkAreAllRowsSelected() {
        if (this.itemIds.length === 0) {
            return false;
        }
        return this.selectedRowIds.size === this.itemIds.length;
    }
    selectRow(id) {
        if (this.selectedRowIds.has(id)) {
            this.selectedRowIds.delete(id);
        }
        else {
            this.selectedRowIds.add(id);
        }
        return this;
    }
    // tslint:disable-next-line:variable-name
    clearRows(_itemIds) {
        this.itemIds = _itemIds;
        this.selectedRowIds = new Set();
        return this;
    }
    isRowSelected(id) {
        return this.selectedRowIds.has(id);
    }
    selectAllRows() {
        const areAllSelected = this.itemIds.length === this.selectedRowIds.size;
        if (areAllSelected) {
            this.selectedRowIds = new Set();
        }
        else {
            this.selectedRowIds = new Set();
            this.itemIds.forEach(id => this.selectedRowIds.add(id));
        }
        return this;
    }
    getSelectedRows() {
        return Array.from(this.selectedRowIds);
    }
    getSelectedRowsCount() {
        return this.selectedRowIds.size;
    }
}


/***/ }),

/***/ 84618:
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/paginator.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSizes": () => (/* binding */ PageSizes),
/* harmony export */   "PaginatorState": () => (/* binding */ PaginatorState)
/* harmony export */ });
const PageSizes = [3, 5, 10, 15, 50, 100];
class PaginatorState {
    constructor() {
        this.page = 1;
        this.pageSize = PageSizes[2];
        this.total = 0;
        this.pageSizes = [];
    }
    recalculatePaginator(total) {
        this.total = total;
        return this;
    }
}


/***/ }),

/***/ 57777:
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/search.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 12790:
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/sort.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortState": () => (/* binding */ SortState)
/* harmony export */ });
class SortState {
    constructor() {
        this.column = 'id'; // Id by default
        this.direction = 'asc'; // asc by default;
    }
}


/***/ }),

/***/ 75596:
/*!*******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/table.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 79373:
/*!********************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.extended.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableExtendedService": () => (/* binding */ TableExtendedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.service */ 79828);




let TableExtendedService = class TableExtendedService extends _table_service__WEBPACK_IMPORTED_MODULE_0__.TableService {
    constructor(http) {
        super(http);
    }
};
TableExtendedService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient,] }] }
];
TableExtendedService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], TableExtendedService);



/***/ }),

/***/ 79828:
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableService": () => (/* binding */ TableService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 45309);
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/paginator.model */ 84618);
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sort.model */ 12790);
/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/grouping.model */ 85315);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);






const DEFAULT_STATE = {
    filter: {},
    paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__.PaginatorState(),
    sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_1__.SortState(),
    searchTerm: '',
    grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_2__.GroupingState(),
    entityId: undefined
};
class TableService {
    constructor(http) {
        // Private fields
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this._isFirstLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(true);
        this._tableState$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(DEFAULT_STATE);
        this._errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
        this._subscriptions = [];
        // API URL has to be overrided
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/endpoint`;
        this.http = http;
    }
    // Getters
    get items$() {
        return this._items$.asObservable();
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isFirstLoading$() {
        return this._isFirstLoading$.asObservable();
    }
    get errorMessage$() {
        return this._errorMessage.asObservable();
    }
    get subscriptions() {
        return this._subscriptions;
    }
    // State getters
    get paginator() {
        return this._tableState$.value.paginator;
    }
    get filter() {
        return this._tableState$.value.filter;
    }
    get sorting() {
        return this._tableState$.value.sorting;
    }
    get searchTerm() {
        return this._tableState$.value.searchTerm;
    }
    get grouping() {
        return this._tableState$.value.grouping;
    }
    // CREATE
    // server should return the object with ID
    create(item) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.post(this.API_URL, item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            console.error('CREATE ITEM', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({ id: undefined });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // READ (Returning filtered list of entities)
    find(tableState) {
        const url = this.API_URL + '/find';
        this._errorMessage.next('');
        return this.http.post(url, tableState).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            console.error('FIND ITEMS', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({ items: [], total: 0 });
        }));
    }
    getItemById(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            console.error('GET ITEM BY IT', id, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({ id: undefined });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // UPDATE
    update(item) {
        const url = `${this.API_URL}/${item.id}`;
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.put(url, item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            console.error('UPDATE ITEM', item, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(item);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // UPDATE Status
    updateStatusForItems(ids, status) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const body = { ids, status };
        const url = this.API_URL + '/updateStatus';
        return this.http.put(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            console.error('UPDATE STATUS FOR SELECTED ITEMS', ids, status, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // DELETE
    delete(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            console.error('DELETE ITEM', id, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({});
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // delete list of items
    deleteItems(ids = []) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = this.API_URL + '/deleteItems';
        const body = { ids };
        return this.http.put(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            console.error('DELETE SELECTED ITEMS', ids, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    fetch() {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const request = this.find(this._tableState$.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)((res) => {
            this._items$.next(res.items);
            this.patchStateWithoutFetch({
                paginator: this._tableState$.value.paginator.recalculatePaginator(res.total),
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
            this._errorMessage.next(err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
                items: [],
                total: 0
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
            this._isLoading$.next(false);
            const itemIds = this._items$.value.map((el) => {
                const item = el;
                return item.id;
            });
            this.patchStateWithoutFetch({
                grouping: this._tableState$.value.grouping.clearRows(itemIds),
            });
        }))
            .subscribe();
        this._subscriptions.push(request);
    }
    setDefaults() {
        this.patchStateWithoutFetch({ filter: {} });
        this.patchStateWithoutFetch({ sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_1__.SortState() });
        this.patchStateWithoutFetch({ grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_2__.GroupingState() });
        this.patchStateWithoutFetch({ searchTerm: '' });
        this.patchStateWithoutFetch({
            paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__.PaginatorState()
        });
        this._isFirstLoading$.next(true);
        this._isLoading$.next(true);
        this._tableState$.next(DEFAULT_STATE);
        this._errorMessage.next('');
    }
    // Base Methods
    patchState(patch) {
        this.patchStateWithoutFetch(patch);
        this.fetch();
    }
    patchStateWithoutFetch(patch) {
        const newState = Object.assign(this._tableState$.value, patch);
        this._tableState$.next(newState);
    }
}


/***/ }),

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth/_services/auth.guard */ 41785);




const routes = [
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 61142)).then((m) => m.AuthModule),
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_errors_errors_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/errors/errors.module */ 50478)).then((m) => m.ErrorsModule),
    },
    {
        path: 'qr-source-link',
        canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-apexcharts_fesm2020_ng-apexcharts_mjs"), __webpack_require__.e("default-src_app__metronic_core_services_attachment-data_service_ts-src_app_core_valid-all-feild_ts"), __webpack_require__.e("default-src_app_pages_customer-list_customer-list_share_module_ts-src_app_pages_share-compone-a9f04a"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_ngx-currency___ivy_ngcc___fesm2015_ngx-currency_js"), __webpack_require__.e("default-src_app_pages_form-component_form-component_module_ts"), __webpack_require__.e("default-src_app__metronic_core_index_ts-src_app_pages_policy_policy_service_ts-src_app_pages_-b29154"), __webpack_require__.e("src_app_pages_qr-source-link_qr-source-link_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/qr-source-link/qr-source-link.module */ 81961)).then((m) => m.QrModule),
    },
    {
        path: '',
        canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        canActivateChild: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__metronic_core_index_ts-src_app_pages_policy_policy_service_ts-src_app_pages_-b29154"), __webpack_require__.e("src_app_pages_layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/layout.module */ 20913)).then((m) => m.LayoutModule),
    },
    { path: '**', redirectTo: 'error/404' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.service */ 36052);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_metronic/shared/crud-table */ 70380);
/* harmony import */ var _metronic_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_metronic/core/services/products.service */ 40906);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/master-data/master-data.service */ 26697);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/auth */ 67198);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/device */ 94219);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/app */ 82225);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/menu-data.service */ 37632);
/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messaging.service */ 65813);
/* harmony import */ var _user_token_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-token.service */ 84410);
/* harmony import */ var _modules_loading_toast_toast_kbz_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/loading-toast/toast/kbz-toast.service */ 18829);
/* harmony import */ var _modules_languages_vocabs_en__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/languages/vocabs/en */ 66109);
/* harmony import */ var _modules_languages_vocabs_mm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/languages/vocabs/mm */ 72516);
/* harmony import */ var _modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/languages/languages.service */ 59832);






















let AppComponent = class AppComponent {
    constructor(splashScreenService, router, tableService, itemService, kbzToast, master, authService, zone, applicationRef, alertCtrl, alertService, menuService, modalCtrl, loadingService, messagingService, userTokenService, langageService) {
        this.splashScreenService = splashScreenService;
        this.router = router;
        this.tableService = tableService;
        this.itemService = itemService;
        this.kbzToast = kbzToast;
        this.master = master;
        this.authService = authService;
        this.zone = zone;
        this.applicationRef = applicationRef;
        this.alertCtrl = alertCtrl;
        this.alertService = alertService;
        this.menuService = menuService;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.messagingService = messagingService;
        this.userTokenService = userTokenService;
        this.langageService = langageService;
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.userToken = "";
        this.user = null;
        this.langageService.loadTranslations(_modules_languages_vocabs_en__WEBPACK_IMPORTED_MODULE_15__.locale, _modules_languages_vocabs_mm__WEBPACK_IMPORTED_MODULE_16__.locale);
    }
    beforeUnloadHandler(event) {
        // const data = this.itemService.prodSubject.getValue()
        //console.log(`I'm leaving the app!`, data);
        // localStorage.setItem("itemsData", JSON.stringify(data));
    }
    ngOnInit() {
        const productData = {
            forms: [],
            products: [],
            formObjs: [],
            configPage: []
        };
        this.requestPermission();
        const itemsData = localStorage.getItem("itemsData");
        this.itemService.loadItems(JSON.parse(itemsData) || productData);
        const routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_18__.NavigationEnd) {
                // clear filtration paginations and others
                this.tableService.setDefaults();
                // hide splash screen
                this.splashScreenService.hide();
                // scroll to top on every route change
                window.scrollTo(0, 0);
                // to display back the body content
                setTimeout(() => {
                    document.body.classList.add('page-loaded');
                }, 500);
                this.zone.run(() => setTimeout(() => {
                    this.applicationRef.tick();
                }, 0));
            }
        });
        this.unsubscribe.push(routerSubscription);
        console.log(this.menuService.dataAccess.value);
        let unsub = this.authService.currentUserSubject.subscribe((res) => {
            if (res) {
                this.user = res;
                this.menuService.getMenusData();
                if (this.userToken)
                    this.updateCutomerToken(this.userToken);
                // this.master.getType()
            }
        });
        this.unsubscribe.push(unsub);
        _capacitor_device__WEBPACK_IMPORTED_MODULE_8__.Device.getInfo().then((res) => {
            if (res.platform != "web") {
                _capacitor_app__WEBPACK_IMPORTED_MODULE_9__.App.addListener('backButton', ({ canGoBack }) => {
                    if (!canGoBack) {
                        this.confirmExist();
                    }
                    else {
                        // this.modalCtrl.getTop().then((res)=>{
                        //   console.log(res);
                        // })
                        window.history.back();
                    }
                });
            }
        });
    }
    confirmExist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            // this.alertService.activate("Do you want to exit the app?", "App").then((res: any) => {
            //   if (res) {
            //     if (res.type == "ok") {
            //       CapacitorApp.exitApp();
            //     }
            //   }
            // })
            let alert = yield this.alertCtrl.create({
                message: 'Do you want to exit the app?',
                buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            console.log('canceled :)');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            _capacitor_app__WEBPACK_IMPORTED_MODULE_9__.App.exitApp();
                        }
                    }],
                backdropDismiss: false,
                cssClass: "my-customer-alert",
            });
            yield alert.present();
            alert.onDidDismiss().then(res => {
            });
        });
    }
    requestPermission() {
        console.log("request Noti Token");
        this.messagingService.requestPermission().subscribe({
            next: (token) => {
                console.log('Permission granted! Save to the server!', token);
                if (this.user) {
                    this.updateCutomerToken(token);
                }
                this.listenForMessages();
            },
            error: (error) => { console.error(error); },
        });
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
    listenForMessages() {
        this.messagingService.getMessages().subscribe((msg) => (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            if (msg) {
                console.log(msg);
                this.alertService.activate(msg.notification.body, msg.notification.title);
                // this.kbzToast.activate(msg.notification.title, 'success')
                let value = this.messagingService.notiCount.value + 1;
                this.messagingService.notiCount.next(value);
            }
        }));
    }
    updateCutomerToken(token) {
        this.userTokenService.updateToken(token).toPromise().then(res => {
            console.log("Token Update", res);
            if (res) {
                // console.log(res);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_2__.SplashScreenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__.TableExtendedService },
    { type: _metronic_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__.ProductsService },
    { type: _modules_loading_toast_toast_kbz_toast_service__WEBPACK_IMPORTED_MODULE_14__.KBZToastService },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_6__.MasterDataService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ApplicationRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_10__.AlertService },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_11__.MenuDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ModalController },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _messaging_service__WEBPACK_IMPORTED_MODULE_12__.MessagingService },
    { type: _user_token_service__WEBPACK_IMPORTED_MODULE_13__.UserTokenService },
    { type: _modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_17__.LanguagesService }
];
AppComponent.propDecorators = {
    beforeUnloadHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.HostListener, args: ['window:unload', ['$event'],] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        // tslint:disable-next-line:component-selector
        selector: 'app-root',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectionStrategy.OnPush,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/auth/_services/auth.service */ 69380);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-highlightjs */ 46300);
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.module */ 95312);
/* harmony import */ var _modules_loading_toast_toast_kbz_toast_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/loading-toast/toast/kbz-toast.module */ 99939);
/* harmony import */ var _modules_loading_toast_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/loading-toast/loading/loading.module */ 90872);
/* harmony import */ var _core_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/httpconfig.interceptor */ 40962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _modules_loading_toast_alert_model_alert_model_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/loading-toast/alert-model/alert-model.module */ 24373);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 14415);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 36109);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-calendar */ 29621);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angularx-flatpickr */ 47173);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 29179);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 57154);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/service-worker */ 17202);
/* harmony import */ var _angular_fire_compat___WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire/compat/ */ 20762);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 58052);
/* harmony import */ var _modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/languages/languages.service */ 59832);
/* harmony import */ var _modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/languages/languages.modules */ 63699);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/menu-data.service */ 37632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 49566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 2014);











// Highlight JS
























// #fake-start#
// #fake-end#
function appInitializer(authService, menuService) {
    return () => {
        return new Promise((resolve) => {
            authService.getUserByToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.mergeMap)((x) => {
                return menuService.getMenusData();
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)((x) => {
                if (!x) {
                    return authService.getUserByToken();
                }
            })).subscribe().add(resolve);
        });
    };
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule.forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_5__.SplashScreenModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_23__.HighlightModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModalModule,
            _modules_loading_toast_toast_kbz_toast_module__WEBPACK_IMPORTED_MODULE_6__.KBZToastModule,
            _modules_loading_toast_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__.KBZLoadingModule,
            _modules_loading_toast_alert_model_alert_model_module__WEBPACK_IMPORTED_MODULE_9__.AlertModelModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule,
            _modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_12__.LanguageModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__.NgSelectModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_29__.CalendarModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_30__.FlatpickrModule.forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_29__.CalendarModule.forRoot({
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_32__.adapterFactory,
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__.ServiceWorkerModule.register('combined-sw.js', {
                enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
            _angular_fire_compat___WEBPACK_IMPORTED_MODULE_34__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebaseConfig),
            _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_35__.AngularFireMessagingModule
            // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            // provideMessaging(() => getMessaging())
        ],
        providers: [
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_17__.APP_INITIALIZER,
                useFactory: appInitializer,
                multi: true,
                deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, _core_menu_data_service__WEBPACK_IMPORTED_MODULE_13__.MenuDataService],
            },
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File,
            _modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_11__.LanguagesService,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HTTP_INTERCEPTORS, useClass: _core_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__.HttpConfigInterceptor, multi: true },
            {
                provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_23__.HIGHLIGHT_OPTIONS,
                useValue: {
                    coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_core_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/core */ 38297, 23)),
                    languages: {
                        xml: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_languages_xml_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 61620, 23)),
                        typescript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_languages_typescript_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 7404, 23)),
                        scss: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_languages_scss_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/languages/scss */ 39085, 23)),
                        json: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_languages_json_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/languages/json */ 13703, 23))
                    },
                },
            },
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 91691:
/*!***********************************************!*\
  !*** ./src/app/core/biz.operation.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BizOperationService": () => (/* binding */ BizOperationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 28433);

class BizOperationService {
    constructor(httpClient, baseUri) {
        this.httpClient = httpClient;
        this.baseUri = baseUri;
    }
    save(t) {
        try {
            return this.httpClient.post(this.baseUri, t);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    delete(id) {
        try {
            return this.httpClient.delete(this.baseUri + '/' + id);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    update(id, t) {
        try {
            return this.httpClient.put(this.baseUri + "/" + id, t);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    updateNoID(t) {
        try {
            return this.httpClient.put(this.baseUri, t);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    findOne(id) {
        try {
            return this.httpClient.get(this.baseUri + "/" + id);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    findAll() {
        try {
            return this.httpClient.get(this.baseUri);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    findAllWithQuery(query = "") {
        try {
            return this.httpClient.get(this.baseUri + "?" + query);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
}


/***/ }),

/***/ 40962:
/*!************************************************!*\
  !*** ./src/app/core/httpconfig.interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConfigInterceptor": () => (/* binding */ HttpConfigInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 56769);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 53951);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/auth */ 67198);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/loading-toast/alert-model/alert.service */ 60940);








let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(alertService, loading, authService) {
        this.alertService = alertService;
        this.loading = loading;
        this.authService = authService;
    }
    intercept(request, next) {
        // if (!this.userProfile.isOnline) {
        // return throwError('Please Check Your Network Connection !');
        //     return EMPTY;
        // }
        // const token: string = this.userProfile.token;
        if (this.authService.authToken) {
            request = request.clone({ headers: request.headers.set('Authorization', "Bearer " + this.authService.authToken) });
            // let body = request.body
            // request = request.clone({ body: { ...body, userId: this.userProfile.userInfo.userId } });
        }
        if (!this.authService.authToken && !request.url.includes('login'))
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        // request = request.clone({ headers: request.headers.set('X-Tenant-ID', 'kbzms') });
        // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyODQyMzI5OCwiaWF0IjoxNjI3ODE4NDk4fQ.K08GdAdgMVisiUjOO8ySxRA68Rj6PWTjRdoOBAnpRiCJ5aAY4pqJPKrhKS0ulK6K9qjU4jpOx2wuFdVi-XHw4A') });
        if (this.loading['activate'])
            this.loading.activate();
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
                // console.log('event--->>>', event);
                // if(event.body === null){
                //     this.authService.logout()
                // }
                if (event.body) {
                    return event.clone({
                        body: event.body.body
                    });
                    // return event.body;
                }
            }
            // console.log('event--->>>', event);
            return event;
        }), 
        // catchError(this.errorHandler)
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            console.log('error--->>>', error);
            if (this.loading['deactivate'])
                this.loading.deactivate();
            if (error.error) {
                if (typeof error.error == 'string') {
                    this.alertService.activate("Internal Server error!", "Error Message");
                }
                else {
                    this.alertService.activate(error.error.payload || error.error.message || "Internal Server error!", 'Error Message');
                    if (error.error.code == "403") {
                        this.authService.logout();
                        document.location.reload();
                    }
                }
            }
            else
                this.alertService.activate("Sorry!, Try again later", 'Error Message');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            if (this.loading['deactivate'])
                this.loading.deactivate();
        }));
    }
};
HttpConfigInterceptor.ctorParameters = () => [
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
HttpConfigInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()
], HttpConfigInterceptor);



/***/ }),

/***/ 47975:
/*!*********************************!*\
  !*** ./src/app/core/is-json.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsJsonString": () => (/* binding */ IsJsonString),
/* harmony export */   "MY_FORMATS": () => (/* binding */ MY_FORMATS),
/* harmony export */   "MY_YEAR_FORMATS": () => (/* binding */ MY_YEAR_FORMATS),
/* harmony export */   "MY_MONTH_YEAR_FORMATS": () => (/* binding */ MY_MONTH_YEAR_FORMATS)
/* harmony export */ });
function IsJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
const MY_FORMATS = {
    parse: {
        dateInput: 'DD-MM-YYYY',
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const MY_YEAR_FORMATS = {
    parse: {
        dateInput: 'YYYY',
    },
    display: {
        dateInput: 'YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};
const MY_MONTH_YEAR_FORMATS = {
    parse: {
        dateInput: 'MM-YYYY',
    },
    display: {
        dateInput: 'MM-YYYY',
        monthYearLabel: 'MM-YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MM-YYYY',
    },
};


/***/ }),

/***/ 37632:
/*!*******************************************!*\
  !*** ./src/app/core/menu-data.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultAccessObj": () => (/* binding */ defaultAccessObj),
/* harmony export */   "MenuDataService": () => (/* binding */ MenuDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 18260);
/* harmony import */ var _biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biz.operation.service */ 91691);






const API_MENU_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/menu`;
const ModuleList = ["leads", "fna", "application", "quotation", "activity", "product_definition", "page_group", "exchange_rate", "customer"];
const defaultAccessObj = {
    view: true,
    create: true,
    edit: true,
    delete: true
};
let MenuDataService = class MenuDataService extends _biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_MENU_URL);
        this.httpClient = httpClient;
        this.menuData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.dataAccess = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.defaultObj = {
            view: false,
            create: false,
            edit: false,
            delete: false
        };
    }
    getMenusData() {
        return this.findAllWithQuery("lan=EN").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((menus) => {
            return menus.map(menu => {
                if (menu.submenu) {
                    let checked = menu.submenu.find(x => x.show == true);
                    menu.submenu_show = checked ? true : false;
                    menu.show = menu.dataAccess.view;
                    menu.submenu = menu.submenu.map((x) => {
                        x.show = x.dataAccess.view;
                        if (x.submenu) {
                            let checked = x.submenu.find(z => z.show == true);
                            x.submenu_show = checked ? true : false;
                            x.submenu = x.submenu.map((i) => {
                                i.show = i.dataAccess.view;
                                return i;
                            });
                        }
                        return x;
                    });
                }
                if (menu.page == "dashboard/senior-lp-dashboard") {
                    menu.submenu_show = false;
                }
                if (menu.page == "product/products-config") {
                    let index = menu.submenu.findIndex(x => x.page == "product/products-config");
                    menu.submenu[index].page = "product/products-config/list";
                }
                // console.log('MENU==>',menu);
                return menu;
            });
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            if (res) {
                this.menuData.next(res);
                this.accessPremission();
            }
            if (!res) {
                localStorage.removeItem(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion}-${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.USERDATA_KEY}`);
            }
            return res;
        }));
    }
    accessPremission() {
        let data = {};
        ModuleList.forEach(element => {
            let access = this.getAccessPremission(element);
            let accessData = access ? access : {};
            accessData.view = accessData.read || accessData.view || false;
            data[element] = Object.assign(Object.assign({}, this.defaultObj), accessData);
        });
        this.dataAccess.next(data);
    }
    getAccessPremission(moduleType) {
        // this.menuData.value.forEach((menu: any) => {
        for (let menu of this.menuData.value) {
            if (menu.module == moduleType) {
                return menu.dataAccess;
            }
            else {
                if (menu.submenu) {
                    let access = menu.submenu.find((x) => x.module == moduleType);
                    if (access) {
                        return access.dataAccess;
                    }
                }
            }
        }
        // })
        return null;
    }
};
MenuDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
MenuDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root"
    })
], MenuDataService);



/***/ }),

/***/ 65813:
/*!**************************************!*\
  !*** ./src/app/messaging.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagingService": () => (/* binding */ MessagingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 58052);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3399);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ 45601);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);





let MessagingService = class MessagingService {
    constructor(afMessaging) {
        // let count = parseInt(localStorage.getItem("NOTI_KBZ"))
        this.afMessaging = afMessaging;
        this.token = null;
        this.notiCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        // this.notiCount.next(count)
        // localStorage.setItem("NOTI_KBZ", "0")
    }
    getNotiCount() {
        localforage__WEBPACK_IMPORTED_MODULE_0__.getItem("notiCount_E16237EJL2").then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let count = res ? parseInt(res) : 0;
            this.notiCount.next(count);
            yield localforage__WEBPACK_IMPORTED_MODULE_0__.setItem("notiCount_E16237EJL2", "0");
        }));
    }
    requestPermission() {
        return this.afMessaging.requestPermission.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMapTo)(this.afMessaging.tokenChanges));
    }
    init() {
        // navigator.serviceWorker.ready.then((registration) => {
        //   if (!this.afMessaging.useServiceWorker()) {
        //     return;
        //   }
        // })
    }
    getMessages() {
        return this.afMessaging.messages;
        // .subscribe((res)=>{
        //   res.data.
        // });
    }
    deleteToken() {
        if (this.token) {
            this.afMessaging.deleteToken(this.token);
            this.token = null;
        }
    }
};
MessagingService.ctorParameters = () => [
    { type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_4__.AngularFireMessaging }
];
MessagingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], MessagingService);



/***/ }),

/***/ 73027:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/auth.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModel": () => (/* binding */ AuthModel)
/* harmony export */ });
class AuthModel {
    setAuth(auth) {
        this.accessToken = auth.token;
        this.refreshToken = auth.refreshToken;
        this.expiresIn = auth.expiresIn;
        this.username = auth.username;
        this.id = auth.employeeId;
        this.firstName = auth.firstName;
        this.lastName = auth.lastName;
    }
}


/***/ }),

/***/ 13902:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/user.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => (/* binding */ UserModel)
/* harmony export */ });
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.model */ 73027);

class UserModel extends _auth_model__WEBPACK_IMPORTED_MODULE_0__.AuthModel {
    setUser(user) {
        this.id = user.id;
        this.username = user.username || '';
        this.firstName = user.firstName || '';
        this.lastName = user.lastName || '';
        this.password = user.password || '';
        this.fullname = user.fullname || '';
        this.email = user.email || '';
        this.pic = user.pic || './assets/media/users/default.jpg';
        this.roles = user.roles || [];
        this.occupation = user.occupation || '';
        this.companyName = user.companyName || '';
        this.phone = user.phone || '';
        this.address = user.address;
        this.socialNetworks = user.socialNetworks;
    }
}


/***/ }),

/***/ 51547:
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/auth-http.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHTTPService": () => (/* binding */ AuthHTTPService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);




const API_USERS_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users`;
const API_LOGIN_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/login`;
let AuthHTTPService = class AuthHTTPService {
    constructor(http) {
        this.http = http;
    }
    // public methods
    login(username, password) {
        return this.http.post(API_LOGIN_URL, { username, password });
    }
    // CREATE =>  POST: add a new user to the server
    createUser(user) {
        return this.http.post(API_USERS_URL, user);
    }
    // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
    forgotPassword(email) {
        return this.http.post(`${API_USERS_URL}/forgot-password`, {
            email,
        });
    }
    getUserByToken(token) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        return this.http.get(`${API_USERS_URL}`, {
            headers: httpHeaders,
        });
    }
};
AuthHTTPService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthHTTPService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthHTTPService);



/***/ }),

/***/ 88162:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHTTPService": () => (/* reexport safe */ _auth_http_service__WEBPACK_IMPORTED_MODULE_0__.AuthHTTPService)
/* harmony export */ });
/* harmony import */ var _auth_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-http.service */ 51547);
// #fake-start#
// #fake-end#
// #real-start#
 // You have to uncomment this, when your real back-end is done
// #real-end#


/***/ }),

/***/ 41785:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/menu-data.service */ 37632);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 69380);






let AuthGuard = class AuthGuard {
    constructor(authService, router, menuData, location) {
        this.authService = authService;
        this.router = router;
        this.menuData = menuData;
        this.location = location;
    }
    canLoad(route) {
        const authCheck = this.authService.currentUserValue ? true : false;
        if (authCheck) {
            return true;
        }
        let url = `/${route.path}`;
        this.router.navigate(['/login'], { queryParams: { redirectTo: url } });
        return authCheck;
    }
    canActivate(route, state) {
        // return true;
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            if (state.url.includes("/dashboard/")) {
                let access = this.menuData.menuData.getValue();
                let dashboard = access.find(x => x.page == "dashboard/senior-lp-dashboard");
                if (state.url == "/dashboard/senior-lp-dashboard") {
                    this.getAcessAndOther(dashboard, "dashboard/senior-lp-dashboard", "dashboard/lp-manager-dashboard", "dashboard/lp-dashboard");
                }
                else if (state.url == "/dashboard/lp-manager-dashboard") {
                    this.getAcessAndOther(dashboard, "dashboard/lp-manager-dashboard", "dashboard/lp-dashboard");
                }
                else if (state.url == "/dashboard/lp-dashboard") {
                    this.getAcessAndOther(dashboard, "dashboard/lp-dashboard");
                }
            }
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.authService.logout(state.url);
        return false;
    }
    canActivateChild(childRoute, state) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            if (state.url.includes("/dashboard/")) {
                let access = this.menuData.menuData.getValue();
                let dashboard = access.find(x => x.page == "dashboard/senior-lp-dashboard");
                if (state.url == "/dashboard/senior-lp-dashboard") {
                    this.getAcessAndOther(dashboard, "dashboard/senior-lp-dashboard", "dashboard/lp-manager-dashboard", "dashboard/lp-dashboard");
                }
                else if (state.url == "/dashboard/lp-manager-dashboard") {
                    this.getAcessAndOther(dashboard, "dashboard/lp-manager-dashboard", "dashboard/lp-dashboard");
                }
                else if (state.url == "/dashboard/lp-dashboard") {
                    this.getAcessAndOther(dashboard, "dashboard/lp-dashboard");
                }
            }
            return true;
        }
        this.authService.logout(state.url);
        return false;
    }
    getAcessAndOther(dashboard, urlData, redirect1, redirect2) {
        if (!dashboard) {
            this.router.navigateByUrl("/");
            return false;
        }
        let currentAccess = dashboard.submenu.find(x => x.page == urlData);
        if (!currentAccess.dataAccess.view) {
            if (redirect1) {
                let access = dashboard.submenu.find(x => x.page == redirect1);
                if (access.dataAccess.view) {
                    this.router.navigateByUrl(access.page);
                    return false;
                }
            }
            if (redirect2) {
                let access = dashboard.submenu.find(x => x.page == redirect2);
                if (access.dataAccess.view) {
                    this.router.navigateByUrl(access.page);
                    return false;
                }
            }
            this.location.back();
            return false;
        }
        else {
            return true;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_0__.MenuDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ 69380:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 72407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53951);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/user.model */ 13902);
/* harmony import */ var _models_auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/auth.model */ 73027);
/* harmony import */ var _auth_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-http */ 88162);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);









let AuthService = class AuthService {
    constructor(authHttpService, router) {
        this.authHttpService = authHttpService;
        this.router = router;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.authLocalStorageToken = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.appVersion}-${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.USERDATA_KEY}`;
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        const subscr = this.getUserByToken().subscribe();
        this.unsubscribe.push(subscr);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    set currentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    get authToken() {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.accessToken) {
            return null;
        }
        return auth.accessToken;
    }
    // public methods
    login(email, password) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.login(email, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            // console.log(res);
            let auth = new _models_auth_model__WEBPACK_IMPORTED_MODULE_1__.AuthModel();
            auth.setAuth(res);
            const result = this.setAuthFromLocalStorage(auth);
            return result;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.getUserByToken()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            console.error('err', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(undefined);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    logout(url) {
        localStorage.removeItem(this.authLocalStorageToken);
        // let url = `${this.router.url}`;
        // console.log(url);
        this.router.navigate(['/auth/login'], {
            queryParams: { redirectTo: url },
            replaceUrl: true
        });
    }
    getUserByToken() {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.accessToken) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(undefined);
        }
        // this.isLoadingSubject.next(true);
        // return this.authHttpService.getUserByToken(auth.accessToken).pipe(
        //   map((user: UserModel) => {
        //     if (user) {
        //       this.currentUserSubject = new BehaviorSubject<UserModel>(user);
        //     } else {
        //       this.logout();
        //     }
        //     return user;
        //   }),
        //   finalize(() => this.isLoadingSubject.next(false))
        // );
        let user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.UserModel();
        user.setUser(auth);
        // this.currentUserSubject = new BehaviorSubject<UserModel>(user);
        this.currentUserSubject.next(user);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(user);
    }
    // need create new user then login
    registration(user) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.createUser(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.isLoadingSubject.next(false);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.login(user.email, user.password)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            console.error('err', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(undefined);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    forgotPassword(email) {
        this.isLoadingSubject.next(true);
        return this.authHttpService
            .forgotPassword(email)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    // private methods
    setAuthFromLocalStorage(auth) {
        // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
        if (auth && auth.accessToken) {
            localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
            return true;
        }
        return false;
    }
    getAuthFromLocalStorage() {
        try {
            const authData = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
            return authData;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
};
AuthService.ctorParameters = () => [
    { type: _auth_http__WEBPACK_IMPORTED_MODULE_2__.AuthHTTPService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 67198:
/*!***************************************!*\
  !*** ./src/app/modules/auth/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => (/* reexport safe */ _models_user_model__WEBPACK_IMPORTED_MODULE_0__.UserModel),
/* harmony export */   "AuthService": () => (/* reexport safe */ _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService),
/* harmony export */   "ConfirmPasswordValidator": () => (/* reexport safe */ _registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__.ConfirmPasswordValidator)
/* harmony export */ });
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_models/user.model */ 13902);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/auth.service */ 69380);
/* harmony import */ var _registration_confirm_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/confirm-password.validator */ 63226);
// models

// services

// validators



/***/ }),

/***/ 63226:
/*!*************************************************************************!*\
  !*** ./src/app/modules/auth/registration/confirm-password.validator.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPasswordValidator": () => (/* binding */ ConfirmPasswordValidator)
/* harmony export */ });
class ConfirmPasswordValidator {
    /**
     * Check matching password with confirm password
     * @param control AbstractControl
     */
    static MatchPassword(control) {
        const password = control.get('password').value;
        const confirmPassword = control.get('cPassword').value;
        if (password !== confirmPassword) {
            control.get('cPassword').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ 34345:
/*!*********************************************************!*\
  !*** ./src/app/modules/languages/dyn-translate.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynTranslatePipe": () => (/* binding */ DynTranslatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _languages_languages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../languages/languages.service */ 59832);



let DynTranslatePipe = class DynTranslatePipe {
    constructor(_languageService) {
        this._languageService = _languageService;
    }
    transform(value, valueMM) {
        if (value) {
            let current = this._languageService.getSelectedLanguage();
            try {
                return current == "EN" ? value : valueMM || value;
            }
            catch (error) {
                return "Can't Translate Data";
            }
        }
    }
};
DynTranslatePipe.ctorParameters = () => [
    { type: _languages_languages_service__WEBPACK_IMPORTED_MODULE_0__.LanguagesService }
];
DynTranslatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({ name: 'dyn_translate', pure: false })
], DynTranslatePipe);



/***/ }),

/***/ 63699:
/*!********************************************************!*\
  !*** ./src/app/modules/languages/languages.modules.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageModule": () => (/* binding */ LanguageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _dyn_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dyn-translate.pipe */ 34345);
/* harmony import */ var _translate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate.pipe */ 15346);






let LanguageModule = class LanguageModule {
};
LanguageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
        declarations: [_translate_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _dyn_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.DynTranslatePipe],
        exports: [_translate_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _dyn_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.DynTranslatePipe]
    })
], LanguageModule);



/***/ }),

/***/ 59832:
/*!********************************************************!*\
  !*** ./src/app/modules/languages/languages.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagesService": () => (/* binding */ LanguagesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 24575);



const LOCALIZATION_LOCAL_STORAGE_KEY = 'kbzDefaultLanguage';
let LanguagesService = class LanguagesService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.seletedLanguage = 'en';
        this.languageChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.seletedLanguage = localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) || 'en';
    }
    loadTranslations(en, mm) {
        this.langs = { en: en.data, mm: mm.data };
    }
    setLanguage(lang) {
        if (lang) {
            this.seletedLanguage = lang;
            localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
            this.languageChanged.next(null);
        }
    }
    getSelectedLanguage() {
        return (this.seletedLanguage);
    }
    toggleLange() {
        // if(this.seletedLanguage == )
        this.ngZone.run(() => {
            this.seletedLanguage = this.seletedLanguage == "en" ? "mm" : "en";
            localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, this.seletedLanguage);
            this.languageChanged.next(null);
        });
    }
    transform(value) {
        if (value) {
            let current = this.getSelectedLanguage();
            let valueObj = value.split('.');
            if (valueObj.length == 2) {
                try {
                    return this.langs[current][valueObj[0]][valueObj[1]];
                }
                catch (error) {
                    return "Can't Translate Data";
                }
            }
        }
        return value;
    }
};
LanguagesService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }
];
LanguagesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], LanguagesService);



/***/ }),

/***/ 15346:
/*!*****************************************************!*\
  !*** ./src/app/modules/languages/translate.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatePipe": () => (/* binding */ TranslatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _languages_languages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../languages/languages.service */ 59832);



let TranslatePipe = class TranslatePipe {
    constructor(_languageService) {
        this._languageService = _languageService;
    }
    transform(value) {
        if (value) {
            let current = this._languageService.getSelectedLanguage();
            let valueObj = value.split('.');
            if (valueObj.length >= 2) {
                try {
                    return this._languageService.langs[current][valueObj[0]][valueObj[1]] || valueObj[1];
                }
                catch (error) {
                    return value;
                }
            }
        }
        return value;
    }
};
TranslatePipe.ctorParameters = () => [
    { type: _languages_languages_service__WEBPACK_IMPORTED_MODULE_0__.LanguagesService }
];
TranslatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({ name: 'translate', pure: false })
], TranslatePipe);



/***/ }),

/***/ 66109:
/*!************************************************!*\
  !*** ./src/app/modules/languages/vocabs/en.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'en',
    data: {
        CARD: {
            welcome: "Welcome",
            welcometxt: "  Welcome to KBZ MS and Life Insurance Sales Portal",
            forgettxt: "Forgot Password?",
            signin: "Sign In",
            sign_up: "Not a member yet? Sign up now",
            more: "INSURANCE YOU CAN RELY ON",
            phone_num: "Phone Number",
            passowrd: "Password",
            save: 'Save',
            cancel: 'Cancel',
            renewalRerun: 'Renewal Re-Run',
            renewalPolicyStatus: 'Policy Status Re-Run',
        },
        FORM: {
            title: "  Welcome to KBZ MS and Life Insurance Sales Portal",
            subtext: "Forgot Password?",
            button: "Sign In",
            sign_up: "Not a member yet? Sign up now",
            more: "INSURANCE YOU CAN RELY ON",
            phone_num: "Phone Number",
            passowrd: "Password",
            en: 'English',
            mm: 'Myanmar',
            change: 'Change Language',
            start_date: 'Start Date',
            end_date: 'End Date',
            open_date: 'Open Date',
            act_date: 'Activation Date',
            close_date: 'Closed Date',
            exp_date: 'Expiration Date',
            lead_list: 'Opportunity List',
            lead_detail: 'Opportunity Detail',
            product: 'Product',
            lead_id: 'Opportunity ID',
            lead_name: 'Opportunity Name',
            status: 'Status',
            campaign_name: 'Campaign Name',
            existing_customer: 'Existing Customer',
            source: 'Source',
            phone_number: 'Phone Number',
            subject: 'Subject',
            contact: 'Contact',
            precontact: 'Preferred Contact',
            type: 'Type',
            occupation: 'Occupation',
            company: 'Company',
            state: 'State',
            district: 'District',
            township: 'Township',
            validity_period: 'Validity period',
            distribution_channel: 'Distribution Channel',
            assign_to: 'Assign To',
            email: 'Email',
            identity_type: 'Identity Type',
            campaign_id: 'Campaign ID',
            nrc_frc_passport: 'NRC/FRC/Passport',
            referral_customer: 'Referral Customer',
            more_detail: 'More Detail',
            estimate_m_income: 'Estimate Money Income',
            facebook_acc: 'Facebook Acc',
            martial_status: 'Martial Status',
            financial_plan: 'Customer Financial Plan/Goal(in Next 6-12 months)',
            no_childern: 'No. of Children',
            existing_insurance_coverage: 'Existing Insurance Coverage',
            existing_insurance_plan: 'Existing Insurance Plan',
            score: 'Score',
            asset: 'Asset (If Any)',
            prospect_customer: 'Prospect Profile',
            lost_reason: 'Lost Reason',
            reject_reaosn: 'Reject Reason',
            create_lpp: 'Create LPP',
            create_bpm: 'Create BPM',
            create_by: 'Created By',
            create_date: 'Created',
            btn_approve: 'Approve',
            btn_reject: 'Reject',
            btn_win: 'Win',
            btn_lost: 'Lost',
            btn_save: 'Save',
            btn_cancel: 'Cancel',
            btn_close: 'Close',
            about_lpp: 'About LPP',
            product_recommendation: 'Product Recommendation',
            freedom: "Freedom",
            education: "Education",
            retirement: "Retirement",
            income: "Income",
            health: "Health",
            assets: "Assets",
            investment: "Investment",
            saving: "Saving",
            protection: "Protection",
            btn_back: "Back",
            btn_save_and_next: "Save & Next",
            btn_next: "Next",
            name: 'Name',
            party_code: 'Party Code',
            id_type: 'ID Type',
            id_no: 'ID No.',
            cs_title: 'Title',
            father_name: 'Father Name',
            first_name: 'First Name',
            mobile: 'Mobile',
            middle_name: 'Middle Name',
            last_name: 'Last Name',
            date_of_birth: 'Date of Birth',
            natoinality: 'Nationality',
            gender: 'Gender',
            house: 'House',
            road: 'Road',
            block_area: 'Block Area',
            company_name: 'Company Name',
            act_list: 'Activity Management List',
            act_type: 'Activity Type',
            act_title: 'Activity Title',
            related_to: '  Related to',
            owner: 'Owner',
            date: 'Date',
            act_no: ' Activity No.',
            act_desc: 'Activity Description',
            plan_date: 'Planned Date ',
            due_date: 'Due Date',
            customer_list: ' Customer List',
            customer_name: ' Customer Name',
            premium: 'Premium',
            mmk: 'MMK',
            products: 'Products',
            recent_operation: 'Recent Operations',
            quotes: 'Quotes',
            all: 'All',
            policies: 'Policies',
            campaign_for_today: 'Campaign for Today',
            things_to_follow_up: 'Things to Follow Up',
            calendar: 'Calendar',
            today: 'Today',
            overdue: 'Overdue Activities',
            backlog: 'Backlog',
            lead: 'Opportunities',
            lead_assigned: 'Opportunities Assigned',
            assigned_on: 'Assigned on',
            sale_performances: 'Sales Performances',
            lead_conversion: 'Opportunity Conversion',
            active_agent_today: 'Active Agent Today',
            activity: 'Activity',
            lead_today: 'Opportunity Today',
            my_view: 'My View',
            team_veiw: 'Team View',
            application_list: 'Application List',
            quotation_list: 'Quotation List',
            exchange_rate: 'Exchange Rate',
            currency: 'Currency',
            currency_exchange: 'Currency Exchange',
            rate: 'Rate',
            reset_password: 'Reset Password',
            old_password: 'Old Password',
            new_password: 'New Password',
            comirm_password: 'Comfirm Password',
            requset_auth: 'Request Authentication',
            policy_no: "Policy Number",
            policy_status: "Policy Status",
            policy_date: "Policy Inception Date",
            policy_edate: "Policy Expire Date",
            qoute_no: "Quote Number",
            renew_policy_no: "Renewal Policy Number",
            gross_premium: "Gross Premium",
            net_premium: "Net Premium",
            policy_holder: "Policy Holder",
            policy_holder_code: "Policy Holder Code",
            rerun_list: "Re-Run",
            child_name: "Child Name",
            btn_clear: "Clear",
            higher_education: "Higher Education",
            sum_insured: "Sum Insured",
            education_expenses: "Education Expenses",
            add_child: "Add Child",
            retirement_age: "Retirement Age",
            pre_retirement_income: "Pre Retirement Income",
            retirement_savings_required: "Retirement Savings Required",
            retirement_savings_incl_spouse: "Retirement Savings Incl. Spouse",
            source_of_income: "Source Of Income",
            family_monthly_spending: "Family Monthly Spending(lakhs)",
            estimated_monthly_income: "Estimated Monthly Income(lakhs)",
            with_protection: "With Protection",
            rad_yes: "Yes",
            rad_no: "No",
            name_of_spouse: "Name of Spouse",
            name_of_child: "Name of Child",
            asset_type: "Asset Type",
            please_specify: "Please Specify",
            with_insurance_protection: "With Insurance Protection",
            replacement_purchase_cost: "Replacement / Purchase Cost",
            about_bpm: "About BPM",
            input: "Input",
            output: "Output",
            inbound_logistics: "INBOUND_LOGISTICS",
            operation: "OPERATION",
            outbound_logistics: "OUTBOUND LOGISTICS",
            marketing_sales: "MARKETING SALES",
            service: "SERVICE",
            technology: "TECHNOLOGY",
            human_resources: "HUMAN RESOURCES",
            management_infrastructure: "MANAGEMENT INFRASTRUCTURE",
        },
        NAV: {
            my_acc: "My Account",
            my_claims: "My Claims",
            my_pol: "My Policies",
            my_req: "My Request",
            cus_sup: "Customer Support",
            ins_prod: "Insurance Product",
            req_consult: "Request For Consulting",
            find_off: "Find Office",
            about_us: "About Us",
            noti: "Notification",
            change_pw: "Change Password",
            setting: "Setting",
            logout: "Logout",
            others: "Others",
            raw_material_storage: "Raw Material Storage",
            transportation: "Transportation",
            warehouse: "Warehouse",
            btn_previous: "Previous",
            assets_desc: "Assets Description",
            no_of__units: "No of Units",
            estimated_value: "Estimated Value",
            risk_perception: "Risk Perception",
            product: "Product",
            action: "Action",
            total: "Total",
        },
        TABLE: {
            'FNA ID': "FNA ID",
            'Date': "Date",
            'Type': "Type ",
            'Conducted By': "Conducted By",
            'Actions': "Actions",
            'Job Type': "Job Type",
            'Job Name': "Job Name",
            'Status': "Status",
            'Group Name': "Group Name",
            'Simple Data': "Simple Data",
        },
        ERROR: {
            not_match: 'Password and confirm password does not match',
        }
    }
};


/***/ }),

/***/ 72516:
/*!************************************************!*\
  !*** ./src/app/modules/languages/vocabs/mm.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'mm',
    data: {
        CARD: {
            header: "Header Show",
            welcome: "ကြိုဆိုပါသည်",
            welcometxt: "Welcome to KBZ Insurance Customer Care",
            signin: "ကိုယ်ပိုင်အကောင့်ဖြင့်၀င်မည်",
            forgettxt: "လျှို့ဝှက်နံပါတ်မေ့နေပါသလား?",
            sign_up: "အဖွဲ့၀င် မဖြစ်သေးဘူးလား? အခုပဲ မှတ်ပုံတင်လိုက်ပါ",
            more: "ယုံကြည်အားထား အာမခံစွမ်းအား",
            phone_num: "ဖုန်းနံပါတ်",
            passowrd: "လျှို့ဝှက်နံပါတ်",
            title: "သတ်မှတ်ချက်များ",
            en: 'အင်္ဂလိပ်',
            mm: 'မြန်မာ',
            change: 'ဘာသာစကားပြောင်းလဲရန်',
            language: "ဘာသာစကား",
            save: 'Save',
            cancel: 'Cancel',
        },
        FORM: {
            welcome: "Welcome to KBZ Insurance Customer Care",
            forgettxt: "ကိုယ်ပိုင်အကောင့်ဖြင့်၀င်မည်",
            sign_up: "အဖွဲ့၀င် မဖြစ်သေးဘူးလား? အခုပဲ မှတ်ပုံတင်လိုက်ပါ",
            more: "ယုံကြည်အားထား အာမခံစွမ်းအား",
            phone_num: "ဖုန်းနံပါတ်",
            passowrd: "လျှို့ဝှက်နံပါတ်",
            title: "သတ်မှတ်ချက်များ",
            en: 'အင်္ဂလိပ်',
            mm: 'မြန်မာ',
            change: 'ဘာသာစကားပြောင်းလဲရန်',
            language: "ဘာသာစကား",
            lead_list: 'Opportunity List',
            lead_detail: 'Opportunity Detail',
            start_date: 'စတင်သည့်ရက်စွဲ',
            end_date: 'ဆုံးသည့်ရက်စွဲ',
            open_date: 'စာရင်းသွင်းသည့် နေ့',
            act_date: 'စတင်သည့် ရက်စွဲ',
            close_date: 'စာရင်းပိတ်သည့် နေ့',
            exp_date: 'သက်တမ်းကုန်ဆုံးရက်',
            product: 'အာမခံ အမျိုးအစား',
            lead_id: 'Opportunity ID',
            lead_name: 'Opportunity အမည်',
            status: 'ဆောင်ရွက်မှု အခြေအနေ',
            campaign_name: 'ကမ်ပိန်းအမည်',
            existing_customer: 'လက်ရှိ customer',
            source: 'ရင်းမြစ်',
            phone_number: 'ဖုန်းနံပါတ်',
            subject: 'အကြောင်းအရာ',
            contact: 'Contact',
            precontact: 'ဦးစားပေး ဆက်သွယ်ရန်',
            type: 'အမျိုးအစား',
            occupation: 'အလုပ်အကိုင်',
            company: 'ကုမ္ပဏီ',
            state: 'ပြည်နယ်',
            district: 'ခရိုင်',
            township: 'မြို့နယ်',
            validity_period: 'အကျုံးဝင် ကာလ',
            distribution_channel: 'Distribution Channel',
            assign_to: 'တာဝန်ပေးခံရသူ',
            email: 'အီးမေးလ်',
            identity_type: 'နိုင်ငံသားစီစစ်ရေးကတ်ပြားအမျိုးအစား',
            campaign_id: 'ကမ်ပိန်း ID',
            nrc_frc_passport: 'NRC/FRC/Passport',
            referral_customer: 'ညွှန်းပေးသည့် customer',
            more_detail: 'More Detail',
            estimate_m_income: 'ခန့်မှန်းလစဉ်ဝင်ငွေ',
            facebook_acc: 'Facebook အကောင့်',
            martial_status: 'အိမ်ထောင်ရှိ/မရှိ',
            financial_plan: 'Customer၏ ငွေကြေးစီမံချက်/ရည်မှန်းချက် (နောက်၆လအတွင်း)',
            no_childern: 'ကလေးအရေအတွက်',
            existing_insurance_coverage: 'လက်ရှိအာမခံထားငွေ​',
            existing_insurance_plan: 'လက်ရှိထားရှိသော အာမခံအမျိုးအစား',
            score: 'ရမှတ်',
            asset: 'ပိုင်ဆိုင်သောပစ္စည်း(ရှိလျှင် ဖြေ့ပါ)',
            prospect_customer: 'Prospect Customer',
            prospect_profile: 'အလားအလာရှိသူ၏ ကိုယ်ရေးအချက်အလက်',
            lost_reason: 'ဆုံးရှုံးရခြင်း အကြောင်းအရာ',
            reject_reaosn: 'ငြင်းပယ်ရခြင်း အကြောင်းအရာ',
            create_lpp: 'LPP အသစ်လုပ်ပါ',
            create_bpm: 'BPM အသစ်လုပ်ပါ',
            create_by: 'လုပ်ဆောင်သူ',
            create_date: 'လုပ်ဆောင် သည့်ရက်စွဲ',
            btn_approve: 'Approve',
            btn_reject: 'Reject',
            btn_win: 'Win',
            btn_lost: 'Lost',
            btn_save: 'Save',
            btn_cancel: 'Cancel',
            name: 'အမည်',
            about_lpp: 'LPP အကြောင်း အရာ',
            product_recommendation: 'အကြံပြုသည့် အာမခံ အမျိုးအစားများ',
            freedom: "ငွေကြေး လွတ်လပ်မှု",
            education: "ပညာရေး",
            retirement: "အလုပ်မှ အနားယူခြင်း",
            income: "ဝင်ငွေ",
            health: "ကျန်းမာရေး",
            assets: "ပိုင်ဆိုင်သောပစ္စည်း",
            investment: "ရင်းနှီးမြှုပ်နှံမှု",
            saving: "စုဆောင်းထားမှု",
            protection: "အကာအကွယ်",
            btn_back: "နောက်ဆုတ်ရန်",
            btn_save_and_next: "သိမ်းဆည်းပြီး ရှေ့သို့သွားမည်",
            btn_next: "ဆက်သွားရန်",
            party_code: 'Party Code',
            id_type: 'ID Type',
            id_no: 'ID No.',
            cs_title: 'Title',
            father_name: 'Father Name',
            first_name: 'First Name',
            mobile: 'Mobile',
            middle_name: 'Middle Name',
            last_name: 'Last Name',
            date_of_birth: 'မွေးနေ့',
            natoinality: 'Nationality',
            gender: 'Gender',
            house: 'House',
            road: 'Road',
            block_area: 'Block Area',
            company_name: 'Company Name',
            act_list: 'Activity Management List',
            act_type: 'Activity Type',
            act_title: 'Activity Title',
            related_to: '  Related to',
            owner: 'Owner',
            date: 'Date',
            act_no: ' Activity No.',
            act_desc: 'Activity Description',
            plan_date: 'Planned Date ',
            due_date: 'Due Date',
            customer_list: ' Customer List',
            customer_name: ' Customer Name',
            premium: 'Premium',
            mmk: 'MMK',
            btn_close: 'Close',
            products: 'Products',
            recent_operation: 'Recent Operations',
            quotes: 'Quotes',
            all: 'All',
            policies: 'Policies',
            campaign_for_today: 'Campaign for Today',
            things_to_follow_up: 'Things to Follow Up',
            calendar: 'Calendar',
            today: 'Today',
            overdue: 'Overdue Activities',
            backlog: 'Backlog',
            lead: 'Opportunities',
            lead_assigned: 'Opportunities Assigned',
            assigned_on: 'Assigned on',
            sale_performances: 'Sales Performances',
            lead_conversion: 'Opportunity Conversion',
            active_agent_today: 'Active Agent Today',
            activity: 'Activity',
            lead_today: 'Opportunity Today',
            my_view: 'My View',
            team_veiw: 'Team View',
            application_list: 'Application List',
            quotation_list: 'Quotation List',
            exchange_rate: 'Exchange Rate',
            currency: 'Currency',
            currency_exchange: 'Currency Exchange',
            rate: 'Rate',
            reset_password: 'Reset Password',
            old_password: 'Old Password',
            new_password: 'New Password',
            comirm_password: 'Comfirm Password',
            requset_auth: 'Request Authentication',
            policy_no: "Policy Number",
            policy_status: "Policy Status",
            policy_date: "Policy Inception Date",
            policy_edate: "Policy Expire Date",
            qoute_no: "Quote Number",
            renew_policy_no: "Renewal Policy Number",
            gross_premium: "Gross Premium",
            net_premium: "Net Premium",
            policy_holder: "Policy Holder",
            policy_holder_code: "Policy Holder Code",
            rerun_list: "Re-Run",
            child_name: "ကလေးအမည်",
            btn_clear: "ရှင်းလင်းပါ။",
            higher_education: "အဆင့်မြင့် ပညာရေး",
            sum_insured: "အာမခံ ထားငွေ",
            education_expenses: "ပညာရေးအသုံးစရိတ်",
            add_child: "နောက်တစ်ယောက်ထည့်ရန်",
            retirement_age: "အလုပ်မှ အနားယူသည့်အသက်",
            pre_retirement_income: "အလုပ်မှ အနားမယူခင်ဝင်ငွေ ",
            retirement_savings_required: "အနားယူရန် လိုအပ်သည့် စုဆောင်းငွေ",
            retirement_savings_incl_spouse: "အနားယူရန် လိုအပ်သည့် စုဆောင်းငွေ (အိမ်ထောင်ဖက်အပါအဝင်) ",
            source_of_income: "ဝင်ငွေ အရင်းအမြစ်",
            family_monthly_spending: "မိသားစုလစဉ် သုံးစွဲငွေ(သိန်းပေါင်း)",
            estimated_monthly_income: "ခန့်မှန်းလစဉ် ဝင်ငွေ(သိန်းပေါင်း)",
            with_protection: "အိမ်ထောင်ဖက်အမည်",
            rad_yes: "ရှိ",
            rad_no: "မရှိ",
            name_of_spouse: "အိမ်ထောင်ဖက်အမည်",
            name_of_child: "ကလေးအမည်",
            asset_type: "ပိုင်ဆိုင်သောပစ္စည်းအမျိုးအစား",
            please_specify: "သတ်မှတ်ပေးပါ။",
            with_insurance_protection: "အာမခံကာကွယ်မှုနှင့်အတူ",
            replacement_purchase_cost: "အစားထိုး/ဝယ်ယူမှုကုန်ကျစရိတ်",
            about_bpm: "BPM အကြောင်း အရာ",
            input: "အချက်အလက် ထည့်သွင်းရန်",
            output: "ရလဒ်",
            inbound_logistics: "INBOUND ထောက်ပံ့ပို့ဆောင်ရေး",
            operation: "လုပ်ငန်း လည်ပတ်မှု",
            outbound_logistics: "OUTBOUND ထောက်ပံ့ပို့ဆောင်ရေး",
            marketing_sales: "စျေးကွက်ရှာဖွေရေး / အရောင်း",
            service: "ဝန်ဆောင်မှု",
            technology: "နည်းပညာ",
            human_resources: "လူ့အင်အားအရင်းအမြစ်",
            management_infrastructure: "စီမံခန့်ခွဲမှု အခြေခံအဆောက်အအုံ   စီမံခန့်ခွဲမှု အခြေခံအရင်းအမြစ်",
        },
        NAV: {
            my_acc: "ကိုယ်ပိုင်အကောင့်",
            my_claims: "ကျွန်ုပ် တောင်းခံချက်များ",
            my_pol: "အာမခံထားရှိသည့် ပေါ်လစီများ",
            my_req: "ကျွန်ုပ် တောင်းဆိုချက်များ",
            cus_sup: "လုပ်ငန်းဝန်ဆောင်မှု",
            ins_prod: "အာမခံဝန်ဆောင်မှုများ",
            req_consult: "Request For Consulting",
            find_off: "Find Office",
            about_us: "About Us",
            noti: "အသိပေးချက်များ",
            change_pw: "လျှို့ဝှက်နံပါတ် ပြောင်းရန်",
            setting: "သတ်မှတ်ချက်များ",
            logout: "ထွက်ရန်",
            others: "ဂိုဒေါင်",
            raw_material_storage: "ဂိုဒေါင်",
            transportation: "ကုန်ကြမ်းသိုလှောင်မှု",
            warehouse: "လမ်းပန်းဆက်သွယ်ရေးသယ်ယူပို့ဆောင်ရေး",
            btn_previous: "နောက်ဆုတ်ရန်",
            assets_desc: "ပိုင်ဆိုင်မှု ဖော်ပြချက်",
            no_of__units: "ယူနစ် အရေအတွက်",
            estimated_value: "ခန့်မှန်းတန်ဖိုး (သိန်းပေါင်း)",
            risk_perception: "အန္တရာယ်ရှိနိုင်ခြေယူဆချက်",
            product: "ကုန်ပစ္စည်း  အာမခံ အမျိုးအစား",
            action: "လုပ်ဆောင်ရန် လုပ်ဆောင်ချက်",
            total: "စုစုပေါင်း",
        },
        TABLE: {
            'FNA ID': "FNA ID",
            'Date': "ရက်စွဲ",
            'Type': "အမျိုးအစား ",
            'Conducted By': "လုပ်ဆောင်သူ",
            'Actions': "လုပ်ဆောင်ချက်များ",
            'Job Type': "Job Type",
            'Job Name': "Job Name",
            'Status': "Status",
            'Group Name': "Group Name",
            'Simple Data': "Simple Data",
        },
        ERROR: {
            not_match: 'Password and confirm password does not match',
        }
    },
};


/***/ }),

/***/ 42965:
/*!****************************************************************************!*\
  !*** ./src/app/modules/loading-toast/alert-model/alert-model.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModelComponet": () => (/* binding */ AlertModelComponet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);



let AlertModelComponet = class AlertModelComponet {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    closeSuccess() {
        this.modal.dismiss({ type: 'ok' });
    }
    ngOnDestroy() {
    }
};
AlertModelComponet.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbActiveModal }
];
AlertModelComponet = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        // moduleId: module.id,
        template: `
    <div class="modal-content" >
        <div class="modal-header">
            <div class="modal-title h4 left-border-image" id="example-modal-sizes-title-md">
            {{title}}
            </div>
        </div>
        <div class="modal-body">
            {{message}}
        </div>
        <div class="modal-footer">
        <button type="button" *ngIf= "title == 'Warning Message' " class="btn btn-light btn-elevate mr-2" (click)="modal.dismiss()">
            Cancel
        </button>
        <button type="submit" class="btn btn-primary btn-elevate" (click)="closeSuccess()">Ok</button>
        </div>
    </div>
    
    `,
        selector: "kbz-alert"
    })
], AlertModelComponet);



/***/ }),

/***/ 24373:
/*!*************************************************************************!*\
  !*** ./src/app/modules/loading-toast/alert-model/alert-model.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModelModule": () => (/* binding */ AlertModelModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module-import-guard */ 12747);
/* harmony import */ var _alert_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-model.component */ 42965);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component */ 39936);




// import { NgbToast } from "@ng-bootstrap/ng-bootstrap";



let AlertModelModule = class AlertModelModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'AlertModelModule');
    }
};
AlertModelModule.ctorParameters = () => [
    { type: AlertModelModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf }] }
];
AlertModelModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule],
        exports: [_alert_model_component__WEBPACK_IMPORTED_MODULE_1__.AlertModelComponet, _alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponet],
        declarations: [_alert_model_component__WEBPACK_IMPORTED_MODULE_1__.AlertModelComponet, _alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponet],
        // providers: [AlertService]
    })
], AlertModelModule);



/***/ }),

/***/ 39936:
/*!**********************************************************************!*\
  !*** ./src/app/modules/loading-toast/alert-model/alert.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponet": () => (/* binding */ AlertComponet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _alert_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-model.component */ 42965);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 60940);





let AlertComponet = class AlertComponet {
    constructor(alertService, modalService) {
        this.alertService = alertService;
        this.modalService = modalService;
        alertService.activate = this.activate.bind(this);
        alertService.deactivate = this.deactivate.bind(this);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    activate(message, title) {
        return new Promise((resolve, reject) => {
            const modalRef = this.modalService.open(_alert_model_component__WEBPACK_IMPORTED_MODULE_0__.AlertModelComponet, { size: 'sm', backdrop: false });
            modalRef.componentInstance.title = title;
            modalRef.componentInstance.message = message;
            modalRef.result.then(() => { }, (res) => {
                resolve(res);
            });
        });
    }
    deactivate() {
        this.modalService.dismissAll();
    }
};
AlertComponet.ctorParameters = () => [
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal }
];
AlertComponet = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        template: "",
        selector: "app-alert"
    })
], AlertComponet);



/***/ }),

/***/ 60940:
/*!********************************************************************!*\
  !*** ./src/app/modules/loading-toast/alert-model/alert.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let AlertService = class AlertService {
};
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 54576:
/*!********************************************************************!*\
  !*** ./src/app/modules/loading-toast/loading/loading.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KBZLoadingComponent": () => (/* binding */ KBZLoadingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _loading_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.component.scss */ 75575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.service */ 60807);




let KBZLoadingComponent = class KBZLoadingComponent {
    constructor(loadingSerice, cdf) {
        this.loadingSerice = loadingSerice;
        this.cdf = cdf;
        this.showLoading = false;
        this.requestCount = 0;
        this.loadingHtml = "";
        loadingSerice.activate = this.activate.bind(this);
        loadingSerice.deactivate = this.deactivate.bind(this);
    }
    ngOnInit() {
        this.loadingHtml = `<div id="loading-wrapper">
        <div id="loading-text">LOADING</div>
        <div id="loading-content"></div>
        </div>`;
    }
    deactivate() {
        this.requestCount--;
        if (this.requestCount <= 0) {
            this.showLoading = false;
            this.hideLoading();
            this.cdf.detectChanges();
        }
        else {
            this.cdf.detectChanges();
        }
        // clearInterval(this.inter)
    }
    activate() {
        if (this.requestCount < 0) {
            this.requestCount = 0;
        }
        this.requestCount++;
        this.showLoading = true;
        if (!this.loadingContainer.nativeElement.innerHTML)
            this.appendLoading();
        // this.inter = setInterval(() => {
        //     this.deactivate()
        // }, 1000 * 60 * 3)
    }
    appendLoading() {
        this.loadingContainer.nativeElement.innerHTML = this.loadingHtml;
    }
    hideLoading() {
        this.loadingContainer.nativeElement.innerHTML = null;
    }
};
KBZLoadingComponent.ctorParameters = () => [
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }
];
KBZLoadingComponent.propDecorators = {
    loadingContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['loadingContainer', { static: true },] }]
};
KBZLoadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        // moduleId: module.id,
        template: `
    <div #loadingContainer>
        
    </div>
    `,
        selector: "kbz-loading",
        styles: [_loading_component_scss__WEBPACK_IMPORTED_MODULE_0__]
    })
], KBZLoadingComponent);



/***/ }),

/***/ 90872:
/*!*****************************************************************!*\
  !*** ./src/app/modules/loading-toast/loading/loading.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KBZLoadingModule": () => (/* binding */ KBZLoadingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module-import-guard */ 12747);
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.component */ 54576);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ 60807);






let KBZLoadingModule = class KBZLoadingModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'KBZLoadingModule');
    }
};
KBZLoadingModule.ctorParameters = () => [
    { type: KBZLoadingModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf }] }
];
KBZLoadingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
        declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_1__.KBZLoadingComponent],
        exports: [_loading_component__WEBPACK_IMPORTED_MODULE_1__.KBZLoadingComponent],
        providers: [_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService],
    })
], KBZLoadingModule);



/***/ }),

/***/ 60807:
/*!******************************************************************!*\
  !*** ./src/app/modules/loading-toast/loading/loading.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let LoadingService = class LoadingService {
};
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], LoadingService);



/***/ }),

/***/ 12747:
/*!**************************************************************!*\
  !*** ./src/app/modules/loading-toast/module-import-guard.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 99939:
/*!*****************************************************************!*\
  !*** ./src/app/modules/loading-toast/toast/kbz-toast.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KBZToastModule": () => (/* binding */ KBZToastModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module-import-guard */ 12747);
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.component */ 19773);




// import { NgbToast } from "@ng-bootstrap/ng-bootstrap";

// import { KBZToastService } from "./kbz-toast.service";

let KBZToastModule = class KBZToastModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'KBZToastModule');
    }
};
KBZToastModule.ctorParameters = () => [
    { type: KBZToastModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.SkipSelf }] }
];
KBZToastModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule],
        exports: [_toast_component__WEBPACK_IMPORTED_MODULE_1__.KBZToastComponet],
        declarations: [_toast_component__WEBPACK_IMPORTED_MODULE_1__.KBZToastComponet],
        // providers: [KBZToastService],
    })
], KBZToastModule);



/***/ }),

/***/ 18829:
/*!******************************************************************!*\
  !*** ./src/app/modules/loading-toast/toast/kbz-toast.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KBZToastService": () => (/* binding */ KBZToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 24575);



let KBZToastService = class KBZToastService {
    constructor(prior) {
        this.toastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.toastState = this.toastSubject.asObservable();
        if (prior) {
            //console.log('toast service already exists');
            return prior;
        }
        else {
            //console.log('created toast service')
        }
    }
    activate(message, type) {
        this.toastSubject.next({ message, type });
    }
};
KBZToastService.ctorParameters = () => [
    { type: KBZToastService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf }] }
];
KBZToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], KBZToastService);



/***/ }),

/***/ 19773:
/*!****************************************************************!*\
  !*** ./src/app/modules/loading-toast/toast/toast.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KBZToastComponet": () => (/* binding */ KBZToastComponet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_src_app_modules_loading_toast_toast_toast_component_ts_css_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_Lm5nYi10b2FzdHMgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB0b3A6IDA7CiAgICAgICAgcmlnaHQ6IDA7CiAgICAgICAgbWFyZ2luOiAuNWVtOwogICAgICAgIHotaW5kZXg6IDEyMDA7CiAgICAgICAgbWluLXdpZHRoOiA0MDBweDsKICAgIH0KICAgIC5jdXN0b2FzdHsKICAgICAgICBmb250LXNpemU6MTNweDsKICAgICAgICBwYWRkaW5nLXRvcDoxMHB4OwogICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7CiAgICB9CiAgICA_3D_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_src_app_modules_loading_toast_toast_toast_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/modules/loading-toast/toast/toast.component.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Lm5nYi10b2FzdHMgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB0b3A6IDA7CiAgICAgICAgcmlnaHQ6IDA7CiAgICAgICAgbWFyZ2luOiAuNWVtOwogICAgICAgIHotaW5kZXg6IDEyMDA7CiAgICAgICAgbWluLXdpZHRoOiA0MDBweDsKICAgIH0KICAgIC5jdXN0b2FzdHsKICAgICAgICBmb250LXNpemU6MTNweDsKICAgICAgICBwYWRkaW5nLXRvcDoxMHB4OwogICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7CiAgICB9CiAgICA%3D!./src/app/modules/loading-toast/toast/toast.component.ts */ 87083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _kbz_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kbz-toast.service */ 18829);




let KBZToastComponet = class KBZToastComponet {
    constructor(kbzToastService, cdf) {
        this.kbzToastService = kbzToastService;
        this.cdf = cdf;
        this.defaults = {
            message: 'May the Force be with You',
            type: 'success'
        };
        this.classList = {
            'success': "bg-success text-light",
            'error': "bg-danger text-light",
            'noraml': ""
        };
        this.toasts = [];
        this.toastSubscription = this.kbzToastService.toastState.subscribe((toastMessage) => {
            this.activate(toastMessage.message, toastMessage.type);
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.toastSubscription.unsubscribe();
    }
    activate(message = this.defaults.message, type = this.defaults.type) {
        this.toasts.push({ message, type });
        this.cdf.detectChanges();
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
        // this.cdf.detectChanges()
    }
};
KBZToastComponet.ctorParameters = () => [
    { type: _kbz_toast_service__WEBPACK_IMPORTED_MODULE_1__.KBZToastService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }
];
KBZToastComponet = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        // moduleId: module.id,
        template: `
    <div class="ngb-toasts">
    <ngb-toast
        *ngFor="let toast of toasts; index as index" 
        [autohide]="true" class="custoast"
        [delay]="toast.delay || 5000" [class]="classList[toast.type] || '' "
        (hidden)="remove(toast)"
        (click)="remove(toast)"
        >
        {{toast.message}}
    </ngb-toast>
    </div>
    `,
        selector: "kbz-toast",
        styles: [_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_src_app_modules_loading_toast_toast_toast_component_ts_css_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_Lm5nYi10b2FzdHMgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB0b3A6IDA7CiAgICAgICAgcmlnaHQ6IDA7CiAgICAgICAgbWFyZ2luOiAuNWVtOwogICAgICAgIHotaW5kZXg6IDEyMDA7CiAgICAgICAgbWluLXdpZHRoOiA0MDBweDsKICAgIH0KICAgIC5jdXN0b2FzdHsKICAgICAgICBmb250LXNpemU6MTNweDsKICAgICAgICBwYWRkaW5nLXRvcDoxMHB4OwogICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7CiAgICB9CiAgICA_3D_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_src_app_modules_loading_toast_toast_toast_component_ts__WEBPACK_IMPORTED_MODULE_0__]
    })
], KBZToastComponet);



/***/ }),

/***/ 26697:
/*!************************************************************!*\
  !*** ./src/app/modules/master-data/master-data.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterDataService": () => (/* binding */ MasterDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);






let MasterDataService = class MasterDataService {
    constructor(http) {
        this.http = http;
        this.masterTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
        this.masterType$ = this.masterTypeSubject.asObservable();
    }
    getType() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/codetype").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res.map(x => x.codeType);
        })).toPromise().then(res => {
            this.masterTypeSubject.next(res);
        });
    }
    getDataByType(type, address) {
        if (address)
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/address-code?codeType=" + type + "&lang_cd=EN");
        else
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/codebook?code_type=" + type + "&lang_cd=EN");
    }
    getDataByParent(type, parentId, parentType) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/codebook?code_type=" + type + "&parent_id=" + parentId + "&parent_type=" + parentType + "&lang_cd=EN");
    }
    getMasterValue(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/codebook", data);
    }
    getAddressDataByType(type, parentId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/address-code?codeType=" + type + "&parentCode=" + parentId + "&lang_cd=EN");
    }
};
MasterDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
MasterDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], MasterDataService);



/***/ }),

/***/ 54199:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/form-component/sort-config-modal/sort-config-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortConfigModalComponent": () => (/* binding */ SortConfigModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sort_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sort-config-modal.component.html */ 40877);
/* harmony import */ var _sort_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-config-modal.component.scss */ 66117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 64744);







let SortConfigModalComponent = class SortConfigModalComponent {
    constructor(fb, modal) {
        this.fb = fb;
        this.modal = modal;
        this.showData = [];
        this.type = "from";
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadConfig();
    }
    loadConfig() {
        //console.log(this.showData);
    }
    save() {
        this.modal.dismiss({ data: this.showData, type: 'save' });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.moveItemInArray)(this.showData, event.previousIndex, event.currentIndex);
    }
};
SortConfigModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal }
];
SortConfigModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sort-config-modal',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sort_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sort_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SortConfigModalComponent);



/***/ }),

/***/ 1402:
/*!******************************************************!*\
  !*** ./src/app/pages/products/models/product.dto.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleType": () => (/* binding */ RuleType),
/* harmony export */   "PageUIType": () => (/* binding */ PageUIType),
/* harmony export */   "PRODUCT_STATUS": () => (/* binding */ PRODUCT_STATUS)
/* harmony export */ });
var RuleType;
(function (RuleType) {
    RuleType["DAY"] = "days";
    RuleType["MONTH"] = "months";
})(RuleType || (RuleType = {}));
var PageUIType;
(function (PageUIType) {
    PageUIType["DYN"] = "dyn";
    PageUIType["STATIC"] = "static";
})(PageUIType || (PageUIType = {}));
const PRODUCT_STATUS = {
    "01": "Draft",
    "02": "Active"
};


/***/ }),

/***/ 84410:
/*!***************************************!*\
  !*** ./src/app/user-token.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTokenService": () => (/* binding */ UserTokenService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 18260);




const API_TOKEN_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/login-user/firebase/token`;
let UserTokenService = class UserTokenService {
    constructor(http) {
        this.http = http;
    }
    updateToken(token) {
        return this.http.post(API_TOKEN_URL + "?firebaseToken=" + token, {});
    }
};
UserTokenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UserTokenService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserTokenService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    appVersion: 'v717demo1',
    USERDATA_KEY: 'authf649fc9a5f55',
    isMockEnabled: false,
    apiUrl: 'http://producersalesuat.kbzms.com/sale/api/v1',
    // apiUrl: 'http://104.248.152.205:8082/sale/api/v1',
    firebaseConfig: {
        apiKey: "AIzaSyA83H8v2hiBokOT3lk_YfktW20GRPp-UqM",
        authDomain: "digitalfe-uat.firebaseapp.com",
        projectId: "digitalfe-uat",
        storageBucket: "digitalfe-uat.appspot.com",
        messagingSenderId: "210382068330",
        appId: "1:210382068330:web:930c7c1ac9570df92bc813",
        measurementId: "G-E16237EJL2",
        serverKey: "AAAAMPu_mmo:APA91bEaAJFOiw2fiyMjR2bSVq4102vApYMwtupFltwO-6n-R4EawL92q27OQyWHl9eSOpNjfb0q-BaZA6V1xWAMGojYfzCtRB-ZfxIHSbYZinMA3HV2fNgqWXtAKoZkV5cuJe0KhQdB"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 * LD-20220303-0004691
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//cd dist
//jar -cvf bss-kbzms-sale-portal.war *


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 67648:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- splash screen -->\r\n<div #splashScreen id=\"splash-screen\">\r\n  <img src=\"assets/logo.png\" alt=\"Logo\" style=\"width: 150px;\"/>\r\n  <svg class=\"splash-spinner\" viewBox=\"0 0 50 50\">\r\n    <circle\r\n      class=\"path\"\r\n      cx=\"25\"\r\n      cy=\"25\"\r\n      r=\"20\"\r\n      fill=\"none\"\r\n      stroke-width=\"5\"\r\n    ></circle>\r\n  </svg>\r\n</div>\r\n");

/***/ }),

/***/ 60942:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/action-button/action-button.component.html ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"white-space: nowrap;text-align: center;\">\r\n    <a *ngIf=\"viewBtn.confirm && data.status != 'CONFIRM' \" title=\"Confirm Form Page\"\r\n        class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionConfirm()\">\r\n        Confirm\r\n    </a>\r\n    <a *ngIf=\"viewBtn.view\" title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView()\">\r\n        <span class=\"flaticon-eye\"></span>\r\n        <!-- <span [inlineSVG]=\"'./assets/media/svg/icons/General/Visible.svg'\" [cacheSVG]=\"true\"\r\n      class=\"svg-icon svg-icon-md svg-icon-white\">\r\n    </span> -->\r\n    </a>\r\n\r\n    <!-- <ng-container *ngIf=\"prod.application || prod.quotation\"> -->\r\n    <ng-container *ngIf=\"viewBtn.editOnState;else editBtn\">\r\n        <a *ngIf=\"viewBtn.edit && (data['status'] == 'in_progress' || data['apiStatus'] == 'fail') \" title=\"Edit Form Page\"\r\n            class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionEdit()\">\r\n            <span class=\"flaticon-edit\"></span>\r\n        </a>\r\n    </ng-container>\r\n    <ng-template #editBtn>\r\n        <a *ngIf=\"viewBtn.edit\" title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\"\r\n            (click)=\"onActionEdit()\">\r\n            <span class=\"flaticon-edit\"></span>\r\n        </a>\r\n    </ng-template>\r\n    <a *ngIf=\"viewBtn.delete\" title=\"Edit Form Page\" class=\"btn btn-danger btn-hover-danger btn-sm mx-1\"\r\n        (click)=\"onActionDelete()\">\r\n        <span class=\"flaticon-delete\"></span>\r\n        <!-- <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\r\n      class=\"svg-icon svg-icon-md svg-icon-white\">\r\n    </span> -->\r\n    </a>\r\n    <a *ngIf=\"viewBtn.download\" title=\"Downlaod Form Page\" class=\"btn btn-primary btn-hover-primary btn-sm mx-1\"\r\n        (click)=\"onActionDownload()\">\r\n        <span class=\"flaticon-download\"></span>\r\n\r\n    </a>\r\n    <a *ngIf=\"viewBtn.rerun\" title=\"Rerun\" class=\"btn btn-primary btn-hover-primary btn-sm mx-1\"\r\n        (click)=\"onActionRerun()\">\r\n        <span class=\"flaticon-refresh\"></span>\r\n\r\n    </a>\r\n</div>");

/***/ }),

/***/ 92321:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component.html ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"example-preview\" *ngIf=\"data.length > 0\">\r\n    <div class=\"example-container table-responsive angular-bootstrap-table\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table table-head-custom table-vertical-center\"\r\n            style=\"margin-bottom: 0px;\">\r\n\r\n            <ng-container *ngFor=\"let item of colum; let i = index\">\r\n                <ng-container matColumnDef=\"{{item.field}}\">\r\n                    <ng-container *ngIf=\"item.type == 'field';else actTemp\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{\"TABLE.\"+item.title | translate}} </th>\r\n                        <td mat-cell *matCellDef=\"let element\"\r\n                            [ngStyle]=\"{'text-align': item.amtFormat ? 'right': 'left'}\">\r\n                            <ng-container *ngIf=\"item.isImg\">\r\n                                <img [src]=\"Default_DOWNLOAD_URL+'/'+element[item.field]\" alt=\"\" srcset=\"\"\r\n                                    class=\"table-img\">\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.amtFormat\">\r\n                                {{(element[item.field] > 0 ? (element[item.field] | number: '1.2-2') : '0')}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isAttachment\">\r\n                                {{element[item.field]}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isTitle\">\r\n                                {{element[item.field] ? (element[item.field]+\"\" | titlecase) : \"\"}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isUpper\">\r\n                                {{ element[item.field] ? (element[item.field]+\"\" | uppercase) : \"\"}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isDate\">\r\n                                {{FormatedDate(element[item.field])}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isFromatDate\">\r\n                                {{element[item.field] | date : \"dd/MM/yyyy\" }}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isDateTime\">\r\n                                {{element[item.field] | date : \"dd/MM/yyyy - hh:mm\" }}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isActivityStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{activityStatusColor[element[item.field]]}}\">{{\r\n                                    activityStatus[element[item.field]] }}</span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isLeadStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{leadStatusColor[element[item.field]]}}\">{{\r\n                                    leadStatus[element[item.field]] }}</span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isRenewStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{renewStatusColor[element[item.field]]}}\">{{\r\n                                    renewStatus[element[item.field]] }}</span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isCustomerStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{customerStatusColor[element[item.field]]}}\">{{\r\n                                    customerStatus[element[item.field]] }}</span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isProdStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{prodStatusColor[element[item.field]]}}\">{{\r\n                                    prodStatus[element[item.field]] }}</span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isQuotationDay\">\r\n                                <ng-container *ngIf=\"element[item.field]\">{{element[item.field]}}\r\n                                    {{(element['quotationRule']+\"s\") | lowercase}} after creation dates</ng-container>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isPolicyDay\">\r\n                                <ng-container *ngIf=\"element[item.field]\">{{element[item.field]}}\r\n                                    {{(element['policyRule']+\"s\") | lowercase}} after creation dates</ng-container>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isAllowBackDate\">\r\n                                {{element[item.field] == \"30days\" ? \"30 days\" : (element[item.field] | titlecase) }}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isPaymentFrequencyType\">\r\n                                {{ getFreq(element[item.field]) }}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{statusColor[element[item.field]]}}\">\r\n                                    {{ element[item.field] == \"in_progress\" ? \"In Progress\" : (element[item.field] |\r\n                                    titlecase ) }}</span>\r\n                                <!-- {{ getFreq(element[item.field]) }} -->\r\n                            </ng-container>\r\n                            <ng-container\r\n                                *ngIf=\"!item.isDate && !item.isTitle && !item.amtFormat && !item.isFromatDate && !item.isDateTime && !item.isActivityStatus && !item.isQuotationDay && !item.isAllowBackDate && !item.isPaymentFrequencyType && !item.isUpper && !item.isStatus && !item.isProdStatus && !item.isImg && !item.isCustomerStatus  && !item.isLeadStatus && !item.isRenewStatus\">\r\n                                {{item.prefix ? item.prefix : \"\"}}{{element[item.field] == \"CRM\" ? \"Management Portal\" :\r\n                                element[item.field]}}\r\n                            </ng-container>\r\n                        </td>\r\n                        <ng-container *ngIf=\"calField.includes(item.field) && calTotal; else footer\">\r\n                            <td mat-footer-cell *matFooterCellDef style=\"padding: 0 10px;\">{{ (totalAmount[item.field]\r\n                                || '') | number: '1.2-2' }}</td>\r\n                        </ng-container>\r\n\r\n                        <ng-template #footer>\r\n                            <td mat-footer-cell *matFooterCellDef style=\"padding-left: 10px;\">\r\n                                <label *ngIf=\"i == 0\">Total</label>\r\n                            </td>\r\n                        </ng-template>\r\n\r\n                    </ng-container>\r\n                    <ng-template #actTemp>\r\n                        <th mat-header-cell *matHeaderCellDef> {{\"TABLE.\"+item.title | translate}} </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <app-action-button *ngIf=\"item.type == 'action'\" [data]=\"element\"\r\n                                (emitter)=\"actionBtn($event)\" [viewBtn]=\"item.btn\">\r\n                            </app-action-button>\r\n                            <span *ngIf=\"item.type == 'text'\" class=\"text-primary\"\r\n                                style=\"text-decoration: underline;white-space: nowrap;cursor: pointer;\"\r\n                                (click)=\"createPolicyBtn(element)\">{{item.field | titlecase}}</span>\r\n                        </td>\r\n                        <ng-container *ngIf=\"calTotal\">\r\n                            <td mat-footer-cell *matFooterCellDef></td>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n            <!-- Position Column -->\r\n            <!-- 'hidden-row': selectable && !row.config -->\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <ng-container *ngIf=\"selectable;else noSelectTable\">\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"\r\n                    [ngClass]=\"{hovered: row.hovered, highlighted: selection.isSelected(row)}\"\r\n                    (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n            </ng-container>\r\n            <ng-template #noSelectTable>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"calTotal\">\r\n                <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n            </ng-container>\r\n\r\n        </table>\r\n\r\n    </div>\r\n    <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" style-paginator showFirstLastButtons\r\n        aria-label=\"Select page of periodic elements\">\r\n    </mat-paginator>\r\n</div>\r\n<div class=\"text-center\" *ngIf=\"data.length == 0\">\r\n    <span style=\"color: gray;\">There is no data</span>\r\n</div>");

/***/ }),

/***/ 37651:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.component.html ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-template #first>\r\n  <i\r\n    class=\"ki ki-bold-double-arrow-back icon-xs\"\r\n    aria-hidden=\"true\"\r\n    i18n=\"@@ng.pagination.first\"\r\n  ></i>\r\n</ng-template>\r\n<ng-template #previous>\r\n  <i\r\n    class=\"ki ki-bold-arrow-back icon-xs\"\r\n    aria-hidden=\"true\"\r\n    i18n=\"@@ng.pagination.previous\"\r\n  ></i>\r\n</ng-template>\r\n<ng-template #next>\r\n  <i\r\n    class=\"ki ki-bold-arrow-next icon-xs\"\r\n    aria-hidden=\"true\"\r\n    i18n=\"@@ng.pagination.next\"\r\n  ></i>\r\n</ng-template>\r\n<ng-template #last>\r\n  <i\r\n    aria-hidden=\"true\"\r\n    i18n=\"@@ng.pagination.last\"\r\n    class=\"ki ki-bold-double-arrow-next icon-xs\"\r\n  ></i>\r\n</ng-template>\r\n<ng-template #ellipsis>...</ng-template>\r\n<ng-template #defaultNumber let-page let-currentPage=\"currentPage\">\r\n  {{ page }}\r\n  <span *ngIf=\"page === currentPage\" class=\"sr-only\">(current)</span>\r\n</ng-template>\r\n<a\r\n  *ngIf=\"boundaryLinks\"\r\n  [class.disabled]=\"previousDisabled()\"\r\n  aria-label=\"First\"\r\n  i18n-aria-label=\"@@ng.pagination.first-aria\"\r\n  class=\"btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1\"\r\n  href\r\n  (click)=\"selectPage(1); $event.preventDefault()\"\r\n  [attr.tabindex]=\"previousDisabled() ? '-1' : null\"\r\n  [attr.aria-disabled]=\"previousDisabled() ? 'true' : null\"\r\n>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"tplFirst?.templateRef || first\"\r\n    [ngTemplateOutletContext]=\"{\r\n      disabled: previousDisabled(),\r\n      currentPage: page\r\n    }\"\r\n  ></ng-template>\r\n</a>\r\n<a\r\n  *ngIf=\"directionLinks\"\r\n  [class.disabled]=\"previousDisabled()\"\r\n  aria-label=\"Previous\"\r\n  i18n-aria-label=\"@@ng.pagination.previous-aria\"\r\n  class=\"btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1\"\r\n  href\r\n  (click)=\"selectPage(page - 1); $event.preventDefault()\"\r\n  [attr.tabindex]=\"previousDisabled() ? '-1' : null\"\r\n  [attr.aria-disabled]=\"previousDisabled() ? 'true' : null\"\r\n>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"tplPrevious?.templateRef || previous\"\r\n    [ngTemplateOutletContext]=\"{ disabled: previousDisabled() }\"\r\n  ></ng-template>\r\n</a>\r\n<ng-container *ngFor=\"let pageNumber of pages\">\r\n  <a\r\n    *ngIf=\"isEllipsis(pageNumber)\"\r\n    class=\"btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1\"\r\n    tabindex=\"-1\"\r\n    aria-disabled=\"true\"\r\n    [class.active]=\"pageNumber === page\"\r\n    [class.disabled]=\"isEllipsis(pageNumber) || disabled\"\r\n    [attr.aria-current]=\"pageNumber === page ? 'page' : null\"\r\n  >\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"tplEllipsis?.templateRef || ellipsis\"\r\n      [ngTemplateOutletContext]=\"{ disabled: true, currentPage: page }\"\r\n    ></ng-template>\r\n  </a>\r\n  <a\r\n    *ngIf=\"!isEllipsis(pageNumber)\"\r\n    class=\"btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1\"\r\n    (click)=\"selectPage(pageNumber); $event.preventDefault()\"\r\n    [attr.tabindex]=\"disabled ? '-1' : null\"\r\n    [attr.aria-disabled]=\"disabled ? 'true' : null\"\r\n    [class.active]=\"pageNumber === page\"\r\n    [class.disabled]=\"isEllipsis(pageNumber) || disabled\"\r\n    [attr.aria-current]=\"pageNumber === page ? 'page' : null\"\r\n  >\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"tplNumber?.templateRef || defaultNumber\"\r\n      [ngTemplateOutletContext]=\"{\r\n        disabled: disabled,\r\n        $implicit: pageNumber,\r\n        currentPage: page\r\n      }\"\r\n    ></ng-template>\r\n  </a>\r\n</ng-container>\r\n<a\r\n  aria-label=\"Next\"\r\n  i18n-aria-label=\"@@ng.pagination.next-aria\"\r\n  class=\"btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1\"\r\n  (click)=\"selectPage(page + 1); $event.preventDefault()\"\r\n  [attr.tabindex]=\"nextDisabled() ? '-1' : null\"\r\n  [attr.aria-disabled]=\"nextDisabled() ? 'true' : null\"\r\n  *ngIf=\"directionLinks\"\r\n  [class.disabled]=\"nextDisabled()\"\r\n>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"tplNext?.templateRef || next\"\r\n    [ngTemplateOutletContext]=\"{\r\n      disabled: nextDisabled(),\r\n      currentPage: page\r\n    }\"\r\n  ></ng-template>\r\n</a>\r\n<a\r\n  aria-label=\"Last\"\r\n  i18n-aria-label=\"@@ng.pagination.last-aria\"\r\n  class=\"btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1\"\r\n  (click)=\"selectPage(pageCount); $event.preventDefault()\"\r\n  [attr.tabindex]=\"nextDisabled() ? '-1' : null\"\r\n  [attr.aria-disabled]=\"nextDisabled() ? 'true' : null\"\r\n  *ngIf=\"boundaryLinks\"\r\n  [class.disabled]=\"nextDisabled()\"\r\n>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"tplLast?.templateRef || last\"\r\n    [ngTemplateOutletContext]=\"{\r\n      disabled: nextDisabled(),\r\n      currentPage: page\r\n    }\"\r\n  ></ng-template>\r\n</a>\r\n");

/***/ }),

/***/ 29880:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- start: Paginator -->\r\n<div class=\"d-flex flex-wrap py-2 mr-3\">\r\n  <ng-pagination\r\n    [collectionSize]=\"paginator.total\"\r\n    [(page)]=\"paginator.page\"\r\n    [maxSize]=\"4\"\r\n    [rotate]=\"true\"\r\n    [boundaryLinks]=\"true\"\r\n    [pageSize]=\"paginator.pageSize\"\r\n    (pageChange)=\"pageChange($event)\"\r\n  ></ng-pagination>\r\n</div>\r\n<div class=\"d-flex align-items-center py-3\">\r\n  <!-- begin: loading -->\r\n  <div class=\"d-flex align-items-center\" *ngIf=\"isLoading\">\r\n    <div class=\"mr-2 text-muted\">Loading...</div>\r\n    <div class=\"spinner spinner-primary mr-10\"></div>\r\n  </div>\r\n  <!-- end: loading -->\r\n\r\n  <!-- begin: pageSize -->\r\n  <select\r\n    class=\"form-control form-control-sm form-control-sm font-weight-bold mr-4 border-0 bg-light false\"\r\n    style=\"width: 75px\"\r\n    [(ngModel)]=\"paginator.pageSize\"\r\n    (change)=\"sizeChange()\"\r\n  >\r\n    <option class=\"btn\" *ngFor=\"let ps of pageSizes\">\r\n      {{ ps }}\r\n    </option></select\r\n  ><span class=\"react-bootstrap-table-pagin ation-total\"\r\n    >&nbsp;Showing rows {{ paginator.page }} to&nbsp;{{\r\n      paginator.pageSize\r\n    }}\r\n    of&nbsp;{{ paginator.total }}</span\r\n  >\r\n  <!-- end: pageSize -->\r\n</div>\r\n<!-- end: Paginator -->\r\n");

/***/ }),

/***/ 76141:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"isActive\">\r\n  <ng-container *ngIf=\"activeDirection === 'asc'\">\r\n    <span [inlineSVG]=\"'./assets/media/svg/icons/Navigation/Up-2.svg'\"\r\n      [cacheSVG]=\"true\"\r\n      class=\"svg-icon svg-icon-sm svg-icon-primary ml-1\">\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"activeDirection === 'desc'\">\r\n    <span [inlineSVG]=\"'./assets/media/svg/icons/Navigation/Down-2.svg'\"\r\n      [cacheSVG]=\"true\"\r\n      class=\"svg-icon svg-icon-sm svg-icon-primary ml-1\">\r\n  </span>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!isActive\">\r\n  <span [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Sort1.svg'\"\r\n    [cacheSVG]=\"true\"\r\n    class=\"svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort\">\r\n  </span>\r\n</ng-container>\r\n");

/***/ }),

/***/ 26277:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/start-end-date/start-end-date.component.html ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div [ngClass]=\"colClass\" ng [formGroup]=\"formInput\" *ngIf=\"formInput\">\n    <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label\">{{\"FORM.start_date\" | translate}}</label>\n        <div class=\"col-sm-8\">\n            <div class=\"input-group \">\n                <input matInput class=\"form-control-sm date-input\" formControlName=\"startDate\" [matDatepicker]=\"startDate\" readonly>\n                <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n                <mat-datepicker #startDate disabled=\"false\"></mat-datepicker>\n                <span class=\"ng-clear-wrapper\" (click)=\"clearDate('startDate')\" title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div [ngClass]=\"colClass\" [formGroup]=\"formInput\" *ngIf=\"formInput\">\n    <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label\">{{\"FORM.end_date\" | translate}}</label>\n        <div class=\"col-sm-8\">\n            <div class=\"input-group \">\n                <input matInput class=\"form-control-sm date-input\" formControlName=\"endDate\" [matDatepicker]=\"endDate\" readonly>\n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                <mat-datepicker #endDate disabled=\"false\"></mat-datepicker>\n                <span class=\"ng-clear-wrapper\" (click)=\"clearDate('endDate')\" title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<kbz-loading></kbz-loading>\r\n<ion-app>\r\n    <ion-content>\r\n\r\n        <app-splash-screen></app-splash-screen>\r\n        <kbz-toast></kbz-toast>\r\n\r\n        <app-alert></app-alert>\r\n        <router-outlet></router-outlet>\r\n    </ion-content>\r\n</ion-app>");

/***/ }),

/***/ 40877:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/sort-config-modal/sort-config-modal.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      <span *ngIf=\"type == 'page' || type == 'prod'\">Reorder Page</span>\r\n      <span *ngIf=\"type == 'from'\">Feild Type Sorting Config</span>\r\n\r\n      <!-- <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please select in table list</span> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n      <div class=\"example-box\" *ngFor=\"let item of showData\" cdkDrag>\r\n        <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\r\n        <ng-container *ngIf=\"type == 'from'\">\r\n          {{item.label}} : {{item.name}} ( {{item.input}} )\r\n        </ng-container>\r\n        <ng-container *ngIf=\"type == 'prod'\">\r\n          {{item.name}} : Total Page ( {{item.totalPage || 0}} )\r\n        </ng-container>\r\n        <ng-container *ngIf=\"type == 'page'\">\r\n          {{item.pageTitle}} ({{(item.pageType == 'form' ? 'page' : item.pageType) | titlecase}}): Table Name ( {{item.tableName}} )\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 32139,
	"./af.js": 32139,
	"./ar": 22600,
	"./ar-dz": 81001,
	"./ar-dz.js": 81001,
	"./ar-kw": 99842,
	"./ar-kw.js": 99842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 15452,
	"./ar-ma.js": 15452,
	"./ar-sa": 11802,
	"./ar-sa.js": 11802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 22600,
	"./az": 96375,
	"./az.js": 96375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 85236,
	"./bg.js": 85236,
	"./bm": 81704,
	"./bm.js": 81704,
	"./bn": 94506,
	"./bn-bd": 34466,
	"./bn-bd.js": 34466,
	"./bn.js": 94506,
	"./bo": 47891,
	"./bo.js": 47891,
	"./br": 93348,
	"./br.js": 93348,
	"./bs": 84848,
	"./bs.js": 84848,
	"./ca": 35928,
	"./ca.js": 35928,
	"./cs": 31839,
	"./cs.js": 31839,
	"./cv": 59151,
	"./cv.js": 59151,
	"./cy": 35761,
	"./cy.js": 35761,
	"./da": 56686,
	"./da.js": 56686,
	"./de": 85177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 54407,
	"./de-ch.js": 54407,
	"./de.js": 85177,
	"./dv": 79729,
	"./dv.js": 79729,
	"./el": 60430,
	"./el.js": 60430,
	"./en-au": 28430,
	"./en-au.js": 28430,
	"./en-ca": 61139,
	"./en-ca.js": 61139,
	"./en-gb": 56747,
	"./en-gb.js": 56747,
	"./en-ie": 79466,
	"./en-ie.js": 79466,
	"./en-il": 52121,
	"./en-il.js": 52121,
	"./en-in": 41167,
	"./en-in.js": 41167,
	"./en-nz": 62030,
	"./en-nz.js": 62030,
	"./en-sg": 43646,
	"./en-sg.js": 43646,
	"./eo": 73126,
	"./eo.js": 73126,
	"./es": 38819,
	"./es-do": 69293,
	"./es-do.js": 69293,
	"./es-mx": 65304,
	"./es-mx.js": 65304,
	"./es-us": 66068,
	"./es-us.js": 66068,
	"./es.js": 38819,
	"./et": 23291,
	"./et.js": 23291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 70043,
	"./fa.js": 70043,
	"./fi": 16138,
	"./fi.js": 16138,
	"./fil": 11466,
	"./fil.js": 11466,
	"./fo": 76803,
	"./fo.js": 76803,
	"./fr": 65523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 69001,
	"./fr-ch.js": 69001,
	"./fr.js": 65523,
	"./fy": 21116,
	"./fy.js": 21116,
	"./ga": 66151,
	"./ga.js": 66151,
	"./gd": 93094,
	"./gd.js": 93094,
	"./gl": 11279,
	"./gl.js": 11279,
	"./gom-deva": 64458,
	"./gom-deva.js": 64458,
	"./gom-latn": 66320,
	"./gom-latn.js": 66320,
	"./gu": 78658,
	"./gu.js": 78658,
	"./he": 52153,
	"./he.js": 52153,
	"./hi": 98732,
	"./hi.js": 98732,
	"./hr": 84960,
	"./hr.js": 84960,
	"./hu": 76339,
	"./hu.js": 76339,
	"./hy-am": 11862,
	"./hy-am.js": 11862,
	"./id": 71068,
	"./id.js": 71068,
	"./is": 61260,
	"./is.js": 61260,
	"./it": 1007,
	"./it-ch": 78063,
	"./it-ch.js": 78063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 92390,
	"./jv.js": 92390,
	"./ka": 35958,
	"./ka.js": 35958,
	"./kk": 67216,
	"./kk.js": 67216,
	"./km": 61061,
	"./km.js": 61061,
	"./kn": 24060,
	"./kn.js": 24060,
	"./ko": 55216,
	"./ko.js": 55216,
	"./ku": 50894,
	"./ku.js": 50894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 38381,
	"./lo.js": 38381,
	"./lt": 56118,
	"./lt.js": 56118,
	"./lv": 67889,
	"./lv.js": 67889,
	"./me": 94274,
	"./me.js": 94274,
	"./mi": 39226,
	"./mi.js": 39226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 27938,
	"./ml.js": 27938,
	"./mn": 35456,
	"./mn.js": 35456,
	"./mr": 94393,
	"./mr.js": 94393,
	"./ms": 93647,
	"./ms-my": 33049,
	"./ms-my.js": 33049,
	"./ms.js": 93647,
	"./mt": 26097,
	"./mt.js": 26097,
	"./my": 66277,
	"./my.js": 66277,
	"./nb": 67245,
	"./nb.js": 67245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 44940,
	"./nl-be": 20478,
	"./nl-be.js": 20478,
	"./nl.js": 44940,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 83131,
	"./oc-lnc.js": 83131,
	"./pa-in": 51731,
	"./pa-in.js": 51731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 41178,
	"./pt-br": 56558,
	"./pt-br.js": 56558,
	"./pt.js": 41178,
	"./ro": 84138,
	"./ro.js": 84138,
	"./ru": 73380,
	"./ru.js": 73380,
	"./sd": 42889,
	"./sd.js": 42889,
	"./se": 22774,
	"./se.js": 22774,
	"./si": 53776,
	"./si.js": 53776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 93871,
	"./sl.js": 93871,
	"./sq": 44228,
	"./sq.js": 44228,
	"./sr": 40774,
	"./sr-cyrl": 61928,
	"./sr-cyrl.js": 61928,
	"./sr.js": 40774,
	"./ss": 83176,
	"./ss.js": 83176,
	"./sv": 52422,
	"./sv.js": 52422,
	"./sw": 52530,
	"./sw.js": 52530,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 18025,
	"./te.js": 18025,
	"./tet": 53934,
	"./tet.js": 53934,
	"./tg": 99958,
	"./tg.js": 99958,
	"./th": 84251,
	"./th.js": 84251,
	"./tk": 65494,
	"./tk.js": 65494,
	"./tl-ph": 38568,
	"./tl-ph.js": 38568,
	"./tlh": 73158,
	"./tlh.js": 73158,
	"./tr": 49574,
	"./tr.js": 49574,
	"./tzl": 64311,
	"./tzl.js": 64311,
	"./tzm": 99990,
	"./tzm-latn": 42380,
	"./tzm-latn.js": 42380,
	"./tzm.js": 99990,
	"./ug-cn": 52356,
	"./ug-cn.js": 52356,
	"./uk": 54934,
	"./uk.js": 54934,
	"./ur": 84515,
	"./ur.js": 84515,
	"./uz": 40058,
	"./uz-latn": 41875,
	"./uz-latn.js": 41875,
	"./uz.js": 40058,
	"./vi": 13325,
	"./vi.js": 13325,
	"./x-pseudo": 39208,
	"./x-pseudo.js": 39208,
	"./yo": 18742,
	"./yo.js": 18742,
	"./zh-cn": 42378,
	"./zh-cn.js": 42378,
	"./zh-hk": 4569,
	"./zh-hk.js": 4569,
	"./zh-mo": 74671,
	"./zh-mo.js": 74671,
	"./zh-tw": 20259,
	"./zh-tw.js": 20259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 87083:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/loading-toast/toast/toast.component.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Lm5nYi10b2FzdHMgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB0b3A6IDA7CiAgICAgICAgcmlnaHQ6IDA7CiAgICAgICAgbWFyZ2luOiAuNWVtOwogICAgICAgIHotaW5kZXg6IDEyMDA7CiAgICAgICAgbWluLXdpZHRoOiA0MDBweDsKICAgIH0KICAgIC5jdXN0b2FzdHsKICAgICAgICBmb250LXNpemU6MTNweDsKICAgICAgICBwYWRkaW5nLXRvcDoxMHB4OwogICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7CiAgICB9CiAgICA%3D!./src/app/modules/loading-toast/toast/toast.component.ts ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".ngb-toasts {\n        position: fixed;\n        top: 0;\n        right: 0;\n        margin: .5em;\n        z-index: 1200;\n        min-width: 400px;\n    }\n    .custoast{\n        font-size:13px;\n        padding-top:10px;\n        padding-bottom:10px;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLGVBQWU7UUFDZixNQUFNO1FBQ04sUUFBUTtRQUNSLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QiIsImZpbGUiOiJ0b2FzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIubmdiLXRvYXN0cyB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xuICAgICAgICB6LWluZGV4OiAxMjAwO1xuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgICAuY3VzdG9hc3R7XG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuICAgIH1cbiAgICAiXX0= */";

/***/ }),

/***/ 70706:
/*!**************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.scss ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#splash-screen {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #f2f3f8;\n}\n\n#splash-screen img {\n  margin-left: calc(100vw - 100%);\n  margin-bottom: 30px;\n}\n\n#splash-screen.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.splash-spinner {\n  animation: rotate 2s linear infinite;\n  margin-left: calc(100vw - 100%);\n  width: 50px;\n  height: 50px;\n}\n\n.splash-spinner .path {\n  stroke: #5d78ff;\n  stroke-linecap: round;\n  animation: dash 1.5s ease-in-out infinite;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQUFGO0VBR0E7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3BsYXNoLXNjcmVlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjg7XHJcbn1cclxuXHJcbiNzcGxhc2gtc2NyZWVuIGltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jc3BsYXNoLXNjcmVlbi5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc3BsYXNoLXNwaW5uZXIge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNwbGFzaC1zcGlubmVyIC5wYXRoIHtcclxuICBzdHJva2U6ICM1ZDc4ZmY7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoIHtcclxuICAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 78560:
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/action-button/action-button.component.scss ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 57443:
/*!***************************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component.scss ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".mat-paginator-container {\n  justify-content: space-between;\n}\n\n.label.label-custom-round {\n  line-height: 20px;\n  white-space: nowrap;\n  border-radius: 10px;\n  width: 80px;\n  color: white;\n}\n\n.table-img {\n  max-width: 50px;\n  max-height: 50px;\n}\n\n.label-default {\n  color: black !important;\n}\n\n.act-btn-box {\n  padding: 0px 10px;\n  background-color: #005f99;\n  border-color: #005f99;\n  color: #fff !important;\n  text-decoration: none;\n  padding: 0.35rem 0.75rem;\n  font-size: 0.925rem;\n  line-height: 1.35;\n  border-radius: 0.42rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLXRhYmxlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUdBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQURKIiwiZmlsZSI6Im1hdGVyaWFsLXRhYmxlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxufVxuXG4ubGFiZWwubGFiZWwtY3VzdG9tLXJvdW5kIHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgLy8gZm9udC1zaXplOiAwLjlyZW07XG4gICAgLy8gZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFibGUtaW1nIHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbn1cblxuLmxhYmVsLWRlZmF1bHQge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uYWN0LWJ0bi1ib3h7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY5OTtcbiAgICBib3JkZXItY29sb3I6ICMwMDVmOTk7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45MjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gICAgYm9yZGVyLXJhZGl1czogMC40MnJlbTtcbn0iXX0= */";

/***/ }),

/***/ 45777:
/*!*******************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 72087:
/*!*******************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LWljb24uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 94950:
/*!*****************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/start-end-date/start-end-date.component.scss ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n  width: 100%;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n  top: -2px;\n}\n.remove-p {\n  margin-bottom: 0px;\n}\n.col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.form-group.row {\n  align-items: center;\n}\n.ng-clear-wrapper .ng-clear {\n  cursor: pointer;\n  position: absolute;\n  right: 3rem;\n  top: 0.3rem;\n  font-size: 1.2rem;\n  color: #999;\n}\n.ng-clear-wrapper .ng-clear:hover {\n  color: #D0021B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LWVuZC1kYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBUjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUE7RUFDSSxtQkFBQTtBQURKO0FBSUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUE7RUFDSSxjQUFBO0FBREoiLCJmaWxlIjoic3RhcnQtZW5kLWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xuICAgIC5mb3JtLWNvbnRyb2wtc20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNkVGO1xuICAgICAgICBwYWRkaW5nOiAwcHggMC43NXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHRvcDogLTJweDtcbiAgICB9XG59XG5cbi5yZW1vdmUtcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY29sLWZvcm0tbGFiZWwge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tZ3JvdXAucm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmctY2xlYXItd3JhcHBlciAubmctY2xlYXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDNyZW07XG4gICAgdG9wOiAwLjNyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6ICM5OTk7XG59XG5cbi5uZy1jbGVhci13cmFwcGVyIC5uZy1jbGVhcjpob3ZlciB7XG4gICAgY29sb3I6ICNEMDAyMUI7XG59Il19 */";

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  height: 100%;\n  margin: 0;\n}\n\n.show-false {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxTQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxhQUFBO0FBRUQiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuLnNob3ctZmFsc2V7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 75575:
/*!**********************************************************************!*\
  !*** ./src/app/modules/loading-toast/loading/loading.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#loading-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  z-index: 10000;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  display: block !important;\n}\n\n#loading-text {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #fff;\n  width: 100px;\n  height: 30px;\n  margin: -7px 0 0 -45px;\n  text-align: center;\n  font-family: \"PT Sans Narrow\", sans-serif;\n  font-size: 20px;\n}\n\n#loading-content {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 170px;\n  height: 170px;\n  margin: -85px 0 0 -85px;\n  border: 3px solid #F00;\n}\n\n#loading-content:after {\n  content: \"\";\n  position: absolute;\n  border: 3px solid #0F0;\n  left: 15px;\n  right: 15px;\n  top: 15px;\n  bottom: 15px;\n}\n\n#loading-content:before {\n  content: \"\";\n  position: absolute;\n  border: 3px solid #00F;\n  left: 5px;\n  right: 5px;\n  top: 5px;\n  bottom: 5px;\n}\n\n#loading-content {\n  border: 3px solid transparent;\n  border-top-color: #4D658D;\n  border-bottom-color: #4D658D;\n  border-radius: 50%;\n  animation: loader 2s linear infinite;\n}\n\n#loading-content:before {\n  border: 3px solid transparent;\n  border-top-color: #D4CC6A;\n  border-bottom-color: #D4CC6A;\n  border-radius: 50%;\n  animation: loader 3s linear infinite;\n}\n\n#loading-content:after {\n  border: 3px solid transparent;\n  border-top-color: #84417C;\n  border-bottom-color: #84417C;\n  border-radius: 50%;\n  animation: loader 1.5s linear infinite;\n  -moz-animation: loader 2s linear infinite;\n  -o-animation: loader 2s linear infinite;\n}\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#content-wrapper {\n  color: #FFF;\n  position: fixed;\n  left: 0;\n  top: 20px;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFJQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFJQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQ0FBQTtFQUNFLHlDQUFBO0VBQ0YsdUNBQUE7QUFERjs7QUFpQkE7RUFDRTtJQUdFLHVCQUFBO0VBRkY7RUFJQTtJQUdFLHlCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuI2xvYWRpbmctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwMCwwMCwwMCwwLjIpO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4jbG9hZGluZy10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IC03cHggMCAwIC00NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUFQgU2FucyBOYXJyb3cnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNsb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIG1hcmdpbjogLTg1cHggMCAwIC04NXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjRjAwO1xufVxuXG4jbG9hZGluZy1jb250ZW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMEYwO1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xuICBib3R0b206IDE1cHg7XG59XG5cbiNsb2FkaW5nLWNvbnRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDBGO1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuICBib3R0b206IDVweDtcbn1cblxuI2xvYWRpbmctY29udGVudCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjNEQ2NThEO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNEQ2NThEO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbiNsb2FkaW5nLWNvbnRlbnQ6YmVmb3JlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICNENENDNkE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNENENDNkE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkZXIgM3MgbGluZWFyIGluZmluaXRlO1xufVxuXG4jbG9hZGluZy1jb250ZW50OmFmdGVyIHtcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4NDQxN0M7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM4NDQxN0M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlcnMge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuI2NvbnRlbnQtd3JhcHBlciB7XG4gIGNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 66117:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-component/sort-config-modal/sort-config-modal.component.scss ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".active {\n  background-color: #3699FF !important;\n  color: white;\n}\n\n.example-list {\n  width: 100%;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnQtY29uZmlnLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFFRjs7QUFHQTtFQUNFLHNEQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxzREFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7QUFBRiIsImZpbGUiOiJzb3J0LWNvbmZpZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjk5RkYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmV4YW1wbGUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1jdXN0b20tcGxhY2Vob2xkZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIl19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map