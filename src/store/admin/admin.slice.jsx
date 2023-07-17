import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
  user: [],
  album: [],
  loading: false,
  loadingChangeRole: false,
  loadingAlbum: false,
};

import {
  changeRole,
  createCategory,
  createProduct,
  deleteCategory,
  deleteImage,
  deleteProduct,
  editCategory,
  getAllImage,
  getAllOrder,
  getAllUser,
  updateProduct,
  uploadImage,
  deleteBrand,
  createBrand,
  editBrand,
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
    builder.addCase(deleteCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(editCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(editCategory.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(editCategory.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteBrand.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteBrand.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteBrand.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(editBrand.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(editBrand.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(editBrand.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createBrand.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createBrand.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createBrand.fulfilled, (state, action) => {
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
    builder.addCase(uploadImage.pending, (state, action) => {
      state.loadingAlbum = true;
    });
    builder.addCase(uploadImage.rejected, (state, action) => {
      state.loadingAlbum = false;
    });
    builder.addCase(uploadImage.fulfilled, (state, action) => {
      state.loadingAlbum = false;
      state.album.push(action?.payload?.data?.data);
    });
    builder.addCase(getAllImage.pending, (state, action) => {
      state.loadingAlbum = true;
    });
    builder.addCase(getAllImage.rejected, (state, action) => {
      state.loadingAlbum = false;
    });
    builder.addCase(getAllImage.fulfilled, (state, action) => {
      state.loadingAlbum = false;
      state.album = action?.payload?.data?.data || [];
    });
    builder.addCase(deleteImage.pending, (state, action) => {
      state.loadingAlbum = true;
    });
    builder.addCase(deleteImage.rejected, (state, action) => {
      state.loadingAlbum = false;
    });
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      state.loadingAlbum = false;
      const positionDelete = action.meta.arg.index;
      state.album = [
        ...state.album.slice(0, positionDelete),
        ...state.album.slice(positionDelete + 1, state.album.length),
      ];
    });
  },
});

export default AdminSlice.reducer;
