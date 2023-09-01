import { FC, useState } from 'react';
import cn from 'classnames';
import styles from './AddCardButtonAction.module.scss';
import { Modal } from './Modal';

type Props = {
  className?: string;
  title?: string;
};

export const AddToCartButtonAction: FC<Props> = ({ className = '', title }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddToCart = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={cn(styles.addToCard, className)}
        onClick={handleAddToCart}
      >
        Add to card
      </button>
      {modalOpen && <Modal closeModal={handleCloseModal} title={title} />}
    </>
  );
};
