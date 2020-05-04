import React from 'react';
import styles from './Home.module.scss';

import certificates from './certificates';

const firstCol = certificates.slice(0, 8);
const secondCol = certificates.slice(8, 15);

export default ({ openTo }) => (
  <div id='certificates' className={styles.certificates}>
    <div className={styles.title}>CERTIFICATES</div>
    <div className={styles.certContainer}>
      <div className={styles.certList}>
        {firstCol.map(({ name, url }) => (
          <div key={name} onClick={() => openTo(url)} className={styles.text}>
            {name}
          </div>
        ))}
      </div>

      <div className={styles.certList}>
        {secondCol.map(({ name, url }) => (
          <div key={name} onClick={() => openTo(url)} className={styles.text}>
            {name}
          </div>
        ))}
      </div>
    </div>
  </div>
);
