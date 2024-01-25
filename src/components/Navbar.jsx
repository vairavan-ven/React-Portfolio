// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Function component for the navbar
function Navbar() {
  // Get the current page location using useLocation
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/AboutMe"
          // Check if the current page is "AboutMe" and apply the appropriate class
          className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check if the current page is "Portfolio" and apply the appropriate class
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check if the current page is "Contact" and apply the appropriate class
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
