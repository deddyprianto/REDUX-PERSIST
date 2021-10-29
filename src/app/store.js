import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/app/appSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  app: appSlice,
});
// config
const persistCongif = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistCongif, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export default store;
