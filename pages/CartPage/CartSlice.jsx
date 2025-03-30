import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listCart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_CART: (state, action) => {
      const { _id, quantity } = action.payload;
      const id = _id["$oid"];
      const existingItem = state.listCart.find(
        (item) => item._id["$oid"] === id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.listCart.push({ ...action.payload, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(state.listCart));
    },

    UPDATE_CART: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.listCart.find((item) => item._id["$oid"] === id);

      if (item) {
        item.quantity = quantity;
      }

      localStorage.setItem("cart", JSON.stringify(state.listCart));
    },

    DELETE_CART: (state, action) => {
      state.listCart = state.listCart.filter(
        (item) => item._id["$oid"] !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.listCart));
    },
  },
});

// Xuất action và reducer
export const { ADD_CART, UPDATE_CART, DELETE_CART } = cartSlice.actions;
export default cartSlice.reducer;
