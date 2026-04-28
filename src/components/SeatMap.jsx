// src/components/SeatMap.jsx
import React from 'react';

const SeatMap = ({ capacity, bookedSeats, selectedSeats, onSeatToggle }) => {
  // Групуємо місця по купе (по 4 місця в кожному)
  const compartments = [];
  for (let i = 1; i <= capacity; i += 4) {
    compartments.push([
      i,     // 1 (нижнє)
      i + 1, // 2 (верхнє)
      i + 2, // 3 (нижнє)
      i + 3  // 4 (верхнє)
    ].filter(s => s <= capacity)); // Фільтруємо, щоб не вийти за межі місткості
  }

  // Визначення кольору за вимогами методички
  const getSeatColor = (seatNum) => {
    if (bookedSeats.includes(seatNum)) return '#ef4444'; // червоний - заброньовані
    if (selectedSeats.includes(seatNum)) return '#1e3a8a'; // темно-синій - обрані
    return '#10b981'; // зелений - вільні
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '15px' }}>
      
      {/* Легенда кольорів */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', fontSize: '14px', color: '#4b5563' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 16, height: 16, background: '#10b981', borderRadius: 4 }}></div> Вільні
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 16, height: 16, background: '#1e3a8a', borderRadius: 4 }}></div> Обрані
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 16, height: 16, background: '#ef4444', borderRadius: 4 }}></div> Зайняті
        </span>
      </div>

      {/* Вагон з купе */}
      <div style={{
        display: 'inline-flex',
        background: '#ffffff',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '16px 8px'
      }}>
        {compartments.map((comp, index) => {
          // Розставляємо місця: парні зверху, непарні знизу
          // Індекси в масиві comp: 0(непарн), 1(парн), 2(непарн), 3(парн)
          const topRow = [comp[1], comp[3]].filter(Boolean);
          const bottomRow = [comp[0], comp[2]].filter(Boolean);

          return (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '0 16px',
              borderRight: index === compartments.length - 1 ? 'none' : '2px solid #e5e7eb' // Стінка купе
            }}>
              {/* Верхній ряд (парні місця: 2, 4, 6, 8...) */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {topRow.map(seat => (
                  <button
                    key={seat}
                    disabled={bookedSeats.includes(seat)}
                    onClick={() => onSeatToggle(seat)}
                    style={getSeatStyle(seat, bookedSeats, getSeatColor)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
              
              {/* Нижній ряд (непарні місця: 1, 3, 5, 7...) */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {bottomRow.map(seat => (
                  <button
                    key={seat}
                    disabled={bookedSeats.includes(seat)}
                    onClick={() => onSeatToggle(seat)}
                    style={getSeatStyle(seat, bookedSeats, getSeatColor)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Допоміжна функція для стилізації кнопки місця
const getSeatStyle = (seat, bookedSeats, getColor) => {
  const isBooked = bookedSeats.includes(seat);
  return {
    width: '44px',
    height: '44px',
    backgroundColor: getColor(seat),
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: isBooked ? 'not-allowed' : 'pointer',
    fontWeight: 'bold',
    fontSize: '15px',
    opacity: isBooked ? 0.4 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.1s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
};

export default SeatMap;