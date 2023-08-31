import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage';
import { Cart } from './pages/Cart';
import { PhonesDetailsPage } from './pages/PhoneDetailsPage/PhoneDetailsPage';
import { HomePage } from './pages/HomePage/HomePage';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="cart" element={<Cart />} />

        <Route path="phones" element={<PhonesPage />}>
          <Route path="phones/:productId" element={<PhonesDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
