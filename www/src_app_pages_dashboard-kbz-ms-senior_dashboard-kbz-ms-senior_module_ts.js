"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-kbz-ms-senior_dashboard-kbz-ms-senior_module_ts"],{

/***/ 60555:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsSeniorPageRoutingModule": () => (/* binding */ DashboardKbzMsSeniorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_kbz_ms_senior_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior.page */ 21267);




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

/***/ 11990:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsSeniorPageModule": () => (/* binding */ DashboardKbzMsSeniorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _dashboard_kbz_ms_senior_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior.page */ 21267);
/* harmony import */ var _dashboard_kbz_ms_senior_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior-routing.module */ 60555);









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

/***/ 21267:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardKbzMsSeniorPage": () => (/* binding */ DashboardKbzMsSeniorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_kbz_ms_senior_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior.page.html?ngResource */ 4508);
/* harmony import */ var _dashboard_kbz_ms_senior_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-kbz-ms-senior.page.scss?ngResource */ 37408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth/_services/auth.service */ 98753);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.service */ 59257);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 56289);
/* harmony import */ var src_app_core_menu_data_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/menu-data-role.service */ 19545);















let DashboardKbzMsSeniorPage = class DashboardKbzMsSeniorPage {
    constructor(platform, cdf, auth, dashboardService, router, ngzone, alertCtrl, AttachmentUploadService, DashboardAttachmentService, menuDataRoleService) {
        this.platform = platform;
        this.cdf = cdf;
        this.auth = auth;
        this.dashboardService = dashboardService;
        this.router = router;
        this.ngzone = ngzone;
        this.alertCtrl = alertCtrl;
        this.AttachmentUploadService = AttachmentUploadService;
        this.DashboardAttachmentService = DashboardAttachmentService;
        this.menuDataRoleService = menuDataRoleService;
        this.leadObj = {};
        this.todayActiveAgent = 0;
        this.agentLineChartCategories = [];
        this.agentLineChartDatas = [];
        this.currentMonthIndex = new Date().getUTCMonth();
        this.currentYear = new Date().getUTCFullYear();
        this.months = ['JAN', 'FEB', 'Mar', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.DEFAULT_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/attachment-downloader/`;
        this.unsub = this.auth.currentUserSubject.subscribe((res) => {
            if (res) {
                this.authObj = res;
                this.id = res.id;
            }
        });
        this.loadForm();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let route = (this.router.url).split("?");
            this.activeRoute = route[0];
            // console.log(this.activeRoute);
            this.getList();
            this.getLeadList();
            this.getAgentList();
            this.radioW = this.platform.width();
            this.radioH = this.platform.height();
            this.calculateMainContentHeight(this.radioW, this.radioH);
        });
    }
    ngAfterViewInit() {
        let route = this.router.url.split("?");
        this.activeRoute = route[0];
        // console.log("this.activeRoute",this.activeRoute);
    }
    loadForm() {
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            "empId": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.id)
        });
    }
    getList(id) {
        let post = {
            "empId": id
        };
        this.ngzone.run(_ => {
            this.dashboardService.getList(id ? post : this.actForm.value).toPromise().then((res) => {
                if (res) {
                    this.data = res;
                    this.setChartOptions('agent');
                    this.cdf.detectChanges();
                }
            });
        });
    }
    getLeadList(id) {
        let post = {
            "empId": id
        };
        this.dashboardService.getLeadList(id ? post : this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.leadObj = res;
                // this.todayActiveAgent = res.todayActiveAgent
                this.setChartOptions('lead');
                this.cdf.detectChanges();
            }
        });
    }
    getAgentList(id) {
        let post = {
            "empId": id
        };
        this.ngzone.run(_ => {
            // this.agentLineChartCategories = this.agentLineChartDatas = [];
            this.dashboardService.getAgentList(id ? post : this.actForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)((res) => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.getSaleRoleData(agent);
            //  this.router.navigate(['/dashboard/lp-manager-dashboard'], { queryParams: { empId: agent.empId } })
        });
    }
    getSaleRoleData(agent) {
        this.menuDataRoleService.getMenusRoleData(agent.roleId).toPromise().then((res) => {
            // console.log(res);
            let page = '';
            if (res) {
                res.forEach(data => {
                    if (data.title == "Dashboard") {
                        if (data.submenu) {
                            data.submenu.forEach(res => {
                                if (res.dataAccess.view) {
                                    page = res.page;
                                }
                            });
                        }
                    }
                });
            }
            // console.log(page);
            if (page) {
                let pg = "/" + page;
                if (pg == this.activeRoute) {
                    this.getList(agent.empId);
                    this.getLeadList(agent.empId);
                    this.getAgentList(agent.empId);
                    this.radioW = this.platform.width();
                    this.radioH = this.platform.height();
                    this.calculateMainContentHeight(this.radioW, this.radioH);
                }
                else {
                    this.router.navigate([page], { queryParams: { empId: agent.empId, roleId: agent.roleId }, });
                }
            }
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
                        show: true
                    },
                    height: this.chartH - 10,
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
                            fontSize: "0.7rem",
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
                    height: this.chartH - 8,
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
                        fontSize: "0.7rem",
                        fontFamily: "Roboto"
                    }
                },
                xaxis: {
                    type: 'category',
                    categories: this.agentLineChartCategories,
                    labels: {
                        style: {
                            fontSize: "0.7rem",
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
                            fontSize: "0.7rem",
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
            this.chartHpx = this.chartH + 30 + 'px';
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
            this.chartHpx = this.chartH + 30 + 'px';
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
            this.chartHpx = this.chartH + 30 + 'px';
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
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                            this.getPictures(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 100,
                width: 400,
                allowEditing: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
            console.log("data", data);
            this.AttachmentUploadService.save(data).toPromise().then((res) => {
                if (res) {
                    let postData = {
                        attId: res,
                        empId: this.data.agentInfo.empId
                    };
                    this.DashboardAttachmentService.save(postData).toPromise().then((res) => {
                        if (res) {
                            this.data.agentInfo.attId = postData.attId;
                            this.cdf.detectChanges();
                        }
                    });
                }
            });
        });
    }
};
DashboardKbzMsSeniorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__.DashboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_6__.AttachmentUploadService },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__.DashboardAttachmentService },
    { type: src_app_core_menu_data_role_service__WEBPACK_IMPORTED_MODULE_7__.MenuDataRoleService }
];
DashboardKbzMsSeniorPage.propDecorators = {
    chartAgent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["chartAgent",] }],
    chartLead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["chartLead",] }]
};
DashboardKbzMsSeniorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-dashboard-kbz-ms-senior',
        template: _dashboard_kbz_ms_senior_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_kbz_ms_senior_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardKbzMsSeniorPage);



/***/ }),

/***/ 37408:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "div section {\n  width: 33.3333333333%;\n  float: left;\n  display: block;\n  padding: 0 15px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\ndiv section::-webkit-scrollbar {\n  display: none;\n}\n.user-icon {\n  width: 27px;\n  height: 27px;\n}\n.dashboard-main {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile {\n  border-bottom: 1px solid #e3e3e3;\n}\n.profile .img-content {\n  max-width: 124px;\n  max-height: 124px;\n  min-width: 100px;\n  min-height: 100px;\n  background: #b9fded;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 4%;\n}\n.profile ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.profile ion-label:last-child {\n  color: #404040;\n}\n.premium {\n  border-bottom: 1px solid #e3e3e3;\n}\n.premium ion-label {\n  text-align: center;\n  display: block;\n  line-height: 20px;\n  font-weight: 600;\n}\n.premium ion-label span {\n  color: #404040;\n}\n.premium ion-label:last-child {\n  color: #404040;\n}\n.title-color {\n  color: #005eaa;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.premuim-color {\n  color: #005eaa;\n}\n.product h2 {\n  font-size: 1rem !important;\n  color: #404040;\n  width: 100%;\n  font-weight: 600;\n}\n.product ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.product ion-list::-webkit-scrollbar {\n  display: none;\n}\nion-list ion-item {\n  padding: 0;\n  position: relative;\n}\nion-list ion-item ion-thumbnail,\nion-list ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 25px !important;\n  margin-right: 0;\n  position: relative;\n  left: -15px;\n}\nion-list ion-item ion-avatar {\n  max-width: 40px !important;\n}\nion-list ion-item ion-text {\n  width: 50%;\n  font-size: 0.79rem;\n  padding: 0;\n  color: #404040;\n}\nion-list ion-item ion-text:last-child {\n  text-align: right;\n  position: absolute;\n  right: 0;\n  font-weight: 600;\n}\nion-list ion-item ion-text:last-child ion-label:first-child {\n  font-weight: 100;\n}\nion-list ion-item:last-child {\n  border-bottom: none;\n  --border-width: 0 0 0px 0;\n}\n.sales-performance h3 p:nth-child(1),\n.sales-performance h3 p:nth-child(2) {\n  border-right: 1px solid #404040;\n}\n.sales-performance .date {\n  width: 100%;\n  overflow: hidden;\n}\n.sales-performance .date div {\n  width: 15%;\n  float: left;\n  font-size: 0.79rem;\n  color: #404040;\n}\n.sales-performance .date div a {\n  cursor: pointer;\n  color: #005eaa;\n}\n.sales-performance .date div:nth-child(2) {\n  width: 25%;\n  padding: 0 6px;\n  text-align: center;\n}\n.sales-performance .date div:last-child {\n  width: 25%;\n  float: right;\n  border-right: none !important;\n  text-align: right;\n}\n.sales-performance ion-list {\n  width: 100%;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  /* Hide scrollbar for Chrome, Safari and Opera */\n}\n.sales-performance ion-list::-webkit-scrollbar {\n  display: none;\n}\n.sales-performance ion-list ion-text {\n  text-align: left !important;\n  position: unset !important;\n  width: 100%;\n  font-weight: none !important;\n  color: #404040;\n}\n.chart div {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .sub-chart {\n  border-bottom: 1px solid #e3e3e3;\n  padding: 10px 0 0 0;\n}\n.chart .sub-chart .today {\n  width: 100%;\n  overflow: hidden;\n  padding: 3% 7%;\n}\n.chart .sub-chart .today div {\n  width: 45%;\n  float: left;\n  background: #ff8100;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n.chart .sub-chart .today div p {\n  font-size: 0.79rem;\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.chart .sub-chart .today div:last-child {\n  float: right;\n  background: #005eaa;\n}\n.chart .sub-chart:first-child {\n  padding-top: 0;\n}\n.chart .sub-chart:last-child {\n  border-bottom: none !important;\n}\n.chart .branch {\n  width: 100%;\n  overflow: hidden;\n}\n.chart .branch div {\n  width: 50%;\n  float: left;\n  font-size: 0.79rem;\n  color: #404040;\n}\n@media (min-width: 280px) and (max-width: 620px) {\n  section {\n    width: 100% !important;\n    padding: 0 !important;\n    margin: 10px !important;\n  }\n}\n@media screen and (max-width: 600px) {\n  .icon-style {\n    left: 55%;\n    position: relative;\n    font-size: 30px;\n    top: -42px;\n  }\n}\n@media screen and (min-width: 600px) {\n  .icon-style {\n    left: 55%;\n    position: relative;\n    font-size: 30px;\n    top: -42px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1rYnotbXMtc2VuaW9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJLHFCQUFBO0VBRUEsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUVBLGdEQUFBO0FBTlI7QUFPUTtFQUNJLGFBQUE7QUFMWjtBQVdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFSSjtBQVdBO0VBQ0ksZ0NBQUE7QUFSSjtBQVdBO0VBQ0ksZ0NBQUE7QUFSSjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBVFI7QUFZSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFWUjtBQWFJO0VBQ0ksY0FBQTtBQVhSO0FBZUE7RUFDSSxnQ0FBQTtBQVpKO0FBZUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBYlI7QUFlUTtFQUNJLGNBQUE7QUFiWjtBQWlCSTtFQUNJLGNBQUE7QUFmUjtBQW1CQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFoQko7QUFtQkE7RUFDSSxjQUFBO0FBaEJKO0FBb0JJO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBakJSO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUVBLGdEQUFBO0FBbkJSO0FBb0JRO0VBQ0ksYUFBQTtBQWxCWjtBQXdCSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQXJCUjtBQXVCUTs7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBckJaO0FBd0JRO0VBQ0ksMEJBQUE7QUF0Qlo7QUF5QlE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQXZCWjtBQTBCUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUF4Qlo7QUEwQlk7RUFDSSxnQkFBQTtBQXhCaEI7QUE2Qkk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBM0JSO0FBa0NROztFQUVJLCtCQUFBO0FBL0JaO0FBbUNJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBakNSO0FBbUNRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFsQ1o7QUFvQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQWxDaEI7QUFzQ1E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBcENaO0FBdUNRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBckNaO0FBeUNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUVBLGdEQUFBO0FBeENSO0FBeUNRO0VBQ0ksYUFBQTtBQXZDWjtBQTBDUTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBeENaO0FBOENJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBM0NSO0FBOENJO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtBQTVDUjtBQThDUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUE1Q1o7QUE2Q1k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBM0NoQjtBQTZDZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUEzQ3BCO0FBK0NZO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBN0NoQjtBQWtESTtFQUNJLGNBQUE7QUFoRFI7QUFtREk7RUFDSSw4QkFBQTtBQWpEUjtBQW9ESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQWxEUjtBQW9EUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBbERaO0FBd0RBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7RUFyRE47QUFDRjtBQXlEQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUF2RE47QUFDRjtBQTBEQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUF4RE47QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQta2J6LW1zLXNlbmlvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuXG4gICAgLy93aWR0aDogY2FsYygxMDBweCAvIHZhcigtLXJhdGlvLXcpKTtcbiAgICAvL2hlaWdodDogY2FsYygxMDAlIC8gdmFyKC0tcmF0aW8taCkpO1xuICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgIHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gICAgICAgIC8vaGVpZ2h0OiB2YXIoLS1yYXRpby1oKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICAgIC8qIEZpcmVmb3ggKi9cblxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoZWlnaHQ6IGNhbGModmFyKC0tcmF0aW8taCkgLSAoNTguOHB4ICsgNjBweCkpO1xuICAgIH1cbn1cbi51c2VyLWljb24ge1xuICAgIHdpZHRoOiAyN3B4O1xuICAgIGhlaWdodDogMjdweDtcbiAgfVxuXG4uZGFzaGJvYXJkLW1haW4ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xufVxuXG4ucHJvZmlsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG5cbiAgICAvL3BhZGRpbmctYm90dG9tOiA0JTtcbiAgICAuaW1nLWNvbnRlbnQge1xuICAgICAgICBtYXgtd2lkdGg6IDEyNHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMjRweDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiOWZkZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgfVxufVxuXG4ucHJlbWl1bSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG5cbiAgICAvL3BhZGRpbmc6IDEwJSAwO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGFiZWw6bGFzdC1jaGlsZCB7XG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIH1cbn1cblxuLnRpdGxlLWNvbG9yIHtcbiAgICBjb2xvcjogIzAwNWVhYTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5wcmVtdWltLWNvbG9yIHtcbiAgICBjb2xvcjogIzAwNWVhYTtcbn1cblxuLnByb2R1Y3Qge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICAgIC8qIEZpcmVmb3ggKi9cblxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBpb24tdGh1bWJuYWlsLFxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi10ZXh0Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAgIH1cbn1cblxuLnNhbGVzLXBlcmZvcm1hbmNlIHtcbiAgICBoMyB7XG5cbiAgICAgICAgcDpudGgtY2hpbGQoMSksXG4gICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF0ZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDA0MDQwO1xuICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWVhYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICAgIC8qIEZpcmVmb3ggKi9cblxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2hhcnQge1xuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5zdWItY2hhcnQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcblxuICAgICAgICAudG9kYXkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcGFkZGluZzogMyUgNyU7XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmODEwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNWVhYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWItY2hhcnQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG5cbiAgICAuc3ViLWNoYXJ0Omxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJyYW5jaCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgLmljb24tc3R5bGUge1xuICAgICAgICBsZWZ0OiA1NSU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB0b3A6IC00MnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCkge1xuICAgIC5pY29uLXN0eWxlIHtcbiAgICAgICAgbGVmdDogNTUlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgdG9wOiAtNDJweDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 4508:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard-kbz-ms-senior/dashboard-kbz-ms-senior.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"dashboard-main\" (window:resize)=\"onResize($event)\" [ngStyle]=\"{'height': mainContentHeightPx }\">\n  <section [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <!-- [ngStyle]=\"{'height': profileHpx}\" -->\n    <div style=\"margin: 0 0 10px 0;\">\n      <div class=\"profile\" [ngStyle]=\"{'padding-bottom': profilePadding}\">\n        <div class=\"img-content\" [ngStyle]=\"{'width': profileImgW,  'height': profileImgW}\">\n          <img *ngIf=\"data?.agentInfo?.attId!=null\" [src]=\"DEFAULT_DOWNLOAD_URL+ data?.agentInfo?.attId\"\n            style=\"width: 100%; height: 100%;\" alt=\"profile\" />\n          <!-- <img  src=\"../../../assets/images/dashboard-usr.svg\" alt=\"profile\"> -->\n          <img *ngIf=\"data?.agentInfo?.attId==null\" src=\"./assets/temp-img/user_profile.png\" alt=\"profile\">\n        </div>\n        <ion-icon class=\"text-left icon-style\" name=\"camera\"  (click)=\"presentActionSheet()\"></ion-icon>\n\n        <ion-label class=\"title-color\">{{ data?.agentInfo?.employeeName }}</ion-label>\n        <ion-label>{{ data?.role }}</ion-label>\n      </div>\n      <div class=\"premium\" [ngStyle]=\"{'padding': productPadding}\">\n        <ion-label class=\"premuim-color\">{{\"CARD.premium\" | translate}} </ion-label>\n        <ion-label>{{ data?.agentInfo?.totalPremium||0 | number: '1.2-2' }} <span><small>MMK</small></span></ion-label>\n      </div>\n    </div>\n    <div class=\"product\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h2>{{\"CARD.products\" | translate}}</h2>\n        </div>\n        <div class=\"col-sm-6\">\n        \n        <h2  style=\"margin-left: 50%;\">{{\"CARD.premium\" | translate}}</h2>\n        </div>  \n      </div>\n      <ion-list [ngStyle]=\"{'height': profileHpx}\">\n        <ion-item lines=\"full\" *ngFor=\"let product of data?.yearlyProductPremium\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" alt=\"\" srcset=\"\">\n            <!-- <img *ngIf=\"productSmallIcon\" [src]=\"DEFAULT_DOWNLOAD_URL+product.productSmallIcon\" class=\"prod-icon\" \n              alt=\"\" srcset=\"\">-->\n          </ion-thumbnail>\n          <ion-text>{{ product.productName }}</ion-text>\n          <ion-text>{{ product.premium||0 | number: '1.2-2' }} MMK</ion-text>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n  <section class=\"sales-performance\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <h2 class=\"title-color\">{{\"CARD.sales_performances\" | translate}}</h2>\n    <div class=\"date\">\n      <div style=\"width: 50%;\">{{ months[currentMonthIndex] }} | Y{{ currentYear }}</div>\n      <!-- <div>Y{{ currentYear }}</div> -->\n      <div><a (click)=\"goToSalePolicies()\">{{\"CARD.all\" | translate}}</a></div>\n    </div>\n    <ion-list *ngIf=\"data && data.subAgentMonthlySale.length > 0\" [ngStyle]=\"{'height': salesHpx}\">\n      <ion-item lines=\"full\" *ngFor=\"let agent of data?.subAgentMonthlySale\" (click)=\"goToLPManager(agent)\">\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"agent.attId\" [src]=\"DEFAULT_DOWNLOAD_URL + agent?.attId\" class=\"user-icon\" alt=\"\"\n            (error)=\"changeSource($event)\" />\n          <img *ngIf=\"!agent.attId\" src=\"./assets/images/user_profile-01.svg\" class=\"user-icon\" alt=\"\"\n            (error)=\"changeSource($event)\" />\n        </ion-avatar>\n        <ion-text>\n          <ion-label class=\"ion-text-wrap\">{{ agent.name }}</ion-label>\n          <ion-label class=\"ion-text-wrap\">{{ agent.premium | number: '1.2-2' }} MMK</ion-label>\n        </ion-text>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <section class=\"chart\" [ngStyle]=\"{'height': mainContentHeightPx}\">\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': chartHpx}\" >\n      <h2 class=\"title-color\">{{\"FORM.opportunity_conversion\" | translate }}</h2>\n      <div class=\"branch\">\n        <div>{{ data?.agentInfo?.branchName }}</div>\n        <div style=\"font-weight: 600;\">{{ leadObj?.leadWinRate }} %</div>\n      </div>\n      <div id=\"inflation\" *ngIf=\"chartOptions\">\n        <apx-chart [series]=\"chartOptions?.series\" [chart]=\"chartOptions?.chart\" [dataLabels]=\"chartOptions?.dataLabels\"\n          [plotOptions]=\"chartOptions?.plotOptions\" [yaxis]=\"chartOptions?.yaxis\" [xaxis]=\"chartOptions?.xaxis\"\n          [legend]=\"chartOptions?.legend\" [colors]=\"chartOptions?.colors\" [grid]=\"chartOptions?.grid\"></apx-chart>\n      </div>\n    </div>\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': chartHpx}\">\n      <h2 class=\"title-color\">{{\"CARD.active_agents_today\" | translate}}</h2>\n      <div style=\"font-weight: bold;\">{{ todayActiveAgent }}</div>\n      <div id=\"chart\" style=\"position: relative;\n      top: -20px;\" *ngIf=\"chartOptionsAgent\">\n        <apx-chart [series]=\"chartOptionsAgent.series\" [chart]=\"chartOptionsAgent.chart\"\n          [xaxis]=\"chartOptionsAgent.xaxis\" [yaxis]=\"chartOptionsAgent.yaxis\" [title]=\"chartOptionsAgent.title\"\n          [legend]=\"chartOptionsAgent.legend\" [dataLabels]=\"chartOptionsAgent.dataLabels\"\n          [markers]=\"chartOptionsAgent.markers\"></apx-chart>\n      </div>\n    </div>\n    <div class=\"sub-chart\" [ngStyle]=\"{'height': thingsHpx}\">\n      <h2 class=\"title-color\">{{\"CARD.things_followup_today\" | translate}}</h2>\n      <div class=\"today\">\n        <div>\n          <p>{{\"FORM.task_today\" | translate }}</p>\n          <p>{{ leadObj.taskToday }}</p>\n        </div>\n        <div>\n          <p>{{\"FORM.opportunity_today\" | translate }}</p>\n          <p>{{ leadObj.leadToday }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-kbz-ms-senior_dashboard-kbz-ms-senior_module_ts.js.map