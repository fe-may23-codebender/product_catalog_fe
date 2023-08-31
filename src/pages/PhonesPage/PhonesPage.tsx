import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './PhonesPage.module.scss';
import container from '../../styles/utils/container.module.scss';
import { CardLayout } from '../../components/CardLayout';

export const PhonesPage = () => {
  return (
    <div>
      <div className={container.limit}>
        <Breadcrumbs />
        <h2 className={styles.title}>Mobile phones</h2>
        <h3 className={styles.text}>95 models</h3>

        <div>DROPDOWN</div>

        <div className={styles.product}>
          <div className={styles.product__card}>
            <CardLayout />
          </div>
          <div className={styles.product__card}>
            <CardLayout />
          </div>
          <div className={styles.product__card}>
            <CardLayout />
          </div>
          <div className={styles.product__card}>
            <CardLayout />
          </div>
          <div className={styles.product__card}>
            <CardLayout />
          </div>
        </div>
      </div>
    </div>
  );
};
