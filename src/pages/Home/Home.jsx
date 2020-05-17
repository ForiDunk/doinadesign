import React from 'react';
import styles from './Home.module.scss';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Others from './Others';
import NavPill from '../../components/NavPill/NavPill';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';

export default () => {
  const [active, setActive] = useState('home');
  return (
    <>
      <NavPill active={active} />
      <div className={styles.home}>
        <Header setActive={setActive} />
        <Projects setActive={setActive} />
        <About setActive={setActive} />
        <Others setActive={setActive} />
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};
