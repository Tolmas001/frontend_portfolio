import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem'
        }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get in <span className="text-gradient">Touch</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Have a project in mind? Let's build something extraordinary together.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📧</div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</p>
                  <p>hello@tolmas.dev</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</p>
                  <p>Tashkent, Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass" style={{ padding: '3rem' }}>
            {formState === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h3>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Thank you for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-outline" style={{ marginTop: '2rem' }} onClick={() => setFormState('idle')}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input type="text" required placeholder="John Doe" style={{
                    padding: '1rem',
                    background: 'var(--bg-color)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                  <input type="email" required placeholder="john@example.com" style={{
                    padding: '1rem',
                    background: 'var(--bg-color)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                  <textarea required rows="4" placeholder="Your message here..." style={{
                    padding: '1rem',
                    background: 'var(--bg-color)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    resize: 'none'
                  }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
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
