/* eslint-disable */
/* eslint-disable max-len */

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import cn from 'classnames';
import container from '../../styles/utils/container.module.scss';
import Baner1 from '../../assets/banners/banner-phones.png';
import Baner2 from '../../assets/banners/banner-tablets.png';
import Baner3 from '../../assets/banners/banner-iphone14.png';
import Baner4 from '../../assets/banners/banner-accessories.png';
import Baner5 from '../../assets/banners/banner-iphone14-small.png';

import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './HomePage.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { Breakpoint, ButtonType } from '../../types';
import { Button } from '../../components/buttons/Button';
import arrowLeft from '../../assets/icons/black-arrows/arrow-left.svg';
import arrowRight from '../../assets/icons/black-arrows/arrow-right.svg';

SwiperCore.use([Navigation, Pagination]);
let swiperInstance: any = null;
const baners = [Baner1, Baner2, Baner4];

export const HomePage = () => {
  const breakpoint = useBreakpoint();

  const goNext: () => void = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev: () => void = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const banerCheck = breakpoint === Breakpoint.Mobile ? Baner5 : Baner3;

  return (
    <div className={styles.HomePage}>
      <div className={cn(container.limit, styles.container)}>
        <h2 className={styles.HomePage__title}>
          Welcome to Nice Gadgets store!
        </h2>

        <div className={styles.slider}>
          <Button
            type={ButtonType.Button}
            className={styles.slider__btn}
            onClick={goPrev}
            iconPath={arrowLeft}
          />

          <Swiper
            onSwiper={(swiper) => {
              swiperInstance = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.slider__img}
                src={banerCheck}
                alt="baner 1"
              />
            </SwiperSlide>
            {baners.map((baner) => (
              <SwiperSlide className={styles.slide}>
                <img className={styles.slider__img} src={baner} alt="baner 1" />
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            type={ButtonType.Button}
            className={styles.slider__btn}
            onClick={goNext}
            iconPath={arrowRight}
          />
        </div>
      </div>
    </div>
  );
};
