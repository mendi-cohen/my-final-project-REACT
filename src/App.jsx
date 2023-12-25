//css
import './App.css';
import './Css_To_Comp/EnterCard.css';

//comps and modules

import MenuAppBar from './components/AppBar_Comp';
import EnterCard from './components/EnterCard_Comp';
import HeadOfPage from './components/HeadrOfPage_Comp'
import { Button , Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';
import SignIn from './components/SignIn_Comp';
import Login from './components/Login_Comp';








function App() {

  const [SignIn_Or_LogIn_Successful, setSignIn_Or_LogIn_Successful] = useState(false);


    function Success_Signin(){
    console.log("yes the sign-in was successful");
    setSignIn_Or_LogIn_Successful(true);
    
  }
    function Success_Login(){
    console.log("yes the Log-in was successful");
    setSignIn_Or_LogIn_Successful(true);
    
  }


  return (
    <div className="App">
      <header><MenuAppBar isSignInSuccessful = {SignIn_Or_LogIn_Successful}/></header>
      <HeadOfPage/>

      <main><div className="sign-in"> <EnterCard sign_Or_Login_Comp = {<SignIn onSuccess = {Success_Signin}/>}/> </div>
     <div className='log-in'>
      <EnterCard sign_Or_Login_Comp = {<Login onSuccess = {Success_Login}/>}/>
     </div>
      </main>
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
