import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, GitBranch, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

function ImageCarousel({ screenshots, fallback, title }) {

  const [current, setCurrent] = useState(0);
  const images = screenshots && screenshots.length > 0 ? screenshots : [{ src: fallback, label: title }];

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  return (
    <div style={{ position: 'relative', height: '280px', width: '100%', overflow: 'hidden', background: '#000' }}>
      {/* Slides */}
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 0.45s ease',
            pointerEvents: idx === current ? 'auto' : 'none',
          }}
        >
          <img
            src={img.src}
            alt={img.label}
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top center',
              zIndex: idx === current ? 2 : 1,
            }}
          />
          {/* gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-secondary) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />
        </div>
      ))}

      {/* Prev / Next arrows — only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            style={{
              position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)',
              zIndex: 5, width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(6px)',
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            style={{
              position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
              zIndex: 5, width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(6px)',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Bottom bar: label + dots */}
      <div
        style={{
          position: 'absolute', bottom: '1rem', left: '1.5rem', right: '1.5rem',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', zIndex: 5,
        }}
      >
        {/* slide label */}
        <div>
          <span
            style={{
              display: 'inline-block', marginBottom: '0.4rem',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
              padding: '0.25rem 0.65rem', borderRadius: '999px',
              background: '#16a34a', color: '#fff',
              backdropFilter: 'blur(6px)',
            }}
          >
            {images[current].label}
          </span>
        </div>

        {/* dot indicators */}
        {images.length > 1 && (
          <div style={{ display: 'flex', gap: '6px', paddingBottom: '2px' }}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  width: idx === current ? '18px' : '7px',
                  height: '7px',
                  borderRadius: '999px',
                  background: idx === current ? 'var(--accent-primary)' : 'rgba(255,255,255,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/75 backdrop-blur-md"
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%', maxWidth: '750px', maxHeight: '90vh',
          overflowY: 'auto', padding: 0,
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-hover)',
          position: 'relative',
          background: 'var(--bg-secondary)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {/* Carousel Banner */}
        <ImageCarousel
          screenshots={project.screenshots}
          fallback={project.image}
          title={project.title}
        />

        {/* Title row sits just below carousel */}
        <div style={{ padding: '1.25rem 1.5rem 0' }}>
          <span className="badge badge-purple" style={{ marginBottom: '0.4rem' }}>
            {project.category}
          </span>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', margin: '0.25rem 0 0' }}>
            {project.title}
          </h3>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.25rem 1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Tech Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="badge badge-cyan">{tag}</span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              About the Project
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Key Technical Features
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                {project.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Student Contribution */}
          {project.studentRole && (
            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(22, 163, 74, 0.08)', border: '1px solid rgba(22, 163, 74, 0.2)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={16} /> Student Contribution / ส่วนที่ดำเนินงาน
              </h4>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                {project.studentRole}
              </p>
            </div>
          )}

          {/* Action Links Footer */}
          <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', flexWrap: 'wrap' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ flex: 1, minWidth: '160px', justifyContent: 'center' }}
            >
              GitHub Source Code <GitBranch size={16} />
            </a>
            {project.figmaUrl && (
              <a href={project.figmaUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1, minWidth: '140px', justifyContent: 'center', borderColor: '#ea4c89', color: '#ea4c89' }}>
                Figma Design <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
