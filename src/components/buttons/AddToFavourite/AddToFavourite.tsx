import { FC } from 'react';
import styles from './AddToFavourite.module.scss';

type Props = {};

export const AddToFavourite: FC<Props> = () => {
  return (
    <button
      type="button"
      className={styles.AddToFavourite}
      onClick={() => {}}
    >
      <span />
    </button>
  );
};
