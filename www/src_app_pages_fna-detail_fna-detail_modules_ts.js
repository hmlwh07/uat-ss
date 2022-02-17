"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fna-detail_fna-detail_modules_ts"],{

/***/ 27738:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer-detail/customer.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);





const API_CUSTOMER_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/customer`;
let CustomerService = class CustomerService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_CUSTOMER_URL);
        this.httpClient = httpClient;
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CustomerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ 59:
/*!************************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset-manage.dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeStatus": () => (/* binding */ IncomeStatus),
/* harmony export */   "AssectDto": () => (/* binding */ AssectDto)
/* harmony export */ });
var IncomeStatus;
(function (IncomeStatus) {
})(IncomeStatus || (IncomeStatus = {}));
class AssectDto {
    constructor() {
        this.protect = false;
    }
}


/***/ }),

/***/ 82732:
/*!****************************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset-manage.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANAssetService": () => (/* binding */ FANAssetService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);





const API_ADDON_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/fna`;
let FANAssetService = class FANAssetService extends src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getAllAsset(fnaId) {
        return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/asset');
    }
    saveAsset(data) {
        return this.httpClient.post(API_ADDON_URL + '/asset', data);
    }
    deleteAssetById(id) {
        return this.httpClient.delete(API_ADDON_URL + '/asset/' + id);
    }
    updateAsset(data) {
        return this.httpClient.put(API_ADDON_URL + '/asset/', data);
    }
};
FANAssetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FANAssetService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FANAssetService);



/***/ }),

/***/ 63412:
/*!***********************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetComponent": () => (/* binding */ AssetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_asset_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./asset.component.html */ 50631);
/* harmony import */ var _asset_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset.component.scss */ 88722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 53489);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-constant */ 25674);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fna-manage.service */ 60865);
/* harmony import */ var _asset_manage_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-manage.dto */ 59);
/* harmony import */ var _asset_manage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset-manage.service */ 82732);












let AssetComponent = class AssetComponent {
    constructor(fb, cdf, alertService, fnaAssetService, fnaService) {
        this.fb = fb;
        this.cdf = cdf;
        this.alertService = alertService;
        this.fnaAssetService = fnaAssetService;
        this.fnaService = fnaService;
        this.fnaAssets = null;
        this.fnaId = null;
        this.customerId = null;
        this.changeAnalysis = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.selectedIndex = 0;
        this.assects = new Array();
        this.assectDto = new _asset_manage_dto__WEBPACK_IMPORTED_MODULE_7__.AssectDto();
        this.objIndex = null;
        this.index = 0;
        this.isNext = true;
        this.isAssetType = false;
        this.products = [];
        this.assectTypes = [{ typeCode: "building", typeValue: "Building" }, { typeCode: "motor", typeValue: "Motor" }, { typeCode: "others", typeValue: "Others" }];
    }
    ngOnInit() {
        this.loadForm();
        this.assectDto.fnaId = this.fnaId;
        if (this.fnaService.fnaAssect) {
            this.assects = this.fnaService.fnaAssect;
            _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.assects;
        }
        if (this.fnaService.fnaUpdateProducts) {
            this.products = this.fnaService.fnaUpdateProducts;
        }
        this.getAllAsset();
        this.checkNextChild();
    }
    getAllAsset() {
        if (this.assects.length > 0) {
            if (this.selectedIndex == 0) {
                this.assectDto = this.assects[0];
                this.assectDto.costText = this.fnaService.mathRoundTo(this.assects[0].cost, 2);
            }
            else {
                this.assectDto = this.assects[this.selectedIndex];
                if (!this.assectDto) {
                    this.assectDto = new _asset_manage_dto__WEBPACK_IMPORTED_MODULE_7__.AssectDto();
                }
                else {
                    this.assectDto.costText = this.fnaService.mathRoundTo(this.assects[this.selectedIndex].cost, 2);
                }
            }
            this.loadForm();
            this.cdf.detectChanges();
        }
    }
    saveAsset() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formGroup.value.assetType == 'others') {
                this.addValidate('remark');
            }
            else {
                this.removeValidate('remark');
            }
            if (this.formGroup.invalid) {
                (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__.validateAllFields)(this.formGroup);
            }
            else {
                if (this.formGroup.value.assetType != 'others') {
                    this.formGroup.value.remark = "";
                }
                if (this.formGroup.value.assetType == 'motor' || this.formGroup.value.assetType == 'building') {
                    if (this.formGroup.value.assetType == 'motor') {
                        this.products.push.apply(this.products, this.fnaService.getFNAProduct('Asset', 'Motor'));
                    }
                    if (this.formGroup.value.assetType == 'building') {
                        this.products.push.apply(this.products, this.fnaService.getFNAProduct('Asset', 'Fire'));
                    }
                    this.products = this.removeDuplicates(this.products);
                    this.fnaService.fnaUpdateProducts.concat(this.products);
                    let reqBody = {
                        customerId: this.customerId,
                        fnaType: "LPP",
                        grandDiscount: 0,
                        highDiscount: 0,
                        id: this.fnaId,
                        products: this.products
                    };
                    yield this.fnaService.updateFNAProduct(reqBody).toPromise().then((res) => {
                        if (res) {
                        }
                    });
                }
                if (this.formGroup.value.id) {
                    yield this.fnaAssetService.updateAsset(this.formGroup.value).toPromise().then((res) => {
                        if (res) {
                            this.assects[this.selectedIndex] = this.formGroup.value;
                            this.alertService.activate('This record was updated', 'Success Message');
                        }
                    });
                }
                else {
                    yield this.fnaAssetService.saveAsset(this.formGroup.value).toPromise().then((res) => {
                        if (res) {
                            this.assects[this.selectedIndex] = this.formGroup.value;
                            this.assects[this.selectedIndex].id = res;
                            this.assectDto = new _asset_manage_dto__WEBPACK_IMPORTED_MODULE_7__.AssectDto();
                            this.loadForm();
                            this.alertService.activate('This record was created', 'Success Message');
                        }
                    });
                }
                //this.selectedIndex++;
                this.getAllAsset();
            }
            this.checkNextChild();
            _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.assects;
        });
    }
    removeDuplicates(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }
    backAction() {
        this.isNext = false;
        if (this.selectedIndex == 0) {
            this.changeAnalysis.emit('aboutLLP');
        }
        else {
            this.selectedIndex--;
            this.assectDto = this.assects[this.selectedIndex];
            this.loadForm();
        }
        this.checkNextChild();
    }
    loadForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
            assetType: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.assetType),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.cost || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.nullValidator]),
            costText: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.costText || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.nullValidator]),
            fnaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.fnaId),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.id || 0),
            protect: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.protect),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.remark || ''),
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.createdAt || ''),
            updatedAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.assectDto.updatedAt || '')
        });
        this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
        this.cdf.detectChanges();
    }
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    deleteAsset() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let deleteIndex = [];
            if (this.assectDto.id) {
                yield this.fnaAssetService.deleteAssetById(this.assectDto.id).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    if (res) {
                        if (this.formGroup.value.assetType == 'motor' || this.formGroup.value.assetType == 'building') {
                            if (this.formGroup.value.assetType == 'motor') {
                                deleteIndex = this.assects.filter(item => item.assetType == 'motor');
                                if (deleteIndex.length == 1) {
                                    this.products = this.products.filter(item => item !== this.fnaService.getFNAProduct('Asset', 'Motor')[0]);
                                }
                            }
                            if (this.formGroup.value.assetType == 'building') {
                                deleteIndex = this.assects.filter(item => item.assetType == 'building');
                                if (deleteIndex.length == 1) {
                                    this.products = this.products.filter(item => item !== this.fnaService.getFNAProduct('Asset', 'Fire')[0]);
                                }
                            }
                            if (deleteIndex.length == 1) {
                                this.products = this.removeDuplicates(this.products);
                                this.fnaService.fnaUpdateProducts.concat(this.products);
                                let reqBody = {
                                    customerId: this.customerId,
                                    fnaType: "LPP",
                                    grandDiscount: 0,
                                    highDiscount: 0,
                                    id: this.fnaId,
                                    products: this.products
                                };
                                yield this.fnaService.updateFNAProduct(reqBody).toPromise().then((res) => {
                                    if (res) {
                                    }
                                });
                            }
                        }
                        this.assects = this.assects.filter(item => item.id !== this.assectDto.id);
                        this.getAllAsset();
                    }
                }));
                this.checkNextChild();
                _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.assects;
            }
        });
    }
    updateCommaInput(ev) {
        var num = this.fnaService.getNumber(ev.target.value);
        if (num == 0) {
            this.formGroup.controls['cost'].setValue('');
            this.formGroup.controls['costText'].setValue('');
        }
        else {
            this.formGroup.controls['cost'].setValue(num);
            this.formGroup.controls['costText'].setValue(num.toLocaleString());
        }
    }
    addAssets(typeCode) {
        let obj = {
            typeCode: '',
            typeValue: '',
        };
        if (typeCode == 'motor') {
            obj.typeCode = 'motor';
            obj.typeValue = 'Motor';
        }
        if (typeCode == 'building') {
            obj.typeCode = 'building';
            obj.typeValue = 'Building';
        }
        if (typeCode == 'others') {
            obj.typeCode = 'others';
            obj.typeValue = 'Others';
        }
        this.assectTypes.push(obj);
    }
    backToStartAction() {
        this.changeAnalysis.emit('aboutLLP');
    }
    viewAll() {
        if (this.assects.length > 0) {
            this.fnaService.openModal('Asset');
        }
    }
    addChild() {
        this.selectedIndex++;
        this.getAllAsset();
    }
    removeValidate(formControlName) {
        this.formGroup.get(formControlName).clearValidators();
        this.formGroup.get(formControlName).updateValueAndValidity();
    }
    addValidate(formControlName) {
        this.formGroup.get(formControlName).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
        this.formGroup.get(formControlName).updateValueAndValidity();
    }
    checkNextChild() {
        let next = this.assects.length;
        this.nextCount = next;
    }
};
AssetComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _asset_manage_service__WEBPACK_IMPORTED_MODULE_8__.FANAssetService },
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__.FANService }
];
AssetComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableViewComponent,] }],
    fnaAssets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    fnaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    changeAnalysis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
AssetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-asset',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_asset_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_asset_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssetComponent);



/***/ }),

/***/ 49774:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/chart-analysis.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartAnalysisComponent": () => (/* binding */ ChartAnalysisComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chart_analysis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chart-analysis.component.html */ 30638);
/* harmony import */ var _chart_analysis_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-analysis.component.scss */ 86894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);





let ChartAnalysisComponent = class ChartAnalysisComponent {
    constructor(fb) {
        this.fb = fb;
        this.fnaSwitch = 'aboutLLP';
        this.selected = '';
        this.productSwitch = 'product';
    }
    ngOnInit() {
        this.loadForm();
    }
    switchEvent(type) {
        this.selected = type;
    }
    backAction() {
        this.selected = '';
    }
    fnaSwitchEvent(type) {
        this.fnaSwitch = type;
        this.productSwitch = type;
        if (type == 'product') {
        }
        else {
        }
    }
    previous(type) {
        this.fnaSwitch = type;
    }
    saveProduct(type) {
        this.productSwitch = type;
    }
    loadForm() {
        this.formGroup = this.fb.group({
            isAllowBackDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.nullValidator])],
        });
    }
};
ChartAnalysisComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
ChartAnalysisComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-chart-analysis',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chart_analysis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chart_analysis_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChartAnalysisComponent);



/***/ }),

/***/ 24617:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/llp-analysis/llp-analysis.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LlpAnalysisComponent": () => (/* binding */ LlpAnalysisComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_llp_analysis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./llp-analysis.component.html */ 15668);
/* harmony import */ var _llp_analysis_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./llp-analysis.component.scss */ 75789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fna-manage.service */ 60865);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _income_income_manage_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../income/income-manage.dto */ 98849);
/* harmony import */ var _retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../retirement/retirement-manage.dto */ 48921);








let LlpAnalysisComponent = class LlpAnalysisComponent {
    constructor(fnaService, cdf, modalService) {
        this.fnaService = fnaService;
        this.cdf = cdf;
        this.modalService = modalService;
        this.aboutLLP = null;
        this.customerId = null;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.fnaEducations = [];
        this.fnaRetirementSaving = null;
        this.fnaIncome = null;
        this.fnaHealths = [];
        this.fnaAssets = [];
        this.freedom = [];
        this.fnaProduct = [];
        this.bgColor = 'progress-middle';
        this.percentage = '';
        this.totalPercentage = 0;
        this.percentageText = 0;
        this.totalPercentageText = '';
        this.products = [];
        this.isValue = false;
    }
    ngOnInit() {
        this.oldId = this.aboutLLP;
        if (this.fnaService.fnaUpdateProducts) {
            this.products = this.fnaService.fnaUpdateProducts;
        }
        if (this.oldId) {
            this.getFNAById();
        }
    }
    getFNAById() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isValue = false;
            this.fnaProduct = [];
            this.products = [];
            this.fnaService.fnaUpdateProducts = [];
            this.fnaService.fnaIncome = new _income_income_manage_dto__WEBPACK_IMPORTED_MODULE_3__.IncomeDto();
            this.fnaService.fnaRetirementSaving = new _retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_4__.RetirementDto();
            this.fnaService.fnaHealths = new Array();
            this.fnaService.fnaEducations = new Array();
            this.fnaService.fnaAssect = new Array();
            this.fnaService.fnaProduct = new Array();
            this.fnaService.percentage = '';
            this.fnaService.totalPercentageText = '';
            this.fnaService.bgColor = '';
            this.fnaService.fnaUpdateProducts = new Array();
            this.fnaService.fnaTextColor = null;
            yield this.fnaService.findOne(this.oldId).toPromise().then(res => {
                console.log('getFNAById llp', res);
                if (res) {
                    if (res.fnaAssets.length > 0 && res.fnaEducations.length &&
                        res.fnaHealths.length > 0 && res.fnaIncome != null &&
                        res.fnaRetirementSaving != null) {
                        this.freedom.push({ hasData: true });
                    }
                    this.fnaIncome = res.fnaIncome;
                    this.fnaService.fnaIncome = this.fnaIncome;
                    this.fnaRetirementSaving = res.fnaRetirementSaving;
                    this.fnaService.fnaRetirementSaving = this.fnaRetirementSaving;
                    this.fnaHealths = res.fnaHealths;
                    this.fnaService.fnaHealths = this.fnaHealths;
                    this.fnaProduct = res.products;
                    this.fnaService.fnaProduct = this.fnaProduct;
                    this.fnaEducations = res.fnaEducations;
                    if (this.fnaEducations.length == 0) {
                        this.fnaService.fnaHealths = this.fnaHealths;
                    }
                    else {
                        this.fnaService.fnaEducations = this.fnaEducations;
                    }
                    this.fnaAssets = res.fnaAssets;
                    this.fnaService.fnaAssect = this.fnaAssets;
                    this.fnaService.fnaUpdateProducts = this.fnaProduct;
                    if (this.fnaAssets.length > 0) {
                        this.totalPercentage += 20;
                    }
                    if (this.fnaEducations.length > 0) {
                        this.totalPercentage += 20;
                    }
                    if (this.fnaHealths.length > 0) {
                        this.totalPercentage += 20;
                    }
                    if (this.fnaIncome) {
                        this.totalPercentage += 20;
                    }
                    if (this.fnaRetirementSaving) {
                        this.totalPercentage += 20;
                    }
                    this.percentage = this.totalPercentage.toString() + '%';
                    if (this.totalPercentage == 20 || this.totalPercentage == 40 ||
                        this.totalPercentage == 60 || this.totalPercentage == 80 || this.totalPercentage == 100) {
                        this.percentageText = -50;
                    }
                    this.totalPercentageText = this.percentageText.toString() + '%';
                    if (this.totalPercentage == 0) {
                        this.bgColor = 'progress-lower';
                        this.fnaTextColor = null;
                    }
                    else if (this.totalPercentage == 100) {
                        this.bgColor = 'progress-upper';
                        this.fnaTextColor = 100;
                    }
                    else {
                        this.bgColor = 'progress-middle';
                        this.fnaTextColor = null;
                    }
                    this.fnaService.percentage = this.percentage;
                    this.fnaService.totalPercentageText = this.totalPercentageText;
                    this.fnaService.bgColor = this.bgColor;
                    this.fnaService.fnaTextColor = this.fnaTextColor;
                    this.change.emit('aboutLLP');
                    this.cdf.detectChanges();
                }
                this.isValue = true;
            });
        });
    }
    fnaSwitchEvent(type) {
        if (this.isValue) {
            this.fnaSwitch = type;
            this.change.emit(type);
            if (this.products.length > 0) {
                this.update();
            }
        }
    }
    actionChart(type) {
    }
    update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.products = this.removeDuplicates(this.products);
            this.fnaService.fnaUpdateProducts.concat(this.products);
            let reqBody = {
                customerId: this.customerId,
                fnaType: "LPP",
                grandDiscount: 0,
                highDiscount: 0,
                id: this.oldId,
                products: this.products
            };
            yield this.fnaService.updateFNAProduct(reqBody).toPromise().then((res) => {
                if (res) {
                }
            });
        });
    }
    removeDuplicates(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }
};
LlpAnalysisComponent.ctorParameters = () => [
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_2__.FANService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal }
];
LlpAnalysisComponent.propDecorators = {
    aboutLLP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
LlpAnalysisComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-llp-analysis',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_llp_analysis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_llp_analysis_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LlpAnalysisComponent);



/***/ }),

/***/ 55706:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/product-analysis/product-analysis.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAnalysisComponent": () => (/* binding */ ProductAnalysisComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_analysis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-analysis.component.html */ 59963);
/* harmony import */ var _product_analysis_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-analysis.component.scss */ 10062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 32354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../customer-detail/customer.service */ 27738);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../products/services/products-data.service */ 35618);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../fna-manage.service */ 60865);
/* harmony import */ var _product_manage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-manage.service */ 65203);













let ProductAnalysisComponent = class ProductAnalysisComponent {
    constructor(fnaService, fnaProductService, alertService, prodctService, customerService, router) {
        this.fnaService = fnaService;
        this.fnaProductService = fnaProductService;
        this.alertService = alertService;
        this.prodctService = prodctService;
        this.customerService = customerService;
        this.router = router;
        this.product = null;
        this.fnaId = null;
        this.customerId = null;
        this.passValue = {};
        this.changeProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.productSwitch = 'product';
        this.Default_DOWNLOAD_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/attachment-downloader`;
        this.fnaProducts = [];
        this.products = [];
    }
    ngOnInit() {
        if (this.fnaService.fnaProduct) {
            this.fnaProducts = this.fnaService.fnaProduct;
            for (var i = 0; i < this.fnaProducts.length; i++) {
                if (this.fnaProducts[i].icon) {
                    this.fnaProducts[i].productImage = this.Default_DOWNLOAD_URL + '/' + this.fnaProducts[i].icon;
                }
            }
        }
        if (this.fnaService.fnaUpdateProducts) {
            this.products = this.fnaService.fnaUpdateProducts;
        }
    }
    previous(type) {
        this.changeProduct.emit(type);
    }
    saveProduct(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.productSwitch = type;
            this.products = this.removeDuplicates(this.products);
            this.fnaService.fnaUpdateProducts.concat(this.products);
            let reqBody = {
                customerId: this.customerId,
                fnaType: "LPP",
                grandDiscount: 0,
                highDiscount: 0,
                id: this.fnaId,
                products: this.products
            };
            yield this.fnaService.updateFNAProduct(reqBody).toPromise().then((res) => {
                if (res) {
                    this.alertService.activate('This record was updated', 'Success Message').then(result => {
                        this.previous('aboutLLP');
                    });
                }
            });
        });
    }
    removeDuplicates(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }
    display(product) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this.prodctService.findOne(product.id), this.customerService.findOne(this.customerId || 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(e => { return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(undefined); }))]).toPromise().then((res) => {
            if (res) {
                this.prodctService.createingProd = res[0];
                this.prodctService.creatingCustomer = res[1];
                this.prodctService.type = res[0].code == "CLFR01" || res[0].code == "PLMO02" || res[0].code == "PLTR01" ? 'policy' : "quotation";
                this.prodctService.viewType = res[0].code == "CLFR01" || res[0].code == "PLMO02" || res[0].code == "PLTR01" ? 'policy' : "quotation";
                this.prodctService.referenceID = null;
                this.prodctService.creatingLeadId = this.passValue.leadId;
                this.router.navigateByUrl("/product-form");
            }
        });
    }
};
ProductAnalysisComponent.ctorParameters = () => [
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__.FANService },
    { type: _product_manage_service__WEBPACK_IMPORTED_MODULE_7__.FANProductService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_5__.ProductDataService },
    { type: _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_4__.CustomerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router }
];
ProductAnalysisComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    fnaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    passValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    changeProduct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
ProductAnalysisComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-product-analysis',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_analysis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_analysis_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductAnalysisComponent);



/***/ }),

/***/ 65203:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/product-analysis/product-manage.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANProductService": () => (/* binding */ FANProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);





const API_ADDON_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/fna`;
let FANProductService = class FANProductService extends src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getAllAsset(fnaId) {
        return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/asset');
    }
    saveAsset(data) {
        return this.httpClient.post(API_ADDON_URL + '/asset', data);
    }
    deleteAssetById(id) {
        return this.httpClient.delete(API_ADDON_URL + '/asset/' + id);
    }
    updateAsset(data) {
        return this.httpClient.put(API_ADDON_URL + '/asset/', data);
    }
};
FANProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FANProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FANProductService);



/***/ }),

/***/ 26771:
/*!********************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education-manage.dto.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeStatus": () => (/* binding */ IncomeStatus),
/* harmony export */   "EducationDto": () => (/* binding */ EducationDto),
/* harmony export */   "MONTHLY_PREMIUM_RATE": () => (/* binding */ MONTHLY_PREMIUM_RATE)
/* harmony export */ });
var IncomeStatus;
(function (IncomeStatus) {
})(IncomeStatus || (IncomeStatus = {}));
class EducationDto {
}
const MONTHLY_PREMIUM_RATE = [
    { age: 18, nine: 16.0, eleven: 11.0, fourteen: 7.5 },
    { age: 19, nine: 16.0, eleven: 11.0, fourteen: 7.5 },
    { age: 20, nine: 16.1, eleven: 11.0, fourteen: 7.5 },
    { age: 21, nine: 16.1, eleven: 11.1, fourteen: 7.6 },
    { age: 22, nine: 16.1, eleven: 11.1, fourteen: 7.6 },
    { age: 23, nine: 16.2, eleven: 11.1, fourteen: 7.6 },
    { age: 24, nine: 16.3, eleven: 11.3, fourteen: 7.8 },
    { age: 25, nine: 16.4, eleven: 11.3, fourteen: 7.8 },
    { age: 26, nine: 16.4, eleven: 11.4, fourteen: 7.9 },
    { age: 27, nine: 16.5, eleven: 11.4, fourteen: 7.9 },
    { age: 28, nine: 16.5, eleven: 11.5, fourteen: 8.0 },
    { age: 29, nine: 16.7, eleven: 11.5, fourteen: 8.0 },
    { age: 30, nine: 16.8, eleven: 11.7, fourteen: 8.2 },
    { age: 31, nine: 16.8, eleven: 11.7, fourteen: 8.2 },
    { age: 32, nine: 16.9, eleven: 11.8, fourteen: 8.3 },
    { age: 33, nine: 16.9, eleven: 11.8, fourteen: 8.3 },
    { age: 34, nine: 17.1, eleven: 12.0, fourteen: 8.5 },
    { age: 35, nine: 17.2, eleven: 12.1, fourteen: 8.5 },
    { age: 36, nine: 17.2, eleven: 12.1, fourteen: 8.6 },
    { age: 37, nine: 17.3, eleven: 12.3, fourteen: 8.6 },
    { age: 38, nine: 17.4, eleven: 12.4, fourteen: 8.8 },
    { age: 39, nine: 17.5, eleven: 12.5, fourteen: 8.8 },
    { age: 40, nine: 17.6, eleven: 12.5, fourteen: 8.9 },
    { age: 41, nine: 17.6, eleven: 12.6, fourteen: 9.0 },
    { age: 42, nine: 17.8, eleven: 12.8, fourteen: 9.1 },
    { age: 43, nine: 17.9, eleven: 12.9, fourteen: 9.2 },
    { age: 44, nine: 18.0, eleven: 13.0, fourteen: 9.3 },
    { age: 45, nine: 18.2, eleven: 13.2, fourteen: 9.5 },
    { age: 46, nine: 18.3, eleven: 13.3, fourteen: 9.7 },
    { age: 47, nine: 18.6, eleven: 13.5, fourteen: 9.9 },
    { age: 48, nine: 18.7, eleven: 13.7, fourteen: 10.2 },
    { age: 49, nine: 19.0, eleven: 13.9, fourteen: 10.4 },
    { age: 50, nine: 19.2, eleven: 14.2, fourteen: 10.7 },
    { age: 51, nine: 19.5, eleven: 14.5, fourteen: 11.0 },
    { age: 52, nine: 19.8, eleven: 14.8, fourteen: 0 },
    { age: 53, nine: 20.2, eleven: 15.2, fourteen: 0 },
    { age: 54, nine: 20.6, eleven: 15.6, fourteen: 0 },
    { age: 55, nine: 21.1, eleven: 0, fourteen: 0 },
    { age: 56, nine: 21.6, eleven: 0, fourteen: 0 }
];


/***/ }),

/***/ 97326:
/*!************************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education-manage.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANEducationService": () => (/* binding */ FANEducationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _education_manage_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-manage.dto */ 26771);






const API_ADDON_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/fna`;
let FANEducationService = class FANEducationService extends src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getAllEducation(fnaId) {
        return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/education');
    }
    saveEducation(data) {
        return this.httpClient.post(API_ADDON_URL + '/education', data);
    }
    deleteDeleteById(id) {
        return this.httpClient.delete(API_ADDON_URL + '/education/' + id);
    }
    updateEducation(data) {
        return this.httpClient.put(API_ADDON_URL + '/education', data);
    }
    getFNAEducationPremiumRate(age, trem) {
        let premiumRate = [];
        let rate;
        premiumRate = _education_manage_dto__WEBPACK_IMPORTED_MODULE_2__.MONTHLY_PREMIUM_RATE.filter(data => data.age == age);
        if (trem == 9) {
            rate = premiumRate[0].nine;
        }
        if (trem == 11) {
            rate = premiumRate[0].eleven;
        }
        if (trem == 14) {
            rate = premiumRate[0].fourteen;
        }
        return rate;
    }
};
FANEducationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
FANEducationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], FANEducationService);



/***/ }),

/***/ 23311:
/*!*******************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationComponent": () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./education.component.html */ 52816);
/* harmony import */ var _education_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education.component.scss */ 38910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 53489);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-constant */ 25674);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fna-manage.service */ 60865);
/* harmony import */ var _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education-manage.dto */ 26771);
/* harmony import */ var _education_manage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education-manage.service */ 97326);












let EducationComponent = class EducationComponent {
    constructor(fb, cdf, fnaService, fnaEducationService, alertService) {
        this.fb = fb;
        this.cdf = cdf;
        this.fnaService = fnaService;
        this.fnaEducationService = fnaEducationService;
        this.alertService = alertService;
        this.education = null;
        this.fnaId = null;
        this.customerId = null;
        this.changeAnalysis = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.selectedIndex = 0;
        this.educationDto = new _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__.EducationDto();
        this.educations = new Array();
        this.healths = new Array();
        this.selectedIndexId = 0;
        this.products = [];
        this.fromMinDate = null;
        this.fromMaxDate = new Date();
        this.nextCount = 0;
    }
    ngOnInit() {
        this.education = new _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__.EducationDto();
        this.healths = [];
        this.educations = [];
        this.loadForm();
        if (this.fnaService.fnaHealths) {
            this.healths = this.fnaService.fnaHealths;
        }
        if (this.fnaService.fnaHealths) {
            this.healths.splice(0, 1);
            this.healths.splice(0, 1);
        }
        this.educations = this.fnaService.fnaEducations;
        _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.educations;
        if (this.educations.length > 0) {
            this.healths = [];
        }
        this.getAllEducation();
        if (this.fnaService.fnaUpdateProducts) {
            this.products = this.fnaService.fnaUpdateProducts;
        }
        this.checkNextChild();
    }
    backAction() {
        if (this.selectedIndex == 0) {
            this.changeAnalysis.emit('aboutLLP');
        }
        else {
            this.selectedIndex--;
            this.setEducation(this.educations[this.selectedIndex]);
        }
        this.checkNextChild();
    }
    loadForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            childName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.childName),
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.createdAt),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.dateOfBirth, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.nullValidator]),
            educationExpense: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.educationExpense, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.nullValidator]),
            fnaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.fnaId),
            highEducation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.highEducation),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.id),
            sumAssured: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.sumAssured || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.nullValidator]),
            updatedAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.educationDto.updatedAt),
        });
        this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
        this.cdf.detectChanges();
    }
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    saveEducation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let isSave = false;
            if (this.formGroup.invalid) {
                (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.formGroup);
            }
            else {
                if (this.formGroup.value.id) {
                    yield this.fnaEducationService.updateEducation(this.getEducation()).toPromise().then((res) => {
                        if (res) {
                            isSave = false;
                            this.educations[this.selectedIndex] = this.getEducation();
                            this.alertService.activate('This record was updated', 'Success Message');
                        }
                    });
                }
                else {
                    yield this.fnaEducationService.saveEducation(this.getEducation()).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                        if (res) {
                            isSave = true;
                            this.educations[this.selectedIndex] = this.getEducation();
                            this.educations[this.selectedIndex].id = res;
                            this.selectedIndexId = res;
                            if (this.selectedIndex == 0) {
                                this.products.push.apply(this.products, this.fnaService.getFNAProduct('Education', ''));
                                this.products = this.removeDuplicates(this.products);
                                this.fnaService.fnaUpdateProducts.concat(this.products);
                                let reqBody = {
                                    customerId: this.customerId,
                                    fnaType: "LPP",
                                    grandDiscount: 0,
                                    highDiscount: 0,
                                    id: this.fnaId,
                                    products: this.products
                                };
                                yield this.fnaService.updateFNAProduct(reqBody).toPromise().then((res) => {
                                    if (res) {
                                    }
                                });
                            }
                            this.alertService.activate('This record was created', 'Success Message');
                        }
                    }));
                }
                this.education = new _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__.EducationDto();
                this.loadForm();
                //this.selectedIndex++;
                let obj = this.educations[this.selectedIndex];
                if (obj) {
                    this.setEducation(this.educations[this.selectedIndex]);
                }
                // if (this.educations.length < this.healths.length) {
                //   this.formGroup.controls['childName'].setValue(this.healths[this.selectedIndex].name);
                //   if (this.healths[this.selectedIndex].dateOfBirth) {
                //     this.formGroup.controls['dateOfBirth'].setValue(this.formatDateDDMMYYY(this.healths[this.selectedIndex].dateOfBirth));
                //   } else {
                //     this.formGroup.controls['dateOfBirth'].setValue(null);
                //   }
                // }
                this.checkNextChild();
                _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.educations;
            }
        });
    }
    removeDuplicates(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }
    getAllEducation() {
        if (this.educations.length > 0) {
            if (this.selectedIndex == 0) {
                this.setEducation(this.educations[0]);
            }
            else {
                this.education = this.educations[this.selectedIndex];
                if (this.education) {
                    this.setEducation(this.educations[this.selectedIndex]);
                    this.cdf.detectChanges();
                }
                else {
                    this.education = new _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__.EducationDto();
                    this.loadForm();
                }
            }
        }
        else {
            this.education = new _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__.EducationDto();
            this.loadForm();
        }
        if (this.educations.length < this.healths.length) {
            this.formGroup.controls['childName'].setValue(this.healths[this.selectedIndex].name);
            if (this.healths[this.selectedIndex].dateOfBirth) {
                this.formGroup.controls['dateOfBirth'].setValue(this.formatDateYYYYMMDD(this.healths[this.selectedIndex].dateOfBirth));
            }
            else {
                this.formGroup.controls['dateOfBirth'].setValue(null);
            }
        }
    }
    formatDateYYYYMMDD(date) {
        var d = new Date(date.split("/").reverse().join("/")), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    formatDateDDMMYYY(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    }
    getEducation() {
        let dateOfBirth = null;
        if (this.formGroup.value.dateOfBirth) {
            dateOfBirth = this.formatDateYYYYMMDD(this.formGroup.value.dateOfBirth);
        }
        let educationExpense = null;
        if (this.formGroup.value.educationExpense) {
            educationExpense = Number(this.formGroup.value.educationExpense.replace(/,/g, ''));
        }
        let sumAssured = 0;
        if (this.formGroup.value.sumAssured) {
            sumAssured = Number(this.formGroup.value.sumAssured.replace(/,/g, ''));
        }
        let education = {
            childName: this.formGroup.value.childName,
            createdAt: this.formGroup.value.createdAt,
            dateOfBirth: dateOfBirth,
            educationExpense: Number(educationExpense),
            fnaId: this.formGroup.value.fnaId,
            highEducation: this.formGroup.value.highEducation,
            id: this.formGroup.value.id,
            sumAssured: Number(sumAssured),
            updatedAt: this.formGroup.value.updatedAt,
        };
        return education;
    }
    setEducation(data) {
        let dateOfBirth = null;
        if (data.dateOfBirth != null) {
            dateOfBirth = this.formatDateYYYYMMDD(data.dateOfBirth);
        }
        else {
            dateOfBirth = null;
        }
        if (data.educationExpense == 0) {
            data.educationExpense = null;
        }
        if (data.id) {
            this.selectedIndexId = data.id;
        }
        else {
            this.selectedIndexId = 0;
        }
        this.formGroup.controls['childName'].setValue(data.childName);
        this.formGroup.controls['dateOfBirth'].setValue(dateOfBirth);
        this.formGroup.controls['educationExpense'].setValue(data.educationExpense ? this.fnaService.mathRoundTo(data.educationExpense, 2) : null);
        this.formGroup.controls['fnaId'].setValue(data.fnaId);
        this.formGroup.controls['highEducation'].setValue(data.highEducation);
        this.formGroup.controls['id'].setValue(data.id);
        this.formGroup.controls['sumAssured'].setValue(data.sumAssured ? this.fnaService.mathRoundTo(data.sumAssured, 2) : null);
    }
    deleteDeleteById() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.educations.length < this.healths.length) {
                delete this.healths[this.selectedIndex];
                this.formGroup.controls['dateOfBirth'].setValue('');
                this.formGroup.controls['childName'].setValue('');
            }
            if (this.selectedIndexId != 0 && this.educations.length > 1) {
                yield this.fnaEducationService.deleteDeleteById(this.selectedIndexId).toPromise().then((res) => {
                    if (res) {
                        this.educations = this.educations.filter(item => item.id !== this.selectedIndexId);
                        this.education = new _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__.EducationDto();
                        this.loadForm();
                        let obj = this.educations[this.selectedIndex];
                        if (obj) {
                            this.educations[this.selectedIndex].dateOfBirth = this.formatDateYYYYMMDD(this.educations[this.selectedIndex].dateOfBirth);
                            this.setEducation(this.educations[this.selectedIndex]);
                            this.selectedIndexId = this.educations[this.selectedIndex].id;
                        }
                        else {
                            this.selectedIndexId = 0;
                        }
                    }
                });
            }
            this.checkNextChild();
            _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.educations;
        });
    }
    updateCommaInput(ev, type) {
        var num = this.fnaService.getNumber(ev.target.value);
        if (num == 0) {
            if (type == 'sumAssured') {
                this.formGroup.controls['sumAssured'].setValue('');
                this.formGroup.controls['educationExpense'].setValue('');
            }
            if (type == 'educationExpense') {
                this.formGroup.controls['educationExpense'].setValue('');
            }
        }
        else {
            if (type == 'sumAssured') {
                this.formGroup.controls['sumAssured'].setValue(num.toLocaleString());
            }
            if (type == 'educationExpense') {
                this.formGroup.controls['educationExpense'].setValue(num.toLocaleString());
            }
        }
    }
    backToStartAction() {
        this.changeAnalysis.emit('aboutLLP');
    }
    viewAll() {
        if (this.educations.length > 0) {
            this.fnaService.openModal('Education');
        }
    }
    addChild(type) {
        this.education = new _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__.EducationDto();
        this.loadForm();
        this.selectedIndex++;
        let obj = this.educations[this.selectedIndex];
        if (obj) {
            this.setEducation(this.educations[this.selectedIndex]);
        }
        if (this.educations.length < this.healths.length) {
            this.formGroup.controls['childName'].setValue(this.healths[this.selectedIndex].name);
            if (this.healths[this.selectedIndex].dateOfBirth) {
                this.formGroup.controls['dateOfBirth'].setValue(this.formatDateYYYYMMDD(this.healths[this.selectedIndex].dateOfBirth));
            }
            else {
                this.formGroup.controls['dateOfBirth'].setValue(null);
            }
        }
        if (type == 'add') {
            this.selectedIndexId = 0;
        }
    }
    doValid() {
        let value = this.formGroup.controls['dateOfBirth'].value;
        if (value) {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.formGroup.controls['dateOfBirth'].value).add(0, 'years');
            this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.formGroup.controls['dateOfBirth'].setValue(toDate.format('YYYY-MM-DD'));
            this.calculateEducationExpense(this.formGroup.value.sumAssured);
        }
    }
    clearDOB() {
        this.formGroup.controls['dateOfBirth'].setValue(null);
        this.formGroup.controls['educationExpense'].setValue(null);
        this.formGroup.controls['sumAssured'].setValue(null);
    }
    calculateEducationExpense(ev) {
        if (ev) {
            let sumAssured = Number(ev.replace(/,/g, ''));
            if (sumAssured < 5000000 || sumAssured > 100000000) {
                this.isSumAssured = true;
                this.isCustomerAge = false;
                this.formGroup.controls['educationExpense'].setValue(null);
                return false;
            }
            else {
                this.isSumAssured = false;
                let term = 0;
                let childAge = this.calculate_age(new Date(this.formGroup.value.dateOfBirth.split("/").reverse().join("/")));
                // let customerAge = this.calculate_age(new Date('1990/09/02'));
                let customerAge = 18;
                if (customerAge < 18 || customerAge > 56) {
                    this.isCustomerAge = true;
                }
                else {
                    this.isCustomerAge = false;
                    if (childAge < 9) {
                        term = 14;
                    }
                    if (childAge > 8 && childAge < 12) {
                        term = 11;
                    }
                    if (childAge > 11) {
                        term = 9;
                    }
                    let rate = this.fnaEducationService.getFNAEducationPremiumRate(customerAge, term);
                    this.formGroup.controls['educationExpense'].setValue(this.fnaService.mathRoundTo((rate * (sumAssured / 1000)) * 12, 2));
                }
            }
        }
    }
    calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    checkNextChild() {
        let next = this.educations.length;
        this.nextCount = next;
    }
};
EducationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__.FANService },
    { type: _education_manage_service__WEBPACK_IMPORTED_MODULE_8__.FANEducationService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
EducationComponent.propDecorators = {
    education: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    fnaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    changeAnalysis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
EducationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-education',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_education_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_education_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EducationComponent);



/***/ }),

/***/ 81271:
/*!**********************************************************!*\
  !*** ./src/app/pages/fna-detail/fna-detail.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FnaDetailComponent": () => (/* binding */ FnaDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fna_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fna-detail.component.html */ 26629);
/* harmony import */ var _fna_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fna-detail.component.scss */ 51659);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/core */ 39123);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fna-manage.service */ 60865);
/* harmony import */ var _income_income_manage_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income/income-manage.dto */ 98849);
/* harmony import */ var _retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retirement/retirement-manage.dto */ 48921);











let FnaDetailComponent = class FnaDetailComponent {
    constructor(route, modalService, datepipe, cdf, fnaService) {
        this.route = route;
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.cdf = cdf;
        this.fnaService = fnaService;
        this.fnaSwitch = 'aboutLLP';
        this.selected = '';
        this.product = {
            id: 123
        };
        this.education = {};
        this.health = {};
        this.income = {};
        this.retirement = {};
        this.asset = {};
        this.freedom = [];
        this.fnaIncome = null;
        this.fnaAssets = [];
        this.fnaEducations = null;
        this.bgColor = 'progress-middle';
        this.percentage = '';
        this.totalPercentage = 0;
        this.fnaHealths = [];
        this.fnaRetirementSaving = null;
        this.fnaProduct = [];
        this.passValue = { customerName: '', customerDob: '', conductedBy: '', createdAt: '', createdByName: '', leadId: "" };
        this.percentageText = 0;
        this.totalPercentageText = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let data = JSON.parse(params.passValue);
            console.log('data', data);
            this.passValue = data;
            this.oldId = data.fnaId;
            this.customerId = data.customerId;
            this.aboutLLP = this.oldId;
            if (data.pageStatus != 'create') {
                if (this.oldId) {
                    yield this.getFNAById();
                }
            }
            this.passValue.createdAt = this.datepipe.transform(this.formatDateYYYYMMDD(this.convertDateFormatDDMMYYY(this.passValue.createdAt)), 'dd/MM/yyyy');
        }));
        // this.route.queryParams.subscribe(async params => {
        //   this.pageStatus = params.pageStatus;
        //   if (params.passValue) {
        //     this.passValue = JSON.parse(params.passValue);
        //     this.passValue.createdAt = this.datepipe.transform(this.formatDateYYYYMMDD(this.convertDateFormatDDMMYYY(this.passValue.createdAt)), 'MM/dd/yyyy');
        //   }
        //   if (this.pageStatus != 'create') {
        //     this.oldId = params.pageId;
        //     this.aboutLLP = this.oldId;
        //     if (this.oldId) {
        //       await this.getFNAById();
        //     }
        //   }
        // }
        // );
    }
    getFNAById() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isValue = false;
            this.fnaProduct = [];
            this.fnaService.fnaUpdateProducts = [];
            this.fnaService.fnaIncome = new _income_income_manage_dto__WEBPACK_IMPORTED_MODULE_4__.IncomeDto();
            this.fnaService.fnaRetirementSaving = new _retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_5__.RetirementDto();
            this.fnaService.fnaHealths = new Array();
            this.fnaService.fnaEducations = new Array();
            this.fnaService.fnaAssect = new Array();
            this.fnaService.fnaProduct = new Array();
            this.fnaService.percentage = '';
            this.fnaService.totalPercentageText = '';
            this.fnaService.bgColor = '';
            this.fnaService.fnaUpdateProducts = new Array();
            this.fnaService.fnaTextColor = null;
            yield this.fnaService.findOne(this.oldId).toPromise().then(res => {
                console.log('getFNAById', res);
                if (res) {
                    if (res.fnaAssets.length > 0 && res.fnaEducations.length &&
                        res.fnaHealths.length > 0 && res.fnaIncome != null &&
                        res.fnaRetirementSaving != null) {
                        this.freedom.push({ hasData: true });
                    }
                    this.fnaIncome = res.fnaIncome;
                    this.fnaService.fnaIncome = res.fnaIncome;
                    this.fnaRetirementSaving = res.fnaRetirementSaving;
                    this.fnaService.fnaRetirementSaving = this.fnaRetirementSaving;
                    this.fnaHealths = res.fnaHealths;
                    this.fnaService.fnaHealths = this.fnaHealths;
                    this.fnaAssets = res.fnaAssets;
                    this.fnaService.fnaAssect = this.fnaAssets;
                    this.fnaProduct = res.products;
                    this.fnaService.fnaProduct = this.fnaProduct;
                    this.fnaEducations = res.fnaEducations;
                    if (this.fnaEducations.length == 0) {
                        this.fnaService.fnaHealths = this.fnaHealths;
                        this.fnaService.fnaEducations = [];
                    }
                    else {
                        this.fnaService.fnaEducations = this.fnaEducations;
                        this.fnaService.fnaHealths = [];
                    }
                    this.fnaService.fnaUpdateProducts = this.fnaProduct;
                    if (this.fnaAssets.length > 0) {
                        this.totalPercentage += 20;
                    }
                    if (this.fnaEducations.length > 0) {
                        this.totalPercentage += 20;
                    }
                    if (this.fnaHealths.length > 0) {
                        this.totalPercentage += 20;
                    }
                    if (this.fnaIncome) {
                        this.totalPercentage += 20;
                    }
                    if (this.fnaRetirementSaving) {
                        this.totalPercentage += 20;
                    }
                    this.percentage = this.totalPercentage.toString() + '%';
                    if (this.totalPercentage == 20 || this.totalPercentage == 40 ||
                        this.totalPercentage == 60 || this.totalPercentage == 80 || this.totalPercentage == 100) {
                        this.percentageText = -50;
                    }
                    this.totalPercentageText = this.percentageText.toString() + '%';
                    if (this.totalPercentage == 0) {
                        this.bgColor = 'progress-lower';
                        this.fnaTextColor = null;
                    }
                    else if (this.totalPercentage == 100) {
                        this.bgColor = 'progress-upper';
                        this.fnaTextColor = 100;
                    }
                    else {
                        this.bgColor = 'progress-middle';
                        this.fnaTextColor = null;
                    }
                }
                this.cdf.detectChanges();
                this.isValue = true;
            });
        });
    }
    fnaEvent(event) {
        if (event == 'product' || event == 'aboutLLP') {
            this.fnaSwitch = event;
            this.selected = '';
            this.percentage = this.fnaService.percentage;
            this.totalPercentageText = this.fnaService.totalPercentageText;
            this.bgColor = this.fnaService.bgColor;
            this.fnaTextColor = this.fnaService.fnaTextColor;
        }
        else {
            this.selected = event;
            this.fnaSwitch = event;
        }
    }
    changeProduct(event) {
        this.fnaSwitch = event;
    }
    saveFNA() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fnaService.saveFNA('').toPromise().then(res => {
                if (res) {
                    this.pageStatus = 'edit';
                    this.oldId = res;
                    this.aboutLLP = this.oldId;
                }
            });
        });
    }
    formatDateYYYYMMDD(date) {
        var d = new Date(date.split("/").reverse().join("/")), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    convertDateFormatDDMMYYY(date) {
        var today = new Date(date);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
    }
};
FnaDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_3__.FANService }
];
FnaDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-fna-detail',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fna_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDateAdapter, useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_2__.CustomAdapter2 },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDateParserFormatter, useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_2__.CustomDateParserFormatter }
        ],
        styles: [_fna_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FnaDetailComponent);



/***/ }),

/***/ 92757:
/*!********************************************************!*\
  !*** ./src/app/pages/fna-detail/fna-detail.modules.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FnaDetailModule": () => (/* binding */ FnaDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);
/* harmony import */ var _fna_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fna-detail.component */ 81271);
/* harmony import */ var _chart_analysis_chart_analysis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-analysis/chart-analysis.component */ 49774);
/* harmony import */ var _chart_analysis_product_analysis_product_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-analysis/product-analysis/product-analysis.component */ 55706);
/* harmony import */ var _chart_analysis_llp_analysis_llp_analysis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart-analysis/llp-analysis/llp-analysis.component */ 24617);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ 23311);
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/asset.component */ 63412);
/* harmony import */ var _income_income_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income/income.component */ 92051);
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health/health.component */ 81730);
/* harmony import */ var _retirement_retirement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./retirement/retirement.component */ 89757);
/* harmony import */ var _freedom_freedom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./freedom/freedom.component */ 23575);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 63387);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fna-manage.service */ 60865);
/* harmony import */ var _fna_data_view_fna_data_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fna-data-view/fna-data-view.component */ 57266);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 21349);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 26816);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 57574);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 76393);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/is-json */ 47975);



























let FnaDetailModule = class FnaDetailModule {
};
FnaDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [_fna_detail_component__WEBPACK_IMPORTED_MODULE_1__.FnaDetailComponent,
            _chart_analysis_chart_analysis_component__WEBPACK_IMPORTED_MODULE_2__.ChartAnalysisComponent,
            _chart_analysis_product_analysis_product_analysis_component__WEBPACK_IMPORTED_MODULE_3__.ProductAnalysisComponent, _retirement_retirement_component__WEBPACK_IMPORTED_MODULE_9__.RetirementComponent,
            _freedom_freedom_component__WEBPACK_IMPORTED_MODULE_10__.FreedomComponent, _fna_data_view_fna_data_view_component__WEBPACK_IMPORTED_MODULE_12__.FnaDataViewComponent,
            _chart_analysis_llp_analysis_llp_analysis_component__WEBPACK_IMPORTED_MODULE_4__.LlpAnalysisComponent, _education_education_component__WEBPACK_IMPORTED_MODULE_5__.EducationComponent, _asset_asset_component__WEBPACK_IMPORTED_MODULE_6__.AssetComponent, _income_income_component__WEBPACK_IMPORTED_MODULE_7__.IncomeComponent,
            _health_health_component__WEBPACK_IMPORTED_MODULE_8__.HealthComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_0__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDatepickerModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forChild([
                {
                    path: '',
                    component: _fna_detail_component__WEBPACK_IMPORTED_MODULE_1__.FnaDetailComponent,
                },
            ]),
        ],
        exports: [_chart_analysis_chart_analysis_component__WEBPACK_IMPORTED_MODULE_2__.ChartAnalysisComponent,
            _chart_analysis_product_analysis_product_analysis_component__WEBPACK_IMPORTED_MODULE_3__.ProductAnalysisComponent,
            _retirement_retirement_component__WEBPACK_IMPORTED_MODULE_9__.RetirementComponent,
            _freedom_freedom_component__WEBPACK_IMPORTED_MODULE_10__.FreedomComponent, _fna_data_view_fna_data_view_component__WEBPACK_IMPORTED_MODULE_12__.FnaDataViewComponent,
            _chart_analysis_llp_analysis_llp_analysis_component__WEBPACK_IMPORTED_MODULE_4__.LlpAnalysisComponent, _education_education_component__WEBPACK_IMPORTED_MODULE_5__.EducationComponent, _asset_asset_component__WEBPACK_IMPORTED_MODULE_6__.AssetComponent,
            _income_income_component__WEBPACK_IMPORTED_MODULE_7__.IncomeComponent,
            _health_health_component__WEBPACK_IMPORTED_MODULE_8__.HealthComponent],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_15__.CUSTOM_ELEMENTS_SCHEMA,
            _angular_core__WEBPACK_IMPORTED_MODULE_15__.NO_ERRORS_SCHEMA
        ],
        providers: [_fna_manage_service__WEBPACK_IMPORTED_MODULE_11__.FANService, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_26__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_13__.MY_FORMATS },]
    })
], FnaDetailModule);



/***/ }),

/***/ 23575:
/*!***************************************************************!*\
  !*** ./src/app/pages/fna-detail/freedom/freedom.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreedomComponent": () => (/* binding */ FreedomComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_freedom_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./freedom.component.html */ 93077);
/* harmony import */ var _freedom_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freedom.component.scss */ 99645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let FreedomComponent = class FreedomComponent {
    constructor() {
        this.customerId = null;
    }
    ngOnInit() {
    }
};
FreedomComponent.ctorParameters = () => [];
FreedomComponent.propDecorators = {
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FreedomComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-freedom',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_freedom_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_freedom_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FreedomComponent);



/***/ }),

/***/ 67513:
/*!**************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health-manage.dto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthStatus": () => (/* binding */ HealthStatus),
/* harmony export */   "HealthDto": () => (/* binding */ HealthDto)
/* harmony export */ });
var HealthStatus;
(function (HealthStatus) {
})(HealthStatus || (HealthStatus = {}));
class HealthDto {
    constructor() {
        this.amountByEmployer = 0;
        this.amountByInsurance = 0;
        this.amountBySocialBenefit = 0;
        this.protectionSelf = false;
        this.nameSpouse = '';
        this.amountByEmployerSpouse = 0;
        this.amountByInsuranceSpouse = 0;
        this.amountBySocialBenefitSpouse = 0;
        this.protectionSpouse = false;
        this.protection = false;
        this.amountByEmployerSelf = 0;
        this.amountByInsuranceSelf = 0;
        this.amountBySocialBenefitSelf = 0;
        this.createdAt = '';
        this.fnaId = '';
        this.healthType = '';
        this.id = 0;
        this.name = '';
        this.updatedAt = '';
    }
}


/***/ }),

/***/ 21263:
/*!******************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health-manage.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANHealthManageService": () => (/* binding */ FANHealthManageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);





const API_ADDON_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/fna`;
let FANHealthManageService = class FANHealthManageService extends src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    saveHealth(data) {
        return this.httpClient.post(API_ADDON_URL + '/health', data);
    }
    getAllHealth(fnaId) {
        return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/health');
    }
    updateHealth(data) {
        return this.httpClient.put(API_ADDON_URL + '/health', data);
    }
    deleteHealthById(id) {
        return this.httpClient.delete(API_ADDON_URL + '/health/' + id);
    }
};
FANHealthManageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FANHealthManageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FANHealthManageService);



/***/ }),

/***/ 81730:
/*!*************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthComponent": () => (/* binding */ HealthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./health.component.html */ 14148);
/* harmony import */ var _health_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health.component.scss */ 52132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 53489);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-constant */ 25674);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fna-manage.service */ 60865);
/* harmony import */ var _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-manage.dto */ 67513);
/* harmony import */ var _health_manage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health-manage.service */ 21263);












let HealthComponent = class HealthComponent {
    constructor(fb, cdf, alertService, fnaHealthManageService, fnaService) {
        this.fb = fb;
        this.cdf = cdf;
        this.alertService = alertService;
        this.fnaHealthManageService = fnaHealthManageService;
        this.fnaService = fnaService;
        this.health = null;
        this.fnaId = null;
        this.customerId = null;
        this.changeAnalysis = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.healths = new Array();
        this.healthDto = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
        this.tempChildList = new Array();
        this.selectedIndex = 2;
        this.selectedIndexId = 0;
        this.products = [];
        this.type = '';
        this.fromMinDate = null;
        this.fromMaxDate = new Date();
        this.nextCount = 0;
    }
    ngOnInit() {
        this.loadForm();
        if (this.fnaService.fnaHealths) {
            this.tempChildList = this.fnaService.fnaHealths;
            _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.tempChildList;
        }
        if (this.fnaService.fnaUpdateProducts) {
            this.products = this.fnaService.fnaUpdateProducts;
        }
        this.getAllFNAHealth();
        this.checkNextChild();
    }
    backAction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedIndex == 2) {
                this.changeAnalysis.emit('aboutLLP');
            }
            else {
                this.selectedIndex--;
                this.healthDto = this.tempChildList[this.selectedIndex];
                if (this.selectedIndex == 2) {
                    this.healthDto = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
                    yield this.loadForm();
                    let self = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
                    let spouse = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
                    let child = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
                    self = this.tempChildList[0];
                    yield this.setSelfInsurance(self);
                    spouse = this.tempChildList[1];
                    yield this.setSpouseInsurance(spouse);
                    child = this.tempChildList[2];
                    yield this.setChildInsurance(child);
                }
                else {
                    this.setChildInsurance(this.tempChildList[this.selectedIndex]);
                }
            }
            this.checkNextChild();
        });
    }
    loadForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
            selfId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.selfId || 0),
            amountByEmployer: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountByEmployer || ''),
            amountByInsurance: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountByInsurance || ''),
            amountBySocialBenefit: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountBySocialBenefit || ''),
            protectionSelf: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.protectionSelf),
            spouseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.spouseId || 0),
            nameSpouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.nameSpouse || ''),
            amountByEmployerSpouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountByEmployerSpouse || ''),
            amountByInsuranceSpouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountByInsuranceSpouse || ''),
            amountBySocialBenefitSpouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountBySocialBenefitSpouse || ''),
            protectionSpouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.protectionSpouse),
            dateOfBirthSpouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.dateOfBirthSpouse),
            protection: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.protection),
            amountByEmployerSelf: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountByEmployerSelf || ''),
            amountByInsuranceSelf: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountByInsuranceSelf || ''),
            amountBySocialBenefitSelf: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.amountBySocialBenefitSelf || ''),
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.createdAt || ''),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.dateOfBirth),
            fnaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.fnaId),
            healthType: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.healthType || ''),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.id || 0),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.name || ''),
            updatedAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.healthDto.updatedAt || '')
        });
        this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
        this.cdf.detectChanges();
    }
    getSelfInsurance() {
        let healthDto = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
        let amountByEmployerSelf = 0;
        let amountByInsuranceSelf = 0;
        let amountBySocialBenefitSelf = 0;
        if (this.formGroup.value.amountByEmployerSelf) {
            amountByEmployerSelf = Number(this.formGroup.value.amountByEmployerSelf.replace(/,/g, ''));
        }
        if (this.formGroup.value.amountByInsuranceSelf) {
            amountByInsuranceSelf = Number(this.formGroup.value.amountByInsuranceSelf.replace(/,/g, ''));
        }
        if (this.formGroup.value.amountBySocialBenefitSelf) {
            amountBySocialBenefitSelf = Number(this.formGroup.value.amountBySocialBenefitSelf.replace(/,/g, ''));
        }
        healthDto.amountByEmployer = amountByEmployerSelf,
            healthDto.amountByInsurance = amountByInsuranceSelf,
            healthDto.amountBySocialBenefit = amountBySocialBenefitSelf,
            healthDto.createdAt = this.formGroup.value.createdAt,
            healthDto.dateOfBirth = null,
            healthDto.fnaId = this.formGroup.value.fnaId,
            healthDto.healthType = this.formGroup.value.healthType,
            healthDto.id = this.formGroup.value.selfId,
            healthDto.name = this.formGroup.value.name,
            healthDto.protection = this.formGroup.value.protectionSelf,
            healthDto.updatedAt = this.formGroup.value.updatedAt;
        return healthDto;
    }
    setSelfInsurance(data) {
        this.formGroup.controls['protectionSelf'].setValue(data.protection);
        this.formGroup.controls['amountByEmployerSelf'].setValue(data.amountByEmployer ? this.fnaService.mathRoundTo(data.amountByEmployer, 2) : null),
            this.formGroup.controls['amountByInsuranceSelf'].setValue(data.amountByInsurance ? this.fnaService.mathRoundTo(data.amountByInsurance, 2) : null);
        this.formGroup.controls['amountBySocialBenefitSelf'].setValue(data.amountBySocialBenefit ? this.fnaService.mathRoundTo(data.amountBySocialBenefit, 2) : null);
        this.formGroup.controls['selfId'].setValue(data.id);
    }
    getSpouseInsurance() {
        let dateOfBirthSpouse = null;
        if (this.formGroup.value.dateOfBirthSpouse) {
            dateOfBirthSpouse = this.formatDateYYYYMMDD(this.formGroup.value.dateOfBirthSpouse);
        }
        let healthDto = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
        let amountByEmployerSpouse = 0;
        let amountByInsuranceSpouse = 0;
        let amountBySocialBenefitSpouse = 0;
        if (this.formGroup.value.amountByEmployerSpouse) {
            amountByEmployerSpouse = Number(this.formGroup.value.amountByEmployerSpouse.replace(/,/g, ''));
        }
        if (this.formGroup.value.amountByInsuranceSpouse) {
            amountByInsuranceSpouse = Number(this.formGroup.value.amountByInsuranceSpouse.replace(/,/g, ''));
        }
        if (this.formGroup.value.amountBySocialBenefitSpouse) {
            amountBySocialBenefitSpouse = Number(this.formGroup.value.amountBySocialBenefitSpouse.replace(/,/g, ''));
        }
        healthDto.amountByEmployer = amountByEmployerSpouse,
            healthDto.amountByInsurance = amountByInsuranceSpouse,
            healthDto.amountBySocialBenefit = amountBySocialBenefitSpouse,
            healthDto.createdAt = this.formGroup.value.createdAt,
            healthDto.dateOfBirth = dateOfBirthSpouse,
            healthDto.fnaId = this.formGroup.value.fnaId,
            healthDto.healthType = this.formGroup.value.healthType,
            healthDto.id = this.formGroup.value.spouseId,
            healthDto.name = this.formGroup.value.nameSpouse,
            healthDto.protection = this.formGroup.value.protectionSpouse,
            healthDto.updatedAt = this.formGroup.value.updatedAt;
        return healthDto;
    }
    setSpouseInsurance(data) {
        if (data.dateOfBirth) {
            data.dateOfBirth = this.formatDateYYYYMMDD(data.dateOfBirth);
        }
        else {
            data.dateOfBirth = null;
        }
        this.selectedIndexId = data.id;
        this.formGroup.controls['nameSpouse'].setValue(data.name);
        this.formGroup.controls['dateOfBirthSpouse'].setValue(data.dateOfBirth);
        this.formGroup.controls['protectionSpouse'].setValue(data.protection);
        this.formGroup.controls['amountByEmployerSpouse'].setValue(data.amountByEmployer ? this.fnaService.mathRoundTo(data.amountByEmployer, 2) : null);
        this.formGroup.controls['amountByInsuranceSpouse'].setValue(data.amountByInsurance ? this.fnaService.mathRoundTo(data.amountByInsurance, 2) : null);
        this.formGroup.controls['amountBySocialBenefitSpouse'].setValue(data.amountBySocialBenefit ? this.fnaService.mathRoundTo(data.amountBySocialBenefit, 2) : null);
        this.formGroup.controls['spouseId'].setValue(data.id);
    }
    getChildInsurance() {
        let dateOfBirth = null;
        if (this.formGroup.value.dateOfBirth) {
            dateOfBirth = this.formatDateYYYYMMDD(this.formGroup.value.dateOfBirth);
        }
        let healthDto = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
        let amountByEmployer = 0;
        let amountByInsurance = 0;
        let amountBySocialBenefit = 0;
        if (this.formGroup.value.amountByEmployer) {
            amountByEmployer = Number(this.formGroup.value.amountByEmployer.replace(/,/g, ''));
        }
        if (this.formGroup.value.amountByInsurance) {
            amountByInsurance = Number(this.formGroup.value.amountByInsurance.replace(/,/g, ''));
        }
        if (this.formGroup.value.amountBySocialBenefit) {
            amountBySocialBenefit = Number(this.formGroup.value.amountBySocialBenefit.replace(/,/g, ''));
        }
        healthDto.amountByEmployer = amountByEmployer,
            healthDto.amountByInsurance = amountByInsurance,
            healthDto.amountBySocialBenefit = amountBySocialBenefit,
            healthDto.createdAt = this.formGroup.value.createdAt,
            healthDto.dateOfBirth = dateOfBirth,
            healthDto.fnaId = this.formGroup.value.fnaId,
            healthDto.healthType = this.formGroup.value.healthType,
            healthDto.id = this.formGroup.value.id,
            healthDto.name = this.formGroup.value.name,
            healthDto.protection = this.formGroup.value.protection,
            healthDto.updatedAt = this.formGroup.value.updatedAt;
        return healthDto;
    }
    setChildInsurance(data) {
        if (data.dateOfBirth) {
            data.dateOfBirth = this.formatDateYYYYMMDD(data.dateOfBirth);
        }
        else {
            data.dateOfBirth = null;
        }
        this.formGroup.controls['name'].setValue(data.name);
        this.formGroup.controls['dateOfBirth'].setValue(data.dateOfBirth);
        this.formGroup.controls['protection'].setValue(data.protection);
        this.formGroup.controls['amountByEmployer'].setValue(data.amountByEmployer ? this.fnaService.mathRoundTo(data.amountByEmployer, 2) : null);
        this.formGroup.controls['amountByInsurance'].setValue(data.amountByInsurance ? this.fnaService.mathRoundTo(data.amountByInsurance, 2) : null);
        this.formGroup.controls['amountBySocialBenefit'].setValue(data.amountBySocialBenefit ? this.fnaService.mathRoundTo(data.amountBySocialBenefit, 2) : null);
        this.formGroup.controls['id'].setValue(data.id);
        if (data.id) {
            this.selectedIndexId = data.id;
        }
        else {
            this.selectedIndexId = 0;
        }
    }
    removeSelfValidate() {
        this.removeValidate('amountByInsuranceSelf');
        this.removeValidate('amountByEmployerSelf');
        this.removeValidate('amountBySocialBenefitSelf');
        this.formGroup.controls['amountByInsuranceSelf'].setValue(null);
        this.formGroup.controls['amountByEmployerSelf'].setValue(null);
        this.formGroup.controls['amountBySocialBenefitSelf'].setValue(null);
    }
    addSelfValidate() {
        this.addValidate('amountByInsuranceSelf');
        this.addValidate('amountByEmployerSelf');
        this.addValidate('amountBySocialBenefitSelf');
    }
    removeSpouseValidate() {
        this.removeValidate('amountByInsuranceSpouse');
        this.removeValidate('amountByEmployerSpouse');
        this.removeValidate('amountBySocialBenefitSpouse');
        this.removeValidate('dateOfBirthSpouse');
        this.formGroup.controls['amountByInsuranceSpouse'].setValue(null);
        this.formGroup.controls['amountByEmployerSpouse'].setValue(null);
        this.formGroup.controls['amountBySocialBenefitSpouse'].setValue(null);
    }
    addSpouseValidate() {
        this.addValidate('amountByInsuranceSpouse');
        this.addValidate('amountByEmployerSpouse');
        this.addValidate('amountBySocialBenefitSpouse');
        this.removeValidate('dateOfBirthSpouse');
    }
    removeChildValidate() {
        this.removeValidate('amountByInsurance');
        this.removeValidate('amountByEmployer');
        this.removeValidate('amountBySocialBenefit');
        this.formGroup.controls['amountByInsurance'].setValue(null);
        this.formGroup.controls['amountByEmployer'].setValue(null);
        this.formGroup.controls['amountBySocialBenefit'].setValue(null);
    }
    addChildValidate() {
        this.addValidate('amountByInsurance');
        this.addValidate('amountByEmployer');
        this.addValidate('amountBySocialBenefit');
    }
    saveAndNextHealth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedIndex <= 5) {
                if (this.selectedIndex == 2) {
                    if (this.formGroup.value.protectionSelf) {
                        yield this.addSelfValidate();
                    }
                    else {
                        yield this.removeSelfValidate();
                    }
                    if (this.formGroup.value.protectionSpouse) {
                        yield this.addSpouseValidate();
                    }
                    else {
                        yield this.removeSpouseValidate();
                    }
                }
                else {
                    yield this.removeSelfValidate();
                    yield this.removeSpouseValidate();
                }
                if (this.formGroup.value.protection) {
                    yield this.addChildValidate();
                }
                else {
                    yield this.removeChildValidate();
                }
                if (this.formGroup.invalid) {
                    yield (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.formGroup);
                }
                else {
                    if (this.selectedIndex == 2) {
                        if (this.formGroup.value.selfId) {
                            yield this.fnaHealthManageService.updateHealth(this.getSelfInsurance()).toPromise().then((res) => {
                                if (res) {
                                    this.tempChildList[0] = this.getSelfInsurance();
                                    this.tempChildList[0].id = res;
                                }
                            });
                        }
                        else {
                            yield this.fnaHealthManageService.saveHealth(this.getSelfInsurance()).toPromise().then((res) => {
                                if (res) {
                                    this.tempChildList[0] = this.getSelfInsurance();
                                    this.tempChildList[0].id = res;
                                }
                            });
                        }
                        if (this.formGroup.value.spouseId) {
                            yield this.fnaHealthManageService.updateHealth(this.getSpouseInsurance()).toPromise().then((res) => {
                                if (res) {
                                    this.tempChildList[1] = this.getSpouseInsurance();
                                    this.tempChildList[1].id = res;
                                }
                            });
                        }
                        else {
                            yield this.fnaHealthManageService.saveHealth(this.getSpouseInsurance()).toPromise().then((res) => {
                                if (res) {
                                    this.tempChildList[1] = this.getSpouseInsurance();
                                    this.tempChildList[1].id = res;
                                }
                            });
                        }
                        this.products.push.apply(this.products, this.fnaService.getFNAProduct('Health', ''));
                        this.products = this.removeDuplicates(this.products);
                        this.fnaService.fnaUpdateProducts.concat(this.products);
                        let reqBody = {
                            customerId: this.customerId,
                            fnaType: "LPP",
                            grandDiscount: 0,
                            highDiscount: 0,
                            id: this.fnaId,
                            products: this.products
                        };
                        yield this.fnaService.updateFNAProduct(reqBody).toPromise().then((res) => {
                            if (res) {
                            }
                        });
                        if (this.formGroup.value.id) {
                            yield this.fnaHealthManageService.updateHealth(this.getChildInsurance()).toPromise().then((res) => {
                                if (res) {
                                    this.tempChildList[this.selectedIndex] = this.getChildInsurance();
                                    this.tempChildList[this.selectedIndex].id = res;
                                    this.alertService.activate('This record was updated', 'Success Message').then(result => {
                                        if (this.selectedIndex == 5) {
                                            this.changeAnalysis.emit('aboutLLP');
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            yield this.fnaHealthManageService.saveHealth(this.getChildInsurance()).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                                if (res) {
                                    this.tempChildList[this.selectedIndex] = this.getChildInsurance();
                                    this.tempChildList[this.selectedIndex].id = res;
                                    this.alertService.activate('This record was created', 'Success Message').then(result => {
                                        if (this.selectedIndex == 5) {
                                            this.changeAnalysis.emit('aboutLLP');
                                        }
                                    });
                                }
                            }));
                        }
                    }
                    else {
                        if (this.formGroup.value.id) {
                            yield this.fnaHealthManageService.updateHealth(this.getChildInsurance()).toPromise().then((res) => {
                                if (res) {
                                    this.tempChildList[this.selectedIndex] = this.getChildInsurance();
                                    this.alertService.activate('This record was updated', 'Success Message').then(result => {
                                        if (this.selectedIndex == 5) {
                                            this.changeAnalysis.emit('aboutLLP');
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            yield this.fnaHealthManageService.saveHealth(this.getChildInsurance()).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                                if (res) {
                                    this.tempChildList[this.selectedIndex] = this.getChildInsurance();
                                    this.tempChildList[this.selectedIndex].id = res;
                                    this.alertService.activate('This record was created', 'Success Message').then(result => {
                                        if (this.selectedIndex == 5) {
                                            this.changeAnalysis.emit('aboutLLP');
                                        }
                                    });
                                }
                            }));
                        }
                    }
                    // if (this.selectedIndex <= 4) {
                    //   this.healthDto = new HealthDto();
                    //   this.loadForm();
                    //   this.selectedIndex++;
                    // }
                    // if (this.selectedIndex <= 4) {
                    //   this.healthDto = new HealthDto();
                    //   this.loadForm();
                    //   this.selectedIndex++;
                    // }
                    this.healthDto = this.tempChildList[this.selectedIndex];
                    if (this.healthDto) {
                        yield this.setChildInsurance(this.tempChildList[this.selectedIndex]);
                    }
                }
                yield this.checkNextChild();
                _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.tempChildList;
            }
        });
    }
    removeDuplicates(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    removeValidate(formControlName) {
        this.formGroup.get(formControlName).clearValidators();
        this.formGroup.get(formControlName).updateValueAndValidity();
    }
    addValidate(formControlName) {
        this.formGroup.get(formControlName).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
        this.formGroup.get(formControlName).updateValueAndValidity();
    }
    getAllFNAHealth() {
        // this.tempChildList = [];
        //this.fnaHealthManageService.getAllHealth(this.fnaId).toPromise().then((res: any) => {
        if (this.tempChildList.length > 0) {
            if (this.selectedIndex == 2) {
                this.setSelfInsurance(this.tempChildList[0]);
                this.setSpouseInsurance(this.tempChildList[1]);
                this.setChildInsurance(this.tempChildList[2]);
            }
            else {
                this.healthDto = this.tempChildList[this.selectedIndex];
                if (this.healthDto) {
                    this.setChildInsurance(this.healthDto);
                    this.cdf.detectChanges();
                }
                else {
                    this.healthDto = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
                }
            }
        }
        // });
    }
    deleteHealthById() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedIndexId != 0) {
                yield this.fnaHealthManageService.deleteHealthById(this.selectedIndexId).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    if (res) {
                        this.tempChildList = this.tempChildList.filter(item => item.id !== this.selectedIndexId);
                        this.healthDto = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto;
                        this.loadForm();
                        let obj = this.tempChildList[this.selectedIndex];
                        if (obj) {
                            this.selectedIndexId = this.tempChildList[this.selectedIndex].id;
                            this.setChildInsurance(this.tempChildList[this.selectedIndex]);
                        }
                        else {
                            this.selectedIndexId = 0;
                        }
                    }
                }));
            }
            this.checkNextChild();
            _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_LIST = this.tempChildList;
        });
    }
    formatDateYYYYMMDD(date) {
        var d = new Date(date.split("/").reverse().join("/")), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    formatDateDDMMYYY(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    }
    updateCommaInputSelf(ev, type) {
        var num = this.fnaService.getNumber(ev.target.value);
        if (num == 0) {
            if (type == 'amountByInsuranceSelf') {
                this.formGroup.controls['amountByInsuranceSelf'].setValue('');
            }
            if (type == 'amountByEmployerSelf') {
                this.formGroup.controls['amountByEmployerSelf'].setValue('');
            }
            if (type == 'amountBySocialBenefitSelf') {
                this.formGroup.controls['amountBySocialBenefitSelf'].setValue('');
            }
        }
        else {
            if (type == 'amountByInsuranceSelf') {
                this.formGroup.controls['amountByInsuranceSelf'].setValue(num.toLocaleString());
            }
            if (type == 'amountByEmployerSelf') {
                this.formGroup.controls['amountByEmployerSelf'].setValue(num.toLocaleString());
            }
            if (type == 'amountBySocialBenefitSelf') {
                this.formGroup.controls['amountBySocialBenefitSelf'].setValue(num.toLocaleString());
            }
        }
    }
    updateCommaInputSpouse(ev, type) {
        var num = this.fnaService.getNumber(ev.target.value);
        if (num == 0) {
            if (type == 'amountByInsuranceSpouse') {
                this.formGroup.controls['amountByInsuranceSpouse'].setValue('');
            }
            if (type == 'amountByEmployerSpouse') {
                this.formGroup.controls['amountByEmployerSpouse'].setValue('');
            }
            if (type == 'amountBySocialBenefitSpouse') {
                this.formGroup.controls['amountBySocialBenefitSpouse'].setValue('');
            }
        }
        else {
            if (type == 'amountByInsuranceSpouse') {
                this.formGroup.controls['amountByInsuranceSpouse'].setValue(num.toLocaleString());
            }
            if (type == 'amountByEmployerSpouse') {
                this.formGroup.controls['amountByEmployerSpouse'].setValue(num.toLocaleString());
            }
            if (type == 'amountBySocialBenefitSpouse') {
                this.formGroup.controls['amountBySocialBenefitSpouse'].setValue(num.toLocaleString());
            }
        }
    }
    updateCommaInputChild(ev, type) {
        var num = this.fnaService.getNumber(ev.target.value);
        if (num == 0) {
            if (type == 'amountByInsurance') {
                this.formGroup.controls['amountByInsurance'].setValue('');
            }
            if (type == 'amountByEmployer') {
                this.formGroup.controls['amountByEmployer'].setValue('');
            }
            if (type == 'amountBySocialBenefit') {
                this.formGroup.controls['amountBySocialBenefit'].setValue('');
            }
        }
        else {
            if (type == 'amountByInsurance') {
                this.formGroup.controls['amountByInsurance'].setValue(num.toLocaleString());
            }
            if (type == 'amountByEmployer') {
                this.formGroup.controls['amountByEmployer'].setValue(num.toLocaleString());
            }
            if (type == 'amountBySocialBenefit') {
                this.formGroup.controls['amountBySocialBenefit'].setValue(num.toLocaleString());
            }
        }
    }
    backToStartAction() {
        this.changeAnalysis.emit('aboutLLP');
    }
    viewAll() {
        if (this.tempChildList.length > 0) {
            this.fnaService.openModal('Health');
        }
    }
    doValid(type) {
        if (type == 'dateOfBirthSpouse') {
            let value = this.formGroup.controls['dateOfBirthSpouse'].value;
            if (value) {
                let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.formGroup.controls['dateOfBirthSpouse'].value).add(0, 'years');
                this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                this.formGroup.controls['dateOfBirthSpouse'].setValue(toDate.format('YYYY-MM-DD'));
            }
        }
        if (type == 'dateOfBirth') {
            let value = this.formGroup.controls['dateOfBirth'].value;
            if (value) {
                let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.formGroup.controls['dateOfBirth'].value).add(0, 'years');
                this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                this.formGroup.controls['dateOfBirth'].setValue(toDate.format('YYYY-MM-DD'));
            }
        }
    }
    addChild(type) {
        if (this.selectedIndex <= 4) {
            this.healthDto = new _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__.HealthDto();
            this.loadForm();
            this.selectedIndex++;
            this.healthDto = this.tempChildList[this.selectedIndex];
            if (this.healthDto) {
                this.setChildInsurance(this.tempChildList[this.selectedIndex]);
            }
        }
        if (type == 'add') {
            this.selectedIndexId = 0;
        }
    }
    clearDOB(type) {
        if (type == 'dateOfBirth') {
            this.formGroup.controls['dateOfBirth'].setValue(null);
        }
        else {
            this.formGroup.controls['dateOfBirthSpouse'].setValue(null);
        }
    }
    checkNextChild() {
        let next = this.tempChildList.length;
        this.nextCount = next - 2;
    }
};
HealthComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _health_manage_service__WEBPACK_IMPORTED_MODULE_8__.FANHealthManageService },
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__.FANService }
];
HealthComponent.propDecorators = {
    health: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    fnaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    changeAnalysis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
HealthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-health',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_health_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_health_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HealthComponent);



/***/ }),

/***/ 37402:
/*!******************************************************************!*\
  !*** ./src/app/pages/fna-detail/income/income-manage.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANIncomeManageService": () => (/* binding */ FANIncomeManageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);





const API_ADDON_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/fna`;
let FANIncomeManageService = class FANIncomeManageService extends src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getFNAIncome(fnaId) {
        return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/income');
    }
    saveFNAIncome(data) {
        return this.httpClient.post(API_ADDON_URL + '/income', data);
    }
    deleteFNAIncomeById(id) {
        return this.httpClient.delete(API_ADDON_URL + '/income/' + id);
    }
    updateFNAIncome(data) {
        return this.httpClient.put(API_ADDON_URL + '/income', data);
    }
};
FANIncomeManageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FANIncomeManageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FANIncomeManageService);



/***/ }),

/***/ 92051:
/*!*************************************************************!*\
  !*** ./src/app/pages/fna-detail/income/income.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeComponent": () => (/* binding */ IncomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_income_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./income.component.html */ 12519);
/* harmony import */ var _income_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income.component.scss */ 60302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 53489);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fna-constant */ 25674);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-manage.service */ 60865);
/* harmony import */ var _income_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./income-manage.service */ 37402);










let IncomeComponent = class IncomeComponent {
    constructor(fb, cdf, alertService, fnaIncomeManageService, fnaService) {
        this.fb = fb;
        this.cdf = cdf;
        this.alertService = alertService;
        this.fnaIncomeManageService = fnaIncomeManageService;
        this.fnaService = fnaService;
        this.fnaIncome = {};
        this.fnaId = {};
        this.customerId = null;
        this.changeAnalysis = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.income = {
            estimatedMonthlyIncome: null,
            estimatedMonthlyIncomeText: null,
            familyMonthlySpending: 0,
            familyMonthlySpendingText: null,
            fnaId: null,
            id: null,
            sourceOfIncome: null,
            createdAt: null,
            updatedAt: null
        };
    }
    ngOnInit() {
        this.loadForm();
        if (this.fnaService.fnaIncome) {
            _fna_constant__WEBPACK_IMPORTED_MODULE_4__.FNAConstant.FNA_DETAIL_OBJ = this.fnaService.fnaIncome;
            this.setIncome(this.fnaService.fnaIncome);
        }
    }
    loadForm() {
        this.formGroup = this.fb.group({
            estimatedMonthlyIncome: [this.income.estimatedMonthlyIncome, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([])],
            estimatedMonthlyIncomeText: [this.income.estimatedMonthlyIncomeText, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            familyMonthlySpending: [this.income.familyMonthlySpending || null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            familyMonthlySpendingText: [this.income.familyMonthlySpendingText, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.nullValidator])],
            fnaId: [this.income.fnaId, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([])],
            id: [this.income.id, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([])],
            sourceOfIncome: [this.income.sourceOfIncome, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([])],
            createdAt: [this.income.createdAt, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([])],
            updatedAt: [this.income.updatedAt, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([])]
        });
        this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
        this.cdf.detectChanges();
    }
    setIncome(data) {
        this.formGroup.controls['estimatedMonthlyIncome'].setValue(data.estimatedMonthlyIncome);
        this.formGroup.controls['estimatedMonthlyIncomeText'].setValue(this.fnaService.mathRoundTo(data.estimatedMonthlyIncome, 2));
        this.formGroup.controls['familyMonthlySpending'].setValue(data.familyMonthlySpending);
        this.formGroup.controls['familyMonthlySpendingText'].setValue(this.fnaService.mathRoundTo(data.familyMonthlySpending, 2));
        this.formGroup.controls['fnaId'].setValue(data.fnaId);
        this.formGroup.controls['id'].setValue(data.id);
        this.formGroup.controls['sourceOfIncome'].setValue(data.sourceOfIncome);
        this.formGroup.controls['createdAt'].setValue(data.createdAt);
        this.formGroup.controls['updatedAt'].setValue(data.updatedAt);
        this.cdf.detectChanges();
    }
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    getFNAIncome() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fnaIncomeManageService.getFNAIncome(this.fnaId).toPromise().then((res) => {
                if (res) {
                    this.setIncome(res);
                }
            });
        });
    }
    backAction() {
        this.changeAnalysis.emit('aboutLLP');
    }
    saveFNAIncome() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formGroup.invalid) {
                (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__.validateAllFields)(this.formGroup);
            }
            else {
                if (this.formGroup.value.id) {
                    yield this.fnaIncomeManageService.updateFNAIncome(this.formGroup.value).toPromise().then((res) => {
                        if (res) {
                            this.alertService.activate('This record was updated', 'Success Message').then(result => {
                                this.backAction();
                            });
                        }
                    });
                }
                else {
                    yield this.fnaIncomeManageService.saveFNAIncome(this.formGroup.value).toPromise().then((res) => {
                        if (res) {
                            this.alertService.activate('This record was created', 'Success Message').then(result => {
                                this.backAction();
                            });
                        }
                    });
                }
            }
        });
    }
    calculateMonthlyIncome(ev) {
        let familyMonthlySpending = Number(ev.replace(/,/g, ''));
        let estimatedMonthlyIncome = familyMonthlySpending / 0.9;
        if (ev) {
            var num = this.fnaService.getNumber(ev);
            if (num != 0) {
                if (this.formGroup.value.familyMonthlySpending != 0) {
                    let estimatedMonthlyIncome = Number(ev.replace(/,/g, '')) / 0.9;
                    this.formGroup.controls['estimatedMonthlyIncomeText'].setValue(this.fnaService.mathRoundTo(estimatedMonthlyIncome, 2));
                }
            }
        }
        this.formGroup.controls['familyMonthlySpending'].setValue(familyMonthlySpending);
        this.formGroup.controls['estimatedMonthlyIncome'].setValue(estimatedMonthlyIncome);
    }
    updateCommaInput(ev) {
        var num = this.fnaService.getNumber(ev.target.value);
        if (num == 0) {
            this.formGroup.controls['familyMonthlySpendingText'].setValue('');
            this.formGroup.controls['estimatedMonthlyIncomeText'].setValue('');
        }
        else {
            this.formGroup.controls['familyMonthlySpendingText'].setValue(num.toLocaleString());
        }
    }
    viewAll() {
        if (this.fnaService.fnaIncome) {
            this.fnaService.openModal('Income');
        }
    }
};
IncomeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _income_manage_service__WEBPACK_IMPORTED_MODULE_6__.FANIncomeManageService },
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_5__.FANService }
];
IncomeComponent.propDecorators = {
    fnaIncome: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    fnaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    changeAnalysis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
IncomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-income',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_income_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_income_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IncomeComponent);



/***/ }),

/***/ 18754:
/*!**************************************************************************!*\
  !*** ./src/app/pages/fna-detail/retirement/retirement-manage.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANRetirementService": () => (/* binding */ FANRetirementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);





const API_ADDON_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/fna`;
let FANRetirementService = class FANRetirementService extends src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ADDON_URL);
        this.httpClient = httpClient;
    }
    getRetirement(fnaId) {
        return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/retirement-saving');
    }
    saveRetirement(data) {
        return this.httpClient.post(API_ADDON_URL + '/retirement-saving', data);
    }
    deleteRetirementById(id) {
        return this.httpClient.delete(API_ADDON_URL + '/retirement-saving/' + id);
    }
    updateRetirement(data) {
        return this.httpClient.put(API_ADDON_URL + '/retirement-saving/', data);
    }
};
FANRetirementService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FANRetirementService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FANRetirementService);



/***/ }),

/***/ 89757:
/*!*********************************************************************!*\
  !*** ./src/app/pages/fna-detail/retirement/retirement.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RetirementComponent": () => (/* binding */ RetirementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_retirement_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./retirement.component.html */ 50744);
/* harmony import */ var _retirement_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retirement.component.scss */ 345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 53489);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fna-constant */ 25674);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-manage.service */ 60865);
/* harmony import */ var _retirement_manage_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retirement-manage.dto */ 48921);
/* harmony import */ var _retirement_manage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retirement-manage.service */ 18754);











let RetirementComponent = class RetirementComponent {
    constructor(fb, cdf, alertService, fnaRetirementService, fnaService) {
        this.fb = fb;
        this.cdf = cdf;
        this.alertService = alertService;
        this.fnaRetirementService = fnaRetirementService;
        this.fnaService = fnaService;
        this.retirement = null;
        this.fnaId = null;
        this.customerDob = null;
        this.customerId = null;
        this.changeAnalysis = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.retirementDto = new _retirement_manage_dto__WEBPACK_IMPORTED_MODULE_6__.RetirementDto();
        this.currentIncome = null;
        this.isCalculate = false;
    }
    ngOnInit() {
        this.loadForm();
        if (this.fnaService.fnaIncome) {
            this.currentIncome = this.fnaService.fnaIncome.estimatedMonthlyIncome;
        }
        if (this.fnaService.fnaRetirementSaving) {
            this.isCalculate = true;
            _fna_constant__WEBPACK_IMPORTED_MODULE_4__.FNAConstant.FNA_DETAIL_OBJ = this.fnaService.fnaRetirementSaving;
            this.setRetirement(this.fnaService.fnaRetirementSaving);
        }
        else {
            if (this.customerDob) {
                this.formGroup.controls['dateOfBirth'].setValue(this.formatDateDDMMYYY(new Date(this.customerDob)));
            }
        }
    }
    backAction() {
        this.changeAnalysis.emit('aboutLLP');
    }
    loadForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.dateOfBirth),
            fnaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.fnaId || null),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.id || 0),
            retirementAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.retirementAge || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.nullValidator]),
            retirementIncome: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.retirementIncome || ''),
            retirementSaving: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.retirementSaving || ''),
            retirementSavingSpouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.retirementSavingSpouse || ''),
            retirementIncomeText: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.retirementIncomeText || ''),
            retirementSavingText: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.retirementSavingText || ''),
            retirementSavingSpouseText: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.retirementSavingSpouseText || ''),
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.createdAt || ''),
            updatedAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.retirementDto.updatedAt || '')
        });
        this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
    }
    getRetirement() {
        let dateOfBirth = '';
        if (this.formGroup.value.dateOfBirth) {
            dateOfBirth = this.formatDateYYYYMMDD(this.formGroup.value.dateOfBirth);
        }
        let retirement = {
            dateOfBirth: dateOfBirth,
            fnaId: this.formGroup.value.fnaId,
            id: this.formGroup.value.id,
            retirementAge: this.formGroup.value.retirementAge,
            retirementIncome: this.formGroup.value.retirementIncome,
            retirementSaving: this.formGroup.value.retirementSaving,
            retirementSavingSpouse: this.formGroup.value.retirementSavingSpouse,
            createdAt: this.formGroup.value.createdAt,
            updatedAt: this.formGroup.value.updatedAt
        };
        return retirement;
    }
    setRetirement(data) {
        if (data.dateOfBirth) {
            data.dateOfBirth = this.formatDateDDMMYYY(this.formatDateYYYYMMDD(data.dateOfBirth));
        }
        this.formGroup.controls['dateOfBirth'].setValue(data.dateOfBirth);
        this.formGroup.controls['fnaId'].setValue(data.fnaId);
        this.formGroup.controls['id'].setValue(data.id);
        this.formGroup.controls['fnaId'].setValue(data.fnaId);
        this.formGroup.controls['retirementAge'].setValue(60);
        this.formGroup.controls['retirementIncome'].setValue(data.retirementIncome);
        this.formGroup.controls['retirementSaving'].setValue(data.retirementSaving);
        this.formGroup.controls['retirementSavingSpouse'].setValue(data.retirementSavingSpouse);
        this.formGroup.controls['retirementIncomeText'].setValue(this.fnaService.mathRoundTo(data.retirementIncome, 2));
        this.formGroup.controls['retirementSavingText'].setValue(this.fnaService.mathRoundTo(data.retirementSaving, 2));
        this.formGroup.controls['retirementSavingSpouseText'].setValue(this.fnaService.mathRoundTo(data.retirementSavingSpouse, 2));
        this.formGroup.controls['createdAt'].setValue(data.createdAt);
        this.formGroup.controls['updatedAt'].setValue(data.updatedAt);
    }
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    saveRetirement() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formGroup.invalid) {
                (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__.validateAllFields)(this.formGroup);
            }
            else {
                yield this.calculate();
                if (this.formGroup.value.id) {
                    yield this.fnaRetirementService.updateRetirement(this.getRetirement()).toPromise().then((res) => {
                        if (res) {
                            this.alertService.activate('This record was updated', 'Success Message').then(result => {
                                this.backAction();
                            });
                        }
                    });
                }
                else {
                    yield this.fnaRetirementService.saveRetirement(this.getRetirement()).toPromise().then((res) => {
                        if (res) {
                            this.formGroup.controls['id'].setValue(res);
                            this.alertService.activate('This record was created', 'Success Message').then(result => {
                                this.backAction();
                            });
                        }
                    });
                }
            }
        });
    }
    calculate() {
        this.isCalculate = true;
        let diffAge = (this.formGroup.value.retirementAge - this.calculate_age(new Date(this.formGroup.value.dateOfBirth.split("/").reverse().join("/"))));
        let percent = 1 + (5 / 100);
        let double = Number(this.fnaService.mathRoundTo(this.currentIncome, 2).replace(/,/g, ''));
        let retirementIncome = double * percent ^ diffAge;
        let retirementSaving = (80 / 100) * retirementIncome;
        let retirementSavingSpouse = retirementSaving * 1.35;
        let calcRetirementIncome = this.fnaService.mathRoundTo(retirementIncome, 2);
        let calcRetirementSaving = this.fnaService.mathRoundTo(retirementSaving, 2);
        let calcRetirementSavingSpouse = this.fnaService.mathRoundTo(retirementSavingSpouse, 2);
        this.formGroup.controls['retirementIncome'].setValue(retirementIncome);
        this.formGroup.controls['retirementSaving'].setValue(retirementSaving);
        this.formGroup.controls['retirementSavingSpouse'].setValue(retirementSavingSpouse);
        this.formGroup.controls['retirementIncomeText'].setValue(calcRetirementIncome);
        this.formGroup.controls['retirementSavingText'].setValue(calcRetirementSaving);
        this.formGroup.controls['retirementSavingSpouseText'].setValue(calcRetirementSavingSpouse);
    }
    calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    formatDateYYYYMMDD(date) {
        var d = new Date(date.split("/").reverse().join("/")), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    formatDateDDMMYYY(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    }
    viewAll() {
        if (this.fnaService.fnaRetirementSaving) {
            this.fnaService.openModal('RetirementSaving');
        }
    }
};
RetirementComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _retirement_manage_service__WEBPACK_IMPORTED_MODULE_7__.FANRetirementService },
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_5__.FANService }
];
RetirementComponent.propDecorators = {
    retirement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    fnaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    customerDob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    changeAnalysis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
RetirementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-retirement',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_retirement_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_retirement_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RetirementComponent);



/***/ }),

/***/ 50631:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/asset/asset.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\">\n        <h3 class=\"card-label left-border-image \">Asset</h3>\n        <div>\n            <div class=\"row form-group\">\n                <div class=\"col-4\">\n                    <div class=\"form-label\">Asset {{ selectedIndex + 1 }}</div>\n                </div>\n                <div class=\"col-8\">\n                    <a class=\" delete\" *ngIf=\"selectedIndex > 0\" (click)=\"deleteAsset()\">Delete</a>\n                </div>\n            </div>\n            <div class=\"row form-group\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Asset Type</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <select autocomplete=\"off\" formControlName=\"assetType\" class=\"form-control form-control-sm\"\n                            name=\"builder[layout][subheader][layoutVersion]\">\n                            <option [value]=\"\">Please Select</option>\n                            <option *ngFor=\"let assect of assectTypes;\" [value]=\"assect.typeCode\">{{ assect.typeValue }}\n                            </option>\n\n                            <!-- <option value=\"building\">Building</option>\n                            <option value=\"motor\">Motor</option>\n                            <option value=\"others\">Others</option> -->\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row form-group\" *ngIf=\"formGroup.value.assetType == 'others' \">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Please Specify <span>*</span></label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                            [class.is-invalid]=\"isControlInvalid('remark')\" [class.is-valid]=\"isControlValid('remark')\"\n                            formControlName=\"remark\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row form-group\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">With insurance protection</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <mat-radio-group formControlName=\"protect\">\n                            <mat-radio-button class=\"example-margin\" [value]=true>Yes</mat-radio-button>\n                            <mat-radio-button class=\"example-margin\" [value]=false>No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row form-group\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Replacement / Purchase Cost <span>*</span></label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" (keyup)=\"updateCommaInput($event)\"\n                            class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                            [class.is-invalid]=\"isControlInvalid('costText')\"\n                            [class.is-valid]=\"isControlValid('costText')\" formControlName=\"costText\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"btn-about\">\n            <button type=\"button\" *ngIf=\"selectedIndex == 0 && assects.length > 0\"\n                class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\" (click)=\"viewAll()\">View\n                All</button>\n            <button type=\"button\" *ngIf=\"selectedIndex >= 0\" class=\"btn btn-primary btn-elevate mx-2\"\n                (click)=\"backToStartAction()\" style=\"width: 150px; margin-bottom: 10px;\">Back Main Page</button>\n            <button type=\"button\" *ngIf=\"selectedIndex > 0\" class=\"btn btn-primary btn-elevate mx-2\"\n                style=\"margin-bottom: 10px;\" (click)=\"backAction()\">Back</button>\n            <button type=\"button\" (click)=\"saveAsset()\" class=\"btn btn-primary btn-elevate mx-2\"\n                style=\"margin-bottom: 10px;\">Save</button>\n            <button type=\"button\" [disabled]=\"!formGroup.value.id\" *ngIf=\"selectedIndex + 1 >= nextCount\"\n                (click)=\"addChild()\" class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\">Add\n                Asset</button>\n            <button type=\"button\" *ngIf=\"selectedIndex + 1 < nextCount\" (click)=\"addChild()\"\n                class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\">Next</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ 30638:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/chart-analysis/chart-analysis.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("");

/***/ }),

/***/ 15668:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/chart-analysis/llp-analysis/llp-analysis.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"margin: 50px 0 0 0;position: relative; \">\n    <div class=\"chart\">\n        <div class=\"inner investment\" (click)=\"actionChart('Freedom')\">\n            <div class=\"sub-inner \" [ngClass]=\"freedom.length? 'bg-freedom' : 'inactive-freedon-left' \">\n\n                <!-- <div>\n                    <div class=\"freedom-left-inner\" [ngClass]=\"freedom.length? 'bg-freedom' : 'inactive-freedon-left' \">\n                    </div>\n                </div>\n                <div>\n                    <div class=\"freedom-right-inner\"\n                        [ngClass]=\"freedom.length? 'bg-freedom' : 'inactive-freedon-left' \">\n                    </div>\n                </div>\n                <div>\n                    <a [ngStyle]=\"{'color':freedom.length? '#ffffff' : '#275f96' }\">Freedom</a>\n                    <img *ngIf=\"freedom.length > 0\" class=\"lpp-icon\" src=\"./assets/images/success/freedom-01.svg\"\n                        alt=\"freedom\" style=\"left: 55.5px; top: 40px;\" />\n                    <img *ngIf=\"freedom.length == 0\" class=\"lpp-icon\" src=\"./assets/images/default/freedom-01.svg\"\n                        alt=\"freedom\" style=\"left: 55.5px; top: 40px;\" />\n                </div> -->\n            </div>\n            <div class=\"lpp-icon\">\n                <img *ngIf=\"freedom.length > 0\" class=\"freedom\" src=\"./assets/images/success/freedom-01.svg\"\n                    alt=\"freedom\" />\n                <img *ngIf=\"freedom.length == 0\" class=\"freedom\" src=\"./assets/images/default/freedom-01.svg\"\n                    alt=\"freedom\" />\n            </div>\n            <a [ngStyle]=\"{'color':freedom.length? '#ffffff' : '#275f96' }\">Freedom</a>\n        </div>\n        <div>\n            <div class=\"investment-1\" [ngStyle]=\"{'background':freedom.length? '#16384d' : '#aaaaaa' }\">\n                <label>INVESTMENT</label>\n            </div>\n        </div>\n        <div class=\"inner saving\">\n            <div class=\"sub-inner\">\n                <div class=\"education-left-inner\" (click)=\"fnaSwitchEvent('Education')\">\n                    <div [ngClass]=\"fnaEducations.length? 'bg-saving' : 'inactive-freedon-right' \"></div>\n                    <a [ngStyle]=\"{'color':fnaEducations.length? '#16384d' : '#275f96' }\">Education</a>\n                    <div class=\"lpp-icon\">\n                        <img *ngIf=\"fnaEducations.length > 0\" class=\"education\"\n                            src=\"./assets/images/success/Education-01.svg\" alt=\"education\" />\n                        <img *ngIf=\"fnaEducations.length == 0\" class=\"education\"\n                            src=\"./assets/images/default/education-01.svg\" alt=\"education\" />\n                    </div>\n                </div>\n                <div class=\"retirement-right-inner\" (click)=\"fnaSwitchEvent('Retirement')\">\n                    <div [ngClass]=\"fnaRetirementSaving? 'bg-saving' : 'inactive-freedon-left' \"></div>\n                    <a [ngStyle]=\"{'color':fnaRetirementSaving? '#16384d' : '#275f96' }\">Retirement</a>\n                    <div class=\"lpp-icon\">\n                        <img *ngIf=\"fnaRetirementSaving\" class=\"retirement-img\"\n                            src=\"./assets/images/success/retirement-01.svg\" alt=\"retirement\" />\n                        <img *ngIf=\"!fnaRetirementSaving\" class=\"retirement-img\"\n                            src=\"./assets/images/default/retirement-01.svg\" alt=\"retirement\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class=\"investment-1 button-saving\"\n                [ngStyle]=\"{'background':fnaEducations.length && fnaRetirementSaving? '#16384d' : '#aaaaaa' }\">\n                <label>SAVING</label>\n            </div>\n        </div>\n        <div class=\"protection\">\n            <div class=\"sub-inner row\">\n                <div class=\"income-left-inner col-4\" (click)=\"fnaSwitchEvent('Income')\">\n                    <div [ngClass]=\"fnaIncome? 'bg-protection' : 'inactive-freedon-left' \"></div>\n                    <a [ngStyle]=\"{'color':fnaIncome? '#ffffff' : '#275f96' }\">Income</a>\n                    <div class=\"lpp-icon\">\n                        <img *ngIf=\"fnaIncome\" class=\"income\" src=\"./assets/images/success/income-01.svg\"\n                            alt=\"income\" />\n                        <img *ngIf=\"!fnaIncome\" class=\"income\" src=\"./assets/images/default/income-01.svg\"\n                            alt=\"income\" />\n                    </div>\n                </div>\n                <div class=\"health-middle-inner col-4\" (click)=\"fnaSwitchEvent('Health')\">\n                    <div [ngClass]=\"fnaHealths.length? 'bg-protection' : 'inactive-freedon-right' \"> </div>\n                    <a [ngStyle]=\"{'color':fnaHealths.length? '#ffffff' : '#275f96' }\"\n                        style=\"margin: 0 0 0 2px;\">Health</a>\n                    <div class=\"lpp-icon\">\n                        <img *ngIf=\"fnaHealths.length > 0\" class=\"health\" src=\"./assets/images/success/health-01.svg\"\n                            alt=\"healths\" />\n                        <img *ngIf=\"fnaHealths.length == 0\" class=\"health\" src=\"./assets/images/default/health-01.svg\"\n                            alt=\"healths\" />\n                    </div>\n                </div>\n                <div class=\"asset-right-inner col-4\" (click)=\"fnaSwitchEvent('Asset')\">\n                    <div [ngClass]=\"fnaAssets.length? 'bg-protection' : 'inactive-freedon-left' \"></div>\n                    <div class=\"lpp-icon\">\n                        <img *ngIf=\"fnaAssets.length > 0\" class=\"assets\" src=\"./assets/images/success/assets-01.svg\"\n                            alt=\"assets\" />\n                        <img *ngIf=\"fnaAssets.length == 0\" class=\"assets\" src=\"./assets/images/default/assets-01.svg\"\n                            alt=\"assets\" />\n                    </div>\n                    <a [ngStyle]=\"{'color':fnaAssets.length? '#ffffff' : '#275f96' }\">Assets</a>\n                </div>\n            </div>\n        </div>\n        <div>\n            <div [ngStyle]=\"{'background':fnaIncome && fnaHealths.length && fnaAssets.length? '#16384d' : '#aaaaaa' }\"\n                class=\"investment-1 button-protection\"><label>PROTECTION</label>\n            </div>\n        </div>\n        <div class=\"left-border\"></div>\n        <div class=\"right-border\"></div>\n    </div>\n</div>\n\n<div class=\"btn-next\">\n    <button type=\"button\" class=\"btn btn-primary btn-elevate btn-block mt-3 \"\n        (click)=\"fnaSwitchEvent('product')\"><label>Save &\n            Next</label></button>\n</div>");

/***/ }),

/***/ 59963:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/chart-analysis/product-analysis/product-analysis.component.html ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"product-grid\">\n    <h3 class=\"card-label left-border-image\" style=\"margin: 24px 0;\">Recommended</h3>\n    <div class=\"products col-12\" *ngFor=\"let fnaProduct of fnaProducts;\">\n        <div class=\"col-2\" style=\"float: left;\n        padding: 0;\n        width: 60px;\n        height: 60px;\n        position: relative;\n        top: -10px;\">\n            <img *ngIf=\"fnaProduct.productImage\" [src]=\"fnaProduct.productImage\" style=\"width: 100%; height: 100%;\"\n                title=\"\" alt=\"\" />\n        </div>\n        <label class=\"col-6\">{{ fnaProduct.name }}</label>\n        <button class=\"col-4\" type=\"button\" (click)=\"display(fnaProduct)\" class=\"btn btn-primary btn-elevate\"><label>Get\n                Quote</label></button>\n    </div>\n    <div class=\"btn-group col-12\">\n        <button type=\"button\" class=\"btn\"\n            [ngStyle]=\"{'background-color': productSwitch === 'product' ? '#005f99' : '#A6A6A6' }\"\n            (click)=\"previous('aboutLLP')\"><label>Previous</label></button>\n        <button type=\"button\" class=\"btn\"\n            [ngStyle]=\"{'background-color': productSwitch === 'save' ? '#005f99' : '#A6A6A6' }\"\n            (click)=\"saveProduct('save')\"><label>Save</label></button>\n    </div>\n</div>");

/***/ }),

/***/ 52816:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/education/education.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\">\n        <h3 class=\"card-label left-border-image \">Education Savings</h3>\n        <div class=\"row\">\n            <div class=\"form-group\">\n                <div class=\"col-12\" style=\"padding-left: 26px; margin: 0 0 10px 0;\">Information on children's age and\n                    university years\n                    collected earlier</div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <h4 class=\"col-4\">Child {{ selectedIndex + 1 }}</h4>\n            <a class=\"col-1 delete\" *ngIf=\"selectedIndex > 0\" (click)=\"deleteDeleteById()\">Delete</a>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"form-group\">\n                    <label class=\"form-label\">Child Name</label>\n                </div>\n            </div>\n            <div class=\"col-8\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"actualDateStr\" autocomplete=\"off\"\n                        formControlName=\"childName\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"form-group\">\n                    <label class=\"form-label\">Date of Birth <span>*</span></label>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" readonly class=\"form-control form-control-sm date-input\" formControlName=\"dateOfBirth\"\n                            [min]=\"fromMinDate\" [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" (dateChange)=\"doValid()\"\n                            autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('dateOfBirth')\"\n                            [class.is-valid]=\"isControlValid('dateOfBirth')\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-2\" style=\"padding: 0;\">\n                <button type=\"button\" style=\"width: auto;\n                float: left;\n                margin: 0 !important;\" (click)=\"clearDOB()\" class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"form-group\">\n                    <label class=\"form-label\">Higher Education</label>\n                </div>\n            </div>\n            <div class=\"col-8\">\n                <div class=\"form-group\">\n                    <mat-radio-group formControlName=\"highEducation\">\n                        <mat-radio-button class=\"example-margin\" value=\"bachelor\">Bachelor</mat-radio-button>\n                        <mat-radio-button class=\"example-margin\" value=\"master\">Master</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"form-group\">\n                    <label class=\"form-label\">Sum Assured <span>*</span></label>\n                </div>\n            </div>\n            <div class=\"col-8\">\n                <div class=\"form-group\">\n                    <input type=\"text\" (keyup)=\"updateCommaInput($event, 'sumAssured')\"\n                        class=\"form-control form-control-sm\" name=\"sumAssured\" autocomplete=\"off\"\n                        [class.is-invalid]=\"isControlInvalid('sumAssured')\"\n                        [class.is-valid]=\"isControlValid('sumAssured')\" formControlName=\"sumAssured\"\n                        (ngModelChange)=\"calculateEducationExpense($event)\" [readonly]=\"!formGroup.value.dateOfBirth\">\n                </div>\n                <div class=\"error-message\" *ngIf=\"isSumAssured\">Sum Assured must be between 5000000 and 100000000</div>\n                <div class=\"error-message\" *ngIf=\"isCustomerAge\">Customer age must be between 18 and 56 years</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"form-group\">\n                    <label class=\"form-label\">Education Expenses</label>\n                </div>\n            </div>\n            <div class=\"col-8\">\n                <div class=\"form-group\">\n                    <input type=\"text\" readonly class=\"form-control form-control-sm\" name=\"educationExpense\"\n                        autocomplete=\"off\" formControlName=\"educationExpense\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btn-about\">\n            <button type=\"button\" *ngIf=\"selectedIndex == 0 && educations.length > 0\"\n                class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\" (click)=\"viewAll()\">View\n                All</button>\n            <button type=\"button\" *ngIf=\"selectedIndex >= 0\" class=\"btn btn-primary btn-elevate mx-2\"\n                (click)=\"backToStartAction()\" style=\"width: 150px; margin-bottom: 10px;\">Back Main Page</button>\n            <button type=\"button\" *ngIf=\"selectedIndex > 0\" class=\"btn btn-primary btn-elevate mx-2\"\n                (click)=\"backAction()\" style=\"margin-bottom: 10px;\">Back</button>\n            <button type=\"button\" (click)=\"saveEducation()\" class=\"btn btn-primary btn-elevate mx-2\"\n                style=\"margin-bottom: 10px;\">Save</button>\n            <button type=\"button\" [disabled]=\"!formGroup.value.id\" *ngIf=\"selectedIndex + 1 >= nextCount\"\n                (click)=\"addChild('add')\" class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\">Add\n                Child</button>\n            <button type=\"button\" [disabled]=\"!formGroup.value.id\" *ngIf=\"selectedIndex + 1 < nextCount\"\n                (click)=\"addChild('next')\" class=\"btn btn-primary btn-elevate mx-2\"\n                style=\"margin-bottom: 10px;\">Next</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ 26629:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/fna-detail.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"box-grid\" style=\"background: #fff; border: 1px solid #d3cbcb; \">\n  <div class=\"financial-grid\">\n    <div style=\"width: 97%; border-bottom: medium dashed #d9d9d9;\">\n      <h3 class=\"card-label left-border-image\">Financial Needs Analysis</h3>\n      <div class=\"financial\">\n        <div>\n          <label>Customer :</label>\n          <label>{{ passValue.customerName }}</label>\n        </div>\n        <div>\n          <label>Created By : </label>\n          <label>{{ passValue.createdByName }}</label>\n        </div>\n        <div>\n          <label>Created : </label>\n          <label>{{ passValue.createdAt }}</label>\n        </div>\n      </div>\n      <div class=\"fna-progress\">\n        <div class=\"progress\">\n          <span style=\"width:100%; height: 100%;\" [ngClass]=\"bgColor\" [ngStyle]=\"{'height': percentage }\"><span\n              class=\"sub-progress\">\n              <div class=\"text-rotate\" [ngStyle]=\"{'bottom': totalPercentageText }\">{{ percentage }}</div>\n            </span></span>\n        </div>\n      </div>\n    </div>\n    <div [ngStyle]=\"{'color':fnaTextColor? '#00acea' : '#ff8100' }\"><label>FNA Progress\n      </label></div>\n  </div>\n  <div class=\"chart-grid\" [ngSwitch]=\"fnaSwitch\">\n    <div *ngIf=\"selected == '' \" class=\"fna-segment\">\n      <div>\n        <button type=\"button\" class=\"btn\"\n          [ngStyle]=\"{'background-color': fnaSwitch === 'aboutLLP' ? '#005f99' : '#A6A6A6' }\"><label>About\n            LPP</label></button>\n        <button type=\"button\" class=\"btn\"\n          [ngStyle]=\"{'background-color': fnaSwitch === 'product' ? '#005f99' : '#A6A6A6' }\"><label>Product\n            Recommendation</label></button>\n      </div>\n    </div>\n    <app-llp-analysis *ngSwitchDefault [aboutLLP]=\"aboutLLP\" [customerId]=\"customerId\" (change)=\"fnaEvent($event)\">\n    </app-llp-analysis>\n    <app-product-analysis [fnaId]=\"oldId\" [customerId]=\"customerId\" [passValue]=\"passValue\" [product]=\"product\"\n      *ngSwitchCase=\"'product'\" (changeProduct)=\"changeProduct($event)\">\n    </app-product-analysis>\n    <app-education [fnaId]=\"oldId\" [customerId]=\"customerId\" [education]=\"education\" *ngSwitchCase=\"'Education'\"\n      (changeAnalysis)=\"fnaEvent($event)\">\n    </app-education>\n    <app-health [fnaId]=\"oldId\" [customerId]=\"customerId\" [health]=\"health\" *ngSwitchCase=\"'Health'\"\n      (changeAnalysis)=\"fnaEvent($event)\">\n    </app-health>\n    <app-income [fnaId]=\"oldId\" [customerId]=\"customerId\" [fnaIncome]=\"fnaIncome\" *ngSwitchCase=\"'Income'\"\n      (changeAnalysis)=\"fnaEvent($event)\">\n    </app-income>\n    <app-retirement [fnaId]=\"oldId\" [customerId]=\"customerId\" [retirement]=\"retirement\"\n      [customerDob]=\"passValue.customerDob\" *ngSwitchCase=\"'Retirement'\" (changeAnalysis)=\"fnaEvent($event)\">\n    </app-retirement>\n    <app-asset [fnaId]=\"oldId\" [customerId]=\"customerId\" [fnaAssets]=\"fnaAssets\" *ngSwitchCase=\"'Asset'\"\n      (changeAnalysis)=\"fnaEvent($event)\">\n    </app-asset>\n  </div>\n</div>");

/***/ }),

/***/ 93077:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/freedom/freedom.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>freedom works!</p>\n");

/***/ }),

/***/ 14148:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/health/health.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n    <h3 class=\"card-label left-border-image\">Health</h3>\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\">\n        <div class=\"set\" *ngIf=\"selectedIndex == 2\">\n            <div class=\"col-12\">We need health to work, so whatever it costs we need to\n                protect our health</div>\n            <h4 class=\"col-12 sub-title\" style=\"padding-left: 13px;\">Current health protection self</h4>\n            <div class=\"row form-group\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\"> <label class=\"form-label\">With production</label> </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <mat-radio-group formControlName=\"protectionSelf\">\n                            <mat-radio-button class=\"example-margin\" [value]=true>Yes\n                            </mat-radio-button>\n                            <mat-radio-button class=\"example-margin\" [value]=false>No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"formGroup.value.protectionSelf\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by insurance</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputSelf($event, 'amountByInsuranceSelf')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountByInsuranceSelf')\"\n                                [class.is-valid]=\"isControlValid('amountByInsuranceSelf')\"\n                                formControlName=\"amountByInsuranceSelf\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by employer</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputSelf($event, 'amountByEmployerSelf')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountByEmployerSelf')\"\n                                [class.is-valid]=\"isControlValid('amountByEmployerSelf')\"\n                                formControlName=\"amountByEmployerSelf\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by social benefit</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputSelf($event, 'amountBySocialBenefitSelf')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountBySocialBenefitSelf')\"\n                                [class.is-valid]=\"isControlValid('amountBySocialBenefitSelf')\"\n                                formControlName=\"amountBySocialBenefitSelf\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- //////////////////////////////// -->\n        <div class=\"set\" *ngIf=\"selectedIndex == 2\">\n            <div class=\"row\">\n                <div class=\"form-group\">\n                    <div class=\"col-12 sub-title\">Current health protection Spouse</div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Name of Spouse</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                            formControlName=\"nameSpouse\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Date of Birth</label>\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\n                                formControlName=\"dateOfBirthSpouse\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n                                [matDatepicker]=\"picker\" (dateChange)=\"doValid('dateOfBirthSpouse')\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-2\" style=\"padding: 0;\">\n                    <button type=\"button\" style=\"width: auto;\n                    float: left;\n                    margin: 0 !important;\" (click)=\"clearDOB('dateOfBirthSpouse')\"\n                        class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\"> With production</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-8\">\n                    <div class=\"form-group\">\n                        <mat-radio-group formControlName=\"protectionSpouse\">\n                            <mat-radio-button class=\"example-margin\" [value]=true>Yes</mat-radio-button>\n                            <mat-radio-button class=\"example-margin\" [value]=false>No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"formGroup.value.protectionSpouse\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by insurance</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputSpouse($event, 'amountByInsuranceSpouse')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountByInsuranceSpouse')\"\n                                [class.is-valid]=\"isControlValid('amountByInsuranceSpouse')\"\n                                formControlName=\"amountByInsuranceSpouse\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by employer</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputSpouse($event, 'amountByEmployerSpouse')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountByEmployerSpouse')\"\n                                [class.is-valid]=\"isControlValid('amountByEmployerSpouse')\"\n                                formControlName=\"amountByEmployerSpouse\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by social benefit</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputSpouse($event, 'amountBySocialBenefitSpouse')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountBySocialBenefitSpouse')\"\n                                [class.is-valid]=\"isControlValid('amountBySocialBenefitSpouse')\"\n                                formControlName=\"amountBySocialBenefitSpouse\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <h4 class=\"sub-title\" style=\"padding: 0;\">Current health protection Child {{ selectedIndex - 1\n                            }}\n                        </h4>\n                    </div>\n                </div>\n                <div class=\"col-1\">\n                    <div class=\"form-group\">\n                        <a *ngIf=\"selectedIndex > 2\" class=\"delete\" (click)=\"deleteHealthById()\">Delete</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Name of Child</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                            formControlName=\"name\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Date of Birth</label>\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\n                                formControlName=\"dateOfBirth\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\n                                [matDatepicker]=\"picker\" (dateChange)=\"doValid('dateOfBirth')\" autocomplete=\"off\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-2\" style=\"padding: 0;\">\n                    <button type=\"button\" style=\"width: auto;\n                    float: left;\n                    margin: 0 !important;\" (click)=\"clearDOB('dateOfBirth')\"\n                        class=\"btn btn-primary btn-elevate mx-2\">Clear</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">With production</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <mat-radio-group formControlName=\"protection\">\n                            <mat-radio-button class=\"example-margin\" [value]=true>Yes</mat-radio-button>\n                            <mat-radio-button class=\"example-margin\" [value]=false>No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n\n            <div *ngIf=\"formGroup.value.protection\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by insurance</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputChild($event, 'amountByInsurance')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountByInsurance')\"\n                                [class.is-valid]=\"isControlValid('amountByInsurance')\"\n                                formControlName=\"amountByInsurance\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by employer</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputChild($event, 'amountByEmployer')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountByEmployer')\"\n                                [class.is-valid]=\"isControlValid('amountByEmployer')\"\n                                formControlName=\"amountByEmployer\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"form-group\">\n                            <label class=\"form-label\">Amount protected by social benefit</label>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" (keyup)=\"updateCommaInputChild($event, 'amountBySocialBenefit')\"\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\n                                [class.is-invalid]=\"isControlInvalid('amountBySocialBenefit')\"\n                                [class.is-valid]=\"isControlValid('amountBySocialBenefit')\"\n                                formControlName=\"amountBySocialBenefit\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btn-about col-12\">\n            <button type=\"button\" *ngIf=\"selectedIndex == 2 && tempChildList.length > 0\"\n                class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\" (click)=\"viewAll()\">View\n                All</button>\n            <button type=\"button\" *ngIf=\"selectedIndex >= 2\" class=\"btn btn-primary btn-elevate mx-2\"\n                (click)=\"backToStartAction()\" style=\"width: 150px; margin-bottom: 10px;\">Back Main Page</button>\n            <button type=\"button\" *ngIf=\"selectedIndex > 2\" class=\"btn btn-primary btn-elevate mx-2\"\n                style=\"margin-bottom: 10px;\" (click)=\"backAction()\">Back</button>\n            <button type=\"button\" style=\"margin-bottom: 10px;\" (click)=\"saveAndNextHealth()\"\n                class=\"btn btn-primary btn-elevate mx-2\">Save</button>\n            <button type=\"button\" style=\"margin-bottom: 10px;\" (click)=\"addChild('add')\"\n                [disabled]=\"!formGroup.value.id\" *ngIf=\"selectedIndex <= 4 && selectedIndex - 1 >= nextCount\"\n                class=\"btn btn-primary btn-elevate mx-2\">Add\n                Child</button>\n            <button type=\"button\" style=\"margin-bottom: 10px;\" (click)=\"addChild('next')\"\n                *ngIf=\"selectedIndex <= 4 && selectedIndex - 1 < nextCount\"\n                class=\"btn btn-primary btn-elevate mx-2\">Next</button>\n\n        </div>\n    </form>\n\n    <!-- selectedIndex - 1 -->\n    <!-- <pre>{{formGroup.value | json}}</pre> -->\n\n\n</div>");

/***/ }),

/***/ 12519:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/income/income.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n    <h3 class=\"card-label left-border-image\">Income</h3>\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\" (ngSubmit)=\"saveFNAIncome()\">\n        <div class=\"about\">\n            <div style=\"padding-left: 13px;\">We all work for our income - can you provide some details</div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Source of Income</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <select formControlName=\"sourceOfIncome\" class=\"form-control form-control-sm\"\n                            name=\"builder[layout][subheader][layoutVersion]\">\n                            <option value=\"employee\">Employee</option>\n                            <option value=\"professional\">Professional</option>\n                            <option value=\"nrm\">NRM</option>\n                            <option value=\"smallbusiness\">Small business</option>\n                            <option value=\"largebusiness\">Large business</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Family Monthly Spending (lakhs) <span style=\"position: absolute;\n                            top: 9px;\n                            right: 10px;\">*</span> </label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" (keyup)=\"updateCommaInput($event)\"\n                            class=\"form-control form-control-sm form-control-md\" name=\"familyMonthlySpendingText\"\n                            autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('familyMonthlySpendingText')\"\n                            [class.is-valid]=\"isControlValid('familyMonthlySpendingText')\"\n                            formControlName=\"familyMonthlySpendingText\"\n                            (ngModelChange)=\"calculateMonthlyIncome($event)\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Estimated Monthly Income (lakhs) </label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-sm form-control-md\" readonly\n                            name=\"estimatedMonthlyIncomeText\" autocomplete=\"off\"\n                            formControlName=\"estimatedMonthlyIncomeText\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"btn-about col-12\">\n            <button type=\"button\" *ngIf=\"fnaService.fnaIncome\" class=\"btn btn-primary btn-elevate mx-2\"\n                style=\"margin-bottom: 10px;\" (click)=\"viewAll()\">View All</button>\n            <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"backAction()\"\n                style=\"width: 150px; margin-bottom: 10px; \">Back\n                Main Page</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-elevate mx-2\" style=\" margin-bottom: 10px;\">Save</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ 50744:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/fna-detail/retirement/retirement.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n    <h3 class=\"card-label left-border-image\">Retirement Savings</h3>\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\" (ngSubmit)=\"saveRetirement()\">\n        <div class=\"row\">\n            <div class=\"col-12\" style=\"padding-left: 26px; margin: 5px 0;\">Information on children's age and university\n                years collected earlier</div>\n        </div>\n        <div class=\"set\">\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\"> <label class=\"form-label\">Date of Birth</label> </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group \">\n                            <input type=\"text\" readonly class=\"form-control form-control-sm form-control-md\"\n                                autocomplete=\"off\" formControlName=\"dateOfBirth\" />\n                            <!-- <input type=\"text\" ngbDatepicker #ad=\"ngbDatepicker\" readonly=\"true\"\n                                class=\"form-control form-control-sm\" name=\"actualDateStr\" autocomplete=\"off\"\n                                formControlName=\"dateOfBirth\" />\n                            <div class=\"input-group-append\" (click)=\"ad.toggle()\">\n                                <span class=\"input-group-text\">\n                                    <i class=\"text-dark-50 flaticon-calendar\"></i>\n                                </span>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Retirement Age</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"col-7\" style=\"padding: 0; float: left;\">\n                        <div class=\"form-group\">\n                            <input type=\"number\" readonly class=\"form-control form-control-sm form-control-md\"\n                                autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('retirementAge')\"\n                                [class.is-valid]=\"isControlValid('retirementAge')\" formControlName=\"retirementAge\" />\n                        </div>\n                    </div>\n                    <div class=\"col-5\" style=\"float: right; padding: 0;\">\n                        <div class=\"form-group\">\n                            <button type=\"button\" class=\"btn btn-primary btn-elevate\" style=\"float: left; width: auto;\"\n                                [disabled]=\"!currentIncome\" (click)=\"calculate()\">Calculate</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Pre-retirement Income</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" readonly=\"true\" class=\"form-control form-control-sm\"\n                            name=\"retirementIncomeText\" autocomplete=\"off\" formControlName=\"retirementIncomeText\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Retirement Savings Required</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" readonly=\"true\" class=\"form-control form-control-sm\"\n                            name=\"retirementSavingText\" autocomplete=\"off\" formControlName=\"retirementSavingText\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <div class=\"form-group\">\n                        <label class=\"form-label\">Retirement Savings Incl. Spouse</label>\n                    </div>\n                </div>\n                <div class=\"col-8\">\n                    <input type=\"text\" readonly=\"true\" class=\"form-control form-control-sm\"\n                        name=\"retirementSavingSpouseText\" autocomplete=\"off\"\n                        formControlName=\"retirementSavingSpouseText\" />\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"btn-about col-12\">\n            <button type=\"button\" *ngIf=\"fnaService.fnaRetirementSaving\" class=\"btn btn-primary btn-elevate mx-2\"\n                (click)=\"viewAll()\" style=\"margin-bottom: 10px;\">View All</button>\n            <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"backAction()\"\n                style=\"width: 150px;margin-bottom: 10px; \">Back\n                Main Page</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\"\n                [disabled]=\"!isCalculate\">Save</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ 88722:
/*!*************************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3, h4 {\n  font-size: 0.9rem;\n}\n.add-child {\n  float: left;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\n.delete {\n  display: inline-block;\n  color: #005f99 !important;\n  text-decoration: underline;\n  font-size: 0.9rem;\n}\nbutton {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksMEJBQUE7QUFFUjtBQUVBO0VBQ0ksaUJBQUE7QUFDSjtBQUVBO0VBQ0ksV0FBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXNzZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWFib3V0IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmgzLCBoNCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5hZGQtY2hpbGQge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sLTR7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICB9XG59XG5cbi5kZWxldGV7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjMDA1Zjk5ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbmJ1dHRvbntcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cblxuXG4iXX0= */";

/***/ }),

/***/ 86894:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/chart-analysis.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".up {\n  height: 650px;\n  width: 85%;\n  color: #fff;\n  background-image: url('tringle.png');\n  background-size: 100%;\n  background-size: cover;\n}\n\n.up p {\n  text-align: center;\n  top: 80px;\n  left: -47px;\n  position: relative;\n  width: 93px;\n  height: 93px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBWUksYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBVko7O0FBYUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFWSiIsImZpbGUiOiJjaGFydC1hbmFseXNpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cCB7XG4gICAgLy8gd2lkdGg6IDBweDtcbiAgICAvLyBoZWlnaHQ6IDBweDtcbiAgICAvLyBib3JkZXItc3R5bGU6IGluc2V0O1xuICAgIC8vIGJvcmRlci13aWR0aDogMCAxMDBweCAxNzMuMnB4IDEwMHB4O1xuICAgIC8vIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwN2JmZiB0cmFuc3BhcmVudDtcbiAgICAvLyBmbG9hdDogbGVmdDtcbiAgICAvLyB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XG4gICAgLy8gLW1zLXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICAvLyAtbW96LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICAvLyAtby10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XG4gICAgaGVpZ2h0OiA2NTBweDtcbiAgICB3aWR0aDogODUlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpbmdsZS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi51cCBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiA4MHB4O1xuICAgIGxlZnQ6IC00N3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTNweDtcbiAgICBoZWlnaHQ6IDkzcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 75789:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/llp-analysis/llp-analysis.component.scss ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".sub-inner {\n  margin: 0 auto;\n  text-align: center;\n  position: relative;\n}\n\n.left-border {\n  transform: skewX(-30deg);\n  width: 95px;\n  background: #fff;\n  height: 457px;\n  position: absolute;\n  bottom: 0;\n  left: 23px;\n  z-index: 1;\n}\n\n.right-border {\n  transform: skewX(30deg);\n  width: 95px;\n  background: #fff;\n  height: 457px;\n  position: absolute;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n}\n\n.inner {\n  height: 120px;\n}\n\n.investment {\n  width: 35%;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.investment .freedom-left-inner {\n  width: 50%;\n  float: left;\n  height: 120px;\n  background: #f2f2f2;\n  position: relative;\n}\n\n.investment .freedom-left-inner .progress {\n  top: 31px;\n  left: 62px;\n  width: 22.75px;\n}\n\n.investment .freedom-right-inner {\n  width: 50%;\n  float: right;\n  height: 120px;\n  background: #f2f2f2;\n}\n\n.investment a {\n  position: absolute;\n  top: 88px;\n  text-decoration: underline;\n  color: #f5821f;\n  width: 97%;\n  text-align: center;\n  display: block;\n  left: 5px;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.saving {\n  width: 65%;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.saving .education-left-inner {\n  width: 50%;\n  float: left;\n  height: 120px;\n  background: #f2f2f2;\n  position: relative;\n}\n\n.saving .education-left-inner a {\n  position: absolute;\n  bottom: 21px;\n  text-decoration: underline;\n  color: #7f7f7f;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  left: 12%;\n}\n\n.saving .education-left-inner .progress {\n  left: 77px;\n  top: 30px;\n}\n\n.saving .retirement-right-inner {\n  width: 50%;\n  float: right;\n  height: 120px;\n  background: #f2f2f2;\n  position: relative;\n}\n\n.saving .retirement-right-inner a {\n  position: absolute;\n  bottom: 21px;\n  text-decoration: underline;\n  color: #7f7f7f;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  right: 11%;\n}\n\n.saving .retirement-right-inner .progress {\n  left: 50px;\n  top: 30px;\n}\n\n.protection {\n  width: 460px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.protection .income-left-inner {\n  padding: 0;\n  height: 140px;\n  background: #f2f2f2;\n}\n\n.protection .income-left-inner a {\n  position: absolute;\n  bottom: 30px;\n  text-decoration: underline;\n  color: #22aae1;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  left: 13%;\n}\n\n.protection .income-left-inner .progress {\n  top: 18px;\n  left: 83px;\n}\n\n.protection .health-middle-inner {\n  padding: 0;\n  height: 140px;\n  background: #f2f2f2;\n}\n\n.protection .health-middle-inner a {\n  position: absolute;\n  bottom: 30px;\n  text-decoration: underline;\n  color: #f5821f;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.protection .health-middle-inner .progress {\n  top: 18px;\n  left: 62px;\n}\n\n.protection .asset-right-inner {\n  height: 140px;\n  padding: 0;\n  background: #f2f2f2;\n}\n\n.protection .asset-right-inner a {\n  position: absolute;\n  bottom: 30px;\n  text-decoration: underline;\n  color: #f5821f;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  right: 15%;\n}\n\n.protection .asset-right-inner .progress {\n  left: 43px;\n  top: 18px;\n}\n\n.left-transparent {\n  height: 360px;\n  position: absolute;\n  background: #fff;\n  width: 70px;\n  top: 0;\n  transform: skewX(-29.2deg);\n  left: 28px;\n  z-index: 1;\n}\n\n.right-transparent {\n  height: 360px;\n  position: absolute;\n  background: #fff;\n  width: 70px;\n  top: 0;\n  transform: skewX(29.2deg);\n  right: 28px;\n  z-index: 1;\n}\n\n.investment-dot {\n  position: absolute;\n  top: 120px;\n  width: 100%;\n  border-bottom: medium dashed #d9d9d9;\n  z-index: 2;\n}\n\n.investment-dot span {\n  position: absolute;\n  top: -100px;\n  color: #7f7f7f;\n  text-decoration: underline;\n}\n\n.saving-dot {\n  position: absolute;\n  top: 240px;\n  width: 100%;\n  border-bottom: medium dashed #d9d9d9;\n  z-index: 2;\n}\n\n.saving-dot span {\n  position: absolute;\n  top: -100px;\n  color: #7f7f7f;\n  text-decoration: underline;\n}\n\n.protection-dot {\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  border-bottom: medium dashed #d9d9d9;\n  z-index: 2;\n}\n\n.protection-dot span {\n  position: absolute;\n  top: -100px;\n  color: #7f7f7f;\n  text-decoration: underline;\n}\n\n.progress {\n  top: 10px;\n  left: 69%;\n  width: 15%;\n  height: 55%;\n  position: absolute;\n  overflow: hidden;\n  background-color: transparent;\n  border-radius: 0 !important;\n}\n\n.progress span {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.sub-progress {\n  background-color: #d6185e;\n  animation: progressBar1 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes progressBar1 {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 100%;\n  }\n}\n\n.text-rotate {\n  color: #fff;\n  position: relative;\n  top: 45%;\n  /* IE 9 */\n  transform: rotate(90deg);\n}\n\n.saving-border {\n  width: 1px;\n  height: 90%;\n  background: #d9d9d9;\n  position: absolute;\n  right: 0;\n  top: 8px;\n}\n\n.btn-next {\n  width: 100%;\n  overflow: hidden;\n  margin: 47px 0 0 0;\n}\n\n.inactive-freedon-left {\n  background-color: #cac9ca !important;\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n}\n\n.inactive-freedon-right {\n  background-color: #cac9ca !important;\n  opacity: 0.3;\n  width: 100%;\n  height: 100%;\n}\n\n.red {\n  background: red;\n}\n\n.investment-1 {\n  text-align: center;\n  width: 22%;\n  margin: 0 auto;\n  height: 25px;\n  left: 6px;\n  transform: skewX(60deg);\n  position: relative;\n}\n\n.investment-1 label {\n  transform: skewX(-60deg);\n  color: #fff;\n  font-size: 10px;\n  margin: 0;\n}\n\n.bg-protection {\n  background: #ff8100 !important;\n  height: 100%;\n  width: 100%;\n}\n\n.bg-saving {\n  background: #ffd300 !important;\n  height: 100%;\n  width: 100%;\n}\n\n.bg-freedom {\n  background: #00acea !important;\n  height: 100%;\n  width: 100%;\n}\n\n.lpp-icon {\n  width: 100%;\n  position: absolute;\n  top: 40px;\n  text-align: center;\n}\n\n.lpp-icon img {\n  max-width: 35px;\n  min-width: 25px;\n  position: relative;\n}\n\n.lpp-icon .education {\n  left: 13%;\n  top: -7px;\n}\n\n.lpp-icon .retirement-img {\n  right: 13%;\n  top: -7px;\n}\n\n.lpp-icon .income {\n  left: 15%;\n  top: 4px;\n}\n\n.lpp-icon .health {\n  top: 4px;\n}\n\n.lpp-icon .assets {\n  right: 16%;\n  top: 4px;\n}\n\n.lpp-icon .freedom {\n  top: 5px;\n}\n\n.chart {\n  position: relative;\n  margin: 0 auto;\n}\n\n@media screen and (min-width: 320px) and (max-width: 460px) {\n  .chart {\n    width: 265px;\n  }\n  .chart img {\n    min-width: 25px;\n    max-width: 25px;\n  }\n  .chart .investment {\n    height: 90px;\n  }\n  .chart .investment .lpp-icon {\n    top: 28px;\n  }\n  .chart .investment a {\n    top: 65px;\n    font-size: 10px;\n  }\n  .chart .saving {\n    height: 90px;\n  }\n  .chart .saving .lpp-icon {\n    top: 28px;\n  }\n  .chart .saving a {\n    top: 60px;\n    font-size: 10px;\n  }\n  .chart .protection {\n    height: 90px;\n  }\n  .chart .protection .lpp-icon {\n    top: 28px;\n  }\n  .chart .protection a {\n    top: 65px;\n    font-size: 10px;\n  }\n  .chart .investment-1 {\n    height: 20px;\n    width: 23%;\n  }\n  .chart .investment-1 label {\n    font-size: 9px;\n    line-height: 20px;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: 0px;\n  }\n\n  .left-border {\n    transform: skewX(-23deg);\n    width: 60px;\n    height: 312px;\n    left: 5px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(23deg);\n    width: 60px;\n    height: 312px;\n    right: 5px;\n    bottom: 18px;\n  }\n}\n\n@media screen and (min-width: 461px) and (max-width: 680px) {\n  .chart {\n    width: 395px;\n  }\n  .chart img {\n    min-width: 25px;\n    max-width: 25px;\n  }\n  .chart .investment {\n    height: 100px;\n  }\n  .chart .investment .lpp-icon {\n    top: 27px;\n  }\n  .chart .investment a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .saving {\n    height: 100px;\n  }\n  .chart .saving .lpp-icon {\n    top: 27px;\n  }\n  .chart .saving a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .protection {\n    height: 100px;\n  }\n  .chart .protection .lpp-icon {\n    top: 27px;\n  }\n  .chart .protection a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .investment-1 {\n    height: 20px;\n    width: 23%;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: 0px;\n  }\n\n  .left-border {\n    transform: skewX(-30deg);\n    width: 75px;\n    height: 350px;\n    left: 25px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(30deg);\n    width: 75px;\n    height: 350px;\n    right: 25px;\n    bottom: 18px;\n  }\n}\n\n@media screen and (min-width: 681px) and (max-width: 780px) {\n  .chart {\n    width: 430px;\n  }\n  .chart img {\n    min-width: 30px;\n    max-width: 30px;\n  }\n  .chart .investment {\n    height: 110px;\n  }\n  .chart .investment .lpp-icon {\n    top: 32px;\n  }\n  .chart .investment a {\n    top: 77px;\n    font-size: 12px;\n  }\n  .chart .saving {\n    height: 110px;\n  }\n  .chart .saving .lpp-icon {\n    top: 32px;\n  }\n  .chart .saving a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .protection {\n    height: 110px;\n  }\n  .chart .protection .lpp-icon {\n    top: 32px;\n  }\n  .chart .protection a {\n    top: 77px;\n    font-size: 12px;\n  }\n  .chart .investment-1 {\n    height: 20px;\n    width: 23%;\n  }\n  .chart .investment-1 label {\n    line-height: 20px;\n    display: block;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: -2px;\n  }\n\n  .left-border {\n    transform: skewX(-30deg);\n    width: 85px;\n    height: 380px;\n    left: 25px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(30deg);\n    width: 85px;\n    height: 380px;\n    right: 25px;\n    bottom: 18px;\n  }\n}\n\n@media screen and (min-width: 781px) and (max-width: 1060px) {\n  .chart {\n    width: 430px;\n  }\n  .chart img {\n    min-width: 30px;\n    max-width: 30px;\n  }\n  .chart .investment {\n    height: 110px;\n  }\n  .chart .investment .lpp-icon {\n    top: 32px;\n  }\n  .chart .investment a {\n    top: 77px;\n    font-size: 12px;\n  }\n  .chart .saving {\n    height: 110px;\n  }\n  .chart .saving .lpp-icon {\n    top: 32px;\n  }\n  .chart .saving a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .protection {\n    height: 110px;\n  }\n  .chart .protection .lpp-icon {\n    top: 32px;\n  }\n  .chart .protection a {\n    top: 77px;\n    font-size: 12px;\n  }\n  .chart .investment-1 {\n    height: 20px;\n    width: 23%;\n  }\n  .chart .investment-1 label {\n    line-height: 20px;\n    display: block;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: -2px;\n  }\n\n  .left-border {\n    transform: skewX(-30deg);\n    width: 85px;\n    height: 380px;\n    left: 25px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(30deg);\n    width: 85px;\n    height: 380px;\n    right: 25px;\n    bottom: 18px;\n  }\n}\n\n@media screen and (min-width: 1061px) {\n  .chart {\n    width: 500px;\n  }\n  .chart img {\n    min-width: 35px;\n    max-width: 35px;\n  }\n  .chart .investment {\n    height: 115px;\n  }\n  .chart .investment .lpp-icon {\n    top: 32px;\n  }\n  .chart .investment a {\n    top: 81px;\n    font-size: 12px;\n  }\n  .chart .saving {\n    height: 115px;\n  }\n  .chart .saving .lpp-icon {\n    top: 32px;\n  }\n  .chart .saving a {\n    top: 75px;\n    font-size: 12px;\n  }\n  .chart .protection {\n    height: 115px;\n  }\n  .chart .protection .lpp-icon {\n    top: 32px;\n  }\n  .chart .protection a {\n    top: 81px;\n    font-size: 12px;\n  }\n  .chart .investment-1 {\n    height: 25px;\n    width: 23%;\n  }\n  .chart .investment-1 label {\n    font-size: 12px;\n    line-height: 25px;\n    display: block;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: 0px;\n  }\n\n  .left-border {\n    transform: skewX(-32deg);\n    width: 90px;\n    height: 405px;\n    left: 35px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(32deg);\n    width: 90px;\n    height: 405px;\n    right: 35px;\n    bottom: 18px;\n  }\n}\n\nbutton {\n  color: #fff;\n}\n\nbutton label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxscC1hbmFseXNpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBQUFKOztBQUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUFRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRVo7O0FBQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBQURKOztBQUVJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFDWjs7QUFDUTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBQ1o7O0FBRUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBQ1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUNaOztBQUNRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFDWjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFHSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBQVo7O0FBRVE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUFaOztBQUdJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURSOztBQUVRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFaOztBQUVRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFBWjs7QUFHSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQVo7O0FBRVE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUFaOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FBRko7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFEUjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUFGSjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQURSOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBRFI7O0FBS0E7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQ0ksU0FBQTtFQUpOO0VBTUU7SUFDSSxZQUFBO0VBSk47QUFDRjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDOEIsU0FBQTtFQUM5Qix3QkFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFFSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMSjs7QUFPQTtFQUNJLGVBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFLSTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSFI7O0FBT0E7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFLSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFIUjs7QUFLSTtFQUNJLFNBQUE7RUFDQSxTQUFBO0FBSFI7O0FBTUk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUpSOztBQU1JO0VBQ0ksU0FBQTtFQUNBLFFBQUE7QUFKUjs7QUFNSTtFQUNJLFFBQUE7QUFKUjs7QUFNSTtFQUNJLFVBQUE7RUFDQSxRQUFBO0FBSlI7O0FBTUk7RUFDSSxRQUFBO0FBSlI7O0FBbUhBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBaEhKOztBQXFIQTtFQUNJO0lBQ0ksWUFBQTtFQWxITjtFQW1ITTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBakhWO0VBbUhNO0lBQ0ksWUFBQTtFQWpIVjtFQWtIVTtJQUNJLFNBQUE7RUFoSGQ7RUFrSFU7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQWhIZDtFQW1ITTtJQUNJLFlBQUE7RUFqSFY7RUFrSFU7SUFDSSxTQUFBO0VBaEhkO0VBa0hVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUFoSGQ7RUFtSE07SUFDSSxZQUFBO0VBakhWO0VBa0hVO0lBQ0ksU0FBQTtFQWhIZDtFQWtIVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBaEhkO0VBbUhNO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUFqSFY7RUFrSFU7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7RUFoSGQ7RUFtSE07SUFDSSxVQUFBO0VBakhWO0VBbUhNO0lBQ0ksVUFBQTtJQUNBLFNBQUE7RUFqSFY7O0VBb0hFO0lBQ0ksd0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VBakhOOztFQW1IRTtJQUNJLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQWhITjtBQUNGOztBQW1IQTtFQUNJO0lBQ0ksWUFBQTtFQWpITjtFQWtITTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBaEhWO0VBa0hNO0lBQ0ksYUFBQTtFQWhIVjtFQWlIVTtJQUNJLFNBQUE7RUEvR2Q7RUFpSFU7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQS9HZDtFQWtITTtJQUNJLGFBQUE7RUFoSFY7RUFpSFU7SUFDSSxTQUFBO0VBL0dkO0VBaUhVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUEvR2Q7RUFrSE07SUFDSSxhQUFBO0VBaEhWO0VBaUhVO0lBQ0ksU0FBQTtFQS9HZDtFQWlIVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBL0dkO0VBa0hNO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUFoSFY7RUFrSE07SUFDSSxVQUFBO0VBaEhWO0VBa0hNO0lBQ0ksVUFBQTtJQUNBLFNBQUE7RUFoSFY7O0VBbUhFO0lBQ0ksd0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBaEhOOztFQWtIRTtJQUNJLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQS9HTjtBQUNGOztBQWtIQTtFQUNJO0lBQ0ksWUFBQTtFQWhITjtFQWlITTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBL0dWO0VBaUhNO0lBQ0ksYUFBQTtFQS9HVjtFQWdIVTtJQUNJLFNBQUE7RUE5R2Q7RUFnSFU7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQTlHZDtFQWlITTtJQUNJLGFBQUE7RUEvR1Y7RUFnSFU7SUFDSSxTQUFBO0VBOUdkO0VBZ0hVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUE5R2Q7RUFpSE07SUFDSSxhQUFBO0VBL0dWO0VBZ0hVO0lBQ0ksU0FBQTtFQTlHZDtFQWdIVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBOUdkO0VBaUhNO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUEvR1Y7RUFnSFU7SUFDSSxpQkFBQTtJQUNBLGNBQUE7RUE5R2Q7RUFpSE07SUFDSSxVQUFBO0VBL0dWO0VBaUhNO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUEvR1Y7O0VBa0hFO0lBQ0ksd0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBL0dOOztFQWlIRTtJQUNJLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQTlHTjtBQUNGOztBQWlIQTtFQUNJO0lBQ0ksWUFBQTtFQS9HTjtFQWdITTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBOUdWO0VBZ0hNO0lBQ0ksYUFBQTtFQTlHVjtFQStHVTtJQUNJLFNBQUE7RUE3R2Q7RUErR1U7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQTdHZDtFQWdITTtJQUNJLGFBQUE7RUE5R1Y7RUErR1U7SUFDSSxTQUFBO0VBN0dkO0VBK0dVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUE3R2Q7RUFnSE07SUFDSSxhQUFBO0VBOUdWO0VBK0dVO0lBQ0ksU0FBQTtFQTdHZDtFQStHVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBN0dkO0VBZ0hNO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUE5R1Y7RUErR1U7SUFDSSxpQkFBQTtJQUNBLGNBQUE7RUE3R2Q7RUFnSE07SUFDSSxVQUFBO0VBOUdWO0VBZ0hNO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUE5R1Y7O0VBaUhFO0lBQ0ksd0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBOUdOOztFQWdIRTtJQUNJLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQTdHTjtBQUNGOztBQWdIQTtFQUNJO0lBQ0ksWUFBQTtFQTlHTjtFQStHTTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBN0dWO0VBK0dNO0lBQ0ksYUFBQTtFQTdHVjtFQThHVTtJQUNJLFNBQUE7RUE1R2Q7RUE4R1U7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQTVHZDtFQStHTTtJQUNJLGFBQUE7RUE3R1Y7RUE4R1U7SUFDSSxTQUFBO0VBNUdkO0VBOEdVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUE1R2Q7RUErR007SUFDSSxhQUFBO0VBN0dWO0VBOEdVO0lBQ0ksU0FBQTtFQTVHZDtFQThHVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBNUdkO0VBK0dNO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUE3R1Y7RUE4R1U7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VBNUdkO0VBK0dNO0lBQ0ksVUFBQTtFQTdHVjtFQStHTTtJQUNJLFVBQUE7SUFDQSxTQUFBO0VBN0dWOztFQWdIRTtJQUNJLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQTdHTjs7RUErR0U7SUFDSSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUE1R047QUFDRjs7QUErR0E7RUFDSSxXQUFBO0FBN0dKOztBQThHSTtFQUNJLFNBQUE7QUE1R1IiLCJmaWxlIjoibGxwLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi1pbm5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxlZnQtYm9yZGVyIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zMGRlZyk7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDQ1N3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMjNweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucmlnaHQtYm9yZGVyIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDMwZGVnKTtcbiAgICB3aWR0aDogOTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogNDU3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMjRweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5uZXIge1xuICAgIGhlaWdodDogMTIwcHg7XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLmludmVzdG1lbnQge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vbGVmdDogLTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5mcmVlZG9tLWxlZnQtaW5uZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgICAgdG9wOiAzMXB4O1xuICAgICAgICAgICAgbGVmdDogNjJweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMi43NXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mcmVlZG9tLXJpZ2h0LWlubmVyIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDg4cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogI2Y1ODIxZjtcbiAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLnNhdmluZyB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gbGVmdDogLTdweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5lZHVjYXRpb24tbGVmdC1pbm5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAyMXB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxlZnQ6IDEyJTtcbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgICAgbGVmdDogNzdweDtcbiAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmV0aXJlbWVudC1yaWdodC1pbm5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMjFweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6ICM3ZjdmN2Y7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICByaWdodDogMTElO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvdGVjdGlvbiB7XG4gICAgd2lkdGg6IDQ2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBsZWZ0OiAtMzdweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5pbmNvbWUtbGVmdC1pbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzIyYWFlMTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxlZnQ6IDEzJTtcbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICAgICAgbGVmdDogODNweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaGVhbHRoLW1pZGRsZS1pbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogI2Y1ODIxZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICAgICAgbGVmdDogNjJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXNzZXQtcmlnaHQtaW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6ICNmNTgyMWY7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICByaWdodDogMTUlO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgICBsZWZ0OiA0M3B4O1xuICAgICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubGVmdC10cmFuc3BhcmVudCB7XG4gICAgaGVpZ2h0OiAzNjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMjkuMmRlZyk7XG4gICAgbGVmdDogMjhweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucmlnaHQtdHJhbnNwYXJlbnQge1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogc2tld1goMjkuMmRlZyk7XG4gICAgcmlnaHQ6IDI4cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmludmVzdG1lbnQtZG90IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiBtZWRpdW0gZGFzaGVkICNkOWQ5ZDk7XG4gICAgei1pbmRleDogMjtcbiAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMDBweDtcbiAgICAgICAgY29sb3I6ICM3ZjdmN2Y7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn1cblxuLnNhdmluZy1kb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IG1lZGl1bSBkYXNoZWQgI2Q5ZDlkOTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuXG4ucHJvdGVjdGlvbi1kb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogbWVkaXVtIGRhc2hlZCAjZDlkOWQ5O1xuICAgIHotaW5kZXg6IDI7XG4gICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTAwcHg7XG4gICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG59XG5cbi5wcm9ncmVzcyB7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDY5JTtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogNTUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8vYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9ncmVzcyBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvL2hlaWdodDogNzElO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWItcHJvZ3Jlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjE4NWU7XG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzc0JhcjEgMXMgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3NCYXIxIHtcbiAgICAwJSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi50ZXh0LXJvdGF0ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNDUlO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IC8qIElFIDkgKi9cbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5zYXZpbmctYm9yZGVyIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogOHB4O1xufVxuXG4uYnRuLW5leHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiA0N3B4IDAgMCAwO1xufVxuXG4uaW5hY3RpdmUtZnJlZWRvbi1sZWZ0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbmFjdGl2ZS5wbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWM5Y2EgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW5hY3RpdmUtZnJlZWRvbi1yaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhYzljYSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ucmVkIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5pbnZlc3RtZW50LTEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjIlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsZWZ0OiA2cHg7XG4gICAgdHJhbnNmb3JtOiBza2V3WCg2MGRlZyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxhYmVsIHtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtNjBkZWcpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4uYmctcHJvdGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmODEwMCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJnLXNhdmluZyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZDMwMCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJnLWZyZWVkb20ge1xuICAgIGJhY2tncm91bmQ6ICMwMGFjZWEgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5scHAtaWNvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNXB4O1xuICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmVkdWNhdGlvbiB7XG4gICAgICAgIGxlZnQ6IDEzJTtcbiAgICAgICAgdG9wOiAtN3B4O1xuICAgIH1cblxuICAgIC5yZXRpcmVtZW50LWltZyB7XG4gICAgICAgIHJpZ2h0OiAxMyU7XG4gICAgICAgIHRvcDogLTdweDtcbiAgICB9XG4gICAgLmluY29tZSB7XG4gICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgdG9wOiA0cHg7XG4gICAgfVxuICAgIC5oZWFsdGgge1xuICAgICAgICB0b3A6IDRweDtcbiAgICB9XG4gICAgLmFzc2V0cyB7XG4gICAgICAgIHJpZ2h0OiAxNiU7XG4gICAgICAgIHRvcDogNHB4O1xuICAgIH1cbiAgICAuZnJlZWRvbSB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgIH1cbn1cblxuLy8gLyogRm9yIG1vYmlsZTogKi9cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcbi8vICAgICAuZmluYW5jaWFsLWdyaWQge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgLmZuYS1wcm9ncmVzcyB7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLmNoYXJ0LWdyaWQge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgLmZuYS1zZWdtZW50e1xuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLmNoYXJ0e1xuLy8gICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuLy8gICAgIC5ib3gtZ3JpZCB7XG4vLyAgICAgICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgICAgIC5maW5hbmNpYWwtZ3JpZCB7XG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICAgIC5mbmEtcHJvZ3Jlc3Mge1xuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuY2hhcnQtZ3JpZCB7XG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvKiBGb3IgbW9iaWxlOiAqL1xuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuLy8gICAgIC5maW5hbmNpYWwtZ3JpZCB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAuZm5hLXByb2dyZXNzIHtcbi8vICAgICAgICAgICAgIGhlaWdodDogMDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAuY2hhcnQtZ3JpZCB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAuZm5hLXNlZ21lbnR7XG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gLyogRm9yIHRhYmxldHM6ICovXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4vLyAgICAgLmZpbmFuY2lhbC1ncmlkIHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIC5mbmEtcHJvZ3Jlc3Mge1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiAwO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC5jaGFydC1ncmlkIHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgfVxuLy8gICAgIC5jaGFydCB7XG4vLyAgICAgICAgIHdpZHRoOiA0NTBweDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC8qIEZvciB0YWJsZXRzOiAqL1xuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4vLyAgICAgLmxlZnQtYm9yZGVyIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMjVkZWcpO1xuLy8gICAgIH1cbi8vICAgICAucmlnaHQtYm9yZGVyIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgyNWRlZyk7XG4vLyAgICAgfVxuXG4vLyAgICAgLmludmVzdG1lbnQtMSB7XG4vLyAgICAgICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbi8vICAgICB9XG4vLyAgICAgLmJ1dHRvbi1zYXZpbmcge1xuLy8gICAgICAgICB3aWR0aDogNDklICFpbXBvcnRhbnQ7XG4vLyAgICAgfVxuLy8gICAgIC5idXR0b24tcHJvdGVjdGlvbiB7XG4vLyAgICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XG4vLyAgICAgLmxlZnQtYm9yZGVyIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMjVkZWcpO1xuLy8gICAgIH1cbi8vICAgICAucmlnaHQtYm9yZGVyIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgyNWRlZyk7XG4vLyAgICAgfVxuXG4vLyAgICAgLmludmVzdG1lbnQtMSB7XG4vLyAgICAgICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbi8vICAgICB9XG4vLyAgICAgLmJ1dHRvbi1zYXZpbmcge1xuLy8gICAgICAgICB3aWR0aDogNDklICFpbXBvcnRhbnQ7XG4vLyAgICAgfVxuLy8gICAgIC5idXR0b24tcHJvdGVjdGlvbiB7XG4vLyAgICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbi8vICAgICB9XG4vLyB9XG5cbi5jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgIC5jaGFydCB7XG4gICAgICAgIHdpZHRoOiAyNjVweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuaW52ZXN0bWVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAubHBwLWljb24ge1xuICAgICAgICAgICAgICAgIHRvcDogMjhweDsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0b3A6IDY1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zYXZpbmcge1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgLmxwcC1pY29uIHtcbiAgICAgICAgICAgICAgICB0b3A6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcm90ZWN0aW9uIHtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdG9wOiA2NXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW52ZXN0bWVudC0xIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1zYXZpbmcge1xuICAgICAgICAgICAgd2lkdGg6IDU5JTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uLXByb3RlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGVmdC1ib3JkZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0yM2RlZyk7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDMxMnB4O1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIGJvdHRvbTogMThweDtcbiAgICB9XG4gICAgLnJpZ2h0LWJvcmRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goMjNkZWcpO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiAzMTJweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgYm90dG9tOiAxOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDYxcHgpIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xuICAgIC5jaGFydCB7XG4gICAgICAgIHdpZHRoOiAzOTVweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuaW52ZXN0bWVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgLmxwcC1pY29uIHtcbiAgICAgICAgICAgICAgICB0b3A6IDI3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zYXZpbmcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgdG9wOiAyN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJvdGVjdGlvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgLmxwcC1pY29uIHtcbiAgICAgICAgICAgICAgICB0b3A6IDI3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbnZlc3RtZW50LTEge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIzJTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uLXNhdmluZyB7XG4gICAgICAgICAgICB3aWR0aDogNTklO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24tcHJvdGVjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sZWZ0LWJvcmRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTMwZGVnKTtcbiAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICAgIGJvdHRvbTogMThweDtcbiAgICB9XG4gICAgLnJpZ2h0LWJvcmRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goMzBkZWcpO1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgIGJvdHRvbTogMThweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY4MXB4KSBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgICAuY2hhcnQge1xuICAgICAgICB3aWR0aDogNDMwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludmVzdG1lbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdG9wOiA3N3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2F2aW5nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAubHBwLWljb24ge1xuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb3RlY3Rpb24ge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdG9wOiA3N3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW52ZXN0bWVudC0xIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1zYXZpbmcge1xuICAgICAgICAgICAgd2lkdGg6IDU5JTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uLXByb3RlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxlZnQtYm9yZGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMzBkZWcpO1xuICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgbGVmdDogMjVweDtcbiAgICAgICAgYm90dG9tOiAxOHB4O1xuICAgIH1cbiAgICAucmlnaHQtYm9yZGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgzMGRlZyk7XG4gICAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgYm90dG9tOiAxOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgICAuY2hhcnQge1xuICAgICAgICB3aWR0aDogNDMwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludmVzdG1lbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdG9wOiA3N3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2F2aW5nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAubHBwLWljb24ge1xuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb3RlY3Rpb24ge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgdG9wOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdG9wOiA3N3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW52ZXN0bWVudC0xIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMyU7XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1zYXZpbmcge1xuICAgICAgICAgICAgd2lkdGg6IDU5JTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uLXByb3RlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxlZnQtYm9yZGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMzBkZWcpO1xuICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgbGVmdDogMjVweDtcbiAgICAgICAgYm90dG9tOiAxOHB4O1xuICAgIH1cbiAgICAucmlnaHQtYm9yZGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgzMGRlZyk7XG4gICAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgYm90dG9tOiAxOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA2MXB4KSB7XG4gICAgLmNoYXJ0IHtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnZlc3RtZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XG4gICAgICAgICAgICAubHBwLWljb24ge1xuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRvcDogODFweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNhdmluZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xuICAgICAgICAgICAgLmxwcC1pY29uIHtcbiAgICAgICAgICAgICAgICB0b3A6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0b3A6IDc1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcm90ZWN0aW9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XG4gICAgICAgICAgICAubHBwLWljb24ge1xuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRvcDogODFweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmludmVzdG1lbnQtMSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMjMlO1xuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uLXNhdmluZyB7XG4gICAgICAgICAgICB3aWR0aDogNTklO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24tcHJvdGVjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sZWZ0LWJvcmRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTMyZGVnKTtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogNDA1cHg7XG4gICAgICAgIGxlZnQ6IDM1cHg7XG4gICAgICAgIGJvdHRvbTogMThweDtcbiAgICB9XG4gICAgLnJpZ2h0LWJvcmRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goMzJkZWcpO1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDVweDtcbiAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgIGJvdHRvbTogMThweDtcbiAgICB9XG59XG5cbmJ1dHRvbntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsYWJlbHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 10062:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/product-analysis/product-analysis.component.scss ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = ".products {\n  margin-bottom: 40px;\n}\n\nbutton {\n  color: #fff;\n}\n\nbutton label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUdJO0VBQ0ksU0FBQTtBQURSIiwiZmlsZSI6InByb2R1Y3QtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnByb2R1Y3Rze1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbn1cblxuYnV0dG9ue1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxhYmVse1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4iXX0= */";

/***/ }),

/***/ 38910:
/*!*********************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3,\nh4 {\n  font-size: 0.9rem;\n}\n.add-child {\n  float: left;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\n.delete {\n  margin: 13px 0 0 0;\n  display: inline-block;\n  color: #005f99 !important;\n  text-decoration: underline;\n  font-size: 0.9rem;\n}\nbutton {\n  width: 120px;\n}\n.error-message {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFFQTs7RUFFSSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtBQUNKO0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoiZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hYm91dCB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5oMyxcbmg0IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmFkZC1jaGlsZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICB9XG59XG5cbi5kZWxldGUge1xuICAgIG1hcmdpbjogMTNweCAwIDAgMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICMwMDVmOTkgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuYnV0dG9ue1xuICAgIHdpZHRoOiAxMjBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2V7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 51659:
/*!************************************************************!*\
  !*** ./src/app/pages/fna-detail/fna-detail.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".financial-grid {\n  width: 30%;\n  float: left;\n  overflow: hidden;\n  border-right: 1px solid #d3cbcb;\n  position: relative;\n}\n.financial-grid .financial {\n  position: relative;\n}\n.financial-grid .financial div label {\n  overflow: hidden;\n  color: #7f7f7f;\n}\n.financial-grid .financial div label:first-child {\n  width: 35%;\n  text-align: right;\n  padding-right: 5%;\n}\n.financial-grid .financial div label:last-child {\n  width: 65%;\n  text-align: left;\n}\n.financial-grid .financial div:first-child label:last-child {\n  color: #ff8100;\n}\n.chart-grid {\n  width: 70%;\n  float: left;\n  overflow: hidden;\n  padding: 5px !important;\n}\n.box-grid {\n  box-shadow: none;\n  background-color: #f2f2f2;\n  border-radius: 13px;\n  width: 100%;\n  overflow: hidden;\n  padding: 5px;\n  background: #fff;\n  border: 2px solid #f2f2f2;\n}\n.fna-segment {\n  width: 80%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.fna-segment button {\n  width: 49%;\n  color: #fff;\n}\n.fna-segment button:last-child {\n  float: right;\n}\n.btn-group {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 1rem;\n}\n.btn-group button {\n  width: 50%;\n  color: #fff;\n}\n.box-grid {\n  box-shadow: none;\n  background-color: #f2f2f2;\n  border-radius: 13px;\n  width: 100%;\n  overflow: hidden;\n  padding: 5px;\n}\n.progress {\n  top: 10px;\n  left: 10%;\n  width: 50%;\n  height: 55%;\n  position: absolute;\n  overflow: hidden;\n  background-color: transparent;\n  border-radius: 0 !important;\n  text-align: center;\n}\n.progress span {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.sub-progress {\n  animation: progressBar1 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n@keyframes progressBar1 {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 100%;\n  }\n}\n.text-rotate {\n  color: #fff;\n  position: relative;\n  /* IE 9 */\n  transform: rotate(0deg);\n}\n.fna-progress {\n  position: relative;\n  width: 90px;\n  height: 345px;\n  top: 146px;\n}\n.progress-lower {\n  background: #cac9ca;\n}\n.progress-middle {\n  background: #ff8100;\n}\n.progress-upper {\n  background: #00acea;\n}\n@media screen and (min-width: 320px) and (max-width: 780px) {\n  .financial-grid {\n    width: 100%;\n  }\n  .financial-grid .fna-progress {\n    height: 0;\n  }\n\n  .chart-grid {\n    width: 100%;\n  }\n\n  .financial-grid {\n    border-right: none;\n  }\n  .financial-grid label {\n    width: 20% !important;\n  }\n\n  .fna-progress {\n    height: 100% !important;\n    position: absolute;\n    overflow: hidden;\n    background-color: transparent;\n    border-radius: 0 !important;\n    text-align: center;\n    width: 40px;\n    left: unset;\n    top: unset;\n    right: 0;\n    bottom: 0;\n  }\n\n  .progress {\n    width: 100% !important;\n    height: 70% !important;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 1024px) {\n  .box-grid {\n    padding: 5px;\n  }\n\n  .chart-grid {\n    padding-left: 5px !important;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 460px) {\n  .chart-grid {\n    width: 100%;\n    padding: 0 !important;\n  }\n\n  .fna-segment {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 461px) and (max-width: 680px) {\n  .fna-segment {\n    width: 100%;\n  }\n}\nbutton {\n  color: #fff;\n}\nbutton label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZuYS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBQVk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFFaEI7QUFBWTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRWhCO0FBQVk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFFWTtFQUNJLGNBQUE7QUFBaEI7QUFNQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhKO0FBTUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUhKO0FBTUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFJSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBRlI7QUFJSTtFQUNJLFlBQUE7QUFGUjtBQU1BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFISjtBQUlJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFGUjtBQU1BO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUE7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUE7RUFDSSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUpKO0FBT0E7RUFFSSxzQ0FBQTtFQUNBLDZCQUFBO0FBTEo7QUFRQTtFQUNJO0lBQ0ksU0FBQTtFQUxOO0VBT0U7SUFDSSxZQUFBO0VBTE47QUFDRjtBQVFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRThCLFNBQUE7RUFDOUIsdUJBQUE7QUFOSjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFOSjtBQVNBO0VBQ0ksbUJBQUE7QUFOSjtBQVNBO0VBQ0ksbUJBQUE7QUFOSjtBQVNBO0VBQ0ksbUJBQUE7QUFOSjtBQTZEQTtFQUNJO0lBQ0ksV0FBQTtFQTFETjtFQTJETTtJQUNJLFNBQUE7RUF6RFY7O0VBNERFO0lBQ0ksV0FBQTtFQXpETjs7RUEyREU7SUFDSSxrQkFBQTtFQXhETjtFQXlETTtJQUNJLHFCQUFBO0VBdkRWOztFQTBERTtJQUNJLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0lBQ0EsMkJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VBdkROOztFQXlERTtJQUNJLHNCQUFBO0lBQ0Esc0JBQUE7RUF0RE47QUFDRjtBQXdEQTtFQUNJO0lBQ0ksWUFBQTtFQXRETjs7RUF3REU7SUFDSSw0QkFBQTtFQXJETjtBQUNGO0FBaUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EscUJBQUE7RUEvRE47O0VBaUVFO0lBQ0ksV0FBQTtFQTlETjtBQUNGO0FBaUVBO0VBQ0k7SUFDSSxXQUFBO0VBL0ROO0FBQ0Y7QUFrRUE7RUFDSSxXQUFBO0FBaEVKO0FBaUVJO0VBQ0ksU0FBQTtBQS9EUiIsImZpbGUiOiJmbmEtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbmFuY2lhbC1ncmlkIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzY2JjYjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmZpbmFuY2lhbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGxhYmVsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY4MTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2hhcnQtZ3JpZCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYm94LWdyaWQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcbn1cblxuLmZuYS1zZWdtZW50IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuLmJ0bi1ncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbi5ib3gtZ3JpZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9ncmVzcyB7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDEwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9ncmVzcyBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvL2hlaWdodDogNzElO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWItcHJvZ3Jlc3Mge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2Q2MTg1ZTtcbiAgICBhbmltYXRpb246IHByb2dyZXNzQmFyMSAxcyBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzc0JhcjEge1xuICAgIDAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cblxuLnRleHQtcm90YXRlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy90b3A6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAvKiBJRSA5ICovXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5mbmEtcHJvZ3Jlc3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDM0NXB4O1xuICAgIHRvcDogMTQ2cHg7XG59XG5cbi5wcm9ncmVzcy1sb3dlciB7XG4gICAgYmFja2dyb3VuZDogI2NhYzljYTtcbn1cblxuLnByb2dyZXNzLW1pZGRsZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmODEwMDtcbn1cblxuLnByb2dyZXNzLXVwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDBhY2VhO1xufVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4vLyAgICAgLmJveC1ncmlkIHtcbi8vICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAgICAgLmZpbmFuY2lhbC1ncmlkIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgICAgLmZuYS1wcm9ncmVzcyB7XG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5jaGFydC1ncmlkIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgICAgICAuZm5hLXNlZ21lbnR7XG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIC8qIEZvciBtb2JpbGU6ICovXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XG4vLyAgICAgLmZpbmFuY2lhbC1ncmlkIHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIC5mbmEtcHJvZ3Jlc3Mge1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiAwO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC5jaGFydC1ncmlkIHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIC5mbmEtc2VnbWVudHtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvKiBGb3IgdGFibGV0czogKi9cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogNjMwcHgpIHtcbi8vICAgICAuZmluYW5jaWFsLWdyaWQge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgLmZuYS1wcm9ncmVzcyB7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLmNoYXJ0LWdyaWQge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICB9XG4vLyAgICAgLmNoYXJ0IHtcbi8vICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuLy8gICAgIH1cbi8vIH1cblxuLy8gLyogRm9yIHRhYmxldHM6ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gICAgLmZpbmFuY2lhbC1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5mbmEtcHJvZ3Jlc3Mge1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jaGFydC1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5maW5hbmNpYWwtZ3JpZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mbmEtcHJvZ3Jlc3Mge1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgLnByb2dyZXNzIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5ib3gtZ3JpZCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gICAgLmNoYXJ0LWdyaWQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTAwcHgpIHtcbiAgICAvLyAuZm5hLXByb2dyZXNze1xuICAgIC8vICAgICBkaXNwbGF5OiBub25lO1xuICAgIC8vIH1cbiAgICAvLyAuZm5hLXByb2dyZXNzLW5vbmUge1xuICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAuY2hhcnQtZ3JpZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mbmEtc2VnbWVudHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NjFweCkgYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XG4gICAgLmZuYS1zZWdtZW50e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbmJ1dHRvbntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsYWJlbHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 99645:
/*!*****************************************************************!*\
  !*** ./src/app/pages/fna-detail/freedom/freedom.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 24px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3 {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZWVkb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDSSwwQkFBQTtBQUVSO0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImZyZWVkb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWFib3V0IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBidXR0b246bGFzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5oM3tcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn0iXX0= */";

/***/ }),

/***/ 52132:
/*!***************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3 {\n  font-size: 0.9rem;\n}\n.add-child {\n  float: left;\n}\n.sub-title {\n  padding-left: 26px;\n  color: #005f99 !important;\n  font-size: 0.9rem;\n  margin: 15px 0 5px 0;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\n.delete {\n  margin: 12px 0 0 0;\n  display: inline-block;\n  color: #005f99 !important;\n  text-decoration: underline;\n  font-size: 0.9rem;\n}\nbutton {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiaGVhbHRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hYm91dCB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIGJ1dHRvbjpsYXN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmgze1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uYWRkLWNoaWxke1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uc3ViLXRpdGxle1xuICAgIHBhZGRpbmctbGVmdDogMjZweDtcbiAgICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIG1hcmdpbjogMTVweCAwIDVweCAwO1xufVxuXG4uY29sLTR7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICB9XG59XG5cbi5kZWxldGV7XG4gICAgbWFyZ2luOiAxMnB4IDAgMCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5idXR0b257XG4gICAgd2lkdGg6IDEyMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 60302:
/*!***************************************************************!*\
  !*** ./src/app/pages/fna-detail/income/income.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3 {\n  font-size: 0.9rem;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\nbutton {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJpbmNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWFib3V0IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgYnV0dG9uOmxhc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuaDN7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5jb2wtNHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAwIDAgNXB4O1xuICAgIH1cbn1cblxuYnV0dG9ue1xuICAgIHdpZHRoOiAxMjBweDtcbn0iXX0= */";

/***/ }),

/***/ 345:
/*!***********************************************************************!*\
  !*** ./src/app/pages/fna-detail/retirement/retirement.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3 {\n  font-size: 0.9rem;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\nbutton {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldGlyZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSwwQkFBQTtBQUVSO0FBRUE7RUFDSSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBR0E7RUFDSSxZQUFBO0FBQUoiLCJmaWxlIjoicmV0aXJlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYWJvdXQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICBidXR0b246bGFzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5oM3tcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmNvbC00e1xuICAgIHBhZGRpbmctbGVmdDogMjZweDtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gICAgfVxufVxuXG5cbmJ1dHRvbntcbiAgICB3aWR0aDogMTIwcHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fna-detail_fna-detail_modules_ts.js.map