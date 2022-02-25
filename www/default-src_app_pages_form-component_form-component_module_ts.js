(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_form-component_form-component_module_ts"],{

/***/ 46598:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MAT_CHECKBOX_DEFAULT_OPTIONS": () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_CHECKBOX_REQUIRED_VALIDATOR": () => (/* binding */ MAT_CHECKBOX_REQUIRED_VALIDATOR),
/* harmony export */   "MatCheckbox": () => (/* binding */ MatCheckbox),
/* harmony export */   "MatCheckboxChange": () => (/* binding */ MatCheckboxChange),
/* harmony export */   "MatCheckboxModule": () => (/* binding */ MatCheckboxModule),
/* harmony export */   "MatCheckboxRequiredValidator": () => (/* binding */ MatCheckboxRequiredValidator),
/* harmony export */   "_MatCheckboxRequiredValidatorModule": () => (/* binding */ _MatCheckboxRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 42706);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 62270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ 34095);








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-checkbox`. */





const _c0 = ["input"];
const _c1 = function () { return { enterDuration: 150 }; };
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-checkbox-default-options', {
    providedIn: 'root',
    factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent',
        clickAction: 'check-indeterminate',
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckbox),
    multi: true
};
/** Change event object emitted by MatCheckbox. */
class MatCheckboxChange {
}
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
class MatCheckboxBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatCheckboxMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(MatCheckboxBase))));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
class MatCheckbox extends _MatCheckboxMixinBase {
    constructor(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, _animationMode, _options) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._focusMonitor = _focusMonitor;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        this._options = _options;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
         * take precedence so this may be omitted.
         */
        this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        this.ariaLabelledby = null;
        this._uniqueId = `mat-checkbox-${++nextUniqueId}`;
        /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
        this.labelPosition = 'after';
        /** Name value will be applied to the input element if present */
        this.name = null;
        /** Event emitted when the checkbox's `checked` value changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted when the checkbox's `indeterminate` value changes. */
        this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * @docs-private
         */
        this._onTouched = () => { };
        this._currentAnimationClass = '';
        this._currentCheckState = 0 /* Init */;
        this._controlValueAccessorChangeFn = () => { };
        this._checked = false;
        this._disabled = false;
        this._indeterminate = false;
        this._options = this._options || defaults;
        this.color = this.defaultColor = this._options.color || defaults.color;
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /** Whether the checkbox is required. */
    get required() { return this._required; }
    set required(value) { this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value); }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => {
                    this._onTouched();
                    this._changeDetectorRef.markForCheck();
                });
            }
        });
        this._syncIndeterminate(this._indeterminate);
    }
    // TODO: Delete next major revision.
    ngAfterViewChecked() { }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Whether the checkbox is checked.
     */
    get checked() { return this._checked; }
    set checked(value) {
        if (value != this.checked) {
            this._checked = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is disabled. This fully overrides the implementation provided by
     * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        if (newValue !== this.disabled) {
            this._disabled = newValue;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
     * set to false.
     */
    get indeterminate() { return this._indeterminate; }
    set indeterminate(value) {
        const changed = value != this._indeterminate;
        this._indeterminate = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        if (changed) {
            if (this._indeterminate) {
                this._transitionCheckState(3 /* Indeterminate */);
            }
            else {
                this._transitionCheckState(this.checked ? 1 /* Checked */ : 2 /* Unchecked */);
            }
            this.indeterminateChange.emit(this._indeterminate);
        }
        this._syncIndeterminate(this._indeterminate);
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
        // component will be only marked for check, but no actual change detection runs automatically.
        // Instead of going back into the zone in order to trigger a change detection which causes
        // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
        // an explicit change detection for the checkbox view and its children.
        this._changeDetectorRef.detectChanges();
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this.checked = !!value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _getAriaChecked() {
        if (this.checked) {
            return 'true';
        }
        return this.indeterminate ? 'mixed' : 'false';
    }
    _transitionCheckState(newState) {
        let oldState = this._currentCheckState;
        let element = this._elementRef.nativeElement;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass);
            // Remove the animation class to avoid animation when the checkbox is moved between containers
            const animationClass = this._currentAnimationClass;
            this._ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    element.classList.remove(animationClass);
                }, 1000);
            });
        }
    }
    _emitChangeEvent() {
        const event = new MatCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
        // Assigning the value again here is redundant, but we have to do it in case it was
        // changed inside the `change` listener which will cause the input to be out of sync.
        if (this._inputElement) {
            this._inputElement.nativeElement.checked = this.checked;
        }
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
        this.checked = !this.checked;
    }
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    _onInputClick(event) {
        var _a;
        const clickAction = (_a = this._options) === null || _a === void 0 ? void 0 : _a.clickAction;
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
        // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
        if (!this.disabled && clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && clickAction !== 'check') {
                Promise.resolve().then(() => {
                    this._indeterminate = false;
                    this.indeterminateChange.emit(this._indeterminate);
                });
            }
            this.toggle();
            this._transitionCheckState(this._checked ? 1 /* Checked */ : 2 /* Unchecked */);
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
        else if (!this.disabled && clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
    }
    /** Focuses the checkbox. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        else {
            this._inputElement.nativeElement.focus(options);
        }
    }
    _onInteractionEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
    }
    _getAnimationClassForCheckStateTransition(oldState, newState) {
        // Don't transition if animations are disabled.
        if (this._animationMode === 'NoopAnimations') {
            return '';
        }
        let animSuffix = '';
        switch (oldState) {
            case 0 /* Init */:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === 1 /* Checked */) {
                    animSuffix = 'unchecked-checked';
                }
                else if (newState == 3 /* Indeterminate */) {
                    animSuffix = 'unchecked-indeterminate';
                }
                else {
                    return '';
                }
                break;
            case 2 /* Unchecked */:
                animSuffix = newState === 1 /* Checked */ ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case 1 /* Checked */:
                animSuffix = newState === 2 /* Unchecked */ ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case 3 /* Indeterminate */:
                animSuffix = newState === 1 /* Checked */ ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
                break;
        }
        return `mat-checkbox-anim-${animSuffix}`;
    }
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */
    _syncIndeterminate(value) {
        const nativeCheckbox = this._inputElement;
        if (nativeCheckbox) {
            nativeCheckbox.nativeElement.indeterminate = value;
        }
    }
}
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) { return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8)); };
MatCheckbox.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCheckbox, selectors: [["mat-checkbox"]], viewQuery: function MatCheckbox_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostAttrs: [1, "mat-checkbox"], hostVars: 12, hostBindings: function MatCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], id: "id", labelPosition: "labelPosition", name: "name", required: "required", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", ariaDescribedby: ["aria-describedby", "ariaDescribedby"], value: "value" }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, exportAs: ["matCheckbox"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 17, vars: 20, consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]], template: function MatCheckbox_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) { return ctx._onInteractionEvent($event); })("click", function MatCheckbox_Template_input_click_3_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.CdkObserveContent], styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
MatCheckbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_CHECKBOX_DEFAULT_OPTIONS,] }] }
];
MatCheckbox.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-describedby',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    indeterminateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['input',] }],
    ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple,] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    indeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-checkbox',
                template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <span class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <span matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <span class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></span>\n    </span>\n    <span class=\"mat-checkbox-frame\"></span>\n    <span class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <span class=\"mat-checkbox-mixedmark\"></span>\n    </span>\n  </span>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                exportAs: 'matCheckbox',
                host: {
                    'class': 'mat-checkbox',
                    '[id]': 'id',
                    '[attr.tabindex]': 'null',
                    '[class.mat-checkbox-indeterminate]': 'indeterminate',
                    '[class.mat-checkbox-checked]': 'checked',
                    '[class.mat-checkbox-disabled]': 'disabled',
                    '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                },
                providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                inputs: ['disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
            }] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], indeterminateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-describedby']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['input']
        }], ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckboxRequiredValidator),
    multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {
}
MatCheckboxRequiredValidator.ɵfac = /*@__PURE__*/ function () { let ɵMatCheckboxRequiredValidator_BaseFactory; return function MatCheckboxRequiredValidator_Factory(t) { return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator)))(t || MatCheckboxRequiredValidator); }; }();
MatCheckboxRequiredValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCheckboxRequiredValidator, selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
                providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based checkbox implementations. */
class _MatCheckboxRequiredValidatorModule {
}
_MatCheckboxRequiredValidatorModule.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) { return new (t || _MatCheckboxRequiredValidatorModule)(); };
_MatCheckboxRequiredValidatorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: _MatCheckboxRequiredValidatorModule });
_MatCheckboxRequiredValidatorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [MatCheckboxRequiredValidator],
                declarations: [MatCheckboxRequiredValidator]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatCheckboxRequiredValidatorModule, { declarations: [MatCheckboxRequiredValidator], exports: [MatCheckboxRequiredValidator] }); })();
class MatCheckboxModule {
}
MatCheckboxModule.ɵfac = function MatCheckboxModule_Factory(t) { return new (t || MatCheckboxModule)(); };
MatCheckboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatCheckboxModule });
MatCheckboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule,
            _MatCheckboxRequiredValidatorModule
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule,
                    _MatCheckboxRequiredValidatorModule
                ],
                exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule],
                declarations: [MatCheckbox]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCheckboxModule, { declarations: function () { return [MatCheckbox]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule, _MatCheckboxRequiredValidatorModule]; }, exports: function () { return [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule]; } }); })();

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

/***/ 68586:
/*!*******************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRCodeComponent": () => (/* binding */ QRCodeComponent),
/* harmony export */   "QRCodeModule": () => (/* binding */ QRCodeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ 605);





const _c0 = ["qrcElement"];
class QRCodeComponent {
    constructor(renderer) {
        this.renderer = renderer;
        // Deprecated
        this.colordark = '';
        this.colorlight = '';
        this.level = '';
        this.hidetitle = false;
        this.size = 0;
        this.usesvg = false;
        // Valid for 1.x and 2.x
        this.allowEmptyString = false;
        this.qrdata = '';
        // New fields introduced in 2.0.0
        this.colorDark = '#000000ff';
        this.colorLight = '#ffffffff';
        this.cssClass = 'qrcode';
        this.elementType = 'canvas';
        this.errorCorrectionLevel = 'M';
        this.margin = 4;
        this.scale = 4;
        this.width = 10;
        // Deprecation warnings
        if (this.colordark !== '') {
            console.warn('[angularx-qrcode] colordark is deprecated, use colorDark.');
        }
        if (this.colorlight !== '') {
            console.warn('[angularx-qrcode] colorlight is deprecated, use colorLight.');
        }
        if (this.level !== '') {
            console.warn('[angularx-qrcode] level is deprecated, use errorCorrectionLevel.');
        }
        if (this.hidetitle !== false) {
            console.warn('[angularx-qrcode] hidetitle is deprecated.');
        }
        if (this.size !== 0) {
            console.warn('[angularx-qrcode] size is deprecated, use `width`. Defaults to 10.');
        }
        if (this.usesvg !== false) {
            console.warn(`[angularx-qrcode] usesvg is deprecated, use [elementType]="'svg'".`);
        }
    }
    ngOnChanges() {
        this.createQRCode();
    }
    isValidQrCodeText(data) {
        if (this.allowEmptyString === false) {
            return !(typeof data === 'undefined' ||
                data === '' ||
                data === 'null' ||
                data === null);
        }
        return !(typeof data === 'undefined');
    }
    toDataURL() {
        return new Promise((resolve, reject) => {
            (0,qrcode__WEBPACK_IMPORTED_MODULE_0__.toDataURL)(this.qrdata, {
                color: {
                    dark: this.colorDark,
                    light: this.colorLight,
                },
                errorCorrectionLevel: this.errorCorrectionLevel,
                margin: this.margin,
                scale: this.scale,
                version: this.version,
                width: this.width,
            }, (err, url) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(url);
                }
            });
        });
    }
    toCanvas(canvas) {
        return new Promise((resolve, reject) => {
            (0,qrcode__WEBPACK_IMPORTED_MODULE_0__.toCanvas)(canvas, this.qrdata, {
                color: {
                    dark: this.colorDark,
                    light: this.colorLight,
                },
                errorCorrectionLevel: this.errorCorrectionLevel,
                margin: this.margin,
                scale: this.scale,
                version: this.version,
                width: this.width,
            }, (error) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve('success');
                }
            });
        });
    }
    toSVG() {
        return new Promise((resolve, reject) => {
            (0,qrcode__WEBPACK_IMPORTED_MODULE_0__.toString)(this.qrdata, {
                color: {
                    dark: this.colorDark,
                    light: this.colorLight,
                },
                errorCorrectionLevel: this.errorCorrectionLevel,
                margin: this.margin,
                scale: this.scale,
                type: 'svg',
                version: this.version,
                width: this.width,
            }, (err, url) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(url);
                }
            });
        });
    }
    renderElement(element) {
        for (const node of this.qrcElement.nativeElement.childNodes) {
            this.renderer.removeChild(this.qrcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.qrcElement.nativeElement, element);
    }
    createQRCode() {
        // Set sensitive defaults
        if (this.version && this.version > 40) {
            console.warn('[angularx-qrcode] max value for `version` is 40');
            this.version = 40;
        }
        else if (this.version && this.version < 1) {
            console.warn('[angularx-qrcode]`min value for `version` is 1');
            this.version = 1;
        }
        else if (this.version !== undefined && isNaN(this.version)) {
            console.warn('[angularx-qrcode] version should be a number, defaulting to auto.');
            this.version = undefined;
        }
        try {
            if (!this.isValidQrCodeText(this.qrdata)) {
                throw new Error('[angularx-qrcode] Field `qrdata` is empty, set`allowEmptyString="true"` to overwrite this behaviour.');
            }
            let element;
            switch (this.elementType) {
                case 'canvas':
                    element = this.renderer.createElement('canvas');
                    this.toCanvas(element)
                        .then(() => {
                        this.renderElement(element);
                    })
                        .catch((e) => {
                        console.error('[angularx-qrcode] canvas error: ', e);
                    });
                    break;
                case 'svg':
                    element = this.renderer.createElement('div');
                    this.toSVG()
                        .then((svgString) => {
                        this.renderer.setProperty(element, 'innerHTML', svgString);
                        const innerElement = element.firstChild;
                        this.renderer.setAttribute(innerElement, 'height', `${this.width}`);
                        this.renderer.setAttribute(innerElement, 'width', `${this.width}`);
                        this.renderElement(innerElement);
                    })
                        .catch((e) => {
                        console.error('[angularx-qrcode] svg error: ', e);
                    });
                    break;
                case 'url':
                case 'img':
                default:
                    element = this.renderer.createElement('img');
                    this.toDataURL()
                        .then((dataUrl) => {
                        element.setAttribute('src', dataUrl);
                        this.renderElement(element);
                    })
                        .catch((e) => {
                        console.error('[angularx-qrcode] img/url error: ', e);
                    });
            }
        }
        catch (e) {
            console.error('[angularx-qrcode] Error generating QR Code: ', e.message);
        }
    }
}
QRCodeComponent.ɵfac = function QRCodeComponent_Factory(t) { return new (t || QRCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
QRCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QRCodeComponent, selectors: [["qrcode"]], viewQuery: function QRCodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.qrcElement = _t.first);
    } }, inputs: { colordark: "colordark", colorlight: "colorlight", level: "level", hidetitle: "hidetitle", size: "size", usesvg: "usesvg", allowEmptyString: "allowEmptyString", qrdata: "qrdata", colorDark: "colorDark", colorLight: "colorLight", cssClass: "cssClass", elementType: "elementType", errorCorrectionLevel: "errorCorrectionLevel", margin: "margin", scale: "scale", width: "width", version: "version" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["qrcElement", ""]], template: function QRCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass);
    } }, encapsulation: 2, changeDetection: 0 });
QRCodeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 }
];
QRCodeComponent.propDecorators = {
    colordark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    colorlight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    hidetitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    usesvg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    allowEmptyString: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    qrdata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    colorDark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    colorLight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    elementType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    errorCorrectionLevel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    margin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    scale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    version: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    qrcElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: ['qrcElement', { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QRCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'qrcode',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                template: `<div #qrcElement [class]="cssClass"></div>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 }]; }, { colordark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], colorlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], hidetitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], usesvg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], allowEmptyString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], qrdata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], colorDark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], colorLight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], elementType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], errorCorrectionLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], margin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], version: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], qrcElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['qrcElement', { static: true }]
        }] }); })();

class QRCodeModule {
}
QRCodeModule.ɵfac = function QRCodeModule_Factory(t) { return new (t || QRCodeModule)(); };
QRCodeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: QRCodeModule });
QRCodeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QRCodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                providers: [],
                declarations: [QRCodeComponent],
                exports: [QRCodeComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QRCodeModule, { declarations: [QRCodeComponent], exports: [QRCodeComponent] }); })();

/*
 * Public API Surface of angularx-qrcode
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 75972:
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ 605:
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var canPromise = __webpack_require__(/*! ./can-promise */ 51552)

var QRCode = __webpack_require__(/*! ./core/qrcode */ 8181)
var CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ 56623)
var SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ 51476)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1)
  var argsNum = args.length
  var isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ 51552:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/can-promise.js ***!
  \************************************************/
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ 43611:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = (__webpack_require__(/*! ./utils */ 45156).getSymbolSize)

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ 1743:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Mode = __webpack_require__(/*! ./mode */ 94501)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ 88501:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/***/ ((module) => {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ 88515:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Buffer = __webpack_require__(/*! ../utils/buffer */ 46369)

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Buffer(size * size)
  this.data.fill(0)
  this.reservedBit = new Buffer(size * size)
  this.reservedBit.fill(0)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ 15834:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Buffer = __webpack_require__(/*! ../utils/buffer */ 46369)
var Mode = __webpack_require__(/*! ./mode */ 94501)

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Buffer(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ 21379:
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var ECLevel = __webpack_require__(/*! ./error-correction-level */ 48240)

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ 48240:
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 21173:
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var getSymbolSize = (__webpack_require__(/*! ./utils */ 45156).getSymbolSize)
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ 81361:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Utils = __webpack_require__(/*! ./utils */ 45156)

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ 82665:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Buffer = __webpack_require__(/*! ../utils/buffer */ 46369)

var EXP_TABLE
var LOG_TABLE

if (Buffer.alloc) {
  EXP_TABLE = Buffer.alloc(512)
  LOG_TABLE = Buffer.alloc(256)
} else {
  EXP_TABLE = new Buffer(512)
  LOG_TABLE = new Buffer(256)
}
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ 61582:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Mode = __webpack_require__(/*! ./mode */ 94501)
var Utils = __webpack_require__(/*! ./utils */ 45156)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ 28209:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ 94501:
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var VersionCheck = __webpack_require__(/*! ./version-check */ 88186)
var Regex = __webpack_require__(/*! ./regex */ 32692)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 35361:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Mode = __webpack_require__(/*! ./mode */ 94501)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ 96449:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Buffer = __webpack_require__(/*! ../utils/buffer */ 46369)
var GF = __webpack_require__(/*! ./galois-field */ 82665)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1)
  coeff.fill(0)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),

/***/ 8181:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Buffer = __webpack_require__(/*! ../utils/buffer */ 46369)
var Utils = __webpack_require__(/*! ./utils */ 45156)
var ECLevel = __webpack_require__(/*! ./error-correction-level */ 48240)
var BitBuffer = __webpack_require__(/*! ./bit-buffer */ 88501)
var BitMatrix = __webpack_require__(/*! ./bit-matrix */ 88515)
var AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ 43611)
var FinderPattern = __webpack_require__(/*! ./finder-pattern */ 21173)
var MaskPattern = __webpack_require__(/*! ./mask-pattern */ 28209)
var ECCode = __webpack_require__(/*! ./error-correction-code */ 21379)
var ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ 15760)
var Version = __webpack_require__(/*! ./version */ 16744)
var FormatInfo = __webpack_require__(/*! ./format-info */ 81361)
var Mode = __webpack_require__(/*! ./mode */ 94501)
var Segments = __webpack_require__(/*! ./segments */ 41011)
var isArray = __webpack_require__(/*! isarray */ 73522)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = new Buffer(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version
  var mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ 15760:
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Buffer = __webpack_require__(/*! ../utils/buffer */ 46369)
var Polynomial = __webpack_require__(/*! ./polynomial */ 96449)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree)
  pad.fill(0)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = new Buffer(this.degree)
    buff.fill(0)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ 32692:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+\\-./:]+'
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ 41011:
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Mode = __webpack_require__(/*! ./mode */ 94501)
var NumericData = __webpack_require__(/*! ./numeric-data */ 35361)
var AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ 1743)
var ByteData = __webpack_require__(/*! ./byte-data */ 15834)
var KanjiData = __webpack_require__(/*! ./kanji-data */ 61582)
var Regex = __webpack_require__(/*! ./regex */ 32692)
var Utils = __webpack_require__(/*! ./utils */ 45156)
var dijkstra = __webpack_require__(/*! dijkstrajs */ 75972)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ 45156:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ 88186:
/*!*******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version-check.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ 16744:
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Utils = __webpack_require__(/*! ./utils */ 45156)
var ECCode = __webpack_require__(/*! ./error-correction-code */ 21379)
var ECLevel = __webpack_require__(/*! ./error-correction-level */ 48240)
var Mode = __webpack_require__(/*! ./mode */ 94501)
var VersionCheck = __webpack_require__(/*! ./version-check */ 88186)
var isArray = __webpack_require__(/*! isarray */ 73522)

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ 56623:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Utils = __webpack_require__(/*! ./utils */ 36655)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = Utils.getImageWidth(qrData.modules.size, opts)

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ 51476:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var Utils = __webpack_require__(/*! ./utils */ 36655)

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255
  var str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  var path = ''
  var moveBy = 0
  var newRow = false
  var lineLength = 0

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size)
    var row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = size + opts.margin * 2

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ 36655:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  var width = options.width && options.width >= 21 ? options.width : undefined
  var scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scale = exports.getScale(size, opts)
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)
  var scaledMargin = opts.margin * scale
  var palette = [opts.color.light, opts.color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ 46369:
/*!************************************************************!*\
  !*** ./node_modules/qrcode/lib/utils/typedarray-buffer.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__(/*! isarray */ 73522)

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that
    if (buf === null) {
      buf = new Buffer(length)
    }
    buf.length = length
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(that, length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf)
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(that, len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(null, length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports = Buffer


/***/ }),

/***/ 73522:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/node_modules/isarray/index.js ***!
  \***********************************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 87952:
/*!***************************************!*\
  !*** ./src/app/pages/check-parent.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkVaidDep": () => (/* binding */ checkVaidDep)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 18346);

function checkVaidDep(dependency, group) {
    let parentVal = group instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup ? group.getRawValue() : group.value;
    let parentData = parentVal[dependency.parentName];
    if (dependency.show) {
        if (dependency.isArray) {
            return dependency.value.includes(parentData);
        }
        else {
            return parentData == dependency.value;
        }
    }
    else {
        return parentData ? true : false;
    }
}


/***/ }),

/***/ 41323:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/services/form-ui.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUIService": () => (/* binding */ FormUIService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/biz.operation.service */ 91691);






const API_FORMUI_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/dynamicproduct`;
let FormUIService = class FormUIService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FORMUI_URL);
        this.httpClient = httpClient;
        this.selectedForm = {};
    }
    getByType() {
        return this.findAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            if (!res)
                return res;
            let forms = [];
            let pages = [];
            //console.log(res);
            res.map(x => {
                if (x.type == 'Form') {
                    forms.push(x);
                }
                else {
                    pages.push(x);
                }
            });
            res = { forms, pages };
            return res;
        }));
    }
};
FormUIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
FormUIService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], FormUIService);



/***/ }),

/***/ 77720:
/*!*************************************************************************!*\
  !*** ./src/app/pages/form-component/button-box/button-box.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBoxComponent": () => (/* binding */ ButtonBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_button_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./button-box.component.html */ 70972);
/* harmony import */ var _button_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-box.component.scss */ 82357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let ButtonBoxComponent = class ButtonBoxComponent {
    constructor(el) {
        this.el = el;
        this.editStage = true;
        this.eventE = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    //wait for the component to render completely
    ngOnInit() {
    }
    onClick() {
        if (this.editStage) {
            this.eventE.emit(this.index + "");
        }
        else {
            this.eventE.emit(this.config.type);
        }
    }
};
ButtonBoxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
ButtonBoxComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    editStage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    eventE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ButtonBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: '[app-button-box]',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_button_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_button_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ButtonBoxComponent);



/***/ }),

/***/ 92938:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/form-component/checkbox-box/checkbox-box.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxBoxComponent": () => (/* binding */ CheckboxBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checkbox_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./checkbox-box.component.html */ 13128);
/* harmony import */ var _checkbox_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-box.component.scss */ 74223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/master-data/master-data.service */ 26697);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field.interface */ 21558);








let CheckboxBoxComponent = class CheckboxBoxComponent {
    constructor(globalFun, masterData, cdf) {
        this.globalFun = globalFun;
        this.masterData = masterData;
        this.cdf = cdf;
        this.data = {};
        this.unSub = [];
        this.masterOption = [];
        this.oldValue = '';
    }
    ngOnDestroy() {
        this.unSub.forEach((sb) => sb.unsubscribe());
    }
    doFunction() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.FUNCTION_TYPE.TRIGGER) {
                this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue());
            }
        }
    }
    listenFunData() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.FUNCTION_TYPE.GETDATA) {
                this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
                    this.group.controls[this.config.name].setValue(res);
                });
            }
        }
    }
    loadData() {
        if (this.config.master == 'true') {
            if (!this.config.dependency) {
                this.getOptions();
            }
        }
        else {
            this.masterOption = this.config.options;
            this.masterOption.forEach(element => {
                if (this.config.multi) {
                    let data = this.config.value;
                    let oldValue = Array.isArray(data) ? data : [];
                    let index = oldValue.findIndex(x => x == element.value);
                    this.data['v' + element.value] = index < 0 ? false : true;
                }
                else {
                    this.data['v' + element.value] = this.config.value == element.value;
                }
            });
        }
    }
    ngOnInit() {
        this.loadData();
        this.unSub[1] = this.globalFun.optionResultChange.subscribe((res) => {
            if (res) {
                this.loadData();
                // this.unSub[1].unsubscribe()
            }
        });
        // this.unSub[1] = this.group.controls[this.config.name].valueChanges.subscribe((res:any)=>{
        //   console.log(res,"Resss");
        //   console.log(res);
        //   if(res){
        //     this.loadData()
        //     this.unSub[1].unsubscribe()
        //   }
        // })
        this.listenFunData();
    }
    checkData(event) {
        let name = event.source.name;
        let oldValue = this.group.value[this.config.name];
        if (this.config.multi) {
            oldValue = Array.isArray(oldValue) ? oldValue : [];
            if (event.checked) {
                oldValue.push(name);
            }
            else {
                let i = oldValue.findIndex(x => x == name);
                oldValue.splice(i, 1);
            }
        }
        else {
            if (event.checked) {
                this.masterOption.forEach(x => {
                    if (x.value != name) {
                        this.data['v' + x.value] = false;
                    }
                });
                oldValue = name;
            }
            else {
                oldValue = null;
            }
        }
        this.group.controls[this.config.name].setValue(oldValue);
        this.doFunction();
    }
    get isDisabled() {
        return this.group.controls[this.config.name].disabled;
    }
    getOptions() {
        let valueKey = this.config.valueField;
        let showKey = this.config.showField;
        this.masterData.getDataByType(this.config.masterData).toPromise().then((res) => {
            if (res) {
                this.masterOption = res.map(x => {
                    return Object.assign({ 'value': x[valueKey], 'text': x[showKey] }, x);
                });
                this.masterOption.forEach(element => {
                    if (this.config.multi) {
                        let data = this.config.value;
                        let oldValue = Array.isArray(data) ? data : [];
                        let index = oldValue.findIndex(x => x == element.value);
                        this.data['v' + element.value] = index < 0 ? false : true;
                    }
                    else {
                        this.data['v' + element.value] = this.config.value == element.value;
                    }
                });
                this.cdf.detectChanges();
                this.doFunction();
            }
        });
    }
    reGetOption(filter) {
        if (filter == this.oldValue)
            return false;
        let depend = this.config.dependency;
        let valueKey = this.config.valueField;
        let showKey = this.config.showField;
        let value = this.group.getRawValue()[this.config.name] || this.config.value;
        let same = false;
        this.oldValue = filter;
        this.masterData.getDataByType(this.config.masterData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            return res.filter(x => x[depend.relatedField] == filter);
        })).toPromise().then((res) => {
            if (res) {
                this.masterOption = res.map(x => {
                    if (x[valueKey] == value) {
                        same = true;
                    }
                    return Object.assign({ 'value': x[valueKey], 'text': x[showKey] }, x);
                });
                this.masterOption.forEach(element => {
                    if (this.config.multi) {
                        let data = this.config.value;
                        let oldValue = Array.isArray(data) ? data : [];
                        let index = oldValue.findIndex(x => x == element.value);
                        this.data['v' + element.value] = index < 0 ? false : true;
                    }
                    else {
                        this.data['v' + element.value] = this.config.value == element.value;
                    }
                });
                if (same) {
                    this.group.controls[this.config.name].setValue(value);
                }
                else {
                    if (this.masterOption.length > 0) {
                        this.group.controls[this.config.name].setValue(this.masterOption[0]['value']);
                    }
                }
                this.cdf.detectChanges();
                this.doFunction();
            }
        });
    }
};
CheckboxBoxComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef }
];
CheckboxBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-checkbox-box',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checkbox_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checkbox_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckboxBoxComponent);



/***/ }),

/***/ 45681:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/form-component/custom-dialog/custom-dialog.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomDialogComponent": () => (/* binding */ CustomDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-dialog.component.html */ 79156);
/* harmony import */ var _custom_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-dialog.component.scss */ 44718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);







let CustomDialogComponent = class CustomDialogComponent {
    constructor(fb, modal) {
        this.fb = fb;
        this.modal = modal;
        this.internalConfig = [];
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    save() {
        if (this.selectedData) {
            // console.log(this.selectedData[this.config.valueField]);
            // console.log(this.config,this.selectedData);
            if (this.selectedData[this.config.valueField]) {
                this.group.controls[this.config.name].setValue(this.selectedData[this.config.valueField]);
                for (let afield of this.config.autoFields) {
                    const formControl = this.group.get(afield.value);
                    let input = this.internalConfig.find(x => x.name == afield.value);
                    if (formControl) {
                        if (input) {
                            let value = input.input == 'date' ? moment__WEBPACK_IMPORTED_MODULE_2__(this.selectedData[afield.field]) : this.selectedData[afield.field];
                            formControl.setValue(value);
                        }
                        else
                            formControl.setValue(this.selectedData[afield.field]);
                    }
                }
            }
        }
        this.modal.dismiss();
    }
    selectedUser(event) {
        console.log(event);
        this.selectedData = event;
        // this.modal.close( this.selectedData)
    }
};
CustomDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal }
];
CustomDialogComponent.propDecorators = {
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    internalConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CustomDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-custom-dialog',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_custom_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomDialogComponent);



/***/ }),

/***/ 47594:
/*!*********************************************************************!*\
  !*** ./src/app/pages/form-component/date-box/date-box.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateBoxComponent": () => (/* binding */ DateBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_date_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./date-box.component.html */ 37360);
/* harmony import */ var _date_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-box.component.scss */ 99177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field.interface */ 21558);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_metronic/core */ 39123);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/is-json */ 47975);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);














let DateBoxComponent = class DateBoxComponent {
    constructor(globalFun, prodService, alert) {
        this.globalFun = globalFun;
        this.prodService = prodService;
        this.alert = alert;
        this.unSub = [];
        this.toMinDate = null;
        this.fromMinDate = null;
        this.toMaxDate = null;
        this.fromMaxDate = null;
        this.valid = {
            value: "",
            type: ""
        };
        this.isDisabled = false;
    }
    ngOnInit() {
        this.isDisabled = this.config.disabled;
        this.listenFunData();
        let valid = this.config.validation;
        if (this.config.type != 'policy') {
            for (const iterator of valid) {
                if (iterator.type == _field_interface__WEBPACK_IMPORTED_MODULE_3__.ValidationType.DATE) {
                    let dateType;
                    if (iterator.dateType == _field_interface__WEBPACK_IMPORTED_MODULE_3__.DateType.DAY) {
                        dateType = 'days';
                    }
                    else if (iterator.dateType == _field_interface__WEBPACK_IMPORTED_MODULE_3__.DateType.MONTH) {
                        dateType = 'months';
                    }
                    else {
                        dateType = 'years';
                    }
                    if (iterator.from) {
                        let minDate = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(iterator.from, dateType);
                        this.fromMinDate = minDate.format('YYYY-MM-DD');
                        // this.fromMinDate = { year: parseInt(minDate.format('YYYY')), month: parseInt(minDate.format('M')), day: parseInt(minDate.format('D')) };
                    }
                    else {
                        this.fromMinDate = null;
                    }
                    if (iterator.to) {
                        let toDate = moment__WEBPACK_IMPORTED_MODULE_4__().add(iterator.to, dateType);
                        this.fromMaxDate = toDate.format('YYYY-MM-DD');
                        // this.fromMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                    }
                    else {
                        this.fromMaxDate = null;
                    }
                }
                else if ((iterator.type == _field_interface__WEBPACK_IMPORTED_MODULE_3__.ValidationType.MAX) && iterator.isAge) {
                    let toDate = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(iterator.value, `years`);
                    this.fromMinDate = toDate.format('YYYY-MM-DD');
                    let defVal = this.group.controls[this.config.name].value;
                    // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                    // if (moment(defVal) < moment(this.fromMinDate)) {
                    //   this.alert.activate(iterator.message, "Validation")
                    //   this.group.controls[this.config.name].setValue(null)
                    // }
                }
                else if (iterator.type == _field_interface__WEBPACK_IMPORTED_MODULE_3__.ValidationType.MIN && iterator.isAge) {
                    let toDate = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(iterator.value, `years`);
                    this.fromMaxDate = toDate.format('YYYY-MM-DD');
                    let defVal = this.group.controls[this.config.name].value;
                    // if (moment(defVal) > moment(this.fromMaxDate)) {
                    // this.alert.activate(iterator.message, "Validation")
                    // this.group.controls[this.config.name].setValue(null)
                    // }
                    // this.fromMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                }
            }
        }
        else {
            let prod = this.prodService.createingProd;
            if (prod) {
                if (prod.isAllowBackDate == 'no') {
                    let toDate = moment__WEBPACK_IMPORTED_MODULE_4__();
                    this.fromMinDate = toDate.format('YYYY-MM-DD');
                    this.toMinDate = toDate.format('YYYY-MM-DD');
                    // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                    // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                }
                else if (prod.isAllowBackDate == 'yes') {
                    if (prod.allowDays > 0) {
                        let toDate = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(prod.allowDays, `days`);
                        this.fromMinDate = toDate.format('YYYY-MM-DD');
                        // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                        this.toMinDate = toDate.format('YYYY-MM-DD');
                        // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                    }
                }
                this.listenValid();
            }
        }
        // console.log(this.toMinDate,this.fromMinDate,this.fromMaxDate,this.toMaxDate);
    }
    ngOnDestroy() {
        this.unSub.forEach((sb) => sb.unsubscribe());
    }
    doFunction() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_3__.FUNCTION_TYPE.TRIGGER) {
                this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue());
            }
        }
    }
    listenFunData() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_3__.FUNCTION_TYPE.GETDATA) {
                this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
                    this.group.controls[this.config.name].setValue(res);
                });
            }
        }
    }
    listenValid() {
        this.unSub[1] = this.globalFun.paPolicyValidationResult.subscribe((res) => {
            if (res) {
                let dateType;
                this.valid.value = res.validationValue;
                if (res.validationType == 'DAY') {
                    dateType = 'days';
                }
                else if (res.validationType == 'MONTH') {
                    dateType = 'months';
                }
                else {
                    dateType = 'years';
                }
                this.valid.type = dateType;
                let toDate;
                if (this.group.controls[this.config.name].value) {
                    toDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.group.controls[this.config.name].value).add(res.validationValue, dateType);
                }
                else {
                    toDate = moment__WEBPACK_IMPORTED_MODULE_4__().add(res.validationValue, dateType);
                    this.group.controls[this.config.name].setValue(moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD'));
                }
                this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                this.group.controls[this.config.endName].setValue(toDate.format('YYYY-MM-DD'));
            }
        });
    }
    doValid() {
        let value = this.group.controls[this.config.name].value;
        if (value && this.valid.value) {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.group.controls[this.config.name].value).add(this.valid.value, this.valid.type);
            this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.group.controls[this.config.endName].setValue(toDate.format('YYYY-MM-DD'));
        }
    }
};
DateBoxComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService }
];
DateBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-date-box',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_date_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.CustomDateParserFormatter },
            // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_7__.MY_FORMATS },
        ],
        styles: [_date_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DateBoxComponent);



/***/ }),

/***/ 61578:
/*!*************************************************************************!*\
  !*** ./src/app/pages/form-component/dialog-box/dialog-box.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogBoxComponent": () => (/* binding */ DialogBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dialog_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dialog-box.component.html */ 48395);
/* harmony import */ var _dialog_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-box.component.scss */ 69129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-dialog/custom-dialog.component */ 45681);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field.interface */ 21558);
/* harmony import */ var _nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nrc-popup/nrc-popup.page */ 69523);









let DialogBoxComponent = class DialogBoxComponent {
    constructor(globalFun, modalService) {
        this.globalFun = globalFun;
        this.modalService = modalService;
        this.unSub = [];
        this.isNrc = false;
    }
    ngOnInit() {
        this.listenFunData();
    }
    ngOnDestroy() {
        this.unSub.forEach((sb) => sb.unsubscribe());
    }
    doFunction() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.FUNCTION_TYPE.TRIGGER) {
                this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue());
            }
        }
    }
    listenFunData() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.FUNCTION_TYPE.GETDATA) {
                this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
                    this.group.controls[this.config.name].setValue(res);
                });
            }
        }
    }
    openModal() {
        //console.log(this.editStage);
        if (this.editStage || this.config.disabled)
            return false;
        let modalRef;
        if (this.isNrc) {
            modalRef = this.modalService.open(_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_5__.NrcPopupPage, { size: 'xl', backdrop: false });
        }
        else {
            modalRef = this.modalService.open(_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_3__.CustomDialogComponent, { size: 'xl', backdrop: false });
        }
        modalRef.componentInstance.config = this.config;
        modalRef.componentInstance.group = this.group;
        modalRef.result.then(() => { }, (res) => {
            if (res == 'save') {
                this.doFunction();
            }
        });
    }
};
DialogBoxComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal }
];
DialogBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-dialog-box',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dialog_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dialog_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DialogBoxComponent);



/***/ }),

/***/ 1956:
/*!*****************************************************************!*\
  !*** ./src/app/pages/form-component/dynamic-field.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFieldDirective": () => (/* binding */ DynamicFieldDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _check_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../check-parent */ 87952);
/* harmony import */ var _checkbox_box_checkbox_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-box/checkbox-box.component */ 92938);
/* harmony import */ var _date_box_date_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-box/date-box.component */ 47594);
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ 61578);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field.interface */ 21558);
/* harmony import */ var _file_box_file_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-box/file-box.component */ 10415);
/* harmony import */ var _input_box_input_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-box/input-box.component */ 39714);
/* harmony import */ var _label_box_label_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label-box/label-box.component */ 48080);
/* harmony import */ var _radio_box_radio_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radio-box/radio-box.component */ 36029);
/* harmony import */ var _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-box/select-box.component */ 15660);













const components = {
    // button: FormButtonComponent,
    date: _date_box_date_box_component__WEBPACK_IMPORTED_MODULE_2__.DateBoxComponent,
    input: _input_box_input_box_component__WEBPACK_IMPORTED_MODULE_6__.InputBoxComponent,
    select: _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_9__.SelectBoxComponent,
    radio: _radio_box_radio_box_component__WEBPACK_IMPORTED_MODULE_8__.RadioBoxComponent,
    checkbox: _checkbox_box_checkbox_box_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxBoxComponent,
    file: _file_box_file_box_component__WEBPACK_IMPORTED_MODULE_5__.FileBoxComponent,
    dialog: _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_3__.DialogBoxComponent,
    label: _label_box_label_box_component__WEBPACK_IMPORTED_MODULE_7__.LabelBoxComponent,
};
let DynamicFieldDirective = class DynamicFieldDirective {
    constructor(resolver, container, renderer, cd) {
        this.resolver = resolver;
        this.container = container;
        this.renderer = renderer;
        this.cd = cd;
        this.editStage = false;
        this.i = 0;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.divBreaked = [];
        this.internalConfig = [];
    }
    ngAfterViewInit() {
        this.cd.detectChanges();
    }
    ngOnChanges() {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
            this.component.instance.internalConfig = this.internalConfig;
            if (this.editStage) {
                if (this.config.break === "true") {
                    let element = this.component.location.nativeElement;
                    let w = element.parentElement.getElementsByClassName("custom" + this.config.name);
                    if (w.length > 0) {
                        for (let index = 0; index < w.length; index++) {
                            element.parentNode.removeChild(w[index]);
                        }
                    }
                    // if (w.length === 0) {
                    element.insertAdjacentHTML("beforebegin", "<div class='w-100 custom" + this.config.name + "'></div>");
                    // }
                }
            }
        }
    }
    ngOnDestroy() {
        // if (this.editStage) {
        if (this.component) {
            this.divBreaked.forEach(item => {
                let element = this.component.location.nativeElement;
                if (item.break === "true") {
                    let w = element.parentElement.getElementsByClassName("custom" + item.name);
                    for (let index = 0; index < w.length; index++) {
                        element.parentNode.removeChild(w[index]);
                    }
                }
            });
        }
    }
    ngOnInit() {
        // this.config.show = this.config.input == "label" ? true : this.config.show
        if (this.config.show || this.editStage) {
            if (!components[this.config.input]) {
                const supportedTypes = Object.keys(components).join(', ');
                throw new Error(`Trying to use an unsupported type (${this.config.input}).
        Supported types: ${supportedTypes}`);
            }
            const componetText = this.config.input == 'input' && this.config.type == 'nrc' ? 'dialog' : this.config.input;
            const component = this.resolver.resolveComponentFactory(components[componetText]);
            this.component = this.container.createComponent(component);
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
            this.component.instance.internalConfig = this.internalConfig;
            if (this.config.input == 'input' && this.config.type == 'nrc') {
                this.component.instance.isNrc = true;
                this.component.instance.editStage = this.editStage;
            }
            if (this.config.input == 'dialog' || this.config.input == 'file') {
                this.component.instance.editStage = this.editStage;
            }
            let element = this.component.location.nativeElement;
            element.classList.toggle(`col-xs-${this.config.size}`);
            element.classList.toggle(`col-sm-${this.config.mdSize}`);
            element.classList.toggle(`col-lg-${this.config.mdSize}`);
            if (!this.editStage && this.config.input != "label") {
                this.component.instance.doFunction();
                if (this.config.dependency) {
                    if (!this.checkDep(this.config.dependency)) {
                        element.classList.add(`show-off`);
                    }
                }
            }
            if (this.editStage === true) {
                this.renderer.listen(this.component.location.nativeElement, 'click', (event) => { this.clickedEvent(); });
            }
            if (this.config.break === "true") {
                // element.classList.toggle(`align-self-start`);
                let w = element.parentElement.getElementsByClassName("custom" + this.config.name);
                if (w.length === 0) {
                    element.insertAdjacentHTML("beforebegin", "<div class='w-100 custom" + this.config.name + "'></div>");
                }
            }
            else {
                let w = element.parentElement.getElementsByClassName("custom" + this.config.name);
                if (w.length > 0) {
                    element.parentNode.removeChild(w[0]);
                }
            }
        }
    }
    checkDep(dependency) {
        return (0,_check_parent__WEBPACK_IMPORTED_MODULE_0__.checkVaidDep)(dependency, this.group);
    }
    clickedEvent() {
        if (this.editStage === true) {
            this.onEdit.emit(this.index);
        }
    }
    ngAfterContentChecked() {
        // this.cdRef.detectChanges();
        if (!this.editStage && this.config.show && this.config.input != "label") {
            if (this.config.dependency) {
                let element = this.component.location.nativeElement;
                if (this.checkDep(this.config.dependency)) {
                    if (this.config.master == 'true') {
                        let dependency = this.config.dependency;
                        this.component.instance.reGetOption(this.group.getRawValue()[dependency.parentName]);
                    }
                    element.classList.remove(`show-off`);
                    if (this.component.instance.group) {
                        this.component.instance.group.controls[this.config.name].setValidators(null);
                        let valid = [];
                        if (this.config.validation) {
                            let validation = this.config.validation;
                            for (let val of validation) {
                                if (val.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.REQUIRED) {
                                    valid.push(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required);
                                }
                                else if (val.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.MAX && this.config.type != 'date') {
                                    let validat = this.config.type == 'number' ? _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.max(val.value) : _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(val.value);
                                    valid.push(validat);
                                }
                                else if (val.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.MIN && this.config.type != 'date') {
                                    let validat = this.config.type == 'number' ? _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.max(val.value) : _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(val.value);
                                    valid.push(validat);
                                }
                            }
                        }
                        if (this.config.input == 'input' && this.config.type == 'email') {
                            valid.push(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email);
                        }
                        this.component.instance.group.controls[this.config.name].setValidators(valid);
                        this.component.instance.group.controls[this.config.name].updateValueAndValidity();
                    }
                }
                else {
                    if (this.component.instance.group) {
                        this.component.instance.group.controls[this.config.name].setValue("");
                        this.component.instance.group.controls[this.config.name].setValidators(null);
                        this.component.instance.group.controls[this.config.name].updateValueAndValidity();
                    }
                    element.classList.add(`show-off`);
                }
            }
        }
    }
};
DynamicFieldDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
DynamicFieldDirective.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    editStage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    onEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    divBreaked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    internalConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
DynamicFieldDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive)({
        selector: '[dynamicField]'
    })
], DynamicFieldDirective);



/***/ }),

/***/ 8246:
/*!****************************************************************!*\
  !*** ./src/app/pages/form-component/dynamic-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormComponent": () => (/* binding */ DynamicFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/global-fun.service */ 73762);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field.interface */ 21558);






let DynamicFormComponent = class DynamicFormComponent {
    constructor(fb, globalFun) {
        this.fb = fb;
        this.globalFun = globalFun;
        this.config = [];
        this.tempData = {};
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.internalConfig = [];
    }
    get controls() { return this.internalConfig.filter(({ type }) => type !== 'button'); }
    get valid() { return this.form.valid; }
    get value() { return this.form.value; }
    ngOnInit() {
        this.internalConfig = JSON.parse(JSON.stringify(this.config));
        this.form = this.createGroup();
    }
    createGroup(reCreate = false) {
        const group = this.fb.group({});
        let i = 0;
        this.controls.forEach(control => {
            i += 1;
            if (control.input != 'label' && control.input != 'underline') {
                group.addControl(control.name, this.createControl(control));
                if (control.input == 'date' && control.type == 'policy') {
                    group.addControl(control.endName, this.createControl(control, 'policy'));
                }
            }
        });
        return group;
    }
    createControl(config, type) {
        let { disabled, value, name, validation, endName } = config;
        let valid = [];
        if (this.editStage || config.input == _field_interface__WEBPACK_IMPORTED_MODULE_2__.InputBoxType.DIALOG || (config.input == _field_interface__WEBPACK_IMPORTED_MODULE_2__.InputBoxType.INPUT && config.type == "nrc")) {
            disabled = true;
        }
        if (validation && config.show) {
            for (let val of validation) {
                if (val.type == _field_interface__WEBPACK_IMPORTED_MODULE_2__.ValidationType.REQUIRED) {
                    valid.push(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
                }
                else if (val.type == _field_interface__WEBPACK_IMPORTED_MODULE_2__.ValidationType.MAX && config.type != 'date') {
                    let validat = config.type == 'number' || config.type == 'currency' ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(val.value) : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(val.value);
                    valid.push(validat);
                }
                else if (val.type == _field_interface__WEBPACK_IMPORTED_MODULE_2__.ValidationType.MIN && config.type != 'date') {
                    let validat = config.type == 'number' || config.type == 'currency' ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(val.value) : _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(val.value);
                    valid.push(validat);
                }
            }
        }
        if (config.input == 'input' && config.type == 'email' && config.show) {
            valid.push(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email);
        }
        let keyName = type ? endName : name;
        if (config.input == 'file') {
            let defVal = this.tempData[name] ? this.tempData[name] || null : null;
            return this.fb.control({ disabled: true, value: defVal }, [...valid]);
        }
        let defVal = this.tempData[keyName] ? this.tempData[keyName] : value;
        config.value = defVal;
        if (config.input == 'date')
            defVal = defVal ? moment__WEBPACK_IMPORTED_MODULE_0__(defVal) : defVal;
        return this.fb.control({ disabled: disabled, value: defVal || null }, [...valid]);
    }
    handleSubmit() {
        if (this.form.invalid)
            return false;
        this.submit.emit(this.form.getRawValue());
        return true;
    }
    reCreateFrom() {
        this.internalConfig = JSON.parse(JSON.stringify(this.config));
        this.form = this.createGroup(true);
        // if (i == this.controls.length && reCreate) {
        // console.log("trgi");
        this.globalFun.optionResultChange.next(true);
        // }
    }
    newFormCreate(controls, temp) {
        let tempControls = JSON.parse(JSON.stringify(controls));
        // console.log(controls);
        this.internalConfig = tempControls;
        const group = this.fb.group({});
        if (temp)
            this.tempData = temp;
        tempControls.forEach(control => {
            if (control.input != 'label' && control.input != 'underline') {
                group.addControl(control.name, this.createControl(control));
                if (control.input == 'date' && control.type == 'policy') {
                    group.addControl(control.endName, this.createControl(control, 'policy'));
                }
            }
        });
        this.form = group;
    }
    Edited(event) {
        this.onEdit.emit(event);
    }
    getBreaked() {
        return this.config.filter(x => x.break === 'true');
    }
};
DynamicFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_1__.GlobalFunctionService }
];
DynamicFormComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    tempData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    onEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    editStage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
DynamicFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        exportAs: 'dynamicForm',
        selector: 'dynamic-form',
        template: `
    <form
      class="dynamic-form row" style="align-items: center"
      [formGroup]="form">
      <ng-container *ngFor="let field of internalConfig;let i = index">
      <ng-container
        *ngIf="field.input !== 'underline';"
        dynamicField
        [config]="field"
        [internalConfig]="internalConfig"
        [index]="i"
        [group]="form"
        (onEdit)="Edited($event)"
        [editStage]="editStage"
        [divBreaked]="getBreaked()"
        >
      </ng-container>
      <ng-container *ngIf="field.input == 'underline';">
        <div class="w-100"></div>
        <div class='col-12' (click)="Edited(i)">
        <hr >
        </div>
      </ng-container>
      </ng-container>
    </form>
  `
    })
], DynamicFormComponent);



/***/ }),

/***/ 83540:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/form-component/edit-button-modal/edit-button-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditButtonModalComponent": () => (/* binding */ EditButtonModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_button_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-button-modal.component.html */ 63754);
/* harmony import */ var _edit_button_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-button-modal.component.scss */ 13201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);






let EditButtonModalComponent = class EditButtonModalComponent {
    constructor(fb, modal) {
        this.fb = fb;
        this.modal = modal;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadConfig();
    }
    loadConfig() {
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            label: [this.config.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            labelMM: [this.config.labelMM],
            type: [this.config.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            size: [this.config.size, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(2)])],
            position: [this.config.position],
            fill: [this.config.fill + '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            color: [this.config.color, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
        });
    }
    save() {
        if (this.formGroup.valid) {
            this.config = Object.assign(Object.assign({}, this.formGroup.value), { fill: this.formGroup.value.fill == 'true' ? true : false });
            this.modal.dismiss({ data: this.config, type: 'save' });
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
};
EditButtonModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
EditButtonModalComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
EditButtonModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-edit-button-modal',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_button_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_button_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditButtonModalComponent);



/***/ }),

/***/ 93724:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/form-component/edit-input-modal/edit-input-modal.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInputModalComponent": () => (/* binding */ EditInputModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_input_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-input-modal.component.html */ 74273);
/* harmony import */ var _edit_input_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-input-modal.component.scss */ 75377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 41082);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 31607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/valid-all-feild */ 53489);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/master-data/master-data.service */ 26697);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field.interface */ 21558);










let EditInputModalComponent = class EditInputModalComponent {
    constructor(fb, modal, masterData) {
        this.fb = fb;
        this.modal = modal;
        this.masterData = masterData;
        this.activePage = 1;
        this.isTable = false;
        this.isParty = false;
        this.optionData = [];
        this.parentValue = [{ 'data0': "" }];
        this.subscriptions = [];
        this.masterType = [];
        this.functionName = [];
        this.formatter = (result) => result;
        this.search = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(term => term === '' ? []
            : this.masterType.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        this.searchFunName = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(term => term === '' ? []
            : this.functionName.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
    }
    ngOnInit() {
        this.subscriptions[0] = this.masterData.masterType$.subscribe((res) => {
            this.masterType = res || [];
        });
        this.masterData.getDataByType('INPUT_FUN').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((res) => {
            return res.map(x => x.codeName);
        })).toPromise().then((res) => {
            this.functionName = res;
        });
        this.optformGroup = this.fb.group({
            text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            textMM: [''],
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            field: [''],
        });
        this.parentFormGroup = this.fb.group({
            isParent: [false],
            show: [false],
            isRelated: [false],
            isArray: [false],
            parentName: [''],
            relatedField: ['parentId'],
        });
        this.validFormGroup = this.fb.group({
            requiredInp: [false],
            requireMessage: [''],
            requireMessageMM: [''],
            minInp: [false],
            isdob: [false],
            minMessage: [''],
            minMessageMM: [''],
            minValue: [''],
            maxInp: [false],
            maxMessage: [''],
            maxMessageMM: [''],
            maxValue: [''],
            from: [''],
            to: [''],
            dateType: ['day'],
            dateMessage: [''],
            dateMessageMM: ['']
        });
        this.funFormGroup = this.fb.group({
            isFun: [false],
            funName: [''],
            type: ['getdata'],
        });
        this.loadConfig();
        this.initValid();
        this.initParent();
        this.initFunction();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    initValid() {
        if (this.config.validation) {
            this.config.validation.forEach(x => {
                if (x.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.REQUIRED) {
                    this.validFormGroup.controls['requiredInp'].setValue(true);
                    this.validFormGroup.controls['requireMessage'].setValue(x.message);
                    this.validFormGroup.controls['requireMessageMM'].setValue(x.messageMM);
                }
                else if (x.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.MIN) {
                    this.validFormGroup.controls['minInp'].setValue(true);
                    this.validFormGroup.controls['minValue'].setValue(x.value);
                    this.validFormGroup.controls['minMessage'].setValue(x.message);
                    this.validFormGroup.controls['minMessageMM'].setValue(x.messageMM);
                }
                else if (x.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.MAX) {
                    this.validFormGroup.controls['maxInp'].setValue(true);
                    this.validFormGroup.controls['maxValue'].setValue(x.value);
                    this.validFormGroup.controls['maxMessage'].setValue(x.message);
                    this.validFormGroup.controls['maxMessageMM'].setValue(x.messageMM);
                }
                // if (this.input == 'date' && (x.type == ValidationType.MIN || x.type == ValidationType.MAX)) {
                // }
                if (x.to || x.from) {
                    this.validFormGroup.controls['to'].setValue(x.to);
                    this.validFormGroup.controls['from'].setValue(x.from);
                    this.validFormGroup.controls['dateMessage'].setValue(x.message);
                    this.validFormGroup.controls['dateMessageMM'].setValue(x.messageMM);
                    this.validFormGroup.controls['dateType'].setValue(x.dateType);
                }
            });
            if (this.config.validation.length > 0) {
                this.validFormGroup.controls['isdob'].setValue(this.config.validation[0].isAge);
            }
        }
    }
    initParent() {
        if (this.config.dependency) {
            const parent = this.config.dependency;
            if (parent.parentName) {
                this.parentFormGroup.setValue({
                    isParent: true,
                    show: parent.show,
                    isRelated: parent.isRelated,
                    isArray: parent.isArray,
                    parentName: parent.parentName,
                    relatedField: parent.relatedField,
                });
            }
        }
    }
    initFunction() {
        if (this.config.isFun) {
            const func = this.config.inpFunction;
            if (func.funName) {
                this.funFormGroup.setValue({
                    isFun: true,
                    funName: func.funName,
                    type: func.type
                });
            }
        }
    }
    loadConfig() {
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            label: [this.config.label, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            labelMM: [this.config.labelMM],
            name: [{ value: this.config.name, disabled: this.config.name ? true : false }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("^[a-z_]*$")])],
            coreName: [this.config.coreName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            isLabel: [this.config.isLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            size: [this.config.size, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(2)])],
            mdSize: [this.config.mdSize, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(2)])],
            lgSize: [this.config.lgSize, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(2)])],
            inlineStyle: [this.config.inlineStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            labelSize: [this.config.labelSize, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(2)])],
            inputSize: [this.config.inputSize, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(2)])],
            show: [this.config.show, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            master: [this.config.master ? this.config.master : 'false', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            readonly: [this.config.readonly, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            disabled: [this.config.disabled, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            placeholder: [this.config.placeholder],
            placeholderMM: [this.config.placeholderMM],
            break: [this.config.break],
            masterData: [this.config.masterData],
            value: [this.config.value || ""],
            isHideView: [this.config.isHideView || false],
            policyterm: [this.config.policyterm || false],
            tableTitle: [this.config.tableTitle || ""],
            party: [this.config.party || false]
        });
        if (this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.INPUT || this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.FILE || this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.DIALOG || this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.DATE) {
            let def = this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.DATE ? this.config.type || "date" : this.config.type || "";
            this.formGroup.addControl('type', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(def, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
            if (this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.DATE) {
                this.changeDateType(this.config.type || 'date');
            }
        }
        else if (this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.SELECT || this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.CHECKBOX || this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.RADIO) {
            if (this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.SELECT)
                this.formGroup.addControl('type', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.type || "select", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
            this.formGroup.addControl('multi', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.multi ? this.config.multi : false, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
            // this.formGroup.addControl('options', new FormControl(this.config.options, Validators.required));
            this.formGroup.addControl('masterData', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.masterData || ""));
            this.formGroup.addControl('valueField', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.valueField || "codeId"));
            this.formGroup.addControl('showField', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.showField || "codeName"));
            this.optionData = this.config.options ? this.config.options : [];
        }
        if (this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.DIALOG) {
            this.optformGroup.controls['field'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
            this.formGroup.addControl('valueField', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.valueField || "codeId", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
            this.optionData = this.config.autoFields ? this.config.autoFields : [];
        }
        if (this.config.dependency) {
            if (this.config.dependency.isArray) {
                this.parentValue = [];
                this.config.dependency.value.forEach((x, index) => {
                    let data = {};
                    data['data' + index] = x;
                    this.parentValue.push(data);
                });
            }
            else {
                this.parentValue = [{ "data0": this.config.dependency.value }];
            }
        }
    }
    changePolicy() {
        if (this.formGroup.value['type'] != 'select') {
            this.formGroup.controls['master'].setValue('true');
            if (this.formGroup.value['type'] == 'policy')
                this.formGroup.controls['policyterm'].setValue(true);
            else
                this.formGroup.controls['policyterm'].setValue(false);
        }
        else {
            this.formGroup.controls['master'].setValue('false');
            this.formGroup.controls['policyterm'].setValue(false);
        }
    }
    changeDateType(value) {
        //console.log(value);
        if (value != 'date') {
            this.formGroup.addControl('endName', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.endName || "", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
            this.formGroup.addControl('endCoreName', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.endCoreName || "", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
            this.formGroup.addControl('endLabel', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.endLabel || "", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
            this.formGroup.addControl('endLabelMM', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.config.endLabelMM || ""));
            // this.formGroup.addControl('parentDateLimit', new FormControl(this.config.parentDateLimit || "", Validators.required));
        }
        else {
            this.formGroup.removeControl('endName');
            this.formGroup.removeControl('endCoreName');
            this.formGroup.removeControl('endLabel');
            this.formGroup.removeControl('endLabelMM');
            // this.formGroup.removeControl('parentDateLimit');
        }
        this.formGroup.updateValueAndValidity();
    }
    submitValid() {
    }
    removeValue(index) {
        this.parentValue.splice(index, 1);
    }
    addValue() {
        let i = this.parentValue.length;
        let data = {};
        data['data' + i] = "";
        this.parentValue.push(data);
    }
    save() {
        if (this.formGroup.valid) {
            // delete this.formGroup.value.master
            this.config.validation = [];
            const validValue = this.validFormGroup.value;
            const parentValue = this.parentFormGroup.value;
            const funValue = this.funFormGroup.value;
            // validation
            if (validValue.requiredInp) {
                let valid = { type: _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.REQUIRED, messageMM: validValue.requireMessageMM, message: validValue.requireMessage, isAge: validValue.isdob };
                this.config.validation.push(valid);
            }
            if (validValue.minInp) {
                let valid = { type: _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.MIN, messageMM: validValue.minMessageMM, message: validValue.minMessage, value: validValue.minValue, isAge: validValue.isdob };
                this.config.validation.push(valid);
            }
            if (validValue.maxInp) {
                let valid = { type: _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.MAX, messageMM: validValue.maxMessageMM, message: validValue.maxMessage, value: validValue.maxValue, isAge: validValue.isdob };
                this.config.validation.push(valid);
            }
            if (this.input == 'date' && !validValue.isdob) {
                let valid = { type: _field_interface__WEBPACK_IMPORTED_MODULE_4__.ValidationType.DATE, messageMM: validValue.dateMessageMM, message: validValue.dateMessage, to: validValue.to, from: validValue.from, dateType: validValue.dateType, isAge: validValue.isdob };
                this.config.validation.push(valid);
            }
            if (this.formGroup.value.multi) {
                this.formGroup.value.multi = this.formGroup.value.multi == 'true' ? true : false;
            }
            // validation
            // parent Dependency
            if (parentValue.isParent && parentValue.parentName) {
                let value;
                if (parentValue.isArray) {
                    value = [];
                    this.parentValue.forEach((x, index) => {
                        value.push(x['data' + index]);
                    });
                }
                else {
                    value = this.parentValue[0]['data0'];
                }
                this.config.dependency = {
                    parentName: parentValue.parentName,
                    value: value,
                    isArray: parentValue.isArray,
                    isRelated: parentValue.isRelated,
                    relatedField: parentValue.relatedField,
                    show: parentValue.show
                };
            }
            // parent Dependency
            // input Function
            if (funValue.isFun && funValue.funName) {
                this.config.isFun = true;
                this.config.inpFunction = {
                    funName: funValue.funName,
                    type: funValue.type
                };
            }
            else {
                this.config.isFun = false;
            }
            // 
            this.config = Object.assign(Object.assign(Object.assign({}, this.config), this.formGroup.getRawValue()), { options: this.optionData, input: this.input });
            if (this.input == _field_interface__WEBPACK_IMPORTED_MODULE_4__.InputBoxType.DIALOG) {
                this.config.options = null;
                this.config.autoFields = this.optionData;
            }
            this.modal.dismiss({ data: this.config, type: 'save' });
        }
        else {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__.validateAllFields)(this.formGroup);
        }
    }
    changeLabelStyle(values) {
        if (values.currentTarget.checked) {
            this.formGroup.controls.inputSize.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(2)]);
            this.formGroup.controls.labelSize.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(2)]);
        }
        else {
            this.formGroup.controls.inputSize.setValidators(null);
            this.formGroup.controls.labelSize.setValidators(null);
        }
        this.formGroup.controls.inputSize.updateValueAndValidity();
        this.formGroup.controls.labelSize.updateValueAndValidity();
    }
    setActiveTab(active) {
        this.activePage = active;
    }
    changeDataType(event) {
        if (this.formGroup.value.master == 'true') {
            this.formGroup.controls.valueField.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator]);
            this.formGroup.controls.showField.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator]);
            this.formGroup.controls.masterData.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator]);
        }
        else {
            this.formGroup.controls.valueField.setValidators(null);
            this.formGroup.controls.showField.setValidators(null);
            this.formGroup.controls.masterData.setValidators(null);
        }
        this.formGroup.controls.valueField.updateValueAndValidity();
        this.formGroup.controls.showField.updateValueAndValidity();
        this.formGroup.controls.masterData.updateValueAndValidity();
    }
    getActiveTabCSSClass(tabId) {
        if (tabId !== this.activePage) {
            return '';
        }
        return 'active';
    }
    // helpers for View
    isControlValid(controlName, type) {
        const control = type == 'opt' ? this.optformGroup.controls[controlName] : this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName, type) {
        const control = type == 'opt' ? this.optformGroup.controls[controlName] : this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName, type) {
        const control = type == 'opt' ? this.optformGroup.controls[controlName] : this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName, type) {
        const control = type == 'opt' ? this.optformGroup.controls[controlName] : this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
    delete(index) {
        let delVal = this.optionData[index].value;
        if (delVal == this.formGroup.value.value) {
            this.formGroup.controls['value'].setValue("");
        }
        this.optionData.splice(index, 1);
    }
    submit() {
        this.optionData.push(this.optformGroup.value);
        this.optformGroup.reset();
    }
};
EditInputModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService }
];
EditInputModalComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isParty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
EditInputModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit-input-modal',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_input_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_input_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditInputModalComponent);



/***/ }),

/***/ 82739:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/form-component/export-config-modal/export-config-modal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportConfigModalComponent": () => (/* binding */ ExportConfigModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_export_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./export-config-modal.component.html */ 85198);
/* harmony import */ var _export_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./export-config-modal.component.scss */ 80967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);






let ExportConfigModalComponent = class ExportConfigModalComponent {
    constructor(fb, modal) {
        this.fb = fb;
        this.modal = modal;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadConfig();
    }
    loadConfig() {
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            label: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            simple: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
        });
        let valueString = "";
        if (this.config.controls.length > 0) {
            let tempArr = JSON.parse(JSON.stringify(this.config.controls));
            valueString = tempArr.map(e => e.name).join(", ");
        }
        if (this.config.buttons.length > 0) {
            let tempArr = JSON.parse(JSON.stringify(this.config.buttons));
            let conString = tempArr.map(e => e.label).join(", ");
            valueString = valueString ? valueString + ', ' + conString : conString;
        }
        this.formGroup.controls['simple'].setValue(valueString);
    }
    save() {
        if (this.formGroup.valid) {
            const data = Object.assign(Object.assign({}, this.config), this.formGroup.getRawValue());
            this.modal.dismiss({ data: Object.assign({}, data), type: 'save' });
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
};
ExportConfigModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
ExportConfigModalComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ExportConfigModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-export-config-modal',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_export_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_export_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExportConfigModalComponent);



/***/ }),

/***/ 21558:
/*!*********************************************************!*\
  !*** ./src/app/pages/form-component/field.interface.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTION_TYPE": () => (/* binding */ FUNCTION_TYPE),
/* harmony export */   "FormatLoan": () => (/* binding */ FormatLoan),
/* harmony export */   "ValidationType": () => (/* binding */ ValidationType),
/* harmony export */   "DateType": () => (/* binding */ DateType),
/* harmony export */   "InputType": () => (/* binding */ InputType),
/* harmony export */   "ActionType": () => (/* binding */ ActionType),
/* harmony export */   "BtnPostion": () => (/* binding */ BtnPostion),
/* harmony export */   "BtnColor": () => (/* binding */ BtnColor),
/* harmony export */   "InputBoxType": () => (/* binding */ InputBoxType)
/* harmony export */ });
var FUNCTION_TYPE;
(function (FUNCTION_TYPE) {
    FUNCTION_TYPE["TRIGGER"] = "trigger";
    FUNCTION_TYPE["GETDATA"] = "getdata";
})(FUNCTION_TYPE || (FUNCTION_TYPE = {}));
class FormatLoan {
}
var ValidationType;
(function (ValidationType) {
    ValidationType["REQUIRED"] = "required";
    ValidationType["MIN"] = "min";
    ValidationType["MAX"] = "max";
    ValidationType["DATE"] = "date";
})(ValidationType || (ValidationType = {}));
var DateType;
(function (DateType) {
    DateType["WEEK"] = "week";
    DateType["MONTH"] = "month";
    DateType["DAY"] = "day";
    DateType["YEAR"] = "year";
})(DateType || (DateType = {}));
var InputType;
(function (InputType) {
    InputType["TEXT"] = "text";
    InputType["EMAIL"] = "email";
    InputType["PHONE"] = "tel";
    InputType["NUMBER"] = "number";
    InputType["CRRENCY"] = "currency";
    InputType["TEXTAREA"] = "textarea";
    InputType["NRC"] = "nrc";
})(InputType || (InputType = {}));
var ActionType;
(function (ActionType) {
    ActionType["SUBMIT"] = "submit";
    ActionType["NEXT"] = "next";
    ActionType["PREVIOUS"] = "previous";
    ActionType["RESET"] = "reset";
})(ActionType || (ActionType = {}));
var BtnPostion;
(function (BtnPostion) {
    BtnPostion["NONE"] = "";
    BtnPostion["CENTER"] = "mx-auto";
    BtnPostion["LEFT"] = "ml-auto";
    BtnPostion["RIGHT"] = "mr-auto";
})(BtnPostion || (BtnPostion = {}));
var BtnColor;
(function (BtnColor) {
    BtnColor["PRIMARY"] = "primary";
    BtnColor["SECONDARY"] = "secondary";
    BtnColor["SUCCESS"] = "success";
    BtnColor["WARNING"] = "warning";
    BtnColor["DANGER"] = "danger";
    BtnColor["INFO"] = "info";
    BtnColor["DARK"] = "dark";
    BtnColor["LIGHT"] = "light";
})(BtnColor || (BtnColor = {}));
var InputBoxType;
(function (InputBoxType) {
    InputBoxType["INPUT"] = "input";
    InputBoxType["CHECKBOX"] = "checkbox";
    InputBoxType["DIALOG"] = "dialog";
    InputBoxType["FILE"] = "file";
    InputBoxType["RADIO"] = "radio";
    InputBoxType["SELECT"] = "select";
    InputBoxType["DATE"] = "date";
})(InputBoxType || (InputBoxType = {}));


/***/ }),

/***/ 10415:
/*!*********************************************************************!*\
  !*** ./src/app/pages/form-component/file-box/file-box.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileBoxComponent": () => (/* binding */ FileBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_file_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./file-box.component.html */ 36101);
/* harmony import */ var _file_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-box.component.scss */ 55385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_get_file_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/get-file-reader */ 31248);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_metronic/core/services/attachment-data.service */ 63002);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../field.interface */ 21558);









let FileBoxComponent = class FileBoxComponent {
    constructor(globalFun, fileUpload, loading) {
        this.globalFun = globalFun;
        this.fileUpload = fileUpload;
        this.loading = loading;
        this.unSub = [];
    }
    ngOnInit() {
        this.listenFunData();
    }
    ngOnDestroy() {
        this.unSub.forEach((sb) => sb.unsubscribe());
    }
    doFunction(event) {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_6__.FUNCTION_TYPE.TRIGGER) {
                this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue());
            }
        }
        this.handleUpload(event);
    }
    handleUpload(event) {
        if (event) {
            const file = event.target.files[0];
            console.log(file);
            const reader = (0,_core_get_file_reader__WEBPACK_IMPORTED_MODULE_2__.getFileReader)();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // console.log(reader);
                if (reader.result) {
                    let base64 = reader.result.toString().split(",")[1];
                    let data = {
                        fileStr: base64,
                        fileName: file.name,
                        fileType: file.type,
                        fileSize: file.size,
                        contentType: file.type,
                        fileExtension: file.name.split('.').pop(),
                    };
                    this.loading.activate();
                    this.fileUpload.save(data).toPromise().then((res) => {
                        if (res) {
                            this.group.controls[this.config.name].setValue(`[${res}].${data.fileName}`);
                        }
                        this.loading.deactivate();
                    }).catch(e => {
                        this.loading.deactivate();
                    });
                }
                ;
            };
        }
    }
    listenFunData() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_6__.FUNCTION_TYPE.GETDATA) {
                this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
                    this.group.controls[this.config.name].setValue(res);
                });
            }
        }
    }
    openFile() {
        if (this.editStage)
            return false;
        this.selectedFileEl.nativeElement.click();
    }
};
FileBoxComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentUploadService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
FileBoxComponent.propDecorators = {
    selectedFileEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['selectedFile',] }]
};
FileBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-file-box',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_file_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_file_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FileBoxComponent);

// "fileName": "testpdf",
//     "fileType": "pdf",
//     "fileSize": "308,514",
//     "contentType": "application/pdf",
//     "fileExtension":"pdf"


/***/ }),

/***/ 7838:
/*!***************************************************************!*\
  !*** ./src/app/pages/form-component/form-component.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponentModule": () => (/* binding */ FormComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _input_box_input_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-box/input-box.component */ 39714);
/* harmony import */ var _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-box/select-box.component */ 15660);
/* harmony import */ var _radio_box_radio_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-box/radio-box.component */ 36029);
/* harmony import */ var _checkbox_box_checkbox_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox-box/checkbox-box.component */ 92938);
/* harmony import */ var _file_box_file_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-box/file-box.component */ 10415);
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ 61578);
/* harmony import */ var _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-field.directive */ 1956);
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic-form.component */ 8246);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ 36109);
/* harmony import */ var _button_box_button_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button-box/button-box.component */ 77720);
/* harmony import */ var _edit_button_modal_edit_button_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-button-modal/edit-button-modal.component */ 83540);
/* harmony import */ var _edit_input_modal_edit_input_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-input-modal/edit-input-modal.component */ 93724);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ 63387);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/checkbox */ 46598);
/* harmony import */ var _page_config_modal_page_config_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-config-modal/page-config-modal.component */ 66798);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom-dialog/custom-dialog.component */ 45681);
/* harmony import */ var _date_box_date_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./date-box/date-box.component */ 47594);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ 76393);
/* harmony import */ var _export_config_modal_export_config_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./export-config-modal/export-config-modal.component */ 82739);
/* harmony import */ var _import_config_modal_import_config_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./import-config-modal/import-config-modal.component */ 77365);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _form_view_modal_form_view_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form-view-modal/form-view-modal.component */ 75991);
/* harmony import */ var _label_config_modal_label_config_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./label-config-modal/label-config-modal.component */ 31715);
/* harmony import */ var _label_box_label_box_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./label-box/label-box.component */ 48080);
/* harmony import */ var _nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nrc-popup/nrc-popup.page */ 69523);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/input */ 57574);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-currency */ 40287);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _print_view_box_print_view_box_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./print-view-box/print-view-box.component */ 99919);
/* harmony import */ var _static_print_static_print_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static-print/static-print.module */ 72880);
/* harmony import */ var _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../customer-list/customer-list.share.module */ 90860);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! angularx-qrcode */ 68586);
/* harmony import */ var _custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./custom-input-alert/custom-input-alert.component */ 91471);









































let FormComponentModule = class FormComponentModule {
};
FormComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.NgModule)({
        declarations: [
            _input_box_input_box_component__WEBPACK_IMPORTED_MODULE_0__.InputBoxComponent,
            _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_1__.SelectBoxComponent,
            _radio_box_radio_box_component__WEBPACK_IMPORTED_MODULE_2__.RadioBoxComponent,
            _checkbox_box_checkbox_box_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxBoxComponent,
            _file_box_file_box_component__WEBPACK_IMPORTED_MODULE_4__.FileBoxComponent,
            _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_5__.DialogBoxComponent,
            _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_6__.DynamicFieldDirective,
            _dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__.DynamicFormComponent,
            _button_box_button_box_component__WEBPACK_IMPORTED_MODULE_8__.ButtonBoxComponent,
            _edit_button_modal_edit_button_modal_component__WEBPACK_IMPORTED_MODULE_9__.EditButtonModalComponent,
            _edit_input_modal_edit_input_modal_component__WEBPACK_IMPORTED_MODULE_10__.EditInputModalComponent,
            _page_config_modal_page_config_modal_component__WEBPACK_IMPORTED_MODULE_12__.PageConfigModalComponent,
            _custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_13__.CustomDialogComponent,
            _custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_25__.CustomInputAlertComponent,
            _date_box_date_box_component__WEBPACK_IMPORTED_MODULE_14__.DateBoxComponent,
            _import_config_modal_import_config_modal_component__WEBPACK_IMPORTED_MODULE_16__.ImportConfigModalComponent,
            _export_config_modal_export_config_modal_component__WEBPACK_IMPORTED_MODULE_15__.ExportConfigModalComponent,
            // SortConfigModalComponent
            _form_view_modal_form_view_modal_component__WEBPACK_IMPORTED_MODULE_18__.FormViewModalComponent,
            _label_config_modal_label_config_modal_component__WEBPACK_IMPORTED_MODULE_19__.LabelConfigModalComponent,
            _label_box_label_box_component__WEBPACK_IMPORTED_MODULE_20__.LabelBoxComponent,
            _nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_21__.NrcPopupPage,
            _print_view_box_print_view_box_component__WEBPACK_IMPORTED_MODULE_22__.PrintViewBoxComponent
            // CusMatDatePicker,
        ],
        exports: [
            _input_box_input_box_component__WEBPACK_IMPORTED_MODULE_0__.InputBoxComponent,
            _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_1__.SelectBoxComponent,
            _radio_box_radio_box_component__WEBPACK_IMPORTED_MODULE_2__.RadioBoxComponent,
            _checkbox_box_checkbox_box_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxBoxComponent,
            _file_box_file_box_component__WEBPACK_IMPORTED_MODULE_4__.FileBoxComponent,
            _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_5__.DialogBoxComponent,
            _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_6__.DynamicFieldDirective,
            _dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__.DynamicFormComponent,
            _button_box_button_box_component__WEBPACK_IMPORTED_MODULE_8__.ButtonBoxComponent,
            _edit_button_modal_edit_button_modal_component__WEBPACK_IMPORTED_MODULE_9__.EditButtonModalComponent,
            _edit_input_modal_edit_input_modal_component__WEBPACK_IMPORTED_MODULE_10__.EditInputModalComponent,
            _page_config_modal_page_config_modal_component__WEBPACK_IMPORTED_MODULE_12__.PageConfigModalComponent,
            _custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_13__.CustomDialogComponent,
            _custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_25__.CustomInputAlertComponent,
            _date_box_date_box_component__WEBPACK_IMPORTED_MODULE_14__.DateBoxComponent,
            _export_config_modal_export_config_modal_component__WEBPACK_IMPORTED_MODULE_15__.ExportConfigModalComponent,
            _import_config_modal_import_config_modal_component__WEBPACK_IMPORTED_MODULE_16__.ImportConfigModalComponent,
            // SortConfigModalComponent
            _form_view_modal_form_view_modal_component__WEBPACK_IMPORTED_MODULE_18__.FormViewModalComponent,
            _label_config_modal_label_config_modal_component__WEBPACK_IMPORTED_MODULE_19__.LabelConfigModalComponent,
            _label_box_label_box_component__WEBPACK_IMPORTED_MODULE_20__.LabelBoxComponent,
            _nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_21__.NrcPopupPage,
            _print_view_box_print_view_box_component__WEBPACK_IMPORTED_MODULE_22__.PrintViewBoxComponent
            // CusMatDatePicker
        ],
        entryComponents: [
            _edit_button_modal_edit_button_modal_component__WEBPACK_IMPORTED_MODULE_9__.EditButtonModalComponent,
            _edit_input_modal_edit_input_modal_component__WEBPACK_IMPORTED_MODULE_10__.EditInputModalComponent,
            _page_config_modal_page_config_modal_component__WEBPACK_IMPORTED_MODULE_12__.PageConfigModalComponent,
            _custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_13__.CustomDialogComponent,
            _custom_input_alert_custom_input_alert_component__WEBPACK_IMPORTED_MODULE_25__.CustomInputAlertComponent,
            _export_config_modal_export_config_modal_component__WEBPACK_IMPORTED_MODULE_15__.ExportConfigModalComponent,
            _import_config_modal_import_config_modal_component__WEBPACK_IMPORTED_MODULE_16__.ImportConfigModalComponent,
            // SortConfigModalComponent
            _form_view_modal_form_view_modal_component__WEBPACK_IMPORTED_MODULE_18__.FormViewModalComponent,
            _nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_21__.NrcPopupPage,
            _print_view_box_print_view_box_component__WEBPACK_IMPORTED_MODULE_22__.PrintViewBoxComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_29__.MatSelectModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckboxModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbDatepickerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_17__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbTypeaheadModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__.NgSelectModule,
            ngx_currency__WEBPACK_IMPORTED_MODULE_37__.NgxCurrencyModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_39__.MatNativeDateModule,
            _static_print_static_print_module__WEBPACK_IMPORTED_MODULE_23__.StaticPrintModule,
            _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_24__.CustomerListShareModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_40__.QRCodeModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DecimalPipe]
    })
], FormComponentModule);



/***/ }),

/***/ 75991:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/form-component/form-view-modal/form-view-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormViewModalComponent": () => (/* binding */ FormViewModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_view_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./form-view-modal.component.html */ 42569);
/* harmony import */ var _form_view_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-view-modal.component.scss */ 30623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-form.component */ 8246);







let FormViewModalComponent = class FormViewModalComponent {
    constructor(fb, modal) {
        this.fb = fb;
        this.modal = modal;
        this.oldData = {};
        this.stage = false;
    }
    ngOnInit() {
        // this.dynForm.reCreateFrom()
    }
    ngOnDestroy() {
    }
    save() {
        let submited = this.dynForm.handleSubmit();
        if (!submited)
            return false;
    }
    saveTemp(data) {
        this.modal.dismiss({ data: data, type: 'save' });
    }
};
FormViewModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal }
];
FormViewModalComponent.propDecorators = {
    dynForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormComponent,] }]
};
FormViewModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-view-modal',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_view_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_form_view_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormViewModalComponent);



/***/ }),

/***/ 77365:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/form-component/import-config-modal/import-config-modal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportConfigModalComponent": () => (/* binding */ ImportConfigModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_import_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./import-config-modal.component.html */ 91272);
/* harmony import */ var _import_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-config-modal.component.scss */ 96239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _dashboard_services_form_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard/services/form-ui.service */ 41323);







let ImportConfigModalComponent = class ImportConfigModalComponent {
    constructor(fb, modal, uiService, cdRef) {
        this.fb = fb;
        this.modal = modal;
        this.uiService = uiService;
        this.cdRef = cdRef;
        this.showData = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadConfig();
    }
    loadConfig() {
        this.uiService.getByType().toPromise().then((res) => {
            if (res) {
                this.showData = res.pages;
                this.cdRef.detectChanges();
            }
        });
    }
    save() {
        if (this.selectedRow < 0)
            this.modal.dismiss({ data: false, listData: this.showData, type: 'save' });
        else
            this.modal.dismiss({ data: this.showData[this.selectedRow], listData: this.showData, type: 'save' });
    }
    selectRow(id) {
        this.selectedRow = this.selectedRow === id ? null : id;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    delete(index) {
        this.showData.splice(index, 1);
    }
};
ImportConfigModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal },
    { type: _dashboard_services_form_ui_service__WEBPACK_IMPORTED_MODULE_2__.FormUIService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
ImportConfigModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-import-config-modal',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_import_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_import_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImportConfigModalComponent);



/***/ }),

/***/ 39714:
/*!***********************************************************************!*\
  !*** ./src/app/pages/form-component/input-box/input-box.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputBoxComponent": () => (/* binding */ InputBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./input-box.component.html */ 66451);
/* harmony import */ var _input_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-box.component.scss */ 78794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field.interface */ 21558);






let InputBoxComponent = class InputBoxComponent {
    constructor(globalFun) {
        this.globalFun = globalFun;
        this.unSub = [];
    }
    ngOnInit() {
        this.listenFunData();
    }
    ngOnDestroy() {
        this.unSub.forEach((sb) => sb.unsubscribe());
    }
    doFunction() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_3__.FUNCTION_TYPE.TRIGGER) {
                this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue());
            }
        }
    }
    listenFunData() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_3__.FUNCTION_TYPE.GETDATA) {
                this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
                    this.group.controls[this.config.name].setValue(res);
                });
            }
        }
    }
};
InputBoxComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService }
];
InputBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-input-box',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_input_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputBoxComponent);



/***/ }),

/***/ 48080:
/*!***********************************************************************!*\
  !*** ./src/app/pages/form-component/label-box/label-box.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelBoxComponent": () => (/* binding */ LabelBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_label_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./label-box.component.html */ 88606);
/* harmony import */ var _label_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-box.component.scss */ 47895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let LabelBoxComponent = class LabelBoxComponent {
    constructor() { }
    ngOnInit() {
        this.config.labelSize = this.config.labelSize || 1;
        this.config.endLabel = this.config.endLabel || "rem";
        this.config.endLabelMM = this.config.endLabelMM || "normal";
    }
};
LabelBoxComponent.ctorParameters = () => [];
LabelBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: '[app-label-box]',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_label_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_label_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LabelBoxComponent);



/***/ }),

/***/ 31715:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-component/label-config-modal/label-config-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelConfigModalComponent": () => (/* binding */ LabelConfigModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_label_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./label-config-modal.component.html */ 93745);
/* harmony import */ var _label_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-config-modal.component.scss */ 50535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);






let LabelConfigModalComponent = class LabelConfigModalComponent {
    constructor(fb, modal) {
        this.fb = fb;
        this.modal = modal;
        this.sizeOpt = ["pt", "px", "rem"];
        this.fontOpt = ["bold", "normal"];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadConfig();
    }
    loadConfig() {
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            name: [this.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            label: [this.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            coreName: [this.coreName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            endLabel: [this.endLabel || this.sizeOpt[2], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            endLabelMM: [this.endLabelMM || this.fontOpt[1], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            labelSize: [this.labelSize, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            placeholder: [this.placeholder, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
            multi: [this.multi || false,],
            inlineStyle: [this.inlineStyle || false,],
            readonly: [this.readonly || false,],
            disabled: [this.disabled || false,],
        });
    }
    save() {
        if (this.formGroup.valid) {
            this.modal.dismiss({ data: this.formGroup.value, type: 'save' });
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
};
LabelConfigModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal }
];
LabelConfigModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-label-config-modal',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_label_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_label_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LabelConfigModalComponent);



/***/ }),

/***/ 66798:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/form-component/page-config-modal/page-config-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageConfigModalComponent": () => (/* binding */ PageConfigModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_page_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./page-config-modal.component.html */ 96792);
/* harmony import */ var _page_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-config-modal.component.scss */ 40231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _page_config_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../page-config/table.service */ 55958);








let PageConfigModalComponent = class PageConfigModalComponent {
    constructor(fb, modal, alertService, tableService) {
        this.fb = fb;
        this.modal = modal;
        this.alertService = alertService;
        this.tableService = tableService;
        this.party = false;
        this.subscriptions = [];
        this.alertOpend = false;
    }
    ngOnInit() {
        this.alertOpend = false;
        this.loadConfig();
    }
    loadConfig() {
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            title: [this.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator])],
            icon: [this.icon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator])],
            type: [this.type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator])],
            tableName: [{ value: this.tableName, disabled: this.tableName ? true : false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-z_]*$")])],
            function: [this.function],
            unitCode: [this.unitCode],
            party: [this.party || false]
        });
    }
    save() {
        if (this.formGroup.valid) {
            let formValue = this.formGroup.getRawValue();
            if (!this.tableName && !this.alertOpend) {
                // if (!this.alertOpend)
                this.alertAndSave(formValue);
            }
            else if (this.tableName != formValue.tableName && !this.alertOpend) {
                this.alertAndSave(formValue);
            }
            else {
                this.modal.dismiss({ data: this.formGroup.getRawValue(), type: 'save' });
            }
        }
    }
    alertAndSave(formValue) {
        this.alertOpend = true;
        this.tableService.validate(formValue.tableName).toPromise().then((res) => {
            // console.log(res);
            if (!res[formValue.tableName]) {
                this.alertService.activate("Table Name already used. Do you want to reuse this table name " + formValue.tableName + " ?", "Warning");
            }
            else {
                this.modal.dismiss({ data: this.formGroup.getRawValue(), type: 'save' });
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
};
PageConfigModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _page_config_table_service__WEBPACK_IMPORTED_MODULE_3__.TableAPIService }
];
PageConfigModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-page-config-modal',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_page_config_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page_config_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageConfigModalComponent);



/***/ }),

/***/ 99919:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/form-component/print-view-box/print-view-box.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintViewBoxComponent": () => (/* binding */ PrintViewBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_print_view_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./print-view-box.component.html */ 92323);
/* harmony import */ var _print_view_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-view-box.component.scss */ 458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _products_models_product_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/models/product.dto */ 1402);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);








let PrintViewBoxComponent = class PrintViewBoxComponent {
    constructor(el, loadingService, numberPipe, datePipe, productService) {
        this.el = el;
        this.loadingService = loadingService;
        this.numberPipe = numberPipe;
        this.datePipe = datePipe;
        this.productService = productService;
        this.config = [];
        this.configOrder = [];
        this.product = {};
        this.tempData = {};
        this.resourcesId = "";
        this.temConfig = [];
        this.premimunAmt = "";
        this.today = new Date();
        this.agentName = "";
        this.formatedData = false;
    }
    //wait for the component to render completely
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.qrLocation = location.origin + "/qr-source-link?resourceId=" + this.resourcesId + "&productID=" + this.productService.editData.id;
            yield this.loadingService.activate();
            let temp = JSON.parse(JSON.stringify(this.config));
            for (let formObj of this.configOrder) {
                if (formObj.type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_3__.PageUIType.DYN) {
                    let printForm = temp.find(data => data.id == formObj.id);
                    printForm.tables.forEach(printTable => {
                        printTable.row = printTable.row.map((row) => {
                            let formatedCol = [];
                            let parentArray = [];
                            row.column.forEach((col, index) => {
                                let skip = false;
                                if (col.data) {
                                    let index = parentArray.findIndex(data => data == col.title);
                                    if (index < 0) {
                                        parentArray.push(col.title);
                                    }
                                    else {
                                        skip = true;
                                    }
                                }
                                if (!skip) {
                                    if (col.data) {
                                        formatedCol.push(Object.assign(Object.assign({}, col), { otherOption: [col.data] }));
                                    }
                                    else {
                                        formatedCol.push(col);
                                    }
                                }
                                else {
                                    let indexCol = formatedCol.findIndex(x => {
                                        if (x.data) {
                                            if (x.data.input != 'label' && x.title == col.title)
                                                return true;
                                        }
                                        return false;
                                    });
                                    formatedCol[indexCol].otherOption.push(col.data);
                                }
                            });
                            row.column = formatedCol;
                            return row;
                        });
                    });
                    this.temConfig.push(printForm);
                }
                else {
                    this.temConfig.push(formObj);
                    // return formObj as PrintFormat
                }
                console.log(this.temConfig, this.tempData);
            }
            if (this.productService.editData) {
                this.premimunAmt = this.productService.editData.premiumView;
                // this.today = this.productService.editData.createdAt
                this.agentName = this.productService.editData.agentFirstName + this.productService.editData.agentLastName;
            }
            this.formatedData = true;
            yield this.loadingService.deactivate();
            // this.temConfig = this.configOrder.map(x => {
            //   if (x.type == PageUIType.DYN) {
            //     let printForm = this.config.find(data => data.id == x.id)
            //     return printForm || (x as PrintFormat)
            //   } else {
            //     return x as PrintFormat
            //   }
            // })
        });
    }
    getValue(cols, tempData) {
        let value = "";
        if (tempData) {
            for (let col of cols.otherOption) {
                if (tempData[col.name]) {
                    if ((tempData[col.name] + "").length > 0) {
                        if (col.input == "input" && col.type == "currency") {
                            value += this.numberPipe.transform(tempData[col.name]);
                        }
                        else if (col.input == "date") {
                            value += this.datePipe.transform(tempData[col.name], "dd/MM/yyyy");
                        }
                        else {
                            value += tempData[col.name];
                        }
                    }
                }
            }
        }
        return value;
    }
    getStatic(key) {
        if (key == 'premimun')
            return this.premimunAmt;
        if (key == "insurer_name")
            return this.agentName;
        return "";
    }
};
PrintViewBoxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__.ProductDataService }
];
PrintViewBoxComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    configOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    tempData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
PrintViewBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-print-view-box',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_print_view_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_print_view_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrintViewBoxComponent);



/***/ }),

/***/ 36029:
/*!***********************************************************************!*\
  !*** ./src/app/pages/form-component/radio-box/radio-box.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioBoxComponent": () => (/* binding */ RadioBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./radio-box.component.html */ 56295);
/* harmony import */ var _radio_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-box.component.scss */ 66410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/master-data/master-data.service */ 26697);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field.interface */ 21558);








let RadioBoxComponent = class RadioBoxComponent {
    constructor(globalFun, masterData, cdf) {
        this.globalFun = globalFun;
        this.masterData = masterData;
        this.cdf = cdf;
        this.unSub = [];
        this.masterOption = [];
        this.oldValue = '';
    }
    ngOnInit() {
        if (this.config.master == 'true') {
            if (!this.config.dependency) {
                this.getOptions();
            }
        }
        else {
            this.masterOption = this.config.options;
        }
        this.listenFunData();
    }
    ngOnDestroy() {
        this.unSub.forEach((sb) => sb.unsubscribe());
    }
    doFunction() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.FUNCTION_TYPE.TRIGGER) {
                this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue());
            }
        }
    }
    listenFunData() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.FUNCTION_TYPE.GETDATA) {
                this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
                    this.group.controls[this.config.name].setValue(res);
                });
            }
        }
    }
    getOptions() {
        let valueKey = this.config.valueField;
        let showKey = this.config.showField;
        this.masterData.getDataByType(this.config.masterData).toPromise().then((res) => {
            if (res) {
                this.masterOption = res.map(x => {
                    return Object.assign({ 'value': x[valueKey], 'text': x[showKey] }, x);
                });
                this.cdf.detectChanges();
                this.doFunction();
            }
        });
    }
    reGetOption(filter) {
        if (filter == this.oldValue)
            return false;
        let depend = this.config.dependency;
        let valueKey = this.config.valueField;
        let showKey = this.config.showField;
        let value = this.group.getRawValue()[this.config.name] || this.config.value;
        let same = false;
        this.oldValue = filter;
        this.masterData.getDataByType(this.config.masterData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            return res.filter(x => x[depend.relatedField] == filter);
        })).toPromise().then((res) => {
            if (res) {
                this.masterOption = res.map(x => {
                    if (x[valueKey] == value) {
                        same = true;
                    }
                    return Object.assign({ 'value': x[valueKey], 'text': x[showKey] }, x);
                });
                if (same) {
                    this.group.controls[this.config.name].setValue(value);
                }
                else {
                    if (this.masterOption.length > 0) {
                        this.group.controls[this.config.name].setValue(this.masterOption[0]['value']);
                    }
                }
                this.cdf.detectChanges();
                this.doFunction();
            }
        });
    }
};
RadioBoxComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef }
];
RadioBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-radio-box',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_radio_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RadioBoxComponent);



/***/ }),

/***/ 15660:
/*!*************************************************************************!*\
  !*** ./src/app/pages/form-component/select-box/select-box.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectBoxComponent": () => (/* binding */ SelectBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-box.component.html */ 6012);
/* harmony import */ var _select_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-box.component.scss */ 77760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 73762);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/master-data/master-data.service */ 26697);
/* harmony import */ var _field_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field.interface */ 21558);








let SelectBoxComponent = class SelectBoxComponent {
    constructor(masterData, cdf, globalFun) {
        this.masterData = masterData;
        this.cdf = cdf;
        this.globalFun = globalFun;
        this.config = {};
        this.masterOption = [];
        this.unSub = [];
        this.oldValue = '';
    }
    ngOnInit() {
        if (this.config.master == 'true') {
            if (!this.config.dependency) {
                this.getOptions();
            }
        }
    }
    ngOnDestroy() {
        this.unSub.forEach((sb) => sb.unsubscribe());
    }
    doFunction() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.FUNCTION_TYPE.TRIGGER) {
                if (this.config.inpFunction.funName == 'paPolicyValidation')
                    return false;
                this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue(), this.masterOption);
            }
        }
        if (this.config.policyterm) {
            let value = this.group.getRawValue()[this.config.name] || this.config.value;
            this.globalFun.paPolicyValidation(value, this.masterOption);
        }
    }
    listenFunData() {
        if (this.config.isFun) {
            if (this.config.inpFunction.type == _field_interface__WEBPACK_IMPORTED_MODULE_4__.FUNCTION_TYPE.GETDATA) {
                this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
                    this.group.controls[this.config.name].setValue(res);
                });
            }
        }
    }
    getOptions() {
        let valueKey = this.config.valueField;
        let showKey = this.config.showField;
        let address = this.config.type == "address" ? true : false;
        this.masterData.getDataByType(this.config.masterData, address).toPromise().then((res) => {
            if (res) {
                this.masterOption = res.map(x => {
                    return Object.assign({ 'value': x[valueKey], 'text': x[showKey] }, x);
                });
                this.cdf.detectChanges();
                this.doFunction();
            }
        });
    }
    reGetOption(filter) {
        if (filter == this.oldValue)
            return false;
        let depend = this.config.dependency;
        let valueKey = this.config.valueField;
        let showKey = this.config.showField;
        let value = this.group.getRawValue()[this.config.name] || this.config.value;
        let same = false;
        this.oldValue = filter;
        let address = this.config.type == "address" ? true : false;
        this.masterData.getDataByType(this.config.masterData, address).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            return res.filter(x => x[depend.relatedField] == filter);
        })).toPromise().then((res) => {
            if (res) {
                this.masterOption = res.map(x => {
                    if (x[valueKey] == value) {
                        same = true;
                    }
                    return Object.assign({ 'value': x[valueKey], 'text': x[showKey] }, x);
                });
                if (same) {
                    this.group.controls[this.config.name].setValue(value);
                }
                else {
                    if (this.masterOption.length > 0) {
                        this.group.controls[this.config.name].setValue(this.masterOption[0]['value']);
                    }
                }
                this.cdf.detectChanges();
                this.doFunction();
            }
        });
    }
};
SelectBoxComponent.ctorParameters = () => [
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService }
];
SelectBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-select-box',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectBoxComponent);



/***/ }),

/***/ 55958:
/*!****************************************************!*\
  !*** ./src/app/pages/page-config/table.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableAPIService": () => (/* binding */ TableAPIService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





const API_TALBEL_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/dynamictable`;
let TableAPIService = class TableAPIService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_TALBEL_URL);
        this.httpClient = httpClient;
    }
    validate(name) {
        return this.httpClient.post(API_TALBEL_URL + "/validate?tableName=" + name, { tableName: name });
    }
};
TableAPIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
TableAPIService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], TableAPIService);



/***/ }),

/***/ 48960:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-print/addon-print/addon-print.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddonPrintComponent": () => (/* binding */ AddonPrintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addon_print_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./addon-print.component.html */ 85672);
/* harmony import */ var _addon_print_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addon-print.component.scss */ 82997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);






let AddonPrintComponent = class AddonPrintComponent {
    constructor(addonQuo, productSerice) {
        this.addonQuo = addonQuo;
        this.productSerice = productSerice;
        this.addOnData = {};
        this.addon = {
            sumInsured: false,
            unit: false,
            premium: false,
        };
        this.product = {};
    }
    ngOnInit() {
        this.product = this.productSerice.createingProd || this.productSerice.selectedProd;
        if (this.product.addOns && this.product.addOns.length > 0) {
            this.addon = {
                sumInsured: this.product.addOns[0].sumInsured,
                unit: this.product.addOns[0].unit,
                premium: this.product.addOns[0].premium,
            };
            for (const item of this.product.addOns) {
                // let response: any = {};
                try {
                    if (this.resourcesId) {
                        this.addonQuo.getOne(item.id, this.resourcesId).toPromise().then((response) => {
                            if (response) {
                                this.addOnData[item.id] = {
                                    sum: response ? response.sumInsured || 0 : 0,
                                    unit: response ? response.unit || 0 : 0,
                                    premium: response ? response.premium || 0 : 0
                                };
                            }
                        });
                    }
                }
                catch (error) {
                }
            }
        }
    }
};
AddonPrintComponent.ctorParameters = () => [
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_2__.AddOnQuoService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService }
];
AddonPrintComponent.propDecorators = {
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
AddonPrintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-addon-print',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_addon_print_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_addon_print_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddonPrintComponent);



/***/ }),

/***/ 19059:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/static-print/coverage-print/coverage-print.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoveragePrintComponent": () => (/* binding */ CoveragePrintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coverage_print_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coverage-print.component.html */ 75102);
/* harmony import */ var _coverage_print_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-print.component.scss */ 43040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 45570);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);






let CoveragePrintComponent = class CoveragePrintComponent {
    constructor(coverageQuo, productSerice) {
        this.coverageQuo = coverageQuo;
        this.productSerice = productSerice;
        this.coverage = {
            sumInsured: false,
            unit: false,
            premium: false,
        };
        this.coverageData = {};
        this.product = {};
    }
    ngOnInit() {
        this.product = this.productSerice.createingProd || this.productSerice.selectedProd;
        console.log(this.product);
        if (this.product.coverages && this.product.coverages.length > 0) {
            this.coverage = {
                sumInsured: this.product.coverages[0].sumInsured,
                unit: this.product.coverages[0].unit,
                premium: this.product.coverages[0].premium,
            };
            for (const item of this.product.coverages) {
                let response = {};
                if (this.resourcesId) {
                    this.coverageQuo.getOne(item.id, this.resourcesId).toPromise().then((response) => {
                        if (response) {
                            this.coverageData[item.id] = {
                                sum: response ? response.sumInsured || 0 : 0,
                                unit: response ? response.unit || 0 : 0,
                                premium: response ? response.premium || 0 : 0
                            };
                        }
                    });
                }
            }
        }
    }
};
CoveragePrintComponent.ctorParameters = () => [
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_2__.CoverageQuoService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService }
];
CoveragePrintComponent.propDecorators = {
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CoveragePrintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-coverage-print',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coverage_print_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_coverage_print_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoveragePrintComponent);



/***/ }),

/***/ 62937:
/*!***************************************************************************!*\
  !*** ./src/app/pages/static-print/farmer-print/farmer-print.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FarmerPrintComponent": () => (/* binding */ FarmerPrintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_farmer_print_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./farmer-print.component.html */ 72368);
/* harmony import */ var _farmer_print_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./farmer-print.component.scss */ 22989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);






let FarmerPrintComponent = class FarmerPrintComponent {
    constructor(productService) {
        this.productService = productService;
        this.signId = "";
        this.Default_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/attachment-downloader/`;
    }
    ngOnInit() {
        this.signId = this.productService.editData ? this.productService.editData.attachmentId : "";
    }
};
FarmerPrintComponent.ctorParameters = () => [
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService }
];
FarmerPrintComponent.propDecorators = {
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
FarmerPrintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-farmer-print',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_farmer_print_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_farmer_print_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FarmerPrintComponent);



/***/ }),

/***/ 95321:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/static-print/fire-detail-print/fire-detail-print.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireDetailPrintComponent": () => (/* binding */ FireDetailPrintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_detail_print_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-detail-print.component.html */ 41274);
/* harmony import */ var _fire_detail_print_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-detail-print.component.scss */ 39262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _static_pages_fire_simple_page_models_services_fire_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-pages/fire-simple-page/models&services/fire-product.service */ 75103);





let FireDetailPrintComponent = class FireDetailPrintComponent {
    constructor(fireService) {
        this.fireService = fireService;
        this.detail = {};
    }
    ngOnInit() {
        this.getDetail();
    }
    getDetail() {
        this.fireService.getOne(this.resourcesId).toPromise().then(res => {
            if (res)
                this.detail = res;
        });
    }
};
FireDetailPrintComponent.ctorParameters = () => [
    { type: _static_pages_fire_simple_page_models_services_fire_product_service__WEBPACK_IMPORTED_MODULE_2__.FireProductService }
];
FireDetailPrintComponent.propDecorators = {
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FireDetailPrintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fire-detail-print',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_detail_print_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fire_detail_print_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FireDetailPrintComponent);



/***/ }),

/***/ 85910:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/static-print/fire-risk-print/fire-risk-print.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireRiskPrintComponent": () => (/* binding */ FireRiskPrintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_risk_print_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fire-risk-print.component.html */ 38938);
/* harmony import */ var _fire_risk_print_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-risk-print.component.scss */ 1714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _static_pages_fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-pages/fire-risk/models&services/fire-risk.service */ 66977);





let FireRiskPrintComponent = class FireRiskPrintComponent {
    constructor(fireRsikService) {
        this.fireRsikService = fireRsikService;
        this.listData = [];
    }
    ngOnInit() {
        this.getDetail();
    }
    getDetail() {
        this.fireRsikService.getMany(this.resourcesId).toPromise().then((res) => {
            if (res) {
                this.listData = res;
            }
        });
    }
};
FireRiskPrintComponent.ctorParameters = () => [
    { type: _static_pages_fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_2__.FireRiskService }
];
FireRiskPrintComponent.propDecorators = {
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FireRiskPrintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fire-risk-print',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fire_risk_print_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fire_risk_print_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FireRiskPrintComponent);



/***/ }),

/***/ 41388:
/*!***************************************************************************!*\
  !*** ./src/app/pages/static-print/health-print/health-print.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthPrintComponent": () => (/* binding */ HealthPrintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_print_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./health-print.component.html */ 75637);
/* harmony import */ var _health_print_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-print.component.scss */ 94630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);






let HealthPrintComponent = class HealthPrintComponent {
    constructor(productService) {
        this.productService = productService;
        this.signId = "";
        this.Default_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/attachment-downloader/`;
    }
    ngOnInit() {
        this.signId = this.productService.editData ? this.productService.editData.attachmentId : "";
    }
};
HealthPrintComponent.ctorParameters = () => [
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService }
];
HealthPrintComponent.propDecorators = {
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
HealthPrintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-health-print',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_print_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_health_print_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HealthPrintComponent);



/***/ }),

/***/ 32622:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-print/moter-print/moter-print.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoterPrintComponent": () => (/* binding */ MoterPrintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_moter_print_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./moter-print.component.html */ 8019);
/* harmony import */ var _moter_print_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moter-print.component.scss */ 59446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);






let MoterPrintComponent = class MoterPrintComponent {
    constructor(productService) {
        this.productService = productService;
        this.signId = "";
        this.Default_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/attachment-downloader/`;
    }
    ngOnInit() {
        this.signId = this.productService.editData ? this.productService.editData.attachmentId : "";
    }
};
MoterPrintComponent.ctorParameters = () => [
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService }
];
MoterPrintComponent.propDecorators = {
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
MoterPrintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-moter-print',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_moter_print_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_moter_print_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoterPrintComponent);



/***/ }),

/***/ 43698:
/*!*******************************************************************!*\
  !*** ./src/app/pages/static-print/pa-print/pa-print.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaPrintComponent": () => (/* binding */ PaPrintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pa_print_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pa-print.component.html */ 67037);
/* harmony import */ var _pa_print_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pa-print.component.scss */ 2326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/products-data.service */ 35618);






let PaPrintComponent = class PaPrintComponent {
    constructor(productService) {
        this.productService = productService;
        this.signId = "";
        this.Default_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/attachment-downloader/`;
    }
    ngOnInit() {
        this.signId = this.productService.editData ? this.productService.editData.attachmentId : "";
    }
};
PaPrintComponent.ctorParameters = () => [
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService }
];
PaPrintComponent.propDecorators = {
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
PaPrintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pa-print',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pa_print_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pa_print_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaPrintComponent);



/***/ }),

/***/ 35002:
/*!*******************************************************************!*\
  !*** ./src/app/pages/static-print/static-print-view.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPrintDirective": () => (/* binding */ StaticPrintDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _addon_print_addon_print_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addon-print/addon-print.component */ 48960);
/* harmony import */ var _coverage_print_coverage_print_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-print/coverage-print.component */ 19059);
/* harmony import */ var _farmer_print_farmer_print_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmer-print/farmer-print.component */ 62937);
/* harmony import */ var _fire_detail_print_fire_detail_print_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fire-detail-print/fire-detail-print.component */ 95321);
/* harmony import */ var _fire_risk_print_fire_risk_print_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fire-risk-print/fire-risk-print.component */ 85910);
/* harmony import */ var _health_print_health_print_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health-print/health-print.component */ 41388);
/* harmony import */ var _moter_print_moter_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moter-print/moter-print.component */ 32622);
/* harmony import */ var _pa_print_pa_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pa-print/pa-print.component */ 43698);










const STATIC_PRINT_COMPONENT = {
    'print_1638594148571': _moter_print_moter_print_component__WEBPACK_IMPORTED_MODULE_6__.MoterPrintComponent,
    'print_1638594176913': _farmer_print_farmer_print_component__WEBPACK_IMPORTED_MODULE_2__.FarmerPrintComponent,
    'print_1645157346931': _health_print_health_print_component__WEBPACK_IMPORTED_MODULE_5__.HealthPrintComponent,
    'print_1645157579888': _pa_print_pa_print_component__WEBPACK_IMPORTED_MODULE_7__.PaPrintComponent,
    'addon_1634010770155': _addon_print_addon_print_component__WEBPACK_IMPORTED_MODULE_0__.AddonPrintComponent,
    'coverage_1634010995936': _coverage_print_coverage_print_component__WEBPACK_IMPORTED_MODULE_1__.CoveragePrintComponent,
    'static_1641364737069': _fire_detail_print_fire_detail_print_component__WEBPACK_IMPORTED_MODULE_3__.FireDetailPrintComponent,
    'static_1643116155828': _fire_risk_print_fire_risk_print_component__WEBPACK_IMPORTED_MODULE_4__.FireRiskPrintComponent
};
let StaticPrintDirective = class StaticPrintDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    ngOnInit() {
        if (STATIC_PRINT_COMPONENT[this.compId]) {
            const component = this.resolver.resolveComponentFactory(STATIC_PRINT_COMPONENT[this.compId]);
            this.component = this.container.createComponent(component);
            this.component.instance.resourcesId = this.resourcesId;
        }
    }
};
StaticPrintDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef }
];
StaticPrintDirective.propDecorators = {
    compId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
StaticPrintDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Directive)({
        selector: '[staticPirint]'
    })
], StaticPrintDirective);



/***/ }),

/***/ 72880:
/*!***********************************************************!*\
  !*** ./src/app/pages/static-print/static-print.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPrintModule": () => (/* binding */ StaticPrintModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _farmer_print_farmer_print_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./farmer-print/farmer-print.component */ 62937);
/* harmony import */ var _moter_print_moter_print_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moter-print/moter-print.component */ 32622);
/* harmony import */ var _static_print_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-print-view.directive */ 35002);
/* harmony import */ var _coverage_print_coverage_print_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coverage-print/coverage-print.component */ 19059);
/* harmony import */ var _addon_print_addon_print_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addon-print/addon-print.component */ 48960);
/* harmony import */ var _fire_detail_print_fire_detail_print_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fire-detail-print/fire-detail-print.component */ 95321);
/* harmony import */ var _fire_risk_print_fire_risk_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-risk-print/fire-risk-print.component */ 85910);
/* harmony import */ var _health_print_health_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-print/health-print.component */ 41388);
/* harmony import */ var _pa_print_pa_print_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pa-print/pa-print.component */ 43698);












let StaticPrintModule = class StaticPrintModule {
};
StaticPrintModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_static_print_view_directive__WEBPACK_IMPORTED_MODULE_2__.StaticPrintDirective, _farmer_print_farmer_print_component__WEBPACK_IMPORTED_MODULE_0__.FarmerPrintComponent, _moter_print_moter_print_component__WEBPACK_IMPORTED_MODULE_1__.MoterPrintComponent, _coverage_print_coverage_print_component__WEBPACK_IMPORTED_MODULE_3__.CoveragePrintComponent, _addon_print_addon_print_component__WEBPACK_IMPORTED_MODULE_4__.AddonPrintComponent, _fire_detail_print_fire_detail_print_component__WEBPACK_IMPORTED_MODULE_5__.FireDetailPrintComponent, _fire_risk_print_fire_risk_print_component__WEBPACK_IMPORTED_MODULE_6__.FireRiskPrintComponent, _health_print_health_print_component__WEBPACK_IMPORTED_MODULE_7__.HealthPrintComponent, _pa_print_pa_print_component__WEBPACK_IMPORTED_MODULE_8__.PaPrintComponent],
        exports: [_static_print_view_directive__WEBPACK_IMPORTED_MODULE_2__.StaticPrintDirective, _farmer_print_farmer_print_component__WEBPACK_IMPORTED_MODULE_0__.FarmerPrintComponent, _moter_print_moter_print_component__WEBPACK_IMPORTED_MODULE_1__.MoterPrintComponent, _fire_detail_print_fire_detail_print_component__WEBPACK_IMPORTED_MODULE_5__.FireDetailPrintComponent, _fire_risk_print_fire_risk_print_component__WEBPACK_IMPORTED_MODULE_6__.FireRiskPrintComponent, _pa_print_pa_print_component__WEBPACK_IMPORTED_MODULE_8__.PaPrintComponent, _health_print_health_print_component__WEBPACK_IMPORTED_MODULE_7__.HealthPrintComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule
        ]
    })
], StaticPrintModule);



/***/ }),

/***/ 70972:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/button-box/button-box.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button class=\"btn btn-block btn-{{config.fill === true ? '':'outline-'}}{{config.color}}\" type=\"button\"\r\n  (click)=\"onClick()\">{{config.label}}</button>");

/***/ }),

/***/ 13128:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/checkbox-box/checkbox-box.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"config\">\r\n  <div class=\"form-group row\">\r\n    <label *ngIf=\"config.isLabel\" class=\"col-{{ config.inlineStyle ? config.labelSize : '12'}}\" style=\"padding-top: 10px;\">{{config.label}}:</label>\r\n    <div class=\"col-{{config.inlineStyle ? config.inputSize : '12'}}\">\r\n      <ng-container *ngFor=\"let item of config.options\">\r\n        <mat-checkbox class=\"example-margin\" (change)=\"checkData($event)\" [(ngModel)]=\"data['v'+item.value]\"\r\n          [ngModelOptions]=\"{standalone: true}\" name=\"{{item.value}}\" [disabled]=\"isDisabled\">\r\n          {{item.text}}\r\n        </mat-checkbox>\r\n      </ng-container>\r\n      <div>\r\n        <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 79156:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/custom-dialog/custom-dialog.component.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n            {{config.label}}\r\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please select in table list</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"overlay overlay-block cursor-default modal-body\">\r\n        <ng-container *ngIf=\"config.type == 'user'\">\r\n            <app-customer-list (selectedUser)=\"selectedUser($event)\" [isPopup]=\"true\" [isDynamic]=\"true\"></app-customer-list>\r\n        </ng-container>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\">Save</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 37360:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/date-box/date-box.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"config\" [formGroup]=\"group\">\r\n  <ng-container *ngIf=\"config.type == 'date';else policyDate \">\r\n    <div class=\"form-group\" [ngClass]=\"{'row': config.inlineStyle}\">\r\n      <label *ngIf=\"config.isLabel\"\r\n        class=\"{{config.inlineStyle ? 'col-'+config.labelSize+' col-form-label' : ''}}\">{{config.label}}</label>\r\n      <div *ngIf=\"!config.inlineStyle;else InlineForm\">\r\n        <!-- <input type=\"{{config.type}}\" class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n        [formControlName]=\"config.name\" /> -->\r\n        <!-- <mat-form-field class=\"form-control-sm\" appearance=\"fill\"> -->\r\n        <div class=\"input-group \">\r\n          <input matInput class=\"form-control-sm date-input\" [formControlName]=\"config.name\" [min]=\"fromMinDate\"\r\n            [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" readonly>\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker disabled=\"{{isDisabled}}\"></mat-datepicker>\r\n          <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n        </div>\r\n        <!-- </mat-form-field> -->\r\n        <!-- <div class=\"input-group \">\r\n          <input type=\"text\" name=\"{{config.name}}\" class=\"form-control form-control-sm \" autocomplete=\"off\"\r\n            placeholder=\"dd/mm/yyyy\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"fromMinDate\" [maxDate]=\"fromMaxDate\"\r\n            [formControlName]=\"config.name\" readonly=\"true\" />\r\n          <div class=\"input-group-append\" (click)=\"d.toggle()\">\r\n            <span class=\"input-group-text\">\r\n              <i class=\"text-dark-50 flaticon-calendar\"></i>\r\n            </span>\r\n          </div>\r\n        </div> -->\r\n        <!-- <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error> -->\r\n      </div>\r\n      <ng-template #InlineForm>\r\n        <div class=\"col-{{config.inputSize}}\">\r\n          <!-- <input type=\"{{config.type}}\" class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n          [formControlName]=\"config.name\" /> -->\r\n          <!-- <mat-form-field appearance=\"fill\"> -->\r\n          <div class=\"input-group \">\r\n            <input matInput class=\"form-control-sm date-input\" [formControlName]=\"config.name\" [min]=\"fromMinDate\"\r\n              [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" readonly>\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker disabled=\"{{isDisabled}}\"></mat-datepicker>\r\n            <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n          </div>\r\n          <!-- </mat-form-field> -->\r\n          <!-- <div class=\"input-group \">\r\n            <input type=\"text\" name=\"{{config.name}}\" class=\"form-control form-control-sm \" autocomplete=\"off\"\r\n              placeholder=\"dd/mm/yyyy\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"fromMinDate\" [maxDate]=\"fromMaxDate\"\r\n              [formControlName]=\"config.name\" readonly=\"true\" />\r\n            <div class=\"input-group-append\" (click)=\"d.toggle()\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"text-dark-50 flaticon-calendar\"></i>\r\n              </span>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #policyDate>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\" [ngClass]=\"{'row': config.inlineStyle}\">\r\n          <label *ngIf=\"config.isLabel\"\r\n            class=\"{{config.inlineStyle ? 'col-'+config.labelSize+' col-form-label' : ''}}\">{{config.label}}</label>\r\n          <div *ngIf=\"!config.inlineStyle;else InlineForm\">\r\n            <!-- <div class=\"input-group \">\r\n              <input type=\"text\" name=\"{{config.name}}\" class=\"form-control form-control-sm \" autocomplete=\"off\"\r\n                placeholder=\"dd/mm/yyyy\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"fromMinDate\"\r\n                [maxDate]=\"fromMaxDate\" [formControlName]=\"config.name\" (ngModelChange)=\"doValid()\" readonly=\"true\" />\r\n              <div class=\"input-group-append\" (click)=\"d.toggle()\">\r\n                <span class=\"input-group-text\">\r\n                  <i class=\"text-dark-50 flaticon-calendar\"></i>\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"input-group\">\r\n              <input matInput class=\"form-control-sm date-input\" [formControlName]=\"config.name\" [min]=\"fromMinDate\"\r\n                [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" (dateChange)=\"doValid()\" readonly>\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker disabled=\"{{isDisabled}}\"></mat-datepicker>\r\n              <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n            </div>\r\n            <!-- <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error> -->\r\n          </div>\r\n          <ng-template #InlineForm>\r\n            <div class=\"col-{{config.inputSize}}\">\r\n              <!-- <input type=\"{{config.type}}\" class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n              [formControlName]=\"config.name\" /> -->\r\n              <!-- <div class=\"input-group \">\r\n                <input type=\"text\" name=\"{{config.name}}\" class=\"form-control form-control-sm \" autocomplete=\"off\"\r\n                  placeholder=\"dd/mm/yyyy\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"fromMinDate\"\r\n                  [maxDate]=\"fromMaxDate\" [formControlName]=\"config.name\" (ngModelChange)=\"doValid()\" readonly=\"true\" />\r\n                <div class=\"input-group-append\" (click)=\"d.toggle()\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"text-dark-50 flaticon-calendar\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error> -->\r\n              <div class=\"input-group\">\r\n                <input matInput class=\"form-control-sm date-input\" [formControlName]=\"config.name\" [min]=\"fromMinDate\"\r\n                  [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" (dateChange)=\"doValid()\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker disabled=\"{{isDisabled}}\"></mat-datepicker>\r\n                <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\" [ngClass]=\"{'row': config.inlineStyle}\">\r\n          <label *ngIf=\"config.isLabel\"\r\n            class=\"{{config.inlineStyle ? 'col-'+config.labelSize+' col-form-label' : ''}}\">{{config.endLabel}}</label>\r\n          <div *ngIf=\"!config.inlineStyle;else InlineForm2\">\r\n            <!-- <div class=\"input-group \">\r\n              <input type=\"text\" name=\"{{config.endName}}\" id=\"{{config.endName}}\" class=\"form-control form-control-sm \"\r\n                autocomplete=\"off\" placeholder=\"dd/mm/yyyy\" ngbDatepicker #da=\"ngbDatepicker\" [minDate]=\"toMinDate\"\r\n                [maxDate]=\"toMaxDate\" [formControlName]=\"config.endName\" readonly=\"true\" />\r\n              <div class=\"input-group-append\" (click)=\"da.toggle()\">\r\n                <span class=\"input-group-text\">\r\n                  <i class=\"text-dark-50 flaticon-calendar\"></i>\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n            <!-- <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error> -->\r\n            <div class=\"input-group\">\r\n              <input matInput class=\"form-control-sm date-input\" [formControlName]=\"config.endName\" [min]=\"toMinDate\"\r\n                [max]=\"toMaxDate\" [matDatepicker]=\"picker2\" readonly>\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\r\n            </div>\r\n          </div>\r\n          <ng-template #InlineForm2>\r\n            <div class=\"col-{{config.inputSize}}\">\r\n              <div class=\"input-group\">\r\n                <input matInput class=\"form-control-sm date-input\" [formControlName]=\"config.endName\" [min]=\"toMinDate\"\r\n                  [max]=\"toMaxDate\" [matDatepicker]=\"picker2\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\r\n              </div>\r\n              <!-- <div class=\"input-group \">\r\n                <input type=\"text\" name=\"{{config.endName}}\" class=\"form-control form-control-sm \" autocomplete=\"off\"\r\n                  placeholder=\"dd/mm/yyyy\" id=\"{{config.endName}}\" ngbDatepicker #da=\"ngbDatepicker\"\r\n                  [minDate]=\"toMinDate\" [maxDate]=\"toMaxDate\" [formControlName]=\"config.endName\" readonly=\"true\" />\r\n                <div class=\"input-group-append\" (click)=\"da.toggle()\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"text-dark-50 flaticon-calendar\"></i>\r\n                  </span>\r\n                </div>\r\n              </div> -->\r\n              <!-- <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error> -->\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>");

/***/ }),

/***/ 48395:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/dialog-box/dialog-box.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"config\" [formGroup]=\"group\">\r\n  <div class=\"form-group\" [ngClass]=\"{'row': config.inlineStyle}\" (click)=\"openModal()\">\r\n    <label class=\"{{config.inlineStyle ? 'col-'+config.labelSize+' col-form-label' : ''}}\">{{config.label}}</label>\r\n    <div *ngIf=\"!config.inlineStyle;else InlineForm\">\r\n      <input type=\"text\" class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n        [formControlName]=\"config.name\" />\r\n      <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n    </div>\r\n    <ng-template #InlineForm>\r\n      <div class=\"col-{{config.inputSize}}\">\r\n        <input type=\"{{config.type}}\" class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n          [formControlName]=\"config.name\" />\r\n        <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 63754:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/edit-button-modal/edit-button-modal.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      <ng-container *ngIf=\"config\">\r\n        <ng-container *ngIf=\"config.label\">Edit</ng-container>\r\n        <ng-container *ngIf=\"!config.label\">Create</ng-container>\r\n        Button config\r\n        <ng-container *ngIf=\"config.label\">'{{config.label}}'</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <ng-container *ngIf=\"config\">\r\n      <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\">\r\n        <div class=\"form-group row\">\r\n          <!-- Text -->\r\n          <div class=\"col-lg-3\">\r\n            <label class=\"form-label\">Enter Button Text</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"label\"\r\n              placeholder=\"Button Text\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('label')\"\r\n              [class.is-valid]=\"isControlValid('label')\" formControlName=\"label\" />\r\n\r\n          </div>\r\n          <!-- Text -->\r\n          <div class=\"col-lg-3\">\r\n            <label class=\"form-label\">Enter Button Text (Myanmar)</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"labelMM\"\r\n              placeholder=\"Button Text\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('labelMM')\"\r\n              [class.is-valid]=\"isControlValid('labelMM')\" formControlName=\"labelMM\" />\r\n\r\n          </div>\r\n          <!-- type -->\r\n          <!-- type -->\r\n          <div class=\"col-lg-3\">\r\n            <label>Select Action Type</label>\r\n            <select class=\"form-control form-control-sm form-control-solid\" name=\"type\"\r\n              [class.is-invalid]=\"isControlInvalid('type')\" formControlName=\"type\">\r\n              <option value=\"submit\">Submit</option>\r\n              <option value=\"next\">Next</option>\r\n              <option value=\"previous\">Previous</option>\r\n              <option value=\"reset\">Reset</option>\r\n            </select>\r\n            <div class=\"feedback\">Please select <b>action type</b></div>\r\n          </div>\r\n          <!-- type -->\r\n          <div class=\"col-lg-3\">\r\n            <label>Select Position</label>\r\n            <select class=\"form-control form-control-sm form-control-solid\" name=\"position\" formControlName=\"position\">\r\n              <option value=\"\">None</option>\r\n              <option value=\"mx-auto\">Center</option>\r\n              <option value=\"ml-auto\">Right</option>\r\n              <option value=\"mr-auto\">Left</option>\r\n            </select>\r\n            <div class=\"feedback\">Please select <b>position</b></div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <!-- Size -->\r\n          <div class=\"col-lg-4\">\r\n            <label class=\"form-label\">Enter Button Size</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm form-control-solid\" name=\"size\"\r\n              placeholder=\"Button Size\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('size')\"\r\n              [class.is-valid]=\"isControlValid('size')\" formControlName=\"size\" />\r\n\r\n          </div>\r\n\r\n          <!-- fill -->\r\n          <div class=\"col-lg-4\">\r\n            <label>Select Fill Type</label>\r\n            <select class=\"form-control form-control-sm form-control-solid\" name=\"fill\"\r\n              [class.is-invalid]=\"isControlInvalid('fill')\" formControlName=\"fill\">\r\n              <option value=\"true\">Fill</option>\r\n              <option value=\"false\">Outline</option>\r\n            </select>\r\n          </div>\r\n          <!-- color -->\r\n          <div class=\"col-lg-4\">\r\n            <label>Select Color</label>\r\n            <select class=\"form-control form-control-sm form-control-solid\" name=\"color\" formControlName=\"color\">\r\n              <option value=\"primary\">Primary</option>\r\n              <option value=\"secondary\">Secondary</option>\r\n              <option value=\"success\">Success</option>\r\n              <option value=\"warning\">Warning</option>\r\n              <option value=\"danger\">Danger</option>\r\n              <option value=\"info\">Info</option>\r\n              <option value=\"dark\">Dark</option>\r\n              <option value=\"light\">Light</option>\r\n            </select>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"modal.dismiss({type:'delete'})\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <ng-container *ngIf=\"config\">\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\"\r\n        [disabled]=\"formGroup.invalid\">Save</button>\r\n    </ng-container>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 74273:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/edit-input-modal/edit-input-modal.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"card-header-tabs-line\">\r\n      <ul class=\"nav nav-dark nav-bold nav-tabs nav-tabs-line\" role=\"tablist\">\r\n        <li class=\"nav-item\">\r\n          <a (click)=\"setActiveTab(1)\" class=\"nav-link cursor-pointer\" [ngClass]=\"getActiveTabCSSClass(1)\" role=\"tab\">\r\n            <!-- <ng-container *ngIf=\"id\">Edit</ng-container> -->\r\n            <!-- <ng-container *ngIf=\"!id\">Create</ng-container> -->\r\n            <!-- {{input}} Configuration\r\n            <ng-container *ngIf=\"config.label\">'{{config.label}}'</ng-container>\r\n            (Infomation) -->\r\n            {{input | titlecase }} Type Configuration\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a (click)=\"setActiveTab(3)\" class=\"nav-link cursor-pointer\" [ngClass]=\"getActiveTabCSSClass(3)\" role=\"tab\">\r\n            Parent Dependency\r\n          </a>\r\n        </li>\r\n        <ng-container *ngIf=\"formGroup.value.type != 'policy'\">\r\n          <li class=\"nav-item\">\r\n            <a (click)=\"setActiveTab(2)\" class=\"nav-link cursor-pointer\" [ngClass]=\"getActiveTabCSSClass(2)\" role=\"tab\">\r\n              Validation\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a (click)=\"setActiveTab(4)\" class=\"nav-link cursor-pointer\" [ngClass]=\"getActiveTabCSSClass(4)\" role=\"tab\">\r\n\r\n              Function Binding\r\n            </a>\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n    <!-- <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-md\">\r\n      <ng-container *ngIf=\"config\">\r\n        <ng-container *ngIf=\"id\">Edit</ng-container>\r\n        <ng-container *ngIf=\"!id\">Create</ng-container>\r\n        {{input}} config\r\n        <ng-container *ngIf=\"config.label\">'{{config.label}}'</ng-container>\r\n      </ng-container>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <ng-container *ngIf=\"config && activePage == 1\">\r\n      <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\">\r\n        <div class=\"form-group row\">\r\n          <!-- IsShow -->\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"form-group row\" style=\"align-items: center;\">\r\n              <label class=\"col-md-6 col-form-label text-md-right\">Show Input</label>\r\n              <div class=\"col-md-6 col-xl-4\">\r\n                <span class=\"switch switch-icon\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"show\" formControlName=\"show\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /IsShow -->\r\n          <!-- Disabeld -->\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"form-group row\" style=\"align-items: center;\">\r\n              <label class=\"col-md-6 col-form-label text-md-right\">Read Only Input</label>\r\n              <div class=\"col-md-6 col-xl-4\">\r\n                <span class=\"switch switch-icon\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"disabled\" formControlName=\"disabled\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /Disabeld -->\r\n          <!-- IsLabel -->\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"form-group row\" style=\"align-items: center;\">\r\n              <label class=\"col-md-6 col-form-label text-md-right\">Show Label</label>\r\n              <div class=\"col-md-6 col-xl-4\">\r\n                <span class=\"switch switch-icon\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"isLabel\" formControlName=\"isLabel\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n                <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /IsLabel -->\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"form-group row\" style=\"align-items: center;\">\r\n              <label class=\"col-md-6 col-form-label text-md-right\">Inline Label</label>\r\n              <div class=\"col-md-6 col-xl-4\">\r\n                <span class=\"switch switch-icon\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"inlineStyle\" formControlName=\"inlineStyle\"\r\n                      (change)=\"changeLabelStyle($event)\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n                <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <!-- Name -->\r\n          <div class=\"col-md-4\">\r\n            <label class=\"form-label\"><span *ngIf=\"input == 'date' && formGroup.value.type == 'policy'\">From Date</span>\r\n              Field Name</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"name\" placeholder=\"Field Name\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('name')\" [class.is-valid]=\"isControlValid('name')\"\r\n              formControlName=\"name\" />\r\n          </div>\r\n\r\n          <!-- Core Name -->\r\n          <div class=\"col-md-4\">\r\n            <label class=\"form-label\"><span *ngIf=\"input == 'date' && formGroup.value.type == 'policy'\">From Date</span>\r\n              Core Server Field Name</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"coreName\" placeholder=\"Field Name\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('coreName')\"\r\n              [class.is-valid]=\"isControlValid('coreName')\" formControlName=\"coreName\" />\r\n          </div>\r\n          <!-- Table title -->\r\n          <div class=\"col-md-4\">\r\n            <label class=\"form-label\">Table Title</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"tableTitle\" placeholder=\"Table Title\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('tableTitle')\"\r\n              [class.is-valid]=\"isControlValid('tableTitle')\" formControlName=\"tableTitle\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <!-- Text -->\r\n          <div class=\"col-md-6\">\r\n            <label class=\"form-label\"><span *ngIf=\"input == 'date' && formGroup.value.type == 'policy'\">From Date</span>\r\n              Label Text</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"label\" placeholder=\"Label Text\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('label')\"\r\n              [class.is-valid]=\"isControlValid('label')\" formControlName=\"label\" />\r\n          </div>\r\n          <!-- Text -->\r\n\r\n          <!-- Text -->\r\n          <div class=\"col-md-6\">\r\n            <label class=\"form-label\"><span *ngIf=\"input == 'date' && formGroup.value.type == 'policy'\">From Date</span>\r\n              Label Text (Myanmar)</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"labelMM\" placeholder=\"Label Text (Myanmar)\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('labelMM')\"\r\n              [class.is-valid]=\"isControlValid('labelMM')\" formControlName=\"labelMM\" />\r\n          </div>\r\n          <!-- Text -->\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"input == 'date' \">\r\n          <div class=\"form-group row\">\r\n            <!-- type -->\r\n            <div class=\"col-md-12\">\r\n              <label>Select Table</label>\r\n              <select class=\"form-control form-control-sm\" name=\"type\" [class.is-invalid]=\"isControlInvalid('type')\"\r\n                formControlName=\"type\" (change)=\"changeDateType($event)\">\r\n                <option value=\"date\">Normal Date</option>\r\n                <option value=\"policy\">Policy Date</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"input == 'date' && formGroup.value.type == 'policy' \">\r\n          <div class=\"form-group row\">\r\n            <!-- Name -->\r\n            <div class=\"col-md-3\">\r\n              <label class=\"form-label\">To Date Field Name</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"endName\" placeholder=\"Field Name\"\r\n                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('endName')\"\r\n                [class.is-valid]=\"isControlValid('endName')\" formControlName=\"endName\" />\r\n            </div>\r\n\r\n            <!-- Name -->\r\n            <div class=\"col-md-3\">\r\n              <label class=\"form-label\">To Date Core Server Field Name</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"endCoreName\" placeholder=\"Field Name\"\r\n                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('endCoreName')\"\r\n                [class.is-valid]=\"isControlValid('endCoreName')\" formControlName=\"endCoreName\" />\r\n            </div>\r\n\r\n\r\n            <!-- </div> -->\r\n            <!-- <div class=\"form-group row\"> -->\r\n            <!-- Text -->\r\n            <div class=\"col-md-3\">\r\n              <label class=\"form-label\">To Date Label Text</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"endLabel\" placeholder=\"Label Text\"\r\n                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('endLabel')\"\r\n                [class.is-valid]=\"isControlValid('endLabel')\" formControlName=\"endLabel\" />\r\n            </div>\r\n            <!-- Text -->\r\n            <!-- Text -->\r\n            <div class=\"col-md-3\">\r\n              <label class=\"form-label\"> To Date Label Text (Myanmar)</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"endLabelMM\"\r\n                placeholder=\"Label Text (Myanmar)\" autocomplete=\"off\"\r\n                [class.is-invalid]=\"isControlInvalid('endLabelMM')\" [class.is-valid]=\"isControlValid('endLabelMM')\"\r\n                formControlName=\"endLabelMM\" />\r\n            </div>\r\n            <!-- Text -->\r\n\r\n          </div>\r\n\r\n        </ng-container>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"input == 'dialog'\">\r\n          <!-- type -->\r\n          <div class=\"col-md-3\">\r\n            <label>Select Table</label>\r\n            <select class=\"form-control form-control-sm\" name=\"type\" [class.is-invalid]=\"isControlInvalid('type')\"\r\n              formControlName=\"type\">\r\n              <option value=\"\">Select Table</option>\r\n              <option value=\"user\">User Table</option>\r\n              <option value=\"employee\">Employee Table</option>\r\n              <option value=\"product\">Product Table</option>\r\n              <option value=\"subproduct\">Sub Product Table</option>\r\n            </select>\r\n          </div>\r\n          <!-- type -->\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Placeholder</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"placeholder\" placeholder=\"Placeholder\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('placeholder')\"\r\n              [class.is-valid]=\"isControlValid('placeholder')\" formControlName=\"placeholder\" />\r\n          </div>\r\n          <!-- Placeholder -->\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Placeholder (Myanmar)</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"placeholderMM\"\r\n              placeholder=\"Placeholder (Myanmar)\" autocomplete=\"off\"\r\n              [class.is-invalid]=\"isControlInvalid('placeholderMM')\" [class.is-valid]=\"isControlValid('placeholderMM')\"\r\n              formControlName=\"placeholderMM\" />\r\n          </div>\r\n          <!-- Placeholder -->\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Value Field</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"valueField\" placeholder=\"Value Field\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('valueField')\"\r\n              [class.is-valid]=\"isControlValid('valueField')\" formControlName=\"valueField\" />\r\n          </div>\r\n          <!-- Placeholder -->\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"input == 'file'\">\r\n          <!-- type -->\r\n          <div class=\"col-md-3\">\r\n            <label>Select Type</label>\r\n            <select class=\"form-control form-control-sm\" name=\"type\" [class.is-invalid]=\"isControlInvalid('type')\"\r\n              formControlName=\"type\">\r\n              <option value=\"\">Select File Type</option>\r\n              <option value=\"all\">All Files</option>\r\n              <option value=\"image/*\">Image</option>\r\n              <option value=\"video/*\">Video</option>\r\n              <option value=\"audio/*\">Audio</option>\r\n              <option value=\"media_type\">All Media</option>\r\n            </select>\r\n          </div>\r\n          <!-- type -->\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Placeholder</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"placeholder\" placeholder=\"Placeholder\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('placeholder')\"\r\n              [class.is-valid]=\"isControlValid('placeholder')\" formControlName=\"placeholder\" />\r\n          </div>\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Placeholder (Myanmar)</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"placeholderMM\"\r\n              placeholder=\"Placeholder (Myanmar)\" autocomplete=\"off\"\r\n              [class.is-invalid]=\"isControlInvalid('placeholderMM')\" [class.is-valid]=\"isControlValid('placeholderMM')\"\r\n              formControlName=\"placeholderMM\" />\r\n          </div>\r\n          <!-- Placeholder -->\r\n          <!-- Text -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Specific Type</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"value\" placeholder=\"Default Value\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('value')\"\r\n              [class.is-valid]=\"isControlValid('value')\" formControlName=\"value\" />\r\n          </div>\r\n          <!-- Text -->\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"input == 'input'\">\r\n          <!-- type -->\r\n          <div class=\"col-md-3\">\r\n            <label>Select Type</label>\r\n            <select class=\"form-control form-control-sm\" name=\"type\" [class.is-invalid]=\"isControlInvalid('type')\"\r\n              formControlName=\"type\">\r\n              <option value=\"\">Select Input Type</option>\r\n              <option value=\"text\">Text</option>\r\n              <option value=\"email\">Email</option>\r\n              <option value=\"number\">Number</option>\r\n              <option value=\"currency\">Currency</option>\r\n              <option value=\"textarea\">Multiple Line</option>\r\n              <option value=\"tel\">Phone</option>\r\n              <option value=\"nrc\">NRC</option>\r\n            </select>\r\n          </div>\r\n          <!-- type -->\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Placeholder</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"placeholder\" placeholder=\"Placeholder\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('placeholder')\"\r\n              [class.is-valid]=\"isControlValid('placeholder')\" formControlName=\"placeholder\" />\r\n          </div>\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Placeholder (Myanmar)</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"placeholderMM\"\r\n              placeholder=\"Placeholder (Myanmar)\" autocomplete=\"off\"\r\n              [class.is-invalid]=\"isControlInvalid('placeholderMM')\" [class.is-valid]=\"isControlValid('placeholderMM')\"\r\n              formControlName=\"placeholderMM\" />\r\n          </div>\r\n          <!-- Placeholder -->\r\n          <!-- Text -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Default Value</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"value\" placeholder=\"Default Value\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('value')\"\r\n              [class.is-valid]=\"isControlValid('value')\" formControlName=\"value\" />\r\n          </div>\r\n          <!-- Text -->\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"formGroup.value.show\">\r\n          <!-- Size -->\r\n          <div class=\"col-lg-4\">\r\n            <label class=\"form-label\">Enter Mobile Size</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm form-control-solid\" name=\"size\"\r\n              placeholder=\"Mobile Size\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('size')\"\r\n              [class.is-valid]=\"isControlValid('size')\" formControlName=\"size\" />\r\n          </div>\r\n          <!-- Size -->\r\n\r\n          <!-- SizeMd -->\r\n          <div class=\"col-lg-4\">\r\n            <label class=\"form-label\">Enter Tablet Size</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm form-control-solid\" name=\"mdSize\"\r\n              placeholder=\"Tablet Size\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('mdSize')\"\r\n              [class.is-valid]=\"isControlValid('mdSize')\" formControlName=\"mdSize\" />\r\n          </div>\r\n          <!-- SizeMd -->\r\n\r\n          <!-- SizeLg -->\r\n          <div class=\"col-lg-4\">\r\n            <label class=\"form-label\">Enter Desktop Size</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm form-control-solid\" name=\"lgSize\"\r\n              placeholder=\"Desktop Size\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('lgSize')\"\r\n              [class.is-valid]=\"isControlValid('lgSize')\" formControlName=\"lgSize\" />\r\n          </div>\r\n          <!-- SizeLg -->\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"formGroup.value.inlineStyle \">\r\n          <!-- Label Size -->\r\n          <div class=\"col-lg-4\">\r\n            <label class=\"form-label\">Enter Label Size</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm form-control-solid\" name=\"labelSize\"\r\n              placeholder=\"Label Size\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('labelSize')\"\r\n              [class.is-valid]=\"isControlValid('labelSize')\" formControlName=\"labelSize\" />\r\n          </div>\r\n          <!-- Label Size -->\r\n\r\n          <!-- Input Size -->\r\n          <div class=\"col-lg-4\">\r\n            <label class=\"form-label\">Enter Input Size</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm form-control-solid\" name=\"inputSize\"\r\n              placeholder=\"Input Size\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('inputSize')\"\r\n              [class.is-valid]=\"isControlValid('inputSize')\" formControlName=\"inputSize\" />\r\n          </div>\r\n          <!-- Input Size -->\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"input == 'select' || input == 'checkbox' || input == 'radio'\">\r\n          <!-- type -->\r\n          <div class=\"col-md-3\" *ngIf=\"input != 'radio' \">\r\n            <label>Select Type</label>\r\n            <select class=\"form-control form-control-sm\" name=\"multi\" [class.is-invalid]=\"isControlInvalid('multi')\"\r\n              formControlName=\"multi\">\r\n              <!-- <option value=\"\">Select Input Type</option> -->\r\n              <option value=\"true\">Multi Select</option>\r\n              <option value=\"false\">Single Select</option>\r\n            </select>\r\n          </div>\r\n          <!-- type -->\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-3\" *ngIf=\"input != 'checkbox' && input != 'radio'\">\r\n            <label class=\"form-label\">Enter Placeholder</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"placeholder\" placeholder=\"Placeholder\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('placeholder')\"\r\n              [class.is-valid]=\"isControlValid('placeholder')\" formControlName=\"placeholder\" />\r\n          </div>\r\n          <!-- Text -->\r\n          <div class=\"col-md-3\" *ngIf=\"input != 'checkbox' && input != 'radio'\">\r\n            <label class=\"form-label\">Enter Placeholder (Myanmar)</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"placeholderMM\"\r\n              placeholder=\"Placeholder (Myanmar)\" autocomplete=\"off\"\r\n              [class.is-invalid]=\"isControlInvalid('placeholderMM')\" [class.is-valid]=\"isControlValid('placeholderMM')\"\r\n              formControlName=\"placeholderMM\" />\r\n          </div>\r\n          <!-- Placeholder -->\r\n          <!-- Text -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"form-label\">Enter Default Value</label>\r\n            <ng-container *ngIf=\"formGroup.value.multi == 'true';else multiSelect\">\r\n              <mat-select formControlName=\"value\" class=\"form-control form-control-sm\" multiple\r\n                placeholder=\"Select Default Value\">\r\n                <mat-option *ngFor=\"let item of optionData\" [value]=\"item.value\">{{item.text}}</mat-option>\r\n              </mat-select>\r\n            </ng-container>\r\n            <ng-template #multiSelect>\r\n              <select class=\"form-control form-control-sm\" name=\"value\" [class.is-invalid]=\"isControlInvalid('value')\"\r\n                formControlName=\"value\">\r\n                <option value=\"\">Select Default Value</option>\r\n                <option *ngFor=\"let item of optionData\" value=\"{{item.value}}\">{{item.text}}</option>\r\n              </select>\r\n            </ng-template>\r\n          </div>\r\n          <!-- Text -->\r\n        </div>\r\n        <div class=\"form-group row\" *ngIf=\"input == 'select' || input == 'checkbox' || input == 'radio'\"\r\n          style=\"align-items: center;\">\r\n          <ng-container *ngIf=\"input == 'select'\">\r\n            <!-- Policy Term -->\r\n            <!-- <div class=\"col-md-4\" style=\"padding-top: 20px;\">\r\n              <div class=\"row\" style=\"align-items: center;\">\r\n                <label class=\"col-md-6\">Policy Term</label>\r\n                <div class=\"col-md-6 col-xl-4\">\r\n                  <span class=\"switch switch-icon\">\r\n                    <label>\r\n                      <input type=\"checkbox\" formControlName=\"policyterm\" (change)=\"changePolicy()\" />\r\n                      <span></span>\r\n                    </label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n            <!-- /Policy Term -->\r\n            <!-- type -->\r\n            <div class=\"col-md-4\">\r\n              <label>Select Type</label>\r\n              <select class=\"form-control form-control-sm\" name=\"type\" [class.is-invalid]=\"isControlInvalid('type')\"\r\n                formControlName=\"type\" (change)=\"changePolicy()\">\r\n                <!-- <option value=\"\">Select Input Type</option> -->\r\n                <option value=\"select\">Normal</option>\r\n                <option value=\"policy\">Policy Term</option>\r\n                <option value=\"address\">Address Data</option>\r\n              </select>\r\n            </div>\r\n            <!-- type -->\r\n          </ng-container>\r\n          <!-- type -->\r\n          <div class=\"col-md-4\" *ngIf=\"formGroup.value.type == 'select' \">\r\n            <label>Select Data Type</label>\r\n            <select class=\"form-control form-control-sm\" name=\"master\" [class.is-invalid]=\"isControlInvalid('master')\"\r\n              formControlName=\"master\" (change)=\"changeDataType($event)\">\r\n              <!-- <option value=\"\">Select Input Type</option> -->\r\n              <option value=\"false\">Custom Option</option>\r\n              <option value=\"true\">Master Data</option>\r\n            </select>\r\n          </div>\r\n          <!-- type -->\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-4\" *ngIf=\"formGroup.value.master == 'true'\">\r\n            <label class=\"form-label\">Master Data Name</label>\r\n            <input id=\"typeahead-format\" type=\"text\" class=\"form-control form-control-sm\" name=\"masterData\"\r\n              placeholder=\"Master Data Name\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('masterData')\"\r\n              [class.is-valid]=\"isControlValid('masterData')\" formControlName=\"masterData\" [ngbTypeahead]=\"search\"\r\n              [resultFormatter]=\"formatter\" />\r\n          </div>\r\n          <!-- Text -->\r\n\r\n        </div>\r\n        <div class=\"form-group row\" *ngIf=\"formGroup.value.master == 'true'\">\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-6\">\r\n            <label class=\"form-label\">Value Field Name</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"valueField\" placeholder=\"Value Field Name\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('valueField')\"\r\n              [class.is-valid]=\"isControlValid('valueField')\" formControlName=\"valueField\" />\r\n          </div>\r\n          <!-- Text -->\r\n          <!-- Placeholder -->\r\n          <div class=\"col-md-6\">\r\n            <label class=\"form-label\">Showing Field Name</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"showField\" placeholder=\"Showing Field Name\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('showField')\"\r\n              [class.is-valid]=\"isControlValid('showField')\" formControlName=\"showField\" />\r\n          </div>\r\n          <!-- Text -->\r\n        </div>\r\n        <div class=\"form-group row\" *ngIf=\"isParty\">\r\n          <!-- type -->\r\n          <div class=\"col-6\">\r\n            <label>Is Party</label>\r\n            <select class=\"form-control form-control-sm\" name=\"party\" [class.is-invalid]=\"isControlInvalid('party')\"\r\n              formControlName=\"party\">\r\n              <option [ngValue]=\"true\">Yes</option>\r\n              <option [ngValue]=\"false\">No</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <!-- type -->\r\n          <div class=\"col-6\">\r\n            <label>Select Display Line</label>\r\n            <select class=\"form-control form-control-sm\" name=\"break\" [class.is-invalid]=\"isControlInvalid('break')\"\r\n              formControlName=\"break\">\r\n              <option value=\"false\">None</option>\r\n              <option value=\"true\">Break Line</option>\r\n            </select>\r\n          </div>\r\n          <!-- type -->\r\n          <div class=\"col-6\">\r\n            <label>Show In Preview</label>\r\n            <select class=\"form-control form-control-sm\" name=\"isHideView\"\r\n              [class.is-invalid]=\"isControlInvalid('isHideView')\" formControlName=\"isHideView\">\r\n              <option [ngValue]=\"false\">Yes</option>\r\n              <option [ngValue]=\"true\">No</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n      <ng-container\r\n        *ngIf=\"(input == 'select' || input == 'checkbox' || input == 'radio' || input == 'dialog') && formGroup.value.master == 'false'\">\r\n        <hr>\r\n        <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"optformGroup\" (ngSubmit)=\"submit()\">\r\n          <div class=\"form-group row\">\r\n            <!-- Name -->\r\n            <div class=\"col-md-3\">\r\n              <label class=\"form-label\" *ngIf=\"input != 'dialog'\">Enter Text</label>\r\n              <label class=\"form-label\" *ngIf=\"input == 'dialog'\">Enter Show Text</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"text\" placeholder=\"Show Text\"\r\n                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('text','opt')\"\r\n                [class.is-valid]=\"isControlValid('text','opt')\" formControlName=\"text\" />\r\n            </div>\r\n            <!-- Name -->\r\n            <div class=\"col-md-3\">\r\n              <label class=\"form-label\" *ngIf=\"input != 'dialog'\">Enter Text (Myanmar)</label>\r\n              <label class=\"form-label\" *ngIf=\"input == 'dialog'\">Enter Show Text (Myanmar)</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"textMM\" placeholder=\"Show Text (Myanmar)\"\r\n                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('textMM','opt')\"\r\n                [class.is-valid]=\"isControlValid('textMM','opt')\" formControlName=\"textMM\" />\r\n            </div>\r\n\r\n            <!-- Text -->\r\n            <div class=\"{{input == 'dialog' ? 'col-md-3' : 'col-md-4'}}\">\r\n              <label class=\"form-label\" *ngIf=\"input != 'dialog'\">Enter Value</label>\r\n              <label class=\"form-label\" *ngIf=\"input == 'dialog'\">Enter Input Field</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"value\" placeholder=\"Value\"\r\n                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('value','opt')\"\r\n                [class.is-valid]=\"isControlValid('value','opt')\" formControlName=\"value\" />\r\n            </div>\r\n            <!-- Name -->\r\n            <div class=\"{{input == 'dialog' ? 'col-md-3' : 'col-md-4'}}\" *ngIf=\"input == 'dialog'\">\r\n              <label class=\"form-label\">Enter Table Field</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"field\" placeholder=\"Enter Table Field\"\r\n                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('field','opt')\"\r\n                [class.is-valid]=\"isControlValid('field','opt')\" formControlName=\"field\" />\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <label class=\"form-label\"> &nbsp;</label>\r\n\r\n              <button type=\"submit\" class=\"btn btn-primary btn-elevate btn-block\"\r\n                [disabled]=\"optformGroup.invalid\">Save</button>\r\n            </div>\r\n            <!-- Text -->\r\n          </div>\r\n        </form>\r\n        <div class=\"table-responsive angular-bootstrap-table\">\r\n          <table class=\"table table-head-custom table-vertical-center\">\r\n            <thead>\r\n              <th>\r\n                Show Text\r\n              </th>\r\n              <th>\r\n                Show Text (Myanmar)\r\n              </th>\r\n              <th *ngIf=\"input == 'dialog'\">\r\n                Input Field Name\r\n              </th>\r\n              <th>\r\n                <span *ngIf=\"input == 'dialog'\">Table Field Name</span>\r\n                <span *ngIf=\"input != 'dialog'\">Value</span>\r\n              </th>\r\n              <th>ACTIONS</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let opt of optionData;let i = index\">\r\n\r\n                <td>{{ opt.text }}</td>\r\n                <td>{{ opt.textMM }}</td>\r\n                <td>{{ opt.value }}</td>\r\n                <td *ngIf=\"input == 'dialog'\">{{ opt.field }}</td>\r\n                <td>\r\n                  <a title=\"Delete Product\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm\" (click)=\"delete(i)\">\r\n                    <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\r\n                      class=\"svg-icon svg-icon-md svg-icon-danger\">\r\n                    </span>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"config && activePage == 2\">\r\n      <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"validFormGroup\" (ngSubmit)=\"submitValid()\">\r\n\r\n        <div class=\"form-group row\">\r\n          <!-- requiredInp -->\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-6 col-form-label text-md-right\">Required</label>\r\n              <div class=\"col-md-6 col-xl-4\">\r\n                <span class=\"switch switch-icon\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"requiredInp\" formControlName=\"requiredInp\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n                <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /requiredInp -->\r\n          <!-- minInp -->\r\n          <!-- isdob -->\r\n          <div class=\"col-md-3 col-sm-6\" *ngIf=\"input == 'date'\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-6 col-form-label text-md-right\">Is Age Limit</label>\r\n              <div class=\"col-md-6 col-xl-4\">\r\n                <span class=\"switch switch-icon\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"isdob\" formControlName=\"isdob\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n                <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /isdob -->\r\n          <ng-container\r\n            *ngIf=\"(validFormGroup.value.isdob || input != 'date') && (input != 'select' && input != 'radio' && input != 'checkbox' && input != 'dialog'  )\">\r\n            <div class=\"col-md-3 col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-6 col-form-label text-md-right\">Minimum</label>\r\n                <div class=\"col-md-6 col-xl-4\">\r\n                  <span class=\"switch switch-icon\">\r\n                    <label>\r\n                      <input type=\"checkbox\" name=\"minInp\" formControlName=\"minInp\" />\r\n                      <span></span>\r\n                    </label>\r\n                  </span>\r\n                  <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /minInp -->\r\n            <!-- Maximum -->\r\n            <div class=\"col-md-3 col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-6 col-form-label text-md-right\">Maximum</label>\r\n                <div class=\"col-md-6 col-xl-4\">\r\n                  <span class=\"switch switch-icon\">\r\n                    <label>\r\n                      <input type=\"checkbox\" name=\"maxInp\" formControlName=\"maxInp\" />\r\n                      <span></span>\r\n                    </label>\r\n                  </span>\r\n                  <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /Maximum -->\r\n          </ng-container>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group row\" *ngIf=\"validFormGroup.value.requiredInp\">\r\n          <div class=\"col-6\">\r\n            <label class=\"form-label\">Enter Require Error Message</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"requireMessage\"\r\n              placeholder=\"Enter Require Error Message\" autocomplete=\"off\" formControlName=\"requireMessage\" />\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <label class=\"form-label\">Enter Require Error Message (Myanmar)</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"requireMessageMM\"\r\n              placeholder=\"Enter Require Error Message (Myanmar)\" autocomplete=\"off\"\r\n              formControlName=\"requireMessageMM\" />\r\n          </div>\r\n        </div>\r\n        <ng-container\r\n          *ngIf=\"(validFormGroup.value.isdob || input != 'date') && (input != 'select' && input != 'radio' && input != 'checkbox' && input != 'dialog'  )\">\r\n          <div class=\"form-group row\" *ngIf=\"validFormGroup.value.minInp\">\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Enter Minimum Error Message</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"minMessage\"\r\n                placeholder=\"Enter Minimum Error Message\" autocomplete=\"off\" formControlName=\"minMessage\" />\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Enter Minimum Error Message (Myanmar)</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"minMessageMM\"\r\n                placeholder=\"Enter Minimum Error Message (Myanmar)\" autocomplete=\"off\" formControlName=\"minMessageMM\" />\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Enter Minimum Value</label>\r\n              <input type=\"number\" class=\"form-control form-control-sm\" name=\"minValue\"\r\n                placeholder=\"Enter Minimum Value\" autocomplete=\"off\" formControlName=\"minValue\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" *ngIf=\"validFormGroup.value.maxInp\">\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Enter Maximum Error Message</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"maxMessage\"\r\n                placeholder=\"Enter Maximum Error Message\" autocomplete=\"off\" formControlName=\"maxMessage\" />\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Enter Maximum Error Message (Myanmar)</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"maxMessageMM\"\r\n                placeholder=\"Enter Maximum Error Message (Myanmar)\" autocomplete=\"off\" formControlName=\"maxMessageMM\" />\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Enter Maximum Value</label>\r\n              <input type=\"number\" class=\"form-control form-control-sm\" name=\"maxValue\"\r\n                placeholder=\"Enter Maximum Value\" autocomplete=\"off\" formControlName=\"maxValue\" />\r\n            </div>\r\n\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!validFormGroup.value.isdob && input == 'date'\">\r\n          <div class=\"form-group row\">\r\n\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Error Message</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"dateMessage\" autocomplete=\"off\"\r\n                formControlName=\"dateMessage\" />\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Error Message (Myanmar)</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"dateMessageMM\" autocomplete=\"off\"\r\n                formControlName=\"dateMessageMM\" />\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label class=\"form-label\">Type</label>\r\n              <select class=\"form-control form-control-sm\" name=\"dateType\" formControlName=\"dateType\">\r\n                <option value=\"day\">Day</option>\r\n                <option value=\"week\">Week</option>\r\n                <option value=\"month\">Month</option>\r\n                <option value=\"year\">Year</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6\">\r\n              <label class=\"form-label\">From</label>\r\n              <input type=\"number\" class=\"form-control form-control-sm\" name=\"from\" autocomplete=\"off\"\r\n                formControlName=\"from\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label class=\"form-label\">To</label>\r\n              <input type=\"number\" class=\"form-control form-control-sm\" name=\"to\" autocomplete=\"off\"\r\n                formControlName=\"to\" />\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"config && activePage == 3\">\r\n      <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"parentFormGroup\">\r\n        <div class=\"form-group row\">\r\n          <!-- isParent -->\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-6 col-form-label text-md-right\">Is dependency</label>\r\n              <div class=\"col-md-6 col-xl-4\">\r\n                <span class=\"switch switch-icon\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"isParent\" formControlName=\"isParent\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n                <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /isParent -->\r\n          <!-- show -->\r\n          <ng-container *ngIf=\"parentFormGroup.value.isParent\">\r\n            <div class=\"col-md-3 col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-6 col-form-label text-md-right\">Show input by parent value</label>\r\n                <div class=\"col-md-6 col-xl-4\">\r\n                  <span class=\"switch switch-icon\">\r\n                    <label>\r\n                      <input type=\"checkbox\" name=\"show\" formControlName=\"show\" />\r\n                      <span></span>\r\n                    </label>\r\n                  </span>\r\n                  <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /Disabeld -->\r\n            <!-- isRelated -->\r\n            <div class=\"col-md-3 col-sm-6\"\r\n              *ngIf=\"input == 'select' || input == 'radio' || input == 'checkbox' || input == 'dialog' \">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-6 col-form-label text-md-right\">Related option with parent</label>\r\n                <div class=\"col-md-6 col-xl-4\">\r\n                  <span class=\"switch switch-icon\">\r\n                    <label>\r\n                      <input type=\"checkbox\" name=\"isRelated\" formControlName=\"isRelated\" />\r\n                      <span></span>\r\n                    </label>\r\n                  </span>\r\n                  <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /isRelated -->\r\n            <div class=\"col-md-3 col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-6 col-form-label text-md-right\">Parent value is multiple</label>\r\n                <div class=\"col-md-6 col-xl-4\">\r\n                  <span class=\"switch switch-icon\">\r\n                    <label>\r\n                      <input type=\"checkbox\" name=\"isArray\" formControlName=\"isArray\" />\r\n                      <span></span>\r\n                    </label>\r\n                  </span>\r\n                  <!-- <div class=\"form-text text-muted\">\r\n                  Enable Input Label\r\n                </div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-container>\r\n        </div>\r\n        <ng-container *ngIf=\"parentFormGroup.value.isParent\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"{{parentFormGroup.value.isRelated ? 'col-md-6' : 'col-md-12'}}\">\r\n              <label class=\"form-label\">Enter parent field name</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"parentName\" placeholder=\"Enter parent name\"\r\n                autocomplete=\"off\" formControlName=\"parentName\" />\r\n            </div>\r\n            <div class=\"col-md-6\" *ngIf=\"parentFormGroup.value.isRelated\">\r\n              <label class=\"form-label\">Enter related field name</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"relatedField\"\r\n                placeholder=\"Enter related field name\" autocomplete=\"off\" formControlName=\"relatedField\" />\r\n            </div>\r\n          </div>\r\n          <ng-container *ngIf=\"parentFormGroup.value.show\">\r\n            <div class=\"form-group row\" *ngFor=\"let item of parentValue;let i = index\">\r\n              <div class=\"{{parentFormGroup.value.isArray ? 'col-md-8' : 'col-md-12'}}\">\r\n                <label class=\"form-label\">\r\n                  Enter Value <span *ngIf=\"parentFormGroup.value.isArray\">({{ i + 1 }})</span>\r\n                </label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" name=\"relatedField\" placeholder=\"Enter value\"\r\n                  autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"item['data'+i]\" />\r\n              </div>\r\n              <div class=\"col-md-4\" *ngIf=\"parentFormGroup.value.isArray\">\r\n                <label class=\"form-label\"> &nbsp;</label>\r\n                <button class=\"btn btn-block btn-sm btn-danger\" (click)=\"removeValue(i)\"\r\n                  *ngIf=\"i < (parentValue.length - 1)\">Remove</button>\r\n                <button class=\"btn btn-block btn-sm btn-success\" (click)=\"addValue()\"\r\n                  *ngIf=\"i == (parentValue.length - 1)\">Add New</button>\r\n\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </form>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"config && activePage == 4\">\r\n      <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"funFormGroup\">\r\n        <div class=\"form-group row\">\r\n          <!-- isParent -->\r\n          <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-6 col-form-label text-md-right\">Is Function</label>\r\n              <div class=\"col-md-6 col-xl-4\">\r\n                <span class=\"switch switch-icon\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"isFun\" formControlName=\"isFun\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- /isParent -->\r\n        </div>\r\n        <ng-container *ngIf=\"funFormGroup.value.isFun\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n              <label class=\"form-label\">Function Name</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" name=\"functionName\" placeholder=\"Function Name\"\r\n                autocomplete=\"off\" formControlName=\"funName\" [ngbTypeahead]=\"searchFunName\"\r\n                [resultFormatter]=\"formatter\" />\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n              <label class=\"form-label\">Event Type (Proccess in value change)</label>\r\n              <select class=\"form-control form-control-sm\" name=\"type\" formControlName=\"type\">\r\n                <option value=\"trigger\">Trigger Function</option>\r\n                <option value=\"getdata\">Get Function Out Data</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"modal.dismiss({type:'delete'})\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <ng-container *ngIf=\"config\">\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\">Save</button>\r\n    </ng-container>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 85198:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/export-config-modal/export-config-modal.component.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      <ng-container *ngIf=\"config\">\r\n        Export Config ( {{config.pageTitle}} )\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\" >\r\n    <ng-container *ngIf=\"config\">\r\n      <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\">\r\n        <div class=\"form-group row\">\r\n          <!-- Text -->\r\n          <div class=\"col-lg-12\">\r\n            <label class=\"form-label\">Export Config Name</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"label\"\r\n              placeholder=\"Config Name\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('label')\"\r\n              [class.is-valid]=\"isControlValid('label')\" formControlName=\"label\" />\r\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'label')\">Export Config Nname is required</div>\r\n          </div>\r\n         \r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <!-- Size -->\r\n          <div class=\"col-lg-12\">\r\n            <label class=\"form-label\">IncludConfig Name</label>\r\n            <textarea type=\"simple\" class=\"form-control form-control-sm form-control-solid\" name=\"simple\"\r\n              placeholder=\"Button Size\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('simple')\"\r\n              [class.is-valid]=\"isControlValid('simple')\" formControlName=\"simple\" rows=\"3\"></textarea>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n   \r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <ng-container *ngIf=\"config\">\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\"\r\n        [disabled]=\"formGroup.invalid\">Export</button>\r\n    </ng-container>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 36101:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/file-box/file-box.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"config\" [formGroup]=\"group\">\r\n  <div class=\"form-group\" [ngClass]=\"{'row': config.inlineStyle}\">\r\n    <label *ngIf=\"config.isLabel\"\r\n      class=\"{{config.inlineStyle ? 'col-'+config.labelSize+' col-form-label' : ''}}\">{{config.label}}</label>\r\n    <div *ngIf=\"!config.inlineStyle;else InlineForm\">\r\n      <input style=\"display: none;\" type=\"file\" class=\"form-control form-control-sm\"\r\n        accept=\"{{config.type != 'all' && !config.value ? config.type : config.value }}\" name=\"phone\"\r\n        placeholder=\"{{config.placeholder}}\" #selectedFile (change)=\"doFunction($event)\" />\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control form-control-sm\" [formControlName]=\"config.name\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openFile()\">Browse</button>\r\n        </div>\r\n      </div>\r\n      <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n    </div>\r\n    <ng-template #InlineForm>\r\n      <div class=\"col-{{config.inputSize}}\">\r\n        <input style=\"display: none;\" type=\"file\" class=\"form-control form-control-sm\" name=\"{{config.name}}\"\r\n          placeholder=\"{{config.placeholder}}\" #selectedFile (change)=\"doFunction($event)\" />\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control form-control-sm\" [formControlName]=\"config.name\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openFile()\">Browse</button>\r\n          </div>\r\n        </div>\r\n        <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 42569:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/form-view-modal/form-view-modal.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      {{pageName}}\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <dynamic-form #dynForm [config]=\"controls\" [tempData]=\"oldData\" (submit)=\"saveTemp($event)\"\r\n    [editStage]=\"stage\"></dynamic-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 91272:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/import-config-modal/import-config-modal.component.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      Import Page Configuration\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <div class=\"table-responsive angular-bootstrap-table\" *ngIf=\"showData.length > 0\">\r\n      <table class=\"table table-head-custom table-vertical-center\">\r\n        <thead>\r\n          <th>\r\n            Config Name\r\n          </th>\r\n          <th>\r\n            Include Component\r\n          </th>\r\n          <th>\r\n            Action\r\n          </th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let data of showData;let i = index;\" (click)=\"selectRow(i)\"\r\n            class=\"{{ i == selectedRow ? 'active' : ''}}\">\r\n            <td>\r\n              {{data.pageName}}\r\n            </td>\r\n            <td>\r\n              {{data.simpleTest}}\r\n            </td>\r\n            <td>\r\n              <a title=\"Delete sub product\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm\"\r\n                (click)=\"delete(i); $event.stopPropagation()\">\r\n                <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\r\n                  class=\"svg-icon svg-icon-md svg-icon-danger\">\r\n                </span>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 66451:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/input-box/input-box.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"config\" [formGroup]=\"group\">\r\n  <div class=\"form-group\" [ngClass]=\"{'row': config.inlineStyle}\">\r\n    <label *ngIf=\"config.isLabel\"\r\n      class=\"{{config.inlineStyle ? 'col-'+config.labelSize+' col-form-label' : ''}}\">{{config.label}}</label>\r\n    <div *ngIf=\"!config.inlineStyle;else InlineForm\">\r\n      <ng-container *ngIf=\"config.type === 'textarea'; else inputNoraml\">\r\n        <textarea class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n          [formControlName]=\"config.name\" (change)=\"doFunction()\"></textarea>\r\n      </ng-container>\r\n      <ng-template #inputNoraml>\r\n        <ng-container *ngIf=\"config.type == 'currency'; else inputText\">\r\n          <input type=\"tel\" currencyMask\r\n            [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\"\r\n            class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n            [formControlName]=\"config.name\" (focusout)=\"doFunction()\" />\r\n        </ng-container>\r\n        <ng-template #inputText>\r\n          <input type=\"{{config.type}}\" class=\"form-control form-control-sm\" name=\"{{config.name}}\"\r\n            placeholder=\"{{config.placeholder}}\" [formControlName]=\"config.name\" (change)=\"doFunction()\" />\r\n        </ng-template>\r\n      </ng-template>\r\n\r\n      <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n    </div>\r\n    <ng-template #InlineForm>\r\n      <div class=\"col-{{config.inputSize}}\">\r\n        <ng-container *ngIf=\"config.type === 'textarea';else inputNoraml2; \">\r\n          <textarea class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n            [formControlName]=\"config.name\" (change)=\"doFunction()\"></textarea>\r\n        </ng-container>\r\n        <ng-template #inputNoraml2>\r\n          <ng-container *ngIf=\"config.type == 'currency'; else inputText2\">\r\n            <input type=\"tel\" currencyMask\r\n              [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\"\r\n              class=\"form-control form-control-sm\" name=\"{{config.name}}\" placeholder=\"{{config.placeholder}}\"\r\n              [formControlName]=\"config.name\" (focusout)=\"doFunction()\" />\r\n          </ng-container>\r\n          <ng-template #inputText2>\r\n            <input type=\"{{config.type}}\" class=\"form-control form-control-sm\" name=\"{{config.name}}\"\r\n              placeholder=\"{{config.placeholder}}\" [formControlName]=\"config.name\" (change)=\"doFunction()\" />\r\n          </ng-template>\r\n        </ng-template>\r\n        <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 88606:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/label-box/label-box.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"default\" [style.background-color]=\"config.label\" [style.color]=\"config.coreName\"\r\n  [style.fontSize]=\"config.labelSize+config.endLabel\" [style.fontWeight]=\"config.endLabelMM\"\r\n  [style.borderTop]=\"config.multi ? '1px solid rgba(0, 0, 0, 0.1)' : 'none' \"\r\n  [style.borderRight]=\"config.inlineStyle ? '1px solid rgba(0, 0, 0, 0.1)' : 'none' \"\r\n  [style.borderBottom]=\"config.readonly ? '1px solid rgba(0, 0, 0, 0.1)' : 'none' \"\r\n  [style.borderLeft]=\"config.disabled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none' \"\r\n  >\r\n  {{config.name}}\r\n</div>");

/***/ }),

/***/ 93745:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/label-config-modal/label-config-modal.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      Label Setting\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\">\r\n      <div class=\"form-group row\">\r\n        <!--  -->\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"row\" style=\"align-items: center;\">\r\n            <label class=\"col-md-6 col-form-label text-md-right\">Border Top</label>\r\n            <div class=\"col-md-6\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input type=\"checkbox\" name=\"show\" formControlName=\"multi\" />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--  -->\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"row\" style=\"align-items: center;\">\r\n\r\n            <label class=\"col-md-6 col-form-label text-md-right\">Border Right</label>\r\n            <div class=\"col-md-6\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input type=\"checkbox\" name=\"show\" formControlName=\"inlineStyle\" />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--  -->\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"row\" style=\"align-items: center;\">\r\n            <label class=\"col-md-6 col-form-label text-md-right\">Border Bottom</label>\r\n            <div class=\"col-md-6\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input type=\"checkbox\" name=\"show\" formControlName=\"readonly\" />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--  -->\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"row\" style=\"align-items: center;\">\r\n            <label class=\"col-md-6 col-form-label text-md-right\">Border Left</label>\r\n            <div class=\"col-md-6\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input type=\"checkbox\" name=\"show\" formControlName=\"disabled\" />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--  -->\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-md-12\">\r\n          <label class=\"form-label\">Label Id</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"placeholder\"\r\n            placeholder=\"Label Id\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('placeholder')\"\r\n            [class.is-valid]=\"isControlValid('placeholder')\" formControlName=\"placeholder\" />\r\n          <!-- <div class=\"feedback\">Enter Your <b>Label Text</b></div> -->\r\n        </div>\r\n        <!-- type -->\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-md-12\">\r\n          <label class=\"form-label\">Label Text</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"name\"\r\n            placeholder=\"Label Text\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('name')\"\r\n            [class.is-valid]=\"isControlValid('name')\" formControlName=\"name\" />\r\n          <!-- <div class=\"feedback\">Enter Your <b>Label Text</b></div> -->\r\n        </div>\r\n        <!-- type -->\r\n      </div>\r\n      <!--  -->\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-label\">Label Background</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"label\"\r\n            placeholder=\"#fffff or white\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('label')\"\r\n            [class.is-valid]=\"isControlValid('label')\" formControlName=\"label\" />\r\n          <!-- <div class=\"feedback\">Enter Your <b>Label Background</b></div> -->\r\n        </div>\r\n        <!-- type -->\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-label\">Label Text Color</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"coreName\"\r\n            placeholder=\"#fffff or white\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('coreName')\"\r\n            [class.is-valid]=\"isControlValid('coreName')\" formControlName=\"coreName\" />\r\n          <!-- <div class=\"feedback\">Enter Your <b>Text Color</b></div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-label\">Label Text Size</label>\r\n          <input type=\"number\" class=\"form-control form-control-sm form-control-solid\" name=\"labelSize\"\r\n            placeholder=\"Enter Your Text Size\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('labelSize')\"\r\n            [class.is-valid]=\"isControlValid('labelSize')\" formControlName=\"labelSize\" />\r\n          <!-- <div class=\"feedback\">Enter Your <b>Text Size</b></div> -->\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-label\">Size Unit</label>\r\n          <select class=\"form-control form-control-sm form-control-solid\" name=\"endLabel\" autocomplete=\"off\"\r\n            [class.is-invalid]=\"isControlInvalid('endLabel')\" [class.is-valid]=\"isControlValid('endLabel')\"\r\n            formControlName=\"endLabel\">\r\n            <option *ngFor=\"let item of sizeOpt\" value=\"{{item}}\">{{item}}</option>\r\n          </select>\r\n          <!-- <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"endLabel\"\r\n            placeholder=\"#fffff or white\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('endLabel')\"\r\n            [class.is-valid]=\"isControlValid('endLabel')\" formControlName=\"endLabel\" /> -->\r\n          <!-- <div class=\"feedback\">Select Your <b>Size Unit</b></div> -->\r\n        </div>\r\n        <!-- -->\r\n        <!-- type -->\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-12\">\r\n          <label class=\"form-label\">Label Text Style</label>\r\n          <select class=\"form-control form-control-sm form-control-solid\" name=\"endLabelMM\" autocomplete=\"off\"\r\n            [class.is-invalid]=\"isControlInvalid('endLabelMM')\" [class.is-valid]=\"isControlValid('endLabelMM')\"\r\n            formControlName=\"endLabelMM\">\r\n            <option *ngFor=\"let item of fontOpt\" value=\"{{item}}\">{{item}}</option>\r\n          </select>\r\n          <!-- <div class=\"feedback\">Select Your <b>Text Style</b></div> -->\r\n        </div>\r\n      </div>\r\n    \r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"modal.dismiss({type:'delete'})\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\"\r\n      [disabled]=\"formGroup.invalid\">Save</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 96792:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/page-config-modal/page-config-modal.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      Page Setting\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\">\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-lg-12\">\r\n          <label class=\"form-label\">Page Title</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"title\"\r\n            placeholder=\"Page Title\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('title')\"\r\n            [class.is-valid]=\"isControlValid('title')\" formControlName=\"title\" />\r\n          <div class=\"feedback\">Enter Your <b>Page Title</b></div>\r\n        </div>\r\n        <!-- type -->\r\n      </div>\r\n      <!--  -->\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-lg-12\">\r\n          <label class=\"form-label\">Table Name</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"tableName\"\r\n            placeholder=\"Table Name\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('tableName')\"\r\n            [class.is-valid]=\"isControlValid('tableName')\" formControlName=\"tableName\" />\r\n          <div class=\"feedback\">Enter Your <b>Table Name</b></div>\r\n        </div>\r\n        <!-- type -->\r\n      </div>\r\n      <!--  -->\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-lg-12\">\r\n          <label class=\"form-label\">Unit ID</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"unitCode\"\r\n            placeholder=\"Table Name\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('unitCode')\"\r\n            [class.is-valid]=\"isControlValid('unitCode')\" formControlName=\"unitCode\" />\r\n          <div class=\"feedback\">Enter Your <b>Unit ID</b></div>\r\n        </div>\r\n        <!-- type -->\r\n      </div>\r\n      <!--  -->\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-lg-12\">\r\n          <label class=\"form-label\">Page Type</label>\r\n          <select class=\"form-control form-control-sm form-control-solid\" name=\"type\" placeholder=\"Page Type\"\r\n            autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('type')\" [class.is-valid]=\"isControlValid('type')\"\r\n            formControlName=\"type\">\r\n            <option value=\"form\">Page</option>\r\n            <option value=\"table\">Table</option>\r\n          </select>\r\n          <div class=\"feedback\">Select Your <b>Page Type</b></div>\r\n        </div>\r\n        <!-- type -->\r\n      </div>\r\n      <!--  -->\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-12\">\r\n          <label>Page Icon</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"icon\" placeholder=\"Page Icon\"\r\n            autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('icon')\" [class.is-valid]=\"isControlValid('icon')\"\r\n            formControlName=\"icon\" />\r\n          <div class=\"feedback\">Enter Your FontAwesome Icon <b>(fa-users)</b></div>\r\n          <div class=\"feedback\">example: <a href=\"https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free\"\r\n              target=\"_blank\">https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free</a></div>\r\n\r\n        </div>\r\n      </div>\r\n      <!--  -->\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-lg-12\">\r\n          <label class=\"form-label\">Function Name</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm form-control-solid\" name=\"function\"\r\n            placeholder=\"Function Name\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('function')\"\r\n            [class.is-valid]=\"isControlValid('function')\" formControlName=\"function\" />\r\n          <div class=\"feedback\">Enter Trigger <b>Function Name</b> after form submitted</div>\r\n        </div>\r\n        <!-- type -->\r\n      </div>\r\n      <!--  -->\r\n      <div class=\"form-group row\">\r\n        <!-- Text -->\r\n        <div class=\"col-lg-12\">\r\n          <label class=\"form-label\">Is Party</label>\r\n          <select class=\"form-control form-control-sm form-control-solid\" name=\"party\" placeholder=\"Function Name\"\r\n            autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('party')\" [class.is-valid]=\"isControlValid('party')\"\r\n            formControlName=\"party\">\r\n            <option [ngValue]=\"false\">No</option>\r\n            <option [ngValue]=\"true\">Yes</option>\r\n          </select>\r\n        </div>\r\n        <!-- type -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <!-- <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"modal.dismiss({type:'delete'})\">Delete</button> -->\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" [disabled]=\"!title\"\r\n      (click)=\"modal.dismiss()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\"\r\n      [disabled]=\"formGroup.invalid\">Save</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 92323:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/print-view-box/print-view-box.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"print-grid\" id=\"componentID\">\r\n  <!-- static area -->\r\n  <div class=\"print-header\">\r\n    <div class=\"header-title\">\r\n      <img src=\"assets/images/kbzms.png\" alt=\"\" class=\"logo\">\r\n      KBZ MS & KBZ LIFE\r\n    </div>\r\n    <div class=\"product-name\">{{product.name | titlecase}} Proposal</div>\r\n    <div class=\"qr\">\r\n      <qrcode [qrdata]=\"qrLocation\" [width]=\"50\" [errorCorrectionLevel]=\"'M'\" [elementType]=\"'svg'\"></qrcode>\r\n    </div>\r\n  </div>\r\n  <div class=\"product-detail\">\r\n    <table width=\"50%\">\r\n      <tr>\r\n        <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Branch</td>\r\n        <td class=\"value-col\"></td>\r\n        <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Date</td>\r\n        <td class=\"value-col\">{{today | date: \"dd/MM/YYYY\"}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Agent Name</td>\r\n        <td class=\"value-col\">{{agentName}}</td>\r\n        <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Proposal No</td>\r\n        <td class=\"value-col\">{{resourcesId}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <!-- static area -->\r\n  <ng-container *ngIf=\"formatedData\">\r\n    <ng-container *ngFor=\"let page of temConfig\">\r\n      <ng-container *ngIf=\"page.type == 'static';else dynPrint\">\r\n        <ng-container staticPirint [compId]=\"page.id\" [resourcesId]=\"resourcesId\"></ng-container>\r\n      </ng-container>\r\n      <ng-template #dynPrint>\r\n        <ng-container *ngIf=\"page.pageType == 'form'\">\r\n          <ng-container *ngFor=\"let tableObj of page.tables\">\r\n            <div class=\"title-style left-border-image mt-5\">{{tableObj.title}}</div>\r\n            <table width=\"100%\">\r\n              <tr>\r\n                <td class=\"field-col\" style=\"border: 0px;\"></td>\r\n                <td class=\"value-col\" style=\"border: 0px;\"></td>\r\n                <td class=\"field-col\" style=\"border: 0px;\"></td>\r\n                <td class=\"value-col\" style=\"border: 0px;\"></td>\r\n                <td class=\"field-col\" style=\"border: 0px;\"></td>\r\n                <td class=\"value-col\" style=\"border: 0px;\"></td>\r\n                <td class=\"field-col\" style=\"border: 0px;\"></td>\r\n                <td class=\"value-col\" style=\"border: 0px;\"></td>\r\n              </tr>\r\n              <ng-container *ngFor=\"let row of tableObj.row\">\r\n                <tr>\r\n                  <ng-container *ngFor=\"let col of row.column\">\r\n                    <ng-container *ngIf=\"!col.data\">\r\n                      <td class=\"field-col\" [class.fix-col]=\"col.size\" [style.background-color]=\"col.background\"\r\n                        [style.color]=\"col.color\" [style.text-align]=\"col.align || 'center'\"\r\n                        [attr.rowspan]=\"col.rowspan > 0 ? col.rowspan : 1\"\r\n                        [attr.colspan]=\"col.colspan > 0 ? col.colspan : 1\">{{col.title}}\r\n                      </td>\r\n                      <td *ngIf=\"col.static\" class=\"value-col\" [style.color]=\"col.color\"\r\n                        [style.text-align]=\"col.align || 'center'\" [attr.rowspan]=\"col.rowspan > 0 ? col.rowspan : 1\"\r\n                        [attr.colspan]=\"col.colspan > 0 ? col.colspan : 1\">\r\n                        {{ getStatic(col.key)}}\r\n                      </td>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"col.data\">\r\n                      <td *ngIf=\"col.data.input == 'label'\" class=\"field-col\" [class.fix-col]=\"col.size\"\r\n                        [style.background-color]=\"col.background\" [style.color]=\"col.color\"\r\n                        [style.text-align]=\"col.align || 'center'\" [attr.rowspan]=\"col.rowspan > 0 ? col.rowspan : 1\"\r\n                        [attr.colspan]=\"col.colspan > 0 ? col.colspan : 1\">\r\n                        {{col.title}}\r\n                      </td>\r\n                      <td *ngIf=\"col.data.input != 'label'\" class=\"field-col\" [class.fix-col]=\"col.size\"\r\n                        [style.background-color]=\"col.background\" [style.color]=\"col.color\"\r\n                        [style.text-align]=\"col.align || 'center'\">{{col.title}}\r\n                      </td>\r\n                      <td *ngIf=\"col.data.input != 'label'\" class=\"value-col\" [style.color]=\"col.color\"\r\n                        [style.text-align]=\"col.align || 'center'\" [attr.rowspan]=\"col.rowspan > 0 ? col.rowspan : 1\"\r\n                        [attr.colspan]=\"col.colspan > 0 ? col.colspan : 1\">\r\n                        {{ getValue(col,tempData[page.tableName+page.id])}}\r\n                      </td>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"page.pageType == 'table'\">\r\n          <div class=\"title-style left-border-image mt-5\">{{page.tables[0].title}}</div>\r\n          <table style=\"width: 100;\" class=\"print-grid\" width=\"100%\">\r\n            <tr>\r\n              <td class=\"field-col\" style=\"border: 0px;\"></td>\r\n              <td class=\"value-col\" style=\"border: 0px;\"></td>\r\n              <td class=\"field-col\" style=\"border: 0px;\"></td>\r\n              <td class=\"value-col\" style=\"border: 0px;\"></td>\r\n              <td class=\"field-col\" style=\"border: 0px;\"></td>\r\n              <td class=\"value-col\" style=\"border: 0px;\"></td>\r\n              <td class=\"field-col\" style=\"border: 0px;\"></td>\r\n              <td class=\"value-col\" style=\"border: 0px;\"></td>\r\n            </tr>\r\n            <ng-container *ngFor=\"let row of page.tables[0].row\">\r\n              <tr>\r\n                <ng-container *ngFor=\"let col of row.column\">\r\n                  <ng-container *ngIf=\"col.data\">\r\n                    <td class=\"field-col\" [class.fix-col]=\"col.size\" [style.background-color]=\"col.background\"\r\n                      [style.color]=\"col.color\" [style.text-align]=\"col.align || 'center'\"\r\n                      [attr.rowspan]=\"col.rowspan > 0 ? col.rowspan : 1\"\r\n                      [attr.colspan]=\"col.colspan > 0 ? col.colspan : 1\">{{col.title}}\r\n                    </td>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngFor=\"let item of tempData[page.tableName+page.id]\">\r\n              <ng-container *ngFor=\"let row of page.tables[0].row\">\r\n                <tr>\r\n                  <ng-container *ngFor=\"let col of row.column\">\r\n                    <ng-container *ngIf=\"col.data\">\r\n                      <td class=\"field-col\" [style.text-align]=\"col.align || 'center'\"\r\n                        [attr.rowspan]=\"col.rowspan > 0 ? col.rowspan : 1\"\r\n                        [attr.colspan]=\"col.colspan > 0 ? col.colspan : 1\"> {{ getValue(col,item)}}\r\n                      </td>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </tr>\r\n              </ng-container>\r\n            </ng-container>\r\n          </table>\r\n        </ng-container>\r\n      </ng-template>\r\n\r\n    </ng-container>\r\n  </ng-container>\r\n  <div class=\"print-footer mt-5\">\r\n    <div>\r\n      <img src=\"assets/images/kbzms.png\" alt=\"\" class=\"logo\">\r\n    </div>\r\n    <p>\r\n      <u>Contact Us</u><br>\r\n      No.53, Strand Square, Merchant Road, Pabedan Township, Yangon.<br>\r\n      (+951) 2307000, 09 95 007 7000<br>\r\n      Email: customercare@kbz.com, Sales Channel: IA<br>\r\n    </p>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ 56295:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/radio-box/radio-box.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"example-section\" *ngIf=\"config\" [formGroup]=\"group\">\r\n  <div class=\"form-group row\">\r\n    <label *ngIf=\"config.isLabel\" class=\"col-{{config.inlineStyle ? config.labelSize : '12'}}\">{{config.label}}</label>\r\n    <mat-radio-group [formControlName]=\"config.name\" class=\"col-{{config.inlineStyle ? config.inputSize : '12'}}\" (change)=\"doFunction()\">\r\n      <mat-radio-button class=\"mx-1\" *ngFor=\"let item of masterOption\" value=\"{{item.value}}\">{{item.text}}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n  <div><app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error></div>\r\n</section>");

/***/ }),

/***/ 6012:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/select-box/select-box.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"config && (!config.multi || config.multi == 'false')\" class=\"config.size\" [formGroup]=\"group\">\r\n  <div class=\"form-group\" [ngClass]=\"{'row': config.inlineStyle}\">\r\n    <label *ngIf=\"config.isLabel\"\r\n      class=\"{{config.inlineStyle ? 'col-'+config.labelSize+' col-form-label' : ''}}\">{{config.label}}</label>\r\n    <div *ngIf=\"!config.inlineStyle;else InlineForm\">\r\n      <ng-select [formControlName]=\"config.name\" (change)=\"doFunction()\"\r\n        class=\"ng-custom-select\" placeholder=\"{{config.placeholder}}\">\r\n        <!-- <ng-option [value]=\"null\">Select {{config.label}}</ng-option> -->\r\n        <ng-container *ngIf=\"config.master == 'true';else Otheroption\">\r\n          <ng-option *ngFor=\"let opt of masterOption\" [value]=\"opt.value\">{{opt.text}}</ng-option>\r\n        </ng-container>\r\n        <ng-template #Otheroption>\r\n          <ng-option *ngFor=\"let opt of config.options\" [value]=\"opt.value\">{{opt.text}}</ng-option>\r\n        </ng-template>\r\n      </ng-select>\r\n      <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n    </div>\r\n    <ng-template #InlineForm>\r\n      <div class=\"col-{{config.inputSize}}\">\r\n        <ng-select [formControlName]=\"config.name\" (change)=\"doFunction()\" class=\"ng-custom-select\" placeholder=\"{{config.placeholder}}\">\r\n          <!-- <ng-option [value]=\"null\">Select {{config.label}}</ng-option> -->\r\n          <!-- <option *ngFor=\"let opt of config.options\" [value]=\"{{opt.value}}\">{{opt.text}}</option> -->\r\n          <ng-container *ngIf=\"config.master == 'true';else Otheroption2\">\r\n            <ng-option *ngFor=\"let opt of masterOption\" [value]=\"opt.value\">{{opt.text}}</ng-option>\r\n          </ng-container>\r\n          <ng-template #Otheroption2>\r\n            <ng-option *ngFor=\"let opt of config.options\" [value]=\"opt.value\">{{opt.text}}</ng-option>\r\n          </ng-template>\r\n        </ng-select>\r\n        <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"config && config.multi && config.multi == 'true'\" class=\"config.size\" [formGroup]=\"group\">\r\n  <div class=\"form-group\" [ngClass]=\"{'row': config.inlineStyle}\">\r\n    <label *ngIf=\"config.isLabel\"\r\n      class=\"{{config.inlineStyle ? 'col-'+config.labelSize+' col-form-label' : ''}}\">{{config.label}}</label>\r\n    <div *ngIf=\"!config.inlineStyle;else InlineForm\">\r\n      <mat-select [formControlName]=\"config.name\" (change)=\"doFunction()\" class=\"form-control form-control-sm\" multiple>\r\n        <!-- <mat-option *ngFor=\"let opt of config.options\" value=\"{{opt.value}}\">{{opt.text}}</mat-option> -->\r\n        <ng-container *ngIf=\"config.master == 'true';else Otheroption3\">\r\n          <mat-option *ngFor=\"let opt of masterOption\" value=\"{{opt.value}}\">{{opt.text}}</mat-option>\r\n        </ng-container>\r\n        <ng-template #Otheroption3>\r\n          <mat-option *ngFor=\"let opt of config.options\" value=\"{{opt.value}}\">{{opt.text}}</mat-option>\r\n        </ng-template>\r\n      </mat-select>\r\n      <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n    </div>\r\n    <ng-template #InlineForm>\r\n      <div class=\"col-{{config.inputSize}}\">\r\n        <mat-select [formControlName]=\"config.name\" (change)=\"doFunction()\" class=\"form-control form-control-sm\"\r\n          multiple>\r\n          <ng-container *ngIf=\"config.master == 'true';else Otheroption4\">\r\n            <mat-option *ngFor=\"let opt of masterOption\" value=\"{{opt.value}}\">{{opt.text}}</mat-option>\r\n          </ng-container>\r\n          <ng-template #Otheroption4>\r\n            <mat-option *ngFor=\"let opt of config.options\" value=\"{{opt.value}}\">{{opt.text}}</mat-option>\r\n          </ng-template>\r\n        </mat-select>\r\n        <app-print-error [control]=\"group.controls[config.name]\" [valid]=\"config.validation\"></app-print-error>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n<!--  -->");

/***/ }),

/***/ 85672:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-print/addon-print/addon-print.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"addon-print\">\r\n  <div class=\"title-style left-border-image mt-5 mb-3\">Optional Coverage Detail</div>\r\n  <table class=\"tbody-align\">\r\n    <tr>\r\n      <td class=\"field-col\">\r\n        Optional Coverage\r\n      </td>\r\n      <td class=\"field-col\" *ngIf=\"addon.sumInsured\">\r\n        Sum Insured\r\n      </td>\r\n      <td class=\"field-col\" *ngIf=\"addon.unit\">\r\n        Unit\r\n      </td>\r\n      <td class=\"field-col\" *ngIf=\"addon.premium\">\r\n        Premium\r\n      </td>\r\n    </tr>\r\n    <tbody class=\"tbody-align val-col\">\r\n      <ng-container *ngFor=\"let addon of product.addOns;let i = index\">\r\n        <tr *ngIf=\"addOnData[addon.id]\">\r\n          <td class=\"field-value\">{{addon.description}}</td>\r\n          <td class=\"field-value\" *ngIf=\"addon.sumInsured\">\r\n            {{(addOnData[addon.id] ? addOnData[addon.id].sum : 0) | number}}\r\n          </td>\r\n          <td class=\"field-value\" *ngIf=\"addon.unit\">\r\n            {{(addOnData[addon.id] ? addOnData[addon.id].unit : 0)}}\r\n          </td>\r\n          <td class=\"field-value\" *ngIf=\"addon.premium\">\r\n            {{(addOnData[addon.id] ? addOnData[addon.id].premium : 0) | number}}\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</div>");

/***/ }),

/***/ 75102:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-print/coverage-print/coverage-print.component.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"addon-print\">\r\n  <div class=\"title-style left-border-image mt-5 mb-3\">Basic Coverage Detail</div>\r\n  <table>\r\n    <thead class=\"tbody-align\">\r\n      <tr>\r\n        <td class=\"field-col\">\r\n          Basic Coverage\r\n        </td>\r\n        <td class=\"field-col\" *ngIf=\"coverage.sumInsured\">\r\n          Sum Insured\r\n        </td>\r\n        <td class=\"field-col\" *ngIf=\"coverage.unit\">\r\n          Unit\r\n        </td>\r\n        <td class=\"field-col\" *ngIf=\"coverage.premium\">\r\n          Premium\r\n        </td>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"tbody-align\">\r\n      <ng-container *ngFor=\"let coverage of product.coverages;let i = index\">\r\n        <tr *ngIf=\"coverageData[coverage.id]\">\r\n          <td class=\"field-value\" style=\"text-align: center;\">{{coverage.description}}</td>\r\n          <td class=\"field-value\" *ngIf=\"coverage.sumInsured\">\r\n            {{(coverageData[coverage.id] ? coverageData[coverage.id].sum : 0) | number}}\r\n          </td>\r\n          <td class=\"field-value\" *ngIf=\"coverage.unit\">\r\n            {{(coverageData[coverage.id] ? coverageData[coverage.id].unit : 0)}}\r\n          </td>\r\n          <td class=\"field-value\" *ngIf=\"coverage.premium\">\r\n            {{(coverageData[coverage.id] ? coverageData[coverage.id].premium : 0) | number}}\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</div>");

/***/ }),

/***/ 72368:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-print/farmer-print/farmer-print.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"farmer-print\">\r\n  <div class=\"title-style left-border-image mt-5\">Declaration</div>\r\n  <p class=\"mb-1\">I hereby declare that above statement are correct and current health is in good condition</p>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Witness's Signautre</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Insured's Signautre</label>\r\n      <div class=\"sign-area\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Witness's Name</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Insured's Name</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Phone No.</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Date</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <p class=\"mb-1\">Underwriters review and assessment on the insured health condition.</p>\r\n  <div class=\"sign-row\" style=\"justify-content: flex-end;\">\r\n    <div class=\"sign-box\">\r\n      <label>Underwriter's Signautre</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\" style=\"justify-content: flex-end;\">\r\n    <div class=\"sign-box\">\r\n      <label>Name</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\" style=\"justify-content: flex-end;\">\r\n    <div class=\"sign-box\">\r\n      <label>Position</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"farmer-print\">\r\n  <div class=\"title-style left-border-image mt-5\">Admission</div>\r\n  <p class=\"mb-1\">This is the admission that above statements are correct and current health condition of own self is\r\n    good. </p>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Witness's Signautre</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Insured's Signautre</label>\r\n      <div class=\"sign-area\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Witness's Name</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Insured's Name</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Phone No.</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Date</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--  -->\r\n  <p class=\"mb-1\">As an inspector to accept the proposal, to give a remark whether insured's health condition is\r\n    good/not.</p>\r\n  <div class=\"sign-row\" style=\"justify-content: flex-end;\">\r\n    <div class=\"sign-box\">\r\n      <label>Inspector's Signautre</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\" style=\"justify-content: flex-end;\">\r\n    <div class=\"sign-box\">\r\n      <label>Name</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\" style=\"justify-content: flex-end;\">\r\n    <div class=\"sign-box\">\r\n      <label>Position</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 41274:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-print/fire-detail-print/fire-detail-print.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"addon-print\">\r\n  <div class=\"title-style left-border-image mt-5 mb-3\">Policy Information Detail</div>\r\n  <table width=\"100%\">\r\n    <tr>\r\n      <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Policy Effective Date\r\n      </td>\r\n      <td class=\"value-col\">{{detail.startDate | date: 'dd/MM/YYYY'}}</td>\r\n      <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Policy Expiry Date\r\n      </td>\r\n      <td class=\"value-col\">{{detail.endDate | date: 'dd/MM/YYYY'}}</td>\r\n      <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Policy Duration Days\r\n      </td>\r\n      <td class=\"value-col\">{{detail.policyDuration}} Days</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Policy Type</td>\r\n      <td class=\"value-col\" colspan=\"2\">{{detail.policyType == \"T-001\" ? \"Normal\" : \"Declaration\"}}</td>\r\n      <td class=\"field-col\" style=\"background-color: rgb(221, 235, 247);color: rgb(31, 78, 120);\">Currency</td>\r\n      <td class=\"value-col\" colspan=\"2\">{{detail.currency}}</td>\r\n    </tr>\r\n  </table>\r\n</div>");

/***/ }),

/***/ 38938:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-print/fire-risk-print/fire-risk-print.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"addon-print\">\r\n  <div class=\"title-style left-border-image mt-5 mb-3\">Optional Coverage Detail</div>\r\n  <table class=\"tbody-align\">\r\n    <tr>\r\n      <td class=\"field-col\">\r\n        Building Desc\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Type of Building\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Occupation of Building\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Building Class\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Construction of Roof\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Construction of Walls\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Construction of Floors\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Story of Building\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Total Square Feet\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Year of Construction\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Special Decoration\r\n      </td>\r\n      <td class=\"field-col\">\r\n        Proposed SI\r\n      </td>\r\n    </tr>\r\n    <tbody class=\"tbody-align val-col\">\r\n      <ng-container *ngFor=\"let data of listData;\">\r\n        <tr>\r\n          <td class=\"field-value\">{{data.buildingDescription}}</td>\r\n          <td class=\"field-value\">{{data.typeOfBuildingValue}}</td>\r\n          <td class=\"field-value\">{{data.occupationOfBuildingValue}}</td>\r\n          <td class=\"field-value\">{{data.buildingClassValue}}</td>\r\n          <td class=\"field-value\">{{data.constructionOfRoofValue}}</td>\r\n          <td class=\"field-value\">{{data.constructionOfWallValue}}</td>\r\n          <td class=\"field-value\">{{data.constructionOfFloorValue}}</td>\r\n          <td class=\"field-value\">{{data.storyOfBuilding}}</td>\r\n          <td class=\"field-value\">{{data.totalSquareFoot}}</td>\r\n          <td class=\"field-value\">{{data.yearOfConstruction}}</td>\r\n          <td class=\"field-value\">{{data.specialDecoration ? \"Yes\":\"No\"}}</td>\r\n          <td class=\"field-value\">{{data.sumInsure | number}}</td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</div>");

/***/ }),

/***/ 75637:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-print/health-print/health-print.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"farmer-print\">\r\n  <div class=\"title-style left-border-image mt-5\">DECLARATION BY PROPOSER</div>\r\n  <p class=\"mb-1\">I hereby certify that above statements are true and correct with my present health conditions.\r\n  </p>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Witness's Signature</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Insured's Signature</label>\r\n      <div class=\"sign-area\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Witness's Name </label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Insured's Name</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>N.R.C No</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>N.R.C No</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Address</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Address</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Health Conditions (Based on appearance )</label>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>\r\n        <span>Good</span>\r\n        <input type=\"checkbox\" name=\"health\" id=\"\">\r\n        <span class=\"ml-2\">Good</span>\r\n        <input type=\"checkbox\" name=\"health\" id=\"\">\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <!-- <p class=\"mb-1\">\r\n    Health Conditions (Based on appearance )\r\n  </p> -->\r\n\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Date</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Inspector Signature</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Name</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Position</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ 8019:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-print/moter-print/moter-print.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"moter-print\">\r\n\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>DATE</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>PROPOSER SIGNATURE</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>NRC</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Date of Birth</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ 67037:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/static-print/pa-print/pa-print.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"farmer-print\">\r\n  <div class=\"title-style left-border-image mt-5\">DECLARATION BY PROPOSER</div>\r\n  <p class=\"mb-1\">I hereby declare that I am in good health and free from any physical injuries the day which I\r\n    submitting the proposal. I certify that the above-mentioned statements are true and correct to the best of my\r\n    knowledge. I am fully aware that these are basic principles of the agreement between the insurance company and me. I\r\n    also know that if any information, declarations and supplements are inaccurate, the agreement will be voided and the\r\n    benefits will be forfeited.\r\n  </p>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Agent/Witness Signature</label>\r\n      <div class=\"sign-area\">\r\n        <ng-container *ngIf=\"signId\">\r\n          <img [src]=\"Default_DOWNLOAD_URL+signId\" alt=\"\" class=\"sign-img\">\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Name</label>\r\n      <div class=\"sign-area\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Address</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n    <div class=\"sign-box\">\r\n      <label>Phone No.</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"sign-row\">\r\n    <div class=\"sign-box\">\r\n      <label>Insured's Signature</label>\r\n      <div class=\"sign-area\"></div>\r\n    </div>\r\n\r\n  </div>\r\n  <p class=\"mb-1\">\r\n    <u><b>Remarks:</b></u><br>\r\n    The benefits will be issued to beneficiary's parents or guardians if he/she is under 18.The following policies will\r\n    be practiced if the insured or beneficiary is dead earlier than the insured, and meanwhile, the death of the insured\r\n    occurred before the amendment or transfer is being made.<br>\r\n    1.the insured's husband or wife<br>\r\n    2.the insured's children<br>\r\n    3.the insured's grandchildren<br>\r\n    4.the insured's siblings<br>\r\n    5.the insured's parents<br>\r\n\r\n  </p>\r\n\r\n</div>");

/***/ }),

/***/ 82357:
/*!***************************************************************************!*\
  !*** ./src/app/pages/form-component/button-box/button-box.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tYm94LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 74223:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/form-component/checkbox-box/checkbox-box.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC1ib3guY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 44718:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/form-component/custom-dialog/custom-dialog.component.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".active {\n  background-color: #3699FF !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJjdXN0b20tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5OUZGICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */";

/***/ }),

/***/ 99177:
/*!***********************************************************************!*\
  !*** ./src/app/pages/form-component/date-box/date-box.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBREoiLCJmaWxlIjoiZGF0ZS1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xyXG4gIC5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcCA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICNFNEU2RUY7XHJcbiAgICBwYWRkaW5nOiAwcHggMC43NXJlbTtcclxuICB9XHJcblxyXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQgICA6IDVweDtcclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 69129:
/*!***************************************************************************!*\
  !*** ./src/app/pages/form-component/dialog-box/dialog-box.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYm94LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 13201:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-component/edit-button-modal/edit-button-modal.component.scss ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJ1dHRvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 75377:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/form-component/edit-input-modal/edit-input-modal.component.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWlucHV0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 80967:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/form-component/export-config-modal/export-config-modal.component.scss ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBvcnQtY29uZmlnLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 55385:
/*!***********************************************************************!*\
  !*** ./src/app/pages/form-component/file-box/file-box.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLWJveC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 30623:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/form-component/form-view-modal/form-view-modal.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".active {\n  background-color: #3699FF !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tdmlldy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImZvcm0tdmlldy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2OTlGRiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";

/***/ }),

/***/ 96239:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/form-component/import-config-modal/import-config-modal.component.scss ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".active {\n  background-color: #3699FF !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1jb25maWctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJpbXBvcnQtY29uZmlnLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5OUZGICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */";

/***/ }),

/***/ 78794:
/*!*************************************************************************!*\
  !*** ./src/app/pages/form-component/input-box/input-box.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1ib3guY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 47895:
/*!*************************************************************************!*\
  !*** ./src/app/pages/form-component/label-box/label-box.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".default {\n  padding: 20px 10px;\n  margin-left: -10px;\n  margin-right: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBR0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGIiwiZmlsZSI6ImxhYmVsLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWZhdWx0IHtcclxuICBwYWRkaW5nICAgICA6IDIwcHggMTBweDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gIC8vIGZvbnQtc2l6ZSAgIDogMTRweDtcclxuICAvLyBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";

/***/ }),

/***/ 50535:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/form-component/label-config-modal/label-config-modal.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYWJlbC1jb25maWctbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 40231:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-component/page-config-modal/page-config-modal.component.scss ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbmZpZy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 458:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/form-component/print-view-box/print-view-box.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".print-grid {\n  font-size: 0.75rem;\n}\n.field-col {\n  text-align: center;\n  padding: 5px 5px;\n  width: 100px;\n  font-size: 0.75rem;\n}\n.value-col {\n  padding: 5px 5px;\n  text-align: center;\n  width: 120px;\n  font-size: 0.75rem;\n}\n.title-style {\n  font-size: 0.9rem;\n}\ntable td {\n  border: 1px solid #9BC2E6;\n  border-collapse: collapse;\n}\n.print-header {\n  background-color: #f2f2f2;\n  margin: 0px;\n  padding: 15px 10px;\n  margin-bottom: 1.25rem;\n  position: relative;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #005f99;\n  position: absolute;\n}\n.header-title .logo {\n  width: 40px;\n  margin-right: 10px;\n}\n.product-name {\n  font-size: 1.5rem;\n  font-weight: bold;\n  width: 100%;\n  text-align: center;\n}\n.print-footer {\n  display: flex;\n  padding: 5px;\n  border-top: 1px solid #9BC2E6;\n}\n.print-footer .logo {\n  width: 40px;\n  margin-right: 10px;\n}\n.qr {\n  position: absolute;\n  right: 10px;\n  top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXZpZXctYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQWFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVhGO0FBY0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWEY7QUFjQTtFQUNFLGlCQUFBO0FBWEY7QUFlQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFaRjtBQWtCQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWZGO0FBa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZkY7QUFpQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFmSjtBQW1CQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFoQkY7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBaEJGO0FBa0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBaEJKO0FBb0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWpCRiIsImZpbGUiOiJwcmludC12aWV3LWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludC1ncmlkIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIC8vIHdpZHRoOiAxMjAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsIHtcclxuICB0YWJsZSB7XHJcbiAgICAvLyB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmllbGQtY29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZyAgIDogNXB4IDVweDtcclxuICB3aWR0aCAgICAgOiAxMDBweDtcclxuICBmb250LXNpemUgOiAwLjc1cmVtO1xyXG59XHJcblxyXG4udmFsdWUtY29sIHtcclxuICBwYWRkaW5nICAgOiA1cHggNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aCAgICAgOiAxMjBweDtcclxuICBmb250LXNpemUgOiAwLjc1cmVtO1xyXG59XHJcblxyXG4udGl0bGUtc3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG5cclxudGFibGUgdGQge1xyXG4gIGJvcmRlciAgICAgICAgIDogMXB4IHNvbGlkICM5QkMyRTY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLy8gLmZpeC1jb2x7XHJcbi8vICAgd2lkdGg6IDEyMHB4O1xyXG4vLyB9XHJcbi5wcmludC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcclxuICBtYXJnaW4gICAgICAgICAgOiAwcHg7XHJcbiAgcGFkZGluZyAgICAgICAgIDogMTVweCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b20gICA6IDEuMjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICBkaXNwbGF5ICAgIDogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZSAgOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yICAgICAgOiAjMDA1Zjk5O1xyXG4gIHBvc2l0aW9uICAgOiBhYnNvbHV0ZTtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGggICAgICAgOiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb2R1Y3QtbmFtZSB7XHJcbiAgZm9udC1zaXplICA6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aCAgICAgIDogMTAwJTtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpbnQtZm9vdGVyIHtcclxuICBkaXNwbGF5ICAgOiBmbGV4O1xyXG4gIHBhZGRpbmcgICA6IDVweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzlCQzJFNjtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGggICAgICAgOiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQgICA6IDEwcHg7XHJcbiAgdG9wICAgICA6IDE1cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 66410:
/*!*************************************************************************!*\
  !*** ./src/app/pages/form-component/radio-box/radio-box.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1ib3guY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 77760:
/*!***************************************************************************!*\
  !*** ./src/app/pages/form-component/select-box/select-box.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtYm94LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 82997:
/*!***************************************************************************!*\
  !*** ./src/app/pages/static-print/addon-print/addon-print.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".field-col, .field-value {\n  text-align: center;\n  padding: 5px 5px;\n  width: 200px;\n  background-color: #ddebf7;\n  font-size: 0.75rem;\n}\n\n.field-value {\n  background-color: #fff;\n}\n\ntable td {\n  border: 1px solid #9BC2E6;\n  border-collapse: collapse;\n}\n\n.title-style {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG9uLXByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7QUFJRiIsImZpbGUiOiJhZGRvbi1wcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZC1jb2wsLmZpZWxkLXZhbHVle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nICAgOiA1cHggNXB4O1xyXG4gIHdpZHRoICAgICA6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIzNSwgMjQ3KTtcclxuICBmb250LXNpemUgOiAwLjc1cmVtO1xyXG59XHJcbi5maWVsZC12YWx1ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbnRhYmxlIHRkIHtcclxuICBib3JkZXIgICAgICAgICA6IDFweCBzb2xpZCAjOUJDMkU2O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuLnRpdGxlLXN0eWxlIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufSJdfQ== */";

/***/ }),

/***/ 43040:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/static-print/coverage-print/coverage-print.component.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".field-col, .field-value {\n  text-align: center;\n  width: 200px;\n  padding: 5px 5px;\n  background-color: #ddebf7;\n  font-size: 0.75rem;\n}\n\n.field-value {\n  background-color: #fff;\n}\n\ntable td {\n  border: 1px solid #9BC2E6;\n  border-collapse: collapse;\n}\n\n.title-style {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdmVyYWdlLXByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7QUFJRiIsImZpbGUiOiJjb3ZlcmFnZS1wcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZC1jb2wsLmZpZWxkLXZhbHVlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGggICAgIDogMjAwcHg7XHJcbiAgcGFkZGluZyAgIDogNXB4IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMzUsIDI0Nyk7XHJcbiAgZm9udC1zaXplIDogMC43NXJlbTtcclxufVxyXG4uZmllbGQtdmFsdWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG50YWJsZSB0ZCB7XHJcbiAgYm9yZGVyICAgICAgICAgOiAxcHggc29saWQgIzlCQzJFNjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi50aXRsZS1zdHlsZSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 22989:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/static-print/farmer-print/farmer-print.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".sign-row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  font-size: 0.9rem;\n}\n.sign-row .sign-area {\n  width: 150px;\n  min-height: 30px;\n  border-bottom: 1px #000 dashed;\n}\n.sign-row .sign-area .sign-img {\n  width: 150px;\n}\n.farmer-print > p {\n  background-color: #ddebf7;\n  border: 1px solid #9BC2E6;\n  padding: 2px;\n  margin-top: 10px;\n}\n.title-style {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcm1lci1wcmludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBS0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJQTtFQUNFLGlCQUFBO0FBREYiLCJmaWxlIjoiZmFybWVyLXByaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24tcm93IHtcclxuICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3AgICAgIDogMTVweDtcclxuICBmb250LXNpemUgICAgICA6IDAuOXJlbTtcclxuXHJcbiAgLnNpZ24tYXJlYSB7XHJcbiAgICB3aWR0aCAgICAgICAgOiAxNTBweDtcclxuICAgIG1pbi1oZWlnaHQgICA6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggIzAwMCBkYXNoZWQ7XHJcblxyXG4gICAgLnNpZ24taW1nIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mYXJtZXItcHJpbnQ+IHB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjM1LCAyNDcpO1xyXG4gIGJvcmRlciAgICAgICAgIDogMXB4IHNvbGlkICM5QkMyRTY7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnRpdGxlLXN0eWxle1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi8vIC5zaWduLXJvdyB7XHJcbi8vICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICBmb250LXNpemUgOiAwLjc1cmVtO1xyXG5cclxuLy8gICAuc2lnbi1ib3gge1xyXG4vLyAgICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgd2lkdGggICAgICAgICAgOiAzMDBweDtcclxuXHJcbi8vICAgICAuYm9yZGVyLWxpbmUge1xyXG4vLyAgICAgICB3aWR0aCAgICAgICAgOiAxNTBweDtcclxuLy8gICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMDAwO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyAuZmFybWVyLXByaW50PiBwe1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIzNSwgMjQ3KTtcclxuLy8gICBib3JkZXIgICAgICAgICA6IDFweCBzb2xpZCAjOUJDMkU2O1xyXG4vLyAgIHBhZGRpbmc6IDJweDtcclxuLy8gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyB9XHJcbi8vIC50aXRsZS1zdHlsZXtcclxuLy8gICBmb250LXNpemU6IDAuOXJlbTtcclxuLy8gfSJdfQ== */";

/***/ }),

/***/ 39262:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/static-print/fire-detail-print/fire-detail-print.component.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".field-col, .field-value {\n  text-align: center;\n  padding: 5px 5px;\n  width: 150px;\n  background-color: #ddebf7;\n  font-size: 0.75rem;\n}\n\n.field-col {\n  text-align: center;\n  padding: 5px 5px;\n  width: 100px;\n  font-size: 0.75rem;\n}\n\n.value-col {\n  padding: 5px 5px;\n  text-align: center;\n  width: 120px;\n  font-size: 0.75rem;\n}\n\n.field-value {\n  background-color: #fff;\n}\n\ntable td {\n  border: 1px solid #9BC2E6;\n  border-collapse: collapse;\n}\n\n.title-style {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmUtZGV0YWlsLXByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRiIsImZpbGUiOiJmaXJlLWRldGFpbC1wcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZC1jb2wsLmZpZWxkLXZhbHVle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nICAgOiA1cHggNXB4O1xyXG4gIHdpZHRoICAgICA6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIzNSwgMjQ3KTtcclxuICBmb250LXNpemUgOiAwLjc1cmVtO1xyXG59XHJcbi5maWVsZC1jb2wge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nICAgOiA1cHggNXB4O1xyXG4gIHdpZHRoICAgICA6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZSA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi52YWx1ZS1jb2wge1xyXG4gIHBhZGRpbmcgICA6IDVweCA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoICAgICA6IDEyMHB4O1xyXG4gIGZvbnQtc2l6ZSA6IDAuNzVyZW07XHJcbn1cclxuLmZpZWxkLXZhbHVle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxudGFibGUgdGQge1xyXG4gIGJvcmRlciAgICAgICAgIDogMXB4IHNvbGlkICM5QkMyRTY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG4udGl0bGUtc3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59Il19 */";

/***/ }),

/***/ 1714:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/static-print/fire-risk-print/fire-risk-print.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".field-col, .field-value {\n  text-align: center !important;\n  padding: 5px 5px;\n  width: 200px;\n  background-color: #ddebf7;\n  font-size: 0.75rem;\n}\n\n.field-value {\n  background-color: #fff;\n}\n\ntable td {\n  border: 1px solid #9BC2E6;\n  border-collapse: collapse;\n}\n\n.title-style {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmUtcmlzay1wcmludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUYiLCJmaWxlIjoiZmlyZS1yaXNrLXByaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkLWNvbCwuZmllbGQtdmFsdWV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZyAgIDogNXB4IDVweDtcclxuICB3aWR0aCAgICAgOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMzUsIDI0Nyk7XHJcbiAgZm9udC1zaXplIDogMC43NXJlbTtcclxufVxyXG4uZmllbGQtdmFsdWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG50YWJsZSB0ZCB7XHJcbiAgYm9yZGVyICAgICAgICAgOiAxcHggc29saWQgIzlCQzJFNjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi50aXRsZS1zdHlsZSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 94630:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/static-print/health-print/health-print.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".sign-row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  font-size: 0.9rem;\n}\n.sign-row .sign-area {\n  width: 150px;\n  min-height: 30px;\n  border-bottom: 1px #000 dashed;\n}\n.sign-row .sign-area .sign-img {\n  width: 150px;\n}\n.farmer-print > p {\n  background-color: #ddebf7;\n  border: 1px solid #9BC2E6;\n  padding: 2px;\n  margin-top: 10px;\n}\n.title-style {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1wcmludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBS0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJQTtFQUNFLGlCQUFBO0FBREYiLCJmaWxlIjoiaGVhbHRoLXByaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24tcm93IHtcclxuICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3AgICAgIDogMTVweDtcclxuICBmb250LXNpemUgICAgICA6IDAuOXJlbTtcclxuXHJcbiAgLnNpZ24tYXJlYSB7XHJcbiAgICB3aWR0aCAgICAgICAgOiAxNTBweDtcclxuICAgIG1pbi1oZWlnaHQgICA6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggIzAwMCBkYXNoZWQ7XHJcblxyXG4gICAgLnNpZ24taW1nIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mYXJtZXItcHJpbnQ+IHB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjM1LCAyNDcpO1xyXG4gIGJvcmRlciAgICAgICAgIDogMXB4IHNvbGlkICM5QkMyRTY7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnRpdGxlLXN0eWxle1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi8vIC5zaWduLXJvdyB7XHJcbi8vICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICBmb250LXNpemUgOiAwLjc1cmVtO1xyXG5cclxuLy8gICAuc2lnbi1ib3gge1xyXG4vLyAgICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgd2lkdGggICAgICAgICAgOiAzMDBweDtcclxuXHJcbi8vICAgICAuYm9yZGVyLWxpbmUge1xyXG4vLyAgICAgICB3aWR0aCAgICAgICAgOiAxNTBweDtcclxuLy8gICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMDAwO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyAuZmFybWVyLXByaW50PiBwe1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIzNSwgMjQ3KTtcclxuLy8gICBib3JkZXIgICAgICAgICA6IDFweCBzb2xpZCAjOUJDMkU2O1xyXG4vLyAgIHBhZGRpbmc6IDJweDtcclxuLy8gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyB9XHJcbi8vIC50aXRsZS1zdHlsZXtcclxuLy8gICBmb250LXNpemU6IDAuOXJlbTtcclxuLy8gfSJdfQ== */";

/***/ }),

/***/ 59446:
/*!***************************************************************************!*\
  !*** ./src/app/pages/static-print/moter-print/moter-print.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".sign-row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  font-size: 0.9rem;\n}\n.sign-row .sign-area {\n  width: 150px;\n  min-height: 30px;\n  border-bottom: 1px #000 dashed;\n}\n.sign-row .sign-area .sign-img {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdGVyLXByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0FBQ04iLCJmaWxlIjoibW90ZXItcHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1yb3cge1xyXG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcCAgICAgOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZSAgICAgIDogMC45cmVtO1xyXG5cclxuICAuc2lnbi1hcmVhIHtcclxuICAgIHdpZHRoICAgICAgICA6IDE1MHB4O1xyXG4gICAgbWluLWhlaWdodCAgIDogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCAjMDAwIGRhc2hlZDtcclxuXHJcbiAgICAuc2lnbi1pbWcge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 2326:
/*!*********************************************************************!*\
  !*** ./src/app/pages/static-print/pa-print/pa-print.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".sign-row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  font-size: 0.9rem;\n}\n.sign-row .sign-area {\n  width: 150px;\n  min-height: 30px;\n  border-bottom: 1px #000 dashed;\n}\n.sign-row .sign-area .sign-img {\n  width: 150px;\n}\n.farmer-print > p {\n  background-color: #ddebf7;\n  border: 1px solid #9BC2E6;\n  padding: 2px;\n  margin-top: 10px;\n}\n.title-style {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhLXByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFLQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlBO0VBQ0UsaUJBQUE7QUFERiIsImZpbGUiOiJwYS1wcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLXJvdyB7XHJcbiAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wICAgICA6IDE1cHg7XHJcbiAgZm9udC1zaXplICAgICAgOiAwLjlyZW07XHJcblxyXG4gIC5zaWduLWFyZWEge1xyXG4gICAgd2lkdGggICAgICAgIDogMTUwcHg7XHJcbiAgICBtaW4taGVpZ2h0ICAgOiAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICMwMDAgZGFzaGVkO1xyXG5cclxuICAgIC5zaWduLWltZyB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmFybWVyLXByaW50PiBwe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIzNSwgMjQ3KTtcclxuICBib3JkZXIgICAgICAgICA6IDFweCBzb2xpZCAjOUJDMkU2O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi50aXRsZS1zdHlsZXtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4vLyAuc2lnbi1yb3cge1xyXG4vLyAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgZm9udC1zaXplIDogMC43NXJlbTtcclxuXHJcbi8vICAgLnNpZ24tYm94IHtcclxuLy8gICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgIHdpZHRoICAgICAgICAgIDogMzAwcHg7XHJcblxyXG4vLyAgICAgLmJvcmRlci1saW5lIHtcclxuLy8gICAgICAgd2lkdGggICAgICAgIDogMTUwcHg7XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzAwMDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmZhcm1lci1wcmludD4gcHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMzUsIDI0Nyk7XHJcbi8vICAgYm9yZGVyICAgICAgICAgOiAxcHggc29saWQgIzlCQzJFNjtcclxuLy8gICBwYWRkaW5nOiAycHg7XHJcbi8vICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gfVxyXG4vLyAudGl0bGUtc3R5bGV7XHJcbi8vICAgZm9udC1zaXplOiAwLjlyZW07XHJcbi8vIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_form-component_form-component_module_ts.js.map