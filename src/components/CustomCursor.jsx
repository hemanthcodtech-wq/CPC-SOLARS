import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * Subtle Premium Custom Cursor for Desktop Only
 * - Disabled on touch devices and small viewports (<1024px)
 * - Gentle trailing spring physics
 * - Subtle expand when hovering clickable items (links, buttons, cards)
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Smooth springs for cursor position
  const cursorX = useSpring(-100, { damping: 25, stiffness: 250, mass: 0.5 });
  const cursorY = useSpring(-100, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.gallery-card') ||
        target.closest('.project-card') ||
        target.closest('.service-card') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999999,
      }}
    >
      {/* Outer ambient ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          width: hovered ? 46 : 28,
          height: hovered ? 46 : 28,
          borderRadius: '50%',
          border: hovered ? '1.5px solid #22c55e' : '1px solid rgba(34, 197, 94, 0.45)',
          backgroundColor: hovered ? 'rgba(34, 197, 94, 0.12)' : 'transparent',
          boxShadow: hovered ? '0 0 16px rgba(34, 197, 94, 0.35)' : 'none',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
          pointerEvents: 'none',
        }}
      />
      {/* Core pinpoint */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          width: hovered ? 8 : 5,
          height: hovered ? 8 : 5,
          borderRadius: '50%',
          backgroundColor: '#16a34a',
          transition: 'width 0.2s ease, height 0.2s ease',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

