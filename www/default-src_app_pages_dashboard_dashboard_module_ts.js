"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 24789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 6277);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss?ngResource */ 82680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_form_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/form-ui.service */ 78007);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-modal/edit-modal.component */ 50585);
/* harmony import */ var _models_form_ui_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/form-ui.const */ 17418);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);




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
        template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule),
/* harmony export */   "DashboardShareModule": () => (/* binding */ DashboardShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 24789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-modal/edit-modal.component */ 50585);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);










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

/***/ 50585:
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/edit-modal/edit-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditModalComponent": () => (/* binding */ EditModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-modal.component.html?ngResource */ 42222);
/* harmony import */ var _edit_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-modal.component.scss?ngResource */ 44182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _services_form_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/form-ui.service */ 78007);







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
        template: _edit_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditModalComponent);



/***/ }),

/***/ 17418:
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/models/form-ui.const.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUiCol": () => (/* binding */ FormUiCol),
/* harmony export */   "FormUiDisplayCol": () => (/* binding */ FormUiDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

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

/***/ 82680:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 44182:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/edit-modal/edit-modal.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6277:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n  <!-- <div class=\"col-sm-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 mb-2\">\r\n\r\n        <div class=\"card card-custom\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-title\">\r\n              <h3 class=\"card-label left-border-image\">Policy List</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form class=\"form\" (ngSubmit)=\"submit()\">\r\n              <div class=\"form-group\">\r\n                <label>Group Name</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"form.name\" name=\"name\" placeholder=\"\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button class=\"btn btn-primary\">Save</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div> -->\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n          <h3 class=\"card-label left-border-image\">Page Groups List</h3>\r\n        </div>\r\n        <div class=\"card-toolbar\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"edit(-1)\">\r\n            <span class=\"flaticon2-plus\"></span>\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"createOrEdit()\">Create New Quotation</button> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body customer-card-body\">\r\n        <app-material-table-view [data]=\"forms\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\r\n          (emitter)=\"actionBtn($event)\">\r\n        </app-material-table-view>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 42222:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/edit-modal/edit-modal.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      {{id ? \"Edit\" : \"Create\"}} Group Name\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <!-- <form class=\"form\">  -->\r\n    <div class=\"form-group\">\r\n      <label>Group Name</label>\r\n      <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"\" />\r\n    </div>\r\n    <!-- </form> -->\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <!-- <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"deleteEditModal()\">Delete</button> -->\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">{{\"FORM.btn_cancel\" | translate }}</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\" [disabled]=\"!name\">{{\"FORM.btn_save\" | translate }}</button>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_dashboard_module_ts.js.map