/* eslint-disable max-len */
import styles from './PhoneDetailsPage.module.scss';
import container from '../../styles/utils/container.module.scss';
import { ProductDescription } from '../../types';

export const PhonesDetailsPage = () => {
  const description: ProductDescription[] = []; // delete after

  return (
    <div className={styles.PhonesDetails}>
      <div className={container.limit}>
        <h2 className={styles.PhonesDetails__title}>
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h2>
        <div> image slider</div>
        <div> color picker and price</div>

        <div className={styles.GridContainer}>
          <article className={styles.About}>
            <h3 className={styles.About__title}>About</h3>
            <hr className={styles.line} />
            {description.map((item) => (
              <>
                <h4 className={styles.About__info}>{item.title}</h4>
                <p className={styles.About__text}>{item.text.join()}</p>
              </>
            ))}
          </article>

          <article className={styles.TechInfo}>
            <h3 className={styles.TechInfo__title}>Tech specs</h3>
            <hr className={styles.line} />

            <ul className={styles.card__characteristics}>
              <li className={styles.TechInfo__characteristic}>
                <p>Screen</p>
                <p className={styles.TechInfo__value}>6.1” OLED</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Resolution</p>
                <p className={styles.TechInfo__value}>2688x1242</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Processor</p>
                <p className={styles.TechInfo__value}>Apple A12 Bionic</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>RAM</p>
                <p className={styles.TechInfo__value}>3 GB</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Built in memory</p>
                <p className={styles.TechInfo__value}>64 GB</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Camera</p>
                <p className={styles.TechInfo__value}>
                  12 Mp + 12 Mp + 12 Mp (Triple)
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Zoom</p>
                <p className={styles.TechInfo__value}>Optical, 2x</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Cell</p>
                <p className={styles.TechInfo__value}>GSM, LTE, UMTS</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};
