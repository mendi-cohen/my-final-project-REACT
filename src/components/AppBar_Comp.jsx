import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EnterCard from './EnterCard_Comp';
import Login from './Login_Comp';
import { Alert as MuiAlert } from '@mui/material';
import { Snackbar } from '@mui/material';




//קומפוננטת ראש דף הכניסה

export default function MenuAppBar(props) {

  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userStatus, info] = React.useState("מנותק");
  const [userColor, infoColor] = React.useState("indianred");
  const [login , showLogin] = React.useState(false);
  const [loginSuccess , setloginSuccess] = React.useState(false);
  const [openSuccess, setOpenSuccess] =React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [emailFromLogin, setEmailFromLogin] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userProfile , setProfile] = React.useState(false)

  

  const handleSuccessClose = () => {
    setOpenSuccess(false);
  };
  const handleErrorClose = () => {
    setOpenError(false);
  };

      // התחברות המשתמש 
  
      const handleChange = (event) => {
        if (!loginSuccess) {
          showLogin(true);
        }
        if (loginSuccess) {
          console.log('Calling handleSwich with email:', emailFromLogin);
          handleSwich(emailFromLogin);
        }
      };


  // אישור ההתחברות 

  function Success_Login(email, name) {
    console.log("yes the Log-in was successful");
    setloginSuccess(true);
    setOpenSuccess(true);
    setAuth(true);
    info("מחובר");
    infoColor("white");
    showLogin(false);
    console.log("User email:", email);
    console.log("username:", name);
    setEmailFromLogin(email);
    setUserName(`! ${name} שלום לך  `); 
  }
  
 // מחיקת משתמש מחובר 

  const handleSwich = async (email) => {
    try {
      const response = await fetch(`http://localhost:3003/loginOff/${email}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log(email);
       
        setloginSuccess(false);
        showLogin(false);
        setAuth(false);
        info('מנותק');
        infoColor("indianred");
        setOpenError(true);
       
      } else {
        setOpenError(true);
      }
    } catch (error) {
      setOpenError(true);
    }
  };


  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
   
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const profile = ()=>{
    setProfile(true);
  }
 

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" sx={{ background:'#4caf50'} }>
        <Toolbar>
        <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          className={auth ? '' : 'blinking-text'}
          label={auth ? 'התנתק' : 'התחבר'}
       
        />
      </FormGroup>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 ,color: userColor }}> 
  {auth ? userName :` מצב:  ${userStatus} `} 
</Typography>
          
          {auth && (
            <div>
             
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick= {handleMenu}
                color="inherit"
              >
              <div>{emailFromLogin}</div>

                <AccountCircle />
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={profile}>פרופיל</MenuItem>
              </Menu>
             
            </div>
          )}
        </Toolbar>
      </AppBar>
   
      {login ? 
      <div className="log-in"><EnterCard components={<Login onSuccess={(email , name) => Success_Login(email , name)} />} restartLog = {showLogin} />
      </div>
      :  null
     }

     
    </Box>

<Snackbar
open={openSuccess}
autoHideDuration={6000}
onClose={handleSuccessClose}
anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
>
<MuiAlert elevation={6} variant="filled" severity="success" onClose={handleSuccessClose}>
 ! התחברות בוצעה בהצלחה
</MuiAlert>
</Snackbar>

<Snackbar
open={openError}
autoHideDuration={6000}
onClose={handleErrorClose}
anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
<MuiAlert elevation={6} variant="filled" severity="error" onClose={handleErrorClose}>
   התנתקת מהחשבון ! 
</MuiAlert>
</Snackbar>
{userProfile &&(<div className='profile'> <EnterCard restartLog = {setProfile}/> </div>)}
</>
  );
  
}