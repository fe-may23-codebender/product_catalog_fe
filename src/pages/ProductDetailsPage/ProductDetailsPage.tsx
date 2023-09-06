/* eslint-disable max-len */
import { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ColorKey, ProductDetails } from '../../types';
import { SelectImg } from '../../components/SelectImg/SelectImg';
import { ColorFunctionality } from '../../components/ColorFunctionality/ColorFunctionality';
import { CapacityFunctionality } from '../../components/CapacityFunctionality/CapacityFunctionality';
import { ButtonsFunctionality } from '../../components/ButtonsFunctionality/ButtonsFunctionality';
import { SwiperProducts } from '../../components/SwiperProducts/SwiperdProducts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectProductDetails,
  selectSuggestedProducts,
} from '../../redux/selectors';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { fecthSuggestedProducts } from '../../redux/slices/suggestedProductsSlice';
import { ProductsListSkeleton } from '../../components/Skeletons/ProductListSkeleton/ProductListSkeleton';
import { scrollToTop } from '../../helpers/scrollToTop';
import { Loader } from '../../components/Loader';
import { fecthProductDetails } from '../../redux/slices/productDetailsSlice';

import container from '../../styles/utils/container.module.scss';
import styles from './ProductDetailsPage.module.scss';
import arrowRightDisable from '../../assets/icons/gray-arrows/arrow-left.svg';

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const { item: productDetails, loaded: detailsLoaded }
    = useAppSelector(selectProductDetails);

  const {
    data: { discount },
    loaded: suggestedLoaded,
  } = useAppSelector(selectSuggestedProducts);

  const [activeImg, setActiveImg] = useState('');

  const productImages = useMemo(() => {
    if (!detailsLoaded) {
      return [];
    }

    return productDetails.images.map(
      (imageURL) => `/product_catalog_fe/${imageURL}`,
    );
  }, [productId, detailsLoaded]);

  const getLinkToProduct = (
    options: Partial<Pick<ProductDetails, 'capacity' | 'color'>>,
  ) => {
    if (!productDetails) {
      return '.';
    }

    const { color, capacity } = options;

    const { namespaceId } = productDetails;

    const currentColor = color || productDetails.color;
    const currentCapacity = capacity || productDetails.capacity;

    const url = `../${namespaceId}-${currentCapacity}-${currentColor}`;

    return url.toLowerCase().trim();
  };

  useEffect(() => {
    scrollToTop();

    if (!productId) {
      return;
    }

    dispatch(fecthProductDetails(productId));
  }, [productId]);

  useEffect(() => {
    if (suggestedLoaded) {
      return;
    }

    dispatch(fecthSuggestedProducts());
  }, [suggestedLoaded]);

  useEffect(() => {
    if (!productImages.length) {
      return;
    }

    setActiveImg(productImages[0]);
  }, [productImages]);

  if (!detailsLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.PhonesDetails}>
      <div className={container.limit}>
        <Breadcrumbs className={styles.breadcrumbs} />
        <Link to="/phones" className={styles.button}>
          <img src={arrowRightDisable} alt="arrow" />
          Back
        </Link>
        <h2 className={styles.PhonesDetails__title}>{productDetails.name}</h2>

        <div className={styles.flexBlock}>
          <div className={styles.photo}>
            <SelectImg
              images={productImages}
              activeImg={activeImg}
              setActiveImg={setActiveImg}
              title={productDetails.name}
            />

            <div className={styles.photo__current}>
              <img
                className={styles.image}
                src={activeImg}
                alt={productDetails.name}
              />
            </div>
          </div>

          <div className={styles.functional}>
            <ColorFunctionality
              colors={productDetails.colorsAvailable as ColorKey[]}
              redirect={getLinkToProduct}
            />

            <CapacityFunctionality
              capacityList={productDetails.capacityAvailable}
              redirect={getLinkToProduct}
            />

            <ButtonsFunctionality item={productDetails} />
          </div>
        </div>

        <div className={styles.GridContainer}>
          <article className={styles.About}>
            <h3
              className={`${styles.GridContainer__title} ${styles.About__title}`}
            >
              About
            </h3>
            {productDetails.description.map((info) => (
              <>
                <h4 className={styles.About__info}>{info.title}</h4>
                <p className={styles.About__text}>{info.text.join()}</p>
              </>
            ))}
          </article>

          <article className={styles.TechInfo}>
            <h3
              className={`${styles.GridContainer__title} ${styles.TechInfo__title}`}
            >
              Tech specs
            </h3>

            <ul className={styles.card__characteristics}>
              <li className={styles.TechInfo__characteristic}>
                <p>Screen</p>
                <p className={styles.TechInfo__value}>
                  {productDetails.screen || '-'}
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Resolution</p>
                <p className={styles.TechInfo__value}>
                  {productDetails.resolution || '-'}
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Processor</p>
                <p className={styles.TechInfo__value}>
                  {productDetails.processor || '-'}
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>RAM</p>
                <p className={styles.TechInfo__value}>
                  {productDetails.ram || '-'}
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Built in memory</p>
                <p className={styles.TechInfo__value}>
                  {productDetails.capacity || '-'}
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Camera</p>
                <p className={styles.TechInfo__value}>
                  {productDetails.camera || '-'}
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Zoom</p>
                <p className={styles.TechInfo__value}>
                  {productDetails.zoom || '-'}
                </p>
              </li>
              <li className={styles.TechInfo__characteristic}>
                <p>Cell</p>
                <p className={styles.TechInfo__value}>
                  {!productDetails.cell.length
                    ? '-'
                    : productDetails.cell.join(' ')}
                </p>
              </li>
            </ul>
          </article>
        </div>
        <div className={styles.swiperContainer}>
          {suggestedLoaded ? (
            <SwiperProducts title="You may also like" items={discount} />
          ) : (
            <ProductsListSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};
