import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import styles from './Layout.module.scss';
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
        <GoToTopButton />
      </main>
      <Footer />
    </>
  );
};
