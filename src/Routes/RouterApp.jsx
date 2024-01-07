import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from '../Layout/Layout-home';
import Home from '../Pages/Home';
import ShowUsers from '../components/ShowUsers_Comp';
import ShowLogs from '../components/ShowLogin_Comp';
import LayoutAbout from '../Layout/Layout-about'

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutHome/>}>
          <Route index  element={<Home/>} />
         
          <Route path='/about' element ={<LayoutAbout/>}>
            <Route path="allUsers" element={<ShowUsers/>}/>
            <Route path="allLogin" element={<ShowLogs/>}/>
        </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRouter;
