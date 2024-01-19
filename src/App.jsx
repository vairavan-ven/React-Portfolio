import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


import './App.css';

const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <AboutMe />
    <Portfolio />
    <Contact />
    <Resume />
    <Footer />
    </>
  )
}

export default App;
