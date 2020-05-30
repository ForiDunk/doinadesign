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
    <div id="about" className={styles.about}>
      <div className={styles.title}>ABOUT ME</div>
      <div className={styles.container}>
        <div className={styles.text}>
          {isMedium && (
            <img className={styles.avatar} src={avatarSrc} alt="Avatar of me" />
          )}
          <p>
            My name is Doina Lisneac-Forreiter, a 27-year-old aspiring UI/UX
            Designer. I was always a very curious person, eager to learn a lot
            and try new things. I’ve worked as an Aesthetician for almost 2
            years, in Accounting and Customer Support fields for 2.5 years, but
            I was unhappy about my career. As my moto is: “If you don’t like it,
            change it”, I’ve decided to open a new door in my life and started
            learning web design.
          </p>
          <p>
            Why did I choose this particular profession? First of all, I have
            been searching for a creative and always changing field because of
            my passion for art and my curious nature. Second of all, I’ve been
            inspired by my husband who is a web developer and who supported me a
            lot in starting this journey. I believe that my willingness to learn
            and hard work will help me to achieve my goals of becoming a great
            designer.
          </p>
        </div>
        {!isMedium && (
          <img className={styles.avatar} src={avatarSrc} alt="Avatar of me" />
        )}
      </div>
    </div>
  );
};
