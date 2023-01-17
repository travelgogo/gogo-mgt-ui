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

import {} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer:{
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store;