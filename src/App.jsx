import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CodingIntro from './components/CodingIntro';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Coding Intro Animation Overlay on Site Entry */}
      {showIntro && (
        <CodingIntro onComplete={() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          setShowIntro(false);
        }} />
      )}

      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Contact />
        <Footer />
      </main>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

