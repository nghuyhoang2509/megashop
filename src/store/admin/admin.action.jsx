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

export const deleteCategory = createAsyncThunk(
  "admin/delete_category",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.deleteCategory(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const editCategory = createAsyncThunk(
  "admin/edit_category",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.editCategory(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const createCategory = createAsyncThunk(
  "admin/create_category",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.createCategory(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "admin/delete_brand",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.deleteBrand(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const editBrand = createAsyncThunk(
  "admin/edit_brand",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.editBrand(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const createBrand = createAsyncThunk(
  "admin/create_brand",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.createBrand(payload);
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

export const uploadImage = createAsyncThunk(
  "admin/upload_image",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.uploadImage(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteImage = createAsyncThunk(
  "admin/delete_image",
  async (payload, thunkApi) => {
    try {
      await AdminApi.deleteImage(payload);
      return payload;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);

export const getAllImage = createAsyncThunk(
  "admin/get_image",
  async (payload, thunkApi) => {
    try {
      const data = await AdminApi.getAllImage(payload);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Có lỗi xảy ra");
      thunkApi.rejectWithValue(error);
    }
  }
);
