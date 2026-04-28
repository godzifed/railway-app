// src/pages/Home.jsx
import React from 'react';
import TrainList from '../components/TrainList';

const Home = () => {
  return (
    <div>
      <h1>Розклад потягів Укрзалізниці</h1>
      <TrainList />
    </div>
  );
};

export default Home;