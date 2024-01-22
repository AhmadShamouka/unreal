import { configureStore } from "@reduxjs/toolkit";
import login from "../pages/Login/loginSlice";

const store = configureStore({
  reducer: {
    login: login,
  },
});

export default store;
