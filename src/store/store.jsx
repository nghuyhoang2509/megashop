import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import productReducer from "./product/product.slice";
import cartReducer from "./cart/cart.slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});
