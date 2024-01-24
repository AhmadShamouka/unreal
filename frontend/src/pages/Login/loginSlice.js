import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  age: "",
  country: "",
  admin: null,
  sex: "",
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.age = action.payload.age;
      state.admin = action.payload.admin;
      state.country = action.payload.country;
      state.sex = action.payload.sex;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.username = "";
      state.age = "";
      state.country = "";
      state.sex = "";
    },
  },
});

export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;
