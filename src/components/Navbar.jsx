import React, { useState, useEffect } from 'react';
import { useLang } from '../LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: scrolled ? '0' : '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: scrolled ? '100%' : '92%',
      maxWidth: scrolled ? '100%' : '1100px',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: scrolled ? '0.85rem 2.5rem' : '0.75rem 1.75rem',
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: scrolled ? '1px solid rgba(108,58,237,0.1)' : 'none',
      border: scrolled ? 'none' : '1.5px solid rgba(108,58,237,0.1)',
      borderRadius: scrolled ? '0' : '1.2rem',
      boxShadow: scrolled ? '0 4px 30px rgba(108,58,237,0.08)' : '0 2px 20px rgba(108,58,237,0.07)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      {/* Logo */}
      <div style={{
        fontSize: '1.25rem', fontWeight: '800',
        fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em',
        cursor: 'default',
      }}>
        T<span className="text-gradient">.</span>PORTFOLIO
      </div>

      {/* Nav Links */}
      <ul className="nav-links" style={{ display: 'flex', gap: '1.75rem', fontSize: '0.88rem', fontWeight: '500' }}>
        {[
          { href: '#home', label: t.nav.home },
          { href: '#about', label: t.nav.about },
          { href: '#skills', label: t.nav.skills },
          { href: '#projects', label: t.nav.projects },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{ color: 'var(--text-secondary)', position: 'relative', padding: '0.2rem 0' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--primary-color)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >{label}</a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Language Switcher */}
        <div className="lang-switcher">
          {['uz', 'ru', 'en'].map((l) => (
            <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        {/* Hire Me */}
        <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.85rem' }}>
          {t.nav.hire}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
