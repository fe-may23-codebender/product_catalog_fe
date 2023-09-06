/* eslint-disable import/no-extraneous-dependencies */
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './SkeletonHomePage.module.scss';

export const SkeletonHomePage = () => {
  return (
    <SkeletonTheme>
      <div className={styles.Skeleton}>
        <div className={styles.SkeletonCarousel}>
          <Skeleton height={400} />
          <Skeleton height={400} />
          <Skeleton height={400} />
        </div>

        <div className={styles.SkeletonSlider}>
          <Skeleton height={4} />
          <Skeleton height={0} />
          <Skeleton height={4} />
          <Skeleton height={0} />
          <Skeleton height={4} />
          <Skeleton height={0} />
          <Skeleton height={4} />
          <Skeleton height={0} />
          <Skeleton height={4} />
        </div>
      </div>
    </SkeletonTheme>
  );
};
