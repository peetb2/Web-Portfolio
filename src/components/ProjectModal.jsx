import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, GitBranch, CheckCircle2, Sparkles, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

function ImageCarousel({ screenshots, fallback, title }) {
  const [current, setCurrent] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const images = screenshots && screenshots.length > 0 ? screenshots : [{ src: fallback, label: title }];

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '420px', width: '100%', overflow: 'hidden', background: 'var(--bg-primary)' }}>
      {/* Viewport for uncropped screenshot */}
      <div style={{ flex: 1, position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', overflow: 'hidden' }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.label}
            onClick={() => setFullscreenImg(current)}
            style={{
              position: 'absolute',
              maxWidth: 'calc(100% - 24px)',
              maxHeight: 'calc(100% - 24px)',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              opacity: idx === current ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out',
              pointerEvents: idx === current ? 'auto' : 'none',
              zIndex: idx === current ? 2 : 1,
              cursor: 'zoom-in',
            }}
            title="Click to expand full screen"
          />
        ))}

        {/* Fullscreen Hint Button */}
        <button
          onClick={() => setFullscreenImg(current)}
          style={{
            position: 'absolute', top: '0.75rem', right: '0.75rem', zIndex: 7,
            display: 'flex', alignItems: 'center', gap: '5px',
            padding: '0.35rem 0.65rem', borderRadius: '8px',
            background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.2)',
            color: '#ffffff', fontSize: '0.72rem', fontWeight: 600,
            backdropFilter: 'blur(6px)', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#16a34a')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)')}
          title="Click to view full screen"
        >
          <Maximize2 size={13} /> Fullscreen
        </button>

        {/* Prev / Next arrows */}
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
      </div>

      {/* Bottom explanation card */}
      <div
        style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
          padding: '0.85rem 1.25rem',
          display: 'flex', flexDirection: 'column', gap: '0.35rem', zIndex: 5,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
              padding: '0.25rem 0.65rem', borderRadius: '999px',
              background: '#16a34a', color: '#fff',
              backdropFilter: 'blur(6px)',
            }}
          >
            {images[current].label}
          </span>

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

        {images[current].desc && (
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            lineHeight: 1.45,
            margin: 0,
            fontWeight: 500,
          }}>
            {images[current].desc}
          </p>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {fullscreenImg !== null && createPortal(
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: 'rgba(0, 0, 0, 0.93)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setFullscreenImg(null)}
        >
          <button
            onClick={() => setFullscreenImg(null)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 100000,
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff', display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer',
            }}
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setFullscreenImg((fullscreenImg - 1 + images.length) % images.length); }}
                style={{
                  position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                  zIndex: 100000, width: '48px', height: '48px', borderRadius: '50%',
                  background: 'rgba(22, 163, 74, 0.9)', border: '1px solid rgba(255,255,255,0.3)',
                  color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setFullscreenImg((fullscreenImg + 1) % images.length); }}
                style={{
                  position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                  zIndex: 100000, width: '48px', height: '48px', borderRadius: '50%',
                  background: 'rgba(22, 163, 74, 0.9)', border: '1px solid rgba(255,255,255,0.3)',
                  color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div
            style={{ position: 'relative', maxWidth: '92vw', maxHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[fullscreenImg].src}
              alt={images[fullscreenImg].label}
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}
            />
          </div>

          <div
            style={{
              position: 'absolute', bottom: '1.5rem',
              background: 'rgba(15, 23, 42, 0.88)', border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)', padding: '0.85rem 1.5rem', borderRadius: '16px',
              maxWidth: '700px', width: '90%', display: 'flex', flexDirection: 'column',
              gap: '0.35rem', textAlign: 'center', alignItems: 'center', zIndex: 100000,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span style={{ fontSize: '0.82rem', fontWeight: 800, padding: '0.25rem 0.85rem', borderRadius: '999px', background: '#16a34a', color: '#ffffff' }}>
              {images[fullscreenImg].label}
            </span>
            {images[fullscreenImg].desc && (
              <p style={{ color: 'rgba(241, 245, 249, 0.95)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                {images[fullscreenImg].desc}
              </p>
            )}
          </div>
        </div>,
        document.body
      )}
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
