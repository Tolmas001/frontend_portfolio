import React from 'react';
import { useLang } from '../LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="glass" style={{
      padding: '4rem 0',
      borderTop: '1px solid var(--border-color)',
      background: 'var(--bg-color)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
      }}>
        <div>
          <div style={{
            fontSize: '1.4rem', fontWeight: '900',
            fontFamily: 'var(--font-heading)', marginBottom: '0.6rem',
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)'
          }}>
            T<span style={{ color: 'var(--primary-color)' }}>.</span>PORTFOLIO
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' }}>© {t.footer.rights}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[
            { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
            { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
            { name: 'Telegram', icon: '✈️', url: 'https://t.me' },
            { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
          ].map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="glass" style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              transition: 'var(--transition)',
              border: '1px solid var(--border-color)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.background = 'var(--primary-gradient)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'inherit';
              }}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
