import './Hero.css';
// Import your image! You will need to place your photo in the assets folder and name it 'profile.jpg'
import profileImg from '../../assets/profile.jpg';

function Hero() {
  return (
    // We give this section an ID of "home" so our Navbar links can scroll to it
    <section id="home" className="hero-section">
      
      <div className="hero-container">
        {/* Left Side: The main text content */}
        <div className="hero-content">
          {/* A small greeting above the main name */}
          <p className="hero-greeting">Hi, my name is</p>
          
          {/* Main headline showcasing your name */}
          <h1 className="hero-name">Amit Shaw.</h1>
          
          {/* Sub-headline showcasing your roles */}
          <h2 className="hero-roles">
            <span className="role role-react">React Developer</span>
            <span className="dot">•</span>
            <span className="role role-lic">LIC Advisor</span>
          </h2>
          
          {/* Short introduction paragraph */}
          <p className="hero-description">
            I am a professional blending technical expertise in modern web development
            with comprehensive financial advisory. Whether I'm building responsive React applications
            or guiding your financial future, my goal is always to deliver exceptional value.
          </p>

          {/* Action buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>

        {/* Right Side: The Profile Image */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Amit Shaw - React Developer and LIC Advisor" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
