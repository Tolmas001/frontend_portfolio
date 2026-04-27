import React from 'react';

const skills = [
  { name: 'React', level: '95%', icon: '⚛️' },
  { name: 'JavaScript', level: '90%', icon: 'JS' },
  { name: 'TypeScript', level: '85%', icon: 'TS' },
  { name: 'CSS / Tailwind', level: '95%', icon: '🎨' },
  { name: 'Vite', level: '80%', icon: '⚡' },
  { name: 'Next.js', level: '88%', icon: '▲' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Expertise & <span className="text-gradient">Skills</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A curated list of technologies I excel in to build world-class digital products.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {skills.map((skill, index) => (
            <div key={index} className="glass" style={{
              padding: '2rem',
              transition: 'var(--transition-slow)',
              cursor: 'default'
            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{skill.icon}</div>
              <h3 style={{ marginBottom: '1rem' }}>{skill.name}</h3>
              <div style={{
                height: '6px',
                background: 'var(--bg-color)',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: skill.level,
                  background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                  borderRadius: '3px'
                }}></div>
              </div>
              <div style={{ textAlign: 'right', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
