import React, { useState, useEffect } from 'react';

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  className = '',
  style = {},
  animateOnMount = true,
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';

  const triggerAnimation = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 3;
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOnMount) {
      triggerAnimation();
    }
  }, [text]);

  return (
    <span
      className={className}
      style={{ cursor: 'default', fontFamily: 'inherit', ...style }}
      onMouseEnter={() => triggerAnimation()}
    >
      {displayText}
    </span>
  );
}
