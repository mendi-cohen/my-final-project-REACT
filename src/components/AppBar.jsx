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


//קומפוננטת ראש דף הכניסה

export default function MenuAppBar(props) {

  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userStatus, info] = React.useState("מנותק");
  const [userColor, infoColor] = React.useState("red")

  React.useEffect(() => {
    if (props.isSignInSuccessful) {
      info("מחובר")
      infoColor("white")
      setAuth(true);
    }
    else console.log("User is not signed in!");
  }, [props.isSignInSuccessful]);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    if (event.target.checked) {
      info("מחובר")
      infoColor("white")
    }
    else{
    info("מנותק")
    infoColor("red")
    }
    
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
   
  };

  const handleClose = () => {
    setAnchorEl(null);
  


  };
 

  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" sx={{color: userColor , background:'#4caf50'} }>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          תפריט ראשי   
           מצב : {userStatus}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
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
                <MenuItem onClick={handleClose}>פרופיל</MenuItem>
                <MenuItem onClick={handleClose}>החשבון שלי </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'התנתק' : 'התחבר'}
        />
      </FormGroup>
    </Box>
  );
}