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
                source: type
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

module.exports = "div section {\n  width: 33.3333333333%;\n  float: left;\n  display: block;\n  padding: 0 15px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\ndiv section::-webkit-scrollbar {\n  display: none;\n}\n.dashboard-main {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile .img-content {\n  max-width: 124px;\n  max-height: 124px;\n  min-width: 100px;\n  min-height: 100px;\n  background: #b9fded;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 4%;\n}\n.profile ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.profile ion-label:last-child {\n  color: #404040;\n}\n.premium {\n  border-bottom: 1px solid #e3e3e3;\n}\n.premium ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.premium ion-label span {\n  color: #404040;\n}\n.premium ion-label:last-child {\n  color: #404040;\n}\n.title-color {\n  color: #005eaa;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.premuim-color {\n  color: #005eaa;\n}\n.product h2 {\n  font-size: 1rem !important;\n  color: #404040;\n  width: 100%;\n  font-weight: 600;\n}\n.product ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.product ion-list::-webkit-scrollbar {\n  display: none;\n}\nion-list ion-item {\n  padding: 0;\n  --min-height: 15px;\n  position: relative;\n}\nion-list ion-item ion-thumbnail {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  max-width: 40px !important;\n}\nion-list ion-item ion-text {\n  width: 50%;\n  font-size: 0.79rem;\n  padding: 0;\n  color: #404040;\n}\nion-list ion-item ion-text:last-child {\n  text-align: right;\n  position: absolute;\n  right: 0;\n}\nion-list ion-item:last-child {\n  border-bottom: none;\n  --border-width: 0 0 0px 0;\n}\n.sales-performance .date {\n  width: 100%;\n  overflow: hidden;\n}\n.sales-performance .date div {\n  width: 30%;\n  float: left;\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 0 !important;\n}\n.sales-performance .date div a {\n  cursor: pointer;\n  color: #005eaa;\n  float: right;\n  font-weight: 400;\n}\n.sales-performance .date div:nth-child(2) {\n  width: 25%;\n  padding: 0 6px;\n  text-align: center;\n}\n.sales-performance .date div:last-child {\n  width: 25%;\n  float: right;\n  border-right: none !important;\n}\n.sales-performance ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.sales-performance ion-list::-webkit-scrollbar {\n  display: none;\n}\n.sales-performance ion-list ion-row {\n  border-bottom: 1px solid #e3e3e3;\n}\n.sales-performance ion-list ion-row ion-col {\n  font-size: 0.79rem;\n  padding-left: 0;\n  color: #404040;\n}\n.sales-performance ion-list ion-row ion-col:nth-child(2) {\n  text-align: center;\n}\n.sales-performance ion-list ion-row ion-col:last-child {\n  text-align: right;\n}\n.chart div {\n  width: 100%;\n  overflow: hidden;\n}\n.chart ion-icon {\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.chart .sub-chart {\n  border-bottom: 1px solid #e3e3e3;\n  padding: 10px 0 0 0;\n}\n.chart .sub-chart .today {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px 10%;\n}\n.chart .sub-chart .today div {\n  width: 45%;\n  float: left;\n  background: #ff8100;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n.chart .sub-chart .today div p {\n  font-size: 0.79rem;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.chart .sub-chart .today div:last-child {\n  float: right;\n  background: #005eaa;\n}\n.chart .sub-chart .sub-title {\n  font-size: 1rem;\n  font-weight: 600;\n  padding-left: 0;\n  color: #404040;\n}\n.chart .sub-chart .link {\n  cursor: pointer;\n  color: #005eaa;\n  float: right;\n  font-weight: 400;\n  padding: 0;\n  text-align: right;\n}\n.chart .sub-chart:first-child {\n  padding-top: 0;\n}\n.chart .sub-chart:last-child {\n  border-bottom: none !important;\n}\n.chart .branch {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .branch div {\n  width: 50%;\n  float: left;\n  font-size: 0.79rem;\n}\n.chart ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.chart ion-list::-webkit-scrollbar {\n  display: none;\n}\n.chart ion-list ion-text {\n  position: unset !important;\n  text-align: left !important;\n  margin: 0 0 0 30px;\n}\n.chart ion-list ion-text p {\n  margin: 0 0 0 0;\n}\n@media (min-width: 280px) and (max-width: 620px) {\n  section {\n    width: 100% !important;\n    padding: 0 !important;\n    margin: 10px !important;\n  }\n}\n@media screen and (max-width: 600px) {\n  .icon-style {\n    left: 55%;\n    position: relative;\n    font-size: 30px;\n    top: -42px;\n  }\n}\n@media screen and (min-width: 600px) {\n  .icon-style {\n    left: 55%;\n    position: relative;\n    font-size: 30px;\n    top: -42px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1rYnotbXMtbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0kscUJBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEwQixnQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0VBRXZCLGdEQUFBO0FBSFI7QUFJUTtFQUNJLGFBQUE7QUFGWjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU9BO0VBQ0ksZ0NBQUE7QUFKSjtBQU1JO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSlI7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1JO0VBQ0ksY0FBQTtBQUpSO0FBT0E7RUFDSSxnQ0FBQTtBQUpKO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFLUTtFQUNJLGNBQUE7QUFIWjtBQU1JO0VBQ0ksY0FBQTtBQUpSO0FBUUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEo7QUFPQTtFQUNJLGNBQUE7QUFKSjtBQVFJO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFPSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFKUjtBQUtRO0VBQ0ksYUFBQTtBQUhaO0FBU0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5SO0FBT1E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTFo7QUFPUTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFMWjtBQU9RO0VBQ0ksMEJBQUE7QUFMWjtBQU9RO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFMWjtBQU9RO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFMWjtBQVFJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQU5SO0FBa0JJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBZlI7QUFnQlE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBZFo7QUFlWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBYmhCO0FBZ0JRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWRaO0FBZ0JRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQWRaO0FBa0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtFQUV2QixnREFBQTtBQWZSO0FBZ0JRO0VBQ0ksYUFBQTtBQWRaO0FBZ0JRO0VBQ0ksZ0NBQUE7QUFkWjtBQWVZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWJoQjtBQWVZO0VBQ0ksa0JBQUE7QUFiaEI7QUFlWTtFQUNJLGlCQUFBO0FBYmhCO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBakJSO0FBb0JJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQWxCUjtBQW9CSTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUFsQlI7QUFtQlE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWpCWjtBQWtCWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFoQmhCO0FBaUJnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWZwQjtBQWtCWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQWhCaEI7QUFtQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWpCWjtBQW1CUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBakJaO0FBb0JJO0VBQ0ksY0FBQTtBQWxCUjtBQW9CSTtFQUNJLDhCQUFBO0FBbEJSO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBbEJSO0FBbUJRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWpCWjtBQXFCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFsQlI7QUFtQlE7RUFDSSxhQUFBO0FBakJaO0FBb0JRO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBbEJaO0FBbUJZO0VBQ0ksZUFBQTtBQWpCaEI7QUF1QkE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtFQXBCTjtBQUNGO0FBdUJBO0VBQ0k7SUFDSSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQXJCTjtBQUNGO0FBd0JBO0VBQ0k7SUFDSSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQXRCTjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC1rYnotbXMtbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICAvL3dpZHRoOiBjYWxjKDEwMHB4IC8gdmFyKC0tcmF0aW8tdykpO1xuICAgIC8vaGVpZ2h0OiBjYWxjKDEwMCUgLyB2YXIoLS1yYXRpby1oKSk7XG4gICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcbiAgICAgICAgLy9oZWlnaHQ6IHZhcigtLXJhdGlvLWgpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoZWlnaHQ6IGNhbGModmFyKC0tcmF0aW8taCkgLSAoNTguOHB4ICsgNjBweCkpO1xuICAgIH1cbn1cbi5kYXNoYm9hcmQtbWFpbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG59XG5cbi5wcm9maWxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAvL3BhZGRpbmctYm90dG9tOiA0JTtcbiAgICAuaW1nLWNvbnRlbnQge1xuICAgICAgICBtYXgtd2lkdGg6IDEyNHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMjRweDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiOWZkZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgICAgXG4gICAgfVxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgfVxufVxuLnByZW1pdW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgIC8vcGFkZGluZzogMTAlIDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxhYmVsOmxhc3QtY2hpbGQge1xuICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICB9XG59XG5cbi50aXRsZS1jb2xvciB7XG4gICAgY29sb3I6ICMwMDVlYWE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLnByZW11aW0tY29sb3Ige1xuICAgIGNvbG9yOiAjMDA1ZWFhO1xufVxuXG4ucHJvZHVjdCB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cblxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC0tbWluLWhlaWdodDogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgfVxufVxuXG4uc2FsZXMtcGVyZm9ybWFuY2Uge1xuICAgIGgzIHtcbiAgICAgICAgcDpudGgtY2hpbGQoMSksXG4gICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MDQwNDA7XG4gICAgICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1ZWFhO1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc5cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jb2w6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY29sOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2hhcnQge1xuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogM3B4O1xuICAgIH1cbiAgICAuc3ViLWNoYXJ0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gICAgICAgIC50b2RheSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwJTtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY4MTAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDVlYWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICMwMDVlYWE7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zdWItY2hhcnQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgLnN1Yi1jaGFydDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnJhbmNoIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cblxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMzBweDtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAuaWNvbi1zdHlsZSB7XG4gICAgICAgIGxlZnQ6IDU1JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHRvcDogLTQycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMHB4KSB7XG4gICAgLmljb24tc3R5bGUge1xuICAgICAgICBsZWZ0OiA1NSU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB0b3A6IC00MnB4O1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 61351:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-lp/dashboard-kbz-ms-lp.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"dashboard-main\" (window:resize)=\"onResize($event)\" [ngStyle]=\"{'height': mainContentHeightPx }\">\n  <section [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div style=\"margin: 0 0 10px 0;\">\n      <div class=\"profile\" [ngStyle]=\"{'padding-bottom': profilePadding}\">\n        <div class=\"img-content\" [ngStyle]=\"{'width': profileImgW,  'height': profileImgW}\">\n          <!-- assets/images/dashboard-usr.svg -->         \n          <img *ngIf=\"data?.agentInfo?.attId!=null\" [src]=\"DEFAULT_DOWNLOAD_URL+ data?.agentInfo?.attId\"\n          style=\"width: 100%; height: 100%;\" alt=\"profile\" />\n        <!-- <img  src=\"../../../assets/images/dashboard-usr.svg\" alt=\"profile\"> -->\n        <img *ngIf=\"data?.agentInfo?.attId==null\" src=\"./assets/temp-img/user_profile.png\" alt=\"profile\">\n\n        </div>\n        <ion-icon class=\"text-left icon-style\" name=\"camera\"  (click)=\"presentActionSheet()\"></ion-icon>\n\n        <ion-label class=\"title-color\">{{ data?.agentInfo?.employeeName }}</ion-label>\n        <ion-label>{{ data?.role }}</ion-label>\n      </div>\n      <div class=\"premium\" [ngStyle]=\"{'padding': productPadding}\">\n        <ion-label class=\"premuim-color\">{{\"CARD.premium\" | translate}}</ion-label>\n        <ion-label>{{ data?.agentInfo?.totalPremium||0 | number: '1.2-2' }} <span><small>MMK</small></span></ion-label>\n      </div>\n    </div>\n    <div class=\"product\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h2>{{\"CARD.products\" | translate}}</h2>\n        </div>\n        <div class=\"col-sm-6\">\n        \n        <h2  style=\"margin-left: 50%;\">{{\"CARD.premium\" | translate}}</h2>\n        </div>  \n      </div>\n      <ion-list [ngStyle]=\"{'height': profileHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let product of data?.yearlyProductPremium\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\"\n              alt=\"\" srcset=\"\" >\n            <!-- <img *ngIf=\"productSmallIcon\" [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" alt=\"\"\n              (error)=\"changeSource($event)\"\n              srcset=\"\"> -->\n          </ion-thumbnail>\n          <ion-text>{{ product.productName }}</ion-text>\n          <ion-text style=\"font-weight: 600;\">{{ product.premium||0 | number: '1.2-2' }} MMK</ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n  <section class=\"sales-performance\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <h2 class=\"title-color\">{{\"CARD.recent_operations\" | translate}}</h2>\n    <div>\n      <div class=\"date\">\n        <div>{{\"CARD.quotes\" | translate}}</div>\n        <div><a (click)=\"goToSaleQuotation()\">{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\n        <ion-row *ngFor=\"let q of recentObj?.quotations | slice:0:3\">\n          <ion-col>{{ q.productName }}</ion-col>\n          <ion-col>{{ q.customerName }}</ion-col>\n          <ion-col>{{ q.status == \"in_progress\" ? \"In Progress\" : (q.status | titlecase) }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n    <div>\n      <div class=\"date\">\n        <div>{{\"CARD.policies\" | translate}}</div>\n        <div><a (click)=\"goToSalePolicies()\">{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\n        <ion-row *ngFor=\"let p of recentObj?.policies  | slice: 0:3\">\n          <ion-col>{{ p.productName }}</ion-col>\n          <ion-col>{{ p.customerName }}</ion-col>\n          <ion-col>{{ p.status == \"in_progress\" ? \"In Progress\" : (p.status | titlecase) }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n    <div>\n      <div class=\"date\">\n        <div style=\"width: 100%;\">Campaign for Today</div>\n        <div></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': salesHpx}\">\n        <ion-row *ngFor=\"let c of campaignArray | slice:0:3\">\n          <ion-col>{{ c.campaignName }}</ion-col>\n          <ion-col>{{ c.status }}</ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n  </section>\n  <section class=\"chart\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">{{\"CARD.things_to_followup\" | translate}}</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-5 sub-title\">{{\"CARD.calendar\" | translate}}</div>\n        <div class=\"col-5\">{{\"CARD.today\" | translate}}\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToCalendar()\"><a>{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let followup of followUpArray  | slice: 0:3\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"getImageURL(followup.activityType)\" class=\"prod-icon\" alt=\"\" srcset=\"\">\n          </ion-thumbnail>\n          <ion-text style=\"margin: 0; width: 100%; \">\n            <ion-text style=\"margin: 0; font-weight: 600;  width: 100%;display: block; \">{{ followup.title }}</ion-text>\n            <ion-text style=\"margin: 0;float: left; \">{{ followup.customerName }}</ion-text>\n            <ion-text style=\"margin: 0;\">Due {{ followup.dueDate | date:'mediumDate' }}</ion-text>\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">Overdue Activities</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-5 sub-title\">{{\"CARD.backlog\" | translate}}</div>\n        <div class=\"col-5\">{{\"CARD.today\" | translate}}\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToCalendar()\"><a>{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let log of backlogArray | slice: 0:2\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"getImageURL(log.activityType)\" class=\"prod-icon\" alt=\"\" srcset=\"\">\n          </ion-thumbnail>\n          <ion-text style=\"margin: 0; width: 100%; \">\n            <ion-text style=\"margin: 0; font-weight: 600;  width: 100%;display: block; \">{{ log.title }}</ion-text>\n            <ion-text style=\"margin: 0;float: left; \">{{ log.customerName }}</ion-text>\n            <ion-text style=\"margin: 0;\">Due {{ log.dueDate | date:'mediumDate' }}</ion-text>\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"sub-chart\">\n      <h2 class=\"title-color\">Opportunities</h2>\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"col-10 sub-title\">Opportunities Assigned</div>\n        <div class=\"col-2 underline pointer link\" (click)=\"goToLeadList()\"><a>{{\"CARD.all\" | translate}}</a></div>\n      </div>\n      <ion-list [ngStyle]=\"{'height': chartHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let obj of assignLeadArray | slice: 0:3\">\n          <ion-avatar slot=\"start\">\n            <img src=\"./assets/images/dashboard-user.png\" class=\"user-icon\" alt=\"\" />\n          </ion-avatar>\n          <ion-text style=\"margin: 0; margin: 0; font-weight: 600;\"> {{ obj.contactName }}</ion-text>\n          <ion-text style=\"margin: 0; margin: 0;\">Assigned on {{ obj.openDate | date:'shortDate' }}\n          </ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-kbz-ms-lp_dashboard-kbz-ms-lp_module_ts.js.map