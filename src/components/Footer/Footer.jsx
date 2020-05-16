import React from 'react';
import styles from './Footer.module.scss';
import { openTo } from '../../utils/navigation';
import { ReactComponent as Linkedin } from '../../assets/svgs/icon-linkedin2.svg';
import { ReactComponent as Instagram } from '../../assets/svgs/icon-instagram2.svg';
import { ReactComponent as Mail } from '../../assets/svgs/icon-mail2.svg';
import { ReactComponent as Dribbble } from '../../assets/svgs/icon-dribbble2.svg';

export default () => {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>© 2020 Doina Lisneac-Forreiter</div>
      <div className={styles.social}>
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
    </div>
  );
};
