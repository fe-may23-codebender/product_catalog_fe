import { FC, useEffect } from 'react';
import cn from 'classnames';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { CardLayout } from '../../components/CardLayout';
import { Dropdown } from '../../components/Dropdown';
import { QueryParams, SortField } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectProducts } from '../../redux/selectors';
import { fecthProducts } from '../../redux/slices/productsSlice';

import styles from './PhonesPage.module.scss';
import container from '../../styles/utils/container.module.scss';

export const PhonesPage: FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fecthProducts());
  }, []);

  const pageSize = {
    All: 'all',
    4: '4',
    8: '8',
    16: '16',
  };

  return (
    <div>
      <div className={cn(container.limit, styles.productsContainer)}>
        <Breadcrumbs />
        <h2 className={styles.title}>Mobile phones</h2>
        <h3 className={styles.text}>{`${items.length} models`}</h3>

        <div className={styles.dropdowns}>
          <Dropdown
            label="Sort by"
            searchParamName={QueryParams.SortBy}
            startValue="Choose option"
            options={SortField}
            className={cn(styles['dropdown-wide'], styles.dropdown)}
          />

          <Dropdown
            label="Items on page"
            searchParamName={QueryParams.ItemsPerPage}
            startValue="All"
            options={pageSize}
            className={styles.dropdown}
            additionalSearhParams={{ [QueryParams.CurrentPage]: '1' }}
          />
        </div>

        <div className={styles.product}>
          {items.map((item) => (
            <CardLayout
              key={item.id}
              className={styles.product__card}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
