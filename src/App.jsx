import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FarmerVerification from './pages/FarmerVerification';
import Marketplace from './pages/Marketplace';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar'; // Importing Navbar

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Adding Navbar for navigation */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/farmer-verification" element={<FarmerVerification />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} /> 
    </Routes>
      
    {/* Fallback route for 404 errors */}
    </Router>

  );
};

export default App;
