"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_static-pages_static-pages_module_ts"],{

/***/ 87253:
/*!*****************************************!*\
  !*** ./src/app/core/master-data-map.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMasterValue": () => (/* binding */ getMasterValue)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51353);


function getMasterValue(masterServer, response, column, editing = false) {
    if (Array.isArray(response) && response.length > 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(response).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
            let masterPost = [];
            let resource = result.map((res) => {
                let masterObj = res.data.filter(x => (x.value + "").startsWith("T-") || (x.value + "").startsWith("TA-") || (x.value + "").startsWith("TU-"));
                if (masterObj.length > 0) {
                    let postData = masterObj.map(x => {
                        let columnName = column.find(col => col.name == x.column);
                        if (columnName.masterData) {
                            return {
                                "codeId": x.value,
                                "codeType": columnName.masterData,
                                "langCd": "EN"
                            };
                        }
                    });
                    masterPost.push(...postData);
                }
            });
            return { result, masterPost };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((result) => {
            if (result.masterPost.length > 0) {
                let postData = {
                    "codeBookRequest": result.masterPost
                };
                return masterServer.getMasterValue(postData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((masterValues) => {
                    return result.result.map(resp => {
                        resp.data = resp.data.flatMap(x => {
                            if ((x.value + "").startsWith("T-") || (x.value + "").startsWith("TA-") || (x.value + "").startsWith("TU-")) {
                                let columnName = column.find(col => col.name == x.column);
                                let index = masterValues.findIndex(master => master.codeId == x.value && columnName.masterData == master.codeType);
                                if (index >= 0) {
                                    if (editing) {
                                        return [x, { column: x.column + "Value", value: masterValues[index].codeName, }];
                                        // x.value = masterValues[index].codeName
                                    }
                                    else {
                                        x.value = masterValues[index].codeName;
                                        x["valueCode"] = masterValues[index].codeId;
                                    }
                                }
                            }
                            return x;
                        });
                        return resp;
                    });
                    // return result
                }));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(result.result);
        }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(response);
}
// return masterServer.getMasterValue(postData).pipe(map((x: any) => {
//   return x.map(masterD => {
//     let index = res.data.findIndex(val => val.value == masterD.codeId)
//     res.data[index].value = masterD.codeName
//     return res.data[index]
//   })
// }), mergeMap((res2) => {
//   let masterObj = (res.data as any[]).filter(x => !(x.value + "" as string).includes("T-"))
//   console.log([...masterObj, ...res2]);
//   return of({ data: [...masterObj, ...res2] })
// })
// )
// export function getMasterValue(masterServer: MasterDataService, response: any, column: ConfigInput[]): Observable<any> {
//   console.log(response);
//   if (Array.isArray(response) && response.length > 0) {
//     return of(response).pipe(mergeMap((result: any[]) => {
//       return forkJoin(result.map((res) => {
//         let masterObj = (res.data as any[]).filter(x => (x.value + "" as string).includes("T-"))
//         if (masterObj.length > 0) {
//           let postData = {
//             "codeBookRequest": []
//           }
//           postData.codeBookRequest = masterObj.map(x => {
//             let columnName = column.find(col => col.name == x.column)
//             if (columnName.masterData) {
//               return {
//                 "codeId": x.value,
//                 "codeType": columnName.masterData,
//                 "langCd": "EN"
//               }
//             }
//           })
//           return masterServer.getMasterValue(postData).pipe(map((x: any) => {
//             return x.map(masterD => {
//               let index = res.data.findIndex(val => val.value == masterD.codeId)
//               res.data[index].value = masterD.codeName
//               return res.data[index]
//             })
//           }), mergeMap((res2) => {
//             let masterObj = (res.data as any[]).filter(x => !(x.value + "" as string).includes("T-"))
//             console.log([...masterObj, ...res2]);
//             return of({ data: [...masterObj, ...res2] })
//           })
//           )
//         }
//         return of(res)
//         // res.data.map(x => {
//         //   if((x.value as string).includes("T-")){
//         //   }
//         // })
//       }))
//     }))
//     // response.map(x=> {
//     //   x.data.map()
//     // })
//   }
//   return of(response)
// }


/***/ }),

/***/ 41070:
/*!*********************************************************!*\
  !*** ./src/app/pages/product-form/page-data.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDataService": () => (/* binding */ PageDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 38313);
/* harmony import */ var _core_master_data_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/master-data-map */ 87253);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/master-data/master-data.service */ 27670);









const API_PAGEDATA_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/pagedata`;
let PageDataService = class PageDataService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient, masterData) {
        super(httpClient, API_PAGEDATA_URL);
        this.httpClient = httpClient;
        this.masterData = masterData;
    }
    getDetail(table, resourceId, id, view = false, colums = [], editing = false) {
        return this.httpClient.get(API_PAGEDATA_URL + "/" + table + "/" + resourceId + "/" + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((res) => {
            if (view) {
                return (0,_core_master_data_map__WEBPACK_IMPORTED_MODULE_2__.getMasterValue)(this.masterData, res, colums, editing);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(res);
        }));
    }
    deleteData(table, refID, id) {
        return this.httpClient.delete(API_PAGEDATA_URL + "/" + table + "/" + refID + "/" + id);
    }
    updatePremimun(postData) {
        return this.httpClient.put(API_PAGEDATA_URL + "/resource", postData);
    }
    updateRiskId(postData) {
        // console.log("updateRiskId",postData);
        return this.httpClient.put(API_PAGEDATA_URL + "/update-riskId", postData);
    }
};
PageDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService }
];
PageDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], PageDataService);



/***/ }),

/***/ 33562:
/*!***********************************************************************!*\
  !*** ./src/app/pages/static-pages/addon-page/addon-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddonPageComponent": () => (/* binding */ AddonPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _addon_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addon-page.component.html?ngResource */ 72305);
/* harmony import */ var _addon_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addon-page.component.scss?ngResource */ 75032);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 36565);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../product-form/page-data.service */ 41070);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/is-json */ 88757);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 16164);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-pages.data */ 93900);













let AddonPageComponent = class AddonPageComponent {
    constructor(addOnQuoService, globalFun, cdRef, prodService, numberPipe, pageDataService, loadingService) {
        this.addOnQuoService = addOnQuoService;
        this.globalFun = globalFun;
        this.cdRef = cdRef;
        this.prodService = prodService;
        this.numberPipe = numberPipe;
        this.pageDataService = pageDataService;
        this.loadingService = loadingService;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.fireAdd = false;
        this.addOns = {
            isSum: false,
            isUnit: false,
            isPremium: false,
        };
        this.addOnsData = {};
        this.unsubscribe = [];
        this.premiumAmt = '';
        this.parentData = {};
        this.isLoading = true;
        this.fireAddonRate = {
            "FLOOD": 0.1,
            "SUBLSLD": 0.1,
            "BURGLARY-T-CL1": 0.25,
            "BURGLARY-T-CL2": 0.5,
            "BURGLARY-T-CL3": 0.75,
            "BURGLARY-T-CL4": 1,
            "STHTC-T-BFMGS": 0.2,
            "STHTC-T-002": 0.2,
            "STHTC-T-003": 0.2,
            "STHTC-T-004": 0.2,
            "STHTC-T-WDGS": 0.25,
            "WARRISK": 0.1,
            "ACD": 0.1,
            "EXPLOSION": 0.1,
            "IMPD": 0.1,
            "RSMD": 0.06,
            "SPONTCOMB": 0.08,
            "EQ": 0.1,
            "Fire": 0.1,
        };
        this.crossPercent = {
            "T-004": 0.35,
            "T-003": 0.60,
            "T-002": 0.85,
            "T-001": 1,
        };
        //   RSMD
        // ACD
        // IMPD
        // SUBLSLD
        // EQ
        // EXPLOSION
        // SPONTCOMB
        // STHTC
        // FLOOD
        // BURGLARY
        // WARRISK
        this.addOnList = [];
        this.crossAddons = [];
        this.fireOptionData = {
            "STHTC": [
                { "code": "T-BFMGS", "value": "Building,Furniture,Machine,Goods/Stocks" },
                { "code": "T-WDGS", "value": "Water Damage for Goods/Stocks" },
            ],
            "BURGLARY": [
                { "code": "T-CL1", "value": "Class 1" },
                { "code": "T-CL2", "value": "Class 2" },
                { "code": "T-CL3", "value": "Class 3" },
                { "code": "T-CL4", "value": "Class 4" },
            ]
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.refID = this.prodService.referenceID;
            this.optionId = this.optionId ? this.optionId : this.resourcesId;
            if (this.product.code == "PLMO02" || this.product.code == "PLMO01") {
                this.parentData = this.getParnet();
            }
            this.addOnList = this.product.addOns.filter(x => (x.code != "MED EXP") || (x.code != "CROSSBRDR"));
            this.crossAddons = this.product.addOns.filter(x => x.code == "MED EXP" && (this.product.code != "PLMO01") || (x.code == "CROSSBRDR" && this.product.code != "PLMO01")).map(x => x.id);
            // console.log("ADDON", this.addOnList);
            // console.log("PRODUCTLIST", this.product);
            if (this.addOnList && this.addOnList.length > 0) {
                yield this.loadingService.activate();
                this.addOns = {
                    isSum: this.addOnList[0].sumInsured,
                    isUnit: this.addOnList[0].unit,
                    isPremium: this.addOnList[0].premium,
                };
                let callAddon = true;
                let postData = {
                    quotationNo: this.resourcesId,
                    addOnIds: this.addOnList.map(x => { return x.id; }),
                    optionalKey: this.optionId
                };
                let results = yield this.addOnQuoService.getAllById(postData).toPromise();
                // console.log("RESULT", results);
                if (results.length == 0) {
                    postData.quotationNo = this.refID;
                    postData.optionalKey = this.refID;
                    results = yield this.addOnQuoService.getAllById(postData).toPromise();
                    // console.log("RESULT", results);
                }
                // console.log("ITEM", this.addOnList);
                for (const item of this.addOnList) {
                    item['show'] = true;
                    if (item.validationFun) {
                        item['show'] = this.globalFun[item.validationFun] ? this.globalFun[item.validationFun](this.parentData) : true;
                    }
                    // if (this.product.code == "CLFR01") {
                    //   item["sumInsuredStr"] = "0"
                    //   item["unitStr"] = "0"
                    //   item["premiumStr"] = "0"
                    // }
                    let response = results.find(x => x.addonId == item.id);
                    // if (item['show']) {
                    this.addOnsData[item.id] = {
                        checked: response && item['show'] ? true : false,
                        sum: response ? response.sumInsured || 0 : 0,
                        unit: response ? response.unit || 0 : 0,
                        premium: response ? response.premium || 0 : 0,
                        premiumYear: response ? response.premiumYear || 0 : 0,
                        option: response ? response.option || "" : "",
                        startDate: response ? response.startDate || "" : "",
                        endDate: response ? response.endDate || "" : "",
                    };
                    if (item.code == "STHTC" && this.addOnsData[item.id].option == "") {
                        this.addOnsData[item.id].option = "T-BFMGS";
                    }
                    else if (item.code == "BURGLARY" && this.addOnsData[item.id].option == "") {
                        this.addOnsData[item.id].option = "T-CL1";
                        let unsub = this.globalFun.fireBurgeryResult.subscribe((value) => this.addOnsData[item.id].option = value);
                        // this.addOnsData[addOn.id].premium = this.rateByValue(addOn)
                        this.unsubscribe.push(unsub);
                    }
                    if (item.sumInsured) {
                        this.getGlobalFun(item.sumInsuredStr, 'addOnsData', item.id, 'sum', item);
                    }
                    if (item.unit) {
                        this.getGlobalFun(item.unitStr, 'addOnsData', item.id, 'unit', item);
                    }
                    if (item.premium) {
                        if (item.code == "CROSSBRDR" && this.addOnsData[item.id].checked) {
                        }
                        else {
                            console.log("item.premiumStr", item.premiumStr);
                            this.getGlobalFun(item.premiumStr, 'addOnsData', item.id, 'premium', item);
                            item.premiumStrYear = item.premiumStr + "Year";
                            console.log("item.premiumStr", item.premiumStrYear);
                            this.getGlobalFun(item.premiumStrYear, 'addOnsData', item.id, 'premiumYear', item);
                        }
                    }
                    // }
                }
                // if (callAddon && this.editData && this.refID) {
                //   for (const item of this.addOnList) {
                //     let response: any = null;
                //     try {
                //       response = await this.addOnQuoService.getOne(item.id, this.refID).toPromise()
                //     } catch (error) {
                //       response = null
                //     }
                //     this.addOnsData[item.id] = {
                //       checked: response ? true : false,
                //       sum: response ? response.sumInsured || 0 : 0,
                //       unit: response ? response.unit || 0 : 0,
                //       premium: response ? response.premium || 0 : 0
                //     }
                //   }
                // }
                console.log(" this.addOnsData", this.addOnsData);
                this.isLoading = false;
                yield this.loadingService.deactivate();
                this.cdRef.detectChanges();
            }
            else {
                this.isLoading = false;
            }
        });
    }
    getGlobalFun(funName, mainObj, mainKey, subKey, addon) {
        if ((this.product.code == "PLMO02" || this.product.code == "PLMO01") && (subKey == "premium" || subKey == "premiumYear")) {
            if (this.globalFun[funName]) {
                let parentValueObj = addon.code == "PAIDDRIVER" ? this.getParnet('motor_driver') : this.parentData;
                parentValueObj = Object.assign(Object.assign({}, parentValueObj), { productCode: this.product.code });
                let unsub = this.globalFun[funName](parentValueObj).subscribe((res) => {
                    console.log("RES", res);
                    this[mainObj][mainKey][subKey] = res;
                    this.cdRef.detectChanges();
                });
                this.unsubscribe.push(unsub);
            }
            else {
                if (funName) {
                    // if (addon.code == "CROSSBRDR" && this.product.code == "PLMO02" && subKey == "premium") {
                    //   this[mainObj][mainKey][subKey] = this.calcuCross() * 0.15
                    // }else{
                    this[mainObj][mainKey][subKey] = funName;
                    // }
                }
            }
        }
        else if (this.product.code == "CLFR01" && subKey == "premium") {
            // console.log("addondDa", addon);
            this[mainObj][mainKey][subKey] = this.rateByValue(addon);
        }
        else {
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
    }
    nextPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.prodService.totalPremium = 0;
            const quoService = this.addOnQuoService;
            const posDataArray = this.addOnsData;
            yield quoService.deleteAll(this.resourcesId, this.optionId, this.crossAddons.join(",")).toPromise();
            if (this.product.code == "CLFR01") {
                this.globalFun.tempFormData['addon_1634010770155' + this.optionId] = [];
            }
            else {
                this.globalFun.tempFormData['addon_1634010770155'] = [];
            }
            for (let addon of this.addOnList) {
                if (posDataArray[addon.id].checked) {
                    // console.log("posDataArray[addon.id", posDataArray[addon.id]);
                    let sum = posDataArray[addon.id].sum ? posDataArray[addon.id].sum + "" : "";
                    let unit = posDataArray[addon.id].unit ? posDataArray[addon.id].unit + "" : "";
                    let premium = posDataArray[addon.id].premium ? posDataArray[addon.id].premium + "" : "";
                    let premiumYear = posDataArray[addon.id].premiumYear ? posDataArray[addon.id].premiumYear + "" : "";
                    let option = posDataArray[addon.id].option ? posDataArray[addon.id].option + "" : "";
                    let startDate = posDataArray[addon.id].startDate ? posDataArray[addon.id].startDate + "" : "";
                    let endDate = posDataArray[addon.id].endDate ? posDataArray[addon.id].endDate + "" : "";
                    // console.log('addon save ', premium);
                    this.prodService.totalPremium += parseFloat(premium);
                    try {
                        let postData = {
                            addonId: addon.id,
                            quotationNo: this.resourcesId,
                            option: option,
                            optionalKey: this.optionId,
                            startDate: startDate,
                            endDate: endDate,
                            sumInsured: (sum).replace(',', '').replace('MMK', '').replace('USD', ''),
                            unit: (unit).replace(',', '').replace('MMK', '').replace('USD', ''),
                            premiumYear: (premiumYear).replace(',', '').replace('MMK', '').replace('USD', ''),
                            premium: (premium).replace(',', '').replace('MMK', '').replace('USD', ''),
                        };
                        if (this.product.code == "CLFR01") {
                            this.globalFun.tempFormData['addon_1634010770155' + this.optionId].push(postData);
                        }
                        else {
                            this.globalFun.tempFormData['addon_1634010770155'].push(postData);
                        }
                        quoService.save(postData).toPromise().then((res) => {
                        });
                    }
                    catch (error) {
                        // console.log(error);
                    }
                }
            }
            if (this.product.code == "PLMO02" || this.product.code == "PLMO01") {
                yield this.savePremimun().toPromise();
            }
            if (this.product.code == "CLFR01") {
                // await this.savePremimunFire().toPromise()
            }
            // console.log("end");
            this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_5__.StaticActionType.NEXT });
        });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_5__.StaticActionType.PREV });
    }
    onCheckAddon() {
    }
    changeOption(addon) {
        if (addon.code != "CROSSBRDR" && this.product.code == "PLMO01") {
            let cross = this.addOnList.find(x => x.code == "CROSSBRDR");
            if (this.addOnsData[cross.id].checked) {
                let tempPre = this.calcuCross();
                this.addOnsData[cross.id]['premium'] = tempPre * 0.15;
            }
        }
        else if (this.addOnsData[addon.id].checked && addon.code == "CROSSBRDR") {
            let tempPre = this.calcuCross();
            this.addOnsData[addon.id]['premium'] = tempPre;
        }
        else if (!this.addOnsData[addon.id].checked && addon.code == "CROSSBRDR") {
            this.addOnsData[addon.id]['premium'] = 0;
        }
    }
    rechangeOption(addOn) {
        this.addOnsData[addOn.id].premium = this.rateByValue(addOn);
    }
    calcuCross() {
        let tempPre = 0;
        for (let addon of this.addOnList) {
            if (this.addOnsData[addon.id].checked && addon.code != "CROSSBRDR") {
                // console.log(this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0));
                tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0);
            }
        }
        let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : [];
        for (let cov of coverageData) {
            // console.log(this.globalFun.calculateDecimal(cov.premium || 0));
            tempPre += this.globalFun.calculateDecimal(cov.premium || 0);
        }
        // let crossPre = tempPre * 0.15
        let currency = this.parentData ? this.parentData.m_currency : 'MMK';
        let excessAmt = 0;
        let discount = 0;
        if (this.parentData) {
            let term = this.parentData['m_policy_term'];
            let percent = this.crossPercent[term] || 1;
            let excess = this.parentData['m_excess'];
            let vehicle = this.parentData['m_type_of_vehicle'];
            let purpose = this.parentData['m_purpose_of_use'];
            // console.log("EXCESS", excess, "vehicle", vehicle, "purpose", purpose);
            if (excess == "T-NILEX" && currency == "MMK") {
                if (vehicle == 'T-MCC' && purpose == 'T-PRI') {
                    excessAmt = (5000 * percent);
                }
                else if (vehicle == 'T-MCC' && purpose == 'T-COM') {
                    excessAmt = (10000 * percent);
                }
                else {
                    excessAmt = (50000 * percent);
                }
            }
            // else if (excess == 'T-STNDEX' && currency == "MMK") {
            //   excessAmt = 100000
            // }
            else if (excess == "TU-NILEX" && currency == "USD") {
                excessAmt = (25 * percent);
            }
            // else if (excess == "TU-STNDEX" && currency == "USD") {
            //   excessAmt = 100
            // }
        }
        // * percent
        // console.log("TEMP", tempPre, "excessAmt", excessAmt);
        let cross = ((tempPre + excessAmt) * 0.15);
        return (cross || 0);
    }
    caluMotorPremimun() {
        let tempPre = 0;
        for (let addon of this.addOnList) {
            // console.log(this.addOnsData[addon.id]);
            if (this.addOnsData[addon.id].checked) {
                tempPre += this.globalFun.calculateDecimal(this.addOnsData[addon.id].premium || 0);
            }
        }
        let cross = this.addOnList.find(x => x.code == "CROSSBRDR");
        let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : [];
        for (let cov of coverageData) {
            tempPre += this.globalFun.calculateDecimal(cov.premium || 0);
        }
        // console.log("tempPre", tempPre);
        let currency = this.parentData ? this.parentData.m_currency : 'MMK';
        let discount = 0;
        let discount2 = 0;
        if (this.parentData) {
            let excess = this.parentData['m_excess'];
            let excess_discount = this.parentData['m_excess_discount'];
            let vehicle = this.parentData['m_type_of_vehicle'];
            let purpose = this.parentData['m_purpose_of_use'];
            let term = this.parentData['m_policy_term'];
            // console.log("Policy-TERM", term);
            let percent = this.crossPercent[term] || 1;
            // console.log("TERM-Percent", percent);
            // console.log(excess, excess_discount, vehicle, purpose);
            if (this.product.code == 'PLMO02') {
                if (excess == "T-NILEX" && currency == "MMK") {
                    if (vehicle == 'T-MCC' && purpose == 'T-PRI') {
                        discount = -(5000 * percent);
                        discount2 = -(5000 * percent);
                    }
                    else if (vehicle == 'T-MCC' && purpose == 'T-COM') {
                        discount = -(10000 * percent);
                        discount2 = -(10000 * percent);
                    }
                    else {
                        discount = -(50000 * percent);
                        discount2 = -(50000 * percent);
                    }
                }
                else if (excess == "TU-NILEX" && currency == "USD") {
                    discount = -(25 * percent);
                    discount2 = -(25 * percent);
                }
                // else if (excess == "TU-STNDEX" && currency == "USD") {
                //   discount = -100
                // }
                // else if (excess == 'T-STNDEX' && currency == "MMK") {
                //   discount = -100000
                // }
                else if (excess == "T-ED" && currency == "MMK") {
                    if (excess_discount == "T-EXD1") {
                        discount = 50000;
                        discount2 = 50000;
                    }
                    else if (excess_discount == "T-EXD2") {
                        discount = 70000;
                        discount2 = 70000;
                    }
                    else if (excess_discount == "T-EXD3") {
                        discount = 100000;
                        discount2 = 100000;
                    }
                }
            }
            else {
                if (excess == "T-NILEX" && currency == "MMK") {
                    if (purpose == 'T-PRI') {
                        discount = -(5000 * percent);
                        discount2 = -(5000 * percent);
                    }
                    if (purpose == 'T-COM') {
                        discount = -(10000 * percent);
                        discount2 = -(10000 * percent);
                    }
                }
                if (excess == "T-STNDEX" && currency == "MMK") {
                    if (purpose == 'T-PRI') {
                        discount = -50000;
                        discount2 = -50000;
                    }
                    if (purpose == 'T-COM') {
                        discount = -100000;
                        discount2 = -100000;
                    }
                }
            }
        }
        // console.log("discount", discount);
        let crossPremium = 0;
        if (cross) {
            crossPremium = this.addOnsData[cross.id]['premium'];
        }
        let stumd = currency == "MMK" ? 100 : 0.05;
        // console.log("TOTAL+CROSS", (tempPre + Number(crossPremium || 0)));
        let preAMT = ((tempPre + Number(crossPremium || 0)) - discount);
        let preAMT2 = ((tempPre + Number(crossPremium || 0)) - discount2);
        // console.log("Premium-Cross-Discount/New Amount", preAMT, preAMT2);
        // preAMT = (preAMT * percent) + stumd
        preAMT = (preAMT) + stumd;
        preAMT2 = (preAMT2);
        // console.log("TOTAL-Premium-Result/New Amount", preAMT, preAMT2);
        this.premiumAmt = this.numberPipe.transform(preAMT, "1.2-2") + " " + currency.toUpperCase();
        this.globalFun.paPremiumResult.next(this.premiumAmt);
        return preAMT;
    }
    caluFirePremimun() {
        let parentData1 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.FireRiskID];
        let parentData2 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.FirePageID];
        let precent = parentData2.policyType == "T-NM" ? 1 : 0.75;
        let premiumTotal = 0;
        for (let element of parentData1) {
            premiumTotal += this.globalFun.calculateDecimal(element.premium);
        }
        // parentData2.forEach(element => {
        //   premiumTotal += parseFloat(element.premium)
        // });
        const posDataArray = this.addOnsData;
        let addOnPre = 0;
        for (let addon of this.addOnList) {
            if (posDataArray[addon.id].checked) {
                addOnPre += this.globalFun.calculateDecimal(posDataArray[addon.id]['premium']);
            }
        }
        let finalPre = (premiumTotal + addOnPre) * precent;
        this.premiumAmt = this.numberPipe.transform(finalPre, "1.2-2") + " MMK";
        this.globalFun.paPremiumResult.next(this.premiumAmt);
        return finalPre;
    }
    savePremimun() {
        let premiumAmt = this.caluMotorPremimun();
        let postData = {
            "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            "premiumView": this.premiumAmt,
            "resourceId": this.resourcesId,
            "type": this.prodService.viewType
        };
        return this.pageDataService.updatePremimun(postData);
    }
    savePremimunFire() {
        let premiumAmt = this.caluFirePremimun();
        let postData = {
            "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            "premiumView": this.premiumAmt,
            "resourceId": this.resourcesId,
            "type": this.prodService.viewType
        };
        return this.pageDataService.updatePremimun(postData);
    }
    getParnet(tableName = 'm_detail') {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_7__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = pageOrder.find(page => page.tableName == tableName);
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    rateByValue(addon) {
        // console.log("ADDON==>", addon);
        let rate = 0;
        if (addon.code == "BURGLARY" || addon.code == "STHTC") {
            let keyId = addon.code + "-" + this.addOnsData[addon.id].option;
            rate = this.fireAddonRate[keyId] || 0;
            if (addon.code == "BURGLARY") {
                // console.log(' BURGLARY rate', rate = this.fireAddonRate[keyId] || 0);
            }
            if (addon.code == "STHTC") {
                // console.log(' STHTC rate', rate = this.fireAddonRate[keyId] || 0);
            }
        }
        else {
            // console.log("rete_EKSE", this.fireAddonRate[addon.code])
            rate = this.fireAddonRate[addon.code] || 0;
        }
        // console.log("RATE", rate);
        let parentData = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.FireRiskID];
        // console.log("parentData", parentData);
        let totalRisk = 0;
        if (parentData) {
            // parentData.forEach(element => {
            //   totalRisk += parseFloat(element.riskSi)
            // });
            let parent = parentData.find(x => x.id == this.optionId);
            // console.log("parentparent", parent);
            totalRisk += parent ? parent.riskSi : 0;
        }
        let parentData2 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.FirePageID];
        let dateRate = 1;
        switch (true) {
            case parentData2.policyUnit == 'G' && parentData2.policyDuration == 1:
                dateRate = 1;
                break;
            case parentData2.policyUnit == 'D' && parentData2.policyDuration <= 10:
                dateRate = 1 / 8;
                break;
            case parentData2.policyUnit == 'D' && parentData2.policyDuration <= 15:
                dateRate = 1 / 6;
                break;
            case parentData2.policyUnit == 'D' && parentData2.policyDuration > 15:
                dateRate = this.calculateDaysToMonth(parentData2.policyDuration);
                // console.log('calculateDaysToMonth', dateRate);
                // dateRate = 2 / 8;
                break;
            case parentData2.policyUnit == 'F' && parentData2.policyDuration == 1:
                dateRate = 2 / 8;
                break;
            case parentData2.policyUnit == 'F' && parentData2.policyDuration == 2:
                dateRate = 3 / 8;
                break;
            case parentData2.policyUnit == 'F' && parentData2.policyDuration == 3:
                dateRate = 4 / 8;
                break;
            case parentData2.policyUnit == 'F' && parentData2.policyDuration == 4:
                dateRate = 5 / 8;
                break;
            case parentData2.policyUnit == 'F' && parentData2.policyDuration == 5:
                dateRate = 6 / 8;
                break;
            case parentData2.policyUnit == 'F' && parentData2.policyDuration == 6:
                dateRate = 6 / 8;
                break;
            case parentData2.policyUnit == 'F' && parentData2.policyDuration > 6:
                dateRate = 1;
                break;
        }
        // }
        let currency = parentData2.currency;
        let stampDuty = 0;
        if (currency == 'MMK') {
            stampDuty = 100;
        }
        else {
            stampDuty = 0.05;
        }
        if (rate > 0 && totalRisk > 0) {
            // console.log("totalRisk", totalRisk);
            // console.log("addon.code =====> ", addon.code + ', rate' + rate + 'date rate' + dateRate);
            let amt = totalRisk * (rate / 100) * dateRate;
            if (addon.code == "BURGLARY") {
                amt = amt * 0.9;
            }
            // let amt = totalRisk * (rate / 100)
            // NEED_TO_CONFIRM
            // if (addon.code == "BURGLARY") {
            //   let dis = amt * 0.1
            //   amt = amt - dis
            // }
            // console.log('amt =====> ', amt);
            return amt;
            //return this.globalFun.calculateDecimal(amt)
        }
        return 0;
    }
    calculateDaysToMonth(days) {
        let rate;
        let divided = days / 31;
        if (divided > 0 && divided <= 1) {
            rate = 2 / 8;
        }
        else if (divided > 1 && divided <= 2) {
            rate = 3 / 8;
        }
        else if (divided > 2 && divided <= 3) {
            rate = 4 / 8;
        }
        else if (divided > 3 && divided <= 4) {
            rate = 5 / 8;
        }
        else if (divided > 3 && divided <= 5) {
            rate = 6 / 8;
        }
        else if (divided > 5 && divided <= 6) {
            rate = 6 / 8;
        }
        else {
            rate = 1;
        }
        return rate;
    }
};
AddonPageComponent.ctorParameters = () => [
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_3__.AddOnQuoService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_4__.ProductDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe },
    { type: _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_6__.PageDataService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService }
];
AddonPageComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    optionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    fireAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
AddonPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-addon-page',
        template: _addon_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_addon_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddonPageComponent);



/***/ }),

/***/ 53814:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/add-calculated-building/add-calculated-building.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCalculatedBuildingComponent": () => (/* binding */ AddCalculatedBuildingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_calculated_building_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-calculated-building.component.html?ngResource */ 84562);
/* harmony import */ var _add_calculated_building_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-calculated-building.component.scss?ngResource */ 76758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);






let AddCalculatedBuildingComponent = class AddCalculatedBuildingComponent {
    constructor(modal, cdf) {
        this.modal = modal;
        this.cdf = cdf;
        this.type = "Contents including FFF";
        this.pageType = "Add";
        this.riskId = 1;
        this.isStock = false;
    }
    ngOnInit() {
        this.loadForm(this.data);
        this.setValidator();
    }
    create() {
        this.modal.dismiss({ data: this.calculatedbuildingForm.value, type: "save" });
    }
    loadForm(oldData) {
        this.calculatedbuildingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            firePolicyRiskId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.firePolicyRiskId : this.riskId),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.id : ""),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.itemDescription || oldData.description : ""),
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.itemName : ""),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.quantity : ""),
            totalValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.totalValue : ""),
            updatedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.updatedBy : ""),
            valuePerQuantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.valuePerQuantity : ""),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.month : ""),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.remark : ""),
            stockValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.stockValue : ""),
            agreedSi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(oldData ? oldData.agreedSi : ""),
        });
    }
    setValidator() {
        if (this.type == "Contents including FFF" || this.type == "Plant and Machinery") {
            this.calculatedbuildingForm.controls['itemDescription'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['itemDescription'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['itemName'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['itemName'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['quantity'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['quantity'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['valuePerQuantity'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['valuePerQuantity'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['totalValue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['totalValue'].updateValueAndValidity();
        }
        if (this.type == "Stock") {
            this.calculatedbuildingForm.controls['itemDescription'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['itemDescription'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['stockValue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['stockValue'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['month'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['month'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['remark'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['remark'].updateValueAndValidity();
            this.calculatedbuildingForm.controls['agreedSi'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            this.calculatedbuildingForm.controls['agreedSi'].updateValueAndValidity();
        }
    }
    calculateTotalValue() {
        this.cdf.detectChanges();
        let quantity = this.calculatedbuildingForm.value.quantity;
        let value = this.calculatedbuildingForm.value.valuePerQuantity;
        // console.log("quantity,value",quantity,value)
        if (quantity && value)
            this.calculatedbuildingForm.controls.totalValue.setValue(quantity * value);
    }
    dismissModal() {
        this.modal.dismiss();
    }
    isControlValid(controlName) {
        const control = this.calculatedbuildingForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.calculatedbuildingForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.calculatedbuildingForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.calculatedbuildingForm.controls[controlName];
        return control.dirty || control.touched;
    }
};
AddCalculatedBuildingComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef }
];
AddCalculatedBuildingComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    pageType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    isStock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
AddCalculatedBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-calculated-building',
        template: _add_calculated_building_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_calculated_building_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCalculatedBuildingComponent);



/***/ }),

/***/ 55631:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/calculated-building.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatedBuildingComponent": () => (/* binding */ CalculatedBuildingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _calculated_building_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculated-building.component.html?ngResource */ 17050);
/* harmony import */ var _calculated_building_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculated-building.component.scss?ngResource */ 79531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth */ 90089);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fire-risk/models&services/fire-risk.service */ 10027);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var _add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-calculated-building/add-calculated-building.component */ 53814);
/* harmony import */ var _services_calculated_building_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/calculated-building-service */ 59409);












let CalculatedBuildingComponent = class CalculatedBuildingComponent {
    constructor(FireContentService, FirePLantService, FireStockService, modal, auth, cdf, globalService, riskService, alertService) {
        this.FireContentService = FireContentService;
        this.FirePLantService = FirePLantService;
        this.FireStockService = FireStockService;
        this.modal = modal;
        this.auth = auth;
        this.cdf = cdf;
        this.globalService = globalService;
        this.riskService = riskService;
        this.alertService = alertService;
        this.isContents = false;
        this.isPlant = false;
        this.isStock = false;
        this.default = 0;
        this.primary = 'primary';
        this.totalContent = 0;
        this.totalPlant = 0;
        this.totalStock = 0;
        this.tableData = [];
        this.contentsData = [];
        this.plantData = [];
        this.stockData = [];
        this.totalSI = 0;
        this.productDetail = {};
        this.riskId = 1;
        this.totalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    }
    ngOnInit() {
        this.getFireContent();
        this.getFirePlant();
        this.getFireStock();
        this.productDetail = this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_6__.FirePageID] || {};
    }
    actionBtn(event) {
        // //console.log(event)
        if (event.cmd == "delete") {
            if (event.tbtype == "content") {
                this.deleteFireContent(event.data.id);
            }
            if (event.tbtype == "plant") {
                this.deleteFirePlant(event.data.id);
            }
            if (event.tbtype == "stock") {
                this.deleteFireStock(event.data.id);
            }
        }
        if (event.cmd == "edit") {
            if (event.tbtype == "content") {
                this.add('contents', event.data, "Edit");
            }
            if (event.tbtype == "plant") {
                this.add('plants', event.data, "Edit");
            }
            if (event.tbtype == "stock") {
                this.add('stock', event.data, "Edit");
            }
        }
    }
    add(type, data, pageType) {
        if (type == "contents") {
            let modalRef;
            modalRef = this.modal.open(_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_7__.AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = "Contents including FFF";
            modalRef.componentInstance.pageType = pageType;
            modalRef.componentInstance.riskId = this.riskId;
            modalRef.componentInstance.data = data;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    //console.log("RESSSS", res)
                    if (res.type == "save") {
                        let postData = Object.assign(Object.assign({}, res.data), { createdBy: this.auth.currentUserValue.id });
                        //console.log("postData", postData)
                        this.FireContentService.save(postData).toPromise().then((res) => {
                            if (res) {
                                //console.log("getFireContent-RESSS", res)
                                this.getFireContent();
                                let oldVal = data ? data : { id: 0 };
                                let index = this.contentsData.findIndex(x => x.id == oldVal.id);
                                if (index < 0)
                                    this.contentsData.push(Object.assign(Object.assign({}, postData), { id: res }));
                                else
                                    this.contentsData[index] = Object.assign(Object.assign({}, postData), { id: res });
                                this.cdf.detectChanges();
                            }
                        });
                    }
                }
            });
        }
        if (type == "plants") {
            let modalRef;
            modalRef = this.modal.open(_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_7__.AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = "Plant and Machinery";
            modalRef.componentInstance.pageType = pageType;
            modalRef.componentInstance.riskId = this.riskId;
            modalRef.componentInstance.data = data;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    //console.log("RESSSS", res)
                    if (res.type == "save") {
                        let postData = Object.assign(Object.assign({}, res.data), { createdBy: this.auth.currentUserValue.id });
                        //console.log("postData", postData)
                        this.FirePLantService.save(postData).toPromise().then((res) => {
                            if (res) {
                                //console.log("getFirePlant-RESSS", res)
                                this.getFirePlant();
                                let oldVal = data ? data : { id: 0 };
                                let index = this.plantData.findIndex(x => x.id == oldVal.id);
                                if (index < 0)
                                    this.plantData.push(Object.assign(Object.assign({}, postData), { id: res }));
                                else
                                    this.plantData[index] = Object.assign(Object.assign({}, postData), { id: res });
                                // this.plantData.push({ ...postData, id: res })
                                this.cdf.detectChanges();
                            }
                        });
                    }
                }
            });
        }
        if (type == "stock") {
            let modalRef;
            modalRef = this.modal.open(_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_7__.AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
            modalRef.componentInstance.type = "Stock";
            modalRef.componentInstance.pageType = pageType;
            modalRef.componentInstance.riskId = this.riskId;
            modalRef.componentInstance.data = data;
            modalRef.componentInstance.isStock = true;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    //console.log("RESSSS", res)
                    if (res.type == "save") {
                        let postData = Object.assign(Object.assign({}, res.data), { createdBy: this.auth.currentUserValue.id, description: res.data.itemDescription });
                        //console.log("postData", postData)
                        this.FireStockService.save(postData).toPromise().then((res) => {
                            if (res) {
                                //console.log("getFirePlant-RESSS", res)
                                this.getFireStock();
                                let oldVal = data ? data : { id: 0 };
                                let index = this.stockData.findIndex(x => x.id == oldVal.id);
                                if (index < 0)
                                    this.stockData.push(Object.assign(Object.assign({}, postData), { id: res }));
                                else
                                    this.stockData[index] = Object.assign(Object.assign({}, postData), { id: res });
                                // this.stockData.push({ ...postData, id: res })
                                this.cdf.detectChanges();
                            }
                        });
                    }
                }
            });
        }
    }
    getFireContent() {
        this.riskService.getContent(this.riskId).toPromise().then((res) => {
            //console.log("getFireContent-RESSS", res)
            if (res) {
                this.contentsData = res;
                if (this.contentsData.length > 0) {
                    this.isContents = true;
                    this.totalContent = 0;
                    for (let data of this.contentsData) {
                        //console.log("TSET", this.totalContent);
                        this.totalContent += parseInt(data.totalValue);
                    }
                }
                this.calculateProposeStock();
                this.cdf.detectChanges();
            }
        });
    }
    getFirePlant() {
        this.riskService.getPlant(this.riskId).toPromise().then((res) => {
            if (res) {
                //console.log("getFirePlant-RESSS", res)
                this.plantData = res;
                if (this.plantData.length > 0) {
                    this.isPlant = true;
                    this.totalPlant = 0;
                    for (let data of this.plantData) {
                        this.totalPlant += parseInt(data.totalValue);
                    }
                }
                this.calculateProposeStock();
                this.cdf.detectChanges();
            }
        });
    }
    getFireStock() {
        this.riskService.getStock(this.riskId).toPromise().then((res) => {
            if (res) {
                //console.log("getFireStock-RESSS", res)
                this.stockData = res;
                if (this.stockData.length > 0) {
                    this.isStock = true;
                    this.totalStock = 0;
                    for (let data of this.stockData) {
                        this.totalStock += parseInt(data.stockValue);
                    }
                    this.calculateProposeStock();
                }
                this.cdf.detectChanges();
            }
        });
    }
    calculateProposeStock() {
        this.totalSI = (this.totalStock + this.totalContent + this.totalPlant);
        this.totalEvent.next(this.totalSI);
    }
    deleteFireContent(id) {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.FireContentService.delete(id).toPromise().then((res) => {
                    if (res) {
                        this.getFireContent();
                        this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                        });
                    }
                });
            }
        });
    }
    deleteFirePlant(id) {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            this.FirePLantService.delete(id).toPromise().then((res) => {
                if (res) {
                    this.getFirePlant();
                    this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                    });
                }
            });
        });
    }
    deleteFireStock(id) {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            this.FireStockService.delete(id).toPromise().then((res) => {
                if (res) {
                    this.getFireStock();
                    this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                    });
                }
            });
        });
    }
    toggleChange(type) {
        if (type == 'contents') {
            this.isContents = this.isContents;
            if (!this.isContents && this.contentsData.length > 0) {
                for (let data of this.contentsData) {
                    this.deleteFireContent(data.id);
                }
            }
        }
        if (type == 'plants') {
            this.isPlant = this.isPlant;
            if (!this.isPlant && this.plantData.length > 0) {
                for (let data of this.plantData) {
                    this.deleteFirePlant(data.id);
                }
            }
        }
        if (type == 'stock') {
            this.isStock = this.isStock;
            if (!this.isStock && this.stockData.length > 0) {
                for (let data of this.stockData) {
                    this.deleteFireStock(data.id);
                }
            }
        }
    }
};
CalculatedBuildingComponent.ctorParameters = () => [
    { type: _services_calculated_building_service__WEBPACK_IMPORTED_MODULE_8__.FireContentService },
    { type: _services_calculated_building_service__WEBPACK_IMPORTED_MODULE_8__.FirePLantService },
    { type: _services_calculated_building_service__WEBPACK_IMPORTED_MODULE_8__.FireStockService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal },
    { type: src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__.GlobalFunctionService },
    { type: _fire_risk_models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_5__.FireRiskService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
CalculatedBuildingComponent.propDecorators = {
    default: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    totalEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
CalculatedBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-calculated-building',
        template: _calculated_building_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calculated_building_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalculatedBuildingComponent);



/***/ }),

/***/ 88098:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/static-pages/coverage-page/coverage-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoveragePageComponent": () => (/* binding */ CoveragePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _coverage_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coverage-page.component.html?ngResource */ 29630);
/* harmony import */ var _coverage_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-page.component.scss?ngResource */ 69382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/is-json */ 88757);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 16164);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 90278);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static-field.interface */ 54625);










let CoveragePageComponent = class CoveragePageComponent {
    constructor(coverageQuoService, globalFun, cdRef, prodService, loadingService) {
        this.coverageQuoService = coverageQuoService;
        this.globalFun = globalFun;
        this.cdRef = cdRef;
        this.prodService = prodService;
        this.loadingService = loadingService;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.coverage = {
            isSum: false,
            isUnit: false,
            isPremium: false,
        };
        this.coverageData = {};
        this.unsubscribe = [];
        this.parentData = {};
        this.isLoading = true;
        this.isPopup = false;
        this.crossPercent = {
            "T-004": 0.35,
            "T-003": 0.60,
            "T-002": 0.85,
            "T-001": 1,
        };
        this.termPercent = 1;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.refID = this.prodService.referenceID;
            this.optionId = this.optionId ? this.optionId : this.resourcesId;
            if (this.product.code == "PLMO02" || this.product.code == "PLMO01") {
                this.parentData = this.getParnet();
                let term = this.parentData['m_policy_term'];
                // console.log("Policy-TERM", term);
                this.termPercent = this.crossPercent[term] || 1;
                // console.log("TERM-Percent", this.termPercent);
            }
            if (this.product.coverages && this.product.coverages.length > 0) {
                yield this.loadingService.activate();
                this.coverage = {
                    isSum: this.product.coverages[0].sumInsured,
                    isUnit: this.product.coverages[0].unit,
                    isPremium: this.product.coverages[0].premium,
                };
                let postData = {
                    quotationNo: this.editData.id,
                    coverageIds: this.product.coverages.map(x => { return x.id; }),
                    optionalKey: this.optionId
                };
                let results = yield this.coverageQuoService.getAllById(postData).toPromise();
                if (results.length == 0) {
                    postData.quotationNo = this.refID;
                    postData.optionalKey = this.refID;
                    results = yield this.coverageQuoService.getAllById(postData).toPromise();
                }
                for (const item of this.product.coverages) {
                    item['show'] = true;
                    if (item.validationFun) {
                        item['show'] = this.globalFun[item.validationFun] ? this.globalFun[item.validationFun](this.parentData) : true;
                    }
                    let response = results.find(x => x.coverageId == item.id);
                    this.coverageData[item.id] = {
                        sum: response ? response.sumInsured || 0 : 0,
                        unit: response ? response.unit || 0 : 0,
                        premium: response ? (response.premium || 0) : 0,
                        premiumYear: response ? (response.premiumYear || 0) : 0
                    };
                    if (item.sumInsured) {
                        this.getGlobalFun(item.sumInsuredStr, 'coverageData', item.id, 'sum');
                    }
                    if (item.unit) {
                        this.getGlobalFun(item.unitStr, 'coverageData', item.id, 'unit');
                    }
                    if (item.premium) {
                        console.log(item.premiumStr);
                        this.getGlobalFun(item.premiumStr, 'coverageData', item.id, 'premium');
                        item.premiumStrYear = item.premiumStr + "Year";
                        console.log(item.premiumStrYear);
                        this.getGlobalFun(item.premiumStrYear, 'coverageData', item.id, 'premiumYear');
                    }
                    // }
                }
                this.isLoading = false;
                yield this.loadingService.deactivate();
                this.cdRef.detectChanges();
            }
            else {
                this.isLoading = false;
            }
        });
    }
    getGlobalFun(funName, mainObj, mainKey, subKey) {
        if ((this.product.code == "PLMO02" || this.product.code == "PLMO01") && (subKey == "premium" || subKey == "premiumYear")) {
            if (this.globalFun[funName]) {
                this.parentData = Object.assign(Object.assign({}, this.parentData), { productCode: this.product.code });
                let unsub = this.globalFun[funName](this.parentData).subscribe((res) => {
                    this[mainObj][mainKey][subKey] = res;
                    console.log("RES", res);
                    this.cdRef.detectChanges();
                });
                this.unsubscribe.push(unsub);
            }
            else {
                if (funName)
                    this[mainObj][mainKey][subKey] = funName;
            }
        }
        else {
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
    }
    nextPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const quoService = this.coverageQuoService;
            const posDataArray = this.coverageData;
            console.log("posDataArray", posDataArray);
            // console.log(this.product.coverages);
            // for await (const iterator of object) {
            // }
            this.globalFun.tempFormData['coverage_1634010995936'] = [];
            if (this.resourcesId && this.optionId)
                yield this.coverageQuoService.deleteAll(this.resourcesId, this.optionId);
            for (let cov of this.product.coverages) {
                try {
                    let postData = {
                        coverageId: cov.id,
                        quotationNo: this.resourcesId,
                        optionalKey: this.optionId,
                        sumInsured: ((posDataArray[cov.id].sum || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
                        unit: ((posDataArray[cov.id].unit || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
                        premium: ((posDataArray[cov.id].premium || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
                        premiumYear: ((posDataArray[cov.id].premiumYear || "") + "").replace(',', '').replace('MMK', '').replace('USD', ''),
                    };
                    this.globalFun.tempFormData['coverage_1634010995936'].push(postData);
                    let res = yield this.coverageQuoService.save(postData).toPromise().catch(e => e);
                }
                catch (error) {
                    // console.log(error);
                }
            }
            this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.NEXT });
        });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.PREV });
    }
    getParnet() {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_3__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = pageOrder.find(page => page.tableName == 'm_detail');
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
};
CoveragePageComponent.ctorParameters = () => [
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_5__.CoverageQuoService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
CoveragePageComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    optionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }],
    isPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
CoveragePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-coverage-page',
        template: _coverage_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_coverage_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoveragePageComponent);



/***/ }),

/***/ 39244:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life-griph/education-life-griph.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationLifeGripComponent": () => (/* binding */ EducationLifeGripComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _education_life_griph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education-life-griph.component.html?ngResource */ 72266);
/* harmony import */ var _education_life_griph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-life-griph.component.scss?ngResource */ 32765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-pages.data */ 93900);








let EducationLifeGripComponent = class EducationLifeGripComponent {
    constructor(alertService, globalFun) {
        this.alertService = alertService;
        this.globalFun = globalFun;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.showDatas = [];
        this.chartOptions = {
            series: [
                {
                    name: "Premium Amount",
                    data: [],
                    color: "#005f99"
                }
            ],
            chart: {
                height: 450,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            title: {
                text: "Basic Benefit Illustration",
                offsetX: 0,
                offsetY: 10,
                floating: false,
                style: {
                    fontSize: "1.1rem",
                    fontFamily: "Roboto"
                }
            },
            xaxis: {
                type: 'category',
                categories: ["0", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years", "13 years", "14 years"],
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 5000000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -10,
                offsetY: -5,
                enabledOnSeries: [0]
            },
            markers: {
                size: [5, 0, 0],
            }
        };
    }
    ngOnInit() {
        // this.parentData = this.getParnet()
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration", "Warning");
        }
        else {
            let dataArr = this.parentData.map((x) => {
                if (x.premiumPaid)
                    return x.premiumPaid > 0 ? x.premiumPaid : null;
                else
                    return null;
            });
            dataArr.unshift(null);
            if (this.parentData.length > 0) {
                if (this.parentData[0].benefitPlan == '002') {
                    this.chartOptions.title.text = "Double Benefit Illustration";
                    this.chartOptions.yaxis.max = 5000000 * 2;
                    this.chartOptions.series[1] = {
                        data: [],
                        name: "Goal"
                    };
                    this.chartOptions.series[2] = {
                        data: [],
                        name: "2X Goal"
                    };
                    this.chartOptions.series[1].data = [5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000];
                    this.chartOptions.series[2].data = [10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000];
                }
            }
            this.chartOptions.series[0].data = dataArr;
            // 0, 636000, 1272000, 1908000, 2544000, 3180000, 3816000, 4452000
        }
    }
    getParnet() {
        return this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_5__.EducationLifeID];
    }
    nextPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_2__.StaticActionType.NEXT });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_2__.StaticActionType.PREV });
    }
};
EducationLifeGripComponent.ctorParameters = () => [
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__.GlobalFunctionService }
];
EducationLifeGripComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["chart",] }],
    parentData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EducationLifeGripComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-education-life-grip',
        template: _education_life_griph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_education_life_griph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EducationLifeGripComponent);



/***/ }),

/***/ 6229:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/education-life.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationLifeComponent": () => (/* binding */ EducationLifeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _education_life_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education-life.component.html?ngResource */ 84037);
/* harmony import */ var _education_life_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-life.component.scss?ngResource */ 59425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/is-json */ 88757);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/auth */ 90089);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var _models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/education-life-rate.service */ 78927);
/* harmony import */ var _models_services_education_life_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models&services/education-life.service */ 14607);

















let EducationLifeComponent = class EducationLifeComponent {
    constructor(globalFun, alertService, prodService, eduPreService, eduSurrService, eduPayment, cdf, auth, numberPipe) {
        this.globalFun = globalFun;
        this.alertService = alertService;
        this.prodService = prodService;
        this.eduPreService = eduPreService;
        this.eduSurrService = eduSurrService;
        this.eduPayment = eduPayment;
        this.cdf = cdf;
        this.auth = auth;
        this.numberPipe = numberPipe;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.premimuRate = {
            "9opt": 5,
            "11opt": 7,
            "14opt": 10,
        };
        this.frequency = {
            monthly: 1,
            quarterly: 4,
            semi_annually: 6,
            annually: 12,
        };
        this.lists = [];
        this.premiumRate = [];
        this.surrendRate = [];
        this.showDatas = [];
    }
    ngOnInit() {
        this.parentData = this.getParnet();
        this.parentData2 = this.getParnet(true);
        if (!this.parentData && !this.parentData2) {
            this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration", "Warning");
        }
        else {
            this.getRateValue().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((res) => {
                if (!res[0] || !res[1])
                    throw res;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)({ premium: res[0], surrend: res[1] });
            })).toPromise().then((res) => {
                if (res) {
                    this.premiumRate = res.premium;
                    this.surrendRate = res.surrend;
                    this.createListData();
                }
            }).catch(e => {
                console.log(e);
            });
            // rate age benifitPlan policyTerm year
            // this.parentData['sum_insured'] this.parentData['sum_insured']
            // paPolicyValidationResult
        }
    }
    createListData() {
        this.getcalculateData();
        this.showDatas = [];
        // console.log(this.premimuRate[policyTermValue + "opt"]);
        let doub = this.plan == "001" ? 1 : 2;
        this.lists.forEach((x, i) => {
            let objData = {
                resourceId: this.resourcesId,
                endOfPolicyYear: x,
                age: this.currentAge + i,
                benefitPlan: this.plan,
                premiumPaid: this.premimuRateNum >= x ? this.calculatePre(this.currentAge + i, x) : 0,
                deathBenefit: this.sumInsured * doub,
                surrenderValue: this.calculateSur(x),
                maturityBenefit: this.calculateSur(x) * 0.9
            };
            // {
            //   "age": 0,
            //   "benefitPlan": "string",
            //   "deathBenefit": 0,
            //   "id": 0,
            //   "maturityBenefit": 0,
            //   "premiumPaid": 0,
            //   "resourceId": "string",
            //   "surrenderValue": 0
            // }
            this.showDatas.push(objData);
            if (i + 1 == this.lists.length) {
                this.cdf.detectChanges();
            }
        });
    }
    getcalculateData() {
        let policyTerm = this.globalFun.paPolicyValidationResult.value;
        let policyTermValue = policyTerm.validationValue;
        this.premimuRateNum = this.premimuRate[policyTermValue + "opt"];
        this.policyTermCode = this.parentData['policy_term'];
        this.sumInsured = this.parentData['sum_insured'];
        this.plan = this.parentData['insured_plan'];
        let dob = this.parentData2['date_of_birth'];
        this.currentAge = Math.ceil(moment__WEBPACK_IMPORTED_MODULE_2__().diff(dob, 'years', true));
        let paymentFrequency = this.parentData['payment_frequency'];
        this.frequencyValue = this.frequency[paymentFrequency];
        this.lists = Array.from({ length: policyTermValue }, (_, i) => i + 1);
        return true;
    }
    getParnet(life) {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_4__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = {};
            if (life)
                parent = pageOrder.find(page => page.tableName == 'life_insured_el');
            else
                parent = pageOrder.find(page => page.tableName == 'el_detail');
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    calculatePre(age, year) {
        // console.log();
        let tempRate = 15.5;
        let rate = this.premiumRate.find(x => x.age == age);
        if (rate) {
            tempRate = rate.rate;
        }
        // this.frequencyValue
        let monthly = ((tempRate / 1000) * this.sumInsured);
        if (year == 1) {
            console.log(this.frequencyValue);
            let tempPre = (this.globalFun.calculateDecimal(monthly * this.frequencyValue) + 1500);
            this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK / " + this.parentData['payment_frequency'];
            this.globalFun.paPremiumResult.next(this.premiumAmt);
        }
        return this.globalFun.calculateDecimal(monthly * 12) * year;
    }
    calculateSur(year) {
        let tempRate = 10;
        let rate = this.surrendRate.find(x => x.year == year);
        if (rate) {
            tempRate = rate.rate;
            let surrend = (tempRate / 100) * this.sumInsured;
            return surrend;
        }
        return 0;
    }
    getRateValue() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.getPRate(), this.getSurRate()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((res) => {
            return res;
        }));
    }
    getPRate() {
        return this.eduPreService.getMany(this.parentData['insured_plan'], this.parentData['policy_term']);
    }
    getSurRate() {
        return this.eduSurrService.getMany(this.parentData['policy_term']);
    }
    nextPage() {
        if (this.showDatas.length > 0) {
            this.eduPayment.deleteMany(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)((res) => {
                let postData = {
                    "request": this.showDatas,
                    "resourceDataDTO": {
                        "agentId": this.auth.currentUserValue.id || 1,
                        "customerId": this.prodService.creatingCustomer.customerId || 1,
                        "policyNumber": null,
                        "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                        "premiumView": this.premiumAmt,
                        // "sumInsured":(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                        // "sumInsuredView":this.sumInsured,
                        "productId": this.product.id,
                        "productCode": this.product.code,
                        "quotationId": this.prodService.referenceID,
                        "type": this.prodService.type
                    },
                    "resourceId": this.resourcesId
                };
                return this.eduPayment.saveMany(postData);
            })).toPromise().then((res) => {
                if (res) {
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.EducationLifeID] = this.showDatas;
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT });
                }
            });
        }
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.PREV });
    }
};
EducationLifeComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_10__.EduPremRateService },
    { type: _models_services_education_life_rate_service__WEBPACK_IMPORTED_MODULE_10__.EduSurrRateService },
    { type: _models_services_education_life_service__WEBPACK_IMPORTED_MODULE_11__.EduPaymentService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe }
];
EducationLifeComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output }]
};
EducationLifeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-education-life',
        template: _education_life_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_education_life_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EducationLifeComponent);



/***/ }),

/***/ 42565:
/*!***********************************************************************!*\
  !*** ./src/app/pages/static-pages/endo-griph/endo-griph.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoGripComponent": () => (/* binding */ EndoGripComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _endo_griph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endo-griph.component.html?ngResource */ 3681);
/* harmony import */ var _endo_griph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endo-griph.component.scss?ngResource */ 65755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-pages.data */ 93900);








let EndoGripComponent = class EndoGripComponent {
    constructor(alertService, globalFun) {
        this.alertService = alertService;
        this.globalFun = globalFun;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.showDatas = [];
        this.chartOptions = {
            series: [
                {
                    name: "Premium Amount",
                    data: [],
                    color: "#005f99"
                }
            ],
            chart: {
                height: 450,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            title: {
                text: "Basic Benefit Illustration",
                offsetX: 0,
                offsetY: 10,
                floating: false,
                style: {
                    fontSize: "1.1rem",
                    fontFamily: "Roboto"
                }
            },
            xaxis: {
                type: 'category',
                categories: ["0", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years", "13 years", "14 years"],
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 1000000,
                tickAmount: 5,
                labels: {
                    style: {
                        fontSize: "1rem",
                        fontFamily: "Roboto"
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetX: -10,
                offsetY: -5,
                enabledOnSeries: [0]
            },
            markers: {
                size: [5, 0, 0],
            }
        };
    }
    ngOnInit() {
        // this.parentData = this.getParnet()
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration", "Warning");
        }
        else {
            let dataArr = this.parentData.map((x) => {
                if (x.premiumPaid)
                    return x.premiumPaid > 0 ? x.premiumPaid : null;
                else
                    return null;
            });
            dataArr.unshift(null);
            if (this.parentData.length > 0) {
                this.chartOptions.yaxis.max = parseInt(this.parentData[0].benefit);
            }
            // if (this.parentData[0].benefitPlan == '002') {
            //   this.chartOptions.title.text = "Double Benefit Illustration"
            //   this.chartOptions.yaxis.max = 5000000 * 2
            //   this.chartOptions.series[1] = {
            //     data: [],
            //     name: "Goal"
            //   }
            //   this.chartOptions.series[2] = {
            //     data: [],
            //     name: "2X Goal"
            //   }
            //   this.chartOptions.series[1].data = [5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000,5000000]
            //   this.chartOptions.series[2].data = [10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000,10000000]
            // }
            // }
            this.chartOptions.series[0].data = dataArr;
            // 0, 636000, 1272000, 1908000, 2544000, 3180000, 3816000, 4452000
        }
    }
    getParnet() {
        return this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_5__.EndowmentID];
    }
    nextPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_2__.StaticActionType.NEXT });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_2__.StaticActionType.PREV });
    }
};
EndoGripComponent.ctorParameters = () => [
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__.GlobalFunctionService }
];
EndoGripComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["chart",] }],
    parentData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EndoGripComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-endo-grip',
        template: _endo_griph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_endo_griph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EndoGripComponent);



/***/ }),

/***/ 8867:
/*!***********************************************************!*\
  !*** ./src/app/pages/static-pages/endo/endo.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoComponent": () => (/* binding */ EndoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _endo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endo.component.html?ngResource */ 31294);
/* harmony import */ var _endo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endo.component.scss?ngResource */ 80332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/is-json */ 88757);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/auth */ 90089);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var _models_services_endo_rate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/endo-rate.service */ 61925);
/* harmony import */ var _models_services_endo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models&services/endo.service */ 53510);

















let EndoComponent = class EndoComponent {
    constructor(globalFun, alertService, prodService, eduPreService, eduSurrService, eduPayment, cdf, auth, numberPipe) {
        this.globalFun = globalFun;
        this.alertService = alertService;
        this.prodService = prodService;
        this.eduPreService = eduPreService;
        this.eduSurrService = eduSurrService;
        this.eduPayment = eduPayment;
        this.cdf = cdf;
        this.auth = auth;
        this.numberPipe = numberPipe;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.premimuRate = {
            "5opt": 5,
            "7opt": 7,
            "10opt": 10,
        };
        this.frequency = {
            monthly: 12,
            quarterly: 4,
            semi_annually: 6,
            annually: 1,
        };
        this.lists = [];
        this.premiumRate = [];
        this.surrendRate = [];
        this.showDatas = [];
        this.currencyType = "MMK";
        this.unsub = [];
    }
    ngOnDestroy() {
        this.unsub.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
            if (this.currencyType != res) {
                this.currencyType = res;
            }
        });
        this.parentData = this.getParnet();
        this.parentData2 = this.getParnet(true);
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no endowment product detail data. Please add endowment product detail in prodcut configuration", "Warning");
        }
        else {
            this.getRateValue().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((res) => {
                if (!res[0] || !res[1])
                    throw res;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)({ premium: res[0], surrend: res[1] });
            })).toPromise().then((res) => {
                console.log(res);
                if (res) {
                    this.premiumRate = res.premium;
                    this.surrendRate = res.surrend;
                    this.createListData();
                }
            }).catch(e => {
                console.log(e);
            });
            // rate age benifitPlan policyTerm year
            // this.parentData['sum_insured'] this.parentData['sum_insured']
            // paPolicyValidationResult
        }
    }
    createListData() {
        this.getcalculateData();
        this.showDatas = [];
        // console.log(this.premimuRate[policyTermValue + "opt"]);
        this.lists.forEach((x, i) => {
            let objData = {
                resourceId: this.resourcesId,
                endOfPolicyYear: x,
                age: this.currentAge + i,
                premiumPaid: this.premimuRateNum >= x ? this.calculatePre(this.currentAge, x) : 0,
                benefit: this.sumInsured,
                surrenderValue: this.calculateSur(x),
                policyLoan: this.calculateSur(x) * 0.9
            };
            // {
            //   "age": 0,
            //   "benefitPlan": "string",
            //   "deathBenefit": 0,
            //   "id": 0,
            //   "maturityBenefit": 0,
            //   "premiumPaid": 0,
            //   "resourceId": "string",
            //   "surrenderValue": 0
            // }
            this.showDatas.push(objData);
            if (i + 1 == this.lists.length) {
                this.cdf.detectChanges();
            }
        });
    }
    getcalculateData() {
        let policyTerm = this.globalFun.paPolicyValidationResult.value;
        let policyTermValue = policyTerm.validationValue;
        console.log(policyTermValue, policyTerm);
        this.premimuRateNum = this.premimuRate[policyTermValue + "opt"];
        this.policyTermCode = this.parentData['policy_term'];
        this.sumInsured = this.parentData['sum_insured'];
        let dob = this.parentData2['date_of_birth'];
        this.currentAge = Math.ceil(moment__WEBPACK_IMPORTED_MODULE_2__().diff(dob, 'years', true));
        let paymentFrequency = this.parentData['payment_frequency'];
        this.frequencyValue = this.frequency[paymentFrequency];
        this.lists = Array.from({ length: policyTermValue }, (_, i) => i + 1);
        return true;
    }
    getParnet(life) {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_4__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            // console.log("pageUI",pageUI);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = {};
            if (life)
                parent = pageOrder.find(page => page.tableName == "life_insured_endow");
            else
                parent = pageOrder.find(page => page.tableName == "endo_detail");
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    calculatePre(age, year) {
        // console.log();
        let tempRate = 0;
        let rate = this.premiumRate.find(x => x.formAge <= age && x.toAge >= age);
        if (rate) {
            tempRate = rate.rate;
        }
        // this.frequencyValue
        let monthly = ((tempRate / 1000) * this.sumInsured);
        if (year == 1) {
            let tempPre = (this.globalFun.calculateDecimal(monthly / this.frequencyValue));
            tempPre = this.globalFun.calculateDecimal(tempPre + ((monthly) * 0.0003));
            this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK / " + this.parentData['payment_frequency'];
            this.globalFun.paPremiumResult.next(this.premiumAmt);
        }
        return this.globalFun.calculateDecimal(monthly) * year;
    }
    calculateSur(year) {
        let tempRate = 10;
        let rate = this.surrendRate.find(x => x.premiumPaidYear == year);
        if (rate) {
            tempRate = rate.rate;
            let surrend = (tempRate / 1000) * this.sumInsured;
            return surrend;
        }
        return 0;
    }
    getRateValue() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.getPRate(), this.getSurRate()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((res) => {
            return res;
        }));
    }
    getPRate() {
        return this.eduPreService.getMany(this.parentData['policy_term']);
    }
    getSurRate() {
        return this.eduSurrService.getMany(this.parentData['policy_term']);
    }
    nextPage() {
        if (this.showDatas.length > 0) {
            this.eduPayment.deleteMany(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)((res) => {
                let postData = {
                    "request": this.showDatas,
                    "resourceDataDTO": {
                        "agentId": this.auth.currentUserValue.id || 1,
                        "customerId": this.prodService.creatingCustomer.customerId || 1,
                        "leadId": this.prodService.creatingLeadId || 1,
                        currency: this.currencyType,
                        "policyNumber": null,
                        "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                        "premiumView": this.premiumAmt,
                        // "sumInsured":(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                        // "sumInsuredView":this.sumInsured,
                        "productId": this.product.id,
                        "productCode": this.product.code,
                        "quotationId": this.prodService.referenceID,
                        "type": this.prodService.type
                    },
                    "resourceId": this.resourcesId
                };
                return this.eduPayment.saveMany(postData);
            })).toPromise().then((res) => {
                if (res) {
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_9__.EndowmentID] = this.showDatas;
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT });
                }
            });
        }
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.PREV });
    }
};
EndoComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _models_services_endo_rate_service__WEBPACK_IMPORTED_MODULE_10__.EndoRateService },
    { type: _models_services_endo_rate_service__WEBPACK_IMPORTED_MODULE_10__.EndoSurrRateService },
    { type: _models_services_endo_service__WEBPACK_IMPORTED_MODULE_11__.EndoService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe }
];
EndoComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output }]
};
EndoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-endo',
        template: _endo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_endo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EndoComponent);



/***/ }),

/***/ 61925:
/*!******************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo/models&services/endo-rate.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndoRateService": () => (/* binding */ EndoRateService),
/* harmony export */   "EndoSurrRateService": () => (/* binding */ EndoSurrRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 38313);





const API_ENDO_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/endowment/rate`;
let EndoRateService = class EndoRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ENDO_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(term) {
        return this.httpClient.get(API_ENDO_RATE_URL + "s?policyTerm=" + term);
    }
};
EndoRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EndoRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EndoRateService);

const API_ENDO_S_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/endowment/surrender/rate`;
let EndoSurrRateService = class EndoSurrRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_ENDO_S_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(term) {
        return this.httpClient.get(API_ENDO_S_RATE_URL + "?policyTerm=" + term);
    }
};
EndoSurrRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EndoSurrRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EndoSurrRateService);



/***/ }),

/***/ 10056:
/*!*********************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/fire-risk.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireRiskComponent": () => (/* binding */ FireRiskComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fire_risk_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fire-risk.component.html?ngResource */ 42764);
/* harmony import */ var _fire_risk_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-risk.component.scss?ngResource */ 50330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product-form/page-data.service */ 41070);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 36565);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var _models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models&services/fire-risk.service */ 10027);
/* harmony import */ var _risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./risk-detail/risk-detail.component */ 47304);















let FireRiskComponent = class FireRiskComponent {
    constructor(globalFun, fireRiskService, modalService, cdf, numberPipe, pageDataService, alertService, prodService, addOnQuoService, addonQuo) {
        this.globalFun = globalFun;
        this.fireRiskService = fireRiskService;
        this.modalService = modalService;
        this.cdf = cdf;
        this.numberPipe = numberPipe;
        this.pageDataService = pageDataService;
        this.alertService = alertService;
        this.prodService = prodService;
        this.addOnQuoService = addOnQuoService;
        this.addonQuo = addonQuo;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.premiumAmt = '';
        this.listData = [];
        this.riskData = [];
        this.totalAddOnPremium = 0;
        this.totalPremium = 0;
        this.totalSi = 0;
        this.addOnData = [] = [];
    }
    ngOnInit() {
        this.getRiskList();
    }
    nextPage() {
        if (this.listData.length > 0) {
            this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID] = this.listData;
            this.savePremimunFire();
            this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.NEXT });
        }
    }
    backPage() {
        if (this.listData.length > 0) {
            this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID] = this.listData;
            this.savePremimunFire();
        }
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.PREV });
    }
    getRiskList() {
        this.fireRiskService
            .getMany(this.resourcesId)
            .toPromise()
            .then((res) => {
            if (res) {
                this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID] = res;
                this.listData = res || [];
                this.calculateFireTotalPremiumAmount();
                this.cdf.detectChanges();
            }
        });
    }
    newData(type, detail) {
        let modalRef;
        modalRef = this.modalService.open(_risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_10__.RiskDetailComponent, {
            size: 'xl',
            backdrop: false,
        });
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.riskId = detail ? detail.riskId : '';
        modalRef.componentInstance.oldData = detail ? detail : {};
        modalRef.componentInstance.resourcesId = this.resourcesId;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.editData = this.editData;
        modalRef.componentInstance.premiumAmt = this.premiumAmt;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                console.log('RESSSS', res);
                this.isNew = true;
                this.fireRiskData = res;
                if (res.type == 'save') {
                    // this.surrounding=res.data
                    if (detail) {
                        let index = this.listData.findIndex((x) => x.id == detail.id);
                        this.listData[index] = res.data;
                    }
                    else {
                        let index = this.listData.findIndex((x) => x.id == res.data.id);
                        if (index >= 0)
                            this.listData[index] = res.data;
                        else
                            this.listData.push(res.data);
                    }
                    this.savePremimunFire();
                    this.cdf.detectChanges();
                }
            }
        });
    }
    delete(data) {
        this.alertService
            .activate('Are you sure want to delete?', 'Warning Message')
            .then((result) => {
            if (result) {
                this.fireRiskService
                    .delete(data.id)
                    .toPromise()
                    .then((res) => {
                    if (res) {
                        let index = this.listData.findIndex((x) => x.id == data.id);
                        if (index >= 0) {
                            this.listData.splice(index, 1);
                            this.savePremimunFire();
                            this.cdf.detectChanges();
                            this.alertService
                                .activate('This record was deleted', 'Success Message')
                                .then((result) => { });
                        }
                    }
                });
            }
        });
    }
    caluFirePremimun() {
        if (this.isNew) {
            let parentData1 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID];
            let parentData2 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FirePageID];
            let precent = parentData2.policyType == 'T-NM' ? 1 : 0.75;
            let premiumTotal = 0;
            let addOnPre = 0;
            console.log('parentData1 =====> ', parentData1);
            for (let element of parentData1) {
                premiumTotal += this.globalFun.calculateDecimal(element.premium);
                const posDataArray = this.globalFun.tempFormData['addon_1634010770155' + element.id];
                if (posDataArray)
                    for (let addon of posDataArray) {
                        addOnPre += this.globalFun.calculateDecimal(addon['premium']);
                    }
            }
            // parentData2.forEach(element => {
            //   premiumTotal += parseFloat(element.premium)
            // });this.addOnsData
            console.log('premiumTotal =====> ', premiumTotal);
            console.log('addOnPre =====> ', addOnPre);
            console.log('precent =====> ', precent);
            let finalPre = (premiumTotal + addOnPre);
            let currency = parentData2.currency;
            // let stampDuty = 0;
            // if (currency == 'MMK') {
            //   stampDuty = 100 * parentData1.length;
            // } else {
            //   stampDuty = 0.05 * parentData1.length;
            // }
            finalPre = this.globalFun.calculateDecimal(finalPre);
            this.premiumAmt =
                this.numberPipe.transform(finalPre, '1.2-2') + ' ' + currency;
            // if(this.prodService.totalPremium){
            //   this.premiumAmt =
            //   this.numberPipe.transform(this.prodService.totalPremium, '1.2-2') + ' ' + currency;
            // }
            this.globalFun.paPremiumResult.next(this.premiumAmt);
            console.log('precent =====> ', precent);
            return finalPre;
        }
    }
    calculateDaysToMonth(days) {
        let rate;
        let divided = days / 31;
        if (divided > 0 && divided <= 1) {
            rate = 2 / 8;
        }
        else if (divided > 1 && divided <= 2) {
            rate = 3 / 8;
        }
        else if (divided > 2 && divided <= 3) {
            rate = 4 / 8;
        }
        else if (divided > 3 && divided <= 4) {
            rate = 5 / 8;
        }
        else if (divided > 3 && divided <= 5) {
            rate = 6 / 8;
        }
        else if (divided > 5 && divided <= 6) {
            rate = 6 / 8;
        }
        else {
            rate = 1;
        }
        return rate;
    }
    savePremimunFire() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.calculateFireTotalPremiumAmount();
            let postData = {
                premium: (Number(this.premiumAmt.split(' ')[0].split(',').join('')) || 0) + '',
                premiumView: this.premiumAmt,
                resourceId: this.resourcesId,
                type: 'policy',
            };
            console.log('updatePremimun', postData);
            return this.pageDataService.updatePremimun(postData);
        });
    }
    calculateFireTotalPremiumAmount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let totalPremium = 0;
            let totalAddOnPremium = 0;
            let parentData1 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID];
            let parentData2 = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FirePageID];
            for (var i = 0; i < parentData1.length; i++) {
                let totalPremiumNotStampDuty = 0;
                totalPremium += parseFloat(parentData1[i].premium);
                let reqBody = {
                    addOnIds: this.product.addOns.map(x => { return x.id; }),
                    optionalKey: parentData1[i].id || '',
                    quotationNo: parentData1[i].resourceId || ''
                };
                let results = yield this.addOnQuoService.getAllById(reqBody).toPromise();
                if (results.length > 0) {
                    for (var j = 0; j < results.length; j++) {
                        totalAddOnPremium += parseFloat(results[j].premium);
                        totalPremiumNotStampDuty += parseFloat(results[j].premium);
                    }
                }
                parentData1[i].totalPremiumNotStampDuty = parseFloat(parentData1[i].premium) + totalPremiumNotStampDuty;
            }
            let currency = parentData2.currency;
            let stampDuty = 0;
            if (currency == 'MMK') {
                stampDuty = 100 * parentData1.length;
            }
            else {
                stampDuty = 0.05 * parentData1.length;
            }
            this.listData = parentData1;
            let finalPre = this.globalFun.calculateDecimal(totalPremium + totalAddOnPremium) + stampDuty;
            this.premiumAmt = this.numberPipe.transform(finalPre, '1.2-2') + ' ' + currency;
            this.globalFun.paPremiumResult.next(this.premiumAmt || "0");
        });
    }
};
FireRiskComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_9__.FireRiskService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe },
    { type: _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_4__.PageDataService },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_5__.AddOnQuoService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_5__.AddOnQuoService }
];
FireRiskComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }]
};
FireRiskComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-fire-risk',
        template: _fire_risk_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fire_risk_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FireRiskComponent);



/***/ }),

/***/ 20161:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/models&services/fire-risk-rate.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireRiskRateService": () => (/* binding */ FireRiskRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 38313);





const API_RISK_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire-policy/pae`;
let FireRiskRateService = class FireRiskRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_RISK_RATE_URL);
        this.httpClient = httpClient;
    }
    getMany(data) {
        return this.httpClient.post(API_RISK_RATE_URL, data);
    }
};
FireRiskRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FireRiskRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FireRiskRateService);



/***/ }),

/***/ 47304:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/risk-detail/risk-detail.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskDetailComponent": () => (/* binding */ RiskDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _risk_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-detail.component.html?ngResource */ 61504);
/* harmony import */ var _risk_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-detail.component.scss?ngResource */ 54514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth */ 90089);
/* harmony import */ var src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/master-data/master-data.service */ 27670);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/global-fun.service */ 6033);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/valid-all-feild */ 41018);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../products/services/products-data.service */ 78680);
/* harmony import */ var _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../calculated-building/calculated-building.component */ 55631);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static-pages.data */ 93900);
/* harmony import */ var _surrounding_building_models_services_premium_rate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../surrounding-building/models&services/premium-rate-service */ 52251);
/* harmony import */ var _surrounding_building_models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../surrounding-building/models&services/surrounding-building.service */ 64703);
/* harmony import */ var _models_services_fire_risk_rate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models&services/fire-risk-rate.service */ 20161);
/* harmony import */ var _models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models&services/fire-risk.service */ 10027);



















let RiskDetailComponent = class RiskDetailComponent {
    constructor(modalService, modal, masterDataService, cdf, fireRiskService, auth, PremiumRateService, prodService, globalService, fireRiskRate, firebuildingService, numberPipe) {
        this.modalService = modalService;
        this.modal = modal;
        this.masterDataService = masterDataService;
        this.cdf = cdf;
        this.fireRiskService = fireRiskService;
        this.auth = auth;
        this.PremiumRateService = PremiumRateService;
        this.prodService = prodService;
        this.globalService = globalService;
        this.fireRiskRate = fireRiskRate;
        this.firebuildingService = firebuildingService;
        this.numberPipe = numberPipe;
        this.typeOfBuildingOption = [];
        this.occupationOfBuildingOption = [];
        this.occupationOfBuildingOptions = [];
        this.buildingClassOption = [];
        this.roofOption = [];
        this.wallOption = [];
        this.floorClassOption = [];
        this.premiumRateOption = [];
        this.type = 'create';
        this.resourcesId = "";
        this.oldData = {};
        this.premiumAmt = "";
        this.viewPage = "form";
        this.buildingSi = 0;
        this.riskSi = 0;
        this.otherSi = 0;
        this.fireRate = 0;
        this.productDetail = {};
        this.fireContentSi = 0;
        this.firePlatSi = 0;
        this.fireStockSi = 0;
        this.activeBox = "DETAIL";
        this.step1Com = false;
        this.step2Com = false;
        this.step3Com = false;
        this.currencyType = "MMK";
        this.unsub = [];
        this.totalPremium = 0;
        this.tempTotalPremiumAmount = 0;
    }
    ngOnDestroy() {
        this.unsub.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        if (this.totalPremium == 0) {
            this.totalPremium = 0;
        }
        this.unsub[0] = this.globalService.currenyValueObs.subscribe((res) => {
            if (this.currencyType != res) {
                this.currencyType = res;
                console.log("  this.currencyType ", this.currencyType);
            }
        });
        this.loadForm();
        this.getBuildingClass();
        this.getBuildingType();
        this.getBuildingOccupation();
        this.getRoof();
        this.getWall();
        this.getFloor();
        this.productDetail = this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FirePageID] || {};
        if (this.type == 'create') {
            this.loadForm();
        }
        else {
            this.loadForm(this.oldData);
            if (this.oldData.id) {
                this.getFirePlant();
                this.getFireStock();
                this.getFireContent();
            }
        }
    }
    getBuildingClass() {
        this.masterDataService
            .getDataByType("BUILDING_CLASS").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.buildingClassOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getBuildingType() {
        this.masterDataService
            .getDataByType("TYPE_OF_BUILDING").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.typeOfBuildingOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getRoof() {
        this.masterDataService
            .getDataByType("CONTRUCTION_OF_ROOF").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.roofOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getWall() {
        this.masterDataService
            .getDataByType("CONTRUCTION_OF_WALLS").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.wallOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getFloor() {
        this.masterDataService
            .getDataByType("CONTRUCTION_OF_FLOOR").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.floorClassOption = res;
                this.cdf.detectChanges();
            }
        });
    }
    getBuildingOccupation() {
        this.masterDataService
            .getDataByType("OCCUPATION_OF_BUILDING").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(x => this.getFormatOpt(x)))
            .toPromise()
            .then((res) => {
            if (res) {
                this.occupationOfBuildingOptions = res;
                let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding;
                let typeOfBuilding = this.fireRiskform.value.typeOfBuilding;
                if (occupationOfBuilding && typeOfBuilding) {
                    this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding);
                    let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding);
                    if (index < 0) {
                        this.fireRiskform.controls.occupationOfBuilding.setValue(null);
                    }
                }
                this.cdf.detectChanges();
            }
        });
    }
    getFormatOpt(res) {
        return res.map(x => {
            return { 'code': x.codeId, 'value': x.codeName || x.codeValue, 'parent': x.parentId };
        });
    }
    calcuRate(type) {
        let buildingClass = this.fireRiskform.value.buildingClass;
        let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding;
        let typeOfBuilding = this.fireRiskform.value.typeOfBuilding;
        if (type == 'child') {
            this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding);
            let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding);
            if (index < 0) {
                this.fireRiskform.controls.occupationOfBuilding.setValue(null);
            }
        }
        if (buildingClass && occupationOfBuilding && typeOfBuilding) {
            this.getPremiumRate();
        }
    }
    getPremiumRate() {
        let buildingClass = this.fireRiskform.value.buildingClass;
        let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding;
        let typeOfBuilding = this.fireRiskform.value.typeOfBuilding;
        this.PremiumRateService.getPremiumRate(buildingClass, occupationOfBuilding, typeOfBuilding).toPromise().then((res) => {
            if (res) {
                this.fireRiskform.controls.rate.setValue(res.premiumRate);
            }
        });
    }
    loadForm(oldData) {
        //     Validators.required
        // Validators.required
        // Validators.required
        //     Below fields should be mandatory according to the core system.
        // 1. Building description
        // 2. Type of Building
        // 3. Occupation of Building
        // 4. Building Class
        // 5. Construction of Roof
        // 6. Construction of Wall
        // 7. Construction of Floor
        // 8. No of Story of Building
        // 9. Year of Construction
        // 10. Total square in Feet
        // 11. Special Decoration
        let formValidate = [];
        if (this.productDetail.policyType == 'T-NM')
            formValidate.push(_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required);
        this.fireRiskform = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
            buildingClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.buildingClass : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            buildingDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.buildingDescription : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            // id: new FormControl(oldData ? oldData.id : ""),
            occupationOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.occupationOfBuilding : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            typeOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.typeOfBuilding : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            constructionOfFloor: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.constructionOfFloor : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            constructionOfRoof: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.constructionOfRoof : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            constructionOfWall: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.constructionOfWall : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.height : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.length : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.width : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.rate : ""),
            specialDecoration: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.specialDecoration || false : false, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            storyOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.storyOfBuilding : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            sumInsure: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.sumInsure : "", [...formValidate]),
            totalSquareFoot: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.totalSquareFoot : "", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
            yearOfConstruction: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.yearOfConstruction : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.max(9999)]),
            // proposeStockValue: new FormControl(oldData ? oldData.proposeStockValue : 0),
            buildingSi: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.buildingSi : 0),
            riskSi: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(oldData ? oldData.riskSi : 0),
        });
        this.riskSi = oldData ? oldData.riskSi : 0;
        this.buildingSi = oldData ? oldData.buildingSi : 0;
        let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding;
        let typeOfBuilding = this.fireRiskform.value.typeOfBuildings;
        if (oldData)
            this.step1Com = oldData.id ? true : false;
        if (occupationOfBuilding && typeOfBuilding && this.occupationOfBuildingOptions.length > 0) {
            this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding);
            let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding);
            if (index < 0) {
                this.fireRiskform.controls.occupationOfBuilding.setValue(null);
            }
        }
        if (this.currencyType == 'USD') {
            this.sumInsure.clearValidators();
            this.sumInsure.updateValueAndValidity();
        }
    }
    get sumInsure() {
        return this.fireRiskform.get('sumInsure');
    }
    createRisk(closeModal, loop) {
        if (this.currencyType == 'USD') {
            this.sumInsure.clearValidators();
            this.sumInsure.updateValueAndValidity();
        }
        if (this.fireRiskform.invalid) {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_5__.validateAllFields)(this.fireRiskform);
            return true;
        }
        let data = this.fireRiskform.getRawValue();
        this.step1Com = true;
        loop;
        if (!closeModal && !loop) {
            this.activeBox = "BUILDING";
        }
        // this.calBuildingSi()
        // let index: number = 0
        //   let unsub = this.globalService.paPremiumResult.subscribe((res: any) => {
        //     this.countTotal = 0;
        //     let position = res.search("MMK");
        //     let currency: string = 'MMK'
        //     if(position < 1){
        //       currency = 'USD'
        //     }
        //     let replaceCurrency = parseFloat(res.replace(currency, '').replace(/,/g, ''));
        //     //this.totalPremium += 
        //     // if(this.prodService.totalPremium !=0){
        //     //   this.totalPremium += 
        //     // }
        //     let total: any 
        //     console.log('oldData =====> ', this.oldData);
        //     if(!postData.id){
        //       let total: any;
        //       total = replaceCurrency + this.totalPremium;
        //       this.totalPremium = total;
        //       console.log('replaceCurrency =====> ', this.totalPremium);
        //     }
        console.log('risk detail totalPremium ', this.totalPremium);
        //   })
        let postData = Object.assign(Object.assign(Object.assign({}, this.oldData), data), { id: this.oldData.id, buildingSi: this.buildingSi, riskSi: this.riskSi, resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId || 1,
                policyNumber: null,
                premium: this.totalPremium,
                premiumView: this.numberPipe.transform(this.globalService.calculateDecimal(this.totalPremium) || 0, "1.2-2") + ' MMK',
                sumInsure: data.sumInsure || 0,
                sumInsureView: this.numberPipe.transform(data.sumInsure || 0, "1.2-2") + ' MMK' || 0,
                productId: this.prodService.createingProd.id,
                productCode: this.prodService.createingProd.code,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                currency: this.currencyType,
                resourceId: this.resourcesId,
                type: this.prodService.type,
            }, resourceId: this.resourcesId });
        this.globalService.fireBurgery(data.buildingClass);
        //this.globalService.paPremiumResult.next(this.numberPipe.transform(this.globalService.calculateDecimal(this.totalPremium) || 0, "1.2-2") + ' MMK',)
        //this.globalService.sumInsuredResult.next(this.numberPipe.transform(data.sumInsure || 0, "1.2-2")+ ' MMK');
        // if (this.type != 'create') {
        if (postData.id) {
            this.fireRiskService.updateNoID(postData)
                .toPromise()
                .then((res) => {
                if (res) {
                    this.oldData = Object.assign({}, postData);
                    this.viewPage = "other";
                    if (this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID]) {
                        // this.globalService.tempFormData[FireRiskID].push(this.oldData)
                        let index = this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID].findIndex(x => x.id == this.oldData.id);
                        if (index < 0) {
                            this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID].push(this.oldData);
                        }
                        else {
                            this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID][index] = this.oldData;
                        }
                    }
                    else {
                        this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID] = [this.oldData];
                    }
                    if (!loop) {
                        this.calPremimun(false);
                    }
                    if (closeModal)
                        this.modalService.dismissAll({ data: postData, type: "save" });
                }
            });
        }
        else {
            this.fireRiskService.save(postData)
                .toPromise()
                .then((res) => {
                if (res) {
                    postData.id = res;
                    this.oldData = Object.assign({}, postData);
                    this.viewPage = "other";
                    if (this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID]) {
                        this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID].push(this.oldData);
                    }
                    else {
                        this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FireRiskID] = [this.oldData];
                    }
                    if (!loop) {
                        this.calPremimun(false);
                    }
                    if (closeModal)
                        this.modal.dismiss({ data: postData, type: "save" });
                }
            });
        }
    }
    viewOther(type) {
        if (this.viewPage != type)
            this.viewPage = type;
    }
    dismissModal() {
        this.modal.dismiss();
    }
    isControlValid(controlName) {
        const control = this.fireRiskform.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.fireRiskform.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.fireRiskform.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.fireRiskform.controls[controlName];
        return control.dirty || control.touched;
    }
    calcuSquare() {
        let width = this.fireRiskform.controls['width'].value;
        let height = this.fireRiskform.controls['length'].value;
        if (width * height) {
            let square = width * height;
            this.fireRiskform.controls['totalSquareFoot'].setValue(square);
        }
    }
    calBuildingSi() {
        console.log("enter SI");
        this.buildingSi = 0;
        let pae = this.oldData.sumInsure / this.oldData.totalSquareFoot;
        let postData = {
            "classNo": this.oldData.buildingClass,
            "floorCd": this.oldData.constructionOfFloor,
            "roofCd": this.oldData.constructionOfRoof,
            "wallCd": this.oldData.constructionOfWall,
            "year": this.oldData.yearOfConstruction,
        };
        // let pae2: any = await this.fireRiskRate.getMany(postData).toPromise()
        // let value = pae
        // if (pae2) {
        //   let rate = pae2.limitedPae
        //   // testing
        //   value = pae < rate ? rate : pae
        // }
        this.buildingSi = this.oldData.sumInsure;
        if (this.otherSi == 0) {
            this.otherSi = this.fireContentSi + this.firePlatSi + this.fireStockSi;
        }
        if (this.productDetail.currency == 'MMK')
            this.riskSi = this.otherSi + this.buildingSi;
        else
            this.riskSi = this.otherSi;
        if (this.oldData) {
            this.oldData.buildingSi = this.buildingSi;
            this.oldData.riskSi = this.riskSi;
        }
    }
    calBuildingSiD() {
        this.buildingSi = 0;
        this.buildingSi = this.oldData.sumInsure;
        if (this.otherSi == 0) {
            this.otherSi = this.fireContentSi + this.firePlatSi + this.fireStockSi;
        }
        if (this.productDetail.currency == 'MMK')
            this.riskSi = (this.otherSi * 0.75) + this.buildingSi;
        else
            this.riskSi = this.otherSi * 0.75;
        if (this.oldData) {
            this.riskSi = this.oldData.proposeStockValue || 0;
            this.oldData.riskSi = this.riskSi;
        }
    }
    changeTotal(total) {
        this.otherSi = 0;
        this.otherSi = total;
    }
    calPremimun(close = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (this.totalPremium == 0) {
                this.totalPremium = 0;
            }
            console.log("rateData,rate1,rate2,", this.oldData);
            if (this.oldData.id) {
                if (this.productDetail.policyType == 'T-NM') {
                    yield this.calBuildingSi();
                }
                else {
                    yield this.calBuildingSiD();
                    // this.riskSi = this.oldData.proposeStockValue|| 0
                    // this.oldData.riskSi = this.riskSi
                }
                let rateData = 0;
                let rate1 = this.oldData.rate;
                let response = yield this.firebuildingService.getMaxRate(this.oldData.id).toPromise();
                let rate2 = response ? response.rate : 0;
                if (this.oldData.specialDecoration) {
                    if ((rate1 * 1.3) > rate2) {
                        rateData = rate1 * 1.3;
                    }
                    else {
                        rateData = ((rate1 * 1.3) + rate2) / 2;
                    }
                }
                else {
                    if (rate1 > rate2) {
                        rateData = rate1;
                    }
                    else {
                        rateData = (rate1 + rate2) / 2;
                    }
                }
                let parentData2 = this.globalService.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.FirePageID];
                let dateRate = 1;
                switch (true) {
                    case parentData2.policyUnit == 'G' && parentData2.policyDuration == 1:
                        dateRate = 1;
                        break;
                    case parentData2.policyUnit == 'D' && parentData2.policyDuration <= 10:
                        dateRate = 1 / 8;
                        break;
                    case parentData2.policyUnit == 'D' && parentData2.policyDuration <= 15:
                        dateRate = 1 / 6;
                        break;
                    case parentData2.policyUnit == 'D' && parentData2.policyDuration > 15:
                        dateRate = this.calculateDaysToMonth(parentData2.policyDuration);
                        console.log('calculateDaysToMonth', dateRate);
                        // dateRate = 2 / 8;
                        break;
                    case parentData2.policyUnit == 'F' && parentData2.policyDuration == 1:
                        dateRate = 2 / 8;
                        break;
                    case parentData2.policyUnit == 'F' && parentData2.policyDuration == 2:
                        dateRate = 3 / 8;
                        break;
                    case parentData2.policyUnit == 'F' && parentData2.policyDuration == 3:
                        dateRate = 4 / 8;
                        break;
                    case parentData2.policyUnit == 'F' && parentData2.policyDuration == 4:
                        dateRate = 5 / 8;
                        break;
                    case parentData2.policyUnit == 'F' && parentData2.policyDuration == 5:
                        dateRate = 6 / 8;
                        break;
                    case parentData2.policyUnit == 'F' && parentData2.policyDuration == 6:
                        dateRate = 6 / 8;
                        break;
                    case parentData2.policyUnit == 'F' && parentData2.policyDuration > 6:
                        dateRate = 1;
                        break;
                }
                //this.oldData.premium = this.globalService.calculateDecimal(this.oldData.riskSi * (rateData / 100))
                this.oldData.premium = this.globalService.calculateDecimal(this.oldData.riskSi * (rateData / 100) * dateRate);
                //this.totalPremium = premiumView
                console.log('Fire cover basic calculate =====> ', this.oldData.premium);
                console.log(' this.prodService.totalPremium =====> ', this.prodService.totalPremium);
                this.totalPremium = this.oldData.premium + this.prodService.totalPremium;
                if (this.currencyType == 'MMK') {
                    this.totalPremium = this.totalPremium + 100;
                }
                else {
                    this.totalPremium = this.totalPremium + 0.05;
                }
                //console.log('this.globalService.paPremiumResult =====> ', this.tempTotalPremiumAmount);
                // if(this.prodService.totalPremium != 0){
                //   this.tempTotalPremiumAmount = this.totalPremium
                // }
                // if(this.prodService.totalPremiumView != 0){
                //   this.tempTotalPremiumAmount += this.totalPremium
                // }
                //this.productService.totalPremiumView
                // if(this.totalPremium > 0){
                //   this.tempTotalPremium += this.totalPremium
                //   this.totalPremium = this.tempTotalPremium;
                // }else{
                //   this.tempTotalPremium =  this.totalPremium;
                // }
                yield this.createRisk(close, true);
            }
            else {
                this.modal.dismiss();
            }
        });
    }
    calculateDaysToMonth(days) {
        let rate;
        let divided = days / 31;
        if (divided > 0 && divided <= 1) {
            rate = 2 / 8;
        }
        else if (divided > 1 && divided <= 2) {
            rate = 3 / 8;
        }
        else if (divided > 2 && divided <= 3) {
            rate = 4 / 8;
        }
        else if (divided > 3 && divided <= 4) {
            rate = 5 / 8;
        }
        else if (divided > 3 && divided <= 5) {
            rate = 6 / 8;
        }
        else if (divided > 5 && divided <= 6) {
            rate = 6 / 8;
        }
        else {
            rate = 1;
        }
        return rate;
    }
    getFireContent() {
        this.fireRiskService.getContent(this.oldData.id).toPromise().then((res) => {
            if (res) {
                this.fireContentSi = 0;
                res.forEach(element => {
                    this.fireContentSi += parseFloat(element.totalValue);
                });
            }
        });
    }
    getFirePlant() {
        this.fireRiskService.getPlant(this.oldData.id).toPromise().then((res) => {
            if (res) {
                this.firePlatSi = 0;
                res.forEach(element => {
                    this.firePlatSi += parseFloat(element.totalValue);
                });
            }
        });
    }
    getFireStock() {
        this.fireRiskService.getStock(this.oldData.id).toPromise().then((res) => {
            if (res) {
                this.fireStockSi = 0;
                res.forEach(element => {
                    this.fireStockSi += parseFloat(element.stockValue);
                });
            }
        });
    }
    toggleAccordion(type) {
        this.activeBox = type == this.activeBox ? "" : type;
    }
    step2Done() {
        this.step2Com = true;
        this.activeBox = "ADDON";
        let stockVal = this.stockTemp.stockData;
        if (stockVal.length > 0)
            this.oldData.proposeStockValue = stockVal[0].agreedSi;
        this.calPremimun(false);
    }
    step3Done() {
        this.activeBox = "";
        this.step3Com = true;
        this.calPremimun();
    }
};
RiskDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbActiveModal },
    { type: src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef },
    { type: _models_services_fire_risk_service__WEBPACK_IMPORTED_MODULE_12__.FireRiskService },
    { type: src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _surrounding_building_models_services_premium_rate_service__WEBPACK_IMPORTED_MODULE_9__.PremiumRateService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_4__.GlobalFunctionService },
    { type: _models_services_fire_risk_rate_service__WEBPACK_IMPORTED_MODULE_11__.FireRiskRateService },
    { type: _surrounding_building_models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_10__.SurroundingBuildingService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe }
];
RiskDetailComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input }],
    stockTemp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_7__.CalculatedBuildingComponent,] }],
    oldData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Input }]
};
RiskDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-risk-detail',
        template: _risk_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_risk_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RiskDetailComponent);



/***/ }),

/***/ 57865:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-simple-page/fire-simple-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirePageComponent": () => (/* binding */ FirePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fire_simple_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fire-simple-page.component.html?ngResource */ 53711);
/* harmony import */ var _fire_simple_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire-simple-page.component.scss?ngResource */ 31999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/valid-all-feild */ 41018);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/auth */ 90089);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_metronic/core */ 15818);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 36565);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _models_services_fire_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/fire-product.service */ 96437);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 90278);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/is-json */ 88757);





















let FirePageComponent = class FirePageComponent {
    constructor(fb, prodService, auth, fireService, globalFun, addOnQuoService, coverageQuoService, alertService, cdf) {
        this.fb = fb;
        this.prodService = prodService;
        this.auth = auth;
        this.fireService = fireService;
        this.globalFun = globalFun;
        this.addOnQuoService = addOnQuoService;
        this.coverageQuoService = coverageQuoService;
        this.alertService = alertService;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.toMinDate = null;
        this.fromMinDate = null;
        this.toMaxDate = null;
        this.fromMaxDate = null;
        this.dobMinDate = null;
        this.dobMaxDate = null;
        this.validValue = 365;
        this.options = [];
        this.options2 = [];
        this.addOns = {};
        this.options3 = [];
        this.options4 = [];
        this.durtaionOption = [
            {
                code: 'D', value: 'Days'
            },
            {
                code: 'F', value: 'Months'
            },
            {
                code: 'G', value: 'Years'
            },
        ];
        this.currencyType = "MMK";
        this.unsub = [];
        this.staticForm = this.fb.group({
            startDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            endDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            policyType: ['T-NM', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            policyDuration: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(365)])],
            currency: ['MMK', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            policyUnit: ['D', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])]
        });
        this.options3 = Array.from({ length: 10 }, (_, i) => i + 1);
    }
    updateValidation(oldDataType) {
        let type;
        if (oldDataType) {
            type = oldDataType;
        }
        type = this.staticForm.value.policyUnit;
        if (type == 'D') {
            this.staticForm.controls.policyDuration.clearValidators();
            this.staticForm.controls.policyDuration.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(365)]);
            this.staticForm.controls.policyDuration.updateValueAndValidity();
            this.validValue = 365;
            this.doValid();
        }
        else if (type == 'F') {
            this.staticForm.controls.policyDuration.clearValidators();
            this.staticForm.controls.policyDuration.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(12)]);
            this.staticForm.controls.policyDuration.updateValueAndValidity();
            this.validValue = 12;
            this.doValid();
        }
        else {
            this.staticForm.controls.policyDuration.clearValidators();
            this.staticForm.controls.policyDuration.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(1)]);
            this.staticForm.controls.policyDuration.updateValueAndValidity();
            this.validValue = 1;
            this.doValid();
        }
    }
    ngOnDestroy() {
        this.unsub.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
                if (this.currencyType != res) {
                    this.currencyType = res;
                }
            });
            this.options = this.product.coverages;
            this.options2 = this.product.addOns;
            this.refID = this.prodService.referenceID;
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(5, `days`);
            this.fromMinDate = toDate.format('YYYY-MM-DD');
            // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.toMinDate = toDate.format('YYYY-MM-DD');
            // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            let dobMaxDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(6, `years`);
            this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD');
            // this.dobMaxDate = { year: parseInt(dobMaxDate.format('YYYY')), month: parseInt(dobMaxDate.format('M')), day: parseInt(dobMaxDate.format('D')) };
            let dobMinDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(75, `years`);
            this.dobMinDate = dobMinDate.format('YYYY-MM-DD');
            // this.dobMinDate = { year: parseInt(dobMinDate.format('YYYY')), month: parseInt(dobMinDate.format('M')), day: parseInt(dobMinDate.format('D')) };
            // if (this.prodService.editData || this.refID)
            this.getOldData();
            this.updateValidation();
            // this.getAddOn()
            // for (const item of this.product.addOns) {
            //   let response: any = null;
            //   try {
            //     if (this.editData) {
            //       response = await this.addOnQuoService.getOne(item.id, this.editData.id).toPromise()
            //     }
            //   } catch (error) {
            //     response = null
            //   }
            //   this.addOns[item.id + 'opt'] = response ? response.sumInsured || 0 : 0
            // }
            this.staticForm.controls.policyType.setValue('T-NM');
            this.staticForm.controls.currency.setValue('MMK');
        });
    }
    doValid() {
        let value = this.staticForm.controls['startDate'].value;
        let duration = this.staticForm.controls['policyDuration'].value;
        let type = this.staticForm.controls['policyUnit'].value;
        if (value && duration && type == 'D') {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['startDate'].value).add(duration, 'days').subtract(1, 'days');
            // this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.staticForm.controls['endDate'].setValue(toDate);
        }
        else if (value && duration && type == 'F') {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['startDate'].value).add(duration, 'month').subtract(1, 'days');
            this.staticForm.controls['endDate'].setValue(toDate);
        }
        else {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['startDate'].value).add(duration, 'year').subtract(1, 'days');
            this.staticForm.controls['endDate'].setValue(toDate);
        }
    }
    calcuteDay() {
        let startDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['startDate'].value);
        let endDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['endDate'].value);
        let diffDays = startDate.diff(endDate, "days") + 1;
        this.staticForm.controls['policyDuration'].setValue(diffDays);
    }
    get controls() {
        return this.staticForm.controls;
    }
    // helpers for View
    isControlValid(controlName, group) {
        const control = group.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName, group) {
        const control = group.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName, group) {
        const control = group.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName, group) {
        const control = group.controls[controlName];
        return control.dirty || control.touched;
    }
    nextPage() {
        if (this.staticForm.invalid) {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_4__.validateAllFields)(this.staticForm);
            return true;
        }
        else {
            if (this.editId) {
                this.saveData(this.editId);
            }
            else {
                this.saveData();
            }
        }
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.PREV });
    }
    saveData(id) {
        const formValue = this.staticForm.value;
        let postData = {
            id: id || null,
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__(formValue.endDate).format("YYYY-MM-DD"),
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__(formValue.startDate).format("YYYY-MM-DD"),
            policyType: formValue.policyType,
            policyDuration: formValue.policyDuration,
            currency: formValue.currency,
            policyUnit: formValue.policyUnit,
            resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId || 1,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                // sumInsuredView:this.sumInsured,
                policyInceptionDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['startDate'].value).format("YYYY-MM-DD"),
                policyExpireDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['endDate'].value).format("YYYY-MM-DD"),
                productId: this.prodService.createingProd.id,
                productCode: this.prodService.createingProd.code,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                currency: this.currencyType,
                // status: ,
                type: this.prodService.type
            },
            resourceId: this.resourcesId,
        };
        this.globalFun.currenyValueObs.next(formValue.currency);
        // console.log(postData);
        if (!id) {
            this.fireService.save(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.resourcesId = res.resourceId;
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_12__.FirePageID] = Object.assign({ id: res.id }, postData);
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
        else {
            this.fireService.updateNoID(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_12__.FirePageID] = Object.assign({ id: res.id }, postData);
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
    }
    // .pipe(mergeMap(resources => {
    //   return resources
    // }))
    getOldData(dataget = false) {
        // let dataget = false
        console.log(this.resourcesId);
        if (this.resourcesId || this.refID) {
            let resId = dataget ? this.refID : (this.resourcesId || this.refID);
            if (!resId)
                return false;
            this.fireService.getOne(resId).toPromise().then((res) => {
                // dataget = true
                if (res) {
                    this.oldData = Object.assign(Object.assign({}, res), { id: null });
                    this.editId = resId == this.resourcesId ? res.id : null;
                    this.reloadOldValueForm();
                }
                else {
                    if (!dataget && resId != this.refID) {
                        this.getOldData(true);
                    }
                }
            });
        }
    }
    reloadOldValueForm() {
        this.staticForm.patchValue({
            startDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.startDate),
            endDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.endDate),
            policyType: this.oldData.policyType,
            policyDuration: this.oldData.policyDuration,
            currency: this.oldData.currency,
            policyUnit: this.oldData.policyUnit,
        });
        this.updateValidation(this.oldData.policyUnit);
        this.cdf.detectChanges();
    }
};
FirePageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_8__.ProductDataService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _models_services_fire_product_service__WEBPACK_IMPORTED_MODULE_10__.FireProductService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__.AddOnQuoService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_11__.CoverageQuoService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_13__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef }
];
FirePageComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    sumInsured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }]
};
FirePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-fire-simple-page',
        template: _fire_simple_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_6__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_6__.CustomDateParserFormatter },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_20__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_14__.MY_FORMATS },
        ],
        styles: [_fire_simple_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FirePageComponent);



/***/ }),

/***/ 478:
/*!***********************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/health-quo.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthQuoComponent": () => (/* binding */ HealthQuoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _health_quo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-quo.component.html?ngResource */ 81067);
/* harmony import */ var _health_quo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-quo.component.scss?ngResource */ 28217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/auth */ 90089);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var _models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models&services/health-payment.service */ 54160);
/* harmony import */ var _models_services_health_rate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/health-rate.service */ 90585);















let HealthQuoComponent = class HealthQuoComponent {
    constructor(globalFun, alertService, healthRateService, healthPayService, cdf, auth, prodService, numberPipe) {
        this.globalFun = globalFun;
        this.alertService = alertService;
        this.healthRateService = healthRateService;
        this.healthPayService = healthPayService;
        this.cdf = cdf;
        this.auth = auth;
        this.prodService = prodService;
        this.numberPipe = numberPipe;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.showData = [];
        this.schedule = [];
        this.tempSchedule = [];
        this.totalP = 0;
        this.totalL = 0;
        this.preLump = 0;
        this.preSemi = 0;
        this.totalSemi = 0;
        this.preAddon = 0;
        this.currencyType = "MMK";
        this.unsub = [];
    }
    ngOnDestroy() {
        this.unsub.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
            if (this.currencyType != res) {
                this.currencyType = res;
            }
        });
        this.parentData = this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_8__.HealthPageID];
        // console.log("PARTENT", this.parentData);
        if (!this.parentData) {
            this.alertService.activate("This page cann't to show because there is no health product detail data. Please add health product detail in prodcut configuration", "Warning");
        }
        else {
            this.showData.push({ keyName: this.parentData.basicCoverId, value: this.parentData.sumInsuredMainCover });
            // for (let addon of this.product.addOns) {
            // }
            if (this.parentData.addOns && this.parentData.basicCoverId != "CRTILLNESS") {
                this.product.addOns.forEach(addon => {
                    if (this.parentData.addOns[addon.id + "opt"]) {
                        this.showData.push({ keyName: addon.description, value: this.parentData.addOns[addon.id + "value"] });
                    }
                });
            }
            // console.log('SHOWDATA', this.showData)
            this.calculateSchedule();
        }
    }
    calculateSchedule() {
        //lump
        // annually
        // if (this.parentData.paymentFrequency)
        this.totalP = 0;
        this.totalL = 0;
        let firstTimeValue = 300;
        let doCount = this.parentData.paymentFrequency == 'L' ? 1 : 2;
        let age = Math.ceil(moment__WEBPACK_IMPORTED_MODULE_2__().diff(this.parentData.dateOfBirth, 'years', true));
        this.healthRateService.getOne(age, this.parentData.basicCoverId).toPromise().then((res) => {
            // console.log("healthRateService", res);
            if (res) {
                if (this.parentData.paymentFrequency == 'L') {
                    this.preLump = res.lumpSum * this.parentData.sumInsuredMainCover;
                    let pre = res.lumpSum * this.parentData.sumInsuredMainCover;
                    let levy = firstTimeValue * this.parentData.sumInsuredMainCover;
                    this.totalP = this.totalP + pre;
                    this.totalL = levy;
                    this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: levy });
                    firstTimeValue = 0;
                }
                else {
                    this.preSemi = res.semiAnnual * this.parentData.sumInsuredMainCover;
                    let pre = res.semiAnnual * this.parentData.sumInsuredMainCover;
                    let levy = firstTimeValue * this.parentData.sumInsuredMainCover;
                    this.totalP = this.totalP + pre;
                    // console.log("TOTALP", this.totalP);
                    this.totalL = levy;
                    this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: levy });
                    firstTimeValue = 0;
                    this.schedule.push({ premium: pre, coverage: this.parentData.basicCoverId, sumInsured: this.parentData.sumInsuredMainCover, levy: 0 });
                }
                // let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL
                if (this.schedule.length > 0) {
                    if (this.parentData.paymentFrequency == "L") {
                        this.tempSchedule = [
                            { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
                        ];
                    }
                    else {
                        // let tempTotal = this.totalP / 2
                        let tempTotal = this.totalP;
                        this.tempSchedule = [
                            { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
                            { premium: tempTotal, levy: 0, total: tempTotal },
                        ];
                        this.totalSemi = this.tempSchedule[0].premium + this.tempSchedule[1].premium;
                    }
                }
                let total = this.parentData.paymentFrequency == 'L' ? this.totalP : this.totalSemi;
                let tempPre = this.globalFun.calculateDecimal(total) + this.totalL;
                this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK";
                // console.log("THIS>PREMIUM", this.premiumAmt);
                this.globalFun.paPremiumResult.next(this.premiumAmt);
                if (this.parentData.basicCoverId == "CRTILLNESS") {
                    this.cdf.detectChanges();
                }
                else
                    this.calculateScheduleAddOn(age);
            }
        });
    }
    calculateScheduleAddOn(age) {
        let i = 0;
        let pre;
        let doCount = this.parentData.paymentFrequency == 'L' ? 1 : 2;
        this.product.addOns.forEach(addon => {
            if (this.parentData.addOns[addon.id + "opt"]) {
                let value = this.parentData.addOns[addon.id + "value"];
                // console.log("VALUEE", value);
                i += 1;
                this.healthRateService.getOne(age, addon.code).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    // console.log("healthRateService", res);
                    if (res) {
                        if (this.parentData.paymentFrequency == 'L') {
                            pre = res.lumpSum * value;
                            this.preAddon += pre;
                            this.totalP = this.preLump + this.preAddon;
                        }
                        else {
                            pre = res.semiAnnual * value;
                            this.preAddon += pre;
                            // console.log("PREPRE", this.preAddon);
                            this.totalP = this.preSemi + this.preAddon;
                        }
                    }
                    if (this.parentData.paymentFrequency == "L") {
                        this.tempSchedule = [
                            { premium: this.totalP, levy: this.totalL, total: this.totalP + this.totalL },
                        ];
                    }
                    else {
                        let tempTotal = this.totalP;
                        this.tempSchedule = [
                            { premium: tempTotal, levy: this.totalL, total: tempTotal + this.totalL },
                            { premium: tempTotal, levy: 0, total: tempTotal },
                        ];
                        this.totalSemi = this.tempSchedule[0].premium + this.tempSchedule[1].premium;
                    }
                    let total = this.parentData.paymentFrequency == 'L' ? this.totalP : this.totalSemi;
                    let tempPre = this.globalFun.calculateDecimal(total) + this.totalL;
                    this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK ";
                    // console.log("THIS>PREMIUM", this.premiumAmt);
                    this.globalFun.paPremiumResult.next(this.premiumAmt);
                    this.cdf.detectChanges();
                    // }
                })).catch(e => {
                    if (i == this.product.addOns.length)
                        this.cdf.detectChanges();
                });
            }
        });
    }
    nextPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL
            // this.premiumAmt = this.numberPipe.transform(tempPre,"1.2-2") + " MMK / month"
            let total = this.parentData.paymentFrequency == 'L' ? this.totalP : this.totalSemi;
            let tempPre = this.globalFun.calculateDecimal(total) + this.totalL;
            this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK";
            this.globalFun.paPremiumResult.next(this.premiumAmt);
            this.healthPayService.deleteMany(this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.mergeMap)((data) => {
                let postData = {
                    "resourceData": {
                        "agentId": this.auth.currentUserValue.id || 1,
                        "customerId": this.prodService.creatingCustomer.customerId || 1,
                        "policyNumber": null,
                        "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                        "premiumView": this.premiumAmt,
                        // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                        // sumInsuredView:this.sumInsured,
                        "productId": this.product.id,
                        "productCode": this.product.code,
                        "quotationId": this.prodService.referenceID,
                        "type": this.prodService.type,
                        "leadId": this.prodService.creatingLeadId,
                        currency: this.currencyType,
                    },
                    "resourceId": this.resourcesId,
                    "requests": []
                };
                postData.requests = this.tempSchedule.map((x) => {
                    return {
                        "paymentTerm": this.parentData.paymentFrequency,
                        "plan": this.parentData.basicCoverId,
                        "premium": x.premium,
                        "levy": x.levy,
                        "coverage": x.coverage,
                        "sumInsured": x.sumInsured,
                        "resourceId": this.resourcesId,
                        "total": x.levy + x.premium,
                    };
                });
                return this.healthPayService.saveAll(postData);
            })).toPromise().then((res) => {
                if (res) {
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.NEXT });
                }
            });
        });
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_7__.StaticActionType.PREV });
    }
};
HealthQuoComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _models_services_health_rate_service__WEBPACK_IMPORTED_MODULE_10__.HealthRateService },
    { type: _models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_9__.HealthPaymentService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_6__.ProductDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe }
];
HealthQuoComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    sumInsured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
HealthQuoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-health-quo',
        template: _health_quo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_health_quo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HealthQuoComponent);



/***/ }),

/***/ 90585:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/models&services/health-rate.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthRateService": () => (/* binding */ HealthRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 38313);





const API_HEALTH_RATE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/health/coverage-rate`;
let HealthRateService = class HealthRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_HEALTH_RATE_URL);
        this.httpClient = httpClient;
    }
    getOne(age, cover) {
        return this.httpClient.get(API_HEALTH_RATE_URL + "?age=" + age + "&cover=" + cover);
    }
};
HealthRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
HealthRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], HealthRateService);



/***/ }),

/***/ 53178:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/motor-addon/motor-addon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotorAddonComponent": () => (/* binding */ MotorAddonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _motor_addon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./motor-addon.component.html?ngResource */ 95428);
/* harmony import */ var _motor_addon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motor-addon.component.scss?ngResource */ 62208);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-calendar */ 65610);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/global-fun.service */ 6033);
/* harmony import */ var src_app_core_is_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/is-json */ 88757);
/* harmony import */ var _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product-form/page-data.service */ 41070);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 36565);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-field.interface */ 54625);















let MotorAddonComponent = class MotorAddonComponent {
    constructor(globalFun, productService, prodService, numberPipe, addOnQuoService, pageDataService, cdf) {
        this.globalFun = globalFun;
        this.productService = productService;
        this.prodService = prodService;
        this.numberPipe = numberPipe;
        this.addOnQuoService = addOnQuoService;
        this.pageDataService = pageDataService;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.premiumAmt = '';
        this.sumInsured = '';
        this.changeCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.primary = 'primary';
        this.isMedical = false;
        this.isCross = false;
        this.planOption = 'basic';
        this.unsubscribe = [];
        this.planOptionOption = [
            {
                code: 'basic', value: 'Basic Plan'
            },
            {
                code: 'special', value: 'Special Plan'
            },
        ];
        this.option1 = "Digital Source Place";
        this.option2 = "Digital Destination Place";
        this.parentData = {};
        this.addOnsData = {};
        this.crossPercent = {
            "T-004": 0.35,
            "T-003": 0.60,
            "T-002": 0.85,
            "T-001": 1,
        };
        this.isCrossExist = false;
        this.isMedicalExist = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.optionId = this.optionId ? this.optionId : this.resourcesId;
            this.parentData = this.getParnet();
            let medID = this.product.addOns.find(x => x.code == "MED EXP");
            let crossID = this.product.addOns.find(x => x.code == "CROSSBRDR");
            let postData = {
                quotationNo: this.resourcesId,
                addOnIds: [],
                optionalKey: this.optionId
            };
            if (medID) {
                postData.addOnIds.push(medID.id);
            }
            if (crossID) {
                postData.addOnIds.push(crossID.id);
            }
            let results = yield this.addOnQuoService.getAllById(postData).toPromise();
            // console.log("RESULT", results);
            if (medID) {
                let response = results.find(x => x.addonId == medID.id);
                if (response) {
                    this.isMedicalExist = true;
                    this.isMedical = true;
                    this.planOption = response.option;
                    this.toggleChange('medical', true);
                }
            }
            if (crossID) {
                let response2 = results.find(x => x.addonId == crossID.id);
                // console.log("response2", response2);
                if (response2) {
                    this.isCrossExist = true;
                    this.isCross = true;
                    this.startDate = moment__WEBPACK_IMPORTED_MODULE_2__(response2.startDate).format('YYYY-MM-DD');
                    this.endDate = moment__WEBPACK_IMPORTED_MODULE_2__(response2.endDate).format('YYYY-MM-DD');
                    this.toggleChange('cross', true);
                }
            }
            // here detect change
            this.cdf.detectChanges();
        });
    }
    getParnet(tableName = 'm_detail') {
        if ((0,src_app_core_is_json__WEBPACK_IMPORTED_MODULE_4__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = pageOrder.find(page => page.tableName == tableName);
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    toggleChange(type, isOld) {
        // console.log(type);
        if (type == 'medical') {
            if (isOld) {
                this.isMedical = isOld;
                this.caluMotorPremimun();
            }
            else {
                this.isMedical = !this.isMedical;
                this.caluMotorPremimun();
            }
            if (!this.isMedical) {
                this.medPremium = 0;
                this.caluMotorPremimun();
            }
            this.changePlan();
            // console.log(this.premium);
            this.cdf.detectChanges();
        }
        if (type == 'cross') {
            if (isOld) {
                this.isCross = isOld;
                this.calcuCross();
                this.caluMotorPremimun();
            }
            else {
                this.isCross = !this.isCross;
                this.calcuCross();
                this.caluMotorPremimun();
            }
            if (!this.isCross) {
                this.crossPremium = 0;
                // console.log("this.crossPremium", this.crossPremium);
                this.caluMotorPremimun();
            }
            this.cdf.detectChanges();
        }
    }
    changePlan() {
        if (this.planOption == 'basic') {
            this.medPremium = this.calcumotorMedical();
        }
        else {
            this.medPremium = this.calcumotorMedical();
        }
    }
    calcumotorMedical() {
        let fix = 0;
        if (this.planOption == 'basic') {
            fix = 20;
        }
        else {
            fix = 30;
        }
        return fix;
    }
    calcuCross() {
        let tempPre = 0;
        let addOnsData = this.globalFun.tempFormData['addon_1634010770155'];
        let medID = this.product.addOns.find(x => x.code == "MED EXP");
        let crossID = this.product.addOns.find(x => x.code == "CROSSBRDR");
        if (crossID) {
            addOnsData.forEach((element, index) => {
                // console.log(element);
                if (element.addonId == crossID.id)
                    addOnsData.splice(index, 1);
            });
        }
        if (medID) {
            addOnsData.forEach((element, index) => {
                // console.log(element);
                if (element.addonId == medID.id)
                    addOnsData.splice(index, 1);
            });
        }
        // console.log("addOnsData", addOnsData);
        for (let addon of addOnsData) {
            // if (this.addOnsData[addon.id].checked) {
            tempPre += this.globalFun.calculateDecimal(addon.premium || 0);
            // }
        }
        if (this.isMedical) {
            tempPre += this.medPremium;
        }
        let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : [];
        for (let cov of coverageData) {
            tempPre += this.globalFun.calculateDecimal(cov.premium || 0);
        }
        // let crossPre = tempPre * 0.15
        let currency = this.parentData ? this.parentData.m_currency : 'MMK';
        let excessAmt = 0;
        if (this.parentData) {
            let term = this.parentData['m_policy_term'];
            let percent = this.crossPercent[term] || 1;
            let excess = this.parentData['m_excess'];
            let vehicle = this.parentData['m_type_of_vehicle'];
            let purpose = this.parentData['m_purpose_of_use'];
            // console.log("EXCESS", excess, "vehicle", vehicle, "purpose", purpose);
            if (excess == "T-NILEX" && currency == "MMK") {
                if (vehicle == 'T-MCC' && purpose == 'T-PRI') {
                    excessAmt = 5000 * percent;
                }
                else if (vehicle == 'T-MCC' && purpose == 'T-COM') {
                    excessAmt = 10000 * percent;
                }
                else {
                    excessAmt = 50000 * percent;
                }
            }
            // else if (excess == 'T-STNDEX' && currency == "MMK") {
            //   excessAmt = 100000
            // }
            else if (excess == "TU-NILEX" && currency == "USD") {
                excessAmt = 25 * percent;
            }
            // else if (excess == "TU-STNDEX" && currency == "USD") {
            //   excessAmt = 100
            // }
        }
        // * percent
        // console.log("TEMP", tempPre, "excessAmt", excessAmt);
        let cross = ((tempPre + excessAmt) * 0.15);
        this.crossPremium = this.globalFun.calculateDecimal(cross || 0);
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.PREV });
    }
    nextPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const quoService = this.addOnQuoService;
            let medID = this.product.addOns.find(x => x.code == "MED EXP");
            let crossID = this.product.addOns.find(x => x.code == "CROSSBRDR");
            let postData = {
                quotationNo: this.resourcesId,
                addOnIds: [],
                optionalKey: this.optionId
            };
            if (medID) {
                postData.addOnIds.push(medID.id);
            }
            if (crossID) {
                postData.addOnIds.push(crossID.id);
            }
            let results = yield this.addOnQuoService.getAllById(postData).toPromise();
            // console.log("RESULT", results);
            if (medID) {
                let response = results.find(x => x.addonId == medID.id);
                if (response) {
                    if (!this.isMedical) {
                        if (medID)
                            quoService.deleteOne(medID.id, this.resourcesId, this.resourcesId).toPromise().then((res) => {
                                this.medPremium = 0;
                            });
                    }
                    if (this.isMedical) {
                        this.medPremium = typeof this.medPremium != "string" ? this.medPremium + "" : this.medPremium;
                        if (medID) {
                            let postData = {
                                addonId: medID.id,
                                quotationNo: this.resourcesId,
                                optionalKey: this.resourcesId,
                                premium: this.medPremium.replace(',', '').replace('MMK', '').replace('USD', ''),
                                option: this.planOption,
                                sumInsured: this.parentData.m_total_risk_si || 0,
                            };
                            let res = yield quoService.save(postData).toPromise();
                            if (this.globalFun.tempFormData['addon_1634010770155']) {
                                this.globalFun.tempFormData['addon_1634010770155'].push(postData);
                            }
                            else {
                                this.globalFun.tempFormData['addon_1634010770155'] = [postData];
                            }
                        }
                    }
                }
            }
            if (crossID) {
                let response2 = results.find(x => x.addonId == crossID.id);
                // console.log("response2", response2);
                if (response2) {
                    if (!this.isCross) {
                        if (crossID)
                            quoService.deleteOne(crossID.id, this.resourcesId, this.resourcesId).toPromise().then((res) => {
                                this.crossPremium = 0;
                            });
                    }
                    if (this.isCross) {
                        this.crossPremium = typeof this.crossPremium != "string" ? this.crossPremium + "" : this.crossPremium;
                        if (crossID) {
                            let postData = {
                                addonId: crossID.id,
                                quotationNo: this.resourcesId,
                                optionalKey: this.resourcesId,
                                premium: this.crossPremium.replace(',', '').replace('MMK', '').replace('USD', ''),
                                startDate: this.startDate,
                                endDate: this.endDate,
                                option: this.option1,
                                option2: this.option2,
                                sumInsured: this.parentData.m_total_risk_si || 0,
                            };
                            let res = yield quoService.save(postData).toPromise();
                            if (this.globalFun.tempFormData['addon_1634010770155']) {
                                this.globalFun.tempFormData['addon_1634010770155'].push(postData);
                            }
                            else {
                                this.globalFun.tempFormData['addon_1634010770155'] = [postData];
                            }
                        }
                    }
                }
            }
            yield this.savePremimun();
        });
    }
    savePremimun() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let currency = this.parentData ? this.parentData.m_currency : 'MMK';
            let premiumAmt = yield this.caluMotorPremimun();
            let premiumAmtView = (yield this.numberPipe.transform(premiumAmt || 0, "1.2-2")) + " " + currency.toUpperCase();
            let inception = '';
            let postData = {
                "premium": Number(premiumAmt || 0) + "",
                "premiumView": premiumAmtView,
                "resourceId": this.resourcesId,
                "type": this.prodService.viewType,
                // "sumInsured":(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                // "sumInsuredView":this.sumInsured,
            };
            this.pageDataService.updatePremimun(postData).toPromise().then((res) => {
                if (res) {
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT });
                }
            });
        });
    }
    caluMotorPremimun() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let tempPre = 0;
            let tempPre2 = 0;
            let tempArray = this.globalFun.tempFormData['addon_1634010770155'] || [];
            let medID = this.product.addOns.find(x => x.code == "MED EXP");
            let crossID = this.product.addOns.find(x => x.code == "CROSSBRDR");
            if (this.isCrossExist) {
                if (crossID) {
                    tempArray.forEach((element, index) => {
                        // console.log(element);
                        if (element.addonId == crossID.id)
                            tempArray.splice(index, 1);
                    });
                }
            }
            if (this.isMedicalExist) {
                if (medID) {
                    tempArray.forEach((element, index) => {
                        // console.log(element);
                        if (element.addonId == medID.id)
                            tempArray.splice(index, 1);
                    });
                }
            }
            // console.log("tempArray", tempArray);
            for (let addon of tempArray) {
                tempPre += this.globalFun.calculateDecimal(addon.premium || 0);
                // console.log("addOnPremium", this.globalFun.calculateDecimal(addon.premium));
            }
            let coverageData = this.globalFun.tempFormData['coverage_1634010995936'] ? this.globalFun.tempFormData['coverage_1634010995936'] : [];
            for (let cov of coverageData) {
                // console.log("covPremium", this.globalFun.calculateDecimal(cov.premium));
                tempPre += this.globalFun.calculateDecimal(cov.premium || 0);
            }
            if (this.isMedical) {
                // console.log("isMedical", this.isMedical);
                tempPre += this.globalFun.calculateDecimal(this.medPremium || 0);
            }
            // console.log("TEMPPRE", tempPre);
            let currency = this.parentData ? this.parentData.m_currency : 'MMK';
            let discount = 0;
            let discount2 = 0;
            // console.log("PARENT", this.parentData);
            if (this.parentData) {
                let excess = this.parentData['m_excess'];
                let excess_discount = this.parentData['m_excess_discount'];
                let vehicle = this.parentData['m_type_of_vehicle'];
                let purpose = this.parentData['m_purpose_of_use'];
                let term = this.parentData['m_policy_term'];
                // console.log("Policy-TERM", term);
                let percent = this.crossPercent[term] || 1;
                // console.log("TERM-Percent", percent);
                // console.log(excess, excess_discount);
                if (excess == "T-NILEX" && currency == "MMK") {
                    if (vehicle == 'T-MCC' && purpose == 'T-PRI') {
                        discount = -(5000 * percent);
                        discount2 = -(5000 * percent);
                    }
                    else if (vehicle == 'T-MCC' && purpose == 'T-COM') {
                        discount = -(10000 * percent);
                        discount2 = -(10000 * percent);
                    }
                    else {
                        discount = -(50000 * percent);
                        discount2 = -(50000 * percent);
                    }
                }
                else if (excess == "TU-NILEX" && currency == "USD") {
                    discount = -(25 * percent);
                    discount2 = -(25 * percent);
                }
                // else if (excess == "TU-STNDEX" && currency == "USD") {
                //   discount = -100
                // }
                // else if (excess == 'T-STNDEX' && currency == "MMK") {
                //   discount = -100000
                // }
                else if (excess == "T-ED" && currency == "MMK") {
                    if (excess_discount == "T-EXD1") {
                        discount = 50000;
                        discount2 = 50000;
                    }
                    else if (excess_discount == "T-EXD2") {
                        discount = 70000;
                        discount2 = 70000;
                    }
                    else if (excess_discount == "T-EXD3") {
                        discount = 100000;
                        discount2 = 100000;
                    }
                }
            }
            // console.log("discount", discount);
            let stumd = currency == "MMK" ? 100 : 0.05;
            // console.log(" Number(this.crossPremium || 0)", Number(this.crossPremium || 0));
            // console.log("TOTAL+CROSS", (tempPre + Number(this.crossPremium || 0)));
            let preAMT = ((tempPre + Number(this.crossPremium || 0)) - discount);
            let preAMT2 = ((tempPre + Number(this.crossPremium || 0)) - discount2);
            // console.log("Premium-Cross-Discount/New Amount", preAMT, preAMT2);
            // preAMT = (preAMT * percent) + stumd
            preAMT = (preAMT) + stumd;
            preAMT2 = (preAMT2);
            // console.log("TOTAL-Premium-Result/New Amount", preAMT, preAMT2);
            this.premiumAmt = this.numberPipe.transform(preAMT, "1.2-2") + " " + currency.toUpperCase();
            this.globalFun.paPremiumResult.next(this.premiumAmt);
            return preAMT;
        });
    }
};
MotorAddonComponent.ctorParameters = () => [
    { type: src_app_core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_6__.AddOnQuoService },
    { type: _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_5__.PageDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef }
];
MotorAddonComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    optionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    sumInsured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    changeCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
MotorAddonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-motor-addon',
        template: _motor_addon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_FORMATS, useValue: src_app_core_is_json__WEBPACK_IMPORTED_MODULE_4__.MY_FORMATS },
        ],
        styles: [_motor_addon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MotorAddonComponent);



/***/ }),

/***/ 51430:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page-policy/simple-page-policy.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplePagePolicyComponent": () => (/* binding */ SimplePagePolicyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _simple_page_policy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-page-policy.component.html?ngResource */ 53123);
/* harmony import */ var _simple_page_policy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-page-policy.component.scss?ngResource */ 18609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/auth */ 90089);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_metronic/core */ 15818);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 36565);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 90278);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _simple_page_models_services_health_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../simple-page/models&services/health-product.service */ 32707);
/* harmony import */ var _health_quo_models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../health-quo/models&services/health-payment.service */ 54160);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/is-json */ 88757);
























let SimplePagePolicyComponent = class SimplePagePolicyComponent {
    constructor(fb, prodService, healthService, alertService, healthPayService, auth, globalFun, coverageQuoService, addOnQuoService, numberPipe, cdf) {
        this.fb = fb;
        this.prodService = prodService;
        this.healthService = healthService;
        this.alertService = alertService;
        this.healthPayService = healthPayService;
        this.auth = auth;
        this.globalFun = globalFun;
        this.coverageQuoService = coverageQuoService;
        this.addOnQuoService = addOnQuoService;
        this.numberPipe = numberPipe;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.toMinDate = null;
        this.fromMinDate = null;
        this.toMaxDate = null;
        this.fromMaxDate = null;
        this.dobMinDate = null;
        this.dobMaxDate = null;
        this.options = [];
        this.options2 = [];
        this.addOns = {};
        this.options3 = [];
        this.options4 = [];
        this.optionArray = [];
        this.tempArray = [];
        this.totalResult = {
            unit: 0,
            premium: 0,
        };
        this.policyTerm = {
            "lump": "Lump Sum",
            "semi_annually": "Semi-Annually"
        };
        this.totalP = 0;
        this.currentAge = 0;
        this.dob = "";
        this.totalL = 0;
        this.currencyType = "MMK";
        this.unsub = [];
        this.staticForm = this.fb.group({
            insuranceStartDate: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            insuranceEndDate: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            dateOfBirth: [{ value: null, disabled: true },],
            basicCoverId: [{ value: 'Health Insurance', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            paymentFrequency: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            sumInsuredMainCover: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            medicalCardNo: [{ value: null, disabled: true }],
        });
        this.options3 = Array.from({ length: 10 }, (_, i) => i + 1);
    }
    ngOnDestroy() {
        this.unsub.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
                if (this.currencyType != res) {
                    this.currencyType = res;
                }
            });
            this.refID = this.prodService.referenceID;
            if (!this.refID) {
                this.alertService.activate("This page cann't to show because there is no health product detail quotation data.", "Warning");
            }
            this.options = this.product.coverages;
            this.options2 = this.product.addOns;
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(5, `days`);
            this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            // let dobMaxDate = moment().subtract(6, `years`)
            // this.dobMaxDate = { year: parseInt(dobMaxDate.format('YYYY')), month: parseInt(dobMaxDate.format('M')), day: parseInt(dobMaxDate.format('D')) };
            // let dobMinDate = moment().subtract(75, `years`)
            // this.dobMinDate = { year: parseInt(dobMinDate.format('YYYY')), month: parseInt(dobMinDate.format('M')), day: parseInt(dobMinDate.format('D')) };
            this.parentData = this.getParent();
            this.dob = this.parentData['date_of_birth'];
            this.currentAge = Math.ceil(moment__WEBPACK_IMPORTED_MODULE_2__().diff(this.dob, 'years', true));
            this.getOldData();
        });
    }
    getParent() {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_14__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            // console.log("pageUI",pageUI);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            let parent = pageOrder.find(page => page.tableName == "life_insured_health");
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    get controls() {
        return this.staticForm.controls;
    }
    // helpers for View
    isControlValid(controlName, group) {
        const control = group.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName, group) {
        const control = group.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName, group) {
        const control = group.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName, group) {
        const control = group.controls[controlName];
        return control.dirty || control.touched;
    }
    nextPage() {
        if (this.editId) {
            this.saveData(this.editId);
        }
        else {
            this.saveData();
        }
        // this.actionEvent.emit({ type: StaticActionType.NEXT })
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.PREV });
    }
    getOldData() {
        // let dataget = false
        if (this.refID) {
            let resId = this.refID;
            if (!resId)
                return false;
            if (this.editData.id) {
                // console.log(this.editData);
                let resId = this.resourcesId;
                this.healthService.getOne(resId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)((res) => {
                    if (!res) {
                        return this.healthService.getOne(this.refID);
                    }
                    else
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(res);
                })).toPromise().then((res) => {
                    if (res) {
                        this.oldData = Object.assign(Object.assign({}, res), { id: null });
                        this.editId = res.resourceId == this.resourcesId ? res.id : null;
                        this.getQuoData(res.resourceId != this.resourcesId);
                        this.getAddOn(true);
                        this.reloadOldValueForm();
                    }
                });
            }
            else {
                this.healthService.getOne(resId).toPromise().then((res) => {
                    if (res) {
                        this.oldData = Object.assign(Object.assign({}, res), { id: null });
                        this.editId = resId == this.resourcesId ? res.id : null;
                        this.getQuoData(true);
                        this.getAddOn(true);
                        this.reloadOldValueForm();
                    }
                });
            }
        }
    }
    saveData(id) {
        const formValue = this.staticForm.getRawValue();
        let coverd = this.product.coverages.find(x => x.code == formValue.basicCoverId);
        if (!coverd) {
            this.alertService.activate("This page cann't to save because there is not match coverage in product detail. Please configuration the product detail", "Warning");
            return false;
        }
        let tempPre = this.globalFun.calculateDecimal(this.totalP / 12) + this.totalL;
        this.premiumAmt = this.numberPipe.transform(tempPre, "1.2-2") + " MMK / month";
        this.globalFun.paPremiumResult.next(this.premiumAmt);
        let postData = {
            basicCoverId: formValue.basicCoverId,
            id: id || null,
            insuranceEndDate: formValue.insuranceEndDate,
            insuranceStartDate: formValue.insuranceStartDate,
            medicalCardNo: formValue.medicalCardNo,
            paymentFrequency: formValue.paymentFrequency,
            dateOfBirth: this.dob,
            resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId || 1,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                // sumInsuredView:this.sumInsured,
                productId: this.prodService.createingProd.id,
                productCode: this.prodService.createingProd.code,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                // status: ,
                currency: this.currencyType,
                type: this.prodService.type
            },
            resourceId: this.resourcesId,
            sumInsuredMainCover: formValue.sumInsuredMainCover,
        };
        // console.log(postData);
        if (!id) {
            this.healthService.save(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.resourcesId = res.resourceId;
                    this.saveCoverAddon();
                    // this.globalFun.tempFormData[HealthpageID] = 
                    this.saveSchdule().toPromise().then(res => { }).catch(e => e);
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_13__.HealthPageID] = Object.assign(Object.assign({ id: res.id }, postData), { addOns: this.addOns });
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT, data: { res } });
                }
            }).catch((e) => e);
        }
        else {
            this.healthService.updateNoID(postData).toPromise().then((res) => {
                if (res) {
                    // this.globalFun.tempFormData[HealthPageID] = { id: res.id, ...postData }
                    this.editId = res.id;
                    this.saveCoverAddon();
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_13__.HealthPageID] = Object.assign(Object.assign({ id: res.id }, postData), { addOns: this.addOns });
                    //.toPromise().then((result) => result)
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_8__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
    }
    getQuoData(isRef = false) {
        let callId = isRef ? this.refID : this.resourcesId;
        this.healthPayService.getMany(callId).toPromise().then((res) => {
            if (res) {
                this.optionArray = res;
                this.totalResult = {
                    unit: 0,
                    premium: 0,
                };
                this.totalP = 0;
                this.totalL = 0;
                this.optionArray.forEach(x => {
                    this.totalP += x.premium;
                    this.totalL += x.levy;
                    this.totalResult.unit += x.sumInsured;
                    this.totalResult.premium += x.premium;
                });
                // console.log(this.totalResult, "Total");
                this.optionArray = this.optionArray.sort((a, b) => (a.coverage > b.coverage ? 1 : -1));
                this.tempArray = this.optionArray.filter((thing, index, self) => index === self.findIndex((t) => (t.coverage === thing.coverage)));
                this.cdf.detectChanges();
            }
        });
    }
    reloadOldValueForm() {
        this.staticForm.patchValue({
            insuranceStartDate: this.oldData.insuranceStartDate,
            insuranceEndDate: this.oldData.insuranceEndDate,
            dateOfBirth: this.oldData.dateOfBirth,
            basicCoverId: this.oldData.basicCoverId,
            paymentFrequency: this.oldData.paymentFrequency,
            sumInsuredMainCover: this.oldData.sumInsuredMainCover,
            medicalCardNo: this.oldData.medicalCardNo,
        });
    }
    saveCoverage() {
        let basicCoverId = this.staticForm.controls.basicCoverId.value;
        let value = this.staticForm.controls.sumInsuredMainCover.value;
        let coverd = this.product.coverages.find(x => x.code == basicCoverId);
        if (coverd) {
            let postData = {
                coverageId: coverd.id,
                quotationNo: this.resourcesId,
                optionalKey: this.resourcesId,
                sumInsured: value,
                unit: null,
                premium: null,
            };
            return this.coverageQuoService.deleteAll(this.resourcesId, this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)((x) => {
                // console.log(x, "cov");
                return this.coverageQuoService.save(postData);
            }));
            // .toPromise().then(res => {
            //   if (res) {
            //   }
            // })
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }
    getAddOn(dataget = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (this.resourcesId || this.refID) {
                let callAgain = true;
                let resId = dataget ? this.refID : (this.resourcesId || this.refID);
                if (!resId)
                    return false;
                for (const item of this.product.addOns) {
                    let response = {};
                    try {
                        response = yield this.addOnQuoService.getOne(item.id, resId, resId).toPromise();
                    }
                    catch (error) {
                    }
                    if (response) {
                        callAgain = false;
                        this.addOns[item.id + 'opt'] = response.sumInsured ? true : false;
                        this.addOns[item.id + 'value'] = response.sumInsured;
                    }
                    else {
                        this.addOns[item.id + 'opt'] = false;
                        this.addOns[item.id + 'value'] = null;
                    }
                }
                // if (callAgain && resId != this.refID && !dataget) {
                //   this.getAddOn(true)
                // } else {
                // this.cdf.detectChanges()
                // }
            }
        });
    }
    saveCoverAddon() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveCoverage().toPromise();
            yield this.saveAddOn().toPromise();
            // return forkJoin(this.saveCoverage(), this.saveAddOn())
        });
    }
    saveSchdule() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.forkJoin)(this.optionArray.map((x) => {
            let postData = {
                "paymentTerm": x.paymentTerm,
                "plan": x.plan,
                "premium": x.premium,
                "levy": x.levy,
                "coverage": x.coverage,
                "sumInsured": x.sumInsured,
                "resourceId": this.resourcesId,
                "total": x.total,
                "resourceData": {
                    "agentId": this.auth.currentUserValue.id || 1,
                    "customerId": this.prodService.creatingCustomer.customerId || 1,
                    "policyNumber": null,
                    "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                    "premiumView": this.premiumAmt,
                    // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                    // sumInsuredView:this.sumInsured,
                    "productId": this.product.id,
                    "productCode": this.product.code,
                    "quotationId": this.prodService.referenceID,
                    "type": this.prodService.type,
                    leadId: this.prodService.creatingLeadId,
                    currency: this.currencyType,
                },
            };
            return this.healthPayService.save(postData);
        }));
    }
    saveAddOn() {
        return this.addOnQuoService.deleteAll(this.resourcesId, this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mergeMap)((x) => {
            // return this.coverageQuoService.save(postData)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.forkJoin)(this.options2.map(option => {
                if (this.addOns[option.id + 'opt']) {
                    let postData = {
                        addonId: option.id,
                        optionalKey: this.resourcesId,
                        quotationNo: this.resourcesId,
                        sumInsured: this.addOns[option.id + 'value'],
                        unit: null,
                        premium: null,
                    };
                    return this.addOnQuoService.save(postData);
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
                }
            }));
        }));
    }
};
SimplePagePolicyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_7__.ProductDataService },
    { type: _simple_page_models_services_health_product_service__WEBPACK_IMPORTED_MODULE_11__.HealthProductService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_10__.AlertService },
    { type: _health_quo_models_services_health_payment_service__WEBPACK_IMPORTED_MODULE_12__.HealthPaymentService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_9__.CoverageQuoService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_6__.AddOnQuoService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef }
];
SimplePagePolicyComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    sumInsured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }]
};
SimplePagePolicyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-simple-page-policy',
        template: _simple_page_policy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.CustomDateParserFormatter },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_14__.MY_FORMATS },
        ],
        styles: [_simple_page_policy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SimplePagePolicyComponent);



/***/ }),

/***/ 94507:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page/simple-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplePageComponent": () => (/* binding */ SimplePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _simple_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-page.component.html?ngResource */ 41900);
/* harmony import */ var _simple_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-page.component.scss?ngResource */ 18712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _core_valid_all_feild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/valid-all-feild */ 41018);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/auth */ 90089);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_metronic/core */ 15818);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../products/services/add-on-quo.service */ 36565);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _models_services_health_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models&services/health-product.service */ 32707);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../products/services/coverage-quo.service */ 90278);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material-moment-adapter */ 46561);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/is-json */ 88757);























let SimplePageComponent = class SimplePageComponent {
    constructor(fb, prodService, auth, healthService, globalFun, addOnQuoService, coverageQuoService, alertService, cdf) {
        this.fb = fb;
        this.prodService = prodService;
        this.auth = auth;
        this.healthService = healthService;
        this.globalFun = globalFun;
        this.addOnQuoService = addOnQuoService;
        this.coverageQuoService = coverageQuoService;
        this.alertService = alertService;
        this.cdf = cdf;
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.toMinDate = null;
        this.fromMinDate = null;
        this.toMaxDate = null;
        this.fromMaxDate = null;
        this.dobMinDate = null;
        this.dobMaxDate = null;
        this.options = [];
        this.options2 = [];
        this.addOns = {};
        this.options3 = [];
        this.options4 = [];
        this.currentAge = 0;
        this.dob = "";
        this.currencyType = "MMK";
        this.unsub = [];
        this.addValid = false;
        this.staticForm = this.fb.group({
            insuranceStartDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            insuranceEndDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            dateOfBirth: [null],
            basicCoverId: ['HEALTH', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            paymentFrequency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            sumInsuredMainCover: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
            medicalCardNo: [null],
        });
        this.options3 = Array.from({ length: 10 }, (_, i) => i + 1);
    }
    ngOnDestroy() {
        this.unsub.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
                if (this.currencyType != res) {
                    this.currencyType = res;
                }
            });
            this.options = this.product.coverages;
            this.options2 = this.product.addOns;
            this.refID = this.prodService.referenceID;
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(5, `days`);
            this.fromMinDate = toDate.format('YYYY-MM-DD');
            // this.fromMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.toMinDate = toDate.format('YYYY-MM-DD');
            // this.toMinDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            // let dobMaxDate = moment().subtract(6, `years`)
            // this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD')
            // this.dobMaxDate = { year: parseInt(dobMaxDate.format('YYYY')), month: parseInt(dobMaxDate.format('M')), day: parseInt(dobMaxDate.format('D')) };
            // let dobMinDate = moment().subtract(75, `years`)
            // this.dobMinDate = dobMinDate.format('YYYY-MM-DD')
            // this.dobMinDate = { year: parseInt(dobMinDate.format('YYYY')), month: parseInt(dobMinDate.format('M')), day: parseInt(dobMinDate.format('D')) };
            // if (this.prodService.editData || this.refID)
            this.parentData = this.getParent();
            if (!this.parentData) {
                this.alertService.activate("This page cann't to save because there is no parent Data. Please configuration the product detail", "Warning");
            }
            else {
                this.dob = this.parentData['date_of_birth'];
                this.currentAge = Math.ceil(moment__WEBPACK_IMPORTED_MODULE_2__().diff(this.dob, 'years', true));
            }
            this.getOldData();
            // this.getAddOn()
            // for (const item of this.product.addOns) {
            //   let response: any = null;
            //   try {
            //     if (this.editData) {
            //       response = await this.addOnQuoService.getOne(item.id, this.editData.id).toPromise()
            //     }
            //   } catch (error) {
            //     response = null
            //   }
            //   this.addOns[item.id + 'opt'] = response ? response.sumInsured || 0 : 0
            // }
        });
    }
    radioChange(event) {
        if (this.staticForm.value.basicCoverId == "CRTILLNESS") {
            if (this.currentAge > 60 && this.staticForm.value.sumInsuredMainCover > 6) {
                this.alertService.activate("Medical check up is required", "Warning");
            }
            if (this.addValid) {
                this.addValid = false;
                this.staticForm.get('medicalCardNo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]);
                this.staticForm.get('medicalCardNo').updateValueAndValidity();
            }
        }
        else {
            this.staticForm.get('medicalCardNo').clearValidators();
            this.staticForm.get('medicalCardNo').updateValueAndValidity();
            if (this.currentAge < 60 && this.staticForm.value.sumInsuredMainCover > 6) {
                this.addValid = true;
            }
        }
    }
    getParent() {
        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_14__.IsJsonString)(this.product.config)) {
            let pageUI = JSON.parse(this.product.config);
            // console.log("pageUI",pageUI);
            let pageOrder = this.prodService.type != 'quotation' ? pageUI.application || [] : pageUI.quotation || [];
            // console.log(pageOrder);
            let parent = pageOrder.find(page => page.tableName == "life_insured_health");
            console.log(this.globalFun.tempFormData, parent);
            if (parent) {
                return this.globalFun.tempFormData[parent.tableName + parent.id] || null;
            }
            return null;
        }
        return null;
    }
    // radioChange($event: MatRadioChange) {
    //   if ($event.value === 'Health Insurance') {
    //     let dobMaxDate = moment().subtract(6, `years`)
    //     this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD')
    //     let dobMinDate = moment().subtract(75, `years`)
    //     this.dobMinDate = dobMinDate.format('YYYY-MM-DD')
    //   } else {
    //     let dobMaxDate = moment().subtract(6, `years`)
    //     this.dobMaxDate = dobMaxDate.format('YYYY-MM-DD')
    //     let dobMinDate = moment().subtract(60, `years`)
    //     this.dobMinDate = dobMinDate.format('YYYY-MM-DD')
    //   }
    //   this.cdf.detectChanges()
    // }
    doValid() {
        let value = this.staticForm.controls['insuranceStartDate'].value;
        if (value) {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.staticForm.controls['insuranceStartDate'].value).add(1, 'years').subtract(1, "days");
            // this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
            this.toMaxDate = toDate.format('YYYY-MM-DD');
            this.staticForm.controls['insuranceEndDate'].setValue(toDate.format('YYYY-MM-DD'));
        }
    }
    getUnitOption() {
        let leng = this.controls.sumInsuredMainCover.value;
        if (this.staticForm.value.basicCoverId == "CRTILLNESS") {
            if (this.currentAge > 50 && this.staticForm.value.sumInsuredMainCover > 4) {
                this.alertService.activate("Medical check up is required", "Warning");
            }
        }
        if (leng != this.options4.length) {
            this.options4 = Array.from({ length: leng }, (_, i) => i + 1);
            for (let addon of this.options2) {
                this.addOns[addon.id + 'value'] = leng;
            }
        }
    }
    get controls() {
        return this.staticForm.controls;
    }
    // helpers for View
    isControlValid(controlName, group) {
        const control = group.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName, group) {
        const control = group.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName, group) {
        const control = group.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName, group) {
        const control = group.controls[controlName];
        return control.dirty || control.touched;
    }
    nextPage() {
        if (this.staticForm.invalid) {
            (0,_core_valid_all_feild__WEBPACK_IMPORTED_MODULE_4__.validateAllFields)(this.staticForm);
            return true;
        }
        else {
            if (this.editId) {
                this.saveData(this.editId);
            }
            else {
                this.saveData();
            }
        }
    }
    backPage() {
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.PREV });
    }
    saveData(id) {
        if (this.staticForm.invalid)
            return false;
        const formValue = this.staticForm.value;
        let coverd = this.product.coverages.find(x => x.code == formValue.basicCoverId);
        if (!coverd) {
            this.alertService.activate("This page cann't to save because there is not match coverage in product detail. Please configuration the product detail", "Warning");
            return false;
        }
        let postData = {
            basicCoverId: formValue.basicCoverId,
            id: id || null,
            insuranceEndDate: formValue.insuranceEndDate,
            insuranceStartDate: formValue.insuranceStartDate,
            medicalCardNo: formValue.medicalCardNo,
            paymentFrequency: formValue.paymentFrequency,
            dateOfBirth: this.dob,
            resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId || 1,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                // sumInsured:(Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                // sumInsuredView:this.sumInsured,
                policyInceptionDate: moment__WEBPACK_IMPORTED_MODULE_2__(formValue.insuranceStartDate).format("YYYY-MM-DD"),
                policyExpireDate: moment__WEBPACK_IMPORTED_MODULE_2__(formValue.insuranceEndDate).format("YYYY-MM-DD"),
                productId: this.prodService.createingProd.id,
                productCode: this.prodService.createingProd.code,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                currency: this.currencyType,
                type: this.prodService.type
            },
            resourceId: this.resourcesId,
            sumInsuredMainCover: formValue.sumInsuredMainCover,
        };
        // console.log(postData);
        if (!id) {
            this.healthService.save(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.resourcesId = res.resourceId;
                    this.saveCoverAddon();
                    // console.log(postData);
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_12__.HealthPageID] = Object.assign(Object.assign({ id: res.id }, postData), { addOns: this.addOns });
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
        else {
            this.healthService.updateNoID(postData).toPromise().then((res) => {
                if (res) {
                    this.editId = res.id;
                    this.saveCoverAddon();
                    this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_12__.HealthPageID] = Object.assign(Object.assign({ id: res.id }, postData), { addOns: this.addOns });
                    this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_9__.StaticActionType.NEXT, data: Object.assign({}, res) });
                }
            }).catch((e) => e);
        }
    }
    saveCoverAddon() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveCoverage().toPromise();
            yield this.saveAddOn().toPromise();
            // return forkJoin(this.saveCoverage(), this.saveAddOn())
        });
    }
    // .pipe(mergeMap(resources => {
    //   return resources
    // }))
    getOldData(dataget = false) {
        // let dataget = false
        if (this.resourcesId || this.refID) {
            let resId = dataget ? this.refID : (this.resourcesId || this.refID);
            if (!resId)
                return false;
            this.healthService.getOne(resId).toPromise().then((res) => {
                // dataget = true
                if (res) {
                    this.oldData = Object.assign(Object.assign({}, res), { id: null });
                    this.editId = resId == this.resourcesId ? res.id : null;
                    this.getAddOn();
                    this.reloadOldValueForm();
                }
                else {
                    if (!dataget && resId != this.refID) {
                        this.getAddOn(true);
                        this.getOldData(true);
                    }
                }
            });
        }
    }
    reloadOldValueForm() {
        this.staticForm.patchValue({
            insuranceStartDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.insuranceStartDate),
            insuranceEndDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.insuranceEndDate),
            dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_2__(this.oldData.dateOfBirth),
            basicCoverId: this.oldData.basicCoverId,
            paymentFrequency: this.oldData.paymentFrequency,
            sumInsuredMainCover: this.oldData.sumInsuredMainCover,
            medicalCardNo: this.oldData.medicalCardNo,
        });
        this.getUnitOption();
    }
    saveCoverage() {
        let basicCoverId = this.staticForm.controls.basicCoverId.value;
        let value = this.staticForm.controls.sumInsuredMainCover.value;
        let coverd = this.product.coverages.find(x => x.code == basicCoverId);
        if (coverd) {
            let postData = {
                coverageId: coverd.id,
                quotationNo: this.resourcesId,
                optionalKey: this.resourcesId,
                sumInsured: value,
                unit: null,
                premium: null,
            };
            return this.coverageQuoService.deleteAll(this.resourcesId, this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)((x) => {
                // console.log(x, "cov");
                return this.coverageQuoService.save(postData);
            }));
            // .toPromise().then(res => {
            //   if (res) {
            //   }
            // })
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }
    getAddOn(dataget = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (this.resourcesId || this.refID) {
                let callAgain = true;
                let resId = dataget ? this.refID : (this.resourcesId || this.refID);
                if (!resId)
                    return false;
                for (const item of this.product.addOns) {
                    let response = {};
                    try {
                        response = yield this.addOnQuoService.getOne(item.id, resId, resId).toPromise();
                    }
                    catch (error) {
                    }
                    if (response) {
                        callAgain = false;
                        this.addOns[item.id + 'opt'] = response.sumInsured ? true : false;
                        this.addOns[item.id + 'value'] = response.sumInsured;
                    }
                    else {
                        this.addOns[item.id + 'opt'] = false;
                        this.addOns[item.id + 'value'] = null;
                    }
                }
                // if (callAgain && resId != this.refID && !dataget) {
                //   this.getAddOn(true)
                // } else {
                this.cdf.detectChanges();
                // }
            }
        });
    }
    saveAddOn() {
        const formValue = this.staticForm.value;
        return this.addOnQuoService.deleteAll(this.resourcesId, this.resourcesId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.mergeMap)((x) => {
            // return this.coverageQuoService.save(postData)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.forkJoin)(this.options2.map(option => {
                if (formValue.basicCoverId == "HEALTH") {
                    if (this.addOns[option.id + 'opt']) {
                        let postData = {
                            addonId: option.id,
                            quotationNo: this.resourcesId,
                            optionalKey: this.resourcesId,
                            sumInsured: this.addOns[option.id + 'value'],
                            unit: null,
                            premium: null,
                        };
                        return this.addOnQuoService.save(postData);
                    }
                    else {
                        this.addOns[option.id + 'opt'] = false;
                        this.addOns[option.id + 'value'] = 0;
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
                    }
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
                }
            }));
        }));
    }
};
SimplePageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_8__.ProductDataService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _models_services_health_product_service__WEBPACK_IMPORTED_MODULE_10__.HealthProductService },
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_3__.GlobalFunctionService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__.AddOnQuoService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_11__.CoverageQuoService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_13__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef }
];
SimplePageComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    sumInsured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }]
};
SimplePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-simple-page',
        template: _simple_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDateAdapter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_6__.CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbDateParserFormatter, useClass: _metronic_core__WEBPACK_IMPORTED_MODULE_6__.CustomDateParserFormatter },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_FORMATS, useValue: _core_is_json__WEBPACK_IMPORTED_MODULE_14__.MY_FORMATS },
        ],
        styles: [_simple_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SimplePageComponent);



/***/ }),

/***/ 54625:
/*!**************************************************************!*\
  !*** ./src/app/pages/static-pages/static-field.interface.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticActionType": () => (/* binding */ StaticActionType)
/* harmony export */ });
var StaticActionType;
(function (StaticActionType) {
    StaticActionType["NEXT"] = "next";
    StaticActionType["PREV"] = "prev";
})(StaticActionType || (StaticActionType = {}));


/***/ }),

/***/ 40526:
/*!**************************************************************!*\
  !*** ./src/app/pages/static-pages/static-pages.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPageDirective": () => (/* binding */ StaticPageDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addon-page/addon-page.component */ 33562);
/* harmony import */ var _coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage-page/coverage-page.component */ 88098);
/* harmony import */ var _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education-life/education-life.component */ 6229);
/* harmony import */ var _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endo-griph/endo-griph.component */ 42565);
/* harmony import */ var _endo_endo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endo/endo.component */ 8867);
/* harmony import */ var _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fire-risk/fire-risk.component */ 10056);
/* harmony import */ var _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-simple-page/fire-simple-page.component */ 57865);
/* harmony import */ var _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-quo/health-quo.component */ 478);
/* harmony import */ var _motor_addon_motor_addon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./motor-addon/motor-addon.component */ 53178);
/* harmony import */ var _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./simple-page-policy/simple-page-policy.component */ 51430);
/* harmony import */ var _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./simple-page/simple-page.component */ 94507);
/* harmony import */ var _travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./travel-page/travel-page.component */ 82176);














// import { STATIC_COMPONENT } from "./static-pages.data";
const STATIC_COMPONENT = {
    'addon_1634010770155': _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_0__.AddonPageComponent,
    'coverage_1634010995936': _coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_1__.CoveragePageComponent,
    'static_1634018514043': _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_10__.SimplePageComponent,
    'static_1635218894755': _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_7__.HealthQuoComponent,
    'static_1635309151504': _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_2__.EducationLifeComponent,
    // 'static_1635392848894' : EducationLifeGripComponent,
    'static_1635747288508': _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_9__.SimplePagePolicyComponent,
    'static_1641364737069': _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_6__.FirePageComponent,
    'static_1643116155828': _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_5__.FireRiskComponent,
    'static_1644896661652': _endo_endo_component__WEBPACK_IMPORTED_MODULE_4__.EndoComponent,
    'static_1644896804675': _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_3__.EndoGripComponent,
    'static_1648784270356': _travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_11__.TravelComponent,
    'static_1648784270432': _motor_addon_motor_addon_component__WEBPACK_IMPORTED_MODULE_8__.MotorAddonComponent
};
let StaticPageDirective = class StaticPageDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
        this.travelForm = [];
        this.eventOut = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    }
    ngOnInit() {
        this.reCreate();
    }
    reCreate() {
        this.container.clear();
        const component = this.resolver.resolveComponentFactory(STATIC_COMPONENT[this.compId]);
        this.component = this.container.createComponent(component);
        this.component.instance.product = this.product;
        this.component.instance.editData = this.editData;
        this.component.instance.resourcesId = this.resourcesId;
        this.component.instance.referenceID = this.referenceID;
        this.component.instance.premiumAmt = this.premiumAmt;
        this.component.instance.travelForm = this.travelForm;
        this.component.instance.actionEvent.subscribe((res) => {
            this.eventOut.emit(res);
        });
        // console.log(this.resourcesId);
    }
};
StaticPageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewContainerRef }
];
StaticPageDirective.propDecorators = {
    compId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    referenceID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    travelForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    eventOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output }]
};
StaticPageDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Directive)({
        selector: '[staticPage]'
    })
], StaticPageDirective);



/***/ }),

/***/ 83992:
/*!***********************************************************!*\
  !*** ./src/app/pages/static-pages/static-pages.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticPagesModule": () => (/* binding */ StaticPagesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coverage-page/coverage-page.component */ 88098);
/* harmony import */ var _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addon-page/addon-page.component */ 33562);
/* harmony import */ var _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page/simple-page.component */ 94507);
/* harmony import */ var _static_pages_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-pages.directive */ 40526);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 8425);
/* harmony import */ var _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health-quo/health-quo.component */ 478);
/* harmony import */ var _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education-life/education-life.component */ 6229);
/* harmony import */ var _education_life_griph_education_life_griph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education-life-griph/education-life-griph.component */ 39244);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simple-page-policy/simple-page-policy.component */ 51430);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _surrounding_building_surrounding_building_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./surrounding-building/surrounding-building.component */ 88205);
/* harmony import */ var _surrounding_building_surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./surrounding-building/surrounding-detail/surrounding-detail.component */ 89729);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calculated-building/calculated-building.component */ 55631);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ 29765);
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tables/tables.component */ 12425);
/* harmony import */ var _calculated_building_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calculated-building/add-calculated-building/add-calculated-building.component */ 53814);
/* harmony import */ var _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fire-simple-page/fire-simple-page.component */ 57865);
/* harmony import */ var _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fire-risk/fire-risk.component */ 10056);
/* harmony import */ var _fire_risk_risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fire-risk/risk-detail/risk-detail.component */ 47304);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-currency */ 74172);
/* harmony import */ var _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./endo-griph/endo-griph.component */ 42565);
/* harmony import */ var _endo_endo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./endo/endo.component */ 8867);
/* harmony import */ var _motor_addon_motor_addon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./motor-addon/motor-addon.component */ 53178);
/* harmony import */ var _travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./travel-page/travel-page.component */ 82176);
/* harmony import */ var _travel_page_travel_risk_detail_travel_risk_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./travel-page/travel-risk-detail/travel-risk-detail.component */ 5966);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../form-component/form-component.module */ 78798);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/menu */ 59421);
/* harmony import */ var src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/modules/languages/languages.modules */ 7181);






































// import { ChildComponent } from './common-list/child.component';
// //listings
// import {ListingsPagerComponent} from './pager/pager.component';
// import { CommonListingComponent,ListingPipe} from './common-list/common-list.component';
// import {ListingsLeadListComponent } from './listings/lead/listings-lead-list.component';


let StaticPagesModule = class StaticPagesModule {
};
StaticPagesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.NgModule)({
        declarations: [_coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_0__.CoveragePageComponent, _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_1__.AddonPageComponent, _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_2__.SimplePageComponent, _static_pages_directive__WEBPACK_IMPORTED_MODULE_3__.StaticPageDirective, _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_5__.HealthQuoComponent, _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_6__.EducationLifeComponent, _education_life_griph_education_life_griph_component__WEBPACK_IMPORTED_MODULE_7__.EducationLifeGripComponent, _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_8__.SimplePagePolicyComponent, _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_14__.FirePageComponent, _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_15__.FireRiskComponent, _surrounding_building_surrounding_building_component__WEBPACK_IMPORTED_MODULE_9__.SurroundingBuildingComponent, _surrounding_building_surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_10__.SurroundingDetailComponent, _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_11__.CalculatedBuildingComponent, _tables_tables_component__WEBPACK_IMPORTED_MODULE_12__.TablesComponent, _calculated_building_add_calculated_building_add_calculated_building_component__WEBPACK_IMPORTED_MODULE_13__.AddCalculatedBuildingComponent, _fire_risk_risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_16__.RiskDetailComponent, _endo_endo_component__WEBPACK_IMPORTED_MODULE_18__.EndoComponent, _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_17__.EndoGripComponent, _motor_addon_motor_addon_component__WEBPACK_IMPORTED_MODULE_19__.MotorAddonComponent, _travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_20__.TravelComponent, _travel_page_travel_risk_detail_travel_risk_detail_component__WEBPACK_IMPORTED_MODULE_21__.TravelRiskDetailComponent],
        exports: [_coverage_page_coverage_page_component__WEBPACK_IMPORTED_MODULE_0__.CoveragePageComponent, _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_1__.AddonPageComponent, _simple_page_simple_page_component__WEBPACK_IMPORTED_MODULE_2__.SimplePageComponent, _static_pages_directive__WEBPACK_IMPORTED_MODULE_3__.StaticPageDirective, _health_quo_health_quo_component__WEBPACK_IMPORTED_MODULE_5__.HealthQuoComponent, _education_life_education_life_component__WEBPACK_IMPORTED_MODULE_6__.EducationLifeComponent, _education_life_griph_education_life_griph_component__WEBPACK_IMPORTED_MODULE_7__.EducationLifeGripComponent, _simple_page_policy_simple_page_policy_component__WEBPACK_IMPORTED_MODULE_8__.SimplePagePolicyComponent, _surrounding_building_surrounding_building_component__WEBPACK_IMPORTED_MODULE_9__.SurroundingBuildingComponent, _fire_simple_page_fire_simple_page_component__WEBPACK_IMPORTED_MODULE_14__.FirePageComponent, _fire_risk_fire_risk_component__WEBPACK_IMPORTED_MODULE_15__.FireRiskComponent, _surrounding_building_surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_10__.SurroundingDetailComponent, _calculated_building_calculated_building_component__WEBPACK_IMPORTED_MODULE_11__.CalculatedBuildingComponent, _fire_risk_risk_detail_risk_detail_component__WEBPACK_IMPORTED_MODULE_16__.RiskDetailComponent, _endo_endo_component__WEBPACK_IMPORTED_MODULE_18__.EndoComponent, _endo_griph_endo_griph_component__WEBPACK_IMPORTED_MODULE_17__.EndoGripComponent, _motor_addon_motor_addon_component__WEBPACK_IMPORTED_MODULE_19__.MotorAddonComponent, _travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_20__.TravelComponent, _travel_page_travel_risk_detail_travel_risk_detail_component__WEBPACK_IMPORTED_MODULE_21__.TravelRiskDetailComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_4__.CRUDTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbModalModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbDatepickerModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_31__.NgSelectModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__.MatSlideToggleModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_33__.NgApexchartsModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_22__.InlineSVGModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_36__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatFormFieldModule,
            ngx_currency__WEBPACK_IMPORTED_MODULE_38__.NgxCurrencyModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_23__.FormComponentModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__.MatMenuModule,
            src_app_modules_languages_languages_modules__WEBPACK_IMPORTED_MODULE_24__.LanguageModule
        ]
    })
], StaticPagesModule);



/***/ }),

/***/ 52251:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/models&services/premium-rate-service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiumRateService": () => (/* binding */ PremiumRateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/biz.operation.service */ 38313);





const API_FIRE_PREMIUM_RATE = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fire/premium-rate`;
let PremiumRateService = class PremiumRateService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_FIRE_PREMIUM_RATE);
        this.httpClient = httpClient;
    }
    getPremiumRate(buildingClass, occupationOfBuilding, typeOfBuilding) {
        return this.httpClient.get(API_FIRE_PREMIUM_RATE + "?classOfBuilding=" + buildingClass + "&occupationOfBuilding=" + occupationOfBuilding + "&typeOfBuilding=" + typeOfBuilding);
    }
};
PremiumRateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
PremiumRateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PremiumRateService);



/***/ }),

/***/ 12376:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/models&services/surrounding-list.const.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SURROUNDING_COL": () => (/* binding */ SURROUNDING_COL),
/* harmony export */   "SurroundingDisplayCol": () => (/* binding */ SurroundingDisplayCol)
/* harmony export */ });
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_metronic/shared/crud-table/components/material-table-view/table-dto */ 34436);

const SURROUNDING_COL = [
    {
        title: "Building Description",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "description",
        isDate: true
    },
    {
        title: "Type of building",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "typeOfBuilding"
    },
    {
        title: "Occupation",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "occupation"
    },
    {
        title: "Class",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "class"
    },
    {
        title: "Premiun Rate",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.FEILD,
        field: "premiumRate"
    },
    {
        title: "Actions",
        type: _metronic_shared_crud_table_components_material_table_view_table_dto__WEBPACK_IMPORTED_MODULE_0__.COLTYPE.ACTION,
        field: "actions",
        btn: {
            edit: true,
            view: true
        }
    },
];
const SurroundingDisplayCol = [
    "description",
    "typeOfBuilding",
    "occupation",
    "class",
    "premiumRate"
];


/***/ }),

/***/ 88205:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-building.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurroundingBuildingComponent": () => (/* binding */ SurroundingBuildingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _surrounding_building_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surrounding-building.component.html?ngResource */ 48260);
/* harmony import */ var _surrounding_building_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surrounding-building.component.scss?ngResource */ 59275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models&services/surrounding-building.service */ 64703);
/* harmony import */ var _models_services_surrounding_list_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models&services/surrounding-list.const */ 12376);
/* harmony import */ var _surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./surrounding-detail/surrounding-detail.component */ 89729);










let SurroundingBuildingComponent = class SurroundingBuildingComponent {
    constructor(surroundingBuildingService, modalService, cdf, alertService) {
        this.surroundingBuildingService = surroundingBuildingService;
        this.modalService = modalService;
        this.cdf = cdf;
        this.alertService = alertService;
        this.riskId = 1;
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_models_services_surrounding_list_const__WEBPACK_IMPORTED_MODULE_5__.SURROUNDING_COL));
        this.displayedColumns = JSON.parse(JSON.stringify(_models_services_surrounding_list_const__WEBPACK_IMPORTED_MODULE_5__.SurroundingDisplayCol));
        this.isPopup = false;
        this.surrounding = [];
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.surroundingBuildingService.getByRiskId(this.riskId).toPromise().then((res) => {
            if (res) {
                this.surrounding = res;
                this.cdf.detectChanges();
            }
        });
    }
    add(type, data) {
        let modalRef;
        modalRef = this.modalService.open(_surrounding_detail_surrounding_detail_component__WEBPACK_IMPORTED_MODULE_6__.SurroundingDetailComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.riskId = this.riskId;
        modalRef.componentInstance.oldData = data;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                // console.log("RESSSS", res)
                if (res.type == "save") {
                    // this.surrounding=res.data
                    let oldVal = data ? data : { id: 0 };
                    let index = this.surrounding.findIndex(x => x.id == oldVal.id);
                    if (index < 0)
                        this.surrounding.push(res.data);
                    else
                        this.surrounding[index] = res.data;
                    this.cdf.detectChanges();
                }
            }
        });
    }
    onActionView(data, type) {
        // console.log("data", data, "type", type)
        if (type == 'delete') {
            this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
                if (result) {
                    this.surroundingBuildingService.delete(data.id).toPromise()
                        .then((res) => {
                        if (res) {
                            let index = this.surrounding.findIndex(x => x.id == data.id);
                            if (index >= 0) {
                                this.surrounding.splice(index, 1);
                                this.cdf.detectChanges();
                            }
                        }
                    });
                    this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                    });
                }
            });
        }
        else {
            this.add(type, data);
        }
    }
};
SurroundingBuildingComponent.ctorParameters = () => [
    { type: _models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_4__.SurroundingBuildingService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
SurroundingBuildingComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableViewComponent,] }],
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
SurroundingBuildingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-surrounding-building',
        template: _surrounding_building_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_surrounding_building_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SurroundingBuildingComponent);



/***/ }),

/***/ 89729:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-detail/surrounding-detail.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurroundingDetailComponent": () => (/* binding */ SurroundingDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _surrounding_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surrounding-detail.component.html?ngResource */ 1956);
/* harmony import */ var _surrounding_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surrounding-detail.component.scss?ngResource */ 72124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth */ 90089);
/* harmony import */ var src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/master-data/master-data.service */ 27670);
/* harmony import */ var _models_services_premium_rate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models&services/premium-rate-service */ 52251);
/* harmony import */ var _models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models&services/surrounding-building.service */ 64703);










let SurroundingDetailComponent = class SurroundingDetailComponent {
    constructor(modal, masterDataService, cdf, SurroundingBuildingService, auth, PremiumRateService) {
        this.modal = modal;
        this.masterDataService = masterDataService;
        this.cdf = cdf;
        this.SurroundingBuildingService = SurroundingBuildingService;
        this.auth = auth;
        this.PremiumRateService = PremiumRateService;
        this.typeOfBuildingOption = [];
        this.occupationOfBuildingOption = [];
        this.occupationOfBuildingOptions = [];
        this.buildingClassOption = [];
        this.premiumRateOption = [];
        this.type = 'create';
        this.riskId = '1';
    }
    ngOnInit() {
        if (this.type == 'create') {
            this.loadForm();
        }
        else {
            this.loadForm(this.oldData);
        }
        this.getBuildingClass();
        this.getBuildingType();
        this.getBuildingOccupation();
    }
    getBuildingClass() {
        this.masterDataService
            .getDataByType("BUILDING_CLASS")
            .toPromise()
            .then((res) => {
            //console.log(res);
            if (res) {
                this.buildingClassOption = res.map((x) => {
                    return { code: x.codeId, value: x.codeName };
                });
                //console.log(this.buildingClassOption);
                this.cdf.detectChanges();
            }
        });
    }
    getBuildingType() {
        this.masterDataService
            .getDataByType("TYPE_OF_BUILDING")
            .toPromise()
            .then((res) => {
            //console.log(res);
            if (res) {
                this.typeOfBuildingOption = res.map((x) => {
                    return { code: x.codeId, value: x.codeName };
                });
                //console.log(this.typeOfBuildingOption);
                this.cdf.detectChanges();
            }
        });
    }
    getBuildingOccupation() {
        this.masterDataService
            .getDataByType("OCCUPATION_OF_BUILDING")
            .toPromise()
            .then((res) => {
            if (res) {
                this.occupationOfBuildingOptions = res.map((x) => {
                    return { code: x.codeId, value: x.codeName, parent: x.parentId };
                });
                this.changeType('child');
                this.cdf.detectChanges();
            }
        });
    }
    getPremiumRate() {
        let buildingClass = this.surroundingdetailform.value.buildingClass;
        let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
        let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
        this.PremiumRateService.getPremiumRate(buildingClass, occupationOfBuilding, typeOfBuilding).toPromise().then((res) => {
            if (res) {
                this.surroundingdetailform.controls.premiumRate.setValue(res.premiumRate);
            }
        });
    }
    loadForm(oldData) {
        this.surroundingdetailform = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            buildingClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.buildingClass : "", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            buildingDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.buildingDescription : "", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            distanceToBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.distanceToBuilding : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            firePolicyRiskId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.riskId),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.id : ""),
            occupationOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.occupationOfBuilding : "", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            premiumRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.premiumRate : "", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            typeOfBuilding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(oldData ? oldData.typeOfBuilding : "", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
    }
    createSurrounding() {
        if (this.surroundingdetailform.invalid)
            return false;
        let data = this.surroundingdetailform.getRawValue();
        let postData = Object.assign(Object.assign({}, data), { createdBy: this.auth.currentUserValue.id });
        if (this.type != 'create') {
            this.SurroundingBuildingService.updateNoID(postData)
                .toPromise()
                .then((res) => {
                if (res) {
                    // postData.id = res
                    let data = Object.assign({}, postData);
                    let buildingClass = this.surroundingdetailform.value.buildingClass;
                    let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
                    let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
                    let buildingClassValue = this.buildingClassOption.find(x => x.code == buildingClass).value;
                    let occupationOfBuildingValue = this.occupationOfBuildingOption.find(x => x.code == occupationOfBuilding).value;
                    let typeOfBuildingValue = this.typeOfBuildingOption.find(x => x.code == typeOfBuilding).value;
                    this.modal.dismiss({ data: Object.assign(Object.assign({}, data), { buildingClassValue: buildingClassValue, occupationOfBuildingValue: occupationOfBuildingValue, typeOfBuildingValue: typeOfBuildingValue }), type: "save" });
                }
            });
        }
        else {
            this.SurroundingBuildingService.save(postData)
                .toPromise()
                .then((res) => {
                if (res) {
                    postData.id = res;
                    let data = Object.assign({}, postData);
                    let buildingClass = this.surroundingdetailform.value.buildingClass;
                    let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
                    let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
                    let buildingClassValue = this.buildingClassOption.find(x => x.code == buildingClass).value;
                    let occupationOfBuildingValue = this.occupationOfBuildingOption.find(x => x.code == occupationOfBuilding).value;
                    let typeOfBuildingValue = this.typeOfBuildingOption.find(x => x.code == typeOfBuilding).value;
                    this.modal.dismiss({ data: Object.assign(Object.assign({}, data), { buildingClassValue: buildingClassValue, occupationOfBuildingValue: occupationOfBuildingValue, typeOfBuildingValue: typeOfBuildingValue }), type: "save" });
                }
            });
        }
    }
    changeClass() {
        if (this.surroundingdetailform.value.buildingClass == 'T-001') {
            this.surroundingdetailform.controls['distanceToBuilding'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(25)]);
            this.surroundingdetailform.controls['distanceToBuilding'].updateValueAndValidity();
        }
        if (this.surroundingdetailform.value.buildingClass != 'T-001') {
            this.surroundingdetailform.controls['distanceToBuilding'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(50)]);
            this.surroundingdetailform.controls['distanceToBuilding'].updateValueAndValidity();
        }
        let buildingClass = this.surroundingdetailform.value.buildingClass;
        let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
        let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
        if (buildingClass && occupationOfBuilding && typeOfBuilding) {
            this.getPremiumRate();
        }
    }
    changeType(type) {
        let buildingClass = this.surroundingdetailform.value.buildingClass;
        let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
        let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
        if (type == 'child') {
            this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding);
            let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding);
            if (index < 0) {
                this.surroundingdetailform.controls.occupationOfBuilding.setValue(null);
            }
        }
        if (buildingClass && occupationOfBuilding && typeOfBuilding) {
            this.getPremiumRate();
        }
    }
    changeOccuption() {
        let buildingClass = this.surroundingdetailform.value.buildingClass;
        let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding;
        let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding;
        if (buildingClass && occupationOfBuilding && typeOfBuilding) {
            this.getPremiumRate();
        }
    }
    dismissModal() {
        this.modal.dismiss();
    }
    isControlValid(controlName) {
        const control = this.surroundingdetailform.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.surroundingdetailform.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.surroundingdetailform.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.surroundingdetailform.controls[controlName];
        return control.dirty || control.touched;
    }
};
SurroundingDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal },
    { type: src_app_modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _models_services_surrounding_building_service__WEBPACK_IMPORTED_MODULE_5__.SurroundingBuildingService },
    { type: src_app_modules_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _models_services_premium_rate_service__WEBPACK_IMPORTED_MODULE_4__.PremiumRateService }
];
SurroundingDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-surrounding-detail',
        template: _surrounding_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_surrounding_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SurroundingDetailComponent);



/***/ }),

/***/ 12425:
/*!***************************************************************!*\
  !*** ./src/app/pages/static-pages/tables/tables.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesComponent": () => (/* binding */ TablesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.component.html?ngResource */ 10669);
/* harmony import */ var _tables_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.component.scss?ngResource */ 68878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TablesComponent = class TablesComponent {
    constructor() {
        this.contents = false;
        this.plant = false;
        this.stock = false;
        this.tableData = [];
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    onActionView(data, type, tbtype) {
        this.emitter.emit({
            cmd: type,
            data: data,
            tbtype: tbtype
        });
    }
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
};
TablesComponent.ctorParameters = () => [];
TablesComponent.propDecorators = {
    contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    plant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    stock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    tableData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    emitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TablesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tables',
        template: _tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tables_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TablesComponent);



/***/ }),

/***/ 82176:
/*!*************************************************************************!*\
  !*** ./src/app/pages/static-pages/travel-page/travel-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelComponent": () => (/* binding */ TravelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _travel_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-page.component.html?ngResource */ 73561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/global-fun.service */ 6033);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product-form/page-data.service */ 41070);
/* harmony import */ var _products_models_product_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../products/models/product.dto */ 79611);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../products/services/products-data.service */ 78680);
/* harmony import */ var _static_field_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static-field.interface */ 54625);
/* harmony import */ var _static_pages_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static-pages.data */ 93900);
/* harmony import */ var _models_services_travel_risk_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models&services/travel-risk.service */ 59241);
/* harmony import */ var _travel_risk_detail_travel_risk_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./travel-risk-detail/travel-risk-detail.component */ 5966);














let TravelComponent = class TravelComponent {
    constructor(globalFun, travelRikService, modalService, cdf, numberPipe, pageDataService, prodService, alertService, ngZone) {
        this.globalFun = globalFun;
        this.travelRikService = travelRikService;
        this.modalService = modalService;
        this.cdf = cdf;
        this.numberPipe = numberPipe;
        this.pageDataService = pageDataService;
        this.prodService = prodService;
        this.alertService = alertService;
        this.ngZone = ngZone;
        this.travelForm = [];
        this.totalSiAmt = 0;
        this.listData = [];
        this.tempData = {};
        this.tableReform = [];
        this.requiredForm = {
            detail: null,
            traveler: null,
            benefi: null
        };
        this.actionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    }
    ngOnInit() {
        if (this.travelForm.length < 3) {
            this.alertService.activate("This page cann't to process because there is not match with requirement configuration. Please check travel product config in prodcut configuration", "Warning");
        }
        else {
            this.requiredForm.detail = this.travelForm.find(x => x.unitCode == "travel_detail_0001");
            this.requiredForm.traveler = this.travelForm.find(x => x.unitCode == "traveler_0002");
            this.requiredForm.benefi = this.travelForm.find(x => x.unitCode == "trave_benefi_0003");
            this.getRiskList();
            this.callback();
        }
    }
    callback(ref) {
        if (ref) {
            // console.log("ref", ref);
            this.resourcesId = ref;
            this.getOldData({ id: ref });
        }
        if (this.prodService.editData) {
            this.resourcesId = this.prodService.editData.id;
            this.getOldData(this.prodService.editData);
        }
        // else if (this.referenceID) {
        //   this.getOldData({ id: this.referenceID }, true)
        // }
        // if (this.formData[this.activePage].pageType == 'table') {
        if (this.requiredForm.benefi)
            this.reFormatTable(this.requiredForm.benefi.controls);
        // }
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
        // this.cdRef.detectChanges()
    }
    getRiskList() {
        this.travelRikService.getMany(this.resourcesId).toPromise().then((res) => {
            if (res) {
                // console.log("RES", res);
                this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_7__.TRAVELID] = res;
                this.listData = res || [];
                this.listData.forEach(data => {
                    this.totalSiAmt += parseInt(data.sumInsured);
                    // console.log(this.totalSiAmt, data.sumInsured);
                });
                this.totalSiAmtView = this.numberPipe.transform(this.totalSiAmt || 0, '1.2-2') + " MMK";
                // console.log("this.totalSiAmtView", this.totalSiAmtView, this.totalSiAmt);
                this.cdf.detectChanges();
            }
        });
    }
    newData(type, detail) {
        // console.log("DETAIL", detail);
        // console.log("this.tempData['benefi']", this.tempData['benefi']);
        // console.log("this.tempData['travelDetail']", this.tempData['travelDetail']);
        // console.log("this.tempData['traveler']", this.tempData['traveler']);
        let modalRef = this.modalService.open(_travel_risk_detail_travel_risk_detail_component__WEBPACK_IMPORTED_MODULE_9__.TravelRiskDetailComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.riskId = detail ? detail.riskId : "";
        modalRef.componentInstance.oldData = detail ? detail : {};
        modalRef.componentInstance.resourceId = this.resourcesId;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.editData = this.editData;
        modalRef.componentInstance.premiumAmt = this.premiumAmt;
        modalRef.componentInstance.prodDetailForm = this.requiredForm.detail;
        modalRef.componentInstance.travelerForm = this.requiredForm.traveler;
        modalRef.componentInstance.benefiForm = this.requiredForm.benefi;
        modalRef.componentInstance.tableReform = this.tableReform;
        if (detail) {
            let travel = this.tempData['travelDetail'].find(x => x.risk_id == detail.riskId);
            let traveler = this.tempData['traveler'].find(x => x.risk_id == detail.riskId);
            let benefi = [];
            if (this.tempData['benefi']) {
                benefi = this.tempData['benefi'].filter(x => x.risk_id == detail.riskId);
                this.globalFun.tempFormData[this.requiredForm.benefi.tableName + this.requiredForm.benefi.id] = benefi;
            }
            modalRef.componentInstance.tempData = {
                travelDetail: travel || {},
                traveler: traveler || {},
                benefi: benefi || [],
            };
        }
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == "save") {
                    // this.surrounding=res.data
                    // this.ngZone.run(() => {
                    if (detail) {
                        let index = this.listData.findIndex(x => x.id == detail.id);
                        this.listData[index] = res.data;
                    }
                    else {
                        let index = this.listData.findIndex(x => x.id == res.data.id);
                        if (index >= 0)
                            this.listData[index] = res.data;
                        else
                            this.listData.push(res.data);
                    }
                    // })
                    this.cdf.detectChanges();
                    // console.log("DISMISS", res);
                    this.changeTravelDetail(res.detail);
                    this.changeTraveler(res.traveler);
                    this.changeBenefi(res.benefi, res.detail.refId);
                    this.getRiskList();
                    this.callback(res.data.resourceId);
                    this.savePremimunFire().toPromise().then(res => {
                    });
                }
            }
        });
    }
    changeTravelDetail(data) {
        let index = -1;
        if (this.tempData['travelDetail']) {
            index = this.tempData['travelDetail'].findIndex(x => x.risk_id == data.refId);
            // console.log("INDXEDX", index);
            if (index < 0) {
                this.tempData['travelDetail'].push(data);
            }
            else {
                this.tempData['travelDetail'][index] = data;
            }
        }
    }
    changeTraveler(data) {
        if (this.tempData['traveler']) {
            let index = this.tempData['traveler'].findIndex(x => x.risk_id == data.refId);
            if (index < 0) {
                this.tempData['traveler'].push(data);
            }
            else {
                this.tempData['traveler'][index] = data;
            }
        }
    }
    changeBenefi(data, refId) {
        let filtered = [];
        if (this.tempData['benefi']) {
            filtered = this.tempData['benefi'].filter(x => x.risk_id != refId);
        }
        this.tempData['benefi'] = [...filtered, ...data];
    }
    delete(index) {
        this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                this.travelRikService.delete(this.listData[index].id).toPromise()
                    .then((res) => {
                    if (res) {
                        this.listData.splice(index, 1);
                        this.cdf.detectChanges();
                        this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                            this.getRiskList();
                            this.callback();
                        });
                    }
                });
            }
        });
    }
    nextPage() {
        if (this.listData.length > 0) {
            this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_7__.TRAVELID] = this.listData;
            this.savePremimunFire().toPromise().then(res => {
                this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_6__.StaticActionType.NEXT });
            });
        }
    }
    savePremimunFire() {
        let premiumAmt = this.caluPremimun();
        let postData = {
            "premium": (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            "premiumView": this.premiumAmt,
            "resourceId": this.resourcesId,
            "type": 'policy',
            "sumInsure": (Number(this.totalSiAmtView.split(" ")[0].split(',').join("")) || 0) + "",
            "sumInsureView": this.totalSiAmtView
        };
        return this.pageDataService.updatePremimun(postData);
    }
    caluPremimun() {
        let amt = this.listData.reduce(function (sum, current) {
            return sum + parseInt(current.premium);
        }, 0);
        let amount = (amt * 1.00).toFixed(2);
        // console.log("AMOUNT", amount);
        // let premium=this.globalFun.calculateDecimal(amount)  
        this.premiumAmt = this.numberPipe.transform(amount, "1.2-2") + " MMK";
        this.globalFun.paPremiumResult.next(this.premiumAmt);
        return this.premiumAmt;
    }
    replaceT(stringVal) {
        return stringVal.replace("T-", "").replace("TU-", "");
    }
    replaceTInsured(stringVal) {
        let insure = stringVal.replace("T-", "").replace("TU-", "");
        return parseInt(insure);
    }
    backPage() {
        if (this.listData.length > 0) {
            this.globalFun.tempFormData[_static_pages_data__WEBPACK_IMPORTED_MODULE_7__.TRAVELID] = this.listData;
            this.savePremimunFire();
        }
        this.actionEvent.emit({ type: _static_field_interface__WEBPACK_IMPORTED_MODULE_6__.StaticActionType.PREV });
    }
    getOldData(oldData, isRef) {
        let counter = 0;
        this.travelForm.forEach((element) => {
            counter += 1;
            if (element.type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_4__.PageUIType.DYN) {
                let view = element.pageType == 'table';
                this.pageDataService.getDetail(element.tableName, oldData.id, element.id, view, element.controls, true).toPromise().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    if (res && res.length > 0) {
                        let temp = [];
                        let skipId = isRef;
                        for (const data of res) {
                            let tmpObj = {};
                            // tmpObj['risk_id'] = ""
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
                        }
                        ;
                        let valKey = "travelDetail";
                        if (element.unitCode == "traveler_0002")
                            valKey = 'traveler';
                        if (element.unitCode == "trave_benefi_0003")
                            valKey = 'benefi';
                        this.tempData[valKey] = temp;
                        // this.globalFun.tempFormData = this.tempData
                        if (element.function && element.pageType == 'form') {
                            this.globalFun[element.function]("", this.tempData[element.tableName + element.id]);
                        }
                    }
                })).catch(e => {
                });
            }
        });
    }
};
TravelComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_1__.GlobalFunctionService },
    { type: _models_services_travel_risk_service__WEBPACK_IMPORTED_MODULE_8__.TravelRiskService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe },
    { type: _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_3__.PageDataService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_5__.ProductDataService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone }
];
TravelComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    referenceID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    travelForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    actionEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }]
};
TravelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-travel-risk',
        template: _travel_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], TravelComponent);



/***/ }),

/***/ 5966:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/travel-page/travel-risk-detail/travel-risk-detail.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelRiskDetailComponent": () => (/* binding */ TravelRiskDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _travel_risk_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-risk-detail.component.html?ngResource */ 60040);
/* harmony import */ var _travel_risk_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel-risk-detail.component.scss?ngResource */ 10917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/global-fun.service */ 6033);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/auth */ 90089);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/master-data/master-data.service */ 27670);
/* harmony import */ var _form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../form-component/dynamic-form.component */ 95659);
/* harmony import */ var _form_component_form_view_modal_form_view_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../form-component/form-view-modal/form-view-modal.component */ 50999);
/* harmony import */ var _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../product-form/page-data.service */ 41070);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../products/services/products-data.service */ 78680);
/* harmony import */ var _models_services_travel_risk_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models&services/travel-risk.service */ 59241);
















let TravelRiskDetailComponent = class TravelRiskDetailComponent {
    constructor(globalFun, numberPipe, pageDataService, prodService, datePipe, masterServer, auth, cdRef, travelRikService, modalService, modal, alert, ngModal) {
        this.globalFun = globalFun;
        this.numberPipe = numberPipe;
        this.pageDataService = pageDataService;
        this.prodService = prodService;
        this.datePipe = datePipe;
        this.masterServer = masterServer;
        this.auth = auth;
        this.cdRef = cdRef;
        this.travelRikService = travelRikService;
        this.modalService = modalService;
        this.modal = modal;
        this.alert = alert;
        this.ngModal = ngModal;
        this.list = [];
        this.editData = {};
        this.oldData = {};
        this.tempRefTravel = [];
        this.tempRefTraveler = [];
        this.tempRefBeni = [];
        this.tempData = {
            travelDetail: null,
            traveler: null,
            benefi: [],
            cover: []
        };
        this.stepData = {
            step1: false,
            step2: false,
            step3: false,
            step4: false
        };
        this.tableReform = [];
        this.premium = 0;
        this.activeBox = 'DETAIL';
        this.currencyType = "MMK";
        this.unsub = [];
    }
    get validCancel() {
        let tep = this.stepData.step1 || this.stepData.step2 || this.stepData.step3 || this.stepData.step4 ? true : false;
        let tep2 = this.stepData.step1 && this.stepData.step2 && this.stepData.step3 && this.stepData.step4 ? false : true;
        return tep && tep2;
    }
    ngOnDestroy() {
        this.unsub.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        // console.log("tableReform", this.tableReform);
        this.unsub[0] = this.globalFun.currenyValueObs.subscribe((res) => {
            if (this.currencyType != res) {
                this.currencyType = res;
            }
        });
        this.unsub[1] = this.globalFun.travelPremiumResult.subscribe(res => {
            this.premium = res;
        });
    }
    calPremimun() {
        if (this.oldData.id) {
            this.updateTravelRisk(this.oldData.id);
        }
        else {
            this.saveTravelRisk();
        }
    }
    closeModal() {
        this.modal.close();
    }
    nextCover() {
        if (this.tempData['benefi'].length > 0) {
            let check = this.globalFun.checkPercent(this.tempData['benefi']);
            if (check) {
                this.stepData.step3 = true;
                this.activeBox = "COVER";
            }
            else {
                this.alert.activate('Beneficiary percent need to be 100%!', 'Warning Message');
            }
        }
        else {
            this.stepData.step3 = true;
            this.activeBox = "COVER";
        }
    }
    coverDone() {
        this.stepData.step4 = true;
        this.activeBox = "COVER";
    }
    toggleAccordion(type) {
        this.activeBox = type == this.activeBox ? "" : type;
    }
    deleteData(index, data) {
        this.alert.activate('Are you sure want to delete?', 'Warning Message').then(result => {
            if (result) {
                // let activeForm = this.formData[this.activePage]
                this.pageDataService.deleteData(this.benefiForm.tableName, data.refId, this.benefiForm.id).toPromise().then((res) => {
                    if (res) {
                        this.tempData['benefi'].splice(index, 1);
                        this.cdRef.detectChanges();
                        this.alert.activate('This record was deleted', 'Success Message').then(result => {
                        });
                    }
                });
            }
        });
    }
    download(col, item) {
    }
    //   travelDetail
    // traveler
    // benefi
    newData(editData, index) {
        const activeForm = this.benefiForm;
        const modalRef = this.modalService.open(_form_component_form_view_modal_form_view_modal_component__WEBPACK_IMPORTED_MODULE_7__.FormViewModalComponent, { size: 'xl' });
        modalRef.componentInstance.controls = activeForm.controls;
        modalRef.componentInstance.pageName = activeForm.pageTitle;
        modalRef.componentInstance.activateForm = activeForm;
        modalRef.componentInstance.benefiArray = this.tempData['benefi'];
        modalRef.componentInstance.oldData = index >= 0 ? editData : {};
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.data && res.type == 'save') {
                    if (index >= 0) {
                        this.updateDataAPI(activeForm, res.data, this.tempData['benefi'][index].refId, index, "benefi");
                    }
                    else {
                        this.saveDataAPI(activeForm, res.data, "benefi");
                    }
                }
            }
        });
    }
    saveTravelerTemp(event) {
        if (this.travelerForm.pageType == "form" && this.tempData['traveler']) {
            if (this.tempData['traveler'].refId)
                this.updateDataAPI(this.travelerForm, event, this.tempData['traveler'].refId, -1, "traveler");
            else
                this.saveDataAPI(this.travelerForm, event, 'traveler');
        }
        else
            this.saveDataAPI(this.travelerForm, event, 'traveler');
    }
    saveDetailTemp(event) {
        if (this.prodDetailForm.pageType == "form" && this.tempData['travelDetail']) {
            if (this.tempData['travelDetail'].refId)
                this.updateDataAPI(this.prodDetailForm, event, this.tempData['travelDetail'].refId);
            else
                this.saveDataAPI(this.prodDetailForm, event);
        }
        else
            this.saveDataAPI(this.prodDetailForm, event);
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
            return this.masterServer.getMasterValue(postData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)((masterValues) => {
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(otherResponse);
    }
    saveData(formGp, activeForm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (activeForm.function) {
                let fun = yield this.globalFun[activeForm.function]("", formGp.form.getRawValue(), [], true);
                if (!fun) {
                    return false;
                }
            }
            let submited = formGp.handleSubmit();
            if (!submited)
                return false;
        });
    }
    saveDataAPI(page, formData, type = "travelDetail") {
        this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0";
        let postData = {
            productId: this.product.id,
            productCode: this.product.code,
            type: this.prodService.viewType,
            tableName: page.tableName,
            resourceId: this.resourceId,
            agentId: this.auth.currentUserValue.id || 1,
            quotationId: this.referenceID,
            pageId: page.id,
            customerId: this.prodService.creatingCustomer.customerId,
            leadId: this.prodService.creatingLeadId || null,
            currency: this.currencyType,
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
        // if (type != "travelDetail") {
        //   postData.pageData[0].data.push({
        //     "column": 'risk_id',
        //     "value": this.riskId,
        //     "party": false
        //   })
        // }
        this.pageDataService.save(postData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)((data) => {
            // console.log("DATA", data,"TTYPE",type);
            // console.log("TYPE",type);
            if (type == "travelDetail") {
                for (let travel of data) {
                    this.tempRefTravel.push(travel.refId);
                }
            }
            if (type == "traveler") {
                for (let travel of data) {
                    this.tempRefTraveler.push(travel.refId);
                }
            }
            if (type == 'benefi') {
                for (let travel of data) {
                    this.tempRefBeni.push(travel.refId);
                }
            }
            if (page.pageType == 'table') {
                return this.checkMasterValue(formData, page.controls, data);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(data);
        })).toPromise().then((res) => {
            if (res) {
                if (!this.resourceId)
                    this.resourceId = res[0].resourceId;
                if (page.pageType == 'table') {
                    formData = res[0].formData;
                    if (this.tempData[type]) {
                        this.tempData[type].push(Object.assign(Object.assign({}, formData), { refId: res[0].refId, pageId: page.id }));
                    }
                    else {
                        this.tempData[type] = [Object.assign(Object.assign({}, formData), { refId: res[0].refId })];
                    }
                    this.globalFun.tempFormData = this.tempData;
                    this.cdRef.detectChanges();
                }
                else {
                    this.tempData[type] = Object.assign(Object.assign({}, formData), { refId: res[0].refId, pageId: page.id, risk_id: this.riskId });
                    if (type == "travelDetail") {
                        // this.riskId = res[0].refId
                        this.stepData.step1 = true;
                        this.activeBox = "TRAVELER";
                    }
                    if (type == "traveler") {
                        this.stepData.step2 = true;
                        this.activeBox = "BENEFI";
                    }
                    // if (this.pageOrder.length > this.activePage + 1) {
                    //   if (this.formData[this.activePage + 1].controls) {
                    //     this.dynForm.newFormCreate(this.formData[this.activePage + 1].controls, this.tempData[this.formData[this.activePage + 1].tableName + this.formData[this.activePage + 1].id])
                    //   }
                    //   this.globalFun.tempFormData = this.tempData
                    //   this.activePage += 1
                    //   this.cdRef.detectChanges();
                    //   if (this.formData[this.activePage].pageType == 'table') {
                    //     this.reFormatTable(this.formData[this.activePage].controls)
                    //   }
                    // } else {
                    //   this.globalFun.tempFormData = this.tempData
                    //   this.goReusltPage()
                    // }
                }
            }
        });
    }
    updateDataAPI(page, formData, refId, isTable = -1, type = "travelDetail") {
        this.premiumAmt = this.premiumAmt ? this.premiumAmt : "0";
        let postData = {
            productId: this.prodService.createingProd.id,
            productCode: this.prodService.createingProd.code,
            type: this.prodService.viewType,
            tableName: page.tableName,
            resourceId: this.resourceId,
            refId: refId,
            customerId: this.prodService.creatingCustomer.customerId,
            quotationId: this.referenceID,
            agentId: this.auth.currentUserValue.id || 1,
            premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
            premiumView: this.premiumAmt,
            policyNumber: null,
            pageId: page.id,
            leadId: this.prodService.creatingLeadId || null,
            currency: this.currencyType,
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
        if (type != "travelDetail") {
            postData.data.push({
                "column": 'risk_id',
                "value": this.riskId,
                "party": false
            });
        }
        this.pageDataService.updateNoID(postData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)((data) => {
            // console.log("TYPE",type,"Data",data);
            if (type == "travelDetail") {
                // for(let travel of data){
                this.tempRefTravel.push(data.refId);
                // }
            }
            if (type == "traveler") {
                // for(let travel of data){
                this.tempRefTraveler.push(data.refId);
                // }
            }
            if (type == 'benefi') {
                // for(let travel of data){
                this.tempRefBeni.push(data.refId);
                // }
            }
            if (page.pageType == 'table') {
                return this.checkMasterValue(formData, page.controls, data);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(data);
        })).toPromise().then((res) => {
            if (res) {
                if (isTable < 0) {
                    this.tempData[type] = Object.assign(Object.assign({}, formData), { refId: res.refId });
                    if (type == "travelDetail") {
                        this.stepData.step1 = true;
                        this.activeBox = "TRAVELER";
                    }
                    if (type == "traveler") {
                        this.stepData.step2 = true;
                        this.activeBox = "BENEFI";
                    }
                }
                else {
                    formData = res.formData;
                    this.tempData[type][isTable] = Object.assign(Object.assign({}, formData), { refId: res.refId });
                    this.globalFun.tempFormData = this.tempData;
                    this.cdRef.detectChanges();
                }
            }
        });
    }
    getCoverData() {
    }
    saveTravelRisk() {
        let totalUnit = this.tempData['travelDetail'].travel_unit;
        this.sumInsured = this.numberPipe.transform(totalUnit * 500000, '1.2-2') + " MMK";
        let postData = {
            insuredUnit: this.tempData['travelDetail'].insured_unit,
            noOfTraveller: this.tempData['travelDetail'].no_of_traveler,
            premium: this.premium,
            resourceId: this.resourceId,
            totalUnit: parseInt(this.tempData['travelDetail'].travel_unit),
            travelDuration: this.tempData['travelDetail'].travel_duration,
            travelPlan: this.tempData['travelDetail'].travel_plan,
            travellerName: this.tempData['traveler'].traveler_name,
            sumInsured: (Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
            sumInsuredView: this.sumInsured,
            riskId: this.tempData['travelDetail'].refId,
            resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                sumInsured: (Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                sumInsuredView: this.sumInsured,
                productId: this.prodService.createingProd.id,
                productCode: this.prodService.createingProd.code,
                quotationId: this.prodService.referenceID,
                leadId: this.prodService.creatingLeadId || null,
                currency: this.currencyType,
                type: this.prodService.type
            },
        };
        this.travelRikService.save(postData).toPromise().then((result) => {
            if (result) {
                this.updateTravelRisk(result);
                this.ngModal.dismiss({
                    type: "save", data: Object.assign(Object.assign({}, postData), { id: result }),
                    detail: this.tempData['travelDetail'], traveler: this.tempData['traveler'],
                    benefi: this.tempData['benefi'],
                    // coverage: this.tempData['coverage']
                });
            }
        });
    }
    updateTravelRisk(oldId) {
        let totalUnit = this.tempData['travelDetail'].travel_unit;
        this.sumInsured = this.numberPipe.transform(totalUnit * 500000, '1.2-2') + " MMK";
        let postData = {
            id: oldId ? oldId : this.oldData.id,
            insuredUnit: this.tempData['travelDetail'].insured_unit,
            noOfTraveller: this.tempData['travelDetail'].no_of_traveler,
            premium: this.premium,
            resourceId: this.resourceId,
            totalUnit: parseInt(this.tempData['travelDetail'].travel_unit),
            travelDuration: this.tempData['travelDetail'].travel_duration,
            travelPlan: this.tempData['travelDetail'].travel_plan,
            travellerName: this.tempData['traveler'].traveler_name,
            sumInsured: (Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
            sumInsuredView: this.sumInsured,
            riskId: oldId ? oldId : this.tempData['travelDetail'].refId,
            resourceData: {
                agentId: this.auth.currentUserValue.id || 1,
                customerId: this.prodService.creatingCustomer.customerId,
                policyNumber: null,
                premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
                premiumView: this.premiumAmt,
                sumInsured: (Number(this.sumInsured.split(" ")[0].split(',').join("")) || 0) + "",
                sumInsuredView: this.sumInsured,
                productId: this.prodService.createingProd.id,
                productCode: this.prodService.createingProd.code,
                quotationId: this.prodService.referenceID,
                currency: this.currencyType,
                leadId: this.prodService.creatingLeadId || null,
                type: this.prodService.type
            },
        };
        this.travelRikService.updateNoID(postData).toPromise().then((result) => {
            if (result) {
                this.updateRiskId(this.tempRefTravel, result, 'travel_detail');
                this.updateRiskId(this.tempRefTraveler, result, 'traveler_detail');
                this.updateRiskId(this.tempRefBeni, result, 'trave_beneficiary');
                this.ngModal.dismiss({
                    type: "save", data: Object.assign(Object.assign({}, postData), { id: result }),
                    detail: this.tempData['travelDetail'], traveler: this.tempData['traveler'],
                    benefi: this.tempData['benefi'] || [],
                    // coverage: this.tempData['coverage']
                });
            }
        });
    }
    updateRiskId(refId, riskId, table) {
        if (refId) {
            let postValue = {
                refId: refId,
                riskId: riskId,
                tableName: table
            };
            this.pageDataService.updateRiskId(postValue).toPromise().then(res => {
                if (res) {
                }
            });
        }
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
};
TravelRiskDetailComponent.ctorParameters = () => [
    { type: _core_global_fun_service__WEBPACK_IMPORTED_MODULE_2__.GlobalFunctionService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe },
    { type: _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_8__.PageDataService },
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_9__.ProductDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_5__.MasterDataService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef },
    { type: _models_services_travel_risk_service__WEBPACK_IMPORTED_MODULE_10__.TravelRiskService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbActiveModal },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbActiveModal }
];
TravelRiskDetailComponent.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    oldData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    resourceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    referenceID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    premiumAmt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    prodDetailForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    travelerForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    benefiForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    riskId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    sumInsured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }],
    dynForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: [_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__.DynamicFormComponent,] }],
    dynFormTraveler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: [_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__.DynamicFormComponent,] }],
    tempData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Input }]
};
TravelRiskDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-travel-risk-detail',
        template: _travel_risk_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_travel_risk_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TravelRiskDetailComponent);



/***/ }),

/***/ 75032:
/*!************************************************************************************!*\
  !*** ./src/app/pages/static-pages/addon-page/addon-page.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRvbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 76758:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/add-calculated-building/add-calculated-building.component.scss?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2FsY3VsYXRlZC1idWlsZGluZy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 79531:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/calculated-building.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = ".ft-right {\n  float: right;\n}\n\n.tx-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0ZWQtYnVpbGRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImNhbGN1bGF0ZWQtYnVpbGRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnR4LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */";

/***/ }),

/***/ 69382:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/coverage-page/coverage-page.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3ZlcmFnZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 32765:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life-griph/education-life-griph.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tbGlmZS1ncmlwaC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 59425:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/education-life.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tbGlmZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 65755:
/*!************************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo-griph/endo-griph.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmRvLWdyaXBoLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 80332:
/*!************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo/endo.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmRvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 50330:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/fire-risk.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJlLXJpc2suY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 54514:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/risk-detail/risk-detail.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ".toggle-box {\n  padding-bottom: 1.75rem;\n}\n.toggle-box .toggle-header {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  border-bottom: 1px solid #E3E3E3;\n}\n.toggle-box .toggle-header .tool-box {\n  display: inline-block;\n}\n.toggle-box .toggle-header .tool-box button.icon {\n  background: transparent;\n  font-size: 1.5rem;\n}\n.toggle-box .toggle-body {\n  transition: 1s all;\n  padding: 0.5rem;\n}\n.toggle-box .toggle-body.active {\n  display: block;\n  height: auto;\n  visibility: visible;\n}\n.toggle-box .toggle-body.inactive {\n  display: none;\n  visibility: hidden;\n  overflow: hidden;\n}\n.toggle-box .toggle-body .form-footer {\n  text-align: right;\n  padding: 0.9rem 0px;\n  border-bottom: 1px solid #E3E3E3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpc2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBRUo7QUFBSTtFQUNFLHFCQUFBO0FBRU47QUFBTTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBSkoiLCJmaWxlIjoicmlzay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9nZ2xlLWJveCB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xuICAudG9nZ2xlLWhlYWRlciB7XG4gICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xuICAgIHdpZHRoICAgICAgICAgIDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLWJvdHRvbSAgOiAxcHggc29saWQgI0UzRTNFMztcblxuICAgIC50b29sLWJveCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgIGJ1dHRvbi5pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZSA6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudG9nZ2xlLWJvZHkge1xuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgXG4gIH1cbiAgLnRvZ2dsZS1ib2R5LmFjdGl2ZSB7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgaGVpZ2h0ICAgIDogYXV0bztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLnRvZ2dsZS1ib2R5LmluYWN0aXZlIHtcbiAgICBkaXNwbGF5ICAgOiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnRvZ2dsZS1ib2R5IC5mb3JtLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMC45cmVtIDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UzRTNFMztcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 31999:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-simple-page/fire-simple-page.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmUtc2ltcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFESiIsImZpbGUiOiJmaXJlLXNpbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwIHtcbiAgLmZvcm0tY29udHJvbC1zbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXAgOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgI0U0RTZFRjtcbiAgICBwYWRkaW5nOiAwcHggMC43NXJlbTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodCAgIDogNXB4O1xuICB9XG59Il19 */";

/***/ }),

/***/ 28217:
/*!************************************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/health-quo.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtcXVvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 62208:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/static-pages/motor-addon/motor-addon.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.icon {\n  position: relative;\n  border: none;\n  margin: 0;\n  font-size: 1.5rem;\n  background-color: transparent;\n}\n.add {\n  top: -11px;\n  position: relative;\n  border: none;\n  background: #f2f2f2;\n  margin: 0;\n}\n.add button {\n  position: absolute;\n  top: -52px;\n  right: 78px;\n  width: 110px;\n}\n.btn-box {\n  text-align: end;\n}\n.btn-box input {\n  position: absolute;\n  width: 127%;\n  height: 100%;\n  opacity: 0;\n}\nh2 {\n  font-size: 13px;\n  color: #005ca2;\n  background: #F2F2F2;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  margin-top: 24px;\n  padding: 12px 24px 1px 24px;\n}\nh2 span {\n  position: absolute;\n  right: 14px;\n  top: 5px;\n}\nh2 img {\n  width: 6px;\n  height: 12px;\n  float: left;\n}\nh2 p {\n  font-size: 12px;\n  padding-left: 18px;\n}\n.tab-div {\n  position: relative;\n  padding: 20px 0 0 0;\n  background: #d1d7e2;\n  border-bottom: 1px solid #d2d2d2;\n  margin: -10px 0 0 0;\n}\n.tab-div button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdG9yLWFkZG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQVI7QUFJQTtFQUNJLGNBQUE7QUFESjtBQUlBO0VBQ0ksYUFBQTtBQURKO0FBSUE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUZKO0FBS0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRko7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRFI7QUFLQTtFQUNJLGVBQUE7QUFGSjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFEUjtBQUtBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBRko7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFEUjtBQUdJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRFI7QUFHSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQURSO0FBS0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBRko7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFEUiIsImZpbGUiOiJtb3Rvci1hZGRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XG4gICAgLmZvcm0tY29udHJvbC1zbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNEU2RUY7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xuICAgIH1cbiAgICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbn1cblxuLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24ge1xuICAgIC8vIHRvcDogLThweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmFkZCB7XG4gICAgdG9wOiAtMTFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNTJweDtcbiAgICAgICAgcmlnaHQ6IDc4cHg7XG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICB9XG59XG5cbi5idG4tYm94IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMjclO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDA1Y2EyO1xuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMXB4IDI0cHg7XG4gICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE0cHg7XG4gICAgICAgIHRvcDogNXB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgfVxufVxuXG4udGFiLWRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gICAgYmFja2dyb3VuZDogI2QxZDdlMjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICBtYXJnaW46IC0xMHB4IDAgMCAwO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICByaWdodDogMjBweDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 18609:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page-policy/simple-page-policy.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1wYWdlLXBvbGljeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQURKIiwiZmlsZSI6InNpbXBsZS1wYWdlLXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XG4gIC5mb3JtLWNvbnRyb2wtc20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwIDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICNFNEU2RUY7XG4gICAgcGFkZGluZzogMHB4IDAuNzVyZW07XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQgICA6IDVweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 18712:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page/simple-page.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".input-group .form-control-sm {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #E4E6EF;\n  padding: 0px 0.75rem;\n}\n.input-group .mat-datepicker-toggle {\n  position: absolute;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBREoiLCJmaWxlIjoic2ltcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xuICAuZm9ybS1jb250cm9sLXNtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcCA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjRTRFNkVGO1xuICAgIHBhZGRpbmc6IDBweCAwLjc1cmVtO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0ICAgOiA1cHg7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 59275:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-building.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = ".ft-right {\n  float: right;\n}\n\n.tx-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnJvdW5kaW5nLWJ1aWxkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzdXJyb3VuZGluZy1idWlsZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udHgtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */";

/***/ }),

/***/ 72124:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-detail/surrounding-detail.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXJyb3VuZGluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 68878:
/*!****************************************************************************!*\
  !*** ./src/app/pages/static-pages/tables/tables.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "table .tr .th {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoidGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgLnRyIC50aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 10917:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/travel-page/travel-risk-detail/travel-risk-detail.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".toggle-box {\n  padding-bottom: 1.75rem;\n}\n.toggle-box .toggle-header {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  border-bottom: 1px solid #E3E3E3;\n}\n.toggle-box .toggle-header .tool-box {\n  display: inline-block;\n}\n.toggle-box .toggle-header .tool-box button.icon {\n  background: transparent;\n  font-size: 1.5rem;\n}\n.toggle-box .toggle-body {\n  transition: 1s all;\n  padding: 0.5rem;\n}\n.toggle-box .toggle-body.active {\n  display: block;\n  height: auto;\n  visibility: visible;\n}\n.toggle-box .toggle-body.inactive {\n  display: none;\n  visibility: hidden;\n  overflow: hidden;\n}\n.toggle-box .toggle-body .form-footer {\n  text-align: right;\n  padding: 0.9rem 0px;\n  border-bottom: 1px solid #E3E3E3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbC1yaXNrLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQUVKO0FBQUk7RUFDRSxxQkFBQTtBQUVOO0FBQU07RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FBRVI7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUpKIiwiZmlsZSI6InRyYXZlbC1yaXNrLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2dnbGUtYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG4gIC50b2dnbGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XG4gICAgd2lkdGggICAgICAgICAgOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tICA6IDFweCBzb2xpZCAjRTNFM0UzO1xuXG4gICAgLnRvb2wtYm94IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgYnV0dG9uLmljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZm9udC1zaXplIDogMS41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50b2dnbGUtYm9keSB7XG4gICAgdHJhbnNpdGlvbjogMXMgYWxsO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBcbiAgfVxuICAudG9nZ2xlLWJvZHkuYWN0aXZlIHtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBoZWlnaHQgICAgOiBhdXRvO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAudG9nZ2xlLWJvZHkuaW5hY3RpdmUge1xuICAgIGRpc3BsYXkgICA6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudG9nZ2xlLWJvZHkgLmZvcm0tZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAwLjlyZW0gMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTNFM0UzO1xuICB9XG59Il19 */";

/***/ }),

/***/ 72305:
/*!************************************************************************************!*\
  !*** ./src/app/pages/static-pages/addon-page/addon-page.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<table class=\"table table-bordered\">\n  <thead class=\"tbody-align\">\n    <tr>\n      <th></th>\n      <th style=\"text-align: left;\">\n        {{\"FORM.base_coverage\" | translate }}\n      </th>\n      <th *ngIf=\"product.code == 'CLFR01'\">\n        Option\n      </th>\n      <th *ngIf=\"addOns.isSum\">\n        {{\"FORM.sum_insured\" | translate }}\n      </th>\n      <th *ngIf=\"addOns.isUnit\">\n        {{\"FORM.unit\" | translate }}\n      </th>\n      <th *ngIf=\"addOns.isPremium\">\n        {{\"FORM.premium\" | translate }}\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"tbody-align\" *ngIf=\"!isLoading\">\n    <ng-container *ngFor=\"let addon of product.addOns;let i = index\">\n      <tr *ngIf=\"addon.show\">\n\n        <ng-container *ngIf=\"addOnsData[addon.id]\">\n          <td>\n            <input type=\"checkbox\" [(ngModel)]=\"addOnsData[addon.id].checked\" (change)=\"changeOption(addon)\">\n          </td>\n        </ng-container>\n        <td style=\"text-align: left;\">{{addon.description}}</td>\n        <!-- <ng-container *ngIf=\"addOnsData[addon.id].checked\"> -->\n        <ng-container *ngIf=\"addOnsData[addon.id]\">\n          <td *ngIf=\"product.code == 'CLFR01'\" style=\"text-align: left;\">\n            <ng-container *ngIf=\"addon.code == 'BURGLARY' || addon.code == 'STHTC' \">\n              <ng-select class=\"ng-custom-select\" [items]=\"fireOptionData[addon.code]\" bindLabel=\"value\"\n                bindValue=\"code\" (change)=\"rechangeOption(addon)\" [(ngModel)]=\"addOnsData[addon.id].option\"\n                [clearable]=\"false\" [disabled]=\"addon.code == 'BURGLARY'\"></ng-select>\n            </ng-container>\n          </td>\n          <td *ngIf=\"addon.sumInsured\">\n            <ng-container *ngIf=\"!addon.sumInsuredStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"!addOnsData[addon.id].checked\"\n                [(ngModel)]=\"addOnsData[addon.id].sum\">\n            </ng-container>\n            <ng-container *ngIf=\"addon.sumInsuredStr\">\n              <!-- {{addOnsData[addon.id].sum}} -->\n              {{addOnsData[addon.id].sum > 0 ? (addOnsData[addon.id].sum | number:'1.2-2') : addOnsData[addon.id].sum}}\n            </ng-container>\n          </td>\n          <td *ngIf=\"addon.unit\">\n            <!-- <ng-container *ngIf=\"addon.unitStr\"></ng-container> -->\n            <ng-container *ngIf=\"!addon.unitStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"!addOnsData[addon.id].checked\"\n                [(ngModel)]=\"addOnsData[addon.id].unit\">\n            </ng-container>\n            <ng-container *ngIf=\"addon.unitStr\">\n              {{addOnsData[addon.id].unit}}\n            </ng-container>\n          </td>\n          <td *ngIf=\"addon.premium\">\n            <!-- <ng-container *ngIf=\"addon.premiumStr\"></ng-container> -->\n            <ng-container *ngIf=\"!addon.premiumStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [disabled]=\"!addOnsData[addon.id].checked\"\n                [(ngModel)]=\"addOnsData[addon.id].premium\">\n            </ng-container>\n            <ng-container *ngIf=\"addon.premiumStr\">\n              {{addOnsData[addon.id].premium > 0 ? (addOnsData[addon.id].premium | number:'1.2-2') :\n              addOnsData[addon.id].premium}}\n            </ng-container>\n          </td>\n          <!-- </ng-container> -->\n        </ng-container>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n <hr>\n<!--<app-motor-addon [product]=\"product\" [editData]=\"editData\" [resourcesId]=\"resourcesId\" [optionId]=\"optionId\" [premiumAmt]=\"premiumAmt\" ></app-motor-addon>\n<hr> -->\n<div class=\"row\" *ngIf=\"!fireAdd\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n  </div>\n</div>\n<div *ngIf=\"fireAdd\" style=\"text-align: right;\">\n  <button class=\"btn btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save\" | translate }} </button>\n</div>";

/***/ }),

/***/ 84562:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/add-calculated-building/add-calculated-building.component.html?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n            {{pageType}} {{type}}\n        </div>\n    </div>\n\n    <form action=\"#\" class=\"form\" [formGroup]=\"calculatedbuildingForm\" (ngSubmit)=\"create()\">\n        <div class=\"overlay overlay-block cursor-default modal-body\">\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Item Description</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"itemDescription\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('itemDescription')\" [class.is-valid]=\"isControlValid('itemDescription')\" formControlName=\"itemDescription\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" *ngIf=\"!isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Item Name</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"itemName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('itemName')\" [class.is-valid]=\"isControlValid('itemName')\" formControlName=\"itemName\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" *ngIf=\"isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Stock Value</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" name=\"stockValue\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('stockValue')\" [class.is-valid]=\"isControlValid('stockValue')\"\n                                formControlName=\"stockValue\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\" *ngIf=\"!isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Quantity</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" class=\"form-control form-control-sm \" (ngModelChange)=\"calculateTotalValue()\" name=\"quantity\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('quantity')\" [class.is-valid]=\"isControlValid('quantity')\" formControlName=\"quantity\"\n                            />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" *ngIf=\"!isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Total Value</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" name=\"totalValue\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('totalValue')\" [class.is-valid]=\"isControlValid('totalValue')\"\n                                formControlName=\"totalValue\" readonly />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\" *ngIf=\"isStock\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Month</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"month\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('month')\" [class.is-valid]=\"isControlValid('month')\" formControlName=\"month\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Remark</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"remark\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('remark')\" [class.is-valid]=\"isControlValid('remark')\" formControlName=\"remark\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\" *ngIf=\"!isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Value Per Quantity</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" (ngModelChange)=\"calculateTotalValue()\" name=\"valuePerQuantity\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('valuePerQuantity')\"\n                                [class.is-valid]=\"isControlValid('valuePerQuantity')\" formControlName=\"valuePerQuantity\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\" *ngIf=\"isStock\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">Agreed SI</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"tel\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\" class=\"form-control form-control-sm \" name=\"agreedSi\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('agreedSi')\" [class.is-valid]=\"isControlValid('agreedSi')\"\n                                formControlName=\"agreedSi\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"dismissModal()\">{{\"FORM.btn_cancel\" | translate }}</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-elevate\" [disabled]=\"calculatedbuildingForm.invalid\">{{\"FORM.btn_save\" | translate }}</button>\n        </div>\n    </form>\n</div>";

/***/ }),

/***/ 17050:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/calculated-building/calculated-building.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"form-group\">\n    <div class=\"row\" style=\"align-items: center;\">\n        <!-- <div class=\"col-sm-12\">\n            <label class=\"col-sm-12  left-border-image\">Calculated Building Sl <span style=\"margin-left: 20px;\">\n                    {{default}} </span> </label>\n        </div> -->\n\n    </div>\n    <hr *ngIf=\"productDetail.policyType == 'T-NM' \">\n    <div class=\"px5 py5\" *ngIf=\"productDetail.policyType == 'T-NM' \">\n        <div class=\"row\" style=\"align-items: center;\">\n\n            <div class=\"col-sm-8\">\n                <label class=\"col-sm-6  left-border-image\">Contents including FFF</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isContents\" [color]=\"primary\" class=\"toggle ft-right\"\n                    (toggleChange)=\"toggleChange('contents')\"></mat-slide-toggle>\n            </div>\n            <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm mx-2 ft-right\"\n                    (click)=\"add('contents',null,'Add')\">Add</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"isContents && contentsData\">\n            <app-tables [contents]=\"true\" [tableData]=\"contentsData\" (emitter)=\"actionBtn($event)\"></app-tables>\n            <div class=\"row\" style=\"align-items: center;\">\n\n                <div class=\"col-sm-12\">\n                    <label class=\"col-sm-12 col-form-label tx-right\">Total Sum Insured for Contents including FFF\n                        <span style=\"margin-left: 29px;\">{{totalContent | number}}</span>\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr *ngIf=\"productDetail.policyType == 'T-NM'\">\n    <div *ngIf=\"productDetail.policyType == 'T-NM'\">\n        <div class=\"row\" style=\"align-items: center;\">\n\n            <div class=\"col-sm-8\">\n                <label class=\"col-sm-6  left-border-image\">Plant and Machinery</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isPlant\" [color]=\"primary\" class=\"toggle ft-right\"\n                    (toggleChange)=\"toggleChange('plants')\"></mat-slide-toggle>\n            </div>\n            <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm mx-2 ft-right\"\n                    (click)=\"add('plants',null,'Add')\">Add</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"isPlant && plantData\">\n            <app-tables [plant]=\"true\" [tableData]=\"plantData\" (emitter)=\"actionBtn($event)\"></app-tables>\n            <div class=\"row\" style=\"align-items: center;\">\n\n                <div class=\"col-sm-12\">\n                    <label class=\"col-sm-12 col-form-label tx-right\">Total Sum Insured for Plants and Machinery\n                        <span style=\"margin-left: 29px;\">{{totalPlant | number}}</span>\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr>\n    <div>\n        <div class=\"row\" style=\"align-items: center;\">\n\n            <div class=\"col-sm-8\">\n                <label class=\"col-sm-6 left-border-image\">Stock</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isStock\" [color]=\"primary\" class=\"toggle ft-right\"\n                    (toggleChange)=\"toggleChange('stock')\"></mat-slide-toggle>\n            </div>\n            <div class=\"col-sm-2\" *ngIf=\"stockData.length == 0\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm mx-2 ft-right\"\n                    (click)=\"add('stock',null,'Add')\">Add</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"isStock && stockData\">\n            <app-tables [stock]=\"true\" [tableData]=\"stockData\" (emitter)=\"actionBtn($event)\"></app-tables>\n            <div class=\"row\" style=\"align-items: center;\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-4 col-form-label\">Proposed Stock SI</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"tel\" currencyMask\n                                [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\"\n                                class=\"form-control form-control-sm \" name=\"proposeStockValue\" autocomplete=\"off\"\n                                [value]=\"stockData.length > 0 ? stockData[0].agreedSi : 0\" [disabled]=\"true\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <label class=\"col-sm-12 col-form-label tx-right\">Total Sum Insured for Stock\n                        <span style=\"margin-left: 29px;\">{{totalStock | number}}</span>\n                    </label>\n                </div>\n            </div>\n            <hr>\n\n        </div>\n    </div>";

/***/ }),

/***/ 29630:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/static-pages/coverage-page/coverage-page.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<table class=\"table table-bordered\">\n  <thead class=\"tbody-align\">\n    <tr>\n      <th>\n        {{\"FORM.base_coverage\" | translate }}\n      </th>\n      <th *ngIf=\"coverage.isSum\">\n        {{\"FORM.sum_insured\" | translate }}\n      </th>\n      <th *ngIf=\"coverage.isUnit\">\n        {{\"FORM.unit\" | translate }}\n      </th>\n      <th *ngIf=\"coverage.isPremium\">\n        {{\"FORM.premium\" | translate }}\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"tbody-align\">\n    <ng-container *ngFor=\"let coverage of product.coverages;let i = index\">\n      <tr *ngIf=\"coverage.show\">\n        <td>{{coverage.description}}</td>\n        <ng-container *ngIf=\"coverageData[coverage.id]\">\n          <td *ngIf=\"coverage.sumInsured\">\n            <ng-container *ngIf=\"!coverage.sumInsuredStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"coverageData[coverage.id].sum\">\n            </ng-container>\n            <ng-container *ngIf=\"coverage.sumInsuredStr\">\n              {{ coverageData[coverage.id].sum > 0 ? (coverageData[coverage.id].sum | number: '1.2-2') :\n                coverageData[coverage.id].sum}}\n            </ng-container>\n          </td>\n          <td *ngIf=\"coverage.unit\">\n            <!-- <ng-container *ngIf=\"coverage.unitStr\"></ng-container> -->\n            <ng-container *ngIf=\"!coverage.unitStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"coverageData[coverage.id].unit\">\n            </ng-container>\n            <ng-container *ngIf=\"coverage.unitStr\">\n              {{coverageData[coverage.id].unit}}\n            </ng-container>\n          </td>\n          <td *ngIf=\"coverage.premium\">\n            <!-- <ng-container *ngIf=\"coverage.premiumStr\"></ng-container> -->\n            <ng-container *ngIf=\"!coverage.premiumStr\">\n              <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"coverageData[coverage.id].premium\">\n            </ng-container>\n            <ng-container *ngIf=\"coverage.premiumStr\">\n              <!-- {{coverageData[coverage.id].premium}} -->\n              {{ coverageData[coverage.id].premium > 0 ? (coverageData[coverage.id].premium | number : '1.2-2') :\n                coverageData[coverage.id].premium}}\n            </ng-container>\n          </td>\n        </ng-container>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n<hr>\n<div class=\"row\" *ngIf=\"!isPopup\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n  </div>\n</div>\n<div *ngIf=\"isPopup\" style=\"text-align: right;\">\n  <button class=\"btn btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save\" | translate }} </button>\n</div>";

/***/ }),

/***/ 72266:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life-griph/education-life-griph.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [title]=\"chartOptions.title\"\n    [legend]=\"chartOptions.legend\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [markers]=\"chartOptions.markers\"\n  ></apx-chart>\n  <!-- <div class=\"row mt-3\">\n    <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n    </div>\n    <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n    </div>\n  </div> -->";

/***/ }),

/***/ 84037:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/static-pages/education-life/education-life.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>End of Policy Year</th>\n      <th>Age</th>\n      <th>Premium Paid</th>\n      <th>Death/PTD Benefit</th>\n      <th>Surrender Value</th>\n      <th>Maturity Benefit</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"premiumRate.length > 0 && surrendRate.length > 0\">\n    <tr *ngFor=\"let item of showDatas;let i = index\">\n      <td>{{item.endOfPolicyYear}}</td>\n      <td>{{item.age}}</td>\n      <td style=\"text-align: right;\">{{(item.premiumPaid | number) || \"-\"}}</td>\n      <td style=\"text-align: right;\">{{item.deathBenefit | number}}</td>\n      <td style=\"text-align: right;\">{{(item.surrenderValue | number) || \"-\"}}</td>\n      <td style=\"text-align: right;\">{{(item.maturityBenefit | number) || \"-\"}}</td>\n    </tr>\n  </tbody>\n</table>\n<hr class=\"mb-5\">\n<ng-container *ngIf=\"showDatas.length > 0\">\n  <app-education-life-grip [parentData]=\"showDatas\"></app-education-life-grip>\n</ng-container>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n  </div>\n</div>";

/***/ }),

/***/ 3681:
/*!************************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo-griph/endo-griph.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [title]=\"chartOptions.title\"\n    [legend]=\"chartOptions.legend\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [markers]=\"chartOptions.markers\"\n  ></apx-chart>\n  <!-- <div class=\"row mt-3\">\n    <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> Previous </button>\n    </div>\n    <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> Save & Next </button>\n    </div>\n  </div> -->";

/***/ }),

/***/ 31294:
/*!************************************************************************!*\
  !*** ./src/app/pages/static-pages/endo/endo.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>End of Policy Year</th>\n      <th>Age</th>\n      <th>Premium Paid</th>\n      <th>Death/PTD Benefit</th>\n      <th>Surrender Value</th>\n      <th>Policy Loan</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"premiumRate.length > 0 && surrendRate.length > 0\">\n    <tr *ngFor=\"let item of showDatas;let i = index\">\n      <td>{{item.endOfPolicyYear}}</td>\n      <td>{{item.age}}</td>\n      <td style=\"text-align: right;\">{{(item.premiumPaid | number) || \"-\"}}</td>\n      <td style=\"text-align: right;\">{{item.benefit | number}}</td>\n      <td style=\"text-align: right;\">{{(item.surrenderValue | number) || \"-\"}}</td>\n      <td style=\"text-align: right;\">{{(item.policyLoan | number) || \"-\"}}</td>\n    </tr>\n  </tbody>\n</table>\n<hr class=\"mb-5\">\n<ng-container *ngIf=\"showDatas.length > 0\">\n  <app-endo-grip [parentData]=\"showDatas\"></app-endo-grip>\n</ng-container>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n  </div>\n</div>";

/***/ }),

/***/ 42764:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/fire-risk.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"newData('add')\">{{\"FORM.add_new_data\" | translate }}</button>\n</div>\n<div class=\"table-responsive angular-bootstrap-table\">\n    <table class=\"table table-head-custom table-vertical-center\">\n        <thead>\n            <tr>\n                <th>{{\"FORM.building_description\" | translate }}</th>\n                <th>{{\"FORM.sum_insured\" | translate }}</th>\n                <th>{{\"FORM.premium\" | translate }}</th>\n                <th>{{\"TABLE.Action\" | translate }}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <ng-container *ngFor=\"let item of listData\">\n                <tr>\n                    <td>{{item.buildingDescription}}</td>\n                    <td>{{item.riskSi | number:\"1.2-2\"}}</td>\n                    <td>{{item.totalPremiumNotStampDuty | number:\"1.2-2\"}}</td>\n                    <td>\n                        <a title=\"Edit\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"newData('edit',item)\">\n                            <span class=\"flaticon-edit\"></span>\n                        </a>\n                        <a title=\"Delete\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"delete(item)\">\n                            <span class=\"flaticon-delete\"></span>\n                        </a>\n                    </td>\n                </tr>\n            </ng-container>\n        </tbody>\n    </table>\n</div>\n<div class=\"row mt-3\">\n    <div class=\"col-sm-6 mx-auto\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n    </div>\n    <div class=\"col-sm-6 mx-auto\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\">{{\"FORM.btn_save_and_next\" | translate }} </button>\n    </div>\n</div>";

/***/ }),

/***/ 61504:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-risk/risk-detail/risk-detail.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n            Fire Risk\n            <!-- <small style=\"text-decoration: underline;cursor: pointer;\" *ngIf=\"oldData\"\n                (click)=\"viewOther('form')\">(View\n                Other Building)</small> -->\n            <!-- <small style=\"text-decoration: underline;cursor: pointer;\" *ngIf=\"viewPage != 'form'\" (click)=\"viewOther('other')\">(View\n                Risk Detail)</small> -->\n        </div>\n\n    </div>\n    <div class=\"overlay overlay-block cursor-default modal-body\">\n        <div class=\"toggle-box\">\n            <div class=\"toggle-header\">\n                <h4 class=\"left-border-image\">Risk Detail</h4>\n                <div class=\"tool-box\">\n                    <button type=\"button\" *ngIf=\"activeBox=='DETAIL'\" class=\"icon\" (click)=\"toggleAccordion('DETAIL')\">\n                        <span class=\"flaticon2-back\"></span>\n                    </button>\n                    <button type=\"button\" *ngIf=\"activeBox!='DETAIL'\" class=\"icon ml-2\"\n                        (click)=\"toggleAccordion('DETAIL')\">\n                        <span class=\"flaticon2-down\"></span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"toggle-body\" [ngClass]=\"activeBox=='DETAIL' ? 'active' : 'inactive'\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"fireRiskform\" (ngSubmit)=\"createRisk()\">\n\n                    <div class=\"row\" style=\"align-items: center\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.building_description\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <textarea type=\"text\" class=\"form-control form-control-sm \"\n                                        name=\"buildingDescription\" autocomplete=\"off\"\n                                        [class.is-invalid]=\"isControlInvalid('buildingDescription')\"\n                                        [class.is-valid]=\"isControlValid('buildingDescription')\"\n                                        formControlName=\"buildingDescription\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.type_of_building\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <ng-select class=\"ng-custom-select\" (change)=\"calcuRate('child')\"\n                                        [class.is-invalid]=\"isControlInvalid('typeOfBuilding')\"\n                                        [class.is-valid]=\"isControlValid('typeOfBuilding')\"\n                                        [items]=\"typeOfBuildingOption\" bindLabel=\"value\" bindValue=\"code\"\n                                        formControlName=\"typeOfBuilding\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.occupation_of_building\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('occupationOfBuilding')\"\n                                        (change)=\"calcuRate()\" [class.is-valid]=\"isControlValid('occupationOfBuilding')\"\n                                        [items]=\"occupationOfBuildingOption\" bindLabel=\"value\" bindValue=\"code\"\n                                        formControlName=\"occupationOfBuilding\">\n                                    </ng-select>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.building_class\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('buildingClass')\"\n                                        [class.is-valid]=\"isControlValid('buildingClass')\" [items]=\"buildingClassOption\"\n                                        (change)=\"calcuRate()\" bindLabel=\"value\" bindValue=\"code\"\n                                        formControlName=\"buildingClass\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--  -->\n                    <div class=\"row\" style=\"align-items: center\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.construction_of_roof\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <!-- <input type=\"number\" class=\"form-control form-control-sm \" name=\"constructionOfRoof\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('constructionOfRoof')\"\n                                        [class.is-valid]=\"isControlValid('constructionOfRoof')\"\n                                        formControlName=\"constructionOfRoof\" /> -->\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('constructionOfRoof')\"\n                                        [class.is-valid]=\"isControlValid('constructionOfRoof')\" [items]=\"roofOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"constructionOfRoof\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.construction_of_walls\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <!-- <input type=\"number\" class=\"form-control form-control-sm \" name=\"constructionOfWall\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('constructionOfWall')\"\n                                        [class.is-valid]=\"isControlValid('constructionOfWall')\"\n                                        formControlName=\"constructionOfWall\" /> -->\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('constructionOfWall')\"\n                                        [class.is-valid]=\"isControlValid('constructionOfWall')\" [items]=\"wallOption\"\n                                        bindLabel=\"value\" bindValue=\"code\" formControlName=\"constructionOfWall\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--  -->\n                    <!--  -->\n                    <div class=\"row\" style=\"align-items: center\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.construction_of_floor\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <!-- <input type=\"number\" class=\"form-control form-control-sm \" name=\"constructionOfFloor\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('constructionOfFloor')\"\n                                        [class.is-valid]=\"isControlValid('constructionOfFloor')\"\n                                        formControlName=\"constructionOfFloor\" /> -->\n                                    <ng-select class=\"ng-custom-select\"\n                                        [class.is-invalid]=\"isControlInvalid('constructionOfFloor')\"\n                                        [class.is-valid]=\"isControlValid('constructionOfFloor')\"\n                                        [items]=\"floorClassOption\" bindLabel=\"value\" bindValue=\"code\"\n                                        formControlName=\"constructionOfFloor\">\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.story_of_building\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"number\" class=\"form-control form-control-sm \" name=\"storyOfBuilding\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('storyOfBuilding')\"\n                                        [class.is-valid]=\"isControlValid('storyOfBuilding')\"\n                                        formControlName=\"storyOfBuilding\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--  -->\n                    <!--  -->\n                    <div class=\"row\" style=\"align-items: center\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.length_in_feet\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"number\" class=\"form-control form-control-sm \" name=\"length\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('length')\"\n                                        [class.is-valid]=\"isControlValid('length')\" formControlName=\"length\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.height_in_feet\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"number\" class=\"form-control form-control-sm \" name=\"height\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('height')\"\n                                        (change)=\"calcuSquare()\" [class.is-valid]=\"isControlValid('height')\"\n                                        formControlName=\"height\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--  -->\n                    <!--  -->\n                    <div class=\"row\" style=\"align-items: center\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.width_in_feet\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"number\" class=\"form-control form-control-sm \" name=\"width\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('width')\"\n                                        [class.is-valid]=\"isControlValid('width')\" formControlName=\"width\"\n                                        (change)=\"calcuSquare()\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.total_square_in_feet\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"number\" class=\"form-control form-control-sm \" name=\"totalSquareFoot\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('totalSquareFoot')\"\n                                        [class.is-valid]=\"isControlValid('totalSquareFoot')\"\n                                        formControlName=\"totalSquareFoot\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--  -->\n                    <!--  -->\n                    <div class=\"row\" style=\"align-items: center\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.year_of_construction\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"number\" class=\"form-control form-control-sm \" name=\"yearOfConstruction\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('yearOfConstruction')\"\n                                        [class.is-valid]=\"isControlValid('yearOfConstruction')\"\n                                        formControlName=\"yearOfConstruction\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.special_decoration\" | translate }}</label>\n                                <div class=\"col-md-8\">\n                                    <!-- <input type=\"number\" class=\"form-control form-control-sm \" name=\"specialDecoration\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('specialDecoration')\"\n                                        [class.is-valid]=\"isControlValid('specialDecoration')\"\n                                        formControlName=\"specialDecoration\" /> -->\n                                    <mat-radio-group formControlName=\"specialDecoration\" class=\"col-8\">\n                                        <mat-radio-button class=\"mx-1\" [value]=\"true\">{{\"FORM.rad_yes\"| translate}}\n                                        </mat-radio-button>\n                                        <mat-radio-button class=\"mx-1\" [value]=\"false\">{{\"FORM.rad_no\"| translate}}\n                                        </mat-radio-button>\n                                    </mat-radio-group>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"align-items: center\" *ngIf=\"(productDetail.policyType == 'T-NM' && currencyType!='USD') || productDetail.policyType != 'T-NM'\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">{{\"FORM.proposed_building_si\" | translate}}</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"tel\" currencyMask\n                                        [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\"\n                                        class=\"form-control form-control-sm \" name=\"sumInsure\" autocomplete=\"off\"\n                                        [class.is-invalid]=\"isControlInvalid('sumInsure')\"\n                                        [class.is-valid]=\"isControlValid('sumInsure')\" formControlName=\"sumInsure\" />\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">Proposed Stock Value</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"tel\" currencyMask\n                                        [options]=\"{ prefix: '', thousands: ',', precision: 0,allowNegative:false,align:'left' }\"\n                                        class=\"form-control form-control-sm \" name=\"proposeStockValue\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('proposeStockValue')\"\n                                        [class.is-valid]=\"isControlValid('proposeStockValue')\"\n                                        formControlName=\"proposeStockValue\" />\n                                </div>\n                            </div>\n                        </div> -->\n                        <!-- <div class=\"col-md-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-md-4 col-form-label\">Special Decoration</label>\n                                <div class=\"col-md-8\">\n                                    <input type=\"number\" class=\"form-control form-control-sm \" name=\"premiumRate\"\n                                        autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('premiumRate')\"\n                                        [class.is-valid]=\"isControlValid('premiumRate')\" formControlName=\"premiumRate\" />\n                                </div>\n                            </div>\n                        </div> -->\n                    </div>\n                    <!--  -->\n\n                    <div class=\"form-footer\">\n                        <!-- <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"calPremimun()\">Cancel</button> -->\n                        <button type=\"submit\" class=\"btn btn-primary btn-elevate\">{{\"FORM.btn_next\" | translate }}</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"toggle-box\">\n            <div class=\"toggle-header\">\n                <h4 class=\"left-border-image\">{{\"FORM.others\" | translate }}</h4>\n                <div class=\"tool-box\">\n                    <button type=\"button\" [disabled]=\"!step1Com\" *ngIf=\"activeBox=='BUILDING'\" class=\"icon\"\n                        (click)=\"toggleAccordion('BUILDING')\">\n                        <span class=\"flaticon2-back\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!step1Com\" *ngIf=\"activeBox!='BUILDING'\" class=\"icon ml-2\"\n                        (click)=\"toggleAccordion('BUILDING')\">\n                        <span class=\"flaticon2-down\"></span>\n                    </button>\n                </div>\n            </div>\n            <ng-container *ngIf=\"step1Com\">\n                <div class=\"toggle-body\" [ngClass]=\"activeBox=='BUILDING' ? 'active' : 'inactive'\">\n                    <ng-container *ngIf=\"oldData.id\">\n                        <app-surrounding-building [riskId]=\"oldData.id\"></app-surrounding-building>\n                        <app-calculated-building [riskId]=\"oldData.id\" [default]=\"buildingSi\"\n                            (totalEvent)=\"changeTotal($event)\">\n                        </app-calculated-building>\n                        <div class=\"form-footer\">\n                            <!-- <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"calPremimun()\">Cancel</button> -->\n                            <button type=\"submit\" class=\"btn btn-primary btn-elevate\"\n                                (click)=\"step2Done()\">{{\"FORM.btn_next\" | translate }}</button>\n                        </div>\n                    </ng-container>\n                </div>\n            </ng-container>\n\n        </div>\n\n        <div class=\"toggle-box\">\n            <div class=\"toggle-header\">\n                <h4 class=\"left-border-image\">Addon</h4>\n                <div class=\"tool-box\">\n                    <button type=\"button\" [disabled]=\"!step2Com\" *ngIf=\"activeBox=='ADDON'\" class=\"icon\"\n                        (click)=\"toggleAccordion('ADDON')\">\n                        <span class=\"flaticon2-back\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!step2Com\" *ngIf=\"activeBox!='ADDON'\" class=\"icon ml-2\"\n                        (click)=\"toggleAccordion('ADDON')\">\n                        <span class=\"flaticon2-down\"></span>\n                    </button>\n                </div>\n            </div>\n            <ng-container *ngIf=\"step2Com\">\n                <div class=\"toggle-body\" [ngClass]=\"activeBox=='ADDON' ? 'active' : 'inactive'\">\n                    <app-addon-page [product]=\"product\" [optionId]=\"oldData.id\" [editData]=\"editData\"\n                        [resourcesId]=\"resourcesId\" [fireAdd]=\"true\" (actionEvent)=\"step3Done()\"></app-addon-page>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"calPremimun()\">{{\"FORM.btn_cancel\" | translate }}</button>\n        <button type=\"button\" class=\"btn btn-primary btn-elevate\" [disabled]=\"!step3Com\"\n            (click)=\"calPremimun()\">{{\"FORM.btn_save\" | translate }}</button>\n    </div>\n</div>";

/***/ }),

/***/ 53711:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/fire-simple-page/fire-simple-page.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<form action=\"\" [formGroup]=\"staticForm\">\n    <!-- Start date -->\n    <div class=\"row\" style=\"align-items: center;\">\n        <div class=\"col-sm-6\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label \">{{\"FORM.policy_effective_date\" | translate}}</label>\n                <div class=\"col-sm-6\">\n                    <div class=\"input-group\">\n                        <input matInput class=\"form-control-sm date-input\" formControlName=\"startDate\" [min]=\"fromMinDate\" [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" readonly (dateChange)=\"doValid()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        <app-print-error [control]=\"controls.startDate\"></app-print-error>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label \">{{\"FORM.policy_expiry_date\" | translate}}</label>\n                <div class=\"col-sm-6\">\n                    <div class=\"input-group\">\n                        <input matInput class=\"form-control-sm date-input\" formControlName=\"endDate\" [min]=\"toMinDate\" [max]=\"toMaxDate\" [matDatepicker]=\"picker2\" readonly>\n                        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\n                        <app-print-error [control]=\"controls.endDate\"></app-print-error>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End date  -->\n    <!-- Policy Duration -->\n    <div class=\"row\" style=\"align-items: center;\">\n        <div class=\"col-sm-6\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label \">{{\"FORM.policy_duration\" | translate}}</label>\n                <div class=\"col-sm-6\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" name=\"policyDuration\" formControlName=\"policyDuration\" class=\"form-control form-control-sm\" (change)=\"doValid()\">\n                        <ng-select class=\"ng-custom-select\" (change)=\"updateValidation()\" [items]=\"durtaionOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"policyUnit\">\n                        </ng-select>\n\n                    </div>\n                    <app-print-error [control]=\"controls.policyDuration\" [validValue]=\"validValue\"></app-print-error>\n\n                </div>\n            </div>\n\n\n        </div>\n        <!-- /Policy Duration -->\n        <!-- Policy Type -->\n        <div class=\"col-sm-6\">\n            <section class=\"example-section\">\n                <div class=\"form-group row\">\n                    <label class=\"col-4\">{{\"FORM.policy_type\" | translate}}</label>\n                    <mat-radio-group formControlName=\"policyType\" class=\"col-8\">\n                        <mat-radio-button class=\"mx-1\" [value]=\"'T-NM'\" >Normal\n                        </mat-radio-button>\n                        <mat-radio-button class=\"mx-1\" [value]=\"'T-DM'\">Declaration\n                        </mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </section>\n        </div>\n        <!-- Policy Type -->\n\n    </div>\n\n    <div class=\"row\">\n        <!--  currency -->\n        <div class=\"col-sm-6\">\n            <section class=\"example-section\">\n                <div class=\"form-group row\">\n                    <label class=\"col-4\">{{\"FORM.currency\" | translate}}</label>\n                    <mat-radio-group formControlName=\"currency\" class=\"col-8\">\n                        <mat-radio-button class=\"mx-1\" [value]=\"'MMK'\">MMK\n                        </mat-radio-button>\n                        <mat-radio-button class=\"mx-1\" [value]=\"'USD'\">USD\n                        </mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </section>\n        </div>\n        <!--  currency -->\n\n    </div>\n</form>\n<div class=\"row mt-3\">\n    <div class=\"col-sm-6 mx-auto\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }}  </button>\n    </div>\n    <div class=\"col-sm-6 mx-auto\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n    </div>\n</div>\n\n<!--  \"Health Insurance\"\n\"Critical illness\"\n\"Surgery & Miscarriage\"\n\"Mediacal treatments\" -->";

/***/ }),

/***/ 81067:
/*!************************************************************************************!*\
  !*** ./src/app/pages/static-pages/health-quo/health-quo.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>\n        {{\"FORM.Coverages / Benefit\" | translate}}\n      </th>\n      <th>\n        {{\"FORM.Sum Insured\" | translate}}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of showData\">\n      <td>{{item.keyName == \"HEALTH\" ? \"Sum Insured of Main Cover\":item.keyName}}</td>\n      <td>{{item.value}} Units</td>\n    </tr>\n  </tbody>\n</table>\n<hr>\n<h5 class=\"\">Payment Schedules</h5>\n<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>\n        {{ \"TABLE.No of Installment\" | translate }}\n      </th>\n      <th style=\"text-align: right;\">\n        {{ \"TABLE.Premium\" | translate }}\n      </th>\n      <th style=\"text-align: right;\">\n        {{ \"TABLE.Levy\" | translate }}\n      </th>\n      <th style=\"text-align: right;\">\n        {{ \"TABLE.Total\" | translate }}\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"tbody-align\">\n    <tr *ngFor=\"let item of tempSchedule;let i =index\">\n      <td>{{i+1}}</td>\n      <td>{{item.premium | number:'1.2-2'}}</td>\n      <td>{{item.levy | number:'1.2-2'}}</td>\n      <td>{{(item.premium + item.levy) | number:'1.2-2'}}</td>\n    </tr>\n  </tbody>\n  <tfoot class=\"tbody-align\">\n    <tr>\n      <td><b>{{ \"TABLE.Total\" | translate }}</b></td>\n      <td>{{(parentData.paymentFrequency=='L'?totalP:totalSemi) | number:'1.2-2'}}</td>\n      <td>{{totalL| number:'1.2-2'}}</td>\n      <td>{{((parentData.paymentFrequency=='L'?totalP:totalSemi)+totalL) | number:'1.2-2'}}</td>\n    </tr>\n  </tfoot>\n</table>\n\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n  </div>\n</div>";

/***/ }),

/***/ 95428:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/static-pages/motor-addon/motor-addon.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"form-group\">\n    <div class=\"row\" style=\"align-items: center;\">\n        <div class=\"col-sm-6\">\n            <label class=\"col-sm-6 text-bold \">Optional Covers</label>\n        </div>\n    </div>\n    <hr>\n    <div>\n        <div class=\"row\" style=\"align-items: center;\">\n\n            <div class=\"col-sm-6\">\n                <label class=\"col-sm-6 text-bold left-border-image\">{{\"FORM.medical_expense\" | translate}}</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isMedical\" [color]=\"primary\" class=\"toggle ft-right\" (toggleChange)=\"toggleChange('medical')\"></mat-slide-toggle>\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"align-items: center; margin-top: 10px;\" *ngIf=\"isMedical\">\n            <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-8\">\n                        <ng-select class=\"ng-custom-select\" [(ngModel)]=\"planOption\" (change)=\"changePlan()\" [items]=\"planOptionOption\" bindLabel=\"value\" bindValue=\"code\">\n                        </ng-select>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <label class=\"col-sm-12  text-bold\">{{\"FORM.premium\" | translate}} : <span>{{medPremium}}</span></label>\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"align-items: center; margin-top: 10px;\">\n\n            <div class=\"col-sm-6\">\n                <label class=\"col-sm-6 text-bold left-border-image\">{{\"FORM.cross_border\" | translate}}</label>\n            </div>\n            <div class=\"col-sm-2\">\n                <mat-slide-toggle [(ngModel)]=\"isCross\" [color]=\"primary\" class=\"toggle ft-right\" (toggleChange)=\"toggleChange('cross')\"></mat-slide-toggle>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\" style=\"align-items: center; margin-top: 10px;\" *ngIf=\"isCross\">\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.start_date\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                    <div class=\"input-group input-group-sm \">\n                        <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" [(ngModel)]=\"startDate\" [matDatepicker]=\"start\" readonly>\n                        <mat-datepicker-toggle matSuffix [for]=\"start\"></mat-datepicker-toggle>\n                        <mat-datepicker #start disabled=\"false\"></mat-datepicker>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.end_date\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                    <div class=\"input-group input-group-sm \">\n                        <input matInput class=\"form-control-sm date-input\" style=\"width: 100%;\" [(ngModel)]=\"endDate\" [matDatepicker]=\"end\" readonly>\n                        <mat-datepicker-toggle matSuffix [for]=\"end\"></mat-datepicker-toggle>\n                        <mat-datepicker #end disabled=\"false\"></mat-datepicker>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" style=\"align-items: center; margin-top: 10px;\" *ngIf=\"isCross\">\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.source_place\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"option1\" autocomplete=\"off\" [disabled]=\"true\" [(ngModel)]=\"option1\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-4 col-form-label\">{{\"FORM.destination_place\" | translate}}</label>\n                <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"option2\" autocomplete=\"off\" [disabled]=\"true\" [(ngModel)]=\"option2\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-12  text-bold\">{{\"FORM.premium\" | translate}} : <span>{{crossPremium | number:'1.2-2'}}</span></label>\n            </div>\n        </div>\n    </div>\n</div>\n<hr>\n<div class=\"row\">\n    <div class=\"col-sm-6 mx-auto\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n    </div>\n    <div class=\"col-sm-6 mx-auto\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n    </div>\n</div>";

/***/ }),

/***/ 53123:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page-policy/simple-page-policy.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<form action=\"\" [formGroup]=\"staticForm\">\n  <!-- Start date -->\n  <div class=\"row\" style=\"align-items: center;\">\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \"> {{\"FORM.Period of Insurance\" | translate}}</label>\n        <div class=\"col-sm-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"insuranceStartDate\" [min]=\"fromMinDate\"\n              [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.insuranceStartDate\"></app-print-error>\n          </div>\n          <!-- <div class=\"input-group\">\n            <input type=\"text\" name=\"policy_date\" class=\"form-control form-control-sm \" autocomplete=\"off\"\n              placeholder=\"dd/mm/yyyy\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"fromMinDate\" [maxDate]=\"fromMaxDate\"\n              formControlName=\"insuranceStartDate\" (click)=\"d.toggle()\" readonly=\"true\" />\n            <div class=\"input-group-append\" (click)=\"d.toggle()\">\n              <span class=\"input-group-text\">\n                <i class=\"text-dark-50 flaticon-calendar\"></i>\n              </span>\n            </div>\n          </div>\n          <app-print-error [control]=\"controls.insuranceStartDate\"></app-print-error> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \">-</label>\n        <div class=\"col-sm-6\">\n          <!-- <div class=\"input-group\">\n            <input type=\"text\" name=\"policy_end_date\" class=\"form-control form-control-sm \" autocomplete=\"off\"\n              placeholder=\"dd/mm/yyyy\" ngbDatepicker #de=\"ngbDatepicker\" [minDate]=\"toMinDate\" [maxDate]=\"toMaxDate\"\n              formControlName=\"insuranceEndDate\" readonly=\"true\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">\n                <i class=\"text-dark-50 flaticon-calendar\"></i>\n              </span>\n            </div>\n          </div> -->\n          <!-- <app-print-error [control]=\"controls.insuranceStartDate\"></app-print-error> -->\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"insuranceEndDate\" [min]=\"toMinDate\"\n              [max]=\"toMaxDate\" [matDatepicker]=\"picker2\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"input-group\">\n        <input type=\"text\" name=\"policy_end_date\" class=\"form-control form-control-sm \" autocomplete=\"off\" placeholder=\"dd/mm/yyyy\"\n          ngbDatepicker #de=\"ngbDatepicker\" (click)=\"de.toggle()\" [minDate]=\"toMinDate\" [maxDate]=\"toMaxDate\"\n          formControlName=\"insuranceEndDate\" readonly=\"true\" />\n        <div class=\"input-group-append\" (click)=\"de.toggle()\">\n          <span class=\"input-group-text\">\n            <i class=\"text-dark-50 flaticon-calendar\"></i>\n          </span>\n        </div>\n      </div>\n      <app-print-error [control]=\"controls.insuranceEndDate\"></app-print-error> -->\n    </div>\n  </div>\n  <!-- End date  -->\n\n\n\n  <div class=\"row\" style=\"align-items: center;\">\n    <!-- BC -->\n    <div class=\"col-6\">\n      <section class=\"example-section\">\n        <div class=\"form-group row\">\n          <label class=\"col-4\"> {{\"FORM.Basic Cover\" | translate}}</label>\n          <mat-radio-group formControlName=\"basicCoverId\" class=\"col-8\">\n            <!-- *ngFor=\"let item of options\" {{item.premiumStr}} -->\n            <!-- <mat-radio-button class=\"mx-1\" *ngFor=\"let item of options\" [value]=\"item.id\"> {{item.premiumStr}}\n            </mat-radio-button> -->\n            <mat-radio-button class=\"mx-1\" [value]=\"'HEALTH'\">Health Insurance\n            </mat-radio-button>\n            <mat-radio-button class=\"mx-1\" *ngIf=\"currentAge < 60\" [value]=\"'CRTILLNESS'\">Critical Illness\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </section>\n    </div>\n    <!-- BC -->\n    <!-- DOB -->\n    <!-- <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Date of Birth</label>\n        <div class=\"col-6\">\n          \n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"dateOfBirth\" [min]=\"dobMinDate\" [max]=\"dobMaxDate\"\n              [matDatepicker]=\"picker3\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n            <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.dateOfBirth\"></app-print-error>\n          </div>\n        </div>\n\n      </div>\n    </div> -->\n    <!-- DOB -->\n  </div>\n\n  <div class=\"row\">\n    <!--  Payment Frequency -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\"> {{\"FORM.Payment Frequency\" | translate}}</label>\n        <div class=\"col-6\">\n          <select name=\"payment_frequency\" formControlName=\"paymentFrequency\" class=\"form-control form-control-sm\">\n            <option [value]=\"null\">Please Select Payment Frequency</option>\n            <option value=\"L\">Lump Sum</option>\n            <option value=\"S\">Semi-Annually</option>\n          </select>\n          <app-print-error [control]=\"controls.paymentFrequency\"></app-print-error>\n\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n    <!--  Payment Frequency -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\"> {{\"FORM.Sum Insured of Main Cover\" | translate}}</label>\n        <div class=\"col-6\">\n          <select name=\"sumInsuredMainCover\" formControlName=\"sumInsuredMainCover\" class=\"form-control form-control-sm\">\n            <option [value]=\"null\">Please Select Sum Insured</option>\n            <option *ngFor=\"let item of options3\" [value]=\"item\">{{item}} Unit{{item > 1 ? \"s\" : \"\"}}</option>\n          </select>\n          <app-print-error [control]=\"controls.sumInsuredMainCover\"></app-print-error>\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n  </div>\n\n  <div class=\"row\" *ngIf=\"controls.basicCoverId.value == 'CRTILLNESS'\">\n    <!--  Medical Card No -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\"> {{\"FORM.Medical Card No.\" | translate}}</label>\n        <div class=\"col-6\">\n          <input type=\"text\" name=\"medicalCardNo\" formControlName=\"medicalCardNo\" class=\"form-control form-control-sm\">\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n  </div>\n  <!-- <hr> value=\"{{item.id}}\">-->\n\n</form>\n<div class=\"row mt-3\">\n  <div class=\"col-12\">\n    <h5 style=\"border-bottom: 1px solid rgba(0, 0, 0, 0.1);padding: 20px 0px;\">Product And Riders</h5>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>\n            Plan\n          </th>\n          <th>\n            Sum Assured\n          </th>\n          <th>\n            Coverage Term\n          </th>\n          <th>\n            Payment Term\n          </th>\n          <th>\n            Premium\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of tempArray\">\n          <td>{{item.plan | titlecase}}</td>\n          <td>{{item.sumInsured}} Unit{{item.sumInsured > 1 ? \"s\":\"\"}}</td>\n          <td>{{item.coverage == \"HEALTH\" ? \"Health\" : item.coverage == \"TRMTS\" ? \"Medical treatments in clinic or hospital\" : \"Surgery and Miscarriage\"}}</td>\n          <td>{{(policyTerm[item.paymentTerm] || item.paymentTerm) != \"S\" ? \"Lump Sum\" : \"Semi-Annually\"}}</td>\n          <td>{{item.premium | number}} </td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <td><b>Total</b></td>\n          <td>{{totalResult.unit}} Unit{{totalResult.unit > 1 ? \"s\":\"\"}}</td>\n          <td></td>\n          <td></td>\n          <td>{{totalResult.premium | number}}</td>\n        </tr>\n      </tfoot>\n    </table>\n\n  </div>\n</div>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n  </div>\n</div>\n\n<!--  \"Health Insurance\"\n\"Critical illness\"\n\"Surgery & Miscarriage\"\n\"Mediacal treatments\" -->";

/***/ }),

/***/ 41900:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/static-pages/simple-page/simple-page.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<form action=\"\" [formGroup]=\"staticForm\">\n  <!-- Start date -->\n  <div class=\"row\" style=\"align-items: center;\">\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \"> {{\"FORM.Period of Insurance\" | translate}}</label>\n        <div class=\"col-sm-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"insuranceStartDate\" [min]=\"fromMinDate\"\n              [max]=\"fromMaxDate\" [matDatepicker]=\"picker\" readonly (dateChange)=\"doValid()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.insuranceStartDate\"></app-print-error>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label \">-</label>\n        <div class=\"col-sm-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"insuranceEndDate\" [min]=\"toMinDate\"\n              [max]=\"toMaxDate\" [matDatepicker]=\"picker2\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End date  -->\n\n  <div class=\"row\" style=\"align-items: center;\">\n    <!-- BC -->\n    <div class=\"col-6\">\n      <section class=\"example-section\">\n        <div class=\"form-group row\">\n          <label class=\"col-4\"> {{\"FORM.Basic Cover\" | translate}}</label>\n          <mat-radio-group formControlName=\"basicCoverId\" class=\"col-8\" (change)=\"radioChange($event)\" >\n            <mat-radio-button class=\"mx-1\" [value]=\"'HEALTH'\">Health Insurance\n            </mat-radio-button>\n            <mat-radio-button class=\"mx-1\" *ngIf=\"currentAge < 60\"  [value]=\"'CRTILLNESS'\">Critical Illness\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </section>\n    </div>\n    <!-- BC -->\n    <!-- DOB -->\n    <!-- <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\">Date of Birth</label>\n        <div class=\"col-6\">\n          <div class=\"input-group\">\n            <input matInput class=\"form-control-sm date-input\" formControlName=\"dateOfBirth\" [min]=\"dobMinDate\" [max]=\"dobMaxDate\"\n              [matDatepicker]=\"picker3\" readonly>\n            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n            <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n            <app-print-error [control]=\"controls.dateOfBirth\"></app-print-error>\n          </div>\n        </div>\n\n      </div>\n    </div> -->\n    <!-- DOB -->\n  </div>\n\n  <div class=\"row\">\n    <!--  Payment Frequency -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\"> {{\"FORM.Payment Frequency\" | translate}}</label>\n        <div class=\"col-6\">\n          <select name=\"payment_frequency\" formControlName=\"paymentFrequency\" class=\"form-control form-control-sm\">\n            <option [value]=\"null\">Please Select Payment Frequency</option>\n            <option value=\"L\">Lump Sum</option>\n            <option value=\"S\">Semi-Annually</option>\n          </select>\n          <app-print-error [control]=\"controls.paymentFrequency\"></app-print-error>\n\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n    <!--  Payment Frequency -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\"> {{\"FORM.Sum Insured of Main Cover\" | translate}}</label>\n        <div class=\"col-6\">\n          <select name=\"sumInsuredMainCover\" formControlName=\"sumInsuredMainCover\" class=\"form-control form-control-sm\"\n            (change)=\"getUnitOption()\">\n            <option [value]=\"null\">Please Select Sum Insured</option>\n            <option *ngFor=\"let item of options3\" [value]=\"item\">{{item}} Unit{{item > 1 ? \"s\": \"\"}}</option>\n          </select>\n          <app-print-error [control]=\"controls.sumInsuredMainCover\"></app-print-error>\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n  </div>\n\n  <div class=\"row\" *ngIf=\"controls.basicCoverId.value == 'CRTILLNESS'\">\n    <!--  Medical Card No -->\n    <div class=\"col-6\">\n      <div class=\"form-group row\">\n        <label class=\"col-4 col-form-label\"> {{\"FORM.Medical Card No.\" | translate}}</label>\n        <div class=\"col-6\">\n          <input type=\"text\" name=\"medicalCardNo\" formControlName=\"medicalCardNo\" class=\"form-control form-control-sm\">\n          <app-print-error [control]=\"controls.medicalCardNo\"></app-print-error>\n        </div>\n      </div>\n    </div>\n    <!--  Payment Frequency -->\n  </div>\n  <!-- <hr> value=\"{{item.id}}\">-->\n  <ng-container *ngIf=\"controls.basicCoverId.value == 'HEALTH'\">\n    <div class=\"row mt-5\">\n      <div class=\"col-12\">\n        <h5 style=\"border-bottom: 1px solid rgba(0, 0, 0, 0.1);padding: 20px 0px;\">Optional Cover</h5>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"form-group row\" *ngFor=\"let item of options2\" style=\"align-items: center;\">\n          <label class=\"col-4 col-form-label\">{{item.description}}</label>\n          <div class=\"col-2\">\n            <span class=\"switch switch-icon\">\n              <label>\n                <input type=\"checkbox\" name=\"{{item.description}}\" [(ngModel)]=\"addOns[item.id+'opt']\"\n                  [ngModelOptions]=\"{standalone: true}\" />\n                <span></span>\n              </label>\n            </span>\n          </div>\n          <div class=\"col-6\" *ngIf=\"addOns[item.id+'opt']\">\n            <div class=\"row\">\n              <label class=\"col-6 col-form-label\">Sum Insured</label>\n              <div class=\"col-6\">\n                <select [(ngModel)]=\"addOns[item.id+'value']\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"form-control form-control-sm\">\n                  <option *ngFor=\"let item of options4\" [value]=\"item\">{{item}} Unit{{item > 1 ? \"s\": \"\"}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</form>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n  </div>\n</div>\n\n<!--  \"Health Insurance\"\n\"Critical illness\"\n\"Surgery & Miscarriage\"\n\"Mediacal treatments\" -->";

/***/ }),

/***/ 48260:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-building.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n    <div class=\"row\" style=\"align-items: center; margin: 10px 0px;\">\n\n        <div class=\"col-sm-8\">\n            <label class=\"col-sm-6  left-border-image\">Surrounding Building </label>\n        </div>\n        <div class=\"col-sm-4\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm mx-2 ft-right\" (click)=\"add('create')\">Add New Data</button>\n        </div>\n    </div>\n    <div class=\"table-responsive angular-bootstrap-table\">\n        <table class=\"table table-head-custom table-vertical-center\">\n            <thead>\n                <tr>\n                    <th>Building Description</th>\n                    <th>Type of Building</th>\n                    <th>Occupation</th>\n                    <th>Class</th>\n                    <th>Premium Rate</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"surrounding.length>0\">\n                <tr *ngFor=\"let data of surrounding\">\n                    <th>\n                        {{data.buildingDescription}}\n                    </th>\n                    <th>\n                        {{data.typeOfBuildingValue}}\n                    </th>\n                    <th>\n                        {{data.occupationOfBuildingValue}}\n                    </th>\n                    <th>\n                        {{data.buildingClassValue}}\n                    </th>\n                    <th>\n                        {{data.premiumRate}}\n                    </th>\n                    <th>\n                        <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit')\">\n                            <span class=\"flaticon-edit\"></span>\n                        </a>\n                        <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete')\">\n                            <span class=\"flaticon-delete\"></span>\n                        </a>\n                    </th>\n                </tr>\n            </tbody>\n\n\n        </table>\n    </div>";

/***/ }),

/***/ 1956:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/surrounding-building/surrounding-detail/surrounding-detail.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n            Surrounding Detail\n        </div>\n    </div>\n\n    <form action=\"#\" class=\"form\" [formGroup]=\"surroundingdetailform\" (ngSubmit)=\"createSurrounding()\">\n        <div class=\"overlay overlay-block cursor-default modal-body\">\n\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">{{\"FORM.building_description\" | translate }}</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control form-control-sm \" name=\"buildingDescription\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('buildingDescription')\" [class.is-valid]=\"isControlValid('buildingDescription')\" formControlName=\"buildingDescription\"\n                            />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">{{\"FORM.type_of_building\" | translate }}</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select class=\"ng-custom-select\" (change)=\"changeType('child')\" [class.is-invalid]=\"isControlInvalid('typeOfBuilding')\" [class.is-valid]=\"isControlValid('typeOfBuilding')\" [items]=\"typeOfBuildingOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"typeOfBuilding\">\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">{{\"FORM.occupation_of_building\" | translate }}</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select class=\"ng-custom-select\" (change)=\"changeOccuption()\" [class.is-invalid]=\"isControlInvalid('occupationOfBuilding')\" [class.is-valid]=\"isControlValid('occupationOfBuilding')\" [items]=\"occupationOfBuildingOption\" bindLabel=\"value\" bindValue=\"code\"\n                                formControlName=\"occupationOfBuilding\">\n                            </ng-select>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">{{\"FORM.building_class\" | translate }}</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select class=\"ng-custom-select\" (change)=\"changeClass()\" [class.is-invalid]=\"isControlInvalid('buildingClass')\" [class.is-valid]=\"isControlValid('buildingClass')\" [items]=\"buildingClassOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"buildingClass\">\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"align-items: center\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">{{\"FORM.distance_to_building_feet\" | translate }}</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" class=\"form-control form-control-sm \" name=\"distanceToBuilding\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('distanceToBuilding')\" [class.is-valid]=\"isControlValid('distanceToBuilding')\" max=\"100\" formControlName=\"distanceToBuilding\"\n                            />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-4 col-form-label\">{{\"FORM.rate\" | translate }}</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" class=\"form-control form-control-sm \" name=\"premiumRate\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('premiumRate')\" [class.is-valid]=\"isControlValid('premiumRate')\" formControlName=\"premiumRate\" />\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light btn-sm btn-elevate mr-2\" (click)=\"dismissModal()\">{{\"FORM.btn_cancel\" | translate }}</button>\n            <button type=\"submit\" class=\"btn btn-primary btn-sm btn-elevate\">{{\"FORM.btn_save\" | translate }}</button>\n        </div>\n    </form>\n\n</div>";

/***/ }),

/***/ 10669:
/*!****************************************************************************!*\
  !*** ./src/app/pages/static-pages/tables/tables.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"table-responsive angular-bootstrap-table\">\n    <table class=\"table table-head-custom table-vertical-center\">\n        <thead *ngIf=\"contents\">\n            <tr>\n                <th>Item Name</th>\n                <th>Item Description</th>\n                <th style=\"text-align: right;\">Value per Quantity</th>\n                <th>Quantity</th>\n                <th style=\"text-align: right;\">Total Value</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"tableData.length>0 && contents\">\n            <tr *ngFor=\"let data of tableData\">\n                <th>\n                    {{data.itemName}}\n                </th>\n                <th>\n                    {{data.itemDescription}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.valuePerQuantity | number}}\n                </th>\n                <th>\n                    {{data.quantity}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.totalValue | number}}\n                </th>\n                <th>\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit','content')\">\n                        <span class=\"flaticon-edit\"></span>\n                    </a>\n                    <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete','content')\">\n                        <span class=\"flaticon-delete\"></span>\n                    </a>\n                </th>\n            </tr>\n        </tbody>\n\n        <thead *ngIf=\"plant\">\n            <tr>\n                <th>Item Name</th>\n                <th>Item Description</th>\n                <th style=\"text-align: right;\">Value per Quantity</th>\n                <th style=\"text-align: right;\">Quantity</th>\n                <th style=\"text-align: right;\">Total Value</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"tableData.length>0 && plant\">\n            <tr *ngFor=\"let data of tableData\">\n                <th>\n                    {{data.itemName}}\n                </th>\n                <th>\n                    {{data.itemDescription}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.valuePerQuantity | number}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.quantity}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.totalValue | number}}\n                </th>\n                <th>\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit','plant')\">\n                        <span class=\"flaticon-edit\"></span>\n                    </a>\n                    <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete','plant')\">\n                        <span class=\"flaticon-delete\"></span>\n                    </a>\n                </th>\n            </tr>\n        </tbody>\n        <thead *ngIf=\"stock\">\n            <tr>\n                <th>Month</th>\n                <th>Description</th>\n                <th style=\"text-align: right;\">Stock Value</th>\n                <th style=\"text-align: right;\">Agreed SI</th>\n                <th>Remarks</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody *ngIf=\"tableData.length>0 && stock\">\n            <tr *ngFor=\"let data of tableData\">\n                <th>\n                    {{data.month}}\n                </th>\n                <th>\n                    {{data.description}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.stockValue | number}}\n                </th>\n                <th style=\"text-align: right;\">\n                    {{data.agreedSi | number}}\n                </th>\n                <th>\n                    {{data.remark}}\n                </th>\n                <th>\n                    <a title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'edit','stock')\">\n                        <span class=\"flaticon-edit\"></span>\n                    </a>\n                    <a title=\"Delete Form Page\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"onActionView(data,'delete','stock')\">\n                        <span class=\"flaticon-delete\"></span>\n                    </a>\n                </th>\n            </tr>\n        </tbody>\n    </table>\n</div>";

/***/ }),

/***/ 73561:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/static-pages/travel-page/travel-page.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"form-group\">\n  <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"newData('add')\">{{\"FORM.add_new_data\" | translate }}</button>\n</div>\n<div class=\"table-responsive angular-bootstrap-table\">\n  <table class=\"table table-head-custom table-vertical-center\">\n      <thead>\n          <tr>\n              <th>{{\"FORM.risk_no\" | translate }}</th>\n              <th>{{\"FORM.travel_plan\" | translate }}</th>\n              <th>{{\"FORM.insured_unit\" | translate }}</th>\n              <th>{{\"FORM.travel_duration\" | translate }}</th>\n              <th>{{\"FORM.no_of_traveler\" | translate }}</th>\n              <th>{{\"FORM.total_unit\" | translate }}</th>\n              <th>{{\"FORM.traveler_name\" | translate }}</th>\n              <th>{{\"FORM.premium\" | translate }}</th>\n              <th>{{\"FORM.action\" | translate }}</th>\n          </tr>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let item of listData;let i = index\">\n              <tr>\n                <td>{{i+ 1}}</td>\n                <td>{{replaceT(item.travelPlan) | titlecase}}</td>\n                <td>{{replaceTInsured(item.insuredUnit)}}</td>\n                <td>{{replaceT(item.travelDuration) | titlecase}}</td>\n                <td>{{item.noOfTraveller}}</td>\n                <td>{{item.totalUnit}}</td>\n                <td>{{item.travellerName}}</td>\n                <td>{{item.premium | number:'1.2-2'}}</td>\n                  <td>\n                      <a title=\"Edit\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"newData('edit',item)\">\n                          <span class=\"flaticon-edit\"></span>\n                      </a>\n                      <a title=\"Delete\" class=\"btn btn-danger btn-cus btn-sm mx-1\" (click)=\"delete(i)\">\n                          <span class=\"flaticon-delete\"></span>\n                      </a>\n                  </td>\n              </tr>\n          </ng-container>\n      </tbody>\n  </table>\n</div>\n<div class=\"row mt-3\">\n  <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-secondary\" (click)=\"backPage()\"> {{\"FORM.btn_previous\" | translate }} </button>\n  </div>\n  <div class=\"col-sm-6 mx-auto\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"nextPage()\"> {{\"FORM.btn_save_and_next\" | translate }} </button>\n  </div>\n</div>";

/***/ }),

/***/ 60040:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/static-pages/travel-page/travel-risk-detail/travel-risk-detail.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n            Travel\n        </div>\n\n    </div>\n    <div class=\"overlay overlay-block cursor-default modal-body\">\n        <div class=\"toggle-box\" *ngIf=\"prodDetailForm\">\n            <div class=\"toggle-header\">\n                <h4 class=\"left-border-image\">{{prodDetailForm.pageTitle}}</h4>\n                <div class=\"tool-box\">\n                    <button type=\"button\" *ngIf=\"activeBox=='DETAIL'\" class=\"icon\" (click)=\"toggleAccordion('DETAIL')\">\n                        <span class=\"flaticon2-back\"></span>\n                    </button>\n                    <button type=\"button\" *ngIf=\"activeBox!='DETAIL'\" class=\"icon ml-2\"\n                        (click)=\"toggleAccordion('DETAIL')\">\n                        <span class=\"flaticon2-down\"></span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"toggle-body\" [ngClass]=\"activeBox=='DETAIL' ? 'active' : 'inactive'\">\n                <dynamic-form #dynForm [tempData]=\"tempData['travelDetail'] || {}\" [config]=\"prodDetailForm.controls\"\n                    (submit)=\"saveDetailTemp($event)\" [editStage]=\"false\">\n                </dynamic-form>\n                <div class=\"form-footer\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"saveData(dynForm,prodDetailForm)\">{{\"FORM.btn_next\" | translate }}</button>\n                </div>\n            </div>\n\n            <!--  -->\n        </div>\n\n        <div class=\"toggle-box\" *ngIf=\"travelerForm\">\n            <div class=\"toggle-header\">\n                <h4 class=\"left-border-image\">{{travelerForm.pageTitle}}</h4>\n                <div class=\"tool-box\">\n                    <button type=\"button\" [disabled]=\"!stepData.step1\" *ngIf=\"activeBox=='TRAVELER'\" class=\"icon\"\n                        (click)=\"toggleAccordion('TRAVELER')\">\n                        <span class=\"flaticon2-back\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!stepData.step1\" *ngIf=\"activeBox!='TRAVELER'\" class=\"icon ml-2\"\n                        (click)=\"toggleAccordion('TRAVELER')\">\n                        <span class=\"flaticon2-down\"></span>\n                    </button>\n                </div>\n            </div>\n            <ng-container *ngIf=\"stepData.step1\">\n                <div class=\"toggle-body\" [ngClass]=\"activeBox=='TRAVELER' ? 'active' : 'inactive'\">\n                    <dynamic-form #dynFormTraveler [tempData]=\"tempData['traveler'] || {}\"\n                        [config]=\"travelerForm.controls\" (submit)=\"saveTravelerTemp($event)\" [editStage]=\"false\">\n                    </dynamic-form>\n                    <div class=\"form-footer\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-elevate\"\n                            (click)=\"saveData(dynFormTraveler,travelerForm)\">{{\"FORM.btn_next\" | translate }}</button>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n\n        <div class=\"toggle-box\" *ngIf=\"benefiForm\">\n            <div class=\"toggle-header\">\n                <h4 class=\"left-border-image\">{{benefiForm.pageTitle}}</h4>\n                <div class=\"tool-box\">\n                    <button type=\"button\" [disabled]=\"!stepData.step2\" *ngIf=\"activeBox=='BENEFI'\" class=\"icon\"\n                        (click)=\"toggleAccordion('BENEFI')\">\n                        <span class=\"flaticon2-back\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!stepData.step2\" *ngIf=\"activeBox!='BENEFI'\" class=\"icon ml-2\"\n                        (click)=\"toggleAccordion('BENEFI')\">\n                        <span class=\"flaticon2-down\"></span>\n                    </button>\n                </div>\n            </div>\n            <ng-container *ngIf=\"stepData.step2\">\n                <div class=\"toggle-body\" [ngClass]=\"activeBox=='BENEFI' ? 'active' : 'inactive'\">\n                    <div class=\"form-group\">\n                        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"reset()\">Reset Data</button> -->\n                        <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"newData()\">{{\"FORM.add_new_data\" | translate }}</button>\n                      </div>\n                      <hr>\n                      <div class=\"table-responsive angular-bootstrap-table\">\n                        <table class=\"table table-head-custom table-vertical-center\">\n                          <thead>\n                            <tr>\n                              <th>{{\"TABLE.No\" | translate}}</th>\n                              <ng-container *ngFor=\"let item of tableReform\">\n                                <th>{{\"TABLE.\"+item.title | translate}}</th>\n                              </ng-container>\n                              <th>{{\"TABLE.Action\" | translate}}</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <ng-container *ngIf=\"tempData['benefi']\">\n                              <tr\n                                *ngFor=\"let item of tempData['benefi'];let i = index\">\n                                <td>{{i+1}}</td>\n                                <ng-container *ngFor=\"let control of tableReform\">\n      \n                                  <td *ngIf=\"control.type != 'file'\">{{ getOtherData(control.cols,item)}}</td>\n                                  <td *ngIf=\"control.type == 'file'\">\n                                    <a href=\"javascript:;\" (click)=\"download(control.cols,item)\">\n                                      {{getOtherData(control.cols,item)}}\n                                    </a>\n                                  </td>\n                                </ng-container>\n                                <td style=\"white-space: nowrap;\">\n                                  <a title=\"Edit Data\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm mx-1\"\n                                    (click)=\"newData(item,i)\">\n                                    <span [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\" [cacheSVG]=\"true\"\n                                      class=\"svg-icon svg-icon-md svg-icon-primary\">\n                                    </span>\n                                  </a>\n                                  <a title=\"Delete UI\" class=\"btn btn-icon btn-light btn-hover-danger btn-sm\"\n                                    (click)=\"deleteData(i,item)\">\n                                    <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\n                                      class=\"svg-icon svg-icon-md svg-icon-danger\">\n                                    </span>\n                                  </a>\n                                </td>\n                              </tr>\n                            </ng-container>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div class=\"form-footer\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-elevate\"\n                            (click)=\"nextCover()\">{{\"FORM.btn_next\" | translate }}</button>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n\n        <div class=\"toggle-box\">\n            <div class=\"toggle-header\">\n                <h4 class=\"left-border-image\">Cover Details</h4>\n                <div class=\"tool-box\">\n                    <button type=\"button\" [disabled]=\"!stepData.step3\" *ngIf=\"activeBox=='COVER'\" class=\"icon\"\n                        (click)=\"toggleAccordion('COVER')\">\n                        <span class=\"flaticon2-back\"></span>\n                    </button>\n                    <button type=\"button\" [disabled]=\"!stepData.step3\" *ngIf=\"activeBox!='COVER'\" class=\"icon ml-2\"\n                        (click)=\"toggleAccordion('COVER')\">\n                        <span class=\"flaticon2-down\"></span>\n                    </button>\n                </div>\n            </div>\n            <ng-container *ngIf=\"stepData.step3\">\n                <div class=\"toggle-body\" [ngClass]=\"activeBox=='COVER' ? 'active' : 'inactive'\">\n                    <app-coverage-page [product]=\"product\" [isPopup]=\"true\" [optionId]=\"oldData.id\" [editData]=\"editData\"\n                        [resourcesId]=\"resourceId\"(actionEvent)=\"coverDone()\"></app-coverage-page>\n                </div>\n            </ng-container>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n        <!-- [disabled]=\"validCancel\" -->\n        <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" \n            (click)=\"closeModal()\">{{\"FORM.btn_cancel\" | translate }}</button>\n        <button type=\"button\" class=\"btn btn-primary btn-elevate\" [disabled]=\"!stepData.step4\"\n            (click)=\"calPremimun()\">{{\"FORM.btn_save\" | translate }}</button>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_static-pages_static-pages_module_ts.js.map