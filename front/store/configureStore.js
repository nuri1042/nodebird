import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers/index";
import rootSaga from "../sagas";

// middleWare 는 항상 화살표 3개를 가지는 고차함수
const loggerMiddleWare =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // action은 원래 객체인데 thunk 는 action을 function으로 둘 수 있음
    // action 이 function이면 지연함수이기 때문에 action을 나중에 실행해줄 수 있음
    // if (typeof action === "function") {
    //   return action(dispatch, getState);
    // }
    console.log(action);
    return next(action);
  };

const configureStore = () => {
  // middlewares : redux의 기능을 향상시켜주는 것, 없던 기능 추가해줌
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleWare];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
