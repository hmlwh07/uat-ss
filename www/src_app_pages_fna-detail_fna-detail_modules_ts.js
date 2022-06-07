"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fna-detail_fna-detail_modules_ts"],{

/***/ 6409:
/*!************************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset-manage.dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssectDto": () => (/* binding */ AssectDto),
/* harmony export */   "IncomeStatus": () => (/* binding */ IncomeStatus)
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

/***/ 97769:
/*!****************************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset-manage.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANAssetService": () => (/* binding */ FANAssetService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 38313);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





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

/***/ 97614:
/*!***********************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetComponent": () => (/* binding */ AssetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _asset_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset.component.html?ngResource */ 26374);
/* harmony import */ var _asset_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset.component.scss?ngResource */ 282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 41018);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-constant */ 76430);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fna-manage.service */ 93882);
/* harmony import */ var _asset_manage_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-manage.dto */ 6409);
/* harmony import */ var _asset_manage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset-manage.service */ 97769);












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
        this.formGroup.controls['fnaId'].setValue(this.fnaId);
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
            this.alertService.activate('Are you sure want to delete?', 'Warning Message').then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
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
                }
            }));
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
        template: _asset_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asset_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssetComponent);



/***/ }),

/***/ 34319:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/chart-analysis.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartAnalysisComponent": () => (/* binding */ ChartAnalysisComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chart_analysis_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-analysis.component.html?ngResource */ 80196);
/* harmony import */ var _chart_analysis_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-analysis.component.scss?ngResource */ 9140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





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
        template: _chart_analysis_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chart_analysis_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChartAnalysisComponent);



/***/ }),

/***/ 83790:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/llp-analysis/llp-analysis.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LlpAnalysisComponent": () => (/* binding */ LlpAnalysisComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _llp_analysis_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./llp-analysis.component.html?ngResource */ 15850);
/* harmony import */ var _llp_analysis_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./llp-analysis.component.scss?ngResource */ 79134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fna-manage.service */ 93882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _income_income_manage_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../income/income-manage.dto */ 84015);
/* harmony import */ var _retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../retirement/retirement-manage.dto */ 54681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);









let LlpAnalysisComponent = class LlpAnalysisComponent {
    constructor(fnaService, cdf, modalService, navController) {
        this.fnaService = fnaService;
        this.cdf = cdf;
        this.modalService = modalService;
        this.navController = navController;
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
                // console.log('getFNAById llp', res);
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
    backToDetail() {
        this.navController.back();
    }
};
LlpAnalysisComponent.ctorParameters = () => [
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_2__.FANService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
LlpAnalysisComponent.propDecorators = {
    aboutLLP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
LlpAnalysisComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-llp-analysis',
        template: _llp_analysis_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_llp_analysis_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LlpAnalysisComponent);



/***/ }),

/***/ 7892:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/product-analysis/product-analysis.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAnalysisComponent": () => (/* binding */ ProductAnalysisComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_analysis_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-analysis.component.html?ngResource */ 56786);
/* harmony import */ var _product_analysis_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-analysis.component.scss?ngResource */ 60941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _customer_detail_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../customer-detail/customer.service */ 56581);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../products/services/products-data.service */ 78680);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../fna-manage.service */ 93882);
/* harmony import */ var _product_manage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-manage.service */ 92284);













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
        template: _product_analysis_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_analysis_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductAnalysisComponent);



/***/ }),

/***/ 92284:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/product-analysis/product-manage.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANProductService": () => (/* binding */ FANProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 38313);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





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

/***/ 76511:
/*!********************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education-manage.dto.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationDto": () => (/* binding */ EducationDto),
/* harmony export */   "IncomeStatus": () => (/* binding */ IncomeStatus),
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

/***/ 56455:
/*!************************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education-manage.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANEducationService": () => (/* binding */ FANEducationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 38313);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _education_manage_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-manage.dto */ 76511);






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

/***/ 76591:
/*!*******************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationComponent": () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _education_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education.component.html?ngResource */ 69810);
/* harmony import */ var _education_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education.component.scss?ngResource */ 71682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 41018);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-constant */ 76430);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fna-manage.service */ 93882);
/* harmony import */ var _education_manage_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education-manage.dto */ 76511);
/* harmony import */ var _education_manage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education-manage.service */ 56455);












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
        this.formGroup.controls['fnaId'].setValue(this.fnaId);
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
            this.alertService.activate('Are you sure want to delete?', 'Warning Message').then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
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
                }
            }));
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
        template: _education_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_education_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EducationComponent);



/***/ }),

/***/ 52668:
/*!**********************************************************!*\
  !*** ./src/app/pages/fna-detail/fna-detail.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FnaDetailComponent": () => (/* binding */ FnaDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fna_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fna-detail.component.html?ngResource */ 47542);
/* harmony import */ var _fna_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fna-detail.component.scss?ngResource */ 62249);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/core */ 15818);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fna-manage.service */ 93882);
/* harmony import */ var _income_income_manage_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income/income-manage.dto */ 84015);
/* harmony import */ var _retirement_retirement_manage_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retirement/retirement-manage.dto */ 54681);











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
            this.leadId = data.leadId;
            this.fnaId = data.fnaId;
            this.passValue = data;
            this.oldId = data.fnaId;
            this.customerId = data.customerId;
            this.aboutLLP = this.oldId;
            if (data.pageStatus != 'create') {
                if (this.oldId) {
                    yield this.getFNAById();
                }
            }
            // this.passValue.createdAt = this.datepipe.transform(this.formatDateYYYYMMDD(this.convertDateFormatDDMMYYY(this.passValue.createdAt)), 'dd/MM/yyyy');
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
                if (res) {
                    if (res.fnaAssets.length > 0 && res.fnaEducations.length &&
                        res.fnaHealths.length > 0 && res.fnaIncome != null &&
                        res.fnaRetirementSaving != null) {
                        this.freedom.push({ hasData: true });
                    }
                    this.leadId = res.leadId;
                    this.fnaId = res.id;
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
        template: _fna_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDateAdapter, useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_2__.CustomAdapter2 },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDateParserFormatter, useClass: src_app_metronic_core__WEBPACK_IMPORTED_MODULE_2__.CustomDateParserFormatter }
        ],
        styles: [_fna_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FnaDetailComponent);



/***/ }),

/***/ 18274:
/*!********************************************************!*\
  !*** ./src/app/pages/fna-detail/fna-detail.modules.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FnaDetailModule": () => (/* binding */ FnaDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _fna_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fna-detail.component */ 52668);
/* harmony import */ var _chart_analysis_chart_analysis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-analysis/chart-analysis.component */ 34319);
/* harmony import */ var _chart_analysis_product_analysis_product_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-analysis/product-analysis/product-analysis.component */ 7892);
/* harmony import */ var _chart_analysis_llp_analysis_llp_analysis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart-analysis/llp-analysis/llp-analysis.component */ 83790);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ 76591);
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/asset.component */ 97614);
/* harmony import */ var _income_income_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income/income.component */ 71630);
/* harmony import */ var _health_health_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health/health.component */ 96150);
/* harmony import */ var _retirement_retirement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./retirement/retirement.component */ 21510);
/* harmony import */ var _freedom_freedom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./freedom/freedom.component */ 33585);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fna-manage.service */ 93882);
/* harmony import */ var _fna_data_view_fna_data_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fna-data-view/fna-data-view.component */ 94175);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);




























let FnaDetailModule = class FnaDetailModule {
};
FnaDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [_fna_detail_component__WEBPACK_IMPORTED_MODULE_1__.FnaDetailComponent,
            _chart_analysis_chart_analysis_component__WEBPACK_IMPORTED_MODULE_2__.ChartAnalysisComponent,
            _chart_analysis_product_analysis_product_analysis_component__WEBPACK_IMPORTED_MODULE_3__.ProductAnalysisComponent, _retirement_retirement_component__WEBPACK_IMPORTED_MODULE_9__.RetirementComponent,
            _freedom_freedom_component__WEBPACK_IMPORTED_MODULE_10__.FreedomComponent, _fna_data_view_fna_data_view_component__WEBPACK_IMPORTED_MODULE_12__.FnaDataViewComponent,
            _chart_analysis_llp_analysis_llp_analysis_component__WEBPACK_IMPORTED_MODULE_4__.LlpAnalysisComponent, _education_education_component__WEBPACK_IMPORTED_MODULE_5__.EducationComponent, _asset_asset_component__WEBPACK_IMPORTED_MODULE_6__.AssetComponent, _income_income_component__WEBPACK_IMPORTED_MODULE_7__.IncomeComponent,
            _health_health_component__WEBPACK_IMPORTED_MODULE_8__.HealthComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_0__.CRUDTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDatepickerModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_21__.NgApexchartsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_14__.LanguageModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule.forChild([
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
            _angular_core__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_ELEMENTS_SCHEMA,
            _angular_core__WEBPACK_IMPORTED_MODULE_16__.NO_ERRORS_SCHEMA
        ],
        providers: [_fna_manage_service__WEBPACK_IMPORTED_MODULE_11__.FANService, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_27__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_13__.MY_FORMATS },]
    })
], FnaDetailModule);



/***/ }),

/***/ 33585:
/*!***************************************************************!*\
  !*** ./src/app/pages/fna-detail/freedom/freedom.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreedomComponent": () => (/* binding */ FreedomComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _freedom_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./freedom.component.html?ngResource */ 57089);
/* harmony import */ var _freedom_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freedom.component.scss?ngResource */ 96237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




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
        template: _freedom_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_freedom_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FreedomComponent);



/***/ }),

/***/ 24885:
/*!**************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health-manage.dto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthDto": () => (/* binding */ HealthDto),
/* harmony export */   "HealthStatus": () => (/* binding */ HealthStatus)
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

/***/ 20760:
/*!******************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health-manage.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANHealthManageService": () => (/* binding */ FANHealthManageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 38313);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





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

/***/ 96150:
/*!*************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthComponent": () => (/* binding */ HealthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _health_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health.component.html?ngResource */ 29236);
/* harmony import */ var _health_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health.component.scss?ngResource */ 69724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 41018);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-constant */ 76430);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fna-manage.service */ 93882);
/* harmony import */ var _health_manage_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-manage.dto */ 24885);
/* harmony import */ var _health_manage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health-manage.service */ 20760);












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
        this.formGroup.controls['fnaId'].setValue(this.fnaId);
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
                this.alertService.activate('Are you sure want to delete?', 'Warning Message').then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    if (result) {
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
        template: _health_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_health_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HealthComponent);



/***/ }),

/***/ 70556:
/*!******************************************************************!*\
  !*** ./src/app/pages/fna-detail/income/income-manage.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANIncomeManageService": () => (/* binding */ FANIncomeManageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 38313);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





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

/***/ 71630:
/*!*************************************************************!*\
  !*** ./src/app/pages/fna-detail/income/income.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeComponent": () => (/* binding */ IncomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _income_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income.component.html?ngResource */ 28997);
/* harmony import */ var _income_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income.component.scss?ngResource */ 96515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 41018);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fna-constant */ 76430);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-manage.service */ 93882);
/* harmony import */ var _income_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./income-manage.service */ 70556);










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
        // console.log('IncomeComponent', this.fnaId);
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
        this.formGroup.controls['fnaId'].setValue(this.fnaId);
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
            // console.log('saveFNAIncome', this.formGroup.value);
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
        template: _income_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_income_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IncomeComponent);



/***/ }),

/***/ 34916:
/*!**************************************************************************!*\
  !*** ./src/app/pages/fna-detail/retirement/retirement-manage.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FANRetirementService": () => (/* binding */ FANRetirementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 38313);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





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

/***/ 21510:
/*!*********************************************************************!*\
  !*** ./src/app/pages/fna-detail/retirement/retirement.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RetirementComponent": () => (/* binding */ RetirementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _retirement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retirement.component.html?ngResource */ 21423);
/* harmony import */ var _retirement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retirement.component.scss?ngResource */ 85694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/valid-all-feild */ 41018);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _fna_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fna-constant */ 76430);
/* harmony import */ var _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fna-manage.service */ 93882);
/* harmony import */ var _retirement_manage_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retirement-manage.dto */ 54681);
/* harmony import */ var _retirement_manage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./retirement-manage.service */ 34916);












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
        this.changeAnalysis = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.retirementDto = new _retirement_manage_dto__WEBPACK_IMPORTED_MODULE_7__.RetirementDto();
        this.currentIncome = null;
        this.isCalculate = false;
        this.fromMinDate = null;
        this.fromMaxDate = new Date();
    }
    ngOnInit() {
        this.loadForm();
        // console.log('customerDob', this.customerDob);
        if (this.fnaService.fnaIncome) {
            this.currentIncome = this.fnaService.fnaIncome.estimatedMonthlyIncome;
        }
        if (this.fnaService.fnaRetirementSaving) {
            this.isCalculate = true;
            _fna_constant__WEBPACK_IMPORTED_MODULE_5__.FNAConstant.FNA_DETAIL_OBJ = this.fnaService.fnaRetirementSaving;
            this.setRetirement(this.fnaService.fnaRetirementSaving);
        }
        else {
            if (this.customerDob) {
                //console.log('formatDateDDMMYYY ', this.doValid('dateOfBirth'));
                this.formGroup.controls['dateOfBirth'].setValue(this.customerDob);
                this.doValid('dateOfBirth');
                // this.formGroup.controls['dateOfBirth'].setValue(this.formatDateDDMMYYY(new Date(this.customerDob)));
            }
        }
    }
    backAction() {
        this.changeAnalysis.emit('aboutLLP');
    }
    loadForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.dateOfBirth),
            fnaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.fnaId || null),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.id || 0),
            retirementAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.retirementAge || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.nullValidator]),
            retirementIncome: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.retirementIncome || ''),
            retirementSaving: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.retirementSaving || ''),
            retirementSavingSpouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.retirementSavingSpouse || ''),
            retirementIncomeText: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.retirementIncomeText || ''),
            retirementSavingText: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.retirementSavingText || ''),
            retirementSavingSpouseText: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.retirementSavingSpouseText || ''),
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.createdAt || ''),
            updatedAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.retirementDto.updatedAt || '')
        });
        this.formGroup.controls['fnaId'].setValue(this.fnaId);
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
            data.dateOfBirth = data.dateOfBirth;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formGroup.invalid) {
                (0,src_app_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_3__.validateAllFields)(this.formGroup);
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
        // console.log('calculate', this.formGroup.value.dateOfBirth);
        this.isCalculate = true;
        let diffAge = (this.formGroup.value.retirementAge - this.calculate_age(new Date(this.formGroup.value.dateOfBirth.split("-").reverse().join("-"))));
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
        // console.log('fnaRetirementSaving', this.fnaService.fnaRetirementSaving);
        if (this.fnaService.fnaRetirementSaving) {
            this.fnaService.openModal('RetirementSaving');
        }
    }
    doValid(type) {
        // console.log('doValid', type);
        if (type == 'dateOfBirth') {
            let value = this.formGroup.controls['dateOfBirth'].value;
            if (value) {
                let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.formGroup.controls['dateOfBirth'].value).add(0, 'years');
                this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
                this.formGroup.controls['dateOfBirth'].setValue(toDate.format('YYYY-MM-DD'));
            }
        }
    }
};
RetirementComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _retirement_manage_service__WEBPACK_IMPORTED_MODULE_8__.FANRetirementService },
    { type: _fna_manage_service__WEBPACK_IMPORTED_MODULE_6__.FANService }
];
RetirementComponent.propDecorators = {
    retirement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    fnaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    customerDob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    customerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    changeAnalysis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
RetirementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-retirement',
        template: _retirement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_retirement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RetirementComponent);



/***/ }),

/***/ 282:
/*!************************************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3,\nh4 {\n  font-size: 0.9rem;\n}\n.add-child {\n  float: left;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\n.delete {\n  display: inline-block;\n  color: #005f99 !important;\n  text-decoration: underline;\n  font-size: 0.9rem;\n}\nbutton {\n  width: 120px;\n}\n.sub-title {\n  color: #005f99 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksMEJBQUE7QUFFUjtBQUVBOztFQUVJLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUVBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6ImFzc2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hYm91dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgzLFxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmFkZC1jaGlsZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNvbC00IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9140:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/chart-analysis.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".up {\n  height: 650px;\n  width: 85%;\n  color: #fff;\n  background-image: url('tringle.png');\n  background-size: 100%;\n  background-size: cover;\n}\n\n.up p {\n  text-align: center;\n  top: 80px;\n  left: -47px;\n  position: relative;\n  width: 93px;\n  height: 93px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBWUksYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBVko7O0FBYUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFWSiIsImZpbGUiOiJjaGFydC1hbmFseXNpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cCB7XHJcbiAgICAvLyB3aWR0aDogMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiAwcHg7XHJcbiAgICAvLyBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgLy8gYm9yZGVyLXdpZHRoOiAwIDEwMHB4IDE3My4ycHggMTAwcHg7XHJcbiAgICAvLyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwMDdiZmYgdHJhbnNwYXJlbnQ7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIC8vIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgIC8vIC1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgICAvLyAtbW96LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgIC8vIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLy8gLW8tdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpbmdsZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udXAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDgwcHg7XHJcbiAgICBsZWZ0OiAtNDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5M3B4O1xyXG4gICAgaGVpZ2h0OiA5M3B4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 79134:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/llp-analysis/llp-analysis.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = ".sub-inner {\n  margin: 0 auto;\n  text-align: center;\n  position: relative;\n}\n\n.left-border {\n  transform: skewX(-30deg);\n  width: 95px;\n  background: #fff;\n  height: 457px;\n  position: absolute;\n  bottom: 0;\n  left: 23px;\n  z-index: 1;\n}\n\n.right-border {\n  transform: skewX(30deg);\n  width: 95px;\n  background: #fff;\n  height: 457px;\n  position: absolute;\n  bottom: 0;\n  right: 24px;\n  z-index: 1;\n}\n\n.inner {\n  height: 120px;\n}\n\n.investment {\n  width: 35%;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.investment .freedom-left-inner {\n  width: 50%;\n  float: left;\n  height: 120px;\n  background: #f2f2f2;\n  position: relative;\n}\n\n.investment .freedom-left-inner .progress {\n  top: 31px;\n  left: 62px;\n  width: 22.75px;\n}\n\n.investment .freedom-right-inner {\n  width: 50%;\n  float: right;\n  height: 120px;\n  background: #f2f2f2;\n}\n\n.investment a {\n  position: absolute;\n  top: 88px;\n  text-decoration: underline;\n  color: #f5821f;\n  width: 97%;\n  text-align: center;\n  display: block;\n  left: 5px;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.saving {\n  width: 65%;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.saving .education-left-inner {\n  width: 50%;\n  float: left;\n  height: 120px;\n  background: #f2f2f2;\n  position: relative;\n}\n\n.saving .education-left-inner a {\n  position: absolute;\n  bottom: 21px;\n  text-decoration: underline;\n  color: #7f7f7f;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  left: 12%;\n}\n\n.saving .education-left-inner .progress {\n  left: 77px;\n  top: 30px;\n}\n\n.saving .retirement-right-inner {\n  width: 50%;\n  float: right;\n  height: 120px;\n  background: #f2f2f2;\n  position: relative;\n}\n\n.saving .retirement-right-inner a {\n  position: absolute;\n  bottom: 21px;\n  text-decoration: underline;\n  color: #7f7f7f;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  right: 11%;\n}\n\n.saving .retirement-right-inner .progress {\n  left: 50px;\n  top: 30px;\n}\n\n.protection {\n  width: 460px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.protection .income-left-inner {\n  padding: 0;\n  height: 140px;\n  background: #f2f2f2;\n}\n\n.protection .income-left-inner a {\n  position: absolute;\n  bottom: 30px;\n  text-decoration: underline;\n  color: #22aae1;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  left: 13%;\n}\n\n.protection .income-left-inner .progress {\n  top: 18px;\n  left: 83px;\n}\n\n.protection .health-middle-inner {\n  padding: 0;\n  height: 140px;\n  background: #f2f2f2;\n}\n\n.protection .health-middle-inner a {\n  position: absolute;\n  bottom: 30px;\n  text-decoration: underline;\n  color: #f5821f;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.protection .health-middle-inner .progress {\n  top: 18px;\n  left: 62px;\n}\n\n.protection .asset-right-inner {\n  height: 140px;\n  padding: 0;\n  background: #f2f2f2;\n}\n\n.protection .asset-right-inner a {\n  position: absolute;\n  bottom: 30px;\n  text-decoration: underline;\n  color: #f5821f;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  right: 15%;\n}\n\n.protection .asset-right-inner .progress {\n  left: 43px;\n  top: 18px;\n}\n\n.left-transparent {\n  height: 360px;\n  position: absolute;\n  background: #fff;\n  width: 70px;\n  top: 0;\n  transform: skewX(-29.2deg);\n  left: 28px;\n  z-index: 1;\n}\n\n.right-transparent {\n  height: 360px;\n  position: absolute;\n  background: #fff;\n  width: 70px;\n  top: 0;\n  transform: skewX(29.2deg);\n  right: 28px;\n  z-index: 1;\n}\n\n.investment-dot {\n  position: absolute;\n  top: 120px;\n  width: 100%;\n  border-bottom: medium dashed #d9d9d9;\n  z-index: 2;\n}\n\n.investment-dot span {\n  position: absolute;\n  top: -100px;\n  color: #7f7f7f;\n  text-decoration: underline;\n}\n\n.saving-dot {\n  position: absolute;\n  top: 240px;\n  width: 100%;\n  border-bottom: medium dashed #d9d9d9;\n  z-index: 2;\n}\n\n.saving-dot span {\n  position: absolute;\n  top: -100px;\n  color: #7f7f7f;\n  text-decoration: underline;\n}\n\n.protection-dot {\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  border-bottom: medium dashed #d9d9d9;\n  z-index: 2;\n}\n\n.protection-dot span {\n  position: absolute;\n  top: -100px;\n  color: #7f7f7f;\n  text-decoration: underline;\n}\n\n.progress {\n  top: 10px;\n  left: 69%;\n  width: 15%;\n  height: 55%;\n  position: absolute;\n  overflow: hidden;\n  background-color: transparent;\n  border-radius: 0 !important;\n}\n\n.progress span {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.sub-progress {\n  background-color: #d6185e;\n  animation: progressBar1 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes progressBar1 {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 100%;\n  }\n}\n\n.text-rotate {\n  color: #fff;\n  position: relative;\n  top: 45%;\n  /* IE 9 */\n  transform: rotate(90deg);\n}\n\n.saving-border {\n  width: 1px;\n  height: 90%;\n  background: #d9d9d9;\n  position: absolute;\n  right: 0;\n  top: 8px;\n}\n\n.btn-next {\n  width: 100%;\n  overflow: hidden;\n  margin: 47px 0 0 0;\n}\n\n.btn-next div {\n  width: 600px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.btn-next div button {\n  width: 220px;\n  float: left;\n}\n\n.btn-next div button:nth-child(2) {\n  float: right;\n}\n\n.inactive-freedon-left {\n  background-color: #cac9ca !important;\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n}\n\n.inactive-freedon-right {\n  background-color: #cac9ca !important;\n  opacity: 0.3;\n  width: 100%;\n  height: 100%;\n}\n\n.red {\n  background: red;\n}\n\n.investment-1 {\n  text-align: center;\n  width: 22%;\n  margin: 0 auto;\n  height: 25px;\n  left: 6px;\n  transform: skewX(60deg);\n  position: relative;\n}\n\n.investment-1 label {\n  transform: skewX(-60deg);\n  color: #fff;\n  font-size: 10px;\n  margin: 0;\n}\n\n.bg-protection {\n  background: #ff8100 !important;\n  height: 100%;\n  width: 100%;\n}\n\n.bg-saving {\n  background: #ffd300 !important;\n  height: 100%;\n  width: 100%;\n}\n\n.bg-freedom {\n  background: #00acea !important;\n  height: 100%;\n  width: 100%;\n}\n\n.lpp-icon {\n  width: 100%;\n  position: absolute;\n  top: 40px;\n  text-align: center;\n}\n\n.lpp-icon img {\n  max-width: 35px;\n  min-width: 25px;\n  position: relative;\n}\n\n.lpp-icon .education {\n  left: 13%;\n  top: -7px;\n}\n\n.lpp-icon .retirement-img {\n  right: 13%;\n  top: -7px;\n}\n\n.lpp-icon .income {\n  left: 15%;\n  top: 4px;\n}\n\n.lpp-icon .health {\n  top: 4px;\n}\n\n.lpp-icon .assets {\n  right: 16%;\n  top: 4px;\n}\n\n.lpp-icon .freedom {\n  top: 5px;\n}\n\n.chart {\n  position: relative;\n  margin: 0 auto;\n}\n\n@media screen and (min-width: 320px) and (max-width: 460px) {\n  .chart {\n    width: 265px;\n  }\n  .chart img {\n    min-width: 25px;\n    max-width: 25px;\n  }\n  .chart .investment {\n    height: 90px;\n  }\n  .chart .investment .lpp-icon {\n    top: 28px;\n  }\n  .chart .investment a {\n    top: 65px;\n    font-size: 10px;\n  }\n  .chart .saving {\n    height: 90px;\n  }\n  .chart .saving .lpp-icon {\n    top: 28px;\n  }\n  .chart .saving a {\n    top: 60px;\n    font-size: 10px;\n  }\n  .chart .protection {\n    height: 90px;\n  }\n  .chart .protection .lpp-icon {\n    top: 28px;\n  }\n  .chart .protection a {\n    top: 65px;\n    font-size: 10px;\n  }\n  .chart .investment-1 {\n    height: 20px;\n    width: 23%;\n  }\n  .chart .investment-1 label {\n    font-size: 9px;\n    line-height: 20px;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: 0px;\n  }\n\n  .left-border {\n    transform: skewX(-23deg);\n    width: 60px;\n    height: 312px;\n    left: 5px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(23deg);\n    width: 60px;\n    height: 312px;\n    right: 5px;\n    bottom: 18px;\n  }\n}\n\n@media screen and (min-width: 461px) and (max-width: 680px) {\n  .chart {\n    width: 395px;\n  }\n  .chart img {\n    min-width: 25px;\n    max-width: 25px;\n  }\n  .chart .investment {\n    height: 100px;\n  }\n  .chart .investment .lpp-icon {\n    top: 27px;\n  }\n  .chart .investment a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .saving {\n    height: 100px;\n  }\n  .chart .saving .lpp-icon {\n    top: 27px;\n  }\n  .chart .saving a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .protection {\n    height: 100px;\n  }\n  .chart .protection .lpp-icon {\n    top: 27px;\n  }\n  .chart .protection a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .investment-1 {\n    height: 20px;\n    width: 23%;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: 0px;\n  }\n\n  .left-border {\n    transform: skewX(-30deg);\n    width: 75px;\n    height: 350px;\n    left: 25px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(30deg);\n    width: 75px;\n    height: 350px;\n    right: 25px;\n    bottom: 18px;\n  }\n}\n\n@media screen and (min-width: 681px) and (max-width: 780px) {\n  .chart {\n    width: 430px;\n  }\n  .chart img {\n    min-width: 30px;\n    max-width: 30px;\n  }\n  .chart .investment {\n    height: 110px;\n  }\n  .chart .investment .lpp-icon {\n    top: 32px;\n  }\n  .chart .investment a {\n    top: 77px;\n    font-size: 12px;\n  }\n  .chart .saving {\n    height: 110px;\n  }\n  .chart .saving .lpp-icon {\n    top: 32px;\n  }\n  .chart .saving a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .protection {\n    height: 110px;\n  }\n  .chart .protection .lpp-icon {\n    top: 32px;\n  }\n  .chart .protection a {\n    top: 77px;\n    font-size: 12px;\n  }\n  .chart .investment-1 {\n    height: 20px;\n    width: 23%;\n  }\n  .chart .investment-1 label {\n    line-height: 20px;\n    display: block;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: -2px;\n  }\n\n  .left-border {\n    transform: skewX(-30deg);\n    width: 85px;\n    height: 380px;\n    left: 25px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(30deg);\n    width: 85px;\n    height: 380px;\n    right: 25px;\n    bottom: 18px;\n  }\n}\n\n@media screen and (min-width: 781px) and (max-width: 1060px) {\n  .chart {\n    width: 430px;\n  }\n  .chart img {\n    min-width: 30px;\n    max-width: 30px;\n  }\n  .chart .investment {\n    height: 110px;\n  }\n  .chart .investment .lpp-icon {\n    top: 32px;\n  }\n  .chart .investment a {\n    top: 77px;\n    font-size: 12px;\n  }\n  .chart .saving {\n    height: 110px;\n  }\n  .chart .saving .lpp-icon {\n    top: 32px;\n  }\n  .chart .saving a {\n    top: 70px;\n    font-size: 12px;\n  }\n  .chart .protection {\n    height: 110px;\n  }\n  .chart .protection .lpp-icon {\n    top: 32px;\n  }\n  .chart .protection a {\n    top: 77px;\n    font-size: 12px;\n  }\n  .chart .investment-1 {\n    height: 20px;\n    width: 23%;\n  }\n  .chart .investment-1 label {\n    line-height: 20px;\n    display: block;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: -2px;\n  }\n\n  .left-border {\n    transform: skewX(-30deg);\n    width: 85px;\n    height: 380px;\n    left: 25px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(30deg);\n    width: 85px;\n    height: 380px;\n    right: 25px;\n    bottom: 18px;\n  }\n}\n\n@media screen and (min-width: 1061px) {\n  .chart {\n    width: 500px;\n  }\n  .chart img {\n    min-width: 35px;\n    max-width: 35px;\n  }\n  .chart .investment {\n    height: 115px;\n  }\n  .chart .investment .lpp-icon {\n    top: 32px;\n  }\n  .chart .investment a {\n    top: 81px;\n    font-size: 12px;\n  }\n  .chart .saving {\n    height: 115px;\n  }\n  .chart .saving .lpp-icon {\n    top: 32px;\n  }\n  .chart .saving a {\n    top: 75px;\n    font-size: 12px;\n  }\n  .chart .protection {\n    height: 115px;\n  }\n  .chart .protection .lpp-icon {\n    top: 32px;\n  }\n  .chart .protection a {\n    top: 81px;\n    font-size: 12px;\n  }\n  .chart .investment-1 {\n    height: 25px;\n    width: 23%;\n  }\n  .chart .investment-1 label {\n    font-size: 12px;\n    line-height: 25px;\n    display: block;\n  }\n  .chart .button-saving {\n    width: 59%;\n  }\n  .chart .button-protection {\n    width: 90%;\n    left: 0px;\n  }\n\n  .left-border {\n    transform: skewX(-32deg);\n    width: 90px;\n    height: 405px;\n    left: 35px;\n    bottom: 18px;\n  }\n\n  .right-border {\n    transform: skewX(32deg);\n    width: 90px;\n    height: 405px;\n    right: 35px;\n    bottom: 18px;\n  }\n}\n\nbutton {\n  color: #fff;\n}\n\nbutton label {\n  margin: 0;\n}\n\n.next-btn {\n  overflow: hidden;\n  margin: 47px 0 0 0;\n}\n\n.fna-segment {\n  width: 80%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.fna-segment button {\n  width: 49%;\n  color: #fff;\n}\n\n.fna-segment button:last-child {\n  float: right;\n}\n\n@media screen and (min-width: 320px) and (max-width: 460px) {\n  .chart-grid {\n    width: 100%;\n    padding: 0 !important;\n  }\n\n  .fna-segment {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 461px) and (max-width: 680px) {\n  .fna-segment {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxscC1hbmFseXNpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBQUFKOztBQUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUFRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRVo7O0FBQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBQURKOztBQUVJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFDWjs7QUFDUTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBQ1o7O0FBRUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBQ1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUNaOztBQUNRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFDWjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFHSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBQVo7O0FBRVE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUFaOztBQUdJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURSOztBQUVRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFaOztBQUVRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFBWjs7QUFHSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQVo7O0FBRVE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUFaOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FBRko7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFEUjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUFGSjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQURSOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBRFI7O0FBS0E7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQ0ksU0FBQTtFQUpOO0VBTUU7SUFDSSxZQUFBO0VBSk47QUFDRjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDOEIsU0FBQTtFQUM5Qix3QkFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBS0k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSFI7O0FBSVE7RUFDSSxZQUFBO0VBRUEsV0FBQTtBQUhaOztBQU1RO0VBQ0ksWUFBQTtBQUpaOztBQVNBO0VBRUksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQSjs7QUFVQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUEo7O0FBU0E7RUFDSSxlQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBT0k7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUxSOztBQVNBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBTko7O0FBT0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTFI7O0FBT0k7RUFDSSxTQUFBO0VBQ0EsU0FBQTtBQUxSOztBQVFJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFOUjs7QUFRSTtFQUNJLFNBQUE7RUFDQSxRQUFBO0FBTlI7O0FBUUk7RUFDSSxRQUFBO0FBTlI7O0FBUUk7RUFDSSxVQUFBO0VBQ0EsUUFBQTtBQU5SOztBQVFJO0VBQ0ksUUFBQTtBQU5SOztBQXFIQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQWxISjs7QUFxSEE7RUFDSTtJQUNJLFlBQUE7RUFsSE47RUFtSE07SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQWpIVjtFQW1ITTtJQUNJLFlBQUE7RUFqSFY7RUFrSFU7SUFDSSxTQUFBO0VBaEhkO0VBa0hVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUFoSGQ7RUFtSE07SUFDSSxZQUFBO0VBakhWO0VBa0hVO0lBQ0ksU0FBQTtFQWhIZDtFQWtIVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBaEhkO0VBbUhNO0lBQ0ksWUFBQTtFQWpIVjtFQWtIVTtJQUNJLFNBQUE7RUFoSGQ7RUFrSFU7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQWhIZDtFQW1ITTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VBakhWO0VBa0hVO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0VBaEhkO0VBbUhNO0lBQ0ksVUFBQTtFQWpIVjtFQW1ITTtJQUNJLFVBQUE7SUFDQSxTQUFBO0VBakhWOztFQW9IRTtJQUNJLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFQWpITjs7RUFtSEU7SUFDSSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFoSE47QUFDRjs7QUFtSEE7RUFDSTtJQUNJLFlBQUE7RUFqSE47RUFrSE07SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQWhIVjtFQWtITTtJQUNJLGFBQUE7RUFoSFY7RUFpSFU7SUFDSSxTQUFBO0VBL0dkO0VBaUhVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUEvR2Q7RUFrSE07SUFDSSxhQUFBO0VBaEhWO0VBaUhVO0lBQ0ksU0FBQTtFQS9HZDtFQWlIVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBL0dkO0VBa0hNO0lBQ0ksYUFBQTtFQWhIVjtFQWlIVTtJQUNJLFNBQUE7RUEvR2Q7RUFpSFU7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQS9HZDtFQWtITTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VBaEhWO0VBa0hNO0lBQ0ksVUFBQTtFQWhIVjtFQWtITTtJQUNJLFVBQUE7SUFDQSxTQUFBO0VBaEhWOztFQW1IRTtJQUNJLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQWhITjs7RUFrSEU7SUFDSSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUEvR047QUFDRjs7QUFrSEE7RUFDSTtJQUNJLFlBQUE7RUFoSE47RUFpSE07SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQS9HVjtFQWlITTtJQUNJLGFBQUE7RUEvR1Y7RUFnSFU7SUFDSSxTQUFBO0VBOUdkO0VBZ0hVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUE5R2Q7RUFpSE07SUFDSSxhQUFBO0VBL0dWO0VBZ0hVO0lBQ0ksU0FBQTtFQTlHZDtFQWdIVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBOUdkO0VBaUhNO0lBQ0ksYUFBQTtFQS9HVjtFQWdIVTtJQUNJLFNBQUE7RUE5R2Q7RUFnSFU7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQTlHZDtFQWlITTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VBL0dWO0VBZ0hVO0lBQ0ksaUJBQUE7SUFDQSxjQUFBO0VBOUdkO0VBaUhNO0lBQ0ksVUFBQTtFQS9HVjtFQWlITTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBL0dWOztFQWtIRTtJQUNJLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQS9HTjs7RUFpSEU7SUFDSSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUE5R047QUFDRjs7QUFpSEE7RUFDSTtJQUNJLFlBQUE7RUEvR047RUFnSE07SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQTlHVjtFQWdITTtJQUNJLGFBQUE7RUE5R1Y7RUErR1U7SUFDSSxTQUFBO0VBN0dkO0VBK0dVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUE3R2Q7RUFnSE07SUFDSSxhQUFBO0VBOUdWO0VBK0dVO0lBQ0ksU0FBQTtFQTdHZDtFQStHVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBN0dkO0VBZ0hNO0lBQ0ksYUFBQTtFQTlHVjtFQStHVTtJQUNJLFNBQUE7RUE3R2Q7RUErR1U7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQTdHZDtFQWdITTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VBOUdWO0VBK0dVO0lBQ0ksaUJBQUE7SUFDQSxjQUFBO0VBN0dkO0VBZ0hNO0lBQ0ksVUFBQTtFQTlHVjtFQWdITTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBOUdWOztFQWlIRTtJQUNJLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQTlHTjs7RUFnSEU7SUFDSSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUE3R047QUFDRjs7QUFnSEE7RUFDSTtJQUNJLFlBQUE7RUE5R047RUErR007SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQTdHVjtFQStHTTtJQUNJLGFBQUE7RUE3R1Y7RUE4R1U7SUFDSSxTQUFBO0VBNUdkO0VBOEdVO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUE1R2Q7RUErR007SUFDSSxhQUFBO0VBN0dWO0VBOEdVO0lBQ0ksU0FBQTtFQTVHZDtFQThHVTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBNUdkO0VBK0dNO0lBQ0ksYUFBQTtFQTdHVjtFQThHVTtJQUNJLFNBQUE7RUE1R2Q7RUE4R1U7SUFDSSxTQUFBO0lBQ0EsZUFBQTtFQTVHZDtFQStHTTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VBN0dWO0VBOEdVO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQTVHZDtFQStHTTtJQUNJLFVBQUE7RUE3R1Y7RUErR007SUFDSSxVQUFBO0lBQ0EsU0FBQTtFQTdHVjs7RUFnSEU7SUFDSSx3QkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUE3R047O0VBK0dFO0lBQ0ksdUJBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBNUdOO0FBQ0Y7O0FBK0dBO0VBQ0ksV0FBQTtBQTdHSjs7QUE4R0k7RUFDSSxTQUFBO0FBNUdSOztBQW9IQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFqSEo7O0FBbUhBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWhISjs7QUFpSEk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQS9HUjs7QUFpSEk7RUFDSSxZQUFBO0FBL0dSOztBQXFIQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLHFCQUFBO0VBbEhOOztFQW9IRTtJQUNJLFdBQUE7RUFqSE47QUFDRjs7QUFvSEE7RUFDSTtJQUNJLFdBQUE7RUFsSE47QUFDRiIsImZpbGUiOiJsbHAtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLWlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGVmdC1ib3JkZXIge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMzBkZWcpO1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0NTdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDIzcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucmlnaHQtYm9yZGVyIHtcclxuICAgIHRyYW5zZm9ybTogc2tld1goMzBkZWcpO1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0NTdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmlubmVyIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLmludmVzdG1lbnQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy9sZWZ0OiAtNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5mcmVlZG9tLWxlZnQtaW5uZXIge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB0b3A6IDMxcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDYycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMi43NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mcmVlZG9tLXJpZ2h0LWlubmVyIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4OHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGNvbG9yOiAjZjU4MjFmO1xyXG4gICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zYXZpbmcge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gbGVmdDogLTdweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuZWR1Y2F0aW9uLWxlZnQtaW5uZXIge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDIxcHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEyJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICAgICAgbGVmdDogNzdweDtcclxuICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXRpcmVtZW50LXJpZ2h0LWlubmVyIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMjFweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcmlnaHQ6IDExJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb3RlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDQ2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBsZWZ0OiAtMzdweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5pbmNvbWUtbGVmdC1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgY29sb3I6ICMyMmFhZTE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIHRvcDogMThweDtcclxuICAgICAgICAgICAgbGVmdDogODNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhbHRoLW1pZGRsZS1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmNTgyMWY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB0b3A6IDE4cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDYycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFzc2V0LXJpZ2h0LWlubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1ODIxZjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQzcHg7XHJcbiAgICAgICAgICAgIHRvcDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWZ0LXRyYW5zcGFyZW50IHtcclxuICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0yOS4yZGVnKTtcclxuICAgIGxlZnQ6IDI4cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucmlnaHQtdHJhbnNwYXJlbnQge1xyXG4gICAgaGVpZ2h0OiAzNjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogc2tld1goMjkuMmRlZyk7XHJcbiAgICByaWdodDogMjhweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pbnZlc3RtZW50LWRvdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiBtZWRpdW0gZGFzaGVkICNkOWQ5ZDk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2F2aW5nLWRvdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiBtZWRpdW0gZGFzaGVkICNkOWQ5ZDk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvdGVjdGlvbi1kb3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiBtZWRpdW0gZGFzaGVkICNkOWQ5ZDk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNjklO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogNTUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vaGVpZ2h0OiA3MSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1Yi1wcm9ncmVzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDYxODVlO1xyXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzc0JhcjEgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzc0JhcjEge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtcm90YXRlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAvKiBJRSA5ICovXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5zYXZpbmctYm9yZGVyIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogOHB4O1xyXG59XHJcblxyXG4uYnRuLW5leHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiA0N3B4IDAgMCAwO1xyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgLy8gbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b246bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmluYWN0aXZlLWZyZWVkb24tbGVmdCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbmFjdGl2ZS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhYzljYSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZS1mcmVlZG9uLXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWM5Y2EgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5yZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4uaW52ZXN0bWVudC0xIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxlZnQ6IDZweDtcclxuICAgIHRyYW5zZm9ybTogc2tld1goNjBkZWcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTYwZGVnKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmctcHJvdGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4MTAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJnLXNhdmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZkMzAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJnLWZyZWVkb20ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlYSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5scHAtaWNvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuZWR1Y2F0aW9uIHtcclxuICAgICAgICBsZWZ0OiAxMyU7XHJcbiAgICAgICAgdG9wOiAtN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXRpcmVtZW50LWltZyB7XHJcbiAgICAgICAgcmlnaHQ6IDEzJTtcclxuICAgICAgICB0b3A6IC03cHg7XHJcbiAgICB9XHJcbiAgICAuaW5jb21lIHtcclxuICAgICAgICBsZWZ0OiAxNSU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhbHRoIHtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5hc3NldHMge1xyXG4gICAgICAgIHJpZ2h0OiAxNiU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuZnJlZWRvbSB7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC8qIEZvciBtb2JpbGU6ICovXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuLy8gICAgIC5maW5hbmNpYWwtZ3JpZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgLmZuYS1wcm9ncmVzcyB7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2hhcnQtZ3JpZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgLmZuYS1zZWdtZW50e1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2hhcnR7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4vLyAgICAgLmJveC1ncmlkIHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgICAgIC5maW5hbmNpYWwtZ3JpZCB7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAuZm5hLXByb2dyZXNzIHtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAuY2hhcnQtZ3JpZCB7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8qIEZvciBtb2JpbGU6ICovXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuLy8gICAgIC5maW5hbmNpYWwtZ3JpZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgLmZuYS1wcm9ncmVzcyB7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2hhcnQtZ3JpZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgLmZuYS1zZWdtZW50e1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8qIEZvciB0YWJsZXRzOiAqL1xyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbi8vICAgICAuZmluYW5jaWFsLWdyaWQge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIC5mbmEtcHJvZ3Jlc3Mge1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXJ0LWdyaWQge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXJ0IHtcclxuLy8gICAgICAgICB3aWR0aDogNDUwcHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8qIEZvciB0YWJsZXRzOiAqL1xyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4vLyAgICAgLmxlZnQtYm9yZGVyIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0yNWRlZyk7XHJcbi8vICAgICB9XHJcbi8vICAgICAucmlnaHQtYm9yZGVyIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKDI1ZGVnKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuaW52ZXN0bWVudC0xIHtcclxuLy8gICAgICAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vICAgICAuYnV0dG9uLXNhdmluZyB7XHJcbi8vICAgICAgICAgd2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmJ1dHRvbi1wcm90ZWN0aW9uIHtcclxuLy8gICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XHJcbi8vICAgICAubGVmdC1ib3JkZXIge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2tld1goLTI1ZGVnKTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5yaWdodC1ib3JkZXIge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2tld1goMjVkZWcpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5pbnZlc3RtZW50LTEge1xyXG4vLyAgICAgICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5idXR0b24tc2F2aW5nIHtcclxuLy8gICAgICAgICB3aWR0aDogNDklICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vICAgICAuYnV0dG9uLXByb3RlY3Rpb24ge1xyXG4vLyAgICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLmNoYXJ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAuY2hhcnQge1xyXG4gICAgICAgIHdpZHRoOiAyNjVweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmludmVzdG1lbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNhdmluZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgLmxwcC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvdGVjdGlvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgLmxwcC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW52ZXN0bWVudC0xIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjMlO1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tc2F2aW5nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU5JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi1wcm90ZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sZWZ0LWJvcmRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMjNkZWcpO1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzEycHg7XHJcbiAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgIGJvdHRvbTogMThweDtcclxuICAgIH1cclxuICAgIC5yaWdodC1ib3JkZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goMjNkZWcpO1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzEycHg7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBib3R0b206IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ2MXB4KSBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcclxuICAgIC5jaGFydCB7XHJcbiAgICAgICAgd2lkdGg6IDM5NXB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW52ZXN0bWVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNhdmluZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb3RlY3Rpb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAubHBwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnZlc3RtZW50LTEge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tc2F2aW5nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU5JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi1wcm90ZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sZWZ0LWJvcmRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMzBkZWcpO1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICBib3R0b206IDE4cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtYm9yZGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKDMwZGVnKTtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvdHRvbTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjgxcHgpIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xyXG4gICAgLmNoYXJ0IHtcclxuICAgICAgICB3aWR0aDogNDMwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnZlc3RtZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgLmxwcC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNzdweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2aW5nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgLmxwcC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvdGVjdGlvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmludmVzdG1lbnQtMSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIzJTtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLXNhdmluZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1OSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tcHJvdGVjdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0ycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxlZnQtYm9yZGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0zMGRlZyk7XHJcbiAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIGJvdHRvbTogMThweDtcclxuICAgIH1cclxuICAgIC5yaWdodC1ib3JkZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goMzBkZWcpO1xyXG4gICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm90dG9tOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODFweCkgYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xyXG4gICAgLmNoYXJ0IHtcclxuICAgICAgICB3aWR0aDogNDMwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnZlc3RtZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgLmxwcC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNzdweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2aW5nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgLmxwcC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvdGVjdGlvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmludmVzdG1lbnQtMSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIzJTtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLXNhdmluZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1OSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tcHJvdGVjdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0ycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxlZnQtYm9yZGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0zMGRlZyk7XHJcbiAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIGJvdHRvbTogMThweDtcclxuICAgIH1cclxuICAgIC5yaWdodC1ib3JkZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goMzBkZWcpO1xyXG4gICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm90dG9tOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDYxcHgpIHtcclxuICAgIC5jaGFydCB7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW52ZXN0bWVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDgxcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNhdmluZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgICAgIC5scHAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb3RlY3Rpb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgICAgICAubHBwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4MXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnZlc3RtZW50LTEge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMyU7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi1zYXZpbmcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTklO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLXByb3RlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxlZnQtYm9yZGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0zMmRlZyk7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDVweDtcclxuICAgICAgICBsZWZ0OiAzNXB4O1xyXG4gICAgICAgIGJvdHRvbTogMThweDtcclxuICAgIH1cclxuICAgIC5yaWdodC1ib3JkZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goMzJkZWcpO1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDM1cHg7XHJcbiAgICAgICAgYm90dG9tOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vbmV3IDMwLU1heVxyXG5cclxuLm5leHQtYnRue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogNDdweCAwIDAgMDtcclxufVxyXG4uZm5hLXNlZ21lbnQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gICAgLmNoYXJ0LWdyaWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5mbmEtc2VnbWVudHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDYxcHgpIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xyXG4gICAgLmZuYS1zZWdtZW50e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 60941:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/product-analysis/product-analysis.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = ".products {\n  margin-bottom: 40px;\n}\n\nbutton {\n  color: #fff;\n}\n\nbutton label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUdJO0VBQ0ksU0FBQTtBQURSIiwiZmlsZSI6InByb2R1Y3QtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5wcm9kdWN0c3tcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 71682:
/*!********************************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3,\nh4 {\n  font-size: 1.3rem;\n}\n.add-child {\n  float: left;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\n.delete {\n  margin: 13px 0 0 0;\n  display: inline-block;\n  color: #005f99 !important;\n  text-decoration: underline;\n  font-size: 0.9rem;\n  min-width: 70px;\n}\nbutton {\n  width: 120px;\n}\n.error-message {\n  color: red;\n}\n.sub-title {\n  color: #005f99 !important;\n}\nlabel {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFFQTs7RUFFSSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtBQUNKO0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hYm91dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgzLFxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmFkZC1jaGlsZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNvbC00IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgICBtYXJnaW46IDEzcHggMCAwIDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgY29sb3I6ICMwMDVmOTkgIWltcG9ydGFudDtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 62249:
/*!***********************************************************************!*\
  !*** ./src/app/pages/fna-detail/fna-detail.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".financial-grid {\n  width: 30%;\n  float: left;\n  overflow: hidden;\n  border-right: 1px solid #d3cbcb;\n  position: relative;\n}\n.financial-grid .financial {\n  position: relative;\n}\n.financial-grid .financial div label {\n  color: #7f7f7f;\n}\n.financial-grid .financial div label:first-child {\n  width: 35%;\n  text-align: right;\n  padding-right: 5%;\n}\n.financial-grid .financial div label:last-child {\n  width: 65%;\n  text-align: left;\n}\n.financial-grid .financial div:nth-child(3) label:last-child {\n  color: #ff8100;\n}\n.chart-grid {\n  width: 70%;\n  float: left;\n  overflow: hidden;\n  padding: 5px !important;\n}\n.box-grid {\n  box-shadow: none;\n  background-color: #f2f2f2;\n  border-radius: 13px;\n  width: 100%;\n  overflow: hidden;\n  padding: 5px;\n  background: #fff;\n  border: 2px solid #f2f2f2;\n}\n.fna-segment {\n  width: 80%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.fna-segment button {\n  width: 49%;\n  color: #fff;\n}\n.fna-segment button:last-child {\n  float: right;\n}\n.btn-group {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 1rem;\n}\n.btn-group button {\n  width: 50%;\n  color: #fff;\n}\n.box-grid {\n  box-shadow: none;\n  background-color: #f2f2f2;\n  border-radius: 13px;\n  width: 100%;\n  overflow: hidden;\n  padding: 5px;\n}\n.progress {\n  top: 10px;\n  left: 25%;\n  width: 50%;\n  height: 55%;\n  position: absolute;\n  overflow: hidden;\n  background-color: transparent;\n  border-radius: 0 !important;\n  text-align: center;\n}\n.progress span {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.sub-progress {\n  animation: progressBar1 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n@keyframes progressBar1 {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 100%;\n  }\n}\n.text-rotate {\n  color: #fff;\n  position: relative;\n  /* IE 9 */\n  transform: rotate(0deg);\n}\n.fna-progress {\n  position: relative;\n  width: 90px;\n  height: 345px;\n  top: 146px;\n  margin: 0 auto;\n}\n.progress-lower {\n  background: #cac9ca;\n}\n.progress-middle {\n  background: #ff8100;\n}\n.progress-upper {\n  background: #00acea;\n}\n@media screen and (min-width: 320px) and (max-width: 780px) {\n  .financial-grid {\n    width: 100%;\n  }\n  .financial-grid .fna-progress {\n    height: 0;\n  }\n\n  .chart-grid {\n    width: 100%;\n  }\n\n  .financial-grid {\n    border-right: none;\n  }\n  .financial-grid label {\n    width: 25% !important;\n  }\n\n  .fna-progress {\n    height: 100% !important;\n    position: absolute;\n    overflow: hidden;\n    background-color: transparent;\n    border-radius: 0 !important;\n    text-align: center;\n    width: 40px;\n    left: unset;\n    top: unset;\n    right: 0;\n    bottom: 0;\n  }\n\n  .progress {\n    width: 100% !important;\n    height: 70% !important;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 1024px) {\n  .box-grid {\n    padding: 5px;\n  }\n\n  .chart-grid {\n    padding-left: 5px !important;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 460px) {\n  .chart-grid {\n    width: 100%;\n    padding: 0 !important;\n  }\n\n  .fna-segment {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 461px) and (max-width: 680px) {\n  .fna-segment {\n    width: 100%;\n  }\n}\nbutton {\n  color: #fff;\n}\nbutton label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZuYS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBQVk7RUFFSSxjQUFBO0FBQ2hCO0FBQ1k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNoQjtBQUNZO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBQ2hCO0FBR1k7RUFDSSxjQUFBO0FBRGhCO0FBT0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFKSjtBQU9BO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU9BO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpKO0FBS0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUhSO0FBS0k7RUFDSSxZQUFBO0FBSFI7QUFPQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSko7QUFLSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBSFI7QUFPQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFKSjtBQU9BO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU9BO0VBQ0ksY0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFMSjtBQVFBO0VBRUksc0NBQUE7RUFDQSw2QkFBQTtBQU5KO0FBU0E7RUFDSTtJQUNJLFNBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0FBQ0Y7QUFTQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUU4QixTQUFBO0VBQzlCLHVCQUFBO0FBUEo7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUE7RUFDSSxtQkFBQTtBQVBKO0FBVUE7RUFDSSxtQkFBQTtBQVBKO0FBVUE7RUFDSSxtQkFBQTtBQVBKO0FBOERBO0VBQ0k7SUFDSSxXQUFBO0VBM0ROO0VBNERNO0lBQ0ksU0FBQTtFQTFEVjs7RUE2REU7SUFDSSxXQUFBO0VBMUROOztFQTRERTtJQUNJLGtCQUFBO0VBekROO0VBMERNO0lBQ0kscUJBQUE7RUF4RFY7O0VBMkRFO0lBQ0ksdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUF4RE47O0VBMERFO0lBQ0ksc0JBQUE7SUFDQSxzQkFBQTtFQXZETjtBQUNGO0FBeURBO0VBQ0k7SUFDSSxZQUFBO0VBdkROOztFQXlERTtJQUNJLDRCQUFBO0VBdEROO0FBQ0Y7QUFrRUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtFQWhFTjs7RUFrRUU7SUFDSSxXQUFBO0VBL0ROO0FBQ0Y7QUFrRUE7RUFDSTtJQUNJLFdBQUE7RUFoRU47QUFDRjtBQW1FQTtFQUNJLFdBQUE7QUFqRUo7QUFrRUk7RUFDSSxTQUFBO0FBaEVSIiwiZmlsZSI6ImZuYS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmluYW5jaWFsLWdyaWQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2NiY2I7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZmluYW5jaWFsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjN2Y3ZjdmOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICBsYWJlbDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY4MTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2hhcnQtZ3JpZCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3gtZ3JpZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcclxufVxyXG5cclxuLmZuYS1zZWdtZW50IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWdyb3VwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYm94LWdyaWQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vaGVpZ2h0OiA3MSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1Yi1wcm9ncmVzcyB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNkNjE4NWU7XHJcbiAgICBhbmltYXRpb246IHByb2dyZXNzQmFyMSAxcyBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByb2dyZXNzQmFyMSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1yb3RhdGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL3RvcDogNTAlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgLyogSUUgOSAqL1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbn1cclxuXHJcbi5mbmEtcHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgdG9wOiAxNDZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtbG93ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2NhYzljYTtcclxufVxyXG5cclxuLnByb2dyZXNzLW1pZGRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4MTAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtdXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlYTtcclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4vLyAgICAgLmJveC1ncmlkIHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgICAgIC5maW5hbmNpYWwtZ3JpZCB7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAuZm5hLXByb2dyZXNzIHtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAuY2hhcnQtZ3JpZCB7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgLmZuYS1zZWdtZW50e1xyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8qIEZvciBtb2JpbGU6ICovXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuLy8gICAgIC5maW5hbmNpYWwtZ3JpZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgLmZuYS1wcm9ncmVzcyB7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2hhcnQtZ3JpZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgLmZuYS1zZWdtZW50e1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8qIEZvciB0YWJsZXRzOiAqL1xyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbi8vICAgICAuZmluYW5jaWFsLWdyaWQge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIC5mbmEtcHJvZ3Jlc3Mge1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXJ0LWdyaWQge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXJ0IHtcclxuLy8gICAgICAgICB3aWR0aDogNDUwcHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8qIEZvciB0YWJsZXRzOiAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XHJcbiAgICAuZmluYW5jaWFsLWdyaWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5mbmEtcHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoYXJ0LWdyaWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmZpbmFuY2lhbC1ncmlkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZuYS1wcm9ncmVzcyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgICB0b3A6IHVuc2V0O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDcwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuYm94LWdyaWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIC5jaGFydC1ncmlkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkgYW5kIChtYXgtd2lkdGg6IDI1MDBweCkge1xyXG4gICAgLy8gLmZuYS1wcm9ncmVzc3tcclxuICAgIC8vICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gLmZuYS1wcm9ncmVzcy1ub25lIHtcclxuICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gICAgLmNoYXJ0LWdyaWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5mbmEtc2VnbWVudHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDYxcHgpIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xyXG4gICAgLmZuYS1zZWdtZW50e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 96237:
/*!****************************************************************************!*\
  !*** ./src/app/pages/fna-detail/freedom/freedom.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 24px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3 {\n  font-size: 1.3rem;\n}\nlabel {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZWVkb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDSSwwQkFBQTtBQUVSO0FBRUE7RUFDSSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZnJlZWRvbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYWJvdXQge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBidXR0b246bGFzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 69724:
/*!**************************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3 {\n  font-size: 1.3rem;\n}\n.add-child {\n  float: left;\n}\n.sub-title {\n  padding-left: 26px;\n  color: #005f99 !important;\n  font-size: 0.9rem;\n  margin: 15px 0 5px 0;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\n.delete {\n  margin: 12px 0 0 0;\n  display: inline-block;\n  color: #005f99 !important;\n  text-decoration: underline;\n  font-size: 0.9rem;\n}\nbutton {\n  width: 120px;\n}\n.btn_clear {\n  padding: 0;\n  position: relative;\n}\n.btn_clear a {\n  position: absolute;\n  top: 14px;\n  display: inline-block;\n  cursor: pointer;\n}\nlabel {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxZQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImhlYWx0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYWJvdXQge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmFkZC1jaGlsZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBtYXJnaW46IDE1cHggMCA1cHggMDtcclxufVxyXG5cclxuLmNvbC00IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgICBtYXJnaW46IDEycHggMCAwIDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzAwNWY5OSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmJ0bl9jbGVhciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 96515:
/*!**************************************************************************!*\
  !*** ./src/app/pages/fna-detail/income/income.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3 {\n  font-size: 1.3rem;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\nbutton {\n  width: 120px;\n}\nlabel {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImluY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYWJvdXQge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgYnV0dG9uOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcbi5jb2wtNHtcclxuICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufSJdfQ== */";

/***/ }),

/***/ 85694:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/fna-detail/retirement/retirement.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".btn-about {\n  text-align: end;\n  text-align: end;\n  padding: 0;\n  margin-top: 150px;\n}\n.btn-about button:last-child {\n  margin-right: 0 !important;\n}\nh3 {\n  font-size: 0.9rem;\n}\n.col-4 {\n  padding-left: 26px;\n}\n.col-4 span {\n  color: red;\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\nbutton {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldGlyZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSwwQkFBQTtBQUVSO0FBRUE7RUFDSSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBR0E7RUFDSSxZQUFBO0FBQUoiLCJmaWxlIjoicmV0aXJlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYWJvdXQge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgYnV0dG9uOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5jb2wtNHtcclxuICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMjBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 26374:
/*!************************************************************************!*\
  !*** ./src/app/pages/fna-detail/asset/asset.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\">\r\n        <h3 class=\"card-label left-border-image \">{{\"FORM.asset\" | translate }}</h3>\r\n        <div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-label sub-title\">Asset {{ selectedIndex + 1 }}</div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <a class=\" delete\" *ngIf=\"selectedIndex > 0\" (click)=\"deleteAsset()\">{{\"FORM.btn_delete\" | translate\r\n                        }}</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.asset_type\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <select autocomplete=\"off\" formControlName=\"assetType\" class=\"form-control form-control-sm\"\r\n                            name=\"builder[layout][subheader][layoutVersion]\">\r\n                            <option [value]=\"\">Please Select</option>\r\n                            <option *ngFor=\"let assect of assectTypes;\" [value]=\"assect.typeCode\">{{ assect.typeValue }}\r\n                            </option>\r\n\r\n                            <!-- <option value=\"building\">Building</option>\r\n                            <option value=\"motor\">Motor</option>\r\n                            <option value=\"others\">Others</option> -->\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\" *ngIf=\"formGroup.value.assetType == 'others' \">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.please_specify\" | translate}}<span>*</span></label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                            [class.is-invalid]=\"isControlInvalid('remark')\" [class.is-valid]=\"isControlValid('remark')\"\r\n                            formControlName=\"remark\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.with_insurance_protection\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <mat-radio-group formControlName=\"protect\">\r\n                            <mat-radio-button class=\"example-margin\" [value]=true>{{\"FORM.rad_yes\" | translate}}\r\n                            </mat-radio-button>\r\n                            <mat-radio-button class=\"example-margin\" [value]=false>{{\"FORM.rad_no\" | translate}}\r\n                            </mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.replacement_purchase_cost\" | translate}}\r\n                            <span>*</span></label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" (keyup)=\"updateCommaInput($event)\"\r\n                            class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                            [class.is-invalid]=\"isControlInvalid('costText')\"\r\n                            [class.is-valid]=\"isControlValid('costText')\" formControlName=\"costText\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn-about\">\r\n            <button type=\"button\" *ngIf=\"selectedIndex == 0 && assects.length > 0\"\r\n                class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\" (click)=\"viewAll()\">{{\"FORM.view_all\"|translate}}</button>\r\n            <button type=\"button\" *ngIf=\"selectedIndex >= 0\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                (click)=\"backToStartAction()\" style=\"width: auto; margin-bottom: 10px;\">{{\"FORM.back_main_page\"|translate}}</button>\r\n            <button type=\"button\" *ngIf=\"selectedIndex > 0\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                style=\"margin-bottom: 10px;\" (click)=\"backAction()\">{{\"FORM.btn_back\" | translate }}</button>\r\n            <button type=\"button\" (click)=\"saveAsset()\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                style=\"margin-bottom: 10px;\">{{\"FORM.btn_save\" | translate }}</button>\r\n            <button type=\"button\" [disabled]=\"!formGroup.value.id\" *ngIf=\"selectedIndex + 1 >= nextCount\"\r\n                (click)=\"addChild()\" class=\"btn btn-primary btn-elevate mx-2\" style=\"width: auto; margin-bottom: 10px;\">\r\n                {{\"FORM.add_asset\" | translate }}</button>\r\n            <button type=\"button\" *ngIf=\"selectedIndex + 1 < nextCount\" (click)=\"addChild()\"\r\n                class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\">{{\"FORM.btn_next\" | translate\r\n                }}</button>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ }),

/***/ 80196:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/chart-analysis.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "";

/***/ }),

/***/ 15850:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/llp-analysis/llp-analysis.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<div style=\"margin: 50px 0 0 0;position: relative; \">\r\n    <div class=\"chart\">\r\n        <div class=\"inner investment\" (click)=\"actionChart('Freedom')\">\r\n            <div class=\"sub-inner \" [ngClass]=\"freedom.length? 'bg-freedom' : 'inactive-freedon-left' \">\r\n\r\n                <!-- <div>\r\n                    <div class=\"freedom-left-inner\" [ngClass]=\"freedom.length? 'bg-freedom' : 'inactive-freedon-left' \">\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"freedom-right-inner\"\r\n                        [ngClass]=\"freedom.length? 'bg-freedom' : 'inactive-freedon-left' \">\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <a [ngStyle]=\"{'color':freedom.length? '#ffffff' : '#275f96' }\">Freedom</a>\r\n                    <img *ngIf=\"freedom.length > 0\" class=\"lpp-icon\" src=\"./assets/images/success/freedom-01.svg\"\r\n                        alt=\"freedom\" style=\"left: 55.5px; top: 40px;\" />\r\n                    <img *ngIf=\"freedom.length == 0\" class=\"lpp-icon\" src=\"./assets/images/default/freedom-01.svg\"\r\n                        alt=\"freedom\" style=\"left: 55.5px; top: 40px;\" />\r\n                </div> -->\r\n            </div>\r\n            <div class=\"lpp-icon\">\r\n                <img *ngIf=\"freedom.length > 0\" class=\"freedom\" src=\"./assets/images/success/freedom-01.svg\"\r\n                    alt=\"freedom\" />\r\n                <img *ngIf=\"freedom.length == 0\" class=\"freedom\" src=\"./assets/images/default/freedom-01.svg\"\r\n                    alt=\"freedom\" />\r\n            </div>\r\n            <a [ngStyle]=\"{'color':freedom.length? '#ffffff' : '#275f96' } \" style=\"text-decoration: none;\">{{\"FORM.freedom\" | translate}}</a>\r\n        </div>\r\n        <div>\r\n            <div class=\"investment-1\" [ngStyle]=\"{'background':freedom.length? '#16384d' : '#aaaaaa' }\">\r\n                <label>{{\"FORM.investment\" | translate}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"inner saving\">\r\n            <div class=\"sub-inner\">\r\n                <div class=\"education-left-inner\" (click)=\"fnaSwitchEvent('Education')\">\r\n                    <div [ngClass]=\"fnaEducations.length? 'bg-saving' : 'inactive-freedon-right' \"></div>\r\n                    <a [ngStyle]=\"{'color':fnaEducations.length? '#16384d' : '#275f96' }\">{{\"FORM.education\" | translate}}</a>\r\n                    <div class=\"lpp-icon\">\r\n                        <img *ngIf=\"fnaEducations.length > 0\" class=\"education\"\r\n                            src=\"./assets/images/success/Education-01.svg\" alt=\"education\" />\r\n                        <img *ngIf=\"fnaEducations.length == 0\" class=\"education\"\r\n                            src=\"./assets/images/default/education-01.svg\" alt=\"education\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"retirement-right-inner\" (click)=\"fnaSwitchEvent('Retirement')\">\r\n                    <div [ngClass]=\"fnaRetirementSaving? 'bg-saving' : 'inactive-freedon-left' \"></div>\r\n                    <a [ngStyle]=\"{'color':fnaRetirementSaving? '#16384d' : '#275f96' }\">{{\"FORM.retirement\" | translate}}</a>\r\n                    <div class=\"lpp-icon\">\r\n                        <img *ngIf=\"fnaRetirementSaving\" class=\"retirement-img\"\r\n                            src=\"./assets/images/success/retirement-01.svg\" alt=\"retirement\" />\r\n                        <img *ngIf=\"!fnaRetirementSaving\" class=\"retirement-img\"\r\n                            src=\"./assets/images/default/retirement-01.svg\" alt=\"retirement\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div class=\"investment-1 button-saving\"\r\n                [ngStyle]=\"{'background':fnaEducations.length && fnaRetirementSaving? '#16384d' : '#aaaaaa' }\">\r\n                <label>{{\"FORM.saving\" | translate}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"protection\">\r\n            <div class=\"sub-inner row\">\r\n                <div class=\"income-left-inner col-4\" (click)=\"fnaSwitchEvent('Income')\">\r\n                    <div [ngClass]=\"fnaIncome? 'bg-protection' : 'inactive-freedon-left' \"></div>\r\n                    <a [ngStyle]=\"{'color':fnaIncome? '#ffffff' : '#275f96' }\">{{\"FORM.income\" | translate}}</a>\r\n                    <div class=\"lpp-icon\">\r\n                        <img *ngIf=\"fnaIncome\" class=\"income\" src=\"./assets/images/success/income-01.svg\"\r\n                            alt=\"income\" />\r\n                        <img *ngIf=\"!fnaIncome\" class=\"income\" src=\"./assets/images/default/income-01.svg\"\r\n                            alt=\"income\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"health-middle-inner col-4\" (click)=\"fnaSwitchEvent('Health')\">\r\n                    <div [ngClass]=\"fnaHealths.length? 'bg-protection' : 'inactive-freedon-right' \"> </div>\r\n                    <a [ngStyle]=\"{'color':fnaHealths.length? '#ffffff' : '#275f96' }\"\r\n                        style=\"margin: 0 0 0 2px;\">{{\"FORM.health\" | translate}}</a>\r\n                    <div class=\"lpp-icon\">\r\n                        <img *ngIf=\"fnaHealths.length > 0\" class=\"health\" src=\"./assets/images/success/health-01.svg\"\r\n                            alt=\"healths\" />\r\n                        <img *ngIf=\"fnaHealths.length == 0\" class=\"health\" src=\"./assets/images/default/health-01.svg\"\r\n                            alt=\"healths\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"asset-right-inner col-4\" (click)=\"fnaSwitchEvent('Asset')\">\r\n                    <div [ngClass]=\"fnaAssets.length? 'bg-protection' : 'inactive-freedon-left' \"></div>\r\n                    <div class=\"lpp-icon\">\r\n                        <img *ngIf=\"fnaAssets.length > 0\" class=\"assets\" src=\"./assets/images/success/assets-01.svg\"\r\n                            alt=\"assets\" />\r\n                        <img *ngIf=\"fnaAssets.length == 0\" class=\"assets\" src=\"./assets/images/default/assets-01.svg\"\r\n                            alt=\"assets\" />\r\n                    </div>\r\n                    <a [ngStyle]=\"{'color':fnaAssets.length? '#ffffff' : '#275f96' }\">{{\"FORM.assets\" | translate}}</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div [ngStyle]=\"{'background':fnaIncome && fnaHealths.length && fnaAssets.length? '#16384d' : '#aaaaaa' }\"\r\n                class=\"investment-1 button-protection\"><label>{{\"FORM.protection\" | translate}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"left-border\"></div>\r\n        <div class=\"right-border\"></div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"next-btn\">\r\n    <div class=\"fna-segment\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-elevate  mt-3 \"\r\n            (click)=\"backToDetail()\"><label>{{\"FORM.btn_back\" | translate}}</label></button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-elevate  mt-3 \"\r\n            (click)=\"fnaSwitchEvent('product')\"><label>{{\"FORM.btn_save_and_next\" | translate}}</label></button>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 56786:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/fna-detail/chart-analysis/product-analysis/product-analysis.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"product-grid\">\r\n    <h3 class=\"card-label left-border-image\" style=\"margin: 24px 0;\">Recommended</h3>\r\n    <div class=\"products col-12\" *ngFor=\"let fnaProduct of fnaProducts;\">\r\n        <div class=\"col-2\" style=\"float: left;\r\n        padding: 0;\r\n        width: 60px;\r\n        height: 60px;\r\n        position: relative;\r\n        top: -10px;\">\r\n            <img *ngIf=\"fnaProduct.productImage\" [src]=\"fnaProduct.productImage\" style=\"width: 100%; height: 100%;\"\r\n                title=\"\" alt=\"\" />\r\n        </div>\r\n        <label class=\"col-6\">{{ fnaProduct.name }}</label>\r\n        <button class=\"col-4\" type=\"button\" (click)=\"display(fnaProduct)\" class=\"btn btn-primary btn-elevate\"><label>Get\r\n                Quote</label></button>\r\n    </div>\r\n    <div class=\"btn-group col-12\">\r\n        <button type=\"button\" class=\"btn\"\r\n            [ngStyle]=\"{'background-color': productSwitch === 'product' ? '#005f99' : '#A6A6A6' }\"\r\n            (click)=\"previous('aboutLLP')\"><label>{{\"FORM.btn_previous\" | translate }}</label></button>\r\n        <button type=\"button\" class=\"btn\"\r\n            [ngStyle]=\"{'background-color': productSwitch === 'save' ? '#005f99' : '#A6A6A6' }\"\r\n            (click)=\"saveProduct('save')\"><label>{{\"FORM.btn_save\" | translate }}</label></button>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 69810:
/*!********************************************************************************!*\
  !*** ./src/app/pages/fna-detail/education/education.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\">\r\n        <h3 class=\"card-label left-border-image \">Education Savings</h3>\r\n        <div class=\"row\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-12\" style=\"padding-left: 26px; margin: 0 0 10px 0;\">Information on children's age and\r\n                    university years\r\n                    collected earlier</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <h4 class=\"col-4 sub-title\">Child {{ selectedIndex + 1 }}</h4>\r\n            <a class=\"col-1 delete\" *ngIf=\"selectedIndex > 0\" (click)=\"deleteDeleteById()\">Delete</a>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{\"FORM.child_name\" | translate}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" name=\"actualDateStr\" autocomplete=\"off\"\r\n                        formControlName=\"childName\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{\"FORM.date_of_birth\" | translate}} <span>*</span></label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\r\n                            formControlName=\"dateOfBirth\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                            [matDatepicker]=\"picker\" (dateChange)=\"doValid()\" autocomplete=\"off\"\r\n                            [class.is-invalid]=\"isControlInvalid('dateOfBirth')\"\r\n                            [class.is-valid]=\"isControlValid('dateOfBirth')\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-2\" style=\"padding: 0;\">\r\n                <button type=\"button\" style=\"width: auto;\r\n                float: left;\r\n                margin: 0 !important;\" (click)=\"clearDOB()\" class=\"btn btn-primary btn-elevate mx-2\">{{\"FORM.btn_clear\"\r\n                    | translate}}</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{\"FORM.higher_education\" | translate}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n                <div class=\"form-group\">\r\n                    <mat-radio-group formControlName=\"highEducation\">\r\n                        <mat-radio-button class=\"example-margin\" value=\"bachelor\">Bachelor</mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin\" value=\"master\">Master</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{\"FORM.sum_insured\" | translate}} <span>*</span></label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" (keyup)=\"updateCommaInput($event, 'sumAssured')\"\r\n                        class=\"form-control form-control-sm\" name=\"sumAssured\" autocomplete=\"off\"\r\n                        [class.is-invalid]=\"isControlInvalid('sumAssured')\"\r\n                        [class.is-valid]=\"isControlValid('sumAssured')\" formControlName=\"sumAssured\"\r\n                        (ngModelChange)=\"calculateEducationExpense($event)\" [readonly]=\"!formGroup.value.dateOfBirth\">\r\n                </div>\r\n                <div class=\"error-message\" *ngIf=\"isSumAssured\">Sum Assured must be between 5000000 and 100000000</div>\r\n                <div class=\"error-message\" *ngIf=\"isCustomerAge\">Customer age must be between 18 and 56 years</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{\"FORM.education_expenses\" | translate}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" readonly class=\"form-control form-control-sm\" name=\"educationExpense\"\r\n                        autocomplete=\"off\" formControlName=\"educationExpense\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-about\">\r\n            <button type=\"button\" *ngIf=\"selectedIndex == 0 && educations.length > 0\"\r\n                class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\" (click)=\"viewAll()\">{{\"FORM.view_all\"|translate}}</button>\r\n            <button type=\"button\" *ngIf=\"selectedIndex >= 0\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                (click)=\"backToStartAction()\" style=\"width: auto; margin-bottom: 10px;\">{{\"FORM.back_main_page\"|translate}}</button>\r\n            <button type=\"button\" *ngIf=\"selectedIndex > 0\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                (click)=\"backAction()\" style=\"margin-bottom: 10px;\">{{\"FORM.btn_back\" | translate }}</button>\r\n            <button type=\"button\" (click)=\"saveEducation()\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                style=\"margin-bottom: 10px;\">{{\"FORM.btn_save\" | translate }}</button>\r\n            <button type=\"button\" [disabled]=\"!formGroup.value.id\" *ngIf=\"selectedIndex + 1 >= nextCount\"\r\n                (click)=\"addChild('add')\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                style=\"width: auto; margin-bottom: 10px;\">{{\"FORM.add_child\" | translate}}</button>\r\n            <button type=\"button\" [disabled]=\"!formGroup.value.id\" *ngIf=\"selectedIndex + 1 < nextCount\"\r\n                (click)=\"addChild('next')\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                style=\"margin-bottom: 10px;\">{{\"FORM.btn_next\" | translate }}</button>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ }),

/***/ 47542:
/*!***********************************************************************!*\
  !*** ./src/app/pages/fna-detail/fna-detail.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"box-grid\" style=\"background: #fff; border: 1px solid #d3cbcb; \">\r\n  <div class=\"financial-grid\">\r\n    <div style=\"width: 97%; border-bottom: medium dashed #d9d9d9;\">\r\n      <h3 class=\"card-label left-border-image\">Financial Needs Analysis</h3>\r\n      <div class=\"financial\">\r\n        <div>\r\n          <label style=\"font-weight: bold;\">Opportunity ID :</label>\r\n          <label>{{ leadId }}</label>\r\n        </div>\r\n        <div>\r\n          <label style=\"font-weight: bold;\">FNA ID :</label>\r\n          <label>{{ fnaId }}</label>\r\n        </div>\r\n        <div>\r\n          <label style=\"font-weight: bold;\">Customer :</label>\r\n          <label>{{ passValue.customerName }}</label>\r\n        </div>\r\n        <div>\r\n          <label style=\"font-weight: bold;\">{{ \"FORM.create_by\"  |  translate }} : </label>\r\n          <label>{{ passValue.createdByName }}</label>\r\n        </div>\r\n        <div>\r\n          <label style=\"font-weight: bold;\">{{ \"FORM.create_date\"  |  translate }} : </label>\r\n          <label>{{ passValue.createdAt }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"fna-progress\">\r\n        <div class=\"progress\">\r\n          <span style=\"width:100%; height: 100%;\" [ngClass]=\"bgColor\" [ngStyle]=\"{'height': percentage }\"><span\r\n              class=\"sub-progress\">\r\n              <div class=\"text-rotate\" [ngStyle]=\"{'bottom': totalPercentageText }\">{{ percentage }}</div>\r\n            </span></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div [ngStyle]=\"{'color':fnaTextColor? '#00acea' : '#ff8100' }\"><label style=\"width: 80px; margin: 0 auto; display: block\">FNA Progress\r\n      </label></div>\r\n  </div>\r\n  <div class=\"chart-grid\" [ngSwitch]=\"fnaSwitch\">\r\n    <div *ngIf=\"selected == '' \" class=\"fna-segment\">\r\n      <div>\r\n        <button type=\"button\" class=\"btn\"\r\n          [ngStyle]=\"{'background-color': fnaSwitch === 'aboutLLP' ? '#005f99' : '#A6A6A6' }\"><label>{{\"FORM.about_lpp\" | translate}}</label></button>\r\n        <button type=\"button\" class=\"btn\"\r\n          [ngStyle]=\"{'background-color': fnaSwitch === 'product' ? '#005f99' : '#A6A6A6' }\"><label>{{\"FORM.product_recommendation\" | translate}}</label></button>\r\n      </div>\r\n    </div>\r\n    <app-llp-analysis *ngSwitchDefault [aboutLLP]=\"aboutLLP\" [customerId]=\"customerId\" (change)=\"fnaEvent($event)\">\r\n    </app-llp-analysis>\r\n    <app-product-analysis [fnaId]=\"oldId\" [customerId]=\"customerId\" [passValue]=\"passValue\" [product]=\"product\"\r\n      *ngSwitchCase=\"'product'\" (changeProduct)=\"changeProduct($event)\">\r\n    </app-product-analysis>\r\n    <app-education [fnaId]=\"oldId\" [customerId]=\"customerId\" [education]=\"education\" *ngSwitchCase=\"'Education'\"\r\n      (changeAnalysis)=\"fnaEvent($event)\">\r\n    </app-education>\r\n    <app-health [fnaId]=\"oldId\" [customerId]=\"customerId\" [health]=\"health\" *ngSwitchCase=\"'Health'\"\r\n      (changeAnalysis)=\"fnaEvent($event)\">\r\n    </app-health>\r\n    <app-income [fnaId]=\"oldId\" [customerId]=\"customerId\" [fnaIncome]=\"fnaIncome\" *ngSwitchCase=\"'Income'\"\r\n      (changeAnalysis)=\"fnaEvent($event)\">\r\n    </app-income>\r\n    <app-retirement [fnaId]=\"oldId\" [customerId]=\"customerId\" [retirement]=\"retirement\"\r\n      [customerDob]=\"passValue.customerDob\" *ngSwitchCase=\"'Retirement'\" (changeAnalysis)=\"fnaEvent($event)\">\r\n    </app-retirement>\r\n    <app-asset [fnaId]=\"oldId\" [customerId]=\"customerId\" [fnaAssets]=\"fnaAssets\" *ngSwitchCase=\"'Asset'\"\r\n      (changeAnalysis)=\"fnaEvent($event)\">\r\n    </app-asset>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 57089:
/*!****************************************************************************!*\
  !*** ./src/app/pages/fna-detail/freedom/freedom.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<p>freedom works!</p>\r\n";

/***/ }),

/***/ 29236:
/*!**************************************************************************!*\
  !*** ./src/app/pages/fna-detail/health/health.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n    <h3 class=\"card-label left-border-image\">{{\"FORM.health\" | translate }}</h3>\r\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\">\r\n        <div class=\"set\" *ngIf=\"selectedIndex == 2\">\r\n            <div class=\"col-12\">We need health to work, so whatever it costs we need to\r\n                protect our health</div>\r\n            <h4 class=\"col-12 sub-title\" style=\"padding-left: 13px;\">Current health protection self</h4>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\"> <label class=\"form-label\">{{\"FORM.with_protection\" | translate}}</label> </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <mat-radio-group formControlName=\"protectionSelf\">\r\n                            <mat-radio-button class=\"example-margin\" [value]=true> {{\"FORM.rad_yes\" |translate}}\r\n                            </mat-radio-button>\r\n                            <mat-radio-button class=\"example-margin\" [value]=false> {{\"FORM.rad_no\" |translate}}</mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formGroup.value.protectionSelf\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_insurance\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputSelf($event, 'amountByInsuranceSelf')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountByInsuranceSelf')\"\r\n                                [class.is-valid]=\"isControlValid('amountByInsuranceSelf')\"\r\n                                formControlName=\"amountByInsuranceSelf\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_employer\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputSelf($event, 'amountByEmployerSelf')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountByEmployerSelf')\"\r\n                                [class.is-valid]=\"isControlValid('amountByEmployerSelf')\"\r\n                                formControlName=\"amountByEmployerSelf\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_social_benefit\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputSelf($event, 'amountBySocialBenefitSelf')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountBySocialBenefitSelf')\"\r\n                                [class.is-valid]=\"isControlValid('amountBySocialBenefitSelf')\"\r\n                                formControlName=\"amountBySocialBenefitSelf\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- //////////////////////////////// -->\r\n        <div class=\"set\" *ngIf=\"selectedIndex == 2\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-12 sub-title\">Current health protection Spouse</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{\"FORM.name_of_spouse\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                            formControlName=\"nameSpouse\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{\"FORM.date_of_birth\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-7\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\r\n                                formControlName=\"dateOfBirthSpouse\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                [matDatepicker]=\"picker\" (dateChange)=\"doValid('dateOfBirthSpouse')\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" style=\"z-index: 99999;\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-1\" class=\"btn_clear\">\r\n                    <!-- <button type=\"button\" style=\"width: auto;\r\n                    float: left;\r\n                    margin: 0 !important;\" (click)=\"clearDOB('dateOfBirthSpouse')\"\r\n                        class=\"btn btn-primary btn-elevate mx-2\">{{\"FORM.btn_clear\" | translate}}</button> -->\r\n                        <a (click)=\"clearDOB('dateOfBirthSpouse')\">X</a> \r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{\"FORM.with_protection\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-8\">\r\n                    <div class=\"form-group\">\r\n                        <mat-radio-group formControlName=\"protectionSpouse\">\r\n                            <mat-radio-button class=\"example-margin\" [value]=true>  {{\"FORM.rad_yes\" |translate}}</mat-radio-button>\r\n                            <mat-radio-button class=\"example-margin\" [value]=false>  {{\"FORM.rad_no\" |translate}}</mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formGroup.value.protectionSpouse\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_insurance\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputSpouse($event, 'amountByInsuranceSpouse')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountByInsuranceSpouse')\"\r\n                                [class.is-valid]=\"isControlValid('amountByInsuranceSpouse')\"\r\n                                formControlName=\"amountByInsuranceSpouse\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_employer\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputSpouse($event, 'amountByEmployerSpouse')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountByEmployerSpouse')\"\r\n                                [class.is-valid]=\"isControlValid('amountByEmployerSpouse')\"\r\n                                formControlName=\"amountByEmployerSpouse\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_social_benefit\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputSpouse($event, 'amountBySocialBenefitSpouse')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountBySocialBenefitSpouse')\"\r\n                                [class.is-valid]=\"isControlValid('amountBySocialBenefitSpouse')\"\r\n                                formControlName=\"amountBySocialBenefitSpouse\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <h4 class=\"sub-title\" style=\"padding: 0;\">Current health protection Child {{ selectedIndex - 1\r\n                            }}\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-1\">\r\n                    <div class=\"form-group\">\r\n                        <a *ngIf=\"selectedIndex > 2\" class=\"delete\" (click)=\"deleteHealthById()\">{{\"FORM.btn_delete\" | translate }}</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.name_of_child\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                            formControlName=\"name\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.date_of_birth\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-7\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\r\n                                formControlName=\"dateOfBirth\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                [matDatepicker]=\"picker\" (dateChange)=\"doValid('dateOfBirth')\" autocomplete=\"off\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" style=\"z-index: 99999;\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-1\" class=\"btn_clear\">\r\n                    <!-- <button type=\"button\" style=\"width: auto;\r\n                    float: left;\r\n                    margin: 0 !important;\" (click)=\"clearDOB('dateOfBirth')\"\r\n                        class=\"btn btn-primary btn-elevate mx-2\">{{\"FORM.btn_clear\" | translate}}</button> -->\r\n\r\n                     <a  (click)=\"clearDOB('dateOfBirth')\"> X  </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.with_protection\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <mat-radio-group formControlName=\"protection\">\r\n                            <mat-radio-button class=\"example-margin\" [value]=true> {{\"FORM.rad_yes\" |translate}}</mat-radio-button>\r\n                            <mat-radio-button class=\"example-margin\" [value]=false> {{\"FORM.rad_no\" |translate}}</mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"formGroup.value.protection\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_insurance\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputChild($event, 'amountByInsurance')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountByInsurance')\"\r\n                                [class.is-valid]=\"isControlValid('amountByInsurance')\"\r\n                                formControlName=\"amountByInsurance\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_employer\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputChild($event, 'amountByEmployer')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountByEmployer')\"\r\n                                [class.is-valid]=\"isControlValid('amountByEmployer')\"\r\n                                formControlName=\"amountByEmployer\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\"FORM.amount_protected_by_social_benefit\" | translate }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" (keyup)=\"updateCommaInputChild($event, 'amountBySocialBenefit')\"\r\n                                class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('amountBySocialBenefit')\"\r\n                                [class.is-valid]=\"isControlValid('amountBySocialBenefit')\"\r\n                                formControlName=\"amountBySocialBenefit\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-about col-12\">\r\n            <button type=\"button\" *ngIf=\"selectedIndex == 2 && tempChildList.length > 0\"\r\n                class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\" (click)=\"viewAll()\">{{\"FORM.view_all\"|translate}}</button>\r\n            <button type=\"button\" *ngIf=\"selectedIndex >= 2\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                (click)=\"backToStartAction()\" style=\"width: auto; margin-bottom: 10px;\">{{\"FORM.back_main_page\"|translate}}</button>\r\n            <button type=\"button\" *ngIf=\"selectedIndex > 2\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                style=\"margin-bottom: 10px;\" (click)=\"backAction()\">{{\"FORM.btn_back\" | translate }}</button>\r\n            <button type=\"button\" style=\"margin-bottom: 10px;\" (click)=\"saveAndNextHealth()\"\r\n                class=\"btn btn-primary btn-elevate mx-2\">{{\"FORM.btn_save\" | translate }}</button>\r\n            <button type=\"button\" style=\"width: auto; margin-bottom: 10px;\" (click)=\"addChild('add')\"\r\n                [disabled]=\"!formGroup.value.id\" *ngIf=\"selectedIndex <= 4 && selectedIndex - 1 >= nextCount\"\r\n                class=\"btn btn-primary btn-elevate mx-2\">{{\"FORM.add_child\" | translate }}</button>\r\n            <button type=\"button\" style=\"width: auto; margin-bottom: 10px;\" (click)=\"addChild('next')\"\r\n                *ngIf=\"selectedIndex <= 4 && selectedIndex - 1 < nextCount\"\r\n                class=\"btn btn-primary btn-elevate mx-2\">{{\"FORM.btn_next\" | translate }}</button>\r\n\r\n        </div>\r\n    </form>\r\n\r\n    <!-- selectedIndex - 1 -->\r\n    <!-- <pre>{{formGroup.value | json}}</pre> -->\r\n\r\n\r\n</div>";

/***/ }),

/***/ 28997:
/*!**************************************************************************!*\
  !*** ./src/app/pages/fna-detail/income/income.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n    <h3 class=\"card-label left-border-image\">{{\"FORM.income\" | translate }}</h3>\r\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\" (ngSubmit)=\"saveFNAIncome()\">\r\n        <div class=\"about\">\r\n            <div style=\"padding-left: 13px;\">We all work for our income - can you provide some details</div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{\"FORM.source_of_income\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <select formControlName=\"sourceOfIncome\" class=\"form-control form-control-sm\"\r\n                            name=\"builder[layout][subheader][layoutVersion]\">\r\n                            <option value=\"employee\">Employee</option>\r\n                            <option value=\"professional\">Professional</option>\r\n                            <option value=\"nrm\">NRM</option>\r\n                            <option value=\"smallbusiness\">Small business</option>\r\n                            <option value=\"largebusiness\">Large business</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.family_monthly_spending\" | translate}} \r\n                            <span>*</span> </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" (keyup)=\"updateCommaInput($event)\"\r\n                            class=\"form-control form-control-sm form-control-md\" name=\"familyMonthlySpendingText\"\r\n                            autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('familyMonthlySpendingText')\"\r\n                            [class.is-valid]=\"isControlValid('familyMonthlySpendingText')\"\r\n                            formControlName=\"familyMonthlySpendingText\"\r\n                            (ngModelChange)=\"calculateMonthlyIncome($event)\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{\"FORM.estimated_monthly_income\" | translate}} </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm form-control-md\" readonly\r\n                            name=\"estimatedMonthlyIncomeText\" autocomplete=\"off\"\r\n                            formControlName=\"estimatedMonthlyIncomeText\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn-about col-12\">\r\n            <button type=\"button\" *ngIf=\"fnaService.fnaIncome\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                style=\"width: auto; margin-bottom: 10px;\" (click)=\"viewAll()\">{{\"FORM.view_all\" | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"backAction()\"\r\n                style=\"width: auto; margin-bottom: 10px; \">{{\"FORM.back_main_page\" | translate }}</button>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                style=\" margin-bottom: 10px;\">{{\"FORM.btn_save\" | translate }}</button>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ }),

/***/ 21423:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/fna-detail/retirement/retirement.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n    <h3 class=\"card-label left-border-image\">Retirement Savings</h3>\r\n    <form action=\"#\" class=\"form\" [formGroup]=\"formGroup\" (ngSubmit)=\"saveRetirement()\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\" style=\"padding-left: 26px; margin: 5px 0;\">Information on children's age and university\r\n                years collected earlier</div>\r\n        </div>\r\n        <div class=\"set\">\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\"> <label class=\"form-label\">{{\"FORM.date_of_birth\" | translate }}</label> </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group \">\r\n                            <input type=\"text\" readonly class=\"form-control form-control-sm form-control-md\"\r\n                                autocomplete=\"off\" formControlName=\"dateOfBirth\" />\r\n                            <!-- <input type=\"text\" ngbDatepicker #ad=\"ngbDatepicker\" readonly=\"true\"\r\n                                class=\"form-control form-control-sm\" name=\"actualDateStr\" autocomplete=\"off\"\r\n                                formControlName=\"dateOfBirth\" />\r\n                            <div class=\"input-group-append\" (click)=\"ad.toggle()\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"text-dark-50 flaticon-calendar\"></i>\r\n                                </span>\r\n                            </div> -->\r\n\r\n\r\n                            <!-- <input type=\"text\" readonly class=\"form-control form-control-sm date-input\"\r\n                                formControlName=\"dateOfBirth\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\"\r\n                                [matDatepicker]=\"picker12\" (dateChange)=\"doValid('dateOfBirth')\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker12\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.retirement_age\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"col-7\" style=\"padding: 0; float: left;\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"number\" class=\"form-control form-control-sm form-control-md\" autocomplete=\"off\"\r\n                                [class.is-invalid]=\"isControlInvalid('retirementAge')\"\r\n                                [class.is-valid]=\"isControlValid('retirementAge')\" formControlName=\"retirementAge\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5\" style=\"float: right; padding: 0;\">\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-elevate\" style=\"float: left; width: auto; margin-left: 10px;\"\r\n                                [disabled]=\"!currentIncome\" (click)=\"calculate()\">Calculate</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.pre_retirement_income\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" readonly=\"true\" class=\"form-control form-control-sm\"\r\n                            name=\"retirementIncomeText\" autocomplete=\"off\" formControlName=\"retirementIncomeText\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.retirement_savings_required\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" readonly=\"true\" class=\"form-control form-control-sm\"\r\n                            name=\"retirementSavingText\" autocomplete=\"off\" formControlName=\"retirementSavingText\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\"FORM.retirement_savings_incl_spouse\" | translate}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <input type=\"text\" readonly=\"true\" class=\"form-control form-control-sm\"\r\n                        name=\"retirementSavingSpouseText\" autocomplete=\"off\"\r\n                        formControlName=\"retirementSavingSpouseText\" />\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"btn-about col-12\">\r\n            <button type=\"button\" *ngIf=\"fnaService.fnaRetirementSaving\" class=\"btn btn-primary btn-elevate mx-2\"\r\n                (click)=\"viewAll()\" style=\"width: auto; margin-bottom: 10px;\">{{\"FORM.view_all\" | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"backAction()\"\r\n                style=\"width: auto;margin-bottom: 10px; \">{{\"FORM.back_main_page\" | translate }}</button>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-elevate mx-2\" style=\"margin-bottom: 10px;\"\r\n                [disabled]=\"!isCalculate\">{{\"FORM.btn_save\" | translate }}</button>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fna-detail_fna-detail_modules_ts.js.map