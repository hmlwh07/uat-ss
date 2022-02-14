"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_user-management_user-management_module_ts"],{

/***/ 50471:
/*!******************************************************************!*\
  !*** ./src/app/modules/user-management/roles/roles.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesComponent": () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_roles_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./roles.component.html */ 29426);
/* harmony import */ var _roles_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.component.scss */ 30502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let RolesComponent = class RolesComponent {
    constructor() { }
    ngOnInit() {
    }
};
RolesComponent.ctorParameters = () => [];
RolesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-roles',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_roles_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_roles_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RolesComponent);



/***/ }),

/***/ 96342:
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-management/user-management-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementRoutingModule": () => (/* binding */ UserManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management.component */ 77652);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ 75251);
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles/roles.component */ 50471);






const routes = [
    {
        path: '',
        component: _user_management_component__WEBPACK_IMPORTED_MODULE_0__.UserManagementComponent,
        children: [
            {
                path: 'users',
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent,
            },
            {
                path: 'roles',
                component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_2__.RolesComponent,
            },
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: '**', redirectTo: 'users', pathMatch: 'full' },
        ],
    },
];
let UserManagementRoutingModule = class UserManagementRoutingModule {
};
UserManagementRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], UserManagementRoutingModule);



/***/ }),

/***/ 77652:
/*!**********************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementComponent": () => (/* binding */ UserManagementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_management_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-management.component.html */ 38293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



let UserManagementComponent = class UserManagementComponent {
    constructor() { }
    ngOnInit() { }
};
UserManagementComponent.ctorParameters = () => [];
UserManagementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-user-management',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_management_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], UserManagementComponent);



/***/ }),

/***/ 66601:
/*!*******************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementModule": () => (/* binding */ UserManagementModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/users.component */ 75251);
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles/roles.component */ 50471);
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component */ 77652);
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management-routing.module */ 96342);







let UserManagementModule = class UserManagementModule {
};
UserManagementModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent, _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__.RolesComponent, _user_management_component__WEBPACK_IMPORTED_MODULE_2__.UserManagementComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__.UserManagementRoutingModule],
    })
], UserManagementModule);



/***/ }),

/***/ 75251:
/*!******************************************************************!*\
  !*** ./src/app/modules/user-management/users/users.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./users.component.html */ 44334);
/* harmony import */ var _users_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component.scss */ 18820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let UsersComponent = class UsersComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsersComponent.ctorParameters = () => [];
UsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-users',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_users_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersComponent);



/***/ }),

/***/ 29426:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/user-management/roles/roles.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p><b>Roles:</b> - Coming soon in the following updates (ETA [v8.x.x]).</p>\r\n");

/***/ }),

/***/ 38293:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/user-management/user-management.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ 44334:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/user-management/users/users.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p><b>Users:</b> - Coming soon in the following updates (ETA [v8.x.x]).</p>\r\n");

/***/ }),

/***/ 30502:
/*!********************************************************************!*\
  !*** ./src/app/modules/user-management/roles/roles.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 18820:
/*!********************************************************************!*\
  !*** ./src/app/modules/user-management/users/users.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_user-management_user-management_module_ts.js.map