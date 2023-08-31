import { FC, useEffect } from 'react';
import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Dropdown } from '../../components/Dropdown';
import { PageSize, ProductCategory, QueryParams, SortField } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectProducts } from '../../redux/selectors';
import { getKeyByValue } from '../../helpers/getKeyByValue';
import { ProductsList } from '../../components/ProductsList';
import { getProductsByCategory } from '../../helpers/getProductsByCategory';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { NoResults } from '../../components/NoResults';

import styles from './ProductsPage.module.scss';
import container from '../../styles/utils/container.module.scss';
import { fecthProducts } from '../../redux/slices/productsSlice';

type Props = {
  productCategory: ProductCategory;
};

export const ProductsPage: FC<Props> = ({ productCategory }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fecthProducts({ searchParams: searchParams.toString() }));
  }, [searchParams]);

  const { groups, loaded, items } = useAppSelector(selectProducts);

  const pageSize = {
    All: 'all',
    4: '4',
    8: '8',
    16: '16',
  };

  const title = {
    [ProductCategory.Phone]: 'Mobile phones',
    [ProductCategory.Tablet]: 'Tablets',
    [ProductCategory.Accessory]: 'Accessories',
  };

  const currentPage = +(searchParams.get(QueryParams.CurrentPage) || 1);
  const sortParam = searchParams.get(QueryParams.SortBy) || '';
  const query = searchParams.get(QueryParams.Query) || '';
  const itemsPerPage = searchParams.get(QueryParams.ItemsPerPage) || 'all';
  const sortBy = getKeyByValue(SortField, sortParam) || 'Choose option';

  const preparedProducts = getProductsByCategory(items, productCategory);

  const productsCount = groups[productCategory];
  const currentTitle = title[productCategory];

  const productsNotFound = !preparedProducts.length;
  const categoryNotFound = productsNotFound && !query;
  const noMatchingQuery = productsNotFound && query;

  if (!loaded) {
    return <Loader className={styles.loader} />;
  }

  return (
    <div>
      <div className={cn(container.limit, styles.productsContainer)}>
        <Breadcrumbs className={styles.breadcrumbs} />

        <h1 className={styles.title}>{currentTitle}</h1>
        <span className={styles.text}>{`${productsCount} models`}</span>

        {categoryNotFound && (
          <div className={styles.NoResults}>
            <NoResults
              category={title[productCategory]}
              className={styles.NoResultsText}
            />
          </div>
        )}

        {!categoryNotFound && !noMatchingQuery && (
          <>
            <div className={styles.dropdowns}>
              <Dropdown
                label="Sort by"
                searchParamName={QueryParams.SortBy}
                startValue={sortBy}
                options={SortField}
                className={cn(styles['dropdown-wide'], styles.dropdown)}
              />

              <Dropdown
                label="Items on page"
                searchParamName={QueryParams.ItemsPerPage}
                startValue={itemsPerPage}
                options={pageSize}
                className={styles.dropdown}
                additionalSearhParams={{ [QueryParams.CurrentPage]: '1' }}
              />
            </div>

            <ProductsList products={preparedProducts} />

            <Pagination
              currentPage={currentPage}
              perPage={itemsPerPage as PageSize}
              total={productsCount}
              className={styles.pagination}
            />
          </>
        )}
      </div>
    </div>
  );
};
