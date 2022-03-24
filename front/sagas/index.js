import { all, fork } from "redux-saga/effects";

import userSaga from "./user";
import postSaga from "./post";

// EventListener 와 같은 역할
// take : action이 실행될 때 까지 기다림
// take 가 일회성이라 while take 로 사용해야 함 -> 동기적으로 동작
// while (true) {
//   yield take("LOG_IN_REQUEST", logIn);
// }
//
// takeEvery -> 비동기적으로 동작
// yield takeEvery("LOG_IN_REQUEST", logIn);
//
// 버튼이 실수로 여러번 눌렸을 때 takeEvery 로 하면 두번 실행됨
// 이 문제 방지 위해 사용하는 것이 takeLatest
// takeLatest -> 앞의 클릭은 무시되고 마지막것만 실행함
// front 에서 backEnd 로 보낸 여러 '요청'들은 취소 할 수 없고
// BackEnd 로 부터 받는 '응답'은 마지막 하나를 제외하고 전부 취소함
//
// 여러 클릭 중에 첫번째만 실행하려면 takeLeading
//
// throttle -> 시간을 설정해두면 해당 시간동안에는 요청도 한번만 실행 할 수 있음

// rootSaga에 만들고 싶은 비동기 action들을 넣어줌
export default function* rootSaga() {
  // all : 배열을 받아서 해당 배열을 한번에 실행시킴
  yield all([
    fork(userSaga), // fork : 함수를 한번에 실행시킴
    fork(postSaga),
  ]);
}
