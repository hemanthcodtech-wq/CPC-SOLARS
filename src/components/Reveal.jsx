import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal: Cinematic Bidirectional Scroll Animation.
 * - 'reveal': Animates smoothly into view with depth, optical blur decay, and physics easing
 * - 'unreveal': Gracefully unreveals (fades, slides & blurs out) when scrolled past or out of view
 * - viewport once: false ensures continuous, alive interactivity when scrolling up and down
 */
export default function Reveal({
  children,
  width = '100%',
  delay = 0,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'scale' | 'zoom' | 'none'
  duration = 0.7,
  className = '',
  amount = 0.18, // trigger threshold
}) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 55, scale: 0.98, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -55, scale: 0.98, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: 55, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -55, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9, filter: 'blur(8px)' },
          visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 1.08, filter: 'blur(8px)' },
          visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      default:
        return {
          hidden: { opacity: 0, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
