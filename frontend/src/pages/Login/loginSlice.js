import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", isAuthenticated: false };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload.username;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.username = "";
    },
  },
});

export const { loginSuccess, logoutSuccess } = loginSlice.actions;
