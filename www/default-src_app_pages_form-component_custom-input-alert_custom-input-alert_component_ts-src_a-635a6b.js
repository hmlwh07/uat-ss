"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_form-component_custom-input-alert_custom-input-alert_component_ts-src_a-635a6b"],{

/***/ 2960:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 62783);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_Users_casperakm_Work_Bss_KBZ_SALE_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/biz.operation.service */ 91691);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _modules_loading_toast_toast_kbz_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/loading-toast/toast/kbz-toast.service */ 18829);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 17498);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 2960);









const API_UPLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/attachment-uploader`;
let AttachmentUploadService = class AttachmentUploadService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_UPLOAD_URL);
        this.httpClient = httpClient;
    }
};
AttachmentUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
AttachmentUploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], AttachmentUploadService);

const API_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/attachment-downloader`;
let AttachmentDownloadService = class AttachmentDownloadService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient, file, loadingService, toastService) {
        super(httpClient, API_DOWNLOAD_URL);
        this.httpClient = httpClient;
        this.file = file;
        this.loadingService = loadingService;
        this.toastService = toastService;
    }
    getDownload(id, fileName) {
        this.httpClient.get(API_DOWNLOAD_URL + "/" + id, { responseType: 'blob' }).toPromise().then((res) => {
            if (res) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.isNativePlatform()) {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const url = URL.createObjectURL(res);
            this.file.checkDir(this.file.externalRootDirectory, 'kbzsale_downloads').then(response => {
                this.createFile(fileName, res);
            }).catch(error => {
                this.file.createDir(this.file.externalRootDirectory, 'kbzsale_downloads', false).then(response => {
                    this.createFile(fileName, res);
                }).catch((e) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(e);
                    yield this.loadingService.deactivate();
                    this.toastService.activate("File Error");
                }));
            });
        });
    }
    createFile(fileName, blobFile) {
        this.file.writeFile(this.file.externalRootDirectory + "/kbzsale_downloads", fileName, blobFile, { replace: true }).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingService.deactivate();
            this.toastService.activate('Download File');
        })).catch((e) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(e);
            yield this.loadingService.deactivate();
            this.toastService.activate('Download File');
        }));
    }
};
AttachmentDownloadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _modules_loading_toast_toast_kbz_toast_service__WEBPACK_IMPORTED_MODULE_3__.KBZToastService }
];
AttachmentDownloadService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
AttachmentServiceRef = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], AttachmentServiceRef);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_casperakm_Work_Bss_KBZ_SALE_node_modules_ngtools_webpack_src_loaders_direct_resource_js_custom_input_alert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./custom-input-alert.component.html */ 32013);
/* harmony import */ var _custom_input_alert_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-input-alert.component.scss */ 93106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/core/services/attachment-data.service */ 63002);







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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (event) {
                const file = event.target.files[0];
                console.log(file);
                const reader = new FileReader();
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal },
    { type: src_app_metronic_core_services_attachment_data_service__WEBPACK_IMPORTED_MODULE_2__.AttachmentUploadService }
];
CustomInputAlertComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    oldId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    selectedFileEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['selectedFile',] }]
};
CustomInputAlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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