/* eslint-disable react/require-default-props */
import { FC, useState, useRef } from 'react';
import cn from 'classnames';
import { SearchLink } from '../SearchLink';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SearchParams } from '../../types';
import styles from './Dropdown.module.scss';

import arrowUp from '../../assets/icons/black-arrows/arrow-up.svg';
import arrowdown from '../../assets/icons/black-arrows/arrow-down.svg';

type Props = {
  label: string;
  searchParamName: string;
  startValue: string;
  options: Record<string, string>;
  additionalSearhParams?: SearchParams;
  className?: string;
};

export const Dropdown: FC<Props> = (props) => {
  const {
    label,
    searchParamName,
    startValue,
    options,
    additionalSearhParams = {},
    className = '',
  } = props;

  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState(startValue);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const disableDropdown = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  const changeOption = (newOption: string) => {
    setOption(newOption);
    disableDropdown();
  };

  const getSearchParams = (paramValue: string) => {
    const params: SearchParams = {
      [searchParamName]: paramValue,
    };

    const additionalParams = Object.entries(additionalSearhParams);

    if (additionalParams.length) {
      additionalParams.forEach(([key, value]) => {
        params[key] = value;
      });
    }

    return params;
  };

  useClickOutside(dropdownRef, disableDropdown);

  return (
    <div
      className={cn(styles.container, className, { [styles.active]: isActive })}
      ref={dropdownRef}
    >
      <span className={styles.label}>{label}</span>

      <button
        className={styles.trigger}
        type="button"
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        <span className={styles.text}>{option}</span>

        <div className={styles.icons}>
          <img
            src={arrowdown}
            alt="down"
            className={cn(styles.icon, styles['icon--down'])}
          />

          <img
            src={arrowUp}
            alt="up"
            className={cn(styles.icon, styles['icon--up'])}
          />
        </div>
      </button>

      <ul className={styles.list}>
        {Object.entries(options).map(([key, value]) => (
          <li className={styles.listItem} key={key}>
            <SearchLink
              className={styles.listLink}
              params={getSearchParams(value)}
              onClick={() => changeOption(key)}
            >
              {key}
            </SearchLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
