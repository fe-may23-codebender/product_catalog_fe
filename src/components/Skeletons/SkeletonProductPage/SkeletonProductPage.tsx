/* eslint-disable import/no-extraneous-dependencies */
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './SkeletonProductPage.module.scss';

const MOBILE_IMAGE_WIDTH = 220;
const DESKTOP_IMAGE_WIDTH = 340;
const MOBILE_IMAGE_HEIGHT = 300;
const DESKTOP_IMAGE_HEIGHT = 420;

export const SkeletonProductPage = () => {
  const screenWidth = window.innerWidth;
  const imageWidth = screenWidth >= 768
    ? DESKTOP_IMAGE_WIDTH
    : MOBILE_IMAGE_WIDTH;
  const imageHeight = screenWidth >= 768
    ? DESKTOP_IMAGE_HEIGHT
    : MOBILE_IMAGE_HEIGHT;

  return (
    <SkeletonTheme>
      <div className={styles.Skeleton}>
        <div className={styles.Skeleton__Title}>
          <Skeleton height={35} width="90%" />
        </div>

        <div className={styles.Skeleton__Item}>
          <div className={styles.Skeleton__ImagesContainer}>
            <div className={styles.Skeleton__Image}>
              <Skeleton height={imageHeight} width={imageWidth} />
            </div>

            <div className={styles.Skeleton__Images}>
              <Skeleton height={60} width={60} />
              <Skeleton height={60} width={60} />
              <Skeleton height={60} width={60} />
            </div>
          </div>

          <div className={styles.Skeleton__ItemDetails}>
            <div className={styles.Skeleton__Colors}>
              <Skeleton
                height={10}
                width="70%"
              />
              <div className={styles.Skeleton__Colors__circles}>
                <Skeleton
                  height={35}
                  width={35}
                  className={styles.Skeleton__Colors__circle}
                />
                <Skeleton
                  height={35}
                  width={35}
                  className={styles.Skeleton__Colors__circle}
                />
                <Skeleton
                  height={35}
                  width={35}
                  className={styles.Skeleton__Colors__circle}
                />
                <Skeleton
                  height={35}
                  width={35}
                  className={styles.Skeleton__Colors__circle}
                />
              </div>
              <Skeleton height={1} width="100%" />
            </div>

            <div className={styles.Skeleton__Capacity}>
              <Skeleton height={10} width="70%" />
              <div className={styles.Skeleton__Capacity__rectangles}>
                <Skeleton height={25} width={55} />
                <Skeleton height={25} width={55} />
                <Skeleton height={25} width={55} />
              </div>
              <Skeleton height={1} width="100%" />
            </div>

            <div className={styles.Skeleton__Price}>
              <Skeleton height={30} width="30%" />
            </div>

            <div className={styles.Skeleton__Info}>
              <Skeleton height={100} width="100%" />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
