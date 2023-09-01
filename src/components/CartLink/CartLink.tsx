/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { ButtonType } from '../../types';
import { Button } from '../Buttons/Button';

import basket from '../../assets/icons/shopping-bag.svg';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const CartLink: FC<Props> = ({ className = '', onClick = () => {} }) => {
  const count = 12;

  return (
    <Button
      type={ButtonType.Link}
      to="cart"
      iconPath={basket}
      className={className}
      badge={count}
      onClick={onClick}
    />
  );
};
