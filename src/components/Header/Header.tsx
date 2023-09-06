/* eslint-disable */
import { useState, FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Logo } from '../Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ButtonType, ProductCategory } from '../../types';
import { FavoriteLink } from '../FavoriteLink';
import { CartLink } from '../CartLink';
import { Button } from '../Buttons/Button';

import styles from './Header.module.scss';
import burger from '../../assets/icons/burger-menu.svg';
import { SearchInput } from '../SearchInput/SearcInput';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

            <FavoriteLink
              className={cn(styles.actionsLink, styles.actionsLinkFav)}
            />

            <CartLink
              className={cn(styles.actionsLink, styles.actionsLinkCart)}
            />

            <Button
              type={ButtonType.Button}
              iconPath={burger}
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
