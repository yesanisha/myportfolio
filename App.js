import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={
              <div className={styles.mainContent}>
                <Projects />
                <Experience />
              </div>
            } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
