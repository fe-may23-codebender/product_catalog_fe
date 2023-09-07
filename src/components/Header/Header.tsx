/* eslint-disable */
import { useState, FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Logo } from '../Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ButtonType, ProductCategory, Breakpoint } from '../../types';
import { FavoriteLink } from '../FavoriteLink';
import { CartLink } from '../CartLink';
import { Button } from '../Buttons/Button';
import styles from './Header.module.scss';
import burger from '../../assets/icons/burger-menu.svg';
import burgerDark from '../../assets/icons-dark/Menu.svg';
import { SearchInput } from '../SearchInput/SearcInput';
import { ThemeContext, themes } from '../../context/ThemeContext';
import Toggle from '../Toggle/Toggle';

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

export const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;

    setTheme(newTheme);
  };

  const isThemeModeDark = useContext(ThemeContext).theme === 'dark';
  const currentBurger = isThemeModeDark ? burgerDark : burger;

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo className={styles.header__logo} />

        <div className={styles.header__content}>
          <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    cn(styles.navigation__link, { [styles.active]: isActive })
                  }
                >
                  home
                </NavLink>
              </li>

              {Object.values(ProductCategory).map((category) => (
                <li key={category}>
                  <NavLink
                    to={category}
                    className={({ isActive }) =>
                      cn(styles.navigation__link, isActive ? styles.active : '')
                    }
                  >
                    {category}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <SearchInput
              className={cn(styles.actionsLink, styles.actionsLinkSearch)}
            />

            <Button
              type={ButtonType.Button}
              className={cn(styles.actionsLink, styles.actionsLinkTheme)}
              onClick={toggleTheme}
            >
              <Toggle onChange={() => {}} value={theme === themes.dark} />
            </Button>

            <FavoriteLink
              className={cn(styles.actionsLink, styles.actionsLinkFav, {
                [styles.active]: activeLink === 'favorite',
              })}
              onClick={() => setActiveLink('favorite')}
            />

            <CartLink
              className={cn(styles.actionsLink, styles.actionsLinkCart, {
                [styles.active]: activeLink === 'cart',
              })}
              onClick={() => setActiveLink('cart')}
            />

            <Button
              type={ButtonType.Button}
              iconPath={currentBurger}
              className={cn(styles.actionsLink, styles.burger)}
              onClick={toggleMenu}
            />
          </div>

          <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
