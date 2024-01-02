import { useState } from "react";
import SignIn from '../components/SignIn_Comp';
import EnterCard from '../components/EnterCard_Comp';
import { Button, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom";
import MenuAppBar from "../components/AppBar_Comp";
import HeadOfPage from '../components/HeadrOfPage_Comp';



function Home(){
    const [SignIn_Successful, setSignIn_Successful] = useState(false);
    function Success_Signin(){
        console.log("yes the sign-in was successful");
        setSignIn_Successful(true);
      }
    return(
        <div className="main-home">
        <header><MenuAppBar isSignInSuccessful = {SignIn_Successful}/></header>
        <HeadOfPage/>
        <div className="sign-in">
      <EnterCard sign_Or_Login_Comp = {<SignIn onSuccess = {Success_Signin}/>}/>
      </div>
            <div>
            <Typography>
              <Link to={`about`}> 
            <Button
              className='enter-Button'
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ExitToAppIcon />}
              sx={{ backgroundColor: 'rgb(33, 187, 130)', fontSize: "36px", borderRadius: '50% 5%', transition: "ease-in-out 0.6s" }}>
              כניסה
            </Button>
        </Link>
        </Typography>
            </div>
      </div>

    )
}

export default Home