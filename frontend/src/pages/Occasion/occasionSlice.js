import { createSlice } from "@reduxjs/toolkit";
import { logoutSuccess } from "../Login/loginSlice";
const initialState = {
  UrlLink: "",
};
const occasionSlice = createSlice({
  name: "occasion",
  initialState,
  reducers: {
    occasionCreated(state, action) {
      state.UrlLink = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutSuccess, (state) => {
      state.UrlLink = "";
    });
  },
});

export const { occasionCreated, extraReducers } = occasionSlice.actions;

export default occasionSlice.reducer;
