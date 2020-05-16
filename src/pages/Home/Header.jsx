import React from 'react';
import styles from './Home.module.scss';
import { ReactComponent as Linkedin } from '../../assets/svgs/icon-linkedin.svg';
import { ReactComponent as Instagram } from '../../assets/svgs/icon-instagram.svg';
import { ReactComponent as Mail } from '../../assets/svgs/icon-mail.svg';
import { ReactComponent as Dribbble } from '../../assets/svgs/icon-dribbble.svg';
import { openTo } from '../../utils/navigation';

export default () => (
  <>
    <div id='home' className={styles.header}>
      <div className={styles.title}>Hi, I’m Doina.</div>
      <div className={styles.text}>
        I’m an aspiring UX/UI Designer based in Brasov, Romania.
      </div>
      <div className={styles.socials}>
        <Dribbble
          title='Dribbble'
          onClick={() => openTo('https://dribbble.com/doinalisneac')}
          className={styles.social}
        />
        <Linkedin
          title='LinkedIn'
          onClick={() =>
            openTo(
              'https://www.linkedin.com/in/lisneac-forreiter-doina-b320bb183/'
            )
          }
          className={styles.social}
        />
        <Instagram
          title='Instagram'
          onClick={() => openTo('https://www.instagram.com/marley_fox92/')}
          className={styles.social}
        />
        <a
          title='E-Mail'
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
