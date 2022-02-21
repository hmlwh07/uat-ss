"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fna-list_fna-list_modules_ts"],{

/***/ 45420:
/*!******************************************************!*\
  !*** ./src/app/pages/fna-list/fna-list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FnaListComponent": () => (/* binding */ FnaListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fna_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fna-list.component.html */ 91017);
/* harmony import */ var _fna_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fna-list.component.scss */ 42929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth */ 67198);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _fna_detail_fna_manage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fna-detail/fna-manage.service */ 60865);
/* harmony import */ var _fna_list_manage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fna-list-manage.service */ 95849);
/* harmony import */ var _fna_type_fna_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fna-type/fna-type.component */ 26106);
/* harmony import */ var _fna_list_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fna.list.const */ 63871);












let FnaListComponent = class FnaListComponent {
    constructor(cdf, router, fnaService, fnaListService, authService, modalService) {
        this.cdf = cdf;
        this.router = router;
        this.fnaService = fnaService;
        this.fnaListService = fnaListService;
        this.authService = authService;
        this.modalService = modalService;
        this.ELEMENT_COL = _fna_list_const__WEBPACK_IMPORTED_MODULE_7__.FNAListCol;
        this.displayedColumns = _fna_list_const__WEBPACK_IMPORTED_MODULE_7__.FNAListDisplayCol;
        this.fnaList = [];
        this.user = {};
        this.isActive = false;
    }
    ngOnInit() {
        this.user = this.authService.currentUserValue;
        this.getAllFNA();
    }
    actionBtn(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.fnaService.fnaUpdateProducts = [];
            if (event.cmd == 'edit') {
                this.indexObj = event.data;
                this.createOrEdit('edit', event.data.id);
            }
            else {
                this.indexObj = null;
                yield this.delete(event.data.id);
            }
        });
    }
    displayFNAType() {
        const modalRef = this.modalService.open(_fna_type_fna_type_component__WEBPACK_IMPORTED_MODULE_6__.FnaTypeComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.type = 'modal';
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.fnaType == "BRAM") {
                    this.router.navigate(["/fna/fna-bram"], { queryParams: { passValue: JSON.stringify({ res }) } });
                }
                if (res.fnaType == "LPP") {
                    this.router.navigate(["/fna/fna-detail"], { queryParams: { passValue: JSON.stringify(res) } });
                }
            }
        });
    }
    createOrEdit(data, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let passValue;
            if (this.indexObj) {
                passValue = {
                    conductedBy: this.indexObj.conductedBy,
                    createdAt: this.indexObj.createdAt,
                    createdBy: this.indexObj.createdBy,
                    customerId: this.indexObj.customerId,
                    updatedAt: this.indexObj.updatedAt,
                    fnaId: id,
                    type: 'type',
                    pageStatus: data
                };
            }
            if (this.indexObj.fnaType == "BRAM") {
                this.router.navigate(["/fna/fna-bram"], { queryParams: { passValue: JSON.stringify(passValue) } });
            }
            else {
                this.router.navigate(["/fna/fna-detail"], { queryParams: { passValue: JSON.stringify(passValue) } });
            }
        });
    }
    getAllFNA() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fnaListService.findAll().toPromise().then((res) => {
                this.fnaList = [];
                if (res) {
                    this.fnaList = res;
                    for (var i = 0; i < this.fnaList.length; i++) {
                        this.fnaList[i].createdAt = this.convertDateFormatMMDDYYY(this.fnaList[i].createdAt);
                        this.fnaList[i].conductedBy = this.user.username;
                    }
                    this.cdf.detectChanges();
                    this.matTable.reChangeData();
                }
            });
        });
    }
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fnaListService.delete(id).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.fnaList = this.fnaList.filter(data => data.id !== id);
                this.cdf.detectChanges();
                this.matTable.reChangeData();
            }));
        });
    }
    convertDateFormatMMDDYYY(date) {
        var today = new Date(date);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }
    convertDateFormatDDMMYYY(date) {
        var today = new Date(date);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
    }
    toggle() {
        this.isActive = !this.isActive;
    }
};
FnaListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _fna_detail_fna_manage_service__WEBPACK_IMPORTED_MODULE_4__.FANService },
    { type: _fna_list_manage_service__WEBPACK_IMPORTED_MODULE_5__.FANListService },
    { type: src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal }
];
FnaListComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableViewComponent,] }]
};
FnaListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-fna-list',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fna_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fna_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FnaListComponent);



/***/ }),

/***/ 31932:
/*!****************************************************!*\
  !*** ./src/app/pages/fna-list/fna-list.modules.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FnaListModule": () => (/* binding */ FnaListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _fna_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fna-list.component */ 45420);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth */ 67198);









let FnaListModule = class FnaListModule {
};
FnaListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_fna_list_component__WEBPACK_IMPORTED_MODULE_2__.FnaListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _fna_list_component__WEBPACK_IMPORTED_MODULE_2__.FnaListComponent,
                },
            ]),
        ],
        providers: [src_app_modules_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService]
    })
], FnaListModule);



/***/ }),

/***/ 63871:
/*!**************************************************!*\
  !*** ./src/app/pages/fna-list/fna.list.const.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FNAListCol": () => (/* binding */ FNAListCol),
/* harmony export */   "FNAListDisplayCol": () => (/* binding */ FNAListDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const FNAListCol = [
    {
        title: "Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "createdAt",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "FNA Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "fnaType",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Conducted By",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "conductedBy",
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true,
            delete: true
        }
        // amtFormat?: boolean,
        // isTitle?: boolean
        // isDate?: boolen
    },
];
const FNAListDisplayCol = [
    "createdAt",
    "fnaType",
    "conductedBy",
    "actions",
];


/***/ }),

/***/ 91017:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-list/fna-list.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\">FNA List</h3>\n                </div>\n                <div class=\"card-toolbar\" style=\"position: relative;\">\n                    <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"displayFNAType()\">\n                        <span class=\"flaticon2-plus\"></span>\n                    </button>\n                    <!-- <div class=\"popover\" [class.active]=\"isActive\">\n                        <div (click)=\"displayFNA('LPP')\"><label>Create LPP</label></div>\n                        <div (click)=\"displayFNA('BRAM')\"><label>Create BRAM</label></div>\n                    </div> -->\n                </div>\n                <!-- (click)=\"createOrEdit('')\" -->\n            </div>\n            <div class=\"card-body customer-card-body\">\n                <app-material-table-view [data]=\"fnaList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n                    (emitter)=\"actionBtn($event)\">\n                </app-material-table-view>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 42929:
/*!********************************************************!*\
  !*** ./src/app/pages/fna-list/fna-list.component.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".popover {\n  background-color: #fff;\n  pointer-events: none;\n  opacity: 0;\n  position: absolute;\n  transition: all 500ms ease 0s;\n  margin: 55px 0 0 -40px;\n  width: 100px;\n  border-radius: 0;\n  padding: 6px;\n}\n.popover div {\n  line-height: 24px;\n  cursor: pointer;\n}\n.popover div label {\n  cursor: pointer;\n}\n.active {\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZuYS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFFQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFHQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6ImZuYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlIDBzO1xuICAgIG1hcmdpbjogNTVweCAwIDAgLTQwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogNnB4OyAgIFxuICAgIGRpdntcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGFiZWx7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fna-list_fna-list_modules_ts.js.map