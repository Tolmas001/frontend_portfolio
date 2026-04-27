import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1000px',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 2rem',
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
        PORTFOLIO<span className="text-gradient">.</span>
      </div>
      <ul style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem' }}>Hire Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
