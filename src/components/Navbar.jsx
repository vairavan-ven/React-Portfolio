import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const currentPage = useLocation().pathname;

  const sections = [
    { path: '/', label: 'Home' },
    { path: '/AboutMe', label: 'About Me' },
    { path: '/Portfolio', label: 'Portfolio' },
    { path: '/Contact', label: 'Contact' },
  ];

  return (
    <ul className="nav nav-tabs">
      {sections.map((section, index) => (
        <li className="nav-item" key={index}>
          <Link
            to={section.path}
            className={currentPage === section.path ? 'nav-link active' : 'nav-link'}
          >
            {section.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
