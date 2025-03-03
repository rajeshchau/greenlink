import React from 'react';
import QRCode from 'react-qr-code';
import { Typography } from '@mui/material';

const QRCodeDisplay = ({ productId }) => {
  const qrValue = `http://localhost:3000/product/${productId}`; // Replace with your domain in production

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="h6">Scan to Trace Product</Typography>
      <QRCode value={qrValue} size={200} />
      <Typography variant="body2" sx={{ marginTop: '10px' }}>
        Use this QR code to view product details and trace its origin.
      </Typography>
    </div>
  );
};

export default QRCodeDisplay;
