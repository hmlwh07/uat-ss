"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_setting_setting_module_ts"],{

/***/ 42448:
/*!*********************************************************!*\
  !*** ./src/app/pages/setting/setting-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageRoutingModule": () => (/* binding */ SettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page */ 29164);




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_0__.SettingPage
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ 46749:
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageModule": () => (/* binding */ SettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 42448);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page */ 29164);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);








let SettingPageModule = class SettingPageModule {
};
SettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_2__.LanguageModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingPageRoutingModule
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_1__.SettingPage]
    })
], SettingPageModule);



/***/ }),

/***/ 29164:
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPage": () => (/* binding */ SettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _setting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page.html?ngResource */ 58818);
/* harmony import */ var D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_src_app_pages_setting_setting_page_ts_css_ngResource_D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_LnNldHRpbmctbGFiZWx7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9_D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_src_app_pages_setting_setting_page_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/pages/setting/setting.page.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=LnNldHRpbmctbGFiZWx7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9!./src/app/pages/setting/setting.page.ts */ 16262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/languages/languages.service */ 96115);






let SettingPage = class SettingPage {
    constructor(navCtrl, langService, cdf) {
        this.navCtrl = navCtrl;
        this.langService = langService;
        this.cdf = cdf;
        this.languageData = 'EN';
    }
    ngOnInit() {
        this.languageData = this.langService.getSelectedLanguage();
    }
    changeLang() {
        this.langService.setLanguage(this.languageData);
        // console.log(this.languageData);
        this.cdf.detectChanges();
    }
};
SettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_2__.LanguagesService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef }
];
SettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-setting',
        template: _setting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_src_app_pages_setting_setting_page_ts_css_ngResource_D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_LnNldHRpbmctbGFiZWx7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9_D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_src_app_pages_setting_setting_page_ts__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingPage);



/***/ }),

/***/ 16262:
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=LnNldHRpbmctbGFiZWx7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9!./src/app/pages/setting/setting.page.ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".setting-label{\n    display: inline-block;\n    margin-left: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic2V0dGluZy5wYWdlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmctbGFiZWx7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9Il19 */";

/***/ }),

/***/ 58818:
/*!************************************************************!*\
  !*** ./src/app/pages/setting/setting.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"screen-padding pt-l\">\r\n    <ion-row class=\"mb-n\">\r\n        <ion-col size=\"12\">\r\n            <h3 class=\"card-label left-border-image\">{{'FORM.change' | translate}}</h3>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-radio-group [(ngModel)]=\"languageData\" (ionChange)=\"changeLang()\">\r\n        <ion-row class=\"mt-l\">\r\n            <ion-col size=\"12\" style=\"display: flex;align-items: center;\">\r\n                <ion-radio value=\"mm\"></ion-radio>\r\n                <ion-label class=\"setting-label\">{{'FORM.mm' | translate}}</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"mt-l\">\r\n            <ion-col size=\"12\" style=\"display: flex;align-items: center;\">\r\n                <ion-radio value=\"en\"></ion-radio>\r\n                <ion-label class=\"setting-label\">{{'FORM.en' | translate}}</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-radio-group>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_setting_setting_module_ts.js.map