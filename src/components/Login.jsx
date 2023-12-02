// Login.js

import React from 'react';
import { TextField, Button, ThemeProvider, createTheme , Typography } from '@material-ui/core/';
import '../Css_To_Comp/Login.css';

// קומפוננטת הרישום בפועל

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
});

function Login() {
  return (
    <ThemeProvider theme={theme}>
      <>
       
        <div className="login">
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
          <Typography variant="h6" className='normal-weight'>הירשם!</Typography>
          </Button>
          
        </div>
      </>
    </ThemeProvider>
  );
}

export default Login;
