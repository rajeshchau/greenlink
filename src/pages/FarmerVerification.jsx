import React, { useState } from 'react';
import FarmerRegistration from '../components/FarmerRegistration';

const FarmerVerification = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  const handleRegistration = (data) => {
    // Simulate API call
    if (data.name && data.farmName && data.practices) {
      setMessage('Registration submitted successfully!');
      setError('');
    } else {
      setError('Please fill in all fields.');
      setMessage('');
    }
  };

  return (
    <div>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <FarmerRegistration onRegister={handleRegistration} />
    </div>

  );
};

export default FarmerVerification;
