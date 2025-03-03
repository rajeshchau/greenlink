import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching products (replace with real API call)
    setProducts([
      { id: 1, name: 'Organic Tomatoes', price: 5, farmer: 'Green Farm' },
      { id: 2, name: 'Free-Range Eggs', price: 8, farmer: 'Sunny Acres' },
    ]);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Marketplace
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Price: ${product.price}</Typography>
                <Typography>Farmer: {product.farmer}</Typography>
                <Button variant="contained" color="primary" href={`/product/${product.id}`}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductListing;
