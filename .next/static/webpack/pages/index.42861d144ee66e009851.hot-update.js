webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/sections/hero-slider/HeroSliderOne.js":
/*!**************************************************************!*\
  !*** ./src/components/sections/hero-slider/HeroSliderOne.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _other_SliderArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../other/SliderArrow */ "./src/components/other/SliderArrow.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");


var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\src\\components\\sections\\hero-slider\\HeroSliderOne.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function HeroSliderOne(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentSlideIndex = _useState[0],
      setNextSlideIndex = _useState[1];

  var settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_7__["PrevArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }),
    nextArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_7__["NextArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    })
  };

  var beforeChange = function beforeChange(oldIndex, newIndex) {
    setNextSlideIndex(newIndex);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var currentSlide = document.querySelector(".hero-slider.-style-one .slick-slide[data-index=\"".concat(currentSlideIndex, "\"]"));
    var animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach(function (item, index) {
      var animationName = item.dataset.animation;
      var animationDelay = item.dataset.delay;
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
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    beforeChange: beforeChange,
    className: "arrow-center"
  }, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), data.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: "slick-slider-item ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        active: index === currentSlideIndex
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "hero-slider-background",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "" + item.background,
      alt: "Hero slider background image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    })), __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "hero-slider-content-wrapper",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      align: "middle",
      gutter: 30,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "hero-slider-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("h5", {
      "data-animation": "animate__fadeInDown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 23
      }
    }, item.subTitle), __jsx("h1", {
      "data-delay": "0.2",
      "data-animation": "animate__fadeInDown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 23
      }
    }, item.title), __jsx("h3", {
      "data-delay": "0.4",
      "data-animation": "animate__fadeInDown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 23
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(item.price.main), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }, "/", item.price.unit)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      "data-delay": "0.6",
      "data-animation": "animate__fadeInDown",
      type: "primary",
      shape: "round",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "" + "/shop/shop-3-column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 27
      }
    }, "Shop now")))))))));
  })));
}

_s(HeroSliderOne, "HcnDggpsmT4tVDC2KQmsLL20Q6U=");

_c = HeroSliderOne;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(HeroSliderOne));

var _c, _c2;

$RefreshReg$(_c, "HeroSliderOne");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zbGlkZXIvSGVyb1NsaWRlck9uZS5qcyJdLCJuYW1lcyI6WyJIZXJvU2xpZGVyT25lIiwiZGF0YSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlSW5kZXgiLCJzZXROZXh0U2xpZGVJbmRleCIsInNldHRpbmdzIiwiZmFkZSIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImJlZm9yZUNoYW5nZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U2xpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltYXRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYW5pbWF0aW9uTmFtZSIsImRhdGFzZXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25EZWxheSIsImRlbGF5IiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJjbGFzc05hbWVzIiwiYWN0aXZlIiwicHJvY2VzcyIsImJhY2tncm91bmQiLCJzdWJUaXRsZSIsInRpdGxlIiwiZm9ybWF0Q3VycmVuY3kiLCJwcmljZSIsIm1haW4iLCJ1bml0IiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBaUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLENBQUQsQ0FEeEI7QUFBQSxNQUN4QkMsaUJB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Rk0sa0ZBQUFpRCw0Q0FBSyxDQUFDQyxJQUFOLENBQVdsRCxhQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDI4NjFkMTQ0ZWU2NmUwMDk4NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IE5leHRBcnJvdywgUHJldkFycm93IH0gZnJvbSBcIi4uLy4uL290aGVyL1NsaWRlckFycm93XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gSGVyb1NsaWRlck9uZSh7IGRhdGEgfSkge1xuICBjb25zdCBbY3VycmVudFNsaWRlSW5kZXgsIHNldE5leHRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBmYWRlOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPixcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXG4gIH07XG4gIGNvbnN0IGJlZm9yZUNoYW5nZSA9IChvbGRJbmRleCwgbmV3SW5kZXgpID0+IHtcbiAgICBzZXROZXh0U2xpZGVJbmRleChuZXdJbmRleCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuaGVyby1zbGlkZXIuLXN0eWxlLW9uZSAuc2xpY2stc2xpZGVbZGF0YS1pbmRleD1cIiR7Y3VycmVudFNsaWRlSW5kZXh9XCJdYFxuICAgICk7XG4gICAgY29uc3QgYW5pbWF0aW9uSXRlbXMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFuaW1hdGlvbl1cIik7XG4gICAgYW5pbWF0aW9uSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPSBpdGVtLmRhdGFzZXQuYW5pbWF0aW9uO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBpdGVtLmRhdGFzZXQuZGVsYXk7XG4gICAgICBjb25zb2xlLmxvZyhhbmltYXRpb25OYW1lKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIGFuaW1hdGlvbk5hbWUpO1xuICAgICAgaXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9IGFuaW1hdGlvbkRlbGF5ICsgXCJzXCI7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19hbmltYXRlZFwiLCBhbmltYXRpb25OYW1lKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtjdXJyZW50U2xpZGVJbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlciAtY2Fyb3VzZWwgLXN0eWxlLW9uZVwiPlxuICAgICAgPFNsaWRlclxuICAgICAgICBiZWZvcmVDaGFuZ2U9e2JlZm9yZUNoYW5nZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3ctY2VudGVyXCJcbiAgICAgICAgey4uLnNldHRpbmdzfVxuICAgICAgPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNsaWNrLXNsaWRlci1pdGVtICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgIGFjdGl2ZTogaW5kZXggPT09IGN1cnJlbnRTbGlkZUluZGV4LFxuICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJIZXJvIHNsaWRlciBiYWNrZ3JvdW5kIGltYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIgZ3V0dGVyPXszMH0+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnN1YlRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGRhdGEtZGVsYXk9XCIwLjJcIiBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtZGVsYXk9XCIwLjRcIiBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShpdGVtLnByaWNlLm1haW4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+L3tpdGVtLnByaWNlLnVuaXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT1cIjAuNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaG9wIG5vdzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEhlcm9TbGlkZXJPbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==