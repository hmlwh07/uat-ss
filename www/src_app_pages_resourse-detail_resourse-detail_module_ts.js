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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_resourse_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./resourse-detail.component.html */ 64090);
/* harmony import */ var _resourse_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resourse-detail.component.scss */ 59489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/core/services/attachment-data.service */ 63002);
/* harmony import */ var _check_parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-parent */ 87952);
/* harmony import */ var _policy_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../policy/policy.service */ 46045);
/* harmony import */ var _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-form/page-data.service */ 9628);
/* harmony import */ var _products_models_product_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products/models/product.dto */ 1402);
/* harmony import */ var _products_print_preview_modal_print_preview_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../products/print-preview-modal/print-preview-modal.component */ 99293);
/* harmony import */ var _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../products/services/add-on-quo.service */ 43329);
/* harmony import */ var _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/services/coverage-quo.service */ 45570);
/* harmony import */ var _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../products/services/products-data.service */ 35618);
/* harmony import */ var _signature_pad_signature_pad_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signature-pad/signature-pad.component */ 90724);

















let ResourseDetailComponent = class ResourseDetailComponent {
    constructor(productService, location, pageDataService, addonQuo, coverageQuo, router, cdf, downloadService, numberPipe, datePipe, modalService, policyService) {
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
        this.policyService = policyService;
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
        this.signFileId = "";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.productService.createingProd || !this.productService.createingProd.id) {
                this.location.back();
            }
            else {
                this.item = this.productService.createingProd;
                this.type = this.productService.previewType;
                this.resourceDetail = this.productService.editData;
                this.signFileId = this.resourceDetail.attachmentId;
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
            if (element.type == _products_models_product_dto__WEBPACK_IMPORTED_MODULE_6__.PageUIType.DYN) {
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
        const modalRef = this.modalService.open(_products_print_preview_modal_print_preview_modal_component__WEBPACK_IMPORTED_MODULE_7__.PrintPreviewModalComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.configData = this.printConfig.printFormat;
        modalRef.componentInstance.configOrder = this.printConfig.prinitUI;
        modalRef.componentInstance.product = this.item;
        modalRef.componentInstance.tempData = this.formatedData;
        modalRef.componentInstance.resourcesId = this.resourceDetail.id;
        modalRef.result.then(() => { }, (res) => {
        });
    }
    createSign() {
        const modalRef = this.modalService.open(_signature_pad_signature_pad_component__WEBPACK_IMPORTED_MODULE_11__.SignaturePadComponent, { size: 'md', backdrop: false });
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == "save") {
                    this.policyService.updateAttachment(this.resourceDetail.id, res.data).toPromise().then((response) => {
                        if (response) {
                            this.signFileId = res.data;
                            this.productService.editData['attachmentId'] = res.data;
                        }
                    });
                }
            }
        });
    }
};
ResourseDetailComponent.ctorParameters = () => [
    { type: _products_services_products_data_service__WEBPACK_IMPORTED_MODULE_10__.ProductDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location },
    { type: _product_form_page_data_service__WEBPACK_IMPORTED_MODULE_5__.PageDataService },
    { type: _products_services_add_on_quo_service__WEBPACK_IMPORTED_MODULE_8__.AddOnQuoService },
    { type: _products_services_coverage_quo_service__WEBPACK_IMPORTED_MODULE_9__.CoverageQuoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__.AttachmentDownloadService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal },
    { type: _policy_policy_service__WEBPACK_IMPORTED_MODULE_4__.PolicyService }
];
ResourseDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _resourse_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resourse-detail.component */ 34241);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-component/form-component.module */ 7838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-page-review/static-pages-reivew.module */ 18410);
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-signaturepad */ 2672);
/* harmony import */ var _signature_pad_signature_pad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signature-pad/signature-pad.component */ 90724);











let ResourseDetailModule = class ResourseDetailModule {
};
ResourseDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_resourse_detail_component__WEBPACK_IMPORTED_MODULE_0__.ResourseDetailComponent, _signature_pad_signature_pad_component__WEBPACK_IMPORTED_MODULE_3__.SignaturePadComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_1__.FormComponentModule,
            _static_page_review_static_pages_reivew_module__WEBPACK_IMPORTED_MODULE_2__.StaticPagesViewModule,
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_9__.SignaturePadModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                {
                    path: '',
                    component: _resourse_detail_component__WEBPACK_IMPORTED_MODULE_0__.ResourseDetailComponent,
                },
            ]),
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe]
    })
], ResourseDetailModule);



/***/ }),

/***/ 90724:
/*!********************************************************************************!*\
  !*** ./src/app/pages/resourse-detail/signature-pad/signature-pad.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignaturePadComponent": () => (/* binding */ SignaturePadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signature_pad_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signature-pad.component.html */ 66180);
/* harmony import */ var _signature_pad_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signature-pad.component.scss */ 88166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-signaturepad */ 2672);
/* harmony import */ var _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_metronic/core/services/attachment-data.service */ 63002);







let SignaturePadComponent = class SignaturePadComponent {
    constructor(modal, fileUpload) {
        this.modal = modal;
        this.fileUpload = fileUpload;
        this.signaturePadOptions = {
            'minWidth': 5,
            'canvasWidth': 500,
            'canvasHeight': 300
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // this.signaturePad is now available
        this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    }
    clearSign() {
        this.signaturePad.clear();
    }
    saveSign() {
        console.log(this.signaturePad.toDataURL());
        let base64 = this.signaturePad.toDataURL().toString().split(",")[1];
        var sizeInBytes = 4 * Math.ceil((base64.length / 3)) * 0.5624896334383812;
        let data = {
            fileStr: base64,
            fileName: new Date().getTime(),
            fileType: 'png',
            fileSize: sizeInBytes,
            contentType: 'png',
            fileExtension: 'png',
        };
        // this.loading.activate()
        this.fileUpload.save(data).toPromise().then((res) => {
            if (res) {
                this.modal.dismiss({ data: res, type: 'save' });
            }
        });
    }
};
SignaturePadComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal },
    { type: _metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__.AttachmentUploadService }
];
SignaturePadComponent.propDecorators = {
    signaturePad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__.SignaturePad,] }]
};
SignaturePadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-resourse-detail',
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signature_pad_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signature_pad_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignaturePadComponent);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom gutter-b\">\n      <div class=\"card-body\">\n        <div style=\"display:flex\">\n          <div class=\"top-box\">\n            PRODUCT <br>\n            <span *ngIf=\"item\">{{item.name}}</span>\n          </div>\n          <!-- <div class=\"top-box\">\n            Customer <br>\n            <span>Jimmy Tao</span>\n          </div> -->\n          <div class=\"top-box\">\n            PREMIUM <br>\n            <span *ngIf=\"resourceDetail\">{{resourceDetail.premiumView || 0 }}</span>\n          </div>\n          <button class=\"btn btn-outline-primary\" style=\"margin-left: auto;\" (click)=\"viewPrint()\">\n            <i class=\"flaticon2-print\"></i> Print\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-container *ngIf=\"resourceDetail\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let page of pageOrder\">\n      <!-- <div class=\"{{Array.isArray(resultObj[page.tableName+item.id]) ? 'col-sm-12' : 'col-sm-6'}}\"> -->\n      <div class=\"col-md-12 mx-auto\">\n        <ng-container *ngIf=\"page.type === 'static';else dynView \">\n          <ng-container staticPageView [compId]=\"page.id\" [product]=\"item\" [resourcesId]=\"resourceDetail.id\">\n          </ng-container>\n        </ng-container>\n        <ng-template #dynView>\n          <div class=\"card card-custom gutter-b\">\n            <div class=\"card-header\">\n              <div class=\"card-title\">\n                <h3 class=\"card-label\">{{ page.pageTitle | titlecase }} :</h3>\n              </div>\n            </div>\n            <div class=\"card-body customer-card-body\">\n              <ng-container>\n                <ng-container *ngIf=\"resultObj[page.tableName+page.id]\">\n                  <ul class=\"list-group\" *ngIf=\"!Array.isArray(resultObj[page.tableName+page.id])\">\n                    <ng-container *ngFor=\"let cont of page.controls\">\n                      <ng-container *ngIf=\"cont.show\">\n                        <!-- <hr > -->\n                        <li *ngIf=\"cont.input == 'label'\" class=\"list-group-item\"\n                          style=\"border-top: 0.5px solid #dad9d9 !important;\">\n                          <h5 style=\"margin-bottom: 0px;\">{{cont.name}} </h5>\n\n                        </li>\n                        <ng-container\n                          *ngIf=\"!cont.isHideView && checkDep(cont.dependency,resultObj[page.tableName+page.id]) && cont.input != 'underline' && cont.input != 'label'\">\n                          <li class=\"list-group-item\">\n                            <!-- <span class=\"pull-right\"> -->\n                            <!-- <span class=\"btn btn-xs btn-default\"> -->\n                            <!-- {{cont.input}}cont.input != 'label' ?  -->\n                            {{cont.label || cont.name }} :\n                            <!-- </span> -->\n                            <!-- </span> -->\n                            <ng-container\n                              *ngIf=\"(cont.master == 'false' || cont.master == false) && cont.options && cont.options.length > 0 ;else nomalValue\">\n                              <span>\n                                {{getOptionValue(resultObj[page.tableName+page.id][cont.name],cont.options,page.tableName+page.id,cont.name)}}</span>\n                            </ng-container>\n                            <ng-template #nomalValue>\n                              <span *ngIf=\"cont.input == 'input' && cont.type == 'currency'\">\n                                {{ (resultObj[page.tableName+page.id][cont.name] || 0 ) | number }}\n                              </span>\n                              <span *ngIf=\"cont.input == 'date'\">\n                                <!-- {{resultObj[page.tableName+page.id][cont.name].length > 0 ? true: false}} D -->\n                                {{ resultObj[page.tableName+page.id][cont.name] &&\n                                resultObj[page.tableName+page.id][cont.name] != \"null\" ?\n                                (resultObj[page.tableName+page.id][cont.name] | date: 'dd/MM/yyyy') : \"\" }}\n\n                              </span>\n                              <span *ngIf=\"cont.type != 'currency' && cont.input != 'date'\">\n                                {{resultObj[page.tableName+page.id][cont.name]}}\n                              </span>\n                              <ng-container *ngIf=\"cont.input == 'date' && cont.type == 'policy'\">\n                                <!-- {{cont.endLabel == '-' }}  --> -\n                                {{resultObj[page.tableName+page.id][cont.endName] | date: 'dd/MM/yyyy'}}\n                              </ng-container>\n                            </ng-template>\n                            <div style=\"clear: both;\"></div>\n                          </li>\n\n                        </ng-container>\n                      </ng-container>\n                    </ng-container>\n                  </ul>\n                  <div class=\"table-responsive angular-bootstrap-table\"\n                    *ngIf=\"Array.isArray(resultObj[page.tableName+page.id])\">\n                    <table class=\"table table-head-custom table-vertical-center\">\n                      <thead>\n                        <tr>\n                          <th>NO</th>\n                          <ng-container *ngFor=\"let cont of getFormatTable(page.controls)\">\n                            <th [ngStyle]=\"{'text-align': cont.subType == 'currency' ? 'right' : 'left'}\">{{cont.title}}\n                            </th>\n                            <!-- <td *ngIf=\"cont.input != 'file'\">{{ getOtherData(cont.cols,item) }}</td>\n                            <td *ngIf=\"cont.input == 'file'\"> <a href=\"javascript:;\"\n                                (click)=\"download(cont.cols,item)\">{{ getOtherData(cont.cols,item) }}</a> </td> -->\n                          </ng-container>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <ng-container *ngIf=\"resultObj[page.tableName+page.id]\">\n                          <tr *ngFor=\"let result of resultObj[page.tableName+page.id];let i = index\">\n                            <td>{{i+1}}</td>\n                            <ng-container *ngFor=\"let control of getFormatTable(page.controls)\">\n                              <td [ngStyle]=\"{'text-align': control.subType == 'currency' ? 'right' : 'left'}\">\n                                {{getOtherData(control.cols,result) }}</td>\n                            </ng-container>\n                          </tr>\n                        </ng-container>\n                      </tbody>\n                    </table>\n                  </div>\n                </ng-container>\n              </ng-container>\n\n            </div>\n\n            <!--begin::Footer-->\n            <!-- <div class=\"card-footer\">\n          <div class=\"row\">\n            <div class=\"col-lg-8\">\n              <button type=\"submit\" class=\"btn btn-primary\">\n                Go To {{ type | titlecase }} List\n              </button>\n            </div>\n          </div>\n        </div> -->\n            <!--end::Footer-->\n          </div>\n        </ng-template>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card card-custom gutter-b\">\n        <div class=\"card-footer\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"goToList()\">\n                Go Back To {{ (type == 'policy' ? \"application\" : type) | titlecase }} List\n              </button>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"type == 'quotation'\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"createPolicy()\">\n                Create New Application\n              </button>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"type == 'policy'\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"createSign()\">\n                Create Signature\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>");

/***/ }),

/***/ 66180:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/resourse-detail/signature-pad/signature-pad.component.html ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n      Sign here ...!\n    </div>\n\n  </div>\n  <div class=\"overlay overlay-block cursor-default modal-body\">\n    <signature-pad [options]=\"signaturePadOptions\"></signature-pad>\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" *ngIf=\"id\" class=\"btn btn-danger btn-elevate mr-2\"\n      (click)=\"modal.dismiss({type:'delete'})\">Delete</button> -->\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-secondary btn-elevate\" (click)=\"clearSign()\">Clear</button>\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"saveSign()\">Save</button>\n  </div>\n</div>");

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

/***/ }),

/***/ 88166:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/resourse-detail/signature-pad/signature-pad.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduYXR1cmUtcGFkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2672:
/*!*******************************************************************************!*\
  !*** ./node_modules/angular2-signaturepad/fesm2020/angular2-signaturepad.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignaturePad": () => (/* binding */ SignaturePad),
/* harmony export */   "SignaturePadModule": () => (/* binding */ SignaturePadModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signature_pad */ 94447);




class SignaturePad {
  constructor(elementRef) {
    // no op
    this.elementRef = elementRef;
    this.options = this.options || {};
    this.onBeginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onEndEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }

  ngAfterContentInit() {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');

    if (this.options.canvasHeight) {
      canvas.height = this.options.canvasHeight;
    }

    if (this.options.canvasWidth) {
      canvas.width = this.options.canvasWidth;
    }

    this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, this.options);
    this.signaturePad.onBegin = this.onBegin.bind(this);
    this.signaturePad.onEnd = this.onEnd.bind(this);
  }

  ngOnDestroy() {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = 0;
    canvas.height = 0;
  }

  resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const canvas = this.signaturePad.canvas;
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
    this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
  } // Returns signature image as an array of point groups


  toData() {
    if (this.signaturePad) {
      return this.signaturePad.toData();
    } else {
      return [];
    }
  } // Draws signature image from an array of point groups


  fromData(points) {
    this.signaturePad.fromData(points);
  } // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible paramters)


  toDataURL(imageType, quality) {
    return this.signaturePad.toDataURL(imageType, quality); // save image as data URL
  } // Draws signature image from data URL


  fromDataURL(dataURL, options = {}) {
    // set default height and width on read data from URL
    if (!options.hasOwnProperty('height') && this.options.canvasHeight) {
      options.height = this.options.canvasHeight;
    }

    if (!options.hasOwnProperty('width') && this.options.canvasWidth) {
      options.width = this.options.canvasWidth;
    }

    this.signaturePad.fromDataURL(dataURL, options);
  } // Clears the canvas


  clear() {
    this.signaturePad.clear();
  } // Returns true if canvas is empty, otherwise returns false


  isEmpty() {
    return this.signaturePad.isEmpty();
  } // Unbinds all event handlers


  off() {
    this.signaturePad.off();
  } // Rebinds all event handlers


  on() {
    this.signaturePad.on();
  } // set an option on the signaturePad - e.g. set('minWidth', 50);


  set(option, value) {
    switch (option) {
      case 'canvasHeight':
        this.signaturePad.canvas.height = value;
        break;

      case 'canvasWidth':
        this.signaturePad.canvas.width = value;
        break;

      default:
        this.signaturePad[option] = value;
    }
  } // notify subscribers on signature begin


  onBegin() {
    this.onBeginEvent.emit(true);
  } // notify subscribers on signature end


  onEnd() {
    this.onEndEvent.emit(true);
  }

  queryPad() {
    return this.signaturePad;
  }

}

SignaturePad.ɵfac = function SignaturePad_Factory(t) {
  return new (t || SignaturePad)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

SignaturePad.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignaturePad,
  selectors: [["signature-pad"]],
  inputs: {
    options: "options"
  },
  outputs: {
    onBeginEvent: "onBeginEvent",
    onEndEvent: "onEndEvent"
  },
  decls: 1,
  vars: 0,
  template: function SignaturePad_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas");
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignaturePad, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      template: '<canvas></canvas>',
      selector: 'signature-pad'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onBeginEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onEndEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

class SignaturePadModule {}

SignaturePadModule.ɵfac = function SignaturePadModule_Factory(t) {
  return new (t || SignaturePadModule)();
};

SignaturePadModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SignaturePadModule,
  declarations: [SignaturePad],
  exports: [SignaturePad]
});
SignaturePadModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignaturePadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [SignaturePad],
      imports: [],
      exports: [SignaturePad]
    }]
  }], null, null);
})();
/*
 * Public API Surface of angular2-signaturepad
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 94447:
/*!***********************************************************!*\
  !*** ./node_modules/signature_pad/dist/signature_pad.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Signature Pad v1.6.0
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */

function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || new Date().getTime();
}

Point.prototype.velocityFrom = function (start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};

Point.prototype.distanceTo = function (start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};

function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}

// Returns approximated length.
Bezier.prototype.length = function () {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;

  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }

  return length;
};

/* eslint-disable no-multi-spaces, space-in-parens */
Bezier.prototype._point = function (t, start, c1, c2, end) {
  return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
};

function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};

  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.dotSize = opts.dotSize || function () {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || 'black';
  this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;

  this._canvas = canvas;
  this._ctx = canvas.getContext('2d');
  this.clear();

  // We need add these inline so they are available to unbind while still having
  // access to 'self' we could use _.bind but it's not worth adding a dependency.
  this._handleMouseDown = function (event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };

  this._handleMouseMove = function (event) {
    if (self._mouseButtonDown) {
      self._strokeUpdate(event);
    }
  };

  this._handleMouseUp = function (event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };

  this._handleTouchStart = function (event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };

  this._handleTouchMove = function (event) {
    // Prevent scrolling.
    event.preventDefault();

    var touch = event.targetTouches[0];
    self._strokeUpdate(touch);
  };

  this._handleTouchEnd = function (event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };

  // Enable mouse and touch event handlers
  this.on();
}

// Public methods
SignaturePad.prototype.clear = function () {
  var ctx = this._ctx;
  var canvas = this._canvas;

  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  this._data = [];
  this._reset();
  this._isEmpty = true;
};

SignaturePad.prototype.fromDataURL = function (dataUrl) {
  var _this = this;

  var image = new Image();
  var ratio = window.devicePixelRatio || 1;
  var width = this._canvas.width / ratio;
  var height = this._canvas.height / ratio;

  this._reset();
  image.src = dataUrl;
  image.onload = function () {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};

SignaturePad.prototype.toDataURL = function (type) {
  var _canvas;

  switch (type) {
    case 'image/svg+xml':
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }

      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};

SignaturePad.prototype.on = function () {
  this._handleMouseEvents();
  this._handleTouchEvents();
};

SignaturePad.prototype.off = function () {
  this._canvas.removeEventListener('mousedown', this._handleMouseDown);
  this._canvas.removeEventListener('mousemove', this._handleMouseMove);
  document.removeEventListener('mouseup', this._handleMouseUp);

  this._canvas.removeEventListener('touchstart', this._handleTouchStart);
  this._canvas.removeEventListener('touchmove', this._handleTouchMove);
  this._canvas.removeEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype.isEmpty = function () {
  return this._isEmpty;
};

// Private methods
SignaturePad.prototype._strokeBegin = function (event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);

  if (typeof this.onBegin === 'function') {
    this.onBegin(event);
  }
};

SignaturePad.prototype._strokeUpdate = function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var point = this._createPoint(x, y);

  var _addPoint = this._addPoint(point),
      curve = _addPoint.curve,
      widths = _addPoint.widths;

  if (curve && widths) {
    this._drawCurve(curve, widths.start, widths.end);
  }

  this._data[this._data.length - 1].push({
    x: point.x,
    y: point.y,
    time: point.time
  });
};

SignaturePad.prototype._strokeEnd = function (event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0];

  if (!canDrawCurve && point) {
    this._drawDot(point);
  }

  if (typeof this.onEnd === 'function') {
    this.onEnd(event);
  }
};

SignaturePad.prototype._handleMouseEvents = function () {
  this._mouseButtonDown = false;

  this._canvas.addEventListener('mousedown', this._handleMouseDown);
  this._canvas.addEventListener('mousemove', this._handleMouseMove);
  document.addEventListener('mouseup', this._handleMouseUp);
};

SignaturePad.prototype._handleTouchEvents = function () {
  // Pass touch events to canvas element on mobile IE11 and Edge.
  this._canvas.style.msTouchAction = 'none';
  this._canvas.style.touchAction = 'none';

  this._canvas.addEventListener('touchstart', this._handleTouchStart);
  this._canvas.addEventListener('touchmove', this._handleTouchMove);
  this._canvas.addEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype._reset = function () {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};

SignaturePad.prototype._createPoint = function (x, y, time) {
  var rect = this._canvas.getBoundingClientRect();

  return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
};

SignaturePad.prototype._addPoint = function (point) {
  var points = this.points;
  var tmp = void 0;

  points.push(point);

  if (points.length > 2) {
    // To reduce the initial lag make it work with 3 points
    // by copying the first point to the beginning.
    if (points.length === 3) points.unshift(points[0]);

    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);

    // Remove the first element from the list,
    // so that we always have no more than 4 points in points array.
    points.shift();

    return { curve: curve, widths: widths };
  }

  return {};
};

SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;

  var m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
  var m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };

  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;

  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };

  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;

  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};

SignaturePad.prototype._calculateCurveWidths = function (curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };

  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

  var newWidth = this._strokeWidth(velocity);

  widths.start = this._lastWidth;
  widths.end = newWidth;

  this._lastVelocity = velocity;
  this._lastWidth = newWidth;

  return widths;
};

SignaturePad.prototype._strokeWidth = function (velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};

SignaturePad.prototype._drawPoint = function (x, y, size) {
  var ctx = this._ctx;

  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};

SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());

  ctx.beginPath();

  for (var i = 0; i < drawSteps; i += 1) {
    // Calculate the Bezier (x, y) coordinate for this step.
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;

    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;

    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;

    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }

  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._drawDot = function (point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;

  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];

    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);

        if (j === 0) {
          // First point in a group. Nothing to draw yet.
          this._reset();
          this._addPoint(point);
        } else if (j !== group.length - 1) {
          // Middle point in a group.
          var _addPoint2 = this._addPoint(point),
              curve = _addPoint2.curve,
              widths = _addPoint2.widths;

          if (curve && widths) {
            drawCurve(curve, widths);
          }
        } else {
          // Last point in a group. Do nothing.
        }
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};

SignaturePad.prototype._toSVG = function () {
  var _this2 = this;

  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttributeNS(null, 'width', canvas.width);
  svg.setAttributeNS(null, 'height', canvas.height);

  this._fromData(pointGroups, function (curve, widths) {
    var path = document.createElement('path');

    // Need to check curve for NaN values, these pop up when drawing
    // lines on the canvas that are not continuous. E.g. Sharp corners
    // or stopping mid-stroke and than continuing without lifting mouse.
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));

      path.setAttribute('d', attr);
      path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
      path.setAttribute('stroke', _this2.penColor);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');

      svg.appendChild(path);
    }
  }, function (rawPoint) {
    var circle = document.createElement('circle');
    var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute('r', dotSize);
    circle.setAttribute('cx', rawPoint.x);
    circle.setAttribute('cy', rawPoint.y);
    circle.setAttribute('fill', _this2.penColor);

    svg.appendChild(circle);
  });

  var prefix = 'data:image/svg+xml;base64,';
  var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
  var body = svg.innerHTML;

  // IE hack for missing innerHTML property on SVGElement
  if (body === undefined) {
    var dummy = document.createElement('dummy');
    var nodes = svg.childNodes;
    dummy.innerHTML = '';

    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }

    body = dummy.innerHTML;
  }

  var footer = '</svg>';
  var data = header + body + footer;

  return prefix + btoa(data);
};

SignaturePad.prototype.fromData = function (pointGroups) {
  var _this3 = this;

  this.clear();

  this._fromData(pointGroups, function (curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function (rawPoint) {
    return _this3._drawDot(rawPoint);
  });
};

SignaturePad.prototype.toData = function () {
  return this._data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignaturePad);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_resourse-detail_resourse-detail_module_ts.js.map