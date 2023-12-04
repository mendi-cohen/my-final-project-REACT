import { Typography , createTheme,ThemeProvider } from '@mui/material';
import '../Css_To_Comp/HeadOfPage.css'

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
            <Typography >
              <div className="textofheader"> <h1>  ברוכים הבאים לאתר הרבנות יד רמב"ם </h1>  </div>
              </Typography>

    </ThemeProvider>

  )

}

export default HeadOfPage