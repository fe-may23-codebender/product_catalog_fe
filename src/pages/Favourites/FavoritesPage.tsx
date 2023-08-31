import React from 'react';
import container from '../../styles/utils/container.module.scss';
import styles from './FavoritesPage.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { CardLayout } from '../../components/CardLayout';
import { Product } from '../../types';

const item = {
  id: '48',
  category: 'phones',
  phoneId: 'apple-iphone-xs-max-64gb-spacegray',
  itemId: 'apple-iphone-xs-max-64gb-spacegray',
  name: 'Apple iPhone XS Max 64GB Spacegray',
  fullPrice: 960,
  price: 900,
  screen: "6.5' OLED",
  capacity: '64GB',
  color: 'spacegray',
  ram: '4GB',
  year: 2018,
  image: 'img/phones/apple-iphone-xs-max/spacegray/00.jpg',
} as Product;

const itemsLength = 4;

export const FavoritesPage: React.FC = () => {
  return (
    <div className={`${container.limit} ${styles.Container}`}>
      <p className={styles.Container__Top}>
        <Breadcrumbs />
      </p>
      <h1 className={styles.title}>Favorites</h1>
      <h3 className={styles.text}>{`${itemsLength} items`}</h3>
      {itemsLength < 1 && (
        <p className={styles.emptyMessage}>
          You have not added anything to Favorites yet
        </p>
      )}

      <div className={styles.product}>
        <CardLayout
          className={styles.product__card}
          item={item}
        />
        <CardLayout
          className={styles.product__card}
          item={item}
        />
        <CardLayout
          className={styles.product__card}
          item={item}
        />
        <CardLayout
          className={styles.product__card}
          item={item}
        />
      </div>
    </div>
  );
};
