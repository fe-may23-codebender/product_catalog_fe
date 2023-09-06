import { FC, useMemo } from 'react';
import cn from 'classnames';
import { ButtonType, Product } from '../../../types';
import { Button } from '../Button';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectFavorites } from '../../../redux/selectors';
import * as favoritesService from '../../../redux/slices/favoritesSlice';

import styles from './AddToFavoriteButton.module.scss';
import buttonStyles from '../Button/Button.module.scss';

type Props = {
  product: Product;
  className?: string;
};

export const AddToFavoriteButton: FC<Props> = ({ product, className = '' }) => {
  const dispatch = useAppDispatch();

  const favoriteProducts = useAppSelector(selectFavorites);

  const isFavoriteProduct = useMemo(
    () => favoriteProducts.some(({ itemId }) => itemId === product.itemId),
    [favoriteProducts, product],
  );

  const toggleFavoriteProduct = () => {
    if (!isFavoriteProduct) {
      dispatch(favoritesService.add(product));

      return;
    }

    dispatch(favoritesService.remove(product.id));
  };

  return (
    <Button
      type={ButtonType.Button}
      className={cn(styles.AddToFavBtn, className, {
        [buttonStyles.element]: isFavoriteProduct,
      })}
      onClick={toggleFavoriteProduct}
    >
      <div
        className={cn(styles.AddToFavBtnIcon, {
          [styles.selected]: isFavoriteProduct,
        })}
      />
    </Button>
  );
};
