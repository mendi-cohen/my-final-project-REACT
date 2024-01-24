import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">  איך תעדיף לקבל תשובה ?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="email"
        name="radio-buttons-group"
      >
        <FormControlLabel value="email" control={<Radio />} label="אימייל" />
        <FormControlLabel value="sms" control={<Radio />} label="הודעת SMS" />
        <FormControlLabel value="whatsApp" control={<Radio />} label="וואצאפ" />
      </RadioGroup>
    </FormControl>
  );
}
