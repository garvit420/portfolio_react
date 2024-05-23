import React from 'react';
import Header from './components/Header.js';
import Expertise from './components/Expertise.js';
import Work from './components/Work.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Expertise />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
