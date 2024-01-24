import React from 'react';
import TextField from '@mui/material/TextField';
import SelectQuestion from './Selection_2';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckBox from './ChekBox'

export default function SendQuestion() {

  function Selected() {
    console.log("Selected");
  }

  return (
    <Box className="megillah-container" sx={{ textAlign: 'center' }}>
      <h1> שלום לך מה שאלתך ? </h1>
      <SelectQuestion onSelect={Selected}/>
      <TextField
        label="הכנס את שאלתך בבקשה"
        variant="filled"
        fullWidth
        margin="normal"
        multiline
        rows={6} 
        maxRows={20} 
      />

      <div><CheckBox/></div>

      <Button variant="contained" size='large'> שלח שאלתך  </Button>
    </Box>
  );
};
