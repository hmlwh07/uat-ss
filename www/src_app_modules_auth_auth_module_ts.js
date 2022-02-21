"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_auth_module_ts"],{

/***/ 68428:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 28484);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 50578);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.component */ 10854);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 46540);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ 86998);








const routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
                data: { returnUrl: window.location.pathname }
            },
            {
                path: 'registration',
                component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent
            },
            {
                path: 'forgot-password',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent
            },
            {
                path: 'logout',
                component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__.LogoutComponent
            },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', redirectTo: 'login', pathMatch: 'full' },
        ]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], AuthRoutingModule);



/***/ }),

/***/ 28484:
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_auth_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./auth.component.html */ 37015);
/* harmony import */ var _auth_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component.scss */ 34288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AuthComponent = class AuthComponent {
    constructor() {
        this.today = new Date();
    }
    ngOnInit() {
    }
};
AuthComponent.ctorParameters = () => [];
AuthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-auth',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_auth_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auth_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthComponent);



/***/ }),

/***/ 61142:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 68428);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 50578);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.component */ 10854);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 46540);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ 86998);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ 28484);











let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent,
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent,
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__.LogoutComponent,
            _auth_component__WEBPACK_IMPORTED_MODULE_5__.AuthComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        ]
    })
], AuthModule);



/***/ }),

/***/ 46540:
/*!***************************************************************************!*\
  !*** ./src/app/modules/auth/forgot-password/forgot-password.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./forgot-password.component.html */ 78444);
/* harmony import */ var _forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.component.scss */ 27495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ 69380);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5558);







var ErrorStates;
(function (ErrorStates) {
    ErrorStates[ErrorStates["NotSubmitted"] = 0] = "NotSubmitted";
    ErrorStates[ErrorStates["HasError"] = 1] = "HasError";
    ErrorStates[ErrorStates["NoError"] = 2] = "NoError";
})(ErrorStates || (ErrorStates = {}));
let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.errorState = ErrorStates.NotSubmitted;
        this.errorStates = ErrorStates;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.isLoading$ = this.authService.isLoading$;
    }
    ngOnInit() {
        this.initForm();
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.forgotPasswordForm.controls;
    }
    initForm() {
        this.forgotPasswordForm = this.fb.group({
            email: [
                'admin@demo.com',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ]),
            ],
        });
    }
    submit() {
        this.errorState = ErrorStates.NotSubmitted;
        const forgotPasswordSubscr = this.authService
            .forgotPassword(this.f.email.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((result) => {
            this.errorState = result ? ErrorStates.NoError : ErrorStates.HasError;
        });
        this.unsubscribe.push(forgotPasswordSubscr);
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ForgotPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgot-password',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ 50578:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_new_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.component-new.html */ 45655);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 73987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5558);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ 69380);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);








let LoginComponent = class LoginComponent {
    constructor(fb, authService, route, router) {
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.router = router;
        // KeenThemes mock, change it to:
        // defaultAuth = {
        //   email: '',
        //   password: '',
        // };
        this.defaultAuth = {
            email: '',
            password: '',
        };
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.isLoading$ = this.authService.isLoading$;
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/'], { replaceUrl: true });
        }
    }
    ngOnInit() {
        this.initForm();
        // get return url from route parameters or default to '/'
        this.returnUrl =
            this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    initForm() {
        this.loginForm = this.fb.group({
            email: [
                this.defaultAuth.email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    // Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ]),
            ],
            password: [
                this.defaultAuth.password,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100),
                ]),
            ],
        });
    }
    submit() {
        this.hasError = false;
        const loginSubscr = this.authService
            .login(this.f.email.value, this.f.password.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((user) => {
            if (user) {
                this.router.navigate([this.returnUrl], { replaceUrl: true });
            }
            else {
                this.hasError = true;
            }
        });
        this.unsubscribe.push(loginSubscr);
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_new_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 86998:
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/logout/logout.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./logout.component.html */ 96108);
/* harmony import */ var _logout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.component.scss */ 58953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ 69380);





let LogoutComponent = class LogoutComponent {
    constructor(authService) {
        this.authService = authService;
        this.authService.logout();
    }
    ngOnInit() { }
};
LogoutComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LogoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-logout',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_logout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogoutComponent);



/***/ }),

/***/ 10854:
/*!*********************************************************************!*\
  !*** ./src/app/modules/auth/registration/registration.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./registration.component.html */ 23663);
/* harmony import */ var _registration_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.component.scss */ 47048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ 69380);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-password.validator */ 63226);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/user.model */ 13902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5558);










let RegistrationComponent = class RegistrationComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.isLoading$ = this.authService.isLoading$;
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.initForm();
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registrationForm.controls;
    }
    initForm() {
        this.registrationForm = this.fb.group({
            fullname: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100),
                ]),
            ],
            email: [
                'qwe@qwe.qwe',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ]),
            ],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100),
                ]),
            ],
            cPassword: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100),
                ]),
            ],
            agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
        }, {
            validator: _confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__.ConfirmPasswordValidator.MatchPassword,
        });
    }
    submit() {
        this.hasError = false;
        const result = {};
        Object.keys(this.f).forEach(key => {
            result[key] = this.f[key].value;
        });
        const newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__.UserModel();
        newUser.setUser(result);
        const registrationSubscr = this.authService
            .registration(newUser)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)())
            .subscribe((user) => {
            if (user) {
                this.router.navigate(['/']);
            }
            else {
                this.hasError = true;
            }
        });
        this.unsubscribe.push(registrationSubscr);
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
RegistrationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-registration',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registration_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registration_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrationComponent);



/***/ }),

/***/ 37015:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/auth.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"d-flex flex-column flex-root h-100\" id=\"kt_login_wrapper\">\r\n    <!--begin::Login-->\r\n    <div class=\"login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white\" id=\"kt_login\" style=\"background-color: #005eaa !important;background-size: cover;background-position: bottom;\">\r\n        <!--begin::Aside-->\r\n        <!-- <div class=\"login-aside d-flex flex-column flex-row-auto\" style=\"background-color: #F2C98A;\"> -->\r\n        <!--begin::Aside Top-->\r\n        <!-- <div class=\"d-flex flex-column-auto flex-column pt-lg-40 pt-15\"> -->\r\n        <!--begin::Aside header-->\r\n        <!-- <a href=\"#\" class=\"text-center mb-10\">\r\n          <img src=\"./assets/media/logos/logo-letter-1.png\" class=\"max-h-70px\" alt=\"\" />\r\n        </a> -->\r\n        <!--end::Aside header-->\r\n\r\n        <!--begin::Aside title-->\r\n        <!-- <h3 class=\"font-weight-bolder text-center font-size-h4 font-size-h1-lg\" style=\"color: #986923;\">\r\n          Discover Amazing web<br />\r\n          with great build tools\r\n        </h3> -->\r\n        <!--end::Aside title-->\r\n        <!-- </div> -->\r\n        <!--end::Aside Top-->\r\n\r\n        <!--begin::Aside Bottom-->\r\n        <!-- <div class=\"aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center\" style=\"background-image: url('./assets/media/svg/illustrations/login-visual-1.svg')\"></div> -->\r\n        <!--end::Aside Bottom-->\r\n        <!-- </div> -->\r\n        <!--begin::Aside-->\r\n\r\n\r\n        <!--begin::Content-->\r\n        <div class=\"login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto\">\r\n            <!--begin::Content body-->\r\n            <div class=\"d-flex flex-column-fluid flex-center\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <!--end::Content body-->\r\n\r\n            <!--begin::Content footer-->\r\n            <!-- <div class=\"d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0\">\r\n                <a href=\"#\" class=\"text-primary font-weight-bolder font-size-h5\">Terms</a>\r\n                <a href=\"#\" class=\"text-primary ml-10 font-weight-bolder font-size-h5\">Plans</a>\r\n                <a href=\"#\" class=\"text-primary ml-10 font-weight-bolder font-size-h5\">Contact Us</a>\r\n            </div> -->\r\n            <!--end::Content footer-->\r\n        </div>\r\n        <!--end::Content-->\r\n    </div>\r\n    <!--end::Login-->\r\n</div>");

/***/ }),

/***/ 78444:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/forgot-password/forgot-password.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"login-form login-forgot\">\r\n  <!--begin::Form-->\r\n  <form\r\n    class=\"form fv-plugins-bootstrap fv-plugins-framework\"\r\n    novalidate=\"novalidate\"\r\n    [formGroup]=\"forgotPasswordForm\"\r\n    (ngSubmit)=\"submit()\"\r\n    id=\"kt_login_forgot_form\"\r\n    [ngStyle]=\"{\r\n      display: errorState === errorStates.NoError ? 'none' : 'block'\r\n    }\"\r\n  >\r\n    <!--begin::Title-->\r\n    <div class=\"pb-13 pt-lg-0 pt-5\">\r\n      <h3 class=\"font-weight-bolder text-dark font-size-h4 font-size-h1-lg\">\r\n        Forgotten Password ?\r\n      </h3>\r\n      <p class=\"text-muted font-weight-bold font-size-h4\">\r\n        Enter your email to reset your password\r\n      </p>\r\n    </div>\r\n    <!--end::Title-->\r\n\r\n    <!-- begin::Alert error-->\r\n    <ng-container *ngIf=\"errorState === errorStates.HasError\">\r\n      <div\r\n        class=\"mb-10 alert alert-custom alert-light-danger alert-dismissible\"\r\n      >\r\n        <div class=\"alert-text\">The email detail is incorrect</div>\r\n      </div>\r\n    </ng-container>\r\n    <!-- end::Alert error-->\r\n\r\n    <!--begin::Form group-->\r\n    <div class=\"form-group fv-plugins-icon-container has-danger\">\r\n      <input\r\n        class=\"form-control form-control-sm h-auto py-7 px-6 rounded-lg font-size-h6\"\r\n        type=\"email\"\r\n        formControlName=\"email\"\r\n        placeholder=\"Email\"\r\n        name=\"email\"\r\n        autocomplete=\"off\"\r\n        [ngClass]=\"{\r\n          'is-invalid': forgotPasswordForm.controls['email'].invalid\r\n        }\"\r\n      />\r\n\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'required',\r\n          message: 'Email is required',\r\n          control: forgotPasswordForm.controls['email']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'email',\r\n          message: 'Email is invalid',\r\n          control: forgotPasswordForm.controls['email']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'minLength',\r\n          message: 'Email should have at least 3 symbols',\r\n          control: forgotPasswordForm.controls['email']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'maxLength',\r\n          message: 'Email should have maximum 360 symbols',\r\n          control: forgotPasswordForm.controls['email']\r\n        }\"\r\n      ></ng-container>\r\n    </div>\r\n    <!--end::Form group-->\r\n    <!--begin::Form group-->\r\n    <div class=\"form-group d-flex flex-wrap pb-lg-0\">\r\n      <button\r\n        type=\"submit\"\r\n        id=\"kt_login_forgot_submit\"\r\n        class=\"btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4\"\r\n      >\r\n        Submit\r\n      </button>\r\n      <a\r\n        routerLink=\"/auth/login\"\r\n        id=\"kt_login_forgot_cancel\"\r\n        class=\"btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3\"\r\n      >\r\n        Cancel\r\n      </a>\r\n\r\n      <ng-container *ngIf=\"isLoading$ | async\">\r\n        <span class=\"spinner spinner-primary ml-5\"></span>\r\n      </ng-container>\r\n    </div>\r\n    <!--end::Form group-->\r\n    <div></div>\r\n  </form>\r\n  <!--end::Form-->\r\n\r\n  <ng-container *ngIf=\"errorState === errorStates.NoError\">\r\n    <div\r\n      class=\"card card-custom bgi-no-repeat gutter-b\"\r\n      style=\"\r\n        height: 175px;\r\n        background-color: #4ab58e;\r\n        background-position: calc(100% + 1rem) bottom;\r\n        background-size: 25% auto;\r\n        background-image: url(assets/media/svg/humans/custom-1.svg);\r\n      \"\r\n    >\r\n      <!--begin::Body-->\r\n      <div class=\"card-body d-flex align-items-center\">\r\n        <div class=\"py-2\">\r\n          <h3 class=\"text-white font-weight-bolder mb-3\">Email is correct!</h3>\r\n          <p class=\"text-white font-size-lg\">\r\n            Message with 'recovery' instruction<br />\r\n            has been sent<br />\r\n          </p>\r\n          <a\r\n            routerLink=\"/auth/login\"\r\n            class=\"swal2-confirm btn font-weight-bold btn-light-primary\"\r\n          >\r\n            Ok, got it!\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <!--end::Body-->\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-template\r\n  #formError\r\n  let-control=\"control\"\r\n  let-message=\"message\"\r\n  let-validation=\"validation\"\r\n>\r\n  <ng-container\r\n    *ngIf=\"control.hasError(validation) && (control.dirty || control.touched)\"\r\n  >\r\n    <div class=\"fv-plugins-message-container\">\r\n      <div class=\"fv-help-block\">\r\n        {{ message }}\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n");

/***/ }),

/***/ 45655:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/login/login.component-new.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Signin-->\n\n<div class=\"row\">\n\n    <div class=\"col-sm-6 text-center\">\n        <img src=\"assets/ms-logo.png\" style=\"width:150px\" /><br>\n        <!-- <span class=\"logo-text\">KBZMS<br><small>General Insurance</small></span> -->\n\n    </div>\n    <div class=\"col-sm-6 text-center\">\n        <img src=\"assets/life-logo.png\" style=\"width:150px\" /><br>\n        <!-- <span class=\"logo-text\">KBZ LIFE</span> -->\n    </div>\n    <div class=\"col-12 pt-5 pb-5\">\n        <h5 class=\"font-weight-bolder text-white text-center\" style=\"font-size: 1.1rem;\">\n            Welcome to KBZ MS and Life Insurance Sales Portal\n        </h5>\n\n    </div>\n    <!--begin::Form-->\n    <div class=\"card card-custom-orange\" style=\"width: 100%;\">\n        <div class=\"card-body\">\n            <form class=\"form\" [formGroup]=\"loginForm\" novalidate=\"novalidate\" id=\"kt_login_signin_form\"\n                (ngSubmit)=\"submit()\">\n\n\n\n                <!--begin::Title-->\n\n\n\n                <!-- begin::Alert error-->\n                <ng-container *ngIf=\"hasError\">\n                    <div class=\"mb-10 alert alert-custom alert-light-danger alert-dismissible\">\n                        <div class=\"alert-text\">The login details are incorrect</div>\n                    </div>\n                </ng-container>\n                <!-- end::Alert error-->\n\n                <!--begin::Form group-->\n                <div class=\"form-group\">\n                    <!-- <input placeholder=\"User ID\" class=\"form-control form-control-sm h-3 py-7 px-6 rounded-lg\" type=\"text\"\n                        name=\"username\" formControlName=\"email\" autocomplete=\"off\"\n                        [ngClass]=\"{ 'is-invalid': loginForm.controls['email'].invalid }\" /> -->\n                    <div class=\"input-icons\">\n                        <i class=\"flaticon-avatar\"></i>\n                        <input placeholder=\"User ID\" class=\"input-field form-control h-3 py-7 px-11 rounded-lg\"\n                            type=\"text\" name=\"username\" formControlName=\"email\" autocomplete=\"off\"\n                            [ngClass]=\"{ 'is-invalid': loginForm.controls['email'].invalid }\" />\n                    </div>\n                </div>\n                <!--end::Form group-->\n\n                <!--begin::Form group-->\n                <div class=\"form-group\">\n\n                    <div class=\"input-icons\">\n                        <i class=\"flaticon-lock\"></i>\n                        <input placeholder=\"Password\" class=\"input-field form-control h-3 py-7 px-6 rounded-lg\"\n                            type=\"password\" name=\"password\" autocomplete=\"off\" formControlName=\"password\"\n                            [ngClass]=\"{ 'is-invalid': loginForm.controls['password'].invalid }\" />\n                    </div>\n                </div>\n                <!--end::Form group-->\n                <div class=\"font-weight-bolder text-center\">\n                    <a routerLink=\"/auth/forgot-password\"\n                        class=\"text-new text-center font-weight-bolder text-hover-new \">\n                        Forgot Password ?\n                    </a>\n                </div>\n                <!--begin::Action-->\n                <div class=\"pb-lg-10 pb-10\">\n                    <button style=\"width: 100%;\" type=\"submit\" id=\"kt_login_signin_submit\"\n                        class=\"btn btn-new text-white font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3\">\n                        SIGN IN\n                    </button>\n\n\n\n                    <ng-container *ngIf=\"isLoading$ | async\">\n                        <span class=\"spinner spinner-primary ml-5\"></span>\n                    </ng-container>\n                </div>\n                <h5 class=\"font-weight-bolder text-white text-center\" style=\"font-size: 1.1rem;\">\n                    Welcome to KBZ MS and Life Insurance Sales Portal\n                </h5>\n                <!--end::Action-->\n            </form>\n        </div>\n    </div>\n    <!--end::Form-->\n</div>\n<!--end::Signin-->\n\n<ng-template #formError let-control=\"control\" let-message=\"message\" let-validation=\"validation\">\n    <ng-container *ngIf=\"control.hasError(validation) && (control.dirty || control.touched)\">\n        <div class=\"fv-plugins-message-container\">\n            <div class=\"fv-help-block\">\n                {{ message }}\n            </div>\n        </div>\n    </ng-container>\n</ng-template>");

/***/ }),

/***/ 96108:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/logout/logout.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>logout works!</p>\r\n");

/***/ }),

/***/ 23663:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/registration/registration.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Signup-->\r\n<div class=\"login-form login-signup\">\r\n  <!--begin::Form-->\r\n  <form\r\n    class=\"form\"\r\n    novalidate=\"novalidate\"\r\n    id=\"kt_login_signup_form\"\r\n    [formGroup]=\"registrationForm\"\r\n    (ngSubmit)=\"submit()\"\r\n  >\r\n    <!--begin::Title-->\r\n    <div class=\"pb-13 pt-lg-0 pt-5\">\r\n      <h3 class=\"font-weight-bolder text-dark font-size-h4 font-size-h1-lg\">\r\n        Sign Up\r\n      </h3>\r\n      <p class=\"text-muted font-weight-bold font-size-h4\">\r\n        Enter your details to create your account\r\n      </p>\r\n    </div>\r\n    <!--end::Title-->\r\n\r\n    <!-- begin::Alert error-->\r\n    <ng-container *ngIf=\"hasError\">\r\n      <div\r\n        class=\"mb-10 alert alert-custom alert-light-danger alert-dismissible\"\r\n      >\r\n        <div class=\"alert-text\">The registration details are incorrect</div>\r\n      </div>\r\n    </ng-container>\r\n    <!-- end::Alert error-->\r\n\r\n    <!--begin::Form group-->\r\n    <div class=\"form-group\">\r\n      <label class=\"font-size-h6 font-weight-bolder text-dark\">Fullname</label>\r\n      <input\r\n        class=\"form-control form-control-sm h-auto py-7 px-6 rounded-lg font-size-h6\"\r\n        type=\"text\"\r\n        name=\"fullname\"\r\n        formControlName=\"fullname\"\r\n        placeholder=\"Fullname\"\r\n        autocomplete=\"off\"\r\n        [ngClass]=\"{\r\n          'is-invalid': registrationForm.controls['fullname'].invalid\r\n        }\"\r\n      />\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'required',\r\n          message: 'Fullname is required',\r\n          control: registrationForm.controls['fullname']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'minlength',\r\n          message: 'Fullname should have at least 3 symbols',\r\n          control: registrationForm.controls['fullname']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'maxLength',\r\n          message: 'Fullname should have maximum 100 symbols',\r\n          control: registrationForm.controls['fullname']\r\n        }\"\r\n      ></ng-container>\r\n    </div>\r\n    <!--end::Form group-->\r\n\r\n    <!--begin::Form group-->\r\n    <div class=\"form-group\">\r\n      <label class=\"font-size-h6 font-weight-bolder text-dark\">Email</label>\r\n      <input\r\n        class=\"form-control form-control-sm h-auto py-7 px-6 rounded-lg font-size-h6\"\r\n        type=\"email\"\r\n        placeholder=\"Email\"\r\n        name=\"email\"\r\n        formControlName=\"email\"\r\n        autocomplete=\"off\"\r\n        [ngClass]=\"{ 'is-invalid': registrationForm.controls['email'].invalid }\"\r\n      />\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'required',\r\n          message: 'Email is required',\r\n          control: registrationForm.controls['email']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'email',\r\n          message: 'Email is invalid',\r\n          control: registrationForm.controls['email']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'minlength',\r\n          message: 'Email should have at least 3 symbols',\r\n          control: registrationForm.controls['email']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'maxLength',\r\n          message: 'Email should have maximum 360 symbols',\r\n          control: registrationForm.controls['email']\r\n        }\"\r\n      ></ng-container>\r\n    </div>\r\n    <!--end::Form group-->\r\n\r\n    <!--begin::Form group-->\r\n    <div class=\"form-group\">\r\n      <label class=\"font-size-h6 font-weight-bolder text-dark pt-5\"\r\n        >Password</label\r\n      >\r\n      <input\r\n        class=\"form-control form-control-sm h-auto py-7 px-6 rounded-lg font-size-h6\"\r\n        type=\"password\"\r\n        placeholder=\"Password\"\r\n        name=\"password\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"off\"\r\n        [ngClass]=\"{\r\n          'is-invalid': registrationForm.controls['password'].invalid\r\n        }\"\r\n      />\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'required',\r\n          message: 'Password is required',\r\n          control: registrationForm.controls['password']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'minlength',\r\n          message: 'Password should have at least 3 symbols',\r\n          control: registrationForm.controls['password']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'maxLength',\r\n          message: 'Password should have maximum 100 symbols',\r\n          control: registrationForm.controls['password']\r\n        }\"\r\n      ></ng-container>\r\n    </div>\r\n    <!--end::Form group-->\r\n\r\n    <!--begin::Form group-->\r\n    <div class=\"form-group\">\r\n      <label class=\"font-size-h6 font-weight-bolder text-dark pt-5\"\r\n        >Confirm Password</label\r\n      >\r\n      <input\r\n        class=\"form-control form-control-sm h-auto py-7 px-6 rounded-lg font-size-h6\"\r\n        type=\"password\"\r\n        placeholder=\"Confirm password\"\r\n        name=\"cPassword\"\r\n        autocomplete=\"off\"\r\n        formControlName=\"cPassword\"\r\n        [ngClass]=\"{\r\n          'is-invalid': registrationForm.controls['cPassword'].invalid\r\n        }\"\r\n      />\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'required',\r\n          message: 'Confirm Password is required',\r\n          control: registrationForm.controls['cPassword']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'minlength',\r\n          message: 'Confirm Password should have at least 3 symbols',\r\n          control: registrationForm.controls['cPassword']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"formError\"\r\n        [ngTemplateOutletContext]=\"{\r\n          validation: 'maxLength',\r\n          message: 'Confirm Password should have maximum 100 symbols',\r\n          control: registrationForm.controls['cPassword']\r\n        }\"\r\n      ></ng-container>\r\n      <ng-container\r\n        *ngIf=\"\r\n          registrationForm.controls['cPassword'].errors &&\r\n          registrationForm.controls['cPassword'].errors.ConfirmPassword\r\n        \"\r\n      >\r\n        <div class=\"fv-plugins-message-container\">\r\n          <div class=\"fv-help-block\">\r\n            'Passsword' and 'Confirm Password' didn't match.\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <!--end::Form group-->\r\n\r\n    <!--begin::Form group-->\r\n    <div class=\"form-group\">\r\n      <label class=\"checkbox mb-0\">\r\n        <input type=\"checkbox\" formControlName=\"agree\" name=\"agree\" />&nbsp;I\r\n        Agree the&nbsp;<a\r\n          href=\"https://keenthemes.com/metronic/?page=faq\"\r\n          target=\"_blank\"\r\n          >terms and conditions</a\r\n        >.&nbsp;\r\n        <span></span>\r\n      </label>\r\n    </div>\r\n    <!--end::Form group-->\r\n\r\n    <!--begin::Form group-->\r\n    <div class=\"form-group d-flex flex-wrap pb-lg-0 pb-3\">\r\n      <button\r\n        type=\"submit\"\r\n        id=\"kt_login_signup_submit\"\r\n        [disabled]=\"\r\n          registrationForm.invalid || !registrationForm.controls['agree'].value\r\n        \"\r\n        class=\"btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4\"\r\n      >\r\n        Submit\r\n      </button>\r\n      <a\r\n        routerLink=\"/auth/login\"\r\n        type=\"button\"\r\n        id=\"kt_login_signup_cancel\"\r\n        class=\"btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3\"\r\n      >\r\n        Cancel\r\n      </a>\r\n\r\n      <ng-container *ngIf=\"isLoading$ | async\">\r\n        <span class=\"spinner spinner-primary ml-5\"></span>\r\n      </ng-container>\r\n    </div>\r\n    <!--end::Form group-->\r\n  </form>\r\n  <!--end::Form-->\r\n</div>\r\n<!--end::Signup-->\r\n\r\n<ng-template\r\n  #formError\r\n  let-control=\"control\"\r\n  let-message=\"message\"\r\n  let-validation=\"validation\"\r\n>\r\n  <ng-container\r\n    *ngIf=\"control.hasError(validation) && (control.dirty || control.touched)\"\r\n  >\r\n    <div class=\"fv-plugins-message-container\">\r\n      <div class=\"fv-help-block\">\r\n        {{ message }}\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n");

/***/ }),

/***/ 34288:
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth.component.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".login.login-1 .login-aside .aside-img {\n  min-height: 450px;\n}\n.login.login-1 .login-signin,\n.login.login-1 .login-signup,\n.login.login-1 .login-forgot {\n  display: none;\n}\n.login.login-1.login-signin-on .login-signup {\n  display: none;\n}\n.login.login-1.login-signin-on .login-signin {\n  display: block;\n}\n.login.login-1.login-signin-on .login-forgot {\n  display: none;\n}\n.login.login-1.login-signup-on .login-signup {\n  display: block;\n}\n.login.login-1.login-signup-on .login-signin {\n  display: none;\n}\n.login.login-1.login-signup-on .login-forgot {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-signup {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-signin {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-forgot {\n  display: block;\n}\n.login-content {\n  width: 100%;\n  max-width: 500px;\n}\n@media (min-width: 1500px) {\n  .login.login-1 .login-aside {\n    width: 100%;\n    max-width: 700px;\n  }\n  .login.login-1 .login-content {\n    width: 100%;\n    max-width: 500px;\n  }\n  .login.login-1 .login-content .login-form {\n    width: 100%;\n    max-width: 450px;\n  }\n}\n@media (min-width: 1500px) and (max-width: 1899.98px) {\n  .login.login-1 .login-aside {\n    width: 100%;\n    max-width: 450px;\n  }\n}\n@media (max-width: 1499.98px) {\n  .login.login-1 .login-content .login-form {\n    width: 100%;\n    max-width: 400px;\n  }\n}\n@media (max-width: 575.98px) {\n  .login.login-1 .aside-img {\n    min-height: 300px !important;\n    background-size: 400px;\n  }\n  .login.login-1 .login-content .login-form {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n:host {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhZ2VzL2xvZ2luL2xvZ2luLTEuc2NzcyIsImF1dGguY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdRO0VBQ0ksaUJBQUE7QUNWWjtBRGVJOzs7RUFHSSxhQUFBO0FDYlI7QURpQlE7RUFDSSxhQUFBO0FDZlo7QURrQlE7RUFDSSxjQUFBO0FDaEJaO0FEbUJRO0VBQ0ksYUFBQTtBQ2pCWjtBRHNCUTtFQUNJLGNBQUE7QUNwQlo7QUR1QlE7RUFDSSxhQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUFBQTtBQ3RCWjtBRDJCUTtFQUNJLGFBQUE7QUN6Qlo7QUQ0QlE7RUFDSSxhQUFBO0FDMUJaO0FENkJRO0VBQ0ksY0FBQTtBQzNCWjtBRGdDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQzdCSjtBQ3FCSTtFRmNJO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDL0JWO0VEa0NNO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDaENWO0VEa0NVO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDaENkO0FBQ0Y7QUNrQ0k7RUZNSTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQ3JDVjtBQUNGO0FDYUk7RUZnQ1E7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7RUMxQ2Q7QUFDRjtBQ09JO0VGMkNJO0lBQ0ksNEJBQUE7SUFDQSxzQkFBQTtFQy9DVjtFRG1EVTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VDakRkO0FBQ0Y7QUExRUE7RUFDRSxZQUFBO0FBNEVGIiwiZmlsZSI6ImF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vLyBMb2dpbiAxXHJcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXHJcbi8vXHJcblxyXG5cclxuLy8gSW5pdGlhbGl6YXRpb24gb2YgZ2xvYmFsIHZhcmlhYmxlcywgbWl4aW5zIGFuZCBmdW5jdGlvbnNcclxuQGltcG9ydCBcIi4uLy4uL2luaXRcIjtcclxuXHJcbi5sb2dpbi5sb2dpbi0xIHtcclxuICAgIC5sb2dpbi1hc2lkZSB7XHJcbiAgICAgICAgLmFzaWRlLWltZyB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3JtIG1vZGVzXHJcbiAgICAubG9naW4tc2lnbmluLFxyXG4gICAgLmxvZ2luLXNpZ251cCxcclxuICAgIC5sb2dpbi1mb3Jnb3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5sb2dpbi1zaWduaW4tb24ge1xyXG4gICAgICAgIC5sb2dpbi1zaWdudXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLXNpZ25pbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWZvcmdvdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubG9naW4tc2lnbnVwLW9uIHtcclxuICAgICAgICAubG9naW4tc2lnbnVwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tc2lnbmluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1mb3Jnb3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmxvZ2luLWZvcmdvdC1vbiB7XHJcbiAgICAgICAgLmxvZ2luLXNpZ251cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tc2lnbmluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1mb3Jnb3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLy8gRGVza3RvcCB2aWV3XHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgIC5sb2dpbi5sb2dpbi0xIHtcclxuICAgICAgICAubG9naW4tYXNpZGUge1xyXG4gICAgICAgICAgICB3aWR0aCAgICA6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoICAgIDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuXHJcbiAgICAgICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoICAgIDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFRhYmxldCBhbmQgTW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKGxnLCB4bCkge1xyXG4gICAgLmxvZ2luLmxvZ2luLTEge1xyXG4gICAgICAgIC5sb2dpbi1hc2lkZSB7XHJcbiAgICAgICAgICAgIHdpZHRoICAgIDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFRhYmxldCBtb2RlXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgLmxvZ2luLmxvZ2luLTEge1xyXG4gICAgICAgIC5sb2dpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggICAgOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gTW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgICAubG9naW4ubG9naW4tMSB7XHJcbiAgICAgICAgLmFzaWRlLWltZyB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQgICAgIDogMzAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggICAgOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhZ2VzL2xvZ2luL2xvZ2luLTEuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 27495:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/auth/forgot-password/forgot-password.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  :host .login-form {\n    width: 100%;\n    max-width: 450px;\n  }\n  :host .login-form .mat-form-field {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFFSjtFQUFJO0lBQ0UsV0FBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 73987:
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ":host {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  :host .login-form {\n    width: 100%;\n    max-width: 450px;\n  }\n  :host .login-form .mat-form-field {\n    width: 100%;\n  }\n}\n.logo-text {\n  margin-top: 10px;\n  font-size: 30px;\n  color: #fff;\n  font-weight: bold;\n  line-height: 20px;\n  display: block;\n  letter-spacing: 1px;\n}\n.logo-text small {\n  font-size: 15px;\n  letter-spacing: 0px;\n}\n.input-icons i {\n  position: absolute;\n  font-size: 2.5rem;\n  padding: 0px 7px;\n}\n.input-icons {\n  width: 100%;\n}\n.icon {\n  min-width: 50px;\n}\n.card-body {\n  padding: 30px 15px;\n}\n.input-field {\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n}\n::-webkit-input-placeholder {\n  text-align: center;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n:-ms-input-placeholder {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQ0k7RUFDSTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQUNWO0VBQ1U7SUFDSSxXQUFBO0VBQ2Q7QUFDRjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBQVI7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0FBREo7QUFLQTtFQUNJLGVBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7QUFGSjtBQUtBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtBQUZKO0FBS0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7QUFGSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgd2lkdGggICAgOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG5cclxuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubG9nby10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemUgIDogMzBweDtcclxuICAgIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHNtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmlucHV0LWljb25zIGkge1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMi41MHJlbTtcclxuICAgIHBhZGRpbmcgIDogMHB4IDdweDtcclxufVxyXG5cclxuLmlucHV0LWljb25zIHtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gICAgd2lkdGggICAgIDogMTAwJTtcclxuICAgIHBhZGRpbmcgICA6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 58953:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/logout/logout.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 47048:
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/registration/registration.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  :host .login-form {\n    width: 100%;\n    max-width: 450px;\n  }\n  :host .login-form .mat-form-field {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFFSjtFQUFJO0lBQ0UsV0FBQTtFQUVOO0FBQ0YiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_auth_module_ts.js.map