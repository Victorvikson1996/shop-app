import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { store } from "./src/Redux/store";
import cartReducer from "./src/Redux/CartSlice";
import productReducer, { fetchProducts } from "./src/Redux/ProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

store.dispatch(fetchProducts());

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
