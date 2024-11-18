import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = ({ socialLinks }) => {
  
  // Function to conditionally render icons
  const renderIcon = (icon, link) => {
    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      );
    }
    return null;
  };

  return (
    <div className="footer-container" id='contact'>
      <div className="social-links">
        {renderIcon(<FaGithub size={30} />, socialLinks.github)}
        {renderIcon(<FaLinkedin size={30} />, socialLinks.linkedin)}
        {renderIcon(<FaFacebook size={30} />, socialLinks.facebook)}
        {renderIcon(<FaInstagram size={30} />, socialLinks.instagram)}
        {renderIcon(<FaTwitter size={30} />, socialLinks.twitter)}
        {renderIcon(<SiGmail size={30} />, socialLinks.email)}
      </div>
      <p className="footer-text">Connect with me on social media!</p>
    </div>
  );
};

export default Footer;
