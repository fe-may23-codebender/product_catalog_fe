import { FC } from 'react';
import styles from './AddToFavourite.module.scss';

type Props = {};

export const AddToFavourite: FC<Props> = () => {
  return (
    <div className={styles.addToFavourite} />
  );
};
