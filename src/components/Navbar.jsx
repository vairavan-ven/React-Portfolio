// Navbar.jsx
import React from 'react';

const Navbar = ({ currentSection, handleNavigation }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      {sections.map((section, index) => (
        <a
          key={index}
          href={`#${section.toLowerCase().replace(' ', '-')}`}
          className={currentSection === section ? 'active' : ''}
          onClick={() => handleNavigation(section)}
        >
          {section}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
