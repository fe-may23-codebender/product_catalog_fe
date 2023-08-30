import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import container from '../../styles/utils/container.module.scss';
import styles from './Cart.module.scss';
import arrowLeft from '../../assets/icons/black-arrows/arrow-left.svg';
import { Modal } from './Modal';

export const Cart: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function onHandleClick() {
    setIsModalOpened(true);
  }

  return (
    <>
      {isModalOpened && <Modal onHandleModalClose={setIsModalOpened} />}
      <div className={`${container.limit} ${styles.Container}`}>
        <p className={styles.Container__Top}>
          <Link to="/" className={styles.BackLink}>
            <img src={arrowLeft} alt="Back" />
            Back
          </Link>
        </p>
        <h1 className={styles.Container__Text}>Cart</h1>
        <div className={styles.Container__Content}>
          <div className={styles.ItemContainer}>
            <div className={styles.ItemContainer__CartItem}>Item</div>
            <div className={styles.ItemContainer__CartItem}>Item</div>
            <div className={styles.ItemContainer__CartItem}>Item</div>
          </div>
          <div className={styles.TotalContainer}>
            <div className={styles.TotalContainer__Price}>
              <h2 className={styles.TotalContainer__Price__Amount}>$2657</h2>
              <p className={styles.TotalContainer__Price__Title}>
                Total for 3 items
              </p>
            </div>
            <button
              type="button"
              className={styles.TotalContainer__Button}
              onClick={onHandleClick}
            >
              Chechout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
