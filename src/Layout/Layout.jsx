
import { Outlet,   } from "react-router-dom";
import MenuAppBar from "../components/AppBar_Comp";
// useLocation


export default function Root() {
    // const location = useLocation();


  return (
    // <div className={location.pathname === '/' ? 'main-home' : null}>
    <div>
      <header><MenuAppBar/></header>
        <Outlet />
        {/* <p>our location is: {location.pathname}</p> */}
    </div>
  );
}
