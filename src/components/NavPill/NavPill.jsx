import React from 'react';
import styles from './NavPill.module.css';
import { ReactComponent as Projects } from './icon-projects.svg';
import { ReactComponent as Certificates } from './icon-certificates.svg';
import { ReactComponent as About } from './icon-about.svg';
import { ReactComponent as Other } from './icon-other.svg';

export default () => (
  <div className={styles.navPill}>
    <div className={styles.pill}>
      <div className={styles.pillText}>Projects</div>
      <Projects className={styles.pillIcon} />
    </div>

    <div className={styles.pill}>
      <div className={styles.pillText}>Certificates</div>
      <Certificates className={styles.pillIcon} />
    </div>

    <div className={styles.pill}>
      <div className={styles.pillText}>About me</div>
      <About className={styles.pillIcon} />
    </div>

    <div className={styles.pill}>
      <div className={styles.pillText}>Other stuff</div>
      <Other className={styles.pillIcon} />
    </div>
  </div>
);
