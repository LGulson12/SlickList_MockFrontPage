import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/">Welcome</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/about-us">About Us</Link>
          <ul className="dropdown-menu">
            <li><HashLink smooth to="/about-us#history">History</HashLink></li>
            <li><HashLink smooth to="/about-us#team">Team</HashLink></li>
            <li><HashLink smooth to="/about-us#mission">Mission</HashLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link to="/features">Features</Link>
          <ul className="dropdown-menu">
            <li><HashLink smooth to="/features#feature1">Feature 1</HashLink></li>
            <li><HashLink smooth to="/features#feature2">Feature 2</HashLink></li>
            <li><HashLink smooth to="/features#feature3">Feature 3</HashLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link to="/get-started">Get Started</Link>
          <ul className="dropdown-menu">
            <li><HashLink smooth to="/get-started#signup">Sign Up</HashLink></li>
            <li><HashLink smooth to="/get-started#tutorial">Tutorial</HashLink></li>
            <li><HashLink smooth to="/get-started#support">Support</HashLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
