import { createAsyncThunk } from "@reduxjs/toolkit";
import * as productApi from "./product.api";
import { toast } from "react-toastify";

export const getAllCategory = createAsyncThunk(
  "product/get_all_category",
  async (payload, thunkApi) => {
    try {
      const data = await productApi.getAllCategory();
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getAllProduct = createAsyncThunk(
  "product/get_all_product",
  async (payload, thunkApi) => {
    try {
      const data = await productApi.getAllProduct();
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getProductByCategory = createAsyncThunk(
  "product/get_product_by_category",
  async (payload, thunkApi) => {
    try {
      const data = await productApi.getProductByCategory(payload);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/get_product",
  async (payload, thunkApi) => {
    try {
      const data = await productApi.getProduct(payload);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
