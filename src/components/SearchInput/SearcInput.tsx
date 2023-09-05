/* eslint-disable max-len */
import {
  FC, FormEvent, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
import styles from './SearchInput.module.scss';
import searchIcon from '../../assets/icons/search.svg';
import closeIcon from '../../assets/icons/close.svg';
import { Button } from '../Buttons/Button';
import { ButtonType, Product, ProductCategory } from '../../types';

type Props = {
  className?: string;
};

// testing data
const items = [
  {
    id: '1',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.jpg',
  },
  {
    id: '2',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-7-plus-32gb-black',
    itemId: 'apple-iphone-7-plus-32gb-black',
    name: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
  },
  {
    id: '3',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-8-64gb-gold',
    itemId: 'apple-iphone-8-64gb-gold',
    name: 'Apple iPhone 8 64GB Gold',
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: '64GB',
    color: 'gold',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/gold/00.jpg',
  },
  {
    id: '4',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-11-64gb-black',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'black',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/black/00.jpg',
  },
  {
    id: '5',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-11-128gb-yellow',
    itemId: 'apple-iphone-11-128gb-yellow',
    name: 'Apple iPhone 11 128GB Yellow',
    fullPrice: 1100,
    price: 1050,
    screen: "6.1' IPS",
    capacity: '128GB',
    color: 'yellow',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/yellow/00.jpg',
  },
  {
    id: '6',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-11-256gb-green',
    itemId: 'apple-iphone-11-256gb-green',
    name: 'Apple iPhone 11 256GB Green',
    fullPrice: 1172,
    price: 1115,
    screen: "6.1' IPS",
    capacity: '256GB',
    color: 'green',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/green/00.jpg',
  },
  {
    id: '7',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-11-pro-64gb-gold',
    itemId: 'apple-iphone-11-pro-64gb-gold',
    name: 'Apple iPhone 11 Pro 64GB Gold',
    fullPrice: 1312,
    price: 1270,
    screen: "5.8' OLED",
    capacity: '64GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/gold/00.jpg',
  },
  {
    id: '8',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-11-pro-256gb-midnightgreen',
    itemId: 'apple-iphone-11-pro-256gb-midnightgreen',
    name: 'Apple iPhone 11 Pro 256GB Midnight green',
    fullPrice: 1640,
    price: 1570,
    screen: "5.8' OLED",
    capacity: '256GB',
    color: 'midnightgreen',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/midnightgreen/00.jpg',
  },
  {
    id: '9',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-11-pro-512gb-silver',
    itemId: 'apple-iphone-11-pro-512gb-silver',
    name: 'Apple iPhone 11 Pro 512GB Silver',
    fullPrice: 1880,
    price: 1780,
    screen: "5.8' OLED",
    capacity: '512GB',
    color: 'silver',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/silver/00.jpg',
  },
  {
    id: '10',
    category: ProductCategory.Phone,
    phoneId: 'apple-iphone-11-pro-max-64gb-spacegray',
    itemId: 'apple-iphone-11-pro-max-64gb-spacegray',
    name: 'Apple iPhone 11 Pro Max 64GB Spacegray',
    fullPrice: 1480,
    price: 1400,
    screen: "6.5' OLED",
    capacity: '64GB',
    color: 'spacegray',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/spacegray/00.jpg',
  },
];

function filterProductsByQuery(products: Product[], query: string) {
  return products.filter(
    (product) => product.name.toLowerCase().includes(query.toLowerCase()),
  );
}

export const SearchInput: FC<Props> = ({
  className = '',
}) => {
  const [query, setQuery] = useState('');
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const inputRef = useRef<null | HTMLInputElement>(null);

  const filteredProducts = filterProductsByQuery(items, query);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  const toggleButton = () => {
    if (!isOpenInput) {
      setIsOpenInput(true);
    }

    if (isOpenInput) {
      setIsOpenInput(false);
      setQuery('');
      setIsDropdownOpen(false);
    }
  };

  const iconType = isOpenInput ? closeIcon : searchIcon;

  return (
<<<<<<< HEAD
    <form onSubmit={(e) => handleSubmit(e)} className={styles.search}>
      {isOpenInput && (
        <input
          type="text"
          placeholder="Search..."
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsDropdownOpen(!!e.target.value);
          }}
          className={styles.search__input}
        />
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div
                  className={styles.dropdown__item}
                  key={product.id}
                >
                  <Link
                    to={`../${product.category}/${product.itemId}`}
                    className={styles.dropdown__link}
                  >
                    {product.name}
                  </Link>
                </div>
              ))
            ) : (
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
