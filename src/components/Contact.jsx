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
    <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px',
        background: 'rgba(79, 70, 229, 0.05)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header reveal">
          <div className="section-tag" style={{ background: 'var(--primary-light)', color: 'var(--primary-color)' }}>
            Contact
          </div>
          <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em' }}>{t.contact.title}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '1.5rem auto 0', fontSize: '1.1rem' }}>
            {t.contact.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* LEFT: Info */}
          <div className="reveal">
            <h3 style={{ marginBottom: '2.5rem', fontSize: '1.8rem', color: 'var(--text-primary)', fontWeight: '800' }}>
              Let's build something <span style={{ color: 'var(--primary-color)' }}>extraordinary</span>.
            </h3>

            {[
              { label: t.contact.email_label, value: 'hello@tolmas.dev', icon: '✉️' },
              { label: t.contact.location_label, value: t.contact.location_value, icon: '📍' },
              { label: 'Telegram', value: '@tolmas_dev', icon: '✈️' },
            ].map((item, i) => (
              <div key={i} className="glass" style={{ 
                marginBottom: '1.5rem', 
                padding: '1.5rem', 
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'center',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {item.label}
                  </div>
                  <div style={{ fontWeight: '600', marginTop: '0.2rem', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Form */}
          <div className="reveal">
            {formState === 'success' ? (
              <div className="glass" style={{ 
                padding: '4rem 2rem', 
                borderRadius: 'var(--radius-xl)', 
                textAlign: 'center',
                border: '2px solid #10b981',
                background: 'rgba(16, 185, 129, 0.05)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem', color: 'var(--text-primary)' }}>{t.contact.success_title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {t.contact.success_text}
                </p>
                <button className="btn btn-primary" onClick={() => setFormState('idle')}>
                  {t.contact.success_btn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                padding: '3rem',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                {[
                  { label: t.contact.form_name, type: 'text', placeholder: 'John Doe' },
                  { label: t.contact.form_email, type: 'email', placeholder: 'john@example.com' },
                ].map((field, i) => (
                  <div key={i}>
                    <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                      {field.label}
                    </label>
                    <input type={field.type} required placeholder={field.placeholder} className="form-input" style={{ background: 'var(--bg-color)' }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {t.contact.form_message}
                  </label>
                  <textarea required rows="5" placeholder="Tell me about your project..." className="form-input" style={{ resize: 'vertical', background: 'var(--bg-color)' }} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={formState === 'submitting'} style={{ 
                  marginTop: '1rem', 
                  width: '100%',
                  justifyContent: 'center',
                  padding: '1rem',
                  fontSize: '1rem'
                }}>
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
