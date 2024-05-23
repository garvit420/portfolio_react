import React from 'react';
// import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Garvit Jain</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;