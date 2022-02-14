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
                    console.log(res, page, "res");
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

module.exports = ".wizard.wizard-1 .wizard-nav .wizard-steps {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  margin-left: 3.5rem;\n  margin-right: 3.5rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n  color: #3F4254;\n  font-size: 3.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #3F4254;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  color: #7E8299;\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin-top: 0.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n  color: #7E8299;\n  font-size: 1.15rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n  display: none;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon svg g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon svg:hover g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-title, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-title {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow {\n  color: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow svg g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow svg:hover g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n@media (min-width: 768px) and (max-width: 1199.98px) {\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n    font-size: 3.75rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n    margin-top: 0.75rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .wizard.wizard-1 .wizard-nav .wizard-steps {\n    flex-direction: column;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n    font-size: 1.5rem;\n    margin-right: 1.25rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n    font-size: 1rem;\n  }\n  .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n    display: block;\n  }\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps {\n  display: flex;\n  align-items: flex-end;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  margin-right: 1rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step:last-child {\n  margin-right: 0;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  color: #3F4254;\n  padding: 2rem 0.5rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title span {\n  font-size: 2rem;\n  margin-right: 0.5rem;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-bar {\n  height: 4px;\n  width: 100%;\n  background-color: #EBEDF3;\n  position: relative;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-bar:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 0;\n  background-color: transparent;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label {\n  color: #005f99;\n}\n.wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-bar:after {\n  width: 100%;\n  background-color: #005f99;\n}\n@media (max-width: 999.98px) {\n  .wizard.wizard-3 .wizard-nav .wizard-steps {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step {\n    flex: 0 0 100%;\n    position: relative;\n    width: 100%;\n  }\n  .wizard.wizard-3 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    justify-content: flex-start;\n    flex: 0 0 100%;\n    padding: 1rem 0;\n  }\n}\n.wizard.wizard-2 {\n  display: flex;\n}\n.wizard.wizard-2 .wizard-nav {\n  padding: 0;\n  flex: 0 0 400px;\n  width: 400px;\n  max-width: 100%;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step {\n  padding: 0.75rem 1.5rem;\n  position: relative;\n  border-radius: 0.5rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-wrapper {\n  display: flex;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon {\n  font-size: 2.5rem;\n  margin-right: 1.1rem;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon i {\n  color: #3F4254;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon .svg-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #3F4254;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-icon .svg-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  color: #181C32;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-desc {\n  color: #7E8299;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n  color: #7E8299;\n  font-size: 1.15rem;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n  display: none;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] {\n  background-color: #F3F6F9;\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon {\n  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon i {\n  color: #005f99 !important;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon .svg-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #005f99 !important;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-icon .svg-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current]:after {\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \" \";\n  height: 0;\n  width: 0;\n  border: solid transparent;\n  position: absolute;\n  border-left-color: #F3F6F9;\n  border-width: 1rem;\n}\n.wizard.wizard-2 .wizard-body {\n  width: 100%;\n}\n@media (min-width: 1000px) and (max-width: 1399.98px) {\n  .wizard.wizard-2 .wizard-nav {\n    flex: 0 0 325px;\n    width: 325px;\n  }\n}\n@media (max-width: 999.98px) {\n  .wizard.wizard-2 {\n    display: block;\n  }\n  .wizard.wizard-2 .wizard-nav {\n    width: 100%;\n    border-bottom: 1px solid #EBEDF3;\n  }\n  .wizard.wizard-2 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current]:after {\n    content: none;\n  }\n  .wizard.wizard-2 .wizard-body {\n    width: 100%;\n  }\n}\n.active .wizard-title,\n.wizard-label.active,\n.done .wizard-title,\n.done {\n  color: #3699ff !important;\n}\n.active .wizard-title .wizard-icon,\n.wizard-label.active .wizard-icon,\n.done .wizard-title .wizard-icon,\n.done .wizard-icon {\n  color: #3699ff !important;\n}\n.wizard-title, .wizard-label {\n  max-width: 145px;\n}\n.wizard-steps {\n  align-items: flex-start !important;\n}\n.wizard-wrapper.active .wizard-icon,\n.wizard-wrapper.active .wizard-label, .wizard-wrapper.done .wizard-icon,\n.wizard-wrapper.done .wizard-label {\n  color: #3699ff !important;\n}\n.wizard-wrapper .wizard-icon,\n.wizard-wrapper .wizard-label {\n  color: #3F4254;\n}\n.wizard-step > .wizard-label {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n.wizard-step {\n  align-items: flex-start !important;\n}\n.wizard-icon {\n  font-size: 2rem !important;\n}\n.active .wizard-bar,\n.done .wizard-bar {\n  background-color: #3699ff !important;\n}\n.top-box {\n  color: #B5B5C3;\n  margin-left: 50px;\n}\n.top-box span {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhZ2VzL3dpemFyZC93aXphcmQtMS5zY3NzIiwicHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvY29tcG9uZW50cy9fdmFyaWFibGVzLmJvb3RzdHJhcC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvY29tcG9uZW50cy9taXhpbnMvX3N2Zy1pY29uLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9jb21wb25lbnRzL192YXJpYWJsZXMuZGVtby5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3BhZ2VzL3dpemFyZC93aXphcmQtMy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvd2l6YXJkL3dpemFyZC0yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUU7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNaSDtBRGVHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGVJO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtBQ2JMO0FEZUs7RUFDQyxjRVBnQjtFRlFoQixrQkFBQTtBQ2JOO0FFVlk7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUZZaEI7QUVOZ0I7RUFDSSwwQkFBQTtBRlFwQjtBRFdLO0VBQ0MsY0VoQmdCO0VGaUJoQixpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRGFJO0VBQ0MsY0V4QmlCO0VGeUJqQixrQkFBQTtBQ1hMO0FEYUs7RUFDQyxhQUFBO0FDWE47QURrQk07RUFDQyxjSWpEa0I7QUhpQ3pCO0FFakNZO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0FGbUNoQjtBRTdCZ0I7RUFDSSwwQkFBQTtBRitCcEI7QURjTTtFQUNDLGNJdkRrQjtBSDJDekI7QURlSztFQUNDLGNJM0RtQjtBSDhDekI7QUU5Q1k7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUZnRGhCO0FFMUNnQjtFQUNJLDBCQUFBO0FGNENwQjtBSTJCSTtFTEZDO0lBQ0MsbUJBQUE7SUFDQSxvQkFBQTtFQ3JCSjtFRHVCSTtJQUNDLGtCQUFBO0VDckJMO0VEd0JJO0lBQ0MsbUJBQUE7RUN0Qkw7RUQwQkc7SUFDQyxpQkFBQTtFQ3hCSjtBQUNGO0FJSkk7RUwrQ0Q7SUFDQyxzQkFBQTtFQ3hDRjtFRDJDRTtJQUNDLFdBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQ3pDSDtFRDJDRztJQUNDLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUN6Q0o7RUQyQ0k7SUFDQyxpQkFBQTtJQUNBLHFCQUFBO0VDekNMO0VENkNHO0lBQ0MsZUFBQTtFQzNDSjtFRDZDSTtJQUNDLGNBQUE7RUMzQ0w7QUFDRjtBSzdGRTtFQUNDLGFBQUE7RUFDQSxxQkFBQTtBTCtGSDtBSzVGRztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBTDhGSjtBSzVGSTtFQUNDLGVBQUE7QUw4Rkw7QUszRkk7RUFDQyxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0pYaUI7RUlZakIsb0JBQUE7QUw2Rkw7QUszRks7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FMNkZOO0FLM0ZNO0VBQ0MsZUFBQTtFQUNBLG9CQUFBO0FMNkZQO0FLekZLO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkpuQ2dCO0VJb0NoQixrQkFBQTtBTDJGTjtBS3pGTTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLHlHSjZYNkM7QURsU3BEO0FLckZLO0VBQ0MsY0Y5RG1CO0FIcUp6QjtBS3BGTztFQUNDLFdBQUE7RUFDQSx5QkZuRWlCO0FIeUp6QjtBSXhGSTtFQ2lCRDtJQUNDLHNCQUFBO0lBQ0EsdUJBQUE7RUwyRUY7RUt6RUU7SUFDQyxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VMMkVIO0VLekVHO0lBQ0MsMkJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFTDJFSjtBQUNGO0FNcEtBO0VBQ0MsYUFBQTtBTnNLRDtBTW5LQztFQUNDLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFYaUI7RUFZakIsZUFBQTtBTnFLRjtBTWxLRTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FOb0tIO0FNaktHO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUdMeVpnRDtBRHRQcEQ7QU1qS0k7RUFDQyxhQUFBO0FObUtMO0FNaEtJO0VBQ0MsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlHTGdaK0M7QUQ5T3BEO0FNaEtLO0VBQ0MsY0x4QmdCO0FEMEx0QjtBRXpNWTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtBRjJNaEI7QUVyTWdCO0VBQ0ksMEJBQUE7QUZ1TXBCO0FNaktJO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QU5tS0w7QU1qS0s7RUFDQyxjTHJDZ0I7RUtzQ2hCLGdCQUFBO0VBQ0EsaUJBQUE7QU5tS047QU1oS0s7RUFDQyxjTDlDZ0I7QURnTnRCO0FNOUpJO0VBQ0MsY0xuRGlCO0VLb0RqQixrQkFBQTtBTmdLTDtBTTlKSztFQUNDLGFBQUE7QU5nS047QU01Skk7RUFDQyx5QkxqRWlCO0VLa0VqQix5R0wwVytDO0FENU1wRDtBTTVKSztFQUNDLHlHTHVXOEM7QUR6TXBEO0FNNUpNO0VBQ0MseUJBQUE7QU44SlA7QUU5T1k7RUFDSSwwQkFBQTtFQUNBLHdCQUFBO0FGZ1BoQjtBRTFPZ0I7RUFDSSwwQkFBQTtBRjRPcEI7QU03Sks7RUFDQyxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCTHpGZ0I7RUswRmhCLGtCQUFBO0FOK0pOO0FNdkpDO0VBQ0MsV0FBQTtBTnlKRjtBSXBMSTtFRW9DRjtJQUNDLGVBQUE7SUFDQSxZQW5IbUI7RU51UXBCO0FBQ0Y7QUkxTUk7RUU0REg7SUFDQyxjQUFBO0VOaUpBO0VNOUlBO0lBQ0MsV0FBQTtJQUNBLGdDQUFBO0VOZ0pEO0VNM0lJO0lBQ0MsYUFBQTtFTjZJTDtFTXJJQTtJQUNDLFdBQUE7RU51SUQ7QUFDRjtBQTlSQTs7OztFQUlFLHlCQUFBO0FBZ1NGO0FBOVJFOzs7O0VBQ0UseUJBQUE7QUFtU0o7QUFoU0E7RUFDRSxnQkFBQTtBQW1TRjtBQWpTQTtFQUNFLGtDQUFBO0FBb1NGO0FBalNFOzs7RUFFRSx5QkFBQTtBQXFTSjtBQWpTRTs7RUFFRSxjQUFBO0FBb1NKO0FBaFNBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQW1TRjtBQWhTQTtFQUNFLGtDQUFBO0FBbVNGO0FBaFNBO0VBQ0UsMEJBQUE7QUFtU0Y7QUFoU0E7O0VBRUUsb0NBQUE7QUFtU0Y7QUFoU0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFtU0Y7QUFqU0U7RUFDRSxXQUFBO0FBbVNKIiwiZmlsZSI6InByb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vIFdpemFyZCAxXHJcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXHJcbi8vXHJcblxyXG4vLyBJbml0aWFsaXphdGlvbiBvZiBnbG9iYWwgdmFyaWFibGVzLCBtaXhpbnMgYW5kIGZ1bmN0aW9uc1xyXG5AaW1wb3J0IFwiLi4vLi4vaW5pdFwiO1xyXG5cclxuLy8gQmFzZVxyXG4ud2l6YXJkLndpemFyZC0xIHtcclxuXHQvLyBOYXZcclxuXHQud2l6YXJkLW5hdiB7XHJcblx0XHQvLyBTdGVwc1xyXG5cdFx0LndpemFyZC1zdGVwcyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG5cdFx0XHQvLyBTdGVwXHJcblx0XHRcdC53aXphcmQtc3RlcCB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHQvLyBmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMy41cmVtO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzLjVyZW07XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1pY29uIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICR0ZXh0LW11dGVkO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMuNzVyZW07XHJcblxyXG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBzdmctaWNvbi1jb2xvcigkdGV4dC1tdXRlZCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC10aXRsZSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkZGFyay01MDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuNzVyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQud2l6YXJkLWFycm93IHtcclxuXHRcdFx0XHRcdGNvbG9yOiAkZGFyay01MDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuXHJcblx0XHRcdFx0XHQmLmxhc3Qge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JltkYXRhLXdpemFyZC1zdGF0ZT1cImRvbmVcIl0sXHJcblx0XHRcdFx0JltkYXRhLXdpemFyZC1zdGF0ZT1cImN1cnJlbnRcIl0ge1xyXG5cdFx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRcdC53aXphcmQtaWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICRwcmltYXJ5O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBzdmctaWNvbi1jb2xvcigkcHJpbWFyeSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC53aXphcmQtdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkcHJpbWFyeTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LndpemFyZC1hcnJvdyB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkcHJpbWFyeTtcclxuXHJcblx0XHRcdFx0XHRcdEBpbmNsdWRlIHN2Zy1pY29uLWNvbG9yKCRwcmltYXJ5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIERlc2t0b3AgTW9kZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWJldHdlZW4obWQsIGxnKSB7XHJcblx0LndpemFyZC53aXphcmQtMSB7XHJcblx0XHQvLyBOYXZcclxuXHRcdC53aXphcmQtbmF2IHtcclxuXHRcdFx0Ly8gU3RlcHNcclxuXHRcdFx0LndpemFyZC1zdGVwcyB7XHJcblx0XHRcdFx0Ly8gU3RlcFxyXG5cdFx0XHRcdC53aXphcmQtc3RlcCB7XHJcblx0XHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcblxyXG5cdFx0XHRcdFx0XHQud2l6YXJkLWljb24ge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMy43NXJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LndpemFyZC10aXRsZSB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMC43NXJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtYXJyb3cge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIFRhYmxlIGFuZCBNb2JpbGUgbW9kZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuXHQud2l6YXJkLndpemFyZC0xIHtcclxuXHR9XHJcbn1cclxuXHJcbi8vIE1vYmlsZSBtb2RlXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG5cdC53aXphcmQud2l6YXJkLTEge1xyXG5cdFx0Ly8gTmF2XHJcblx0XHQud2l6YXJkLW5hdiB7XHJcblx0XHRcdC8vIFN0ZXBzXHJcblx0XHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdFx0XHRcdC8vIFN0ZXBcclxuXHRcdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMC41cmVtO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuXHRcdFx0XHRcdFx0LndpemFyZC1pY29uIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWFycm93IHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cclxuXHRcdFx0XHRcdFx0Ji5sYXN0IHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvd2l6YXJkL3dpemFyZC0xXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvd2l6YXJkL3dpemFyZC0zXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvd2l6YXJkL3dpemFyZC0yXCI7XG5cbi5hY3RpdmUgLndpemFyZC10aXRsZSxcbi53aXphcmQtbGFiZWwuYWN0aXZlLFxuLmRvbmUgLndpemFyZC10aXRsZSxcbi5kb25lIHtcbiAgY29sb3I6ICMzNjk5ZmYgIWltcG9ydGFudDtcblxuICAud2l6YXJkLWljb24ge1xuICAgIGNvbG9yOiAjMzY5OWZmICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi53aXphcmQtdGl0bGUsLndpemFyZC1sYWJlbHtcbiAgbWF4LXdpZHRoOiAxNDVweDtcbn1cbi53aXphcmQtc3RlcHN7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG4ud2l6YXJkLXdyYXBwZXIuYWN0aXZlLC53aXphcmQtd3JhcHBlci5kb25lIHtcbiAgLndpemFyZC1pY29uLFxuICAud2l6YXJkLWxhYmVsIHtcbiAgICBjb2xvcjogIzM2OTlmZiAhaW1wb3J0YW50O1xuICB9XG59XG4ud2l6YXJkLXdyYXBwZXIge1xuICAud2l6YXJkLWljb24sXG4gIC53aXphcmQtbGFiZWwge1xuICAgIGNvbG9yOiAjM0Y0MjU0O1xuICB9XG59XG5cbi53aXphcmQtc3RlcD4ud2l6YXJkLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQgOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ud2l6YXJkLXN0ZXAge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4ud2l6YXJkLWljb24ge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSAud2l6YXJkLWJhcixcbi5kb25lIC53aXphcmQtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2OTlmZiAhaW1wb3J0YW50O1xufVxuXG4udG9wLWJveCB7XG4gIGNvbG9yICAgICAgOiAjQjVCNUMzO1xuICBtYXJnaW4tbGVmdDogNTBweDtcblxuICBzcGFuIHtcbiAgICBjb2xvciAgICAgICAgICA6ICMwMDA7XG4gICAgLy8gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn0iLCIvL1xyXG4vLyBHbG9iYWwgdmFyaWFibGVzIGZvciBCb290c3RyYXAgY3VzdG9taXphdGlvbi5cclxuLy8gVG8gb3ZlcnJpZGUgYW55IEJvb3RzdHJhcCB2YXJpYWJsZSBzYWZlbHkgeW91IGNhbiB1c2UgX3ZhcmlhYmxlcy5kZW1vLnNjc3NcclxuLy9cclxuXHJcbi8vXHJcbi8vIENvbG9yIHN5c3RlbVxyXG4vL1xyXG5cclxuLy8gQmxhY2sgY29sb3JcclxuJGJsYWNrOiAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IzAwMDAwMCAhZGVmYXVsdDtcclxuXHJcbi8vIFdoaXRlIGNvbG9yXHJcbiR3aGl0ZTogICAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCNmZmZmZmYgIWRlZmF1bHQ7XHJcblxyXG4vLyBHcmF5IGNvbG9yc1xyXG4kZ3JheS0xMDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRjNGNkY5ICFkZWZhdWx0O1xyXG4kZ3JheS0yMDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRUJFREYzICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRTRFNkVGICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjRDFEM0UwICFkZWZhdWx0O1xyXG4kZ3JheS01MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjQjVCNUMzICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjN0U4Mjk5ICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjNUU2Mjc4ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjM0Y0MjU0ICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjMTgxQzMyICFkZWZhdWx0O1xyXG5cclxuLy8gRGFyayBjb2xvcnNcclxuJGRhcms6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTkwMCAhZGVmYXVsdDtcclxuJGRhcmstNzU6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTgwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYXJrLTY1OiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS03MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFyay01MDogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstMjU6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdCRncmF5LTQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBUZXh0IG11dGVkXHJcbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRncmF5LTgwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBHcmF5IGNvbG9ycyBsaXN0XHJcbiRncmF5czogKFxyXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxyXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxyXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxyXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxyXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxyXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxyXG5cdFwiNzAwXCI6ICRncmF5LTcwMCxcclxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcclxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxyXG4pICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEJvb3RzdHJhcCBzdGFuZGFyZCAmIGV4dGVuZGVkIGNvbG9yc1xyXG4vLyBEYXJrIGNvbG9yc1xyXG4kZGFyazogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGRhcmsgIWRlZmF1bHQ7IC8vIEJvb3RzdHJhcCB2YXJpYWJsZVxyXG4kZGFyay1ob3ZlcjogICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdGRhcmtlbigkZGFyaywgMyUpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhcmstbGlnaHQ6ICAgICAgICAgIFx0XHRcdFx0XHRcdFx0ICAgICRncmF5LTQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRkYXJrLWludmVyc2U6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBQcmltYXJ5IGNvbG9yc1xyXG4kcHJpbWFyeTogICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0IzM2OTlGRiAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRwcmltYXJ5LWhvdmVyOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMTg3REU0ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByaW1hcnktbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFMUYwRkYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJpbWFyeS1pbnZlcnNlOiAgXHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBTZWNvbmRhcnkgY29sb3JzXHJcbiRzZWNvbmRhcnk6ICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjZmY4MTAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHNlY29uZGFyeS1ob3ZlcjogIFx0XHRcdFx0XHRcdFx0XHRcdGRhcmtlbigjZmY4MTAwLCA0JSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kc2Vjb25kYXJ5LWxpZ2h0OiAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHNlY29uZGFyeS1pbnZlcnNlOlx0XHRcdFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFN1Y2Nlc3MgY29sb3JzXHJcbiRzdWNjZXNzOiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMUJDNUJEICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHN1Y2Nlc3MtaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMwQkI3QUYgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kc3VjY2Vzcy1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0M5RjdGNSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRzdWNjZXNzLWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gSW5jbyBjb2xvcnNcclxuJGluZm86ICAgICAgICAgXHRcdCBcdFx0XHRcdFx0XHRcdFx0Izg5NTBGQyAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRpbmZvLWhvdmVyOiAgIFx0XHQgXHRcdFx0XHRcdFx0XHRcdCM3MzM3RUUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5mby1saWdodDogICBcdFx0IFx0XHRcdFx0XHRcdFx0XHQjRUVFNUZGICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGluZm8taW52ZXJzZTogXHRcdCBcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFdhcm5pbmcgY29sb3JzXHJcbiR3YXJuaW5nOiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRkZBODAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHdhcm5pbmctaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNFRTlEMDEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2FybmluZy1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0ZGRjRERSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR3YXJuaW5nLWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRGFuZ2VyIGNvbG9yc1xyXG4kZGFuZ2VyOiAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0I0Y2NEU2MCAhZGVmYXVsdDsgLy8gQm9vdHN0cmFwIHZhcmlhYmxlXHJcbiRkYW5nZXItaG92ZXI6ICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjRUUyRDQxICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGRhbmdlci1saWdodDogICAgIFx0XHRcdFx0XHRcdFx0XHRcdCNGRkUyRTUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZGFuZ2VyLWludmVyc2U6ICAgXHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIExpZ2h0IGNvbG9yc1xyXG4kbGlnaHQ6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJGxpZ2h0LWhvdmVyOiAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbGlnaHQtbGlnaHQ6ICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCRncmF5LTEwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRsaWdodC1pbnZlcnNlOiAgICAgICAgXHRcdFx0XHRcdFx0XHRcdCRncmF5LTYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBXaGl0ZSBjb2xvcnNcclxuJHdoaXRlOiAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHdoaXRlLWhvdmVyOiAgICBcdFx0XHRcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2hpdGUtbGlnaHQ6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kd2hpdGUtaW52ZXJzZTogICAgXHRcdFx0XHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtY29sb3JzOiAoXHJcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSwgIC8vIGN1c3RvbSBjb2xvciB0eXBlXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIEV4dGVuZGVkIGhvdmVyIGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtaG92ZXItY29sb3JzOiAoXHJcblx0XCJ3aGl0ZVwiOiAgICAgICR3aGl0ZS1ob3ZlciwgICAvLyBjdXN0b20gY29sb3IgdHlwZVxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeS1ob3ZlcixcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWhvdmVyLFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLWhvdmVyLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLWhvdmVyLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWhvdmVyLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXItaG92ZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LWhvdmVyLFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWhvdmVyXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIGludmVyc2UgY29sb3JzIGZvciBCb290c3RyYXAgdGhlbWUgY29sb3JzXHJcbiR0aGVtZS1pbnZlcnNlLWNvbG9yczogKFxyXG5cdFwid2hpdGVcIjogICAgICAkd2hpdGUtaW52ZXJzZSxcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnktaW52ZXJzZSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWludmVyc2UsXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MtaW52ZXJzZSxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mby1pbnZlcnNlLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWludmVyc2UsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlci1pbnZlcnNlLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodC1pbnZlcnNlLFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWludmVyc2VcclxuKSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgb3V0bGluZSBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcclxuJHRoZW1lLW91dGxpbmUtaW52ZXJzZS1jb2xvcnM6IChcclxuXHRcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkZGFyay03NSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRkYXJrLTc1LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIGxpZ2h0IGNvbG9ycyBmb3IgQm9vdHN0cmFwIHRoZW1lIGNvbG9yc1xyXG4kdGhlbWUtbGlnaHQtY29sb3JzOiAoXHJcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLWxpZ2h0LFxyXG5cdFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeS1saWdodCxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LWxpZ2h0LFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLWxpZ2h0LFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLWxpZ2h0LFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLWxpZ2h0LFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXItbGlnaHQsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LWxpZ2h0LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLWxpZ2h0XHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIEV4dGVuZGVkIHNoYWRvdyBjb2xvcnMgZm9yIEJvb3RzdHJhcCB0aGVtZSBjb2xvcnNcclxuJHRoZW1lLXNoYWRvdy1jb2xvcnM6IChcclxuICAgIFwid2hpdGVcIjogICAgICAkZGFyayxcclxuXHRcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJGRhcmssXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkZGFyayxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4pICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBFeHRlbmRlZCB0aGVtZSB0ZXh0IGNvbG9yc1xyXG4kdGhlbWUtdGV4dC1jb2xvcnM6IChcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcblx0XCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRkYXJrLFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrLFxyXG4gICAgXCJkYXJrLTc1XCI6ICAgICRkYXJrLTc1LFxyXG4gICAgXCJkYXJrLTY1XCI6ICAgICRkYXJrLTY1LFxyXG4gICAgXCJkYXJrLTUwXCI6ICAgICRkYXJrLTUwLFxyXG4gICAgXCJkYXJrLTI1XCI6ICAgICRkYXJrLTI1LFxyXG4gICAgXCJtdXRlZFwiOiAgICAgICR0ZXh0LW11dGVkXHJcbikgIWRlZmF1bHQ7ICAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIFNvY2lhbCBOZXR3b3JrIENvbG9ycyBVc2VkIFdpdGggQm9vc3RyYXAgQnV0dG9ucyhzZWU6IGh0dHBzOi8vcHJpbWFyeWNvbG9ycy5uZXQvKVxyXG4kc29jaWFsLWNvbG9yczogKFxyXG5cdGZhY2Vib29rOiAoXHJcblx0XHRiYXNlOiAjM2I1OTk4LFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjM2I1OTk4LCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzNiNTk5OCwgNy41JSlcclxuXHQpLFxyXG5cdGdvb2dsZTogKFxyXG5cdFx0YmFzZTogI2RkNGIzOSxcclxuXHRcdGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoI2RkNGIzOSwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCNkZDRiMzksIDcuNSUpXHJcblx0KSxcclxuXHR0d2l0dGVyOiAoXHJcblx0XHRiYXNlOiAjMWRhMWYyLFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjMWRhMWYyLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oIzFkYTFmMiwgNy41JSlcclxuXHQpLFxyXG5cdGluc3RhZ3JhbTogKFxyXG5cdFx0YmFzZTogI2UxMzA2YyxcclxuXHRcdGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoI2UxMzA2YywgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCNlMTMwNmMsIDcuNSUpXHJcblx0KSxcclxuXHR5b3V0dWJlOiAoXHJcblx0XHRiYXNlOiAjZmYwMDAwLFxyXG5cdFx0aW52ZXJzZTogI2ZmZmZmZixcclxuICAgICAgICBsaWdodDogcmdiYSgjZmYwMDAwLCAwLjEpLFxyXG4gICAgICAgIGhvdmVyOiBkYXJrZW4oI2ZmMDAwMCwgNy41JSlcclxuXHQpLFxyXG4gICAgbGlua2VkaW46IChcclxuICAgICAgICBiYXNlOiAjMDA3N2I1LFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoIzAwNzdiNSwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCMwMDc3YjUsIDcuNSUpXHJcbiAgICApLFxyXG4gICAgc2t5cGU6IChcclxuICAgICAgICBiYXNlOiAjMDBhZmYwLFxyXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmYsXHJcbiAgICAgICAgbGlnaHQ6IHJnYmEoIzAwYWZmMCwgMC4xKSxcclxuICAgICAgICBob3ZlcjogZGFya2VuKCMwMGFmZjAsIDcuNSUpXHJcbiAgICApXHJcbikgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gRXh0ZW5kZWQgY3VzdG9tIHNwYWNpbmcgZm9yIEJvb3RzdHJhcFxyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHNwYWNlcnM6IChcclxuICAgIDA6IDAsXHJcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksICBcdC8vIDMuNXB4XHJcbiAgICAyOiAoJHNwYWNlciAqIC41KSwgICBcdC8vIDdweDtcclxuXHQzOiAoJHNwYWNlciAqIC43NSksICBcdC8vIDEwLjVweFxyXG5cdDQ6ICgkc3BhY2VyICogMSksICAgIFx0Ly8gMTRweFxyXG5cdDU6ICgkc3BhY2VyICogMS4yNSksIFx0Ly8gMTcuNXB4XHJcblx0NjogKCRzcGFjZXIgKiAxLjUpLCAgXHQvLyAyMXB4XHJcblx0NzogKCRzcGFjZXIgKiAxLjc1KSwgXHQvLyAyNC41cHhcclxuXHQ4OiAoJHNwYWNlciAqIDIpLCAgICBcdC8vIDI4cHhcclxuXHQ5OiAoJHNwYWNlciAqIDIuMjUpLCBcdC8vIDMxLjVweFxyXG5cdDEwOiAoJHNwYWNlciAqIDIuNSksIFx0Ly8gMzVweFxyXG5cdDExOiAoJHNwYWNlciAqIDIuNzUpLFx0Ly8gMzguNXB4XHJcblx0MTI6ICgkc3BhY2VyICogMyksICAgXHQvLyA0MnB4XHJcblx0MTM6ICgkc3BhY2VyICogMy4yNSksXHQvLyA0NS41cHhcclxuXHQxNDogKCRzcGFjZXIgKiAzLjUpLCBcdC8vIDQ5cHhcclxuXHQxNTogKCRzcGFjZXIgKiAzLjc1KSwgXHQvLyA1Mi41cHhcclxuXHQxNjogKCRzcGFjZXIgKiA0KSwgXHRcdC8vIDU1cHhcclxuXHQxNzogKCRzcGFjZXIgKiA0LjI1KSwgXHQvLyA1OC41cHhcclxuXHQxODogKCRzcGFjZXIgKiA0LjUpLCBcdC8vIDYycHhcclxuXHQxOTogKCRzcGFjZXIgKiA0Ljc1KSwgXHQvLyA2NS41cHhcclxuXHQyMDogKCRzcGFjZXIgKiA1KSwgXHRcdC8vIDY5cHhcclxuXHQyMTogKCRzcGFjZXIgKiA1LjI1KSxcdC8vIDczLjVweFxyXG5cdDIyOiAoJHNwYWNlciAqIDUuNSksIFx0Ly8gNzdweFxyXG5cdDIzOiAoJHNwYWNlciAqIDUuNzUpLCBcdC8vIDgwLjVweFxyXG5cdDI0OiAoJHNwYWNlciAqIDYpLCBcdFx0Ly8gODRweFxyXG5cdDI1OiAoJHNwYWNlciAqIDYuMjUpLCBcdC8vIDg3LjVweFxyXG5cdDI2OiAoJHNwYWNlciAqIDYuNSksIFx0Ly8gOTFweFxyXG5cdDI3OiAoJHNwYWNlciAqIDYuNzUpLCBcdC8vIDk0LjVweFxyXG5cdDI4OiAoJHNwYWNlciAqIDcpLCBcdFx0Ly8gOTlweFxyXG5cdDI5OiAoJHNwYWNlciAqIDcuMjUpLCAgIC8vIDEwMi41cHhcclxuXHQzMDogKCRzcGFjZXIgKiA3LjUpLCBcdC8vIDEwNnB4XHJcblx0MzE6ICgkc3BhY2VyICogNy43NSksIFx0Ly8gMTA5LjVweFxyXG5cdDMyOiAoJHNwYWNlciAqIDgpLCBcdFx0Ly8gMTEzcHhcclxuXHQzMzogKCRzcGFjZXIgKiA4LjI1KSwgXHQvLyAxMTYuNXB4XHJcblx0MzQ6ICgkc3BhY2VyICogOC41KSwgXHQvLyAxMjBweFxyXG5cdDM1OiAoJHNwYWNlciAqIDguNzUpLCBcdC8vIDEyMy41cHhcclxuXHQzNjogKCRzcGFjZXIgKiA5KSwgXHRcdC8vIDEyN3B4XHJcblx0Mzc6ICgkc3BhY2VyICogOS4yNSksICAgIC8vIDEzMC41cHhcclxuXHQ0ODogKCRzcGFjZXIgKiA5LjUpLCBcdC8vIDEzNHB4XHJcblx0Mzk6ICgkc3BhY2VyICogOS43NSksIFx0Ly8gMTM3LjVweFxyXG4gICAgNDA6ICgkc3BhY2VyICogMTApLCBcdC8vIDE0MHB4XHJcbik7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuJGxpbmUtaGVpZ2h0LXhsOlx0XHRcdFx0XHRcdFx0XHRcdDEuOCAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MS41ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQxLjM1ICFkZWZhdWx0O1xyXG5cclxuJGNvbXBvbmVudC1saWdodC1zdHlsZS1vcGFjaXR5OiAgICAgICAgICAgICAgICAgXHQwLjEgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4vLyBCb3ggc2hhZG93XHJcbiRib3gtc2hhZG93LXhzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgkYmxhY2ssIDAuMDUpO1xyXG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQwIC4xcmVtIDFyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MCAuNXJlbSAxLjVyZW0gMC41cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcclxuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MCAxcmVtIDJyZW0gMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG5cclxuLy8gQm9yZGVyIFJhZGl1ZXNcclxuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgXHRcdFx0XHRcdFx0LjI4cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQuNDJyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIFx0XHRcdFx0XHRcdC44NXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQm9yZGVyIHNldHRpbmdzXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBIb3ZlciBiYWNrZ3JvdW5kIGNvbG9yXHJcbiRob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gQWN0aXZlYmFja2dyb3VuZCBjb2xvclxyXG4kYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRncmF5LTEwMCwgMSUpICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbi8vIE9wdGlvbnNcclxuLy9cclxuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxyXG4kZW5hYmxlLXJvdW5kZWQ6IFx0XHRcdFx0XHRcdFx0XHRcdHRydWUgIWRlZmF1bHQ7XHJcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0dHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiAxMDAwcHgsXHJcbiAgeGw6IDEyMDBweCxcclxuICB4eGw6IDE0MDBweCAvLyBjdXN0b20gYnJlYWtwb2ludFxyXG4pICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEdyaWQgY29udGFpbmVyc1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogNTQwcHgsXHJcbiAgbWQ6IDcyMHB4LFxyXG4gIGxnOiAxNTAwcHgsXHJcbiAgeGw6IDE3MDBweCxcclxuICB4eGw6IDE5MDBweCAvLyBjdXN0b20gYnJlYWtwb2ludFxyXG4pICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MTIgIWRlZmF1bHQ7XHJcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIFx0XHRcdFx0XHRcdDI1cHggIWRlZmF1bHQ7XHJcbiRncmlkLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuXHJcbi8vIEJvZHlcclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JHdoaXRlICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gRm9udCBmYW1pbHlcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgXHRcdFx0XHRcdFx0Um9ib3RvLCBDb2xmYXgsUmVjdGEsIFwic2Fucy1zZXJpZlwiICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0MXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDEzcHhgXHJcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgXHQgXHRcdFx0XHRcdCRmb250LXNpemUtYmFzZSAqIDEuMDggIWRlZmF1bHQ7ICAgLy8gMTQuMDRweFxyXG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHQkZm9udC1zaXplLWJhc2UgKiAuOTI1ICFkZWZhdWx0OyAgIC8vIDEyLjAyNXB4XHJcbiRmb250LXNpemUteHM6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRmb250LXNpemUtYmFzZSAqIC44ICFkZWZhdWx0OyAgICAgLy8gMTAuNHB4XHJcblxyXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDsgICAgICAvLyAyNnB4XHJcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0OyAgIC8vIDIyLjc1cHhcclxuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgICAgLy8gMTkuNXB4XHJcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjM1ICFkZWZhdWx0OyAgIC8vIDE3LjU1cHhcclxuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7ICAgLy8gMTYuMjVweFxyXG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4xNzUgIWRlZmF1bHQ7ICAvLyAxNS4yNzVweFxyXG5cclxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuMiAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcblxyXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0OyAgLy8gNzEuNXB4XHJcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjVyZW0gIWRlZmF1bHQ7ICAvLyA1OC41cHhcclxuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDsgIC8vIDQ1LjVweFxyXG4kZGlzcGxheTQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi41cmVtICFkZWZhdWx0OyAgLy8gMzIuNXB4XHJcbiRkaXNwbGF5NS1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjI1cmVtICFkZWZhdWx0OyAvLyAyOS41cHhcclxuXHJcbi8vIEZvbnQgU2l6ZXNcclxuJGZvbnQtc2l6ZXM6IChcclxuICAgIGZvbnQtc2l6ZS1oMTogJGgxLWZvbnQtc2l6ZSxcclxuICAgIGZvbnQtc2l6ZS1oMjogJGgyLWZvbnQtc2l6ZSxcclxuICAgIGZvbnQtc2l6ZS1oMzogJGgzLWZvbnQtc2l6ZSxcclxuICAgIGZvbnQtc2l6ZS1oNDogJGg0LWZvbnQtc2l6ZSxcclxuICAgIGZvbnQtc2l6ZS1oNTogJGg1LWZvbnQtc2l6ZSxcclxuICAgIGZvbnQtc2l6ZS1oNjogJGg2LWZvbnQtc2l6ZSxcclxuICAgIGRpc3BsYXkxOiAkZGlzcGxheTEtc2l6ZSxcclxuICAgIGRpc3BsYXkyOiAkZGlzcGxheTItc2l6ZSxcclxuICAgIGRpc3BsYXkzOiAkZGlzcGxheTMtc2l6ZSxcclxuICAgIGRpc3BsYXk0OiAkZGlzcGxheTQtc2l6ZSxcclxuICAgIGRpc3BsYXk1OiAkZGlzcGxheTUtc2l6ZVxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcclxuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcclxuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcclxuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcclxuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcclxuXHJcbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xyXG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xyXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODAlICFkZWZhdWx0O1xyXG5cclxuLy8gRm9udCBXZWlnaHRcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgXHRcdFx0XHRcdFx0bGlnaHRlciAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAgXHRcdFx0XHRcdFx0MzAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICBcdFx0XHRcdFx0XHQ0MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIFx0XHRcdFx0XHRcdDUwMCAhZGVmYXVsdDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogICAgICAgICAgXHRcdFx0XHRcdFx0NjAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZGVzdDogICAgICAgICAgXHRcdFx0XHRcdFx0NzAwICFkZWZhdWx0O1xyXG5cclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBUcmFuc2l0aW9uXHJcbiR0cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0YWxsIDAuMTVzIGVhc2UgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdHJhbnNpdGlvbi1saW5rOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRyYW5zaXRpb24taW5wdXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRwcmltYXJ5LCAxNSUpICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xyXG4vLyBEYXJrZW4gcGVyY2VudGFnZSBmb3IgbGlua3Mgd2l0aCBgLnRleHQtKmAgY2xhc3MgKGUuZy4gYC50ZXh0LXN1Y2Nlc3NgKVxyXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAgICAgICAgICAgMTUlICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vL1xyXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC42NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAuMjUpICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNTVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuODI1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgMS40MnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICBcdFx0XHRcdFx0XHQuNiAhZGVmYXVsdDtcclxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0Y29sb3IgLjNzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4zcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuM3MgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7Ly8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgIFx0XHRcdFx0XHRcdG5vcm1hbCAhZGVmYXVsdDtcclxuJGJ0bi1zZWNvbmRhcnktY29sb3I6XHRcdFx0XHRcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kYnRuLXNlY29uZGFyeS1ob3Zlci1iZy1jb2xvcjpcdFx0XHRcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRidG4taWNvbi1zaXplLXhzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNHB4ICFkZWZhdWx0OyAvL2N1c3RvbSBwYXJhbWV0ZXJcclxuXHJcbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICBcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgIFx0XHRcdCR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6XHRcdFx0XHRcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjpcdFx0XHRcdFx0XHRcdGxpZ2h0ZW4oJHByaW1hcnksIDEwJSk7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgXHRcdFx0JGdyYXktMTAwICFkZWZhdWx0O1xyXG4kaW5wdXQtcmVhZG9ubHktYmc6ICAgICAgICAgICAgICAgICAgICAgXHRcdFx0JHdoaXRlICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGlucHV0LWdyb3VwLWljb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgXHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgXHRcdFx0JGRhcmstNzUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICBcdFx0XHQkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgXHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICBcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgIFx0XHRcdCRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXNvbGlkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRpbnB1dC1zb2xpZC1iZy1mb2N1czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDA7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kaW5wdXQtc29saWQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRpbnB1dC1zb2xpZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdCRkYXJrLTc1OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgICAgICBub25lICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vIEZvcm1zXHJcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgICAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xyXG4kZm9ybS1sYWJlbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLWxhYmVsLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAgICAgMC45cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tZmVlZGJhY2stZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgIDQwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRmb3JtLXRleHQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjlyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kZm9ybS10ZXh0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGZvcm0tdmFsaWRhdGlvbi1pbnB1dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGZhbHNlOyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBUYWJsZVxyXG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHR0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgICBcdFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgXHRcdFx0XHRcdCR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICAgXHRcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0JGdyYXktMTAwICFkZWZhdWx0O1xyXG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAgIFx0XHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJHRhYmxlLWhlYWQtZm9udC1zaXplOiAgICAgICAgICAgICBcdFx0XHRcdFx0MXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1oZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgXHRcdFx0XHRcdDYwMCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICBcdFx0XHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdCRkYXJrICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICBcdFx0XHRcdFx0XHRyZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgXHRcdFx0XHRcdFx0JHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgXHRcdFx0XHRcdFx0cmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xyXG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBcdFx0XHRcdFx0XHRsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgMC45cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC10ZXh0LXRyYW5zZm9ybTogICAgICAgICAgICAgICAgIHVwcGVyY2FzZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0YWJsZS1jb21wYWN0LWhlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICA2MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kdGFibGUtY29tcGFjdC1oZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgNjAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHRhYmxlLWNvbXBhY3QtaGVhZC1sZXR0ZXItc3BhY2luZzogICAgICAgICAgICAgICAgIDAuMXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG4vLyBDYXJkXHJcbiRjYXJkLWJveC1zaGFkb3c6IFx0XHRcdFx0XHRcdFx0XHRcdDBweCAwcHggMzBweCAwcHggcmdiYSg4Miw2MywxMDUsMC4wNSkgIWRlZmF1bHQ7IC8vIGNhcmQgY3VzdG9tIHNoYWRvd1xyXG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQkd2hpdGUgIWRlZmF1bHQ7XHJcbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0MnJlbSAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0Mi4yNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgXHRcdFx0XHQkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWhlYWRlci1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjVyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiBcdFx0XHRcdFx0XHRcdFx0NzBweCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjYXJkLXN0aWNreS1oZWFkZXItYmc6ICAgXHRcdFx0XHRcdFx0ICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRjYXJkLXN0aWNreS1oZWFkZXItaGVpZ2h0OiBcdFx0XHRcdFx0XHQ3MHB4ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNhcmQtc3RpY2t5LXppbmRleDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMSAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kY2FyZC1zdGlja3ktc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMHB4IDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMSkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuLy8gTGlzdCBncm91cFxyXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICBcdFx0XHRcdCRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICBcdFx0XHRcdFx0MS43NXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1hcmdpbiBiZXR3ZWVuIGVsZW1lbnRzIGluIGZvb3RlciwgbXVzdCBiZSBsb3dlciB0aGFuIG9yIGVxdWFsIHRvIDIgKiAkbW9kYWwtaW5uZXItcGFkZGluZ1xyXG4kbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICBcdFx0XHRcdC41cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgXHRcdFx0XHQuNXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgXHRcdFx0XHQxLjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgXHRcdFx0XHRudWxsICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICBcdFx0XHRcdCR3aGl0ZSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgXHRcdFx0XHRyZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICBcdFx0XHRcdDAgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgIFx0XHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IFx0XHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93OiAgICAgICBcdFx0XHRcdCAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgXHRcdFx0XHQwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgIFx0XHRcdFx0XHQwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcclxuXHJcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xyXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgIFx0XHQgXHRcdFx0JGJsYWNrICFkZWZhdWx0O1xyXG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICBcdFx0XHRcdC4yICFkZWZhdWx0O1xyXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICBcdFx0XHRcdCRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIFx0XHRcdCBcdCRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAgICAgICAgIFx0XHRcdFx0MXB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICBcdFx0XHRcdDFweCAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgICAgXHRcdFx0XHQxLjVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgIFx0XHRcdFx0MS43NXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgXHRcdFx0XHQkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG5cclxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0IFx0XHRcdDExNDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ4MDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ1MDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQzMDBweCAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0JHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgIFx0XHRcdFx0JGdyYXktMzAwICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgIFx0IFx0XHRcdFx0JGdyYXktMjAwICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICBcdFx0XHRcdCRncmF5LTMwMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgXHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gRHJvcGRvd25zXHJcbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6XHRcdFx0XHRcdFx0XHRcdDBweCAwcHggNTBweCAwcHggcmdiYSg4Miw2MywxMDUsIDAuMTUpICFkZWZhdWx0O1xyXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDk4ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLW1lbnUtd2lkdGhzOiAoXHJcblx0c206IDE3NXB4LFxyXG5cdG1kOiAyNTBweCxcclxuXHRsZzogMzUwcHgsXHJcblx0eGw6IDQwMHB4LFxyXG5cdHh4bDogNjAwcHhcclxuKTsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcblxyXG5cclxuLy8gUG9wb3ZlcnNcclxuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgXHRcdFx0XHQwLjlyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIFx0XHRcdFx0Mjc2cHggIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgIFx0XHRcdFx0MXB4ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBcdFx0XHRcdCNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgIFx0XHRcdFx0JGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIFx0XHRcdFx0MHB4IDBweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBcdFx0XHRcdCNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgIFx0XHRcdFx0JGRhcmsgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1mb250LXdlaWdodDogICAgICAgICAgIFx0XHRcdFx0NTAwICFkZWZhdWx0OyAgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwb3BvdmVyLWhlYWRlci1mb250LXNpemU6ICAgICAgICAgICAgIFx0XHRcdFx0MXJlbSAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICBcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgIFx0XHRcdFx0MS4yNXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDsgIC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICBcdFx0XHRcdCRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFRvb2x0aXBzXHJcbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIFx0XHRcdFx0MC45cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDIwMHB4ICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdCRkYXJrLTc1ICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdCNmZmZmZmYgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgIFx0XHRcdFx0M3B4ICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDEgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIFx0XHRcdFx0JHBvcG92ZXItYm94LXNoYWRvdyAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIFx0XHRcdFx0Ljc1cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICBcdFx0XHRcdDFyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0MCAhZGVmYXVsdDtcclxuXHJcbi8vIEN1c3RvbSBUb2FzdHNcclxuJHRvYXN0LXppbmRleDpcdFx0XHRcdFx0XHRcdFx0XHRcdCR6aW5kZXgtZHJvcGRvd24gKyAxMDAgIWRlZmF1bHQ7XHJcbiR0b2FzdC1zcGFjaW5nOlx0XHRcdFx0XHRcdFx0XHRcdFx0MnJlbSAgIWRlZmF1bHQ7XHJcbiR0b2FzdC13aWR0aDogXHRcdFx0XHRcdFx0XHRcdFx0XHQzNTBweCAhZGVmYXVsdDtcclxuJHRvYXN0LWJveC1zaGFkb3c6XHRcdFx0XHRcdFx0XHRcdFx0JGRyb3Bkb3duLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItY29sb3I6IFx0XHRcdFx0XHRcdFx0XHQkZGFyay03NSAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBcdFx0XHRcdFx0I2ZmZiAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6XHRcdFx0XHRcdFx0XHQkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gUHJvZ3Jlc3MgYmFyc1xyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWhlaWdodC14czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcm9ncmVzcy1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjc1cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJHByb2dyZXNzLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgICAgICAgICAgICAgICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xyXG5cclxuLy8gQmFkZ2VzXHJcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0LjVlbSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQuNzVlbSAhZGVmYXVsdDtcclxuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ4NSUgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gQ29kZVxyXG4kY29kZS1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJGNvZGUtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMTVyZW0gMC41cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcblxyXG4vLyBNb2RhbHNcclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgICAgICAgICAgICAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtdGl0bGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGRhcmsgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuM3JlbSAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1zbWFsbC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRtb2RhbC10aXRsZS1zbWFsbC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICA0MDAgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgMC45cmVtICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuJG1vZGFsLXRpdGxlLWNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kbW9kYWwtdGl0bGUtY2xvc2UtaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xyXG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAgICAgICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xyXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XHJcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcclxuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFBhZ2luYXRpb25cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuXHJcbi8vIEFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuJGFsZXJ0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQkY2FyZC1ib3gtc2hhZG93ICFkZWZhdWx0OyAvLyBDdXN0b20gdmFyaWFibGVcclxuXHJcblxyXG4vLyBOYXZzXHJcblxyXG4kbmF2LWxpbmstcHg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41cmVtO1xyXG4kbmF2LWxpbmstcHk6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC43NXJlbTtcclxuJG5hdi1idG4tcHg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFyZW07XHJcbiRuYXYtc2VjdGlvbi1weTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjVyZW07XHJcbiRuYXYtZWxlbS1zcGFjZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjI1cmVtO1xyXG5cclxuJG5hdi1saW5rLWJnLWhvdmVyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTEwMDtcclxuJG5hdi1saW5rLWJnLWFjdGl2ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMDtcclxuXHJcbiRuYXYtaGVhZGVyLXB5OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xyXG4kbmF2LWZvb3Rlci1weTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcclxuXHJcbiRuYXYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xyXG4kbmF2LWljb24tc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbTtcclxuJG5hdi1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJyZW07XHJcbiIsIi8vXHJcbi8vIFNWRyBJY29uXHJcbi8vXHJcblxyXG5cclxuQG1peGluIHN2Zy1pY29uLWNvbG9yKCRjb2xvciwgJGltcG9ydGFudDogZmFsc2UpIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgZyB7XHJcbiAgICAgICAgICAgIFtmaWxsXSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAgIGZpbGw6ICRjb2xvciB2YWx1ZWlmKCRpbXBvcnRhbnQsICFpbXBvcnRhbnQsIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZyB7XHJcbiAgICAgICAgICAgICAgICBbZmlsbF0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gc3ZnLWljb24tdHJhbnNpdGlvbigpIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgZyB7XHJcbiAgICAgICAgICAgIFtmaWxsXSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHN2Zy1pY29uLXNpemUoJHNpemUsICRpbXBvcnRhbnQ6IGZhbHNlKSB7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogJHNpemUgdmFsdWVpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcclxuICAgICAgICB3aWR0aDogJHNpemUgdmFsdWVpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHN2Zy1sb2dvLWNvbG9yKCRjb2xvciwgJGltcG9ydGFudDogZmFsc2Upe1xyXG4gICAgc3Zne1xyXG4gICAgICAgIHBhdGh7XHJcbiAgICAgICAgICAgIGZpbGw6ICRjb2xvciB2YWx1ZWlmKCRpbXBvcnRhbnQsICFpbXBvcnRhbnQsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vXHJcbi8vIFRvIG1ha2UgZnV0dXJlIHVwZGF0ZXMgZWFzaWVyIGNvbnNpZGVyIG92ZXJyaWRpbmcgdGhlIGdsb2JhbCB2YXJpYWJsZXMgZnJvbSBfdmFyaWFibGVzLmJvb3RzdHJhcC5zY3NzIGFuZCBfdmFyaWFibGVzLmN1c3RvbS5zY3NzIGZvciBjdXJyZW50IGRlbW8gaW4gdGhpcyBmaWxlLlxyXG4vLyBOb3RlIHRoYXQgdGhpcyBmaWxlIGlzIGluY2x1ZGVkIGZpcnN0IGFuZCB2YXJpYWJsZXMgZGVmaW5lZCBpbiBfdmFyaWFibGVzLmJvb3RzdHJhcC5zY3NzIGFuZCBfdmFyaWFibGVzLmN1c3RvbS5zY3NzXHJcbi8vIGFyZSBub3QgYWNjZXNzaWJsZSBpbiB0aGlzIGZpbGUgYnV0IHlvdSBjYW4gb3ZlcnJpZGUgYW55IGdsb2JhbCB2YXJpYWJsZSBhcyBzaG93biBiZWxvdzpcclxuLy9cclxuXHJcbi8vIFRoZW1lIGNvbG9yc1xyXG4vLyBPdmVycmlkZSBwcmltYXJ5IGNvbG9yIHZhcmlhbnRzXHJcbiRwcmltYXJ5OiAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQjMDA1Zjk5OyAvLyBCb290c3RyYXAgdmFyaWFibGVcclxuJHByaW1hcnktaG92ZXI6ICAgIFx0XHRcdFx0XHRcdFx0XHRcdCMxODdERTQ7IC8vIEN1c3RvbSB2YXJpYWJsZVxyXG4kcHJpbWFyeS1saWdodDogICAgXHRcdFx0XHRcdFx0XHRcdFx0I0UxRjBGRjsgLy8gQ3VzdG9tIHZhcmlhYmxlXHJcbiRwcmltYXJ5LWludmVyc2U6ICBcdFx0XHRcdFx0XHRcdFx0XHQjRkZGRkZGOyAvLyBDdXN0b20gdmFyaWFibGVcclxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvL1xyXG4vLyBXaXphcmQgM1xyXG4vLyBQYWdlcyBTQVNTIGZpbGVzIGFyZSBjb21waWxlZCBpbnRvIHNlcGFyYXRlIGNzcyBmaWxlc1xyXG4vL1xyXG5cclxuLy8gSW5pdGlhbGl6YXRpb24gb2YgZ2xvYmFsIHZhcmlhYmxlcywgbWl4aW5zIGFuZCBmdW5jdGlvbnNcclxuQGltcG9ydCBcIi4uLy4uL2luaXRcIjtcclxuXHJcbi8vIEJhc2VcclxuLndpemFyZC53aXphcmQtMyB7XHJcblx0Ly8gTmF2XHJcblx0LndpemFyZC1uYXYge1xyXG5cdFx0Ly8gU3RlcHNcclxuXHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG5cdFx0XHQvLyBTdGVwXHJcblx0XHRcdC53aXphcmQtc3RlcCB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRmbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxuXHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRjb2xvcjogJHRleHQtbXV0ZWQ7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAycmVtIDAuNXJlbTtcclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLXRpdGxlIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cclxuXHRcdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAycmVtO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LndpemFyZC1iYXIge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRncmF5LTIwMDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNHB4O1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWxpbms7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCZbZGF0YS13aXphcmQtc3RhdGU9XCJjdXJyZW50XCJdIHtcclxuXHRcdFx0XHRcdC53aXphcmQtbGFiZWwge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJHByaW1hcnk7XHJcblxyXG5cdFx0XHRcdFx0XHQud2l6YXJkLWJhciB7XHJcblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gcG9ydHJhaXQgdGFibGV0IGFuZCBtb2JpbGUgbW9kZVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuXHQud2l6YXJkLndpemFyZC0zIHtcclxuXHRcdC8vIE5hdlxyXG5cdFx0LndpemFyZC1uYXYge1xyXG5cdFx0XHQud2l6YXJkLXN0ZXBzIHtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuXHRcdFx0XHQud2l6YXJkLXN0ZXAge1xyXG5cdFx0XHRcdFx0ZmxleDogMCAwIDEwMCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdFx0XHQud2l6YXJkLWxhYmVsIHtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdFx0XHRmbGV4OiAwIDAgMTAwJTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMXJlbSAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvL1xyXG4vLyBXaXphcmQgMlxyXG4vLyBQYWdlcyBTQVNTIGZpbGVzIGFyZSBjb21waWxlZCBpbnRvIHNlcGFyYXRlIGNzcyBmaWxlc1xyXG4vL1xyXG5cclxuLy8gSW5pdGlhbGl6YXRpb24gb2YgZ2xvYmFsIHZhcmlhYmxlcywgbWl4aW5zIGFuZCBmdW5jdGlvbnNcclxuQGltcG9ydCBcIi4uLy4uL2luaXRcIjtcclxuXHJcblxyXG4vLyBWYXJpYWJsZXNcclxuJHdpemFyZC1uYXYtd2lkdGg6IDQwMHB4O1xyXG4kd2l6YXJkLW5hdi13aWR0aC1zbTogMzI1cHg7XHJcblxyXG4vLyBCYXNlXHJcbi53aXphcmQud2l6YXJkLTIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cdC8vIE5hdlxyXG5cdC53aXphcmQtbmF2IHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmbGV4OiAwIDAgJHdpemFyZC1uYXYtd2lkdGg7XHJcblx0XHR3aWR0aDogJHdpemFyZC1uYXYtd2lkdGg7XHJcblx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0Ly8gU3RlcHNcclxuXHRcdC53aXphcmQtc3RlcHMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0XHRcdC8vIFN0ZXBcclxuXHRcdFx0LndpemFyZC1zdGVwIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWxpbms7XHJcblxyXG5cdFx0XHRcdC53aXphcmQtd3JhcHBlciB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndpemFyZC1pY29uIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMi41cmVtO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxLjFyZW07XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1saW5rO1xyXG5cclxuXHRcdFx0XHRcdGkge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJHRleHQtbXV0ZWQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnN2Zy1pY29uIHtcclxuXHRcdFx0XHRcdFx0QGluY2x1ZGUgc3ZnLWljb24tY29sb3IoJHRleHQtbXV0ZWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndpemFyZC1sYWJlbCB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJGRhcms7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtZGVzYyB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkZGFyay01MDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC53aXphcmQtYXJyb3cge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICRkYXJrLTUwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjE1cmVtO1xyXG5cclxuXHRcdFx0XHRcdCYubGFzdCB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmW2RhdGEtd2l6YXJkLXN0YXRlPVwiY3VycmVudFwiXSB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS0xMDA7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1saW5rO1xyXG5cclxuXHRcdFx0XHRcdC53aXphcmQtaWNvbiB7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWxpbms7XHJcblxyXG5cdFx0XHRcdFx0XHRpIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnN2Zy1pY29uIHtcclxuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBzdmctaWNvbi1jb2xvcigkcHJpbWFyeSwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0bGVmdDogMTAwJTtcclxuXHRcdFx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICRncmF5LTEwMDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAxcmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQm9keVxyXG5cdC53aXphcmQtYm9keSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBkZXNrdG9wIHJhbmdlXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbihsZywgeGwpIHtcclxuXHQvLyBCYXNlXHJcblx0LndpemFyZC53aXphcmQtMiB7XHJcblx0XHQvLyBOYXZcclxuXHRcdC53aXphcmQtbmF2IHtcclxuXHRcdFx0ZmxleDogMCAwICR3aXphcmQtbmF2LXdpZHRoLXNtO1xyXG5cdFx0XHR3aWR0aDogJHdpemFyZC1uYXYtd2lkdGgtc207XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBUYWJsZXQgYW5kIG1vYmlsZSBtb2RlXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG5cdC53aXphcmQud2l6YXJkLTIge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblxyXG5cdFx0Ly8gTmF2XHJcblx0XHQud2l6YXJkLW5hdiB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuXHJcblx0XHRcdC53aXphcmQtc3RlcHN7XHJcblx0XHRcdFx0LndpemFyZC1zdGVwe1xyXG5cdFx0XHRcdFx0JltkYXRhLXdpemFyZC1zdGF0ZT1cImN1cnJlbnRcIl0ge1xyXG5cdFx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBub25lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQm9keVxyXG5cdFx0LndpemFyZC1ib2R5IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-form_product-form_module_ts.js.map