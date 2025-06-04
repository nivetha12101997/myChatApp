import { configureStore } from "@reduxjs/toolkit";
const createSagaMiddleware = require('redux-saga').default;
import { reducer } from "./reducer";
const store = configureStore({
  reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    // devTools: process.env.NODE_ENV !== 'production'

});
const sagaMiddleware = createSagaMiddleware();