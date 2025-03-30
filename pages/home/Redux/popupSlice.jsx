// Tao redux slice cho popup

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  product: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    SHOW_POPUP: (state, action) => {
      state.isOpen = true;
      state.product = action.payload;
    },
    HIDE_POPUP: (state) => {
      state.isOpen = false;
      state.product = null;
    },
  },
});

export const { SHOW_POPUP, HIDE_POPUP } = popupSlice.actions;
export default popupSlice.reducer;
