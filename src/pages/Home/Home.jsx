import React from 'react';
import styles from './Home.module.scss';
import { ReactComponent as Linkedin } from './icon-linkedin.svg';
import { ReactComponent as Instagram } from './icon-instagram.svg';
import { ReactComponent as Mail } from './icon-mail.svg';
import headerBackground from './header.svg';

export default () => (
  <div className={styles.home}>
    <div
      style={{ backgroundImage: `url(${headerBackground})` }}
      className={styles.header}
    >
      <div className={styles.title}>Hi, there! Welcome to my portfolio!</div>
      <div className={styles.text}>
        I am Doina, an aspiring UX/UI Designer based in Brasov, Romania.
      </div>
      <div className={styles.socials}>
        <Linkedin className={styles.social} />
        <Instagram className={styles.social} />
        <Mail className={styles.social} />
      </div>
    </div>
  </div>
);
