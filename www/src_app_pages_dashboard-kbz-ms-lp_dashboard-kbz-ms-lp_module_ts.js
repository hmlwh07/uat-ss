"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-kbz-ms-lp_dashboard-kbz-ms-lp_module_ts"],{

/***/ 38346:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsLpPageRoutingModule": () => (/* binding */ DashboardKbzMsLpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_kbz_ms_lp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page */ 44052);




const routes = [
    {
        path: '',
        component: _dashboard_kbz_ms_lp_page__WEBPACK_IMPORTED_MODULE_0__.DashboardKbzMsLpPage
    }
];
let DashboardKbzMsLpPageRoutingModule = class DashboardKbzMsLpPageRoutingModule {
};
DashboardKbzMsLpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardKbzMsLpPageRoutingModule);



/***/ }),

/***/ 97162:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsLpPageModule": () => (/* binding */ DashboardKbzMsLpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_kbz_ms_lp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp-routing.module */ 38346);
/* harmony import */ var _dashboard_kbz_ms_lp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page */ 44052);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);








let DashboardKbzMsLpPageModule = class DashboardKbzMsLpPageModule {
};
DashboardKbzMsLpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_2__.LanguageModule,
            _dashboard_kbz_ms_lp_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardKbzMsLpPageRoutingModule
        ],
        declarations: [_dashboard_kbz_ms_lp_page__WEBPACK_IMPORTED_MODULE_1__.DashboardKbzMsLpPage]
    })
], DashboardKbzMsLpPageModule);



/***/ }),

/***/ 44052:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsLpPage": () => (/* binding */ DashboardKbzMsLpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_kbz_ms_lp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page.html?ngResource */ 61351);
/* harmony import */ var _dashboard_kbz_ms_lp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page.scss?ngResource */ 36700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 98753);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-kbz-ms-senior/dashboard.service */ 59257);










let DashboardKbzMsLpPage = class DashboardKbzMsLpPage {
    constructor(platform, cdf, ngzone, route, auth, dashboardService, router) {
        this.platform = platform;
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
        this.DEFAULT_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/attachment-downloader/`;
        this.currentMonthIndex = new Date().getUTCMonth();
        this.icons = [
            {
                activityType: 'Face to Face',
                image: "./assets/images/group_chat_color-01.svg"
            },
            {
                activityType: 'Online',
                image: "./assets/images/world_color-01.svg"
            },
            {
                activityType: 'Phone Call',
                image: "./assets/images/phone_color-01.svg"
            },
        ];
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
        this.radioW = this.platform.width();
        ;
        this.radioH = this.platform.height();
        ;
        this.calculateMainContentHeight(this.radioW, this.radioH);
    }
    getImageURL(type) {
        let index = this.icons.findIndex(i => i.activityType == type);
        return this.icons[index].image;
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
        this.router.navigate(['/sales/quotation/list']);
    }
    goToSalePolicies() {
        this.router.navigate(['/sales/application/list']);
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
            this.salesH = mainContentHeight / 3;
            this.salesHpx = this.salesH - 25 + 'px';
            this.chartH = (mainContentHeight / 3);
            this.chartHpx = this.chartH - 49 + 'px';
            this.profileImgW = '120px';
            this.productImageWidth = '35px';
            this.profilePadding = '7px';
            this.productPadding = '7px 0';
        }
        else if (width <= 1000 || width < 1200) {
            mainContentHeight = height - (65 + 58 + 65 + 15);
            this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
            this.salesH = mainContentHeight / 3;
            this.salesHpx = this.salesH - 40 + 'px';
            this.chartH = (mainContentHeight / 3);
            this.chartHpx = this.chartH - 60 + 'px';
            this.profileImgW = '120px';
            this.productImageWidth = '35px';
            this.profilePadding = '7px';
            this.productPadding = '7px 0';
        }
        else {
            mainContentHeight = height - (65 + 58.8 + 65 + 15);
            this.profileHpx = (mainContentHeight / 2) - 20 + 'px';
            this.salesH = mainContentHeight / 3;
            this.salesHpx = this.salesH - 30 + 'px';
            this.chartH = (mainContentHeight / 3);
            this.chartHpx = this.chartH - 55 + 'px';
            this.profileImgW = '120px';
            this.productImageWidth = '35px';
            this.profilePadding = '7px';
            this.productPadding = '7px 0';
        }
        this.mainContentHeight = mainContentHeight;
        this.mainContentHeightPx = mainContentHeight + 'px';
    }
    changeSource(event) {
        event.target.src = "./assets/images/user_profile-01.svg";
    }
};
DashboardKbzMsLpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
DashboardKbzMsLpPage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['chart',] }]
};
DashboardKbzMsLpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-dashboard-kbz-ms-lp',
        template: _dashboard_kbz_ms_lp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_kbz_ms_lp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardKbzMsLpPage);



/***/ }),

/***/ 36700:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "div section {\n  width: 33.3333333333%;\n  float: left;\n  display: block;\n  padding: 0 15px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\ndiv section::-webkit-scrollbar {\n  display: none;\n}\n.dashboard-main {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile .img-content {\n  max-width: 124px;\n  max-height: 124px;\n  min-width: 100px;\n  min-height: 100px;\n  background: #b9fded;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 4%;\n}\n.profile ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.profile ion-label:last-child {\n  color: #404040;\n}\n.premium {\n  border-bottom: 1px solid #e3e3e3;\n}\n.premium ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.premium ion-label span {\n  color: #404040;\n}\n.premium ion-label:last-child {\n  color: #404040;\n}\n.title-color {\n  color: #005eaa;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.premuim-color {\n  color: #005eaa;\n}\n.product h2 {\n  font-size: 1rem !important;\n  color: #404040;\n  width: 100%;\n  font-weight: 600;\n}\n.product ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.product ion-list::-webkit-scrollbar {\n  display: none;\n}\nion-list ion-item {\n  padding: 0;\n  --min-height: 15px;\n  position: relative;\n}\nion-list ion-item ion-thumbnail {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  max-width: 40px !important;\n}\nion-list ion-item ion-text {\n  width: 50%;\n  font-size: 0.79rem;\n  padding: 0;\n  color: #404040;\n}\nion-list ion-item ion-text:last-child {\n  text-align: right;\n  position: absolute;\n  right: 0;\n}\nion-list ion-item:last-child {\n  border-bottom: none;\n  --border-width: 0 0 0px 0;\n}\n.sales-performance .date {\n  width: 100%;\n  overflow: hidden;\n}\n.sales-performance .date div {\n  width: 30%;\n  float: left;\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 0 !important;\n}\n.sales-performance .date div a {\n  cursor: pointer;\n  color: #005eaa;\n  float: right;\n  font-weight: 400;\n}\n.sales-performance .date div:nth-child(2) {\n  width: 25%;\n  padding: 0 6px;\n  text-align: center;\n}\n.sales-performance .date div:last-child {\n  width: 25%;\n  float: right;\n  border-right: none !important;\n}\n.sales-performance ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.sales-performance ion-list::-webkit-scrollbar {\n  display: none;\n}\n.sales-performance ion-list ion-row {\n  border-bottom: 1px solid #e3e3e3;\n}\n.sales-performance ion-list ion-row ion-col {\n  font-size: 0.79rem;\n  padding-left: 0;\n  color: #404040;\n}\n.sales-performance ion-list ion-row ion-col:nth-child(2) {\n  text-align: center;\n}\n.sales-performance ion-list ion-row ion-col:last-child {\n  text-align: right;\n}\n.chart div {\n  width: 100%;\n  overflow: hidden;\n}\n.chart ion-icon {\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.chart .sub-chart {\n  border-bottom: 1px solid #e3e3e3;\n  padding: 10px 0 0 0;\n}\n.chart .sub-chart .today {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px 10%;\n}\n.chart .sub-chart .today div {\n  width: 45%;\n  float: left;\n  background: #ff8100;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n.chart .sub-chart .today div p {\n  font-size: 0.79rem;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.chart .sub-chart .today div:last-child {\n  float: right;\n  background: #005eaa;\n}\n.chart .sub-chart .sub-title {\n  font-size: 1rem;\n  font-weight: 600;\n  padding-left: 0;\n  color: #404040;\n}\n.chart .sub-chart .link {\n  cursor: pointer;\n  color: #005eaa;\n  float: right;\n  font-weight: 400;\n  padding: 0;\n  text-align: right;\n}\n.chart .sub-chart:first-child {\n  padding-top: 0;\n}\n.chart .sub-chart:last-child {\n  border-bottom: none !important;\n}\n.chart .branch {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .branch div {\n  width: 50%;\n  float: left;\n  font-size: 0.79rem;\n}\n.chart ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.chart ion-list::-webkit-scrollbar {\n  display: none;\n}\n.chart ion-list ion-text {\n  position: unset !important;\n  text-align: left !important;\n  margin: 0 0 0 30px;\n}\n.chart ion-list ion-text p {\n  margin: 0 0 0 0;\n}\n@media (min-width: 280px) and (max-width: 620px) {\n  section {\n    width: 100% !important;\n    padding: 0 !important;\n    margin: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1rYnotbXMtbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0kscUJBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEwQixnQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0VBRXZCLGdEQUFBO0FBSFI7QUFJUTtFQUNJLGFBQUE7QUFGWjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU1JO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSlI7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1JO0VBQ0ksY0FBQTtBQUpSO0FBT0E7RUFDSSxnQ0FBQTtBQUpKO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFLUTtFQUNJLGNBQUE7QUFIWjtBQU1JO0VBQ0ksY0FBQTtBQUpSO0FBUUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEo7QUFPQTtFQUNJLGNBQUE7QUFKSjtBQVFJO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFPSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFKUjtBQUtRO0VBQ0ksYUFBQTtBQUhaO0FBU0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5SO0FBT1E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTFo7QUFPUTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFMWjtBQU9RO0VBQ0ksMEJBQUE7QUFMWjtBQU9RO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFMWjtBQU9RO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFMWjtBQVFJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQU5SO0FBa0JJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBZlI7QUFnQlE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBZFo7QUFlWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBYmhCO0FBZ0JRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWRaO0FBZ0JRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQWRaO0FBa0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQWZSO0FBZ0JRO0VBQ0ksYUFBQTtBQWRaO0FBZ0JRO0VBQ0ksZ0NBQUE7QUFkWjtBQWVZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWJoQjtBQWVZO0VBQ0ksa0JBQUE7QUFiaEI7QUFlWTtFQUNJLGlCQUFBO0FBYmhCO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBakJSO0FBb0JJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQWxCUjtBQW9CSTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUFsQlI7QUFtQlE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWpCWjtBQWtCWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFoQmhCO0FBaUJnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWZwQjtBQWtCWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQWhCaEI7QUFtQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWpCWjtBQW1CUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBakJaO0FBb0JJO0VBQ0ksY0FBQTtBQWxCUjtBQW9CSTtFQUNJLDhCQUFBO0FBbEJSO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBbEJSO0FBbUJRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWpCWjtBQXFCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFsQlI7QUFtQlE7RUFDSSxhQUFBO0FBakJaO0FBb0JRO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBbEJaO0FBbUJZO0VBQ0ksZUFBQTtBQWpCaEI7QUF1QkE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtFQXBCTjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC1rYnotbXMtbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIC8vd2lkdGg6IGNhbGMoMTAwcHggLyB2YXIoLS1yYXRpby13KSk7XHJcbiAgICAvL2hlaWdodDogY2FsYygxMDAlIC8gdmFyKC0tcmF0aW8taCkpO1xyXG4gICAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XHJcbiAgICAgICAgLy9oZWlnaHQ6IHZhcigtLXJhdGlvLWgpO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xyXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuXHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKHZhcigtLXJhdGlvLWgpIC0gKDU4LjhweCArIDYwcHgpKTtcclxuICAgIH1cclxufVxyXG4uZGFzaGJvYXJkLW1haW4ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gICAgLy9wYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgICAuaW1nLWNvbnRlbnQge1xyXG4gICAgICAgIG1heC13aWR0aDogMTI0cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTI0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjlmZGVkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgfVxyXG59XHJcbi5wcmVtaXVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gICAgLy9wYWRkaW5nOiAxMCUgMDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjMDA1ZWFhO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnByZW11aW0tY29sb3Ige1xyXG4gICAgY29sb3I6ICMwMDVlYWE7XHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xyXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuXHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGV4dDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2FsZXMtcGVyZm9ybWFuY2Uge1xyXG4gICAgaDMge1xyXG4gICAgICAgIHA6bnRoLWNoaWxkKDEpLFxyXG4gICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDA0MDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDA0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDVlYWE7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXHJcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXHJcblxyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcclxuICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY29sOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2hhcnQge1xyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnN1Yi1jaGFydCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcclxuICAgICAgICAudG9kYXkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMCU7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY4MTAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDVlYWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA1ZWFhO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdWItY2hhcnQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnN1Yi1jaGFydDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYnJhbmNoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXHJcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXHJcblxyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMzBweDtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyODBweCkgYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 61351:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"dashboard-main\" (window:resize)=\"onResize($event)\" [ngStyle]=\"{'height': mainContentHeightPx }\">\r\n  <section [ngStyle]=\"{'height': mainContentHeightPx}\">\r\n    <div style=\"margin: 0 0 10px 0;\">\r\n      <div class=\"profile\" [ngStyle]=\"{'padding-bottom': profilePadding}\">\r\n        <div class=\"img-content\" [ngStyle]=\"{'width': profileImgW,  'height': profileImgW}\">\r\n          <!-- assets/images/dashboard-usr.svg -->         \r\n          <img *ngIf=\"data?.agentInfo?.attId\" [src]=\"DEFAULT_DOWNLOAD_URL + data?.agentInfo?.attId\" style=\"width: 100%; height: 100%;\"\r\n          alt=\"profile\" />  \r\n          <img *ngIf=\"!data?.agentInfo?.attId\" src=\"./assets/temp-img/sale.jpeg\" alt=\"profile\"> \r\n\r\n        </div>\r\n        <ion-label class=\"title-color\">{{ data?.agentInfo?.employeeName }}</ion-label>\r\n        <ion-label>{{ data?.role }}</ion-label>\r\n      </div>\r\n      <div class=\"premium\" [ngStyle]=\"{'padding': productPadding}\">\r\n        <ion-label class=\"premuim-color\">{{\"CARD.premium\" | translate}}</ion-label>\r\n        <ion-label>{{ data?.agentInfo?.totalPremium | number: '1.2-2' }} <span><small>MMK</small></span></ion-label>\r\n      </div>\r\n    </div>\r\n    <div class=\"product\">\r\n      <h2>{{\"CARD.products\" | translate}}</h2>\r\n      <ion-list [ngStyle]=\"{'height': profileHpx}\">\r\n        <ion-item lines=\"full\" *ngFor=\"let product of data?.yearlyProductPremium\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\"\r\n              alt=\"\" srcset=\"\" >\r\n            <!-- <img *ngIf=\"productSmallIcon\" [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" alt=\"\"\r\n              (error)=\"changeSource($event)\"\r\n              srcset=\"\"> -->\r\n          </ion-thumbnail>\r\n          <ion-text>{{ product.productName }}</ion-text>\r\n          <ion-text style=\"font-weight: 600;\">{{ product.premium | number: '1.2-2' }} MMK</ion-text>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </section>\r\n  <section class=\"sales-performance\" [ngStyle]=\"{'height': mainContentHeightPx}\">\r\n    <h2 class=\"title-color\">{{\"CARD.recent_operations\" | translate}}</h2>\r\n    <div>\r\n      <div class=\"date\">\r\n        <div>{{\"CARD.quotes\" | translate}}</div>\r\n        <div><a (click)=\"goToSaleQuotation()\">{{\"CARD.all\" | translate}}</a></div>\r\n      </div>\r\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\r\n        <ion-row *ngFor=\"let q of recentObj?.quotations | slice:0:1\">\r\n          <ion-col>{{ q.productName }}</ion-col>\r\n          <ion-col>{{ q.customerName }}</ion-col>\r\n          <ion-col>{{ q.status == \"in_progress\" ? \"In Progress\" : (q.status | titlecase) }}</ion-col>\r\n        </ion-row>\r\n      </ion-list>\r\n    </div>\r\n    <div>\r\n      <div class=\"date\">\r\n        <div>{{\"CARD.policies\" | translate}}</div>\r\n        <div><a (click)=\"goToSalePolicies()\">{{\"CARD.all\" | translate}}</a></div>\r\n      </div>\r\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\r\n        <ion-row *ngFor=\"let p of recentObj?.policies  | slice: 0:1\">\r\n          <ion-col>{{ p.productName }}</ion-col>\r\n          <ion-col>{{ p.customerName }}</ion-col>\r\n          <ion-col>{{ p.status == \"in_progress\" ? \"In Progress\" : (p.status | titlecase) }}</ion-col>\r\n        </ion-row>\r\n      </ion-list>\r\n    </div>\r\n    <div>\r\n      <div class=\"date\">\r\n        <div style=\"width: 100%;\">Campaign for Today</div>\r\n        <div></div>\r\n      </div>\r\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\r\n        <ion-row *ngFor=\"let c of campaignArray | slice:0:1\">\r\n          <ion-col>{{ c.campaignName }}</ion-col>\r\n          <ion-col>{{ c.status }}</ion-col>\r\n        </ion-row>\r\n      </ion-list>\r\n    </div>\r\n  </section>\r\n  <section class=\"chart\" [ngStyle]=\"{'height': mainContentHeightPx}\">\r\n    <div class=\"sub-chart\">\r\n      <h2 class=\"title-color\">{{\"CARD.things_to_followup\" | translate}}</h2>\r\n      <div class=\"row\" style=\"margin: 0;\">\r\n        <div class=\"col-5 sub-title\">{{\"CARD.calendar\" | translate}}</div>\r\n        <div class=\"col-5\">{{\"CARD.today\" | translate}}\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"col-2 underline pointer link\" (click)=\"goToCalendar()\"><a>{{\"CARD.all\" | translate}}</a></div>\r\n      </div>\r\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\r\n        <ion-item lines=\"full\" *ngFor=\"let followup of followUpArray  | slice: 0:3\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img [src]=\"getImageURL(followup.activityType)\" class=\"prod-icon\" alt=\"\" srcset=\"\">\r\n          </ion-thumbnail>\r\n          <ion-text style=\"margin: 0; width: 100%; \">\r\n            <ion-text style=\"margin: 0; font-weight: 600;  width: 100%;display: block; \">{{ followup.title }}</ion-text>\r\n            <ion-text style=\"margin: 0;float: left; \">{{ followup.customerName }}</ion-text>\r\n            <ion-text style=\"margin: 0;\">Due {{ followup.dueDate | date:'mediumDate' }}</ion-text>\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div class=\"sub-chart\">\r\n      <h2 class=\"title-color\">Overdue Activities</h2>\r\n      <div class=\"row\" style=\"margin: 0;\">\r\n        <div class=\"col-5 sub-title\">{{\"CARD.backlog\" | translate}}</div>\r\n        <div class=\"col-5\">{{\"CARD.today\" | translate}}\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"col-2 underline pointer link\" (click)=\"goToCalendar()\"><a>{{\"CARD.all\" | translate}}</a></div>\r\n      </div>\r\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\r\n        <ion-item lines=\"full\" *ngFor=\"let log of backlogArray | slice: 0:2\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img [src]=\"getImageURL(log.activityType)\" class=\"prod-icon\" alt=\"\" srcset=\"\">\r\n          </ion-thumbnail>\r\n          <ion-text style=\"margin: 0; width: 100%; \">\r\n            <ion-text style=\"margin: 0; font-weight: 600;  width: 100%;display: block; \">{{ log.title }}</ion-text>\r\n            <ion-text style=\"margin: 0;float: left; \">{{ log.customerName }}</ion-text>\r\n            <ion-text style=\"margin: 0;\">Due {{ log.dueDate | date:'mediumDate' }}</ion-text>\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div class=\"sub-chart\">\r\n      <h2 class=\"title-color\">Opportunities</h2>\r\n      <div class=\"row\" style=\"margin: 0;\">\r\n        <div class=\"col-10 sub-title\">Opportunities Assigned</div>\r\n        <div class=\"col-2 underline pointer link\" (click)=\"goToLeadList()\"><a>{{\"CARD.all\" | translate}}</a></div>\r\n      </div>\r\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\r\n        <ion-item lines=\"full\" *ngFor=\"let obj of assignLeadArray | slice: 0:1\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"./assets/images/dashboard-user.png\" class=\"user-icon\" alt=\"\" />\r\n          </ion-avatar>\r\n          <ion-text style=\"margin: 0; margin: 0; font-weight: 600;\"> {{ obj.registerUserName }}</ion-text>\r\n          <ion-text style=\"margin: 0; margin: 0;\">Assigned on {{ obj.openDate | date:'shortDate' }}\r\n          </ion-text>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </section>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-kbz-ms-lp_dashboard-kbz-ms-lp_module_ts.js.map