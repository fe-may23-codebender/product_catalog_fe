import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import * as cartService from '../../../redux/slices/cartSlice';

import styles from './Modal.module.scss';
import closeIcon from '../../../assets/icons/close.svg';
import modaleImg from '../../../assets/images/success.svg';

type Props = {
  onHandleModalClose: (value: boolean) => void;
};

export const Modal: React.FC<Props> = ({ onHandleModalClose }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => {
      dispatch(cartService.clear());
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <>
      <div className={styles.ModalContainer}>{}</div>
      <div className={styles.ModalWindow}>
        <button
          type="button"
          className={styles.ModalWindow__CloseBtn}
          onClick={() => onHandleModalClose(false)}
        >
          <img src={closeIcon} alt="close" />
        </button>
        <div className={styles.ModalWindow__Content}>
          <div className={styles.ModalWindow__Img}>
            <img
              src={modaleImg}
              alt="success"
              className={styles.ModalWindow__Img__Icon}
            />
          </div>

          <div className={styles.ModalWindow__Text}>
            We have successfully received your order!
            <br />
            <br />
            <span className={styles.ModalWindow__Text__Loading}>
              Redirecting to homepage...
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
