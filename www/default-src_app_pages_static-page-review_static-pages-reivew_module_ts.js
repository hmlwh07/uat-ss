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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addon_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./addon-view.component.html */ 85431);
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
        this.optionId = this.optionId ? this.optionId : this.resourcesId;
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
                        this.addonQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise().then((response) => {
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
                            response = yield this.addonQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise();
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
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    optionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
AddonViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-addon-view',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addon_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calculated_building_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calculated-building.component.html */ 4333);
/* harmony import */ var _calculated_building_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculated-building.component.scss */ 64293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _static_pages_calculated_building_services_calculated_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static-pages/calculated-building/services/calculated-building-service */ 65332);






let CalculatedBuildingComponent = class CalculatedBuildingComponent {
    constructor(FireContentService, FirePLantService, FireStockService, cdf, alertService) {
        this.FireContentService = FireContentService;
        this.FirePLantService = FirePLantService;
        this.FireStockService = FireStockService;
        this.cdf = cdf;
        this.alertService = alertService;
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
            // console.log("getFireContent-RESSS", res)
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
                // console.log("getFirePlant-RESSS", res)
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
                // console.log("getFireStock-RESSS", res)
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
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.FireContentService.delete(id).toPromise().then((res) => {
                    if (res) {
                        this.getFireContent();
                        this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                        });
                    }
                });
            }
        });
    }
    deleteFirePlant(id) {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.FirePLantService.delete(id).toPromise().then((res) => {
                    if (res) {
                        this.getFirePlant();
                        this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                        });
                    }
                });
            }
        });
    }
    deleteFireStock(id) {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.FireStockService.delete(id).toPromise().then((res) => {
                    if (res) {
                        this.getFireStock();
                        this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                        });
                    }
                });
            }
        });
    }
};
CalculatedBuildingComponent.ctorParameters = () => [
    { type: _static_pages_calculated_building_services_calculated_building_service__WEBPACK_IMPORTED_MODULE_3__.FireContentService },
    { type: _static_pages_calculated_building_services_calculated_building_service__WEBPACK_IMPORTED_MODULE_3__.FirePLantService },
    { type: _static_pages_calculated_building_services_calculated_building_service__WEBPACK_IMPORTED_MODULE_3__.FireStockService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
CalculatedBuildingComponent.propDecorators = {
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CalculatedBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-calculated-building',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calculated_building_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coverage_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coverage-view.component.html */ 64923);
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
        this.optionId = this.optionId ? this.optionId : this.resourcesId;
        if (this.product.coverages && this.product.coverages.length > 0) {
            this.coverage = {
                sumInsured: this.product.coverages[0].sumInsured,
                unit: this.product.coverages[0].unit,
                premium: this.product.coverages[0].premium,
            };
            for (const item of this.product.coverages) {
                let response = {};
                if (this.resourcesId) {
                    this.coverageQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise().then((response) => {
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
                            response = yield this.coverageQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise().catch(e => e);
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
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    optionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CoverageViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-coverage-view',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coverage_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_griph_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./education-life-griph-view.component.html */ 38627);
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
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_griph_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./education-life-view.component.html */ 50218);
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
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_griph_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./endo-griph-view.component.html */ 71698);
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
        if (this.parentData.length > 0) {
            this.chartOptions.yaxis.max = parseInt(this.parentData[0].benefit);
        }
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
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_griph_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./endo-view.component.html */ 35564);
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
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_building_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-building.component.html */ 16414);
/* harmony import */ var _fire_building_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-building.component.scss */ 89876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _static_pages_surrounding_building_models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static-pages/surrounding-building/models&services/surrounding-building.service */ 29673);






let FireBuildingComponent = class FireBuildingComponent {
    constructor(SurroundingBuildingService, alertService) {
        this.SurroundingBuildingService = SurroundingBuildingService;
        this.alertService = alertService;
        this.riskId = 0;
        this.surrounding = [];
    }
    ngOnInit() {
    }
    onActionView(data, type) {
        // console.log("data", data, "type", type)
        if (type == 'delete') {
            this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
                if (result) {
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
            });
        }
    }
};
FireBuildingComponent.ctorParameters = () => [
    { type: _static_pages_surrounding_building_models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_3__.SurroundingBuildingService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
FireBuildingComponent.propDecorators = {
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
FireBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fire-building',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_building_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-page-view.component.html */ 84027);
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
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_risk_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-risk-view.component.html */ 98174);
/* harmony import */ var _fire_risk_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-risk-view.component.scss */ 97150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_pages_fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static-pages/fire-risk/models&services/fire-risk.service */ 66977);







let FireRiskViewComponent = class FireRiskViewComponent {
    constructor(fireRiskService, fireRsikService, productSerice, addonQuo, cdf) {
        this.fireRiskService = fireRiskService;
        this.fireRsikService = fireRsikService;
        this.productSerice = productSerice;
        this.addonQuo = addonQuo;
        this.cdf = cdf;
        this.premiumAmt = "";
        this.listData = [];
        this.totalPremium = 0;
        this.totalSi = 0;
        this.riskData = [];
        this.addOnData = [] = [];
    }
    ngOnInit() {
        this.getRiskList();
        this.getRiskDetail();
    }
    getRiskList() {
        this.fireRiskService.getMany(this.resourcesId).toPromise().then((res) => {
            // console.log(res);
            if (res) {
                this.listData = res;
            }
        });
    }
    getRiskDetail() {
        this.fireRsikService.getMany(this.resourcesId).toPromise().then((res) => {
            if (res) {
                this.riskData = res;
                console.log("riskDetail", this.listData);
                for (let data of this.listData) {
                    this.totalPremium += parseInt(data.premium);
                    this.totalSi += parseInt(data.riskSi);
                }
                console.log(this.totalPremium, this.totalSi);
                this.getAddonCover();
            }
        });
    }
    getAddonCover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.product = this.productSerice.createingProd || this.productSerice.selectedProd;
            console.log(this.product, this.listData);
            let count = 0;
            for (let riskID of this.listData) {
                count += 1;
                let obj = {
                    description: riskID.buildingDescription,
                    premium: 0
                };
                for (const item of this.product.addOns) {
                    this.optionId = riskID.id;
                    try {
                        if (this.resourcesId) {
                            this.additionalData = yield this.addonQuo.getOne(item.id, this.resourcesId, this.optionId).toPromise();
                            // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
                            //   console.log("response",response);
                            console.log("response", this.additionalData);
                            if (this.additionalData) {
                                obj[item.code] = this.additionalData.premium || 0;
                                obj.premium += parseInt(this.additionalData.premium);
                            }
                            else {
                                obj[item.code] = 0;
                            }
                            // })
                        }
                    }
                    catch (error) {
                    }
                }
                console.log("ADDON", obj);
                this.addOnData.push(obj);
                console.log("ADDONDATA", this.addOnData);
                if (count == this.listData.length)
                    this.cdf.detectChanges();
            }
        });
    }
};
FireRiskViewComponent.ctorParameters = () => [
    { type: _static_pages_fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_4__.FireRiskService },
    { type: _static_pages_fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_4__.FireRiskService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_2__.AddOnQuoService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef }
];
FireRiskViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
FireRiskViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-fire-risk-view',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_risk_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_quo_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./health-quo-view.component.html */ 14392);
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
                response = yield this.addOnQuoService.getOne(addon.id, this.tempResourcesId, this.tempResourcesId).toPromise();
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
                response = yield this.coverageQuoService.getOne(coverage.id, this.tempResourcesId, this.tempResourcesId).toPromise();
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
                    if (res[0].paymentTerm == "L") {
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
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_quo_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_health_quo_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HealthQuoViewComponent);



/***/ }),

/***/ 91445:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/motor-addon-view/motor-addon-view.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotorAddonViewComponent": () => (/* binding */ MotorAddonViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_motor_addon_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./motor-addon-view.component.html */ 51844);
/* harmony import */ var _motor_addon_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motor-addon-view.component.scss */ 7900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ 29621);
/* harmony import */ var src_app_core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/global-fun.service */ 73762);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/is-json */ 47975);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);










let MotorAddonViewComponent = class MotorAddonViewComponent {
    constructor(globalFun, prodService) {
        this.globalFun = globalFun;
        this.prodService = prodService;
        this.primary = 'primary';
        this.isMedical = false;
        this.isCross = false;
        this.planOption = 'basic';
        this.planOptionOption = [
            {
                code: 'basic', value: 'Basic Plan'
            },
            {
                code: 'special', value: 'Special Plan'
            },
        ];
        this.option1 = "Digital Source Place";
        this.option2 = "Digital Destination Place";
        this.parentData = {};
        this.addOnsData = {};
    }
    ngOnInit() {
    }
    toggleChange(type) {
        if (type == 'medical') {
            this.isMedical = this.isMedical;
            this.changePlan();
            // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
            // console.log(this.premium);
        }
        if (type == 'cross') {
            this.isCross = this.isCross;
        }
    }
    changePlan() {
        if (this.planOption == 'basic') {
            // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
        }
        else {
            // this.premium =  this.globalFun.motorMedicalExpense(this.parentData)
        }
    }
};
MotorAddonViewComponent.ctorParameters = () => [
    { type: src_app_core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__.ProductDataService }
];
MotorAddonViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
MotorAddonViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-motor-addon-view',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_motor_addon_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_3__.MY_FORMATS },
        ],
        styles: [_motor_addon_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MotorAddonViewComponent);



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
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_simple_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./simple-page-view.component.html */ 93342);
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
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_simple_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addon-view/addon-view.component */ 17555);
/* harmony import */ var _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-view/coverage-view.component */ 49836);
/* harmony import */ var _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-life-view/education-life-view.component */ 71526);
/* harmony import */ var _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endo-griph-view/endo-griph-view.component */ 79938);
/* harmony import */ var _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endo-view/endo-view.component */ 72965);
/* harmony import */ var _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fire-page-view/fire-page-view.component */ 86205);
/* harmony import */ var _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-risk-view/fire-risk-view.component */ 56777);
/* harmony import */ var _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-quo-view/health-quo-view.component */ 65572);
/* harmony import */ var _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simple-page-view/simple-page-view.component */ 9217);
/* harmony import */ var _travel_page_view_travel_page_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./travel-page-view/travel-page-view.component */ 16505);












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
    'static_1648784270356': _travel_page_view_travel_page_view_component__WEBPACK_IMPORTED_MODULE_9__.TravelViewComponent,
    // 'static_1648784270432':MotorAddonViewComponent
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef }
];
StaticPageViewDirective.propDecorators = {
    compId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
StaticPageViewDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _static_pages_reivew_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-pages-reivew.directive */ 38026);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 63387);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page-view/simple-page-view.component */ 9217);
/* harmony import */ var _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addon-view/addon-view.component */ 17555);
/* harmony import */ var _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coverage-view/coverage-view.component */ 49836);
/* harmony import */ var _education_life_griph_view_education_life_griph_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education-life-griph-view/education-life-griph-view.component */ 42964);
/* harmony import */ var _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education-life-view/education-life-view.component */ 71526);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-apexcharts */ 10407);
/* harmony import */ var _fire_building_fire_building_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fire-building/fire-building.component */ 53485);
/* harmony import */ var _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculated-building/calculated-building.component */ 39425);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fire-risk-view/fire-risk-view.component */ 56777);
/* harmony import */ var _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fire-page-view/fire-page-view.component */ 86205);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-currency */ 40287);
/* harmony import */ var _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./endo-griph-view/endo-griph-view.component */ 79938);
/* harmony import */ var _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./endo-view/endo-view.component */ 72965);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 50174);
/* harmony import */ var _motor_addon_view_motor_addon_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./motor-addon-view/motor-addon-view.component */ 91445);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./health-quo-view/health-quo-view.component */ 65572);
/* harmony import */ var _travel_page_view_travel_page_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./travel-page-view/travel-page-view.component */ 16505);



























let StaticPagesViewModule = class StaticPagesViewModule {
};
StaticPagesViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [
            _static_pages_reivew_directive__WEBPACK_IMPORTED_MODULE_0__.StaticPageViewDirective,
            _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_2__.SimplePageViewComponent,
            _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_3__.AddonViewComponent,
            _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_4__.CoverageViewComponent,
            _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_14__.HealthQuoViewComponent,
            _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_6__.EducationLifeViewComponent,
            _education_life_griph_view_education_life_griph_view_component__WEBPACK_IMPORTED_MODULE_5__.EducationLifeGripViewComponent,
            _fire_building_fire_building_component__WEBPACK_IMPORTED_MODULE_7__.FireBuildingComponent,
            _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_8__.CalculatedBuildingComponent,
            _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_9__.FireRiskViewComponent,
            _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_10__.FirePageViewComponent,
            _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_11__.EndoGripViewComponent,
            _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_12__.EndoViewComponent,
            _motor_addon_view_motor_addon_view_component__WEBPACK_IMPORTED_MODULE_13__.MotorAddonViewComponent,
            _travel_page_view_travel_page_view_component__WEBPACK_IMPORTED_MODULE_15__.TravelViewComponent
        ],
        exports: [
            _static_pages_reivew_directive__WEBPACK_IMPORTED_MODULE_0__.StaticPageViewDirective,
            _simple_page_view_simple_page_view_component__WEBPACK_IMPORTED_MODULE_2__.SimplePageViewComponent,
            _addon_view_addon_view_component__WEBPACK_IMPORTED_MODULE_3__.AddonViewComponent,
            _coverage_view_coverage_view_component__WEBPACK_IMPORTED_MODULE_4__.CoverageViewComponent,
            _health_quo_view_health_quo_view_component__WEBPACK_IMPORTED_MODULE_14__.HealthQuoViewComponent,
            _education_life_view_education_life_view_component__WEBPACK_IMPORTED_MODULE_6__.EducationLifeViewComponent,
            _education_life_griph_view_education_life_griph_view_component__WEBPACK_IMPORTED_MODULE_5__.EducationLifeGripViewComponent,
            _fire_page_view_fire_page_view_component__WEBPACK_IMPORTED_MODULE_10__.FirePageViewComponent,
            _fire_risk_view_fire_risk_view_component__WEBPACK_IMPORTED_MODULE_9__.FireRiskViewComponent,
            _endo_griph_view_endo_griph_view_component__WEBPACK_IMPORTED_MODULE_11__.EndoGripViewComponent,
            _endo_view_endo_view_component__WEBPACK_IMPORTED_MODULE_12__.EndoViewComponent,
            _motor_addon_view_motor_addon_view_component__WEBPACK_IMPORTED_MODULE_13__.MotorAddonViewComponent,
            _travel_page_view_travel_page_view_component__WEBPACK_IMPORTED_MODULE_15__.TravelViewComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModalModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDatepickerModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_24__.NgApexchartsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgSelectModule,
            ngx_currency__WEBPACK_IMPORTED_MODULE_26__.NgxCurrencyModule
        ]
    })
], StaticPagesViewModule);



/***/ }),

/***/ 16505:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/travel-page-view/travel-page-view.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelViewComponent": () => (/* binding */ TravelViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_travel_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./travel-page-view.component.html */ 61387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _static_pages_static_pages_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-pages/static-pages.data */ 6920);
/* harmony import */ var _static_pages_travel_page_models_services_travel_risk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static-pages/travel-page/models&services/travel-risk.service */ 37780);






let TravelViewComponent = class TravelViewComponent {
    constructor(travelRikService, cdf, globalFun) {
        this.travelRikService = travelRikService;
        this.cdf = cdf;
        this.globalFun = globalFun;
        this.travelForm = [];
        this.listData = [];
    }
    ngOnInit() {
        this.getRiskList();
    }
    getRiskList() {
        this.travelRikService.getMany(this.resourcesId).toPromise().then((res) => {
            if (res) {
                this.globalFun.tempFormData[_static_pages_static_pages_data__WEBPACK_IMPORTED_MODULE_2__.TRAVELID] = res;
                this.listData = res || [];
                this.cdf.detectChanges();
            }
        });
    }
    replaceT(stringVal) {
        return stringVal.replace("T-", "").replace("TU-", "");
    }
};
TravelViewComponent.ctorParameters = () => [
    { type: _static_pages_travel_page_models_services_travel_risk_service__WEBPACK_IMPORTED_MODULE_3__.TravelRiskService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_1__.GlobalFunctionService }
];
TravelViewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    referenceID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    travelForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
TravelViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-travel-risk-view',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_travel_page_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], TravelViewComponent);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Basic Coverage :</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <div class=\"table-responsive angular-bootstrap-table\">\n      <table class=\"table table-head-custom table-vertical-center\">\n        <thead>\n          <tr>\n            <th style=\"text-align: left;\">\n              Basic Coverage\n            </th>\n            <th *ngIf=\"coverage.sumInsured\" style=\"text-align: right;\">\n              Sum Insured\n            </th>\n            <th *ngIf=\"coverage.unit\" style=\"text-align: right;\">\n              Unit\n            </th>\n            <th *ngIf=\"coverage.premium\" style=\"text-align: right;\">\n              Premium\n            </th>\n          </tr>\n        </thead>\n        <tbody class=\"tbody-align\">\n          <ng-container *ngFor=\"let coverage of product.coverages;let i = index\">\n            <tr *ngIf=\"coverageData[coverage.id]\">\n              <td style=\"text-align: left;\">{{coverage.description}}</td>\n              <td *ngIf=\"coverage.sumInsured\">\n                <!-- <ng-container *ngIf=\"coverageData[coverage.id]\"> -->\n                {{coverageData[coverage.id].sum > 0 ? (coverageData[coverage.id].sum | number) :\n                coverageData[coverage.id].sum}}\n                <!-- </ng-container> -->\n              </td>\n              <td *ngIf=\"coverage.unit\">\n                {{coverageData[coverage.id] ? coverageData[coverage.id].unit : 0}}\n              </td>\n              <td *ngIf=\"coverage.premium\">\n                <!-- <ng-container *ngIf=\"coverageData[coverage.id]\"> -->\n                {{coverageData[coverage.id].premium > 0 ? (coverageData[coverage.id].premium | number) :\n                coverageData[coverage.id].premium}}\n                <!-- </ng-container> -->\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Benefit Illustration</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>End of Policy Year</th>\n          <th>Age</th>\n          <th style=\"text-align: right;\">Premium Paid</th>\n          <th style=\"text-align: right;\">Death/PTD Benefit</th>\n          <th style=\"text-align: right;\">Surrender Value</th>\n          <th style=\"text-align: right;\">Maturity Benefit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of showDatas;let i = index\">\n          <td>{{item.endOfPolicyYear}}</td>\n          <td>{{item.age}}</td>\n          <td style=\"text-align: right;\">{{(item.premiumPaid | number) || \"-\"}}</td>\n          <td style=\"text-align: right;\">{{item.deathBenefit | number}}</td>\n          <td style=\"text-align: right;\">{{(item.surrenderValue | number) || \"-\"}}</td>\n          <td style=\"text-align: right;\">{{(item.maturityBenefit | number) || \"-\"}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <hr class=\"mb-5\">\n    <ng-container *ngIf=\"showDatas.length > 0\">\n      <app-education-life-grip-view [parentData]=\"showDatas\"></app-education-life-grip-view>\n    </ng-container>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Benefit Illustration</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>End of Policy Year</th>\n          <th>Age</th>\n          <th style=\"text-align: right;\">Premium Paid</th>\n          <th style=\"text-align: right;\">Death/PTD Benefit</th>\n          <th style=\"text-align: right;\">Surrender Value</th>\n          <th style=\"text-align: right;\">Policy Loan</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of showDatas;let i = index\">\n          <td>{{item.endOfPolicyYear}}</td>\n          <td>{{item.age}}</td>\n          <td style=\"text-align: right;\">{{(item.premiumPaid | number) || \"-\"}}</td>\n          <td style=\"text-align: right;\">{{item.benefit | number}}</td>\n          <td style=\"text-align: right;\">{{(item.surrenderValue | number) || \"-\"}}</td>\n          <td style=\"text-align: right;\">{{(item.policyLoan | number) || \"-\"}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <hr class=\"mb-5\">\n    <ng-container *ngIf=\"showDatas.length > 0\">\n      <app-endo-grip-view [parentData]=\"showDatas\"></app-endo-grip-view>\n    </ng-container>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Fire Risk</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <div class=\"table-responsive angular-bootstrap-table\">\n      <table class=\"table table-head-custom table-vertical-center fire-table\">\n        <thead>\n          <tr>\n            <th>Building Description</th>\n            <th style=\"text-align: right;\">Sum Insured</th>\n            <th style=\"text-align: right;\">Premium </th>\n            <!-- <th>Other Building </th> -->\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let item of listData\">\n            <tr>\n              <td>{{item.buildingDescription}}</td>\n              <td style=\"text-align: right;\">{{item.riskSi | number}}</td>\n              <td style=\"text-align: right;\">{{item.premium | number}}</td>\n              <!-- <td>\n                <span class=\"text-primary\" style=\"text-decoration: underline;white-space: nowrap;cursor: pointer;\"\n                  (click)=\"createPolicyBtn(item)\">Other Info</span>\n              </td> -->\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div> \n\n\n<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Risk Detail Information</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <div class=\"table-responsive angular-bootstrap-table\">\n      <table class=\"table table-head-custom table-vertical-center fire-table\">\n        <thead>\n          <tr>\n            <th>\n              Building Description \n            </th>\n            <th>\n              Type of Building\n            </th>\n            <th>\n              Occupation of Building\n            </th>\n            <th>\n              Building Class\n            </th>\n            <th>\n             Total Square Feet\n            </th>\n            <th>\n              Year of Construction \n            </th>\n            <th>\n              Proposed Building SI\n            </th>\n            <th>\n              Proposed Furniture\n            </th>\n            <th>\n              Proposed Machinery SI\n            </th>\n            <th>\n              Proposed Stock SI\n            </th>\n            <th>\n              Total SI\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let data of listData;\">\n            <tr>\n              <td>{{data.buildingDescription}}</td>\n              <td>{{data.typeOfBuildingValue}}</td>\n              <td>{{data.occupationOfBuildingValue}}</td>\n              <td>{{data.buildingClassValue}}</td>\n              <td>{{data.totalSquareFoot}}</td>\n              <td>{{data.yearOfConstruction}}</td>\n              <td>{{data.buildingSi}}</td>\n              <td>{{data.proposedFurniture}}</td>\n              <td>{{data.proposedMachinerySI}}</td>\n              <td>{{data.proposeStockValue}}</td>\n              <td>{{data.riskSi | number}}</td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div> \n\n\n<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Additional Cover Information</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <div class=\"table-responsive angular-bootstrap-table\">\n      <table class=\"table table-head-custom table-vertical-center fire-table\">\n        <thead>\n          <tr>\n            <th class=\"field-col\">\n              Building Description\n            </th>\n            <th class=\"field-col\">\n              Fire Premium\n            </th>\n            <th class=\"field-col\">\n              STHTC\n            </th>\n            <th class=\"field-col\">\n              Impact Damage\n            </th>\n            <th class=\"field-col\">\n              RSMD\n            </th>\n            <th class=\"field-col\">\n              Burglary\n            </th>\n            <th class=\"field-col\">\n              Air Craft Damage\n            </th>\n            <th class=\"field-col\">\n              EQ\n            </th>\n            <th class=\"field-col\">\n              Spontaneous Combus\n            </th>\n            <th class=\"field-col\">\n              Subsidence and Landslid\n            </th>\n            <th class=\"field-col\">\n              War Risk\n            </th>\n            <th class=\"field-col\">\n              Explosion \n            </th>\n            <th class=\"field-col\">\n              Flood and Inundati \n            </th>\n            <th class=\"field-col\">\n              Total Premium \n            </th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"addOnData.length>0\">\n          <ng-container *ngFor=\"let data of addOnData;\">\n            <tr>\n              <td >{{data.description}}</td>\n              <td >{{data.firepremium || 0}}</td>\n              <td >{{data.STHTC}}</td>\n              <td >{{data.IMPD}}</td>\n              <td >{{data.RSMD}}</td>\n              <td >{{data.BURGLARY}}</td>\n              <td >{{data.ACD}}</td>\n              <td >{{data.EQ}}</td>\n              <td >{{data.SPONTCOMB}}</td>\n              <td >{{data.SUBLSLD}}</td>\n              <td >{{data.WARRISK}}</td>\n              <td >{{data.EXPLOSION}}</td>\n              <td >{{data.FLOOD}}</td>\n              <td >{{data.premium}}</td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div> \n");

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

/***/ 51844:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/motor-addon-view/motor-addon-view.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"form-group\">\n    <div class=\"row\" style=\"align-items: center;\">\n        <div class=\"col-sm-6\">\n            <label class=\"col-sm-6 text-bold \">Optional Covers</label>\n        </div>\n    </div>\n    <hr>\n    <div>\n        <div class=\"row\" style=\"align-items: center;\">\n\n            <div class=\"col-sm-6\">\n                <label class=\"col-sm-6 text-bold left-border-image\">Medical Expense</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isMedical\" [disabled]=\"true\" [color]=\"primary\" class=\"toggle ft-right\" (toggleChange)=\"toggleChange('medical')\"></mat-slide-toggle>\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"align-items: center; margin-top: 10px;\" *ngIf=\"isMedical\">\n            <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-8\">\n                        <ng-select class=\"ng-custom-select\" [disabled]=\"true\" [(ngModel)]=\"planOption\" (toggleChange)=\"changePlan()\" [items]=\"planOptionOption\" bindLabel=\"value\" bindValue=\"code\">\n                        </ng-select>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <label class=\"col-sm-12  text-bold\">Premium : <span>${{premium}}</span></label>\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"align-items: center; margin-top: 10px;\">\n\n            <div class=\"col-sm-6\">\n                <label class=\"col-sm-6 text-bold left-border-image\">Cross Border</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isCross\" [color]=\"primary\" class=\"toggle ft-right\" (change)=\"toggleChange('cross')\"></mat-slide-toggle>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\" style=\"align-items: center; margin-top: 10px;\" *ngIf=\"isCross\">\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">Start Date</label>\n                <div class=\"col-sm-8\">\n                    <div class=\"input-group input-group-sm \">\n                        <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" [(ngModel)]=\"startDate\" [matDatepicker]=\"start\" readonly>\n                        <mat-datepicker-toggle matSuffix [for]=\"start\"></mat-datepicker-toggle>\n                        <mat-datepicker #start disabled=\"false\"></mat-datepicker>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">End Date</label>\n                <div class=\"col-sm-8\">\n                    <div class=\"input-group input-group-sm \">\n                        <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" [(ngModel)]=\"endDate\" [matDatepicker]=\"end\" readonly>\n                        <mat-datepicker-toggle matSuffix [for]=\"end\"></mat-datepicker-toggle>\n                        <mat-datepicker #end disabled=\"false\"></mat-datepicker>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" style=\"align-items: center; margin-top: 10px;\" *ngIf=\"isCross\">\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">Source Place</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"option1\" autocomplete=\"off\" [disabled]=\"true\" [(ngModel)]=\"option1\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">Destination Place</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"option2\" autocomplete=\"off\" [disabled]=\"true\" [(ngModel)]=\"option2\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-12  text-bold\">Premium : <span>${{premium}}</span></label>\n            </div>\n        </div>\n    </div>\n</div>\n<hr>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <h3 class=\"card-label\">Health Product Details :</h3>\n    </div>\n  </div>\n  <div class=\"card-body customer-card-body\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        Period of Insurance (From) :\n        <span> {{showData.insuranceStartDate | date : \"dd/MM/yyyy\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Period of Insurance (To) :\n        <span> {{showData.insuranceEndDate | date : \"dd/MM/yyyy\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Basic Cover :\n        <span> {{showData.basicCoverId == \"HEALTH\" ? \"Health Insurance\" : \"Critical Illness\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Date of Birth :\n        <span> {{showData.dateOfBirth | date : \"dd/MM/yyyy\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Payment Frequency :\n        <span> {{showData.paymentFrequency == 'L' ? \"Lump Sum\" : \"Semi-Annually\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Sum Insured of Main Cover :\n        <span> {{showData.sumInsuredMainCover}} Unit{{showData.sumInsuredMainCover > 1 ? \"s\":\"\"}}</span>\n      </li>\n      <li class=\"list-group-item\">\n        Medical Card No :\n        <span> {{showData.medicalCardNo}}</span>\n      </li>\n      <!--  -->\n    </ul>\n  </div>\n</div>");

/***/ }),

/***/ 61387:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-page-review/travel-page-view/travel-page-view.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom gutter-b\">\n    <div class=\"card-body customer-card-body\">\n        <div class=\"table-responsive angular-bootstrap-table mt-5\">\n            <table class=\"table table-head-custom table-vertical-center\">\n                <thead>\n                    <tr>\n                        <th>Risk No</th>\n                        <th>Travel Plan</th>\n                        <th>Insured Unit</th>\n                        <th>Travel Duration</th>\n                        <th>No. Of Traveller</th>\n                        <th>Total Unit</th>\n                        <th>Traveller Name</th>\n                        <th>Premium</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngFor=\"let item of listData;let i = index\">\n                        <tr>\n                            <td>{{ i+ 1 }}</td>\n                            <td>{{replaceT(item.travelPlan) | titlecase}}</td>\n                            <td>{{replaceT(item.insuredUnit) | titlecase}}</td>\n                            <td>{{replaceT(item.travelDuration) | titlecase}}</td>\n                            <td>{{item.noOfTraveller}}</td>\n                            <td>{{item.totalUnit}}</td>\n                            <td>{{item.travellerName}}</td>\n                            <td>{{item.premium | number}}</td>\n                           \n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>");

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

/***/ 7900:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/static-page-review/motor-addon-view/motor-addon-view.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.icon {\n  position: relative;\n  border: none;\n  margin: 0;\n  font-size: 1.5rem;\n  background-color: transparent;\n}\n.add {\n  top: -11px;\n  position: relative;\n  border: none;\n  background: #f2f2f2;\n  margin: 0;\n}\n.add button {\n  position: absolute;\n  top: -52px;\n  right: 78px;\n  width: 110px;\n}\n.btn-box {\n  text-align: end;\n}\n.btn-box input {\n  position: absolute;\n  width: 127%;\n  height: 100%;\n  opacity: 0;\n}\nh2 {\n  font-size: 13px;\n  color: #005ca2;\n  background: #F2F2F2;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  margin-top: 24px;\n  padding: 12px 24px 1px 24px;\n}\nh2 span {\n  position: absolute;\n  right: 14px;\n  top: 5px;\n}\nh2 img {\n  width: 6px;\n  height: 12px;\n  float: left;\n}\nh2 p {\n  font-size: 12px;\n  padding-left: 18px;\n}\n.tab-div {\n  position: relative;\n  padding: 20px 0 0 0;\n  background: #d1d7e2;\n  border-bottom: 1px solid #d2d2d2;\n  margin: -10px 0 0 0;\n}\n.tab-div button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdG9yLWFkZG9uLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFBUjtBQUlBO0VBQ0ksY0FBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0FBREo7QUFJQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBRko7QUFLQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGSjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFEUjtBQUtBO0VBQ0ksZUFBQTtBQUZKO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURSO0FBS0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQURSO0FBR0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFEUjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURSIiwiZmlsZSI6Im1vdG9yLWFkZG9uLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xuICAgIC5mb3JtLWNvbnRyb2wtc20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNkVGO1xuICAgICAgICBwYWRkaW5nOiAwcHggMC43NXJlbTtcbiAgICB9XG4gICAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pY29uIHtcbiAgICAvLyB0b3A6IC04cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hZGQge1xuICAgIHRvcDogLTExcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1hcmdpbjogMDtcbiAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTUycHg7XG4gICAgICAgIHJpZ2h0OiA3OHB4O1xuICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgfVxufVxuXG4uYnRuLWJveCB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTI3JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzAwNWNhMjtcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgcGFkZGluZzogMTJweCAyNHB4IDFweCAyNHB4O1xuICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNHB4O1xuICAgICAgICB0b3A6IDVweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgIH1cbn1cblxuLnRhYi1kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICAgIGJhY2tncm91bmQ6ICNkMWQ3ZTI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgbWFyZ2luOiAtMTBweCAwIDAgMDtcbiAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxufSJdfQ== */";

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