import React, { useState } from 'react';
import { createPortal } from 'react-dom';
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
          <p>Official credentials and continuous professional development achievements</p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
              }}
            >
              {/* Certificate Image Preview */}
              {cert.image && (
                <div
                  className="cert-img-container"
                  onClick={() => setSelectedCert(cert)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#f8fafc',
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  {/* Hover Overlay */}
                  <div
                    className="cert-hover-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(22, 163, 74, 0.45)',
                      backdropFilter: 'blur(3px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <span
                      style={{
                        background: '#ffffff',
                        color: '#16a34a',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        boxShadow: 'var(--shadow-md)',
                      }}
                    >
                      <ZoomIn size={16} /> View Certificate
                    </span>
                  </div>
                </div>
              )}

              {/* Certificate Details */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Award size={18} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {cert.issuer}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>
                  {cert.description}
                </p>

                {/* Footer Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-color)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    <ShieldCheck size={14} />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup Viewer */}
      {selectedCert && createPortal(
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
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
        </div>,
        document.body
      )}
    </section>
  );
}
