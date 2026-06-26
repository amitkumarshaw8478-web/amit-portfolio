import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // Automatically gets the current year!

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand/Name in the footer */}
        <div className="footer-brand">
          <h2>Amit <span>Shaw.</span></h2>
          <p>React Developer & LIC Advisor</p>
        </div>

        {/* Social media or professional links placeholders */}
        <div className="footer-socials">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </div>
      
      {/* Copyright text at the very bottom */}
      <div className="footer-copyright">
        <p>&copy; {currentYear} Amit Shaw. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
