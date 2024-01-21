import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../pages/Login/loginSlice/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
