"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-kbz-ms-manager_dashboard-kbz-ms-manager_module_ts"],{

/***/ 43558:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsManagerPageRoutingModule": () => (/* binding */ DashboardKbzMsManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dashboard_kbz_ms_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager.page */ 24324);




const routes = [
    {
        path: '',
        component: _dashboard_kbz_ms_manager_page__WEBPACK_IMPORTED_MODULE_0__.DashboardKbzMsManagerPage
    }
];
let DashboardKbzMsManagerPageRoutingModule = class DashboardKbzMsManagerPageRoutingModule {
};
DashboardKbzMsManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardKbzMsManagerPageRoutingModule);



/***/ }),

/***/ 28373:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsManagerPageModule": () => (/* binding */ DashboardKbzMsManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _dashboard_kbz_ms_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager-routing.module */ 43558);
/* harmony import */ var _dashboard_kbz_ms_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager.page */ 24324);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 10407);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);









let DashboardKbzMsManagerPageModule = class DashboardKbzMsManagerPageModule {
};
DashboardKbzMsManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_2__.LanguageModule,
            _dashboard_kbz_ms_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardKbzMsManagerPageRoutingModule
        ],
        declarations: [_dashboard_kbz_ms_manager_page__WEBPACK_IMPORTED_MODULE_1__.DashboardKbzMsManagerPage]
    })
], DashboardKbzMsManagerPageModule);



/***/ }),

/***/ 24324:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsManagerPage": () => (/* binding */ DashboardKbzMsManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_kbz_ms_manager_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard-kbz-ms-manager.page.html */ 73329);
/* harmony import */ var _dashboard_kbz_ms_manager_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager.page.scss */ 61403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 69380);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-kbz-ms-senior/dashboard.service */ 75199);











let DashboardKbzMsManagerPage = class DashboardKbzMsManagerPage {
    constructor(platform, cdf, route, auth, dashboardService, router) {
        this.platform = platform;
        this.cdf = cdf;
        this.route = route;
        this.auth = auth;
        this.dashboardService = dashboardService;
        this.router = router;
        this.agentLineChartCategories = [];
        this.agentLineChartDatas = [];
        this.leadObj = {};
        this.currentMonthIndex = new Date().getUTCMonth();
        this.currentYear = new Date().getUTCFullYear();
        this.months = [
            'JAN',
            'FEB',
            'Mar',
            'APR',
            'MAY',
            'JUL',
            'AUG',
            'SEP',
            'OCT',
            'NOV',
            'DEC',
        ];
        this.todayActiveAgent = 0;
        this.DEFAULT_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/attachment-downloader`;
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (params.empId) {
                this.id = JSON.parse(params.empId);
                this.loadForm();
            }
            else {
                this.id = this.auth.currentUserValue.id;
                this.loadForm();
            }
        }));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.getList();
            this.getLeadList();
            this.getAgentList();
            this.radioW = this.platform.width();
            this.radioH = this.platform.height();
            this.calculateMainContentHeight(this.radioW, this.radioH);
        });
    }
    loadForm() {
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            empId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.id),
        });
    }
    getList() {
        this.dashboardService
            .getList(this.actForm.value)
            .toPromise()
            .then((res) => {
            if (res) {
                this.data = res;
                this.setChartOptions('agent');
                this.cdf.detectChanges();
            }
        });
    }
    getLeadList() {
        this.dashboardService
            .getLeadList(this.actForm.value)
            .toPromise()
            .then((res) => {
            if (res) {
                this.leadObj = res;
                this.todayActiveAgent = res.todayActiveAgent;
                this.setChartOptions('lead');
                this.cdf.detectChanges();
            }
        });
    }
    getAgentList() {
        // this.agentLineChartCategories = this.agentLineChartDatas = [];
        this.dashboardService.getAgentList(this.actForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((res) => {
            let weeks = [];
            let data = [];
            res.weeklyActiveAgents.map((x) => {
                weeks.push(x.weekNo);
                data.push(parseInt(x.noOfActiveAgent));
            });
            return Object.assign(Object.assign({}, res), { data, weeks });
        })).toPromise().then((res) => {
            console.log(res);
            if (res) {
                this.agentLineChart = res;
                this.todayActiveAgent = res.todayNoOfActiveAgent;
                this.agentLineChartCategories = res.weeks;
                this.agentLineChartDatas = res.data;
                // this.agentLineChart = res;
                // this.agentLineChart.weeklyActiveAgents.map(a=> {
                //   this.agentLineChartCategories.push(a.weekNo);
                //   this.agentLineChartDatas.push(parseInt(a.noOfActiveAgent));
                // })
                // res.data.reduce((acc, shot) => acc = acc > shot.amount ? acc : shot.amount, 0);
                let max = Math.max(...this.agentLineChartDatas);
                this.setChartOptions('agent');
                this.cdf.detectChanges();
            }
        });
    }
    ngOnDestroy() { }
    goToLPDashboard(agent) {
        this.router.navigate(['/dashboard/lp-dashboard'], {
            queryParams: { empId: agent.empId },
        });
    }
    goToSalePolicies() {
        this.router.navigate(['/sales/application/list']);
    }
    goToActivities() {
        this.router.navigate(['activity/activity-management-list']);
    }
    setChartOptions(type) {
        let key = type == 'lead' ? 'chartOptions' : 'chartOptionsAgent';
        let maxAg = Math.max(...this.agentLineChartDatas);
        this[key] = (type == 'lead' ?
            {
                series: [
                    {
                        name: "",
                        data: [type == 'lead' ? this.leadObj.leadWinCount : this.data.converted, type == 'lead' ? this.leadObj.leadAssignCount
                                : this.data.assigned]
                    }
                ],
                chart: {
                    toolbar: {
                        show: false
                    },
                    height: this.chartH - 20,
                    type: "bar",
                    events: {
                        click: function (w, e) {
                        }
                    }
                },
                colors: [
                    "#008FFB",
                    "#00E396",
                    "#FEB019",
                    "#FF4560",
                    "#775DD0",
                    "#546E7A",
                    "#26a69a",
                    "#D10CE8"
                ],
                yaxis: {
                    tickAmount: 5,
                    min: 0,
                    max: type == 'lead' ? this.leadObj.leadAssignCount || 10 : this.data.assigned || 10,
                    labels: {
                        style: {
                            fontSize: "0.79rem",
                            fontFamily: "Roboto"
                        }
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                grid: {
                    show: true
                },
                xaxis: {
                    categories: [
                        ["Converted", type == 'lead' ? this.leadObj.leadWinCount : this.data.converted],
                        ["Assigned", type == 'lead' ? this.leadObj.leadAssignCount : this.data.assigned],
                    ],
                    labels: {
                        style: {
                            colors: [
                                "#008FFB",
                                "#00E396",
                                "#FEB019",
                                "#FF4560",
                                "#775DD0",
                                "#546E7A",
                                "#26a69a",
                                "#D10CE8"
                            ],
                            fontSize: "12px"
                        }
                    }
                }
            } :
            {
                series: [
                    {
                        name: "",
                        data: this.agentLineChartDatas,
                        color: "#005f99"
                    }
                ],
                chart: {
                    height: this.chartH - 20,
                    // width: 280,
                    type: "line",
                    toolbar: {
                        show: false
                    }
                },
                title: {
                    text: "",
                    offsetX: 0,
                    offsetY: 10,
                    floating: false,
                    style: {
                        fontSize: "0.79rem",
                        fontFamily: "Roboto"
                    }
                },
                xaxis: {
                    type: 'category',
                    categories: this.agentLineChartCategories,
                    labels: {
                        style: {
                            fontSize: "0.79rem",
                            fontFamily: "Roboto"
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: maxAg > 10 ? maxAg : 10,
                    tickAmount: 5,
                    labels: {
                        show: false,
                        style: {
                            fontSize: "0.79rem",
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
                    enabled: false,
                    textAnchor: 'middle',
                    offsetX: -10,
                    offsetY: -5,
                    enabledOnSeries: [0]
                },
                markers: {
                    size: [5, 0, 0],
                }
            });
    }
    onResize(event) {
        this.radioW = event.target.innerWidth;
        this.radioH = event.target.innerHeight;
        this.calculateMainContentHeight(this.radioW, this.radioH);
    }
    calculateMainContentHeight(width, height) {
        let mainContentHeight = 0;
        this.chartH = 0;
        if (width < 1000) {
            mainContentHeight = height - (55 + 58.8 + 65 + 15);
            this.profileHpx = (mainContentHeight / 2) - 15 + 'px';
            this.salesHpx = mainContentHeight - 40 + 'px';
            this.chartH = (mainContentHeight / 3);
            this.thingsHpx = this.chartH - 40 + 'px';
            this.chartHpx = this.chartH + 20 + 'px';
            this.profileImgW = '120px';
            this.profilePadding = '7px';
            this.productPadding = '7px 0';
        }
        else if (width <= 1000 || width < 1200) {
            mainContentHeight = height - (65 + 58 + 65 + 15);
            this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
            this.salesHpx = mainContentHeight - 50 + 'px';
            this.chartH = (mainContentHeight / 3);
            this.thingsHpx = this.chartH - 40 + 'px';
            this.chartHpx = this.chartH + 20 + 'px';
            this.profileImgW = '120px';
            this.profilePadding = '5px';
            this.productPadding = '5px 0';
        }
        else {
            mainContentHeight = height - (65 + 58.8 + 65 + 15);
            this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
            this.salesHpx = mainContentHeight - 50 + 'px';
            this.chartH = (mainContentHeight / 3);
            this.thingsHpx = this.chartH - 40 + 'px';
            this.chartHpx = this.chartH + 20 + 'px';
            this.profileImgW = '120px';
            this.profilePadding = '5px';
            this.productPadding = '5px 0';
        }
        this.mainContentHeight = mainContentHeight;
        this.mainContentHeightPx = mainContentHeight + 'px';
    }
    changeSource(event) {
        event.target.src = "./assets/images/user_profile-01.svg";
    }
};
DashboardKbzMsManagerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
DashboardKbzMsManagerPage.propDecorators = {
    chartAgent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["chartAgent",] }],
    chartLead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["chartLead",] }]
};
DashboardKbzMsManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-dashboard-kbz-ms-manager',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_kbz_ms_manager_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_kbz_ms_manager_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardKbzMsManagerPage);



/***/ }),

/***/ 73329:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dashboard-main\" (window:resize)=\"onResize($event)\" [ngStyle]=\"{'height': mainContentHeightPx }\">\n  <section [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <!-- [ngStyle]=\"{'height': profileHpx}\" -->\n    <div style=\"margin: 0 0 10px 0;\">\n      <div class=\"profile\" [ngStyle]=\"{'padding-bottom': profilePadding}\">\n        <div class=\"img-content\" [ngStyle]=\"{'width': profileImgW,  'height': profileImgW}\">\n          <img *ngIf=\"data?.agentInfo?.attId\" [src]=\"DEFAULT_DOWNLOAD_URL+'/' + data?.agentInfo?.attId\" style=\"width: 100%; height: 100%;\"\n          alt=\"profile\" />  \n          <img *ngIf=\"!data?.agentInfo?.attId\" src=\"./assets/temp-img/manager.jpeg\" alt=\"profile\">          \n\n          <!-- <img src=\"../../../assets/images/dashboard-usr.svg\" alt=\"profile\"> -->\n        </div>\n        <ion-label class=\"title-color\">{{ data?.agentInfo?.employeeName }}</ion-label>\n        <ion-label>{{ data?.role }}</ion-label>\n      </div>\n      <div class=\"premium\" [ngStyle]=\"{'padding': productPadding}\">\n        <ion-label class=\"premuim-color\">{{\"CARD.premium\" | translate}}</ion-label>\n        <ion-label>{{ data?.agentInfo?.totalPremium | number: '1.2-2' }} <span><small>MMK</small></span></ion-label>\n      </div>\n    </div>\n    <div class=\"product\">\n      <h2>{{\"CARD.products\" | translate}}</h2>\n      <ion-list [ngStyle]=\"{'height': profileHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let product of data?.yearlyProductPremium\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\"\n              alt=\"\" srcset=\"\">\n          </ion-thumbnail>\n          <ion-text>{{ product.productName }}</ion-text>\n          <ion-text>{{ product.premium | number: '1.2-2' }} MMK</ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n  <section class=\"sales-performance\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <h2 class=\"title-color\">{{\"CARD.sales_performances\" | translate}}</h2>\n    <div class=\"date\">\n      <div style=\"width: 50%;\">{{ months[currentMonthIndex] }} | Y{{ currentYear }}</div>\n      <!-- <div></div> -->\n      <div><a (click)=\"goToSalePolicies()\">{{\"CARD.all\" | translate}}</a></div>\n    </div>\n    <ion-list *ngIf=\"data && data.subAgentMonthlySale.length > 0\" [ngStyle]=\"{'height': salesHpx}\">\n      <ion-item lines=\"full\" *ngFor=\"let agent of data?.subAgentMonthlySale\" (click)=\"goToLPDashboard(agent)\">\n        <ion-avatar slot=\"start\">\n          <img src=\"./assets/images/user_profile-01.svg\" class=\"user-icon\" alt=\"\" (error)=\"changeSource($event)\" />\n        </ion-avatar>\n        <ion-text>\n          <ion-label class=\"ion-text-wrap\">{{ agent.name }}</ion-label>\n          <ion-label class=\"ion-text-wrap\">{{ agent.premium | number: '1.2-2' }} MMK</ion-label>\n        </ion-text>\n      </ion-item>\n    </ion-list>\n  </section>\n  <section class=\"chart\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': chartHpx}\">\n      <h2 class=\"title-color\">Opportunity Conversion</h2>\n      <div class=\"branch\">\n        <div>{{ data?.agentInfo?.branchName }}</div>\n        <div style=\"font-weight: 600;\">{{ leadObj?.leadWinRate }} %</div>\n      </div>\n      <div id=\"inflation\" *ngIf=\"chartOptions\">\n        <apx-chart [series]=\"chartOptions?.series\" [chart]=\"chartOptions?.chart\" [dataLabels]=\"chartOptions?.dataLabels\"\n          [plotOptions]=\"chartOptions?.plotOptions\" [yaxis]=\"chartOptions?.yaxis\" [xaxis]=\"chartOptions?.xaxis\"\n          [legend]=\"chartOptions?.legend\" [colors]=\"chartOptions?.colors\" [grid]=\"chartOptions?.grid\"></apx-chart>\n      </div>\n    </div>\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': chartHpx}\">\n      <h2 class=\"title-color\">Active Agents Today</h2>\n      <div style=\"font-weight: bold;\">{{ todayActiveAgent }}</div>\n      <div id=\"chart\" style=\"position: relative;\n      top: -15px;\" *ngIf=\"chartOptionsAgent\">\n        <apx-chart [series]=\"chartOptionsAgent.series\" [chart]=\"chartOptionsAgent.chart\"\n          [xaxis]=\"chartOptionsAgent.xaxis\" [yaxis]=\"chartOptionsAgent.yaxis\" [title]=\"chartOptionsAgent.title\"\n          [legend]=\"chartOptionsAgent.legend\" [dataLabels]=\"chartOptionsAgent.dataLabels\"\n          [markers]=\"chartOptionsAgent.markers\"></apx-chart>\n      </div>\n    </div>\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': thingsHpx}\">\n      <h2 class=\"title-color\">{{\"CARD.things_to_followup\" | translate}}</h2>\n      <div class=\"today\">\n        <div>\n          <p>TASK TODAY</p>\n          <p>{{ leadObj.taskToday }}</p>\n        </div>\n        <div>\n          <p>OPPORTUNITY TODAY</p>\n          <p>{{ leadObj.leadToday }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>");

/***/ }),

/***/ 61403:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "div section {\n  width: 33.3333333333%;\n  float: left;\n  display: block;\n  padding: 0 15px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\ndiv section::-webkit-scrollbar {\n  display: none;\n}\n.dashboard-main {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile .img-content {\n  max-width: 124px;\n  max-height: 124px;\n  min-width: 100px;\n  min-height: 100px;\n  background: #b9fded;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 4%;\n}\n.profile ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.profile ion-label:last-child {\n  color: #404040;\n}\n.premium {\n  border-bottom: 1px solid #e3e3e3;\n}\n.premium ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.premium ion-label span {\n  color: #404040;\n}\n.premium ion-label:last-child {\n  color: #404040;\n}\n.title-color {\n  color: #005eaa;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.premuim-color {\n  color: #005eaa;\n}\n.product h2 {\n  font-size: 1rem !important;\n  color: #404040;\n  width: 100%;\n  font-weight: 600;\n}\n.product ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.product ion-list::-webkit-scrollbar {\n  display: none;\n}\nion-list ion-item {\n  padding: 0;\n  position: relative;\n}\nion-list ion-item ion-thumbnail,\nion-list ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  max-width: 40px !important;\n}\nion-list ion-item ion-text {\n  width: 50%;\n  font-size: 0.79rem;\n  padding: 0;\n  color: #404040;\n}\nion-list ion-item ion-text:last-child {\n  text-align: right;\n  position: absolute;\n  right: 0;\n  font-weight: 600;\n}\nion-list ion-item ion-text:last-child ion-label:first-child {\n  font-weight: 100;\n}\nion-list ion-item:last-child {\n  border-bottom: none;\n  --border-width: 0 0 0px 0;\n}\n.sales-performance .date {\n  width: 100%;\n  overflow: hidden;\n}\n.sales-performance .date div {\n  width: 15%;\n  float: left;\n  font-size: 0.79rem;\n  border-right: 1px solid #404040;\n  color: #404040;\n}\n.sales-performance .date div a {\n  cursor: pointer;\n  color: #005eaa;\n}\n.sales-performance .date div:nth-child(2) {\n  width: 25%;\n  padding: 0 6px;\n  text-align: center;\n}\n.sales-performance .date div:last-child {\n  width: 25%;\n  float: right;\n  border-right: none !important;\n  text-align: right;\n}\n.sales-performance ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.sales-performance ion-list::-webkit-scrollbar {\n  display: none;\n}\n.sales-performance ion-list ion-text {\n  text-align: left !important;\n  position: unset !important;\n  width: 100%;\n  font-weight: none !important;\n  color: #404040;\n}\n.chart div {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .sub-chart {\n  border-bottom: 1px solid #e3e3e3;\n  padding: 10px 0 0 0;\n}\n.chart .sub-chart .today {\n  width: 100%;\n  overflow: hidden;\n  padding: 5% 10%;\n}\n.chart .sub-chart .today div {\n  width: 45%;\n  float: left;\n  background: #ff8100;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n.chart .sub-chart .today div p {\n  font-size: 0.79rem;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.chart .sub-chart .today div:last-child {\n  float: right;\n  background: #005eaa;\n}\n.chart .sub-chart:first-child {\n  padding-top: 0;\n}\n.chart .sub-chart:last-child {\n  border-bottom: none !important;\n}\n.chart .branch {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .branch div {\n  width: 50%;\n  float: left;\n  font-size: 0.79rem;\n  color: #404040;\n}\n@media (min-width: 280px) and (max-width: 620px) {\n  section {\n    width: 100% !important;\n    padding: 0 !important;\n    margin: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1rYnotbXMtbWFuYWdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSxxQkFBQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFIUjtBQUlRO0VBQ0ksYUFBQTtBQUZaO0FBT0E7RUFDSSxnQ0FBQTtBQUpKO0FBT0E7RUFDSSxnQ0FBQTtBQUpKO0FBTUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpSO0FBTUk7RUFDSSxjQUFBO0FBSlI7QUFPQTtFQUNJLGdDQUFBO0FBSko7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQUtRO0VBQ0ksY0FBQTtBQUhaO0FBTUk7RUFDSSxjQUFBO0FBSlI7QUFRQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFMSjtBQU9BO0VBQ0ksY0FBQTtBQUpKO0FBUUk7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQUpSO0FBS1E7RUFDSSxhQUFBO0FBSFo7QUFTSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQU5SO0FBT1E7O0VBRUksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxaO0FBT1E7RUFDSSwwQkFBQTtBQUxaO0FBT1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUxaO0FBT1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBTFo7QUFNWTtFQUNJLGdCQUFBO0FBSmhCO0FBUUk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBTlI7QUFrQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFmUjtBQWdCUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFkWjtBQWVZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFiaEI7QUFnQlE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZFo7QUFnQlE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFkWjtBQWtCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFmUjtBQWdCUTtFQUNJLGFBQUE7QUFkWjtBQWdCUTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBZFo7QUFvQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFqQlI7QUFtQkk7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FBakJSO0FBa0JRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWhCWjtBQWlCWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFmaEI7QUFnQmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBZHBCO0FBaUJZO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBZmhCO0FBbUJJO0VBQ0ksY0FBQTtBQWpCUjtBQW1CSTtFQUNJLDhCQUFBO0FBakJSO0FBbUJJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBakJSO0FBa0JRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFoQlo7QUFxQkE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtFQWxCTjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC1rYnotbXMtbWFuYWdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIC8vd2lkdGg6IGNhbGMoMTAwcHggLyB2YXIoLS1yYXRpby13KSk7XG4gICAgLy9oZWlnaHQ6IGNhbGMoMTAwJSAvIHZhcigtLXJhdGlvLWgpKTtcbiAgICAvL2hlaWdodDogMTAwJTtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICAgICAgICAvL2hlaWdodDogdmFyKC0tcmF0aW8taCk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhlaWdodDogY2FsYyh2YXIoLS1yYXRpby1oKSAtICg1OC44cHggKyA2MHB4KSk7XG4gICAgfVxufVxuLmRhc2hib2FyZC1tYWluIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbn1cblxuLnByb2ZpbGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgIC8vcGFkZGluZy1ib3R0b206IDQlO1xuICAgIC5pbWctY29udGVudCB7XG4gICAgICAgIG1heC13aWR0aDogMTI0cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEyNHB4O1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2I5ZmRlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBpb24tbGFiZWw6bGFzdC1jaGlsZCB7XG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIH1cbn1cbi5wcmVtaXVtIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAvL3BhZGRpbmc6IDEwJSAwO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgfVxufVxuXG4udGl0bGUtY29sb3Ige1xuICAgIGNvbG9yOiAjMDA1ZWFhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wcmVtdWltLWNvbG9yIHtcbiAgICBjb2xvcjogIzAwNWVhYTtcbn1cblxuLnByb2R1Y3Qge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tbGlzdCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi10aHVtYm5haWwsXG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGlvbi1sYWJlbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICB9XG59XG5cbi5zYWxlcy1wZXJmb3JtYW5jZSB7XG4gICAgaDMge1xuICAgICAgICBwOm50aC1jaGlsZCgxKSxcbiAgICAgICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDA0MDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRhdGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MDQwNDA7XG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWVhYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2hhcnQge1xuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuc3ViLWNoYXJ0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gICAgICAgIC50b2RheSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwYWRkaW5nOiA1JSAxMCU7XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmODEwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc5cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1ZWFhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zdWItY2hhcnQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgLnN1Yi1jaGFydDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnJhbmNoIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-kbz-ms-manager_dashboard-kbz-ms-manager_module_ts.js.map