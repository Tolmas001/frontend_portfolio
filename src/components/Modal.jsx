import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      animation: 'fadeIn 0.3s ease',
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>

      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
        }} 
      />

      {/* Modal Content */}
      <div className="glass" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: 'var(--radius-xl)',
        padding: '3rem',
        animation: 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        border: '1px solid var(--border-glass)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            fontSize: '2rem',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>

        {content}
      </div>
    </div>
  );
};

export default Modal;
