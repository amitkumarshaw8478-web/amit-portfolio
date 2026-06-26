import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        My<span>Portfolio</span>
      </div>

      <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li className="mobile-only"><a href="#contact" className="resume-btn" onClick={toggleMenu}>Hire Me</a></li>
      </ul>
      
      <a href="#contact" className="resume-btn desktop-only">Hire Me</a>
    </nav>
  );
}

export default Navbar;
