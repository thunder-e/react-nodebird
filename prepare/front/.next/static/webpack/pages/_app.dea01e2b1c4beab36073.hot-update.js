webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogin),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);



function loginAPI(data) {
  // 3. 전달된 후
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/login", data); //4. 넘겨줌
}

function logIn(action) {
  return _regeneratorRuntime().wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: action.data
          });
        case 5:
          _context.next = 11;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context.t0.response.data
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}
// 성공결과 : result.data
// 실패결과 : err.response.data

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/logout");
}
function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });
        case 5:
          _context2.next = 11;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context2.t0.response.data
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

// API는 제너레이터가 아니라는 것 주의!!!!!
function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/signUp");
}
function signUp() {
  return _regeneratorRuntime().wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });
        case 5:
          _context3.next = 11;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context3.t0.response.data
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}
function watchLogin() {
  return _regeneratorRuntime().wrap(function watchLogin$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwidXNlclNhZ2EiLCJsb2dpbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiZXJyb3IiLCJyZXNwb25zZSIsImxvZ291dEFQSSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTtBQUFBLHNEQWtCVUEsS0FBSztFQUFBLG1EQXVCTEMsTUFBTTtFQUFBLG1EQW9CTkMsTUFBTTtFQUFBLG1EQWVOQyxVQUFVO0VBQUEsbURBSVZDLFdBQVc7RUFBQSxtREFJWEMsV0FBVztFQUFBLG1EQUlJQyxRQUFRO0FBekZzQztBQUM3QztBQVdBO0FBRTFCLFNBQVNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3RCO0VBQ0EsT0FBT0MsNkNBQUssQ0FBQ0MsSUFBSSxDQUFDLFlBQVksRUFBRUYsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6Qzs7QUFFQSxTQUFVUixLQUFLLENBQUNXLE1BQU07RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQUE7VUFHbEIsT0FBTUMsZ0VBQUssQ0FBQyxJQUFJLENBQUM7UUFBQTtVQUFBO1VBRWpCLE9BQU1DLDhEQUFHLENBQUM7WUFDUkMsSUFBSSxFQUFFQyw2REFBYztZQUNwQlAsSUFBSSxFQUFFRyxNQUFNLENBQUNIO1VBQ2YsQ0FBQyxDQUFDO1FBQUE7VUFBQTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7VUFFRixPQUFNSyw4REFBRyxDQUFDO1lBQ1JDLElBQUksRUFBRUUsNkRBQWM7WUFDcEJDLEtBQUssRUFBRSxZQUFJQyxRQUFRLENBQUNWO1VBQ3RCLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBR047QUFDQTs7QUFFQSxTQUFTVyxTQUFTLEdBQUc7RUFDbkIsT0FBT1YsNkNBQUssQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUNsQztBQUVBLFNBQVVULE1BQU07RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQUE7VUFFWixPQUFNVyxnRUFBSyxDQUFDLElBQUksQ0FBQztRQUFBO1VBQUE7VUFFakIsT0FBTUMsOERBQUcsQ0FBQztZQUNSQyxJQUFJLEVBQUVNLDhEQUFlQTtVQUN2QixDQUFDLENBQUM7UUFBQTtVQUFBO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtVQUVGLE9BQU1QLDhEQUFHLENBQUM7WUFDUkMsSUFBSSxFQUFFTyw4REFBZTtZQUNyQkosS0FBSyxFQUFFLGFBQUlDLFFBQVEsQ0FBQ1Y7VUFDdEIsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7O0FBSU47QUFDQSxTQUFTYyxTQUFTLEdBQUc7RUFDbkIsT0FBT2IsNkNBQUssQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUNsQztBQUVBLFNBQVVSLE1BQU07RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQUE7VUFFWixPQUFNVSxnRUFBSyxDQUFDLElBQUksQ0FBQztRQUFBO1VBQUE7VUFFakIsT0FBTUMsOERBQUcsQ0FBQztZQUNSQyxJQUFJLEVBQUVTLDhEQUFlQTtVQUN2QixDQUFDLENBQUM7UUFBQTtVQUFBO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtVQUVGLE9BQU1WLDhEQUFHLENBQUM7WUFDUkMsSUFBSSxFQUFFVSw4REFBZTtZQUNyQlAsS0FBSyxFQUFFLGFBQUlDLFFBQVEsQ0FBQ1Y7VUFDdEIsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFJTixTQUFVTCxVQUFVO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNsQixPQUFNc0IscUVBQVUsQ0FBQ0MsNkRBQWMsRUFBRTFCLEtBQUssQ0FBQztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBR3pDLFNBQVVJLFdBQVc7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ25CLE9BQU1xQixxRUFBVSxDQUFDRSw4REFBZSxFQUFFMUIsTUFBTSxDQUFDO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFHM0MsU0FBVUksV0FBVztFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDbkIsT0FBTW9CLHFFQUFVLENBQUNHLDhEQUFlLEVBQUUxQixNQUFNLENBQUM7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTtBQUc1QixTQUFVSSxRQUFRO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUMvQixPQUFNdUIsOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDM0IsVUFBVSxDQUFDLEVBQUUyQiwrREFBSSxDQUFDMUIsV0FBVyxDQUFDLEVBQUUwQiwrREFBSSxDQUFDekIsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGVhMDFlMmIxYzRiZWFiMzYwNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgcHV0LCBkZWxheSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKSB7XHJcbiAgLy8gMy4g7KCE64us65CcIO2bhFxyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTsgLy80LiDrhJjqsqjspIxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIC8vIDEuIGFjdGlvbuyXkOyEnFxyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpOyAvLyAyLiBkYXRh66W8IOq6vOuCtOyWtFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbi8vIOyEseqzteqysOqzvCA6IHJlc3VsdC5kYXRhXHJcbi8vIOyLpO2MqOqysOqzvCA6IGVyci5yZXNwb25zZS5kYXRhXHJcblxyXG5mdW5jdGlvbiBsb2dvdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nb3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFQSeuKlCDsoJzrhIjroIjsnbTthLDqsIAg7JWE64uI652864qUIOqygyDso7zsnZghISEhIVxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3NpZ25VcFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nb3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTsgLy/ruYTrj5nquLAg7JWh7IWYIO2BrOumrOyXkOydtO2EsOqwgCDsnbTrsqTtirjrpqzsiqTrhIjqsJnsnYAg7Jet7ZWgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9naW4pLCBmb3JrKHdhdGNoTG9nT3V0KSwgZm9yayh3YXRjaFNpZ25VcCldKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9