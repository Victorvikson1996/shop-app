import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer, { fetchProducts } from "./ProductSlice";
import { ProductsApi } from "../utils/api/ProductsApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});

store.dispatch(fetchProducts());

export default store;
