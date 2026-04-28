// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Маршрут для 10-ї лаби підготовлено заздалегідь */}
          <Route path="/booking/:trainId" element={<div>Сторінка бронювання (Лаб 10)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;