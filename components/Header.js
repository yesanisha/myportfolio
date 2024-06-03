import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Anisha Kumari</h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.navLink}>About</Link></li>
          <li><Link to="/projects" className={styles.navLink}>Projects</Link></li>
          <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
