import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 5, backgroundImage: 'url(/path/to/background-image.jpg)', backgroundSize: 'cover', padding: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Explore our offerings and connect with farmers directly!
      </Typography>

      <Typography variant="h2" gutterBottom>
        Natural Farming Marketplace
      </Typography>
      <Typography variant="h5" gutterBottom>
        Connecting farmers and consumers directly for fair trade.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/marketplace" sx={{ m: 1, '&:hover': { backgroundColor: '#0056b3' } }}>
        Browse Products
      </Button>
      <Button variant="outlined" color="primary" component={Link} to="/farmer-verification" sx={{ m: 1, '&:hover': { borderColor: '#0056b3' } }}>
        Register as Farmer
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/marketplace" sx={{ m: 1, '&:hover': { backgroundColor: '#ff4081' } }}>
        Visit Marketplace
      </Button>

      <Typography variant="h6" sx={{ mt: 4 }}>
        What is Natural Farming?
      </Typography>
      <Typography>
        A sustainable approach that avoids synthetic inputs and promotes ecological balance.
      </Typography>
    </Container>
  );
};

export default Home;
