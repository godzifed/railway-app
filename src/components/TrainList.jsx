import React, { useState } from 'react';
import TrainCard from './TrainCard';
import { trainsData } from '../data/trains';

const TrainList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Реалізація пошуку за маршрутом або номером [cite: 121]
  const filteredTrains = trainsData.filter((train) => {
    const query = searchQuery.toLowerCase();
    return (
      train.departureCity.toLowerCase().includes(query) ||
      train.arrivalCity.toLowerCase().includes(query) ||
      train.trainNumber.toLowerCase().includes(query)
    );
  });

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Панель пошуку */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        background: '#fff',
        padding: '16px 24px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
          {filteredTrains.length} потягів знайдено
        </div>
        <input
          type="text"
          placeholder="Пошук за містом або номером..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ 
            padding: '10px 16px', 
            width: '300px', 
            borderRadius: '8px', 
            border: '1px solid #cbd5e1',
            outline: 'none'
          }}
        />
      </div>
      
      {/* Виведення карток  */}
      <div>
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
            Рейсів за вашим запитом не знайдено.
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainList;