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
    /**
     * This function adds an item to the cart.
     * @param state
     * @param action
     */
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    /**
     * This function removes an item from the cart.
     */
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    /**
     * This function clears the cart.
     * @param state
     * @param action
     */
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

// export the action creator
export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
