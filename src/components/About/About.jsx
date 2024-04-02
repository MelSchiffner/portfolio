import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Mel-profile-van.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/webDev.png")} alt="webDev icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Web Developer</h3>
              <p>
              Recent graduate from a rigorous web development bootcamp, I'm armed with a newfound passion for crafting digital experiences. Proficient in JavaScript, HTML5, CSS3, and the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS), I'm eager to apply my skills and creativity to real-world projects and make a splash in the tech industry.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/background.png")} alt="background icon" />
            <div className={styles.aboutItemText}>
              <h3>Background</h3>
              <p>
              In my former roles, I orchestrated office operations with precision, seamlessly coordinating schedules, travel arrangements, and recruitment processes. I also brought events to life while ensuring smooth administrative functioning.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/passion.png")} alt="passion icon" />
            <div className={styles.aboutItemText}>
              <h3>Passion</h3>
              <p>
              Fueling my passion with every turn of the wrench, I'm all about fixing up my vintage Volkswagen from 1977 and hitting the road for some epic camping adventures.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};