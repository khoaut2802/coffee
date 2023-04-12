webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/LayoutOne */ "./src/components/layout/LayoutOne.js");
/* harmony import */ var _components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/hero-slider/HeroSliderOne */ "./src/components/sections/hero-slider/HeroSliderOne.js");
/* harmony import */ var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json");
var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json", 1);
/* harmony import */ var _components_other_Benefits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/other/Benefits */ "./src/components/other/Benefits.js");
/* harmony import */ var _components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/categories/CategoriesOne */ "./src/components/sections/categories/CategoriesOne.js");
/* harmony import */ var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json");
var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json", 1);
/* harmony import */ var _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/product-thumb/ProductTab */ "./src/components/sections/product-thumb/ProductTab.js");
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _components_sections_introduction_IntroductionOne__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/introduction/IntroductionOne */ "./src/components/sections/introduction/IntroductionOne.js");
/* harmony import */ var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/sections/introduction.json */ "./src/data/sections/introduction.json");
var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/introduction.json */ "./src/data/sections/introduction.json", 1);
/* harmony import */ var _components_sections_dale_of_week_DowOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sections/dale-of-week/DowOne */ "./src/components/sections/dale-of-week/DowOne.js");
/* harmony import */ var _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data/sections/dale-of-week.json */ "./src/data/sections/dale-of-week.json");
var _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/dale-of-week.json */ "./src/data/sections/dale-of-week.json", 1);
/* harmony import */ var _components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/sections/partners/PartnerOne */ "./src/components/sections/partners/PartnerOne.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/other/Container */ "./src/components/other/Container.js");


var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\src\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    daleProducts: ""
  }),
      currentProductTabsCategory = _useState[0],
      setCurrentProductTabsCategory = _useState[1];

  var fetchDaleProductsRequest = _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__["fetchDaleProductsRequest"];
  var shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.shopReducer;
  });
  var daleProducts = shopState.daleProducts;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(fetchDaleProductsRequest({
      limit: 8
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(fetchDaleProductsRequest({
      limit: 8,
      category: currentProductTabsCategory.daleProducts
    }));
  }, [currentProductTabsCategory.daleProducts]);
  return __jsx(_components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "organiccoffee - Organic Coffee",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_components_other_Benefits__WEBPACK_IMPORTED_MODULE_7__["default"], {
    threeCol: true,
    style: {
      marginTop: -75 / 16 + "em",
      position: "relative",
      zIndex: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx(_components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: daleProducts,
    productCol: {
      xs: 12,
      sm: 8,
      lg: 6
    },
    onTabChange: function onTabChange(val) {
      return setCurrentProductTabsCategory(_objectSpread(_objectSpread({}, currentProductTabsCategory), {}, {
        daleProducts: val
      }));
    },
    headerCategories: _data_categories_json__WEBPACK_IMPORTED_MODULE_11__.slice(0, 5).map(function (item) {
      return item.name;
    }),
    headerTitle: "S\u1EA3n ph\u1EA9m b\xE1n ch\u1EA1y",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })), __jsx(_components_sections_introduction_IntroductionOne__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx(_components_sections_dale_of_week_DowOne__WEBPACK_IMPORTED_MODULE_14__["default"], {
    data: _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15__.one,
    countdownLast: 100000000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })));
}

_s(Home, "goGsQFCoaZcznEkkFKg9s6g9Vek=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJkYWxlUHJvZHVjdHMiLCJjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSIsInNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5IiwiZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0Iiwic2hvcEFjdGlvbnMiLCJzaG9wU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvcFJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJsaW1pdCIsImNhdGVnb3J5IiwiaGVyb3NsaWRlT25lRGF0YSIsIm9uZSIsIm1hcmdpblRvcCIsInBvc2l0aW9uIiwiekluZGV4IiwiY2F0ZWdvcmllc09uZURhdGEiLCJ4cyIsInNtIiwibGciLCJ2YWwiLCJjYXRlZ29yaWVzIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwibmFtZSIsImludHJvZHVjdGlvbk9uZURhdGEiLCJkb3dPbmVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUQ2QixrQkFFdUNDLHNEQUFRLENBQUM7QUFDM0VDLGdCQUFZLEVBQUU7QUFENkQsR0FBRCxDQUYvQztBQUFBLE1BRXRCQywwQkFGc0I7QUFBQSxNQUVNQyw2QkFGTjs7QUFBQSxNQUtyQkMsd0JBTHFCLEdBS1FDLG1GQUxSO0FBTTdCLE1BQU1DLFNBQVMsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxXQUFqQjtBQUFBLEdBQUQsQ0FBN0I7QUFONkIsTUFPckJSLFlBUHFCLEdBT0pLLFNBUEksQ0FPckJMLFlBUHFCO0FBUTdCUyx5REFBUyxDQUFDLFlBQU07QUFDZFosWUFBUSxDQUFDTSx3QkFBd0IsQ0FBQztBQUFFTyxXQUFLLEVBQUU7QUFBVCxLQUFELENBQXpCLENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0FELHlEQUFTLENBQUMsWUFBTTtBQUNkWixZQUFRLENBQ05NLHdCQUF3QixDQUFDO0FBQ3ZCTyxXQUFLLEVBQUUsQ0FEZ0I7QUFFdkJDLGNBQVEsRUFBRVYsMEJBQTBCLENBQUNEO0FBRmQsS0FBRCxDQURsQixDQUFSO0FBTUQsR0FQUSxFQU9OLENBQUNDLDBCQUEwQixDQUFDRCxZQUE1QixDQVBNLENBQVQ7QUFRQSxTQUNFLE1BQUMsb0VBQUQ7QUFBVyxTQUFLLEVBQUMsZ0NBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNGQUFEO0FBQWUsUUFBSSxFQUFFWSw0REFBZ0IsQ0FBQ0MsR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsQ0FBQyxFQUFELEdBQU0sRUFBTixHQUFXLElBRGpCO0FBRUxDLGNBQVEsRUFBRSxVQUZMO0FBR0xDLFlBQU0sRUFBRTtBQUhILEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFZRSxNQUFDLHFGQUFEO0FBQWUsUUFBSSxFQUFFQywyREFBaUIsQ0FBQ0osR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRkFBRDtBQUNFLFFBQUksRUFBRWIsWUFEUjtBQUVFLGNBQVUsRUFBRTtBQUFFa0IsUUFBRSxFQUFFLEVBQU47QUFBVUMsUUFBRSxFQUFFLENBQWQ7QUFBaUJDLFFBQUUsRUFBRTtBQUFyQixLQUZkO0FBR0UsZUFBVyxFQUFFLHFCQUFDQyxHQUFEO0FBQUEsYUFDWG5CLDZCQUE2QixpQ0FDeEJELDBCQUR3QjtBQUUzQkQsb0JBQVksRUFBRXFCO0FBRmEsU0FEbEI7QUFBQSxLQUhmO0FBU0Usb0JBQWdCLEVBQUVDLG1EQUFVLENBQUNDLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJDLEdBQXZCLENBQTJCLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNDLElBQWY7QUFBQSxLQUEzQixDQVRwQjtBQVVFLGVBQVcsRUFBQyxxQ0FWZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FiRixFQTJCRSxNQUFDLDBGQUFEO0FBQWlCLFFBQUksRUFBRUMsOERBQW1CLENBQUNkLEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsRUE0QkUsTUFBQyxpRkFBRDtBQUFRLFFBQUksRUFBRWUsOERBQVUsQ0FBQ2YsR0FBekI7QUFBOEIsaUJBQWEsRUFBRSxTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLEVBNkJFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBN0JGLENBREY7QUFtQ0Q7O0dBdER1QmpCLEk7VUFDTEUsdUQsRUFLQ1EsdUQ7OztLQU5JVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3YWE0OTZjN2RiMDk2MGFmYWVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0ICogYXMgc2hvcEFjdGlvbnMgZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcbmltcG9ydCBMYXlvdXRPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dE9uZVwiO1xuaW1wb3J0IEhlcm9TbGlkZXJPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zbGlkZXIvSGVyb1NsaWRlck9uZVwiO1xuaW1wb3J0IGhlcm9zbGlkZU9uZURhdGEgZnJvbSBcIi4uL2RhdGEvc2VjdGlvbnMvaGVyby1zbGlkZXIuanNvblwiO1xuaW1wb3J0IEJlbmVmaXRzIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0JlbmVmaXRzXCI7XG5pbXBvcnQgQ2F0ZWdvcmllc09uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXRlZ29yaWVzL0NhdGVnb3JpZXNPbmVcIjtcbmltcG9ydCBjYXRlZ29yaWVzT25lRGF0YSBmcm9tIFwiLi4vZGF0YS9zZWN0aW9ucy9jYXRlZ29yaWVzLmpzb25cIjtcbmltcG9ydCBQcm9kdWN0VGFiIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL3Byb2R1Y3QtdGh1bWIvUHJvZHVjdFRhYlwiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4uL2RhdGEvY2F0ZWdvcmllcy5qc29uXCI7XG5pbXBvcnQgSW50cm9kdWN0aW9uT25lIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25PbmVcIjtcbmltcG9ydCBpbnRyb2R1Y3Rpb25PbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2ludHJvZHVjdGlvbi5qc29uXCI7XG5pbXBvcnQgRG93T25lIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2RhbGUtb2Ytd2Vlay9Eb3dPbmVcIjtcbmltcG9ydCBkb3dPbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2RhbGUtb2Ytd2Vlay5qc29uXCI7XG5pbXBvcnQgUGFydG5lck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wYXJ0bmVycy9QYXJ0bmVyT25lXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSwgc2V0Q3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnldID0gdXNlU3RhdGUoe1xuICAgIGRhbGVQcm9kdWN0czogXCJcIixcbiAgfSk7XG4gIGNvbnN0IHsgZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0IH0gPSBzaG9wQWN0aW9ucztcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XG4gIGNvbnN0IHsgZGFsZVByb2R1Y3RzIH0gPSBzaG9wU3RhdGU7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDggfSkpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3Qoe1xuICAgICAgICBsaW1pdDogOCxcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmRhbGVQcm9kdWN0cyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2N1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmRhbGVQcm9kdWN0c10pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRPbmUgdGl0bGU9XCJvcmdhbmljY29mZmVlIC0gT3JnYW5pYyBDb2ZmZWVcIj5cbiAgICAgIDxIZXJvU2xpZGVyT25lIGRhdGE9e2hlcm9zbGlkZU9uZURhdGEub25lfSAvPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJlbmVmaXRzXG4gICAgICAgICAgdGhyZWVDb2xcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAtNzUgLyAxNiArIFwiZW1cIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENhdGVnb3JpZXNPbmUgZGF0YT17Y2F0ZWdvcmllc09uZURhdGEub25lfSAvPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFByb2R1Y3RUYWJcbiAgICAgICAgICBkYXRhPXtkYWxlUHJvZHVjdHN9XG4gICAgICAgICAgcHJvZHVjdENvbD17eyB4czogMTIsIHNtOiA4LCBsZzogNiB9fVxuICAgICAgICAgIG9uVGFiQ2hhbmdlPXsodmFsKSA9PlxuICAgICAgICAgICAgc2V0Q3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnkoe1xuICAgICAgICAgICAgICAuLi5jdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSxcbiAgICAgICAgICAgICAgZGFsZVByb2R1Y3RzOiB2YWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXJDYXRlZ29yaWVzPXtjYXRlZ29yaWVzLnNsaWNlKDAsIDUpLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKX1cbiAgICAgICAgICBoZWFkZXJUaXRsZT1cIlPhuqNuIHBo4bqpbSBiw6FuIGNo4bqheVwiXG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxJbnRyb2R1Y3Rpb25PbmUgZGF0YT17aW50cm9kdWN0aW9uT25lRGF0YS5vbmV9IC8+XG4gICAgICA8RG93T25lIGRhdGE9e2Rvd09uZURhdGEub25lfSBjb3VudGRvd25MYXN0PXsxMDAwMDAwMDB9IC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UGFydG5lck9uZSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXRPbmU+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9