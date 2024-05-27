import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className='nav-container'>
        <div className="name-logo">GarvitJain._.</div>
        <nav className='navbar'>
          <ul className='nav-list'>
            <li className='nav-item' data-number='01'><a href="#home">{"// Home"}</a></li>
            <li className='nav-item' data-number='02'><a href="#expertise">{"// Expertise"}</a></li>
            <li className='nav-item' data-number='03'><a href="#work">{"// Work"}</a></li>
            <li className='nav-item' data-number='04'><a href="#experience">{"// Experience"}</a></li>
            <li className='nav-item' data-number='05'><a href="#contact">{"// Contact"}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
