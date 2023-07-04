import { createAsyncThunk } from "@reduxjs/toolkit";
import * as AdminApi from "./admin.api";
import { toast } from "react-toastify";

export const getAllOrder = createAsyncThunk(
  "admin/order",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.getAllOrder();
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const getAllUser = createAsyncThunk(
  "admin/user",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.getAllUser();
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "admin/create_product",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.createProduct(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "admin/delete_product",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.deleteProduct(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "admin/update_product",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.updateProduct(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const changeRole = createAsyncThunk(
  "admin/change_role",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.changeRole(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);
