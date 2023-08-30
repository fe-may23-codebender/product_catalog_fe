import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  const path = location.pathname.split('/');

  const pagePath = path[1];
  const pageName = pagePath.charAt(0).toUpperCase() + pagePath.slice(1);
  let productPath;
  let productName;

  if (path.length > 2) {
    productPath = path[2].split('-');
    productName = productPath
      .map((el) => {
        let element = '';

        if (el === 'iphone') {
          element = el.charAt(0) + el.charAt(1).toUpperCase() + el.slice(2);
        } else if (el.includes('gb')) {
          element = el.toUpperCase();
        } else {
          element = el.charAt(0).toUpperCase() + el.slice(1);
        }

        return element;
      })
      .join(' ');
  }

  return (
    <>
      {location.pathname !== '/' && (
        <div className={styles.breadcrumbs}>
          <Link
            to="/"
            className={`${styles.breadcrumbs__icon} ${styles.breadcrumbs__icon__home}`}
          />
          <div
            className={`${styles.breadcrumbs__icon} ${styles.breadcrumbs__icon__arrow}`}
          />
          <Link
            to={`/${pageName.toLocaleLowerCase()}`}
            className={styles.breadcrumbs__link}
          >
            {pageName}
          </Link>

          {path.length > 2 && (
            <>
              <div
                className={`${styles.breadcrumbs__icon} ${styles.breadcrumbs__icon__arrow} `}
              />
              <div>{productName}</div>
            </>
          )}
        </div>
      )}
    </>
  );
};
