"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_senior-lp-dashboard_senior-lp-dashboard_module_ts"],{

/***/ 99240:
/*!****************************************************************************!*\
  !*** ./src/app/pages/senior-lp-dashboard/senior-lp-dashboard.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeniorLpDashboardComponent": () => (/* binding */ SeniorLpDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_senior_lp_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./senior-lp-dashboard.component.html */ 1394);
/* harmony import */ var _senior_lp_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./senior-lp-dashboard.component.scss */ 97123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _senior_lp_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./senior-lp-dashboard.service */ 61596);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 69380);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 18260);










let SeniorLpDashboardComponent = class SeniorLpDashboardComponent {
    constructor(cdf, auth, dashboardService, router, ngzone) {
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
        this.months = ['JAN', 'FEB', 'Mar', 'APR', 'MAY', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.DEFAULT_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/attachment-downloader/`;
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
                    this.todayActiveAgent = res.todayNoOfActiveAgent;
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
        this.router.navigate(['/sale/application/list']);
    }
    goToActivities() {
        this.router.navigate(['activity/activity-management-list']);
    }
    setChartOptions(type) {
        console.log("lof", type);
        let key = type == 'lead' ? 'chartOptions' : 'chartOptionsAgent';
        this[key] = type == 'lead' ?
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
                    height: 150,
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
                    show: false
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
                stroke: {
                    curve: 'smooth',
                },
                chart: {
                    height: 190,
                    // width : 280,
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
                        fontSize: "1.1rem",
                        fontFamily: "Roboto"
                    }
                },
                xaxis: {
                    type: 'category',
                    categories: this.agentLineChartCategories,
                    labels: {
                        style: {
                            fontSize: "1rem",
                            fontFamily: "Roboto"
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 100,
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
        this.cdf.detectChanges();
    }
};
SeniorLpDashboardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _senior_lp_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone }
];
SeniorLpDashboardComponent.propDecorators = {
    chartAgent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["chartAgent",] }],
    chartLead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["chartLead",] }]
};
SeniorLpDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-senior-lp-dashboard',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_senior_lp_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_senior_lp_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeniorLpDashboardComponent);



/***/ }),

/***/ 36566:
/*!*************************************************************************!*\
  !*** ./src/app/pages/senior-lp-dashboard/senior-lp-dashboard.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeniorLpDashboardModule": () => (/* binding */ SeniorLpDashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _senior_lp_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./senior-lp-dashboard.component */ 99240);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-page-review/static-pages-reivew.module */ 18410);
/* harmony import */ var _column_chart_column_chart_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_column-chart/column-chart.component.module */ 57782);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 86571);











let SeniorLpDashboardModule = class SeniorLpDashboardModule {
};
SeniorLpDashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_senior_lp_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SeniorLpDashboardComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule,
            _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__.StaticPagesViewModule,
            _column_chart_column_chart_component_module__WEBPACK_IMPORTED_MODULE_3__.ColumnChartModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                {
                    path: '',
                    component: _senior_lp_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SeniorLpDashboardComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe]
    })
], SeniorLpDashboardModule);



/***/ }),

/***/ 1394:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/senior-lp-dashboard/senior-lp-dashboard.component.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row my-row\">\r\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 my-mt-5\">\r\n    <div class=\"card card-custom my-card\">\r\n      <div class=\"flex\">\r\n        <div class=\"my-center\">\r\n          <img src=\"./assets/images/dashboard-user.png\" class=\"user-image\" alt=\"\" />\r\n        </div>\r\n        <div class=\"my-p-15\">\r\n          <label class=\"text-dark center primary-color font-14\">{{ data?.agentInfo?.employeeName }}</label><br>\r\n          <label class=\"text-dark center\">{{ data?.role }}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card card-custom my-card\">\r\n      <div class=\"row my-row my-border-bottom\">\r\n        <div class=\"col-12 my-p-10\">\r\n          <h6 class=\"card-label primary-color\">{{ data?.role }}</h6>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <label class=\"font-18\">\r\n            {{ data?.agentInfo?.totalPremium | number: '1.2-2' }} <span>MMk</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row my-row fixed-height\">\r\n        <div class=\"col-12 my-pt-15\">\r\n          <label>Products</label>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div *ngIf=\"data && data.yearlyTotalPremium.length > 0\">\r\n            <ng-container *ngFor=\"let product of data?.yearlyProductPremium\">\r\n              <div class=\"row my-row my-p-15 my-border-bottom\">\r\n                <div class=\"col-6\">\r\n                  <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" alt=\"\" srcset=\"\">\r\n                  {{ product.productName }}\r\n                </div>\r\n                <div class=\"col-6 text-right\">{{ product.premium | number: '1.2-2' }} MMK</div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 my-mt-5\">\r\n    <div class=\"card card-custom \">\r\n      <div class=\"my-card-fixed-height\">\r\n        <div class=\"row my-row\">\r\n          <div class=\"col-6 my-p-10\">\r\n            <h6 class=\"card-label primary-color\">Sales Performances</h6>\r\n          </div>\r\n          <div class=\"col-6 my-p-10 text-right cursor\" (click)=\"goToSalePolicies()\">\r\n            View All\r\n          </div>\r\n        </div>\r\n        <div class=\"row my-row\">\r\n          <div class=\"col-12\">\r\n            <span class=\"primary-color\" *ngIf=\"data && data.yearlyTotalPremium.length > 0\">\r\n              <span *ngIf=\"months && months.length > 0\">{{\r\n                months[currentMonthIndex] }}</span> | Y\r\n              {{ data?.yearlyTotalPremium[0]?.year }} </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"width-100\" *ngIf=\"data && data.subAgentMonthlySale.length > 0\">\r\n          <ng-container *ngFor=\"let agent of data?.subAgentMonthlySale\">\r\n            <div class=\"my-profile-card my-border-bottom\" (click)=\"goToLPManager(agent)\">\r\n              <div class=\"flex\">\r\n                <div>\r\n                  <img src=\"./assets/images/dashboard-user.png\" class=\"user-icon\" alt=\"\" />\r\n                </div>\r\n                <div class=\"pl-5\">\r\n                  <div>\r\n                    <span>{{ agent.name }}</span>\r\n                  </div>\r\n                  <div>\r\n                    <span>{{ agent.premium | number: '1.2-2' }} MMK</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"w-100\"></div>\r\n  <div class=\"col-4 my-mt-5\">\r\n    <div class=\"card card-custom my-card my-block \">\r\n      <div class=\"row my-row\">\r\n        <div class=\"col-12 my-p-10\">\r\n          <h6 class=\"card-label primary-color\">Lead Conversion</h6>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <span>{{ data?.agentInfo?.branchName }}</span>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <span class=\"font-18\">{{ leadObj?.leadWinRate }} %</span>\r\n        </div>\r\n      </div>\r\n      <div id=\"chartLead\" *ngIf=\"chartOptions\">\r\n        <apx-chart [series]=\"chartOptions?.series\" [chart]=\"chartOptions?.chart\" [dataLabels]=\"chartOptions?.dataLabels\"\r\n          [plotOptions]=\"chartOptions?.plotOptions\" [yaxis]=\"chartOptions?.yaxis\" [xaxis]=\"chartOptions?.xaxis\"\r\n          [legend]=\"chartOptions?.legend\" [colors]=\"chartOptions?.colors\" [grid]=\"chartOptions?.grid\"></apx-chart>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4 my-mt-5\">\r\n\r\n    <div class=\"card card-custom my-card my-block \">\r\n      <div class=\"row my-row\">\r\n        <div class=\"col-12 my-p-10\">\r\n          <h6 class=\"card-label primary-color\">Active Agents Today</h6>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <span class=\"font-18\">{{ todayActiveAgent }}</span>\r\n        </div>\r\n      </div>\r\n      <div id=\"chartAgent\" *ngIf=\"chartOptionsAgent\">\r\n        <apx-chart [series]=\"chartOptionsAgent.series\" [chart]=\"chartOptionsAgent.chart\"\r\n          [xaxis]=\"chartOptionsAgent.xaxis\" [yaxis]=\"chartOptionsAgent.yaxis\" [title]=\"chartOptionsAgent.title\"\r\n          [legend]=\"chartOptionsAgent.legend\" [dataLabels]=\"chartOptionsAgent.dataLabels\"\r\n          [markers]=\"chartOptionsAgent.markers\"></apx-chart>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4 my-mt-5\">\r\n    <div class=\"card card-custom my-card my-block \">\r\n      <div class=\"row my-row\">\r\n        <div class=\"col-12 my-p-10\">\r\n          <h6 class=\"card-label primary-color\">Things To Follow Up Today\r\n          </h6>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n\r\n\r\n      <div class=\"row my-row\">\r\n        <div class=\"col-12 flex\">\r\n          <div class=\"box-1\">\r\n            <div class=\"my-center\"><span>ACTIVITY</span></div>\r\n            <br>\r\n            <div class=\"my-center\">\r\n              <h5>{{ leadObj.taskToday }}</h5>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"box-2\">\r\n            <div class=\"my-center\"><span>LEADS TODAY</span></div>\r\n            <br>\r\n            <div class=\"my-center\">\r\n              <h5>{{ leadObj.taskToday }}</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- my-card my-block\r\nmy-card my-block\r\nmy-card my-block -->");

/***/ }),

/***/ 97123:
/*!******************************************************************************!*\
  !*** ./src/app/pages/senior-lp-dashboard/senior-lp-dashboard.component.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".top-box {\n  color: #B5B5C3;\n  margin-left: 50px;\n}\n.top-box span {\n  color: #000;\n}\n.my-center {\n  text-align: center;\n}\n.user-image {\n  width: 120px;\n}\n.user-icon {\n  width: 35px;\n}\n.icon-image {\n  width: 20px;\n}\n.font-24 {\n  font-size: 24px !important;\n}\n.font-18 {\n  font-size: 18px !important;\n}\n.font-14 {\n  font-size: 14px !important;\n}\n.underline {\n  text-decoration: underline;\n}\n.bold {\n  font-weight: 600;\n}\n.flex {\n  display: flex;\n}\n.my-border-left {\n  border-left: 1px solid #7e8299;\n}\n.my-card-title {\n  justify-content: center;\n  width: 100%;\n}\n.width-100 {\n  width: 100%;\n}\n.float-right {\n  float: right;\n}\n.text-right {\n  text-align: right;\n}\n.my-p-15 {\n  padding: 40px 15px 15px 15px;\n}\n.my-pt-15 {\n  padding-top: 15px;\n}\n.my-profile-card {\n  padding: 8px 8px 8px 15px;\n  cursor: pointer;\n}\n.my-border-bottom {\n  border-bottom: 1px solid #dad9d9;\n}\n.my-border-none {\n  border: none;\n}\n.my-row {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.my-mt-5 {\n  margin-top: 5px;\n}\n.my-p-10 {\n  padding: 15px 15px 0px 15px;\n}\n.my-p-15 {\n  padding: 15px 15px 15px 0px;\n}\n.my-box, .box-3, .box-2, .box-1 {\n  width: 150px;\n  height: 150px;\n  color: #FFF;\n  margin-right: 8px;\n  padding: 8px;\n  border-radius: 8px;\n}\n.box-1 {\n  background-color: #00acea;\n}\n.box-2 {\n  background-color: #015eab;\n}\n.box-3 {\n  background-color: #6868fa;\n}\n.container {\n  width: 100%;\n  min-height: 200px;\n}\n.fist-panel-container {\n  width: 100%;\n  height: 50%;\n}\n.my-card {\n  overflow: hidden;\n  background-color: #FFF !important;\n  border: 1px solid lightgrey !important;\n  margin: 5px;\n}\n.fixed-height, .my-card-fixed-height {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.my-card-fixed-height {\n  background-color: #FFF !important;\n  max-height: 600px;\n  margin: 5px;\n}\n.prod-icon {\n  width: 40px;\n  margin-right: 10px;\n}\n.primary-color {\n  color: #005f99 !important;\n}\n.card-50 {\n  height: 230px;\n}\n#chart {\n  max-width: 650px;\n  margin: 35px auto;\n}\n.cursor {\n  cursor: pointer;\n}\n.red {\n  color: red !important;\n}\n.my-block {\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmlvci1scC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBSUE7RUFDRSxrQkFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFDRSwwQkFBQTtBQURGO0FBSUE7RUFDRSwwQkFBQTtBQURGO0FBSUE7RUFDRSwwQkFBQTtBQURGO0FBSUE7RUFDRSwwQkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0FBREY7QUFJQTtFQUNFLDhCQUFBO0FBREY7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFERjtBQUlBO0VBQ0UsaUJBQUE7QUFERjtBQUlBO0VBQ0UsNEJBQUE7QUFERjtBQUlBO0VBQ0UsaUJBQUE7QUFERjtBQUlBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBREY7QUFJQTtFQUNFLGdDQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFERjtBQUlBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFLQTtFQUNFLDJCQUFBO0FBRkY7QUFLQTtFQUNFLDJCQUFBO0FBRkY7QUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUVFLHlCQUFBO0FBSEY7QUFNQTtFQUVFLHlCQUFBO0FBSkY7QUFPQTtFQUVFLHlCQUFBO0FBTEY7QUFRQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUxGO0FBUUE7RUFDRSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0FBTEY7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU5GO0FBU0E7RUFFRSxpQ0FBQTtFQUVBLGlCQUFBO0VBQ0EsV0FBQTtBQVJGO0FBV0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVdBO0VBQ0UseUJBQUE7QUFSRjtBQVdBO0VBQ0UsYUFBQTtBQVJGO0FBV0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUkY7QUFXQTtFQUNFLGVBQUE7QUFSRjtBQVdBO0VBQ0UscUJBQUE7QUFSRjtBQVdBO0VBRUUsYUFBQTtBQVRGIiwiZmlsZSI6InNlbmlvci1scC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJveCB7XHJcbiAgY29sb3IgICAgICA6ICNCNUI1QzM7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3IgICAgICAgICAgOiAjMDAwO1xyXG4gICAgLy8gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubXktY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG59XHJcblxyXG4uaWNvbi1pbWFnZSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250LTI0IHtcclxuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtMTgge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udC0xNCB7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5teS1ib3JkZXItbGVmdCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2U4Mjk5O1xyXG59XHJcblxyXG4ubXktY2FyZC10aXRsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGggICAgICAgICAgOiAxMDAlO1xyXG59XHJcblxyXG4ud2lkdGgtMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsb2F0LXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm15LXAtMTUge1xyXG4gIHBhZGRpbmc6IDQwcHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5teS1wdC0xNSB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5teS1wcm9maWxlLWNhcmQge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDE1cHg7XHJcbiAgY3Vyc29yIDogcG9pbnRlcjtcclxufVxyXG5cclxuLm15LWJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTcsIDIxNyk7XHJcbn1cclxuXHJcbi5teS1ib3JkZXItbm9uZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubXktcm93IHtcclxuICBtYXJnaW4tbGVmdCA6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teS1tdC01IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgO1xyXG59XHJcblxyXG4ubXktcC0xMCB7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4ubXktcC0xNSB7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMHB4O1xyXG59XHJcblxyXG4ubXktYm94IHtcclxuICB3aWR0aCAgICAgICAgOiAxNTBweDtcclxuICBoZWlnaHQgICAgICAgOiAxNTBweDtcclxuICBjb2xvciAgICAgICAgOiAjRkZGO1xyXG4gIG1hcmdpbi1yaWdodCA6IDhweDtcclxuICBwYWRkaW5nICAgICAgOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYm94LTEge1xyXG4gIEBleHRlbmQgLm15LWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VhO1xyXG59XHJcblxyXG4uYm94LTIge1xyXG4gIEBleHRlbmQgLm15LWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1ZWFiO1xyXG59XHJcblxyXG4uYm94LTMge1xyXG4gIEBleHRlbmQgLm15LWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA0LCAxMDQsIDI1MCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoICAgICA6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5maXN0LXBhbmVsLWNvbnRhaW5lciB7XHJcbiAgd2lkdGggOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4ubXktY2FyZCB7XHJcbiAgb3ZlcmZsb3cgICAgICAgIDogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgbGlnaHRncmV5ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luICAgICAgICAgIDogNXB4O1xyXG59XHJcblxyXG5cclxuLmZpeGVkLWhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5teS1jYXJkLWZpeGVkLWhlaWdodCB7XHJcbiAgQGV4dGVuZCAuZml4ZWQtaGVpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAvLyBib3JkZXIgOiAxcHggc29saWQgbGlnaHRncmV5ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodCAgICAgIDogNjAwcHg7XHJcbiAgbWFyZ2luICAgICAgICAgIDogNXB4O1xyXG59XHJcblxyXG4ucHJvZC1pY29uIHtcclxuICB3aWR0aDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWNvbG9yIHtcclxuICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC01MCB7XHJcbiAgaGVpZ2h0OiAyMzBweDtcclxufVxyXG5cclxuI2NoYXJ0IHtcclxuICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gIG1hcmdpbiAgIDogMzVweCBhdXRvO1xyXG59XHJcblxyXG4uY3Vyc29yIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWJsb2NrIHtcclxuICAvLyB3aWR0aCA6IDMwMHB4O1xyXG4gIGhlaWdodCAgICAgICAgIDogMjUwcHg7XHJcbiAgLy8gZmxvYXQgOiBsZWZ0O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMTVweDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_senior-lp-dashboard_senior-lp-dashboard_module_ts.js.map