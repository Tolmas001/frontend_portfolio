import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: 'Aurora E-commerce',
    desc: 'A premium mobile-first shopping experience with seamless transitions.',
    img: project1,
    tags: ['React', 'Framer Motion', 'Tailwind']
  },
  {
    title: 'Synergy CRM',
    desc: 'Advanced data visualization dashboard for enterprise management.',
    img: project2,
    tags: ['Next.js', 'Recharts', 'TypeScript']
  },
  {
    title: 'Nova AI Chat',
    desc: 'Next-gen conversational interface powered by large language models.',
    img: project3,
    tags: ['React', 'WebSockets', 'AI SDK']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured <span className="text-gradient">Projects</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A showcase of my recent work, combining technical excellence with aesthetic beauty.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="glass" style={{
              overflow: 'hidden',
              transition: 'var(--transition-slow)',
              display: 'flex',
              flexDirection: 'column'
            }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-color)'}
               onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src={project.img} alt={project.title} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'var(--transition-slow)'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} style={{
                      fontSize: '0.7rem',
                      padding: '0.3rem 0.8rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '1rem',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-muted)'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
