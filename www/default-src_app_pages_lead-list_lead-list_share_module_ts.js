"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_lead-list_lead-list_share_module_ts"],{

/***/ 39310:
/*!********************************************************!*\
  !*** ./src/app/pages/lead-list/lead-list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadListComponent": () => (/* binding */ LeadListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lead_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lead-list.component.html?ngResource */ 50528);
/* harmony import */ var _lead_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lead-list.component.scss?ngResource */ 59101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _lead_list_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead-list.const */ 14165);
/* harmony import */ var _lead_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lead-list.service */ 55849);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/master-data/master-data.service */ 27670);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products/services/products-data.service */ 78680);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer-list/customer-list.component */ 17585);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var src_app_modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/languages/languages.service */ 96115);
/* harmony import */ var _share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../share-components/common-list/common-list.component */ 99140);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _lead_new_lead_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lead-new/lead-new.component */ 63117);























let LeadListComponent = class LeadListComponent {
    constructor(router, cdf, LeadListService, masterDataService, productService, modalService, translate, alertService) {
        this.router = router;
        this.cdf = cdf;
        this.LeadListService = LeadListService;
        this.masterDataService = masterDataService;
        this.productService = productService;
        this.modalService = modalService;
        this.translate = translate;
        this.alertService = alertService;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_lead_list_const__WEBPACK_IMPORTED_MODULE_3__.LeadCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_lead_list_const__WEBPACK_IMPORTED_MODULE_3__.LeadDisplayCol));
        this.LeadList = [];
        this.isTableView = true;
        this.selectedUser = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.isPopup = false;
        this.show = false;
        this.statusOption = [];
        this.sourceOption = [];
        this.productOption = [];
        this.DEFAULT_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.apiUrl}/attachment-downloader/`;
        this.loadForm();
    }
    ngOnInit() {
        this.show = true;
    }
    ngAfterViewInit() {
        this.getMaster();
        this.getList();
    }
    getMaster() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([
            this.getStatus(),
            this.getSource(),
            this.getProduct(),
        ]).toPromise().then((res) => {
            if (res) {
                this.statusOption = res[0];
                this.sourceOption = res[1];
                this.productOption = res[2];
                this.cdf.detectChanges();
            }
        });
    }
    loadForm() {
        this.LeadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
            campaignName: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            existingCustomerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            existingCustomerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({ value: null, disabled: true }),
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            leadId: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            expiredStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            expiredEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            sourceCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            statusCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
        });
    }
    navigateToDetail(data, id, secondaryId) {
        this.router.navigate(["/lead/lead-detail"], {
            queryParams: {
                pageStatus: data,
                pageId: id,
                pageSecondaryId: secondaryId,
                leadId: id,
            },
            // skipLocationChange: true, replaceUrl: true
        });
    }
    navigateToNew() {
        this.router.navigate(["/lead/lead-new"]);
    }
    getStatus() {
        return this.masterDataService
            .getDataByType("LEAD_STATUS").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
        }));
        // this.masterDataService
        //   .getDataByType("LEAD_STATUS")
        //   .toPromise()
        //   .then((res: any) => {
        //     console.log(res);
        //     if (res) {
        //       this.statusOption = res.map((x) => {
        //         return { code: x.codeId, value: x.codeName };
        //       });
        //       console.log(this.statusOption);
        //       this.cdf.detectChanges();
        //     }
        //   });
    }
    updateURL(event) {
        if (event) {
            event.target.src = "assets/icon/general_product.svg";
        }
    }
    getSource() {
        return this.masterDataService
            .getDataByType("LEAD_SOURCE").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
        }));
        // this.masterDataService
        //   .getDataByType("LEAD_SOURCE")
        //   .toPromise()
        //   .then((res: any) => {
        //     console.log(res);
        //     if (res) {
        //       this.sourceOption = res.map((x) => {
        //         return { code: x.codeId, value: x.codeName };
        //       });
        //       console.log(this.sourceOption);
        //       this.cdf.detectChanges();
        //     }
        //   });
    }
    getProduct() {
        return this.productService.getAll('yes').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
        }));
        // this.productService
        //   .getAll()
        //   .toPromise()
        //   .then((res: any) => {
        //     console.log(res);
        //     if (res) {
        //       this.productOption = res.map((x) => {
        //         return { code: x.id, value: x.name };
        //       });
        //       console.log(this.productOption);
        //       this.cdf.detectChanges();
        //     }
        //   });
    }
    getList() {
        this.LeadListService.getLeadList(this.LeadForm.getRawValue())
            .toPromise()
            .then((res) => {
            if (res) {
                // console.log("RES", res)
                this.LeadList = res;
                this.cdf.detectChanges();
                this.commonList.detchChange();
                // this.matTable.reChangeData();
            }
        });
    }
    getFormatOpt(res) {
        return res.map(x => {
            return { 'code': x.codeId || x.id, 'value': (x.codeName || x.codeValue) || x.name };
        });
    }
    get selected() {
        let user;
        if (this.matTable) {
            user = this.matTable.selection.selected[0];
        }
        return user ? user : { id: 0 };
    }
    rowSelected(event) {
        this.selectedUser.emit(event);
    }
    cancel() {
        this.LeadForm.reset();
        this.getList();
    }
    actionBtn(event) {
        if (event.cmd == "edit") {
            this.navigateToDetail("edit", event.data.leadId, event.data.individualId);
        }
        if (event.cmd == "view") {
            this.navigateToDetail("view", event.data.leadId, event.data.individualId);
        }
    }
    onActionEdit() {
    }
    clearDate(key) {
        this.LeadForm.controls[key].setValue(null);
        if (key == 'existingCustomerName') {
            this.LeadForm.controls[key].setValue(null);
            this.LeadForm.controls['existingCustomerId'].setValue(null);
        }
    }
    viewExistingCustomer() {
        let modalRef;
        modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__.CustomerListComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.isPopup = true;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == "save") {
                    let customer = res.data;
                    // console.log('onDidDismiss =====> ', customer);
                    this.LeadForm.controls.existingCustomerId.setValue(customer.customerId);
                    this.LeadForm.controls.existingCustomerName.setValue(customer.name);
                }
            }
        });
    }
    addData() {
        console.log("addData");
        const modalRef = this.modalService.open(_lead_new_lead_new_component__WEBPACK_IMPORTED_MODULE_13__.LeadNewComponent, { size: 'lg', backdrop: false });
        modalRef.componentInstance.isModal = true;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.cmd == 'save') {
                    this.saveData(res.data);
                }
            }
        });
    }
    saveData(event) {
        let postData = event;
        // this.LeadListService.save(postData).toPromise().then((res: any) => {
        //   if (res) {
        //     this.getList()
        //     this.alertService.activate('This record was created', 'Success Message');
        //   }
        // })
    }
    //for view
    isControlValid(controlName) {
        const control = this.LeadForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.LeadForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.LeadForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.LeadForm.controls[controlName];
        return control.dirty || control.touched;
    }
    reponseFromListing(event) {
        console.log('event', event);
    }
};
LeadListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: _lead_list_service__WEBPACK_IMPORTED_MODULE_4__.LeadListService },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_5__.MasterDataService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModal },
    { type: src_app_modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_10__.LanguagesService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_12__.AlertService }
];
LeadListComponent.propDecorators = {
    commonList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_share_components_common_list_common_list_component__WEBPACK_IMPORTED_MODULE_11__.CommonList2Component,] }],
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }],
    selectedUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Output }],
    isPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }]
};
LeadListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: "app-lead-list",
        template: _lead_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_7__.MY_FORMATS },
        ],
        styles: [_lead_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeadListComponent);



/***/ }),

/***/ 14165:
/*!****************************************************!*\
  !*** ./src/app/pages/lead-list/lead-list.const.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadCol": () => (/* binding */ LeadCol),
/* harmony export */   "LeadDisplayCol": () => (/* binding */ LeadDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const LeadCol = [
    {
        title: "Lead ID",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "leadId"
    },
    {
        title: "Lead Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "contactName"
    },
    {
        title: "Product",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "productName"
    },
    {
        title: "Existing Customer",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "existingCustomerName"
    },
    {
        title: "Source",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "sourceValue"
    },
    {
        title: "Open Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "openedDate",
        isFromatDate: true
    },
    {
        title: "Campaign Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "campaignName",
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "statusCode",
        isLeadStatus: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true,
        }
    },
];
const LeadDisplayCol = [
    "leadId",
    "contactName",
    "productName",
    "existingCustomerName",
    "sourceValue",
    "openedDate",
    "campaignName",
    "statusCode",
    "actions",
];


/***/ }),

/***/ 55849:
/*!******************************************************!*\
  !*** ./src/app/pages/lead-list/lead-list.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadListService": () => (/* binding */ LeadListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);





const API_LEAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/lead`;
let LeadListService = class LeadListService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getLeadList(search = {}) {
        let url = API_LEAD_URL + "?";
        if (search.campaignName) {
            url = url + "campaignName=" + search.campaignName + "&";
        }
        if (search.existingCustomerId) {
            url = url + "existingCustomerId=" + search.existingCustomerId + "&";
        }
        if (search.leadId) {
            url = url + "leadId=" + search.leadId + "&";
        }
        if (search.contactName) {
            url = url + "contactName=" + search.contactName + "&";
        }
        if (search.startDate) {
            url = url + "startDate=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.startDate).format("YYYY-MM-DD") + "&";
        }
        if (search.endDate) {
            url = url + "endDate=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.endDate).format("YYYY-MM-DD") + "&";
        }
        if (search.expiredStart) {
            url = url + "expiredStart=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.expiredStart).format("YYYY-MM-DD") + "&";
        }
        if (search.expiredEnd) {
            url = url + "expiredEnd=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.expiredEnd).format("YYYY-MM-DD") + "&";
        }
        if (search.productId) {
            url = url + "productId=" + search.productId + "&";
        }
        if (search.sourceCode) {
            url = url + "sourceCode=" + search.sourceCode + "&";
        }
        if (search.statusCode) {
            url = url + "statusCode=" + search.statusCode + "&";
        }
        // console.log(url);
        return this.httpClient.get(url);
    }
};
LeadListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
LeadListService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LeadListService);



/***/ }),

/***/ 48416:
/*!***********************************************************!*\
  !*** ./src/app/pages/lead-list/lead-list.share.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadListShareModule": () => (/* binding */ LeadListShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _lead_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lead-list.component */ 39310);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _static_pages_static_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-pages/static-pages.module */ 83992);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-list/customer-list.share.module */ 36277);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);
/* harmony import */ var _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share-components/share-component.module */ 94142);
















let LeadListShareModule = class LeadListShareModule {
};
LeadListShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_lead_list_component__WEBPACK_IMPORTED_MODULE_2__.LeadListComponent],
        exports: [_lead_list_component__WEBPACK_IMPORTED_MODULE_2__.LeadListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_1__.CRUDTableModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModalModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_5__.LanguageModule,
            _static_pages_static_pages_module__WEBPACK_IMPORTED_MODULE_3__.StaticPagesModule,
            _share_components_share_component_module__WEBPACK_IMPORTED_MODULE_6__.ShareComponentModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
            _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_4__.CustomerListShareModule
        ]
    })
], LeadListShareModule);



/***/ }),

/***/ 63117:
/*!******************************************************!*\
  !*** ./src/app/pages/lead-new/lead-new.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadNewComponent": () => (/* binding */ LeadNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lead_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lead-new.component.html?ngResource */ 69415);
/* harmony import */ var _lead_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lead-new.component.scss?ngResource */ 33491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_core_menu_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/menu-data.service */ 17606);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/auth */ 90089);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/master-data/master-data.service */ 27670);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-list/customer-list.component */ 17585);
/* harmony import */ var _customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customer-list/customer-list.const */ 86270);
/* harmony import */ var _form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-component/nrc-popup/nrc-popup.page */ 42675);
/* harmony import */ var _lead_detail_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lead-detail/campaign-list/campaign-list.component */ 71865);
/* harmony import */ var _lead_detail_lead_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lead-detail/lead-detail.service */ 64190);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../products/services/products-data.service */ 78680);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 41018);




















let LeadNewComponent = class LeadNewComponent {
    constructor(modal, location, masterDataService, LeadDetailService, cdf, modalService, router, alertService, productService, authService, ngZone) {
        this.modal = modal;
        this.location = location;
        this.masterDataService = masterDataService;
        this.LeadDetailService = LeadDetailService;
        this.cdf = cdf;
        this.modalService = modalService;
        this.router = router;
        this.alertService = alertService;
        this.productService = productService;
        this.authService = authService;
        this.ngZone = ngZone;
        this.isPopup = false;
        this.disabled = true;
        this.product = [];
        this.channelOption = [];
        this.typeOption = [];
        this.stateOption = [];
        this.statusOption = [];
        this.distinctOption = [];
        this.townshipOption = [];
        this.assignToOption = [];
        this.productOption = [];
        this.productOption2 = [];
        this.campaignNameOption = [];
        this.companyOption = [];
        this.sourceOption = [];
        this.existingOption = [];
        this.martialOption = [];
        this.occupationOption = [];
        this.isExisting = false;
        this.isProspectCustomer = false;
        this.isAddProspect = false;
        this.statusCode = 0;
        this.maritalOption = [
            // SINGLE, MARRIED, WIDOWER, DIVORCED
            {
                code: "SINGLE",
                value: "Single"
            },
            {
                code: "MARRIED",
                value: "Married"
            },
            {
                code: "WIDOWER",
                value: "Widower"
            },
            {
                code: "DIVORCED",
                value: "Divorced"
            },
        ];
        this.identityTypeOption = _customer_list_customer_list_const__WEBPACK_IMPORTED_MODULE_7__.IdentityType;
        this.reason = "";
        this.status = "";
        this.config = {
            type: "user",
            name: "identityNumber"
        };
        this.sourceScore = 0;
        this.qualityScore = 0;
        this.score = 0;
        this.isValidWin = false;
        this.leadQuality = [];
        this.Quality = {
            "Q10": "campaignName",
            "Q06": "channelCode",
            "Q03": "phoneNo",
            "Q07": "typeCode",
            "Q04": "stateCode",
            "Q13": "districtCode",
            "Q05": "townshipCode",
            "Q08": "productId",
        };
        this.leadType = {
            "01": "GENERAL",
            "02": "LIFE"
        };
        this.user = new src_app_modules_auth__WEBPACK_IMPORTED_MODULE_3__.UserModel();
        this.leadAccess = src_app_core_menu_data_service__WEBPACK_IMPORTED_MODULE_2__.defaultAccessObj;
        this.activityAccess = src_app_core_menu_data_service__WEBPACK_IMPORTED_MODULE_2__.defaultAccessObj;
        this.policyAccess = src_app_core_menu_data_service__WEBPACK_IMPORTED_MODULE_2__.defaultAccessObj;
        this.quoAccess = src_app_core_menu_data_service__WEBPACK_IMPORTED_MODULE_2__.defaultAccessObj;
        this.attachAccess = src_app_core_menu_data_service__WEBPACK_IMPORTED_MODULE_2__.defaultAccessObj;
        this.fnaAccess = src_app_core_menu_data_service__WEBPACK_IMPORTED_MODULE_2__.defaultAccessObj;
    }
    ngOnInit() {
        this.loadForm();
    }
    ngAfterViewInit() {
        this.user = this.authService.currentUserValue;
        this.getMaster();
        this.getProduct();
        this.leadForm.controls.openedDate.setValue(new Date());
        this.leadForm.controls.statusCode.setValue("02");
        this.leadForm.controls.assignTo.setValue(this.user.username);
    }
    loadForm() {
        this.leadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
            leadId: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({ value: null, disabled: true }),
            phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            openedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            companyCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            PCsms: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            PCemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            PCphone: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            activationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            channelCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            occupationCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            closedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({ value: null, disabled: true }),
            typeCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            stateCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            expirationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            statusCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            districtCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            validityPeriod: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({ value: null, disabled: true }),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            townshipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            assignTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({ value: null, disabled: true }),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            campaignName: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            identityType: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            sourceCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            campaignNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            identityNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            existingCustomerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({ value: null, disabled: true }),
            existingCustomerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            referralCustomerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            referralCustomerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            estimatedMonthlyIncome: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            facebookAcc: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            financialPlan: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            noOfChildren: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            existingInsuranceCoverage: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            existingInsurancePlan: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({ value: null, disabled: true }),
            assets: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            prospectCustomer: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({ value: null, disabled: true }),
            prospectCustomerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            lostReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
        });
    }
    getMaster() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)([
            this.getChannel(),
            this.getType(),
            this.getOccupation(),
            this.getStatus(),
            this.getState(),
            this.getSource(),
            this.getCompany(),
        ]).toPromise().then((res) => {
            if (res) {
                this.channelOption = res[0];
                this.typeOption = res[1];
                this.occupationOption = res[2];
                this.statusOption = res[3];
                this.stateOption = res[4];
                this.sourceOption = res[5];
                this.companyOption = res[6];
                this.cdf.detectChanges();
            }
        });
    }
    onChangeState() {
        this.distinctOption = [];
        this.townshipOption = [];
        this.leadForm.controls["districtCode"].setValue("");
        this.leadForm.controls["townshipCode"].setValue("");
        this.getDistrict(this.leadForm.controls["stateCode"].value);
        this.cdf.detectChanges();
    }
    onChangeDistrict() {
        this.leadForm.controls["townshipCode"].setValue("");
        if (this.leadForm.controls["stateCode"].value == "") {
            this.townshipOption = [];
        }
        else {
            this.getTownship(this.leadForm.controls["districtCode"].value);
        }
        this.cdf.detectChanges();
    }
    ngOnDestroy() {
        this.score = 0;
        this.sourceScore = 0;
    }
    getCompany() {
        return this.masterDataService.getDataByType("COMPANY_TYPE")
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
        }));
    }
    getState() {
        return this.masterDataService
            .getDataByType("PT_STATE", true).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
        }));
    }
    getChannel() {
        return this.masterDataService
            .getDataByType("LEAD_DISTRIBUTION_CHANNEL").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
        }));
    }
    getType() {
        return this.masterDataService
            .getDataByType("LEAD_TYPE").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
        }));
    }
    getStatus() {
        return this.masterDataService
            .getDataByType("LEAD_STATUS").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
        }));
    }
    getSource() {
        return this.masterDataService
            .getDataByType("LEAD_SOURCE").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
        }));
    }
    getOccupation() {
        return this.masterDataService
            .getDataByType("OCCUPATION").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(x => this.getFormatOpt(x)), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(e => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
        }));
    }
    getProduct() {
        this.productService.getAll('all').toPromise()
            .then((res) => {
            if (res) {
                this.product = res;
                this.productOption = res.map((x) => {
                    return {
                        code: x.id,
                        value: x.name,
                        type: x.type
                    };
                });
                this.cdf.detectChanges();
                this.getProductOption();
            }
        });
    }
    getLeadQuality() {
        let channel = this.leadForm.getRawValue().channelCode;
        if (channel) {
            this.LeadDetailService.getLeadQuality(channel).toPromise()
                .then((res) => {
                if (res) {
                    this.leadQuality = res;
                    this.calculateLeadQuality();
                    this.getValidityPeriod();
                }
            });
        }
    }
    clearLeadQuality() {
        this.leadQuality = [];
        this.leadForm.controls.score.setValue(0);
    }
    getDistrict(parentId) {
        this.masterDataService
            .getAddressDataByType("PT_DISTRICT", parentId).toPromise()
            .then((res) => {
            if (res) {
                this.distinctOption = res.map((x) => {
                    return { code: x.codeId, value: x.codeValue };
                });
                this.cdf.detectChanges();
            }
        });
    }
    getTownship(parentId) {
        if (parentId) {
            this.masterDataService
                .getAddressDataByType("PT_TOWNSHIP", parentId).toPromise()
                .then((res) => {
                if (res) {
                    this.townshipOption = res.map((x) => {
                        return { code: x.codeId, value: x.codeValue };
                    });
                    this.cdf.detectChanges();
                }
            });
        }
    }
    getValidityPeriod() {
        let source = this.leadForm.getRawValue().sourceCode;
        let product = this.leadForm.getRawValue().productId;
        if (source && product) {
            this.LeadDetailService.getValidityPeriod(source, product).toPromise()
                .then((res) => {
                if (res.period != null) {
                    this.leadForm.controls.validityPeriod.setValue(res.period);
                }
                else {
                    this.leadForm.controls.validityPeriod.setValue(0);
                }
            });
        }
    }
    actActionBtn(event) {
        if (event.cmd == 'edit') {
            this.router.navigate(["/activity/activity-management-detail"], { queryParams: { pageStatus: 'edit', pageId: event.data.activityNo } });
        }
    }
    calculateScore(code, data) {
        if (code) {
            let sourceCode;
            if (data) {
                sourceCode = data;
            }
            else {
                let source = this.sourceOption.find((p) => p.code == code);
                sourceCode = source.code ? source.code : null;
            }
            let channel = this.leadForm.getRawValue().channelCode;
            if (sourceCode && channel) {
                this.LeadDetailService.getLeadScore(sourceCode, channel).toPromise().then((res) => {
                    this.sourceScore = res;
                    this.calculateLeadQuality();
                    this.getValidityPeriod();
                });
            }
        }
    }
    clear(type) {
        if (type == 'source' || type == 'product') {
            this.leadForm.controls.validityPeriod.setValue(0);
        }
    }
    calculateLeadQuality(type) {
        this.score = 0;
        if (type == "typeCode") {
            this.getProductOption();
        }
        if (type == "product") {
            this.getValidityPeriod();
        }
        if (type == "state") {
            this.onChangeState();
        }
        if (type == "district") {
            this.onChangeDistrict();
        }
        this.leadQuality.forEach(element => {
            let ele = element.qualityValue.toLowerCase();
            if (ele == 'type' || ele == 'township' || ele == 'channel' || ele == 'district' || ele == 'state') {
                element.qualityValue = ele + "Code";
            }
            else if (ele == 'product') {
                element.qualityValue = ele + "Id";
            }
            else if (ele == 'phone no.') {
                element.qualityValue = 'phoneNo';
            }
            else if (ele == 'campaign name') {
                element.qualityValue = 'campaignName';
            }
            else {
                element.qualityValue = element.qualityValue;
            }
            let value = this.leadForm.getRawValue()[this.Quality[element.qualityCode]];
            this.score += value ? element.score : 0;
        });
        if (this.sourceScore != 0) {
            this.score += this.sourceScore;
        }
        this.leadForm.controls.score.setValue(this.score);
    }
    updateLeadStatus(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            if (status == "save") {
                this.createLead();
            }
            else {
                this.ngZone.run(() => {
                    this.location.back();
                });
            }
        });
    }
    viewCampaignList() {
        let modalRef;
        modalRef = this.modalService.open(_lead_detail_campaign_list_campaign_list_component__WEBPACK_IMPORTED_MODULE_9__.CampaignListComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.isPopup = true;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == "save") {
                    let campaign = res.data;
                    this.leadForm.controls.campaignName.setValue(campaign.cpmName);
                    this.leadForm.controls.campaignNo.setValue(campaign.cpmNumber);
                    this.calculateLeadQuality();
                }
            }
        });
    }
    checkExisting(type) {
        if (this.leadForm.controls.phoneNo.value == null
            && this.leadForm.controls.email.value == null
            && this.leadForm.controls.identityType.value == null) {
            this.alertService.activate('Did not find any existing customer profile related to Identity type, email and phone number.', 'No found existing customer profile');
            return true;
        }
        let postData = {
            phoneNo: this.leadForm.controls.phoneNo.value ? this.leadForm.controls.phoneNo.value : "",
            email: this.leadForm.controls.email.value ? this.leadForm.controls.email.value : "",
            identityType: this.leadForm.controls.identityType.value ? this.leadForm.controls.identityType.value : "",
            identityNumber: this.leadForm.controls.identityNumber.value ? this.leadForm.controls.identityNumber.value : "",
        };
        if (type == "customer") {
            this.LeadDetailService.checkExistingCustomer(postData).toPromise().then((res) => {
                if (res.customerId) {
                    let fullName = (res.firstName ? res.firstName : "") + " " + (res.middleName ? res.middleName : "") + " " + (res.lastName ? res.lastName : "");
                    this.leadForm.controls.existingCustomerName.setValue(fullName);
                    this.leadForm.controls.existingCustomerId.setValue(res.customerId);
                }
                else {
                    this.alertService.activate(res.title, "Warning Message");
                }
            });
        }
        else {
            this.LeadDetailService.checkExistingProspect(postData).toPromise().then((res) => {
                if (res.customerId) {
                    this.leadForm.controls.prospectCustomer.setValue(res.firstName + " " + res.middleName + " " + res.lastName);
                    this.leadForm.controls.prospectCustomerId.setValue(res.customerId);
                }
                else {
                    this.alertService.activate(res.title, "Warning Message");
                }
            });
        }
    }
    viewExisting(type) {
        if (type == 'referral') {
            let modalRef;
            modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__.CustomerListComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.isPopup = true;
            modalRef.componentInstance.party = true;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == "save") {
                        let customer = res.data;
                        if (type == "referral") {
                            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                            this.leadForm.controls.referralCustomerName.setValue(name);
                            this.leadForm.controls.referralCustomerId.setValue(customer.customerId);
                        }
                    }
                }
            });
        }
        else if (!this.isExisting && !this.isAddProspect) {
            let modalRef;
            modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__.CustomerListComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.isPopup = true;
            modalRef.componentInstance.party = type == "prospect" ? false : true;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == "save") {
                        let customer = res.data;
                        if (type == "referral") {
                            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                            this.leadForm.controls.referralCustomerName.setValue(name);
                            this.leadForm.controls.referralCustomerId.setValue(customer.customerId);
                        }
                        else if (type == "prospect") {
                            this.leadForm.controls.existingCustomerName.setValue("");
                            this.leadForm.controls.existingCustomerId.setValue("");
                            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                            this.leadForm.controls.prospectCustomer.setValue(name);
                            this.leadForm.controls.prospectCustomerId.setValue(customer.customerId);
                            this.prospCustomer = {
                                customerId: customer.customerId,
                                customerName: customer.firstName + ' ' + customer.middleName + ' ' + customer.lastName,
                                customerDob: customer.dateOfBirth
                            };
                        }
                        else {
                            this.existingCustomer = {
                                customerId: customer.customerId,
                                customerName: customer.firstName + ' ' + customer.middleName + ' ' + customer.lastName,
                                customerDob: customer.dateOfBirth
                            };
                            this.leadForm.controls.prospectCustomer.setValue("");
                            this.leadForm.controls.prospectCustomerId.setValue("");
                            let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                            this.leadForm.controls.existingCustomerName.setValue(name);
                            this.leadForm.controls.existingCustomerId.setValue(customer.customerId);
                        }
                    }
                }
            });
        }
    }
    openNRCModal() {
        let modalRef;
        modalRef = this.modalService.open(_form_component_nrc_popup_nrc_popup_page__WEBPACK_IMPORTED_MODULE_8__.NrcPopupPage, { size: 'xl', backdrop: false });
        modalRef.componentInstance.config = this.config;
        modalRef.componentInstance.group = this.leadForm;
    }
    backLocation() {
        this.loadForm();
    }
    clearDate(key) {
        if (!this.isExisting) {
            if (key == 'existingCustomerName') {
                this.leadForm.controls[key].setValue(null);
                this.leadForm.controls['existingCustomerId'].setValue(null);
            }
        }
        else {
            return false;
        }
        if (key == 'referralCustomerName') {
            this.leadForm.controls[key].setValue(null);
            this.leadForm.controls['referralCustomerId'].setValue(null);
        }
        if (key == 'campaignName' || key == 'campaignNo') {
            this.leadForm.controls['campaignName'].setValue(null);
            this.leadForm.controls['campaignNo'].setValue(null);
        }
        if (key == 'prospectCustomer') {
            this.leadForm.controls['prospectCustomer'].setValue(null);
            this.leadForm.controls['prospectCustomerId'].setValue(null);
            this.isAddProspect = false;
        }
    }
    createLead() {
        if (this.leadForm.invalid) {
            (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_12__.validateAllFields)(this.leadForm);
            return true;
        }
        if (this.leadForm.controls.existingCustomerId.value == null) {
            this.alertService.activate('Please check Existing Customer before you save.', 'Message');
            return true;
        }
        let postData = this.leadForm.getRawValue();
        //contact
        postData.contact = [];
        if (postData.PCsms) {
            postData.contact.push("sms");
        }
        if (postData.PCemail) {
            postData.contact.push("email");
        }
        if (postData.PCphone) {
            postData.contact.push("phone");
        }
        postData.contact = postData.contact.join(",");
        //product code
        let productCode = "";
        if (this.leadForm.controls.productId.value) {
            let product = this.product.find(p => p.id == this.leadForm.controls.productId.value);
            productCode = product.code;
        }
        let data = {
            "activationDate": this.leadForm.controls.activationDate.value ? this.convertDateFormatDDMMYYY(this.leadForm.controls.activationDate.value) : "",
            "activationDateStr": this.leadForm.controls.activationDate.value ? this.convertDateFormatDDMMYYY(this.leadForm.controls.activationDate.value) : "",
            "assets": this.leadForm.controls.assets.value ? this.leadForm.controls.assets.value : "",
            "assignTo": this.user.id,
            "campaignName": this.leadForm.controls.campaignName.value ? this.leadForm.controls.campaignName.value : "",
            "campaignNo": this.leadForm.controls.campaignNo.value ? this.leadForm.controls.campaignNo.value : "",
            "channelCode": this.leadForm.controls.channelCode.value ? this.leadForm.controls.channelCode.value : "",
            "closedDate": this.leadForm.controls.closedDate.value ? this.convertDateFormatDDMMYYY(this.leadForm.controls.closedDate.value) : "",
            "closedDateStr": this.leadForm.controls.closedDate.value ? this.convertDateFormatDDMMYYY(this.leadForm.controls.closedDate.value) : "",
            "companyCode": this.leadForm.controls.companyCode.value ? this.leadForm.controls.companyCode.value : "",
            "contact": postData.contact,
            "contactName": this.leadForm.controls.contactName.value ? this.leadForm.controls.contactName.value : "",
            "customerPlan": "",
            "description": "",
            "districtCode": this.leadForm.controls.districtCode.value ? this.leadForm.controls.districtCode.value : "",
            "dueDate": "",
            "dueDateStr": "",
            "email": this.leadForm.controls.email.value ? this.leadForm.controls.email.value : "",
            "existingInsuranceCoverage": this.leadForm.controls.existingInsuranceCoverage.value ? this.leadForm.controls.existingInsuranceCoverage.value : "",
            "existingInsurancePlan": this.leadForm.controls.existingInsurancePlan.value ? this.leadForm.controls.existingInsurancePlan.value : "",
            "expirationDate": this.leadForm.controls.expirationDate.value ? this.convertDateFormatDDMMYYY(this.leadForm.controls.expirationDate.value) : "",
            "expirationDateStr": this.leadForm.controls.expirationDate.value ? this.convertDateFormatDDMMYYY(this.leadForm.controls.expirationDate.value) : "",
            "facebookAcc": this.leadForm.controls.facebookAcc.value ? this.leadForm.controls.facebookAcc.value : "",
            "financialPlan": this.leadForm.controls.financialPlan.value ? this.leadForm.controls.financialPlan.value : "",
            "frc": "",
            "identityNumber": this.leadForm.controls.identityNumber.value ? this.leadForm.controls.identityNumber.value : "",
            "identityType": this.leadForm.controls.identityType.value ? this.leadForm.controls.identityType.value : "",
            "leadId": "",
            "lostReason": "",
            "maritalStatus": this.leadForm.controls.maritalStatus.value ? this.leadForm.controls.maritalStatus.value : "",
            "estimatedMonthlyIncome": this.leadForm.controls.estimatedMonthlyIncome.value ? this.leadForm.controls.estimatedMonthlyIncome.value : "",
            "name": "",
            "nrcRegionCode": "",
            "nrcTownshipCode": "",
            "nrcTypeCode": "",
            "noOfChildren": "" + (this.leadForm.controls.noOfChildren.value ? this.leadForm.controls.noOfChildren.value : "") + "",
            "occupationCode": this.leadForm.controls.occupationCode.value ? this.leadForm.controls.occupationCode.value : "",
            "openedDate": this.leadForm.controls.openedDate.value ? this.convertDateFormatDDMMYYY(this.leadForm.controls.openedDate.value) : "",
            "openedDateStr": this.leadForm.controls.openedDate.value ? this.convertDateFormatDDMMYYY(this.leadForm.controls.openedDate.value) : "",
            "operationDate": "",
            "operationDateStr": "",
            "others": "",
            "ownerId": 0,
            "passport": "",
            "phoneNo": this.leadForm.controls.phoneNo.value ? this.leadForm.controls.phoneNo.value : "",
            "productCode": productCode,
            "productId": this.leadForm.controls.productId.value ? this.leadForm.controls.productId.value : "",
            "productName": "",
            "reason": "",
            "referralCustomerId": this.leadForm.controls.referralCustomerId.value ? this.leadForm.controls.referralCustomerId.value : 0,
            "remark": "",
            "score": this.leadForm.controls.score.value ? this.leadForm.controls.score.value : "",
            "sourceCode": this.leadForm.controls.sourceCode.value ? this.leadForm.controls.sourceCode.value : "",
            "startDate": "",
            "startDateStr": "",
            "stateCode": this.leadForm.controls.stateCode.value ? this.leadForm.controls.stateCode.value : "",
            "statusCode": "02",
            "subTypeCode": "",
            "subject": this.leadForm.controls.subject.value ? this.leadForm.controls.subject.value : "",
            "townshipCode": this.leadForm.controls.townshipCode.value ? this.leadForm.controls.townshipCode.value : "",
            "typeCode": this.leadForm.controls.typeCode.value ? this.leadForm.controls.typeCode.value : "",
            "validityPeriod": this.leadForm.controls.validityPeriod.value ? this.leadForm.controls.validityPeriod.value : 0,
        };
        if (this.leadForm.controls.existingCustomerId.value) {
            data["existingCustomerId"] = this.leadForm.controls.existingCustomerId.value;
        }
        if (this.leadForm.controls.prospectCustomerId.value) {
            data["prospectCustomerId"] = this.leadForm.controls.prospectCustomerId.value;
        }
        // let data = {
        //   activationDateStr: postData.activationDate,
        //   companyCode: postData.companyCode,
        //   contactName: postData.contactName,
        //   phoneNo: postData.phoneNo,
        //   openedDateStr: postData.openedDate,
        //   sourceCode: postData.sourceCode,
        //   statusCode: postData.statusCode,
        //   channelCode: postData.channelCode
        // }
        // if (postData.existingCustomerId) {
        //   data["existingCustomerId"] = postData.existingCustomerId
        // }
        // if (postData.prospectCustomerId) {
        //   data["prospectCustomerId"] = postData.prospectCustomerId
        // }
        console.log("PostData: ", data);
        this.LeadDetailService.createLead(data).toPromise()
            .then((res) => {
            if (res) {
                this.alertService.activate('This record was created', 'Success Message');
                this.location.back();
            }
        });
    }
    getProductOption() {
        let array = this.productOption || [];
        let type = array.filter(x => x.type == this.leadType[this.leadForm.getRawValue().typeCode]);
        let index = type.findIndex(x => x.code == this.leadForm.controls["productId"].value);
        if (index < 0 && this.leadForm.controls["productId"].value && type.length > 0)
            this.leadForm.controls["productId"].setValue("");
        this.productOption2 = type || [];
    }
    getFormatOpt(res) {
        return res.map(x => {
            return {
                'code': x.codeId,
                'value': x.codeName || x.codeValue
            };
        });
    }
    getCampaignId() {
        let campaignName = this.leadForm.controls.campaignName.value;
        let campaignNumber;
        if (campaignName) {
            this.LeadDetailService.getCampaignIdByName(campaignName).toPromise().then((res) => {
                if (res.length > 0) {
                    campaignNumber = res[0].cpmNumber;
                }
                else {
                    campaignNumber = '';
                }
                this.leadForm.controls.campaignNo.setValue(campaignNumber);
            });
        }
    }
    //for View
    isControlValid(controlName) {
        const control = this.leadForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.leadForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.leadForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.leadForm.controls[controlName];
        return control.dirty || control.touched;
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
};
LeadNewComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbActiveModal },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__.Location },
    { type: src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_5__.MasterDataService },
    { type: _lead_detail_lead_detail_service__WEBPACK_IMPORTED_MODULE_10__.LeadDetailService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_11__.ProductDataService },
    { type: src_app_modules_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.NgZone }
];
LeadNewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-lead-new',
        template: _lead_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lead_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeadNewComponent);



/***/ }),

/***/ 59101:
/*!*********************************************************************!*\
  !*** ./src/app/pages/lead-list/lead-list.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e4e6ef;\n  padding: 0px 0.75rem;\n  width: 100%;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n  top: -2px;\n}\n.remove-p {\n  margin-bottom: 0px;\n}\n.col-form-label {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.form-group.row {\n  align-items: center;\n}\n.ng-clear-wrapper .ng-clear {\n  cursor: pointer;\n  position: absolute;\n  right: 2rem;\n  top: 0.3rem;\n  font-size: 1.2rem;\n  color: #999;\n}\n.ng-clear-wrapper .ng-clear:hover {\n  color: #D0021B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQVI7QUFJQTtFQUNJLGtCQUFBO0FBREo7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlBO0VBQ0ksbUJBQUE7QUFESjtBQUlBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtBQURKIiwiZmlsZSI6ImxlYWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XG4gICAgLmZvcm0tY29udHJvbC1zbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZWY7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgdG9wOiAtMnB4O1xuICAgIH1cbn1cblxuLnJlbW92ZS1wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jb2wtZm9ybS1sYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZm9ybS1ncm91cC5yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZy1jbGVhci13cmFwcGVyIC5uZy1jbGVhciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnJlbTtcbiAgICB0b3A6IDAuM3JlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuLm5nLWNsZWFyLXdyYXBwZXIgLm5nLWNsZWFyOmhvdmVyIHtcbiAgICBjb2xvcjogI0QwMDIxQjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 33491:
/*!*******************************************************************!*\
  !*** ./src/app/pages/lead-new/lead-new.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n  top: -2px;\n}\n.readonly {\n  background-color: #9c9999 !important;\n  color: #ffffff;\n}\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n}\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #ccc;\n}\n.icon {\n  position: relative;\n  border: none;\n  margin: 0;\n  font-size: 1.5rem;\n  background-color: transparent;\n}\n.add {\n  top: -11px;\n  position: relative;\n  border: none;\n  background: #f2f2f2;\n  margin: 0;\n}\n.add button {\n  position: absolute;\n  top: -52px;\n  right: 78px;\n  width: 110px;\n}\nh2 {\n  font-size: 13px;\n  color: #005ca2;\n  background: #F2F2F2;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  margin-top: 24px;\n  padding: 12px 24px 1px 24px;\n}\nh2 span {\n  position: absolute;\n  right: 14px;\n  top: 5px;\n}\nh2 img {\n  width: 6px;\n  height: 12px;\n  float: left;\n}\nh2 p {\n  font-size: 12px;\n  padding-left: 18px;\n}\n.btn-box {\n  text-align: end;\n}\n.btn-box input {\n  position: absolute;\n  width: 127%;\n  height: 100%;\n  opacity: 0;\n}\n.checkgroup,\n.check-input {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.ng-clear-wrapper .ng-clear {\n  cursor: pointer;\n  position: absolute;\n  right: 2rem;\n  top: 0.3rem;\n  font-size: 1.2rem;\n  color: #999;\n}\n.ng-clear-wrapper .ng-clear:hover {\n  color: #D0021B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQtbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFSO0FBSUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFLQSw0REFBQTtBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBT0EsZ0RBQUE7QUFFQTtFQUNJLHNCQUFBO0FBTEo7QUFTQSwyQ0FBQTtBQUVBO0VBQ0ksc0JBQUE7QUFQSjtBQVVBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFSSjtBQVdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVJKO0FBU0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBSO0FBV0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFSSjtBQVNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQVBSO0FBU0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFQUjtBQVNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBUFI7QUFXQTtFQUNJLGVBQUE7QUFSSjtBQVNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFQUjtBQXVCQTs7RUFFSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBcEJKO0FBdUJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFwQko7QUF1QkE7RUFDSSxjQUFBO0FBcEJKIiwiZmlsZSI6ImxlYWQtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwIHtcbiAgICAuZm9ybS1jb250cm9sLXNtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U0RTZFRjtcbiAgICAgICAgcGFkZGluZzogMHB4IDAuNzVyZW07XG4gICAgfVxuICAgIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHRvcDogLTJweDtcbiAgICB9XG59XG5cbi5yZWFkb25seSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljOTk5OSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGFiIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXG5cbi50YWIgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXG5cbi50YWIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG5cbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXG5cbi50YWIgYnV0dG9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmljb24ge1xuICAgIC8vIHRvcDogLTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmFkZCB7XG4gICAgdG9wOiAtMTFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNTJweDtcbiAgICAgICAgcmlnaHQ6IDc4cHg7XG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICB9XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMwMDVjYTI7XG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjRweCAxcHggMjRweDtcbiAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTRweDtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICB9XG59XG5cbi5idG4tYm94IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMjclO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4vLyAudGFiLWRpdiB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIC8vIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4vLyAgICAgYmFja2dyb3VuZDogI2QxZDdlMjtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbi8vICAgICAvLyBtYXJnaW46IC0xMHB4IDAgMCAwO1xuLy8gICAgIGJ1dHRvbiB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgYm90dG9tOiAyMHB4O1xuLy8gICAgICAgICByaWdodDogMjBweDtcbi8vICAgICB9XG4vLyB9XG4uY2hlY2tncm91cCxcbi5jaGVjay1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5nLWNsZWFyLXdyYXBwZXIgLm5nLWNsZWFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAycmVtO1xuICAgIHRvcDogMC4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjOTk5O1xufVxuXG4ubmctY2xlYXItd3JhcHBlciAubmctY2xlYXI6aG92ZXIge1xuICAgIGNvbG9yOiAjRDAwMjFCO1xufSJdfQ== */";

/***/ }),

/***/ 50528:
/*!*********************************************************************!*\
  !*** ./src/app/pages/lead-list/lead-list.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\" *ngIf=\"!isPopup\">\n                <div class=\"card-title\">\n                    <h3 class=\"card-label left-border-image\"> {{\"FORM.lead_list\" | translate}}</h3>\n                </div>\n                <div class=\"card-toolbar\">\n                    <button type=\"button\" class=\"btn btn-primary btn-circle\" style=\"margin-right: 1rem;\"\n                        (click)=\"navigateToDetail('create')\">\n                        <span class=\"flaticon2-plus\"></span>\n                    </button>\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getList()\">\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\n                    </button> -->\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n                        <span class=\"\">{{\"CARD.cancel\" | translate}}</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-10 py-3\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"LeadForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <app-start-end-date [isLead]=\"false\" [formInput]=\"LeadForm\" remove-host\n                            [colClass]=\"'col-xl-4 col-sm-6'\">\n                        </app-start-end-date>\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.lead_id\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"leadId\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('leadId')\"\n                                        [class.is-valid]=\"isControlValid('leadId')\" formControlName=\"leadId\" />\n                                </div>\n                            </div>\n                        </div>\n                        <app-start-end-date [isLead]=\"true\" [formInput]=\"LeadForm\" remove-host\n                            [colClass]=\"'col-xl-4 col-sm-6'\">\n                        </app-start-end-date>\n                        <!-- </div>\n                    <div class=\"row\"> -->\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.product\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <!-- <input type=\"text\" class=\"form-control form-control-sm \" name=\"productId\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('productId')\"\n                                        [class.is-valid]=\"isControlValid('productId')\" formControlName=\"productId\" /> -->\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('productId')\"\n                                        [class.is-valid]=\"isControlValid('productId')\" [items]=\"productOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"productId\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.source\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <!-- <input type=\"text\" class=\"form-control form-control-sm \" name=\"sourceCode\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('sourceCode')\"\n                                        [class.is-valid]=\"isControlValid('sourceCode')\" formControlName=\"sourceCode\" /> -->\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('sourceCode')\"\n                                        [class.is-valid]=\"isControlValid('sourceCode')\" [items]=\"sourceOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"sourceCode\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.lead_name\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"contactName\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('contactName')\"\n                                        [class.is-valid]=\"isControlValid('contactName')\"\n                                        formControlName=\"contactName\" />\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- </div>\n                    <div class=\"row\"> -->\n\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.existing_customer\" | translate}}</label>\n                                <div class=\"col-sm-8\" (click)=\"viewExistingCustomer()\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"existingCustomerName\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('existingCustomerName')\"\n                                        [class.is-valid]=\"isControlValid('existingCustomerName')\"\n                                        formControlName=\"existingCustomerName\" readonly />\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\n                                <div class=\"col-sm-8\">\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('statusCode')\"\n                                        [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"statusCode\">\n                                    </ng-select>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-xl-4 col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">{{\"FORM.campaign_name\" | translate}} </label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"campaignName\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('campaignName')\"\n                                        [class.is-valid]=\"isControlValid('campaignName')\"\n                                        formControlName=\"campaignName\" />\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b data\">\n            <div class=\"card-body customer-card-body\" *ngIf=\"show\">\n                <!-- <app-lead-data-list [leadList]=\"LeadList\"></app-lead-data-list> -->\n\n                <!-- <ng-container *ngIf=\"isTableView;else cardView\">\n                    <app-material-table-view [data]=\"LeadList\" [colum]=\"ELEMENT_COL\"\n                        [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\"\n                        (rowselect)=\"rowSelected($event)\" [selectable]=\"isPopup\">\n                    </app-material-table-view>\n                </ng-container> -->\n                <app-common-list-2 *ngIf=\"LeadList.length > 0\" class=\"data-list\" #commonList [data]=\"LeadList\"\n                    [type]=\"'lead'\" (btnEvent)=\"actionBtn($event)\"></app-common-list-2>\n\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 69415:
/*!*******************************************************************!*\
  !*** ./src/app/pages/lead-new/lead-new.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\" *ngIf=\"leadForm\">\n  <div class=\"col-12\">\n\n    <form action=\"#\" class=\"form\" [formGroup]=\"leadForm\" (ngSubmit)=\"createLead()\">\n\n      <div class=\"card card-custom gutter-b\">\n        <div class=\"card-header\" *ngIf=\"!isPopup\">\n          <div class=\"card-title\">\n            <h3 class=\"card-label left-border-image\">{{\"FORM.create_lead\" | translate}}</h3>\n          </div>\n        </div>\n\n        <div class=\"card-body px-10 py-3\">\n\n          <div>\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.lead_id\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"leadId\" autocomplete=\"off\"\n                      [class.is-invalid]=\"isControlInvalid('leadId')\" [class.is-valid]=\"isControlValid('leadId')\"\n                      formControlName=\"leadId\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.phone_number\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" (change)=\"calculateLeadQuality()\"\n                      name=\"phoneNo\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('phoneNo')\"\n                      [class.is-valid]=\"isControlValid('phoneNo')\" formControlName=\"phoneNo\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.subject\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"subject\" autocomplete=\"off\"\n                      [class.is-invalid]=\"isControlInvalid('subject')\" [class.is-valid]=\"isControlValid('subject')\"\n                      formControlName=\"subject\" />\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\"> {{\"FORM.open_date\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <div class=\"input-group \">\n                      <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                        formControlName=\"openedDate\" [matDatepicker]=\"openDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"openDate\"></mat-datepicker-toggle>\n                      <mat-datepicker #openDate></mat-datepicker>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.name\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"contactName\" autocomplete=\"off\"\n                      [class.is-invalid]=\"isControlInvalid('contactName')\"\n                      [class.is-valid]=\"isControlValid('contactName')\" formControlName=\"contactName\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.act_date\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <div class=\"input-group \">\n                      <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                        formControlName=\"activationDate\" [class.is-invalid]=\"isControlInvalid('activationDate')\"\n                        [class.is-valid]=\"isControlValid('activationDate')\" [matDatepicker]=\"activationDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"activationDate\">\n                      </mat-datepicker-toggle>\n                      <mat-datepicker #activationDate></mat-datepicker>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-2 col-form-label\">{{\"FORM.precontact\" | translate}}</label>\n                  <div class=\"col-sm-10 checkgroup\">\n                    <div class=\"check-input\">\n                      <label class=\"col-form-label\">SMS</label>\n                      <input type=\"checkbox\" formControlName=\"PCsms\">\n                    </div>\n                    <div class=\"check-input\">\n                      <label class=\"col-form-label\">Email</label>\n                      <input type=\"checkbox\" formControlName=\"PCemail\">\n                    </div>\n                    <div class=\"check-input\">\n                      <label class=\"col-form-label\">Phone</label>\n                      <input type=\"checkbox\" formControlName=\"PCphone\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.type\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality('typeCode')\"\n                      [class.is-invalid]=\"isControlInvalid('typeCode')\" [class.is-valid]=\"isControlValid('typeCode')\"\n                      [items]=\"typeOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"typeCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\"> {{\"FORM.close_date\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <div class=\"input-group \">\n                      <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                        formControlName=\"closedDate\" [matDatepicker]=\"closeDate\" readonly>\n                      <mat-datepicker-toggle matSuffix [for]=\"closeDate\"></mat-datepicker-toggle>\n                      <mat-datepicker #closeDate disabled=\"true\"></mat-datepicker>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.status\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" [readonly]=\"true\"\n                      [class.is-invalid]=\"isControlInvalid('statusCode')\"\n                      [class.is-valid]=\"isControlValid('statusCode')\" [items]=\"statusOption\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"statusCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.exp_date\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <div class=\"input-group \">\n                      <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                        formControlName=\"expirationDate\" [matDatepicker]=\"expDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"expDate\"></mat-datepicker-toggle>\n                      <mat-datepicker #expDate></mat-datepicker>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.occupation\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('occupationCode')\"\n                      [class.is-valid]=\"isControlValid('occupationCode')\" [items]=\"occupationOption\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"occupationCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.company\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('companyCode')\"\n                      [class.is-valid]=\"isControlValid('companyCode')\" [items]=\"companyOption\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"companyCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.state\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality('state')\"\n                      [class.is-invalid]=\"isControlInvalid('stateCode')\" [class.is-valid]=\"isControlValid('stateCode')\"\n                      [items]=\"stateOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"stateCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.district\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality('district')\"\n                      [class.is-invalid]=\"isControlInvalid('districtCode')\"\n                      [class.is-valid]=\"isControlValid('districtCode')\" [items]=\"distinctOption\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"districtCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.township\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality()\"\n                      [class.is-invalid]=\"isControlInvalid('townshipCode')\"\n                      [class.is-valid]=\"isControlValid('townshipCode')\" [items]=\"townshipOption\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"townshipCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.validity_period\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <div class=\"input-group \">\n                      <input type=\"text\" readonly class=\"form-control form-control-sm\" name=\"validityPeriod\"\n                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('validityPeriod')\"\n                        [class.is-valid]=\"isControlValid('validityPeriod')\" formControlName=\"validityPeriod\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.distribution_channel\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" (change)=\"getLeadQuality()\" (clear)=\"clearLeadQuality()\"\n                      [class.is-invalid]=\"isControlInvalid('channelCode')\"\n                      [class.is-valid]=\"isControlValid('channelCode')\" [items]=\"channelOption\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"channelCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.assign_to\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" readonly class=\"form-control form-control-sm\" name=\"assignTo\"\n                      autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('assignTo')\"\n                      [class.is-valid]=\"isControlValid('assignTo')\" formControlName=\"assignTo\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.product\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" (change)=\"calculateLeadQuality('product')\"\n                      (clear)=\"clear('product')\" [class.is-invalid]=\"isControlInvalid('productId')\"\n                      [class.is-valid]=\"isControlValid('productId')\" [items]=\"productOption2\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"productId\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.email\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"email\" autocomplete=\"off\"\n                      [class.is-invalid]=\"isControlInvalid('email')\" [class.is-valid]=\"isControlValid('email')\"\n                      formControlName=\"email\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.campaign_name\" | translate}}</label>\n                  <div class=\"col-sm-7\" >\n                    <!-- <div class=\"col-sm-8\" (click)=\"viewCampaignList()\"> -->\n                    <input type=\"text\" class=\"form-control form-control-sm \" (change)=\"calculateLeadQuality()\"\n                      name=\"campaignName\" autocomplete=\"off\" formControlName=\"campaignName\" />\n                    <span class=\"ng-clear-wrapper\" (click)=\"clearDate('campaignName');$event.stopPropagation()\"\n                      title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\n                  </div>\n                  <div class=\"col-sm-1\">\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getCampaignId()\"></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.identity_type\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('identityType')\"\n                      [class.is-valid]=\"isControlValid('identityType')\" [items]=\"identityTypeOption\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"identityType\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.campaign_id\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"campaignNo\" autocomplete=\"off\"\n                      [class.is-invalid]=\"isControlInvalid('campaignNo')\"\n                      [class.is-valid]=\"isControlValid('campaignNo')\" formControlName=\"campaignNo\" />\n                    <span class=\"ng-clear-wrapper\" (click)=\"clearDate('campaignNo');$event.stopPropagation()\"\n                      title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.nrc_frc_passport\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" *ngIf=\"leadForm.get('identityType').value == 'NRC'\"\n                      class=\"form-control form-control-sm \" name=\"identityNumber\" autocomplete=\"off\"\n                      [class.is-invalid]=\"isControlInvalid('identityNumber')\" (click)=\"openNRCModal()\"\n                      [class.is-valid]=\"isControlValid('identityNumber')\" formControlName=\"identityNumber\" readonly />\n                    <input type=\"text\" *ngIf=\"leadForm.get('identityType').value != 'NRC'\"\n                      class=\"form-control form-control-sm \" name=\"identityNumber\" autocomplete=\"off\"\n                      [class.is-invalid]=\"isControlInvalid('identityNumber')\"\n                      [class.is-valid]=\"isControlValid('identityNumber')\" formControlName=\"identityNumber\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.source\" | translate}}</label>\n                  <div class=\"col-sm-8\">\n                    <ng-select class=\"ng-custom-select\" (change)=\"calculateScore(leadForm.value.sourceCode,null)\"\n                      [class.is-invalid]=\"isControlInvalid('sourceCode')\" (clear)=\"clear('source')\"\n                      [class.is-valid]=\"isControlValid('sourceCode')\" [items]=\"sourceOption\" bindLabel=\"value\"\n                      bindValue=\"code\" formControlName=\"sourceCode\">\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.existing_customer\" | translate}}</label>\n                  <div class=\"col-sm-5\">\n                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"existingCustomerName\"\n                      autocomplete=\"off\" readonly formControlName=\"existingCustomerName\" />\n                    <span class=\"ng-clear-wrapper\" (click)=\"clearDate('existingCustomerName');$event.stopPropagation()\"\n                      title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\n                  </div>\n                  <div class=\"col-sm-1\" *ngIf=\"!isAddProspect\">\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\"\n                      (click)=\"checkExisting('customer')\">\n                      <span class=\"flaticon2-check-mark\"></span>\n                    </a>\n                  </div>\n                  <div class=\"col-sm-1\" *ngIf=\"!isAddProspect\">\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\"\n                      (click)=\"viewExisting('customer')\">\n                      <span class=\"flaticon2-user\"></span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"align-items: center\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">{{\"FORM.referral_customer\" | translate}}</label>\n                  <div class=\"col-sm-8\" (click)=\"viewExisting('referral')\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"referralCustomerName\" readonly\n                      autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('referralCustomerName')\"\n                      [class.is-valid]=\"isControlValid('referralCustomerName')\" readonly\n                      formControlName=\"referralCustomerName\" />\n                    <span class=\"ng-clear-wrapper\" (click)=\"clearDate('referralCustomerName');$event.stopPropagation()\"\n                      title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4  col-form-label\">{{\"FORM.existing_prospect\" | translate}}</label>\n                  <div class=\"col-sm-5\">\n                    <input type=\"text\" readonly class=\"form-control form-control-sm \" name=\"prospectCustomer\"\n                      autocomplete=\"off\" formControlName=\"prospectCustomer\" />\n                    <span class=\"ng-clear-wrapper\" *ngIf=\"!isAddProspect\"\n                      (click)=\"clearDate('prospectCustomer');$event.stopPropagation()\" title=\"Clear all\"><span\n                        aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\n                  </div>\n                  <div class=\"col-sm-1\" *ngIf=\"!isAddProspect\">\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\"\n                      (click)=\"checkExisting('prospect')\" readonly=\"leadForm.value.existingCustomerName\">\n                      <span class=\"flaticon2-check-mark\"></span>\n                    </a>\n                  </div>\n                  <div class=\"col-sm-1\" *ngIf=\"!isAddProspect\">\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\"\n                      (click)=\"viewExisting('prospect')\">\n                      <span class=\"flaticon2-user\"></span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <hr>\n          <h3 class=\"card-label left-border-image\">{{\"FORM.more_detail\" | translate}}</h3>\n\n          <div class=\"row\" style=\"align-items: center\">\n            <div class=\"col-sm-12\">\n              <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5 col-form-label\">{{\"FORM.estimate_m_income\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <input type=\"text\" class=\"form-control form-control-sm\" name=\"estimatedMonthlyIncome\" autocomplete=\"off\"\n                        [class.is-invalid]=\"isControlInvalid('estimatedMonthlyIncome')\"\n                        [class.is-valid]=\"isControlValid('estimatedMonthlyIncome')\" formControlName=\"estimatedMonthlyIncome\" />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5 col-form-label\">{{\"FORM.facebook_acc\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <input type=\"text\" class=\"form-control form-control-sm\" name=\"facebookAcc\" autocomplete=\"off\"\n                        [class.is-invalid]=\"isControlInvalid('facebookAcc')\"\n                        [class.is-valid]=\"isControlValid('facebookAcc')\" formControlName=\"facebookAcc\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\" style=\"align-items: center\">\n\n\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5 col-form-label\">{{\"FORM.marital_status\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('maritalStatus')\"\n                        [class.is-valid]=\"isControlValid('maritalStatus')\" [items]=\"maritalOption\" bindLabel=\"value\"\n                        bindValue=\"code\" formControlName=\"maritalStatus\">\n                      </ng-select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5  col-form-label\">{{\"FORM.no_childern\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <input type=\"number\" class=\"form-control form-control-sm\" name=\"noOfChildren\"\n                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('noOfChildren')\"\n                        [class.is-valid]=\"isControlValid('noOfChildren')\" formControlName=\"noOfChildren\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5  col-form-label\">{{\"FORM.asset\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <input type=\"text\" class=\"form-control form-control-sm\" name=\"assets\" autocomplete=\"off\"\n                        [class.is-invalid]=\"isControlInvalid('assets')\" [class.is-valid]=\"isControlValid('assets')\"\n                        formControlName=\"assets\" />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5  col-form-label\">{{\"FORM.score\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <input type=\"text\" class=\"form-control form-control-sm\" name=\"score\" autocomplete=\"off\"\n                        [class.is-invalid]=\"isControlInvalid('score')\" [class.is-valid]=\"isControlValid('score')\"\n                        formControlName=\"score\" readonly />\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5  col-form-label\">{{\"FORM.existing_insurance_plan\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <input type=\"text\" class=\"form-control form-control-sm\" name=\"existingInsurancePlan\"\n                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('existingInsurancePlan')\"\n                        [class.is-valid]=\"isControlValid('existingInsurancePlan')\"\n                        formControlName=\"existingInsurancePlan\" />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5  col-form-label\">{{\"FORM.existing_insurance_coverage\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <input type=\"text\" class=\"form-control form-control-sm\" name=\"existingInsuranceCoverage\"\n                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('existingInsuranceCoverage')\"\n                        [class.is-valid]=\"isControlValid('existingInsuranceCoverage')\"\n                        formControlName=\"existingInsuranceCoverage\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5  col-form-label\">{{\"FORM.financial_plan\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <input type=\"text\" class=\"form-control form-control-sm\" name=\"financialPlan\" autocomplete=\"off\"\n                        [class.is-invalid]=\"isControlInvalid('financialPlan')\"\n                        [class.is-valid]=\"isControlValid('financialPlan')\" formControlName=\"financialPlan\" />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-5 col-form-label\">{{\"FORM.reject_reason\" | translate}}</label>\n                    <div class=\"col-sm-7\">\n                      <textarea type=\"text\" readonly class=\"form-control form-control-sm\" name=\"reason\"\n                        autocomplete=\"off\" formControlName=\"reason\"></textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <hr>\n          </div>\n\n          <div class=\"mt-2\">\n            <div class=\"row\" style=\"align-items: center;  justify-content: flex-end;\">\n              <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-sm btn-primary ml-2\" style=\"width: 100%;\"\n                  (click)=\"updateLeadStatus('save')\">\n                  <span class=\"\">{{\"FORM.btn_save\" | translate}}</span>\n                </button>\n              </div>\n              <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-sm btn-secondary ml-2\" style=\"width: 100%;\"\n                  (click)=\"updateLeadStatus('cancel')\">\n                  <span class=\"\">{{\"FORM.btn_cancel\" | translate}}</span>\n                </button>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </form>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_lead-list_lead-list_share_module_ts.js.map