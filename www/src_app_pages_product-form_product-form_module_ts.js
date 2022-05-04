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
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-form.component.html */ 77344);
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
    constructor(router, location, cdRef, modalService, prodService, globalFun, auth, pageDataService, addonQuo, coverageQuo, alert, downloadService, masterServer, numberPipe, datePipe, ngZone) {
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
        this.ngZone = ngZone;
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
                    if (col.type == "input" && col.subType == "currency") {
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
            this.ngZone.run(() => {
                this.location.back();
            });
            // this.location.back()
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
        this.alert.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                let activeForm = this.formData[this.activePage];
                this.pageDataService.deleteData(activeForm.tableName, data.refId, activeForm.id).toPromise().then((res) => {
                    if (res) {
                        this.tempData[activeForm.tableName + activeForm.id].splice(index, 1);
                        this.cdRef.detectChanges();
                        this.alert.activate('This record was deleted', 'Success Message').then(result => {
                        });
                    }
                });
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
                    "type": 'quotation',
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
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.NgZone }
];
ProductFormComponent.propDecorators = {
    dynForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild, args: [_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormComponent,] }],
    staticPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild, args: [_static_pages_static_pages_directive__WEBPACK_IMPORTED_MODULE_15__.StaticPageDirective,] }]
};
ProductFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
        selector: 'app-product-form',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\" *ngIf=\"item\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b\">\n      <div class=\"card-body\">\n        <div style=\"display:flex\">\n          <div class=\"top-box\" style=\"margin-left: 0px\">\n            PRODUCT <br>\n            <span>{{item.name}}</span>\n          </div>\n          <!-- <div class=\"top-box\">\n            Customer <br>\n            <span>Jimmy Tao</span>\n          </div> -->\n          <div class=\"top-box\">\n            PREMIUM <br>\n            <span>{{premiumAmt}}</span>\n          </div>\n          <!-- <div class=\"top-box\">\n            STATUS <br>\n            <span>Valid</span>\n          </div> -->\n          <!-- <div class=\"top-box\">\n            Channel <br>\n            <span>Gary Guo</span>\n          </div> -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b\">\n      <!-- <div class=\"card-header\">\n        <div class=\"card-title\">\n          <h3 class=\"card-label\">{{item.name}}</h3>\n        </div>\n      </div> -->\n      <div class=\"card-body customer-card-body\" *ngIf=\"formData.length > 0\">\n        <ng-container *ngIf=\"viewUI == 'ui3' \">\n          <div class=\"wizard wizard-3\">\n            <div class=\"kt-grid__item\">\n              <!--begin: Form Wizard Nav -->\n              <div class=\"wizard-nav border-bottom mb-1 mb-lg-5\">\n                <div class=\"wizard-steps pt-8\">\n                  <ng-container *ngFor=\"let page of pageOrder;let i = index\">\n                    <!-- <a class=\"wizard-step\" href=\"javascript:;\"\n                      *ngIf=\"(page.id == 'coverage' && this.item.coverages.length > 0) || page.id == 'addon' && this.item.addOns.length > 0\"\n                      (click)=\"changePage(i)\">\n                      <div class=\"wizard-label\" [ngClass]=\"{'active': i == activePage, 'done' : i < activePage }\">\n                        <div class=\"wizard-title\"><span>{{i+1}}</span> {{page.pageTitle}}</div>\n                        <div class=\"wizard-bar\"></div>\n                      </div>\n                    </a> *ngIf=\"page.id != 'coverage' && page.id != 'addon' \"-->\n                    <a class=\"wizard-step\" href=\"javascript:;\" (click)=\"changePage(i)\">\n                      <div class=\"wizard-label\" [ngClass]=\"{'active': i == activePage, 'done' : i < activePage }\">\n                        <div class=\"wizard-title\"><span>{{i+1}}</span> {{page.pageTitle}}</div>\n                        <div class=\"wizard-bar\"></div>\n                      </div>\n                    </a>\n                  </ng-container>\n                </div>\n              </div>\n              <!--end: Form Wizard Nav -->\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"viewUI == 'ui1' \">\n          <div class=\"wizard wizard-1\" id=\"kt_wizard_v1\">\n            <!--begin: Form Wizard Nav -->\n            <div class=\"wizard-nav border-bottom\">\n              <div class=\"wizard-steps pt-8\">\n                <ng-container *ngFor=\"let page of pageOrder;let i = index\">\n                  <a class=\"wizard-step\" href=\"javascript:;\" (click)=\"changePage(i)\">\n                    <div class=\"wizard-label\" [ngClass]=\"{'active': i == activePage, 'done' : i < activePage }\">\n                      <i class=\"wizard-icon fa {{page.pageIcon}}\"></i>\n                      <h3 class=\"wizard-title\">{{i+1}}) {{page.pageTitle}}</h3>\n                    </div>\n                  </a>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"viewUI == 'ui2'\">\n          <div class=\"wizard wizard-2\" id=\"kt_wizard_v2\">\n            <div class=\"wizard-nav border-right pt-8\">\n              <!--begin: Form Wizard Nav -->\n              <div class=\"wizard-steps\">\n                <ng-container *ngFor=\"let page of pageOrder;let i = index\">\n                  <a class=\"wizard-step\" href=\"javascript:;\" (click)=\"changePage(i)\">\n                    <div class=\"wizard-wrapper\" [ngClass]=\"{'active': i == activePage, 'done' : i < activePage }\">\n                      <div class=\"wizard-icon\">\n                        <span class=\"fa {{page.pageIcon}}\"></span>\n                      </div>\n                      <div class=\"wizard-label\">\n                        <div class=\"wizard-title\"> {{page.pageTitle}}</div>\n                      </div>\n                    </div>\n                  </a>\n                </ng-container>\n              </div>\n              <!--end: Form Wizard Nav -->\n            </div>\n            <div class=\"wizard-body py-8 px-8 py-lg-20 px-lg-10\">\n              <!-- <hr> -->\n              <ng-container *ngIf=\"pageOrder[activePage].type == 'dyn' \">\n                <ng-container *ngIf=\"formData[activePage].pageType != 'table' \">\n                  <dynamic-form #dynForm [config]=\"formData[activePage].controls\" (submit)=\"saveTemp($event)\"\n                    [editStage]=\"false\"\n                    [tempData]=\"tempData[formData[activePage].tableName+formData[activePage].id] || {}\"></dynamic-form>\n                </ng-container>\n                <ng-container *ngIf=\"formData[activePage].pageType == 'table' \">\n                  <div class=\"form-group\">\n                    <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"reset()\">Reset Data</button> -->\n                    <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"newData()\">Add New Data</button>\n                  </div>\n                  <hr>\n                  <div class=\"table-responsive angular-bootstrap-table\">\n                    <table class=\"table table-head-custom table-vertical-center\">\n                      <thead>\n                        <tr>\n                          <th>NO</th>\n                          <ng-container *ngFor=\"let item of tableReform\">\n                            <th>{{item.title}}</th>\n                          </ng-container>\n                          <th>Action</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <ng-container *ngIf=\"tempData[formData[activePage].tableName+formData[activePage].id]\">\n                          <tr\n                            *ngFor=\"let item of tempData[formData[activePage].tableName+formData[activePage].id];let i = index\">\n                            <td>{{i+1}}</td>\n                            <ng-container *ngFor=\"let control of formData[activePage].controls\">\n\n                              <td *ngIf=\"control.input != 'file'\">{{getOtherData(control.cols,item) }}</td>\n                              <td *ngIf=\"control.input == 'file'\">\n                                <a href=\"javascript:;\" (click)=\"download(control.cols,item)\">\n                                  {{getOtherData(control.cols,item) }}\n                                </a>\n                              </td>\n                            </ng-container>\n                            <td style=\"white-space: nowrap;\">\n                              <a title=\"Edit Data\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm mx-1\"\n                                (click)=\"newData(item,i)\">\n                                <span [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\" [cacheSVG]=\"true\"\n                                  class=\"svg-icon svg-icon-md svg-icon-primary\">\n                                </span>\n                              </a>\n                              <a title=\"Delete Data\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm\"\n                                (click)=\"deleteData(i,item)\">\n                                <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\n                                  class=\"svg-icon svg-icon-md svg-icon-danger\">\n                                </span>\n                              </a>\n                            </td>\n                          </tr>\n                        </ng-container>\n                      </tbody>\n                    </table>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"formData[activePage].pageType != 'table'\">\n                  <hr>\n                  <div class=\"row\">\n                    <div app-button-box *ngFor=\"let contact of formData[activePage].buttons; let i = index\"\n                      [config]=\"contact\" (eventE)=\"clickBtn($event)\" [index]=\"i\" [editStage]=\"false\"\n                      class=\"col-xs-{{contact.size}} col-sm-{{contact.size}} {{contact.position}} mt-2\"></div>\n                  </div>\n                </ng-container>\n                <ng-container *ngIf=\"formData[activePage].pageType == 'table'\">\n                  <hr>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 mx-auto\">\n                      <button class=\"btn btn-block btn-secondary\" (click)=\"backPage(activePage)\"> Previous </button>\n                    </div>\n                    <div class=\"col-sm-6 mx-auto\">\n                      <button class=\"btn btn-block btn-primary\" (click)=\"nextPage(activePage)\"> Save & Next </button>\n                    </div>\n                  </div>\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"pageOrder[activePage].type == 'static'\">\n                <ng-container staticPage [compId]=\"pageOrder[activePage].id\" [product]=\"item\" [editData]=\"editData\"\n                  [resourcesId]=\"resourceId\" [premiumAmt]=\"premiumAmt\" (eventOut)=\"staticEvent($event)\">\n                </ng-container>\n              </ng-container>\n              <!-- <ng-container *ngIf=\"pageOrder[activePage].id == 'addon'\">\n                <table class=\"table table-bordered\">\n                  <thead>\n                    <tr>\n                      <th>\n                        AddOn\n                      </th>\n                      <th *ngIf=\"addon.isSum\">\n                        Sum Insured\n                      </th>\n                      <th *ngIf=\"addon.isUnit\">\n                        Unit\n                      </th>\n                      <th *ngIf=\"addon.isPremium\">\n                        Premium\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let addOn of item.addOns;let i = index\">\n                      <td>{{addOn.description}}</td>\n                      <td *ngIf=\"addOn.sumInsured\">\n                        <ng-container *ngIf=\"!addOn.sumInsuredStr\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].sum\">\n                        </ng-container>\n                        <ng-container *ngIf=\"addOn.sumInsuredStr\">\n                          {{addOnData[addOn.id].sum}}\n                        </ng-container>\n                      </td>\n                      <td *ngIf=\"addOn.unit\">\n                        <ng-container *ngIf=\"!addOn.unitStr\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].unit\">\n                        </ng-container>\n                        <ng-container *ngIf=\"addOn.unitStr\">\n                          {{addOnData[addOn.id].unit}}\n                        </ng-container>\n                      </td>\n                      <td *ngIf=\"addOn.premium\">\n                        <ng-container *ngIf=\"!addOn.premiumStr\">\n                          <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].premium\">\n                        </ng-container>\n                        <ng-container *ngIf=\"addOn.premiumStr\">\n                          {{addOnData[addOn.id].premium}}\n                        </ng-container>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-sm-3 mx-auto\">\n                    <button class=\"btn btn-block btn-default\" (click)=\"backPage(activePage)\"> Back </button>\n                  </div>\n                  <div class=\"col-sm-3 mx-auto\">\n                    <button class=\"btn btn-block btn-success\" (click)=\"nextPage(activePage,'addOns')\"> {{ activePage + 1\n                      < pageOrder.length ? \"Next\" : \"Save\" }} {{ activePage + 1 < pageOrder.length ? \"\" : (type |\n                        titlecase) }} </button>\n                  </div>\n                </div>\n              </ng-container> -->\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"viewUI != 'ui2'\">\n          <div class=\"pb-5\">\n            <div class=\"mt-5\"></div>\n            <!-- <hr> -->\n            <ng-container *ngIf=\"pageOrder[activePage].type == 'dyn' \">\n              <ng-container *ngIf=\"formData[activePage].pageType != 'table' \">\n                <dynamic-form #dynForm\n                  [tempData]=\"tempData[formData[activePage].tableName+formData[activePage].id] || {}\"\n                  [config]=\"formData[activePage].controls\" (submit)=\"saveTemp($event)\" [editStage]=\"false\">\n                </dynamic-form>\n              </ng-container>\n              <ng-container *ngIf=\"formData[activePage].pageType == 'table' \">\n                <div class=\"form-group\">\n                  <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"reset()\">Reset Data</button> -->\n                  <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"newData()\">Add New Data</button>\n                </div>\n                <hr>\n                <div class=\"table-responsive angular-bootstrap-table\">\n                  <table class=\"table table-head-custom table-vertical-center\">\n                    <thead>\n                      <tr>\n                        <th>NO</th>\n                        <ng-container *ngFor=\"let item of tableReform\">\n                          <th>{{item.title}}</th>\n                        </ng-container>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <ng-container *ngIf=\"tempData[formData[activePage].tableName+formData[activePage].id]\">\n                        <tr\n                          *ngFor=\"let item of tempData[formData[activePage].tableName+formData[activePage].id];let i = index\">\n                          <td>{{i+1}}</td>\n                          <ng-container *ngFor=\"let control of tableReform\">\n\n                            <td *ngIf=\"control.type != 'file'\">{{ getOtherData(control.cols,item) }}</td>\n                            <td *ngIf=\"control.type == 'file'\">\n                              <a href=\"javascript:;\" (click)=\"download(control.cols,item)\">\n                                {{getOtherData(control.cols,item)}}\n                              </a>\n                            </td>\n                          </ng-container>\n                          <td style=\"white-space: nowrap;\">\n                            <a title=\"Edit Data\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm mx-1\"\n                              (click)=\"newData(item,i)\">\n                              <span [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\" [cacheSVG]=\"true\"\n                                class=\"svg-icon svg-icon-md svg-icon-primary\">\n                              </span>\n                            </a>\n                            <a title=\"Delete UI\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm\"\n                              (click)=\"deleteData(i,item)\">\n                              <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\n                                class=\"svg-icon svg-icon-md svg-icon-danger\">\n                              </span>\n                            </a>\n                          </td>\n                        </tr>\n                      </ng-container>\n                    </tbody>\n                  </table>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"formData[activePage].pageType != 'table'\">\n                <hr>\n                <div class=\"row\">\n                  <div app-button-box *ngFor=\"let contact of formData[activePage].buttons; let i = index\"\n                    [config]=\"contact\" (eventE)=\"clickBtn($event)\" [index]=\"i\" [editStage]=\"false\"\n                    class=\"col-xs-{{contact.size}} col-sm-{{contact.size}} {{contact.position}} mt-2\"></div>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"formData[activePage].pageType == 'table'\">\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-sm-6 mx-auto\">\n                    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage(activePage)\"> Previous </button>\n                    <!-- <button class=\"btn btn-block btn-default\" (click)=\"backPage(activePage)\">  {{ activePage + 1 <\n                        pageOrder.length ? \"Next\" : \"Save\" }} {{ activePage + 1 < pageOrder.length ? \"\" : (type |\n                        titlecase) }}Back </button> -->\n                  </div>\n                  <div class=\"col-sm-6 mx-auto\">\n                    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage(activePage)\"> Save & Next </button>\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"pageOrder[activePage].type == 'static'\">\n              <ng-container staticPage [compId]=\"pageOrder[activePage].id\" [product]=\"item\" [editData]=\"editData\"\n                [resourcesId]=\"resourceId\" [premiumAmt]=\"premiumAmt\" (eventOut)=\"staticEvent($event)\">\n              </ng-container>\n            </ng-container>\n            <!-- <ng-container *ngIf=\"pageOrder[activePage].id == 'addon'\">\n              <table class=\"table table-bordered\">\n                <thead>\n                  <tr>\n                    <th>\n                      AddOn\n                    </th>\n                    <th *ngIf=\"addon.isSum\">\n                      Sum Insured\n                    </th>\n                    <th *ngIf=\"addon.isUnit\">\n                      Unit\n                    </th>\n                    <th *ngIf=\"addon.isPremium\">\n                      Premium\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let addOn of item.addOns;let i = index\">\n                    <td>{{addOn.description}}</td>\n                    <td *ngIf=\"addOn.sumInsured\">\n                      <ng-container *ngIf=\"!addOn.sumInsuredStr\">\n                        <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].sum\">\n                      </ng-container>\n                      <ng-container *ngIf=\"addOn.sumInsuredStr\">\n                        {{addOnData[addOn.id].sum}}\n                      </ng-container>\n                    </td>\n                    <td *ngIf=\"addOn.unit\">\n                      <ng-container *ngIf=\"!addOn.unitStr\">\n                        <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].unit\">\n                      </ng-container>\n                      <ng-container *ngIf=\"addOn.unitStr\">\n                        {{addOnData[addOn.id].unit}}\n                      </ng-container>\n                    </td>\n                    <td *ngIf=\"addOn.premium\">\n                      <ng-container *ngIf=\"!addOn.premiumStr\">\n                        <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"addOnData[addOn.id].premium\">\n                      </ng-container>\n                      <ng-container *ngIf=\"addOn.premiumStr\">\n                        {{addOnData[addOn.id].premium}}\n                      </ng-container>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-sm-3 mx-auto\">\n                  <button class=\"btn btn-block btn-default\" (click)=\"backPage(activePage)\"> Back </button>\n                </div>\n                <div class=\"col-sm-3 mx-auto\">\n                  <button class=\"btn btn-block btn-success\" (click)=\"nextPage(activePage,'addOns')\"> {{ activePage + 1 <\n                      pageOrder.length ? \"Next\" : \"Save\" }} {{ activePage + 1 < pageOrder.length ? \"\" : (type |\n                      titlecase) }} </button>\n                </div>\n              </div>\n            </ng-container> -->\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 37846:
/*!****************************************************************!*\
  !*** ./src/app/pages/product-form/product-form.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".wizard.wizard-1 .wizard-nav .wizard-steps {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  margin-left: 3.5rem;\n  margin-right: 3.5rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n  color: #3F4254;\n  font-size: 3.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #3F4254;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  color: #7E8299;\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin-top: 0.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n  color: #7E8299;\n  font-size: 1.15rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n  display: none;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon svg g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon svg:hover g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-title, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-title {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow svg g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow svg:hover g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n@media (min-width: 768px) and (max-width: 1199.98px) {\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n    font-size: 3.75rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n    margin-top: 0.75rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .wizard.wizard-1 .wizard-nav .wizard-steps {\n    flex-direction: column;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n    font-size: 1.5rem;\n    margin-right: 1.25rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n    font-size: 0.9rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n    display: block;\n  }\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps {\n  display: flex;\n  align-items: flex-end;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  margin-right: 1rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step:last-child {\n  margin-right: 0;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  color: #3F4254;\n  padding: 2rem 0.5rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title span {\n  font-size: 2rem;\n  margin-right: 0.5rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-bar {\n  height: 4px;\n  width: 100%;\n  background-color: #EBEDF3;\n  position: relative;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-bar:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 0;\n  background-color: transparent;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label {\n  color: #005f99;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-bar:after {\n  width: 100%;\n  background-color: #005f99;\n}\n@media (max-width: 999.98px) {\n  .wizard.wizard-3 .wizard-nav .wizard-steps {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step {\n    flex: 0 0 100%;\n    position: relative;\n    width: 100%;\n  }\n  .wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    justify-content: flex-start;\n    flex: 0 0 100%;\n    padding: 1rem 0;\n  }\n}\n.wizard.wizard-2 {\n  display: flex;\n}\n.wizard.wizard-2 .wizard-nav {\n  padding: 0;\n  flex: 0 0 400px;\n  width: 400px;\n  max-width: 100%;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step {\n  padding: 0.75rem 1.5rem;\n  position: relative;\n  border-radius: 0.5rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-wrapper {\n  display: flex;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon {\n  font-size: 2.5rem;\n  margin-right: 1.1rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon i {\n  color: #3F4254;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon .svg-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #3F4254;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon .svg-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  color: #181C32;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-desc {\n  color: #7E8299;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n  color: #7E8299;\n  font-size: 1.15rem;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n  display: none;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] {\n  background-color: #F3F6F9;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon {\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon i {\n  color: #005f99 !important;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon .svg-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99 !important;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon .svg-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current]:after {\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \" \";\n  height: 0;\n  width: 0;\n  border: solid transparent;\n  position: absolute;\n  border-left-color: #F3F6F9;\n  border-width: 1rem;\n}\n.wizard.wizard-2 .wizard-body {\n  width: 100%;\n}\n@media (min-width: 1000px) and (max-width: 1399.98px) {\n  .wizard.wizard-2 .wizard-nav {\n    flex: 0 0 325px;\n    width: 325px;\n  }\n}\n@media (max-width: 999.98px) {\n  .wizard.wizard-2 {\n    display: block;\n  }\n  .wizard.wizard-2 .wizard-nav {\n    width: 100%;\n    border-bottom: 1px solid #EBEDF3;\n  }\n  .wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current]:after {\n    content: none;\n  }\n  .wizard.wizard-2 .wizard-body {\n    width: 100%;\n  }\n}\n.active .wizard-title,\n.wizard-label.active,\n.done .wizard-title,\n.done {\n  color: #3699ff !important;\n}\n.active .wizard-title .wizard-icon,\n.wizard-label.active .wizard-icon,\n.done .wizard-title .wizard-icon,\n.done .wizard-icon {\n  color: #3699ff !important;\n}\n.wizard-title, .wizard-label {\n  max-width: 145px;\n}\n.wizard-steps {\n  align-items: flex-start !important;\n}\n.wizard-wrapper.active .wizard-icon,\n.wizard-wrapper.active .wizard-label, .wizard-wrapper.done .wizard-icon,\n.wizard-wrapper.done .wizard-label {\n  color: #3699ff !important;\n}\n.wizard-wrapper .wizard-icon,\n.wizard-wrapper .wizard-label {\n  color: #3F4254;\n}\n.wizard-step > .wizard-label {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n.wizard-step {\n  align-items: flex-start !important;\n}\n.wizard-icon {\n  font-size: 2rem !important;\n}\n.active .wizard-bar,\n.done .wizard-bar {\n  background-color: #3699ff !important;\n}\n.top-box {\n  color: #B5B5C3;\n  margin-left: 50px;\n}\n.top-box span {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhZ2VzL3dpemFyZC93aXphcmQtMS5zY3NzIiwicHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvY29tcG9uZW50cy9fdmFyaWFibGVzLmJvb3RzdHJhcC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvY29tcG9uZW50cy9taXhpbnMvX3N2Zy1pY29uLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9jb21wb25lbnRzL192YXJpYWJsZXMuZGVtby5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhZ2VzL3dpemFyZC93aXphcmQtMy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvd2l6YXJkL3dpemFyZC0yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUU7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNaSDtBRGVHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGVJO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtBQ2JMO0FEZUs7RUFDQyxjRVBnQjtFRlFoQixrQkFBQTtBQ2JOO0FFVlk7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUZZaEI7QUVOZ0I7RUFDSSwwQkFBQTtBRlFwQjtBRFdLO0VBQ0MsY0VoQmdCO0VGaUJoQixpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRGFJO0VBQ0MsY0V4QmlCO0VGeUJqQixrQkFBQTtBQ1hMO0FEYUs7RUFDQyxhQUFBO0FDWE47QURrQk07RUFDQyxjSWpEa0I7QUhpQ3pCO0FFakNZO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0FGbUNoQjtBRTdCZ0I7RUFDSSwwQkFBQTtBRitCcEI7QURjTTtFQUNDLGNJdkRrQjtBSDJDekI7QURlSztFQUNDLGNJM0RtQjtBSDhDekI7QUU5Q1k7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUZnRGhCO0FFMUNnQjtFQUNJLDBCQUFBO0FGNENwQjtBSTJCSTtFTEZDO0lBQ0MsbUJBQUE7SUFDQSxvQkFBQTtFQ3JCSjtFRHVCSTtJQUNDLGtCQUFBO0VDckJMO0VEd0JJO0lBQ0MsbUJBQUE7RUN0Qkw7RUQwQkc7SUFDQyxpQkFBQTtFQ3hCSjtBQUNGO0FJSkk7RUwrQ0Q7SUFDQyxzQkFBQTtFQ3hDRjtFRDJDRTtJQUNDLFdBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQ3pDSDtFRDJDRztJQUNDLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUN6Q0o7RUQyQ0k7SUFDQyxpQkFBQTtJQUNBLHFCQUFBO0VDekNMO0VENkNHO0lBQ0MsaUJBQUE7RUMzQ0o7RUQ2Q0k7SUFDQyxjQUFBO0VDM0NMO0FBQ0Y7QUs3RkU7RUFDQyxhQUFBO0VBQ0EscUJBQUE7QUwrRkg7QUs1Rkc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUw4Rko7QUs1Rkk7RUFDQyxlQUFBO0FMOEZMO0FLM0ZJO0VBQ0MsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNKWGlCO0VJWWpCLG9CQUFBO0FMNkZMO0FLM0ZLO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBTDZGTjtBSzNGTTtFQUNDLGVBQUE7RUFDQSxvQkFBQTtBTDZGUDtBS3pGSztFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJKbkNnQjtFSW9DaEIsa0JBQUE7QUwyRk47QUt6Rk07RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSx5R0p1WTZDO0FENVNwRDtBS3JGSztFQUNDLGNGOURtQjtBSHFKekI7QUtwRk87RUFDQyxXQUFBO0VBQ0EseUJGbkVpQjtBSHlKekI7QUl4Rkk7RUNpQkQ7SUFDQyxzQkFBQTtJQUNBLHVCQUFBO0VMMkVGO0VLekVFO0lBQ0MsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFTDJFSDtFS3pFRztJQUNDLDJCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUwyRUo7QUFDRjtBTXBLQTtFQUNDLGFBQUE7QU5zS0Q7QU1uS0M7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBWGlCO0VBWWpCLGVBQUE7QU5xS0Y7QU1sS0U7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBTm9LSDtBTWpLRztFQUNDLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlHTG1hZ0Q7QURoUXBEO0FNaktJO0VBQ0MsYUFBQTtBTm1LTDtBTWhLSTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5R0wwWitDO0FEeFBwRDtBTWhLSztFQUNDLGNMeEJnQjtBRDBMdEI7QUV6TVk7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUYyTWhCO0FFck1nQjtFQUNJLDBCQUFBO0FGdU1wQjtBTWpLSTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FObUtMO0FNaktLO0VBQ0MsY0xyQ2dCO0VLc0NoQixnQkFBQTtFQUNBLGlCQUFBO0FObUtOO0FNaEtLO0VBQ0MsY0w5Q2dCO0FEZ050QjtBTTlKSTtFQUNDLGNMbkRpQjtFS29EakIsa0JBQUE7QU5nS0w7QU05Sks7RUFDQyxhQUFBO0FOZ0tOO0FNNUpJO0VBQ0MseUJMakVpQjtFS2tFakIseUdMb1grQztBRHROcEQ7QU01Sks7RUFDQyx5R0xpWDhDO0FEbk5wRDtBTTVKTTtFQUNDLHlCQUFBO0FOOEpQO0FFOU9ZO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtBRmdQaEI7QUUxT2dCO0VBQ0ksMEJBQUE7QUY0T3BCO0FNN0pLO0VBQ0MsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkx6RmdCO0VLMEZoQixrQkFBQTtBTitKTjtBTXZKQztFQUNDLFdBQUE7QU55SkY7QUlwTEk7RUVvQ0Y7SUFDQyxlQUFBO0lBQ0EsWUFuSG1CO0VOdVFwQjtBQUNGO0FJMU1JO0VFNERIO0lBQ0MsY0FBQTtFTmlKQTtFTTlJQTtJQUNDLFdBQUE7SUFDQSxnQ0FBQTtFTmdKRDtFTTNJSTtJQUNDLGFBQUE7RU42SUw7RU1ySUE7SUFDQyxXQUFBO0VOdUlEO0FBQ0Y7QUE5UkE7Ozs7RUFJRSx5QkFBQTtBQWdTRjtBQTlSRTs7OztFQUNFLHlCQUFBO0FBbVNKO0FBaFNBO0VBQ0UsZ0JBQUE7QUFtU0Y7QUFqU0E7RUFDRSxrQ0FBQTtBQW9TRjtBQWpTRTs7O0VBRUUseUJBQUE7QUFxU0o7QUFqU0U7O0VBRUUsY0FBQTtBQW9TSjtBQWhTQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFtU0Y7QUFoU0E7RUFDRSxrQ0FBQTtBQW1TRjtBQWhTQTtFQUNFLDBCQUFBO0FBbVNGO0FBaFNBOztFQUVFLG9DQUFBO0FBbVNGO0FBaFNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBbVNGO0FBalNFO0VBQ0UsV0FBQTtBQW1TSiIsImZpbGUiOiJwcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vLyBXaXphcmQgMVxyXG4vLyBQYWdlcyBTQVNTIGZpbGVzIGFyZSBjb21waWxlZCBpbnRvIHNlcGFyYXRlIGNzcyBmaWxlc1xyXG4vL1xyXG5cclxuLy8gSW5pdGlhbGl6YXRpb24gb2YgZ2xvYmFsIHZhcmlhYmxlcywgbWl4aW5zIGFuZCBmdW5jdGlvbnNcclxuQGltcG9ydCBcIi4uLy4uL2luaXRcIjtcclxuXHJcbi8vIEJhc2VcclxuLndpemFyZC53aXphcmQtMSB7XHJcblx0Ly8gTmF2XHJcblx0LndpemFyZC1uYXYge1xyXG5cdFx0Ly8gU3RlcHNcclxuXHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cclxuXHRcdFx0Ly8gU3RlcFxyXG5cdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0Ly8gZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMy41cmVtO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtaWNvbiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzLjc1cmVtO1xyXG5cclxuXHRcdFx0XHRcdFx0QGluY2x1ZGUgc3ZnLWljb24tY29sb3IoJHRleHQtbXV0ZWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJGRhcmstNTA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwLjc1cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndpemFyZC1hcnJvdyB7XHJcblx0XHRcdFx0XHRjb2xvcjogJGRhcmstNTA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMTVyZW07XHJcblxyXG5cdFx0XHRcdFx0Ji5sYXN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJkb25lXCJdLFxyXG5cdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJjdXJyZW50XCJdIHtcclxuXHRcdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0XHQud2l6YXJkLWljb24ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkcHJpbWFyeTtcclxuXHJcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgc3ZnLWljb24tY29sb3IoJHByaW1hcnkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQud2l6YXJkLXRpdGxlIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogJHByaW1hcnk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC53aXphcmQtYXJyb3cge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJHByaW1hcnk7XHJcblxyXG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBzdmctaWNvbi1jb2xvcigkcHJpbWFyeSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBEZXNrdG9wIE1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKG1kLCBsZykge1xyXG5cdC53aXphcmQud2l6YXJkLTEge1xyXG5cdFx0Ly8gTmF2XHJcblx0XHQud2l6YXJkLW5hdiB7XHJcblx0XHRcdC8vIFN0ZXBzXHJcblx0XHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRcdC8vIFN0ZXBcclxuXHRcdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG5cclxuXHRcdFx0XHRcdFx0LndpemFyZC1pY29uIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDMuNzVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC53aXphcmQtdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuNzVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWFycm93IHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBUYWJsZSBhbmQgTW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcblx0LndpemFyZC53aXphcmQtMSB7XHJcblx0fVxyXG59XHJcblxyXG4vLyBNb2JpbGUgbW9kZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuXHQud2l6YXJkLndpemFyZC0xIHtcclxuXHRcdC8vIE5hdlxyXG5cdFx0LndpemFyZC1uYXYge1xyXG5cdFx0XHQvLyBTdGVwc1xyXG5cdFx0XHQud2l6YXJkLXN0ZXBzIHtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHRcdFx0XHQvLyBTdGVwXHJcblx0XHRcdFx0LndpemFyZC1zdGVwIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHJcblx0XHRcdFx0XHRcdC53aXphcmQtaWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1hcnJvdyB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cclxuXHRcdFx0XHRcdFx0Ji5sYXN0IHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvd2l6YXJkL3dpemFyZC0xXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvd2l6YXJkL3dpemFyZC0zXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvd2l6YXJkL3dpemFyZC0yXCI7XG5cbi5hY3RpdmUgLndpemFyZC10aXRsZSxcbi53aXphcmQtbGFiZWwuYWN0aXZlLFxuLmRvbmUgLndpemFyZC10aXRsZSxcbi5kb25lIHtcbiAgY29sb3I6ICMzNjk5ZmYgIWltcG9ydGFudDtcblxuICAud2l6YXJkLWljb24ge1xuICAgIGNvbG9yOiAjMzY5OWZmICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi53aXphcmQtdGl0bGUsLndpemFyZC1sYWJlbHtcbiAgbWF4LXdpZHRoOiAxNDVweDtcbn1cbi53aXphcmQtc3RlcHN7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG4ud2l6YXJkLXdyYXBwZXIuYWN0aXZlLC53aXphcmQtd3JhcHBlci5kb25lIHtcbiAgLndpemFyZC1pY29uLFxuICAud2l6YXJkLWxhYmVsIHtcbiAgICBjb2xvcjogIzM2OTlmZiAhaW1wb3J0YW50O1xuICB9XG59XG4ud2l6YXJkLXdyYXBwZXIge1xuICAud2l6YXJkLWljb24sXG4gIC53aXphcmQtbGFiZWwge1xuICAgIGNvbG9yOiAjM0Y0MjU0O1xuICB9XG59XG5cbi53aXphcmQtc3RlcD4ud2l6YXJkLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQgOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ud2l6YXJkLXN0ZXAge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4ud2l6YXJkLWljb24ge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSAud2l6YXJkLWJhcixcbi5kb25lIC53aXphcmQtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2OTlmZiAhaW1wb3J0YW50O1xufVxuXG4udG9wLWJveCB7XG4gIGNvbG9yICAgICAgOiAjQjVCNUMzO1xuICBtYXJnaW4tbGVmdDogNTBweDtcblxuICBzcGFuIHtcbiAgICBjb2xvciAgICAgICAgICA6ICMwMDA7XG4gICAgLy8gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn0iLCIvL1xyXG4vLyBHbG9iYWwgdmFyaWFibGVzIGZvciBCb290c3RyYXAgY3VzdG9taXphdGlvbi5cclxuLy8gVG8gb3ZlcnJpZGUgYW55IEJvb3RzdHJhcCB2YXJpYWJsZSBzYWZlbHkgeW91IGNhbiB1c2UgX3ZhcmlhYmxlcy5kZW1vLnNjc3NcclxuLy9cclxuXHJcbi8vXHJcbi8vIENvbG9yIHN5c3RlbVxyXG4vL1xyXG5cclxuLy8gQmxhY2sgY29sb3JcclxuJGJsYWNrOiAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IzAwMDAwMCAhZGVmYXVsdDtcclxuXHJcbi8vIFdoaXRlIGNvbG9yXHJcbiR3aGl0ZTogICAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNmZmZmZmYgIWRlZmF1bHQ7XHJcblxyXG4vLyBHcmF5IGNvbG9yc1xyXG4kZ3JheS0xMDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRjNGNkY5ICFkZWZhdWx0O1xyXG4kZ3JheS0yMDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRUJFREYzICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRTRFNkVGICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRDFEM0UwICFkZWZhdWx0O1xyXG4kZ3JheS01MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjQjVCNUMzICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjN0U4Mjk5ICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjNUU2Mjc4ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjM0Y0MjU0ICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjMTgxQzMyICFkZWZhdWx0O1xyXG5cclxuLy8gRGFyayBjb2xvcnNcclxuJGRhcms6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTkwMCAhZGVmYXVsdDtcclxuJGRhcmstNzU6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTgwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYXJrLTY1OiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS03MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFyay01MDogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstMjU6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBUZXh0IG11dGVkXHJcbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRncmF5LTgwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBHcmF5IGNvbG9ycyBsaXN0XHJcbiRncmF5czogKFxyXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxyXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxyXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxyXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxyXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxyXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxyXG5cdFwiNzAwXCI6ICRncmF5LTcwMCxcclxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcclxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxyXG4pICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEJvb3RzdHJhcCBzdGFuZGFyZCAmIGV4dGVuZGVkIGNvbG9yc1xyXG4vLyBEYXJrIGNvbG9yc1xyXG4kZGFyazogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGRhcmsgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kZGFyay1ob3ZlcjogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGRhcmtlbigkZGFyaywgMyUpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstbGlnaHQ6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0ICAgICRncmF5LTQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYXJrLWludmVyc2U6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBQcmltYXJ5IGNvbG9yc1xyXG4kcHJpbWFyeTogICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0IzM2OTlGRiAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRwcmltYXJ5LWhvdmVyOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMTg3REU0ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByaW1hcnktbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFMUYwRkYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJpbWFyeS1pbnZlcnNlOiAgXHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBTZWNvbmRhcnkgY29sb3JzXHJcbiRzZWNvbmRhcnk6ICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjZmY4MTAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHNlY29uZGFyeS1ob3ZlcjogIFx0XHRcdFx0XHRcdFx0XHRcdGRhcmtlbigjZmY4MTAwLCA0JSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kc2Vjb25kYXJ5LWxpZ2h0OiAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHNlY29uZGFyeS1pbnZlcnNlOlx0XHRcdFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFN1Y2Nlc3MgY29sb3JzXHJcbiRzdWNjZXNzOiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMUJDNUJEICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHN1Y2Nlc3MtaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMwQkI3QUYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kc3VjY2Vzcy1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0M5RjdGNSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRzdWNjZXNzLWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gSW5jbyBjb2xvcnNcclxuJGluZm86ICAgICAgICAgXHRcdCBcdFx0XHRcdFx0XHRcdFx0Izg5NTBGQyAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRpbmZvLWhvdmVyOiAgIFx0XHQgXHRcdFx0XHRcdFx0XHRcdCM3MzM3RUUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5mby1saWdodDogICBcdFx0IFx0XHRcdFx0XHRcdFx0XHQjRUVFNUZGICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGluZm8taW52ZXJzZTogXHRcdCBcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFdhcm5pbmcgY29sb3JzXHJcbiR3YXJuaW5nOiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRkZBODAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHdhcm5pbmctaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFRTlEMDEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2FybmluZy1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0ZGRjRERSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3YXJuaW5nLWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRGFuZ2VyIGNvbG9yc1xyXG4kZGFuZ2VyOiAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0I0Y2NEU2MCAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRkYW5nZXItaG92ZXI6ICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRUUyRDQxICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhbmdlci1saWdodDogICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkUyRTUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFuZ2VyLWludmVyc2U6ICAgXHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIExpZ2h0IGNvbG9yc1xyXG4kbGlnaHQ6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJGxpZ2h0LWhvdmVyOiAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbGlnaHQtbGlnaHQ6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRsaWdodC1pbnZlcnNlOiAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCRncmF5LTYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBXaGl0ZSBjb2xvcnNcclxuJHdoaXRlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHdoaXRlLWhvdmVyOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2hpdGUtbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2hpdGUtaW52ZXJzZTogICAgXHRcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtY29sb3JzOiAoXHJcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSwgIC8vIGN1c3RvbSBjb2xvciB0eXBlXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIEV4dGVuZGVkIGhvdmVyIGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtaG92ZXItY29sb3JzOiAoXHJcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZS1ob3ZlciwgICAvLyBjdXN0b20gY29sb3IgdHlwZVxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeS1ob3ZlcixcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWhvdmVyLFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLWhvdmVyLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLWhvdmVyLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWhvdmVyLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXItaG92ZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LWhvdmVyLFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWhvdmVyXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIGludmVyc2UgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1pbnZlcnNlLWNvbG9yczogKFxyXG5cdFwid2hpdGVcIjogICAgICAkd2hpdGUtaW52ZXJzZSxcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnktaW52ZXJzZSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWludmVyc2UsXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MtaW52ZXJzZSxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mby1pbnZlcnNlLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWludmVyc2UsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlci1pbnZlcnNlLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodC1pbnZlcnNlLFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWludmVyc2VcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgb3V0bGluZSBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcclxuJHRoZW1lLW91dGxpbmUtaW52ZXJzZS1jb2xvcnM6IChcclxuXHRcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkZGFyay03NSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRkYXJrLTc1LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIGxpZ2h0IGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtbGlnaHQtY29sb3JzOiAoXHJcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLWxpZ2h0LFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeS1saWdodCxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWxpZ2h0LFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLWxpZ2h0LFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLWxpZ2h0LFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWxpZ2h0LFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXItbGlnaHQsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LWxpZ2h0LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWxpZ2h0XHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIHNoYWRvdyBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcclxuJHRoZW1lLXNoYWRvdy1jb2xvcnM6IChcclxuICAgIFwid2hpdGVcIjogICAgICAkZGFyayxcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJGRhcmssXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkZGFyayxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4pICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBFeHRlbmRlZCB0aGVtZSB0ZXh0IGNvbG9yc1xyXG4kdGhlbWUtdGV4dC1jb2xvcnM6IChcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRkYXJrLFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLFxyXG4gICAgXCJkYXJrLTc1XCI6ICAgICRkYXJrLTc1LFxyXG4gICAgXCJkYXJrLTY1XCI6ICAgICRkYXJrLTY1LFxyXG4gICAgXCJkYXJrLTUwXCI6ICAgICRkYXJrLTUwLFxyXG4gICAgXCJkYXJrLTI1XCI6ICAgICRkYXJrLTI1LFxyXG4gICAgXCJtdXRlZFwiOiAgICAgICR0ZXh0LW11dGVkXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFNvY2lhbCBOZXR3b3JrIENvbG9ycyBVc2VkIFdpdGggQm9vc3RyYXAgQnV0dG9ucyhzZWU6IGh0dHBzOi8vcHJpbWFyeWNvbG9ycy5uZXQvKVxyXG4kc29jaWFsLWNvbG9yczogKFxyXG5cdGZhY2Vib29rOiAoXHJcblx0XHRiYXNlOiAjM2I1OTk4LFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjM2I1OTk4LCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzNiNTk5OCwgNy41JSlcclxuXHQpLFxyXG5cdGdvb2dsZTogKFxyXG5cdFx0YmFzZTogI2RkNGIzOSxcclxuXHRcdGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoI2RkNGIzOSwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCNkZDRiMzksIDcuNSUpXHJcblx0KSxcclxuXHR0d2l0dGVyOiAoXHJcblx0XHRiYXNlOiAjMWRhMWYyLFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjMWRhMWYyLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzFkYTFmMiwgNy41JSlcclxuXHQpLFxyXG5cdGluc3RhZ3JhbTogKFxyXG5cdFx0YmFzZTogI2UxMzA2YyxcclxuXHRcdGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoI2UxMzA2YywgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCNlMTMwNmMsIDcuNSUpXHJcblx0KSxcclxuXHR5b3V0dWJlOiAoXHJcblx0XHRiYXNlOiAjZmYwMDAwLFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjZmYwMDAwLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oI2ZmMDAwMCwgNy41JSlcclxuXHQpLFxyXG4gICAgbGlua2VkaW46IChcclxuICAgICAgICBiYXNlOiAjMDA3N2I1LFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoIzAwNzdiNSwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCMwMDc3YjUsIDcuNSUpXHJcbiAgICApLFxyXG4gICAgc2t5cGU6IChcclxuICAgICAgICBiYXNlOiAjMDBhZmYwLFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoIzAwYWZmMCwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCMwMGFmZjAsIDcuNSUpXHJcbiAgICApXHJcbikgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgY3VzdG9tIHNwYWNpbmcgZm9yIEJvb3RzdHJhcFxyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHNwYWNlcnM6IChcclxuICAgIDA6IDAsXHJcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksICBcdC8vIDMuNXB4XHJcbiAgICAyOiAoJHNwYWNlciAqIC41KSwgICBcdC8vIDdweDtcclxuXHQzOiAoJHNwYWNlciAqIC43NSksICBcdC8vIDEwLjVweFxyXG5cdDQ6ICgkc3BhY2VyICogMSksICAgIFx0Ly8gMTRweFxyXG5cdDU6ICgkc3BhY2VyICogMS4yNSksIFx0Ly8gMTcuNXB4XHJcblx0NjogKCRzcGFjZXIgKiAxLjUpLCAgXHQvLyAyMXB4XHJcblx0NzogKCRzcGFjZXIgKiAxLjc1KSwgXHQvLyAyNC41cHhcclxuXHQ4OiAoJHNwYWNlciAqIDIpLCAgICBcdC8vIDI4cHhcclxuXHQ5OiAoJHNwYWNlciAqIDIuMjUpLCBcdC8vIDMxLjVweFxyXG5cdDEwOiAoJHNwYWNlciAqIDIuNSksIFx0Ly8gMzVweFxyXG5cdDExOiAoJHNwYWNlciAqIDIuNzUpLFx0Ly8gMzguNXB4XHJcblx0MTI6ICgkc3BhY2VyICogMyksICAgXHQvLyA0MnB4XHJcblx0MTM6ICgkc3BhY2VyICogMy4yNSksXHQvLyA0NS41cHhcclxuXHQxNDogKCRzcGFjZXIgKiAzLjUpLCBcdC8vIDQ5cHhcclxuXHQxNTogKCRzcGFjZXIgKiAzLjc1KSwgXHQvLyA1Mi41cHhcclxuXHQxNjogKCRzcGFjZXIgKiA0KSwgXHRcdC8vIDU1cHhcclxuXHQxNzogKCRzcGFjZXIgKiA0LjI1KSwgXHQvLyA1OC41cHhcclxuXHQxODogKCRzcGFjZXIgKiA0LjUpLCBcdC8vIDYycHhcclxuXHQxOTogKCRzcGFjZXIgKiA0Ljc1KSwgXHQvLyA2NS41cHhcclxuXHQyMDogKCRzcGFjZXIgKiA1KSwgXHRcdC8vIDY5cHhcclxuXHQyMTogKCRzcGFjZXIgKiA1LjI1KSxcdC8vIDczLjVweFxyXG5cdDIyOiAoJHNwYWNlciAqIDUuNSksIFx0Ly8gNzdweFxyXG5cdDIzOiAoJHNwYWNlciAqIDUuNzUpLCBcdC8vIDgwLjVweFxyXG5cdDI0OiAoJHNwYWNlciAqIDYpLCBcdFx0Ly8gODRweFxyXG5cdDI1OiAoJHNwYWNlciAqIDYuMjUpLCBcdC8vIDg3LjVweFxyXG5cdDI2OiAoJHNwYWNlciAqIDYuNSksIFx0Ly8gOTFweFxyXG5cdDI3OiAoJHNwYWNlciAqIDYuNzUpLCBcdC8vIDk0LjVweFxyXG5cdDI4OiAoJHNwYWNlciAqIDcpLCBcdFx0Ly8gOTlweFxyXG5cdDI5OiAoJHNwYWNlciAqIDcuMjUpLCAgIC8vIDEwMi41cHhcclxuXHQzMDogKCRzcGFjZXIgKiA3LjUpLCBcdC8vIDEwNnB4XHJcblx0MzE6ICgkc3BhY2VyICogNy43NSksIFx0Ly8gMTA5LjVweFxyXG5cdDMyOiAoJHNwYWNlciAqIDgpLCBcdFx0Ly8gMTEzcHhcclxuXHQzMzogKCRzcGFjZXIgKiA4LjI1KSwgXHQvLyAxMTYuNXB4XHJcblx0MzQ6ICgkc3BhY2VyICogOC41KSwgXHQvLyAxMjBweFxyXG5cdDM1OiAoJHNwYWNlciAqIDguNzUpLCBcdC8vIDEyMy41cHhcclxuXHQzNjogKCRzcGFjZXIgKiA5KSwgXHRcdC8vIDEyN3B4XHJcblx0Mzc6ICgkc3BhY2VyICogOS4yNSksICAgIC8vIDEzMC41cHhcclxuXHQ0ODogKCRzcGFjZXIgKiA5LjUpLCBcdC8vIDEzNHB4XHJcblx0Mzk6ICgkc3BhY2VyICogOS43NSksIFx0Ly8gMTM3LjVweFxyXG4gICAgNDA6ICgkc3BhY2VyICogMTApLCBcdC8vIDE0MHB4XHJcbik7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuJGxpbmUtaGVpZ2h0LXhsOlx0XHRcdFx0XHRcdFx0XHRcdDEuOCAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MS41ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxLjM1ICFkZWZhdWx0O1xyXG5cclxuJGNvbXBvbmVudC1saWdodC1zdHlsZS1vcGFjaXR5OiAgICAgICAgICAgICAgICAgXHQwLjEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4vLyBCb3ggc2hhZG93XHJcbiRib3gtc2hhZG93LXhzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgkYmxhY2ssIDAuMDUpO1xyXG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIC4xcmVtIDFyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MCAuNXJlbSAxLjVyZW0gMC41cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MCAxcmVtIDJyZW0gMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gQm9yZGVyIFJhZGl1ZXNcclxuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgXHRcdFx0XHRcdFx0LjI4cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQuNDJyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIFx0XHRcdFx0XHRcdC44NXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQm9yZGVyIHNldHRpbmdzXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBIb3ZlciBiYWNrZ3JvdW5kIGNvbG9yXHJcbiRob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQWN0aXZlYmFja2dyb3VuZCBjb2xvclxyXG4kYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRncmF5LTEwMCwgMSUpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIE9wdGlvbnNcclxuLy9cclxuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxyXG4kZW5hYmxlLXJvdW5kZWQ6IFx0XHRcdFx0XHRcdFx0XHRcdHRydWUgIWRlZmF1bHQ7XHJcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0dHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuLy8gc206IDU3NnB4LFxyXG4vLyAgIG1kOiA3NjhweCxcclxuLy8gbGc6IDEwMDBweCxcclxuLy8gICB4bDogMTIwMHB4LFxyXG4vLyAgIHh4bDogMTQwMHB4XHJcbi8vIHNtOiA3NjhweCxcclxuLy8gICBtZDogMTAwMHB4LFxyXG4vLyAgIGxnOiAxNTAwcHgsXHJcbi8vICAgeGw6IDE3MDBweCxcclxuLy8gICB4eGw6IDE5MDBweCBcclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiAxMDAwcHgsXHJcbiAgeGw6IDEyMDBweCxcclxuICB4eGw6IDE0MDBweCAgLy8gY3VzdG9tIGJyZWFrcG9pbnRcclxuKSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBHcmlkIGNvbnRhaW5lcnNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogMTUwMHB4LFxyXG4gIHhsOiAxNzAwcHgsXHJcbiAgeHhsOiAxOTAwcHggLy8gY3VzdG9tIGJyZWFrcG9pbnRcclxuKSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDEyICFkZWZhdWx0O1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICBcdFx0XHRcdFx0XHQyNXB4ICFkZWZhdWx0O1xyXG4kZ3JpZC1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcblxyXG4vLyBCb2R5XHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDtcclxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbi8vIEZvbnQgZmFtaWx5XHJcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgIFx0XHRcdFx0XHRcdFJvYm90bywgQ29sZmF4LFJlY3RhLCBcInNhbnMtc2VyaWZcIiAhZGVmYXVsdDtcclxuXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIFx0XHRcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxM3B4YFxyXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgIFx0IFx0XHRcdFx0XHQkZm9udC1zaXplLWJhc2UgKiAxLjA4ICFkZWZhdWx0OyAgIC8vIDE0LjA0cHhcclxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1iYXNlICogLjkyNSAhZGVmYXVsdDsgICAvLyAxMi4wMjVweFxyXG4kZm9udC1zaXplLXhzOiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkZm9udC1zaXplLWJhc2UgKiAuOCAhZGVmYXVsdDsgICAgIC8vIDEwLjRweFxyXG5cclxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7ICAgICAgLy8gMjZweFxyXG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDsgICAvLyAyMi43NXB4XHJcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7ICAgIC8vIDE5LjVweFxyXG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4zNSAhZGVmYXVsdDsgICAvLyAxNy41NXB4XHJcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAgIC8vIDE2LjI1cHhcclxuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMTc1ICFkZWZhdWx0OyAgLy8gMTUuMjc1cHhcclxuXHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjIgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG5cclxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDsgIC8vIDcxLjVweFxyXG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0OyAgLy8gNTguNXB4XHJcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7ICAvLyA0NS41cHhcclxuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuNXJlbSAhZGVmYXVsdDsgIC8vIDMyLjVweFxyXG4kZGlzcGxheTUtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi4yNXJlbSAhZGVmYXVsdDsgLy8gMjkuNXB4XHJcblxyXG4vLyBGb250IFNpemVzXHJcbiRmb250LXNpemVzOiAoXHJcbiAgICBmb250LXNpemUtaDE6ICRoMS1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDI6ICRoMi1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDM6ICRoMy1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDQ6ICRoNC1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDU6ICRoNS1mb250LXNpemUsXHJcbiAgICBmb250LXNpemUtaDY6ICRoNi1mb250LXNpemUsXHJcbiAgICBkaXNwbGF5MTogJGRpc3BsYXkxLXNpemUsXHJcbiAgICBkaXNwbGF5MjogJGRpc3BsYXkyLXNpemUsXHJcbiAgICBkaXNwbGF5MzogJGRpc3BsYXkzLXNpemUsXHJcbiAgICBkaXNwbGF5NDogJGRpc3BsYXk0LXNpemUsXHJcbiAgICBkaXNwbGF5NTogJGRpc3BsYXk1LXNpemVcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRkaXNwbGF5MS13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5Mi13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5NC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XHJcblxyXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcclxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcclxuXHJcbi8vIEZvbnQgV2VpZ2h0XHJcbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIFx0XHRcdFx0XHRcdGxpZ2h0ZXIgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIFx0XHRcdFx0XHRcdDMwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICAgXHRcdFx0XHRcdFx0NDAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICBcdFx0XHRcdFx0XHQ1MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIFx0XHRcdFx0XHRcdDYwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlc3Q6ICAgICAgICAgIFx0XHRcdFx0XHRcdDcwMCAhZGVmYXVsdDtcclxuXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gVHJhbnNpdGlvblxyXG4kdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdGFsbCAwLjE1cyBlYXNlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRyYW5zaXRpb24tbGluazogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0cmFuc2l0aW9uLWlucHV0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIExpbmtzXHJcbi8vXHJcbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cclxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkcHJpbWFyeSwgMTUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcclxuLy8gRGFya2VuIHBlcmNlbnRhZ2UgZm9yIGxpbmtzIHdpdGggYC50ZXh0LSpgIGNsYXNzIChlLmcuIGAudGV4dC1zdWNjZXNzYClcclxuJGVtcGhhc2l6ZWQtbGluay1ob3Zlci1kYXJrZW4tcGVyY2VudGFnZTogICAgICAgICAgIDE1JSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBCdXR0b25zICsgRm9ybXNcclxuLy9cclxuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgLjU1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjgyNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNDJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gQnV0dG9uc1xyXG4vL1xyXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cclxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgXHRcdFx0XHRcdFx0LjYgIWRlZmF1bHQ7XHJcbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIFx0XHRcdFx0XHRcdGNvbG9yIC4zcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjNzIGVhc2UtaW4tb3V0ICFkZWZhdWx0Oy8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICBcdFx0XHRcdFx0XHRub3JtYWwgIWRlZmF1bHQ7XHJcbiRidG4tc2Vjb25kYXJ5LWNvbG9yOlx0XHRcdFx0XHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGJ0bi1zZWNvbmRhcnktaG92ZXItYmctY29sb3I6XHRcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0O1xyXG4kYnRuLWljb24tc2l6ZS14czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjRweCAhZGVmYXVsdDsgLy9jdXN0b20gcGFyYW1ldGVyXHJcblxyXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXHJcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgXHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICBcdFx0XHQkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOlx0XHRcdFx0XHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6XHRcdFx0XHRcdFx0XHRsaWdodGVuKCRwcmltYXJ5LCAxMCUpO1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgIFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGlucHV0LXJlYWRvbmx5LWJnOiAgICAgICAgICAgICAgICAgICAgIFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRpbnB1dC1ncm91cC1pY29uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgIFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgIFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgXHRcdFx0JGdyYXktMTAwICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgXHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICBcdFx0XHQkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1zb2xpZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDA7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5wdXQtc29saWQtYmctZm9jdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwOyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGlucHV0LXNvbGlkLXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5wdXQtc29saWQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQkZGFyay03NTsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyBGb3Jtc1xyXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAgICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuJGZvcm0tbGFiZWwtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS1sYWJlbC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLWZlZWRiYWNrLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICA0MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS10ZXh0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC45cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tdGV4dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLXZhbGlkYXRpb24taW5wdXQtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBmYWxzZTsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gVGFibGVcclxuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0dHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0O1xyXG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgICBcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgXHRcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtaGVhZC1mb250LXdlaWdodDogICAgICAgICAgIFx0XHRcdFx0XHQ2MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgXHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkZGFyayAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgXHRcdFx0XHRcdFx0cmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgIFx0XHRcdFx0XHRcdCR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgIFx0XHRcdFx0XHRcdHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgXHRcdFx0XHRcdFx0bGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtdGV4dC10cmFuc2Zvcm06ICAgICAgICAgICAgICAgICB1cHBlcmNhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgIDYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtbGV0dGVyLXNwYWNpbmc6ICAgICAgICAgICAgICAgICAwLjFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQ2FyZFxyXG4kY2FyZC1ib3gtc2hhZG93OiBcdFx0XHRcdFx0XHRcdFx0XHQwcHggMHB4IDMwcHggMHB4IHJnYmEoODIsNjMsMTA1LDAuMDUpICFkZWZhdWx0OyAvLyBjYXJkIGN1c3RvbSBzaGFkb3dcclxuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDJyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdDIuMjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgIFx0XHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1oZWFkZXItc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtaGVhZGVyLWhlaWdodDogXHRcdFx0XHRcdFx0XHRcdDcwcHggIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY2FyZC1zdGlja3ktaGVhZGVyLWJnOiAgIFx0XHRcdFx0XHRcdCAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY2FyZC1zdGlja3ktaGVhZGVyLWhlaWdodDogXHRcdFx0XHRcdFx0NzBweCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjYXJkLXN0aWNreS16aW5kZXg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDEgICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtc3RpY2t5LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjEpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIExpc3QgZ3JvdXBcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgXHRcdFx0XHRcdDEuNzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcclxuJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgXHRcdFx0XHQuNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIFx0XHRcdFx0LjVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIFx0XHRcdFx0MS43NXJlbSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIFx0XHRcdFx0bnVsbCAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIFx0XHRcdFx0cmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgXHRcdFx0XHQwICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICBcdFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBcdFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdzogICAgICAgXHRcdFx0XHQgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIFx0XHRcdFx0MCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICBcdFx0XHRcdFx0MCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICBcdFx0IFx0XHRcdCRibGFjayAhZGVmYXVsdDtcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgXHRcdFx0XHQuMiAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgXHRcdFx0XHQkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICBcdFx0XHQgXHQkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICBcdFx0XHRcdDFweCAhZGVmYXVsdDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgXHRcdFx0XHQxcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIFx0XHRcdFx0MS41cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICBcdFx0XHRcdDEuNzVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgIFx0XHRcdFx0JG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcclxuXHJcbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgXHRcdCBcdFx0XHQxMTQwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0ODAwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0NTAwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0MzAwcHggIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gUGFnaW5hdGlvblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICBcdFx0XHRcdCRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICBcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICBcdCBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgXHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcbiRkcm9wZG93bi1ib3gtc2hhZG93Olx0XHRcdFx0XHRcdFx0XHQwcHggMHB4IDUwcHggMHB4IHJnYmEoODIsNjMsMTA1LCAwLjE1KSAhZGVmYXVsdDtcclxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ5OCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1tZW51LXdpZHRoczogKFxyXG5cdHNtOiAxNzVweCxcclxuXHRtZDogMjUwcHgsXHJcblx0bGc6IDM1MHB4LFxyXG5cdHhsOiA0MDBweCxcclxuXHR4eGw6IDYwMHB4XHJcbik7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIFBvcG92ZXJzXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIFx0XHRcdFx0MC45cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDI3NnB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICBcdFx0XHRcdDFweCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgXHRcdFx0XHQjZmZmZmZmICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICBcdFx0XHRcdCRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdDBweCAwcHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjE1KSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQjZmZmZmZmICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICBcdFx0XHRcdCRkYXJrICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItZm9udC13ZWlnaHQ6ICAgICAgICAgICBcdFx0XHRcdDUwMCAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcG9wb3Zlci1oZWFkZXItZm9udC1zaXplOiAgICAgICAgICAgICBcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgXHRcdFx0XHQxcmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICBcdFx0XHRcdDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgXHRcdFx0XHQkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBUb29sdGlwc1xyXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDAuOXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQyMDBweCAhZGVmYXVsdDtcclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQjZmZmZmZmICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICBcdFx0XHRcdDNweCAhZGVmYXVsdDtcclxuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQxICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdCRwb3BvdmVyLWJveC1zaGFkb3cgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICBcdFx0XHRcdC43NXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgXHRcdFx0XHQxcmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBDdXN0b20gVG9hc3RzXHJcbiR0b2FzdC16aW5kZXg6XHRcdFx0XHRcdFx0XHRcdFx0XHQkemluZGV4LWRyb3Bkb3duICsgMTAwICFkZWZhdWx0O1xyXG4kdG9hc3Qtc3BhY2luZzpcdFx0XHRcdFx0XHRcdFx0XHRcdDJyZW0gICFkZWZhdWx0O1xyXG4kdG9hc3Qtd2lkdGg6IFx0XHRcdFx0XHRcdFx0XHRcdFx0MzUwcHggIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3gtc2hhZG93Olx0XHRcdFx0XHRcdFx0XHRcdCRkcm9wZG93bi1ib3gtc2hhZG93ICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiBcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogXHRcdFx0XHRcdCNmZmYgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOlx0XHRcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFByb2dyZXNzIGJhcnNcclxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1oZWlnaHQteHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJvZ3Jlc3MtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC43NXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcm9ncmVzcy1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgICAgICAgICAgICAgICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcclxuXHJcbi8vIEJhZGdlc1xyXG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdC41ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0Ljc1ZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0ODUlICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIENvZGVcclxuJGNvZGUtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjb2RlLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjE1cmVtIDAuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG5cclxuLy8gTW9kYWxzXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAgICAgICAgICAgICAgICAgMS43NXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLXRpdGxlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkYXJrICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjNyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtc21hbGwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtc21hbGwtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLXNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgIDAuOXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1jbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLWNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLWNsb3NlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgICAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41ICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yNSAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBBbGVydHNcclxuLy9cclxuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcbiRhbGVydC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0JGNhcmQtYm94LXNoYWRvdyAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG5cclxuLy8gTmF2c1xyXG5cclxuJG5hdi1saW5rLXB4OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNXJlbTtcclxuJG5hdi1saW5rLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNzVyZW07XHJcbiRuYXYtYnRuLXB4OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xyXG4kbmF2LXNlY3Rpb24tcHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cmVtO1xyXG4kbmF2LWVsZW0tc3BhY2U6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yNXJlbTtcclxuXHJcbiRuYXYtbGluay1iZy1ob3ZlcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDA7XHJcbiRuYXYtbGluay1iZy1hY3RpdmU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDA7XHJcblxyXG4kbmF2LWhlYWRlci1weTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcclxuJG5hdi1mb290ZXItcHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW07XHJcblxyXG4kbmF2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcclxuJG5hdi1pY29uLXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW07XHJcbiRuYXYtaWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAycmVtO1xyXG4iLCIvL1xyXG4vLyBTVkcgSWNvblxyXG4vL1xyXG5cclxuXHJcbkBtaXhpbiBzdmctaWNvbi1jb2xvcigkY29sb3IsICRpbXBvcnRhbnQ6IGZhbHNlKSB7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGcge1xyXG4gICAgICAgICAgICBbZmlsbF0ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiAkY29sb3IgdmFsdWVpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGcge1xyXG4gICAgICAgICAgICAgICAgW2ZpbGxdIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHN2Zy1pY29uLXRyYW5zaXRpb24oKSB7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGcge1xyXG4gICAgICAgICAgICBbZmlsbF0ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdmctaWNvbi1zaXplKCRzaXplLCAkaW1wb3J0YW50OiBmYWxzZSkge1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6ICRzaXplIHZhbHVlaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XHJcbiAgICAgICAgd2lkdGg6ICRzaXplIHZhbHVlaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzdmctbG9nby1jb2xvcigkY29sb3IsICRpbXBvcnRhbnQ6IGZhbHNlKXtcclxuICAgIHN2Z3tcclxuICAgICAgICBwYXRoe1xyXG4gICAgICAgICAgICBmaWxsOiAkY29sb3IgdmFsdWVpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL1xyXG4vLyBUbyBtYWtlIGZ1dHVyZSB1cGRhdGVzIGVhc2llciBjb25zaWRlciBvdmVycmlkaW5nIHRoZSBnbG9iYWwgdmFyaWFibGVzIGZyb20gX3ZhcmlhYmxlcy5ib290c3RyYXAuc2NzcyBhbmQgX3ZhcmlhYmxlcy5jdXN0b20uc2NzcyBmb3IgY3VycmVudCBkZW1vIGluIHRoaXMgZmlsZS5cclxuLy8gTm90ZSB0aGF0IHRoaXMgZmlsZSBpcyBpbmNsdWRlZCBmaXJzdCBhbmQgdmFyaWFibGVzIGRlZmluZWQgaW4gX3ZhcmlhYmxlcy5ib290c3RyYXAuc2NzcyBhbmQgX3ZhcmlhYmxlcy5jdXN0b20uc2Nzc1xyXG4vLyBhcmUgbm90IGFjY2Vzc2libGUgaW4gdGhpcyBmaWxlIGJ1dCB5b3UgY2FuIG92ZXJyaWRlIGFueSBnbG9iYWwgdmFyaWFibGUgYXMgc2hvd24gYmVsb3c6XHJcbi8vXHJcblxyXG4vLyBUaGVtZSBjb2xvcnNcclxuLy8gT3ZlcnJpZGUgcHJpbWFyeSBjb2xvciB2YXJpYW50c1xyXG4kcHJpbWFyeTogICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0IzAwNWY5OTsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRwcmltYXJ5LWhvdmVyOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMTg3REU0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByaW1hcnktbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFMUYwRkY7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJpbWFyeS1pbnZlcnNlOiAgXHRcdFx0XHRcdFx0XHRcdFx0I0ZGRkZGRjsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy9cclxuLy8gV2l6YXJkIDNcclxuLy8gUGFnZXMgU0FTUyBmaWxlcyBhcmUgY29tcGlsZWQgaW50byBzZXBhcmF0ZSBjc3MgZmlsZXNcclxuLy9cclxuXHJcbi8vIEluaXRpYWxpemF0aW9uIG9mIGdsb2JhbCB2YXJpYWJsZXMsIG1peGlucyBhbmQgZnVuY3Rpb25zXHJcbkBpbXBvcnQgXCIuLi8uLi9pbml0XCI7XHJcblxyXG4vLyBCYXNlXHJcbi53aXphcmQud2l6YXJkLTMge1xyXG5cdC8vIE5hdlxyXG5cdC53aXphcmQtbmF2IHtcclxuXHRcdC8vIFN0ZXBzXHJcblx0XHQud2l6YXJkLXN0ZXBzIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuXHRcdFx0Ly8gU3RlcFxyXG5cdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcblx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICR0ZXh0LW11dGVkO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMnJlbSAwLjVyZW07XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC10aXRsZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHJcblx0XHRcdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtYmFyIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0cHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS0yMDA7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMDtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1saW5rO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmW2RhdGEtd2l6YXJkLXN0YXRlPVwiY3VycmVudFwiXSB7XHJcblx0XHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICRwcmltYXJ5O1xyXG5cclxuXHRcdFx0XHRcdFx0LndpemFyZC1iYXIge1xyXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIHBvcnRyYWl0IHRhYmxldCBhbmQgbW9iaWxlIG1vZGVcclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcblx0LndpemFyZC53aXphcmQtMyB7XHJcblx0XHQvLyBOYXZcclxuXHRcdC53aXphcmQtbmF2IHtcclxuXHRcdFx0LndpemFyZC1zdGVwcyB7XHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcblx0XHRcdFx0LndpemFyZC1zdGVwIHtcclxuXHRcdFx0XHRcdGZsZXg6IDAgMCAxMDAlO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHRcdFx0ZmxleDogMCAwIDEwMCU7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDFyZW0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy9cclxuLy8gV2l6YXJkIDJcclxuLy8gUGFnZXMgU0FTUyBmaWxlcyBhcmUgY29tcGlsZWQgaW50byBzZXBhcmF0ZSBjc3MgZmlsZXNcclxuLy9cclxuXHJcbi8vIEluaXRpYWxpemF0aW9uIG9mIGdsb2JhbCB2YXJpYWJsZXMsIG1peGlucyBhbmQgZnVuY3Rpb25zXHJcbkBpbXBvcnQgXCIuLi8uLi9pbml0XCI7XHJcblxyXG5cclxuLy8gVmFyaWFibGVzXHJcbiR3aXphcmQtbmF2LXdpZHRoOiA0MDBweDtcclxuJHdpemFyZC1uYXYtd2lkdGgtc206IDMyNXB4O1xyXG5cclxuLy8gQmFzZVxyXG4ud2l6YXJkLndpemFyZC0yIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHQvLyBOYXZcclxuXHQud2l6YXJkLW5hdiB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0ZmxleDogMCAwICR3aXphcmQtbmF2LXdpZHRoO1xyXG5cdFx0d2lkdGg6ICR3aXphcmQtbmF2LXdpZHRoO1xyXG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdC8vIFN0ZXBzXHJcblx0XHQud2l6YXJkLXN0ZXBzIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cdFx0XHQvLyBTdGVwXHJcblx0XHRcdC53aXphcmQtc3RlcCB7XHJcblx0XHRcdFx0cGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1saW5rO1xyXG5cclxuXHRcdFx0XHQud2l6YXJkLXdyYXBwZXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC53aXphcmQtaWNvbiB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDIuNXJlbTtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMS4xcmVtO1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcclxuXHJcblx0XHRcdFx0XHRpIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICR0ZXh0LW11dGVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5zdmctaWNvbiB7XHJcblx0XHRcdFx0XHRcdEBpbmNsdWRlIHN2Zy1pY29uLWNvbG9yKCR0ZXh0LW11dGVkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLXRpdGxlIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICRkYXJrO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWRlc2Mge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJGRhcmstNTA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQud2l6YXJkLWFycm93IHtcclxuXHRcdFx0XHRcdGNvbG9yOiAkZGFyay01MDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuXHJcblx0XHRcdFx0XHQmLmxhc3Qge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JltkYXRhLXdpemFyZC1zdGF0ZT1cImN1cnJlbnRcIl0ge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGdyYXktMTAwO1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogJHRyYW5zaXRpb24tbGluaztcclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWljb24ge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1saW5rO1xyXG5cclxuXHRcdFx0XHRcdFx0aSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5zdmctaWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgc3ZnLWljb24tY29sb3IoJHByaW1hcnksIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAkZ3JheS0xMDA7XHJcblx0XHRcdFx0XHRcdGJvcmRlci13aWR0aDogMXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEJvZHlcclxuXHQud2l6YXJkLWJvZHkge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG59XHJcblxyXG4vLyBDdXN0b20gZGVza3RvcCByYW5nZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWJldHdlZW4obGcsIHhsKSB7XHJcblx0Ly8gQmFzZVxyXG5cdC53aXphcmQud2l6YXJkLTIge1xyXG5cdFx0Ly8gTmF2XHJcblx0XHQud2l6YXJkLW5hdiB7XHJcblx0XHRcdGZsZXg6IDAgMCAkd2l6YXJkLW5hdi13aWR0aC1zbTtcclxuXHRcdFx0d2lkdGg6ICR3aXphcmQtbmF2LXdpZHRoLXNtO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gVGFibGV0IGFuZCBtb2JpbGUgbW9kZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuXHQud2l6YXJkLndpemFyZC0yIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuXHRcdC8vIE5hdlxyXG5cdFx0LndpemFyZC1uYXYge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcblxyXG5cdFx0XHQud2l6YXJkLXN0ZXBze1xyXG5cdFx0XHRcdC53aXphcmQtc3RlcHtcclxuXHRcdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJjdXJyZW50XCJdIHtcclxuXHRcdFx0XHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogbm9uZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEJvZHlcclxuXHRcdC53aXphcmQtYm9keSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-form_product-form_module_ts.js.map