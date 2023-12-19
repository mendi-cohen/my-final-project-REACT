import React, { useState } from 'react';
import { TextField, Button, ThemeProvider, createTheme, Typography } from '@material-ui/core/';
import { Alert as MuiAlert } from '@mui/lab';
import { Snackbar } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: ['Noto Sans Hebrew', 'sans-serif'].join(','),
  },
});

function SignIn() {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleSuccessClose = () => {
    setOpenSuccess(false);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, email }),
      });

      if (response.ok) {
        setOpenSuccess(true);
        setUsername(''); 
        setEmail(''); 
        
      } else {
        setOpenError(true);
      }
    } catch (error) {
      setOpenError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="login">
          <Typography color="primary" variant="h6">
            שלום לך גולש יקר 
            <br/>
            הרשם כדי לבצע פעולות
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              id="username"
              label="שם משתמש"
              variant="filled"
              fullWidth
              margin="none"
              color="primary"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="email"
              label="כתובת אימייל"
              type="email"
              variant="filled"
              fullWidth
              margin="none"
              color="primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" size="large">
              הירשם
            </Button>
          </form>
        </div>

        <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleSuccessClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <MuiAlert elevation={6} variant="filled" severity="success" onClose={handleSuccessClose}>
            הרשמה בוצעה בהצלחה!
          </MuiAlert>
        </Snackbar>

        <Snackbar open={openError} autoHideDuration={6000} onClose={handleErrorClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleErrorClose}>
            שגיאה בהרשמה. אנא נסה שוב.
          </MuiAlert>
        </Snackbar>
      </>
    </ThemeProvider>
  );
}

export default SignIn;
