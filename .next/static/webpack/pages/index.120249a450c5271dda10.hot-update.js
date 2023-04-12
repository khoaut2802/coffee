webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/wishlistServices */ "./src/common/wishlistServices.js");
/* harmony import */ var _detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../detail/product/ProductDetailLayout */ "./src/components/detail/product/ProductDetailLayout.js");
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\ogami-main\\ogami\\src\\components\\product\\Product.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Product(_ref) {
  _s();

  var _this = this;

  var data = _ref.data,
      className = _ref.className,
      type = _ref.type,
      _ref$countdownLast = _ref.countdownLast,
      countdownLast = _ref$countdownLast === void 0 ? 100000000 : _ref$countdownLast;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalVisible = _useState[0],
      setModalVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      addToCartLoading = _useState2[0],
      setAddToCartLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      addToWishlistLoading = _useState3[0],
      setAddToWishlistLoading = _useState3[1];

  var cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.cartReducer;
  });
  var wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.wishlistReducer;
  });
  var compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.compareReducer;
  });
  var productInWishlist = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(wishlistState.data, data.id);
  var productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(compareState, data.id);

  var showModal = function showModal() {
    setModalVisible(true);
  };

  var onModalClose = function onModalClose(e) {
    setModalVisible(false);
  };

  var onAddToCart = function onAddToCart(product) {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_12__["onAddProductToCart"])({
      product: product,
      onSuccess: function onSuccess(data) {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: function onError(mes, err) {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
      }
    });
  };

  var onAddWishlist = function onAddWishlist(product) {
    if (addToWishlistLoading) {
      return;
    }

    setAddToWishlistLoading(true);

    if (!productInWishlist) {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onAddProductToWishlist"])({
        product: product,
        onSuccess: function onSuccess(data) {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: function onError(mes, err) {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    } else {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onRemoveProductFromWishlist"])({
        productId: product.id,
        onSuccess: function onSuccess(data) {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: function onError(mes, err) {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    }
  };

  var onAddToCompare = function onAddToCompare(product) {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["addToCompare"])(product));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to compare");
    }
  };

  var getRandomArbitrary = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  var rederProductType = function rederProductType(type) {
    switch (type) {
      case "tiny":
        return __jsx("div", {
          className: "product-tiny ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-tiny-img",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + "/product/[slug]",
          as: "" + "/product/".concat(data.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-tiny-content",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + "/product/[slug]",
          as: "" + "/product/".concat(data.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-tiny-name",
          title: "Pure Pineapple",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-tiny-price",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))));

      case "dale":
        return __jsx("div", {
          className: "product-dale ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-dale-img",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + "/product/[slug]",
          as: "" + "/product/".concat(data.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 19
          }
        })))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
          date: Date.now() + getRandomArbitrary(100000000, 150000000),
          renderer: function renderer(_ref2) {
            var days = _ref2.days,
                hours = _ref2.hours,
                minutes = _ref2.minutes,
                seconds = _ref2.seconds;
            return __jsx("div", {
              className: "product-dale-countdown",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }
            }, __jsx("div", {
              className: "product-dale-countdown-item",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(days)), " ", __jsx("span", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 48
              }
            }, "days")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(hours)), " ", __jsx("span", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 49
              }
            }, "hr")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(minutes), " "), __jsx("span", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 23
              }
            }, "min")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(seconds)), " ", __jsx("span", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 51
              }
            }, "sec")));
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }
        }), __jsx("div", {
          className: "product-dale-content",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-dale-type",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + "/product/[slug]",
          as: "" + "/product/".concat(data.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-dale-name",
          title: "Pure Pineapple",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-dale-price",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-dale-select",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o y\xEAu th\xEDch",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return onAddWishlist(data);
          },
          className: "product-btn ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })),
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 23
            }
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return onAddToCart(data);
          },
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 23
            }
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "So s\xE1nh",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return onAddToCompare(data);
          },
          className: "product-btn ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })),
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 25
            }
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Xem nhanh",
          __self: _this,
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
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 25
            }
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 17
          }
        }))));

      case "list":
        return __jsx("div", {
          className: "product-list",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + "/product/[slug]",
          as: "" + "/product/".concat(data.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 19
          }
        }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          onClick: showModal,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 15
          }
        }, "Xem nhanh")), __jsx("div", {
          className: "product-list-content",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + "/product/[slug]",
          as: "" + "/product/".concat(data.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 17
          }
        }, data.name)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
          className: "product-rate",
          disabled: true,
          defaultValue: data.rate,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 15
          }
        }), __jsx("p", {
          className: "product-description",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }
        }, data.shortDescription), data.quantity > 0 ? __jsx("h5", {
          className: "product-availability -instock",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 17
          }
        }, "Availability: ", __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 33
          }
        }, " ", data.quantity, " in stock")) : __jsx("h5", {
          className: "product-availability -outstock",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 17
          }
        }, "Availability: ", __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 33
          }
        }, " Out stock"))), __jsx("div", {
          className: "product-list-actions",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "product-detail-content__delivery",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 15
          }
        }, "Giao h\xE0ng mi\u1EC5n ph\xED"), __jsx("h3", {
          className: "product-detail-content__price",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 15
          }
        }, data.discount && __jsx("del", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)), __jsx("div", {
          className: "product-detail-content__price-discount",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 17
          }
        }, __jsx("h5", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 19
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-detail-content__actions",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return onAddToCart(data);
          },
          loading: addToCartLoading,
          shape: "round",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 17
          }
        }, "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return onAddToCompare(data);
          },
          shape: "round",
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 17
          }
        }, "So s\xE1nh"))));

      default:
        return __jsx("div", {
          className: "product ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + "/product/[slug]",
          as: "" + "/product/".concat(data.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-content",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + "/product/[slug]",
          as: "" + "/product/".concat(data.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-price",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-select",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to wishlist",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return onAddWishlist(data);
          },
          className: "product-btn ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })),
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 23
            }
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return onAddToCart(data);
          },
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 23
            }
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "So s\xE1nh",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: function onClick() {
            return onAddToCompare(data);
          },
          className: "product-btn ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })),
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 25
            }
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Xem nhanh",
          __self: _this,
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
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 25
            }
          }),
          __self: _this,
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

_s(Product, "AXU9O52HVdkWiLm2T+OSY4iMHA8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Product));

var _c, _c2;

$RefreshReg$(_c, "Product");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJkYXRhIiwiY2xhc3NOYW1lIiwidHlwZSIsImNvdW50ZG93bkxhc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJhZGRUb0NhcnRMb2FkaW5nIiwic2V0QWRkVG9DYXJ0TG9hZGluZyIsImFkZFRvV2lzaGxpc3RMb2FkaW5nIiwic2V0QWRkVG9XaXNobGlzdExvYWRpbmciLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydFJlZHVjZXIiLCJ3aXNobGlzdFN0YXRlIiwid2lzaGxpc3RSZWR1Y2VyIiwiY29tcGFyZVN0YXRlIiwiY29tcGFyZVJlZHVjZXIiLCJwcm9kdWN0SW5XaXNobGlzdCIsImNoZWNrUHJvZHVjdEluV2lzaGxpc3QiLCJpZCIsInByb2R1Y3RJbkNvbXBhcmUiLCJzaG93TW9kYWwiLCJvbk1vZGFsQ2xvc2UiLCJlIiwib25BZGRUb0NhcnQiLCJwcm9kdWN0Iiwib25BZGRQcm9kdWN0VG9DYXJ0Iiwib25TdWNjZXNzIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJmZXRjaENhcnRSZXF1ZXN0Iiwib25FcnJvciIsIm1lcyIsImVyciIsImVycm9yIiwib25BZGRXaXNobGlzdCIsIm9uQWRkUHJvZHVjdFRvV2lzaGxpc3QiLCJmZXRjaFdpc2hMaXN0UmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3QiLCJwcm9kdWN0SWQiLCJvbkFkZFRvQ29tcGFyZSIsInJlbW92ZUZyb21Db21wYXJlIiwiYWRkVG9Db21wYXJlIiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwibWluIiwibWF4IiwiTWF0aCIsInJhbmRvbSIsInJlZGVyUHJvZHVjdFR5cGUiLCJjbGFzc05hbWVzIiwicHJvY2VzcyIsInNsdWciLCJuYW1lIiwiY292ZXJJbWFnZSIsImRpc2NvdW50IiwiZm9ybWF0Q3VycmVuY3kiLCJwcmljZSIsIkRhdGUiLCJub3ciLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInplcm9QYWQiLCJjYXRlZ29yeSIsImFjdGl2ZSIsInJhdGUiLCJzaG9ydERlc2NyaXB0aW9uIiwicXVhbnRpdHkiLCJtYXJnaW5Cb3R0b20iLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTs7QUFFQSxTQUFTQSxPQUFULE9BQXVFO0FBQUE7O0FBQUE7O0FBQUEsTUFBcERDLElBQW9ELFFBQXBEQSxJQUFvRDtBQUFBLE1BQTlDQyxTQUE4QyxRQUE5Q0EsU0FBOEM7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsZ0NBQTdCQyxhQUE2QjtBQUFBLE1BQTdCQSxhQUE2QixtQ0FBYixTQUFhO0FBQ3JFLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHFFLGtCQUU3QkMsc0RBQVEsQ0FBQyxLQUFELENBRnFCO0FBQUEsTUFFOURDLFlBRjhEO0FBQUEsTUFFaERDLGVBRmdEOztBQUFBLG1CQUdyQkYsc0RBQVEsQ0FBQyxLQUFELENBSGE7QUFBQSxNQUc5REcsZ0JBSDhEO0FBQUEsTUFHNUNDLG1CQUg0Qzs7QUFBQSxtQkFJYkosc0RBQVEsQ0FBQyxLQUFELENBSks7QUFBQSxNQUk5REssb0JBSjhEO0FBQUEsTUFJeENDLHVCQUp3Qzs7QUFLckUsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFdBQWpCO0FBQUEsR0FBRCxDQUE3QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxlQUFqQjtBQUFBLEdBQUQsQ0FBakM7QUFDQSxNQUFNQyxZQUFZLEdBQUdMLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ssY0FBakI7QUFBQSxHQUFELENBQWhDO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLGdGQUFzQixDQUFDTCxhQUFhLENBQUNqQixJQUFmLEVBQXFCQSxJQUFJLENBQUN1QixFQUExQixDQUFoRDtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRixnRkFBc0IsQ0FBQ0gsWUFBRCxFQUFlbkIsSUFBSSxDQUFDdUIsRUFBcEIsQ0FBL0M7O0FBQ0EsTUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QmpCLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0QsR0FGRDs7QUFHQSxNQUFNa0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCbkIsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDRCxHQUZEOztBQUdBLE1BQU1vQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFDL0IsUUFBSXBCLGdCQUFKLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBQ0RDLHVCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDQW9CLG9GQUFrQixDQUFDO0FBQ2pCRCxhQUFPLEVBQVBBLE9BRGlCO0FBRWpCRSxlQUFTLEVBQUUsbUJBQUMvQixJQUFELEVBQVU7QUFDbkJVLDJCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDQXNCLG9EQUFPLENBQUNDLE9BQVIsQ0FBZ0IsdUJBQWhCO0FBQ0E3QixnQkFBUSxDQUFDOEIsbUZBQWdCLEVBQWpCLENBQVI7QUFDRCxPQU5nQjtBQU9qQkMsYUFBTyxFQUFFLGlCQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNyQjNCLDJCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDQXNCLG9EQUFPLENBQUNNLEtBQVIsQ0FBY0YsR0FBZDtBQUNEO0FBVmdCLEtBQUQsQ0FBbEI7QUFZRCxHQWpCRDs7QUFrQkEsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDVixPQUFELEVBQWE7QUFDakMsUUFBSWxCLG9CQUFKLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBQ0RDLDJCQUF1QixDQUFDLElBQUQsQ0FBdkI7O0FBQ0EsUUFBSSxDQUFDUyxpQkFBTCxFQUF3QjtBQUN0Qm1CLDhGQUFzQixDQUFDO0FBQ3JCWCxlQUFPLEVBQVBBLE9BRHFCO0FBRXJCRSxpQkFBUyxFQUFFLG1CQUFDL0IsSUFBRCxFQUFVO0FBQ25CWSxpQ0FBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FvQixzREFBTyxDQUFDQyxPQUFSLENBQWdCLDJCQUFoQjtBQUNBN0Isa0JBQVEsQ0FBQ3FDLDRGQUFvQixFQUFyQixDQUFSO0FBQ0QsU0FOb0I7QUFPckJOLGVBQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDckJ6QixpQ0FBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FvQixzREFBTyxDQUFDTSxLQUFSLENBQWNGLEdBQWQ7QUFDQU0saUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixHQUFaO0FBQ0Q7QUFYb0IsT0FBRCxDQUF0QjtBQWFELEtBZEQsTUFjTztBQUNMTyxtR0FBMkIsQ0FBQztBQUMxQkMsaUJBQVMsRUFBRWhCLE9BQU8sQ0FBQ04sRUFETztBQUUxQlEsaUJBQVMsRUFBRSxtQkFBQy9CLElBQUQsRUFBVTtBQUNuQlksaUNBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBb0Isc0RBQU8sQ0FBQ00sS0FBUixDQUFjLCtCQUFkO0FBQ0FsQyxrQkFBUSxDQUFDcUMsNEZBQW9CLEVBQXJCLENBQVI7QUFDRCxTQU55QjtBQU8xQk4sZUFBTyxFQUFFLGlCQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNyQnpCLGlDQUF1QixDQUFDLEtBQUQsQ0FBdkI7QUFDQW9CLHNEQUFPLENBQUNNLEtBQVIsQ0FBY0YsR0FBZDtBQUNBTSxpQkFBTyxDQUFDQyxHQUFSLENBQVlOLEdBQVo7QUFDRDtBQVh5QixPQUFELENBQTNCO0FBYUQ7QUFDRixHQWxDRDs7QUFtQ0EsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDakIsT0FBRCxFQUFhO0FBQ2xDLFFBQUlMLGdCQUFKLEVBQXNCO0FBQ3BCcEIsY0FBUSxDQUFDMkMsd0ZBQWlCLENBQUNsQixPQUFPLENBQUNOLEVBQVQsQ0FBbEIsQ0FBUjtBQUNBUyxrREFBTyxDQUFDTSxLQUFSLENBQWMsOEJBQWQ7QUFDRCxLQUhELE1BR087QUFDTGxDLGNBQVEsQ0FBQzRDLG1GQUFZLENBQUNuQixPQUFELENBQWIsQ0FBUjtBQUNBRyxrREFBTyxDQUFDQyxPQUFSLENBQWdCLDBCQUFoQjtBQUNEO0FBQ0YsR0FSRDs7QUFTQSxNQUFNZ0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN2QyxXQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0QsR0FGRDs7QUFHQSxNQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNwRCxJQUFELEVBQVU7QUFDakMsWUFBUUEsSUFBUjtBQUNFLFdBQUssTUFBTDtBQUNFLGVBQ0U7QUFBSyxtQkFBUyx5QkFBa0JxRCxpREFBVSxDQUFDdEQsU0FBRCxDQUE1QixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUV1RCxFQUFBLG9CQURSO0FBRUUsWUFBRSxFQUFFQSxFQUFBLHNCQUFxQ3hELElBQUksQ0FBQ3lELElBQTFDLENBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlFO0FBQUcsZUFBSyxFQUFFekQsSUFBSSxDQUFDMEQsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxhQUFHLEVBQUUxRCxJQUFJLENBQUMyRCxVQUFmO0FBQTJCLGFBQUcsRUFBQyxlQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FKRixDQURGLENBREYsRUFXRTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUVILEVBQUEsb0JBRFI7QUFFRSxZQUFFLEVBQUVBLEVBQUEsc0JBQXFDeEQsSUFBSSxDQUFDeUQsSUFBMUMsQ0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUU7QUFBRyxtQkFBUyxFQUFDLG1CQUFiO0FBQWlDLGVBQUssRUFBQyxnQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHekQsSUFBSSxDQUFDMEQsSUFEUixDQUpGLENBREYsRUFTRTtBQUFJLG1CQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHMUQsSUFBSSxDQUFDNEQsUUFBTCxHQUNHQyxvRUFBYyxDQUFDN0QsSUFBSSxDQUFDOEQsS0FBTCxHQUFhOUQsSUFBSSxDQUFDNEQsUUFBbkIsQ0FEakIsR0FFR0Msb0VBQWMsQ0FBQzdELElBQUksQ0FBQzhELEtBQU4sQ0FIcEIsRUFJRzlELElBQUksQ0FBQzRELFFBQUwsSUFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFNQyxvRUFBYyxDQUFDN0QsSUFBSSxDQUFDOEQsS0FBTixDQUFwQixDQUpwQixDQVRGLENBWEYsQ0FERjs7QUE4QkYsV0FBSyxNQUFMO0FBQ0UsZUFDRTtBQUFLLG1CQUFTLHlCQUFrQlAsaURBQVUsQ0FBQ3RELFNBQUQsQ0FBNUIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLGdEQUFEO0FBQ0UsY0FBSSxFQUFFdUQsRUFBQSxvQkFEUjtBQUVFLFlBQUUsRUFBRUEsRUFBQSxzQkFBcUN4RCxJQUFJLENBQUN5RCxJQUExQyxDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJRTtBQUFHLGVBQUssRUFBRXpELElBQUksQ0FBQzBELElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssYUFBRyxFQUFFMUQsSUFBSSxDQUFDMkQsVUFBZjtBQUEyQixhQUFHLEVBQUMsZUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBSkYsQ0FERixDQURGLEVBWUUsTUFBQyx1REFBRDtBQUNFLGNBQUksRUFBRUksSUFBSSxDQUFDQyxHQUFMLEtBQWFmLGtCQUFrQixDQUFDLFNBQUQsRUFBWSxTQUFaLENBRHZDO0FBRUUsa0JBQVEsRUFBRSx5QkFBdUM7QUFBQSxnQkFBcENnQixJQUFvQyxTQUFwQ0EsSUFBb0M7QUFBQSxnQkFBOUJDLEtBQThCLFNBQTlCQSxLQUE4QjtBQUFBLGdCQUF2QkMsT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsZ0JBQWRDLE9BQWMsU0FBZEEsT0FBYztBQUMvQyxtQkFDRTtBQUFLLHVCQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNFO0FBQUssdUJBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFLQywrREFBTyxDQUFDSixJQUFELENBQVosQ0FERixPQUMyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUQzQixDQURGLEVBSUU7QUFBSyx1QkFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUtJLCtEQUFPLENBQUNILEtBQUQsQ0FBWixDQURGLE9BQzRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRDVCLENBSkYsRUFPRTtBQUFLLHVCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBS0csK0RBQU8sQ0FBQ0YsT0FBRCxDQUFaLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLENBUEYsRUFXRTtBQUFLLHVCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBS0UsK0RBQU8sQ0FBQ0QsT0FBRCxDQUFaLENBREYsT0FDOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEOUIsQ0FYRixDQURGO0FBaUJELFdBcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFaRixFQWtDRTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUksbUJBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW1DcEUsSUFBSSxDQUFDc0UsUUFBeEMsQ0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUVkLEVBQUEsb0JBRFI7QUFFRSxZQUFFLEVBQUVBLEVBQUEsc0JBQXFDeEQsSUFBSSxDQUFDeUQsSUFBMUMsQ0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUU7QUFBRyxtQkFBUyxFQUFDLG1CQUFiO0FBQWlDLGVBQUssRUFBQyxnQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHekQsSUFBSSxDQUFDMEQsSUFEUixDQUpGLENBRkYsRUFVRTtBQUFJLG1CQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHMUQsSUFBSSxDQUFDNEQsUUFBTCxHQUNHQyxvRUFBYyxDQUFDN0QsSUFBSSxDQUFDOEQsS0FBTCxHQUFhOUQsSUFBSSxDQUFDNEQsUUFBbkIsQ0FEakIsR0FFR0Msb0VBQWMsQ0FBQzdELElBQUksQ0FBQzhELEtBQU4sQ0FIcEIsRUFJRzlELElBQUksQ0FBQzRELFFBQUwsSUFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFNQyxvRUFBYyxDQUFDN0QsSUFBSSxDQUFDOEQsS0FBTixDQUFwQixDQUpwQixDQVZGLENBbENGLEVBbURFO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyw0Q0FBRDtBQUFTLGVBQUssRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQywyQ0FBRDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTXZCLGFBQWEsQ0FBQ3ZDLElBQUQsQ0FBbkI7QUFBQSxXQURYO0FBRUUsbUJBQVMsd0JBQWlCdUQsaURBQVUsQ0FBQztBQUNuQ2dCLGtCQUFNLEVBQUVsRDtBQUQyQixXQUFELENBQTNCLENBRlg7QUFLRSxjQUFJLEVBQUMsU0FMUDtBQU1FLGVBQUssRUFBQyxPQU5SO0FBT0UsY0FBSSxFQUNGVixvQkFBb0IsR0FDbEIsTUFBQyxpRUFBRDtBQUFpQixnQkFBSSxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGtCLEdBR2xCO0FBQUcscUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FERixFQWtCRSxNQUFDLDRDQUFEO0FBQVMsZUFBSyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDJDQUFEO0FBQ0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNaUIsV0FBVyxDQUFDNUIsSUFBRCxDQUFqQjtBQUFBLFdBRFg7QUFFRSxtQkFBUyxFQUFDLGFBRlo7QUFHRSxjQUFJLEVBQUMsU0FIUDtBQUlFLGVBQUssRUFBQyxPQUpSO0FBS0UsY0FBSSxFQUNGUyxnQkFBZ0IsR0FDZCxNQUFDLGlFQUFEO0FBQWlCLGdCQUFJLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEYyxHQUdkO0FBQUcscUJBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBbEJGLEVBaUNFLE1BQUMsNENBQUQ7QUFBUyxlQUFLLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQywyQ0FBRDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTXFDLGNBQWMsQ0FBQzlDLElBQUQsQ0FBcEI7QUFBQSxXQURYO0FBRUUsbUJBQVMsd0JBQWlCdUQsaURBQVUsQ0FBQztBQUNuQ2dCLGtCQUFNLEVBQUUvQztBQUQyQixXQUFELENBQTNCLENBRlg7QUFLRSxjQUFJLEVBQUMsU0FMUDtBQU1FLGVBQUssRUFBQyxPQU5SO0FBT0UsY0FBSSxFQUFFO0FBQUcscUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FqQ0YsRUE0Q0UsTUFBQyw0Q0FBRDtBQUFTLGVBQUssRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDJDQUFEO0FBQ0UsaUJBQU8sRUFBRUMsU0FEWDtBQUVFLG1CQUFTLEVBQUMsYUFGWjtBQUdFLGNBQUksRUFBQyxTQUhQO0FBSUUsZUFBSyxFQUFDLE9BSlI7QUFLRSxjQUFJLEVBQUU7QUFBRyxxQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQTVDRixDQW5ERixDQURGOztBQTRHRixXQUFLLE1BQUw7QUFDRSxlQUNFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxnREFBRDtBQUNFLGNBQUksRUFBRStCLEVBQUEsb0JBRFI7QUFFRSxZQUFFLEVBQUVBLEVBQUEsc0JBQXFDeEQsSUFBSSxDQUFDeUQsSUFBMUMsQ0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUU7QUFBRyxlQUFLLEVBQUV6RCxJQUFJLENBQUMwRCxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLGFBQUcsRUFBRTFELElBQUksQ0FBQzJELFVBQWY7QUFBMkIsYUFBRyxFQUFDLGVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUpGLENBREYsRUFTRSxNQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsaUJBQU8sRUFBRWxDLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEYsQ0FERixFQWNFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSSxtQkFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE4QnpCLElBQUksQ0FBQ3NFLFFBQW5DLENBREYsRUFFRSxNQUFDLGdEQUFEO0FBQ0UsY0FBSSxFQUFFZCxFQUFBLG9CQURSO0FBRUUsWUFBRSxFQUFFQSxFQUFBLHNCQUFxQ3hELElBQUksQ0FBQ3lELElBQTFDLENBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlFO0FBQUcsbUJBQVMsRUFBQyxjQUFiO0FBQTRCLGVBQUssRUFBQyxnQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHekQsSUFBSSxDQUFDMEQsSUFEUixDQUpGLENBRkYsRUFVRSxNQUFDLHlDQUFEO0FBQ0UsbUJBQVMsRUFBQyxjQURaO0FBRUUsa0JBQVEsTUFGVjtBQUdFLHNCQUFZLEVBQUUxRCxJQUFJLENBQUN3RSxJQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVkYsRUFlRTtBQUFHLG1CQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHeEUsSUFBSSxDQUFDeUUsZ0JBRFIsQ0FmRixFQWtCR3pFLElBQUksQ0FBQzBFLFFBQUwsR0FBZ0IsQ0FBaEIsR0FDQztBQUFJLG1CQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUTFFLElBQUksQ0FBQzBFLFFBQWIsY0FEaEIsQ0FERCxHQUtDO0FBQUksbUJBQVMsRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUNnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURoQixDQXZCSixDQWRGLEVBMENFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBREYsRUFJRTtBQUFJLG1CQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHMUUsSUFBSSxDQUFDNEQsUUFBTCxJQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU1DLG9FQUFjLENBQUM3RCxJQUFJLENBQUM4RCxLQUFOLENBQXBCLENBRHBCLEVBRUU7QUFBSyxtQkFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0c5RCxJQUFJLENBQUM0RCxRQUFMLEdBQ0dDLG9FQUFjLENBQUM3RCxJQUFJLENBQUM4RCxLQUFMLEdBQWE5RCxJQUFJLENBQUM0RCxRQUFuQixDQURqQixHQUVHQyxvRUFBYyxDQUFDN0QsSUFBSSxDQUFDOEQsS0FBTixDQUhwQixDQURGLENBRkYsQ0FKRixFQWNFO0FBQUssbUJBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQywyQ0FBRDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWxDLFdBQVcsQ0FBQzVCLElBQUQsQ0FBakI7QUFBQSxXQURYO0FBRUUsaUJBQU8sRUFBRVMsZ0JBRlg7QUFHRSxlQUFLLEVBQUMsT0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURGLEVBUUUsTUFBQywyQ0FBRDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTXFDLGNBQWMsQ0FBQzlDLElBQUQsQ0FBcEI7QUFBQSxXQURYO0FBRUUsZUFBSyxFQUFDLE9BRlI7QUFHRSxtQkFBUyxFQUFFdUQsaURBQVUsQ0FBQztBQUNwQmdCLGtCQUFNLEVBQUUvQztBQURZLFdBQUQsQ0FIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRixDQWRGLENBMUNGLENBREY7O0FBOEVGO0FBQ0UsZUFDRTtBQUFLLG1CQUFTLG9CQUFhK0IsaURBQVUsQ0FBQ3RELFNBQUQsQ0FBdkIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUV1RCxFQUFBLG9CQURSO0FBRUUsWUFBRSxFQUFFQSxFQUFBLHNCQUFxQ3hELElBQUksQ0FBQ3lELElBQTFDLENBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlFO0FBQUcsZUFBSyxFQUFFekQsSUFBSSxDQUFDMEQsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxhQUFHLEVBQUUxRCxJQUFJLENBQUMyRCxVQUFmO0FBQTJCLGFBQUcsRUFBQyxlQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FKRixDQURGLENBREYsRUFXRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUksbUJBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBOEIzRCxJQUFJLENBQUNzRSxRQUFuQyxDQURGLEVBRUUsTUFBQyxnREFBRDtBQUNFLGNBQUksRUFBRWQsRUFBQSxvQkFEUjtBQUVFLFlBQUUsRUFBRUEsRUFBQSxzQkFBcUN4RCxJQUFJLENBQUN5RCxJQUExQyxDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJRTtBQUFHLG1CQUFTLEVBQUMsY0FBYjtBQUE0QixlQUFLLEVBQUMsZ0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR3pELElBQUksQ0FBQzBELElBRFIsQ0FKRixDQUZGLEVBVUU7QUFBSSxtQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHMUQsSUFBSSxDQUFDNEQsUUFBTCxHQUNHQyxvRUFBYyxDQUFDN0QsSUFBSSxDQUFDOEQsS0FBTCxHQUFhOUQsSUFBSSxDQUFDNEQsUUFBbkIsQ0FEakIsR0FFR0Msb0VBQWMsQ0FBQzdELElBQUksQ0FBQzhELEtBQU4sQ0FIcEIsRUFJRzlELElBQUksQ0FBQzRELFFBQUwsSUFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFNQyxvRUFBYyxDQUFDN0QsSUFBSSxDQUFDOEQsS0FBTixDQUFwQixDQUpwQixDQVZGLENBWEYsRUE0QkU7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDRDQUFEO0FBQVMsZUFBSyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDJDQUFEO0FBQ0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNdkIsYUFBYSxDQUFDdkMsSUFBRCxDQUFuQjtBQUFBLFdBRFg7QUFFRSxtQkFBUyx3QkFBaUJ1RCxpREFBVSxDQUFDO0FBQ25DZ0Isa0JBQU0sRUFBRWxEO0FBRDJCLFdBQUQsQ0FBM0IsQ0FGWDtBQUtFLGNBQUksRUFBQyxTQUxQO0FBTUUsZUFBSyxFQUFDLE9BTlI7QUFPRSxjQUFJLEVBQ0ZWLG9CQUFvQixHQUNsQixNQUFDLGlFQUFEO0FBQWlCLGdCQUFJLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEa0IsR0FHbEI7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQURGLEVBa0JFLE1BQUMsNENBQUQ7QUFBUyxlQUFLLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsMkNBQUQ7QUFDRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1pQixXQUFXLENBQUM1QixJQUFELENBQWpCO0FBQUEsV0FEWDtBQUVFLG1CQUFTLEVBQUMsYUFGWjtBQUdFLGNBQUksRUFBQyxTQUhQO0FBSUUsZUFBSyxFQUFDLE9BSlI7QUFLRSxjQUFJLEVBQ0ZTLGdCQUFnQixHQUNkLE1BQUMsaUVBQUQ7QUFBaUIsZ0JBQUksTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURjLEdBR2Q7QUFBRyxxQkFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FsQkYsRUFpQ0UsTUFBQyw0Q0FBRDtBQUFTLGVBQUssRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDJDQUFEO0FBQ0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNcUMsY0FBYyxDQUFDOUMsSUFBRCxDQUFwQjtBQUFBLFdBRFg7QUFFRSxtQkFBUyx3QkFBaUJ1RCxpREFBVSxDQUFDO0FBQ25DZ0Isa0JBQU0sRUFBRS9DO0FBRDJCLFdBQUQsQ0FBM0IsQ0FGWDtBQUtFLGNBQUksRUFBQyxTQUxQO0FBTUUsZUFBSyxFQUFDLE9BTlI7QUFPRSxjQUFJLEVBQUU7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQWpDRixFQTRDRSxNQUFDLDRDQUFEO0FBQVMsZUFBSyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsMkNBQUQ7QUFDRSxpQkFBTyxFQUFFQyxTQURYO0FBRUUsbUJBQVMsRUFBQyxhQUZaO0FBR0UsY0FBSSxFQUFDLFNBSFA7QUFJRSxlQUFLLEVBQUMsT0FKUjtBQUtFLGNBQUksRUFBRTtBQUFHLHFCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBNUNGLENBNUJGLENBREY7QUE3Tko7QUFtVEQsR0FwVEQ7O0FBcVRBLFNBQ0UsbUVBQ0c2QixnQkFBZ0IsQ0FBQ3BELElBQUQsQ0FEbkIsRUFFRSxNQUFDLDBDQUFEO0FBQ0UsV0FBTyxFQUFFSyxZQURYO0FBRUUsWUFBUSxFQUFFbUIsWUFGWjtBQUdFLFVBQU0sRUFBRSxJQUhWO0FBSUUsVUFBTSxFQUFFLElBSlY7QUFLRSxTQUFLLEVBQUUsR0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyw0RUFBRDtBQUFxQixTQUFLLEVBQUU7QUFBRWlELGtCQUFZLEVBQUU7QUFBaEIsS0FBNUI7QUFBaUQsV0FBTyxNQUF4RDtBQUF5RCxRQUFJLEVBQUUzRSxJQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FGRixDQURGO0FBY0Q7O0dBcFpRRCxPO1VBQ1VNLHVELEVBSUNTLHVELEVBQ0lBLHVELEVBQ0RBLHVEOzs7S0FQZGYsTztBQXNaTSxrRkFBQTZFLDRDQUFLLENBQUNDLElBQU4sQ0FBVzlFLE9BQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMjAyNDlhNDUwYzUyNzFkZGExMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEJ1dHRvbiwgbWVzc2FnZSwgUmF0ZSwgVG9vbHRpcCwgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENvdW50ZG93biwgeyB6ZXJvUGFkIH0gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XG5pbXBvcnQgeyBmZXRjaFdpc2hMaXN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9uc1wiO1xuaW1wb3J0IHtcbiAgYWRkVG9Db21wYXJlLFxuICByZW1vdmVGcm9tQ29tcGFyZSxcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY29tcGFyZUFjdGlvbnNcIjtcbmltcG9ydCB7IG9uQWRkUHJvZHVjdFRvQ2FydCB9IGZyb20gXCIuLi8uLi9jb21tb24vY2FydFNlcnZpY2VzXCI7XG5pbXBvcnQge1xuICBvbkFkZFByb2R1Y3RUb1dpc2hsaXN0LFxuICBvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3QsXG59IGZyb20gXCIuLi8uLi9jb21tb24vd2lzaGxpc3RTZXJ2aWNlc1wiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxMYXlvdXQgZnJvbSBcIi4uL2RldGFpbC9wcm9kdWN0L1Byb2R1Y3REZXRhaWxMYXlvdXRcIjtcblxuZnVuY3Rpb24gUHJvZHVjdCh7IGRhdGEsIGNsYXNzTmFtZSwgdHlwZSwgY291bnRkb3duTGFzdCA9IDEwMDAwMDAwMCB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FkZFRvQ2FydExvYWRpbmcsIHNldEFkZFRvQ2FydExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWRkVG9XaXNobGlzdExvYWRpbmcsIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XG4gIGNvbnN0IHdpc2hsaXN0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndpc2hsaXN0UmVkdWNlcik7XG4gIGNvbnN0IGNvbXBhcmVTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tcGFyZVJlZHVjZXIpO1xuICBjb25zdCBwcm9kdWN0SW5XaXNobGlzdCA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3Qod2lzaGxpc3RTdGF0ZS5kYXRhLCBkYXRhLmlkKTtcbiAgY29uc3QgcHJvZHVjdEluQ29tcGFyZSA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QoY29tcGFyZVN0YXRlLCBkYXRhLmlkKTtcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsVmlzaWJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25Nb2RhbENsb3NlID0gKGUpID0+IHtcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICB9O1xuICBjb25zdCBvbkFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKGFkZFRvQ2FydExvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QWRkVG9DYXJ0TG9hZGluZyh0cnVlKTtcbiAgICBvbkFkZFByb2R1Y3RUb0NhcnQoe1xuICAgICAgcHJvZHVjdCxcbiAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY2FydFwiKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9uQWRkV2lzaGxpc3QgPSAocHJvZHVjdCkgPT4ge1xuICAgIGlmIChhZGRUb1dpc2hsaXN0TG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyh0cnVlKTtcbiAgICBpZiAoIXByb2R1Y3RJbldpc2hsaXN0KSB7XG4gICAgICBvbkFkZFByb2R1Y3RUb1dpc2hsaXN0KHtcbiAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIHdpc2hsaXN0XCIpO1xuICAgICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RSZXF1ZXN0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcbiAgICAgICAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihtZXMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0KHtcbiAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSB3aXNobGlzdFwiKTtcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0UmVxdWVzdCgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkFkZFRvQ29tcGFyZSA9IChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKHByb2R1Y3RJbkNvbXBhcmUpIHtcbiAgICAgIGRpc3BhdGNoKHJlbW92ZUZyb21Db21wYXJlKHByb2R1Y3QuaWQpKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjb21wYXJlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChhZGRUb0NvbXBhcmUocHJvZHVjdCkpO1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjb21wYXJlXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0UmFuZG9tQXJiaXRyYXJ5ID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgfTtcbiAgY29uc3QgcmVkZXJQcm9kdWN0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwidGlueVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC10aW55ICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktaW1nXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtdGlueS1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktbmFtZVwiIHRpdGxlPVwiUHVyZSBQaW5lYXBwbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktcHJpY2VcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiZGFsZVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC1kYWxlICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtaW1nXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxDb3VudGRvd25cbiAgICAgICAgICAgICAgZGF0ZT17RGF0ZS5ub3coKSArIGdldFJhbmRvbUFyYml0cmFyeSgxMDAwMDAwMDAsIDE1MDAwMDAwMCl9XG4gICAgICAgICAgICAgIHJlbmRlcmVyPXsoeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93blwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChkYXlzKX08L2g2PiA8c3Bhbj5kYXlzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoaG91cnMpfTwvaDY+IDxzcGFuPmhyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQobWludXRlcyl9IDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bWluPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoc2Vjb25kcyl9PC9oNj4gPHNwYW4+c2VjPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLXByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiVGjDqm0gdsOgbyB5w6p1IHRow61jaFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkV2lzaGxpc3QoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbldpc2hsaXN0LFxuICAgICAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvV2lzaGxpc3RMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiVGjDqm0gdsOgbyBnaeG7jyBow6BuZ1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1idG5cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0TG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ091dGxpbmVkIHNwaW4gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtc2hvcHBpbmctYmFnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJTbyBzw6FuaFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9Db21wYXJlKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1idG4gJHtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXJhbmRvbVwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJYZW0gbmhhbmhcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWJ0blwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cImZhciBmYS1leWVcIiAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJsaXN0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWdcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtkYXRhLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY292ZXJJbWFnZX0gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtzaG93TW9kYWx9PlxuICAgICAgICAgICAgICAgIFhlbSBuaGFuaFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlXCI+e2RhdGEuY2F0ZWdvcnl9PC9oNT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiIHRpdGxlPVwiUHVyZSBQaW5lYXBwbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxSYXRlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1yYXRlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5yYXRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuc2hvcnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICB7ZGF0YS5xdWFudGl0eSA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtYXZhaWxhYmlsaXR5IC1pbnN0b2NrXCI+XG4gICAgICAgICAgICAgICAgICBBdmFpbGFiaWxpdHk6IDxzcGFuPiB7ZGF0YS5xdWFudGl0eX0gaW4gc3RvY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1hdmFpbGFiaWxpdHkgLW91dHN0b2NrXCI+XG4gICAgICAgICAgICAgICAgICBBdmFpbGFiaWxpdHk6IDxzcGFuPiBPdXQgc3RvY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2RlbGl2ZXJ5XCI+XG4gICAgICAgICAgICAgICAgR2lhbyBow6BuZyBtaeG7hW4gcGjDrVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2UtZGlzY291bnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XG4gICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2FkZFRvQ2FydExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUaMOqbSB2w6BvIGdp4buPIGjDoG5nXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNvIHPDoW5oXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdCAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWdcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtkYXRhLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY292ZXJJbWFnZX0gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCIgdGl0bGU9XCJQdXJlIFBpbmVhcHBsZVwiPlxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIHdpc2hsaXN0XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRXaXNobGlzdChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluV2lzaGxpc3QsXG4gICAgICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9XaXNobGlzdExvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJUaMOqbSB2w6BvIGdp4buPIGjDoG5nXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWJ0blwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgc3BpbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1zaG9wcGluZy1iYWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlNvIHPDoW5oXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWJ0biAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtcmFuZG9tXCIgLz59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlhlbSBuaGFuaFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWV5ZVwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3JlZGVyUHJvZHVjdFR5cGUodHlwZSl9XG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxuICAgICAgICBvbkNhbmNlbD17b25Nb2RhbENsb3NlfVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgIGhlYWRlcj17bnVsbH1cbiAgICAgICAgd2lkdGg9ezg2MH1cbiAgICAgID5cbiAgICAgICAgPFByb2R1Y3REZXRhaWxMYXlvdXQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19IGhpZGVUYWIgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9