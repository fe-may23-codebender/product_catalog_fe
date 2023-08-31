/* eslint-disable max-len */
import { useState } from 'react';
import styles from './ColorFunctionality.module.scss';

const colors = [
  { id: 1, title: 'gold' },
  { id: 2, title: 'green' },
  { id: 3, title: 'black' },
  { id: 4, title: 'silver' },
];

export const ColorFunctionality = () => {
  const [activeColorId, setActiveColorId] = useState<number | null>(null);

  function changeColor(colorId: number) {
    setActiveColorId(colorId);
  }

  return (
    <div className={styles.color}>
      <p>Avaliable colors</p>

      <ul className={styles.color__list}>
        {colors.map((color) => (
          <li key={color.id}>
            <button
              type="button"
              className={styles.color__list__item}
              onClick={() => changeColor(color.id)}
            >
              <div
                className={`${styles.color__circle} ${
                  activeColorId === color.id ? styles.is__active : ''
                }`}
              >
                <div
                  className={`${styles.color__circle__color} ${
                    styles[`color__circle__${color.title}`]
                  }`}
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
