"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reset-password_reset-password_module_ts"],{

/***/ 98423:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-otp-input/__ivy_ngcc__/fesm2015/ngx-otp-input.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxOtpInputComponent": () => (/* binding */ NgxOtpInputComponent),
/* harmony export */   "NgxOtpInputModule": () => (/* binding */ NgxOtpInputModule),
/* harmony export */   "ɵa": () => (/* binding */ PatternDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);








const _c0 = ["otpInputElement"];
function NgxOtpInputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxOtpInputComponent_div_1_Template_input_focus_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleFocus(i_r2); })("keyup", function NgxOtpInputComponent_div_1_Template_input_keyup_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleKeyup($event.key, i_r2); })("keyup.arrowLeft", function NgxOtpInputComponent_div_1_Template_input_keyup_arrowLeft_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.handleLeftArrow(i_r2); })("keyup.arrowRight", function NgxOtpInputComponent_div_1_Template_input_keyup_arrowRight_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.handleRightArrow(i_r2); })("keydown.backspace", function NgxOtpInputComponent_div_1_Template_input_keydown_backspace_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.handleKeydown(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.config.classList == null ? null : ctx_r0.config.classList.inputBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.getAriaLabelByIndex(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "ngx-otp-input-" + i_r2)("formControl", control_r1)("ngxOtpPattern", ctx_r0.pattern)("type", ctx_r0.config.isPasswordInput ? "password" : "text")("ngClass", ctx_r0.classList[i_r2]);
} }
class NgxOtpInputComponent {
    constructor() {
        this.ngxOtpArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArray([]);
        this.focusedInputHasValue = false;
        this.lastFocus = 0;
        this.defaultAriaLabel = 'One time password input';
        this.ariaLabels = [];
        this.classList = [];
        this.disable = false;
        this.otpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.fill = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get ngxOtpArrayControls() {
        return this.ngxOtpArray.controls;
    }
    set status(status) {
        this.ngxOtpStatus = status;
        this.setInputClasses();
    }
    onPaste(event) {
        event.preventDefault();
        this.setValue(event.clipboardData.getData('text'));
    }
    ngOnInit() {
        this.setUpOtpForm();
        this.setUpAriaLabels();
        this.setInputClasses();
        this.otpFormChangeListener();
        this.handleDisable(this.disable);
        if (this.config.autoblur === undefined) {
            this.config.autoblur = true;
        }
    }
    ngAfterViewInit() {
        if (this.config.numericInputMode || !this.config.pattern) {
            this.otpInputElements.map((element) => {
                element.nativeElement.setAttribute('inputmode', 'numeric');
                element.nativeElement.setAttribute('pattern', '[0-9]*');
            });
        }
        if (this.config.autofocus) {
            this.setFocus(0);
        }
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('disable')) {
            this.handleDisable(this.disable);
        }
    }
    ngOnDestroy() {
        this.ngxOtpArray$.unsubscribe();
    }
    getAriaLabelByIndex(index) {
        return this.ariaLabels[index]
            ? this.ariaLabels[index]
            : this.defaultAriaLabel;
    }
    handleFocus(index) {
        this.lastFocus = index;
        this.getInputElementByIndex(index).select();
    }
    handleKeyup(value, index) {
        if (this.pattern.test(value) && value !== 'Backspace') {
            this.getFormControlByIndex(index).setValue(value); // prevent fast type errors
            this.stepForward(index);
        }
        else if (value === 'Backspace') {
            this.stepBackward(index);
        }
        this.setInputClasses();
    }
    handleKeydown(index) {
        this.focusedInputHasValue = !!this.getFormControlByIndex(index).value;
    }
    handleLeftArrow(index) {
        if (index > 0) {
            this.setFocus(index - 1);
        }
    }
    handleRightArrow(index) {
        if (index < this.config.otpLength - 1) {
            this.setFocus(index + 1);
        }
    }
    clear() {
        this.ngxOtpArray.reset();
        this.setInputClasses();
    }
    setUpOtpForm() {
        for (let i = 0; i < this.config.otpLength; i++) {
            this.ngxOtpArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]));
        }
        this.pattern = this.config.pattern || /^\d+$/;
    }
    setUpAriaLabels() {
        if (this.config.ariaLabels) {
            Array.isArray(this.config.ariaLabels)
                ? (this.ariaLabels = this.config.ariaLabels)
                : (this.ariaLabels = new Array(this.config.otpLength).fill(this.config.ariaLabels));
        }
    }
    setInputClasses() {
        var _a, _b;
        const inputEntry = [];
        const classList = this.config.classList;
        for (let i = 0; i < this.config.otpLength; i++) {
            const isFilled = this.isInputFilled(i)
                ? ((_a = this.config.classList) === null || _a === void 0 ? void 0 : _a.inputFilled) || ''
                : '';
            const isDisabled = this.disable
                ? ((_b = this.config.classList) === null || _b === void 0 ? void 0 : _b.inputDisabled) || 'ngx-otp-input-disabled'
                : '';
            let status = '';
            if (this.ngxOtpStatus === 'success') {
                status = this.config.classList.inputSuccess;
            }
            else if (this.ngxOtpStatus === 'error') {
                status = this.config.classList.inputError;
            }
            inputEntry[i] = [(classList === null || classList === void 0 ? void 0 : classList.input) || '', isFilled, isDisabled, status];
        }
        this.classList = inputEntry;
    }
    setValue(value) {
        if (this.pattern.test(value)) {
            let lastIndex = 0;
            value
                .split('')
                .slice(0, this.config.otpLength)
                .map((character, index) => {
                this.getFormControlByIndex(index).setValue(character);
                lastIndex = index;
            });
            this.setInputClasses();
            this.setFocusAfterValueSet(lastIndex);
        }
    }
    handleDisable(disable) {
        var _a, _b;
        disable ? (_a = this.ngxOtpArray) === null || _a === void 0 ? void 0 : _a.disable() : (_b = this.ngxOtpArray) === null || _b === void 0 ? void 0 : _b.enable();
        this.setInputClasses();
    }
    stepForward(index) {
        if (this.ngxOtpArray.valid && this.config.autoblur) {
            this.removeFocus(index);
        }
        else if (index < this.config.otpLength - 1) {
            this.setFocus(index + 1);
        }
    }
    stepBackward(index) {
        if (!this.focusedInputHasValue && index > 0) {
            this.setFocus(index - 1);
        }
    }
    setFocusAfterValueSet(lastIndex) {
        if (lastIndex < this.config.otpLength - 1) {
            this.setFocus(lastIndex + 1);
        }
        else {
            this.removeFocus(this.lastFocus);
        }
    }
    setFocus(index) {
        this.getInputElementByIndex(index).focus();
    }
    removeFocus(index) {
        this.getInputElementByIndex(index).blur();
    }
    isInputFilled(index) {
        var _a;
        return (_a = this.getFormControlByIndex(index)) === null || _a === void 0 ? void 0 : _a.valid;
    }
    getInputElementByIndex(index) {
        return this.otpInputElements.toArray()[index].nativeElement;
    }
    getFormControlByIndex(index) {
        return this.ngxOtpArray.controls[index];
    }
    otpFormChangeListener() {
        this.ngxOtpArray$ = this.ngxOtpArray.valueChanges.subscribe((values) => {
            this.otpChange.emit(values);
            if (this.ngxOtpArray.valid) {
                this.fill.emit(values.join(''));
            }
        });
    }
}
NgxOtpInputComponent.ɵfac = function NgxOtpInputComponent_Factory(t) { return new (t || NgxOtpInputComponent)(); };
NgxOtpInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxOtpInputComponent, selectors: [["ngx-otp-input"]], viewQuery: function NgxOtpInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.otpInputElements = _t);
    } }, hostBindings: function NgxOtpInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function NgxOtpInputComponent_paste_HostBindingHandler($event) { return ctx.onPaste($event); });
    } }, inputs: { disable: "disable", status: "status", config: "config" }, outputs: { otpChange: "otpChange", fill: "fill" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[1, "ngx-otp-input-container", 3, "ngClass"], ["class", "ngx-otp-input-box", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "ngx-otp-input-box", 3, "ngClass"], ["maxlength", "1", "autocomplete", "off", "autocapitalize", "off", "spellcheck", "false", 1, "ngx-otp-input", 3, "id", "formControl", "ngxOtpPattern", "type", "ngClass", "focus", "keyup", "keyup.arrowLeft", "keyup.arrowRight", "keydown.backspace"], ["otpInputElement", ""]], template: function NgxOtpInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxOtpInputComponent_div_1_Template, 4, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.config.classList == null ? null : ctx.config.classList.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ngxOtpArrayControls);
    } }, directives: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, PatternDirective]; }, styles: [".ngx-otp-input-container[_ngcontent-%COMP%]{display:flex}.ngx-otp-input-box[_ngcontent-%COMP%]{margin:0 5px}.ngx-otp-input-box[_ngcontent-%COMP%]:first-child{margin-left:0}.ngx-otp-input-box[_ngcontent-%COMP%]:last-child{margin-right:0}.ngx-otp-input[_ngcontent-%COMP%]{width:35px;height:35px;text-align:center;font-size:1.25rem;border:1px solid #212121;border-radius:4px;outline:0}.ngx-otp-input-disabled[_ngcontent-%COMP%]{opacity:.3}"], changeDetection: 0 });
NgxOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    otpChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    fill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    otpInputElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren, args: ['otpInputElement',] }],
    onPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['paste', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-otp-input',
                template: "<form [ngClass]=\"config.classList?.container\" class=\"ngx-otp-input-container\">\n  <div\n    *ngFor=\"let control of ngxOtpArrayControls; let i = index\"\n    [ngClass]=\"config.classList?.inputBox\"\n    class=\"ngx-otp-input-box\"\n  >\n    <label [attr.aria-label]=\"getAriaLabelByIndex(i)\">\n      <input\n        #otpInputElement\n        [id]=\"'ngx-otp-input-' + i\"\n        [formControl]=\"control\"\n        [ngxOtpPattern]=\"pattern\"\n        [type]=\"config.isPasswordInput ? 'password' : 'text'\"\n        [ngClass]=\"classList[i]\"\n        (focus)=\"handleFocus(i)\"\n        (keyup)=\"handleKeyup($event.key, i)\"\n        (keyup.arrowLeft)=\"handleLeftArrow(i)\"\n        (keyup.arrowRight)=\"handleRightArrow(i)\"\n        (keydown.backspace)=\"handleKeydown(i)\"\n        class=\"ngx-otp-input\"\n        maxlength=\"1\"\n        autocomplete=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"false\"\n      />\n    </label>\n  </div>\n</form>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".ngx-otp-input-container{display:flex}.ngx-otp-input-box{margin:0 5px}.ngx-otp-input-box:first-child{margin-left:0}.ngx-otp-input-box:last-child{margin-right:0}.ngx-otp-input{width:35px;height:35px;text-align:center;font-size:1.25rem;border:1px solid #212121;border-radius:4px;outline:0}.ngx-otp-input-disabled{opacity:.3}"]
            }]
    }], function () { return []; }, { disable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], otpChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], fill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['paste', ['$event']]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], otpInputElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
            args: ['otpInputElement']
        }] }); })();

class PatternDirective {
    constructor() {
        // allowed keys apart from numeric characters
        this.allowedKeys = [
            'Backspace',
            'ArrowLeft',
            'ArrowRight',
            'Escape',
            'Tab',
        ];
    }
    onKeyDown(e) {
        if (this.allowedKeys.includes(e.key) ||
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) // Cmd+X (Mac)
        ) {
            return; // let it happen, don't do anything
        }
        else if (!this.pattern.test(e.key)) {
            e.preventDefault();
        }
    }
}
PatternDirective.ɵfac = function PatternDirective_Factory(t) { return new (t || PatternDirective)(); };
PatternDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PatternDirective, selectors: [["", "ngxOtpPattern", ""]], hostBindings: function PatternDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PatternDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { pattern: ["ngxOtpPattern", "pattern"] } });
PatternDirective.propDecorators = {
    pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['ngxOtpPattern',] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatternDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngxOtpPattern]'
            }]
    }], function () { return []; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
        }], pattern: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngxOtpPattern']
        }] }); })();

class NgxOtpInputModule {
}
NgxOtpInputModule.ɵfac = function NgxOtpInputModule_Factory(t) { return new (t || NgxOtpInputModule)(); };
NgxOtpInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxOtpInputModule });
NgxOtpInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [NgxOtpInputComponent, PatternDirective],
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
                exports: [NgxOtpInputComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxOtpInputModule, { declarations: function () { return [NgxOtpInputComponent, PatternDirective]; }, imports: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [NgxOtpInputComponent]; } }); })();

/*
 * Public API Surface of ngx-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 66984:
/*!***********************************************************************!*\
  !*** ./src/app/pages/reset-password/otp-modal/otp-modal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpModalComponent": () => (/* binding */ OtpModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_otp_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./otp-modal.component.html */ 24042);
/* harmony import */ var _otp_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-modal.component.scss */ 93521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _reset_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reset-password.service */ 44932);






let OtpModalComponent = class OtpModalComponent {
    constructor(OTPService, modal, resetPasswordService, VerifyOTPService, verifyPasswordService) {
        this.OTPService = OTPService;
        this.modal = modal;
        this.resetPasswordService = resetPasswordService;
        this.VerifyOTPService = VerifyOTPService;
        this.verifyPasswordService = verifyPasswordService;
        this.otpInputConfig = {
            otpLength: 6,
            autofocus: true,
            classList: {
                inputBox: 'my-super-box-class',
                input: 'my-super-class',
                inputFilled: 'my-super-filled-class',
                inputDisabled: 'my-super-disable-class',
                inputSuccess: 'my-super-success-class',
                inputError: 'my-super-error-class',
            },
        };
        this.verifyToken = "";
        this.verifyOTPToken = "";
        this.requestStatus = false;
        this.counter = 60;
        this.otpInput = false;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.doRequest();
    }
    doRequest() {
        this.otpInput = true;
        this.requestOtp();
        this.requestStatus = !this.requestStatus;
        this.counter = 60;
        if (this.requestStatus == true) {
            this.interval = setInterval(() => {
                this.counter = this.counter - 1;
                if (this.counter === 0) {
                    clearInterval(this.interval);
                    this.requestStatus = false;
                }
            }, 1000);
        }
    }
    requestOtp() {
        this.OTPService.findAll().toPromise()
            .then((res) => {
            if (res.status) {
                console.log("requestOtp", res);
                this.verifyToken = res.token;
            }
        });
    }
    verifyOTP() {
        this.isSubmitted = true;
        let otp = this.optCode.join("");
        let token = this.verifyToken;
        let postData = { otp, token };
        this.VerifyOTPService.save(postData).toPromise()
            .then((res) => {
            console.log("verifyOTP", res);
            if (res.status) {
                this.isSubmitted = false;
                this.verifyOTPToken = res.token;
                console.log("verifyOTP", res);
                this.resetPassword();
            }
        });
    }
    resetPassword() {
        let postData = {
            passwordRequest: this.data,
            token: this.verifyOTPToken
        };
        this.resetPasswordService.save(postData).toPromise()
            .then((res) => {
            console.log("resetPassword", res);
            if (res.status) {
                this.modal.dismiss(res.status);
            }
        });
    }
    cancel() {
        this.modal.dismiss();
    }
    handeOtpChange(event) {
        this.optCode = event;
        console.log("optCode", this.optCode);
    }
    handleFillEvent(event) {
    }
};
OtpModalComponent.ctorParameters = () => [
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_2__.OTPService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_2__.resetPasswordService },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_2__.VerifyOTPService },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_2__.verifyPasswordService }
];
OtpModalComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
OtpModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-otp-modal',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_otp_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otp_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpModalComponent);



/***/ }),

/***/ 81531:
/*!******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reset_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reset-password.component.html */ 37168);
/* harmony import */ var _reset_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component.scss */ 10019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _otp_modal_otp_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp-modal/otp-modal.component */ 66984);
/* harmony import */ var _reset_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.service */ 44932);








let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(modal, resetPasswordService, OTPService, verifyPasswordService) {
        this.modal = modal;
        this.resetPasswordService = resetPasswordService;
        this.OTPService = OTPService;
        this.verifyPasswordService = verifyPasswordService;
        this.isMatch = false;
        this.submited = false;
    }
    ngOnInit() {
        this.loadForm();
    }
    loadForm() {
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5),]),
            // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')
            confirmNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]),
        });
    }
    requestAuth() {
        console.log(this.resetForm.valid);
        if (this.resetForm.valid && this.isMatch) {
            this.verifyPasswordService.save(this.resetForm.value).toPromise()
                .then((res) => {
                console.log("requestAuth", res);
                if (res) {
                    let modalRef;
                    modalRef = this.modal.open(_otp_modal_otp_modal_component__WEBPACK_IMPORTED_MODULE_2__.OtpModalComponent, { size: 'lg', backdrop: false });
                    modalRef.componentInstance.data = this.resetForm.value;
                    modalRef.result.then(() => { }, (res) => {
                        console.log(res);
                        if (res) {
                            this.resetForm.reset();
                        }
                    });
                }
            });
        }
    }
    cancel() {
        this.resetForm.reset();
    }
    isControlValid(controlName) {
        const control = this.resetForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.resetForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.resetForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.resetForm.controls[controlName];
        return control.dirty || control.touched;
    }
    confirmPassword() {
        if (this.resetForm.value['newPassword'] != null && this.resetForm.value['confirmNewPassword'] != null) {
            const password = this.resetForm.value['newPassword'];
            const confirmPassword = this.resetForm.value['confirmNewPassword'];
            var result = password === confirmPassword ? true : false;
            return this.submited ? !result : false;
        }
        if (this.submited) {
            return this.resetForm.controls['confirmNewPassword'].invalid;
        }
    }
    iscomfirmPassword(newPass, confirmNewPassword) {
        const newPassword = this.resetForm.controls[newPass];
        const comfirmPassword = this.resetForm.controls[confirmNewPassword];
        console.log(newPassword.value, comfirmPassword.value);
        if (newPassword.value == comfirmPassword.value) {
            this.isMatch = true;
            return comfirmPassword.hasError('Match') && (comfirmPassword.dirty || comfirmPassword.touched);
        }
        else {
            this.isMatch = false;
            return comfirmPassword.hasError('Not Match') && (comfirmPassword.dirty || comfirmPassword.touched);
        }
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_3__.resetPasswordService },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_3__.OTPService },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_3__.verifyPasswordService }
];
ResetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset-password',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reset_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reset_password_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordComponent);



/***/ }),

/***/ 92605:
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordModule": () => (/* binding */ ResetPasswordModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password.component */ 81531);
/* harmony import */ var ngx_otp_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-otp-input */ 98423);
/* harmony import */ var _otp_modal_otp_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp-modal/otp-modal.component */ 66984);












let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent, _otp_modal_otp_modal_component__WEBPACK_IMPORTED_MODULE_3__.OtpModalComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_0__.FormComponentModule,
            ngx_otp_input__WEBPACK_IMPORTED_MODULE_10__.NgxOtpInputModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                {
                    path: '',
                    component: _reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent,
                },
            ]),
        ]
    })
], ResetPasswordModule);



/***/ }),

/***/ 44932:
/*!****************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyPasswordService": () => (/* binding */ verifyPasswordService),
/* harmony export */   "resetPasswordService": () => (/* binding */ resetPasswordService),
/* harmony export */   "OTPService": () => (/* binding */ OTPService),
/* harmony export */   "VerifyOTPService": () => (/* binding */ VerifyOTPService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





const API_RESET_PASSOWRD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/reset/password`;
const API_GET_OTP_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/otp`;
const API_VERIFY_OTP_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/verify/otp`;
const API_VERIFY_PASSWORD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/verify/password`;
let verifyPasswordService = class verifyPasswordService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_VERIFY_PASSWORD_URL);
        this.httpClient = httpClient;
    }
};
verifyPasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
verifyPasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], verifyPasswordService);

let resetPasswordService = class resetPasswordService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_RESET_PASSOWRD_URL);
        this.httpClient = httpClient;
    }
};
resetPasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
resetPasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], resetPasswordService);

let OTPService = class OTPService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_GET_OTP_URL);
        this.httpClient = httpClient;
    }
};
OTPService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
OTPService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], OTPService);

let VerifyOTPService = class VerifyOTPService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_VERIFY_OTP_URL);
        this.httpClient = httpClient;
    }
};
VerifyOTPService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
VerifyOTPService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], VerifyOTPService);



/***/ }),

/***/ 24042:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/reset-password/otp-modal/otp-modal.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n            Reset Password Verification\r\n        </div>\r\n    </div>\r\n    <div class=\"overlay overlay-block cursor-default modal-body\">\r\n        <div class=\"row\" style=\"text-align: center;\">\r\n            <div class=\"col-sm\">\r\n                <label class=\"col-sm-12 col-form-label text-bold\">Key in the One-Time Password generated on your phone.</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"text-align: center;\">\r\n            <div class=\"col-sm\" style=\"    justify-content: center; display: flex;\">\r\n                <ngx-otp-input #ngOtpInput [config]=\"otpInputConfig\" (otpChange)=\"handeOtpChange($event)\" (fill)=\"handleFillEvent($event)\">\r\n                </ngx-otp-input>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"text-align: center;\">\r\n            <div class=\"col-sm\">\r\n                <p>Don't get your OTP? <span *ngIf=\"requestStatus\">Request a new OTP in {{counter}} seconds.</span><span *ngIf=\"!requestStatus\" (click)=\"doRequest()\" style=\"color: #2C66FF;\">Request a new OTP.</span></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-elevate mr-2\" [disabled]=\"isSubmitted\" (click)=\"verifyOTP()\">\r\n            <span class=\"\">Submit</span>\r\n        </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-light btn-sm btn-elevate\" (click)=\"cancel()\">\r\n            <span class=\"\">Cancel</span>\r\n        </button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 37168:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/reset-password/reset-password.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" style=\"align-items: center;  justify-content: center;\">\r\n    <div class=\"col-8\">\r\n        <div class=\"card card-custom\" style=\"margin-bottom: 15px;\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">\r\n                    <h3 class=\"card-label left-border-image\">Reset Password</h3>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body \">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"resetForm\">\r\n                    <div class=\"row\" style=\"align-items: center;  justify-content: center;\">\r\n                        <div class=\"col-sm-12\">\r\n\r\n                            <div class=\"form-group row inner-addon left-addon\">\r\n                                <label class=\"col-sm-4 col-form-label\">Old Password</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"input-group col-8 mx-auto\">\r\n                                        <input name=\"password\" [type]=\"showoldPassword ? 'text' : 'password'\" id=\"password-field\" class=\"pwd-control form-control form-control-sm \" name=\"oldPassword\" placeholder=\"Old Password\" autocomplete=\"off\" [class.is-invalid]=\"confirmPassword()\" [class.is-invalid]=\"iscomfirmPassword('newPassword','confirmNewPassword')\"\r\n                                            [class.is-invalid]=\"isControlInvalid('oldPassword')\" [class.is-valid]=\"isControlValid('oldPassword')\" formControlName=\"oldPassword\">\r\n                                        <i alt=\"show\" class=\"fas fa-eye eye-show\" (click)=\"showoldPassword = !showoldPassword\" [class.hide]=\"showoldPassword\"></i>\r\n                                        <i alt=\"hide\" class=\"fas fa-eye-slash eye-hide\" (click)=\"showoldPassword = !showoldPassword\" [class.hide]=\"!showoldPassword\"></i>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;  justify-content: center;\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group row inner-addon left-addon\">\r\n                                <label class=\"col-sm-4 col-form-label\">New Password</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"input-group col-8 mx-auto\">\r\n                                        <input name=\"password\" [type]=\"shownewPassword ? 'text' : 'password'\" id=\"password-field\" class=\"pwd-control form-control form-control-sm \" name=\"newPassword\" placeholder=\"New Password\" autocomplete=\"off\" [class.is-invalid]=\"confirmPassword()\" [class.is-invalid]=\"iscomfirmPassword('newPassword','confirmNewPassword')\"\r\n                                            [class.is-invalid]=\"isControlInvalid('newPassword')\" [class.is-valid]=\"isControlValid('newPassword')\" formControlName=\"newPassword\">\r\n                                        <i alt=\"show\" class=\"fas fa-eye eye-show\" (click)=\"shownewPassword = !shownewPassword\" [class.hide]=\"shownewPassword\"></i>\r\n                                        <i alt=\"hide\" class=\"fas fa-eye-slash eye-hide\" (click)=\"shownewPassword = !shownewPassword\" [class.hide]=\"!shownewPassword\"></i>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"align-items: center;  justify-content: center;\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group row inner-addon left-addon\">\r\n                                <label class=\"col-sm-4 col-form-label\">Comfirm Password</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"input-group col-8 mx-auto\">\r\n                                        <input name=\"password\" [type]=\"showcomfirmPassword ? 'text' : 'password'\" id=\"password-field\" class=\"pwd-control form-control form-control-sm \" name=\"comfirmPassword\" placeholder=\"Comfirm Password\" autocomplete=\"off\" [class.is-invalid]=\"confirmPassword()\"\r\n                                            [class.is-invalid]=\"iscomfirmPassword('newPassword','confirmNewPassword')\" [class.is-invalid]=\"isControlInvalid('confirmNewPassword')\" [class.is-valid]=\"isControlValid('confirmNewPassword')\" formControlName=\"confirmNewPassword\">\r\n                                        <i alt=\"show\" class=\"fas fa-eye eye-show\" (click)=\"showcomfirmPassword = !showcomfirmPassword\" [class.hide]=\"showcomfirmPassword\"></i>\r\n                                        <i alt=\"hide\" class=\"fas fa-eye-slash eye-hide\" (click)=\"showcomfirmPassword = !showcomfirmPassword\" [class.hide]=\"!showcomfirmPassword\"></i>\r\n                                        <div *ngIf=\"!isMatch\"><label class=\"error\">Password and confirm password does not match</label></div>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"align-items: center;  justify-content: flex-end; margin-top: 15px;\">\r\n                        <div class=\"col-sm-5\">\r\n                            <button type=\"button\" [disabled]=\"!isMatch || resetForm.invalid\" class=\"btn btn-sm btn-primary ml-2\" style=\"width: 100%;\" (click)=\"requestAuth()\">\r\n                                <span class=\"\">Request Authentication</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-secondary ml-2\" style=\"width: 100%;\" (click)=\"cancel()\">\r\n                                <span class=\"\">Cancel</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 93521:
/*!*************************************************************************!*\
  !*** ./src/app/pages/reset-password/otp-modal/otp-modal.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 10019:
/*!********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".error {\n  color: red;\n}\n\n.hide {\n  display: none;\n}\n\n.inner-addon {\n  position: relative;\n}\n\n.input-group i {\n  line-height: 0;\n  font-size: 0.9rem;\n}\n\n.inner-addon .fas {\n  position: absolute;\n  padding: 16px 17px;\n  z-index: 100;\n  cursor: pointer;\n}\n\n.left-addon .fas {\n  left: 0px;\n}\n\n.right-addon .fas {\n  right: 0px;\n}\n\n.left-addon input {\n  padding-left: 30px;\n}\n\n.right-addon input {\n  padding-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW5uZXItYWRkb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgaSB7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uaW5uZXItYWRkb24gLmZhcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE3cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0LWFkZG9uIC5mYXMge1xyXG4gICAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtYWRkb24gLmZhcyB7XHJcbiAgICByaWdodDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1hZGRvbiBpbnB1dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1hZGRvbiBpbnB1dCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reset-password_reset-password_module_ts.js.map