import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

const CART = 'cart';

const storageValue = localStorage.getItem(CART);

const initialState: Product[] = storageValue ? JSON.parse(storageValue) : [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
      localStorage.setItem(CART, JSON.stringify(state));
    },
    remove: (state, action: PayloadAction<string>) => {
      const newState = state.filter((product) => product.id !== action.payload);

      localStorage.setItem(CART, JSON.stringify(newState));

      return newState;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
