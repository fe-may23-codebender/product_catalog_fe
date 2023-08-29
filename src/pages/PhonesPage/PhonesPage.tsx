import styles from './PhonesPage.module.scss';
import container from '../../styles/utils/container.module.scss';

export const PhonesPage = () => {
  return (
    <div className={styles.phonesPage}>
      <div className={container.limit}>
        <h2 className={styles.title}>Mobile phones</h2>
        <h3 className={styles.text}>95 models</h3>

        <div>DROPDOWN</div>

        <div className={styles.product}>
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
