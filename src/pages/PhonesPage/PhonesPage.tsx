/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './PhonesPage.module.scss';
import container from '../../styles/utils/container.module.scss';
import { CardLayout } from '../../components/CardLayout';
import { Dropdown } from '../../components/Dropdown';
import { PageSize, QueryParams, SortField } from '../../types';
import { Phone } from '../../types/Phone';
import { getPhones } from '../../services/phones';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then((data) => {
        setPhones(data);
        console.log(phones);
      })
      .catch(() => {
        console.log('oops');
        // setErrorMessage(ErrorType.fetchTodo);
      });
  }, []);

  return (
    <div>
      <div className={container.limit}>
        <Breadcrumbs />
        <h2 className={styles.title}>Mobile phones</h2>
        <h3 className={styles.text}>95 models</h3>

        <div className={styles.Sort}>
          <Dropdown
            label="Sort by"
            searchParamName={QueryParams.SortBy}
            startValue="Choose option"
            options={SortField}
            className={styles.SortFiels_1}
          />

          <Dropdown
            label="Items on page"
            searchParamName={QueryParams.ItemsPerPage}
            startValue="All"
            options={PageSize}
            className={styles.SortFiels_2}
          />
        </div>

        <div className={styles.product}>
          <CardLayout />
          <div className={styles.product__card} />
          <div className={styles.product__card} />
          <div className={styles.product__card} />
          <div className={styles.product__card} />
          <div className={styles.product__card} />
        </div>
      </div>
    </div>
  );
};
