
import { Outlet,   } from "react-router-dom";
// useLocation


export default function Root() {
    // const location = useLocation();


  return (
    // <div className={location.pathname === '/' ? 'main-home' : null}>
    <div>
        <Outlet />
        {/* <p>our location is: {location.pathname}</p> */}
    </div>
  );
}
