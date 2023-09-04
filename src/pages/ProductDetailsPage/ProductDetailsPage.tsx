/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import container from '../../styles/utils/container.module.scss';
import { ProductDescription, ProductDetails } from '../../types';
import { SelectImg } from '../../components/SelectImg/SelectImg';
import { ColorFunctionality } from '../../components/ColorFunctionality/ColorFunctionality';
import { CapacityFunctionality } from '../../components/CapacityFunctionality/CapacityFunctionality';
import { ButtonsFunctionality } from '../../components/ButtonsFunctionality/ButtonsFunctionality';
import { SwiperProducts } from '../../components/SwiperProducts/SwiperdProducts';
import { useAppSelector } from '../../redux/hooks';
import { selectSuggestedProducts } from '../../redux/selectors';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import arrowRightDisable from '../../assets/icons/gray-arrows/arrow-left.svg';
import styles from './ProductDetailsPage.module.scss';

const descript = {
  title: 'dfdfdf',
  text: ['fdfdfd', 'fdfdfd', 'fdfdfd'],
};

const item: ProductDetails = {
  id: 43,
  itemId: 'apple-iphone-xs-max-64gb-spacegray',
  name: 'Apple iPhone XS Max 64GB Spacegray',
  screen: "6.5' OLED",
  capacity: '64GB',
  color: 'spacegray',
  ram: '4GB',
  namespaceId: 'apple-iphone-xs-max-64gb-spacegray',
  capacityAvailable: ['64Gb', '128Gb', '254Gb'],
  priceRegular: 900,
  priceDiscount: 960,
  colorsAvailable: ['silver', 'black', 'red'],
  images: ['https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/02.jpg', 'dfdfdf'],
  resolution: '1024',
  processor: 'Bionic',
  camera: '42mp',
  zoom: 'X-3',
  cell: ['ums', 'gps'],
  description: [descript],
};

export const ProductDetailsPage = () => {
  const description: ProductDescription[] = []; // delete after

  const { data: { discount } } = useAppSelector(selectSuggestedProducts);

  return (
    <div className={styles.PhonesDetails}>
      <div className={container.limit}>
        <Breadcrumbs className={styles.breadcrumbs} />
        <Link to="/phones" className={styles.button}>
          <img src={arrowRightDisable} alt="arrow" />
          Back
        </Link>
        <h2 className={styles.PhonesDetails__title}>
          {item.name}
        </h2>
        <div className={styles.flexBlock}>
          <div className={styles.photo}>
            <SelectImg />
            <div className={styles.photo__current}>
              <img className={styles.image} src="https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11-pro-max/gold/01.jpg" alt="iphone" />
            </div>
          </div>
          <div className={styles.functional}>
            <ColorFunctionality />
            <CapacityFunctionality />
            <ButtonsFunctionality item={item} />
          </div>
        </div>

        <div className={styles.GridContainer}>
          <article className={styles.About}>
            <h3 className={styles.About__title}>About</h3>
            <hr className={styles.line} />
            {description.map((items) => (
              <>
                <h4 className={styles.About__info}>{items.title}</h4>
                <p className={styles.About__text}>{items.text.join()}</p>
              </>
            ))}
          </article>

          <article className={styles.TechInfo}>
            <h3 className={styles.TechInfo__title}>Tech specs</h3>
            <hr className={styles.line} />

            <ul className={styles.card__characteristics}>
              <li className={styles.TechInfo__characteristic}>
                <p>Screen</p>
                <p className={styles.TechInfo__value}>{item.screen}</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Resolution</p>
                <p className={styles.TechInfo__value}>{item.resolution}</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Processor</p>
                <p className={styles.TechInfo__value}>{item.processor}</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>RAM</p>
                <p className={styles.TechInfo__value}>{item.ram}</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Built in memory</p>
                <p className={styles.TechInfo__value}>{item.capacity}</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Camera</p>
                <p className={styles.TechInfo__value}>
                  {item.camera}
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Zoom</p>
                <p className={styles.TechInfo__value}>{item.zoom}</p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Cell</p>
                <p className={styles.TechInfo__value}>{item.cell.join(' ')}</p>
              </li>
            </ul>
          </article>
        </div>
        <div className={styles.swiperContainer}>
          <SwiperProducts
            title="You may also like"
            items={discount}
          />
        </div>
      </div>
    </div>
  );
};
