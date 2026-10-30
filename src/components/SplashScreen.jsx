import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cpcLogo from '../assets/logo.png';
import './SplashScreen.css';

/**
 * Premium Cinematic Splash Screen for Crystal Power Controls (CPC)
 * 
 * Sequence (0 to 4.0s total):
 * 0.0 - 0.6s: Deep forest-green ambient glow & rising golden dawn from horizon
 * 0.6 - 1.4s: Solar sunrise ascends behind photorealistic 3D-angled solar panel array
 * 1.4 - 2.2s: Light rays cast across grid, glowing photovoltaic energy particles pulse & flow
 * 2.2 - 3.0s: Energy particles converge into center wave, revealing Crystal Power Controls logo with light-sweep
 * 3.0 - 3.6s: Tagline "POWERING A BRIGHTER, GREENER FUTURE" unfolds with emerald-gold laser line
 * 3.6 - 4.0s: Cinematic dissolution / zoom transition into Homepage
 */
export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  // Check user preference for reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // If reduced motion is requested, complete faster (1.2s)
    const timer = setTimeout(() => {
      handleComplete();
    }, prefersReducedMotion ? 1200 : 3950);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 450); // wait for exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="cpc-splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-live="polite"
          role="status"
        >
          {/* Skip button for accessibility & power users */}
          <button
            className="cpc-splash-skip"
            onClick={handleComplete}
            aria-label="Skip splash screen"
          >
            <span>Skip Intro</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>

          {/* BACKGROUND: Deep Forest Green (#04170e -> #020c07) */}
          <div className="cpc-splash-bg">
            <div className="cpc-radial-aurora" />
            <div className="cpc-ambient-dust" />
          </div>

          {/* HORIZON & SUNRISE STAGE */}
          <div className="cpc-horizon-stage">
            {/* 1. Golden Dawn Glow */}
            <motion.div
              className="cpc-dawn-glow"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: [0, 0.85, 0.5], scale: [0.7, 1.25, 1.4] }}
              transition={{ duration: 2.8, ease: "easeOut" }}
            />

            {/* 2. Rising Golden Sun Sphere */}
            <motion.div
              className="cpc-golden-sun"
              initial={{ y: 90, opacity: 0, scale: 0.7 }}
              animate={{ y: -30, opacity: [0, 0.9, 1, 0.75], scale: [0.7, 1.05, 1.15] }}
              transition={{ duration: 2.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="cpc-sun-core" />
              <div className="cpc-sun-flares" />
            </motion.div>

            {/* 3. Sunlight Rays sweeping outward */}
            <motion.div
              className="cpc-sun-rays"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: [0, 0.7, 0.3], rotate: 25 }}
              transition={{ duration: 3, delay: 0.6, ease: "easeOut" }}
            />

            {/* 4. Realistic Solar Panel Perspective Grid & Silhouette */}
            <motion.div
              className="cpc-solar-array-wrapper"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: [0, 0.95, 0.85], y: 0 }}
              transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
            >
              {/* Perspective Solar Panel SVG with glowing busbars */}
              <svg className="cpc-solar-array-svg" viewBox="0 0 1000 360" fill="none" preserveAspectRatio="none">
                <defs>
                  {/* Glass reflective panel gradient */}
                  <linearGradient id="panelGlassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a2b" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#0a2318" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#04140c" stopOpacity="1" />
                  </linearGradient>

                  {/* Golden reflection sweep on cells */}
                  <linearGradient id="sunReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                    <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#fef08a" stopOpacity="1" />
                    <stop offset="55%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>

                  {/* Energy busbar glow */}
                  <linearGradient id="energyStream" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#86efac" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#fef08a" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Left Angled Panel Rack */}
                <polygon points="50,340 220,160 440,160 380,340" fill="url(#panelGlassGrad)" stroke="#22543d" strokeWidth="1.5" />
                {/* Center Main Ground-Mount Panel */}
                <polygon points="340,350 430,150 570,150 660,350" fill="url(#panelGlassGrad)" stroke="#2f855a" strokeWidth="2" />
                {/* Right Angled Panel Rack */}
                <polygon points="620,340 560,160 780,160 950,340" fill="url(#panelGlassGrad)" stroke="#22543d" strokeWidth="1.5" />

                {/* Photovoltaic Cell Grid Lines */}
                {/* Horizontal stringers */}
                <line x1="365" y1="300" x2="635" y2="300" stroke="#16a34a" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="388" y1="250" x2="612" y2="250" stroke="#16a34a" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="410" y1="200" x2="590" y2="200" stroke="#16a34a" strokeWidth="1" strokeOpacity="0.7" />

                {/* Perspective vertical busbars */}
                <line x1="450" y1="150" x2="400" y2="350" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.6" />
                <line x1="480" y1="150" x2="460" y2="350" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7" />
                <line x1="500" y1="150" x2="500" y2="350" stroke="#86efac" strokeWidth="1.5" strokeOpacity="0.85" />
                <line x1="520" y1="150" x2="540" y2="350" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7" />
                <line x1="550" y1="150" x2="600" y2="350" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.6" />

                {/* Left rack grid */}
                <line x1="200" y1="230" x2="405" y2="230" stroke="#16a34a" strokeWidth="0.8" strokeOpacity="0.4" />
                <line x1="130" y1="290" x2="390" y2="290" stroke="#16a34a" strokeWidth="0.8" strokeOpacity="0.4" />

                {/* Right rack grid */}
                <line x1="595" y1="230" x2="800" y2="230" stroke="#16a34a" strokeWidth="0.8" strokeOpacity="0.4" />
                <line x1="610" y1="290" x2="870" y2="290" stroke="#16a34a" strokeWidth="0.8" strokeOpacity="0.4" />

                {/* Dynamic sunlight sheen passing across the panels */}
                <rect x="0" y="140" width="1000" height="220" fill="url(#sunReflection)" opacity="0.35" className="cpc-panel-glint" />
              </svg>

              {/* Energy Particles Flowing upward along busbars */}
              <div className="cpc-particles-stream">
                {[...Array(14)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="cpc-energy-particle"
                    style={{
                      left: `${28 + (i % 8) * 6}%`,
                      bottom: '5%'
                    }}
                    initial={{ y: 0, opacity: 0, scale: 0.5 }}
                    animate={{
                      y: [-10, -180, -280],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.2]
                    }}
                    transition={{
                      duration: 1.4,
                      delay: 1.1 + (i * 0.08),
                      repeat: 0,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* 5. Flowing Energy Wave moving towards the center */}
            <motion.div
              className="cpc-energy-shockwave"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: [0.2, 1.4, 2.2], opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.5, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* BRAND REVEAL STAGE (Center Screen) */}
          <div className="cpc-brand-center">
            {/* Ambient Backlight Halo behind Logo */}
            <motion.div
              className="cpc-logo-halo"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: [0.4, 1.2, 1], opacity: [0, 0.9, 0.55] }}
              transition={{ duration: 1.5, delay: 2.1, ease: "easeOut" }}
            />

            {/* Actual Crystal Power Controls Logo Component with Light Sweep */}
            <motion.div
              className="cpc-logo-container"
              initial={{ scale: 0.85, opacity: 0, y: 15, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Light Sweep Sheen passing over logo */}
              <div className="cpc-logo-sweep-wrapper">
                <div className="cpc-logo-light-sweep" />
                
                {/* The Canonical CPC Brand Logo Image from src/assets/logo.png */}
                <div className="cpc-splash-logo-lockup">
                  <motion.img
                    src={cpcLogo}
                    alt="Crystal Power Controls"
                    className="cpc-splash-logo-img"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Glowing Divider Line under Logo */}
            <motion.div
              className="cpc-splash-divider"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Brand Tagline */}
            <motion.p
              className="cpc-splash-tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.75 }}
            >
              POWERING A BRIGHTER, GREENER FUTURE
            </motion.p>
          </div>

          {/* BOTTOM BRAND FOOTER BADGE */}
          <motion.div
            className="cpc-splash-bottom-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.5, delay: 2.9 }}
          >
            <span>ESTD. 2012 &bull; SOLAR POWER DEVELOPER &bull; PAN INDIA</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

