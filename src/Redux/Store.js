import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer, { fetchProducts } from "./ProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

store.dispatch(fetchProducts());
