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
    })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zbGlkZXIvSGVyb1NsaWRlck9uZS5qcyJdLCJuYW1lcyI6WyJIZXJvU2xpZGVyT25lIiwiZGF0YSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlSW5kZXgiLCJzZXROZXh0U2xpZGVJbmRleCIsInNldHRpbmdzIiwiZmFkZSIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImJlZm9yZUNoYW5nZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U2xpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltYXRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYW5pbWF0aW9uTmFtZSIsImRhdGFzZXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25EZWxheSIsImRlbGF5IiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJjbGFzc05hbWVzIiwiYWN0aXZlIiwicHJvY2VzcyIsImJhY2tncm91bmQiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsQ0FBRCxDQUR4QjtBQUFBLE1BQ3hCQyxpQkFEd0I7QUFBQSxNQUNMQyxpQkFESzs7QUFFL0IsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFFBQUksRUFBRSxJQURTO0FBRWZDLFlBQVEsRUFBRSxJQUZLO0FBR2ZDLFNBQUssRUFBRSxHQUhRO0FBSWZDLGdCQUFZLEVBQUUsQ0FKQztBQUtmQyxrQkFBYyxFQUFFLENBTEQ7QUFNZkMsYUFBUyxFQUFFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5JO0FBT2ZDLGFBQVMsRUFBRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSSxHQUFqQjs7QUFTQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDM0NYLHFCQUFpQixDQUFDVyxRQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsNkRBQ2lDaEIsaUJBRGpDLFNBQXJCO0FBR0EsUUFBTWlCLGNBQWMsR0FBR0gsWUFBWSxDQUFDSSxnQkFBYixDQUE4QixrQkFBOUIsQ0FBdkI7QUFDQUQsa0JBQWMsQ0FBQ0UsT0FBZixDQUF1QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdEMsVUFBTUMsYUFBYSxHQUFHRixJQUFJLENBQUNHLE9BQUwsQ0FBYUMsU0FBbkM7QUFDQSxVQUFNQyxjQUFjLEdBQUdMLElBQUksQ0FBQ0csT0FBTCxDQUFhRyxLQUFwQztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sYUFBWjtBQUNBRixVQUFJLENBQUNTLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixtQkFBbkIsRUFBd0NSLGFBQXhDO0FBQ0FGLFVBQUksQ0FBQ1csS0FBTCxDQUFXTixjQUFYLEdBQTRCQSxjQUFjLEdBQUcsR0FBN0M7QUFDQUwsVUFBSSxDQUFDWSxnQkFBTCxDQUFzQixjQUF0QixFQUFzQyxZQUFZO0FBQ2hELGFBQUtILFNBQUwsQ0FBZUksTUFBZixDQUFzQixtQkFBdEIsRUFBMkNYLGFBQTNDO0FBQ0EsYUFBS1ksbUJBQUwsQ0FBeUIsY0FBekIsRUFBeUMsWUFBWTtBQUNuRDtBQUNELFNBRkQ7QUFHRCxPQUxEO0FBTUQsS0FaRDtBQWFELEdBbEJRLEVBa0JOLENBQUNsQyxpQkFBRCxDQWxCTSxDQUFUO0FBb0JBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFDRSxnQkFBWSxFQUFFVSxZQURoQjtBQUVFLGFBQVMsRUFBQztBQUZaLEtBR01SLFFBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtHSixJQUFJLENBQUNxQyxHQUFMLENBQVMsVUFBQ2YsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDUjtBQUNFLFNBQUcsRUFBRUEsS0FEUDtBQUVFLGVBQVMsOEJBQXVCZSxpREFBVSxDQUFDO0FBQ3pDQyxjQUFNLEVBQUVoQixLQUFLLEtBQUtyQjtBQUR1QixPQUFELENBQWpDLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsRUFBRXNDLEVBQUEsR0FBeUJsQixJQUFJLENBQUNtQixVQURyQztBQUVFLFNBQUcsRUFBQyw4QkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FORixDQURRO0FBQUEsR0FBVCxDQUxILENBREYsQ0FERjtBQTBCRDs7R0E1RFExQyxhOztLQUFBQSxhO0FBOERNLGtGQUFBMkMsNENBQUssQ0FBQ0MsSUFBTixDQUFXNUMsYUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY4NWZmOGVjYjlkMTA5ZjQ5OWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBOZXh0QXJyb3csIFByZXZBcnJvdyB9IGZyb20gXCIuLi8uLi9vdGhlci9TbGlkZXJBcnJvd1wiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5cbmZ1bmN0aW9uIEhlcm9TbGlkZXJPbmUoeyBkYXRhIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZUluZGV4LCBzZXROZXh0U2xpZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZmFkZTogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz4sXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxuICB9O1xuICBjb25zdCBiZWZvcmVDaGFuZ2UgPSAob2xkSW5kZXgsIG5ld0luZGV4KSA9PiB7XG4gICAgc2V0TmV4dFNsaWRlSW5kZXgobmV3SW5kZXgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmhlcm8tc2xpZGVyLi1zdHlsZS1vbmUgLnNsaWNrLXNsaWRlW2RhdGEtaW5kZXg9XCIke2N1cnJlbnRTbGlkZUluZGV4fVwiXWBcbiAgICApO1xuICAgIGNvbnN0IGFuaW1hdGlvbkl0ZW1zID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hbmltYXRpb25dXCIpO1xuICAgIGFuaW1hdGlvbkl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb25OYW1lID0gaXRlbS5kYXRhc2V0LmFuaW1hdGlvbjtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gaXRlbS5kYXRhc2V0LmRlbGF5O1xuICAgICAgY29uc29sZS5sb2coYW5pbWF0aW9uTmFtZSk7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX19hbmltYXRlZFwiLCBhbmltYXRpb25OYW1lKTtcbiAgICAgIGl0ZW0uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBhbmltYXRpb25EZWxheSArIFwic1wiO1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZV9fYW5pbWF0ZWRcIiwgYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbY3VycmVudFNsaWRlSW5kZXhdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXIgLWNhcm91c2VsIC1zdHlsZS1vbmVcIj5cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgYmVmb3JlQ2hhbmdlPXtiZWZvcmVDaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT1cImFycm93LWNlbnRlclwiXG4gICAgICAgIHsuLi5zZXR0aW5nc31cbiAgICAgID5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BzbGljay1zbGlkZXItaXRlbSAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICBhY3RpdmU6IGluZGV4ID09PSBjdXJyZW50U2xpZGVJbmRleCxcbiAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmJhY2tncm91bmR9XG4gICAgICAgICAgICAgICAgYWx0PVwiSGVybyBzbGlkZXIgYmFja2dyb3VuZCBpbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEhlcm9TbGlkZXJPbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==