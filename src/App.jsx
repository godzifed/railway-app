// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking'; // ДОДАЙ ЦЕЙ ІМПОРТ

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Маршрут для 10-ї лаби */}
          <Route path="/booking/:trainId" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;