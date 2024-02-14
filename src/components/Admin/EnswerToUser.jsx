import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'; 

export default function EnswerToUser({ questionData }) {
  const [Enswer_value, setEnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setEnswer(event.target.value);
  };


  const  sendTheEnswer  = async (event) => {
    
      try {
        const response = await fetch(`${process.env.REACT_APP_HOST_API}/enswers/sendEnswer`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            Enswer_value: Enswer_value, 
            Question_value: questionData.Question_value,
          }),

        });
  
        if (response.ok) {
          handleSubmit();
          alert(' מרובה התשובה נשלחה בהצלחה' );
          console.log("ok response");
        } else {
        alert(' מרובה התשובה לא נ שלחס בהצלחה' );

        }
      } catch (error) {
        alert(' מרובה התשובה לא נ שלחס בהצלחה' );

        console.log(error.message);
      }
    };
    



    
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if ( questionData.chekbox === "whatsApp") {
      try {
        const response = await fetch(`${process.env.REACT_APP_HOST_API}/whatsapp/send-whatsApp-enswer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: `${Enswer_value} : שלום לך זוהי תשובה מאתר רבנות יד רמב"ם  `, phoneNumber:questionData.additionalInfo }),
        });

        if (response.ok) {
          alert('התשובה נשלחה בהצלחה');
          setEnswer('');
          setSubmitted(true);
        } else {
          alert('שגיאה בשליחת התשובה.');
        }
      } catch (error) {
        console.error('Error sending feedback:', error);
        alert('שגיאה בשליחת התשובה.');
      }
    } 
    else {
      try {
        await axios.post(`${process.env.REACT_APP_HOST_API}/email/send-email`, {
          toEmail: questionData.additionalInfo,
          messageBody: `${Enswer_value} : שלום לך זוהי תשובה מאתר רבנות יד רמב"ם  `, 
        });
        alert('vהאימייל נשלחה בהצלחה');
        setEnswer('');
        setSubmitted(true);
      } catch (error) {
        console.error("Error sending email:", error);
        alert('שגיאה בשליחת האימייל');
      }
    }



  };
  

  return (
    <form onSubmit={sendTheEnswer}>
      <TextField
        label="תשובה"
        variant="outlined"
        value={Enswer_value}
        onChange={handleChange}
        fullWidth
        multiline
        rows={5}
        disabled={submitted}
        sx={{ direction: 'rtl', width: '100%' }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<SendIcon />}
        disabled={submitted}
      >
        שלח תשובה
      </Button>
    </form>
  );
}
