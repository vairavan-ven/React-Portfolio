import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentSection, handleNavigation }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      {sections.map((section, index) => (
        <Link
          key={index}
          to={`/${section.toLowerCase().replace(/\s/g, '-')}`}
          className={currentSection === section ? 'active' : ''}
          onClick={() => handleNavigation(section)}
        >
          {section.split(' ').join('\u00A0')} 
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
