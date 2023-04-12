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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "8hBj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yyPw");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("G95I");

 //Get cart data

const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST */ "g"].FETCH_WISHLIST
});

const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST */ "g"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});

const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST */ "g"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});

const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__[/* fetchWishlistData */ "c"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
    });
  };
};

/***/ }),

/***/ "G95I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U7QO");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wndJ");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kLkQ");



const url = "/wishlist";
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__[/* renderParam */ "d"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(endpoint);
};
const addWishlistData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].delete(endpoint);
};

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/styles/antd.less
var antd = __webpack_require__("RtPa");

// EXTERNAL MODULE: ./src/styles/styles.scss
var styles = __webpack_require__("PGGC");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./src/redux/actionTypes.js
var actionTypes = __webpack_require__("yyPw");

// CONCATENATED MODULE: ./src/redux/reducers/cartReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cartReducer_initialState = {
  loading: true,
  data: [],
  error: false
};
function cartReducer(state = cartReducer_initialState, action) {
  switch (action.type) {
    case actionTypes["c" /* CART */].FETCH_CART:
      return {
        loading: true,
        data: [],
        error: false
      };

    case actionTypes["c" /* CART */].FETCH_CART_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case actionTypes["c" /* CART */].FETCH_CART_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/compareReducer.js

const compareReducer_initialState = [];
function compareReducer(state = compareReducer_initialState, action) {
  switch (action.type) {
    case actionTypes["d" /* COMPARE */].ADD_TO_COMPARE:
      if (!state.includes(action.payload.data)) {
        if (state.legth <= 3) {
          return [action.payload.data, ...state];
        } else {
          return [action.payload.data, ...state.slice(0, 2)];
        }
      }

    case actionTypes["d" /* COMPARE */].REMOVE_FROM_COMPARE:
      const compareItem = state.find(item => item.id === action.payload.productId);
      const compareItemIndex = compareItem && state.indexOf(compareItem);
      return [...state.slice(0, compareItemIndex), ...state.slice(compareItemIndex + 1)];

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/wishlistReducer.js
function wishlistReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function wishlistReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wishlistReducer_ownKeys(Object(source), true).forEach(function (key) { wishlistReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wishlistReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wishlistReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const wishlistReducer_initialState = {
  loading: true,
  data: [],
  error: false
};
function WISHLISTReducer(state = wishlistReducer_initialState, action) {
  switch (action.type) {
    case actionTypes["g" /* WISHLIST */].FETCH_WISHLIST:
      return {
        loading: true,
        data: [],
        error: false
      };

    case actionTypes["g" /* WISHLIST */].FETCH_WISHLIST_SUCCESS:
      return wishlistReducer_objectSpread(wishlistReducer_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case actionTypes["g" /* WISHLIST */].FETCH_WISHLIST_FAIL:
      // let { err } = action.payload;
      return wishlistReducer_objectSpread(wishlistReducer_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/shopReducer.js
function shopReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function shopReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shopReducer_ownKeys(Object(source), true).forEach(function (key) { shopReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shopReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shopReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const shopReducer_initialState = {
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
function shopReducer(state = shopReducer_initialState, action) {
  switch (action.type) {
    //All products
    case actionTypes["e" /* SHOP */].FETCH_PRODUCTS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        products: {
          loading: true,
          data: [],
          error: false,
          count: 0
        }
      });

    case actionTypes["e" /* SHOP */].FETCH_PRODUCTS_SUCCESS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        products: shopReducer_objectSpread(shopReducer_objectSpread({}, state.products), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case actionTypes["e" /* SHOP */].FETCH_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        products: shopReducer_objectSpread(shopReducer_objectSpread({}, state.products), {}, {
          loading: false,
          error: true
        })
      });
    //Sale products

    case actionTypes["e" /* SHOP */].FETCH_SALE_PRODUCTS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        saleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["e" /* SHOP */].FETCH_SALE_PRODUCTS_SUCCESS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        saleProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case actionTypes["e" /* SHOP */].FETCH_SALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        saleProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Featured products

    case actionTypes["e" /* SHOP */].FETCH_FEATURED_PRODUCTS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        featuredProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["e" /* SHOP */].FETCH_FEATURED_PRODUCTS_SUCCESS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        featuredProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case actionTypes["e" /* SHOP */].FETCH_FEATURED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        featuredProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Best seller products

    case actionTypes["e" /* SHOP */].FETCH_BEST_SELLER_PRODUCTS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        bestSellerProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["e" /* SHOP */].FETCH_BEST_SELLER_PRODUCTS_SUCCESS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        bestSellerProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case actionTypes["e" /* SHOP */].FETCH_BEST_SELLER_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        bestSellerProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Dale products

    case actionTypes["e" /* SHOP */].FETCH_DALE_PRODUCTS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        daleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["e" /* SHOP */].FETCH_DALE_PRODUCTS_SUCCESS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        daleProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case actionTypes["e" /* SHOP */].FETCH_DALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        daleProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Product detail

    case actionTypes["e" /* SHOP */].FETCH_PRODUCT_DETAIL:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        productDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["e" /* SHOP */].FETCH_PRODUCT_DETAIL_SUCCESS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        productDetail: shopReducer_objectSpread(shopReducer_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case actionTypes["e" /* SHOP */].FETCH_PRODUCT_DETAIL_FAIL:
      // let { err } = action.payload;
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        productDetail: shopReducer_objectSpread(shopReducer_objectSpread({}, state.productDetail), {}, {
          loading: false,
          error: true
        })
      });
    //Searched products

    case actionTypes["e" /* SHOP */].FETCH_SEARCHED_PRODUCTS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        searchedProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["e" /* SHOP */].FETCH_SEARCHED_PRODUCTS_SUCCESS:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        searchedProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case actionTypes["e" /* SHOP */].FETCH_SEARCHED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        searchedProducts: shopReducer_objectSpread(shopReducer_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Defaul case

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/shopFilterReducer.js
function shopFilterReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function shopFilterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shopFilterReducer_ownKeys(Object(source), true).forEach(function (key) { shopFilterReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shopFilterReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shopFilterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const shopFilterReducer_initialState = {
  sort: {},
  show: "10",
  view: "grid",
  category: "",
  color: "",
  size: "",
  tag: ""
};
function shopFilterReducer(state = shopFilterReducer_initialState, action) {
  switch (action.type) {
    case actionTypes["f" /* SHOP_FILTER */].RESET_FILTERS:
      return {
        sort: {},
        show: "10",
        view: "grid",
        category: "",
        color: "",
        size: "",
        tag: ""
      };

    case actionTypes["f" /* SHOP_FILTER */].SET_SORT:
      return shopFilterReducer_objectSpread(shopFilterReducer_objectSpread({}, state), {}, {
        sort: action.sort
      });

    case actionTypes["f" /* SHOP_FILTER */].SET_SHOW:
      return shopFilterReducer_objectSpread(shopFilterReducer_objectSpread({}, state), {}, {
        show: action.show
      });

    case actionTypes["f" /* SHOP_FILTER */].SET_VIEW:
      return shopFilterReducer_objectSpread(shopFilterReducer_objectSpread({}, state), {}, {
        view: action.view
      });

    case actionTypes["f" /* SHOP_FILTER */].SET_CATEGORY:
      return shopFilterReducer_objectSpread(shopFilterReducer_objectSpread({}, state), {}, {
        category: action.category
      });

    case actionTypes["f" /* SHOP_FILTER */].SET_COLOR:
      return shopFilterReducer_objectSpread(shopFilterReducer_objectSpread({}, state), {}, {
        color: action.color
      });

    case actionTypes["f" /* SHOP_FILTER */].SET_SIZE:
      return shopFilterReducer_objectSpread(shopFilterReducer_objectSpread({}, state), {}, {
        size: action.size
      });

    case actionTypes["f" /* SHOP_FILTER */].SET_TAG:
      return shopFilterReducer_objectSpread(shopFilterReducer_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/blogFilterReducer.js
function blogFilterReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function blogFilterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { blogFilterReducer_ownKeys(Object(source), true).forEach(function (key) { blogFilterReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { blogFilterReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function blogFilterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const blogFilterReducer_initialState = {
  category: "",
  tag: ""
};
function blogFilterReducer(state = blogFilterReducer_initialState, action) {
  switch (action.type) {
    case actionTypes["b" /* BLOG_FILTER */].RESET_FILTERS:
      return {
        category: "",
        tag: ""
      };

    case actionTypes["b" /* BLOG_FILTER */].SET_CATEGORY:
      return blogFilterReducer_objectSpread(blogFilterReducer_objectSpread({}, state), {}, {
        category: action.category
      });

    case actionTypes["b" /* BLOG_FILTER */].SET_TAG:
      return blogFilterReducer_objectSpread(blogFilterReducer_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/blogReducer.js
function blogReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function blogReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { blogReducer_ownKeys(Object(source), true).forEach(function (key) { blogReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { blogReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function blogReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const blogReducer_initialState = {
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
function blogReducer(state = blogReducer_initialState, action) {
  switch (action.type) {
    //All posts
    case actionTypes["a" /* BLOG */].FETCH_POSTS:
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        allPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["a" /* BLOG */].FETCH_POSTS_SUCCESS:
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        allPosts: blogReducer_objectSpread(blogReducer_objectSpread({}, state.allPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case actionTypes["a" /* BLOG */].FETCH_POSTS_FAIL:
      // let { err } = action.payload;
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        allPosts: blogReducer_objectSpread(blogReducer_objectSpread({}, state.allPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Recent posts

    case actionTypes["a" /* BLOG */].FETCH_RECENT_POSTS:
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        recentPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["a" /* BLOG */].FETCH_RECENT_POSTS_SUCCESS:
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        recentPosts: blogReducer_objectSpread(blogReducer_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case actionTypes["a" /* BLOG */].FETCH_RECENT_POSTS_FAIL:
      // let { err } = action.payload;
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        recentPosts: blogReducer_objectSpread(blogReducer_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Post detail

    case actionTypes["a" /* BLOG */].FETCH_POST_DETAIL:
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        postDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case actionTypes["a" /* BLOG */].FETCH_POST_DETAIL_SUCCESS:
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        postDetail: blogReducer_objectSpread(blogReducer_objectSpread({}, state.postDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case actionTypes["a" /* BLOG */].FETCH_POST_DETAIL_FAIL:
      // let { err } = action.payload;
      return blogReducer_objectSpread(blogReducer_objectSpread({}, state), {}, {
        postDetail: blogReducer_objectSpread(blogReducer_objectSpread({}, state.postDetail), {}, {
          loading: false,
          error: true
        })
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/rootReducer.js








const rootReducer = Object(external_redux_["combineReducers"])({
  blogFilterReducer: blogFilterReducer,
  blogReducer: blogReducer,
  shopReducer: shopReducer,
  shopFilterReducer: shopFilterReducer,
  compareReducer: compareReducer,
  cartReducer: cartReducer,
  wishlistReducer: WISHLISTReducer
});
/* harmony default export */ var reducers_rootReducer = (rootReducer);
// CONCATENATED MODULE: ./src/redux/store.js




const createdStore = Object(external_redux_["createStore"])(reducers_rootReducer, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
const initializeStore = (initialState = {}) => {
  return createdStore;
};
// CONCATENATED MODULE: ./src/common/withReduxStore.js

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function withReduxStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withReduxStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withReduxStore_ownKeys(Object(source), true).forEach(function (key) { withReduxStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withReduxStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withReduxStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxStor(App) {
  return class AppWithRedux extends external_react_default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return withReduxStore_objectSpread(withReduxStore_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore
      }));
    }

  };
}
// EXTERNAL MODULE: ./src/redux/actions/cartActions.js
var cartActions = __webpack_require__("wQtD");

// EXTERNAL MODULE: ./src/redux/actions/wishlistActions.js
var wishlistActions = __webpack_require__("8hBj");

// CONCATENATED MODULE: ./src/components/other/FetchInitData.js




function FetchInitData({
  children
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(cartActions["a" /* fetchCartRequest */])());
    dispatch(Object(wishlistActions["a" /* fetchWishListRequest */])());
  }, []);
  return children;
}
// CONCATENATED MODULE: ./src/pages/_app.js

var _app_jsx = external_react_default.a.createElement;


 // import Loading from "../components/other/Loading";




const _app_App = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return _app_jsx(external_react_redux_["Provider"], {
    store: reduxStore
  }, _app_jsx(FetchInitData, null, _app_jsx(Component, pageProps)));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (withReduxStor(_app_App));

/***/ }),

/***/ "PGGC":
/***/ (function(module, exports) {



/***/ }),

/***/ "RtPa":
/***/ (function(module, exports) {



/***/ }),

/***/ "U7QO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
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

/* harmony default export */ __webpack_exports__["a"] = (new AxiosService());

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kLkQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "wQtD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchCart */
/* unused harmony export fetchCartSuccess */
/* unused harmony export fetchCartFail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yyPw");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zBcO");

 //Get cart data

const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CART */ "c"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CART */ "c"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CART */ "c"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__[/* fetchCartData */ "b"]().then(res => {
      dispatch(fetchCartSuccess(res.data));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "wndJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
const API_URL = "http://localhost:6969";

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "yyPw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BLOG_FILTER; });
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

/***/ "zBcO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U7QO");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wndJ");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kLkQ");



const url = "/cart";
const fetchCartData = cartId => {
  let endpoint = cartId ? _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url + `/${cartId}` : _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(endpoint);
};
const fetchProductIdCartData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__[/* renderParam */ "d"])("productId", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(endpoint);
};
const addCartData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(endpoint, data);
};
const removeCartData = cartId => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].delete(endpoint);
};
const updateCartData = (cartId, data) => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__[/* API_URL */ "a"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].patch(endpoint, data);
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });