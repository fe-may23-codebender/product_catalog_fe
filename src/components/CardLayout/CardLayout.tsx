import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './CardLayout.module.scss';
import { AddToCard } from '../Buttons/AddToCard';
import { Button } from '../Buttons/Button';
import { ButtonType } from '../../types';
import favourite from '../../assets/icons/like-button.svg';

type Props = {};

export const CardLayout: FC<Props> = () => {
  return (
    <div className={styles.card}>
      <Link to="/phones">
        <img
          className={styles.card__photo}
          // eslint-disable-next-line max-len
          src="https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/00.jpg"
          alt="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)"
        />
      </Link>
      <Link to="/phones">
        <h2 className={styles.card__title}>
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h2>
      </Link>
      <div className={styles.card__price}>
        <span className={styles.card__price__now}>$999</span>
        <span className={styles.card__price__old}>$1000</span>
      </div>
      <span className={styles.card__line} />

      <ul className={styles.card__characteristics}>
        <li className={styles.characteristic}>
          <div>Screen</div>
          <div>6.1” OLED</div>
        </li>
        <li className={styles.characteristic}>
          <div>Capacity</div>
          <div>128 GB</div>
        </li>
        <li className={styles.characteristic}>
          <div>RAM</div>
          <div>6 GB</div>
        </li>
      </ul>
      <div className={styles.card__button}>
        <AddToCard />
        <Button
          iconPath={favourite}
          className={styles.card__button__favourite}
          onClick={() => {}}
          type={ButtonType.Button}
        />
      </div>
    </div>
  );
};
