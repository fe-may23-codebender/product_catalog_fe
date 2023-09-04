/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { ButtonType } from '../../types';
import { Button } from '../Buttons/Button';
import { useAppSelector } from '../../redux/hooks';
import { selectFavorites } from '../../redux/selectors';

import favorite from '../../assets/icons/like-button.svg';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const FavoriteLink: FC<Props> = ({ onClick, className = '' }) => {
  const favoriteProducts = useAppSelector(selectFavorites);

  return (
    <Button
      type={ButtonType.Link}
      to="favorites"
      iconPath={favorite}
      className={className}
      badge={favoriteProducts.length}
      onClick={onClick}
    />
  );
};
