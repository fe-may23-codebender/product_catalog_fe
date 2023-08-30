/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductDescription, getProductInfo } from '../../api/products';
import { ProductDetails, ProductCategory } from '../../types';

export interface ProductDetailsState {
  item: ProductDetails | null;
  loaded: boolean;
  hasError: boolean;
}

type ProductParams = {
  productCategory: ProductCategory;
  productId: string;
};

const initialState: ProductDetailsState = {
  item: null,
  loaded: false,
  hasError: false,
};

export const fecthProductDetails = createAsyncThunk(
  'productDetails/fetch',
  ({ productCategory, productId }: ProductParams) => {
    return Promise.all([
      getProductInfo(productCategory, productId),
      getProductDescription(productId),
    ]);
  },
);

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthProductDetails.pending, (state) => {
        state.loaded = false;
        state.hasError = false;
      })
      .addCase(fecthProductDetails.fulfilled, (state, action) => {
        const [productInfo, productDescription] = action.payload;

        state.item = {
          ...productInfo,
          description: productDescription,
        };

        state.hasError = false;
        state.loaded = true;
      })
      .addCase(fecthProductDetails.rejected, (state) => {
        state.loaded = true;
        state.hasError = true;
      });
  },
});

export default productDetailsSlice.reducer;
