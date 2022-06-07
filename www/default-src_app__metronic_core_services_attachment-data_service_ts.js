"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app__metronic_core_services_attachment-data_service_ts"],{

/***/ 56289:
/*!********************************************************************!*\
  !*** ./src/app/_metronic/core/services/attachment-data.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentDownloadService": () => (/* binding */ AttachmentDownloadService),
/* harmony export */   "AttachmentServiceRef": () => (/* binding */ AttachmentServiceRef),
/* harmony export */   "AttachmentUploadService": () => (/* binding */ AttachmentUploadService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/biz.operation.service */ 38313);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/loading-toast/alert-model/alert.service */ 25492);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 16164);
/* harmony import */ var _modules_loading_toast_toast_kbz_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/loading-toast/toast/kbz-toast.service */ 43632);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 25453);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);
/* harmony import */ var capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! capacitor-blob-writer */ 60721);
/* harmony import */ var src_app_modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/languages/languages.service */ 96115);













const API_UPLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/attachment-uploader`;
let AttachmentUploadService = class AttachmentUploadService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_UPLOAD_URL);
        this.httpClient = httpClient;
    }
};
AttachmentUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient }
];
AttachmentUploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    })
], AttachmentUploadService);

const API_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/attachment-downloader`;
const API_TCS_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}`;
let AttachmentDownloadService = class AttachmentDownloadService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient, file, loadingService, toastService, alertService, translate) {
        super(httpClient, API_DOWNLOAD_URL);
        this.httpClient = httpClient;
        this.file = file;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.alertService = alertService;
        this.translate = translate;
    }
    getFile(url) {
        return this.httpClient.get(API_TCS_DOWNLOAD_URL + url, { responseType: 'blob' });
    }
    get(url, param) {
        return this.httpClient.get(API_TCS_DOWNLOAD_URL + url, { params: param });
    }
    mobileTCSDownload(fileName, res) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const url = URL.createObjectURL(res);
            this.file.checkDir(this.file.externalRootDirectory, 'kbzms_downloads').then(response => {
                this.createFile(fileName, res);
            }).catch(error => {
                this.file.createDir(this.file.externalRootDirectory, 'kbzms_downloads', false).then(response => {
                    this.createFile(fileName, res);
                }).catch((e) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(e);
                    yield this.loadingService.deactivate();
                    let msg = this.translate.transform("ERROR.file_error");
                    this.alertService.activate(msg, 'Download File');
                }));
            });
        });
    }
    downloadTCSFile(data, fileName) {
        // const blob = new Blob([data], { type: 'text/csv' });
        // const url= window.URL.createObjectURL(blob);
        // window.open(url);
        var a = document.createElement("a");
        a.href = URL.createObjectURL(data);
        a.download = fileName;
        a.click();
        let msg = this.translate.transform("ERROR.download_success");
        this.alertService.activate(msg, 'Download File');
        a.remove();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let ret = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_7__.Filesystem.mkdir({
                    path: 'kbzsale_downloads',
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_7__.Directory.Documents,
                    recursive: false,
                });
                // console.log("folder ", ret);
                this.createFile(fileName, res);
            }
            catch (e) {
                this.createFile(fileName, res);
                //console.error("Unable to make directory", e);
            }
        });
    }
    createFile(fileName, blobFile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _modules_loading_toast_toast_kbz_toast_service__WEBPACK_IMPORTED_MODULE_4__.KBZToastService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_modules_languages_languages_service__WEBPACK_IMPORTED_MODULE_9__.LanguagesService }
];
AttachmentDownloadService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient }
];
AttachmentServiceRef = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    })
], AttachmentServiceRef);



/***/ }),

/***/ 93568:
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

/***/ 91662:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 93568);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 64046)).then(m => new m.FilesystemWeb()),
});




/***/ }),

/***/ 60721:
/*!***********************************************************!*\
  !*** ./node_modules/capacitor-blob-writer/blob_writer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);
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


/***/ })

}]);
//# sourceMappingURL=default-src_app__metronic_core_services_attachment-data_service_ts.js.map