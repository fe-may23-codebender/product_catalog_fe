import { useState } from 'react';
import styles from './CapacityFunctionality.module.scss';

const capacity = ['64GB', '256GB', '512GB'];

export const CapacityFunctionality = () => {
  const [activeCapacity, setActiveCapacity] = useState<string | null>(null);

  function changeCapacity(gb: string) {
    setActiveCapacity(gb);
  }

  return (
    <div className={styles.capacity}>
      <p>Select capacity</p>

      <ul className={styles.capacity__list}>
        {capacity.map((cap) => (
          <li key={cap}>
            <button
              type="button"
              className={styles.capacity__list__item}
              onClick={() => changeCapacity(cap)}
            >
              <div
                className={`${styles.capacity__container} ${
                  activeCapacity === cap ? styles.is__active : ''
                }`}
              >
                {cap}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
