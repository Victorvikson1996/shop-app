import { createSlice } from "@reduxjs/toolkit";

import { Products } from "../utils";

const initialState = Products;

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default CartSlice.reducer;
