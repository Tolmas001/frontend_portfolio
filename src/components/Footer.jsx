import React from 'react';
import { useLang } from '../LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer style={{
      padding: '3.5rem 0',
      borderTop: '1px solid rgba(108,58,237,0.1)',
      background: '#fff',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        <div>
          <div style={{
            fontSize: '1.2rem', fontWeight: '800',
            fontFamily: 'var(--font-heading)', marginBottom: '0.4rem',
            letterSpacing: '-0.03em',
          }}>
            T<span className="text-gradient">.</span>PORTFOLIO
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>© {t.footer.rights}</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((name, i) => (
            <a key={i} href="#" style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              fontWeight: '500',
              padding: '0.4rem 0.8rem',
              borderRadius: '0.4rem',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--primary-color)';
                e.currentTarget.style.background = 'var(--primary-lighter)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
            >{name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
