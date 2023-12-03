import React from 'react';
import { TextField, Button, ThemeProvider, createTheme, Typography } from '@material-ui/core/';
import '../Css_To_Comp/SignIn.css';

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
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="login">
        <Typography color='primary'>
        <h1> !שלום </h1>
        </Typography>
          <form>
            <TextField
              id="username"
              label="שם משתמש"
              variant="filled"
              fullWidth
              margin="none"
              color="primary" 
            />
            <TextField
              id="email"
              label="כתובת אימייל"
              type="email"
              variant="filled"
              fullWidth
              margin="none"
              color="primary"
            />
          </form>
        </div>
        <div>
         
            <Button variant="contained" color="primary" size="large">
             !הירשם
            </Button>
          
        </div>
      </>
      </ThemeProvider>
    
  );
}

export default SignIn;
