import React from 'react';
import { Link } from 'react-router-dom';
import './TrainCard.css';

const TrainCard = ({ train }) => {
  return (
    <div className="train-card-uz">
      {/* Ліва частина: Інформація про рейс */}
      <div className="uz-info-section">
        <div className="uz-badges">
          <span className="uz-train-number">{train.trainNumber}</span>
          {train.badge && <span className={`uz-badge ${train.badge === 'Флагманський' ? 'purple' : 'green'}`}>{train.badge}</span>}
        </div>

        <div className="uz-schedule">
          <div className="uz-time-block left">
            <div className="uz-time">{train.departureTime}</div>
            <div className="uz-date">{train.departureDate}</div>
            <div className="uz-city">{train.departureCity}</div>
          </div>

          <div className="uz-duration-block">
            <div className="uz-duration-line">
              <span className="uz-dot"></span>
              <span className="uz-line"></span>
              <span className="uz-duration-text">{train.duration}</span>
              <span className="uz-line"></span>
              <span className="uz-dot"></span>
            </div>
          </div>

          <div className="uz-time-block right">
            <div className="uz-time">{train.arrivalTime}</div>
            <div className="uz-date">{train.arrivalDate}</div>
            <div className="uz-city">{train.arrivalCity}</div>
          </div>
        </div>

        <div className="uz-route-details">
          <span className="uz-route-icon">🚂</span> {train.routeDisplay} <span className="uz-dropdown">Деталі маршруту ˅</span>
        </div>
      </div>

      {/* Права частина: Класи вагонів та ціни (Слугує кнопками для переходу до 10 лаби) */}
      <div className="uz-seats-section">
        {train.seats.map((seat, index) => (
          <Link to={`/booking/${train.id}`} key={index} className="uz-seat-card">
            <div className="uz-seat-class">{seat.class}</div>
            <div className="uz-seat-count">{seat.count} місць</div>
            <div className="uz-seat-price">{seat.price} ₴</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrainCard;