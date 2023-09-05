import { FC, useEffect } from 'react';
import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Dropdown } from '../../components/Dropdown';
import { PageSize, ProductCategory, QueryParams, SortField } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectProducts, selectProductsStats } from '../../redux/selectors';
import { getKeyByValue } from '../../helpers/getKeyByValue';
import { ProductsList } from '../../components/ProductsList';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { NoResults } from '../../components/NoResults';
import { fecthProducts } from '../../redux/slices/productsSlice';
import { getSearchWith } from '../../helpers/searchHelper';

import styles from './ProductsPage.module.scss';
import container from '../../styles/utils/container.module.scss';
import { fecthProductsStats } from '../../redux/slices/productsStatsSlice';

type Props = {
  productCategory: ProductCategory;
};

export const ProductsPage: FC<Props> = ({ productCategory }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const { items, loaded: productsLoaded } = useAppSelector(selectProducts);
  const { countByGroup, loaded: statsLoaded } =
    useAppSelector(selectProductsStats);

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

  const pageParam = searchParams.get(QueryParams.CurrentPage) || '';
  const currentPage = +(pageParam || 1);
  const sortParam = searchParams.get(QueryParams.SortBy) || '';
  const query = searchParams.get(QueryParams.Query) || '';
  const sortBy = getKeyByValue(SortField, sortParam) || 'Choose option';
  const perPageParam = searchParams.get(QueryParams.ItemsPerPage) || '';
  const itemsPerPage = perPageParam || PageSize.Four;

  const productsCount = countByGroup[productCategory];
  const currentTitle = title[productCategory];

  useEffect(() => {
    const params = perPageParam
      ? searchParams
      : getSearchWith(searchParams, {
          [QueryParams.ItemsPerPage]: itemsPerPage,
        });

    dispatch(fecthProducts({ searchParams: params, productCategory }));
  }, [productCategory, searchParams]);

  useEffect(() => {
    if (statsLoaded) {
      return;
    }

    dispatch(fecthProductsStats());
  }, [statsLoaded]);

  const productsNotFound = !items.length;
  const categoryNotFound = productsNotFound && !query;
  const noMatchingQuery = productsNotFound && query;

  if (!productsLoaded || !statsLoaded) {
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

            <ProductsList products={items} />

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
