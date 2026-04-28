// src/components/TrainList.jsx
import React, { useState } from 'react';
import TrainCard from './TrainCard';
import { trainsData } from '../data/trains';

const TrainList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = trainsData.filter((train) => {
    const query = searchQuery.toLowerCase();
    return (
      train.departureCity.toLowerCase().includes(query) ||
      train.arrivalCity.toLowerCase().includes(query) ||
      train.trainNumber.toLowerCase().includes(query) ||
      train.routeDisplay.toLowerCase().includes(query)
    );
  });

  return (
    <div className="train-list-container">
      
      <div className="search-panel">
        <div className="search-results-count">
          {filteredTrains.length} потягів знайдено
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Пошук за містом або номером..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div>
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
            Рейсів за вашим запитом не знайдено.
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainList;