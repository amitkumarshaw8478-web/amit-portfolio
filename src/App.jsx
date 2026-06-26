// Import the main CSS file for the App component
import './App.css';
// Import our newly created Navbar component
import Navbar from './components/Navbar/Navbar';
// Import the Hero component
import Hero from './components/Hero/Hero';
// Import the About component
import About from './components/About/About';
// Import the Skills component
import Skills from './components/Skills/Skills';
// Import the Projects component
import Projects from './components/Projects/Projects';
// Import the Contact component
import Contact from './components/Contact/Contact';
// Import the Footer component
import Footer from './components/Footer/Footer';

// This is our main Application component. In React, a component is basically a function that returns HTML-like code (called JSX).
function App() {
  return (
    // The "className" acts like "class" in regular HTML. We use it to apply CSS.
    <div className="app">
      {/* Render the Navbar component here at the top! */}
      <Navbar />
      
      {/* Render the Hero Component as our main header screen */}
      <Hero />

      {/* Render the About Section */}
      <About />

      {/* Render the Skills Component below the Hero section */}
      <Skills />

      {/* Render the Projects Component below Skills */}
      <Projects />

      {/* Render the Contact Component below Projects */}
      <Contact />

      {/* Render the Footer at the very bottom of the page */}
      <Footer />
    </div>
  );
}

// We export the app so it can be used in main.jsx (which connects React to the actual web browser)
export default App;
