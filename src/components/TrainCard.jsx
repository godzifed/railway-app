// src/components/TrainCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TrainCard.css'; // Базові стилі

const TrainCard = ({ train }) => {
  return (
    <div className="train-card">
      <div className="train-header">
        <h3>Потяг {train.trainNumber}</h3>
      </div>
      <div className="train-body">
        <p><strong>Маршрут:</strong> {train.departureCity} - {train.arrivalCity}</p>
        <p><strong>Відправлення:</strong> {train.departureDate} о {train.departureTime}</p>
        <p><strong>Тривалість:</strong> {train.duration}</p>
      </div>
      <div className="train-footer">
        {/* Заділ для 10-ї лабораторної - кнопка переходу до бронювання */}
        <Link to={`/booking/${train.id}`} className="book-btn">Вибрати місця</Link>
      </div>
    </div>
  );
};

export default TrainCard;