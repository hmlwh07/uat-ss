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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_kbz_ms_lp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page.html?ngResource */ 61351);
/* harmony import */ var _dashboard_kbz_ms_lp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-lp.page.scss?ngResource */ 36700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 98753);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-kbz-ms-senior/dashboard.service */ 59257);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 56289);












let DashboardKbzMsLpPage = class DashboardKbzMsLpPage {
    constructor(platform, cdf, ngzone, route, auth, dashboardService, router, AttachmentUploadService, alertCtrl, DashboardAttachmentService) {
        this.platform = platform;
        this.cdf = cdf;
        this.ngzone = ngzone;
        this.route = route;
        this.auth = auth;
        this.dashboardService = dashboardService;
        this.router = router;
        this.AttachmentUploadService = AttachmentUploadService;
        this.alertCtrl = alertCtrl;
        this.DashboardAttachmentService = DashboardAttachmentService;
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
            'JUN',
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
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (params.empId) {
                this.id = JSON.parse(params.empId);
                this.roleId = JSON.parse(params.roleId);
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
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            "empId": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.id)
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
                    // console.log('recentObj', this.recentObj)
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
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.alertCtrl.create({
                cssClass: 'custom-modal',
                buttons: [
                    //   {
                    //   icon: 'camera',
                    //   text: 'Take a picture',
                    //   handler: () => {
                    //     this.getPictures(CameraSource.Camera);
                    //     console.log('Open Camera');;
                    //   }
                    // },
                    {
                        icon: 'images',
                        text: 'Choose picture from gallery',
                        handler: () => {
                            this.getPictures(_capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Photos);
                            console.log('Open Gallery');
                        }
                    }, {
                        icon: 'close',
                        text: 'Close',
                        role: 'cancel',
                        handler: () => { console.log('Cancel clicked'); }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    getPictures(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.getPhoto({
                quality: 100,
                width: 400,
                allowEditing: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Base64,
                source: type,
                height: 400,
            }).catch((e) => {
            });
            if (image) {
                this.uploadImage(image);
            }
        });
    }
    uploadImage(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            image.size = ((image.base64String).length - 814) / 1.37;
            image.fileName = Date.now() + this.data.agentInfo.empId;
            let data = {
                fileStr: image.base64String,
                fileName: image.fileName,
                fileType: "image/" + image.format,
                fileSize: image.size,
                contentType: "image/" + image.format,
                fileExtension: image.format,
            };
            this.AttachmentUploadService.save(data).toPromise().then((res) => {
                if (res) {
                    let postData = {
                        attId: res,
                        empId: this.data.agentInfo.empId
                    };
                    // this.data.agentInfo.attId=851
                    // this.cdf.detectChanges()
                    this.DashboardAttachmentService.save(postData).toPromise().then((res) => {
                        if (res) {
                            this.data.agentInfo.attId = res;
                            this.cdf.detectChanges();
                        }
                    });
                }
            });
        });
    }
};
DashboardKbzMsLpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__.AttachmentUploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _dashboard_kbz_ms_senior_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardAttachmentService }
];
DashboardKbzMsLpPage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['chart',] }]
};
DashboardKbzMsLpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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

module.exports = "div section {\n  width: 33.3333333333%;\n  float: left;\n  display: block;\n  padding: 0 15px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\ndiv section::-webkit-scrollbar {\n  display: none;\n}\n.dashboard-main {\n  border-bottom: 1px solid #e3e3e3;\n}\n.user-icon {\n  width: 27px;\n  height: 27px;\n}\n.profile {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile .img-content {\n  max-width: 124px;\n  max-height: 124px;\n  min-width: 100px;\n  min-height: 100px;\n  background: #b9fded;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 4%;\n}\n.profile ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.profile ion-label:last-child {\n  color: #404040;\n}\n.premium {\n  border-bottom: 1px solid #e3e3e3;\n}\n.premium ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.premium ion-label span {\n  color: #404040;\n}\n.premium ion-label:last-child {\n  color: #404040;\n}\n.title-color {\n  color: #005eaa;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.premuim-color {\n  color: #005eaa;\n}\n.product h2 {\n  font-size: 1rem !important;\n  color: #404040;\n  width: 100%;\n  font-weight: 600;\n}\n.product ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.product ion-list::-webkit-scrollbar {\n  display: none;\n}\nion-list ion-item {\n  padding: 0;\n  --min-height: 15px;\n  position: relative;\n}\nion-list ion-item ion-thumbnail {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  max-width: 40px !important;\n}\nion-list ion-item ion-text {\n  width: 50%;\n  font-size: 0.79rem;\n  padding: 0;\n  color: #404040;\n}\nion-list ion-item ion-text:last-child {\n  text-align: right;\n  position: absolute;\n  right: 0;\n}\nion-list ion-item:last-child {\n  border-bottom: none;\n  --border-width: 0 0 0px 0;\n}\n.sales-performance .date {\n  width: 100%;\n  overflow: hidden;\n}\n.sales-performance .date div {\n  width: 30%;\n  float: left;\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 0 !important;\n}\n.sales-performance .date div a {\n  cursor: pointer;\n  color: #005eaa;\n  float: right;\n  font-weight: 400;\n}\n.sales-performance .date div:nth-child(2) {\n  width: 25%;\n  padding: 0 6px;\n  text-align: center;\n}\n.sales-performance .date div:last-child {\n  width: 25%;\n  float: right;\n  border-right: none !important;\n}\n.sales-performance ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.sales-performance ion-list::-webkit-scrollbar {\n  display: none;\n}\n.sales-performance ion-list ion-row {\n  border-bottom: 1px solid #e3e3e3;\n}\n.sales-performance ion-list ion-row ion-col {\n  font-size: 0.79rem;\n  padding-left: 0;\n  color: #404040;\n}\n.sales-performance ion-list ion-row ion-col:nth-child(2) {\n  text-align: center;\n}\n.sales-performance ion-list ion-row ion-col:last-child {\n  text-align: right;\n}\n.chart div {\n  width: 100%;\n  overflow: hidden;\n}\n.chart ion-icon {\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.chart .sub-chart {\n  border-bottom: 1px solid #e3e3e3;\n  padding: 10px 0 0 0;\n}\n.chart .sub-chart .today {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px 10%;\n}\n.chart .sub-chart .today div {\n  width: 45%;\n  float: left;\n  background: #ff8100;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n.chart .sub-chart .today div p {\n  font-size: 0.79rem;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.chart .sub-chart .today div:last-child {\n  float: right;\n  background: #005eaa;\n}\n.chart .sub-chart .sub-title {\n  font-size: 1rem;\n  font-weight: 600;\n  padding-left: 0;\n  color: #404040;\n}\n.chart .sub-chart .link {\n  cursor: pointer;\n  color: #005eaa;\n  float: right;\n  font-weight: 400;\n  padding: 0;\n  text-align: right;\n}\n.chart .sub-chart:first-child {\n  padding-top: 0;\n}\n.chart .sub-chart:last-child {\n  border-bottom: none !important;\n}\n.chart .branch {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .branch div {\n  width: 50%;\n  float: left;\n  font-size: 0.79rem;\n}\n.chart ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.chart ion-list::-webkit-scrollbar {\n  display: none;\n}\n.chart ion-list ion-text {\n  position: unset !important;\n  text-align: left !important;\n  margin: 0 0 0 30px;\n}\n.chart ion-list ion-text p {\n  margin: 0 0 0 0;\n}\n@media (min-width: 280px) and (max-width: 620px) {\n  section {\n    width: 100% !important;\n    padding: 0 !important;\n    margin: 10px !important;\n  }\n}\n@media screen and (max-width: 600px) {\n  .icon-style {\n    left: 55%;\n    position: relative;\n    font-size: 30px;\n    top: -42px;\n  }\n}\n@media screen and (min-width: 600px) {\n  .icon-style {\n    left: 55%;\n    position: relative;\n    font-size: 30px;\n    top: -42px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1rYnotbXMtbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0kscUJBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEwQixnQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0VBRXZCLGdEQUFBO0FBSFI7QUFJUTtFQUNJLGFBQUE7QUFGWjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0ksZ0NBQUE7QUFISjtBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSFI7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQUtJO0VBQ0ksY0FBQTtBQUhSO0FBTUE7RUFDSSxnQ0FBQTtBQUhKO0FBS0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFJUTtFQUNJLGNBQUE7QUFGWjtBQUtJO0VBQ0ksY0FBQTtBQUhSO0FBT0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSko7QUFNQTtFQUNJLGNBQUE7QUFISjtBQU9JO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSlI7QUFNSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFIUjtBQUlRO0VBQ0ksYUFBQTtBQUZaO0FBUUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxSO0FBTVE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSlo7QUFNUTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFKWjtBQU1RO0VBQ0ksMEJBQUE7QUFKWjtBQU1RO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFKWjtBQU1RO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFKWjtBQU9JO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQUxSO0FBaUJJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBZFI7QUFlUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFiWjtBQWNZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFaaEI7QUFlUTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFiWjtBQWVRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQWJaO0FBaUJJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQWRSO0FBZVE7RUFDSSxhQUFBO0FBYlo7QUFlUTtFQUNJLGdDQUFBO0FBYlo7QUFjWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFaaEI7QUFjWTtFQUNJLGtCQUFBO0FBWmhCO0FBY1k7RUFDSSxpQkFBQTtBQVpoQjtBQW1CSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQW1CSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFqQlI7QUFtQkk7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FBakJSO0FBa0JRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFoQlo7QUFpQlk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBZmhCO0FBZ0JnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWRwQjtBQWlCWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQWZoQjtBQWtCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBaEJaO0FBa0JRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFoQlo7QUFtQkk7RUFDSSxjQUFBO0FBakJSO0FBbUJJO0VBQ0ksOEJBQUE7QUFqQlI7QUFtQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFqQlI7QUFrQlE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBaEJaO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQWpCUjtBQWtCUTtFQUNJLGFBQUE7QUFoQlo7QUFtQlE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFqQlo7QUFrQlk7RUFDSSxlQUFBO0FBaEJoQjtBQXNCQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO0VBbkJOO0FBQ0Y7QUFzQkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VBcEJOO0FBQ0Y7QUF1QkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VBckJOO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLWtiei1tcy1scC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIC8vd2lkdGg6IGNhbGMoMTAwcHggLyB2YXIoLS1yYXRpby13KSk7XG4gICAgLy9oZWlnaHQ6IGNhbGMoMTAwJSAvIHZhcigtLXJhdGlvLWgpKTtcbiAgICAvL2hlaWdodDogMTAwJTtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICAgICAgICAvL2hlaWdodDogdmFyKC0tcmF0aW8taCk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhlaWdodDogY2FsYyh2YXIoLS1yYXRpby1oKSAtICg1OC44cHggKyA2MHB4KSk7XG4gICAgfVxufVxuLmRhc2hib2FyZC1tYWluIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbn1cbi51c2VyLWljb24ge1xuICAgIHdpZHRoOiAyN3B4O1xuICAgIGhlaWdodDogMjdweDtcbiAgfVxuXG4ucHJvZmlsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgLy9wYWRkaW5nLWJvdHRvbTogNCU7XG4gICAgLmltZy1jb250ZW50IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjRweDtcbiAgICAgICAgbWF4LWhlaWdodDogMTI0cHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjlmZGVkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICAgICAgIFxuICAgIH1cbiAgICBpb24tbGFiZWw6bGFzdC1jaGlsZCB7XG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIH1cbn1cbi5wcmVtaXVtIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAvL3BhZGRpbmc6IDEwJSAwO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgfVxufVxuXG4udGl0bGUtY29sb3Ige1xuICAgIGNvbG9yOiAjMDA1ZWFhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wcmVtdWltLWNvbG9yIHtcbiAgICBjb2xvcjogIzAwNWVhYTtcbn1cblxuLnByb2R1Y3Qge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tbGlzdCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAgIH1cbn1cblxuLnNhbGVzLXBlcmZvcm1hbmNlIHtcbiAgICBoMyB7XG4gICAgICAgIHA6bnRoLWNoaWxkKDEpLFxuICAgICAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDA0MDQwO1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDA0MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGF0ZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWVhYTtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cblxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY29sOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNoYXJ0IHtcbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDNweDtcbiAgICB9XG4gICAgLnN1Yi1jaGFydCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICAgICAgICAudG9kYXkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMCU7XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmODEwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc5cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1ZWFhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdWItdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA1ZWFhO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3ViLWNoYXJ0OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIC5zdWItY2hhcnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJyYW5jaCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc5cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDMwcHg7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyODBweCkgYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgLmljb24tc3R5bGUge1xuICAgICAgICBsZWZ0OiA1NSU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB0b3A6IC00MnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCkge1xuICAgIC5pY29uLXN0eWxlIHtcbiAgICAgICAgbGVmdDogNTUlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgdG9wOiAtNDJweDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 61351:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"dashboard-main\" (window:resize)=\"onResize($event)\" [ngStyle]=\"{'height': mainContentHeightPx }\">\n  <section [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div style=\"margin: 0 0 10px 0;\">\n      <div class=\"profile\" [ngStyle]=\"{'padding-bottom': profilePadding}\">\n        <div class=\"img-content\" [ngStyle]=\"{'width': profileImgW,  'height': profileImgW}\">\n          <!-- assets/images/dashboard-usr.svg -->\n          <img *ngIf=\"data?.agentInfo?.attId!=null\" [src]=\"DEFAULT_DOWNLOAD_URL+ data?.agentInfo?.attId\"\n            style=\"width: 100%; height: 100%;\" alt=\"profile\" />\n          <!-- <img  src=\"../../../assets/images/dashboard-usr.svg\" alt=\"profile\"> -->\n          <img *ngIf=\"data?.agentInfo?.attId==null\" src=\"./assets/temp-img/user_profile.png\" alt=\"profile\">\n\n        </div>\n        <ion-icon class=\"text-left icon-style\" name=\"camera\" (click)=\"presentActionSheet()\"></ion-icon>\n\n        <ion-label class=\"title-color\">{{ data?.agentInfo?.employeeName }}</ion-label>\n        <ion-label>{{ data?.role }}</ion-label>\n      </div>\n      <div class=\"premium\" [ngStyle]=\"{'padding': productPadding}\">\n        <ion-label class=\"premuim-color\">{{\"CARD.premium\" | translate}}</ion-label>\n        <ion-label>{{ data?.agentInfo?.totalPremium||0 | number: '1.2-2' }} <span><small>MMK</small></span></ion-label>\n      </div>\n    </div>\n    <div class=\"product\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h2>{{\"CARD.products\" | translate}}</h2>\n        </div>\n        <div class=\"col-sm-6\">\n\n          <h2 style=\"margin-left: 50%;\">{{\"CARD.premium\" | translate}}</h2>\n        </div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': profileHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let product of data?.yearlyProductPremium\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" alt=\"\" srcset=\"\">\n            <!-- <img *ngIf=\"productSmallIcon\" [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" alt=\"\"\n              (error)=\"changeSource($event)\"\n              srcset=\"\"> -->\n          </ion-thumbnail>\n          <ion-text>{{ product.productName }}</ion-text>\n          <ion-text style=\"font-weight: 600;\">{{ product.premium||0 | number: '1.2-2' }} MMK</ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n  <section class=\"sales-performance\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <h2 class=\"title-color\">{{\"CARD.recent_operations\" | translate}}</h2>\n    <div>\n      <div class=\"date\">\n        <div>{{\"CARD.quotes\" | translate}}</div>\n        <div><a (click)=\"goToSaleQuotation()\">{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\n        <ion-row *ngFor=\"let q of recentObj?.quotations | slice:0:3\">\n          <ion-col>{{ q.productName }}</ion-col>\n          <ion-col>{{ q.customerName }}</ion-col>\n          <ion-col>{{ q.status == \"in_progress\" ? \"In Progress\" : (q.status | titlecase) }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n    <div>\n      <div class=\"date\">\n        <div>{{\"CARD.policies\" | translate}}</div>\n        <div><a (click)=\"goToSalePolicies()\">{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\n        <ion-row *ngFor=\"let p of recentObj?.policies  | slice: 0:3\">\n          <ion-col>{{ p.productName }}</ion-col>\n          <ion-col>{{ p.customerName }}</ion-col>\n          <ion-col>{{ p.status == \"in_progress\" ? \"In Progress\" : (p.status | titlecase) }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n    <div>\n      <div class=\"date\">\n        <div style=\"width: 100%;\">Campaign for Today</div>\n        <div></div>\n      </div>\n      <ion-list style=\"height:100px;overflow: scroll;\">\n        <ion-row *ngFor=\"let c of campaignArray\">\n          <ion-col>{{ c.campaignName }}</ion-col>\n          <ion-col>{{ c.status }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n  </section>\n  <section class=\"chart\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">{{\"CARD.things_to_followup\" | translate}}</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-5 sub-title\">{{\"CARD.calendar\" | translate}}</div>\n        <div class=\"col-5\">{{\"CARD.today\" | translate}}\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToCalendar()\"><a>{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let followup of followUpArray  | slice: 0:3\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"getImageURL(followup.activityType)\" class=\"prod-icon\" alt=\"\" srcset=\"\">\n          </ion-thumbnail>\n          <ion-text style=\"margin: 0; width: 100%; \">\n            <ion-text style=\"margin: 0; font-weight: 600;  width: 100%;display: block; \">{{ followup.title }}</ion-text>\n            <ion-text style=\"margin: 0;float: left; \">{{ followup.customerName }}</ion-text>\n            <ion-text style=\"margin: 0;\">Due {{ followup.dueDate | date:'mediumDate' }}</ion-text>\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">Overdue Activities</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-5 sub-title\">{{\"CARD.backlog\" | translate}}</div>\n        <div class=\"col-5\">{{\"CARD.today\" | translate}}\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToCalendar()\"><a>{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let log of backlogArray | slice: 0:2\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"getImageURL(log.activityType)\" class=\"prod-icon\" alt=\"\" srcset=\"\">\n          </ion-thumbnail>\n          <ion-text style=\"margin: 0; width: 100%; \">\n            <ion-text style=\"margin: 0; font-weight: 600;  width: 100%;display: block; \">{{ log.title }}</ion-text>\n            <ion-text style=\"margin: 0;float: left; \">{{ log.customerName }}</ion-text>\n            <ion-text style=\"margin: 0;\">Due {{ log.dueDate | date:'mediumDate' }}</ion-text>\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">Opportunities</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-10 sub-title\">Opportunities Assigned</div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToLeadList()\"><a>{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let obj of assignLeadArray | slice: 0:3\">\n          <ion-avatar slot=\"start\">\n            <img src=\"./assets/images/dashboard-user.png\" class=\"user-icon\" alt=\"\" />\n          </ion-avatar>\n          <ion-text style=\"margin: 0; margin: 0; font-weight: 600;\"> {{ obj.contactName }}</ion-text>\n          <ion-text style=\"margin: 0; margin: 0;\">Assigned on {{ obj.openDate | date:'shortDate' }}\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-kbz-ms-lp_dashboard-kbz-ms-lp_module_ts.js.map