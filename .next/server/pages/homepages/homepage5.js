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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5HK":
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "14PJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/data/navigator.json
var data_navigator = __webpack_require__("lGS8");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/other/SocialIcons.js
var SocialIcons = __webpack_require__("TniP");

// CONCATENATED MODULE: ./src/components/header/elements/MobileNavigator.js
var __jsx = external_react_default.a.createElement;






function MobileNavigator() {
  const {
    SubMenu
  } = external_antd_["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(external_react_["useState"])("mail");

  const handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  return __jsx("div", {
    className: "menu-mobile"
  }, __jsx(external_antd_["Menu"], {
    className: "menu-mobile-navigator",
    onClick: handleClick,
    selectedKeys: [current],
    mode: "inline"
  }, __jsx(SubMenu, {
    key: "homepage",
    title: data_navigator.HOME.title
  }, data_navigator.HOME.subMenu.map(item => __jsx(external_antd_["Menu"].Item, {
    key: item.title
  }, __jsx(link_default.a, {
    href: "" + item.href
  }, __jsx("a", null, " ", item.title))))), __jsx(SubMenu, {
    key: "shop",
    title: data_navigator.SHOP.title
  }, __jsx(SubMenu, {
    key: "shop layout",
    title: "Layout shop"
  }, data_navigator.SHOP.subMenu.layout.map(item => __jsx(external_antd_["Menu"].Item, {
    key: item.title
  }, __jsx(link_default.a, {
    href: "" + item.href
  }, __jsx("a", null, " ", item.title))))), __jsx(SubMenu, {
    key: "shop detail",
    title: "Detail shop"
  }, data_navigator.SHOP.subMenu.detail.map(item => __jsx(external_antd_["Menu"].Item, {
    key: item.title
  }, __jsx(link_default.a, {
    href: "" + item.href
  }, __jsx("a", null, " ", item.title))))), __jsx(SubMenu, {
    key: "shop pages",
    title: "Pages shop"
  }, data_navigator.SHOP.subMenu.pages.map(item => __jsx(external_antd_["Menu"].Item, {
    key: item.title
  }, __jsx(link_default.a, {
    href: "" + item.href
  }, __jsx("a", null, " ", item.title)))))), __jsx(SubMenu, {
    key: "pages",
    title: data_navigator.PAGES.title
  }, data_navigator.PAGES.subMenu.map(item => __jsx(external_antd_["Menu"].Item, {
    key: item.title
  }, __jsx(link_default.a, {
    href: "" + item.href
  }, __jsx("a", null, " ", item.title))))), __jsx(external_antd_["Menu"].Item, {
    key: "alipay"
  }, __jsx(link_default.a, {
    href: "" + data_navigator.ABOUT.href
  }, __jsx("a", {
    href: "https://ant.design",
    target: "_blank",
    rel: "noopener noreferrer"
  }, data_navigator.ABOUT.title)))), __jsx("div", {
    className: "menu-mobile-functions"
  }, __jsx(link_default.a, {
    href: "" + "/other/login"
  }, __jsx("a", {
    className: "menu-mobile-functions__login"
  }, "Login / Register")), __jsx(SocialIcons["a" /* default */], null)));
}

/* harmony default export */ var elements_MobileNavigator = (/*#__PURE__*/external_react_default.a.memo(MobileNavigator));
// CONCATENATED MODULE: ./src/components/header/elements/MobileMenuOpener.js
var MobileMenuOpener_jsx = external_react_default.a.createElement;




function MobileMenuOpener() {
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);

  const onShowDrawer = () => {
    setVisible(true);
  };

  const onCloseDrawer = () => {
    setVisible(false);
  };

  return MobileMenuOpener_jsx(external_react_default.a.Fragment, null, MobileMenuOpener_jsx("a", {
    onClick: onShowDrawer,
    className: "menu-mobile-opener",
    href: "#"
  }, MobileMenuOpener_jsx("i", {
    className: "fas fa-bars"
  })), MobileMenuOpener_jsx(external_antd_["Drawer"], {
    title: "Close",
    closable: true,
    onClose: onCloseDrawer,
    visible: visible,
    placement: "left",
    width: 320
  }, MobileMenuOpener_jsx(elements_MobileNavigator, null)));
}

/* harmony default export */ var elements_MobileMenuOpener = __webpack_exports__["a"] = (/*#__PURE__*/external_react_default.a.memo(MobileMenuOpener));

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HBTf");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3DfF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HeaderOne; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/header/top-nav/TopNavOne.js
var TopNavOne = __webpack_require__("IFAr");

// EXTERNAL MODULE: ./src/components/header/menu/MenuOne.js
var MenuOne = __webpack_require__("Y6Li");

// EXTERNAL MODULE: ./src/components/other/Container.js
var Container = __webpack_require__("45lk");

// EXTERNAL MODULE: ./src/components/header/elements/CategoryColappse.js
var CategoryColappse = __webpack_require__("qDg5");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/header/elements/SearchForm.js
var SearchForm = __webpack_require__("bJ4p");

// CONCATENATED MODULE: ./src/components/header/function-menu/FunctionMenuOne.js
var __jsx = external_react_default.a.createElement;






function FunctionMenuOne({
  activeHeaderCollapse
}) {
  return __jsx("div", {
    className: "header-function-menu-one"
  }, __jsx(Container["a" /* default */], null, __jsx("div", {
    className: "function-menu-wrapper"
  }, __jsx(external_antd_["Row"], {
    gutter: 30
  }, __jsx(external_antd_["Col"], {
    xs: {
      span: 24,
      order: 1
    },
    md: {
      span: 16,
      order: 2
    },
    lg: 18
  }, __jsx(SearchForm["a" /* default */], null))))));
}

/* harmony default export */ var function_menu_FunctionMenuOne = (/*#__PURE__*/external_react_default.a.memo(FunctionMenuOne));
// CONCATENATED MODULE: ./src/components/header/HeaderOne.js
var HeaderOne_jsx = external_react_default.a.createElement;




function HeaderOne({
  activeHeaderCollapse
}) {
  return HeaderOne_jsx(external_react_default.a.Fragment, null, HeaderOne_jsx(TopNavOne["a" /* default */], null), HeaderOne_jsx(MenuOne["a" /* default */], null), HeaderOne_jsx(function_menu_FunctionMenuOne, {
    activeHeaderCollapse: activeHeaderCollapse
  }));
}

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "45lk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  fluid,
  children
}) {
  return __jsx("div", {
    className: fluid ? "container-fluid" : "container"
  }, children);
}

/***/ }),

/***/ "4LKf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onAddProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return onRemoveProductFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onChangeProductCartQuantity; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zBcO");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const onAddProductToCart = ({
  product,
  quantity = 1,
  onSuccess,
  onError,
  getQuantityAvailable = () => true
}) => {
  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__[/* fetchProductIdCartData */ "c"])(product.id).then(res => {
    if (res.data.length === 0) {
      if (product.quantity === 0) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable && getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__[/* addCartData */ "a"])(_objectSpread(_objectSpread({}, product), {}, {
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
          productId: product.id,
          cartQuantity: quantity
        })).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to cart failed, please try again", err));
      }
    } else {
      let pData = res.data[0];

      if (pData.cartQuantity + quantity > pData.quantity) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__[/* updateCartData */ "e"])(pData.id, {
          cartQuantity: pData.cartQuantity + quantity
        }).then(res => {
          onSuccess && onSuccess(res);
        }).catch(err => onError && onError("Add product to cart failed, please try again", err));
      }
    }
  }).catch(err => onError && onError("Add product to cart failed, please try again", err));
};
const onRemoveProductFromCart = ({
  cartId,
  onSuccess,
  onError
}) => {
  if (cartId && cartId !== "" && cartId !== null) {
    Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__[/* removeCartData */ "d"])(cartId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product failm, pleaser try again", err));
  }
};
const onChangeProductCartQuantity = ({
  product,
  quantity,
  onSuccess
}) => {
  if (quantity > product.quantity || quantity < 1) {
    return;
  }

  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__[/* updateCartData */ "e"])(product.id, {
    cartQuantity: quantity
  }).then(res => onSuccess && onSuccess(res)).catch(err => console.log(err));
};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5/rY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NmoQ");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("NmoQ", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function FooterQuickLinks({
  colSize
}) {
  return __jsx("div", {
    className: "footer-links"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 10,
    justify: "space-between"
  }, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], _extends({
    key: index
  }, colSize), __jsx("div", {
    className: "footer-links__group"
  }, __jsx("h5", null, item.title), __jsx("ul", null, item.items.map((link, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + link.href
  }, __jsx("a", null, " ", link.title)), " "))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FooterQuickLinks));

/***/ }),

/***/ "5gdO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HARd");
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TpwS");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9MPT");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function ProductTab({
  style,
  data,
  className,
  onTabChange,
  productClassName,
  headerCategories,
  headerTitle,
  headerClass,
  showTitleDecoration = false,
  headerType = "grid",
  productCol
}) {
  const {
    TabPane
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

  const onChooseCategory = key => {
    onTabChange(key);
  };

  const renderTabContent = () => __jsx(_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    data: data,
    renderData: data => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      gutter: [{
        xs: 0,
        md: 15
      }, {
        xs: 0,
        md: 15
      }]
    }, data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
      key: index
    }, productCol), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: productClassName,
      data: item
    }))))
  });

  return __jsx("div", {
    className: `product-tab ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    style: style
  }, __jsx("div", {
    className: `product-tab-header ${headerType === "row" ? "-style-two" : "style-one"}  ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(headerClass)}`
  }, headerType === "grid" && __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: headerTitle,
    className: "-center",
    hideDecoration: showTitleDecoration
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    tabBarExtraContent: headerType === "row" ? {
      left: __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        title: headerTitle,
        className: "-center",
        hideDecoration: true
      })
    } : null,
    defaultActiveKey: "1",
    centered: headerType === "row" ? false : true,
    onChange: onChooseCategory
  }, __jsx(TabPane, {
    tab: "All",
    key: ""
  }, renderTabContent()), headerCategories.map((item, index) => __jsx(TabPane, {
    tab: item,
    key: item
  }, renderTabContent())))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductTab));

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6wMt":
/***/ (function(module) {

module.exports = JSON.parse("[{\"iconSrc\":\"/assets/images/other/benefits/1.png\",\"name\":\"GIAO HÀNG MIỄN PHÍ\",\"description\":\"Với đơn hàng trên 1.000.000đ\"},{\"iconSrc\":\"/assets/images/other/benefits/2.png\",\"name\":\"GIAO HÀNG ĐÚNG THỜI GIAN\",\"description\":\"Nếu sản phẩm có vấn đề\"},{\"iconSrc\":\"/assets/images/other/benefits/3.png\",\"name\":\"BẢO MẬT THANH TOÁN\",\"description\":\"100% bảo mật thông tin khách hàng\"},{\"iconSrc\":\"/assets/images/other/benefits/4.png\",\"name\":\"24/7 SUPPORT\",\"description\":\"Dedicated support\"}]");

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

/***/ "9MPT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zFetchDataHandle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function zFetchDataHandle({
  data,
  errorMessage = "Get products fail, please try again",
  emptyDescription = "No product in this category",
  renderData
}) {
  return data.loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    active: true
  }) : data.error ? __jsx("h3", null, errorMessage) : data.data.length > 0 ? renderData && renderData(data.data) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: emptyDescription
  });
}

/***/ }),

/***/ "ADoA":
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"content\":{\"main\":\"Strawberry Jam 100% Natural Fruit Juice\",\"span\":\"Sale Off 65%\"},\"background\":\"/assets/images/sections/banner/one/bg-1.png\",\"image\":\"/assets/images/sections/banner/one/1.png\"},{\"content\":{\"main\":\"Cake 100% Natural Fruit Juice\",\"span\":\"Sale Off 65%\"},\"background\":\"/assets/images/sections/banner/one/bg-2.png\",\"image\":\"/assets/images/sections/banner/one/2.png\"}],\"three\":[{\"background\":\"/assets/images/sections/banner/three/bg-1.png\",\"image\":\"/assets/images/sections/banner/three/1.png\",\"title\":{\"main\":\"Black friday\",\"bold\":\"Sale off\",\"discount\":\"60%\"}},{\"background\":\"/assets/images/sections/banner/three/bg-2.png\",\"image\":\"/assets/images/sections/banner/three/2.png\",\"title\":{\"main\":\"Summer\",\"bold\":\"Sale off\",\"discount\":\"50%\"}}],\"four\":[{\"type\":\"small\",\"image\":\"/assets/images/sections/banner/four/small-1.png\",\"background\":\"/assets/images/sections/banner/four/small-bg-1.png\"},{\"type\":\"big\",\"image\":\"/assets/images/sections/banner/four/big-1.png\",\"background\":\"/assets/images/sections/banner/four/big-bg-1.png\",\"content\":\"Offer 50% Off The Week\"},{\"type\":\"big\",\"image\":\"/assets/images/sections/banner/four/big-2.png\",\"background\":\"/assets/images/sections/banner/four/big-bg-2.png\",\"content\":\"Offer 60% Off The Week\"},{\"type\":\"small\",\"image\":\"/assets/images/sections/banner/four/small-2.png\",\"background\":\"/assets/images/sections/banner/four/small-bg-2.png\"}]}");

/***/ }),

/***/ "BC1Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lGS8");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("lGS8", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Navigator() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail");

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return __jsx("ul", {
    className: "navigation"
  }, __jsx("li", {
    className: "navigation-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.href
  }, __jsx("a", {
    className: "navigation-item__title"
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title))), __jsx("li", {
    className: "navigation-item -toggleable"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.href
  }, __jsx("a", {
    className: "navigation-item__title"
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title)), __jsx("ul", {
    className: "navigation-item__submenu"
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.map((item, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href
  }, __jsx("a", null, item.title)))))), __jsx("li", {
    className: "navigation-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.href
  }, __jsx("a", {
    className: "navigation-item__title"
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.title))), __jsx("li", {
    className: "navigation-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SALE.href
  }, __jsx("a", {
    className: "navigation-item__title"
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SALE.title))), __jsx("li", {
    className: "navigation-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.CONTACT.href
  }, __jsx("a", {
    className: "navigation-item__title"
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.CONTACT.title))), __jsx("li", {
    className: "navigation-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href
  }, __jsx("a", {
    className: "navigation-item__title"
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Navigator));

/***/ }),

/***/ "CPvY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6wMt");
var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("6wMt", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Benefits({
  containerFluid,
  column,
  threeCol,
  style,
  className
}) {
  const renderCol = () => {
    return threeCol ? {
      xs: 24,
      md: 8
    } : column ? {
      xs: 24,
      sm: 12,
      md: 6,
      lg: 24
    } : {
      xs: 24,
      md: 6
    };
  };

  const col = renderCol();
  return __jsx("div", {
    className: `benefits ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      "-column": column
    })}`,
    style: style
  }, __jsx("div", {
    className: "benefits-wrapper"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 10
  }, _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.slice(0, threeCol ? 3 : _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.length).map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    key: index
  }, renderCol()), __jsx("div", {
    className: "benefits-item"
  }, __jsx("img", {
    className: "benefits-item__image",
    src: "" + item.iconSrc,
    alt: "Benefit icon"
  }), __jsx("h5", {
    className: "benefits-item__title"
  }, item.name), __jsx("p", {
    className: "benefits-item__description"
  }, item.description)))))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Benefits));

/***/ }),

/***/ "Dq34":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("45lk");
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NmoQ");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("NmoQ", 1);
/* harmony import */ var _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5/rY");
/* harmony import */ var _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GpYF");
/* harmony import */ var _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("juyQ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Footer({
  containerFluid,
  className
}) {
  return __jsx("div", {
    className: `footer -style-one ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
  }, __jsx("div", {
    className: "footer-top"
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    fluid: containerFluid
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 9,
    lg: 8
  }, __jsx(_elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 15,
    lg: 16
  }, __jsx(_elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    colSize: {
      span: 8
    }
  }))))), __jsx("div", {
    className: "footer-subcribe"
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "center"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 14
  }, __jsx("div", {
    className: "footer-subcribe__content"
  }, __jsx("p", null, "\u0110\u0103ng k\xFD nh\u1EADn b\u1EA3n tin c\u1EE7a C\xE0 ph\xEA h\u1EEFu c\u01A1 Vi\u1EC7t \u0111\u1EC3 c\u1EADp nh\u1EADt nh\u1EEFng s\u1EA3n ph\u1EA9m m\u1EDBi,", __jsx("br", null), " nh\u1EADn th\xF4ng tin \u01B0u \u0111\xE3i \u0111\u1EB7c bi\u1EC7t v\xE0 th\xF4ng tin gi\u1EA3m gi\xE1 kh\xE1c. "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 10
  }, __jsx(_elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    url: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e"
  }))))), __jsx("div", {
    className: "footer-bottom"
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, __jsx("div", {
    className: "footer-bottom__wrapper"
  }, __jsx("p", null, "Copyright \xA9 2023 Organic - Viet Coffee. Powered by Takatech"), __jsx("img", {
    src: "" + "/assets/images/footer/payment.png",
    alt: "Payment methods"
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

/***/ }),

/***/ "E9In":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withHeaderScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function withHeaderScroll(WrappedComponent) {
  return function (props) {
    const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const {
      0: scroll,
      1: setScroll
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const {
      0: isHeaderFixed,
      1: setIsHeaderFixed
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (scroll >= headerRef.current.offsetHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }, [scroll]);

    function handleScroll() {
      setScroll(window.scrollY);
    }

    return __jsx("div", {
      ref: headerRef,
      className: `header ${classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        fixed: isHeaderFixed
      }, props.className)}`
    }, __jsx(WrappedComponent, props));
  };
}

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F0Hh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ fetchPostsRequest; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ fetchRecentPostsRequest; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ fetchPostDetailRequest; });

// UNUSED EXPORTS: fetchPosts, fetchPostsSuccess, fetchPostsFail, fetchRecentPosts, fetchRecentPostsSuccess, fetchRecentPostsFail, fetchPostDetail, fetchPostDetailSuccess, fetchPostDetailFail

// EXTERNAL MODULE: ./src/redux/actionTypes.js
var actionTypes = __webpack_require__("yyPw");

// EXTERNAL MODULE: ./src/common/axiosService.js
var axiosService = __webpack_require__("U7QO");

// EXTERNAL MODULE: ./src/common/defines.js
var defines = __webpack_require__("wndJ");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// CONCATENATED MODULE: ./src/apis/blog.js



const blog_url = "/blog";

const renderUrl = (url, limit, category) => {
  return url + "?" + Object(utils["d" /* renderParam */])("_limit", limit) + Object(utils["d" /* renderParam */])("category", category);
};

const fetchBlogData = query => {
  let endpoint = renderUrl(defines["a" /* API_URL */] + blog_url, query.limit, query.category) + Object(utils["d" /* renderParam */])("_page", query.page) + Object(utils["d" /* renderParam */])("tag_like", query.tag);
  return axiosService["a" /* default */].get(endpoint);
};
const fetchRecentPostData = query => {
  let endpoint = renderUrl(defines["a" /* API_URL */] + blog_url, query.limit) + Object(utils["d" /* renderParam */])("_sort", "publicDate") + Object(utils["d" /* renderParam */])("order", "desc");
  return axiosService["a" /* default */].get(endpoint);
};
const fetchPostDetailData = slug => {
  let endpoint = defines["a" /* API_URL */] + blog_url + "?" + Object(utils["d" /* renderParam */])("slug", slug);
  return axiosService["a" /* default */].get(endpoint);
};
// CONCATENATED MODULE: ./src/redux/actions/blogActions.js

 //Fetch all posts

const fetchPosts = () => ({
  type: actionTypes["a" /* BLOG */].FETCH_POSTS
});
const fetchPostsSuccess = (data, postCount) => ({
  type: actionTypes["a" /* BLOG */].FETCH_POSTS_SUCCESS,
  payload: {
    data,
    postCount
  }
});
const fetchPostsFail = err => ({
  type: actionTypes["a" /* BLOG */].FETCH_POSTS_FAIL,
  payload: {
    err
  }
});
const fetchPostsRequest = query => {
  return dispatch => {
    dispatch(fetchPosts());
    fetchBlogData(query).then(res => {
      dispatch(fetchPostsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchPostsFail(err));
    });
  };
}; //Fetch recent posts

const fetchRecentPosts = () => ({
  type: actionTypes["a" /* BLOG */].FETCH_RECENT_POSTS
});
const fetchRecentPostsSuccess = (data, postCount) => ({
  type: actionTypes["a" /* BLOG */].FETCH_RECENT_POSTS_SUCCESS,
  payload: {
    data,
    postCount
  }
});
const fetchRecentPostsFail = err => ({
  type: actionTypes["a" /* BLOG */].FETCH_RECENT_POSTS_FAIL,
  payload: {
    err
  }
});
const fetchRecentPostsRequest = query => {
  return dispatch => {
    dispatch(fetchRecentPosts());
    fetchRecentPostData(query).then(res => {
      dispatch(fetchRecentPostsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchRecentPostsFail(err));
    });
  };
}; //Fetch post details

const fetchPostDetail = () => ({
  type: actionTypes["a" /* BLOG */].FETCH_POST_DETAIL
});
const fetchPostDetailSuccess = data => ({
  type: actionTypes["a" /* BLOG */].FETCH_POST_DETAIL_SUCCESS,
  payload: {
    data
  }
});
const fetchPostDetailFail = err => ({
  type: actionTypes["a" /* BLOG */].FETCH_POST_DETAIL_FAIL,
  payload: {
    err
  }
});
const fetchPostDetailRequest = slug => {
  return dispatch => {
    dispatch(fetchPostDetail());
    fetchPostDetailData(slug).then(res => {
      dispatch(fetchPostDetailSuccess(res.data));
    }).catch(err => {
      dispatch(fetchPostDetailFail(err));
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

/***/ "GpYF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterInfomation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TniP");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FooterInfomation() {
  return __jsx("div", {
    className: "footer-info"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/"
  }, __jsx("a", {
    className: "footer-info__logo"
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Ogami Logo"
  }))), __jsx("ul", null, __jsx("li", null, "\u0110\u1ECBa ch\u1EC9: K\u1EF3 - Trang Th\xF4n 5 ", __jsx("br", null), "X\xE3 B\xECnh H\xF2a, Huy\u1EC7n Kr\xF4ng Ana,", __jsx("br", null), "T\u1EC9nh \u0110\u0103k L\u0103k"), __jsx("li", null, "Phone: 0974 001 671"), __jsx("li", null, "Facebook: Anh Kh\u01B0\u01A1ng")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    type: "primary",
    shape: "circle",
    className: "-btn-light"
  }));
}

/***/ }),

/***/ "HARd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SectionTitle({
  title,
  hideDecoration,
  className,
  style
}) {
  return __jsx("div", {
    className: `section-title ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    style: style
  }, __jsx("h2", null, title), !hideDecoration && __jsx("div", {
    className: "section-title-decoration"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SectionTitle));

/***/ }),

/***/ "HBTf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ homepage5; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actions/shopActions.js + 1 modules
var shopActions = __webpack_require__("Ot64");

// EXTERNAL MODULE: ./src/redux/actions/blogActions.js + 1 modules
var blogActions = __webpack_require__("F0Hh");

// EXTERNAL MODULE: ./src/data/categories.json
var categories = __webpack_require__("PG6y");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/header/HeaderOne.js + 1 modules
var HeaderOne = __webpack_require__("3DfF");

// EXTERNAL MODULE: ./src/components/footer/Footer.js
var Footer = __webpack_require__("Dq34");

// EXTERNAL MODULE: ./src/common/withHeaderScroll.js
var withHeaderScroll = __webpack_require__("E9In");

// CONCATENATED MODULE: ./src/components/layout/LayoutFive.js
var __jsx = external_react_default.a.createElement;






const ScrolledHeader = Object(withHeaderScroll["a" /* default */])(HeaderOne["a" /* default */]);
function LayoutFive({
  title,
  children,
  headerClass,
  footerClass
}) {
  return __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("title", null, title)), __jsx(ScrolledHeader, {
    className: headerClass,
    activeHeaderCollapse: true
  }), children, __jsx(Footer["a" /* default */], {
    className: footerClass
  }), __jsx(external_antd_["BackTop"], null));
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/other/Container.js
var Container = __webpack_require__("45lk");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// CONCATENATED MODULE: ./src/components/sections/hero-slider/HeroSliderFive.js
var HeroSliderFive_jsx = external_react_default.a.createElement;






function HeroSliderFive({
  data
}) {
  return HeroSliderFive_jsx("div", {
    className: "hero-slider -single -style-five -coffee"
  }, HeroSliderFive_jsx(Container["a" /* default */], null, HeroSliderFive_jsx(external_antd_["Row"], {
    gutter: 30
  }, HeroSliderFive_jsx(external_antd_["Col"], {
    xs: 24,
    md: 8,
    lg: 6
  }), HeroSliderFive_jsx(external_antd_["Col"], {
    xs: 24,
    md: 16,
    lg: 18
  }, HeroSliderFive_jsx("div", {
    className: "hero-slider-wrapper"
  }, HeroSliderFive_jsx("div", {
    className: "hero-slider-background"
  }, HeroSliderFive_jsx("img", {
    src: "" + "/assets/images/hero-slider/five/1.png",
    alt: "Hero slider background image"
  })), HeroSliderFive_jsx("div", {
    className: "hero-slider-content-wrapper"
  }, HeroSliderFive_jsx("div", {
    className: "hero-slider-content"
  }, HeroSliderFive_jsx("h5", null, "FRUIT FRESH"), HeroSliderFive_jsx("h1", null, "Orange Lemon"), HeroSliderFive_jsx("h3", null, Object(utils["a" /* formatCurrency */])(14), " ", HeroSliderFive_jsx("span", null, "/ Pakage")), HeroSliderFive_jsx(external_antd_["Button"], {
    type: "primary",
    shape: "round"
  }, HeroSliderFive_jsx(link_default.a, {
    href: "" + "/shop/shop-3-column"
  }, HeroSliderFive_jsx("a", {
    href: "" + "/shop/shop-3-column"
  }, "Shop now"))))))))));
}

/* harmony default export */ var hero_slider_HeroSliderFive = (/*#__PURE__*/external_react_default.a.memo(HeroSliderFive));
// EXTERNAL MODULE: ./src/data/sections/hero-slider.json
var hero_slider = __webpack_require__("YNgo");

// EXTERNAL MODULE: ./src/components/other/Benefits.js
var Benefits = __webpack_require__("CPvY");

// CONCATENATED MODULE: ./src/components/sections/banner/BannerFour.js
var BannerFour_jsx = external_react_default.a.createElement;




function BannerFour({
  data
}) {
  function truncate(str, from, to) {
    return str.split(" ").splice(from, to).join(" ");
  }

  return BannerFour_jsx("div", {
    className: "banner-four"
  }, BannerFour_jsx(Container["a" /* default */], null, BannerFour_jsx(external_antd_["Row"], {
    gutter: [30, 30]
  }, data.map((item, index) => {
    if (item.type === "small") {
      return BannerFour_jsx(external_antd_["Col"], {
        xs: 0,
        sm: 0,
        md: 8,
        key: index
      }, BannerFour_jsx("div", {
        className: "banner-four-item -small up-down-anim-hover",
        style: {
          backgroundImage: `url('${"" + item.background}')`
        }
      }, BannerFour_jsx("img", {
        src: item.image,
        alt: "Banner small item image"
      })));
    }

    return BannerFour_jsx(external_antd_["Col"], {
      xs: 24,
      sm: 24,
      md: 16,
      key: index
    }, BannerFour_jsx("div", {
      className: "banner-four-item -big up-down-anim-hover",
      style: {
        backgroundImage: `url('${"" + item.background}')`
      }
    }, BannerFour_jsx(external_antd_["Row"], {
      justify: "center",
      align: "middle"
    }, BannerFour_jsx(external_antd_["Col"], {
      md: 12
    }, BannerFour_jsx("img", {
      src: item.image,
      alt: "Banner big item image"
    })), BannerFour_jsx(external_antd_["Col"], {
      md: 12
    }, BannerFour_jsx("h5", null, truncate(item.content, 0, 1), " ", BannerFour_jsx("span", null, truncate(item.content, 1, 1)), " ", BannerFour_jsx("br", null), truncate(item.content, 2, item.content.length))))));
  }))));
}

/* harmony default export */ var banner_BannerFour = (/*#__PURE__*/external_react_default.a.memo(BannerFour));
// EXTERNAL MODULE: ./src/data/sections/banner.json
var banner = __webpack_require__("ADoA");

// EXTERNAL MODULE: ./src/components/sections/product-thumb/ProductTab.js
var ProductTab = __webpack_require__("5gdO");

// EXTERNAL MODULE: ./src/components/sections/product-thumb/ProductSlide.js
var ProductSlide = __webpack_require__("n8JD");

// EXTERNAL MODULE: external "react-countdown"
var external_react_countdown_ = __webpack_require__("NfqO");
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_);

// EXTERNAL MODULE: ./src/components/other/SectionTitle.js
var SectionTitle = __webpack_require__("HARd");

// CONCATENATED MODULE: ./src/components/sections/dale-of-week/DowThree.js
var DowThree_jsx = external_react_default.a.createElement;








function DowThree({
  countdownLast = 100000000
}) {
  return DowThree_jsx("div", {
    className: "dow-three"
  }, DowThree_jsx(Container["a" /* default */], null, DowThree_jsx("div", {
    className: "dow-three-wrapper"
  }, DowThree_jsx(external_antd_["Row"], null, DowThree_jsx(external_antd_["Col"], {
    md: 12
  }, DowThree_jsx("div", {
    className: "dow-three-image up-down-anim"
  }, DowThree_jsx("img", {
    src: "" + "/assets/images/sections/dale-of-week/three/1.png",
    alt: "Dale of the week image"
  }))), DowThree_jsx(external_antd_["Col"], {
    md: 10
  }, DowThree_jsx("div", {
    className: "dow-three-content"
  }, DowThree_jsx(SectionTitle["a" /* default */], {
    title: "Dale of the week",
    className: "-coffee -left"
  }), DowThree_jsx("h5", null, Object(utils["a" /* formatCurrency */])(19), " ", DowThree_jsx("span", null, " / Pakage")), DowThree_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisiing elit, sed do eiusmod tempor incididunt ut labore et"), DowThree_jsx(external_react_countdown_default.a, {
    date: Date.now() + countdownLast,
    renderer: ({
      days,
      hours,
      minutes,
      seconds
    }) => {
      return DowThree_jsx("div", {
        className: "dow-three-countdown"
      }, DowThree_jsx("div", {
        className: "dow-three-countdown-item"
      }, DowThree_jsx("h6", null, Object(external_react_countdown_["zeroPad"])(days)), " ", DowThree_jsx("span", null, "days")), DowThree_jsx("div", {
        className: "dow-three-countdown-item"
      }, DowThree_jsx("h6", null, Object(external_react_countdown_["zeroPad"])(hours)), " ", DowThree_jsx("span", null, "hr")), DowThree_jsx("div", {
        className: "dow-three-countdown-item"
      }, DowThree_jsx("h6", null, Object(external_react_countdown_["zeroPad"])(minutes), " "), DowThree_jsx("span", null, "min")), DowThree_jsx("div", {
        className: "dow-three-countdown-item"
      }, DowThree_jsx("h6", null, Object(external_react_countdown_["zeroPad"])(seconds)), " ", DowThree_jsx("span", null, "sec")));
    }
  }), DowThree_jsx(external_antd_["Button"], {
    type: "primary",
    shape: "round"
  }, DowThree_jsx(link_default.a, {
    href: "" + "/shop/shop-3-column"
  }, DowThree_jsx("a", {
    href: "" + "/shop/shop-3-column"
  }, "Shop now")))))))));
}

/* harmony default export */ var dale_of_week_DowThree = (/*#__PURE__*/external_react_default.a.memo(DowThree));
// EXTERNAL MODULE: ./src/components/sections/blog/BlogSlide.js
var BlogSlide = __webpack_require__("aPPC");

// EXTERNAL MODULE: ./src/components/sections/partners/PartnerOne.js
var PartnerOne = __webpack_require__("S/uq");

// CONCATENATED MODULE: ./src/pages/homepages/homepage5.js
var homepage5_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function homepage5() {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: currentProductTabsCategory,
    1: setCurrentProductTabsCategory
  } = Object(external_react_["useState"])({
    featuredProducts: ""
  });
  const shopState = Object(external_react_redux_["useSelector"])(state => state.shopReducer);
  const blogState = Object(external_react_redux_["useSelector"])(state => state.blogReducer);
  const {
    featuredProducts,
    daleProducts,
    bestSellerProducts,
    saleProducts
  } = shopState;
  const {
    allPosts
  } = blogState;
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(shopActions["fetchFeaturedProductsRequest"])({
      limit: 8
    }));
    dispatch(Object(shopActions["fetchDaleProductsRequest"])({
      limit: 9
    }));
    dispatch(Object(shopActions["fetchBestSellerProductsRequest"])({
      limit: 9
    }));
    dispatch(Object(shopActions["fetchSaleProductsRequest"])({
      limit: 9
    }));
    dispatch(Object(blogActions["b" /* fetchPostsRequest */])({
      limit: 4
    }));
  }, []);
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(shopActions["fetchFeaturedProductsRequest"])({
      limit: 8,
      category: currentProductTabsCategory.featuredProducts
    }));
  }, [currentProductTabsCategory.featuredProducts]);
  return homepage5_jsx(LayoutFive, {
    title: "Homepage 5",
    headerClass: "-coffee -no-space",
    footerClass: "-coffee"
  }, homepage5_jsx(hero_slider_HeroSliderFive, {
    data: hero_slider.one
  }), homepage5_jsx(Container["a" /* default */], null, homepage5_jsx(Benefits["a" /* default */], {
    className: "-bordered",
    style: {
      marginBottom: 30 / 16 + "em"
    }
  })), homepage5_jsx(banner_BannerFour, {
    data: banner.four
  }), homepage5_jsx(Container["a" /* default */], null, homepage5_jsx(ProductTab["a" /* default */], {
    style: {
      marginBottom: 30 / 16 + "em"
    },
    data: featuredProducts,
    productCol: {
      xs: 12,
      sm: 8,
      lg: 6
    },
    onTabChange: val => setCurrentProductTabsCategory(_objectSpread(_objectSpread({}, currentProductTabsCategory), {}, {
      featuredProducts: val
    })),
    headerCategories: categories.slice(0, 4).map(item => item.name),
    headerTitle: "Featured products",
    className: "-coffee"
  })), homepage5_jsx(dale_of_week_DowThree, null), homepage5_jsx(Container["a" /* default */], null, homepage5_jsx(external_antd_["Row"], {
    gutter: 30,
    style: {
      marginBottom: 70 / 16 + "rem"
    }
  }, homepage5_jsx(external_antd_["Col"], {
    md: 8
  }, homepage5_jsx(ProductSlide["a" /* default */], {
    style: {
      marginTop: 14 / 16 + "em",
      marginBottom: 30 / 16 + "em"
    },
    productType: "tiny",
    headerTitle: "Dale of the week",
    headerClass: "-small -no-border -round-arrows",
    className: "-pink",
    data: daleProducts,
    rows: 3
  })), homepage5_jsx(external_antd_["Col"], {
    md: 8
  }, homepage5_jsx(ProductSlide["a" /* default */], {
    style: {
      marginTop: 14 / 16 + "em",
      marginBottom: 30 / 16 + "em"
    },
    productType: "tiny",
    headerTitle: "Best seller",
    headerClass: "-small -no-border -round-arrows",
    className: "-pink",
    data: bestSellerProducts,
    rows: 3
  })), homepage5_jsx(external_antd_["Col"], {
    md: 8
  }, homepage5_jsx(ProductSlide["a" /* default */], {
    style: {
      marginTop: 14 / 16 + "em",
      marginBottom: 30 / 16 + "em"
    },
    productType: "tiny",
    headerTitle: "Sale products",
    headerClass: "-small -no-border -round-arrows",
    className: "-pink",
    data: saleProducts,
    rows: 3
  }))), homepage5_jsx(PartnerOne["a" /* default */], null), homepage5_jsx(BlogSlide["a" /* default */], {
    data: allPosts,
    postType: "inline",
    postClassName: "-coffee",
    headerTitle: "From The Blog",
    headerClass: "-center -coffee"
  })));
}

/***/ }),

/***/ "IFAr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("45lk");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TniP");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const flagData = [{
  name: "vietnamese",
  image: "/assets/images/header/flag-vn.png"
}, {
  name: "english",
  image: "/assets/images/header/flag-usa.png"
}, {
  name: "japanese",
  image: "/assets/images/header/flag-jp.png"
}];
function TopNavOne({
  containerFluid
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
  return __jsx("div", {
    className: "top-nav-one"
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    fluid: containerFluid
  }, __jsx("div", {
    className: "top-nav-one-wrapper"
  }, __jsx("div", {
    className: "top-nav-one-left"
  }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
    className: "fas fa-envelope"
  }), "daklakorganiccoffee@gmail.com"), __jsx("li", null, __jsx("i", {
    className: "fas fa-phone-alt"
  }), "+84 354403856"))), __jsx("div", {
    className: "top-nav-one-right"
  }, __jsx("div", {
    className: "top-nav-one-right__item"
  }, __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), __jsx("div", {
    className: "top-nav-one-right__item"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "vietnamese",
    width: 125,
    bordered: false
  }, flagData.map((item, index) => __jsx(Option, {
    key: index,
    value: item.name
  }, __jsx("img", {
    style: {
      height: 13 / 16 + "em",
      width: 20 / 16 + "em",
      objectFit: "contain",
      marginTop: -3 / 16 + "em",
      marginRight: 5 / 16 + "em"
    },
    src: "" + item.image,
    alt: ""
  }), item.name)))), __jsx("div", {
    className: "top-nav-one-right__item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "" + "/auth/login"
  }, __jsx("a", null, __jsx("i", {
    className: "fas fa-user"
  }), "Login")))))));
}

/***/ }),

/***/ "IS0P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onAddProductToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onRemoveProductFromWishlist; });
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("G95I");

const onAddProductToWishlist = ({
  product,
  onSuccess,
  onError
}) => {
  Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__[/* fetchProductIdWishlistData */ "b"])(product.id).then(res => {
    if (res.data.length === 0) {
      Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__[/* addWishlistData */ "a"])(product).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to wislist failed, please try again", err));
    } else {
      onError && onError("Product already in wishlist");
    }
  }).catch(err => onError && onError("Add product to wislist failed, please try again", err));
};
const onRemoveProductFromWishlist = ({
  productId,
  onSuccess,
  onError
}) => {
  if (productId && productId !== "" && productId !== null) {
    Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__[/* removeWishlistData */ "d"])(productId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product fail, pleaser try again", err));
  }
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "N0nX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kLkQ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Post({
  type,
  className,
  style,
  data
}) {
  switch (type) {
    case "inline":
      return __jsx("div", {
        className: `post-inline ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
      }, __jsx("div", {
        className: "post-inline-image"
      }, __jsx("img", {
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image"
      })), __jsx("div", {
        className: "post-inline-content"
      }, __jsx("div", {
        className: "post-inline-content__meta"
      }, __jsx("p", null, __jsx("i", {
        className: "fal fa-calendar"
      }), Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatDate */ "b"])(data.publicDate)), __jsx("p", null, __jsx("i", {
        className: "fal fa-comments"
      }), data.comments.length)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", {
        className: "post-title"
      }, data.title))));

    case "row":
      return __jsx("div", {
        className: `post -style-one ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
      }, __jsx("div", {
        className: "post-image"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        placeholder: true
      })))), __jsx("div", {
        className: "post-content"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        className: "post-category"
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__[/* removeDash */ "c"])(data.category)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", {
        className: "post-title"
      }, data.title)), __jsx("div", {
        className: "post-info"
      }, __jsx("p", {
        className: "credit date"
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatDate */ "b"])(data.publicDate)), __jsx("p", {
        className: "credit comment"
      }, data.comments.length, " Comment")), __jsx("p", {
        className: "post-description"
      }, data.shortDescription), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", {
        className: "post-readmore"
      }, "Xem th\xEAm ...", __jsx("span", null, __jsx("i", {
        className: "arrow_carrot-2right"
      }))))));

    case "column-full":
      return __jsx("div", {
        className: `post -style-three ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
      }, __jsx("div", {
        className: "post-image"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        width: "100%",
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        placeholder: true
      })))), __jsx("div", {
        className: "post-content"
      }, __jsx("div", {
        className: "post-info"
      }, __jsx("p", {
        className: "credit date"
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatDate */ "b"])(data.publicDate)), __jsx("p", {
        className: "credit comment"
      }, data.comments.length, " Comment")), __jsx("p", {
        className: "post-description"
      }, data.shortDescription), __jsx("a", {
        className: "post-readmore",
        href: "#"
      }, "Xem th\xEAm ...", __jsx("span", null, __jsx("i", {
        className: "arrow_carrot-2right"
      })))));

    case "tiny":
      return __jsx("div", {
        className: `post-tiny ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
      }, __jsx("div", {
        className: "post-tiny-image"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        width: "100%",
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        placeholder: true
      })))), __jsx("div", {
        className: "post-tiny-content"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", {
        className: "post-tiny-title"
      }, data.title)), __jsx("p", {
        className: "post-tiny-date"
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatDate */ "b"])(data.publicDate))));

    default:
      return __jsx("div", {
        className: `post -style-two ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
      }, __jsx("div", {
        className: "post-image"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        placeholder: true
      })))), __jsx("div", {
        className: "post-content"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        className: "post-category"
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__[/* removeDash */ "c"])(data.category)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`
      }, __jsx("a", {
        className: "post-title"
      }, data.title)), __jsx("div", {
        className: "post-info"
      }, __jsx("p", {
        className: "credit date"
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatDate */ "b"])(data.publicDate)), __jsx("p", {
        className: "credit comment"
      }, data.comments.length, " Comment"))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Post));

/***/ }),

/***/ "NfqO":
/***/ (function(module, exports) {

module.exports = require("react-countdown");

/***/ }),

/***/ "NmoQ":
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"PHÁP LÝ & CÂU HỎI\",\"items\":[{\"title\":\"Câu chuyện OC\",\"href\":\"/other/about-us\"},{\"title\":\"Chính sách đổi trả\",\"href\":\"/shop/checkout\"},{\"title\":\"Chính sách bảo mật\",\"href\":\"/other/contact-us\"},{\"title\":\"Điều khoản dịch vụ\",\"href\":\"#\"}]},{\"title\":\"Tài khoản\",\"items\":[{\"title\":\"Thông tin tài khoản\",\"href\":\"#\"},{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},{\"title\":\"Giỏ hàng\",\"href\":\"/shop/cart\"},{\"title\":\"Theo dõi đơn hàng\",\"href\":\"#\"}]},{\"title\":\"Tài khoản\",\"items\":[{\"title\":\"Thông tin tài khoản\",\"href\":\"#\"},{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},{\"title\":\"Giỏ hàng\",\"href\":\"/shop/cart\"},{\"title\":\"Theo dõi đơn hàng\",\"href\":\"#\"}]}]");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Ot64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return /* binding */ fetchProducts; });
__webpack_require__.d(__webpack_exports__, "fetchProductsSuccess", function() { return /* binding */ fetchProductsSuccess; });
__webpack_require__.d(__webpack_exports__, "fetchProductsFail", function() { return /* binding */ fetchProductsFail; });
__webpack_require__.d(__webpack_exports__, "fetchProductsRequest", function() { return /* binding */ fetchProductsRequest; });
__webpack_require__.d(__webpack_exports__, "fetchSaleProducts", function() { return /* binding */ fetchSaleProducts; });
__webpack_require__.d(__webpack_exports__, "fetchSaleProductsSuccess", function() { return /* binding */ fetchSaleProductsSuccess; });
__webpack_require__.d(__webpack_exports__, "fetchSaleProductsFail", function() { return /* binding */ fetchSaleProductsFail; });
__webpack_require__.d(__webpack_exports__, "fetchSaleProductsRequest", function() { return /* binding */ fetchSaleProductsRequest; });
__webpack_require__.d(__webpack_exports__, "fetchFeaturedProducts", function() { return /* binding */ fetchFeaturedProducts; });
__webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsSuccess", function() { return /* binding */ fetchFeaturedProductsSuccess; });
__webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsFail", function() { return /* binding */ fetchFeaturedProductsFail; });
__webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsRequest", function() { return /* binding */ fetchFeaturedProductsRequest; });
__webpack_require__.d(__webpack_exports__, "fetchBestSellerProducts", function() { return /* binding */ fetchBestSellerProducts; });
__webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsSuccess", function() { return /* binding */ fetchBestSellerProductsSuccess; });
__webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsFail", function() { return /* binding */ fetchBestSellerProductsFail; });
__webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsRequest", function() { return /* binding */ fetchBestSellerProductsRequest; });
__webpack_require__.d(__webpack_exports__, "fetchDaleProducts", function() { return /* binding */ fetchDaleProducts; });
__webpack_require__.d(__webpack_exports__, "fetchDaleProductsSuccess", function() { return /* binding */ fetchDaleProductsSuccess; });
__webpack_require__.d(__webpack_exports__, "fetchDaleProductsFail", function() { return /* binding */ fetchDaleProductsFail; });
__webpack_require__.d(__webpack_exports__, "fetchDaleProductsRequest", function() { return /* binding */ fetchDaleProductsRequest; });
__webpack_require__.d(__webpack_exports__, "fetchProductDetail", function() { return /* binding */ fetchProductDetail; });
__webpack_require__.d(__webpack_exports__, "fetchProductDetailSuccess", function() { return /* binding */ fetchProductDetailSuccess; });
__webpack_require__.d(__webpack_exports__, "fetchProductDetailFail", function() { return /* binding */ fetchProductDetailFail; });
__webpack_require__.d(__webpack_exports__, "fetchProductDetailRequest", function() { return /* binding */ fetchProductDetailRequest; });
__webpack_require__.d(__webpack_exports__, "fetchSearchedProduct", function() { return /* binding */ fetchSearchedProduct; });
__webpack_require__.d(__webpack_exports__, "fetchSearchedProductSuccess", function() { return /* binding */ fetchSearchedProductSuccess; });
__webpack_require__.d(__webpack_exports__, "fetchSearchedProductFail", function() { return /* binding */ fetchSearchedProductFail; });
__webpack_require__.d(__webpack_exports__, "fetchSearchedProductRequest", function() { return /* binding */ fetchSearchedProductRequest; });

// EXTERNAL MODULE: ./src/redux/actionTypes.js
var actionTypes = __webpack_require__("yyPw");

// EXTERNAL MODULE: ./src/common/axiosService.js
var axiosService = __webpack_require__("U7QO");

// EXTERNAL MODULE: ./src/common/defines.js
var defines = __webpack_require__("wndJ");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// CONCATENATED MODULE: ./src/apis/shop.js



const shop_url = "/product";

const renderUrl = (url, limit, category) => {
  return url + "?" + Object(utils["d" /* renderParam */])("_limit", limit) + Object(utils["d" /* renderParam */])("category", category);
}; //Fetch list of products


const fetchProductsData = query => {
  let endpoint = renderUrl(defines["a" /* API_URL */] + shop_url, query.limit, query.category) + Object(utils["d" /* renderParam */])("_page", query.page) + Object(utils["d" /* renderParam */])("_sort", query.sort.sort) + Object(utils["d" /* renderParam */])("_order", query.sort.order) + Object(utils["d" /* renderParam */])("q", query.q) + Object(utils["d" /* renderParam */])("specifications.color", query.color) + Object(utils["d" /* renderParam */])("specifications.size", query.size) + Object(utils["d" /* renderParam */])("tag_like", query.tag);
  return axiosService["a" /* default */].get(endpoint);
};
const fetchSaleProductsData = query => {
  let endpoint = renderUrl(defines["a" /* API_URL */] + shop_url, query.limit, query.category);
  return axiosService["a" /* default */].get(endpoint);
};
const fetchFeaturedProductsData = query => {
  let endpoint = renderUrl(defines["a" /* API_URL */] + shop_url, query.limit, query.category);
  return axiosService["a" /* default */].get(endpoint);
};
const fetchBestSellerProductsData = query => {
  let endpoint = renderUrl(defines["a" /* API_URL */] + shop_url, query.limit, query.category);
  return axiosService["a" /* default */].get(endpoint);
};
const fetchDaleProductsData = query => {
  let endpoint = renderUrl(defines["a" /* API_URL */] + shop_url, query.limit, query.category);
  return axiosService["a" /* default */].get(endpoint);
}; //Fetch product detail

const fetchProductDetailData = slug => {
  let endpoint = defines["a" /* API_URL */] + shop_url + "?" + Object(utils["d" /* renderParam */])("slug", slug);
  return axiosService["a" /* default */].get(endpoint);
}; //Fetch serched product by query

const fetchSearchedProductData = query => {
  let endpoint = defines["a" /* API_URL */] + shop_url + "?" + Object(utils["d" /* renderParam */])("q", query.input) + Object(utils["d" /* renderParam */])("category", query.category) + Object(utils["d" /* renderParam */])("_limit", query.limit);
  return axiosService["a" /* default */].get(endpoint);
};
// CONCATENATED MODULE: ./src/redux/actions/shopActions.js

 //Get all products

const fetchProducts = () => ({
  type: actionTypes["e" /* SHOP */].FETCH_PRODUCTS
});
const fetchProductsSuccess = (data, productCount) => ({
  type: actionTypes["e" /* SHOP */].FETCH_PRODUCTS_SUCCESS,
  payload: {
    data,
    productCount
  }
});
const fetchProductsFail = err => ({
  type: actionTypes["e" /* SHOP */].FETCH_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchProductsRequest = query => {
  return dispatch => {
    dispatch(fetchProducts());
    fetchProductsData(query).then(res => {
      dispatch(fetchProductsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchProductsFail(err));
    });
  };
}; //Get sale products

const fetchSaleProducts = () => ({
  type: actionTypes["e" /* SHOP */].FETCH_SALE_PRODUCTS
});
const fetchSaleProductsSuccess = data => ({
  type: actionTypes["e" /* SHOP */].FETCH_SALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSaleProductsFail = err => ({
  type: actionTypes["e" /* SHOP */].FETCH_SALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchSaleProducts());
    fetchSaleProductsData(query).then(res => {
      dispatch(fetchSaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSaleProductsFail(err));
    });
  };
}; //Get featured products

const fetchFeaturedProducts = () => ({
  type: actionTypes["e" /* SHOP */].FETCH_FEATURED_PRODUCTS
});
const fetchFeaturedProductsSuccess = data => ({
  type: actionTypes["e" /* SHOP */].FETCH_FEATURED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchFeaturedProductsFail = err => ({
  type: actionTypes["e" /* SHOP */].FETCH_FEATURED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchFeaturedProductsRequest = query => {
  return dispatch => {
    dispatch(fetchFeaturedProducts());
    fetchFeaturedProductsData(query).then(res => {
      dispatch(fetchFeaturedProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchFeaturedProductsFail(err));
    });
  };
}; //Get best seller products

const fetchBestSellerProducts = () => ({
  type: actionTypes["e" /* SHOP */].FETCH_BEST_SELLER_PRODUCTS
});
const fetchBestSellerProductsSuccess = data => ({
  type: actionTypes["e" /* SHOP */].FETCH_BEST_SELLER_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchBestSellerProductsFail = err => ({
  type: actionTypes["e" /* SHOP */].FETCH_BEST_SELLER_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchBestSellerProductsRequest = query => {
  return dispatch => {
    dispatch(fetchBestSellerProducts());
    fetchBestSellerProductsData(query).then(res => {
      dispatch(fetchBestSellerProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchBestSellerProductsFail(err));
    });
  };
}; //Get best seller products

const fetchDaleProducts = () => ({
  type: actionTypes["e" /* SHOP */].FETCH_DALE_PRODUCTS
});
const fetchDaleProductsSuccess = data => ({
  type: actionTypes["e" /* SHOP */].FETCH_DALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchDaleProductsFail = err => ({
  type: actionTypes["e" /* SHOP */].FETCH_DALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchDaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchDaleProducts());
    fetchDaleProductsData(query).then(res => {
      dispatch(fetchDaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchDaleProductsFail(err));
    });
  };
}; //Get product detail

const fetchProductDetail = () => ({
  type: actionTypes["e" /* SHOP */].FETCH_PRODUCT_DETAIL
});
const fetchProductDetailSuccess = data => ({
  type: actionTypes["e" /* SHOP */].FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: {
    data
  }
});
const fetchProductDetailFail = err => ({
  type: actionTypes["e" /* SHOP */].FETCH_PRODUCT_DETAIL_FAIL,
  payload: {
    err
  }
});
const fetchProductDetailRequest = slug => {
  return dispatch => {
    dispatch(fetchProductDetail());
    fetchProductDetailData(slug).then(res => {
      dispatch(fetchProductDetailSuccess(res.data));
    }).catch(err => {
      dispatch(fetchProductDetailFail(err));
    });
  };
}; //Get searched product

const fetchSearchedProduct = () => ({
  type: actionTypes["e" /* SHOP */].FETCH_SEARCHED_PRODUCTS
});
const fetchSearchedProductSuccess = data => ({
  type: actionTypes["e" /* SHOP */].FETCH_SEARCHED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSearchedProductFail = err => ({
  type: actionTypes["e" /* SHOP */].FETCH_SEARCHED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSearchedProductRequest = query => {
  return dispatch => {
    dispatch(fetchSearchedProduct());
    fetchSearchedProductData(query).then(res => {
      dispatch(fetchSearchedProductSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSearchedProductFail(err));
    });
  };
};

/***/ }),

/***/ "PG6y":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Cà phê thải độc\",\"value\":\"coffee\"},{\"name\":\"Cà phê hòa tan\",\"value\":\"organic-coffee\"},{\"name\":\"Cà phê nguyên hạt - rang xay\",\"value\":\"bean-coffee\"},{\"name\":\"Các sản phẩm đặc biệt\",\"value\":\"special-coffee\"},{\"name\":\"Sản phẩm bán chạy\",\"value\":\"best-seller\"},{\"name\":\"Sản phẩm khuyến mãi\",\"value\":\"sale-product\"}]");

/***/ }),

/***/ "S/uq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("45lk");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PartnerOne({
  style
}) {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }]
  };
  return __jsx("div", {
    className: "partner-one",
    style: style
  }, __jsx("div", {
    className: "partner-one-wrapper"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, Array.from(Array(8), (e, i) => __jsx("div", {
    key: i,
    className: "slider-item"
  }, __jsx("a", {
    href: "#"
  }, __jsx("img", {
    src: "" + `/assets/images/sections/partners/${i + 1}.png`,
    alt: "Partner logo"
  })))))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PartnerOne));

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T1iM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tMd7");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function QuantitySelector({
  min,
  max,
  defaultValue = 1,
  className,
  onChange,
  onDecrease,
  onIncrease
}) {
  const firstUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue);
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(value, 300);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    onChange && onChange(value);
  }, [deboundValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const decreaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (min && value <= min) {
      return;
    } else {
      if (value <= 1) {
        return;
      }

      onDecrease && onDecrease();
      setValue(value - 1);
    }
  }, [value]);
  const increaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (value >= max) {
      return;
    }

    onIncrease && onIncrease();
    setValue(value + 1);
  }, [value]);
  return __jsx("div", {
    className: `quantity-selector ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
  }, __jsx("div", {
    className: "quantity-selector-number"
  }, value), __jsx("div", {
    className: "quantity-selector-controller"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value <= min || value <= 1,
    onClick: decreaseValue
  }, "-"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value >= max,
    onClick: increaseValue
  }, "+")));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(QuantitySelector));

/***/ }),

/***/ "TVAx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getProductsBySlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkProductCartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return checkProductInWishlist; });
const getProductsBySlug = (arr, slug) => {
  return slug && typeof slug === "string" ? arr.find(p => p.slug.toLowerCase() === slug.toLowerCase()) : arr;
};
const calculateTotalPrice = arr => {
  let total = 0;
  arr.forEach(item => {
    if (item.discount) {
      total += item.cartQuantity ? (item.price - item.discount) * item.cartQuantity : item.price - item.discount;
    } else {
      total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
    }
  });
  return total;
}; //Cart

const checkProductInCart = (cartArr, pid) => {
  return pid ? cartArr.find(item => item.productId === pid) : undefined;
};
const checkProductCartQuantity = (cartArr, pid) => {
  const productsInCart = cartArr.filter(item => item.productId === pid);

  if (productsInCart && productsInCart.length > 0) {
    const totalProductQuantityInCart = productsInCart.reduce((total, item) => total + item.cartQuantity, 0);
    return totalProductQuantityInCart;
  } else {
    return 0;
  }
}; //Wishlist

const checkProductInWishlist = (wishlistArr, pid) => {
  return pid ? wishlistArr.find(item => item.id === pid) : undefined;
};

/***/ }),

/***/ "TniP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SocialIcons({
  className,
  type = "link",
  shape
}) {
  return __jsx("ul", {
    className: `social-icons ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`
  }, __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#"
  }, __jsx("i", {
    className: "fab fa-facebook-f"
  }))), __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#"
  }, __jsx("i", {
    className: "fab fa-envelope"
  }))), __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#"
  }, __jsx("i", {
    className: "fab fa-invision"
  }))), __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#"
  }, __jsx("i", {
    className: "fab fa-pinterest-p"
  }))));
}

/***/ }),

/***/ "TpwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NfqO");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("kLkQ");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("TVAx");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("wQtD");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8hBj");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("evb0");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4LKf");
/* harmony import */ var _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("IS0P");
/* harmony import */ var _detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("y4J8");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Product({
  data,
  className,
  type,
  countdownLast = 100000000
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: addToWishlistLoading,
    1: setAddToWishlistLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.cartReducer);
  const wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.wishlistReducer);
  const compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.compareReducer);
  const productInWishlist = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__[/* checkProductInWishlist */ "d"])(wishlistState.data, data.id);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__[/* checkProductInWishlist */ "d"])(compareState, data.id);

  const showModal = () => {
    setModalVisible(true);
  };

  const onModalClose = e => {
    setModalVisible(false);
  };

  const onAddToCart = product => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_12__[/* onAddProductToCart */ "a"])({
      product,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__[/* fetchCartRequest */ "a"])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
      }
    });
  };

  const onAddWishlist = product => {
    if (addToWishlistLoading) {
      return;
    }

    setAddToWishlistLoading(true);

    if (!productInWishlist) {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__[/* onAddProductToWishlist */ "a"])({
        product,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__[/* fetchWishListRequest */ "a"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    } else {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__[/* onRemoveProductFromWishlist */ "b"])({
        productId: product.id,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__[/* fetchWishListRequest */ "a"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    }
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__[/* removeFromCompare */ "b"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__[/* addToCompare */ "a"])(product));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to compare");
    }
  };

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const rederProductType = type => {
    switch (type) {
      case "tiny":
        return __jsx("div", {
          className: `product-tiny ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`
        }, __jsx("div", {
          className: "product-tiny-img"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`
        }, __jsx("a", {
          title: data.name
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image"
        })))), __jsx("div", {
          className: "product-tiny-content"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`
        }, __jsx("a", {
          className: "product-tiny-name",
          title: "Pure Pineapple"
        }, data.name)), __jsx("h3", {
          className: "product-tiny-price"
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price), data.discount && __jsx("del", null, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price)))));

      case "dale":
        return __jsx("div", {
          className: `product-dale ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`
        }, __jsx("div", {
          className: "product-dale-img"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`
        }, __jsx("a", {
          title: data.name
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image"
        })))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
          date: Date.now() + getRandomArbitrary(100000000, 150000000),
          renderer: ({
            days,
            hours,
            minutes,
            seconds
          }) => {
            return __jsx("div", {
              className: "product-dale-countdown"
            }, __jsx("div", {
              className: "product-dale-countdown-item"
            }, __jsx("h6", null, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(days)), " ", __jsx("span", null, "days")), __jsx("div", {
              className: "product-dale-countdown-item"
            }, __jsx("h6", null, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(hours)), " ", __jsx("span", null, "hr")), __jsx("div", {
              className: "product-dale-countdown-item"
            }, __jsx("h6", null, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(minutes), " "), __jsx("span", null, "min")), __jsx("div", {
              className: "product-dale-countdown-item"
            }, __jsx("h6", null, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(seconds)), " ", __jsx("span", null, "sec")));
          }
        }), __jsx("div", {
          className: "product-dale-content"
        }, __jsx("h5", {
          className: "product-dale-type"
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`
        }, __jsx("a", {
          className: "product-dale-name",
          title: "Pure Pineapple"
        }, data.name)), __jsx("h3", {
          className: "product-dale-price"
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price), data.discount && __jsx("del", null, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price)))), __jsx("div", {
          className: "product-dale-select"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o y\xEAu th\xEDch"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true
          }) : __jsx("i", {
            className: "far fa-heart"
          })
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true
          }) : __jsx("i", {
            className: "far fa-shopping-bag"
          })
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "So s\xE1nh"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random"
          })
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Xem nhanh"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye"
          })
        }))));

      case "list":
        return __jsx("div", {
          className: "product-list"
        }, __jsx("div", {
          className: "product-img"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`
        }, __jsx("a", {
          title: data.name
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image"
        }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          onClick: showModal
        }, "Xem nhanh")), __jsx("div", {
          className: "product-list-content"
        }, __jsx("h5", {
          className: "product-type"
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple"
        }, data.name)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
          className: "product-rate",
          disabled: true,
          defaultValue: data.rate
        }), __jsx("p", {
          className: "product-description"
        }, data.shortDescription), data.quantity > 0 ? __jsx("h5", {
          className: "product-availability -instock"
        }, "S\u1ED1 l\u01B0\u1EE3ng: ", __jsx("span", null, " ", data.quantity, " c\xF2n h\xE0ng")) : __jsx("h5", {
          className: "product-availability -outstock"
        }, "S\u1ED1 l\u01B0\u1EE3ng: ", __jsx("span", null, " h\u1EBFt h\xE0ng"))), __jsx("div", {
          className: "product-list-actions"
        }, __jsx("div", {
          className: "product-detail-content__delivery"
        }, "Giao h\xE0ng mi\u1EC5n ph\xED"), __jsx("h3", {
          className: "product-detail-content__price"
        }, data.discount && __jsx("del", null, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price)), __jsx("div", {
          className: "product-detail-content__price-discount"
        }, __jsx("h5", null, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price)))), __jsx("div", {
          className: "product-detail-content__actions"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          loading: addToCartLoading,
          shape: "round"
        }, "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          shape: "round",
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })
        }, "So s\xE1nh"))));

      default:
        return __jsx("div", {
          className: `product ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`
        }, __jsx("div", {
          className: "product-img"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`
        }, __jsx("a", {
          title: data.name
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image"
        })))), __jsx("div", {
          className: "product-content"
        }, __jsx("h5", {
          className: "product-type"
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple"
        }, data.name)), __jsx("h3", {
          className: "product-price"
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price), data.discount && __jsx("del", null, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__[/* formatCurrency */ "a"])(data.price)))), __jsx("div", {
          className: "product-select"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o y\xEAu th\xEDch"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true
          }) : __jsx("i", {
            className: "far fa-heart"
          })
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true
          }) : __jsx("i", {
            className: "far fa-shopping-bag"
          })
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "So s\xE1nh"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random"
          })
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Xem nhanh"
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye"
          })
        }))));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rederProductType(type), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: modalVisible,
    onCancel: onModalClose,
    footer: null,
    header: null,
    width: 860
  }, __jsx(_detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    style: {
      marginBottom: 0
    },
    hideTab: true,
    data: data
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Product));

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "Y6Li":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("45lk");
/* harmony import */ var _elements_Navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BC1Y");
/* harmony import */ var _elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("eWQ9");
/* harmony import */ var _elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("14PJ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MenuOne() {
  return __jsx("div", {
    className: "menu -style-one"
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx("div", {
    className: "menu-wrapper"
  }, __jsx(_elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/"
  }, __jsx("a", {
    className: "menu-logo"
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Ogami logo"
  }))), __jsx(_elements_Navigator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), __jsx(_elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null))));
}

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YNgo":
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"background\":\"/assets/images/hero-slider/one/slideshow_1.jpg\",\"price\":{\"main\":\"14\",\"unit\":\"pakage\"}},{\"background\":\"/assets/images/hero-slider/one/slideshow_2.jpg\",\"price\":{\"main\":\"16\",\"unit\":\"pakage\"}}],\"four\":[{\"image\":\"/assets/images/hero-slider/four/1.png\",\"background\":\"/assets/images/hero-slider/four/bg-1.png\"},{\"image\":\"/assets/images/hero-slider/four/1.png\",\"background\":\"/assets/images/hero-slider/four/bg-2.png\"}]}");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "aPPC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HARd");
/* harmony import */ var _post_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("N0nX");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function BlogSlide({
  headerTitle,
  headerClass,
  postClassName,
  postType,
  data,
  className
}) {
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  return __jsx("div", {
    className: `blog-slide ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: headerTitle,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(headerClass)
  }), __jsx("div", {
    className: "blog-slide-content"
  }, data.loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    active: true
  }) : data.error ? __jsx("h3", null, "Get products fail, please try again") : data.data.length > 0 ? __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, settings, data.data.map((item, index) => __jsx("div", {
    key: index,
    className: "slide-item"
  }, __jsx(_post_Post__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(postClassName),
    type: postType,
    data: item
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No product in this category"
  })));
}

/***/ }),

/***/ "bJ4p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("PG6y");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("PG6y", 1);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tMd7");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ot64");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function SearchForm({
  enterButton = "Search",
  hideSelect
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: currentSearch,
    1: setCurrentSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: currentCategory,
    1: setCurrentCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(currentSearch, 300);
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);
  const {
    searchedProducts
  } = shopState;

  const onChange = val => {
    setCurrentSearch(val);
  };

  const onSelectOption = (value, option) => {
    setCurrentSearch(value);
  };

  const onSearch = val => {
    if (!currentSearch || currentSearch === "") {
      return;
    } else {
      router.push({
        pathname: "" + "/shop/shop-3-column",
        query: {
          q: currentSearch
        }
      });
    }
  };

  const onChooseCateogry = val => {
    setCurrentCategory(val);
  };

  const options = searchedProducts.data.length > 0 && searchedProducts.data.map(item => ({
    value: item.name
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__["fetchSearchedProductRequest"])({
      input: currentSearch,
      limit: 10,
      category: currentCategory
    }));
  }, [deboundValue, currentCategory]);
  return __jsx("div", {
    className: "search-form"
  }, __jsx("div", {
    className: "search-form-wrapper"
  }, __jsx("div", {
    className: "search-form-input"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    backfill: true,
    value: currentSearch,
    onSelect: onSelectOption,
    onChange: onChange,
    options: options,
    filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    placeholder: "Nh\u1EADp s\u1EA3n ph\u1EA9m c\u1EA7n t\xECm ... ",
    size: "large",
    enterButton: enterButton,
    bordered: false,
    loading: searchedProducts.loading,
    onSearch: onSearch
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchForm));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eWQ9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kLkQ");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TVAx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function FunctionItems({
  hideTotal,
  hideWishlist
}) {
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  return __jsx("div", {
    className: "function-items"
  }, !hideWishlist && __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/wishlist"
  }, __jsx("a", {
    className: "function-items-item"
  }, __jsx("i", {
    className: "icon_heart_alt"
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/cart"
  }, __jsx("a", {
    className: "function-items-item"
  }, __jsx("i", {
    className: "icon_bag_alt"
  }), !hideTotal && (cartState.data ? __jsx("span", null, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__[/* formatCurrency */ "a"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_4__[/* calculateTotalPrice */ "a"])(cartState.data))) : __jsx("span", null, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__[/* formatCurrency */ "a"])(0))))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(FunctionItems));

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "evb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeFromCompare; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yyPw");

const addToCompare = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* COMPARE */ "d"].ADD_TO_COMPARE,
  payload: {
    data
  }
});
const removeFromCompare = productId => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* COMPARE */ "d"].REMOVE_FROM_COMPARE,
  payload: {
    productId
  }
});

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "juyQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterSubcribeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+5HK");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  status,
  message,
  onValidated
}) => {
  const onFinish = value => {
    console.log("Success:", value);
    value && onValidated({
      EMAIL: value.email
    });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    className: "footer-subcribe__form"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    name: "email",
    rules: [{
      type: "email",
      message: "The input is not valid E-mail!"
    }, {
      required: true,
      message: "Please input your E-mail!"
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Nh\u1EADp email, nh\u1EADn \u01B0u \u0111\xE3i"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "link",
    htmlType: "submit"
  }, "\u0110\u0102NG K\xDD"))), status === "sending" && __jsx("div", {
    style: {
      color: "blue"
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }));
});
function FooterSubcribeInput({
  url
}) {
  return __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: url,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData)
    })
  });
}

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

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "lGS8":
/***/ (function(module) {

module.exports = JSON.parse("{\"HOME\":{\"title\":\"Trang chủ\",\"href\":\"/\"},\"SHOP\":{\"title\":\"Sản phẩm\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Cà phê Thải độc đại tràng\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Cà phê hòa tan\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Cà phê nguyên hạt - rang xay\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Sản phẩm đặc biệt\",\"href\":\"/shop/shop-3-column\"}]},\"BLOG\":{\"title\":\"Blog\",\"href\":\"/blog/blog-list-sidebar\"},\"SALE\":{\"title\":\"Khuyến mãi\",\"href\":\"/blog/blog-list-sidebar\"},\"CONTACT\":{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},\"INTRO\":{\"title\":\"Giới thiệu\",\"href\":\"/other/about-us\"},\"PAGES\":{\"title\":\"Pages\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Login\",\"href\":\"/auth/login\"},{\"title\":\"Register\",\"href\":\"/auth/register\"},{\"title\":\"FAQ\",\"href\":\"/other/faq\"},{\"title\":\"Coming Soon\",\"href\":\"/other/coming-soon\"},{\"title\":\"Contact Us\",\"href\":\"/other/contact-us\"}]},\"ABOUT\":{\"title\":\"Giới thiệu\",\"href\":\"/other/about-us\"}}");

/***/ }),

/***/ "n8JD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TpwS");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9MPT");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function ProductSlide({
  style,
  data,
  headerTitle,
  headerClass,
  productType,
  productClassName,
  className,
  rows
}) {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rows: rows ? rows : 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  const sliderRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  return __jsx("div", {
    className: `product-slide ${classnames__WEBPACK_IMPORTED_MODULE_3___default()(className)}`,
    style: style
  }, __jsx("div", {
    className: `product-slide-header ${classnames__WEBPACK_IMPORTED_MODULE_3___default()(headerClass)}`
  }, __jsx("h5", null, headerTitle), __jsx("div", {
    className: "product-slide-header__controller"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    icon: __jsx("i", {
      className: "fal fa-angle-left"
    }),
    onClick: () => sliderRef.current.slickPrev()
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    icon: __jsx("i", {
      className: "fal fa-angle-right"
    }),
    onClick: () => sliderRef.current.slickNext()
  }))), __jsx("div", {
    className: "product-slide-content"
  }, __jsx(_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    data: data,
    renderData: data => __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
      ref: sliderRef
    }, sliderSettings), data.map((item, index) => __jsx("div", {
      className: "slide-item",
      key: index
    }, __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      className: productClassName,
      type: productType,
      data: item
    }))))
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductSlide));

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "qDg5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let categories = [{
  name: "Fresh Meat",
  href: "/shop/shop-3-column"
}, {
  name: "Vegetables",
  href: "/shop/shop-3-column"
}, {
  name: "Fruit & Nut Gifts",
  href: "/shop/shop-3-column"
}, {
  name: "Fresh Berries",
  href: "/shop/shop-3-column"
}, {
  name: "Ocean Foods",
  href: "/shop/shop-3-column"
}, {
  name: "Butter & Eggs",
  href: "/shop/shop-3-column"
}, {
  name: "Fastfood",
  href: "/shop/shop-3-column"
}, {
  name: "Fresh Onion",
  href: "/shop/shop-3-column"
}, {
  name: "Papayaya & Crisps",
  href: "/shop/shop-3-column"
}, {
  name: "Oatmeal",
  href: "/shop/shop-3-column"
}, {
  name: "Fresh Bananas",
  href: "/shop/shop-3-column"
}];

function CategoryColappse({
  active
}) {
  const {
    Panel
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"];
  return __jsx("div", {
    className: "category-collapse"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    bordered: false,
    defaultActiveKey: active ? "1" : null,
    expandIcon: ({
      isActive
    }) => __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownOutlined"], {
      rotate: isActive ? -180 : 0
    }),
    expandIconPosition: "right"
  }, __jsx(Panel, {
    header: "C\xE0 ph\xEA \u0111\xF3ng g\xF3i",
    key: "1",
    extra: __jsx("i", {
      className: "far fa-bars"
    })
  }, __jsx("ul", null, categories.map((item, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href
  }, __jsx("a", null, item.name))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CategoryColappse));

/***/ }),

/***/ "tMd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y4J8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/other/Container.js
var Container = __webpack_require__("45lk");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./src/components/detail/product/elements/ProductDetailImages.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function ProductDetailImages({
  type,
  images
}) {
  const slider1Settings = {
    arrows: false
  };
  const slider2Settings = {
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: true,
    vertical: type === "column" ? true : false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [{
      breakpoint: 992,
      settings: {
        vertical: type === "column" && false
      }
    }]
  };
  const {
    0: nav1,
    1: setNav1
  } = Object(external_react_["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(external_react_["useState"])(); // if (type === "column") {
  //   return <h1>Column</h1>;
  // }

  return __jsx("div", {
    className: `product-detail-images ${external_classnames_default()({
      "-column": type === "column"
    })}`
  }, __jsx("div", {
    className: "product-detail-images-big"
  }, __jsx(external_react_slick_default.a, _extends({
    asNavFor: nav2,
    ref: c => setNav1(c)
  }, slider1Settings), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item"
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image"
  }))))), __jsx("div", {
    className: "product-detail-images-small"
  }, __jsx(external_react_slick_default.a, _extends({
    asNavFor: nav1,
    ref: c => setNav2(c)
  }, slider2Settings), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item"
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image"
  }))))));
}

/* harmony default export */ var elements_ProductDetailImages = (/*#__PURE__*/external_react_default.a.memo(ProductDetailImages));
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// EXTERNAL MODULE: ./src/common/shopUtils.js
var shopUtils = __webpack_require__("TVAx");

// EXTERNAL MODULE: ./src/components/other/QuantitySelector.js
var QuantitySelector = __webpack_require__("T1iM");

// EXTERNAL MODULE: ./src/components/other/SocialIcons.js
var SocialIcons = __webpack_require__("TniP");

// EXTERNAL MODULE: ./src/common/cartServices.js
var cartServices = __webpack_require__("4LKf");

// EXTERNAL MODULE: ./src/redux/actions/cartActions.js
var cartActions = __webpack_require__("wQtD");

// EXTERNAL MODULE: ./src/redux/actions/compareActions.js
var compareActions = __webpack_require__("evb0");

// CONCATENATED MODULE: ./src/components/detail/product/elements/ProductDetailContent.js
var ProductDetailContent_jsx = external_react_default.a.createElement;











function ProductDetailContent({
  data,
  type
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: currentQuantity,
    1: setCurrentQuantity
  } = Object(external_react_["useState"])(1);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(external_react_["useState"])(false);
  const cartState = Object(external_react_redux_["useSelector"])(state => state.cartReducer);
  const compareState = Object(external_react_redux_["useSelector"])(state => state.compareReducer);
  const productInCompare = Object(shopUtils["d" /* checkProductInWishlist */])(compareState, data.id);
  const avaiableQuantity = data.quantity - Object(shopUtils["b" /* checkProductCartQuantity */])(cartState.data, data.id);
  console.log(avaiableQuantity);

  const onAddToCart = (product, quantity) => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(cartServices["a" /* onAddProductToCart */])({
      product,
      quantity,
      onSuccess: data => {
        setAddToCartLoading(false);
        external_antd_["message"].success("Product added to cart");
        dispatch(Object(cartActions["a" /* fetchCartRequest */])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        external_antd_["message"].error(mes);
        console.log(err);
      }
    });
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(compareActions["b" /* removeFromCompare */])(product.id));
      external_antd_["message"].error("Product removed from compare");
    } else {
      dispatch(Object(compareActions["a" /* addToCompare */])(product));
      external_antd_["message"].success("Product added to compare");
    }
  };

  if (type === "fluid") {
    return ProductDetailContent_jsx("div", {
      className: "product-detail-content -wide"
    }, ProductDetailContent_jsx(external_antd_["Row"], null, ProductDetailContent_jsx(external_antd_["Col"], {
      xs: 24,
      sm: 24,
      xl: 16
    }, ProductDetailContent_jsx("div", {
      className: "product-detail-content__left"
    }, ProductDetailContent_jsx("h5", {
      className: "product-type"
    }, data.category), ProductDetailContent_jsx("h2", {
      className: "product-detail-content__name"
    }, data.name), ProductDetailContent_jsx("div", {
      className: "product-detail-content__description"
    }, ProductDetailContent_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), ProductDetailContent_jsx("p", null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), ProductDetailContent_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), ProductDetailContent_jsx("p", null, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."), ProductDetailContent_jsx("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor."), ProductDetailContent_jsx("p", null, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem")), ProductDetailContent_jsx("ul", {
      className: "product-detail-content__meta"
    }, ProductDetailContent_jsx("li", null, ProductDetailContent_jsx("span", null, "SKU:"), " A1359"), ProductDetailContent_jsx("li", null, ProductDetailContent_jsx("span", null, "Categories:"), " Fastfood"), ProductDetailContent_jsx("li", null, ProductDetailContent_jsx("span", null, "Tag:"), " Food, Organic")), ProductDetailContent_jsx("div", {
      className: "product-detail-content__share"
    }, ProductDetailContent_jsx("h5", null, "Chia s\u1EBB:"), ProductDetailContent_jsx(SocialIcons["a" /* default */], null)))), ProductDetailContent_jsx(external_antd_["Col"], {
      xs: 24,
      sm: 24,
      xl: 8
    }, ProductDetailContent_jsx("div", {
      className: "product-detail-content__right"
    }, ProductDetailContent_jsx("div", {
      className: "product-detail-content__delivery"
    }, "Giao h\xE0ng mi\u1EC5n ph\xED"), ProductDetailContent_jsx("h3", {
      className: "product-detail-content__price"
    }, data.discount && ProductDetailContent_jsx("del", null, Object(utils["a" /* formatCurrency */])(data.price)), ProductDetailContent_jsx("div", {
      className: "product-detail-content__price-discount"
    }, ProductDetailContent_jsx("h5", null, data.discount ? Object(utils["a" /* formatCurrency */])(data.price - data.discount) : Object(utils["a" /* formatCurrency */])(data.price)), ProductDetailContent_jsx("span", null, ProductDetailContent_jsx(external_antd_["Rate"], {
      defaultValue: data.rate
    })))), ProductDetailContent_jsx(QuantitySelector["a" /* default */], {
      onChange: val => setCurrentQuantity(val),
      max: avaiableQuantity
    }), ProductDetailContent_jsx("div", {
      className: "product-detail-content__actions"
    }, ProductDetailContent_jsx(external_antd_["Button"], {
      loading: addToCartLoading,
      onClick: () => onAddToCart(data, currentQuantity),
      shape: "round"
    }, "Add to cart"), ProductDetailContent_jsx(external_antd_["Button"], {
      onClick: () => onAddToCompare(data),
      className: external_classnames_default()({
        active: productInCompare
      }),
      shape: "round"
    }, "Add to compare")), ProductDetailContent_jsx("ul", {
      className: "product-detail-content__benefits"
    }, ProductDetailContent_jsx("li", null, "Satisfaction 100% Guaranteed"), ProductDetailContent_jsx("li", null, "Free shipping on orders over $99"), ProductDetailContent_jsx("li", null, "14 day easy Return"))))));
  }

  return ProductDetailContent_jsx("div", {
    className: "product-detail-content"
  }, ProductDetailContent_jsx("h5", {
    className: "product-type"
  }, data.category), ProductDetailContent_jsx("h2", {
    className: "product-detail-content__name"
  }, data.name), ProductDetailContent_jsx("p", {
    className: "product-detail-content__description",
    style: {
      whiteSpace: "pre"
    }
  }, data.shortDescription), ProductDetailContent_jsx("div", {
    className: "product-detail-content__delivery"
  }, "Giao h\xE0ng mi\u1EC5n ph\xED"), ProductDetailContent_jsx("h3", {
    className: "product-detail-content__price"
  }, data.discount && ProductDetailContent_jsx("del", null, Object(utils["a" /* formatCurrency */])(data.price)), ProductDetailContent_jsx("div", {
    className: "product-detail-content__price-discount"
  }, ProductDetailContent_jsx("h5", null, data.discount ? Object(utils["a" /* formatCurrency */])(data.price - data.discount) : Object(utils["a" /* formatCurrency */])(data.price)), ProductDetailContent_jsx("span", null, ProductDetailContent_jsx(external_antd_["Rate"], {
    defaultValue: data.rate
  })))), ProductDetailContent_jsx(QuantitySelector["a" /* default */], {
    onChange: val => setCurrentQuantity(val),
    max: avaiableQuantity
  }), ProductDetailContent_jsx("div", {
    className: "product-detail-content__actions"
  }, ProductDetailContent_jsx(external_antd_["Button"], {
    loading: addToCartLoading,
    onClick: () => onAddToCart(data, currentQuantity),
    shape: "round"
  }, "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"), ProductDetailContent_jsx(external_antd_["Button"], {
    onClick: () => onAddToCompare(data),
    className: external_classnames_default()({
      active: productInCompare
    }),
    shape: "round"
  }, "So s\xE1nh")), ProductDetailContent_jsx("div", {
    className: "product-detail-content__share"
  }, ProductDetailContent_jsx("h5", null, "Chia s\u1EBB:"), ProductDetailContent_jsx(SocialIcons["a" /* default */], null)));
}

/*#__PURE__*/
external_react_default.a.memo(ProductDetailContent);
// EXTERNAL MODULE: ./src/components/other/FetchDataHandle.js
var FetchDataHandle = __webpack_require__("9MPT");

// CONCATENATED MODULE: ./src/components/detail/product/elements/ProductDetailTab.js
var ProductDetailTab_jsx = external_react_default.a.createElement;


const {
  TabPane
} = external_antd_["Tabs"];

const ReviewItem = ({
  data
}) => {
  console.log(data);
  return ProductDetailTab_jsx("div", {
    className: "product-detail-tab__reviews-item"
  }, ProductDetailTab_jsx("div", {
    className: "product-detail-tab__reviews-item__avatar"
  }, ProductDetailTab_jsx("img", {
    src: "" + data.user.avatar,
    alt: "Customer avatar"
  }), ProductDetailTab_jsx(external_antd_["Rate"], {
    defaultValue: 5,
    disabled: true
  })), ProductDetailTab_jsx("div", {
    className: "product-detail-tab__reviews-item__content"
  }, ProductDetailTab_jsx("h5", null, data.commentDate), ProductDetailTab_jsx("h3", null, data.user.name), ProductDetailTab_jsx("p", null, data.review)));
};

function ProductDetailTab({
  fullDescription,
  specifications,
  reviews
}) {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return ProductDetailTab_jsx("div", {
    className: "product-detail-tab"
  }, ProductDetailTab_jsx(external_antd_["Tabs"], {
    defaultActiveKey: "1",
    type: "card"
  }, ProductDetailTab_jsx(TabPane, {
    tab: "M\xF4 t\u1EA3",
    key: "1"
  }, ProductDetailTab_jsx("div", {
    className: "product-detail-tab__description"
  }, fullDescription)), ProductDetailTab_jsx(TabPane, {
    tab: "Chi ti\u1EBFt",
    key: "2"
  }, ProductDetailTab_jsx("div", {
    className: "product-detail-tab__specifications"
  }, ProductDetailTab_jsx("table", null, ProductDetailTab_jsx("tbody", null, ProductDetailTab_jsx("tr", null, ProductDetailTab_jsx("td", null, "Kh\u1ED1i l\u01B0\u1EE3ng"), ProductDetailTab_jsx("td", null, specifications.weight)), ProductDetailTab_jsx("tr", null, ProductDetailTab_jsx("td", null, "Lo\u1EA1i"), ProductDetailTab_jsx("td", null, specifications.color)), ProductDetailTab_jsx("tr", null, ProductDetailTab_jsx("td", null, "Size"), ProductDetailTab_jsx("td", null, specifications.size)))))), ProductDetailTab_jsx(TabPane, {
    tab: "Reviews",
    key: "3"
  }, ProductDetailTab_jsx("div", {
    className: "product-detail-tab__reviews"
  }, reviews.map((item, index) => ProductDetailTab_jsx(ReviewItem, {
    key: index,
    data: item
  })), ProductDetailTab_jsx("div", {
    className: "product-detail-tab__reviews-form"
  }, ProductDetailTab_jsx("h5", null, "\u0110\xE1nh gi\xE1"), ProductDetailTab_jsx(external_antd_["Form"], {
    name: "review",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
  }, ProductDetailTab_jsx(external_antd_["Row"], {
    gutter: 15
  }, ProductDetailTab_jsx(external_antd_["Col"], {
    xs: 24,
    md: 12
  }, ProductDetailTab_jsx(external_antd_["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Please input your name!"
    }]
  }, ProductDetailTab_jsx(external_antd_["Input"], {
    placeholder: "H\u1ECD t\xEAn"
  }))), ProductDetailTab_jsx(external_antd_["Col"], {
    xs: 24,
    md: 12
  }, ProductDetailTab_jsx(external_antd_["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: "Please input your email!"
    }]
  }, ProductDetailTab_jsx(external_antd_["Input"], {
    placeholder: "Email"
  }))), ProductDetailTab_jsx(external_antd_["Col"], {
    span: 24
  }, ProductDetailTab_jsx(external_antd_["Form"].Item, {
    name: "rate",
    label: "Ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m"
  }, ProductDetailTab_jsx(external_antd_["Rate"], null))), ProductDetailTab_jsx(external_antd_["Col"], {
    span: 24
  }, ProductDetailTab_jsx(external_antd_["Form"].Item, {
    name: "message"
  }, ProductDetailTab_jsx(external_antd_["Input"].TextArea, {
    placeholder: "N\u1ED9i dung"
  }))), ProductDetailTab_jsx(external_antd_["Col"], null, ProductDetailTab_jsx(external_antd_["Form"].Item, null, ProductDetailTab_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    shape: "round"
  }, "\u0110\xE1nh gi\xE1"))))))))));
}

/* harmony default export */ var elements_ProductDetailTab = (/*#__PURE__*/external_react_default.a.memo(ProductDetailTab));
// CONCATENATED MODULE: ./src/components/detail/product/ProductDetailLayout.js
var ProductDetailLayout_jsx = external_react_default.a.createElement;








function ProductDetailLayout({
  data,
  type,
  hideTab,
  style
}) {
  if (type === "fluid") {
    return ProductDetailLayout_jsx("div", {
      className: "product-detail",
      style: style
    }, ProductDetailLayout_jsx(external_antd_["Row"], {
      gutter: 30
    }, ProductDetailLayout_jsx(external_antd_["Col"], {
      md: 10
    }, ProductDetailLayout_jsx(elements_ProductDetailImages, {
      type: "column",
      images: data.images
    })), ProductDetailLayout_jsx(external_antd_["Col"], {
      md: 14
    }, ProductDetailLayout_jsx(ProductDetailContent, {
      type: "fluid",
      data: data
    })), ProductDetailLayout_jsx(external_antd_["Col"], {
      md: 24
    }, !hideTab && ProductDetailLayout_jsx(elements_ProductDetailTab, {
      fullDescription: data.fullDescription,
      specifications: data.specifications,
      reviews: data.reviews
    }))));
  }

  return ProductDetailLayout_jsx("div", {
    className: "product-detail",
    style: style
  }, ProductDetailLayout_jsx(external_antd_["Row"], {
    gutter: 30
  }, ProductDetailLayout_jsx(external_antd_["Col"], {
    md: 12
  }, ProductDetailLayout_jsx(elements_ProductDetailImages, {
    images: data.images
  })), ProductDetailLayout_jsx(external_antd_["Col"], {
    md: 12
  }, ProductDetailLayout_jsx(ProductDetailContent, {
    data: data
  })), ProductDetailLayout_jsx(external_antd_["Col"], {
    xs: 24,
    md: 24
  }, !hideTab && ProductDetailLayout_jsx(elements_ProductDetailTab, {
    fullDescription: data.fullDescription,
    specifications: data.specifications,
    reviews: data.reviews
  }))));
}

/* harmony default export */ var product_ProductDetailLayout = __webpack_exports__["a"] = (/*#__PURE__*/external_react_default.a.memo(ProductDetailLayout));

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