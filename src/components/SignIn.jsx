import React from 'react';
import { TextField, Button, ThemeProvider, createTheme, Typography } from '@material-ui/core/';
import '../Css_To_Comp/SignIn.css';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: ['Noto Sans Hebrew', 'sans-serif'].join(','), // כמו שהיה גם במקום הקודם
  },
});

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // כאן ניתן לבצע פעולות נוספות אם רצוי
      } else {
        console.error('Error registering user:', response.status);
        // כאן ניתן להציג הודעת שגיאה או לבצע פעולות נוספות
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // כאן ניתן להציג הודעת שגיאה או לבצע פעולות נוספות
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="login">
          <Typography color='primary' variant='h6'>
            ! שלום לך גולש יקר 
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="username"
              label="שם משתמש"
              variant="filled"
              fullWidth
              margin="none"
              color="primary"
              value={username}
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
              !הירשם
            </Button>
          </form>
        </div>
      </>
    </ThemeProvider>
  );
}

export default SignIn;
