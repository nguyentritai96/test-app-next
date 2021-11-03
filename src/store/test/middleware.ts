// Libraries
import { takeEvery, put } from 'redux-saga/effects';

// Actions
import { actionTypes } from './actions';

function* handleAddNew(args) {
  try {
    yield put({ type: actionTypes.ADD_NEW_RD, payload: args.payload });
  } catch (e) {
    // Error
  }
}

export default function* middlewareTest() {
  yield takeEvery(actionTypes.ADD_NEW_MW, handleAddNew);
}
