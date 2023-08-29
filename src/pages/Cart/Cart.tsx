import React from 'react';
import container from '../../styles/utils/container.module.scss';
import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
  return (
    <div className={`${container.limit} ${styles.Container}`}>
      <p className={styles.Container__Top}>
        Back
      </p>
      <h1 className={styles.Container__Text}>
        Cart
      </h1>
      <div className={styles.Container__Content}>
        <div className={styles.Container__Content__ItemContainer}>
          <div className={styles.Container__Content__ItemContainer__CartItem}>Item</div>
          <div className={styles.Container__Content__ItemContainer__CartItem}>Item</div>
          <div className={styles.Container__Content__ItemContainer__CartItem}>Item</div>
        </div>

        <div className={styles.Container__Content__TotalContainer}>Total</div>
      </div>
    </div>
  );
};
