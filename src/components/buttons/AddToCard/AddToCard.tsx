import { FC } from 'react';
import styles from './AddToCard.module.scss';

type Props = {};

export const AddToCard: FC<Props> = () => {
  return (
    <button
      type="button"
      className={styles.addToCard}
      onClick={() => {}}
    >
      Add to cart
    </button>
  );
};
