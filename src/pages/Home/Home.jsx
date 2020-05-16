import React from 'react';
import styles from './Home.module.scss';

import Header from './Header';
import Projects from './Projects';
import About from './About';
import Others from './Others';

export default () => (
  <div className={styles.home}>
    <Header />
    <Projects />
    <About />
    <Others />
  </div>
);
