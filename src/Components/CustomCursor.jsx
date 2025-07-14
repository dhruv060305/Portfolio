import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('white');

  // Utility: Check brightness to decide if background is dark or light
  const isDark = (bgColor) => {
    const match = bgColor.match(/\d+/g);
    if (!match) return false;
    const [r, g, b] = match.map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      // Detect element under cursor
      const elem = document.elementFromPoint(x, y);
      if (elem) {
        const bg = window.getComputedStyle(elem).backgroundColor;
        setCursorColor(isDark(bg) ? 'white' : 'black');
      }
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75"
      style={{
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-4 h-4 rounded-full transition-all duration-200"
        style={{
          backgroundColor: cursorColor,
          boxShadow: `0 0 12px 4px ${cursorColor === 'white' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)'}`,
        }}
      />
    </div>
  );
}
