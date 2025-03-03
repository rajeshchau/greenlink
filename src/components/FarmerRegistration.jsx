import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { registerFarmer } from '../services/api'; // Importing the API function

const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    farmName: '',
    practices: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    registerFarmer(formData)
      .then(() => {
        setMessage('Registration submitted successfully!');
        setError('');
        setFormData({ name: '', farmName: '', practices: '' }); // Reset form
      })
      .catch(() => {
        setError('Registration failed. Please try again.');
        setMessage('');
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });

  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Farmer Registration
      </Typography>
      {message && <Typography color="green">{message}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Farm Name"
          name="farmName"
          value={formData.farmName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Farming Practices"
          name="practices"
          value={formData.practices}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'} {/* Show loading text */}

          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FarmerRegistration;
