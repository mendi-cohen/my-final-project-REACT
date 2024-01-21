/// ייבואים

import React from "react";
import {
  TextField,
  Button,
  ThemeProvider,
  createTheme,
  Typography,
} from "@mui/material";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

/// עיצוב

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Noto Sans Hebrew", "sans-serif"].join(","),
  },
});

function Login(props) {
  ///סטייטים

  const [email, setEmail] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  // const navigate = useNavigate();

  /// פונקציות

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
      const response = await fetch(
        `${process.env.REACT_APP_HOST_API}/login?email=${encodedEmail}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { loginName } = data;
        console.log("Name from response:", loginName);
        setOpenSuccess(true);
        setEmail("");
        props.onSuccess(email, loginName);
      } else setOpenError(true);
    } catch (error) {
      setOpenError(true);
    }
  };

  ///רינדור הקוממפוננטה

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <div className="login">
            <Typography color="primary" variant="h6">
              התחבר כדי לבצע פעולות
              <br />
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                התחבר
              </Button>
            </form>
          </div>

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
              התחברות בוצעה בהצלחה!
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
              שגיאה בהתחברות. אנא נסה שוב.
            </Alert>
          </Snackbar>
        </>
      </ThemeProvider>
    </>
  );
}

export default Login;
