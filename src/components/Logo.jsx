import React from 'react';
import { Link } from 'react-router-dom';
import cpcLogo from '../assets/logo.png';

export default function Logo({ light = false, height = 44 }) {
  return (
    <Link 
      to="/" 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '12px',
        textDecoration: 'none',
        lineHeight: 1.15
      }}
    >
      <img
        src={cpcLogo}
        alt="Crystal Power Controls"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          filter: light ? 'brightness(1.05) drop-shadow(0 2px 8px rgba(0,0,0,0.3))' : 'none'
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontWeight: 800,
            fontSize: '17px',
            letterSpacing: '0.04em',
            color: '#16a34a',
            textTransform: 'uppercase',
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
          }}
        >
          CRYSTAL
        </span>
        <span
          style={{
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: light ? '#86efac' : '#15803d',
            textTransform: 'uppercase',
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
          }}
        >
          POWER CONTROLS
        </span>
      </div>
    </Link>
  );
}



