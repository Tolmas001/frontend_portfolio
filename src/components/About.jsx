import React from 'react';
import avatar from '../assets/avatar.png';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div className="glass animate-fade-in" style={{ padding: '1rem', position: 'relative' }}>
            <img src={avatar} alt="Tolmas" style={{
              width: '100%',
              borderRadius: '0.8rem',
              display: 'block'
            }} />
            <div className="glass" style={{
              position: 'absolute',
              bottom: '-1rem',
              right: '-1rem',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <h3 className="text-gradient" style={{ fontSize: '2rem' }}>5+</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Years of Exp.</p>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              Passionate About <span className="text-gradient">Minimalism</span> & Design
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              I specialize in building clean, modern, and high-performance web applications. My approach focuses on bridging the gap between design and development, ensuring every pixel serves a purpose.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              When I'm not coding, I'm exploring new UI trends, contributing to open-source, or refining my craft in the ever-evolving world of frontend technology.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Front-end</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>React, Next.js, Vue, Vite</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Design</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Figma, Adobe XD, Framer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
