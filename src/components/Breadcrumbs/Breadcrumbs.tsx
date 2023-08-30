import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import {
  capitalizeLetter,
  formatProductName,
} from '../../helpers/breadcrumbsHelper';

export const Breadcrumbs = () => {
  const location = useLocation();
  const path = location.pathname.split('/');

  const pagePath = path[1];
  const pageName = capitalizeLetter(pagePath) + pagePath.slice(1);
  const pageLink = `/${pageName.toLowerCase()}`;

  let productPath;
  let productName;

  if (path.length > 2) {
    productPath = path[2].split('-');
    productName = formatProductName(productPath);
  }

  return (
    <>
      <div className={styles.breadcrumbs}>
        <Link
          to="/"
          className={`${styles.breadcrumbs__icon} ${styles.breadcrumbs__icon__home}`}
        />

        <div
          className={`${styles.breadcrumbs__icon} ${styles.breadcrumbs__icon__arrow}`}
        />
        <Link to={pageLink} className={styles.breadcrumbs__link} />

        <div className={`${styles.breadcrumbs__icon} ${styles.breadcrumbs__icon__arrow}`} />
        <Link
          to={pageLink}
          className={styles.breadcrumbs__link}
        >

          {pageName}
        </Link>

        {path.length > 2 && (
          <>

            <div
              className={`${styles.breadcrumbs__icon} ${styles.breadcrumbs__icon__arrow} `}
            />

            <div className={`${styles.breadcrumbs__icon} ${styles.breadcrumbs__icon__arrow} `} />

            <div>{productName}</div>
          </>
        )}
      </div>
    </>
  );
};
