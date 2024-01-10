import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from '../Layout/Layout-home';
import Home from '../Pages/Home';
import ShowUsers from '../components/ShowUsers_Comp';
import ShowLogs from '../components/ShowLogin_Comp';
import EmailForm from '../components/SendEmail_Comp';

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutHome/>}>
          <Route index  element={<Home/>} />
          <Route path="allUsers" element={<ShowUsers/>}/>
            <Route path="allLogin" element={<ShowLogs/>}/>
            <Route path="sendEmail" element={<EmailForm/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRouter;
