"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_builder_builder_module_ts"],{

/***/ 56792:
/*!***************************************************!*\
  !*** ./src/assets/js/layout/extended/examples.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */




var KTLayoutExamples = function() {

    var initDefaultMode = function(element) {
        var elements = element;
        if (typeof elements === 'undefined') {
            elements = document.querySelectorAll('.example:not(.example-compact):not(.example-hover):not(.example-basic)');
        }

        if (elements && elements.length > 0 ) {
            for (var i = 0; i < elements.length; ++i) {
                var example = elements[i];
                var copy = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(example, '.example-copy');

                if (copy) {
                    var clipboard = new ClipboardJS(copy, {
                        target: function(trigger) {
                            var example = trigger.closest('.example');
                            var el = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(example, '.example-code .tab-pane.active');

                            if (!el) {
                                el = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(example, '.example-code');
                            }

                            return el;
                        }
                    });

                    clipboard.on('success', function(e) {
                        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(e.trigger, 'example-copied');
                        e.clearSelection();

                        setTimeout(function() {
                            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(e.trigger, 'example-copied');
                        }, 2000);
                    });
                }
            }
        }
    }

    var initCompactMode = function(element) {
        var example,code,toggle,copy, clipboard;

        var elements = element;
        if (typeof elements === 'undefined') {
            var elements = document.querySelectorAll('.example.example-compact');
        }

        if (elements && elements.length > 0 ) {
            for (var i = 0; i < elements.length; ++i) {
                var example = elements[i];
                var toggle = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(example, '.example-toggle');
                var copy = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(example, '.example-copy');

                // Handle toggle
                _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(toggle, 'click', function() {
                    var example = this.closest('.example');
                    var code =  _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(example, '.example-code');
                    var the = this;

                    if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(this, 'example-toggled')) {
                        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.slideUp(code, 300, function() {
                            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(the, 'example-toggled');
                            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(code, 'example-code-on');
                            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hide(code);
                        });
                    } else {
                        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(code, 'example-code-on');
                        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(this, 'example-toggled');
                        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.slideDown(code, 300, function() {
                            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.show(code);
                        });
                    }
                });

                // Handle copy
                if (copy) {
                    var clipboard = new ClipboardJS(copy, {
                        target: function(trigger) {
                            var example = trigger.closest('.example');
                            var el = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(example, '.example-code .tab-pane.active');

                            if (!el) {
                                el = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(example, '.example-code');
                            }

                            return el;
                        }
                    });

                    clipboard.on('success', function(e) {
                        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(e.trigger, 'example-copied');
                        e.clearSelection();

                        setTimeout(function() {
                            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(e.trigger, 'example-copied');
                        }, 2000);
                    });
                }
            }
        }
    }

    return {
        init: function(element, options) {
            initDefaultMode(element);
            initCompactMode(element);
        }
    };
}();

// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTLayoutExamples;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutExamples);

/***/ }),

/***/ 86530:
/*!*******************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodePreviewComponent": () => (/* binding */ CodePreviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_code_preview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./code-preview.component.html */ 1362);
/* harmony import */ var _code_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-preview.component.scss */ 21201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../assets/js/layout/extended/examples */ 56792);





let CodePreviewComponent = class CodePreviewComponent {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const elements = this.el.nativeElement.querySelectorAll('.example.example-compact');
        _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_2__["default"].init(elements);
    }
};
CodePreviewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef }
];
CodePreviewComponent.propDecorators = {
    viewItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CodePreviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-code-preview',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_code_preview_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_code_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodePreviewComponent);



/***/ }),

/***/ 45900:
/*!**********************************************************************!*\
  !*** ./src/app/_metronic/partials/content/general/general.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralModule": () => (/* binding */ GeneralModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ 46300);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice/notice.component */ 50866);
/* harmony import */ var _code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-preview/code-preview.component */ 86530);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core */ 39123);










let GeneralModule = class GeneralModule {
};
GeneralModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_1__.NoticeComponent, _code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_2__.CodePreviewComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _core__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__.HighlightModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule,
            // ngbootstrap
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltipModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
        ],
        exports: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_1__.NoticeComponent, _code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_2__.CodePreviewComponent],
    })
], GeneralModule);



/***/ }),

/***/ 50866:
/*!*******************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/general/notice/notice.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeComponent": () => (/* binding */ NoticeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notice_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notice.component.html */ 29479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



let NoticeComponent = class NoticeComponent {
    constructor() { }
    ngOnInit() { }
};
NoticeComponent.ctorParameters = () => [];
NoticeComponent.propDecorators = {
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    svg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
NoticeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-notice',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notice_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], NoticeComponent);



/***/ }),

/***/ 23992:
/*!****************************************************!*\
  !*** ./src/app/pages/builder/builder.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuilderComponent": () => (/* binding */ BuilderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_builder_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./builder.component.html */ 82470);
/* harmony import */ var _builder_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder.component.scss */ 47674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _metronic_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/core/ */ 39123);
/* harmony import */ var _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/layout/extended/examples */ 56792);






let BuilderComponent = class BuilderComponent {
    constructor(layout, el) {
        this.layout = layout;
        this.el = el;
        this.activeTabId = 1;
    }
    ngOnInit() {
        this.model = this.layout.getConfig();
    }
    setActiveTab(tabId) {
        this.activeTabId = tabId;
    }
    getActiveTabCSSClass(tabId) {
        if (tabId !== this.activeTabId) {
            return '';
        }
        return 'active';
    }
    resetPreview() {
        this.layout.refreshConfigToDefault();
    }
    submitPreview() {
        this.layout.setConfig(this.model);
        location.reload();
    }
    ngAfterViewInit() {
        // init code preview examples
        // see /src/assets/js/layout/extended/examples.js
        const elements = this.el.nativeElement.querySelectorAll('.example');
        _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_3__["default"].init(elements);
    }
};
BuilderComponent.ctorParameters = () => [
    { type: _metronic_core___WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef }
];
BuilderComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['form', { static: true },] }]
};
BuilderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-builder',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_builder_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_builder_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuilderComponent);



/***/ }),

/***/ 7985:
/*!*************************************************!*\
  !*** ./src/app/pages/builder/builder.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuilderModule": () => (/* binding */ BuilderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/partials/content/general/general.module */ 45900);
/* harmony import */ var _builder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder.component */ 23992);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ 46300);









let BuilderModule = class BuilderModule {
};
BuilderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_1__.BuilderComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_0__.GeneralModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.HighlightModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltipModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _builder_component__WEBPACK_IMPORTED_MODULE_1__.BuilderComponent,
                },
            ]),
        ],
    })
], BuilderModule);



/***/ }),

/***/ 1362:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/content/general/code-preview/code-preview.component.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card card-custom example example-compact gutter-b\" *ngIf=\"viewItem\">\r\n  <div class=\"card-header\">\r\n    <div class=\"card-title\">\r\n      <h3 class=\"card-label\">{{ viewItem.beforeCodeTitle }}</h3>\r\n    </div>\r\n    <div class=\"card-toolbar\">\r\n      <div class=\"example-tools justify-content-center\">\r\n        <span class=\"example-toggle\" ngbTooltip=\"View code\"></span>\r\n        <span class=\"example-copy\" ngbTooltip=\"Copy code\"></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div>\r\n      <!--begin::Code example-->\r\n      <div class=\"example-code mb-5\">\r\n        <ul\r\n          ngbNav\r\n          #nav=\"ngbNav\"\r\n          class=\"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x\"\r\n        >\r\n          <li *ngIf=\"viewItem.htmlCode\" ngbNavItem class=\"nav-item\">\r\n            <a ngbNavLink class=\"nav-link\">HTML</a>\r\n            <ng-template ngbNavContent>\r\n              <div class=\"example-highlight\">\r\n                <pre><code [highlight]=\"viewItem.htmlCode\"></code></pre>\r\n              </div>\r\n            </ng-template>\r\n          </li>\r\n          <li *ngIf=\"viewItem.tsCode\" ngbNavItem class=\"nav-item\">\r\n            <a ngbNavLink class=\"nav-link\">TypeScript</a>\r\n            <ng-template ngbNavContent>\r\n              <div class=\"example-highlight\">\r\n                <pre><code [highlight]=\"viewItem.tsCode\"></code></pre>\r\n              </div>\r\n            </ng-template>\r\n          </li>\r\n          <li *ngIf=\"viewItem.cssCode\" ngbNavItem class=\"nav-item\">\r\n            <a ngbNavLink class=\"nav-link\">CSS</a>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"example-highlight\">\r\n                <pre><code [highlight]=\"viewItem.cssCode\"></code></pre>\r\n              </div>\r\n            </ng-template>\r\n          </li>\r\n          <li *ngIf=\"viewItem.scssCode\" ngbNavItem class=\"nav-item\">\r\n            <a ngbNavLink class=\"nav-link\">SASS</a>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"example-highlight\">\r\n                <pre><code [highlight]=\"viewItem.scssCode\"></code></pre>\r\n              </div>\r\n            </ng-template>\r\n          </li>\r\n\r\n          <li *ngIf=\"viewItem.jsonCode\" ngbNavItem class=\"nav-item\">\r\n            <a ngbNavLink class=\"nav-link\">JSON</a>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"example-highlight\">\r\n                <pre><code [highlight]=\"viewItem.jsonCode\"></code></pre>\r\n              </div>\r\n            </ng-template>\r\n          </li>\r\n        </ul>\r\n\r\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n      </div>\r\n      <!--end::Code example-->\r\n\r\n      <!-- view -->\r\n      <ng-content></ng-content>\r\n      <!-- / view -->\r\n\r\n      <!-- after Code Title -->\r\n      <div\r\n        *ngIf=\"viewItem.afterCodeTitle\"\r\n        class=\"kt-portlet__preview\"\r\n        [innerHTML]=\"viewItem.afterCodeTitle | safe: 'html'\"\r\n      ></div>\r\n      <!-- / after Code Title -->\r\n\r\n      <!-- after Code Description -->\r\n      <div\r\n        *ngIf=\"viewItem.afterCodeDescription\"\r\n        class=\"kt-portlet__preview\"\r\n        [innerHTML]=\"viewItem.afterCodeDescription | safe: 'html'\"\r\n      ></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 29479:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/content/general/notice/notice.component.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Notice-->\r\n<div\r\n  class=\"alert alert-custom alert-white alert-shadow gutter-b\"\r\n  [ngClass]=\"classes\"\r\n  role=\"alert\"\r\n>\r\n  <ng-container *ngIf=\"icon || svg\">\r\n    <div class=\"alert-icon alert-icon-top\">\r\n      <ng-container *ngIf=\"svg\">\r\n        <span\r\n          class=\"svg-icon svg-icon-3x svg-icon-primary\"\r\n          [inlineSVG]=\"svg\"\r\n        ></span>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"icon\">\r\n        <i [ngClass]=\"icon\"></i>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  <div class=\"alert-text\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n<!--end::Notice-->\r\n");

/***/ }),

/***/ 82470:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/builder/builder.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-notice [svg]=\"'./assets/media/svg/icons/Tools/Tools.svg'\">\r\n  <p>\r\n    The layout builder is to assist your set and configure your preferred\r\n    project layout specifications and preview it in real time. The configured\r\n    layout options will be saved until you change or reset them. To use the\r\n    layout builder, choose the layout options and click the\r\n    <code>Preview</code> button to preview the changes.\r\n  </p>\r\n</app-notice>\r\n<!--begin::Card-->\r\n<div class=\"card card-custom gutter-b\">\r\n  <!--begin::Header-->\r\n  <div class=\"card-header card-header-tabs-line\">\r\n    <ul class=\"nav nav-dark nav-bold nav-tabs nav-tabs-line\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a\r\n          (click)=\"setActiveTab(1)\"\r\n          class=\"nav-link cursor-pointer\"\r\n          [ngClass]=\"getActiveTabCSSClass(1)\"\r\n          role=\"tab\"\r\n        >\r\n          Header\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          (click)=\"setActiveTab(2)\"\r\n          class=\"nav-link cursor-pointer\"\r\n          [ngClass]=\"getActiveTabCSSClass(2)\"\r\n          role=\"tab\"\r\n        >\r\n          Subheader\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          (click)=\"setActiveTab(3)\"\r\n          class=\"nav-link cursor-pointer\"\r\n          [ngClass]=\"getActiveTabCSSClass(3)\"\r\n          role=\"tab\"\r\n        >\r\n          Content\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          (click)=\"setActiveTab(4)\"\r\n          class=\"nav-link cursor-pointer\"\r\n          [ngClass]=\"getActiveTabCSSClass(4)\"\r\n          role=\"tab\"\r\n        >\r\n          Aside\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          (click)=\"setActiveTab(5)\"\r\n          class=\"nav-link cursor-pointer\"\r\n          [ngClass]=\"getActiveTabCSSClass(5)\"\r\n          role=\"tab\"\r\n        >\r\n          Footer\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!--end::Header-->\r\n  <!--begin::Form-->\r\n  <form class=\"form\" novalidate #form=\"ngForm\" (ngSubmit)=\"submitPreview()\">\r\n    <!--begin::Body-->\r\n    <div class=\"card-body\">\r\n      <div class=\"tab-content pt-3\">\r\n        <!-- begin::Header -->\r\n        <div class=\"tab-pane\" [ngClass]=\"getActiveTabCSSClass(1)\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Desktop Fixed Header:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[header][self][fixed][desktop]\"\r\n                    [(ngModel)]=\"model.header.self.fixed.desktop\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">\r\n                Enable fixed header for desktop mode\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Mobile Fixed Header:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[header][self][fixed][mobile]\"\r\n                    [(ngModel)]=\"model.header.self.fixed.mobile\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">\r\n                Enable fixed header for mobile mode\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Header Width:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <select\r\n                class=\"form-control form-control-sm\"\r\n                name=\"builder[header][self][width]\"\r\n                [(ngModel)]=\"model.header.self.width\"\r\n              >\r\n                <option value=\"fluid\">Fluid</option>\r\n                <option value=\"fixed\">Fixed</option>\r\n              </select>\r\n              <div class=\"form-text text-muted\">Select header width type.</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Display Header Menu:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[header][menu][self][display]\"\r\n                    [(ngModel)]=\"model.header.menu.self.display\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Display header menu</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Static Header Menu:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[header][menu][self][static]\"\r\n                    [(ngModel)]=\"model.header.menu.self.static\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Static header menu</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Header Menu Layout:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <select\r\n                class=\"form-control form-control-sm\"\r\n                name=\"builder[header][menu][self][layout]\"\r\n                [(ngModel)]=\"model.header.menu.self.layout\"\r\n              >\r\n                <option value=\"default\">Default</option>\r\n                <option value=\"tab\">Tab</option>\r\n              </select>\r\n              <div class=\"form-text text-muted\">Select header width type.</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Header Menu Arrows:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[header][menu][self][rootArrow]\"\r\n                    [(ngModel)]=\"model.header.menu.self.rootArrow\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">\r\n                Enable header menu root link arrows\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end::Header -->\r\n\r\n        <!-- begin::Subheader -->\r\n        <div class=\"tab-pane\" [ngClass]=\"getActiveTabCSSClass(2)\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Display Subheader:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[subheader][display]\"\r\n                    [(ngModel)]=\"model.subheader.display\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Display subheader</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Fixed Subheader:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[subheader][fixed]\"\r\n                    [(ngModel)]=\"model.subheader.fixed\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">\r\n                Enable fixed(sticky) subheader. Requires\r\n                <code>Solid</code> subheader style.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\">Width:</label>\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <select\r\n                class=\"form-control form-control-sm\"\r\n                name=\"builder[subheader][width]\"\r\n                [(ngModel)]=\"model.subheader.width\"\r\n              >\r\n                <option value=\"fluid\">Fluid</option>\r\n                <option value=\"fixed\">Fixed</option>\r\n              </select>\r\n              <div class=\"form-text text-muted\">Select layout width type.</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Subheader Style:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <select\r\n                class=\"form-control form-control-sm\"\r\n                name=\"builder[subheader][style]\"\r\n                [(ngModel)]=\"model.subheader.style\"\r\n              >\r\n                <option value=\"transparent\">Transparent</option>\r\n                <option value=\"solid\">Solid</option>\r\n              </select>\r\n              <div class=\"form-text text-muted\">Select subheader style</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Subheader Layout:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <select\r\n                class=\"form-control form-control-sm\"\r\n                name=\"builder[layout][subheader][layoutVersion]\"\r\n                [(ngModel)]=\"model.subheader.layoutVersion\"\r\n              >\r\n                <option value=\"v1\">Subheader 1</option>\r\n                <option value=\"v2\">Subheader 2</option>\r\n                <option value=\"v3\">Subheader 3</option>\r\n                <option value=\"v4\">Subheader 4</option>\r\n                <option value=\"v5\">Subheader 5</option>\r\n                <option value=\"v6\">Subheader 6</option>\r\n              </select>\r\n              <div class=\"form-text text-muted\">Select subheader layout</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end::Subheader -->\r\n\r\n        <!-- begin::Content -->\r\n        <div class=\"tab-pane\" [ngClass]=\"getActiveTabCSSClass(3)\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\">Width:</label>\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <select\r\n                class=\"form-control form-control-sm\"\r\n                name=\"builder[content][width]\"\r\n                [(ngModel)]=\"model.content.width\"\r\n              >\r\n                <option value=\"fluid\">Fluid</option>\r\n                <option value=\"fixed\">Fixed</option>\r\n              </select>\r\n              <div class=\"form-text text-muted\">Select layout width type.</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end::Content -->\r\n\r\n        <!-- begin::Aside -->\r\n        <div class=\"tab-pane\" [ngClass]=\"getActiveTabCSSClass(4)\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Display:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-6\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[aside][self][display]\"\r\n                    [(ngModel)]=\"model.aside.self.display\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Display aside</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Static aside menu:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-6\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[aside][menu][static]\"\r\n                    [(ngModel)]=\"model.aside.menu.static\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Static aside menu</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\">Fixed:</label>\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[aside][self][fixed]\"\r\n                    [(ngModel)]=\"model.aside.self.fixed\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Set fixed aside layout</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Minimize:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builde[aside][self][minimize][toggle]\"\r\n                    [(ngModel)]=\"model.aside.self.minimize.toggle\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Allow aside minimizing</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Default Minimize:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[aside][self][minimize][default]\"\r\n                    [(ngModel)]=\"model.aside.self.minimize.default\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">\r\n                Set aside minimized by default\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\">Scroll:</label>\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[aside][menu][scroll]\"\r\n                    [(ngModel)]=\"model.aside.menu.scroll\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Enable aside scroll</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Submenu toggle dropdown:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[aside][menu][dropdown]\"\r\n                    [(ngModel)]=\"model.aside.menu.dropdown\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">\r\n                Select Submenu Toggle mode (works only when\r\n                <code>Scroll</code> is disabled. *By default - mode is\r\n                'accordion').\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end::Aside -->\r\n\r\n        <!-- begin::Footer -->\r\n        <div class=\"tab-pane\" [ngClass]=\"getActiveTabCSSClass(5)\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\"\r\n              >Fixed Desktop Footer:</label\r\n            >\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    name=\"builder[footer][fixed]\"\r\n                    [(ngModel)]=\"model.footer.fixed\"\r\n                    value=\"true\"\r\n                  />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n              <div class=\"form-text text-muted\">Set fixed desktop footer</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-form-label text-lg-right\">Width:</label>\r\n            <div class=\"col-lg-9 col-xl-4\">\r\n              <select\r\n                class=\"form-control form-control-sm\"\r\n                name=\"builder[footer][width]\"\r\n                [(ngModel)]=\"model.footer.width\"\r\n              >\r\n                <option value=\"fluid\">Fluid</option>\r\n                <option value=\"fixed\">Fixed</option>\r\n              </select>\r\n              <div class=\"form-text text-muted\">Select layout width type.</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end::Footer -->\r\n      </div>\r\n    </div>\r\n    <!--end::Body-->\r\n    <!--begin::Footer-->\r\n    <div class=\"card-footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\"></div>\r\n        <div class=\"col-lg-8\">\r\n          <button type=\"submit\" name=\"builder_submit\" class=\"btn btn-primary\">\r\n            Preview\r\n          </button>\r\n          &nbsp;\r\n          <button\r\n            type=\"submit\"\r\n            (click)=\"resetPreview()\"\r\n            name=\"builder_reset\"\r\n            class=\"btn btn-secondary\"\r\n          >\r\n            Reset\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--end::Footer-->\r\n  </form>\r\n  <!--end::Form-->\r\n</div>\r\n<!--end::Card-->\r\n\r\n<div class=\"card card-custom gutter-b\">\r\n  <div class=\"card-header\">\r\n    <div class=\"card-title\">\r\n      <h3 class=\"card-label\">Generated Config</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <!--begin::Example-->\r\n    <div class=\"example mb-10\">\r\n      <p>\r\n        Use for layout config in\r\n        <code>src/app/_metronic/configs/default-layout.config.ts</code>\r\n      </p>\r\n      <div class=\"example-code\">\r\n        <div class=\"example-code\">\r\n          <span\r\n            class=\"example-copy\"\r\n            data-placement=\"left\"\r\n            ngbTooltip=\"Copy code\"\r\n          ></span>\r\n          <div class=\"example-highlight\">\r\n            <pre><code [highlight]=\"model|json\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--end::Example-->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 21201:
/*!*********************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/general/code-preview/code-preview.component.scss ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none;\n}\n:host .hljs {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7QUFETjtBQUtFO0VBQ0Usa0NBQUE7QUFISiIsImZpbGUiOiJjb2RlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhsanMge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 47674:
/*!******************************************************!*\
  !*** ./src/app/pages/builder/builder.component.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ":host .hljs {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQ0FBQTtBQUFKIiwiZmlsZSI6ImJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmhsanMge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_builder_builder_module_ts.js.map