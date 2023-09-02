import { useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ButtonType } from '../../types';
import { Button } from '../Buttons/Button';
import styles from './SwiperProducts.module.scss';

import arrowRight from '../../assets/icons/black-arrows/arrow-right.svg';
import arrowRightDisable from '../../assets/icons/gray-arrows/arrow-right.svg';

export const SwiperButtonNext = () => {
  const swiper = useSwiper();
  const [isDisable, setIsDisable] = useState(false);

  swiper.on('activeIndexChange', () => {
    setIsDisable(swiper.isEnd);
  });

  const goNext = () => {
    swiper.slideNext();
  };

  return (
    <Button
      type={ButtonType.Button}
      className={`${styles.swiperButton} ${isDisable === true ? styles.swiperButton__disable : ''}`}
      onClick={goNext}
      iconPath={isDisable === true ? arrowRightDisable : arrowRight}
    />
  );
};
