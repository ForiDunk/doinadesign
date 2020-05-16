import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Home.module.scss';
import Button from '../../components/Button/Button';
import maynooth from '../../assets/images/maynooth.png';
import roadBikes from '../../assets/images/road-bikes.png';
import chefRecipe1 from '../../assets/images/chef-recipe1.png';
import chefRecipe2 from '../../assets/images/chef-recipe2.png';
import { useEffect } from 'react';

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
  }, [setActive]);

  return (
    <div id='projects' className={styles.projects}>
      <div className={styles.title}>PROJECTS</div>

      <div className={styles.project}>
        <img className={styles.projectImg} src={maynooth} alt='Maynooth' />
        <div className={styles.projectMeta}>
          <div className={styles.title}>MAYNOOTH FURNITURE</div>
          <div className={styles.text}>
            A conceptual e-commerce website selling affordable high-end design
            furniture made in Ireland.
          </div>
          <Button onClick={() => history.push('/maynooth')}>Show more</Button>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectMeta}>
          <div className={styles.title}>ROAR BIKES</div>
          <div className={styles.text}>
            A conceptual e-commerce website selling contemporary bicycles
            exclusively from their own website.
          </div>
          <Button onClick={() => history.push('/road-bikes')}>Show more</Button>
        </div>
        <img className={styles.projectImg} src={roadBikes} alt='Road Bikes' />
      </div>

      <div className={styles.project}>
        <div className={styles.projectImg}>
          <img src={chefRecipe1} alt='Chef Recipe 1' />
          <img src={chefRecipe2} alt='Chef Recipe 2' />
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
