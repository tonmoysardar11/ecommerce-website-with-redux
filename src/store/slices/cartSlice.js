import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const oldItem = state.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (!oldItem) {
        state.push(newItem);
      } else {
        state.map((item) => {
          if (item.id === newItem.id) {
            item.qty += newItem.qty;
          }
          return item;
        });
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartslice.actions;
export default cartslice.reducer;
