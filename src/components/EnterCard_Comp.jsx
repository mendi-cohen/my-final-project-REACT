import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function EnterCard(props) {
  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };
  



  return (
    <>
      {isCardOpen && (
        <Card sx={{position: 'relative', maxWidth: 350, margin: '5%', backgroundColor: 'azure', boxShadow: '0px 0px 10px rgba(18, 122, 18, 0.1)', borderRadius: '20px' }}>
          <CardMedia component="object" height="10" />
          <IconButton aria-label="close" onClick={handleCloseCard} sx={{position: 'absolute', left: '0'}}>
              <CloseIcon />
            </IconButton>
          <CardContent>
               <div> {props.sign_Or_Login_Comp} </div>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
      )}
    </>
  );
}
