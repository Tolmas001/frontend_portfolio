import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../LanguageContext';

const Contact = () => {
  const { t } = useLang();
  const [formState, setFormState] = useState('idle');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach((el, i) => setTimeout(() => el.classList.add('revealed'), i * 120));
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  // Ripple effect on submit button
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
      width: 20px; height: 20px;
      left: ${e.clientX - rect.left - 10}px;
      top: ${e.clientY - rect.top - 10}px;
    `;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section id="contact" className="section-padding" ref={sectionRef}
      style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* BG Decorations */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(108,58,237,0.07), transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.07), transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-tag">Contact</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {t.contact.title} <span className="text-gradient">{t.contact.title_highlight}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '1rem auto 0', fontSize: '1.05rem' }}>
            {t.contact.subtitle}
          </p>
          <div className="gradient-divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* LEFT: Info */}
          <div className="reveal-left">
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Let's work together</h3>

            {[
              { icon: '📧', label: t.contact.email_label, value: 'hello@tolmas.dev' },
              { icon: '📍', label: t.contact.location_label, value: t.contact.location_value },
              { icon: '💬', label: 'Telegram', value: '@tolmas_dev' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                marginBottom: '1.75rem',
                padding: '1.25rem',
                border: '1.5px solid rgba(108,58,237,0.1)',
                borderRadius: 'var(--radius-sm)',
                background: '#fafbff',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.borderColor = 'rgba(108,58,237,0.35)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,58,237,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = 'rgba(108,58,237,0.1)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="contact-icon-box">{item.icon}</div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '500' }}>{item.label}</div>
                  <div style={{ fontWeight: '600', marginTop: '0.15rem' }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((s, i) => (
                <a key={i} href="#" style={{
                  padding: '0.6rem 1rem',
                  border: '1.5px solid rgba(108,58,237,0.15)',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #6c3aed, #a855f7)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.borderColor = 'rgba(108,58,237,0.15)';
                  }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="reveal-right" style={{
            background: '#fafbff',
            border: '1.5px solid rgba(108,58,237,0.1)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}>
            {formState === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', animation: 'bounceIn 0.8s ease' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'heroFloat 2s ease-in-out infinite' }}>🎉</div>
                <h3 style={{ marginBottom: '0.75rem' }}>{t.contact.success_title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{t.contact.success_text}</p>
                <button className="btn btn-outline" onClick={() => setFormState('idle')}>
                  {t.contact.success_btn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: t.contact.form_name, type: 'text', placeholder: 'John Doe' },
                  { label: t.contact.form_email, type: 'email', placeholder: 'john@example.com' },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="form-label">{field.label}</label>
                    <input type={field.type} required placeholder={field.placeholder} className="form-input" />
                  </div>
                ))}
                <div>
                  <label className="form-label">{t.contact.form_message}</label>
                  <textarea required rows="5" placeholder="Your message..." className="form-input"
                    style={{ resize: 'none' }} />
                </div>
                <button type="submit" className="btn btn-primary"
                  disabled={formState === 'submitting'}
                  onClick={handleRipple}
                  style={{ width: '100%', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  {formState === 'submitting' ? (
                    <>
                      <span style={{
                        display: 'inline-block', width: '16px', height: '16px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        animation: 'spinOrbit 0.7s linear infinite',
                      }} />
                      {t.contact.form_submitting}
                    </>
                  ) : t.contact.form_submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
