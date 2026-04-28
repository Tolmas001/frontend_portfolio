import React from 'react';
import { useLang } from '../LanguageContext';

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-color)', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}>
          {/* LEFT: Text */}
          <div className="reveal">
            <div className="section-tag" style={{ background: 'var(--primary-light)', color: 'var(--primary-color)' }}>
              {t.about.title_highlight}
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
              {t.about.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
              {t.about.p1}
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
              {t.about.p2}
            </p>
            <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              {t.nav.hire}
            </a>
          </div>

          {/* RIGHT: Stats & Mini Skills */}
          <div className="reveal" style={{ position: 'relative' }}>
            {/* Background Glow for Stats */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '120%', height: '120%',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
              zIndex: -1,
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="glass" style={{
                padding: '2.5rem 1.5rem', borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '3.5rem', fontWeight: '900', 
                  background: 'var(--primary-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1 
                }}>5+</div>
                <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.75rem', fontWeight: '600' }}>
                  {t.about.exp_label}
                </div>
              </div>
              <div className="glass" style={{
                padding: '2.5rem 1.5rem', borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '3.5rem', fontWeight: '900', 
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1 
                }}>40+</div>
                <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.75rem', fontWeight: '600' }}>
                  Projects Done
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              {[
                { label: t.about.frontend, value: 'React, Next.js, Vue, TypeScript', icon: '🎨' },
                { label: t.about.design, value: 'Figma, UI/UX, Design Systems', icon: '✨' },
              ].map((item, i) => (
                <div key={i} className="glass" style={{
                  padding: '1.5rem 2rem',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}>
                  <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '1.1rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
