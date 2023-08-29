/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { ButtonType, SearchParams } from '../../../types';
import { SearchLink } from '../../SearchLink';
import styles from './Button.module.scss';

type CommonProps = {
  className?: string;
  iconPath?: string;
  onClick?: () => void;
  children?: ReactNode;
};

type SearchLinkProps = {
  type: ButtonType.Search;
  params: SearchParams;
};

type ButtonProps = {
  type: ButtonType.Button;
};

type Props = CommonProps & (ButtonProps | SearchLinkProps);

export const Button: FC<Props> = (props) => {
  const {
    type,
    className = '',
    onClick = () => {},
    iconPath = '',
    children,
  } = props;

  const buttonClassnames = cn(styles.container, className);

  const commonProps = {
    className: buttonClassnames,
    onClick,
  };

  const componentChildren = (
    <>{iconPath ? <img src={props.iconPath} alt="icon" /> : children}</>
  );

  if (type === ButtonType.Search) {
    return (
      <SearchLink params={props.params} {...commonProps}>
        {componentChildren}
      </SearchLink>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {componentChildren}
    </button>
  );
};
