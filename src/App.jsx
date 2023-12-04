
import './App.css';
import MenuAppBar from './components/AppBar';
import EnterCard from './components/EnterCard';
import './Css_To_Comp/EnterCard.css';
import HeadOfPage from './components/HeadrOFPage'
import { Button , Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';






function App() {
  return (
    <div className="App">
      <header><MenuAppBar/></header>
      <HeadOfPage/>

      <main><div className="sign-in"> <EnterCard/> </div></main>

      <footer>
        <Typography >
      <Button className='enter-Button' variant="contained" color="primary" size="large" startIcon={<ExitToAppIcon />} 
      sx={{backgroundColor : 'rgb(33, 187, 130)', fontSize:"36px", borderRadius:'30%'}}>
             כניסה 
            </Button>
            </Typography>
      </footer>
   





  
    </div>
  );
}

export default App;
