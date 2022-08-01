"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_activity-management-detail_activity-management-detail_module_ts"],{

/***/ 41018:
/*!*****************************************!*\
  !*** ./src/app/core/valid-all-feild.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateAllFields": () => (/* binding */ validateAllFields)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);

function validateAllFields(formGroup) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl) {
            control.markAsTouched({ onlySelf: true });
        }
        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) {
            this.validateAllFields(control);
        }
    });
}


/***/ }),

/***/ 82043:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/activity-management-detail.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityManagementDetailComponent": () => (/* binding */ ActivityManagementDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activity_management_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-management-detail.component.html?ngResource */ 53228);
/* harmony import */ var _activity_management_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-management-detail.component.scss?ngResource */ 12032);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _activity_management_list_activity_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activity-management-list/activity-manage.service */ 93841);
/* harmony import */ var _pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pop-up-modal/related-modal.component */ 15173);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/valid-all-feild */ 41018);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-list/customer-list.component */ 17585);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _core_menu_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/menu-data.service */ 17606);


















let ActivityManagementDetailComponent = class ActivityManagementDetailComponent {
    constructor(route, modalService, activityManageService, location, cdf, alertService, menuService, ngZone) {
        this.route = route;
        this.modalService = modalService;
        this.activityManageService = activityManageService;
        this.location = location;
        this.cdf = cdf;
        this.alertService = alertService;
        this.menuService = menuService;
        this.ngZone = ngZone;
        this.isLead = false;
        this.activityStatus = {
            "01": "Open",
            "02": "Complete",
            "03": "Cancel",
        };
        this.activityType = [
            "Face to Face",
            "Online",
            "Phone Call"
        ];
        this.dataAccess = {
            view: true,
            create: true,
            edit: true,
            delete: true
        };
    }
    ngOnInit() {
        // this.loadForm();
        this.checkPremission();
        this.route.queryParams
            .subscribe(params => {
            this.pageStatus = params.pageStatus;
            if (this.pageStatus != 'create') {
                this.oldId = params.pageId;
                this.getOld();
            }
            else {
                this.loadForm();
                // console.log("PARMA", params)
                this.actForm.controls.assignTo.setValue(params.assignTo);
                this.actForm.controls.assignName.setValue(params.assignToName);
                this.actForm.controls.customerId.setValue(params.customerId);
                this.actForm.controls.customerName.setValue(params.name);
                if (params.leadId) {
                    //  this.actForm.controls.relatedTo.setValue(params.leadId)
                    //  this.relatedType ='lead'
                    this.leadId = params.leadId;
                    this.isLead = params.isLead;
                }
            }
        });
    }
    checkPremission() {
        this.menuService.dataAccess.subscribe((res) => {
            if (res) {
                this.dataAccess = res['activity'];
                if (!this.dataAccess.view) {
                    this.location.back();
                }
            }
        });
    }
    ngAfterViewInit() {
    }
    clearDate(key) {
        this.actForm.controls[key].setValue(null);
    }
    getOld() {
        this.activityManageService.findOne(this.oldId).toPromise().then((res) => {
            if (res) {
                this.oldData = res;
                this.leadId = res.leadId;
                this.isLead = res.leadId ? true : false;
                this.loadForm(res);
                this.cdf.detectChanges();
            }
        });
    }
    loadForm(oldData) {
        // if(oldData)
        // console.log(moment(oldData.dueDate).format('DD/MM/YYYY'));
        // console.log(oldData);
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            "activityNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({ value: oldData ? oldData.activityNo : null, disabled: true }),
            "activityType": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(oldData ? oldData.activityType : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "activityTitle": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(oldData ? oldData.activityTitle : null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "activityDescription": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(oldData ? oldData.activityDescription : null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "planDateStr": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(oldData && oldData.planDate ? moment__WEBPACK_IMPORTED_MODULE_4__(oldData.planDate) : null),
            "actualDateStr": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(oldData && oldData.actualDate ? moment__WEBPACK_IMPORTED_MODULE_4__(oldData.actualDate) : null),
            "dueDateStr": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(oldData && oldData.dueDate ? moment__WEBPACK_IMPORTED_MODULE_4__(oldData.dueDate) : null),
            "relatedTo": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({ value: oldData ? oldData.relatedTo : null, disabled: true }),
            "customerId": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(oldData ? oldData.customerId : null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "customerName": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({ value: oldData ? oldData.customerName : null, disabled: true }),
            "assignTo": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(oldData ? oldData.assignTo : null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            "assignName": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({ value: oldData ? oldData.assignName : null, disabled: true }),
            "status": new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({ value: oldData ? oldData.status : "01", disabled: oldData ? false : true }),
        });
        this.relatedType = oldData ? oldData.relatedType : "";
        this.cdf.detectChanges();
    }
    openModal(type) {
        let controlInp;
        if (type == "quotation")
            controlInp = this.actForm.controls['relatedTo'];
        // if(!this.isLead){
        const modalRef = this.modalService.open(_pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_3__.RelatedModalCompoent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.selecteditem = controlInp.value;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.relatedType = (res.data + "").includes("QUO") ? 'quotation' : 'policy';
                    // console.log(' this.relatedType', this.relatedType)
                    controlInp.setValue(res.data);
                }
            }
        });
        // }
    }
    viewAgent(type) {
        if (!this.isLead) {
            let controlInp;
            if (type == "agent")
                controlInp = this.actForm.controls['assignTo'];
            // console.log(type, this.isLead)
            const modalRef = this.modalService.open(_pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_3__.RelatedModalCompoent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = type;
            modalRef.componentInstance.selecteditem = controlInp.value;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == 'save') {
                        if (type == "agent") {
                            // console.log('onDidDismiss =====> ', res);
                            this.actForm.controls['assignTo'].setValue(res.data);
                            this.actForm.controls['assignName'].setValue(res.dataName);
                        }
                    }
                }
            });
        }
    }
    viewCustomer() {
        if (!this.isLead) {
            let modalRef;
            modalRef = this.modalService.open(_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__.CustomerListComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.isPopup = true;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == "save") {
                        let customer = res.data;
                        // console.log('onDidDismiss =====> ', customer);
                        let name = (customer.firstName || "") + " " + (customer.middleName || "") + " " + (customer.lastName || "");
                        this.actForm.controls.customerId.setValue(customer.customerId);
                        this.actForm.controls.customerName.setValue(name);
                    }
                }
            });
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
    doActivity() {
        if (this.actForm.invalid) {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_5__.validateAllFields)(this.actForm);
            return true;
        }
        else {
            let postData = this.actForm.getRawValue();
            postData['dueDate'] = postData['dueDateStr'];
            postData['actualDate'] = postData['actualDateStr'];
            postData['planDate'] = postData['planDateStr'];
            postData['dueDateStr'] = moment__WEBPACK_IMPORTED_MODULE_4__(postData['dueDate']).format("YYYY-MM-DD");
            postData['actualDateStr'] = moment__WEBPACK_IMPORTED_MODULE_4__(postData['actualDate']).format("YYYY-MM-DD");
            postData['planDateStr'] = moment__WEBPACK_IMPORTED_MODULE_4__(postData['planDate']).format("YYYY-MM-DD");
            if (this.pageStatus == 'create') {
                this.create(postData);
            }
            else {
                this.edit(postData);
            }
        }
    }
    create(postData) {
        let data = Object.assign(Object.assign({}, postData), { relatedType: this.relatedType || null, status: '01' });
        if (this.isLead) {
            data = Object.assign(Object.assign({}, postData), { relatedType: this.relatedType || null, status: '01', leadId: this.leadId });
        }
        this.activityManageService.save(data).toPromise().then((res) => {
            if (res) {
                this.alertService.activate('This record was created', 'Success Message');
                this.location.back();
            }
        });
    }
    edit(postData) {
        let data = Object.assign(Object.assign({}, postData), { activityNo: this.oldId, relatedType: this.relatedType || null });
        if (this.isLead) {
            data = Object.assign(Object.assign({}, postData), { relatedType: this.relatedType || null, leadId: this.leadId });
        }
        this.activityManageService.updateNoID(data).toPromise().then((res) => {
            if (res) {
                this.alertService.activate('This record was updated', 'Success Message');
                this.location.back();
            }
        });
    }
    backLocation() {
        if (this.isLead) {
            this.ngZone.run(() => {
                this.location.back();
            });
        }
        else {
            this.loadForm(this.oldData);
        }
    }
};
ActivityManagementDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal },
    { type: _activity_management_list_activity_manage_service__WEBPACK_IMPORTED_MODULE_2__.ActivityService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService },
    { type: _core_menu_data_service__WEBPACK_IMPORTED_MODULE_9__.MenuDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone }
];
ActivityManagementDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-activity-management-detail',
        template: _activity_management_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_17__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_7__.MY_FORMATS },
        ],
        styles: [_activity_management_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActivityManagementDetailComponent);



/***/ }),

/***/ 64246:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/activity-management-detail.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityManagementDetailModule": () => (/* binding */ ActivityManagementDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _activity_management_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-management-detail.component */ 82043);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-up-modal/related-modal.component */ 15173);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-list/customer-list.share.module */ 36277);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);















let ActivityManagementDetailModule = class ActivityManagementDetailModule {
};
ActivityManagementDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_activity_management_detail_component__WEBPACK_IMPORTED_MODULE_0__.ActivityManagementDetailComponent, _pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_1__.RelatedModalCompoent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDatepickerModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
            _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_3__.CustomerListShareModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_4__.LanguageModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
                {
                    path: '',
                    component: _activity_management_detail_component__WEBPACK_IMPORTED_MODULE_0__.ActivityManagementDetailComponent,
                },
            ]),
        ],
    })
], ActivityManagementDetailModule);



/***/ }),

/***/ 5786:
/*!***************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/customer-list.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListService": () => (/* binding */ CustomerListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 38313);





const API_CUST_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/customer`;
let CustomerListService = class CustomerListService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_CUST_URL);
        this.httpClient = httpClient;
    }
};
CustomerListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CustomerListService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CustomerListService);



/***/ }),

/***/ 29462:
/*!***************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/employee-list.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeListService": () => (/* binding */ EmployeeListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 38313);





const API_EMP_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/employee`;
let EmployeeListService = class EmployeeListService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_EMP_URL);
        this.httpClient = httpClient;
    }
};
EmployeeListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EmployeeListService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EmployeeListService);



/***/ }),

/***/ 69174:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/pop-up-modal/col-data.const.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OldTableColData": () => (/* binding */ OldTableColData),
/* harmony export */   "TableColData": () => (/* binding */ TableColData)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const TableColData = {
    quotation: {
        ELEMENT_COL: [
            {
                title: "Quotation ID",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "id",
            },
            {
                title: "Product Name",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "productName",
            },
            {
                title: "Product Code",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "productCode",
            },
            {
                title: "Agent Name",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "agentFirstName",
            },
            {
                title: "Premium",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "premium",
                amtFormat: true,
            },
            {
                title: "Status",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "status",
                isTitle: true
            },
        ],
        displayedColumns: [
            "id",
            "productName",
            "productCode",
            "agentFirstName",
            "premium",
            "status",
        ]
    },
    policy: {
        ELEMENT_COL: [
            {
                title: "Quotation ID",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "id",
            },
            {
                title: "Product Name",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "productName",
            },
            {
                title: "Product Code",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "productCode",
            },
            {
                title: "Agent Name",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "agentFirstName",
            },
            {
                title: "Premium",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "premium",
                amtFormat: true,
            },
            {
                title: "Status",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "status",
                isTitle: true
            },
        ],
        displayedColumns: [
            "id",
            "productName",
            "productCode",
            "agentFirstName",
            "premium",
            "status",
        ]
    },
    customer: {
        ELEMENT_COL: [
            {
                title: "ID",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "id",
                // prefix: "CUS_"
            },
            {
                title: "Title",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "title",
            },
            {
                title: "First Name",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "firstName",
            },
            {
                title: "Last Name",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "lastName",
            },
            {
                title: "Identity Type",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "identityType",
            },
            {
                title: "Identity Number",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "identityNumber",
            },
            {
                title: "Gender",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "gender",
            },
        ],
        displayedColumns: [
            "id",
            "title",
            "firstName",
            "lastName",
            "identityType",
            "identityNumber",
            "gender",
        ]
    },
    agent: {
        ELEMENT_COL: [
            {
                title: "Emp No",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "empNo",
            },
            {
                title: "Email",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "email",
            },
            {
                title: "First Name",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "firstName",
            },
            {
                title: "Last Name",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "lastName",
            },
            {
                title: "Mobile No",
                type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
                field: "mobileNo",
            },
        ],
        displayedColumns: [
            "empNo",
            "email",
            "firstName",
            "lastName",
            "mobileNo",
        ]
    },
};
const OldTableColData = {
    agent: [
        {
            col: "Emp No",
            key: "empNo",
        },
        {
            col: "Email",
            key: "email"
        },
        {
            col: "Name",
            key: "firstName"
        },
        {
            col: "Mobile No",
            key: "mobileNo"
        },
    ],
};


/***/ }),

/***/ 15173:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/pop-up-modal/related-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelatedModalCompoent": () => (/* binding */ RelatedModalCompoent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _related_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./related-modal.component.html?ngResource */ 3396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _policy_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../policy/policy.service */ 61106);
/* harmony import */ var _quotations_quotation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../quotations/quotation.service */ 75943);
/* harmony import */ var _customer_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-list.service */ 5786);
/* harmony import */ var _employee_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../employee-list.service */ 29462);
/* harmony import */ var _col_data_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./col-data.const */ 69174);












let RelatedModalCompoent = class RelatedModalCompoent {
    constructor(modal, quotService, policyService, customerService, employeeService, cdf, alertService) {
        this.modal = modal;
        this.quotService = quotService;
        this.policyService = policyService;
        this.customerService = customerService;
        this.employeeService = employeeService;
        this.cdf = cdf;
        this.alertService = alertService;
        this.tableData = _col_data_const__WEBPACK_IMPORTED_MODULE_7__.TableColData;
        this.types = [
            "quotation", "policy"
        ];
        // "customer"agent
        this.type = "customer";
        this.dataList = [];
    }
    ngOnInit() {
        if (this.selected && this.type == 'quotation') {
            this.type = (this.selected + "").includes("QUO") ? 'quotation' : 'policy';
        }
        this.getDatalist();
    }
    selectedProd(id, index) {
        if (this.selecteditem == id)
            this.selecteditem = null;
        this.selecteditem = id;
        this.selectedName = this.type == "customer" ? this.dataList[index].name : this.dataList[index].firstName || "";
    }
    getDatalist() {
        if (this.type == 'customer') {
            this.getCustomerList();
        }
        else {
            let service;
            if (this.type == 'quotation')
                service = this.quotService;
            else if (this.type == 'policy')
                service = this.policyService;
            else
                service = this.employeeService;
            service.findAll().toPromise().then((res) => {
                // console.log(res);
                if (res) {
                    this.dataList = res;
                    this.cdf.detectChanges();
                    this.matTable.reChangeData();
                }
            });
        }
    }
    getCustomerList() {
        this.customerService.findAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(x => {
            return x.map(x => x.individualCustomer);
        })).toPromise().then((res) => {
            if (res)
                this.dataList = res;
            // console.log("customer",  this.dataList)
            this.cdf.detectChanges();
            this.matTable.reChangeData();
        });
    }
    get selected() {
        let item;
        if (this.matTable) {
            item = this.matTable.selection.selected[0];
        }
        return item ? item : { id: 0 };
    }
    save() {
        this.selectedName = this.type == "customer" ? this.selected.name : this.selected.firstName || "";
        let name = (this.selected.firstName || "") + " " + (this.selected.middleName || "") + " " + (this.selected.lastName || "");
        this.selectedName = this.type == "agent" ? name : "";
        this.modal.dismiss({ data: this.selected.id || this.selected.empId, type: 'save', dataName: this.selectedName });
    }
    actionBtn(event) {
    }
    deleteEditModal() {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.modal.dismiss({ type: 'delete' });
            }
        });
    }
};
RelatedModalCompoent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal },
    { type: _quotations_quotation_service__WEBPACK_IMPORTED_MODULE_4__.QuotationService },
    { type: _policy_policy_service__WEBPACK_IMPORTED_MODULE_3__.PolicyManageService },
    { type: _customer_list_service__WEBPACK_IMPORTED_MODULE_5__.CustomerListService },
    { type: _employee_list_service__WEBPACK_IMPORTED_MODULE_6__.EmployeeListService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService }
];
RelatedModalCompoent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }]
};
RelatedModalCompoent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-related-to",
        template: _related_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], RelatedModalCompoent);



/***/ }),

/***/ 12032:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/activity-management-detail.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n.ng-clear-wrapper .ng-clear {\n  cursor: pointer;\n  position: absolute;\n  right: 2rem;\n  top: 2.3rem;\n  font-size: 1.2rem;\n  color: #999;\n}\n.ng-clear-wrapper .ng-clear:hover {\n  color: #D0021B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7QUFESiIsImZpbGUiOiJhY3Rpdml0eS1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XG4gICAgLmZvcm0tY29udHJvbC1zbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNEU2RUY7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xuICAgIH1cbiAgICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbn1cblxuLm5nLWNsZWFyLXdyYXBwZXIgLm5nLWNsZWFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAycmVtO1xuICAgIHRvcDogMi4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjOTk5O1xufVxuXG4ubmctY2xlYXItd3JhcHBlciAubmctY2xlYXI6aG92ZXIge1xuICAgIGNvbG9yOiAjRDAwMjFCO1xufSJdfQ== */";

/***/ }),

/***/ 53228:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/activity-management-detail.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\" *ngIf=\"pageStatus == 'edit'\">\n    <div class=\"col-12\" *ngIf=\"actForm\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-body\">\n                <!-- begin:Table -->\n                <div class=\"table-responsive angular-bootstrap-table\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-sm\">\n                                {{\"FORM.related_to\" | translate}} <br> {{actForm.controls.relatedTo.value}}\n                            </div>\n                            <div class=\"col-sm\">\n                                {{\"FORM.owner\" | translate}} <br> {{actForm.controls.assignName.value}}\n                            </div>\n                            <div class=\"col-sm\">\n                                {{\"FORM.status\" | translate}} <br> {{activityStatus[actForm.controls.status.value]}}\n                            </div>\n                            <div class=\"col-sm\">\n                                {{\"FORM.date\" | translate}} <br>\n                                <ng-container *ngIf=\"actForm.controls.planDateStr.value\">\n                                    {{actForm.controls.planDateStr.value | date: \"dd-MM-YYYY\"}}\n                                </ng-container>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- end: Table -->\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"actForm\">\n    <div class=\"col-12\">\n        <div class=\"card card-custom gutter-b\">\n            <div class=\"card-body\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"actForm\" (ngSubmit)=\"doActivity()\">\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-12\" *ngIf=\"pageStatus == 'edit'\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.act_no\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"activityNo\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('activityNo')\"\n                                    [class.is-valid]=\"isControlValid('activityNo')\" formControlName=\"activityNo\" />\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.act_type\" | translate}}</label>\n                                <select class=\"form-control form-control-sm\" name=\"actType\" autocomplete=\"off\"\n                                    [class.is-invalid]=\"isControlInvalid('activityType')\"\n                                    [class.is-valid]=\"isControlValid('activityType')\" formControlName=\"activityType\">\n                                    <option value=\"\">Select Activity Type</option>\n                                    <option value=\"{{item}}\" *ngFor=\"let item of activityType\">{{item}}</option>\n                                </select>\n                                <!-- <input type=\"text\" class=\"form-control form-control-sm\" name=\"actType\" autocomplete=\"off\"\n                  [class.is-invalid]=\"isControlInvalid('activityType')\"\n                  [class.is-valid]=\"isControlValid('activityType')\" formControlName=\"activityType\" /> -->\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.act_title\" | translate}}</label>\n                                <input type=\"text\" [maxlength]=\"75\" class=\"form-control form-control-sm\" name=\"actTitle\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('activityTitle')\"\n                                    [class.is-valid]=\"isControlValid('activityTitle')\"\n                                    formControlName=\"activityTitle\" />\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.act_desc\" | translate}}</label>\n                                <textarea name=\"\" maxlength=\"500\" rows=\"4\" class=\"form-control form-control-sm\" name=\"actDesc\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('activityDescription')\"\n                                    [class.is-valid]=\"isControlValid('activityDescription')\"\n                                    formControlName=\"activityDescription\" style=\"resize: false;\"></textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group \">\n                                <label class=\"form-label\">{{\"FORM.plan_date\" | translate}} </label>\n                                <div class=\"input-group \">\n\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                                        formControlName=\"planDateStr\" [matDatepicker]=\"planDateStr\" readonly>\n                                    <mat-datepicker-toggle matSuffix [for]=\"planDateStr\"></mat-datepicker-toggle>\n                                    <mat-datepicker #planDateStr disabled=\"false\"></mat-datepicker>\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.actual_date\" | translate}}</label>\n                                <div class=\"input-group \">\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                                        formControlName=\"actualDateStr\" [matDatepicker]=\"actualDateStr\" readonly>\n                                    <mat-datepicker-toggle matSuffix [for]=\"actualDateStr\"></mat-datepicker-toggle>\n                                    <mat-datepicker #actualDateStr disabled=\"false\"></mat-datepicker>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.due_date\" | translate}}</label>\n                                <div class=\"input-group \">\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\n                                        formControlName=\"dueDateStr\" [matDatepicker]=\"dueDateStr\" readonly>\n                                    <mat-datepicker-toggle matSuffix [for]=\"dueDateStr\"></mat-datepicker-toggle>\n                                    <mat-datepicker #dueDateStr disabled=\"false\"></mat-datepicker>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\" (click)=\"openModal('quotation')\">\n                                <label class=\"form-label\">{{\"FORM.related_to\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"relatedTo\"\n                                    autocomplete=\"off\" formControlName=\"relatedTo\" />\n                                <span class=\"ng-clear-wrapper\" (click)=\"clearDate('relatedTo');$event.stopPropagation()\"\n                                    title=\"Clear all\"><span aria-hidden=\"true\" class=\"ng-clear\">×</span></span>\n\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\" (click)=\"viewCustomer()\">\n                                <label class=\"form-label\">{{\"FORM.customer_name\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"customerName\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('customerId')\"\n                                    [class.is-valid]=\"isControlValid('customerId')\" formControlName=\"customerName\" />\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\" (click)=\"viewAgent('agent')\">\n                                <label class=\"form-label\">{{\"FORM.assign_to\" | translate}}</label>\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"assignName\"\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('assignTo')\"\n                                    [class.is-valid]=\"isControlValid('assignTo')\" formControlName=\"assignName\" />\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">{{\"FORM.status\" | translate}}</label>\n                                <select class=\"form-control form-control-sm\" name=\"status\" autocomplete=\"off\"\n                                    [class.is-invalid]=\"isControlInvalid('status')\"\n                                    [class.is-valid]=\"isControlValid('status')\" formControlName=\"status\">\n                                    <option value=\"01\">Open</option>\n                                    <option value=\"02\">Complete</option>\n                                    <option value=\"03\">Cancel</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-default btn-elevate\"\n                        (click)=\"backLocation()\">{{\"FORM.btn_cancel\" | translate}}</button>\n                    <button type=\"submit\" class=\"btn btn-primary btn-elevate mx-2\"\n                        *ngIf=\"dataAccess.edit\">{{\"FORM.btn_save\" | translate}}</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 3396:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/pop-up-modal/related-modal.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n      Select ( {{type =='policy' ? 'Application': type| titlecase }} ) in list\n    </div>\n\n  </div>\n  <div class=\"overlay overlay-block cursor-default modal-body\">\n    <!-- <form class=\"form\">  -->\n    <div class=\"form-group\" *ngIf=\"type == 'quotation' || type == 'policy'\">\n      <select class=\"form-control form-control-sm\" [(ngModel)]=\"type\" (change)=\"getDatalist()\">\n        <option *ngFor=\"let item of types\" value=\"{{item}}\">{{item | titlecase}}</option>\n      </select>\n    </div>\n      <app-material-table-view [selectable]=\"true\" [data]=\"dataList\" [colum]=\"tableData[type].ELEMENT_COL\"\n        [displayedColumns]=\"tableData[type].displayedColumns\" (emitter)=\"actionBtn($event)\">\n      </app-material-table-view>\n    <!-- <div class=\"table-responsive angular-bootstrap-table\">\n      <table class=\"table table-head-custom table-vertical-center\">\n        <thead>\n          <ng-container *ngFor=\"let item of tableData[type]\">\n            <th>\n              {{item.col}}\n            </th>\n          </ng-container>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let prod of dataList;let i = index\">\n            <tr (click)=\"selectedProd(prod.id || prod.empId,i)\" class=\"{{ (prod.id || prod.empId) == selected ? 'bg-primary text-white' : '' }}\"\n              [ngClass]=\"{'pointer': type != 'page'}\">\n              <ng-container *ngFor=\"let item of tableData[type]\">\n                <td>\n                  {{prod[item.key]}}\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </tbody>\n       </table>\n       </div> -->\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\n      (click)=\"deleteEditModal()\">Delete</button> -->\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">{{\"FORM.btn_cancel\" | translate }}</button>\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\" [disabled]=\"!selected.id && !selected.empId\">{{\"FORM.btn_save\" | translate }}</button>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_activity-management-detail_activity-management-detail_module_ts.js.map