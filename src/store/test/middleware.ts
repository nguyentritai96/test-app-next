// Libraries
import { takeEvery, put } from 'redux-saga/effects';

// Actions
import { fetchData } from './reducer';

const KEY = 'TEST';

export const actionTypes = {
  ADD_NEW_MW: `__MW__${KEY}__ADD_NEW`,
};

function* handleAddNew(args) {
  try {
    yield put(fetchData(args.payload));
  } catch (e) {
    // Error
  }
}

export default function* middlewareTest() {
  yield takeEvery(actionTypes.ADD_NEW_MW, handleAddNew);
}
