import React from 'react';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section id="home" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.3,
        zIndex: -1,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, transparent 0%, var(--bg-color) 80%)',
        zIndex: -1,
      }} />

      <div className="container animate-fade-in" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1rem' }}>
          Hello, I'm <span className="text-gradient">Tolmas</span>
        </h1>
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          margin: '0 auto 2.5rem',
          fontWeight: '400'
        }}>
          Crafting high-performance, visually stunning frontend experiences with precision and passion.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary glow-pulse">View My Work</a>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
