import React from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2>Experience</h2>
      <div className={styles.experienceCard}>
        <h3>Web Development Intern - Cognifyz Technologies</h3>
        <p>May 2023 - June 2023</p>
        <ul>
          <li>Developed and designed web pages using HTML, CSS, and JavaScript.</li>
          <li>Collaborated with senior developers to enhance user interface and user experience.</li>
          <li>Participated in code reviews and contributed to the improvement of code quality.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
