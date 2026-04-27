import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div>
          <div className="logo" style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
            PORTFOLIO<span className="text-gradient">.</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>© 2026 Tolmas. All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>GitHub</a>
          <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>LinkedIn</a>
          <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Twitter</a>
          <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
