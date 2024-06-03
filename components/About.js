import React from 'react';
import styles from '../styles/About.module.css';
import profileImage from '/Users/anishakumari/portfolio/src/WhatsApp Image 2023-10-06 at 19.14.48_magicstudio_4ovx8d4aofe.png'; // Adjust the path as needed

const About = () => {
    return (
        <section className={styles.about}>
            <h4>About Me</h4>
            <div className={styles.aboutContent}>
                <img src={profileImage} alt="Profile" className={styles.profileImage} />
                <p>Hi, I am Anisha, a passionate Computer Applications major in my sophomore year,
                    with a love for running marathons, pitching business ideas, exploring technology,
                    and solving mathematical equations.

<hr></hr>
             
                    In my spare time, I actively engage in extracurricular activities. Additionally, I've dedicated myself to the NCC in my freshmen year.

                    I'm always eager to connect, collaborate, and contribute to the ever-evolving world of technology and beyond. Let's make meaningful connections and create impactful experiences together!</p>


            </div>
        </section>
    );
};

export default About;
