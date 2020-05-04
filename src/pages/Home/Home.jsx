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
  </div>
);
