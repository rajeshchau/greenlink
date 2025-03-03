import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia } from '@mui/material';
import QRCodeDisplay from './QRCodeDisplay';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching product data (replace with real API call)
    const mockData = {
      1: {
        name: 'Organic Tomatoes',
        origin: 'Green Farm',
        certification: 'Verified',
        practices: 'No pesticides, natural compost',
        image: '/path/to/tomatoes-image.jpg', // Add image path
      },
      2: {
        name: 'Free-Range Eggs',
        origin: 'Sunny Acres',
        certification: 'Verified',
        practices: 'Free-range, organic feed',
        image: '/path/to/eggs-image.jpg', // Add image path
      },
    };
    setProduct(mockData[productId] || { name: 'Not Found' });
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
      </Card>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <Typography><strong>Origin:</strong> {product.origin}</Typography>
      <Typography><strong>Certification:</strong> {product.certification}</Typography>
      <Typography><strong>Farming Practices:</strong> {product.practices}</Typography>
      <QRCodeDisplay productId={productId} />
    </Container>
  );
};

export default ProductDetails;
