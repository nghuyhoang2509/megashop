import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getUser } from "./auth.action";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data.data;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data.data;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.data.data;
    });
  },
});

export default authSlice.reducer;
