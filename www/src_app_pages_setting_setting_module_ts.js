"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_setting_setting_module_ts"],{

/***/ 64507:
/*!*********************************************************!*\
  !*** ./src/app/pages/setting/setting-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageRoutingModule": () => (/* binding */ SettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page */ 64650);




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

/***/ 6781:
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageModule": () => (/* binding */ SettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 64507);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page */ 64650);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);








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

/***/ 64650:
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPage": () => (/* binding */ SettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_setting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./setting.page.html */ 52830);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_src_app_pages_setting_setting_page_ts_css_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_LnNldHRpbmctbGFiZWx7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_src_app_pages_setting_setting_page_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/pages/setting/setting.page.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=LnNldHRpbmctbGFiZWx7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9!./src/app/pages/setting/setting.page.ts */ 45603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/languages/languages.service */ 59832);






let SettingPage = class SettingPage {
    constructor(navCtrl, langService, cdf) {
        this.navCtrl = navCtrl;
        this.langService = langService;
        this.cdf = cdf;
        this.languageData = 'en';
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
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_setting_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_src_app_pages_setting_setting_page_ts_css_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_LnNldHRpbmctbGFiZWx7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9_Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_src_app_pages_setting_setting_page_ts__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingPage);



/***/ }),

/***/ 52830:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/setting/setting.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"screen-padding pt-l\">\n    <ion-row class=\"mb-n\">\n        <ion-col size=\"12\">\n            <h3 class=\"card-label left-border-image\">{{'FORM.change' | translate}}</h3>\n        </ion-col>\n    </ion-row>\n    <ion-radio-group [(ngModel)]=\"languageData\" (ionChange)=\"changeLang()\">\n        <ion-row class=\"mt-l\">\n            <ion-col size=\"12\" style=\"display: flex;align-items: center;\">\n                <ion-radio value=\"mm\"></ion-radio>\n                <ion-label class=\"setting-label\">{{'FORM.mm' | translate}}</ion-label>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"mt-l\">\n            <ion-col size=\"12\" style=\"display: flex;align-items: center;\">\n                <ion-radio value=\"en\"></ion-radio>\n                <ion-label class=\"setting-label\">{{'FORM.en' | translate}}</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-radio-group>\n</div>");

/***/ }),

/***/ 45603:
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=LnNldHRpbmctbGFiZWx7CiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICBtYXJnaW4tbGVmdDogMTBweDsKICB9!./src/app/pages/setting/setting.page.ts ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".setting-label{\n    display: inline-block;\n    margin-left: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic2V0dGluZy5wYWdlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmctbGFiZWx7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_setting_setting_module_ts.js.map