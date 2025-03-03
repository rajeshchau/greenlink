import React, { useEffect, useState } from 'react';
import ProductListing from '../components/ProductListing';
import { Container, Typography, Select, MenuItem, CircularProgress } from '@mui/material';

const Marketplace = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Replace with actual API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Marketplace
      </Typography>
      {loading && <CircularProgress />}
      {error && <Typography color="red">{error}</Typography>}
      <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <MenuItem value="">All Products</MenuItem>
        <MenuItem value="category1">Category 1</MenuItem>
        <MenuItem value="category2">Category 2</MenuItem>
      </Select>
      <Select value={sort} onChange={(e) => setSort(e.target.value)}>
        <MenuItem value="name">Sort by Name</MenuItem>
        <MenuItem value="price">Sort by Price</MenuItem>
      </Select>
      <ProductListing products={products} filter={filter} sort={sort} />
    </Container>
  );
};

export default Marketplace;
