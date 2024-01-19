import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="app-container">
      <Header />
      <Navbar currentSection={currentSection} handleNavigation={handleNavigation} />
     
      <div className="card">
        <p>
         
        </p>
      </div>

      {currentSection === 'About Me' && <AboutMe />}
      {currentSection === 'Portfolio' && <Portfolio />}
      {currentSection === 'Contact' && <Contact />}
      {currentSection === 'Resume' && <Resume />}

      <Footer />
    </div>
  );
}

export default App;
