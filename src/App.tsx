import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PhonePage } from './pages/PhonesPage';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/NotFoundPage';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="phones" element={<PhonePage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
