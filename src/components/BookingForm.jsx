// src/components/BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = ({ selectedSeatsCount, totalPrice, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Валідація полів 
    if (!formData.name.trim() || formData.name.length < 3) {
      setError("Ім'я повинно містити мінімум 3 символи.");
      return;
    }
    if (!formData.phone.match(/^\+?3?8?(0\d{9})$/)) {
      setError("Введіть коректний номер телефону (наприклад: 0991234567).");
      return;
    }
    if (!formData.email.includes('@')) {
      setError("Введіть коректний Email.");
      return;
    }
    
    setError('');
    onSubmit(formData);
  };

  if (selectedSeatsCount === 0) return <div style={{ color: '#6b7280' }}>Оберіть хоча б одне місце для оформлення квитка.</div>;

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
      <h3 style={{ marginTop: 0 }}>Оформлення квитків</h3>
      <p style={{ fontWeight: 'bold', color: '#1e3a8a' }}>До сплати: {totalPrice} ₴ (Місць: {selectedSeatsCount})</p>
      
      {error && <div style={{ color: '#ef4444', marginBottom: '10px', fontSize: '14px' }}>{error}</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Прізвище та Ім'я" 
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
        />
        <input 
          type="tel" 
          placeholder="Телефон" 
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
        />
        <input 
          type="email" 
          placeholder="Email для відправки квитка" 
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
        />
      </div>

      <button type="submit" style={{ width: '100%', padding: '12px', background: '#f59e0b', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
        Оплатити та Забронювати
      </button>
    </form>
  );
};

export default BookingForm;