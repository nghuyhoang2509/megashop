import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { setCartToLocalStorage } from "../../utils";

export const getCart = createAction("cart/get");

export const addProductToCart = createAction("cart/add");

export const reduceProductToCart = createAction("cart/reduce");

export const deleteProductToCart = createAction("cart/delete");

export const addProductAndSave = createAsyncThunk(
  "cart/add_product_and_save",
  async (payload, thunkApi) => {
    await thunkApi.dispatch(addProductToCart(payload));
    setCartToLocalStorage(thunkApi.getState().cart);
  }
);

export const reduceProductAndSave = createAsyncThunk(
  "cart/add_product_and_save",
  async (payload, thunkApi) => {
    await thunkApi.dispatch(reduceProductToCart(payload));
    setCartToLocalStorage(thunkApi.getState().cart);
  }
);

export const deleteProductAndSave = createAsyncThunk(
  "cart/add_product_and_save",
  async (payload, thunkApi) => {
    await thunkApi.dispatch(deleteProductToCart(payload));
    setCartToLocalStorage(thunkApi.getState().cart);
  }
);
