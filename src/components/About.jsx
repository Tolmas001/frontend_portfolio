import React, { useEffect, useRef } from 'react';
import avatar from '../assets/avatar.png';
import { useLang } from '../LanguageContext';

const About = () => {
  const { t } = useLang();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
              .forEach((el, i) => {
                setTimeout(() => el.classList.add('revealed'), i * 120);
              });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding section-alt" ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
        }}>
          {/* LEFT: Image */}
          <div className="reveal-left" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Rotating decorative ring */}
            <div style={{
              position: 'absolute',
              width: '420px', height: '420px',
              border: '2px dashed rgba(108,58,237,0.2)',
              borderRadius: '50%',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'spinOrbit 20s linear infinite',
            }}>
              <div style={{
                position: 'absolute', top: '-8px', left: '50%',
                width: '16px', height: '16px',
                background: 'linear-gradient(135deg, #6c3aed, #06b6d4)',
                borderRadius: '50%',
                marginLeft: '-8px',
                boxShadow: '0 0 16px rgba(108,58,237,0.6)',
              }} />
            </div>

            {/* Image wrapper */}
            <div style={{
              width: '340px', height: '380px',
              borderRadius: '2rem',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 30px 80px rgba(108,58,237,0.2)',
              border: '3px solid rgba(108,58,237,0.15)',
              animation: 'heroFloat 6s ease-in-out infinite',
            }}>
              <img src={avatar} alt="Tolmas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(108,58,237,0.25), transparent)',
              }} />
            </div>

            {/* Stat badge */}
            <div className="stat-badge" style={{ right: '-1rem', bottom: '-2rem' }}>
              <div className="counter-number" style={{ fontSize: '2.2rem' }}>5+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500' }}>{t.about.exp_label}</div>
            </div>

            {/* Second floating badge */}
            <div style={{
              position: 'absolute', top: '1rem', left: '-1rem',
              padding: '0.8rem 1.2rem',
              background: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 8px 32px rgba(108,58,237,0.15)',
              border: '1.5px solid rgba(108,58,237,0.1)',
              animation: 'heroFloat 5s ease-in-out 1s infinite',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              <span style={{ fontSize: '1.4rem' }}>⚡</span>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-color)' }}>React</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Expert</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Text */}
          <div>
            <div className="section-tag reveal">
              {t.about.title_highlight}
            </div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.5rem' }}>
              {t.about.title} <span className="text-gradient">{t.about.title_highlight}</span>
            </h2>
            <p className="reveal" style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.05rem' }}>
              {t.about.p1}
            </p>
            <p className="reveal" style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
              {t.about.p2}
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { label: t.about.frontend, value: 'React, Next.js, Vue, Vite', icon: '⚛️' },
                { label: t.about.design, value: 'Figma, Adobe XD, Framer', icon: '🎨' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '1.25rem',
                  background: '#fff',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid rgba(108,58,237,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,58,237,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(108,58,237,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = 'rgba(108,58,237,0.1)';
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div className="reveal">
              <a href="#contact" className="btn btn-primary">{t.nav.hire} ✨</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
