import React, { useState, useEffect } from 'react';
import { useLang } from '../LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
      borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        fontSize: '1.2rem', fontWeight: '700',
        color: 'var(--text-primary)',
        cursor: 'default',
        letterSpacing: '-0.02em',
      }}>
        T.PORTFOLIO
      </div>

      <ul className="nav-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', fontWeight: '500' }}>
        {[
          { href: '#home', label: t.nav.home },
          { href: '#about', label: t.nav.about },
          { href: '#skills', label: t.nav.skills },
          { href: '#projects', label: t.nav.projects },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >{label}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div className="lang-switcher">
          {['uz', 'ru', 'en'].map((l) => (
            <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
          {t.nav.hire}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
