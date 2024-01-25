import { configureStore } from "@reduxjs/toolkit";
import login from "../pages/Login/loginSlice";
import occasion from "../pages/Occasion/occasionSlice";
import chooseItem from "../pages/ChooseItem/ChooseItemSlice";
const store = configureStore({
  reducer: {
    login: login,
    occasion: occasion,
    chooseItem: chooseItem,
  },
});

export default store;
