import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import productReducer from "./product/product.slice";
import cartReducer from "./cart/cart.slice";
import adminReducer from "./admin/admin.slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});
