import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../LanguageContext';

const skills = [
  { name: 'React', level: 95, icon: '⚛️' },
  { name: 'JavaScript', level: 90, icon: 'JS' },
  { name: 'TypeScript', level: 85, icon: 'TS' },
  { name: 'CSS / Tailwind', level: 95, icon: '🎨' },
  { name: 'Vite', level: 80, icon: '⚡' },
  { name: 'Next.js', level: 88, icon: '▲' },
];

const TECH_MARQUEE = ['React', 'Next.js', 'TypeScript', 'Vite', 'Figma', 'Framer', 'CSS', 'Node.js', 'GraphQL', 'Redux'];

const Skills = () => {
  const { t } = useLang();
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          // Reveal child elements
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
            .forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding" ref={sectionRef}
      style={{ background: '#fff', overflow: 'hidden', position: 'relative' }}>

      {/* BG Decorations */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(108,58,237,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-tag">{t.skills.title_highlight}</div>
          <h2>{t.skills.title} <span className="text-gradient">{t.skills.title_highlight}</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '1rem auto 0' }}>
            {t.skills.subtitle}
          </p>
          <div className="gradient-divider" />
        </div>

        {/* Skill cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.75rem',
        }}>
          {skills.map((skill, i) => (
            <div key={i} className={`skill-card reveal`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Proficiency</span>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                  {animated ? skill.level : 0}%
                </span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: animated ? `${skill.level}%` : '0%' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="reveal" style={{ marginTop: '5rem', overflow: 'hidden', position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(to right, #fff, transparent)', zIndex: 1,
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(to left, #fff, transparent)', zIndex: 1,
          }} />
          <div className="marquee-track">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
              <span key={i} style={{
                padding: '0.5rem 1.5rem',
                background: 'linear-gradient(135deg, #ede9fe, #e0f9ff)',
                border: '1px solid rgba(108,58,237,0.15)',
                borderRadius: '2rem',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--primary-color)',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #6c3aed, #a855f7)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ede9fe, #e0f9ff)';
                  e.currentTarget.style.color = 'var(--primary-color)';
                  e.currentTarget.style.transform = '';
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
