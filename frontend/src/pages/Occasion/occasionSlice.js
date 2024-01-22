import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UrlLink: "",
};

const occasionSlice = createSlice({
  name: "occasion",
  initialState,
  reducers: {
    occasionCreated(state, action) {
      state.UrlLink = action.payload.UrlLink;
    },
  },
});

export const { loginSuccess, logoutSuccess } = occasionSlice.actions;

export default occasionSlice.reducer;
