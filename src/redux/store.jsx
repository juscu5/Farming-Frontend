import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";

const initialState = {};
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk middleware if needed
  initialState,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
