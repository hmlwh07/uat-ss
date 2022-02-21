"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_form-component_custom-input-alert_custom-input-alert_component_ts-src_a-635a6b"],{

/***/ 75800:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;
(function (Directory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory.
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["Data"] = "DATA";
    /**
     * The Library directory
     * On iOS it will use the Library directory.
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.1.0
     */
    Directory["Library"] = "LIBRARY";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     *
     * @since 1.0.0
     */
    Directory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function (Encoding) {
    /**
     * Eight-bit UCS Transformation Format
     *
     * @since 1.0.0
     */
    Encoding["UTF8"] = "utf8";
    /**
     * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
     * Unicode character set
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["ASCII"] = "ascii";
    /**
     * Sixteen-bit UCS Transformation Format, byte order identified by an
     * optional byte-order mark
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;


/***/ }),

/***/ 61414:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 75800);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 85250)).then(m => new m.FilesystemWeb()),
});




/***/ }),

/***/ 24063:
/*!***********************************************************!*\
  !*** ./node_modules/capacitor-blob-writer/blob_writer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 61414);
/*jslint browser */



const BlobWriter = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("BlobWriter");

function array_buffer_to_base64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary_string = "";
    let byte_nr = 0;
    while (true) {
        if (byte_nr >= bytes.byteLength) {
            break;
        }
        binary_string += String.fromCharCode(bytes[byte_nr]);
        byte_nr += 1;
    }
    return window.btoa(binary_string);
}

function append_blob(directory, path, blob) {
    if (blob.size === 0) {
        return Promise.resolve();
    }

// By choosing a chunk size which is a multiple of 3, we avoid a bug in
// Filesystem.appendFile, only on the web platform, which corrupts files by
// inserting Base64 padding characters within the file. See
// https://github.com/ionic-team/capacitor-plugins/issues/649.

    const chunk_size = 3 * 128 * 1024;
    const chunk_blob = blob.slice(0, chunk_size);

// Read the Blob as an ArrayBuffer, then append it to the file on disk.

    return new window.Response(chunk_blob).arrayBuffer().then(
        function append_chunk_to_file(buffer) {
            return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.appendFile({
                directory,
                path,
                data: array_buffer_to_base64(buffer)
            });
        }
    ).then(function write_remaining() {
        return append_blob(directory, path, blob.slice(chunk_size));
    });
}


function write_file_via_bridge({
    path,
    directory,
    blob,
    recursive
}) {

// Firstly, create & truncate the file.

    return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
        directory,
        path,
        recursive,
        data: ""
    }).then(function ({uri}) {

// Now write the file incrementally so we do not exceed our memory limits when
// attempting to Base64 encode the entire Blob at once.

        return append_blob(directory, path, blob).then(function () {
            return uri;
        });
    });
}

function write_blob(options) {
    const {
        path,
        directory,
        blob,
        recursive,
        on_fallback
    } = options;
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.platform !== "ios" && _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.platform !== "android") {
        return write_file_via_bridge(options);
    }
    return Promise.all([
        BlobWriter.get_config(),
        _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.getUri({path, directory})
    ]).then(function on_success([config, file_info]) {
        const {base_url, auth_token} = config;
        const absolute_path = file_info.uri.replace("file://", "");
        return Promise.all([
            fetch(
                base_url + absolute_path + (
                    recursive
                    ? "?recursive=true"
                    : ""
                ),
                {
                    headers: {authorization: auth_token},
                    method: "put",
                    body: blob
                }
            ),
            Promise.resolve(file_info)
        ]);
    }).then(function ([response, file_info]) {
        if (response.status !== 204) {
            throw new Error("Bad HTTP status: " + response.status);
        }
        return file_info.uri;
    }).catch(function on_fail(error) {
        if (on_fallback !== undefined) {
            on_fallback(error);
        }
        return write_file_via_bridge(options);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze(write_blob));


/***/ }),

/***/ 63002:
/*!********************************************************************!*\
  !*** ./src/app/_metronic/core/services/attachment-data.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentUploadService": () => (/* binding */ AttachmentUploadService),
/* harmony export */   "AttachmentDownloadService": () => (/* binding */ AttachmentDownloadService),
/* harmony export */   "AttachmentServiceRef": () => (/* binding */ AttachmentServiceRef)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/biz.operation.service */ 91691);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 60940);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _modules_loading_toast_toast_kbz_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/loading-toast/toast/kbz-toast.service */ 18829);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 57154);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/filesystem */ 61414);
/* harmony import */ var capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! capacitor-blob-writer */ 24063);












const API_UPLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/attachment-uploader`;
let AttachmentUploadService = class AttachmentUploadService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_UPLOAD_URL);
        this.httpClient = httpClient;
    }
};
AttachmentUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
AttachmentUploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], AttachmentUploadService);

const API_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/attachment-downloader`;
let AttachmentDownloadService = class AttachmentDownloadService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient, file, loadingService, toastService, alertService) {
        super(httpClient, API_DOWNLOAD_URL);
        this.httpClient = httpClient;
        this.file = file;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.alertService = alertService;
    }
    getDownload(id, fileName) {
        this.httpClient.get(API_DOWNLOAD_URL + "/" + id, { responseType: 'blob' }).toPromise().then((res) => {
            if (res) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_6__.Capacitor.isNativePlatform()) {
                    this.mobileDownload(fileName, res);
                }
                else {
                    this.downloadFile(res, fileName);
                }
            }
            // this.downloadFile(res, fileName)
        });
    }
    downloadFile(data, fileName) {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(data);
        a.download = fileName;
        a.click();
        a.remove();
    }
    mobileDownload(fileName, res) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let ret = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_7__.Filesystem.mkdir({
                    path: 'kbzsale_downloads',
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_7__.Directory.Documents,
                    recursive: false,
                });
                console.log("folder ", ret);
                this.createFile(fileName, res);
            }
            catch (e) {
                this.createFile(fileName, res);
                //console.error("Unable to make directory", e);
            }
        });
    }
    createFile(fileName, blobFile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield (0,capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_8__["default"])({
                    path: "kbzsale_downloads/" + fileName,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_7__.Directory.Documents,
                    blob: blobFile
                });
                yield this.loadingService.deactivate();
                this.alertService.activate('"Download File', 'Success Message');
            }
            catch (error) {
                yield this.loadingService.deactivate();
                this.alertService.activate('"Download Fail', 'Error Message');
            }
        });
    }
};
AttachmentDownloadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _modules_loading_toast_toast_kbz_toast_service__WEBPACK_IMPORTED_MODULE_4__.KBZToastService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
AttachmentDownloadService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], AttachmentDownloadService);

const ATTAcHMENT_REF = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/attachment-ref`;
let AttachmentServiceRef = class AttachmentServiceRef extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, ATTAcHMENT_REF);
        this.httpClient = httpClient;
    }
    getAttachmentListRef(refDocNo, refDocType) {
        return this.httpClient.get(ATTAcHMENT_REF + "?refDocNo=" + refDocNo + "&refDocType=" + refDocType);
    }
};
AttachmentServiceRef.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
AttachmentServiceRef = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], AttachmentServiceRef);



/***/ }),

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
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_input_alert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-input-alert.component.html */ 32013);
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
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_input_alert_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nrc_popup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./nrc-popup.page.html */ 96901);
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
        template: _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nrc_popup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='reason'&& status=='04'\">\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Reject Reason</span>\n        </div>\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='reason'&& status=='06'\">\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Lost Reason</span>\n        </div>\n        <div class=\"modal-title h4 left-border-image\" *ngIf=\"type=='description'\">\n            <span class=\"text-muted font-weight-bold font-size-sm mt-1\">Please add Attachment Description</span>\n        </div>\n    </div>\n\n    <div class=\"overlay overlay-block cursor-default modal-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\" *ngIf=\"type=='reason'\">\n                <textarea type=\"text\" class=\" form-control form-control-sm\" name=\"lostReason\" placeholder=\"Reason\" autocomplete=\"off\" [(ngModel)]=\"lostReason\"></textarea>\n            </div>\n            <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\n                <input type=\"text\" class=\" form-control form-control-sm\" name=\"description\" placeholder=\"Description\" autocomplete=\"off\" [(ngModel)]=\"description\">\n            </div>\n\n        </div>\n        <div class=\"row\" style=\"margin-top: 25px;\">\n            <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\n                <input style=\"display: none;\" type=\"file\" class=\"form-control form-control-sm\" name=\"phone\" #selectedFile (change)=\"importDocument($event)\" />\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"fileName\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openFile()\">Browse</button>\n                    </div>\n                </div>\n                <!-- <div class=\"col-sm-12\" *ngIf=\"type=='description'\">\n                    <input type=\"file\" #selectedFile (change)=\"importHCPDocument($event)\" />\n                </div> -->\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-12\">\n\n            <div class=\"modal-footer\">\n                <button type=\"button\" *ngIf=\"type=='description'\" class=\"btn btn-light btn-elevate mr-2\" [disabled]=\"!description\" (click)=\"save()\">Save</button>\n                <button type=\"button\" *ngIf=\"type=='reason'\" class=\"btn btn-light btn-elevate mr-2\" [disabled]=\"!lostReason\" (click)=\"save()\">Save</button>\n                <button class=\"btn btn-primary btn-elevate\" (click)=\"modal.dismiss()\">Cancel</button>\n            </div>\n\n        </div>\n\n    </div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n      NRC ID\n    </div>\n  </div>\n  <div class=\"overlay overlay-block cursor-default modal-body\">\n    <form [formGroup]=\"nrcForm\" (ngSubmit)=\"save()\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">State No</label>\n            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('stage')\" placeholder=\"State No\"\n              formControlName=\"stage\" (change)=\"changeStage()\">\n              <ng-option [value]=\"'01'\">01(Kachin)</ng-option>\n              <ng-option [value]=\"'02'\">02(Kayar)</ng-option>\n              <ng-option [value]=\"'03'\">03(Kayin)</ng-option>\n              <ng-option [value]=\"'04'\">04(Chin)</ng-option>\n              <ng-option [value]=\"'05'\">05(Sagaing)</ng-option>\n              <ng-option [value]=\"'06'\">06(Tanintharyi)</ng-option>\n              <ng-option [value]=\"'07'\">07(Bago)</ng-option>\n              <ng-option [value]=\"'08'\">08(Magwe)</ng-option>\n              <ng-option [value]=\"'09'\">09(Mandalay)</ng-option>\n              <ng-option [value]=\"'10'\">10(Mon)</ng-option>\n              <ng-option [value]=\"'11'\">11(Rakhine)</ng-option>\n              <ng-option [value]=\"'12'\">12(Yangon)</ng-option>\n              <ng-option [value]=\"'13'\">13(Shan)</ng-option>\n              <ng-option [value]=\"'14'\">14(Ayarwaddy)</ng-option>\n            </ng-select>\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'stage')\">State No is required</div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">District</label>\n            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('township')\" placeholder=\"District\"\n              formControlName=\"township\">\n              <ng-container *ngFor=\"let item of townShip\">\n                <ng-option [value]=\"item\">{{item}}</ng-option>\n              </ng-container>\n            </ng-select>\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'township')\">District is required</div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Type</label>\n            <ng-select class=\"ng-custom-select\" [class.is-invalid]=\"isControlInvalid('prefix')\" placeholder=\"Type\"\n              formControlName=\"prefix\">\n              <ng-option [value]=\"'N'\">N</ng-option>\n              <ng-option [value]=\"'P'\">P</ng-option>\n              <ng-option [value]=\"'Y'\">Y</ng-option>\n              <ng-option [value]=\"'E'\">E</ng-option>\n              <ng-option [value]=\"'T'\">T</ng-option>\n            </ng-select>\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'prefix')\">Type is required</div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">NRC No</label>\n            <input type=\"tel\" class=\"form-control form-control-sm\" name=\"nrc\" autocomplete=\"off\"\n              [class.is-invalid]=\"isControlInvalid('nrc')\" [class.is-valid]=\"isControlValid('nrc')\"\n              formControlName=\"nrc\" minLength=\"6\" maxLength='6' />\n            <div class=\"invalid-feedback\" *ngIf=\"controlHasError('required', 'nrc')\">NRC No is required</div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"modal.dismiss()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" (click)=\"save()\">Save</button>\n  </div>\n</div>");

/***/ }),

/***/ 93106:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/form-component/custom-input-alert/custom-input-alert.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".active {\n  background-color: #3699FF !important;\n  color: white;\n}\n\n.btn-box {\n  text-align: end;\n}\n\n.btn-box input {\n  position: absolute;\n  width: 127%;\n  height: 100%;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1pbnB1dC1hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFUiIsImZpbGUiOiJjdXN0b20taW5wdXQtYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5OUZGICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWJveCB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTI3JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 96000:
/*!********************************************************************!*\
  !*** ./src/app/pages/form-component/nrc-popup/nrc-popup.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".rowStyle {\n  margin-top: 10px;\n  color: #000;\n}\n\n.columnStyle {\n  text-align: center;\n  font-size: var(--label-size);\n}\n\n.input {\n  border-bottom: 1px #A1AAAD solid;\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  font-size: 8pt !important;\n  color: gray;\n}\n\n.input-box {\n  border-bottom: 1px #A1AAAD solid;\n  width: 100%;\n  display: inline-block;\n  margin: 15px 0px;\n  text-align: center;\n}\n\n.textColor {\n  color: #2C66FF;\n}\n\n.header-style {\n  box-shadow: 0px 4px 5px #ccc;\n  padding: 15px 20px;\n  margin-bottom: 20px;\n}\n\n.input-border {\n  border: 0.5px solid #333;\n  border-radius: 2px;\n  width: 100%;\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5yYy1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0QsV0FBQTtFQUNDLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDRCxrQkFBQTtBQUNIOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoibnJjLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dTdHlsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvciAgICAgOiAjMDAwO1xufVxuXG4uY29sdW1uU3R5bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemUgOiB2YXIoLS1sYWJlbC1zaXplKTtcbn1cblxuLmlucHV0IHtcbiAgICBib3JkZXItYm90dG9tICAgOiAxcHggI0ExQUFBRCBzb2xpZDtcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xuICAgIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1ibG9jaztcbiAgICAvLyBwYWRkaW5nICAgICAgOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA4cHQgIWltcG9ydGFudDtcbiAgICBjb2xvcjpncmF5O1xufVxuLmlucHV0LWJveHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggI0ExQUFBRCBzb2xpZDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dENvbG9yIHtcbiAgICBjb2xvcjogIzJDNjZGRjtcbn1cblxuLmhlYWRlci1zdHlsZSB7XG4gICAgYm94LXNoYWRvdyAgIDogMHB4IDRweCA1cHggI2NjYztcbiAgICBwYWRkaW5nICAgICAgOiAxNXB4IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmlucHV0LWJvcmRlciB7XG4gICAgYm9yZGVyICAgICAgIDogMC41cHggc29saWQgIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd2lkdGggICAgICAgIDogMTAwJTtcbiAgICBtYXJnaW4gICAgICAgOiAxMHB4IDBweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_form-component_custom-input-alert_custom-input-alert_component_ts-src_a-635a6b.js.map