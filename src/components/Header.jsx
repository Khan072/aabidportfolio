// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
