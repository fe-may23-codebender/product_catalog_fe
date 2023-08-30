import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import productDetailsReducer from './slices/productDetailsSlice';
import favoritesReducer from './slices/favoritesSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
