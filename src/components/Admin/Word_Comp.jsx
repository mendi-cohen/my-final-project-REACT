import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@mui/material";
import SelectText from "../Lyout_Comp/Selection_Comp";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { ThemeProvider, createTheme } from "@mui/material/";


const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Noto Sans Hebrew", "sans-serif"].join(","),
  },
});

const WordFile = () => {
  const [art_value, setEditorValue] = useState("");
  const [title, setTitle] = useState("");
  const [second_title	 , setSecondTitle]= useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const date = new Date();
  const time= new Date();



  const handleSuccessClose = () => {
    setOpenSuccess(false);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  const handleChange = (value) => {
    setEditorValue(value.toString());
  };

  const handleSubjectChange = (selectedSubject) => {
    setTitle(selectedSubject);
  };
  const Second = (value)=>{
    setSecondTitle(value.target.value);
  }

  const SaveToDatabase = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/Articels/sendArticel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title,second_title	, art_value, date,time }),
      });

      if (response.ok) {
        setOpenSuccess(true);
      } else {
        setOpenError(true);
      }
    } catch (error) {
      setOpenError(true);
      console.log(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <h2> תאריך: </h2>
        <br />
        <SelectText onSelect={handleSubjectChange} />




        <div className="text-editor-rtl" style={{ maxWidth: '90%', margin: '0 auto' ,height: '150px'  }}>
          <input type="text" value={second_title	} onChange={Second} />
          <ReactQuill theme="snow" value={art_value} onChange={handleChange} />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          onClick={SaveToDatabase}
        >
          שמור לבסיס הנתונים
        </Button>

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
            ! המאמר נשלח בהצלחה ויוצג למשתמשים באתר
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
            ! אופס קרתה תקלה המאמר לא נשלח
          </Alert>
        </Snackbar>
      </>
    </ThemeProvider>
  );
};

export default WordFile;
