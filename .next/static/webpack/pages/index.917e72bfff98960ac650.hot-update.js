webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/detail/product/elements/ProductDetailContent.js":
/*!************************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailContent.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailContent; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../other/QuantitySelector */ "./src/components/other/QuantitySelector.js");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailContent.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











function ProductDetailContent(_ref) {
  _s();

  var data = _ref.data,
      type = _ref.type;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      currentQuantity = _useState[0],
      setCurrentQuantity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      addToCartLoading = _useState2[0],
      setAddToCartLoading = _useState2[1];

  var cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.cartReducer;
  });
  var compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.compareReducer;
  });
  var productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductInWishlist"])(compareState, data.id);
  var avaiableQuantity = data.quantity - Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductCartQuantity"])(cartState.data, data.id);
  console.log(avaiableQuantity);

  var onAddToCart = function onAddToCart(product, quantity) {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_8__["onAddProductToCart"])({
      product: product,
      quantity: quantity,
      onSuccess: function onSuccess(data) {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: function onError(mes, err) {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(mes);
        console.log(err);
      }
    });
  };

  var onAddToCompare = function onAddToCompare(product) {
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
      onChange: function onChange(val) {
        return setCurrentQuantity(val);
      },
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
      onClick: function onClick() {
        return onAddToCart(data, currentQuantity);
      },
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      onClick: function onClick() {
        return onAddToCompare(data);
      },
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
    onChange: function onChange(val) {
      return setCurrentQuantity(val);
    },
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
    onClick: function onClick() {
      return onAddToCart(data, currentQuantity);
    },
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: function onClick() {
      return onAddToCompare(data);
    },
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

_s(ProductDetailContent, "q/em6s9PEdRaeAH0RD79o6aIQ4U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = ProductDetailContent;

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailContent);

var _c;

$RefreshReg$(_c, "ProductDetailContent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL3Byb2R1Y3QvZWxlbWVudHMvUHJvZHVjdERldGFpbENvbnRlbnQuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbENvbnRlbnQiLCJkYXRhIiwidHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImN1cnJlbnRRdWFudGl0eSIsInNldEN1cnJlbnRRdWFudGl0eSIsImFkZFRvQ2FydExvYWRpbmciLCJzZXRBZGRUb0NhcnRMb2FkaW5nIiwiY2FydFN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwiY29tcGFyZVN0YXRlIiwiY29tcGFyZVJlZHVjZXIiLCJwcm9kdWN0SW5Db21wYXJlIiwiY2hlY2tQcm9kdWN0SW5XaXNobGlzdCIsImlkIiwiYXZhaWFibGVRdWFudGl0eSIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5IiwiY29uc29sZSIsImxvZyIsIm9uQWRkVG9DYXJ0IiwicHJvZHVjdCIsIm9uQWRkUHJvZHVjdFRvQ2FydCIsIm9uU3VjY2VzcyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZmV0Y2hDYXJ0UmVxdWVzdCIsIm9uRXJyb3IiLCJtZXMiLCJlcnIiLCJlcnJvciIsIm9uQWRkVG9Db21wYXJlIiwicmVtb3ZlRnJvbUNvbXBhcmUiLCJhZGRUb0NvbXBhcmUiLCJjYXRlZ29yeSIsIm5hbWUiLCJkaXNjb3VudCIsImZvcm1hdEN1cnJlbmN5IiwicHJpY2UiLCJyYXRlIiwidmFsIiwiY2xhc3NOYW1lcyIsImFjdGl2ZSIsInNob3J0RGVzY3JpcHRpb24iLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtlLFNBQVNBLG9CQUFULE9BQThDO0FBQUE7O0FB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ZGV4LjkxN2U3MmJmZmY5ODk2MGFjNjUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENvbCwgUmF0ZSwgUm93LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7XG4gIGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eSxcbiAgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gXCIuLi8uLi8uLi9vdGhlci9RdWFudGl0eVNlbGVjdG9yXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uLy4uLy4uL290aGVyL1NvY2lhbEljb25zXCI7XG5pbXBvcnQgeyBvbkFkZFByb2R1Y3RUb0NhcnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NhcnRTZXJ2aWNlc1wiO1xuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XG5pbXBvcnQge1xuICBhZGRUb0NvbXBhcmUsXG4gIHJlbW92ZUZyb21Db21wYXJlLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21wYXJlQWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsQ29udGVudCh7IGRhdGEsIHR5cGUgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtjdXJyZW50UXVhbnRpdHksIHNldEN1cnJlbnRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2FkZFRvQ2FydExvYWRpbmcsIHNldEFkZFRvQ2FydExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcbiAgY29uc3QgY29tcGFyZVN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21wYXJlUmVkdWNlcik7XG4gIGNvbnN0IHByb2R1Y3RJbkNvbXBhcmUgPSBjaGVja1Byb2R1Y3RJbldpc2hsaXN0KGNvbXBhcmVTdGF0ZSwgZGF0YS5pZCk7XG4gIGNvbnN0IGF2YWlhYmxlUXVhbnRpdHkgPVxuICAgIGRhdGEucXVhbnRpdHkgLSBjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkoY2FydFN0YXRlLmRhdGEsIGRhdGEuaWQpO1xuICBjb25zb2xlLmxvZyhhdmFpYWJsZVF1YW50aXR5KTtcbiAgY29uc3Qgb25BZGRUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcbiAgICBpZiAoYWRkVG9DYXJ0TG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBZGRUb0NhcnRMb2FkaW5nKHRydWUpO1xuICAgIG9uQWRkUHJvZHVjdFRvQ2FydCh7XG4gICAgICBwcm9kdWN0LFxuICAgICAgcXVhbnRpdHksXG4gICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnRcIik7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydFJlcXVlc3QoKSk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgIHNldEFkZFRvQ2FydExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBtZXNzYWdlLmVycm9yKG1lcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBvbkFkZFRvQ29tcGFyZSA9IChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKHByb2R1Y3RJbkNvbXBhcmUpIHtcbiAgICAgIGRpc3BhdGNoKHJlbW92ZUZyb21Db21wYXJlKHByb2R1Y3QuaWQpKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjb21wYXJlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChhZGRUb0NvbXBhcmUocHJvZHVjdCkpO1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjb21wYXJlXCIpO1xuICAgIH1cbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwiZmx1aWRcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQgLXdpZGVcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gc209ezI0fSB4bD17MTZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19sZWZ0XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fbmFtZVwiPntkYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZFxuICAgICAgICAgICAgICAgICAgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvXG4gICAgICAgICAgICAgICAgICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkXG4gICAgICAgICAgICAgICAgICBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGFcbiAgICAgICAgICAgICAgICAgIHF1aSBvZmZpY2lhIG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtXG4gICAgICAgICAgICAgICAgICBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZVxuICAgICAgICAgICAgICAgICAgaXBzYSBxdWFlIGFiIGlsbG8gaW52ZW50b3IuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0gcXVpYSB2b2x1cHRhcyBzaXQgYXNwZXJuYXR1ciBhdXRcbiAgICAgICAgICAgICAgICAgIG9kaXQgYXV0IGZ1Z2l0LCBzZWQgcXVpYSBjb25zZXF1dW50dXIgbWFnbmkgZG9sb3JlcyBlb3MgcXVpXG4gICAgICAgICAgICAgICAgICByYXRpb25lIHZvbHVwdGF0ZW1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fbWV0YVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNLVTo8L3NwYW4+IEExMzU5XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5DYXRlZ29yaWVzOjwvc3Bhbj4gRmFzdGZvb2RcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRhZzo8L3NwYW4+IEZvb2QsIE9yZ2FuaWNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3NoYXJlXCI+XG4gICAgICAgICAgICAgICAgPGg1PkNoaWEgc+G6uzo8L2g1PlxuICAgICAgICAgICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IHhsPXs4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZWxpdmVyeVwiPlxuICAgICAgICAgICAgICAgIEdpYW8gaMOgbmcgbWnhu4VuIHBow61cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlLWRpc2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8UmF0ZSBkZWZhdWx0VmFsdWU9e2RhdGEucmF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPFF1YW50aXR5U2VsZWN0b3JcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudFF1YW50aXR5KHZhbCl9XG4gICAgICAgICAgICAgICAgbWF4PXthdmFpYWJsZVF1YW50aXR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXthZGRUb0NhcnRMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSwgY3VycmVudFF1YW50aXR5KX1cbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjb21wYXJlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fYmVuZWZpdHNcIj5cbiAgICAgICAgICAgICAgICA8bGk+U2F0aXNmYWN0aW9uIDEwMCUgR3VhcmFudGVlZDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkZyZWUgc2hpcHBpbmcgb24gb3JkZXJzIG92ZXIgJDk5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MTQgZGF5IGVhc3kgUmV0dXJuPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX25hbWVcIj57ZGF0YS5uYW1lfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuICAgICAgICB7ZGF0YS5zaG9ydERlc2NyaXB0aW9ufVxuICAgICAgICB7LyogQ2hhbmdlIHRvIHtkYXRhLmRlc2NyaXB0aW9ufSAqL31cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVsaXZlcnlcIj5HaWFvIGjDoG5nIG1p4buFbiBwaMOtPC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2VcIj5cbiAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlLWRpc2NvdW50XCI+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaDM+XG4gICAgICA8UXVhbnRpdHlTZWxlY3RvclxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudFF1YW50aXR5KHZhbCl9XG4gICAgICAgIG1heD17YXZhaWFibGVRdWFudGl0eX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGxvYWRpbmc9e2FkZFRvQ2FydExvYWRpbmd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSwgY3VycmVudFF1YW50aXR5KX1cbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIFRow6ptIHbDoG8gZ2nhu48gaMOgbmdcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ29tcGFyZShkYXRhKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgU28gc8OhbmhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fc2hhcmVcIj5cbiAgICAgICAgPGg1PkNoaWEgc+G6uzo8L2g1PlxuICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5SZWFjdC5tZW1vKFByb2R1Y3REZXRhaWxDb250ZW50KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=