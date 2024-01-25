import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ItemName: "",
};
const ChooseItemSlice = createSlice({
  name: "chooseItem",
  initialState,
  reducers: {
    ItemChoosen(state, action) {
      state.ItemName = action.payload.ItemName;
    },
  },
  ItemDeleted: (builder) => {
    builder.addCase(logoutSuccess, (state) => {
      state.ItemName = "";
    });
  },
});

export const { ItemChoosen, ItemDeleted } = ChooseItemSlice.actions;

export default ChooseItemSlice.reducer;
