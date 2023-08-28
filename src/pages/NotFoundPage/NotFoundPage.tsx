import React from 'react';
import styles from './NotFoundPage.module.scss';
import NotFoundImg from '../../assets/images/404.svg';

export const NotFound: React.FC = () => {
  return (
  <div className={styles.Container}>
    <img src={NotFoundImg} alt='Not Found'className=''/>
    <p className={styles.Container__Text}>
      Sorry, that page doesn't seem to exist.
    </p>
    <div className={styles.Container__Button}>
      <a href="/">Start shopping</a>
    </div>
  </div>
  );
};
