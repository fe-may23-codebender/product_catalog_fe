import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import cn from 'classnames';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { Breakpoint, ButtonType } from '../../types';
import { Button } from '../Buttons/Button';

import 'swiper/swiper-bundle.min.css';
import styles from './Carousel.module.scss';

import arrowLeft from '../../assets/icons/black-arrows/arrow-left.svg';
import arrowRight from '../../assets/icons/black-arrows/arrow-right.svg';

import Baner1 from '../../assets/banners/banner-phones.png';
import Baner2 from '../../assets/banners/banner-tablets.png';
import Baner3 from '../../assets/banners/banner-iphone14.png';
import Baner4 from '../../assets/banners/banner-accessories.png';
import Baner5 from '../../assets/banners/banner-iphone14-small.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let swiperInstance: any = null;

const baners = [Baner1, Baner2, Baner4];

export const Carousel = () => {
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
    <div className={styles.carousel}>
      <Button
        type={ButtonType.Button}
        className={styles.carousel__btn}
        onClick={goPrev}
        iconPath={arrowLeft}
      />

      <Swiper
        className={styles.content}
        wrapperClass={styles.wrapper}
        onSwiper={(swiper) => {
          swiperInstance = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: `.${styles.pagination}`,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={600}
        breakpoints={{
          [Breakpoint.Mobile]: {
            allowTouchMove: true,
          },
          [Breakpoint.Desktop]: {
            allowTouchMove: false,
          },
        }}
      >
        <SwiperSlide className={cn(styles.slide, styles.nextBtn)}>
          <img className={styles.slide__img} src={banerCheck} alt="baner 1" />
        </SwiperSlide>

        {baners.map((baner) => (
          <SwiperSlide key={baner} className={styles.slide}>
            <img className={styles.slide__img} src={baner} alt="baner 1" />
          </SwiperSlide>
        ))}

        <div className={styles.pagination} />
      </Swiper>

      <Button
        type={ButtonType.Button}
        className={cn(styles.carousel__btn, styles.prevBtn)}
        onClick={goNext}
        iconPath={arrowRight}
      />
    </div>
  );
};
