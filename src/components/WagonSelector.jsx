// src/components/WagonSelector.jsx
import React from 'react';

const WagonSelector = ({ classes, selectedClass, onSelect }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ marginBottom: '10px' }}>Оберіть тип вагону:</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {classes.map((c, index) => (
          <button
            key={index}
            onClick={() => onSelect(c)}
            style={{
              padding: '10px 20px',
              border: `2px solid ${selectedClass?.class === c.class ? '#1e3a8a' : '#d1d5db'}`,
              backgroundColor: selectedClass?.class === c.class ? '#eff6ff' : '#ffffff',
              color: '#111827',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: selectedClass?.class === c.class ? 'bold' : 'normal'
            }}
          >
            {c.class} ({c.price} ₴)
          </button>
        ))}
      </div>
    </div>
  );
};

export default WagonSelector;