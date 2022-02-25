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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lp_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lp-dashboard.component.html */ 78685);
/* harmony import */ var _lp_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lp-dashboard.component.scss */ 19911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _senior_lp_dashboard_senior_lp_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../senior-lp-dashboard/senior-lp-dashboard.service */ 61596);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 69380);








let LpDashboardComponent = class LpDashboardComponent {
    constructor(route, auth, dashboardService, router) {
        this.route = route;
        this.auth = auth;
        this.dashboardService = dashboardService;
        this.router = router;
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id = JSON.parse(params.empId);
            this.loadForm();
        }));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.getList();
            this.getRecentList();
            this.getCampaignList();
        });
    }
    loadForm() {
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            "empId": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.id)
        });
    }
    getList() {
        this.dashboardService.getList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.data = res;
            }
        });
    }
    getRecentList() {
        this.dashboardService.getRecentList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.recentObj = res;
                console.log('this.recentObj', this.recentObj);
            }
        });
    }
    getCampaignList() {
        this.dashboardService.getCampaignList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.campaign = res;
            }
        });
    }
    ngOnDestroy() {
    }
};
LpDashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _senior_lp_dashboard_senior_lp_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
LpDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-page-review/static-pages-reivew.module */ 18410);









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
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row my-row\">\r\n  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 my-mt-5\">\r\n    <div class=\"card card-custom my-card\">\r\n      <div class=\"card-header card-50\">\r\n        <div class=\"card-title my-card-title\">\r\n          <div class=\"my-center\">\r\n            <img src=\"./assets/images/dashboard-user.png\" class=\"user-image\" alt=\"\" />\r\n            <br>\r\n            <label class=\"text-dark center\">{{ data.agentInfo.employeeName }}</label><br>\r\n            <label class=\"text-dark center\">S00012 (LP) </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body customer-card-body card-50\" style=\"margin-top: 10px;\">\r\n        <div class=\"row my-row mb-5\">\r\n          <div class=\"col-10\">\r\n            <label>Premium {{ data?.yearlyTotalPremium?.year }} {{ data.agentInfo.branchName }}</label>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <img src=\"./assets/images/alert.png\" class=\"icon-image\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-5\">\r\n          <label style=\"padding-left: 50px;\"><span class=\"font-weight-bolder text-dark center font-24\">\r\n              {{ data.agentInfo.totalPremium }}\r\n            </span>\r\n            <span><sup>MMk</sup></span></label>\r\n        </div>\r\n        <div>\r\n          <div class=\"row my-row\">\r\n            <div class=\"col-12\">\r\n              <label class=\"font-weight-bolder text-dark underline\">Products</label>\r\n            </div>\r\n          </div>\r\n          <ng-container *ngFor=\"let product of data?.yearlyProductPremium\">\r\n            <div class=\"row my-row\">\r\n              <div class=\"col-6\">{{ product.productName }}</div>\r\n              <div class=\"col-6\">: {{ product.premium }} MMK</div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 my-mt-5\">\r\n    <div class=\"card card-custom my-card\">\r\n      <div class=\"my-p-10\">\r\n        <div class=\"my-center\"><span class=\"bold\">Recent Operations</span></div>\r\n      </div>\r\n      <div>\r\n        <div class=\"row my-row lp-dashboard-box-header flex bold\">\r\n          <div class=\"col-10\">Quotes</div>\r\n          <div class=\"col-2 underline\">All ></div>\r\n        </div>\r\n        <br>\r\n\r\n        <div class=\"lp-dashboard-box-body\">\r\n          <div class=\"bold\">{{ recentObj.quotations[0].productName  }}</div>\r\n          <div><span> {{ recentObj.quotations[0].customerName }} </span>\r\n            <span class=\"pl-10\">{{ recentObj.quotations[0].status }}</span>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"lp-dashboard-box-body\">\r\n          <div class=\"bold\">{{ recentObj.quotations[1].productName  }}</div>\r\n          <div><span> {{ recentObj.quotations[1].customerName }} </span>\r\n            <span class=\"pl-10\">{{ recentObj.quotations[1].status }}</span>\r\n          </div>\r\n        </div>\r\n        <br>\r\n\r\n        <div class=\"row my-row lp-dashboard-box-header flex bold\">\r\n          <div class=\"col-10\">Policies</div>\r\n          <div class=\"col-2 underline\">All ></div>\r\n        </div>\r\n        <br>\r\n        <div class=\"lp-dashboard-box-body\">\r\n          <div class=\"bold\">{{ recentObj.policies[0].productName  }}</div>\r\n          <div><span> {{ recentObj.policies[0].customerName }} </span>\r\n            <span class=\"pl-10\">{{ recentObj.policies[0].status }}</span>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"lp-dashboard-box-body\">\r\n          <div class=\"bold\">{{ recentObj.policies[1].productName  }}</div>\r\n          <div><span> {{ recentObj.policies[1].customerName }} </span>\r\n            <span class=\"pl-10\">{{ recentObj.policies[1].status }}</span>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 my-mt-5\">\r\n    <div class=\"card card-custom my-card\">\r\n      <div class=\"my-p-10\">\r\n        <div class=\"my-center\"><span class=\"bold\">Things to Follow Up</span></div>\r\n      </div>\r\n\r\n      <div>\r\n        <div class=\"row my-row lp-dashboard-box-header flex\">\r\n          <div class=\"col-5\">Calendar</div>\r\n          <div class=\"col-5\">Today > </div>\r\n          <div class=\"col-2 underline\">All ></div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n          <div class=\"col-2\"><img src=\"./assets/images/wine.png\" class=\"user-icon\" alt=\"\" />\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <div><span>Lunch with Customer</span></div>\r\n            <div class=\"f-11\">\r\n              <span>Gerry Guo</span>\r\n              <span class=\"pl-10\">01 Sep 12:00 - 1:00 PM</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n          <div class=\"col-2\"><img src=\"./assets/images/actbdcakeivity.png\" class=\"user-icon\" alt=\"\" />\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <div><span>Tony Tang's 30th Birthday</span></div>\r\n            <div class=\"f-11\">\r\n              <span>Gerry Guo</span>\r\n              <span class=\"pl-10\">01 Sep</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n          <div class=\"col-2\"><img src=\"./assets/images/activity.png\" class=\"user-icon\" alt=\"\" />\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <div><span>Other Activity</span></div>\r\n            <div class=\"f-11\">\r\n              <span>Gerry Guo</span>\r\n              <span class=\"pl-10\">01 Sep 12:00 - 1:00 PM</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n          <div class=\"col-2\"><img src=\"./assets/images/activity.png\" class=\"user-icon\" alt=\"\" />\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <div><span>Other Activity</span></div>\r\n            <div class=\"f-11\">\r\n              <span>Gerry Guo</span>\r\n              <span class=\"pl-10\">01 Sep 12:00 - 1:00 PM</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div>\r\n        <div class=\"row my-row lp-dashboard-box-header flex\">\r\n          <div class=\"col-5\">Backlog</div>\r\n          <div class=\"col-5\">Today > </div>\r\n          <div class=\"col-2 underline\">All></div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n          <div class=\"col-2\"><img src=\"./assets/images/medicalrecord.png\" class=\"user-icon\" alt=\"\" />\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <div><span>Get Medical Report</span></div>\r\n            <div class=\"f-11\">\r\n              <span>Gerry Guo</span>\r\n              <span class=\"pl-10\">Due 01 Oct</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n          <div class=\"col-2\"><img src=\"./assets/images/medicalrecord.png\" class=\"user-icon\" alt=\"\" />\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <div><span>Get Medical Report</span></div>\r\n            <div class=\"f-11\">\r\n              <span>Gerry Guo</span>\r\n              <span class=\"pl-10\">Due 01 Oct</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body flex my-p-5\">\r\n          <div class=\"col-2\"><img src=\"./assets/images/wine.png\" class=\"user-icon\" alt=\"\" />\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <div><span>Dinner</span></div>\r\n            <div class=\"f-11\">\r\n              <span>Gerry Guo</span>\r\n              <span class=\"pl-10\">Due 01 Oct</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div>\r\n        <div class=\"row my-row lp-dashboard-box-header flex\">\r\n          <div class=\"col-10\">Leads Assigned</div>\r\n          <div class=\"col-2 underline\">All></div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body\">\r\n          <div class=\"my-pl-10\">\r\n            <span>Gerry Guo</span>\r\n          </div>\r\n          <div class=\"my-pl-10\">\r\n            <span class=\"f-11\">Assigned on 01/01/2020</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"lp-dashboard-box-body\">\r\n          <div class=\"my-pl-10\">\r\n            <span>Tony Tang</span>\r\n          </div>\r\n          <div class=\"my-pl-10\">\r\n            <span class=\"f-11\">Assigned on 01/01/2020</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 19911:
/*!****************************************************************!*\
  !*** ./src/app/pages/lp-dashboard/lp-dashboard.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".top-box {\n  color: #B5B5C3;\n  margin-left: 50px;\n}\n.top-box span {\n  color: #000;\n}\n.my-center {\n  text-align: center;\n}\n.user-image {\n  width: 100px;\n  margin-bottom: 15px;\n}\n.user-icon {\n  width: 35px;\n}\n.icon-image {\n  width: 20px;\n}\n.font-24 {\n  font-size: 24px !important;\n}\n.bold {\n  font-weight: 600;\n}\n.underline {\n  text-decoration: underline;\n}\n.bold {\n  font-weight: 600;\n}\n.flex {\n  display: flex;\n}\n.my-border-left {\n  border-left: 1px solid rgba(56, 55, 55, 0.12);\n}\n.my-card-title {\n  justify-content: center;\n  width: 100%;\n}\n.width-100 {\n  width: 100%;\n}\n.float-right {\n  float: right;\n}\n.my-border-bottom {\n  border-bottom: 1px solid #dad9d9;\n}\n.my-border-none {\n  border: none;\n}\n.my-p-10 {\n  padding: 10px;\n}\n.my-row {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.my-mt-5 {\n  margin-top: 5px;\n}\n.my-p-10 {\n  padding: 15px;\n}\n.my-p-5 {\n  padding: 5px;\n}\n.lp-dashboard-box-header {\n  padding: 5px;\n}\n.lp-dashboard-box-body {\n  padding-left: 30px;\n}\n.f-14 {\n  font-size: 14px;\n}\n.f-11 {\n  font-size: 11px;\n}\n.my-pl-10 {\n  padding-left: 10px;\n}\n.campaign-box {\n  height: 145px;\n  overflow-y: auto;\n}\n.my-card {\n  max-height: calc(100vh - 215px);\n  min-height: 530px;\n  overflow-y: auto;\n}\n.card-50 {\n  height: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxwLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFJQTtFQUNFLGtCQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUlBO0VBQ0UsMEJBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7QUFERjtBQUlBO0VBQ0UsMEJBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtBQURGO0FBSUE7RUFDRSw2Q0FBQTtBQURGO0FBSUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFJQTtFQUNFLGdDQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtBQURGO0FBR0E7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtBQUFGO0FBRUE7RUFDRSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImxwLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9wLWJveHtcclxuICBjb2xvcjogI0I1QjVDMztcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBzcGFue1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgIC8vICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuIH1cclxuXHJcbi5teS1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi51c2VyLWljb257XHJcbiAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbi5pY29uLWltYWdle1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uZm9udC0yNHtcclxuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnVuZGVybGluZXtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZsZXh7XHJcbiAgZGlzcGxheSA6IGZsZXg7XHJcbn1cclxuXHJcbi5teS1ib3JkZXItbGVmdHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoNTYsIDU1LCA1NSwgMC4xMik7XHJcbn1cclxuXHJcbi5teS1jYXJkLXRpdGxle1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2lkdGgtMTAwe1xyXG4gIHdpZHRoIDogMTAwJTtcclxufVxyXG5cclxuLmZsb2F0LXJpZ2h0e1xyXG4gIGZsb2F0IDogcmlnaHQ7XHJcbn1cclxuXHJcbi5teS1ib3JkZXItYm90dG9te1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTcsIDIxNyk7XHJcbn1cclxuXHJcbi5teS1ib3JkZXItbm9uZXtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5teS1wLTEwe1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm15LXJvd3tcclxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LW10LTV7XHJcbiAgbWFyZ2luLXRvcDogNXB4OztcclxufVxyXG5cclxuLm15LXAtMTB7XHJcbiAgcGFkZGluZyA6MTVweDtcclxufVxyXG5cclxuLm15LXAtNXtcclxuICBwYWRkaW5nIDo1cHg7XHJcbn1cclxuXHJcbi5scC1kYXNoYm9hcmQtYm94LWhlYWRlcntcclxuICBwYWRkaW5nIDogNXB4O1xyXG59XHJcblxyXG4ubHAtZGFzaGJvYXJkLWJveC1ib2R5e1xyXG4gIHBhZGRpbmctbGVmdCA6IDMwcHg7XHJcbn1cclxuXHJcbi5mLTE0e1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZi0xMXtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5teS1wbC0xMHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jYW1wYWlnbi1ib3h7XHJcbiAgaGVpZ2h0OiAxNDVweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubXktY2FyZHtcclxuICBtYXgtaGVpZ2h0IDogY2FsYygxMDB2aCAtIDIxNXB4KTtcclxuICBtaW4taGVpZ2h0OiA1MzBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC01MHtcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_lp-dashboard_lp-dashboard_module_ts.js.map