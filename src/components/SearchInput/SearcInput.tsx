/* eslint-disable max-len */
import {
  FC, FormEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { debounce } from 'lodash';
import styles from './SearchInput.module.scss';
import searchIcon from '../../assets/icons/search.svg';
import closeIcon from '../../assets/icons/close.svg';
import { Button } from '../Buttons/Button';
import { ButtonType, ProductCategory, SearchParams } from '../../types';
import { getSearchWith } from '../../helpers/searchHelper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fecthProducts } from '../../redux/slices/productsSlice';
import { selectProducts } from '../../redux/selectors';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Loader } from '../Loader';

type Props = {
  className?: string;
};

export const SearchInput: FC<Props> = ({
  className = '',
}) => {
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('search') || '';
  const [query, setQuery] = useState('');

  const dispatch = useAppDispatch();
  const { items, loaded } = useAppSelector(selectProducts);

  const iconType = isOpenInput ? closeIcon : searchIcon;
  const inputRef = useRef<null | HTMLFormElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!queryParam) {
      return;
    }

    dispatch(fecthProducts({ searchParams, productCategory: ProductCategory.Phone }));
  },
  [queryParam]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  const setSearchWith = (params: SearchParams) => {
    const newSearchParams = getSearchWith(searchParams, params);

    setSearchParams(newSearchParams);
  };

  const toggleButton = () => {
    if (!isOpenInput) {
      setIsOpenInput(true);
    }

    if (isOpenInput) {
      setIsOpenInput(false);
      setIsDropdownOpen(false);
      setSearchWith({
        search: null,
      });
    }
  };

  useClickOutside(inputRef, () => {
    setIsOpenInput(false);
    setIsDropdownOpen(false);
    setSearchWith({
      search: null,
    });
  });

  const aplyQuery = useCallback(debounce(setSearchWith, 3000), [searchParams, pathname]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.trim());
    aplyQuery({
      search: event.target.value || null,
    });

    setIsDropdownOpen(true);

    if (event.target.value.trim().length === 0) {
      setIsDropdownOpen(false);
    }
  };

  const clearAplyQuery = () => {
    aplyQuery.cancel();
    setQuery('');
  };

  useEffect(() => {
    setQuery(queryParam);

    return () => clearAplyQuery();
  }, [searchParams, pathname]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={styles.search}
      ref={inputRef}
    >
      {isOpenInput && (
        <div className={styles.search__wrapper}>
          <img src={searchIcon} alt="icon" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleQueryChange}
            className={styles.search__input}
          />
        </div>

      )}
      <Button
        className={classNames(className)}
        type={ButtonType.Button}
        iconPath={iconType}
        onClick={toggleButton}
      />
      {isDropdownOpen && (
        <div className={styles.dropdown__menu}>
          <div className={styles.dropdown__content}>
            {items.length > 0 && (
              items.map(item => (
                <div
                  className={styles.dropdown__item}
                  key={item.id}
                >
                  <Link
                    to={`../${item.category}/${item.itemId}`}
                    className={styles.dropdown__link}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))
            )}

            { !loaded && (
              <Loader />
            )}

            { loaded && !items.length && (
              <div className={styles.dropdown__error}>
                <p>No results found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </form>
  );
};
