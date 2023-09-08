/* eslint-disable react/require-default-props */
import {
  FC, useState, useRef, useContext,
} from 'react';
import cn from 'classnames';
import { capitalize } from 'lodash';
import { SearchLink } from '../SearchLink';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SearchParams } from '../../types';
import styles from './Dropdown.module.scss';

import arrowUp from '../../assets/icons/black-arrows/arrow-up.svg';
import arrowUpDark from '../../assets/icons/gray-arrows/arrow-up.svg';

import arrowDown from '../../assets/icons/black-arrows/arrow-down.svg';
import arrowDownGray from '../../assets/icons/gray-arrows/arrow-down.svg';
import { ThemeContext } from '../../context/ThemeContext';

type Props = {
  label: string;
  searchParamName: string;
  startValue: string;
  options: Record<string, string>;
  additionalSearhParams?: SearchParams;
  className?: string;
  isDisabled?: boolean;
};

export const Dropdown: FC<Props> = (props) => {
  const {
    label,
    searchParamName,
    startValue,
    options,
    additionalSearhParams = {},
    className = '',
    isDisabled = false,
  } = props;

  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState(startValue);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const disableDropdown = () => {
    setIsActive(false);
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

  const isThemeModeDark = useContext(ThemeContext).theme === 'dark';

  const currentArrowDown = isDisabled ? arrowDownGray : arrowDown;
  const currentArrowDownDark = isDisabled ? arrowDown : arrowDownGray;
  const currentArrow = isThemeModeDark
    ? currentArrowDownDark
    : currentArrowDown;

  const arrowUper = isThemeModeDark ? arrowUpDark : arrowUp;

  return (
    <div
      className={cn(styles.container, className, {
        [styles.active]: isActive,
        [styles.disabled]: isDisabled,
      })}
      ref={dropdownRef}
    >
      <span className={styles.label}>{label}</span>

      <button
        className={styles.trigger}
        type="button"
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        <span className={styles.text}>{capitalize(option)}</span>

        <div className={styles.icons}>
          <img
            src={currentArrow}
            alt="down"
            className={cn(styles.icon, styles['icon--down'])}
          />

          <img
            src={arrowUper}
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
