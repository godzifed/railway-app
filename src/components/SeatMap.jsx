// src/components/SeatMap.jsx
import React from 'react';

const SeatMap = ({ capacity, bookedSeats, selectedSeats, onSeatToggle }) => {
  // Генеруємо масив місць (від 1 до capacity)
  const seats = Array.from({ length: capacity }, (_, i) => i + 1);

  const getSeatColor = (seatNum) => {
    if (bookedSeats.includes(seatNum)) return '#ef4444'; // червоний - заброньовані [cite: 90]
    if (selectedSeats.includes(seatNum)) return '#3b82f6'; // синій - обрані [cite: 89]
    return '#10b981'; // зелений - вільні [cite: 88]
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '14px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: 12, height: 12, background: '#10b981', borderRadius: 2 }}></div> Вільні</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: 12, height: 12, background: '#3b82f6', borderRadius: 2 }}></div> Обрані</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: 12, height: 12, background: '#ef4444', borderRadius: 2 }}></div> Зайняті</span>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(10, 1fr)', 
        gap: '10px', 
        background: '#e5e7eb', 
        padding: '20px', 
        borderRadius: '12px' 
      }}>
        {seats.map(seat => {
          const isBooked = bookedSeats.includes(seat);
          return (
            <button
              key={seat}
              disabled={isBooked}
              onClick={() => onSeatToggle(seat)}
              style={{
                padding: '10px 0',
                backgroundColor: getSeatColor(seat),
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: isBooked ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                opacity: isBooked ? 0.6 : 1
              }}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SeatMap;