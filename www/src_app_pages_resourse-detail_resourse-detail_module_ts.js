"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_resourse-detail_resourse-detail_module_ts"],{

/***/ 31241:
/*!*****************************************!*\
  !*** ./src/app/core/master-data-map.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMasterValue": () => (/* binding */ getMasterValue)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 49566);


function getMasterValue(masterServer, response, column, editing = false) {
    if (Array.isArray(response) && response.length > 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(response).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
            let masterPost = [];
            let resource = result.map((res) => {
                let masterObj = res.data.filter(x => (x.value + "").startsWith("T-") || (x.value + "").startsWith("TA-"));
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
                            if ((x.value + "").startsWith("T-") || (x.value + "").startsWith("TA-")) {
                                let columnName = column.find(col => col.name == x.column);
                                let index = masterValues.findIndex(master => master.codeId == x.value && columnName.masterData == master.codeType);
                                if (index >= 0) {
                                    if (editing) {
                                        return [x, { column: x.column + "Value", value: masterValues[index].codeName }];
                                    }
                                    else {
                                        x.value = masterValues[index].codeName;
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

/***/ 9628:
/*!*********************************************************!*\
  !*** ./src/app/pages/product-form/page-data.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDataService": () => (/* binding */ PageDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 49566);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 91691);
/* harmony import */ var _core_master_data_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/master-data-map */ 31241);
/* harmony import */ var _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/master-data/master-data.service */ 26697);









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
};
PageDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _modules_master_data_master_data_service__WEBPACK_IMPORTED_MODULE_3__.MasterDataService }
];
PageDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], PageDataService);



/***/ }),

/***/ 99293:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/products/print-preview-modal/print-preview-modal.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintPreviewModalComponent": () => (/* binding */ PrintPreviewModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_print_preview_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./print-preview-modal.component.html */ 69965);
/* harmony import */ var _print_preview_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-preview-modal.component.scss */ 91598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);





let PrintPreviewModalComponent = class PrintPreviewModalComponent {
    constructor(modal, cdRef) {
        this.modal = modal;
        this.cdRef = cdRef;
        this.configData = [];
        this.product = {};
        this.configOrder = [];
        this.tempData = {};
        this.resourcesId = "";
    }
    ngOnInit() {
    }
    ngOnDestroy() { }
    printPDf() {
        window.scrollTo(0, 0);
        window.print();
        // const printContent = document.getElementById("componentID").cloneNode(true);;
        // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        // WindowPrt.document.body.append(printContent);
        // WindowPrt.document.close();
        // WindowPrt.focus();
        // WindowPrt.print();
        // WindowPrt.close();
    }
};
PrintPreviewModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
PrintPreviewModalComponent.propDecorators = {
    configData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    configOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    tempData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    resourcesId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PrintPreviewModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-print-preview-modal',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_print_preview_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_print_preview_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrintPreviewModalComponent);



/***/ }),

/***/ 34241:
/*!********************************************************************!*\
  !*** ./src/app/pages/resourse-detail/resourse-detail.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourseDetailComponent": () => (/* binding */ ResourseDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_resourse_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./resourse-detail.component.html */ 64090);
/* harmony import */ var _resourse_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resourse-detail.component.scss */ 59489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/core/services/attachment-data.service */ 63002);
/* harmony import */ var _check_parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-parent */ 87952);
/* harmony import */ var _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-form/page-data.service */ 9628);
/* harmony import */ var _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products/models/product.dto */ 1402);
/* harmony import */ var _products_print_preview_modal_print_preview_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products/print-preview-modal/print-preview-modal.component */ 99293);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../products/services/coverage-quo.service */ 45570);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/services/products-data.service */ 35618);















let ResourseDetailComponent = class ResourseDetailComponent {
    constructor(productService, location, pageDataService, addonQuo, coverageQuo, router, cdf, downloadService, numberPipe, datePipe, modalService) {
        this.productService = productService;
        this.location = location;
        this.pageDataService = pageDataService;
        this.addonQuo = addonQuo;
        this.coverageQuo = coverageQuo;
        this.router = router;
        this.cdf = cdf;
        this.downloadService = downloadService;
        this.numberPipe = numberPipe;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.resultObj = {};
        this.Object = Object;
        this.Array = Array;
        this.coverage = {
            sumInsured: false,
            unit: false,
            premium: false,
        };
        this.addon = {
            sumInsured: false,
            unit: false,
            premium: false,
        };
        this.coverageData = {};
        this.addOnData = {};
        this.resourceDetail = {};
        this.detailInput = {};
        this.formatedData = {};
        this.printConfig = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.productService.createingProd || !this.productService.createingProd.id) {
                this.location.back();
            }
            else {
                this.item = this.productService.createingProd;
                this.type = this.productService.previewType;
                this.resourceDetail = this.productService.editData;
                if (!this.resourceDetail) {
                    this.location.back();
                    return;
                }
                let pageUI = JSON.parse(this.item.config);
                if (this.productService.previewType == 'quotation') {
                    this.pageOrder = pageUI.quotation || [];
                    this.detailInput = pageUI.quotation_input || {};
                }
                else {
                    this.pageOrder = pageUI.application || [];
                    this.detailInput = pageUI.application_input || {};
                }
                let dumType = this.type == 'policy' ? 'application' : this.type;
                let tempFormData = this.item.productUIs.map(x => {
                    if (x.type == dumType)
                        return JSON.parse(x.dynamicProduct.config);
                });
                // if (this.productService.resultData) {
                //   this.resultObj = this.productService.resultData
                //   this.rechangePageData(tempFormData)
                // } else {
                this.printConfig = JSON.parse(this.item.pdfConfig);
                this.item = this.productService.createingProd;
                this.getDetail(tempFormData);
                // }
                // if (this.item.coverages && this.item.coverages.length > 0) {
                //   this.coverage = {
                //     sumInsured: this.item.coverages[0].sumInsured,
                //     unit: this.item.coverages[0].unit,
                //     premium: this.item.coverages[0].premium,
                //   }
                //   for (const item of this.item.coverages) {
                //     let response: any = {};
                //     try {
                //       if (this.resourceDetail) {
                //         response = await this.coverageQuo.getOne(item.id, this.resourceDetail.id).toPromise()
                //       }
                //     } catch (error) {
                //     }
                //     this.coverageData[item.id] = {
                //       sum: response ? response.sumInsured || 0 : 0,
                //       unit: response ? response.unit || 0 : 0,
                //       premium: response ? response.premium || 0 : 0
                //     }
                //   }
                // }
                // if (this.item.addOns && this.item.addOns.length > 0) {
                //   this.addon = {
                //     sumInsured: this.item.addOns[0].sumInsured,
                //     unit: this.item.addOns[0].unit,
                //     premium: this.item.addOns[0].premium,
                //   }
                //   for (const item of this.item.addOns) {
                //     let response: any = {};
                //     try {
                //       if (this.resourceDetail) {
                //         response = await this.addonQuo.getOne(item.id, this.resourceDetail.id).toPromise()
                //       }
                //     } catch (error) {
                //     }
                //     this.addOnData[item.id] = {
                //       sum: response ? response.sumInsured || 0 : 0,
                //       unit: response ? response.unit || 0 : 0,
                //       premium: response ? response.premium || 0 : 0
                //     }
                //   }
                // }
                this.cdf.detectChanges();
            }
        });
    }
    ngOnDestroy() {
        this.productService.createingProd = null;
        this.productService.editData = null;
    }
    getDetail(tempFormData) {
        this.getOldData(this.resourceDetail, tempFormData);
    }
    getOldData(oldData, tempFormData) {
        let index = 0;
        // this.pageOrder.forEach((element) => {
        // let lengthData = this.pageOrder.filter(x => x.type == PageUIType.DYN).length
        let lengthData = this.pageOrder.length;
        for (let element of this.pageOrder) {
            if (element.type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_5__.PageUIType.DYN) {
                let page = this.findPageValue(tempFormData, element.id);
                this.pageOrder[index].tableName = page.tableName;
                this.pageOrder[index].id = page.id;
                this.pageOrder[index].controls = page.controls;
                this.pageDataService.getDetail(page.tableName, oldData.id, page.id, true, page.controls).toPromise().then((res) => {
                    if (res) {
                        let temp = page.pageType == 'form' ? {} : [];
                        for (const data of res) {
                            let tmpObj = {};
                            for (const item of data.data) {
                                if (item.column != 'id' && item.column != 'created_at' && item.column != 'updated_at')
                                    tmpObj[item.column] = item.value;
                            }
                            if (Array.isArray(temp)) {
                                temp.push(tmpObj);
                            }
                            else {
                                temp = tmpObj;
                            }
                        }
                        ;
                        this.resultObj[page.tableName + page.id] = temp;
                        this.formatedData = JSON.parse(JSON.stringify(this.resultObj));
                        if (lengthData == index) {
                            this.cdf.detectChanges();
                        }
                    }
                });
            }
            index += 1;
        }
        this.cdf.detectChanges();
        // });
    }
    download(cols, data) {
        let value = this.getOtherData(cols, data);
        if (value) {
            let valueId = value.split("].")[0].replace("[", "");
            this.downloadService.getDownload(valueId, value);
        }
    }
    getFormatTable(controls) {
        // let tableReform = []
        // let parentArray: string[] = []
        // let tempControls: ConfigInput[] = JSON.parse(JSON.stringify(controls))
        // for (let x of tempControls) {
        //   let skip = false
        //   if (!x.isHideView) {
        //     if (x.dependency) {
        //       let index = parentArray.findIndex(data => data == x.dependency.parentName)
        //       if (index < 0) {
        //         parentArray.push(x.dependency.parentName)
        //       } else {
        //         skip = true
        //       }
        //       // parentArray.push()
        //     }
        //     if (!skip) {
        //       let tempObj = {
        //         title: x.label || x.name,
        //         cols: [x.name],
        //         parent: x.dependency ? x.dependency.parentName : ""
        //       }
        //       tableReform.push(tempObj)
        //     } else {
        //       let index = tableReform.findIndex(data => data.parent == x.dependency.parentName)
        //       if (index >= 0)
        //         tableReform[index].cols.push(x.name)
        //     }
        //     // return x
        //   }
        // }
        // return tableReform
        let tableReform = [];
        let parentArray = [];
        let tempControls = JSON.parse(JSON.stringify(controls));
        for (let x of tempControls) {
            x.options = x.options ? x.options : [];
            let skip = false;
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
                    // x.master == 'true' ? x.name + "Value" :
                }
                if (!skip) {
                    let tempName = x.name;
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
                    tableReform.push(tempObj);
                }
                else {
                    let index = tableReform.findIndex(data => data.parent == x.dependency.parentName);
                    if (index >= 0) {
                        let tempName = x.name;
                        let otherNameObj = {
                            name: tempName,
                            type: x.input,
                            subType: x.type,
                            options: (x.master == "false" || x.master == false) && x.options.length > 0 ? x.options : []
                        };
                        tableReform[index].cols.push(otherNameObj);
                    }
                }
                // return x
            }
        }
        return tableReform;
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
    findPageValue(array, value) {
        let data;
        for (let index = 0; index < array.length; index++) {
            if (!array[index])
                continue;
            data = array[index].fromGroup.find(x => x.id == value);
            if (data) {
                data.controls.map(x => {
                    if (this.detailInput[value] && x.input != "underline" && x.input != "label") {
                        x.show = this.detailInput[value][x.name] >= 0 ? (this.detailInput[value][x.name] > 0 ? true : false) : x.show;
                        x.disabled = this.detailInput[value][x.name] >= 0 ? (this.detailInput[value][x.name] == 2 ? true : x.disabled) : x.disabled;
                    }
                    else if (this.detailInput[value] && x.input == "label") {
                        x.show = this.detailInput[value][x.placeholder] >= 0 ? (this.detailInput[value][x.placeholder] > 0 ? true : false) : x.show;
                    }
                    return x;
                });
                break;
            }
            // break
        }
        return data;
    }
    rechangePageData(tempFormData) {
        for (let index = 0; index < this.pageOrder.length; index++) {
            const element = this.pageOrder[index];
            if (element.id != 'coverage' && element.id != 'addon') {
                let page = this.findPageValue(tempFormData, element.id);
                this.pageOrder[index].tableName = page.tableName;
                this.pageOrder[index].id = page.id;
                this.pageOrder[index].controls = page.controls;
            }
        }
        // this.pageOrder.forEach((element) => {
        //   if (element.id != 'coverage' && element.id != 'addon') {
        //   }
        // })
    }
    goToList() {
        if (this.type == 'quotation') {
            this.productService.createingProd = null;
            this.productService.editData = null;
            this.router.navigateByUrl("/sale/quotation/list");
        }
        else
            this.router.navigateByUrl("/sale/application/list");
    }
    createPolicy() {
        this.productService.createingProdRef = this.item;
        this.productService.viewType = 'policy';
        this.productService.type = 'policy';
        this.productService.referenceID = this.resourceDetail.id;
        this.productService.referenceStatus = this.resourceDetail.status;
        this.productService.editData = null;
        this.router.navigateByUrl("/product-form");
    }
    checkDep(dependency, checkData) {
        if (dependency)
            return (0,_check_parent__WEBPACK_IMPORTED_MODULE_3__.checkVaidDep)(dependency, { value: checkData });
        return true;
    }
    getOptionValue(value, options, id, name) {
        let valueData = options.find(x => x.value == value);
        if (valueData) {
            if (this.formatedData)
                this.formatedData[id][name] = valueData.text;
            return valueData.text;
        }
        return value;
    }
    viewPrint() {
        const modalRef = this.modalService.open(_products_print_preview_modal_print_preview_modal_component__WEBPACK_IMPORTED_MODULE_6__.PrintPreviewModalComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.configData = this.printConfig.printFormat;
        modalRef.componentInstance.configOrder = this.printConfig.prinitUI;
        modalRef.componentInstance.product = this.item;
        modalRef.componentInstance.tempData = this.formatedData;
        modalRef.componentInstance.resourcesId = this.resourceDetail.id;
        modalRef.result.then(() => { }, (res) => {
        });
    }
};
ResourseDetailComponent.ctorParameters = () => [
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_9__.ProductDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_4__.PageDataService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_7__.AddOnQuoService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_8__.CoverageQuoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__.AttachmentDownloadService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal }
];
ResourseDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-resourse-detail',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_resourse_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_resourse_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResourseDetailComponent);



/***/ }),

/***/ 83054:
/*!*****************************************************************!*\
  !*** ./src/app/pages/resourse-detail/resourse-detail.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourseDetailModule": () => (/* binding */ ResourseDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _resourse_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resourse-detail.component */ 34241);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-page-review/static-pages-reivew.module */ 18410);









let ResourseDetailModule = class ResourseDetailModule {
};
ResourseDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_resourse_detail_component__WEBPACK_IMPORTED_MODULE_0__.ResourseDetailComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule,
            _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__.StaticPagesViewModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _resourse_detail_component__WEBPACK_IMPORTED_MODULE_0__.ResourseDetailComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe]
    })
], ResourseDetailModule);



/***/ }),

/***/ 69965:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/products/print-preview-modal/print-preview-modal.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      Preview Print Form\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <div id=\"printable\">\r\n      <div id=\"second-print\">\r\n        <app-print-view-box [config]=\"configData\" [product]=\"product\" [resourcesId]=\"resourcesId\" [tempData]=\"tempData\" [configOrder]=\"configOrder\">\r\n        </app-print-view-box>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"printPDf()\">Print</button>\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Close</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 64090:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/resourse-detail/resourse-detail.component.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b\">\n      <div class=\"card-body\">\n        <div style=\"display:flex\">\n          <div class=\"top-box\">\n            PRODUCT <br>\n            <span *ngIf=\"item\">{{item.name}}</span>\n          </div>\n          <!-- <div class=\"top-box\">\n            Customer <br>\n            <span>Jimmy Tao</span>\n          </div> -->\n          <div class=\"top-box\">\n            PREMIUM <br>\n            <span *ngIf=\"resourceDetail\">{{resourceDetail.premiumView || 0 }}</span>\n          </div>\n          <button class=\"btn btn-outline-primary\" style=\"margin-left: auto;\" (click)=\"viewPrint()\">\n            <i class=\"flaticon2-print\"></i> Print\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-container *ngIf=\"resourceDetail\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let page of pageOrder\">\n      <!-- <div class=\"{{Array.isArray(resultObj[page.tableName+item.id]) ? 'col-sm-12' : 'col-sm-6'}}\"> -->\n      <div class=\"col-md-12 mx-auto\">\n        <ng-container *ngIf=\"page.type === 'static';else dynView \">\n          <ng-container staticPageView [compId]=\"page.id\" [product]=\"item\" [resourcesId]=\"resourceDetail.id\">\n          </ng-container>\n        </ng-container>\n        <ng-template #dynView>\n          <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\">\n              <div class=\"card-title\">\n                <h3 class=\"card-label\">{{ page.pageTitle | titlecase }} :</h3>\n              </div>\n            </div>\n            <div class=\"card-body customer-card-body\">\n              <ng-container>\n                <ng-container *ngIf=\"resultObj[page.tableName+page.id]\">\n                  <ul class=\"list-group\" *ngIf=\"!Array.isArray(resultObj[page.tableName+page.id])\">\n                    <ng-container *ngFor=\"let cont of page.controls\">\n                      <ng-container *ngIf=\"cont.show\">\n                        <!-- <hr > -->\n                        <li *ngIf=\"cont.input == 'label'\" class=\"list-group-item\"\n                          style=\"border-top: 0.5px solid #dad9d9 !important;\">\n                          <h5 style=\"margin-bottom: 0px;\">{{cont.name}} </h5>\n\n                        </li>\n                        <ng-container\n                          *ngIf=\"!cont.isHideView && checkDep(cont.dependency,resultObj[page.tableName+page.id]) && cont.input != 'underline' && cont.input != 'label'\">\n                          <li class=\"list-group-item\">\n                            <!-- <span class=\"pull-right\"> -->\n                            <!-- <span class=\"btn btn-xs btn-default\"> -->\n                            <!-- {{cont.input}}cont.input != 'label' ?  -->\n                            {{cont.label || cont.name }} :\n                            <!-- </span> -->\n                            <!-- </span> -->\n                            <ng-container\n                              *ngIf=\"(cont.master == 'false' || cont.master == false) && cont.options && cont.options.length > 0 ;else nomalValue\">\n                              <span>\n                                {{getOptionValue(resultObj[page.tableName+page.id][cont.name],cont.options,page.tableName+page.id,cont.name)}}</span>\n                            </ng-container>\n                            <ng-template #nomalValue>\n                              <span *ngIf=\"cont.input == 'input' && cont.type == 'currency'\">\n                                {{ (resultObj[page.tableName+page.id][cont.name] || 0 ) | number }}\n                              </span>\n                              <span *ngIf=\"cont.input == 'date'\">\n                                <!-- {{resultObj[page.tableName+page.id][cont.name].length > 0 ? true: false}} D -->\n                                {{ resultObj[page.tableName+page.id][cont.name] &&\n                                resultObj[page.tableName+page.id][cont.name] != \"null\" ?\n                                (resultObj[page.tableName+page.id][cont.name] | date: 'dd/MM/yyyy') : \"\" }}\n\n                              </span>\n                              <span *ngIf=\"cont.type != 'currency' && cont.input != 'date'\">\n                                {{resultObj[page.tableName+page.id][cont.name]}}\n                              </span>\n                              <ng-container *ngIf=\"cont.input == 'date' && cont.type == 'policy'\">\n                                <!-- {{cont.endLabel == '-' }}  --> -\n                                {{resultObj[page.tableName+page.id][cont.endName] | date: 'dd/MM/yyyy'}}\n                              </ng-container>\n                            </ng-template>\n                            <div style=\"clear: both;\"></div>\n                          </li>\n\n                        </ng-container>\n                      </ng-container>\n                    </ng-container>\n                  </ul>\n                  <div class=\"table-responsive angular-bootstrap-table\"\n                    *ngIf=\"Array.isArray(resultObj[page.tableName+page.id])\">\n                    <table class=\"table table-head-custom table-vertical-center\">\n                      <thead>\n                        <tr>\n                          <th>NO</th>\n                          <ng-container *ngFor=\"let cont of getFormatTable(page.controls)\">\n                            <th [ngStyle]=\"{'text-align': cont.subType == 'currency' ? 'right' : 'left'}\">{{cont.title}}\n                            </th>\n                            <!-- <td *ngIf=\"cont.input != 'file'\">{{ getOtherData(cont.cols,item) }}</td>\n                            <td *ngIf=\"cont.input == 'file'\"> <a href=\"javascript:;\"\n                                (click)=\"download(cont.cols,item)\">{{ getOtherData(cont.cols,item) }}</a> </td> -->\n                          </ng-container>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <ng-container *ngIf=\"resultObj[page.tableName+page.id]\">\n                          <tr *ngFor=\"let result of resultObj[page.tableName+page.id];let i = index\">\n                            <td>{{i+1}}</td>\n                            <ng-container *ngFor=\"let control of getFormatTable(page.controls)\">\n                              <td [ngStyle]=\"{'text-align': control.subType == 'currency' ? 'right' : 'left'}\">\n                                {{getOtherData(control.cols,result) }}</td>\n                            </ng-container>\n                          </tr>\n                        </ng-container>\n                      </tbody>\n                    </table>\n                  </div>\n                </ng-container>\n              </ng-container>\n\n            </div>\n\n            <!--begin::Footer-->\n            <!-- <div class=\"card-footer\">\n          <div class=\"row\">\n            <div class=\"col-lg-8\">\n              <button type=\"submit\" class=\"btn btn-primary\">\n                Go To {{ type | titlecase }} List\n              </button>\n            </div>\n          </div>\n        </div> -->\n            <!--end::Footer-->\n          </div>\n        </ng-template>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card card-custom gutter-b\">\n        <div class=\"card-footer\">\n          <div class=\"row\">\n            <div class=\"{{type == 'quotation' ? 'col-sm-6': 'col-sm-12' }}\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"goToList()\">\n                Go Back To {{ (type == 'policy' ? \"application\" : type) | titlecase }} List\n              </button>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"type == 'quotation'\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"createPolicy()\">\n                Create New Application\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>");

/***/ }),

/***/ 91598:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/products/print-preview-modal/print-preview-modal.component.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludC1wcmV2aWV3LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 59489:
/*!**********************************************************************!*\
  !*** ./src/app/pages/resourse-detail/resourse-detail.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".top-box {\n  color: #B5B5C3;\n  margin-left: 50px;\n}\n.top-box span {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cnNlLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUFGO0FBQ0U7RUFDRSxXQUFBO0FBQ0oiLCJmaWxlIjoicmVzb3Vyc2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udG9wLWJveHtcbiAgY29sb3I6ICNCNUI1QzM7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBzcGFue1xuICAgIGNvbG9yOiAjMDAwO1xuICAgLy8gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_resourse-detail_resourse-detail_module_ts.js.map