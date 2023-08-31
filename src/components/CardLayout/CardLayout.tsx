import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AddToCartButton } from '../Buttons/AddToCartButton';
import { AddToFavoriteButton } from '../Buttons/AddToFavoriteButton';
import { Product } from '../../types';
import styles from './CardLayout.module.scss';

type Props = {
  className?: string;
  item: Product;
};

export const CardLayout: FC<Props> = ({ item, className = '' }) => {
  return (
    <article className={cn(styles.card, className)}>
      <Link to="/phones">
        <img
          className={styles.card__photo}
          src={`/product_catalog_fe/${item.image}`}
          alt={item.name}
        />
      </Link>

      <h2 className={styles.card__title}>{item.name}</h2>

      <div className={styles.card__price}>
        <span className={styles.card__price__now}>{`$${item.price}`}</span>
        <span className={styles.card__price__old}>{`$${item.fullPrice}`}</span>
      </div>
      <span className={styles.card__line} />

      <ul className={styles.card__characteristics}>
        <li className={styles.characteristic}>
          <span className={styles.characteristicTitle}>Screen</span>
          <span className={styles.characteristicValue}>{item.screen}</span>
        </li>
        <li className={styles.characteristic}>
          <span className={styles.characteristicTitle}>Capacity</span>
          <span className={styles.characteristicValue}>{item.capacity}</span>
        </li>
        <li className={styles.characteristic}>
          <span className={styles.characteristicTitle}>RAM</span>
          <span className={styles.characteristicValue}>{item.ram}</span>
        </li>
      </ul>
      <div className={styles.card__buttons}>
        <AddToCartButton className={styles.buttonCart} />
        <AddToFavoriteButton className={styles.buttonFavorite} />
      </div>
    </article>
  );
};
