"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-kbz-ms-manager_dashboard-kbz-ms-manager_module_ts"],{

/***/ 48272:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsManagerPageRoutingModule": () => (/* binding */ DashboardKbzMsManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_kbz_ms_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager.page */ 70720);




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

/***/ 74259:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsManagerPageModule": () => (/* binding */ DashboardKbzMsManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_kbz_ms_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager-routing.module */ 48272);
/* harmony import */ var _dashboard_kbz_ms_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager.page */ 70720);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);









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

/***/ 70720:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsManagerPage": () => (/* binding */ DashboardKbzMsManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_kbz_ms_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager.page.html?ngResource */ 16362);
/* harmony import */ var _dashboard_kbz_ms_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-manager.page.scss?ngResource */ 65567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 98753);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-kbz-ms-senior/dashboard.service */ 59257);











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
        this.DEFAULT_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/attachment-downloader/`;
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
        template: _dashboard_kbz_ms_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_kbz_ms_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardKbzMsManagerPage);



/***/ }),

/***/ 65567:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "div section {\n  width: 33.3333333333%;\n  float: left;\n  display: block;\n  padding: 0 15px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\ndiv section::-webkit-scrollbar {\n  display: none;\n}\n.dashboard-main {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile .img-content {\n  max-width: 124px;\n  max-height: 124px;\n  min-width: 100px;\n  min-height: 100px;\n  background: #b9fded;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 4%;\n}\n.profile ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.profile ion-label:last-child {\n  color: #404040;\n}\n.premium {\n  border-bottom: 1px solid #e3e3e3;\n}\n.premium ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.premium ion-label span {\n  color: #404040;\n}\n.premium ion-label:last-child {\n  color: #404040;\n}\n.title-color {\n  color: #005eaa;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.premuim-color {\n  color: #005eaa;\n}\n.product h2 {\n  font-size: 1rem !important;\n  color: #404040;\n  width: 100%;\n  font-weight: 600;\n}\n.product ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.product ion-list::-webkit-scrollbar {\n  display: none;\n}\nion-list ion-item {\n  padding: 0;\n  position: relative;\n}\nion-list ion-item ion-thumbnail,\nion-list ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  max-width: 40px !important;\n}\nion-list ion-item ion-text {\n  width: 50%;\n  font-size: 0.79rem;\n  padding: 0;\n  color: #404040;\n}\nion-list ion-item ion-text:last-child {\n  text-align: right;\n  position: absolute;\n  right: 0;\n  font-weight: 600;\n}\nion-list ion-item ion-text:last-child ion-label:first-child {\n  font-weight: 100;\n}\nion-list ion-item:last-child {\n  border-bottom: none;\n  --border-width: 0 0 0px 0;\n}\n.sales-performance .date {\n  width: 100%;\n  overflow: hidden;\n}\n.sales-performance .date div {\n  width: 15%;\n  float: left;\n  font-size: 0.79rem;\n  border-right: 1px solid #404040;\n  color: #404040;\n}\n.sales-performance .date div a {\n  cursor: pointer;\n  color: #005eaa;\n}\n.sales-performance .date div:nth-child(2) {\n  width: 25%;\n  padding: 0 6px;\n  text-align: center;\n}\n.sales-performance .date div:last-child {\n  width: 25%;\n  float: right;\n  border-right: none !important;\n  text-align: right;\n}\n.sales-performance ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.sales-performance ion-list::-webkit-scrollbar {\n  display: none;\n}\n.sales-performance ion-list ion-text {\n  text-align: left !important;\n  position: unset !important;\n  width: 100%;\n  font-weight: none !important;\n  color: #404040;\n}\n.chart div {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .sub-chart {\n  border-bottom: 1px solid #e3e3e3;\n  padding: 10px 0 0 0;\n}\n.chart .sub-chart .today {\n  width: 100%;\n  overflow: hidden;\n  padding: 5% 10%;\n}\n.chart .sub-chart .today div {\n  width: 45%;\n  float: left;\n  background: #ff8100;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n.chart .sub-chart .today div p {\n  font-size: 0.79rem;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.chart .sub-chart .today div:last-child {\n  float: right;\n  background: #005eaa;\n}\n.chart .sub-chart:first-child {\n  padding-top: 0;\n}\n.chart .sub-chart:last-child {\n  border-bottom: none !important;\n}\n.chart .branch {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .branch div {\n  width: 50%;\n  float: left;\n  font-size: 0.79rem;\n  color: #404040;\n}\n@media (min-width: 280px) and (max-width: 620px) {\n  section {\n    width: 100% !important;\n    padding: 0 !important;\n    margin: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1rYnotbXMtbWFuYWdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSxxQkFBQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFIUjtBQUlRO0VBQ0ksYUFBQTtBQUZaO0FBT0E7RUFDSSxnQ0FBQTtBQUpKO0FBT0E7RUFDSSxnQ0FBQTtBQUpKO0FBTUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpSO0FBTUk7RUFDSSxjQUFBO0FBSlI7QUFPQTtFQUNJLGdDQUFBO0FBSko7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQUtRO0VBQ0ksY0FBQTtBQUhaO0FBTUk7RUFDSSxjQUFBO0FBSlI7QUFRQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFMSjtBQU9BO0VBQ0ksY0FBQTtBQUpKO0FBUUk7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQUpSO0FBS1E7RUFDSSxhQUFBO0FBSFo7QUFTSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQU5SO0FBT1E7O0VBRUksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxaO0FBT1E7RUFDSSwwQkFBQTtBQUxaO0FBT1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUxaO0FBT1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBTFo7QUFNWTtFQUNJLGdCQUFBO0FBSmhCO0FBUUk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBTlI7QUFrQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFmUjtBQWdCUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFkWjtBQWVZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFiaEI7QUFnQlE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZFo7QUFnQlE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFkWjtBQWtCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFmUjtBQWdCUTtFQUNJLGFBQUE7QUFkWjtBQWdCUTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBZFo7QUFvQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFqQlI7QUFtQkk7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FBakJSO0FBa0JRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWhCWjtBQWlCWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFmaEI7QUFnQmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBZHBCO0FBaUJZO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBZmhCO0FBbUJJO0VBQ0ksY0FBQTtBQWpCUjtBQW1CSTtFQUNJLDhCQUFBO0FBakJSO0FBbUJJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBakJSO0FBa0JRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFoQlo7QUFxQkE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtFQWxCTjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC1rYnotbXMtbWFuYWdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgLy93aWR0aDogY2FsYygxMDBweCAvIHZhcigtLXJhdGlvLXcpKTtcclxuICAgIC8vaGVpZ2h0OiBjYWxjKDEwMCUgLyB2YXIoLS1yYXRpby1oKSk7XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcclxuICAgICAgICAvL2hlaWdodDogdmFyKC0tcmF0aW8taCk7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG5cclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoZWlnaHQ6IGNhbGModmFyKC0tcmF0aW8taCkgLSAoNTguOHB4ICsgNjBweCkpO1xyXG4gICAgfVxyXG59XHJcbi5kYXNoYm9hcmQtbWFpbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiA0JTtcclxuICAgIC5pbWctY29udGVudCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjRweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMjRweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiOWZkZWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgIH1cclxufVxyXG4ucHJlbWl1bSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcclxuICAgIC8vcGFkZGluZzogMTAlIDA7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWw6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZS1jb2xvciB7XHJcbiAgICBjb2xvcjogIzAwNWVhYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5wcmVtdWltLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjMDA1ZWFhO1xyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXHJcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXHJcblxyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbCxcclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGV4dDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2FsZXMtcGVyZm9ybWFuY2Uge1xyXG4gICAgaDMge1xyXG4gICAgICAgIHA6bnRoLWNoaWxkKDEpLFxyXG4gICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDA0MDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDA0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc5cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDA0MDQwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWVhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xyXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuXHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2hhcnQge1xyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnN1Yi1jaGFydCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcclxuICAgICAgICAudG9kYXkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogNSUgMTAlO1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmODEwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1ZWFhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1Yi1jaGFydDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAuc3ViLWNoYXJ0Omxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5icmFuY2gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 16362:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-manager/dashboard-kbz-ms-manager.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"dashboard-main\" (window:resize)=\"onResize($event)\" [ngStyle]=\"{'height': mainContentHeightPx }\">\r\n  <section [ngStyle]=\"{'height': mainContentHeightPx}\">\r\n    <!-- [ngStyle]=\"{'height': profileHpx}\" -->\r\n    <div style=\"margin: 0 0 10px 0;\">\r\n      <div class=\"profile\" [ngStyle]=\"{'padding-bottom': profilePadding}\">\r\n        <div class=\"img-content\" [ngStyle]=\"{'width': profileImgW,  'height': profileImgW}\">\r\n          <img *ngIf=\"data?.agentInfo?.attId\" [src]=\"DEFAULT_DOWNLOAD_URL + data?.agentInfo?.attId\" style=\"width: 100%; height: 100%;\"\r\n          alt=\"profile\" />  \r\n          <img *ngIf=\"!data?.agentInfo?.attId\" src=\"./assets/temp-img/manager.jpeg\" alt=\"profile\">          \r\n\r\n          <!-- <img src=\"../../../assets/images/dashboard-usr.svg\" alt=\"profile\"> -->\r\n        </div>\r\n        <ion-label class=\"title-color\">{{ data?.agentInfo?.employeeName }}</ion-label>\r\n        <ion-label>{{ data?.role }}</ion-label>\r\n      </div>\r\n      <div class=\"premium\" [ngStyle]=\"{'padding': productPadding}\">\r\n        <ion-label class=\"premuim-color\">{{\"CARD.premium\" | translate}}</ion-label>\r\n        <ion-label>{{ data?.agentInfo?.totalPremium | number: '1.2-2' }} <span><small>MMK</small></span></ion-label>\r\n      </div>\r\n    </div>\r\n    <div class=\"product\">\r\n      <h2>{{\"CARD.products\" | translate}}</h2>\r\n      <ion-list [ngStyle]=\"{'height': profileHpx}\">\r\n        <ion-item lines=\"full\" *ngFor=\"let product of data?.yearlyProductPremium\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\"\r\n              alt=\"\" srcset=\"\">\r\n          </ion-thumbnail>\r\n          <ion-text>{{ product.productName }}</ion-text>\r\n          <ion-text>{{ product.premium | number: '1.2-2' }} MMK</ion-text>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </section>\r\n  <section class=\"sales-performance\" [ngStyle]=\"{'height': mainContentHeightPx}\">\r\n    <h2 class=\"title-color\">{{\"CARD.sales_performances\" | translate}}</h2>\r\n    <div class=\"date\">\r\n      <div style=\"width: 50%;\">{{ months[currentMonthIndex] }} | Y{{ currentYear }}</div>\r\n      <!-- <div></div> -->\r\n      <div><a (click)=\"goToSalePolicies()\">{{\"CARD.all\" | translate}}</a></div>\r\n    </div>\r\n    <ion-list *ngIf=\"data && data.subAgentMonthlySale.length > 0\" [ngStyle]=\"{'height': salesHpx}\">\r\n      <ion-item lines=\"full\" *ngFor=\"let agent of data?.subAgentMonthlySale\" (click)=\"goToLPDashboard(agent)\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"agent.attId\" [src]=\"DEFAULT_DOWNLOAD_URL + agent?.attId\" class=\"user-icon\" alt=\"\" (error)=\"changeSource($event)\"/>\r\n          <img *ngIf=\"!agent.attId\" src=\"./assets/images/user_profile-01.svg\" class=\"user-icon\" alt=\"\" (error)=\"changeSource($event)\"/>\r\n        </ion-avatar>\r\n        <ion-text>\r\n          <ion-label class=\"ion-text-wrap\">{{ agent.name }}</ion-label>\r\n          <ion-label class=\"ion-text-wrap\">{{ agent.premium | number: '1.2-2' }} MMK</ion-label>\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n  </section>\r\n  <section class=\"chart\" [ngStyle]=\"{'height': mainContentHeightPx}\">\r\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': chartHpx}\">\r\n      <h2 class=\"title-color\">{{\"FORM.opportunity_conversion\" | translate }}</h2>\r\n      <div class=\"branch\">\r\n        <div>{{ data?.agentInfo?.branchName }}</div>\r\n        <div style=\"font-weight: 600;\">{{ leadObj?.leadWinRate }} %</div>\r\n      </div>\r\n      <div id=\"inflation\" *ngIf=\"chartOptions\">\r\n        <apx-chart [series]=\"chartOptions?.series\" [chart]=\"chartOptions?.chart\" [dataLabels]=\"chartOptions?.dataLabels\"\r\n          [plotOptions]=\"chartOptions?.plotOptions\" [yaxis]=\"chartOptions?.yaxis\" [xaxis]=\"chartOptions?.xaxis\"\r\n          [legend]=\"chartOptions?.legend\" [colors]=\"chartOptions?.colors\" [grid]=\"chartOptions?.grid\"></apx-chart>\r\n      </div>\r\n    </div>\r\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': chartHpx}\">\r\n      <h2 class=\"title-color\">{{\"CARD.active_agents_today\" | translate}}</h2>\r\n      <div style=\"font-weight: bold;\">{{ todayActiveAgent }}</div>\r\n      <div id=\"chart\" style=\"position: relative;\r\n      top: -15px;\" *ngIf=\"chartOptionsAgent\">\r\n        <apx-chart [series]=\"chartOptionsAgent.series\" [chart]=\"chartOptionsAgent.chart\"\r\n          [xaxis]=\"chartOptionsAgent.xaxis\" [yaxis]=\"chartOptionsAgent.yaxis\" [title]=\"chartOptionsAgent.title\"\r\n          [legend]=\"chartOptionsAgent.legend\" [dataLabels]=\"chartOptionsAgent.dataLabels\"\r\n          [markers]=\"chartOptionsAgent.markers\"></apx-chart>\r\n      </div>\r\n    </div>\r\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': thingsHpx}\">\r\n      <h2 class=\"title-color\">{{\"CARD.things_to_followup\" | translate}}</h2>\r\n      <div class=\"today\">\r\n        <div>\r\n          <p>{{\"FORM.task_today\" | translate }}</p>\r\n          <p>{{ leadObj.taskToday }}</p>\r\n        </div>\r\n        <div>\r\n          <p>{{\"FORM.opportunity_today\" | translate }}</p>\r\n          <p>{{ leadObj.leadToday }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-kbz-ms-manager_dashboard-kbz-ms-manager_module_ts.js.map