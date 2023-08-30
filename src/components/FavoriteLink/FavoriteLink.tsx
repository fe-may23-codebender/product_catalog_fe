/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { ButtonType } from '../../types';
import { Button } from '../Buttons/Button';

import favorite from '../../assets/icons/like-button.svg';

type Props = {
  className?: string;
};

export const FavoriteLink: FC<Props> = ({ className = '' }) => {
  const count = 12;

  return (
    <Button
      type={ButtonType.Link}
      to="favorites"
      iconPath={favorite}
      className={className}
      badge={count}
    />
  );
};
