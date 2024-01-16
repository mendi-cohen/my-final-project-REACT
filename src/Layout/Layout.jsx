
import { Outlet,   } from "react-router-dom";
import MenuAppBar from "../components/Lyout_Comp/AppBar_Comp";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../components/Lyout_Comp/Theme_Comp'; 
import SideBar from '../components/Lyout_Comp/SideBar_Comp';
import UsersBar from "../components/Lyout_Comp/UsersBar_Comp";




export default function Root() {
 


  return (
    <ThemeProvider theme={Theme}>
    <div className="main-home" > 
      <header ><MenuAppBar/></header>
        <div><SideBar/></div>

        <main style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, margin: '0 10px' }}>
            <UsersBar style={{ flex: '0 0 200px', order: 1}} />
           <div style={{  width: '100%'  , height: '100%'}}><Outlet style={{ order: 0, flexGrow: 1 }} /></div> 
          </div>
        </main>

    </div>
   </ThemeProvider>

  );

  }



// import { useLocation } from "react-router-dom";


   // const location = useLocation();

    // {/* <div className={location.pathname === '/' ? 'main-home' : null}> */}
      //  {/* <p>our location is: {location.pathname}</p> */}

  