import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { setCartToLocalStorage } from "../../utils";
import * as cartApi from "./cart.api";
import { toast } from "react-toastify";

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

export const createOrder = createAsyncThunk(
  "cart/order",
  async (payload, thunkApi) => {
    try {
      const products = thunkApi.getState().cart;
      const body = {
        ...payload,
        products: Object.values(products.cart),
      };
      const data = await cartApi.createOrder(body);
      toast.success("Đặt hàng thành công");
      setCartToLocalStorage({ cart: {}, length: 0, total: 0 });
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Lỗi không xác định");
      return thunkApi.rejectWithValue();
    }
  }
);
