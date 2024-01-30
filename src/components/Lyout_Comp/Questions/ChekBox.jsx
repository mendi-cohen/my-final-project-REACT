// CheckBox.jsx
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

const CheckBox = ({ onSelectionChange }) => {
  const [selectedValue, setSelectedValue] = useState('email');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleChange = (event) => {
    const selected = event.target.value;
    setSelectedValue(selected);
    setAdditionalInfo('');
    setValidationError('');

    if (onSelectionChange) {
      onSelectionChange(selected, '');
    }
  };

  const handleAdditionalInfoChange = (event) => {
    const value = event.target.value;
    setAdditionalInfo(value);
    setValidationError('');

    if (selectedValue === 'email') {
      // בדיקת תקינות אימייל
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setValidationError('אנא הזן כתובת אימייל תקינה');
      }
    } else if (selectedValue === 'whatsApp') {
      // בדיקת תקינות מספר טלפון
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        setValidationError('אנא הזן מספר טלפון חוקי (10 ספרות בלבד)');
      }
    }

    if (onSelectionChange) {
      onSelectionChange(selectedValue, value);
    }
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">איך תעדיף לקבל תשובה?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={selectedValue}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        <FormControlLabel value="email" control={<Radio />} label="אימייל" />
        <FormControlLabel value="whatsApp" control={<Radio />} label="וואצאפ" />
      </RadioGroup>
      
      {(selectedValue === 'email' || selectedValue === 'whatsApp') && (
        <TextField
          label={selectedValue === 'email' ? 'כתובת אימייל' : 'מספר טלפון'}
          variant="outlined"
          required
          value={additionalInfo}
          onChange={handleAdditionalInfoChange}
          error={!!validationError}
          helperText={validationError}
        />
      )}
    </FormControl>
  );
};

export default CheckBox;
