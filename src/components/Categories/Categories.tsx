import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';

export const Categories: FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Shop by category</h2>
    <div className={styles.categories}>
      <Link to="/phones" className={styles.category}>
        <img
          src="/product_catalog_fe/img/categories/phones-category.png"
          alt="Mobile phones"
          className={styles.Category_Img}
        />
        <h4 className={styles.Category_Title}>Mobile phones</h4>
        <p className={styles.Category_Amount}>95 models</p>
      </Link>

      <Link to="/tablets" className={styles.category}>
        <img
          src="/product_catalog_fe/img/categories/tablets-category.png"
          alt="Mobile phones"
          className={styles.Category_Img}
        />
        <h4 className={styles.Category_Title}>Tablets</h4>
        <p className={styles.Category_Amount}>24 models</p>
      </Link>

      <Link to="/accessories" className={styles.category}>
        <img
          src="/product_catalog_fe/img/categories/accessories-category.png"
          alt="Mobile phones"
          className={styles.Category_Img}
        />
        <h4 className={styles.Category_Title}>Accessories</h4>
        <p className={styles.Category_Amount}>100 models</p>
      </Link>
    </div>
  </div>
);
