import { Typography , createTheme,ThemeProvider } from '@mui/material';


const theme = createTheme({
    palette: {
      primary: {
        main: '#4caf50',
      },
    },
    typography: {
      fontFamily: ['Tinos', 'serif'].join(','), 
    },
  });

function HeadOfPage(){



  return(
<ThemeProvider theme={theme}>
  <Typography variant="h3" className="textofheader">
    ברוכים הבאים לאתר הרבנות יד רמב"ם
  </Typography>
</ThemeProvider>


  )

}

export default HeadOfPage