import { configureStore } from "@reduxjs/toolkit";
import login from "../pages/Login/loginSlice";
import occasion from "../pages/Occasion/occasionSlice";
const store = configureStore({
  reducer: {
    login: login,
    occasion: occasion,
  },
});

export default store;
