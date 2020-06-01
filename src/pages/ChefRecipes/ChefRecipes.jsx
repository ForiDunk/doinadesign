import React, { useEffect } from 'react';
import styles from './ChefRecipes.module.scss';
import Magnifier from 'react-magnifier';
import NavPill from '../../components/NavPill/NavPill';
import Footer from '../../components/Footer/Footer';
import { isPhone } from '../../utils/device';

const colors = ['#F17B24', '#F3C41C', '#FFFFFF', '#181441', '#C4C4C4'];

export default () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <NavPill short />
      <div className={styles.container}>
        <div className={styles.section1}>
          <div>
            {!isPhone && (
              <div className={`${styles.title} ${styles.header}`}>
                CHEF RECIPES
              </div>
            )}
            <div className={styles.title}>Primary objectives:</div>
            <div className={styles.text}>
              To build an app which will make cooking more fun and entertaining.
              Users should be able to share their work with their friends on
              social media at the end.
            </div>
            <div className={styles.title}>Persona: </div>
            <div className={styles.text}>
              The persona for this project is a 25 years old freelance web
              developer called Harry. As he is working from home he usually eats
              delivery food. Sometimes Harry is in a mood of cooking something
              home-made and easy because he gets tired of delivery food. Harry
              is very active on social media and likes to share his life on his
              personal blog on Instagram.
            </div>
          </div>
          <img loading='eager' src='./chefRecipes.gif' alt='Chef Recipes gif' />
          {isPhone && (
            <div className={`${styles.title} ${styles.header}`}>
              CHEF RECIPES
            </div>
          )}
        </div>

        <div className={styles.title}>Wireframes:</div>
        <div className={styles.section2}>
          <div className={styles.leftSide}>
            {isPhone ? (
              <div className={styles.wireframes}>
                <div>
                  <img
                    src='./assets/images/chefRecipes/wf1.png'
                    alt='wireframe'
                  />
                </div>
                <div>
                  <img
                    src='./assets/images/chefRecipes/wf2.png'
                    alt='wireframe'
                  />
                </div>
                <div>
                  <img
                    src='./assets/images/chefRecipes/wf3.png'
                    alt='wireframe'
                  />
                </div>
                <div>
                  <img
                    src='./assets/images/chefRecipes/wf4.png'
                    alt='wireframe'
                  />
                </div>
              </div>
            ) : (
              <div className={styles.wireframes}>
                <Magnifier
                  src='./assets/images/chefRecipes/wf1.png'
                  zoomFactor={2}
                />
                <Magnifier
                  src='./assets/images/chefRecipes/wf2.png'
                  zoomFactor={2}
                />
                <Magnifier
                  src='./assets/images/chefRecipes/wf3.png'
                  zoomFactor={2}
                />
                <Magnifier
                  src='./assets/images/chefRecipes/wf4.png'
                  zoomFactor={2}
                />
              </div>
            )}
            <div className={styles.colorsContainer}>
              <div className={styles.title}>Colors:</div>
              <div className={styles.colors}>
                {colors.map((color) => (
                  <div key={color} className={styles.color}>
                    <div style={{ backgroundColor: color }}></div>
                    <div>{color}</div>
                  </div>
                ))}
              </div>
            </div>
            {!isPhone && (
              <div className={styles.fonts}>
                <div className={styles.title}>Fonts:</div>
                <div style={{ fontFamily: "'AvenirMedium', sans-serif" }}>
                  <div>
                    <strong>Avenir</strong>
                  </div>
                  <div>
                    <div>
                      <strong>ABCDEFGHIJKLMNOPQRSTUWXYZ</strong>
                    </div>
                    <div>abcdefghijklmnopqrstuwxyz</div>
                    <div>1234567890</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.rightSide}>
            {isPhone ? (
              <div>
                <img
                  src='./assets/images/chefRecipes/wf5.png'
                  alt='wireframe'
                />
              </div>
            ) : (
              <Magnifier
                src='./assets/images/chefRecipes/wf5.png'
                zoomFactor={2}
              />
            )}
          </div>
        </div>
        {isPhone && (
          <div className={styles.fonts}>
            <div className={styles.title}>Fonts:</div>
            <div style={{ fontFamily: "'AvenirMedium', sans-serif" }}>
              <div>
                <strong>Avenir</strong>
              </div>
              <div>
                <div>
                  <strong>ABCDEFGHIJKLMNOPQRSTUWXYZ</strong>
                </div>
                <div>abcdefghijklmnopqrstuwxyz</div>
                <div>1234567890</div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.title}>High-fidelity Design:</div>
        <div className={styles.section3}>
          {isPhone ? (
            <div className={styles.leftSide}>
              <div>
                <img
                  src='./assets/images/chefRecipes/p1.png'
                  alt='high fidelity design'
                />
              </div>
              <div>
                <img
                  src='./assets/images/chefRecipes/p2.png'
                  alt='high fidelity design'
                />
              </div>
              <div>
                <img
                  src='./assets/images/chefRecipes/p3.png'
                  alt='high fidelity design'
                />
              </div>
              <div>
                <img
                  src='./assets/images/chefRecipes/p5.png'
                  alt='high fidelity design'
                />
              </div>
              <div>
                <img
                  src='./assets/images/chefRecipes/p6.png'
                  alt='high fidelity design'
                />
              </div>
              <div>
                <img
                  src='./assets/images/chefRecipes/p7.png'
                  alt='high fidelity design'
                />
              </div>
            </div>
          ) : (
            <div className={styles.leftSide}>
              <Magnifier
                src='./assets/images/chefRecipes/p1.png'
                zoomFactor={2}
              />
              <Magnifier
                src='./assets/images/chefRecipes/p2.png'
                zoomFactor={2}
              />
              <Magnifier
                src='./assets/images/chefRecipes/p3.png'
                zoomFactor={2}
              />
              <Magnifier
                src='./assets/images/chefRecipes/p5.png'
                zoomFactor={2}
              />
              <Magnifier
                src='./assets/images/chefRecipes/p6.png'
                zoomFactor={2}
              />
              <Magnifier
                src='./assets/images/chefRecipes/p7.png'
                zoomFactor={2}
              />
            </div>
          )}
          <div className={styles.rightSide}>
            {isPhone ? (
              <div>
                <img
                  src='./assets/images/chefRecipes/p4.png'
                  alt='high fidelity design'
                />
              </div>
            ) : (
              <Magnifier
                src='./assets/images/chefRecipes/p4.png'
                zoomFactor={2}
              />
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
