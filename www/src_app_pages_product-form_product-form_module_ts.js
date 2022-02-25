"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product-form_product-form_module_ts"],{

/***/ 18385:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 77316:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 22763:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 69105);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 89232:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 77316);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 22763);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 69105:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 18385);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 47276:
/*!**************************************************************!*\
  !*** ./src/app/pages/product-form/product-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFormComponent": () => (/* binding */ ProductFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-form.component.html */ 77344);
/* harmony import */ var _product_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-form.component.scss */ 37846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! uuid */ 89232);
/* harmony import */ var _form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-component/dynamic-form.component */ 8246);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/services/products-data.service */ 35618);
/* harmony import */ var _form_component_form_view_modal_form_view_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-component/form-view-modal/form-view-modal.component */ 75991);
/* harmony import */ var _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products/models/product.dto */ 1402);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/is-json */ 47975);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/auth */ 67198);
/* harmony import */ var _page_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-data.service */ 9628);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../products/services/coverage-quo.service */ 45570);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _check_parent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../check-parent */ 87952);
/* harmony import */ var _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_metronic/core/services/attachment-data.service */ 63002);
/* harmony import */ var _static_pages_static_field_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static-pages/static-field.interface */ 11766);
/* harmony import */ var _static_pages_static_pages_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../static-pages/static-pages.directive */ 79588);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../modules/master-data/master-data.service */ 26697);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 72407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/global-fun.service */ 73762);






// import { uuid } from 'uuid';




















let ProductFormComponent = class ProductFormComponent {
    constructor(router, location, cdRef, modalService, prodService, globalFun, auth, pageDataService, addonQuo, coverageQuo, alert, downloadService, masterServer, numberPipe, datePipe) {
        this.router = router;
        this.location = location;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.prodService = prodService;
        this.globalFun = globalFun;
        this.auth = auth;
        this.pageDataService = pageDataService;
        this.addonQuo = addonQuo;
        this.coverageQuo = coverageQuo;
        this.alert = alert;
        this.downloadService = downloadService;
        this.masterServer = masterServer;
        this.numberPipe = numberPipe;
        this.datePipe = datePipe;
        this.formData = [];
        this.pageOrder = [];
        this.tempData = {};
        this.activePage = 0;
        this.premiumAmt = '0';
        this.unsubscribe = [];
        this.coverage = {
            isSum: false,
            isUnit: false,
            isPremium: false,
        };
        this.addon = {
            isSum: false,
            isUnit: false,
            isPremium: false,
        };
        this.coverageData = {};
        this.addOnData = {};
        this.viewType = 'view';
        this.resourceId = null;
        this.type = "";
        this.referenceID = "";
        this.referenceStatus = "";
        this.tableReform = [];
        this.detailInput = {};
        this.creatingCustomer = {};
        this.creatingLeadId = 0;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            if ((this.prodService.type == 'policy' && this.prodService.createingProdRef)) {
                this.prodService.createingProd = this.prodService.createingProdRef;
                this.prodService.createingProdRef = null;
            }
            if (!this.prodService.createingProd) {
                this.location.back();
            }
            else {
                this.item = this.prodService.createingProd;
                this.viewType = this.prodService.viewType;
                this.referenceID = this.prodService.referenceID;
                this.referenceStatus = this.prodService.referenceStatus;
                this.creatingLeadId = this.prodService.creatingLeadId;
                this.type = this.prodService.type;
                this.editData = this.prodService.editData || {};
                this.creatingCustomer = this.prodService.creatingCustomer;
                this.premiumAmt = this.editData.premiumView || this.editData.premium || "0";
                let unsub = this.globalFun.paPremiumResult.subscribe((res) => {
                    this.premiumAmt = res || "0";
                    this.cdRef.detectChanges();
                });
                this.unsubscribe.push(unsub);
                this.initProductConfig();
            }
        });
    }
    ngOnDestroy() {
        this.prodService.creatingLeadId = 0;
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
        // this.prodService.editData = null
    }
    changePage(i) {
        if (this.activePage > i) {
            this.activePage = i;
            if (this.formData[this.activePage].type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.STATIC) {
                this.cdRef.detectChanges();
                this.staticPage.reCreate();
            }
            if (this.dynForm && this.formData[this.activePage].controls) {
                this.dynForm.newFormCreate(this.formData[this.activePage].controls, this.tempData[this.formData[this.activePage].tableName + this.formData[this.activePage].id]);
            }
        }
    }
    findPageValue(array, value) {
        let data;
        let isRef = this.referenceID ? true : false;
        for (let index = 0; index < array.length; index++) {
            if (!array[index])
                continue;
            data = array[index].fromGroup.find(x => x.id == value);
            if (data) {
                data.controls.map(x => {
                    if (this.detailInput[value] && x.input != "underline" && x.input != "label") {
                        x.show = this.detailInput[value][x.name] >= 0 ? (this.detailInput[value][x.name] > 0 ? true : false) : x.show;
                        if (this.detailInput[value][x.name] >= 2) {
                            x.disabled = this.detailInput[value][x.name] > 2 ? isRef : true;
                        }
                    }
                    else if (this.detailInput[value] && x.input == "label") {
                        x.show = this.detailInput[value][x.placeholder] >= 0 ? (this.detailInput[value][x.placeholder] > 0 ? true : false) : x.show;
                    }
                    return x;
                });
                break;
            }
        }
        return data;
    }
    initProductConfig() {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_6__.IsJsonString)(this.item.config)) {
            let pageUI = JSON.parse(this.item.config);
            if (!pageUI) {
                this.alert.activate("please setup page group in product configuration.", "Creation Error");
                this.location.back();
                return false;
            }
            let tempFormData = [];
            if (this.prodService.type == 'quotation') {
                if (!this.item.quotation) {
                    this.alert.activate("please setup page group in product configuration.", "Creation Error");
                    this.location.back();
                    return false;
                }
                this.pageOrder = pageUI.quotation || [];
                this.detailInput = pageUI.quotation_input || {};
                this.viewUI = pageUI.quotation_view || 'ui1';
            }
            else {
                if (!this.item.application) {
                    this.alert.activate("please setup page group in product configuration.", "Creation Error");
                    this.location.back();
                    return false;
                }
                this.pageOrder = pageUI.application || [];
                this.detailInput = pageUI.application_input || {};
                this.viewUI = pageUI.application_view || 'ui1';
            }
            if (this.pageOrder.length == 0) {
                this.alert.activate("Please Create UI Configuration", "Creation Error");
                this.location.back();
                return false;
            }
            let dumType = this.prodService.type == 'policy' ? 'application' : this.prodService.type;
            tempFormData = this.item.productUIs.map(x => {
                if (x.type == dumType)
                    return JSON.parse(x.dynamicProduct.config);
            });
            let counter = 0;
            this.pageOrder.forEach((page, index) => {
                counter += 1;
                if (page.id == 'addon' && this.item.addOns.length < 1) {
                    this.pageOrder.splice(index, 1);
                }
                else if (page.id == 'coverage' && this.item.coverages.length < 1) {
                    this.pageOrder.splice(index, 1);
                }
                if ((page.type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.STATIC)) {
                    this.formData.push({
                        pageTitle: "",
                        id: (0,uuid__WEBPACK_IMPORTED_MODULE_19__["default"])(),
                        pageIcon: "",
                        pageType: "form",
                        tableName: "",
                        controls: [],
                        buttons: [],
                        type: page.type
                    });
                }
                else {
                    let pageData = this.findPageValue(tempFormData, page.id);
                    pageData.type = page.type;
                    if (pageData) {
                        this.pageOrder[index].pageTitle = pageData.pageTitle;
                        this.pageOrder[index].pageType = pageData.pageType;
                        this.pageOrder[index].pageIcon = pageData.pageIcon;
                        this.pageOrder[index].tableName = pageData.tableName;
                        if (!this.prodService.editData && !this.referenceID && pageData.unitCode == "policyholder_1641795142279") {
                            this.mapPartyCustomer(pageData);
                        }
                        if (pageData.unitCode == "policyholder_1641795142279") {
                            pageData.controls = pageData.controls.map(cont => {
                                cont.disabled = true;
                                return cont;
                            });
                        }
                        this.formData.push(pageData);
                    }
                }
                if (counter == this.pageOrder.length) {
                    this.callback(tempFormData);
                }
            });
        }
    }
    callback(tempFormData) {
        if (this.prodService.editData) {
            this.resourceId = this.prodService.editData.id;
            this.getOldData(this.prodService.editData, tempFormData);
        }
        else if (this.referenceID) {
            this.getOldData({ id: this.referenceID }, tempFormData, true);
        }
        if (this.formData[this.activePage].pageType == 'table') {
            this.reFormatTable(this.formData[this.activePage].controls);
        }
    }
    staticEvent(event) {
        if (event.type == _static_pages_static_field_interface__WEBPACK_IMPORTED_MODULE_14__.StaticActionType.NEXT) {
            if (event.data) {
                if (event.data.resourceId)
                    this.resourceId = event.data.resourceId;
            }
            this.nextPage(this.activePage);
        }
        else if (event.type == _static_pages_static_field_interface__WEBPACK_IMPORTED_MODULE_14__.StaticActionType.PREV) {
            this.backPage(this.activePage);
        }
    }
    clickBtn(event) {
        this[event]();
    }
    saveTemp(data) {
        let activeForm = this.formData[this.activePage];
        if (this.viewType != 'view') {
            if (activeForm.pageType == "form" && this.tempData[activeForm.tableName + activeForm.id]) {
                if (this.tempData[activeForm.tableName + activeForm.id].refId)
                    this.updateDataAPI(activeForm, data, this.tempData[activeForm.tableName + activeForm.id].refId);
                else
                    this.saveDataAPI(activeForm, data);
            }
            else
                this.saveDataAPI(activeForm, data);
        }
        else {
            if (activeForm.pageType == 'table') {
                if (this.tempData[activeForm.tableName + activeForm.id]) {
                    this.tempData[activeForm.tableName + activeForm.id].push(data);
                }
                else {
                    this.tempData[activeForm.tableName + activeForm.id] = [data];
                }
                this.cdRef.detectChanges();
            }
            else {
                this.tempData[activeForm.tableName + activeForm.id] = data;
                this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls, this.tempData[this.formData[this.activePage + 1].tableName + this.formData[this.activePage + 1].id]);
                this.activePage += 1;
                if (this.formData[this.activePage].pageType == 'table') {
                    this.reFormatTable(this.formData[this.activePage].controls);
                }
                this.cdRef.detectChanges();
            }
            this.globalFun.tempFormData = this.tempData;
        }
    }
    download(cols, data) {
        let value = this.getOtherData(cols, data);
        if (value) {
            let valueId = value.split("].")[0].replace("[", "");
            this.downloadService.getDownload(valueId, value);
        }
    }
    reFormatTable(controls) {
        this.tableReform = [];
        let parentArray = [];
        let tempControls = JSON.parse(JSON.stringify(controls));
        for (let x of tempControls) {
            let skip = false;
            x.options = x.options ? x.options : [];
            if (!x.isHideView) {
                if (x.tableTitle) {
                    let index = parentArray.findIndex(data => data == x.tableTitle);
                    if (index < 0) {
                        parentArray.push(x.tableTitle);
                    }
                    else {
                        skip = true;
                    }
                    // parentArray.push()
                }
                if (!skip) {
                    let tempName = x.master == 'true' ? x.name + "Value" : x.name;
                    let otherNameObj = {
                        name: tempName,
                        type: x.input,
                        subType: x.type,
                        options: (x.master == "false" || x.master == false) && x.options.length > 0 ? x.options : []
                    };
                    let tempObj = {
                        title: x.tableTitle || x.label || x.name,
                        cols: [otherNameObj],
                        type: x.input,
                        subType: x.type,
                        parent: x.dependency ? x.dependency.parentName : "",
                        options: (x.master == "false" || x.master == false) && x.options.length > 0 ? x.options : []
                    };
                    this.tableReform.push(tempObj);
                }
                else {
                    let index = this.tableReform.findIndex(data => data.parent == x.dependency.parentName);
                    if (index >= 0) {
                        let tempName = x.master == 'true' ? x.name + "Value" : x.name;
                        let otherNameObj = {
                            name: tempName,
                            type: x.input,
                            subType: x.type,
                            options: (x.master == "false" || x.master == false) && x.options.length > 0 ? x.options : []
                        };
                        this.tableReform[index].cols.push(otherNameObj);
                    }
                }
                // return x
            }
        }
        this.cdRef.detectChanges();
    }
    getOtherData(cols, data) {
        for (let col of cols) {
            if (data[col.name]) {
                if ((data[col.name] + "").length > 0) {
                    let value = "";
                    if (col.type == "input" && col.subType == "number") {
                        return this.numberPipe.transform(data[col.name]);
                    }
                    if (col.type == "date") {
                        return this.datePipe.transform(data[col.name], "dd/MM/yyyy");
                    }
                    if (col.options.length > 0) {
                        let valueData = col.options.find(x => x.value == data[col.name]);
                        if (valueData) {
                            return valueData.text;
                        }
                    }
                    return data[col.name];
                }
            }
        }
    }
    updateDataAPI(page, formData, refId, isTable = -1) {
        this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0";
        let postData = {
            productId: this.prodService.createingProd.id,
            type: this.viewType,
            tableName: page.tableName,
            resourceId: this.resourceId,
            refId: refId,
            customerId: this.creatingCustomer.customerId,
            quotationId: this.referenceID,
            agentId: this.auth.currentUserValue.id || 1,
            premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            premiumView: this.premiumAmt,
            policyNumber: null,
            pageId: page.id,
            leadId: this.creatingLeadId || null,
            party: page.party || false,
            data: []
        };
        for (const [key, value] of Object.entries(formData)) {
            let input = page.controls.find(x => x.name == key);
            let valueData = value;
            if (input) {
                valueData = input.input == "input" && input.type == 'number' ? Number(value) : value;
                if (Array.isArray(valueData)) {
                    valueData = valueData.join("#-#");
                    if (!valueData.includes("#-#")) {
                        valueData += "#+#";
                    }
                }
            }
            // if (input) {
            //   postData.data.push({
            //     "column": key,
            //     "value": input.input == "input" && input.type == 'number' ? Number(value) : value
            //   })
            // } else {
            postData.data.push({
                "column": key,
                "value": valueData,
                "party": input ? input.party || false : false
            });
            // }
        }
        this.pageDataService.updateNoID(postData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)((data) => {
            if (page.pageType == 'table') {
                return this.checkMasterValue(formData, page.controls, data);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(data);
        })).toPromise().then((res) => {
            if (res) {
                // this.resourceId = res.resourceId
                this.updateDataStatus();
                if (isTable < 0) {
                    this.tempData[page.tableName + page.id] = Object.assign(Object.assign({}, formData), { refId: res.refId });
                    if (page.unitCode == "policyholder_1641795142279")
                        this.tempData['policyholder_1641795142279'] = Object.assign(Object.assign({}, formData), { refId: res.refId });
                    if (this.pageOrder.length > this.activePage + 1) {
                        this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls, this.tempData[this.formData[this.activePage + 1].tableName + this.formData[this.activePage + 1].id]);
                        this.activePage += 1;
                        this.cdRef.detectChanges();
                        this.globalFun.tempFormData = this.tempData;
                        if (this.formData[this.activePage].pageType == 'table') {
                            this.reFormatTable(this.formData[this.activePage].controls);
                        }
                    }
                    else {
                        this.globalFun.tempFormData = this.tempData;
                        this.goReusltPage();
                    }
                }
                else {
                    formData = res.formData;
                    this.tempData[page.tableName + page.id][isTable] = Object.assign(Object.assign({}, formData), { refId: res.refId });
                    this.cdRef.detectChanges();
                }
            }
        });
    }
    goReusltPage() {
        this.prodService.previewType = this.type;
        this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0";
        this.prodService.editData = { id: this.resourceId, premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "", premiumView: this.premiumAmt, agentFirstName: this.auth.currentUserValue.firstName, agentLastName: this.auth.currentUserValue.lastName };
        this.router.navigateByUrl("/resourse-detail");
    }
    saveDataAPI(page, formData) {
        this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0";
        let postData = {
            productId: this.prodService.createingProd.id,
            type: this.viewType,
            tableName: page.tableName,
            resourceId: this.resourceId,
            agentId: this.auth.currentUserValue.id || 1,
            quotationId: this.referenceID,
            pageId: page.id,
            customerId: this.creatingCustomer.customerId,
            leadId: this.creatingLeadId || null,
            premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            premiumView: this.premiumAmt,
            policyNumber: null,
            party: page.party || false,
            pageData: [
                {
                    data: []
                }
            ]
        };
        for (const [key, value] of Object.entries(formData)) {
            let input = page.controls.find(x => x.name == key);
            let valueData = value;
            if (input) {
                valueData = input.input == "input" && input.type == 'number' ? Number(value) : value;
                if (Array.isArray(valueData)) {
                    valueData = valueData.join("#-#");
                    if (!valueData.includes("#-#")) {
                        valueData += "#+#";
                    }
                }
            }
            postData.pageData[0].data.push({
                "column": key,
                "value": valueData,
                "party": input ? input.party || false : false
            });
        }
        this.pageDataService.save(postData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)((data) => {
            if (page.pageType == 'table') {
                return this.checkMasterValue(formData, page.controls, data);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(data);
        })).toPromise().then((res) => {
            if (res) {
                this.updateDataStatus();
                if (!this.resourceId)
                    this.resourceId = res[0].resourceId;
                if (page.pageType == 'table') {
                    formData = res[0].formData;
                    if (this.tempData[page.tableName + page.id]) {
                        this.tempData[page.tableName + page.id].push(Object.assign(Object.assign({}, formData), { refId: res[0].refId, pageId: page.id }));
                    }
                    else {
                        this.tempData[page.tableName + page.id] = [Object.assign(Object.assign({}, formData), { refId: res[0].refId })];
                    }
                    this.cdRef.detectChanges();
                }
                else {
                    this.tempData[page.tableName + page.id] = Object.assign(Object.assign({}, formData), { refId: res[0].refId, pageId: page.id });
                    if (page.unitCode == "policyholder_1641795142279")
                        this.tempData['policyholder_1641795142279'] = Object.assign(Object.assign({}, formData), { refId: res[0].refId, pageId: page.id });
                    if (this.pageOrder.length > this.activePage + 1) {
                        if (this.formData[this.activePage + 1].controls) {
                            this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls, this.tempData[this.formData[this.activePage + 1].tableName + this.formData[this.activePage + 1].id]);
                        }
                        this.activePage += 1;
                        this.cdRef.detectChanges();
                        this.globalFun.tempFormData = this.tempData;
                        if (this.formData[this.activePage].pageType == 'table') {
                            this.reFormatTable(this.formData[this.activePage].controls);
                        }
                    }
                    else {
                        this.globalFun.tempFormData = this.tempData;
                        this.goReusltPage();
                    }
                }
            }
        });
    }
    newData(editData, index) {
        const activeForm = this.formData[this.activePage];
        const modalRef = this.modalService.open(_form_component_form_view_modal_form_view_modal_component__WEBPACK_IMPORTED_MODULE_4__.FormViewModalComponent, { size: 'xl' });
        modalRef.componentInstance.controls = this.formData[this.activePage].controls;
        modalRef.componentInstance.pageName = this.formData[this.activePage].pageTitle;
        modalRef.componentInstance.oldData = index >= 0 ? editData : {};
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.data && res.type == 'save') {
                    if (index >= 0) {
                        this.updateDataAPI(activeForm, res.data, this.tempData[activeForm.tableName + activeForm.id][index].refId, index);
                    }
                    else {
                        this.saveTemp(res.data);
                    }
                }
            }
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            let activeForm = this.formData[this.activePage];
            if (activeForm.function) {
                let fun = yield this.globalFun[activeForm.function]("", this.dynForm.form.getRawValue(), [], true);
                if (!fun) {
                    return false;
                }
            }
            let submited = this.dynForm.handleSubmit();
            if (!submited)
                return false;
            this.dynForm.reCreateFrom();
        });
    }
    backPage(index) {
        if (this.activePage > 0) {
            this.activePage -= 1;
            this.cdRef.detectChanges();
            if (this.formData[this.activePage].type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.STATIC && this.formData[this.activePage + 1].type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.STATIC) {
                this.staticPage.reCreate();
            }
            else if (this.formData[this.activePage].type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.DYN && this.formData[this.activePage].pageType == 'table') {
                this.reFormatTable(this.formData[this.activePage].controls);
            }
        }
        else {
            this.location.back();
        }
    }
    nextPage(index, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            // if (status == 'addOns' || status == 'coverages') {
            //   const quoService = status == "addOns" ? this.addonQuo : this.coverageQuo
            //   const posDataArray = status == "addOns" ? this.addOnData : this.coverageData
            //   for (let add of this.item[status]) {
            //     try {
            //       let postData = {
            //         addonId: add.id,
            //         coverageId: add.id,
            //         quotationNo: this.resourceId,
            //         sumInsured: (posDataArray[add.id].sum || "").replace(',', '').replace('MMK', '').replace('USD', ''),
            //         unit: (posDataArray[add.id].unit || "").replace(',', '').replace('MMK', '').replace('USD', ''),
            //         premium: (posDataArray[add.id].premium || "").replace(',', '').replace('MMK', '').replace('USD', ''),
            //       }
            //       let res = await quoService.save(postData).toPromise()
            //     } catch (error) {
            //       console.log(error);
            //     }
            //   }
            // }
            if (this.pageOrder.length > index + 1) {
                this.updateDataStatus();
                this.activePage += 1;
                // if(this.pageOrder[this.activePage + 1].id != 'addon' && this.pageOrder[this.activePage + 1].id != 'coverage')
                // this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls)
                this.cdRef.detectChanges();
                if (this.formData[this.activePage].type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.STATIC && this.formData[this.activePage - 1].type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.STATIC) {
                    this.staticPage.reCreate();
                }
                else if (this.formData[this.activePage].type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.DYN && this.formData[this.activePage].pageType == 'table') {
                    this.reFormatTable(this.formData[this.activePage].controls);
                }
            }
            else {
                // this.location.back()
                this.goReusltPage();
            }
        });
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            // if (this.pageOrder.length > this.activePage + 1) {
            let activeForm = this.formData[this.activePage];
            if (activeForm.function) {
                let fun = yield this.globalFun[activeForm.function]("", this.dynForm.form.getRawValue(), [], true);
                if (!fun) {
                    return false;
                }
            }
            let submited = this.dynForm.handleSubmit();
            if (!submited)
                return false;
            // } else {
            //   this.location.back()
            // }
        });
    }
    getGlobalFun(funName, mainObj, mainKey, subKey) {
        if (this.globalFun[funName + "Result"]) {
            let unsub = this.globalFun[funName + "Result"].subscribe((res) => {
                this[mainObj][mainKey][subKey] = res;
                this.cdRef.detectChanges();
            });
            this.unsubscribe.push(unsub);
        }
        else {
            if (funName)
                this[mainObj][mainKey][subKey] = funName;
        }
    }
    previous() {
        if (this.activePage > 0) {
            this.dynForm.newFormCreate(this.formData[this.activePage - 1].controls, this.tempData[this.formData[this.activePage - 1].tableName + this.formData[this.activePage - 1].id]);
            this.activePage -= 1;
            this.cdRef.detectChanges();
        }
        else {
            this.location.back();
        }
    }
    submit() {
        this.next();
    }
    reset() {
        this.dynForm.reCreateFrom();
        this.cdRef.detectChanges();
    }
    deleteData(index, data) {
        let activeForm = this.formData[this.activePage];
        this.pageDataService.deleteData(activeForm.tableName, data.refId, activeForm.id).toPromise().then((res) => {
            if (res) {
                this.tempData[activeForm.tableName + activeForm.id].splice(index, 1);
                this.cdRef.detectChanges();
            }
        });
    }
    getOldData(oldData, tempFormData, isRef) {
        let counter = 0;
        this.pageOrder.forEach((element) => {
            counter += 1;
            if (element.type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.DYN) {
                let page = this.findPageValue(tempFormData, element.id);
                let view = page.pageType == 'table';
                this.pageDataService.getDetail(page.tableName, oldData.id, page.id, view, page.controls, true).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
                    if (res && res.length > 0) {
                        let temp = page.pageType == 'form' ? {} : [];
                        let skipId = isRef;
                        let trgi = false;
                        if (res.length == 0 && this.type == 'policy' && oldData.quotationId) {
                            res = yield this.pageDataService.getDetail(page.tableName, oldData.quotationId, page.id, view, page.controls, true).toPromise();
                            skipId = true;
                        }
                        for (const data of res) {
                            let tmpObj = {};
                            for (const item of data.data) {
                                if (item.column == 'id' && !skipId) {
                                    tmpObj['refId'] = item.value;
                                }
                                if ((item.value + "").includes("#-#")) {
                                    // trgi = true
                                    tmpObj[item.column] = (item.value + "").split("#-#");
                                }
                                else if ((item.value + "").includes("#+#")) {
                                    tmpObj[item.column] = [item.value.replace('#+#', "")];
                                }
                                else {
                                    tmpObj[item.column] = item.value;
                                }
                            }
                            if (Array.isArray(temp)) {
                                temp.push(tmpObj);
                            }
                            else {
                                temp = tmpObj;
                            }
                        }
                        ;
                        if ((page.unitCode == "policyholder_1641795142279")) {
                            temp["customer_id"] = this.creatingCustomer['customerId'];
                            this.tempData["policyholder_1641795142279"] = temp;
                        }
                        this.tempData[page.tableName + page.id] = temp;
                        this.globalFun.tempFormData = this.tempData;
                        if (page.function && page.pageType == 'form') {
                            this.globalFun[page.function]("", this.tempData[page.tableName + page.id]);
                        }
                        if (element.id == this.formData[this.activePage].id) {
                            if (this.formData[this.activePage].pageType == "form" && this.formData[this.activePage].type != _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.STATIC) {
                                this.cdRef.detectChanges();
                                this.dynForm.reCreateFrom();
                                this.cdRef.detectChanges();
                                // if (trgi) {
                                //   this.globalFun.optionResultChange.next(true)
                                // }
                            }
                        }
                    }
                    else {
                        if (page.unitCode == "policyholder_1641795142279")
                            this.mapPartyCustomer(page);
                    }
                })).catch(e => {
                    if (page.unitCode == "policyholder_1641795142279")
                        this.mapPartyCustomer(page);
                });
            }
        });
    }
    mapPartyCustomer(page) {
        let temp = {};
        let config = page.controls.find(x => x.name == "customer_id");
        if (config) {
            for (let afield of config.autoFields) {
                temp[afield.value] = this.creatingCustomer[afield.field];
            }
            this.tempData[page.tableName + page.id] = temp;
            this.tempData[page.tableName + page.id]['customer_id'] = this.creatingCustomer["customerId"];
            this.globalFun.tempFormData = this.tempData;
            this.cdRef.detectChanges();
            if (page.type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.DYN && this.dynForm) {
                this.dynForm.reCreateFrom();
                this.cdRef.detectChanges();
            }
        }
    }
    checkDep(dependency, checkData) {
        return (0,_check_parent__WEBPACK_IMPORTED_MODULE_12__.checkVaidDep)(dependency, { value: checkData });
    }
    checkMasterValue(res, column, otherResponse) {
        // otherResponse =  ? otherResponse[0]['formData'] = res : 
        if (Array.isArray(otherResponse)) {
            otherResponse[0]['formData'] = res;
        }
        else {
            otherResponse['formData'] = res;
        }
        let tempMasterObj = Object.keys(res).filter(x => (res[x] + "").includes("T-"));
        if (tempMasterObj.length > 0) {
            let masterObj = tempMasterObj.map(x => {
                let columnName = column.find(col => col.name == x);
                if (columnName.masterData) {
                    return {
                        "codeId": res[x],
                        "codeType": columnName.masterData,
                        "langCd": "EN"
                    };
                }
            });
            let postData = {
                "codeBookRequest": masterObj
            };
            let returnObj = res;
            return this.masterServer.getMasterValue(postData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)((masterValues) => {
                tempMasterObj.forEach(x => {
                    let colName = column.find(col => col.name == x);
                    let index = masterValues.findIndex(master => master.codeId == returnObj[x] && colName.masterData == master.codeType);
                    if (index >= 0) {
                        returnObj[x + "Value"] = masterValues[index].codeName;
                    }
                });
                if (Array.isArray(otherResponse)) {
                    otherResponse[0]['formData'] = returnObj;
                }
                else {
                    otherResponse['formData'] = returnObj;
                }
                return otherResponse;
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(otherResponse);
    }
    updateDataStatus() {
        if (this.referenceID) {
            if (this.referenceStatus == "in_progress") {
                let postData = {
                    "resourceId": this.referenceID,
                    "type": this.prodService.viewType,
                    "status": "complete"
                };
                this.pageDataService.updatePremimun(postData).toPromise().then((res) => {
                    if (res) {
                        this.referenceStatus = "complete";
                        this.prodService.referenceStatus = "complete";
                    }
                });
            }
        }
    }
};
ProductFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_24__.Location },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModal },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_3__.ProductDataService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_17__.GlobalFunctionService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _page_data_service__WEBPACK_IMPORTED_MODULE_8__.PageDataService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_9__.AddOnQuoService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_10__.CoverageQuoService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_11__.AlertService },
    { type: _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_13__.AttachmentDownloadService },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_16__.MasterDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_24__.DecimalPipe },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe }
];
ProductFormComponent.propDecorators = {
    dynForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild, args: [_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormComponent,] }],
    staticPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild, args: [_static_pages_static_pages_directive__WEBPACK_IMPORTED_MODULE_15__.StaticPageDirective,] }]
};
ProductFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
        selector: 'app-product-form',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductFormComponent);



/***/ }),

/***/ 89146:
/*!***********************************************************!*\
  !*** ./src/app/pages/product-form/product-form.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFormModule": () => (/* binding */ ProductFormModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _product_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-form.component */ 47276);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _static_pages_static_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-pages/static-pages.module */ 47239);










let ProductFormModule = class ProductFormModule {
};
ProductFormModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_product_form_component__WEBPACK_IMPORTED_MODULE_0__.ProductFormComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_2__.FormComponentModule,
            _static_pages_static_pages_module__WEBPACK_IMPORTED_MODULE_3__.StaticPagesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([
                {
                    path: '',
                    component: _product_form_component__WEBPACK_IMPORTED_MODULE_0__.ProductFormComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe]
    })
], ProductFormModule);



/***/ }),

/***/ 77344:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/product-form/product-form.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" *ngIf=\"item\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom gutter-b\">\r\n      <div class=\"card-body\">\r\n        <div style=\"display:flex\">\r\n          <div class=\"top-box\" style=\"margin-left: 0px\">\r\n            PRODUCT <br>\r\n            <span>{{item.name}}</span>\r\n          </div>\r\n          <!-- <div class=\"top-box\">\r\n            Customer <br>\r\n            <span>Jimmy Tao</span>\r\n          </div> -->\r\n          <div class=\"top-box\">\r\n            PREMIUM <br>\r\n            <span>{{premiumAmt}}</span>\r\n          </div>\r\n          <!-- <div class=\"top-box\">\r\n            STATUS <br>\r\n            <span>Valid</span>\r\n          </div> -->\r\n          <!-- <div class=\"top-box\">\r\n            Channel <br>\r\n            <span>Gary Guo</span>\r\n          </div> -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-custom gutter-b\">\r\n      <!-- <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n          <h3 class=\"card-label\">{{item.name}}</h3>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"card-body customer-card-body\" *ngIf=\"formData.length > 0\">\r\n        <ng-container *ngIf=\"viewUI == 'ui3' \">\r\n          <div class=\"wizard wizard-3\">\r\n            <div class=\"kt-grid__item\">\r\n              <!--begin: Form Wizard Nav -->\r\n              <div class=\"wizard-nav border-bottom mb-1 mb-lg-5\">\r\n                <div class=\"wizard-steps pt-8\">\r\n                  <ng-container *ngFor=\"let page of pageOrder;let i = index\">\r\n                    <!-- <a class=\"wizard-step\" href=\"javascript:;\"\r\n                      *ngIf=\"(page.id == 'coverage' && this.item.coverages.length > 0) || page.id == 'addon' && this.item.addOns.length > 0\"\r\n                      (click)=\"changePage(i)\">\r\n                      <div class=\"wizard-label\" [ngClass]=\"{'active': i == activePage, 'done' : i < activePage }\">\r\n                        <div class=\"wizard-title\"><span>{{i+1}}</span> {{page.pageTitle}}</div>\r\n                        <div class=\"wizard-bar\"></div>\r\n                      </div>\r\n                    </a> *ngIf=\"page.id != 'coverage' && page.id != 'addon' \"-->\r\n                    <a class=\"wizard-step\" href=\"javascript:;\" (click)=\"changePage(i)\">\r\n                      <div class=\"wizard-label\" [ngClass]=\"{'active': i == activePage, 'done' : i < activePage }\">\r\n                        <div class=\"wizard-title\"><span>{{i+1}}</span> {{page.pageTitle}}</div>\r\n                        <div class=\"wizard-bar\"></div>\r\n                      </div>\r\n                    </a>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n              <!--end: Form Wizard Nav -->\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"viewUI == 'ui1' \">\r\n          <div class=\"wizard wizard-1\" id=\"kt_wizard_v1\">\r\n            <!--begin: Form Wizard Nav -->\r\n            <div class=\"wizard-nav border-bottom\">\r\n              <div class=\"wizard-steps pt-8\">\r\n                <ng-container *ngFor=\"let page of pageOrder;let i = index\">\r\n                  <a class=\"wizard-step\" href=\"javascript:;\" (click)=\"changePage(i)\">\r\n                    <div class=\"wizard-label\" [ngClass]=\"{'active': i == activePage, 'done' : i < activePage }\">\r\n                      <i class=\"wizard-icon fa {{page.pageIcon}}\"></i>\r\n                      <h3 class=\"wizard-title\">{{i+1}}) {{page.pageTitle}}</h3>\r\n                    </div>\r\n                  </a>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"viewUI == 'ui2'\">\r\n          <div class=\"wizard wizard-2\" id=\"kt_wizard_v2\">\r\n            <div class=\"wizard-nav border-right pt-8\">\r\n              <!--begin: Form Wizard Nav -->\r\n              <div class=\"wizard-steps\">\r\n                <ng-container *ngFor=\"let page of pageOrder;let i = index\">\r\n                  <a class=\"wizard-step\" href=\"javascript:;\" (click)=\"changePage(i)\">\r\n                    <div class=\"wizard-wrapper\" [ngClass]=\"{'active': i == activePage, 'done' : i < activePage }\">\r\n                      <div class=\"wizard-icon\">\r\n                        <span class=\"fa {{page.pageIcon}}\"></span>\r\n                      </div>\r\n                      <div class=\"wizard-label\">\r\n                        <div class=\"wizard-title\"> {{page.pageTitle}}</div>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </ng-container>\r\n              </div>\r\n              <!--end: Form Wizard Nav -->\r\n            </div>\r\n            <div class=\"wizard-body py-8 px-8 py-lg-20 px-lg-10\">\r\n              <!-- <hr> -->\r\n              <ng-container *ngIf=\"pageOrder[activePage].type == 'dyn' \">\r\n                <ng-container *ngIf=\"formData[activePage].pageType != 'table' \">\r\n                  <dynamic-form #dynForm [config]=\"formData[activePage].controls\" (submit)=\"saveTemp($event)\"\r\n                    [editStage]=\"false\"\r\n                    [tempData]=\"tempData[formData[activePage].tableName+formData[activePage].id] || {}\"></dynamic-form>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"formData[activePage].pageType == 'table' \">\r\n                  <div class=\"form-group\">\r\n                    <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"reset()\">Reset Data</button> -->\r\n                    <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"newData()\">Add New Data</button>\r\n                  </div>\r\n                  <hr>\r\n                  <div class=\"table-responsive angular-bootstrap-table\">\r\n                    <table class=\"table table-head-custom table-vertical-center\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>NO</th>\r\n                          <ng-container *ngFor=\"let item of tableReform\">\r\n                            <th>{{item.title}}</th>\r\n                          </ng-container>\r\n                          <th>Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <ng-container *ngIf=\"tempData[formData[activePage].tableName+formData[activePage].id]\">\r\n                          <tr\r\n                            *ngFor=\"let item of tempData[formData[activePage].tableName+formData[activePage].id];let i = index\">\r\n                            <td>{{i+1}}</td>\r\n                            <ng-container *ngFor=\"let control of formData[activePage].controls\">\r\n\r\n                              <td *ngIf=\"control.input != 'file'\">{{getOtherData(control.cols,item) }}</td>\r\n                              <td *ngIf=\"control.input == 'file'\">\r\n                                <a href=\"javascript:;\" (click)=\"download(control.cols,item)\">\r\n                                  {{getOtherData(control.cols,item) }}\r\n                                </a>\r\n                              </td>\r\n                            </ng-container>\r\n                            <td style=\"white-space: nowrap;\">\r\n                              <a title=\"Edit Data\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm mx-1\"\r\n                                (click)=\"newData(item,i)\">\r\n                                <span [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\" [cacheSVG]=\"true\"\r\n                                  class=\"svg-icon svg-icon-md svg-icon-primary\">\r\n                                </span>\r\n                              </a>\r\n                              <a title=\"Delete Data\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm\"\r\n                                (click)=\"deleteData(i,item)\">\r\n                                <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\r\n                                  class=\"svg-icon svg-icon-md svg-icon-danger\">\r\n                                </span>\r\n                              </a>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"formData[activePage].pageType != 'table'\">\r\n                  <hr>\r\n                  <div class=\"row\">\r\n                    <div app-button-box *ngFor=\"let contact of formData[activePage].buttons; let i = index\"\r\n                      [config]=\"contact\" (eventE)=\"clickBtn($event)\" [index]=\"i\" [editStage]=\"false\"\r\n                      class=\"col-xs-{{contact.size}} col-sm-{{contact.size}} {{contact.position}} mt-2\"></div>\r\n                  </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"formData[activePage].pageType == 'table'\">\r\n                  <hr>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6 mx-auto\">\r\n                      <button class=\"btn btn-block btn-secondary\" (click)=\"backPage(activePage)\"> Previous </button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 mx-auto\">\r\n                      <button class=\"btn btn-block btn-primary\" (click)=\"nextPage(activePage)\"> Save & Next </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"pageOrder[activePage].type == 'static'\">\r\n                <ng-container staticPage [compId]=\"pageOrder[activePage].id\" [product]=\"item\" [editData]=\"editData\"\r\n                  [resourcesId]=\"resourceId\" [premiumAmt]=\"premiumAmt\" (eventOut)=\"staticEvent($event)\">\r\n                </ng-container>\r\n              </ng-container>\r\n              <!-- <ng-container *ngIf=\"pageOrder[activePage].id == 'addon'\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>\r\n                        AddOn\r\n                      </th>\r\n                      <th *ngIf=\"addon.isSum\">\r\n                        Sum Insured\r\n                      </th>\r\n                      <th *ngIf=\"addon.isUnit\">\r\n                        Unit\r\n                      </th>\r\n                      <th *ngIf=\"addon.isPremium\">\r\n                        Premium\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let addOn of item.addOns;let i = index\">\r\n                      <td>{{addOn.description}}</td>\r\n                      <td *ngIf=\"addOn.sumInsured\">\r\n                        <ng-container *ngIf=\"!addOn.sumInsuredStr\">\r\n                          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].sum\">\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"addOn.sumInsuredStr\">\r\n                          {{addOnData[addOn.id].sum}}\r\n                        </ng-container>\r\n                      </td>\r\n                      <td *ngIf=\"addOn.unit\">\r\n                        <ng-container *ngIf=\"!addOn.unitStr\">\r\n                          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].unit\">\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"addOn.unitStr\">\r\n                          {{addOnData[addOn.id].unit}}\r\n                        </ng-container>\r\n                      </td>\r\n                      <td *ngIf=\"addOn.premium\">\r\n                        <ng-container *ngIf=\"!addOn.premiumStr\">\r\n                          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].premium\">\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"addOn.premiumStr\">\r\n                          {{addOnData[addOn.id].premium}}\r\n                        </ng-container>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-3 mx-auto\">\r\n                    <button class=\"btn btn-block btn-default\" (click)=\"backPage(activePage)\"> Back </button>\r\n                  </div>\r\n                  <div class=\"col-sm-3 mx-auto\">\r\n                    <button class=\"btn btn-block btn-success\" (click)=\"nextPage(activePage,'addOns')\"> {{ activePage + 1\r\n                      < pageOrder.length ? \"Next\" : \"Save\" }} {{ activePage + 1 < pageOrder.length ? \"\" : (type |\r\n                        titlecase) }} </button>\r\n                  </div>\r\n                </div>\r\n              </ng-container> -->\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"viewUI != 'ui2'\">\r\n          <div class=\"pb-5\">\r\n            <div class=\"mt-5\"></div>\r\n            <!-- <hr> -->\r\n            <ng-container *ngIf=\"pageOrder[activePage].type == 'dyn' \">\r\n              <ng-container *ngIf=\"formData[activePage].pageType != 'table' \">\r\n                <dynamic-form #dynForm\r\n                  [tempData]=\"tempData[formData[activePage].tableName+formData[activePage].id] || {}\"\r\n                  [config]=\"formData[activePage].controls\" (submit)=\"saveTemp($event)\" [editStage]=\"false\">\r\n                </dynamic-form>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"formData[activePage].pageType == 'table' \">\r\n                <div class=\"form-group\">\r\n                  <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"reset()\">Reset Data</button> -->\r\n                  <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"newData()\">Add New Data</button>\r\n                </div>\r\n                <hr>\r\n                <div class=\"table-responsive angular-bootstrap-table\">\r\n                  <table class=\"table table-head-custom table-vertical-center\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>NO</th>\r\n                        <ng-container *ngFor=\"let item of tableReform\">\r\n                          <th>{{item.title}}</th>\r\n                        </ng-container>\r\n                        <th>Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <ng-container *ngIf=\"tempData[formData[activePage].tableName+formData[activePage].id]\">\r\n                        <tr\r\n                          *ngFor=\"let item of tempData[formData[activePage].tableName+formData[activePage].id];let i = index\">\r\n                          <td>{{i+1}}</td>\r\n                          <ng-container *ngFor=\"let control of tableReform\">\r\n\r\n                            <td *ngIf=\"control.type != 'file'\">{{ getOtherData(control.cols,item) }}</td>\r\n                            <td *ngIf=\"control.type == 'file'\">\r\n                              <a href=\"javascript:;\" (click)=\"download(control.cols,item)\">\r\n                                {{getOtherData(control.cols,item)}}\r\n                              </a>\r\n                            </td>\r\n                          </ng-container>\r\n                          <td style=\"white-space: nowrap;\">\r\n                            <a title=\"Edit Data\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm mx-1\"\r\n                              (click)=\"newData(item,i)\">\r\n                              <span [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\" [cacheSVG]=\"true\"\r\n                                class=\"svg-icon svg-icon-md svg-icon-primary\">\r\n                              </span>\r\n                            </a>\r\n                            <a title=\"Delete UI\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm\"\r\n                              (click)=\"deleteData(i,item)\">\r\n                              <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\r\n                                class=\"svg-icon svg-icon-md svg-icon-danger\">\r\n                              </span>\r\n                            </a>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"formData[activePage].pageType != 'table'\">\r\n                <hr>\r\n                <div class=\"row\">\r\n                  <div app-button-box *ngFor=\"let contact of formData[activePage].buttons; let i = index\"\r\n                    [config]=\"contact\" (eventE)=\"clickBtn($event)\" [index]=\"i\" [editStage]=\"false\"\r\n                    class=\"col-xs-{{contact.size}} col-sm-{{contact.size}} {{contact.position}} mt-2\"></div>\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"formData[activePage].pageType == 'table'\">\r\n                <hr>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6 mx-auto\">\r\n                    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage(activePage)\"> Previous </button>\r\n                    <!-- <button class=\"btn btn-block btn-default\" (click)=\"backPage(activePage)\">  {{ activePage + 1 <\r\n                        pageOrder.length ? \"Next\" : \"Save\" }} {{ activePage + 1 < pageOrder.length ? \"\" : (type |\r\n                        titlecase) }}Back </button> -->\r\n                  </div>\r\n                  <div class=\"col-sm-6 mx-auto\">\r\n                    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage(activePage)\"> Save & Next </button>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"pageOrder[activePage].type == 'static'\">\r\n              <ng-container staticPage [compId]=\"pageOrder[activePage].id\" [product]=\"item\" [editData]=\"editData\"\r\n                [resourcesId]=\"resourceId\" [premiumAmt]=\"premiumAmt\" (eventOut)=\"staticEvent($event)\">\r\n              </ng-container>\r\n            </ng-container>\r\n            <!-- <ng-container *ngIf=\"pageOrder[activePage].id == 'addon'\">\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>\r\n                      AddOn\r\n                    </th>\r\n                    <th *ngIf=\"addon.isSum\">\r\n                      Sum Insured\r\n                    </th>\r\n                    <th *ngIf=\"addon.isUnit\">\r\n                      Unit\r\n                    </th>\r\n                    <th *ngIf=\"addon.isPremium\">\r\n                      Premium\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let addOn of item.addOns;let i = index\">\r\n                    <td>{{addOn.description}}</td>\r\n                    <td *ngIf=\"addOn.sumInsured\">\r\n                      <ng-container *ngIf=\"!addOn.sumInsuredStr\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].sum\">\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"addOn.sumInsuredStr\">\r\n                        {{addOnData[addOn.id].sum}}\r\n                      </ng-container>\r\n                    </td>\r\n                    <td *ngIf=\"addOn.unit\">\r\n                      <ng-container *ngIf=\"!addOn.unitStr\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].unit\">\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"addOn.unitStr\">\r\n                        {{addOnData[addOn.id].unit}}\r\n                      </ng-container>\r\n                    </td>\r\n                    <td *ngIf=\"addOn.premium\">\r\n                      <ng-container *ngIf=\"!addOn.premiumStr\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].premium\">\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"addOn.premiumStr\">\r\n                        {{addOnData[addOn.id].premium}}\r\n                      </ng-container>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <hr>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3 mx-auto\">\r\n                  <button class=\"btn btn-block btn-default\" (click)=\"backPage(activePage)\"> Back </button>\r\n                </div>\r\n                <div class=\"col-sm-3 mx-auto\">\r\n                  <button class=\"btn btn-block btn-success\" (click)=\"nextPage(activePage,'addOns')\"> {{ activePage + 1 <\r\n                      pageOrder.length ? \"Next\" : \"Save\" }} {{ activePage + 1 < pageOrder.length ? \"\" : (type |\r\n                      titlecase) }} </button>\r\n                </div>\r\n              </div>\r\n            </ng-container> -->\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 37846:
/*!****************************************************************!*\
  !*** ./src/app/pages/product-form/product-form.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".wizard.wizard-1 .wizard-nav .wizard-steps {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  margin-left: 3.5rem;\n  margin-right: 3.5rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n  color: #3F4254;\n  font-size: 3.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #3F4254;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  color: #7E8299;\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin-top: 0.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n  color: #7E8299;\n  font-size: 1.15rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n  display: none;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon svg g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon svg:hover g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-title, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-title {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow svg g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow svg:hover g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n@media (min-width: 768px) and (max-width: 1199.98px) {\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n    font-size: 3.75rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n    margin-top: 0.75rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .wizard.wizard-1 .wizard-nav .wizard-steps {\n    flex-direction: column;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n    font-size: 1.5rem;\n    margin-right: 1.25rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n    font-size: 0.9rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n    display: block;\n  }\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps {\n  display: flex;\n  align-items: flex-end;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  margin-right: 1rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step:last-child {\n  margin-right: 0;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  color: #3F4254;\n  padding: 2rem 0.5rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title span {\n  font-size: 2rem;\n  margin-right: 0.5rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-bar {\n  height: 4px;\n  width: 100%;\n  background-color: #EBEDF3;\n  position: relative;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-bar:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 0;\n  background-color: transparent;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label {\n  color: #005f99;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-bar:after {\n  width: 100%;\n  background-color: #005f99;\n}\n@media (max-width: 999.98px) {\n  .wizard.wizard-3 .wizard-nav .wizard-steps {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step {\n    flex: 0 0 100%;\n    position: relative;\n    width: 100%;\n  }\n  .wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    justify-content: flex-start;\n    flex: 0 0 100%;\n    padding: 1rem 0;\n  }\n}\n.wizard.wizard-2 {\n  display: flex;\n}\n.wizard.wizard-2 .wizard-nav {\n  padding: 0;\n  flex: 0 0 400px;\n  width: 400px;\n  max-width: 100%;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step {\n  padding: 0.75rem 1.5rem;\n  position: relative;\n  border-radius: 0.5rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-wrapper {\n  display: flex;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon {\n  font-size: 2.5rem;\n  margin-right: 1.1rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon i {\n  color: #3F4254;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon .svg-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #3F4254;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon .svg-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  color: #181C32;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-desc {\n  color: #7E8299;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n  color: #7E8299;\n  font-size: 1.15rem;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n  display: none;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] {\n  background-color: #F3F6F9;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon {\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon i {\n  color: #005f99 !important;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon .svg-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99 !important;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon .svg-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current]:after {\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \" \";\n  height: 0;\n  width: 0;\n  border: solid transparent;\n  position: absolute;\n  border-left-color: #F3F6F9;\n  border-width: 1rem;\n}\n.wizard.wizard-2 .wizard-body {\n  width: 100%;\n}\n@media (min-width: 1000px) and (max-width: 1399.98px) {\n  .wizard.wizard-2 .wizard-nav {\n    flex: 0 0 325px;\n    width: 325px;\n  }\n}\n@media (max-width: 999.98px) {\n  .wizard.wizard-2 {\n    display: block;\n  }\n  .wizard.wizard-2 .wizard-nav {\n    width: 100%;\n    border-bottom: 1px solid #EBEDF3;\n  }\n  .wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current]:after {\n    content: none;\n  }\n  .wizard.wizard-2 .wizard-body {\n    width: 100%;\n  }\n}\n.active .wizard-title,\n.wizard-label.active,\n.done .wizard-title,\n.done {\n  color: #3699ff !important;\n}\n.active .wizard-title .wizard-icon,\n.wizard-label.active .wizard-icon,\n.done .wizard-title .wizard-icon,\n.done .wizard-icon {\n  color: #3699ff !important;\n}\n.wizard-title, .wizard-label {\n  max-width: 145px;\n}\n.wizard-steps {\n  align-items: flex-start !important;\n}\n.wizard-wrapper.active .wizard-icon,\n.wizard-wrapper.active .wizard-label, .wizard-wrapper.done .wizard-icon,\n.wizard-wrapper.done .wizard-label {\n  color: #3699ff !important;\n}\n.wizard-wrapper .wizard-icon,\n.wizard-wrapper .wizard-label {\n  color: #3F4254;\n}\n.wizard-step > .wizard-label {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n.wizard-step {\n  align-items: flex-start !important;\n}\n.wizard-icon {\n  font-size: 2rem !important;\n}\n.active .wizard-bar,\n.done .wizard-bar {\n  background-color: #3699ff !important;\n}\n.top-box {\n  color: #B5B5C3;\n  margin-left: 50px;\n}\n.top-box span {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFnZXNcXHdpemFyZFxcd2l6YXJkLTEuc2NzcyIsInByb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy5ib290c3RyYXAuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcY29tcG9uZW50c1xcbWl4aW5zXFxfc3ZnLWljb24uc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy5kZW1vLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXHBhZ2VzXFx3aXphcmRcXHdpemFyZC0zLnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXHBhZ2VzXFx3aXphcmRcXHdpemFyZC0yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUU7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNaSDtBRGVHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGVJO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtBQ2JMO0FEZUs7RUFDQyxjRVBnQjtFRlFoQixrQkFBQTtBQ2JOO0FFVlk7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUZZaEI7QUVOZ0I7RUFDSSwwQkFBQTtBRlFwQjtBRFdLO0VBQ0MsY0VoQmdCO0VGaUJoQixpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRGFJO0VBQ0MsY0V4QmlCO0VGeUJqQixrQkFBQTtBQ1hMO0FEYUs7RUFDQyxhQUFBO0FDWE47QURrQk07RUFDQyxjSWpEa0I7QUhpQ3pCO0FFakNZO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0FGbUNoQjtBRTdCZ0I7RUFDSSwwQkFBQTtBRitCcEI7QURjTTtFQUNDLGNJdkRrQjtBSDJDekI7QURlSztFQUNDLGNJM0RtQjtBSDhDekI7QUU5Q1k7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUZnRGhCO0FFMUNnQjtFQUNJLDBCQUFBO0FGNENwQjtBSTJCSTtFTEZDO0lBQ0MsbUJBQUE7SUFDQSxvQkFBQTtFQ3JCSjtFRHVCSTtJQUNDLGtCQUFBO0VDckJMO0VEd0JJO0lBQ0MsbUJBQUE7RUN0Qkw7RUQwQkc7SUFDQyxpQkFBQTtFQ3hCSjtBQUNGO0FJSkk7RUwrQ0Q7SUFDQyxzQkFBQTtFQ3hDRjtFRDJDRTtJQUNDLFdBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQ3pDSDtFRDJDRztJQUNDLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUN6Q0o7RUQyQ0k7SUFDQyxpQkFBQTtJQUNBLHFCQUFBO0VDekNMO0VENkNHO0lBQ0MsaUJBQUE7RUMzQ0o7RUQ2Q0k7SUFDQyxjQUFBO0VDM0NMO0FBQ0Y7QUs3RkU7RUFDQyxhQUFBO0VBQ0EscUJBQUE7QUwrRkg7QUs1Rkc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUw4Rko7QUs1Rkk7RUFDQyxlQUFBO0FMOEZMO0FLM0ZJO0VBQ0MsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNKWGlCO0VJWWpCLG9CQUFBO0FMNkZMO0FLM0ZLO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBTDZGTjtBSzNGTTtFQUNDLGVBQUE7RUFDQSxvQkFBQTtBTDZGUDtBS3pGSztFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJKbkNnQjtFSW9DaEIsa0JBQUE7QUwyRk47QUt6Rk07RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSx5R0ptWTZDO0FEeFNwRDtBS3JGSztFQUNDLGNGOURtQjtBSHFKekI7QUtwRk87RUFDQyxXQUFBO0VBQ0EseUJGbkVpQjtBSHlKekI7QUl4Rkk7RUNpQkQ7SUFDQyxzQkFBQTtJQUNBLHVCQUFBO0VMMkVGO0VLekVFO0lBQ0MsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFTDJFSDtFS3pFRztJQUNDLDJCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUwyRUo7QUFDRjtBTXBLQTtFQUNDLGFBQUE7QU5zS0Q7QU1uS0M7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBWGlCO0VBWWpCLGVBQUE7QU5xS0Y7QU1sS0U7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBTm9LSDtBTWpLRztFQUNDLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlHTCtaZ0Q7QUQ1UHBEO0FNaktJO0VBQ0MsYUFBQTtBTm1LTDtBTWhLSTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5R0xzWitDO0FEcFBwRDtBTWhLSztFQUNDLGNMeEJnQjtBRDBMdEI7QUV6TVk7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUYyTWhCO0FFck1nQjtFQUNJLDBCQUFBO0FGdU1wQjtBTWpLSTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FObUtMO0FNaktLO0VBQ0MsY0xyQ2dCO0VLc0NoQixnQkFBQTtFQUNBLGlCQUFBO0FObUtOO0FNaEtLO0VBQ0MsY0w5Q2dCO0FEZ050QjtBTTlKSTtFQUNDLGNMbkRpQjtFS29EakIsa0JBQUE7QU5nS0w7QU05Sks7RUFDQyxhQUFBO0FOZ0tOO0FNNUpJO0VBQ0MseUJMakVpQjtFS2tFakIseUdMZ1grQztBRGxOcEQ7QU01Sks7RUFDQyx5R0w2VzhDO0FEL01wRDtBTTVKTTtFQUNDLHlCQUFBO0FOOEpQO0FFOU9ZO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtBRmdQaEI7QUUxT2dCO0VBQ0ksMEJBQUE7QUY0T3BCO0FNN0pLO0VBQ0MsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkx6RmdCO0VLMEZoQixrQkFBQTtBTitKTjtBTXZKQztFQUNDLFdBQUE7QU55SkY7QUlwTEk7RUVvQ0Y7SUFDQyxlQUFBO0lBQ0EsWUFuSG1CO0VOdVFwQjtBQUNGO0FJMU1JO0VFNERIO0lBQ0MsY0FBQTtFTmlKQTtFTTlJQTtJQUNDLFdBQUE7SUFDQSxnQ0FBQTtFTmdKRDtFTTNJSTtJQUNDLGFBQUE7RU42SUw7RU1ySUE7SUFDQyxXQUFBO0VOdUlEO0FBQ0Y7QUE5UkE7Ozs7RUFJRSx5QkFBQTtBQWdTRjtBQTlSRTs7OztFQUNFLHlCQUFBO0FBbVNKO0FBaFNBO0VBQ0UsZ0JBQUE7QUFtU0Y7QUFqU0E7RUFDRSxrQ0FBQTtBQW9TRjtBQWpTRTs7O0VBRUUseUJBQUE7QUFxU0o7QUFqU0U7O0VBRUUsY0FBQTtBQW9TSjtBQWhTQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFtU0Y7QUFoU0E7RUFDRSxrQ0FBQTtBQW1TRjtBQWhTQTtFQUNFLDBCQUFBO0FBbVNGO0FBaFNBOztFQUVFLG9DQUFBO0FBbVNGO0FBaFNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBbVNGO0FBalNFO0VBQ0UsV0FBQTtBQW1TSiIsImZpbGUiOiJwcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vLyBXaXphcmQgMVxyXG4vLyBQYWdlcyBTQVNTIGZpbGVzIGFyZSBjb21waWxlZCBpbnRvIHNlcGFyYXRlIGNzcyBmaWxlc1xyXG4vL1xyXG5cclxuLy8gSW5pdGlhbGl6YXRpb24gb2YgZ2xvYmFsIHZhcmlhYmxlcywgbWl4aW5zIGFuZCBmdW5jdGlvbnNcclxuQGltcG9ydCBcIi4uLy4uL2luaXRcIjtcclxuXHJcbi8vIEJhc2VcclxuLndpemFyZC53aXphcmQtMSB7XHJcblx0Ly8gTmF2XHJcblx0LndpemFyZC1uYXYge1xyXG5cdFx0Ly8gU3RlcHNcclxuXHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cclxuXHRcdFx0Ly8gU3RlcFxyXG5cdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0Ly8gZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMy41cmVtO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtaWNvbiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzLjc1cmVtO1xyXG5cclxuXHRcdFx0XHRcdFx0QGluY2x1ZGUgc3ZnLWljb24tY29sb3IoJHRleHQtbXV0ZWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJGRhcmstNTA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwLjc1cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndpemFyZC1hcnJvdyB7XHJcblx0XHRcdFx0XHRjb2xvcjogJGRhcmstNTA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMTVyZW07XHJcblxyXG5cdFx0XHRcdFx0Ji5sYXN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJkb25lXCJdLFxyXG5cdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJjdXJyZW50XCJdIHtcclxuXHRcdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0XHQud2l6YXJkLWljb24ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkcHJpbWFyeTtcclxuXHJcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgc3ZnLWljb24tY29sb3IoJHByaW1hcnkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQud2l6YXJkLXRpdGxlIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogJHByaW1hcnk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC53aXphcmQtYXJyb3cge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJHByaW1hcnk7XHJcblxyXG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBzdmctaWNvbi1jb2xvcigkcHJpbWFyeSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBEZXNrdG9wIE1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKG1kLCBsZykge1xyXG5cdC53aXphcmQud2l6YXJkLTEge1xyXG5cdFx0Ly8gTmF2XHJcblx0XHQud2l6YXJkLW5hdiB7XHJcblx0XHRcdC8vIFN0ZXBzXHJcblx0XHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRcdC8vIFN0ZXBcclxuXHRcdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG5cclxuXHRcdFx0XHRcdFx0LndpemFyZC1pY29uIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDMuNzVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC53aXphcmQtdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuNzVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWFycm93IHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBUYWJsZSBhbmQgTW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcblx0LndpemFyZC53aXphcmQtMSB7XHJcblx0fVxyXG59XHJcblxyXG4vLyBNb2JpbGUgbW9kZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuXHQud2l6YXJkLndpemFyZC0xIHtcclxuXHRcdC8vIE5hdlxyXG5cdFx0LndpemFyZC1uYXYge1xyXG5cdFx0XHQvLyBTdGVwc1xyXG5cdFx0XHQud2l6YXJkLXN0ZXBzIHtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHRcdFx0XHQvLyBTdGVwXHJcblx0XHRcdFx0LndpemFyZC1zdGVwIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHJcblx0XHRcdFx0XHRcdC53aXphcmQtaWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1hcnJvdyB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cclxuXHRcdFx0XHRcdFx0Ji5sYXN0IHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAzLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMy41cmVtO1xufVxuLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIC53aXphcmQtaWNvbiB7XG4gIGNvbG9yOiAjM0Y0MjU0O1xuICBmb250LXNpemU6IDMuNzVyZW07XG59XG4ud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwgLndpemFyZC1pY29uIHN2ZyBnIFtmaWxsXSB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICBmaWxsOiAjM0Y0MjU0O1xufVxuLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIC53aXphcmQtaWNvbiBzdmc6aG92ZXIgZyBbZmlsbF0ge1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbn1cbi53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCAud2l6YXJkLXRpdGxlIHtcbiAgY29sb3I6ICM3RTgyOTk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWFycm93IHtcbiAgY29sb3I6ICM3RTgyOTk7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbn1cbi53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1hcnJvdy5sYXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9ZG9uZV0gLndpemFyZC1sYWJlbCAud2l6YXJkLWljb24sIC53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9Y3VycmVudF0gLndpemFyZC1sYWJlbCAud2l6YXJkLWljb24ge1xuICBjb2xvcjogIzAwNWY5OTtcbn1cbi53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9ZG9uZV0gLndpemFyZC1sYWJlbCAud2l6YXJkLWljb24gc3ZnIGcgW2ZpbGxdLCAud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIC53aXphcmQtbGFiZWwgLndpemFyZC1pY29uIHN2ZyBnIFtmaWxsXSB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICBmaWxsOiAjMDA1Zjk5O1xufVxuLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1kb25lXSAud2l6YXJkLWxhYmVsIC53aXphcmQtaWNvbiBzdmc6aG92ZXIgZyBbZmlsbF0sIC53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9Y3VycmVudF0gLndpemFyZC1sYWJlbCAud2l6YXJkLWljb24gc3ZnOmhvdmVyIGcgW2ZpbGxdIHtcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG59XG4ud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWRvbmVdIC53aXphcmQtbGFiZWwgLndpemFyZC10aXRsZSwgLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWxhYmVsIC53aXphcmQtdGl0bGUge1xuICBjb2xvcjogIzAwNWY5OTtcbn1cbi53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9ZG9uZV0gLndpemFyZC1hcnJvdywgLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWFycm93IHtcbiAgY29sb3I6ICMwMDVmOTk7XG59XG4ud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWRvbmVdIC53aXphcmQtYXJyb3cgc3ZnIGcgW2ZpbGxdLCAud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIC53aXphcmQtYXJyb3cgc3ZnIGcgW2ZpbGxdIHtcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gIGZpbGw6ICMwMDVmOTk7XG59XG4ud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWRvbmVdIC53aXphcmQtYXJyb3cgc3ZnOmhvdmVyIGcgW2ZpbGxdLCAud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIC53aXphcmQtYXJyb3cgc3ZnOmhvdmVyIGcgW2ZpbGxdIHtcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIH1cbiAgLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIC53aXphcmQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICB9XG4gIC53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCAud2l6YXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICB9XG4gIC53aXphcmQud2l6YXJkLTEgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1hcnJvdyB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxuICAud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwgLndpemFyZC1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG4gIH1cbiAgLndpemFyZC53aXphcmQtMSAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWFycm93IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAud2l6YXJkLndpemFyZC0xIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtYXJyb3cubGFzdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjM0Y0MjU0O1xuICBwYWRkaW5nOiAycmVtIDAuNXJlbTtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCAud2l6YXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndpemFyZC53aXphcmQtMyAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIC53aXphcmQtdGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4ud2l6YXJkLndpemFyZC0zIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwgLndpemFyZC1iYXIge1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVERjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCAud2l6YXJkLWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMyAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWxhYmVsIHtcbiAgY29sb3I6ICMwMDVmOTk7XG59XG4ud2l6YXJkLndpemFyZC0zIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIC53aXphcmQtbGFiZWwgLndpemFyZC1iYXI6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY5OTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5OS45OHB4KSB7XG4gIC53aXphcmQud2l6YXJkLTMgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAud2l6YXJkLndpemFyZC0zIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndpemFyZC53aXphcmQtMyAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG59XG4ud2l6YXJkLndpemFyZC0yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYge1xuICBwYWRkaW5nOiAwO1xuICBmbGV4OiAwIDAgNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWljb24gaSB7XG4gIGNvbG9yOiAjM0Y0MjU0O1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWljb24gLnN2Zy1pY29uIHN2ZyBnIFtmaWxsXSB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICBmaWxsOiAjM0Y0MjU0O1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWljb24gLnN2Zy1pY29uIHN2Zzpob3ZlciBnIFtmaWxsXSB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcCAud2l6YXJkLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtbGFiZWwgLndpemFyZC10aXRsZSB7XG4gIGNvbG9yOiAjMTgxQzMyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1sYWJlbCAud2l6YXJkLWRlc2Mge1xuICBjb2xvcjogIzdFODI5OTtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXAgLndpemFyZC1hcnJvdyB7XG4gIGNvbG9yOiAjN0U4Mjk5O1xuICBmb250LXNpemU6IDEuMTVyZW07XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwIC53aXphcmQtYXJyb3cubGFzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGOTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWljb24ge1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdIC53aXphcmQtaWNvbiBpIHtcbiAgY29sb3I6ICMwMDVmOTkgIWltcG9ydGFudDtcbn1cbi53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYgLndpemFyZC1zdGVwcyAud2l6YXJkLXN0ZXBbZGF0YS13aXphcmQtc3RhdGU9Y3VycmVudF0gLndpemFyZC1pY29uIC5zdmctaWNvbiBzdmcgZyBbZmlsbF0ge1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbiAgZmlsbDogIzAwNWY5OSAhaW1wb3J0YW50O1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XSAud2l6YXJkLWljb24gLnN2Zy1pY29uIHN2Zzpob3ZlciBnIFtmaWxsXSB7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xufVxuLndpemFyZC53aXphcmQtMiAud2l6YXJkLW5hdiAud2l6YXJkLXN0ZXBzIC53aXphcmQtc3RlcFtkYXRhLXdpemFyZC1zdGF0ZT1jdXJyZW50XTphZnRlciB7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjNGNkY5O1xuICBib3JkZXItd2lkdGg6IDFyZW07XG59XG4ud2l6YXJkLndpemFyZC0yIC53aXphcmQtYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG1heC13aWR0aDogMTM5OS45OHB4KSB7XG4gIC53aXphcmQud2l6YXJkLTIgLndpemFyZC1uYXYge1xuICAgIGZsZXg6IDAgMCAzMjVweDtcbiAgICB3aWR0aDogMzI1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTkuOThweCkge1xuICAud2l6YXJkLndpemFyZC0yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRURGMztcbiAgfVxuICAud2l6YXJkLndpemFyZC0yIC53aXphcmQtbmF2IC53aXphcmQtc3RlcHMgLndpemFyZC1zdGVwW2RhdGEtd2l6YXJkLXN0YXRlPWN1cnJlbnRdOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lO1xuICB9XG4gIC53aXphcmQud2l6YXJkLTIgLndpemFyZC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmFjdGl2ZSAud2l6YXJkLXRpdGxlLFxuLndpemFyZC1sYWJlbC5hY3RpdmUsXG4uZG9uZSAud2l6YXJkLXRpdGxlLFxuLmRvbmUge1xuICBjb2xvcjogIzM2OTlmZiAhaW1wb3J0YW50O1xufVxuLmFjdGl2ZSAud2l6YXJkLXRpdGxlIC53aXphcmQtaWNvbixcbi53aXphcmQtbGFiZWwuYWN0aXZlIC53aXphcmQtaWNvbixcbi5kb25lIC53aXphcmQtdGl0bGUgLndpemFyZC1pY29uLFxuLmRvbmUgLndpemFyZC1pY29uIHtcbiAgY29sb3I6ICMzNjk5ZmYgIWltcG9ydGFudDtcbn1cblxuLndpemFyZC10aXRsZSwgLndpemFyZC1sYWJlbCB7XG4gIG1heC13aWR0aDogMTQ1cHg7XG59XG5cbi53aXphcmQtc3RlcHMge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4ud2l6YXJkLXdyYXBwZXIuYWN0aXZlIC53aXphcmQtaWNvbixcbi53aXphcmQtd3JhcHBlci5hY3RpdmUgLndpemFyZC1sYWJlbCwgLndpemFyZC13cmFwcGVyLmRvbmUgLndpemFyZC1pY29uLFxuLndpemFyZC13cmFwcGVyLmRvbmUgLndpemFyZC1sYWJlbCB7XG4gIGNvbG9yOiAjMzY5OWZmICFpbXBvcnRhbnQ7XG59XG5cbi53aXphcmQtd3JhcHBlciAud2l6YXJkLWljb24sXG4ud2l6YXJkLXdyYXBwZXIgLndpemFyZC1sYWJlbCB7XG4gIGNvbG9yOiAjM0Y0MjU0O1xufVxuXG4ud2l6YXJkLXN0ZXAgPiAud2l6YXJkLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi53aXphcmQtc3RlcCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi53aXphcmQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIC53aXphcmQtYmFyLFxuLmRvbmUgLndpemFyZC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5OWZmICFpbXBvcnRhbnQ7XG59XG5cbi50b3AtYm94IHtcbiAgY29sb3I6ICNCNUI1QzM7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLnRvcC1ib3ggc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xufSIsIi8vXHJcbi8vIEdsb2JhbCB2YXJpYWJsZXMgZm9yIEJvb3RzdHJhcCBjdXN0b21pemF0aW9uLlxyXG4vLyBUbyBvdmVycmlkZSBhbnkgQm9vdHN0cmFwIHZhcmlhYmxlIHNhZmVseSB5b3UgY2FuIHVzZSBfdmFyaWFibGVzLmRlbW8uc2Nzc1xyXG4vL1xyXG5cclxuLy9cclxuLy8gQ29sb3Igc3lzdGVtXHJcbi8vXHJcblxyXG4vLyBCbGFjayBjb2xvclxyXG4kYmxhY2s6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjMDAwMDAwICFkZWZhdWx0O1xyXG5cclxuLy8gV2hpdGUgY29sb3JcclxuJHdoaXRlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcclxuXHJcbi8vIEdyYXkgY29sb3JzXHJcbiRncmF5LTEwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNGM0Y2RjkgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNFQkVERjMgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNFNEU2RUYgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNEMUQzRTAgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNCNUI1QzMgIWRlZmF1bHQ7XHJcbiRncmF5LTYwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCM3RTgyOTkgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCM1RTYyNzggIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCMzRjQyNTQgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCMxODFDMzIgIWRlZmF1bHQ7XHJcblxyXG4vLyBEYXJrIGNvbG9yc1xyXG4kZGFyazogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktOTAwICFkZWZhdWx0O1xyXG4kZGFyay03NTogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktODAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstNjU6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTcwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYXJrLTUwOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS02MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFyay0yNTogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFRleHQgbXV0ZWRcclxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGdyYXktODAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEdyYXkgY29sb3JzIGxpc3RcclxuJGdyYXlzOiAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcblx0XCI3MDBcIjogJGdyYXktNzAwLFxyXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxyXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXHJcbikgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQm9vdHN0cmFwIHN0YW5kYXJkICYgZXh0ZW5kZWQgY29sb3JzXHJcbi8vIERhcmsgY29sb3JzXHJcbiRkYXJrOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZGFyayAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRkYXJrLWhvdmVyOiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0ZGFya2VuKCRkYXJrLCAzJSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFyay1saWdodDogICAgICAgICAgXHRcdFx0XHRcdFx0XHQgICAgJGdyYXktNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstaW52ZXJzZTogICAgICAgICBcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFByaW1hcnkgY29sb3JzXHJcbiRwcmltYXJ5OiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMzY5OUZGICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHByaW1hcnktaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMxODdERTQgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJpbWFyeS1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0UxRjBGRiAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcmltYXJ5LWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFNlY29uZGFyeSBjb2xvcnNcclxuJHNlY29uZGFyeTogICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNmZjgxMDAgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kc2Vjb25kYXJ5LWhvdmVyOiAgXHRcdFx0XHRcdFx0XHRcdFx0ZGFya2VuKCNmZjgxMDAsIDQlKSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRzZWNvbmRhcnktbGlnaHQ6ICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kc2Vjb25kYXJ5LWludmVyc2U6XHRcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gU3VjY2VzcyBjb2xvcnNcclxuJHN1Y2Nlc3M6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMxQkM1QkQgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kc3VjY2Vzcy1ob3ZlcjogICAgXHRcdFx0XHRcdFx0XHRcdFx0IzBCQjdBRiAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRzdWNjZXNzLWxpZ2h0OiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjQzlGN0Y1ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHN1Y2Nlc3MtaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBJbmNvIGNvbG9yc1xyXG4kaW5mbzogICAgICAgICBcdFx0IFx0XHRcdFx0XHRcdFx0XHQjODk1MEZDICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJGluZm8taG92ZXI6ICAgXHRcdCBcdFx0XHRcdFx0XHRcdFx0IzczMzdFRSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRpbmZvLWxpZ2h0OiAgIFx0XHQgXHRcdFx0XHRcdFx0XHRcdCNFRUU1RkYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5mby1pbnZlcnNlOiBcdFx0IFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gV2FybmluZyBjb2xvcnNcclxuJHdhcm5pbmc6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkE4MDAgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kd2FybmluZy1ob3ZlcjogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0VFOUQwMSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3YXJuaW5nLWxpZ2h0OiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRkZGNERFICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHdhcm5pbmctaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBEYW5nZXIgY29sb3JzXHJcbiRkYW5nZXI6ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRjY0RTYwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJGRhbmdlci1ob3ZlcjogICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFRTJENDEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFuZ2VyLWxpZ2h0OiAgICAgXHRcdFx0XHRcdFx0XHRcdFx0I0ZGRTJFNSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYW5nZXItaW52ZXJzZTogICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gTGlnaHQgY29sb3JzXHJcbiRsaWdodDogICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kbGlnaHQtaG92ZXI6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRsaWdodC1saWdodDogICAgICAgICBcdFx0XHRcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGxpZ2h0LWludmVyc2U6ICAgICAgICBcdFx0XHRcdFx0XHRcdFx0JGdyYXktNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFdoaXRlIGNvbG9yc1xyXG4kd2hpdGU6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kd2hpdGUtaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3aGl0ZS1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3aGl0ZS1pbnZlcnNlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1jb2xvcnM6IChcclxuXHRcIndoaXRlXCI6ICAgICAgJHdoaXRlLCAgLy8gY3VzdG9tIGNvbG9yIHR5cGVcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gRXh0ZW5kZWQgaG92ZXIgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1ob3Zlci1jb2xvcnM6IChcclxuXHRcIndoaXRlXCI6ICAgICAgJHdoaXRlLWhvdmVyLCAgIC8vIGN1c3RvbSBjb2xvciB0eXBlXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LWhvdmVyLFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnktaG92ZXIsXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MtaG92ZXIsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8taG92ZXIsXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmctaG92ZXIsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlci1ob3ZlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQtaG92ZXIsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmstaG92ZXJcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgaW52ZXJzZSBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcclxuJHRoZW1lLWludmVyc2UtY29sb3JzOiAoXHJcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZS1pbnZlcnNlLFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeS1pbnZlcnNlLFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnktaW52ZXJzZSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2Vzcy1pbnZlcnNlLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLWludmVyc2UsXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmctaW52ZXJzZSxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLWludmVyc2UsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LWludmVyc2UsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmstaW52ZXJzZVxyXG4pICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBFeHRlbmRlZCBvdXRsaW5lIGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtb3V0bGluZS1pbnZlcnNlLWNvbG9yczogKFxyXG5cdFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRkYXJrLTc1LFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGRhcmstNzUsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgbGlnaHQgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1saWdodC1jb2xvcnM6IChcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUtbGlnaHQsXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LWxpZ2h0LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnktbGlnaHQsXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MtbGlnaHQsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8tbGlnaHQsXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmctbGlnaHQsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlci1saWdodCxcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQtbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmstbGlnaHRcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgc2hhZG93IGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtc2hhZG93LWNvbG9yczogKFxyXG4gICAgXCJ3aGl0ZVwiOiAgICAgICRkYXJrLFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkZGFyayxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRkYXJrLFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIHRoZW1lIHRleHQgY29sb3JzXHJcbiR0aGVtZS10ZXh0LWNvbG9yczogKFxyXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJGRhcmssXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmssXHJcbiAgICBcImRhcmstNzVcIjogICAgJGRhcmstNzUsXHJcbiAgICBcImRhcmstNjVcIjogICAgJGRhcmstNjUsXHJcbiAgICBcImRhcmstNTBcIjogICAgJGRhcmstNTAsXHJcbiAgICBcImRhcmstMjVcIjogICAgJGRhcmstMjUsXHJcbiAgICBcIm11dGVkXCI6ICAgICAgJHRleHQtbXV0ZWRcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gU29jaWFsIE5ldHdvcmsgQ29sb3JzIFVzZWQgV2l0aCBCb29zdHJhcCBCdXR0b25zKHNlZTogaHR0cHM6Ly9wcmltYXJ5Y29sb3JzLm5ldC8pXHJcbiRzb2NpYWwtY29sb3JzOiAoXHJcblx0ZmFjZWJvb2s6IChcclxuXHRcdGJhc2U6ICMzYjU5OTgsXHJcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxyXG4gICAgICAgIGxpZ2h0OiByZ2JhKCMzYjU5OTgsIDAuMSksXHJcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjM2I1OTk4LCA3LjUlKVxyXG5cdCksXHJcblx0Z29vZ2xlOiAoXHJcblx0XHRiYXNlOiAjZGQ0YjM5LFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjZGQ0YjM5LCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oI2RkNGIzOSwgNy41JSlcclxuXHQpLFxyXG5cdHR3aXR0ZXI6IChcclxuXHRcdGJhc2U6ICMxZGExZjIsXHJcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxyXG4gICAgICAgIGxpZ2h0OiByZ2JhKCMxZGExZjIsIDAuMSksXHJcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjMWRhMWYyLCA3LjUlKVxyXG5cdCksXHJcblx0aW5zdGFncmFtOiAoXHJcblx0XHRiYXNlOiAjZTEzMDZjLFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjZTEzMDZjLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oI2UxMzA2YywgNy41JSlcclxuXHQpLFxyXG5cdHlvdXR1YmU6IChcclxuXHRcdGJhc2U6ICNmZjAwMDAsXHJcblx0XHRpbnZlcnNlOiAjZmZmZmZmLFxyXG4gICAgICAgIGxpZ2h0OiByZ2JhKCNmZjAwMDAsIDAuMSksXHJcbiAgICAgICAgaG92ZXI6IGRhcmtlbigjZmYwMDAwLCA3LjUlKVxyXG5cdCksXHJcbiAgICBsaW5rZWRpbjogKFxyXG4gICAgICAgIGJhc2U6ICMwMDc3YjUsXHJcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjMDA3N2I1LCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzAwNzdiNSwgNy41JSlcclxuICAgICksXHJcbiAgICBza3lwZTogKFxyXG4gICAgICAgIGJhc2U6ICMwMGFmZjAsXHJcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjMDBhZmYwLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzAwYWZmMCwgNy41JSlcclxuICAgIClcclxuKSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBFeHRlbmRlZCBjdXN0b20gc3BhY2luZyBmb3IgQm9vdHN0cmFwXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kc3BhY2VyczogKFxyXG4gICAgMDogMCxcclxuICAgIDE6ICgkc3BhY2VyICogLjI1KSwgIFx0Ly8gMy41cHhcclxuICAgIDI6ICgkc3BhY2VyICogLjUpLCAgIFx0Ly8gN3B4O1xyXG5cdDM6ICgkc3BhY2VyICogLjc1KSwgIFx0Ly8gMTAuNXB4XHJcblx0NDogKCRzcGFjZXIgKiAxKSwgICAgXHQvLyAxNHB4XHJcblx0NTogKCRzcGFjZXIgKiAxLjI1KSwgXHQvLyAxNy41cHhcclxuXHQ2OiAoJHNwYWNlciAqIDEuNSksICBcdC8vIDIxcHhcclxuXHQ3OiAoJHNwYWNlciAqIDEuNzUpLCBcdC8vIDI0LjVweFxyXG5cdDg6ICgkc3BhY2VyICogMiksICAgIFx0Ly8gMjhweFxyXG5cdDk6ICgkc3BhY2VyICogMi4yNSksIFx0Ly8gMzEuNXB4XHJcblx0MTA6ICgkc3BhY2VyICogMi41KSwgXHQvLyAzNXB4XHJcblx0MTE6ICgkc3BhY2VyICogMi43NSksXHQvLyAzOC41cHhcclxuXHQxMjogKCRzcGFjZXIgKiAzKSwgICBcdC8vIDQycHhcclxuXHQxMzogKCRzcGFjZXIgKiAzLjI1KSxcdC8vIDQ1LjVweFxyXG5cdDE0OiAoJHNwYWNlciAqIDMuNSksIFx0Ly8gNDlweFxyXG5cdDE1OiAoJHNwYWNlciAqIDMuNzUpLCBcdC8vIDUyLjVweFxyXG5cdDE2OiAoJHNwYWNlciAqIDQpLCBcdFx0Ly8gNTVweFxyXG5cdDE3OiAoJHNwYWNlciAqIDQuMjUpLCBcdC8vIDU4LjVweFxyXG5cdDE4OiAoJHNwYWNlciAqIDQuNSksIFx0Ly8gNjJweFxyXG5cdDE5OiAoJHNwYWNlciAqIDQuNzUpLCBcdC8vIDY1LjVweFxyXG5cdDIwOiAoJHNwYWNlciAqIDUpLCBcdFx0Ly8gNjlweFxyXG5cdDIxOiAoJHNwYWNlciAqIDUuMjUpLFx0Ly8gNzMuNXB4XHJcblx0MjI6ICgkc3BhY2VyICogNS41KSwgXHQvLyA3N3B4XHJcblx0MjM6ICgkc3BhY2VyICogNS43NSksIFx0Ly8gODAuNXB4XHJcblx0MjQ6ICgkc3BhY2VyICogNiksIFx0XHQvLyA4NHB4XHJcblx0MjU6ICgkc3BhY2VyICogNi4yNSksIFx0Ly8gODcuNXB4XHJcblx0MjY6ICgkc3BhY2VyICogNi41KSwgXHQvLyA5MXB4XHJcblx0Mjc6ICgkc3BhY2VyICogNi43NSksIFx0Ly8gOTQuNXB4XHJcblx0Mjg6ICgkc3BhY2VyICogNyksIFx0XHQvLyA5OXB4XHJcblx0Mjk6ICgkc3BhY2VyICogNy4yNSksICAgLy8gMTAyLjVweFxyXG5cdDMwOiAoJHNwYWNlciAqIDcuNSksIFx0Ly8gMTA2cHhcclxuXHQzMTogKCRzcGFjZXIgKiA3Ljc1KSwgXHQvLyAxMDkuNXB4XHJcblx0MzI6ICgkc3BhY2VyICogOCksIFx0XHQvLyAxMTNweFxyXG5cdDMzOiAoJHNwYWNlciAqIDguMjUpLCBcdC8vIDExNi41cHhcclxuXHQzNDogKCRzcGFjZXIgKiA4LjUpLCBcdC8vIDEyMHB4XHJcblx0MzU6ICgkc3BhY2VyICogOC43NSksIFx0Ly8gMTIzLjVweFxyXG5cdDM2OiAoJHNwYWNlciAqIDkpLCBcdFx0Ly8gMTI3cHhcclxuXHQzNzogKCRzcGFjZXIgKiA5LjI1KSwgICAgLy8gMTMwLjVweFxyXG5cdDQ4OiAoJHNwYWNlciAqIDkuNSksIFx0Ly8gMTM0cHhcclxuXHQzOTogKCRzcGFjZXIgKiA5Ljc1KSwgXHQvLyAxMzcuNXB4XHJcbiAgICA0MDogKCRzcGFjZXIgKiAxMCksIFx0Ly8gMTQwcHhcclxuKTtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG4kbGluZS1oZWlnaHQteGw6XHRcdFx0XHRcdFx0XHRcdFx0MS44ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxLjUgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDEuMzUgIWRlZmF1bHQ7XHJcblxyXG4kY29tcG9uZW50LWxpZ2h0LXN0eWxlLW9wYWNpdHk6ICAgICAgICAgICAgICAgICBcdDAuMSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbi8vIEJveCBzaGFkb3dcclxuJGJveC1zaGFkb3cteHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMC4yNXJlbSAwLjVyZW0gMCByZ2JhKCRibGFjaywgMC4wNSk7XHJcbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDAgLjFyZW0gMXJlbSAwLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIC41cmVtIDEuNXJlbSAwLjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xyXG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIDFyZW0gMnJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4vLyBCb3JkZXIgUmFkaXVlc1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICBcdFx0XHRcdFx0XHQuMjhyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdC40MnJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgXHRcdFx0XHRcdFx0Ljg1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy14bDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBCb3JkZXIgc2V0dGluZ3NcclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcclxuXHJcbi8vIEhvdmVyIGJhY2tncm91bmQgY29sb3JcclxuJGhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBBY3RpdmViYWNrZ3JvdW5kIGNvbG9yXHJcbiRhY3RpdmUtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGdyYXktMTAwLCAxJSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gT3B0aW9uc1xyXG4vL1xyXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXHJcbiRlbmFibGUtcm91bmRlZDogXHRcdFx0XHRcdFx0XHRcdFx0dHJ1ZSAhZGVmYXVsdDtcclxuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG4vLyBsZzogMTAwMHB4LFxyXG4vLyAgIHhsOiAxMjAwcHgsXHJcbi8vICAgeHhsOiAxNDAwcHhcclxuLy8gbGc6IDE1MDBweCxcclxuLy8gICB4bDogMTcwMHB4LFxyXG4vLyAgIHh4bDogMTkwMHB4IFxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDEwMDBweCxcclxuICB4bDogMTIwMHB4LFxyXG4gIHh4bDogMTQwMHB4IC8vIGN1c3RvbSBicmVha3BvaW50XHJcbikgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gR3JpZCBjb250YWluZXJzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA1NDBweCxcclxuICBtZDogNzIwcHgsXHJcbiAgbGc6IDE1MDBweCxcclxuICB4bDogMTcwMHB4LFxyXG4gIHh4bDogMTkwMHB4IC8vIGN1c3RvbSBicmVha3BvaW50XHJcbikgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxMiAhZGVmYXVsdDtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgXHRcdFx0XHRcdFx0MjVweCAhZGVmYXVsdDtcclxuJGdyaWQtZGl2aWRlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG5cclxuLy8gQm9keVxyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4vLyBGb250IGZhbWlseVxyXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICBcdFx0XHRcdFx0XHRSb2JvdG8sIENvbGZheCxSZWN0YSwgXCJzYW5zLXNlcmlmXCIgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTNweGBcclxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICBcdCBcdFx0XHRcdFx0JGZvbnQtc2l6ZS1iYXNlICogMS4wOCAhZGVmYXVsdDsgICAvLyAxNC4wNHB4XHJcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRmb250LXNpemUtYmFzZSAqIC45MjUgIWRlZmF1bHQ7ICAgLy8gMTIuMDI1cHhcclxuJGZvbnQtc2l6ZS14czogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1iYXNlICogLjggIWRlZmF1bHQ7ICAgICAvLyAxMC40cHhcclxuXHJcbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAgICAgIC8vIDI2cHhcclxuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7ICAgLy8gMjIuNzVweFxyXG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAgICAvLyAxOS41cHhcclxuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMzUgIWRlZmF1bHQ7ICAgLy8gMTcuNTVweFxyXG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgICAvLyAxNi4yNXB4XHJcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjE3NSAhZGVmYXVsdDsgIC8vIDE1LjI3NXB4XHJcblxyXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuXHJcbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7ICAvLyA3MS41cHhcclxuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDsgIC8vIDU4LjVweFxyXG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0OyAgLy8gNDUuNXB4XHJcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7ICAvLyAzMi41cHhcclxuJGRpc3BsYXk1LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuMjVyZW0gIWRlZmF1bHQ7IC8vIDI5LjVweFxyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplczogKFxyXG4gICAgZm9udC1zaXplLWgxOiAkaDEtZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWgyOiAkaDItZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWgzOiAkaDMtZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWg0OiAkaDQtZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWg1OiAkaDUtZm9udC1zaXplLFxyXG4gICAgZm9udC1zaXplLWg2OiAkaDYtZm9udC1zaXplLFxyXG4gICAgZGlzcGxheTE6ICRkaXNwbGF5MS1zaXplLFxyXG4gICAgZGlzcGxheTI6ICRkaXNwbGF5Mi1zaXplLFxyXG4gICAgZGlzcGxheTM6ICRkaXNwbGF5My1zaXplLFxyXG4gICAgZGlzcGxheTQ6ICRkaXNwbGF5NC1zaXplLFxyXG4gICAgZGlzcGxheTU6ICRkaXNwbGF5NS1zaXplXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XHJcblxyXG4vLyBGb250IFdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogICAgICAgICBcdFx0XHRcdFx0XHRsaWdodGVyICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICBcdFx0XHRcdFx0XHQzMDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIFx0XHRcdFx0XHRcdDQwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgXHRcdFx0XHRcdFx0NTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBcdFx0XHRcdFx0XHQ2MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkZXN0OiAgICAgICAgICBcdFx0XHRcdFx0XHQ3MDAgIWRlZmF1bHQ7XHJcblxyXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFRyYW5zaXRpb25cclxuJHRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRhbGwgMC4xNXMgZWFzZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0cmFuc2l0aW9uLWxpbms6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdHJhbnNpdGlvbi1pbnB1dDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJHByaW1hcnksIDE1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XHJcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXHJcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6ICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vXHJcbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjY1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgMC44MjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjQycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIFx0XHRcdFx0XHRcdC42ICFkZWZhdWx0O1xyXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHRjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4zcyBlYXNlLWluLW91dCAhZGVmYXVsdDsvLyBDdXN0b20gdmFyaWFibGVcclxuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgXHRcdFx0XHRcdFx0bm9ybWFsICFkZWZhdWx0O1xyXG4kYnRuLXNlY29uZGFyeS1jb2xvcjpcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiRidG4tc2Vjb25kYXJ5LWhvdmVyLWJnLWNvbG9yOlx0XHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGJ0bi1pY29uLXNpemUteHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI0cHggIWRlZmF1bHQ7IC8vY3VzdG9tIHBhcmFtZXRlclxyXG5cclxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgIFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgXHRcdFx0JHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjpcdFx0XHRcdFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOlx0XHRcdFx0XHRcdFx0bGlnaHRlbigkcHJpbWFyeSwgMTAlKTtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICBcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRpbnB1dC1yZWFkb25seS1iZzogICAgICAgICAgICAgICAgICAgICBcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5wdXQtZ3JvdXAtaWNvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICBcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICBcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgIFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICBcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgIFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgXHRcdFx0JGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtc29saWQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwOyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGlucHV0LXNvbGlkLWJnLWZvY3VzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRpbnB1dC1zb2xpZC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtcGxhY2Vob2xkZXItY29sb3I7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuJGlucHV0LXNvbGlkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0JGRhcmstNzU7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybXNcclxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiRmb3JtLWxhYmVsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tbGFiZWwtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS1mZWVkYmFjay1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tdGV4dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLXRleHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS12YWxpZGF0aW9uLWlucHV0LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgZmFsc2U7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFRhYmxlXHJcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0JHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgICBcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICAgXHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kdGFibGUtaGVhZC1mb250LXNpemU6ICAgICAgICAgICAgIFx0XHRcdFx0XHQxcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWhlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICBcdFx0XHRcdFx0NjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgIFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGRhcmsgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIFx0XHRcdFx0XHRcdHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICBcdFx0XHRcdFx0XHQkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICBcdFx0XHRcdFx0XHRyZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIFx0XHRcdFx0XHRcdGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLXRleHQtdHJhbnNmb3JtOiAgICAgICAgICAgICAgICAgdXBwZXJjYXNlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgIDYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICA2MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLWxldHRlci1zcGFjaW5nOiAgICAgICAgICAgICAgICAgMC4xcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIENhcmRcclxuJGNhcmQtYm94LXNoYWRvdzogXHRcdFx0XHRcdFx0XHRcdFx0MHB4IDBweCAzMHB4IDBweCByZ2JhKDgyLDYzLDEwNSwwLjA1KSAhZGVmYXVsdDsgLy8gY2FyZCBjdXN0b20gc2hhZG93XHJcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQycmVtICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQyLjI1cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICBcdFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtaGVhZGVyLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjYXJkLWhlYWRlci1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0XHQ3MHB4ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtc3RpY2t5LWhlYWRlci1iZzogICBcdFx0XHRcdFx0XHQgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtc3RpY2t5LWhlYWRlci1oZWlnaHQ6IFx0XHRcdFx0XHRcdDcwcHggIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY2FyZC1zdGlja3ktemluZGV4OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAxICAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjYXJkLXN0aWNreS1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggMXB4IDE1cHggMXB4IHJnYmEoNjksIDY1LCA3OCwgMC4xKSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBNb2RhbHNcclxuXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgIFx0XHRcdFx0XHQxLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXHJcbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIFx0XHRcdFx0LjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICBcdFx0XHRcdC41cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICBcdFx0XHRcdDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBcdFx0XHRcdG51bGwgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICBcdFx0XHRcdHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgIFx0XHRcdFx0MCAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtaW5uZXItYm9yZGVyLXJhZGl1czogXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3c6ICAgICAgIFx0XHRcdFx0ICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICBcdFx0XHRcdDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgXHRcdFx0XHRcdDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgXHRcdCBcdFx0XHQkYmxhY2sgIWRlZmF1bHQ7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIFx0XHRcdFx0LjIgIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIFx0XHRcdFx0JGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgXHRcdFx0IFx0JGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgXHRcdFx0XHQxcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgIFx0XHRcdFx0MXB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICBcdFx0XHRcdDEuNXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgXHRcdFx0XHQxLjc1cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICBcdFx0XHRcdCRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcblxyXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHQgXHRcdFx0MTE0MHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDgwMHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDUwMHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDMwMHB4ICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFBhZ2luYXRpb25cclxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHQkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgXHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgXHQgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgIFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG4kZHJvcGRvd24tYm94LXNoYWRvdzpcdFx0XHRcdFx0XHRcdFx0MHB4IDBweCA1MHB4IDBweCByZ2JhKDgyLDYzLDEwNSwgMC4xNSkgIWRlZmF1bHQ7XHJcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0OTggIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbWVudS13aWR0aHM6IChcclxuXHRzbTogMTc1cHgsXHJcblx0bWQ6IDI1MHB4LFxyXG5cdGxnOiAzNTBweCxcclxuXHR4bDogNDAwcHgsXHJcblx0eHhsOiA2MDBweFxyXG4pOyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcblxyXG4vLyBQb3BvdmVyc1xyXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDAuOXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQyNzZweCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgXHRcdFx0XHQxcHggIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgXHRcdFx0XHQwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4xNSkgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgXHRcdFx0XHQkZGFyayAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgXHRcdFx0XHQ1MDAgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuJHBvcG92ZXItaGVhZGVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgXHRcdFx0XHQxcmVtICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIFx0XHRcdFx0MXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgXHRcdFx0XHQxLjI1cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgIFx0XHRcdFx0JGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gVG9vbHRpcHNcclxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQwLjlyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIFx0XHRcdFx0MjAwcHggIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0I2ZmZmZmZiAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgXHRcdFx0XHQzcHggIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0MSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgXHRcdFx0XHQkcG9wb3Zlci1ib3gtc2hhZG93ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgXHRcdFx0XHQuNzVyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIFx0XHRcdFx0MXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQwICFkZWZhdWx0O1xyXG5cclxuLy8gQ3VzdG9tIFRvYXN0c1xyXG4kdG9hc3QtemluZGV4Olx0XHRcdFx0XHRcdFx0XHRcdFx0JHppbmRleC1kcm9wZG93biArIDEwMCAhZGVmYXVsdDtcclxuJHRvYXN0LXNwYWNpbmc6XHRcdFx0XHRcdFx0XHRcdFx0XHQycmVtICAhZGVmYXVsdDtcclxuJHRvYXN0LXdpZHRoOiBcdFx0XHRcdFx0XHRcdFx0XHRcdDM1MHB4ICFkZWZhdWx0O1xyXG4kdG9hc3QtYm94LXNoYWRvdzpcdFx0XHRcdFx0XHRcdFx0XHQkZHJvcGRvd24tYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1jb2xvcjogXHRcdFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IFx0XHRcdFx0XHQjZmZmICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjpcdFx0XHRcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBQcm9ncmVzcyBiYXJzXHJcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtaGVpZ2h0LXhzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByb2dyZXNzLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNzVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJvZ3Jlc3MtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAgICAgICAgICAgICAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBCYWRnZXNcclxuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQuNWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdC43NWVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDg1JSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBDb2RlXHJcbiRjb2RlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY29kZS1wYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4xNXJlbSAwLjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIE1vZGFsc1xyXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgICAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC10aXRsZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGFyayAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4zcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLXNtYWxsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLXNtYWxsLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgIDQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1zbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1jbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1jbG9zZS1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG5cclxuLy8gQWxlcnRzXHJcbi8vXHJcbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxyXG4kYWxlcnQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRjYXJkLWJveC1zaGFkb3cgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIE5hdnNcclxuXHJcbiRuYXYtbGluay1weDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjVyZW07XHJcbiRuYXYtbGluay1weTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjc1cmVtO1xyXG4kbmF2LWJ0bi1weDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcclxuJG5hdi1zZWN0aW9uLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXJlbTtcclxuJG5hdi1lbGVtLXNwYWNlOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMjVyZW07XHJcblxyXG4kbmF2LWxpbmstYmctaG92ZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwO1xyXG4kbmF2LWxpbmstYmctYWN0aXZlOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwO1xyXG5cclxuJG5hdi1oZWFkZXItcHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW07XHJcbiRuYXYtZm9vdGVyLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xyXG5cclxuJG5hdi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW07XHJcbiRuYXYtaWNvbi1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjI1cmVtO1xyXG4kbmF2LWljb24td2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMnJlbTtcclxuIiwiLy9cclxuLy8gU1ZHIEljb25cclxuLy9cclxuXHJcblxyXG5AbWl4aW4gc3ZnLWljb24tY29sb3IoJGNvbG9yLCAkaW1wb3J0YW50OiBmYWxzZSkge1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBnIHtcclxuICAgICAgICAgICAgW2ZpbGxdIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgZmlsbDogJGNvbG9yIHZhbHVlaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBnIHtcclxuICAgICAgICAgICAgICAgIFtmaWxsXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdmctaWNvbi10cmFuc2l0aW9uKCkge1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBnIHtcclxuICAgICAgICAgICAgW2ZpbGxdIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gc3ZnLWljb24tc2l6ZSgkc2l6ZSwgJGltcG9ydGFudDogZmFsc2UpIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAkc2l6ZSB2YWx1ZWlmKCRpbXBvcnRhbnQsICFpbXBvcnRhbnQsIG51bGwpO1xyXG4gICAgICAgIHdpZHRoOiAkc2l6ZSB2YWx1ZWlmKCRpbXBvcnRhbnQsICFpbXBvcnRhbnQsIG51bGwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gc3ZnLWxvZ28tY29sb3IoJGNvbG9yLCAkaW1wb3J0YW50OiBmYWxzZSl7XHJcbiAgICBzdmd7XHJcbiAgICAgICAgcGF0aHtcclxuICAgICAgICAgICAgZmlsbDogJGNvbG9yIHZhbHVlaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy9cclxuLy8gVG8gbWFrZSBmdXR1cmUgdXBkYXRlcyBlYXNpZXIgY29uc2lkZXIgb3ZlcnJpZGluZyB0aGUgZ2xvYmFsIHZhcmlhYmxlcyBmcm9tIF92YXJpYWJsZXMuYm9vdHN0cmFwLnNjc3MgYW5kIF92YXJpYWJsZXMuY3VzdG9tLnNjc3MgZm9yIGN1cnJlbnQgZGVtbyBpbiB0aGlzIGZpbGUuXHJcbi8vIE5vdGUgdGhhdCB0aGlzIGZpbGUgaXMgaW5jbHVkZWQgZmlyc3QgYW5kIHZhcmlhYmxlcyBkZWZpbmVkIGluIF92YXJpYWJsZXMuYm9vdHN0cmFwLnNjc3MgYW5kIF92YXJpYWJsZXMuY3VzdG9tLnNjc3NcclxuLy8gYXJlIG5vdCBhY2Nlc3NpYmxlIGluIHRoaXMgZmlsZSBidXQgeW91IGNhbiBvdmVycmlkZSBhbnkgZ2xvYmFsIHZhcmlhYmxlIGFzIHNob3duIGJlbG93OlxyXG4vL1xyXG5cclxuLy8gVGhlbWUgY29sb3JzXHJcbi8vIE92ZXJyaWRlIHByaW1hcnkgY29sb3IgdmFyaWFudHNcclxuJHByaW1hcnk6ICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMwMDVmOTk7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kcHJpbWFyeS1ob3ZlcjogICAgXHRcdFx0XHRcdFx0XHRcdFx0IzE4N0RFNDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcmltYXJ5LWxpZ2h0OiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRTFGMEZGOyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByaW1hcnktaW52ZXJzZTogIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkZGRkY7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXHJcbi8vIFdpemFyZCAzXHJcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXHJcbi8vXHJcblxyXG4vLyBJbml0aWFsaXphdGlvbiBvZiBnbG9iYWwgdmFyaWFibGVzLCBtaXhpbnMgYW5kIGZ1bmN0aW9uc1xyXG5AaW1wb3J0IFwiLi4vLi4vaW5pdFwiO1xyXG5cclxuLy8gQmFzZVxyXG4ud2l6YXJkLndpemFyZC0zIHtcclxuXHQvLyBOYXZcclxuXHQud2l6YXJkLW5hdiB7XHJcblx0XHQvLyBTdGVwc1xyXG5cdFx0LndpemFyZC1zdGVwcyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcblx0XHRcdC8vIFN0ZXBcclxuXHRcdFx0LndpemFyZC1zdGVwIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDJyZW0gMC41cmVtO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG5cdFx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDJyZW07XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWJhciB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogNHB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGdyYXktMjAwO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0cHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JltkYXRhLXdpemFyZC1zdGF0ZT1cImN1cnJlbnRcIl0ge1xyXG5cdFx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkcHJpbWFyeTtcclxuXHJcblx0XHRcdFx0XHRcdC53aXphcmQtYmFyIHtcclxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBwb3J0cmFpdCB0YWJsZXQgYW5kIG1vYmlsZSBtb2RlXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG5cdC53aXphcmQud2l6YXJkLTMge1xyXG5cdFx0Ly8gTmF2XHJcblx0XHQud2l6YXJkLW5hdiB7XHJcblx0XHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG5cdFx0XHRcdC53aXphcmQtc3RlcCB7XHJcblx0XHRcdFx0XHRmbGV4OiAwIDAgMTAwJTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0XHRcdGZsZXg6IDAgMCAxMDAlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxcmVtIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vXHJcbi8vIFdpemFyZCAyXHJcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXHJcbi8vXHJcblxyXG4vLyBJbml0aWFsaXphdGlvbiBvZiBnbG9iYWwgdmFyaWFibGVzLCBtaXhpbnMgYW5kIGZ1bmN0aW9uc1xyXG5AaW1wb3J0IFwiLi4vLi4vaW5pdFwiO1xyXG5cclxuXHJcbi8vIFZhcmlhYmxlc1xyXG4kd2l6YXJkLW5hdi13aWR0aDogNDAwcHg7XHJcbiR3aXphcmQtbmF2LXdpZHRoLXNtOiAzMjVweDtcclxuXHJcbi8vIEJhc2VcclxuLndpemFyZC53aXphcmQtMiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0Ly8gTmF2XHJcblx0LndpemFyZC1uYXYge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGZsZXg6IDAgMCAkd2l6YXJkLW5hdi13aWR0aDtcclxuXHRcdHdpZHRoOiAkd2l6YXJkLW5hdi13aWR0aDtcclxuXHRcdG1heC13aWR0aDogMTAwJTtcclxuXHJcblx0XHQvLyBTdGVwc1xyXG5cdFx0LndpemFyZC1zdGVwcyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHRcdFx0Ly8gU3RlcFxyXG5cdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcclxuXHJcblx0XHRcdFx0LndpemFyZC13cmFwcGVyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQud2l6YXJkLWljb24ge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyLjVyZW07XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWxpbms7XHJcblxyXG5cdFx0XHRcdFx0aSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuc3ZnLWljb24ge1xyXG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBzdmctaWNvbi1jb2xvcigkdGV4dC1tdXRlZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC10aXRsZSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkZGFyaztcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1kZXNjIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICRkYXJrLTUwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndpemFyZC1hcnJvdyB7XHJcblx0XHRcdFx0XHRjb2xvcjogJGRhcmstNTA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMTVyZW07XHJcblxyXG5cdFx0XHRcdFx0Ji5sYXN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJjdXJyZW50XCJdIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRncmF5LTEwMDtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWxpbms7XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1pY29uIHtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcclxuXHJcblx0XHRcdFx0XHRcdGkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQuc3ZnLWljb24ge1xyXG5cdFx0XHRcdFx0XHRcdEBpbmNsdWRlIHN2Zy1pY29uLWNvbG9yKCRwcmltYXJ5LCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItbGVmdC1jb2xvcjogJGdyYXktMTAwO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItd2lkdGg6IDFyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBCb2R5XHJcblx0LndpemFyZC1ib2R5IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxufVxyXG5cclxuLy8gQ3VzdG9tIGRlc2t0b3AgcmFuZ2VcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKGxnLCB4bCkge1xyXG5cdC8vIEJhc2VcclxuXHQud2l6YXJkLndpemFyZC0yIHtcclxuXHRcdC8vIE5hdlxyXG5cdFx0LndpemFyZC1uYXYge1xyXG5cdFx0XHRmbGV4OiAwIDAgJHdpemFyZC1uYXYtd2lkdGgtc207XHJcblx0XHRcdHdpZHRoOiAkd2l6YXJkLW5hdi13aWR0aC1zbTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIFRhYmxldCBhbmQgbW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcblx0LndpemFyZC53aXphcmQtMiB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHJcblx0XHQvLyBOYXZcclxuXHRcdC53aXphcmQtbmF2IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG5cclxuXHRcdFx0LndpemFyZC1zdGVwc3tcclxuXHRcdFx0XHQud2l6YXJkLXN0ZXB7XHJcblx0XHRcdFx0XHQmW2RhdGEtd2l6YXJkLXN0YXRlPVwiY3VycmVudFwiXSB7XHJcblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IG5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBCb2R5XHJcblx0XHQud2l6YXJkLWJvZHkge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-form_product-form_module_ts.js.map