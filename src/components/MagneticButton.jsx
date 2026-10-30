import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticButton: Wraps buttons and links to give subtle physical attraction towards cursor on desktop.
 * Gracefully acts as normal container on touch or if disabled.
 */
export default function MagneticButton({ children, className = '', strength = 0.28, ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Only apply on fine pointer devices (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.1 }}
      className={`magnetic-wrap ${className}`}
      style={{ display: 'inline-block' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

