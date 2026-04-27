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
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}>
          {skills.map((skill, i) => (
            <div key={i} className="skill-card reveal">
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {skill.category}
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
