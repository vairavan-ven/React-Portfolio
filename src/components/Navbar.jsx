import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Function component for the navbar
function Navbar() {
  // Get the current page location using useLocation
  const currentPage = useLocation().pathname;

  return (
    <nav style={{ position: 'fixed', top: '0', left: '0', width: '100%', backgroundColor: '#ffffff', zIndex: '1000' }}>
      <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="nav nav-tabs">
        <li style={{ display: 'inline-block' }} className="nav-item">
          <h1 style={{ margin: '0' }}>Vairavan</h1>
        </li>
        <li style={{ display: 'inline-block' }} className="nav-item">
          <Link
            to="/AboutMe"
            className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
            style={{ padding: '10px 20px', textDecoration: 'none', color: '#333333' }}
          >
            About
          </Link>
        </li>
        <li style={{ display: 'inline-block' }} className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            style={{ padding: '10px 20px', textDecoration: 'none', color: '#333333' }}
          >
            Portfolio
          </Link>
        </li>
        <li style={{ display: 'inline-block' }} className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            style={{ padding: '10px 20px', textDecoration: 'none', color: '#333333' }}
          >
            Resume
          </Link>
        </li>
        <li style={{ display: 'inline-block' }} className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            style={{ padding: '10px 20px', textDecoration: 'none', color: '#333333' }}
          >
            Contact
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
