// src/components/TrainList.jsx
import React, { useState } from 'react';
import TrainCard from './TrainCard';
import { trainsData } from '../data/trains';

const TrainList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Фільтрація за містом або номером потяга
  const filteredTrains = trainsData.filter((train) => {
    const query = searchQuery.toLowerCase();
    return (
      train.departureCity.toLowerCase().includes(query) ||
      train.arrivalCity.toLowerCase().includes(query) ||
      train.trainNumber.toLowerCase().includes(query)
    );
  });

  return (
    <div className="train-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Пошук за містом або номером потяга..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
        />
      </div>
      
      <div className="train-grid" style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))
        ) : (
          <p>Рейсів не знайдено.</p>
        )}
      </div>
    </div>
  );
};

export default TrainList;