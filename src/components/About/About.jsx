import './About.css';
// Import the exact same profile image here
import profileImg from '../../assets/profile.jpg';

function About() {
  return (
    // id="about" ensures our Navbar link can easily scroll to this section
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Section Title */}
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        
        <div className="about-content">
          {/* Left Column: Image & Text description */}
          <div className="about-text">
            
            <div className="about-header">
              {/* Modern small circular image for the About section */}
              <img src={profileImg} alt="Amit Shaw" className="about-profile-img" />
              <h3>Hello, I'm Amit Shaw!</h3>
            </div>
            
            <p className="intro-paragraph">
              I am a dedicated <strong>React Developer</strong> and <strong>LIC Advisor</strong>. 
              My journey is uniquely built on two pillars: a deep passion for building modern, interactive websites 
              and a commitment to helping people secure their future through expert financial planning.
            </p>
            <p className="learning-paragraph">
              Currently, I am expanding my technical boundaries by diving into <em>advanced React development</em>, 
              ensuring that the digital experiences I create are both stunning and highly performant.
            </p>
          </div>
          
          {/* Right Column: Highlights Cards */}
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">💻</span>
              <h4>Development</h4>
              <p>Crafting sleek, responsive user interfaces.</p>
            </div>
            
            <div className="highlight-card">
              <span className="highlight-icon">📈</span>
              <h4>Advisory</h4>
              <p>Guiding financial futures with LIC expertise.</p>
            </div>
            
            <div className="highlight-card">
              <span className="highlight-icon">🚀</span>
              <h4>My Goal</h4>
              <p>Deliver exceptional value in both tech and finance.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
