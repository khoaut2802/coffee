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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
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
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
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
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
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

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
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
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
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
} /**
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
} /**
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
  */ // Static Data Cache
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
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
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
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
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
  } /**
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
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }
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
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
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
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
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
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
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
  } /**
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
  } /**
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
    if (true) {
      return;
    }
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
    if (false) {}
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
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
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;
function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
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
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
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
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
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
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
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
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

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

/***/ "./src/apis/shop.js":
/*!**************************!*\
  !*** ./src/apis/shop.js ***!
  \**************************/
/*! exports provided: fetchProductsData, fetchSaleProductsData, fetchFeaturedProductsData, fetchBestSellerProductsData, fetchDaleProductsData, fetchProductDetailData, fetchSearchedProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsData", function() { return fetchProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsData", function() { return fetchSaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsData", function() { return fetchFeaturedProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsData", function() { return fetchBestSellerProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsData", function() { return fetchDaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailData", function() { return fetchProductDetailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductData", function() { return fetchSearchedProductData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/product";
const renderUrl = (url, limit, category) => {
  return url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", category);
};

//Fetch list of products
const fetchProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_page", query.page) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_sort", query.sort.sort) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_order", query.sort.order) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.q) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.color", query.color) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.size", query.size) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("tag_like", query.tag);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchSaleProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchFeaturedProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchBestSellerProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchDaleProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};

//Fetch product detail
const fetchProductDetailData = slug => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("slug", slug);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};

//Fetch serched product by query
const fetchSearchedProductData = query => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.input) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", query.limit);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
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

/***/ "./src/common/cartServices.js":
/*!************************************!*\
  !*** ./src/common/cartServices.js ***!
  \************************************/
/*! exports provided: onAddProductToCart, onRemoveProductFromCart, onChangeProductCartQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddProductToCart", function() { return onAddProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoveProductFromCart", function() { return onRemoveProductFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeProductCartQuantity", function() { return onChangeProductCartQuantity; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/cart */ "./src/apis/cart.js");
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
  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchProductIdCartData"])(product.id).then(res => {
    if (res.data.length === 0) {
      if (product.quantity === 0) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable && getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["addCartData"])(_objectSpread(_objectSpread({}, product), {}, {
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
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(pData.id, {
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
    Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["removeCartData"])(cartId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product failm, pleaser try again", err));
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

  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(product.id, {
    cartQuantity: quantity
  }).then(res => onSuccess && onSuccess(res)).catch(err => console.log(err));
};

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

/***/ "./src/common/shopUtils.js":
/*!*********************************!*\
  !*** ./src/common/shopUtils.js ***!
  \*********************************/
/*! exports provided: getProductsBySlug, calculateTotalPrice, checkProductInCart, checkProductCartQuantity, checkProductInWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return getProductsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalPrice", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInCart", function() { return checkProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductCartQuantity", function() { return checkProductCartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInWishlist", function() { return checkProductInWishlist; });
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
};

//Cart
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
};

//Wishlist
const checkProductInWishlist = (wishlistArr, pid) => {
  return pid ? wishlistArr.find(item => item.id === pid) : undefined;
};

/***/ }),

/***/ "./src/common/useDebound.js":
/*!**********************************!*\
  !*** ./src/common/useDebound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./src/common/wishlistServices.js":
/*!****************************************!*\
  !*** ./src/common/wishlistServices.js ***!
  \****************************************/
/*! exports provided: onAddProductToWishlist, onRemoveProductFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddProductToWishlist", function() { return onAddProductToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoveProductFromWishlist", function() { return onRemoveProductFromWishlist; });
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/wishlist */ "./src/apis/wishlist.js");

const onAddProductToWishlist = ({
  product,
  onSuccess,
  onError
}) => {
  Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["fetchProductIdWishlistData"])(product.id).then(res => {
    if (res.data.length === 0) {
      Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["addWishlistData"])(product).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to wislist failed, please try again", err));
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
    Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["removeWishlistData"])(productId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product fail, pleaser try again", err));
  }
};

/***/ }),

/***/ "./src/common/withHeaderScroll.js":
/*!****************************************!*\
  !*** ./src/common/withHeaderScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withHeaderScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\common\\withHeaderScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


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
      }, props.className)}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx(WrappedComponent, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    })));
  };
}

/***/ }),

/***/ "./src/components/detail/product/ProductDetailLayout.js":
/*!**************************************************************!*\
  !*** ./src/components/detail/product/ProductDetailLayout.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/ProductDetailImages */ "./src/components/detail/product/elements/ProductDetailImages.js");
/* harmony import */ var _elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/ProductDetailContent */ "./src/components/detail/product/elements/ProductDetailContent.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/ProductDetailTab */ "./src/components/detail/product/elements/ProductDetailTab.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\detail\\product\\ProductDetailLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ProductDetailLayout({
  data,
  type,
  hideTab,
  style
}) {
  if (type === "fluid") {
    return __jsx("div", {
      className: "product-detail",
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      gutter: 30,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "column",
      images: data.images,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 14,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx(_elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "fluid",
      data: data,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 24,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, !hideTab && __jsx(_elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fullDescription: data.fullDescription,
      specifications: data.specifications,
      reviews: data.reviews,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }))));
  }

  return __jsx("div", {
    className: "product-detail",
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: data.images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, !hideTab && __jsx(_elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fullDescription: data.fullDescription,
    specifications: data.specifications,
    reviews: data.reviews,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailLayout));

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailContent.js":
/*!************************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailContent.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailContent; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../other/QuantitySelector */ "./src/components/other/QuantitySelector.js");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\detail\\product\\elements\\ProductDetailContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











function ProductDetailContent({
  data,
  type
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: currentQuantity,
    1: setCurrentQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  const compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.compareReducer);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductInWishlist"])(compareState, data.id);
  const avaiableQuantity = data.quantity - Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductCartQuantity"])(cartState.data, data.id);
  console.log(avaiableQuantity);

  const onAddToCart = (product, quantity) => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_8__["onAddProductToCart"])({
      product,
      quantity,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(mes);
        console.log(err);
      }
    });
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__["addToCompare"])(product));
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to compare");
    }
  };

  if (type === "fluid") {
    return __jsx("div", {
      className: "product-detail-content -wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 24,
      sm: 24,
      xl: 16,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-detail-content__left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "product-type",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, data.category), __jsx("h2", {
      className: "product-detail-content__name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, data.name), __jsx("div", {
      className: "product-detail-content__description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem")), __jsx("ul", {
      className: "product-detail-content__meta",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, "SKU:"), " A1359"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, "Categories:"), " Fastfood"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }, "Tag:"), " Food, Organic")), __jsx("div", {
      className: "product-detail-content__share",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, "Chia s\u1EBB:"), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 24,
      sm: 24,
      xl: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-detail-content__right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "product-detail-content__delivery",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, "Giao h\xE0ng mi\u1EC5n ph\xED"), __jsx("h3", {
      className: "product-detail-content__price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, data.discount && __jsx("del", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 35
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("div", {
      className: "product-detail-content__price-discount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
      defaultValue: data.rate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    })))), __jsx(_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: val => setCurrentQuantity(val),
      max: avaiableQuantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "product-detail-content__actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      loading: addToCartLoading,
      onClick: () => onAddToCart(data, currentQuantity),
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      onClick: () => onAddToCompare(data),
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: productInCompare
      }),
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, "Add to compare")), __jsx("ul", {
      className: "product-detail-content__benefits",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, "Satisfaction 100% Guaranteed"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, "Free shipping on orders over $99"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, "14 day easy Return"))))));
  }

  return __jsx("div", {
    className: "product-detail-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "product-type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, data.category), __jsx("h2", {
    className: "product-detail-content__name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, data.name), __jsx("p", {
    className: "product-detail-content__description",
    style: {
      whiteSpace: "pre"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, data.shortDescription), __jsx("div", {
    className: "product-detail-content__delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, "Giao h\xE0ng mi\u1EC5n ph\xED"), __jsx("h3", {
    className: "product-detail-content__price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, data.discount && __jsx("del", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 27
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("div", {
    className: "product-detail-content__price-discount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
    defaultValue: data.rate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  })))), __jsx(_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: val => setCurrentQuantity(val),
    max: avaiableQuantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "product-detail-content__actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    loading: addToCartLoading,
    onClick: () => onAddToCart(data, currentQuantity),
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: () => onAddToCompare(data),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: productInCompare
    }),
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, "So s\xE1nh")), __jsx("div", {
    className: "product-detail-content__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, "Chia s\u1EBB:"), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  })));
}

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailContent);

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailImages.js":
/*!***********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailImages.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\detail\\product\\elements\\ProductDetailImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(); // if (type === "column") {
  //   return <h1>Column</h1>;
  // }

  return __jsx("div", {
    className: `product-detail-images ${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "-column": type === "column"
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-images-big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav2,
    ref: c => setNav1(c)
  }, slider1Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "product-detail-images-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav1,
    ref: c => setNav2(c)
  }, slider2Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailImages));

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailTab.js":
/*!********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailTab.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\detail\\product\\elements\\ProductDetailTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

const ReviewItem = ({
  data
}) => {
  console.log(data);
  return __jsx("div", {
    className: "product-detail-tab__reviews-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-tab__reviews-item__avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "" + data.user.avatar,
    alt: "Customer avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    defaultValue: 5,
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "product-detail-tab__reviews-item__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, data.commentDate), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, data.user.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, data.review)));
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

  return __jsx("div", {
    className: "product-detail-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "1",
    type: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(TabPane, {
    tab: "M\xF4 t\u1EA3",
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, fullDescription)), __jsx(TabPane, {
    tab: "Chi ti\u1EBFt",
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__specifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Kh\u1ED1i l\u01B0\u1EE3ng"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, specifications.weight)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "Lo\u1EA1i"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, specifications.color)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "Size"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, specifications.size)))))), __jsx(TabPane, {
    tab: "Reviews",
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, reviews.map((item, index) => __jsx(ReviewItem, {
    key: index,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "product-detail-tab__reviews-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "\u0110\xE1nh gi\xE1"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "review",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Please input your name!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "H\u1ECD t\xEAn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: "Please input your email!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "rate",
    label: "Ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    placeholder: "N\u1ED9i dung",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }
  }, "\u0110\xE1nh gi\xE1"))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailTab));

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/footer-links.json */ "./src/data/footer-links.json", 1);
/* harmony import */ var _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/FooterQuickLinks */ "./src/components/footer/elements/FooterQuickLinks.js");
/* harmony import */ var _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/FooterInfomation */ "./src/components/footer/elements/FooterInfomation.js");
/* harmony import */ var _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/FooterSubcribeInput */ "./src/components/footer/elements/FooterSubcribeInput.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Footer({
  containerFluid,
  className
}) {
  return __jsx("div", {
    className: `footer -style-one ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: containerFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 9,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 15,
    lg: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
    colSize: {
      span: 8
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-subcribe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-subcribe__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "\u0110\u0103ng k\xFD nh\u1EADn b\u1EA3n tin c\u1EE7a C\xE0 ph\xEA h\u1EEFu c\u01A1 Vi\u1EC7t \u0111\u1EC3 c\u1EADp nh\u1EADt nh\u1EEFng s\u1EA3n ph\u1EA9m m\u1EDBi,", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 95
    }
  }), " nh\u1EADn th\xF4ng tin \u01B0u \u0111\xE3i \u0111\u1EB7c bi\u1EC7t v\xE0 th\xF4ng tin gi\u1EA3m gi\xE1 kh\xE1c. "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-bottom__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Copyright \xA9 2023 Organic - Viet Coffee. Powered by Takatech"), __jsx("img", {
    src: "" + "/assets/images/footer/payment.png",
    alt: "Payment methods",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

/***/ }),

/***/ "./src/components/footer/elements/FooterInfomation.js":
/*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterInfomation.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterInfomation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\footer\\elements\\FooterInfomation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FooterInfomation() {
  return __jsx("div", {
    className: "footer-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "footer-info__logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Ogami Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }))), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "\u0110\u1ECBa ch\u1EC9: K\u1EF3 - Trang Th\xF4n 5 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 40
    }
  }), "X\xE3 B\xECnh H\xF2a, Huy\u1EC7n Kr\xF4ng Ana,", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 74
    }
  }), "T\u1EC9nh \u0110\u0103k L\u0103k"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Phone: 0974 001 671"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Facebook: Anh Kh\u01B0\u01A1ng")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "primary",
    shape: "circle",
    className: "-btn-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/footer/elements/FooterQuickLinks.js":
/*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterQuickLinks.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/footer-links.json */ "./src/data/footer-links.json", 1);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\footer\\elements\\FooterQuickLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function FooterQuickLinks({
  colSize
}) {
  return __jsx("div", {
    className: "footer-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 10,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], _extends({
    key: index
  }, colSize, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "footer-links__group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, item.title), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, item.items.map((link, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + link.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, " ", link.title)), " "))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FooterQuickLinks));

/***/ }),

/***/ "./src/components/footer/elements/FooterSubcribeInput.js":
/*!***************************************************************!*\
  !*** ./src/components/footer/elements/FooterSubcribeInput.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSubcribeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\footer\\elements\\FooterSubcribeInput.js";
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
    className: "footer-subcribe__form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    name: "email",
    rules: [{
      type: "email",
      message: "The input is not valid E-mail!"
    }, {
      required: true,
      message: "Please input your E-mail!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Nh\u1EADp email, nh\u1EADn \u01B0u \u0111\xE3i",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "link",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "\u0110\u0102NG K\xDD"))), status === "sending" && __jsx("div", {
    style: {
      color: "blue"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 32
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
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
      onValidated: formData => subscribe(formData),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/header/HeaderOne.js":
/*!********************************************!*\
  !*** ./src/components/header/HeaderOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-nav/TopNavOne */ "./src/components/header/top-nav/TopNavOne.js");
/* harmony import */ var _menu_MenuOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/MenuOne */ "./src/components/header/menu/MenuOne.js");
/* harmony import */ var _function_menu_FunctionMenuOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function-menu/FunctionMenuOne */ "./src/components/header/function-menu/FunctionMenuOne.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\HeaderOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HeaderOne({
  activeHeaderCollapse
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_top_nav_TopNavOne__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_menu_MenuOne__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_function_menu_FunctionMenuOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeHeaderCollapse: activeHeaderCollapse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/header/elements/CategoryColappse.js":
/*!************************************************************!*\
  !*** ./src/components/header/elements/CategoryColappse.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\elements\\CategoryColappse.js";
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
    className: "category-collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    bordered: false,
    defaultActiveKey: active ? "1" : null,
    expandIcon: ({
      isActive
    }) => __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownOutlined"], {
      rotate: isActive ? -180 : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }),
    expandIconPosition: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(Panel, {
    header: "C\xE0 ph\xEA \u0111\xF3ng g\xF3i",
    key: "1",
    extra: __jsx("i", {
      className: "far fa-bars",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 18
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, categories.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, item.name))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CategoryColappse));

/***/ }),

/***/ "./src/components/header/elements/FunctionItems.js":
/*!*********************************************************!*\
  !*** ./src/components/header/elements/FunctionItems.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\elements\\FunctionItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function FunctionItems({
  hideTotal,
  hideWishlist
}) {
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  return __jsx("div", {
    className: "function-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, !hideWishlist && __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "function-items-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "function-items-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), !hideTotal && (cartState.data ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_4__["calculateTotalPrice"])(cartState.data))) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(0))))));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(FunctionItems));

/***/ }),

/***/ "./src/components/header/elements/MobileMenuOpener.js":
/*!************************************************************!*\
  !*** ./src/components/header/elements/MobileMenuOpener.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MobileNavigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileNavigator */ "./src/components/header/elements/MobileNavigator.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\elements\\MobileMenuOpener.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function MobileMenuOpener() {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onShowDrawer = () => {
    setVisible(true);
  };
  const onCloseDrawer = () => {
    setVisible(false);
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    onClick: onShowDrawer,
    className: "menu-mobile-opener",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fas fa-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    title: "Close",
    closable: true,
    onClose: onCloseDrawer,
    visible: visible,
    placement: "left",
    width: 320,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_MobileNavigator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MobileMenuOpener));

/***/ }),

/***/ "./src/components/header/elements/MobileNavigator.js":
/*!***********************************************************!*\
  !*** ./src/components/header/elements/MobileNavigator.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\elements\\MobileNavigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MobileNavigator() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail");
  const handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  return __jsx("div", {
    className: "menu-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "menu-mobile-navigator",
    onClick: handleClick,
    selectedKeys: [current],
    mode: "inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(SubMenu, {
    key: "homepage",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.subMenu.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(SubMenu, {
    key: "shop layout",
    title: "Layout shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop detail",
    title: "Detail shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop pages",
    title: "Pages shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, " ", item.title)))))), __jsx(SubMenu, {
    key: "pages",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, " ", item.title))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "alipay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://ant.design",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title)))), __jsx("div", {
    className: "menu-mobile-functions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/other/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "menu-mobile-functions__login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Login / Register")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MobileNavigator));

/***/ }),

/***/ "./src/components/header/elements/Navigator.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/Navigator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\elements\\Navigator.js";
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
    className: "navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, item.title)))))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.title))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SALE.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SALE.title))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.CONTACT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.CONTACT.title))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Navigator));

/***/ }),

/***/ "./src/components/header/elements/SearchForm.js":
/*!******************************************************!*\
  !*** ./src/components/header/elements/SearchForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/useDebound */ "./src/common/useDebound.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\elements\\SearchForm.js";
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
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_5__["default"])(currentSearch, 300);
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
    className: "search-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "search-form-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "search-form-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    backfill: true,
    value: currentSearch,
    onSelect: onSelectOption,
    onChange: onChange,
    options: options,
    filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    placeholder: "Nh\u1EADp s\u1EA3n ph\u1EA9m c\u1EA7n t\xECm ... ",
    size: "large",
    enterButton: enterButton,
    bordered: false,
    loading: searchedProducts.loading,
    onSearch: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchForm));

/***/ }),

/***/ "./src/components/header/function-menu/FunctionMenuOne.js":
/*!****************************************************************!*\
  !*** ./src/components/header/function-menu/FunctionMenuOne.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_CategoryColappse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/CategoryColappse */ "./src/components/header/elements/CategoryColappse.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/SearchForm */ "./src/components/header/elements/SearchForm.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\function-menu\\FunctionMenuOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function FunctionMenuOne({
  activeHeaderCollapse
}) {
  return __jsx("div", {
    className: "header-function-menu-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "function-menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: {
      span: 24,
      order: 1
    },
    md: {
      span: 16,
      order: 2
    },
    lg: 18,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_elements_SearchForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FunctionMenuOne));

/***/ }),

/***/ "./src/components/header/menu/MenuOne.js":
/*!***********************************************!*\
  !*** ./src/components/header/menu/MenuOne.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_Navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/Navigator */ "./src/components/header/elements/Navigator.js");
/* harmony import */ var _elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/FunctionItems */ "./src/components/header/elements/FunctionItems.js");
/* harmony import */ var _elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/MobileMenuOpener */ "./src/components/header/elements/MobileMenuOpener.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\menu\\MenuOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MenuOne() {
  return __jsx("div", {
    className: "menu -style-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "menu-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Ogami logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }))), __jsx(_elements_Navigator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_elements_FunctionItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/header/top-nav/TopNavOne.js":
/*!****************************************************!*\
  !*** ./src/components/header/top-nav/TopNavOne.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopNavOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\header\\top-nav\\TopNavOne.js";
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
    className: "top-nav-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fluid: containerFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "top-nav-one-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "top-nav-one-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fas fa-envelope",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), "daklakorganiccoffee@gmail.com"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fas fa-phone-alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), "+84 354403856"))), __jsx("div", {
    className: "top-nav-one-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "vietnamese",
    width: 125,
    bordered: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, flagData.map((item, index) => __jsx(Option, {
    key: index,
    value: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, __jsx("img", {
    style: {
      height: 13 / 16 + "em",
      width: 20 / 16 + "em",
      objectFit: "contain",
      marginTop: -3 / 16 + "em",
      marginRight: 5 / 16 + "em"
    },
    src: "" + item.image,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }), item.name)))), __jsx("div", {
    className: "top-nav-one-right__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "" + "/auth/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), "Login")))))));
}

/***/ }),

/***/ "./src/components/layout/LayoutOne.js":
/*!********************************************!*\
  !*** ./src/components/layout/LayoutOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_HeaderOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/HeaderOne */ "./src/components/header/HeaderOne.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/withHeaderScroll */ "./src/common/withHeaderScroll.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\layout\\LayoutOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ScrolledHeader = Object(_common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__["default"])(_header_HeaderOne__WEBPACK_IMPORTED_MODULE_3__["default"]);
function LayoutOne({
  title,
  children,
  headerClass,
  footerClass
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title)), __jsx(ScrolledHeader, {
    className: headerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), children, __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: footerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LayoutOne));

/***/ }),

/***/ "./src/components/other/Benefits.js":
/*!******************************************!*\
  !*** ./src/components/other/Benefits.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/benefits.json */ "./src/data/benefits.json");
var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/benefits.json */ "./src/data/benefits.json", 1);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\other\\Benefits.js";
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
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "benefits-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.slice(0, threeCol ? 3 : _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.length).map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    key: index
  }, renderCol(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "benefits-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "benefits-item__image",
    src: "" + item.iconSrc,
    alt: "Benefit icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }), __jsx("h5", {
    className: "benefits-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, item.name), __jsx("p", {
    className: "benefits-item__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, item.description)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Benefits));

/***/ }),

/***/ "./src/components/other/Container.js":
/*!*******************************************!*\
  !*** ./src/components/other/Container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\other\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  fluid,
  children
}) {
  return __jsx("div", {
    className: fluid ? "container-fluid" : "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./src/components/other/FetchDataHandle.js":
/*!*************************************************!*\
  !*** ./src/components/other/FetchDataHandle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zFetchDataHandle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\other\\FetchDataHandle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function zFetchDataHandle({
  data,
  errorMessage = "Get products fail, please try again",
  emptyDescription = "No product in this category",
  renderData
}) {
  return data.loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }) : data.error ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, errorMessage) : data.data.length > 0 ? renderData && renderData(data.data) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: emptyDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/other/QuantitySelector.js":
/*!**************************************************!*\
  !*** ./src/components/other/QuantitySelector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/useDebound */ "./src/common/useDebound.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\other\\QuantitySelector.js";
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
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_3__["default"])(value, 300);
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
    className: `quantity-selector ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "quantity-selector-number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, value), __jsx("div", {
    className: "quantity-selector-controller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value <= min || value <= 1,
    onClick: decreaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "-"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value >= max,
    onClick: increaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "+")));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(QuantitySelector));

/***/ }),

/***/ "./src/components/other/SectionTitle.js":
/*!**********************************************!*\
  !*** ./src/components/other/SectionTitle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\other\\SectionTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SectionTitle({
  title,
  hideDecoration,
  className,
  style
}) {
  return __jsx("div", {
    className: `section-title ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, title), !hideDecoration && __jsx("div", {
    className: "section-title-decoration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 27
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SectionTitle));

/***/ }),

/***/ "./src/components/other/SliderArrow.js":
/*!*********************************************!*\
  !*** ./src/components/other/SliderArrow.js ***!
  \*********************************************/
/*! exports provided: PrevArrow, NextArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevArrow", function() { return PrevArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextArrow", function() { return NextArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\other\\SliderArrow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const PrevArrow = (_ref) => {
  let {
    currentSlide,
    slideCount
  } = _ref,
      arrowProps = _objectWithoutProperties(_ref, ["currentSlide", "slideCount"]);

  return __jsx("a", _extends({}, arrowProps, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 3
    }
  }), __jsx("i", {
    className: "far fa-angle-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }));
};
const NextArrow = (_ref2) => {
  let {
    currentSlide,
    slideCount
  } = _ref2,
      arrowProps = _objectWithoutProperties(_ref2, ["currentSlide", "slideCount"]);

  return __jsx("a", _extends({}, arrowProps, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }), __jsx("i", {
    className: "far fa-angle-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }));
};

/***/ }),

/***/ "./src/components/other/SocialIcons.js":
/*!*********************************************!*\
  !*** ./src/components/other/SocialIcons.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\other\\SocialIcons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SocialIcons({
  className,
  type = "link",
  shape
}) {
  return __jsx("ul", {
    className: `social-icons ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-envelope",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-invision",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-pinterest-p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/wishlistServices */ "./src/common/wishlistServices.js");
/* harmony import */ var _detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../detail/product/ProductDetailLayout */ "./src/components/detail/product/ProductDetailLayout.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\product\\Product.js";
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
  const productInWishlist = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(wishlistState.data, data.id);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(compareState, data.id);

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
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_12__["onAddProductToCart"])({
      product,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
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
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onAddProductToWishlist"])({
        product,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    } else {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onRemoveProductFromWishlist"])({
        productId: product.id,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
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
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["addToCompare"])(product));
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
          className: `product-tiny ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-tiny-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-tiny-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-tiny-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-tiny-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))));

      case "dale":
        return __jsx("div", {
          className: `product-dale ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-dale-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 19
          }
        })))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
          date: Date.now() + getRandomArbitrary(100000000, 150000000),
          renderer: ({
            days,
            hours,
            minutes,
            seconds
          }) => {
            return __jsx("div", {
              className: "product-dale-countdown",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }
            }, __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(days)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 48
              }
            }, "days")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(hours)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 49
              }
            }, "hr")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(minutes), " "), __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 23
              }
            }, "min")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(seconds)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 51
              }
            }, "sec")));
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }
        }), __jsx("div", {
          className: "product-dale-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-dale-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-dale-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-dale-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-dale-select",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o y\xEAu th\xEDch",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "So s\xE1nh",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Xem nhanh",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 17
          }
        }))));

      case "list":
        return __jsx("div", {
          className: "product-list",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 19
          }
        }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          onClick: showModal,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 15
          }
        }, "Xem nhanh")), __jsx("div", {
          className: "product-list-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 17
          }
        }, data.name)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
          className: "product-rate",
          disabled: true,
          defaultValue: data.rate,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 15
          }
        }), __jsx("p", {
          className: "product-description",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }
        }, data.shortDescription), data.quantity > 0 ? __jsx("h5", {
          className: "product-availability -instock",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 17
          }
        }, "S\u1ED1 l\u01B0\u1EE3ng: ", __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 29
          }
        }, " ", data.quantity, " c\xF2n h\xE0ng")) : __jsx("h5", {
          className: "product-availability -outstock",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 17
          }
        }, "S\u1ED1 l\u01B0\u1EE3ng: ", __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 29
          }
        }, " h\u1EBFt h\xE0ng"))), __jsx("div", {
          className: "product-list-actions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "product-detail-content__delivery",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 15
          }
        }, "Giao h\xE0ng mi\u1EC5n ph\xED"), __jsx("h3", {
          className: "product-detail-content__price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 15
          }
        }, data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)), __jsx("div", {
          className: "product-detail-content__price-discount",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 17
          }
        }, __jsx("h5", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 19
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-detail-content__actions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          loading: addToCartLoading,
          shape: "round",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 17
          }
        }, "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          shape: "round",
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 17
          }
        }, "So s\xE1nh"))));

      default:
        return __jsx("div", {
          className: `product ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-select",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o y\xEAu th\xEDch",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "So s\xE1nh",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Xem nhanh",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 17
          }
        }))));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rederProductType(type), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: modalVisible,
    onCancel: onModalClose,
    footer: null,
    header: null,
    width: 860,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 7
    }
  }, __jsx(_detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      marginBottom: 0
    },
    hideTab: true,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Product));

/***/ }),

/***/ "./src/components/sections/categories/CategoriesOne.js":
/*!*************************************************************!*\
  !*** ./src/components/sections/categories/CategoriesOne.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\sections\\categories\\CategoriesOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function CategoriesOne({
  data
}) {
  return __jsx("div", {
    className: "categories-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: [{
      sm: 0,
      md: 15
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, data && data.length > 0 ? data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    key: index,
    xs: 24,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "" + "/shop/shop-3-column",
    className: "categories-one-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "categories-one-item__image up-down-anim-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 23
    }
  }, item.image.background), __jsx("img", {
    src: "" + item.image.main,
    alt: "Category image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, item.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, item.quantity, " Items"))))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_2__["Empty"].PRESENTED_IMAGE_SIMPLE,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CategoriesOne));

/***/ }),

/***/ "./src/components/sections/dale-of-week/DowOne.js":
/*!********************************************************!*\
  !*** ./src/components/sections/dale-of-week/DowOne.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\sections\\dale-of-week\\DowOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const DownOneItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  reverse,
  data
}) => {
  return __jsx("div", {
    className: `dow-one-content__item ${classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "-reverse": reverse
    })}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dow-one-content__item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "" + data.iconSrc,
    alt: "Dale of the week icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "dow-one-content__item-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, data.title), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, data.description)));
});

function DowOne({
  data,
  countdownLast
}) {
  return __jsx("div", {
    className: "dow-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\u01AFu \u0111\xE3i tu\u1EA7n",
    className: "-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "dow-one-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "center",
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [0, 30],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, data.slice(0, 2).map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    key: index,
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, __jsx(DownOneItem, {
    reverse: true,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 0,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "dow-one-image",
    src: "" + "assets/images/sections/dale-of-week/one/bean-coffee_4.png",
    alt: "\u01AFu \u0110\xE3i Tu\u1EA7n",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [0, 30],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, data.slice(2, 4).map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    key: index,
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, __jsx(DownOneItem, {
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }))))))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    date: Date.now() + countdownLast,
    renderer: ({
      days,
      hours,
      minutes,
      seconds
    }) => {
      return __jsx("div", {
        className: "dow-one-countdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "dow-one-countdown-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(days)), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 44
        }
      }, "ng\xE0y")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(hours)), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 45
        }
      }, "gi\u1EDD")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(minutes), " "), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 19
        }
      }, "ph\xFAt")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(seconds)), " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 47
        }
      }, "gi\xE2y")));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DowOne));

/***/ }),

/***/ "./src/components/sections/hero-slider/HeroSliderOne.js":
/*!**************************************************************!*\
  !*** ./src/components/sections/hero-slider/HeroSliderOne.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _other_SliderArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../other/SliderArrow */ "./src/components/other/SliderArrow.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\sections\\hero-slider\\HeroSliderOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function HeroSliderOne({
  data
}) {
  const {
    0: currentSlideIndex,
    1: setNextSlideIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_6__["PrevArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }),
    nextArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_6__["NextArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    })
  };

  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentSlide = document.querySelector(`.hero-slider.-style-one .slick-slide[data-index="${currentSlideIndex}"]`);
    const animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach((item, index) => {
      const animationName = item.dataset.animation;
      const animationDelay = item.dataset.delay;
      console.log(animationName);
      item.classList.add("animate__animated", animationName);
      item.style.animationDelay = animationDelay + "s";
      item.addEventListener("animationend", function () {
        this.classList.remove("animate__animated", animationName);
        this.removeEventListener("animationend", function () {
          return;
        });
      });
    });
  }, [currentSlideIndex]);
  return __jsx("div", {
    className: "hero-slider -carousel -style-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    beforeChange: beforeChange,
    className: "arrow-center"
  }, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), data.map((item, index) => __jsx("div", {
    key: index,
    className: `slick-slider-item ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: index === currentSlideIndex
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "hero-slider-background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + item.background,
    alt: "Hero slider background image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  })), __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "hero-slider-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "hero-slider-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("div", {
    "data-delay": "0.8",
    "data-animation": "animate__zoomInRight",
    className: "hero-slider-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "" + "/assets/images/hero-slider/one/1.png",
    alt: "Hero slider image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  }))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HeroSliderOne));

/***/ }),

/***/ "./src/components/sections/introduction/IntroductionOne.js":
/*!*****************************************************************!*\
  !*** ./src/components/sections/introduction/IntroductionOne.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\sections\\introduction\\IntroductionOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function IntroductionOne({
  data
}) {
  return __jsx("div", {
    className: "introduction-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, data.map((item, index) => __jsx("div", {
    key: index,
    className: "introduction-one-item",
    style: {
      backgroundImage: `url('${item.background}')`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: item.image,
    alt: "Introduction image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Mua ngay"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(IntroductionOne));

/***/ }),

/***/ "./src/components/sections/partners/PartnerOne.js":
/*!********************************************************!*\
  !*** ./src/components/sections/partners/PartnerOne.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\sections\\partners\\PartnerOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





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
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "partner-one-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), Array.from(Array(8), (e, i) => __jsx("div", {
    key: i,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + `/assets/images/sections/partners/${i + 1}.png`,
    alt: "Partner logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PartnerOne));

/***/ }),

/***/ "./src/components/sections/product-thumb/ProductTab.js":
/*!*************************************************************!*\
  !*** ./src/components/sections/product-thumb/ProductTab.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\components\\sections\\product-thumb\\ProductTab.js";
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

  const renderTabContent = () => __jsx(_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    renderData: data => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      gutter: [{
        xs: 0,
        md: 15
      }, {
        xs: 0,
        md: 15
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
      key: index
    }, productCol, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: productClassName,
      data: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    })))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });

  return __jsx("div", {
    className: `product-tab ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `product-tab-header ${headerType === "row" ? "-style-two" : "style-one"}  ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(headerClass)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, headerType === "grid" && __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: headerTitle,
    className: "-center",
    hideDecoration: showTitleDecoration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    tabBarExtraContent: headerType === "row" ? {
      left: __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: headerTitle,
        className: "-center",
        hideDecoration: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      })
    } : null,
    defaultActiveKey: "1",
    centered: headerType === "row" ? false : true,
    onChange: onChooseCategory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(TabPane, {
    tab: "All",
    key: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, renderTabContent()), headerCategories.map((item, index) => __jsx(TabPane, {
    tab: item,
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, renderTabContent())))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductTab));

/***/ }),

/***/ "./src/data/benefits.json":
/*!********************************!*\
  !*** ./src/data/benefits.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"iconSrc\":\"/assets/images/other/benefits/1.png\",\"name\":\"GIAO HÀNG MIỄN PHÍ\",\"description\":\"Với đơn hàng trên 1.000.000đ\"},{\"iconSrc\":\"/assets/images/other/benefits/2.png\",\"name\":\"GIAO HÀNG ĐÚNG THỜI GIAN\",\"description\":\"Nếu sản phẩm có vấn đề\"},{\"iconSrc\":\"/assets/images/other/benefits/3.png\",\"name\":\"BẢO MẬT THANH TOÁN\",\"description\":\"100% bảo mật thông tin khách hàng\"},{\"iconSrc\":\"/assets/images/other/benefits/4.png\",\"name\":\"24/7 SUPPORT\",\"description\":\"Dedicated support\"}]");

/***/ }),

/***/ "./src/data/categories.json":
/*!**********************************!*\
  !*** ./src/data/categories.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Cà phê thải độc\",\"value\":\"coffee\"},{\"name\":\"Cà phê hòa tan\",\"value\":\"organic-coffee\"},{\"name\":\"Cà phê nguyên hạt - rang xay\",\"value\":\"bean-coffee\"},{\"name\":\"Các sản phẩm đặc biệt\",\"value\":\"special-coffee\"},{\"name\":\"Sản phẩm bán chạy\",\"value\":\"best-seller\"},{\"name\":\"Sản phẩm khuyến mãi\",\"value\":\"sale-product\"}]");

/***/ }),

/***/ "./src/data/footer-links.json":
/*!************************************!*\
  !*** ./src/data/footer-links.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"PHÁP LÝ & CÂU HỎI\",\"items\":[{\"title\":\"Câu chuyện OC\",\"href\":\"/other/about-us\"},{\"title\":\"Chính sách đổi trả\",\"href\":\"/shop/checkout\"},{\"title\":\"Chính sách bảo mật\",\"href\":\"/other/contact-us\"},{\"title\":\"Điều khoản dịch vụ\",\"href\":\"#\"}]},{\"title\":\"Tài khoản\",\"items\":[{\"title\":\"Thông tin tài khoản\",\"href\":\"#\"},{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},{\"title\":\"Giỏ hàng\",\"href\":\"/shop/cart\"},{\"title\":\"Theo dõi đơn hàng\",\"href\":\"#\"}]},{\"title\":\"Tài khoản\",\"items\":[{\"title\":\"Thông tin tài khoản\",\"href\":\"#\"},{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},{\"title\":\"Giỏ hàng\",\"href\":\"/shop/cart\"},{\"title\":\"Theo dõi đơn hàng\",\"href\":\"#\"}]}]");

/***/ }),

/***/ "./src/data/navigator.json":
/*!*********************************!*\
  !*** ./src/data/navigator.json ***!
  \*********************************/
/*! exports provided: HOME, SHOP, BLOG, SALE, CONTACT, INTRO, PAGES, ABOUT, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HOME\":{\"title\":\"Trang chủ\",\"href\":\"/\"},\"SHOP\":{\"title\":\"Sản phẩm\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Cà phê Thải độc đại tràng\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Cà phê hòa tan\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Cà phê nguyên hạt - rang xay\",\"href\":\"/shop/shop-3-column\"},{\"title\":\"Sản phẩm đặc biệt\",\"href\":\"/shop/shop-3-column\"}]},\"BLOG\":{\"title\":\"Blog\",\"href\":\"/blog/blog-list-sidebar\"},\"SALE\":{\"title\":\"Khuyến mãi\",\"href\":\"/blog/blog-list-sidebar\"},\"CONTACT\":{\"title\":\"Liên hệ\",\"href\":\"/other/contact-us\"},\"INTRO\":{\"title\":\"Giới thiệu\",\"href\":\"/other/about-us\"},\"PAGES\":{\"title\":\"Pages\",\"href\":\"#\",\"subMenu\":[{\"title\":\"Login\",\"href\":\"/auth/login\"},{\"title\":\"Register\",\"href\":\"/auth/register\"},{\"title\":\"FAQ\",\"href\":\"/other/faq\"},{\"title\":\"Coming Soon\",\"href\":\"/other/coming-soon\"},{\"title\":\"Contact Us\",\"href\":\"/other/contact-us\"}]},\"ABOUT\":{\"title\":\"Giới thiệu\",\"href\":\"/other/about-us\"}}");

/***/ }),

/***/ "./src/data/sections/categories.json":
/*!*******************************************!*\
  !*** ./src/data/sections/categories.json ***!
  \*******************************************/
/*! exports provided: one, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"image\":{\"main\":\"/assets/images/sections/category/one/brown_1.jpeg\"},\"title\":\"Cà phê thải độc\",\"quantity\":12},{\"image\":{\"main\":\"/assets/images/sections/category/one/huuco_1.jpg\"},\"title\":\"Cà phê hòa tan\",\"quantity\":8},{\"image\":{\"main\":\"/assets/images/sections/category/one/bean-coffee_1.png\"},\"title\":\"Cà phê hạt - rang xay\",\"quantity\":2},{\"image\":{\"main\":\"/assets/images/sections/category/one/special-coffee_1.png\"},\"title\":\"Sản phẩm đặc biệt\",\"quantity\":10}]}");

/***/ }),

/***/ "./src/data/sections/dale-of-week.json":
/*!*********************************************!*\
  !*** ./src/data/sections/dale-of-week.json ***!
  \*********************************************/
/*! exports provided: one, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"title\":\"Nguyên chất 100%\",\"description\":\"Không pha trộn. Không tạp chất. Không tẩm ướp hương liệu phụ trợ. Không chất bảo quản gây hại sức khỏe người dùng\",\"iconSrc\":\"/assets/images/sections/dale-of-week/one/1.png\"},{\"title\":\"Xuất xứ, nguồn gốc rõ ràng\",\"description\":\"Cà phê được trồng tại Farm trồng cà phê được chứng nhận sử dụng phương pháp hữu cơ từ 2013 Tại thôn 1/5, xã Phú Sơn, huyện Lâm Hà, tỉnh Lâm Đồng, VN.\",\"iconSrc\":\"/assets/images/sections/dale-of-week/one/2.png\"},{\"title\":\"Bảo quản kĩ càng\",\"description\":\"Sản phẩm sau khi hoàn thành sẽ được bảo quản bằng bao bì nhựa phức hợp, có màng LLDPE tiếp xúc trực tiếp và van khóa 1 chiều, đảm bảo chuẩn an toàn vệ sinh thực phẩm cao cấp và gìn giữ trọn vẹn hương vị cà phê bên trong.\",\"iconSrc\":\"/assets/images/sections/dale-of-week/one/3.png\"},{\"title\":\"Quy trình nghiêm ngặt, hiện đại\",\"description\":\"Hạt cà phê nhân được bảo quản trong kho lạnh 6 tháng trước khi đưa vào rang xay trên hệ thống máy Probat của Ý\",\"iconSrc\":\"/assets/images/sections/dale-of-week/one/4.png\"}]}");

/***/ }),

/***/ "./src/data/sections/hero-slider.json":
/*!********************************************!*\
  !*** ./src/data/sections/hero-slider.json ***!
  \********************************************/
/*! exports provided: one, four, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"background\":\"/assets/images/hero-slider/one/slideshow_1.jpg\",\"price\":{\"main\":\"14\",\"unit\":\"pakage\"}},{\"background\":\"/assets/images/hero-slider/one/slideshow_2.jpg\",\"price\":{\"main\":\"16\",\"unit\":\"pakage\"}}],\"four\":[{\"image\":\"/assets/images/hero-slider/four/1.png\",\"background\":\"/assets/images/hero-slider/four/bg-1.png\"},{\"image\":\"/assets/images/hero-slider/four/1.png\",\"background\":\"/assets/images/hero-slider/four/bg-2.png\"}]}");

/***/ }),

/***/ "./src/data/sections/introduction.json":
/*!*********************************************!*\
  !*** ./src/data/sections/introduction.json ***!
  \*********************************************/
/*! exports provided: one, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"background\":\"/assets/images/sections/introduction/background_special_1.jpg\",\"image\":\"/assets/images/sections/introduction/gold_1.jpeg\",\"btnContent\":\"MUA NGAY\"},{\"background\":\"/assets/images/sections/introduction/background_special_1.jpg\",\"image\":\"/assets/images/sections/introduction/special-coffee_2.png\",\"btnContent\":\"MUA NGAY\"},{\"background\":\"/assets/images/sections/introduction/background_special_1.jpg\",\"image\":\"/assets/images/sections/introduction/special-coffee_1.png\",\"btnContent\":\"MUA NGAY\"}]}");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/LayoutOne */ "./src/components/layout/LayoutOne.js");
/* harmony import */ var _components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/hero-slider/HeroSliderOne */ "./src/components/sections/hero-slider/HeroSliderOne.js");
/* harmony import */ var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json");
var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json", 1);
/* harmony import */ var _components_other_Benefits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/other/Benefits */ "./src/components/other/Benefits.js");
/* harmony import */ var _components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/categories/CategoriesOne */ "./src/components/sections/categories/CategoriesOne.js");
/* harmony import */ var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json");
var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json", 1);
/* harmony import */ var _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/product-thumb/ProductTab */ "./src/components/sections/product-thumb/ProductTab.js");
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _components_sections_introduction_IntroductionOne__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sections/introduction/IntroductionOne */ "./src/components/sections/introduction/IntroductionOne.js");
/* harmony import */ var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/sections/introduction.json */ "./src/data/sections/introduction.json");
var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/introduction.json */ "./src/data/sections/introduction.json", 1);
/* harmony import */ var _components_sections_dale_of_week_DowOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sections/dale-of-week/DowOne */ "./src/components/sections/dale-of-week/DowOne.js");
/* harmony import */ var _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/sections/dale-of-week.json */ "./src/data/sections/dale-of-week.json");
var _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/dale-of-week.json */ "./src/data/sections/dale-of-week.json", 1);
/* harmony import */ var _components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/sections/partners/PartnerOne */ "./src/components/sections/partners/PartnerOne.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "E:\\TAKATECH\\organic-coffee\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function Home() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: currentProductTabsCategory,
    1: setCurrentProductTabsCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    daleProducts: ""
  });
  const {
    fetchDaleProductsRequest
  } = _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__;
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopReducer);
  const {
    daleProducts
  } = shopState;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(fetchDaleProductsRequest({
      limit: 8
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(fetchDaleProductsRequest({
      limit: 8,
      category: currentProductTabsCategory.daleProducts
    }));
  }, [currentProductTabsCategory.daleProducts]);
  return __jsx(_components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "organiccoffee - Organic Coffee",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_5__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_components_other_Benefits__WEBPACK_IMPORTED_MODULE_6__["default"], {
    threeCol: true,
    style: {
      position: "relative",
      zIndex: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx(_components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_8__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: daleProducts,
    productCol: {
      xs: 12,
      sm: 8,
      lg: 6
    },
    onTabChange: val => setCurrentProductTabsCategory(_objectSpread(_objectSpread({}, currentProductTabsCategory), {}, {
      daleProducts: val
    })),
    headerCategories: _data_categories_json__WEBPACK_IMPORTED_MODULE_10__.slice(0, 5).map(item => item.name),
    headerTitle: "S\u1EA3n ph\u1EA9m b\xE1n ch\u1EA1y",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx(_components_sections_introduction_IntroductionOne__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_12__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx(_components_sections_dale_of_week_DowOne__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_14__.one,
    countdownLast: 100000000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })));
}

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

/***/ "./src/redux/actions/compareActions.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/compareActions.js ***!
  \*********************************************/
/*! exports provided: addToCompare, removeFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCompare", function() { return removeFromCompare; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const addToCompare = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE,
  payload: {
    data
  }
});
const removeFromCompare = productId => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE,
  payload: {
    productId
  }
});

/***/ }),

/***/ "./src/redux/actions/shopActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/shopActions.js ***!
  \******************************************/
/*! exports provided: fetchProducts, fetchProductsSuccess, fetchProductsFail, fetchProductsRequest, fetchSaleProducts, fetchSaleProductsSuccess, fetchSaleProductsFail, fetchSaleProductsRequest, fetchFeaturedProducts, fetchFeaturedProductsSuccess, fetchFeaturedProductsFail, fetchFeaturedProductsRequest, fetchBestSellerProducts, fetchBestSellerProductsSuccess, fetchBestSellerProductsFail, fetchBestSellerProductsRequest, fetchDaleProducts, fetchDaleProductsSuccess, fetchDaleProductsFail, fetchDaleProductsRequest, fetchProductDetail, fetchProductDetailSuccess, fetchProductDetailFail, fetchProductDetailRequest, fetchSearchedProduct, fetchSearchedProductSuccess, fetchSearchedProductFail, fetchSearchedProductRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsSuccess", function() { return fetchProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsFail", function() { return fetchProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsRequest", function() { return fetchProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProducts", function() { return fetchSaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsSuccess", function() { return fetchSaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsFail", function() { return fetchSaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsRequest", function() { return fetchSaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProducts", function() { return fetchFeaturedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsSuccess", function() { return fetchFeaturedProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsFail", function() { return fetchFeaturedProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsRequest", function() { return fetchFeaturedProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProducts", function() { return fetchBestSellerProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsSuccess", function() { return fetchBestSellerProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsFail", function() { return fetchBestSellerProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsRequest", function() { return fetchBestSellerProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProducts", function() { return fetchDaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsSuccess", function() { return fetchDaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsFail", function() { return fetchDaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsRequest", function() { return fetchDaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetail", function() { return fetchProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailSuccess", function() { return fetchProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailFail", function() { return fetchProductDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailRequest", function() { return fetchProductDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProduct", function() { return fetchSearchedProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductSuccess", function() { return fetchSearchedProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductFail", function() { return fetchSearchedProductFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductRequest", function() { return fetchSearchedProductRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/shop */ "./src/apis/shop.js");



//Get all products
const fetchProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS
});
const fetchProductsSuccess = (data, productCount) => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS,
  payload: {
    data,
    productCount
  }
});
const fetchProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchProductsRequest = query => {
  return dispatch => {
    dispatch(fetchProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductsData"](query).then(res => {
      dispatch(fetchProductsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchProductsFail(err));
    });
  };
};

//Get sale products
const fetchSaleProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS
});
const fetchSaleProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSaleProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchSaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSaleProductsData"](query).then(res => {
      dispatch(fetchSaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSaleProductsFail(err));
    });
  };
};

//Get featured products
const fetchFeaturedProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS
});
const fetchFeaturedProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchFeaturedProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchFeaturedProductsRequest = query => {
  return dispatch => {
    dispatch(fetchFeaturedProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchFeaturedProductsData"](query).then(res => {
      dispatch(fetchFeaturedProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchFeaturedProductsFail(err));
    });
  };
};

//Get best seller products
const fetchBestSellerProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS
});
const fetchBestSellerProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchBestSellerProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchBestSellerProductsRequest = query => {
  return dispatch => {
    dispatch(fetchBestSellerProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchBestSellerProductsData"](query).then(res => {
      dispatch(fetchBestSellerProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchBestSellerProductsFail(err));
    });
  };
};

//Get best seller products
const fetchDaleProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS
});
const fetchDaleProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchDaleProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchDaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchDaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchDaleProductsData"](query).then(res => {
      dispatch(fetchDaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchDaleProductsFail(err));
    });
  };
};

//Get product detail
const fetchProductDetail = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL
});
const fetchProductDetailSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: {
    data
  }
});
const fetchProductDetailFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL,
  payload: {
    err
  }
});
const fetchProductDetailRequest = slug => {
  return dispatch => {
    dispatch(fetchProductDetail());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductDetailData"](slug).then(res => {
      dispatch(fetchProductDetailSuccess(res.data));
    }).catch(err => {
      dispatch(fetchProductDetailFail(err));
    });
  };
};

//Get searched product

const fetchSearchedProduct = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS
});
const fetchSearchedProductSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSearchedProductFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSearchedProductRequest = query => {
  return dispatch => {
    dispatch(fetchSearchedProduct());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSearchedProductData"](query).then(res => {
      dispatch(fetchSearchedProductSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSearchedProductFail(err));
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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9heGlvc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jYXJ0U2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kZWZpbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc2hvcFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXNlRGVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lzaGxpc3RTZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhIZWFkZXJTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL3Byb2R1Y3QvUHJvZHVjdERldGFpbExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsSW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbC9wcm9kdWN0L2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVySW5mb21hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVyUXVpY2tMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVyU3ViY3JpYmVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyT25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9DYXRlZ29yeUNvbGFwcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9GdW5jdGlvbkl0ZW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Nb2JpbGVOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL05hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZnVuY3Rpb24tbWVudS9GdW5jdGlvbk1lbnVPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUvTWVudU9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvdG9wLW5hdi9Ub3BOYXZPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dE9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9CZW5lZml0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvRmV0Y2hEYXRhSGFuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1F1YW50aXR5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvU2VjdGlvblRpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1NsaWRlckFycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1NvY2lhbEljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9jYXRlZ29yaWVzL0NhdGVnb3JpZXNPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvZGFsZS1vZi13ZWVrL0Rvd09uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLXNsaWRlci9IZXJvU2xpZGVyT25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25PbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvcGFydG5lcnMvUGFydG5lck9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jb21wYXJlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvdW50ZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwidXNlU3RhdGUiLCJwYXRobmFtZSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJ1c2VFZmZlY3QiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIm1hcCIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImhhc0Jhc2VQYXRoIiwic3RhcnRzV2l0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJsZW5ndGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5IiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJzZWFyY2hQYXJhbXMiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInJlc29sdmVkQXMiLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJqb2luIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGFyc2VkSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJpbmNsdWRlcyIsInNvbWUiLCJyZSIsInRlc3QiLCJQcm9taXNlIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJkZWNvZGVQYXJhbSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicGFyYW1zIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInByZXBhcmVEZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsImVuY29kZVVSSSIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInVybFF1ZXJ5IiwicmVzdWx0IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJvcHRpb25hbCIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsImZldGNoQ2FydERhdGEiLCJjYXJ0SWQiLCJlbmRwb2ludCIsIkFQSV9VUkwiLCJheGlvc1NlcnZpY2UiLCJmZXRjaFByb2R1Y3RJZENhcnREYXRhIiwicGlkIiwicmVuZGVyUGFyYW0iLCJhZGRDYXJ0RGF0YSIsInBvc3QiLCJyZW1vdmVDYXJ0RGF0YSIsInVwZGF0ZUNhcnREYXRhIiwicGF0Y2giLCJyZW5kZXJVcmwiLCJsaW1pdCIsImNhdGVnb3J5IiwiZmV0Y2hQcm9kdWN0c0RhdGEiLCJzb3J0Iiwib3JkZXIiLCJxIiwiY29sb3IiLCJzaXplIiwidGFnIiwiZmV0Y2hTYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRGF0YSIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzRGF0YSIsImZldGNoRGFsZVByb2R1Y3RzRGF0YSIsImZldGNoUHJvZHVjdERldGFpbERhdGEiLCJzbHVnIiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhIiwiaW5wdXQiLCJmZXRjaFdpc2hsaXN0RGF0YSIsImZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhIiwiYWRkV2lzaGxpc3REYXRhIiwicmVtb3ZlV2lzaGxpc3REYXRhIiwiQXhpb3NTZXJ2aWNlIiwiYXhpb3MiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImhhbmRsZVN1Y2Nlc3MiLCJoYW5kbGVFcnJvciIsInJlamVjdCIsIm9uQWRkUHJvZHVjdFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJnZXRRdWFudGl0eUF2YWlsYWJsZSIsImlkIiwidXVpZHY0IiwicHJvZHVjdElkIiwiY2FydFF1YW50aXR5IiwicERhdGEiLCJvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCIsIm9uQ2hhbmdlUHJvZHVjdENhcnRRdWFudGl0eSIsImxvZyIsImdldFByb2R1Y3RzQnlTbHVnIiwiYXJyIiwiZmluZCIsInRvTG93ZXJDYXNlIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInRvdGFsIiwiZGlzY291bnQiLCJwcmljZSIsImNoZWNrUHJvZHVjdEluQ2FydCIsImNhcnRBcnIiLCJjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkiLCJwcm9kdWN0c0luQ2FydCIsInRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0IiwicmVkdWNlIiwiY2hlY2tQcm9kdWN0SW5XaXNobGlzdCIsIndpc2hsaXN0QXJyIiwidXNlRGVib3VuY2UiLCJkZWxheSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZm9ybWF0Q3VycmVuY3kiLCJsb2NhbGVzIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJmb3JtYXQiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsIm1vbWVudCIsInJlbW92ZURhc2giLCJvbkFkZFByb2R1Y3RUb1dpc2hsaXN0Iiwib25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0Iiwid2l0aEhlYWRlclNjcm9sbCIsIldyYXBwZWRDb21wb25lbnQiLCJoZWFkZXJSZWYiLCJzZXRTY3JvbGwiLCJpc0hlYWRlckZpeGVkIiwic2V0SXNIZWFkZXJGaXhlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsWSIsIl9fanN4IiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsImZpeGVkIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfZXh0ZW5kcyIsIlByb2R1Y3REZXRhaWxMYXlvdXQiLCJoaWRlVGFiIiwiaW1hZ2VzIiwiZnVsbERlc2NyaXB0aW9uIiwic3BlY2lmaWNhdGlvbnMiLCJyZXZpZXdzIiwibWVtbyIsIlByb2R1Y3REZXRhaWxDb250ZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRRdWFudGl0eSIsInNldEN1cnJlbnRRdWFudGl0eSIsImFkZFRvQ2FydExvYWRpbmciLCJzZXRBZGRUb0NhcnRMb2FkaW5nIiwiY2FydFN0YXRlIiwidXNlU2VsZWN0b3IiLCJjYXJ0UmVkdWNlciIsImNvbXBhcmVTdGF0ZSIsImNvbXBhcmVSZWR1Y2VyIiwicHJvZHVjdEluQ29tcGFyZSIsImF2YWlhYmxlUXVhbnRpdHkiLCJvbkFkZFRvQ2FydCIsImZldGNoQ2FydFJlcXVlc3QiLCJtZXMiLCJvbkFkZFRvQ29tcGFyZSIsInJlbW92ZUZyb21Db21wYXJlIiwiYWRkVG9Db21wYXJlIiwicmF0ZSIsInZhbCIsImFjdGl2ZSIsIndoaXRlU3BhY2UiLCJzaG9ydERlc2NyaXB0aW9uIiwiUHJvZHVjdERldGFpbEltYWdlcyIsInNsaWRlcjFTZXR0aW5ncyIsImFycm93cyIsInNsaWRlcjJTZXR0aW5ncyIsInNsaWRlc1RvU2hvdyIsImZvY3VzT25TZWxlY3QiLCJ2ZXJ0aWNhbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJuYXYxIiwic2V0TmF2MSIsIm5hdjIiLCJzZXROYXYyIiwiYyIsImltZyIsImluZGV4IiwiVGFiUGFuZSIsIlRhYnMiLCJSZXZpZXdJdGVtIiwidXNlciIsImF2YXRhciIsImNvbW1lbnREYXRlIiwicmV2aWV3IiwiUHJvZHVjdERldGFpbFRhYiIsIm9uRmluaXNoIiwidmFsdWVzIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJ3ZWlnaHQiLCJyZXF1aXJlZCIsIkZvb3RlciIsImNvbnRhaW5lckZsdWlkIiwiQ29udGFpbmVyIiwiZmx1aWQiLCJSb3ciLCJndXR0ZXIiLCJDb2wiLCJ4cyIsIm1kIiwibGciLCJGb290ZXJJbmZvbWF0aW9uIiwiRm9vdGVyUXVpY2tMaW5rcyIsImNvbFNpemUiLCJzcGFuIiwiYWxpZ24iLCJGb290ZXJTdWJjcmliZUlucHV0Iiwic3JjIiwiYWx0IiwiU29jaWFsSWNvbnMiLCJzaGFwZSIsImp1c3RpZnkiLCJmb290ZXJMaW5rcyIsInRpdGxlIiwiaXRlbXMiLCJsaW5rIiwiQ3VzdG9tRm9ybSIsIm9uVmFsaWRhdGVkIiwiRU1BSUwiLCJlbWFpbCIsIkZyYWdtZW50IiwiRm9ybSIsIkl0ZW0iLCJub1N0eWxlIiwicnVsZXMiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiQnV0dG9uIiwiaHRtbFR5cGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIk1haWxjaGltcFN1YnNjcmliZSIsInJlbmRlciIsInN1YnNjcmliZSIsImZvcm1EYXRhIiwiSGVhZGVyT25lIiwiYWN0aXZlSGVhZGVyQ29sbGFwc2UiLCJUb3BOYXZPbmUiLCJNZW51T25lIiwiRnVuY3Rpb25NZW51T25lIiwiY2F0ZWdvcmllcyIsIkNhdGVnb3J5Q29sYXBwc2UiLCJQYW5lbCIsIkNvbGxhcHNlIiwiYm9yZGVyZWQiLCJkZWZhdWx0QWN0aXZlS2V5IiwiZXhwYW5kSWNvbiIsImlzQWN0aXZlIiwiRG93bk91dGxpbmVkIiwicm90YXRlIiwiZXhwYW5kSWNvblBvc2l0aW9uIiwiaGVhZGVyIiwiZXh0cmEiLCJGdW5jdGlvbkl0ZW1zIiwiaGlkZVRvdGFsIiwiaGlkZVdpc2hsaXN0IiwiTW9iaWxlTWVudU9wZW5lciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwib25TaG93RHJhd2VyIiwib25DbG9zZURyYXdlciIsIkRyYXdlciIsImNsb3NhYmxlIiwib25DbG9zZSIsInBsYWNlbWVudCIsIndpZHRoIiwiTW9iaWxlTmF2aWdhdG9yIiwiU3ViTWVudSIsIk1lbnUiLCJzZXRDdXJyZW50IiwiaGFuZGxlQ2xpY2siLCJzZXRTdGF0ZSIsInNlbGVjdGVkS2V5cyIsIm1vZGUiLCJuYXZpZ2F0b3JEYXRhIiwiSE9NRSIsInN1Yk1lbnUiLCJTSE9QIiwibGF5b3V0IiwiZGV0YWlsIiwiUEFHRVMiLCJBQk9VVCIsInJlbCIsIk5hdmlnYXRvciIsIkJMT0ciLCJTQUxFIiwiQ09OVEFDVCIsIlNlYXJjaEZvcm0iLCJlbnRlckJ1dHRvbiIsImhpZGVTZWxlY3QiLCJPcHRpb24iLCJTZWxlY3QiLCJjdXJyZW50U2VhcmNoIiwic2V0Q3VycmVudFNlYXJjaCIsImN1cnJlbnRDYXRlZ29yeSIsInNldEN1cnJlbnRDYXRlZ29yeSIsImRlYm91bmRWYWx1ZSIsInNob3BTdGF0ZSIsInNob3BSZWR1Y2VyIiwic2VhcmNoZWRQcm9kdWN0cyIsIm9uQ2hhbmdlIiwib25TZWxlY3RPcHRpb24iLCJvcHRpb24iLCJvblNlYXJjaCIsIm9uQ2hvb3NlQ2F0ZW9ncnkiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3QiLCJBdXRvQ29tcGxldGUiLCJiYWNrZmlsbCIsIm9uU2VsZWN0IiwiZmlsdGVyT3B0aW9uIiwiaW5wdXRWYWx1ZSIsIlNlYXJjaCIsImxvYWRpbmciLCJmbGFnRGF0YSIsImltYWdlIiwiZGVmYXVsdFZhbHVlIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJTY3JvbGxlZEhlYWRlciIsIkxheW91dE9uZSIsImhlYWRlckNsYXNzIiwiZm9vdGVyQ2xhc3MiLCJIZWFkIiwiQmFja1RvcCIsIkJlbmVmaXRzIiwiY29sdW1uIiwidGhyZWVDb2wiLCJyZW5kZXJDb2wiLCJzbSIsImNvbCIsImJlbmVmaXRzRGF0YSIsImljb25TcmMiLCJkZXNjcmlwdGlvbiIsInpGZXRjaERhdGFIYW5kbGUiLCJlcnJvck1lc3NhZ2UiLCJlbXB0eURlc2NyaXB0aW9uIiwicmVuZGVyRGF0YSIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIlF1YW50aXR5U2VsZWN0b3IiLCJtaW4iLCJtYXgiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsImZpcnN0VXBkYXRlIiwic2V0VmFsdWUiLCJkZWNyZWFzZVZhbHVlIiwidXNlQ2FsbGJhY2siLCJpbmNyZWFzZVZhbHVlIiwiU2VjdGlvblRpdGxlIiwiaGlkZURlY29yYXRpb24iLCJQcmV2QXJyb3ciLCJjdXJyZW50U2xpZGUiLCJzbGlkZUNvdW50IiwiYXJyb3dQcm9wcyIsIk5leHRBcnJvdyIsIlByb2R1Y3QiLCJjb3VudGRvd25MYXN0IiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiYWRkVG9XaXNobGlzdExvYWRpbmciLCJzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyIsIndpc2hsaXN0U3RhdGUiLCJ3aXNobGlzdFJlZHVjZXIiLCJwcm9kdWN0SW5XaXNobGlzdCIsInNob3dNb2RhbCIsIm9uTW9kYWxDbG9zZSIsIm9uQWRkV2lzaGxpc3QiLCJmZXRjaFdpc2hMaXN0UmVxdWVzdCIsImdldFJhbmRvbUFyYml0cmFyeSIsIk1hdGgiLCJyYW5kb20iLCJyZWRlclByb2R1Y3RUeXBlIiwiY292ZXJJbWFnZSIsIkRhdGUiLCJub3ciLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInplcm9QYWQiLCJtYXJnaW5Cb3R0b20iLCJDYXRlZ29yaWVzT25lIiwiYmFja2dyb3VuZCIsIm1haW4iLCJEb3duT25lSXRlbSIsInJldmVyc2UiLCJEb3dPbmUiLCJIZXJvU2xpZGVyT25lIiwiY3VycmVudFNsaWRlSW5kZXgiLCJzZXROZXh0U2xpZGVJbmRleCIsImZhZGUiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TY3JvbGwiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJiZWZvcmVDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwicXVlcnlTZWxlY3RvciIsImFuaW1hdGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGlvbk5hbWUiLCJkYXRhc2V0IiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uRGVsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJJbnRyb2R1Y3Rpb25PbmUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXJ0bmVyT25lIiwiUHJvZHVjdFRhYiIsIm9uVGFiQ2hhbmdlIiwicHJvZHVjdENsYXNzTmFtZSIsImhlYWRlckNhdGVnb3JpZXMiLCJoZWFkZXJUaXRsZSIsInNob3dUaXRsZURlY29yYXRpb24iLCJoZWFkZXJUeXBlIiwicHJvZHVjdENvbCIsIm9uQ2hvb3NlQ2F0ZWdvcnkiLCJyZW5kZXJUYWJDb250ZW50IiwibGVmdCIsIkhvbWUiLCJjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSIsInNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5IiwiZGFsZVByb2R1Y3RzIiwiZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0Iiwic2hvcEFjdGlvbnMiLCJoZXJvc2xpZGVPbmVEYXRhIiwib25lIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjYXRlZ29yaWVzT25lRGF0YSIsImludHJvZHVjdGlvbk9uZURhdGEiLCJkb3dPbmVEYXRhIiwiRkVUQ0hfUFJPRFVDVFMiLCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1NBTEVfUFJPRFVDVFMiLCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFMiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0RBTEVfUFJPRFVDVFMiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFMiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1BPU1RTIiwiRkVUQ0hfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1BPU1RTX0ZBSUwiLCJGRVRDSF9QT1NUX0RFVEFJTCIsIkZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1MiLCJGRVRDSF9QT1NUX0RFVEFJTF9GQUlMIiwiRkVUQ0hfUkVDRU5UX1BPU1RTIiwiRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9SRUNFTlRfUE9TVFNfRkFJTCIsIlNIT1BfRklMVEVSIiwiUkVTRVRfRklMVEVSUyIsIlNFVF9TT1JUIiwiU0VUX1NIT1ciLCJTRVRfVklFVyIsIlNFVF9DQVRFR09SWSIsIlNFVF9DT0xPUiIsIlNFVF9TSVpFIiwiU0VUX1RBRyIsIkNBUlQiLCJGRVRDSF9DQVJUIiwiRkVUQ0hfQ0FSVF9TVUNDRVNTIiwiRkVUQ0hfQ0FSVF9GQUlMIiwiV0lTSExJU1QiLCJGRVRDSF9XSVNITElTVCIsIkZFVENIX1dJU0hMSVNUX1NVQ0NFU1MiLCJGRVRDSF9XSVNITElTVF9GQUlMIiwiQ09NUEFSRSIsIkFERF9UT19DT01QQVJFIiwiUkVNT1ZFX0ZST01fQ09NUEFSRSIsIkJMT0dfRklMVEVSIiwiZmV0Y2hDYXJ0IiwiZmV0Y2hDYXJ0U3VjY2VzcyIsInBheWxvYWQiLCJmZXRjaENhcnRGYWlsIiwiY2FydEFwaXMiLCJmZXRjaFByb2R1Y3RzIiwiZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MiLCJwcm9kdWN0Q291bnQiLCJmZXRjaFByb2R1Y3RzRmFpbCIsImZldGNoUHJvZHVjdHNSZXF1ZXN0Iiwic2hvcEFwaXMiLCJoZWFkZXJzIiwiZmV0Y2hTYWxlUHJvZHVjdHMiLCJmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaFNhbGVQcm9kdWN0c0ZhaWwiLCJmZXRjaFNhbGVQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHMiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbCIsImZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaEJlc3RTZWxsZXJQcm9kdWN0cyIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzU3VjY2VzcyIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzRmFpbCIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCIsImZldGNoRGFsZVByb2R1Y3RzIiwiZmV0Y2hEYWxlUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hEYWxlUHJvZHVjdHNGYWlsIiwiZmV0Y2hQcm9kdWN0RGV0YWlsIiwiZmV0Y2hQcm9kdWN0RGV0YWlsU3VjY2VzcyIsImZldGNoUHJvZHVjdERldGFpbEZhaWwiLCJmZXRjaFByb2R1Y3REZXRhaWxSZXF1ZXN0IiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3QiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdFN1Y2Nlc3MiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdEZhaWwiLCJmZXRjaFdpc2hMaXN0IiwiZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MiLCJmZXRjaFdpc2hMaXN0RmFpbCIsIndpc2hsaXN0QXBpcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxt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SXI0QixHQUFHLEtBQU07RUFDbEN5RSxJQUFJLEVBQUVneEIscURBQVEsQ0FBQ0csbUJBQW1CO0VBQ2xDTyxPQUFPLEVBQUU7SUFDUG4yQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUssTUFBTXl1QixvQkFBb0IsR0FBR0EsQ0FBQSxLQUFNO0VBQ3hDLE9BQVExTyxRQUFRLElBQUs7SUFDbkJBLFFBQVEsQ0FBQ29ZLGFBQWEsRUFBRSxDQUFDO0lBQ3pCRyxnRUFDb0IsRUFBRSxDQUNuQjUyQixJQUFJLENBQUUrSCxHQUFHLElBQUs7TUFDYnNXLFFBQVEsQ0FBQ3FZLG9CQUFvQixDQUFDM3VCLEdBQUcsQ0FBQ3lGLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUNEMU8sS0FBSyxDQUFFUixHQUFHLElBQUs7TUFDZCtmLFFBQVEsQ0FBQ3NZLGlCQUFpQixDQUFDcjRCLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztFQUNOLENBQUM7QUFDSCxDQUFDLEM7Ozs7Ozs7Ozs7O0FDbkNELDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2NhcnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhcnREYXRhID0gKGNhcnRJZCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IGNhcnRJZCA/IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWAgOiBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RJZENhcnREYXRhID0gKHBpZCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwicHJvZHVjdElkXCIsIHBpZCk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENhcnREYXRhID0gKGRhdGEpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmRlbGV0ZShlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydERhdGEgPSAoY2FydElkLCBkYXRhKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBhdGNoKGVuZHBvaW50LCBkYXRhKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvcHJvZHVjdFwiO1xyXG5cclxuY29uc3QgcmVuZGVyVXJsID0gKHVybCwgbGltaXQsIGNhdGVnb3J5KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgbGltaXQpICsgcmVuZGVyUGFyYW0oXCJjYXRlZ29yeVwiLCBjYXRlZ29yeSlcclxuICApO1xyXG59O1xyXG5cclxuLy9GZXRjaCBsaXN0IG9mIHByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9XHJcbiAgICByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KSArXHJcbiAgICByZW5kZXJQYXJhbShcIl9wYWdlXCIsIHF1ZXJ5LnBhZ2UpICtcclxuICAgIHJlbmRlclBhcmFtKFwiX3NvcnRcIiwgcXVlcnkuc29ydC5zb3J0KSArXHJcbiAgICByZW5kZXJQYXJhbShcIl9vcmRlclwiLCBxdWVyeS5zb3J0Lm9yZGVyKSArXHJcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkucSkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5jb2xvclwiLCBxdWVyeS5jb2xvcikgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJzcGVjaWZpY2F0aW9ucy5zaXplXCIsIHF1ZXJ5LnNpemUpICtcclxuICAgIHJlbmRlclBhcmFtKFwidGFnX2xpa2VcIiwgcXVlcnkudGFnKTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbi8vRmV0Y2ggcHJvZHVjdCBkZXRhaWxcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbERhdGEgPSAoc2x1ZykgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwic2x1Z1wiLCBzbHVnKTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG4vL0ZldGNoIHNlcmNoZWQgcHJvZHVjdCBieSBxdWVyeVxyXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhID0gKHF1ZXJ5KSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID1cclxuICAgIEFQSV9VUkwgK1xyXG4gICAgdXJsICtcclxuICAgIFwiP1wiICtcclxuICAgIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5pbnB1dCkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJjYXRlZ29yeVwiLCBxdWVyeS5jYXRlZ29yeSkgK1xyXG4gICAgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgcXVlcnkubGltaXQpO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvd2lzaGxpc3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hsaXN0RGF0YSA9ICgpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgXCI/XCIgKyByZW5kZXJQYXJhbShcImlkXCIsIHBpZCk7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFdpc2hsaXN0RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVdpc2hsaXN0RGF0YSA9IChwaWQpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke3BpZH1gO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZGVsZXRlKGVuZHBvaW50KTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY2xhc3MgQXhpb3NTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKCk7XHJcbiAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlU3VjY2VzcywgdGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcihlcnJvcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldCh1cmwpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGJvZHkpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnBvc3QodXJsLCBib2R5KTtcclxuICB9XHJcblxyXG4gIHBhdGNoKHVybCwgYm9keSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucGF0Y2godXJsLCBib2R5KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSh1cmwpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlbGV0ZSh1cmwpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF4aW9zU2VydmljZSgpO1xyXG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQge1xyXG4gIGZldGNoUHJvZHVjdElkQ2FydERhdGEsXHJcbiAgYWRkQ2FydERhdGEsXHJcbiAgdXBkYXRlQ2FydERhdGEsXHJcbiAgcmVtb3ZlQ2FydERhdGEsXHJcbn0gZnJvbSBcIi4uL2FwaXMvY2FydFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uQWRkUHJvZHVjdFRvQ2FydCA9ICh7XHJcbiAgcHJvZHVjdCxcclxuICBxdWFudGl0eSA9IDEsXHJcbiAgb25TdWNjZXNzLFxyXG4gIG9uRXJyb3IsXHJcbiAgZ2V0UXVhbnRpdHlBdmFpbGFibGUgPSAoKSA9PiB0cnVlLFxyXG59KSA9PiB7XHJcbiAgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YShwcm9kdWN0LmlkKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdHkgPT09IDApIHtcclxuICAgICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIlJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgcHJvZHVjdHNcIik7XHJcbiAgICAgICAgICBnZXRRdWFudGl0eUF2YWlsYWJsZSAmJiBnZXRRdWFudGl0eUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFkZENhcnREYXRhKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIGNhcnRRdWFudGl0eTogcXVhbnRpdHksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXHJcbiAgICAgICAgICAgIC5jYXRjaChcclxuICAgICAgICAgICAgICAoZXJyKSA9PlxyXG4gICAgICAgICAgICAgICAgb25FcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIGNhcnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHBEYXRhID0gcmVzLmRhdGFbMF07XHJcbiAgICAgICAgaWYgKHBEYXRhLmNhcnRRdWFudGl0eSArIHF1YW50aXR5ID4gcERhdGEucXVhbnRpdHkpIHtcclxuICAgICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIlJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgcHJvZHVjdHNcIik7XHJcbiAgICAgICAgICBnZXRRdWFudGl0eUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVwZGF0ZUNhcnREYXRhKHBEYXRhLmlkLCB7XHJcbiAgICAgICAgICAgIGNhcnRRdWFudGl0eTogcERhdGEuY2FydFF1YW50aXR5ICsgcXVhbnRpdHksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goXHJcbiAgICAgICAgICAgICAgKGVycikgPT5cclxuICAgICAgICAgICAgICAgIG9uRXJyb3IgJiZcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IoXCJBZGQgcHJvZHVjdCB0byBjYXJ0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpblwiLCBlcnIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKFxyXG4gICAgICAoZXJyKSA9PlxyXG4gICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIkFkZCBwcm9kdWN0IHRvIGNhcnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluXCIsIGVycilcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25SZW1vdmVQcm9kdWN0RnJvbUNhcnQgPSAoeyBjYXJ0SWQsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XHJcbiAgaWYgKGNhcnRJZCAmJiBjYXJ0SWQgIT09IFwiXCIgJiYgY2FydElkICE9PSBudWxsKSB7XHJcbiAgICByZW1vdmVDYXJ0RGF0YShjYXJ0SWQpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcclxuICAgICAgLmNhdGNoKFxyXG4gICAgICAgIChlcnIpID0+XHJcbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZW1vdmUgcHJvZHVjdCBmYWlsbSwgcGxlYXNlciB0cnkgYWdhaW5cIiwgZXJyKVxyXG4gICAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbkNoYW5nZVByb2R1Y3RDYXJ0UXVhbnRpdHkgPSAoe1xyXG4gIHByb2R1Y3QsXHJcbiAgcXVhbnRpdHksXHJcbiAgb25TdWNjZXNzLFxyXG59KSA9PiB7XHJcbiAgaWYgKHF1YW50aXR5ID4gcHJvZHVjdC5xdWFudGl0eSB8fCBxdWFudGl0eSA8IDEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdXBkYXRlQ2FydERhdGEocHJvZHVjdC5pZCwgeyBjYXJ0UXVhbnRpdHk6IHF1YW50aXR5IH0pXHJcbiAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjY5NjlcIjtcclxuIiwiZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlTbHVnID0gKGFyciwgc2x1ZykgPT4ge1xyXG4gIHJldHVybiBzbHVnICYmIHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiXHJcbiAgICA/IGFyci5maW5kKChwKSA9PiBwLnNsdWcudG9Mb3dlckNhc2UoKSA9PT0gc2x1Zy50b0xvd2VyQ2FzZSgpKVxyXG4gICAgOiBhcnI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlVG90YWxQcmljZSA9IChhcnIpID0+IHtcclxuICBsZXQgdG90YWwgPSAwO1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5kaXNjb3VudCkge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eVxyXG4gICAgICAgID8gKGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50KSAqIGl0ZW0uY2FydFF1YW50aXR5XHJcbiAgICAgICAgOiBpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5ID8gaXRlbS5wcmljZSAqIGl0ZW0uY2FydFF1YW50aXR5IDogaXRlbS5wcmljZTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gdG90YWw7XHJcbn07XHJcblxyXG4vL0NhcnRcclxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IChjYXJ0QXJyLCBwaWQpID0+IHtcclxuICByZXR1cm4gcGlkID8gY2FydEFyci5maW5kKChpdGVtKSA9PiBpdGVtLnByb2R1Y3RJZCA9PT0gcGlkKSA6IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkgPSAoY2FydEFyciwgcGlkKSA9PiB7XHJcbiAgY29uc3QgcHJvZHVjdHNJbkNhcnQgPSBjYXJ0QXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgPT09IHBpZCk7XHJcbiAgaWYgKHByb2R1Y3RzSW5DYXJ0ICYmIHByb2R1Y3RzSW5DYXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0ID0gcHJvZHVjdHNJbkNhcnQucmVkdWNlKFxyXG4gICAgICAodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5jYXJ0UXVhbnRpdHksXHJcbiAgICAgIDBcclxuICAgICk7XHJcbiAgICByZXR1cm4gdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxufTtcclxuXHJcbi8vV2lzaGxpc3RcclxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QgPSAod2lzaGxpc3RBcnIsIHBpZCkgPT4ge1xyXG4gIHJldHVybiBwaWQgPyB3aXNobGlzdEFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwaWQpIDogdW5kZWZpbmVkO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XHJcbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RGVib3VuY2VkVmFsdWUodmFsdWUpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9LCBbdmFsdWVdKTtcclxuICByZXR1cm4gZGVib3VuY2VkVmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAocHJpY2UsIGxvY2FsZXMgPSBcInZpXCIsIGN1cnJlbmN5ID0gXCJWTkRcIikgPT4ge1xyXG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcclxuICB9KS5mb3JtYXQocHJpY2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclBhcmFtID0gKHBhcmFtTmFtZSwgcGFyYW1WYWx1ZSkgPT4ge1xyXG4gIGlmIChwYXJhbVZhbHVlICYmIHBhcmFtVmFsdWUgIT09IFwiXCIgJiYgcGFyYW1WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGAmJHtwYXJhbU5hbWV9PSR7cGFyYW1WYWx1ZX1gO1xyXG4gIH1cclxuICByZXR1cm4gXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKFxyXG4gIGRhdGUsXHJcbiAgaW5wdXRGb3JtYXQgPSBcIllZWVktTU0tRERcIixcclxuICBvdXRwdXRGb3JtYXQgPSBcIk1NTSBERCwgWVlZWVwiXHJcbikgPT4ge1xyXG4gIHJldHVybiBtb21lbnQoZGF0ZSwgaW5wdXRGb3JtYXQpLmZvcm1hdChvdXRwdXRGb3JtYXQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZURhc2ggPSAoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tL2csIFwiIFwiKTtcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSxcclxuICBhZGRXaXNobGlzdERhdGEsXHJcbiAgcmVtb3ZlV2lzaGxpc3REYXRhLFxyXG59IGZyb20gXCIuLi9hcGlzL3dpc2hsaXN0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb25BZGRQcm9kdWN0VG9XaXNobGlzdCA9ICh7IHByb2R1Y3QsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XHJcbiAgZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEocHJvZHVjdC5pZClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGFkZFdpc2hsaXN0RGF0YShwcm9kdWN0KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gb25TdWNjZXNzICYmIG9uU3VjY2VzcyhyZXMpKVxyXG4gICAgICAgICAgLmNhdGNoKFxyXG4gICAgICAgICAgICAoZXJyKSA9PlxyXG4gICAgICAgICAgICAgIG9uRXJyb3IgJiZcclxuICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gd2lzbGlzdCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJQcm9kdWN0IGFscmVhZHkgaW4gd2lzaGxpc3RcIik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goXHJcbiAgICAgIChlcnIpID0+XHJcbiAgICAgICAgb25FcnJvciAmJlxyXG4gICAgICAgIG9uRXJyb3IoXCJBZGQgcHJvZHVjdCB0byB3aXNsaXN0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpblwiLCBlcnIpXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uUmVtb3ZlUHJvZHVjdEZyb21XaXNobGlzdCA9ICh7XHJcbiAgcHJvZHVjdElkLFxyXG4gIG9uU3VjY2VzcyxcclxuICBvbkVycm9yLFxyXG59KSA9PiB7XHJcbiAgaWYgKHByb2R1Y3RJZCAmJiBwcm9kdWN0SWQgIT09IFwiXCIgJiYgcHJvZHVjdElkICE9PSBudWxsKSB7XHJcbiAgICByZW1vdmVXaXNobGlzdERhdGEocHJvZHVjdElkKVxyXG4gICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXHJcbiAgICAgIC5jYXRjaChcclxuICAgICAgICAoZXJyKSA9PlxyXG4gICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiUmVtb3ZlIHByb2R1Y3QgZmFpbCwgcGxlYXNlciB0cnkgYWdhaW5cIiwgZXJyKVxyXG4gICAgICApO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhlYWRlclNjcm9sbChXcmFwcGVkQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lzSGVhZGVyRml4ZWQsIHNldElzSGVhZGVyRml4ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKHNjcm9sbCA+PSBoZWFkZXJSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzSGVhZGVyRml4ZWQoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbc2Nyb2xsXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2hlYWRlclJlZn1cclxuICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXIgJHtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgeyBmaXhlZDogaXNIZWFkZXJGaXhlZCB9LFxyXG4gICAgICAgICAgcHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgKX1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxJbWFnZXMgZnJvbSBcIi4vZWxlbWVudHMvUHJvZHVjdERldGFpbEltYWdlc1wiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbENvbnRlbnQgZnJvbSBcIi4vZWxlbWVudHMvUHJvZHVjdERldGFpbENvbnRlbnRcIjtcclxuaW1wb3J0IEZldGNoRGF0YUhhbmRsZSBmcm9tIFwiLi4vLi4vb3RoZXIvRmV0Y2hEYXRhSGFuZGxlXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxUYWIgZnJvbSBcIi4vZWxlbWVudHMvUHJvZHVjdERldGFpbFRhYlwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdERldGFpbExheW91dCh7IGRhdGEsIHR5cGUsIGhpZGVUYWIsIHN0eWxlIH0pIHtcclxuICBpZiAodHlwZSA9PT0gXCJmbHVpZFwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCIgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICA8Um93IGd1dHRlcj17MzB9PlxyXG4gICAgICAgICAgPENvbCBtZD17MTB9PlxyXG4gICAgICAgICAgICA8UHJvZHVjdERldGFpbEltYWdlcyB0eXBlPVwiY29sdW1uXCIgaW1hZ2VzPXtkYXRhLmltYWdlc30gLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17MTR9PlxyXG4gICAgICAgICAgICA8UHJvZHVjdERldGFpbENvbnRlbnQgdHlwZT1cImZsdWlkXCIgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17MjR9PlxyXG4gICAgICAgICAgICB7IWhpZGVUYWIgJiYgKFxyXG4gICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsVGFiXHJcbiAgICAgICAgICAgICAgICBmdWxsRGVzY3JpcHRpb249e2RhdGEuZnVsbERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNhdGlvbnM9e2RhdGEuc3BlY2lmaWNhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICByZXZpZXdzPXtkYXRhLnJldmlld3N9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCIgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPFJvdyBndXR0ZXI9ezMwfT5cclxuICAgICAgICA8Q29sIG1kPXsxMn0+XHJcbiAgICAgICAgICA8UHJvZHVjdERldGFpbEltYWdlcyBpbWFnZXM9e2RhdGEuaW1hZ2VzfSAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezEyfT5cclxuICAgICAgICAgIDxQcm9kdWN0RGV0YWlsQ29udGVudCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MjR9PlxyXG4gICAgICAgICAgeyFoaWRlVGFiICYmIChcclxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxUYWJcclxuICAgICAgICAgICAgICBmdWxsRGVzY3JpcHRpb249e2RhdGEuZnVsbERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHNwZWNpZmljYXRpb25zPXtkYXRhLnNwZWNpZmljYXRpb25zfVxyXG4gICAgICAgICAgICAgIHJldmlld3M9e2RhdGEucmV2aWV3c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsTGF5b3V0KTtcclxuIiwiaW1wb3J0IHsgQnV0dG9uLCBDb2wsIFJhdGUsIFJvdywgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eSxcclxuICBjaGVja1Byb2R1Y3RJbldpc2hsaXN0LFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XHJcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gXCIuLi8uLi8uLi9vdGhlci9RdWFudGl0eVNlbGVjdG9yXCI7XHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcclxuaW1wb3J0IHsgb25BZGRQcm9kdWN0VG9DYXJ0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9jYXJ0U2VydmljZXNcIjtcclxuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkVG9Db21wYXJlLFxyXG4gIHJlbW92ZUZyb21Db21wYXJlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsQ29udGVudCh7IGRhdGEsIHR5cGUgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbY3VycmVudFF1YW50aXR5LCBzZXRDdXJyZW50UXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2FkZFRvQ2FydExvYWRpbmcsIHNldEFkZFRvQ2FydExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG4gIGNvbnN0IGNvbXBhcmVTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tcGFyZVJlZHVjZXIpO1xyXG4gIGNvbnN0IHByb2R1Y3RJbkNvbXBhcmUgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KGNvbXBhcmVTdGF0ZSwgZGF0YS5pZCk7XHJcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9XHJcbiAgICBkYXRhLnF1YW50aXR5IC0gY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5KGNhcnRTdGF0ZS5kYXRhLCBkYXRhLmlkKTtcclxuICBjb25zb2xlLmxvZyhhdmFpYWJsZVF1YW50aXR5KTtcclxuICBjb25zdCBvbkFkZFRvQ2FydCA9IChwcm9kdWN0LCBxdWFudGl0eSkgPT4ge1xyXG4gICAgaWYgKGFkZFRvQ2FydExvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0QWRkVG9DYXJ0TG9hZGluZyh0cnVlKTtcclxuICAgIG9uQWRkUHJvZHVjdFRvQ2FydCh7XHJcbiAgICAgIHByb2R1Y3QsXHJcbiAgICAgIHF1YW50aXR5LFxyXG4gICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRXJyb3I6IChtZXMsIGVycikgPT4ge1xyXG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkFkZFRvQ29tcGFyZSA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdEluQ29tcGFyZSkge1xyXG4gICAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ29tcGFyZShwcm9kdWN0LmlkKSk7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjb21wYXJlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goYWRkVG9Db21wYXJlKHByb2R1Y3QpKTtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjb21wYXJlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaWYgKHR5cGUgPT09IFwiZmx1aWRcIikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50IC13aWRlXCI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IHhsPXsxNn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19uYW1lXCI+e2RhdGEubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkXHJcbiAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jb1xyXG4gICAgICAgICAgICAgICAgICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkXHJcbiAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYVxyXG4gICAgICAgICAgICAgICAgICBxdWkgb2ZmaWNpYSBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbVxyXG4gICAgICAgICAgICAgICAgICBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZVxyXG4gICAgICAgICAgICAgICAgICBpcHNhIHF1YWUgYWIgaWxsbyBpbnZlbnRvci5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSBxdWlhIHZvbHVwdGFzIHNpdCBhc3Blcm5hdHVyIGF1dFxyXG4gICAgICAgICAgICAgICAgICBvZGl0IGF1dCBmdWdpdCwgc2VkIHF1aWEgY29uc2VxdXVudHVyIG1hZ25pIGRvbG9yZXMgZW9zIHF1aVxyXG4gICAgICAgICAgICAgICAgICByYXRpb25lIHZvbHVwdGF0ZW1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TS1U6PC9zcGFuPiBBMTM1OVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcmllczo8L3NwYW4+IEZhc3Rmb29kXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5UYWc6PC9zcGFuPiBGb29kLCBPcmdhbmljXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19zaGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PkNoaWEgc+G6uzo8L2g1PlxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSB4bD17OH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2RlbGl2ZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBHaWFvIGjDoG5nIG1p4buFbiBwaMOtXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlLWRpc2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYXRlIGRlZmF1bHRWYWx1ZT17ZGF0YS5yYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudFF1YW50aXR5KHZhbCl9XHJcbiAgICAgICAgICAgICAgICBtYXg9e2F2YWlhYmxlUXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17YWRkVG9DYXJ0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSwgY3VycmVudFF1YW50aXR5KX1cclxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjb21wYXJlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fYmVuZWZpdHNcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5TYXRpc2ZhY3Rpb24gMTAwJSBHdWFyYW50ZWVkPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5GcmVlIHNoaXBwaW5nIG9uIG9yZGVycyBvdmVyICQ5OTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+MTQgZGF5IGVhc3kgUmV0dXJuPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRcIj5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZVwiPntkYXRhLmNhdGVnb3J5fTwvaDU+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19uYW1lXCI+e2RhdGEubmFtZX08L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZXNjcmlwdGlvblwiIHN0eWxlPXt7d2hpdGVTcGFjZTpcInByZVwifX0+XHJcbiAgICAgICAge2RhdGEuc2hvcnREZXNjcmlwdGlvbn1cclxuICAgICAgICB7LyogQ2hhbmdlIHRvIHtkYXRhLmRlc2NyaXB0aW9ufSAqL31cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2RlbGl2ZXJ5XCI+R2lhbyBow6BuZyBtaeG7hW4gcGjDrTwvZGl2PlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2VcIj5cclxuICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZS1kaXNjb3VudFwiPlxyXG4gICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxyXG4gICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXHJcbiAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxRdWFudGl0eVNlbGVjdG9yXHJcbiAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHNldEN1cnJlbnRRdWFudGl0eSh2YWwpfVxyXG4gICAgICAgIG1heD17YXZhaWFibGVRdWFudGl0eX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19hY3Rpb25zXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgbG9hZGluZz17YWRkVG9DYXJ0TG9hZGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGRhdGEsIGN1cnJlbnRRdWFudGl0eSl9XHJcbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBUaMOqbSB2w6BvIGdp4buPIGjDoG5nXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNvIHPDoW5oXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3NoYXJlXCI+XHJcbiAgICAgICAgPGg1PkNoaWEgc+G6uzo8L2g1PlxyXG4gICAgICAgIDxTb2NpYWxJY29ucyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbENvbnRlbnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxJbWFnZXMoeyB0eXBlLCBpbWFnZXMgfSkge1xyXG4gIGNvbnN0IHNsaWRlcjFTZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgfTtcclxuICBjb25zdCBzbGlkZXIyU2V0dGluZ3MgPSB7XHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgIHZlcnRpY2FsOiB0eXBlID09PSBcImNvbHVtblwiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgLy8gcHJldkFycm93OiA8UHJldkFycm93IC8+LFxyXG4gICAgLy8gbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICB2ZXJ0aWNhbDogdHlwZSA9PT0gXCJjb2x1bW5cIiAmJiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIGNvbnN0IFtuYXYxLCBzZXROYXYxXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25hdjIsIHNldE5hdjJdID0gdXNlU3RhdGUoKTtcclxuICAvLyBpZiAodHlwZSA9PT0gXCJjb2x1bW5cIikge1xyXG4gIC8vICAgcmV0dXJuIDxoMT5Db2x1bW48L2gxPjtcclxuICAvLyB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1kZXRhaWwtaW1hZ2VzICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgXCItY29sdW1uXCI6IHR5cGUgPT09IFwiY29sdW1uXCIsXHJcbiAgICAgIH0pfWB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2VzLWJpZ1wiPlxyXG4gICAgICAgIDxTbGlkZXIgYXNOYXZGb3I9e25hdjJ9IHJlZj17KGMpID0+IHNldE5hdjEoYyl9IHsuLi5zbGlkZXIxU2V0dGluZ3N9PlxyXG4gICAgICAgICAge2ltYWdlcyAmJlxyXG4gICAgICAgICAgICBpbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGltZ30gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZXMtc21hbGxcIj5cclxuICAgICAgICA8U2xpZGVyIGFzTmF2Rm9yPXtuYXYxfSByZWY9eyhjKSA9PiBzZXROYXYyKGMpfSB7Li4uc2xpZGVyMlNldHRpbmdzfT5cclxuICAgICAgICAgIHtpbWFnZXMgJiZcclxuICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2xpZGUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpbWd9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFByb2R1Y3REZXRhaWxJbWFnZXMpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJhdGUsIFRhYnMsIEZvcm0sIElucHV0LCBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcclxuXHJcbmNvbnN0IFJldmlld0l0ZW0gPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX3Jldmlld3MtaXRlbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1pdGVtX19hdmF0YXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBkYXRhLnVzZXIuYXZhdGFyfVxyXG4gICAgICAgICAgYWx0PVwiQ3VzdG9tZXIgYXZhdGFyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSYXRlIGRlZmF1bHRWYWx1ZT17NX0gZGlzYWJsZWQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtdGFiX19yZXZpZXdzLWl0ZW1fX2NvbnRlbnRcIj5cclxuICAgICAgICA8aDU+e2RhdGEuY29tbWVudERhdGV9PC9oNT5cclxuICAgICAgICA8aDM+e2RhdGEudXNlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgPHA+e2RhdGEucmV2aWV3fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdERldGFpbFRhYih7IGZ1bGxEZXNjcmlwdGlvbiwgc3BlY2lmaWNhdGlvbnMsIHJldmlld3MgfSkge1xyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCB2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJGYWlsZWQ6XCIsIGVycm9ySW5mbyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJcIj5cclxuICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiB0eXBlPVwiY2FyZFwiPlxyXG4gICAgICAgIDxUYWJQYW5lIHRhYj1cIk3DtCB04bqjXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC10YWJfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIHtmdWxsRGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgPFRhYlBhbmUgdGFiPVwiQ2hpIHRp4bq/dFwiIGtleT1cIjJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtdGFiX19zcGVjaWZpY2F0aW9uc1wiPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+S2jhu5FpIGzGsOG7o25nPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntzcGVjaWZpY2F0aW9ucy53ZWlnaHR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5Mb+G6oWk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3NwZWNpZmljYXRpb25zLmNvbG9yfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+U2l6ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57c3BlY2lmaWNhdGlvbnMuc2l6ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgIDxUYWJQYW5lIHRhYj1cIlJldmlld3NcIiBrZXk9XCIzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3c1wiPlxyXG4gICAgICAgICAgICB7cmV2aWV3cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJldmlld0l0ZW0ga2V5PXtpbmRleH0gZGF0YT17aXRlbX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtdGFiX19yZXZpZXdzLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8aDU+xJDDoW5oIGdpw6E8L2g1PlxyXG4gICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmV2aWV3XCJcclxuICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTV9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIG5hbWUhXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiSOG7jSB0w6puXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIGVtYWlsIVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJhdGVcIiBsYWJlbD1cIkNo4bqldCBsxrDhu6NuZyBz4bqjbiBwaOG6qW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYXRlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgcGxhY2Vob2xkZXI9XCJO4buZaSBkdW5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHNoYXBlPVwicm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgxJDDoW5oIGdpw6FcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgIDwvVGFicz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbFRhYik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBmb290ZXJMaW5rcyBmcm9tIFwiLi4vLi4vZGF0YS9mb290ZXItbGlua3MuanNvblwiO1xyXG5pbXBvcnQgRm9vdGVyUXVpY2tMaW5rcyBmcm9tIFwiLi9lbGVtZW50cy9Gb290ZXJRdWlja0xpbmtzXCI7XHJcbmltcG9ydCBGb290ZXJJbmZvbWF0aW9uIGZyb20gXCIuL2VsZW1lbnRzL0Zvb3RlckluZm9tYXRpb25cIjtcclxuaW1wb3J0IEZvb3RlclN1YmNyaWJlSW5wdXQgZnJvbSBcIi4vZWxlbWVudHMvRm9vdGVyU3ViY3JpYmVJbnB1dFwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKHsgY29udGFpbmVyRmx1aWQsIGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9vdGVyIC1zdHlsZS1vbmUgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcFwiPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ9e2NvbnRhaW5lckZsdWlkfT5cclxuICAgICAgICA8Um93IGd1dHRlcj17MTV9PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezl9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9vdGVySW5mb21hdGlvbiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxNX0gbGc9ezE2fT5cclxuICAgICAgICAgICAgICA8Rm9vdGVyUXVpY2tMaW5rcyBjb2xTaXplPXt7IHNwYW46IDggfX0gLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3cgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxNH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc3ViY3JpYmVfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxwPsSQxINuZyBrw70gbmjhuq1uIGLhuqNuIHRpbiBj4bunYSBDw6AgcGjDqiBo4buvdSBjxqEgVmnhu4d0IMSR4buDIGPhuq1wIG5o4bqtdCBuaOG7r25nIHPhuqNuIHBo4bqpbSBt4bubaSw8YnIgLz4gbmjhuq1uIHRow7RuZyB0aW4gxrB1IMSRw6NpIMSR4bq3YyBiaeG7h3QgdsOgIHRow7RuZyB0aW4gZ2nhuqNtIGdpw6Ega2jDoWMuIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTB9PlxyXG4gICAgICAgICAgICAgIDxGb290ZXJTdWJjcmliZUlucHV0IHVybD1cImh0dHBzOi8vanN0ZXIudXM3Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PWVkNDBjMDA4NGEwYzViYTMxYjMzNjVkNjUmaWQ9ZWM2ZjMyYmY1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b21cIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxwPkNvcHlyaWdodCDCqSAyMDIzIE9yZ2FuaWMgLSBWaWV0IENvZmZlZS4gUG93ZXJlZCBieSBUYWthdGVjaDwvcD5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvZm9vdGVyL3BheW1lbnQucG5nXCJ9XHJcbiAgICAgICAgICAgICAgYWx0PVwiUGF5bWVudCBtZXRob2RzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlckluZm9tYXRpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWluZm9cIj5cclxuICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290ZXItaW5mb19fbG9nb1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgIGFsdD1cIk9nYW1pIExvZ29cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT7EkOG7i2EgY2jhu4k6IEvhu7MgLSBUcmFuZyBUaMO0biA1IDxici8+WMOjIELDrG5oIEjDsmEsIEh1eeG7h24gS3LDtG5nIEFuYSw8YnIvPlThu4luaCDEkMSDayBMxINrPC9saT5cclxuICAgICAgICA8bGk+UGhvbmU6IDA5NzQgMDAxIDY3MTwvbGk+XHJcbiAgICAgICAgPGxpPkZhY2Vib29rOiBBbmggS2jGsMahbmc8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8U29jaWFsSWNvbnMgdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cImNpcmNsZVwiIGNsYXNzTmFtZT1cIi1idG4tbGlnaHRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IGZvb3RlckxpbmtzIGZyb20gXCIuLi8uLi8uLi9kYXRhL2Zvb3Rlci1saW5rcy5qc29uXCI7XHJcblxyXG5mdW5jdGlvbiBGb290ZXJRdWlja0xpbmtzKHsgY29sU2l6ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtzXCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsxMH0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICB7Zm9vdGVyTGlua3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENvbCBrZXk9e2luZGV4fSB7Li4uY29sU2l6ZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtzX19ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxoNT57aXRlbS50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1zLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBsaW5rLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+IHtsaW5rLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3RlclF1aWNrTGlua3MpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgQ3VzdG9tRm9ybSA9IFJlYWN0Lm1lbW8oKHsgc3RhdHVzLCBtZXNzYWdlLCBvblZhbGlkYXRlZCB9KSA9PiB7XHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzczpcIiwgdmFsdWUpO1xyXG4gICAgdmFsdWUgJiZcclxuICAgICAgb25WYWxpZGF0ZWQoe1xyXG4gICAgICAgIEVNQUlMOiB2YWx1ZS5lbWFpbCxcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19mb3JtXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5vU3R5bGU9e3RydWV9XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsIVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBFLW1haWwhXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5o4bqtcCBlbWFpbCwgbmjhuq1uIMawdSDEkcOjaVwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBub1N0eWxlPXt0cnVlfT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICDEkMSCTkcgS8OdXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICB7c3RhdHVzID09PSBcInNlbmRpbmdcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5zZW5kaW5nLi4uPC9kaXY+fVxyXG4gICAgICB7c3RhdHVzID09PSBcImVycm9yXCIgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7c3RhdHVzID09PSBcInN1Y2Nlc3NcIiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fVxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZXNzYWdlIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyU3ViY3JpYmVJbnB1dCh7IHVybCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWlsY2hpbXBTdWJzY3JpYmVcclxuICAgICAgdXJsPXt1cmx9XHJcbiAgICAgIHJlbmRlcj17KHsgc3Vic2NyaWJlLCBzdGF0dXMsIG1lc3NhZ2UgfSkgPT4gKFxyXG4gICAgICAgIDxDdXN0b21Gb3JtXHJcbiAgICAgICAgICBzdGF0dXM9e3N0YXR1c31cclxuICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICBvblZhbGlkYXRlZD17KGZvcm1EYXRhKSA9PiBzdWJzY3JpYmUoZm9ybURhdGEpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9wTmF2T25lIGZyb20gXCIuL3RvcC1uYXYvVG9wTmF2T25lXCI7XHJcbmltcG9ydCBNZW51T25lIGZyb20gXCIuL21lbnUvTWVudU9uZVwiO1xyXG5pbXBvcnQgRnVuY3Rpb25NZW51T25lIGZyb20gXCIuL2Z1bmN0aW9uLW1lbnUvRnVuY3Rpb25NZW51T25lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJPbmUoeyBhY3RpdmVIZWFkZXJDb2xsYXBzZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUb3BOYXZPbmUgLz5cclxuICAgICAgPE1lbnVPbmUgLz5cclxuICAgICAgPEZ1bmN0aW9uTWVudU9uZSBhY3RpdmVIZWFkZXJDb2xsYXBzZT17YWN0aXZlSGVhZGVyQ29sbGFwc2V9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxubGV0IGNhdGVnb3JpZXMgPSBbXHJcbiAgeyBuYW1lOiBcIkZyZXNoIE1lYXRcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcclxuICB7IG5hbWU6IFwiVmVnZXRhYmxlc1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxyXG4gIHsgbmFtZTogXCJGcnVpdCAmIE51dCBHaWZ0c1wiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVzaCBCZXJyaWVzXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXHJcbiAgeyBuYW1lOiBcIk9jZWFuIEZvb2RzXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXHJcbiAgeyBuYW1lOiBcIkJ1dHRlciAmIEVnZ3NcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcclxuICB7IG5hbWU6IFwiRmFzdGZvb2RcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcclxuICB7IG5hbWU6IFwiRnJlc2ggT25pb25cIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcclxuICB7IG5hbWU6IFwiUGFwYXlheWEgJiBDcmlzcHNcIiwgaHJlZjogXCIvc2hvcC9zaG9wLTMtY29sdW1uXCIgfSxcclxuICB7IG5hbWU6IFwiT2F0bWVhbFwiLCBocmVmOiBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIiB9LFxyXG4gIHsgbmFtZTogXCJGcmVzaCBCYW5hbmFzXCIsIGhyZWY6IFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yeUNvbGFwcHNlKHsgYWN0aXZlIH0pIHtcclxuICBjb25zdCB7IFBhbmVsIH0gPSBDb2xsYXBzZTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1jb2xsYXBzZVwiPlxyXG4gICAgICA8Q29sbGFwc2VcclxuICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT17YWN0aXZlID8gXCIxXCIgOiBudWxsfVxyXG4gICAgICAgIGV4cGFuZEljb249eyh7IGlzQWN0aXZlIH0pID0+IChcclxuICAgICAgICAgIDxEb3duT3V0bGluZWQgcm90YXRlPXtpc0FjdGl2ZSA/IC0xODAgOiAwfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgZXhwYW5kSWNvblBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFBhbmVsXHJcbiAgICAgICAgICBoZWFkZXI9XCJDw6AgcGjDqiDEkcOzbmcgZ8OzaVwiXHJcbiAgICAgICAgICBrZXk9XCIxXCJcclxuICAgICAgICAgIGV4dHJhPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtYmFyc1wiIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9QYW5lbD5cclxuICAgICAgPC9Db2xsYXBzZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2F0ZWdvcnlDb2xhcHBzZSk7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVUb3RhbFByaWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIEZ1bmN0aW9uSXRlbXMoeyBoaWRlVG90YWwsIGhpZGVXaXNobGlzdCB9KSB7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY3Rpb24taXRlbXNcIj5cclxuICAgICAgeyFoaWRlV2lzaGxpc3QgJiYgKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3dpc2hsaXN0XCJ9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZnVuY3Rpb24taXRlbXMtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2hlYXJ0X2FsdFwiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2FydFwifT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJmdW5jdGlvbi1pdGVtcy1pdGVtXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2JhZ19hbHRcIiAvPlxyXG5cclxuICAgICAgICAgIHshaGlkZVRvdGFsICYmXHJcbiAgICAgICAgICAgIChjYXJ0U3RhdGUuZGF0YSA/IChcclxuICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0Q3VycmVuY3koY2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUuZGF0YSkpfTwvc3Bhbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0Q3VycmVuY3koMCl9PC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRnVuY3Rpb25JdGVtcyk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IE1vYmlsZU5hdmlnYXRvciBmcm9tIFwiLi9Nb2JpbGVOYXZpZ2F0b3JcIjtcclxuXHJcbmZ1bmN0aW9uIE1vYmlsZU1lbnVPcGVuZXIoKSB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uU2hvd0RyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkNsb3NlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgb25DbGljaz17b25TaG93RHJhd2VyfSBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1vcGVuZXJcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgdGl0bGU9XCJDbG9zZVwiXHJcbiAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZURyYXdlcn1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgIHdpZHRoPXszMjB9XHJcbiAgICAgID5cclxuICAgICAgICA8TW9iaWxlTmF2aWdhdG9yIC8+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhNb2JpbGVNZW51T3BlbmVyKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IG5hdmlnYXRvckRhdGEgZnJvbSBcIi4uLy4uLy4uL2RhdGEvbmF2aWdhdG9yLmpzb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XHJcblxyXG5mdW5jdGlvbiBNb2JpbGVOYXZpZ2F0b3IoKSB7XHJcbiAgY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwibWFpbFwiKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50OiBlLmtleSB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlXCI+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtbmF2aWdhdG9yXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cclxuICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxTdWJNZW51IGtleT1cImhvbWVwYWdlXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuSE9NRS50aXRsZX0+XHJcbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5IT01FLnN1Yk1lbnUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgIDxhPiB7aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuU0hPUC50aXRsZX0+XHJcbiAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wIGxheW91dFwiIHRpdGxlPVwiTGF5b3V0IHNob3BcIj5cclxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmxheW91dC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wIGRldGFpbFwiIHRpdGxlPVwiRGV0YWlsIHNob3BcIj5cclxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmRldGFpbC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzaG9wIHBhZ2VzXCIgdGl0bGU9XCJQYWdlcyBzaG9wXCI+XHJcbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5wYWdlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDxTdWJNZW51IGtleT1cInBhZ2VzXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuUEFHRVMudGl0bGV9PlxyXG4gICAgICAgICAge25hdmlnYXRvckRhdGEuUEFHRVMuc3ViTWVudS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiYWxpcGF5XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5BQk9VVC5ocmVmfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hbnQuZGVzaWduXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge25hdmlnYXRvckRhdGEuQUJPVVQudGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLWZ1bmN0aW9uc1wiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9sb2dpblwifT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLWZ1bmN0aW9uc19fbG9naW5cIj5Mb2dpbiAvIFJlZ2lzdGVyPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8U29jaWFsSWNvbnMgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1vYmlsZU5hdmlnYXRvcik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBuYXZpZ2F0b3JEYXRhIGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmlnYXRvci5qc29uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRvcigpIHtcclxuICBjb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgXCIsIGUpO1xyXG4gICAgc2V0Q3VycmVudChlLmtleSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e25hdmlnYXRvckRhdGEuSE9NRS5ocmVmfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5IT01FLnRpdGxlfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cclxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5TSE9QLmhyZWZ9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLlNIT1AudGl0bGV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51XCI+XHJcbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkJMT0cuaHJlZn0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuQkxPRy50aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuU0FMRS5ocmVmfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5TQUxFLnRpdGxlfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5DT05UQUNULmhyZWZ9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkNPTlRBQ1QudGl0bGV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkFCT1VULmhyZWZ9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkFCT1VULnRpdGxlfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTmF2aWdhdG9yKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbGVjdCwgQXV0b0NvbXBsZXRlLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuLi8uLi8uLi9kYXRhL2NhdGVnb3JpZXMuanNvblwiO1xyXG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91c2VEZWJvdW5kXCI7XHJcbmltcG9ydCB7IGZldGNoU2VhcmNoZWRQcm9kdWN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBlbnRlckJ1dHRvbiA9IFwiU2VhcmNoXCIsIGhpZGVTZWxlY3QgfSkge1xyXG4gIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtjdXJyZW50U2VhcmNoLCBzZXRDdXJyZW50U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50Q2F0ZWdvcnksIHNldEN1cnJlbnRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBkZWJvdW5kVmFsdWUgPSB1c2VEZWJvdW5jZShjdXJyZW50U2VhcmNoLCAzMDApO1xyXG4gIGNvbnN0IHNob3BTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG4gIGNvbnN0IHsgc2VhcmNoZWRQcm9kdWN0cyB9ID0gc2hvcFN0YXRlO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNlYXJjaCh2YWwpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TZWxlY3RPcHRpb24gPSAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0Q3VycmVudFNlYXJjaCh2YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlYXJjaCA9ICh2YWwpID0+IHtcclxuICAgIGlmICghY3VycmVudFNlYXJjaCB8fCBjdXJyZW50U2VhcmNoID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiLFxyXG4gICAgICAgIHF1ZXJ5OiB7IHE6IGN1cnJlbnRTZWFyY2ggfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvbkNob29zZUNhdGVvZ3J5ID0gKHZhbCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudENhdGVnb3J5KHZhbCk7XHJcbiAgfTtcclxuICBjb25zdCBvcHRpb25zID1cclxuICAgIHNlYXJjaGVkUHJvZHVjdHMuZGF0YS5sZW5ndGggPiAwICYmXHJcbiAgICBzZWFyY2hlZFByb2R1Y3RzLmRhdGEubWFwKChpdGVtKSA9PiAoeyB2YWx1ZTogaXRlbS5uYW1lIH0pKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3Qoe1xyXG4gICAgICAgIGlucHV0OiBjdXJyZW50U2VhcmNoLFxyXG4gICAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgICBjYXRlZ29yeTogY3VycmVudENhdGVnb3J5LFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9LCBbZGVib3VuZFZhbHVlLCBjdXJyZW50Q2F0ZWdvcnldKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgIGJhY2tmaWxsXHJcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50U2VhcmNofVxyXG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3RPcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXRWYWx1ZSwgb3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgIG9wdGlvbi52YWx1ZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpKSAhPT1cclxuICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dC5TZWFyY2hcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5o4bqtcCBz4bqjbiBwaOG6qW0gY+G6p24gdMOsbSAuLi4gXCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGVudGVyQnV0dG9uPXtlbnRlckJ1dHRvbn1cclxuICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17c2VhcmNoZWRQcm9kdWN0cy5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VhcmNoRm9ybSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlDb2xhcHBzZSBmcm9tIFwiLi4vZWxlbWVudHMvQ2F0ZWdvcnlDb2xhcHBzZVwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCIuLi9lbGVtZW50cy9TZWFyY2hGb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBGdW5jdGlvbk1lbnVPbmUoeyBhY3RpdmVIZWFkZXJDb2xsYXBzZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWZ1bmN0aW9uLW1lbnUtb25lXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jdGlvbi1tZW51LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sIHhzPXt7IHNwYW46IDI0LCBvcmRlcjogMiB9fSBtZD17eyBzcGFuOiA4LCBvcmRlcjogMSB9fSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgPENhdGVnb3J5Q29sYXBwc2UgYWN0aXZlPXthY3RpdmVIZWFkZXJDb2xsYXBzZX0gLz5cclxuICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgICAgeHM9e3sgc3BhbjogMjQsIG9yZGVyOiAxIH19XHJcbiAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogMTYsIG9yZGVyOiAyIH19XHJcbiAgICAgICAgICAgICAgbGc9ezE4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRnVuY3Rpb25NZW51T25lKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi4vZWxlbWVudHMvTmF2aWdhdG9yXCI7XHJcbmltcG9ydCBGdW5jdGlvbkl0ZW1zIGZyb20gXCIuLi9lbGVtZW50cy9GdW5jdGlvbkl0ZW1zXCI7XHJcbmltcG9ydCBNb2JpbGVNZW51T3BlbmVyIGZyb20gXCIuLi9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51T25lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgLXN0eWxlLW9uZVwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8TW9iaWxlTWVudU9wZW5lciAvPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiT2dhbWkgbG9nb1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPE5hdmlnYXRvciAvPlxyXG4gICAgICAgICAgPEZ1bmN0aW9uSXRlbXMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgZmxhZ0RhdGEgPSBbXHJcbiAgeyBuYW1lOiBcInZpZXRuYW1lc2VcIiwgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2ZsYWctdm4ucG5nXCIgfSxcclxuICB7IG5hbWU6IFwiZW5nbGlzaFwiLCBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvZmxhZy11c2EucG5nXCIgfSxcclxuICB7IG5hbWU6IFwiamFwYW5lc2VcIiwgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2ZsYWctanAucG5nXCIgfSxcclxuXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BOYXZPbmUoeyBjb250YWluZXJGbHVpZCB9KSB7XHJcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZVwiPlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPXtjb250YWluZXJGbHVpZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtb25lLWxlZnRcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBkYWtsYWtvcmdhbmljY29mZmVlQGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lLWFsdFwiIC8+XHJcbiAgICAgICAgICAgICAgICArODQgMzU0NDAzODU2XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LW9uZS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtb25lLXJpZ2h0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPFNvY2lhbEljb25zIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtb25lLXJpZ2h0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdCBkZWZhdWx0VmFsdWU9XCJ2aWV0bmFtZXNlXCIgd2lkdGg9ezEyNX0gYm9yZGVyZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgIHtmbGFnRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMyAvIDE2ICsgXCJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAgLyAxNiArIFwiZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAtMyAvIDE2ICsgXCJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSAvIDE2ICsgXCJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1vbmUtcmlnaHRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXV0aC9sb2dpblwifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEJhY2tUb3AgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IEhlYWRlck9uZSBmcm9tIFwiLi4vaGVhZGVyL0hlYWRlck9uZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9mb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCB3aXRoSGVhZGVyU2Nyb2xsIGZyb20gXCIuLi8uLi9jb21tb24vd2l0aEhlYWRlclNjcm9sbFwiO1xyXG5cclxuY29uc3QgU2Nyb2xsZWRIZWFkZXIgPSB3aXRoSGVhZGVyU2Nyb2xsKEhlYWRlck9uZSk7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXRPbmUoeyB0aXRsZSwgY2hpbGRyZW4sIGhlYWRlckNsYXNzLCBmb290ZXJDbGFzcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U2Nyb2xsZWRIZWFkZXIgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc30gLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIGNsYXNzTmFtZT17Zm9vdGVyQ2xhc3N9IC8+XHJcbiAgICAgIDxCYWNrVG9wIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKExheW91dE9uZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IGJlbmVmaXRzRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9iZW5lZml0cy5qc29uXCI7XHJcblxyXG5mdW5jdGlvbiBCZW5lZml0cyh7IGNvbnRhaW5lckZsdWlkLCBjb2x1bW4sIHRocmVlQ29sLCBzdHlsZSwgY2xhc3NOYW1lIH0pIHtcclxuICBjb25zdCByZW5kZXJDb2wgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhyZWVDb2xcclxuICAgICAgPyB7IHhzOiAyNCwgbWQ6IDggfVxyXG4gICAgICA6IGNvbHVtblxyXG4gICAgICA/IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA2LCBsZzogMjQgfVxyXG4gICAgICA6IHsgeHM6IDI0LCBtZDogNiB9O1xyXG4gIH07XHJcbiAgY29uc3QgY29sID0gcmVuZGVyQ29sKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgYmVuZWZpdHMgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSwgeyBcIi1jb2x1bW5cIjogY29sdW1uIH0pfWB9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0cy13cmFwcGVyXCI+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9ezEwfT5cclxuICAgICAgICAgIHtiZW5lZml0c0RhdGFcclxuICAgICAgICAgICAgLnNsaWNlKDAsIHRocmVlQ29sID8gMyA6IGJlbmVmaXRzRGF0YS5sZW5ndGgpXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSB7Li4ucmVuZGVyQ29sKCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtX19pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5pY29uU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkJlbmVmaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtX190aXRsZVwiPntpdGVtLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmVuZWZpdHMtaXRlbV9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQmVuZWZpdHMpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoeyBmbHVpZCwgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Zmx1aWQgPyBcImNvbnRhaW5lci1mbHVpZFwiIDogXCJjb250YWluZXJcIn0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiwgRW1wdHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gekZldGNoRGF0YUhhbmRsZSh7XHJcbiAgZGF0YSxcclxuICBlcnJvck1lc3NhZ2UgPSBcIkdldCBwcm9kdWN0cyBmYWlsLCBwbGVhc2UgdHJ5IGFnYWluXCIsXHJcbiAgZW1wdHlEZXNjcmlwdGlvbiA9IFwiTm8gcHJvZHVjdCBpbiB0aGlzIGNhdGVnb3J5XCIsXHJcbiAgcmVuZGVyRGF0YSxcclxufSkge1xyXG4gIHJldHVybiBkYXRhLmxvYWRpbmcgPyAoXHJcbiAgICA8U2tlbGV0b24gYWN0aXZlIC8+XHJcbiAgKSA6IGRhdGEuZXJyb3IgPyAoXHJcbiAgICA8aDM+e2Vycm9yTWVzc2FnZX08L2gzPlxyXG4gICkgOiBkYXRhLmRhdGEubGVuZ3RoID4gMCA/IChcclxuICAgIHJlbmRlckRhdGEgJiYgcmVuZGVyRGF0YShkYXRhLmRhdGEpXHJcbiAgKSA6IChcclxuICAgIDxFbXB0eVxyXG4gICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgZGVzY3JpcHRpb249e2VtcHR5RGVzY3JpcHRpb259XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiLi4vLi4vY29tbW9uL3VzZURlYm91bmRcIjtcclxuXHJcbmZ1bmN0aW9uIFF1YW50aXR5U2VsZWN0b3Ioe1xyXG4gIG1pbixcclxuICBtYXgsXHJcbiAgZGVmYXVsdFZhbHVlID0gMSxcclxuICBjbGFzc05hbWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb25EZWNyZWFzZSxcclxuICBvbkluY3JlYXNlLFxyXG59KSB7XHJcbiAgY29uc3QgZmlyc3RVcGRhdGUgPSB1c2VSZWYodHJ1ZSk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpO1xyXG4gIGNvbnN0IGRlYm91bmRWYWx1ZSA9IHVzZURlYm91bmNlKHZhbHVlLCAzMDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZmlyc3RVcGRhdGUuY3VycmVudCkge1xyXG4gICAgICBmaXJzdFVwZGF0ZS5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlKTtcclxuICB9LCBbZGVib3VuZFZhbHVlXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZhbHVlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgfSwgW2RlZmF1bHRWYWx1ZV0pO1xyXG4gIGNvbnN0IGRlY3JlYXNlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAobWluICYmIHZhbHVlIDw9IG1pbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodmFsdWUgPD0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBvbkRlY3JlYXNlICYmIG9uRGVjcmVhc2UoKTtcclxuICAgICAgc2V0VmFsdWUodmFsdWUgLSAxKTtcclxuICAgIH1cclxuICB9LCBbdmFsdWVdKTtcclxuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlID49IG1heCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBvbkluY3JlYXNlICYmIG9uSW5jcmVhc2UoKTtcclxuICAgIHNldFZhbHVlKHZhbHVlICsgMSk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcXVhbnRpdHktc2VsZWN0b3IgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItbnVtYmVyXCI+e3ZhbHVlfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5LXNlbGVjdG9yLWNvbnRyb2xsZXJcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwibGlua1wiXHJcbiAgICAgICAgICBkaXNhYmxlZD17dmFsdWUgPD0gbWluIHx8IHZhbHVlIDw9IDF9XHJcbiAgICAgICAgICBvbkNsaWNrPXtkZWNyZWFzZVZhbHVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIC1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgZGlzYWJsZWQ9e3ZhbHVlID49IG1heH0gb25DbGljaz17aW5jcmVhc2VWYWx1ZX0+XHJcbiAgICAgICAgICArXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhRdWFudGl0eVNlbGVjdG9yKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gU2VjdGlvblRpdGxlKHsgdGl0bGUsIGhpZGVEZWNvcmF0aW9uLCBjbGFzc05hbWUsIHN0eWxlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uLXRpdGxlICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgeyFoaWRlRGVjb3JhdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUtZGVjb3JhdGlvblwiIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWN0aW9uVGl0bGUpO1xyXG4iLCJleHBvcnQgY29uc3QgUHJldkFycm93ID0gKHsgY3VycmVudFNsaWRlLCBzbGlkZUNvdW50LCAuLi5hcnJvd1Byb3BzIH0pID0+IChcclxuICA8YSB7Li4uYXJyb3dQcm9wc30gaHJlZj1cIiNcIj5cclxuICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxyXG4gIDwvYT5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXh0QXJyb3cgPSAoeyBjdXJyZW50U2xpZGUsIHNsaWRlQ291bnQsIC4uLmFycm93UHJvcHMgfSkgPT4gKFxyXG4gIDxhIHsuLi5hcnJvd1Byb3BzfSBocmVmPVwiI1wiPlxyXG4gICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxyXG4gIDwvYT5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29jaWFsSWNvbnMoeyBjbGFzc05hbWUsIHR5cGUgPSBcImxpbmtcIiwgc2hhcGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPXtgc29jaWFsLWljb25zICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT17dHlwZX0gc2hhcGU9e3NoYXBlfSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWVudmVsb3BlXCI+PC9pPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW52aXNpb25cIj48L2k+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1waW50ZXJlc3QtcFwiPjwvaT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgbWVzc2FnZSwgUmF0ZSwgVG9vbHRpcCwgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDb3VudGRvd24sIHsgemVyb1BhZCB9IGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHsgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XHJcbmltcG9ydCB7IGZldGNoQ2FydFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBmZXRjaFdpc2hMaXN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFRvQ29tcGFyZSxcclxuICByZW1vdmVGcm9tQ29tcGFyZSxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21wYXJlQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBvbkFkZFByb2R1Y3RUb0NhcnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NhcnRTZXJ2aWNlc1wiO1xyXG5pbXBvcnQge1xyXG4gIG9uQWRkUHJvZHVjdFRvV2lzaGxpc3QsXHJcbiAgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0LFxyXG59IGZyb20gXCIuLi8uLi9jb21tb24vd2lzaGxpc3RTZXJ2aWNlc1wiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbExheW91dCBmcm9tIFwiLi4vZGV0YWlsL3Byb2R1Y3QvUHJvZHVjdERldGFpbExheW91dFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7IGRhdGEsIGNsYXNzTmFtZSwgdHlwZSwgY291bnRkb3duTGFzdCA9IDEwMDAwMDAwMCB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FkZFRvQ2FydExvYWRpbmcsIHNldEFkZFRvQ2FydExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthZGRUb1dpc2hsaXN0TG9hZGluZywgc2V0QWRkVG9XaXNobGlzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xyXG4gIGNvbnN0IHdpc2hsaXN0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndpc2hsaXN0UmVkdWNlcik7XHJcbiAgY29uc3QgY29tcGFyZVN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21wYXJlUmVkdWNlcik7XHJcbiAgY29uc3QgcHJvZHVjdEluV2lzaGxpc3QgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KHdpc2hsaXN0U3RhdGUuZGF0YSwgZGF0YS5pZCk7XHJcbiAgY29uc3QgcHJvZHVjdEluQ29tcGFyZSA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QoY29tcGFyZVN0YXRlLCBkYXRhLmlkKTtcclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBvbk1vZGFsQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQWRkVG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGlmIChhZGRUb0NhcnRMb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEFkZFRvQ2FydExvYWRpbmcodHJ1ZSk7XHJcbiAgICBvbkFkZFByb2R1Y3RUb0NhcnQoe1xyXG4gICAgICBwcm9kdWN0LFxyXG4gICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRXJyb3I6IChtZXMsIGVycikgPT4ge1xyXG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25BZGRXaXNobGlzdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBpZiAoYWRkVG9XaXNobGlzdExvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAoIXByb2R1Y3RJbldpc2hsaXN0KSB7XHJcbiAgICAgIG9uQWRkUHJvZHVjdFRvV2lzaGxpc3Qoe1xyXG4gICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byB3aXNobGlzdFwiKTtcclxuICAgICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RSZXF1ZXN0KCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XHJcbiAgICAgICAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0KHtcclxuICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIHdpc2hsaXN0XCIpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdFJlcXVlc3QoKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcclxuICAgICAgICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvbkFkZFRvQ29tcGFyZSA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdEluQ29tcGFyZSkge1xyXG4gICAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ29tcGFyZShwcm9kdWN0LmlkKSk7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjb21wYXJlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goYWRkVG9Db21wYXJlKHByb2R1Y3QpKTtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjb21wYXJlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0UmFuZG9tQXJiaXRyYXJ5ID0gKG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gIH07XHJcbiAgY29uc3QgcmVkZXJQcm9kdWN0VHlwZSA9ICh0eXBlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInRpbnlcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LXRpbnkgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtkYXRhLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtdGlueS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cclxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC10aW55LW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XHJcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXHJcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiZGFsZVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QtZGFsZSAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtaW1nXCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cclxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Q291bnRkb3duXHJcbiAgICAgICAgICAgICAgZGF0ZT17RGF0ZS5ub3coKSArIGdldFJhbmRvbUFyYml0cmFyeSgxMDAwMDAwMDAsIDE1MDAwMDAwMCl9XHJcbiAgICAgICAgICAgICAgcmVuZGVyZXI9eyh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoZGF5cyl9PC9oNj4gPHNwYW4+ZGF5czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGhvdXJzKX08L2g2PiA8c3Bhbj5ocjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKG1pbnV0ZXMpfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoc2Vjb25kcyl9PC9oNj4gPHNwYW4+c2VjPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtdHlwZVwiPntkYXRhLmNhdGVnb3J5fTwvaDU+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cclxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XHJcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXHJcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiVGjDqm0gdsOgbyB5w6p1IHRow61jaFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFdpc2hsaXN0KGRhdGEpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluV2lzaGxpc3QsXHJcbiAgICAgICAgICAgICAgICAgIH0pfWB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvV2lzaGxpc3RMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlRow6ptIHbDoG8gZ2nhu48gaMOgbmdcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0TG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtc2hvcHBpbmctYmFnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiU28gc8OhbmhcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtcmFuZG9tXCIgLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlhlbSBuaGFuaFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWV5ZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcImxpc3RcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtkYXRhLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb3ZlckltYWdlfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3Nob3dNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICBYZW0gbmhhbmhcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxyXG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LXJhdGVcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5yYXRlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuc2hvcnREZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAge2RhdGEucXVhbnRpdHkgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtYXZhaWxhYmlsaXR5IC1pbnN0b2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIFPhu5EgbMaw4bujbmc6IDxzcGFuPiB7ZGF0YS5xdWFudGl0eX0gY8OybiBow6BuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LWF2YWlsYWJpbGl0eSAtb3V0c3RvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgU+G7kSBsxrDhu6NuZzogPHNwYW4+IGjhur90IGjDoG5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVsaXZlcnlcIj5cclxuICAgICAgICAgICAgICAgIEdpYW8gaMOgbmcgbWnhu4VuIHBow61cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2UtZGlzY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGRhdGEpfVxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXthZGRUb0NhcnRMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVGjDqm0gdsOgbyBnaeG7jyBow6BuZ1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9Db21wYXJlKGRhdGEpfVxyXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTbyBzw6FuaFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0ICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nXCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cclxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9e2RhdGEubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZVwiPntkYXRhLmNhdGVnb3J5fTwvaDU+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cclxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCIgdGl0bGU9XCJQdXJlIFBpbmVhcHBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcclxuICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcclxuICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cclxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiVGjDqm0gdsOgbyB5w6p1IHRow61jaFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFdpc2hsaXN0KGRhdGEpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluV2lzaGxpc3QsXHJcbiAgICAgICAgICAgICAgICAgIH0pfWB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvV2lzaGxpc3RMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlRow6ptIHbDoG8gZ2nhu48gaMOgbmdcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0TG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtc2hvcHBpbmctYmFnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiU28gc8OhbmhcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtcmFuZG9tXCIgLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlhlbSBuaGFuaFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWV5ZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cmVkZXJQcm9kdWN0VHlwZSh0eXBlKX1cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgIGhlYWRlcj17bnVsbH1cclxuICAgICAgICB3aWR0aD17ODYwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFByb2R1Y3REZXRhaWxMYXlvdXQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19IGhpZGVUYWIgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IENvbCwgUm93LCBFbXB0eSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3JpZXNPbmUoeyBkYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzLW9uZVwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbeyBzbTogMCwgbWQ6IDE1IH1dfT5cclxuICAgICAgICAgIHtkYXRhICYmIGRhdGEubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSB4cz17MjR9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcmllcy1vbmUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXMtb25lLWl0ZW1fX2ltYWdlIHVwLWRvd24tYW5pbS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uaW1hZ2UuYmFja2dyb3VuZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaW1hZ2UubWFpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2F0ZWdvcnkgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5xdWFudGl0eX0gSXRlbXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxFbXB0eSBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDYXRlZ29yaWVzT25lKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQ291bnRkb3duLCB7IHplcm9QYWQgfSBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi8uLi9vdGhlci9TZWN0aW9uVGl0bGVcIjtcclxuXHJcbmNvbnN0IERvd25PbmVJdGVtID0gUmVhY3QubWVtbygoeyByZXZlcnNlLCBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Bkb3ctb25lLWNvbnRlbnRfX2l0ZW0gJHtjbGFzc05hbWVzKHsgXCItcmV2ZXJzZVwiOiByZXZlcnNlIH0pfWB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb250ZW50X19pdGVtLWltYWdlXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgZGF0YS5pY29uU3JjfVxyXG4gICAgICAgICAgYWx0PVwiRGFsZSBvZiB0aGUgd2VlayBpY29uXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lLWNvbnRlbnRfX2l0ZW0tY29udGVudFwiPlxyXG4gICAgICAgIDxoNT57ZGF0YS50aXRsZX08L2g1PlxyXG4gICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIERvd09uZSh7IGRhdGEsIGNvdW50ZG93bkxhc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmVcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwixq91IMSRw6NpIHR14bqnblwiIGNsYXNzTmFtZT1cIi1jZW50ZXJcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8Um93IGFsaWduPVwiY2VudGVyXCIgZ3V0dGVyPXsxNX0+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1swLCAzMF19PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuc2xpY2UoMCwgMikubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICA8RG93bk9uZUl0ZW0gcmV2ZXJzZSBkYXRhPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17MH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdy1vbmUtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgIFwiYXNzZXRzL2ltYWdlcy9zZWN0aW9ucy9kYWxlLW9mLXdlZWsvb25lL2JlYW4tY29mZmVlXzQucG5nXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIsavdSDEkMOjaSBUdeG6p25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMCwgMzBdfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnNsaWNlKDIsIDQpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERvd25PbmVJdGVtIGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxDb3VudGRvd25cclxuICAgICAgICAgIGRhdGU9e0RhdGUubm93KCkgKyBjb3VudGRvd25MYXN0fVxyXG4gICAgICAgICAgcmVuZGVyZXI9eyh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY291bnRkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY291bnRkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGRheXMpfTwvaDY+IDxzcGFuPm5nw6B5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY291bnRkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGhvdXJzKX08L2g2PiA8c3Bhbj5naeG7nTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lLWNvdW50ZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChtaW51dGVzKX0gPC9oNj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+cGjDunQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb3VudGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoc2Vjb25kcyl9PC9oNj4gPHNwYW4+Z2nDonk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKERvd09uZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHsgTmV4dEFycm93LCBQcmV2QXJyb3cgfSBmcm9tIFwiLi4vLi4vb3RoZXIvU2xpZGVyQXJyb3dcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcblxyXG5mdW5jdGlvbiBIZXJvU2xpZGVyT25lKHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZUluZGV4LCBzZXROZXh0U2xpZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGZhZGU6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPixcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcclxuICB9O1xyXG4gIGNvbnN0IGJlZm9yZUNoYW5nZSA9IChvbGRJbmRleCwgbmV3SW5kZXgpID0+IHtcclxuICAgIHNldE5leHRTbGlkZUluZGV4KG5ld0luZGV4KTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLmhlcm8tc2xpZGVyLi1zdHlsZS1vbmUgLnNsaWNrLXNsaWRlW2RhdGEtaW5kZXg9XCIke2N1cnJlbnRTbGlkZUluZGV4fVwiXWBcclxuICAgICk7XHJcbiAgICBjb25zdCBhbmltYXRpb25JdGVtcyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW5pbWF0aW9uXVwiKTtcclxuICAgIGFuaW1hdGlvbkl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPSBpdGVtLmRhdGFzZXQuYW5pbWF0aW9uO1xyXG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGl0ZW0uZGF0YXNldC5kZWxheTtcclxuICAgICAgY29uc29sZS5sb2coYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICBpdGVtLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXkgKyBcInNcIjtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19hbmltYXRlZFwiLCBhbmltYXRpb25OYW1lKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtjdXJyZW50U2xpZGVJbmRleF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlciAtY2Fyb3VzZWwgLXN0eWxlLW9uZVwiPlxyXG4gICAgICA8U2xpZGVyXHJcbiAgICAgICAgYmVmb3JlQ2hhbmdlPXtiZWZvcmVDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3ctY2VudGVyXCJcclxuICAgICAgICB7Li4uc2V0dGluZ3N9XHJcbiAgICAgID5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNsaWNrLXNsaWRlci1pdGVtICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gY3VycmVudFNsaWRlSW5kZXgsXHJcbiAgICAgICAgICAgIH0pfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIkhlcm8gc2xpZGVyIGJhY2tncm91bmQgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIgZ3V0dGVyPXszMH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc209ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9XCIwLjhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJhbmltYXRlX196b29tSW5SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZXIvb25lLzEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJIZXJvIHNsaWRlciBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSGVyb1NsaWRlck9uZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIEludHJvZHVjdGlvbk9uZSh7IGRhdGEgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi1vbmVcIj5cclxuICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tb25lLWl0ZW1cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2l0ZW0uYmFja2dyb3VuZH0nKWAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PVwiSW50cm9kdWN0aW9uIGltYWdlXCIgLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3Nob3AtMy1jb2x1bW5cIn0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifT5cclxuICAgICAgICAgICAgICAgIE11YSBuZ2F5XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEludHJvZHVjdGlvbk9uZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcblxyXG5mdW5jdGlvbiBQYXJ0bmVyT25lKHsgc3R5bGUgfSkge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1vbmVcIiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItb25lLXdyYXBwZXJcIj5cclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheSg4KSwgKGUsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInNsaWRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgICBgL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbnMvcGFydG5lcnMvJHtpICsgMX0ucG5nYFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBhcnRuZXIgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFBhcnRuZXJPbmUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJzLCBSb3csIENvbCwgRW1wdHksIFNrZWxldG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4uLy4uL290aGVyL1NlY3Rpb25UaXRsZVwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vcHJvZHVjdC9Qcm9kdWN0XCI7XHJcbmltcG9ydCBGZXRjaERhdGFIYW5kbGUgZnJvbSBcIi4uLy4uL290aGVyL0ZldGNoRGF0YUhhbmRsZVwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdFRhYih7XHJcbiAgc3R5bGUsXHJcbiAgZGF0YSxcclxuICBjbGFzc05hbWUsXHJcbiAgb25UYWJDaGFuZ2UsXHJcbiAgcHJvZHVjdENsYXNzTmFtZSxcclxuICBoZWFkZXJDYXRlZ29yaWVzLFxyXG4gIGhlYWRlclRpdGxlLFxyXG4gIGhlYWRlckNsYXNzLFxyXG4gIHNob3dUaXRsZURlY29yYXRpb24gPSBmYWxzZSxcclxuICBoZWFkZXJUeXBlID0gXCJncmlkXCIsXHJcbiAgcHJvZHVjdENvbCxcclxufSkge1xyXG4gIGNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcclxuICBjb25zdCBvbkNob29zZUNhdGVnb3J5ID0gKGtleSkgPT4ge1xyXG4gICAgb25UYWJDaGFuZ2Uoa2V5KTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclRhYkNvbnRlbnQgPSAoKSA9PiAoXHJcbiAgICA8RmV0Y2hEYXRhSGFuZGxlXHJcbiAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgIHJlbmRlckRhdGE9eyhkYXRhKSA9PiAoXHJcbiAgICAgICAgPFJvd1xyXG4gICAgICAgICAgZ3V0dGVyPXtbXHJcbiAgICAgICAgICAgIHsgeHM6IDAsIG1kOiAxNSB9LFxyXG4gICAgICAgICAgICB7IHhzOiAwLCBtZDogMTUgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHsuLi5wcm9kdWN0Q29sfT5cclxuICAgICAgICAgICAgICA8UHJvZHVjdCBjbGFzc05hbWU9e3Byb2R1Y3RDbGFzc05hbWV9IGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICl9XHJcbiAgICAvPlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC10YWIgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtdGFiLWhlYWRlciAke1xyXG4gICAgICAgICAgaGVhZGVyVHlwZSA9PT0gXCJyb3dcIiA/IFwiLXN0eWxlLXR3b1wiIDogXCJzdHlsZS1vbmVcIlxyXG4gICAgICAgIH0gICR7Y2xhc3NOYW1lcyhoZWFkZXJDbGFzcyl9YH1cclxuICAgICAgPlxyXG4gICAgICAgIHtoZWFkZXJUeXBlID09PSBcImdyaWRcIiAmJiAoXHJcbiAgICAgICAgICA8U2VjdGlvblRpdGxlXHJcbiAgICAgICAgICAgIHRpdGxlPXtoZWFkZXJUaXRsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiLWNlbnRlclwiXHJcbiAgICAgICAgICAgIGhpZGVEZWNvcmF0aW9uPXtzaG93VGl0bGVEZWNvcmF0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICB0YWJCYXJFeHRyYUNvbnRlbnQ9e1xyXG4gICAgICAgICAgICBoZWFkZXJUeXBlID09PSBcInJvd1wiXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IChcclxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aGVhZGVyVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZWNvcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCJcclxuICAgICAgICAgIGNlbnRlcmVkPXtoZWFkZXJUeXBlID09PSBcInJvd1wiID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hvb3NlQ2F0ZWdvcnl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYlBhbmUgdGFiPVwiQWxsXCIga2V5PVwiXCI+XHJcbiAgICAgICAgICAgIHtyZW5kZXJUYWJDb250ZW50KCl9XHJcbiAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICB7aGVhZGVyQ2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj17aXRlbX0ga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICB7cmVuZGVyVGFiQ29udGVudCgpfVxyXG4gICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0VGFiKTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNob3BBY3Rpb25zIGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XHJcbmltcG9ydCBMYXlvdXRPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dE9uZVwiO1xyXG5pbXBvcnQgSGVyb1NsaWRlck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLXNsaWRlci9IZXJvU2xpZGVyT25lXCI7XHJcbmltcG9ydCBoZXJvc2xpZGVPbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2hlcm8tc2xpZGVyLmpzb25cIjtcclxuaW1wb3J0IEJlbmVmaXRzIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0JlbmVmaXRzXCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzT25lIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhdGVnb3JpZXMvQ2F0ZWdvcmllc09uZVwiO1xyXG5pbXBvcnQgY2F0ZWdvcmllc09uZURhdGEgZnJvbSBcIi4uL2RhdGEvc2VjdGlvbnMvY2F0ZWdvcmllcy5qc29uXCI7XHJcbmltcG9ydCBQcm9kdWN0VGFiIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL3Byb2R1Y3QtdGh1bWIvUHJvZHVjdFRhYlwiO1xyXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi4vZGF0YS9jYXRlZ29yaWVzLmpzb25cIjtcclxuaW1wb3J0IEludHJvZHVjdGlvbk9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lXCI7XHJcbmltcG9ydCBpbnRyb2R1Y3Rpb25PbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2ludHJvZHVjdGlvbi5qc29uXCI7XHJcbmltcG9ydCBEb3dPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvZGFsZS1vZi13ZWVrL0Rvd09uZVwiO1xyXG5pbXBvcnQgZG93T25lRGF0YSBmcm9tIFwiLi4vZGF0YS9zZWN0aW9ucy9kYWxlLW9mLXdlZWsuanNvblwiO1xyXG5pbXBvcnQgUGFydG5lck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wYXJ0bmVycy9QYXJ0bmVyT25lXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnksIHNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5XSA9IHVzZVN0YXRlKHtcclxuICAgIGRhbGVQcm9kdWN0czogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7IGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCB9ID0gc2hvcEFjdGlvbnM7XHJcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XHJcbiAgY29uc3QgeyBkYWxlUHJvZHVjdHMgfSA9IHNob3BTdGF0ZTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDggfSkpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCh7XHJcbiAgICAgICAgbGltaXQ6IDgsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmRhbGVQcm9kdWN0cyxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSwgW2N1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmRhbGVQcm9kdWN0c10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0T25lIHRpdGxlPVwib3JnYW5pY2NvZmZlZSAtIE9yZ2FuaWMgQ29mZmVlXCI+XHJcbiAgICAgIDxIZXJvU2xpZGVyT25lIGRhdGE9e2hlcm9zbGlkZU9uZURhdGEub25lfSAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCZW5lZml0c1xyXG4gICAgICAgICAgdGhyZWVDb2xcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIHpJbmRleDogMixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxDYXRlZ29yaWVzT25lIGRhdGE9e2NhdGVnb3JpZXNPbmVEYXRhLm9uZX0gLz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UHJvZHVjdFRhYlxyXG4gICAgICAgICAgZGF0YT17ZGFsZVByb2R1Y3RzfVxyXG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMTIsIHNtOiA4LCBsZzogNiB9fVxyXG4gICAgICAgICAgb25UYWJDaGFuZ2U9eyh2YWwpID0+XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5KHtcclxuICAgICAgICAgICAgICAuLi5jdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSxcclxuICAgICAgICAgICAgICBkYWxlUHJvZHVjdHM6IHZhbCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhlYWRlckNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuc2xpY2UoMCwgNSkubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpfVxyXG4gICAgICAgICAgaGVhZGVyVGl0bGU9XCJT4bqjbiBwaOG6qW0gYsOhbiBjaOG6oXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8SW50cm9kdWN0aW9uT25lIGRhdGE9e2ludHJvZHVjdGlvbk9uZURhdGEub25lfSAvPlxyXG4gICAgICA8RG93T25lIGRhdGE9e2Rvd09uZURhdGEub25lfSBjb3VudGRvd25MYXN0PXsxMDAwMDAwMDB9IC8+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFBhcnRuZXJPbmUgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0xheW91dE9uZT5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTSE9QID0ge1xyXG4gIEZFVENIX1BST0RVQ1RTOiBcIkZFVENIX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9QUk9EVUNUU19GQUlMXCIsXHJcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUxcIixcclxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU1wiLFxyXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTFwiLFxyXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMXCIsXHJcbiAgRkVUQ0hfREFMRV9QUk9EVUNUUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUxcIixcclxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTFwiLFxyXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTFwiLFxyXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQkxPRyA9IHtcclxuICBGRVRDSF9QT1NUUzogXCJGRVRDSF9QT1NUU1wiLFxyXG4gIEZFVENIX1BPU1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUE9TVFNfRkFJTFwiLFxyXG4gIEZFVENIX1BPU1RfREVUQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMXCIsXHJcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUzogXCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QT1NUX0RFVEFJTF9GQUlMXCIsXHJcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU1wiLFxyXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUxcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9QX0ZJTFRFUiA9IHtcclxuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcclxuICBTRVRfU09SVDogXCJTRVRfU09SVFwiLFxyXG4gIFNFVF9TSE9XOiBcIlNFVF9TSE9XXCIsXHJcbiAgU0VUX1ZJRVc6IFwiU0VUX1ZJRVdcIixcclxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXHJcbiAgU0VUX0NPTE9SOiBcIlNFVF9DT0xPUlwiLFxyXG4gIFNFVF9TSVpFOiBcIlNFVF9TSVpFXCIsXHJcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0FSVCA9IHtcclxuICBGRVRDSF9DQVJUOiBcIkZFVENIX0NBUlRcIixcclxuICBGRVRDSF9DQVJUX1NVQ0NFU1M6IFwiRkVUQ0hfQ0FSVF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfQ0FSVF9GQUlMOiBcIkZFVENIX0NBUlRfRkFJTFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xyXG4gIEZFVENIX1dJU0hMSVNUOiBcIkZFVENIX1dJU0hMSVNUXCIsXHJcbiAgRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUzogXCJGRVRDSF9XSVNITElTVF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfV0lTSExJU1RfRkFJTDogXCJGRVRDSF9XSVNITElTVF9GQUlMXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09NUEFSRSA9IHtcclxuICBBRERfVE9fQ09NUEFSRTogXCJBRERfVE9fQ09NUEFSRVwiLFxyXG4gIFJFTU9WRV9GUk9NX0NPTVBBUkU6IFwiUkVNT1ZFX0ZST01fQ09NUEFSRVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJMT0dfRklMVEVSID0ge1xyXG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxyXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcclxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcclxufTtcclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgY2FydEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvY2FydFwiO1xyXG5cclxuLy9HZXQgY2FydCBkYXRhXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhcnQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RmFpbCA9IChlcnIpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0KCkpO1xyXG4gICAgY2FydEFwaXNcclxuICAgICAgLmZldGNoQ2FydERhdGEoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0U3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydEZhaWwoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IENPTVBBUkUgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NvbXBhcmUgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBDT01QQVJFLkFERF9UT19DT01QQVJFLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNvbXBhcmUgPSAocHJvZHVjdElkKSA9PiAoe1xyXG4gIHR5cGU6IENPTVBBUkUuUkVNT1ZFX0ZST01fQ09NUEFSRSxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBwcm9kdWN0SWQsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCB7IFNIT1AgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0ICogYXMgc2hvcEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvc2hvcFwiO1xyXG5cclxuLy9HZXQgYWxsIHByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzID0gKCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCBwcm9kdWN0Q291bnQpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgICBwcm9kdWN0Q291bnQsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVFNfRkFJTCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBlcnIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzKCkpO1xyXG4gICAgc2hvcEFwaXNcclxuICAgICAgLmZldGNoUHJvZHVjdHNEYXRhKHF1ZXJ5KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEsIHJlcy5oZWFkZXJzW1wieC10b3RhbC1jb3VudFwiXSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNGYWlsKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy9HZXQgc2FsZSBwcm9kdWN0c1xyXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHMgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUUyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHNTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGVycixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0cygpKTtcclxuICAgIHNob3BBcGlzXHJcbiAgICAgIC5mZXRjaFNhbGVQcm9kdWN0c0RhdGEocXVlcnkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0c0ZhaWwoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vL0dldCBmZWF0dXJlZCBwcm9kdWN0c1xyXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzID0gKCkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGVycixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzKCkpO1xyXG4gICAgc2hvcEFwaXNcclxuICAgICAgLmZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEocXVlcnkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbChlcnIpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vR2V0IGJlc3Qgc2VsbGVyIHByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0cyA9ICgpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzKCkpO1xyXG4gICAgc2hvcEFwaXNcclxuICAgICAgLmZldGNoQmVzdFNlbGxlclByb2R1Y3RzRGF0YShxdWVyeSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzRmFpbChlcnIpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vR2V0IGJlc3Qgc2VsbGVyIHByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0cyA9ICgpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9EQUxFX1BST0RVQ1RTLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkYXRhLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzKCkpO1xyXG4gICAgc2hvcEFwaXNcclxuICAgICAgLmZldGNoRGFsZVByb2R1Y3RzRGF0YShxdWVyeSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzRmFpbChlcnIpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vR2V0IHByb2R1Y3QgZGV0YWlsXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWwgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUwsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxGYWlsID0gKGVycikgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbFJlcXVlc3QgPSAoc2x1ZykgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdERldGFpbCgpKTtcclxuICAgIHNob3BBcGlzXHJcbiAgICAgIC5mZXRjaFByb2R1Y3REZXRhaWxEYXRhKHNsdWcpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbChlcnIpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vR2V0IHNlYXJjaGVkIHByb2R1Y3RcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdCA9ICgpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsID0gKGVycikgPT4gKHtcclxuICB0eXBlOiBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0UmVxdWVzdCA9IChxdWVyeSkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoU2VhcmNoZWRQcm9kdWN0KCkpO1xyXG4gICAgc2hvcEFwaXNcclxuICAgICAgLmZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YShxdWVyeSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2VhcmNoZWRQcm9kdWN0U3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2VhcmNoZWRQcm9kdWN0RmFpbChlcnIpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmltcG9ydCAqIGFzIHdpc2hsaXN0QXBpcyBmcm9tIFwiLi4vLi4vYXBpcy93aXNobGlzdFwiO1xyXG5cclxuLy9HZXQgY2FydCBkYXRhXHJcbmNvbnN0IGZldGNoV2lzaExpc3QgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNULFxyXG59KTtcclxuXHJcbmNvbnN0IGZldGNoV2lzaExpc3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkYXRhLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgZmV0Y2hXaXNoTGlzdEZhaWwgPSAoZXJyKSA9PiAoe1xyXG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoV2lzaExpc3RSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3QoKSk7XHJcbiAgICB3aXNobGlzdEFwaXNcclxuICAgICAgLmZldGNoV2lzaGxpc3REYXRhKClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RTdWNjZXNzKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hXaXNoTGlzdEZhaWwoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50ZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==