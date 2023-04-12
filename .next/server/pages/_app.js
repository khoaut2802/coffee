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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apis/cart.js":
/*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/cart";
const fetchCartData = cartId => {
  let endpoint = cartId ? _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}` : _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdCartData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("productId", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addCartData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeCartData = cartId => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};
const updateCartData = (cartId, data) => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].patch(endpoint, data);
};

/***/ }),

/***/ "./src/apis/wishlist.js":
/*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
/*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishlistData", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdWishlistData", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishlistData", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistData", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/wishlist";
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addWishlistData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};

/***/ }),

/***/ "./src/common/axiosService.js":
/*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

class AxiosService {
  constructor() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }
  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url) {
    return this.instance.get(url);
  }
  post(url, body) {
    return this.instance.post(url, body);
  }
  patch(url, body) {
    return this.instance.patch(url, body);
  }
  delete(url) {
    return this.instance.delete(url);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new AxiosService());

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "http://localhost:6969";

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderParam", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDash", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatCurrency = (price, locales = "vi", currency = "VND") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
};
const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }
  return "";
};
const formatDate = (date, inputFormat = "YYYY-MM-DD", outputFormat = "MMM DD, YYYY") => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, inputFormat).format(outputFormat);
};
const removeDash = str => {
  return str.replace(/-/g, " ");
};

/***/ }),

/***/ "./src/common/withReduxStore.js":
/*!**************************************!*\
  !*** ./src/common/withReduxStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withReduxStor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\common\\withReduxStore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";
function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}
function withReduxStor(App) {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }
      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }
    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }));
    }
  };
}

/***/ }),

/***/ "./src/components/other/FetchInitData.js":
/*!***********************************************!*\
  !*** ./src/components/other/FetchInitData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchInitData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");




function FetchInitData({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["fetchCartRequest"])());
    dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__["fetchWishListRequest"])());
  }, []);
  return children;
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/antd.less */ "./src/styles/antd.less");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/withReduxStore */ "./src/common/withReduxStore.js");
/* harmony import */ var _components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/other/FetchInitData */ "./src/components/other/FetchInitData.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



// import Loading from "../components/other/Loading";


const App = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: reduxStore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__["default"])(App));

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_FILTER", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_FILTER", function() { return BLOG_FILTER; });
const SHOP = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
  FETCH_SALE_PRODUCTS: "FETCH_SALE_PRODUCTS",
  FETCH_SALE_PRODUCTS_SUCCESS: "FETCH_SALE_PRODUCTS_SUCCESS",
  FETCH_SALE_PRODUCTS_FAIL: "FETCH_SALE_PRODUCTS_FAIL",
  FETCH_FEATURED_PRODUCTS: "FETCH_FEATURED_PRODUCTS",
  FETCH_FEATURED_PRODUCTS_SUCCESS: "FETCH_FEATURED_PRODUCTS_SUCCESS",
  FETCH_FEATURED_PRODUCTS_FAIL: "FETCH_FEATURED_PRODUCTS_FAIL",
  FETCH_BEST_SELLER_PRODUCTS: "FETCH_BEST_SELLER_PRODUCTS",
  FETCH_BEST_SELLER_PRODUCTS_SUCCESS: "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
  FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
  FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
  FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
  FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
  FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
  FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
  FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL"
};
const BLOG = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL",
  FETCH_POST_DETAIL: "FETCH_POST_DETAIL",
  FETCH_POST_DETAIL_SUCCESS: "FETCH_POST_DETAIL_SUCCESS",
  FETCH_POST_DETAIL_FAIL: "FETCH_POST_DETAIL_FAIL",
  FETCH_RECENT_POSTS: "FETCH_RECENT_POSTS",
  FETCH_RECENT_POSTS_SUCCESS: "FETCH_RECENT_POSTS_SUCCESS",
  FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL"
};
const SHOP_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_SORT: "SET_SORT",
  SET_SHOW: "SET_SHOW",
  SET_VIEW: "SET_VIEW",
  SET_CATEGORY: "SET_CATEGORY",
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TAG: "SET_TAG"
};
const CART = {
  FETCH_CART: "FETCH_CART",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAIL: "FETCH_CART_FAIL"
};
const WISHLIST = {
  FETCH_WISHLIST: "FETCH_WISHLIST",
  FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
  FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL"
};
const COMPARE = {
  ADD_TO_COMPARE: "ADD_TO_COMPARE",
  REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE"
};
const BLOG_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_TAG: "SET_TAG"
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartSuccess", function() { return fetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartFail", function() { return fetchCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartRequest", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");



//Get cart data
const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]().then(res => {
      dispatch(fetchCartSuccess(res.data));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: fetchWishListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishListRequest", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/wishlist */ "./src/apis/wishlist.js");



//Get cart data
const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST
});
const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});
const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});
const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/reducers/blogFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/blogFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initialState = {
  category: "",
  tag: ""
};
function blogFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].RESET_FILTERS:
      return {
        category: "",
        tag: ""
      };
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/blogReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/blogReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initialState = {
  allPosts: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  recentPosts: {
    loading: true,
    data: [],
    error: false
  },
  postDetail: {
    loading: true,
    data: [],
    error: false
  }
};
function blogReducer(state = initialState, action) {
  switch (action.type) {
    //All posts
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Recent posts
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Post detail
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          error: true
        })
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initialState = {
  loading: true,
  data: [],
  error: false
};
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART:
      return {
        loading: true,
        data: [],
        error: false
      };
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/compareReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/compareReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const initialState = [];
function compareReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE:
      if (!state.includes(action.payload.data)) {
        if (state.legth <= 3) {
          return [action.payload.data, ...state];
        } else {
          return [action.payload.data, ...state.slice(0, 2)];
        }
      }
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE:
      const compareItem = state.find(item => item.id === action.payload.productId);
      const compareItemIndex = compareItem && state.indexOf(compareItem);
      return [...state.slice(0, compareItemIndex), ...state.slice(compareItemIndex + 1)];
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareReducer */ "./src/redux/reducers/compareReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlistReducer */ "./src/redux/reducers/wishlistReducer.js");
/* harmony import */ var _shopReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopReducer */ "./src/redux/reducers/shopReducer.js");
/* harmony import */ var _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopFilterReducer */ "./src/redux/reducers/shopFilterReducer.js");
/* harmony import */ var _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogFilterReducer */ "./src/redux/reducers/blogFilterReducer.js");
/* harmony import */ var _blogReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogReducer */ "./src/redux/reducers/blogReducer.js");








const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  blogFilterReducer: _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  blogReducer: _blogReducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  shopReducer: _shopReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  shopFilterReducer: _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  compareReducer: _compareReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  wishlistReducer: _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/shopFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/shopFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initialState = {
  sort: {},
  show: "10",
  view: "grid",
  category: "",
  color: "",
  size: "",
  tag: ""
};
function shopFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].RESET_FILTERS:
      return {
        sort: {},
        show: "10",
        view: "grid",
        category: "",
        color: "",
        size: "",
        tag: ""
      };
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SORT:
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.sort
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SHOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        show: action.show
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_VIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.view
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_COLOR:
      return _objectSpread(_objectSpread({}, state), {}, {
        color: action.color
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SIZE:
      return _objectSpread(_objectSpread({}, state), {}, {
        size: action.size
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/shopReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/shopReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initialState = {
  products: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  saleProducts: {
    loading: true,
    data: [],
    error: false
  },
  featuredProducts: {
    loading: true,
    data: [],
    error: false
  },
  bestSellerProducts: {
    loading: true,
    data: [],
    error: false
  },
  daleProducts: {
    loading: true,
    data: [],
    error: false
  },
  productDetail: {
    loading: true,
    data: [],
    error: false
  },
  searchedProducts: {
    loading: true,
    data: [],
    error: false
  }
};
function shopReducer(state = initialState, action) {
  switch (action.type) {
    //All products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: {
          loading: true,
          data: [],
          error: false,
          count: 0
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          error: true
        })
      });
    //Sale products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Featured products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Best seller products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Dale products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Product detail
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          error: true
        })
      });
    //Searched products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: {
          loading: true,
          data: [],
          error: false
        }
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Defaul case
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/wishlistReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/wishlistReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WISHLISTReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const initialState = {
  loading: true,
  data: [],
  error: false
};
function WISHLISTReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST:
      return {
        loading: true,
        data: [],
        error: false
      };
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/redux/reducers/rootReducer.js");




const createdStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
const initializeStore = (initialState = {}) => {
  return createdStore;
};

/***/ }),

/***/ "./src/styles/antd.less":
/*!******************************!*\
  !*** ./src/styles/antd.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F4aW9zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhSZWR1eFN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoSW5pdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYmxvZ0ZpbHRlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Jsb2dSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY29tcGFyZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zaG9wRmlsdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2hvcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3dpc2hsaXN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInVybCIsImZldGNoQ2FydERhdGEiLCJjYXJ0SWQiLCJlbmRwb2ludCIsIkFQSV9VUkwiLCJheGlvc1NlcnZpY2UiLCJnZXQiLCJmZXRjaFByb2R1Y3RJZENhcnREYXRhIiwicGlkIiwicmVuZGVyUGFyYW0iLCJhZGRDYXJ0RGF0YSIsImRhdGEiLCJwb3N0IiwicmVtb3ZlQ2FydERhdGEiLCJkZWxldGUiLCJ1cGRhdGVDYXJ0RGF0YSIsInBhdGNoIiwiZmV0Y2hXaXNobGlzdERhdGEiLCJmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSIsImFkZFdpc2hsaXN0RGF0YSIsInJlbW92ZVdpc2hsaXN0RGF0YSIsIkF4aW9zU2VydmljZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiYm9keSIsImZvcm1hdEN1cnJlbmN5IiwicHJpY2UiLCJsb2NhbGVzIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJmb3JtYXQiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsIm1vbWVudCIsInJlbW92ZURhc2giLCJzdHIiLCJyZXBsYWNlIiwiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJ3aXRoUmVkdXhTdG9yIiwiQXBwIiwiQXBwV2l0aFJlZHV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiX29iamVjdFNwcmVhZCIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJwcm9wcyIsInJlbmRlciIsIl9fanN4IiwiX2V4dGVuZHMiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkZldGNoSW5pdERhdGEiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaENhcnRSZXF1ZXN0IiwiZmV0Y2hXaXNoTGlzdFJlcXVlc3QiLCJwYWdlUHJvcHMiLCJQcm92aWRlciIsInN0b3JlIiwid2l0aFJlZHV4U3RvcmUiLCJTSE9QIiwiRkVUQ0hfUFJPRFVDVFMiLCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1NBTEVfUFJPRFVDVFMiLCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFMiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0RBTEVfUFJPRFVDVFMiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFMiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTCIsIkJMT0ciLCJGRVRDSF9QT1NUUyIsIkZFVENIX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9QT1NUU19GQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUwiLCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTCIsIkZFVENIX1JFQ0VOVF9QT1NUUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUwiLCJTSE9QX0ZJTFRFUiIsIlJFU0VUX0ZJTFRFUlMiLCJTRVRfU09SVCIsIlNFVF9TSE9XIiwiU0VUX1ZJRVciLCJTRVRfQ0FURUdPUlkiLCJTRVRfQ09MT1IiLCJTRVRfU0laRSIsIlNFVF9UQUciLCJDQVJUIiwiRkVUQ0hfQ0FSVCIsIkZFVENIX0NBUlRfU1VDQ0VTUyIsIkZFVENIX0NBUlRfRkFJTCIsIldJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1QiLCJGRVRDSF9XSVNITElTVF9TVUNDRVNTIiwiRkVUQ0hfV0lTSExJU1RfRkFJTCIsIkNPTVBBUkUiLCJBRERfVE9fQ09NUEFSRSIsIlJFTU9WRV9GUk9NX0NPTVBBUkUiLCJCTE9HX0ZJTFRFUiIsImZldGNoQ2FydCIsInR5cGUiLCJmZXRjaENhcnRTdWNjZXNzIiwicGF5bG9hZCIsImZldGNoQ2FydEZhaWwiLCJlcnIiLCJjYXJ0QXBpcyIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImZldGNoV2lzaExpc3QiLCJmZXRjaFdpc2hMaXN0U3VjY2VzcyIsImZldGNoV2lzaExpc3RGYWlsIiwid2lzaGxpc3RBcGlzIiwiY2F0ZWdvcnkiLCJ0YWciLCJibG9nRmlsdGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiYWxsUG9zdHMiLCJsb2FkaW5nIiwiY291bnQiLCJyZWNlbnRQb3N0cyIsInBvc3REZXRhaWwiLCJibG9nUmVkdWNlciIsInBvc3RDb3VudCIsImNhcnRSZWR1Y2VyIiwiY29tcGFyZVJlZHVjZXIiLCJpbmNsdWRlcyIsImxlZ3RoIiwic2xpY2UiLCJjb21wYXJlSXRlbSIsImZpbmQiLCJpdGVtIiwiaWQiLCJwcm9kdWN0SWQiLCJjb21wYXJlSXRlbUluZGV4IiwiaW5kZXhPZiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwic2hvcFJlZHVjZXIiLCJzaG9wRmlsdGVyUmVkdWNlciIsIndpc2hsaXN0UmVkdWNlciIsInNvcnQiLCJzaG93IiwidmlldyIsImNvbG9yIiwic2l6ZSIsInByb2R1Y3RzIiwic2FsZVByb2R1Y3RzIiwiZmVhdHVyZWRQcm9kdWN0cyIsImJlc3RTZWxsZXJQcm9kdWN0cyIsImRhbGVQcm9kdWN0cyIsInByb2R1Y3REZXRhaWwiLCJzZWFyY2hlZFByb2R1Y3RzIiwicHJvZHVjdENvdW50IiwiV0lTSExJU1RSZWR1Y2VyIiwiY3JlYXRlZFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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QyxLQUFLO0VBQ3BELE9BQU9tSixZQUFZO0FBQ3JCLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2NhcnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhcnREYXRhID0gKGNhcnRJZCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IGNhcnRJZCA/IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWAgOiBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RJZENhcnREYXRhID0gKHBpZCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwicHJvZHVjdElkXCIsIHBpZCk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENhcnREYXRhID0gKGRhdGEpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmRlbGV0ZShlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydERhdGEgPSAoY2FydElkLCBkYXRhKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBhdGNoKGVuZHBvaW50LCBkYXRhKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvd2lzaGxpc3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hsaXN0RGF0YSA9ICgpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcImlkXCIsIHBpZCk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFdpc2hsaXN0RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke3BpZH1gO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZGVsZXRlKGVuZHBvaW50KTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY2xhc3MgQXhpb3NTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKCk7XHJcbiAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlU3VjY2VzcywgdGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcihlcnJvcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldCh1cmwpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGJvZHkpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnBvc3QodXJsLCBib2R5KTtcclxuICB9XHJcblxyXG4gIHBhdGNoKHVybCwgYm9keSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucGF0Y2godXJsLCBib2R5KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSh1cmwpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlbGV0ZSh1cmwpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF4aW9zU2VydmljZSgpO1xyXG4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo2OTY5XCI7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKHByaWNlLCBsb2NhbGVzID0gXCJ2aVwiLCBjdXJyZW5jeSA9IFwiVk5EXCIpID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcclxuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICBjdXJyZW5jeTogY3VycmVuY3ksXHJcbiAgfSkuZm9ybWF0KHByaWNlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJQYXJhbSA9IChwYXJhbU5hbWUsIHBhcmFtVmFsdWUpID0+IHtcclxuICBpZiAocGFyYW1WYWx1ZSAmJiBwYXJhbVZhbHVlICE9PSBcIlwiICYmIHBhcmFtVmFsdWUgIT09IG51bGwpIHtcclxuICAgIHJldHVybiBgJiR7cGFyYW1OYW1lfT0ke3BhcmFtVmFsdWV9YDtcclxuICB9XHJcbiAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChcclxuICBkYXRlLFxyXG4gIGlucHV0Rm9ybWF0ID0gXCJZWVlZLU1NLUREXCIsXHJcbiAgb3V0cHV0Rm9ybWF0ID0gXCJNTU0gREQsIFlZWVlcIlxyXG4pID0+IHtcclxuICByZXR1cm4gbW9tZW50KGRhdGUsIGlucHV0Rm9ybWF0KS5mb3JtYXQob3V0cHV0Rm9ybWF0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVEYXNoID0gKHN0cikgPT4ge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvLS9nLCBcIiBcIik7XHJcbn07XHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVTdG9yZSB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5jb25zdCBfX05FWFRfUkVEVVhfU1RPUkVfXyA9IFwiX19ORVhUX1JFRFVYX1NUT1JFX19cIjtcclxuXHJcbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgLy8gQWx3YXlzIG1ha2UgYSBuZXcgc3RvcmUgaWYgc2VydmVyLCBvdGhlcndpc2Ugc3RhdGUgaXMgc2hhcmVkIGJldHdlZW4gcmVxdWVzdHNcclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIHJldHVybiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBzdG9yZSBpZiB1bmF2YWlsYWJsZSBvbiB0aGUgY2xpZW50IGFuZCBzZXQgaXQgb24gdGhlIHdpbmRvdyBvYmplY3RcclxuICBpZiAoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pIHtcclxuICAgIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10gPSBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcbiAgcmV0dXJuIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSZWR1eFN0b3IoQXBwKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcclxuICAgICAgLy8gR2V0IG9yIENyZWF0ZSB0aGUgc3RvcmUgd2l0aCBgdW5kZWZpbmVkYCBhcyBpbml0aWFsU3RhdGVcclxuICAgICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIHNldCBhIGN1c3RvbSBkZWZhdWx0IGluaXRpYWxTdGF0ZVxyXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xyXG5cclxuICAgICAgLy8gUHJvdmlkZSB0aGUgc3RvcmUgdG8gZ2V0SW5pdGlhbFByb3BzIG9mIHBhZ2VzXHJcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlO1xyXG5cclxuICAgICAgbGV0IGFwcFByb3BzID0ge307XHJcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFwcFByb3BzLFxyXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfSByZWR1eFN0b3JlPXt0aGlzLnJlZHV4U3RvcmV9IC8+O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGZldGNoV2lzaExpc3RSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZXRjaEluaXREYXRhKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKTtcclxuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RSZXF1ZXN0KCkpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9hbnRkLmxlc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCI7XHJcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0xvYWRpbmdcIjtcclxuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gXCIuLi9jb21tb24vd2l0aFJlZHV4U3RvcmVcIjtcclxuaW1wb3J0IEZldGNoSW5pdERhdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3RoZXIvRmV0Y2hJbml0RGF0YVwiO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxyXG4gICAgICA8RmV0Y2hJbml0RGF0YT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvRmV0Y2hJbml0RGF0YT5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKEFwcCk7XHJcbiIsImV4cG9ydCBjb25zdCBTSE9QID0ge1xyXG4gIEZFVENIX1BST0RVQ1RTOiBcIkZFVENIX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9QUk9EVUNUU19GQUlMXCIsXHJcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUxcIixcclxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU1wiLFxyXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTFwiLFxyXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMXCIsXHJcbiAgRkVUQ0hfREFMRV9QUk9EVUNUUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUxcIixcclxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTFwiLFxyXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTFwiLFxyXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQkxPRyA9IHtcclxuICBGRVRDSF9QT1NUUzogXCJGRVRDSF9QT1NUU1wiLFxyXG4gIEZFVENIX1BPU1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUE9TVFNfRkFJTFwiLFxyXG4gIEZFVENIX1BPU1RfREVUQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMXCIsXHJcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUzogXCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QT1NUX0RFVEFJTF9GQUlMXCIsXHJcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU1wiLFxyXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUxcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9QX0ZJTFRFUiA9IHtcclxuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcclxuICBTRVRfU09SVDogXCJTRVRfU09SVFwiLFxyXG4gIFNFVF9TSE9XOiBcIlNFVF9TSE9XXCIsXHJcbiAgU0VUX1ZJRVc6IFwiU0VUX1ZJRVdcIixcclxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXHJcbiAgU0VUX0NPTE9SOiBcIlNFVF9DT0xPUlwiLFxyXG4gIFNFVF9TSVpFOiBcIlNFVF9TSVpFXCIsXHJcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0FSVCA9IHtcclxuICBGRVRDSF9DQVJUOiBcIkZFVENIX0NBUlRcIixcclxuICBGRVRDSF9DQVJUX1NVQ0NFU1M6IFwiRkVUQ0hfQ0FSVF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfQ0FSVF9GQUlMOiBcIkZFVENIX0NBUlRfRkFJTFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xyXG4gIEZFVENIX1dJU0hMSVNUOiBcIkZFVENIX1dJU0hMSVNUXCIsXHJcbiAgRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUzogXCJGRVRDSF9XSVNITElTVF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfV0lTSExJU1RfRkFJTDogXCJGRVRDSF9XSVNITElTVF9GQUlMXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09NUEFSRSA9IHtcclxuICBBRERfVE9fQ09NUEFSRTogXCJBRERfVE9fQ09NUEFSRVwiLFxyXG4gIFJFTU9WRV9GUk9NX0NPTVBBUkU6IFwiUkVNT1ZFX0ZST01fQ09NUEFSRVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJMT0dfRklMVEVSID0ge1xyXG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxyXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcclxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcclxufTtcclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgY2FydEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvY2FydFwiO1xyXG5cclxuLy9HZXQgY2FydCBkYXRhXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhcnQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RmFpbCA9IChlcnIpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0KCkpO1xyXG4gICAgY2FydEFwaXNcclxuICAgICAgLmZldGNoQ2FydERhdGEoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0U3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydEZhaWwoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IFdJU0hMSVNUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB3aXNobGlzdEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvd2lzaGxpc3RcIjtcclxuXHJcbi8vR2V0IGNhcnQgZGF0YVxyXG5jb25zdCBmZXRjaFdpc2hMaXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVCxcclxufSk7XHJcblxyXG5jb25zdCBmZXRjaFdpc2hMaXN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGZldGNoV2lzaExpc3RGYWlsID0gKGVycikgPT4gKHtcclxuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVF9GQUlMLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGVycixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hMaXN0UmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0KCkpO1xyXG4gICAgd2lzaGxpc3RBcGlzXHJcbiAgICAgIC5mZXRjaFdpc2hsaXN0RGF0YSgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0U3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RGYWlsKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCTE9HX0ZJTFRFUiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNhdGVnb3J5OiBcIlwiLFxyXG4gIHRhZzogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2dGaWx0ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEJMT0dfRklMVEVSLlJFU0VUX0ZJTFRFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgdGFnOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HX0ZJTFRFUi5TRVRfQ0FURUdPUlk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGlvbi5jYXRlZ29yeSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPR19GSUxURVIuU0VUX1RBRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YWc6IGFjdGlvbi50YWcsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJMT0cgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhbGxQb3N0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlLCBjb3VudDogMCB9LFxyXG4gIHJlY2VudFBvc3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICBwb3N0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2dSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAvL0FsbCBwb3N0c1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsbFBvc3RzOiB7XHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsbFBvc3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5hbGxQb3N0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICAgIGNvdW50OiBhY3Rpb24ucGF5bG9hZC5wb3N0Q291bnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUU19GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsbFBvc3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5hbGxQb3N0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vUmVjZW50IHBvc3RzXHJcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHJlY2VudFBvc3RzOiB7XHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPRy5GRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZWNlbnRQb3N0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucmVjZW50UG9zdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQucG9zdENvdW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcmVjZW50UG9zdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnJlY2VudFBvc3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9Qb3N0IGRldGFpbFxyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHBvc3REZXRhaWw6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9zdERldGFpbDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucG9zdERldGFpbCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9zdERldGFpbDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucG9zdERldGFpbCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJ0UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDQVJULkZFVENIX0NBUlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENBUlQuRkVUQ0hfQ0FSVF9GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT01QQVJFIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENPTVBBUkUuQUREX1RPX0NPTVBBUkU6XHJcbiAgICAgIGlmICghc3RhdGUuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuZGF0YSkpIHtcclxuICAgICAgICBpZiAoc3RhdGUubGVndGggPD0gMykge1xyXG4gICAgICAgICAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZC5kYXRhLCAuLi5zdGF0ZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBbYWN0aW9uLnBheWxvYWQuZGF0YSwgLi4uc3RhdGUuc2xpY2UoMCwgMildO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgY2FzZSBDT01QQVJFLlJFTU9WRV9GUk9NX0NPTVBBUkU6XHJcbiAgICAgIGNvbnN0IGNvbXBhcmVJdGVtID0gc3RhdGUuZmluZChcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdElkXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNvbXBhcmVJdGVtSW5kZXggPSBjb21wYXJlSXRlbSAmJiBzdGF0ZS5pbmRleE9mKGNvbXBhcmVJdGVtKTtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBjb21wYXJlSXRlbUluZGV4KSxcclxuICAgICAgICAuLi5zdGF0ZS5zbGljZShjb21wYXJlSXRlbUluZGV4ICsgMSksXHJcbiAgICAgIF07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnRSZWR1Y2VyXCI7XHJcbmltcG9ydCBjb21wYXJlUmVkdWNlciBmcm9tIFwiLi9jb21wYXJlUmVkdWNlclwiO1xyXG5pbXBvcnQgd2lzaGxpc3RSZWR1Y2VyIGZyb20gXCIuL3dpc2hsaXN0UmVkdWNlclwiO1xyXG5pbXBvcnQgc2hvcFJlZHVjZXIgZnJvbSBcIi4vc2hvcFJlZHVjZXJcIjtcclxuaW1wb3J0IHNob3BGaWx0ZXJSZWR1Y2VyIGZyb20gXCIuL3Nob3BGaWx0ZXJSZWR1Y2VyXCI7XHJcbmltcG9ydCBibG9nRmlsdGVyUmVkdWNlciBmcm9tIFwiLi9ibG9nRmlsdGVyUmVkdWNlclwiO1xyXG5pbXBvcnQgYmxvZ1JlZHVjZXIgZnJvbSBcIi4vYmxvZ1JlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBibG9nRmlsdGVyUmVkdWNlcixcclxuICBibG9nUmVkdWNlcixcclxuICBzaG9wUmVkdWNlcixcclxuICBzaG9wRmlsdGVyUmVkdWNlcixcclxuICBjb21wYXJlUmVkdWNlcixcclxuICBjYXJ0UmVkdWNlcixcclxuICB3aXNobGlzdFJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IFNIT1BfRklMVEVSIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc29ydDoge30sXHJcbiAgc2hvdzogXCIxMFwiLFxyXG4gIHZpZXc6IFwiZ3JpZFwiLFxyXG4gIGNhdGVnb3J5OiBcIlwiLFxyXG4gIGNvbG9yOiBcIlwiLFxyXG4gIHNpemU6IFwiXCIsXHJcbiAgdGFnOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcEZpbHRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuUkVTRVRfRklMVEVSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzb3J0OiB7fSxcclxuICAgICAgICBzaG93OiBcIjEwXCIsXHJcbiAgICAgICAgdmlldzogXCJncmlkXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY29sb3I6IFwiXCIsXHJcbiAgICAgICAgc2l6ZTogXCJcIixcclxuICAgICAgICB0YWc6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9TT1JUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNvcnQ6IGFjdGlvbi5zb3J0LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfU0hPVzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaG93OiBhY3Rpb24uc2hvdyxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1ZJRVc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlldzogYWN0aW9uLnZpZXcsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9DQVRFR09SWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXRlZ29yeTogYWN0aW9uLmNhdGVnb3J5LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfQ09MT1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29sb3I6IGFjdGlvbi5jb2xvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1NJWkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2l6ZTogYWN0aW9uLnNpemUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9UQUc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFnOiBhY3Rpb24udGFnLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSwgY291bnQ6IDAgfSxcclxuICBzYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gIGZlYXR1cmVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gIGJlc3RTZWxsZXJQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgZGFsZVByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICBwcm9kdWN0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICBzZWFyY2hlZFByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAvL0FsbCBwcm9kdWN0c1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UsIGNvdW50OiAwIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQucHJvZHVjdENvdW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFNfRkFJTDpcclxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAvL1NhbGUgcHJvZHVjdHNcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2FsZVByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2FsZVByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9GZWF0dXJlZCBwcm9kdWN0c1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vQmVzdCBzZWxsZXIgcHJvZHVjdHNcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYmVzdFNlbGxlclByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5iZXN0U2VsbGVyUHJvZHVjdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGJlc3RTZWxsZXJQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuYmVzdFNlbGxlclByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9EYWxlIHByb2R1Y3RzXHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmRhbGVQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDpcclxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmRhbGVQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vUHJvZHVjdCBkZXRhaWxcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAvL1NlYXJjaGVkIHByb2R1Y3RzXHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWFyY2hlZFByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5zZWFyY2hlZFByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb3VudCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2VhcmNoZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vRGVmYXVsIGNhc2VcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV0lTSExJU1RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBXSVNITElTVC5GRVRDSF9XSVNITElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZWRTdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcclxuICByZXR1cm4gY3JlYXRlZFN0b3JlO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=