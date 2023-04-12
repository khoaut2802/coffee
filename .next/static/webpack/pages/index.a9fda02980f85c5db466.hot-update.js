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
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      "data-delay": "0.6",
      "data-animation": "animate__fadeInDown",
      type: "primary",
      shape: "round",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "" + "/shop/shop-3-column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zbGlkZXIvSGVyb1NsaWRlck9uZS5qcyJdLCJuYW1lcyI6WyJIZXJvU2xpZGVyT25lIiwiZGF0YSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlSW5kZXgiLCJzZXROZXh0U2xpZGVJbmRleCIsInNldHRpbmdzIiwiZmFkZSIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImJlZm9yZUNoYW5nZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U2xpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltYXRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYW5pbWF0aW9uTmFtZSIsImRhdGFzZXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25EZWxheSIsImRlbGF5IiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJjbGFzc05hbWVzIiwiYWN0aXZlIiwicHJvY2VzcyIsImJhY2tncm91bmQiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsQ0FBRCxDQUR4QjtBQUFBLE1BQ3hCQyxpQkFEd0I7QUFBQSxNQUNMQyxpQkFESzs7QUFFL0IsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFFBQUksRUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRSxNQUFDLDJDQUFEO0FBQ0Usb0JBQVcsS0FEYjtBQUVFLHdCQUFlLHFCQUZqQjtBQUdFLFVBQUksRUFBQyxTQUhQO0FBSUUsV0FBSyxFQUFDLE9BSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FLE1BQUMsZ0RBQUQ7QUFDRSxVQUFJLEVBQUVELEVBQUEsR0FBeUIscUJBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLENBTkYsQ0FGRixDQURGLENBREYsQ0FERixDQURGLENBWkYsQ0FEUTtBQUFBLEdBQVQsQ0FMSCxDQURGLENBREY7QUFpREQ7O0dBbkZRekMsYTs7S0FBQUEsYTtBQXFGTSxrRkFBQTJDLDRDQUFLLENBQUNDLElBQU4sQ0FBVzVDLGFBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOWZkYTAyOTgwZjg1YzVkYjQ2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHsgTmV4dEFycm93LCBQcmV2QXJyb3cgfSBmcm9tIFwiLi4vLi4vb3RoZXIvU2xpZGVyQXJyb3dcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuXG5mdW5jdGlvbiBIZXJvU2xpZGVyT25lKHsgZGF0YSB9KSB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGVJbmRleCwgc2V0TmV4dFNsaWRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGZhZGU6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+LFxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcbiAgfTtcbiAgY29uc3QgYmVmb3JlQ2hhbmdlID0gKG9sZEluZGV4LCBuZXdJbmRleCkgPT4ge1xuICAgIHNldE5leHRTbGlkZUluZGV4KG5ld0luZGV4KTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5oZXJvLXNsaWRlci4tc3R5bGUtb25lIC5zbGljay1zbGlkZVtkYXRhLWluZGV4PVwiJHtjdXJyZW50U2xpZGVJbmRleH1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBhbmltYXRpb25JdGVtcyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW5pbWF0aW9uXVwiKTtcbiAgICBhbmltYXRpb25JdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uTmFtZSA9IGl0ZW0uZGF0YXNldC5hbmltYXRpb247XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGl0ZW0uZGF0YXNldC5kZWxheTtcbiAgICAgIGNvbnNvbGUubG9nKGFuaW1hdGlvbk5hbWUpO1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fYW5pbWF0ZWRcIiwgYW5pbWF0aW9uTmFtZSk7XG4gICAgICBpdGVtLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXkgKyBcInNcIjtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVfX2FuaW1hdGVkXCIsIGFuaW1hdGlvbk5hbWUpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW2N1cnJlbnRTbGlkZUluZGV4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyIC1jYXJvdXNlbCAtc3R5bGUtb25lXCI+XG4gICAgICA8U2xpZGVyXG4gICAgICAgIGJlZm9yZUNoYW5nZT17YmVmb3JlQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9XCJhcnJvdy1jZW50ZXJcIlxuICAgICAgICB7Li4uc2V0dGluZ3N9XG4gICAgICA+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2xpY2stc2xpZGVyLWl0ZW0gJHtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gY3VycmVudFNsaWRlSW5kZXgsXG4gICAgICAgICAgICB9KX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgIGFsdD1cIkhlcm8gc2xpZGVyIGJhY2tncm91bmQgaW1hZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxSb3cgYWxpZ249XCJtaWRkbGVcIiBndXR0ZXI9ezMwfT5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc209ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT1cIjAuNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaG9wIG5vdzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEhlcm9TbGlkZXJPbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==