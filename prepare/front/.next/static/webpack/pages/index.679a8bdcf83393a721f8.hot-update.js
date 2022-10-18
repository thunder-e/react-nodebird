webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "김떤더"
    },
    content: "첫 번째 게시글 #해시태그 #익스프레스",
    Images: [{
      src: "https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029_960_720.jpg"
    }, {
      src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"
    }, {
      src: "https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_960_720.png"
    }],
    Comment: [{
      User: {
        nickname: "copy"
      },
      content: "고양이 귀여워요😊"
    }, {
      User: {
        nickname: "연두"
      },
      content: "츄르 가져다줄까"
    }]
  }],
  imagePaths: [],
  postAdded: false
};
//다른 정보들과 함께 오는 데이터들은 대문자로 시작 - User, Image, Comment

var ADD_POST = "ADD_POST"; //변수로 따로 저장해두면 오타를 막을 수 있다.
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "김떤더"
  },
  Image: [],
  Comment: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });
    default:
      {
        return _objectSpread({}, state);
      }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50IiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJJbWFnZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsU0FBUyxFQUFFLENBQ1Q7SUFDRUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQUFDO01BQ0xFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0MsTUFBTSxFQUFFLENBQ047TUFDRUMsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0VBLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFQSxHQUFHLEVBQUU7SUFDUCxDQUFDLENBQ0Y7SUFDREMsT0FBTyxFQUFFLENBQ1A7TUFDRUwsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtNQUNaLENBQUM7TUFDREMsT0FBTyxFQUFFO0lBQ1gsQ0FBQyxFQUNEO01BQ0VGLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNYLENBQUM7RUFFTCxDQUFDLENBQ0Y7RUFDREksVUFBVSxFQUFFLEVBQUU7RUFDZEMsU0FBUyxFQUFFO0FBQ2IsQ0FBQztBQUNEOztBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztBQUN0QixJQUFNQyxPQUFPLEdBQUc7RUFDckJDLElBQUksRUFBRUY7QUFDUixDQUFDO0FBRUQsSUFBTUcsU0FBUyxHQUFHO0VBQ2hCWixFQUFFLEVBQUUsQ0FBQztFQUNMRyxPQUFPLEVBQUUsV0FBVztFQUNwQkYsSUFBSSxFQUFFO0lBQ0pELEVBQUUsRUFBRSxDQUFDO0lBQ0xFLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRFcsS0FBSyxFQUFFLEVBQUU7RUFDVFAsT0FBTyxFQUFFO0FBQ1gsQ0FBQztBQUVELElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQXFDO0VBQUEsSUFBakNDLEtBQUssdUVBQUdqQixZQUFZO0VBQUEsSUFBRWtCLE1BQU07RUFDM0MsUUFBUUEsTUFBTSxDQUFDTCxJQUFJO0lBQ2pCLEtBQUtGLFFBQVE7TUFDWCx1Q0FDS00sS0FBSztRQUNSaEIsU0FBUyxHQUFHYSxTQUFTLHNHQUFLRyxLQUFLLENBQUNoQixTQUFTLEVBQUM7UUFDMUNTLFNBQVMsRUFBRTtNQUFJO0lBRW5CO01BQVM7UUFDUCx5QkFDS08sS0FBSztNQUVaO0VBQUM7QUFFTCxDQUFDO0FBRWNELHNFQUFPLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc5YThiZGNmODMzOTNhNzIxZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6IFwi6rmA65ak642UXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIyLzA3LzAzLzIyLzAwL2NhdC03MzAwMDI5Xzk2MF83MjAuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8wMi8yMC8xOC8wMy9jYXQtMjA4MzQ5Ml85NjBfNzIwLmpwZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjEvMTEvMTIvMDMvMDQvd29tYW4tNjc4Nzc4NF85NjBfNzIwLnBuZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImNvcHlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuqzoOyWkeydtCDqt4Dsl6zsm4zsmpTwn5iKXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIuyXsOuRkFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi7LiE66W0IOqwgOyguOuLpOykhOq5jFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgcG9zdEFkZGVkOiBmYWxzZSxcclxufTtcclxuLy/ri6Trpbgg7KCV67O065Ok6rO8IO2VqOq7mCDsmKTripQg642w7J207YSw65Ok7J2AIOuMgOusuOyekOuhnCDsi5zsnpEgLSBVc2VyLCBJbWFnZSwgQ29tbWVudFxyXG5cclxuY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUXCI7IC8v67OA7IiY66GcIOuUsOuhnCDsoIDsnqXtlbTrkZDrqbQg7Jik7YOA66W8IOunieydhCDsiJgg7J6I64ukLlxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICB0eXBlOiBBRERfUE9TVCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICBpZDogMixcclxuICBjb250ZW50OiBcIuuNlOuvuOuNsOydtO2EsOyeheuLiOuLpC5cIixcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiBcIuq5gOuWpOuNlFwiLFxyXG4gIH0sXHJcbiAgSW1hZ2U6IFtdLFxyXG4gIENvbW1lbnQ6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=