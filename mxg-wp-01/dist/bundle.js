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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//打包\r\n// D:\\vue\\vuexx\\mxg-wp-01>node_modules\\.bin\\webpack .\\src\\main.js -o .\\dist\\bundle.js\r\n\r\n/*\r\nD:\\vue\\vuexx\\mxg-wp-01>node_modules\\.bin\\webpack .\\src\\main.js -o .\\dist\\bundle.js\r\nHash: d043d98db058f8f754e4\r\nVersion: webpack 4.35.2\r\nTime: 385ms\r\nBuilt at: 2019-11-24 22:17:15\r\nAsset        Size  Chunks             Chunk Names\r\nbundle.js  1010 bytes       0  [emitted]  main\r\nEntrypoint main = bundle.js\r\n    [0] ./src/main.js 33 bytes {0} [built]\r\n    [1] ./src/bar.js 73 bytes {0} [built]\r\n\r\nWARNING in configuration\r\nThe 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'productio\r\nn' to enable defaults for each environment.\r\nYou can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/\r\n*/\r\n\r\n//打包命令\r\n//D:\\vue\\vuexx\\mxg-wp-01>node_modules\\.bin\\webpack\r\n/*\r\nD:\\vue\\vuexx\\mxg-wp-01>node_modules\\.bin\\webpack\r\nHash: 0ca3eced5f5e3ff75721\r\nVersion: webpack 4.35.2\r\nTime: 419ms\r\nBuilt at: 2019-11-24 22:29:24\r\n    Asset        Size  Chunks             Chunk Names\r\nbundle.js  1010 bytes       0  [emitted]  main\r\nEntrypoint main = bundle.js\r\n[0] ./src/main.js 33 bytes {0} [built]\r\n[1] ./src/bar.js 910 bytes {0} [built]\r\n\r\nWARNING in configuration\r\nThe 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'productio\r\nn' to enable defaults for each environment.\r\nYou can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/\r\n\r\nD:\\vue\\vuexx\\mxg-wp-01>node_modules\\.bin\\webpack\r\nHash: 8520fa0da4288a95631f\r\nVersion: webpack 4.35.2\r\nTime: 400ms\r\nBuilt at: 2019-11-24 22:29:41\r\n    Asset        Size  Chunks             Chunk Names\r\nbundle.js  1010 bytes       0  [emitted]  main\r\nEntrypoint main = bundle.js\r\n[0] ./src/main.js 33 bytes {0} [built]\r\n[1] ./src/bar.js 910 bytes {0} [built]\r\n\r\nWARNING in configuration\r\nThe 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'productio\r\nn' to enable defaults for each environment.\r\nYou can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/\r\n\r\n*/\r\n\r\nmodule.exports = function () {\r\n    console.log('我是 bar 模块03')\r\n}\n\n//# sourceURL=webpack:///./src/bar.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bar = __webpack_require__(/*! ./bar */ \"./src/bar.js\")\r\nbar()\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });