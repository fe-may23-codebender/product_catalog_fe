/* eslint-disable max-len */
import styles from './PhoneDetailsPage.module.scss';
import container from '../../styles/utils/container.module.scss';

export const PhonesDetailsPage = () => {
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
            <h4 className={styles.About__info}>And then there was Pro</h4>
            <p className={styles.About__text}>
              A transformative triple‑camera system that adds tons of capability
              without complexity.
              <br />
              An unprecedented leap in battery life. And a mind‑blowing chip
              that doubles down on machine learning and pushes the boundaries of
              what a smartphone can do. Welcome to the first iPhone powerful
              enough to be called Pro.
            </p>
            <h4 className={styles.About__info}>Camera</h4>
            <p className={styles.About__text}>
              Meet the first triple‑camera system to combine cutting‑edge
              technology with the legendary simplicity of iPhone. Capture up to
              four times more scene. Get beautiful images in drastically lower
              light. Shoot the highest‑quality video in a smartphone — then edit
              with the same tools you love for photos. You’ve never shot with
              anything like it.
            </p>
            <h4 className={styles.About__info}>
              Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
              Love it.
            </h4>
            <p className={styles.About__text}>
              iPhone 11 Pro lets you capture videos that are beautifully true to
              life, with greater detail and smoother motion. Epic processing
              power means it can shoot 4K video with extended dynamic range and
              cinematic video stabilization — all at 60 fps. You get more
              creative control, too, with four times more scene and powerful new
              editing tools to play with.
            </p>
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
