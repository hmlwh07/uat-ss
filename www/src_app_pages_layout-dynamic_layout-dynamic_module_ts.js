"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_layout-dynamic_layout-dynamic_module_ts"],{

/***/ 16338:
/*!********************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic-detail/layout-data.enum.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_DATA": () => (/* binding */ LAYOUT_DATA)
/* harmony export */ });
var LAYOUT_DATA;
(function (LAYOUT_DATA) {
    LAYOUT_DATA["CARD"] = "card";
    LAYOUT_DATA["TEXT"] = "text";
    LAYOUT_DATA["ROW"] = "row";
    LAYOUT_DATA["COL"] = "col";
    LAYOUT_DATA["BUTTON"] = "button";
    LAYOUT_DATA["TITLE"] = "title";
})(LAYOUT_DATA || (LAYOUT_DATA = {}));


/***/ }),

/***/ 18583:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic-detail/layout-dynamic-detail.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutDynamicDetailComponent": () => (/* binding */ LayoutDynamicDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _layout_dynamic_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-dynamic-detail.component.html?ngResource */ 74203);
/* harmony import */ var _layout_dynamic_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-dynamic-detail.component.scss?ngResource */ 59948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _layout_data_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-data.enum */ 16338);





let LayoutDynamicDetailComponent = class LayoutDynamicDetailComponent {
    constructor() {
        this.layoutData = _layout_data_enum__WEBPACK_IMPORTED_MODULE_2__.LAYOUT_DATA;
        this.activeBlog = {};
    }
    ngOnInit() { }
    onCreate(text) {
    }
};
LayoutDynamicDetailComponent.ctorParameters = () => [];
LayoutDynamicDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-layout-dynamic-detail',
        template: _layout_dynamic_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_layout_dynamic_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LayoutDynamicDetailComponent);



/***/ }),

/***/ 28830:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic-list/layout-dynamic-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutDynamicListComponent": () => (/* binding */ LayoutDynamicListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _layout_dynamic_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-dynamic-list.component.html?ngResource */ 38926);
/* harmony import */ var _layout_dynamic_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-dynamic-list.component.scss?ngResource */ 62741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LayoutDynamicListComponent = class LayoutDynamicListComponent {
    constructor() { }
    ngOnInit() { }
};
LayoutDynamicListComponent.ctorParameters = () => [];
LayoutDynamicListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-layout-dynamic-list',
        template: _layout_dynamic_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_layout_dynamic_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LayoutDynamicListComponent);



/***/ }),

/***/ 12916:
/*!******************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutDynamicComponent": () => (/* binding */ LayoutDynamicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _layout_dynamic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-dynamic.component.html?ngResource */ 66361);
/* harmony import */ var _layout_dynamic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-dynamic.component.scss?ngResource */ 75323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LayoutDynamicComponent = class LayoutDynamicComponent {
    constructor() { }
    ngOnInit() { }
};
LayoutDynamicComponent.ctorParameters = () => [];
LayoutDynamicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-layout-dynamic',
        template: _layout_dynamic_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_layout_dynamic_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LayoutDynamicComponent);



/***/ }),

/***/ 87223:
/*!***************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutDynamicModule": () => (/* binding */ LayoutDynamicModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-component/form-component.module */ 78798);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static-page-review/static-pages-reivew.module */ 72363);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _layout_dynamic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-dynamic.component */ 12916);
/* harmony import */ var _layout_dynamic_detail_layout_dynamic_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-dynamic-detail/layout-dynamic-detail.component */ 18583);
/* harmony import */ var _layout_dynamic_list_layout_dynamic_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-dynamic-list/layout-dynamic-list.component */ 28830);












let LayoutDynamicModule = class LayoutDynamicModule {
};
LayoutDynamicModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_layout_dynamic_component__WEBPACK_IMPORTED_MODULE_2__.LayoutDynamicComponent, _layout_dynamic_detail_layout_dynamic_detail_component__WEBPACK_IMPORTED_MODULE_3__.LayoutDynamicDetailComponent, _layout_dynamic_list_layout_dynamic_list_component__WEBPACK_IMPORTED_MODULE_4__.LayoutDynamicListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_0__.FormComponentModule,
            _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_1__.StaticPagesViewModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                {
                    path: '',
                    component: _layout_dynamic_component__WEBPACK_IMPORTED_MODULE_2__.LayoutDynamicComponent,
                    children: [
                        {
                            path: 'list',
                            component: _layout_dynamic_list_layout_dynamic_list_component__WEBPACK_IMPORTED_MODULE_4__.LayoutDynamicListComponent,
                        },
                        {
                            path: 'detail',
                            component: _layout_dynamic_detail_layout_dynamic_detail_component__WEBPACK_IMPORTED_MODULE_3__.LayoutDynamicDetailComponent,
                        },
                    ]
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe]
    })
], LayoutDynamicModule);



/***/ }),

/***/ 59948:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic-detail/layout-dynamic-detail.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = ".active-lable {\n  display: inline-block;\n  font-weight: normal;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.65rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 1.5rem;\n  min-width: 200px;\n  text-align: left;\n  background-color: #ffd300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1keW5hbWljLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6ImxheW91dC1keW5hbWljLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtbGFibGUge1xyXG4gIGRpc3BsYXkgICAgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodCAgICAgICAgOiBub3JtYWw7XHJcbiAgY29sb3IgICAgICAgICAgICAgIDogI2ZmZjtcclxuICB0ZXh0LWFsaWduICAgICAgICAgOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ24gICAgIDogbWlkZGxlO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3QgICAgICAgIDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yICAgOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXIgICAgICAgICAgICAgOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZyAgICAgICAgICAgIDogMC42NXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZSAgICAgICAgICA6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQgICAgICAgIDogMS41O1xyXG4gIGJvcmRlci1yYWRpdXMgICAgICA6IDEuNXJlbTtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDMwMDtcclxufSJdfQ== */";

/***/ }),

/***/ 62741:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic-list/layout-dynamic-list.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQtZHluYW1pYy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 75323:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQtZHluYW1pYy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 74203:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic-detail/layout-dynamic-detail.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom gutter-b\">\r\n      <!-- <div class=\"card-header\" *ngIf=\"!isPopup\">\r\n        <div class=\"card-title\" style=\"display: block;\">\r\n         \r\n        </div>\r\n        \r\n      </div> -->\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-label left-border-image\">Create Building List</h3>\r\n        <hr>\r\n        <div>\r\n          <button class=\"btn btn-primary\" (click)=\"onCreate(layoutData.CARD)\">Card</button>\r\n          <button class=\"btn btn-primary mx-2\" (click)=\"onCreate(layoutData.ROW)\">Row</button>\r\n          <button class=\"btn btn-primary\" (click)=\"onCreate(layoutData.COL)\">Col</button>\r\n          <button class=\"btn btn-primary mx-2\" (click)=\"onCreate(layoutData.BUTTON)\">Button</button>\r\n          <button class=\"btn btn-primary\" (click)=\"onCreate(layoutData.TITLE)\">Title</button>\r\n          <button class=\"btn btn-primary ml-2\" (click)=\"onCreate(layoutData.TEXT)\">Text</button>\r\n          <label class=\"active-lable float-right\" style=\"display: inline-block;\">Active Tag: {{activeBlog.unitId}}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 38926:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic-list/layout-dynamic-list.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\r\n  layout-dynamic-list works!\r\n</p>\r\n";

/***/ }),

/***/ 66361:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/layout-dynamic/layout-dynamic.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-dynamic_layout-dynamic_module_ts.js.map