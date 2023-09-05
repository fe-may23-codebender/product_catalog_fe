/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { ButtonType } from '../../types';
import { Button } from '../Buttons/Button';
import { useAppSelector } from '../../redux/hooks';
import { selectCart } from '../../redux/selectors';

import basket from '../../assets/icons/shopping-bag.svg';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const CartLink: FC<Props> = ({ className = '', onClick = () => {} }) => {
  const { totalCount } = useAppSelector(selectCart);

  return (
    <Button
      type={ButtonType.Link}
      to="cart"
      iconPath={basket}
      className={className}
      badge={totalCount}
      onClick={onClick}
    />
  );
};
