import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}>
          <h3>Canteen Management System</h3>
          <p>
            Developed a comprehensive canteen management system using HTML, CSS, Bootstrap, JavaScript, and AngularJS. The system features form validation and a dummy payment portal, enhancing user interaction and functionality.
          </p>
          <ul>
            <li>Implemented responsive web design for optimal viewing on various devices.</li>
            <li>Integrated AngularJS for dynamic content updates and functionality.</li>
            <li>Ensured robust form validation to maintain data integrity and improve user experience.</li>
            <li>Developed a dummy payment portal to simulate transaction processes, enhancing realism in testing.</li>
          </ul>
          <a href="https://github.com/yourusername/canteen-management-system" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Repository Link</a>
        </div>
        <div className={styles.projectCard}>
          <h3>Refurbished Decathlon Website</h3>
          <p>
            A static Decathlon website built with HTML, CSS, and JavaScript. It includes a homepage, introduction video, sports image gallery, and interactive scrolling effects, showcasing responsive design.
          </p>
          <ul>
            <li>This project is a static website for Decathlon, created using HTML, CSS, and JavaScript.</li>
            <li>The site includes a homepage, an introduction video, a gallery of sports images, and interactive scrolling effects.</li>
            <li>The repository contains the main HTML structure, CSS styling for layout and design, and JavaScript for enhancing user interaction.</li>
            <li>This project serves as an example of building a visually appealing and responsive website with basic web development technologies.</li>
          </ul>
          <a href="https://github.com/yourusername/refurbished-decathlon-website" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Repository Link</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
