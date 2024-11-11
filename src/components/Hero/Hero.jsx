import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harsh</h1>
        <p className={styles.description}>
        Enthusiastic software developer with a flair for creating elegant solutions in the least amount of time. Having 
        an experience of more than one year wherein I've built solutions for many technical firms. I aim and work to 
        establish myself as a BRAND in this technical industry. 
        </p>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
