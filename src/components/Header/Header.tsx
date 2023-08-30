/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Phones',
    path: '/phones',
  },
  {
    title: 'Tablets',
    path: '/tablets',
  },
  {
    title: 'Accessories',
    path: '/accessories',
  },
];

type Props = {};

export const Header: React.FC<Props> = () => {
  // const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  // const handleLinkClick = (linkPath: string) => {
  //   setActiveLink(linkPath);
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.links}>
          <Logo />

          <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
              {links.map(link => (
                <li key={link.title} className={styles.navigation__listItem}>
                  <Link
                    to={link.path}
                    className={`${styles.navigation__listLink} ${
                      currentPath === link.path ? styles.is_active : ''
                    }`}
                    // onClick={() => handleLinkClick(link.path)}
                  >
                    <p>{link.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.navButtons}>
          <div className={styles.navButtons__buttoFavourite}>
            <span className={styles.navButtons__quantity}>1</span>
            <Link to="/favourite">
              <div className={styles.navButtons__link}>
                <div
                  className={`${styles.navButtons__buttonLink} ${styles.navButtons__buttonLink__favourite}`}
                />
              </div>
            </Link>
          </div>

          <div className={styles.navButtons__buttonShopping_bag}>
            <span className={styles.navButtons__quantity}>1</span>
            <Link to="/cart">
              <div className={styles.navButtons__link}>
                <div
                  className={`${styles.navButtons__buttonLink} ${styles.navButtons__buttonLink__shopping_bag}`}
                />
              </div>
            </Link>
          </div>

          <div className={styles.navButtons__buttonBurger}>
            <button
              type="button"
              onClick={toggleMenu}
              className={styles.navButtons__link}
            >
              <div
                className={`${styles.navButtons__buttonLink} ${styles.navButtons__buttonLink__burger}`}
              />
            </button>
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};
