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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart/CartItemList.js":
/*!*****************************************!*\
  !*** ./components/Cart/CartItemList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/hackyourfuture/Desktop/HYF/E-COMMERCE-revised/components/Cart/CartItemList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction CartItemList({\n  products,\n  user,\n  handleRemoveFromCart,\n  success\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  function mapCartProductsToItems(products) {\n    return products.map(p => ({\n      childKey: p.product._id,\n      header: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Item\"].Header, {\n        as: \"a\",\n        onClick: () => router.push(`/product?_id=${p.product._id}`),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }\n      }, p.product.name),\n      image: p.product.mediaUrl,\n      meta: `${p.quantity} x $${p.product.price}`,\n      fluid: \"true\",\n      extra: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        basic: true,\n        icon: \"remove\",\n        floated: \"right\",\n        onClick: () => handleRemoveFromCart(p.product._id),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 9\n        }\n      })\n    }));\n  }\n\n  if (success) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Message\"], {\n      success: true,\n      header: \"Success!\",\n      content: \"Your order and payment has been accepted\",\n      icon: \"star outline\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }\n    });\n  }\n\n  if (products.length === 0) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Segment\"], {\n      secondary: true,\n      color: \"teal\",\n      inverted: true,\n      textAlign: \"center\",\n      placeholder: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n      icon: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      name: \"shopping basket\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }\n    }), \"No products in your cart. Add some!\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }\n    }, user ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      color: \"orange\",\n      onClick: () => router.push(\"/\"),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }\n    }, \"View Products\") : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      color: \"blue\",\n      onClick: () => router.push(\"/login\"),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }, \"Login to Add Products\")));\n  }\n\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Item\"].Group, {\n    divided: true,\n    items: mapCartProductsToItems(products),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 10\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartItemList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydEl0ZW1MaXN0LmpzP2RlNzYiXSwibmFtZXMiOlsiQ2FydEl0ZW1MaXN0IiwicHJvZHVjdHMiLCJ1c2VyIiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJzdWNjZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwQ2FydFByb2R1Y3RzVG9JdGVtcyIsIm1hcCIsInAiLCJjaGlsZEtleSIsInByb2R1Y3QiLCJfaWQiLCJoZWFkZXIiLCJwdXNoIiwibmFtZSIsImltYWdlIiwibWVkaWFVcmwiLCJtZXRhIiwicXVhbnRpdHkiLCJwcmljZSIsImZsdWlkIiwiZXh0cmEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQVFBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0I7QUFBRUMsVUFBRjtBQUFZQyxNQUFaO0FBQWtCQyxzQkFBbEI7QUFBd0NDO0FBQXhDLENBQXRCLEVBQXlFO0FBQ3ZFLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0Msc0JBQVQsQ0FBZ0NOLFFBQWhDLEVBQTBDO0FBQ3hDLFdBQU9BLFFBQVEsQ0FBQ08sR0FBVCxDQUFhQyxDQUFDLEtBQUs7QUFDeEJDLGNBQVEsRUFBRUQsQ0FBQyxDQUFDRSxPQUFGLENBQVVDLEdBREk7QUFFeEJDLFlBQU0sRUFDSixNQUFDLHNEQUFELENBQU0sTUFBTjtBQUNFLFVBQUUsRUFBQyxHQURMO0FBRUUsZUFBTyxFQUFFLE1BQU1SLE1BQU0sQ0FBQ1MsSUFBUCxDQUFhLGdCQUFlTCxDQUFDLENBQUNFLE9BQUYsQ0FBVUMsR0FBSSxFQUExQyxDQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUdILENBQUMsQ0FBQ0UsT0FBRixDQUFVSSxJQUpiLENBSHNCO0FBVXhCQyxXQUFLLEVBQUVQLENBQUMsQ0FBQ0UsT0FBRixDQUFVTSxRQVZPO0FBV3hCQyxVQUFJLEVBQUcsR0FBRVQsQ0FBQyxDQUFDVSxRQUFTLE9BQU1WLENBQUMsQ0FBQ0UsT0FBRixDQUFVUyxLQUFNLEVBWGxCO0FBWXhCQyxXQUFLLEVBQUUsTUFaaUI7QUFheEJDLFdBQUssRUFDSCxNQUFDLHdEQUFEO0FBQ0UsYUFBSyxNQURQO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxlQUFPLEVBQUMsT0FIVjtBQUlFLGVBQU8sRUFBRSxNQUFNbkIsb0JBQW9CLENBQUNNLENBQUMsQ0FBQ0UsT0FBRixDQUFVQyxHQUFYLENBSnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkc0IsS0FBTCxDQUFkLENBQVA7QUFzQkQ7O0FBRUQsTUFBSVIsT0FBSixFQUFhO0FBQ1gsV0FDRSxNQUFDLHlEQUFEO0FBQ0UsYUFBTyxNQURUO0FBRUUsWUFBTSxFQUFDLFVBRlQ7QUFHRSxhQUFPLEVBQUMsMENBSFY7QUFJRSxVQUFJLEVBQUMsY0FKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFRRDs7QUFFRCxNQUFJSCxRQUFRLENBQUNzQixNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFdBQ0UsTUFBQyx5REFBRDtBQUFTLGVBQVMsTUFBbEI7QUFBbUIsV0FBSyxFQUFDLE1BQXpCO0FBQWdDLGNBQVEsTUFBeEM7QUFBeUMsZUFBUyxFQUFDLFFBQW5EO0FBQTRELGlCQUFXLE1BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQVEsVUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNEQUFEO0FBQU0sVUFBSSxFQUFDLGlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERix3Q0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3JCLElBQUksR0FDSCxNQUFDLHdEQUFEO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBdUIsYUFBTyxFQUFFLE1BQU1HLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLEdBQVosQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERyxHQUtILE1BQUMsd0RBQUQ7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFxQixhQUFPLEVBQUUsTUFBTVQsTUFBTSxDQUFDUyxJQUFQLENBQVksUUFBWixDQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQU5KLENBTEYsQ0FERjtBQW1CRDs7QUFFRCxTQUFPLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksV0FBTyxNQUFuQjtBQUFvQixTQUFLLEVBQUVQLHNCQUFzQixDQUFDTixRQUFELENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNEOztBQUVjRCwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FydC9DYXJ0SXRlbUxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIZWFkZXIsXG4gIFNlZ21lbnQsXG4gIEJ1dHRvbixcbiAgSWNvbixcbiAgSXRlbSxcbiAgTWVzc2FnZVxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBDYXJ0SXRlbUxpc3QoeyBwcm9kdWN0cywgdXNlciwgaGFuZGxlUmVtb3ZlRnJvbUNhcnQsIHN1Y2Nlc3MgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBtYXBDYXJ0UHJvZHVjdHNUb0l0ZW1zKHByb2R1Y3RzKSB7XG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcChwID0+ICh7XG4gICAgICBjaGlsZEtleTogcC5wcm9kdWN0Ll9pZCxcbiAgICAgIGhlYWRlcjogKFxuICAgICAgICA8SXRlbS5IZWFkZXJcbiAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdD9faWQ9JHtwLnByb2R1Y3QuX2lkfWApfVxuICAgICAgICA+XG4gICAgICAgICAge3AucHJvZHVjdC5uYW1lfVxuICAgICAgICA8L0l0ZW0uSGVhZGVyPlxuICAgICAgKSxcbiAgICAgIGltYWdlOiBwLnByb2R1Y3QubWVkaWFVcmwsXG4gICAgICBtZXRhOiBgJHtwLnF1YW50aXR5fSB4ICQke3AucHJvZHVjdC5wcmljZX1gLFxuICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxuICAgICAgZXh0cmE6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgaWNvbj1cInJlbW92ZVwiXG4gICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGcm9tQ2FydChwLnByb2R1Y3QuX2lkKX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVzc2FnZVxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGhlYWRlcj1cIlN1Y2Nlc3MhXCJcbiAgICAgICAgY29udGVudD1cIllvdXIgb3JkZXIgYW5kIHBheW1lbnQgaGFzIGJlZW4gYWNjZXB0ZWRcIlxuICAgICAgICBpY29uPVwic3RhciBvdXRsaW5lXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwcm9kdWN0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlZ21lbnQgc2Vjb25kYXJ5IGNvbG9yPVwidGVhbFwiIGludmVydGVkIHRleHRBbGlnbj1cImNlbnRlclwiIHBsYWNlaG9sZGVyPlxuICAgICAgICA8SGVhZGVyIGljb24+XG4gICAgICAgICAgPEljb24gbmFtZT1cInNob3BwaW5nIGJhc2tldFwiIC8+XG4gICAgICAgICAgTm8gcHJvZHVjdHMgaW4geW91ciBjYXJ0LiBBZGQgc29tZSFcbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwib3JhbmdlXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfT5cbiAgICAgICAgICAgICAgVmlldyBQcm9kdWN0c1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJibHVlXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW5cIil9PlxuICAgICAgICAgICAgICBMb2dpbiB0byBBZGQgUHJvZHVjdHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gPEl0ZW0uR3JvdXAgZGl2aWRlZCBpdGVtcz17bWFwQ2FydFByb2R1Y3RzVG9JdGVtcyhwcm9kdWN0cyl9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0SXRlbUxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cart/CartItemList.js\n");

/***/ }),

/***/ "./components/Cart/CartSummary.js":
/*!****************************************!*\
  !*** ./components/Cart/CartSummary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-checkout */ \"react-stripe-checkout\");\n/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateCartTotal */ \"./utils/calculateCartTotal.js\");\nvar _jsxFileName = \"/Users/hackyourfuture/Desktop/HYF/E-COMMERCE-revised/components/Cart/CartSummary.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction CartSummary({\n  products,\n  handleCheckout,\n  success\n}) {\n  const [cartAmount, setCartAmount] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  const [stripeAmount, setStripeAmount] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  const [isCartEmpty, setCartEmpty] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    const {\n      cartTotal,\n      stripeTotal\n    } = Object(_utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(products);\n    setCartAmount(cartTotal);\n    setStripeAmount(stripeTotal);\n    setCartEmpty(products.length === 0);\n  }, [products]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Segment\"], {\n    clearing: true,\n    size: \"large\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"Sub total:\"), \" $\", cartAmount, __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    name: \"React Reserve\",\n    amount: stripeAmount,\n    image: products.length > 0 ? products[0].product.mediaUrl : \"\",\n    currency: \"USD\",\n    shippingAddress: true,\n    billingAddress: true,\n    zipCode: true,\n    stripeKey: \"pk_test_tvBTwGJBnNmHogtK9glqpSzk00O3X6SzOf\",\n    token: handleCheckout,\n    triggerEvent: \"onClick\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    icon: \"cart\",\n    disabled: isCartEmpty || success,\n    color: \"teal\",\n    floated: \"right\",\n    content: \"Checkout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartSummary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFN1bW1hcnkuanM/NDk3ZiJdLCJuYW1lcyI6WyJDYXJ0U3VtbWFyeSIsInByb2R1Y3RzIiwiaGFuZGxlQ2hlY2tvdXQiLCJzdWNjZXNzIiwiY2FydEFtb3VudCIsInNldENhcnRBbW91bnQiLCJSZWFjdCIsInVzZVN0YXRlIiwic3RyaXBlQW1vdW50Iiwic2V0U3RyaXBlQW1vdW50IiwiaXNDYXJ0RW1wdHkiLCJzZXRDYXJ0RW1wdHkiLCJ1c2VFZmZlY3QiLCJjYXJ0VG90YWwiLCJzdHJpcGVUb3RhbCIsImNhbGN1bGF0ZUNhcnRUb3RhbCIsImxlbmd0aCIsInByb2R1Y3QiLCJtZWRpYVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUMsVUFBRjtBQUFZQyxnQkFBWjtBQUE0QkM7QUFBNUIsQ0FBckIsRUFBNEQ7QUFDMUQsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQXBDO0FBQ0EsUUFBTSxDQUFDQyxZQUFELEVBQWVDLGVBQWYsSUFBa0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQXhDO0FBQ0EsUUFBTSxDQUFDRyxXQUFELEVBQWNDLFlBQWQsSUFBOEJMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXBDO0FBRUFELDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQixVQUFNO0FBQUVDLGVBQUY7QUFBYUM7QUFBYixRQUE2QkMseUVBQWtCLENBQUNkLFFBQUQsQ0FBckQ7QUFDQUksaUJBQWEsQ0FBQ1EsU0FBRCxDQUFiO0FBQ0FKLG1CQUFlLENBQUNLLFdBQUQsQ0FBZjtBQUNBSCxnQkFBWSxDQUFDVixRQUFRLENBQUNlLE1BQVQsS0FBb0IsQ0FBckIsQ0FBWjtBQUNELEdBTEQsRUFLRyxDQUFDZixRQUFELENBTEg7QUFPQSxTQUNFLG1FQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5REFBRDtBQUFTLFlBQVEsTUFBakI7QUFBa0IsUUFBSSxFQUFDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLFFBQ2dDRyxVQURoQyxFQUVFLE1BQUMsNERBQUQ7QUFDRSxRQUFJLEVBQUMsZUFEUDtBQUVFLFVBQU0sRUFBRUksWUFGVjtBQUdFLFNBQUssRUFBRVAsUUFBUSxDQUFDZSxNQUFULEdBQWtCLENBQWxCLEdBQXNCZixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlnQixPQUFaLENBQW9CQyxRQUExQyxHQUFxRCxFQUg5RDtBQUlFLFlBQVEsRUFBQyxLQUpYO0FBS0UsbUJBQWUsRUFBRSxJQUxuQjtBQU1FLGtCQUFjLEVBQUUsSUFObEI7QUFPRSxXQUFPLEVBQUUsSUFQWDtBQVFFLGFBQVMsRUFBQyw0Q0FSWjtBQVNFLFNBQUssRUFBRWhCLGNBVFQ7QUFVRSxnQkFBWSxFQUFDLFNBVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsd0RBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFlBQVEsRUFBRVEsV0FBVyxJQUFJUCxPQUYzQjtBQUdFLFNBQUssRUFBQyxNQUhSO0FBSUUsV0FBTyxFQUFDLE9BSlY7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FGRixDQUZGLENBREY7QUE0QkQ7O0FBRWNILDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJ0L0NhcnRTdW1tYXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0cmlwZUNoZWNrb3V0IGZyb20gXCJyZWFjdC1zdHJpcGUtY2hlY2tvdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgU2VnbWVudCwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGNhbGN1bGF0ZUNhcnRUb3RhbCBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlQ2FydFRvdGFsXCI7XG5cbmZ1bmN0aW9uIENhcnRTdW1tYXJ5KHsgcHJvZHVjdHMsIGhhbmRsZUNoZWNrb3V0LCBzdWNjZXNzIH0pIHtcbiAgY29uc3QgW2NhcnRBbW91bnQsIHNldENhcnRBbW91bnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdHJpcGVBbW91bnQsIHNldFN0cmlwZUFtb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzQ2FydEVtcHR5LCBzZXRDYXJ0RW1wdHldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjYXJ0VG90YWwsIHN0cmlwZVRvdGFsIH0gPSBjYWxjdWxhdGVDYXJ0VG90YWwocHJvZHVjdHMpO1xuICAgIHNldENhcnRBbW91bnQoY2FydFRvdGFsKTtcbiAgICBzZXRTdHJpcGVBbW91bnQoc3RyaXBlVG90YWwpO1xuICAgIHNldENhcnRFbXB0eShwcm9kdWN0cy5sZW5ndGggPT09IDApO1xuICB9LCBbcHJvZHVjdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPFNlZ21lbnQgY2xlYXJpbmcgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgIDxzdHJvbmc+U3ViIHRvdGFsOjwvc3Ryb25nPiAke2NhcnRBbW91bnR9XG4gICAgICAgIDxTdHJpcGVDaGVja291dFxuICAgICAgICAgIG5hbWU9XCJSZWFjdCBSZXNlcnZlXCJcbiAgICAgICAgICBhbW91bnQ9e3N0cmlwZUFtb3VudH1cbiAgICAgICAgICBpbWFnZT17cHJvZHVjdHMubGVuZ3RoID4gMCA/IHByb2R1Y3RzWzBdLnByb2R1Y3QubWVkaWFVcmwgOiBcIlwifVxuICAgICAgICAgIGN1cnJlbmN5PVwiVVNEXCJcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M9e3RydWV9XG4gICAgICAgICAgYmlsbGluZ0FkZHJlc3M9e3RydWV9XG4gICAgICAgICAgemlwQ29kZT17dHJ1ZX1cbiAgICAgICAgICBzdHJpcGVLZXk9XCJwa190ZXN0X3R2QlR3R0pCbk5tSG9ndEs5Z2xxcFN6azAwTzNYNlN6T2ZcIlxuICAgICAgICAgIHRva2VuPXtoYW5kbGVDaGVja291dH1cbiAgICAgICAgICB0cmlnZ2VyRXZlbnQ9XCJvbkNsaWNrXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGljb249XCJjYXJ0XCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0NhcnRFbXB0eSB8fCBzdWNjZXNzfVxuICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgICBjb250ZW50PVwiQ2hlY2tvdXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3RyaXBlQ2hlY2tvdXQ+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTdW1tYXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cart/CartSummary.js\n");

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Cart_CartItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart/CartItemList */ \"./components/Cart/CartItemList.js\");\n/* harmony import */ var _components_Cart_CartSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cart/CartSummary */ \"./components/Cart/CartSummary.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/catchErrors */ \"./utils/catchErrors.js\");\nvar _jsxFileName = \"/Users/hackyourfuture/Desktop/HYF/E-COMMERCE-revised/pages/cart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Cart({\n  products,\n  user\n}) {\n  const [cartProducts, setCartProducts] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(products);\n  const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n\n  async function handleRemoveFromCart(productId) {\n    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__[\"default\"]}/api/cart`;\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"token\");\n    const payload = {\n      params: {\n        productId\n      },\n      headers: {\n        Authorization: token\n      }\n    };\n    const response = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.delete(url, payload);\n    setCartProducts(response.data);\n  }\n\n  async function handleCheckout(paymentData) {\n    try {\n      setLoading(true);\n      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__[\"default\"]}/api/checkout`;\n      const token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"token\");\n      const payload = {\n        paymentData\n      };\n      const headers = {\n        headers: {\n          Authorization: token\n        }\n      };\n      await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, payload, headers);\n      setSuccess(true);\n    } catch (error) {\n      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(error, window.alert);\n    } finally {\n      setLoading(false);\n    }\n  }\n\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Segment\"], {\n    loading: loading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Cart_CartItemList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    handleRemoveFromCart: handleRemoveFromCart,\n    user: user,\n    products: cartProducts,\n    success: success,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Cart_CartSummary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    products: cartProducts,\n    handleCheckout: handleCheckout,\n    success: success,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }));\n}\n\nCart.getInitialProps = async ctx => {\n  const {\n    token\n  } = Object(nookies__WEBPACK_IMPORTED_MODULE_4__[\"parseCookies\"])(ctx);\n\n  if (!token) {\n    return {\n      products: []\n    };\n  }\n\n  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__[\"default\"]}/api/cart`;\n  const payload = {\n    headers: {\n      Authorization: token\n    }\n  };\n  const response = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, payload);\n  return {\n    products: response.data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJ0LmpzPzYxMDMiXSwibmFtZXMiOlsiQ2FydCIsInByb2R1Y3RzIiwidXNlciIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJwcm9kdWN0SWQiLCJ1cmwiLCJiYXNlVXJsIiwidG9rZW4iLCJjb29raWUiLCJnZXQiLCJwYXlsb2FkIiwicGFyYW1zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImF4aW9zIiwiZGVsZXRlIiwiZGF0YSIsImhhbmRsZUNoZWNrb3V0IiwicGF5bWVudERhdGEiLCJwb3N0IiwiZXJyb3IiLCJjYXRjaEVycm9ycyIsIndpbmRvdyIsImFsZXJ0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFyc2VDb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQWQsRUFBa0M7QUFDaEMsUUFBTSxDQUFDQyxZQUFELEVBQWVDLGVBQWYsSUFBa0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUwsUUFBZixDQUF4QztBQUNBLFFBQU0sQ0FBQ00sT0FBRCxFQUFVQyxVQUFWLElBQXdCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUE5QjtBQUNBLFFBQU0sQ0FBQ0csT0FBRCxFQUFVQyxVQUFWLElBQXdCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUE5Qjs7QUFFQSxpQkFBZUssb0JBQWYsQ0FBb0NDLFNBQXBDLEVBQStDO0FBQzdDLFVBQU1DLEdBQUcsR0FBSSxHQUFFQyxzREFBUSxXQUF2QjtBQUNBLFVBQU1DLEtBQUssR0FBR0MsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBZDtBQUNBLFVBQU1DLE9BQU8sR0FBRztBQUNkQyxZQUFNLEVBQUU7QUFBRVA7QUFBRixPQURNO0FBRWRRLGFBQU8sRUFBRTtBQUFFQyxxQkFBYSxFQUFFTjtBQUFqQjtBQUZLLEtBQWhCO0FBSUEsVUFBTU8sUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLE1BQU4sQ0FBYVgsR0FBYixFQUFrQkssT0FBbEIsQ0FBdkI7QUFDQWQsbUJBQWUsQ0FBQ2tCLFFBQVEsQ0FBQ0csSUFBVixDQUFmO0FBQ0Q7O0FBRUQsaUJBQWVDLGNBQWYsQ0FBOEJDLFdBQTlCLEVBQTJDO0FBQ3pDLFFBQUk7QUFDRmpCLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsWUFBTUcsR0FBRyxHQUFJLEdBQUVDLHNEQUFRLGVBQXZCO0FBQ0EsWUFBTUMsS0FBSyxHQUFHQyxnREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxDQUFkO0FBQ0EsWUFBTUMsT0FBTyxHQUFHO0FBQUVTO0FBQUYsT0FBaEI7QUFDQSxZQUFNUCxPQUFPLEdBQUc7QUFBRUEsZUFBTyxFQUFFO0FBQUVDLHVCQUFhLEVBQUVOO0FBQWpCO0FBQVgsT0FBaEI7QUFDQSxZQUFNUSw0Q0FBSyxDQUFDSyxJQUFOLENBQVdmLEdBQVgsRUFBZ0JLLE9BQWhCLEVBQXlCRSxPQUF6QixDQUFOO0FBQ0FaLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsS0FSRCxDQVFFLE9BQU9xQixLQUFQLEVBQWM7QUFDZEMsd0VBQVcsQ0FBQ0QsS0FBRCxFQUFRRSxNQUFNLENBQUNDLEtBQWYsQ0FBWDtBQUNELEtBVkQsU0FVVTtBQUNSdEIsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGOztBQUVELFNBQ0UsTUFBQyx5REFBRDtBQUFTLFdBQU8sRUFBRUQsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFDRSx3QkFBb0IsRUFBRUUsb0JBRHhCO0FBRUUsUUFBSSxFQUFFVCxJQUZSO0FBR0UsWUFBUSxFQUFFQyxZQUhaO0FBSUUsV0FBTyxFQUFFSSxPQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FLE1BQUMsb0VBQUQ7QUFDRSxZQUFRLEVBQUVKLFlBRFo7QUFFRSxrQkFBYyxFQUFFdUIsY0FGbEI7QUFHRSxXQUFPLEVBQUVuQixPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGO0FBZUQ7O0FBRURQLElBQUksQ0FBQ2lDLGVBQUwsR0FBdUIsTUFBTUMsR0FBTixJQUFhO0FBQ2xDLFFBQU07QUFBRW5CO0FBQUYsTUFBWW9CLDREQUFZLENBQUNELEdBQUQsQ0FBOUI7O0FBQ0EsTUFBSSxDQUFDbkIsS0FBTCxFQUFZO0FBQ1YsV0FBTztBQUFFZCxjQUFRLEVBQUU7QUFBWixLQUFQO0FBQ0Q7O0FBQ0QsUUFBTVksR0FBRyxHQUFJLEdBQUVDLHNEQUFRLFdBQXZCO0FBQ0EsUUFBTUksT0FBTyxHQUFHO0FBQUVFLFdBQU8sRUFBRTtBQUFFQyxtQkFBYSxFQUFFTjtBQUFqQjtBQUFYLEdBQWhCO0FBQ0EsUUFBTU8sUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNOLEdBQU4sQ0FBVUosR0FBVixFQUFlSyxPQUFmLENBQXZCO0FBQ0EsU0FBTztBQUFFakIsWUFBUSxFQUFFcUIsUUFBUSxDQUFDRztBQUFyQixHQUFQO0FBQ0QsQ0FURDs7QUFXZXpCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlZ21lbnQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYXJ0SXRlbUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydC9DYXJ0SXRlbUxpc3RcIjtcbmltcG9ydCBDYXJ0U3VtbWFyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0L0NhcnRTdW1tYXJ5XCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuLi91dGlscy9jYXRjaEVycm9yc1wiO1xuXG5mdW5jdGlvbiBDYXJ0KHsgcHJvZHVjdHMsIHVzZXIgfSkge1xuICBjb25zdCBbY2FydFByb2R1Y3RzLCBzZXRDYXJ0UHJvZHVjdHNdID0gUmVhY3QudXNlU3RhdGUocHJvZHVjdHMpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVSZW1vdmVGcm9tQ2FydChwcm9kdWN0SWQpIHtcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvY2FydGA7XG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHBhcmFtczogeyBwcm9kdWN0SWQgfSxcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfVxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUodXJsLCBwYXlsb2FkKTtcbiAgICBzZXRDYXJ0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGVja291dChwYXltZW50RGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL2NoZWNrb3V0YDtcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xuICAgICAgY29uc3QgcGF5bG9hZCA9IHsgcGF5bWVudERhdGEgfTtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSB9O1xuICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHBheWxvYWQsIGhlYWRlcnMpO1xuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2F0Y2hFcnJvcnMoZXJyb3IsIHdpbmRvdy5hbGVydCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNlZ21lbnQgbG9hZGluZz17bG9hZGluZ30+XG4gICAgICA8Q2FydEl0ZW1MaXN0XG4gICAgICAgIGhhbmRsZVJlbW92ZUZyb21DYXJ0PXtoYW5kbGVSZW1vdmVGcm9tQ2FydH1cbiAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgcHJvZHVjdHM9e2NhcnRQcm9kdWN0c31cbiAgICAgICAgc3VjY2Vzcz17c3VjY2Vzc31cbiAgICAgIC8+XG4gICAgICA8Q2FydFN1bW1hcnlcbiAgICAgICAgcHJvZHVjdHM9e2NhcnRQcm9kdWN0c31cbiAgICAgICAgaGFuZGxlQ2hlY2tvdXQ9e2hhbmRsZUNoZWNrb3V0fVxuICAgICAgICBzdWNjZXNzPXtzdWNjZXNzfVxuICAgICAgLz5cbiAgICA8L1NlZ21lbnQ+XG4gICk7XG59XG5cbkNhcnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4geyBwcm9kdWN0czogW10gfTtcbiAgfVxuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvY2FydGA7XG4gIGNvbnN0IHBheWxvYWQgPSB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHBheWxvYWQpO1xuICByZXR1cm4geyBwcm9kdWN0czogcmVzcG9uc2UuZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

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

/***/ "./utils/calculateCartTotal.js":
/*!*************************************!*\
  !*** ./utils/calculateCartTotal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction calculateCartTotal(products) {\n  const total = products.reduce((acc, el) => {\n    acc += el.product.price * el.quantity;\n    return acc;\n  }, 0);\n  const cartTotal = (total * 100 / 100).toFixed(2);\n  const stripeTotal = Number((total * 100).toFixed(2));\n  return {\n    cartTotal,\n    stripeTotal\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculateCartTotal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jYWxjdWxhdGVDYXJ0VG90YWwuanM/ZGY3YiJdLCJuYW1lcyI6WyJjYWxjdWxhdGVDYXJ0VG90YWwiLCJwcm9kdWN0cyIsInRvdGFsIiwicmVkdWNlIiwiYWNjIiwiZWwiLCJwcm9kdWN0IiwicHJpY2UiLCJxdWFudGl0eSIsImNhcnRUb3RhbCIsInRvRml4ZWQiLCJzdHJpcGVUb3RhbCIsIk51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxTQUFTQSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsUUFBTUMsS0FBSyxHQUFHRCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsQ0FBQ0MsR0FBRCxFQUFNQyxFQUFOLEtBQWE7QUFDekNELE9BQUcsSUFBSUMsRUFBRSxDQUFDQyxPQUFILENBQVdDLEtBQVgsR0FBbUJGLEVBQUUsQ0FBQ0csUUFBN0I7QUFDQSxXQUFPSixHQUFQO0FBQ0QsR0FIYSxFQUdYLENBSFcsQ0FBZDtBQUlBLFFBQU1LLFNBQVMsR0FBRyxDQUFFUCxLQUFLLEdBQUcsR0FBVCxHQUFnQixHQUFqQixFQUFzQlEsT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FBbEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQyxDQUFDVixLQUFLLEdBQUcsR0FBVCxFQUFjUSxPQUFkLENBQXNCLENBQXRCLENBQUQsQ0FBMUI7QUFFQSxTQUFPO0FBQUVELGFBQUY7QUFBYUU7QUFBYixHQUFQO0FBQ0Q7O0FBRWNYLGlGQUFmIiwiZmlsZSI6Ii4vdXRpbHMvY2FsY3VsYXRlQ2FydFRvdGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FsY3VsYXRlQ2FydFRvdGFsKHByb2R1Y3RzKSB7XG4gIGNvbnN0IHRvdGFsID0gcHJvZHVjdHMucmVkdWNlKChhY2MsIGVsKSA9PiB7XG4gICAgYWNjICs9IGVsLnByb2R1Y3QucHJpY2UgKiBlbC5xdWFudGl0eTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCAwKTtcbiAgY29uc3QgY2FydFRvdGFsID0gKCh0b3RhbCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gIGNvbnN0IHN0cmlwZVRvdGFsID0gTnVtYmVyKCh0b3RhbCAqIDEwMCkudG9GaXhlZCgyKSk7XG5cbiAgcmV0dXJuIHsgY2FydFRvdGFsLCBzdHJpcGVUb3RhbCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVDYXJ0VG90YWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/calculateCartTotal.js\n");

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction catchErrors(error, displayError) {\n  let errorMsg;\n\n  if (error.response) {\n    // The request was made and the server responsed with a status code that is not in the range of 2XX\n    errorMsg = error.response.data;\n    console.error(\"Error response\", errorMsg); // For Cloudinary image uploads\n\n    if (error.response.data.error) {\n      errorMsg = error.response.data.error.message;\n    }\n  } else if (error.request) {\n    // The request was made, but no response was received\n    errorMsg = error.request;\n    console.error(\"Error request\", errorMsg);\n  } else {\n    // Something else happened in making the request that triggered an error\n    errorMsg = error.message;\n    console.error(\"Error message\", errorMsg);\n  }\n\n  displayError(errorMsg);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (catchErrors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jYXRjaEVycm9ycy5qcz9jNTQ1Il0sIm5hbWVzIjpbImNhdGNoRXJyb3JzIiwiZXJyb3IiLCJkaXNwbGF5RXJyb3IiLCJlcnJvck1zZyIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJtZXNzYWdlIiwicmVxdWVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsWUFBNUIsRUFBMEM7QUFDeEMsTUFBSUMsUUFBSjs7QUFDQSxNQUFJRixLQUFLLENBQUNHLFFBQVYsRUFBb0I7QUFDbEI7QUFDQUQsWUFBUSxHQUFHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUMsSUFBMUI7QUFDQUMsV0FBTyxDQUFDTCxLQUFSLENBQWMsZ0JBQWQsRUFBZ0NFLFFBQWhDLEVBSGtCLENBS2xCOztBQUNBLFFBQUlGLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxJQUFmLENBQW9CSixLQUF4QixFQUErQjtBQUM3QkUsY0FBUSxHQUFHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUMsSUFBZixDQUFvQkosS0FBcEIsQ0FBMEJNLE9BQXJDO0FBQ0Q7QUFDRixHQVRELE1BU08sSUFBSU4sS0FBSyxDQUFDTyxPQUFWLEVBQW1CO0FBQ3hCO0FBQ0FMLFlBQVEsR0FBR0YsS0FBSyxDQUFDTyxPQUFqQjtBQUNBRixXQUFPLENBQUNMLEtBQVIsQ0FBYyxlQUFkLEVBQStCRSxRQUEvQjtBQUNELEdBSk0sTUFJQTtBQUNMO0FBQ0FBLFlBQVEsR0FBR0YsS0FBSyxDQUFDTSxPQUFqQjtBQUNBRCxXQUFPLENBQUNMLEtBQVIsQ0FBYyxlQUFkLEVBQStCRSxRQUEvQjtBQUNEOztBQUNERCxjQUFZLENBQUNDLFFBQUQsQ0FBWjtBQUNEOztBQUVjSCwwRUFBZiIsImZpbGUiOiIuL3V0aWxzL2NhdGNoRXJyb3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2F0Y2hFcnJvcnMoZXJyb3IsIGRpc3BsYXlFcnJvcikge1xuICBsZXQgZXJyb3JNc2c7XG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbnNlZCB3aXRoIGEgc3RhdHVzIGNvZGUgdGhhdCBpcyBub3QgaW4gdGhlIHJhbmdlIG9mIDJYWFxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVzcG9uc2VcIiwgZXJyb3JNc2cpO1xuXG4gICAgLy8gRm9yIENsb3VkaW5hcnkgaW1hZ2UgdXBsb2Fkc1xuICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKSB7XG4gICAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlLCBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXF1ZXN0XCIsIGVycm9yTXNnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTb21ldGhpbmcgZWxzZSBoYXBwZW5lZCBpbiBtYWtpbmcgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gZXJyb3JcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1lc3NhZ2VcIiwgZXJyb3JNc2cpO1xuICB9XG4gIGRpc3BsYXlFcnJvcihlcnJvck1zZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/catchErrors.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCI/ZDk3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub29raWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nookies\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-stripe-checkout":
/*!****************************************!*\
  !*** external "react-stripe-checkout" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-stripe-checkout\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdHJpcGUtY2hlY2tvdXRcIj9iMTllIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXN0cmlwZS1jaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0cmlwZS1jaGVja291dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-stripe-checkout\n");

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