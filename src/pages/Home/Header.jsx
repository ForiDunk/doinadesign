import React from 'react';
import styles from './Home.module.scss';
import { ReactComponent as Linkedin } from '../../assets/svgs/icon-linkedin.svg';
import { ReactComponent as Instagram } from '../../assets/svgs/icon-instagram.svg';
import { ReactComponent as Mail } from '../../assets/svgs/icon-mail.svg';

export default ({ openTo }) => (
  <>
    <div id='home' className={styles.header}>
      <div className={styles.title}>Hi, there! Welcome to my portfolio!</div>
      <div className={styles.text}>
        I am Doina, an aspiring UX/UI Designer based in Brasov, Romania.
      </div>
      <div className={styles.socials}>
        <Linkedin
          onClick={() =>
            openTo(
              'https://www.linkedin.com/in/lisneac-forreiter-doina-b320bb183/'
            )
          }
          className={styles.social}
        />
        <Instagram
          onClick={() => openTo('https://www.instagram.com/marley_fox92/')}
          className={styles.social}
        />
        <a
          href='mailto:doinalisneac92@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Mail className={styles.social} />
        </a>
      </div>
    </div>
  </>
);