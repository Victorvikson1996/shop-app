import { createSlice } from "@reduxjs/toolkit";

import { Products } from "../utils";

const initialState = Products;

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
});

export default ProductSlice.reducer;
