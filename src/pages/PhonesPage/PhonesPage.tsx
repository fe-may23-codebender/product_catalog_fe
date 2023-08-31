import { useEffect } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './PhonesPage.module.scss';
import container from '../../styles/utils/container.module.scss';
import { CardLayout } from '../../components/CardLayout';
import { Dropdown } from '../../components/Dropdown';
import { PageSize, QueryParams, SortField } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectProducts } from '../../redux/selectors';
import { fecthProducts } from '../../redux/slices/productsSlice';

export const PhonesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fecthProducts());
  }, []);

  return (
    <div>
      <div className={container.limit}>
        <Breadcrumbs />
        <h2 className={styles.title}>Mobile phones</h2>
        <h3 className={styles.text}>{`${items.length} models`}</h3>

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
          {items.map(item => (
            <div className={styles.product__card} key={item.id}>
              <CardLayout
                item={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
