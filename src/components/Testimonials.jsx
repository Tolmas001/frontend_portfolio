import React from 'react';
import { useLang } from '../LanguageContext';

const testimonials = [
  { name: 'Alex Johnson', role: 'CEO at TechNova', text: 'Tolmas delivered an exceptional frontend that exceeded our expectations. His attention to detail is unmatched.', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { name: 'Sarah Miller', role: 'Product Manager', text: 'The glassmorphism design Tolmas implemented for our CRM is stunning. Users love the interface!', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { name: 'Dmitry Ivanov', role: 'Fullstack Developer', text: 'Working with Tolmas was a breeze. He writes clean, maintainable code and has a great eye for design.', avatar: 'https://i.pravatar.cc/150?u=dmitry' },
];

const Testimonials = () => {
  const { t } = useLang();

  return (
    <section id="testimonials" className="section-padding section-alt" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.testimonials.title_highlight}</div>
          <h2>{t.testimonials.title}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0' }}>
            {t.testimonials.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {testimonials.map((item, i) => (
            <div key={i} className="glass reveal" style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
            }}>
              <div style={{ fontSize: '3rem', color: 'var(--primary-color)', opacity: 0.1, position: 'absolute', top: '1rem', right: '1.5rem', fontWeight: '900' }}>"</div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
                {item.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={item.avatar} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid var(--primary-light)' }} />
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{item.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600' }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
