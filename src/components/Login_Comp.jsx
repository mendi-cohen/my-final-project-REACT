import React from "react";
import { TextField, Button, ThemeProvider, createTheme, Typography } from '@material-ui/core/';
import { Alert as MuiAlert } from '@mui/material';
import { Snackbar } from '@mui/material';
import { useState } from "react";



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


function Login(props){

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
          const encodedEmail = encodeURIComponent(email);
          const response = await fetch(`http://localhost:3003/login?email=${encodedEmail}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            setOpenSuccess(true);
            setEmail('');
            props.onSuccess(email);
          
         
    
          } else {
            setOpenError(true);
          }
        } catch (error) {
          setOpenError(true);
        }
      };


return (
    <>
    <ThemeProvider theme={theme}>
      <>
        <div className="login">
          <Typography color="primary" variant="h6">
            שלום לך גולש יקר
            <br />
            התחבר כדי לבצע פעולות
          </Typography>

          <form onSubmit={handleSubmit}>
    
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
                התחבר  
          </Button>
          </form>
        </div>

        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          onClose={handleSuccessClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MuiAlert elevation={6} variant="filled" severity="success" onClose={handleSuccessClose}>
            התחברות בוצעה בהצלחה!
          </MuiAlert>
        </Snackbar>

        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={handleErrorClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleErrorClose}>
            שגיאה בהתחברות. אנא נסה שוב.
          </MuiAlert>
        </Snackbar>
      </>
    </ThemeProvider>
  
    
    
    </>
)


}

export default Login