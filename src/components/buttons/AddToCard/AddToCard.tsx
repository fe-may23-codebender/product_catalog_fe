import { FC } from 'react';
import styles from './AddToCard.module.scss';

type Props = {};

export const AddToCard: FC<Props> = () => {
  return (
    <div className={styles.addToCard}>
      Add to cart
    </div>
  );
};
