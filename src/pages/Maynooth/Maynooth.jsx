import React from 'react';
import styles from './Maynooth.module.scss';
import maynoothGif from '../../assets/images/maynooth/maynooth.gif';
import Footer from '../../components/Footer/Footer';

const colors = ['#F3B541', '#842C68', '#FFFFFF', '#EDEDEF', '#3C3C3C'];

export default () => (
  <div className={styles.container}>
    <div className={styles.section1}>
      <div>
        <div className={`${styles.title} ${styles.header}`}>
          MAYNOOTH FURNITURE
        </div>
        <div className={styles.text}>
          A conceptual design project created during the Udemy UX Design course
        </div>
        <div className={styles.title}>Client: </div>
        <div className={styles.text}>
          Maynooth Furniture is a new business selling affordable high-end
          design furniture made in Ireland.
        </div>
        <div className={styles.title}>Primary objectives:</div>
        <div className={styles.text}>
          To build an e-commerce website for people to browse &amp; purchase
          furniture for home delivery. I designed the 3 main pages of the
          website : Homepage, Category Page and a Product Page.
        </div>
      </div>
      <img src={maynoothGif} alt='Maynooth' />
    </div>
    <div className={styles.section2}>
      <div className={styles.title}>Persona:</div>
      <div className={styles.text}>
        The persona for this project is a 50 years old woman, named Katherine,
        from Ireland who works as an executive at the local offices of a
        international medical device company. She earns a salary of $110,000 per
        year. Katherine has children at university. She’s both style and price
        conscious. She is updating the furniture at the 4 bedroom family house.
        The update in furniture is following the slow remodelling of the house
        now that her kids have left for the university. She finaly have the time
        and resources to express her individual style.
      </div>
      <div className={styles.title}>Wireframes:</div>
      <div className={styles.wireframes}>
        <div>wf1</div>
        <div>wf2</div>
        <div>wf3</div>
      </div>
      <div className={styles.title}>Colors:</div>
      <div className={styles.colors}>
        {colors.map((color) => (
          <div key={color} className={styles.color}>
            <div style={{ backgroundColor: color }}></div>
            <div>{color}</div>
          </div>
        ))}
      </div>
      <div className={styles.title}>Fonts:</div>
      <div className={styles.fonts}>
        <div>
          <div>
            <strong>Montserrat</strong> (for Headlines)
          </div>
          <div>
            <div>
              <strong>ABCDEFGHIJKLMNOPQRSTUWXYZ</strong>
            </div>
            <div>abcdefghijklmnopqrstuwxyz</div>
            <div>1234567890</div>
          </div>
        </div>
        <div style={{ fontFamily: "'Crimson Text', serif" }}>
          <div>
            <strong>Crimson Text</strong> (for body text)
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
      <div className={styles.title}>
        High-fidelity Design (Web and Mobile versions):
      </div>
    </div>
    <Footer />
  </div>
);
