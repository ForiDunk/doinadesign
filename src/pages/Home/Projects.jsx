import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Home.module.scss';
import Button from '../../components/Button/Button';

export default ({ setActive }) => {
  const history = useHistory();

  useEffect(() => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) setActive('projects');
      },
      { threshold: [0.1] }
    );
    observer.observe(document.querySelector('#projects'));
    observer.observe(document.querySelectorAll('.project')[0]);
    observer.observe(document.querySelectorAll('.project')[1]);
    observer.observe(document.querySelectorAll('.project')[2]);
  }, [setActive]);

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.title}>PROJECTS</div>

      <div className={`${styles.project} project`}>
        <img
          loading="lazy"
          className={styles.projectImg}
          src="./assets/images/maynooth.png"
          alt="Maynooth"
          onClick={() => history.push('/maynooth')}
        />
        <div className={styles.projectMeta}>
          <div className={styles.title}>MAYNOOTH FURNITURE</div>
          <div className={styles.text}>
            A conceptual e-commerce website selling affordable high-end design
            furniture made in Ireland.
          </div>
          <Button onClick={() => history.push('/maynooth')}>Show more</Button>
        </div>
      </div>

      <div className={`${styles.project} project`}>
        <div className={styles.projectMeta}>
          <div className={styles.title}>ROAR BIKES</div>
          <div className={styles.text}>
            A conceptual e-commerce website selling contemporary bicycles
            exclusively from their own website.
          </div>
          <Button onClick={() => history.push('/roar-bikes')}>Show more</Button>
        </div>
        <img
          loading="lazy"
          className={styles.projectImg}
          src="./assets/images/road-bikes.png"
          alt="Road Bikes"
          onClick={() => history.push('/roar-bikes')}
        />
      </div>

      <div className={`${styles.project} project`}>
        <div
          className={styles.projectImg}
          onClick={() => history.push('/chef-recipes')}
        >
          <img
            loading="lazy"
            src="./assets/images/chef-recipe1.png"
            alt="Chef Recipe 1"
          />
          <img
            loading="lazy"
            src="./assets/images/chef-recipe2.png"
            alt="Chef Recipe 2"
          />
        </div>
        <div className={styles.projectMeta}>
          <div className={styles.title}>CHEF RECIPES</div>
          <div className={styles.text}>
            A conceptual recipe app which can make user’s life easier and
            cooking more entartaining by the possibility of sharing the results
            with friends on social media.
          </div>
          <Button onClick={() => history.push('/chef-recipes')}>
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};
