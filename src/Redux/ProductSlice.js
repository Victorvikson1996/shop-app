import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Products } from "../utils";

const initialState = {
  items: [],
  status: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    return response?.data;
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "Successful";
      state.items = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "Error";
    },
  },
});

export default ProductSlice.reducer;
