import React from 'react';
import avatar from '../assets/avatar.png';
import { useLang } from '../LanguageContext';

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '80px',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ maxWidth: '800px' }}>
          {/* Avatar & Status */}
          <div className="animate-slide-up" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <img src={avatar} alt="Tolmas" style={{
              width: '64px', height: '64px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid var(--border-color)',
            }} />
            <div>
              <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Urinov Tolmas</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                Available for work
              </div>
            </div>
          </div>

          {/* Giant name / Headline */}
          <h1 style={{
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.04em',
            animation: 'slideUpFade 0.8s ease 0.1s forwards',
            opacity: 0,
          }}>
            {t.hero.name}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            marginBottom: '3rem',
            animation: 'slideUpFade 0.8s ease 0.2s forwards',
            opacity: 0,
          }}>
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            animation: 'slideUpFade 0.8s ease 0.3s forwards',
            opacity: 0,
          }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              {t.hero.cta_work}
            </a>
            <a href="#contact" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              {t.hero.cta_talk}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
