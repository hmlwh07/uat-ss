"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_activity-management-list_activity-management-list_module_ts"],{

/***/ 63703:
/*!*************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-manage.const.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityCol": () => (/* binding */ ActivityCol),
/* harmony export */   "ActivityDisplayCol": () => (/* binding */ ActivityDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const ActivityCol = [
    {
        title: "Activity No.",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "activityNo",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Activity Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "activityType",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Activity Title",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "activityTitle",
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
        title: "Related To",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "relatedTo",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Assigned To",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "assignName",
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Due Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "dueDate",
        isFromatDate: true
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "status",
        isActivityStatus: true,
        // amtFormat?: boolean,
        // isTitle?: boolean
    },
    {
        title: "Customer",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "customerName",
        // amtFormat?: boolean,
        // isTitle?: boolean
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true
        }
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const ActivityDisplayCol = [
    "activityNo",
    "activityType",
    "activityTitle",
    // "relatedType",
    "relatedTo",
    "assignName",
    "dueDate",
    "status",
    "customerName",
    "actions",
];


/***/ }),

/***/ 85722:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-management-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityManagementListComponent": () => (/* binding */ ActivityManagementListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_activity_management_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./activity-management-list.component.html */ 93952);
/* harmony import */ var _activity_management_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-management-list.component.scss */ 85545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);
/* harmony import */ var _activity_manage_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-manage.const */ 63703);
/* harmony import */ var _activity_manage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-manage.service */ 95976);










let ActivityManagementListComponent = class ActivityManagementListComponent {
    constructor(fb, router, activityService, cdf) {
        this.fb = fb;
        this.router = router;
        this.activityService = activityService;
        this.cdf = cdf;
        this.ELEMENT_COL = _activity_manage_const__WEBPACK_IMPORTED_MODULE_4__.ActivityCol;
        this.displayedColumns = _activity_manage_const__WEBPACK_IMPORTED_MODULE_4__.ActivityDisplayCol;
        this.activityList = [];
        this.activityStatus = _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_3__.ActivityStatus;
        this.activityType = [
            "Face to Face",
            "Online",
            "Phone Call"
        ];
        this.activityTypeOption = [
            {
                code: "",
                value: "All"
            },
            {
                code: "Face to Face",
                value: "Face to Face"
            },
            {
                code: "Online",
                value: "Online"
            },
            {
                code: "Phone Call",
                value: "Phone Call"
            }
        ];
        this.statusOption = [
            {
                code: "",
                value: "All"
            },
            {
                code: "Open",
                value: "Open"
            },
            {
                code: "Complete",
                value: "Complete"
            },
            {
                code: "Cancel",
                value: "Cancel"
            }
        ];
        this.loadForm();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getList();
    }
    loadForm() {
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            "type": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(""),
            "title": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null),
            "status": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(""),
        });
    }
    getList() {
        this.activityService.getActivityList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                this.activityList = res;
                this.cdf.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    actionBtn(event) {
        if (event.cmd == 'edit') {
            this.navigateToDetail('edit', event.data.activityNo);
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
    navigateToDetail(data, id) {
        this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: data, pageId: id } });
    }
};
ActivityManagementListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _activity_manage_service__WEBPACK_IMPORTED_MODULE_5__.ActivityManageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef }
];
ActivityManagementListComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }]
};
ActivityManagementListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-activity-management-list',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_activity_management_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_activity_management_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActivityManagementListComponent);



/***/ }),

/***/ 98226:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-management-list.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityManagementListModule": () => (/* binding */ ActivityManagementListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _activity_management_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-management-list.component */ 85722);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);









let ActivityManagementListModule = class ActivityManagementListModule {
};
ActivityManagementListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_activity_management_list_component__WEBPACK_IMPORTED_MODULE_0__.ActivityManagementListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _activity_management_list_component__WEBPACK_IMPORTED_MODULE_0__.ActivityManagementListComponent,
                },
            ]),
        ]
    })
], ActivityManagementListModule);



/***/ }),

/***/ 93952:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/activity-management-list/activity-management-list.component.html ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom gutter-b\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n          <h3 class=\"card-label left-border-image\">Activity Management List</h3>\r\n        </div>\r\n        <div class=\"card-toolbar\">\r\n          <!-- <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"navigateToDetail('create')\">\r\n            <span class=\"flaticon2-plus\"></span>\r\n          </button> -->\r\n          <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 75px;\" (click)=\"getList()\">\r\n            <span class=\"flaticon2-magnifier-tool\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body px-10 py-3\">\r\n        <form action=\"#\" class=\"form\" [formGroup]=\"actForm\">\r\n          <div class=\"row\" style=\"align-items: center;\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-4 col-form-label \">Activity Type</label>\r\n                <div class=\"col-sm-8\">\r\n                  <!-- <select class=\"form-control form-control-sm \" name=\"type\" autocomplete=\"off\"\r\n                    [class.is-invalid]=\"isControlInvalid('type')\" [class.is-valid]=\"isControlValid('type')\"\r\n                    formControlName=\"type\">\r\n                    <option value=\"\">All</option>\r\n                    <option value=\"{{item}}\" *ngFor=\"let item of activityType\">{{item}}</option>\r\n                  </select> -->\r\n                  <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('type')\"\r\n                    [class.is-valid]=\"isControlValid('type')\" [items]=\"activityTypeOption\" bindLabel=\"value\"\r\n                    bindValue=\"code\" formControlName=\"type\">\r\n                  </ng-select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-4 col-form-label\">Activity Title</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control form-control-sm \" name=\"title\" autocomplete=\"off\"\r\n                    [class.is-invalid]=\"isControlInvalid('title')\" [class.is-valid]=\"isControlValid('title')\"\r\n                    formControlName=\"title\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-4 col-form-label\">Status</label>\r\n                <div class=\"col-sm-8\">\r\n\r\n                  <ng-select class=\"ng-custom-select ng-custom-select-sm\"\r\n                    [class.is-invalid]=\"isControlInvalid('status')\" [class.is-valid]=\"isControlValid('status')\"\r\n                    [items]=\"statusOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"status\">\r\n                  </ng-select>\r\n                  <!-- <select class=\"form-control form-control-sm\" name=\"status\" autocomplete=\"off\"\r\n                    [class.is-invalid]=\"isControlInvalid('status')\" [class.is-valid]=\"isControlValid('status')\"\r\n                    formControlName=\"status\">\r\n                    <option value=\"\">All</option>\r\n                    <option value=\"Open\">Open</option>\r\n                    <option value=\"Complete\">Complete</option>\r\n                    <option value=\"Cancel\">Cancel</option>\r\n                  </select> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-sm-6\">\r\n              <button type=\"submit\" class=\"btn btn-primary btn-block mt-2\">Search</button>\r\n            </div> -->\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom gutter-b\">\r\n\r\n      <div class=\"card-body customer-card-body\">\r\n        <!-- begin:Table -->\r\n        <app-material-table-view [data]=\"activityList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\r\n          (emitter)=\"actionBtn($event)\">\r\n        </app-material-table-view>\r\n        <!-- <div class=\"table-responsive angular-bootstrap-table\">\r\n          <table class=\"table table-head-custom table-vertical-center\">\r\n            <thead>\r\n              <th>\r\n                Activity No.\r\n              </th>\r\n              <th>\r\n                Activity Type\r\n              </th>\r\n              <th>\r\n                Activity Title\r\n              </th>\r\n              <th>\r\n                Related To\r\n              </th>\r\n              <th>\r\n                Assigned To\r\n              </th>\r\n              <th>\r\n                Due Date\r\n              </th>\r\n              <th>\r\n                Status\r\n              </th>\r\n              <th>\r\n                Customer\r\n              </th>\r\n              <th>\r\n                Actions\r\n              </th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of activityList\">\r\n                <td>\r\n                  {{item.activityNo}}\r\n                </td>\r\n                <td>\r\n                  {{item.activityType}}\r\n                </td>\r\n                <td>\r\n                  {{item.activityTitle}}\r\n                </td>\r\n                <td>\r\n                  {{item.relatedTo}}\r\n                </td>\r\n                <td>\r\n                  {{item.assignName}}\r\n                </td>\r\n                <td>\r\n                  {{item.dueDate | date : \"dd/MM/Y\"}}\r\n                </td>\r\n                <td>\r\n                  {{activityStatus[item.status]}}\r\n                </td>\r\n                <td>\r\n                  {{item.customerName}}\r\n                </td>\r\n                <td>\r\n                  <a title=\"Edit\" class=\"btn btn-icon btn-light btn-hover-primary btn-sm mx-3\"\r\n                    (click)=\"navigateToDetail('edit',item.activityNo)\">\r\n                    <span [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\" [cacheSVG]=\"true\"\r\n                      class=\"svg-icon svg-icon-md svg-icon-primary\">\r\n                    </span>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div> -->\r\n        <!-- end: Table -->\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ 85545:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-management-list.component.scss ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-group.row {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LW1hbmFnZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUYiLCJmaWxlIjoiYWN0aXZpdHktbWFuYWdlbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1mb3JtLWxhYmVsIHtcclxuICBwYWRkaW5nLXRvcCAgIDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAucm93e1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_activity-management-list_activity-management-list_module_ts.js.map