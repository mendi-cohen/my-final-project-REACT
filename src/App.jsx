
import './App.css';
import MenuAppBar from './components/AppBar';
import EnterCard from './components/EnterCard';
import './Css_To_Comp/EnterCard.css';
import HeadOfPage from './components/HeadrOFPage'
import { Button , Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';






function App() {

  const [isSignInSuccessful, setIsSignInSuccessful] = useState(false);


    function Success(){
    console.log("yes the sign-in was successful");
    setIsSignInSuccessful(true);
    
  }


  return (
    <div className="App">
      <header><MenuAppBar isSignInSuccessful = {isSignInSuccessful}/></header>
      <HeadOfPage/>

      <main><div className="sign-in"> <EnterCard yesIsSign_In = {Success}/> </div></main>

      <footer>
        <Typography >
      <Button className='enter-Button' variant="contained" color="primary" size="large" startIcon={<ExitToAppIcon />} 
      sx={{backgroundColor : 'rgb(33, 187, 130)', fontSize:"36px", borderRadius:'50% 5%', transition:"ease-in-out 0.6s"}}>
             כניסה 
            </Button>
            </Typography>
      </footer>
   





  
    </div>
  );
}

export default App;
