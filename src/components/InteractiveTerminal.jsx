import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: `Welcome to ${personalInfo.name}'s CLI Terminal v1.0.0` },
    { type: 'system', text: 'Type "help" to view available commands.' },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  about    - Displays personal summary & background
  skills   - Lists key frontend, backend & tools skills
  projects - Displays featured project titles & categories
  contact  - Displays email, phone, location & socials
  clear    - Clears terminal output
  exit     - Closes terminal modal`,
        });
        break;
      case 'about':
        newHistory.push({
          type: 'output',
          text: `${personalInfo.name} | ${personalInfo.title}\n${personalInfo.bio}`,
        });
        break;
      case 'skills':
        const fe = skillsData.frontend.map((s) => s.name).join(', ');
        const be = skillsData.backend.map((s) => s.name).join(', ');
        newHistory.push({
          type: 'output',
          text: `[Frontend]: ${fe}\n[Backend]: ${be}`,
        });
        break;
      case 'projects':
        const list = projectsData.map((p) => `• ${p.title} (${p.category})`).join('\n');
        newHistory.push({
          type: 'output',
          text: `Featured Projects:\n${list}`,
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLocation: ${personalInfo.location}`,
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        onClose();
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
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
          maxWidth: '680px',
          height: '480px',
          background: '#090d16',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-glow)',
          fontFamily: 'var(--font-code)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#121824',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.825rem', marginLeft: '0.5rem' }}>
              narawut@portfolio:~ (zsh)
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div
          style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            fontSize: '0.9rem',
          }}
        >
          {history.map((item, idx) => (
            <div
              key={idx}
              style={{
                color:
                  item.type === 'user'
                    ? '#38bdf8'
                    : item.type === 'error'
                    ? '#f87171'
                    : item.type === 'system'
                    ? '#a855f7'
                    : '#e2e8f0',
                whiteSpace: 'pre-wrap',
              }}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form
          onSubmit={handleCommand}
          style={{
            padding: '0.85rem 1.25rem',
            background: '#0d131f',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#34d399', fontWeight: 600 }}>$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. help, skills, projects)..."
            autoFocus
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              color: '#f8fafc',
              fontFamily: 'var(--font-code)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-primary)',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <CornerDownLeft size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
