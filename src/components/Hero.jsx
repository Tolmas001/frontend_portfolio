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
      overflow: 'hidden',
    }}>
      {/* Dynamic Background Blobs */}
      <div className="animate-blob" style={{
        position: 'absolute', top: '15%', left: '10%',
        width: '400px', height: '400px',
        background: 'rgba(79, 70, 229, 0.15)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: 0,
      }} />
      <div className="animate-blob" style={{
        position: 'absolute', bottom: '15%', right: '10%',
        width: '400px', height: '400px',
        background: 'rgba(236, 72, 153, 0.15)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: 0,
        animationDelay: '2s',
      }} />
      <div className="animate-blob" style={{
        position: 'absolute', top: '40%', left: '45%',
        width: '300px', height: '300px',
        background: 'rgba(124, 58, 237, 0.12)',
        filter: 'blur(60px)',
        borderRadius: '50%',
        zIndex: 0,
        animationDelay: '4s',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Status Badge */}
          <div className="animate-slide-up" style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem', 
            background: 'var(--bg-tertiary)', 
            border: '1px solid var(--border-color)', 
            padding: '0.5rem 1.2rem', borderRadius: '100px',
            marginBottom: '2.5rem', boxShadow: 'var(--shadow-sm)',
            backdropFilter: 'blur(10px)',
          }}>
            <span style={{ 
              width: '10px', height: '10px', borderRadius: '50%', 
              background: '#10b981', display: 'inline-block',
              boxShadow: '0 0 10px #10b981'
            }}></span>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary-color)' }}>
              Available for new opportunities
            </span>
          </div>

          {/* Giant headline */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
            lineHeight: '1',
            marginBottom: '2rem',
            letterSpacing: '-0.05em',
            animation: 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
            opacity: 0,
            fontWeight: '900',
          }}>
            <span style={{ color: 'var(--text-primary)' }}>Hi, I'm </span>
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 10px 20px rgba(236, 72, 153, 0.1)',
            }}>{t.hero.name}</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.4rem',
            lineHeight: '1.5',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 3.5rem',
            animation: 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
            opacity: 0,
            fontWeight: '500',
          }}>
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap',
            animation: 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
            opacity: 0,
          }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              {t.hero.cta_work}
            </a>
            <a href="#contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', background: 'transparent' }}>
              {t.hero.cta_talk}
            </a>
          </div>

          {/* Mini Avatar */}
          <div style={{ 
            marginTop: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem',
            animation: 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards', opacity: 0
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-4px',
                background: 'var(--accent-gradient)',
                borderRadius: '50%',
                zIndex: -1,
                filter: 'blur(8px)',
                opacity: 0.5,
              }} />
              <img src={avatar} alt="Tolmas" style={{
                width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover',
                border: '3px solid white', boxShadow: 'var(--shadow-lg)'
              }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Urinov Tolmas</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600' }}>Frontend Engineer</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
