import { FC } from 'react';
import styles from './Categories.module.scss';
import { Category } from '../Category';

const categories = [
  {
    title: 'Mobile phones',
    name: 'phones',
    amount: 95,
    img: '/product_catalog_fe/img/categories/phones-category.png',
  },
  {
    title: 'Tablets',
    name: 'tablets',
    amount: 24,
    img: '/product_catalog_fe/img/categories/tablets-category.png',
  },
  {
    title: 'Accessories',
    name: 'accessories',
    amount: 100,
    img: '/product_catalog_fe/img/categories/accessories-category.png',
  },
];

export const Categories: FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Shop by category</h2>
    <div className={styles.categories}>
      {categories.map(category => (
        <Category
          key={category.title}
          name={category.name}
          title={category.title}
          amount={category.amount}
          img={category.img}
        />
      ))}
    </div>
  </div>
);
