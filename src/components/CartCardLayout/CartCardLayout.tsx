/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import cn from 'classnames';
import { ButtonType, Product } from '../../types';
import { Button } from '../Buttons/Button';
import { useAppDispatch } from '../../redux/hooks';
import * as cartService from '../../redux/slices/cartSlice';

import styles from './CartCardLayout.module.scss';
import btnStyles from '../Buttons/Button/Button.module.scss';

import minus from '../../assets/icons/minus.svg';
import grayMinus from '../../assets/icons/gray-minus.svg';
import plus from '../../assets/icons/plus.svg';

type Props = {
  product: Product;
  count: number;
};

export const CartCardLayout: FC<Props> = ({ product, count }) => {
  const dispatch = useAppDispatch();

  const addOneToOrder = () => {
    dispatch(cartService.addOneModel(product));
  };

  const removeOneFromOrder = () => {
    dispatch(cartService.removeOneModel(product));
  };

  const removeAllFromOrder = () => {
    dispatch(cartService.removeModelsByType(product));
  };

  const minusBtnIsDisabled = count <= 1;

  const currentMinusIcon = minusBtnIsDisabled ? grayMinus : minus;

  return (
    <div className={styles.card}>
      <div className={styles.card__firstBlock}>
        <button
          type="button"
          className={styles.card__delete}
          onClick={removeAllFromOrder}
        />
        <img
          className={styles.card__photo}
          src={`/product_catalog_fe/${product.image}`}
          alt={product.name}
        />
        <h2 className={styles.card__title}>{product.name}</h2>
      </div>
      <div className={styles.card__secondBlock}>
        <div className={styles.card__button}>
          <Button
            iconPath={currentMinusIcon}
            className={cn(styles.card__button__minus, {
              [btnStyles.disabled]: minusBtnIsDisabled,
            })}
            onClick={removeOneFromOrder}
            type={ButtonType.Button}
          />

          <span className={styles.card__button__count}>{count}</span>

          <Button
            iconPath={plus}
            className={styles.card__button__plus}
            onClick={addOneToOrder}
            type={ButtonType.Button}
          />
        </div>
        <span className={styles.card__price}>{`$${product.price}`}</span>
      </div>
    </div>
  );
};
