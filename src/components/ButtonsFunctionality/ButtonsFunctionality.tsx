import { FC, useMemo } from 'react';
import { AddToFavoriteButton } from '../Buttons/AddToFavoriteButton';
import { Product, ProductDetails } from '../../types';
import { AddToCartButton } from '../Buttons/AddToCartButton';
import { useAppSelector } from '../../redux/hooks';
import { selectProducts } from '../../redux/selectors';
import styles from './ButtonsFunctionality.module.scss';

type Props = {
  item: ProductDetails;
};

export const ButtonsFunctionality: FC<Props> = ({ item }) => {
  const { items } = useAppSelector(selectProducts);

  const currentProduct = useMemo(
    () => items.find(({ itemId }) => itemId === item.itemId) || null,
    [item.id],
  );

  return (
    <div className={styles.card}>
      <div className={styles.card__price}>
        <span className={styles.card__price__now}>
          {`$${item.priceRegular}`}
        </span>
        <span className={styles.card__price__old}>
          {`$${item.priceDiscount}`}
        </span>
      </div>
      <div className={styles.card__buttons}>
        {/* <AddToCartButton
          product={currentProduct as Product}
          className={styles.buttonCart}
          title={item.name}
        />
        <AddToFavoriteButton
          className={styles.buttonFavorite}
          product={currentProduct as Product}
        /> */}
      </div>
      <ul className={styles.card__characteristics}>
        <li className={styles.characteristic}>
          <span className={styles.characteristicTitle}>Screen</span>
          <span className={styles.characteristicValue}>{item.screen}</span>
        </li>
        <li className={styles.characteristic}>
          <span className={styles.characteristicTitle}>Resolution</span>
          <span className={styles.characteristicValue}>{item.capacity}</span>
        </li>
        <li className={styles.characteristic}>
          <span className={styles.characteristicTitle}>Processor</span>
          <span className={styles.characteristicValue}>{item.processor}</span>
        </li>
        <li className={styles.characteristic}>
          <span className={styles.characteristicTitle}>RAM</span>
          <span className={styles.characteristicValue}>{item.ram}</span>
        </li>
      </ul>
    </div>
  );
};
