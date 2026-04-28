import React from 'react';
import { useLang } from '../LanguageContext';

const skills = [
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Figma', category: 'Design' },
];

const Skills = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.skills.title_highlight}</div>
          <h2>{t.skills.title}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', marginTop: '1rem' }}>
            {t.skills.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {skills.map((skill, i) => (
            <div key={i} className="skill-card glass reveal" style={{
              padding: '2rem',
              borderRadius: 'var(--radius-xl)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Colorful Corner Glow */}
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '80px', height: '80px',
                background: i % 2 === 0 ? 'var(--primary-gradient)' : 'var(--accent-gradient)',
                filter: 'blur(40px)',
                opacity: 0.3,
                zIndex: 0,
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  fontSize: '0.7rem', 
                  color: 'var(--primary-color)', 
                  marginBottom: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em',
                  fontWeight: '800'
                }}>
                  {skill.category}
                </div>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  color: 'var(--text-primary)',
                  fontWeight: '700',
                  letterSpacing: '-0.02em'
                }}>{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
