webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BpComp/index.js":
/*!************************************!*\
  !*** ./components/BpComp/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./store/index.js");
var _jsxFileName = "/Users/nhargitt/Documents/sandbox/next-redux-boilerplate/components/BpComp/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var addName = _store__WEBPACK_IMPORTED_MODULE_2__["bpStore"].actions.addName;

var bpComp = function bpComp(props) {
  var updateName = function updateName(e) {
    props.addName(e.target.value);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.greeting), __jsx("input", {
    onChange: updateName,
    placeholder: "add name here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state
/*, ownProps*/
) {
  console.log(state, 'state');
  return {
    greeting: state.bpStore
  };
};

var mapDispatchToProps = {
  addName: addName
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(bpComp));

/***/ })

})
//# sourceMappingURL=index.js.475f75ee1092c5b0efc6.hot-update.js.map