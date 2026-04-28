import React from 'react';
import { useLang } from '../LanguageContext';

const skills = [
  { name: 'React / Next.js', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Language', level: 90 },
  { name: 'Tailwind CSS', category: 'Styling', level: 98 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'PostgreSQL', category: 'Database', level: 80 },
  { name: 'Figma', category: 'Design', level: 88 },
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ 
                    fontSize: '0.7rem', 
                    color: 'var(--primary-color)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.15em',
                    fontWeight: '800'
                  }}>
                    {skill.category}
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-muted)' }}>{skill.level}%</div>
                </div>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  color: 'var(--text-primary)',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem'
                }}>{skill.name}</h3>

                {/* Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '100px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: i % 2 === 0 ? 'var(--primary-gradient)' : 'var(--accent-gradient)',
                    borderRadius: '100px',
                    transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
