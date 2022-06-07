"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_page-config_page-config_module_ts"],{

/***/ 94125:
/*!**************************************************!*\
  !*** ./src/app/pages/page-config/col.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColAPIService": () => (/* binding */ ColAPIService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/biz.operation.service */ 38313);





const API_TALBEL_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/dynamiccolumn`;
let ColAPIService = class ColAPIService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_TALBEL_URL);
        this.httpClient = httpClient;
    }
};
ColAPIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ColAPIService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ColAPIService);



/***/ }),

/***/ 82839:
/*!************************************************************!*\
  !*** ./src/app/pages/page-config/page-config.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageConfigComponent": () => (/* binding */ PageConfigComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _page_config_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-config.component.html?ngResource */ 57211);
/* harmony import */ var _page_config_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-config.component.scss?ngResource */ 53137);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _form_component_button_box_button_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-component/button-box/button-box.component */ 28003);
/* harmony import */ var _form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-component/dynamic-form.component */ 95659);
/* harmony import */ var _form_component_edit_button_modal_edit_button_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-component/edit-button-modal/edit-button-modal.component */ 16499);
/* harmony import */ var _form_component_edit_input_modal_edit_input_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-component/edit-input-modal/edit-input-modal.component */ 29886);
/* harmony import */ var _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-component/field.interface */ 21539);
/* harmony import */ var _form_component_export_config_modal_export_config_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-component/export-config-modal/export-config-modal.component */ 77268);
/* harmony import */ var _form_component_page_config_modal_page_config_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-component/page-config-modal/page-config-modal.component */ 86389);
/* harmony import */ var _form_component_import_config_modal_import_config_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form-component/import-config-modal/import-config-modal.component */ 32429);
/* harmony import */ var _form_component_sort_config_modal_sort_config_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-component/sort-config-modal/sort-config-modal.component */ 65181);
/* harmony import */ var _dashboard_services_form_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dashboard/services/form-ui.service */ 78007);
/* harmony import */ var _core_is_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/is-json */ 88757);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _form_component_label_config_modal_label_config_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form-component/label-config-modal/label-config-modal.component */ 29045);
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./table.service */ 41676);
/* harmony import */ var _col_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./col.service */ 94125);
/* harmony import */ var _dashboard_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dashboard/edit-modal/edit-modal.component */ 50585);
/* harmony import */ var src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/loading-toast/alert-model/alert.service */ 25492);
























let PageConfigComponent = class PageConfigComponent {
    constructor(itemService, tableService, colService, router, location, modalService, cdRef, alertService) {
        this.itemService = itemService;
        this.tableService = tableService;
        this.colService = colService;
        this.router = router;
        this.location = location;
        this.modalService = modalService;
        this.cdRef = cdRef;
        this.alertService = alertService;
        this.defaultBtnStyle = {
            label: "",
            type: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.ActionType.RESET,
            size: null,
            position: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.BtnPostion.CENTER,
            color: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.BtnColor.SECONDARY,
            fill: true
        };
        this.defaultInputStype = {
            input: "",
            name: "",
            coreName: "",
            isLabel: true,
            label: "",
            size: 12,
            mdSize: 12,
            lgSize: 12,
            inlineStyle: false,
            show: true,
            readonly: false,
            disabled: false,
            break: 'false'
        };
        this.configPage = {
            totalPage: 1,
            pageName: "",
            fromGroup: [
                {
                    pageTitle: "",
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_18__["default"])(),
                    pageIcon: "",
                    pageType: "form",
                    tableName: "",
                    controls: [],
                    buttons: [
                        {
                            label: "Reset",
                            type: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.ActionType.RESET,
                            size: 3,
                            position: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.BtnPostion.CENTER,
                            color: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.BtnColor.SECONDARY,
                            fill: true
                        },
                        {
                            label: "Save",
                            type: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.ActionType.SUBMIT,
                            size: 3,
                            position: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.BtnPostion.RIGHT,
                            color: _form_component_field_interface__WEBPACK_IMPORTED_MODULE_6__.BtnColor.PRIMARY,
                            fill: true
                        }
                    ]
                }
            ]
        };
        this.formObjs = [];
        this.exportedPage = [];
        this.activePage = 1;
        this.unsubscribe = [];
    }
    ngOnDestroy() {
        if (this.item)
            this.item['totalPage'] = this.configPage.totalPage;
        // this.saveForm(true)
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
    ngOnInit() {
        if (!this.itemService.selectedForm || !this.itemService.selectedForm.dyProductID) {
            this.location.back();
        }
        else {
            this.item = this.itemService.selectedForm;
            let config = (0,_core_is_json__WEBPACK_IMPORTED_MODULE_12__.IsJsonString)(this.item.config) ? JSON.parse(this.item.config) : {};
            this.configPage = config.pageName ? config : this.configPage;
            this.editPage();
        }
    }
    clickBtn(index) {
        this.openModal(index);
    }
    edit() {
        const modalRef = this.modalService.open(_dashboard_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_16__.EditModalComponent, { size: 'md', backdrop: false });
        modalRef.componentInstance.oldData = this.item;
        modalRef.componentInstance.id = this.item.dyProductID;
        modalRef.componentInstance.name = JSON.parse(JSON.stringify(this.item)).pageName;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'edit') {
                    this.item = res.data;
                    this.cdRef.detectChanges();
                }
            }
        });
    }
    openModal(id) {
        const modalRef = this.modalService.open(_form_component_edit_button_modal_edit_button_modal_component__WEBPACK_IMPORTED_MODULE_4__.EditButtonModalComponent, { size: 'xl' });
        const pageIndex = this.activePage - 1;
        modalRef.componentInstance.config = id ? this.configPage.fromGroup[pageIndex].buttons[id] : this.defaultBtnStyle;
        // let thisObj = this
        modalRef.componentInstance.id = id + 1;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res && res.type == 'save') {
                    if (id >= 0) {
                        this.configPage.fromGroup[pageIndex].buttons[id] = res.data;
                    }
                    else {
                        this.configPage.fromGroup[pageIndex].buttons.push(res.data);
                    }
                }
                else if (res.type == 'delete') {
                    this.configPage.fromGroup[pageIndex].buttons.splice(id, 1);
                    this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                    });
                }
                this.cdRef.detectChanges();
            }
        });
    }
    openModalInput(type, id) {
        const modalRef = this.modalService.open(_form_component_edit_input_modal_edit_input_modal_component__WEBPACK_IMPORTED_MODULE_5__.EditInputModalComponent, { size: 'xl' });
        const pageIndex = this.activePage - 1;
        modalRef.componentInstance.config = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id] : JSON.parse(JSON.stringify(this.defaultInputStype));
        let oldCol;
        let oldParty;
        if (id >= 0) {
            oldCol = this.configPage.fromGroup[pageIndex].controls[id].name;
            oldParty = this.configPage.fromGroup[pageIndex].controls[id].party;
        }
        // =  ? this.configPage.fromGroup[pageIndex].controls[id].name : ""
        // let thisObj = this
        modalRef.componentInstance.id = id >= 0 ? id + 1 : null;
        modalRef.componentInstance.input = type;
        modalRef.componentInstance.isTable = this.configPage.fromGroup[pageIndex].pageType == "table";
        modalRef.componentInstance.isParty = this.configPage.fromGroup[pageIndex].party || false;
        modalRef.result.then(() => { }, (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            if (res) {
                if (res.data && res.type == 'save') {
                    if (id >= 0) {
                        try {
                            if (oldParty != res.data.party) {
                                let response = yield this.updateCol(this.configPage.fromGroup[pageIndex].tableName, res.data);
                            }
                            //   if (response) {
                            //     this.configPage.fromGroup[pageIndex].controls[id] = { ...this.configPage.fromGroup[pageIndex].controls[id], ...res.data }
                            //     this.saveForm(true)
                            //   }
                            // }
                            // else {
                            this.configPage.fromGroup[pageIndex].controls[id] = Object.assign(Object.assign({}, this.configPage.fromGroup[pageIndex].controls[id]), res.data);
                            this.saveForm(true);
                            // }
                        }
                        catch (error) {
                        }
                    }
                    else {
                        // if (type != 'label')
                        try {
                            let response = yield this.createCol(this.configPage.fromGroup[pageIndex].tableName, Object.assign({ input: type }, res.data));
                            if (response) {
                                this.configPage.fromGroup[pageIndex].controls.push(Object.assign({ input: type }, res.data));
                                this.saveForm(true);
                            }
                        }
                        catch (error) {
                        }
                    }
                }
                else if (res.type == 'delete') {
                    this.configPage.fromGroup[pageIndex].controls.splice(id, 1);
                    this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                    });
                }
                this.dynForm.reCreateFrom();
                this.cdRef.detectChanges();
            }
        }));
    }
    createCol(tableName, control) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            //control.input == 'input' && control.type == 'number' ? 'integer' : 
            let postData = {
                tableName: tableName,
                cols: [
                    {
                        operation: "create",
                        name: control.name,
                        type: 'String',
                        party: control.party || false
                    }
                ]
            };
            if (control.input == 'date' && control.type == 'policy') {
                postData.cols.push({
                    operation: "create",
                    name: control.endName,
                    type: 'String',
                    party: control.party || false
                });
            }
            return yield this.colService.save(postData).toPromise();
        });
    }
    updateCol(tableName, control) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            //control.input == 'input' && control.type == 'number' ? 'integer' :
            let postData = {
                tableName: tableName,
                cols: [
                    {
                        operation: "create",
                        name: control.name,
                        type: 'String',
                        party: control.party || false
                    }
                ]
            };
            if (control.input == 'date' && control.type == 'policy') {
                postData.cols.push({
                    operation: "create",
                    name: control.endName,
                    type: 'String',
                    party: control.party || false
                });
            }
            return yield this.colService.save(postData).toPromise();
        });
    }
    openModalLabel(id) {
        const pageIndex = this.activePage - 1;
        const modalRef = this.modalService.open(_form_component_label_config_modal_label_config_modal_component__WEBPACK_IMPORTED_MODULE_13__.LabelConfigModalComponent, { size: 'xl' });
        modalRef.componentInstance.name = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].name : '';
        modalRef.componentInstance.label = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].label : '';
        modalRef.componentInstance.coreName = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].coreName : '';
        modalRef.componentInstance.endLabel = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].endLabel : '';
        modalRef.componentInstance.endLabelMM = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].endLabelMM : '';
        modalRef.componentInstance.labelSize = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].labelSize : '';
        modalRef.componentInstance.multi = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].multi : '';
        modalRef.componentInstance.readonly = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].readonly : '';
        modalRef.componentInstance.disabled = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].disabled : '';
        modalRef.componentInstance.id = id >= 0 ? id + 1 : null;
        modalRef.componentInstance.inlineStyle = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].inlineStyle : '';
        modalRef.componentInstance.placeholder = id >= 0 ? this.configPage.fromGroup[pageIndex].controls[id].placeholder : '';
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.data && res.type == 'save') {
                    if (id >= 0) {
                        this.configPage.fromGroup[pageIndex].controls[id] = Object.assign(Object.assign({ input: 'label' }, res.data), { break: true, size: 12, mdSize: 12, lgSize: 12, show: true });
                    }
                    else {
                        this.configPage.fromGroup[pageIndex].controls.push(Object.assign(Object.assign({ input: 'label' }, res.data), { break: true, size: 12, mdSize: 12, lgSize: 12, show: true }));
                        this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls);
                    }
                }
                else if (res.type == 'delete') {
                    this.configPage.fromGroup[pageIndex].controls.splice(id, 1);
                    this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls);
                    this.alertService.activate('This record was deleted', 'Success Message').then(result => {
                    });
                }
                this.saveForm(true);
                this.cdRef.detectChanges();
            }
        });
    }
    saveForm(destory) {
        this.configPage.pageName = this.itemService.selectedForm.pageName;
        let simpleText = this.configPage.fromGroup.map(e => e.pageTitle).join(", ");
        let postData = Object.assign(Object.assign({}, this.item), { simpleTest: simpleText, config: JSON.stringify(this.configPage) });
        this.itemService.updateNoID(postData).toPromise().then((res) => {
            if (res && !destory) {
                this.location.back();
            }
        });
        // const id = this.formObjs.findIndex(x => x.formId == this.item.id)
        // if (id < 0) {
        //   this.formObjs.push({ ...this.configPage, formId: this.item.id })
        // } else {
        //   this.formObjs[id] = { ...this.configPage, formId: this.item.id }
        // }
    }
    getNewPage() {
        this.configPage.totalPage += 1;
        const myId = (0,uuid__WEBPACK_IMPORTED_MODULE_18__["default"])();
        this.configPage.fromGroup.push({
            id: myId,
            pageTitle: "",
            pageIcon: "",
            tableName: "",
            pageType: "form",
            controls: [],
            buttons: [],
        });
        this.activePage += 1;
        this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 1].controls);
        this.cdRef.detectChanges();
        this.editPage();
    }
    removePage() {
        this.activePage -= 1;
        this.configPage.totalPage -= 1;
        this.configPage.fromGroup.splice(this.activePage, 1);
        this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 1].controls);
        this.cdRef.detectChanges();
    }
    backPage() {
        if (this.activePage > 1) {
            this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 2].controls);
            this.activePage -= 1;
            this.cdRef.detectChanges();
        }
    }
    nextPage() {
        if (this.configPage.fromGroup.length > this.activePage) {
            this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage].controls);
            this.activePage += 1;
            this.cdRef.detectChanges();
        }
    }
    editPage() {
        const pageIndex = this.activePage - 1;
        const modalRef = this.modalService.open(_form_component_page_config_modal_page_config_modal_component__WEBPACK_IMPORTED_MODULE_8__.PageConfigModalComponent, { size: 'md', backdrop: false });
        modalRef.componentInstance.title = this.configPage.fromGroup[pageIndex].pageTitle;
        modalRef.componentInstance.icon = this.configPage.fromGroup[pageIndex].pageIcon;
        modalRef.componentInstance.type = this.configPage.fromGroup[pageIndex].pageType;
        modalRef.componentInstance.tableName = this.configPage.fromGroup[pageIndex].tableName;
        modalRef.componentInstance.function = this.configPage.fromGroup[pageIndex].function;
        modalRef.componentInstance.party = this.configPage.fromGroup[pageIndex].party;
        modalRef.componentInstance.unitCode = this.configPage.fromGroup[pageIndex].unitCode;
        const editAble = this.configPage.fromGroup[pageIndex].tableName ? true : false;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    if (editAble) {
                        this.editTable({ tableName: res.data.tableName, oldTableName: this.configPage.fromGroup[pageIndex].tableName }, res, pageIndex);
                    }
                    else {
                        this.createTable(res.data.tableName, res, pageIndex);
                    }
                }
            }
        });
    }
    createTable(tableName, res, pageIndex) {
        const postData = { tableName };
        this.tableService.save(postData).toPromise().then((response) => {
            if (res) {
                this.configPage.fromGroup[pageIndex].pageTitle = res.data.title;
                this.configPage.fromGroup[pageIndex].pageIcon = res.data.icon;
                this.configPage.fromGroup[pageIndex].pageType = res.data.type;
                this.configPage.fromGroup[pageIndex].tableName = res.data.tableName;
                this.configPage.fromGroup[pageIndex].function = res.data.function;
                this.configPage.fromGroup[pageIndex].party = res.data.party;
                this.configPage.fromGroup[pageIndex].unitCode = res.data.unitCode;
                this.cdRef.detectChanges();
            }
        });
    }
    editTable(data, res, pageIndex) {
        if (data.oldTableName == data.tableName) {
            this.configPage.fromGroup[pageIndex].pageTitle = res.data.title;
            this.configPage.fromGroup[pageIndex].pageIcon = res.data.icon;
            this.configPage.fromGroup[pageIndex].pageType = res.data.type;
            this.configPage.fromGroup[pageIndex].tableName = res.data.tableName;
            this.configPage.fromGroup[pageIndex].function = res.data.function;
            this.configPage.fromGroup[pageIndex].party = res.data.party;
            this.configPage.fromGroup[pageIndex].unitCode = res.data.unitCode;
            this.cdRef.detectChanges();
        }
        else {
            this.tableService.updateNoID(data).toPromise().then((response) => {
                if (res) {
                    this.configPage.fromGroup[pageIndex].pageTitle = res.data.title;
                    this.configPage.fromGroup[pageIndex].pageIcon = res.data.icon;
                    this.configPage.fromGroup[pageIndex].pageType = res.data.type;
                    this.configPage.fromGroup[pageIndex].tableName = res.data.tableName;
                    this.configPage.fromGroup[pageIndex].function = res.data.function;
                    this.configPage.fromGroup[pageIndex].party = res.data.party;
                    this.configPage.fromGroup[pageIndex].unitCode = res.data.unitCode;
                    this.cdRef.detectChanges();
                }
            });
        }
    }
    editInput(event) {
        if (event >= 0) {
            const pageIndex = this.activePage - 1;
            let type = this.configPage.fromGroup[pageIndex].controls[event].input;
            if (type == 'label') {
                this.openModalLabel(event);
            }
            else if (type == 'underline') {
                this.configPage.fromGroup[pageIndex].controls.splice(event, 1);
                this.cdRef.detectChanges();
                this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls);
            }
            else {
                this.openModalInput(type, event);
            }
        }
    }
    addNewLine() {
        const pageIndex = this.activePage - 1;
        this.configPage.fromGroup[pageIndex].controls.push({ input: 'underline', });
        this.cdRef.detectChanges();
        this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls);
    }
    moveNext() {
        let index = this.activePage;
        let arr = this.moveArrayItemToNewIndex(this.configPage.fromGroup, index - 1, index);
        this.nextPage();
        // this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage-1].controls)
        // this.cdRef.detectChanges();
    }
    moveBack() {
        let arr = this.moveArrayItemToNewIndex(this.configPage.fromGroup, this.activePage - 1, this.activePage - 2);
        this.backPage();
        // this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage-1].controls)
        // this.cdRef.detectChanges();
    }
    moveArrayItemToNewIndex(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
    }
    exportPage() {
        const pageIndex = this.activePage - 1;
        const modalRef = this.modalService.open(_form_component_export_config_modal_export_config_modal_component__WEBPACK_IMPORTED_MODULE_7__.ExportConfigModalComponent, { size: 'md' });
        modalRef.componentInstance.config = this.configPage.fromGroup[pageIndex];
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.exportPageAPI(res.data);
                }
            }
        });
    }
    exportPageAPI(res) {
        let postData = {
            pageName: res.label,
            config: JSON.stringify(res),
            simpleTest: res.simple,
            type: "Page",
        };
        this.itemService.save(postData).toPromise().then(res => {
            if (res) {
            }
        });
    }
    importPage() {
        const pageIndex = this.activePage - 1;
        const modalRef = this.modalService.open(_form_component_import_config_modal_import_config_modal_component__WEBPACK_IMPORTED_MODULE_9__.ImportConfigModalComponent, { size: 'lg' });
        modalRef.componentInstance.showData = this.exportedPage;
        modalRef.result.then(() => { }, (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            if (res) {
                if (res.type == 'save') {
                    if (res.data) {
                        if ((0,_core_is_json__WEBPACK_IMPORTED_MODULE_12__.IsJsonString)(res.data.config)) {
                            let groupData = JSON.parse(res.data.config);
                            for (let index = 0; index < groupData.controls.length; index++) {
                                let element = groupData.controls[index];
                                // console.log(element);
                                try {
                                    if (element.input == "label" || element.input == "underline") {
                                        this.configPage.fromGroup[pageIndex].controls.push(element);
                                    }
                                    else {
                                        let res = yield this.createCol(this.configPage.fromGroup[pageIndex].tableName, element);
                                        if (res) {
                                            this.configPage.fromGroup[pageIndex].controls.push(element);
                                        }
                                    }
                                }
                                catch (error) {
                                    console.log(error);
                                }
                            }
                            // Array.prototype.push.apply(this.configPage.fromGroup[pageIndex].controls, groupData.controls)
                            Array.prototype.push.apply(this.configPage.fromGroup[pageIndex].buttons, groupData.buttons);
                            this.dynForm.newFormCreate(this.configPage.fromGroup[pageIndex].controls);
                            // this.configPage.fromGroup[pageIndex].pageTitle = groupData.title
                            // this.configPage.fromGroup[pageIndex].pageIcon = groupData.icon
                            this.cdRef.detectChanges();
                        }
                    }
                    this.exportedPage = res.listData;
                }
            }
        }));
    }
    sortConfig() {
        const pageIndex = this.activePage - 1;
        const modalRef = this.modalService.open(_form_component_sort_config_modal_sort_config_modal_component__WEBPACK_IMPORTED_MODULE_10__.SortConfigModalComponent, { size: 'lg' });
        modalRef.componentInstance.showData = this.configPage.fromGroup[pageIndex].controls;
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.configPage.fromGroup[pageIndex].controls = [];
                    this.configPage.fromGroup[pageIndex].controls = res.data;
                    this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 1].controls);
                    this.cdRef.detectChanges();
                }
            }
        });
    }
    reOrder() {
        const modalRef = this.modalService.open(_form_component_sort_config_modal_sort_config_modal_component__WEBPACK_IMPORTED_MODULE_10__.SortConfigModalComponent, { size: 'lg' });
        modalRef.componentInstance.showData = this.configPage.fromGroup;
        modalRef.componentInstance.type = 'page';
        modalRef.result.then(() => { }, (res) => {
            if (res) {
                if (res.type == 'save') {
                    this.configPage.fromGroup = [];
                    this.configPage.fromGroup = res.data;
                    this.dynForm.newFormCreate(this.configPage.fromGroup[this.activePage - 1].controls);
                    this.cdRef.detectChanges();
                }
            }
        });
    }
};
PageConfigComponent.ctorParameters = () => [
    { type: _dashboard_services_form_ui_service__WEBPACK_IMPORTED_MODULE_11__.FormUIService },
    { type: _table_service__WEBPACK_IMPORTED_MODULE_14__.TableAPIService },
    { type: _col_service__WEBPACK_IMPORTED_MODULE_15__.ColAPIService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_21__.Location },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ChangeDetectorRef },
    { type: src_app_modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_17__.AlertService }
];
PageConfigComponent.propDecorators = {
    dynForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild, args: [_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__.DynamicFormComponent,] }],
    btnBox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild, args: [_form_component_button_box_button_box_component__WEBPACK_IMPORTED_MODULE_2__.ButtonBoxComponent,] }]
};
PageConfigComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({
        selector: 'app-page-config',
        template: _page_config_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_config_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageConfigComponent);



/***/ }),

/***/ 35068:
/*!*********************************************************!*\
  !*** ./src/app/pages/page-config/page-config.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageConfigModule": () => (/* binding */ PageConfigModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _page_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-config.component */ 82839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 12160);
/* harmony import */ var _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-component/form-component.module */ 78798);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _col_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./col.service */ 94125);
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.service */ 41676);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 71659);












let PageConfigModule = class PageConfigModule {
};
PageConfigModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_page_config_component__WEBPACK_IMPORTED_MODULE_0__.PageConfigComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
            _form_component_form_component_module__WEBPACK_IMPORTED_MODULE_2__.FormComponentModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__.DashboardShareModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([
                {
                    path: '',
                    component: _page_config_component__WEBPACK_IMPORTED_MODULE_0__.PageConfigComponent,
                },
            ]),
        ],
        providers: [_col_service__WEBPACK_IMPORTED_MODULE_3__.ColAPIService, _table_service__WEBPACK_IMPORTED_MODULE_4__.TableAPIService]
    })
], PageConfigModule);



/***/ }),

/***/ 67875:
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

/***/ 76421:
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

/***/ 63054:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 60231);

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

/***/ 62535:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 76421);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 63054);



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

/***/ 60231:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 67875);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 53137:
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-config/page-config.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".card-footer {\n  box-shadow: none;\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InBhZ2UtY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9vdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59Il19 */";

/***/ }),

/***/ 57211:
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-config/page-config.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card mb-2\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title align-items-start flex-column mb-0\">\r\n          <div style=\"position: relative;z-index: 9;float: right;\">\r\n            <button class=\"btn btn-sm btn-primary mx-1\" style=\"float: right;\" (click)=\"reOrder()\">Reorder Pages</button>\r\n            <button class=\"btn btn-sm btn-primary mx-1\" style=\"float: right;\" (click)=\"saveForm()\">Save Config</button>\r\n          </div>\r\n          <h3 class=\"card-label font-weight-bolder text-dark left-border-image\">\r\n            {{item ?\r\n              item.pageName :\r\n              \"Testing\"}} Page Groups\r\n            <small>(Total Page - {{configPage.totalPage}})</small>\r\n            <span [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\" [cacheSVG]=\"true\"\r\n              class=\"svg-icon svg-icon-md svg-icon-secondary\" (click)=\"edit()\">\r\n            </span>\r\n          </h3>\r\n          <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Change your form settings for {{item ?\r\n            item.pageName :\r\n            \"Testing\"}}</span>\r\n          <hr>\r\n          <div class=\"my-2\">\r\n            <!-- <a class=\"btn btn-sm btn-outline-primary btn-icon font-weight-bold\"> -->\r\n            \r\n            <!-- </a> -->\r\n            <button class=\"btn btn-sm btn-primary mx-1\" (click)=\"openModalInput('input')\">Input</button>\r\n            <button class=\"btn btn-sm btn-primary mx-1\" (click)=\"openModalInput('date')\">Date</button>\r\n            <button class=\"btn btn-sm btn-primary\" (click)=\"openModalInput('select')\">Select</button>\r\n            <button class=\"btn btn-sm btn-primary mx-1\" (click)=\"openModalInput('radio')\">Radio</button>\r\n            <button class=\"btn btn-sm btn-primary\" (click)=\"openModalInput('checkbox')\">CheckBox</button>\r\n            <button class=\"btn btn-sm btn-primary mx-1\" (click)=\"openModal()\">Button</button>\r\n            <button class=\"btn btn-sm btn-primary\" (click)=\"openModalInput('file')\">File</button>\r\n            <button class=\"btn btn-sm btn-primary mx-1\" (click)=\"openModalInput('dialog')\">Dialog</button>\r\n            <button class=\"btn btn-sm btn-secondary mx-1\" (click)=\"openModalLabel()\">Label</button>\r\n            <button class=\"btn btn-sm btn-secondary mx-1\" (click)=\"addNewLine()\">New Line</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div style=\"float: right;z-index: 9;position: relative;\">\r\n\r\n          <button class=\"btn btn-sm btn-secondary mx-1\" (click)=\"editPage()\">Edit Page</button>\r\n\r\n          <button class=\"btn btn-sm btn-icon btn-secondary \" (click)=\"getNewPage()\">\r\n            <span [inlineSVG]=\"'./assets/media/svg/icons/Files/File-plus.svg'\" [cacheSVG]=\"true\"\r\n              class=\"svg-icon svg-icon-md svg-icon-light\"></span>\r\n          </button>\r\n\r\n          <button class=\"btn btn-sm btn-icon btn-danger mx-1\" *ngIf=\"activePage > 1\" (click)=\"removePage()\">\r\n            <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" [cacheSVG]=\"true\"\r\n              class=\"svg-icon svg-icon-md svg-icon-light\"></span>\r\n          </button>\r\n\r\n          <button class=\"btn btn-sm btn-icon btn-warning\" *ngIf=\"activePage > 1\" (click)=\"backPage()\">\r\n            <span [inlineSVG]=\"'./assets/media/svg/icons/Navigation/Angle-double-left.svg'\" [cacheSVG]=\"true\"\r\n              class=\"svg-icon svg-icon-md svg-icon-light\"></span>\r\n          </button>\r\n\r\n          <button class=\"btn btn-sm btn-icon btn-danger mx-1\" *ngIf=\"activePage < configPage.totalPage\"\r\n            (click)=\"nextPage()\">\r\n            <span [inlineSVG]=\"'./assets/media/svg/icons/Navigation/Angle-double-right.svg'\" [cacheSVG]=\"true\"\r\n              class=\"svg-icon svg-icon-md svg-icon-light\"></span>\r\n          </button>\r\n\r\n        </div>\r\n        <h4 class=\"card-label font-weight-bolder text-dark left-border-image\">Page {{activePage}} <span\r\n            *ngIf=\"configPage.fromGroup[activePage-1].pageTitle\">( {{configPage.fromGroup[activePage-1].pageTitle}} )\r\n          </span>-\r\n          <span *ngIf=\"configPage.fromGroup[activePage-1].pageType\">{{(configPage.fromGroup[activePage-1].pageType ==\r\n            'form' ? \"page\" : configPage.fromGroup[activePage-1].pageType) | titlecase}}</span>\r\n          <!-- <i class=\"fa {{configPage.fromGroup[activePage-1].pageIcon}}\"></i> -->\r\n\r\n          <button class=\"btn btn-sm  btn-warning mx-1\" *ngIf=\"activePage > 1\" (click)=\"moveBack()\">\r\n            Move To Back\r\n          </button>\r\n\r\n          <button class=\"btn btn-sm  btn-danger mx-1\" *ngIf=\"activePage < configPage.totalPage\" (click)=\"moveNext()\">\r\n            Move To Next\r\n          </button>\r\n        </h4>\r\n        <span class=\"text-muted font-weight-bold font-size-sm mt-1 cursor-pointer\" style=\"text-decoration: underline;\"\r\n          (click)=\"sortConfig()\">Click here change your form list sorting</span>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <ng-container>\r\n          <dynamic-form #dynForm [config]=\"configPage.fromGroup[activePage-1].controls\" [editStage]=\"true\"\r\n            (onEdit)=\"editInput($event)\"></dynamic-form>\r\n        </ng-container>\r\n        <div class=\"row\">\r\n          <div app-button-box *ngFor=\"let contact of configPage.fromGroup[activePage-1].buttons; let i = index\"\r\n            [config]=\"contact\" (eventE)=\"clickBtn($event)\" [index]=\"i\"\r\n            class=\"col-xs-{{contact.size}} col-sm-{{contact.size}} {{contact.position}} mt-2\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div class=\"btn-group  d-flex\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"importPage()\">Import In Page</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"exportPage()\">Export This Page</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-config_page-config_module_ts.js.map