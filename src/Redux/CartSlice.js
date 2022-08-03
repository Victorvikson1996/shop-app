import { createSlice } from "@reduxjs/toolkit";

// import { Products } from "../utils";

const initialState = {
  items: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return (state = state.filter((item) => item.id !== action.payload));
    },

    clearCart: (state) => {
      state.items = [];
    },

    increase: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.items.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { add, remove, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
