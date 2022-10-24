webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "김떤더"
    },
    content: "첫 번째 게시글 #해시태그 #익스프레스",
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029_960_720.jpg"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_960_720.png"
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: "copy"
      },
      content: "고양이 귀여워요😊"
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: "연두"
      },
      content: "츄르 사야지"
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
//다른 정보들과 함께 오는 데이터들은 대문자로 시작 - User, Image, Comment

initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map(function () {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph,
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
    }]
  };
}));

//변수로 따로 저장해두면 오타를 막을 수 있다.
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

//동적 action creator : 액션을 그때그때 생성해줌
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};
var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: "김떤더"
    },
    Images: [],
    Comments: []
  };
};
var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: "김떤더"
    }
  };
};

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성은 지키면서)
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.postId;
        });
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      // const postIndex = state.mainPosts.findIndex(
      //   (v) => v.id === action.data.postId
      // );
      // const post = { ...state.mainPosts[postIndex] };
      // post.Comments = [dummyComment(action.data.content), ...post.Comments];
      // const mainPosts = [...state.mainPosts];
      // mainPosts[postIndex] = post;

      // return {
      //   ...state,
      //   mainPosts,
      //   addCommentLoading: false,
      //   addCommentDone: true,
      // };
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        {
          break;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJjb25jYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImxvcmVtIiwicGFyYWdyYXBoIiwiaW1hZ2UiLCJzZW50ZW5jZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUM7UUFDckU7TUFDRixLQUFLTCxtQkFBbUI7UUFDdEJjLEtBQUssQ0FBQ3BDLGlCQUFpQixHQUFHLEtBQUs7UUFDL0JvQyxLQUFLLENBQUNsQyxlQUFlLEdBQUdnQyxNQUFNLENBQUNJLEtBQUs7UUFDcEM7TUFDRixLQUFLZixtQkFBbUI7UUFDdEJhLEtBQUssQ0FBQ2pDLGlCQUFpQixHQUFHLElBQUk7UUFDOUJpQyxLQUFLLENBQUNoQyxjQUFjLEdBQUcsS0FBSztRQUM1QmdDLEtBQUssQ0FBQy9CLGVBQWUsR0FBRyxJQUFJO1FBQzVCO01BQ0YsS0FBS21CLG1CQUFtQjtRQUN0QixJQUFNaUIsSUFBSSxHQUFHTCxLQUFLLENBQUNsRCxTQUFTLENBQUN3RCxJQUFJLENBQUMsVUFBQ0YsQ0FBQztVQUFBLE9BQUtBLENBQUMsQ0FBQ3JELEVBQUUsS0FBSytDLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDZ0IsTUFBTTtRQUFBLEVBQUM7UUFDckVGLElBQUksQ0FBQzlDLFFBQVEsQ0FBQzBDLE9BQU8sQ0FBQ04sWUFBWSxDQUFDRyxNQUFNLENBQUNQLElBQUksQ0FBQ3JDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hEOEMsS0FBSyxDQUFDakMsaUJBQWlCLEdBQUcsS0FBSztRQUMvQmlDLEtBQUssQ0FBQ2hDLGNBQWMsR0FBRyxJQUFJO1FBQzNCOztNQUVGO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBLEtBQUtxQixtQkFBbUI7UUFDdEJXLEtBQUssQ0FBQ2pDLGlCQUFpQixHQUFHLEtBQUs7UUFDL0JpQyxLQUFLLENBQUMvQixlQUFlLEdBQUc2QixNQUFNLENBQUNJLEtBQUs7UUFDcEM7TUFDRjtRQUFTO1VBQ1A7UUFDRjtJQUFDO0VBRUwsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVjTixzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwOGY4ODA0YzhkZGRhMzNiNzVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogXCLquYDrlqTrjZRcIixcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIHNyYzogXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIyLzA3LzAzLzIyLzAwL2NhdC03MzAwMDI5Xzk2MF83MjAuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTcvMDIvMjAvMTgvMDMvY2F0LTIwODM0OTJfOTYwXzcyMC5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMS8xMS8xMi8wMy8wNC93b21hbi02Nzg3Nzg0Xzk2MF83MjAucG5nXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJjb3B5XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLqs6DslpHsnbQg6reA7Jes7JuM7JqU8J+YilwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IFwi7Jew65GQXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLsuITrpbQg7IKs7JW87KeAXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuLy/ri6Trpbgg7KCV67O065Ok6rO8IO2VqOq7mCDsmKTripQg642w7J207YSw65Ok7J2AIOuMgOusuOyekOuhnCDsi5zsnpEgLSBVc2VyLCBJbWFnZSwgQ29tbWVudFxyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KFxyXG4gIEFycmF5KDIwKVxyXG4gICAgLmZpbGwoKVxyXG4gICAgLm1hcCgoKSA9PiAoe1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgsXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pKVxyXG4pO1xyXG5cclxuLy/rs4DsiJjroZwg65Sw66GcIOyggOyepe2VtOuRkOuptCDsmKTtg4Drpbwg66eJ7J2EIOyImCDsnojri6QuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbi8v64+Z7KCBIGFjdGlvbiBjcmVhdG9yIDog7JWh7IWY7J2EIOq3uOuVjOq3uOuVjCDsg53shLHtlbTspIxcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwi6rmA65ak642UXCIsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCLquYDrlqTrjZRcIixcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJggKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXHJcbiAgICAgIC8vICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxyXG4gICAgICAvLyApO1xyXG4gICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcblxyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1haW5Qb3N0cyxcclxuICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9