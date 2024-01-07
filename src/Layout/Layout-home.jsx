
import { Outlet,   } from "react-router-dom";
import MenuAppBar from "../components/AppBar_Comp";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../components/Theme_Comp'; 



export default function Root() {
 


  return (
    <ThemeProvider theme={Theme}>
    <div> 

      <header><MenuAppBar/></header>
        <Outlet />

    </div>
   </ThemeProvider>

  );

  }



// import { useLocation } from "react-router-dom";


   // const location = useLocation();

    // {/* <div className={location.pathname === '/' ? 'main-home' : null}> */}
      //  {/* <p>our location is: {location.pathname}</p> */}

  