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
      // check if item already exists in cart
      const item = state.items.find((item) => item.name === action.payload.name);
      if (item) {
        // if item exists, increase quantity
        item.quantity += action.payload.quantity;
        return;
      }

      state.items.push(action.payload);
    },

    /**
     * This function removes an item from the cart.
     */
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    /**
     * This function sets the quantity of an item in the cart.
     * @param state
     * @param action
     */
    setItemQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },

    /**
     * This function clears one item from the cart.
     * @param state
     * @param action
     */
    clearItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});

// export the action creator
export const { addItemToCart, setItemQuantity, clearItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
