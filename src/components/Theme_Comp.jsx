
// theme.js
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: ['Noto Sans Hebrew', 'sans-serif'].join(','),
  },
});

export default Theme;
