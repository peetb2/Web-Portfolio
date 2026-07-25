import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Palette,
  Layers,
  Cpu,
  Server,
  Globe,
  Database,
  Zap,
  Terminal,
  GitBranch,
  Box,
  Wrench,
  CheckCircle2,
  PenTool,
  Bot,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import SpotlightCard from './reactbits/SpotlightCard';

const iconMap = {
  Code2,
  FileCode,
  Palette,
  Layers,
  Cpu,
  Server,
  Globe,
  Database,
  Zap,
  Terminal,
  GitBranch,
  Box,
  Wrench,
  CheckCircle2,
  Bot,
  Sparkles,
  Figma: PenTool
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'localAI', label: '🤖 Local AI & LLMs' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
  ];

  const getFilteredSkills = () => {
    const local = skillsData.localAI || [];
    const fe = skillsData.frontend || [];
    const be = skillsData.backend || [];

    if (activeCategory === 'localAI') return local;
    if (activeCategory === 'frontend') return fe;
    if (activeCategory === 'backend') return be;
    return [...local, ...fe, ...be];
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span className="badge badge-purple" style={{ marginBottom: '0.75rem' }}>
            Technical Proficiency
          </span>
          <h2>Skills & Technologies</h2>
          <p>A comprehensive overview of my tech stack, frameworks, and development tools.</p>
        </div>

        {/* Category Filter Tabs */}
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
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                background: activeCategory === cat.id ? 'var(--gradient-glow)' : 'var(--bg-card)',
                color: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with React Bits SpotlightCard */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {getFilteredSkills().map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(99, 102, 241, 0.2)"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(99, 102, 241, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      <IconComponent size={22} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--border-color)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'var(--gradient-brand)',
                      borderRadius: 'var(--radius-full)',
                      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
