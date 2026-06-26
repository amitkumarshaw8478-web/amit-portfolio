import './Projects.css';

function Projects() {
  // We store project data in an array just like we did with skills.
  // This keeps the HTML structure clean and makes adding new projects easy.
  const projectList = [
    {
      title: 'React Portfolio Website',
      description: 'A premium, modern portfolio built from scratch to showcase my skills, projects, and professional background. Features responsive design, dark mode, and sleek animations.',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'LIC Landing Page',
      description: 'A highly optimized, professional landing page designed to attract clients seeking financial advice. Includes clean layouts and a call-to-action for consultations.',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Business Website',
      description: 'A multi-page responsive website developed for a local business to improve their digital presence. Features modern UI, fast loading times, and an organized layout.',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    // id="projects" enables our Navbar link to scroll here
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        
        {/* Container for all project cards */}
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Buttons to view the live demo or GitHub code */}
                <div className="project-links">
                  <a href={project.demoLink} className="btn-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.githubLink} className="btn-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
