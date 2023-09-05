/* eslint-disable max-len */
import { useEffect } from 'react';
import cn from 'classnames';
import { Carousel } from '../../components/Carousel/Carousel';
import { SwiperProducts } from '../../components/SwiperProducts/SwiperdProducts';
import { Categories } from '../../components/Categories';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectProductsStats,
  selectSuggestedProducts,
} from '../../redux/selectors';
import { Loader } from '../../components/Loader';
import { fecthProductsStats } from '../../redux/slices/productsStatsSlice';
import { fecthSuggestedProducts } from '../../redux/slices/suggestedProductsSlice';

import container from '../../styles/utils/container.module.scss';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const { countByGroup, loaded: statsLoaded }
    = useAppSelector(selectProductsStats);

  const {
    data: { newest, discount },
    loaded: suggestedLoaded,
  } = useAppSelector(selectSuggestedProducts);

  useEffect(() => {
    if (statsLoaded) {
      return;
    }

    dispatch(fecthProductsStats());
  }, [statsLoaded]);

  useEffect(() => {
    if (suggestedLoaded) {
      return;
    }

    dispatch(fecthSuggestedProducts());
  }, [suggestedLoaded]);

  if (!statsLoaded || !suggestedLoaded) {
    return <Loader className={styles.loader} />;
  }

  return (
    <div className={styles.HomePage}>
      <div className={cn(container.limit, styles.container)}>
        <h2 className={styles.HomePage__title}>
          Welcome to Nice Gadgets store!
        </h2>
        <Carousel />

        <div className={styles.swiperContainer}>
          <SwiperProducts title="Brand new models" items={newest} />
        </div>

        <Categories countByGroup={countByGroup} />

        <div className={styles.swiperContainer}>
          <SwiperProducts title="Hot prices" items={discount} />
        </div>
      </div>
    </div>
  );
};
