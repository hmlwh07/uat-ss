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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activity_management_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-management-list.component.html?ngResource */ 68780);
/* harmony import */ var _activity_management_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-management-list.component.scss?ngResource */ 72518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
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
        this.totalElements = 0;
        this.totalPages = 0;
        this.selectedPageBtn = 0;
        this.currentPage = 1;
        this.activityType = [
            "Face to Face",
            "Online",
            "Phone Call"
        ];
        this.postedData = {};
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
    // getList() {
    //   this.activityService.getActivityList(this.actForm.value).toPromise().then((res: any) => {
    //     if (res) {
    //       console.log('getActivityList', res);
    //       this.activityList = res
    //       this.cdf.detectChanges()
    //      // this.matTable.reChangeData()
    //     }
    //   })
    // }
    reponseFromPager(event) {
        // console.log("LEADEVENT", event);
        this.currentPage = event;
        this.getDatabyPage(this.currentPage);
    }
    getList(limit = 5, offset = 1) {
        let postData = Object.assign(Object.assign({}, this.actForm.getRawValue()), { limit: 5, offset: offset });
        this.postedData = postData;
        this.activityService.getActivityList(this.postedData).toPromise().then((res) => {
            if (res) {
                // console.log('getActivityList', res);
                this.activityList = res.content;
                this.totalElements = res.totalElements;
                this.totalPages = res.totalPages;
                this.selectedPageBtn = this.currentPage;
                this.cdf.detectChanges();
                // this.activityList = res
                this.cdf.detectChanges();
                // this.matTable.reChangeData()
            }
        });
    }
    getDatabyPage(page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.currentPage = page;
            let postData = Object.assign(Object.assign({}, this.actForm.getRawValue()), { limit: 5, offset: page });
            this.totalPages = 0;
            this.postedData = postData;
            yield this.activityService.getActivityList(this.postedData).toPromise().then((res) => {
                if (res) {
                    this.activityList = res.content;
                    // this.activityList = res
                    this.totalElements = res.totalElements;
                    this.totalPages = res.totalPages;
                    this.selectedPageBtn = this.currentPage;
                    this.cdf.detectChanges();
                }
            });
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _activity_manage_service__WEBPACK_IMPORTED_MODULE_6__.ActivityManageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
ActivityManagementListComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableViewComponent,] }]
};
ActivityManagementListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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

module.exports = ".col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-group.row {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LW1hbmFnZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUYiLCJmaWxlIjoiYWN0aXZpdHktbWFuYWdlbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1mb3JtLWxhYmVsIHtcbiAgcGFkZGluZy10b3AgICA6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5mb3JtLWdyb3VwLnJvd3tcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuIl19 */";

/***/ }),

/***/ 68780:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/activity-management-list/activity-management-list.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b\">\n      <div class=\"card-header\">\n        <div class=\"card-title\">\n          <h3 class=\"card-label left-border-image\">{{\"FORM.act_list\" | translate}}</h3>\n        </div>\n        <div class=\"card-toolbar\">\n          <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\n          <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n            <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"card-body px-10 py-3\">\n        <form action=\"#\" class=\"form\" [formGroup]=\"actForm\">\n          <div class=\"row\" style=\"align-items: center;\">\n            <app-start-end-date [formInput]=\"actForm\" remove-host [colClass]=\"'col-md-4'\"></app-start-end-date>\n            <div class=\"col-md-4\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\n                <div class=\"col-sm-8\">\n\n                  <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                    [class.is-invalid]=\"isControlInvalid('status')\" [class.is-valid]=\"isControlValid('status')\"\n                    [items]=\"statusOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"status\">\n                  </ng-select>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"align-items: center;\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label \">{{\"FORM.act_type\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                  <!-- <select class=\"form-control form-control-sm \" name=\"type\" autocomplete=\"off\"\n                    [class.is-invalid]=\"isControlInvalid('type')\" [class.is-valid]=\"isControlValid('type')\"\n                    formControlName=\"type\">\n                    <option value=\"\">All</option>\n                    <option value=\"{{item}}\" *ngFor=\"let item of activityType\">{{item}}</option>\n                  </select> -->\n                  <ng-select class=\"ng-custom-select ng-custom-select-sm\" [class.is-invalid]=\"isControlInvalid('type')\"\n                    [class.is-valid]=\"isControlValid('type')\" [items]=\"activityTypeOption\" bindLabel=\"value\"\n                    bindValue=\"code\" formControlName=\"type\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n\n              <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.act_title\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"text\" class=\"form-control form-control-sm \" name=\"title\" autocomplete=\"off\"\n                    [class.is-invalid]=\"isControlInvalid('title')\" [class.is-valid]=\"isControlValid('title')\"\n                    formControlName=\"title\" />\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b data\">\n\n      <div class=\"card-body customer-card-body\">\n\n        <app-common-list-2 *ngIf=\"activityList.length > 0\" class=\"data-list\" #commonList [data]=\"activityList\"\n          [type]=\"'activity'\" [total]=\"totalElements\" [totalpage]=\"totalPages\"  (pageEvent)=\"reponseFromPager($event)\"  (btnEvent)=\"actionBtn($event)\">\n        </app-common-list-2>\n\n        <!-- begin:Table -->\n        <!-- <app-material-table-view [data]=\"activityList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n          (emitter)=\"actionBtn($event)\">\n        </app-material-table-view> -->\n      </div>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_activity-management-list_activity-management-list_module_ts.js.map