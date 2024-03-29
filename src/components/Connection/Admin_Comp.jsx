//ייבואים

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

///עיצוב

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Noto Sans Hebrew", "sans-serif"].join(","),
  },
});

function Admin(props) {
  ///סטייטים

  const [password, setpassword] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const EnvPassword = process.env.REACT_APP_ADMIN_PASS;
  // const navigate = useNavigate();

  ///פונקציות

  const handleSuccessClose = () => {
    setOpenSuccess(false);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === EnvPassword) {
      setOpenSuccess(true);
      props.success();
    } else {
      setOpenError(true);
    }
  };

  ///רינדור הקומפוננטה

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <div className="login">
            <Typography color="primary" variant="h6">
              שלום הרב הכנס סיסמתך
              <br />
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                id="password"
                label="סיסמא"
                type="password"
                variant="filled"
                fullWidth
                margin="none"
                color="primary"
                value={password}
                autoComplete="new-password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                אמת
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
              ! התחברותך אומתה
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

export default Admin;
