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
  initialState: {
    items: [], //produts: [],
    amount: 0, //qantifty: 0,
    total: 0, //total: 0,
    quantity: 0,
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    add: (state, action) => {
      state.quantity += 1;
      state.items.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      state.id = action.payload.id;
    },

    // remove(state, action) {
    //   return (state = state.filter((item) => item.id !== action.payload));
    // },

    // remove(state, action) {
    //   const id = action.payload;
    //   const existingItem = state.items.find((item) => item.id === id);
    //   if (existingItem.quantity === 1) {
    //     state.items = state.items.filter((item) => item.id !== id);
    //   } else {
    //     existingItem.quantity--;
    //     existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
    //   }
    //   state.totalQuantity--;
    //   state.totalAmount = state.totalAmount - existingItem.price;
    // },

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
    remove: (state, action) => {
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
      state.items.splice(
        state.items.findIndex((index) => index.id === action.payload.id),
        1
      );
    },
  },
});

export const { add, remove, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
