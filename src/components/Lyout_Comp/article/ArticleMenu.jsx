import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system';

const HoverText = styled('div')({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  padding: '90px',
  boxSizing: 'border-box',
  transform: 'translateX(100%)',
  transition: 'transform 0.5s ease',
  fontWeight: 'bold',
});



const ArtMenu = () => {
  const links = [
    { text: 'פרשת שבוע', to: '/ArticleMenu/GetParsha',width:'20%', color: 'black', backgroundImage: 'https://www.layeledv.co.il/images/itempics/3847_large.jpg', hoverColor: '#1565C0' },
    { text: 'הלכה', to: '/ArticleMenu/GetHalacha',width:'20%', color: 'black', backgroundImage: 'https://img.lovepik.com/free-png/20211103/lovepik-learning-english-books-illustration-png-image_400244643_wh1200.png', hoverColor: '#D32F2F' },
    { text: 'עינייני דיומא', to: '/ArticleMenu/GetTheDayTask',width:'20%', color: 'black', backgroundImage: 'https://www.gadgetshop.co.il/cdn/shop/products/fridge-board-calendar-b2.jpg?v=1634836105&width=720', hoverColor: '#1565C0' },
    { text: 'השקפה', to: '/ArticleMenu/GetHashkafa',width:'20%', color: 'white', backgroundImage: 'https://lh3.googleusercontent.com/proxy/4BXsWWs4-dXtvl1HQ15LfH6mbBPgkMbZaGWXudWOBobR2CY8m-dvTXzhzAH7d5Lm9qpFiIUAZn6u7_dLWN3hKRUHmIfKfS3gq8b92Q', hoverColor: '#D32F2F' },
  ];

  const handleMouseEnter = (index) => {
    const textDiv = document.getElementById(`text-${index}`);
    textDiv.style.transform = 'translateX(0%)';
  };

  const handleMouseLeave = (index) => {
    const textDiv = document.getElementById(`text-${index}`);
    textDiv.style.transform = 'translateX(100%)';
  };

  return (
    <>
      <h1> ? באיזה נושא תרצה לקרוא </h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap:'wrap'}}>
        {links.map((link, index) => (
          <Card
            key={index}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0px 10px 30px rgba(33, 150, 243, 0.2)',
              borderRadius: '15px',
              backgroundColor: 'transparent',
              height: '220px',
              zIndex: 1,
              minWidth: '200px',
              width: link.width,
              backgroundImage: `url(${link.backgroundImage})`,
              backgroundSize: 'auto 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              margin: '40px',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            component={Link}
            to={link.to}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <CardContent>
              <HoverText
                id={`text-${index}`}
                sx={{
                  color: link.color,
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                {link.text}
              </HoverText>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ArtMenu;
