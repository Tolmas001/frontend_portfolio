import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

// Cursor glow follower
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="cursor-glow" style={{ left: pos.x, top: pos.y }} />
  );
};

function App() {
  return (
    <LanguageProvider>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
