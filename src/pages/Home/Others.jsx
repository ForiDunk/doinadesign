import React from 'react';
import styles from './Home.module.scss';
import data from './othersData';
import { openTo } from '../../utils/navigation';
import { useEffect } from 'react';

const firstRow = data.slice(0, 8);
const secondRow = data.slice(8, 16);

export default ({ setActive }) => {
  useEffect(() => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) setActive('others');
      },
      { threshold: [0.1] }
    );
    observer.observe(document.querySelector('#others'));
  }, [setActive]);

  return (
    <div id='others' className={styles.others}>
      <div className={styles.title}>OTHER ARTSY HOBBIES</div>
      <div className={styles.text}>
        I have been always passionate about drawing and tattoos. In 2018 I’ve
        finished a tattoo course and started tattooing in my spare time. Here
        are some of my works (please don’t judge too harsh):
      </div>
      <div className={styles.row}>
        {firstRow.map((item, i) => (
          <img
            loading='lazy'
            key={item.url}
            className={styles.img}
            src={`./assets/images/others/${i + 1}.png`}
            onClick={() => openTo(item.url)}
            alt='Art'
          />
        ))}
      </div>
      <div className={styles.row}>
        {secondRow.map((item, i) => (
          <img
            loading='lazy'
            key={item.url}
            className={styles.img}
            src={`./assets/images/others/${i + 9}.png`}
            onClick={() => openTo(item.url)}
            alt='Art'
          />
        ))}
      </div>
    </div>
  );
};
