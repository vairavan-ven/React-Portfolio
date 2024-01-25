import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <>
    <Header />
    <Navbar />
   <Outlet />
    <Footer />
    </>
  )
}

export default App;