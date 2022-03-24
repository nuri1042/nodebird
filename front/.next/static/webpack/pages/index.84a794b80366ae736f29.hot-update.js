webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/kimnuri/Desktop/Nuri/nodebird/front/components/FollowButton.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar FollowButton = function FollowButton(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me,\n      followLoading = _useSelector.followLoading,\n      unFollowLoading = _useSelector.unFollowLoading;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])(); // 팔로잉 여부\n\n  var isFollowing = me && me.Followings.find(function (v) {\n    return v.id === post.User.id;\n  });\n  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    if (isFollowing) {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"UNFOLLOW_REQUEST\"],\n        data: action.data\n      });\n    } else {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"FOLLOW_REQUEST\"],\n        data: post.User.id\n      });\n    }\n\n    console.log(isFollowing);\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    loading: followLoading || unFollowLoading,\n    onClick: onClickButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, isFollowing ? '언팔로우' : '팔로우');\n};\n\n_s(FollowButton, \"pvUMZ0apZdid9FkangTuMYp+iqE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n\n_c = FollowButton;\nFollowButton.porpTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanM/YmQ0ZiJdLCJuYW1lcyI6WyJGb2xsb3dCdXR0b24iLCJwb3N0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0xvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJhY3Rpb24iLCJGT0xMT1dfUkVRVUVTVCIsImNvbnNvbGUiLCJsb2ciLCJwb3JwVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUMvQixxQkFBNkNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhEO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDtBQUFBLE1BQVdDLGFBQVgsZ0JBQVdBLGFBQVg7QUFBQSxNQUEwQkMsZUFBMUIsZ0JBQTBCQSxlQUExQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBRitCLENBRy9COztBQUNBLE1BQU1DLFdBQVcsR0FBR0wsRUFBRSxJQUFJQSxFQUFFLENBQUNNLFVBQUgsQ0FBY0MsSUFBZCxDQUFtQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNiLElBQUksQ0FBQ2MsSUFBTCxDQUFVRCxFQUExQjtBQUFBLEdBQW5CLENBQTFCO0FBQ0EsTUFBTUUsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdEMsUUFBSVAsV0FBSixFQUFpQjtBQUNmRixjQUFRLENBQUM7QUFDUFUsWUFBSSxFQUFFQywrREFEQztBQUVQQyxZQUFJLEVBQUVDLE1BQU0sQ0FBQ0Q7QUFGTixPQUFELENBQVI7QUFJRCxLQUxELE1BS087QUFDTFosY0FBUSxDQUFDO0FBQ1BVLFlBQUksRUFBRUksNkRBREM7QUFFUEYsWUFBSSxFQUFFbkIsSUFBSSxDQUFDYyxJQUFMLENBQVVEO0FBRlQsT0FBRCxDQUFSO0FBSUQ7O0FBQ0RTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxXQUFaO0FBQ0QsR0FiZ0MsRUFhOUIsRUFiOEIsQ0FBakM7QUFjQSxTQUNFLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVKLGFBQWEsSUFBSUMsZUFBbEM7QUFBbUQsV0FBTyxFQUFFUyxhQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLFdBQVcsR0FBRyxNQUFILEdBQVksS0FEMUIsQ0FERjtBQUtELENBeEJEOztHQUFNVixZO1VBQ3lDRSx1RCxFQUM1Qk8sdUQ7OztLQUZiVCxZO0FBMEJOQSxZQUFZLENBQUN5QixTQUFiLEdBQXlCO0FBQ3ZCeEIsTUFBSSxFQUFFeUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEQSxDQUF6QjtBQUdlNUIsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0J1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Rk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoe3Bvc3R9KSA9PiB7XG4gIGNvbnN0IHttZSwgZm9sbG93TG9hZGluZywgdW5Gb2xsb3dMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgLy8g7YyU66Gc7J6JIOyXrOu2gFxuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lICYmIG1lLkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNGb2xsb3dpbmcpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcbiAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGlzRm9sbG93aW5nKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bkZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259PlxuICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cbkZvbGxvd0J1dHRvbi5wb3JwVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FollowButton.js\n");

/***/ })

})