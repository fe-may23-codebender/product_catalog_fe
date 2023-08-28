import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PhonePage } from './pages/PhonesPage';
import { Layout } from './layouts/Layout';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="phones" element={<PhonePage />} />

        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  );
};
