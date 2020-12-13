module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Index/ProductList.js":
/*!*****************************************!*\
  !*** ./components/Index/ProductList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/hackyourfuture/Desktop/HYF/E-COMMERCE-revised/components/Index/ProductList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProductList({\n  products\n}) {\n  function mapProductsToItems(products) {\n    return products.map(product => ({\n      header: product.name,\n      image: product.mediaUrl,\n      meta: `$${product.price}`,\n      color: \"teal\",\n      fluid: true,\n      childKey: product._id,\n      href: `/product?_id=${product._id}`\n    }));\n  }\n\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Group, {\n    stackable: true,\n    itemsPerRow: \"3\",\n    centered: true,\n    items: mapProductsToItems(products),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzPzY1ZDciXSwibmFtZXMiOlsiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsIm1hcFByb2R1Y3RzVG9JdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJoZWFkZXIiLCJuYW1lIiwiaW1hZ2UiLCJtZWRpYVVybCIsIm1ldGEiLCJwcmljZSIsImNvbG9yIiwiZmx1aWQiLCJjaGlsZEtleSIsIl9pZCIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQztBQUFGLENBQXJCLEVBQW1DO0FBQ2pDLFdBQVNDLGtCQUFULENBQTRCRCxRQUE1QixFQUFzQztBQUNwQyxXQUFPQSxRQUFRLENBQUNFLEdBQVQsQ0FBYUMsT0FBTyxLQUFLO0FBQzlCQyxZQUFNLEVBQUVELE9BQU8sQ0FBQ0UsSUFEYztBQUU5QkMsV0FBSyxFQUFFSCxPQUFPLENBQUNJLFFBRmU7QUFHOUJDLFVBQUksRUFBRyxJQUFHTCxPQUFPLENBQUNNLEtBQU0sRUFITTtBQUk5QkMsV0FBSyxFQUFFLE1BSnVCO0FBSzlCQyxXQUFLLEVBQUUsSUFMdUI7QUFNOUJDLGNBQVEsRUFBRVQsT0FBTyxDQUFDVSxHQU5ZO0FBTzlCQyxVQUFJLEVBQUcsZ0JBQWVYLE9BQU8sQ0FBQ1UsR0FBSTtBQVBKLEtBQUwsQ0FBcEIsQ0FBUDtBQVNEOztBQUVELFNBQ0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFDRSxhQUFTLE1BRFg7QUFFRSxlQUFXLEVBQUMsR0FGZDtBQUdFLFlBQVEsTUFIVjtBQUlFLFNBQUssRUFBRVosa0JBQWtCLENBQUNELFFBQUQsQ0FKM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUQ7O0FBRWNELDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbmRleC9Qcm9kdWN0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuZnVuY3Rpb24gUHJvZHVjdExpc3QoeyBwcm9kdWN0cyB9KSB7XG4gIGZ1bmN0aW9uIG1hcFByb2R1Y3RzVG9JdGVtcyhwcm9kdWN0cykge1xuICAgIHJldHVybiBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoe1xuICAgICAgaGVhZGVyOiBwcm9kdWN0Lm5hbWUsXG4gICAgICBpbWFnZTogcHJvZHVjdC5tZWRpYVVybCxcbiAgICAgIG1ldGE6IGAkJHtwcm9kdWN0LnByaWNlfWAsXG4gICAgICBjb2xvcjogXCJ0ZWFsXCIsXG4gICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgIGNoaWxkS2V5OiBwcm9kdWN0Ll9pZCxcbiAgICAgIGhyZWY6IGAvcHJvZHVjdD9faWQ9JHtwcm9kdWN0Ll9pZH1gXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZC5Hcm91cFxuICAgICAgc3RhY2thYmxlXG4gICAgICBpdGVtc1BlclJvdz1cIjNcIlxuICAgICAgY2VudGVyZWRcbiAgICAgIGl0ZW1zPXttYXBQcm9kdWN0c1RvSXRlbXMocHJvZHVjdHMpfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Index/ProductList.js\n");

/***/ }),

/***/ "./components/Index/ProductPagination.js":
/*!***********************************************!*\
  !*** ./components/Index/ProductPagination.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/hackyourfuture/Desktop/HYF/E-COMMERCE-revised/components/Index/ProductPagination.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction ProductPagination({\n  totalPages\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    textAlign: \"center\",\n    style: {\n      margin: \"2em\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Pagination\"], {\n    defaultActivePage: 1,\n    totalPages: totalPages,\n    onPageChange: (event, data) => {\n      data.activePage === 1 ? router.push(\"/\") : router.push(`/?page=${data.activePage}`);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPagination);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RQYWdpbmF0aW9uLmpzP2VmMTAiXSwibmFtZXMiOlsiUHJvZHVjdFBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFyZ2luIiwiZXZlbnQiLCJkYXRhIiwiYWN0aXZlUGFnZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCO0FBQUVDO0FBQUYsQ0FBM0IsRUFBMkM7QUFDekMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFNBQ0UsTUFBQywyREFBRDtBQUFXLGFBQVMsRUFBQyxRQUFyQjtBQUE4QixTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxxQkFBaUIsRUFBRSxDQURyQjtBQUVFLGNBQVUsRUFBRUgsVUFGZDtBQUdFLGdCQUFZLEVBQUUsQ0FBQ0ksS0FBRCxFQUFRQyxJQUFSLEtBQWlCO0FBQzdCQSxVQUFJLENBQUNDLFVBQUwsS0FBb0IsQ0FBcEIsR0FDSUwsTUFBTSxDQUFDTSxJQUFQLENBQVksR0FBWixDQURKLEdBRUlOLE1BQU0sQ0FBQ00sSUFBUCxDQUFhLFVBQVNGLElBQUksQ0FBQ0MsVUFBVyxFQUF0QyxDQUZKO0FBR0QsS0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQWFEOztBQUVjUCxnRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5kZXgvUHJvZHVjdFBhZ2luYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0UGFnaW5hdGlvbih7IHRvdGFsUGFnZXMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjJlbVwiIH19PlxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgZGVmYXVsdEFjdGl2ZVBhZ2U9ezF9XG4gICAgICAgIHRvdGFsUGFnZXM9e3RvdGFsUGFnZXN9XG4gICAgICAgIG9uUGFnZUNoYW5nZT17KGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgICAgZGF0YS5hY3RpdmVQYWdlID09PSAxXG4gICAgICAgICAgICA/IHJvdXRlci5wdXNoKFwiL1wiKVxuICAgICAgICAgICAgOiByb3V0ZXIucHVzaChgLz9wYWdlPSR7ZGF0YS5hY3RpdmVQYWdlfWApO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2luYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Index/ProductPagination.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Index_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Index/ProductList */ \"./components/Index/ProductList.js\");\n/* harmony import */ var _components_Index_ProductPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Index/ProductPagination */ \"./components/Index/ProductPagination.js\");\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\nvar _jsxFileName = \"/Users/hackyourfuture/Desktop/HYF/E-COMMERCE-revised/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Home({\n  products,\n  totalPages\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Index_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    products: products,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Index_ProductPagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    totalPages: totalPages,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n}\n\nHome.getInitialProps = async ctx => {\n  const page = ctx.query.page ? ctx.query.page : \"1\";\n  const size = 9;\n  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}/api/products`;\n  const payload = {\n    params: {\n      page,\n      size\n    }\n  }; // fetch data on server\n\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url, payload); // return response data as an object\n\n  return response.data; // note: this object will be merged with existing props\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9kdWN0cyIsInRvdGFsUGFnZXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYWdlIiwicXVlcnkiLCJzaXplIiwidXJsIiwiYmFzZVVybCIsInBheWxvYWQiLCJwYXJhbXMiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFkLEVBQXdDO0FBQ3RDLFNBQ0UsbUVBQ0UsTUFBQyxxRUFBRDtBQUFhLFlBQVEsRUFBRUQsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyRUFBRDtBQUFtQixjQUFVLEVBQUVDLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQ7O0FBRURGLElBQUksQ0FBQ0csZUFBTCxHQUF1QixNQUFNQyxHQUFOLElBQWE7QUFDbEMsUUFBTUMsSUFBSSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsSUFBVixHQUFpQkQsR0FBRyxDQUFDRSxLQUFKLENBQVVELElBQTNCLEdBQWtDLEdBQS9DO0FBQ0EsUUFBTUUsSUFBSSxHQUFHLENBQWI7QUFDQSxRQUFNQyxHQUFHLEdBQUksR0FBRUMsc0RBQVEsZUFBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUc7QUFBRUMsVUFBTSxFQUFFO0FBQUVOLFVBQUY7QUFBUUU7QUFBUjtBQUFWLEdBQWhCLENBSmtDLENBS2xDOztBQUNBLFFBQU1LLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVOLEdBQVYsRUFBZUUsT0FBZixDQUF2QixDQU5rQyxDQU9sQzs7QUFDQSxTQUFPRSxRQUFRLENBQUNHLElBQWhCLENBUmtDLENBU2xDO0FBQ0QsQ0FWRDs7QUFZZWYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmRleC9Qcm9kdWN0TGlzdFwiO1xuaW1wb3J0IFByb2R1Y3RQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RQYWdpbmF0aW9uXCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xuXG5mdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMsIHRvdGFsUGFnZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgPFByb2R1Y3RQYWdpbmF0aW9uIHRvdGFsUGFnZXM9e3RvdGFsUGFnZXN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgcGFnZSA9IGN0eC5xdWVyeS5wYWdlID8gY3R4LnF1ZXJ5LnBhZ2UgOiBcIjFcIjtcbiAgY29uc3Qgc2l6ZSA9IDk7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2FwaS9wcm9kdWN0c2A7XG4gIGNvbnN0IHBheWxvYWQgPSB7IHBhcmFtczogeyBwYWdlLCBzaXplIH0gfTtcbiAgLy8gZmV0Y2ggZGF0YSBvbiBzZXJ2ZXJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCBwYXlsb2FkKTtcbiAgLy8gcmV0dXJuIHJlc3BvbnNlIGRhdGEgYXMgYW4gb2JqZWN0XG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAvLyBub3RlOiB0aGlzIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIGV4aXN0aW5nIHByb3BzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst baseUrl = false ? undefined : \"http://localhost:3000\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (baseUrl);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9iYXNlVXJsLmpzP2FlMzMiXSwibmFtZXMiOlsiYmFzZVVybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxPQUFPLEdBQ1gsUUFDSSxTQURKLEdBRUksdUJBSE47QUFLZUEsc0VBQWYiLCJmaWxlIjoiLi91dGlscy9iYXNlVXJsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZVVybCA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgID8gXCJodHRwczovL2Vjb21tZXJjZW11c3RhZmEubm93LnNoXCJcbiAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });