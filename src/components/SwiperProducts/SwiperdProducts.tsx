import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper';
import styles from './SwiperProducts.module.scss';

import { SwiperButtonNext } from './SwiperButtonNext';
import { SwiperButtonPrev } from './SwiperButtonPrev';
import { CardLayout } from '../CardLayout';
import { Product } from '../../types';

type Props = {
  title: string;
  items: Product[];
};

export const SwiperProducts:React.FC<Props> = ({
  title,
  items,
}) => {
  return (
    <Swiper
      className={styles.swiperContainer}
      modules={[Navigation]}
      spaceBetween={16}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        820: {
          slidesPerView: 4,
        },
      }}
    >
      <div className={styles.swiperHeader}>
        <h2 className={styles.swiperHeader__title}>{title}</h2>
        <div className={styles.swiperHeader__buttons}>
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
      </div>

      {items.map(item => (
        <SwiperSlide key={item.id}>
          <CardLayout
            key={item.id}
            item={item}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
