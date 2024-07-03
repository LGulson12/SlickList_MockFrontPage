import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p><FaEnvelope className="icon" /> <a href="mailto:info@medsupply.com">team@slickdent.com</a></p>
        <p><FaPhone className="icon" /> <a href="tel:+12248043892">+1 (773) 230-3009</a></p>
        <p>
          <a
            href="https://www.google.com/maps?q=500+N+Western+Ave,+Lake+Forest,+IL+60045"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>500 N Western Ave, Suite 215</p>
            <p>Lake Forest, IL 60045</p>
          </a>
        </p>
        <p>
        </p>
      </div>

      <div className="footer-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
