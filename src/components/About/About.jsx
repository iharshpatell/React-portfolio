import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I specialize in creating intuitive, responsive, and engaging user interfaces that deliver seamless experiences across a variety of devices and platforms. I work closely with designers and backend developers to implement dynamic and interactive web applications that meet both user and business needs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I focus on the server-side logic, database management, and integration of web applications. I work with both structured and unstructured data, ensuring that applications are fast, secure, scalable, and maintainable.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloudIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Associate Cloud Engineer</h3>
              <p>
              I focus on supporting the design, implementation, and maintenance of cloud-based infrastructure and services.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
