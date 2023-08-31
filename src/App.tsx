import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage';
import { Cart } from './pages/Cart';
import { PhonesDetailsPage } from './pages/PhoneDetailsPage/PhoneDetailsPage';
import { FavoritesPage } from './pages/Favourites';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<FavoritesPage />} />

        <Route path="phones" element={<PhonesPage />}>
          <Route path="phones/:productId" element={<PhonesDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
