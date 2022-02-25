"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_form-component_custom-input-alert_custom-input-alert_component_ts-src_a-635a6b"],{

/***/ 31248:
/*!*****************************************!*\
  !*** ./src/app/core/get-file-reader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFileReader": () => (/* binding */ getFileReader)
/* harmony export */ });
function getFileReader() {
    const fileReader = new FileReader();
    const zoneOriginalInstance = fileReader["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
}


/***/ }),

/***/ 91471:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-component/custom-input-alert/custom-input-alert.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomInputAlertComponent": () => (/* binding */ CustomInputAlertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_input_alert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-input-alert.component.html */ 32013);
/* harmony import */ var _custom_input_alert_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-input-alert.component.scss */ 93106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 63002);
/* harmony import */ var _core_get_file_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/get-file-reader */ 31248);








let CustomInputAlertComponent = class CustomInputAlertComponent {
    constructor(fb, modal, AttachmentUploadService) {
        this.fb = fb;
        this.modal = modal;
        this.AttachmentUploadService = AttachmentUploadService;
        this.oldId = "";
        this.fileName = "";
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    save() {
        if (this.type == 'reason') {
            this.modal.dismiss(this.lostReason);
        }
        if (this.type == 'description') {
            this.modal.dismiss({ data: this.fileData, description: this.description });
        }
    }
    importDocument(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (event) {
                const file = event.target.files[0];
                console.log(file);
                const reader = (0,_core_get_file_reader__WEBPACK_IMPORTED_MODULE_3__.getFileReader)();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    // console.log(reader);
                    if (reader.result) {
                        let base64 = reader.result.toString().split(",")[1];
                        let data = {
                            fileStr: base64,
                            fileName: file.name,
                            fileType: file.type,
                            fileSize: file.size,
                            contentType: file.type,
                            fileExtension: file.name.split('.').pop(),
                        };
                        this.fileName = file.name;
                        this.fileData = data;
                    }
                    ;
                };
            }
        });
    }
    openFile() {
        this.selectedFileEl.nativeElement.click();
    }
};
CustomInputAlertComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__.AttachmentUploadService }
];
CustomInputAlertComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    oldId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    selectedFileEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['selectedFile',] }]
};
CustomInputAlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-custom-input-alert',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_input_alert_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_custom_input_alert_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomInputAlertComponent);



/***/ }),

/***/ 22869:
/*!************************************************************!*\
  !*** ./src/app/pages/form-component/nrc-popup/nrc-data.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nrcData": () => (/* binding */ nrcData)
/* harmony export */ });
const nrcData = [
    {
        stage: "01",
        township: [
            'KhaPhaNa',
            'KhaLaNa',
            'SaLaNa',
            'SaPaBa',
            'TaNaNa',
            'NaMaNa',
            'PaTaAh',
            'PhaKaNa',
            'BaMaNa',
            'MaKaNa',
            'MaNyaNa',
            'MaKaNa',
            'MaHsaNa',
            'MaKhaBa',
            'MaMaNa',
            'YaKaNa',
            'WaMaNa',
            'AhGaYa',
        ]
    },
    {
        stage: "02",
        township: [
            'DaMaSa',
            'PhaSaNa',
            'PhaYaSa',
            'BaLaKha',
            'MaHsaNa',
            'YaTaNa',
            'YaThaNa',
            'LaKaNa',
        ]
    },
    {
        stage: "03",
        township: [
            'KaKaYa',
            'KaSaKa',
            'PhaPaNa',
            'BaAhNa',
            'MaWaTa',
            'LaBaNa',
            'ThaTaNa',
        ]
    },
    {
        stage: "04",
        township: [
            'KaPaLa',
            'TaTaNa',
            'TaZaNa',
            'HtaTaLa',
            'PaLaWa',
            'PhaLaNa',
            'MaTaNa',
            'MaTaPa',
            'HaKhaNa',
        ]
    },
    {
        stage: "05",
        township: [
            'KaLaNa',
            'KhaNaTa',
            'KaThaNa',
            'KaBaLa',
            'MaLaNa',
            'MaYaNa',
            'YaBaNa',
            'TaMaNa',
            'YaMaPa',
            'AhYaTa',
            'BaTaLa',
            'KhaOuNa',
            'DaPaYa',
            'HaMaLa',
            'AhTaNa',
            'KaLaWa',
            'KaNaNa',
            'KaLaNa',
            'KhaOuNa',
            'KaLaNa',
            'MaMaNa',
            'MaMaNa',
            'PaLaNa',
            'PhaPaNa',
            'PaLaBa',
            'SaLaKa',
            'HsaKaNa',
            'TaSaNa',
            'HtaKhaNa',
            'WaLaNa',
            'WaThaNa',
            'BaMaNa',
            'NaYaNa',
            'YaOuNa',
            'MaKaNa',
            'LaYaNa',
            'LaHaNa',
        ]
    },
    {
        stage: "06",
        township: [
            'HtaWaNa',
            'MaMaNa',
            'KaThaNa',
            'LaLaNa',
            'ThaYaKha',
            'YaPhaNa',
            'KaHsaNa',
            'PaLaNa',
            'BaPaNa',
            'PaLaNa',
        ]
    },
    {
        stage: "07",
        township: [
            'PaKhaNa',
            'KaTaKha',
            'ZaKaNa',
            'NyaLaPa',
            'TaNgaNa',
            'NaTaLa',
            'KaWaNa',
            'PaMaNa',
            'PaTaNa',
            'PhaMaNa',
            'MaLaNa',
            'YaTaYa',
            'LaPaTa',
            'WaMaNa',
            'ThaWaTa',
            'ThaKaNa',
            'AhPhaNa',
            'MaNyaNa',
            'PaKhaNa',
            'DaOuNa',
            'ThaNaPa',
            'HtaTaPa',
            'AhTaNa',
            'KaKaNa',
            'YaKaNa',
            'KaPaKa',
            'YaTaNa',
            'PaTaNa',
        ]
    },
    {
        stage: "08",
        township: [
            'MaKaNa',
            'KhaMaNa',
            'PaKhaKa',
            'ThaYaNa',
            'GaGaNa',
            'NaMaNa',
            'MaThaNa',
            'YaNaKha',
            'TaTaKa',
            'MaBaNa',
            'PaPhaNa',
            'HsaLaNa',
            'NgaPhaNa',
            'HsaTaYa',
            'SaPhaNa',
            'YaHsaKa',
            'MaMaNa',
            'PaMaNa',
            'HtaLaNa',
            'SaMaNa',
            'AhLaNa',
            'SaPaWa',
            'MaTaNa',
            'MaLaNa',
            'KaMaNa',
        ]
    },
    {
        stage: "09",
        township: [
            'KaSaNa',
            'MaHtaLa',
            'MaKhaNa',
            'NyaOuNa',
            'PaOuLa',
            'YaMaTha',
            'AhMaZa',
            'KhaAhZa',
            'MaHaMa',
            'KhaMaHsa',
            'PaKaKha',
            'AhMaYa',
            'PaThaKa',
            'MaTaYa',
            'HsaKaNa',
            'MaKaNa',
            'ThaPaKa',
            'HsaKaNa',
            'MaThaNa',
            'TaTaOu',
            'TaThaNa',
            'NaHtaKa',
            'KaPaTa',
            'NgaZaNa',
            'PaBaNa',
            'MaLaNa',
            'ThaHsaNa',
            'WaTaNa',
        ]
    },
    {
        stage: "10",
        township: [
            'ThaHtaNa',
            'MaLaMa',
            'KaMaYa',
            'KaHtaNa',
            'KhaSaNa',
            'PaMaNa',
            'BaLaNa',
            'MaDaNa',
            'YaMaNa',
            'ThaPhaYa',
        ]
    },
    {
        stage: "11",
        township: [
            'AhMaNa',
            'GaMaNa',
            'KaTaNa',
            'MaPaNa',
            'MaOuNa',
            'MaAhNa',
            'MaPaNa',
            'PaTaNa',
            'PaNaKa',
            'YaBaNa',
            'YaThaTa',
            'TaKaNa',
            'HsaTaNa',
            'BaThaTa',
            'MaTaNa',
            'KaPhaNa',
            'ThaTaNa',
        ]
    },
    {
        stage: "12",
        township: [
            'TaMaNa',
            'OuKaTa',
            'DaGaSa',
            'DaGaTa',
            'DaGaMa',
            'DaGaYa',
            'DaPaNa',
            'PaZaTa',
            'BaTaHta',
            'MaGaTa',
            'OuKaMa',
            'YaKaNa',
            'ThaGaKa',
            'ThaKaTa',
            'KaMaYa',
            'KaTaTa',
            'KaMaTa',
            'HsaKhaNa',
            'SaKaNa',
            'DaGaNa',
            'PaBaTa',
            'BaHaNa',
            'MaYaKa',
            'LaMaTa',
            'LaThaNa',
            'LaMaNa',
            'AhLaNa',
            'TaKaNa',
            'HtaTaPa',
            'MaGaDa',
            'MaBaNa',
            'YaPaTha',
            'LaKaNa',
            'LaThaYa',
            'AhHsaNa',
            'KaTaNa',
            'KaKhaKa',
            'KaKaKa',
            'KaMaNa',
            'KhaYaNa',
            'SaKaKha',
            'TaTaNa',
            'DaLaNa',
            'ThaLaNa',
            'ThaKhaNa',
        ]
    },
    {
        stage: "13",
        township: [
            'TaKaNa',
            'LaYaNa',
            'KaTaNa',
            'LaLaNa',
            'LaKaNa',
            'LaKhaNa',
            'KaMaNa',
            'MaSaNa',
            'KaLaNa',
            'TaKhaLa',
            'MaSaNa',
            'MaPhaNa',
            'HaPaNa',
            'HaPaNa',
            'PaTaYa',
            'NaSaNa',
            'NaMaTa',
            'NaKhaNa',
            'ThaPaNa',
            'MaTaNa',
            'MaMaNa',
            'MaBaNa',
            'NaKhaNa',
            'KaKhaNa',
            'TaYaNa',
            'MaYaNa',
            'MaMaNa',
            'NaHsaNa',
            'YaSaKa',
            'YaNgaNa',
            'NyaYaNa',
            'PaLaNa',
            'SaSaNa',
            'MaNaNa',
            'MaPaNa',
            'MaKaNa',
            'KaHaNa',
            'KaKaNa',
            'MaKhaNa',
            'PhaKhaNa',
            'LaKhaNa',
            'MaMaNa',
            'KaThaNa',
            'KaLaNa',
            'MaYaNa',
            'MaPaNa',
            'MaTaNa',
            'MaYaNa',
            'MaLaNa',
            'MaYaNa',
            'MaMaNa',
            'AhPaNa',
            'YaNyaNa',
            'AhThaYa',
            'KaTaLa',
            'NaTaYa',
            'PaLaNa',
            'KaTaNa',
            'HaMaNa',
            'AhTaNa',
            'MaNaMa',
            'MaNgaNa',
            'TaMaNya',
            'MaKaNa',
            'MaHaYa',
            'KhaYaHa',
            'NaTaNa',
            'TaTaNa',
            'TaLaNa',
            'KaLaNa',
            'MaYaNa',
            'MaKhaNa',
            'MaPaNa',
        ]
    },
    {
        stage: "14",
        township: [
            'PaThaNa',
            'HaThaTa',
            'MaAhPa',
            'MaMaNa',
            'PhaPaNa',
            'LaPaTa',
            'KaKaHta',
            'NgaPaTa',
            'ThaPaNa',
            'KaKaNa',
            'KaPaNa',
            'YaKaNa',
            'ZaLaNa',
            'LaMaNa',
            'MaAhNa',
            'KaKhaNa',
            'AhGaPa',
            'AhMaNa',
            'WaKhaMa',
            'PaTaNa',
            'NyaTaNa',
            'DaNaPha',
            'BaKaLa',
            'KaLaNa',
            'DaDaYa',
            'MaMaKa',
        ]
    },
];


/***/ }),

/***/ 69523:
/*!******************************************************************!*\
  !*** ./src/app/pages/form-component/nrc-popup/nrc-popup.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NrcPopupPage": () => (/* binding */ NrcPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nrc_popup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./nrc-popup.page.html */ 96901);
/* harmony import */ var _nrc_popup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nrc-popup.page.scss */ 96000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _nrc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nrc-data */ 22869);







let NrcPopupPage = class NrcPopupPage {
    constructor(modal, cdf) {
        this.modal = modal;
        this.cdf = cdf;
        this.nrcStage = _nrc_data__WEBPACK_IMPORTED_MODULE_2__.nrcData;
        this.submited = false;
        this.townShip = [];
    }
    ngOnInit() {
        this.setForm();
    }
    setForm() {
        this.nrcForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            "stage": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            "township": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            "prefix": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('N', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            "nrc": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]),
        });
    }
    save() {
        this.submited = true;
        if (this.nrcForm.invalid)
            return false;
        let value = this.nrcForm.value;
        let nrc = `${value.stage}/${value.township}(${value.prefix})${value.nrc}`;
        this.group.controls[this.config.name].setValue(nrc);
        this.modal.dismiss('save');
    }
    dismiss() {
        this.modal.dismiss();
    }
    changeStage() {
        let stage = this.nrcForm.value.stage;
        if (stage) {
            let index = this.nrcStage.findIndex(x => x.stage == stage);
            this.townShip = index >= 0 ? this.nrcStage[index].township : [];
            this.nrcForm.controls['township'].setValue(this.townShip[0]);
            this.cdf.detectChanges();
        }
    }
    isControlValid(controlName) {
        const control = this.nrcForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.nrcForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.nrcForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.nrcForm.controls[controlName];
        return control.dirty || control.touched;
    }
};
NrcPopupPage.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
NrcPopupPage.propDecorators = {
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
NrcPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-nrc-popup',
        template: _D_03_mobile_app_09_kbz_ms_mobile_bss_kbzms_sales_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nrc_popup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nrc_popup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NrcPopupPage);



/***/ }),

/***/ 32013:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/custom-input-alert/custom-input-alert.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='reason'&& status=='04'\">\r\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Reject Reason</span>\r\n        </div>\r\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='reason'&& status=='06'\">\r\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Lost Reason</span>\r\n        </div>\r\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='description'\">\r\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Attachment Description</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"overlay overlay-block cursor-default modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\" *ngIf=\"type=='reason'\">\r\n                <textarea type=\"text\" class=\" form-control form-control-sm\" name=\"lostReason\" placeholder=\"Reason\" autocomplete=\"off\" [(ngModel)]=\"lostReason\"></textarea>\r\n            </div>\r\n            <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\r\n                <input type=\"text\" class=\" form-control form-control-sm\" name=\"description\" placeholder=\"Description\" autocomplete=\"off\" [(ngModel)]=\"description\">\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top: 25px;\">\r\n            <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\r\n                <input style=\"display: none;\" type=\"file\" class=\"form-control form-control-sm\" name=\"phone\" #selectedFile (change)=\"importDocument($event)\" />\r\n                <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"fileName\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openFile()\">Browse</button>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\r\n                    <input type=\"file\" #selectedFile (change)=\"importHCPDocument($event)\" />\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" *ngIf=\"type=='description'\" class=\"btn btn-light btn-elevate mr-2\" [disabled]=\"!description\" (click)=\"save()\">Save</button>\r\n                <button type=\"button\" *ngIf=\"type=='reason'\" class=\"btn btn-light btn-elevate mr-2\" [disabled]=\"!lostReason\" (click)=\"save()\">Save</button>\r\n                <button class=\"btn btn-primary btn-elevate\" (click)=\"modal.dismiss()\">Cancel</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>");

/***/ }),

/***/ 96901:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/form-component/nrc-popup/nrc-popup.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\r\n      NRC ID\r\n    </div>\r\n  </div>\r\n  <div class=\"overlay overlay-block cursor-default modal-body\">\r\n    <form [formGroup]=\"nrcForm\" (ngSubmit)=\"save()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">State No</label>\r\n            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('stage')\" placeholder=\"State No\"\r\n              formControlName=\"stage\" (change)=\"changeStage()\">\r\n              <ng-option [value]=\"'01'\">01(Kachin)</ng-option>\r\n              <ng-option [value]=\"'02'\">02(Kayar)</ng-option>\r\n              <ng-option [value]=\"'03'\">03(Kayin)</ng-option>\r\n              <ng-option [value]=\"'04'\">04(Chin)</ng-option>\r\n              <ng-option [value]=\"'05'\">05(Sagaing)</ng-option>\r\n              <ng-option [value]=\"'06'\">06(Tanintharyi)</ng-option>\r\n              <ng-option [value]=\"'07'\">07(Bago)</ng-option>\r\n              <ng-option [value]=\"'08'\">08(Magwe)</ng-option>\r\n              <ng-option [value]=\"'09'\">09(Mandalay)</ng-option>\r\n              <ng-option [value]=\"'10'\">10(Mon)</ng-option>\r\n              <ng-option [value]=\"'11'\">11(Rakhine)</ng-option>\r\n              <ng-option [value]=\"'12'\">12(Yangon)</ng-option>\r\n              <ng-option [value]=\"'13'\">13(Shan)</ng-option>\r\n              <ng-option [value]=\"'14'\">14(Ayarwaddy)</ng-option>\r\n            </ng-select>\r\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'stage')\">State No is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">District</label>\r\n            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('township')\" placeholder=\"District\"\r\n              formControlName=\"township\">\r\n              <ng-container *ngFor=\"let item of townShip\">\r\n                <ng-option [value]=\"item\">{{item}}</ng-option>\r\n              </ng-container>\r\n            </ng-select>\r\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'township')\">District is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">Type</label>\r\n            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('prefix')\" placeholder=\"Type\"\r\n              formControlName=\"prefix\">\r\n              <ng-option [value]=\"'N'\">N</ng-option>\r\n              <ng-option [value]=\"'P'\">P</ng-option>\r\n              <ng-option [value]=\"'Y'\">Y</ng-option>\r\n              <ng-option [value]=\"'E'\">E</ng-option>\r\n              <ng-option [value]=\"'T'\">T</ng-option>\r\n            </ng-select>\r\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'prefix')\">Type is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">NRC No</label>\r\n            <input type=\"tel\" class=\"form-control form-control-sm\" name=\"nrc\" autocomplete=\"off\"\r\n              [class.is-invalid]=\"isControlInvalid('nrc')\" [class.is-valid]=\"isControlValid('nrc')\"\r\n              formControlName=\"nrc\" minLength=\"6\" maxLength='6' />\r\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'nrc')\">NRC No is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 93106:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/form-component/custom-input-alert/custom-input-alert.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".active {\n  background-color: #3699FF !important;\n  color: white;\n}\n\n.btn-box {\n  text-align: end;\n}\n\n.btn-box input {\n  position: absolute;\n  width: 127%;\n  height: 100%;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1pbnB1dC1hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFUiIsImZpbGUiOiJjdXN0b20taW5wdXQtYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjk5RkYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1ib3gge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTI3JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 96000:
/*!********************************************************************!*\
  !*** ./src/app/pages/form-component/nrc-popup/nrc-popup.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".rowStyle {\n  margin-top: 10px;\n  color: #000;\n}\n\n.columnStyle {\n  text-align: center;\n  font-size: var(--label-size);\n}\n\n.input {\n  border-bottom: 1px #A1AAAD solid;\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  font-size: 8pt !important;\n  color: gray;\n}\n\n.input-box {\n  border-bottom: 1px #A1AAAD solid;\n  width: 100%;\n  display: inline-block;\n  margin: 15px 0px;\n  text-align: center;\n}\n\n.textColor {\n  color: #2C66FF;\n}\n\n.header-style {\n  box-shadow: 0px 4px 5px #ccc;\n  padding: 15px 20px;\n  margin-bottom: 20px;\n}\n\n.input-border {\n  border: 0.5px solid #333;\n  border-radius: 2px;\n  width: 100%;\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5yYy1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0QsV0FBQTtFQUNDLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDRCxrQkFBQTtBQUNIOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoibnJjLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dTdHlsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3IgICAgIDogIzAwMDtcclxufVxyXG5cclxuLmNvbHVtblN0eWxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZSA6IHZhcigtLWxhYmVsLXNpemUpO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbSAgIDogMXB4ICNBMUFBQUQgc29saWQ7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgZGlzcGxheSAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gcGFkZGluZyAgICAgIDogMTVweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDhwdCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4uaW5wdXQtYm94e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNBMUFBQUQgc29saWQ7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dENvbG9yIHtcclxuICAgIGNvbG9yOiAjMkM2NkZGO1xyXG59XHJcblxyXG4uaGVhZGVyLXN0eWxlIHtcclxuICAgIGJveC1zaGFkb3cgICA6IDBweCA0cHggNXB4ICNjY2M7XHJcbiAgICBwYWRkaW5nICAgICAgOiAxNXB4IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYm9yZGVyIHtcclxuICAgIGJvcmRlciAgICAgICA6IDAuNXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aCAgICAgICAgOiAxMDAlO1xyXG4gICAgbWFyZ2luICAgICAgIDogMTBweCAwcHg7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_form-component_custom-input-alert_custom-input-alert_component_ts-src_a-635a6b.js.map