// src/pages/Booking.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { trainsData } from '../data/trains';
import { BookingService } from '../services/BookingService';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  
  // Знаходимо рейс з нашої mock-бази
  const train = trainsData.find(t => t.id === parseInt(trainId));
  
  const [selectedWagon, setSelectedWagon] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  // Встановлюємо перший вагон за замовчуванням при завантаженні
  useEffect(() => {
    if (train && train.seats.length > 0) {
      setSelectedWagon(train.seats[0]);
    }
  }, [train]);

  // Завантажуємо вже заброньовані місця з localStorage
  useEffect(() => {
    if (train && selectedWagon) {
      const seats = BookingService.getBookedSeats(train.id, selectedWagon.class);
      setBookedSeats(seats);
      setSelectedSeats([]); // скидаємо вибір при зміні вагону
    }
  }, [train, selectedWagon]);

  if (!train) return <div style={{ padding: '40px', textAlign: 'center' }}>Рейс не знайдено</div>;

  const handleSeatToggle = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBookingSubmit = (passengerData) => {
    const bookingData = {
      trainId: train.id,
      wagonId: selectedWagon.class,
      seats: selectedSeats,
      passenger: passengerData
    };

    BookingService.saveBooking(bookingData);
    
    // Повідомлення про успіх 
    toast.success(`Квитки успішно заброньовано на ім'я ${passengerData.name}! Відправлено на ${passengerData.email}`);
    
    // Оновлюємо стан на екрані
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
    
    // Можна повернути на головну через 3 секунди
    setTimeout(() => navigate('/'), 3500);
  };

  const totalPrice = selectedSeats.length * (selectedWagon?.price || 0);
  // Імітуємо місткість вагону: Купе = 36, Плацкарт = 54, Сидячий = 60, інше = 20
  const wagonCapacity = selectedWagon?.class.includes('Плацкарт') ? 54 : selectedWagon?.class.includes('Купе') ? 36 : selectedWagon?.class.includes('Сидячий') ? 60 : 20;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <ToastContainer position="top-center" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Потяг {train.trainNumber}: {train.routeDisplay}</h2>
        <button onClick={() => navigate('/')} style={{ padding: '8px 16px', background: '#e5e7eb', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>← Назад до пошуку</button>
      </div>

      <div style={{ display: 'flex', gap: '30px' }}>
        {/* Ліва колонка: Вагони та Місця */}
        <div style={{ flex: 2 }}>
          <WagonSelector 
            classes={train.seats} 
            selectedClass={selectedWagon} 
            onSelect={setSelectedWagon} 
          />
          {selectedWagon && (
            <SeatMap 
              capacity={wagonCapacity} 
              bookedSeats={bookedSeats} 
              selectedSeats={selectedSeats} 
              onSeatToggle={handleSeatToggle} 
            />
          )}
        </div>

        {/* Права колонка: Форма та Оплата */}
        <div style={{ flex: 1 }}>
          <BookingForm 
            selectedSeatsCount={selectedSeats.length}
            totalPrice={totalPrice}
            onSubmit={handleBookingSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;