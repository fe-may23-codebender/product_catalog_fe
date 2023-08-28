import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

type Props = {};

export const App: FC<Props> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/phones" element={<h1>Phone catalog page</h1>} />

        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  );
};
