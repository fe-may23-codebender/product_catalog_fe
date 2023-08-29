/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { links } from '../Header/Header';
import styles from './BurgerMenu.module.scss';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleLinkClick = (linkIndex: string) => {
    setActiveLink(linkIndex);
    toggleMenu();
  };

  return (
    <aside className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.burgerMenu__header}>
        <Logo />

        <div className={styles.closeButton}>
          <button
            type="button"
            className={styles.closeButton__link}
            onClick={toggleMenu}
          >
            <div className={styles.closeButton__close} />
          </button>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {links.map((link) => (
            <li key={link.title} className={styles.nav__item}>
              <Link
                to={link.path}
                className={`${styles.nav__link} ${
                  activeLink === link.path ? styles.is_activeLink : ''
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.menuButtons}>
        <div className={styles.menuButtons__button}>
          <span className={styles.menuButtons__quantity}>1</span>
          <Link
            to="/favourite"
            className={
              activeLink === 'favourite' ? styles.is__activeButton : ''
            }
            onClick={() => handleLinkClick('favourite')}
          >
            <div className={styles.menuButtons__link}>
              <div
                className={`${styles.menuButtons__buttonLink} ${styles.menuButtons__buttonLink__favourite}`}
              />
            </div>
          </Link>
        </div>

        <div className={styles.menuButtons__button}>
          <span className={styles.menuButtons__quantity}>1</span>
          <Link
            to="/shopping_bag"
            className={
              activeLink === 'shopping_bag' ? styles.is__activeButton : ''
            }
            onClick={() => handleLinkClick('shopping_bag')}
          >
            <div className={styles.menuButtons__link}>
              <div
                className={`${styles.menuButtons__buttonLink} ${styles.menuButtons__buttonLink__shopping_bag}`}
              />
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};
