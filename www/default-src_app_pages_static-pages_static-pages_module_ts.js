"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_static-pages_static-pages_module_ts"],{

/***/ 50174:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS": () => (/* binding */ MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR": () => (/* binding */ MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR),
/* harmony export */   "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR": () => (/* binding */ MAT_SLIDE_TOGGLE_VALUE_ACCESSOR),
/* harmony export */   "MatSlideToggle": () => (/* binding */ MatSlideToggle),
/* harmony export */   "MatSlideToggleChange": () => (/* binding */ MatSlideToggleChange),
/* harmony export */   "MatSlideToggleModule": () => (/* binding */ MatSlideToggleModule),
/* harmony export */   "MatSlideToggleRequiredValidator": () => (/* binding */ MatSlideToggleRequiredValidator),
/* harmony export */   "_MatSlideToggleRequiredValidatorModule": () => (/* binding */ _MatSlideToggleRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ 34095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 42706);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 62270);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-slide-toggle`. */





const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];
const _c3 = function () { return { enterDuration: 150 }; };
const _c4 = ["*"];
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: () => ({ disableToggleValue: false })
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for slide-toggle components.
let nextUniqueId = 0;
/** @docs-private */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSlideToggle),
    multi: true
};
/** Change event object emitted by a MatSlideToggle. */
class MatSlideToggleChange {
    constructor(
    /** The source MatSlideToggle of the event. */
    source, 
    /** The new `checked` value of the MatSlideToggle. */
    checked) {
        this.source = source;
        this.checked = checked;
    }
}
// Boilerplate for applying mixins to MatSlideToggle.
/** @docs-private */
class MatSlideToggleBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatSlideToggleMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(MatSlideToggleBase)), 'accent'));
/** Represents a slidable "switch" toggle that can be moved between on and off. */
class MatSlideToggle extends _MatSlideToggleMixinBase {
    constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this.defaults = defaults;
        this._animationMode = _animationMode;
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
        this._required = false;
        this._checked = false;
        /** Name value will be applied to the input element if present. */
        this.name = null;
        /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
        this.labelPosition = 'after';
        /** Used to set the aria-label attribute on the underlying input element. */
        this.ariaLabel = null;
        /** Used to set the aria-labelledby attribute on the underlying input element. */
        this.ariaLabelledby = null;
        /** An event will be dispatched each time the slide-toggle changes its value. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */
        this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Whether the slide-toggle is required. */
    get required() { return this._required; }
    set required(value) { this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value); }
    /** Whether the slide-toggle element is checked or not. */
    get checked() { return this._checked; }
    set checked(value) {
        this._checked = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        this._changeDetectorRef.markForCheck();
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    ngAfterContentInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe(focusOrigin => {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                this._inputElement.nativeElement.focus();
            }
            else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => this._onTouched());
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Method being called whenever the underlying input emits a change event. */
    _onChangeEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        this.toggleChange.emit();
        // When the slide toggle's config disables toggle change event by setting
        // `disableToggleValue: true`, the slide toggle's value does not change, and the
        // checked state of the underlying input needs to be changed back.
        if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
        }
        // Sync the value from the underlying input element with the component instance.
        this.checked = this._inputElement.nativeElement.checked;
        // Emit our custom change event only if the underlying input emitted one. This ensures that
        // there is no change event, when the checked state changes programmatically.
        this._emitChangeEvent();
    }
    /** Method being called whenever the slide-toggle has been clicked. */
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(value) {
        this.checked = !!value;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the slide-toggle. */
    focus(options, origin) {
        if (origin) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        else {
            this._inputElement.nativeElement.focus(options);
        }
    }
    /** Toggles the checked state of the slide-toggle. */
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     */
    _emitChangeEvent() {
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
        // slide-toggle component will be only marked for check, but no actual change detection runs
        // automatically. Instead of going back into the zone in order to trigger a change detection
        // which causes *all* components to be checked (if explicitly marked or not using OnPush),
        // we only trigger an explicit change detection for the slide-toggle view and its children.
        this._changeDetectorRef.detectChanges();
    }
}
MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) { return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE, 8)); };
MatSlideToggle.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatSlideToggle, selectors: [["mat-slide-toggle"]], viewQuery: function MatSlideToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, hostAttrs: [1, "mat-slide-toggle"], hostVars: 12, hostBindings: function MatSlideToggle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], required: "required", checked: "checked" }, outputs: { change: "change", toggleChange: "toggleChange" }, exportAs: ["matSlideToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 16, vars: 18, consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]], template: function MatSlideToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) { return ctx._onChangeEvent($event); })("click", function MatSlideToggle_Template_input_click_4_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.CdkObserveContent], styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"], encapsulation: 2, changeDetection: 0 });
MatSlideToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE,] }] }
];
MatSlideToggle.propDecorators = {
    _thumbEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['thumbContainer',] }],
    _thumbBarEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['toggleBar',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    toggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-slide-toggle',
                exportAs: 'matSlideToggle',
                host: {
                    'class': 'mat-slide-toggle',
                    '[id]': 'id',
                    // Needs to be `-1` so it can still receive programmatic focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[class.mat-checked]': 'checked',
                    '[class.mat-disabled]': 'disabled',
                    '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
                inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['thumbContainer']
        }], _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['toggleBar']
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['input']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSlideToggleRequiredValidator),
    multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {
}
MatSlideToggleRequiredValidator.ɵfac = /*@__PURE__*/ function () { let ɵMatSlideToggleRequiredValidator_BaseFactory; return function MatSlideToggleRequiredValidator_Factory(t) { return (ɵMatSlideToggleRequiredValidator_BaseFactory || (ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator)))(t || MatSlideToggleRequiredValidator); }; }();
MatSlideToggleRequiredValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
                providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based slide-toggle implementations. */
class _MatSlideToggleRequiredValidatorModule {
}
_MatSlideToggleRequiredValidatorModule.ɵfac = function _MatSlideToggleRequiredValidatorModule_Factory(t) { return new (t || _MatSlideToggleRequiredValidatorModule)(); };
_MatSlideToggleRequiredValidatorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: _MatSlideToggleRequiredValidatorModule });
_MatSlideToggleRequiredValidatorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [MatSlideToggleRequiredValidator],
                declarations: [MatSlideToggleRequiredValidator]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, { declarations: [MatSlideToggleRequiredValidator], exports: [MatSlideToggleRequiredValidator] }); })();
class MatSlideToggleModule {
}
MatSlideToggleModule.ɵfac = function MatSlideToggleModule_Factory(t) { return new (t || MatSlideToggleModule)(); };
MatSlideToggleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatSlideToggleModule });
MatSlideToggleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _MatSlideToggleRequiredValidatorModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule,
        ], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _MatSlideToggleRequiredValidatorModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule,
                ],
                exports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatSlideToggle,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule
                ],
                declarations: [MatSlideToggle]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSlideToggleModule, { declarations: function () { return [MatSlideToggle]; }, imports: function () { return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule]; }, exports: function () { return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 31241:
/*!*****************************************!*\
  !*** ./src/app/core/master-data-map.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMasterValue": () => (/* binding */ getMasterValue)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 49566);


function getMasterValue(masterServer, response, column, editing = false) {
    if (Array.isArray(response) && response.length > 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(response).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
            let masterPost = [];
            let resource = result.map((res) => {
                let masterObj = res.data.filter(x => (x.value + "").startsWith("T-") || (x.value + "").startsWith("TA-"));
                if (masterObj.length > 0) {
                    let postData = masterObj.map(x => {
                        let columnName = column.find(col => col.name == x.column);
                        if (columnName.masterData) {
                            return {
                                "codeId": x.value,
                                "codeType": columnName.masterData,
                                "langCd": "EN"
                            };
                        }
                    });
                    masterPost.push(...postData);
                }
            });
            return { result, masterPost };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((result) => {
            if (result.masterPost.length > 0) {
                let postData = {
                    "codeBookRequest": result.masterPost
                };
                return masterServer.getMasterValue(postData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((masterValues) => {
                    return result.result.map(resp => {
                        resp.data = resp.data.flatMap(x => {
                            if ((x.value + "").startsWith("T-") || (x.value + "").startsWith("TA-")) {
                                let columnName = column.find(col => col.name == x.column);
                                let index = masterValues.findIndex(master => master.codeId == x.value && columnName.masterData == master.codeType);
                                if (index >= 0) {
                                    if (editing) {
                                        return [x, { column: x.column + "Value", value: masterValues[index].codeName }];
                                    }
                                    else {
                                        x.value = masterValues[index].codeName;
                                    }
                                }
                            }
                            return x;
                        });
                        return resp;
                    });
                    // return result
                }));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(result.result);
        }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(response);
}
// return masterServer.getMasterValue(postData).pipe(map((x: any) => {
//   return x.map(masterD => {
//     let index = res.data.findIndex(val => val.value == masterD.codeId)
//     res.data[index].value = masterD.codeName
//     return res.data[index]
//   })
// }), mergeMap((res2) => {
//   let masterObj = (res.data as any[]).filter(x => !(x.value + "" as string).includes("T-"))
//   console.log([...masterObj, ...res2]);
//   return of({ data: [...masterObj, ...res2] })
// })
// )
// export function getMasterValue(masterServer: MasterDataService, response: any, column: ConfigInput[]): Observable<any> {
//   console.log(response);
//   if (Array.isArray(response) && response.length > 0) {
//     return of(response).pipe(mergeMap((result: any[]) => {
//       return forkJoin(result.map((res) => {
//         let masterObj = (res.data as any[]).filter(x => (x.value + "" as string).includes("T-"))
//         if (masterObj.length > 0) {
//           let postData = {
//             "codeBookRequest": []
//           }
//           postData.codeBookRequest = masterObj.map(x => {
//             let columnName = column.find(col => col.name == x.column)
//             if (columnName.masterData) {
//               return {
//                 "codeId": x.value,
//                 "codeType": columnName.masterData,
//                 "langCd": "EN"
//               }
//             }
//           })
//           return masterServer.getMasterValue(postData).pipe(map((x: any) => {
//             return x.map(masterD => {
//               let index = res.data.findIndex(val => val.value == masterD.codeId)
//               res.data[index].value = masterD.codeName
//               return res.data[index]
//             })
//           }), mergeMap((res2) => {
//             let masterObj = (res.data as any[]).filter(x => !(x.value + "" as string).includes("T-"))
//             console.log([...masterObj, ...res2]);
//             return of({ data: [...masterObj, ...res2] })
//           })
//           )
//         }
//         return of(res)
//         // res.data.map(x => {
//         //   if((x.value as string).includes("T-")){
//         //   }
//         // })
//       }))
//     }))
//     // response.map(x=> {
//     //   x.data.map()
//     // })
//   }
//   return of(response)
// }


/***/ }),

/***/ 9628:
/*!*********************************************************!*\
  !*** ./src/app/pages/product-form/page-data.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDataService": () => (/* binding */ PageDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 49566);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);
/* harmony import */ var _core_master_data_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/master-data-map */ 31241);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/master-data/master-data.service */ 26697);









const API_PAGEDATA_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/pagedata`;
let PageDataService = class PageDataService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient, masterData) {
        super(httpClient, API_PAGEDATA_URL);
        this.httpClient = httpClient;
        this.masterData = masterData;
    }
    getDetail(table, resourceId, id, view = false, colums = [], editing = false) {
        return this.httpClient.get(API_PAGEDATA_URL + "/" + table + "/" + resourceId + "/" + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((res) => {
            if (view) {
                return (0,_core_master_data_map__WEBPACK_IMPORTED_MODULE_2__.getMasterValue)(this.masterData, res, colums, editing);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(res);
        }));
    }
    deleteData(table, refID, id) {
        return this.httpClient.delete(API_PAGEDATA_URL + "/" + table + "/" + refID + "/" + id);
    }
    updatePremimun(postData) {
        return this.httpClient.put(API_PAGEDATA_URL + "/resource", postData);
    }
};
PageDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService }
];
PageDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], PageDataService);



/***/ }),

/***/ 56156:
/*!***********************************************************************!*\
  !*** ./src/app/pages/static-pages/addon-page/addon-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddonPageComponent": () => (/* binding */ AddonPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addon_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./addon-page.component.html */ 70771);
/* harmony import */ var _addon_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addon-page.component.scss */ 95017);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../product-form/page-data.service */ 9628);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/is-json */ 47975);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-pages.data */ 6920);













let AddonPageComponent = class AddonPageComponent {
    constructor(addOnQuoService, globalFun, cdRef, prodService, numberPipe, pageDataService, loadingService) {
        this.addOnQuoService = addOnQuoService;
        this.globalFun = globalFun;
        this.cdRef = cdRef;
        this.prodService = prodService;
        this.numberPipe = numberPipe;
        this.pageDataService = pageDataService;
        this.loadingService = loadingService;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.addOns = {
            isSum: false,
            isUnit: false,
            isPremium: false,
        };
        this.addOnsData = {};
        this.unsubscribe = [];
        this.premiumAmt = '';
        this.parentData = {};
        this.isLoading = true;
        this.fireAddonRate = {
            "FRAD009": 0.1,
            "FRAD004": 0.1,
            "FRAD010-T-001": 0.25,
            "FRAD010-T-002": 0.5,
            "FRAD010-T-003": 0.75,
            "FRAD010-T-004": 1,
            "FRAD008-T-001": 0.2,
            "FRAD008-T-002": 0.2,
            "FRAD008-T-003": 0.2,
            "FRAD008-T-004": 0.2,
            "FRAD008-T-005": 0.25,
            "FRAD011": 0.1,
            "FRAD002": 0.1,
            "FRAD006": 0.1,
            "FRAD003": 0.1,
            "FRAD001": 0.06,
            "FRAD007": 0.08,
            "FRAD005": 0.1,
        };
        this.fireOptionData = {
            "FRAD008": [
                { "code": "T-001", "value": "Building" },
                { "code": "T-002", "value": "Furniture" },
                { "code": "T-003", "value": "Machine" },
                { "code": "T-004", "value": "Goods/Stocks" },
                { "code": "T-005", "value": "Water Damage for Goods/Stocks" },
            ],
            "FRAD010": [
                { "code": "T-001", "value": "First Class Building" },
                { "code": "T-002", "value": "Second Class Building" },
                { "code": "T-003", "value": "Third Class Building" },
                { "code": "T-004", "value": "Fourth Class Building" },
            ]
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.refID = this.prodService.referenceID;
            if (this.product.code == "PLMO02") {
                this.parentData = this.getParnet();
            }
            if (this.product.addOns && this.product.addOns.length > 0) {
                yield this.loadingService.activate();
                this.addOns = {
                    isSum: this.product.addOns[0].sumInsured,
                    isUnit: this.product.addOns[0].unit,
                    isPremium: this.product.addOns[0].premium,
                };
                let callAddon = true;
                let postData = {
                    quotationNo: this.resourcesId,
                    addOnIds: this.product.addOns.map(x => { return x.id; })
                };
                let results = yield this.addOnQuoService.getAllById(postData).toPromise();
                if (results.length == 0) {
                    postData.quotationNo = this.refID;
                    results = yield this.addOnQuoService.getAllById(postData).toPromise();
                }
                for (const item of this.product.addOns) {
                    item['show'] = true;
                    if (item.validationFun) {
                        item['show'] = this.globalFun[item.validationFun] ? this.globalFun[item.validationFun](this.parentData) : true;
                    }
                    if (this.product.code == "CLFR01") {
                        item["sumInsuredStr"] = "0";
                        item["unitStr"] = "0";
                        item["premiumStr"] = "0";
                    }
                    let response = results.find(x => x.addonId == item.id);
                    // if (item['show']) {
                    this.addOnsData[item.id] = {
                        checked: response && item['show'] ? true : false,
                        sum: response ? response.sumInsured || 0 : 0,
                        unit: response ? response.unit || 0 : 0,
                        premium: response ? response.premium || 0 : 0,
                        option: response ? response.option || "T-001" : "T-001",
                    };
                    if (item.sumInsured) {
                        this.getGlobalFun(item.sumInsuredStr, 'addOnsData', item.id, 'sum', item);
                    }
                    if (item.unit) {
                        this.getGlobalFun(item.unitStr, 'addOnsData', item.id, 'unit', item);
                    }
                    if (item.premium) {
                        if (item.code == "cross_addon" && this.addOnsData[item.id].checked) {
                        }
                        else {
                            this.getGlobalFun(item.premiumStr, 'addOnsData', item.id, 'premium', item);
                        }
                    }
                    // }
                }
                // if (callAddon && this.editData && this.refID) {
                //   for (const item of this.product.addOns) {
                //     let response: any = null;
                //     try {
                //       response = await this.addOnQuoService.getOne(item.id, this.refID).toPromise()
                //     } catch (error) {
                //       response = null
                //     }
                //     this.addOnsData[item.id] = {
                //       checked: response ? true : false,
                //       sum: response ? response.sumInsured || 0 : 0,
                //       unit: response ? response.unit || 0 : 0,
                //       premium: response ? response.premium || 0 : 0
                //     }
                //   }
                // }
                this.isLoading = false;
                yield this.loadingService.deactivate();
                this.cdRef.detectChanges();
            }
            else {
                this.isLoading = false;
            }
        });
    }
    getGlobalFun(funName, mainObj, mainKey, subKey, addon) {
        if (this.product.code == "PLMO02" && subKey == "premium") {
            if (this.globalFun[funName]) {
                let parentValueObj = addon.code == "uid_md_007" ? this.getParnet('motor_driver') : this.parentData;
                let unsub = this.globalFun[funName](parentValueObj).subscribe((res) => {
                    this[mainObj][mainKey][subKey] = res;
                    this.cdRef.detectChanges();
                });
                this.unsubscribe.push(unsub);
            }
            else {
                if (funName) {
                    // if (addon.code == "cross_addon" && this.product.code == "PLMO02" && subKey == "premium") {
                    //   this[mainObj][mainKey][subKey] = this.calcuCross() * 0.15
                    // }else{
                    this[mainObj][mainKey][subKey] = funName;
                    // }
                }
            }
        }
        else if (this.product.code == "CLFR01" && subKey == "premium") {
            this[mainObj][mainKey][subKey] = this.rateByValue(addon);
        }
        else {
            if (this.globalFun[funName + "Result"]) {
                let unsub = this.globalFun[funName + "Result"].subscribe((res) => {
                    this[mainObj][mainKey][subKey] = res;
                    this.cdRef.detectChanges();
                });
                this.unsubscribe.push(unsub);
            }
            else {
                if (funName)
                    this[mainObj][mainKey][subKey] = funName;
            }
        }
    }
    nextPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const quoService = this.addOnQuoService;
            const posDataArray = this.addOnsData;
            yield quoService.deleteAll(this.resourcesId).toPromise();
            for (let addon of this.product.addOns) {
                if (posDataArray[addon.id].checked) {
                    let sum = posDataArray[addon.id].sum ? posDataArray[addon.id].sum + "" : "";
                    let unit = posDataArray[addon.id].unit ? posDataArray[addon.id].unit + "" : "";
                    let premium = posDataArray[addon.id].premium ? posDataArray[addon.id].premium + "" : "";
                    let option = posDataArray[addon.id].option ? posDataArray[addon.id].option + "" : "";
                    try {
                        let postData = {
                            addonId: addon.id,
                            quotationNo: this.resourcesId,
                            option: option,
                            sumInsured: (sum).replace(',', '').replace('MMK', '').replace('USD', ''),
                            unit: (unit).replace(',', '').replace('MMK', '').replace('USD', ''),
                            premium: (premium).replace(',', '').replace('MMK', '').replace('USD', ''),
                        };
                        let res = yield quoService.save(postData).toPromise();
                    }
                    catch (error) {
                        // console.log(error);
                    }
                }
            }
            if (this.product.code == "PLMO02") {
                yield this.savePremimun().toPromise();
            }
            if (this.product.code == "CLFR01") {
                yield this.savePremimunFire().toPromise();
            }
            console.log("end");
            this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_5__.StaticActionType.NEXT });
        });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_5__.StaticActionType.PREV });
    }
    onCheckAddon() {
    }
    changeOption(addon) {
        if (addon.code != "cross_addon" && this.product.code == "PLMO02") {
            let cross = this.product.addOns.find(x => x.code == "cross_addon");
            if (this.addOnsData[cross.id].checked) {
                let tempPre = this.calcuCross();
                this.addOnsData[cross.id]['premium'] = tempPre * 0.15;
            }
        }
        else if (this.addOnsData[addon.id].checked && addon.code == "cross_addon") {
            let tempPre = this.calcuCross();
            this.addOnsData[addon.id]['premium'] = tempPre * 0.15;
        }
        else if (!this.addOnsData[addon.id].checked && addon.code == "cross_addon") {
            this.addOnsData[addon.id]['premium'] = 0;
        }
    }
    rechangeOption(addOn) {
        this.addOnsData[addOn.id].premium = this.rateByValue(addOn);
    }
    calcuCross() {
        let tempPre = 0;
        for (let addon of this.product.addOns) {
            if (this.addOnsData[addon.id].checked && addon.code != "cross_addon") {
                tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0);
            }
        }
        let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : [];
        for (let cov of coverageData) {
            tempPre += this.globalFun.calculateDecimal(cov.premium || 0);
        }
        // let crossPre = tempPre * 0.15
        let currency = this.parentData ? this.parentData.currency : 'mmk';
        let excessAmt = 0;
        if (this.parentData) {
            let excess = this.parentData['excess'];
            if (excess == "T-002" && currency == "mmk") {
                excessAmt = 50000;
            }
            else if (excess == "T-005") {
                excessAmt = 25;
            }
        }
        return tempPre + excessAmt;
    }
    caluMotorPremimun() {
        let tempPre = 0;
        for (let addon of this.product.addOns) {
            if (this.addOnsData[addon.id].checked) {
                tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0);
            }
        }
        let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : [];
        for (let cov of coverageData) {
            tempPre += this.globalFun.calculateDecimal(cov.premium || 0);
        }
        let currency = this.parentData ? this.parentData.currency : 'mmk';
        let discount = 0;
        if (this.parentData) {
            let excess = this.parentData['excess'];
            let excess_discount = this.parentData['excess_discount'];
            if (excess == "T-002" && currency == "mmk") {
                discount = -50000;
            }
            else if (excess == "T-005") {
                discount = -25;
            }
            else if (excess == "T-003" && currency == "mmk") {
                if (excess_discount == "T-001") {
                    discount = 50000;
                }
                else if (excess_discount == "T-002") {
                    discount = 70000;
                }
                else if (excess_discount == "T-003") {
                    discount = 100000;
                }
            }
        }
        let stumd = currency == "mmk" ? 100 : 1;
        let preAMT = (tempPre - discount) + stumd;
        this.premiumAmt = this.numberPipe.transform(preAMT) + " " + currency.toUpperCase();
        this.globalFun.paPremiumResult.next(this.premiumAmt);
        return preAMT;
    }
    caluFirePremimun() {
        let parentData1 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.FireRiskID];
        let parentData2 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.FirePageID];
        let precent = parentData2.policyType == "T-001" ? 1 : 0.75;
        let premiumTotal = 0;
        for (let element of parentData1) {
            premiumTotal += this.globalFun.calculateDecimal(element.premium);
        }
        // parentData2.forEach(element => {
        //   premiumTotal += parseFloat(element.premium)
        // });
        const posDataArray = this.addOnsData;
        let addOnPre = 0;
        for (let addon of this.product.addOns) {
            if (posDataArray[addon.id].checked) {
                addOnPre += this.globalFun.calculateDecimal(posDataArray[addon.id]['premium']);
            }
        }
        let finalPre = (premiumTotal + addOnPre) * precent;
        this.premiumAmt = this.numberPipe.transform(finalPre) + " MMK";
        this.globalFun.paPremiumResult.next(this.premiumAmt);
        return finalPre;
    }
    savePremimun() {
        let premiumAmt = this.caluMotorPremimun();
        let postData = {
            "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            "premiumView": this.premiumAmt,
            "resourceId": this.resourcesId,
            "type": this.prodService.viewType
        };
        return this.pageDataService.updatePremimun(postData);
    }
    savePremimunFire() {
        let premiumAmt = this.caluFirePremimun();
        let postData = {
            "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            "premiumView": this.premiumAmt,
            "resourceId": this.resourcesId,
            "type": this.prodService.viewType
        };
        return this.pageDataService.updatePremimun(postData);
    }
    getParnet(tableName = 'm_detail') {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_7__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = pageOrder.find(page => page.tableName == tableName);
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    rateByValue(addon) {
        let rate = 0;
        if (addon.code == "FRAD010" || addon.code == "FRAD008") {
            let keyId = addon.code + "-" + this.addOnsData[addon.id].option;
            rate = this.fireAddonRate[keyId] || 0;
        }
        else {
            rate = this.fireAddonRate[addon.code] || 0;
        }
        let parentData = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.FireRiskID];
        console.log(parentData);
        let totalRisk = 0;
        if (parentData) {
            parentData.forEach(element => {
                totalRisk += parseFloat(element.riskSi);
            });
        }
        if (rate > 0 && totalRisk > 0) {
            let amt = totalRisk * (rate / 100);
            if (addon.code == "FRAD010") {
                let dis = amt * 0.1;
                amt = amt - dis;
            }
            return amt;
        }
        return 0;
    }
};
AddonPageComponent.ctorParameters = () => [
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_3__.AddOnQuoService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__.ProductDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe },
    { type: _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_6__.PageDataService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService }
];
AddonPageComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
AddonPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-addon-page',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addon_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_addon_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddonPageComponent);



/***/ }),

/***/ 53793:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/add-calculated-building/add-calculated-building.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCalculatedBuildingComponent": () => (/* binding */ AddCalculatedBuildingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_calculated_building_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-calculated-building.component.html */ 41962);
/* harmony import */ var _add_calculated_building_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-calculated-building.component.scss */ 1957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);






let AddCalculatedBuildingComponent = class AddCalculatedBuildingComponent {
    constructor(modal, cdf) {
        this.modal = modal;
        this.cdf = cdf;
        this.type = "Contents including FFF";
        this.pageType = "Add";
        this.riskId = 1;
        this.isStock = false;
    }
    ngOnInit() {
        this.loadForm(this.data);
        this.setValidator();
    }
    create() {
        this.modal.dismiss({ data: this.calculatedbuildingForm.value, type: "save" });
    }
    loadForm(oldData) {
        this.calculatedbuildingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            firePolicyRiskId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.firePolicyRiskId : this.riskId),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.id : ""),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.itemDescription || oldData.description : ""),
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.itemName : ""),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.quantity : ""),
            totalValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.totalValue : ""),
            updatedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.updatedBy : ""),
            valuePerQuantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.valuePerQuantity : ""),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.month : ""),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.remark : ""),
            stockValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.stockValue : ""),
            agreedSi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.agreedSi : ""),
        });
    }
    setValidator() {
        if (this.type == "Contents including FFF" || this.type == "Plant and Machinery") {
            this.calculatedbuildingForm.controls['itemDescription'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['itemDescription'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['itemName'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['itemName'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['quantity'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['quantity'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['valuePerQuantity'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['valuePerQuantity'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['totalValue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['totalValue'].updateValueAndValidity();
        }
        if (this.type == "Stock") {
            this.calculatedbuildingForm.controls['itemDescription'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['itemDescription'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['stockValue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['stockValue'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['month'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['month'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['remark'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['remark'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['agreedSi'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['agreedSi'].updateValueAndValidity();
        }
    }
    calculateTotalValue() {
        this.cdf.detectChanges();
        let quantity = this.calculatedbuildingForm.value.quantity;
        let value = this.calculatedbuildingForm.value.valuePerQuantity;
        console.log("quantity,value", quantity, value);
        if (quantity && value)
            this.calculatedbuildingForm.controls.totalValue.setValue(quantity * value);
    }
    dismissModal() {
        this.modal.dismiss();
    }
    isControlValid(controlName) {
        const control = this.calculatedbuildingForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.calculatedbuildingForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.calculatedbuildingForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.calculatedbuildingForm.controls[controlName];
        return control.dirty || control.touched;
    }
};
AddCalculatedBuildingComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef }
];
AddCalculatedBuildingComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    pageType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    isStock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
AddCalculatedBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-calculated-building',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_calculated_building_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_calculated_building_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCalculatedBuildingComponent);



/***/ }),

/***/ 8099:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/calculated-building.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatedBuildingComponent": () => (/* binding */ CalculatedBuildingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calculated_building_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calculated-building.component.html */ 6347);
/* harmony import */ var _calculated_building_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculated-building.component.scss */ 25631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth */ 67198);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fire-risk/models&services/fire-risk.service */ 66977);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-pages.data */ 6920);
/* harmony import */ var _add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-calculated-building/add-calculated-building.component */ 53793);
/* harmony import */ var _services_calculated_building_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/calculated-building-service */ 65332);











let CalculatedBuildingComponent = class CalculatedBuildingComponent {
    constructor(FireContentService, FirePLantService, FireStockService, modal, auth, cdf, globalService, riskService) {
        this.FireContentService = FireContentService;
        this.FirePLantService = FirePLantService;
        this.FireStockService = FireStockService;
        this.modal = modal;
        this.auth = auth;
        this.cdf = cdf;
        this.globalService = globalService;
        this.riskService = riskService;
        this.isContents = false;
        this.isPlant = false;
        this.isStock = false;
        this.default = 0;
        this.primary = 'primary';
        this.totalContent = 0;
        this.totalPlant = 0;
        this.totalStock = 0;
        this.tableData = [];
        this.contentsData = [];
        this.plantData = [];
        this.stockData = [];
        this.totalSI = 0;
        this.productDetail = {};
        this.riskId = 1;
        this.totalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    }
    ngOnInit() {
        this.getFireContent();
        this.getFirePlant();
        this.getFireStock();
        this.productDetail = this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_5__.FirePageID] || {};
    }
    actionBtn(event) {
        console.log(event);
        if (event.cmd == "delete") {
            if (event.tbtype == "content") {
                this.deleteFireContent(event.data.id);
            }
            if (event.tbtype == "plant") {
                this.deleteFirePlant(event.data.id);
            }
            if (event.tbtype == "stock") {
                this.deleteFireStock(event.data.id);
            }
        }
        if (event.cmd == "edit") {
            if (event.tbtype == "content") {
                this.add('contents', event.data, "Edit");
            }
            if (event.tbtype == "plant") {
                this.add('plants', event.data, "Edit");
            }
            if (event.tbtype == "stock") {
                this.add('stock', event.data, "Edit");
            }
        }
    }
    add(type, data, pageType) {
        if (type == "contents") {
            let modalRef;
            modalRef = this.modal.open(_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_6__.AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = "Contents including FFF";
            modalRef.componentInstance.pageType = pageType;
            modalRef.componentInstance.riskId = this.riskId;
            modalRef.componentInstance.data = data;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    console.log("RESSSS", res);
                    if (res.type == "save") {
                        let postData = Object.assign(Object.assign({}, res.data), { createdBy: this.auth.currentUserValue.id });
                        console.log("postData", postData);
                        this.FireContentService.save(postData).toPromise().then((res) => {
                            if (res) {
                                console.log("getFireContent-RESSS", res);
                                this.getFireContent();
                                this.contentsData.push(Object.assign(Object.assign({}, postData), { id: res }));
                                this.cdf.detectChanges();
                            }
                        });
                    }
                }
            });
        }
        if (type == "plants") {
            let modalRef;
            modalRef = this.modal.open(_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_6__.AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = "Plant and Machinery";
            modalRef.componentInstance.pageType = pageType;
            modalRef.componentInstance.riskId = this.riskId;
            modalRef.componentInstance.data = data;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    console.log("RESSSS", res);
                    if (res.type == "save") {
                        let postData = Object.assign(Object.assign({}, res.data), { createdBy: this.auth.currentUserValue.id });
                        console.log("postData", postData);
                        this.FirePLantService.save(postData).toPromise().then((res) => {
                            if (res) {
                                console.log("getFirePlant-RESSS", res);
                                this.getFirePlant();
                                this.plantData.push(Object.assign(Object.assign({}, postData), { id: res }));
                                this.cdf.detectChanges();
                            }
                        });
                    }
                }
            });
        }
        if (type == "stock") {
            let modalRef;
            modalRef = this.modal.open(_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_6__.AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = "Stock";
            modalRef.componentInstance.pageType = pageType;
            modalRef.componentInstance.riskId = this.riskId;
            modalRef.componentInstance.data = data;
            modalRef.componentInstance.isStock = true;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    console.log("RESSSS", res);
                    if (res.type == "save") {
                        let postData = Object.assign(Object.assign({}, res.data), { createdBy: this.auth.currentUserValue.id, description: res.data.itemDescription });
                        console.log("postData", postData);
                        this.FireStockService.save(postData).toPromise().then((res) => {
                            if (res) {
                                console.log("getFirePlant-RESSS", res);
                                this.getFireStock();
                                this.stockData.push(Object.assign(Object.assign({}, postData), { id: res }));
                                this.cdf.detectChanges();
                            }
                        });
                    }
                }
            });
        }
    }
    getFireContent() {
        this.riskService.getContent(this.riskId).toPromise().then((res) => {
            console.log("getFireContent-RESSS", res);
            if (res) {
                this.contentsData = res;
                if (this.contentsData.length > 0) {
                    this.isContents = true;
                    this.totalContent = 0;
                    for (let data of this.contentsData) {
                        console.log("TSET", this.totalContent);
                        this.totalContent += parseInt(data.totalValue);
                    }
                }
                this.calculateProposeStock();
                this.cdf.detectChanges();
            }
        });
    }
    getFirePlant() {
        this.riskService.getPlant(this.riskId).toPromise().then((res) => {
            if (res) {
                console.log("getFirePlant-RESSS", res);
                this.plantData = res;
                if (this.plantData.length > 0) {
                    this.isPlant = true;
                    this.totalPlant = 0;
                    for (let data of this.plantData) {
                        this.totalPlant += parseInt(data.totalValue);
                    }
                }
                this.calculateProposeStock();
                this.cdf.detectChanges();
            }
        });
    }
    getFireStock() {
        this.riskService.getStock(this.riskId).toPromise().then((res) => {
            if (res) {
                console.log("getFireStock-RESSS", res);
                this.stockData = res;
                if (this.stockData.length > 0) {
                    this.isStock = true;
                    this.totalStock = 0;
                    for (let data of this.stockData) {
                        this.totalStock += parseInt(data.stockValue);
                    }
                    this.calculateProposeStock();
                }
                this.cdf.detectChanges();
            }
        });
    }
    calculateProposeStock() {
        this.totalSI = (this.totalStock + this.totalContent + this.totalPlant);
        this.totalEvent.next(this.totalSI);
    }
    deleteFireContent(id) {
        this.FireContentService.delete(id).toPromise().then((res) => {
            if (res) {
                this.getFireContent();
            }
        });
    }
    deleteFirePlant(id) {
        this.FirePLantService.delete(id).toPromise().then((res) => {
            if (res) {
                this.getFirePlant();
            }
        });
    }
    deleteFireStock(id) {
        this.FireStockService.delete(id).toPromise().then((res) => {
            if (res) {
                this.getFireStock();
            }
        });
    }
    toggleChange(type) {
        if (type == 'contents') {
            this.isContents = this.isContents;
            if (!this.isContents && this.contentsData.lenght > 0) {
                for (let data of this.contentsData) {
                    this.deleteFireContent(data.id);
                }
            }
        }
        if (type == 'plants') {
            this.isPlant = this.isPlant;
            if (!this.isPlant && this.plantData.lenght > 0) {
                for (let data of this.plantData) {
                    this.deleteFirePlant(data.id);
                }
            }
        }
        if (type == 'stock') {
            this.isStock = this.isStock;
            if (!this.isStock && this.stockData.lenght > 0) {
                for (let data of this.stockData) {
                    this.deleteFireStock(data.id);
                }
            }
        }
    }
};
CalculatedBuildingComponent.ctorParameters = () => [
    { type: _services_calculated_building_service__WEBPACK_IMPORTED_MODULE_7__.FireContentService },
    { type: _services_calculated_building_service__WEBPACK_IMPORTED_MODULE_7__.FirePLantService },
    { type: _services_calculated_building_service__WEBPACK_IMPORTED_MODULE_7__.FireStockService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal },
    { type: src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_4__.FireRiskService }
];
CalculatedBuildingComponent.propDecorators = {
    default: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    totalEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
CalculatedBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-calculated-building',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calculated_building_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_calculated_building_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalculatedBuildingComponent);



/***/ }),

/***/ 65332:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/services/calculated-building-service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireContentService": () => (/* binding */ FireContentService),
/* harmony export */   "FirePLantService": () => (/* binding */ FirePLantService),
/* harmony export */   "FireStockService": () => (/* binding */ FireStockService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_FIRE_CONTENT = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/content`;
const API_FIRE_PLANT = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/plant-machinery`;
const API_FIRE_STOCK = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/stock`;
// const API_FIRE_STOCK_RISK = `${environment.apiUrl}/fire-policy/risk/`
//{riskId}/stock
let FireContentService = class FireContentService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FIRE_CONTENT);
        this.httpClient = httpClient;
    }
};
FireContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FireContentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FireContentService);

let FirePLantService = class FirePLantService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FIRE_PLANT);
        this.httpClient = httpClient;
    }
};
FirePLantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FirePLantService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FirePLantService);

let FireStockService = class FireStockService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FIRE_STOCK);
        this.httpClient = httpClient;
    }
};
FireStockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FireStockService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FireStockService);



/***/ }),

/***/ 66602:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/static-pages/coverage-page/coverage-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoveragePageComponent": () => (/* binding */ CoveragePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coverage_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coverage-page.component.html */ 80530);
/* harmony import */ var _coverage_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-page.component.scss */ 8844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/is-json */ 47975);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 45570);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static-field.interface */ 11766);










let CoveragePageComponent = class CoveragePageComponent {
    constructor(coverageQuoService, globalFun, cdRef, prodService, loadingService) {
        this.coverageQuoService = coverageQuoService;
        this.globalFun = globalFun;
        this.cdRef = cdRef;
        this.prodService = prodService;
        this.loadingService = loadingService;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.coverage = {
            isSum: false,
            isUnit: false,
            isPremium: false,
        };
        this.coverageData = {};
        this.unsubscribe = [];
        this.parentData = {};
        this.isLoading = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.refID = this.prodService.referenceID;
            if (this.product.code == "PLMO02") {
                this.parentData = this.getParnet();
            }
            if (this.product.coverages && this.product.coverages.length > 0) {
                yield this.loadingService.activate();
                this.coverage = {
                    isSum: this.product.coverages[0].sumInsured,
                    isUnit: this.product.coverages[0].unit,
                    isPremium: this.product.coverages[0].premium,
                };
                let postData = {
                    quotationNo: this.editData.id,
                    coverageIds: this.product.coverages.map(x => { return x.id; })
                };
                let results = yield this.coverageQuoService.getAllById(postData).toPromise();
                if (results.length == 0) {
                    postData.quotationNo = this.refID;
                    results = yield this.coverageQuoService.getAllById(postData).toPromise();
                }
                for (const item of this.product.coverages) {
                    item['show'] = true;
                    if (item.validationFun) {
                        item['show'] = this.globalFun[item.validationFun] ? this.globalFun[item.validationFun](this.parentData) : true;
                    }
                    let response = results.find(x => x.coverageId == item.id);
                    this.coverageData[item.id] = {
                        sum: response ? response.sumInsured || 0 : 0,
                        unit: response ? response.unit || 0 : 0,
                        premium: response ? response.premium || 0 : 0
                    };
                    if (item.sumInsured) {
                        this.getGlobalFun(item.sumInsuredStr, 'coverageData', item.id, 'sum');
                    }
                    if (item.unit) {
                        this.getGlobalFun(item.unitStr, 'coverageData', item.id, 'unit');
                    }
                    if (item.premium) {
                        this.getGlobalFun(item.premiumStr, 'coverageData', item.id, 'premium');
                    }
                    // }
                }
                this.isLoading = false;
                yield this.loadingService.deactivate();
                this.cdRef.detectChanges();
            }
            else {
                this.isLoading = false;
            }
        });
    }
    getGlobalFun(funName, mainObj, mainKey, subKey) {
        if (this.product.code == "PLMO02" && subKey == "premium") {
            if (this.globalFun[funName]) {
                let unsub = this.globalFun[funName](this.parentData).subscribe((res) => {
                    this[mainObj][mainKey][subKey] = res;
                    this.cdRef.detectChanges();
                });
                this.unsubscribe.push(unsub);
            }
            else {
                if (funName)
                    this[mainObj][mainKey][subKey] = funName;
            }
        }
        else {
            if (this.globalFun[funName + "Result"]) {
                let unsub = this.globalFun[funName + "Result"].subscribe((res) => {
                    this[mainObj][mainKey][subKey] = res;
                    this.cdRef.detectChanges();
                });
                this.unsubscribe.push(unsub);
            }
            else {
                if (funName)
                    this[mainObj][mainKey][subKey] = funName;
            }
        }
    }
    nextPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const quoService = this.coverageQuoService;
            const posDataArray = this.coverageData;
            // console.log(this.product.coverages);
            // for await (const iterator of object) {
            // }
            this.globalFun.tempFormData['coverage_1634010995936'] = [];
            for (let cov of this.product.coverages) {
                try {
                    let postData = {
                        coverageId: cov.id,
                        quotationNo: this.resourcesId,
                        sumInsured: ((posDataArray[cov.id].sum || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
                        unit: ((posDataArray[cov.id].unit || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
                        premium: ((posDataArray[cov.id].premium || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
                    };
                    this.globalFun.tempFormData['coverage_1634010995936'].push(postData);
                    let res = yield this.coverageQuoService.save(postData).toPromise().catch(e => e);
                }
                catch (error) {
                    // console.log(error);
                }
            }
            this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.NEXT });
        });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.PREV });
    }
    getParnet() {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = pageOrder.find(page => page.tableName == 'm_detail');
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
};
CoveragePageComponent.ctorParameters = () => [
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_5__.CoverageQuoService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
CoveragePageComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
CoveragePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-coverage-page',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coverage_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coverage_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoveragePageComponent);



/***/ }),

/***/ 18567:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life-griph/education-life-griph.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationLifeGripComponent": () => (/* binding */ EducationLifeGripComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_griph_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./education-life-griph.component.html */ 23858);
/* harmony import */ var _education_life_griph_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-life-griph.component.scss */ 17214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-pages.data */ 6920);








let EducationLifeGripComponent = class EducationLifeGripComponent {
    constructor(alertService, globalFun) {
        this.alertService = alertService;
        this.globalFun = globalFun;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.showDatas = [];
        this.chartOptions = {
            series: [
                {
                    name: "Premium Amount",
                    data: [],
                    color: "#005f99"
                }
            ],
            chart: {
                height: 450,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            title: {
                text: "Basic Benefit Illustration",
                offsetX: 0,
                offsetY: 10,
                floating: false,
                style: {
                    fontSize: "1.1rem",
                    fontFamily: "Roboto"
                }
            },
            xaxis: {
                type: 'category',
                categories: ["0", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years", "13 years", "14 years"],
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 5000000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontSize: "1rem",
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
                enabled: true,
                textAnchor: 'middle',
                offsetX: -10,
                offsetY: -5,
                enabledOnSeries: [0]
            },
            markers: {
                size: [5, 0, 0],
            }
        };
    }
    ngOnInit() {
        // this.parentData = this.getParnet()
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration", "Warning");
        }
        else {
            let dataArr = this.parentData.map((x) => {
                if (x.premiumPaid)
                    return x.premiumPaid > 0 ? x.premiumPaid : null;
                else
                    return null;
            });
            dataArr.unshift(null);
            if (this.parentData.length > 0) {
                if (this.parentData[0].benefitPlan == '002') {
                    this.chartOptions.title.text = "Double Benefit Illustration";
                    this.chartOptions.yaxis.max = 5000000 * 2;
                    this.chartOptions.series[1] = {
                        data: [],
                        name: "Goal"
                    };
                    this.chartOptions.series[2] = {
                        data: [],
                        name: "2X Goal"
                    };
                    this.chartOptions.series[1].data = [5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000];
                    this.chartOptions.series[2].data = [10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000];
                }
            }
            this.chartOptions.series[0].data = dataArr;
            // 0, 636000, 1272000, 1908000, 2544000, 3180000, 3816000, 4452000
        }
    }
    getParnet() {
        return this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_5__.EducationLifeID];
    }
    nextPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_2__.StaticActionType.NEXT });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_2__.StaticActionType.PREV });
    }
};
EducationLifeGripComponent.ctorParameters = () => [
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__.GlobalFunctionService }
];
EducationLifeGripComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["chart",] }],
    parentData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EducationLifeGripComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-education-life-grip',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_griph_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_education_life_griph_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EducationLifeGripComponent);



/***/ }),

/***/ 17268:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/education-life.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationLifeComponent": () => (/* binding */ EducationLifeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./education-life.component.html */ 10067);
/* harmony import */ var _education_life_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-life.component.scss */ 92063);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 72407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 49566);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/is-json */ 47975);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/auth */ 67198);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-pages.data */ 6920);
/* harmony import */ var _models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/education-life-rate.service */ 27673);
/* harmony import */ var _models_services_education_life_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models&services/education-life.service */ 65937);

















let EducationLifeComponent = class EducationLifeComponent {
    constructor(globalFun, alertService, prodService, eduPreService, eduSurrService, eduPayment, cdf, auth, numberPipe) {
        this.globalFun = globalFun;
        this.alertService = alertService;
        this.prodService = prodService;
        this.eduPreService = eduPreService;
        this.eduSurrService = eduSurrService;
        this.eduPayment = eduPayment;
        this.cdf = cdf;
        this.auth = auth;
        this.numberPipe = numberPipe;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.premimuRate = {
            "9opt": 5,
            "11opt": 7,
            "14opt": 10,
        };
        this.frequency = {
            monthly: 1,
            quarterly: 4,
            semi_annually: 6,
            annually: 12,
        };
        this.lists = [];
        this.premiumRate = [];
        this.surrendRate = [];
        this.showDatas = [];
    }
    ngOnInit() {
        this.parentData = this.getParnet();
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration", "Warning");
        }
        else {
            this.getRateValue().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((res) => {
                if (!res[0] || !res[1])
                    throw res;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)({ premium: res[0], surrend: res[1] });
            })).toPromise().then((res) => {
                if (res) {
                    this.premiumRate = res.premium;
                    this.surrendRate = res.surrend;
                    this.createListData();
                }
            }).catch(e => {
                console.log(e);
            });
            // rate age benifitPlan policyTerm year
            // this.parentData['sum_insured'] this.parentData['sum_insured']
            // paPolicyValidationResult
        }
    }
    createListData() {
        this.getcalculateData();
        this.showDatas = [];
        // console.log(this.premimuRate[policyTermValue + "opt"]);
        let doub = this.plan == "001" ? 1 : 2;
        this.lists.forEach((x, i) => {
            let objData = {
                resourceId: this.resourcesId,
                endOfPolicyYear: x,
                age: this.currentAge + i,
                benefitPlan: this.plan,
                premiumPaid: this.premimuRateNum >= x ? this.calculatePre(this.currentAge + i, x) : 0,
                deathBenefit: this.sumInsured * doub,
                surrenderValue: this.calculateSur(x),
                maturityBenefit: this.calculateSur(x) * 0.9
            };
            // {
            //   "age": 0,
            //   "benefitPlan": "string",
            //   "deathBenefit": 0,
            //   "id": 0,
            //   "maturityBenefit": 0,
            //   "premiumPaid": 0,
            //   "resourceId": "string",
            //   "surrenderValue": 0
            // }
            this.showDatas.push(objData);
            if (i + 1 == this.lists.length) {
                this.cdf.detectChanges();
            }
        });
    }
    getcalculateData() {
        let policyTerm = this.globalFun.paPolicyValidationResult.value;
        let policyTermValue = policyTerm.validationValue;
        this.premimuRateNum = this.premimuRate[policyTermValue + "opt"];
        this.policyTermCode = this.parentData['policy_term'];
        this.sumInsured = this.parentData['sum_insured'];
        this.plan = this.parentData['insured_plan'];
        let dob = this.parentData['date_of_birth'];
        this.currentAge = Math.ceil(moment__WEBPACK_IMPORTED_MODULE_2__().diff(dob, 'years', true));
        let paymentFrequency = this.parentData['payment_frequency'];
        this.frequencyValue = this.frequency[paymentFrequency];
        this.lists = Array.from({ length: policyTermValue }, (_, i) => i + 1);
        return true;
    }
    getParnet() {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_4__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = pageOrder.find(page => page.tableName == 'el_detail');
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    calculatePre(age, year) {
        // console.log();
        let tempRate = 15.5;
        let rate = this.premiumRate.find(x => x.age == age);
        if (rate) {
            tempRate = rate.rate;
        }
        // this.frequencyValue
        let monthly = ((tempRate / 1000) * this.sumInsured);
        if (year == 1) {
            console.log(this.frequencyValue);
            let tempPre = (this.globalFun.calculateDecimal(monthly * this.frequencyValue) + 1500);
            this.premiumAmt = this.numberPipe.transform(tempPre) + " MMK / " + this.parentData['payment_frequency'];
            this.globalFun.paPremiumResult.next(this.premiumAmt);
        }
        return this.globalFun.calculateDecimal(monthly * 12) * year;
    }
    calculateSur(year) {
        let tempRate = 10;
        let rate = this.surrendRate.find(x => x.year == year);
        if (rate) {
            tempRate = rate.rate;
            let surrend = (tempRate / 100) * this.sumInsured;
            return surrend;
        }
        return 0;
    }
    getRateValue() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.getPRate(), this.getSurRate()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((res) => {
            return res;
        }));
    }
    getPRate() {
        return this.eduPreService.getMany(this.parentData['insured_plan'], this.parentData['policy_term']);
    }
    getSurRate() {
        return this.eduSurrService.getMany(this.parentData['policy_term']);
    }
    nextPage() {
        if (this.showDatas.length > 0) {
            this.eduPayment.deleteMany(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)((res) => {
                let postData = {
                    "request": this.showDatas,
                    "resourceDataDTO": {
                        "agentId": this.auth.currentUserValue.id || 1,
                        "customerId": this.prodService.creatingCustomer.customerId || 1,
                        "policyNumber": null,
                        "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                        "premiumView": this.premiumAmt,
                        "productId": this.product.id,
                        "quotationId": this.prodService.referenceID,
                        "type": this.prodService.type
                    },
                    "resourceId": this.resourcesId
                };
                return this.eduPayment.saveMany(postData);
            })).toPromise().then((res) => {
                if (res) {
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.EducationLifeID] = this.showDatas;
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT });
                }
            });
        }
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.PREV });
    }
};
EducationLifeComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_10__.EduPremRateService },
    { type: _models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_10__.EduSurrRateService },
    { type: _models_services_education_life_service__WEBPACK_IMPORTED_MODULE_11__.EduPaymentService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe }
];
EducationLifeComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output }]
};
EducationLifeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-education-life',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_life_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_education_life_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EducationLifeComponent);



/***/ }),

/***/ 27673:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/models&services/education-life-rate.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EduPremRateService": () => (/* binding */ EduPremRateService),
/* harmony export */   "EduSurrRateService": () => (/* binding */ EduSurrRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_EDU_P_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/education-premium-rates`;
let EduPremRateService = class EduPremRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EDU_P_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(plan, term) {
        return this.httpClient.get(API_EDU_P_RATE_URL + "?benefitPlan=" + plan + "&policyTerm=" + term);
    }
};
EduPremRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EduPremRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EduPremRateService);

const API_EDU_S_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/education-surrender-values`;
let EduSurrRateService = class EduSurrRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EDU_S_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(term) {
        return this.httpClient.get(API_EDU_S_RATE_URL + "?policyTerm=" + term);
    }
};
EduSurrRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EduSurrRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EduSurrRateService);



/***/ }),

/***/ 65937:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/models&services/education-life.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EduPaymentService": () => (/* binding */ EduPaymentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_EDU_LIFE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/education/life-benefit`;
let EduPaymentService = class EduPaymentService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EDU_LIFE_URL);
        this.httpClient = httpClient;
    }
    deleteMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.delete(API_EDU_LIFE_URL + "/resource/" + redId);
    }
    getMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.get(API_EDU_LIFE_URL + "/resource/" + redId);
    }
    saveMany(data) {
        return this.httpClient.post(API_EDU_LIFE_URL + "s", data);
    }
};
EduPaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EduPaymentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EduPaymentService);



/***/ }),

/***/ 353:
/*!***********************************************************************!*\
  !*** ./src/app/pages/static-pages/endo-griph/endo-griph.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoGripComponent": () => (/* binding */ EndoGripComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_griph_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./endo-griph.component.html */ 70938);
/* harmony import */ var _endo_griph_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endo-griph.component.scss */ 47469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-pages.data */ 6920);








let EndoGripComponent = class EndoGripComponent {
    constructor(alertService, globalFun) {
        this.alertService = alertService;
        this.globalFun = globalFun;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.showDatas = [];
        this.chartOptions = {
            series: [
                {
                    name: "Premium Amount",
                    data: [],
                    color: "#005f99"
                }
            ],
            chart: {
                height: 450,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            title: {
                text: "Basic Benefit Illustration",
                offsetX: 0,
                offsetY: 10,
                floating: false,
                style: {
                    fontSize: "1.1rem",
                    fontFamily: "Roboto"
                }
            },
            xaxis: {
                type: 'category',
                categories: ["0", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years", "13 years", "14 years"],
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 1000000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontSize: "1rem",
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
                enabled: true,
                textAnchor: 'middle',
                offsetX: -10,
                offsetY: -5,
                enabledOnSeries: [0]
            },
            markers: {
                size: [5, 0, 0],
            }
        };
    }
    ngOnInit() {
        // this.parentData = this.getParnet()
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration", "Warning");
        }
        else {
            let dataArr = this.parentData.map((x) => {
                if (x.premiumPaid)
                    return x.premiumPaid > 0 ? x.premiumPaid : null;
                else
                    return null;
            });
            dataArr.unshift(null);
            // if (this.parentData.length > 0) {
            // if (this.parentData[0].benefitPlan == '002') {
            //   this.chartOptions.title.text = "Double Benefit Illustration"
            //   this.chartOptions.yaxis.max = 5000000 * 2
            //   this.chartOptions.series[1] = {
            //     data: [],
            //     name: "Goal"
            //   }
            //   this.chartOptions.series[2] = {
            //     data: [],
            //     name: "2X Goal"
            //   }
            //   this.chartOptions.series[1].data = [5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000,5000000]
            //   this.chartOptions.series[2].data = [10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000,10000000]
            // }
            // }
            this.chartOptions.series[0].data = dataArr;
            // 0, 636000, 1272000, 1908000, 2544000, 3180000, 3816000, 4452000
        }
    }
    getParnet() {
        return this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_5__.EndowmentID];
    }
    nextPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_2__.StaticActionType.NEXT });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_2__.StaticActionType.PREV });
    }
};
EndoGripComponent.ctorParameters = () => [
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__.GlobalFunctionService }
];
EndoGripComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["chart",] }],
    parentData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EndoGripComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-endo-grip',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_griph_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_endo_griph_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EndoGripComponent);



/***/ }),

/***/ 69155:
/*!***********************************************************!*\
  !*** ./src/app/pages/static-pages/endo/endo.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoComponent": () => (/* binding */ EndoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./endo.component.html */ 3544);
/* harmony import */ var _endo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endo.component.scss */ 64558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 72407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 49566);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/is-json */ 47975);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/auth */ 67198);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-pages.data */ 6920);
/* harmony import */ var _models_services_endo_rate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/endo-rate.service */ 70839);
/* harmony import */ var _models_services_endo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models&services/endo.service */ 61438);

















let EndoComponent = class EndoComponent {
    constructor(globalFun, alertService, prodService, eduPreService, eduSurrService, eduPayment, cdf, auth, numberPipe) {
        this.globalFun = globalFun;
        this.alertService = alertService;
        this.prodService = prodService;
        this.eduPreService = eduPreService;
        this.eduSurrService = eduSurrService;
        this.eduPayment = eduPayment;
        this.cdf = cdf;
        this.auth = auth;
        this.numberPipe = numberPipe;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.premimuRate = {
            "9opt": 5,
            "11opt": 7,
            "14opt": 10,
        };
        this.frequency = {
            monthly: 1,
            quarterly: 4,
            semi_annually: 6,
            annually: 12,
        };
        this.lists = [];
        this.premiumRate = [];
        this.surrendRate = [];
        this.showDatas = [];
    }
    ngOnInit() {
        this.parentData = this.getParnet();
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no endowment product detail data. Please add endowment product detail in prodcut configuration", "Warning");
        }
        else {
            this.getRateValue().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((res) => {
                if (!res[0] || !res[1])
                    throw res;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)({ premium: res[0], surrend: res[1] });
            })).toPromise().then((res) => {
                if (res) {
                    this.premiumRate = res.premium;
                    this.surrendRate = res.surrend;
                    this.createListData();
                }
            }).catch(e => {
                console.log(e);
            });
            // rate age benifitPlan policyTerm year
            // this.parentData['sum_insured'] this.parentData['sum_insured']
            // paPolicyValidationResult
        }
    }
    createListData() {
        this.getcalculateData();
        this.showDatas = [];
        // console.log(this.premimuRate[policyTermValue + "opt"]);
        this.lists.forEach((x, i) => {
            let objData = {
                resourceId: this.resourcesId,
                endOfPolicyYear: x,
                age: this.currentAge + i,
                premiumPaid: this.premimuRateNum >= x ? this.calculatePre(this.currentAge + i, x) : 0,
                benefit: this.sumInsured,
                surrenderValue: this.calculateSur(x),
                policyLoan: this.calculateSur(x) * 0.9
            };
            // {
            //   "age": 0,
            //   "benefitPlan": "string",
            //   "deathBenefit": 0,
            //   "id": 0,
            //   "maturityBenefit": 0,
            //   "premiumPaid": 0,
            //   "resourceId": "string",
            //   "surrenderValue": 0
            // }
            this.showDatas.push(objData);
            if (i + 1 == this.lists.length) {
                this.cdf.detectChanges();
            }
        });
    }
    getcalculateData() {
        let policyTerm = this.globalFun.paPolicyValidationResult.value;
        let policyTermValue = policyTerm.validationValue;
        this.premimuRateNum = this.premimuRate[policyTermValue + "opt"];
        this.policyTermCode = this.parentData['policy_term'];
        this.sumInsured = this.parentData['sum_insured'];
        let dob = this.parentData['date_of_birth'];
        this.currentAge = Math.ceil(moment__WEBPACK_IMPORTED_MODULE_2__().diff(dob, 'years', true));
        let paymentFrequency = this.parentData['payment_frequency'];
        this.frequencyValue = this.frequency[paymentFrequency];
        this.lists = Array.from({ length: policyTermValue }, (_, i) => i + 1);
        return true;
    }
    getParnet() {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_4__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            // console.log("pageUI",pageUI);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = pageOrder.find(page => page.tableName == "endo_detail");
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    calculatePre(age, year) {
        // console.log();
        let tempRate = 15.5;
        let rate = this.premiumRate.find(x => x.age == age);
        if (rate) {
            tempRate = rate.rate;
        }
        // this.frequencyValue
        let monthly = ((tempRate / 1000) * this.sumInsured);
        if (year == 1) {
            console.log(this.frequencyValue);
            let tempPre = (this.globalFun.calculateDecimal(monthly * this.frequencyValue) + 1500);
            this.premiumAmt = this.numberPipe.transform(tempPre) + " MMK / " + this.parentData['payment_frequency'];
            this.globalFun.paPremiumResult.next(this.premiumAmt);
        }
        return this.globalFun.calculateDecimal(monthly * 12) * year;
    }
    calculateSur(year) {
        let tempRate = 10;
        let rate = this.surrendRate.find(x => x.year == year);
        if (rate) {
            tempRate = rate.rate;
            let surrend = (tempRate / 100) * this.sumInsured;
            return surrend;
        }
        return 0;
    }
    getRateValue() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.getPRate(), this.getSurRate()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((res) => {
            return res;
        }));
    }
    getPRate() {
        return this.eduPreService.getMany(this.parentData['policy_term']);
    }
    getSurRate() {
        return this.eduSurrService.getMany(this.parentData['policy_term']);
    }
    nextPage() {
        if (this.showDatas.length > 0) {
            this.eduPayment.deleteMany(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)((res) => {
                let postData = {
                    "request": this.showDatas,
                    "resourceDataDTO": {
                        "agentId": this.auth.currentUserValue.id || 1,
                        "customerId": this.prodService.creatingCustomer.customerId || 1,
                        "policyNumber": null,
                        "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                        "premiumView": this.premiumAmt,
                        "productId": this.product.id,
                        "quotationId": this.prodService.referenceID,
                        "type": this.prodService.type
                    },
                    "resourceId": this.resourcesId
                };
                return this.eduPayment.saveMany(postData);
            })).toPromise().then((res) => {
                if (res) {
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.EndowmentID] = this.showDatas;
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT });
                }
            });
        }
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.PREV });
    }
};
EndoComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _models_services_endo_rate_service__WEBPACK_IMPORTED_MODULE_10__.EndoRateService },
    { type: _models_services_endo_rate_service__WEBPACK_IMPORTED_MODULE_10__.EndoSurrRateService },
    { type: _models_services_endo_service__WEBPACK_IMPORTED_MODULE_11__.EndoService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe }
];
EndoComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output }]
};
EndoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-endo',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_endo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_endo_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EndoComponent);



/***/ }),

/***/ 70839:
/*!******************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo/models&services/endo-rate.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoRateService": () => (/* binding */ EndoRateService),
/* harmony export */   "EndoSurrRateService": () => (/* binding */ EndoSurrRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_ENDO_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/endowment/rate`;
let EndoRateService = class EndoRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ENDO_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(term) {
        return this.httpClient.get(API_ENDO_RATE_URL + "s?policyTerm=" + term);
    }
};
EndoRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EndoRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EndoRateService);

const API_ENDO_S_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/endowment/surrender/rate`;
let EndoSurrRateService = class EndoSurrRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ENDO_S_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(term) {
        return this.httpClient.get(API_ENDO_S_RATE_URL + "?policyTerm=" + term);
    }
};
EndoSurrRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EndoSurrRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EndoSurrRateService);



/***/ }),

/***/ 61438:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo/models&services/endo.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoService": () => (/* binding */ EndoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_EDU_LIFE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/endowment`;
let EndoService = class EndoService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EDU_LIFE_URL);
        this.httpClient = httpClient;
    }
    deleteMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.delete(API_EDU_LIFE_URL + "/resource/" + redId);
    }
    getMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.get(API_EDU_LIFE_URL + "/resource/" + redId);
    }
    saveMany(data) {
        return this.httpClient.post(API_EDU_LIFE_URL + "s", data);
    }
};
EndoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EndoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EndoService);



/***/ }),

/***/ 76834:
/*!*********************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/fire-risk.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireRiskComponent": () => (/* binding */ FireRiskComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_risk_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-risk.component.html */ 84084);
/* harmony import */ var _fire_risk_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-risk.component.scss */ 70400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static-pages.data */ 6920);
/* harmony import */ var _models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models&services/fire-risk.service */ 66977);
/* harmony import */ var _risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./risk-detail/risk-detail.component */ 74893);










let FireRiskComponent = class FireRiskComponent {
    constructor(globalFun, fireRiskService, modalService, cdf) {
        this.globalFun = globalFun;
        this.fireRiskService = fireRiskService;
        this.modalService = modalService;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.premiumAmt = "";
        this.listData = [];
    }
    ngOnInit() {
        this.getRiskList();
    }
    nextPage() {
        this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_4__.FireRiskID] = this.listData;
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_3__.StaticActionType.NEXT });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_3__.StaticActionType.PREV });
    }
    getRiskList() {
        this.fireRiskService.getMany(this.resourcesId).toPromise().then((res) => {
            if (res) {
                this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_4__.FireRiskID] = res;
                this.listData = res || [];
                this.cdf.detectChanges();
            }
        });
    }
    newData(type, detail) {
        let modalRef;
        modalRef = this.modalService.open(_risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_6__.RiskDetailComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.riskId = detail ? detail.riskId : "";
        modalRef.componentInstance.oldData = detail ? detail : {};
        modalRef.componentInstance.resourcesId = this.resourcesId;
        modalRef.componentInstance.premiumAmt = this.premiumAmt;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                console.log("RESSSS", res);
                if (res.type == "save") {
                    // this.surrounding=res.data
                    if (detail) {
                        let index = this.listData.findIndex(x => x.id == detail.id);
                        this.listData[index] = res.data;
                    }
                    else {
                        this.listData.push(res.data);
                    }
                    this.cdf.detectChanges();
                }
            }
        });
    }
    delete(data) {
        this.fireRiskService.delete(data.id).toPromise()
            .then((res) => {
            if (res) {
                let index = this.listData.findIndex(x => x.id == data.id);
                if (index >= 0) {
                    this.listData.splice(index, 1);
                    this.cdf.detectChanges();
                }
            }
        });
    }
};
FireRiskComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_5__.FireRiskService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef }
];
FireRiskComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
FireRiskComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-fire-risk',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_risk_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fire_risk_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FireRiskComponent);



/***/ }),

/***/ 24991:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/models&services/fire-risk-rate.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireRiskRateService": () => (/* binding */ FireRiskRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_RISK_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/pae`;
let FireRiskRateService = class FireRiskRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_RISK_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(data) {
        return this.httpClient.post(API_RISK_RATE_URL, data);
    }
};
FireRiskRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FireRiskRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FireRiskRateService);



/***/ }),

/***/ 74893:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/risk-detail/risk-detail.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskDetailComponent": () => (/* binding */ RiskDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_risk_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./risk-detail.component.html */ 3142);
/* harmony import */ var _risk_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-detail.component.scss */ 14112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth */ 67198);
/* harmony import */ var src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/master-data/master-data.service */ 26697);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/global-fun.service */ 73762);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/valid-all-feild */ 53489);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static-pages.data */ 6920);
/* harmony import */ var _surrounding_building_models_services_premium_rate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../surrounding-building/models&services/premium-rate-service */ 58636);
/* harmony import */ var _surrounding_building_models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../surrounding-building/models&services/surrounding-building.service */ 29673);
/* harmony import */ var _models_services_fire_risk_rate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models&services/fire-risk-rate.service */ 24991);
/* harmony import */ var _models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models&services/fire-risk.service */ 66977);

















let RiskDetailComponent = class RiskDetailComponent {
    constructor(modalService, modal, masterDataService, cdf, fireRiskService, auth, PremiumRateService, prodService, globalService, fireRiskRate, firebuildingService) {
        this.modalService = modalService;
        this.modal = modal;
        this.masterDataService = masterDataService;
        this.cdf = cdf;
        this.fireRiskService = fireRiskService;
        this.auth = auth;
        this.PremiumRateService = PremiumRateService;
        this.prodService = prodService;
        this.globalService = globalService;
        this.fireRiskRate = fireRiskRate;
        this.firebuildingService = firebuildingService;
        this.typeOfBuildingOption = [];
        this.occupationOfBuildingOption = [];
        this.occupationOfBuildingOptions = [];
        this.buildingClassOption = [];
        this.roofOption = [];
        this.wallOption = [];
        this.floorClassOption = [];
        this.premiumRateOption = [];
        this.type = 'create';
        this.resourcesId = "";
        this.oldData = {};
        this.premiumAmt = "";
        this.viewPage = "form";
        this.buildingSi = 0;
        this.riskSi = 0;
        this.otherSi = 0;
        this.fireRate = 0;
        this.productDetail = {};
        this.fireContentSi = 0;
        this.firePlatSi = 0;
        this.fireStockSi = 0;
    }
    ngOnInit() {
        this.loadForm();
        this.getBuildingClass();
        this.getBuildingType();
        this.getBuildingOccupation();
        this.getRoof();
        this.getWall();
        this.getFloor();
        this.productDetail = this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_7__.FirePageID] || {};
        if (this.type == 'create') {
            this.loadForm();
        }
        else {
            this.loadForm(this.oldData);
            if (this.oldData.id) {
                this.getFirePlant();
                this.getFireStock();
                this.getFireContent();
            }
        }
    }
    getBuildingClass() {
        this.masterDataService
            .getDataByType("BUILDING_CLASS").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.buildingClassOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getBuildingType() {
        this.masterDataService
            .getDataByType("BUILDING_TYPE").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.typeOfBuildingOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getRoof() {
        this.masterDataService
            .getDataByType("CONSTRUCTION_ROOF").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.roofOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getWall() {
        this.masterDataService
            .getDataByType("CONSTRUCTION_WALL").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.wallOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getFloor() {
        this.masterDataService
            .getDataByType("CONSTRUCTION_FLOOR").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.floorClassOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getBuildingOccupation() {
        this.masterDataService
            .getDataByType("BUILDING_OCCUPATION").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.occupationOfBuildingOptions = res;
                let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding;
                let typeOfBuilding = this.fireRiskform.value.typeOfBuilding;
                if (occupationOfBuilding && typeOfBuilding) {
                    this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding);
                    let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding);
                    if (index < 0) {
                        this.fireRiskform.controls.occupationOfBuilding.setValue(null);
                    }
                }
                this.cdf.detectChanges();
            }
        });
    }
    getFormatOpt(res) {
        return res.map(x => {
            return { 'code': x.codeId, 'value': x.codeName || x.codeValue, 'parent': x.parentId };
        });
    }
    calcuRate(type) {
        let buildingClass = this.fireRiskform.value.buildingClass;
        let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding;
        let typeOfBuilding = this.fireRiskform.value.typeOfBuilding;
        if (type == 'child') {
            this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding);
            let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding);
            if (index < 0) {
                this.fireRiskform.controls.occupationOfBuilding.setValue(null);
            }
        }
        if (buildingClass && occupationOfBuilding && typeOfBuilding) {
            this.getPremiumRate();
        }
    }
    getPremiumRate() {
        let buildingClass = this.fireRiskform.value.buildingClass;
        let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding;
        let typeOfBuilding = this.fireRiskform.value.typeOfBuilding;
        this.PremiumRateService.getPremiumRate(buildingClass, occupationOfBuilding, typeOfBuilding).toPromise().then((res) => {
            if (res) {
                this.fireRiskform.controls.rate.setValue(res.premiumRate);
            }
        });
    }
    loadForm(oldData) {
        //     Validators.required
        // Validators.required
        // Validators.required
        this.fireRiskform = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
            buildingClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.buildingClass : "", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            buildingDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.buildingDescription : ""),
            // id: new FormControl(oldData ? oldData.id : ""),
            occupationOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.occupationOfBuilding : "", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            typeOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.typeOfBuilding : "", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            constructionOfFloor: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.constructionOfFloor : ""),
            constructionOfRoof: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.constructionOfRoof : ""),
            constructionOfWall: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.constructionOfWall : ""),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.height : ""),
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.length : ""),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.width : ""),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.rate : ""),
            specialDecoration: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.specialDecoration : ""),
            storyOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.storyOfBuilding : ""),
            sumInsure: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.sumInsure : ""),
            totalSquareFoot: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.totalSquareFoot : ""),
            yearOfConstruction: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.yearOfConstruction : ""),
            proposeStockValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.proposeStockValue : 0),
            buildingSi: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.buildingSi : 0),
            riskSi: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(oldData ? oldData.riskSi : 0),
        });
        this.riskSi = oldData ? oldData.riskSi : 0;
        this.buildingSi = oldData ? oldData.buildingSi : 0;
        let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding;
        let typeOfBuilding = this.fireRiskform.value.typeOfBuilding;
        if (occupationOfBuilding && typeOfBuilding && this.occupationOfBuildingOptions.length > 0) {
            this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding);
            let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding);
            if (index < 0) {
                this.fireRiskform.controls.occupationOfBuilding.setValue(null);
            }
        }
    }
    createRisk(closeModal) {
        if (this.fireRiskform.invalid) {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_5__.validateAllFields)(this.fireRiskform);
            return true;
        }
        let data = this.fireRiskform.getRawValue();
        // this.calBuildingSi()
        let postData = Object.assign(Object.assign(Object.assign({}, this.oldData), data), { id: this.oldData.id, buildingSi: this.buildingSi, riskSi: this.riskSi, resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId || 1,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                productId: this.prodService.createingProd.id,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                resourceId: this.resourcesId,
                type: this.prodService.type,
            }, resourceId: this.resourcesId });
        // if (this.type != 'create') {
        if (postData.id) {
            this.fireRiskService.updateNoID(postData)
                .toPromise()
                .then((res) => {
                if (res) {
                    this.oldData = Object.assign({}, postData);
                    this.viewPage = "other";
                    if (closeModal)
                        this.modalService.dismissAll({ data: postData, type: "save" });
                }
            });
        }
        else {
            this.fireRiskService.save(postData)
                .toPromise()
                .then((res) => {
                if (res) {
                    postData.id = res;
                    this.oldData = Object.assign({}, postData);
                    this.viewPage = "other";
                    if (closeModal)
                        this.modal.dismiss({ data: postData, type: "save" });
                }
            });
        }
    }
    viewOther(type) {
        if (this.viewPage != type)
            this.viewPage = type;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    isControlValid(controlName) {
        const control = this.fireRiskform.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.fireRiskform.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.fireRiskform.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.fireRiskform.controls[controlName];
        return control.dirty || control.touched;
    }
    calcuSquare() {
        let width = this.fireRiskform.controls['width'].value;
        let height = this.fireRiskform.controls['height'].value;
        if (width * height) {
            let square = width * height;
            this.fireRiskform.controls['totalSquareFoot'].setValue(square);
        }
    }
    calBuildingSi() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.buildingSi = 0;
            let pae = this.oldData.sumInsure / this.oldData.totalSquareFoot;
            let postData = {
                "classNo": this.oldData.buildingClass,
                "floorCd": this.oldData.constructionOfFloor,
                "roofCd": this.oldData.constructionOfRoof,
                "wallCd": this.oldData.constructionOfWall,
                "year": this.oldData.yearOfConstruction,
            };
            let pae2 = yield this.fireRiskRate.getMany(postData).toPromise();
            let value = pae;
            if (pae2) {
                let rate = pae2.limitedPae;
                value = pae > rate ? rate : pae;
            }
            this.buildingSi = value * this.oldData.totalSquareFoot;
            if (this.otherSi == 0) {
                this.otherSi = this.fireContentSi + this.firePlatSi + this.fireStockSi;
            }
            this.riskSi = this.otherSi + this.buildingSi;
            if (this.oldData) {
                this.oldData.buildingSi = this.buildingSi;
                this.oldData.riskSi = this.riskSi;
            }
        });
    }
    changeTotal(total) {
        this.otherSi = 0;
        this.otherSi = total;
    }
    calPremimun() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            console.log("rateData,rate1,rate2,", this.oldData);
            if (this.oldData.id) {
                if (this.productDetail.policyType == 'T-001') {
                    yield this.calBuildingSi();
                }
                else {
                    this.riskSi = this.oldData.proposeStockValue;
                    this.oldData.riskSi = this.riskSi;
                }
                let rateData = 0;
                let rate1 = this.oldData.rate;
                let response = yield this.firebuildingService.getMaxRate(this.oldData.id).toPromise();
                let rate2 = response ? response.rate : 0;
                if (this.oldData.specialDecoration) {
                    if ((rate1 * 1.3) > rate2) {
                        rateData = rate1 * 1.3;
                    }
                    else {
                        rateData = ((rate1 * 1.3) + rate2) / 2;
                    }
                }
                else {
                    if (rate1 > rate2) {
                        rateData = rate1;
                    }
                    else {
                        rateData = (rate1 + rate2) / 2;
                    }
                }
                this.oldData.premium = this.globalService.calculateDecimal(this.oldData.riskSi * (rateData / 100));
                this.createRisk(true);
            }
            else {
                this.modal.dismiss();
            }
        });
    }
    getFireContent() {
        this.fireRiskService.getContent(this.oldData.id).toPromise().then((res) => {
            if (res) {
                this.fireContentSi = 0;
                res.forEach(element => {
                    this.fireContentSi += parseFloat(element.totalValue);
                });
            }
        });
    }
    getFirePlant() {
        this.fireRiskService.getPlant(this.oldData.id).toPromise().then((res) => {
            if (res) {
                this.firePlatSi = 0;
                res.forEach(element => {
                    this.firePlatSi += parseFloat(element.totalValue);
                });
            }
        });
    }
    getFireStock() {
        this.fireRiskService.getStock(this.oldData.id).toPromise().then((res) => {
            if (res) {
                this.fireStockSi = 0;
                res.forEach(element => {
                    this.fireStockSi += parseFloat(element.stockValue);
                });
            }
        });
    }
};
RiskDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbActiveModal },
    { type: src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef },
    { type: _models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_11__.FireRiskService },
    { type: src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _surrounding_building_models_services_premium_rate_service__WEBPACK_IMPORTED_MODULE_8__.PremiumRateService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__.GlobalFunctionService },
    { type: _models_services_fire_risk_rate_service__WEBPACK_IMPORTED_MODULE_10__.FireRiskRateService },
    { type: _surrounding_building_models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_9__.SurroundingBuildingService }
];
RiskDetailComponent.propDecorators = {
    oldData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }]
};
RiskDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-risk-detail',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_risk_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_risk_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RiskDetailComponent);



/***/ }),

/***/ 13405:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-simple-page/fire-simple-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirePageComponent": () => (/* binding */ FirePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_simple_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-simple-page.component.html */ 75487);
/* harmony import */ var _fire_simple_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-simple-page.component.scss */ 1092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/valid-all-feild */ 53489);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/auth */ 67198);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_metronic/core */ 39123);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _models_services_fire_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/fire-product.service */ 75103);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 45570);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static-pages.data */ 6920);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/is-json */ 47975);





















let FirePageComponent = class FirePageComponent {
    constructor(fb, prodService, auth, fireService, globalFun, addOnQuoService, coverageQuoService, alertService, cdf) {
        this.fb = fb;
        this.prodService = prodService;
        this.auth = auth;
        this.fireService = fireService;
        this.globalFun = globalFun;
        this.addOnQuoService = addOnQuoService;
        this.coverageQuoService = coverageQuoService;
        this.alertService = alertService;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.toMinDate = null;
        this.fromMinDate = null;
        this.toMaxDate = null;
        this.fromMaxDate = null;
        this.dobMinDate = null;
        this.dobMaxDate = null;
        this.options = [];
        this.options2 = [];
        this.addOns = {};
        this.options3 = [];
        this.options4 = [];
        this.staticForm = this.fb.group({
            startDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            endDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            policyType: ['T-001', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            policyDuration: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(365)])],
            currency: ['T-001', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
        });
        this.options3 = Array.from({ length: 10 }, (_, i) => i + 1);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.options = this.product.coverages;
            this.options2 = this.product.addOns;
            this.refID = this.prodService.referenceID;
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(5, `days`);
            this.fromMinDate = toDate.format('YYYY-MM-DD');
            // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.toMinDate = toDate.format('YYYY-MM-DD');
            // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            let dobMaxDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(6, `years`);
            this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD');
            // this.dobMaxDate = { year: parseInt(dobMaxDate.format('YYYY')), month: parseInt(dobMaxDate.format('M')), day: parseInt(dobMaxDate.format('D')) };
            let dobMinDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(75, `years`);
            this.dobMinDate = dobMinDate.format('YYYY-MM-DD');
            // this.dobMinDate = { year: parseInt(dobMinDate.format('YYYY')), month: parseInt(dobMinDate.format('M')), day: parseInt(dobMinDate.format('D')) };
            // if (this.prodService.editData || this.refID)
            this.getOldData();
            // this.getAddOn()
            // for (const item of this.product.addOns) {
            //   let response: any = null;
            //   try {
            //     if (this.editData) {
            //       response = await this.addOnQuoService.getOne(item.id, this.editData.id).toPromise()
            //     }
            //   } catch (error) {
            //     response = null
            //   }
            //   this.addOns[item.id + 'opt'] = response ? response.sumInsured || 0 : 0
            // }
        });
    }
    doValid() {
        let value = this.staticForm.controls['startDate'].value;
        let duration = this.staticForm.controls['policyDuration'].value;
        if (value && duration) {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['startDate'].value).add(duration, 'days');
            this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.staticForm.controls['endDate'].setValue(toDate);
        }
    }
    calcuteDay() {
        let startDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['startDate'].value);
        let endDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['endDate'].value);
        let diffDays = startDate.diff(endDate, "days") + 1;
        this.staticForm.controls['policyDuration'].setValue(diffDays);
    }
    get controls() {
        return this.staticForm.controls;
    }
    // helpers for View
    isControlValid(controlName, group) {
        const control = group.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName, group) {
        const control = group.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName, group) {
        const control = group.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName, group) {
        const control = group.controls[controlName];
        return control.dirty || control.touched;
    }
    nextPage() {
        if (this.staticForm.invalid) {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_4__.validateAllFields)(this.staticForm);
            return true;
        }
        else {
            if (this.editId) {
                this.saveData(this.editId);
            }
            else {
                this.saveData();
            }
        }
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.PREV });
    }
    saveData(id) {
        const formValue = this.staticForm.value;
        let postData = {
            id: id || null,
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__(formValue.endDate).format("YYYY-MM-DD"),
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__(formValue.startDate).format("YYYY-MM-DD"),
            policyType: formValue.policyType,
            policyDuration: formValue.policyDuration,
            currency: formValue.currency,
            resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId || 1,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                productId: this.prodService.createingProd.id,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                // status: ,
                type: this.prodService.type
            },
            resourceId: this.resourcesId,
        };
        // console.log(postData);
        if (!id) {
            this.fireService.save(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.resourcesId = res.resourceId;
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_12__.FirePageID] = Object.assign({ id: res.id }, postData);
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
        else {
            this.fireService.updateNoID(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_12__.FirePageID] = Object.assign({ id: res.id }, postData);
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
    }
    // .pipe(mergeMap(resources => {
    //   return resources
    // }))
    getOldData(dataget = false) {
        // let dataget = false
        console.log(this.resourcesId);
        if (this.resourcesId || this.refID) {
            let resId = dataget ? this.refID : (this.resourcesId || this.refID);
            if (!resId)
                return false;
            this.fireService.getOne(resId).toPromise().then((res) => {
                // dataget = true
                if (res) {
                    this.oldData = Object.assign(Object.assign({}, res), { id: null });
                    this.editId = resId == this.resourcesId ? res.id : null;
                    this.reloadOldValueForm();
                }
                else {
                    if (!dataget && resId != this.refID) {
                        this.getOldData(true);
                    }
                }
            });
        }
    }
    reloadOldValueForm() {
        this.staticForm.patchValue({
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.startDate),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.endDate),
            policyType: this.oldData.policyType,
            policyDuration: this.oldData.policyDuration,
            currency: this.oldData.currency,
        });
        this.cdf.detectChanges();
    }
};
FirePageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_8__.ProductDataService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _models_services_fire_product_service__WEBPACK_IMPORTED_MODULE_10__.FireProductService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__.AddOnQuoService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_11__.CoverageQuoService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_13__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef }
];
FirePageComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }]
};
FirePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-fire-simple-page',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_simple_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_6__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_6__.CustomDateParserFormatter },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_20__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_14__.MY_FORMATS },
        ],
        styles: [_fire_simple_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FirePageComponent);



/***/ }),

/***/ 39465:
/*!***********************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/health-quo.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthQuoComponent": () => (/* binding */ HealthQuoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_quo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./health-quo.component.html */ 12936);
/* harmony import */ var _health_quo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-quo.component.scss */ 68636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 49566);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/auth */ 67198);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-pages.data */ 6920);
/* harmony import */ var _models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models&services/health-payment.service */ 93931);
/* harmony import */ var _models_services_health_rate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/health-rate.service */ 83067);















let HealthQuoComponent = class HealthQuoComponent {
    constructor(globalFun, alertService, healthRateService, healthPayService, cdf, auth, prodService, numberPipe) {
        this.globalFun = globalFun;
        this.alertService = alertService;
        this.healthRateService = healthRateService;
        this.healthPayService = healthPayService;
        this.cdf = cdf;
        this.auth = auth;
        this.prodService = prodService;
        this.numberPipe = numberPipe;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.showData = [];
        this.schedule = [];
        this.tempSchedule = [];
        this.totalP = 0;
        this.totalL = 0;
    }
    ngOnInit() {
        this.parentData = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.HealthPageID];
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no health product detail data. Please add health product detail in prodcut configuration", "Warning");
        }
        else {
            this.showData.push({ keyName: this.parentData.basicCoverId, value: this.parentData.sumInsuredMainCover });
            // for (let addon of this.product.addOns) {
            // }
            if (this.parentData.addOns && this.parentData.basicCoverId != "Critical illness") {
                this.product.addOns.forEach(addon => {
                    if (this.parentData.addOns[addon.id + "opt"]) {
                        this.showData.push({ keyName: addon.description, value: this.parentData.addOns[addon.id + "value"] });
                    }
                });
            }
            this.calculateSchedule();
        }
    }
    calculateSchedule() {
        //lump
        // annually
        // if (this.parentData.paymentFrequency)
        this.totalP = 0;
        this.totalL = 0;
        let firstTimeValue = 300;
        let doCount = this.parentData.paymentFrequency == 'lump' ? 1 : 2;
        let age = Math.ceil(moment__WEBPACK_IMPORTED_MODULE_2__().diff(this.parentData.dateOfBirth, 'years', true));
        this.healthRateService.getOne(age, this.parentData.basicCoverId).toPromise().then((res) => {
            if (res) {
                if (this.parentData.paymentFrequency == 'lump') {
                    let pre = res.lumpSum * this.parentData.sumInsuredMainCover;
                    let levy = firstTimeValue * this.parentData.sumInsuredMainCover;
                    this.totalP = this.totalP + pre;
                    this.totalL = levy;
                    this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: levy });
                    firstTimeValue = 0;
                }
                else {
                    let pre = res.semiAnnual * this.parentData.sumInsuredMainCover;
                    let levy = firstTimeValue * this.parentData.sumInsuredMainCover;
                    this.totalP = this.totalP + pre;
                    this.totalP = this.totalP + pre;
                    this.totalL = levy;
                    this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: levy });
                    firstTimeValue = 0;
                    this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: 0 });
                }
                let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL;
                if (this.schedule.length > 0) {
                    if (this.schedule[0].paymentTerm == "lump") {
                        this.tempSchedule = [
                            { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
                        ];
                    }
                    else {
                        let tempTotal = this.totalP / 2;
                        this.tempSchedule = [
                            { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
                            { premium: tempTotal, levy: 0, total: tempTotal },
                        ];
                    }
                }
                this.premiumAmt = this.numberPipe.transform(tempPre) + " MMK / month";
                this.globalFun.paPremiumResult.next(this.premiumAmt);
                if (this.parentData.basicCoverId == "Critical illness") {
                    this.cdf.detectChanges();
                }
                else
                    this.calculateScheduleAddOn(age);
            }
        });
        // Object.keys(this.parentData.addOns).forEach((key) => {
        //   if (key.includes("opt")) {
        //   }
        // })
    }
    calculateScheduleAddOn(age) {
        let i = 0;
        this.product.addOns.forEach(addon => {
            if (this.parentData.addOns[addon.id + "opt"]) {
                let value = this.parentData.addOns[addon.id + "value"];
                i += 1;
                this.healthRateService.getOne(age, addon.description).toPromise().then((res) => {
                    // console.log(res);
                    if (res) {
                        if (this.parentData.paymentFrequency == 'lump') {
                            let pre = res.lumpSum * value;
                            this.totalP = this.totalP + pre;
                            this.schedule.push({ premium: pre, coverage: addon.description, sumInsured: value, levy: 0 });
                        }
                        else {
                            let pre = res.semiAnnual * value;
                            this.totalP = this.totalP + pre;
                            this.totalP = this.totalP + pre;
                            this.schedule.push({ premium: pre, coverage: addon.description, sumInsured: value, levy: 0 });
                            this.schedule.push({ premium: pre, coverage: addon.description, sumInsured: value, levy: 0 });
                        }
                    }
                    if (i == this.product.addOns.length) {
                        let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL;
                        this.premiumAmt = this.numberPipe.transform(tempPre) + " MMK / month";
                        this.globalFun.paPremiumResult.next(this.premiumAmt);
                        this.cdf.detectChanges();
                    }
                }).catch(e => {
                    if (i == this.product.addOns.length)
                        this.cdf.detectChanges();
                });
            }
        });
    }
    nextPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL;
            this.premiumAmt = this.numberPipe.transform(tempPre) + " MMK / month";
            this.globalFun.paPremiumResult.next(this.premiumAmt);
            this.healthPayService.deleteMany(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.mergeMap)((data) => {
                let postData = {
                    "resourceData": {
                        "agentId": this.auth.currentUserValue.id || 1,
                        "customerId": this.prodService.creatingCustomer.customerId || 1,
                        "policyNumber": null,
                        "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                        "premiumView": this.premiumAmt,
                        "productId": this.product.id,
                        "quotationId": this.prodService.referenceID,
                        "type": this.prodService.type
                    },
                    "resourceId": this.resourcesId,
                    "requests": []
                };
                postData.requests = this.schedule.map((x) => {
                    return {
                        "paymentTerm": this.parentData.paymentFrequency,
                        "plan": this.parentData.basicCoverId,
                        "premium": x.premium,
                        "levy": x.levy,
                        "coverage": x.coverage,
                        "sumInsured": x.sumInsured,
                        "resourceId": this.resourcesId,
                        "total": x.levy + x.premium,
                    };
                });
                return this.healthPayService.saveAll(postData);
            })).toPromise().then((res) => {
                if (res) {
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.NEXT });
                }
            });
        });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.PREV });
    }
};
HealthQuoComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _models_services_health_rate_service__WEBPACK_IMPORTED_MODULE_10__.HealthRateService },
    { type: _models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_9__.HealthPaymentService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe }
];
HealthQuoComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
HealthQuoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-health-quo',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_quo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_health_quo_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HealthQuoComponent);



/***/ }),

/***/ 93931:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/models&services/health-payment.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthPaymentService": () => (/* binding */ HealthPaymentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_HEALTH_PAY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/health/payment-schedule`;
let HealthPaymentService = class HealthPaymentService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_HEALTH_PAY_URL);
        this.httpClient = httpClient;
    }
    deleteMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.delete(API_HEALTH_PAY_URL + "/resource/" + redId);
    }
    getMany(redId) {
        // /api/v1/health/payment-schedule/resource/{resourceId}
        return this.httpClient.get(API_HEALTH_PAY_URL + "/resource/" + redId);
    }
    saveAll(postData) {
        return this.httpClient.post(API_HEALTH_PAY_URL + "s", postData);
    }
};
HealthPaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
HealthPaymentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], HealthPaymentService);



/***/ }),

/***/ 83067:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/models&services/health-rate.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthRateService": () => (/* binding */ HealthRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_HEALTH_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/health/coverage-rate`;
let HealthRateService = class HealthRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_HEALTH_RATE_URL);
        this.httpClient = httpClient;
    }
    getOne(age, cover) {
        return this.httpClient.get(API_HEALTH_RATE_URL + "?age=" + age + "&cover=" + cover);
    }
};
HealthRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
HealthRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], HealthRateService);



/***/ }),

/***/ 18125:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page-policy/simple-page-policy.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplePagePolicyComponent": () => (/* binding */ SimplePagePolicyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_simple_page_policy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./simple-page-policy.component.html */ 27923);
/* harmony import */ var _simple_page_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-page-policy.component.scss */ 93682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/auth */ 67198);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_metronic/core */ 39123);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 45570);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _simple_page_models_services_health_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../simple-page/models&services/health-product.service */ 75291);
/* harmony import */ var _health_quo_models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../health-quo/models&services/health-payment.service */ 93931);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static-pages.data */ 6920);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 72407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 49566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/is-json */ 47975);
























let SimplePagePolicyComponent = class SimplePagePolicyComponent {
    constructor(fb, prodService, healthService, alertService, healthPayService, auth, globalFun, coverageQuoService, addOnQuoService, numberPipe, cdf) {
        this.fb = fb;
        this.prodService = prodService;
        this.healthService = healthService;
        this.alertService = alertService;
        this.healthPayService = healthPayService;
        this.auth = auth;
        this.globalFun = globalFun;
        this.coverageQuoService = coverageQuoService;
        this.addOnQuoService = addOnQuoService;
        this.numberPipe = numberPipe;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.toMinDate = null;
        this.fromMinDate = null;
        this.toMaxDate = null;
        this.fromMaxDate = null;
        this.dobMinDate = null;
        this.dobMaxDate = null;
        this.options = [];
        this.options2 = [];
        this.addOns = {};
        this.options3 = [];
        this.options4 = [];
        this.optionArray = [];
        this.tempArray = [];
        this.totalResult = {
            unit: 0,
            premium: 0,
        };
        this.policyTerm = {
            "lump": "Lump Sum",
            "semi_annually": "Semi-Annually"
        };
        this.totalP = 0;
        this.totalL = 0;
        this.staticForm = this.fb.group({
            insuranceStartDate: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            insuranceEndDate: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            dateOfBirth: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            basicCoverId: [{ value: 'Health Insurance', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            paymentFrequency: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            sumInsuredMainCover: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            medicalCardNo: [{ value: null, disabled: true }],
        });
        this.options3 = Array.from({ length: 10 }, (_, i) => i + 1);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.refID = this.prodService.referenceID;
            if (!this.refID) {
                this.alertService.activate("This page cann't to show because there is no health product detail quotation data.", "Warning");
            }
            this.options = this.product.coverages;
            this.options2 = this.product.addOns;
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(5, `days`);
            this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            let dobMaxDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(6, `years`);
            this.dobMaxDate = { year: parseInt(dobMaxDate.format('YYYY')), month: parseInt(dobMaxDate.format('M')), day: parseInt(dobMaxDate.format('D')) };
            let dobMinDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(75, `years`);
            this.dobMinDate = { year: parseInt(dobMinDate.format('YYYY')), month: parseInt(dobMinDate.format('M')), day: parseInt(dobMinDate.format('D')) };
            this.getOldData();
        });
    }
    get controls() {
        return this.staticForm.controls;
    }
    // helpers for View
    isControlValid(controlName, group) {
        const control = group.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName, group) {
        const control = group.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName, group) {
        const control = group.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName, group) {
        const control = group.controls[controlName];
        return control.dirty || control.touched;
    }
    nextPage() {
        if (this.editId) {
            this.saveData(this.editId);
        }
        else {
            this.saveData();
        }
        // this.actionEvent.emit({ type: StaticActionType.NEXT })
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.PREV });
    }
    getOldData() {
        // let dataget = false
        if (this.refID) {
            let resId = this.refID;
            if (!resId)
                return false;
            if (this.editData.id) {
                console.log(this.editData);
                let resId = this.resourcesId;
                this.healthService.getOne(resId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)((res) => {
                    if (!res) {
                        return this.healthService.getOne(this.refID);
                    }
                    else
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(res);
                })).toPromise().then((res) => {
                    if (res) {
                        this.oldData = Object.assign(Object.assign({}, res), { id: null });
                        this.editId = res.resourceId == this.resourcesId ? res.id : null;
                        this.getQuoData(res.resourceId != this.resourcesId);
                        this.getAddOn(true);
                        this.reloadOldValueForm();
                    }
                });
            }
            else {
                this.healthService.getOne(resId).toPromise().then((res) => {
                    if (res) {
                        this.oldData = Object.assign(Object.assign({}, res), { id: null });
                        this.editId = resId == this.resourcesId ? res.id : null;
                        this.getQuoData(true);
                        this.getAddOn(true);
                        this.reloadOldValueForm();
                    }
                });
            }
        }
    }
    saveData(id) {
        const formValue = this.staticForm.getRawValue();
        let coverd = this.product.coverages.find(x => x.description == formValue.basicCoverId);
        if (!coverd) {
            this.alertService.activate("This page cann't to save because there is not match coverage in product detail. Please configuration the product detail", "Warning");
            return false;
        }
        let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL;
        this.premiumAmt = this.numberPipe.transform(tempPre) + " MMK / month";
        this.globalFun.paPremiumResult.next(this.premiumAmt);
        let postData = {
            basicCoverId: formValue.basicCoverId,
            id: id || null,
            insuranceEndDate: formValue.insuranceEndDate,
            insuranceStartDate: formValue.insuranceStartDate,
            medicalCardNo: formValue.medicalCardNo,
            paymentFrequency: formValue.paymentFrequency,
            dateOfBirth: formValue.dateOfBirth,
            resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId || 1,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                productId: this.prodService.createingProd.id,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                // status: ,
                type: this.prodService.type
            },
            resourceId: this.resourcesId,
            sumInsuredMainCover: formValue.sumInsuredMainCover,
        };
        // console.log(postData);
        if (!id) {
            this.healthService.save(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.resourcesId = res.resourceId;
                    this.saveCoverAddon();
                    // this.globalFun.tempFormData[HealthpageID] = 
                    this.saveSchdule().toPromise().then(res => { }).catch(e => e);
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_13__.HealthPageID] = Object.assign(Object.assign({ id: res.id }, postData), { addOns: this.addOns });
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT, data: { res } });
                }
            }).catch((e) => e);
        }
        else {
            this.healthService.updateNoID(postData).toPromise().then((res) => {
                if (res) {
                    // this.globalFun.tempFormData[HealthPageID] = { id: res.id, ...postData }
                    this.editId = res.id;
                    this.saveCoverAddon();
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_13__.HealthPageID] = Object.assign(Object.assign({ id: res.id }, postData), { addOns: this.addOns });
                    //.toPromise().then((result) => result)
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
    }
    getQuoData(isRef = false) {
        let callId = isRef ? this.refID : this.resourcesId;
        this.healthPayService.getMany(callId).toPromise().then((res) => {
            if (res) {
                this.optionArray = res;
                this.totalResult = {
                    unit: 0,
                    premium: 0,
                };
                this.totalP = 0;
                this.totalL = 0;
                this.optionArray.forEach(x => {
                    this.totalP += x.premium;
                    this.totalL += x.levy;
                    this.totalResult.unit += x.sumInsured;
                    this.totalResult.premium += x.premium;
                });
                this.optionArray = this.optionArray.sort((a, b) => (a.coverage > b.coverage ? 1 : -1));
                this.tempArray = this.optionArray.filter((thing, index, self) => index === self.findIndex((t) => (t.coverage === thing.coverage)));
                this.cdf.detectChanges();
            }
        });
    }
    reloadOldValueForm() {
        this.staticForm.patchValue({
            insuranceStartDate: this.oldData.insuranceStartDate,
            insuranceEndDate: this.oldData.insuranceEndDate,
            dateOfBirth: this.oldData.dateOfBirth,
            basicCoverId: this.oldData.basicCoverId,
            paymentFrequency: this.oldData.paymentFrequency,
            sumInsuredMainCover: this.oldData.sumInsuredMainCover,
            medicalCardNo: this.oldData.medicalCardNo,
        });
    }
    saveCoverage() {
        let basicCoverId = this.staticForm.controls.basicCoverId.value;
        let value = this.staticForm.controls.sumInsuredMainCover.value;
        let coverd = this.product.coverages.find(x => x.description == basicCoverId);
        if (coverd) {
            let postData = {
                coverageId: coverd.id,
                quotationNo: this.resourcesId,
                sumInsured: value,
                unit: null,
                premium: null,
            };
            return this.coverageQuoService.deleteAll(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)((x) => {
                // console.log(x, "cov");
                return this.coverageQuoService.save(postData);
            }));
            // .toPromise().then(res => {
            //   if (res) {
            //   }
            // })
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }
    getAddOn(dataget = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (this.resourcesId || this.refID) {
                let callAgain = true;
                let resId = dataget ? this.refID : (this.resourcesId || this.refID);
                if (!resId)
                    return false;
                for (const item of this.product.addOns) {
                    let response = {};
                    try {
                        response = yield this.addOnQuoService.getOne(item.id, resId).toPromise();
                    }
                    catch (error) {
                    }
                    if (response) {
                        callAgain = false;
                        this.addOns[item.id + 'opt'] = response.sumInsured ? true : false;
                        this.addOns[item.id + 'value'] = response.sumInsured;
                    }
                    else {
                        this.addOns[item.id + 'opt'] = false;
                        this.addOns[item.id + 'value'] = null;
                    }
                }
                // if (callAgain && resId != this.refID && !dataget) {
                //   this.getAddOn(true)
                // } else {
                // this.cdf.detectChanges()
                // }
            }
        });
    }
    saveCoverAddon() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveCoverage().toPromise();
            yield this.saveAddOn().toPromise();
            // return forkJoin(this.saveCoverage(), this.saveAddOn())
        });
    }
    saveSchdule() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.forkJoin)(this.optionArray.map((x) => {
            let postData = {
                "paymentTerm": x.paymentTerm,
                "plan": x.plan,
                "premium": x.premium,
                "levy": x.levy,
                "coverage": x.coverage,
                "sumInsured": x.sumInsured,
                "resourceId": this.resourcesId,
                "total": x.total,
                "resourceData": {
                    "agentId": this.auth.currentUserValue.id || 1,
                    "customerId": this.prodService.creatingCustomer.customerId || 1,
                    "policyNumber": null,
                    "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                    "premiumView": this.premiumAmt,
                    "productId": this.product.id,
                    "quotationId": this.prodService.referenceID,
                    "type": this.prodService.type
                },
            };
            return this.healthPayService.save(postData);
        }));
    }
    saveAddOn() {
        return this.addOnQuoService.deleteAll(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mergeMap)((x) => {
            // return this.coverageQuoService.save(postData)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.forkJoin)(this.options2.map(option => {
                if (this.addOns[option.id + 'opt']) {
                    let postData = {
                        addonId: option.id,
                        quotationNo: this.resourcesId,
                        sumInsured: this.addOns[option.id + 'value'],
                        unit: null,
                        premium: null,
                    };
                    return this.addOnQuoService.save(postData);
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
                }
            }));
        }));
    }
};
SimplePagePolicyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _simple_page_models_services_health_product_service__WEBPACK_IMPORTED_MODULE_11__.HealthProductService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_10__.AlertService },
    { type: _health_quo_models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_12__.HealthPaymentService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_9__.CoverageQuoService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_6__.AddOnQuoService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef }
];
SimplePagePolicyComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }]
};
SimplePagePolicyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-simple-page-policy',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_simple_page_policy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.CustomDateParserFormatter },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_14__.MY_FORMATS },
        ],
        styles: [_simple_page_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SimplePagePolicyComponent);



/***/ }),

/***/ 75291:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page/models&services/health-product.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthProductService": () => (/* binding */ HealthProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_ADDON_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/health/product-detail`;
let HealthProductService = class HealthProductService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getOne(quo) {
        return this.httpClient.get(API_ADDON_URL + "/resource/" + quo);
    }
};
HealthProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
HealthProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], HealthProductService);



/***/ }),

/***/ 74005:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page/simple-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplePageComponent": () => (/* binding */ SimplePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_simple_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./simple-page.component.html */ 4508);
/* harmony import */ var _simple_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-page.component.scss */ 61633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 72407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 49566);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/valid-all-feild */ 53489);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/auth */ 67198);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_metronic/core */ 39123);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-field.interface */ 11766);
/* harmony import */ var _models_services_health_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/health-product.service */ 75291);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 45570);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static-pages.data */ 6920);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/is-json */ 47975);























let SimplePageComponent = class SimplePageComponent {
    constructor(fb, prodService, auth, healthService, globalFun, addOnQuoService, coverageQuoService, alertService, cdf) {
        this.fb = fb;
        this.prodService = prodService;
        this.auth = auth;
        this.healthService = healthService;
        this.globalFun = globalFun;
        this.addOnQuoService = addOnQuoService;
        this.coverageQuoService = coverageQuoService;
        this.alertService = alertService;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.toMinDate = null;
        this.fromMinDate = null;
        this.toMaxDate = null;
        this.fromMaxDate = null;
        this.dobMinDate = null;
        this.dobMaxDate = null;
        this.options = [];
        this.options2 = [];
        this.addOns = {};
        this.options3 = [];
        this.options4 = [];
        this.staticForm = this.fb.group({
            insuranceStartDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            insuranceEndDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            dateOfBirth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            basicCoverId: ['Health Insurance', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            paymentFrequency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            sumInsuredMainCover: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            medicalCardNo: [null],
        });
        this.options3 = Array.from({ length: 10 }, (_, i) => i + 1);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.options = this.product.coverages;
            this.options2 = this.product.addOns;
            this.refID = this.prodService.referenceID;
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(5, `days`);
            this.fromMinDate = toDate.format('YYYY-MM-DD');
            // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.toMinDate = toDate.format('YYYY-MM-DD');
            // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            let dobMaxDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(6, `years`);
            this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD');
            // this.dobMaxDate = { year: parseInt(dobMaxDate.format('YYYY')), month: parseInt(dobMaxDate.format('M')), day: parseInt(dobMaxDate.format('D')) };
            let dobMinDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(75, `years`);
            this.dobMinDate = dobMinDate.format('YYYY-MM-DD');
            // this.dobMinDate = { year: parseInt(dobMinDate.format('YYYY')), month: parseInt(dobMinDate.format('M')), day: parseInt(dobMinDate.format('D')) };
            // if (this.prodService.editData || this.refID)
            this.getOldData();
            // this.getAddOn()
            // for (const item of this.product.addOns) {
            //   let response: any = null;
            //   try {
            //     if (this.editData) {
            //       response = await this.addOnQuoService.getOne(item.id, this.editData.id).toPromise()
            //     }
            //   } catch (error) {
            //     response = null
            //   }
            //   this.addOns[item.id + 'opt'] = response ? response.sumInsured || 0 : 0
            // }
        });
    }
    radioChange($event) {
        if ($event.value === 'Health Insurance') {
            let dobMaxDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(6, `years`);
            this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD');
            let dobMinDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(75, `years`);
            this.dobMinDate = dobMinDate.format('YYYY-MM-DD');
        }
        else {
            let dobMaxDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(6, `years`);
            this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD');
            let dobMinDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(60, `years`);
            this.dobMinDate = dobMinDate.format('YYYY-MM-DD');
        }
        this.cdf.detectChanges();
    }
    doValid() {
        let value = this.staticForm.controls['insuranceStartDate'].value;
        if (value) {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['insuranceStartDate'].value).add(1, 'years');
            this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.staticForm.controls['insuranceEndDate'].setValue(toDate.format('YYYY-MM-DD'));
        }
    }
    getUnitOption() {
        let leng = this.controls.sumInsuredMainCover.value;
        if (leng != this.options4.length) {
            this.options4 = Array.from({ length: leng }, (_, i) => i + 1);
            for (let addon of this.options2) {
                this.addOns[addon.id + 'value'] = leng;
            }
        }
    }
    get controls() {
        return this.staticForm.controls;
    }
    // helpers for View
    isControlValid(controlName, group) {
        const control = group.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName, group) {
        const control = group.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName, group) {
        const control = group.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName, group) {
        const control = group.controls[controlName];
        return control.dirty || control.touched;
    }
    nextPage() {
        if (this.staticForm.invalid) {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_4__.validateAllFields)(this.staticForm);
            return true;
        }
        else {
            if (this.editId) {
                this.saveData(this.editId);
            }
            else {
                this.saveData();
            }
        }
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.PREV });
    }
    saveData(id) {
        const formValue = this.staticForm.value;
        let coverd = this.product.coverages.find(x => x.description == formValue.basicCoverId);
        if (!coverd) {
            this.alertService.activate("This page cann't to save because there is not match coverage in product detail. Please configuration the product detail", "Warning");
            return false;
        }
        let postData = {
            basicCoverId: formValue.basicCoverId,
            id: id || null,
            insuranceEndDate: formValue.insuranceEndDate,
            insuranceStartDate: formValue.insuranceStartDate,
            medicalCardNo: formValue.medicalCardNo,
            paymentFrequency: formValue.paymentFrequency,
            dateOfBirth: formValue.dateOfBirth,
            resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId || 1,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                productId: this.prodService.createingProd.id,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                // status: ,
                type: this.prodService.type
            },
            resourceId: this.resourcesId,
            sumInsuredMainCover: formValue.sumInsuredMainCover,
        };
        // console.log(postData);
        if (!id) {
            this.healthService.save(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.resourcesId = res.resourceId;
                    this.saveCoverAddon();
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_12__.HealthPageID] = Object.assign(Object.assign({ id: res.id }, postData), { addOns: this.addOns });
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
        else {
            this.healthService.updateNoID(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.saveCoverAddon();
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_12__.HealthPageID] = Object.assign(Object.assign({ id: res.id }, postData), { addOns: this.addOns });
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
    }
    saveCoverAddon() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveCoverage().toPromise();
            yield this.saveAddOn().toPromise();
            // return forkJoin(this.saveCoverage(), this.saveAddOn())
        });
    }
    // .pipe(mergeMap(resources => {
    //   return resources
    // }))
    getOldData(dataget = false) {
        // let dataget = false
        console.log(this.resourcesId);
        if (this.resourcesId || this.refID) {
            let resId = dataget ? this.refID : (this.resourcesId || this.refID);
            if (!resId)
                return false;
            this.healthService.getOne(resId).toPromise().then((res) => {
                // dataget = true
                if (res) {
                    this.oldData = Object.assign(Object.assign({}, res), { id: null });
                    this.editId = resId == this.resourcesId ? res.id : null;
                    this.getAddOn();
                    this.reloadOldValueForm();
                }
                else {
                    if (!dataget && resId != this.refID) {
                        this.getAddOn(true);
                        this.getOldData(true);
                    }
                }
            });
        }
    }
    reloadOldValueForm() {
        this.staticForm.patchValue({
            insuranceStartDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.insuranceStartDate),
            insuranceEndDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.insuranceEndDate),
            dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.dateOfBirth),
            basicCoverId: this.oldData.basicCoverId,
            paymentFrequency: this.oldData.paymentFrequency,
            sumInsuredMainCover: this.oldData.sumInsuredMainCover,
            medicalCardNo: this.oldData.medicalCardNo,
        });
        this.getUnitOption();
    }
    saveCoverage() {
        let basicCoverId = this.staticForm.controls.basicCoverId.value;
        let value = this.staticForm.controls.sumInsuredMainCover.value;
        let coverd = this.product.coverages.find(x => x.description == basicCoverId);
        if (coverd) {
            let postData = {
                coverageId: coverd.id,
                quotationNo: this.resourcesId,
                sumInsured: value,
                unit: null,
                premium: null,
            };
            return this.coverageQuoService.deleteAll(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)((x) => {
                // console.log(x, "cov");
                return this.coverageQuoService.save(postData);
            }));
            // .toPromise().then(res => {
            //   if (res) {
            //   }
            // })
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }
    getAddOn(dataget = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (this.resourcesId || this.refID) {
                let callAgain = true;
                let resId = dataget ? this.refID : (this.resourcesId || this.refID);
                if (!resId)
                    return false;
                for (const item of this.product.addOns) {
                    let response = {};
                    try {
                        response = yield this.addOnQuoService.getOne(item.id, resId).toPromise();
                    }
                    catch (error) {
                    }
                    if (response) {
                        callAgain = false;
                        this.addOns[item.id + 'opt'] = response.sumInsured ? true : false;
                        this.addOns[item.id + 'value'] = response.sumInsured;
                    }
                    else {
                        this.addOns[item.id + 'opt'] = false;
                        this.addOns[item.id + 'value'] = null;
                    }
                }
                // if (callAgain && resId != this.refID && !dataget) {
                //   this.getAddOn(true)
                // } else {
                this.cdf.detectChanges();
                // }
            }
        });
    }
    saveAddOn() {
        const formValue = this.staticForm.value;
        return this.addOnQuoService.deleteAll(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.mergeMap)((x) => {
            // return this.coverageQuoService.save(postData)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.forkJoin)(this.options2.map(option => {
                if (formValue.basicCoverId == "Health Insurance") {
                    if (this.addOns[option.id + 'opt']) {
                        let postData = {
                            addonId: option.id,
                            quotationNo: this.resourcesId,
                            sumInsured: this.addOns[option.id + 'value'],
                            unit: null,
                            premium: null,
                        };
                        return this.addOnQuoService.save(postData);
                    }
                    else {
                        this.addOns[option.id + 'opt'] = false;
                        this.addOns[option.id + 'value'] = 0;
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
                    }
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
                }
            }));
        }));
    }
};
SimplePageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_8__.ProductDataService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _models_services_health_product_service__WEBPACK_IMPORTED_MODULE_10__.HealthProductService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__.AddOnQuoService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_11__.CoverageQuoService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_13__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef }
];
SimplePageComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }]
};
SimplePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-simple-page',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_simple_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_6__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_6__.CustomDateParserFormatter },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_14__.MY_FORMATS },
        ],
        styles: [_simple_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SimplePageComponent);



/***/ }),

/***/ 11766:
/*!**************************************************************!*\
  !*** ./src/app/pages/static-pages/static-field.interface.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticActionType": () => (/* binding */ StaticActionType)
/* harmony export */ });
var StaticActionType;
(function (StaticActionType) {
    StaticActionType["NEXT"] = "next";
    StaticActionType["PREV"] = "prev";
})(StaticActionType || (StaticActionType = {}));


/***/ }),

/***/ 6920:
/*!*********************************************************!*\
  !*** ./src/app/pages/static-pages/static-pages.data.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATIC_PAGES": () => (/* binding */ STATIC_PAGES),
/* harmony export */   "STATIC_PRINTS": () => (/* binding */ STATIC_PRINTS),
/* harmony export */   "HealthPageID": () => (/* binding */ HealthPageID),
/* harmony export */   "FirePageID": () => (/* binding */ FirePageID),
/* harmony export */   "FireRiskID": () => (/* binding */ FireRiskID),
/* harmony export */   "HealthPagePolicyID": () => (/* binding */ HealthPagePolicyID),
/* harmony export */   "HealthQuoPageID": () => (/* binding */ HealthQuoPageID),
/* harmony export */   "CoveragePageID": () => (/* binding */ CoveragePageID),
/* harmony export */   "AddonpageID": () => (/* binding */ AddonpageID),
/* harmony export */   "EducationLifeID": () => (/* binding */ EducationLifeID),
/* harmony export */   "EducationLifeGRAPID": () => (/* binding */ EducationLifeGRAPID),
/* harmony export */   "EndowmentID": () => (/* binding */ EndowmentID),
/* harmony export */   "EndowmentGRAPID": () => (/* binding */ EndowmentGRAPID),
/* harmony export */   "PaymentFrequency": () => (/* binding */ PaymentFrequency)
/* harmony export */ });
/* harmony import */ var _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/models/product.dto */ 1402);

const STATIC_PAGES = [
    {
        id: 'addon_1634010770155',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "AddOn",
        showLabel: "AddOn",
        pageType: 'form',
        tableName: 'addon',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'coverage_1634010995936',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Coverage",
        showLabel: "Coverage",
        pageType: 'form',
        tableName: 'coverage',
        pageIcon: "fa-clipboard-check",
    },
    {
        id: 'static_1634018514043',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Product Detail",
        showLabel: "Motor Product Detail",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1635747288508',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Product Detail",
        showLabel: "Motor Product Detail (Application)",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1635218894755',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Payment Schedules",
        showLabel: "Payment Schedules",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1635309151504',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Education Life Benefit",
        showLabel: "Education Life Benefit",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1641364737069',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Product Detail",
        showLabel: "Fire Product Detail",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1643116155828',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Risk Detail",
        showLabel: "Fire Risk Detail",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
    {
        id: 'static_1644896661652',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Benefit Illustration",
        showLabel: "Endowment Benefit Illustration",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
];
const STATIC_PRINTS = [
    {
        id: 'static_1635309151504',
        type: _products_models_product_dto__WEBPACK_IMPORTED_MODULE_0__.PageUIType.STATIC,
        pageTitle: "Education Life Declare",
        pageType: 'form',
        tableName: 'static',
        pageIcon: "fa-briefcase"
    },
];
const HealthPageID = "static_1634018514043";
const FirePageID = "static_1641364737069";
const FireRiskID = "static_1643116155828";
const HealthPagePolicyID = "static_1635747288508";
const HealthQuoPageID = "static_1635218894755";
const CoveragePageID = "coverage_1634010995936";
const AddonpageID = "addon_1634010770155";
const EducationLifeID = "static_1635309151504";
const EducationLifeGRAPID = "static_1635392848894";
const EndowmentID = "static_1644896661652";
const EndowmentGRAPID = "static_1644896804675";
var PaymentFrequency;
(function (PaymentFrequency) {
    PaymentFrequency["Monthly"] = "monthly";
    PaymentFrequency["Quatarly"] = "quatarly";
    PaymentFrequency["SemiAnnually"] = "semi_annually";
    PaymentFrequency["Annually"] = "annually";
})(PaymentFrequency || (PaymentFrequency = {}));


/***/ }),

/***/ 79588:
/*!**************************************************************!*\
  !*** ./src/app/pages/static-pages/static-pages.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPageDirective": () => (/* binding */ StaticPageDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addon-page/addon-page.component */ 56156);
/* harmony import */ var _coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-page/coverage-page.component */ 66602);
/* harmony import */ var _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-life/education-life.component */ 17268);
/* harmony import */ var _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endo-griph/endo-griph.component */ 353);
/* harmony import */ var _endo_endo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endo/endo.component */ 69155);
/* harmony import */ var _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fire-risk/fire-risk.component */ 76834);
/* harmony import */ var _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-simple-page/fire-simple-page.component */ 13405);
/* harmony import */ var _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-quo/health-quo.component */ 39465);
/* harmony import */ var _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simple-page-policy/simple-page-policy.component */ 18125);
/* harmony import */ var _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./simple-page/simple-page.component */ 74005);












// import { STATIC_COMPONENT } from "./static-pages.data";
const STATIC_COMPONENT = {
    'addon_1634010770155': _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_0__.AddonPageComponent,
    'coverage_1634010995936': _coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_1__.CoveragePageComponent,
    'static_1634018514043': _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_9__.SimplePageComponent,
    'static_1635218894755': _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_7__.HealthQuoComponent,
    'static_1635309151504': _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_2__.EducationLifeComponent,
    // 'static_1635392848894' : EducationLifeGripComponent,
    'static_1635747288508': _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_8__.SimplePagePolicyComponent,
    'static_1641364737069': _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_6__.FirePageComponent,
    'static_1643116155828': _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_5__.FireRiskComponent,
    'static_1644896661652': _endo_endo_component__WEBPACK_IMPORTED_MODULE_4__.EndoComponent,
    'static_1644896804675': _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_3__.EndoGripComponent,
};
let StaticPageDirective = class StaticPageDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
        this.eventOut = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    }
    ngOnInit() {
        this.reCreate();
    }
    reCreate() {
        this.container.clear();
        const component = this.resolver.resolveComponentFactory(STATIC_COMPONENT[this.compId]);
        this.component = this.container.createComponent(component);
        this.component.instance.product = this.product;
        this.component.instance.editData = this.editData;
        this.component.instance.resourcesId = this.resourcesId;
        this.component.instance.premiumAmt = this.premiumAmt;
        this.component.instance.actionEvent.subscribe((res) => {
            this.eventOut.emit(res);
        });
        // console.log(this.resourcesId);
    }
};
StaticPageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef }
];
StaticPageDirective.propDecorators = {
    compId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    eventOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }]
};
StaticPageDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive)({
        selector: '[staticPage]'
    })
], StaticPageDirective);



/***/ }),

/***/ 47239:
/*!***********************************************************!*\
  !*** ./src/app/pages/static-pages/static-pages.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPagesModule": () => (/* binding */ StaticPagesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coverage-page/coverage-page.component */ 66602);
/* harmony import */ var _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addon-page/addon-page.component */ 56156);
/* harmony import */ var _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page/simple-page.component */ 74005);
/* harmony import */ var _static_pages_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-pages.directive */ 79588);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 63387);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health-quo/health-quo.component */ 39465);
/* harmony import */ var _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education-life/education-life.component */ 17268);
/* harmony import */ var _education_life_griph_education_life_griph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education-life-griph/education-life-griph.component */ 18567);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simple-page-policy/simple-page-policy.component */ 18125);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ 57574);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ 76393);
/* harmony import */ var _surrounding_building_surrounding_building_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./surrounding-building/surrounding-building.component */ 15242);
/* harmony import */ var _surrounding_building_surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./surrounding-building/surrounding-detail/surrounding-detail.component */ 97843);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calculated-building/calculated-building.component */ 8099);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 50174);
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tables/tables.component */ 24752);
/* harmony import */ var _calculated_building_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calculated-building/add-calculated-building/add-calculated-building.component */ 53793);
/* harmony import */ var _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fire-simple-page/fire-simple-page.component */ 13405);
/* harmony import */ var _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fire-risk/fire-risk.component */ 76834);
/* harmony import */ var _fire_risk_risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fire-risk/risk-detail/risk-detail.component */ 74893);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-currency */ 40287);
/* harmony import */ var _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./endo-griph/endo-griph.component */ 353);
/* harmony import */ var _endo_endo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./endo/endo.component */ 69155);

































let StaticPagesModule = class StaticPagesModule {
};
StaticPagesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgModule)({
        declarations: [_coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_0__.CoveragePageComponent, _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_1__.AddonPageComponent, _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_2__.SimplePageComponent, _static_pages_directive__WEBPACK_IMPORTED_MODULE_3__.StaticPageDirective, _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_5__.HealthQuoComponent, _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_6__.EducationLifeComponent, _education_life_griph_education_life_griph_component__WEBPACK_IMPORTED_MODULE_7__.EducationLifeGripComponent, _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_8__.SimplePagePolicyComponent, _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_14__.FirePageComponent, _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_15__.FireRiskComponent, _surrounding_building_surrounding_building_component__WEBPACK_IMPORTED_MODULE_9__.SurroundingBuildingComponent, _surrounding_building_surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_10__.SurroundingDetailComponent, _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_11__.CalculatedBuildingComponent, _tables_tables_component__WEBPACK_IMPORTED_MODULE_12__.TablesComponent, _calculated_building_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_13__.AddCalculatedBuildingComponent, _fire_risk_risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_16__.RiskDetailComponent, _endo_endo_component__WEBPACK_IMPORTED_MODULE_18__.EndoComponent, _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_17__.EndoGripComponent],
        exports: [_coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_0__.CoveragePageComponent, _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_1__.AddonPageComponent, _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_2__.SimplePageComponent, _static_pages_directive__WEBPACK_IMPORTED_MODULE_3__.StaticPageDirective, _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_5__.HealthQuoComponent, _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_6__.EducationLifeComponent, _education_life_griph_education_life_griph_component__WEBPACK_IMPORTED_MODULE_7__.EducationLifeGripComponent, _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_8__.SimplePagePolicyComponent, _surrounding_building_surrounding_building_component__WEBPACK_IMPORTED_MODULE_9__.SurroundingBuildingComponent, _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_14__.FirePageComponent, _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_15__.FireRiskComponent, _surrounding_building_surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_10__.SurroundingDetailComponent, _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_11__.CalculatedBuildingComponent, _fire_risk_risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_16__.RiskDetailComponent, _endo_endo_component__WEBPACK_IMPORTED_MODULE_18__.EndoComponent, _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_17__.EndoGripComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__.CRUDTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModalModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDatepickerModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgSelectModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_27__.NgApexchartsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormFieldModule,
            ngx_currency__WEBPACK_IMPORTED_MODULE_32__.NgxCurrencyModule
        ]
    })
], StaticPagesModule);



/***/ }),

/***/ 58636:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/models&services/premium-rate-service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiumRateService": () => (/* binding */ PremiumRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_FIRE_PREMIUM_RATE = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire/premium-rate`;
let PremiumRateService = class PremiumRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FIRE_PREMIUM_RATE);
        this.httpClient = httpClient;
    }
    getPremiumRate(buildingClass, occupationOfBuilding, typeOfBuilding) {
        return this.httpClient.get(API_FIRE_PREMIUM_RATE + "?classOfBuilding=" + buildingClass + "&occupationOfBuilding=" + occupationOfBuilding + "&typeOfBuilding=" + typeOfBuilding);
    }
};
PremiumRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
PremiumRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PremiumRateService);



/***/ }),

/***/ 29673:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/models&services/surrounding-building.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurroundingBuildingService": () => (/* binding */ SurroundingBuildingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 91691);





const API_SURROUNDING_BUILDING_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/surrounding-building`;
const API_RISK_SURROUNDING_BUILDING_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/risk/`;
let SurroundingBuildingService = class SurroundingBuildingService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_SURROUNDING_BUILDING_URL);
        this.httpClient = httpClient;
    }
    // fire-policy/surrounding-building/max-rate
    getByRiskId(riskId) {
        return this.httpClient.get(API_RISK_SURROUNDING_BUILDING_API + riskId + "/surrounding-building");
    }
    getMaxRate(riskId) {
        return this.httpClient.get(API_SURROUNDING_BUILDING_URL + "/max-rate?riskId=" + riskId);
    }
};
SurroundingBuildingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
SurroundingBuildingService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SurroundingBuildingService);



/***/ }),

/***/ 77268:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/models&services/surrounding-list.const.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SURROUNDING_COL": () => (/* binding */ SURROUNDING_COL),
/* harmony export */   "SurroundingDisplayCol": () => (/* binding */ SurroundingDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const SURROUNDING_COL = [
    {
        title: "Building Description",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "description",
        isDate: true
    },
    {
        title: "Type of building",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "typeOfBuilding"
    },
    {
        title: "Occupation",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "occupation"
    },
    {
        title: "Class",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "class"
    },
    {
        title: "Premiun Rate",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "premiumRate"
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true,
            view: true
        }
    },
];
const SurroundingDisplayCol = [
    "description",
    "typeOfBuilding",
    "occupation",
    "class",
    "premiumRate"
];


/***/ }),

/***/ 15242:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-building.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurroundingBuildingComponent": () => (/* binding */ SurroundingBuildingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_surrounding_building_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./surrounding-building.component.html */ 32318);
/* harmony import */ var _surrounding_building_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surrounding-building.component.scss */ 15105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models&services/surrounding-building.service */ 29673);
/* harmony import */ var _models_services_surrounding_list_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models&services/surrounding-list.const */ 77268);
/* harmony import */ var _surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./surrounding-detail/surrounding-detail.component */ 97843);









let SurroundingBuildingComponent = class SurroundingBuildingComponent {
    constructor(surroundingBuildingService, modalService, cdf) {
        this.surroundingBuildingService = surroundingBuildingService;
        this.modalService = modalService;
        this.cdf = cdf;
        this.riskId = 1;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_models_services_surrounding_list_const__WEBPACK_IMPORTED_MODULE_4__.SURROUNDING_COL));
        this.displayedColumns = JSON.parse(JSON.stringify(_models_services_surrounding_list_const__WEBPACK_IMPORTED_MODULE_4__.SurroundingDisplayCol));
        this.isPopup = false;
        this.surrounding = [];
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.surroundingBuildingService.getByRiskId(this.riskId).toPromise().then((res) => {
            if (res) {
                this.surrounding = res;
                this.cdf.detectChanges();
            }
        });
    }
    add(type, data) {
        let modalRef;
        modalRef = this.modalService.open(_surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_5__.SurroundingDetailComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.riskId = this.riskId;
        modalRef.componentInstance.oldData = data;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                console.log("RESSSS", res);
                if (res.type == "save") {
                    // this.surrounding=res.data
                    this.surrounding.push(res.data);
                    this.cdf.detectChanges();
                }
            }
        });
    }
    onActionView(data, type) {
        console.log("data", data, "type", type);
        if (type == 'delete') {
            this.surroundingBuildingService.delete(data.id).toPromise()
                .then((res) => {
                if (res) {
                    let index = this.surrounding.findIndex(x => x.id == data.id);
                    if (index >= 0) {
                        this.surrounding.splice(index, 1);
                        this.cdf.detectChanges();
                    }
                }
            });
        }
        else {
            this.add(type, data);
        }
    }
};
SurroundingBuildingComponent.ctorParameters = () => [
    { type: _models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_3__.SurroundingBuildingService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef }
];
SurroundingBuildingComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }],
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
SurroundingBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-surrounding-building',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_surrounding_building_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_surrounding_building_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SurroundingBuildingComponent);



/***/ }),

/***/ 97843:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-detail/surrounding-detail.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurroundingDetailComponent": () => (/* binding */ SurroundingDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_surrounding_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./surrounding-detail.component.html */ 18096);
/* harmony import */ var _surrounding_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surrounding-detail.component.scss */ 55412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth */ 67198);
/* harmony import */ var src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/master-data/master-data.service */ 26697);
/* harmony import */ var _models_services_premium_rate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models&services/premium-rate-service */ 58636);
/* harmony import */ var _models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models&services/surrounding-building.service */ 29673);










let SurroundingDetailComponent = class SurroundingDetailComponent {
    constructor(modal, masterDataService, cdf, SurroundingBuildingService, auth, PremiumRateService) {
        this.modal = modal;
        this.masterDataService = masterDataService;
        this.cdf = cdf;
        this.SurroundingBuildingService = SurroundingBuildingService;
        this.auth = auth;
        this.PremiumRateService = PremiumRateService;
        this.typeOfBuildingOption = [];
        this.occupationOfBuildingOption = [];
        this.occupationOfBuildingOptions = [];
        this.buildingClassOption = [];
        this.premiumRateOption = [];
        this.type = 'create';
        this.riskId = '1';
    }
    ngOnInit() {
        this.loadForm();
        this.getBuildingClass();
        this.getBuildingType();
        this.getBuildingOccupation();
        if (this.type == 'create') {
            this.loadForm();
        }
        else {
            this.loadForm(this.oldData);
        }
    }
    getBuildingClass() {
        this.masterDataService
            .getDataByType("BUILDING_CLASS")
            .toPromise()
            .then((res) => {
            console.log(res);
            if (res) {
                this.buildingClassOption = res.map((x) => {
                    return { code: x.codeId, value: x.codeName };
                });
                console.log(this.buildingClassOption);
                this.cdf.detectChanges();
            }
        });
    }
    getBuildingType() {
        this.masterDataService
            .getDataByType("BUILDING_TYPE")
            .toPromise()
            .then((res) => {
            console.log(res);
            if (res) {
                this.typeOfBuildingOption = res.map((x) => {
                    return { code: x.codeId, value: x.codeName };
                });
                console.log(this.typeOfBuildingOption);
                this.cdf.detectChanges();
            }
        });
    }
    getBuildingOccupation() {
        this.masterDataService
            .getDataByType("BUILDING_OCCUPATION")
            .toPromise()
            .then((res) => {
            if (res) {
                this.occupationOfBuildingOptions = res.map((x) => {
                    return { code: x.codeId, value: x.codeName, parent: x.parentId };
                });
                this.cdf.detectChanges();
            }
        });
    }
    getPremiumRate() {
        let buildingClass = this.surroundingdetailform.value.buildingClass;
        let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
        let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
        this.PremiumRateService.getPremiumRate(buildingClass, occupationOfBuilding, typeOfBuilding).toPromise().then((res) => {
            if (res) {
                this.surroundingdetailform.controls.premiumRate.setValue(res.premiumRate);
            }
        });
    }
    loadForm(oldData) {
        this.surroundingdetailform = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            buildingClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.buildingClass : ""),
            buildingDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.buildingDescription : ""),
            distanceToBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.distanceToBuilding : ""),
            firePolicyRiskId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.riskId),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.id : ""),
            occupationOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.occupationOfBuilding : ""),
            premiumRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.premiumRate : ""),
            typeOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.typeOfBuilding : ""),
        });
    }
    createSurrounding() {
        let data = this.surroundingdetailform.getRawValue();
        let postData = Object.assign(Object.assign({}, data), { createdBy: this.auth.currentUserValue.id });
        if (this.type != 'create') {
            this.SurroundingBuildingService.updateNoID(postData)
                .toPromise()
                .then((res) => {
                if (res) {
                    // postData.id = res
                    let data = Object.assign({}, postData);
                    let buildingClass = this.surroundingdetailform.value.buildingClass;
                    let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
                    let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
                    let buildingClassValue = this.buildingClassOption.find(x => x.code == buildingClass).value;
                    let occupationOfBuildingValue = this.occupationOfBuildingOption.find(x => x.code == occupationOfBuilding).value;
                    let typeOfBuildingValue = this.typeOfBuildingOption.find(x => x.code == typeOfBuilding).value;
                    this.modal.dismiss({ data: Object.assign(Object.assign({}, data), { buildingClassValue: buildingClassValue, occupationOfBuildingValue: occupationOfBuildingValue, typeOfBuildingValue: typeOfBuildingValue }), type: "save" });
                }
            });
        }
        else {
            this.SurroundingBuildingService.save(postData)
                .toPromise()
                .then((res) => {
                if (res) {
                    postData.id = res;
                    let data = Object.assign({}, postData);
                    let buildingClass = this.surroundingdetailform.value.buildingClass;
                    let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
                    let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
                    let buildingClassValue = this.buildingClassOption.find(x => x.code == buildingClass).value;
                    let occupationOfBuildingValue = this.occupationOfBuildingOption.find(x => x.code == occupationOfBuilding).value;
                    let typeOfBuildingValue = this.typeOfBuildingOption.find(x => x.code == typeOfBuilding).value;
                    this.modal.dismiss({ data: Object.assign(Object.assign({}, data), { buildingClassValue: buildingClassValue, occupationOfBuildingValue: occupationOfBuildingValue, typeOfBuildingValue: typeOfBuildingValue }), type: "save" });
                }
            });
        }
    }
    changeClass() {
        if (this.surroundingdetailform.value.buildingClass == 'T-001') {
            this.surroundingdetailform.controls['distanceToBuilding'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(25)]);
            this.surroundingdetailform.controls['distanceToBuilding'].updateValueAndValidity();
        }
        if (this.surroundingdetailform.value.buildingClass != 'T-001') {
            this.surroundingdetailform.controls['distanceToBuilding'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(50)]);
            this.surroundingdetailform.controls['distanceToBuilding'].updateValueAndValidity();
        }
        let buildingClass = this.surroundingdetailform.value.buildingClass;
        let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
        let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
        if (buildingClass && occupationOfBuilding && typeOfBuilding) {
            this.getPremiumRate();
        }
    }
    changeType(type) {
        let buildingClass = this.surroundingdetailform.value.buildingClass;
        let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
        let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
        if (type == 'child') {
            this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding);
            let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding);
            if (index < 0) {
                this.surroundingdetailform.controls.occupationOfBuilding.setValue(null);
            }
        }
        if (buildingClass && occupationOfBuilding && typeOfBuilding) {
            this.getPremiumRate();
        }
    }
    changeOccuption() {
        let buildingClass = this.surroundingdetailform.value.buildingClass;
        let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
        let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
        if (buildingClass && occupationOfBuilding && typeOfBuilding) {
            this.getPremiumRate();
        }
    }
    dismissModal() {
        this.modal.dismiss();
    }
    isControlValid(controlName) {
        const control = this.surroundingdetailform.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.surroundingdetailform.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.surroundingdetailform.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.surroundingdetailform.controls[controlName];
        return control.dirty || control.touched;
    }
};
SurroundingDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal },
    { type: src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_5__.SurroundingBuildingService },
    { type: src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _models_services_premium_rate_service__WEBPACK_IMPORTED_MODULE_4__.PremiumRateService }
];
SurroundingDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-surrounding-detail',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_surrounding_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_surrounding_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SurroundingDetailComponent);



/***/ }),

/***/ 24752:
/*!***************************************************************!*\
  !*** ./src/app/pages/static-pages/tables/tables.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesComponent": () => (/* binding */ TablesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tables_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tables.component.html */ 4389);
/* harmony import */ var _tables_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.component.scss */ 22020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let TablesComponent = class TablesComponent {
    constructor() {
        this.contents = false;
        this.plant = false;
        this.stock = false;
        this.tableData = [];
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    onActionView(data, type, tbtype) {
        this.emitter.emit({
            cmd: type,
            data: data,
            tbtype: tbtype
        });
    }
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
};
TablesComponent.ctorParameters = () => [];
TablesComponent.propDecorators = {
    contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    plant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    stock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    tableData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    emitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TablesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tables',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tables_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tables_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TablesComponent);



/***/ }),

/***/ 70771:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/addon-page/addon-page.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<table class=\"table table-bordered\">\n  <thead class=\"tbody-align\">\n    <tr>\n      <th></th>\n      <th style=\"text-align: left;\">\n        Base Coverage\n      </th>\n      <th *ngIf=\"product.code == 'CLFR01'\">\n        Option\n      </th>\n      <th *ngIf=\"addOns.isSum\">\n        Sum Insured\n      </th>\n      <th *ngIf=\"addOns.isUnit\">\n        Unit\n      </th>\n      <th *ngIf=\"addOns.isPremium\">\n        Premium\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"tbody-align\" *ngIf=\"!isLoading\">\n    <ng-container *ngFor=\"let addon of product.addOns;let i = index\">\n      <tr *ngIf=\"addon.show\">\n\n        <ng-container *ngIf=\"addOnsData[addon.id]\">\n          <td>\n            <input type=\"checkbox\" [(ngModel)]=\"addOnsData[addon.id].checked\" (change)=\"changeOption(addon)\">\n          </td>\n        </ng-container>\n        <td style=\"text-align: left;\">{{addon.description}}</td>\n        <!-- <ng-container *ngIf=\"addOnsData[addon.id].checked\"> -->\n        <ng-container *ngIf=\"addOnsData[addon.id]\">\n          <td *ngIf=\"product.code == 'CLFR01'\" style=\"text-align: left;\">\n            <ng-container *ngIf=\"addon.code == 'FRAD010' || addon.code == 'FRAD008' \">\n              <ng-select class=\"ng-custom-select\" [items]=\"fireOptionData[addon.code]\" bindLabel=\"value\"\n                bindValue=\"code\" (change)=\"rechangeOption(addon)\" [(ngModel)]=\"addOnsData[addon.id].option\" [clearable]=\"false\"></ng-select>\n            </ng-container>\n          </td>\n          <td *ngIf=\"addon.sumInsured\">\n            <ng-container *ngIf=\"!addon.sumInsuredStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"!addOnsData[addon.id].checked\"\n                [(ngModel)]=\"addOnsData[addon.id].sum\">\n            </ng-container>\n            <ng-container *ngIf=\"addon.sumInsuredStr\">\n              <!-- {{addOnsData[addon.id].sum}} -->\n              {{addOnsData[addon.id].sum > 0 ? (addOnsData[addon.id].sum | number) : addOnsData[addon.id].sum}}\n            </ng-container>\n          </td>\n          <td *ngIf=\"addon.unit\">\n            <!-- <ng-container *ngIf=\"addon.unitStr\"></ng-container> -->\n            <ng-container *ngIf=\"!addon.unitStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"!addOnsData[addon.id].checked\"\n                [(ngModel)]=\"addOnsData[addon.id].unit\">\n            </ng-container>\n            <ng-container *ngIf=\"addon.unitStr\">\n              {{addOnsData[addon.id].unit}}\n            </ng-container>\n          </td>\n          <td *ngIf=\"addon.premium\">\n            <!-- <ng-container *ngIf=\"addon.premiumStr\"></ng-container> -->\n            <ng-container *ngIf=\"!addon.premiumStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"!addOnsData[addon.id].checked\"\n                [(ngModel)]=\"addOnsData[addon.id].premium\">\n            </ng-container>\n            <ng-container *ngIf=\"addon.premiumStr\">\n              {{addOnsData[addon.id].premium > 0 ? (addOnsData[addon.id].premium | number) :\n              addOnsData[addon.id].premium}}\n            </ng-container>\n          </td>\n          <!-- </ng-container> -->\n        </ng-container>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n  </div>\n</div>");

/***/ }),

/***/ 41962:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/calculated-building/add-calculated-building/add-calculated-building.component.html ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n            {{pageType}} {{type}}\n        </div>\n    </div>\n\n    <form action=\"#\" class=\"form\" [formGroup]=\"calculatedbuildingForm\" (ngSubmit)=\"create()\">\n        <div class=\"overlay overlay-block cursor-default modal-body\">\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Item Description</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"itemDescription\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('itemDescription')\" [class.is-valid]=\"isControlValid('itemDescription')\" formControlName=\"itemDescription\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" *ngIf=\"!isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Item Name</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"itemName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('itemName')\" [class.is-valid]=\"isControlValid('itemName')\" formControlName=\"itemName\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" *ngIf=\"isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Stock Value</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" name=\"stockValue\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('stockValue')\" [class.is-valid]=\"isControlValid('stockValue')\"\n                                formControlName=\"stockValue\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\" *ngIf=\"!isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Quantiy</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" class=\"form-control form-control-sm \" (ngModelChange)=\"calculateTotalValue()\" name=\"quantity\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('quantity')\" [class.is-valid]=\"isControlValid('quantity')\" formControlName=\"quantity\"\n                            />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" *ngIf=\"!isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Total Value</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" name=\"totalValue\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('totalValue')\" [class.is-valid]=\"isControlValid('totalValue')\"\n                                formControlName=\"totalValue\" readonly />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\" *ngIf=\"isStock\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Month</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"month\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('month')\" [class.is-valid]=\"isControlValid('month')\" formControlName=\"month\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Remark</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"remark\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('remark')\" [class.is-valid]=\"isControlValid('remark')\" formControlName=\"remark\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\" *ngIf=\"!isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Value Per Quantity</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" (ngModelChange)=\"calculateTotalValue()\" name=\"valuePerQuantity\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('valuePerQuantity')\"\n                                [class.is-valid]=\"isControlValid('valuePerQuantity')\" formControlName=\"valuePerQuantity\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" *ngIf=\"isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Agreed SI</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" name=\"agreedSi\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('agreedSi')\" [class.is-valid]=\"isControlValid('agreedSi')\"\n                                formControlName=\"agreedSi\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"dismissModal()\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-elevate\" [disabled]=\"calculatedbuildingForm.invalid\">Save</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ 6347:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/calculated-building/calculated-building.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"form-group\">\n    <div class=\"row\" style=\"align-items: center;\">\n        <!-- <div class=\"col-sm-12\">\n            <label class=\"col-sm-12  left-border-image\">Calculated Building Sl <span style=\"margin-left: 20px;\">\n                    {{default}} </span> </label>\n        </div> -->\n\n    </div>\n    <hr *ngIf=\"productDetail.policyType == 'T-001' \">\n    <div class=\"px5 py5\" *ngIf=\"productDetail.policyType == 'T-001' \">\n        <div class=\"row\" style=\"align-items: center;\">\n\n            <div class=\"col-sm-8\">\n                <label class=\"col-sm-6  left-border-image\">Contents including FFF</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isContents\" [color]=\"primary\" class=\"toggle ft-right\" (change)=\"toggleChange('contents')\"></mat-slide-toggle>\n            </div>\n            <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm mx-2 ft-right\" (click)=\"add('contents',null,'Add')\">Add</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"isContents && contentsData\">\n            <app-tables [contents]=\"true\" [tableData]=\"contentsData\" (emitter)=\"actionBtn($event)\"></app-tables>\n            <div class=\"row\" style=\"align-items: center;\">\n\n                <div class=\"col-sm-12\">\n                    <label class=\"col-sm-12 col-form-label tx-right\">Total Sum Insured for Contents including FFF\n                        <span style=\"margin-left: 29px;\">{{totalContent | number}}</span>\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr *ngIf=\"productDetail.policyType == 'T-001'\">\n    <div *ngIf=\"productDetail.policyType == 'T-001'\">\n        <div class=\"row\" style=\"align-items: center;\">\n\n            <div class=\"col-sm-8\">\n                <label class=\"col-sm-6  left-border-image\">Plant and Machinery</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isPlant\" [color]=\"primary\" class=\"toggle ft-right\" (change)=\"toggleChange('plants')\"></mat-slide-toggle>\n            </div>\n            <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm mx-2 ft-right\" (click)=\"add('plants',null,'Add')\">Add</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"isPlant && plantData\">\n            <app-tables [plant]=\"true\" [tableData]=\"plantData\" (emitter)=\"actionBtn($event)\"></app-tables>\n            <div class=\"row\" style=\"align-items: center;\">\n\n                <div class=\"col-sm-12\">\n                    <label class=\"col-sm-12 col-form-label tx-right\">Total Sum Insured for Plants and Machinery\n                        <span style=\"margin-left: 29px;\">{{totalPlant | number}}</span>\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr>\n    <div>\n        <div class=\"row\" style=\"align-items: center;\">\n\n            <div class=\"col-sm-8\">\n                <label class=\"col-sm-6 left-border-image\">Stock</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isStock\" [color]=\"primary\" class=\"toggle ft-right\" (change)=\"toggleChange('stock')\"></mat-slide-toggle>\n            </div>\n            <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm mx-2 ft-right\" (click)=\"add('stock',null,'Add')\">Add</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"isStock && stockData\">\n            <app-tables [stock]=\"true\" [tableData]=\"stockData\" (emitter)=\"actionBtn($event)\"></app-tables>\n            <div class=\"row\" style=\"align-items: center;\">\n\n                <div class=\"col-sm-12\">\n                    <label class=\"col-sm-12 col-form-label tx-right\">Total Sum Insured for Stock\n                        <span style=\"margin-left: 29px;\">{{totalStock | number}}</span>\n                    </label>\n                </div>\n            </div>\n            <hr>\n\n        </div>\n    </div>");

/***/ }),

/***/ 80530:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/coverage-page/coverage-page.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<table class=\"table table-bordered\">\n  <thead class=\"tbody-align\">\n    <tr>\n      <th>\n        Basic Coverage\n      </th>\n      <th *ngIf=\"coverage.isSum\">\n        Sum Insured\n      </th>\n      <th *ngIf=\"coverage.isUnit\">\n        Unit\n      </th>\n      <th *ngIf=\"coverage.isPremium\">\n        Premium\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"tbody-align\">\n    <ng-container *ngFor=\"let coverage of product.coverages;let i = index\">\n      <tr *ngIf=\"coverage.show\">\n        <td>{{coverage.description}}</td>\n        <ng-container *ngIf=\"coverageData[coverage.id]\">\n          <td *ngIf=\"coverage.sumInsured\">\n            <ng-container *ngIf=\"!coverage.sumInsuredStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"coverageData[coverage.id].sum\">\n            </ng-container>\n            <ng-container *ngIf=\"coverage.sumInsuredStr\">\n              {{ coverageData[coverage.id].sum > 0 ? (coverageData[coverage.id].sum | number) :\n                coverageData[coverage.id].sum}}\n            </ng-container>\n          </td>\n          <td *ngIf=\"coverage.unit\">\n            <!-- <ng-container *ngIf=\"coverage.unitStr\"></ng-container> -->\n            <ng-container *ngIf=\"!coverage.unitStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"coverageData[coverage.id].unit\">\n            </ng-container>\n            <ng-container *ngIf=\"coverage.unitStr\">\n              {{coverageData[coverage.id].unit}}\n            </ng-container>\n          </td>\n          <td *ngIf=\"coverage.premium\">\n            <!-- <ng-container *ngIf=\"coverage.premiumStr\"></ng-container> -->\n            <ng-container *ngIf=\"!coverage.premiumStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"coverageData[coverage.id].premium\">\n            </ng-container>\n            <ng-container *ngIf=\"coverage.premiumStr\">\n              <!-- {{coverageData[coverage.id].premium}} -->\n              {{ coverageData[coverage.id].premium > 0 ? (coverageData[coverage.id].premium | number) :\n                coverageData[coverage.id].premium}}\n            </ng-container>\n          </td>\n        </ng-container>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n<hr>\n<div class=\"row\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n  </div>\n</div>");

/***/ }),

/***/ 23858:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/education-life-griph/education-life-griph.component.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [title]=\"chartOptions.title\"\n    [legend]=\"chartOptions.legend\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [markers]=\"chartOptions.markers\"\n  ></apx-chart>\n  <!-- <div class=\"row mt-3\">\n    <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n    </div>\n    <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n    </div>\n  </div> -->");

/***/ }),

/***/ 10067:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/education-life/education-life.component.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>End of Policy Year</th>\n      <th>Age</th>\n      <th>Premium Paid</th>\n      <th>Death/PTD Benefit</th>\n      <th>Surrender Value</th>\n      <th>Maturity Benefit</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"premiumRate.length > 0 && surrendRate.length > 0\">\n    <tr *ngFor=\"let item of showDatas;let i = index\">\n      <td>{{item.endOfPolicyYear}}</td>\n      <td>{{item.age}}</td>\n      <td style=\"text-align: right;\">{{(item.premiumPaid | number) || \"-\"}}</td>\n      <td style=\"text-align: right;\">{{item.deathBenefit | number}}</td>\n      <td style=\"text-align: right;\">{{(item.surrenderValue | number) || \"-\"}}</td>\n      <td style=\"text-align: right;\">{{(item.maturityBenefit | number) || \"-\"}}</td>\n    </tr>\n  </tbody>\n</table>\n<hr class=\"mb-5\">\n<ng-container *ngIf=\"showDatas.length > 0\">\n  <app-education-life-grip [parentData]=\"showDatas\"></app-education-life-grip>\n</ng-container>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n  </div>\n</div>");

/***/ }),

/***/ 70938:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/endo-griph/endo-griph.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [title]=\"chartOptions.title\"\n    [legend]=\"chartOptions.legend\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [markers]=\"chartOptions.markers\"\n  ></apx-chart>\n  <!-- <div class=\"row mt-3\">\n    <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n    </div>\n    <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n    </div>\n  </div> -->");

/***/ }),

/***/ 3544:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/endo/endo.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>End of Policy Year</th>\n      <th>Age</th>\n      <th>Premium Paid</th>\n      <th>Death/PTD Benefit</th>\n      <th>Surrender Value</th>\n      <th>Policy Loan</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"premiumRate.length > 0 && surrendRate.length > 0\">\n    <tr *ngFor=\"let item of showDatas;let i = index\">\n      <td>{{item.endOfPolicyYear}}</td>\n      <td>{{item.age}}</td>\n      <td style=\"text-align: right;\">{{(item.premiumPaid | number) || \"-\"}}</td>\n      <td style=\"text-align: right;\">{{item.benefit | number}}</td>\n      <td style=\"text-align: right;\">{{(item.surrenderValue | number) || \"-\"}}</td>\n      <td style=\"text-align: right;\">{{(item.policyLoan | number) || \"-\"}}</td>\n    </tr>\n  </tbody>\n</table>\n<hr class=\"mb-5\">\n<ng-container *ngIf=\"showDatas.length > 0\">\n  <app-endo-grip [parentData]=\"showDatas\"></app-endo-grip>\n</ng-container>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n  </div>\n</div>");

/***/ }),

/***/ 84084:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/fire-risk/fire-risk.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"newData('add')\">Add New Data</button>\n</div>\n<div class=\"table-responsive angular-bootstrap-table\">\n    <table class=\"table table-head-custom table-vertical-center\">\n        <thead>\n            <tr>\n                <th>Building Description</th>\n                <th>Sum Insured</th>\n                <th>Premium </th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody>\n            <ng-container *ngFor=\"let item of listData\">\n                <tr>\n                    <td>{{item.buildingDescription}}</td>\n                    <td>{{item.riskSi | number}}</td>\n                    <td>{{item.premium | number}}</td>\n                    <td>\n                        <a title=\"Edit\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"newData('edit',item)\">\n                            <span class=\"flaticon-edit\"></span>\n                        </a>\n                        <a title=\"Delete\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"delete(item)\">\n                            <span class=\"flaticon-delete\"></span>\n                        </a>\n                    </td>\n                </tr>\n            </ng-container>\n        </tbody>\n    </table>\n</div>\n<div class=\"row mt-3\">\n    <div class=\"col-sm-6 mx-auto\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n    </div>\n    <div class=\"col-sm-6 mx-auto\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n    </div>\n</div>");

/***/ }),

/***/ 3142:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/fire-risk/risk-detail/risk-detail.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n            Fire Risk\n            <!-- <small style=\"text-decoration: underline;cursor: pointer;\" *ngIf=\"oldData\"\n                (click)=\"viewOther('form')\">(View\n                Other Building)</small> -->\n            <small style=\"text-decoration: underline;cursor: pointer;\" *ngIf=\"viewPage != 'form'\" (click)=\"viewOther('other')\">(View\n                Risk Detail)</small>\n        </div>\n\n    </div>\n    <ng-container *ngIf=\"viewPage == 'form';else OtherBuilding\">\n        <form action=\"#\" class=\"form\" [formGroup]=\"fireRiskform\" (ngSubmit)=\"createRisk()\">\n            <div class=\"overlay overlay-block cursor-default modal-body\">\n\n                <div class=\"row\" style=\"align-items: center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Building Description</label>\n                            <div class=\"col-md-6\">\n                                <textarea type=\"text\" class=\"form-control form-control-sm \" name=\"buildingDescription\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('buildingDescription')\" [class.is-valid]=\"isControlValid('buildingDescription')\" formControlName=\"buildingDescription\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Type of Building</label>\n                            <div class=\"col-md-6\">\n                                <ng-select class=\"ng-custom-select\" (change)=\"calcuRate('child')\" [class.is-invalid]=\"isControlInvalid('typeOfBuilding')\" [class.is-valid]=\"isControlValid('typeOfBuilding')\" [items]=\"typeOfBuildingOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"typeOfBuilding\">\n                                </ng-select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" style=\"align-items: center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Occupation of Building</label>\n                            <div class=\"col-md-6\">\n                                <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('occupationOfBuilding')\" (change)=\"calcuRate()\" [class.is-valid]=\"isControlValid('occupationOfBuilding')\" [items]=\"occupationOfBuildingOption\" bindLabel=\"value\" bindValue=\"code\"\n                                    formControlName=\"occupationOfBuilding\">\n                                </ng-select>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Building Class</label>\n                            <div class=\"col-md-6\">\n                                <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('buildingClass')\" [class.is-valid]=\"isControlValid('buildingClass')\" [items]=\"buildingClassOption\" (change)=\"calcuRate()\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"buildingClass\">\n                                </ng-select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--  -->\n                <div class=\"row\" style=\"align-items: center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Construction of Roof</label>\n                            <div class=\"col-md-6\">\n                                <!-- <input type=\"number\" class=\"form-control form-control-sm \" name=\"constructionOfRoof\"\n                                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('constructionOfRoof')\"\n                                [class.is-valid]=\"isControlValid('constructionOfRoof')\"\n                                formControlName=\"constructionOfRoof\" /> -->\n                                <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('constructionOfRoof')\" [class.is-valid]=\"isControlValid('constructionOfRoof')\" [items]=\"roofOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"constructionOfRoof\">\n                                </ng-select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Construction of Walls</label>\n                            <div class=\"col-md-6\">\n                                <!-- <input type=\"number\" class=\"form-control form-control-sm \" name=\"constructionOfWall\"\n                                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('constructionOfWall')\"\n                                [class.is-valid]=\"isControlValid('constructionOfWall')\"\n                                formControlName=\"constructionOfWall\" /> -->\n                                <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('constructionOfWall')\" [class.is-valid]=\"isControlValid('constructionOfWall')\" [items]=\"wallOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"constructionOfWall\">\n                                </ng-select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--  -->\n                <!--  -->\n                <div class=\"row\" style=\"align-items: center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Construction of Floor</label>\n                            <div class=\"col-md-6\">\n                                <!-- <input type=\"number\" class=\"form-control form-control-sm \" name=\"constructionOfFloor\"\n                                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('constructionOfFloor')\"\n                                [class.is-valid]=\"isControlValid('constructionOfFloor')\"\n                                formControlName=\"constructionOfFloor\" /> -->\n                                <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('constructionOfFloor')\" [class.is-valid]=\"isControlValid('constructionOfFloor')\" [items]=\"floorClassOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"constructionOfFloor\">\n                                </ng-select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">No. of Story of Building</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"number\" class=\"form-control form-control-sm \" name=\"storyOfBuilding\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('storyOfBuilding')\" [class.is-valid]=\"isControlValid('storyOfBuilding')\" formControlName=\"storyOfBuilding\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--  -->\n                <!--  -->\n                <div class=\"row\" style=\"align-items: center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Length in Feet</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"number\" class=\"form-control form-control-sm \" name=\"length\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('length')\" [class.is-valid]=\"isControlValid('length')\" formControlName=\"length\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Height in Feet</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"number\" class=\"form-control form-control-sm \" name=\"height\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('height')\" (change)=\"calcuSquare()\" [class.is-valid]=\"isControlValid('height')\" formControlName=\"height\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--  -->\n                <!--  -->\n                <div class=\"row\" style=\"align-items: center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Width in Feet</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"number\" class=\"form-control form-control-sm \" name=\"width\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('width')\" [class.is-valid]=\"isControlValid('width')\" formControlName=\"width\" (change)=\"calcuSquare()\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Total Square in Feet</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"number\" class=\"form-control form-control-sm \" name=\"totalSquareFoot\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('totalSquareFoot')\" [class.is-valid]=\"isControlValid('totalSquareFoot')\" formControlName=\"totalSquareFoot\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--  -->\n                <!--  -->\n                <div class=\"row\" style=\"align-items: center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Year of Construction</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"number\" class=\"form-control form-control-sm \" name=\"yearOfConstruction\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('yearOfConstruction')\" [class.is-valid]=\"isControlValid('yearOfConstruction')\" formControlName=\"yearOfConstruction\"\n                                />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Special Decoration</label>\n                            <div class=\"col-md-6\">\n                                <!-- <input type=\"number\" class=\"form-control form-control-sm \" name=\"specialDecoration\"\n                                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('specialDecoration')\"\n                                [class.is-valid]=\"isControlValid('specialDecoration')\"\n                                formControlName=\"specialDecoration\" /> -->\n                                <mat-radio-group formControlName=\"specialDecoration\" class=\"col-8\">\n                                    <mat-radio-button class=\"mx-1\" [value]=\"true\">Yes\n                                    </mat-radio-button>\n                                    <mat-radio-button class=\"mx-1\" [value]=\"false\">No\n                                    </mat-radio-button>\n                                </mat-radio-group>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" style=\"align-items: center\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Proposed Sum Insured</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" name=\"sumInsure\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('sumInsure')\" [class.is-valid]=\"isControlValid('sumInsure')\"\n                                    formControlName=\"sumInsure\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label\">Proposed Stock Value</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" name=\"proposeStockValue\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('proposeStockValue')\"\n                                    [class.is-valid]=\"isControlValid('proposeStockValue')\" formControlName=\"proposeStockValue\" />\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-md-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\">Special Decoration</label>\n                        <div class=\"col-md-6\">\n                            <input type=\"number\" class=\"form-control form-control-sm \" name=\"premiumRate\"\n                                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('premiumRate')\"\n                                [class.is-valid]=\"isControlValid('premiumRate')\" formControlName=\"premiumRate\" />\n                        </div>\n                    </div>\n                </div> -->\n                </div>\n                <!--  -->\n\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"calPremimun()\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-primary btn-elevate\">Save</button>\n            </div>\n        </form>\n    </ng-container>\n    <ng-template #OtherBuilding>\n        <div class=\"overlay overlay-block cursor-default modal-body\">\n            <app-surrounding-building [riskId]=\"oldData.id\"></app-surrounding-building>\n            <app-calculated-building [riskId]=\"oldData.id\" [default]=\"buildingSi\" (totalEvent)=\"changeTotal($event)\">\n            </app-calculated-building>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"calPremimun()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"calPremimun()\">Save</button>\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ 75487:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/fire-simple-page/fire-simple-page.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form action=\"\" [formGroup]=\"staticForm\">\n  <!-- Start date -->\n  <div class=\"row\" style=\"align-items: center;\">\n    <div class=\"col-sm-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \">Policy Effective Date</label>\n        <div class=\"col-sm-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"startDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n              [matDatepicker]=\"picker\" readonly (dateChange)=\"doValid()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.startDate\"></app-print-error>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \">-</label>\n        <div class=\"col-sm-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"endDate\" [min]=\"toMinDate\" [max]=\"toMaxDate\"\n              [matDatepicker]=\"picker2\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\n            <app-print-error [control]=\"controls.endDate\"></app-print-error>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End date  -->\n  <!-- Policy Duration -->\n  <div class=\"row\" style=\"align-items: center;\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Policy Duration</label>\n        <div class=\"col-6\">\n          <input type=\"text\" name=\"policyDuration\" formControlName=\"policyDuration\" class=\"form-control form-control-sm\"\n            (change)=\"doValid()\">\n          <app-print-error [control]=\"controls.policyDuration\"></app-print-error>\n        </div>\n        <div class=\"col-2\"></div>\n      </div>\n    </div>\n    <!-- /Policy Duration -->\n    <!-- Policy Type -->\n    <div class=\"col-sm-6\">\n      <section class=\"example-section\">\n        <div class=\"form-group row\">\n          <label class=\"col-4\">Policy Type</label>\n          <mat-radio-group formControlName=\"policyType\" class=\"col-8\">\n            <mat-radio-button class=\"mx-1\" [value]=\"'T-001'\">Normal\n            </mat-radio-button>\n            <mat-radio-button class=\"mx-1\" [value]=\"'T-002'\">Declaration\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </section>\n    </div>\n    <!-- Policy Type -->\n\n  </div>\n\n  <div class=\"row\">\n    <!--  currency -->\n    <div class=\"col-sm-6\">\n      <section class=\"example-section\">\n        <div class=\"form-group row\">\n          <label class=\"col-4\">Currency</label>\n          <mat-radio-group formControlName=\"currency\" class=\"col-8\">\n            <mat-radio-button class=\"mx-1\" [value]=\"'MMK'\">MMK\n            </mat-radio-button>\n            <mat-radio-button class=\"mx-1\" [value]=\"'USD'\">USD\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </section>\n    </div>\n    <!--  currency -->\n\n  </div>\n</form>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n  </div>\n</div>\n\n<!--  \"Health Insurance\"\n\"Critical illness\"\n\"Surgery & Miscarriage\"\n\"Mediacal treatments\" -->");

/***/ }),

/***/ 12936:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/health-quo/health-quo.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>\n        Coverages/Benefit\n      </th>\n      <th>\n        Sum Insured\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of showData\">\n      <td>{{item.keyName}}</td>\n      <td>{{item.value}} Units</td>\n    </tr>\n  </tbody>\n</table>\n<hr>\n<h5 class=\"\">Payment Schedules</h5>\n<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>\n        No. of Installment\n      </th>\n      <th style=\"text-align: right;\">\n        Premium\n      </th>\n      <th style=\"text-align: right;\">\n        Levy\n      </th>\n      <th style=\"text-align: right;\">\n        Total\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"tbody-align\">\n    <tr *ngFor=\"let item of tempSchedule;let i =index\">\n      <td>{{i+1}}</td>\n      <td>{{item.premium | number}}</td>\n      <td>{{item.levy | number}}</td>\n      <td>{{(item.premium + item.levy) | number}}</td>\n    </tr>\n  </tbody>\n  <tfoot class=\"tbody-align\">\n    <tr>\n      <td><b>Total</b></td>\n      <td>{{totalP | number}}</td>\n      <td>{{totalL | number}}</td>\n      <td>{{(totalP+totalL) | number}}</td>\n    </tr>\n  </tfoot>\n</table>\n\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n  </div>\n</div>");

/***/ }),

/***/ 27923:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/simple-page-policy/simple-page-policy.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form action=\"\" [formGroup]=\"staticForm\">\n  <!-- Start date -->\n  <div class=\"row\" style=\"align-items: center;\">\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \">Period of Insurance</label>\n        <div class=\"col-sm-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"insuranceStartDate\" [min]=\"fromMinDate\"\n              [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.insuranceStartDate\"></app-print-error>\n          </div>\n          <!-- <div class=\"input-group\">\n            <input type=\"text\" name=\"policy_date\" class=\"form-control form-control-sm \" autocomplete=\"off\"\n              placeholder=\"dd/mm/yyyy\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"fromMinDate\" [maxDate]=\"fromMaxDate\"\n              formControlName=\"insuranceStartDate\" (click)=\"d.toggle()\" readonly=\"true\" />\n            <div class=\"input-group-append\" (click)=\"d.toggle()\">\n              <span class=\"input-group-text\">\n                <i class=\"text-dark-50 flaticon-calendar\"></i>\n              </span>\n            </div>\n          </div>\n          <app-print-error [control]=\"controls.insuranceStartDate\"></app-print-error> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \">-</label>\n        <div class=\"col-sm-6\">\n          <!-- <div class=\"input-group\">\n            <input type=\"text\" name=\"policy_end_date\" class=\"form-control form-control-sm \" autocomplete=\"off\"\n              placeholder=\"dd/mm/yyyy\" ngbDatepicker #de=\"ngbDatepicker\" [minDate]=\"toMinDate\" [maxDate]=\"toMaxDate\"\n              formControlName=\"insuranceEndDate\" readonly=\"true\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">\n                <i class=\"text-dark-50 flaticon-calendar\"></i>\n              </span>\n            </div>\n          </div> -->\n          <!-- <app-print-error [control]=\"controls.insuranceStartDate\"></app-print-error> -->\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"insuranceEndDate\" [min]=\"toMinDate\"\n              [max]=\"toMaxDate\" [matDatepicker]=\"picker2\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"input-group\">\n        <input type=\"text\" name=\"policy_end_date\" class=\"form-control form-control-sm \" autocomplete=\"off\" placeholder=\"dd/mm/yyyy\"\n          ngbDatepicker #de=\"ngbDatepicker\" (click)=\"de.toggle()\" [minDate]=\"toMinDate\" [maxDate]=\"toMaxDate\"\n          formControlName=\"insuranceEndDate\" readonly=\"true\" />\n        <div class=\"input-group-append\" (click)=\"de.toggle()\">\n          <span class=\"input-group-text\">\n            <i class=\"text-dark-50 flaticon-calendar\"></i>\n          </span>\n        </div>\n      </div>\n      <app-print-error [control]=\"controls.insuranceEndDate\"></app-print-error> -->\n    </div>\n  </div>\n  <!-- End date  -->\n\n  <div class=\"row\" style=\"align-items: center;\">\n    <!-- BC -->\n    <div class=\"col-6\">\n      <section class=\"example-section\">\n        <div class=\"form-group row\">\n          <label class=\"col-4\">Basic Cover</label>\n          <mat-radio-group formControlName=\"basicCoverId\" class=\"col-8\">\n            <!-- *ngFor=\"let item of options\" {{item.premiumStr}} -->\n            <!-- <mat-radio-button class=\"mx-1\" *ngFor=\"let item of options\" [value]=\"item.id\"> {{item.premiumStr}}\n            </mat-radio-button> -->\n            <mat-radio-button class=\"mx-1\" [value]=\"'Health Insurance'\">Health Insurance\n            </mat-radio-button>\n            <mat-radio-button class=\"mx-1\" [value]=\"'Critical illness'\">Critical illness\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </section>\n    </div>\n    <!-- BC -->\n    <!-- DOB -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Date of Birth</label>\n        <div class=\"col-6\">\n          <!-- <div class=\"input-group\">\n            <input type=\"text\" name=\"dateOfBirth\" class=\"form-control form-control-sm \" autocomplete=\"off\"\n              placeholder=\"dd/mm/yyyy\" ngbDatepicker #db=\"ngbDatepicker\" (click)=\"db.toggle()\" [minDate]=\"dobMinDate\"\n              [maxDate]=\"dobMaxDate\" formControlName=\"dateOfBirth\" readonly=\"true\" />\n            <div class=\"input-group-append\" (click)=\"db.toggle()\">\n              <span class=\"input-group-text\">\n                <i class=\"text-dark-50 flaticon-calendar\"></i>\n              </span>\n            </div>\n          </div> -->\n          <!-- <app-print-error [control]=\"controls.dateOfBirth\"></app-print-error> -->\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"dateOfBirth\" [min]=\"dobMinDate\" [max]=\"dobMaxDate\"\n              [matDatepicker]=\"picker3\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n            <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.dateOfBirth\"></app-print-error>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!-- DOB -->\n  </div>\n\n  <div class=\"row\">\n    <!--  Payment Frequency -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Payment Frequency</label>\n        <div class=\"col-6\">\n          <select name=\"payment_frequency\" formControlName=\"paymentFrequency\" class=\"form-control form-control-sm\">\n            <option [value]=\"null\">Please Select Payment Frequency</option>\n            <option value=\"lump\">Lump Sum</option>\n            <option value=\"semi_annually\">Semi-Annually</option>\n          </select>\n          <app-print-error [control]=\"controls.paymentFrequency\"></app-print-error>\n\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n    <!--  Payment Frequency -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Sum Insured of Main Cover</label>\n        <div class=\"col-6\">\n          <select name=\"sumInsuredMainCover\" formControlName=\"sumInsuredMainCover\" class=\"form-control form-control-sm\">\n            <option [value]=\"null\">Please Select Sum Insured</option>\n            <option *ngFor=\"let item of options3\" [value]=\"item\">{{item}} Unit{{item > 1 ? \"s\" : \"\"}}</option>\n          </select>\n          <app-print-error [control]=\"controls.sumInsuredMainCover\"></app-print-error>\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n  </div>\n\n  <div class=\"row\">\n    <!--  Medical Card No -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Medical Card No</label>\n        <div class=\"col-6\">\n          <input type=\"text\" name=\"medicalCardNo\" formControlName=\"medicalCardNo\" class=\"form-control form-control-sm\">\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n  </div>\n  <!-- <hr> value=\"{{item.id}}\">-->\n\n</form>\n<div class=\"row mt-3\">\n  <div class=\"col-12\">\n    <h5 style=\"border-bottom: 1px solid rgba(0, 0, 0, 0.1);padding: 20px 0px;\">Product And Riders</h5>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>\n            Plan\n          </th>\n          <th>\n            Sum Assured\n          </th>\n          <th>\n            Coverage Term\n          </th>\n          <th>\n            Payment Term\n          </th>\n          <th>\n            Premium\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of tempArray\">\n          <td>{{item.plan}}</td>\n          <td>{{item.sumInsured}} Unit{{item.sumInsured > 1 ? \"s\":\"\"}}</td>\n          <td>{{item.coverage}}</td>\n          <td>{{policyTerm[item.paymentTerm] || item.paymentTerm}}</td>\n          <td>{{item.premium | number}} </td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <td><b>Total</b></td>\n          <td>{{totalResult.unit}} Unit{{totalResult.unit > 1 ? \"s\":\"\"}}</td>\n          <td></td>\n          <td></td>\n          <td>{{totalResult.premium | number}}</td>\n        </tr>\n      </tfoot>\n    </table>\n\n  </div>\n</div>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n  </div>\n</div>\n\n<!--  \"Health Insurance\"\n\"Critical illness\"\n\"Surgery & Miscarriage\"\n\"Mediacal treatments\" -->");

/***/ }),

/***/ 4508:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/simple-page/simple-page.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form action=\"\" [formGroup]=\"staticForm\">\n  <!-- Start date -->\n  <div class=\"row\" style=\"align-items: center;\">\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \">Period of Insurance</label>\n        <div class=\"col-sm-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"insuranceStartDate\" [min]=\"fromMinDate\"\n              [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" readonly (dateChange)=\"doValid()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.insuranceStartDate\"></app-print-error>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \">-</label>\n        <div class=\"col-sm-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"insuranceEndDate\" [min]=\"toMinDate\"\n              [max]=\"toMaxDate\" [matDatepicker]=\"picker2\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End date  -->\n\n  <div class=\"row\" style=\"align-items: center;\">\n    <!-- BC -->\n    <div class=\"col-6\">\n      <section class=\"example-section\">\n        <div class=\"form-group row\">\n          <label class=\"col-4\">Basic Cover</label>\n          <mat-radio-group formControlName=\"basicCoverId\" class=\"col-8\" (change)=\"radioChange($event)\">\n            <mat-radio-button class=\"mx-1\" [value]=\"'Health Insurance'\">Health Insurance\n            </mat-radio-button>\n            <mat-radio-button class=\"mx-1\" [value]=\"'Critical illness'\">Critical Illness\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </section>\n    </div>\n    <!-- BC -->\n    <!-- DOB -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Date of Birth</label>\n        <div class=\"col-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"dateOfBirth\" [min]=\"dobMinDate\" [max]=\"dobMaxDate\"\n              [matDatepicker]=\"picker3\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n            <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.dateOfBirth\"></app-print-error>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!-- DOB -->\n  </div>\n\n  <div class=\"row\">\n    <!--  Payment Frequency -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Payment Frequency</label>\n        <div class=\"col-6\">\n          <select name=\"payment_frequency\" formControlName=\"paymentFrequency\" class=\"form-control form-control-sm\">\n            <option [value]=\"null\">Please Select Payment Frequency</option>\n            <option value=\"lump\">Lump Sum</option>\n            <option value=\"semi_annually\">Semi-Annually</option>\n          </select>\n          <app-print-error [control]=\"controls.paymentFrequency\"></app-print-error>\n\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n    <!--  Payment Frequency -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Sum Insured of Main Cover</label>\n        <div class=\"col-6\">\n          <select name=\"sumInsuredMainCover\" formControlName=\"sumInsuredMainCover\" class=\"form-control form-control-sm\"\n            (change)=\"getUnitOption()\">\n            <option [value]=\"null\">Please Select Sum Insured</option>\n            <option *ngFor=\"let item of options3\" [value]=\"item\">{{item}} Unit{{item > 1 ? \"s\": \"\"}}</option>\n          </select>\n          <app-print-error [control]=\"controls.sumInsuredMainCover\"></app-print-error>\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n  </div>\n\n  <div class=\"row\">\n    <!--  Medical Card No -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Medical Card No</label>\n        <div class=\"col-6\">\n          <input type=\"text\" name=\"medicalCardNo\" formControlName=\"medicalCardNo\" class=\"form-control form-control-sm\">\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n  </div>\n  <!-- <hr> value=\"{{item.id}}\">-->\n  <ng-container *ngIf=\"controls.basicCoverId.value == 'Health Insurance'\">\n    <div class=\"row mt-5\">\n      <div class=\"col-12\">\n        <h5 style=\"border-bottom: 1px solid rgba(0, 0, 0, 0.1);padding: 20px 0px;\">Optional Cover</h5>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"form-group row\" *ngFor=\"let item of options2\" style=\"align-items: center;\">\n          <label class=\"col-4 col-form-label\">{{item.description}}</label>\n          <div class=\"col-2\">\n            <span class=\"switch switch-icon\">\n              <label>\n                <input type=\"checkbox\" name=\"{{item.description}}\" [(ngModel)]=\"addOns[item.id+'opt']\"\n                  [ngModelOptions]=\"{standalone: true}\" />\n                <span></span>\n              </label>\n            </span>\n          </div>\n          <div class=\"col-6\" *ngIf=\"addOns[item.id+'opt']\">\n            <div class=\"row\">\n              <label class=\"col-6 col-form-label\">Sum Insured</label>\n              <div class=\"col-6\">\n                <select [(ngModel)]=\"addOns[item.id+'value']\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"form-control form-control-sm\">\n                  <option *ngFor=\"let item of options4\" [value]=\"item\">{{item}} Unit{{item > 1 ? \"s\": \"\"}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</form>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n  </div>\n</div>\n\n<!--  \"Health Insurance\"\n\"Critical illness\"\n\"Surgery & Miscarriage\"\n\"Mediacal treatments\" -->");

/***/ }),

/***/ 32318:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/surrounding-building/surrounding-building.component.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n    <div class=\"row\" style=\"align-items: center; margin: 10px 0px;\">\n\n        <div class=\"col-sm-8\">\n            <label class=\"col-sm-6  left-border-image\">Surrounding Building </label>\n        </div>\n        <div class=\"col-sm-4\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm mx-2 ft-right\" (click)=\"add('create')\">Add New Data</button>\n        </div>\n    </div>\n    <div class=\"table-responsive angular-bootstrap-table\">\n        <table class=\"table table-head-custom table-vertical-center\">\n            <thead>\n                <tr>\n                    <th>Building Description</th>\n                    <th>Type of Building</th>\n                    <th>Occupation</th>\n                    <th>Class</th>\n                    <th>Premium Rate</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"surrounding.length>0\">\n                <tr *ngFor=\"let data of surrounding\">\n                    <th>\n                        {{data.buildingDescription}}\n                    </th>\n                    <th>\n                        {{data.typeOfBuildingValue}}\n                    </th>\n                    <th>\n                        {{data.occupationOfBuildingValue}}\n                    </th>\n                    <th>\n                        {{data.buildingClassValue}}\n                    </th>\n                    <th>\n                        {{data.premiumRate}}\n                    </th>\n                    <th>\n                        <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit')\">\n                            <span class=\"flaticon-edit\"></span>\n                        </a>\n                        <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete')\">\n                            <span class=\"flaticon-delete\"></span>\n                        </a>\n                    </th>\n                </tr>\n            </tbody>\n\n\n        </table>\n    </div>");

/***/ }),

/***/ 18096:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/surrounding-building/surrounding-detail/surrounding-detail.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n            Surrounding Detail\n        </div>\n    </div>\n\n    <form action=\"#\" class=\"form\" [formGroup]=\"surroundingdetailform\" (ngSubmit)=\"createSurrounding()\">\n        <div class=\"overlay overlay-block cursor-default modal-body\">\n\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Building Description</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"buildingDescription\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('buildingDescription')\" [class.is-valid]=\"isControlValid('buildingDescription')\" formControlName=\"buildingDescription\"\n                            />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Type of Building</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select class=\"ng-custom-select\" (change)=\"changeType('child')\" [class.is-invalid]=\"isControlInvalid('typeOfBuilding')\" [class.is-valid]=\"isControlValid('typeOfBuilding')\" [items]=\"typeOfBuildingOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"typeOfBuilding\">\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Occupation of Building</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select class=\"ng-custom-select\" (change)=\"changeOccuption()\" [class.is-invalid]=\"isControlInvalid('occupationOfBuilding')\" [class.is-valid]=\"isControlValid('occupationOfBuilding')\" [items]=\"occupationOfBuildingOption\" bindLabel=\"value\" bindValue=\"code\"\n                                formControlName=\"occupationOfBuilding\">\n                            </ng-select>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Building Class</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select class=\"ng-custom-select\" (change)=\"changeClass()\" [class.is-invalid]=\"isControlInvalid('buildingClass')\" [class.is-valid]=\"isControlValid('buildingClass')\" [items]=\"buildingClassOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"buildingClass\">\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Distance to Building (feet)</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" class=\"form-control form-control-sm \" name=\"distanceToBuilding\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('distanceToBuilding')\" [class.is-valid]=\"isControlValid('distanceToBuilding')\" formControlName=\"distanceToBuilding\"\n                            />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Rate</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" class=\"form-control form-control-sm \" name=\"premiumRate\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('premiumRate')\" [class.is-valid]=\"isControlValid('premiumRate')\" formControlName=\"premiumRate\" />\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light btn-sm btn-elevate mr-2\" (click)=\"dismissModal()\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-sm btn-elevate\">Save</button>\n        </div>\n    </form>\n\n</div>");

/***/ }),

/***/ 4389:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-pages/tables/tables.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table-responsive angular-bootstrap-table\">\n    <table class=\"table table-head-custom table-vertical-center\">\n        <thead *ngIf=\"contents\">\n            <tr>\n                <th>Item Name</th>\n                <th>Item Description</th>\n                <th style=\"text-align: right;\">Value per Quantity</th>\n                <th>Quantity</th>\n                <th style=\"text-align: right;\">Total Value</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"tableData.length>0 && contents\">\n            <tr *ngFor=\"let data of tableData\">\n                <th>\n                    {{data.itemName}}\n                </th>\n                <th>\n                    {{data.itemDescription}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.valuePerQuantity | number}}\n                </th>\n                <th>\n                    {{data.quantity}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.totalValue | number}}\n                </th>\n                <th>\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit','content')\">\n                        <span class=\"flaticon-edit\"></span>\n                    </a>\n                    <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete','content')\">\n                        <span class=\"flaticon-delete\"></span>\n                    </a>\n                </th>\n            </tr>\n        </tbody>\n\n        <thead *ngIf=\"plant\">\n            <tr>\n                <th>Item Name</th>\n                <th>Item Description</th>\n                <th style=\"text-align: right;\">Value per Quantity</th>\n                <th style=\"text-align: right;\">Quantity</th>\n                <th style=\"text-align: right;\">Total Value</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"tableData.length>0 && plant\">\n            <tr *ngFor=\"let data of tableData\">\n                <th>\n                    {{data.itemName}}\n                </th>\n                <th>\n                    {{data.itemDescription}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.valuePerQuantity | number}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.quantity}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.totalValue | number}}\n                </th>\n                <th>\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit','plant')\">\n                        <span class=\"flaticon-edit\"></span>\n                    </a>\n                    <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete','plant')\">\n                        <span class=\"flaticon-delete\"></span>\n                    </a>\n                </th>\n            </tr>\n        </tbody>\n        <thead *ngIf=\"stock\">\n            <tr>\n                <th>Month</th>\n                <th>Description</th>\n                <th style=\"text-align: right;\">Stock Value</th>\n                <th style=\"text-align: right;\">Agreed SI</th>\n                <th>Remarks</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"tableData.length>0 && stock\">\n            <tr *ngFor=\"let data of tableData\">\n                <th>\n                    {{data.month}}\n                </th>\n                <th>\n                    {{data.description}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.stockValue | number}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.agreedSi | number}}\n                </th>\n                <th>\n                    {{data.remark}}\n                </th>\n                <th>\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit','stock')\">\n                        <span class=\"flaticon-edit\"></span>\n                    </a>\n                    <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete','stock')\">\n                        <span class=\"flaticon-delete\"></span>\n                    </a>\n                </th>\n            </tr>\n        </tbody>\n    </table>\n</div>");

/***/ }),

/***/ 95017:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/addon-page/addon-page.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRvbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1957:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/add-calculated-building/add-calculated-building.component.scss ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2FsY3VsYXRlZC1idWlsZGluZy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 25631:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/calculated-building.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".ft-right {\n  float: right;\n}\n\n.tx-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0ZWQtYnVpbGRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImNhbGN1bGF0ZWQtYnVpbGRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnR4LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 8844:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/static-pages/coverage-page/coverage-page.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3ZlcmFnZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 17214:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life-griph/education-life-griph.component.scss ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tbGlmZS1ncmlwaC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 92063:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/education-life.component.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tbGlmZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 47469:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo-griph/endo-griph.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmRvLWdyaXBoLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 64558:
/*!*************************************************************!*\
  !*** ./src/app/pages/static-pages/endo/endo.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmRvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 70400:
/*!***********************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/fire-risk.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJlLXJpc2suY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 14112:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/risk-detail/risk-detail.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaXNrLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 1092:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-simple-page/fire-simple-page.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmUtc2ltcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFESiIsImZpbGUiOiJmaXJlLXNpbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwIHtcbiAgLmZvcm0tY29udHJvbC1zbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXAgOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgI0U0RTZFRjtcbiAgICBwYWRkaW5nOiAwcHggMC43NXJlbTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodCAgIDogNXB4O1xuICB9XG59Il19 */";

/***/ }),

/***/ 68636:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/health-quo.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtcXVvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 93682:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page-policy/simple-page-policy.component.scss ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1wYWdlLXBvbGljeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQURKIiwiZmlsZSI6InNpbXBsZS1wYWdlLXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XG4gIC5mb3JtLWNvbnRyb2wtc20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwIDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICNFNEU2RUY7XG4gICAgcGFkZGluZzogMHB4IDAuNzVyZW07XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQgICA6IDVweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 61633:
/*!***************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page/simple-page.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBREoiLCJmaWxlIjoic2ltcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xuICAuZm9ybS1jb250cm9sLXNtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcCA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjRTRFNkVGO1xuICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0ICAgOiA1cHg7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 15105:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-building.component.scss ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".ft-right {\n  float: right;\n}\n\n.tx-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnJvdW5kaW5nLWJ1aWxkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzdXJyb3VuZGluZy1idWlsZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udHgtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 55412:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-detail/surrounding-detail.component.scss ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXJyb3VuZGluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 22020:
/*!*****************************************************************!*\
  !*** ./src/app/pages/static-pages/tables/tables.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "table .tr .th {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoidGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgLnRyIC50aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_static-pages_static-pages_module_ts.js.map