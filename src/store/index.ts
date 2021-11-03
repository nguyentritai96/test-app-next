// Libraries
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { Store } from 'redux';

// Middleware
import rootSaga from '@store/saga';
import rootReducer from '@store/rootReducer';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<Store>(makeStore, { debug: true });
