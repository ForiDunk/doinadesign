import React from 'react';
import styles from './Components.module.css';
import NavPill from '../../components/NavPill/NavPill';
import Button from '../../components/Button/Button';

export default () => (
  <div className={styles.components}>
    <div className={styles.component}>
      <span>NavPill :</span>
      <NavPill />
    </div>
    <div className={styles.component}>
      <span>Button :</span>
      <Button>Button</Button>
    </div>
  </div>
);
