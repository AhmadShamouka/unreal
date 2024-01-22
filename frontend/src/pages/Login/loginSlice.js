import { createSlice } from "@reduxjs/toolkit";
import { UseSelector } from "react-redux";
const initialState = {
  username: "",
  age: "",
  country: "",
  sex: "",
  isAuthenticated: false,
};
const { UrlLink } = useSelector((state) => state.occasion);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.age = action.payload.age;
      state.country = action.payload.country;
      state.sex = action.payload.sex;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.username = "";
      state.username = "";
      state.age = "";
      state.country = "";
      state.sex = "";
    },
  },
});

export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;
