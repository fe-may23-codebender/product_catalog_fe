/* eslint-disable react/require-default-props */
import { FC, useMemo } from 'react';
import cn from 'classnames';
import { Button } from '../buttons/Button';
import { ButtonType, PageSize, QueryParams } from '../../types';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { getPageNumbers } from '../../helpers/getPageNumbers';

import styles from './Pagination.module.scss';
import buttonStyles from '../Buttons/Button/Button.module.scss';

import arrowLeft from '../../assets/icons/black-arrows/arrow-left.svg';
import grayArrowLeft from '../../assets/icons/gray-arrows/arrow-left.svg';
import arrowRight from '../../assets/icons/black-arrows/arrow-right.svg';
import grayArrowRight from '../../assets/icons/gray-arrows/arrow-right.svg';

type Props = {
  total: number;
  perPage: PageSize;
  currentPage: number;
  className?: string;
  visiblePages?: number;
};

export const Pagination: FC<Props> = (props) => {
  const {
    total,
    currentPage,
    perPage,
    className = '',
    visiblePages = 9,
  } = props;

  const breakpoint = useBreakpoint();

  const normalizedSize = perPage === PageSize.All ? total : +perPage;

  const pageCount = Math.ceil(total / normalizedSize);

  const pageNumbers = useMemo(() => {
    return getPageNumbers(breakpoint, pageCount, currentPage, visiblePages);
  }, [breakpoint, currentPage]);

  const prevBtnIsDisabled = currentPage <= 1;
  const nextBtnIsDisabled = currentPage >= pageCount;

  const currentLeftArrow = prevBtnIsDisabled ? grayArrowLeft : arrowLeft;
  const currentRightArrow = nextBtnIsDisabled ? grayArrowRight : arrowRight;

  return (
    <ul className={cn(styles.container, className)}>
      <li>
        <Button
          type={ButtonType.Search}
          className={cn(styles.button, styles['button-prev'], {
            [buttonStyles.disabled]: prevBtnIsDisabled,
          })}
          iconPath={currentLeftArrow}
          params={{ [QueryParams.CurrentPage]: `${currentPage - 1}` }}
        />
      </li>

      {Array.isArray(pageNumbers) ? (
        pageNumbers.map(({ label, link }) => {
          return (
            <li key={`${label}-${link}`}>
              <Button
                type={ButtonType.Search}
                className={cn(styles.button, styles['button-element'], {
                  [buttonStyles.selected]: link === currentPage,
                })}
                params={{ [QueryParams.CurrentPage]: `${link}` }}
              >
                {label}
              </Button>
            </li>
          );
        })
      ) : (
        <li className={styles.text}>{pageNumbers}</li>
      )}

      <li>
        <Button
          type={ButtonType.Search}
          className={cn(styles.button, styles['button-next'], {
            [buttonStyles.disabled]: nextBtnIsDisabled,
          })}
          iconPath={currentRightArrow}
          params={{ [QueryParams.CurrentPage]: `${currentPage + 1}` }}
        />
      </li>
    </ul>
  );
};
