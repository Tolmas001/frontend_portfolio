import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';
import { useScrollRevealAll } from './hooks/useScrollReveal';
import CustomCursor from './components/CustomCursor';
import ScrollTools from './components/ScrollTools';

function App() {
  useScrollRevealAll();
  
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollTools />
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
