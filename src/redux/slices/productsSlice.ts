/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';
import { Product, CategoryMap } from '../../types';
import { getProductsCount } from '../../helpers/getProductsCount';

export interface ProductsState {
  items: Product[];
  loaded: boolean;
  hasError: boolean;
  groups: CategoryMap;
}

const initialState: ProductsState = {
  items: [],
  loaded: false,
  hasError: false,
  groups: {
    phones: 0,
    tablets: 0,
    accessories: 0,
  },
};

export const fecthProducts = createAsyncThunk('products/fetch', () => {
  return getProducts();
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthProducts.pending, (state) => {
        state.loaded = false;
        state.hasError = false;
      })
      .addCase(fecthProducts.fulfilled, (state, action) => {
        state.groups = getProductsCount(action.payload);

        state.loaded = true;
        state.items = action.payload;
      })
      .addCase(fecthProducts.rejected, (state) => {
        state.loaded = true;
        state.hasError = true;
      });
  },
});

export default productsSlice.reducer;
