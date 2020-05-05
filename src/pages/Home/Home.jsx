import React from 'react';
import styles from './Home.module.scss';

import Header from './Header';
import Projects from './Projects';
import Certificates from './Certificates.jsx';
import About from './About';
import Others from './Others';

const openTo = (link) => window.open(link, '_blank');

export default () => (
  <div className={styles.home}>
    <Header openTo={openTo} />
    <Projects />
    <Certificates openTo={openTo} />
    <About />
    <Others openTo={openTo} />
  </div>
);
