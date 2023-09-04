/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';
import { getTotalPrice } from '../../helpers/getTotalPrice';

const CART = 'cart';

export interface CartState {
  items: Product[];
  totalPrice: number;
}

const storageValue = localStorage.getItem(CART);
const parsedValue: Product[] = storageValue ? JSON.parse(storageValue) : [];

const initialState: CartState = {
  items: parsedValue,
  totalPrice: getTotalPrice(parsedValue),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;

      localStorage.setItem(CART, JSON.stringify(state.items));
    },
    remove: (state, action: PayloadAction<Product>) => {
      const newItems = state.items.filter((product) => (
        product.id !== action.payload.id
      ));

      state.items = newItems;
      state.totalPrice -= action.payload.price;

      localStorage.setItem(CART, JSON.stringify(newItems));
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
