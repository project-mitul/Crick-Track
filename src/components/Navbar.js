// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#f8f9fa', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={logo} alt="QuickTrack.ai Logo" style={{ height: '40px' }} />
      </Link>

      <div>
        <Link to="/about" style={{ marginRight: '15px', textDecoration: 'none', color: 'inherit' }}>About Us</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;