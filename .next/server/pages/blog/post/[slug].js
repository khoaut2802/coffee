module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("apj+");


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

/***/ "Zuxe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actionTypes.js
var actionTypes = __webpack_require__("yyPw");

// CONCATENATED MODULE: ./src/redux/actions/blogFilterActions.js


const resetBlogFilter = () => {
  type: actionTypes["b" /* BLOG_FILTER */].RESET_FILTERS;
};

const setCurrentCategory = category => {
  return {
    type: actionTypes["b" /* BLOG_FILTER */].SET_CATEGORY,
    category: category
  };
};
const setCurrentTag = tag => {
  return {
    type: actionTypes["b" /* BLOG_FILTER */].SET_TAG,
    tag: tag
  };
};
// EXTERNAL MODULE: ./src/components/other/FetchDataHandle.js
var FetchDataHandle = __webpack_require__("9MPT");

// EXTERNAL MODULE: ./src/components/post/Post.js
var Post = __webpack_require__("N0nX");

// CONCATENATED MODULE: ./src/components/blog/BlogSidebar.js
var __jsx = external_react_default.a.createElement;







const BlogSidebar_data = {
  categories: [{
    name: "Câu chuyện OC",
    value: "story"
  }, {
    name: "Khuyến mãi",
    value: "sale"
  }, {
    name: "Blog",
    value: "blog"
  }, {
    name: "Đăng ký đại lý",
    value: "register"
  }],
  tags: [{
    name: "Tất cả",
    value: ""
  }, {
    name: "cauchuyen",
    value: "story"
  }, {
    name: "khuyenmai",
    value: "sale"
  }, {
    name: "blog",
    value: "blog"
  }]
};

const BlogSidebarSection = ({
  children,
  title,
  className
}) => {
  return __jsx("div", {
    className: `blog-sidebar-section ${external_classnames_default()(className)}`
  }, __jsx("div", {
    className: "blog-sidebar-section__header"
  }, __jsx("h5", null, title)), __jsx("div", {
    className: "blog-sidebar-section__content"
  }, children));
};

function BlogSidebar({
  recentPostsData
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const blogFilterState = Object(external_react_redux_["useSelector"])(state => state.blogFilterReducer);
  const {
    category,
    tag
  } = blogFilterState;

  const onChooseCategory = (e, val) => {
    e.preventDefault();
    dispatch(setCurrentCategory(val));
  };

  const onChooseTag = val => {
    dispatch(setCurrentTag(val));
  };

  return __jsx("div", {
    className: "blog-sidebar"
  }, __jsx(BlogSidebarSection, {
    className: "-categories",
    title: "Danh m\u1EE5c"
  }, __jsx("ul", null, __jsx("li", {
    className: external_classnames_default()({
      active: category === ""
    })
  }, __jsx("a", {
    onClick: e => onChooseCategory(e, ""),
    href: "" + "#"
  }, "Trang ch\u1EE7")), BlogSidebar_data.categories.map((item, index) => __jsx("li", {
    className: external_classnames_default()({
      active: category === item.value
    }),
    key: index
  }, __jsx("a", {
    onClick: e => onChooseCategory(e, item.value),
    href: "#"
  }, item.name))))), __jsx(BlogSidebarSection, {
    className: "-recent-post",
    title: "B\xE0i vi\u1EBFt g\u1EA7n \u0111\xE2y"
  }, __jsx(FetchDataHandle["a" /* default */], {
    data: recentPostsData,
    renderData: data => data.map((item, index) => __jsx(Post["a" /* default */], {
      key: index,
      type: "tiny",
      data: item
    }))
  })), __jsx(BlogSidebarSection, {
    className: "-tags",
    title: "Tags"
  }, BlogSidebar_data.tags.map((item, index) => __jsx(external_antd_["Button"], {
    className: external_classnames_default()({
      active: tag === item.value
    }),
    onClick: () => onChooseTag(item.value),
    key: index
  }, item.name))));
}

/* harmony default export */ var blog_BlogSidebar = __webpack_exports__["a"] = (/*#__PURE__*/external_react_default.a.memo(BlogSidebar));

/***/ }),

/***/ "apj+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actions/blogActions.js + 1 modules
var blogActions = __webpack_require__("F0Hh");

// EXTERNAL MODULE: ./src/components/layout/LayoutOne.js
var LayoutOne = __webpack_require__("kckt");

// EXTERNAL MODULE: ./src/components/other/Container.js
var Container = __webpack_require__("45lk");

// EXTERNAL MODULE: ./src/components/blog/BlogSidebar.js + 1 modules
var BlogSidebar = __webpack_require__("Zuxe");

// EXTERNAL MODULE: ./src/components/other/SocialIcons.js
var SocialIcons = __webpack_require__("TniP");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// CONCATENATED MODULE: ./src/components/detail/post/elements/PostDetailComment.js
var __jsx = external_react_default.a.createElement;




function PostDetailCommentItem({
  data
}) {
  return __jsx("div", {
    className: "post-detail-comment__item"
  }, __jsx("div", {
    className: "post-detail-comment__item-avatar"
  }, __jsx(external_antd_["Image"], {
    width: "80",
    height: "80",
    src: "" + data.user.avatar,
    alt: "User avatar image",
    placeholder: true
  })), __jsx("div", {
    className: "post-detail-comment__item-content"
  }, __jsx("h5", null, Object(utils["b" /* formatDate */])(data.commentDate)), __jsx("h3", null, data.user.name), __jsx("p", null, data.comment), __jsx("div", {
    className: "post-detail-comment__item-content__button"
  }, __jsx(external_antd_["Button"], null, "Like"), __jsx(external_antd_["Button"], null, "Reply")), __jsx("div", {
    className: "post-detail-comment__item-content__reply"
  }, data.reply && data.reply.map(item => __jsx(PostDetailCommentItem, {
    data: item
  })))));
}

function PostDetailComment({
  data
}) {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx("div", {
    className: "post-detail-comment"
  }, __jsx("div", {
    className: "post-detail-comment__list"
  }, __jsx("h3", {
    className: "post-detail-comment__title"
  }, "4 B\xECnh lu\u1EADn"), data.map(item => __jsx(PostDetailCommentItem, {
    data: item
  }))), __jsx("div", {
    className: "post-detail-comment__new"
  }, __jsx("h3", {
    className: "post-detail-comment__title"
  }, "\u0110\u1EC3 l\u1EA1i b\xECnh lu\u1EADn"), __jsx(external_antd_["Form"], {
    layout: "vertical",
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
  }, __jsx(external_antd_["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Vui lòng nhập họ tên!"
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "H\u1ECD t\xEAn"
  })), __jsx(external_antd_["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: "Vui lòng nhập Email!"
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "Email"
  })), __jsx(external_antd_["Form"].Item, {
    name: "message"
  }, __jsx(external_antd_["Input"].TextArea, {
    placeholder: "Vi\u1EBFt b\xECnh lu\u1EADn"
  })), __jsx(external_antd_["Form"].Item, null, __jsx(external_antd_["Button"], {
    type: "primary",
    shape: "round",
    htmlType: "submit"
  }, "G\u1EEDi")))));
}

/* harmony default export */ var elements_PostDetailComment = (/*#__PURE__*/external_react_default.a.memo(PostDetailComment));
// CONCATENATED MODULE: ./src/components/detail/post/PostDetailLayout.js
var PostDetailLayout_jsx = external_react_default.a.createElement;





function PostDetailContent({
  data
}) {
  return PostDetailLayout_jsx("div", {
    className: "post-detail-content"
  }, PostDetailLayout_jsx("div", {
    className: "post-detail-content__main"
  }, PostDetailLayout_jsx("h1", {
    className: "post-detail-title"
  }, data.title, " "), PostDetailLayout_jsx("h3", {
    className: "post-detail-subtitle"
  }, "H\xE0nh tr\xECnh t\u1EA1o n\xEAn th\u01B0\u01A1ng hi\u1EC7u OC"), PostDetailLayout_jsx("p", {
    className: "post-detail-paragraph"
  }, "1. C\xE2y gi\u1ED1ng (From seeds)", PostDetailLayout_jsx("br", null), "L\xFAc \u0111\xF3 d\xE2n \u0111\u1ECBa ph\u01B0\u01A1ng \u0111a s\u1ED1 c\u0169ng tr\u1ED3ng c\xE0 ph\xEA. H\u1ECD \u0111\u1EC1u mua c\xE2y gi\u1ED1ng t\u1EEB c\xE1c h\u1ED9 \u01B0\u01A1m c\xE2y gi\u1ED1ng trong v\xF9ng, nh\u01B0ng ng\u01B0\u1EDDi ph\u1EE5 n\u1EEF \u1EA5y nh\u1EA5t \u0111\u1ECBnh l\xE0 mua c\xE2y gi\u1ED1ng c\u1EE7a vi\u1EC7n Eakmat, d\xF9 r\u1EB1ng gi\xE1 c\xE2y gi\u1ED1ng c\u1EE7a vi\u1EC7n cao h\u01A1n \u0111\u1EBFn 40%. Th\u1EADt ra , l\xFAc \u1EA5y b\xE0 ch\u01B0a c\xF3 kh\xE1i ni\u1EC7m g\xEC v\u1EC1 c\xE2y bi\u1EBFn \u0111\u1ED5i gien, b\xE0 ch\u1EC9 ngh\u0129 r\u1EB1ng mua c\xE2y c\u1EE7a vi\u1EC7n, sau 5 n\u0103m n\u1EBFu kh\xF4ng c\xF3 tr\xE1i th\xEC c\u0169ng c\xF2n c\xF3 ch\u1ED7 \u0111\u1EC3 khi\u1EBFu n\u1EA1i. Kh\xF4ng ng\u1EDD quy\u1EBFt \u0111\u1ECBnh n\xE0y c\u1EE7a b\xE0 l\xE0 1 quy\u1EBFt \u0111\u1ECBnh r\u1EA5t s\xE1ng su\u1ED1t, n\xF3 gi\xFAp cho con g\xE1i c\u1EE7a b\xE0, sau khi ti\u1EBFp qu\u1EA3n v\u01B0\u1EDDn c\xE0 ph\xEA c\xF3 th\u1EC3 thu\u1EADn l\u1EE3i xin ch\u1EE9ng ch\u1EC9 c\xE0 ph\xEA h\u1EEFu c\u01A1 do B\u1ED9 N\xF4ng nghi\u1EC7p m\u1EF9 c\u1EA5p.", PostDetailLayout_jsx("br", null), "2. Ph\xE2n b\xF3n - Chuy\u1EC3n \u0111\u1ED5i h\u1EEFu c\u01A1", PostDetailLayout_jsx("br", null), "N\u0103m 2005, do tu\u1ED5i cao , s\u1EE9c y\u1EBFu, b\xE0 giao l\u1EA1i v\u01B0\u1EDDn cho v\u1EE3 ch\u1ED3ng ng\u01B0\u1EDDi con g\xE1i l\u1EDBn v\xE0 sang M\u1EF9 sinh s\u1ED1ng v\u1EDBi 3 ng\u01B0\u1EDDi con sau. C\xF4 con g\xE1i ti\u1EBFp qu\u1EA3n v\xE0 ch\u1EE9ng ki\u1EBFn s\u1EF1 c\u1EF1c kh\u1ED5 c\u1EE7a ng\u01B0\u1EDDi l\xE0m n\xF4ng, sau 1 n\u0103m lao \u0111\u1ECDng mi\u1EC7t m\xE0i v\xE0 kh\u1ED5 c\u1EF1c, \u0111\u1EBFn m\xF9a thu ho\u1EA1ch , n\u1EBFu c\xE0 \u0111\u01B0\u1EE3c gi\xE1 c\xF2n \u0111\u1EE1, c\xE0 h\u1EA1 gi\xE1 th\xEC th\xF4i xong. Ti\u1EC1n b\xE1n c\xE0 nhi\u1EC1u khi c\xF2n kh\xF4ng \u0111\u1EE7 ti\u1EC1n thu\xEA c\xF4ng h\xE1i. C\xF4 \u1EA5y suy ngh\u0129 , t\xECm t\xF2i th\xF4ng tin tr\xEAn m\u1EA1ng, tham kh\u1EA3o \xFD ki\u1EBFn v\xE0 h\u01B0\u1EDBng d\u1EABn c\u1EE7a ba , cu\u1ED1i c\xF9ng quy\u1EBFt \u0111\u1ECBnh chuy\u1EC3n \u0111\u1ED5i v\u01B0\u1EDDn nh\xE0 sang h\xECnh th\u1EE9c tr\u1ED3ng h\u1EEFu c\u01A1. T\u1EEB \u0111\xF3 c\xF4 \u1EA5y thay vi\u1EC7c b\xF3n ph\xE2n h\xF3a h\u1ECDc b\u1EB1ng ph\xE2n h\u1EEFu c\u01A1 , thay vi\u1EC7c d\xF9ng thu\u1ED1c di\u1EC7t \u0111\u1EC3 di\u1EC7t c\u1ECF b\u1EB1ng  ph\u01B0\u01A1ng ph\xE1p sinh h\u1ECDc ho\u1EB7c ph\xE1t c\u1ECF b\u1EB1ng th\u1EE7 c\xF4ng,..."), PostDetailLayout_jsx(external_antd_["Image"], {
    className: "post-detail-image",
    width: "100%",
    title: data.title,
    src: "" + "/assets/images/blog/blog-detail/cauchuyenoc.png",
    alt: "Post detail image",
    placeholder: true
  }), PostDetailLayout_jsx("p", {
    className: "post-detail-paragraph"
  }, "3. Thu Ho\u1EA1ch v\xE0 ch\u1EBF bi\u1EBFn:", PostDetailLayout_jsx("br", null), "H\xE1i tr\xE1i ch\xEDn 100% - Ch\u1EBF bi\u1EBFn Natural \u2013 Rang xay , \u0111\xF3ng g\xF3i v\xE0 b\u1EA3o qu\u1EA3n 3 kh\xF4ng : kh\xF4ng ch\u1EA5t b\u1EA3o qu\u1EA3n, kh\xF4ng h\u01B0\u01A1ng li\u1EC7u, kh\xF4ng ch\u1EA5t ph\u1EE5 gia - X\xE2y d\u1EF1ng th\u01B0\u01A1ng hi\u1EC7u OC  (To home)", PostDetailLayout_jsx("br", null), "4. C\u1EA3i t\u1EA1o \u0111\u1EA5t th\xE0nh c\xF4ng  \u2013 C\u1EA3i thi\u1EC7n ngu\u1ED3n n\u01B0\u1EDBc t\u01B0\u1EDBi - Xin c\u1EA5p ch\u1EE9ng ch\u1EC9 h\u1EEFu c\u01A1:", PostDetailLayout_jsx("br", null), "Do nhi\u1EC1u n\u0103m d\xF9ng ph\xE2n h\xF3a h\u1ECDc, h\u1EC7 qu\u1EA3 l\xE0 \u0111\u1EA5t b\u1ECB b\u1EA1c m\xE0u, nhi\u1EC5m kim lo\u1EA1i n\u1EB7ng. Ngu\u1ED3n n\u01B0\u1EDBc t\u01B0\u1EDBi s\u1EB5n c\xF3 c\u0169ng kh\xF4ng \u0111\u1EE7 ti\xEAu chu\u1EA9n cho vi\u1EC7c tr\u1ED3ng h\u1EEFu c\u01A1. T\u1EEB 2006 \u0111\u1EBFn 2015, l\xE0 th\u1EDDi gian v\u1EEBa ch\u0103m s\xF3c, v\u1EEBa th\u1EED nghi\u1EC7m , sao cho vi\u1EC7c chuy\u1EC3n \u0111\u1ED5i sang tr\u1ED3ng h\u1EEFu c\u01A1 kh\xF4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn n\u0103ng su\u1EA5t c\xE2y tr\u1ED3ng. Vi\u1EC7c l\xE0m sao \u0111\u1EC3 c\xF3 ngu\u1ED3n n\u01B0\u1EDBc s\u1EA1ch, kh\xF4ng nhi\u1EC5m kim lo\u1EA1i n\u1EB7ng \u0111\u1EC3 t\u01B0\u1EDBi c\u0169ng l\xE0 1 v\u1EA5n \u0111\u1EC1 h\xF3c b\xFAa. Kho\u1EA3ng th\u1EDDi gian c\xE1c m\u1EABu \u0111\u1EA5t, n\u01B0\u1EDBc, h\u1EA1t s\u1ED1ng, h\u1EA1t ch\xEDn \u0111\u01B0\u1EE3c b\xEAn c\u1EA5p ch\u1EE9ng ch\u1EC9 l\u1EA5y t\u1EA1i v\u01B0\u1EDDn \u0111\u1EC3 \u0111em \u0111i x\xE9t nghi\u1EC7m th\u1EADt s\u1EF1 l\xE0 1 kho\u1EA3ng th\u1EDDi gian ch\u1EDD \u0111\u1EE3i d\xE0i \u0111\u1EB5ng \u0111\u1EB5ng. R\u1EA5t m\u1EEBng l\xE0 cu\u1ED1i c\xF9ng c\xE1c ch\u1EC9 s\u1ED1 \u0111\u1EC1u \u0111\u1EA1t chu\u1EA9n. T\u1EEB d\u1EA1o b\xE1o \u0111\xE0i r\u1ED9 l\xEAn v\u1EE5 c\xE0 ph\xEA pin, th\u1EA5y th\u01B0\u01A1ng cho nh\u1EEFng ng\u01B0\u1EDDi \u0111ang h\xE0ng ng\xE0y ph\u1EA3i ch\u1ECBu s\u1EF1 \u0111\u1EA7u \u0111\u1ED9c t\u1EEB th\u1EF1c ph\u1EA9m b\u1EA9n, c\xF4 con g\xE1i d\xF9 r\u1EA5t ng\u1EA1i s\u1EE9c c\u1EA1nh tranh v\xF4 c\xF9ng kh\u1ED1c li\u1EC7t c\u1EE7a th\u1ECB tr\u01B0\u1EDDng c\xE0 ph\xEA trong n\u01B0\u1EDBc, v\u1EABn quy\u1EBFt \u0111\u1ECBnh th\xE0nh l\u1EADp c\xF4ng ty TNHH C\xE0 Ph\xEA H\u1EEFu C\u01A1 do ch\u1ED3ng \u0111\u1EE9ng l\xE0m \u0111\u1EA1i di\u1EC7n ph\xE1p lu\u1EADt v\xE0o th\xE1ng 8 n\u0103m 2018,  ,b\u1EAFt \u0111\u1EA7u t\u1EF1 ch\u1EBF bi\u1EBFn v\xE0 \u0111\xF3ng g\xF3i s\u1EA3n ph\u1EA9m c\xE0 ph\xEA d\u01B0\u1EDBi th\u01B0\u01A1ng hi\u1EC7u OC ( \u0111\xE3 \u0111\u0103ng k\xED quy\u1EC1n b\u1EA3o h\u1ED9 th\u01B0\u01A1ng hi\u1EC7u n\u0103m 2019). OC l\xE0 ch\u1EEF vi\u1EBFt t\u1EAFt c\u1EE7a 2 ch\u1EEF Organic Coffee."), PostDetailLayout_jsx(external_antd_["Image"], {
    className: "post-detail-image",
    width: "100%",
    title: "The Personality Trait That Makes People Happier",
    src: "" + "/assets/images/blog/blog-detail/cauchuyenoc2.png",
    alt: "Post detail image",
    placeholder: true
  }), PostDetailLayout_jsx("h3", {
    className: "post-detail-subtitle"
  }, "T\u1EA1i sao c\xF3 th\u01B0\u01A1ng hi\u1EC7u OC?"), PostDetailLayout_jsx("p", {
    className: "post-detail-paragraph"
  }, "Th\u1EADt ra \u0111\xE2y l\xE0 c\xE1i t\xEAn ho\xE0n to\xE0n ng\u1EABu nhi\xEAn v\xE0 l\xE0 do kh\xE1ch h\xE0ng y\xEAu th\u01B0\u01A1ng t\u1EF1 \u0111\u1EB7t cho th\u01B0\u01A1ng hi\u1EC7u.", PostDetailLayout_jsx("br", null), "Th\u1EDDi gian \u0111\u1EA7u \u0111\u01B0a s\u1EA3n ph\u1EA9m ra th\u1ECB tr\u01B0\u1EDDng, kh\xE1ch h\xE0ng c\u1EE9 h\u1ECFi c\xE0 ph\xEA  hi\u1EC7u g\xEC? Sau khi nh\u1EADn \u0111\u01B0\u1EE3c c\xE2u tr\u1EA3 l\u1EDDi: l\xE0 organic coffee \u1EA1, nhi\u1EC1u kh\xE1ch h\xE0ng v\u1EABn h\u1ECFi l\u1EA1i : bi\u1EBFt l\xE0 organic r\u1ED3i, nh\u01B0ng t\xEAn g\xEC \u1EA5y? Khi \u0111\u01B0\u1EE3c tr\u1EA3 l\u1EDDi l\xE0: kh\xF4ng c\xF3 t\xEAn \u1EA1, ch\u1EC9 g\u1ECDi l\xE0 organic coffee th\xF4i \u1EA1, r\u1EA5t r\u1EA5t nhi\u1EC1u kh\xE1ch \u0111\u1EC1 ngh\u1ECB th\xF4i g\u1ECDi OC cho ng\u1EAFn g\u1ECDn nh\xE9! Th\u1EBF l\xE0 s\u1EEDa l\u1EA1i logo v\xE0 th\u01B0\u01A1ng hi\u1EC7u OC ra \u0111\u1EDDi t\u1EEB l\u1EDDi \u0111\u1EC1 ngh\u1ECB c\u1EE7a nhi\u1EC1u kh\xE1ch h\xE0ng th\xE2n thu\u1ED9c.", PostDetailLayout_jsx("br", null), "V\u1EDBi ph\u01B0\u01A1ng ch\xE2m : c\xF3 th\xEAm 1 ng\u01B0\u1EDDi h\u01B0\u1EDFng th\u1EF1c ph\u1EA9m s\u1EA1ch s\u1EBD b\u1EDBt \u0111i 1 ng\u01B0\u1EDDi b\u1ECB \u0111\u1EA7u \u0111\u1ED9c b\u1EDFi th\u1EF1c ph\u1EA9m b\u1EA9n, OC \u0111ang t\u1EEBng ng\xE0y c\u1ED1 g\u1EAFng t\u0103ng di\u1EC7n t\xEDch c\xE2y tr\u1ED3ng, t\u0103ng s\u1EA3n l\u01B0\u1EE3ng \u0111\u1EC3 \u0111\xE1p \u1EE9ng nhu c\u1EA7u c\xE0 ph\xEA h\u1EEFu c\u01A1 trong n\u01B0\u1EDBc v\xE0 xu\u1EA5t kh\u1EA9u. OC lu\xF4n c\u1ED1 g\u1EAFng \u0111\u1EC3 cho c\xE0 ph\xEA h\u1EEFu c\u01A1 kh\xF4ng c\xF2n l\xE0 m\u1EB7t h\xE0ng xa x\u1EC9 ch\u1EC9 d\xE0nh cho ng\u01B0\u1EDDi gi\xE0u. M\u1EE5c ti\xEAu c\u1EE7a OC l\xE0 \u0111\u01B0a s\u1EA3n ph\u1EA9m c\xE0 ph\xEA \u0111\u1EBFn tay m\u1ECDi ng\u01B0\u1EDDi v\u1EDBi gi\xE1 th\xEC b\xECnh d\xE2n nh\u01B0ng ch\u1EA5t l\u01B0\u1EE3ng th\xEC cao c\u1EA5p.", PostDetailLayout_jsx("br", null), "Kh\xF4ng nh\u1EEFng h\u1EEFu c\u01A1 t\u1EEB kh\xE2u tr\u1ED3ng v\xE0 ch\u0103m s\xF3c, c\xF2n ph\u1EA3i h\u1EEFu c\u01A1 t\u1EEB kh\xE2u thu ho\u1EA1ch, ch\u1EBF bi\u1EBFn v\xE0 b\u1EA3o qu\u1EA3n.", PostDetailLayout_jsx("br", null), "Kh\xE1ch h\xE0ng \u0111\xE3 th\u1EED qua c\xE0 ph\xEA OC \u0111\u1EC1u c\xF3 chung nh\u1EADn x\xE9t : - m\xF9i v\u1ECB th\u01A1m ngon kh\xE1c bi\u1EC7t (do \u0111\u01B0\u1EE3c h\xE1i ch\xEDn 100%). - u\u1ED1ng kh\xF4ng b\u1ECB \u0111au bao t\u1EED hay l\xECnh x\xECnh b\u1EE5ng (do \u0111\u01B0\u1EE3c ch\u1EBF bi\u1EBFn v\xE0 b\u1EA3o qu\u1EA3n theo ti\xEAu chu\u1EA9n 3 KH\xD4NG: KH\xD4NG ch\u1EA5t b\u1EA3o qu\u1EA3n, KH\xD4NG h\u01B0\u01A1ng li\u1EC7u, ch\u1EA5t ph\u1EE5 gia). - u\u1ED1ng kh\xF4ng b\u1ECB say, cho\xE1ng vo\xE1ng hay tim \u0111\u1EADp nhanh (do gi\u1ED1ng c\xE2y c\xE0 ph\xEA)"), PostDetailLayout_jsx("p", {
    className: "post-detail-paragraph"
  }, "C\xE1c gi\xE1 tr\u1ECB t\u1EA1o n\xEAn th\u01B0\u01A1ng hi\u1EC7u OC:", PostDetailLayout_jsx("br", null), "1. Tr\xE1ch nhi\u1EC7m \u0110\u1ED1i v\u1EDBi m\xF4i tr\u01B0\u1EDDng: v\xEC 1 m\xF4i tr\u01B0\u1EDDng s\u1EA1ch v\xE0 xanh. M\u1EE5c ti\xEAu c\u1EE7a OC l\xE0 nh\xE2n r\u1ED9ng m\xF4 h\xECnh tr\u1ED3ng c\xE0 ph\xEA h\u1EEFu c\u01A1 c\xE0ng nhi\u1EC1u c\xE0ng t\u1ED1t. Tr\u1ED3ng h\u1EEFu c\u01A1 \u0111\u1EC3  c\u1EA3i t\u1EA1o \u0111\u1EA5t, tr\u1EA3 l\u1EA1i cho \u0111\u1EA5t \u0111\u1ED9 ph\xEC nhi\xEAu v\u1ED1n c\xF3. Tr\u1ED3ng h\u1EEFu c\u01A1 \u0111\u1EC3 t\u0103ng thu nh\u1EADp cho ng\u01B0\u1EDDi n\xF4ng d\xE2n, tr\u1EA3 l\u1EA1i cho ng\u01B0\u1EDDi n\xF4ng d\xE2n gi\xE1 tr\u1ECB s\u1EA3n ph\u1EA9m b\u1EB1ng \u0111\xFAng s\u1EE9c lao \u0111\u1ED9ng. \u0110\u1ED1i v\u1EDBi c\u1ED9ng \u0111\u1ED3ng: v\xEC 1 c\u1ED9ng \u0111\u1ED3ng s\u1EED d\u1EE5ng d\u1EE5ng th\u1EF1c ph\u1EA9m s\u1EA1ch, n\xF3i kh\xF4ng v\u1EDBi th\u1EF1c ph\u1EA9m b\u1EA9n.", PostDetailLayout_jsx("br", null), "2. T\u1EF1 h\xE0o Vi\u1EC7t Nam c\u0169ng c\xF3 th\u1EC3 tr\u1ED3ng v\xE0 xu\u1EA5t kh\u1EA9u c\xE0 ph\xEA h\u1EEFu c\u01A1.", PostDetailLayout_jsx("br", null), "3. Gi\xE1 b\xECnh d\xE2n Ph\xE2n kh\xFAc h\u1EEFu c\u01A1 c\xF3 th\u1EC3 ti\u1EBFp c\u1EADn \u0111\u01B0\u1EE3c nhi\u1EC1u th\xE0nh ph\u1EA7n trong x\xE3 h\u1ED9i, kh\xF4ng ch\u1EC9 v\u1EDBi nh\u1EEFng ng\u01B0\u1EDDi c\xF3 thu nh\u1EADp cao.", PostDetailLayout_jsx("br", null), "4. Ch\u1EA5t l\u01B0\u1EE3ng cao c\u1EA5p Kh\xF4ng gi\u1ED1ng v\u1EDBi c\xE1c s\u1EA3n ph\u1EA9m c\xE0 ph\xEA kh\xE1c, c\xE0 ph\xEA OC s\u1EA1ch t\u1EEB c\xE1c kh\xE2u:", PostDetailLayout_jsx("br", null), "Xu\u1ED1ng gi\u1ED1ng: b\u1EA3o \u0111\u1EA3m gi\u1ED1ng kh\xF4ng bi\u1EBFn \u0111\u1ED5i gien, b\u1EA3o \u0111\u1EA3m \u0111\u1EA5t \u0111\u01B0\u1EE3c c\u1EA3i t\u1EA1o kh\xF4ng nhi\u1EC5m kim lo\u1EA1i n\u1EB7ng tr\u01B0\u1EDBc khi xu\u1ED1ng gi\u1ED1ng . Ch\u0103m s\xF3c: kh\xF4ng b\xF3n ph\xE2n h\xF3a h\u1ECDc, ch\u1EC9 d\xF9ng ph\xE2n h\u1EEFu c\u01A1; ngu\u1ED3n n\u01B0\u1EDBc t\u01B0\u1EDBi ph\u1EA3i s\u1EA1ch kh\xF4ng b\u1ECB nhi\u1EC5m kim lo\u1EA1i n\u1EB7ng v\xE0 t\u1EA1p ch\u1EA5t; kh\xF4ng d\xF9ng thu\u1ED1c di\u1EC7t c\u1ECF; x\xE2y d\u1EF1ng v\xF9ng \u0111\u1EC7m \u0111\u1EC3 ng\u0103n kh\xF4ng cho ph\xE2n b\xF3n v\xE0 thu\u1ED1c tr\u1EEB s\xE2u c\u1EE7a c\xE1c v\u01B0\u1EDDn xung quanh x\xE2m nh\u1EADp Thu ho\u1EA1ch: 100% tr\xE1i ch\xEDn, ch\u1EBF bi\u1EBFn t\u1EF1 nhi\xEAn, ph\u01A1i trong nh\xE0 k\xEDnh c\xE1ch tr\xEAn gi\xE0n c\xE1ch m\u1EB7t \u0111\u1EA5t 40cm \u0111\u1EC3 h\u1EA1t c\xE0 ph\xEA kh\xF4ng b\u1ECB nhi\u1EC5m b\u1EA9n . B\u1EA3o qu\u1EA3n: kh\xF4ng b\u1ECF ch\u1EA5t b\u1EA3o qu\u1EA3n. B\u1EA3o qu\u1EA3n b\u1EB1ng c\xE1ch \u0111\xF3ng g\xF3i nh\xE2n xanh r\xFAt ch\xE2n kh\xF4ng Rang xay, \u0111\xF3ng g\xF3i: kh\xF4ng b\u1ECF ch\u1EA5t ph\u1EE5 gia, kh\xF4ng th\xEAm h\u01B0\u01A1ng li\u1EC7u, kh\xF4ng ch\u1EA5t b\u1EA3o qu\u1EA3n.")), PostDetailLayout_jsx("div", {
    className: "post-detail-content__footer"
  }, PostDetailLayout_jsx("div", {
    className: "post-detail-content__footer-tags"
  }, data.tag.map((item, index) => PostDetailLayout_jsx(external_antd_["Button"], {
    key: index
  }, item))), PostDetailLayout_jsx("div", {
    className: "post-detail-content__footer-share"
  }, PostDetailLayout_jsx("span", null, "Share:"), PostDetailLayout_jsx(SocialIcons["a" /* default */], null))), PostDetailLayout_jsx(elements_PostDetailComment, {
    data: data.comments
  }));
}

/* harmony default export */ var PostDetailLayout = (/*#__PURE__*/external_react_default.a.memo(PostDetailContent));
// EXTERNAL MODULE: ./src/components/other/FetchDataHandle.js
var FetchDataHandle = __webpack_require__("9MPT");

// EXTERNAL MODULE: ./src/components/sections/partners/PartnerOne.js
var PartnerOne = __webpack_require__("S/uq");

// CONCATENATED MODULE: ./src/pages/blog/post/[slug].js
var _slug_jsx = external_react_default.a.createElement;












function _slug_postDetail() {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const {
    slug
  } = router.query;
  const blogState = Object(external_react_redux_["useSelector"])(state => state.blogReducer);
  const {
    postDetail,
    recentPosts
  } = blogState;
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(blogActions["a" /* fetchPostDetailRequest */])(slug));
    dispatch(Object(blogActions["c" /* fetchRecentPostsRequest */])({
      limit: 4
    }));
  }, []);
  return _slug_jsx(LayoutOne["a" /* default */], {
    title: "Post detail"
  }, _slug_jsx(Container["a" /* default */], null, _slug_jsx(external_antd_["Breadcrumb"], {
    separator: ">"
  }, _slug_jsx(external_antd_["Breadcrumb"].Item, null, _slug_jsx("i", {
    className: "fas fa-home"
  }), "Home"), _slug_jsx(external_antd_["Breadcrumb"].Item, null, "Blog"), _slug_jsx(external_antd_["Breadcrumb"].Item, null, "Blog grid with sidebar")), _slug_jsx("div", {
    className: "blog-detail"
  }, _slug_jsx(external_antd_["Row"], {
    gutter: 30
  }, _slug_jsx(external_antd_["Col"], {
    xs: 24,
    lg: 6
  }, _slug_jsx(BlogSidebar["a" /* default */], {
    recentPostsData: recentPosts
  })), _slug_jsx(external_antd_["Col"], {
    xs: 24,
    lg: 18
  }, _slug_jsx(FetchDataHandle["a" /* default */], {
    data: postDetail,
    renderData: data => _slug_jsx(PostDetailLayout, {
      data: data[0]
    })
  })))), _slug_jsx(PartnerOne["a" /* default */], null)));
}

/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (/*#__PURE__*/external_react_default.a.memo(_slug_postDetail));

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