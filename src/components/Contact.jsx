import React, { useState } from 'react';
import { useLang } from '../LanguageContext';

const Contact = () => {
  const { t } = useLang();
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Contact</div>
          <h2>{t.contact.title}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', marginTop: '1rem' }}>
            {t.contact.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
        }}>
          {/* LEFT: Info */}
          <div className="reveal-left">
            <h3 style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>Get in touch</h3>

            {[
              { label: t.contact.email_label, value: 'hello@tolmas.dev' },
              { label: t.contact.location_label, value: t.contact.location_value },
              { label: 'Telegram', value: '@tolmas_dev' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.label}
                </div>
                <div style={{ fontWeight: '500', marginTop: '0.25rem', color: 'var(--text-primary)' }}>
                  {item.value}
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
              {['GitHub', 'LinkedIn', 'Twitter'].map((s, i) => (
                <a key={i} href="#" style={{
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid transparent',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="reveal-right">
            {formState === 'success' ? (
              <div style={{ padding: '2rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>{t.contact.success_title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{t.contact.success_text}</p>
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
                  <textarea required rows="4" placeholder="Your message..." className="form-input" style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={formState === 'submitting'} style={{ marginTop: '0.5rem', width: 'fit-content' }}>
                  {formState === 'submitting' ? t.contact.form_submitting : t.contact.form_submit}
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
