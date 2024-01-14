///ייבואים

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@material-ui/core";
import SelectText from "../Selection_Comp";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

///סטייטים

const WordFile = () => {
  const [editorValue, setEditorValue] = useState("");
  const [title, setTitle] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  ///פונקציות

  const handleSuccessClose = () => {
    setOpenSuccess(false);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };
  const handleChange = (value) => {
    setEditorValue(value);
  };

  const handleSubjectChange = (selectedSubject) => {
    setTitle(selectedSubject);
  };

  const SaveToDatabase = async () => {
    try {
      const response = await fetch("http://localhost:3003/postuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ editorValue, title }),
      });

      if (response.ok) {
        setOpenSuccess(true);
      } else {
        setOpenError(true);
      }
    } catch (error) {
      setOpenError(true);
    }
  };

  /// רינדור הקומפוננטה

  return (
    <>
      <SelectText onSelect={handleSubjectChange} />

      <div className="text-editor-rtl">
        <ReactQuill theme="snow" value={editorValue} onChange={handleChange} />
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
  );
};

export default WordFile;
