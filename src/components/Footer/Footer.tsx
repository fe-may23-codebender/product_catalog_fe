/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Logo } from '../Logo/Logo';
import container from '../../styles/utils/container.module.scss';
import styles from './Footer.module.scss';
import { Button } from '../Buttons/Button';
import { ButtonType } from '../../types';

import arrow_up from '../../assets/icons/black-arrows/arrow-up.svg';

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
    document.querySelector('body')?.scrollIntoView({
      behavior: 'smooth', block: 'end', inline: 'nearest',
    });
  }

  return (
    <footer className={styles.footer}>
      <div className={cn(styles.container, container.limit)}>
        <div className={styles.footer__logo}>
          <Logo />
        </div>

        <div className={styles.footer__nav}>
          <ul className={styles.footer__nav__list}>
            {footerLinks.map((link) => (
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

        <button type="button" className={styles.footer__button} onClick={goUp}>
          <span className={styles.footer__button__text}>Back to top</span>
          <Button
            type={ButtonType.Button}
            iconPath={arrow_up}
            className={cn(styles.footer__button__arrow, styles.footer__button__arrow__up)}
          />
        </button>
      </div>
    </footer>
  );
};
