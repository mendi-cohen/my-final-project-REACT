import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'; 

export default function EnswerToUser({ questionData }) {
  const [Enswer_value, setEnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const Question_value = questionData.Question_value;

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
          Enswer_value, 
          Question_value,
          }),

        });
  
        if (response.ok) {
          console.log("ok response");
        } else {
        alert('!!! שגיאה ' );

        }
      } catch (error) {
       

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
          sendTheEnswer();
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
        alert('האימייל נשלחה בהצלחה');
        setEnswer('');
        sendTheEnswer();
        setSubmitted(true);
      } catch (error) {
        console.error("Error sending email:", error);
        alert('שגיאה בשליחת האימייל');
      }
    }



  };
  

  return (
    <form onSubmit={handleSubmit}>
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
