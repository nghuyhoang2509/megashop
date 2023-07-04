import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
  user: [],
  loading: false,
  loadingChangeRole: false,
};

import {
  changeRole,
  createProduct,
  deleteProduct,
  getAllOrder,
  getAllUser,
  updateProduct,
} from "./admin.action";

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllOrder.fulfilled, (state, action) => {
      state.order = action?.payload?.data?.data || [];
      state.loading = false;
    });
    builder.addCase(getAllOrder.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getAllUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.user = action?.payload?.data?.data || [];
      state.loading = false;
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(changeRole.pending, (state, action) => {
      state.loadingChangeRole = true;
    });
    builder.addCase(changeRole.rejected, (state, action) => {
      state.loadingChangeRole = false;
    });
    builder.addCase(changeRole.fulfilled, (state, action) => {
      state.loadingChangeRole = false;
    });
  },
});

export default AdminSlice.reducer;
