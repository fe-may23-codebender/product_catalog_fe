import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
