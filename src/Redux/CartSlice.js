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
    // total: 0, //total: 0,
    // quantity: 0,
    totalQuantity: 0,
    totalAmount: 0,
    products: [],
    quantity: 0,
    total: 0,
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

    incrementQuantity: (state, action) => {
      state.total += action.payload.price;
      state.items = state.items.map((index) => {
        if (index.id === action.payload.id) {
          return { ...index, quantity: index.quantity + 1 };
        } else {
          return index;
        }
      });
    },

    decrementQuantity: (state, action) => {
      state.total -= action.payload.price;
      state.items = state.items.map((index) => {
        if (index.id === action.payload.id) {
          return { ...index, quantity: index.quantity - 1 };
        } else {
          return index;
        }
      });
    },
    remove: (state, action) => {
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
      state.items.splice(
        state.items.findIndex((index) => index.id === action.payload.id),
        1
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.quantity = 0;
      state.total = 0;
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

export const {
  add,
  incrementQuantity,
  clearCart,
  remove,
  decrementQuantity,
  calculateTotals,
} = CartSlice.actions;

export default CartSlice.reducer;
