"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_activity-management-detail_activity-management-detail_module_ts"],{

/***/ 69808:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/activity-management-detail.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityManagementDetailComponent": () => (/* binding */ ActivityManagementDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_activity_management_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./activity-management-detail.component.html */ 73772);
/* harmony import */ var _activity_management_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-management-detail.component.scss */ 98115);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _activity_management_list_activity_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activity-management-list/activity-manage.service */ 95976);
/* harmony import */ var _pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pop-up-modal/related-modal.component */ 6098);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/valid-all-feild */ 53489);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-list/customer-list.component */ 41275);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/is-json */ 47975);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);

















let ActivityManagementDetailComponent = class ActivityManagementDetailComponent {
    constructor(route, modalService, activityManageService, location, cdf, alertService) {
        this.route = route;
        this.modalService = modalService;
        this.activityManageService = activityManageService;
        this.location = location;
        this.cdf = cdf;
        this.alertService = alertService;
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
    }
    ngOnInit() {
        // this.loadForm();
        this.route.queryParams
            .subscribe(params => {
            this.pageStatus = params.pageStatus;
            if (this.pageStatus != 'create') {
                this.oldId = params.pageId;
                this.getOld();
            }
            else {
                this.loadForm();
                console.log("PARMA", params);
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
    ngAfterViewInit() {
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
        this.actForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            "activityNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: oldData ? oldData.activityNo : null, disabled: true }),
            "activityType": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(oldData ? oldData.activityType : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            "activityTitle": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(oldData ? oldData.activityTitle : null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            "activityDescription": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(oldData ? oldData.activityDescription : null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            "planDateStr": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(oldData && oldData.planDate ? moment__WEBPACK_IMPORTED_MODULE_4__(oldData.planDate) : null),
            "actualDateStr": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(oldData && oldData.actualDate ? moment__WEBPACK_IMPORTED_MODULE_4__(oldData.actualDate) : null),
            "dueDateStr": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(oldData && oldData.dueDate ? moment__WEBPACK_IMPORTED_MODULE_4__(oldData.dueDate) : null),
            "relatedTo": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: oldData ? oldData.relatedTo : null, disabled: true }),
            "customerId": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(oldData ? oldData.customerId : null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            "customerName": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: oldData ? oldData.customerName : null, disabled: true }),
            "assignTo": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(oldData ? oldData.assignTo : null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            "assignName": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: oldData ? oldData.assignName : null, disabled: true }),
            "status": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: oldData ? oldData.status : "01", disabled: oldData ? false : true }),
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
                    console.log(' this.relatedType', this.relatedType);
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
            console.log(type, this.isLead);
            const modalRef = this.modalService.open(_pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_3__.RelatedModalCompoent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = type;
            modalRef.componentInstance.selecteditem = controlInp.value;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    if (res.type == 'save') {
                        if (type == "agent") {
                            console.log('onDidDismiss =====> ', res);
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
                        console.log('onDidDismiss =====> ', customer);
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
            this.location.back();
        }
        else {
            this.loadForm(this.oldData);
        }
    }
};
ActivityManagementDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal },
    { type: _activity_management_list_activity_manage_service__WEBPACK_IMPORTED_MODULE_2__.ActivityManageService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService }
];
ActivityManagementDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-activity-management-detail',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_activity_management_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_7__.MY_FORMATS },
        ],
        styles: [_activity_management_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActivityManagementDetailComponent);



/***/ }),

/***/ 25040:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/activity-management-detail.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityManagementDetailModule": () => (/* binding */ ActivityManagementDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _activity_management_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-management-detail.component */ 69808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-up-modal/related-modal.component */ 6098);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-list/customer-list.share.module */ 90860);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 57574);














let ActivityManagementDetailModule = class ActivityManagementDetailModule {
};
ActivityManagementDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_activity_management_detail_component__WEBPACK_IMPORTED_MODULE_0__.ActivityManagementDetailComponent, _pop_up_modal_related_modal_component__WEBPACK_IMPORTED_MODULE_1__.RelatedModalCompoent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDatepickerModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalModule,
            _customer_list_customer_list_share_module__WEBPACK_IMPORTED_MODULE_3__.CustomerListShareModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([
                {
                    path: '',
                    component: _activity_management_detail_component__WEBPACK_IMPORTED_MODULE_0__.ActivityManagementDetailComponent,
                },
            ]),
        ],
    })
], ActivityManagementDetailModule);



/***/ }),

/***/ 482:
/*!***************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/customer-list.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListService": () => (/* binding */ CustomerListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





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

/***/ 74576:
/*!***************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/employee-list.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeListService": () => (/* binding */ EmployeeListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





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

/***/ 83085:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/pop-up-modal/col-data.const.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableColData": () => (/* binding */ TableColData),
/* harmony export */   "OldTableColData": () => (/* binding */ OldTableColData)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

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

/***/ 6098:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/pop-up-modal/related-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelatedModalCompoent": () => (/* binding */ RelatedModalCompoent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_related_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./related-modal.component.html */ 45560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _policy_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../policy/policy.service */ 46045);
/* harmony import */ var _quotations_quotation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../quotations/quotation.service */ 80842);
/* harmony import */ var _customer_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-list.service */ 482);
/* harmony import */ var _employee_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee-list.service */ 74576);
/* harmony import */ var _col_data_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./col-data.const */ 83085);











let RelatedModalCompoent = class RelatedModalCompoent {
    constructor(modal, quotService, policyService, customerService, employeeService, cdf) {
        this.modal = modal;
        this.quotService = quotService;
        this.policyService = policyService;
        this.customerService = customerService;
        this.employeeService = employeeService;
        this.cdf = cdf;
        this.tableData = _col_data_const__WEBPACK_IMPORTED_MODULE_6__.TableColData;
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
        this.customerService.findAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(x => {
            return x.map(x => x.individualCustomer);
        })).toPromise().then((res) => {
            if (res)
                this.dataList = res;
            console.log("customer", this.dataList);
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
};
RelatedModalCompoent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal },
    { type: _quotations_quotation_service__WEBPACK_IMPORTED_MODULE_3__.QuotationService },
    { type: _policy_policy_service__WEBPACK_IMPORTED_MODULE_2__.PolicyService },
    { type: _customer_list_service__WEBPACK_IMPORTED_MODULE_4__.CustomerListService },
    { type: _employee_list_service__WEBPACK_IMPORTED_MODULE_5__.EmployeeListService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef }
];
RelatedModalCompoent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_1__.MaterialTableViewComponent,] }]
};
RelatedModalCompoent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-related-to",
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_related_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
], RelatedModalCompoent);



/***/ }),

/***/ 73772:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/activity-management-detail/activity-management-detail.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" *ngIf=\"pageStatus == 'edit'\">\r\n    <div class=\"col-12\" *ngIf=\"actForm\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-body\">\r\n                <!-- begin:Table -->\r\n                <div class=\"table-responsive angular-bootstrap-table\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm\">\r\n                                Related to <br>\r\n                                {{actForm.controls.relatedTo.value}}\r\n                            </div>\r\n                            <div class=\"col-sm\">\r\n                                Owner <br>\r\n                                {{actForm.controls.assignName.value}}\r\n                            </div>\r\n                            <div class=\"col-sm\">\r\n                                Status <br>\r\n                                {{activityStatus[actForm.controls.status.value]}}\r\n                            </div>\r\n                            <div class=\"col-sm\">\r\n                                Date <br>\r\n                                <ng-container *ngIf=\"actForm.controls.planDateStr.value\">\r\n                                    {{actForm.controls.planDateStr.value | date: \"dd-MM-YYYY\"}}\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                       \r\n                    </div>\r\n                </div>\r\n                <!-- end: Table -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" *ngIf=\"actForm\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card card-custom gutter-b\">\r\n            <div class=\"card-body\">\r\n                <form action=\"#\" class=\"form\" [formGroup]=\"actForm\" (ngSubmit)=\"doActivity()\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-sm-12\" *ngIf=\"pageStatus == 'edit'\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">Activity No.</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"activityNo\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('activityNo')\"\r\n                                    [class.is-valid]=\"isControlValid('activityNo')\" formControlName=\"activityNo\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">Activity Type</label>\r\n                                <select class=\"form-control form-control-sm\" name=\"actType\" autocomplete=\"off\"\r\n                                    [class.is-invalid]=\"isControlInvalid('activityType')\"\r\n                                    [class.is-valid]=\"isControlValid('activityType')\" formControlName=\"activityType\">\r\n                                    <option value=\"\">Select Activity Type</option>\r\n                                    <option value=\"{{item}}\" *ngFor=\"let item of activityType\">{{item}}</option>\r\n                                </select>\r\n                                <!-- <input type=\"text\" class=\"form-control form-control-sm\" name=\"actType\" autocomplete=\"off\"\r\n                  [class.is-invalid]=\"isControlInvalid('activityType')\"\r\n                  [class.is-valid]=\"isControlValid('activityType')\" formControlName=\"activityType\" /> -->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">Activity Title</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"actTitle\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('activityTitle')\"\r\n                                    [class.is-valid]=\"isControlValid('activityTitle')\"\r\n                                    formControlName=\"activityTitle\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">Activity Description</label>\r\n                                <textarea name=\"\" rows=\"4\" class=\"form-control form-control-sm\" name=\"actDesc\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('activityDescription')\"\r\n                                    [class.is-valid]=\"isControlValid('activityDescription')\"\r\n                                    formControlName=\"activityDescription\" style=\"resize: false;\"></textarea>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group \">\r\n                                <label class=\"form-label\">Planned Date </label>\r\n                                <div class=\"input-group \">\r\n\r\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\r\n                                        formControlName=\"planDateStr\" [matDatepicker]=\"planDateStr\" readonly>\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"planDateStr\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #planDateStr disabled=\"false\"></mat-datepicker>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">Actual Date</label>\r\n                                <div class=\"input-group \">\r\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\r\n                                        formControlName=\"actualDateStr\" [matDatepicker]=\"actualDateStr\" readonly>\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"actualDateStr\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #actualDateStr disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">Due Date</label>\r\n                                <div class=\"input-group \">\r\n                                    <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\"\r\n                                        formControlName=\"dueDateStr\" [matDatepicker]=\"dueDateStr\" readonly>\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"dueDateStr\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #dueDateStr disabled=\"false\"></mat-datepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" (click)=\"openModal('quotation')\">\r\n                                <label class=\"form-label\">Related To</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"relatedTo\"\r\n                                    autocomplete=\"off\" formControlName=\"relatedTo\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" (click)=\"viewCustomer()\">\r\n                                <label class=\"form-label\">Customer Name</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"customerName\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('customerId')\"\r\n                                    [class.is-valid]=\"isControlValid('customerId')\" formControlName=\"customerName\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\" (click)=\"viewAgent('agent')\">\r\n                                <label class=\"form-label\">Assign To</label>\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" name=\"assignName\"\r\n                                    autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('assignTo')\"\r\n                                    [class.is-valid]=\"isControlValid('assignTo')\" formControlName=\"assignName\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-label\">Status</label>\r\n                                <select class=\"form-control form-control-sm\" name=\"status\" autocomplete=\"off\"\r\n                                    [class.is-invalid]=\"isControlInvalid('status')\"\r\n                                    [class.is-valid]=\"isControlValid('status')\" formControlName=\"status\">\r\n                                    <option value=\"01\">Open</option>\r\n                                    <option value=\"02\">Complete</option>\r\n                                    <option value=\"03\">Cancel</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-default btn-elevate\" (click)=\"backLocation()\">Cancel</button>\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-elevate mx-2\">Save</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ 45560:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/activity-management-detail/pop-up-modal/related-modal.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      Select ( {{type | titlecase }} ) in list\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <!-- <form class=\"form\">  -->\r\n    <div class=\"form-group\" *ngIf=\"type == 'quotation' || type == 'policy'\">\r\n      <select class=\"form-control form-control-sm\" [(ngModel)]=\"type\" (change)=\"getDatalist()\">\r\n        <option *ngFor=\"let item of types\" value=\"{{item}}\">{{item | titlecase}}</option>\r\n      </select>\r\n    </div>\r\n      <app-material-table-view [selectable]=\"true\" [data]=\"dataList\" [colum]=\"tableData[type].ELEMENT_COL\"\r\n        [displayedColumns]=\"tableData[type].displayedColumns\" (emitter)=\"actionBtn($event)\">\r\n      </app-material-table-view>\r\n    <!-- <div class=\"table-responsive angular-bootstrap-table\">\r\n      <table class=\"table table-head-custom table-vertical-center\">\r\n        <thead>\r\n          <ng-container *ngFor=\"let item of tableData[type]\">\r\n            <th>\r\n              {{item.col}}\r\n            </th>\r\n          </ng-container>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let prod of dataList;let i = index\">\r\n            <tr (click)=\"selectedProd(prod.id || prod.empId,i)\" class=\"{{ (prod.id || prod.empId) == selected ? 'bg-primary text-white' : '' }}\"\r\n              [ngClass]=\"{'pointer': type != 'page'}\">\r\n              <ng-container *ngFor=\"let item of tableData[type]\">\r\n                <td>\r\n                  {{prod[item.key]}}\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n       </table>\r\n       </div> -->\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <!-- <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"modal.dismiss({type:'delete'})\">Delete</button> -->\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\" [disabled]=\"!selected.id && !selected.empId\">Save</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 98115:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/activity-management-detail/activity-management-detail.component.scss ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQVIiLCJmaWxlIjoiYWN0aXZpdHktbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xyXG4gICAgLmZvcm0tY29udHJvbC1zbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNEU2RUY7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDAuNzVyZW07XHJcbiAgICB9XHJcbiAgICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgIH1cclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_activity-management-detail_activity-management-detail_module_ts.js.map