"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_renew-management-list_renew-management-list_module_ts"],{

/***/ 34976:
/*!*******************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-manage.const.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewCol": () => (/* binding */ RenewCol),
/* harmony export */   "ActivityDisplayCol": () => (/* binding */ ActivityDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const RenewCol = [
    {
        title: "Policy Number",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "policyNumber",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Product Code",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productCode",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    // {
    //   title: "Related Type",
    //   type: COLTYPE.FEILD,
    //   field: "relatedType",
    //   // amtFormat?: boolean,
    //   isTitle: true
    //   // isDate?: boolen
    // },
    {
        title: "Agent Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "agentName",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Premium",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "premium",
        // isTitle?: boolean
        amtFormat: true
        // isDate?: boolen
    },
    {
        title: "Currency",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "currency",
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "status",
        isRenewStatus: true,
        // amtFormat?: boolean,
        // isTitle?: boolean
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            // edit: true,
            confirm: true,
            view: true,
            download: true
        }
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const ActivityDisplayCol = [
    "policyNumber",
    // "renewalPolicyNumber",
    "productCode",
    "agentName",
    "premium",
    "currency",
    "status",
    "actions",
];


/***/ }),

/***/ 69024:
/*!********************************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-management-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewManagementListComponent": () => (/* binding */ RenewManagementListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_renew_management_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./renew-management-list.component.html */ 11392);
/* harmony import */ var _renew_management_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renew-management-list.component.scss */ 2786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);
/* harmony import */ var _renew_manage_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renew-manage.const */ 34976);
/* harmony import */ var _renew_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renew-manage.service */ 52902);











let RenewManagementListComponent = class RenewManagementListComponent {
    constructor(fb, router, cdf, renewService, alertService) {
        this.fb = fb;
        this.router = router;
        this.cdf = cdf;
        this.renewService = renewService;
        this.alertService = alertService;
        this.ELEMENT_COL = _renew_manage_const__WEBPACK_IMPORTED_MODULE_5__.RenewCol;
        this.displayedColumns = _renew_manage_const__WEBPACK_IMPORTED_MODULE_5__.ActivityDisplayCol;
        this.renewList = [];
        this.activityStatus = _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_4__.ActivityStatus;
        this.loadForm();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getList();
    }
    cancel() {
    }
    loadForm() {
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            "type": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(""),
            "title": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
            "status": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(""),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null)
        });
    }
    getList() {
        this.renewService.getRenewList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.renewList = res;
                this.cdf.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    actionBtn(event) {
        if (event.cmd == 'edit') {
            this.navigateToDetail(event.data);
        }
        else if (event.cmd == 'view') {
            this.navigateToDetail(event.data);
        }
        else if (event.cmd == "confirm") {
            this.confirmRenew(event.data);
        }
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.actForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.actForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.actForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.actForm.controls[controlName];
        return control.dirty || control.touched;
    }
    navigateToDetail(data) {
        this.router.navigate(["sale/renew-policy/detail"], { queryParams: { data: JSON.stringify(data) } });
    }
    confirmRenew(data) {
        if (data.status != "confirm") {
            this.renewService.confirmRenew(data.policyNumber).toPromise().then((res) => {
                if (res) {
                    console.log(res);
                    this.alertService.activate('This record was updated', 'Success Message');
                    this.navigateToDetail(res);
                }
            });
        }
    }
};
RenewManagementListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _renew_manage_service__WEBPACK_IMPORTED_MODULE_6__.RenewManageService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
RenewManagementListComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableViewComponent,] }]
};
RenewManagementListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-renew-management-list',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_renew_management_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_renew_management_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RenewManagementListComponent);



/***/ }),

/***/ 49860:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-management-list.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewManagementListModule": () => (/* binding */ RenewManagementListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _renew_management_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renew-management-list.component */ 69024);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);










let RenewManagementListModule = class RenewManagementListModule {
};
RenewManagementListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_renew_management_list_component__WEBPACK_IMPORTED_MODULE_0__.RenewManagementListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__.LanguageModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                {
                    path: '',
                    component: _renew_management_list_component__WEBPACK_IMPORTED_MODULE_0__.RenewManagementListComponent,
                },
            ]),
        ]
    })
], RenewManagementListModule);



/***/ }),

/***/ 11392:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/renew-management-list/renew-management-list.component.html ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b\">\n      <div class=\"card-header\">\n        <div class=\"card-title\">\n          <h3 class=\"card-label left-border-image\">{{\"FORM.act_list\" | translate}}</h3>\n        </div>\n        <div class=\"card-toolbar\">\n          <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\n          <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n            <span class=\"\">Cancel</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"card-body px-10 py-3\">\n        <form action=\"#\" class=\"form\" [formGroup]=\"actForm\">\n          <div class=\"row\" style=\"align-items: center;\">\n            <app-start-end-date [formInput]=\"actForm\" remove-host [colClass]=\"'col-md-4'\"></app-start-end-date>\n            <div class=\"col-md-4\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\n                <div class=\"col-sm-8\">\n\n                  <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                    [class.is-invalid]=\"isControlInvalid('status')\" [class.is-valid]=\"isControlValid('status')\"\n                    [items]=\"statusOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"status\">\n                  </ng-select>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"align-items: center;\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label \">{{\"FORM.act_type\" | translate}}</label>\n                <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('type')\"\n                  [class.is-valid]=\"isControlValid('type')\" [items]=\"activityTypeOption\" bindLabel=\"value\"\n                  bindValue=\"code\" formControlName=\"type\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-4 col-form-label\">{{\"FORM.act_title\" | translate}}</label>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control form-control-sm \" name=\"title\" autocomplete=\"off\"\n                  [class.is-invalid]=\"isControlInvalid('title')\" [class.is-valid]=\"isControlValid('title')\"\n                  formControlName=\"title\" />\n              </div>\n            </div>\n          </div>\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b\">\n\n      <div class=\"card-body customer-card-body\">\n        <app-material-table-view [data]=\"renewList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n          (emitter)=\"actionBtn($event)\">\n        </app-material-table-view>\n\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 2786:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/renew-management-list/renew-management-list.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-group.row {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmV3LW1hbmFnZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUYiLCJmaWxlIjoicmVuZXctbWFuYWdlbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1mb3JtLWxhYmVsIHtcbiAgcGFkZGluZy10b3AgICA6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5mb3JtLWdyb3VwLnJvd3tcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_renew-management-list_renew-management-list_module_ts.js.map