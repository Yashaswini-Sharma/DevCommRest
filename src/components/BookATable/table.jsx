// src/components/Table.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import '../Menu/Menu.css';
import Navbar from '../NavBar/Navbar';

const Table = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'bookings'), formData);

      navigate('/receipt', { state: { booking: formData } });
      
    } catch (error) {
      console.error("Error booking table: ", error);
      alert('Failed to book table');
     
    }
  };

  return (
    <div className='universal' style={{height:'100vh'}}>
      <Navbar />
      
      <h1 className='aclonica-regular'>Book a Table</h1>
      <div className='yellowbox'>
        <h1 className='head'>Details</h1>
        <form onSubmit={handleSubmit} className='booking-form'>
          <div className='form-group'>
            <h4><label htmlFor='name'>Name:</label></h4>
            <input 
              type='text' 
              id='name' 
              name='name' 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className='inp'
              style={{height:'2vh', width:'20vw'}}
            />
          </div>
          <div className='form-group'>
            <h4><label htmlFor='date'>Date:</label></h4>
            <input 
            className='inp'
              type='date' 
              id='date' 
              name='date' 
              style={{height:'2vh', width:'20vw'}}
              value={formData.date} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className='form-group'>
            <h4><label htmlFor='time'>Time:</label></h4>
            <input 
            className='inp'
              type='time' 
              id='time' 
              name='time' 
              value={formData.time} 
              onChange={handleChange} 
              style={{height:'2vh', width:'20vw'}}
              required 
            />
          </div>
          <div className='form-group'>
            <h4><label htmlFor='guests'>Number of Guests:</label></h4>
            <input
            className='inp' 
              type='number' 
              id='guests' 
              name='guests' 
              value={formData.guests} 
              style={{height:'2vh', width:'20vw'}}
              onChange={handleChange} 
              required 
            />
          </div>
          <button type='submit' className='button' style={{fontSize:'20px', marginBottom:'4vh'}}>Book Table</button>
        </form>
      </div>
    </div>
  );
};

export default Table;
