import React from 'react';
import styles from './Home.module.scss';
import avatarSrc from '../../assets/images/avatar.png';
import { useEffect } from 'react';
import { useState } from 'react';

export default ({ setActive }) => {
  const [isMedium, setIsMedium] = useState(window.innerWidth <= 768);
  useEffect(() => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) setActive('about');
      },
      { threshold: [0.1] }
    );
    observer.observe(document.querySelector('#about'));
  }, [setActive]);

  const checIfMedium = () => setIsMedium(window.innerWidth <= 768);

  window.addEventListener('resize', checIfMedium);
  window.addEventListener('orientationchange', checIfMedium);

  return (
    <div id='about' className={styles.about}>
      <div className={styles.title}>ABOUT ME</div>
      <div className={styles.container}>
        <div className={styles.text}>
          {isMedium && (
            <img className={styles.avatar} src={avatarSrc} alt='Avatar of me' />
          )}
          <p>
            My name is Doina Lisneac-Forreiter, a 27 years old aspiring UI/UX
            Designer. I was always a very curious person, eager to learn a lot
            and try new things. I have been working as an Aesthetician for
            almost 2 years. For the last 2.5 years I’ve worked in Accounting and
            Customer Support fields, but I was unhappy about my career and felt
            that this is not my path, that is why I have decided to open a new
            door in my life and started to learn web design.
          </p>
          <p>
            Why did I choose this particular profession? First of all, I’ve been
            inspired by my husband who is a web developer. He is so passionate
            about this field and he has been my best support in starting this
            journey. Second of all, I has been searching for a creative and
            always changing career because I have been inloved with art and
            technology since childhood.
          </p>
        </div>
        {!isMedium && (
          <img className={styles.avatar} src={avatarSrc} alt='Avatar of me' />
        )}
      </div>
    </div>
  );
};
