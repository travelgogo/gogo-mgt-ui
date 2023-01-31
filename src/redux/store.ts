// import { createStore, compose } from 'redux';
// import rootReducer from './reducers'

// const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const initialState = {}

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeEnhancers()
// )

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import tourSaga from './saga/tour';
import authReducer from './reducers/auth';
import tourReducer from './reducers/tour';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer:{
    auth: authReducer,
    tour: tourReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false
    }).concat(sagaMiddleware)
})
sagaMiddleware.run(tourSaga);

export default store;