import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SelectQuestion from './Selection_2';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckBox from './ChekBox';  
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

const SendQuestion = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [Question_value, setQuestion] = useState('');
  const [title, setTitle] = useState('');
  const [chekbox, setChekbox] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const date = new Date();
  const time = new Date();

  const sendWhatsAppMessage = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/whatsapp/send-whatsApp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: ' הודעה מהאתר:  מחכה לך שאלה באתר'  }),
      });

      if (!response.ok) {
        console.error('Failed to send WhatsApp message');
      }
    } catch (error) {
      console.error('Error sending WhatsApp message:', error.message);
    }
  };



  const handleChange = (value) => {
    setQuestion(value.target.value);
  };

  const handleSuccessClose = () => {
    setOpenSuccess(false);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  const handleSubjectChange = (selectedSubject) => {
    setTitle(selectedSubject);
  };

  const handleCheckboxChange = (selectedOption, additionalInfo) => {
    setChekbox(selectedOption);
    setAdditionalInfo(additionalInfo);
  };

  const SaveToDatabase = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/question/sendQuestion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, Question_value, chekbox, additionalInfo, date, time }),
      });

      if (response.ok) {
        setOpenSuccess(true);
        sendWhatsAppMessage()
   
       

      } else {
        setOpenError(true);
        console.log(additionalInfo);
      }
    } catch (error) {
      setOpenError(true);
      console.log(error.message);
    }
  };

  return (
    <Box className="megillah-container" sx={{ textAlign: 'center' }}>
      <h1> שלום לכם,<br /> מה תרצו לשאול ? </h1>
      <SelectQuestion onSelect={handleSubjectChange}/>
      <TextField
        label="הכנס את שאלתך בבקשה"
        variant="filled"
        fullWidth
        margin="normal"
        multiline
        value={Question_value}
        onChange={handleChange}
        sx={{ direction: 'rtl' }}
        wrap="yes"
      />

      <div>
        <CheckBox onSelectionChange={handleCheckboxChange} />
        
      </div>

      <Button  type="submit" variant="contained" size='large' onClick={SaveToDatabase}> שלח שאלתך  </Button>

      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleSuccessClose}
        >
          ! השאלה נשלחה בהצלחה! בעז"ה נשתדל לענות בהקדם
        </Alert>
      </Snackbar>

      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleErrorClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={handleErrorClose}
        >
          ! אופס קרתה תקלה השאלה לא נשלחה
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SendQuestion;
