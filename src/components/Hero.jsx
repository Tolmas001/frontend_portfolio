import React, { useState, useEffect } from 'react';
import heroBg from '../assets/hero_bg.png';
import avatar from '../assets/avatar.png';
import { useLang } from '../LanguageContext';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 14 + 6,
  left: `${Math.random() * 100}%`,
  duration: `${Math.random() * 12 + 10}s`,
  delay: `${Math.random() * 8}s`,
  color: i % 3 === 0 ? '#6c3aed' : i % 3 === 1 ? '#06b6d4' : '#a855f7',
  opacity: Math.random() * 0.35 + 0.1,
}));

const Hero = () => {
  const { t } = useLang();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullTitle = t.hero.name;

  // Typewriter effect
  useEffect(() => {
    setDisplayedTitle('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [fullTitle]);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #f8f9ff 0%, #fff 40%, #f5f0ff 100%)',
    }}>
      {/* Morphing blobs */}
      <div className="hero-blob" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(108,58,237,0.12), rgba(168,85,247,0.08))',
        top: '-100px', left: '-150px',
        animationDuration: '9s',
        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        transition: 'transform 0.3s ease',
      }} />
      <div className="hero-blob" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.12), rgba(168,85,247,0.06))',
        bottom: '-80px', right: '-100px',
        animationDuration: '11s', animationDelay: '3s',
        transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
        transition: 'transform 0.3s ease',
      }} />

      {/* Orbit rings */}
      {[240, 360, 480].map((size, idx) => (
        <div key={idx} className="orbit-container" style={{
          width: `${size}px`, height: `${size}px`,
          top: '50%', left: '50%',
          marginTop: `-${size / 2}px`,
          marginLeft: `-${size / 2}px`,
          animationDuration: `${20 + idx * 8}s`,
          opacity: 0.4,
        }}>
          <div className="orbit-dot" style={{
            animationDuration: `${20 + idx * 8}s`,
            width: `${8 - idx}px`, height: `${8 - idx}px`,
            marginLeft: `-${(8 - idx) / 2}px`,
            top: `-${(8 - idx) / 2}px`,
          }} />
        </div>
      ))}

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div key={p.id} className="particle" style={{
          width: `${p.size}px`, height: `${p.size}px`,
          left: p.left,
          bottom: '-20px',
          background: p.color,
          opacity: p.opacity,
          animationDuration: p.duration,
          animationDelay: p.delay,
          boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
        }} />
      ))}

      {/* Grid lines BG */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(108,58,237,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(108,58,237,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 0,
      }} />

      {/* Main Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* Avatar */}
        <div className="animate-bounce-in" style={{
          width: '130px', height: '130px',
          margin: '0 auto 1.5rem',
          borderRadius: '50%',
          padding: '4px',
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          boxShadow: '0 10px 30px rgba(108,58,237,0.2)',
          position: 'relative',
          animation: 'heroFloat 6s ease-in-out infinite',
        }}>
          <img src={avatar} alt="Tolmas" style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '4px solid #fff',
          }} />
          {/* Status dot */}
          <span style={{
            position: 'absolute',
            bottom: '8px', right: '8px',
            width: '20px', height: '20px',
            background: '#22c55e',
            border: '3px solid #fff',
            borderRadius: '50%',
          }} />
        </div>

        {/* Greeting tag */}
        <div className="animate-bounce-in" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          background: 'linear-gradient(135deg, #ede9fe, #e0f9ff)',
          border: '1.5px solid rgba(108,58,237,0.2)',
          borderRadius: '2rem',
          padding: '0.45rem 1.3rem',
          marginBottom: '2rem',
          fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary-color)',
        }}>
          <span style={{
            width: '9px', height: '9px', borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            boxShadow: '0 0 0 4px rgba(34,197,94,0.2)',
            animation: 'tagPulse 2s ease infinite',
          }} />
          {t.hero.greeting}
        </div>

        {/* Giant name with typewriter */}
        <h1 className="animate-slide-up delay-2" style={{
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          lineHeight: '1.0',
          marginBottom: '0.5rem',
          letterSpacing: '-0.04em',
        }}>
          <span className="text-gradient">{displayedTitle}</span>
          <span style={{
            display: 'inline-block',
            width: '4px',
            height: '0.85em',
            background: 'var(--primary-color)',
            borderRadius: '2px',
            marginLeft: '4px',
            verticalAlign: 'middle',
            animation: 'blink 0.8s step-end infinite',
          }} />
        </h1>

        {/* Subtitle */}
        <p className="animate-slide-up delay-3" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: 'var(--text-secondary)',
          maxWidth: '680px',
          margin: '1.5rem auto 3rem',
          lineHeight: '1.85',
        }}>
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="animate-slide-up delay-4" style={{
          display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a href="#projects" className="btn btn-primary">
            {t.hero.cta_work} <span style={{ fontSize: '1.1em' }}>→</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            {t.hero.cta_talk}
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-in delay-5" style={{
          display: 'flex', gap: '3rem', justifyContent: 'center',
          marginTop: '5rem', flexWrap: 'wrap',
        }}>
          {[
            { number: '5+', label: 'Years Exp.' },
            { number: '40+', label: 'Projects' },
            { number: '98%', label: 'Client Sat.' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div className="counter-number" style={{ animationDelay: `${0.5 + i * 0.15}s` }}>
                {s.number}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '500', marginTop: '0.2rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
      }}>
        <div style={{
          width: '28px', height: '46px',
          border: '2px solid rgba(108,58,237,0.25)',
          borderRadius: '14px',
          display: 'flex', justifyContent: 'center',
          paddingTop: '8px',
        }}>
          <div style={{
            width: '4px', height: '8px',
            background: 'var(--primary-color)',
            borderRadius: '2px',
            animation: 'particleDrift 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
