import { createSlice } from "@reduxjs/toolkit";
import {
  addProductAndSave,
  addProductToCart,
  deleteProductToCart,
  getCart,
  reduceProductToCart,
} from "./cart.action";
import { getCartFromLocalStorage } from "../../utils";

const initialState = {
  cart: {},
  length: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart, (state, action) => {
      const data = getCartFromLocalStorage();
      const cart = data.cart || {};
      const length = data.length || 0;
      const total = data.total || 0;
      state.cart = cart;
      state.length = length;
      state.total = total;
    });
    builder.addCase(addProductToCart, (state, action) => {
      const product = action.payload;
      if (!state.cart[product.id]) {
        state.cart[product.id] = { ...product, qtyOrder: 1 };
      } else {
        state.cart[product.id].qtyOrder += 1;
      }
      state.length += 1;
      state.total += product.price;
    });
    builder.addCase(reduceProductToCart, (state, action) => {
      const product = action.payload;
      if (state.cart[product.id] && state.cart[product.id].qtyOrder != 1) {
        state.cart[product.id].qtyOrder -= 1;
        state.length -= 1;
        state.total -= product.price;
      }
    });
    builder.addCase(deleteProductToCart, (state, action) => {
      const product = action.payload;
      const { [product.id]: productDelete, ...newCart } = state.cart;
      state.cart = newCart;
      state.length -= productDelete.qtyOrder;
      state.total -= productDelete.price * productDelete.qtyOrder;
    });
    builder.addCase(addProductAndSave.fulfilled, (state, action) => {});
  },
});

export default cartSlice.reducer;
