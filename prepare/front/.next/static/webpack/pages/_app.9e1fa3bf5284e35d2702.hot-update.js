webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(likePost),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(unlikePost),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchLikePost),
  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnlikePost),
  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),
  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
  _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
  _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddComment),
  _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);





function likePostAPI(data) {
  // data : post.id
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch("/post/".concat(data, "/like"));
}
function likePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function likePost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
            data: result.data //PostId, UserId
          });
        case 6:
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
            data: _context.t0.response.data
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}
function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/post/".concat(data, "/like"));
}
function unlikePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function unlikePost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
            data: result.data
          });
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
            data: _context2.t0.response.data
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}
function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/post", {
    content: data
  });
}
function addPost(action) {
  var result, id;
  return _regeneratorRuntime().wrap(function addPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
        case 3:
          result = _context3.sent;
          id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
            data: result.data
          });
        case 7:
          _context3.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
            data: result.data.id
          });
        case 9:
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
            data: _context3.t0.response.data
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 11]]);
}
function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/posts", data);
}
function loadPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.data);
        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });
        case 6:
          _context4.next = 12;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
            data: _context4.t0.response.data
          });
        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}
function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/api/post", data);
}
function removePost(action) {
  return _regeneratorRuntime().wrap(function removePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            //액션이 두개인 이유 : post reducer상태와 user reducer상태를 동시에 한번에 바꿀수 없기 떄문에 액션을 두번하여 바꿔줌
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
            data: action.data
          });
        case 5:
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
            data: action.data
          });
        case 7:
          _context5.next = 14;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
            data: _context5.t0.response.data
          });
        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
}
function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/post/".concat(data.postId, "/comment"), data); // POST /post/1/comment
}

function addComment(action) {
  var result;
  return _regeneratorRuntime().wrap(function addComment$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
        case 3:
          result = _context6.sent;
          console.log("result : ", result);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });
        case 7:
          _context6.next = 14;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
            data: _context6.t0.response.data
          });
        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 9]]);
}
function watchLikePost() {
  return _regeneratorRuntime().wrap(function watchLikePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
function watchUnlikePost() {
  return _regeneratorRuntime().wrap(function watchUnlikePost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
function watchLoadPosts() {
  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}
function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}
function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}
function watchAddComment() {
  return _regeneratorRuntime().wrap(function watchAddComment$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}
function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsaWtlUG9zdCIsInVubGlrZVBvc3QiLCJhZGRQb3N0IiwibG9hZFBvc3RzIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSIsImxpa2VQb3N0QVBJIiwiZGF0YSIsImF4aW9zIiwicGF0Y2giLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJyZXNwb25zZSIsInVubGlrZVBvc3RBUEkiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsImFkZFBvc3RBUEkiLCJwb3N0IiwiY29udGVudCIsImlkIiwic2hvcnRpZCIsImdlbmVyYXRlIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiQUREX1BPU1RfRkFJTFVSRSIsImxvYWRQb3N0c0FQSSIsImdldCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsInJlbW92ZVBvc3RBUEkiLCJkZWxheSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImNvbnNvbGUiLCJlcnJvciIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwibG9nIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwidGhyb3R0bGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJBRERfUE9TVF9SRVFVRVNUIiwi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RyxDQUFDLENBQ1JDLCtEQUFJLENBQUN0RCxjQUFjLENBQUMsRUFDcEJzRCwrREFBSSxDQUFDckQsWUFBWSxDQUFDLEVBQ2xCcUQsK0RBQUksQ0FBQ3BELGVBQWUsQ0FBQyxFQUNyQm9ELCtEQUFJLENBQUNuRCxlQUFlLENBQUMsQ0FDdEIsQ0FBQztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWUxZmEzYmY1Mjg0ZTM1ZDI3MDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYWxsLFxyXG4gIGZvcmssXHJcbiAgdGFrZUxhdGVzdCxcclxuICBwdXQsXHJcbiAgZGVsYXksXHJcbiAgdGhyb3R0bGUsXHJcbiAgY2FsbCxcclxufSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBnZW5lcmF0ZUR1bW15UG9zdCxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIC8vIGRhdGEgOiBwb3N0LmlkXHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vUG9zdElkLCBVc2VySWRcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0XCIsIHsgY29udGVudDogZGF0YSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc3QgaWQgPSBzaG9ydGlkLmdlbmVyYXRlKCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3Bvc3RzXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvL+yVoeyFmOydtCDrkZDqsJzsnbgg7J207JygIDogcG9zdCByZWR1Y2Vy7IOB7YOc7JmAIHVzZXIgcmVkdWNlcuyDge2DnOulvCDrj5nsi5zsl5Ag7ZWc67KI7JeQIOuwlOq/gOyImCDsl4bquLAg65aE66y47JeQIOyVoeyFmOydhCDrkZDrsojtlZjsl6wg67CU6r+U7KSMXHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7IC8vIFBPU1QgcmVkdWNlciDsobDsnpHrtoDrtoRcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pOyAvLyBVU0VSIHJlZHVjZXIg7KGw7J6R67aA67aEXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTsgLy8gUE9TVCAvcG9zdC8xL2NvbW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IDogXCIsIHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=