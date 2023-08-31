/* eslint-disable max-len */
import { useState } from 'react';
import styles from './SelectImg.module.scss';

const images = [
  {
    id: 0,
    title: 'apple iphone 11 black',
    path: 'https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/02.jpg',
  },
  {
    id: 1,
    title: 'apple iphone 7 gold',
    path: 'https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/01.jpg',
  },
  {
    id: 2,
    title: 'apple iphone 7 gold',
    path: 'https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/02.jpg',
  },
  {
    id: 3,
    title: 'apple iphone 7 gold',
    path: 'https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/00.jpg',
  },
  {
    id: 4,
    title: 'apple iphone 7 gold',
    path: 'https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/01.jpg',
  },
];

export const SelectImg = () => {
  const [activeImg, setActiveImg] = useState<number | null>(null);

  function selectActiveImg(imgId: number) {
    setActiveImg(imgId);
  }

  return (
    <>
      <ul className={styles.select__list}>
        {images.map(image => (
          <li
            key={image.id}
          >
            <button
              type="button"
              className={`${styles.select__item} ${activeImg === image.id ? styles.is__active : ''}`}
              onClick={() => selectActiveImg(image.id)}
            >
              <img
                src={image.path}
                alt={image.title}
                className={styles.select__item__img}
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
