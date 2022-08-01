"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_lead-detail_campaign-list_campaign-list_component_ts"],{

/***/ 71865:
/*!****************************************************************************!*\
  !*** ./src/app/pages/lead-detail/campaign-list/campaign-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignListComponent": () => (/* binding */ CampaignListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _campaign_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-list.component.html?ngResource */ 37562);
/* harmony import */ var _campaign_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-list.component.scss?ngResource */ 63333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 62942);
/* harmony import */ var _FNA_list_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FNA-list.const */ 3777);
/* harmony import */ var _lead_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lead-detail.service */ 64190);









let CampaignListComponent = class CampaignListComponent {
    constructor(LeadDetailService, cdf, modalService) {
        this.LeadDetailService = LeadDetailService;
        this.cdf = cdf;
        this.modalService = modalService;
        this.campaignList = [];
        this.isPopup = false;
        this.selectedCampaign = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.ELEMENT_COL = JSON.parse(JSON.stringify(_FNA_list_const__WEBPACK_IMPORTED_MODULE_3__.CampaignCol));
        this.displayedColumns = JSON.parse(JSON.stringify(_FNA_list_const__WEBPACK_IMPORTED_MODULE_3__.CampaignDisplayCol));
    }
    ngOnInit() {
        this.loadForm();
        this.getList();
    }
    getList() {
        this.LeadDetailService.getCampaignList(this.campaignForm.value).toPromise().then((res) => {
            if (res) {
                this.campaignList = res;
                this.cdf.detectChanges();
                this.matTable.reChangeData();
            }
        });
    }
    cancel() {
        this.modalService.dismissAll();
    }
    loadForm() {
        this.campaignForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            "cpmNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null),
            "cpmName": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null),
        });
    }
    rowSelected(event) {
        this.selectedCampaign.emit(event);
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    nextProd() {
        if (this.selected.cpmNumber) {
            this.modalService.dismissAll({ data: this.selected, type: "save" });
        }
    }
    get selected() {
        let campaign;
        if (this.matTable) {
            campaign = this.matTable.selection.selected[0];
        }
        return campaign ? campaign : { cpmNumber: 0 };
    }
    //for view
    isControlValid(controlName) {
        const control = this.campaignForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.campaignForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.campaignForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
};
CampaignListComponent.ctorParameters = () => [
    { type: _lead_detail_service__WEBPACK_IMPORTED_MODULE_4__.LeadDetailService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal }
];
CampaignListComponent.propDecorators = {
    isPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    selectedCampaign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }]
};
CampaignListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-campaign-list',
        template: _campaign_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_campaign_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CampaignListComponent);



/***/ }),

/***/ 64190:
/*!**********************************************************!*\
  !*** ./src/app/pages/lead-detail/lead-detail.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadDetailService": () => (/* binding */ LeadDetailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 38313);





const API_LEAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/lead`;
const API_CAMPAIGN_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/campaign`;
const API_LEAD_SOURCE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/leadSource`;
const API_LEAD_SCORE_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/leadSource/score`;
const API_LEAD_QUALITY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/leadQuality`;
const API_VALIDITY_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/validity-period/filter`;
const API_EXISTING_CUSTOMER_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/customer/checkExistingCustomer`;
const API_EXISTING_PROSPECT_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/customer/checkExistingProspect`;
let LeadDetailService = class LeadDetailService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_LEAD_URL);
        this.httpClient = httpClient;
    }
    updateLeadStatus(postData, oldId) {
        return this.httpClient.put(API_LEAD_URL + "/" + oldId + "/status", postData);
    }
    getCampaignList(search) {
        let url = API_CAMPAIGN_URL + "?";
        if (search.cpmNumber) {
            url = url + "cpmNumber=" + search.cpmNumber + "&";
        }
        if (search.cpmName) {
            url = url + "cpmName=" + search.cpmName + "&";
        }
        // console.log(url);
        return this.httpClient.get(url);
    }
    getLeadSource() {
        return this.httpClient.get(API_LEAD_SOURCE_URL);
    }
    getLeadQuality(channel) {
        return this.httpClient.get(API_LEAD_QUALITY_URL + "?distributionChannelCode=" + channel);
    }
    getLeadScore(sourceCode, channel) {
        return this.httpClient.get(API_LEAD_SCORE_URL + "?sourceCode=" + sourceCode + "&distributionChannelCode=" + channel);
    }
    getValidityPeriod(leadSource, productId) {
        return this.httpClient.get(API_VALIDITY_URL + "?leadSource=" + leadSource + "&" + "productId=" + productId);
    }
    checkLead(postData) {
        return this.httpClient.post(API_LEAD_URL + "/check", postData);
    }
    getCampaignIdByName(campaignName) {
        return this.httpClient.get(API_CAMPAIGN_URL + "?cpmName=" + campaignName);
    }
    getCampaignNameById(campaignId) {
        return this.httpClient.get(API_CAMPAIGN_URL + "?cpmNumber=" + campaignId);
    }
    checkExistingCustomer(postData) {
        return this.httpClient.post(API_EXISTING_CUSTOMER_URL, postData);
    }
    checkExistingProspect(postData) {
        return this.httpClient.post(API_EXISTING_PROSPECT_URL, postData);
    }
    createLead(postData) {
        return this.httpClient.post(API_LEAD_URL, postData);
    }
};
LeadDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
LeadDetailService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LeadDetailService);



/***/ }),

/***/ 63333:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/lead-detail/campaign-list/campaign-list.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wYWlnbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 37562:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/lead-detail/campaign-list/campaign-list.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"modal-content\" [class.remove-p]=\"isPopup\">\n            <div class=\"modal-header\">\n                <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n                    Campaign List\n                </div>\n                <div class=\"card-toolbar\">\n                    <!-- <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"getList()\">\n                        <span class=\"flaticon2-magnifier-tool search-tool\"></span>\n                    </button> -->\n                    <span class=\"flaticon2-magnifier-tool search-tool\" (click)=\"getList()\"></span>\n                    <button type=\"button\" class=\"btn btn-primary ml-2\" style=\"min-width: 50px;\" (click)=\"cancel()\">\n                        <span class=\"\">Cancel</span>\n                    </button>\n                </div>\n\n            </div>\n            <div class=\"overlay overlay-block cursor-default modal-body\">\n                <form action=\"#\" class=\"form\" [formGroup]=\"campaignForm\">\n                    <div class=\"row\" style=\"align-items: center;\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Campaign Number</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"cpmNumber\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('cpmNumber')\" [class.is-valid]=\"isControlValid('cpmNumber')\" formControlName=\"cpmNumber\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-4 col-form-label\">Campaign Name</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control form-control-sm \" name=\"cpmName\" autocomplete=\"off\" [class.is-invalid]=\"isControlInvalid('cpmName')\" [class.is-valid]=\"isControlValid('cpmName')\" formControlName=\"cpmName\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"modal-content\" [class.remove-p]=\"isPopup\">\n                        <div class=\"overlay overlay-block cursor-default modal-body\">\n                            <app-material-table-view [data]=\"campaignList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\" (rowselect)=\"rowSelected($event)\" [selectable]=\"isPopup\">\n                            </app-material-table-view>\n                        </div>\n                        <ng-container *ngIf=\"isPopup\">\n                            <div class=\"card-footer\">\n                                <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"closeModal()\">{{\"FORM.btn_cancel\" | translate }}</button>\n                                <button type=\"button\" class=\"btn btn-primary btn-elevate\" (click)=\"nextProd()\" [disabled]=\"!selected.cpmNumber\">{{\"FORM.btn_next\" | translate }}</button>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n            </div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_lead-detail_campaign-list_campaign-list_component_ts.js.map