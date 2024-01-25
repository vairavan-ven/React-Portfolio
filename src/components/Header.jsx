// Heasder.jsx
import React from 'react';
import '../styling/header.css';
import githubPfp from '../assets/github-pfp.jpeg'; // Import the image

const Header = () => {
  return (
    <header>
      <img src={githubPfp} alt="GitHub Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <h1>Vairavan</h1>
    </header>
  );
};

export default Header;
