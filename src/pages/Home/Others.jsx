import React from 'react';
// import Tilt from 'react-tilt';
import Tilt from 'react-parallax-tilt';
import styles from './Home.module.scss';
import data from './othersData';

const firstRow = data.slice(0, 8);
const secondRow = data.slice(8, 16);

export default ({ openTo }) => (
  <div id='about' className={styles.others}>
    <div className={styles.title}>OTHER ARTSY HOBBIES</div>
    <div className={styles.text}>
      I have been always passionate about drawing and tattoos. In 2018 I’ve
      finished a tattoo course and started tattooing in my spare time. Here are
      some of my works (please don’t judge too harsh):
    </div>
    <div className={styles.row}>
      {firstRow.map((item) => (
        <Tilt key={item.image}>
          <img
            className={styles.img}
            src={item.image}
            onClick={() => openTo(item.url)}
            alt='Art'
          />
        </Tilt>
      ))}
    </div>
    <div className={styles.row}>
      {secondRow.map((item) => (
        <Tilt key={item.image}>
          <img
            className={styles.img}
            src={item.image}
            onClick={() => openTo(item.url)}
            alt='Art'
          />
        </Tilt>
      ))}
    </div>
  </div>
);