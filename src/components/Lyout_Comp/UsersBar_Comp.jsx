import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

export default function UsersBar() {
  const links = [
    { text: "מאמרים", to : '/ArticelMenu',color:'black' , backgroundImage: `url("https://www.acms.co.il/wp-content/uploads/2019/04/%D7%9B%D7%AA%D7%99%D7%91%D7%AA-%D7%A2%D7%91%D7%95%D7%93%D7%94-%D7%A1%D7%9E%D7%99%D7%A0%D7%A8%D7%99%D7%95%D7%A0%D7%99%D7%AA.jpg")`, hoverColor: '#1565C0' },
    { text: "שאלות ",to : '/ArticelMenu',color:'black' , backgroundImage: `url("https://meyda.education.gov.il/files/pop/16869/ask-questions.jpg")`, hoverColor: '#D32F2F' },
    { text: " עריכת חופה ",to : '/ArticelMenu',color:'black' , backgroundImage: `url("https://hangar11.co.il/private/wp-content/uploads/2015/08/4l2.jpg")`, hoverColor: '#1565C0' },
    { text: "פגישה",to : '/ArticelMenu' ,color:'black' , backgroundImage: `url("https://static.wixstatic.com/media/b1b124_0c8056c4899e4fa5a9f3bb05037068a2~mv2.jpg/v1/fill/w_320,h_212,q_90/b1b124_0c8056c4899e4fa5a9f3bb05037068a2~mv2.jpg")`, hoverColor: '#D32F2F' },
  ];

  return (
    
    <Stack direction="column" spacing={2} sx={{width: '20%' }}>
      {links.map((link, index) => (
     <Button
     key={index}
     variant="contained"
     size="large"
     sx={{
       position: 'relative',
       overflow: 'hidden',
       boxShadow: `0px 8px 20px rgba(33, 150, 243, 0.2)`,
       borderRadius: '12px',
       backgroundColor: 'transparent',
       height: '150px',
       zIndex: 1,
       backgroundImage: link.backgroundImage,
       backgroundSize: 'cover',
       '&:hover .text': {
         transform: 'translateX(0%)',
       },
       '&:hover':{
        height: '170px',
        transition: 'height 0.5s ease',

       }
     }}
     component={Link}
     to={link.to}
   >
     <Typography
       className="text"
       sx={{
         position: 'absolute',
         bottom: '0',
         left: '0',
         width: '100%',
         padding: '50px',
         boxSizing: 'border-box',
         transform: 'translateX(100%)',
         transition: 'transform 0.5s ease',
         color: link.color,
         fontSize: '30px'
       }}
     >
       {link.text}
     </Typography>
   </Button>
      ))}
    </Stack>
  );
}
