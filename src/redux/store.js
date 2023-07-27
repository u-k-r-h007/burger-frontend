import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth:authReducer
  },
});

export default store;

export const server = " http://192.168.1.15:3000/api/v1";
