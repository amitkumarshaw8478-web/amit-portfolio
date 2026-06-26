import './Navbar.css';

function Navbar() {
  return (
    // The <nav> tag is HTML for a navigation section
    <nav className="navbar">
      {/* Brand logo or name */}
      <div className="navbar-brand">
        My<span>Portfolio</span>
      </div>

      {/* Navigation links */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      {/* Call to action button */}
      <a href="#contact" className="resume-btn">Hire Me</a>
    </nav>
  );
}

export default Navbar;
