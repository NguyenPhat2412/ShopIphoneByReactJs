import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import cardReducer from "../../CartPage/CartSlice.jsx";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    cart: cardReducer,
  },
});
