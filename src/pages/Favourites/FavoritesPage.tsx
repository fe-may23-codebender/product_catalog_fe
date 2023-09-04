import { FC } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useAppSelector } from '../../redux/hooks';
import { selectFavorites } from '../../redux/selectors';
import { ProductsList } from '../../components/ProductsList';
import container from '../../styles/utils/container.module.scss';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage: FC = () => {
  const favoritesProducts = useAppSelector(selectFavorites);

  const productsCount = favoritesProducts.length;

  return (
    <div className={`${container.limit} ${styles.Container}`}>
      <p className={styles.Container__Top}>
        <Breadcrumbs />
      </p>
      <h1 className={styles.title}>Favorites</h1>
      <h3 className={styles.text}>{`${productsCount} items`}</h3>

      {productsCount < 1 && (
        <p className={styles.emptyMessage}>
          You have not added anything to Favorites yet
        </p>
      )}

      <ProductsList
        products={favoritesProducts}
        className={styles.products}
      />
    </div>
  );
};
