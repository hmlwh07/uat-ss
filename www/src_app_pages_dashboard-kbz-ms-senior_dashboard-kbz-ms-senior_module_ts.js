"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-kbz-ms-senior_dashboard-kbz-ms-senior_module_ts"],{

/***/ 80625:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsSeniorPageRoutingModule": () => (/* binding */ DashboardKbzMsSeniorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dashboard_kbz_ms_senior_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior.page */ 72855);




const routes = [
    {
        path: '',
        component: _dashboard_kbz_ms_senior_page__WEBPACK_IMPORTED_MODULE_0__.DashboardKbzMsSeniorPage
    }
];
let DashboardKbzMsSeniorPageRoutingModule = class DashboardKbzMsSeniorPageRoutingModule {
};
DashboardKbzMsSeniorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardKbzMsSeniorPageRoutingModule);



/***/ }),

/***/ 78272:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsSeniorPageModule": () => (/* binding */ DashboardKbzMsSeniorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 10407);
/* harmony import */ var _dashboard_kbz_ms_senior_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior.page */ 72855);
/* harmony import */ var _dashboard_kbz_ms_senior_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior-routing.module */ 80625);









let DashboardKbzMsSeniorPageModule = class DashboardKbzMsSeniorPageModule {
};
DashboardKbzMsSeniorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_0__.LanguageModule,
            _dashboard_kbz_ms_senior_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardKbzMsSeniorPageRoutingModule
        ],
        declarations: [_dashboard_kbz_ms_senior_page__WEBPACK_IMPORTED_MODULE_1__.DashboardKbzMsSeniorPage]
    })
], DashboardKbzMsSeniorPageModule);



/***/ }),

/***/ 72855:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsSeniorPage": () => (/* binding */ DashboardKbzMsSeniorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_kbz_ms_senior_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard-kbz-ms-senior.page.html */ 63683);
/* harmony import */ var _dashboard_kbz_ms_senior_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior.page.scss */ 39668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 69380);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ 75199);











let DashboardKbzMsSeniorPage = class DashboardKbzMsSeniorPage {
    constructor(platform, cdf, auth, dashboardService, router, ngzone) {
        this.platform = platform;
        this.cdf = cdf;
        this.auth = auth;
        this.dashboardService = dashboardService;
        this.router = router;
        this.ngzone = ngzone;
        this.leadObj = {};
        this.todayActiveAgent = 0;
        this.agentLineChartCategories = [];
        this.agentLineChartDatas = [];
        this.currentMonthIndex = new Date().getUTCMonth();
        this.currentYear = new Date().getUTCFullYear();
        this.months = ['JAN', 'FEB', 'Mar', 'APR', 'MAY', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.DEFAULT_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/attachment-downloader`;
        this.unsub = this.auth.currentUserSubject.subscribe((res) => {
            if (res) {
                this.authObj = res;
            }
        });
        this.loadForm();
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
            "empId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.authObj.id)
        });
    }
    getList() {
        this.ngzone.run(_ => {
            this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
                if (res) {
                    this.data = res;
                    this.setChartOptions('agent');
                    this.cdf.detectChanges();
                }
            });
        });
    }
    getLeadList() {
        this.dashboardService.getLeadList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.leadObj = res;
                this.todayActiveAgent = res.todayActiveAgent;
                this.setChartOptions('lead');
                this.cdf.detectChanges();
            }
        });
    }
    getAgentList() {
        this.ngzone.run(_ => {
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
                // console.log(res,"res");
                if (res) {
                    this.agentLineChart = res;
                    // this.todayActiveAgent = res.todayNoOfActiveAgent
                    this.agentLineChartCategories = res.weeks;
                    this.agentLineChartDatas = res.data;
                    // res.weeklyActiveAgents.map(a => {
                    //   this.agentLineChartCategories.push(a.weekNo);
                    //   this.agentLineChartDatas.push(parseInt(a.noOfActiveAgent));
                    // })
                    this.setChartOptions('agent');
                }
            });
        });
    }
    ngOnDestroy() {
        this.unsub.unsubscribe();
    }
    goToLPManager(agent) {
        this.router.navigate(['/dashboard/lp-manager-dashboard'], { queryParams: { empId: agent.empId } });
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
                        show: true
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
                },
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
                    },
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
DashboardKbzMsSeniorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone }
];
DashboardKbzMsSeniorPage.propDecorators = {
    chartAgent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["chartAgent",] }],
    chartLead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["chartLead",] }]
};
DashboardKbzMsSeniorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-dashboard-kbz-ms-senior',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_kbz_ms_senior_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_kbz_ms_senior_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardKbzMsSeniorPage);



/***/ }),

/***/ 63683:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior.page.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dashboard-main\" (window:resize)=\"onResize($event)\" [ngStyle]=\"{'height': mainContentHeightPx }\">\n  <section [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <!-- [ngStyle]=\"{'height': profileHpx}\" -->\n    <div style=\"margin: 0 0 10px 0;\">\n      <div class=\"profile\" [ngStyle]=\"{'padding-bottom': profilePadding}\">\n        <div class=\"img-content\" [ngStyle]=\"{'width': profileImgW,  'height': profileImgW}\">         \n          <img *ngIf=\"data?.agentInfo?.attId\" [src]=\"DEFAULT_DOWNLOAD_URL+'/' + data?.agentInfo?.attId\" style=\"width: 100%; height: 100%;\"\n          alt=\"profile\" />\n          <!-- <img  src=\"../../../assets/images/dashboard-usr.svg\" alt=\"profile\"> -->\n          <img *ngIf=\"!data?.agentInfo?.attId\" src=\"./assets/temp-img/banca_head.jpg\" alt=\"profile\">        \n        </div>\n        <ion-label class=\"title-color\">{{ data?.agentInfo?.employeeName }}</ion-label>\n        <ion-label>{{ data?.role }}</ion-label>\n      </div>\n      <div class=\"premium\" [ngStyle]=\"{'padding': productPadding}\">\n        <ion-label class=\"premuim-color\">{{\"CARD.premium\" | translate}} </ion-label>\n        <ion-label>{{ data?.agentInfo?.totalPremium | number: '1.2-2' }} <span><small>MMK</small></span></ion-label>\n      </div>\n    </div>\n    <div class=\"product\">\n      <h2>{{\"CARD.products\" | translate}}</h2>\n      <ion-list [ngStyle]=\"{'height': profileHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let product of data?.yearlyProductPremium\" >\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\"\n              alt=\"\" srcset=\"\">\n            <!-- <img *ngIf=\"productSmallIcon\" [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" \n              alt=\"\" srcset=\"\">-->\n          </ion-thumbnail>\n          <ion-text>{{ product.productName }}</ion-text>\n          <ion-text>{{ product.premium | number: '1.2-2' }} MMK</ion-text>\n        </ion-item>\n      </ion-list>      \n    </div>\n  </section>\n  <section class=\"sales-performance\"  [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <h2 class=\"title-color\">{{\"CARD.sales_performances\" | translate}}</h2>\n    <div class=\"date\">\n      <div style=\"width: 50%;\">{{ months[currentMonthIndex] }} | Y{{ currentYear }}</div>\n      <!-- <div>Y{{ currentYear }}</div> -->\n      <div><a (click)=\"goToSalePolicies()\">All</a></div>\n    </div>\n    <ion-list *ngIf=\"data && data.subAgentMonthlySale.length > 0\" [ngStyle]=\"{'height': salesHpx}\">\n      <ion-item lines=\"full\" *ngFor=\"let agent of data?.subAgentMonthlySale\" (click)=\"goToLPManager(agent)\">\n        <ion-avatar slot=\"start\">\n          <img src=\"./assets/images/user_profile-01.svg\" class=\"user-icon\" alt=\"\" (error)=\"changeSource($event)\"/>\n        </ion-avatar>\n        <ion-text>\n          <ion-label class=\"ion-text-wrap\">{{ agent.name }}</ion-label>\n          <ion-label class=\"ion-text-wrap\">{{ agent.premium | number: '1.2-2' }} MMK</ion-label>\n        </ion-text>\n      </ion-item>\n    </ion-list>\n  </section>\n  <section class=\"chart\"  [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': chartHpx}\">\n      <h2 class=\"title-color\">Opportunity Conversion</h2>\n      <div class=\"branch\">\n        <div>{{ data?.agentInfo?.branchName }}</div>\n        <div style=\"font-weight: 600;\">{{ leadObj?.leadWinRate }} %</div>\n      </div>\n      <div id=\"inflation\" *ngIf=\"chartOptions\">\n        <apx-chart [series]=\"chartOptions?.series\" [chart]=\"chartOptions?.chart\" [dataLabels]=\"chartOptions?.dataLabels\"\n          [plotOptions]=\"chartOptions?.plotOptions\" [yaxis]=\"chartOptions?.yaxis\" [xaxis]=\"chartOptions?.xaxis\"\n          [legend]=\"chartOptions?.legend\" [colors]=\"chartOptions?.colors\" [grid]=\"chartOptions?.grid\"></apx-chart>\n      </div>\n    </div>\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': chartHpx}\">\n      <h2 class=\"title-color\">{{\"CARD.active_agents_today\" | translate}}</h2>\n      <div style=\"font-weight: bold;\">{{ todayActiveAgent }}</div>\n      <div id=\"chart\" style=\"position: relative;\n      top: -15px;\" *ngIf=\"chartOptionsAgent\">\n        <apx-chart [series]=\"chartOptionsAgent.series\" [chart]=\"chartOptionsAgent.chart\"\n          [xaxis]=\"chartOptionsAgent.xaxis\" [yaxis]=\"chartOptionsAgent.yaxis\" [title]=\"chartOptionsAgent.title\"\n          [legend]=\"chartOptionsAgent.legend\" [dataLabels]=\"chartOptionsAgent.dataLabels\"\n          [markers]=\"chartOptionsAgent.markers\"></apx-chart>\n      </div>\n    </div>\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': thingsHpx}\">\n      <h2 class=\"title-color\">{{\"CARD.things_followup_today\" | translate}}</h2>\n      <div class=\"today\">\n        <div>\n          <p>TASK TODAY</p>\n          <p>{{ leadObj.taskToday }}</p>\n        </div>\n        <div>\n          <p>OPPORTUNITY TODAY</p>\n          <p>{{ leadObj.leadToday }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>");

/***/ }),

/***/ 39668:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior.page.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "div section {\n  width: 33.3333333333%;\n  float: left;\n  display: block;\n  padding: 0 15px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\ndiv section::-webkit-scrollbar {\n  display: none;\n}\n.dashboard-main {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile .img-content {\n  max-width: 124px;\n  max-height: 124px;\n  min-width: 100px;\n  min-height: 100px;\n  background: #b9fded;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 4%;\n}\n.profile ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.profile ion-label:last-child {\n  color: #404040;\n}\n.premium {\n  border-bottom: 1px solid #e3e3e3;\n}\n.premium ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.premium ion-label span {\n  color: #404040;\n}\n.premium ion-label:last-child {\n  color: #404040;\n}\n.title-color {\n  color: #005eaa;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.premuim-color {\n  color: #005eaa;\n}\n.product h2 {\n  font-size: 1rem !important;\n  color: #404040;\n  width: 100%;\n  font-weight: 600;\n}\n.product ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.product ion-list::-webkit-scrollbar {\n  display: none;\n}\nion-list ion-item {\n  padding: 0;\n  position: relative;\n}\nion-list ion-item ion-thumbnail,\nion-list ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  max-width: 40px !important;\n}\nion-list ion-item ion-text {\n  width: 50%;\n  font-size: 0.79rem;\n  padding: 0;\n  color: #404040;\n}\nion-list ion-item ion-text:last-child {\n  text-align: right;\n  position: absolute;\n  right: 0;\n  font-weight: 600;\n}\nion-list ion-item ion-text:last-child ion-label:first-child {\n  font-weight: 100;\n}\nion-list ion-item:last-child {\n  border-bottom: none;\n  --border-width: 0 0 0px 0;\n}\n.sales-performance h3 p:nth-child(1),\n.sales-performance h3 p:nth-child(2) {\n  border-right: 1px solid #404040;\n}\n.sales-performance .date {\n  width: 100%;\n  overflow: hidden;\n}\n.sales-performance .date div {\n  width: 15%;\n  float: left;\n  font-size: 0.79rem;\n  color: #404040;\n}\n.sales-performance .date div a {\n  cursor: pointer;\n  color: #005eaa;\n}\n.sales-performance .date div:nth-child(2) {\n  width: 25%;\n  padding: 0 6px;\n  text-align: center;\n}\n.sales-performance .date div:last-child {\n  width: 25%;\n  float: right;\n  border-right: none !important;\n  text-align: right;\n}\n.sales-performance ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.sales-performance ion-list::-webkit-scrollbar {\n  display: none;\n}\n.sales-performance ion-list ion-text {\n  text-align: left !important;\n  position: unset !important;\n  width: 100%;\n  font-weight: none !important;\n  color: #404040;\n}\n.chart div {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .sub-chart {\n  border-bottom: 1px solid #e3e3e3;\n  padding: 10px 0 0 0;\n}\n.chart .sub-chart .today {\n  width: 100%;\n  overflow: hidden;\n  padding: 5% 10%;\n}\n.chart .sub-chart .today div {\n  width: 45%;\n  float: left;\n  background: #ff8100;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n.chart .sub-chart .today div p {\n  font-size: 0.79rem;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.chart .sub-chart .today div:last-child {\n  float: right;\n  background: #005eaa;\n}\n.chart .sub-chart:first-child {\n  padding-top: 0;\n}\n.chart .sub-chart:last-child {\n  border-bottom: none !important;\n}\n.chart .branch {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .branch div {\n  width: 50%;\n  float: left;\n  font-size: 0.79rem;\n  color: #404040;\n}\n@media (min-width: 280px) and (max-width: 620px) {\n  section {\n    width: 100% !important;\n    padding: 0 !important;\n    margin: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1rYnotbXMtc2VuaW9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNJLHFCQUFBO0VBRUEsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQUhSO0FBSVE7RUFDSSxhQUFBO0FBRlo7QUFPQTtFQUNJLGdDQUFBO0FBSko7QUFPQTtFQUNJLGdDQUFBO0FBSko7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUpSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFNSTtFQUNJLGNBQUE7QUFKUjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpSO0FBS1E7RUFDSSxjQUFBO0FBSFo7QUFNSTtFQUNJLGNBQUE7QUFKUjtBQVFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUxKO0FBT0E7RUFDSSxjQUFBO0FBSko7QUFRSTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUxSO0FBT0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEwQixnQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0VBRXZCLGdEQUFBO0FBSlI7QUFLUTtFQUNJLGFBQUE7QUFIWjtBQVNJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBTlI7QUFPUTs7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTFo7QUFPUTtFQUNJLDBCQUFBO0FBTFo7QUFPUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBTFo7QUFPUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFMWjtBQU1ZO0VBQ0ksZ0JBQUE7QUFKaEI7QUFRSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFOUjtBQVlROztFQUVJLCtCQUFBO0FBVFo7QUFZSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQVZSO0FBV1E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQVZaO0FBV1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVRoQjtBQVlRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVZaO0FBWVE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFWWjtBQWNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQVhSO0FBWVE7RUFDSSxhQUFBO0FBVlo7QUFZUTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBVlo7QUFnQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFiUjtBQWVJO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtBQWJSO0FBY1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWlo7QUFhWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFYaEI7QUFZZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFWcEI7QUFhWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQVhoQjtBQWVJO0VBQ0ksY0FBQTtBQWJSO0FBZUk7RUFDSSw4QkFBQTtBQWJSO0FBZUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFiUjtBQWNRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFaWjtBQWlCQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO0VBZE47QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQta2J6LW1zLXNlbmlvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIC8vd2lkdGg6IGNhbGMoMTAwcHggLyB2YXIoLS1yYXRpby13KSk7XG4gICAgLy9oZWlnaHQ6IGNhbGMoMTAwJSAvIHZhcigtLXJhdGlvLWgpKTtcbiAgICAvL2hlaWdodDogMTAwJTtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICAgICAgICAvL2hlaWdodDogdmFyKC0tcmF0aW8taCk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhlaWdodDogY2FsYyh2YXIoLS1yYXRpby1oKSAtICg1OC44cHggKyA2MHB4KSk7XG4gICAgfVxufVxuLmRhc2hib2FyZC1tYWluIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbn1cblxuLnByb2ZpbGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgIC8vcGFkZGluZy1ib3R0b206IDQlO1xuICAgIC5pbWctY29udGVudCB7XG4gICAgICAgIG1heC13aWR0aDogMTI0cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEyNHB4O1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2I5ZmRlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBpb24tbGFiZWw6bGFzdC1jaGlsZCB7XG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIH1cbn1cbi5wcmVtaXVtIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAvL3BhZGRpbmc6IDEwJSAwO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgfVxufVxuXG4udGl0bGUtY29sb3Ige1xuICAgIGNvbG9yOiAjMDA1ZWFhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wcmVtdWltLWNvbG9yIHtcbiAgICBjb2xvcjogIzAwNWVhYTtcbn1cblxuLnByb2R1Y3Qge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tbGlzdCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi10aHVtYm5haWwsXG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGlvbi1sYWJlbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICB9XG59XG5cbi5zYWxlcy1wZXJmb3JtYW5jZSB7XG4gICAgaDMge1xuICAgICAgICBwOm50aC1jaGlsZCgxKSxcbiAgICAgICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDA0MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGF0ZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc5cmVtO1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDA0MDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1ZWFhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jaGFydCB7XG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5zdWItY2hhcnQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgICAgICAgLnRvZGF5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlIDEwJTtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY4MTAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDVlYWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN1Yi1jaGFydDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICAuc3ViLWNoYXJ0Omxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5icmFuY2gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-kbz-ms-senior_dashboard-kbz-ms-senior_module_ts.js.map