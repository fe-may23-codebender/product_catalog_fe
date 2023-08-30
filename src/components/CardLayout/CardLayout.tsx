import { FC } from 'react';
import styles from './CardLayout.module.scss';
import { AddToCard } from '../Buttons/AddToCard';
import { AddToFavourite } from '../Buttons/AddToFavourite';
import { Product } from '../../types';

type Props = {
  item: Product,
};

export const CardLayout: FC<Props> = ({ item }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__photo}
        src={`/${item.image}`}
        alt={item.name}
      />

      <h2 className={styles.card__title}>
        {item.name}
      </h2>
      <div className={styles.card__price}>
        <span className={styles.card__price__now}>{item.price}</span>
        <span className={styles.card__price__old}>{item.fullPrice}</span>
      </div>
      <span className={styles.card__line} />

      <ul className={styles.card__characteristics}>
        <li className={styles.characteristic}>
          <div>Screen</div>
          <div>{item.screen}</div>
        </li>
        <li className={styles.characteristic}>
          <div>Capacity</div>
          <div>{item.capacity}</div>
        </li>
        <li className={styles.characteristic}>
          <div>RAM</div>
          <div>{item.ram}</div>
        </li>
      </ul>
      <div className={styles.card__button}>
        <AddToCard />
        <AddToFavourite />
      </div>
    </div>
  );
};
