import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * AnimatedCounter: Smooth count-up animation for numbers triggered when scrolled into view.
 * e.g., 2012, 12, 10, 1000
 */
export default function AnimatedCounter({ value, end, duration = 2, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    stiffness: 70,
    damping: 24,
    duration: duration * 1000,
  });

  // Support both `value` and `end` props gracefully with null/undefined safety
  const rawTarget = value !== undefined ? value : end !== undefined ? end : 0;
  const numericVal =
    typeof rawTarget === 'number'
      ? rawTarget
      : parseInt(String(rawTarget ?? 0).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (isInView) {
      motionVal.set(numericVal);
    }
  }, [isInView, motionVal, numericVal]);

  useEffect(() => {
    const unsubscribe = springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springVal, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

