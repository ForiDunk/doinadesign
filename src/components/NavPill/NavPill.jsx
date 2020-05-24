import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NavHome } from '../../assets/svgs/nav-home.svg';
import { ReactComponent as NavProjects } from '../../assets/svgs/nav-projects.svg';
import { ReactComponent as NavAbout } from '../../assets/svgs/nav-about.svg';
import { ReactComponent as NavOther } from '../../assets/svgs/nav-other.svg';
import styles from './NavPill.module.scss';
import { navTo } from '../../utils/navigation';

export default ({ active, short = false }) => {
  const history = useHistory();

  if (short) {
    return (
      <div className={`${styles.navPill} ${styles.navPillShort}`}>
        <div onClick={() => history.goBack()}>
          <NavHome />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.navPill}>
      <div
        className={active === 'home' ? styles.active : null}
        onClick={() => navTo(document.querySelector('#home'))}
      >
        <NavHome />
      </div>
      <div
        className={active === 'projects' ? styles.active : null}
        onClick={() => navTo(document.querySelector('#projects'))}
      >
        <NavProjects />
      </div>
      <div
        className={active === 'about' ? styles.active : null}
        onClick={() => navTo(document.querySelector('#about'))}
      >
        <NavAbout />
      </div>
      <div
        className={active === 'others' ? styles.active : null}
        onClick={() => navTo(document.querySelector('#others'))}
      >
        <NavOther />
      </div>
    </div>
  );
};
