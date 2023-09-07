/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { scrollToTop } from '../../helpers/scrollToTop';
import { Button } from '../Buttons/Button';
import { ButtonType } from '../../types';

import styles from './GoToTopButton.module.scss';
import arrow_up from '../../assets/icons/black-arrows/arrow-up.svg';

export const GoToTopButton = () => {
  const [displayStyle, setDisplayStyle] = useState('none');

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 100) {
      setDisplayStyle('block');
    } else {
      setDisplayStyle('none');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      role="button"
      className={styles.Button}
      onClick={scrollToTop}
      style={{ display: displayStyle }}
    >
      <Button
        type={ButtonType.Button}
        iconPath={arrow_up}
        className={styles.Button__arrow}
      />
    </div>
  );
};