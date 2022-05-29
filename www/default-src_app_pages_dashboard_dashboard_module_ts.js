"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 64885:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.component.html */ 90558);
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ 81518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_form_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/form-ui.service */ 41323);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-modal/edit-modal.component */ 57354);
/* harmony import */ var _models_form_ui_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/form-ui.const */ 79332);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);




// import { uuid } from 'uuid';







let DashboardComponent = class DashboardComponent {
    constructor(router, uiService, modalService, cdRef, alertService) {
        this.router = router;
        this.uiService = uiService;
        this.modalService = modalService;
        this.cdRef = cdRef;
        this.alertService = alertService;
        this.forms = [];
        this.form = {
            id: "",
            name: "",
        };
        this.ELEMENT_COL = _models_form_ui_const__WEBPACK_IMPORTED_MODULE_4__.FormUiCol;
        this.displayedColumns = _models_form_ui_const__WEBPACK_IMPORTED_MODULE_4__.FormUiDisplayCol;
        this.unsubscribe = [];
        this.ELEMENT_DATA = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
            { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
            { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
            { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
            { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
            { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
            { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
            { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
            { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
            { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
            { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
        ];
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.uiService.getByType().toPromise().then((res) => {
            //console.log(res);
            if (res) {
                this.forms = res.forms;
                this.cdRef.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
    delete(index, id) {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.uiService.delete(id).toPromise().then(res => {
                    if (res)
                        this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                        });
                    this.forms.splice(index, 1);
                    this.cdRef.detectChanges();
                    this.matTable.reChangeData();
                });
            }
        });
    }
    edit(index, data = {}) {
        const modalRef = this.modalService.open(_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_3__.EditModalComponent, { size: 'md', backdrop: false });
        modalRef.componentInstance.oldData = data;
        modalRef.componentInstance.id = data.dyProductID;
        modalRef.componentInstance.name = JSON.parse(JSON.stringify(data)).pageName;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.submit(res.data);
                }
                else if (res.type == 'edit') {
                    this.forms[index] = res.data;
                    this.cdRef.detectChanges();
                    this.matTable.reChangeData();
                }
            }
        });
    }
    actionBtn(event) {
        // console.log(event);
        let index = this.forms.findIndex(x => x.dyProductID == event.data.dyProductID);
        if (event.cmd == 'edit') {
            this.editLayout(event.data);
        }
        else if (event.cmd == 'delete') {
            this.delete(index, event.data.dyProductID);
        }
        else if (event.cmd == 'view') {
            this.editLayout(event.data);
        }
    }
    editLayout(item) {
        this.uiService.selectedForm = item;
        this.router.navigateByUrl("/config-layout");
    }
    viewLayout(item) {
        this.uiService.selectedForm = item;
        this.router.navigateByUrl("/product-form");
    }
    submit(data) {
        // if (!(this.form.name.trim())) return false
        let postData = {
            pageName: data.pageName,
            config: JSON.stringify({}),
            simpleTest: "nothing here",
            type: "Form",
        };
        this.uiService.save(postData).toPromise().then(res => {
            if (res) {
                // console.log(res);
                this.uiService.selectedForm = res;
                this.router.navigateByUrl("/config-layout");
                // this.getList()
            }
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_form_ui_service__WEBPACK_IMPORTED_MODULE_2__.FormUIService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
DashboardComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableViewComponent,] }]
};
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-dashboard',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 52070:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardShareModule": () => (/* binding */ DashboardShareModule),
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 64885);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-modal/edit-modal.component */ 57354);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 63699);










let DashboardShareModule = class DashboardShareModule {
};
DashboardShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__.EditModalComponent],
        exports: [_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__.EditModalComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__.CRUDTableModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__.LanguageModule
        ]
    })
], DashboardShareModule);

let DashboardModule = class DashboardModule {
};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__.CRUDTableModule,
            DashboardShareModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__.LanguageModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                {
                    path: '',
                    component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
                },
            ]),
        ],
    })
], DashboardModule);



/***/ }),

/***/ 57354:
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/edit-modal/edit-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditModalComponent": () => (/* binding */ EditModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-modal.component.html */ 88369);
/* harmony import */ var _edit_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-modal.component.scss */ 64020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _services_form_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/form-ui.service */ 41323);







let EditModalComponent = class EditModalComponent {
    constructor(modal, uiService, alertService) {
        this.modal = modal;
        this.uiService = uiService;
        this.alertService = alertService;
        this.oldData = {};
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    save() {
        let postData = Object.assign(Object.assign({}, this.oldData), { pageName: this.name });
        if (!this.id) {
            this.modal.dismiss({ data: postData, type: 'save' });
        }
        else {
            this.uiService.updateNoID(postData).toPromise().then(res => {
                if (res) {
                    this.modal.dismiss({ data: postData, type: 'edit' });
                }
            });
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    deleteEditModal() {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.modal.dismiss({ type: 'delete' });
            }
        });
    }
};
EditModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal },
    { type: _services_form_ui_service__WEBPACK_IMPORTED_MODULE_3__.FormUIService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
EditModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-modal',
        template: _Users_khanttikyi_Workspace_BSS_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditModalComponent);



/***/ }),

/***/ 79332:
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/models/form-ui.const.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUiCol": () => (/* binding */ FormUiCol),
/* harmony export */   "FormUiDisplayCol": () => (/* binding */ FormUiDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const FormUiCol = [
    {
        title: "Group Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "pageName",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Simple Data",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "simpleTest",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            // view: true,
            edit: true,
            delete: true
        }
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const FormUiDisplayCol = [
    "pageName",
    "simpleTest",
    "actions",
];


/***/ }),

/***/ 90558:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n  <!-- <div class=\"col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 mb-2\">\n\n        <div class=\"card card-custom\">\n          <div class=\"card-header\">\n            <div class=\"card-title\">\n              <h3 class=\"card-label left-border-image\">Policy List</h3>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <form class=\"form\" (ngSubmit)=\"submit()\">\n              <div class=\"form-group\">\n                <label>Group Name</label>\n                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"form.name\" name=\"name\" placeholder=\"\" />\n              </div>\n              <div class=\"form-group\">\n                <button class=\"btn btn-primary\">Save</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div> -->\n  <div class=\"col-12\">\n    <div class=\"card card-custom\">\n      <div class=\"card-header\">\n        <div class=\"card-title\">\n          <h3 class=\"card-label left-border-image\">Page Groups List</h3>\n        </div>\n        <div class=\"card-toolbar\">\n          <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"edit(-1)\">\n            <span class=\"flaticon2-plus\"></span>\n          </button>\n          <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"createOrEdit()\">Create New Quotation</button> -->\n        </div>\n      </div>\n      <div class=\"card-body customer-card-body\">\n        <app-material-table-view [data]=\"forms\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n          (emitter)=\"actionBtn($event)\">\n        </app-material-table-view>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 88369:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard/edit-modal/edit-modal.component.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      {{id ? \"Edit\" : \"Create\"}} Group Name\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <!-- <form class=\"form\">  -->\r\n    <div class=\"form-group\">\r\n      <label>Group Name</label>\r\n      <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"\" />\r\n    </div>\r\n    <!-- </form> -->\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <!-- <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"deleteEditModal()\">Delete</button> -->\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">{{\"FORM.btn_cancel\" | translate }}</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\" [disabled]=\"!name\">{{\"FORM.btn_save\" | translate }}</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 81518:
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 64020:
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/edit-modal/edit-modal.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_dashboard_module_ts.js.map