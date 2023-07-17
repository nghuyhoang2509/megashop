import { createSlice } from "@reduxjs/toolkit";
import {
  getAllBrand,
  getAllCategory,
  getAllProduct,
  getProduct,
  getProductByBrand,
  getProductByCategory,
} from "./product.action";

const initialState = {
  products: {
    loading: false,
    data: [],
  },
  categories: {
    loading: false,
    data: [],
  },
  product: {
    loading: false,
    data: null,
  },
  brands: {
    loading: false,
    data: [],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.pending, (state, action) => {
      state.categories.loading = true;
    });
    builder.addCase(getAllCategory.rejected, (state, action) => {
      state.categories.loading = false;
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.categories.loading = false;
      state.categories.data = action.payload.data.data;
    });
    builder.addCase(getAllBrand.pending, (state, action) => {
      state.brands.loading = true;
    });
    builder.addCase(getAllBrand.rejected, (state, action) => {
      state.brands.loading = false;
    });
    builder.addCase(getAllBrand.fulfilled, (state, action) => {
      state.brands.loading = false;
      state.brands.data = action.payload.data.data;
    });
    builder.addCase(getAllProduct.pending, (state, action) => {
      state.products.loading = true;
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.products.loading = false;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.products.loading = false;
      state.products.data = action.payload.data.data;
    });
    builder.addCase(getProductByCategory.pending, (state, action) => {
      state.products.loading = true;
    });
    builder.addCase(getProductByCategory.rejected, (state, action) => {
      state.products.loading = false;
    });
    builder.addCase(getProductByCategory.fulfilled, (state, action) => {
      state.products.loading = false;
      state.products.data = action.payload.data.data.products;
    });
    builder.addCase(getProductByBrand.pending, (state, action) => {
      state.brands.loading = true;
    });
    builder.addCase(getProductByBrand.rejected, (state, action) => {
      state.brands.loading = false;
    });
    builder.addCase(getProductByBrand.fulfilled, (state, action) => {
      state.brands.loading = false;
      state.brands.data = action.payload.data.data.products;
    });
    builder.addCase(getProduct.pending, (state, action) => {
      state.product.loading = true;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.product.loading = false;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product.loading = false;
      state.product.data = action.payload.data.data;
    });
  },
});

export default productSlice.reducer;
