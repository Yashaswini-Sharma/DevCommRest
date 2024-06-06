// src/components/Receipt.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import '../Menu/Menu.css';

const Receipt = () => {
  const location = useLocation();
  const { booking } = location.state || {};

  return (

    <div className='universal' style={{height:'100vh'}}>
<Navbar/>
      <h1 className='aclonica-regular'>Booking Receipt</h1>
      <div className='yellowbox'>
        <h1 className='head'>Booking Details</h1>
        {booking ? (
          <div>
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Number of Guests:</strong> {booking.guests}</p>
          </div>
        ) : (
          <p>No booking details available.</p>
        )}
      </div>
    </div>
  );
};

export default Receipt;
