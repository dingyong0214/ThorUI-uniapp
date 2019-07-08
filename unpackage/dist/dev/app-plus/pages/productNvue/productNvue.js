// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../work/uniapp/ThorUI/pages/productNvue/productNvue.nvue?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../work/uniapp/ThorUI/pages/productNvue/productNvue.nvue?entry":
/*!**********************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/productNvue/productNvue.nvue?entry ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-loader!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-3591c612!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./productNvue.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-3591c612!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../../work/uniapp/ThorUI/pages/productNvue/productNvue.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/script-loader!babel-loader!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=script&index=0!./productNvue.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../../work/uniapp/ThorUI/pages/productNvue/productNvue.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/template-compiler?id=data-v-3591c612!../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=template&index=0!./productNvue.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-3591c612!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../../work/uniapp/ThorUI/pages/productNvue/productNvue.nvue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\work\\uniapp\\ThorUI\\pages\\productNvue\\productNvue.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3591c612"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
function initUni() {

    var isFn = function isFn(v) {
        return typeof v === 'function';
    };

    var handlePromise = function handlePromise(promise) {
        return promise.then(function(data) {
            return [null, data];
        }).catch(function(err) {
            return [err];
        });
    };

    var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
    var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
        'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
        'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
        'pageScrollTo', 'drawCanvas'
    ];

    var shouldPromise = function shouldPromise(name) {
        if (REGEX.test(name) && name !== 'createBLEConnection') {
            return false;
        }
        if (~API_NORMAL_LIST.indexOf(name)) {
            return false;
        }
        return true;
    };

    var promisify = function promisify(api) {
        return function() {
            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return api.apply(undefined, [options].concat(params));
            }
            return handlePromise(new Promise(function(resolve, reject) {
                api.apply(undefined, [Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                })].concat(params));
                /* eslint-disable no-extend-native */
                Promise.prototype.finally = function(callback) {
                    var promise = this.constructor;
                    return this.then(function(value) {
                        return promise.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return promise.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                };
            }));
        };
    };

    var onMessageCallbacks = [];

    var origin = void 0;

    function onSubNVueMessage(data) {
        onMessageCallbacks.forEach(function(callback) {
            return callback({
                origin: origin,
                data: data
            });
        });
    }

    var webviewId = weexPlus.webview.currentWebview().id;

    var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
    channel.onmessage = function(event) {
        if (event.data.to === webviewId) {
            onSubNVueMessage(event.data.data);
        }
    };

    function wrapper(webview) {
        webview.$processed = true;

        var currentWebviewId = weexPlus.webview.currentWebview().id;
        var isPopupNVue = currentWebviewId === webview.id;

        var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
        var popupNVueId = webview.id;

        webview.postMessage = function(data) {
            if (hostNVueId) {
                channel.postMessage({
                    data: data,
                    to: isPopupNVue ? hostNVueId : popupNVueId
                });
            } else {
                postMessage({
                    type: 'UniAppSubNVue',
                    data: data
                });
            }
        };
        webview.onMessage = function(callback) {
            onMessageCallbacks.push(callback);
        };

        if (!webview.__uniapp_mask_id) {
            return;
        }
        origin = webview.__uniapp_host;

        var maskColor = webview.__uniapp_mask;

        var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
        maskWebview = maskWebview.parent() || maskWebview;//再次检测父
        var oldShow = webview.show;
        var oldHide = webview.hide;
        var oldClose = webview.close;

        var showMask = function showMask() {
            maskWebview.setStyle({
                mask: maskColor
            });
        };
        var closeMask = function closeMask() {
            maskWebview.setStyle({
                mask: 'none'
            });
        };
        webview.show = function() {
            showMask();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return oldShow.apply(webview, args);
        };
        webview.hide = function() {
            closeMask();

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return oldHide.apply(webview, args);
        };
        webview.close = function() {
            closeMask();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return oldClose.apply(webview, args);
        };
    }

    function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }

    function getCurrentSubNVue() {
        return getSubNVueById(weexPlus.webview.currentWebview().id);
    }

    var plus = weex.requireModule('plus');
    var globalEvent = weex.requireModule('globalEvent');

    var id = 0;
    var callbacks = {};

    var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

    globalEvent.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppJsApi') {
            invoke(e.data.id, e.data.data);
        } else if (e.data.type === 'UniAppSubNVue') {
            onSubNVueMessage(e.data.data, e.data.options);
        } else if (e.data.type === 'onNavigationBarButtonTap') {
            if (typeof onNavigationBarButtonTapCallback === 'function') {
                onNavigationBarButtonTapCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
            if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
                onNavigationBarSearchInputChangedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
            if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
                onNavigationBarSearchInputConfirmedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
            if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
                onNavigationBarSearchInputClickedCallback(e.data.data);
            }
        }
    });

    var createCallback = function createCallback(args, type) {
        var callback = function callback(res) {
            if (isFn(args)) {
                args(res);
            } else if (args) {
                if (~res.errMsg.indexOf(':ok')) {
                    isFn(args.success) && args.success(res);
                } else if (~res.errMsg.indexOf(':fail')) {
                    isFn(args.fail) && args.fail(res);
                }
                isFn(args.complete) && args.complete(res);
            }
        };
        if (isFn(args) || args && isFn(args.callback)) {
            callback.keepAlive = true;
        }
        return callback;
    };

    var invoke = function invoke(callbackId, data) {
        var callback = callbacks[callbackId];
        if (callback) {
            callback(data);
            if (!callback.keepAlive) {
                delete callbacks[callbackId];
            }
        } else {
            console.error('callback[' + callbackId + '] is undefined');
        }
    };

    var publish = function publish(_ref) {
        var id = _ref.id,
            type = _ref.type,
            params = _ref.params;

        callbacks[id] = createCallback(params, type);
        plus.postMessage({
            id: id,
            type: type,
            params: params
        }, UNIAPP_SERVICE_NVUE_ID);
    };

    function postMessage(data) {
        plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
    }

    var createPublish = function createPublish(name) {
        return function(args) {
            publish({
                id: id++,
                type: name,
                params: args
            });
        };
    };

    var onNavigationBarButtonTapCallback = void 0;
    var onNavigationBarSearchInputChangedCallback = void 0;
    var onNavigationBarSearchInputConfirmedCallback = void 0;
    var onNavigationBarSearchInputClickedCallback = void 0;

    function onNavigationBarButtonTap(callback) {
        onNavigationBarButtonTapCallback = callback;
    }

    function onNavigationBarSearchInputChanged(callback) {
        onNavigationBarSearchInputChangedCallback = callback;
    }

    function onNavigationBarSearchInputConfirmed(callback) {
        onNavigationBarSearchInputConfirmedCallback = callback;
    }

    function onNavigationBarSearchInputClicked(callback) {
        onNavigationBarSearchInputClickedCallback = callback;
    }

    function requireNativePlugin(pluginName) {
        return weex.requireModule(pluginName);
    }

    var dom = weex.requireModule('dom');

    function loadFontFace(_ref) {
        var family = _ref.family,
            source = _ref.source,
            desc = _ref.desc,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        dom.addRule('fontFace', {
            fontFamily: family,
            src: source.replace(/"/g, '\'')
        });
        var res = {
            errMsg: 'loadFontFace:ok',
            status: 'loaded'
        };
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var globalEvent$1 = weex.requireModule('globalEvent');

    var callbacks$1 = [];

    globalEvent$1.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppReady') {
            ready.isUniAppReady = true;
            if (callbacks$1.length) {
                callbacks$1.forEach(function(callback) {
                    return callback();
                });
                callbacks$1 = [];
            }
        }
    });

    function ready(callback) {
        if (typeof callback === 'function') {
            if (this.isUniAppReady) {
                callback();
            } else {
                callbacks$1.push(callback);
            }
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
            "symbol" : typeof obj;
    };

    var stream = weex.requireModule('stream');

    // let requestTaskId = 0

    var METHOD_GET = 'GET';
    var METHOD_POST = 'POST';
    var CONTENT_TYPE_JSON = 'application/json';
    var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

    var serialize = function serialize(data) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
        var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
                return JSON.stringify(data);
            } else {
                return Object.keys(data).map(function(key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                }).join('&');
            }
        }
        return data;
    };

    function request(_ref) {
        var url = _ref.url,
            data = _ref.data,
            header = _ref.header,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$dataType = _ref.dataType,
            dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
            responseType = _ref.responseType,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        // requestTaskId++
        var aborted = false;

        var hasContentType = false;
        var headers = {};
        if (header) {
            for (var name in header) {
                if (!hasContentType && name.toLowerCase() === 'content-type') {
                    hasContentType = true;
                    headers['Content-Type'] = header[name];
                } else {
                    headers[name] = header[name];
                }
            }
        }
        if (method === METHOD_GET && data) {
            url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
                serialize(data);
        }
        stream.fetch({
            url: url,
            method: method,
            headers: headers,
            type: dataType === 'json' ? 'json' : 'text',
            body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
        }, function(_ref2) {
            var status = _ref2.status,
                ok = _ref2.ok,
                statusText = _ref2.statusText,
                data = _ref2.data,
                headers = _ref2.headers;

            var ret = {};
            if (!status || status === -1 || aborted) {
                ret.errMsg = 'request:fail';
                isFn(fail) && fail(ret);
            } else {
                ret.data = data;
                ret.statusCode = status;
                ret.header = headers;
                isFn(success) && success(ret);
            }
            isFn(complete) && complete(ret);
        });
        return {
            abort: function abort() {
                aborted = true;
            }
        };
    }

    var storage = weex.requireModule('plusstorage');
    var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

    function getStorage(_ref) {
        var key = _ref.key,
            data = _ref.data,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function(ret) {
            if (ret.result === 'success') {
                var dataType = ret.data;
                storage.getItem(key, function(res) {
                    if (res.result === 'success') {
                        var result = res.data;
                        if (dataType && result) {
                            if (dataType !== 'String') {
                                result = JSON.parse(result);
                            }
                            isFn(success) && success({
                                errMsg: 'getStorage:ok',
                                data: result
                            });
                        } else {
                            res.errMsg = 'setStorage:fail';
                            isFn(fail) && fail(res);
                        }
                    } else {
                        res.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(res);
                    }
                    isFn(complete) && complete(res);
                });
            } else {
                ret.errMsg = 'setStorage:fail';
                isFn(fail) && fail(ret);
                isFn(complete) && complete(ret);
            }
        });
    }

    function setStorage(_ref2) {
        var key = _ref2.key,
            data = _ref2.data,
            success = _ref2.success,
            fail = _ref2.fail,
            complete = _ref2.complete;

        var dataType = 'String';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            dataType = 'Object';
            data = JSON.stringify(data);
        }
        storage.setItem(key, data, function(res) {
            if (res.result === 'success') {
                storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function(ret) {
                    if (ret.result === 'success') {
                        isFn(success) && success({
                            errMsg: 'setStorage:ok'
                        });
                    } else {
                        ret.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(ret);
                    }
                });
            } else {
                res.errMsg = 'setStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
    }

    function removeStorage(_ref3) {
        var key = _ref3.key,
            data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        storage.removeItem(key, function(res) {
            if (res.result === 'success') {
                isFn(success) && success({
                    errMsg: 'removeStorage:ok'
                });
            } else {
                res.errMsg = 'removeStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
        storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
    }

    function clearStorage(_ref4) {
        var key = _ref4.key,
            data = _ref4.data,
            success = _ref4.success,
            fail = _ref4.fail,
            complete = _ref4.complete;
    }

    var clipboard = weex.requireModule('clipboard');

    function getClipboardData(_ref) {
        var success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        clipboard.getString(function(_ref2) {
            var data = _ref2.data;

            var res = {
                errMsg: 'getClipboardData:ok',
                data: data
            };
            isFn(success) && success(res);
            isFn(complete) && complete(res);
        });
    }

    function setClipboardData(_ref3) {
        var data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        var res = {
            errMsg: 'setClipboardData:ok'
        };
        clipboard.setString(data);
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var getEmitter = function() {
        if (typeof getUniEmitter === 'function') {
            /* eslint-disable no-undef */
            return getUniEmitter;
        }
        var Emitter = {
            $on: function $on() {
                console.warn('uni.$on failed');
            },
            $off: function $off() {
                console.warn('uni.$off failed');
            },
            $once: function $once() {
                console.warn('uni.$once failed');
            },
            $emit: function $emit() {
                console.warn('uni.$emit failed');
            }
        };
        return function getUniEmitter() {
            return Emitter;
        };
    }();

    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }

    function $on() {
        return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $off() {
        return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $once() {
        return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $emit() {
        return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
    }



    var api = /*#__PURE__*/ Object.freeze({
        loadFontFace: loadFontFace,
        ready: ready,
        request: request,
        getStorage: getStorage,
        setStorage: setStorage,
        removeStorage: removeStorage,
        clearStorage: clearStorage,
        getClipboardData: getClipboardData,
        setClipboardData: setClipboardData,
        onSubNVueMessage: onSubNVueMessage,
        getSubNVueById: getSubNVueById,
        getCurrentSubNVue: getCurrentSubNVue,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });


    var wx = {
        uploadFile: true,
        downloadFile: true,
        chooseImage: true,
        previewImage: true,
        getImageInfo: true,
        saveImageToPhotosAlbum: true,
        chooseVideo: true,
        saveVideoToPhotosAlbum: true,
        saveFile: true,
        getSavedFileList: true,
        getSavedFileInfo: true,
        removeSavedFile: true,
        openDocument: true,
        setStorage: true,
        getStorage: true,
        getStorageInfo: true,
        removeStorage: true,
        clearStorage: true,
        getLocation: true,
        chooseLocation: true,
        openLocation: true,
        getSystemInfo: true,
        getNetworkType: true,
        makePhoneCall: true,
        scanCode: true,
        setScreenBrightness: true,
        getScreenBrightness: true,
        setKeepScreenOn: true,
        vibrateLong: true,
        vibrateShort: true,
        addPhoneContact: true,
        showToast: true,
        showLoading: true,
        hideToast: true,
        hideLoading: true,
        showModal: true,
        showActionSheet: true,
        setNavigationBarTitle: true,
        setNavigationBarColor: true,
        navigateTo: true,
        redirectTo: true,
        reLaunch: true,
        switchTab: true,
        navigateBack: true,
        getProvider: true,
        login: true,
        getUserInfo: true,
        share: true,
        requestPayment: true,
        subscribePush: true,
        unsubscribePush: true,
        onPush: true,
        offPush: true
    };

    var baseUni = {
        os: {
            nvue: true
        }
    };

    var uni = {};

    if (typeof Proxy !== 'undefined') {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (name === 'os') {
                    return {
                        nvue: true
                    };
                }
                if (name === 'postMessage') {
                    return postMessage;
                }
                if (name === 'requireNativePlugin') {
                    return requireNativePlugin;
                }
                if (name === 'onNavigationBarButtonTap') {
                    return onNavigationBarButtonTap;
                }
                if (name === 'onNavigationBarSearchInputChanged') {
                    return onNavigationBarSearchInputChanged;
                }
                if (name === 'onNavigationBarSearchInputConfirmed') {
                    return onNavigationBarSearchInputConfirmed;
                }
                if (name === 'onNavigationBarSearchInputClicked') {
                    return onNavigationBarSearchInputClicked;
                }
                var method = api[name];
                if (!method) {
                    method = createPublish(name);
                }
                if (shouldPromise(name)) {
                    return promisify(method);
                }
                return method;
            }
        });
    } else {
        Object.keys(baseUni).forEach(function(key) {
            uni[key] = baseUni[key];
        });

        uni.postMessage = postMessage;

        uni.requireNativePlugin = requireNativePlugin;

        uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

        uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

        uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

        uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

        Object.keys(wx).forEach(function(name) {
            var method = api[name];
            if (!method) {
                method = createPublish(name);
            }
            if (shouldPromise(name)) {
                uni[name] = promisify(method);
            } else {
                uni[name] = method;
            }
        });
    }
    return uni;
}

var createUni;

if (typeof getUni === 'function') {
    createUni = getUni;
} else {
    createUni = initUni;
}
var weexPlus = new WeexPlus(weex);
/* harmony default export */ __webpack_exports__["default"] = (createUni(weex, weexPlus, BroadcastChannel));



/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../../work/uniapp/ThorUI/pages/productNvue/productNvue.nvue":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!D:/work/uniapp/ThorUI/pages/productNvue/productNvue.nvue ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {var _ref;
    return _ref = {
      statusBarHeight: 20,
      isIos: false,
      arrow: "",
      iosRefresh: false,
      refreshing: false,
      refreshText: "下拉可以刷新",
      productList: [],
      renderImage: false,
      loadingText: "加载更多...",
      pageIndex: 1 }, _defineProperty(_ref, "productList",
    [{
      img: 1,
      name: "利物浦官方 独家出品纪念版沙发",
      sale: 599,
      factory: 899,
      payNum: 2342 },

    {
      img: 2,
      name: "好看好养活的绿色养眼小盆栽，超级实惠",
      sale: 29,
      factory: 69,
      payNum: 999 },

    {
      img: 3,
      name: "利物浦官方 独家出品大红床上用品三件套",
      sale: 299,
      factory: 699,
      payNum: 666 },

    {
      img: 4,
      name: "利物浦官方 独家出品花花碎花床上用品三件套",
      sale: 1599,
      factory: 2899,
      payNum: 236 },

    {
      img: 5,
      name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
      sale: 599,
      factory: 899,
      payNum: 2399 },
    {
      img: 1,
      name: "独家出品纪念版沙发",
      sale: 599,
      factory: 899,
      payNum: 2342 },

    {
      img: 2,
      name: "好看好养活的绿色养眼小盆栽，超级实惠",
      sale: 29,
      factory: 69,
      payNum: 999 },

    {
      img: 3,
      name: "利物浦官方 独家出品大红床上用品三件套",
      sale: 299,
      factory: 699,
      payNum: 666 },

    {
      img: 4,
      name: "利物浦官方 独家出品花花碎花床上用品三件套",
      sale: 1599,
      factory: 2899,
      payNum: 236 },

    {
      img: 5,
      name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
      sale: 599,
      factory: 899,
      payNum: 2399 }]), _defineProperty(_ref, "loadData",


    [{
      img: 1,
      name: "利物浦官方 独家出品纪念版沙发",
      sale: 599,
      factory: 899,
      payNum: 2342 },

    {
      img: 2,
      name: "好看好养活的绿色养眼小盆栽，超级实惠",
      sale: 29,
      factory: 69,
      payNum: 999 },

    {
      img: 3,
      name: "利物浦官方 独家出品大红床上用品三件套",
      sale: 299,
      factory: 699,
      payNum: 666 },

    {
      img: 4,
      name: "利物浦官方 独家出品花花碎花床上用品三件套",
      sale: 1599,
      factory: 2899,
      payNum: 236 },

    {
      img: 5,
      name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
      sale: 599,
      factory: 899,
      payNum: 2399 },
    {
      img: 1,
      name: "利物浦官方 独家出品纪念版沙发",
      sale: 599,
      factory: 899,
      payNum: 2342 },

    {
      img: 2,
      name: "好看好养活的绿色养眼小盆栽，超级实惠",
      sale: 29,
      factory: 69,
      payNum: 999 },

    {
      img: 3,
      name: "大红床上用品三件套",
      sale: 299,
      factory: 699,
      payNum: 666 },

    {
      img: 4,
      name: "利物浦官方 独家出品花花碎花床上用品三件套",
      sale: 1599,
      factory: 2899,
      payNum: 236 },

    {
      img: 5,
      name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
      sale: 599,
      factory: 899,
      payNum: 2399 }]), _ref;



  },
  created: function created() {var _this = this;
    this.pullrefresh();
    setTimeout(function () {
      _this.renderImage = true;
      uni.getSystemInfo({
        success: function success(res) {
          _this.isIos = "ios" == res.platform.toLocaleLowerCase();
          _this.statusBarHeight = res.statusBarHeight;
        } });

    }, 150);
  },
  methods: {
    pullrefresh: function pullrefresh() {var _this2 = this;var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'up';
      var pageIndex = action === 'down' ? 1 : this.pageIndex;
      if (action === 'down') {
        this.productList = [];
        this.loadingText = "正在加载...";
        this.pageIndex = 2;
        setTimeout(function () {
          _this2.productList = _this2.loadData || [];
          _this2.refreshing = false;
          _this2.$refs.waterfall.resetLoadmore();
        }, 100);
      } else {
        this.productList = this.productList.concat(this.loadData);
        this.pageIndex++;
        if (this.pageIndex > 3) {
          this.loadingText = '没有更多了';
        }
      }
    },
    loadMore: function loadMore() {var _this3 = this;
      setTimeout(function () {
        if (_this3.pageIndex > 3) {
          _this3.loadingText = '没有更多了';
          return;
        }
        _this3.pullrefresh();
      }, 150);
    },
    onrefresh: function onrefresh(event) {var _this4 = this;
      uni.showToast({
        title: "refresh",
        icon: "none" });

      this.iosRefresh = false;
      this.arrow = "";
      this.refreshText = "正在刷新...";
      this.refreshing = true;
      setTimeout(function () {
        _this4.pullrefresh('down');
      }, 200);
    },
    onpullingdown: function onpullingdown(event) {
      if (this.refreshing) {
        return;
      }
      this.iosRefresh = this.isIos;
      if (Math.abs(event.pullingDistance) > Math.abs(event.viewHeight)) {
        this.arrow = "↑";
        this.refreshText = "释放立即刷新";
      } else {
        this.arrow = "↓";
        this.refreshText = "下拉可以刷新";
      }
    },
    detail: function detail(index) {
      if (index == 0) {
        uni.navigateBack();
      } else {
        uni.navigateTo({
          url: '../extend-view/productDetail/productDetail' });

      }
    },
    search: function search() {
      uni.navigateTo({
        url: '../extend-view/news-search/news-search' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-3591c612!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../../work/uniapp/ThorUI/pages/productNvue/productNvue.nvue":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-3591c612!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!D:/work/uniapp/ThorUI/pages/productNvue/productNvue.nvue ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "titleNdiv": {
    "backgroundColor": "#FFFFFF"
  },
  "searchbar": {
    "height": "44wx",
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#E7E7E7",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "30"
  },
  "search-input": {
    "width": "600",
    "height": "60",
    "backgroundColor": "#F0F0F0",
    "borderRadius": "6",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "search-tips": {
    "fontSize": "28",
    "fontFamily": "PingFang-SC-Regular",
    "fontWeight": "400",
    "color": "#999999"
  },
  "image-search": {
    "width": "26",
    "height": "26",
    "marginRight": "20"
  },
  "shopcart-box": {
    "width": "56",
    "height": "56",
    "position": "relative",
    "marginLeft": "34",
    "opacity": 1,
    "opacity:active": 0.6
  },
  "badge": {
    "position": "absolute",
    "paddingLeft": "10",
    "paddingRight": "10",
    "height": "36",
    "lineHeight": "36",
    "backgroundColor": "#FA3A3A",
    "borderRadius": "20",
    "left": "26",
    "top": "-8",
    "textAlign": "center",
    "color": "#FFFFFF",
    "fontSize": "24"
  },
  "image-cart": {
    "width": "56",
    "height": "56"
  },
  "tui-product-list": {
    "width": "750"
  },
  "tui-product": {
    "width": "340",
    "height": "528",
    "marginTop": "10",
    "backgroundColor": "#FFFFFF",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#eaeef1",
    "backgroundColor:active": "#eeeeee"
  },
  "tui-mtop": {
    "marginTop": "30"
  },
  "image-div": {
    "height": "338",
    "width": "338",
    "position": "relative"
  },
  "none": {
    "height": "338",
    "width": "338",
    "position": "absolute",
    "backgroundColor": "rgba(0,0,0,0.8)",
    "alignItems": "center",
    "justifyContent": "center",
    "left": 0,
    "top": 0
  },
  "none-tip": {
    "fontSize": "28",
    "color": "#FA3A3A"
  },
  "tui-product-image": {
    "height": "338",
    "width": "338",
    "position": "absolute"
  },
  "product-content-box": {
    "width": "338",
    "height": "190",
    "paddingTop": "30",
    "paddingLeft": "20",
    "paddingRight": "20",
    "position": "relative"
  },
  "tui-product-title": {
    "width": "295"
  },
  "product-title": {
    "width": "295",
    "fontSize": "26",
    "fontFamily": "PingFang-SC-Regular",
    "fontWeight": "400",
    "color": "#333333",
    "lineHeight": "38",
    "wordBreak": "break-all",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  "tui-product-price": {
    "position": "absolute",
    "bottom": "20",
    "width": "295",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "overflow": "hidden"
  },
  "tui-product-price-original": {
    "fontSize": "34",
    "fontWeight": "bold",
    "color": "#ea1500"
  },
  "tui-product-price-favour": {
    "color": "#a0a0a0",
    "textDecoration": "line-through",
    "fontSize": "24",
    "fontWeight": "400",
    "textAlign": "right"
  },
  "loading": {
    "marginRight": "15",
    "height": "60",
    "width": "60",
    "color": "#999999"
  },
  "list": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#E6E6E6"
  },
  "active": {
    "color": "#3097FF",
    "fontSize": "32",
    "fontWeight": "bold",
    "borderBottomWidth": "4",
    "borderStyle": "solid",
    "borderColor": "#3097FF",
    "width": "120",
    "textAlign": "center"
  },
  "loadmore": {
    "height": "100",
    "width": "750",
    "flexDirection": "column",
    "justifyContent": "center",
    "position": "relative",
    "alignItems": "center"
  },
  "loadmore-text": {
    "fontSize": "26",
    "textAlign": "center",
    "color": "#999999",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "tui-gray": {
    "backgroundColor": "#fafafa"
  },
  "tui-white": {
    "backgroundColor": "#ffffff"
  },
  "loadmore-line": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e5e5e5",
    "width": "320",
    "position": "absolute",
    "zIndex": -1
  },
  "tui-refresh": {
    "width": "750",
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tui-refresh-text": {
    "textAlign": "center",
    "fontSize": "26",
    "color": "#999999"
  },
  "ios-arrow": {
    "color": "#999999",
    "fontSize": "42",
    "fontWeight": "300",
    "paddingRight": "20",
    "marginLeft": "-75"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-3591c612!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../../work/uniapp/ThorUI/pages/productNvue/productNvue.nvue":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-3591c612!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!D:/work/uniapp/ThorUI/pages/productNvue/productNvue.nvue ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mall-box"]
  }, [_c('div', {
    staticClass: ["titleNdiv"],
    style: {
      height: _vm.statusBarHeight + 'wx'
    }
  }), _c('div', {
    staticClass: ["searchbar"]
  }, [_c('div', {
    staticClass: ["search-input"],
    on: {
      "click": _vm.search
    }
  }, [_c('image', {
    staticClass: ["image-search"],
    attrs: {
      "src": "../../static/images/mall/Search@2x.png"
    }
  }), _c('text', {
    staticClass: ["search-tips"]
  }, [_vm._v("搜索商品名称")])]), _vm._m(0)]), _c('waterfall', {
    ref: "waterfall",
    staticClass: ["tui-product-list"],
    attrs: {
      "loadmoreoffset": "10",
      "columnCount": "2",
      "columnGap": "10",
      "rightGap": "30",
      "leftGap": "30"
    },
    on: {
      "loadmore": _vm.loadMore
    }
  }, [_c('refresh', {
    staticClass: ["tui-refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('loading-indicator', {
    staticClass: ["loading"]
  }), (_vm.isIos) ? _c('text', {
    class: [_vm.iosRefresh ? 'ios-arrow' : '']
  }, [_vm._v(_vm._s(_vm.arrow))]) : _vm._e(), _c('text', {
    staticClass: ["tui-refresh-text"]
  }, [_vm._v(_vm._s(_vm.refreshText))])]), _vm._l((_vm.productList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["tui-product"],
      class: [index === 0 || index === 1 ? 'tui-mtop' : ''],
      on: {
        "click": function($event) {
          _vm.detail(index)
        }
      }
    }, [_c('div', {
      staticClass: ["image-div"]
    }, [(_vm.renderImage) ? _c('image', {
      staticClass: ["tui-product-image"],
      attrs: {
        "src": '../../static/images/product/' + item.img + '.jpg',
        "resize": "cover"
      }
    }) : _vm._e(), (index === 0) ? _c('div', {
      staticClass: ["none"]
    }, [_c('text', {
      staticClass: ["none-tip"]
    }, [_vm._v("点击售罄返回")])]) : _vm._e()]), _c('div', {
      staticClass: ["product-content-box"]
    }, [_c('div', {
      staticClass: ["tui-product-title"]
    }, [_c('text', {
      staticClass: ["product-title"]
    }, [_vm._v(_vm._s(item.name))])]), _c('div', {
      staticClass: ["tui-product-price"]
    }, [_c('text', {
      staticClass: ["tui-product-price-original"]
    }, [_vm._v("￥" + _vm._s(item.sale))]), _c('text', {
      staticClass: ["tui-product-price-favour"]
    }, [_vm._v("￥" + _vm._s(item.factory))])])])])])
  }), _c('header', {
    staticClass: ["loadmore"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [(_vm.pageIndex > 3) ? _c('text', {
    staticClass: ["loadmore-line"]
  }) : _vm._e(), _c('text', {
    staticClass: ["loadmore-text"],
    class: [_vm.isIos ? 'tui-gray' : 'tui-white']
  }, [_vm._v(_vm._s(_vm.loadingText))])])], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["shopcart-box"]
  }, [_c('image', {
    staticClass: ["image-cart"],
    attrs: {
      "src": "../../static/images/mall/shopCart@2x.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });