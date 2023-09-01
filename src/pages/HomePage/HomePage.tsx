/* eslint-disable */
/* eslint-disable max-len */
import cn from 'classnames';
import container from '../../styles/utils/container.module.scss';
import styles from './HomePage.module.scss';
import { Carousel } from '../../components/Carousel/Carousel';

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={cn(container.limit, styles.container)}>
        <h2 className={styles.HomePage__title}>
          Welcome to Nice Gadgets store!
        </h2>
        <Carousel />
      </div>
    </div>
  );
};
