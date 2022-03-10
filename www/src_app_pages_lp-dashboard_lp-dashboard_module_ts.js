"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_lp-dashboard_lp-dashboard_module_ts"],{

/***/ 38563:
/*!**************************************************************!*\
  !*** ./src/app/pages/lp-dashboard/lp-dashboard.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LpDashboardComponent": () => (/* binding */ LpDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lp_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lp-dashboard.component.html */ 78685);
/* harmony import */ var _lp_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lp-dashboard.component.scss */ 19911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _senior_lp_dashboard_senior_lp_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../senior-lp-dashboard/senior-lp-dashboard.service */ 61596);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 69380);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 18260);









let LpDashboardComponent = class LpDashboardComponent {
    constructor(cdf, ngzone, route, auth, dashboardService, router) {
        this.cdf = cdf;
        this.ngzone = ngzone;
        this.route = route;
        this.auth = auth;
        this.dashboardService = dashboardService;
        this.router = router;
        this.recentObj = {
            quotations: [],
            policies: []
        };
        this.campaign = [];
        this.campaignArray = [];
        this.followup = [];
        this.followUpArray = [];
        this.assignlead = [];
        this.assignLeadArray = [];
        this.backlog = [];
        this.backlogArray = [];
        this.unsub = {};
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
        this.DEFAULT_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/attachment-downloader/`;
        this.currentMonthIndex = new Date().getUTCMonth();
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
        this.getList();
        this.getRecentList();
        this.getCampaignList();
        this.getFollowupList();
        this.getBacklogList();
        this.getLeadAssignList();
    }
    loadForm() {
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            "empId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.id)
        });
    }
    getList() {
        this.ngzone.run(_ => {
            this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
                if (res) {
                    this.data = res;
                    this.setChartOptions();
                    this.cdf.detectChanges();
                }
            });
        });
    }
    getRecentList() {
        this.ngzone.run(_ => {
            this.dashboardService.getRecentList(this.actForm.value).toPromise().then((res) => {
                if (res) {
                    this.recentObj = res;
                    console.log('recentObj', this.recentObj);
                    this.cdf.detectChanges();
                }
            });
        });
    }
    getCampaignList() {
        this.ngzone.run(_ => {
            this.dashboardService.getCampaignList(this.actForm.value).toPromise().then((res) => {
                if (res) {
                    this.campaign = res;
                    this.campaign.map(c => {
                        this.campaignArray.push(c);
                    });
                    this.cdf.detectChanges();
                }
            });
        });
    }
    getBacklogList() {
        this.ngzone.run(_ => {
            this.dashboardService.getBacklogList(this.actForm.value).toPromise().then((res) => {
                if (res) {
                    this.backlog = res;
                    this.backlog.map(log => {
                        this.backlogArray.push(log);
                    });
                    this.cdf.detectChanges();
                }
            });
        });
    }
    getLeadAssignList() {
        this.ngzone.run(_ => {
            this.dashboardService.getLeadAssignList(this.actForm.value).toPromise().then((res) => {
                if (res) {
                    this.assignlead = res;
                    this.assignlead.map(log => {
                        this.assignLeadArray.push(log);
                    });
                    this.cdf.detectChanges();
                }
            });
        });
    }
    getFollowupList() {
        this.ngzone.run(_ => {
            this.dashboardService.getFollowupList(this.actForm.value).toPromise().then((res) => {
                if (res) {
                    this.followup = res;
                    this.followup.map(log => {
                        this.followUpArray.push(log);
                    });
                    this.cdf.detectChanges();
                }
            });
        });
    }
    ngOnDestroy() {
    }
    goToSaleQuotation() {
        this.router.navigate(['/sale/quotation/list']);
    }
    goToSalePolicies() {
        this.router.navigate(['/sale/application/list']);
    }
    goToCalendar() {
        this.router.navigate(['/mycalendar']);
    }
    goToLeadList() {
        this.router.navigate(['/lead/lead-list']);
    }
    setChartOptions() {
        this.chartOptions = {
            series: [
                {
                    name: '',
                    data: [this.data.converted, this.data.assigned],
                },
            ],
            chart: {
                toolbar: {
                    show: false
                },
                height: 150,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                    },
                },
            },
            colors: [
                '#008FFB',
                '#00E396',
                '#FEB019',
                '#FF4560',
                '#775DD0',
                '#546E7A',
                '#26a69a',
                '#D10CE8',
            ],
            plotOptions: {
                bar: {
                    columnWidth: '20%',
                    distributed: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            grid: {
                show: false,
            },
            xaxis: {
                categories: [
                    ['Converted', this.data.converted],
                    ['Assigned', this.data.assigned],
                ],
                labels: {
                    style: {
                        colors: [
                            '#008FFB',
                            '#00E396',
                            '#FEB019',
                            '#FF4560',
                            '#775DD0',
                            '#546E7A',
                            '#26a69a',
                            '#D10CE8',
                        ],
                        fontSize: '12px',
                    },
                },
            },
        };
    }
};
LpDashboardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _senior_lp_dashboard_senior_lp_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
LpDashboardComponent.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['chart',] }]
};
LpDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-lp-dashboard',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lp_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lp_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LpDashboardComponent);



/***/ }),

/***/ 21229:
/*!***********************************************************!*\
  !*** ./src/app/pages/lp-dashboard/lp-dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LpDashboardModule": () => (/* binding */ LpDashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _lp_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lp-dashboard.component */ 38563);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-page-review/static-pages-reivew.module */ 18410);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 86571);










let LpDashboardModule = class LpDashboardModule {
};
LpDashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_lp_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.LpDashboardComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule,
            _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__.StaticPagesViewModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                {
                    path: '',
                    component: _lp_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.LpDashboardComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe]
    })
], LpDashboardModule);



/***/ }),

/***/ 78685:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/lp-dashboard/lp-dashboard.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row my-row\" *ngIf=\"data\">\r\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 my-mt-5\">\r\n    <div class=\"card card-custom my-card\">\r\n      <div class=\"flex\">\r\n        <div class=\"my-center\">\r\n          <img src=\"./assets/images/dashboard-user.png\" class=\"user-image\" alt=\"\" />\r\n        </div>\r\n        <div class=\"my-p-15\">\r\n          <label class=\"text-dark center primary-color font-14\">{{ data?.agentInfo?.employeeName }}</label><br>\r\n          <label class=\"text-dark center\">{{ data?.role }}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card card-custom my-card\">\r\n      <div class=\"row my-row my-border-bottom\">\r\n        <div class=\"col-12 my-p-10\">\r\n          <h6 class=\"card-label primary-color\">{{ data?.role }}</h6>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <label class=\"font-18\">\r\n            {{ data?.agentInfo?.totalPremium | number: '1.0-2' }} <span>MMk</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row my-row fixed-height\">\r\n        <div class=\"col-12 my-pt-15\">\r\n          <label>Products</label>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div *ngIf=\"data && data.yearlyTotalPremium.length > 0\">\r\n            <ng-container *ngFor=\"let product of data?.yearlyProductPremium\">\r\n              <div class=\"row my-row my-p-15 my-border-bottom\">\r\n                <div class=\"col-6\">\r\n                  <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" alt=\"\" srcset=\"\">\r\n                  {{ product.productName }}\r\n                </div>\r\n                <div class=\"col-6 text-right\">{{ product.premium | number: '1.0-2' }} MMK</div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 my-mt-5\">\r\n    <div class=\"card card-custom my-card my-card-fixed-height\">\r\n      <div class=\"my-p-10\">\r\n        <div class=\"my-center\"><span class=\"primary-color bold\">Recent Operations</span></div>\r\n      </div>\r\n      <div>\r\n        <div class=\"row my-row lp-dashboard-box-header flex bold\">\r\n          <div class=\"col-10\">Quotes</div>\r\n          <div class=\"col-2 underline pointer\" (click)=\"goToSaleQuotation()\">All></div>\r\n        </div>\r\n\r\n        <div *ngIf=\"recentObj && recentObj.quotations && recentObj.quotations.length > 0\">\r\n          <ng-container *ngFor=\"let q of recentObj?.quotations | slice:0:1\">\r\n            <div class=\"lp-dashboard-box-body\">\r\n              <div class=\"bold\">{{ q.productName }}</div>\r\n              <div><span> {{ q.customerName }} </span>\r\n                <span class=\"pl-10\">{{ q.status }}</span>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"row my-row lp-dashboard-box-header flex bold\">\r\n          <div class=\"col-10\">Policies</div>\r\n          <div class=\"col-2 underline pointer\" (click)=\"goToSalePolicies()\">All></div>\r\n        </div>\r\n        <div *ngIf=\"recentObj && recentObj.policies && recentObj.policies.length > 0\">\r\n          <ng-container *ngFor=\"let p of recentObj?.policies  | slice: 0:1\">\r\n            <div class=\"lp-dashboard-box-body\">\r\n              <div class=\"bold\">{{ p.productName }}</div>\r\n              <div><span> {{ p.customerName }} </span>\r\n                <span class=\"pl-10\">{{ p.status }}</span>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <div class=\"row my-row lp-dashboard-box-header flex bold\">\r\n          <div class=\"col-10\">Campaign for Today\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"campaignArray.length > 0\">\r\n          <ng-container *ngFor=\"let c of campaignArray | slice:0:1\">\r\n            <div class=\"lp-dashboard-box-body\">\r\n              <div class=\"bold\">- {{ c.campaignName }}</div>\r\n              <div>\r\n                <span>{{ c.status }}</span>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"w-100\"></div>\r\n  <div class=\"col-sm-4 my-mt-5\">\r\n    <div class=\"card card-custom my-card my-block\">\r\n      <div class=\"my-p-10\">\r\n        <div class=\"my-center\"><span class=\"primary-color bold\">Things to Follow Up</span></div>\r\n      </div>\r\n\r\n      <div class=\"row my-row lp-dashboard-box-header flex\">\r\n        <div class=\"col-5\">Calendar</div>\r\n        <div class=\"col-5\">Today > </div>\r\n        <div class=\"col-2 underline pointer\" (click)=\"goToCalendar()\">All></div>\r\n      </div>\r\n\r\n      <div *ngIf=\"followUpArray.length > 0\">\r\n        <ng-container *ngFor=\"let followup of followUpArray  | slice: 0:3\">\r\n          <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n\r\n            <div class=\"col-2\"><img src=\"./assets/images/wine.png\" class=\"user-icon\" alt=\"\" />\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <div><span> {{ followup.title }} </span></div>\r\n              <div class=\"f-11\">\r\n                <span>{{ followup.customerName }}</span>\r\n                <span class=\"pl-10\">{{ followup.planDate | date:'medium' }} -\r\n                  {{ followup.dueDate | date:'medium'}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4 my-mt-5\">\r\n    <div class=\"card card-custom my-card my-block\">\r\n      <div class=\"my-p-10\">\r\n        <div class=\"my-center\"><span class=\"primary-color bold\">Overdue Activities</span></div>\r\n      </div>\r\n      <div class=\"row my-row lp-dashboard-box-header flex\">\r\n        <div class=\"col-5\">Backlog</div>\r\n        <div class=\"col-5\">Today > </div>\r\n        <div class=\"col-2 underline pointer\" (click)=\"goToCalendar()\">All></div>\r\n      </div>\r\n\r\n      <div *ngIf=\"backlogArray && backlogArray.length > 0\">\r\n\r\n        <ng-container *ngFor=\"let log of backlogArray | slice: 0:2\">\r\n          <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n            <div class=\"col-2\"><img src=\"./assets/images/medicalrecord.png\" class=\"user-icon\" alt=\"\" />\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <div><span>{{ log.title }}</span></div>\r\n              <div class=\"f-11\">\r\n                <span>{{ log.customerName }}</span>\r\n                <span class=\"pl-10\">Due {{ log.dueDate | date:'mediumDate' }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4 my-mt-5\">\r\n    <div class=\"card card-custom my-card my-block\">\r\n      <div class=\"my-p-10\">\r\n        <div class=\"my-center\"><span class=\"primary-color bold\">Leads</span></div>\r\n      </div>\r\n      <div class=\"row my-row lp-dashboard-box-header flex\">\r\n        <div class=\"col-10\">Leads Assigned</div>\r\n        <div class=\"col-2 underline pointer\" (click)=\"goToLeadList()\">All></div>\r\n      </div>\r\n      <div class=\"lp-dashboard-box-body flex my-p-5\" *ngIf=\"assignLeadArray && assignLeadArray.length > 0\">\r\n        <ng-container *ngFor=\"let obj of assignLeadArray | slice: 0:1\">\r\n          <div class=\"my-pl-10\">\r\n            <span>{{ obj.registerUserName }}</span>\r\n          </div>\r\n          <div class=\"my-pl-10\">\r\n            <span class=\"f-11\">Assigned on {{ obj.openDate | date:'shortDate' }} </span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 19911:
/*!****************************************************************!*\
  !*** ./src/app/pages/lp-dashboard/lp-dashboard.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".top-box {\n  color: #B5B5C3;\n  margin-left: 50px;\n}\n.top-box span {\n  color: #000;\n}\n.my-center {\n  text-align: center;\n}\n.user-image {\n  width: 120px;\n}\n.user-icon {\n  width: 35px;\n}\n.icon-image {\n  width: 20px;\n}\n.font-24 {\n  font-size: 24px !important;\n}\n.font-14 {\n  font-size: 14px !important;\n}\n.underline {\n  text-decoration: underline;\n}\n.bold {\n  font-weight: 600;\n}\n.flex {\n  display: flex;\n}\n.my-border-left {\n  border-left: 1px solid #7e8299;\n}\n.my-card-title {\n  justify-content: center;\n  width: 100%;\n}\n.width-100 {\n  width: 100%;\n}\n.float-right {\n  float: right;\n}\n.text-right {\n  text-align: right;\n}\n.my-p-15 {\n  padding: 40px 15px 15px 15px;\n}\n.my-profile-card {\n  padding: 8px 8px 8px 15px;\n  cursor: pointer;\n}\n.cursor {\n  cursor: pointer;\n}\n.my-border-bottom {\n  border-bottom: 1px solid #dad9d9;\n}\n.my-border-none {\n  border: none;\n}\n.my-p-10 {\n  padding: 10px;\n}\n.my-row {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.my-mt-5 {\n  margin-top: 5px;\n}\n.my-p-10 {\n  padding: 15px 15px 0px 15px;\n}\n.my-box, .box-3, .box-2, .box-1 {\n  width: 100px;\n  height: 100px;\n  color: #FFF;\n  margin-right: 8px;\n  padding: 8px;\n}\n.box-1 {\n  background-color: yellow;\n}\n.box-2 {\n  background-color: orange;\n}\n.box-3 {\n  background-color: #6868fa;\n}\n.container {\n  width: 100%;\n  min-height: 200px;\n}\n.prod-icon {\n  width: 40px;\n  margin-right: 10px;\n}\n.fist-panel-container {\n  width: 100%;\n  height: 50%;\n}\n.my-card {\n  overflow-y: auto;\n  background-color: #FFF !important;\n  border: 1px solid lightgrey !important;\n  margin: 5px;\n}\n.fixed-height, .my-card-fixed-height {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.my-card-fixed-height {\n  background-color: #FFF !important;\n  max-height: 600px;\n  margin: 5px;\n}\n.primary-color {\n  color: #005f99 !important;\n}\n.card-50 {\n  height: 230px;\n}\n#chart {\n  max-width: 650px;\n  margin: 35px auto;\n}\n.lp-dashboard-box-header {\n  padding: 5px;\n}\n.lp-dashboard-box-body {\n  padding-left: 30px;\n}\n.campaign-box {\n  height: 145px;\n  overflow-y: auto;\n}\n.my-block {\n  width: 100%;\n  max-height: 250px;\n  float: left;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxwLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFJQTtFQUNFLGtCQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFJQTtFQUNFLDBCQUFBO0FBREY7QUFJQTtFQUNFLDBCQUFBO0FBREY7QUFJQTtFQUNFLDBCQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7QUFERjtBQUlBO0VBQ0UsOEJBQUE7QUFERjtBQUlBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtBQURGO0FBSUE7RUFDRSxpQkFBQTtBQURGO0FBSUE7RUFDRSw0QkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7RUFDRSxnQ0FBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7QUFERjtBQUlBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFLQTtFQUNFLDJCQUFBO0FBRkY7QUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFFRSx3QkFBQTtBQUhGO0FBTUE7RUFFRSx3QkFBQTtBQUpGO0FBT0E7RUFFRSx5QkFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQVFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBTEY7QUFRQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBTEY7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7QUFMRjtBQVFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTEY7QUFRQTtFQUVFLGlDQUFBO0VBRUEsaUJBQUE7RUFDQSxXQUFBO0FBUEY7QUFVQTtFQUNFLHlCQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7QUFQRjtBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVBGO0FBV0E7RUFDRSxZQUFBO0FBUkY7QUFXQTtFQUNFLGtCQUFBO0FBUkY7QUFXQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQVJGO0FBV0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRiIsImZpbGUiOiJscC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJveCB7XHJcbiAgY29sb3IgICAgICA6ICNCNUI1QzM7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3IgICAgICAgICAgOiAjMDAwO1xyXG4gICAgLy8gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubXktY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG59XHJcblxyXG4uaWNvbi1pbWFnZSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5mb250LTI0IHtcclxuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtMTQge1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubXktYm9yZGVyLWxlZnQge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzdlODI5OTtcclxufVxyXG5cclxuLm15LWNhcmQtdGl0bGUge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoICAgICAgICAgIDogMTAwJTtcclxufVxyXG5cclxuLndpZHRoLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbG9hdC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5teS1wLTE1IHtcclxuICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcblxyXG4ubXktcHJvZmlsZS1jYXJkIHtcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAxNXB4O1xyXG4gIGN1cnNvciA6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm15LWJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTcsIDIxNyk7XHJcbn1cclxuXHJcbi5teS1ib3JkZXItbm9uZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubXktcC0xMCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm15LXJvdyB7XHJcbiAgbWFyZ2luLWxlZnQgOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXktbXQtNSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIDtcclxufVxyXG5cclxuLm15LXAtMTAge1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcclxufVxyXG5cclxuLm15LWJveCB7XHJcbiAgd2lkdGggICAgICAgOiAxMDBweDtcclxuICBoZWlnaHQgICAgICA6IDEwMHB4O1xyXG4gIGNvbG9yICAgICAgIDogI0ZGRjtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nICAgICA6IDhweDtcclxufVxyXG5cclxuLmJveC0xIHtcclxuICBAZXh0ZW5kIC5teS1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uYm94LTIge1xyXG4gIEBleHRlbmQgLm15LWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5ib3gtMyB7XHJcbiAgQGV4dGVuZCAubXktYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDEwNCwgMjUwKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGggICAgIDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnByb2QtaWNvbiB7XHJcbiAgd2lkdGggICAgICAgOiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZpc3QtcGFuZWwtY29udGFpbmVyIHtcclxuICB3aWR0aCA6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5teS1jYXJkIHtcclxuICBvdmVyZmxvdy15ICAgICAgOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgbGlnaHRncmV5ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luICAgICAgICAgIDogNXB4O1xyXG59XHJcblxyXG4uZml4ZWQtaGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLm15LWNhcmQtZml4ZWQtaGVpZ2h0IHtcclxuICBAZXh0ZW5kIC5maXhlZC1oZWlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlciA6IDFweCBzb2xpZCBsaWdodGdyZXkgIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0ICAgICAgOiA2MDBweDtcclxuICBtYXJnaW4gICAgICAgICAgOiA1cHg7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWNvbG9yIHtcclxuICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC01MCB7XHJcbiAgaGVpZ2h0OiAyMzBweDtcclxufVxyXG5cclxuI2NoYXJ0IHtcclxuICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gIG1hcmdpbiAgIDogMzVweCBhdXRvO1xyXG59XHJcblxyXG4vL2xwLWRhc2hib2FyZCBvbmx5XHJcbi5scC1kYXNoYm9hcmQtYm94LWhlYWRlciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubHAtZGFzaGJvYXJkLWJveC1ib2R5IHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jYW1wYWlnbi1ib3gge1xyXG4gIGhlaWdodCAgICA6IDE0NXB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5teS1ibG9jayB7XHJcbiAgd2lkdGggICAgICAgOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQgIDogMjUwcHg7XHJcbiAgZmxvYXQgICAgICAgOiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_lp-dashboard_lp-dashboard_module_ts.js.map