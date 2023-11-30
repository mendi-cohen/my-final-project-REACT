// ImgMediaCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Login from './Login';
import '../Css_To_Comp/EnterCard.css';

// קומפוננטת כרטיס הכניסה 

export default function EnterCard() {
  return (
    <Card className="media-card">
      <CardMedia
        component="object"
        height="65"
        className="media"
      />
      <CardContent>
        <Login head="שלום לך" Button="הירשם" />
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
