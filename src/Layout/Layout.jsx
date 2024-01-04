
import { Outlet,   } from "react-router-dom";
import MenuAppBar from "../components/AppBar_Comp";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../components/Theme_Comp'; 
// import { useLocation } from "react-router-dom";



export default function Root() {
    // const location = useLocation();


  return (
    <ThemeProvider theme={Theme}>
     {/* <div className={location.pathname === '/' ? 'main-home' : null}> */}
  <div> 
      <header><MenuAppBar/></header>
        <Outlet />
        {/* <p>our location is: {location.pathname}</p> */}
    </div>
   </ThemeProvider>

  );
}
