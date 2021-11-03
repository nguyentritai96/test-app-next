// Libraries
import { all } from 'redux-saga/effects';

// MiddleWares
import middlewareTest from '@store/test/middleware';

function* rootSaga() {
  yield all([middlewareTest()]);
}

export default rootSaga;
