import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AddToCard } from '../Buttons/AddToCard';
import { Button } from '../Buttons/Button';
import { ButtonType } from '../../types';
import styles from './CardLayout.module.scss';

import favourite from '../../assets/icons/like-button.svg';

type Props = {
  item: Product,
};

export const CardLayout: FC<Props> = ({ item }) => {
  return (
    <div className={styles.card}>
      <Link to="/phones">
        <img
          className={styles.card__photo}
          src={`/${item.image}`}
          alt={item.name}
        />
      </Link>
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
