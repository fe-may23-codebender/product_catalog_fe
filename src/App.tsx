/* eslint-disable max-len */
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';
import { Cart } from './pages/Cart';
import { FavoritesPage } from './pages/Favourites';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductCategory } from './types';
import { HomePage } from './pages/HomePage';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        {Object.values(ProductCategory).map(category => (
          <Route path={category} key={category}>
            <Route index element={<ProductsPage productCategory={category} />} />
            <Route path=":productId?" element={<ProductDetailsPage />} />
          </Route>
        ))}

        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<FavoritesPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
