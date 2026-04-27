import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import { useLang } from '../LanguageContext';

const projectsData = [
  { title: 'Aurora E-commerce', desc: 'A premium mobile-first shopping experience with seamless transitions.', img: project1, tags: ['React', 'Next.js', 'Tailwind'] },
  { title: 'Synergy CRM', desc: 'Advanced data visualization dashboard for enterprise management.', img: project2, tags: ['TypeScript', 'Recharts', 'PostgreSQL'] },
  { title: 'Nova AI Chat', desc: 'Next-gen conversational interface powered by large language models.', img: project3, tags: ['React', 'WebSockets', 'OpenAI'] },
];

const Projects = () => {
  const { t } = useLang();

  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.projects.title_highlight}</div>
          <h2>{t.projects.title}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '1rem' }}>
            {t.projects.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
        }}>
          {projectsData.map((project, i) => (
            <div key={i} className="project-card reveal">
              <div className="project-card-img-wrap">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-card-body">
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag, ti) => (
                    <span key={ti} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <button style={{
                  fontSize: '0.85rem', fontWeight: '600', color: 'var(--secondary-color)',
                }}>
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
