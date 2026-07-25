import React from 'react';
import { X, ExternalLink, GitBranch, CheckCircle2, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 0,
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
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {/* Project Image Banner */}
        <div style={{ position: 'relative', height: '260px', width: '100%' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 100%)',
            }}
          />
          <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', right: '1.5rem' }}>
            <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>
              {project.category}
            </span>
            <h3 style={{ fontSize: '1.75rem', color: '#ffffff' }}>{project.title}</h3>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Tech Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="badge badge-cyan">
                {tag}
              </span>
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
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.925rem',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links Footer */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-color)',
            }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Live Preview <ExternalLink size={18} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              GitHub Source <GitBranch size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
