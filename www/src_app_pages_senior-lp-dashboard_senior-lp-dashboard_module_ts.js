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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_senior_lp_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./senior-lp-dashboard.component.html */ 1394);
/* harmony import */ var _senior_lp_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./senior-lp-dashboard.component.scss */ 97123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _senior_lp_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./senior-lp-dashboard.service */ 61596);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 69380);








let SeniorLpDashboardComponent = class SeniorLpDashboardComponent {
    constructor(auth, dashboardService, router) {
        this.auth = auth;
        this.dashboardService = dashboardService;
        this.router = router;
        this.unsub = this.auth.currentUserSubject.subscribe((res) => {
            if (res) {
                this.authObj = res;
            }
        });
        this.loadForm();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.getList();
            this.getLeadList();
        });
    }
    loadForm() {
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            "empId": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.authObj.id)
        });
    }
    getList() {
        this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.data = res;
            }
        });
    }
    getLeadList() {
        this.dashboardService.getLeadList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.leadObj = res;
                this.setChartOptions();
            }
        });
    }
    ngOnDestroy() {
        this.unsub.unsubscribe();
    }
    goToLPManager(agent) {
        this.router.navigate(['/dashboard/lp-manager-dashboard'], { queryParams: { empId: agent.empId } });
    }
    setChartOptions() {
        this.chartOptions = {
            series: [
                {
                    name: "",
                    data: [this.leadObj.leadWinCount, this.leadObj.leadAssignCount]
                }
            ],
            chart: {
                height: 200,
                type: "bar",
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
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
                    columnWidth: "45%",
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
                    ["Converted", this.leadObj.leadWinCount],
                    ["Assigned", this.leadObj.leadAssignCount],
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
        };
    }
};
SeniorLpDashboardComponent.ctorParameters = () => [
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _senior_lp_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SeniorLpDashboardComponent.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["chart",] }]
};
SeniorLpDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-senior-lp-dashboard',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_senior_lp_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row my-row\">\n  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 my-mt-5\">\n    <div class=\"card card-custom my-card\">\n      <div class=\"card-header card-50\">\n        <div class=\"card-title my-card-title\">\n          <div class=\"my-center\">\n            <img src=\"./assets/images/dashboard-user.png\" class=\"user-image\" alt=\"\" />\n            <br>\n            <label class=\"text-dark center\">{{ data.agentInfo.employeeName }}</label><br>\n            <label class=\"text-dark center\">Senior LP Manager</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body customer-card-body card-50\" style=\"margin-top: 10px;\">\n        <div class=\"row my-row mb-5\">\n          <div class=\"col-10\">\n            <label>Premium {{ data?.yearlyTotalPremium?.year }} {{ data.agentInfo.branchName }}</label>\n          </div>\n          <div class=\"col-2\">\n            <img src=\"./assets/images/alert.png\" class=\"icon-image\" alt=\"\" />\n          </div>\n        </div>\n\n        <div class=\"mb-5\">\n          <label style=\"padding-left: 50px;\"><span class=\"font-weight-bolder text-dark center font-24\">\n            {{ data.agentInfo.totalPremium }}\n          </span>\n            <span><sup>MMk</sup></span></label>\n        </div>\n        <div>\n          <div class=\"row my-row\">\n            <div class=\"col-12\">\n              <label class=\"font-weight-bolder text-dark underline\">Products</label>\n            </div>\n          </div>\n          <ng-container *ngFor=\"let product of data?.yearlyProductPremium\">\n          <div class=\"row my-row\" >\n            <div class=\"col-6\">{{ product.productName }}</div>\n            <div class=\"col-6\">: {{ product.premium }} MMK</div>\n          </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 my-mt-5\">\n    <div class=\"card card-custom my-card\">\n      <div class=\"my-p-10\">\n        <div><span>SALES PERFORMANCE</span></div>\n        <div class=\"width-100\">\n          <span>JAN | Y2021 |</span>\n          <span class=\"float-right\">View All</span>\n        </div>\n      </div>\n     \n      <div style=\"margin-top: 10px;\">\n        <ng-container *ngFor=\"let agent of data?.subAgentMonthlySale\">\n          <div class=\"my-profile-card\" (click)=\"goToLPManager(agent)\">\n            <div class=\"flex\">\n              <div>\n                <img src=\"./assets/images/dashboard-user.png\" class=\"user-icon\" alt=\"\" />\n              </div>\n              <div class=\"pl-5\">\n                <div>\n                  <span>{{ agent.name }}</span>\n                </div>\n                <div>\n                  <span>{{ agent.premium }} MMK</span>\n                </div>\n              </div>\n              <div class=\"my-border-left ml-4 pl-2\">\n                <div>\n                  <span>Team</span>\n                </div>\n                <div>\n                  <span>{{ agent.teamPremium }} MMK</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          </ng-container>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 my-mt-5\" *ngIf=\"leadObj\">\n    <div class=\"card card-custom my-card\">\n    <div class=\"my-p-10\">\n      <span>LEADS CONVERSION - Yangon Branch</span>\n      <h5>{{ leadObj.leadWinRate }} %</h5>\n      <div id=\"chart\">\n        <apx-chart\n          [series]=\"chartOptions.series\"\n          [chart]=\"chartOptions.chart\"\n          [dataLabels]=\"chartOptions.dataLabels\"\n          [plotOptions]=\"chartOptions.plotOptions\"\n          [yaxis]=\"chartOptions.yaxis\"\n          [xaxis]=\"chartOptions.xaxis\"\n          [legend]=\"chartOptions.legend\"\n          [colors]=\"chartOptions.colors\"\n          [grid]=\"chartOptions.grid\"\n        ></apx-chart>\n      </div>\n    </div>\n\n\n    <div class=\"container\">\n      <span>ACTIVE AGENTS TODAY</span>\n      <h5>{{ leadObj.todayActiveAgent }} </h5>\n    </div>\n\n    <div class=\"container\">\n      <span>THINGS TO FOLLOW UP TODAY</span>\n      <div class=\"row my-row\">\n        <div class=\"col-6\">\n          <div class=\"box-1\">\n            <div><span>TASKS TODAY</span></div>\n            <br>\n            <div class=\"my-center\">\n              <h5>{{ leadObj.taskToday }}</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"box-2\">\n            <div><span>LEADS TODAY</span></div>\n            <br>\n            <div class=\"my-center\">\n              <h5>{{ leadObj.leadToday }}</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 97123:
/*!******************************************************************************!*\
  !*** ./src/app/pages/senior-lp-dashboard/senior-lp-dashboard.component.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".top-box {\n  color: #B5B5C3;\n  margin-left: 50px;\n}\n.top-box span {\n  color: #000;\n}\n.my-center {\n  text-align: center;\n}\n.user-image {\n  width: 100px;\n  margin-bottom: 15px;\n}\n.user-icon {\n  width: 35px;\n}\n.icon-image {\n  width: 20px;\n}\n.font-24 {\n  font-size: 24px !important;\n}\n.underline {\n  text-decoration: underline;\n}\n.bold {\n  font-weight: 600;\n}\n.flex {\n  display: flex;\n}\n.my-border-left {\n  border-left: 1px solid #7e8299;\n}\n.my-card-title {\n  justify-content: center;\n  width: 100%;\n}\n.width-100 {\n  width: 100%;\n}\n.float-right {\n  float: right;\n}\n.my-profile-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: #FFF;\n  width: calc(100% - 16px);\n  height: auto;\n  padding: 10px;\n  margin: 8px;\n  cursor: pointer;\n}\n.my-border-bottom {\n  border-bottom: 1px solid #dad9d9;\n}\n.my-border-none {\n  border: none;\n}\n.my-p-10 {\n  padding: 10px;\n}\n.my-row {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.my-mt-5 {\n  margin-top: 5px;\n}\n.my-p-10 {\n  padding: 15px;\n}\n.my-box, .box-2, .box-1 {\n  width: 100px;\n  height: 100px;\n  color: #FFF;\n  padding: 5px;\n}\n.box-1 {\n  background-color: orange;\n}\n.box-2 {\n  background-color: #6868fa;\n}\n.container {\n  width: 100%;\n  min-height: 200px;\n}\n.fist-panel-container {\n  width: 100%;\n  height: 50%;\n}\n.my-card {\n  max-height: calc(100vh - 215px);\n  min-height: 530px;\n  overflow-y: auto;\n}\n.card-50 {\n  height: 230px;\n}\n#chart {\n  max-width: 650px;\n  margin: 35px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmlvci1scC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBSUE7RUFDRSxrQkFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFJQTtFQUNFLDBCQUFBO0FBREY7QUFJQTtFQUNFLDBCQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7QUFERjtBQUlBO0VBQ0UsOEJBQUE7QUFERjtBQUlBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtBQURGO0FBSUE7RUFDRSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREY7QUFJQTtFQUNFLGdDQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtBQURGO0FBSUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUtBO0VBQ0UsYUFBQTtBQUZGO0FBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTtFQUVFLHdCQUFBO0FBSEY7QUFNQTtFQUVFLHlCQUFBO0FBSkY7QUFPQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUpGO0FBT0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUpGO0FBT0E7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsYUFBQTtBQUpGO0FBT0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSkYiLCJmaWxlIjoic2VuaW9yLWxwLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYm94IHtcbiAgY29sb3I6ICNCNUI1QzM7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC8vICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5cbi5teS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLWltYWdle1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi51c2VyLWljb24ge1xuICB3aWR0aDogMzVweDtcbn1cblxuLmljb24taW1hZ2Uge1xuICB3aWR0aDogMjBweDtcbn1cblxuLmZvbnQtMjQge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm15LWJvcmRlci1sZWZ0IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2U4Mjk5O1xufVxuXG4ubXktY2FyZC10aXRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5teS1wcm9maWxlLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2IoMCAwIDAgLyAyMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGN1cnNvcjpwb2ludGVyO1xufVxuXG4ubXktYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTcsIDIxNyk7XG59XG5cbi5teS1ib3JkZXItbm9uZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm15LXAtMTAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubXktcm93IHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXktbXQtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgO1xufVxuXG4ubXktcC0xMCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5teS1ib3gge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5ib3gtMSB7XG4gIEBleHRlbmQgLm15LWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uYm94LTIge1xuICBAZXh0ZW5kIC5teS1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDEwNCwgMjUwKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmZpc3QtcGFuZWwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4ubXktY2FyZCB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMTVweCk7XG4gIG1pbi1oZWlnaHQ6IDUzMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2FyZC01MCB7XG4gIGhlaWdodDogMjMwcHg7XG59XG5cbiNjaGFydCB7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIG1hcmdpbjogMzVweCBhdXRvO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_senior-lp-dashboard_senior-lp-dashboard_module_ts.js.map