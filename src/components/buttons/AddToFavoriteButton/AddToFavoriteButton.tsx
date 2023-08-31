import { FC } from 'react';
import cn from 'classnames';
import { ButtonType } from '../../../types';
import { Button } from '../Button';

import styles from './AddToFavoriteButton.module.scss';
import buttonStyles from '../Button/Button.module.scss';

type Props = {
  className?: string;
};

export const AddToFavoriteButton: FC<Props> = ({ className = '' }) => {
  return (
    <Button
      type={ButtonType.Button}
      className={cn(styles.AddToFavBtn, className, {
        [buttonStyles.element]: false,
      })}
    >
      <div
        className={cn(styles.AddToFavBtnIcon, {
          [styles.selected]: false,
        })}
      />
    </Button>
  );
};
