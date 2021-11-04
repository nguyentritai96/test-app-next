// Libraries
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// Middleware
import rootSaga from '@store/saga';
import rootReducer from '@store/rootReducer';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  // const isServer = typeof window === 'undefined';

  // if (!isServer) {
  //   // 1: Create the middleware
  //   const sagaMiddleware = createSagaMiddleware();

  //   // 2: Add an extra parameter for applying middleware:
  //   const store = configureStore({
  //     reducer: rootReducer,
  //     middleware: [sagaMiddleware],
  //   });

  //   // 3: Run your sagas on server
  //   (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  //   // 4: now return the store:
  //   return store;
  // }

  // we need it only on client side

  const persistConfig = {
    key: 'LIKE_GIA_RE',
    whitelist: ['Test'], // make sure it does not clash with server keys
    stateReconciler: autoMergeLevel2,
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
  });

  store.persistor = persistStore(store); // Nasty hack

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<Store>(makeStore, { debug: true });
