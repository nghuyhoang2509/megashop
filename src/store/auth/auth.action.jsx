import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "./auth.api";
import { toast } from "react-toastify";

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkApi) => {
    try {
      const data = await authApi.register(payload);
      toast.success(data.data.message);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      toast.error(message);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkApi) => {
    try {
      const data = await authApi.login(payload);

      toast.success(data.data.message);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      toast.error(message);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, thunkApi) => {
    try {
      const data = await authApi.logout();
      toast.success(data.data.message);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      toast.error(message);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/get_user",
  async (payload, thunkApi) => {
    try {
      const data = await authApi.getUser();
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
