import React from 'react';
import styles from './Button.module.scss';

export default ({ children }) => (
  <button className={styles.button}>{children}</button>
);
