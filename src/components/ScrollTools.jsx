import React, { useState, useEffect } from 'react';

const ScrollTools = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setShowBackToTop(currentScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '4px',
        background: 'var(--primary-gradient)',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
      }} />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="glass"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          zIndex: 1500,
          opacity: showBackToTop ? 1 : 0,
          transform: `translateY(${showBackToTop ? '0' : '20px'})`,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-lg)',
          color: 'var(--primary-color)',
        }}
      >
        ↑
      </button>

      {/* Floating Telegram Button */}
      <a
        href="https://t.me/tolmas_dev"
        target="_blank"
        rel="noopener noreferrer"
        className="glass"
        style={{
          position: 'fixed',
          bottom: '6rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          zIndex: 1500,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-lg)',
          background: 'var(--primary-gradient)',
          color: 'white',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        ✈️
      </a>
    </>
  );
};

export default ScrollTools;
