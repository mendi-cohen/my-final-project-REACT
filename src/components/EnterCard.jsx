// EnterCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Login from './Login';

export default function EnterCard() {
  return (
    <Card sx={{ maxWidth: 350, margin: '0 auto', backgroundColor: 'azure', boxShadow: '0px 0px 10px rgba(18, 122, 18, 0.1)', borderRadius: '20px' }}>
      <CardMedia component="object" height="10" />
      <CardContent>
        <Typography variant="h4" color="#0a8f0a" gutterBottom>
           שלום לך 
        </Typography>
        <Login />
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
