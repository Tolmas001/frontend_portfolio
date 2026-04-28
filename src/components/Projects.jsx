import React, { useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import { useLang } from '../LanguageContext';
import Modal from './Modal';

const projectsData = [
  { title: 'Aurora E-commerce', desc: 'A premium mobile-first shopping experience with seamless transitions.', longDesc: 'This project focused on high-performance animations and a ultra-clean UI. Built with Next.js and Tailwind CSS, it features a custom cart system and stripe integration.', img: project1, tags: ['React', 'Next.js', 'Tailwind'] },
  { title: 'Synergy CRM', desc: 'Advanced data visualization dashboard for enterprise management.', longDesc: 'A complex CRM system for managing thousands of customers. Features include real-time analytics using Recharts, role-based access control, and a multilingual sales bot.', img: project2, tags: ['TypeScript', 'Recharts', 'PostgreSQL'] },
  { title: 'Nova AI Chat', desc: 'Next-gen conversational interface powered by large language models.', longDesc: 'An AI-powered chat platform that uses WebSockets for real-time communication. Integrated with OpenAI API and features a custom-built markdown renderer for AI responses.', img: project3, tags: ['React', 'WebSockets', 'OpenAI'] },
];

const Projects = () => {
  const { t } = useLang();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-tertiary)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
        background: 'radial-gradient(circle at 10% 10%, rgba(79, 70, 229, 0.03) 0%, transparent 50%)',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header reveal">
          <div className="section-tag" style={{ background: 'var(--primary-light)', color: 'var(--primary-color)' }}>
            {t.projects.title_highlight}
          </div>
          <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em' }}>{t.projects.title}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.1rem' }}>
            {t.projects.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
        }}>
          {projectsData.map((project, i) => (
            <div key={i} className="project-card glass reveal" style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-img-wrap" style={{ height: '260px' }}>
                <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                  opacity: 0,
                  transition: '0.3s ease',
                }} className="img-overlay" />
              </div>
              <div className="project-card-body" style={{ padding: '2.5rem' }}>
                <h3 style={{ 
                  marginBottom: '1rem', 
                  fontSize: '1.5rem', 
                  color: 'var(--text-primary)',
                  fontWeight: '800'
                }}>{project.title}</h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem', 
                  lineHeight: '1.6',
                  marginBottom: '2rem' 
                }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tags.map((tag, ti) => (
                    <span key={ti} className="tag-pill glass" style={{ 
                      padding: '0.4rem 1rem', 
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: 'var(--primary-color)',
                      border: '1px solid var(--border-color)',
                      background: 'rgba(255,255,255,0.5)'
                    }}>{tag}</span>
                  ))}
                </div>
                <button className="btn btn-outline" style={{ 
                  width: '100%', 
                  justifyContent: 'center',
                  padding: '0.8rem',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'transparent'
                }}>
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        content={selectedProject && (
          <div>
            <img src={selectedProject.img} alt={selectedProject.title} style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', boxShadow: 'var(--shadow-lg)' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{selectedProject.title}</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
              {selectedProject.tags.map(t => <span key={t} className="tag-pill glass">{t}</span>)}
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              {selectedProject.longDesc}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary">Live Preview</button>
              <button className="btn btn-outline" style={{ background: 'transparent' }}>Source Code</button>
            </div>
          </div>
        )}
      />
    </section>
  );
};

export default Projects;
  );
};

export default Projects;
