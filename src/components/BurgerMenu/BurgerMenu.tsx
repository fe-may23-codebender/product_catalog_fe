/* eslint-disable import/no-cycle */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Logo } from '../Logo/Logo';
import { links } from '../Header/Header';
import styles from './BurgerMenu.module.scss';
import { CartLink } from '../CartLink';
import { FavoriteLink } from '../FavoriteLink';
import { Button } from '../Buttons/Button';
import { ButtonType } from '../../types';

import close from '../../assets/icons/close.svg';

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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.overflow__hidden);
    } else {
      document.body.classList.remove(styles.overflow__hidden);
    }
  }, [isOpen]);

  return (
    <aside className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.burgerMenu__header}>
        <Logo />
        <Button
          type={ButtonType.Button}
          iconPath={close}
          className={cn(styles.closeButton__link, styles.closeButton__close)}
          onClick={toggleMenu}
        />
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
        <button
          type="button"
          className={`${styles.menuButtons__button} ${
            activeLink === 'favorites' ? styles.is__activeButton : ''
          }`}
          onClick={() => handleLinkClick('favorites')}
        >
          <FavoriteLink className={cn(styles.menuButtons__buttonLink)} />
        </button>

        <button
          type="button"
          className={`${styles.menuButtons__button} ${
            activeLink === 'cart' ? styles.is__activeButton : ''
          }`}
          onClick={() => handleLinkClick('cart')}
        >
          <CartLink className={cn(styles.menuButtons__buttonLink)} />
        </button>
      </div>
    </aside>
  );
};
