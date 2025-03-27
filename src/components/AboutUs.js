import React from "react";
import "./AboutUs.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Nathani Mitul",
    role: "Front-end Developer",
    image: "/images/mitul.jpg", // Corrected path (important!)
    social: {
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "gondaliya Jay",
    role: "UX/UI Designer",
    image: "/images/Jay.png",  // Corrected path
    social: {
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Harsh Lad",
    role: "Database Management",
    image: "/images/harsh.jpg", //Corrected path
    social: {
      instagram: "#",
      linkedin: "#"
    }
  }
];

const AboutUs = () => {  // Renamed to AboutUs for the page component
  return (
    <div className="overflow">
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="CrickTrack.ai Logo" className="logo-image" />
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                    <Link to="/pricing" className="nav-link">
                        Plan & Pricing
                    </Link>
                </div>
            </nav>
        </header>

      <div className="team-section">
        <div className="team-header">
          <h2>Meets our Team</h2>
          <p>
            Discover the passionate team of innovators, strategists, and customer success
            professionals working tirelessly to help you achieve your goals
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <div className="social-links">
                  <a href={member.social.instagram} className="social-icon">
                    <FaInstagram />
                  </a>
                  <a href={member.social.linkedin} className="social-icon linkedin">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default AboutUs;