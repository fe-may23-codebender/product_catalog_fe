/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './Toggle.module.scss';

type Props = {
  value: boolean;
  onChange: () => void;
};

const Toggle: React.FC<Props> = ({ value, onChange }) => (
  <label className={styles.switch} htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onChange={onChange}
      checked={value}
      readOnly
    />
    <span className={styles.slider} />
    <span className={styles.wave} />
  </label>
);

export default Toggle;
