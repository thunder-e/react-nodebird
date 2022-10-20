import { all, fork, takeLatest, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_FAILURE,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  SIGN_UP_REQUEST,
} from "../reducers/user";

function loginAPI(data) {
  // 3. 전달된 후
  return axios.post("/api/login", data); //4. 넘겨줌
}

function* logIn(action) {
  console.log("saga login");
  // 1. action에서
  try {
    yield delay(1000);
    //const result = yield call(loginAPI, action.data); // 2. data를 꺼내어
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}
// 성공결과 : result.data
// 실패결과 : err.response.data

function logoutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    yield delay(1000);
    //const result = yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

// API는 제너레이터가 아니라는 것 주의!!!!!
function signUpAPI() {
  return axios.post("/api/signUp");
}

function* signUp() {
  try {
    yield delay(1000);
    //const result = yield call(logoutAPI);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn); //비동기 액션 크리에이터가 이벤트리스너같은 역할
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchSignUp)]);
}
