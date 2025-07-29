import React from 'react';

export default function Logo() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div>
        <div style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: '50px',
          color: '#a88f6b',
        }}>
          Zilal
        </div>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: '#888'
        }}>
          Echoes of the unseen
        </div>
      </div>
    </div>
  );
}
