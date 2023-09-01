import { FC } from 'react';
import cn from 'classnames';
import styles from './AddToCartButton.module.scss';

type Props = {
  className?: string;
};

export const AddToCartButton: FC<Props> = ({ className = '' }) => {
  return (
    <button
      type="button"
      className={cn(styles.addToCard, className)}
      onClick={() => {}}
    >
      Add to cart
    </button>
  );
};
