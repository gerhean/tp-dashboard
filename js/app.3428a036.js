/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "151c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4a7d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_segment_vue_vue_type_style_index_0_id_79b224e3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("151c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_segment_vue_vue_type_style_index_0_id_79b224e3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_segment_vue_vue_type_style_index_0_id_79b224e3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__("1487");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/app.vue?vue&type=template&id=2a4e5306&lang=pug

var _hoisted_1 = {
  id: "app"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("i", {
  "class": "overlay-loading-icon fas fa-spin fa-spinner"
}, null, -1);

var _hoisted_3 = {
  id: "summary-wrapper"
};
var _hoisted_4 = {
  "class": "timestamp-footer"
};

var _hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "Generated by ", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("strong", null, "this version", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, " of ", -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("strong", null, "RepoSense", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, " (", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("strong", null, "User Guide", -1);

var _hoisted_11 = {
  "class": "report-generation-time",
  style: {
    "display": "none"
  }
};
var _hoisted_12 = {
  id: "tabs-wrapper",
  ref: "tabWrapper"
};
var _hoisted_13 = {
  "class": "tab-content panel-padding"
};
var _hoisted_14 = {
  "class": "tab-pane"
};
var _hoisted_15 = {
  key: 2,
  id: "tab-empty"
};
var _hoisted_16 = {
  "class": "title"
};

var _hoisted_17 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("h2", null, "Welcome to this RepoSense report!", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("p", null, "The charts on the left show the contribution activities, grouped by repository and author.", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("To view the code attributed to a specific author, click the  ");

var _hoisted_20 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("  icon next to that author's name.");

var _hoisted_21 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("br", null, null, -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("To view the breakdown of commits made by a specific author, click the  ");

var _hoisted_23 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("  icon next to that author's name.");

var _hoisted_24 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("br", null, null, -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("To hide the code view and show only the activity charts, click the  ");

var _hoisted_26 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("  icon on the centre divider.");

var _hoisted_27 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("See the  ");

var _hoisted_28 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("strong", null, "User Guide", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("  to get a better understanding of how to interpret the report.");

var _hoisted_30 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
  "class": "empty"
}, "Please upload a .zip file generated by RepoSense.", -1);

var _hoisted_31 = {
  id: "file-upload",
  onsubmit: "return false;"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_loading_overlay = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("loading-overlay");

  var _component_v_summary = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("v-summary");

  var _component_v_authorship = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("v-authorship");

  var _component_v_zoom = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("v-zoom");

  var _component_font_awesome_icon = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("font-awesome-icon");

  var _component_v_resizer = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("v-resizer");

  return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_loading_overlay, {
    "class": "overlay-loader",
    active: $data.isLoadingOverlayEnabled,
    opacity: $data.loadingOverlayOpacity,
    "is-full-page": true
  }, {
    "default": Object(vue_runtime_esm_bundler["G" /* withCtx */])(function () {
      return [_hoisted_2];
    }),
    after: Object(vue_runtime_esm_bundler["G" /* withCtx */])(function () {
      return [Object(vue_runtime_esm_bundler["i" /* createVNode */])("h3", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(_ctx.loadingOverlayMessage), 1)];
    }),
    _: 1
  }, 8, ["active", "opacity"]), $data.userUpdated ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_v_resizer, {
    key: 0,
    "is-tab-active": $data.isTabActive,
    onCloseTab: $options.deactivateTab
  }, {
    left: Object(vue_runtime_esm_bundler["G" /* withCtx */])(function () {
      return [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_3, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_v_summary, {
        "class": "tab-padding",
        repos: $data.users,
        "error-messages": $data.errorMessages,
        onGetDates: $options.receiveDates
      }, null, 8, ["repos", "error-messages", "onGetDates"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_4, [_hoisted_5, Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
        href: $options.getSpecificCommitLink(),
        target: "_blank"
      }, [_hoisted_6], 8, ["href"]), _hoisted_7, Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
        href: $options.getRepoSenseHomeLink(),
        target: "_blank"
      }, [_hoisted_8], 8, ["href"]), _hoisted_9, Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
        href: $options.getUserGuideLink(),
        target: "_blank"
      }, [_hoisted_10], 8, ["href"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, ") on " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($data.creationDate), 1)]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_11, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($data.reportGenerationTime), 1)])])];
    }),
    right: Object(vue_runtime_esm_bundler["G" /* withCtx */])(function () {
      return [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_12, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_13, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_14, [$data.tabType === 'authorship' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_v_authorship, {
        id: "tab-authorship",
        key: $options.generateKey($data.tabInfo.tabAuthorship, ['author', 'repo', 'isMergeGroup']),
        info: $data.tabInfo.tabAuthorship
      }, null, 8, ["info"])) : $data.tabType === 'zoom' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_v_zoom, {
        id: "tab-zoom",
        key: $options.generateKey($data.tabInfo.tabZoom, ['zRepo', 'zAuthor', 'zFilterGroup', 'zTimeFrame']),
        info: $data.tabInfo.tabZoom
      }, null, 8, ["info"])) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_15, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_16, [_hoisted_17, _hoisted_18, Object(vue_runtime_esm_bundler["i" /* createVNode */])("p", null, [_hoisted_19, Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        icon: "code"
      }), _hoisted_20, _hoisted_21, _hoisted_22, Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        icon: "list-ul"
      }), _hoisted_23, _hoisted_24, _hoisted_25, Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        icon: "caret-right"
      }), _hoisted_26]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("p", null, [_hoisted_27, Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
        href: $options.getUsingReportsUserGuideLink(),
        target: "_blank"
      }, [_hoisted_28], 8, ["href"]), _hoisted_29])])]))])])], 512)];
    }),
    _: 1
  }, 8, ["is-tab-active", "onCloseTab"])) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
    key: 1
  }, [_hoisted_30, Object(vue_runtime_esm_bundler["i" /* createVNode */])("form", _hoisted_31, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    type: "file",
    accept: ".zip",
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.updateReportZip && $options.updateReportZip.apply($options, arguments);
    })
  }, null, 32)])], 64))]);
}
// CONCATENATED MODULE: ./src/app.vue?vue&type=template&id=2a4e5306&lang=pug

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("07ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("2ca0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__("3835");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/jszip/dist/jszip.min.js
var jszip_min = __webpack_require__("c4e3");
var jszip_min_default = /*#__PURE__*/__webpack_require__.n(jszip_min);

// EXTERNAL MODULE: ./node_modules/vue3-loading-overlay/dist/index.js
var dist = __webpack_require__("8a14");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-browser.js
var vuex_esm_browser = __webpack_require__("5502");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/v-resizer.vue?vue&type=template&id=a74531ba&lang=pug

var v_resizervue_type_template_id_a74531ba_lang_pug_hoisted_1 = {
  "class": "left-resize-container"
};

var v_resizervue_type_template_id_a74531ba_lang_pug_hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("i", {
  "class": "fas fa-caret-right"
}, null, -1);

function v_resizervue_type_template_id_a74531ba_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
    id: "app-wrapper",
    style: $options.appStyles,
    onMousemove: _cache[3] || (_cache[3] = function () {
      return $options.mouseMove && $options.mouseMove.apply($options, arguments);
    }),
    onMouseup: _cache[4] || (_cache[4] = function () {
      return $options.deregisterMouseMove && $options.deregisterMouseMove.apply($options, arguments);
    }),
    onMouseleave: _cache[5] || (_cache[5] = function () {
      return $options.deregisterMouseMove && $options.deregisterMouseMove.apply($options, arguments);
    })
  }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
    id: "tab-resize-guide",
    style: $options.guideStyles
  }, null, 4), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_resizervue_type_template_id_a74531ba_lang_pug_hoisted_1, [Object(vue_runtime_esm_bundler["v" /* renderSlot */])(_ctx.$slots, "left")]), Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
    id: "tab-resize",
    onMousedown: _cache[2] || (_cache[2] = Object(vue_runtime_esm_bundler["J" /* withModifiers */])(function () {
      return $options.registerMouseMove && $options.registerMouseMove.apply($options, arguments);
    }, ["left"]))
  }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
    "class": "tab-close",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('close-tab');
    })
  }, [v_resizervue_type_template_id_a74531ba_lang_pug_hoisted_2])], 544), [[vue_runtime_esm_bundler["E" /* vShow */], $props.isTabActive]]), $props.isTabActive ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
    key: 0,
    "class": "right-resize-container",
    style: $options.rightContainerStyles
  }, [Object(vue_runtime_esm_bundler["v" /* renderSlot */])(_ctx.$slots, "right")], 4)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)], 36);
}
// CONCATENATED MODULE: ./src/components/v-resizer.vue?vue&type=template&id=a74531ba&lang=pug

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.now.js
var es_date_now = __webpack_require__("6eba");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("0d03");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/v-resizer.vue?vue&type=script&lang=js


var DRAG_BAR_WIDTH = 13.25;
var SCROLL_BAR_WIDTH = 17;
var GUIDE_BAR_WIDTH = 2;

var throttledEvent = function throttledEvent(delay, handler) {
  var lastCalled = 0;
  return function () {
    if (Date.now() - lastCalled > delay) {
      lastCalled = Date.now();
      handler.apply(void 0, arguments);
    }
  };
};

/* harmony default export */ var v_resizervue_type_script_lang_js = ({
  name: 'v-resizer',
  props: {
    isTabActive: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      guideWidth: (0.5 * window.innerWidth - GUIDE_BAR_WIDTH / 2) / window.innerWidth,
      flexWidth: 0.5,
      isResizing: false
    };
  },
  computed: {
    appStyles: function appStyles() {
      return this.isResizing ? 'user-select: none; cursor: col-resize;' : '';
    },
    guideStyles: function guideStyles() {
      return this.isResizing ? "display: block; right: ".concat(this.guideWidth * 100, "%;") : '';
    },
    rightContainerStyles: function rightContainerStyles() {
      return "flex: 0 0 ".concat(this.flexWidth * 100, "%;");
    },
    mouseMove: function mouseMove() {
      var _this = this;

      if (this.isResizing) {
        return throttledEvent(25, function (event) {
          _this.guideWidth = (Math.min(Math.max(window.innerWidth - event.clientX, SCROLL_BAR_WIDTH + DRAG_BAR_WIDTH), window.innerWidth - SCROLL_BAR_WIDTH) - GUIDE_BAR_WIDTH / 2) / window.innerWidth;
        });
      }

      return function () {};
    }
  },
  methods: {
    registerMouseMove: function registerMouseMove() {
      this.isResizing = true;
    },
    deregisterMouseMove: function deregisterMouseMove() {
      this.isResizing = false;
      this.flexWidth = (this.guideWidth * window.innerWidth + GUIDE_BAR_WIDTH / 2) / window.innerWidth;
    }
  }
});
// CONCATENATED MODULE: ./src/components/v-resizer.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/v-resizer.vue



v_resizervue_type_script_lang_js.render = v_resizervue_type_template_id_a74531ba_lang_pug_render

/* harmony default export */ var v_resizer = (v_resizervue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/v-zoom.vue?vue&type=template&id=15fd2538&scoped=true&lang=pug




var _withId = /*#__PURE__*/Object(vue_runtime_esm_bundler["K" /* withScopeId */])("data-v-15fd2538");

Object(vue_runtime_esm_bundler["q" /* pushScopeId */])("data-v-15fd2538");

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_1 = {
  id: "zoom"
};

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
  "class": "panel-title"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "Commits Panel")], -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_3 = {
  key: 0,
  "class": "toolbar--multiline"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_4 = {
  "class": "panel-heading"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_5 = {
  "class": "group-name"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_6 = {
  key: 0
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_7 = {
  key: 0,
  "class": "author"
};

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "↳  ", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_9 = {
  key: 0
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_10 = {
  key: 1
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_11 = {
  "class": "period"
};

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_12 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "↳  ", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_13 = {
  "class": "zoom__title"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_14 = {
  "class": "zoom__title--granularity"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_15 = {
  "class": "zoom__title--tags"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_16 = {
  "class": "sorting mui-form--inline"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_17 = {
  "class": "mui-select sort-by"
};

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "time"
}, "Time", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_19 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "lineOfCode"
}, "LoC", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_20 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "sort by", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_21 = {
  "class": "mui-select sort-order"
};

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_22 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: true
}, "Descending", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_23 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: false
}, "Ascending", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_24 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "order", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_25 = {
  "class": "fileTypes"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_26 = {
  key: 0,
  "class": "checkboxes mui-form--inline"
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_27 = {
  style: {
    "background-color": "#000000",
    "color": "#ffffff"
  }
};

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_28 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "All ", -1);

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_29 = {
  key: 0
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_30 = {
  key: 1
};
var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_31 = {
  "class": "within-border"
};
var _hoisted_32 = {
  key: 0,
  "class": "not-within-border"
};
var _hoisted_33 = {
  "class": "tooltip"
};

var _hoisted_34 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to show/hide the commit message body", -1);

var _hoisted_35 = {
  key: 2,
  "class": "body"
};

var _hoisted_36 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
  "class": "dashed-border"
}, null, -1);

Object(vue_runtime_esm_bundler["p" /* popScopeId */])();

var v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_font_awesome_icon = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("font-awesome-icon");

  var _component_v_ramp = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("v-ramp");

  return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_1, [v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_2, $options.filteredUser.commits.length && $options.totalCommitMessageBodyCount ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_3, [$data.expandedCommitMessagesCount < $options.totalCommitMessageBodyCount ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.toggleAllCommitMessagesBody(true);
    })
  }, "show all commit messages")) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $data.expandedCommitMessagesCount > 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.toggleAllCommitMessagesBody(false);
    })
  }, "hide all commit messages")) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_4, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_5, [$props.info.zFilterGroup === 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("span", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_6, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.filteredUser.displayName) + " (" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.filteredUser.name) + ")", 1)) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
    key: 1,
    href: $props.info.zLocation,
    target: "_blank",
    title: 'Click to open the repo'
  }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.filteredUser.repoName), 1)], 8, ["href"]))]), !$props.info.zIsMerge ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_7, [v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_8, $props.info.zFilterGroup === 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("span", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_9, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.filteredUser.repoName), 1)) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("span", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_10, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.filteredUser.displayName) + " (" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.filteredUser.name) + ")", 1))])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_11, [v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_12, Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($props.info.zSince) + " to " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($props.info.zUntil) + "  ", 1), Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.openSummary && $options.openSummary.apply($options, arguments);
    })
  }, "[Show ramp chart for this period]")])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_13, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_14, "granularity: one ramp per " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($props.info.zTimeFrame), 1), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_15, [(Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($options.filteredUser.commits, function (commit) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [(Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])(commit.commitResults, function (commitResult) {
      return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [commitResult.tags ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
        key: 0
      }, Object(vue_runtime_esm_bundler["u" /* renderList */])(commitResult.tags, function (tag) {
        return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
          "class": "tag",
          "vbind:key": "tag",
          onClick: function onClick($event) {
            return $options.scrollToCommit(tag, "tag ".concat(commitResult.hash));
          }
        }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
          icon: "tags"
        }), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, " " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(tag), 1)], 8, ["onClick"]);
      }), 256)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)], 64);
    }), 256))], 64);
  }), 256))])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_v_ramp, {
    groupby: $props.info.zFilterGroup,
    user: $options.filteredUser,
    tframe: $props.info.zTimeFrame,
    sdate: $props.info.zSince,
    udate: $props.info.zUntil,
    avgsize: $props.info.zAvgCommitSize,
    mergegroup: $props.info.zIsMerge,
    fromramp: $props.info.zFromRamp,
    filtersearch: $props.info.zFilterSearch
  }, null, 8, ["groupby", "user", "tframe", "sdate", "udate", "avgsize", "mergegroup", "fromramp", "filtersearch"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_16, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_17, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.commitsSortType = $event;
    })
  }, [v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_18, v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_19], 512), [[vue_runtime_esm_bundler["C" /* vModelSelect */], $data.commitsSortType]]), v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_20]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_21, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("select", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.toReverseSortedCommits = $event;
    })
  }, [v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_22, v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_23], 512), [[vue_runtime_esm_bundler["C" /* vModelSelect */], $data.toReverseSortedCommits]]), v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_24])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_25, [$data.fileTypes.length > 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_26, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_27, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    "class": "mui-checkbox--fileType",
    type: "checkbox",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $options.isSelectAllChecked = $event;
    }),
    value: "all"
  }, null, 512), [[vue_runtime_esm_bundler["A" /* vModelCheckbox */], $options.isSelectAllChecked]]), v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_28]), (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($data.fileTypes, function (fileType) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("label", {
      key: fileType,
      style: {
        'background-color': _ctx.fileTypeColors[fileType],
        'color': $options.getFontColor(_ctx.fileTypeColors[fileType])
      }
    }, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
      "class": "mui-checkbox--fileType",
      type: "checkbox",
      value: fileType,
      onChange: _cache[7] || (_cache[7] = function () {
        return $options.updateSelectedFileTypesHash && $options.updateSelectedFileTypesHash.apply($options, arguments);
      }),
      "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
        return $data.selectedFileTypes = $event;
      })
    }, null, 40, ["value"]), [[vue_runtime_esm_bundler["A" /* vModelCheckbox */], $data.selectedFileTypes]]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(fileType) + "  ", 1)], 4);
  }), 128))])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)]), (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($options.selectedCommits, function (day) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
      "class": "zoom__day",
      key: day.date
    }, [$props.info.zTimeFrame === 'week' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("h3", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_29, "Week of " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(day.date), 1)) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("h3", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_30, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(day.date), 1)), (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])(day.commitResults, function (slice) {
      return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
        "class": ["commit-message", {
          'message-body active': slice.messageBody !== ''
        }],
        tabindex: "-1",
        key: slice.hash
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
        "class": "message-title",
        href: $options.getSliceLink(slice),
        target: "_blank"
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_hoisted_31, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(slice.messageTitle.substr(0, 50)), 1), slice.messageTitle.length > 50 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_32, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(slice.messageTitle.substr(50)), 1)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)], 8, ["href"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "  (" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(slice.insertions) + " lines)  ", 1), (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($options.filterSelectedFileTypes(Object.keys(slice.fileTypesAndContributionMap)), function (fileType) {
        return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("span", {
          "class": "fileTypeLabel",
          "vbind:key": "fileType",
          style: {
            'background-color': _ctx.fileTypeColors[fileType],
            'color': $options.getFontColor(_ctx.fileTypeColors[fileType])
          }
        }, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(fileType), 5);
      }), 256)), slice.tags ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
        key: 0
      }, Object(vue_runtime_esm_bundler["u" /* renderList */])(slice.tags, function (tag) {
        return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
          "class": ["tag", ["".concat(slice.hash), tag]],
          tabindex: "-1"
        }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
          icon: "tags"
        }), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, " " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(tag), 1)], 2);
      }), 256)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), slice.messageBody !== '' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
        key: 1,
        onClick: _cache[9] || (_cache[9] = function () {
          return $options.updateExpandedCommitMessagesCount && $options.updateExpandedCommitMessagesCount.apply($options, arguments);
        }),
        onclick: "toggleNext(this)"
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_33, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        "class": "commit-message--button",
        icon: "ellipsis-h"
      }), _hoisted_34])])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), slice.messageBody !== '' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_35, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("pre", null, [Object(vue_runtime_esm_bundler["h" /* createTextVNode */])(Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(slice.messageBody), 1), _hoisted_36])])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)], 2);
    }), 128))]);
  }), 128))]);
});
// CONCATENATED MODULE: ./src/views/v-zoom.vue?vue&type=template&id=15fd2538&scoped=true&lang=pug

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("6062");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/v-ramp.vue?vue&type=template&id=011a973c&scoped=true&lang=pug


var v_rampvue_type_template_id_011a973c_scoped_true_lang_pug_withId = /*#__PURE__*/Object(vue_runtime_esm_bundler["K" /* withScopeId */])("data-v-011a973c");

Object(vue_runtime_esm_bundler["q" /* pushScopeId */])("data-v-011a973c");

var v_rampvue_type_template_id_011a973c_scoped_true_lang_pug_hoisted_1 = {
  "class": "ramp"
};

Object(vue_runtime_esm_bundler["p" /* popScopeId */])();

var v_rampvue_type_template_id_011a973c_scoped_true_lang_pug_render = /*#__PURE__*/v_rampvue_type_template_id_011a973c_scoped_true_lang_pug_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_rampvue_type_template_id_011a973c_scoped_true_lang_pug_hoisted_1, [$props.tframe === 'commit' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
    key: 0
  }, Object(vue_runtime_esm_bundler["u" /* renderList */])($props.user.commits, function (slice, j) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [(Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])(slice.commitResults, function (commit, k) {
      return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [commit.insertions > 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
        key: 0,
        "class": ["ramp__slice", 'ramp__slice--color' + $options.getSliceColor(slice.date)],
        draggable: "false",
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.rampClick && $options.rampClick.apply($options, arguments);
        }),
        href: $options.getLink($props.user, commit),
        target: "_blank",
        title: $options.getContributionMessage(slice, commit),
        style: {
          zIndex: $props.user.commits.length - j,
          borderLeftWidth: $options.getWidth(commit) + 'em',
          right: ($options.getSlicePos(slice.date) + $options.getCommitPos(k, slice.commitResults.length)) * 100 + '%'
        }
      }, null, 14, ["href", "title"])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)], 64);
    }), 256))], 64);
  }), 256)) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
    key: 1
  }, Object(vue_runtime_esm_bundler["u" /* renderList */])($props.user.commits, function (slice, j) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [slice.insertions > 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
      key: 0,
      "class": ["ramp__slice", 'ramp__slice--color' + $options.getSliceColor(slice.date)],
      draggable: "false",
      title: $options.getContributionMessage(slice),
      onClick: function onClick($event) {
        return $options.openTabZoom($props.user, slice, $event);
      },
      style: {
        zIndex: $props.user.commits.length - j,
        borderLeftWidth: $options.getWidth(slice) + 'em',
        right: $options.getSlicePos($props.tframe === 'day' ? slice.date : slice.endDate) * 100 + '%'
      }
    }, null, 14, ["title", "onClick"])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)], 64);
  }), 256))]);
});
// CONCATENATED MODULE: ./src/components/v-ramp.vue?vue&type=template&id=011a973c&scoped=true&lang=pug

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/v-ramp.vue?vue&type=script&lang=js




/* harmony default export */ var v_rampvue_type_script_lang_js = ({
  name: 'v-ramp',
  props: ['groupby', 'user', 'tframe', 'avgsize', 'sdate', 'udate', 'mergegroup', 'fromramp', 'filtersearch'],
  data: function data() {
    return {
      rampSize: 0.01
    };
  },
  methods: {
    getLink: function getLink(user, slice) {
      if (this.mergegroup) {
        return "".concat(window.getBaseLink(slice.repoId), "/commit/").concat(slice.hash);
      }

      return "".concat(window.getBaseLink(user.repoId), "/commit/").concat(slice.hash);
    },
    getWidth: function getWidth(slice) {
      if (slice.insertions === 0) {
        return 0;
      }

      var newSize = 100 * (slice.insertions / this.avgsize);
      return Math.max(newSize * this.rampSize, 0.5);
    },
    getContributionMessage: function getContributionMessage(slice, commit) {
      var title = '';

      if (this.tframe === 'commit') {
        return "[".concat(slice.date, "] ").concat(commit.messageTitle, ": ").concat(commit.insertions, " lines");
      }

      title = this.tframe === 'day' ? "[".concat(slice.date, "] Daily ") : "[".concat(slice.date, " till ").concat(slice.endDate, "] Weekly ");
      title += "contribution: ".concat(slice.insertions, " lines");
      return title;
    },
    openTabZoom: function openTabZoom(user, slice, evt) {
      // prevent opening of zoom tab when cmd/ctrl click
      if (window.isMacintosh ? evt.metaKey : evt.ctrlKey) {
        return;
      }

      var zoomUser = Object(objectSpread2["a" /* default */])({}, user);

      zoomUser.commits = user.dailyCommits;
      var info = {
        zRepo: user.repoName,
        zAuthor: user.name,
        zFilterGroup: this.groupby,
        zTimeFrame: 'commit',
        zAvgCommitSize: slice.insertions,
        zUser: zoomUser,
        zLocation: window.getBaseLink(user.repoId),
        zSince: slice.date,
        zUntil: this.tframe === 'day' ? slice.date : slice.endDate,
        zIsMerge: this.mergegroup,
        zFromRamp: true,
        zFilterSearch: this.filtersearch
      };
      window.deactivateAllOverlays();
      this.$store.commit('updateTabZoomInfo', info);
    },
    // position for commit granularity
    getCommitPos: function getCommitPos(i, total) {
      return (total - i - 1) * window.DAY_IN_MS / total / (this.getTotalForPos(this.sdate, this.udate) + window.DAY_IN_MS);
    },
    // position for day granularity
    getSlicePos: function getSlicePos(date) {
      var total = this.getTotalForPos(this.sdate, this.udate);
      return (new Date(this.udate) - new Date(date)) / (total + window.DAY_IN_MS);
    },
    // get duration in miliseconds between 2 date
    getTotalForPos: function getTotalForPos(sinceDate, untilDate) {
      return new Date(untilDate) - new Date(sinceDate);
    },
    getSliceColor: function getSliceColor(date) {
      var timeMs = this.fromramp ? new Date(this.sdate).getTime() : new Date(date).getTime();
      return timeMs / window.DAY_IN_MS % 5;
    },
    // Prevent browser from switching to new tab when clicking ramp
    rampClick: function rampClick(evt) {
      var isKeyPressed = window.isMacintosh ? evt.metaKey : evt.ctrlKey;

      if (isKeyPressed) {
        evt.preventDefault();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/v-ramp.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/v-ramp.vue?vue&type=style&index=0&id=011a973c&scoped=true&lang=scss
var v_rampvue_type_style_index_0_id_011a973c_scoped_true_lang_scss = __webpack_require__("b90b");

// CONCATENATED MODULE: ./src/components/v-ramp.vue





v_rampvue_type_script_lang_js.render = v_rampvue_type_template_id_011a973c_scoped_true_lang_pug_render
v_rampvue_type_script_lang_js.__scopeId = "data-v-011a973c"

/* harmony default export */ var v_ramp = (v_rampvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/v-zoom.vue?vue&type=script&lang=js























/* harmony default export */ var v_zoomvue_type_script_lang_js = ({
  name: 'v-zoom',
  props: ['info'],
  data: function data() {
    return {
      showAllCommitMessageBody: true,
      expandedCommitMessagesCount: this.totalCommitMessageBodyCount,
      commitsSortType: 'time',
      toReverseSortedCommits: true,
      isCommitsFinalized: false,
      selectedFileTypes: [],
      fileTypes: []
    };
  },
  computed: Object(objectSpread2["a" /* default */])({
    sortingFunction: function sortingFunction() {
      var _this = this;

      var commitSortFunction = this.commitsSortType === 'time' ? function (commit) {
        return commit.date;
      } : function (commit) {
        return commit.insertions;
      };
      return function (a, b) {
        return (_this.toReverseSortedCommits ? -1 : 1) * window.comparator(commitSortFunction)(a, b);
      };
    },
    filteredUser: function filteredUser() {
      var _this$info = this.info,
          zUser = _this$info.zUser,
          zSince = _this$info.zSince,
          zUntil = _this$info.zUntil,
          zTimeFrame = _this$info.zTimeFrame;
      var filteredUser = Object.assign({}, zUser);
      var date = zTimeFrame === 'week' ? 'endDate' : 'date';
      filteredUser.commits = zUser.commits.filter(function (commit) {
        return commit[date] >= zSince && commit[date] <= zUntil;
      }).sort(this.sortingFunction);
      return filteredUser;
    },
    selectedCommits: function selectedCommits() {
      var _this2 = this;

      var commits = [];
      this.filteredUser.commits.forEach(function (commit) {
        var filteredCommit = Object(objectSpread2["a" /* default */])({}, commit);

        filteredCommit.commitResults = [];
        commit.commitResults.forEach(function (slice) {
          if (Object.keys(slice.fileTypesAndContributionMap).some(function (fileType) {
            return _this2.selectedFileTypes.indexOf(fileType) !== -1;
          })) {
            filteredCommit.commitResults.push(slice);
          }
        });

        if (filteredCommit.commitResults.length > 0) {
          commits.push(filteredCommit);
        }
      });
      return commits;
    },
    totalCommitMessageBodyCount: function totalCommitMessageBodyCount() {
      var nonEmptyCommitMessageCount = 0;
      this.selectedCommits.forEach(function (commit) {
        commit.commitResults.forEach(function (commitResult) {
          if (commitResult.messageBody !== '') {
            nonEmptyCommitMessageCount += 1;
          }
        });
      });
      return nonEmptyCommitMessageCount;
    },
    isSelectAllChecked: {
      get: function get() {
        return this.selectedFileTypes.length === this.fileTypes.length;
      },
      set: function set(value) {
        if (value) {
          this.selectedFileTypes = this.fileTypes.slice();
        } else {
          this.selectedFileTypes = [];
        }

        this.updateSelectedFileTypesHash();
      }
    }
  }, Object(vuex_esm_browser["b" /* mapState */])(['fileTypeColors'])),
  watch: {
    selectedFileTypes: function selectedFileTypes() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.updateExpandedCommitMessagesCount();
      });
    },
    commitsSortType: function commitsSortType() {
      window.addHash('zCST', this.commitsSortType);
      window.encodeHash();
    },
    toReverseSortedCommits: function toReverseSortedCommits() {
      window.addHash('zRSC', this.toReverseSortedCommits);
      window.encodeHash();
    }
  },
  created: function created() {
    this.initiate();
  },
  mounted: function mounted() {
    this.setInfoHash();
  },
  beforeUnmount: function beforeUnmount() {
    this.removeZoomHashes();
  },
  methods: {
    initiate: function initiate() {
      if (this.info.zUser) {
        // This code should always run since zUser must be defined
        this.updateFileTypes();
        this.selectedFileTypes = this.fileTypes.slice();
      }
    },
    getFontColor: function getFontColor(color) {
      return window.getFontColor(color);
    },
    openSummary: function openSummary() {
      var info = {
        since: this.info.zSince,
        until: this.info.zUntil
      };
      this.$store.commit('updateSummaryDates', info);
    },
    getSliceLink: function getSliceLink(slice) {
      if (this.info.zIsMerge) {
        return "".concat(window.getBaseLink(slice.repoId), "/commit/").concat(slice.hash);
      }

      return "".concat(window.getBaseLink(this.info.zUser.repoId), "/commit/").concat(slice.hash);
    },
    scrollToCommit: function scrollToCommit(tag, commit) {
      var el = this.$el.getElementsByClassName("".concat(commit, " ").concat(tag))[0];

      if (el) {
        el.focus();
      }
    },
    updateFileTypes: function updateFileTypes() {
      var commitsFileTypes = new Set();
      this.filteredUser.commits.forEach(function (commit) {
        commit.commitResults.forEach(function (slice) {
          Object.keys(slice.fileTypesAndContributionMap).forEach(function (fileType) {
            commitsFileTypes.add(fileType);
          });
        });
      });
      this.fileTypes = Object.keys(this.filteredUser.fileTypeContribution).filter(function (fileType) {
        return commitsFileTypes.has(fileType);
      });
    },
    retrieveHashes: function retrieveHashes() {
      this.retrieveSortHash();
      this.retrieveSelectedFileTypesHash();
    },
    retrieveSortHash: function retrieveSortHash() {
      var hash = window.hashParams;

      if (hash.zCST) {
        this.commitsSortType = hash.zCST;
      }

      if (hash.zRSC) {
        this.toReverseSortedCommits = hash.zRSC === 'true';
      }
    },
    retrieveSelectedFileTypesHash: function retrieveSelectedFileTypesHash() {
      var _this4 = this;

      var hash = window.hashParams;

      if (hash.zFT) {
        this.selectedFileTypes = hash.zFT.split(window.HASH_DELIMITER).filter(function (fileType) {
          return _this4.fileTypes.includes(fileType);
        });
      }
    },
    updateSelectedFileTypesHash: function updateSelectedFileTypesHash() {
      var fileTypeHash = this.selectedFileTypes.length > 0 ? this.selectedFileTypes.reduce(function (a, b) {
        return "".concat(a, "~").concat(b);
      }) : '';
      window.addHash('zFT', fileTypeHash);
      window.encodeHash();
    },
    setInfoHash: function setInfoHash() {
      var _window = window,
          addHash = _window.addHash,
          encodeHash = _window.encodeHash;
      var _this$info2 = this.info,
          zAvgCommitSize = _this$info2.zAvgCommitSize,
          zSince = _this$info2.zSince,
          zUntil = _this$info2.zUntil,
          zFilterGroup = _this$info2.zFilterGroup,
          zTimeFrame = _this$info2.zTimeFrame,
          zIsMerge = _this$info2.zIsMerge,
          zAuthor = _this$info2.zAuthor,
          zRepo = _this$info2.zRepo,
          zFromRamp = _this$info2.zFromRamp,
          zFilterSearch = _this$info2.zFilterSearch;
      addHash('zA', zAuthor);
      addHash('zR', zRepo);
      addHash('zACS', zAvgCommitSize);
      addHash('zS', zSince);
      addHash('zFS', zFilterSearch);
      addHash('zU', zUntil);
      addHash('zMG', zIsMerge);
      addHash('zFTF', zTimeFrame);
      addHash('zFGS', zFilterGroup);
      addHash('zFR', zFromRamp);
      encodeHash();
    },
    toggleAllCommitMessagesBody: function toggleAllCommitMessagesBody(isActive) {
      this.showAllCommitMessageBody = isActive;
      var toRename = this.showAllCommitMessageBody ? 'commit-message message-body active' : 'commit-message message-body';
      var commitMessageClasses = document.getElementsByClassName('commit-message message-body');
      Array.from(commitMessageClasses).forEach(function (commitMessageClass) {
        commitMessageClass.className = toRename;
      });
      this.expandedCommitMessagesCount = isActive ? this.totalCommitMessageBodyCount : 0;
    },
    updateExpandedCommitMessagesCount: function updateExpandedCommitMessagesCount() {
      this.expandedCommitMessagesCount = document.getElementsByClassName('commit-message message-body active').length;
    },
    removeZoomHashes: function removeZoomHashes() {
      window.removeHash('zA');
      window.removeHash('zR');
      window.removeHash('zFS');
      window.removeHash('zACS');
      window.removeHash('zS');
      window.removeHash('zU');
      window.removeHash('zFGS');
      window.removeHash('zFTF');
      window.removeHash('zMG');
      window.removeHash('zFT');
      window.removeHash('zCST');
      window.removeHash('zRSC');
      window.encodeHash();
    },
    filterSelectedFileTypes: function filterSelectedFileTypes(fileTypes) {
      var _this5 = this;

      return fileTypes.filter(function (fileType) {
        return _this5.selectedFileTypes.includes(fileType);
      });
    }
  },
  components: {
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    vRamp: v_ramp
  }
});
// CONCATENATED MODULE: ./src/views/v-zoom.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/views/v-zoom.vue?vue&type=style&index=0&id=15fd2538&lang=scss&scoped=true
var v_zoomvue_type_style_index_0_id_15fd2538_lang_scss_scoped_true = __webpack_require__("9d5b");

// CONCATENATED MODULE: ./src/views/v-zoom.vue





v_zoomvue_type_script_lang_js.render = v_zoomvue_type_template_id_15fd2538_scoped_true_lang_pug_render
v_zoomvue_type_script_lang_js.__scopeId = "data-v-15fd2538"

/* harmony default export */ var v_zoom = (v_zoomvue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/v-summary.vue?vue&type=template&id=52174479&lang=pug




var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_1 = {
  id: "summary"
};
var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_2 = {
  "class": "summary-picker mui-form--inline",
  onsubmit: "return false;"
};
var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_3 = {
  "class": "summary-picker__section"
};
var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_4 = {
  "class": "mui-textfield search_box"
};

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "search", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_6 = {
  "class": "mui-select grouping"
};

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_7 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "groupByNone"
}, "None", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "groupByRepos"
}, "Repo/Branch", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_9 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "groupByAuthors"
}, "Author", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "group by", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_11 = {
  "class": "mui-select sort-group"
};

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_12 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createStaticVNode */])("<option value=\"groupTitle\">↑ group title</option><option value=\"groupTitle dsc\">↓ group title</option><option value=\"totalCommits\">↑ contribution</option><option value=\"totalCommits dsc\">↓ contribution</option><option value=\"variance\">↑ variance</option><option value=\"variance dsc\">↓ variance</option>", 6);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "sort groups by", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_19 = {
  "class": "mui-select sort-within-group"
};

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_20 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createStaticVNode */])("<option value=\"title\">↑ title</option><option value=\"title dsc\">↓ title</option><option value=\"totalCommits\">↑ contribution</option><option value=\"totalCommits dsc\">↓ contribution</option><option value=\"variance\">↑ variance</option><option value=\"variance dsc\">↓ variance</option>", 6);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_26 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "sort within groups by", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_27 = {
  "class": "mui-select granularity"
};

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_28 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "commit"
}, "Commit", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_29 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "day"
}, "Day", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_30 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "week"
}, "Week", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_31 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "granularity", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_32 = {
  "class": "mui-textfield"
};

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_33 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "since", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_34 = {
  "class": "mui-textfield"
};

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_35 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "until", -1);

var v_summaryvue_type_template_id_52174479_lang_pug_hoisted_36 = {
  "class": "mui-textfield"
};
var _hoisted_37 = {
  "class": "summary-picker__checkboxes summary-picker__section"
};
var _hoisted_38 = {
  "class": "filter-breakdown"
};

var _hoisted_39 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "breakdown by file type", -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "merge all groups", -1);

var _hoisted_41 = {
  key: 0,
  "class": "error-message-box"
};

var _hoisted_42 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
  "class": "error-message-box__message"
}, "The following issues occurred when analyzing the following repositories:", -1);

var _hoisted_43 = {
  "class": "error-message-box__failed-repo",
  "vbind:key": "errorBlock.repoName"
};

var _hoisted_44 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("i", {
  "class": "fas fa-exclamation"
}, null, -1);

var _hoisted_45 = {
  "class": "error-message-box__failed-repo--name"
};
var _hoisted_46 = {
  key: 0,
  "class": "error-message-box__failed-repo--reason"
};

var _hoisted_47 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "Oops, an unexpected error occurred.If this is due to a problem in RepoSense, please report in ", -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("strong", null, "our issue tracker ", -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "or email us at ", -1);

var _hoisted_50 = {
  key: 1,
  "class": "error-message-box__failed-repo--reason"
};
var _hoisted_51 = {
  key: 1,
  "class": "fileTypes"
};
var _hoisted_52 = {
  key: 0,
  "class": "checkboxes mui-form--inline"
};
var _hoisted_53 = {
  style: {
    "background-color": "#000000",
    "color": "#ffffff"
  }
};

var _hoisted_54 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "All: ", -1);

function v_summaryvue_type_template_id_52174479_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_v_summary_charts = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("v-summary-charts");

  return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_1, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("form", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_2, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_3, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_4, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    type: "text",
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.updateFilterSearch && $options.updateFilterSearch.apply($options, arguments);
    }),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.filterSearch = $event;
    })
  }, null, 544), [[vue_runtime_esm_bundler["D" /* vModelText */], $data.filterSearch]]), v_summaryvue_type_template_id_52174479_lang_pug_hoisted_5, Object(vue_runtime_esm_bundler["i" /* createVNode */])("button", {
    "class": "mui-btn mui-btn--raised",
    type: "button",
    onClick: _cache[3] || (_cache[3] = Object(vue_runtime_esm_bundler["J" /* withModifiers */])(function () {
      return $options.resetFilterSearch && $options.resetFilterSearch.apply($options, arguments);
    }, ["prevent"]))
  }, "x")]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_6, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.filterGroupSelection = $event;
    })
  }, [v_summaryvue_type_template_id_52174479_lang_pug_hoisted_7, v_summaryvue_type_template_id_52174479_lang_pug_hoisted_8, v_summaryvue_type_template_id_52174479_lang_pug_hoisted_9], 512), [[vue_runtime_esm_bundler["C" /* vModelSelect */], $data.filterGroupSelection]]), v_summaryvue_type_template_id_52174479_lang_pug_hoisted_10]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_11, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("select", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.sortGroupSelection = $event;
    }),
    onChange: _cache[6] || (_cache[6] = function () {
      return $options.getFiltered && $options.getFiltered.apply($options, arguments);
    })
  }, [v_summaryvue_type_template_id_52174479_lang_pug_hoisted_12], 544), [[vue_runtime_esm_bundler["C" /* vModelSelect */], $data.sortGroupSelection]]), v_summaryvue_type_template_id_52174479_lang_pug_hoisted_18]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_19, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("select", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.sortWithinGroupSelection = $event;
    }),
    disabled: $data.filterGroupSelection === 'groupByNone' || $options.allGroupsMerged,
    onChange: _cache[8] || (_cache[8] = function () {
      return $options.getFiltered && $options.getFiltered.apply($options, arguments);
    })
  }, [v_summaryvue_type_template_id_52174479_lang_pug_hoisted_20], 40, ["disabled"]), [[vue_runtime_esm_bundler["C" /* vModelSelect */], $data.sortWithinGroupSelection]]), v_summaryvue_type_template_id_52174479_lang_pug_hoisted_26]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_27, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("select", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.filterTimeFrame = $event;
    }),
    onChange: _cache[10] || (_cache[10] = function () {
      return $options.getFiltered && $options.getFiltered.apply($options, arguments);
    })
  }, [v_summaryvue_type_template_id_52174479_lang_pug_hoisted_28, v_summaryvue_type_template_id_52174479_lang_pug_hoisted_29, v_summaryvue_type_template_id_52174479_lang_pug_hoisted_30], 544), [[vue_runtime_esm_bundler["C" /* vModelSelect */], $data.filterTimeFrame]]), v_summaryvue_type_template_id_52174479_lang_pug_hoisted_31]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_32, [$data.isSafariBrowser ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("input", {
    key: 0,
    type: "text",
    placeholder: "yyyy-mm-dd",
    value: $options.filterSinceDate,
    onKeyup: _cache[11] || (_cache[11] = Object(vue_runtime_esm_bundler["I" /* withKeys */])(function () {
      return $options.updateTmpFilterSinceDate && $options.updateTmpFilterSinceDate.apply($options, arguments);
    }, ["enter"])),
    onkeydown: "formatInputDateOnKeyDown(event)",
    oninput: "appendDashInputDate(event)",
    maxlength: "10"
  }, null, 40, ["value"])) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("input", {
    key: 1,
    type: "date",
    name: "since",
    value: $options.filterSinceDate,
    onInput: _cache[12] || (_cache[12] = function () {
      return $options.updateTmpFilterSinceDate && $options.updateTmpFilterSinceDate.apply($options, arguments);
    }),
    min: $data.minDate,
    max: $options.filterUntilDate
  }, null, 40, ["value", "min", "max"])), v_summaryvue_type_template_id_52174479_lang_pug_hoisted_33]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_34, [$data.isSafariBrowser ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("input", {
    key: 0,
    type: "text",
    placeholder: "yyyy-mm-dd",
    value: $options.filterUntilDate,
    onKeyup: _cache[13] || (_cache[13] = Object(vue_runtime_esm_bundler["I" /* withKeys */])(function () {
      return $options.updateTmpFilterUntilDate && $options.updateTmpFilterUntilDate.apply($options, arguments);
    }, ["enter"])),
    onkeydown: "formatInputDateOnKeyDown(event)",
    oninput: "appendDashInputDate(event)",
    maxlength: "10"
  }, null, 40, ["value"])) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("input", {
    key: 1,
    type: "date",
    name: "until",
    value: $options.filterUntilDate,
    onInput: _cache[14] || (_cache[14] = function () {
      return $options.updateTmpFilterUntilDate && $options.updateTmpFilterUntilDate.apply($options, arguments);
    }),
    min: $options.filterSinceDate,
    max: $data.maxDate
  }, null, 40, ["value", "min", "max"])), v_summaryvue_type_template_id_52174479_lang_pug_hoisted_35]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summaryvue_type_template_id_52174479_lang_pug_hoisted_36, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
    onClick: _cache[15] || (_cache[15] = function () {
      return $options.resetDateRange && $options.resetDateRange.apply($options, arguments);
    })
  }, "Reset date range")]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_37, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", _hoisted_38, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    "class": "mui-checkbox",
    type: "checkbox",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.filterBreakdown = $event;
    }),
    onChange: _cache[17] || (_cache[17] = function () {
      return $options.getFiltered && $options.getFiltered.apply($options, arguments);
    })
  }, null, 544), [[vue_runtime_esm_bundler["A" /* vModelCheckbox */], $data.filterBreakdown]]), _hoisted_39]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", {
    "class": "merge-group",
    style: $data.filterGroupSelection === 'groupByNone' ? {
      opacity: 0.5
    } : {
      opacity: 1.0
    }
  }, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    "class": "mui-checkbox",
    type: "checkbox",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $options.allGroupsMerged = $event;
    }),
    disabled: $data.filterGroupSelection === 'groupByNone'
  }, null, 8, ["disabled"]), [[vue_runtime_esm_bundler["A" /* vModelCheckbox */], $options.allGroupsMerged]]), _hoisted_40], 4)])])]), Object.entries($props.errorMessages).length ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_41, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
    "class": "error-message-box__close-button",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $options.dismissTab($event);
    })
  }, "×"), _hoisted_42, (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($props.errorMessages, function (errorBlock) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_43, [_hoisted_44, Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", _hoisted_45, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(errorBlock.repoName), 1), errorBlock.errorMessage.startsWith('Unexpected error stack trace') ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_46, [_hoisted_47, Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
      href: $options.getReportIssueGitHubLink(errorBlock.errorMessage),
      target: "_blank"
    }, [_hoisted_48], 8, ["href"]), _hoisted_49, Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
      href: $options.getReportIssueEmailLink(errorBlock.errorMessage)
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.getReportIssueEmailAddress()), 1)], 8, ["href"])])) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_50, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(errorBlock.errorMessage), 1))]);
  }), 256))])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $data.filterBreakdown ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_51, [Object.keys($data.fileTypeColors).length > 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_52, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", _hoisted_53, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    "class": "mui-checkbox--fileType",
    id: "all",
    type: "checkbox",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $options.checkAllFileTypes = $event;
    })
  }, null, 512), [[vue_runtime_esm_bundler["A" /* vModelCheckbox */], $options.checkAllFileTypes]]), _hoisted_54]), (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])(Object.keys($data.fileTypeColors), function (fileType) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("label", {
      key: fileType,
      style: {
        'background-color': $data.fileTypeColors[fileType],
        'color': _this.getFontColor($data.fileTypeColors[fileType])
      }
    }, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
      "class": "mui-checkbox--fileType",
      type: "checkbox",
      id: fileType,
      value: fileType,
      "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
        return $data.checkedFileTypes = $event;
      }),
      onChange: _cache[22] || (_cache[22] = function () {
        return $options.getFiltered && $options.getFiltered.apply($options, arguments);
      })
    }, null, 40, ["id", "value"]), [[vue_runtime_esm_bundler["A" /* vModelCheckbox */], $data.checkedFileTypes]]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(fileType), 1)], 4);
  }), 128))])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_v_summary_charts, {
    filtered: $data.filtered,
    "checked-file-types": $data.checkedFileTypes,
    "avg-contribution-size": $options.avgContributionSize,
    "filter-group-selection": $data.filterGroupSelection,
    "filter-breakdown": $data.filterBreakdown,
    "filter-time-frame": $data.filterTimeFrame,
    "filter-since-date": $options.filterSinceDate,
    "filter-until-date": $options.filterUntilDate,
    "filter-search": $data.filterSearch,
    "min-date": $data.minDate,
    "max-date": $data.maxDate
  }, null, 8, ["filtered", "checked-file-types", "avg-contribution-size", "filter-group-selection", "filter-breakdown", "filter-time-frame", "filter-since-date", "filter-until-date", "filter-search", "min-date", "max-date"])]);
}
// CONCATENATED MODULE: ./src/views/v-summary.vue?vue&type=template&id=52174479&lang=pug

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("841c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("4795");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/v-summary-charts.vue?vue&type=template&id=042828fb&lang=pug


var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_1 = {
  id: "summary-charts"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_2 = {
  "class": "summary-charts"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_3 = {
  key: 0,
  "class": "summary-charts__title"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_4 = {
  "class": "summary-charts__title--index"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_5 = {
  "class": "summary-charts__title--groupname"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_6 = {
  "class": "summary-charts__title--contribution"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_7 = {
  "class": "tooltip"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_8 = {
  key: 0,
  "class": "tooltip-text"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_9 = {
  key: 1,
  "class": "tooltip-text"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_10 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_11 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to merge group", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_12 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_13 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to expand group", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_14 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_15 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view group's repo", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_16 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_17 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view author's profile", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_18 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_19 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view group's code", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_20 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_21 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view breakdown of commits", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_22 = {
  "class": "summary-charts__title--percentile"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_23 = {
  key: 1,
  "class": "summary-charts__fileType--breakdown"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_24 = {
  "class": "summary-chart"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_25 = {
  key: 0,
  "class": "summary-chart__title"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_26 = {
  "class": "summary-chart__title--index"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_27 = {
  key: 0,
  "class": "summary-chart__title--repo"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_28 = {
  key: 1,
  "class": "summary-chart__title--author-repo"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_29 = {
  "class": "summary-chart__title--contribution mini-font"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_30 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_31 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view repo", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_32 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_33 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view author's profile", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_34 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_35 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view author's contribution", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_36 = {
  "class": "tooltip"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_37 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view breakdown of commits", -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_38 = {
  key: 5,
  "class": "summary-chart__title--percentile"
};

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_39 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
  "class": "overlay"
}, null, -1);

var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_40 = {
  "class": "summary-chart__contribution"
};
var v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_41 = {
  "class": "summary-chart__contrib"
};
function v_summary_chartsvue_type_template_id_042828fb_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_font_awesome_icon = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("font-awesome-icon");

  var _component_v_ramp = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("v-ramp");

  return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_1, [(Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($options.filteredRepos, function (repo, i) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_2, [$props.filterGroupSelection !== 'groupByNone' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_3, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_4, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(i + 1), 1), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_5, [$props.filterGroupSelection === 'groupByRepos' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
      key: 0
    }, [Object(vue_runtime_esm_bundler["h" /* createTextVNode */])(Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(repo[0].repoName), 1)], 64)) : $props.filterGroupSelection === 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
      key: 1
    }, [Object(vue_runtime_esm_bundler["h" /* createTextVNode */])(Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(repo[0].displayName) + " (" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(repo[0].name) + ")", 1)], 64)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_6, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_7, [Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("[" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.getGroupTotalContribution(repo)) + " lines]", 1), $props.filterGroupSelection === 'groupByRepos' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("span", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_8, "Total contribution of group")) : $props.filterGroupSelection === 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("span", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_9, "Total contribution of author")) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)])]), !$options.isGroupMerged($options.getGroupName(repo)) ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
      key: 0,
      onClick: function onClick($event) {
        return $options.handleMergeGroup($options.getGroupName(repo));
      }
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_10, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      "class": "icon-button",
      icon: ['fas', 'chevron-up']
    }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_11])], 8, ["onClick"])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $options.isGroupMerged($options.getGroupName(repo)) ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
      key: 1,
      onClick: function onClick($event) {
        return $options.handleExpandGroup($options.getGroupName(repo));
      }
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_12, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      "class": "icon-button",
      icon: ['fas', 'chevron-down']
    }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_13])], 8, ["onClick"])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $props.filterGroupSelection === 'groupByRepos' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
      key: 2,
      href: $options.getRepoLink(repo[0]),
      target: "_blank"
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_14, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      "class": "icon-button",
      icon: ['fab', 'github']
    }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_15])], 8, ["href"])) : $props.filterGroupSelection === 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
      key: 3,
      href: $options.getAuthorProfileLink(repo[0].name),
      target: "_blank"
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_16, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      "class": "icon-button",
      icon: "user"
    }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_17])], 8, ["href"])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $options.isGroupMerged($options.getGroupName(repo)) ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
      key: 4
    }, [$props.filterGroupSelection !== 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
      key: 0,
      onclick: "deactivateAllOverlays()",
      onClick: function onClick($event) {
        return $options.openTabAuthorship(repo[0], repo, 0, $options.isGroupMerged($options.getGroupName(repo)));
      }
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_18, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      "class": "icon-button",
      icon: "code"
    }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_19])], 8, ["onClick"])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
      onclick: "deactivateAllOverlays()",
      onClick: function onClick($event) {
        return $options.openTabZoom(repo[0], $props.filterSinceDate, $props.filterUntilDate, $options.isGroupMerged($options.getGroupName(repo)));
      }
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_20, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      "class": "icon-button",
      icon: "list-ul"
    }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_21])], 8, ["onClick"])], 64)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_22, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.getPercentile(i)) + " %", 1)])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $props.filterBreakdown ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_23, [$props.filterGroupSelection !== 'groupByNone' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
      key: 0
    }, Object(vue_runtime_esm_bundler["u" /* renderList */])($options.getFileTypes(repo), function (fileType) {
      return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
        "class": "summary-charts__fileType--breakdown__legend",
        key: fileType
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        icon: "circle",
        style: {
          'color': _ctx.fileTypeColors[fileType]
        }
      }, null, 8, ["style"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "  " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(fileType) + "  ", 1)]);
    }), 128)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])(repo, function (user, j) {
      return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_24, [!$options.isGroupMerged($options.getGroupName(repo)) ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_25, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_26, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(j + 1), 1), $props.filterGroupSelection === 'groupByNone' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_27, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(user.repoName), 1)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $props.filterGroupSelection === 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_28, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(user.repoName), 1)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $props.filterGroupSelection !== 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
        key: 2,
        "class": ["summary-chart__title--name", {
          warn: user.name === '-'
        }]
      }, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(user.displayName) + " (" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(user.name) + ")", 3)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_29, "[" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(user.checkedFileTypeContribution) + " lines]", 1), $props.filterGroupSelection !== 'groupByRepos' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
        key: 3,
        href: $options.getRepoLink(repo[j]),
        target: "_blank"
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_30, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        "class": "icon-button",
        icon: ['fab', 'github']
      }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_31])], 8, ["href"])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $props.filterGroupSelection !== 'groupByAuthors' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
        key: 4,
        href: $options.getAuthorProfileLink(repo[j].name),
        target: "_blank"
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_32, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        "class": "icon-button",
        icon: "user"
      }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_33])], 8, ["href"])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
        onclick: "deactivateAllOverlays()",
        onClick: function onClick($event) {
          return $options.openTabAuthorship(user, repo, j, $options.isGroupMerged($options.getGroupName(repo)));
        }
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_34, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        "class": "icon-button",
        icon: "code"
      }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_35])], 8, ["onClick"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
        onclick: "deactivateAllOverlays()",
        onClick: function onClick($event) {
          return $options.openTabZoom(user, $props.filterSinceDate, $props.filterUntilDate, $options.isGroupMerged($options.getGroupName(repo)));
        }
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_36, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
        "class": "icon-button",
        icon: "list-ul"
      }), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_37])], 8, ["onClick"]), $props.filterGroupSelection === 'groupByNone' ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_38, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.getPercentile(j)) + " %", 1)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
        "class": "summary-chart__ramp",
        onClick: function onClick($event) {
          return $options.openTabZoomSubrange(user, $event, $options.isGroupMerged($options.getGroupName(repo)));
        }
      }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_v_ramp, {
        groupby: $props.filterGroupSelection,
        user: user,
        tframe: $props.filterTimeFrame,
        sdate: $props.filterSinceDate,
        udate: $props.filterUntilDate,
        avgsize: $options.avgCommitSize,
        mergegroup: $options.isGroupMerged($options.getGroupName(repo)),
        filtersearch: $props.filterSearch
      }, null, 8, ["groupby", "user", "tframe", "sdate", "udate", "avgsize", "mergegroup", "filtersearch"]), v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_39], 8, ["onClick"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_40, [$props.filterBreakdown ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], {
        key: 0
      }, Object(vue_runtime_esm_bundler["u" /* renderList */])($options.getFileTypeContributionBars(user.fileTypeContribution), function (widths, fileType) {
        return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_summary_chartsvue_type_template_id_042828fb_lang_pug_hoisted_41, [(Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])(widths, function (width) {
          return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
            "class": "summary-chart__contrib--bar",
            style: {
              width: width + '%',
              'background-color': _ctx.fileTypeColors[fileType]
            },
            title: fileType + ': ' + user.fileTypeContribution[fileType] + ' lines, ' + 'total: ' + user.checkedFileTypeContribution + ' lines ' + '(contribution from ' + $props.minDate + ' to ' + $props.maxDate + ')'
          }, null, 12, ["title"]);
        }), 256))]);
      }), 256)) : (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
        key: 1,
        "class": "summary-chart__contrib",
        title: 'Total contribution from ' + $props.minDate + ' to ' + $props.maxDate + ': ' + user.checkedFileTypeContribution + ' lines'
      }, [(Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($options.getContributionBars(user.checkedFileTypeContribution), function (width) {
        return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
          "class": "summary-chart__contrib--bar",
          style: {
            width: width + '%'
          }
        }, null, 4);
      }), 256))], 8, ["title"]))])]);
    }), 256))]);
  }), 256))]);
}
// CONCATENATED MODULE: ./src/components/v-summary-charts.vue?vue&type=template&id=042828fb&lang=pug

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("e25e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/v-summary-charts.vue?vue&type=script&lang=js

















/* harmony default export */ var v_summary_chartsvue_type_script_lang_js = ({
  name: 'v-summary-charts',
  props: ['checkedFileTypes', 'filtered', 'avgContributionSize', 'filterBreakdown', 'filterGroupSelection', 'filterTimeFrame', 'filterSinceDate', 'filterUntilDate', 'isMergeGroup', 'minDate', 'maxDate', 'filterSearch'],
  data: function data() {
    return {
      drags: []
    };
  },
  computed: Object(objectSpread2["a" /* default */])({
    avgCommitSize: function avgCommitSize() {
      var totalCommits = 0;
      var totalCount = 0;
      this.filteredRepos.forEach(function (repo) {
        repo.forEach(function (user) {
          user.commits.forEach(function (slice) {
            if (slice.insertions > 0) {
              totalCount += 1;
              totalCommits += slice.insertions;
            }
          });
        });
      });
      return totalCommits / totalCount;
    },
    filteredRepos: function filteredRepos() {
      return this.filtered.filter(function (repo) {
        return repo.length > 0;
      });
    }
  }, Object(vuex_esm_browser["b" /* mapState */])(['mergedGroups', 'fileTypeColors'])),
  methods: {
    getFileTypeContributionBars: function getFileTypeContributionBars(fileTypeContribution) {
      var _this = this;

      var currentBarWidth = 0;
      var fullBarWidth = 100;
      var contributionPerFullBar = this.avgContributionSize * 2;
      var allFileTypesContributionBars = {};
      Object.keys(fileTypeContribution).filter(function (fileType) {
        return _this.checkedFileTypes.includes(fileType);
      }).forEach(function (fileType) {
        var contribution = fileTypeContribution[fileType];
        var barWidth = contribution / contributionPerFullBar * fullBarWidth;
        var contributionBars = []; // if contribution bar for file type is able to fit on the current line

        if (currentBarWidth + barWidth < fullBarWidth) {
          contributionBars.push(barWidth);
          currentBarWidth += barWidth;
        } else {
          // take up all the space left on the current line
          contributionBars.push(fullBarWidth - currentBarWidth);
          barWidth -= fullBarWidth - currentBarWidth; // additional bar width will start on a new line

          var numOfFullBars = Math.floor(barWidth / fullBarWidth);

          for (var i = 0; i < numOfFullBars; i += 1) {
            contributionBars.push(fullBarWidth);
          }

          var remainingBarWidth = barWidth % fullBarWidth;

          if (remainingBarWidth !== 0) {
            contributionBars.push(remainingBarWidth);
          }

          currentBarWidth = remainingBarWidth;
        }

        allFileTypesContributionBars[fileType] = contributionBars;
      });
      return allFileTypesContributionBars;
    },
    getFileTypes: function getFileTypes(repo) {
      var _this2 = this;

      var fileTypes = [];
      repo.forEach(function (user) {
        Object.keys(user.fileTypeContribution).forEach(function (fileType) {
          if (_this2.checkedFileTypes.includes(fileType) && !fileTypes.includes(fileType)) {
            fileTypes.push(fileType);
          }
        });
      });
      return fileTypes;
    },
    getGroupTotalContribution: function getGroupTotalContribution(group) {
      return group.reduce(function (acc, ele) {
        return acc + ele.checkedFileTypeContribution;
      }, 0);
    },
    getContributionBars: function getContributionBars(totalContribution) {
      var res = [];
      var contributionLimit = this.avgContributionSize * 2;
      var cnt = parseInt(totalContribution / contributionLimit, 10);

      for (var cntId = 0; cntId < cnt; cntId += 1) {
        res.push(100);
      }

      var last = totalContribution % contributionLimit / contributionLimit;

      if (last !== 0) {
        res.push(last * 100);
      }

      return res;
    },
    getAuthorProfileLink: function getAuthorProfileLink(userName) {
      return "https://github.com/".concat(userName);
    },
    getRepoLink: function getRepoLink(repo) {
      var _window = window,
          REPOS = _window.REPOS;
      var _REPOS$repo$repoId = REPOS[repo.repoId],
          location = _REPOS$repo$repoId.location,
          branch = _REPOS$repo$repoId.branch;

      if (Object.prototype.hasOwnProperty.call(location, 'organization')) {
        return "".concat(window.BASE_URL, "/").concat(location.organization, "/").concat(location.repoName, "/tree/").concat(branch);
      }

      return repo.location;
    },
    // triggering opening of tabs //
    openTabAuthorship: function openTabAuthorship(user, repo, index, isMerged) {
      var minDate = this.minDate,
          maxDate = this.maxDate,
          checkedFileTypes = this.checkedFileTypes;
      var info = {
        minDate: minDate,
        maxDate: maxDate,
        checkedFileTypes: checkedFileTypes,
        author: user.name,
        repo: user.repoName,
        name: user.displayName,
        isMergeGroup: isMerged,
        location: this.getRepoLink(repo[index]),
        repoIndex: index
      };
      this.$store.commit('updateTabAuthorshipInfo', info);
    },
    openTabZoomSubrange: function openTabZoomSubrange(user, evt, isMerge) {
      var isKeyPressed = window.isMacintosh ? evt.metaKey : evt.ctrlKey;

      if (isKeyPressed) {
        if (this.drags.length === 0) {
          this.dragViewDown(evt);
        } else {
          this.dragViewUp(evt);
        }
      } // skip if accidentally clicked on ramp chart


      if (this.drags.length === 2 && this.drags[1] - this.drags[0]) {
        var tdiff = new Date(this.filterUntilDate) - new Date(this.filterSinceDate);
        var idxs = this.drags.map(function (x) {
          return x * tdiff / 100;
        });
        var tsince = window.getDateStr(new Date(this.filterSinceDate).getTime() + idxs[0]);
        var tuntil = window.getDateStr(new Date(this.filterSinceDate).getTime() + idxs[1]);
        this.drags = [];
        this.openTabZoom(user, tsince, tuntil, isMerge);
      }
    },
    openTabZoom: function openTabZoom(user, since, until, isMerge) {
      var avgCommitSize = this.avgCommitSize,
          filterGroupSelection = this.filterGroupSelection,
          filterTimeFrame = this.filterTimeFrame,
          filterSearch = this.filterSearch;
      var clonedUser = Object.assign({}, user); // so that changes in summary won't affect zoom

      var info = {
        zRepo: user.repoName,
        zAuthor: user.name,
        zFilterGroup: filterGroupSelection,
        zTimeFrame: filterTimeFrame,
        zAvgCommitSize: avgCommitSize,
        zUser: clonedUser,
        zLocation: this.getRepoLink(user),
        zSince: since,
        zUntil: until,
        zIsMerge: isMerge,
        zFileTypeColors: this.fileTypeColors,
        zFromRamp: false,
        zFilterSearch: filterSearch
      };
      this.$store.commit('updateTabZoomInfo', info);
    },
    getBaseTarget: function getBaseTarget(target) {
      return target.className === 'summary-chart__ramp' ? target : this.getBaseTarget(target.parentElement);
    },
    dragViewDown: function dragViewDown(evt) {
      window.deactivateAllOverlays();
      var pos = evt.clientX;
      var ramp = this.getBaseTarget(evt.target);
      this.drags = [pos];
      var base = ramp.offsetWidth;
      var offset = ramp.parentElement.offsetLeft;
      var overlay = ramp.getElementsByClassName('overlay')[0];
      overlay.style.marginLeft = '0';
      overlay.style.width = "".concat((pos - offset) * 100 / base, "%");
      overlay.className += ' edge';
    },
    dragViewUp: function dragViewUp(evt) {
      window.deactivateAllOverlays();
      var ramp = this.getBaseTarget(evt.target);
      var base = ramp.offsetWidth;
      this.drags.push(evt.clientX);
      this.drags.sort(function (a, b) {
        return a - b;
      });
      var offset = ramp.parentElement.offsetLeft;
      this.drags = this.drags.map(function (x) {
        return (x - offset) * 100 / base;
      });
      var overlay = ramp.getElementsByClassName('overlay')[0];
      overlay.style.marginLeft = "".concat(this.drags[0], "%");
      overlay.style.width = "".concat(this.drags[1] - this.drags[0], "%");
      overlay.className += ' show';
    },
    getPercentile: function getPercentile(index) {
      if (this.filterGroupSelection === 'groupByNone') {
        return (Math.round((index + 1) * 1000 / this.filtered[0].length) / 10).toFixed(1);
      }

      return (Math.round((index + 1) * 1000 / this.filtered.length) / 10).toFixed(1);
    },
    getGroupName: function getGroupName(group) {
      return window.getGroupName(group, this.filterGroupSelection);
    },
    isGroupMerged: function isGroupMerged(groupName) {
      return this.mergedGroups.includes(groupName);
    },
    handleMergeGroup: function handleMergeGroup(groupName) {
      var info = this.mergedGroups;
      info.push(groupName);
      this.$store.commit('updateMergedGroup', info);
    },
    handleExpandGroup: function handleExpandGroup(groupName) {
      var info = this.mergedGroups.filter(function (x) {
        return x !== groupName;
      });
      this.$store.commit('updateMergedGroup', info);
    }
  },
  components: {
    vRamp: v_ramp
  }
});
// CONCATENATED MODULE: ./src/components/v-summary-charts.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/v-summary-charts.vue



v_summary_chartsvue_type_script_lang_js.render = v_summary_chartsvue_type_template_id_042828fb_lang_pug_render

/* harmony default export */ var v_summary_charts = (v_summary_chartsvue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-start.js
var es_string_pad_start = __webpack_require__("4d90");

// EXTERNAL MODULE: ./node_modules/seedrandom/index.js
var seedrandom = __webpack_require__("6125");
var seedrandom_default = /*#__PURE__*/__webpack_require__.n(seedrandom);

// CONCATENATED MODULE: ./src/utils/ramp-colour-generator.js






var randomGenerator = seedrandom_default()('Seeded Random Generator');

function getRandomHex() {
  var maxHexColorValue = 16777214; // excludes #000000 and #FFFFFF as they are reserved

  return "#".concat(Math.round(randomGenerator() * maxHexColorValue + 1).toString(16).padStart(6, '0'));
}

function rgb2lab(rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var x;
  var y;
  var z;
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
} // this delta E (perceptual color distance) implementation taken from @antimatter15 from
// github: https://github.com/antimatter15/rgb-lab


function deltaE(rgbA, rgbB) {
  var labA = rgb2lab(rgbA);
  var labB = rgb2lab(rgbB);
  var deltaL = labA[0] - labB[0];
  var deltaA = labA[1] - labB[1];
  var deltaB = labA[2] - labB[2];
  var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  var deltaC = c1 - c2;
  var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  var sc = 1.0 + 0.045 * c1;
  var sh = 1.0 + 0.015 * c1;
  var deltaLKLSL = deltaL / 1.0;
  var deltaCKCSC = deltaC / sc;
  var deltaHKSHS = deltaH / sh;
  var distance = deltaLKLSL * deltaLKLSL + deltaCKCSC * deltaCKCSC + deltaHKSHS * deltaHKSHS;
  return distance < 0 ? 0 : Math.sqrt(distance);
}

function hasSimilarExistingColors(existingColors, newHex) {
  var deltaEThreshold = 11; // the lower limit of delta E to be similar, more info at http://zschuessler.github.io/DeltaE/learn/

  return existingColors.some(function (existingHex) {
    var existingRGB = window.getHexToRGB(existingHex);
    var newRGB = window.getHexToRGB(newHex);
    return deltaE(existingRGB, newRGB) < deltaEThreshold;
  });
}

function getNonRepeatingColor(existingColors) {
  var generatedHex = getRandomHex();

  while (hasSimilarExistingColors(existingColors, generatedHex)) {
    generatedHex = getRandomHex();
  }

  return generatedHex;
}

/* harmony default export */ var ramp_colour_generator = (getNonRepeatingColor);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__("26e9");

// CONCATENATED MODULE: ./src/utils/repo-sorter.js










function getTotalCommits(total, group) {
  return total + group.checkedFileTypeContribution;
}

function getGroupCommitsVariance(total, group) {
  return total + group.variance;
} // function getGroupCommitsVariance(sortingOption) {
//   return function (total, group) {
//     if (sortingOption === 'totalCommits') {
//       return total + group.checkedFileTypeContribution;
//     }
//     return total + group[sortingOption];
//   };
// }


function sortingHelper(element, sortingOption) {
  // return sortingOption === 'totalCommits' || sortingOption === 'variance'
  //     ? element.reduce(getGroupCommitsVariance, 0)
  //     : element[0][sortingOption];
  if (sortingOption === 'totalCommits') {
    return element.reduce(getTotalCommits, 0);
  }

  if (sortingOption === 'variance') {
    return element.reduce(getGroupCommitsVariance, 0);
  }

  return element[0][sortingOption];
}

function groupByRepos(repos, sortingControl) {
  var sortedRepos = [];
  var sortingWithinOption = sortingControl.sortingWithinOption,
      sortingOption = sortingControl.sortingOption,
      isSortingDsc = sortingControl.isSortingDsc,
      isSortingWithinDsc = sortingControl.isSortingWithinDsc;
  var sortWithinOption = sortingWithinOption === 'title' ? 'displayName' : sortingWithinOption;
  var sortOption = sortingOption === 'groupTitle' ? 'searchPath' : sortingOption;
  repos.forEach(function (users) {
    if (sortWithinOption === 'totalCommits') {
      users.sort(window.comparator(function (ele) {
        return ele.checkedFileTypeContribution;
      }));
    } else {
      users.sort(window.comparator(function (ele) {
        return ele[sortWithinOption];
      }));
    }

    if (isSortingWithinDsc) {
      users.reverse();
    }

    sortedRepos.push(users);
  });
  sortedRepos.sort(window.comparator(sortingHelper, sortOption));

  if (isSortingDsc) {
    sortedRepos.reverse();
  }

  return sortedRepos;
}

function groupByNone(repos, sortingControl) {
  var sortedRepos = [];
  var sortingOption = sortingControl.sortingOption,
      isSortingDsc = sortingControl.isSortingDsc;
  var isSortingGroupTitle = sortingOption === 'groupTitle';
  repos.forEach(function (users) {
    users.forEach(function (user) {
      sortedRepos.push(user);
    });
  });
  sortedRepos.sort(window.comparator(function (repo) {
    if (isSortingGroupTitle) {
      return repo.searchPath + repo.name;
    }

    if (sortingOption === 'totalCommits') {
      return repo.checkedFileTypeContribution;
    }

    return repo[sortingOption];
  }));

  if (isSortingDsc) {
    sortedRepos.reverse();
  }

  return sortedRepos;
}

function groupByAuthors(repos, sortingControl) {
  var authorMap = {};
  var filtered = [];
  var sortingWithinOption = sortingControl.sortingWithinOption,
      sortingOption = sortingControl.sortingOption,
      isSortingDsc = sortingControl.isSortingDsc,
      isSortingWithinDsc = sortingControl.isSortingWithinDsc;
  var sortWithinOption = sortingWithinOption === 'title' ? 'searchPath' : sortingWithinOption;
  var sortOption = sortingOption === 'groupTitle' ? 'displayName' : sortingOption;
  repos.forEach(function (users) {
    users.forEach(function (user) {
      if (Object.keys(authorMap).includes(user.name)) {
        authorMap[user.name].push(user);
      } else {
        authorMap[user.name] = [user];
      }
    });
  });
  Object.keys(authorMap).forEach(function (author) {
    if (sortWithinOption === 'totalCommits') {
      authorMap[author].sort(window.comparator(function (repo) {
        return repo.checkedFileTypeContribution;
      }));
    } else {
      authorMap[author].sort(window.comparator(function (repo) {
        return repo[sortWithinOption];
      }));
    }

    if (isSortingWithinDsc) {
      authorMap[author].reverse();
    }

    filtered.push(authorMap[author]);
  });
  filtered.sort(window.comparator(sortingHelper, sortOption));

  if (isSortingDsc) {
    filtered.reverse();
  }

  return filtered;
}

function sortFiltered(filtered, filterControl) {
  var filterGroupSelection = filterControl.filterGroupSelection;
  var full = [];

  if (filterGroupSelection === 'groupByNone') {
    // push all repos into the same group
    full[0] = groupByNone(filtered, filterControl);
  } else if (filterGroupSelection === 'groupByAuthors') {
    full = groupByAuthors(filtered, filterControl);
  } else {
    full = groupByRepos(filtered, filterControl);
  }

  return full;
}

/* harmony default export */ var repo_sorter = (sortFiltered);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/v-summary.vue?vue&type=script&lang=js



























var dateFormatRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
/* harmony default export */ var v_summaryvue_type_script_lang_js = ({
  name: 'v-summary',
  props: ['repos', 'errorMessages'],
  data: function data() {
    return {
      checkedFileTypes: [],
      fileTypes: [],
      filtered: [],
      filterSearch: '',
      filterGroupSelection: 'groupByRepos',
      sortGroupSelection: 'groupTitle',
      // UI for sorting groups
      sortWithinGroupSelection: 'title',
      // UI for sorting within groups
      sortingOption: '',
      isSortingDsc: '',
      sortingWithinOption: '',
      isSortingWithinDsc: '',
      filterTimeFrame: 'commit',
      filterBreakdown: false,
      tmpFilterSinceDate: '',
      tmpFilterUntilDate: '',
      hasModifiedSinceDate: window.app.isSinceDateProvided,
      hasModifiedUntilDate: window.app.isUntilDateProvided,
      filterHash: '',
      minDate: '',
      maxDate: '',
      fileTypeColors: {},
      isSafariBrowser: /.*Version.*Safari.*/.test(navigator.userAgent),
      filterGroupSelectionWatcherFlag: false
    };
  },
  computed: Object(objectSpread2["a" /* default */])({
    checkAllFileTypes: {
      get: function get() {
        return this.checkedFileTypes.length === this.fileTypes.length;
      },
      set: function set(value) {
        if (value) {
          this.checkedFileTypes = this.fileTypes.slice();
        } else {
          this.checkedFileTypes = [];
        }
      }
    },
    avgContributionSize: function avgContributionSize() {
      var _this = this;

      var totalLines = 0;
      var totalCount = 0;
      this.repos.forEach(function (repo) {
        repo.users.forEach(function (user) {
          if (user.checkedFileTypeContribution === undefined) {
            _this.updateCheckedFileTypeContribution(user);
          }

          if (user.checkedFileTypeContribution > 0) {
            totalCount += 1;
            totalLines += user.checkedFileTypeContribution;
          }
        });
      });
      return totalLines / totalCount;
    },
    allGroupsMerged: {
      get: function get() {
        if (this.mergedGroups.length === 0) {
          return false;
        }

        return this.mergedGroups.length === this.filtered.length;
      },
      set: function set(value) {
        var _this2 = this;

        if (value) {
          var mergedGroups = [];
          this.filtered.forEach(function (group) {
            mergedGroups.push(_this2.getGroupName(group));
          });
          this.filtered = [];
          this.$store.commit('updateMergedGroup', mergedGroups);
        } else {
          this.$store.commit('updateMergedGroup', []);
        }
      }
    },
    filterSinceDate: function filterSinceDate() {
      if (this.tmpFilterSinceDate && this.tmpFilterSinceDate >= this.minDate) {
        return this.tmpFilterSinceDate;
      } // If user clears the since date field


      return this.minDate;
    },
    filterUntilDate: function filterUntilDate() {
      if (this.tmpFilterUntilDate && this.tmpFilterUntilDate <= this.maxDate) {
        return this.tmpFilterUntilDate;
      }

      return this.maxDate;
    }
  }, Object(vuex_esm_browser["b" /* mapState */])(['mergedGroups'])),
  watch: {
    filterGroupSelection: function filterGroupSelection() {
      var _this3 = this;

      // Deactivates watcher
      if (!this.filterGroupSelectionWatcherFlag) {
        return;
      }

      var allGroupsMerged = this.allGroupsMerged;
      this.$store.commit('incrementLoadingOverlayCount', 1);
      setTimeout(function () {
        _this3.getFilteredRepos();

        _this3.updateMergedGroup(allGroupsMerged);

        _this3.$store.commit('incrementLoadingOverlayCount', -1);
      });
    },
    '$store.state.summaryDates': function $storeStateSummaryDates() {
      this.hasModifiedSinceDate = true;
      this.hasModifiedUntilDate = true;
      this.tmpFilterSinceDate = this.$store.state.summaryDates.since;
      this.tmpFilterUntilDate = this.$store.state.summaryDates.until;
      window.deactivateAllOverlays();
      this.getFiltered();
    },
    mergedGroups: function mergedGroups() {
      this.getFiltered();
    }
  },
  created: function created() {
    this.renderFilterHash();
    this.processFileTypes();
    this.getFiltered();

    if (this.$store.state.tabZoomInfo.isRefreshing) {
      this.restoreZoomFiltered(this.$store.state.tabZoomInfo);
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    // Delay execution of filterGroupSelection watcher
    // to prevent clearing of merged groups
    setTimeout(function () {
      _this4.filterGroupSelectionWatcherFlag = true;
    }, 0);
  },
  methods: {
    dismissTab: function dismissTab(event) {
      event.target.parentNode.style.display = 'none';
    },
    getFontColor: function getFontColor(color) {
      return window.getFontColor(color);
    },
    // view functions //
    getReportIssueGitHubLink: function getReportIssueGitHubLink(stackTrace) {
      return "".concat(window.BASE_URL, "/reposense/RepoSense/issues/new?title=").concat(this.getReportIssueTitle(), "&body=").concat(this.getReportIssueMessage(stackTrace));
    },
    getReportIssueEmailAddress: function getReportIssueEmailAddress() {
      return 'seer@comp.nus.edu.sg';
    },
    getReportIssueEmailLink: function getReportIssueEmailLink(stackTrace) {
      return "mailto:".concat(this.getReportIssueEmailAddress(), "?subject=").concat(this.getReportIssueTitle(), "&body=").concat(this.getReportIssueMessage(stackTrace));
    },
    getReportIssueTitle: function getReportIssueTitle() {
      return encodeURI('Unexpected error with RepoSense version ') + window.app.repoSenseVersion;
    },
    getReportIssueMessage: function getReportIssueMessage(message) {
      return encodeURI(message);
    },
    // model functions //
    resetFilterSearch: function resetFilterSearch() {
      this.filterSearch = '';
      this.getFiltered();
    },
    updateFilterSearch: function updateFilterSearch(evt) {
      this.filterSearch = evt.target.value;
      this.getFiltered();
    },
    setSummaryHash: function setSummaryHash() {
      var _window = window,
          addHash = _window.addHash,
          encodeHash = _window.encodeHash;
      addHash('search', this.filterSearch);
      addHash('sort', this.sortGroupSelection);
      addHash('sortWithin', this.sortWithinGroupSelection);

      if (this.hasModifiedSinceDate) {
        addHash('since', this.filterSinceDate);
      }

      if (this.hasModifiedUntilDate) {
        addHash('until', this.filterUntilDate);
      }

      addHash('timeframe', this.filterTimeFrame);
      var mergedGroupsHash = this.mergedGroups.join(window.HASH_DELIMITER);

      if (mergedGroupsHash.length === 0) {
        mergedGroupsHash = '';
      }

      addHash('mergegroup', mergedGroupsHash);
      addHash('groupSelect', this.filterGroupSelection);
      addHash('breakdown', this.filterBreakdown);

      if (this.filterBreakdown) {
        var checkedFileTypesHash = this.checkedFileTypes.length > 0 ? this.checkedFileTypes.join(window.HASH_DELIMITER) : '';
        addHash('checkedFileTypes', checkedFileTypesHash);
      } else {
        window.removeHash('checkedFileTypes');
      }

      encodeHash();
    },
    renderFilterHash: function renderFilterHash() {
      var _this5 = this;

      var convertBool = function convertBool(txt) {
        return txt === 'true';
      };

      var hash = window.hashParams;

      if (hash.search) {
        this.filterSearch = hash.search;
      }

      if (hash.sort) {
        this.sortGroupSelection = hash.sort;
      }

      if (hash.sortWithin) {
        this.sortWithinGroupSelection = hash.sortWithin;
      }

      if (hash.timeframe) {
        this.filterTimeFrame = hash.timeframe;
      }

      if (hash.mergegroup) {
        this.$store.commit('updateMergedGroup', hash.mergegroup.split(window.HASH_DELIMITER));
      }

      if (hash.since && dateFormatRegex.test(hash.since)) {
        this.tmpFilterSinceDate = hash.since;
      }

      if (hash.until && dateFormatRegex.test(hash.until)) {
        this.tmpFilterUntilDate = hash.until;
      }

      if (hash.groupSelect) {
        this.filterGroupSelection = hash.groupSelect;
      }

      if (hash.breakdown) {
        this.filterBreakdown = convertBool(hash.breakdown);
      }

      if (hash.checkedFileTypes) {
        var parsedFileTypes = hash.checkedFileTypes.split(window.HASH_DELIMITER);
        this.checkedFileTypes = parsedFileTypes.filter(function (type) {
          return _this5.fileTypes.includes(type);
        });
      }
    },
    getDates: function getDates() {
      if (this.minDate && this.maxDate) {
        return;
      }

      var minDate = window.app.sinceDate;
      var maxDate = window.app.untilDate;

      if (!this.filterSinceDate) {
        this.minDate = minDate;

        if (!this.tmpFilterSinceDate || this.tmpFilterSinceDate < minDate) {
          this.tmpFilterSinceDate = minDate;
        }
      }

      if (!this.filterUntilDate) {
        this.maxDate = maxDate;

        if (!this.tmpFilterUntilDate || this.tmpFilterUntilDate > maxDate) {
          this.tmpFilterUntilDate = maxDate;
        }
      }

      this.$emit('get-dates', [this.minDate, this.maxDate]);
    },
    getGroupName: function getGroupName(group) {
      return window.getGroupName(group, this.filterGroupSelection);
    },
    isMatchSearchedUser: function isMatchSearchedUser(filterSearch, user) {
      return !filterSearch || filterSearch.toLowerCase().split(' ').filter(Boolean).some(function (param) {
        return user.searchPath.includes(param);
      });
    },
    getFiltered: function getFiltered() {
      var _this6 = this;

      this.setSummaryHash();
      this.getDates();
      window.deactivateAllOverlays();
      this.$store.commit('incrementLoadingOverlayCount', 1); // Use setTimeout() to force this.filtered to update only after loading screen is displayed.

      setTimeout(function () {
        _this6.getFilteredRepos();

        _this6.getMergedRepos();

        _this6.$store.commit('incrementLoadingOverlayCount', -1);
      });
    },
    getFilteredRepos: function getFilteredRepos() {
      var _this7 = this;

      // array of array, sorted by repo
      var full = []; // create deep clone of this.repos to not modify the original content of this.repos
      // when merging groups

      var groups = this.hasMergedGroups() ? JSON.parse(JSON.stringify(this.repos)) : this.repos;
      groups.forEach(function (repo) {
        var res = []; // filtering

        repo.users.forEach(function (user) {
          if (_this7.isMatchSearchedUser(_this7.filterSearch, user)) {
            _this7.getUserCommits(user, _this7.filterSinceDate, _this7.filterUntilDate);

            if (_this7.filterTimeFrame === 'week') {
              _this7.splitCommitsWeek(user, _this7.filterSinceDate, _this7.filterUntilDate);
            }

            _this7.updateCheckedFileTypeContribution(user);

            res.push(user);
          }
        });

        if (res.length) {
          full.push(res);
        }
      });
      this.filtered = full;
      this.getOptionWithOrder();
      var filterControl = {
        filterGroupSelection: this.filterGroupSelection,
        sortingOption: this.sortingOption,
        sortingWithinOption: this.sortingWithinOption,
        isSortingDsc: this.isSortingDsc,
        isSortingWithinDsc: this.isSortingWithinDsc
      };
      this.getOptionWithOrder();
      this.filtered = repo_sorter(full, filterControl);
    },
    updateMergedGroup: function updateMergedGroup(allGroupsMerged) {
      var _this8 = this;

      // merge group is not allowed when group by none
      // also reset merged groups
      if (this.filterGroupSelection === 'groupByNone' || !allGroupsMerged) {
        this.$store.commit('updateMergedGroup', []);
      } else {
        var mergedGroups = [];
        this.filtered.forEach(function (group) {
          mergedGroups.push(_this8.getGroupName(group));
        });
        this.$store.commit('updateMergedGroup', mergedGroups);
      }
    },
    getMergedRepos: function getMergedRepos() {
      var _this9 = this;

      this.filtered.forEach(function (group, groupIndex) {
        if (_this9.mergedGroups.includes(_this9.getGroupName(group))) {
          _this9.mergeGroupByIndex(_this9.filtered, groupIndex);
        }
      });
    },
    mergeGroupByIndex: function mergeGroupByIndex(filtered, groupIndex) {
      var _this10 = this;

      var dateToIndexMap = {};
      var dailyIndexMap = {};
      var mergedCommits = [];
      var mergedDailyCommits = [];
      var mergedFileTypeContribution = {};
      var mergedVariance = 0;
      var totalMergedCheckedFileTypeCommits = 0;
      filtered[groupIndex].forEach(function (user) {
        user.commits.forEach(function (commit) {
          _this10.mergeCommits(commit, user, dateToIndexMap, mergedCommits);
        });
        user.dailyCommits.forEach(function (commit) {
          _this10.mergeCommits(commit, user, dailyIndexMap, mergedDailyCommits);
        });

        _this10.mergeFileTypeContribution(user, mergedFileTypeContribution);

        totalMergedCheckedFileTypeCommits += user.checkedFileTypeContribution;
        mergedVariance += user.variance;
      });
      mergedCommits.sort(window.comparator(function (ele) {
        return ele.date;
      }));
      filtered[groupIndex][0].commits = mergedCommits;
      filtered[groupIndex][0].dailyCommits = mergedDailyCommits;
      filtered[groupIndex][0].fileTypeContribution = mergedFileTypeContribution;
      filtered[groupIndex][0].variance = mergedVariance;
      filtered[groupIndex][0].checkedFileTypeContribution = totalMergedCheckedFileTypeCommits; // only take the merged group

      filtered[groupIndex] = filtered[groupIndex].slice(0, 1);
    },
    hasMergedGroups: function hasMergedGroups() {
      return this.mergedGroups.length > 0;
    },
    mergeCommits: function mergeCommits(commit, user, dateToIndexMap, merged) {
      var commitResults = commit.commitResults,
          date = commit.date,
          insertions = commit.insertions,
          deletions = commit.deletions; // bind repoId to each commit

      commitResults.forEach(function (commitResult) {
        commitResult.repoId = user.repoId;
      });

      if (Object.prototype.hasOwnProperty.call(dateToIndexMap, date)) {
        var commitWithSameDate = merged[dateToIndexMap[date]];
        commitResults.forEach(function (commitResult) {
          commitWithSameDate.commitResults.push(commitResult);
        });
        commitWithSameDate.insertions += insertions;
        commitWithSameDate.deletions += deletions;
      } else {
        dateToIndexMap[date] = Object.keys(dateToIndexMap).length;
        merged.push(JSON.parse(JSON.stringify(commit)));
      }
    },
    mergeFileTypeContribution: function mergeFileTypeContribution(user, merged) {
      Object.entries(user.fileTypeContribution).forEach(function (fileType) {
        var key = fileType[0];
        var value = fileType[1];

        if (!Object.prototype.hasOwnProperty.call(merged, key)) {
          merged[key] = 0;
        }

        merged[key] += value;
      });
    },
    processFileTypes: function processFileTypes() {
      var _this11 = this;

      var selectedColors = ['#ffe119', '#4363d8', '#3cb44b', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'];
      var fileTypeColors = {};
      var i = 0;
      this.repos.forEach(function (repo) {
        repo.users.forEach(function (user) {
          Object.keys(user.fileTypeContribution).forEach(function (fileType) {
            if (!Object.prototype.hasOwnProperty.call(fileTypeColors, fileType)) {
              if (i < selectedColors.length) {
                fileTypeColors[fileType] = selectedColors[i];
                i += 1;
              } else {
                fileTypeColors[fileType] = ramp_colour_generator(Object.values(fileTypeColors));
              }
            }

            if (!_this11.fileTypes.includes(fileType)) {
              _this11.fileTypes.push(fileType);
            }
          });
        });
        _this11.fileTypeColors = fileTypeColors;
      });
      this.checkedFileTypes = this.fileTypes.slice();
      this.$store.commit('updateFileTypeColors', this.fileTypeColors);
    },
    splitCommitsWeek: function splitCommitsWeek(user, sinceDate, untilDate) {
      var commits = user.commits;
      var res = [];
      var nextMondayDate = this.dateRounding(sinceDate, 0); // round up for the next monday

      var nextMondayMs = new Date(nextMondayDate).getTime();
      var sinceMs = new Date(sinceDate).getTime();
      var untilMs = new Date(untilDate).getTime();

      if (nextMondayDate <= untilDate) {
        this.pushCommitsWeek(sinceMs, nextMondayMs - 1, res, commits);
        this.pushCommitsWeek(nextMondayMs, untilMs, res, commits);
      } else {
        this.pushCommitsWeek(sinceMs, untilMs, res, commits);
      }

      user.commits = res;
    },
    pushCommitsWeek: function pushCommitsWeek(sinceMs, untilMs, res, commits) {
      var diff = Math.round(Math.abs((untilMs - sinceMs) / window.DAY_IN_MS));
      var weekInMS = window.DAY_IN_MS * 7;

      for (var weekId = 0; weekId < diff / 7; weekId += 1) {
        var startOfWeekMs = sinceMs + weekId * weekInMS;
        var endOfWeekMs = startOfWeekMs + weekInMS - window.DAY_IN_MS;
        var endOfWeekMsWithinUntilMs = endOfWeekMs <= untilMs ? endOfWeekMs : untilMs;
        var week = {
          insertions: 0,
          deletions: 0,
          date: window.getDateStr(startOfWeekMs),
          endDate: window.getDateStr(endOfWeekMsWithinUntilMs),
          commitResults: []
        };
        this.addLineContributionWeek(endOfWeekMsWithinUntilMs, week, commits);

        if (week.commitResults.length > 0) {
          res.push(week);
        }
      }
    },
    addLineContributionWeek: function addLineContributionWeek(endOfWeekMs, week, commits) {
      // commits are not contiguous, meaning there are gaps of days without
      // commits, so we are going to check each commit's date and make sure
      // it is within the duration of a week
      while (commits.length > 0 && new Date(commits[0].date).getTime() <= endOfWeekMs) {
        var commit = commits.shift();
        week.insertions += commit.insertions;
        week.deletions += commit.deletions;
        commit.commitResults.forEach(function (commitResult) {
          return week.commitResults.push(commitResult);
        });
      }
    },
    getUserCommits: function getUserCommits(user, sinceDate, untilDate) {
      var _this12 = this;

      user.commits = [];
      var userFirst = user.dailyCommits[0];
      var userLast = user.dailyCommits[user.dailyCommits.length - 1];

      if (!userFirst) {
        return null;
      }

      if (!sinceDate || sinceDate === 'undefined') {
        sinceDate = userFirst.date;
      }

      if (!untilDate) {
        untilDate = userLast.date;
      }

      user.dailyCommits.forEach(function (commit) {
        var date = commit.date;

        if (date >= sinceDate && date <= untilDate) {
          var filteredCommit = JSON.parse(JSON.stringify(commit));

          _this12.filterCommitByCheckedFileTypes(filteredCommit);

          if (filteredCommit.commitResults.length > 0) {
            user.commits.push(filteredCommit);
          }
        }
      });
      return null;
    },
    filterCommitByCheckedFileTypes: function filterCommitByCheckedFileTypes(commit) {
      var _this13 = this;

      var filteredCommitResults = commit.commitResults.map(function (result) {
        var filteredFileTypes = _this13.getFilteredFileTypes(result);

        _this13.updateCommitResultWithFileTypes(result, filteredFileTypes);

        return result;
      }).filter(function (result) {
        return Object.values(result.fileTypesAndContributionMap).length > 0;
      });
      commit.insertions = filteredCommitResults.reduce(function (acc, result) {
        return acc + result.insertions;
      }, 0);
      commit.deletions = filteredCommitResults.reduce(function (acc, result) {
        return acc + result.deletions;
      }, 0);
      commit.commitResults = filteredCommitResults;
    },
    getFilteredFileTypes: function getFilteredFileTypes(commitResult) {
      return Object.keys(commitResult.fileTypesAndContributionMap).filter(this.isFileTypeChecked).reduce(function (obj, fileType) {
        obj[fileType] = commitResult.fileTypesAndContributionMap[fileType];
        return obj;
      }, {});
    },
    isFileTypeChecked: function isFileTypeChecked(fileType) {
      if (this.filterBreakdown) {
        return this.checkedFileTypes.includes(fileType);
      }

      return true;
    },
    updateCommitResultWithFileTypes: function updateCommitResultWithFileTypes(commitResult, filteredFileTypes) {
      commitResult.insertions = Object.values(filteredFileTypes).reduce(function (acc, fileType) {
        return acc + fileType.insertions;
      }, 0);
      commitResult.deletions = Object.values(filteredFileTypes).reduce(function (acc, fileType) {
        return acc + fileType.deletions;
      }, 0);
      commitResult.fileTypesAndContributionMap = filteredFileTypes;
    },
    getOptionWithOrder: function getOptionWithOrder() {
      var _this$sortGroupSelect = this.sortGroupSelection.split(' ');

      var _this$sortGroupSelect2 = Object(slicedToArray["a" /* default */])(_this$sortGroupSelect, 2);

      this.sortingOption = _this$sortGroupSelect2[0];
      this.isSortingDsc = _this$sortGroupSelect2[1];

      var _this$sortWithinGroup = this.sortWithinGroupSelection.split(' ');

      var _this$sortWithinGroup2 = Object(slicedToArray["a" /* default */])(_this$sortWithinGroup, 2);

      this.sortingWithinOption = _this$sortWithinGroup2[0];
      this.isSortingWithinDsc = _this$sortWithinGroup2[1];
    },
    // updating filters programically //
    resetDateRange: function resetDateRange() {
      this.hasModifiedSinceDate = false;
      this.hasModifiedUntilDate = false;
      this.tmpFilterSinceDate = '';
      this.tmpFilterUntilDate = '';
      window.removeHash('since');
      window.removeHash('until');
      this.getFiltered();
    },
    updateTmpFilterSinceDate: function updateTmpFilterSinceDate(event) {
      var since = event.target.value;
      this.hasModifiedSinceDate = true;

      if (!this.isSafariBrowser) {
        this.tmpFilterSinceDate = since;
        event.target.value = this.filterSinceDate;
      } else if (dateFormatRegex.test(since) && since >= this.minDate) {
        this.tmpFilterSinceDate = since;
        event.currentTarget.style.removeProperty('border-bottom-color');
      } else {
        // invalid since date detected
        event.currentTarget.style.borderBottomColor = 'red';
        return;
      }

      this.getFiltered();
    },
    updateTmpFilterUntilDate: function updateTmpFilterUntilDate(event) {
      var until = event.target.value;
      this.hasModifiedUntilDate = true;

      if (!this.isSafariBrowser) {
        this.tmpFilterUntilDate = until;
        event.target.value = this.filterUntilDate;
      } else if (dateFormatRegex.test(until) && until <= this.maxDate) {
        this.tmpFilterUntilDate = until;
        event.currentTarget.style.removeProperty('border-bottom-color');
      } else {
        // invalid until date detected
        event.currentTarget.style.borderBottomColor = 'red';
        return;
      }

      this.getFiltered();
    },
    updateCheckedFileTypeContribution: function updateCheckedFileTypeContribution(ele) {
      var _this14 = this;

      var validCommits = 0;
      Object.keys(ele.fileTypeContribution).forEach(function (fileType) {
        if (!_this14.filterBreakdown) {
          validCommits += ele.fileTypeContribution[fileType];
        } else if (_this14.checkedFileTypes.includes(fileType)) {
          validCommits += ele.fileTypeContribution[fileType];
        }
      });
      ele.checkedFileTypeContribution = validCommits;
    },
    restoreZoomFiltered: function restoreZoomFiltered(zoomInfo) {
      var _this15 = this;

      var info = Object.assign({}, zoomInfo);
      var zSince = info.zSince,
          zUntil = info.zUntil,
          zTimeFrame = info.zTimeFrame,
          zIsMerge = info.zIsMerge,
          zFilterSearch = info.zFilterSearch;
      var filtered = [];
      var groups = JSON.parse(JSON.stringify(this.repos));
      var res = [];
      groups.forEach(function (repo) {
        repo.users.forEach(function (user) {
          // only filter users that match with zoom user and previous searched user
          if (_this15.matchZoomUser(info, user) && _this15.isMatchSearchedUser(zFilterSearch, user)) {
            _this15.getUserCommits(user, zSince, zUntil);

            if (zTimeFrame === 'week') {
              _this15.splitCommitsWeek(user, zSince, zUntil);
            }

            _this15.updateCheckedFileTypeContribution(user);

            res.push(user);
          }
        });
      });

      if (res.length) {
        filtered.push(res);
      }

      if (zIsMerge) {
        this.mergeGroupByIndex(filtered, 0);
      }

      var _filtered$ = Object(slicedToArray["a" /* default */])(filtered[0], 1);

      info.zUser = _filtered$[0];
      info.zFileTypeColors = this.fileTypeColors;
      info.isRefreshing = false;
      this.$store.commit('updateTabZoomInfo', info);
    },
    matchZoomUser: function matchZoomUser(info, user) {
      var zIsMerge = info.zIsMerge,
          zFilterGroup = info.zFilterGroup,
          zRepo = info.zRepo,
          zAuthor = info.zAuthor;

      if (zIsMerge) {
        return zFilterGroup === 'groupByRepos' ? user.repoName === zRepo : user.name === zAuthor;
      }

      return user.repoName === zRepo && user.name === zAuthor;
    },
    dateRounding: function dateRounding(datestr, roundDown) {
      // rounding up to nearest monday
      var date = new Date(datestr);
      var day = date.getUTCDay();
      var datems = date.getTime();

      if (roundDown) {
        datems -= (day + 6) % 7 * window.DAY_IN_MS;
      } else {
        datems += (8 - day) % 7 * window.DAY_IN_MS;
      }

      return window.getDateStr(datems);
    }
  },
  components: {
    vSummaryCharts: v_summary_charts
  }
});
// CONCATENATED MODULE: ./src/views/v-summary.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/views/v-summary.vue?vue&type=style&index=0&id=52174479&lang=scss
var v_summaryvue_type_style_index_0_id_52174479_lang_scss = __webpack_require__("a08c");

// CONCATENATED MODULE: ./src/views/v-summary.vue





v_summaryvue_type_script_lang_js.render = v_summaryvue_type_template_id_52174479_lang_pug_render

/* harmony default export */ var v_summary = (v_summaryvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/v-authorship.vue?vue&type=template&id=3cebc445&lang=pug


var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_1 = {
  id: "authorship"
};

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", {
  "class": "panel-title"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "Code Panel")], -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_3 = {
  "class": "toolbar--multiline"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_4 = {
  "class": "panel-heading"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_5 = {
  key: 0,
  "class": "author"
};

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_6 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "↳  ", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_7 = {
  "class": "period"
};

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "↳  ", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_9 = {
  "class": "title"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_10 = {
  key: 0,
  "class": "contribution"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_11 = {
  "class": "sorting mui-form--inline"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_12 = {
  "class": "mui-select sort-by"
};

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_13 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "lineOfCode"
}, "LoC", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_14 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "path"
}, "Path", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_15 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "fileName"
}, "File Name", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_16 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: "fileType"
}, "File Type", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_17 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "sort by", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_18 = {
  "class": "mui-select sort-order"
};

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_19 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: true
}, "Descending", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_20 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("option", {
  value: false
}, "Ascending", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_21 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", null, "order", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_22 = {
  "class": "searchbox"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_23 = {
  "class": "mui-form--inline"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_24 = {
  "class": "fileTypes"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_25 = {
  key: 0,
  "class": "checkboxes mui-form--inline"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_26 = {
  style: {
    "background-color": "#000000",
    "color": "#ffffff"
  }
};

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_27 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "All ", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_28 = {
  key: 0,
  "class": "files"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_29 = {
  key: 0,
  "class": "empty"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_30 = {
  "class": "title"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_31 = {
  "class": "tooltip"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_32 = {
  "class": "tooltip-text"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_33 = {
  "class": "tooltip-text"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_34 = {
  "class": "icons"
};
var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_35 = {
  "class": "tooltip"
};

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_36 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view the history view of file", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_37 = {
  "class": "tooltip"
};

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_38 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
  "class": "tooltip-text"
}, "Click to view the blame view of file", -1);

var v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_39 = {
  key: 0,
  "class": "hljs file-content"
};
function v_authorshipvue_type_template_id_3cebc445_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_font_awesome_icon = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("font-awesome-icon");

  var _component_v_segment = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("v-segment");

  return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_1, [v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_2, Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_3, [$options.activeFilesCount < $data.selectedFiles.length ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.expandAll();
    })
  }, "show all file details")) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $options.activeFilesCount > 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("a", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.collapseAll();
    })
  }, "hide all file details")) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_4, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
    "class": "group-name",
    href: $props.info.location,
    target: "_blank",
    title: 'Click to open the repo'
  }, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($props.info.repo), 9, ["href"]), !$props.info.isMergeGroup ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_5, [v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_6, Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($data.authorDisplayName) + " (" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($props.info.author) + ")", 1)])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_7, [v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_8, Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($props.info.minDate) + " to " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($props.info.maxDate) + "   (" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($data.selectedFiles.length) + " files changed)", 1)])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_9, [$data.isLoaded && $data.files.length != 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_10, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_11, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_12, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("select", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.filesSortType = $event;
    })
  }, [v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_13, v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_14, v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_15, v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_16], 512), [[vue_runtime_esm_bundler["C" /* vModelSelect */], $data.filesSortType]]), v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_17]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_18, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.toReverseSortFiles = $event;
    })
  }, [v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_19, v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_20], 512), [[vue_runtime_esm_bundler["C" /* vModelSelect */], $data.toReverseSortFiles]]), v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_21])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_22, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    "class": "radio-button--search",
    type: "radio",
    value: "search",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.filterType = $event;
    }),
    onChange: _cache[6] || (_cache[6] = function ($event) {
      $options.indicateSearchBar();
      $options.updateSearchBarValue();
    })
  }, null, 544), [[vue_runtime_esm_bundler["B" /* vModelRadio */], $data.filterType]]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_23, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    id: "search",
    type: "search",
    placeholder: "Filter by glob",
    ref: "searchBar",
    value: $data.searchBarValue,
    onFocus: _cache[7] || (_cache[7] = function () {
      return $options.indicateSearchBar && $options.indicateSearchBar.apply($options, arguments);
    }),
    onKeyup: _cache[8] || (_cache[8] = Object(vue_runtime_esm_bundler["I" /* withKeys */])(function () {
      return $options.updateSearchBarValue && $options.updateSearchBarValue.apply($options, arguments);
    }, ["enter"]))
  }, null, 40, ["value"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("button", {
    id: "submit-button",
    type: "button",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      $options.indicateSearchBar();
      $options.updateSearchBarValue();
    })
  }, "Filter")])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_24, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    "class": "radio-button--checkbox",
    type: "radio",
    value: "checkboxes",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.filterType = $event;
    }),
    onChange: _cache[11] || (_cache[11] = function () {
      return $options.indicateCheckBoxes && $options.indicateCheckBoxes.apply($options, arguments);
    })
  }, null, 544), [[vue_runtime_esm_bundler["B" /* vModelRadio */], $data.filterType]]), $data.files.length > 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_25, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("label", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_26, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
    "class": "mui-checkbox--fileType",
    id: "all",
    type: "checkbox",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $options.isSelectAllChecked = $event;
    })
  }, null, 512), [[vue_runtime_esm_bundler["A" /* vModelCheckbox */], $options.isSelectAllChecked]]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
    title: $options.getTotalFileBlankLineInfo()
  }, [v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_27, Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.totalLineCount) + " ", 1), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "(" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.totalLineCount - $options.totalBlankLineCount) + ") ", 1)], 8, ["title"])]), (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])(Object.keys($options.fileTypeLinesObj), function (fileType) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("label", {
      key: fileType,
      style: {
        'background-color': _ctx.fileTypeColors[fileType],
        'color': $options.getFontColor(_ctx.fileTypeColors[fileType])
      }
    }, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("input", {
      "class": "mui-checkbox--fileType",
      type: "checkbox",
      id: fileType,
      value: fileType,
      onChange: _cache[13] || (_cache[13] = function () {
        return $options.indicateCheckBoxes && $options.indicateCheckBoxes.apply($options, arguments);
      }),
      "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
        return $data.selectedFileTypes = $event;
      })
    }, null, 40, ["id", "value"]), [[vue_runtime_esm_bundler["A" /* vModelCheckbox */], $data.selectedFileTypes]]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
      title: $options.getFileTypeBlankLineInfo(fileType)
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(fileType) + " " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.fileTypeLinesObj[fileType]) + " ", 1), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, "(" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($options.fileTypeLinesObj[fileType] - $data.fileTypeBlankLinesObj[fileType]) + ") ", 1)], 8, ["title"])], 4);
  }), 128))])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)])])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)]), $data.isLoaded ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_28, [$data.files.length === 0 ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_29, "nothing to see here :(")) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), (Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($data.selectedFiles, function (file, i) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
      key: file.path,
      "class": "file"
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_30, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
      "class": "path",
      onClick: function onClick($event) {
        return $options.toggleFileActiveProperty(file);
      }
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_31, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      icon: "caret-down",
      "fixed-width": ""
    }, null, 512), [[vue_runtime_esm_bundler["E" /* vShow */], file.active]]), Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_32, "Click to hide file details", 512), [[vue_runtime_esm_bundler["E" /* vShow */], file.active]]), Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      icon: "caret-right",
      "fixed-width": ""
    }, null, 512), [[vue_runtime_esm_bundler["E" /* vShow */], !file.active]]), Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_33, "Click to show file details", 512), [[vue_runtime_esm_bundler["E" /* vShow */], !file.active]])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", null, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(i + 1) + ".    " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(file.path) + "  ", 1)], 8, ["onClick"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_34, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
      href: $options.getFileLink(file, 'commits'),
      target: "_blank"
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_35, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      "class": "button",
      icon: "history"
    }), v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_36])], 8, ["href"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
      href: $options.getFileLink(file, 'blame'),
      target: "_blank"
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_37, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
      "class": "button",
      icon: "user-edit"
    }), v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_38])], 8, ["href"])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", {
      "class": "fileTypeLabel",
      style: {
        'background-color': _ctx.fileTypeColors[file.fileType],
        'color': $options.getFontColor(_ctx.fileTypeColors[file.fileType])
      }
    }, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(file.fileType) + " " + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(file.lineCount) + " (" + Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(file.lineCount - file.blankLineCount) + ")", 5)]), file.wasCodeLoaded ? Object(vue_runtime_esm_bundler["H" /* withDirectives */])((Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("pre", v_authorshipvue_type_template_id_3cebc445_lang_pug_hoisted_39, [(Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])(file.segments, function (segment) {
      return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_v_segment, {
        key: segment.lineNumbers[0],
        segment: segment,
        path: file.path
      }, null, 8, ["segment", "path"]);
    }), 128))], 512)), [[vue_runtime_esm_bundler["E" /* vShow */], file.active]]) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)]);
  }), 128))])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)]);
}
// CONCATENATED MODULE: ./src/views/v-authorship.vue?vue&type=template&id=3cebc445&lang=pug

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/v-segment.vue?vue&type=template&id=79b224e3&scoped=true&lang=pug


var v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_withId = /*#__PURE__*/Object(vue_runtime_esm_bundler["K" /* withScopeId */])("data-v-79b224e3");

Object(vue_runtime_esm_bundler["q" /* pushScopeId */])("data-v-79b224e3");

var v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_hoisted_1 = {
  key: 1
};
var v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_hoisted_2 = {
  "class": "line-number"
};
var v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_hoisted_3 = {
  "class": "line-content"
};

Object(vue_runtime_esm_bundler["p" /* popScopeId */])();

var v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_render = /*#__PURE__*/v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_font_awesome_icon = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("font-awesome-icon");

  var _directive_hljs = Object(vue_runtime_esm_bundler["x" /* resolveDirective */])("hljs");

  return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
    "class": ["segment", {
      untouched: !$props.segment.authored,
      active: $data.isOpen
    }]
  }, [$data.canOpen ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
    key: 0,
    "class": "closer",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleCode && $options.toggleCode.apply($options, arguments);
    }),
    ref: "topButton"
  }, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
    "class": "icon",
    icon: "plus-circle",
    title: 'Click to open code'
  }, null, 512), [[vue_runtime_esm_bundler["E" /* vShow */], !$data.isOpen]]), Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
    "class": "icon",
    icon: "chevron-circle-down",
    title: 'Click to hide code'
  }, null, 512), [[vue_runtime_esm_bundler["E" /* vShow */], $data.isOpen]])], 512)) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $data.isOpen ? Object(vue_runtime_esm_bundler["H" /* withDirectives */])((Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_hoisted_1, [(Object(vue_runtime_esm_bundler["o" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["u" /* renderList */])($props.segment.lines, function (line, index) {
    return Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
      "class": "code",
      key: index
    }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_hoisted_2, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])($props.segment.lineNumbers[index] + "\n"), 1), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_hoisted_3, Object(vue_runtime_esm_bundler["z" /* toDisplayString */])(line + "\n"), 1)]);
  }), 128))], 512)), [[_directive_hljs, $props.path]]) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true), $data.canOpen ? (Object(vue_runtime_esm_bundler["o" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
    key: 2,
    "class": "closer bottom",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.toggleCode && $options.toggleCode.apply($options, arguments);
    })
  }, [Object(vue_runtime_esm_bundler["H" /* withDirectives */])(Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_font_awesome_icon, {
    "class": "icon",
    icon: "chevron-circle-up",
    title: 'Click to hide code'
  }, null, 512), [[vue_runtime_esm_bundler["E" /* vShow */], $data.isOpen]])])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)], 2);
});
// CONCATENATED MODULE: ./src/components/v-segment.vue?vue&type=template&id=79b224e3&scoped=true&lang=pug

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/v-segment.vue?vue&type=script&lang=js
/* harmony default export */ var v_segmentvue_type_script_lang_js = ({
  name: 'v-segment',
  props: ['segment', 'path'],
  data: function data() {
    return {
      isOpen: this.segment.authored || this.segment.lines.length < 5,
      canOpen: !this.segment.authored && this.segment.lines.length > 4
    };
  },
  methods: {
    toggleCode: function toggleCode() {
      this.isOpen = !this.isOpen;
    }
  }
});
// CONCATENATED MODULE: ./src/components/v-segment.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/v-segment.vue?vue&type=style&index=0&id=79b224e3&lang=scss&scoped=true
var v_segmentvue_type_style_index_0_id_79b224e3_lang_scss_scoped_true = __webpack_require__("4a7d");

// CONCATENATED MODULE: ./src/components/v-segment.vue





v_segmentvue_type_script_lang_js.render = v_segmentvue_type_template_id_79b224e3_scoped_true_lang_pug_render
v_segmentvue_type_script_lang_js.__scopeId = "data-v-79b224e3"

/* harmony default export */ var v_segment = (v_segmentvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/v-authorship.vue?vue&type=script&lang=js






















var filesSortDict = {
  lineOfCode: function lineOfCode(file) {
    return file.lineCount;
  },
  path: function path(file) {
    return file.path;
  },
  fileName: function fileName(file) {
    return file.path.split(/[/]+/).pop();
  },
  fileType: function fileType(file) {
    return file.fileType;
  }
};
var repoCache = [];

var minimatch = __webpack_require__("d8b2");

/* harmony default export */ var v_authorshipvue_type_script_lang_js = ({
  name: 'v-authorship',
  props: ['info'],
  data: function data() {
    return {
      authorDisplayName: '',
      isLoaded: false,
      files: [],
      selectedFiles: [],
      filterType: 'checkboxes',
      selectedFileTypes: [],
      fileTypes: [],
      filesLinesObj: {},
      fileTypeBlankLinesObj: {},
      filesSortType: 'lineOfCode',
      toReverseSortFiles: true,
      searchBarValue: ''
    };
  },
  watch: {
    filesSortType: function filesSortType() {
      window.addHash('authorshipSortBy', this.filesSortType);
      window.encodeHash();
      this.updateSelectedFiles();
    },
    searchBarValue: function searchBarValue() {
      this.updateSelectedFiles();
    },
    selectedFileTypes: function selectedFileTypes() {
      this.updateSelectedFiles();
    },
    toReverseSortFiles: function toReverseSortFiles() {
      window.addHash('reverseAuthorshipOrder', this.toReverseSortFiles);
      window.encodeHash();
      this.updateSelectedFiles();
    },
    isLoaded: function isLoaded() {
      if (this.isLoaded) {
        this.retrieveHashes();
        this.setInfoHash();
      }
    }
  },
  methods: {
    retrieveHashes: function retrieveHashes() {
      var _this = this;

      var hash = window.hashParams;

      switch (hash.authorshipSortBy) {
        case 'path':
        case 'fileName':
        case 'fileType':
          this.filesSortType = hash.authorshipSortBy;
          break;

        default: // Invalid value, use the default value of 'lineOfCode'

      }

      this.toReverseSortFiles = hash.reverseAuthorshipOrder !== 'false';
      this.selectedFileTypes = this.info.checkedFileTypes ? this.info.checkedFileTypes.filter(function (fileType) {
        return _this.fileTypes.includes(fileType);
      }) : [];

      if (hash.authorshipFileTypes) {
        this.selectedFileTypes = hash.authorshipFileTypes.split(window.HASH_DELIMITER).filter(function (fileType) {
          return _this.fileTypes.includes(fileType);
        });
      }

      if ('authorshipFilesGlob' in hash) {
        this.indicateSearchBar();
        this.searchBarValue = hash.authorshipFilesGlob;
      }
    },
    setInfoHash: function setInfoHash() {
      var _window = window,
          addHash = _window.addHash; // We only set these hashes as they are propagated from summary_charts

      addHash('tabAuthor', this.info.author);
      addHash('tabRepo', this.info.repo);
      addHash('authorshipIsMergeGroup', this.info.isMergeGroup);
      this.updateFileTypeHash();
    },
    removeAuthorshipHashes: function removeAuthorshipHashes() {
      window.removeHash('authorshipFileTypes');
      window.removeHash('authorshipFilesGlob');
      window.removeHash('authorshipSortBy');
      window.removeHash('reverseAuthorshipOrder');
      window.removeHash('tabAuthor');
      window.removeHash('tabRepo');
      window.removeHash('authorshipIsMergeGroup');
      window.encodeHash();
    },
    initiate: function initiate() {
      var _this2 = this;

      var repo = window.REPOS[this.info.repo];
      this.getRepoProps(repo);

      if (!repo || !this.info.author) {
        window.app.isTabActive = false;
        return;
      }

      if (repoCache.length === 2) {
        var toRemove = repoCache.shift();

        if (toRemove !== this.info.repo) {
          delete window.REPOS[toRemove].files;
        }
      }

      repoCache.push(this.info.repo);

      if (repo.files) {
        this.processFiles(repo.files);
      } else {
        window.api.loadAuthorship(this.info.repo).then(function (files) {
          return _this2.processFiles(files);
        });
      }
    },
    getFontColor: function getFontColor(color) {
      return window.getFontColor(color);
    },
    getRepoProps: function getRepoProps(repo) {
      var _this3 = this;

      if (repo) {
        if (this.info.isMergeGroup) {
          // sum of all users' file type contribution
          repo.users.forEach(function (author) {
            _this3.updateTotalFileTypeContribution(author.fileTypeContribution);
          });
        } else {
          var author = repo.users.find(function (user) {
            return user.name === _this3.info.author;
          });

          if (author) {
            this.authorDisplayName = author.displayName;
            this.filesLinesObj = author.fileTypeContribution;
          }
        }
      }
    },
    updateTotalFileTypeContribution: function updateTotalFileTypeContribution(fileTypeContribution) {
      var _this4 = this;

      Object.entries(fileTypeContribution).forEach(function (_ref) {
        var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
            type = _ref2[0],
            cnt = _ref2[1];

        if (_this4.filesLinesObj[type]) {
          _this4.filesLinesObj[type] += cnt;
        } else {
          _this4.filesLinesObj[type] = cnt;
        }
      });
    },
    expandAll: function expandAll() {
      this.selectedFiles.forEach(function (file) {
        file.active = true;
        file.wasCodeLoaded = true;
      });
    },
    collapseAll: function collapseAll() {
      this.selectedFiles.forEach(function (file) {
        file.active = false;
      });
    },
    toggleFileActiveProperty: function toggleFileActiveProperty(file) {
      file.active = !file.active;
      file.wasCodeLoaded = file.wasCodeLoaded || file.active;
    },
    isUnknownAuthor: function isUnknownAuthor(name) {
      return name === '-';
    },
    hasCommits: function hasCommits(info) {
      var _this5 = this;

      var isMergeGroup = info.isMergeGroup,
          author = info.author;
      var repo = window.REPOS[info.repo];

      if (repo) {
        return isMergeGroup ? Object.entries(repo.commits.authorFinalContributionMap).some(function (_ref3) {
          var _ref4 = Object(slicedToArray["a" /* default */])(_ref3, 2),
              name = _ref4[0],
              cnt = _ref4[1];

          return !_this5.isUnknownAuthor(name) && cnt > 0;
        }) : repo.commits.authorFinalContributionMap[author] > 0;
      }

      return false;
    },
    splitSegments: function splitSegments(lines) {
      var _this6 = this;

      // split into segments separated by authored
      var lastState;
      var lastId = -1;
      var segments = [];
      var blankLineCount = 0;
      lines.forEach(function (line, lineCount) {
        var isAuthorMatched = _this6.info.isMergeGroup ? !_this6.isUnknownAuthor(line.author.gitId) : line.author.gitId === _this6.info.author;
        var authored = line.author && isAuthorMatched;

        if (authored !== lastState || lastId === -1) {
          segments.push({
            authored: authored,
            lines: [],
            lineNumbers: []
          });
          lastId += 1;
          lastState = authored;
        }

        var content = line.content || ' ';
        segments[lastId].lines.push(content);
        segments[lastId].lineNumbers.push(lineCount + 1);

        if (line.content === '' && authored) {
          blankLineCount += 1;
        }
      });
      return {
        segments: segments,
        blankLineCount: blankLineCount
      };
    },
    processFiles: function processFiles(files) {
      var _this7 = this;

      var COLLAPSED_VIEW_LINE_COUNT_THRESHOLD = 2000;
      var res = [];
      var fileTypeBlanksInfoObj = {};
      files.forEach(function (file) {
        var contributionMap = file.authorContributionMap;
        var lineCnt = _this7.info.isMergeGroup ? _this7.getContributionFromAllAuthors(contributionMap) : contributionMap[_this7.info.author];

        if (lineCnt) {
          var out = {};
          out.path = file.path;
          out.lineCount = lineCnt;
          out.active = lineCnt <= COLLAPSED_VIEW_LINE_COUNT_THRESHOLD;
          out.wasCodeLoaded = lineCnt <= COLLAPSED_VIEW_LINE_COUNT_THRESHOLD;
          out.fileType = file.fileType;

          var segmentInfo = _this7.splitSegments(file.lines);

          out.segments = segmentInfo.segments;
          out.blankLineCount = segmentInfo.blankLineCount;

          _this7.addBlankLineCount(file.fileType, segmentInfo.blankLineCount, fileTypeBlanksInfoObj);

          res.push(out);
        }
      });
      res.sort(function (a, b) {
        return b.lineCount - a.lineCount;
      });
      Object.keys(this.filesLinesObj).forEach(function (file) {
        if (_this7.filesLinesObj[file] !== 0) {
          _this7.fileTypes.push(file);
        }
      });
      this.fileTypeBlankLinesObj = fileTypeBlanksInfoObj;
      this.files = res;
      this.isLoaded = true;
      this.updateSelectedFiles();
    },
    getContributionFromAllAuthors: function getContributionFromAllAuthors(contributionMap) {
      var _this8 = this;

      return Object.entries(contributionMap).reduce(function (acc, _ref5) {
        var _ref6 = Object(slicedToArray["a" /* default */])(_ref5, 2),
            author = _ref6[0],
            cnt = _ref6[1];

        return !_this8.isUnknownAuthor(author) ? acc + cnt : acc;
      }, 0);
    },
    addBlankLineCount: function addBlankLineCount(fileType, lineCount, filesInfoObj) {
      if (!filesInfoObj[fileType]) {
        filesInfoObj[fileType] = 0;
      }

      filesInfoObj[fileType] += lineCount;
    },
    updateSearchBarValue: function updateSearchBarValue() {
      this.searchBarValue = this.$refs.searchBar.value;
      window.addHash('authorshipFilesGlob', this.searchBarValue);
      window.removeHash('authorshipFileTypes');
      window.encodeHash();
    },
    updateFileTypeHash: function updateFileTypeHash() {
      var fileTypeHash = this.selectedFileTypes.length > 0 ? this.selectedFileTypes.reduce(function (a, b) {
        return "".concat(a, "~").concat(b);
      }) : '';
      window.addHash('authorshipFileTypes', fileTypeHash);
      window.removeHash('authorshipFilesGlob');
      window.encodeHash();
    },
    updateSelectedFiles: function updateSelectedFiles() {
      var _this9 = this;

      this.$store.commit('incrementLoadingOverlayCount', 1);
      setTimeout(function () {
        _this9.selectedFiles = _this9.files.filter(function (file) {
          return _this9.selectedFileTypes.includes(file.fileType) && minimatch(file.path, _this9.searchBarValue || '*', {
            matchBase: true,
            dot: true
          });
        }).sort(_this9.sortingFunction);

        _this9.$store.commit('incrementLoadingOverlayCount', -1);
      });
    },
    indicateSearchBar: function indicateSearchBar() {
      this.selectedFileTypes = this.fileTypes.slice();
      this.filterType = 'search';
    },
    indicateCheckBoxes: function indicateCheckBoxes() {
      this.searchBarValue = '';
      this.filterType = 'checkboxes';
      this.updateFileTypeHash();
    },
    getFileLink: function getFileLink(file, path) {
      var repo = window.REPOS[this.info.repo];
      return "".concat(window.BASE_URL, "/").concat(repo.location.organization, "/").concat(repo.location.repoName, "/").concat(path, "/").concat(repo.branch, "/").concat(file.path);
    },
    getFileTypeBlankLineInfo: function getFileTypeBlankLineInfo(fileType) {
      return "".concat(fileType, ": Blank: ").concat(this.fileTypeBlankLinesObj[fileType], ", Non-Blank: ").concat(this.filesLinesObj[fileType] - this.fileTypeBlankLinesObj[fileType]);
    },
    getTotalFileBlankLineInfo: function getTotalFileBlankLineInfo() {
      return "Total: Blank: ".concat(this.totalBlankLineCount, ", Non-Blank: ").concat(this.totalLineCount - this.totalBlankLineCount);
    }
  },
  computed: Object(objectSpread2["a" /* default */])({
    sortingFunction: function sortingFunction() {
      var _this10 = this;

      return function (a, b) {
        return (_this10.toReverseSortFiles ? -1 : 1) * window.comparator(filesSortDict[_this10.filesSortType])(a, b);
      };
    },
    isSelectAllChecked: {
      get: function get() {
        return this.selectedFileTypes.length === this.fileTypes.length;
      },
      set: function set(value) {
        if (value) {
          this.selectedFileTypes = this.fileTypes.slice();
        } else {
          this.selectedFileTypes = [];
        }

        this.indicateCheckBoxes();
      }
    },
    activeFilesCount: function activeFilesCount() {
      return this.selectedFiles.filter(function (file) {
        return file.active;
      }).length;
    },
    totalLineCount: function totalLineCount() {
      return Object.values(this.fileTypeLinesObj).reduce(function (acc, val) {
        return acc + val;
      }, 0);
    },
    totalBlankLineCount: function totalBlankLineCount() {
      return Object.values(this.fileTypeBlankLinesObj).reduce(function (acc, val) {
        return acc + val;
      }, 0);
    },
    fileTypeLinesObj: function fileTypeLinesObj() {
      var numLinesModified = {};
      Object.entries(this.filesLinesObj).filter(function (_ref7) {
        var _ref8 = Object(slicedToArray["a" /* default */])(_ref7, 2),
            value = _ref8[1];

        return value > 0;
      }).forEach(function (_ref9) {
        var _ref10 = Object(slicedToArray["a" /* default */])(_ref9, 2),
            langType = _ref10[0],
            value = _ref10[1];

        numLinesModified[langType] = value;
      });
      return numLinesModified;
    }
  }, Object(vuex_esm_browser["b" /* mapState */])(['fileTypeColors'])),
  created: function created() {
    this.initiate();
  },
  beforeUnmount: function beforeUnmount() {
    this.removeAuthorshipHashes();
  },
  components: {
    vSegment: v_segment
  }
});
// CONCATENATED MODULE: ./src/views/v-authorship.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/views/v-authorship.vue?vue&type=style&index=0&id=3cebc445&lang=scss
var v_authorshipvue_type_style_index_0_id_3cebc445_lang_scss = __webpack_require__("6b41");

// CONCATENATED MODULE: ./src/views/v-authorship.vue





v_authorshipvue_type_script_lang_js.render = v_authorshipvue_type_template_id_3cebc445_lang_pug_render

/* harmony default export */ var v_authorship = (v_authorshipvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/app.vue?vue&type=script&lang=js






















var loadingResourcesMessage = 'Loading resources...';
/* harmony default export */ var appvue_type_script_lang_js = ({
  el: '#app',
  data: function data() {
    return {
      repos: {},
      users: [],
      userUpdated: false,
      isLoadingOverlayEnabled: false,
      loadingOverlayOpacity: 1,
      isCollapsed: false,
      isTabActive: true,
      // to force tab wrapper to load
      tabType: 'empty',
      tabInfo: {},
      creationDate: '',
      errorMessages: window.appErrorMessages,
      reportGenerationTime: window.appReportGenerationTime
    };
  },
  watch: {
    '$store.state.tabZoomInfo': function $storeStateTabZoomInfo() {
      if (this.$store.state.tabZoomInfo.isRefreshing) {
        return;
      }

      this.tabInfo.tabZoom = Object.assign({}, this.$store.state.tabZoomInfo);
      this.activateTab('zoom');
    },
    '$store.state.tabAuthorshipInfo': function $storeStateTabAuthorshipInfo() {
      this.tabInfo.tabAuthorship = Object.assign({}, this.$store.state.tabAuthorshipInfo);
      this.activateTab('authorship');
    },
    '$store.state.loadingOverlayCount': function $storeStateLoadingOverlayCount() {
      this.isLoadingOverlayEnabled = this.$store.state.loadingOverlayCount > 0;
    }
  },
  methods: {
    // model functions //
    updateReportZip: function updateReportZip(evt) {
      var _this = this;

      this.users = [];
      jszip_min_default.a.loadAsync(evt.target.files[0]).then(function (zip) {
        window.REPORT_ZIP = zip;
      }, function () {
        window.alert('Either the .zip file is corrupted, or you uploaded a .zip file that is not generated ' + 'by RepoSense.');
      }).then(function () {
        return _this.updateReportView();
      });
    },
    updateReportDir: function updateReportDir() {
      window.REPORT_ZIP = null;
      this.users = [];
      this.updateReportView();
    },
    updateReportView: function updateReportView() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var names;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.$store.commit('updateLoadingOverlayMessage', loadingResourcesMessage);

                _this2.$store.commit('incrementLoadingOverlayCount', 1);

                _this2.userUpdated = false;
                _context.prev = 3;
                _context.next = 6;
                return window.api.loadSummary();

              case 6:
                names = _context.sent;

                if (!(names === null)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                _this2.repos = window.REPOS;
                _context.next = 12;
                return Promise.all(names.map(function (name) {
                  return window.api.loadCommits(name);
                }));

              case 12:
                _this2.loadingOverlayOpacity = 0.5;

                _this2.getUsers();

                _this2.renderTabHash();

                _this2.userUpdated = true;
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](3);
                throw _context.t0;

              case 21:
                _context.prev = 21;

                _this2.$store.commit('incrementLoadingOverlayCount', -1);

                return _context.finish(21);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 18, 21, 24]]);
      }))();
    },
    getUsers: function getUsers() {
      var _this3 = this;

      var full = [];
      Object.keys(this.repos).forEach(function (repo) {
        if (_this3.repos[repo].users) {
          full.push(_this3.repos[repo]);
        }
      });
      this.users = full;
    },
    // handle opening of sidebar //
    activateTab: function activateTab(tabName) {
      // changing isTabActive to trigger redrawing of component
      this.isTabActive = false;

      if (this.$refs.tabWrapper) {
        this.$refs.tabWrapper.scrollTop = 0;
      }

      this.isTabActive = true;
      this.isCollapsed = false;
      this.tabType = tabName;
      window.addHash('tabOpen', this.isTabActive);
      window.addHash('tabType', this.tabType);
      window.encodeHash();
    },
    deactivateTab: function deactivateTab() {
      this.isTabActive = false;
      window.addHash('tabOpen', this.isTabActive);
      window.removeHash('tabType');
      window.encodeHash();
    },
    renderAuthorShipTabHash: function renderAuthorShipTabHash(minDate, maxDate) {
      var hash = window.hashParams;
      var info = {
        author: hash.tabAuthor,
        repo: hash.tabRepo,
        isMergeGroup: hash.authorshipIsMergeGroup === 'true',
        minDate: minDate,
        maxDate: maxDate
      };
      var tabInfoLength = Object.values(info).filter(function (x) {
        return x !== null;
      }).length;

      if (Object.keys(info).length === tabInfoLength) {
        this.$store.commit('updateTabAuthorshipInfo', info);
      } else if (hash.tabOpen === 'false' || tabInfoLength > 2) {
        window.app.isTabActive = false;
      }
    },
    renderZoomTabHash: function renderZoomTabHash() {
      var hash = window.hashParams;
      var zoomInfo = {
        isRefreshing: true,
        zAuthor: hash.zA,
        zRepo: hash.zR,
        zAvgCommitSize: hash.zACS,
        zSince: hash.zS,
        zUntil: hash.zU,
        zFilterGroup: hash.zFGS,
        zFilterSearch: hash.zFS,
        zTimeFrame: hash.zFTF,
        zIsMerge: hash.zMG === 'true',
        zFromRamp: hash.zFR === 'true'
      };
      var tabInfoLength = Object.values(zoomInfo).filter(function (x) {
        return x !== null;
      }).length;

      if (Object.keys(zoomInfo).length === tabInfoLength) {
        this.$store.commit('updateTabZoomInfo', zoomInfo);
      } else if (hash.tabOpen === 'false' || tabInfoLength > 2) {
        window.app.isTabActive = false;
      }
    },
    renderTabHash: function renderTabHash() {
      var hash = window.hashParams;

      if (!hash.tabOpen) {
        return;
      }

      this.isTabActive = hash.tabOpen === 'true';

      if (this.isTabActive) {
        if (hash.tabType === 'authorship') {
          var since = hash.since,
              until = hash.until; // get since and until dates from window.app if not found in hash

          since = since || window.app.sinceDate;
          until = until || window.app.untilDate;
          this.renderAuthorShipTabHash(since, until);
        } else {
          this.renderZoomTabHash();
        }
      }
    },
    generateKey: function generateKey(dataObj, keysToUse) {
      var picked = keysToUse.map(function (key) {
        return dataObj[key];
      });
      return JSON.stringify(picked);
    },
    getRepoSenseHomeLink: function getRepoSenseHomeLink() {
      var version = window.app.repoSenseVersion;

      if (!version) {
        return "".concat(window.HOME_PAGE_URL, "/RepoSense/");
      }

      return "".concat(window.HOME_PAGE_URL);
    },
    getSpecificCommitLink: function getSpecificCommitLink() {
      var version = window.app.repoSenseVersion;

      if (!version) {
        return "".concat(window.BASE_URL, "/reposense/RepoSense");
      }

      if (version.startsWith('v')) {
        return "".concat(window.BASE_URL, "/reposense/RepoSense/releases/tag/").concat(version);
      }

      return "".concat(window.BASE_URL, "/reposense/RepoSense/commit/").concat(version);
    },
    getUserGuideLink: function getUserGuideLink() {
      var version = window.app.repoSenseVersion;

      if (!version) {
        return "".concat(window.HOME_PAGE_URL, "/RepoSense/ug/index.html");
      }

      return "".concat(window.HOME_PAGE_URL, "/ug/index.html");
    },
    getUsingReportsUserGuideLink: function getUsingReportsUserGuideLink() {
      var version = window.app.repoSenseVersion;

      if (!version) {
        return "".concat(window.HOME_PAGE_URL, "/RepoSense/ug/usingReports.html");
      }

      return "".concat(window.HOME_PAGE_URL, "/ug/usingReports.html");
    },
    receiveDates: function receiveDates(dates) {
      var _dates = Object(slicedToArray["a" /* default */])(dates, 2),
          minDate = _dates[0],
          maxDate = _dates[1];

      if (this.tabType === 'authorship') {
        this.renderAuthorShipTabHash(minDate, maxDate);
      }
    }
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["b" /* mapState */])(['loadingOverlayMessage'])),
  components: {
    LoadingOverlay: dist["a" /* default */],
    vResizer: v_resizer,
    vZoom: v_zoom,
    vSummary: v_summary,
    vAuthorship: v_authorship
  },
  created: function created() {
    window.decodeHash();
    this.updateReportDir();
  }
});
// CONCATENATED MODULE: ./src/app.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/app.vue?vue&type=style&index=0&id=2a4e5306&lang=scss
var appvue_type_style_index_0_id_2a4e5306_lang_scss = __webpack_require__("bb2a");

// CONCATENATED MODULE: ./src/app.vue





appvue_type_script_lang_js.render = render

/* harmony default export */ var app = (appvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/store/store.js

var store = Object(vuex_esm_browser["a" /* createStore */])({
  state: {
    tabAuthorshipInfo: {},
    tabZoomInfo: {},
    summaryDates: {},
    mergedGroups: [],
    fileTypeColors: {},
    loadingOverlayCount: 0,
    loadingOverlayMessage: ''
  },
  mutations: {
    updateTabZoomInfo: function updateTabZoomInfo(state, info) {
      state.tabZoomInfo = info;
    },
    updateTabAuthorshipInfo: function updateTabAuthorshipInfo(state, info) {
      state.tabAuthorshipInfo = info;
    },
    updateSummaryDates: function updateSummaryDates(state, info) {
      state.summaryDates = info;
    },
    updateFileTypeColors: function updateFileTypeColors(state, info) {
      state.fileTypeColors = info;
    },
    updateMergedGroup: function updateMergedGroup(state, info) {
      state.mergedGroups = info;
    },
    incrementLoadingOverlayCount: function incrementLoadingOverlayCount(state, increment) {
      state.loadingOverlayCount += increment;

      if (state.loadingOverlayCount === 0) {
        state.loadingOverlayMessage = 'Loading. Please wait...';
      }
    },
    updateLoadingOverlayMessage: function updateLoadingOverlayMessage(state, message) {
      state.loadingOverlayMessage = message;
    }
  }
});
/* harmony default export */ var store_store = (store);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-iso-string.js
var es_date_to_iso_string = __webpack_require__("accc");

// CONCATENATED MODULE: ./src/utils/api.js

























// utility functions //
window.$ = function (id) {
  return document.getElementById(id);
};

window.enquery = function (key, val) {
  return "".concat(key, "=").concat(encodeURIComponent(val));
};

window.BASE_URL = 'https://github.com';
window.HOME_PAGE_URL = 'https://reposense.org';
window.DAY_IN_MS = 1000 * 60 * 60 * 24;
window.HASH_DELIMITER = '~';
window.REPOS = {};
window.hashParams = {};
window.isMacintosh = navigator.platform.includes('Mac');
window.appErrorMessages = {};
window.appReportGenerationTime = '';
window.REPORT_ZIP = null;
var HASH_ANCHOR = '?';
var REPORT_DIR = '.';

window.deactivateAllOverlays = function deactivateAllOverlays() {
  document.querySelectorAll('.summary-chart__ramp .overlay').forEach(function (x) {
    x.className = 'overlay';
  });
};

window.getDateStr = function getDateStr(date) {
  return new Date(date).toISOString().split('T')[0];
};

window.getHexToRGB = function getHexToRGB(color) {
  // to convert color from hex code to rgb format
  var arr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  return arr.slice(1).map(function (val) {
    return parseInt(val, 16);
  });
};

window.getFontColor = function getFontColor(color) {
  var result = window.getHexToRGB(color);
  var red = result[0];
  var green = result[1];
  var blue = result[2];
  var luminosity = 0.2126 * red + 0.7152 * green + 0.0722 * blue; // per ITU-R BT.709

  return luminosity < 120 ? '#ffffff' : '#000000';
};

window.addHash = function addHash(newKey, newVal) {
  window.hashParams[newKey] = newVal;
};

window.removeHash = function removeHash(key) {
  delete window.hashParams[key];
};

window.encodeHash = function encodeHash() {
  var _window = window,
      hashParams = _window.hashParams;
  var hash = Object.keys(hashParams).map(function (key) {
    return "".concat(key, "=").concat(encodeURIComponent(hashParams[key]));
  }).join('&');
  var newUrl = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname).concat(HASH_ANCHOR).concat(hash);
  window.history.replaceState(null, '', newUrl);
};

window.decodeHash = function decodeHash() {
  var _this = this;

  var hashParams = {};
  var hashIndex = window.location.href.indexOf(HASH_ANCHOR);
  var parameterString = hashIndex === -1 ? '' : window.location.href.slice(hashIndex + 1);
  parameterString.split('&').forEach(function (param) {
    var _param$split = param.split('='),
        _param$split2 = Object(slicedToArray["a" /* default */])(_param$split, 2),
        key = _param$split2[0],
        val = _param$split2[1];

    if (key) {
      try {
        hashParams[key] = decodeURIComponent(val);
      } catch (error) {
        _this.userUpdated = false;
        _this.isLoading = false;
      }
    }
  });
  window.hashParams = hashParams;
};

window.comparator = function (fn) {
  var sortingOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function compare(a, b) {
    var a1;
    var b1;

    if (sortingOption) {
      a1 = fn(a, sortingOption).toLowerCase ? fn(a, sortingOption).toLowerCase() : fn(a, sortingOption);
      b1 = fn(b, sortingOption).toLowerCase ? fn(b, sortingOption).toLowerCase() : fn(b, sortingOption);
    } else {
      a1 = fn(a).toLowerCase ? fn(a).toLowerCase() : fn(a);
      b1 = fn(b).toLowerCase ? fn(b).toLowerCase() : fn(b);
    }

    if (a1 === b1) {
      return 0;
    }

    if (a1 < b1) {
      return -1;
    }

    return 1;
  };
};

window.toggleNext = function toggleNext(ele) {
  // function for toggling unopened code
  var targetClass = 'active';
  var parent = ele.parentNode;
  var classes = parent.className.split(' ');
  var idx = classes.indexOf(targetClass);

  if (idx === -1) {
    classes.push(targetClass);
  } else {
    classes.splice(idx, 1);
  }

  parent.className = classes.join(' ');
};

window.getBaseLink = function getBaseLink(repoId) {
  return "".concat(window.BASE_URL, "/").concat(window.REPOS[repoId].location.organization, "/").concat(window.REPOS[repoId].location.repoName);
};

window.getGroupName = function getGroupName(group, filterGroupSelection) {
  switch (filterGroupSelection) {
    case 'groupByRepos':
      return group[0].repoName;

    case 'groupByAuthors':
      return group[0].name;

    default:
      return '';
  }
};

window.api = {
  loadJSON: function loadJSON(fname) {
    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var zipObject, response, json;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!window.REPORT_ZIP) {
                _context.next = 17;
                break;
              }

              zipObject = window.REPORT_ZIP.file(fname);

              if (!zipObject) {
                _context.next = 16;
                break;
              }

              _context.prev = 3;
              _context.t0 = JSON;
              _context.next = 7;
              return zipObject.async('text');

            case 7:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.parse.call(_context.t0, _context.t1));

            case 11:
              _context.prev = 11;
              _context.t2 = _context["catch"](3);
              throw new Error('Uploaded JSON is invalid.');

            case 14:
              _context.next = 17;
              break;

            case 16:
              throw new Error('Uploaded zip file is invalid.');

            case 17:
              _context.prev = 17;
              _context.next = 20;
              return fetch("".concat(REPORT_DIR, "/").concat(fname));

            case 20:
              response = _context.sent;
              _context.next = 23;
              return response.json();

            case 23:
              json = _context.sent;
              return _context.abrupt("return", json);

            case 27:
              _context.prev = 27;
              _context.t3 = _context["catch"](17);
              throw new Error("Unable to read ".concat(fname, "."));

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11], [17, 27]]);
    }))();
  },
  loadSummary: function loadSummary() {
    var _this2 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var data, names;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              window.REPOS = {};
              data = {};
              _context2.prev = 2;
              _context2.next = 5;
              return _this2.loadJSON('summary.json');

            case 5:
              data = _context2.sent;
              _context2.next = 13;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);

              if (!(_context2.t0.message === 'Unable to read summary.json.')) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", null);

            case 12:
              throw _context2.t0;

            case 13:
              window.app.creationDate = data.reportGeneratedTime;
              window.app.sinceDate = data.sinceDate;
              window.app.untilDate = data.untilDate;
              window.app.repoSenseVersion = data.repoSenseVersion;
              window.app.reportGenerationTime = data.reportGenerationTime;
              window.app.isSinceDateProvided = data.isSinceDateProvided;
              window.app.isUntilDateProvided = data.isUntilDateProvided;
              Object.entries(data.errorList).forEach(function (_ref) {
                var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
                    repoName = _ref2[0],
                    message = _ref2[1];

                window.appErrorMessages[repoName] = message;
              });
              names = [];
              data.repos.forEach(function (repo) {
                var repoName = "".concat(repo.displayName);
                window.REPOS[repoName] = repo;
                names.push(repoName);
              });
              return _context2.abrupt("return", names);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 8]]);
    }))();
  },
  loadCommits: function loadCommits(repoName) {
    var _this3 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var folderName, commits, res, repo;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              folderName = window.REPOS[repoName].outputFolderName;
              _context3.next = 3;
              return _this3.loadJSON("".concat(folderName, "/commits.json"));

            case 3:
              commits = _context3.sent;
              res = [];
              repo = window.REPOS[repoName];
              Object.keys(commits.authorDisplayNameMap).forEach(function (author) {
                if (author) {
                  var obj = {
                    name: author,
                    repoId: repoName,
                    variance: commits.authorContributionVariance[author],
                    displayName: commits.authorDisplayNameMap[author],
                    dailyCommits: commits.authorDailyContributionsMap[author],
                    fileTypeContribution: commits.authorFileTypeContributionMap[author]
                  };

                  _this3.setContributionOfCommitResults(obj.dailyCommits);

                  var searchParams = [repo.displayName, obj.displayName, author];
                  obj.searchPath = searchParams.join('_').toLowerCase();
                  obj.repoName = "".concat(repo.displayName);
                  obj.location = "".concat(repo.location.location);
                  res.push(obj);
                }
              });
              repo.commits = commits;
              repo.users = res;
              return _context3.abrupt("return", res);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  loadAuthorship: function loadAuthorship(repoName) {
    var folderName = window.REPOS[repoName].outputFolderName;
    return this.loadJSON("".concat(folderName, "/authorship.json")).then(function (files) {
      window.REPOS[repoName].files = files;
      return files;
    });
  },
  // calculate and set the contribution of each commitResult, since not provided in json file
  setContributionOfCommitResults: function setContributionOfCommitResults(dailyCommits) {
    dailyCommits.forEach(function (commit) {
      commit.commitResults.forEach(function (result) {
        result.insertions = Object.values(result.fileTypesAndContributionMap).reduce(function (acc, fileType) {
          return acc + fileType.insertions;
        }, 0);
        result.deletions = Object.values(result.fileTypesAndContributionMap).reduce(function (acc, fileType) {
          return acc + fileType.deletions;
        }, 0);
      });
    });
  }
};
/* harmony default export */ var api = ('test');
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./src/utils/safari_date.js




// date keys for handling safari date input //
function isIntegerKey(key) {
  return key >= 48 && key <= 57 || key >= 96 && key <= 105;
}

function isArrowOrEnterKey(key) {
  return key >= 37 && key <= 40 || key === 13;
}

function isBackSpaceOrDeleteKey(key) {
  return key === 8 || key === 46;
}

function validateInputDate(event) {
  var key = event.keyCode; // only allow integer, backspace, delete, arrow or enter keys

  if (!(isIntegerKey(key) || isBackSpaceOrDeleteKey(key) || isArrowOrEnterKey(key))) {
    event.preventDefault();
  }
}

function deleteDashInputDate(event) {
  var key = event.keyCode;
  var date = event.target.value; // remove two chars before the cursor's position if deleting dash character

  if (isBackSpaceOrDeleteKey(key)) {
    var cursorPosition = event.target.selectionStart;

    if (date[cursorPosition - 1] === '-') {
      event.target.value = date.slice(0, cursorPosition - 1);
    }
  }
}

window.formatInputDateOnKeyDown = function formatInputDateOnKeyDown(event) {
  validateInputDate(event);
  deleteDashInputDate(event);
};

window.appendDashInputDate = function appendDashInputDate(event) {
  var date = event.target.value; // append dash to date with format yyyy-mm-dd

  if (date.match(/^\d{4}$/) !== null) {
    event.target.value += '-';
  } else if (date.match(/^\d{4}-\d{2}$/) !== null) {
    event.target.value += '-';
  }
};

/* harmony default export */ var safari_date = ('test');
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__("c074");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var free_brands_svg_icons_index_es = __webpack_require__("f2d1");

// CONCATENATED MODULE: ./src/utils/load-font-awesome-icons.js


 // app

index_es["d" /* library */].add(free_solid_svg_icons_index_es["j" /* faExclamation */], free_solid_svg_icons_index_es["n" /* faSpinner */], free_solid_svg_icons_index_es["h" /* faCode */], free_solid_svg_icons_index_es["l" /* faListUl */]); // v-resizer

index_es["d" /* library */].add(free_solid_svg_icons_index_es["b" /* faCaretRight */]); // v-summary

index_es["d" /* library */].add(free_solid_svg_icons_index_es["j" /* faExclamation */]); // v-summary-charts

index_es["d" /* library */].add(free_solid_svg_icons_index_es["f" /* faChevronUp */], free_solid_svg_icons_index_es["e" /* faChevronDown */], free_brands_svg_icons_index_es["a" /* faGithub */], free_solid_svg_icons_index_es["p" /* faUser */], free_solid_svg_icons_index_es["h" /* faCode */], free_solid_svg_icons_index_es["l" /* faListUl */], free_solid_svg_icons_index_es["g" /* faCircle */]); // v-zoom

index_es["d" /* library */].add(free_solid_svg_icons_index_es["o" /* faTags */], free_solid_svg_icons_index_es["i" /* faEllipsisH */]); // v-authorship

index_es["d" /* library */].add(free_solid_svg_icons_index_es["a" /* faCaretDown */], free_solid_svg_icons_index_es["b" /* faCaretRight */], free_solid_svg_icons_index_es["k" /* faHistory */], free_solid_svg_icons_index_es["q" /* faUserEdit */]); // v-segment

index_es["d" /* library */].add(free_solid_svg_icons_index_es["m" /* faPlusCircle */], free_solid_svg_icons_index_es["d" /* faChevronCircleUp */], free_solid_svg_icons_index_es["c" /* faChevronCircleDown */]);
// CONCATENATED MODULE: ./src/main.js















index_es["b" /* dom */].watch();
var main_app = Object(vue_runtime_esm_bundler["d" /* createApp */])(app);
main_app.component('font-awesome-icon', vue_fontawesome_index_es["a" /* FontAwesomeIcon */]);
main_app.use(store_store);
main_app.mount('#app'); // app.use(hljs.vuePlugin);

main_app.directive('hljs', {
  mounted: function mounted(ele, binding) {
    var element = ele;
    element.className = binding.value.split('.').pop();
    lib_default.a.highlightBlock(element);
  }
});

/***/ }),

/***/ "6b41":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_authorship_vue_vue_type_style_index_0_id_3cebc445_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8a23");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_authorship_vue_vue_type_style_index_0_id_3cebc445_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_authorship_vue_vue_type_style_index_0_id_3cebc445_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8a23":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d5b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_zoom_vue_vue_type_style_index_0_id_15fd2538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebc8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_zoom_vue_vue_type_style_index_0_id_15fd2538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_zoom_vue_vue_type_style_index_0_id_15fd2538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a08c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_summary_vue_vue_type_style_index_0_id_52174479_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e874");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_summary_vue_vue_type_style_index_0_id_52174479_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_summary_vue_vue_type_style_index_0_id_52174479_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b90b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_ramp_vue_vue_type_style_index_0_id_011a973c_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe67");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_ramp_vue_vue_type_style_index_0_id_011a973c_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_v_ramp_vue_vue_type_style_index_0_id_011a973c_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bb2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_app_vue_vue_type_style_index_0_id_2a4e5306_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb88");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_app_vue_vue_type_style_index_0_id_2a4e5306_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_app_vue_vue_type_style_index_0_id_2a4e5306_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e874":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eb88":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ebc8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fe67":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.3428a036.js.map