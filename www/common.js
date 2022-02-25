"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 93014:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 95159:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3f6412b6.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowDown),
/* harmony export */   "b": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "c": () => (/* binding */ caretBackSharp),
/* harmony export */   "d": () => (/* binding */ chevronBack),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ chevronForward),
/* harmony export */   "g": () => (/* binding */ chevronDown),
/* harmony export */   "h": () => (/* binding */ caretUpSharp),
/* harmony export */   "i": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 57782:
/*!**********************************************************************!*\
  !*** ./src/app/pages/_column-chart/column-chart.component.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnChartModule": () => (/* binding */ ColumnChartModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _column_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-chart.component */ 71681);

//import { BrowserModule } from "@angular/platform-browser";




let ColumnChartModule = class ColumnChartModule {
};
ColumnChartModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_column_chart_component__WEBPACK_IMPORTED_MODULE_0__.ColumnChartComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__.NgApexchartsModule],
        exports: [
            _column_chart_component__WEBPACK_IMPORTED_MODULE_0__.ColumnChartComponent
        ],
        providers: [],
        bootstrap: [_column_chart_component__WEBPACK_IMPORTED_MODULE_0__.ColumnChartComponent]
    })
], ColumnChartModule);



/***/ }),

/***/ 71681:
/*!***************************************************************!*\
  !*** ./src/app/pages/_column-chart/column-chart.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnChartComponent": () => (/* binding */ ColumnChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_column_chart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./column-chart.component.html */ 45093);
/* harmony import */ var _column_chart_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-chart.component.scss */ 57643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let ColumnChartComponent = class ColumnChartComponent {
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Inflation",
                    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
                }
            ],
            chart: {
                height: 350,
                type: "bar"
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: "top" // top, center, bottom
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: "12px",
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                position: "top",
                labels: {
                    offsetY: -18
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#D8E3F0",
                            colorTo: "#BED1E6",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [50, 0, 100, 100]
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            },
            title: {
                text: "Monthly Inflation in Argentina, 2002",
                floating: true,
                offsetY: 320,
                align: "center",
                style: {
                    color: "#444"
                }
            }
        };
    }
};
ColumnChartComponent.ctorParameters = () => [];
ColumnChartComponent.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["chart",] }]
};
ColumnChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-column-chart",
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_column_chart_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_column_chart_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ColumnChartComponent);



/***/ }),

/***/ 58695:
/*!*******************************************************!*\
  !*** ./src/app/pages/fna-bram/product/product.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutBramDTO": () => (/* binding */ AboutBramDTO),
/* harmony export */   "Tabel2": () => (/* binding */ Tabel2),
/* harmony export */   "FNABRAMDiscount": () => (/* binding */ FNABRAMDiscount)
/* harmony export */ });
class AboutBramDTO {
}
class Tabel2 {
}
class FNABRAMDiscount {
}
FNABRAMDiscount.GRAND_DISCOUNT = 0;
FNABRAMDiscount.HIGH_DISCOUNT = 0;


/***/ }),

/***/ 95849:
/*!***********************************************************!*\
  !*** ./src/app/pages/fna-list/fna-list-manage.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANListService": () => (/* binding */ FANListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);





const API_ADDON_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/fna`;
let FANListService = class FANListService extends src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient.get(API_ADDON_URL);
    }
    getFNAAllByLeaId(leadId) {
        return this.httpClient.get(API_ADDON_URL + '/' + leadId);
    }
};
FANListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FANListService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FANListService);



/***/ }),

/***/ 57311:
/*!******************************************************!*\
  !*** ./src/app/pages/lead-list/lead-list.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadListService": () => (/* binding */ LeadListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 18260);





const API_LEAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/lead`;
let LeadListService = class LeadListService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getLeadList(search = {}) {
        let url = API_LEAD_URL + "?";
        if (search.campaignName) {
            url = url + "campaignName=" + search.campaignName + "&";
        }
        if (search.existingCustomerId) {
            url = url + "existingCustomerId=" + search.existingCustomerId + "&";
        }
        if (search.leadId) {
            url = url + "leadId=" + search.leadId + "&";
        }
        if (search.contactName) {
            url = url + "contactName=" + search.contactName + "&";
        }
        if (search.openDateStr) {
            url = url + "openDateStr=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.openDateStr).format("YYYY-MM-DD") + "&";
        }
        if (search.productId) {
            url = url + "productId=" + search.productId + "&";
        }
        if (search.sourceCode) {
            url = url + "sourceCode=" + search.sourceCode + "&";
        }
        if (search.statusCode) {
            url = url + "statusCode=" + search.statusCode + "&";
        }
        console.log(url);
        return this.httpClient.get(url);
    }
};
LeadListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
LeadListService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LeadListService);



/***/ }),

/***/ 46045:
/*!************************************************!*\
  !*** ./src/app/pages/policy/policy.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyService": () => (/* binding */ PolicyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





const API_QUOTATION_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/policy`;
let PolicyService = class PolicyService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_QUOTATION_URL);
        this.httpClient = httpClient;
    }
    updateAttachment(resId, attId) {
        return this.httpClient.put(API_QUOTATION_URL + "/attachment", { attachmentId: attId + "", policyNo: resId });
    }
};
PolicyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
PolicyService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PolicyService);



/***/ }),

/***/ 85068:
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageComponent": () => (/* binding */ ProductsPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let ProductsPageComponent = class ProductsPageComponent {
    ngOnInit() {
    }
};
ProductsPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-products-page',
        template: `<router-outlet></router-outlet>`,
    })
], ProductsPageComponent);



/***/ }),

/***/ 47827:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ 55099);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 63387);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details/product-details.component */ 13776);
/* harmony import */ var _products_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-page.component */ 85068);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _services_coverage_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/coverage-data.service */ 50053);
/* harmony import */ var _services_add_on_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/add-on-data.service */ 94538);
/* harmony import */ var _services_products_UI_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/products-UI.service */ 74778);
/* harmony import */ var _wizards_wizards_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../wizards/wizards.module */ 85275);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 64744);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 68859);
/* harmony import */ var _services_validity_period_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/validity-period.service */ 76250);
/* harmony import */ var _products_share_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products-share.module */ 6761);























let ProductsModule = class ProductsModule {
};
ProductsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_products_page_component__WEBPACK_IMPORTED_MODULE_4__.ProductsPageComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTypeaheadModule,
            _wizards_wizards_module__WEBPACK_IMPORTED_MODULE_9__.WizardsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule,
            _products_share_module__WEBPACK_IMPORTED_MODULE_11__.ProductShareModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forChild([
                {
                    path: '',
                    component: _products_page_component__WEBPACK_IMPORTED_MODULE_4__.ProductsPageComponent,
                    children: [
                        {
                            path: 'list',
                            component: _products_component__WEBPACK_IMPORTED_MODULE_2__.ProductsComponent,
                        },
                        {
                            path: 'detail',
                            component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailsComponent,
                        },
                    ]
                }
            ]),
        ],
        providers: [_services_coverage_data_service__WEBPACK_IMPORTED_MODULE_6__.CoverageDataService, _services_add_on_data_service__WEBPACK_IMPORTED_MODULE_7__.AddOnDataService, _services_products_UI_service__WEBPACK_IMPORTED_MODULE_8__.ProductUIService, _services_products_UI_service__WEBPACK_IMPORTED_MODULE_8__.ProductUIDeleteService, _services_validity_period_service__WEBPACK_IMPORTED_MODULE_10__.ValidityPeriodService]
    })
], ProductsModule);



/***/ }),

/***/ 80842:
/*!*******************************************************!*\
  !*** ./src/app/pages/quotations/quotation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationService": () => (/* binding */ QuotationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





const API_QUOTATION_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/quotation`;
let QuotationService = class QuotationService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_QUOTATION_URL);
        this.httpClient = httpClient;
    }
};
QuotationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
QuotationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], QuotationService);



/***/ }),

/***/ 61596:
/*!**************************************************************************!*\
  !*** ./src/app/pages/senior-lp-dashboard/senior-lp-dashboard.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





const API_ADDON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/dashboard/agent`;
const API_Lead_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/dashboard/lead-activity/count`;
const API_Recent_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/dashboard/resent-operation`;
const API_Campaign_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/dashboard/today-campaign`;
let DashboardService = class DashboardService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getList(search = {}) {
        let url = API_ADDON_URL + "?";
        if (search.empId) {
            url = url + "empId=" + search.empId + "&";
        }
        return this.httpClient.get(url);
    }
    getLeadList(search = {}) {
        let url = API_Lead_URL + "?";
        if (search.empId) {
            url = url + "empId=" + search.empId + "&";
        }
        return this.httpClient.get(url);
    }
    getRecentList(search = {}) {
        let url = API_Recent_URL + "?";
        if (search.empId) {
            url = url + "empId=" + search.empId + "&";
        }
        return this.httpClient.get(url);
    }
    getCampaignList(search = {}) {
        let url = API_Campaign_URL + "?";
        if (search.empId) {
            url = url + "empId=" + search.empId + "&";
        }
        return this.httpClient.get(url);
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
DashboardService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ 45093:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_column-chart/column-chart.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"chart\">\r\n    <apx-chart\r\n      [series]=\"chartOptions.series\"\r\n      [chart]=\"chartOptions.chart\"\r\n      [dataLabels]=\"chartOptions.dataLabels\"\r\n      [plotOptions]=\"chartOptions.plotOptions\"\r\n      [yaxis]=\"chartOptions.yaxis\"\r\n      [xaxis]=\"chartOptions.xaxis\"\r\n      [fill]=\"chartOptions.fill\"\r\n      [title]=\"chartOptions.title\"\r\n    ></apx-chart>\r\n  </div>\r\n  ");

/***/ }),

/***/ 57643:
/*!*****************************************************************!*\
  !*** ./src/app/pages/_column-chart/column-chart.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "#chart {\n  max-width: 650px;\n  margin: 35px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJjb2x1bW4tY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhcnQge1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgIG1hcmdpbjogMzVweCBhdXRvO1xyXG4gIH1cclxuICAiXX0= */";

/***/ })

}]);
//# sourceMappingURL=common.js.map