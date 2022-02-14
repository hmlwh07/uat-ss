"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_products_products_component_ts"],{

/***/ 89030:
/*!***************************************************************************!*\
  !*** ./src/app/pages/products/products-modal/products-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModalComponent": () => (/* binding */ ProductsModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products-modal.component.html */ 15889);
/* harmony import */ var _products_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-modal.component.scss */ 19416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_metronic/core/services/attachment-data.service */ 63002);
/* harmony import */ var _services_products_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products-data.service */ 35618);










let ProductsModalComponent = class ProductsModalComponent {
    constructor(fb, modal, productService, fileUpload, loading) {
        this.fb = fb;
        this.modal = modal;
        this.productService = productService;
        this.fileUpload = fileUpload;
        this.loading = loading;
        this.prodId = "";
        this.prodName = "";
        this.lump = false;
        this.annually = false;
        this.subscriptions = [];
        this.oldData = {};
        this.Default_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/attachment-downloader`;
        this.statusCdOption = [
            {
                code: "01",
                value: "Draft"
            },
            {
                code: "02",
                value: "Active"
            },
        ];
    }
    ngOnInit() {
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            productName: [this.oldData.name || null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            productCode: [this.oldData.code || null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            type: [this.oldData.type || 'GENERAL', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            stamDuty: [this.oldData.stamDuty || false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            isAllowBackDate: [this.oldData.isAllowBackDate || null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            ruleDate: [this.oldData.quotationDay || null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            ruleType: [this.oldData.quotationRule || null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            policyDay: [this.oldData.policyDay || null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            policyRule: [this.oldData.policyRule || null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            statusCd: [this.oldData.statusCd || "02", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator])],
            paymentFrequency: [this.oldData.paymentFrequencyType ? this.oldData.paymentFrequencyType.split(',') : null],
            icon: [this.oldData.icon ? this.oldData.icon : null],
            smallIcon: [this.oldData.smallIcon ? this.oldData.smallIcon : null],
        });
    }
    save() {
        if (this.formGroup.valid) {
            let formData = this.formGroup.value;
            let data = {
                name: formData.productName,
                code: formData.productCode,
                type: formData.type,
                quotationDay: formData.ruleDate,
                quotationRule: formData.ruleType,
                policyDay: formData.policyDay,
                policyRule: formData.policyRule,
                paymentFrequencyType: "",
                application: false,
                quotation: false,
                isAllowBackDate: formData.isAllowBackDate,
                stamDuty: formData.stamDuty,
                statusCd: formData.statusCd
            };
            this.productService.save(data).toPromise().then(res => {
                if (res) {
                    this.modal.dismiss({ data: this.formGroup.value, type: 'save' });
                }
            });
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
    changePayment(type) {
        let value = this[type];
        let data = this.formGroup.value['paymentFrequency'] || [];
        if (value) {
            data.push(type);
        }
        else {
            let index = data.findIndex(x => x == type);
            data.splice(index, 1);
        }
        this.formGroup.controls['paymentFrequency'].setValue(data);
    }
    openFile(small = false) {
        if (small)
            this.selectedFileEl2.nativeElement.click();
        else
            this.selectedFileEl.nativeElement.click();
    }
    handleUpload(event, small = false) {
        if (event) {
            const file = event.target.files[0];
            console.log(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // console.log(reader);
                if (reader.result) {
                    let base64 = reader.result.toString().split(",")[1];
                    let data = {
                        fileStr: base64,
                        fileName: file.name,
                        fileType: file.type,
                        fileSize: file.size,
                        contentType: file.type,
                        fileExtension: file.name.split('.').pop(),
                    };
                    this.loading.activate();
                    this.fileUpload.save(data).toPromise().then((res) => {
                        if (res) {
                            if (small) {
                                this.formGroup.controls['smallIcon'].setValue(res);
                            }
                            else {
                                this.formGroup.controls['icon'].setValue(res);
                            }
                        }
                        this.loading.deactivate();
                    }).catch(e => {
                        this.loading.deactivate();
                    });
                }
                ;
            };
        }
    }
};
ProductsModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal },
    { type: _services_products_data_service__WEBPACK_IMPORTED_MODULE_5__.ProductDataService },
    { type: _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_4__.AttachmentUploadService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService }
];
ProductsModalComponent.propDecorators = {
    selectedFileEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['selectedFile',] }],
    selectedFileEl2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['selectedFile2',] }]
};
ProductsModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-products-modal',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsModalComponent);



/***/ }),

/***/ 37786:
/*!********************************************************!*\
  !*** ./src/app/pages/products/products-table.const.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCol": () => (/* binding */ ProductCol),
/* harmony export */   "ProductDisplayCol": () => (/* binding */ ProductDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 18510);

const ProductCol = [
    // {
    //   title: "Logo",
    //   type: COLTYPE.FEILD,
    //   field: "icon",
    //   isImg: true,
    // },
    {
        title: "Small Icon",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "smallIcon",
        isImg: true,
    },
    {
        title: "Product Name",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "name",
    },
    {
        title: "Product Code",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "code",
    },
    {
        title: "Type",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "type",
        isTitle: true,
    },
    // {
    //   title: "Stamp Duty",
    //   type: COLTYPE.FEILD,
    //   field: "stamDuty",
    //   isTitle: true,
    // },
    {
        title: "Allow Back Date",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "isAllowBackDate",
        isAllowBackDate: true
    },
    {
        title: "Quotation Auto Lapse Rule",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "quotationDay",
        isQuotationDay: true
    },
    {
        title: "Application Auto Lapse Rule",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "policyDay",
        isPolicyDay: true
    },
    {
        title: "Status",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "statusCd",
        isProdStatus: true
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            view: true,
            edit: true
        }
    },
];
const ProductDisplayCol = [
    // "id",
    // "icon",
    "smallIcon",
    "name",
    "code",
    "type",
    // "stamDuty",
    "isAllowBackDate",
    "quotationDay",
    'policyDay',
    "statusCd",
    "actions",
];


/***/ }),

/***/ 55099:
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products.component.html */ 75777);
/* harmony import */ var _products_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component.scss */ 72516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _products_modal_products_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-modal/products-modal.component */ 89030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/products-data.service */ 35618);
/* harmony import */ var _products_table_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-table.const */ 37786);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);










let ProductsComponent = class ProductsComponent {
    constructor(modalService, itemService, router, cdRef) {
        this.modalService = modalService;
        this.itemService = itemService;
        this.router = router;
        this.cdRef = cdRef;
        this.type = 'page';
        this.products = [];
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_products_table_const__WEBPACK_IMPORTED_MODULE_4__.ProductCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_products_table_const__WEBPACK_IMPORTED_MODULE_4__.ProductDisplayCol));
        // selected: number = -1
        this.unsubscribe = [];
        this.show = false;
    }
    ngOnInit() {
        if (this.type != 'page') {
            this.ELEMENT_COL.splice(8, 1);
            this.displayedColumns.splice(8, 1);
        }
        this.show = true;
        this.getProducts();
        // const itemScb = this.itemService.items$.subscribe(data => {
        //   this.products = data.products
        // })
        // this.unsubscribe.push(itemScb);
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
    editLayout(prod) {
        this.itemService.findOne(prod.id).toPromise().then((res) => {
            if (res) {
                this.itemService.createingProd = res;
                this.itemService.type = prod.application ? 'application' : 'quotation';
                this.router.navigateByUrl("/product-form");
            }
        });
    }
    get selected() {
        let prod;
        if (this.matTable) {
            prod = this.matTable.selection.selected[0];
        }
        return prod ? prod : { id: 0 };
    }
    createOrEdit(data, id) {
        const modalRef = this.modalService.open(_products_modal_products_modal_component__WEBPACK_IMPORTED_MODULE_2__.ProductsModalComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.prodId = id;
        modalRef.componentInstance.oldData = data || {};
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.getProducts();
                    this.cdRef.detectChanges();
                }
            }
        });
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    nextProd() {
        if (this.selected.id) {
            this.itemService.findOne(this.selected.id).toPromise().then((res) => {
                // console.log(res);
                if (res) {
                    this.modalService.dismissAll({ data: res, type: "save" });
                }
            });
        }
    }
    getProducts() {
        this.itemService.getAll().toPromise().then((res) => {
            //console.log(res);
            if (res) {
                this.products = res;
                this.cdRef.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    viewDetail(item) {
        this.itemService.selectedProd = item;
        // this.itemService.type = 'quotation'
        this.itemService.viewType = 'view';
        this.router.navigateByUrl("/product/products-config/detail");
    }
    getFreq(data) {
        let val = "";
        let ary = data.split(", ");
        for (const item of ary) {
            if (item == "lump") {
                val = val.length > 2 ? val + ", Lump Sum" : "Lump Sum";
            }
            else if (item == "annually") {
                val = val.length > 2 ? val + ", Semi Annually" : "Semi Annually";
            }
        }
        return val;
    }
    actionBtn(event) {
        if (event.cmd == 'edit') {
            this.viewDetail(event.data);
        }
        else if (event.cmd == 'view') {
            this.editLayout(event.data);
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal },
    { type: _services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef }
];
ProductsComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableViewComponent,] }]
};
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-products',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsComponent);



/***/ }),

/***/ 15889:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/products/products-modal/products-modal.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      {{prodId ? \"Edit\" : \"Create a new product\"}} {{prodName}}\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <form action=\"#\" class=\"form form-label-right\" [formGroup]=\"formGroup\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <!-- Product name -->\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Product Name</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"productName\" placeholder=\"Product name\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('productName')\"\r\n              [class.is-valid]=\"isControlValid('productName')\" formControlName=\"productName\" />\r\n            <!-- <div class=\"feedback\">Enter Your <b>Product Name</b> </div> -->\r\n          </div>\r\n          <!-- Product name -->\r\n          <!-- Product code -->\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Product Code</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"productCode\" placeholder=\"Product code\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('productCode')\"\r\n              [class.is-valid]=\"isControlValid('productCode')\" formControlName=\"productCode\" />\r\n            <!-- <div class=\"feedback\">Enter Your <b>Product Code</b></div> -->\r\n          </div>\r\n          <!-- Product code -->\r\n          <!-- Product Type -->\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Product Type</label>\r\n            <select class=\"form-control form-control-sm\" name=\"type\" placeholder=\"Product code\" autocomplete=\"off\"\r\n              [class.is-invalid]=\"isControlInvalid('type')\" [class.is-valid]=\"isControlValid('type')\"\r\n              formControlName=\"type\">\r\n              <option value=\"GENERAL\">General Insurance</option>\r\n              <option value=\"LIFE\">Life Insurance</option>\r\n            </select>\r\n            <!-- <div class=\"feedback\">Select Your <b>Product type</b></div> -->\r\n          </div>\r\n          <!-- Product Type -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"example-margin form-label\">Allow Back Date</label>\r\n            <mat-radio-group formControlName=\"isAllowBackDate\">\r\n              <mat-radio-button class=\"example-margin\" value=\"no\">No</mat-radio-button>\r\n              <mat-radio-button class=\"example-margin\" value=\"yes\">Yes</mat-radio-button>\r\n              <mat-radio-button class=\"example-margin\" value=\"30days\">Yes and max 30 days</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-6 col-form-label text-md-right\">Stamp Duty</label>\r\n            <div class=\"col-md-6 col-xl-4\">\r\n              <span class=\"switch switch-icon\">\r\n                <label>\r\n                  <input type=\"checkbox\" name=\"stamDuty\" formControlName=\"stamDuty\" />\r\n                  <span></span>\r\n                </label>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Quotation Auto Lapse Rule</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm\" name=\"ruleDate\" placeholder=\"Dates\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('ruleDate')\"\r\n              [class.is-valid]=\"isControlValid('ruleDate')\" formControlName=\"ruleDate\" />\r\n            <div class=\"feedback\">Enter Rule<b> Period</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Period Type</label>\r\n            <!-- <input type=\"text\" class=\"form-control form-control-sm\" name=\"ruleType\"\r\n              placeholder=\"Date Type\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('ruleType')\"\r\n              [class.is-valid]=\"isControlValid('ruleType')\" formControlName=\"ruleType\" /> -->\r\n            <select class=\"form-control form-control-sm\" name=\"ruleType\"\r\n              [class.is-invalid]=\"isControlInvalid('ruleType')\" [class.is-valid]=\"isControlValid('ruleType')\"\r\n              formControlName=\"ruleType\">\r\n              <option value=\"\">Please Select</option>\r\n              <option value=\"DAY\">Days</option>\r\n              <option value=\"MONTH\">Months</option>\r\n            </select>\r\n            <div class=\"feedback\">Select Rule <b>Period Type</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> &nbsp;</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"ruleDate\" autocomplete=\"off\"\r\n              value=\"after creation dates\" readonly />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Application Auto Lapse Rule</label>\r\n            <input type=\"number\" class=\"form-control form-control-sm\" name=\"policyDay\" placeholder=\"Dates\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('policyDay')\"\r\n              [class.is-valid]=\"isControlValid('policyDay')\" formControlName=\"policyDay\" />\r\n            <div class=\"feedback\">Enter Rule<b> Period</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Period Type</label>\r\n            <!-- <input type=\"text\" class=\"form-control form-control-sm\" name=\"ruleType\"\r\n              placeholder=\"Date Type\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('ruleType')\"\r\n              [class.is-valid]=\"isControlValid('ruleType')\" formControlName=\"ruleType\" /> -->\r\n            <select class=\"form-control form-control-sm\" name=\"policyRule\"\r\n              [class.is-invalid]=\"isControlInvalid('policyRule')\" [class.is-valid]=\"isControlValid('policyRule')\"\r\n              formControlName=\"policyRule\">\r\n              <option value=\"\">Please Select</option>\r\n              <option value=\"DAY\">Days</option>\r\n              <option value=\"MONTH\">Months</option>\r\n            </select>\r\n            <div class=\"feedback\">Select Rule <b>Period Type</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> &nbsp;</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"ruleDate\" autocomplete=\"off\"\r\n              value=\"after creation dates\" readonly />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Product Status</label>\r\n            <!-- <select class=\"form-control form-control-sm\" name=\"status\" placeholder=\"Product Status\"\r\n              autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('statusCd')\"\r\n              [class.is-valid]=\"isControlValid('statusCd')\" formControlName=\"statusCd\">\r\n              <option value=\"01\">Draft</option>\r\n              <option value=\"02\">Active</option>\r\n            </select> -->\r\n            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('statusCd')\"\r\n              [class.is-valid]=\"isControlValid('statusCd')\" [items]=\"statusCdOption\" bindLabel=\"value\" bindValue=\"code\"\r\n              formControlName=\"statusCd\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Upload Product Icon</label>\r\n            <div class=\"upload-icon-group\">\r\n              <div class=\"upload-icon\" (click)=\"openFile()\">\r\n                <img *ngIf=\"formGroup.value.icon\" [src]=\"Default_DOWNLOAD_URL+'/'+formGroup.value.icon\" alt=\"\" >\r\n                <ng-container *ngIf=\"!formGroup.value.icon\">\r\n                  <i class=\"flaticon-upload-1 icon-lg\"></i>\r\n                  <label>Icon</label>\r\n                </ng-container>\r\n                <input style=\"display: none;\" type=\"file\" #selectedFile (change)=\"handleUpload($event)\" />\r\n              </div>\r\n              <div class=\"upload-icon\" (click)=\"openFile(true)\">\r\n                <img *ngIf=\"formGroup.value.smallIcon\" [src]=\"Default_DOWNLOAD_URL+'/'+formGroup.value.icon\" alt=\"\">\r\n                <ng-container *ngIf=\"!formGroup.value.smallIcon\">\r\n                  <i class=\"flaticon-upload-1 icon-lg\"></i>\r\n                  <label>Small Icon</label>\r\n                </ng-container>\r\n                <input style=\"display: none;\" type=\"file\" #selectedFile2 (change)=\"handleUpload($event,true)\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <!-- <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\r\n      (click)=\"modal.dismiss({type:'delete'})\">Delete</button> -->\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\"\r\n      [disabled]=\"formGroup.invalid\">Save</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 75777:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/products/products.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom \">\n      <div class=\"card-header\">\n        <div class=\"card-title\">\n          <h3 class=\"card-label left-border-image\">List of Products</h3>\n        </div>\n        <div class=\"card-toolbar\" *ngIf=\"type == 'page'\">\n          <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"createOrEdit()\">\n            <span class=\"flaticon2-plus\"></span>\n          </button>\n          <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"createOrEdit()\">Create New Product</button> -->\n        </div>\n      </div>\n      <div class=\"card-body customer-card-body\">\n        <!-- begin:Table -->\n        <ng-container *ngIf=\"show\">\n          <app-material-table-view [selectable]=\"type != 'page'\" [data]=\"products\" [colum]=\"ELEMENT_COL\"\n            [displayedColumns]=\"displayedColumns\" (emitter)=\"actionBtn($event)\">\n          </app-material-table-view>\n        </ng-container>\n        <!-- <div class=\"table-responsive angular-bootstrap-table\">\n          <table class=\"table table-head-custom table-vertical-center\">\n            <thead>\n              <th>\n                ID\n              </th>\n              <th>\n                Product Name\n              </th>\n              <th>\n                Product Code\n              </th>\n              <th>\n                Type\n              </th>\n              <th>\n                Stamp Duty\n              </th>\n              <th>\n                Allow Back Date\n              </th>\n              <th>\n                Quotation Auto Lapse Rule\n              </th>\n              <th>\n                Payment Frequency\n              </th>\n              <ng-container *ngIf=\"type == 'page'\">\n                <th>\n                  Actions\n                </th>\n              </ng-container>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let prod of products;let i = index\">\n                <tr (click)=\"selectedProd(i)\" class=\"{{ i == selected ? 'bg-primary text-white' : '' }}\"\n                  [ngClass]=\"{'pointer': type != 'page'}\">\n                  <td>{{i+1}}</td>\n                  <td>{{prod.name}}</td>\n                  <td>{{prod.code}}</td>\n                  <td>{{prod.type | titlecase}}</td>\n                  <td>{{prod.stamDuty+ \"\" | titlecase}}</td>\n                  <td>{{prod.isAllowBackDate == \"30days\" ? \"30 days\" : (prod.isAllowBackDate | titlecase) }}</td>\n                  <td> {{prod.quotationDay}} {{(prod.quotationRule+\"s\") | lowercase}} after creation dates</td>\n                  <td>{{getFreq(prod.paymentFrequencyType)}}</td>\n                  <ng-container *ngIf=\"type == 'page'\">\n\n                    <td style=\"white-space: nowrap;\">\n                      <ng-container *ngIf=\"prod.application || prod.quotation\">\n                        <a title=\"Edit Form Page\" class=\"btn btn-icon btn-light btn-hover-primary btn-sm mx-3\"\n                          (click)=\"editLayout(prod)\">\n                          <span [inlineSVG]=\"'./assets/media/svg/icons/General/Visible.svg'\" [cacheSVG]=\"true\"\n                            class=\"svg-icon svg-icon-md svg-icon-primary\">\n                          </span>\n                        </a>\n                      </ng-container>\n                      <a title=\"View Product Detail\" class=\"btn btn-icon btn-light btn-hover-primary btn-sm mx-3\"\n                        (click)=\"viewDetail(prod)\">\n                        <span [inlineSVG]=\"\n                        './assets/media/svg/icons/Communication/Write.svg'\" aria-label=\"View Product Detail\"\n                          [cacheSVG]=\"true\" class=\"svg-icon svg-icon-md svg-icon-primary\">\n                        </span>\n                      </a>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </div> -->\n        <!-- end: Table -->\n      </div>\n      <ng-container *ngIf=\"type != 'page'\">\n        <div class=\"card-footer\">\n          <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\"\n            [disabled]=\"!selected.id\">Next</button>\n        </div>\n      </ng-container>\n    </div>\n  </div>");

/***/ }),

/***/ 19416:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/products/products-modal/products-modal.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".upload-icon-group {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.upload-icon {\n  display: flex;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  border: 1px dashed #333;\n  flex-direction: column;\n  justify-content: center;\n  grid-gap: 5px;\n  gap: 5px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.upload-icon img {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQURFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFHSiIsImZpbGUiOiJwcm9kdWN0cy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtaWNvbi1ncm91cHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuLnVwbG9hZC1pY29ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMzMzO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGltZ3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 72516:
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_products_products_component_ts.js.map