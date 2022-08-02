"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reset-password_reset-password_module_ts"],{

/***/ 88349:
/*!***********************************************************************!*\
  !*** ./src/app/pages/reset-password/otp-modal/otp-modal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpModalComponent": () => (/* binding */ OtpModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _otp_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-modal.component.html?ngResource */ 81015);
/* harmony import */ var _otp_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-modal.component.scss?ngResource */ 39811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _reset_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reset-password.service */ 59498);







let OtpModalComponent = class OtpModalComponent {
    constructor(OTPService, modal, resetPasswordService, VerifyOTPService, verifyPasswordService, alertService) {
        this.OTPService = OTPService;
        this.modal = modal;
        this.resetPasswordService = resetPasswordService;
        this.VerifyOTPService = VerifyOTPService;
        this.verifyPasswordService = verifyPasswordService;
        this.alertService = alertService;
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
                // console.log("requestOtp", res)
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
            // console.log("verifyOTP", res)
            if (res.status == true) {
                this.isSubmitted = false;
                this.verifyOTPToken = res.token;
                // console.log("verifyOTP", res)
                this.resetPassword();
            }
            else {
                this.alertService.activate(res.message, 'Warning')
                    .then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (result) {
                        // this.modal.dismiss()
                        this.isSubmitted = false;
                    }
                }));
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
            // console.log("resetPassword", res)
            if (res.status == true) {
                this.alertService.activate('Password Reset Successful', 'Success Message').then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (result) {
                        this.modal.dismiss(res.status);
                    }
                }));
            }
        });
    }
    cancel() {
        this.modal.dismiss();
    }
    handeOtpChange(event) {
        this.optCode = event;
        //  console.log("optCode",  this.optCode)
    }
    handleFillEvent(event) {
    }
};
OtpModalComponent.ctorParameters = () => [
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_3__.OTPService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_3__.resetPasswordService },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_3__.VerifyOTPService },
    { type: _reset_password_service__WEBPACK_IMPORTED_MODULE_3__.verifyPasswordService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
OtpModalComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
OtpModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-otp-modal',
        template: _otp_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otp_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpModalComponent);



/***/ }),

/***/ 41689:
/*!******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reset_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component.html?ngResource */ 12338);
/* harmony import */ var _reset_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component.scss?ngResource */ 68038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _otp_modal_otp_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp-modal/otp-modal.component */ 88349);
/* harmony import */ var _reset_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.service */ 59498);








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
                // console.log("requestAuth",res)
                if (res) {
                    let modalRef;
                    modalRef = this.modal.open(_otp_modal_otp_modal_component__WEBPACK_IMPORTED_MODULE_2__.OtpModalComponent, { size: 'lg', backdrop: false });
                    modalRef.componentInstance.data = this.resetForm.value;
                    modalRef.result.then(() => { }, (res) => {
                        // console.log(res)
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
        // console.log(newPassword.value, comfirmPassword.value)
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
        template: _reset_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordComponent);



/***/ }),

/***/ 38573:
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordModule": () => (/* binding */ ResetPasswordModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-component/form-component.module */ 78798);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password.component */ 41689);
/* harmony import */ var ngx_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-otp-input */ 52956);
/* harmony import */ var _otp_modal_otp_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp-modal/otp-modal.component */ 88349);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);













let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent, _otp_modal_otp_modal_component__WEBPACK_IMPORTED_MODULE_3__.OtpModalComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__.LanguageModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_0__.FormComponentModule,
            ngx_otp_input__WEBPACK_IMPORTED_MODULE_11__.NgxOtpInputModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
                {
                    path: '',
                    component: _reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent,
                },
            ]),
        ]
    })
], ResetPasswordModule);



/***/ }),

/***/ 59498:
/*!****************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OTPService": () => (/* binding */ OTPService),
/* harmony export */   "VerifyOTPService": () => (/* binding */ VerifyOTPService),
/* harmony export */   "resetPasswordService": () => (/* binding */ resetPasswordService),
/* harmony export */   "verifyPasswordService": () => (/* binding */ verifyPasswordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 38313);





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

/***/ 52956:
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);








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

/***/ 39811:
/*!************************************************************************************!*\
  !*** ./src/app/pages/reset-password/otp-modal/otp-modal.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 68038:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".error {\n  color: red;\n}\n\n.hide {\n  display: none;\n}\n\n.inner-addon {\n  position: relative;\n}\n\n.input-group i {\n  line-height: 0;\n  font-size: 0.9rem;\n}\n\n.inner-addon .fas {\n  position: absolute;\n  padding: 16px 17px;\n  z-index: 100;\n  cursor: pointer;\n}\n\n.left-addon .fas {\n  left: 0px;\n}\n\n.right-addon .fas {\n  right: 0px;\n}\n\n.left-addon input {\n  padding-left: 30px;\n}\n\n.right-addon input {\n  padding-right: 30px;\n}\n\n.next-btn {\n  overflow: hidden;\n  margin: 47px 0 0 0;\n}\n\n.fna-segment {\n  margin: 0 15px;\n  overflow: hidden;\n}\n\n.fna-segment div {\n  width: 49%;\n  color: #fff;\n  float: left;\n}\n\n.fna-segment div:last-child {\n  float: right;\n}\n\n@media screen and (min-width: 320px) and (max-width: 460px) {\n  .chart-grid {\n    width: 100%;\n    padding: 0 !important;\n  }\n\n  .fna-segment {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 461px) and (max-width: 680px) {\n  .fna-segment {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUVJLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUNRO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBS0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtFQUZOOztFQUlFO0lBQ0ksV0FBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLFdBQUE7RUFGTjtBQUNGIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlubmVyLWFkZG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dC1ncm91cCBpIHtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmlubmVyLWFkZG9uIC5mYXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxNnB4IDE3cHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQtYWRkb24gLmZhcyB7XG4gICAgbGVmdDogMHB4O1xufVxuXG4ucmlnaHQtYWRkb24gLmZhcyB7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuLmxlZnQtYWRkb24gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5cbi5uZXh0LWJ0bntcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogNDdweCAwIDAgMDtcbn1cbi5mbmEtc2VnbWVudCB7XG4gICAvLyB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgIC5jaGFydC1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZuYS1zZWdtZW50e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ2MXB4KSBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgICAuZm5hLXNlZ21lbnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 81015:
/*!************************************************************************************!*\
  !*** ./src/app/pages/reset-password/otp-modal/otp-modal.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n            Reset Password Verification\n        </div>\n    </div>\n    <div class=\"overlay overlay-block cursor-default modal-body\">\n        <div class=\"row\" style=\"text-align: center;\">\n            <div class=\"col-sm\">\n                <label class=\"col-sm-12 col-form-label text-bold\">Key in the One-Time Password generated on your phone.</label>\n            </div>\n        </div>\n        <div class=\"row\" style=\"text-align: center;\">\n            <div class=\"col-sm\" style=\"    justify-content: center; display: flex;\">\n                <ngx-otp-input #ngOtpInput [config]=\"otpInputConfig\" (otpChange)=\"handeOtpChange($event)\" (fill)=\"handleFillEvent($event)\">\n                </ngx-otp-input>\n            </div>\n        </div>\n        <div class=\"row\" style=\"text-align: center;\">\n            <div class=\"col-sm\">\n                <p>Don't get your OTP? <span *ngIf=\"requestStatus\">Request a new OTP in {{counter}} seconds.</span><span *ngIf=\"!requestStatus\" (click)=\"doRequest()\" style=\"color: #2C66FF;\">Request a new OTP.</span></p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-elevate mr-2\" [disabled]=\"isSubmitted\" (click)=\"verifyOTP()\">\n            <span class=\"\">Submit</span>\n        </button>\n\n        <button type=\"button\" class=\"btn btn-light btn-sm btn-elevate\" (click)=\"cancel()\">\n            <span class=\"\">Cancel</span>\n        </button>\n    </div>\n</div>";

/***/ }),

/***/ 12338:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom\" style=\"margin-bottom: 15px;\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">{{\"FORM.reset_password\" | translate}}</h3>\n                </div>\n            </div>\n            <div class=\"card-body\" >\n                <form action=\"#\" class=\"form\" [formGroup]=\"resetForm\">\n                    <div class=\"row\" style=\"align-items: center;  justify-content: center;\">\n                        <div class=\"col-sm-12\">\n\n                            <div class=\"form-group row inner-addon left-addon\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.old_password\" | translate}}</label>\n                                <div class=\"col-sm-5\">\n                                    <div class=\"input-group col-12 mx-auto\">\n                                        <input name=\"password\" [type]=\"showoldPassword ? 'text' : 'password'\" id=\"password-field\" class=\"pwd-control form-control form-control-sm \" name=\"oldPassword\" placeholder=\"{{'FORM.old_password' | translate}}\" autocomplete=\"off\" [class.is-invalid]=\"confirmPassword()\" [class.is-invalid]=\"iscomfirmPassword('newPassword','confirmNewPassword')\"\n                                            [class.is-invalid]=\"isControlInvalid('oldPassword')\" [class.is-valid]=\"isControlValid('oldPassword')\" formControlName=\"oldPassword\">\n                                        <i alt=\"show\" class=\"fas fa-eye eye-show\" (click)=\"showoldPassword = !showoldPassword\" [class.hide]=\"showoldPassword\"></i>\n                                        <i alt=\"hide\" class=\"fas fa-eye-slash eye-hide\" (click)=\"showoldPassword = !showoldPassword\" [class.hide]=\"!showoldPassword\"></i>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;  justify-content: center;\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group row inner-addon left-addon\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.new_password\" | translate}}</label>\n                                <div class=\"col-sm-5\">\n                                    <div class=\"input-group col-12 mx-auto\">\n                                        <input name=\"password\" [type]=\"shownewPassword ? 'text' : 'password'\" id=\"password-field\" class=\"pwd-control form-control form-control-sm \" name=\"newPassword\" placeholder=\"{{'FORM.new_password' | translate}}\" autocomplete=\"off\" [class.is-invalid]=\"confirmPassword()\" [class.is-invalid]=\"iscomfirmPassword('newPassword','confirmNewPassword')\"\n                                            [class.is-invalid]=\"isControlInvalid('newPassword')\" [class.is-valid]=\"isControlValid('newPassword')\" formControlName=\"newPassword\">\n                                        <i alt=\"show\" class=\"fas fa-eye eye-show\" (click)=\"shownewPassword = !shownewPassword\" [class.hide]=\"shownewPassword\"></i>\n                                        <i alt=\"hide\" class=\"fas fa-eye-slash eye-hide\" (click)=\"shownewPassword = !shownewPassword\" [class.hide]=\"!shownewPassword\"></i>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center;  justify-content: center;\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group row inner-addon left-addon\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.comfirm_password\" | translate}}</label>\n                                <div class=\"col-sm-5\">\n                                    <div class=\"input-group col-12 mx-auto\">\n                                        <input name=\"password\" [type]=\"showcomfirmPassword ? 'text' : 'password'\" id=\"password-field\" class=\"pwd-control form-control form-control-sm \" name=\"comfirmPassword\" placeholder=\"{{'FORM.comfirm_password' | translate}}\" autocomplete=\"off\" [class.is-invalid]=\"confirmPassword()\"\n                                            [class.is-invalid]=\"iscomfirmPassword('newPassword','confirmNewPassword')\" [class.is-invalid]=\"isControlInvalid('confirmNewPassword')\" [class.is-valid]=\"isControlValid('confirmNewPassword')\" formControlName=\"confirmNewPassword\">\n                                        <i alt=\"show\" class=\"fas fa-eye eye-show\" (click)=\"showcomfirmPassword = !showcomfirmPassword\" [class.hide]=\"showcomfirmPassword\"></i>\n                                        <i alt=\"hide\" class=\"fas fa-eye-slash eye-hide\" (click)=\"showcomfirmPassword = !showcomfirmPassword\" [class.hide]=\"!showcomfirmPassword\"></i>\n                                      \n                                    </div>\n                                    <div *ngIf=\"!isMatch\"><label class=\"error col-12\">{{\"ERROR.not_match\" | translate}}</label></div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" style=\"align-items: center;  justify-content: center;\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group row inner-addon left-addon\">\n                                <label class=\"col-sm-4 col-form-label\"></label>\n                                <div class=\"col-sm-8\">\n                                    <div class=\"col-12 btn-next\">\n                                        <div class=\"row\" >                       \n                                            <div class=\"fna-segment\">\n                                                <button type=\"button\" [disabled]=\"!isMatch || resetForm.invalid\" class=\"btn btn-primary\"  (click)=\"requestAuth()\">\n                                                    <span class=\"\">{{\"FORM.request_auth\" | translate}}</span>\n                                                </button>\n                                            </div> \n                                            <div class=\"fna-segment\">\n                                                <button type=\"button\" class=\"btn  btn-secondary\" (click)=\"cancel()\">\n                                                    <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\n                                                </button>\n                                            </div>                                           \n                                        </div>\n                                    </div>                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>                   \n\n                   \n                </form>\n\n\n            </div>\n        </div>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reset-password_reset-password_module_ts.js.map