webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  //시도중이 true이면 로딩창을 띄울 용도
  logInLoading: false,
  //로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  //로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  //회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  //닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  //팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  //언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  me: null,
  signUpData: {},
  loginData: {}
};

//오타확률을 적게하기 위해 변수로 저장 - 변수는 에디터가 관리해주기 때문에
var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
var CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
var CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
var CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
var FOLLOW_REQUEST = "FOLLOW_REQUEST";
var FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
var FOLLOW_FAILURE = "FOLLOW_FAILURE";
var UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
var UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
var UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
var ADD_POST_TO_ME = "ADD_POST_TO_ME";
var REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "김떤더",
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: "hye"
    }, {
      nickname: "thun-der"
    }, {
      nickname: "clover"
    }],
    Followers: [{
      nickname: "hye"
    }, {
      nickname: "thun-der"
    }, {
      nickname: "clover"
    }]
  });
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;
      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data
        });
        break;
      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;
      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me = dummyUser(action.data);
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true; // REQUEST : 세개 다 초기화
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false; // SUCCESS : loading 끄고 done 해주고
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false; // FAILURE : loading 끄고 error 넣어주고
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = fakse;
        draft.changeNicknameError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };
      default:
        break;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInB1c2giLCJlcnJvciIsImZha3NlIiwidW5zaGlmdCIsImZpbHRlciIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUVyQixJQUFNQSxZQUFZLEdBQUc7RUFDMUI7RUFDQUMsWUFBWSxFQUFFLEtBQUs7RUFBRTtFQUNyQkMsU0FBUyxFQUFFLEtBQUs7RUFDaEJDLFVBQVUsRUFBRSxJQUFJO0VBRWhCQyxhQUFhLEVBQUUsS0FBSztFQUFFO0VBQ3RCQyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsV0FBVyxFQUFFLElBQUk7RUFFakJDLGFBQWEsRUFBRSxLQUFLO0VBQUU7RUFDdEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUVqQkMscUJBQXFCLEVBQUUsS0FBSztFQUFFO0VBQzlCQyxrQkFBa0IsRUFBRSxLQUFLO0VBQ3pCQyxtQkFBbUIsRUFBRSxJQUFJO0VBRXpCQyxhQUFhLEVBQUUsS0FBSztFQUFFO0VBQ3RCQyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsV0FBVyxFQUFFLElBQUk7RUFFakJDLGVBQWUsRUFBRSxLQUFLO0VBQUU7RUFDeEJDLFlBQVksRUFBRSxLQUFLO0VBQ25CQyxhQUFhLEVBQUUsSUFBSTtFQUVuQkMsRUFBRSxFQUFFLElBQUk7RUFDUkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7O0FBRUQ7QUFDTyxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLElBQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsSUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUV2QyxJQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLElBQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsSUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUV6QyxJQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pD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LGlCQUFpQjtRQUNwQmUsS0FBSyxDQUFDckMsRUFBRSxDQUFDMkIsS0FBSyxHQUFHVSxLQUFLLENBQUNyQyxFQUFFLENBQUMyQixLQUFLLENBQUNlLE1BQU0sQ0FBQyxVQUFDQyxDQUFDO1VBQUEsT0FBS0EsQ0FBQyxDQUFDakIsRUFBRSxLQUFLUyxNQUFNLENBQUNYLElBQUk7UUFBQSxFQUFDO1FBQ25FO01BQ0Y7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNFO0lBQU07RUFFWixDQUFDLENBQUM7QUFBQTtBQUVXUyxzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjAwMGNjZTYyMmQ0YzRhMjYwZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAvL+yLnOuPhOykkeydtCB0cnVl7J2066m0IOuhnOuUqeywveydhCDrnYTsmrgg7Jqp64+EXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG5cclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcblxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8v7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvL+yWuO2MlOuhnOyasCDsi5zrj4TspJFcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG4vL+yYpO2DgO2ZleuloOydhCDsoIHqsoztlZjquLAg7JyE7ZW0IOuzgOyImOuhnCDsoIDsnqUgLSDrs4DsiJjripQg7JeQ65SU7YSw6rCAIOq0gOumrO2VtOyjvOq4sCDrlYzrrLjsl5BcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiBcIuq5gOuWpOuNlFwiLFxyXG4gIGlkOiAxLFxyXG4gIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICBGb2xsb3dpbmdzOiBbXHJcbiAgICB7IG5pY2tuYW1lOiBcImh5ZVwiIH0sXHJcbiAgICB7IG5pY2tuYW1lOiBcInRodW4tZGVyXCIgfSxcclxuICAgIHsgbmlja25hbWU6IFwiY2xvdmVyXCIgfSxcclxuICBdLFxyXG4gIEZvbGxvd2VyczogW1xyXG4gICAgeyBuaWNrbmFtZTogXCJoeWVcIiB9LFxyXG4gICAgeyBuaWNrbmFtZTogXCJ0aHVuLWRlclwiIH0sXHJcbiAgICB7IG5pY2tuYW1lOiBcImNsb3ZlclwiIH0sXHJcbiAgXSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTsgLy8gUkVRVUVTVCA6IOyEuOqwnCDri6Qg7LSI6riw7ZmUXHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7IC8vIFNVQ0NFU1MgOiBsb2FkaW5nIOuBhOqzoCBkb25lIO2VtOyjvOqzoFxyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlOyAvLyBGQUlMVVJFIDogbG9hZGluZyDrgYTqs6AgZXJyb3Ig64Sj7Ja07KO86rOgXHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFrc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=