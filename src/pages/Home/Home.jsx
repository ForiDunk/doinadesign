import React from 'react';
import styles from './Home.module.scss';

import Header from './Header';
import Projects from './Projects';
import Certificates from './Certificates.jsx';

const openTo = (link) => window.open(link, '_blank');

export default () => (
  <div className={styles.home}>
    <Header openTo={openTo} />
    <Projects />
    <Certificates openTo={openTo} />

    <div className={styles.about}>
      <div className={styles.title}>ABOUT ME</div>
      <div className={styles.text}>
        <p>
          My name is Doina Lisneac-Forreiter, a 27 years old aspiring UI/UX
          Designer. I was always a very curious person, eager to learn a lot and
          try new things. I have been working as an Aesthetician for almost 2
          years. For the last 2.5 years I’ve worked in Accounting and Customer
          Support fields, but I was unhappy about my career and felt that this
          is not my path, that is why I have decided to open a new door in my
          life and started to learn web design.
        </p>
        <p>
          Why did I choose this particular profession? First of all, I’ve been
          inspired by my husband who is a web developer. He is so passionate
          about this field and he has been my best support in starting this
          journey. Second of all, I has been searching for a creative and always
          changing career because I have been inloved with art and technology
          since childhood.
        </p>
      </div>
    </div>
  </div>
);
