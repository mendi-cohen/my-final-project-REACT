
import { Outlet} from "react-router-dom";
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';


export default function Root() {
  return (
<>
      <div >
        <Typography>
        <Link to='allUsers'>

            <Button
              className="enter-Button"
              variant="contained"
              color="primary"
              size="large"
            
              sx={{
                backgroundColor: "rgb(33, 187, 130)",
                fontSize: "36px",
                borderRadius: "50% 5%",
                transition: "ease-in-out 0.6s",
                zIndex:"-2"
              }}
            >
              הצג רשומים
            </Button>
          </Link>
        <Link to='allLogin'>

            <Button
              className="enter-Button"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "rgb(33, 187, 130)",
                fontSize: "36px",
                borderRadius: "50% 5%",
                transition: "ease-in-out 0.6s",
                zIndex:"-2"
              }}
            >
              הצג מחוברים
            </Button>
          </Link>
        <Link to='/'>

            <Button
              className="enter-Button"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "rgb(33, 187, 130)",
                fontSize: "36px",
                borderRadius: "50% 5%",
                transition: "ease-in-out 0.6s",
                zIndex:"-2"
              }}
            >
            חזור לדף הבית
            </Button>
          </Link>
        </Typography>
      </div>

    <div> 
        <Outlet />
    </div>
    </>
  );
  }



// import { useLocation } from "react-router-dom";


   // const location = useLocation();

    // {/* <div className={location.pathname === '/' ? 'main-home' : null}> */}
      //  {/* <p>our location is: {location.pathname}</p> */}

  