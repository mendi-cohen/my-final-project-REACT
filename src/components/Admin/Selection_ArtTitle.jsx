/// ייבואים

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

/// עיצוב


const currencies = [
  {
    value: "בחר נושא",
    label: "בחר נושא",
  },
  {
    value: "השקפה",
    label: "השקפה",
  },
  {
    value: "פרשת שבוע",
    label: "פרשת שבוע",
  },
  {
    value: "הלכה",
    label: "הלכה",
  },
  {
    value: "ענייני דיומא",
    label: "ענייני דיומא",
  },
];

const SelectText = ({ onSelect }) => {
  /// סטייטים

  const [selectedValue, setSelectedValue] = useState(currencies[0].value);

  ///פונקציות

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedValue(selected);
    onSelect(selected);
  };

  /// רינדור הקומפוננטה

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-select-currency-native"
          select
          label="סוג המאמר"
          SelectProps={{
            native: true,
          }}
          variant="filled"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div></div>
    </Box>
  );
};

export default SelectText;
