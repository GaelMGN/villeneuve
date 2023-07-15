import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../types/types';

const initialState = {
  items: [] as Item[],
};

// cartSlice is a slice of the store
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
