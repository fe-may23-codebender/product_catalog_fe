import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';
import { Cart } from './pages/Cart';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductCategory } from './types';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />

        {Object.values(ProductCategory).map((category) => (
          <Route
            key={category}
            path={category}
            element={<ProductsPage productCategory={category} />}
          >
            <Route
              path={`${category}/:productId`}
              element={<ProductDetailsPage />}
            />
          </Route>
        ))}

        <Route path="cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
