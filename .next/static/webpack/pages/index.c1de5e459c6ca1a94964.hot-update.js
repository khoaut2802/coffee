webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/sections/dale-of-week/DowOne.js":
/*!********************************************************!*\
  !*** ./src/components/sections/dale-of-week/DowOne.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\src\\components\\sections\\dale-of-week\\DowOne.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var DownOneItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_c = function _c(_ref) {
  var reverse = _ref.reverse,
      data = _ref.data;
  return __jsx("div", {
    className: "dow-one-content__item ".concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "-reverse": reverse
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dow-one-content__item-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "" + data.iconSrc,
    alt: "Dale of the week icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "dow-one-content__item-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, data.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, data.description)));
});
_c2 = DownOneItem;

function DowOne(_ref2) {
  var _this2 = this;

  var data = _ref2.data,
      countdownLast = _ref2.countdownLast;
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
  }, data.slice(0, 2).map(function (item, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      key: index,
      span: 24,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, __jsx(DownOneItem, {
      reverse: true,
      data: item,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }));
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
    alt: "Dale of the week image",
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
  }, data.slice(2, 4).map(function (item, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      key: index,
      span: 24,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx(DownOneItem, {
      data: item,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }));
  }))))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: Date.now() + countdownLast,
    renderer: function renderer(_ref3) {
      var days = _ref3.days,
          hours = _ref3.hours,
          minutes = _ref3.minutes,
          seconds = _ref3.seconds;
      return __jsx("div", {
        className: "dow-one-countdown",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "dow-one-countdown-item",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(days)), " ", __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 44
        }
      }, "ng\xE0y")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(hours)), " ", __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 45
        }
      }, "gi\u1EDD")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(minutes), " "), __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 19
        }
      }, "ph\xFAt")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(seconds)), " ", __jsx("span", {
        __self: _this2,
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

_c3 = DowOne;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DowOne));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "DownOneItem$React.memo");
$RefreshReg$(_c2, "DownOneItem");
$RefreshReg$(_c3, "DowOne");
$RefreshReg$(_c4, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvZGFsZS1vZi13ZWVrL0Rvd09uZS5qcyJdLCJuYW1lcyI6WyJEb3duT25lSXRlbSIsIlJlYWN0IiwibWVtbyIsInJldmVyc2UiLCJkYXRhIiwiY2xhc3NOYW1lcyIsInByb2Nlc3MiLCJpY29uU3JjIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRvd09uZSIsImNvdW50ZG93bkxhc3QiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkRhdGUiLCJub3ciLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInplcm9QYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsSUFBTixNQUFXLGtCQUF1QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDcEQsU0FDRTtBQUNFLGFBQVMsa0NBQTJCQyxpREFBVSxDQUFDO0FBQUUsa0JBQVlGO0FBQWQsS0FBRCxDQUFyQyxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVHLEVBQUEsR0FBeUJGLElBQUksQ0FBQ0csT0FEckM7QUFFRSxPQUFHLEVBQUMsdUJBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFTRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSCxJQUFJLENBQUNJLEtBQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUosSUFBSSxDQUFDSyxXQUFULENBRkYsQ0FURixDQURGO0FBZ0JELENBakJtQixDQUFwQjtNQUFNVCxXOztBQW1CTixTQUFTVSxNQUFULFFBQXlDO0FBQUE7O0FBQUEsTUFBdkJOLElBQXVCLFNBQXZCQSxJQUF1QjtBQUFBLE1BQWpCTyxhQUFpQixTQUFqQkEsYUFBaUI7QUFDdkMsU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFDLCtCQUFwQjtBQUFrQyxhQUFTLEVBQUMsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixVQUFNLEVBQUUsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxJQUFJLENBQUNRLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDcEIsTUFBQyx3Q0FBRDtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFpQixVQUFJLEVBQUUsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsV0FBRDtBQUFhLGFBQU8sTUFBcEI7QUFBcUIsVUFBSSxFQUFFRCxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEb0I7QUFBQSxHQUFyQixDQURILENBREYsQ0FERixFQVVFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLE9BQUcsRUFDRFIsRUFBQSxHQUNBLDJEQUpKO0FBTUUsT0FBRyxFQUFDLHdCQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLEVBb0JFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixJQUFJLENBQUNRLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDcEIsTUFBQyx3Q0FBRDtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFpQixVQUFJLEVBQUUsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsV0FBRDtBQUFhLFVBQUksRUFBRUQsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRG9CO0FBQUEsR0FBckIsQ0FESCxDQURGLENBcEJGLENBREYsQ0FGRixFQW1DRSxNQUFDLHVEQUFEO0FBQ0UsUUFBSSxFQUFFRSxJQUFJLENBQUNDLEdBQUwsS0FBYU4sYUFEckI7QUFFRSxZQUFRLEVBQUUseUJBQXVDO0FBQUEsVUFBcENPLElBQW9DLFNBQXBDQSxJQUFvQztBQUFBLFVBQTlCQyxLQUE4QixTQUE5QkEsS0FBOEI7QUFBQSxVQUF2QkMsT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsVUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQy9DLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0MsK0RBQU8sQ0FBQ0osSUFBRCxDQUFaLENBREYsT0FDMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEM0IsQ0FERixFQUlFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLSSwrREFBTyxDQUFDSCxLQUFELENBQVosQ0FERixPQUM0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUQ1QixDQUpGLEVBT0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtHLCtEQUFPLENBQUNGLE9BQUQsQ0FBWixNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixDQVBGLEVBV0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtFLCtEQUFPLENBQUNELE9BQUQsQ0FBWixDQURGLE9BQzhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDlCLENBWEYsQ0FERjtBQWlCRCxLQXBCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNGLENBREYsQ0FERjtBQThERDs7TUEvRFFYLE07QUFpRU0sa0ZBQUFULDRDQUFLLENBQUNDLElBQU4sQ0FBV1EsTUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMxZGU1ZTQ1OWM2Y2ExYTk0OTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IENvdW50ZG93biwgeyB6ZXJvUGFkIH0gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4uLy4uL290aGVyL1NlY3Rpb25UaXRsZVwiO1xuXG5jb25zdCBEb3duT25lSXRlbSA9IFJlYWN0Lm1lbW8oKHsgcmV2ZXJzZSwgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZG93LW9uZS1jb250ZW50X19pdGVtICR7Y2xhc3NOYW1lcyh7IFwiLXJldmVyc2VcIjogcmV2ZXJzZSB9KX1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb250ZW50X19pdGVtLWltYWdlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBkYXRhLmljb25TcmN9XG4gICAgICAgICAgYWx0PVwiRGFsZSBvZiB0aGUgd2VlayBpY29uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lLWNvbnRlbnRfX2l0ZW0tY29udGVudFwiPlxuICAgICAgICA8aDU+e2RhdGEudGl0bGV9PC9oNT5cbiAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZnVuY3Rpb24gRG93T25lKHsgZGF0YSwgY291bnRkb3duTGFzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwixq91IMSRw6NpIHR14bqnblwiIGNsYXNzTmFtZT1cIi1jZW50ZXJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY29udGVudFwiPlxuICAgICAgICAgIDxSb3cgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXI9ezE1fT5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17OH0+XG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMCwgMzBdfT5cbiAgICAgICAgICAgICAgICB7ZGF0YS5zbGljZSgwLCAyKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICAgICAgPERvd25PbmVJdGVtIHJldmVyc2UgZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBtZD17MH0gbGc9ezh9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG93LW9uZS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgXCJhc3NldHMvaW1hZ2VzL3NlY3Rpb25zL2RhbGUtb2Ytd2Vlay9vbmUvYmVhbi1jb2ZmZWVfNC5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJEYWxlIG9mIHRoZSB3ZWVrIGltYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs4fT5cbiAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1swLCAzMF19PlxuICAgICAgICAgICAgICAgIHtkYXRhLnNsaWNlKDIsIDQpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDb2wga2V5PXtpbmRleH0gc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgICAgICA8RG93bk9uZUl0ZW0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgZGF0ZT17RGF0ZS5ub3coKSArIGNvdW50ZG93bkxhc3R9XG4gICAgICAgICAgcmVuZGVyZXI9eyh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb3VudGRvd25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChkYXlzKX08L2g2PiA8c3Bhbj5uZ8OgeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChob3Vycyl9PC9oNj4gPHNwYW4+Z2nhu508L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQobWludXRlcyl9IDwvaDY+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5waMO6dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChzZWNvbmRzKX08L2g2PiA8c3Bhbj5nacOieTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhEb3dPbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==