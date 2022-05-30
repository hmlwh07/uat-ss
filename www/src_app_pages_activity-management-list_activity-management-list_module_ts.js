"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_activity-management-list_activity-management-list_module_ts"],{

/***/ 12591:
/*!*************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-manage.const.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityCol": () => (/* binding */ ActivityCol),
/* harmony export */   "ActivityDisplayCol": () => (/* binding */ ActivityDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

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

/***/ 76575:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-management-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityManagementListComponent": () => (/* binding */ ActivityManagementListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activity_management_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-management-list.component.html?ngResource */ 68780);
/* harmony import */ var _activity_management_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-management-list.component.scss?ngResource */ 72518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-calendar */ 65610);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);
/* harmony import */ var _activity_manage_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-manage.const */ 12591);
/* harmony import */ var _activity_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-manage.service */ 93841);














let ActivityManagementListComponent = class ActivityManagementListComponent {
    constructor(fb, router, activityService, cdf) {
        this.fb = fb;
        this.router = router;
        this.activityService = activityService;
        this.cdf = cdf;
        this.ELEMENT_COL = _activity_manage_const__WEBPACK_IMPORTED_MODULE_5__.ActivityCol;
        this.displayedColumns = _activity_manage_const__WEBPACK_IMPORTED_MODULE_5__.ActivityDisplayCol;
        this.activityList = [];
        this.activityStatus = _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_4__.ActivityStatus;
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
        this.activityService.getActivityList(this.actForm.value).toPromise().then((res) => {
            if (res) {
                console.log('getActivityList', res);
                this.activityList = res;
                this.cdf.detectChanges();
                // this.matTable.reChangeData()
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _activity_manage_service__WEBPACK_IMPORTED_MODULE_6__.ActivityManageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef }
];
ActivityManagementListComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableViewComponent,] }]
};
ActivityManagementListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-activity-management-list',
        template: _activity_management_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: angular_calendar__WEBPACK_IMPORTED_MODULE_11__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_2__.MY_FORMATS },
        ],
        styles: [_activity_management_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActivityManagementListComponent);



/***/ }),

/***/ 59129:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-management-list.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityManagementListModule": () => (/* binding */ ActivityManagementListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _activity_management_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-management-list.component */ 76575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share-components/share-component.module */ 94142);











let ActivityManagementListModule = class ActivityManagementListModule {
};
ActivityManagementListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_activity_management_list_component__WEBPACK_IMPORTED_MODULE_0__.ActivityManagementListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_4__.ShareComponentModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_3__.LanguageModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                {
                    path: '',
                    component: _activity_management_list_component__WEBPACK_IMPORTED_MODULE_0__.ActivityManagementListComponent,
                },
            ]),
        ]
    })
], ActivityManagementListModule);



/***/ }),

/***/ 72518:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-management-list.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = ".col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-group.row {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LW1hbmFnZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUYiLCJmaWxlIjoiYWN0aXZpdHktbWFuYWdlbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1mb3JtLWxhYmVsIHtcclxuICBwYWRkaW5nLXRvcCAgIDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAucm93e1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 68780:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-management-list.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom gutter-b\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n          <h3 class=\"card-label left-border-image\">{{\"FORM.act_list\" | translate}}</h3>\r\n        </div>\r\n        <div class=\"card-toolbar\">\r\n          <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\r\n          <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\r\n            <span class=\"\">{{\"FORM.cancel\" | translate}}</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body px-10 py-3\">\r\n        <form action=\"#\" class=\"form\" [formGroup]=\"actForm\">\r\n          <div class=\"row\" style=\"align-items: center;\">\r\n            <app-start-end-date [formInput]=\"actForm\" remove-host [colClass]=\"'col-md-4'\"></app-start-end-date>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\r\n                <div class=\"col-sm-8\">\r\n\r\n                  <ng-select class=\"ng-custom-select ng-custom-select-sm\"\r\n                    [class.is-invalid]=\"isControlInvalid('status')\" [class.is-valid]=\"isControlValid('status')\"\r\n                    [items]=\"statusOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"status\">\r\n                  </ng-select>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" style=\"align-items: center;\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-4 col-form-label \">{{\"FORM.act_type\" | translate}}</label>\r\n                <div class=\"col-sm-8\">\r\n                  <!-- <select class=\"form-control form-control-sm \" name=\"type\" autocomplete=\"off\"\r\n                    [class.is-invalid]=\"isControlInvalid('type')\" [class.is-valid]=\"isControlValid('type')\"\r\n                    formControlName=\"type\">\r\n                    <option value=\"\">All</option>\r\n                    <option value=\"{{item}}\" *ngFor=\"let item of activityType\">{{item}}</option>\r\n                  </select> -->\r\n                  <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('type')\"\r\n                    [class.is-valid]=\"isControlValid('type')\" [items]=\"activityTypeOption\" bindLabel=\"value\"\r\n                    bindValue=\"code\" formControlName=\"type\">\r\n                  </ng-select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.act_title\" | translate}}</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input type=\"text\" class=\"form-control form-control-sm \" name=\"title\" autocomplete=\"off\"\r\n                    [class.is-invalid]=\"isControlInvalid('title')\" [class.is-valid]=\"isControlValid('title')\"\r\n                    formControlName=\"title\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom gutter-b data\">\r\n\r\n      <div class=\"card-body customer-card-body\">\r\n\r\n        <app-common-list-2 *ngIf=\"activityList.length > 0\" class=\"data-list\" #commonList [data]=\"activityList\"\r\n          [type]=\"'activity'\" (btnEvent)=\"actionBtn($event)\">\r\n        </app-common-list-2>\r\n\r\n        <!-- begin:Table -->\r\n        <!-- <app-material-table-view [data]=\"activityList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\r\n          (emitter)=\"actionBtn($event)\">\r\n        </app-material-table-view> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_activity-management-list_activity-management-list_module_ts.js.map