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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/Home.js":
/*!**********************!*\
  !*** ../src/Home.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/img.jpg */ \"../src/images/img.jpg\");\n // import { Link } from \"react-router-dom\";\n// import lodash from \"lodash\";\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Home123\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _images_img_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///../src/Home.js?");

/***/ }),

/***/ "../src/images/img.jpg":
/*!*****************************!*\
  !*** ../src/images/img.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7b424e4bf0b3bef319652d9d42b63a0c.jpg\");\n\n//# sourceURL=webpack:///../src/images/img.jpg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Home.js */ \"../src/Home.js\");\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar next = __webpack_require__(/*! next */ \"next\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar dev = true;\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\"); // next js code\n\n\n // import Route from \"../src/routes.js\";\n// const app = next({ dev });\n// const handle = app.getRequestHandler();\n// app.prepare().then(() => {\n//   const server = express();\n//   server.get(\"*\", (req, res) => {\n//     return handle(req, res);\n//   });\n//   server.listen(3001, () => {\n//     console.log(\"started server\");\n//   });\n// });\n\nvar app = express(); // app.get(\n//   /\\.(js|jsx|css|jpg|map|ico|)$/,\n//   express.static(path.resolve(__dirname, \"./dist\"))\n// );\n// app.use(\"*\", (req, res) => {\n//   res.contentType(\"text/html\");\n//   res.status(200);\n//   const indexHTML = `<!DOCTYPE html>\n//   <html>\n//     <head>\n//       <title>Ludo</title>\n//       <meta http-equiv=\"Cache-Control\" content=\"no-cache\" />\n//     </head>\n//     <body>\n//       <div id=\"root\">${ReactDOMServer.renderToString(<Contact />)}</div>\n//       <script type=\"text/javascript\" src=\"./vendors~home.js\"></script>\n//       <script type=\"text/javascript\" src=\"./home.js\"></script>\n//     </body>\n//   </html>`;\n//   return res.send(indexHTML);\n// });\n\napp.get(\"/\", function (req, res) {\n  var app = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(_src_Home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n  var indexFile = path.resolve(\"./dist/index.html\");\n  fs.readFile(indexFile, \"utf8\", function (err, data) {\n    if (err) {\n      console.error(\"Something went wrong:\", err);\n      return res.status(500).send(\"Oops, better luck next time!\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express[\"static\"](\"./dist\"));\napp.listen(3001, function (err) {\n  if (!err) {\n    console.log(\"started node server\");\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  ignore: [/(node_modules)/],\n  presets: [\"@babel/preset-env\", \"@babel/preset-react\"]\n});\n\n__webpack_require__(/*! ./index.js */ \"./index.js\");\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/register\");\n\n//# sourceURL=webpack:///external_%22@babel/register%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next\");\n\n//# sourceURL=webpack:///external_%22next%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });