import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <p>You can reach me at <a href="mailto:anishakumari6145@gmail.com" className={styles.emailLink}>anishakumari6145@gmail.com</a>.</p>
    </section>
  );
};

export default Contact;
