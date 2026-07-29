import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Sparkles, Bot } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',           href: '#hero' },
    { name: 'About',          href: '#about' },
    { name: 'Skills',         href: '#skills' },
    { name: 'Projects',       href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact',        href: '#contact' },
  ];

  return (
    <header
      className="z-50"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '0.8rem 1.5rem' : '1.25rem 1.5rem',
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo - PeetAI */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontSize: '1.35rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #10b981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)',
            }}
          >
            <Bot size={22} color="#fff" />
          </div>
          <span>
            Turter<span style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--gradient-brand)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            style={{
              padding: '0.55rem',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* CTA Hire Button */}
          <a
            href="#contact"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
            }}
            className="hidden md:flex btn-primary"
          >
            <Sparkles size={15} />
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '0.55rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
            }}
            className="mobile-menu-btn md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '0.5rem 0',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ textAlign: 'center', justifyContent: 'center', marginTop: '0.5rem' }}
          >
            <Sparkles size={16} /> Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .terminal-text { display: inline !important; }
        }
      `}</style>
    </header>
  );
}
