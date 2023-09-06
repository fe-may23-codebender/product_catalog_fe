import { FC } from 'react';
import styles from './CapacityFunctionality.module.scss';
import { ButtonType, ProductDetails } from '../../types';
import { Button } from '../Buttons/Button';

type Props = {
  capacityList: string[];
  redirect: (options: Pick<ProductDetails, 'capacity'>) => string;
};

export const CapacityFunctionality: FC<Props> = ({
  capacityList,
  redirect,
}) => {
  return (
    <div className={styles.capacity}>
      <p>Select capacity</p>

      <ul className={styles.capacity__list}>
        {capacityList.map((capacity) => (
          <li key={capacity}>
            <Button
              type={ButtonType.Link}
              to={redirect({ capacity })}
              className={styles.capacity__list__item}
            >
              {capacity}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
