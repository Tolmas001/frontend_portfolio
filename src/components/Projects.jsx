import React, { useEffect, useRef } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import { useLang } from '../LanguageContext';

const projectsData = [
  { title: 'Aurora E-commerce', desc: 'A premium mobile-first shopping experience with seamless transitions.', img: project1, tags: ['React', 'Framer Motion', 'Tailwind'], color: '#6c3aed' },
  { title: 'Synergy CRM', desc: 'Advanced data visualization dashboard for enterprise management.', img: project2, tags: ['Next.js', 'Recharts', 'TypeScript'], color: '#06b6d4' },
  { title: 'Nova AI Chat', desc: 'Next-gen conversational interface powered by large language models.', img: project3, tags: ['React', 'WebSockets', 'AI SDK'], color: '#a855f7' },
];

const Projects = () => {
  const { t } = useLang();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-scale')
            .forEach((el, i) => setTimeout(() => el.classList.add('revealed'), i * 150));
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-padding section-alt" ref={sectionRef}
      style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Decorative blob */}
      <div style={{
        position: 'absolute', bottom: '-150px', left: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-tag">{t.projects.title_highlight}</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {t.projects.title} <span className="text-gradient">{t.projects.title_highlight}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.05rem' }}>
            {t.projects.subtitle}
          </p>
          <div className="gradient-divider" />
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
        }}>
          {projectsData.map((project, i) => (
            <div key={i} className="project-card reveal-scale" style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Image */}
              <div className="project-card-img-wrap">
                <img src={project.img} alt={project.title} />
                {/* Hover color overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${project.color}22, transparent)`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 1,
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                />
              </div>

              {/* Body */}
              <div className="project-card-body">
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag, ti) => (
                    <span key={ti} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <button style={{
                  fontSize: '0.85rem', fontWeight: '700', color: project.color,
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  transition: 'gap 0.3s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.8rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
