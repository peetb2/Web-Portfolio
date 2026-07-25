import React from 'react';
import { ArrowUp, GitBranch, Link2, AtSign, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '3rem 1.5rem 2rem',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-primary)',
        position: 'relative',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center',
        }}
      >
        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.6rem',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
            }}
          >
            <GitBranch size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.6rem',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
            }}
          >
            <Link2 size={18} />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.6rem',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
            }}
          >
            <AtSign size={18} />
          </a>
        </div>

        {/* Copyright & Info */}
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} {personalInfo.name}. Crafted with React & Vite.
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          title="Back to Top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 900,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'var(--gradient-brand)',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(22, 163, 74, 0.45)',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
