import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PhonePage } from './pages/PhonesPage/PhonesPage';

type Props = {};

export const App: FC<Props> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="phones" element={<PhonePage />} />

        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  );
};
