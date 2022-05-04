"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-kbz-ms-lp_dashboard-kbz-ms-lp_module_ts"],{

/***/ 52836:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsLpPageRoutingModule": () => (/* binding */ DashboardKbzMsLpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dashboard_kbz_ms_lp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page */ 1903);




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

/***/ 13362:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsLpPageModule": () => (/* binding */ DashboardKbzMsLpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _dashboard_kbz_ms_lp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp-routing.module */ 52836);
/* harmony import */ var _dashboard_kbz_ms_lp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page */ 1903);







let DashboardKbzMsLpPageModule = class DashboardKbzMsLpPageModule {
};
DashboardKbzMsLpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_kbz_ms_lp_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardKbzMsLpPageRoutingModule
        ],
        declarations: [_dashboard_kbz_ms_lp_page__WEBPACK_IMPORTED_MODULE_1__.DashboardKbzMsLpPage]
    })
], DashboardKbzMsLpPageModule);



/***/ }),

/***/ 1903:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsLpPage": () => (/* binding */ DashboardKbzMsLpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_kbz_ms_lp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard-kbz-ms-lp.page.html */ 61155);
/* harmony import */ var _dashboard_kbz_ms_lp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page.scss */ 95920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 69380);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-kbz-ms-senior/dashboard.service */ 75199);










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
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_kbz_ms_lp_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_kbz_ms_lp_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardKbzMsLpPage);



/***/ }),

/***/ 61155:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.page.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dashboard-main\" (window:resize)=\"onResize($event)\" [ngStyle]=\"{'height': mainContentHeightPx }\">\n  <section [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div style=\"margin: 0 0 10px 0;\">\n      <div class=\"profile\" [ngStyle]=\"{'padding-bottom': profilePadding}\">\n        <div class=\"img-content\" [ngStyle]=\"{'width': profileImgW,  'height': profileImgW}\">\n          <img src=\"../../../assets/images/dashboard-usr.svg\" alt=\"profile\">\n        </div>\n        <ion-label class=\"title-color\">{{ data?.agentInfo?.employeeName }}</ion-label>\n        <ion-label>{{ data?.role }}</ion-label>\n      </div>\n      <div class=\"premium\" [ngStyle]=\"{'padding': productPadding}\">\n        <ion-label class=\"premuim-color\">Premium</ion-label>\n        <ion-label>{{ data?.agentInfo?.totalPremium | number: '1.2-2' }} <span><small>MMK</small></span></ion-label>\n      </div>\n    </div>\n    <div class=\"product\">\n      <h2>Products</h2>\n      <ion-list [ngStyle]=\"{'height': profileHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let product of data?.yearlyProductPremium\">\n          <ion-thumbnail slot=\"start\">\n            <img *ngIf=\"!productSmallIcon\" [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\"\n              alt=\"\" srcset=\"\">\n            <img *ngIf=\"productSmallIcon\" [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" alt=\"\"\n              srcset=\"\">\n          </ion-thumbnail>\n          <ion-text>{{ product.productName }}</ion-text>\n          <ion-text style=\"font-weight: 600;\">{{ product.premium | number: '1.2-2' }} MMK</ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n  <section class=\"sales-performance\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <h2 class=\"title-color\">Recent Operations</h2>\n    <div>\n      <div class=\"date\">\n        <div>Quotes</div>\n        <div><a (click)=\"goToSaleQuotation()\">All</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\n        <ion-row *ngFor=\"let q of recentObj?.quotations | slice:0:1\">\n          <ion-col>{{ q.productName }}</ion-col>\n          <ion-col>{{ q.customerName }}</ion-col>\n          <ion-col>{{ q.status == \"in_progress\" ? \"In Progress\" : (q.status | titlecase) }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n    <div>\n      <div class=\"date\">\n        <div>Policies</div>\n        <div><a (click)=\"goToSalePolicies()\">All</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\n        <ion-row *ngFor=\"let p of recentObj?.policies  | slice: 0:1\">\n          <ion-col>{{ p.productName }}</ion-col>\n          <ion-col>{{ p.customerName }}</ion-col>\n          <ion-col>{{ p.status == \"in_progress\" ? \"In Progress\" : (p.status | titlecase) }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n    <div>\n      <div class=\"date\">\n        <div style=\"width: 100%;\">Campaign for Today</div>\n        <div></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\n        <ion-row *ngFor=\"let c of campaignArray | slice:0:1\">\n          <ion-col>{{ c.campaignName }}</ion-col>\n          <ion-col>{{ c.status }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n  </section>\n  <section class=\"chart\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">Things to Follow Up</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-5 sub-title\">Calendar</div>\n        <div class=\"col-5\">Today\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToCalendar()\"><a>All</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let followup of followUpArray  | slice: 0:3\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"getImageURL(followup.activityType)\" class=\"prod-icon\" alt=\"\" srcset=\"\">\n          </ion-thumbnail>\n          <ion-text style=\"margin: 0; width: 100%; \">\n            <ion-text style=\"margin: 0; font-weight: 600;  width: 100%;display: block; \">{{ followup.title }}</ion-text>\n            <ion-text style=\"margin: 0;float: left; \">{{ followup.customerName }}</ion-text>\n            <ion-text style=\"margin: 0;\">Due {{ followup.dueDate | date:'mediumDate' }}</ion-text>\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">Overdue Activities</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-5 sub-title\">Backlog</div>\n        <div class=\"col-5\">Today\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToCalendar()\"><a>All</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let log of backlogArray | slice: 0:2\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"getImageURL(log.activityType)\" class=\"prod-icon\" alt=\"\" srcset=\"\">\n          </ion-thumbnail>\n          <ion-text style=\"margin: 0; width: 100%; \">\n            <ion-text style=\"margin: 0; font-weight: 600;  width: 100%;display: block; \">{{ log.title }}</ion-text>\n            <ion-text style=\"margin: 0;float: left; \">{{ log.customerName }}</ion-text>\n            <ion-text style=\"margin: 0;\">Due {{ log.dueDate | date:'mediumDate' }}</ion-text>\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">Leads</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-10 sub-title\">Leads Assigned</div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToLeadList()\"><a>All</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let obj of assignLeadArray | slice: 0:1\">\n          <ion-avatar slot=\"start\">\n            <img src=\"./assets/images/dashboard-user.png\" class=\"user-icon\" alt=\"\" />\n          </ion-avatar>\n          <ion-text style=\"margin: 0; margin: 0; font-weight: 600;\"> {{ obj.registerUserName }}</ion-text>\n          <ion-text style=\"margin: 0; margin: 0;\">Assigned on {{ obj.openDate | date:'shortDate' }}\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n</div>");

/***/ }),

/***/ 95920:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.page.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "div section {\n  width: 33.3333333333%;\n  float: left;\n  display: block;\n  padding: 0 15px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\ndiv section::-webkit-scrollbar {\n  display: none;\n}\n.dashboard-main {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile .img-content {\n  max-width: 124px;\n  max-height: 124px;\n  min-width: 100px;\n  min-height: 100px;\n  background: #b9fded;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 4%;\n}\n.profile ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.profile ion-label:last-child {\n  color: #404040;\n}\n.premium {\n  border-bottom: 1px solid #e3e3e3;\n}\n.premium ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.premium ion-label span {\n  color: #404040;\n}\n.premium ion-label:last-child {\n  color: #404040;\n}\n.title-color {\n  color: #005eaa;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.premuim-color {\n  color: #005eaa;\n}\n.product h2 {\n  font-size: 1rem !important;\n  color: #404040;\n  width: 100%;\n  font-weight: 600;\n}\n.product ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.product ion-list::-webkit-scrollbar {\n  display: none;\n}\nion-list ion-item {\n  padding: 0;\n  --min-height: 15px;\n  position: relative;\n}\nion-list ion-item ion-thumbnail {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  max-width: 40px !important;\n}\nion-list ion-item ion-text {\n  width: 50%;\n  font-size: 0.79rem;\n  padding: 0;\n  color: #404040;\n}\nion-list ion-item ion-text:last-child {\n  text-align: right;\n  position: absolute;\n  right: 0;\n}\nion-list ion-item:last-child {\n  border-bottom: none;\n  --border-width: 0 0 0px 0;\n}\n.sales-performance h3 p:nth-child(1),\n.sales-performance h3 p:nth-child(2) {\n  border-right: 1px solid #404040;\n}\n.sales-performance .date {\n  width: 100%;\n  overflow: hidden;\n}\n.sales-performance .date div {\n  width: 30%;\n  float: left;\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 0 !important;\n}\n.sales-performance .date div a {\n  cursor: pointer;\n  color: #005eaa;\n  float: right;\n  font-weight: 400;\n}\n.sales-performance .date div:nth-child(2) {\n  width: 25%;\n  padding: 0 6px;\n  text-align: center;\n}\n.sales-performance .date div:last-child {\n  width: 25%;\n  float: right;\n  border-right: none !important;\n}\n.sales-performance ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.sales-performance ion-list::-webkit-scrollbar {\n  display: none;\n}\n.sales-performance ion-list ion-row {\n  border-bottom: 1px solid #e3e3e3;\n}\n.sales-performance ion-list ion-row ion-col {\n  font-size: 0.79rem;\n  padding-left: 0;\n  color: #404040;\n}\n.sales-performance ion-list ion-row ion-col:nth-child(2) {\n  text-align: center;\n}\n.sales-performance ion-list ion-row ion-col:last-child {\n  text-align: right;\n}\n.chart div {\n  width: 100%;\n  overflow: hidden;\n}\n.chart ion-icon {\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.chart .sub-chart {\n  border-bottom: 1px solid #e3e3e3;\n  padding: 10px 0 0 0;\n}\n.chart .sub-chart .today {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px 10%;\n}\n.chart .sub-chart .today div {\n  width: 45%;\n  float: left;\n  background: #ff8100;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n.chart .sub-chart .today div p {\n  font-size: 0.79rem;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.chart .sub-chart .today div:last-child {\n  float: right;\n  background: #005eaa;\n}\n.chart .sub-chart .sub-title {\n  font-size: 1rem;\n  font-weight: 600;\n  padding-left: 0;\n  color: #404040;\n}\n.chart .sub-chart .link {\n  cursor: pointer;\n  color: #005eaa;\n  float: right;\n  font-weight: 400;\n  padding: 0;\n  text-align: right;\n}\n.chart .sub-chart:first-child {\n  padding-top: 0;\n}\n.chart .sub-chart:last-child {\n  border-bottom: none !important;\n}\n.chart .branch {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .branch div {\n  width: 50%;\n  float: left;\n  font-size: 0.79rem;\n}\n.chart ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.chart ion-list::-webkit-scrollbar {\n  display: none;\n}\n.chart ion-list ion-text {\n  position: unset !important;\n  text-align: left !important;\n  margin: 0 0 0 30px;\n}\n.chart ion-list ion-text p {\n  margin: 0 0 0 0;\n}\n@media (min-width: 280px) and (max-width: 620px) {\n  section {\n    width: 100% !important;\n    padding: 0 !important;\n    margin: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1rYnotbXMtbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0kscUJBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEwQixnQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0VBRXZCLGdEQUFBO0FBSFI7QUFJUTtFQUNJLGFBQUE7QUFGWjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU1JO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSlI7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1JO0VBQ0ksY0FBQTtBQUpSO0FBT0E7RUFDSSxnQ0FBQTtBQUpKO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFLUTtFQUNJLGNBQUE7QUFIWjtBQU1JO0VBQ0ksY0FBQTtBQUpSO0FBUUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEo7QUFPQTtFQUNJLGNBQUE7QUFKSjtBQVFJO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFPSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFKUjtBQUtRO0VBQ0ksYUFBQTtBQUhaO0FBU0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5SO0FBT1E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTFo7QUFPUTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFMWjtBQU9RO0VBQ0ksMEJBQUE7QUFMWjtBQU9RO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFMWjtBQU9RO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFMWjtBQVFJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQU5SO0FBWVE7O0VBRUksK0JBQUE7QUFUWjtBQVlJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBVlI7QUFXUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFUWjtBQVVZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7QUFXUTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFUWjtBQVdRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVRaO0FBYUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEwQixnQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0VBRXZCLGdEQUFBO0FBVlI7QUFXUTtFQUNJLGFBQUE7QUFUWjtBQVdRO0VBQ0ksZ0NBQUE7QUFUWjtBQVVZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVJoQjtBQVVZO0VBQ0ksa0JBQUE7QUFSaEI7QUFVWTtFQUNJLGlCQUFBO0FBUmhCO0FBZUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFaUjtBQWVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQWJSO0FBZUk7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FBYlI7QUFjUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWlo7QUFhWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFYaEI7QUFZZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFWcEI7QUFhWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQVhoQjtBQWNRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFaWjtBQWNRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFaWjtBQWVJO0VBQ0ksY0FBQTtBQWJSO0FBZUk7RUFDSSw4QkFBQTtBQWJSO0FBZUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFiUjtBQWNRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVpaO0FBZ0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQWJSO0FBY1E7RUFDSSxhQUFBO0FBWlo7QUFlUTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQWJaO0FBY1k7RUFDSSxlQUFBO0FBWmhCO0FBa0JBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7RUFmTjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC1rYnotbXMtbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICAvL3dpZHRoOiBjYWxjKDEwMHB4IC8gdmFyKC0tcmF0aW8tdykpO1xuICAgIC8vaGVpZ2h0OiBjYWxjKDEwMCUgLyB2YXIoLS1yYXRpby1oKSk7XG4gICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcbiAgICAgICAgLy9oZWlnaHQ6IHZhcigtLXJhdGlvLWgpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoZWlnaHQ6IGNhbGModmFyKC0tcmF0aW8taCkgLSAoNTguOHB4ICsgNjBweCkpO1xuICAgIH1cbn1cbi5kYXNoYm9hcmQtbWFpbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG59XG5cbi5wcm9maWxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAvL3BhZGRpbmctYm90dG9tOiA0JTtcbiAgICAuaW1nLWNvbnRlbnQge1xuICAgICAgICBtYXgtd2lkdGg6IDEyNHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMjRweDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiOWZkZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgICAgXG4gICAgfVxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgfVxufVxuLnByZW1pdW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgIC8vcGFkZGluZzogMTAlIDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxhYmVsOmxhc3QtY2hpbGQge1xuICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICB9XG59XG5cbi50aXRsZS1jb2xvciB7XG4gICAgY29sb3I6ICMwMDVlYWE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLnByZW11aW0tY29sb3Ige1xuICAgIGNvbG9yOiAjMDA1ZWFhO1xufVxuXG4ucHJvZHVjdCB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cblxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC0tbWluLWhlaWdodDogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgfVxufVxuXG4uc2FsZXMtcGVyZm9ybWFuY2Uge1xuICAgIGgzIHtcbiAgICAgICAgcDpudGgtY2hpbGQoMSksXG4gICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRhdGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDVlYWE7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNvbDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jaGFydCB7XG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgfVxuICAgIC5zdWItY2hhcnQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgICAgICAgLnRvZGF5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTAlO1xuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjgxMDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNWVhYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3ViLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgfVxuICAgICAgICAubGluayB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzAwNWVhYTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN1Yi1jaGFydDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICAuc3ViLWNoYXJ0Omxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5icmFuY2gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAzMHB4O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-kbz-ms-lp_dashboard-kbz-ms-lp_module_ts.js.map