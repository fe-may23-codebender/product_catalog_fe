import { FC } from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

export const Layout: FC<Props> = () => {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
