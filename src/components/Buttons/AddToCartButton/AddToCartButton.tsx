import { FC, useState, useMemo } from 'react';
import cn from 'classnames';
import { Product } from '../../../types';
import { Modal } from '../../Modal';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectCart } from '../../../redux/selectors';
import * as cartService from '../../../redux/slices/cartSlice';
import styles from './AddToCartButton.module.scss';

type Props = {
  product: Product;
  className?: string;
  title?: string;
};

export const AddToCartButton: FC<Props> = (props) => {
  const { product, className = '', title } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectCart);

  const isProductInCart = useMemo(() => product.id in items, [items]);

  const toggleCartProduct = () => {
    if (isProductInCart) {
      return;
    }

    openModal();
    dispatch(cartService.addOneModel(product));
  };

  return (
    <>
      <button
        type="button"
        className={cn(styles.addToCard, className, {
          [styles.InCart]: isProductInCart,
        })}
        onClick={toggleCartProduct}
      >
        {!isProductInCart ? 'Add to card' : 'Added to card'}
      </button>

      {modalOpen && (
        <Modal isOpen={modalOpen} closeModal={closeModal} title={title} />
      )}
    </>
  );
};
