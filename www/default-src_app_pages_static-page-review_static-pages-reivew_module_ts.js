"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_static-page-review_static-pages-reivew_module_ts"],{

/***/ 17555:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/static-page-review/addon-view/addon-view.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddonViewComponent": () => (/* binding */ AddonViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addon_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./addon-view.component.html */ 85431);
/* harmony import */ var _addon_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addon-view.component.scss */ 24153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 43329);






const AddonViewID = "addon_1634010770155";
let AddonViewComponent = class AddonViewComponent {
    constructor(addonQuo, globalFun) {
        this.addonQuo = addonQuo;
        this.globalFun = globalFun;
        this.addOnData = {};
        this.addon = {
            sumInsured: false,
            unit: false,
            premium: false,
        };
        this.fireOptionData = {
            "FRAD008": [
                { "code": "T-001", "value": "Building" },
                { "code": "T-002", "value": "Furniture" },
                { "code": "T-003", "value": "Machine" },
                { "code": "T-004", "value": "Goods/Stocks" },
                { "code": "T-005", "value": "Water Damage for Goods/Stocks" },
            ],
            "FRAD010": [
                { "code": "T-001", "value": "First Class Building" },
                { "code": "T-002", "value": "Second Class Building" },
                { "code": "T-003", "value": "Third Class Building" },
                { "code": "T-004", "value": "Fourth Class Building" },
            ]
        };
    }
    ngOnInit() {
        if (this.product.addOns && this.product.addOns.length > 0) {
            this.addon = {
                sumInsured: this.product.addOns[0].sumInsured,
                unit: this.product.addOns[0].unit,
                premium: this.product.addOns[0].premium,
            };
            for (const item of this.product.addOns) {
                // let response: any = {};
                try {
                    if (this.resourcesId) {
                        this.addonQuo.getOne(item.id, this.resourcesId).toPromise().then((response) => {
                            if (response) {
                                this.addOnData[item.id] = {
                                    sum: response ? response.sumInsured || 0 : 0,
                                    unit: response ? response.unit || 0 : 0,
                                    premium: response ? response.premium || 0 : 0,
                                    option: response ? response.option || 'T-001' : 'T-001'
                                };
                            }
                        });
                    }
                }
                catch (error) {
                }
            }
        }
    }
    getDetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.product.addOns && this.product.addOns.length > 0) {
                this.addon = {
                    sumInsured: this.product.addOns[0].sumInsured,
                    unit: this.product.addOns[0].unit,
                    premium: this.product.addOns[0].premium,
                };
                for (const item of this.product.addOns) {
                    let response = {};
                    try {
                        if (this.resourcesId) {
                            response = yield this.addonQuo.getOne(item.id, this.resourcesId).toPromise();
                        }
                    }
                    catch (error) {
                    }
                    this.addOnData[item.id] = {
                        sum: response ? response.sumInsured || 0 : 0,
                        unit: response ? response.unit || 0 : 0,
                        premium: response ? response.premium || 0 : 0
                    };
                }
            }
        });
    }
};
AddonViewComponent.ctorParameters = () => [
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_3__.AddOnQuoService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService }
];
AddonViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
AddonViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-addon-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addon_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_addon_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddonViewComponent);



/***/ }),

/***/ 39425:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/calculated-building/calculated-building.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatedBuildingComponent": () => (/* binding */ CalculatedBuildingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calculated_building_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calculated-building.component.html */ 4333);
/* harmony import */ var _calculated_building_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculated-building.component.scss */ 64293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _static_pages_calculated_building_services_calculated_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-pages/calculated-building/services/calculated-building-service */ 65332);





let CalculatedBuildingComponent = class CalculatedBuildingComponent {
    constructor(FireContentService, FirePLantService, FireStockService, cdf) {
        this.FireContentService = FireContentService;
        this.FirePLantService = FirePLantService;
        this.FireStockService = FireStockService;
        this.cdf = cdf;
        this.riskId = 1;
        this.contents = true;
        this.plant = true;
        this.stock = true;
        this.contentData = [];
        this.plantData = [];
        this.stockData = [];
        this.totalContent = 0;
        this.totalPlant = 0;
        this.totalStock = 0;
    }
    ngOnInit() {
        this.getFireContent();
        this.getFirePlant();
        this.getFireStock();
    }
    onActionView(data, type) {
        if (type == "content") {
            this.deleteFireContent(data.id);
        }
        if (type == "plant") {
            this.deleteFirePlant(data.id);
        }
        if (type == "stock") {
            this.deleteFireStock(data.id);
        }
    }
    getFireContent() {
        this.FireContentService.findAll().toPromise().then((res) => {
            console.log("getFireContent-RESSS", res);
            if (res) {
                this.contentData = res;
                if (this.contentData.length > 0) {
                    for (let data of this.contentData) {
                        this.totalContent += data.totalValue;
                    }
                }
                this.cdf.detectChanges();
            }
        });
    }
    getFirePlant() {
        this.FirePLantService.findAll().toPromise().then((res) => {
            if (res) {
                console.log("getFirePlant-RESSS", res);
                this.plantData = res;
                if (this.plantData.length > 0) {
                    for (let data of this.plantData) {
                        this.totalPlant += data.totalValue;
                    }
                }
                this.cdf.detectChanges();
            }
        });
    }
    getFireStock() {
        this.FireStockService.findAll().toPromise().then((res) => {
            if (res) {
                console.log("getFireStock-RESSS", res);
                this.stockData = res;
                if (this.stockData.length > 0) {
                    for (let data of this.stockData) {
                        this.totalStock += data.stockValue;
                    }
                }
                this.cdf.detectChanges();
            }
        });
    }
    deleteFireContent(id) {
        this.FireContentService.delete(id).toPromise().then((res) => {
            if (res) {
                this.getFireContent();
            }
        });
    }
    deleteFirePlant(id) {
        this.FirePLantService.delete(id).toPromise().then((res) => {
            if (res) {
                this.getFirePlant();
            }
        });
    }
    deleteFireStock(id) {
        this.FireStockService.delete(id).toPromise().then((res) => {
            if (res) {
                this.getFireStock();
            }
        });
    }
};
CalculatedBuildingComponent.ctorParameters = () => [
    { type: _static_pages_calculated_building_services_calculated_building_service__WEBPACK_IMPORTED_MODULE_2__.FireContentService },
    { type: _static_pages_calculated_building_services_calculated_building_service__WEBPACK_IMPORTED_MODULE_2__.FirePLantService },
    { type: _static_pages_calculated_building_services_calculated_building_service__WEBPACK_IMPORTED_MODULE_2__.FireStockService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
CalculatedBuildingComponent.propDecorators = {
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CalculatedBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calculated-building',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calculated_building_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_calculated_building_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalculatedBuildingComponent);



/***/ }),

/***/ 49836:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/static-page-review/coverage-view/coverage-view.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverageViewComponent": () => (/* binding */ CoverageViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coverage_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coverage-view.component.html */ 64923);
/* harmony import */ var _coverage_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-view.component.scss */ 32093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 45570);






const CoverageViewID = "coverage_1634010995936";
let CoverageViewComponent = class CoverageViewComponent {
    constructor(coverageQuo, globalFun) {
        this.coverageQuo = coverageQuo;
        this.globalFun = globalFun;
        this.coverage = {
            sumInsured: false,
            unit: false,
            premium: false,
        };
        this.coverageData = {};
    }
    ngOnInit() {
        if (this.product.coverages && this.product.coverages.length > 0) {
            this.coverage = {
                sumInsured: this.product.coverages[0].sumInsured,
                unit: this.product.coverages[0].unit,
                premium: this.product.coverages[0].premium,
            };
            for (const item of this.product.coverages) {
                let response = {};
                if (this.resourcesId) {
                    this.coverageQuo.getOne(item.id, this.resourcesId).toPromise().then((response) => {
                        if (response) {
                            this.coverageData[item.id] = {
                                sum: response ? response.sumInsured || 0 : 0,
                                unit: response ? response.unit || 0 : 0,
                                premium: response ? response.premium || 0 : 0
                            };
                        }
                    });
                }
            }
        }
    }
    getDetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.product.coverages && this.product.coverages.length > 0) {
                this.coverage = {
                    sumInsured: this.product.coverages[0].sumInsured,
                    unit: this.product.coverages[0].unit,
                    premium: this.product.coverages[0].premium,
                };
                for (const item of this.product.coverages) {
                    let response = {};
                    try {
                        if (this.resourcesId) {
                            response = yield this.coverageQuo.getOne(item.id, this.resourcesId).toPromise().catch(e => e);
                        }
                    }
                    catch (error) {
                    }
                    this.coverageData[item.id] = {
                        sum: response ? response.sumInsured || 0 : 0,
                        unit: response ? response.unit || 0 : 0,
                        premium: response ? response.premium || 0 : 0
                    };
                }
            }
        });
    }
};
CoverageViewComponent.ctorParameters = () => [
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_3__.CoverageQuoService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService }
];
CoverageViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CoverageViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-coverage-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coverage_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coverage_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoverageViewComponent);



/***/ }),

/***/ 42964:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/education-life-griph-view/education-life-griph-view.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationLifeGripViewComponent": () => (/* binding */ EducationLifeGripViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_griph_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./education-life-griph-view.component.html */ 38627);
/* harmony import */ var _education_life_griph_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-life-griph-view.component.scss */ 54955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _static_pages_education_life_models_services_education_life_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static-pages/education-life/models&services/education-life.service */ 65937);







let EducationLifeGripViewComponent = class EducationLifeGripViewComponent {
    constructor(alertService, globalFun, eduPayment, cdf) {
        this.alertService = alertService;
        this.globalFun = globalFun;
        this.eduPayment = eduPayment;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.showDatas = [];
        this.show = false;
        this.chartOptions = {
            series: [
                {
                    name: "Premium Amount",
                    data: [],
                    color: "#005f99"
                }
            ],
            chart: {
                height: 450,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            title: {
                text: "Basic Benefit Illustration",
                offsetX: 0,
                offsetY: 10,
                floating: false,
                style: {
                    fontSize: "1.1rem",
                    fontFamily: "Roboto"
                }
            },
            xaxis: {
                type: 'category',
                categories: ["0", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years", "13 years", "14 years"],
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 5000000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -10,
                offsetY: -5,
                enabledOnSeries: [0]
            },
            markers: {
                size: [5, 0, 0],
            }
        };
    }
    ngOnInit() {
        // this.createListData()
        let dataArr = this.parentData.map((x) => {
            if (x.premiumPaid)
                return x.premiumPaid > 0 ? x.premiumPaid : null;
            else
                return null;
        });
        dataArr.unshift(null);
        this.chartOptions.series[0].data = dataArr;
        if (this.parentData.length > 0) {
            if (this.parentData[0].benefitPlan == '002') {
                this.chartOptions.title.text = "Double Benefit Illustration";
                this.chartOptions.yaxis.max = 5000000 * 2;
                this.chartOptions.series[1] = {
                    data: [],
                    name: "Goal"
                };
                this.chartOptions.series[2] = {
                    data: [],
                    name: "2X Goal"
                };
                this.chartOptions.series[1].data = [5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000];
                this.chartOptions.series[2].data = [10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000];
            }
        }
    }
    createListData() {
        this.eduPayment.getMany(this.resourcesId).toPromise().then((res) => {
            // console.log(res);
            if (res) {
                let dataArr = res.map((x) => {
                    if (x.premiumPaid)
                        return x.premiumPaid;
                });
                dataArr.unshift(0);
                // console.log(dataArr, res);
                if (res.length > 0) {
                    if (res[0].benefitPlan == '002') {
                        this.chartOptions.title.text = "Double Benefit Illustration";
                        this.chartOptions.yaxis.max = 5000000 * 2;
                    }
                }
                this.chartOptions.series[0].data = dataArr.filter(x => x >= 0);
                this.show = true;
                this.cdf.detectChanges();
            }
        });
    }
};
EducationLifeGripViewComponent.ctorParameters = () => [
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _static_pages_education_life_models_services_education_life_service__WEBPACK_IMPORTED_MODULE_4__.EduPaymentService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
EducationLifeGripViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["chart",] }],
    parentData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
EducationLifeGripViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-education-life-grip-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_griph_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_education_life_griph_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EducationLifeGripViewComponent);



/***/ }),

/***/ 71526:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/education-life-view/education-life-view.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationLifeViewComponent": () => (/* binding */ EducationLifeViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./education-life-view.component.html */ 50218);
/* harmony import */ var _education_life_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-life-view.component.scss */ 80453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_pages_education_life_models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static-pages/education-life/models&services/education-life-rate.service */ 27673);
/* harmony import */ var _static_pages_education_life_models_services_education_life_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static-pages/education-life/models&services/education-life.service */ 65937);









let EducationLifeViewComponent = class EducationLifeViewComponent {
    constructor(globalFun, alertService, prodService, eduPreService, eduSurrService, eduPayment, cdf) {
        this.globalFun = globalFun;
        this.alertService = alertService;
        this.prodService = prodService;
        this.eduPreService = eduPreService;
        this.eduSurrService = eduSurrService;
        this.eduPayment = eduPayment;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.premimuRate = {
            "9opt": 5,
            "11opt": 7,
            "14opt": 10,
        };
        this.frequency = {
            monthly: 1,
            quatarly: 4,
            semi_annually: 6,
            annually: 12,
        };
        this.lists = [];
        this.premiumRate = [];
        this.surrendRate = [];
        this.showDatas = [];
    }
    ngOnInit() {
        this.createListData();
    }
    createListData() {
        this.eduPayment.getMany(this.resourcesId).toPromise().then((res) => {
            if (res) {
                this.showDatas = res;
                this.cdf.detectChanges();
            }
        });
    }
};
EducationLifeViewComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__.ProductDataService },
    { type: _static_pages_education_life_models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_5__.EduPremRateService },
    { type: _static_pages_education_life_models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_5__.EduSurrRateService },
    { type: _static_pages_education_life_models_services_education_life_service__WEBPACK_IMPORTED_MODULE_6__.EduPaymentService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef }
];
EducationLifeViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
EducationLifeViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-education-life-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_education_life_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EducationLifeViewComponent);



/***/ }),

/***/ 79938:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/endo-griph-view/endo-griph-view.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoGripViewComponent": () => (/* binding */ EndoGripViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_griph_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./endo-griph-view.component.html */ 71698);
/* harmony import */ var _endo_griph_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endo-griph-view.component.scss */ 6858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _static_pages_endo_models_services_endo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static-pages/endo/models&services/endo.service */ 61438);







let EndoGripViewComponent = class EndoGripViewComponent {
    constructor(alertService, globalFun, endoPayment, cdf) {
        this.alertService = alertService;
        this.globalFun = globalFun;
        this.endoPayment = endoPayment;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.showDatas = [];
        this.show = false;
        this.chartOptions = {
            series: [
                {
                    name: "Premium Amount",
                    data: [],
                    color: "#005f99"
                }
            ],
            chart: {
                height: 450,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            title: {
                text: "Basic Benefit Illustration",
                offsetX: 0,
                offsetY: 10,
                floating: false,
                style: {
                    fontSize: "1.1rem",
                    fontFamily: "Roboto"
                }
            },
            xaxis: {
                type: 'category',
                categories: ["0", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years", "13 years", "14 years"],
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 5000000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -10,
                offsetY: -5,
                enabledOnSeries: [0]
            },
            markers: {
                size: [5, 0, 0],
            }
        };
    }
    ngOnInit() {
        // this.createListData()
        let dataArr = this.parentData.map((x) => {
            if (x.premiumPaid)
                return x.premiumPaid > 0 ? x.premiumPaid : null;
            else
                return null;
        });
        dataArr.unshift(null);
        this.chartOptions.series[0].data = dataArr;
        // if (this.parentData.length > 0) {
        //   if (this.parentData[0].benefitPlan == '002') {
        //     this.chartOptions.title.text = "Double Benefit Illustration"
        //     this.chartOptions.yaxis.max = 5000000 * 2
        //     this.chartOptions.series[1] = {
        //       data: [],
        //       name: "Goal"
        //     }
        //     this.chartOptions.series[2] = {
        //       data: [],
        //       name: "2X Goal"
        //     }
        //     this.chartOptions.series[1].data = [5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000]
        //     this.chartOptions.series[2].data = [10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000]
        //   }
        // }
    }
    createListData() {
        this.endoPayment.getMany(this.resourcesId).toPromise().then((res) => {
            // console.log(res);
            if (res) {
                let dataArr = res.map((x) => {
                    if (x.premiumPaid)
                        return x.premiumPaid;
                });
                dataArr.unshift(0);
                // console.log(dataArr, res);
                // if (res.length > 0) {
                //   if (res[0].benefitPlan == '002') {
                //     this.chartOptions.title.text = "Double Benefit Illustration"
                //     this.chartOptions.yaxis.max = 5000000 * 2
                //   }
                // }
                this.chartOptions.series[0].data = dataArr.filter(x => x >= 0);
                this.show = true;
                this.cdf.detectChanges();
            }
        });
    }
};
EndoGripViewComponent.ctorParameters = () => [
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _static_pages_endo_models_services_endo_service__WEBPACK_IMPORTED_MODULE_4__.EndoService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
EndoGripViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["chart",] }],
    parentData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
EndoGripViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-endo-grip-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_griph_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_endo_griph_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EndoGripViewComponent);



/***/ }),

/***/ 72965:
/*!***************************************************************************!*\
  !*** ./src/app/pages/static-page-review/endo-view/endo-view.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoViewComponent": () => (/* binding */ EndoViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./endo-view.component.html */ 35564);
/* harmony import */ var _endo_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endo-view.component.scss */ 28848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _static_pages_endo_models_services_endo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-pages/endo/models&services/endo.service */ 61438);





let EndoViewComponent = class EndoViewComponent {
    constructor(eduPayment, cdf) {
        this.eduPayment = eduPayment;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.premimuRate = {
            "9opt": 5,
            "11opt": 7,
            "14opt": 10,
        };
        this.frequency = {
            monthly: 1,
            quatarly: 4,
            semi_annually: 6,
            annually: 12,
        };
        this.lists = [];
        this.premiumRate = [];
        this.surrendRate = [];
        this.showDatas = [];
    }
    ngOnInit() {
        this.createListData();
    }
    createListData() {
        this.eduPayment.getMany(this.resourcesId).toPromise().then((res) => {
            if (res) {
                this.showDatas = res;
                this.cdf.detectChanges();
            }
        });
    }
};
EndoViewComponent.ctorParameters = () => [
    { type: _static_pages_endo_models_services_endo_service__WEBPACK_IMPORTED_MODULE_2__.EndoService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
EndoViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
EndoViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-endo-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_endo_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EndoViewComponent);



/***/ }),

/***/ 53485:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/static-page-review/fire-building/fire-building.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireBuildingComponent": () => (/* binding */ FireBuildingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_building_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-building.component.html */ 16414);
/* harmony import */ var _fire_building_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-building.component.scss */ 89876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _static_pages_surrounding_building_models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-pages/surrounding-building/models&services/surrounding-building.service */ 29673);





let FireBuildingComponent = class FireBuildingComponent {
    constructor(SurroundingBuildingService) {
        this.SurroundingBuildingService = SurroundingBuildingService;
        this.riskId = 0;
        this.surrounding = [];
    }
    ngOnInit() {
    }
    onActionView(data, type) {
        console.log("data", data, "type", type);
        if (type == 'delete') {
            this.SurroundingBuildingService.delete(data.id).toPromise()
                .then((res) => {
                if (res) {
                    let index = this.surrounding.findIndex(x => x.id == data.id);
                    if (index >= 0) {
                        this.surrounding.splice(index, 1);
                    }
                }
            });
        }
    }
};
FireBuildingComponent.ctorParameters = () => [
    { type: _static_pages_surrounding_building_models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_2__.SurroundingBuildingService }
];
FireBuildingComponent.propDecorators = {
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FireBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fire-building',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_building_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fire_building_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FireBuildingComponent);



/***/ }),

/***/ 86205:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/fire-page-view/fire-page-view.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirePageViewComponent": () => (/* binding */ FirePageViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-page-view.component.html */ 84027);
/* harmony import */ var _fire_page_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-page-view.component.scss */ 63090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_pages_fire_simple_page_models_services_fire_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static-pages/fire-simple-page/models&services/fire-product.service */ 75103);







const FirepageViewID = "static_1642920843499";
let FirePageViewComponent = class FirePageViewComponent {
    constructor(fireService, globalFun, prodService) {
        this.fireService = fireService;
        this.globalFun = globalFun;
        this.prodService = prodService;
        this.showData = {};
    }
    ngOnInit() {
        this.refID = this.prodService.referenceID;
        this.tempResourcesId = this.resourcesId;
        // if(this.prodService.type == 'policy'){
        // }else{
        //   this.tempResourcesId = this.resourcesId
        // }
        if (this.globalFun.tempFormData[FirepageViewID]) {
            this.showData = this.globalFun.tempFormData[FirepageViewID];
        }
        else {
            this.getDataAPI();
        }
    }
    getDataAPI() {
        this.fireService.getOne(this.tempResourcesId).toPromise().then((res) => {
            if (res) {
                this.showData = res;
            }
        });
    }
};
FirePageViewComponent.ctorParameters = () => [
    { type: _static_pages_fire_simple_page_models_services_fire_product_service__WEBPACK_IMPORTED_MODULE_4__.FireProductService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService }
];
FirePageViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
FirePageViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-fire-page-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fire_page_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FirePageViewComponent);



/***/ }),

/***/ 56777:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/fire-risk-view/fire-risk-view.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireRiskViewComponent": () => (/* binding */ FireRiskViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_risk_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-risk-view.component.html */ 98174);
/* harmony import */ var _fire_risk_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-risk-view.component.scss */ 97150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _static_pages_fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-pages/fire-risk/models&services/fire-risk.service */ 66977);





let FireRiskViewComponent = class FireRiskViewComponent {
    constructor(fireRiskService) {
        this.fireRiskService = fireRiskService;
        this.premiumAmt = "";
        this.listData = [];
    }
    ngOnInit() {
        this.getRiskList();
    }
    getRiskList() {
        this.fireRiskService.getMany(this.resourcesId).toPromise().then((res) => {
            console.log(res);
            if (res) {
                this.listData = res;
            }
        });
    }
};
FireRiskViewComponent.ctorParameters = () => [
    { type: _static_pages_fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_2__.FireRiskService }
];
FireRiskViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FireRiskViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fire-risk-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_risk_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fire_risk_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FireRiskViewComponent);



/***/ }),

/***/ 65572:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/health-quo-view/health-quo-view.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthQuoViewComponent": () => (/* binding */ HealthQuoViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_quo_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./health-quo-view.component.html */ 14392);
/* harmony import */ var _health_quo_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-quo-view.component.scss */ 21190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 45570);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_pages_health_quo_models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static-pages/health-quo/models&services/health-payment.service */ 93931);










let HealthQuoViewComponent = class HealthQuoViewComponent {
    constructor(globalFun, alertService, addOnQuoService, coverageQuoService, healthPayService, cdf, prodService) {
        this.globalFun = globalFun;
        this.alertService = alertService;
        this.addOnQuoService = addOnQuoService;
        this.coverageQuoService = coverageQuoService;
        this.healthPayService = healthPayService;
        this.cdf = cdf;
        this.prodService = prodService;
        this.refID = "";
        this.showData = [];
        this.schedule = [];
        this.totalP = 0;
        this.totalL = 0;
        this.tempResourcesId = "";
        this.tempSchedule = [];
    }
    ngOnInit() {
        this.refID = this.prodService.referenceID;
        this.tempResourcesId = this.resourcesId;
        // if(this.prodService.type == 'policy'){
        //   this.tempResourcesId = this.refID
        // }else{
        //   this.tempResourcesId = this.resourcesId
        // }
        // for (let addon of this.product.addOns) {
        // }
        // if (this.parentData.coverages) {
        this.getCoverage();
        // }
        // if (this.parentData.addOns) {
        this.getAddon();
        // }
        this.getSchedule();
    }
    getAddon() {
        this.product.addOns.forEach((addon) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let response = {};
            try {
                response = yield this.addOnQuoService.getOne(addon.id, this.tempResourcesId).toPromise();
                if (response) {
                    this.showData.push({ keyName: addon.description, value: response.sumInsured });
                }
            }
            catch (error) {
            }
        }));
    }
    getCoverage() {
        this.product.coverages.forEach((coverage) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let response = {};
            try {
                response = yield this.coverageQuoService.getOne(coverage.id, this.tempResourcesId).toPromise();
                if (response) {
                    this.showData.unshift({ keyName: coverage.description, value: response.sumInsured });
                }
            }
            catch (error) {
            }
        }));
    }
    // nextPage() {
    //   this.actionEvent.emit({ type: StaticActionType.NEXT })
    // }
    getSchedule() {
        this.healthPayService.getMany(this.tempResourcesId).toPromise().then((res) => {
            if (res) {
                if (res.length > 0) {
                    this.totalP = 0;
                    this.totalL = 0;
                    res.map(x => {
                        this.totalP += x.premium;
                        this.totalL += x.levy;
                    });
                    this.schedule = res;
                    if (res[0].paymentTerm == "lump") {
                        this.tempSchedule = [
                            { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
                        ];
                    }
                    else {
                        let tempTotal = this.totalP / 2;
                        this.tempSchedule = [
                            { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
                            { premium: tempTotal, levy: 0, total: tempTotal },
                        ];
                    }
                    this.cdf.detectChanges();
                }
            }
        });
    }
};
HealthQuoViewComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_4__.AddOnQuoService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_5__.CoverageQuoService },
    { type: _static_pages_health_quo_models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_7__.HealthPaymentService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService }
];
HealthQuoViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
HealthQuoViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-health-quo-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_quo_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_health_quo_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HealthQuoViewComponent);



/***/ }),

/***/ 9217:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/simple-page-view/simple-page-view.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplePageViewComponent": () => (/* binding */ SimplePageViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_simple_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./simple-page-view.component.html */ 93342);
/* harmony import */ var _simple_page_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-page-view.component.scss */ 43501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_pages_simple_page_models_services_health_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static-pages/simple-page/models&services/health-product.service */ 75291);







const HealthpageViewID = "static_1634018514043";
let SimplePageViewComponent = class SimplePageViewComponent {
    constructor(healthService, globalFun, prodService) {
        this.healthService = healthService;
        this.globalFun = globalFun;
        this.prodService = prodService;
        this.showData = {};
    }
    ngOnInit() {
        this.refID = this.prodService.referenceID;
        this.tempResourcesId = this.resourcesId;
        // if(this.prodService.type == 'policy'){
        // }else{
        //   this.tempResourcesId = this.resourcesId
        // }
        if (this.globalFun.tempFormData[HealthpageViewID]) {
            this.showData = this.globalFun.tempFormData[HealthpageViewID];
        }
        else {
            this.getDataAPI();
        }
    }
    getDataAPI() {
        this.healthService.getOne(this.tempResourcesId).toPromise().then((res) => {
            if (res) {
                this.showData = res;
            }
        });
    }
};
SimplePageViewComponent.ctorParameters = () => [
    { type: _static_pages_simple_page_models_services_health_product_service__WEBPACK_IMPORTED_MODULE_4__.HealthProductService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService }
];
SimplePageViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
SimplePageViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-simple-page-view',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_simple_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_simple_page_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SimplePageViewComponent);



/***/ }),

/***/ 38026:
/*!***************************************************************************!*\
  !*** ./src/app/pages/static-page-review/static-pages-reivew.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPageViewDirective": () => (/* binding */ StaticPageViewDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addon-view/addon-view.component */ 17555);
/* harmony import */ var _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-view/coverage-view.component */ 49836);
/* harmony import */ var _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-life-view/education-life-view.component */ 71526);
/* harmony import */ var _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endo-griph-view/endo-griph-view.component */ 79938);
/* harmony import */ var _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endo-view/endo-view.component */ 72965);
/* harmony import */ var _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fire-page-view/fire-page-view.component */ 86205);
/* harmony import */ var _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-risk-view/fire-risk-view.component */ 56777);
/* harmony import */ var _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-quo-view/health-quo-view.component */ 65572);
/* harmony import */ var _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simple-page-view/simple-page-view.component */ 9217);











// import { STATIC_VIEW_COMPONENT } from "./static-pages-reivew.data";
const STATIC_VIEW_COMPONENT = {
    'static_1634018514043': _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_8__.SimplePageViewComponent,
    'addon_1634010770155': _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_0__.AddonViewComponent,
    'coverage_1634010995936': _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_1__.CoverageViewComponent,
    'static_1635218894755': _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_7__.HealthQuoViewComponent,
    'static_1635309151504': _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_2__.EducationLifeViewComponent,
    // 'static_1635392848894': EducationLifeGripViewComponent,
    'static_1635747288508': _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_8__.SimplePageViewComponent,
    'static_1642920843499': _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_5__.FirePageViewComponent,
    'static_1643116155828': _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_6__.FireRiskViewComponent,
    'static_1644896661652': _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_4__.EndoViewComponent,
    'static_1644896804675': _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_3__.EndoGripViewComponent,
    // ''
};
let StaticPageViewDirective = class StaticPageViewDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    ngOnInit() {
        if (STATIC_VIEW_COMPONENT[this.compId]) {
            const component = this.resolver.resolveComponentFactory(STATIC_VIEW_COMPONENT[this.compId]);
            this.component = this.container.createComponent(component);
            this.component.instance.product = this.product;
            this.component.instance.resourcesId = this.resourcesId;
            if (this.compId == "static_1635747288508") {
                const component = this.resolver.resolveComponentFactory(STATIC_VIEW_COMPONENT['static_1635218894755']);
                this.component2 = this.container.createComponent(component);
                this.component2.instance.product = this.product;
                this.component2.instance.resourcesId = this.resourcesId;
            }
        }
    }
};
StaticPageViewDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewContainerRef }
];
StaticPageViewDirective.propDecorators = {
    compId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
StaticPageViewDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive)({
        selector: '[staticPageView]'
    })
], StaticPageViewDirective);



/***/ }),

/***/ 18410:
/*!************************************************************************!*\
  !*** ./src/app/pages/static-page-review/static-pages-reivew.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPagesViewModule": () => (/* binding */ StaticPagesViewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _static_pages_reivew_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-pages-reivew.directive */ 38026);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 63387);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page-view/simple-page-view.component */ 9217);
/* harmony import */ var _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addon-view/addon-view.component */ 17555);
/* harmony import */ var _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coverage-view/coverage-view.component */ 49836);
/* harmony import */ var _education_life_griph_view_education_life_griph_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education-life-griph-view/education-life-griph-view.component */ 42964);
/* harmony import */ var _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education-life-view/education-life-view.component */ 71526);
/* harmony import */ var _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-quo-view/health-quo-view.component */ 65572);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _fire_building_fire_building_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fire-building/fire-building.component */ 53485);
/* harmony import */ var _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calculated-building/calculated-building.component */ 39425);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fire-risk-view/fire-risk-view.component */ 56777);
/* harmony import */ var _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fire-page-view/fire-page-view.component */ 86205);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-currency */ 40287);
/* harmony import */ var _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./endo-griph-view/endo-griph-view.component */ 79938);
/* harmony import */ var _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./endo-view/endo-view.component */ 72965);























let StaticPagesViewModule = class StaticPagesViewModule {
};
StaticPagesViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [
            _static_pages_reivew_directive__WEBPACK_IMPORTED_MODULE_0__.StaticPageViewDirective,
            _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_2__.SimplePageViewComponent,
            _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_3__.AddonViewComponent,
            _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_4__.CoverageViewComponent,
            _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_7__.HealthQuoViewComponent,
            _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_6__.EducationLifeViewComponent,
            _education_life_griph_view_education_life_griph_view_component__WEBPACK_IMPORTED_MODULE_5__.EducationLifeGripViewComponent,
            _fire_building_fire_building_component__WEBPACK_IMPORTED_MODULE_8__.FireBuildingComponent,
            _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_9__.CalculatedBuildingComponent,
            _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_10__.FireRiskViewComponent,
            _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_11__.FirePageViewComponent,
            _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_12__.EndoGripViewComponent,
            _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_13__.EndoViewComponent,
        ],
        exports: [
            _static_pages_reivew_directive__WEBPACK_IMPORTED_MODULE_0__.StaticPageViewDirective,
            _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_2__.SimplePageViewComponent,
            _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_3__.AddonViewComponent,
            _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_4__.CoverageViewComponent,
            _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_7__.HealthQuoViewComponent,
            _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_6__.EducationLifeViewComponent,
            _education_life_griph_view_education_life_griph_view_component__WEBPACK_IMPORTED_MODULE_5__.EducationLifeGripViewComponent,
            _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_11__.FirePageViewComponent,
            _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_10__.FireRiskViewComponent,
            _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_12__.EndoGripViewComponent,
            _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_13__.EndoViewComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModalModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDatepickerModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule,
            ngx_currency__WEBPACK_IMPORTED_MODULE_22__.NgxCurrencyModule
        ]
    })
], StaticPagesViewModule);



/***/ }),

/***/ 65332:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/services/calculated-building-service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireContentService": () => (/* binding */ FireContentService),
/* harmony export */   "FirePLantService": () => (/* binding */ FirePLantService),
/* harmony export */   "FireStockService": () => (/* binding */ FireStockService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_FIRE_CONTENT = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/content`;
const API_FIRE_PLANT = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/plant-machinery`;
const API_FIRE_STOCK = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/stock`;
// const API_FIRE_STOCK_RISK = `${environment.apiUrl}/fire-policy/risk/`
//{riskId}/stock
let FireContentService = class FireContentService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FIRE_CONTENT);
        this.httpClient = httpClient;
    }
};
FireContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FireContentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FireContentService);

let FirePLantService = class FirePLantService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FIRE_PLANT);
        this.httpClient = httpClient;
    }
};
FirePLantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FirePLantService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FirePLantService);

let FireStockService = class FireStockService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FIRE_STOCK);
        this.httpClient = httpClient;
    }
};
FireStockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FireStockService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FireStockService);



/***/ }),

/***/ 27673:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/models&services/education-life-rate.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EduPremRateService": () => (/* binding */ EduPremRateService),
/* harmony export */   "EduSurrRateService": () => (/* binding */ EduSurrRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_EDU_P_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/education-premium-rates`;
let EduPremRateService = class EduPremRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EDU_P_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(plan, term) {
        return this.httpClient.get(API_EDU_P_RATE_URL + "?benefitPlan=" + plan + "&policyTerm=" + term);
    }
};
EduPremRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EduPremRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EduPremRateService);

const API_EDU_S_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/education-surrender-values`;
let EduSurrRateService = class EduSurrRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EDU_S_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(term) {
        return this.httpClient.get(API_EDU_S_RATE_URL + "?policyTerm=" + term);
    }
};
EduSurrRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EduSurrRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EduSurrRateService);



/***/ }),

/***/ 65937:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/models&services/education-life.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EduPaymentService": () => (/* binding */ EduPaymentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_EDU_LIFE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/education/life-benefit`;
let EduPaymentService = class EduPaymentService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EDU_LIFE_URL);
        this.httpClient = httpClient;
    }
    deleteMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.delete(API_EDU_LIFE_URL + "/resource/" + redId);
    }
    getMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.get(API_EDU_LIFE_URL + "/resource/" + redId);
    }
    saveMany(data) {
        return this.httpClient.post(API_EDU_LIFE_URL + "s", data);
    }
};
EduPaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EduPaymentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EduPaymentService);



/***/ }),

/***/ 61438:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo/models&services/endo.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoService": () => (/* binding */ EndoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_EDU_LIFE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/endowment`;
let EndoService = class EndoService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EDU_LIFE_URL);
        this.httpClient = httpClient;
    }
    deleteMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.delete(API_EDU_LIFE_URL + "/resource/" + redId);
    }
    getMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.get(API_EDU_LIFE_URL + "/resource/" + redId);
    }
    saveMany(data) {
        return this.httpClient.post(API_EDU_LIFE_URL + "s", data);
    }
};
EndoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EndoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EndoService);



/***/ }),

/***/ 93931:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/models&services/health-payment.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthPaymentService": () => (/* binding */ HealthPaymentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_HEALTH_PAY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/health/payment-schedule`;
let HealthPaymentService = class HealthPaymentService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_HEALTH_PAY_URL);
        this.httpClient = httpClient;
    }
    deleteMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.delete(API_HEALTH_PAY_URL + "/resource/" + redId);
    }
    getMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.get(API_HEALTH_PAY_URL + "/resource/" + redId);
    }
    saveAll(postData) {
        return this.httpClient.post(API_HEALTH_PAY_URL + "s", postData);
    }
};
HealthPaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
HealthPaymentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], HealthPaymentService);



/***/ }),

/***/ 75291:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page/models&services/health-product.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthProductService": () => (/* binding */ HealthProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_ADDON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/health/product-detail`;
let HealthProductService = class HealthProductService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getOne(quo) {
        return this.httpClient.get(API_ADDON_URL + "/resource/" + quo);
    }
};
HealthProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
HealthProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], HealthProductService);



/***/ }),

/***/ 29673:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/models&services/surrounding-building.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurroundingBuildingService": () => (/* binding */ SurroundingBuildingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_SURROUNDING_BUILDING_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/surrounding-building`;
const API_RISK_SURROUNDING_BUILDING_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/risk/`;
let SurroundingBuildingService = class SurroundingBuildingService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_SURROUNDING_BUILDING_URL);
        this.httpClient = httpClient;
    }
    // fire-policy/surrounding-building/max-rate
    getByRiskId(riskId) {
        return this.httpClient.get(API_RISK_SURROUNDING_BUILDING_API + riskId + "/surrounding-building");
    }
    getMaxRate(riskId) {
        return this.httpClient.get(API_SURROUNDING_BUILDING_URL + "/max-rate?riskId=" + riskId);
    }
};
SurroundingBuildingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
SurroundingBuildingService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SurroundingBuildingService);



/***/ }),

/***/ 85431:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/addon-view/addon-view.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Addons Coverage :</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <div class=\"table-responsive angular-bootstrap-table\">\n      <table class=\"table table-head-custom table-vertical-center\">\n        <thead>\n          <tr>\n            <th style=\"text-align: left;\">\n              Addons Coverage\n            </th>\n            <th *ngIf=\"product.code == 'CLFR01'\">\n              Option\n            </th>\n            <th *ngIf=\"addon.sumInsured\" style=\"text-align: right;\">\n              Sum Insured\n            </th>\n            <th *ngIf=\"addon.unit\" style=\"text-align: right;\">\n              Unit\n            </th>\n            <th *ngIf=\"addon.premium\" style=\"text-align: right;\">\n              Premium\n            </th>\n          </tr>\n        </thead>\n        <tbody class=\"tbody-align\">\n          <ng-container *ngFor=\"let addon of product.addOns;let i = index\">\n            <tr *ngIf=\"addOnData[addon.id]\">\n              <td style=\"text-align: left;\">{{addon.description}}</td>\n              <td *ngIf=\"product.code == 'CLFR01'\">\n                <ng-container *ngIf=\"addon.code == 'FRAD010' || addon.code == 'FRAD008' \">\n                  <ng-select class=\"ng-custom-select\" [items]=\"fireOptionData[addon.code]\" bindLabel=\"value\"\n                    bindValue=\"code\" disabled [(ngModel)]=\"addOnData[addon.id].option\" [clearable]=\"false\"></ng-select>\n                </ng-container>\n              </td>\n              <td *ngIf=\"addon.sumInsured\">\n                <!-- <ng-container *ngIf=\"addOnData[addon.id]\"> -->\n                {{addOnData[addon.id].sum > 0 ? (addOnData[addon.id].sum | number) : addOnData[addon.id].sum}}\n                <!-- </ng-container> -->\n              </td>\n              <td *ngIf=\"addon.unit\">\n                {{addOnData[addon.id] ? addOnData[addon.id].unit : 0}}\n              </td>\n              <td *ngIf=\"addon.premium\">\n                <!-- <ng-container *ngIf=\"addOnData[addon.id]\"> -->\n                {{addOnData[addon.id].premium > 0 ? (addOnData[addon.id].premium | number) :\n                addOnData[addon.id].premium}}\n                <!-- </ng-container> -->\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 4333:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/calculated-building/calculated-building.component.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h3 class=\"card-label\">Contents including FFF</h3>\n        </div>\n    </div>\n    <div class=\"card-body customer-card-body\">\n        <div class=\"table-responsive angular-bootstrap-table\">\n            <table class=\"table table-head-custom table-vertical-center\">\n                <thead *ngIf=\"contents\">\n                    <tr>\n                        <th>Item Name</th>\n                        <th>Item Description</th>\n                        <th style=\"text-align: right;\">Value per Quantity</th>\n                        <th>Quantity</th>\n                        <th style=\"text-align: right;\">Total Value</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"contentData.length>0 && contents\">\n                    <tr *ngFor=\"let data of contentData\">\n                        <th>\n                            {{data.itemName}}\n                        </th>\n                        <th>\n                            {{data.itemDescription}}\n                        </th>\n                        <th style=\"text-align: right;\">\n                            {{data.valuePerQuantity | number}}\n                        </th>\n                        <th>\n                            {{data.quantity}}\n                        </th>\n                        <th style=\"text-align: right;\">\n                            {{data.totalValue | number}}\n                        </th>\n                        <th>\n                            <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit')\">\n                                <span class=\"flaticon-edit\"></span>\n                            </a>\n                            <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete')\">\n                                <span class=\"flaticon-delete\"></span>\n                            </a>\n                        </th>\n                    </tr>\n                </tbody>\n\n                <thead *ngIf=\"plant\">\n                    <tr>\n                        <th>Item Name</th>\n                        <th>Item Description</th>\n                        <th style=\"text-align: right;\">Value per Quantity</th>\n                        <th>Quantity</th>\n                        <th style=\"text-align: right;\">Total Value</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"plantData.length>0 && plant\">\n                    <tr *ngFor=\"let data of plantData\">\n                        <th>\n                            {{data.itemName}}\n                        </th>\n                        <th>\n                            {{data.itemDescription}}\n                        </th>\n                        <th style=\"text-align: right;\">\n                            {{data.valuePerQuantity | number}}\n                        </th>\n                        <th>\n                            {{data.quantity}}\n                        </th>\n                        <th style=\"text-align: right;\">\n                            {{data.totalValue | number}}\n                        </th>\n                        <th>\n                            <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit')\">\n                                <span class=\"flaticon-edit\"></span>\n                            </a>\n                            <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete')\">\n                                <span class=\"flaticon-delete\"></span>\n                            </a>\n                        </th>\n                    </tr>\n                </tbody>\n                <thead *ngIf=\"stock\">\n                    <tr>\n                        <th>Month</th>\n                        <th>Description</th>\n                        <th style=\"text-align: right;\">Stock Value</th>\n                        <th style=\"text-align: right;\">Agreed Si</th>\n                        <th>Remarks</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"stockData.length>0 && stock\">\n                    <tr *ngFor=\"let data of stockData\">\n                        <th>\n                            {{data.month}}\n                        </th>\n                        <th>\n                            {{data.description}}\n                        </th>\n                        <th style=\"text-align: right;\">\n                            {{data.stockValue | number}}\n                        </th>\n                        <th style=\"text-align: right;\">\n                            {{data.agreedSi | number}}\n                        </th>\n                        <th>\n                            {{data.remark}}\n                        </th>\n                        <th>\n                            <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit')\">\n                                <span class=\"flaticon-edit\"></span>\n                            </a>\n                            <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete')\">\n                                <span class=\"flaticon-delete\"></span>\n                            </a>\n                        </th>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>");

/***/ }),

/***/ 64923:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/coverage-view/coverage-view.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Basic Coverage :</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <div class=\"table-responsive angular-bootstrap-table\">\n      <table class=\"table table-head-custom table-vertical-center\">\n        <thead>\n          <tr>\n            <th>\n              Basic Coverage\n            </th>\n            <th *ngIf=\"coverage.sumInsured\" style=\"text-align: right;\">\n              Sum Insured\n            </th>\n            <th *ngIf=\"coverage.unit\" style=\"text-align: right;\">\n              Unit\n            </th>\n            <th *ngIf=\"coverage.premium\" style=\"text-align: right;\">\n              Premium\n            </th>\n          </tr>\n        </thead>\n        <tbody class=\"tbody-align\">\n          <ng-container *ngFor=\"let coverage of product.coverages;let i = index\">\n            <tr *ngIf=\"coverageData[coverage.id]\">\n              <td>{{coverage.description}}</td>\n              <td *ngIf=\"coverage.sumInsured\">\n                <!-- <ng-container *ngIf=\"coverageData[coverage.id]\"> -->\n                {{coverageData[coverage.id].sum > 0 ? (coverageData[coverage.id].sum | number) :\n                coverageData[coverage.id].sum}}\n                <!-- </ng-container> -->\n              </td>\n              <td *ngIf=\"coverage.unit\">\n                {{coverageData[coverage.id] ? coverageData[coverage.id].unit : 0}}\n              </td>\n              <td *ngIf=\"coverage.premium\">\n                <!-- <ng-container *ngIf=\"coverageData[coverage.id]\"> -->\n                {{coverageData[coverage.id].premium > 0 ? (coverageData[coverage.id].premium | number) :\n                coverageData[coverage.id].premium}}\n                <!-- </ng-container> -->\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 38627:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/education-life-griph-view/education-life-griph-view.component.html ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Education Life Benefit Illustration</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\"> -->\n    <ng-container *ngIf=\"parentData\">\n      <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\" [xaxis]=\"chartOptions.xaxis\"\n        [yaxis]=\"chartOptions.yaxis\" [title]=\"chartOptions.title\" [legend]=\"chartOptions.legend\"\n        [dataLabels]=\"chartOptions.dataLabels\" [markers]=\"chartOptions.markers\"></apx-chart>\n    </ng-container>\n  <!-- </div>\n</div> -->");

/***/ }),

/***/ 50218:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/education-life-view/education-life-view.component.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Education Life Benefit</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>End of Policy Year</th>\n          <th>Age</th>\n          <th style=\"text-align: right;\">Premium Paid</th>\n          <th style=\"text-align: right;\">Death/PTD Benefit</th>\n          <th style=\"text-align: right;\">Surrender Value</th>\n          <th style=\"text-align: right;\">Maturity Benefit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of showDatas;let i = index\">\n          <td>{{item.endOfPolicyYear}}</td>\n          <td>{{item.age}}</td>\n          <td style=\"text-align: right;\">{{(item.premiumPaid | number) || \"-\"}}</td>\n          <td style=\"text-align: right;\">{{item.deathBenefit | number}}</td>\n          <td style=\"text-align: right;\">{{(item.surrenderValue | number) || \"-\"}}</td>\n          <td style=\"text-align: right;\">{{(item.maturityBenefit | number) || \"-\"}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <hr class=\"mb-5\">\n    <ng-container *ngIf=\"showDatas.length > 0\">\n      <app-education-life-grip-view [parentData]=\"showDatas\"></app-education-life-grip-view>\n    </ng-container>\n  </div>\n</div>");

/***/ }),

/***/ 71698:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/endo-griph-view/endo-griph-view.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Education Life Benefit Illustration</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\"> -->\n    <ng-container *ngIf=\"parentData\">\n      <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\" [xaxis]=\"chartOptions.xaxis\"\n        [yaxis]=\"chartOptions.yaxis\" [title]=\"chartOptions.title\" [legend]=\"chartOptions.legend\"\n        [dataLabels]=\"chartOptions.dataLabels\" [markers]=\"chartOptions.markers\"></apx-chart>\n    </ng-container>\n  <!-- </div>\n</div> -->");

/***/ }),

/***/ 35564:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/endo-view/endo-view.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Education Life Benefit</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>End of Policy Year</th>\n          <th>Age</th>\n          <th style=\"text-align: right;\">Premium Paid</th>\n          <th style=\"text-align: right;\">Death/PTD Benefit</th>\n          <th style=\"text-align: right;\">Surrender Value</th>\n          <th style=\"text-align: right;\">Policy Loan</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of showDatas;let i = index\">\n          <td>{{item.endOfPolicyYear}}</td>\n          <td>{{item.age}}</td>\n          <td style=\"text-align: right;\">{{(item.premiumPaid | number) || \"-\"}}</td>\n          <td style=\"text-align: right;\">{{item.benefit | number}}</td>\n          <td style=\"text-align: right;\">{{(item.surrenderValue | number) || \"-\"}}</td>\n          <td style=\"text-align: right;\">{{(item.policyLoan | number) || \"-\"}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <hr class=\"mb-5\">\n    <ng-container *ngIf=\"showDatas.length > 0\">\n      <app-endo-grip-view [parentData]=\"showDatas\"></app-endo-grip-view>\n    </ng-container>\n  </div>\n</div>");

/***/ }),

/***/ 16414:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/fire-building/fire-building.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h3 class=\"card-label\">Fire Risk</h3>\n        </div>\n    </div>\n    <div class=\"card-body customer-card-body\">\n\n        <div class=\"table-responsive angular-bootstrap-table\">\n            <table class=\"table table-head-custom table-vertical-center\">\n                <thead>\n                    <tr>\n                        <th>Building Description</th>\n                        <th>Type of Building</th>\n                        <th>Occuption</th>\n                        <th>Class</th>\n                        <th>Premium Rate</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"surrounding.length>0\">\n                    <tr *ngFor=\"let data of surrounding\">\n                        <th>\n                            {{data.buildingDescription}}\n                        </th>\n                        <th>\n                            {{data.typeOfBuilding}}\n                        </th>\n                        <th>\n                            {{data.occupationOfBuilding}}\n                        </th>\n                        <th>\n                            {{data.buildingClass}}\n                        </th>\n                        <th>\n                            {{data.premiumRate}}\n                        </th>\n                        <th>\n                            <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit')\">\n                                <span class=\"flaticon-edit\"></span>\n                            </a>\n                            <a title=\"Delete Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete')\">\n                                <span class=\"flaticon-delete\"></span>\n                            </a>\n                        </th>\n                    </tr>\n                </tbody>\n\n\n            </table>\n        </div>\n    </div>");

/***/ }),

/***/ 84027:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/fire-page-view/fire-page-view.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h3 class=\"card-label\">Fire Product Details :</h3>\n        </div>\n    </div>\n    <div class=\"card-body customer-card-body\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n                Policy Effective Date (From) :\n                <span> {{showData.startDate | date : \"dd/MM/yyyy\"}}</span>\n            </li>\n            <li class=\"list-group-item\">\n                Policy Effective Date (To) :\n                <span> {{showData.endDate | date : \"dd/MM/yyyy\"}}</span>\n            </li>\n            <li class=\"list-group-item\">\n                Policy Duration :\n                <span> {{showData.policyDuration }} Days</span>\n            </li>\n            <li class=\"list-group-item\">\n                Policy Type :\n                <span> {{showData.policyType == \"T-001\" ? \"Normal\" : \"Declaration\" }}</span>\n            </li>\n            <li class=\"list-group-item\">\n                Currency :\n                <span> {{showData.policyDuration  == \"T-001\" ? \"MMK\" : \"USD\" }}</span>\n            </li>\n\n            <!--  -->\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ 98174:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/fire-risk-view/fire-risk-view.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Fire Risk</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <div class=\"table-responsive angular-bootstrap-table\">\n      <table class=\"table table-head-custom table-vertical-center fire-table\">\n        <thead>\n          <tr>\n            <th>Building Description</th>\n            <th style=\"text-align: right;\">Sum Insured</th>\n            <th style=\"text-align: right;\">Premium </th>\n            <!-- <th>Other Building </th> -->\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let item of listData\">\n            <tr>\n              <td>{{item.buildingDescription}}</td>\n              <td style=\"text-align: right;\">{{item.riskSi | number}}</td>\n              <td style=\"text-align: right;\">{{item.premium | number}}</td>\n              <!-- <td>\n                <span class=\"text-primary\" style=\"text-decoration: underline;white-space: nowrap;cursor: pointer;\"\n                  (click)=\"createPolicyBtn(item)\">Other Info</span>\n              </td> -->\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 14392:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/health-quo-view/health-quo-view.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n  <div class=\"card-body customer-card-body\">\n    <table class=\"table table-bordered mt-5\">\n      <thead class=\"tbody-align\">\n        <tr>\n          <th>\n            Coverages/Benefit\n          </th>\n          <th>\n            Sum Insured\n          </th>\n        </tr>\n      </thead>\n      <tbody class=\"tbody-align\">\n        <tr *ngFor=\"let item of showData\">\n          <td>{{item.keyName}}</td>\n          <td>{{item.value}} Units</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<!-- <hr> -->\n<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Payment Schedules :</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <!-- <h5 class=\"\">Payment Schedules</h5> -->\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>\n            No. of Installment\n          </th>\n          <th style=\"text-align: right;\">\n            Premium\n          </th>\n          <th style=\"text-align: right;\">\n            Levy\n          </th>\n          <th style=\"text-align: right;\">\n            Total\n          </th>\n        </tr>\n      </thead>\n      <tbody class=\"tbody-align\">\n        <tr *ngFor=\"let item of tempSchedule;let i =index\">\n          <td>{{i+1}}</td>\n          <td>{{item.premium | number}}</td>\n          <td>{{item.levy | number}}</td>\n          <td>{{(item.premium + item.levy) | number}}</td>\n        </tr>\n      </tbody>\n      <tfoot class=\"tbody-align\">\n        <tr>\n          <td><b>Total</b></td>\n          <td>{{totalP | number}}</td>\n          <td>{{totalL | number}}</td>\n          <td>{{(totalP+totalL) | number}}</td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>");

/***/ }),

/***/ 93342:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/simple-page-view/simple-page-view.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Health Product Details :</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        Period of Insurance (From) :\n        <span> {{showData.insuranceStartDate | date : \"dd/MM/yyyy\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Period of Insurance (To) :\n        <span> {{showData.insuranceEndDate | date : \"dd/MM/yyyy\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Basic Cover :\n        <span> {{showData.basicCoverId | titlecase}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Date of Birth :\n        <span> {{showData.dateOfBirth | date : \"dd/MM/yyyy\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Payment Frequency :\n        <span> {{showData.paymentFrequency == 'lump' ? \"Lump Sum\" : \"Semi-Annually\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Sum Insured of Main Cover :\n        <span> {{showData.sumInsuredMainCover}} Unit{{showData.sumInsuredMainCover > 1 ? \"s\":\"\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Medical Card No :\n        <span> {{showData.medicalCardNo}}</span>\n      </li>\n      <!--  -->\n    </ul>\n  </div>\n</div>");

/***/ }),

/***/ 24153:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/static-page-review/addon-view/addon-view.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRvbi12aWV3LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 64293:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/calculated-building/calculated-building.component.scss ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxjdWxhdGVkLWJ1aWxkaW5nLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 32093:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/coverage-view/coverage-view.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3ZlcmFnZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 54955:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/education-life-griph-view/education-life-griph-view.component.scss ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tbGlmZS1ncmlwaC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 80453:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/education-life-view/education-life-view.component.scss ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tbGlmZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6858:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/endo-griph-view/endo-griph-view.component.scss ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmRvLWdyaXBoLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 28848:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/static-page-review/endo-view/endo-view.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmRvLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 89876:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/fire-building/fire-building.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJlLWJ1aWxkaW5nLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 63090:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/fire-page-view/fire-page-view.component.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJlLXBhZ2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 97150:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/fire-risk-view/fire-risk-view.component.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".fire-table th,\n.fire-table td {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmUtcmlzay12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiZmlyZS1yaXNrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyZS10YWJsZSB0aCxcbi5maXJlLXRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */";

/***/ }),

/***/ 21190:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/health-quo-view/health-quo-view.component.scss ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtcXVvLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 43501:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/simple-page-view/simple-page-view.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUtcGFnZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_static-page-review_static-pages-reivew_module_ts.js.map