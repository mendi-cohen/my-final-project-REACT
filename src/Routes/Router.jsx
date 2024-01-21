import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from '../Layout/Layout';
import ShowUsers from '../components/AdminActions/ShowUsers_Comp';
import ShowLogs from '../components/AdminActions/ShowLogin_Comp';
import EmailForm from '../components/AdminActions/SendEmail_Comp';
import WordFile from '../components/AdminActions/Word_Comp';
import GetArticle from '../components/Lyout_Comp/GetArticle';
import ArticleMenu from '../components/Lyout_Comp/ArticleMenu';



const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutHome/>}>
          <Route path="allUsers" element={<ShowUsers/>}/>
            <Route path="allLogin" element={<ShowLogs/>}/>
            <Route path="sendEmail" element={<EmailForm/>}/>
            <Route path="writeArticel" element={<WordFile/>}/>
            <Route path="ArticleMenu" element={<ArticleMenu/>}/>
            <Route path="ArticleMenu/GetArticle" element={<GetArticle/>}/>
            
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRouter;
