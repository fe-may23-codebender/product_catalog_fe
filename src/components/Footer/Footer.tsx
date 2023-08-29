import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';
import style from '../../styles/utils/container.module.scss';

const footerLinks = [
  {
    title: 'Github',
    path: 'https://github.com/fe-may23-codebender/product_catalog_fe',
  },
  { title: 'Contacts', path: '/' },
  { title: 'Rights', path: '/' },
];

export const Footer = () => {
  function goUp() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={style.limit}>
      <footer className={styles.footer}>
        <div className={styles.footer__logo}>
          <Logo />
        </div>

        <div className={styles.footer__nav}>
          <ul className={styles.footer__nav__list}>
            {footerLinks.map(link => (
              <li key={link.title} className={styles.footer__nav__item}>
                <NavLink
                  to={link.path}
                  target="_blank"
                  className={styles.footer__nav__link}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer__button}>
          <span className={styles.footer__button__text}>Back to top</span>
          <button
            type="button"
            className={styles.button}
            onClick={goUp}
          >
            <div className={styles.button__up} />
          </button>
        </div>
      </footer>
    </div>
  );
};
