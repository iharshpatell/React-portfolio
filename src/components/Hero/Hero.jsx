import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello I'm Harsh Patel</h1>
        <p className={styles.description}>
        I’m a passionate Software Developer specializing in building innovative and user-centric web applications. 
        With expertise in React, Node.js and Tailwind CSS, 
        I thrive on solving complex challenges and delivering scalable digital solutions that make a real impact.
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
