import React from 'react';
import { useLang } from '../LanguageContext';

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
        }}>
          {/* LEFT: Text */}
          <div className="reveal">
            <div className="section-tag">{t.about.title_highlight}</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              {t.about.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {t.about.p1}
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              {t.about.p2}
            </p>
            <a href="#contact" className="btn btn-primary">{t.nav.hire}</a>
          </div>

          {/* RIGHT: Stats & Mini Skills */}
          <div className="reveal-scale">
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1 }}>5+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{t.about.exp_label}</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1 }}>40+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Projects Completed</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {[
                { label: t.about.frontend, value: 'React, Next.js, Vue, TypeScript' },
                { label: t.about.design, value: 'Figma, UI/UX, Design Systems' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '1.5rem',
                  background: '#fff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                }}>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.value}</div>
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
