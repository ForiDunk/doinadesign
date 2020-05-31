import React, { useEffect } from 'react';
import Magnifier from 'react-magnifier';
import styles from './RoarBikes.module.scss';
import wf1 from '../../assets/images/roarbikes/wf1.png';
import wf2 from '../../assets/images/roarbikes/wf2.png';
import p1 from '../../assets/images/roarbikes/p1.png';
import p2 from '../../assets/images/roarbikes/p2.png';
import p3 from '../../assets/images/roarbikes/p3.png';
import p4 from '../../assets/images/roarbikes/p4.png';
import Footer from '../../components/Footer/Footer';
import NavPill from '../../components/NavPill/NavPill';

const colors = ['#000000', '#BF3333', '#FFFFFF'];

export default () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <NavPill short />
      <div className={styles.container}>
        <div className={`${styles.title} ${styles.header}`}>ROAR BIKES</div>

        <img
          className={styles.gif}
          loading="eager"
          src="./roarbikes.gif"
          alt="Roar Bike"
        />

        <div className={styles.title}>Client: </div>
        <div className={styles.text}>
          Roar Bikes is a manufacturer of small run, contemporary bicycles sold
          exclusively from their own website. Roar Bikes currently have 3 models
          of bike to purchase (Siamese, Sphynx, Bengal).
        </div>

        <div className={styles.title}>Primary objectives: </div>
        <div className={styles.text}>
          To build a e-commerce website for people to browse &amp; purchase. To
          design the Homepage and a Product Page for each of the bike types.
        </div>

        <div className={styles.title}>Persona: </div>
        <div className={styles.text}>
          The persona for this project is a 28 years old graphic designer called
          Jake who works for a large design agency in Los Angles. Jake prides
          himself on having strange &amp; interesting versions of everyone elses
          everyday objects. His shoes are hand made &amp; his backpack is pink.
          He likes to make his purchase (big or small) from local responsible
          crafts people. He doesn’t own a car. He always brings a reusable cup
          to the coffee shop. Jake cycles to work and wants his bicycle to be
          practical but unique.
        </div>

        <div className={styles.title}>Wireframes: </div>
        <div className={styles.wireframes}>
          <Magnifier src={wf1} zoomFactor={2} />
          <div className={styles.secondCol}>
            <Magnifier src={wf2} zoomFactor={2} />
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
          </div>
        </div>

        <div className={styles.title}>Fonts:</div>
        <div className={styles.fonts}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
            <div>
              <strong>Barlow Semi Condensed </strong>(for Headlines)
            </div>
            <div>
              <div>
                <strong>ABCDEFGHIJKLMNOPQRSTUWXYZ</strong>
              </div>
              <div>abcdefghijklmnopqrstuwxyz</div>
              <div>1234567890</div>
            </div>
          </div>
          <div>
            <div>
              <strong>Montserrat</strong> (for body text)
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

        <div className={styles.title}>High-fidelity Design:</div>
        <div className={styles.designs}>
          <Magnifier src={p1} zoomFactor={2} />
          <Magnifier src={p2} zoomFactor={2} />
          <Magnifier src={p3} zoomFactor={2} />
          <Magnifier src={p4} zoomFactor={2} />
        </div>
        <Footer />
      </div>
    </>
  );
};
