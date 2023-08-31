import { FC } from 'react';
import styles from './CartCardLayout.module.scss';
import { ButtonType } from '../../types';
import { Button } from '../Buttons/Button';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';

type Props = {};

export const CartCardLayout: FC<Props> = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__firstBlock}>
        <button
          type="button"
          className={styles.card__delete}
          onClick={() => {}}
        >
          <></>
        </button>
        <img
          className={styles.card__photo}
          // eslint-disable-next-line max-len
          src="https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/00.jpg"
          alt="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)"
        />
        <h2 className={styles.card__title}>
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h2>
      </div>
      <div className={styles.card__secondBlock}>
        <div className={styles.card__button}>
          <Button
            iconPath={minus}
            className={styles.card__button__minus}
            onClick={() => {}}
            type={ButtonType.Button}
          />
          <span className={styles.card__button__count}>1</span>
          <Button
            iconPath={plus}
            className={styles.card__button__plus}
            onClick={() => {}}
            type={ButtonType.Button}
          />
        </div>
        <span className={styles.card__price}>$999</span>
      </div>
    </div>
  );
};
