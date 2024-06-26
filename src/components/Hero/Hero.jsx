import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <div className={styles.intro}>
          Hi, I'm <b>Mel</b>
        </div>
        <div className={styles.description}>
          A detail-oriented full-stack developer with a B.A. in Media Studies
          and 10 years of Office Management experience.
          <div>I'm all about building sleek, user-friendly websites. </div>
          <div>Let's create something amazing together!</div>
        </div>

        <div className={styles.buttons}>
          <a
            href="mailto:melanie.schiffner@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>

          <a
            href="/assets/mel-resume-hkg7xucw.pdf"
            className={styles.resume}
            download
          >
            Resume
            <img
              src={getImageUrl("hero/download.png")}
              alt="Download Icon"
              className={styles.icon}
            />
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/mel-profile.png")}
        alt="mel profile image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
