import React from 'react';
import styles from './Button.module.scss';

export default ({ children, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);
