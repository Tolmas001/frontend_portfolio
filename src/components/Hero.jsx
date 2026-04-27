import React from 'react';
import avatar from '../assets/avatar.png';
import { useLang } from '../LanguageContext';

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="home" className="dot-bg" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '80px',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* Avatar */}
        <div className="animate-slide-up" style={{ margin: '0 auto 2rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '120px', height: '120px',
            borderRadius: '50%',
            border: '1px solid var(--border-color)',
            padding: '4px',
            background: '#fff',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
          }}>
            <img src={avatar} alt="Tolmas" style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-secondary)',
            }} />
          </div>
        </div>

        {/* Greeting tag */}
        <div className="animate-slide-up delay-1 section-tag">
          {t.hero.greeting}
        </div>

        {/* Giant name */}
        <h1 className="animate-slide-up delay-2" style={{
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          lineHeight: '1.1',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
        }}>
          {t.hero.name}
        </h1>

        {/* Subtitle */}
        <p className="animate-slide-up delay-3" style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 3rem',
        }}>
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="animate-slide-up delay-4" style={{
          display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a href="#projects" className="btn btn-primary">
            {t.hero.cta_work}
          </a>
          <a href="#contact" className="btn btn-outline">
            {t.hero.cta_talk}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
