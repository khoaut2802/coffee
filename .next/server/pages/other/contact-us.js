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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y+Mv");


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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "NmoQ":
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"PHÁP LÝ & CÂU HỎI\",\"items\":[{\"title\":\"Câu chuyện OC\",\"href\":\"/other/about-us\"},{\"title\":\"Chính sách đổi trả\",\"href\":\"/shop/checkout\"},{\"title\":\"Chính sách bảo mật\",\"href\":\"/other/contact-us\"},{\"title\":\"Điều khoản dịch vụ\",\"href\":\"#\"}]},{\"title\":\"Tài khoản\",\"items\":[{\"title\":\"Thông tin tài khoản\",\"href\":\"#\"},{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},{\"title\":\"Giỏ hàng\",\"href\":\"/shop/cart\"},{\"title\":\"Theo dõi đơn hàng\",\"href\":\"#\"}]},{\"title\":\"Tài khoản\",\"items\":[{\"title\":\"Thông tin tài khoản\",\"href\":\"#\"},{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},{\"title\":\"Giỏ hàng\",\"href\":\"/shop/cart\"},{\"title\":\"Theo dõi đơn hàng\",\"href\":\"#\"}]}]");

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

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "kckt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_HeaderOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3DfF");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dq34");
/* harmony import */ var _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("E9In");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ScrolledHeader = Object(_common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_header_HeaderOne__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

function LayoutOne({
  title,
  children,
  headerClass,
  footerClass
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title)), __jsx(ScrolledHeader, {
    className: headerClass
  }), children, __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: footerClass
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], null));
}

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LayoutOne));

/***/ }),

/***/ "lGS8":
/***/ (function(module) {

module.exports = JSON.parse("{\"HOME\":{\"title\":\"Trang chủ\",\"href\":\"/\"},\"SHOP\":{\"title\":\"Sản phẩm\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Cà phê Thải độc đại tràng\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Cà phê hòa tan\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Cà phê nguyên hạt - rang xay\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Sản phẩm đặc biệt\",\"href\":\"/shop/shop-3-column\"}]},\"BLOG\":{\"title\":\"Blog\",\"href\":\"/blog/blog-list-sidebar\"},\"SALE\":{\"title\":\"Khuyến mãi\",\"href\":\"/blog/blog-list-sidebar\"},\"CONTACT\":{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},\"INTRO\":{\"title\":\"Giới thiệu\",\"href\":\"/other/about-us\"},\"PAGES\":{\"title\":\"Pages\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Login\",\"href\":\"/auth/login\"},{\"title\":\"Register\",\"href\":\"/auth/register\"},{\"title\":\"FAQ\",\"href\":\"/other/faq\"},{\"title\":\"Coming Soon\",\"href\":\"/other/coming-soon\"},{\"title\":\"Contact Us\",\"href\":\"/other/contact-us\"}]},\"ABOUT\":{\"title\":\"Giới thiệu\",\"href\":\"/other/about-us\"}}");

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

/***/ "y+Mv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kckt");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("45lk");
/* harmony import */ var _components_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HARd");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function contactUs() {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx(_components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Contact us"
  }, __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"], {
    separator: ">"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"].Item, null, __jsx("i", {
    className: "fas fa-home"
  }), "Trang ch\u1EE7"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"].Item, null, "Li\xEAn h\u1EC7")), __jsx("div", {
    className: "contact"
  }, __jsx("div", {
    className: "contact-map"
  }, __jsx("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62339.37199646393!2d107.95212508374871!3d12.43567424943752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zS-G7syAtIFRyYW5nIFRow7RuIDUgeMOjIELDrG5oIEjDsmEsIEh1eeG7h24gS3LDtG5nIEFuYSwgVOG7iW5oIMSQxINrIEzEg2s!5e0!3m2!1svi!2s!4v1681153821828!5m2!1svi!2s",
    width: "100%",
    height: "600",
    frameborder: "0",
    style: {
      border: 0
    },
    allowFullScreen: "",
    "aria-hidden": "false",
    tabindex: "0"
  })), __jsx("div", {
    className: "contact-methods"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: 15
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    md: 8
  }, __jsx("div", {
    className: "contact-methods-item"
  }, __jsx("i", {
    className: "fal fa-map-marker-alt"
  }), __jsx("p", null, "K\u1EF3 - Trang Th\xF4n 5 x\xE3 B\xECnh H\xF2a"), __jsx("p", null, "Huy\u1EC7n Kr\xF4ng Ana, T\u1EC9nh \u0110\u0103k L\u0103k"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    md: 8
  }, __jsx("div", {
    className: "contact-methods-item"
  }, __jsx("i", {
    className: "fal fa-envelope"
  }), __jsx("p", null, __jsx("span", null, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:"), " 0974 001 671"), __jsx("p", null, __jsx("span", null, "Email:"), " organiccoffee_dl@gmail.com"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    md: 8
  }, __jsx("div", {
    className: "contact-methods-item"
  }, __jsx("i", {
    className: "fal fa-clock"
  }), __jsx("p", null, __jsx("span", null, "Th\u1EDDi gian l\xE0m vi\u1EC7c:"), " 08:00 \u2013 22:00"), __jsx("p", null, __jsx("span", null, "Ch\u1EE7 nh\u1EADt:"), " Ngh\u1EC9"))))), __jsx("div", {
    className: "contact-form"
  }, __jsx("div", {
    className: "contact-form__title"
  }, __jsx(_components_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    hideDecoration: true,
    title: "\u0110\u1EC3 l\u1EA1i tin nh\u1EAFn cho ch\xFAng t\xF4i",
    className: "-center"
  }), __jsx("p", null, "\u0110\u1ED9i ng\u0169 c\u1EE7a ch\xFAng t\xF4i s\u1EBD g\u1ECDi l\u1EA1i sau v\xE0 tr\u1EA3 l\u1EDDi c\xE1c c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n")), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    name: "review",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: 30
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    md: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Vui lòng nhập họ tên!"
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "H\u1ECD T\xEAn"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    xs: 24,
    md: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: "Vui lòng nhập email!"
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "Email"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "message"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
    placeholder: "N\u1ED9i dung"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    htmlType: "submit",
    shape: "round"
  }, "G\u1EEDi")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(contactUs));

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });