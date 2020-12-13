module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ \"shortid\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst {\n  String,\n  Number\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  sku: {\n    type: String,\n    unique: true,\n    default: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate()\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  mediaUrl: {\n    type: String,\n    required: true\n  }\n}); // prettier-ignore\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Product\", ProductSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvUHJvZHVjdC5qcz8xMDEyIl0sIm5hbWVzIjpbIlN0cmluZyIsIk51bWJlciIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiVHlwZXMiLCJQcm9kdWN0U2NoZW1hIiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsInByaWNlIiwic2t1IiwidW5pcXVlIiwiZGVmYXVsdCIsInNob3J0aWQiLCJnZW5lcmF0ZSIsImRlc2NyaXB0aW9uIiwibWVkaWFVcmwiLCJtb2RlbHMiLCJQcm9kdWN0IiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTTtBQUFFQSxRQUFGO0FBQVVDO0FBQVYsSUFBcUJDLCtDQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQTNDO0FBRUEsTUFBTUMsYUFBYSxHQUFHLElBQUlILCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDeENHLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUVQLE1BREY7QUFFSlEsWUFBUSxFQUFFO0FBRk4sR0FEa0M7QUFLeENDLE9BQUssRUFBRTtBQUNMRixRQUFJLEVBQUVOLE1BREQ7QUFFTE8sWUFBUSxFQUFFO0FBRkwsR0FMaUM7QUFTeENFLEtBQUcsRUFBRTtBQUNISCxRQUFJLEVBQUVQLE1BREg7QUFFSFcsVUFBTSxFQUFFLElBRkw7QUFHSEMsV0FBTyxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFSO0FBSE4sR0FUbUM7QUFjeENDLGFBQVcsRUFBRTtBQUNYUixRQUFJLEVBQUVQLE1BREs7QUFFWFEsWUFBUSxFQUFFO0FBRkMsR0FkMkI7QUFrQnhDUSxVQUFRLEVBQUU7QUFDUlQsUUFBSSxFQUFFUCxNQURFO0FBRVJRLFlBQVEsRUFBRTtBQUZGO0FBbEI4QixDQUFwQixDQUF0QixDLENBd0JBOztBQUNlTiw4R0FBUSxDQUFDZSxNQUFULENBQWdCQyxPQUFoQixJQUEyQmhCLCtDQUFRLENBQUNpQixLQUFULENBQWUsU0FBZixFQUEwQmQsYUFBMUIsQ0FBMUMiLCJmaWxlIjoiLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XG5cbmNvbnN0IHsgU3RyaW5nLCBOdW1iZXIgfSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcblxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHByaWNlOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHNrdToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgZGVmYXVsdDogc2hvcnRpZC5nZW5lcmF0ZSgpXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIG1lZGlhVXJsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH1cbn0pO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBQcm9kdWN0U2NoZW1hKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/Product.js\n");

/***/ }),

/***/ "./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Product */ \"./models/Product.js\");\n/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/connectDb */ \"./utils/connectDb.js\");\n// import products from \"../../static/products.json\";\n\n\nObject(_utils_connectDb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    page,\n    size\n  } = req.query; // Convert querystring values to numbers\n\n  const pageNum = Number(page);\n  const pageSize = Number(size);\n  let products = [];\n  const totalDocs = await _models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].countDocuments();\n  const totalPages = Math.ceil(totalDocs / pageSize);\n\n  if (pageNum === 1) {\n    products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().limit(pageSize);\n  } else {\n    const skips = pageSize * (pageNum - 1);\n    products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().skip(skips).limit(pageSize);\n  } // const products = await Product.find();\n\n\n  res.status(200).json({\n    products,\n    totalPages\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdHMuanM/ZjYzZiJdLCJuYW1lcyI6WyJjb25uZWN0RGIiLCJyZXEiLCJyZXMiLCJwYWdlIiwic2l6ZSIsInF1ZXJ5IiwicGFnZU51bSIsIk51bWJlciIsInBhZ2VTaXplIiwicHJvZHVjdHMiLCJ0b3RhbERvY3MiLCJQcm9kdWN0IiwiY291bnREb2N1bWVudHMiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJmaW5kIiwibGltaXQiLCJza2lwcyIsInNraXAiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsZ0VBQVM7QUFFTSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQWlCSCxHQUFHLENBQUNJLEtBQTNCLENBRGlDLENBRWpDOztBQUNBLFFBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDSixJQUFELENBQXRCO0FBQ0EsUUFBTUssUUFBUSxHQUFHRCxNQUFNLENBQUNILElBQUQsQ0FBdkI7QUFDQSxNQUFJSyxRQUFRLEdBQUcsRUFBZjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxNQUFNQyx1REFBTyxDQUFDQyxjQUFSLEVBQXhCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsU0FBUyxHQUFHRixRQUF0QixDQUFuQjs7QUFDQSxNQUFJRixPQUFPLEtBQUssQ0FBaEIsRUFBbUI7QUFDakJHLFlBQVEsR0FBRyxNQUFNRSx1REFBTyxDQUFDSyxJQUFSLEdBQWVDLEtBQWYsQ0FBcUJULFFBQXJCLENBQWpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsVUFBTVUsS0FBSyxHQUFHVixRQUFRLElBQUlGLE9BQU8sR0FBRyxDQUFkLENBQXRCO0FBQ0FHLFlBQVEsR0FBRyxNQUFNRSx1REFBTyxDQUFDSyxJQUFSLEdBQ2RHLElBRGMsQ0FDVEQsS0FEUyxFQUVkRCxLQUZjLENBRVJULFFBRlEsQ0FBakI7QUFHRCxHQWZnQyxDQWdCakM7OztBQUNBTixLQUFHLENBQUNrQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVosWUFBRjtBQUFZSTtBQUFaLEdBQXJCO0FBQ0QsQ0FsQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uL3N0YXRpYy9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vbW9kZWxzL1Byb2R1Y3RcIjtcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIi4uLy4uL3V0aWxzL2Nvbm5lY3REYlwiO1xuXG5jb25uZWN0RGIoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgcGFnZSwgc2l6ZSB9ID0gcmVxLnF1ZXJ5O1xuICAvLyBDb252ZXJ0IHF1ZXJ5c3RyaW5nIHZhbHVlcyB0byBudW1iZXJzXG4gIGNvbnN0IHBhZ2VOdW0gPSBOdW1iZXIocGFnZSk7XG4gIGNvbnN0IHBhZ2VTaXplID0gTnVtYmVyKHNpemUpO1xuICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgY29uc3QgdG90YWxEb2NzID0gYXdhaXQgUHJvZHVjdC5jb3VudERvY3VtZW50cygpO1xuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsRG9jcyAvIHBhZ2VTaXplKTtcbiAgaWYgKHBhZ2VOdW0gPT09IDEpIHtcbiAgICBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpLmxpbWl0KHBhZ2VTaXplKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBza2lwcyA9IHBhZ2VTaXplICogKHBhZ2VOdW0gLSAxKTtcbiAgICBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpXG4gICAgICAuc2tpcChza2lwcylcbiAgICAgIC5saW1pdChwYWdlU2l6ZSk7XG4gIH1cbiAgLy8gY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBwcm9kdWN0cywgdG90YWxQYWdlcyB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/products.js\n");

/***/ }),

/***/ "./utils/connectDb.js":
/*!****************************!*\
  !*** ./utils/connectDb.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function connectDb() {\n  if (connection.isConnected) {\n    // Use existing database connection\n    console.log(\"Using existing connection\");\n    return;\n  } // Use new database connection\n\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://JanOlsson:Ma18031803@cluster0-ngaab.mongodb.net/test?retryWrites=true&w=majority\", {\n    useCreateIndex: true,\n    useFindAndModify: false,\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  console.log(\"DB Connected\");\n  connection.isConnected = db.connections[0].readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDb);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0RGIuanM/YWU3ZCJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiY29ubmVjdERiIiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE1BQU1BLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlQyxTQUFmLEdBQTJCO0FBQ3pCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUMxQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBO0FBQ0QsR0FMd0IsQ0FNekI7OztBQUNBLFFBQU1DLEVBQUUsR0FBRyxNQUFNQywrQ0FBUSxDQUFDQyxPQUFULENBQWlCQyxnR0FBakIsRUFBd0M7QUFDdkRDLGtCQUFjLEVBQUUsSUFEdUM7QUFFdkRDLG9CQUFnQixFQUFFLEtBRnFDO0FBR3ZEQyxtQkFBZSxFQUFFLElBSHNDO0FBSXZEQyxzQkFBa0IsRUFBRTtBQUptQyxHQUF4QyxDQUFqQjtBQU1BVCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FKLFlBQVUsQ0FBQ0UsV0FBWCxHQUF5QkcsRUFBRSxDQUFDUSxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDRDs7QUFFY2Isd0VBQWYiLCJmaWxlIjoiLi91dGlscy9jb25uZWN0RGIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5jb25zdCBjb25uZWN0aW9uID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYigpIHtcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICAvLyBVc2UgZXhpc3RpbmcgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZXhpc3RpbmcgY29ubmVjdGlvblwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gVXNlIG5ldyBkYXRhYmFzZSBjb25uZWN0aW9uXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19TUlYsIHtcbiAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gIH0pO1xuICBjb25zb2xlLmxvZyhcIkRCIENvbm5lY3RlZFwiKTtcbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/connectDb.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shortid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCI/YmVlYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzaG9ydGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///shortid\n");

/***/ })

/******/ });