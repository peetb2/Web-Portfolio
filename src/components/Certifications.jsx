import React, { useState } from 'react';
import { Award, Calendar, ShieldCheck, X, ZoomIn } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative', background: 'var(--bg-secondary)' }}>
      <style>{`
        .cert-img-container:hover .cert-hover-overlay { opacity: 1 !important; }
        .cert-img-container:hover img { transform: scale(1.03); }
      `}</style>
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            Verified Badges
          </span>
          <h2>Certifications &amp; Training</h2>
          <p>Official IT certifications and specialized AI training credentials.</p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 580px))',
            gap: '2rem',
            justifyContent: 'center',
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
                gap: '1.1rem',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {/* Image Preview Container */}
              {cert.image && (
                <div
                  onClick={() => setSelectedCert(cert)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    background: 'var(--bg-primary)',
                  }}
                  className="cert-img-container"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      gap: '0.4rem',
                    }}
                    className="cert-hover-overlay"
                  >
                    <ZoomIn size={18} /> View Full Certificate
                  </div>
                </div>
              )}

              {/* Title & Issuer */}
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
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 700, marginTop: '2px' }}>
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {cert.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} color="#16a34a" /> {cert.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: '#16a34a' }}>
                  <ShieldCheck size={15} /> ID: {cert.credentialId}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup Viewer */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            }}
          >
            <button
              onClick={() => setSelectedCert(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
