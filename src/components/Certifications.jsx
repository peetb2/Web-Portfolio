import React from 'react';
import { Award, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            Verified Badges
          </span>
          <h2>Certifications &amp; Training</h2>
          <p>Official IT certifications, specialized workshop badges, and technical training credentials.</p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Badge Accent Corner */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(22, 163, 74, 0.15)',
                  filter: 'blur(10px)',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(22, 163, 74, 0.12)',
                    border: '1px solid rgba(22, 163, 74, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#16a34a',
                    flexShrink: 0,
                  }}
                >
                  <Award size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '2px' }}>
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {cert.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={13} color="#16a34a" /> {cert.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600, color: '#16a34a' }}>
                  <ShieldCheck size={14} /> ID: {cert.credentialId}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
