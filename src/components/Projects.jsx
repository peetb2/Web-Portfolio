import React, { useState } from 'react';
import { ExternalLink, GitBranch, Eye, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import SpotlightCard from './reactbits/SpotlightCard';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'AI / Web Apps'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            Portfolio Showcase
          </span>
          <h2>Featured Projects</h2>
          <p>Explore some of my recent web applications, full-stack tools, and digital experiences.</p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                background: activeCategory === cat ? 'var(--gradient-glow)' : 'var(--bg-card)',
                color: activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with React Bits SpotlightCard */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor="rgba(6, 182, 212, 0.2)"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                padding: 0,
              }}
            >
              {/* Project Cover Image */}
              <div
                style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                  }}
                >
                  <span className="badge badge-purple">{project.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      marginBottom: '0.5rem',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                    }}
                    onClick={() => onSelectProject(project)}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--border-color)',
                  }}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-primary)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Eye size={16} /> Details
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: 'var(--text-secondary)',
                        padding: '0.4rem',
                        borderRadius: '50%',
                        transition: 'color 0.2s ease',
                      }}
                      title="GitHub Repository"
                    >
                      <GitBranch size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: 'var(--text-secondary)',
                        padding: '0.4rem',
                        borderRadius: '50%',
                        transition: 'color 0.2s ease',
                      }}
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
