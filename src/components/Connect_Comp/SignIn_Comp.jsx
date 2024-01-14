///ייבואים

import React, { useState } from "react";
import {
  TextField,
  Button,
  ThemeProvider,
  createTheme,
  Typography,
} from "@material-ui/core/";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

/// עיצוב

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Noto Sans Hebrew", "sans-serif"].join(","),
  },
});

function SignIn(props) {
  ///סטייטים
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  ///פונקציות

  const handleSuccessClose = () => {
    setOpenSuccess(false);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3003/postuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email }),
      });

      if (response.ok) {
        setOpenSuccess(true);
        setUsername("");
        setEmail("");
      } else {
        setOpenError(true);
      }
    } catch (error) {
      setOpenError(true);
    }
  };

  /// רינדור הקומפוננטה

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="signIn">
          <Typography color="primary" variant="h6">
            שלום לך גולש יקר
            <br />
            הרשם כדי לבצע פעולות
          </Typography>

          <TextField
            id="username"
            label="שם משתמש"
            type="textfield"
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
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            size="large"
          >
            הירשם
          </Button>
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
            הרשמה בוצעה בהצלחה!
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
            שגיאה בהרשמה. אנא נסה שוב.
          </Alert>
        </Snackbar>
      </>
    </ThemeProvider>
  );
}

export default SignIn;
