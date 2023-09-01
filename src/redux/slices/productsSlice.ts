/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';
import { ApiData, ApiOptions } from '../../types';

export interface ProductsState {
  data: ApiData;
  loaded: boolean;
  hasError: boolean;
}

const initialState: ProductsState = {
  data: {
    items: [],
    countByGroup: {
      phones: 0,
      tablets: 0,
      accessories: 0,
    },
  },
  loaded: false,
  hasError: false,
};

export const fecthProducts = createAsyncThunk(
  'products/fetch',
  (options: Partial<ApiOptions>) => {
    return getProducts(options);
  },
);

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
        state.loaded = true;
        state.data.items = action.payload.items;
        state.data.countByGroup = action.payload.countByGroup;
      })
      .addCase(fecthProducts.rejected, (state) => {
        state.loaded = true;
        state.hasError = true;
      });
  },
});

export default productsSlice.reducer;
