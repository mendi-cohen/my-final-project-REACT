
import SignIn from '../components/SignIn_Comp';
import EnterCard from '../components/EnterCard_Comp';
import { Button, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom";
import HeadOfPage from '../components/HeadrOfPage_Comp';



function Home(){
    return(
        <div className="main-home">

        <HeadOfPage/>
        <div className="sign-in">
      <EnterCard sign_Or_Login_Comp = {<SignIn/>}/>
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