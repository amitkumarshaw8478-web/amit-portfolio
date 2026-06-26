import './Skills.css';

function Skills() {
  // We can store our skills in an array of objects to keep the code clean.
  // This makes it extremely easy to add or remove skills later!
  const skillList = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'React.js', category: 'Library' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Responsive Web Design', category: 'Design' }
  ];

  return (
    // We add an id="skills" so the Navbar link easily scrolls down to this section
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section title */}
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        
        {/* We use a grid to lay out our skill cards */}
        <div className="skills-grid">
          {/* 
            We use the .map() function to loop through our skillList array 
            and generate a unique "card" (div) for each skill automatically.
          */}
          {skillList.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-category">{skill.category}</p>
              
              {/* A decorative glowing line at the bottom of the card */}
              <div className="skill-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
