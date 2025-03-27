import React from 'react';
import '../Dashboard.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Cricket Analytics</h1>
      </div>
      <div className="navbar-profile">
        <div className="theme-toggle">
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
        <div className="profile-info">
          <span className="profile-name">Mitul</span>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
            alt="Profile"
            className="profile-avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;