import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import  { useState } from 'react';

export default function Chekbox({ onSelectionChange }) {
  const [selectedValue, setSelectedValue] = useState('email');

  const handleChange = (event) => {
    const selected = event.target.value;
    setSelectedValue(selected);

    if (onSelectionChange) {
      onSelectionChange(selected);
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
        <FormControlLabel value="sms" control={<Radio />} label="הודעת SMS" />
        <FormControlLabel value="whatsApp" control={<Radio />} label="וואצאפ" />
      </RadioGroup>
    </FormControl>
  );
}

