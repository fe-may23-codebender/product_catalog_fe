import { RootState } from './store';

export const selectProducts = (state: RootState) => state.products;
export const selectProductDetails = (state: RootState) => state.productDetails;
export const selectFavorites = (state: RootState) => state.favorites;
export const selectCart = (state: RootState) => state.cart;
