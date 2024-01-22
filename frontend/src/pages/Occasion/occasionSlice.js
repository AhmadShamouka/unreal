import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UrlLink: "",
};

const occasionSlice = createSlice({
  name: "occasion",
  initialState,
  reducers: {},
});

export const { loginSuccess, logoutSuccess } = occasionSlice.actions;

export default occasionSlice.reducer;
