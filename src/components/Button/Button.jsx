import React from 'react';
import styles from './Button.module.css';
import classes from './Button.module.css';

export default ({ children }) => (
  <button className={classes.button}>{children}</button>
);
