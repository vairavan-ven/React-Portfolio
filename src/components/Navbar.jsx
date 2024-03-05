import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav style={{ position: 'fixed', top: '0', left: '0', width: '100%', backgroundColor: '#314d6d', zIndex: '1000' }}>
      <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="nav nav-tabs">
        <li style={{ display: 'inline-block' }} className="nav-item">
          <h1 style={{ margin: '0', color: '#ffffff' }}>Vairavan</h1>
        </li>
        <li style={{ display: 'inline-block' }} className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            style={{ padding: '10px 20px', textDecoration: 'none', color: currentPage === '/' ? '#2196F3' : '#ffffff' }}
          >
            About
          </Link>
        </li>
        <li style={{ display: 'inline-block' }} className="nav-item">
          <Link
            to="/portfolio"
            className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
            style={{ padding: '10px 20px', textDecoration: 'none', color: currentPage === '/portfolio' ? '#2196F3' : '#ffffff' }}
          >
            Portfolio
          </Link>
        </li>
        <li style={{ display: 'inline-block' }} className="nav-item">
          <Link
            to="/resume"
            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
            style={{ padding: '10px 20px', textDecoration: 'none', color: currentPage === '/resume' ? '#2196F3' : '#ffffff' }}
          >
            Resume
          </Link>
        </li>
        <li style={{ display: 'inline-block' }} className="nav-item">
          <Link
            to="/contact"
            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
            style={{ padding: '10px 20px', textDecoration: 'none', color: currentPage === '/contact' ? '#2196F3' : '#ffffff' }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
